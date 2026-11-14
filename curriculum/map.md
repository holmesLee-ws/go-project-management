# 커리큘럼 지도

큰 윤곽만 둔다. 강의 내용은 여기 없다. 튜터가 세션마다 학습자의 수준·목표·실제 프로젝트에 맞춰 조사하고 만든다.

- 기본 순서는 P → K → A → D → X다. 선수 관계만 지키면 학습자의 목표에 맞춰 순서를 바꿔도 된다.
- 목표 수준은 그 모듈을 마쳤다고 볼 최소 수준이다. 수준의 뜻은 [tutor/assessment.md](../tutor/assessment.md)에 있다.
- 「국내 근거」는 그 모듈의 상황을 세울 한국 제도, 「글로벌 비교」는 비교 질문에 쓸 국제 기준이다. `[L1]`·`[G1]` 같은 키는 맨 아래 출처 절을 가리킨다. 조문은 확인 시점의 것이므로 세션에서 말하기 전에 [근거 규칙](../tutor/sources.md)대로 다시 확인한다.
- 「경계·연결」은 다른 go-* 영역과 겹치는 부분이다. 그 줄을 넘는 내용은 깊게 다루지 않는다.
- 모듈 id는 진도 기록의 키다. 바꾸면 `learner/state.json`이 깨지므로, 고칠 때는 새 id를 만든다.
- `node tools/check.mjs`로 형식·선수 관계·출처 키를 검사한다(리포 관리자용, 학습자에게는 필요 없다).

## P · 프로젝트의 기초

### P1 · 프로젝트란 무엇이고 왜 어긋나는가
- 선수: 없음
- 핵심 질문: 같은 팀이 하는 일인데, 어떤 일은 프로젝트로 관리하고 어떤 일은 운영으로 두는가?
- 목표: Explain — 프로젝트·운영·프로그램을 구분하고, 실제 실패 사례에서 어긋난 제약(범위·일정·원가·품질)을 짚는다.
- 만들어 볼 것: 내가 겪은 프로젝트 하나의 「처음 약속 vs 실제 결과」 한 장
- 국내 근거: 직접 규정 없음 — 실무 연결: 소프트웨어 진흥법 제2조의 「소프트웨어사업」·도급 정의, KS A ISO 21502의 프로젝트 정의 [L1][L16]
- 글로벌 비교: PMBOK Guide 8판의 프로젝트·운영 구분 [G1], ISO 21502:2020 [G8]

### P2 · 비즈니스 케이스와 착수
- 선수: P1
- 핵심 질문: 이 프로젝트를 왜 하는지, 무엇이 되면 성공인지 누가 언제 정하는가?
- 목표: Apply — 모호한 지시를 목표·성공 기준·제약·가정이 있는 착수 문서(헌장)로 바꾼다.
- 만들어 볼 것: 내 프로젝트의 한 쪽짜리 프로젝트 헌장
- 국내 근거: 직접 규정 없음 — 실무 연결: 공공 정보화사업은 기획·예산 단계에서 과업 범위를 명확히 해야 한다(소프트웨어 진흥법 제44조제1항) [L1]
- 글로벌 비교: PRINCE2 7의 Business case 실무와 「지속적 사업 정당성」 원칙 [G6], PMBOK Guide 8판 [G1]
- 경계·연결: 투자 결정의 재무 평가(NPV·IRR)는 go-finance. 여기서는 비즈니스 케이스의 구조와 착수 판단만

### P3 · 거버넌스와 역할
- 선수: P1
- 핵심 질문: 결정이 막혔을 때 누가 결정하고, 발주자·수행사·감리·하도급사는 서로에게 무엇을 책임지는가?
- 목표: Apply — 프로젝트 조직도와 의사결정·보고 경로를 그리고, 역할 충돌을 찾아낸다.
- 만들어 볼 것: 내 프로젝트의 책임 배정표(RACI)와 의사결정 경로(감리·사업관리 위탁이 있는 공공 사업이면 그 자리까지)
- 국내 근거: 전자정부법 제57조(정보시스템 감리)·제64조의2(전자정부사업관리의 위탁) [L3], 건설기술 진흥법 제39조(건설사업관리 등의 시행) [L7] — 발주자·수행사·감리·사업관리자의 삼자 구도
- 글로벌 비교: PRINCE2 7의 프로젝트 이사회와 역할 [G6], GovS 002 v2.1의 거버넌스와 역할 [G18]
- 경계·연결: 전사 내부통제·위원회 체계는 go-control, 리더십·갈등은 go-leadership-negotiation

### P4 · 생애주기와 개발 방식 고르기
- 선수: P2
- 핵심 질문: 요구가 얼마나 확실한지에 따라 계획을 언제, 얼마나 자세히 세워야 하는가?
- 목표: Evaluate — 예측형·적응형·하이브리드 중 프로젝트 조건에 맞는 방식을 근거와 함께 고른다.
- 만들어 볼 것: 두 프로젝트의 개발 방식 선택 결정 기록(하나는 분석·설계를 분리 발주할 수 있는 공공 사업으로)
- 국내 근거: 소프트웨어 진흥법 제44조제3항(분석·설계사업 분리 발주), 제45조(적정 사업기간 산정) [L1]
- 글로벌 비교: PMBOK Guide 8판의 개발 방식·생애주기 [G1], PMI Agile Practice Guide 2판 [G2]

