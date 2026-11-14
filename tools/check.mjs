#!/usr/bin/env node
// 리포 관리자용 검사기. 학습자에게는 필요 없다.
// 검사: 커리큘럼 형식·선수 관계, 국내 근거·글로벌 비교 칸과 출처 키 대조(R10·R11), 미리 만든 시각 자료 없음(R5), 설정 JSON 유효성.
import { readFileSync, existsSync, readdirSync, statSync } from "node:fs";
import { execFileSync } from "node:child_process";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const errors = [];
const read = (p) => readFileSync(join(root, p), "utf8").replace(/\r\n/g, "\n");

const LEVELS = ["Explain", "Apply", "Evaluate", "Develop"];
const FIELDS = ["선수", "핵심 질문", "목표", "만들어 볼 것", "국내 근거", "글로벌 비교"];
const OPTIONAL = ["경계·연결"];
const KEY = /\[([LG]\d+)\]/g;

function parseCurriculum(text) {
  const modules = new Map();
  const problems = [];
  const [body, sourcesPart = ""] = text.split(/^## 출처\s*$/m);
  const sources = new Map();
  for (const line of sourcesPart.split("\n")) {
    const m = line.match(/^- \[([LG]\d+)\] (.+)$/);
    if (!m) continue;
    if (sources.has(m[1])) problems.push(`출처 ${m[1]}: 중복 키`);
    sources.set(m[1], m[2]);
    if (!/https?:\/\/\S+/.test(m[2])) problems.push(`출처 ${m[1]}: URL 없음`);
    if (!/확인 \d{4}-\d{2}-\d{2}/.test(m[2])) problems.push(`출처 ${m[1]}: 「확인 YYYY-MM-DD」 없음`);
  }
  if (sources.size === 0) problems.push("출처 절(## 출처)에 항목 없음");
  const used = new Set();
  const blocks = body.split(/^### /m).slice(1);
  for (const block of blocks) {
    const head = block.split("\n")[0];
    const m = head.match(/^([PKADX]\d+) · (.+)$/);
    if (!m) { problems.push(`모듈 제목 형식 오류: ${head}`); continue; }
    const id = m[1];
    if (modules.has(id)) problems.push(`${id}: 중복 id`);
    const fields = {};
    for (const line of block.split("\n").slice(1)) {
      const f = line.match(/^- ([^:]+): (.+)$/);
      if (f) fields[f[1]] = f[2];
    }
    for (const name of FIELDS) if (!fields[name]) problems.push(`${id}: 「${name}」 없음`);
    for (const name of Object.keys(fields)) if (!FIELDS.includes(name) && !OPTIONAL.includes(name)) problems.push(`${id}: 모르는 칸 「${name}」`);
    for (const name of ["국내 근거", "글로벌 비교", "경계·연결"]) {
      const v = fields[name];
      if (!v) continue;
      const keys = [...v.matchAll(KEY)].map((k) => k[1]);
      if (name === "글로벌 비교" && keys.length === 0) problems.push(`${id}: 글로벌 비교에 출처 키 없음`);
      if (name === "국내 근거" && keys.length === 0 && !v.startsWith("직접 규정 없음")) problems.push(`${id}: 국내 근거에 출처 키 없음(규정이 없으면 「직접 규정 없음 — 실무 연결: …」)`);
      for (const k of keys) { used.add(k); if (!sources.has(k)) problems.push(`${id}: 출처 절에 없는 키 ${k}`); }
    }
    if (fields["목표"] && !LEVELS.some((l) => fields["목표"].startsWith(`${l} — `))) problems.push(`${id}: 목표 수준 형식 오류`);
    const prereq = !fields["선수"] || fields["선수"] === "없음" ? [] : fields["선수"].split(",").map((s) => s.trim());
    modules.set(id, prereq);
  }
  for (const [id, prereq] of modules) for (const p of prereq) if (!modules.has(p)) problems.push(`${id}: 없는 선수 ${p}`);
  const state = new Map();
  const visit = (id, path) => {
    if (state.get(id) === 2 || !modules.has(id)) return;
    if (state.get(id) === 1) { problems.push(`선수 순환: ${[...path, id].join(" → ")}`); return; }
    state.set(id, 1);
    for (const p of modules.get(id)) visit(p, [...path, id]);
    state.set(id, 2);
  };
  for (const id of modules.keys()) visit(id, []);
  for (const k of sources.keys()) if (!used.has(k)) problems.push(`출처 ${k}: 어느 모듈도 가리키지 않음`);
  return { modules, problems };
}

function findVisualAssets(files) {
  const allowedJs = /^tools\/.*\.m?js$/;
  return files.filter((f) => /\.(html?|css|svg|png|jpe?g|gif|webp|avif)$/i.test(f) || (/\.m?js$/i.test(f) && !allowedJs.test(f)));
}

function findTemplateMarkup(name, text) {
  const hits = [];
  for (const m of text.matchAll(/(```|~~~)[\s\S]*?\1/g)) if (/<(!doctype|html|svg|style|canvas|script)\b/i.test(m[0])) hits.push(name);
  return hits;
}

function main() {
  const { modules, problems } = parseCurriculum(read("curriculum/map.md"));
  errors.push(...problems);
  if (modules.size === 0) errors.push("모듈을 찾지 못함");

  const files = execFileSync("git", ["ls-files", "--cached", "--others", "--exclude-standard", "-z"], { cwd: root, encoding: "utf8" }).split("\0").filter(Boolean);
  for (const f of findVisualAssets(files)) errors.push(`미리 만든 시각 자료 금지: ${f}`);
  for (const f of files.filter((x) => x.endsWith(".md") && existsSync(join(root, x)))) for (const n of findTemplateMarkup(f, read(f))) errors.push(`복사용 마크업 금지: ${n}`);

  for (const p of [".claude/settings.json", "learner-template/state.json"]) {
    try { JSON.parse(read(p)); } catch (e) { errors.push(`${p}: JSON 오류 ${e.constructor.name}`); }
  }
  if (!existsSync(join(root, "learner-template/log.md"))) errors.push("learner-template/log.md 없음");
  for (const s of readdirSync(join(root, ".claude/skills"))) {
    if (statSync(join(root, ".claude/skills", s)).isDirectory() && !existsSync(join(root, ".claude/skills", s, "SKILL.md"))) errors.push(`스킬 ${s}: SKILL.md 없음`);
  }
  if (!read(".gitignore").split("\n").includes("learner/")) errors.push(".gitignore에 learner/ 없음");
  // 학습자 산출물 경로 일치: 규칙·설정이 같은 폴더를 가리켜야 권한 창 없이 쓴다.
  const settings = read(".claude/settings.json");
  for (const dir of ["learner/work", "learner/studio"]) {
    if (!settings.includes(`Edit(/${dir}/`)) errors.push(`settings.json 허용 목록에 ${dir} 없음`);
    if (!read("CLAUDE.md").includes(`${dir}/`)) errors.push(`CLAUDE.md에 ${dir}/ 없음`);
  }
  for (const f of ["CLAUDE.md", "README.md", ...readdirSync(join(root, "tutor")).map((x) => `tutor/${x}`)]) {
    if (/learner\/lab\b/.test(read(f))) errors.push(`${f}: 쓰지 않는 경로 learner/lab`);
  }

  if (errors.length) { console.error(errors.map((e) => `FAIL ${e}`).join("\n")); process.exit(1); }
  console.log(`OK 모듈 ${modules.size}개, 파일 ${files.length}개 검사`);
}

main();
