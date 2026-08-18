// 프로젝트 데이터 — 최신순
// TODO 표시된 항목은 실제 내용으로 채워주세요.
const projects = [
  {
    id: "naverpay-gateway",
    company: "현대백화점",
    title: "네이버페이 게이트웨이 구축",
    period: "2026.01.19 ~ 2026.04.30",
    category: "시스템구축 및 운영 > IT시스템관리",
    summary: "네이버페이와 현대백화점 내부 인증/카드 시스템 사이를 중계하는 프로토콜 게이트웨이. HTTP가 아닌 자체 TCP 바이너리 프로토콜로 네이버페이의 승인·카드등록/삭제·OTC 발급 요청을 수신해 RSA+SEED로 복호화하고, 내부 시스템과는 별도의 TCP 프로토콜로 통신해 인가를 처리한 뒤 응답을 재암호화해 반환한다.",
    role: "팀장과 함께 분석·설계 진행 후 구현 담당 (Netty 기반 인바운드/아웃바운드 프로토콜 게이트웨이, 필드 단위 암복호화, 장애 재시도 배치 개발)",
    teamSize: "팀장 1명(분석·설계) + 본인 1명(분석·설계 지원 및 개발) — 개발은 단독 수행",
    techStack: ["Java 8", "Spring Framework 5", "Netty 4", "MyBatis", "Oracle", "Bouncy Castle", "Jasypt", "WebLogic"],
    metrics: [
      { value: "약 7,300", label: "LOC" },
      { value: "106개", label: "클래스" },
      { value: "60+", label: "도메인 에러코드" },
      { value: "최대 3회", label: "자동 재시도" }
    ],
    diagram: `<svg viewBox="0 0 720 260" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <marker id="np-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
          <path d="M0,0 L10,5 L0,10 z" fill="#2f3ea3"/>
        </marker>
      </defs>
      <rect x="20" y="95" width="150" height="70" rx="10" fill="#ffffff" stroke="#e5e7eb"/>
      <text x="95" y="125" text-anchor="middle" font-size="14" font-weight="600" fill="#1a1d23">네이버페이</text>
      <text x="95" y="145" text-anchor="middle" font-size="11" fill="#6b7280">외부 결제 시스템</text>

      <rect x="285" y="65" width="180" height="130" rx="10" fill="#eceefb" stroke="#2f3ea3"/>
      <text x="375" y="95" text-anchor="middle" font-size="14" font-weight="600" fill="#2f3ea3">게이트웨이</text>
      <text x="375" y="117" text-anchor="middle" font-size="11" fill="#2f3ea3">Netty 인바운드 서버</text>
      <text x="375" y="135" text-anchor="middle" font-size="11" fill="#2f3ea3">ProtocolDispatcher</text>
      <text x="375" y="153" text-anchor="middle" font-size="11" fill="#2f3ea3">Netty 아웃바운드 클라이언트</text>
      <text x="375" y="175" text-anchor="middle" font-size="10" fill="#2f3ea3">필드 단위 RSA+SEED 암복호화</text>

      <rect x="550" y="95" width="150" height="70" rx="10" fill="#ffffff" stroke="#e5e7eb"/>
      <text x="625" y="120" text-anchor="middle" font-size="13" font-weight="600" fill="#1a1d23">현대백화점</text>
      <text x="625" y="138" text-anchor="middle" font-size="11" fill="#6b7280">내부 인증 시스템</text>

      <line x1="171" y1="130" x2="283" y2="130" stroke="#2f3ea3" stroke-width="1.5" marker-end="url(#np-arrow)" marker-start="url(#np-arrow)"/>
      <text x="227" y="113" text-anchor="middle" font-size="10" fill="#6b7280">TCP · 암호화</text>

      <line x1="467" y1="130" x2="548" y2="130" stroke="#2f3ea3" stroke-width="1.5" marker-end="url(#np-arrow)" marker-start="url(#np-arrow)"/>
      <text x="507" y="113" text-anchor="middle" font-size="10" fill="#6b7280">TCP</text>

      <line x1="375" y1="196" x2="375" y2="213" stroke="#6b7280" stroke-width="1.2" stroke-dasharray="3 2"/>
      <rect x="285" y="213" width="180" height="38" rx="8" fill="#ffffff" stroke="#e5e7eb" stroke-dasharray="4 3"/>
      <text x="375" y="237" text-anchor="middle" font-size="10.5" fill="#6b7280">재시도 배치(JobAuthNotice) · 실패 시 SMS</text>
    </svg>`,
    achievements: [
      "네이버페이 TCP 프로토콜과 현대백화점 내부 인증 시스템 TCP 프로토콜을 중계하는 이중 Netty 파이프라인 구현 (인바운드/아웃바운드 각각 커스텀 인코더·디코더)",
      "리플렉션 기반 커스텀 어노테이션으로 DTO 필드 단위 선택적 RSA+SEED 암복호화 처리",
      "WebLogic 다중 노드 클러스터에서 서버 인덱스 기반 샤딩으로 승인 결과 통보 실패 건을 재시도(최대 3회)하는 배치 잡 구현, 재시도 소진 시 SMS 알림 연동",
      "네이버페이 스펙에 대응하는 60개 이상의 도메인 에러코드 체계 설계"
    ],
    keyFeatures: [
      "네이버페이 인바운드 TCP 서버 및 현대백화점 내부 시스템 아웃바운드 TCP 클라이언트 전체 프로토콜 스택 (Netty 파이프라인, 커스텀 인코더/디코더)",
      "@FieldData 어노테이션 기반 리플렉션 필드 단위 RSA+SEED 암복호화 모듈",
      "WebLogic 클러스터 대응 모듈러 샤딩 재시도 배치(JobAuthNotice) 및 SMS 알림 연동",
      "카드번호 마스킹 유틸리티 및 60개 이상 도메인 에러코드 체계"
    ],
    challenges: [
      {
        problem: "TODO: 확인/보완 필요 — 네이버페이와 현대백화점 내부 시스템이 서로 다른 TCP 바이너리 프로토콜(필드 구조, 암호화 방식)을 사용해 하나의 게이트웨이에서 양쪽을 동시에 중계해야 했음",
        solution: "인바운드/아웃바운드에 각각 독립된 Netty 파이프라인(전용 인코더·디코더)을 구성하고 ProtocolDispatcher로 프로토콜 간 변환을 분리해 처리",
        detail: "네이버페이 쪽 서버(server/protocol/naver)와 현대백화점 내부 시스템 쪽 클라이언트(client/protocol/innerSystem)를 각각 독립된 Netty 파이프라인으로 분리하고, 그 사이를 ProtocolDispatcher가 중계했다. 이렇게 분리한 이유는 두 프로토콜이 필드 구조·암호화 방식·타임아웃 정책이 모두 달라서, 하나의 파이프라인에 억지로 합치면 한쪽 프로토콜을 수정할 때마다 다른 쪽 로직까지 건드릴 위험이 컸기 때문이다. 인바운드에서 받은 네이버페이 요청을 파싱·복호화한 뒤 내부 시스템 프로토콜의 요청 객체로 변환해서 아웃바운드 커넥션을 새로 열어 전달하고, 응답이 오면 반대로 변환해 네이버페이 쪽에 되돌려주는 구조다."
      },
      {
        problem: "TODO: 확인/보완 필요 — WebLogic 다중 노드 클러스터 환경에서 승인 결과 통보가 실패했을 때 여러 노드가 중복으로 재시도하면 안 되는 문제",
        solution: "서버 인덱스 기반 모듈러 샤딩으로 재시도 배치 잡을 노드별로 분담시키고, 재시도 3회 소진 시 SMS로 알림",
        detail: "동일한 배치 잡이 클러스터의 모든 노드에서 동시에 스케줄 실행되기 때문에, 그대로 두면 같은 재시도 대상 건을 여러 노드가 동시에 처리해 네이버페이 쪽에 중복 통보가 나갈 수 있었다. 이를 막기 위해 애플리케이션 기동 시 VM 옵션(-Dweblogic.Name)으로 현재 서버명을 읽어 batchServerList에서 자신의 인덱스를 확인해두고, 매 분 실행되는 배치에서 '현재 분(分) % 전체 서버 수 == 자기 인덱스'인 노드만 실제로 재시도를 수행하도록 했다. 실패 건은 재시도 횟수를 DB에 누적하다가 3회를 넘기면 담당자에게 SMS로 알림을 보낸다."
      },
      {
        problem: "TODO: 확인/보완 필요 — 카드번호 등 민감정보가 로그에 그대로 노출되는 보안 이슈",
        solution: "마스킹 유틸리티를 추가해 로그·응답 데이터에서 카드번호를 자동 마스킹 처리",
        detail: "요청/응답 DTO 필드에 @MaskData 어노테이션을 붙여두면, 로그를 남기거나 화면에 값을 노출할 때 리플렉션으로 해당 필드를 찾아 지정된 구간을 자동으로 '*'로 치환하도록 했다. 필드마다 마스킹 시작/끝 인덱스를 어노테이션 값으로 지정할 수 있어, 카드번호는 중간 자리만, 계좌번호는 뒷자리만 가리는 식으로 필드별로 다르게 적용할 수 있다."
      },
      {
        problem: "TODO: 확인/보완 필요 — 네이버페이와 현대백화점이 서로 다른 키(RSA 키 쌍)로 암호화를 요구해, 방향에 따라 암복호화 로직을 다르게 타야 했음",
        solution: "@FieldData 어노테이션으로 암호화 대상 필드를 표시해두고, 리플렉션으로 요청/응답 DTO를 순회하며 방향에 맞는 키로 필드 단위 RSA+SEED 암복호화를 수행",
        detail: "네이버페이가 보낸 요청은 자사 개인키(hyundai.protocol.privateKey)로 RSA 복호화한 SEED 키를 이용해 @FieldData(isEncrypt=true)가 붙은 필드만 골라 복호화하고, 응답을 만들 때는 반대로 매번 새 SEED 키를 생성해 네이버페이 공개키로 RSA 암호화한 뒤 그 SEED 키로 응답 필드를 암호화했다. DTO 전체를 암호화하지 않고 필드 단위로 어노테이션 처리한 이유는, 프로토콜 스펙상 암호화 대상 필드가 메시지 종류마다 달라서 하나의 공통 로직으로 처리하려면 필드 레벨의 선언적 표시가 필요했기 때문이다."
      }
    ]
  },
  {
    id: "hmc-securities-auth",
    company: "현대차증권",
    title: "차세대 프로젝트 인증발급시스템 도입",
    period: "2025.11.03 ~ 2026.01.09",
    category: "시스템구축 및 운영 > IT시스템관리",
    summary: "현대차증권 차세대 시스템에 도입되는 금융 IC카드 개인화/인증 시스템. GlobalPlatform Secure Channel Protocol(SCP) 기반으로 HSM을 통해 카드 매니저 인증, 키 교체, 금융 IC PIN/키 변경, 계좌정보 파일 업데이트 등을 처리하는 공용 라이브러리(HMC_LIB)와, 이를 소비하는 테스트 하네스 웹앱(HMC_TEST)으로 구성된다.",
    role: "팀장과 함께 분석·설계 진행 후 구현 담당 (HSM/PKCS#11 연동 카드 인증·키관리 라이브러리 및 검증용 테스트 하네스 개발)",
    teamSize: "팀장 1명(분석·설계) + 본인 1명(분석·설계 지원 및 개발) — 개발은 단독 수행",
    techStack: ["Java 8/11", "Spring Boot 2.7", "PKCS#11 (HSM)", "Bouncy Castle", "SEED/3DES/AES", "Log4j2"],
    metrics: [
      { value: "약 10,300", label: "LOC (라이브러리+테스트앱)" },
      { value: "95개", label: "클래스" },
      { value: "9종", label: "태스크 (A1~C1)" },
      { value: "9개", label: "hex 고정값 회귀 테스트" }
    ],
    achievements: [
      "GlobalPlatform SCP01/SCP02 기반 카드 매니저 인증, Put Key, FCI/계좌정보 파일 업데이트, 금융 IC PIN/키 변경 등 태스크 단위 프로토콜 구현 (A1~C1)",
      "HSM 마스터키로부터 세션키를 유도하는 PKCS#11 연동 로직 구현, 다중 키(초기키→은행키) 인증 재시도 로직 포함",
      "SEED/3DES/AES 등 금융권 표준 암호 알고리즘을 HSM 메커니즘으로 처리",
      "PIN/계좌 등 민감 필드를 로그에서 자동 마스킹하는 리플렉션 기반 프로토콜 직렬화 구조 설계",
      "실제 암호 연산 결과(hex request/response)를 고정값으로 검증하는 회귀 테스트 스위트 작성"
    ],
    keyFeatures: [
      "GlobalPlatform SCP01/SCP02 카드 매니저 인증, Put Key, FCI/계좌정보 업데이트, IC PIN/키 변경 태스크(A1~C1) 전체 구현",
      "HSM 마스터키 기반 세션키 유도 PKCS#11 연동 로직",
      "PIN/계좌 등 민감 필드 자동 마스킹 리플렉션 프로토콜 직렬화 구조",
      "hex request/response 고정값 검증 회귀 테스트 스위트"
    ],
    challenges: [
      {
        problem: "TODO: 확인/보완 필요 — 은행 발급키(운영)와 테스트키(개발)처럼 환경별로 다른 HSM 키 라벨을 사용해야 했음",
        solution: "환경(local/dev/prod)에 따라 키 라벨 프리픽스를 자동 전환하는 로직을 구현해 배포 환경 전환 시 코드 변경 없이 대응",
        detail: "HSM에 저장된 키를 라벨(문자열 이름)로 조회하는데, 운영에서는 은행 발급키(FCK_BANK_ 접두사를 HMC_FCK_로 치환), 로컬/개발에서는 테스트키(TEST_ 접두사)를 써야 했다. 배포할 때마다 코드나 설정을 손으로 바꾸면 실수하기 쉬워서, 프로파일 값(local/dev/운영)에 따라 키 라벨을 자동으로 변환하도록 findKeyId에 넣어 환경 전환 시 별도 코드 수정 없이 배포만으로 대응되게 했다. 추가로 정확한 라벨로 못 찾으면 255바이트 패딩을 붙인 라벨로 한 번 더 조회하는 폴백도 넣어, HSM에 등록된 키의 라벨 길이가 실제와 다르게 저장된 경우까지 커버했다."
      },
      {
        problem: "TODO: 확인/보완 필요 — 초기 키로 인증이 실패하는 경우가 있어 단일 키 시도만으로는 인증 성공률이 낮았음",
        solution: "초기키 → 은행키 순으로 재시도하는 다중 키 인증 로직을 구현",
        detail: "카드 매니저 인증(A1) 단계에서 카드가 아직 초기 상태인지 이미 발급이 완료된 상태인지에 따라 유효한 키가 다르다. 하나의 키만 시도해서 실패하면 바로 인증 실패로 처리했는데, 이 경우 카드 상태를 다시 조회하고 재요청해야 해서 처리 시간이 늘어났다. keyList에 후보 키를 순서대로 담아두고, CC(암호문) 검증에 실패하면 다음 키로 넘어가 재시도하고, 마지막 키까지 실패했을 때만 인증 실패로 처리하도록 루프를 구성해 카드 상태와 무관하게 한 번의 요청으로 인증이 끝나도록 했다."
      },
      {
        problem: "TODO: 확인/보완 필요 — HSM 세션/슬롯 자원을 정리하지 않으면 세션이 누적되는 문제",
        solution: "애플리케이션 종료 시 PKCS#11 세션 정리(finalize)를 보장하는 shutdown hook을 추가",
        detail: "HSM은 슬롯당 열 수 있는 세션 수가 제한돼 있어서, 서버가 비정상 종료되거나 재배포될 때 세션을 정리하지 않으면 다음 기동 시 세션 부족으로 HSM 연동 자체가 실패할 수 있었다. JVM 종료 훅(Runtime.getRuntime().addShutdownHook)에 PKCS#11 finalize 호출을 등록해, 정상 종료든 강제 종료(SIGTERM)든 프로세스가 내려갈 때 세션이 반드시 반납되도록 했다. 종료 훅 내부에서 finalize 자체가 실패하더라도 그 예외 때문에 JVM 종료가 막히면 안 되므로, 실패는 경고 로그만 남기고 무시하도록 처리했다."
      }
    ]
  },
  {
    id: "hmc-securities-kms",
    company: "현대차증권",
    title: "차세대 시스템 KMS 도입",
    period: "2025.10.06 ~ 2025.10.31",
    category: "시스템구축 및 운영 > IT시스템관리",
    summary: "현대차증권 차세대 시스템에 도입되는 KMIP 2.1 프로토콜 기반 키 관리 시스템(KMS). PKCS#11을 통해 nCipher/SafeNet 등 다중 HSM 벤더를 지원하며, 키 생성·회전·태깅·이관·조회 등 전 생애주기를 관리하고 Fortanix 등 외부 클라우드 KMIP 백엔드 연동까지 지원한다.",
    role: "팀장과 함께 분석·설계 진행 후 구현 담당 (KMIP 서버, HSM 연동 계층, 키 생명주기 서비스, 관리자 웹 UI까지 백엔드-프론트 전 영역 개발)",
    teamSize: "팀장 1명(분석·설계) + 본인 1명(분석·설계 지원 및 개발) — 개발은 단독 수행",
    techStack: ["Java 8", "Spring Boot 2.7", "MyBatis", "SQLite", "PKCS#11 (HSM)", "Thymeleaf", "KMIP 2.1"],
    metrics: [
      { value: "28,685", label: "LOC" },
      { value: "18종", label: "KMIP 오퍼레이션" },
      { value: "727개", label: "테스트 케이스" },
      { value: "17회", label: "커밋 (3주)" }
    ],
    diagram: `<svg viewBox="0 0 640 320" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <marker id="kms-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
          <path d="M0,0 L10,5 L0,10 z" fill="#2f3ea3"/>
        </marker>
      </defs>
      <rect x="230" y="15" width="180" height="55" rx="10" fill="#ffffff" stroke="#e5e7eb"/>
      <text x="320" y="38" text-anchor="middle" font-size="12.5" font-weight="600" fill="#1a1d23">KMIP 클라이언트 /</text>
      <text x="320" y="55" text-anchor="middle" font-size="12.5" font-weight="600" fill="#1a1d23">관리자 웹 브라우저</text>

      <rect x="200" y="115" width="240" height="95" rx="10" fill="#eceefb" stroke="#2f3ea3"/>
      <text x="320" y="145" text-anchor="middle" font-size="14" font-weight="600" fill="#2f3ea3">KMS 서버</text>
      <text x="320" y="165" text-anchor="middle" font-size="11" fill="#2f3ea3">KMIP 2.1 서버 (TTLV) · 관리자 Web UI</text>
      <text x="320" y="182" text-anchor="middle" font-size="11" fill="#2f3ea3">키 생명주기 서비스 · 감사로깅</text>

      <rect x="15" y="255" width="175" height="60" rx="10" fill="#ffffff" stroke="#e5e7eb"/>
      <text x="102" y="280" text-anchor="middle" font-size="12" font-weight="600" fill="#1a1d23">HSM</text>
      <text x="102" y="298" text-anchor="middle" font-size="10" fill="#6b7280">nCipher / SafeNet (PKCS#11)</text>

      <rect x="235" y="255" width="170" height="60" rx="10" fill="#ffffff" stroke="#e5e7eb"/>
      <text x="320" y="280" text-anchor="middle" font-size="12" font-weight="600" fill="#1a1d23">DB (SQLite)</text>
      <text x="320" y="298" text-anchor="middle" font-size="10" fill="#6b7280">키 메타데이터 · 감사로그</text>

      <rect x="450" y="255" width="175" height="60" rx="10" fill="#ffffff" stroke="#e5e7eb"/>
      <text x="537" y="280" text-anchor="middle" font-size="12" font-weight="600" fill="#1a1d23">Fortanix</text>
      <text x="537" y="298" text-anchor="middle" font-size="10" fill="#6b7280">외부 클라우드 KMIP 백엔드</text>

      <line x1="320" y1="70" x2="320" y2="113" stroke="#2f3ea3" stroke-width="1.5" marker-end="url(#kms-arrow)"/>
      <line x1="260" y1="210" x2="130" y2="253" stroke="#2f3ea3" stroke-width="1.5" marker-end="url(#kms-arrow)"/>
      <line x1="320" y1="210" x2="320" y2="253" stroke="#2f3ea3" stroke-width="1.5" marker-end="url(#kms-arrow)"/>
      <line x1="380" y1="210" x2="500" y2="253" stroke="#2f3ea3" stroke-width="1.5" marker-end="url(#kms-arrow)"/>
    </svg>`,
    achievements: [
      "TTLV 코덱을 직접 구현한 KMIP 2.1 서버 및 18종 오퍼레이션 핸들러(Create/Activate/Locate/ReKey/Revoke/Encrypt·Decrypt 등) 구현",
      "nCipher/SafeNet 등 벤더별 SEED 암호 메커니즘 코드를 추상화한 다중 HSM 벤더 지원 계층 설계",
      "레거시 KMS의 키 분할(3-컴포넌트 XOR 조합 + DES 홀수 패리티) 로직을 포팅하여 키 컴포넌트 처리 구현",
      "AOP 기반 작업이력 자동 감사로깅과 메뉴 단위 동적 권한 관리(DB 기반) 구현",
      "68개 테스트 파일 · 727개 테스트 케이스로 TTLV 코덱/HSM 연동/보안 회귀 테스트 커버리지 확보",
      "Fortanix 등 외부 클라우드 KMIP 백엔드 연동 지원 추가"
    ],
    keyFeatures: [
      "TTLV 코덱 직접 구현 및 KMIP 2.1 서버, 18종 오퍼레이션 핸들러",
      "nCipher/SafeNet 등 다중 HSM 벤더 SEED 메커니즘 추상화 계층",
      "레거시 KMS 키 분할(3-컴포넌트 XOR + DES 홀수 패리티) 로직 포팅",
      "AOP 기반 작업이력 자동 감사로깅, 메뉴 단위 동적 권한 관리",
      "Fortanix 클라우드 KMIP 백엔드 연동"
    ],
    challenges: [
      {
        problem: "TODO: 확인/보완 필요 — 레거시 KMS의 핵심 서비스가 819줄짜리 God-class로 얽혀 있어 그대로 재사용하기 어려웠음",
        solution: "핵심 로직(키 컴포넌트 조합 등)만 순수 유틸리티로 분리 포팅하고, KMIP 오퍼레이션 핸들러 구조로 재설계",
        detail: "레거시 KMS(kms-build 프로젝트)의 PkcsService는 HSM 연결·키 조회·암복호화·화면 응답 조립이 한 클래스에 뒤섞여 819줄에 달했다. 이걸 그대로 새 KMIP 서버에 옮기면 KMIP 오퍼레이션 핸들러 구조(Create/Activate/Locate 등 오퍼레이션별로 클래스가 분리된 구조)와 맞지 않았다. 그래서 HSM 연결 여부와 무관하게 순수 계산으로만 동작하는 부분(키 컴포넌트 XOR 조합, DES 홀수 패리티 계산)만 별도 유틸리티 클래스로 뽑아내 포팅하고, 나머지 HSM 세션 관리·오퍼레이션 처리는 KMIP 표준 오퍼레이션 핸들러 구조에 맞게 새로 설계했다. 순수 로직으로 분리한 덕분에 실제 HSM 없이도 단위 테스트로 검증할 수 있게 됐다."
      },
      {
        problem: "TODO: 확인/보완 필요 — HSM 벤더(nCipher/SafeNet)마다 SEED 암호 메커니즘 코드가 달라 하나의 로직으로 처리할 수 없었음",
        solution: "벤더별 메커니즘 프로필을 추상화한 리졸버를 도입해 벤더 차이를 흡수",
        detail: "PKCS#11 표준 자체에는 SEED 암호가 정의돼 있지 않아 HSM 벤더마다 자체 확장 메커니즘 코드(CKM_VENDOR_DEFINED 영역)를 쓰는데, nCipher와 SafeNet이 서로 다른 코드값을 쓴다. 오퍼레이션 핸들러에서 벤더를 직접 분기하면 벤더가 늘어날 때마다 코드 전체를 수정해야 해서, 벤더별 코드값을 프로필 객체(NCIPHER_VENDOR/STANDARD/SAFENET_VENDOR)로 감싸고 설정된 벤더에 맞는 프로필을 리졸버가 조회해 돌려주는 구조로 바꿔, 새 벤더가 추가돼도 프로필 하나만 추가하면 되게 했다."
      },
      {
        problem: "TODO: 확인/보완 필요 — KMIP 프로토콜 자체의 TTLV 바이너리 인코딩을 직접 구현해야 했음",
        solution: "TTLV 인코더/디코더를 자체 구현하고 68개 테스트 파일·727개 테스트 케이스로 인코딩/디코딩 정확성을 검증",
        detail: "KMIP은 JSON/XML이 아니라 TTLV(Tag-Type-Length-Value)라는 자체 바이너리 포맷을 쓰는데, 태그마다 정해진 타입(Integer/Enumeration/ByteString/Structure 등)과 길이 규칙이 다르고 Structure 안에 다시 Structure가 중첩될 수 있어 일반적인 직렬화 라이브러리를 그대로 쓸 수 없었다. TtlvEncoder/TtlvDecoder를 직접 구현하면서, 각 KMIP 오퍼레이션(Create, Locate, ReKey 등)의 요청/응답 메시지를 구성하는 TtlvItem 트리를 만들고 다시 파싱했을 때 원본과 동일한지 검증하는 왕복(round-trip) 테스트를 오퍼레이션별로 작성해 인코딩 규칙을 하나씩 검증했다."
      }
    ]
  },
  {
    id: "cau-smart-campus",
    company: "중앙대학교",
    title: "스마트 캠퍼스 구축",
    period: "2025.01.13 ~ 2025.09.30",
    category: "시스템구축 및 운영 > IT시스템관리",
    summary: "중앙대학교 학생증/교직원증 등 캠퍼스 ID를 발급·인증하는 플랫폼 구축. 관리자용 발급 관리 웹(cauIdMaster)과 모바일 앱·OCX·도서관 시스템이 호출하는 카드 프로토콜 API(cau_idt_api)로 구성되며, 접촉식 IC카드 개인화(APDU/SAM 기반)와 비접촉식(Mifare) 카드, 삼성페이·우리은행 연동 모바일 학생증 발급까지 지원한다.",
    role: "팀장과 함께 분석·설계 진행 후 구현 담당 (발급 관리 웹 및 카드 프로토콜 API 개발)",
    teamSize: "팀장 1명(분석·설계) + 본인 1명(분석·설계 지원 및 개발) — 개발은 단독 수행",
    techStack: ["Java 8", "Spring Boot 2.7", "MyBatis", "Oracle", "MS SQL Server", "Thymeleaf", "JWT", "ZXing"],
    metrics: [
      { value: "약 45,400", label: "LOC (관리웹+API 합산)" },
      { value: "614개", label: "클래스" },
      { value: "600회", label: "커밋 (합산)" },
      { value: "IFIDT001~402", label: "카드 프로토콜 메시지" }
    ],
    achievements: [
      "학생/교직원/대학원/도서관/연구원 등 신청자 유형별 신청-심사-배치발급-상태추적 전 과정을 관리하는 발급 관리 시스템 구축",
      "ISO 7816 접촉식 IC카드에 대해 SAM 기반 APDU 프로토콜(SelectApplet/Authenticate/PutKey/ReadRecord 등)로 카드 개인화 로직 구현",
      "삼성페이(HCE) 모바일 학생증 발급 및 우리은행 비대면 카드 발급 연동 개발",
      "IC/APDU 방식과 Mifare/블록 방식 카드 프로토콜을 비교 분석한 기술 문서 작성",
      "Oracle과 MS SQL Server(대학 정보시스템) 이중 DB 연동으로 기존 학사 시스템과의 동기화 처리"
    ],
    keyFeatures: [
      "학생/교직원/대학원/도서관/연구원 신청자 유형별 신청-심사-배치발급-상태추적 시스템",
      "SAM 기반 APDU 프로토콜(ISO 7816 접촉식 IC카드 개인화)",
      "삼성페이(HCE) 모바일 학생증 발급, 우리은행 비대면 카드 발급 연동",
      "Oracle/MS SQL Server 이중 DB 연동"
    ],
    challenges: [
      {
        problem: "TODO: 확인/보완 필요 — 접촉식(IC/APDU)과 비접촉식(Mifare/블록) 두 가지 카드 기술을 모두 지원해야 했음",
        solution: "두 방식의 차이를 비교 분석한 기술 문서를 먼저 정리하고, 그 문서를 기준으로 APDU 명령 단위 클래스로 처리 로직을 분리 설계",
        detail: "접촉식 IC카드는 ISO 7816 APDU 명령(SelectApplet, GetChallenge, InternalAuthenticate 등)을 SAM(보안모듈)과 주고받는 방식이고, 비접촉식 Mifare는 블록 단위 읽기/쓰기 방식이라 인증 절차와 키 관리 방식이 근본적으로 다르다. 두 프로토콜을 하나의 처리 로직으로 섞으면 카드 종류가 바뀔 때마다 조건 분기가 늘어나 유지보수가 어려워지므로, 각 방식의 절차·필드 구조 차이를 문서(APDU_vs_BLOCK_상세가이드.md)로 먼저 정리했다. 그 다음 APDU 명령 하나하나(SelectApplet, GetChallenge, InternalAuthenticate, PutKey, ReadRecord 등)를 독립된 클래스로 만들어, 카드 기술이 바뀌어도 해당 명령 클래스만 교체/추가하면 되도록 분리했다."
      },
      {
        problem: "TODO: 확인/보완 필요 — 삼성페이 모바일 학생증은 물리 카드와 달리 기기를 바꾸면 재발급이 필요한데, 짧은 시간에 기기 변경을 반복하며 재발급을 요청하는 것을 그대로 허용하면 분실/도난된 계정이 여러 기기에 학생증을 뿌릴 수 있는 악용 경로가 생김",
        solution: "기기 변경 이력을 조회해 같은 날 이미 다른 기기로 변경한 적이 있으면 재발급을 막는 1일 1회 제한 로직(checkChangeDeviceCount)을 추가",
        detail: "발급 이력 테이블에서 카드 종류별로 가장 최근 '기기변경' 사유의 발급 이력을 조회해, 그 등록일이 오늘이면 재발급을 막도록 했다. 다만 본인이 아니라 다른 사용자가 분실 신고를 해서 강제로 넘어간 경우까지 막으면 안 되므로, 분실 처리 주체가 'Other User'(관리자/타인에 의한 분실 처리)이고 요청 기기가 그 분실 처리 시점의 기기와도 다르면 제한을 풀어주는 예외를 따로 뒀다. 재직 중인 임직원 카드나 테스트 계정은 애초에 이 체크 자체를 생략하도록 앞단에서 걸러냈다."
      },
      {
        problem: "TODO: 확인/보완 필요 — 대학 통합포털 등 외부 학사 정보시스템의 사용자 수만 건을 매일 새벽 자체 발급 시스템 DB로 동기화해야 했는데, 건수가 많아 한 번에 커밋하면 트랜잭션이 너무 오래 걸리고 중간에 실패하면 어디까지 반영됐는지 알 수 없었음",
        solution: "1,000건 단위로 끊어 커밋하는 청크 처리 + 오류 100건 초과 시 중단하는 회로차단기(circuit breaker) 로직을 스케줄러에 구현",
        detail: "매일 새벽 2시 스케줄러가 포털/연구/교육과정 등 사용자 유형별로 순서대로 동기화를 수행하는데, 외부 시스템 쿼리 특성상 페이징 조회가 안 돼 전체 목록을 한 번에 가져온 뒤 애플리케이션에서 1,000건씩 잘라 트랜잭션을 열고 커밋하는 방식으로 처리했다. 중간에 개별 건이 실패해도 전체가 롤백되지 않도록 건별로 예외를 잡아 실패 건수만 누적하고, 실패가 100건을 넘으면 데이터 자체에 구조적 문제가 있다고 보고 그 시점에서 배치를 중단해 로그를 확인하도록 만들었다."
      }
    ]
  },
  {
    id: "hyundai-dept-ic",
    company: "현대백화점",
    title: "IC 시스템 구축",
    period: "2024.08.12 ~ 2024.12.05",
    category: "시스템구축 및 운영 > IT시스템관리",
    summary: "현대백화점 EMV IC칩 카드 발급 및 인증 플랫폼 구축. 매장 단말과 통신하는 Netty TCP 서버(hyundai_core)가 태스크 코드별로 동적 로드되는 EMV 인증 로직(hyundai_lib)을 실행하고, 관리자 웹 콘솔(hyundai_manage)에서 HSM 키 관리와 통계를 제공하며, 매장 현장의 즉시발급 카드프린터를 구동하는 로컬 에이전트(hyundai_local)가 연동된다.",
    role: "팀장과 함께 분석·설계 진행 후 구현 담당 (TCP 게이트웨이, EMV 인증 라이브러리, 관리자 웹, 매장 발급 에이전트까지 개발)",
    teamSize: "팀장 1명(분석·설계) + 본인 1명(분석·설계 지원 및 개발) — 개발은 단독 수행",
    techStack: ["Java 8", "Spring Boot 2.7", "Netty", "MyBatis", "Oracle", "PKCS#11 (HSM)", "JNA", "Thymeleaf"],
    metrics: [
      { value: "약 24,600", label: "LOC (4개 서브시스템 합산)" },
      { value: "307개", label: "클래스" },
      { value: "131회", label: "커밋 (합산)" },
      { value: "4개", label: "서브시스템(게이트웨이/라이브러리/관리웹/현장에이전트)" }
    ],
    achievements: [
      "ARQC/ARPC 카드 암호문 생성·검증, ICC 마스터키 유도, 세션키 유도 등 EMV 칩카드 인증 로직을 직접 구현",
      "DB에 저장된 태스크 바이트코드를 태스크 코드 단위로 동적 로드하는 핫디플로이 플러그인 구조 설계, 재배포 없이 신규 EMV 태스크 추가 가능",
      "자체 보정 로직을 포함한 길이 필드 기반 TCP 프레이밍 디코더 구현",
      "JNA로 카드프린터 DLL을 구동하는 매장 현장 즉시발급 에이전트 개발, 외부 발급 시스템(SCMS) 연동",
      "HSM(PKCS#11) 키 관리, 계정 잠금·비밀번호 정책, 세션 클러스터링을 갖춘 관리자 웹 콘솔 구축"
    ],
    keyFeatures: [
      "ARQC/ARPC 카드 암호문 생성/검증, ICC 마스터키·세션키 유도 EMV 인증 로직",
      "DB 저장 바이트코드를 태스크 코드 단위로 동적 로드하는 핫디플로이 플러그인 구조",
      "JNA 기반 카드프린터 DLL 구동 매장 발급 에이전트",
      "HSM 키 관리, 계정 잠금/비밀번호 정책을 갖춘 관리자 웹 콘솔"
    ],
    challenges: [
      {
        problem: "TODO: 확인/보완 필요 — 신규 EMV 인증 태스크가 추가될 때마다 서버를 재배포해야 하는 부담",
        solution: "태스크 바이트코드를 DB에 저장하고 태스크 코드 단위로 동적 로드하는 핫디플로이 구조를 설계",
        detail: "EMV 인증 로직은 카드사/이슈어 정책이 바뀔 때마다 태스크 코드 단위로 수정·추가가 필요한데, 그때마다 서버 전체를 재배포하면 운영 중인 매장 단말 트래픽에 영향을 줄 수 있었다. 태스크 로직을 담은 jar를 DB(LibraryEntity)에 바이트코드로 저장해두고, /load/{taskCd} API로 특정 태스크 코드만 골라 URLClassLoader로 즉시 로드하도록 만들어, 신규 태스크를 추가하거나 기존 태스크를 교체할 때 서버 재시작 없이 해당 태스크 코드만 다시 로드하면 되게 했다."
      },
      {
        problem: "TODO: 확인/보완 필요 — 매장 단말과의 TCP 통신에서 길이 필드가 어긋나는 경우가 발생",
        solution: "자체 보정 로직을 포함한 길이 필드 기반 디코더를 구현해 프레이밍 오류를 흡수",
        detail: "매장 단말이 보내는 전문의 길이 필드 값과 실제 수신된 바이트 수가 가끔 어긋나는 경우가 있었는데(단말 펌웨어 버전 차이 등으로 추정), 이를 그대로 신뢰해 프레임을 자르면 다음 전문까지 깨져서 연쇄적으로 파싱이 실패했다. LengthFieldBasedFrameDecoder를 상속해 길이 필드 값과 실제 남은 바이트 수(realLength)를 비교하고, 둘이 다르면 길이 필드 값 대신 실제 수신 바이트 수를 프레임 길이로 사용하도록 보정해 단일 전문 하나가 깨지더라도 이후 전문 파싱에 영향을 주지 않게 했다."
      },
      {
        problem: "TODO: 확인/보완 필요 — 매장 현장 카드프린터(하드웨어)를 자바에서 직접 제어해야 했음",
        solution: "JNA로 카드프린터 제조사 DLL을 호출하는 로컬 에이전트를 구현",
        detail: "즉시발급 카드프린터는 제조사가 제공하는 네이티브 DLL(CPRT_Execute.dll)로만 제어할 수 있어서, 순수 자바 코드로는 직접 접근이 불가능했다. 매장에 상주하는 별도 로컬 에이전트(hyundai_local)를 만들고 JNA로 해당 DLL의 함수를 자바 인터페이스로 매핑해 호출하도록 구현해, 위쪽 발급 로직(IssueController/IDCardMakerService)은 순수 자바로 작성하면서도 실제 인쇄/발급은 프린터 제조사 SDK를 통해 수행되도록 했다."
      }
    ]
  },
  {
    id: "woori-card-instant-issue",
    company: "우리카드",
    title: "즉시발급 S/W 교체도입",
    period: "2024.04.15 ~ 2024.07.26",
    category: "시스템구축 및 운영 > IT시스템관리",
    summary: "우리카드/우리은행의 즉시발급(카드·PIN) 프로세스를 처리하던 기존 소프트웨어를 신규 Netty 기반 TCP 서버로 교체 도입. 카드계(authsvr)와 은행계(issuesvr) 두 개의 논리 서버를 하나의 코드베이스로 운영하며, HSM(PKCS#11) 연동 키 관리와 SEED/DES/AES 암복호화, DUKPT 방식 세션키 파생 및 PIN 블록 암호화를 수행한다.",
    role: "팀장과 함께 분석·설계 진행 후 구현 담당 (Spring Boot 서버와 프로토콜/암호화 공용 라이브러리 개발)",
    teamSize: "팀장 1명(분석·설계) + 본인 1명(분석·설계 지원 및 개발) — 개발은 단독 수행",
    techStack: ["Java 8", "Spring Boot 2.7", "Netty", "MyBatis", "MariaDB", "Tibero", "PKCS#11 (HSM)", "Jasypt"],
    metrics: [
      { value: "약 28,600", label: "LOC (서버+라이브러리 합산)" },
      { value: "353개", label: "클래스" },
      { value: "410회", label: "커밋 (합산)" },
      { value: "약 20개", label: "메시지 코드별 테스트 패키지" }
    ],
    achievements: [
      "카드계/은행계 메시지 코드별(w0200~w1000, w61001000~w94000000) 업무 로직을 순차적으로 구현하고 각 코드별 단위 테스트를 함께 작성 (공용 라이브러리 기준 약 20개 테스트 패키지)",
      "PKCS#11 기반 HSM 연동으로 SEED/DES/AES 암복호화 및 DUKPT 방식 세션키 파생, PIN 블록 암호화·MAC 생성 구현",
      "은행 전문 중계용 아웃바운드 Netty 커넥션의 EventLoopGroup 누수(leak)로 인한 GC 정지 이슈 분석 및 수정",
      "은행/카드 도메인별로 계층화된 커스텀 예외 체계 설계"
    ],
    keyFeatures: [
      "카드계/은행계 메시지 코드별(w0200~w1000 등) 업무 로직 및 단위 테스트",
      "PKCS#11 HSM 연동 SEED/DES/AES 암복호화, DUKPT 세션키 파생, PIN 블록 암호화",
      "은행/카드 도메인별 계층화된 커스텀 예외 체계"
    ],
    challenges: [
      {
        problem: "EAI 서버로 은행 전문을 중계할 때마다 새 Netty 커넥션을 열었는데, 응답을 다 받은 뒤 EventLoopGroup을 종료하지 않아 스레드/커넥션이 계속 누적되고 결국 GC가 멈춰서는 문제가 발생",
        solution: "요청마다 새로 만든 EventLoopGroup을 finally 블록에서 shutdownGracefully()로 반드시 종료하고, 커넥션 종료 대기 방식도 close() 대신 closeFuture().sync()로 바꿔 세션이 완전히 정리된 뒤에만 다음 처리로 넘어가도록 수정",
        detail: "은행 전문은 카드와 달리 EAI(전사 연계) 서버로 매번 새 아웃바운드 TCP 커넥션을 열어 중계하는 구조였다. 처음 구현에서는 응답 전송 후 f.channel().close()만 호출했는데, 이는 채널을 닫으라는 요청만 보내고 실제로 언제 닫히는지 기다리지 않는 비동기 호출이라 EventLoopGroup 스레드가 정리되기 전에 다음 요청이 몰리면 스레드/버퍼가 계속 쌓였다. jstat -gcutil로 GC 로그를 직접 떠서 확인한 결과 Old 영역이 계속 차올라 Full GC가 멎는 patterns을 발견했고, 원인이 EventLoopGroup 미종료라는 걸 특정한 뒤 finally 블록에서 shutdownGracefully()를 명시적으로 호출하도록 고쳤다. 또한 close() 대신 closeFuture().sync()로 바꿔 채널이 실제로 닫히는 것까지 동기적으로 기다리도록 해서, 커넥션이 완전히 정리되기 전에 리소스가 재사용되며 생기던 세션 타임아웃 문제도 함께 해결했다."
      },
      {
        problem: "은행계/카드계 각각 다른 에러 체계를 하나의 서버에서 다뤄야 했음",
        solution: "도메인별로 계층화된 커스텀 예외(WBankError/WCardError/TaskError)를 설계해 명확히 구분",
        detail: "카드계와 은행계는 오류 코드 체계와 응답 포맷이 서로 다른데, 두 프로토콜을 한 서버에서 처리하다 보니 예외를 한 종류로 뭉뚱그리면 어느 쪽 오류인지, 어느 계층(태스크 로직/프로토콜 파싱/HSM 연동)에서 난 오류인지 로그만 보고 구분하기 어려웠다. 도메인(WBankError/WCardError)과 계층(TaskError)을 기준으로 예외 클래스 계층을 나누고, 최상단에서 공통 컨버터(WBExceptionConverter)가 각 예외를 해당 도메인의 응답 코드 포맷으로 변환하도록 해서, 태스크 코드를 추가할 때도 그 도메인의 예외만 던지면 되도록 정리했다."
      }
    ]
  },
  {
    id: "card-auth-issue-system",
    company: "라츠온 (사내 솔루션)",
    title: "카드인증 발급 시스템 구축",
    period: "2023.06.05 ~ 2024.03.29",
    category: "시스템구축 및 운영 > IT시스템관리",
    summary: "카드 인증·발급 처리를 위한 사내 솔루션(백오피스 시스템) 구축. HSM(PKCS#11)을 통한 키/슬롯 관리 웹 UI와, 카드 인증(authsvr)·은행 발급(issuesvr)을 각각 처리하는 Netty TCP 서버로 구성되며 EAI 미들웨어와 연동한다.",
    role: "팀장과 함께 분석·설계 진행 후 구현 담당 (TODO: 실제 담당 범위를 확인해 작성하세요)",
    teamSize: "팀장 1명(분석·설계) + 본인 1명(분석·설계 지원 및 개발) — 개발은 단독 수행 (TODO: 확인 필요)",
    techStack: ["Java 8", "Spring Boot 2.7", "Netty", "MyBatis", "MariaDB/Tibero", "PKCS#11 (HSM)", "Jasypt"],
    metrics: [
      { value: "약 12,500", label: "LOC" },
      { value: "183개", label: "클래스" },
      { value: "257회", label: "커밋" },
      { value: "2개", label: "Netty TCP 서버(카드계/은행계)" }
    ],
    achievements: [
      "카드/은행 각 프로토콜에 대한 커스텀 Netty 파이프라인(길이필드 디코더, 전략 패턴 메시지 핸들러) 구현",
      "PKCS#11 저수준 API로 HSM 슬롯/세션 관리, KCV 계산 등 직접 구현",
      "업로드된 jar를 런타임에 동적 로드하는 플러그인 구조로 재배포 없이 업무 로직 교체 가능하도록 설계",
      "DB 연결 불가 시 캐시된 XML로 폴백하는 장애 대응 로직 구현"
    ],
    keyFeatures: [
      "카드 인증(authsvr)/은행 발급(issuesvr) Netty TCP 서버 및 HSM 키/슬롯 관리 웹 UI",
      "PKCS#11 저수준 API 기반 HSM 슬롯/세션 관리, KCV 계산",
      "URLClassLoader 기반 동적 업무 로직 jar 교체 구조",
      "DB 장애 시 캐시 XML 폴백 처리"
    ],
    challenges: [
      {
        problem: "카드/PIN 즉시발급 업무 로직(태스크)이 자주 바뀌는데, 로직이 바뀔 때마다 운영 중인 서버를 재배포하면 그 사이 서비스가 끊기는 문제",
        solution: "업로드된 jar를 URLClassLoader로 런타임에 로드하는 동적 플러그인(TaskLoader) 구조를 도입해, 서버 재시작 없이 특정 태스크 코드의 로직만 새 jar로 교체",
        detail: "업무 로직 jar를 taskCd/버전_파일명 규칙으로 디스크에 저장해두고, TaskLoader가 그 경로를 URLClassLoader로 감싸 클래스를 로드한 뒤 객체 캐시(objectMap)에 담아두는 구조를 만들었다. 신규 로직을 올릴 때는 새 버전의 jar 파일만 업로드하고 해당 taskCd만 다시 로드하면 되므로, 관련 없는 다른 태스크나 서버 전체에는 영향을 주지 않는다. getObject()에서는 이미 로드된 클래스는 캐시에서 바로 꺼내 쓰고, 처음 요청된 클래스만 동기화 블록 안에서 인스턴스를 생성하는 더블 체크 락킹(double-checked locking)으로 여러 스레드가 동시에 같은 태스크를 요청해도 중복 생성 없이 안전하게 동작하도록 했다."
      },
      {
        problem: "DB 연결이 끊겼을 때 태스크 초기화 정보를 조회할 수 없어 서비스가 완전히 중단되는 문제",
        solution: "DB 연결 실패 시 캐시된 XML(load.xml/init.xml)을 읽어 서비스를 계속할 수 있도록 폴백 로직을 추가",
        detail: "태스크 로드/초기화에 필요한 정보(태스크 코드, 버전, 파일명, HSM 슬롯명, 키 라벨 등)를 평소에는 DB에서 조회하는데, DB가 일시적으로 끊기면 신규 요청 처리 자체가 막혀버렸다. 정상 동작 중에는 매번 로드/초기화 결과를 XML 파일(load.xml/init.xml)로도 함께 남겨두고, DataAccessException이 발생하는 시점에는 loadAllWithNoDB()가 DB 대신 이 XML을 읽어 마지막으로 정상 조회됐던 태스크 목록을 그대로 복원하도록 만들어, DB 장애 중에도 이미 알려진 태스크들은 서비스가 유지되게 했다."
      }
    ]
  },
  {
    id: "kms-build",
    company: "라츠온 (사내 솔루션)",
    title: "Key Management System 구축",
    period: "2023.02.06 ~ 2023.05.05",
    category: "시스템구축 및 운영 > IT시스템관리",
    summary: "PKCS#11 기반 HSM 키 관리 콘솔 구축. RSA/대칭키 생성·가져오기·내보내기, 인증서 저장, 키 기반 암복호화 등 HSM 키 생애주기를 관리하며, 이후 진행된 현대차증권 KMIP 기반 차세대 KMS 프로젝트가 이 시스템의 핵심 로직(키 컴포넌트 조합, PkcsService 등)을 그대로 포팅해 이어받았다.",
    role: "팀장과 함께 분석·설계 진행 후 구현 담당 (TODO: 실제 담당 범위를 확인해 작성하세요)",
    teamSize: "팀장 1명(분석·설계) + 본인 1명(분석·설계 지원 및 개발) — 개발은 단독 수행 (TODO: 확인 필요)",
    techStack: ["Java 8", "Spring Boot 2.7", "MyBatis", "SQLite", "PKCS#11 (HSM)", "SpongyCastle", "JSP"],
    metrics: [
      { value: "약 7,000", label: "LOC" },
      { value: "65개", label: "클래스" },
      { value: "165회", label: "커밋" },
      { value: "1개", label: "SEED 블록암호 직접 구현 (ECB/CBC)" }
    ],
    achievements: [
      "저수준 PKCS#11 연동으로 HSM 슬롯 로그인, 키 생성/삭제/KCV 계산 구현",
      "금융권 HSM의 다중 관리자 키 컴포넌트 조합 및 DES 홀수 패리티 로직을 직접 구현 — 이후 KMIP 기반 차세대 KMS 프로젝트에서 이 로직을 그대로 포팅",
      "국내 표준 블록암호 SEED(KISA)를 ECB/CBC 모드로 처음부터 구현",
      "인증서 저장 및 키 기반 압축/암복호화 기능 구현"
    ],
    keyFeatures: [
      "PKCS#11 기반 HSM 키 생성/삭제/KCV 계산 콘솔",
      "다중 관리자 키 컴포넌트 조합 및 DES 홀수 패리티 로직",
      "SEED(KISA) 블록암호 ECB/CBC 직접 구현",
      "인증서 저장 및 키 기반 압축/암복호화"
    ],
    challenges: [
      {
        problem: "TODO: 확인/보완 필요 — JDK 내부 PKCS#11 wrapper(sun.security.pkcs11.wrapper)를 직접 사용해야 해서 JDK 버전/네이티브 라이브러리 설치 여부에 민감했음",
        solution: "네이티브 라이브러리가 설치되지 않은 환경(로컬 개발 등)에서는 관련 기능을 비활성화할 수 있도록 분기 처리",
        detail: "공식 PKCS#11 클라이언트 라이브러리 대신 JDK 내부 클래스를 직접 사용했기 때문에 JDK 배포판/버전에 따라 클래스 존재 여부나 동작이 달라질 위험이 있었고, 네이티브 HSM 라이브러리가 설치되지 않은 개발자 PC에서는 아예 클래스 로딩부터 실패했다. 이런 환경에서도 화면 개발이나 다른 기능 테스트가 가능하도록, HSM 관련 기능 초기화 시점에 네이티브 라이브러리 존재 여부를 확인해 없으면 해당 기능만 비활성화하고 나머지는 정상 동작하도록 분리했다."
      },
      {
        problem: "TODO: 확인/보완 필요 — 금융 HSM의 키 분할(다중 관리자 승인) 방식을 표준 라이브러리 없이 직접 구현해야 했음",
        solution: "레거시 로직을 기반으로 3-컴포넌트 XOR 조합과 DES 홀수 패리티 계산을 직접 구현",
        detail: "금융권 HSM은 하나의 마스터키를 관리자 3명이 나눠 갖는 키 컴포넌트 분할 방식을 요구하는데, 이를 지원하는 범용 라이브러리가 없어 XOR 조합과 DES 키의 홀수 패리티 비트 계산 로직을 직접 구현해야 했다. 이 로직(MakeComponent/MakeOddPatiry)은 이후 현대차증권 KMIP 기반 차세대 KMS 프로젝트에서 순수 유틸리티 형태로 그대로 포팅되어 재사용됐다."
      }
    ]
  },
  {
    id: "kb-sandbox-portal",
    company: "KB",
    title: "샌드박스 포털 구축",
    period: "2022.07.25 ~ 2022.12.21",
    category: "시스템구축 및 운영 > IT시스템관리",
    summary: "KB 사내 개발자를 위한 멀티클라우드(AWS/Azure/GCP) 샌드박스 프로젝트 프로비저닝 포털. 프로젝트 생성 시 클라우드 리소스와 GitHub/Jira/Jenkins/Harbor/ArgoCD 등 DevOps 도구 계정을 자동 연동하며, 관리자 화면에서 사용자·프로젝트·비용 등을 관리한다.",
    role: "관리자 CRUD 화면 개발, 각 파트너 REST API 연계 조사 및 테스트 — 특히 GCP 연동 부분 담당",
    teamSize: "개발자 4명 중 1명으로 참여",
    techStack: ["Java 11", "Spring Boot 2.7", "MyBatis", "MySQL", "Redis", "SAML2", "AWS/Azure/GCP SDK"],
    metrics: [
      { value: "약 31,400", label: "LOC" },
      { value: "419개", label: "클래스" },
      { value: "1,159회", label: "커밋" },
      { value: "3개", label: "클라우드 연동(AWS/Azure/GCP)" }
    ],
    achievements: [
      "사용자/프로젝트/공지/FAQ 등 관리자 CRUD 화면 개발",
      "Github/Jira/Confluence/Jenkins/Nexus/Harbor/ArgoCD 등 다수 파트너 API 연계 조사 및 테스트",
      "GCP 파트너 권한 부여 및 프로젝트 생성·삭제, 유저 권한 추가·삭제 처리",
      "GCP Compute/GKE/SQL Admin API를 활용한 유휴 리소스 자동 중지 기능(GcpResourceStopService) 구현"
    ],
    keyFeatures: [
      "사용자/프로젝트/공지/FAQ 관리자 CRUD 화면",
      "Github/Jira/Confluence/Jenkins/Nexus/Harbor/ArgoCD 등 파트너 API 연계 조사 및 테스트",
      "GCP 파트너 권한 부여, 프로젝트 생성·삭제, 유저 권한 추가·삭제 처리",
      "GCP 유휴 리소스 자동 중지 기능(GcpResourceStopService)"
    ],
    challenges: [
      {
        problem: "GCP는 개별 사용자 계정이 아니라 서비스 계정으로 Admin Directory API(조직의 그룹/멤버 관리)를 호출해야 했는데, 서비스 계정 자체에는 조직 관리 권한이 없어 API 호출이 거부됨",
        solution: "GCP의 도메인 위임(domain-wide delegation) 기능을 이용해, 서비스 계정이 실제 관리자 권한을 가진 슈퍼어드민 계정을 '위임(impersonate)'해서 호출하도록 구현",
        detail: "Admin Directory API는 일반 서비스 계정 인증만으로는 조직의 그룹/멤버 정보에 접근할 수 없고, Google Workspace 관리자가 사전에 도메인 전체 위임을 승인해준 뒤 서비스 계정이 특정 관리자 이메일을 위임받아 호출해야 한다. GoogleCredentials.fromStream()으로 서비스 계정 키를 읽어 필요한 스코프(SCOPES)로 제한한 뒤, createDelegated()로 슈퍼어드민 이메일을 지정해 그 권한으로 동작하는 자격증명을 만들고 이를 HttpCredentialsAdapter로 감싸 Directory/CloudResourceManager 클라이언트에 주입하는 방식으로 연동했다."
      },
      {
        problem: "개발 환경의 클라우드 리소스(Compute/GKE/DB)가 실험이 끝난 뒤에도 방치돼 비용이 계속 발생하는 문제",
        solution: "GCP Compute/GKE/SQL Admin API를 조사해 유휴 리소스를 자동으로 중지시키는 GcpResourceStopService를 구현",
        detail: "샌드박스 프로젝트 특성상 개발자들이 실험용으로 인스턴스를 띄워놓고 그대로 잊어버리는 경우가 잦아 비용이 계속 누적됐다. AWS/Azure/GCP를 모두 지원해야 했으므로, 클라우드 공급자별 리소스 중지 로직을 공통 인터페이스(CspResourceStopService)로 추상화하고 GCP 구현체는 빈 이름을 'gcp'+Suffix로 등록해 스케줄러가 프로젝트에 연결된 CSP 종류에 맞는 구현체를 자동으로 찾아 호출하도록 했다. GCP 구현체 내부에서는 Compute Engine, GKE(오토스케일링 포함), Cloud SQL을 순서대로 점검해 켜져 있는 리소스를 모두 중지시킨다."
      }
    ]
  },
  {
    id: "naver-e-certificate",
    company: "네이버",
    title: "전자증명서",
    period: "2021.11.08 ~ 2022.02.18",
    category: "시스템구축 및 운영 > IT시스템관리",
    summary: "네이버 전자증명서 서비스의 운영 어드민 콘솔 구축. 증명서(문서종류)·발급기관·제휴사·약관·배너 등을 관리하고 발급 통계를 모니터링하는 관리자 화면을 제공하며, 실제 전자서명/검증은 별도 상위 발급 서비스에서 처리하고 이 앱은 연동·운영 관리 기능을 담당한다.",
    role: "관리자 CRUD 화면 개발 위주로 담당",
    teamSize: "개발자 4명 중 1명으로 참여",
    techStack: ["Java 8", "Spring Boot 2.5", "MyBatis", "MySQL", "Redis", "FreeMarker", "OpenFeign"],
    metrics: [
      { value: "17개", label: "관리자 컨트롤러" },
      { value: "301회", label: "커밋 (전자증명서 모듈)" },
      { value: "49개", label: "테스트 클래스 (전자증명서 모듈)" },
      { value: "7종", label: "통계 대시보드" }
    ],
    achievements: [
      "증명서(문서종류)/발급기관/접수기관/제휴사/약관/배너 등 도메인별 관리자 CRUD 화면 개발",
      "접수기관 로고 이미지 일괄 업로드, 약관 동의 이력 관리 등 운영 편의 기능 구현",
      "저장공간/서비스가입/패키지 발급/증명서 현황 등 7종 통계 대시보드 및 엑셀 다운로드 기능 구현",
      "전자증명서 발급/검증 API를 연동하는 테스트용 프록시 엔드포인트 개발"
    ],
    keyFeatures: [
      "증명서(문서종류)/발급기관/접수기관/제휴사/약관/배너 관리자 CRUD 화면",
      "접수기관 로고 이미지 일괄 업로드, 약관 동의 이력 관리",
      "7종 통계 대시보드 및 엑셀 다운로드",
      "전자증명서 발급/검증 API 연동 테스트 프록시"
    ],
    challenges: [
      {
        problem: "TODO: 확인/보완 필요 — 접수기관(전자지갑) 로고 이미지를 기관마다 화면에서 하나씩 업로드/매칭하기에는 건수가 많고 번거로웠음",
        solution: "이미지 파일을 여러 개 한 번에 선택해 올리면, 파일명(전자지갑 주소 규칙)으로 대상 기관을 자동 매칭해 일괄 반영하는 bulkUpload 기능을 구현하고, 성공/실패 건수를 라인 단위로 집계해 반환",
        detail: "정해진 파일명 규칙(파일명 = 전자지갑 주소)으로 이미지들을 한 번에 여러 개 선택해서 올리면, 서버가 각 파일명으로 대상 접수기관을 조회해 매칭되는 기관에만 이미지 URL을 반영하는 방식으로 만들었다. 파일명과 일치하는 접수기관이 없으면 그 건만 실패로 기록하고 나머지는 계속 처리되도록 해서, 한두 건이 잘못 올라와도 전체 업로드가 막히지 않게 했다. 처리 후에는 총 건수/성공/실패 건수와 실패 사유 목록을 함께 돌려줘서 관리자가 어떤 파일이 왜 실패했는지 바로 확인할 수 있게 했다."
      },
      {
        problem: "TODO: 확인/보완 필요 — 발급 건수, 서비스 가입자 수, 패키지별 발급량 등 7가지 통계가 서로 다른 도메인 테이블에 흩어져 있어 운영자가 매번 여러 화면을 오가며 확인해야 했고, 화면 조회만으로는 보고서 작성이 안 됐음",
        solution: "통계 유형별로 조회/엑셀다운로드 API 쌍을 만들고, 화면 조회 시 썼던 검색조건을 그대로 엑셀 다운로드에도 재사용해 '보던 화면 그대로' 엑셀로 받을 수 있게 구현",
        detail: "저장공간/서비스가입/패키지발급/증명서현황/기관접수/기관반려 등 7종 통계마다 이 패턴 하나로 통일했다: 목록 조회 API가 페이징된 화면용 데이터를 주고, 같은 검색조건(CertificateStatsSearch)을 받는 엑셀다운로드 API는 페이지 크기를 전체 건수로 바꿔 다시 조회한 뒤 POI로 엑셀을 만들어 응답한다. 통계 항목(컬럼)을 enum으로 정의해 헤더 행을 자동으로 뽑아내도록 해서, 통계 종류가 늘어나도 매번 같은 구조의 서비스 클래스만 추가하면 되게 만들었다."
      }
    ]
  }
];