### P5 · 기준과 방법론의 지도
- 선수: P4
- 핵심 질문: PMBOK Guide·PRINCE2·ISO 21502는 같은 일을 어떻게 다르게 정리했고, 우리 조직에는 무엇이 맞는가?
- 목표: Evaluate — 세 기준의 구조 차이를 비교하고, 조직의 프로젝트 관리 방식(프로그램·포트폴리오와의 관계 포함)에 무엇을 가져올지 정한다.
- 만들어 볼 것: KS로 채택된 ISO 21502를 기준 열로 둔 우리 조직 방식 비교표와 도입할 것 세 가지
- 국내 근거: KS A ISO 21502(프로젝트 관리 가이던스), KS A ISO 21503·21504(프로그램·포트폴리오 관리) [L16][L21]
- 글로벌 비교: PMBOK Guide 8판 [G1], PRINCE2 7 [G6], ISO 21502:2020 [G8]
- 경계·연결: 포트폴리오의 전략 정렬·자원 배분은 go-strategy, IT 거버넌스(COBIT 등)는 go-mis

## K · 계획과 통제

### K1 · 범위와 WBS
- 선수: P2
- 핵심 질문: 「다 해 주세요」를 어떻게 빠짐없이, 겹침 없이 나누는가?
- 목표: Apply — 산출물 중심 WBS를 만들고 범위 기준선과 범위 밖 항목을 정한다.
- 만들어 볼 것: 내 프로젝트의 WBS(3수준)와 WBS 사전 일부, 공공 사업이면 제안요청서 상세 요구사항과의 대조표
- 국내 근거: 소프트웨어 진흥법 제44조제2항(요구사항 상세 작성·공개), 소프트웨어사업 계약 및 관리감독에 관한 지침 제11조·별표 2(상세 요구사항 분석·적용기준) [L1][L13], KS A ISO 21511(작업 분류 체계) [L17]
- 글로벌 비교: ISO 21511:2018과 2판 발행 예정 [G9], PMBOK Guide 8판의 범위 성과 영역 [G1]
- 경계·연결: 제품 요구사항·우선순위(PRD)는 go-product, 소프트웨어 요구공학은 go-develop

### K2 · 일정과 주 공정
- 선수: K1
- 핵심 질문: 어떤 작업이 하루 밀리면 끝나는 날이 밀리고, 어떤 작업은 밀려도 괜찮은가?
- 목표: Apply — 작업·의존 관계로 네트워크를 그리고 주 공정과 여유 시간을 계산해 단축 방안을 판단한다.
- 만들어 볼 것: 내 WBS로 만든 일정표와 주 공정 표시, 주 공정이 밀릴 때 지체상금 노출을 적은 메모
- 국내 근거: 국가를 당사자로 하는 계약에 관한 법률 제26조(지체상금) [L5], 소프트웨어 진흥법 제45조(적정 사업기간 산정) [L1]
- 글로벌 비교: PMI Practice Standard for Scheduling 3판 [G4], PMBOK Guide 8판의 일정 성과 영역 [G1]

### K3 · 추정
- 선수: K1
- 핵심 질문: 아무도 정확히 모르는 기간과 비용을 어떻게 근거 있게, 범위로 말하는가?
- 목표: Evaluate — 유사·모수·상향식·3점 추정 중 상황에 맞는 기법을 고르고 불확실성을 범위로 표현한다.
- 만들어 볼 것: 같은 범위를 두 기법으로 추정하고(하나는 SW사업 대가산정 가이드의 방식) 차이를 설명한 기록
- 국내 근거: SW사업 대가산정 가이드 2025년 개정판(기능점수 등 산정 방식) [L14], 소프트웨어 진흥법 제46조(적정 대가 지급 등)·시행령 제38조(소프트웨어기술자의 인건비 기준) [L1][L2]
- 글로벌 비교: PMBOK Guide 8판의 추정 [G1]
- 경계·연결: 개발팀의 상대 추정·작업 추정 기법은 go-develop, 발주 제도로서의 대가 산정은 go-mis. 여기서는 수행사 PM이 추정 근거로 읽는 법

### K4 · 원가·예산과 획득가치
- 선수: K2, K3
- 핵심 질문: 돈을 절반 썼고 일정도 절반 지났다면, 프로젝트는 정상인가?
- 목표: Apply — 원가 기준선을 세우고 획득가치(PV·EV·AC)로 일정·원가 성과를 진단한다.
- 만들어 볼 것: 내 프로젝트 중간 시점의 획득가치 진단 한 장(물가변동 조정 대상인 비용 항목 표시)
- 국내 근거: KS A ISO 21508(획득 가치 관리) [L18], 국가를 당사자로 하는 계약에 관한 법률 제19조(물가변동 등에 따른 계약금액 조정) [L5]
- 글로벌 비교: ISO 21508:2026 [G10], PMI The Standard for Earned Value Management [G3]; 선택 비교로 EIA-748-E [G14], FAR Subpart 34.2 [G16]
- 경계·연결: 원가의 회계 처리·진행기준 수익 인식은 go-accounting

### K5 · 품질과 인수 기준
- 선수: K1
- 핵심 질문: 「잘 만들었다」를 누가, 무엇으로, 언제 확인하는가?
- 목표: Apply — 산출물별 인수 기준과 품질 검토 방법을 정하고 품질 계획에 넣는다.
- 만들어 볼 것: 핵심 산출물 세 개의 인수 기준과 검토 방법 표(공공이면 검사·감리 점검과 연결)
- 국내 근거: KS Q ISO 10006(프로젝트 품질경영 가이드라인) [L20], 소프트웨어 진흥법 제56조(소프트웨어사업 품질관리 등) [L1], 건설기술 진흥법 제55조(건설공사의 품질관리) [L7]
- 글로벌 비교: ISO 9001:2026 [G12], PRINCE2 7의 Quality 실무 [G6]
- 경계·연결: 품질경영 체계(ISO 9001 인증 운영·6시그마)는 go-operations

### K6 · 위험과 이슈
- 선수: K2
- 핵심 질문: 아직 일어나지 않은 일을 어떻게 관리하고, 일어난 일(이슈)과는 어떻게 다르게 다루는가?
- 목표: Apply — 위험을 원인·사건·결과로 쓰고, 확률·영향으로 순위를 매겨 대응과 책임자를 정한다.
- 만들어 볼 것: 내 프로젝트의 위험대장 10건(과업 변경 미확정·하도급 승인 지연 같은 계약·제도 위험 포함)
- 국내 근거: KS A IEC 62198(프로젝트 리스크 관리 적용 지침) [L19]
- 글로벌 비교: ISO 31000:2018과 개정 진행 [G11], PMI Risk Management in Portfolios, Programs, and Projects: A Practice Guide(2024) [G5]
- 경계·연결: 전사 위험관리(ERM)·내부통제는 go-control, 보안 위험평가는 go-security

### K7 · 이해관계자와 의사소통
- 선수: P3
- 핵심 질문: 프로젝트를 흔들 수 있는 사람은 누구이고, 각자에게 무엇을 언제 알려야 하는가?
- 목표: Apply — 이해관계자를 영향·관심으로 분석해 참여 전략과 보고 체계를 정한다.
- 만들어 볼 것: 이해관계자 등록부와 보고 일정표
- 국내 근거: 직접 규정 없음 — 실무 연결: 과업심의위원회에 사업자가 개최를 요청할 수 있다(소프트웨어 진흥법 제50조제3항), 감리 착수·종료 회의(전자정부법 시행령 제72조) [L1][L4]
- 글로벌 비교: PMBOK Guide 8판의 이해관계자 성과 영역 [G1], GovS 002 v2.1 [G18]
- 경계·연결: 협상·설득·갈등 관리 기법은 go-leadership-negotiation

### K8 · 자원과 팀
- 선수: K2
- 핵심 질문: 사람이 동시에 여러 일에 걸려 있을 때 일정은 어떻게 무너지는가?
- 목표: Apply — 자원 배정과 과부하를 찾고 평준화·조정 방안을 고른다.
- 만들어 볼 것: 내 일정의 인력 배정표와 과부하 해소안(사업수행 장소 조건 반영)
- 국내 근거: 소프트웨어 진흥법 제49조제3항·제4항(사업수행 장소 제안과 보안 요건) [L1], 소프트웨어사업 계약 및 관리감독에 관한 지침 제14조(작업장소) [L13], 행정기관 및 공공기관 정보시스템 구축·운영 지침(작업장소 조항) [L11]
- 글로벌 비교: PMBOK Guide 8판의 자원 성과 영역 [G1]
- 경계·연결: 근로시간·파견과 도급의 구분 같은 노무 판단은 go-hr

### K9 · 변경 통제와 통합
- 선수: K1, K4
- 핵심 질문: 「이것 하나만 더」를 받아들이면 무엇이 바뀌고, 누가 그것을 승인하는가?
- 목표: Evaluate — 변경 요청의 범위·일정·원가 영향을 분석해 승인 여부와 기준선 조정을 근거와 함께 결정한다.
- 만들어 볼 것: 실제 있었던 변경 하나의 변경 요청서와 영향 분석(공공이면 과업심의위원회에 올릴 형태로)
- 국내 근거: 소프트웨어 진흥법 제50조제1항제2호(과업 변경 확정과 계약금액·기간 조정 심의)·시행령 제47조 [L1][L2], 국가를 당사자로 하는 계약에 관한 법률 시행령 제65조(설계변경으로 인한 계약금액의 조정) [L6]
- 글로벌 비교: PRINCE2 7의 Issues 실무(6판의 Change를 대신함) [G6], FIDIC Red Book 2017 Clause 13(13.1 Right to Vary, 13.3 Variation Procedure) [G15]