// 기술 스택 종합 — count는 projects[].techStack 기준으로 자동 집계됨 (js/main.js 참고)
const skillCategories = [
  {
    name: "언어 · 프레임워크",
    skills: [
      { label: "Java", match: ["Java 8", "Java 8/11", "Java 11", "Java 17"] },
      { label: "Spring Boot / Spring Framework", match: ["Spring Framework 5", "Spring Boot 2.7", "Spring Boot 2.5", "Spring Boot 3.4", "Spring Boot 3.2"] },
      { label: "React", match: ["React 18"] },
      { label: "TypeScript", match: ["TypeScript"] }
    ]
  },
  {
    name: "네트워크 · 프로토콜",
    skills: [
      { label: "Netty (TCP 소켓 서버/클라이언트)", match: ["Netty 4", "Netty"] },
      { label: "KMIP 2.1", match: ["KMIP 2.1"] },
      { label: "STOMP/WebSocket", match: ["STOMP/WebSocket"] }
    ]
  },
  {
    name: "보안 · 암호화 · HSM",
    skills: [
      { label: "PKCS#11 (HSM)", match: ["PKCS#11 (HSM)"] },
      { label: "Bouncy Castle / SpongyCastle", match: ["Bouncy Castle", "SpongyCastle"] },
      { label: "Jasypt", match: ["Jasypt"] },
      { label: "SEED/3DES/AES", match: ["SEED/3DES/AES"] }
    ]
  },
  {
    name: "데이터베이스",
    skills: [
      { label: "MyBatis", match: ["MyBatis"] },
      { label: "Oracle", match: ["Oracle", "H2/Oracle"] },
      { label: "MariaDB / Tibero", match: ["MariaDB", "Tibero", "MariaDB/Tibero"] },
      { label: "MySQL", match: ["MySQL"] },
      { label: "SQLite", match: ["SQLite"] },
      { label: "MS SQL Server", match: ["MS SQL Server"] }
    ]
  },
  {
    name: "웹 · 인프라 · 기타",
    skills: [
      { label: "Thymeleaf", match: ["Thymeleaf"] },
      { label: "WebLogic", match: ["WebLogic"] },
      { label: "Redis", match: ["Redis"] },
      { label: "AWS/Azure/GCP SDK", match: ["AWS/Azure/GCP SDK"] },
      { label: "JNA", match: ["JNA"] },
      { label: "JWT", match: ["JWT"] },
      { label: "OpenFeign", match: ["OpenFeign"] },
      { label: "SAML2", match: ["SAML2"] },
      { label: "ZXing", match: ["ZXing"] },
      { label: "Log4j2", match: ["Log4j2"] },
      { label: "JSP / FreeMarker", match: ["JSP", "FreeMarker"] },
      { label: "Electron", match: ["Electron"] }
    ]
  }
];