### K10 · 성과 보고와 종료
- 선수: K4, K6
- 핵심 질문: 프로젝트는 언제 정말 끝난 것이고, 다음 프로젝트에 무엇을 남겨야 하는가?
- 목표: Apply — 상태 보고서를 쓰고 종료 체크리스트·교훈을 실행 가능한 형태로 정리한다.
- 만들어 볼 것: 한 쪽짜리 상태 보고서와 종료 체크리스트(하자담보 기간과 대응 창구 포함), 교훈 세 줄
- 국내 근거: 소프트웨어 진흥법 제60조(소프트웨어사업의 하자담보책임) [L1]
- 글로벌 비교: PRINCE2 7의 종료 프로세스와 「경험에서 학습」 원칙 [G6], GovS 002 v2.1 [G18]

## A · 애자일과 하이브리드

### A1 · 스크럼과 칸반의 작동 원리
- 선수: P4
- 핵심 질문: 계획을 짧게 끊어 자주 고치는 방식은 무엇으로 통제를 대신하는가?
- 목표: Explain — 스크럼의 역할·이벤트·산출물과 칸반의 흐름 원칙을 설명하고 둘의 차이를 말한다.
- 만들어 볼 것: 우리 팀 2주를 스크럼으로 돌린다면의 이벤트 일정
- 국내 근거: 직접 규정 없음 — 실무 연결: 공공 SW사업도 과업 범위를 발주 때 상세히 정하라고 요구하므로(소프트웨어 진흥법 제44조) 스크럼의 「범위는 스프린트마다 정한다」와 부딪힌다 [L1]
- 글로벌 비교: Scrum Guide 2020년 11월판 [G13], PMI Agile Practice Guide 2판 [G2]
- 경계·연결: 스크럼을 조직 운영·제품 발견 방식으로 쓰는 법과 OKR은 go-startup-agile

### A2 · 백로그·추정·릴리스 계획
- 선수: A1, K3
- 핵심 질문: 범위가 계속 바뀌는데 언제 무엇이 나오는지 어떻게 약속하는가?
- 목표: Apply — 백로그를 우선순위화하고 상대 추정·속도로 릴리스 계획을 세운다.
- 만들어 볼 것: 내 프로젝트 기능 10개의 백로그와 릴리스 계획
- 국내 근거: 직접 규정 없음 — 실무 연결: 기능점수로 산정한 대가(SW사업 대가산정 가이드)와 스토리 포인트 속도의 관계 [L14]
- 글로벌 비교: Scrum Guide 2020 [G13], PMI Agile Practice Guide 2판 [G2]
- 경계·연결: 제품 로드맵·우선순위 기법(RICE 등)은 go-product

### A3 · 하이브리드와 테일러링
- 선수: A2, K9
- 핵심 질문: 범위·금액이 고정된 계약 안에서 애자일로 일하면 무엇이 충돌하는가?
- 목표: Evaluate — 계약·조직 제약에 맞춰 예측형과 적응형 요소를 섞는 방식을 설계하고 근거를 댄다.
- 만들어 볼 것: 고정가 공공 SW사업의 하이브리드 운영안(과업심의를 언제 거칠지 포함)
- 국내 근거: 소프트웨어 진흥법 제50조(과업심의위원회, 2027-02-12 시행 개정으로 일정 공정 의무 개최·간소화 신설) [L1], 소프트웨어사업 계약 및 관리감독에 관한 지침 제24~28조(과업심의) [L13]
- 글로벌 비교: PRINCE2 Agile Version 2 [G7], PMBOK Guide 8판의 테일러링 [G1]

## D · 국내 제도와 계약 실무

### D1 · 계약 유형과 위험 배분
- 선수: P3, K3
- 핵심 질문: 총액으로 정할지, 단가로 정할지, 실비로 정할지에 따라 위험은 누구에게 가는가?
- 목표: Evaluate — 총액·단가·실비정산·시간과 자재 계약의 위험 배분을 비교해 상황에 맞는 유형을 고른다.
- 만들어 볼 것: 내 프로젝트에 맞는 계약 유형 선택 메모
- 국내 근거: 민법 제664조(도급의 의의)·제665조(보수의 지급시기) [L22], 국가를 당사자로 하는 계약에 관한 법률 제10조제2항제2호(협상에 의한 낙찰자 결정)·시행령 제43조(협상에 의한 계약체결) [L5][L6], 지방자치단체를 당사자로 하는 계약에 관한 법률 시행령 제43조(협상에 의한 계약체결) [L24], 소프트웨어 진흥법 제49조제1항(국가기관등 소프트웨어사업의 계약 방식) [L1]
- 글로벌 비교: FIDIC Red Book 2017(측정·평가 Clause 12) [G15], FAR Part 34 [G16]
- 경계·연결: 계약법 총론은 go-compliance-and-legal, 수주 측 가격 협상은 go-sales

### D2 · 공공 SW사업의 제안과 계약
- 선수: D1, K1
- 핵심 질문: 제안요청서에서 계약서까지, 수행사가 약속하는 범위는 어디서 확정되는가?
- 목표: Apply — 제안요청서·제안서·기술협상·계약 문서의 관계를 따라가 범위 기준선을 확인한다.
- 만들어 볼 것: 공개된 제안요청서 하나의 요구사항 → WBS 추적표
- 국내 근거: 소프트웨어 진흥법 제44조(과업 범위)·제49조(계약)·제52조(제안서 보상) [L1], 국가를 당사자로 하는 계약에 관한 법률 시행령 제43조 [L6], 소프트웨어사업 계약 및 관리감독에 관한 지침 제11조·별표 2 [L13]
- 글로벌 비교: FAR Part 34 [G16]
- 경계·연결: 제안 전략·공공조달 영업은 go-sales, 발주기관의 사업 기획·대기업 참여 제한·SW 영향평가 같은 발주 제도는 go-mis

### D3 · 과업심의·요구사항 상세화·과업 변경
- 선수: D2, K9
- 핵심 질문: 착수 뒤 늘어난 일은 언제 「원래 범위」이고 언제 「과업 변경」인가?
- 목표: Evaluate — 요구사항 상세화와 과업 변경을 구분하고, 과업 변경 절차와 계약금액 조정 경로를 판단한다.
- 만들어 볼 것: 실제 범위 분쟁 하나의 과업 변경 판단 기록
- 국내 근거: 소프트웨어 진흥법 제50조(과업심의위원회)·시행령 제45~47조 [L1][L2], 공공SW사업 과업심의 가이드(2022.4) [L15], 국가를 당사자로 하는 계약에 관한 법률 제19조·시행령 제65조·제66조 [L5][L6]
- 글로벌 비교: FIDIC Red Book 2017 Clause 13(Variations) [G15], PRINCE2 7의 Issues 실무 [G6]

### D4 · 감리·검사·검수와 하자
- 선수: D2, K5
- 핵심 질문: 「다 됐다」는 수행사의 말은 언제, 누구의 확인으로 계약상 「완료」가 되는가?
- 목표: Apply — 공공(감리·검사)과 민간(도급 계약의 인도·검수·하자담보) 경로를 구분해 검수 계획을 세운다.
- 만들어 볼 것: 내 프로젝트의 검수 계획과 하자 처리 절차
- 국내 근거: 전자정부법 제57조·시행령 제71조(감리 대상)·제72조(감리 업무와 절차) [L3][L4], 정보시스템 감리 기준(행안부고시 제2024-53호) [L12], 국가를 당사자로 하는 계약에 관한 법률 제14조(검사)·시행령 제55조 [L5][L6], 지방자치단체를 당사자로 하는 계약에 관한 법률 제17조(검사)·시행령 제64조 [L23][L24], 소프트웨어 진흥법 제60조(하자담보책임) [L1], 민간 도급은 민법 제667조(수급인의 담보책임)·제670조(담보책임의 존속기간) [L22]
- 글로벌 비교: FAR Part 46(Quality Assurance, 46.5 Acceptance) [G17], FIDIC Red Book 2017 9.1(Tests on Completion)·10.1(Taking Over) [G15]
- 경계·연결: 감리의 보안 점검 항목은 go-security

### D5 · 하도급 관리
- 선수: D1
- 핵심 질문: 일부를 다른 회사에 맡기면 원 수행사에게 어떤 의무가 새로 생기는가?
- 목표: Apply — 하도급 계약의 서면·대금·검사 의무와 공공 SW사업의 하도급 제한을 프로젝트 계획에 반영한다.
- 만들어 볼 것: 하도급 착수 전 확인 체크리스트
- 국내 근거: 소프트웨어 진흥법 제51조(하도급 제한 등)·시행령 제48조 [L1][L2], 소프트웨어사업 계약 및 관리감독에 관한 지침 제19~23조(하도급 승인) [L13], 하도급거래 공정화에 관한 법률 제3조(서면 발급)·제9조(검사)·제13조(대금 지급) [L10], 건설산업기본법 제29조(하도급 제한)·제34조(하도급대금의 지급) [L9]
- 글로벌 비교: FIDIC Red Book 2017 5.1(하도급)·5.2(지명 하도급자) [G15]
- 경계·연결: 하도급법의 공정거래 규제·제재 총론은 go-compliance-and-legal, 협력사 조달 관리 일반은 go-scm

### D6 · 지체·계약금액 조정·분쟁 예방
- 선수: D3, K2
- 핵심 질문: 일정이 밀렸을 때, 누구 책임인지와 얼마를 물어야 하는지는 무엇으로 정해지는가?
- 목표: Evaluate — 지체 책임·계약금액 조정 사유를 구분하고, 분쟁을 막는 기록(회의록·변경 이력)을 설계한다.
- 만들어 볼 것: 지연 상황 하나의 책임 분석과 증빙 목록
- 국내 근거: 국가를 당사자로 하는 계약에 관한 법률 제26조(지체상금)·시행령 제74조, 시행령 제64조(물가변동)·제66조(기타 계약내용 변경) [L5][L6], 지자체 계약은 지방자치단체를 당사자로 하는 계약에 관한 법률 제30조(지연배상금 등 — 「지체상금」이 아닌 이름)·제22조(계약금액의 조정) [L23], 건설산업기본법 제36조(설계변경 등에 따른 하도급대금의 조정) [L9]
- 글로벌 비교: FIDIC Red Book 2017의 Delay Damages(1.1 정의)와 변경·조정 조항 [G15]
- 경계·연결: 분쟁 해결 절차·소송 대응은 go-compliance-and-legal