// 개인/사이드 프로젝트 — 회사 프로젝트와 별개, 전부 1인 개발
const personalProjects = [
  {
    id: "yeham",
    title: "예함 — 경조사비 접수·정산 자동화 시스템",
    period: "2026.07 ~ 2026.08",
    summary: "결혼식·장례식·돌잔치 등 경조사 현장의 축의금/부의금 접수부터 정산까지 자동화하는 시스템. 모바일 청첩장, RSVP, QR 식권 체크인, 좌석 배정, 방명록, 지출·정산 관리를 지원하는 백엔드(yeham)+프론트(yeham-front)와, 결혼식 하루만 쓰고 버리는 경량 현장 접수 데스크 앱(yeham-desk)으로 구성된다.",
    techStack: ["Java 17", "Spring Boot 3.4", "MyBatis", "Oracle", "JWT", "React 18", "TypeScript", "Vite"],
    screenshots: [
      { src: "images/screenshots/yeham-events.png", caption: "행사 목록" },
      { src: "images/screenshots/yeham-event-detail.png", caption: "행사 상세 — 개요/수취인 관리" },
      { src: "images/screenshots/yeham-ledger.png", caption: "접수 장부 — 축의금 접수 내역 관리" },
      { src: "images/screenshots/yeham-qr-ticket.png", caption: "식권 발급 — QR 코드 자동 생성" },
      { src: "images/screenshots/yeham-settlement.png", caption: "정산 — 수취인별 정산 및 엑셀 다운로드" }
    ],
    metrics: [
      { value: "약 15,800", label: "LOC (3개 저장소 합산)" },
      { value: "3개", label: "저장소(백엔드/프론트/현장데스크)" },
      { value: "AES-256-GCM", label: "계좌번호 등 필드 암호화" },
      { value: "30일", label: "자동 데이터 파기 주기" }
    ],
    keyFeatures: [
      "모바일 청첩장(블록 기반 에디터, 카카오톡 공유 미리보기) 및 RSVP",
      "QR 식권 발급/체크인(입금 확인 연동, 부분사용 처리)",
      "홀/구역 좌석 배정, 방명록(비밀번호 기반 삭제)",
      "축의금·지출 정산과 대행업체(에이전시) 운영 정산 분리",
      "결혼식 당일용 경량 현장 접수 데스크 앱(yeham-desk, SQLite, 엑셀 내보내기)"
    ],
    challenges: [
      {
        problem: "TODO: 확인/보완 필요 — 결혼식 당일 현장 접수는 인터넷이 불안정한 곳에서도 끊김 없이 동작해야 했고, 노트북 한 대로 임시 서버를 띄워 여러 접수 기기가 붙는 구조가 필요했음",
        solution: "yeham-desk를 별도 경량 애플리케이션(SQLite, Java 8/Spring Boot 2.7)으로 분리해 노트북에서 로컬 Wi-Fi 서버로 띄우고, 행사 종료 후 엑셀로 내보내고 버리는 일회성 도구로 설계",
        detail: "본 서비스(yeham)는 Oracle DB와 JWT 인증을 쓰는 정식 백엔드라 현장에서 임시로 띄우기에는 무겁고 인터넷 연결에도 의존적이었다. yeham-desk는 완전히 별개의 코드베이스로, SQLite 파일 하나로 동작하고 노트북에서 로컬 서버로 띄워 같은 Wi-Fi의 다른 기기(태블릿 등)가 접속해 접수하도록 만들었다. 행사가 끝나면 접수 내역을 엑셀로 내보내고 해당 인스턴스는 버리는 일회성 도구로 설계했다."
      },
      {
        problem: "TODO: 확인/보완 필요 — 축의금 정산은 주최자(신랑측/신부측) 몫과, 행사를 대행하는 업체(에이전시)의 운영비 정산이 섞이면 안 되는 민감한 계산이었음",
        solution: "주최자용 소유 권한과 대행업체용 운영 권한을 분리하고, 정산 스냅샷은 확정 후 수정 불가능하게 만든 뒤 조정이 필요하면 별도 조정 이력으로 남기도록 설계",
        detail: "행사 주최자가 보는 '내 축의금 정산'과 대행업체가 보는 '운영 정산'이 같은 데이터를 다른 권한으로 봐야 해서, API 레벨에서 소유 범위와 운영 범위 조회를 분리했다. 또한 한 번 확정된 정산 결과가 이후 데이터 수정으로 슬쩍 바뀌는 일이 없도록 정산 시점의 스냅샷을 별도로 저장하고, 이후 수정 사항은 스냅샷을 고치는 대신 조정 이력을 추가하는 방식으로 만들었다."
      }
    ]
  },
  {
    id: "lots-talk",
    title: "채팅 프로그램 (lots-talk)",
    period: "2026.06 ~ 2026.07",
    summary: "STOMP/WebSocket 기반 실시간 그룹·다이렉트 메시징 프로그램. 채널/DM, 접속상태(온라인/자리비움/방해금지), 타이핑 표시, 리액션, 멘션, 읽음-확인 요청, 투표, 회의 일정조율 등을 지원하며, React+Electron 데스크톱 앱과 Spring Boot 백엔드로 구성된다.",
    techStack: ["Java 17", "Spring Boot 3.4", "MyBatis", "Oracle", "STOMP/WebSocket", "JWT", "React 18", "TypeScript", "Electron"],
    screenshots: [
      { src: "images/screenshots/lots-talk.png", caption: "채널 사이드바 및 접속상태 UI" },
      { src: "images/screenshots/lots-talk-dm.png", caption: "1:1 개인 메시지(DM) 대화방" },
      { src: "images/screenshots/lots-talk-mentions.png", caption: "멘션(@) 하이라이트 및 알림" }
    ],
    metrics: [
      { value: "약 10,900", label: "LOC (백엔드+프론트 합산)" },
      { value: "18개", label: "DB 테이블" },
      { value: "AES-256-GCM", label: "메시지 저장 암호화" },
      { value: "31→2", label: "사이드바 안읽음 배지 쿼리 수 개선" }
    ],
    keyFeatures: [
      "STOMP/WebSocket 기반 실시간 메시징(채널/DM), 타이핑 표시, 리액션, 멘션",
      "다중 세션(여러 기기/탭) 대응 접속상태 추적, 자리비움/방해금지 상태 유지",
      "메시지 본문 컬럼 단위 AES-256-GCM 암호화(MyBatis TypeHandler)",
      "읽음-확인 요청(ack-request) — 특정 사용자의 명시적 확인이 필요한 메시지",
      "Electron 기반 데스크톱 배포 및 자체 업데이트/배포 API"
    ],
    challenges: [
      {
        problem: "TODO: 확인/보완 필요 — WebSocket(STOMP) 연결은 HTTP 세션과 별개라서, 일반적인 세션 기반 인증 방식을 그대로 쓸 수 없었음",
        solution: "STOMP CONNECT 프레임에 담긴 JWT를 ChannelInterceptor에서 검증해 STOMP 세션에 직접 Principal을 부여하고, /ws 경로는 Spring Security 필터체인에서 아예 제외",
        detail: "일반 REST API는 Spring Security의 세션/토큰 필터를 그대로 타지만, WebSocket 업그레이드 요청과 이후 STOMP 프레임은 그 필터체인을 거치지 않는다. STOMP CONNECT 프레임 처리 시점에 별도로 JWT를 꺼내 검증하고, 검증된 사용자 정보를 STOMP 세션의 Principal로 등록해 이후 메시지 전송/구독 권한 체크에 쓰도록 만들었다."
      },
      {
        problem: "TODO: 확인/보완 필요 — 사용자가 여러 탭/기기에서 동시 접속했을 때 한 탭만 닫아도 온라인 상태가 꺼지는 문제, 자리비움/방해금지처럼 수동으로 설정한 상태가 재연결 시 초기화되는 문제",
        solution: "세션→사용자, 사용자→활성세션수를 함께 추적하는 PresenceListener를 만들어 '마지막 세션'이 끊길 때만 오프라인 처리하고, 수동 상태는 재연결 시 덮어쓰지 않도록 처리",
        detail: "ConcurrentHashMap으로 세션ID→사용자, 사용자→활성 세션 수를 관리해서, 사용자의 활성 세션 수가 0이 될 때만 오프라인으로 전환하도록 만들었다. 자리비움/방해금지처럼 사용자가 직접 설정한 상태는 새 연결이 생겨도 자동으로 '온라인'으로 덮어쓰지 않고 유지되도록 분리했다."
      }
    ]
  },
  {
    id: "baby-yeolmu",
    title: "베이비열무 (아기 육아일기)",
    period: "2026.04",
    summary: "가족과 공유하는 비공개 아기 육아일기 웹앱. 성장·수유·수면·접종·병원 기록, 캘린더 일기, 사진첩, 4컷 포토콜라주 생성 기능을 제공하며, 계정 없이도 권한이 제한된 초대 링크(갤러리 열람 전용, 캘린더 작성 가능 등)로 가족을 초대할 수 있다.",
    techStack: ["Java 17", "Spring Boot 3.2", "Thymeleaf", "MyBatis", "H2/Oracle", "Web Push (VAPID)", "PWA"],
    screenshots: [
      { src: "images/screenshots/baby-yeolmu-login.png", caption: "로그인 화면" },
      { src: "images/screenshots/baby-yeolmu-dashboard.png", caption: "홈 대시보드 (데모 데이터)" },
      { src: "images/screenshots/baby-yeolmu-invite.png", caption: "초대장 발행 — 관계별 권한 설정 및 초대코드 발급" },
      { src: "images/screenshots/baby-yeolmu-fourcut.png", caption: "인생네컷 — 레이아웃/배경/스티커를 활용한 포토 콜라주" }
    ],
    metrics: [
      { value: "약 4,230", label: "LOC (Java)" },
      { value: "22개", label: "DB 테이블" },
      { value: "15회", label: "커밋" },
      { value: "31→2", label: "캘린더 페이지 쿼리 수 개선" }
    ],
    keyFeatures: [
      "성장/수유/수면/접종/병원기록/캘린더 일기 등 다중 도메인 육아 기록 관리",
      "계정 없이 권한별(갤러리 열람/캘린더 작성 등) 초대 링크로 가족 공유",
      "4컷 포토 콜라주 생성 기능(템플릿/스티커 선택)",
      "VAPID Web Push로 사진 업로드 등 알림 발송",
      "PWA(서비스워커)로 설치형 앱처럼 사용 가능"
    ],
    challenges: [
      {
        problem: "TODO: 확인/보완 필요 — 계정 로그인 없이 초대 링크만으로 접근하는 게스트를, 일반 로그인 사용자와 동일한 권한 체계(Spring Security)로 다뤄야 했음",
        solution: "OncePerRequestFilter로 게스트 세션 정보를 읽어 권한 문자열을 ROLE_* 형태로 변환한 뒤, 로그인 사용자와 동일한 Authentication 객체로 만들어 Spring Security에 주입",
        detail: "초대 링크로 들어온 게스트는 회원가입 없이 갤러리 열람, 캘린더 작성 등 권한 조합만 다르게 부여받는데, Spring Security의 인가 체크는 기본적으로 로그인 사용자를 전제로 한다. 세션에 저장된 게스트 권한 문자열을 파싱해 ROLE_GALLERY_COMMENT, ROLE_CALENDAR_WRITE 같은 권한으로 변환하고, 이를 담은 합성 Authentication 객체를 만들어 이후 컨트롤러의 권한 체크가 로그인 사용자와 동일하게 동작하도록 만들었다."
      },
      {
        problem: "TODO: 확인/보완 필요 — 게스트 인증 필터가 매 요청마다 DB에서 권한을 다시 조회해 정적 리소스 요청까지 DB 부하를 유발하는 문제, 캘린더 페이지 조회 시 쿼리가 과도하게 나가는 문제",
        solution: "게스트 권한을 세션에 5분간 캐시하고 정적 리소스 요청은 필터를 건너뛰도록 처리, 캘린더 페이지는 쿼리 구조를 바꿔 31회에서 2회로 축소",
        detail: "게스트 인증 필터가 CSS/JS/이미지 같은 정적 리소스에도 매번 DB 조회를 하고 있어 필터에서 정적 리소스 경로는 건너뛰도록 처리하고, 권한 조회 결과를 세션에 5분간 캐시했다. 캘린더 페이지는 날짜별로 반복 조회하던 쿼리를 한 번에 가져오는 구조로 바꿔 31개였던 쿼리를 2개로 줄였다."
      }
    ]
  },
  {
    id: "card-print-maker",
    title: "카드 전사 이미지 메이커",
    period: "2026.05",
    summary: "학생증/사원증 등 카드 앞뒷면 이미지를 JSON 레이아웃 스펙으로 정의하고 합성해주는 카드 발급용 이미지 생성기. 브라우저 기반 비주얼 에디터로 레이아웃을 드래그·리사이즈·회전하며 편집하고, 서버에서 카드프린터 출력 모드(컬러/그레이스케일/바이너리)에 맞춰 이미지를 렌더링한다.",
    techStack: ["Java 8", "Spring Boot 2.7", "Thymeleaf", "ZXing", "Java AWT/Graphics2D", "Vanilla JS"],
    screenshots: [
      { src: "images/screenshots/card-print-maker.png", caption: "JSON 레이아웃 편집기 + 카드 미리보기 UI" },
      { src: "images/screenshots/card-preview-generated.png", caption: "템플릿/배경 선택 후 생성된 카드 미리보기" },
      { src: "images/screenshots/card-element-selected.png", caption: "요소 드래그 이동 및 위치 조정 UI" }
    ],
    metrics: [
      { value: "약 3,140", label: "LOC (Java)" },
      { value: "약 4,700", label: "LOC (JS 에디터)" },
      { value: "4종", label: "카드 이미지 변형(컬러/모노 x 전/후면)" },
      { value: "8가지", label: "EXIF 방향 보정 케이스" }
    ],
    keyFeatures: [
      "JSON 레이아웃 스펙 → 재귀적 뷰 트리(Frame/LinearLayout → Text/Image/BarcodeView) 렌더링 엔진",
      "className 필드 기반 다형성 JSON 역직렬화로 레이아웃 트리 복원",
      "EXIF 방향 정보를 반영한 8가지 회전 케이스 자동 보정",
      "컬러/그레이스케일/바이너리 등 카드프린터 출력 모드별 이미지 변형 생성",
      "브라우저 드래그·리사이즈·회전 비주얼 에디터"
    ],
    challenges: [
      {
        problem: "TODO: 확인/보완 필요 — 카드 레이아웃을 구성하는 요소(텍스트/이미지/바코드)가 서로 다른 카드프린터 컬러 모드(컬러/그레이스케일/바이너리)로 각각 출력돼야 했음",
        solution: "레이아웃 노드마다 컬러 모드를 지정해 BufferedImage 타입(RGB/그레이스케일/바이너리)으로 매핑하고, 카드 한 장당 컬러/모노 x 전/후면 4종의 이미지 변형을 생성",
        detail: "카드 프린터는 컬러 리본과 모노(흑백) 리본을 따로 인쇄하는 경우가 많아, 같은 레이아웃이라도 컬러용과 모노용 이미지를 각각 만들어야 했다. Layout 노드가 자신의 컬러 모드에 맞는 BufferedImage로 스스로를 그린 뒤 부모가 그 비트맵을 다시 합성하는 재귀 구조로 만들어서, 최종적으로 전면 컬러/전면 모노/후면 컬러/후면 모노 4가지 이미지를 한 번의 렌더링 파이프라인에서 뽑아내도록 했다."
      },
      {
        problem: "TODO: 확인/보완 필요 — 사용자가 올린 사진이 휴대폰 촬영 방향(세로/가로, 좌우반전 등)에 따라 제각각으로 삽입돼 카드에 사진이 회전된 채로 들어가는 문제",
        solution: "EXIF Orientation 값을 읽어 8가지 케이스를 AffineTransform으로 직접 보정하는 유틸리티를 구현",
        detail: "사진의 EXIF Orientation 태그를 읽은 뒤, 8가지 방향(정상/좌우반전/180도/180도+반전/90도 등) 각각에 대응하는 AffineTransform 변환을 직접 구현해 항상 올바른 방향으로 사진이 카드에 들어가도록 만들었다."
      }
    ]
  }
];