### D7 · 건설사업관리 — 비교 사례
- 선수: D4
- 핵심 질문: 발주자를 대신해 관리하는 제3자는 공공 SW 감리와 무엇이 같고 다른가?
- 목표: Explain — 건설사업관리의 역할과 범위를 설명하고 정보시스템 감리와 비교한다.
- 만들어 볼 것: 건설사업관리 vs 정보시스템 감리 비교표
- 국내 근거: 건설기술 진흥법 제2조(정의)·제39조(건설사업관리 등의 시행)·시행령 제55조, 시행령 제75조(설계의 경제성등 검토) [L7][L8], 건설산업기본법 제2조(정의) [L9], 전자정부법 제57조 [L3]
- 글로벌 비교: FIDIC Red Book 2017의 Engineer 역할 [G15]
- 경계·연결: 건설 현장 안전·중대재해는 go-operations

## X · 졸업 프로젝트

### X1 · 내 프로젝트의 관리 산출물 묶음
- 선수: K10, A3, D4
- 핵심 질문: 배운 것을 내 실제 프로젝트에 회의에 들고 갈 수준으로 쓸 수 있는가?
- 목표: Develop — 서로 맞물리는 계획서·WBS·일정·위험대장·검수 계획을 국내 제도 근거와 함께 만든다.
- 만들어 볼 것: 학습자의 실제 프로젝트(이름·금액을 가린 것)의 관리 산출물 묶음
- 국내 근거: 학습자 프로젝트에 맞는 국내 근거를 고른다 — 예: 공공이면 소프트웨어 진흥법 제50조·국가계약법 제14조 [L1][L5]
- 글로벌 비교: ISO 21502:2020 [G8], PMBOK Guide 8판 [G1]

## 이 지도에 넣지 않은 것

프로그램·포트폴리오 관리의 깊은 운영, 특정 산업(제약·방산·플랜트)의 전용 제도, 자격시험(PMP 등) 대비는 다루지 않는다. 학습자가 원하면 튜터가 선택 모듈로 더한다. 선택 모듈 id는 `E`로 시작하고 `learner/state.json`에만 둔다.

## 출처

법령은 국가법령정보센터(law.go.kr)가 2026-11-14 점검 중이어서 국회 법률정보시스템 현행본으로 확인했다. 「시행 예정」은 공포됐지만 아직 시행되지 않은 개정이다. 원문이 유료인 국제 표준은 발행처 페이지로 이름·판·연도만 확인했다.

### 국내

- [L1] 소프트웨어 진흥법 — 현행 법률 제20476호(시행 2025-04-23). 시행 예정: 법률 제21865호(시행 2027-02-12, 제50조 과업심의위원회 개정). https://likms.assembly.go.kr/law/lawsLawtInqyDetl1010.do?genActiontypeCd=2ACT1010&genDoctreattypeCd=DOCT2041&cachePreid=ALL&viewGb=PROM&contSid=0083&contId=1987120400000006 (확인 2026-11-14)
- [L2] 소프트웨어 진흥법 시행령 — 대통령령 제36338호(시행 2026-06-03). https://likms.assembly.go.kr/law/lawsLawtInqyDetl1010.do?genActiontypeCd=2ACT1010&genDoctreattypeCd=DOCT2041&cachePreid=ALL&viewGb=PROM&contSid=0069&contId=1988102000000001 (확인 2026-11-14)
- [L3] 전자정부법 — 법률 제21394호(시행 2026-08-28). https://likms.assembly.go.kr/law/lawsLawtInqyDetl1010.do?genActiontypeCd=2ACT1010&genDoctreattypeCd=DOCT2041&cachePreid=ALL&viewGb=PROM&contSid=0073&contId=2001032800000003 (확인 2026-11-14)
- [L4] 전자정부법 시행령 — 대통령령 제36605호(시행 2026-08-28). https://likms.assembly.go.kr/law/lawsLawtInqyDetl1010.do?genActiontypeCd=2ACT1010&genDoctreattypeCd=DOCT2041&cachePreid=ALL&viewGb=PROM&contSid=0165&contId=2001063000000001 (확인 2026-11-14)
- [L5] 국가를 당사자로 하는 계약에 관한 법률 — 법률 제21418호(시행 2026-06-11). https://likms.assembly.go.kr/law/lawsLawtInqyDetl1010.do?genActiontypeCd=2ACT1010&genDoctreattypeCd=DOCT2041&cachePreid=ALL&viewGb=PROM&contSid=0054&contId=1995010500000006 (확인 2026-11-14)
- [L6] 국가를 당사자로 하는 계약에 관한 법률 시행령 — 대통령령 제36338호(시행 2026-06-03). 소관이 재정경제부로 바뀌었다. https://likms.assembly.go.kr/law/lawsLawtInqyDetl1010.do?genActiontypeCd=2ACT1010&genDoctreattypeCd=DOCT2041&cachePreid=ALL&viewGb=PROM&contSid=0343&contId=1995070600000001 (확인 2026-11-14)
- [L7] 건설기술 진흥법 — 법률 제21065호(시행 2025-10-01). https://likms.assembly.go.kr/law/lawsLawtInqyDetl1010.do?genActiontypeCd=2ACT1010&genDoctreattypeCd=DOCT2041&cachePreid=ALL&viewGb=PROM&contSid=0137&contId=1987102400000001 (확인 2026-11-14)
- [L8] 건설기술 진흥법 시행령 — 대통령령 제36404호(시행 2026-06-09). https://likms.assembly.go.kr/law/lawsLawtInqyDetl1010.do?genActiontypeCd=2ACT1010&genDoctreattypeCd=DOCT2041&cachePreid=ALL&viewGb=PROM&contSid=0367&contId=1989050100000001 (확인 2026-11-14)
- [L9] 건설산업기본법 — 법률 제21034호(시행 2025-11-27). 시행 예정: 법률 제21894호(시행 2027-01-01, 제34조·제35조 하도급대금 개정). https://likms.assembly.go.kr/law/lawsLawtInqyDetl1010.do?genActiontypeCd=2ACT1010&genDoctreattypeCd=DOCT2041&cachePreid=ALL&viewGb=PROM&contSid=0187&contId=1958031100000008 (확인 2026-11-14)
- [L10] 하도급거래 공정화에 관한 법률 — 법률 제21857호(시행 2026-10-02). 시행 예정: 법률 제21905호(시행 2027-09-09, 여기서 쓴 조문은 바뀌지 않음). https://likms.assembly.go.kr/law/lawsLawtInqyDetl1010.do?genActiontypeCd=2ACT1010&genDoctreattypeCd=DOCT2041&cachePreid=ALL&viewGb=PROM&contSid=0122&contId=1984123100000007 (확인 2026-11-14)
- [L11] 행정기관 및 공공기관 정보시스템 구축·운영 지침 — 행정안전부고시 제2025-01호. https://www.mois.go.kr/frt/bbs/type001/commonSelectBoardArticle.do?bbsId=BBSMSTR_000000000016&nttId=114850 (확인 2026-11-14)
- [L12] 정보시스템 감리 기준 — 행정안전부고시 제2024-53호. https://www.mois.go.kr/frt/bbs/type001/commonSelectBoardArticle.do?bbsId=BBSMSTR_000000000016&nttId=110444 (확인 2026-11-14)
- [L13] 소프트웨어사업 계약 및 관리감독에 관한 지침 — 과학기술정보통신부고시 제2023-15호. 제6조가 인용하는 시행령 조문은 현행 시행령에서 옮겨졌다(지침 미반영). https://www.sw.or.kr/site/kipa/ex/board/View.do?cbIdx=326&bcIdx=61312&gubun=G (확인 2026-11-14)
- [L14] SW사업 대가산정 가이드 2025년 개정판 — 한국인공지능·소프트웨어산업협회, 2025-08-11 공표(가이드는 권고). https://www.sw.or.kr/site/sw/ex/board/View.do?cbIdx=276&bcIdx=63607 (확인 2026-11-14)
- [L15] 공공SW사업 과업심의 가이드 — 2022년 4월판(이후판 여부 미확인, 가이드는 권고). https://www.swit.or.kr/IS/web/isCbmRefView.jsp?ref_sq=1195 (확인 2026-11-14)
- [L16] KS A ISO 21502 프로젝트, 프로그램 및 포트폴리오 관리 — 프로젝트 관리 가이던스(2024-05-29). https://www.standard.go.kr/KSCI/standardIntro/getStandardSearchList.do?menuId=919&topMenuId=502&upperMenuId=503 (확인 2026-11-14)
- [L17] KS A ISO 21511 프로젝트 및 프로그램 관리를 위한 작업 분류 체계(2024-09-05). https://www.standard.go.kr/KSCI/standardIntro/getStandardSearchList.do?menuId=919&topMenuId=502&upperMenuId=503 (확인 2026-11-14)
- [L18] KS A ISO 21508 프로젝트 및 프로그램 관리의 획득 가치 관리(2024-09-05). https://www.standard.go.kr/KSCI/standardIntro/getStandardSearchList.do?menuId=919&topMenuId=502&upperMenuId=503 (확인 2026-11-14)
- [L19] KS A IEC 62198 프로젝트 리스크 관리 적용 지침(2024-12-18). https://www.standard.go.kr/KSCI/standardIntro/getStandardSearchList.do?menuId=919&topMenuId=502&upperMenuId=503 (확인 2026-11-14)
- [L20] KS Q ISO 10006 품질경영 — 프로젝트의 품질경영을 위한 가이드라인(2024-12-13). https://www.standard.go.kr/KSCI/standardIntro/getStandardSearchList.do?menuId=919&topMenuId=502&upperMenuId=503 (확인 2026-11-14)
- [L22] 민법 — 법률 제21454호(시행 2026-03-17). 제3편 제2장 제9절 도급(제664조~제674조). https://likms.assembly.go.kr/law/lawsLawtInqyDetl1010.do?genActiontypeCd=2ACT1010&genDoctreattypeCd=DOCT2041&cachePreid=ALL&viewGb=PROM&contSid=0079&contId=1958022200000001 (확인 2026-11-14)
- [L23] 지방자치단체를 당사자로 하는 계약에 관한 법률 — 법률 제22081호(시행 2026-10-20). 지체 배상을 「지연배상금」이라 부른다. https://likms.assembly.go.kr/law/lawsLawtInqyDetl1010.do?genActiontypeCd=2ACT1010&genDoctreattypeCd=DOCT2041&cachePreid=ALL&viewGb=PROM&contSid=0055&contId=2005080400000006 (확인 2026-11-14)
- [L24] 지방자치단체를 당사자로 하는 계약에 관한 법률 시행령 — 대통령령 제36338호(시행 2026-06-03). https://likms.assembly.go.kr/law/lawsLawtInqyDetl1010.do?genActiontypeCd=2ACT1010&genDoctreattypeCd=DOCT2041&cachePreid=ALL&viewGb=PROM&contSid=0256&contId=2005123000000008 (확인 2026-11-14)
- [L21] KS A ISO 21503(프로그램 관리 가이던스, 2024-05-29)·KS A ISO 21504(포트폴리오 관리 가이던스, 2025-02-04). https://www.standard.go.kr/KSCI/standardIntro/getStandardSearchList.do?menuId=919&topMenuId=502&upperMenuId=503 (확인 2026-11-14)

### 글로벌

- [G1] PMI, A Guide to the Project Management Body of Knowledge (PMBOK Guide) — Eighth Edition and The Standard for Project Management, 2025-11. 원칙 6, 성과 영역 7, 초점 영역 5. https://www.pmi.org/standards/pmbok (확인 2026-11-14)
- [G2] PMI·Agile Alliance, Agile Practice Guide — Second Edition, 2026-07. https://www.pmi.org/standards/agile (확인 2026-11-14)
- [G3] PMI, The Standard for Earned Value Management, 2020. https://www.pmi.org/standards/earned-value-management (확인 2026-11-14)
- [G4] PMI, Practice Standard for Scheduling — Third Edition, 2019. https://www.pmi.org/standards/scheduling-third-edition (확인 2026-11-14)
- [G5] PMI, Risk Management in Portfolios, Programs, and Projects: A Practice Guide, 2024-09(2019 위험관리 표준을 대신함). https://www.pmi.org/standards/risk-management-in-portfolios (확인 2026-11-14)
- [G6] PeopleCert, PRINCE2 7(2023-09). 원칙 7·실무 7·프로세스 7과 People. 6판의 Change 실무가 Issues로 바뀌었다. https://www.peoplecert.org/news-and-announcements/PRINCE2_7 (확인 2026-11-14)
- [G7] PeopleCert, PRINCE2 Agile Version 2. https://www.peoplecert.org/browse-certifications/project-programme-and-portfolio-management/PRINCE2-Agile-28/prince2-agile-foundation-4074 (확인 2026-11-14)
- [G8] ISO 21502:2020 Project, programme and portfolio management — Guidance on project management(개정 착수, ISO/CD 21502 진행). https://www.iso.org/standard/74947.html (확인 2026-11-14)
- [G9] ISO 21511:2018 Work breakdown structures for project and programme management(2판 발행 예정 2026-12). https://www.iso.org/standard/69702.html (확인 2026-11-14)
- [G10] ISO 21508:2026 Earned value management(2판). https://www.iso.org/standard/87899.html (확인 2026-11-14)
- [G11] ISO 31000:2018 Risk management — Guidelines(개정 진행, ISO/DIS 31000). https://www.iso.org/standard/65694.html (확인 2026-11-14)
- [G12] ISO 9001:2026 Quality management systems — Requirements(6판, 2026-09-16, 2015판 폐지). https://www.iso.org/standard/88464.html (확인 2026-11-14)
- [G13] Ken Schwaber·Jeff Sutherland, The Scrum Guide, 2020년 11월판. https://www.scrumguides.org/scrum-guide.html (확인 2026-11-14)
- [G14] SAE, EIA748E Earned Value Management Systems, 2026-02-17. https://saemobilus.sae.org/standards/eia748e-earned-value-management-systems (확인 2026-11-14)
- [G15] FIDIC, Conditions of Contract for Construction(Red Book) Second Edition 2017, 2022년 재인쇄(개정 반영, 2023-01-01 발효). 일반조건 21개 조. https://www.fidic.org/books/construction-contract-2nd-ed-2017-red-book (확인 2026-11-14)
- [G16] FAR Part 34 Major System Acquisition, Subpart 34.2 Earned Value Management System(FAC 2026-01). https://www.acquisition.gov/far/part-34 (확인 2026-11-14)
- [G17] FAR Part 46 Quality Assurance, Subpart 46.5 Acceptance(FAC 2026-01). https://www.acquisition.gov/far/part-46 (확인 2026-11-14)
- [G18] UK Government Functional Standard GovS 002: Project Delivery, v2.1(2025-09-17). https://www.gov.uk/government/publications/project-delivery-functional-standard (확인 2026-11-14)
