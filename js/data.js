// 프로젝트 데이터 — 최신순
// TODO 표시된 항목은 실제 내용으로 채워주세요.
const projects = [
  {
    id: "naverpay-gateway",
    company: "현대백화점",
    title: "네이버페이 게이트웨이 구축",
    period: "2026.01.19 ~ 2026.04.30",
    category: "시스템구축 및 운영 > IT시스템관리",
    summary: "네이버페이와 현대백화점 내부 시스템 사이에 끼어서 결제 승인, 카드 등록/삭제 요청을 중계해주는 서버입니다. 카드 등록 자체는 네이버페이 쪽에서도 자체적으로 처리할 수 있는 구조라, 이 서버는 그와 별개로 실시간 승인·등록 요청을 자체 TCP 바이너리 프로토콜로 중계하고, 현대백화점 쪽에서 카드 발급이 끝나면 그 결과를 HTTPS/JSON 방식의 발급 통지 전문으로 네이버 쪽에 전달하는 역할까지 맡습니다. 두 회사가 쓰는 통신 방식과 암호화 규칙이 서로 달라서, 이 서버가 중간에서 요청을 풀어 해석한 다음 내부 시스템이 알아듣는 방식으로 바꿔 전달하고, 응답이 오면 다시 암호화해서 돌려줍니다.",
    role: "팀장과 함께 요구사항을 분석하고 전체 구조를 잡은 뒤, 실제 구현을 전담했습니다. 네이버페이와 현대백화점 두 시스템의 통신 규격 차이를 직접 분석해 프로토콜 변환 구조를 설계했고, 필드 단위 암복호화 로직, 클러스터 환경에서의 중복 없는 재시도 배치, 카드번호 마스킹까지 핵심 로직을 모두 구현했습니다.",
    teamSize: "팀장 1명(분석·설계) + 본인 1명(분석·설계 지원 및 개발) — 개발은 단독 수행",
    techStack: ["Java 8", "Spring Framework 5", "Netty 4", "MyBatis", "Oracle", "Bouncy Castle", "Jasypt", "WebLogic"],
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

      <line x1="548" y1="182" x2="467" y2="182" stroke="#6b7280" stroke-width="1.2" stroke-dasharray="4 3" marker-end="url(#np-arrow)"/>
      <line x1="283" y1="182" x2="171" y2="182" stroke="#6b7280" stroke-width="1.2" stroke-dasharray="4 3" marker-end="url(#np-arrow)"/>
      <text x="227" y="178" text-anchor="middle" font-size="8.5" fill="#6b7280">발급 통지 · HTTPS/JSON</text>

      <line x1="375" y1="196" x2="375" y2="213" stroke="#6b7280" stroke-width="1.2" stroke-dasharray="3 2"/>
      <rect x="285" y="213" width="180" height="38" rx="8" fill="#ffffff" stroke="#e5e7eb" stroke-dasharray="4 3"/>
      <text x="375" y="237" text-anchor="middle" font-size="10.5" fill="#6b7280">재시도 배치(JobAuthNotice) · 실패 시 SMS</text>
    </svg>`,
    achievements: [
      "네이버페이와 현대백화점, 통신 방식이 전혀 다른 두 시스템을 동시에 중계하는 서버를 직접 구축했습니다",
      "실시간 TCP 승인·등록 채널과는 별개로, 카드 발급 완료 후 네이버 쪽에 HTTPS/JSON으로 발급 통지 전문을 보내는 발신 모듈을 따로 구현했습니다",
      "민감한 항목만 표시해두면 자동으로 암호화·복호화되는 공통 구조를 설계해 적용했습니다",
      "여러 대의 서버가 함께 도는 환경에서 결제 승인 통보가 실패해도 서로 겹치지 않게 나눠서 최대 3번 재시도하고, 그래도 안 되면 담당자에게 문자가 가도록 구현했습니다",
      "네이버페이 요구 규격에 맞춰 60개가 넘는 오류 코드 체계를 수립했습니다"
    ],
    challenges: [
      {
        problem: "네이버페이와 현대백화점 내부 시스템이 서로 다른 통신 규격을 써서, 하나의 중계 서버가 양쪽을 동시에 이어줘야 했음 — 실시간 승인/카드등록 요청은 자체 TCP 바이너리 프로토콜을 쓰는 반면, 카드 발급이 끝난 뒤 네이버 쪽에 보내는 발급 통지는 HTTPS/JSON 방식이라 전송 계층부터 완전히 달랐음",
        solution: "네이버페이 쪽과 내부 시스템 쪽에 각각 독립된 처리 통로를 만들고, 그 사이에서 형식을 서로 변환해주는 담당 모듈을 따로 두어 처리. 발급 통지처럼 HTTPS/JSON을 쓰는 구간은 TCP 채널과 아예 별도의 발신 모듈로 분리해 구현",
        detail: "네이버페이와 통신하는 부분, 현대백화점 내부 시스템과 통신하는 부분을 아예 분리된 두 통로로 구성하고 그 사이를 변환 모듈이 이어주는 구조로 설계했습니다. 두 회사의 통신 규격이 데이터 구조부터 암호화 방식, 시간제한까지 전부 달라서, 하나로 억지로 합쳐두면 한쪽을 수정할 때마다 다른 쪽 로직까지 영향을 받을 위험이 있었습니다. 그래서 네이버페이에서 들어온 요청을 해석하고 풀어낸 다음 내부 시스템이 알아듣는 형식으로 변환해 전달하고, 응답이 오면 반대로 다시 변환해 네이버페이 쪽에 돌려주는 방식을 택했습니다. 여기에 더해, 카드 등록은 네이버페이 쪽에서 자체적으로도 처리할 수 있는 구조라 실시간 승인·등록 요청과는 별개로, 현대백화점 내부 시스템에서 카드 발급이 완료되면 그 결과를 네이버 쪽에 알려주는 발급 통지 전문을 HTTPS로 JSON 포맷에 실어 보내야 했습니다. TCP 바이너리 프로토콜과 HTTPS/JSON은 연결 방식(상시 연결 vs 매번 새 연결)부터 데이터 포맷, 인증 방식까지 전혀 달라서, 이 발급 통지 발신 로직은 기존 TCP 파이프라인과 완전히 분리된 별도 클라이언트 모듈로 구현하고 실패 시 재시도까지 독립적으로 관리하도록 만들었습니다."
      },
      {
        problem: "서버 여러 대가 동시에 도는 환경에서 결제 승인 통보가 실패했을 때, 여러 서버가 동시에 같은 건을 중복으로 재시도하면 안 되는 문제",
        solution: "각 서버에 번호를 매겨 재시도 작업을 서버별로 나눠 맡기고, 3번 재시도해도 실패하면 문자로 알림",
        detail: "재시도 작업이 클러스터의 모든 서버에서 똑같이 실행되다 보니, 그대로 두면 같은 실패 건을 여러 서버가 동시에 처리해 네이버페이 쪽에 중복 통보가 나갈 우려가 있었습니다. 그래서 서버가 켜질 때 자기 번호를 확인해두고, 매분 도는 재시도 작업에서 '지금 몇 분인지'를 서버 대수로 나눈 나머지가 자기 번호와 같은 서버만 실제로 재시도하도록 구성했습니다. 실패 횟수는 DB에 누적해두다가 3번을 넘기면 그 시점에 담당자에게 문자를 보냅니다."
      },
      {
        problem: "카드번호 같은 민감한 정보가 로그에 그대로 남는 보안 문제",
        solution: "가리기 처리 기능을 추가해 로그와 화면 응답에서 카드번호가 자동으로 가려지도록 처리",
        detail: "데이터 항목에 '가려야 할 항목'이라는 표시만 붙여두면, 로그를 남기거나 화면에 값을 보여줄 때 해당 부분이 자동으로 '*'로 바뀌도록 구현했습니다. 항목마다 가릴 시작·끝 위치를 따로 지정할 수 있어서 카드번호는 중간 자리만, 계좌번호는 뒷자리만 가리는 식으로 다르게 적용할 수 있습니다."
      },
      {
        problem: "네이버페이와 현대백화점이 서로 다른 키로 암호화를 요구해서, 요청/응답 방향에 따라 다른 키를 써야 했음",
        solution: "암호화가 필요한 데이터 항목을 미리 표시해두고, 요청인지 응답인지에 따라 맞는 키를 골라 항목 단위로 암·복호화하도록 처리",
        detail: "네이버페이가 보낸 요청은 현대백화점이 가진 비공개 키로 복호화하되, 암호화가 필요하다고 표시된 항목만 골라 처리했습니다. 반대로 응답을 구성할 때는 매번 새 세션키를 생성해 네이버페이 공개 키로 감싸고, 그 세션키로 응답 항목을 암호화했습니다. 데이터 전체를 일괄 암호화하지 않고 항목 단위로 처리한 이유는, 암호화 대상 항목이 요청 종류마다 달라서 항목별로 표시해두는 방식이 아니면 하나의 공통 로직으로 처리하기 어려웠기 때문입니다."
      }
    ]
  },
  {
    id: "hmc-securities-auth",
    company: "현대차증권",
    title: "차세대 프로젝트 인증발급시스템 도입",
    period: "2025.11.03 ~ 2026.01.09",
    category: "시스템구축 및 운영 > IT시스템관리",
    summary: "현대차증권 차세대 시스템에 들어가는 금융 IC카드 인증 시스템입니다. 카드를 만드는 단계에서 카드와 서버가 서로를 확인하고, 키를 안전하게 교체하고, 카드 비밀번호를 바꾸는 과정을 처리하는 공용 라이브러리(HMC_LIB)와, 이걸 실제로 테스트해볼 수 있는 웹 도구(HMC_TEST)로 이루어져 있습니다. 이런 암호 처리는 전부 HSM이라는 암호 전용 보안 장비를 거쳐서 이뤄집니다.",
    role: "팀장이 분석·설계를 맡고 저는 구현을 전담했습니다. GlobalPlatform 표준 규격에 맞춰 카드 인증·키 교체·비밀번호 변경 절차를 태스크 단위로 구현했고, 보안 장비(HSM)에서 세션키를 뽑아내는 low-level 연동 로직과 환경별 키 이름 자동 전환 로직도 직접 설계·구현했습니다. 검증용 테스트 도구까지 함께 만들어 실제 암호 연산 결과를 고정값으로 확인할 수 있게 했습니다.",
    teamSize: "팀장 1명(분석·설계) + 본인 1명(분석·설계 지원 및 개발) — 개발은 단독 수행",
    techStack: ["Java 8/11", "Spring Boot 2.7", "PKCS#11 (HSM)", "Bouncy Castle", "SEED/3DES/AES", "Log4j2"],
    achievements: [
      "카드 인증, 키 교체, 계좌정보 갱신, 카드 비밀번호 변경까지 카드 발급에 필요한 절차를 표준 규격에 맞춰 하나씩 구현했습니다",
      "보안 장비(HSM)에 저장된 마스터 키로 세션키를 생성하는 연동 로직을 구현했고, 키 하나로 인증이 실패하면 다른 키로 재시도하는 로직도 포함시켰습니다",
      "금융권 표준 암호화 방식들을 보안 장비를 거쳐 처리하도록 구성했습니다",
      "비밀번호·계좌번호 같은 민감 정보가 로그에 남을 때 자동으로 가려지는 공통 구조를 설계했습니다",
      "실제 암호화 계산 결과를 미리 정해둔 값과 대조하는 자동 테스트를 마련했습니다"
    ],
    challenges: [
      {
        problem: "HSM에서 키를 다루는 과정에서 '한 번에 안 맞으면 다음 걸 시도'해야 하는 상황이 두 군데 있었음. 하나는 키 조회 단계로, 실제 등록된 키 라벨이 고정 길이 필드에 Null로 패딩돼 있어서 짧은 이름 그대로 조회하면 못 찾는 경우가 있었고, 다른 하나는 인증 단계로, 카드가 초기 상태인지 이미 발급된 상태인지에 따라 유효한 키가 달라서 하나의 키만 시도하면 인증이 실패하는 경우가 많았음. 여기에 더해 운영/개발 환경별로 실제 쓰는 키 이름 자체도 달랐음",
        solution: "키 조회 단계에서는 입력받은 이름으로 먼저 조회하고 못 찾으면 고정 길이만큼 Null 패딩을 채운 이름으로 한 번 더 조회하는 폴백을 구현했고, 인증 단계에서는 후보 키(초기키→은행키)를 순서대로 시도하다 성공하면 멈추고 마지막 키까지 실패했을 때만 인증 실패로 처리하도록 구현. 환경별로 다른 키 이름은 설정값으로 분리해 배포 시 자동 전환되도록 처리",
        detail: "보안 장비에 저장된 키는 이름(라벨)으로 조회하는데, 실제 등록된 라벨을 확인해보니 지정된 길이(예: 255바이트)만큼 뒤에 Null 문자가 채워진 채로 저장돼 있었습니다. 그래서 애플리케이션에서 짧은 문자열 이름을 그대로 넘겨 조회하면 길이가 다르다는 이유로 정확히 일치하는 라벨을 찾지 못하는 경우가 있었는데, 입력받은 이름 그대로 먼저 한 번 조회해보고 실패하면 남는 자리만큼 Null 패딩을 채운 라벨로 다시 조회하는 폴백(fallback) 로직을 추가해 해결했습니다. 키를 찾은 뒤 실제 인증을 시도하는 단계에서도 비슷한 폴백이 필요했습니다. 카드가 아직 초기 상태인지 이미 발급이 끝난 상태인지에 따라 유효한 키가 달랐는데, 하나의 키만 시도해서 실패하면 바로 인증 실패로 처리했더니 카드 상태를 다시 확인하고 처음부터 재요청해야 해서 시간이 꽤 걸렸습니다. 그래서 후보 키들을 순서대로 담아두고 하나가 맞지 않으면 다음으로 자동 전환되도록, 마지막 키까지 실패했을 때만 인증 실패로 처리하도록 개선해 카드 상태와 무관하게 요청 한 번으로 인증이 끝나도록 만들었습니다. 여기에 더해, 실제 운영에서는 은행이 발급한 키 이름을 써야 하고 로컬·개발에서는 테스트용 이름을 써야 했기 때문에, 이 두 가지 이름도 환경 설정값으로 분리해 배포 환경에 따라 코드 수정 없이 자동으로 전환되도록 만들었습니다."
      },
      {
        problem: "보안 장비와 연결된 통로(세션)를 다 쓰고 정리하지 않으면 연결이 계속 쌓이는 문제",
        solution: "라이브러리 초기화 시점에 JVM 종료 훅을 등록해두고, 종료될 때 열려 있는 세션을 모두 닫은 다음 보안 장비 모듈 자체를 종료(finalize)하도록 구현. 두 단계 모두 실패해도 예외를 삼켜 종료 자체가 막히지 않도록 처리",
        detail: "라이브러리를 초기화하는 시점에 JVM 종료 훅을 등록해뒀습니다. 이 훅이 실행되면 세션·모듈 정리를 담당하는 로직이 호출되는데, 먼저 열려 있는 모든 세션을 한 번에 닫는 처리를 시도하고, 이게 실패하더라도 경고 로그만 남기고 넘어간 뒤 보안 장비 모듈 자체를 종료합니다. 종료 훅과 정리 로직 양쪽 모두 예외를 잡아서 무시하도록 만들었는데, 세션 정리 과정에서 문제가 생기더라도 그것 때문에 JVM 종료 자체가 멈추는 일이 없도록 하려는 목적이었습니다."
      }
    ]
  },
  {
    id: "hmc-securities-kms",
    company: "현대차증권",
    title: "차세대 시스템 KMS 도입",
    period: "2025.10.06 ~ 2025.10.31",
    category: "시스템구축 및 운영 > IT시스템관리",
    summary: "현대차증권 차세대 시스템에 들어가는 키 관리 시스템입니다. KMIP(Key Management Interoperability Protocol — 키 관리 시스템과 보안 장비가 공통으로 주고받는 업계 표준 통신 규격) 2.1 규격에 맞춰서 제조사가 다른 보안 장비(HSM)들을 함께 지원하고, 키를 만들고 교체하고 이관하고 조회하는 전체 생애주기를 관리하며, 외부 클라우드 키 관리 서비스와의 연동도 지원합니다.",
    role: "팀장이 분석·설계를 하고 저는 서버부터 관리자 화면까지 거의 전 영역을 개발했습니다. KMIP 표준 통신 규격의 데이터 포장 방식을 직접 구현해 서버를 밑바닥부터 만들었고, 제조사가 다른 보안 장비들을 하나의 구조로 다룰 수 있게 추상화 계층을 설계했습니다. 키를 상태별로 관리하고 만료 시 자동으로 비활성화하며, 유출된 키는 즉시 폐기 처리하는 등 키 생명주기 전반의 로직도 직접 설계·구현했습니다.",
    teamSize: "팀장 1명(분석·설계) + 본인 1명(분석·설계 지원 및 개발) — 개발은 단독 수행",
    techStack: ["Java 8", "Spring Boot 2.7", "MyBatis", "SQLite", "PKCS#11 (HSM)", "Thymeleaf", "KMIP 2.1"],
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
    </svg>
    <div class="diagram-subtitle">키 상태 주기 (Key Lifecycle)</div>
    <svg viewBox="0 0 640 300" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <marker id="kms-state-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
          <path d="M0,0 L10,5 L0,10 z" fill="#2f3ea3"/>
        </marker>
      </defs>
      <rect x="20" y="20" width="150" height="55" rx="10" fill="#ffffff" stroke="#e5e7eb"/>
      <text x="95" y="43" text-anchor="middle" font-size="12.5" font-weight="600" fill="#1a1d23">PRE_ACTIVE</text>
      <text x="95" y="61" text-anchor="middle" font-size="10" fill="#6b7280">생성됨 · 미사용</text>

      <rect x="250" y="20" width="150" height="55" rx="10" fill="#eceefb" stroke="#2f3ea3"/>
      <text x="325" y="43" text-anchor="middle" font-size="12.5" font-weight="600" fill="#2f3ea3">ACTIVE</text>
      <text x="325" y="61" text-anchor="middle" font-size="10" fill="#2f3ea3">사용 중</text>

      <rect x="130" y="130" width="160" height="55" rx="10" fill="#ffffff" stroke="#e5e7eb"/>
      <text x="210" y="153" text-anchor="middle" font-size="12.5" font-weight="600" fill="#1a1d23">DEACTIVATED</text>
      <text x="210" y="171" text-anchor="middle" font-size="10" fill="#6b7280">비활성 (만료 · 일반 폐기)</text>

      <rect x="350" y="130" width="160" height="55" rx="10" fill="#ffffff" stroke="#c0392b"/>
      <text x="430" y="153" text-anchor="middle" font-size="12.5" font-weight="600" fill="#c0392b">COMPROMISED</text>
      <text x="430" y="171" text-anchor="middle" font-size="10" fill="#c0392b">유출 (키 유출 폐기)</text>

      <rect x="230" y="235" width="180" height="50" rx="10" fill="#f7f8fa" stroke="#9ca3af" stroke-dasharray="4 3"/>
      <text x="320" y="256" text-anchor="middle" font-size="12.5" font-weight="600" fill="#6b7280">DESTROYED</text>
      <text x="320" y="273" text-anchor="middle" font-size="9.5" fill="#6b7280">완전 삭제 (상태로 남지 않음)</text>

      <line x1="170" y1="47" x2="248" y2="47" stroke="#2f3ea3" stroke-width="1.5" marker-end="url(#kms-state-arrow)"/>
      <text x="209" y="38" text-anchor="middle" font-size="9.5" fill="#2f3ea3">Activate</text>

      <line x1="295" y1="75" x2="225" y2="128" stroke="#2f3ea3" stroke-width="1.5" marker-end="url(#kms-state-arrow)"/>
      <text x="215" y="105" text-anchor="middle" font-size="9" fill="#2f3ea3">만료(자동) · Revoke</text>

      <line x1="360" y1="75" x2="415" y2="128" stroke="#c0392b" stroke-width="1.5" marker-end="url(#kms-state-arrow)"/>
      <text x="425" y="105" text-anchor="middle" font-size="9" fill="#c0392b">Revoke(키 유출)</text>

      <line x1="230" y1="185" x2="280" y2="233" stroke="#6b7280" stroke-width="1.5" marker-end="url(#kms-state-arrow)"/>
      <line x1="410" y1="185" x2="360" y2="233" stroke="#6b7280" stroke-width="1.5" marker-end="url(#kms-state-arrow)"/>
      <text x="320" y="222" text-anchor="middle" font-size="9" fill="#6b7280">Destroy</text>
    </svg>`,
    achievements: [
      "업계 표준 통신 규격을 처음부터 구현해 키 생성·활성화·조회·교체·폐기 등 18가지 기능을 처리하는 서버를 구축했습니다",
      "제조사가 다른 여러 보안 장비를 하나의 공통 방식으로 다룰 수 있게 지원 구조를 설계했습니다",
      "키를 미사용·사용 중·비활성·유출 등 상태로 나눠 관리하고, 만료일이 지난 키는 스케줄러가 자동으로 비활성화하도록 구현했습니다",
      "키를 교체해야 할 때는 새 키를 발급해 기존 키와 연결해두는 키 회전 기능을, 키가 유출됐을 때는 즉시 폐기 처리하고 사유를 감사 로그에 남기는 기능을 구현했습니다",
      "비활성 상태의 키는 복호화는 허용하되 새로운 데이터 암호화는 금지하고, 유출 상태의 키는 암호화·복호화를 모두 차단하는 상태 기반 접근 제어를 관리자 콘솔과 KMIP 프로토콜 요청이 공유하도록 구현했습니다",
      "외부 클라우드 키 관리 서비스와의 연동도 지원했습니다"
    ],
    challenges: [
      {
        problem: "업계 표준 통신 규격(KMIP)의 TTLV 이진 데이터 포장 방식을 명세서만 보고 처음부터 구현해야 했는데, 짠 인코더/디코더가 정말 스펙대로 동작하는지 확인할 표준화된 방법이 없었고, 이 프로토콜 처리 로직이 보안 장비(HSM) 연동과 뒤섞여 있으면 검증할 때마다 실제 장비가 있어야 해서 빠르게 반복 검증하기 어려웠음",
        solution: "인코딩한 데이터를 다시 디코딩해서 원본과 같은 값이 나오는지 비교하는 왕복(round-trip) 테스트로 TTLV 인코더/디코더를 검증하고, 보안 장비와 통신하는 부분은 하나의 인터페이스 뒤로 감춰 평소 테스트에서는 가짜 구현으로 대체하며, 실제 장비가 있어야 하는 테스트는 환경변수로 켜지 않는 한 기본 테스트 실행에서 제외되도록 분리",
        detail: "TTLV(Tag-Type-Length-Value — 태그·타입·길이·값 네 요소로 각 데이터 항목을 표현하는 KMIP 고유의 이진 인코딩 방식)로 표현되는 KMIP 메시지가 명세대로 인코딩·디코딩되는지 확인하려고, 실제 오퍼레이션에서 쓰이는 구조(예: 여러 속성이 담긴 Attributes 구조)를 코드로 직접 만들고 인코딩한 뒤 다시 디코딩해서, 각 태그로 값을 다시 찾았을 때 원본과 같은 값이 나오는지 비교하는 왕복 테스트를 작성했습니다. 구조 안에 구조가 또 중첩된 경우(예: 이름 정보를 감싼 속성 구조)도 중첩된 태그까지 정확히 찾아지는지 확인했고, 스트림으로 읽어 디코딩했을 때와 배열 전체를 한 번에 읽어 디코딩했을 때 완전히 같은 바이트가 나오는지 비교하는 테스트도 별도로 뒀습니다. 한편 보안 장비와 직접 통신하는 부분은 별도 인터페이스 하나로 감싸 두어서, 평소 테스트에서는 이 인터페이스를 가짜 구현으로 바꿔치기해 프로토콜 처리 로직만 실제 장비 없이 빠르게 반복 검증할 수 있게 했습니다. 반대로 실제 물리 보안 장비가 있어야만 의미가 있는 테스트는 평소 테스트 실행에는 포함하지 않고, 필요할 때 환경변수를 켰을 때만 실행되도록 분리해, 장비가 없는 환경에서도 전체 테스트가 항상 문제없이 통과하도록 만들었습니다."
      },
      {
        problem: "보안 장비 제조사마다 암호화 방식을 부르는 내부 코드가 달라 하나의 로직으로 처리할 수 없었고, HSM을 물리 장비 2대로 이중화한 구성에서는 장비마다 슬롯에 같은 라벨을 써서 라벨 하나만으로는 어느 장비의 슬롯인지 구분할 수 없었음",
        solution: "제조사별 코드값을 설정으로 분리해 자동으로 조회하는 구조를 만들었습니다. 슬롯 목록을 순서대로 훑으면서 관리자 토큰(AdminToken) 계열 라벨을 장비 간 경계 마커로 삼아, 마커를 지날 때마다 접두사를 다음 것으로 전환해 '접두사_라벨' 형태로 슬롯을 구분해 등록하도록 구현",
        detail: "국내 표준 암호화 방식은 국제 표준에 정의돼 있지 않다 보니 보안 장비 제조사마다 자체적으로 정한 코드값을 쓰는데, 제조사마다 이 값이 서로 달랐습니다. 코드 곳곳에서 제조사를 직접 구분해 처리하면 제조사가 늘 때마다 코드 전체를 수정해야 해서, 제조사별 코드값을 별도 설정값으로 분리해두고 지금 설정된 제조사에 맞는 값을 자동으로 조회해 반환하는 구조로 전환했습니다. 그러면 새 제조사가 추가돼도 설정값 하나만 추가하면 됩니다. 실제 운영 환경은 물리 HSM 장비 2대로 이중화된 구성인데, 장비마다 슬롯에 같은 라벨을 쓰다 보니 라벨 하나만으로는 어느 장비의 슬롯인지 구분할 수 없었습니다. 그래서 슬롯 목록을 순서대로 훑으면서, 관리자 토큰 계열 라벨이 나오면 그걸 '이 장비의 슬롯 목록은 여기까지'라는 경계 마커로 취급하고, 마커를 지날 때마다 접두사를 다음 것으로 전환하도록 만들었습니다. 그렇게 얻은 접두사를 라벨 앞에 붙여 '접두사_라벨' 형태의 키로 슬롯을 관리하니, 장비가 달라도 같은 라벨끼리 서로 덮어쓰지 않고 각각 구분해서 다룰 수 있었습니다."
      },
      {
        problem: "폐기(비활성·유출)된 키라도 예전에 그 키로 암호화해둔 데이터는 복호화해서 읽을 수 있어야 하는 경우가 있었지만, 그렇다고 폐기된 키로 새 데이터를 암호화하는 것까지 허용하면 안 됐음 — 키 상태에 따라 암호화와 복호화를 서로 다르게 허용해야 하는 문제",
        solution: "상태(state)와 동작(암호화/복호화/내보내기) 조합별로 허용 여부를 담은 정책 테이블을 두고, 관리자 콘솔과 KMIP 프로토콜 요청이 실제 암복호화를 실행하는 지점을 하나로 공유하게 만들어 그 지점에서 정책을 검사하도록 구현. 비활성 상태는 복호화만 허용하고 암호화는 막고, 유출 상태는 암호화·복호화 모두 막도록 정책을 채워둠",
        detail: "폐기된 키를 다루는 방식에는 업계에서 통용되는 원칙(NIST SP 800-57)이 있습니다. 단순히 만료·비활성 처리된 키는 예전에 그 키로 암호화해둔 데이터를 나중에 읽어야 할 수도 있으니 복호화는 허용하고, 다만 그 키로 새로운 데이터를 암호화하는 것만 금지하는 게 기본입니다. 반면 유출(키가 노출된 것으로 확인된) 상태는 복호화조차 신뢰할 수 없다고 보고 암호화·복호화 둘 다 막아야 합니다. 이 규칙을 코드 곳곳에 조건문으로 흩어두면 관리가 어려워지므로, (상태, 동작) 조합별로 허용 여부를 담은 정책 테이블을 따로 두고 이를 검사하는 공통 로직을 만들었습니다. 그리고 관리자 콘솔의 암복호화 테스트 화면과 실제 KMIP 프로토콜로 들어오는 Encrypt/Decrypt 요청이 결과적으로 같은 실행 경로를 타도록 구성해서, 콘솔에서만 검증하고 프로토콜 요청은 그 검증을 빠져나가는 일이 없도록 했습니다. 정책에 걸리면 예외를 던지고, 이 예외는 KMIP 요청을 처리하는 지점에서 표준 규격이 정한 실패 응답으로 변환해 돌려줍니다."
      }
    ]
  },
  {
    id: "cau-smart-campus",
    company: "중앙대학교",
    title: "스마트 캠퍼스 구축",
    period: "2025.01.13 ~ 2025.09.30",
    category: "시스템구축 및 운영 > IT시스템관리",
    summary: "중앙대학교 학생증·교직원증을 발급하고 확인해주는 시스템입니다. 관리자가 발급 상태를 관리하는 웹 화면과, 모바일 앱·도서관 시스템 등에서 호출하는 카드 처리 서버로 이루어져 있고, 직접 접촉하는 카드와 접촉 없이 인식하는 카드를 둘 다 지원하며 삼성페이·우리은행과 연동한 모바일 학생증 발급도 지원합니다.",
    role: "팀장이 분석·설계를 맡고 발급 관리 웹 화면과 카드 처리 서버 개발을 제가 담당했습니다. 접촉식·비접촉식 카드 기술의 차이를 직접 비교 분석해 기술 문서로 정리하고, 그걸 기준으로 카드 기술이 바뀌어도 유연하게 대응할 수 있는 처리 구조를 설계했습니다. 삼성페이 모바일 학생증 발급 연동과 대학 학사 시스템과의 데이터 동기화 배치도 직접 구현했습니다.",
    teamSize: "팀장 1명(분석·설계) + 본인 1명(분석·설계 지원 및 개발) — 개발은 단독 수행",
    techStack: ["Java 8", "Spring Boot 2.7", "MyBatis", "Oracle", "MS SQL Server", "Thymeleaf", "JWT", "ZXing"],
    achievements: [
      "학생/교직원/대학원생/도서관/연구원 등 신청자 유형별로 신청부터 심사, 대량 발급, 상태 확인까지 전 과정을 관리하는 발급 시스템을 구축했습니다",
      "직접 접촉하는 IC카드에 학생 정보를 기록하는 발급 로직을 구현했습니다",
      "삼성페이 모바일 학생증 발급과 우리은행 비대면 카드 발급 연동을 개발했습니다",
      "접촉식·비접촉식 카드 방식의 차이를 비교 분석한 기술 문서를 정리했습니다",
      "학교의 기존 학사 시스템과 새 발급 시스템, 서로 다른 두 데이터베이스를 연동해 정보 동기화를 구현했습니다"
    ],
    challenges: [
      {
        problem: "학교의 다른 정보시스템에 있는 사용자 수만 건을 매일 새벽 발급 시스템으로 동기화해야 했는데, 건수가 많아 한 번에 처리하면 시간이 너무 오래 걸리고 중간에 실패하면 어디까지 반영됐는지 알 수 없었음",
        solution: "1,000건 단위로 나눠서 처리하고, 오류가 100건을 넘으면 자동으로 멈추는 안전장치를 예약 작업에 구현",
        detail: "매일 새벽 2시에 도는 작업이 학생/교직원 등 사용자 유형별로 순서대로 동기화를 수행하는데, 외부 시스템에서 전체 목록을 한 번에 가져온 다음 1,000건씩 나눠서 저장하도록 구현했습니다. 중간에 개별 건이 실패해도 전체가 취소되지 않게 건별로 실패를 따로 기록하고, 실패가 100건을 넘으면 데이터 자체에 문제가 있다고 판단해 그 시점에서 작업을 중단하고 담당자가 확인하도록 처리했습니다."
      },
      {
        problem: "학생·교직원·대학원생·도서관 이용자·연구원처럼 소속(사용자 유형)마다 신청·심사·발급 절차가 전부 다르고, 각 소속의 사용자 정보 자체도 하나의 DB에 모여 있지 않고 학교 발급 시스템 DB·사회교육원 DB·산학협력단 DB처럼 서로 다른 데이터베이스에 나뉘어 있어, 유형이 늘어날 때마다 신청/발급 로직에 조건 분기가 계속 늘어날 위험이 있었음",
        solution: "사용자 유형별로 별도의 서비스 구현체를 만들어 두고, 신청·발급을 처리하는 공통 로직에서는 요청에 담긴 사용자 유형 코드로 그에 맞는 구현체를 런타임에 찾아 위임하도록 설계했습니다. 데이터베이스 연결도 유형별 구현체가 속한 영역 단위로 미리 나눠 연결해둬서, 공통 로직은 어떤 DB를 쓰는지 신경 쓰지 않고 동일한 방식으로 호출할 수 있게 했습니다",
        detail: "학생, 교직원, 대학원생, 도서관 이용자, 연구원처럼 소속 유형에 따라 신청 자격, 심사 절차, 발급 방식이 모두 달랐습니다. 여기에 더해 각 유형의 사용자 정보가 하나의 데이터베이스에 모여 있지 않고, 학교 발급 시스템 DB·사회교육원 DB·산학협력단 DB처럼 서로 다른 데이터베이스에 나뉘어 있었습니다. 신청·발급을 처리하는 로직에 유형별로 조건 분기를 계속 추가하면 유형이 늘어날 때마다 기존 코드를 건드려야 해서 유지보수가 어려워질 우려가 있었습니다. 그래서 유형별로 별도의 서비스 구현체를 두고, 공통 인터페이스와 공통 기반 클래스로 반복되는 처리(사용자 조회, 사진 조회 등)를 묶어둔 뒤, 신청·발급을 처리하는 공통 로직에서는 요청에 담긴 사용자 유형 코드를 이름으로 변환해 그에 맞는 구현체를 스프링 컨테이너에서 동적으로 찾아 위임하도록 설계했습니다. 카드(발급) 처리도 같은 방식으로 유형별 구현체를 두고 동일하게 동적으로 위임합니다. 각 유형별 구현체는 자신이 속한 데이터베이스에 연결되도록 미리 구성해뒀기 때문에, 신청·발급을 처리하는 공통 로직 자체는 어떤 데이터베이스를 쓰는지 전혀 알 필요 없이 동일한 방식으로 모든 유형을 처리할 수 있었습니다."
      },
      {
        problem: "삼성페이 모바일 학생증은 실물 카드와 달리 휴대폰을 바꾸면 재발급이 필요한데, 짧은 시간 안에 휴대폰 변경을 반복하며 재발급을 요청하는 것을 그대로 허용하면 분실·도난된 계정이 여러 기기에 학생증을 퍼뜨릴 수 있는 악용 경로가 생김",
        solution: "휴대폰 변경 이력을 확인해 같은 날 이미 다른 기기로 바꾼 적이 있으면 재발급을 막는 하루 1회 제한 로직을 추가",
        detail: "발급 이력에서 카드 종류별로 가장 최근 '기기변경' 사유의 발급 기록을 확인해, 그 날짜가 오늘이면 재발급을 제한하도록 했습니다. 다만 본인이 아니라 다른 사람(관리자 등)이 분실 신고를 처리해서 넘어간 경우까지 막으면 곤란하니, 그런 경우엔 제한을 해제하는 예외를 별도로 두었습니다. 재직 중인 임직원 카드나 테스트 계정은 이 확인 자체를 앞단에서 건너뛰도록 처리했습니다."
      }
    ]
  },
  {
    id: "hyundai-dept-ic",
    company: "현대백화점",
    title: "IC 시스템 구축",
    period: "2024.08.12 ~ 2024.12.05",
    category: "시스템구축 및 운영 > IT시스템관리",
    summary: "현대백화점의 IC칩 카드 발급·인증 시스템입니다. 이전에 진행했던 유사 프로젝트(우리카드 즉시발급 등)는 지점 기기와의 통신 처리와 관리자 웹을 하나의 서버로 묶어서 운영했는데, 이 프로젝트에서는 지점 기기와 TCP로 통신하며 카드 인증을 처리하는 core 서버와, 보안 장비(HSM) 키 관리·통계를 보여주는 관리 서버를 별도의 프로세스로 분리했습니다. 지점 현장에서 카드를 그 자리에서 인쇄해주는 프린터를 제어하는 프로그램도 지점마다 설치돼 함께 연동되며, 발급 결과를 관리 서버로 보내 지점별 발급 현황을 관리자 화면에서 확인할 수 있습니다.",
    diagram: `<svg viewBox="0 0 640 320" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <marker id="hmc-dept-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
          <path d="M0,0 L10,5 L0,10 z" fill="#2f3ea3"/>
        </marker>
      </defs>
      <rect x="20" y="20" width="170" height="55" rx="10" fill="#ffffff" stroke="#e5e7eb"/>
      <text x="105" y="43" text-anchor="middle" font-size="12.5" font-weight="600" fill="#1a1d23">지점 기기</text>
      <text x="105" y="61" text-anchor="middle" font-size="10" fill="#6b7280">POS 단말 · 카드 리더</text>

      <rect x="450" y="20" width="170" height="55" rx="10" fill="#ffffff" stroke="#e5e7eb"/>
      <text x="535" y="53" text-anchor="middle" font-size="12.5" font-weight="600" fill="#1a1d23">관리자 웹 브라우저</text>

      <rect x="225" y="20" width="200" height="55" rx="10" fill="#ffffff" stroke="#e5e7eb"/>
      <text x="325" y="41" text-anchor="middle" font-size="12" font-weight="600" fill="#1a1d23">지점 발급 프로그램</text>
      <text x="325" y="58" text-anchor="middle" font-size="9.5" fill="#6b7280">hyundai_local · 지점별 설치</text>

      <rect x="20" y="125" width="230" height="75" rx="10" fill="#eceefb" stroke="#2f3ea3"/>
      <text x="135" y="153" text-anchor="middle" font-size="14" font-weight="600" fill="#2f3ea3">core 서버</text>
      <text x="135" y="173" text-anchor="middle" font-size="10.5" fill="#2f3ea3">TCP 18090 · 카드 인증·암호 처리</text>
      <text x="135" y="189" text-anchor="middle" font-size="10.5" fill="#2f3ea3">(HyundaiCoreApplication)</text>

      <rect x="390" y="125" width="230" height="75" rx="10" fill="#eceefb" stroke="#2f3ea3"/>
      <text x="505" y="153" text-anchor="middle" font-size="14" font-weight="600" fill="#2f3ea3">관리 서버</text>
      <text x="505" y="173" text-anchor="middle" font-size="10.5" fill="#2f3ea3">HSM 키 관리 · 통계 · 관리자 화면</text>
      <text x="505" y="189" text-anchor="middle" font-size="10.5" fill="#2f3ea3">(HyundaiManageApplication)</text>

      <rect x="225" y="245" width="190" height="55" rx="10" fill="#ffffff" stroke="#e5e7eb"/>
      <text x="320" y="268" text-anchor="middle" font-size="12.5" font-weight="600" fill="#1a1d23">보안 장비 (HSM)</text>
      <text x="320" y="286" text-anchor="middle" font-size="10" fill="#6b7280">PKCS#11</text>

      <line x1="105" y1="75" x2="135" y2="123" stroke="#2f3ea3" stroke-width="1.5" marker-end="url(#hmc-dept-arrow)"/>
      <line x1="535" y1="75" x2="505" y2="123" stroke="#2f3ea3" stroke-width="1.5" marker-end="url(#hmc-dept-arrow)"/>
      <line x1="325" y1="75" x2="450" y2="123" stroke="#2f3ea3" stroke-width="1.5" marker-end="url(#hmc-dept-arrow)"/>
      <text x="410" y="100" text-anchor="middle" font-size="9" fill="#2f3ea3">발급 결과 전송</text>
      <line x1="388" y1="150" x2="252" y2="150" stroke="#6b7280" stroke-width="1.3" stroke-dasharray="4 3" marker-end="url(#hmc-dept-arrow)"/>
      <text x="320" y="141" text-anchor="middle" font-size="9.5" fill="#6b7280">REST · 상태조회/로드/초기화</text>
      <line x1="200" y1="200" x2="290" y2="243" stroke="#2f3ea3" stroke-width="1.5" marker-end="url(#hmc-dept-arrow)"/>
      <line x1="440" y1="200" x2="355" y2="243" stroke="#2f3ea3" stroke-width="1.5" marker-end="url(#hmc-dept-arrow)"/>
    </svg>
    <div class="diagram-subtitle">무중단 업무 반영 흐름 (core 서버 재기동 없이 적용)</div>
    <svg viewBox="0 0 640 385" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <marker id="hmc-dept-flow-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
          <path d="M0,0 L10,5 L0,10 z" fill="#2f3ea3"/>
        </marker>
      </defs>
      <rect x="170" y="15" width="300" height="50" rx="10" fill="#ffffff" stroke="#e5e7eb"/>
      <text x="320" y="45" text-anchor="middle" font-size="11.5" fill="#1a1d23">① 관리 서버에서 업무 모듈(JAR) 등록</text>

      <rect x="170" y="90" width="300" height="50" rx="10" fill="#ffffff" stroke="#e5e7eb"/>
      <text x="320" y="120" text-anchor="middle" font-size="11.5" fill="#1a1d23">② 반영(LOAD) 실행 → core 서버에 알림</text>

      <rect x="170" y="165" width="300" height="50" rx="10" fill="#ffffff" stroke="#e5e7eb"/>
      <text x="320" y="195" text-anchor="middle" font-size="11.5" fill="#1a1d23">③ core 서버가 모듈을 동적으로 적재</text>

      <rect x="170" y="240" width="300" height="50" rx="10" fill="#ffffff" stroke="#e5e7eb"/>
      <text x="320" y="270" text-anchor="middle" font-size="11.5" fill="#1a1d23">④ 초기화(INIT) 실행 → HSM 키·업무 초기화</text>

      <rect x="150" y="315" width="340" height="55" rx="10" fill="#eceefb" stroke="#2f3ea3"/>
      <text x="320" y="340" text-anchor="middle" font-size="12" font-weight="600" fill="#2f3ea3">⑤ 서버 재기동 없이 다음 요청부터 새 업무 적용</text>
      <text x="320" y="357" text-anchor="middle" font-size="10" fill="#2f3ea3">지점 기기와의 기존 TCP 연결도 끊기지 않음</text>

      <line x1="320" y1="65" x2="320" y2="88" stroke="#2f3ea3" stroke-width="1.5" marker-end="url(#hmc-dept-flow-arrow)"/>
      <line x1="320" y1="140" x2="320" y2="163" stroke="#2f3ea3" stroke-width="1.5" marker-end="url(#hmc-dept-flow-arrow)"/>
      <line x1="320" y1="215" x2="320" y2="238" stroke="#2f3ea3" stroke-width="1.5" marker-end="url(#hmc-dept-flow-arrow)"/>
      <line x1="320" y1="290" x2="320" y2="313" stroke="#2f3ea3" stroke-width="1.5" marker-end="url(#hmc-dept-flow-arrow)"/>
    </svg>
    <div class="diagram-subtitle">카드 발급 요청 처리 흐름 (HCIS 연동)</div>
    <svg viewBox="0 0 640 290" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <marker id="hmc-dept-hcis-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
          <path d="M0,0 L10,5 L0,10 z" fill="#2f3ea3"/>
        </marker>
      </defs>
      <rect x="170" y="15" width="300" height="45" rx="10" fill="#ffffff" stroke="#e5e7eb"/>
      <text x="320" y="42" text-anchor="middle" font-size="11.5" fill="#1a1d23">① HCIS가 버전 확인(VER) 요청</text>

      <rect x="170" y="80" width="300" height="45" rx="10" fill="#ffffff" stroke="#e5e7eb"/>
      <text x="320" y="107" text-anchor="middle" font-size="11.5" fill="#1a1d23">② HCIS가 프린터 연결 상태 확인(INIT) 요청</text>

      <rect x="170" y="145" width="300" height="45" rx="10" fill="#ffffff" stroke="#e5e7eb"/>
      <text x="320" y="172" text-anchor="middle" font-size="11.5" fill="#1a1d23">③ 이상 없으면 카드 발급(ISSU) 요청</text>

      <rect x="150" y="210" width="340" height="42" rx="10" fill="#eceefb" stroke="#2f3ea3"/>
      <text x="320" y="235" text-anchor="middle" font-size="11" font-weight="600" fill="#2f3ea3">발급 결과를 관리 서버로 전송</text>

      <line x1="320" y1="60" x2="320" y2="78" stroke="#2f3ea3" stroke-width="1.5" marker-end="url(#hmc-dept-hcis-arrow)"/>
      <line x1="320" y1="125" x2="320" y2="143" stroke="#2f3ea3" stroke-width="1.5" marker-end="url(#hmc-dept-hcis-arrow)"/>
      <line x1="320" y1="190" x2="320" y2="208" stroke="#2f3ea3" stroke-width="1.5" marker-end="url(#hmc-dept-hcis-arrow)"/>
      <text x="320" y="272" text-anchor="middle" font-size="9.5" fill="#6b7280">순서 제어는 HCIS가 담당 · 지점 발급 프로그램은 요청 단위로 무상태 처리</text>
    </svg>`,
    role: "팀장과 분석·설계를 하고 나서 중계 서버, 카드 인증 라이브러리, 관리자 웹, 지점 발급 프로그램까지 전부 개발했습니다. 이전 프로젝트들은 지점 기기와의 통신 처리와 관리자 웹을 하나의 서버 프로세스로 묶어서 운영했는데, 이 프로젝트에서는 그 둘을 core 서버(지점 기기 TCP 통신·카드 인증)와 관리 서버(HSM 키 관리·통계·관리자 화면)로 분리하는 구조를 설계했습니다. EMV 칩카드 인증에 필요한 암호문 생성·검증, 세션키 계산 로직을 직접 구현했고, 이전 프로젝트에서 검증한 서버 재배포 없는 로직 반영 구조를 이 프로젝트에도 적용했습니다. 지점마다 설치되는 카드 프린터 제어 프로그램까지 만들어 하드웨어 연동 부분도 책임졌고, 이 프로그램이 발급 시작·완료 결과를 관리 서버로 전송해 지점별 발급 현황을 추적할 수 있게 했습니다.",
    teamSize: "팀장 1명(분석·설계) + 본인 1명(분석·설계 지원 및 개발) — 개발은 단독 수행",
    techStack: ["Java 8", "Spring Boot 2.7", "Netty", "MyBatis", "Oracle", "PKCS#11 (HSM)", "JNA", "Thymeleaf"],
    achievements: [
      "이전 프로젝트들은 지점 기기와의 통신 처리와 관리자 웹을 하나의 서버로 함께 운영했는데, 이 프로젝트에서는 그 둘을 core 서버와 관리 서버로 분리해 서로 독립적으로 배포·재시작할 수 있도록 설계했습니다",
      "카드 인증에 필요한 암호문 생성·검증, 카드마다 다른 세션키 계산 등 IC칩 카드 인증 로직을 직접 구현했습니다",
      "이전 사내 프로젝트(카드인증 발급 시스템)에서 검증했던, 서버 재배포 없이 로직만 바로 반영하는 구조를 이 프로젝트에도 그대로 적용했습니다",
      "지점 기기와 주고받는 데이터가 어긋날 때 자동으로 보정하는 통신 처리 로직을 구현했습니다",
      "지점마다 설치되는 카드 프린터 제어 프로그램을 개발해, 발급 시작·완료 결과를 관리 서버로 전송하고 관리자 화면에서 지점별 발급 현황을 확인할 수 있게 했습니다",
      "보안 장비 키 관리, 계정 잠금·비밀번호 정책을 갖춘 관리자 웹 화면을 구축했습니다"
    ],
    challenges: [
      {
        problem: "core 서버는 지점 기기와 TCP로 상시 연결돼 있는 서버라서, 카드사별 업무 로직을 새로 추가하거나 바꿀 때마다 서버를 재시작하면 그 사이에 지점 기기와의 연결이 전부 끊기는 문제가 있었음",
        solution: "카드사별 업무 로직을 별도의 모듈로 만들어 관리 서버에 등록해두고, 관리자가 반영·초기화를 실행하면 관리 서버가 core 서버에 알려 그 모듈을 동적으로 불러와 적용하도록 구현. core 서버를 재시작하지 않아도 바로 다음 요청부터 새 로직이 적용됨",
        detail: "core 서버는 지점의 카드 리더 기기들과 TCP로 상시 연결을 맺고 있는데, 여기에 새 업무 로직(카드사별 인증·발급 절차)을 반영하려고 서버를 재시작하면 그 시점에 연결돼 있던 모든 지점 기기의 연결이 끊기고 재연결될 때까지 거래가 안 되는 문제가 있었습니다. 그래서 업무 로직을 관리 서버에 별도 모듈 형태로 등록해두는 화면을 만들고, 관리자가 그 업무를 반영할 때는 반영(적재)과 초기화 버튼을 순서대로 눌러 관리 서버가 core 서버에 알리도록 했습니다. core 서버는 이 신호를 받으면 등록된 모듈을 동적으로 읽어 들여 해당 업무 코드에 연결해두고, 필요한 보안 장비(HSM) 키까지 초기화해서 그 업무를 즉시 쓸 수 있는 상태로 만듭니다. 이 과정 전체가 core 서버를 껐다 켜지 않고 실행 중인 상태에서 이뤄지기 때문에, 반영이 끝난 직후 들어오는 지점 기기 요청부터 바로 새 로직으로 처리되고 기존에 연결돼 있던 다른 지점 기기들의 연결은 전혀 끊기지 않습니다."
      },
      {
        problem: "지점 발급 프로그램에서 카드 발급이 실패해도 그 사실과 원인이 지점 현장에만 남아 있어서, 관리자가 어떤 지점에서 언제 어떤 이유로 발급이 실패했는지 한눈에 파악하기 어려웠음",
        solution: "지점 발급 프로그램이 발급 시작·완료 시점의 결과 코드와 사유를 관리 서버로 전송하도록 하고, 관리 서버에는 정상 처리된 건은 제외하고 실패한 건만 걸러서 보여주는 오류 조회 화면을 만들어 지점·시간·사유별로 발급 실패 이력을 확인할 수 있게 했습니다",
        detail: "지점 발급 프로그램은 카드를 발급할 때마다 결과 코드와 사유를 관리 서버로 전송해 이력으로 남기는데, 이 이력에는 성공한 건과 실패한 건이 함께 쌓입니다. 관리자가 매번 전체 이력을 뒤져 실패 건만 골라내는 건 번거로우므로, 관리 서버의 오류 조회 화면에서는 결과 코드가 정상 코드가 아닌 건들만 자동으로 걸러서 지점·시간·요청 코드·실패 사유와 함께 보여주도록 만들었습니다. 이 화면 덕분에 관리자는 특정 지점에서 반복적으로 발급이 실패하고 있는지, 어떤 사유로 실패하는 일이 많은지를 별도의 문의 없이 화면에서 바로 확인할 수 있습니다."
      },
      {
        problem: "카드에 실제로 개인화 데이터를 기록하는 통신 구간은 카드·프린터가 실제로 연결된 상태에서만 확인할 수 있었고, 확인할 때마다 규격에 맞는 요청 전문을 손으로 하나하나 만들어 보내야 해서 테스트가 번거롭고 오래 걸렸음",
        solution: "URL과 파라미터 몇 개만 입력하면 첫 요청부터 다음 단계 전문까지 자동으로 만들어 순서대로 보내고, 매 단계 주고받은 전문과 결과를 화면에서 바로 확인할 수 있는 테스트 페이지를 만들었습니다. 실물 카드 없이도 통신 규격 자체가 끝까지 정상 진행되는지 반복해서 빠르게 검증할 수 있게 됐고, 운영에는 배포되지 않는 테스트 전용 기능으로 분리해뒀습니다",
        detail: "카드에 개인화 데이터를 기록하는 통신은 카드와 여러 차례 요청·응답을 주고받으며 진행되는데, 이 통신이 규격대로 잘 동작하는지 확인하려면 매번 그 요청 전문을 직접 만들어서 보내야 했습니다. 실물 카드와 프린터가 연결된 환경에서만 확인할 수 있었던 것도 테스트를 번거롭게 만드는 요인이었습니다. 그래서 URL과 카드번호 등 몇 가지 값만 입력하면, 첫 요청을 보내고 그 응답을 보고 다음 요청을 자동으로 만들어 순서대로 보내는 방식으로 통신 과정 전체를 한 번에 돌려볼 수 있는 테스트 페이지를 만들었습니다. 실물 카드가 없는 상태에서는 카드가 보내야 할 응답 값 자체를 알 수 없기 때문에, 통신 횟수에 맞춰 성공을 뜻하는 값으로 채워 넣어 통신이 끝까지 정상적으로 진행되는지만 확인하는 방식으로 만들었고, 매 단계에서 보낸 전문과 받은 전문을 화면의 표로 바로 확인할 수 있게 했습니다. 이 기능은 테스트 전용으로 만든 것이라 운영 환경에는 배포하지 않도록 코드에 별도로 표시해뒀습니다."
      }
    ]
  },
  {
    id: "woori-card-instant-issue",
    company: "우리카드",
    title: "즉시발급 S/W 교체도입",
    period: "2024.04.15 ~ 2024.07.26",
    category: "시스템구축 및 운영 > IT시스템관리",
    summary: "우리카드/우리은행에서 카드와 비밀번호를 그 자리에서 바로 발급해주는 기존 소프트웨어를 새 서버로 바꾸는 프로젝트였습니다. 하나의 코드베이스를 설정값에 따라 카드사용·은행용 모드 중 하나로 전환해 배포하고(은행 내부 중계 시스템 없이도 테스트할 수 있는 모드도 별도로 마련), 보안 장비(HSM)를 통한 키 관리와 국제 카드 표준(EMV)에 따른 카드 인증값 검증, 카드마다 다른 세션키를 만들어 비밀번호를 암호화하고 위변조 확인값을 계산하는 일을 합니다.",
    role: "팀장이 분석·설계를, 저는 서버와 통신·암호화 공용 라이브러리 개발을 맡았습니다. 카드사(VISA·Mastercard·UnionPay·JCB 등 8개가 넘는 국제 카드 브랜드)와 은행, 각 프로토콜의 메시지 코드별 업무 로직을 하나씩 구현하고 자동 테스트를 함께 작성했습니다. 세션키 파생·카드 인증값 검증·위변조 확인값 계산처럼 브랜드가 달라도 공통되는 절차는 공용 로직으로 분리하고, 브랜드별 차이만 별도로 구현하는 구조로 설계했습니다. 관리자 알림 전송 경로에서 발생한 통신 자원 미정리로 인한 서버 정지 현상을 로그 분석으로 직접 원인을 찾아 해결했고, 도메인별로 구분된 예외 처리 체계도 설계했습니다. 이전 프로젝트(카드인증 발급 시스템)에서 검증한 업무 로직 JAR 동적 반영 구조와 DB 장애 대응 로직도 이 프로젝트에 그대로 적용했습니다.",
    teamSize: "팀장 1명(분석·설계) + 본인 1명(분석·설계 지원 및 개발) — 개발은 단독 수행",
    techStack: ["Java 8", "Spring Boot 2.7", "Netty", "MyBatis", "MariaDB", "Tibero", "PKCS#11 (HSM)", "Jasypt"],
    diagram: `<svg viewBox="0 0 640 430" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <marker id="woori-cas-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
          <path d="M0,0 L10,5 L0,10 z" fill="#2f3ea3"/>
        </marker>
      </defs>
      <text x="320" y="18" text-anchor="middle" font-size="12" font-weight="600" fill="#1a1d23">비밀번호 변경·잠금해제 암호 처리 흐름 (EMV 표준)</text>

      <rect x="170" y="35" width="300" height="45" rx="10" fill="#ffffff" stroke="#e5e7eb"/>
      <text x="320" y="62" text-anchor="middle" font-size="11.5" fill="#1a1d23">① 카드 번호·일련번호로 파생키(UDK) 생성</text>

      <rect x="170" y="100" width="300" height="45" rx="10" fill="#ffffff" stroke="#e5e7eb"/>
      <text x="320" y="127" text-anchor="middle" font-size="11.5" fill="#1a1d23">② 거래 카운터 기반 세션키 생성</text>

      <rect x="170" y="165" width="300" height="45" rx="10" fill="#ffffff" stroke="#e5e7eb"/>
      <text x="320" y="192" text-anchor="middle" font-size="11.5" fill="#1a1d23">③ 카드가 보낸 인증값(ARQC) 검증</text>

      <rect x="170" y="230" width="300" height="45" rx="10" fill="#ffffff" stroke="#e5e7eb"/>
      <text x="320" y="257" text-anchor="middle" font-size="11.5" fill="#1a1d23">④ 새 비밀번호를 세션키로 암호화</text>

      <rect x="170" y="295" width="300" height="45" rx="10" fill="#ffffff" stroke="#e5e7eb"/>
      <text x="320" y="322" text-anchor="middle" font-size="11.5" fill="#1a1d23">⑤ 위변조 확인값(MAC)·카드 응답값(ARPC) 계산</text>

      <rect x="150" y="360" width="340" height="50" rx="10" fill="#eceefb" stroke="#2f3ea3"/>
      <text x="320" y="390" text-anchor="middle" font-size="11.5" font-weight="600" fill="#2f3ea3">⑥ 카드에 내려보낼 발급 명령(스크립트) 조립</text>

      <line x1="320" y1="80" x2="320" y2="98" stroke="#2f3ea3" stroke-width="1.5" marker-end="url(#woori-cas-arrow)"/>
      <line x1="320" y1="145" x2="320" y2="163" stroke="#2f3ea3" stroke-width="1.5" marker-end="url(#woori-cas-arrow)"/>
      <line x1="320" y1="210" x2="320" y2="228" stroke="#2f3ea3" stroke-width="1.5" marker-end="url(#woori-cas-arrow)"/>
      <line x1="320" y1="275" x2="320" y2="293" stroke="#2f3ea3" stroke-width="1.5" marker-end="url(#woori-cas-arrow)"/>
      <line x1="320" y1="340" x2="320" y2="358" stroke="#2f3ea3" stroke-width="1.5" marker-end="url(#woori-cas-arrow)"/>
      <text x="320" y="422" text-anchor="middle" font-size="9.5" fill="#6b7280">이 절차는 카드 브랜드가 달라도 공통 로직으로 재사용됨</text>
    </svg>`,
    achievements: [
      "PIN 변경·잠금해제 스크립트를 VISA, Mastercard, UnionPay, JCB 등 8개가 넘는 국제 카드 브랜드별로 구현하고, 은행 쪽 업무 로직까지 포함해 각각에 대한 자동 테스트를 작성했습니다",
      "보안 장비를 통해 카드마다 다른 세션키를 만들고, EMV 국제 표준에 따라 카드 인증값을 검증하고 위변조 확인값(MAC)을 계산해 비밀번호 변경 스크립트를 안전하게 조립하는 로직을 구현했습니다",
      "카드 브랜드마다 다른 부분만 별도로 구현하고 세션키 파생·인증값 검증·확인값 계산 같은 공통 로직은 재사용하는 구조로 설계해, 새 카드 브랜드가 추가돼도 최소한의 코드만 새로 작성하면 되게 했습니다",
      "설정값 하나로 카드사용·은행용 운영 모드를 전환해 배포할 수 있는 구조를 설계하고, 은행 내부 중계 시스템 없이도 통신 부분만 따로 테스트할 수 있는 모드도 함께 마련했습니다",
      "이전 프로젝트(카드인증 발급 시스템)에서 검증한 업무 로직 JAR 동적 반영 구조와, 데이터베이스 장애 시 마지막으로 읽어온 설정으로 계속 동작하는 장애 대응 로직을 이 프로젝트에도 그대로 적용했습니다",
      "관리자 알림을 보낼 때마다 통신 자원이 정리되지 않아 장애가 길어지면 서버가 멈추는 문제를 원인부터 분석해 해결했습니다",
      "은행/카드 영역별로 오류를 구분해서 다루는 체계를 설계했습니다"
    ],
    challenges: [
      {
        problem: "데이터베이스나 보안 장비 상태를 주기적으로 점검하다가 문제가 있으면 관리자에게 알림을 보내는 기능이 있었는데, 이 알림을 보낼 때마다 새로 만든 통신 자원을 정리하지 않아서, 장애가 길어질수록 자원이 계속 쌓이다가 결국 서버 전체가 잠깐씩 멈추는 문제가 발생",
        solution: "알림을 보내는 통신 자원을 다 쓰고 나면 반드시 정리하도록 수정해서, 장애 상황이 오래 지속돼도 자원이 쌓이지 않게 함",
        detail: "데이터베이스와 보안 장비 상태를 1분마다 점검하는 예약 작업이 있는데, 문제가 발견되면 그때마다 별도의 통신 채널을 새로 열어 관리자에게 알림을 보내도록 돼 있었습니다. 그런데 이 알림을 보내는 코드에서 통신에 쓴 자원을 정리하는 부분이 빠져 있었습니다. 평소에는 문제가 드러나지 않았지만, 데이터베이스나 보안 장비 장애가 길게 이어지면 1분마다 점검할 때마다 자원이 하나씩 새로 생기기만 하고 정리되지 않아 계속 쌓였고, 결국 서버 전체가 자원 부족으로 잠깐씩 멈추는 현상으로 이어졌습니다. 로그와 서버 상태를 분석해 원인을 알림 전송 코드의 자원 미정리로 특정한 뒤, 알림을 다 보내고 나면 반드시 그 통신 자원을 정리하도록 수정해 문제를 해결했습니다. 실제로 은행 데이터를 중계하는 통신 경로는 이미 자원을 정상적으로 정리하고 있었고, 문제는 관리자 알림을 보내는 경로에 한정돼 있었습니다."
      },
      {
        problem: "PIN 변경·잠금해제에 필요한 암호 처리 절차가 국제 카드 표준에 따라 정해져 있는데, 카드 브랜드마다 세부 규격이 조금씩 달라 브랜드가 늘어날 때마다 전체 로직을 새로 짜야 하는 부담이 있었음",
        solution: "세션키를 만들고, 카드 인증값을 검증하고, 위변조 확인값을 계산하는 공통 부분을 공용 로직으로 분리해두고, 브랜드마다 차이가 나는 부분만 별도 클래스로 구현하는 구조로 설계",
        detail: "국제 카드 표준(EMV)에 따른 비밀번호 변경·잠금해제 절차는 카드에서 온 값으로 세션키를 만들고, 그 세션키로 카드가 보낸 인증값이 맞는지 확인한 뒤, 새 비밀번호를 암호화하고 마지막으로 위변조를 막는 확인값을 계산해 카드에 내려보낼 명령을 조립하는 순서로 진행됩니다. 이 절차 자체는 카드 브랜드가 달라도 큰 흐름이 같지만, 세부 파라미터나 코드값은 브랜드마다 조금씩 달랐습니다. 그래서 세션키 생성, 인증값 검증, 확인값 계산처럼 공통되는 부분은 공용 로직으로 만들어두고, 브랜드별로 다른 부분(코드값, 데이터 길이 등)만 별도 클래스에서 채워 넣는 구조로 설계했습니다. 그 결과 8개가 넘는 카드 브랜드에 대응하면서도 브랜드마다 전체 로직을 새로 작성하지 않고 대응할 수 있었습니다."
      },
      {
        problem: "여러 요청이 동시에 들어올 때, 같은 업무 코드를 처리하는 로직 안에서는 보안 장비 세션 같은 자원을 함께 쓰다 보니 동시에 실행되면 안 되는 경우가 있었지만, 그렇다고 모든 요청을 하나씩 순서대로만 처리하면 성능이 떨어지는 문제가 있었음",
        solution: "업무 코드마다 로직 인스턴스를 하나만 만들어 재사용하고, 그 인스턴스의 실행 메서드를 동기화해서 같은 업무 코드끼리는 순서대로, 서로 다른 업무 코드는 동시에 처리되도록 구현",
        detail: "업무 로직 하나를 처리하는 과정에서 보안 장비 세션 등 공유 자원을 함께 쓰기 때문에, 같은 업무 코드에 대한 요청이 동시에 들어오면 값이 뒤섞일 위험이 있었습니다. 그렇다고 서버 전체를 하나씩 순서대로 처리하게 만들면, 서로 무관한 업무 코드까지 불필요하게 대기하게 돼 성능이 떨어질 수 있었습니다. 그래서 업무 코드별로 로직 인스턴스를 하나만 만들어 캐시해두고 재사용하되, 그 인스턴스가 요청을 처리하는 메서드 자체를 동기화 처리해서 같은 업무 코드에 대한 요청은 순서대로 하나씩만 처리되고, 서로 다른 업무 코드에 대한 요청은 각자의 인스턴스에서 동시에 처리될 수 있도록 만들었습니다."
      },
      {
        problem: "EAI 서버로 은행 전문을 보낼 때, 응답을 다 보낸 뒤 연결을 곧바로 닫도록 처리했는데, 이 닫는 처리가 비동기로 진행되다 보니 아주 드물게(체감상 1000건 중 1건 꼴로) EAI 쪽이 응답에 대한 확인(ACK) 전문을 받기도 전에 세션이 끊겨버려서, EAI 쪽에서 응답을 받지 못한 것으로 처리(타임아웃)되는 문제가 있었음",
        solution: "연결을 닫을 때 요청만 보내고 넘어가는 방식 대신, 실제로 연결이 완전히 닫힐 때까지 기다렸다가 다음 처리로 넘어가도록 바꿔서, 확인 전문을 받기 전에 세션이 끊기는 경우를 없앰",
        detail: "EAI 서버로 전문을 보낼 때는 응답을 다 전송한 뒤 연결을 닫아 마무리하는 구조였는데, 처음에는 연결을 닫으라는 요청만 보내고(비동기 호출) 실제로 언제 닫히는지는 기다리지 않았습니다. 이 요청과 실제 종료 사이에는 시간차가 있어서, 아주 드물게 EAI 쪽이 확인(ACK) 전문을 다 받기 전에 연결이 먼저 끊겨버리는 경우가 있었고, 이런 경우 EAI 쪽에서는 응답을 받지 못한 것으로 판단해 타임아웃 처리를 했습니다. 발생 빈도가 낮아 재현하기 어려웠지만, 연결을 닫으라는 요청과 실제 종료 시점 사이의 간격이 원인이라는 걸 파악한 뒤, 연결을 닫을 때 실제로 완전히 닫히는 것까지 확인하고 나서야 다음 처리로 넘어가도록 바꿔 문제를 해결했습니다."
      }
    ]
  },
  {
    id: "card-auth-issue-system",
    company: "라츠온 (사내 솔루션)",
    title: "카드인증 발급 시스템 구축",
    period: "2023.06.05 ~ 2024.03.29",
    category: "시스템구축 및 운영 > IT시스템관리",
    summary: "카드 인증·발급 처리를 위한 사내 관리 시스템입니다. 보안 장비(HSM)의 키를 관리하는 웹 화면과, 카드 인증·은행 발급을 각각 처리하는 서버로 이루어져 있고 외부 중계 시스템과 연동합니다.",
    role: "팀장과 분석·설계를 함께 하고 개발을 맡았습니다. 카드/은행 각 통신 규격에 맞춘 처리 로직과 보안 장비의 키·연결 상태 관리 로직을 직접 구현했습니다. 기존에 있던 업무 로직 동적 반영 구조를 데이터베이스 기반 저장 방식으로 확장해 여러 서버 인스턴스가 항상 같은 버전을 보도록 개선했고, 데이터베이스 장애 대응 로직도 임시방편에서 일반화된 방식으로 다시 설계했습니다. 여러 서버 인스턴스 간 상태 공유를 위해 Redis를 도입했다가 운영 규모에 맞지 않아 더 단순한 구조로 되돌린 경험도 있고, 동시 요청 처리 중 발견한 동시성 문제도 직접 원인을 찾아 해결했습니다.",
    teamSize: "팀장 1명(분석·설계) + 본인 1명(분석·설계 지원 및 개발) — 개발은 단독 수행",
    techStack: ["Java 8", "Spring Boot 2.7", "Netty", "MyBatis", "MariaDB/Tibero", "PKCS#11 (HSM)", "Jasypt"],
    achievements: [
      "보안 장비의 키·연결 상태 관리 로직을 직접 구현했고, 키 조각 조합·패리티 계산 같은 저수준 유틸리티는 다른 프로젝트에서도 쓰이던 기존 코드를 그대로 활용했습니다",
      "기존에 있던 업무 로직 동적 반영 구조에 데이터베이스 기반 저장 방식을 도입해, 여러 서버 인스턴스가 항상 같은 버전의 로직을 보도록 개선했습니다",
      "데이터베이스 연결이 끊겼을 때도 서비스가 이어지도록, 처음엔 임시 파일 하나로 버티는 방식을 만들었다가 나중엔 주기적으로 저장해둔 설정을 읽어 전체를 복원하는 일반화된 방식으로 다시 설계했습니다",
      "여러 서버 인스턴스 간 업무 상태를 공유하기 위해 Redis를 검토·도입했다가, 운영 규모에 맞지 않는다고 판단해 더 단순하고 안정적인 구조로 되돌렸습니다",
      "동시 요청 처리 중 결과가 뒤섞이는 동시성 문제를 발견해 클라이언트별로 결과를 구분해 저장하는 구조로 해결했습니다"
    ],
    challenges: [
      {
        problem: "여러 서버 인스턴스가 같은 업무 로직을 나눠 처리하는 구조였는데, 로직 파일을 서버들의 파일 시스템에 개별적으로 둬야 해서 인스턴스마다 파일이 최신인지 어긋날 위험이 있었고, 새 로직을 배포하는 과정도 번거로웠음",
        solution: "업로드한 로직 파일 자체를 데이터베이스에 저장해두고, 각 인스턴스가 실행 시점에 데이터베이스에서 그 파일을 가져와 쓰도록 바꿔서, 어느 인스턴스에서 실행하든 항상 같은 최신 버전을 보장하도록 만듦",
        detail: "이 시스템은 이미 업무 로직을 업로드하면 서버 재시작 없이 바로 불러 쓸 수 있는 구조를 갖추고 있었는데, 로직 파일 자체는 서버의 파일 시스템에 저장해두는 방식이었습니다. 여러 서버 인스턴스가 같은 업무를 나눠 처리하다 보니, 파일을 인스턴스마다 개별적으로 맞춰둬야 했고, 복사가 누락되거나 버전이 어긋나면 인스턴스별로 다른 로직이 동작하는 위험이 있었습니다. 그래서 업로드된 로직 파일 자체를 데이터베이스에 저장해두고, 실제로 그 로직을 불러올 때 데이터베이스에서 파일을 가져와 실행하도록 구조를 바꿨습니다. 이렇게 하면 서버 인스턴스가 몇 대든 항상 데이터베이스에 저장된 같은 원본을 보고 동작하게 됩니다."
      },
      {
        problem: "로직을 불러오는 데 필요한 정보(로직 이름, 버전, 파일 위치, 보안 장비 설정 등)를 데이터베이스에서 조회하는데, 데이터베이스가 잠깐이라도 끊기면 새 요청 처리 자체가 막혀버리는 문제가 있었음",
        solution: "처음에는 미리 지정해둔 로직 하나만 정해진 슬롯으로 처리하는 임시 대체 방식을 만들었다가, 운영 중 정상적으로 조회한 정보를 주기적으로 파일로 저장해두고 데이터베이스 장애 시 그 파일을 읽어 알고 있던 모든 로직을 그대로 복원하는 일반화된 방식으로 다시 설계",
        detail: "데이터베이스가 끊기면 로직 실행에 필요한 정보 자체를 조회할 수 없어 서비스가 완전히 멈췄습니다. 처음에는 특정 로직 하나와 보안 장비 슬롯 하나를 설정값으로 미리 지정해두고, 데이터베이스 조회가 실패하면 그 값을 그대로 쓰는 임시방편으로 문제를 넘겼습니다. 하지만 이 방식은 미리 지정해둔 로직 하나만 대응할 수 있어서, 실제로 운영 중인 다른 로직들은 데이터베이스 장애 시 여전히 멈췄습니다. 그래서 평소 정상 동작 중에는 데이터베이스에서 조회한 로직 목록 전체를 파일로도 함께 저장해두고, 데이터베이스 조회가 실패하는 시점에는 이 파일을 읽어 마지막으로 정상 조회됐던 로직 목록 전체를 그대로 복원하도록 다시 설계했습니다. 이렇게 하면 데이터베이스 장애 중에도 이미 알려진 모든 로직이 계속 서비스될 수 있습니다."
      },
      {
        problem: "서버 여러 대가 업무 상태(어떤 로직이 몇 번 실행됐는지, 세션 정보 등)를 나눠 관리하다 보니, 인스턴스마다 상태가 따로 놀아서 한 인스턴스에서 확인한 정보를 다른 인스턴스에서는 알 수 없는 문제가 있었음",
        solution: "여러 인스턴스가 상태를 공유할 수 있도록 Redis를 도입했다가, 실제 운영 규모에 비해 관리 부담이 크다는 걸 확인하고 다시 데이터베이스 기반의 단순한 구조로 되돌림",
        detail: "여러 서버 인스턴스가 업무를 나눠 처리하는 구조라, 업무 상태를 인스턴스 간에 공유할 방법이 필요했습니다. 처음에는 Redis를 도입해 이중화 구성까지 갖춰 상태를 공유하도록 구현했는데, 실제 운영 규모와 보안 장비 세션의 특성을 고려했을 때 Redis를 운영하는 것 자체가 추가로 관리해야 할 부담이 크다는 걸 확인했습니다. 그래서 이후에는 Redis를 걷어내고, 원래 쓰던 데이터베이스 기반의 단순한 상태 관리 구조로 되돌렸습니다. 화려한 기술보다 실제 운영 규모에 맞는 단순한 구조가 더 낫다는 걸 판단하고 실행에 옮긴 경험이었습니다."
      },
      {
        problem: "여러 클라이언트의 요청을 동시에 처리하다 보니, 한 클라이언트가 받아야 할 처리 결과가 다른 클라이언트에게 잘못 전달되는 동시성 문제가 발생",
        solution: "처리 결과를 곧바로 돌려주는 대신, 요청을 보낸 클라이언트를 구분하는 값으로 결과를 임시 저장해두고, 각 클라이언트는 자기 값으로 결과를 다시 찾아가도록 구조를 바꿔 문제를 해결",
        detail: "업무 로직을 처리하고 그 결과를 곧바로 반환값으로 돌려주는 구조였는데, 여러 클라이언트의 요청이 동시에 들어오는 환경에서는 처리 순서와 반환 시점이 엇갈리면서 한 클라이언트가 다른 클라이언트의 결과를 받아가는 문제가 발생했습니다. 원인을 살펴보니 동시에 여러 스레드가 같은 처리 로직을 실행할 때, 결과를 돌려주는 시점과 요청·응답을 짝짓는 방식이 서로 맞물리지 않는 구조였습니다. 그래서 처리 결과를 클라이언트별 식별값을 키로 하는 별도의 저장 공간에 담아두고, 각 클라이언트가 자신의 식별값으로 그 결과를 다시 조회해가는 방식으로 바꿔서, 동시에 여러 요청이 들어와도 결과가 서로 섞이지 않도록 만들었습니다."
      }
    ]
  },
  {
    id: "kms-build",
    company: "라츠온 (사내 솔루션)",
    title: "Key Management System 구축",
    period: "2023.02.06 ~ 2023.05.05",
    category: "시스템구축 및 운영 > IT시스템관리",
    summary: "보안 장비(HSM)의 키를 관리하는 콘솔입니다. 키 생성·가져오기·내보내기, 인증서 저장, 키를 이용한 암·복호화까지 키의 전체 생애주기를 관리합니다.",
    role: "팀장이 분석·설계를 맡고 저는 백엔드와 화면을 모두 개발했습니다. PKCS#11로 보안 장비에 직접 연동해 로그인, 키 생성·삭제, 검증값 계산 등 백엔드 로직을 구현했고, Bootstrap 기반 관리자 화면도 함께 만들었습니다. 표준 라이브러리 없이 금융 보안 장비의 키 분할(다중 관리자 승인) 계산 로직도 직접 설계해 구현했습니다.",
    teamSize: "팀장 1명(분석·설계) + 본인 1명(분석·설계 지원 및 개발) — 개발은 단독 수행",
    techStack: ["Java 8", "Spring Boot 2.7", "MyBatis", "SQLite", "PKCS#11 (HSM)", "SpongyCastle", "Bootstrap", "JSP"],
    achievements: [
      "보안 장비 저수준 연동으로 로그인, 키 생성/삭제/검증값 계산을 직접 구현했습니다",
      "금융권 보안 장비의 관리자 여러 명이 나눠 갖는 키 분할 방식을 직접 구현했습니다",
      "국내 표준 암호화(SEED) 방식을 보안 장비 키 관리 흐름에 연동했습니다",
      "인증서 저장, 키를 이용한 암·복호화 기능을 개발했습니다"
    ],
    challenges: [
      {
        problem: "자바 프로그래밍 언어 내부에 있는 보안 장비 연동 기능을 직접 써야 해서 자바 버전이나 장비 드라이버 설치 여부에 민감했고, 같은 프로그램을 Windows와 Linux(Mac 포함) 환경 모두에서 실행해야 해서 보안 장비와 연동하는 라이브러리의 파일 경로와 파일명 자체도 운영체제마다 달라 환경을 옮길 때마다 설정값을 사람이 직접 바꿔줘야 했음",
        solution: "장비 드라이버가 설치되지 않은 환경(로컬 개발 등)에서는 관련 기능을 비활성화할 수 있도록 분기 처리하고, 운영체제별 라이브러리 경로를 설정 파일에 미리 정리해둬서 환경을 옮길 때 해당 줄만 활성화하도록 정리. 파일명이 미묘하게 다른 경우(예: 64비트 전용 파일명)도 직접 확인해서 정확한 경로로 맞춤",
        detail: "공식 연동 라이브러리 대신 자바 언어 내부 기능을 직접 사용했더니 자바 버전에 따라 동작이 달라질 위험이 있었고, 장비 드라이버가 없는 개발자 컴퓨터에서는 실행 자체가 실패했습니다. 그래도 화면 개발이나 다른 기능 테스트는 가능해야 해서, 보안 장비 기능이 시작될 때 드라이버 존재 여부를 확인해 없으면 해당 기능만 비활성화하고 나머지는 정상 동작하도록 분리했습니다. 여기에 더해 보안 장비 제조사가 배포하는 연동 라이브러리는 Windows용은 .dll, Linux용은 .so, Mac용은 .dylib 파일로 완전히 다르고, 설치 경로도 운영체제마다 관례가 달랐습니다. 심지어 같은 Windows 환경이어도 라이브러리 파일명이 처음 설정해둔 이름과 실제 설치된 파일명이 미묘하게 달라서(예: 64비트 전용 파일명이 따로 있는 경우) 그대로 실행하면 연결 자체가 실패하는 경우도 있었습니다. 그래서 설정 파일에 운영체제별 경로를 전부 적어두고, 실행하는 환경에 맞는 줄만 활성화해서 쓰도록 정리했고, 실제 설치된 라이브러리 파일명을 직접 확인해 정확한 파일명으로 맞추는 과정을 거쳤습니다."
      },
      {
        problem: "암호화 표준(SEED)과 보안 장비 연동 방식(PKCS#11)을 다뤄본 적이 없어서, 개념부터 이해하고 시작해야 하는 어려움이 있었음",
        solution: "직접 암호화 알고리즘을 구현하는 대신 국가 표준기관이 배포한 공식 참조 구현을 그대로 가져와 쓰고, 실제 암호화 결과를 눈으로 확인할 수 있는 테스트 화면을 만들어 결과를 대조해가며 개념을 익힘",
        detail: "SEED 암호화나 보안 장비(HSM) 연동은 처음 다뤄보는 영역이라, 알고리즘 내부 동작을 직접 구현하기보다는 먼저 정확한 동작을 보장하는 기준이 필요했습니다. 그래서 SEED 암호화 로직은 국가 표준기관(KISA)이 공식 배포한 참조 구현을 그대로 가져와 사용해, 알고리즘 자체의 정확성 문제를 피했습니다. 그리고 실제로 키를 만들고 데이터를 암·복호화한 결과를 화면에서 바로 확인할 수 있는 테스트 화면을 만들어, 이론으로 배운 내용이 실제 결과와 맞는지 하나씩 대조해보면서 보안 장비 연동과 암호화 흐름에 대한 이해를 넓혀갔습니다."
      },
      {
        problem: "보안 장비의 슬롯(키가 보관되는 논리적 구역)마다 접속 비밀번호가 다른 경우가 있었는데, 처음에는 슬롯 이름만으로 로그인을 처리하도록 만들어놔서 이런 경우에 대응하지 못했음",
        solution: "슬롯 이름과 비밀번호를 함께 받아 로그인하도록 구조를 바꾸고, 실패했을 때는 어느 슬롯에서 실패했는지 알 수 있도록 오류 메시지도 구체적으로 바꿈",
        detail: "처음에는 슬롯 이름만 넘기면 정해진 방식으로 로그인을 시도하는 구조였는데, 실제로는 슬롯마다 관리자가 다르게 설정해둔 별도의 비밀번호를 쓰는 경우가 있었습니다. 그래서 슬롯 이름과 비밀번호를 함께 넘겨 로그인할 수 있도록 로그인 처리 방식을 바꿨고, 로그인에 실패했을 때 어떤 슬롯에서 문제가 생겼는지 바로 알 수 있도록 오류 메시지에 슬롯 이름을 포함시켰습니다."
      },
      {
        problem: "보안 장비 API 호출이 실패해도 오류 메시지가 \"~생성에 실패하였습니다\" 정도로만 추상적으로 나와서, 키를 만들 때 넘긴 여러 속성값 중 정확히 무엇이 문제인지 알기 어려웠음",
        solution: "키 생성 시 넘기는 속성값들을 하나씩 빼거나 다시 넣어보면서 어떤 속성 조합이 실제로 성공하는지 직접 확인했고, 보안 장비 제조사(Entrust)에 직접 문의해 정확한 속성값을 확인하는 한편 장비 버전에 따라 속성값이 달라지는지도 함께 점검",
        detail: "보안 장비에 새 키를 만들 때는 여러 속성값(민감 정보 여부, 사용 가능한 알고리즘 등)을 함께 넘겨야 하는데, 이 조합이 안 맞으면 보안 장비가 돌려주는 오류는 실패했다는 사실만 알려줄 뿐 정확히 어떤 속성이 문제인지는 알려주지 않았습니다. 그래서 속성값을 하나씩 주석 처리하거나 다시 넣어보면서 실제로 통과하는 조합을 직접 찾아나갔고, 그렇게도 확실하지 않은 부분은 보안 장비 제조사(Entrust)에 직접 문의해서 정확한 속성값을 확인했습니다. 또한 장비 버전에 따라 필요한 속성값이 달라질 수 있다는 점도 함께 확인해, 버전이 다른 장비에서도 동일하게 동작하는지 점검했습니다."
      }
    ]
  },
  {
    id: "kb-sandbox-portal",
    company: "KB",
    title: "샌드박스 포털 구축",
    period: "2022.07.25 ~ 2022.12.21",
    category: "시스템구축 및 운영 > IT시스템관리",
    summary: "KB 사내 개발자들이 실험용 프로젝트를 신청하면 클라우드(AWS/Azure/GCP) 자원과 개발 도구 계정을 자동으로 만들어주는 포털입니다. 관리자 화면에서는 사용자·프로젝트·비용 등을 관리합니다.",
    role: "사용자/프로젝트/공지/FAQ 관리자 화면(등록/조회/수정/삭제)을 개발했고, 깃허브·지라·젠킨스 등 여러 협력 서비스와의 연동 방식을 조사·테스트했습니다. 그중에서도 구글 클라우드(GCP) 연동을 전담해, 도메인 위임(domain-wide delegation) 방식으로 조직 관리 API를 호출하는 구조를 직접 설계하고 유휴 클라우드 자원을 자동으로 종료시키는 기능까지 구현했습니다.",
    teamSize: "개발자 4명 중 1명으로 참여",
    techStack: ["Java 11", "Spring Boot 2.7", "MyBatis", "MySQL", "Redis", "SAML2", "AWS/Azure/GCP SDK"],
    achievements: [
      "사용자/프로젝트/공지/FAQ 등 관리자 화면(등록/조회/수정/삭제) 개발",
      "깃허브·지라·젠킨스 등 여러 협력 서비스와의 연동 방식 조사 및 테스트",
      "구글 클라우드(GCP) 쪽 권한 부여, 프로젝트 생성·삭제, 사용자 권한 추가·삭제 처리",
      "실험이 끝난 뒤 방치된 구글 클라우드 자원을 자동으로 꺼주는 기능 구현"
    ],
    challenges: [
      {
        problem: "구글 클라우드는 개별 사용자 계정이 아니라 프로그램 전용 계정으로 조직의 그룹·구성원 정보를 관리하는 기능을 호출해야 했는데, 이 프로그램 전용 계정 자체에는 조직 관리 권한이 없어 호출이 거부됨",
        solution: "구글 클라우드의 '권한 위임' 기능을 이용해, 프로그램 전용 계정이 실제 관리자 권한을 가진 계정의 권한을 위임받아 동작하도록 구현",
        detail: "조직 관리 기능은 일반적인 프로그램 계정 인증만으로는 조직의 그룹·구성원 정보에 접근할 수 없고, 구글 워크스페이스 관리자가 미리 전체 권한 위임을 승인해야 프로그램 계정이 특정 관리자 권한을 위임받아 호출할 수 있습니다. 그래서 인증 정보를 필요한 범위로 제한한 다음, 관리자 권한을 위임받는 절차를 거쳐 그 권한으로 동작하는 인증 정보를 생성해 조직 관리 기능 호출에 사용했습니다."
      },
      {
        problem: "개발 환경의 클라우드 자원(서버·데이터베이스 등)이 실험이 끝난 뒤에도 방치돼 비용이 계속 발생하는 문제",
        solution: "구글 클라우드의 관련 기능을 조사해 쓰지 않는 자원을 자동으로 꺼주는 기능을 구현",
        detail: "실험용 포털이다 보니 개발자들이 실험용 서버를 띄워놓고 그대로 방치하는 일이 잦아 비용이 계속 누적됐습니다. AWS/Azure/구글 클라우드를 모두 지원해야 했으므로, 클라우드 공급자별 자원 종료 로직을 공통된 방식으로 설계하고 예약 작업이 프로젝트에 맞는 클라우드 로직을 자동으로 찾아 호출하도록 구성했습니다. 구글 클라우드 쪽에서는 서버, 컨테이너 클러스터, 데이터베이스를 순서대로 점검해 켜져 있는 자원을 모두 종료시킵니다."
      }
    ]
  },
  {
    id: "naver-e-certificate",
    company: "네이버",
    title: "전자증명서",
    period: "2021.11.08 ~ 2022.02.18",
    category: "시스템구축 및 운영 > IT시스템관리",
    summary: "네이버 전자증명서 서비스를 운영하는 관리자 콘솔입니다. 증명서 종류·발급기관·제휴사·약관·배너 등을 관리하고 발급 통계를 볼 수 있는 관리자 화면을 제공합니다. 실제 전자서명·검증은 별도의 상위 서비스가 처리하고, 이 시스템은 연동과 운영 관리를 담당합니다.",
    role: "증명서 종류·발급기관·접수기관·제휴사·약관·배너 등 영역별 관리자 화면(등록/조회/수정/삭제) 개발을 맡았습니다. 접수기관 로고 이미지 일괄 업로드 기능과, 저장공간·가입자 수·발급 현황 등 7가지 통계 화면 및 엑셀 다운로드 기능을 같은 패턴으로 설계해 구현했습니다.",
    teamSize: "개발자 4명 중 1명으로 참여",
    techStack: ["Java 8", "Spring Boot 2.5", "MyBatis", "MySQL", "Redis", "FreeMarker", "OpenFeign"],
    achievements: [
      "증명서 종류/발급기관/접수기관/제휴사/약관/배너 등 영역별 관리자 화면을 개발했습니다",
      "접수기관 로고 이미지 한꺼번에 올리기, 약관 동의 이력 관리 같은 운영 편의 기능을 구현했습니다",
      "저장공간·가입자 수·발급 현황 등 7가지 통계 화면과 엑셀 다운로드 기능을 구현했습니다",
      "전자증명서 발급·검증 기능을 테스트해볼 수 있는 중계 기능도 개발했습니다",
      "서로 관련된 여러 증명서 종류를 하나의 패키지로 묶어 관리하고, 서비스 쪽에서는 관련 증명서들을 묶음으로 노출할 수 있는 기능을 구현했습니다",
      "관리자가 콘솔에서 수정한 내용이 캐시 때문에 바로 반영되지 않는 문제를 해결하기 위해, 캐시 종류와 환경을 선택해 즉시 초기화할 수 있는 기능을 구현했습니다"
    ],
    challenges: [
      {
        problem: "접수기관(전자지갑) 로고 이미지를 기관마다 화면에서 하나씩 업로드하고 연결하기에는 건수가 많고 번거로웠음",
        solution: "이미지 파일을 여러 개 한 번에 선택해 올리면, 파일 이름으로 대상 기관을 자동으로 찾아 한꺼번에 반영하는 기능을 구현하고, 성공·실패 건수를 정리해서 알려주도록 처리",
        detail: "정해진 파일 이름 규칙으로 이미지를 한 번에 여러 개 선택해서 올리면, 서버가 각 파일 이름으로 대상 접수기관을 찾아 해당 기관에만 이미지를 반영하도록 구현했습니다. 파일 이름과 일치하는 접수기관이 없으면 그 건만 실패로 기록하고 나머지는 그대로 진행되도록 처리해, 한두 건이 잘못 올라와도 전체 업로드가 막히지 않습니다. 처리가 끝나면 전체·성공·실패 건수와 실패 이유를 함께 알려줘서, 관리자가 어떤 파일이 왜 실패했는지 바로 확인할 수 있습니다."
      },
      {
        problem: "발급 건수, 가입자 수, 발급 유형별 수량 등 7가지 통계가 서로 다른 곳에 흩어져 있어 운영자가 매번 여러 화면을 오가며 확인해야 했고, 화면 조회만으로는 보고서 작성이 안 됐음",
        solution: "통계 종류별로 화면 조회·엑셀 다운로드 기능을 짝지어 만들고, 화면에서 쓰던 검색 조건을 그대로 엑셀 다운로드에도 재사용해 '보던 화면 그대로' 엑셀로 받을 수 있게 구현",
        detail: "저장공간·서비스가입·발급유형별 수량 등 7가지 통계마다 방식을 통일했습니다. 목록 조회 기능이 화면용 데이터를 페이지 단위로 주고, 같은 검색 조건을 받는 엑셀 다운로드 기능은 전체 건수를 한 번에 조회해서 엑셀로 만들어 응답합니다. 통계 항목(열)을 미리 정의해두고 표 머리글을 자동으로 뽑아내게 했더니, 통계 종류가 늘어나도 매번 같은 구조의 기능만 추가하면 됐습니다."
      },
      {
        problem: "서로 관련 있는 여러 증명서 종류를 이용자에게 하나씩 따로 노출하다 보니, 실제로는 같이 신청하거나 함께 봐야 하는 증명서들인데도 연관성이 드러나지 않았음",
        solution: "관련 증명서 종류 여러 개를 하나의 이름으로 묶는 패키지 개념을 도입해, 관리자가 패키지를 구성·관리할 수 있는 화면을 만들고 서비스 쪽에는 패키지 단위로 묶인 증명서 목록도 함께 내려주도록 구현",
        detail: "증명서 종류가 늘어나면서 서로 관련 있는 증명서들을 이용자에게 각각 따로 보여주면 어떤 것들이 함께 필요한지 알기 어려웠습니다. 그래서 관련 증명서 종류 여러 개를 하나의 패키지로 묶어서 관리할 수 있는 화면을 만들고, 실제 서비스에서 증명서 목록을 조회할 때는 개별 증명서뿐 아니라 패키지 단위로 묶인 항목도 함께 내려주도록 구현했습니다. 이렇게 하면 관련 증명서를 새로 추가할 때도 패키지 구성만 조정하면 되고, 이용자는 필요한 증명서들을 묶음으로 한눈에 확인할 수 있습니다."
      },
      {
        problem: "관리자가 증명서·약관·배너·공지사항 같은 정보를 콘솔에서 수정해도, 실제 서비스는 이 데이터를 캐시해서 보여주고 있어서 캐시가 자연스럽게 만료되거나 서버를 재시작하기 전까지는 수정 내용이 바로 반영되지 않는 문제가 있었음",
        solution: "관리자 화면에 캐시 종류와 적용할 환경을 선택해 즉시 초기화할 수 있는 기능을 추가해, 재배포나 재시작 없이도 수정한 내용이 바로 반영되도록 함",
        detail: "증명서 종류, 약관, 배너, 공지사항 등 여러 항목이 실제 서비스 쪽에서 캐시된 채로 제공되고 있었는데, 관리자가 콘솔에서 내용을 고쳐도 캐시가 만료되거나 서버가 재시작되기 전까지는 이용자 화면에 예전 내용이 계속 보이는 문제가 있었습니다. 그래서 관리자 화면에 캐시 종류(증명서/약관/제출처/공지사항/배너 등)와 적용할 환경을 선택해 확인 후 즉시 초기화하는 기능을 추가했습니다. 관리자가 이 기능을 실행하면 실제 서비스 서버에 캐시를 비우라는 요청이 전달되고, 그 순간부터는 최신 데이터를 다시 가져와 보여주게 됩니다. 재배포나 서버 재시작 없이도 수정 내용을 바로 반영할 수 있게 된 것입니다."
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
    summary: "결혼식·장례식·돌잔치 같은 경조사 현장에서 축의금·부의금을 받는 일부터 정산까지 자동으로 처리해주는 시스템입니다. 모바일 청첩장, 참석 여부 응답, QR 식권으로 식사 체크인, 좌석 배정, 방명록, 지출·정산 관리를 지원하는 본 서비스가 있고, 결혼식 당일 하루만 쓰고 폐기하는 가벼운 현장 접수용 프로그램을 별도로 개발해 연계했습니다.",
    techStack: ["Java 17", "Spring Boot 3.4", "MyBatis", "Oracle", "JWT", "React 18", "TypeScript", "Vite"],
    diagram: `<svg viewBox="0 0 760 350" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <marker id="yeham-role-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
          <path d="M0,0 L10,5 L0,10 z" fill="#2f3ea3"/>
        </marker>
      </defs>
      <text x="380" y="18" text-anchor="middle" font-size="12" font-weight="600" fill="#1a1d23">역할·권한 구조</text>

      <rect x="180" y="35" width="200" height="55" rx="10" fill="#eceefb" stroke="#2f3ea3"/>
      <text x="280" y="58" text-anchor="middle" font-size="13" font-weight="600" fill="#2f3ea3">SUPER_ADMIN</text>
      <text x="280" y="76" text-anchor="middle" font-size="10" fill="#2f3ea3">전체 조직·행사 관리</text>

      <rect x="180" y="140" width="200" height="55" rx="10" fill="#ffffff" stroke="#e5e7eb"/>
      <text x="280" y="163" text-anchor="middle" font-size="13" font-weight="600" fill="#1a1d23">AGENCY</text>
      <text x="280" y="181" text-anchor="middle" font-size="10" fill="#6b7280">결혼식장·장례식장 관리자</text>

      <rect x="180" y="245" width="200" height="55" rx="10" fill="#ffffff" stroke="#e5e7eb"/>
      <text x="280" y="268" text-anchor="middle" font-size="13" font-weight="600" fill="#1a1d23">EVENT_OWNER</text>
      <text x="280" y="286" text-anchor="middle" font-size="10" fill="#6b7280">행사 주최자(신랑·신부 등)</text>

      <line x1="280" y1="90" x2="280" y2="138" stroke="#2f3ea3" stroke-width="1.5" marker-end="url(#yeham-role-arrow)"/>
      <text x="90" y="115" text-anchor="middle" font-size="8.5" fill="#6b7280">조직(결혼식장/장례식장) 계정 생성</text>

      <line x1="280" y1="195" x2="280" y2="243" stroke="#2f3ea3" stroke-width="1.5" marker-end="url(#yeham-role-arrow)"/>
      <text x="90" y="220" text-anchor="middle" font-size="8.5" fill="#6b7280">같은 조직 소속 주최자 계정 생성</text>

      <path d="M 170 60 C 60 60, 60 260, 170 260" fill="none" stroke="#9ca3af" stroke-width="1.3" stroke-dasharray="4 3" marker-end="url(#yeham-role-arrow)"/>
      <text x="25" y="163" text-anchor="middle" font-size="9" fill="#6b7280" transform="rotate(-90 25 163)">전체 조회·관리(제한 없음)</text>

      <line x1="380" y1="167" x2="460" y2="167" stroke="#9ca3af" stroke-width="1.2"/>
      <rect x="460" y="120" width="280" height="95" rx="10" fill="#f7f8fa" stroke="#e5e7eb"/>
      <text x="470" y="138" font-size="11" font-weight="600" fill="#2f3ea3">대행사 입장에서 좋은 점</text>
      <text x="470" y="155" font-size="9.5" fill="#6b7280">· 식권 QR을 앱으로 바로 검표</text>
      <text x="470" y="171" font-size="9.5" fill="#6b7280">· 운영비 정산을 시스템에 기록해 owner에게 청구</text>
      <text x="470" y="187" font-size="9.5" fill="#6b7280">· (예정) 주차권도 같은 구조로 확장</text>

      <line x1="380" y1="273" x2="460" y2="273" stroke="#9ca3af" stroke-width="1.2"/>
      <rect x="460" y="225" width="280" height="95" rx="10" fill="#f7f8fa" stroke="#e5e7eb"/>
      <text x="470" y="243" font-size="11" font-weight="600" fill="#2f3ea3">주최자 입장에서 좋은 점</text>
      <text x="470" y="260" font-size="9.5" fill="#6b7280">· 청첩장 한 화면에서 계좌 확인부터 체크인까지 처리</text>
      <text x="470" y="276" font-size="9.5" fill="#6b7280">· 접수·체크인 자동화로 축의대 혼잡 완화</text>
      <text x="470" y="292" font-size="9.5" fill="#6b7280">· 정산 자동 집계로 수기 계산 부담 감소</text>

      <text x="380" y="335" text-anchor="middle" font-size="9.5" fill="#6b7280">AGENCY는 자기 조직(orgId) 소속 행사만, EVENT_OWNER는 자신의 행사(ownerId) 하나만 접근 가능</text>
    </svg>
    <div class="diagram-subtitle">셀프 접수 화면의 오프라인 복원력 설계</div>
    <svg viewBox="0 0 640 400" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <marker id="yeham-resil-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
          <path d="M0,0 L10,5 L0,10 z" fill="#2f3ea3"/>
        </marker>
      </defs>
      <rect x="170" y="15" width="300" height="45" rx="10" fill="#ffffff" stroke="#e5e7eb"/>
      <text x="320" y="42" text-anchor="middle" font-size="11.5" fill="#1a1d23">① 하객이 접수 제출</text>

      <rect x="170" y="80" width="300" height="55" rx="10" fill="#ffffff" stroke="#e5e7eb"/>
      <text x="320" y="102" text-anchor="middle" font-size="11.5" fill="#1a1d23">② 서버 응답 없음 → 네트워크 단절 판별</text>
      <text x="320" y="120" text-anchor="middle" font-size="9.5" fill="#6b7280">(4xx 거절과 구분)</text>

      <rect x="150" y="155" width="340" height="55" rx="10" fill="#eceefb" stroke="#2f3ea3"/>
      <text x="320" y="177" text-anchor="middle" font-size="11.5" font-weight="600" fill="#2f3ea3">③ 접수 내용을 기기에 임시 저장</text>
      <text x="320" y="195" text-anchor="middle" font-size="9.5" fill="#2f3ea3">하객에게는 평소처럼 완료 화면 표시</text>

      <rect x="170" y="230" width="300" height="55" rx="10" fill="#ffffff" stroke="#e5e7eb"/>
      <text x="320" y="252" text-anchor="middle" font-size="11.5" fill="#1a1d23">④ 온라인 복귀 시 · 주기적으로 재전송 시도</text>
      <text x="320" y="270" text-anchor="middle" font-size="9.5" fill="#6b7280">저장된 순서대로 하나씩</text>

      <rect x="150" y="305" width="155" height="55" rx="10" fill="#ffffff" stroke="#e5e7eb"/>
      <text x="227" y="327" text-anchor="middle" font-size="11" fill="#1a1d23">성공 → 큐에서 제거</text>
      <text x="227" y="345" text-anchor="middle" font-size="9" fill="#6b7280">(식권 실패는 별도 처리)</text>

      <rect x="335" y="305" width="155" height="55" rx="10" fill="#ffffff" stroke="#e5e7eb"/>
      <text x="412" y="327" text-anchor="middle" font-size="11" fill="#1a1d23">여전히 단절 → 대기</text>
      <text x="412" y="345" text-anchor="middle" font-size="9" fill="#6b7280">다음 시도로 미룸</text>

      <line x1="320" y1="60" x2="320" y2="78" stroke="#2f3ea3" stroke-width="1.5" marker-end="url(#yeham-resil-arrow)"/>
      <line x1="320" y1="135" x2="320" y2="153" stroke="#2f3ea3" stroke-width="1.5" marker-end="url(#yeham-resil-arrow)"/>
      <line x1="320" y1="210" x2="320" y2="228" stroke="#2f3ea3" stroke-width="1.5" marker-end="url(#yeham-resil-arrow)"/>
      <line x1="280" y1="285" x2="227" y2="303" stroke="#2f3ea3" stroke-width="1.5" marker-end="url(#yeham-resil-arrow)"/>
      <line x1="360" y1="285" x2="412" y2="303" stroke="#2f3ea3" stroke-width="1.5" marker-end="url(#yeham-resil-arrow)"/>
    </svg>`,
    screenshots: [
      { src: "images/screenshots/yeham-events.png", caption: "행사 목록" },
      { src: "images/screenshots/yeham-event-detail.png", caption: "행사 상세 — 개요/수취인 관리" },
      { src: "images/screenshots/yeham-ledger.png", caption: "접수 장부 — 축의금 접수 내역 관리" },
      { src: "images/screenshots/yeham-qr-ticket.png", caption: "식권 발급 — QR 코드 자동 생성" },
      { src: "images/screenshots/yeham-settlement.png", caption: "정산 — 수취인별 정산 및 엑셀 다운로드" },
      { src: "images/screenshots/yeham-kiosk.png", caption: "키오스크 모드 — 하객 셀프 접수 화면" }
    ],
    challenges: [
      {
        problem: "결혼식장 지하 등 통신이 약한 곳에서 하객이 직접 축의금을 접수하는 화면을 쓸 때, 서버와 통신이 끊기면 접수(이름·금액) 자체를 놓칠 위험이 있었음",
        solution: "서버 응답이 아예 오지 않는 진짜 네트워크 단절과, 서버가 명확히 거절한 오류를 구분해서, 네트워크 단절일 때만 접수 내용을 기기에 임시 저장해두고 하객에게는 정상적으로 완료 화면을 보여준 뒤, 온라인 상태로 돌아오는 즉시(또는 주기적으로) 저장해둔 접수 건을 서버로 다시 전송하도록 구현",
        detail: "하객이 직접 접수하는 화면에서는 이체를 완료했다고 누른 순간 서버에 접수 내용을 저장해야 하는데, 결혼식장 지하처럼 통신이 약한 곳에서는 이 요청이 서버까지 아예 도달하지 못하는 경우가 있었습니다. 이때 그냥 오류만 보여주면 하객이 접수를 포기하거나 중복으로 다시 시도해 혼란이 생길 수 있었습니다. 그래서 서버가 응답은 했지만 값이 잘못돼 거절한 경우와, 응답 자체가 안 와서 재시도하면 될 수도 있는 진짜 네트워크 단절을 구분했습니다. 진짜 단절인 경우에는 접수 내용을 기기에 임시로 저장해두고, 하객에게는 평소와 똑같이 감사 화면을 보여줘서 접수가 끊겼다는 걸 느끼지 못하게 했습니다. 그 뒤로는 브라우저가 다시 온라인 상태가 되는 시점과 일정 주기마다 저장해둔 접수 건들을 순서대로 서버에 다시 보내도록 했고, 재전송 중에 또 네트워크가 끊기면 남은 건들은 그대로 두고 다음 시도를 기다리게 했습니다. 접수는 성공했는데 식권 발급만 실패한 경우에는, 접수 자체는 이미 저장됐으니 그 건은 큐에서 빼고 식권만 나중에 접수 장부에서 수동으로 처리할 수 있게 했습니다."
      },
      {
        problem: "식권 QR 한 장에는 대인·소인 인원이 함께 배정되고, 배정된 인원이 반드시 한 번에 다 같이 입장하는 게 아니라 일부만 먼저 입장하고 나머지는 나중에 입장하는 경우도 있어서, 검표 담당이 여러 명이거나 같은 QR이 거의 동시에 스캔돼도 배정된 인원을 넘겨 입장시키면 안 됐음",
        solution: "체크인마다 남은 인원을 먼저 조회한 뒤 판단하는 방식이 아니라, '차감한 뒤에도 남은 인원이 요청 인원 이상'이라는 조건을 갱신 쿼리 자체에 포함시켜 잔여 인원 확인과 차감을 하나의 db 처리로 원자적으로 묶어서, 동시에 여러 요청이 와도 배정 인원을 초과하지 않도록 구현. 인원이 모두 소진되면 상태를 자동으로 전환하고, QR 유출이 의심되면 토큰을 새로 발급해 기존 QR을 무효화. 식권 발급 시점과 실제 입장 가능 여부도 분리해, 식권이 나온 뒤라도 축의금 입금 확인이 끝나야 실제 입장(체크인)이 가능하도록 함",
        detail: "식권 한 장에는 대인·소인 인원이 함께 배정될 수 있는데, 배정된 인원이 반드시 한 번에 다 같이 입장하는 게 아니라 일부는 먼저 도착해 입장하고 나머지는 나중에 입장하는 경우도 있었습니다. 그래서 체크인을 '남은 인원을 조회하고 문제없으면 차감'하는 두 단계로 만들면, 검표대가 여러 곳이거나 같은 QR이 거의 동시에 스캔될 때 조회 시점엔 둘 다 인원이 남아있는 것으로 보여 배정된 인원보다 많은 사람이 들어가 버릴 수 있었습니다. 그래서 조회와 차감을 분리하지 않고, '차감 후에도 잔여 인원이 요청 인원 이상이어야 한다'는 조건을 갱신 쿼리 자체에 포함시켜 검증과 차감을 하나의 db 요청으로 처리했습니다. 이렇게 하면 동시에 여러 요청이 들어와도 db가 순서를 정해주기 때문에 배정 인원을 넘는 요청부터는 자동으로 거부됩니다. 인원이 모두 소진되면 식권 상태를 자동으로 바꿔 이후 스캔 시 바로 알 수 있게 했고, QR 유출이 의심되면 기존 QR을 무효화하고 새 QR을 발급할 수 있게 했습니다. 또한 식권이 발급되는 시점과 실제 입장 가능 여부를 서로 다른 조건으로 뒀습니다 — 식권 자체는 접수(부조금 신고) 시점에 나오지만, 실제 입장은 그 접수 건의 입금이 확인된 뒤에만 가능하도록 한 번 더 걸러서, 아직 입금 확인이 안 된 접수 건으로 먼저 입장해버리는 상황을 막았습니다."
      },
      {
        problem: "축의금을 계좌이체로 받을 때 카드결제처럼 완전히 자동으로 입금을 확인하고 입금자와 하객을 매칭할 방법을 고민했음 — 실제로 입금자명과 하객 이름이 다르게 찍히는 경우도 많았음",
        solution: "결제대행사(PG) 연동이나 가상계좌 발급 같은 완전 자동화 대신, 수취인 본인 계좌(모임통장 등)로 직접 입금받아 돈이 중간 단계 없이 바로 도착하게 하고, 접수 시 예상 입금자명을 함께 받아 두어 대시보드에서 실제 하객 이름과 나란히 비교하며 주최자가 직접 입금 확인 처리를 하는 방식으로 설계. 완전 자동 매칭은 향후 오픈뱅킹 연동으로 개선할 수 있는 영역으로 남겨두고, 우선은 사람이 눈으로 대조하는 방식으로 범위를 좁혀 먼저 동작하게 만듦",
        detail: "경조사비는 물건이나 서비스에 대한 대가가 아니라 순수한 축하·조의의 송금이라, 카드결제망(PG) 연동은 사업자 등록과 심사, 정산 주기, 수수료까지 감안하면 배보다 배꼽이 더 큰 방식이라고 판단했습니다. 가상계좌 발급도 마찬가지로 PG 계약이 필요해 같은 이유로 제외했습니다. 대신 수취인(신랑측·신부측 등)의 실제 계좌로 하객이 바로 이체하게 하고, 이체 시 '예상 입금자명'을 함께 입력받아 저장해뒀습니다. 이 입력은 키오스크뿐 아니라 모바일 청첩장 페이지 자체에도 계좌 정보 바로 아래에 '마음 전하기' 폼으로 넣어서, 하객이 청첩장을 보다가 그 자리에서 이체하고 이체했다는 사실까지 바로 알릴 수 있게 했습니다. 다만 이체하는 사람이 실제 계좌 명의자 이름 그대로 보내지 않는 경우가 흔해서, 하객이 남긴 '이체했다'는 응답값과 실제 계좌에 찍힌 입금 내역을 시스템이 자동으로 매칭하는 건 신뢰하기 어렵다고 판단했고, 그래서 예상 입금자명과 하객 이름을 화면에 나란히 보여주고 주최자가 자신의 뱅킹 앱과 대조해 직접 입금 확인 버튼을 누르는 방식으로 만들었습니다. 완전 자동 매칭(오픈뱅킹 연동)은 사업자 등록 심사 등의 진입장벽이 있어 이번 범위에서는 제외하고, 대신 카카오페이·모임통장 링크를 QR에 함께 넣어 하객이 송금하기 편하게 만드는 선에서 개선했습니다."
      },
      {
        problem: "정식 서비스의 웹 기반 키오스크를 결혼식 현장에 상시 설치된 하드웨어로 운영하려면, 결혼식장 업체와 정식으로 제휴부터 맺어야 하고 키오스크 전용 기기도 마련해야 하는 등 물리적·영업적 부담이 컸음",
        solution: "그 대신 노트북 한 대만 있으면 되는 완전히 별도의 가벼운 프로그램을 만들어서 결혼식 당일 임시로 띄우고 여러 태블릿이 같은 와이파이로 접속해 접수하게 한 뒤, 행사가 끝나면 엑셀로 내보내고 버리는 일회성 도구로 설계",
        detail: "실제로 결혼식장에 상시 놓인 키오스크 기기를 두려면 결혼식장(웨딩홀) 측과 정식으로 제휴를 맺어야 하고, 키오스크 전용 하드웨어(터치스크린 거치대 등)도 별도로 구매·설치해야 해서 시간과 비용이 많이 드는 일이었습니다. 이런 물리적인 준비 없이도 바로 쓸 수 있는 방법이 필요해서, 노트북 한 대만 있으면 동작하는 완전히 별도의 가벼운 프로그램을 만들었습니다. 결혼식 당일 노트북에서 임시 서버로 띄우면 같은 와이파이에 있는 태블릿 여러 대가 접속해 접수할 수 있고, 행사가 끝나면 접수 내역을 엑셀로 추출한 뒤 그 프로그램은 그대로 폐기합니다."
      }
    ]
  },
  {
    id: "lots-talk",
    title: "채팅 프로그램 (lots-talk)",
    period: "2026.06 ~ 2026.07",
    summary: "회사에 사내 메신저가 따로 없어 기존 협업 도구를 메신저 대신 써왔는데, 메시지가 30일이 지나면 삭제돼 예전 대화를 다시 찾아볼 수 없다는 문제를 개선하고자 직접 만든 실시간 그룹·1:1 메시징 프로그램입니다. 채널/개인 대화방, 접속 상태(온라인/자리비움/방해금지) 표시, 입력 중 표시, 이모지 반응, 멘션(@), 읽음 확인 요청, 투표, 회의 일정 조율 같은 기능을 구현했고, 데스크톱 앱과 서버로 개발했습니다.",
    techStack: ["Java 17", "Spring Boot 3.4", "MyBatis", "Oracle", "STOMP/WebSocket", "JWT", "React 18", "TypeScript", "Electron"],
    screenshots: [
      { src: "images/screenshots/lots-talk.png", caption: "채널 사이드바 및 접속상태 UI" },
      { src: "images/screenshots/lots-talk-dm.png", caption: "1:1 개인 메시지(DM) 대화방" },
      { src: "images/screenshots/lots-talk-mentions.png", caption: "멘션(@) 하이라이트 및 알림" }
    ],
    challenges: [
      {
        problem: "실시간 채팅 연결은 일반적인 웹 로그인 방식과는 별개로 동작해서, 흔히 쓰는 로그인 인증 방식을 그대로 쓸 수 없었음",
        solution: "채팅 연결이 시작되는 순간 로그인 토큰을 별도로 검증해 그 연결에 사용자 정보를 붙여주고, 채팅 전용 경로는 일반 로그인 인증 절차에서 제외",
        detail: "일반적인 화면 요청은 로그인 인증 절차를 그대로 거치지만, 실시간 채팅 연결과 그 뒤로 오가는 메시지는 이 절차를 거치지 않습니다. 그래서 채팅 연결이 시작되는 순간 로그인 토큰을 별도로 추출해 검증하고, 검증된 사용자 정보를 그 연결에 등록했습니다. 이후 메시지 전송·구독 권한을 확인할 때 이 정보를 사용합니다."
      },
      {
        problem: "사용자가 여러 탭·기기에서 동시 접속했을 때, 그중 한 탭만 닫아도 전체 접속이 끊긴 것처럼 온라인 상태가 꺼져버리는 문제와, 자리비움/방해금지처럼 사용자가 직접 골라둔 상태인데도 접속이 끊기면 그냥 오프라인으로 덮어써지는 문제가 있었음",
        solution: "사용자별로 지금 열려 있는 접속(세션) 수를 함께 추적해서 마지막 하나가 끊길 때만 오프라인으로 바꾸도록 했고, 그마저도 사용자가 이미 자리비움·방해금지로 직접 설정해둔 상태라면 오프라인으로 덮어쓰지 않고 그대로 유지하도록 처리. 다만 새로 접속을 시작할 때는 이전에 어떤 상태였든 항상 온라인으로 초기화되도록 의도적으로 단순화함",
        detail: "여러 탭이나 여러 기기로 동시에 접속해 있을 때, 그중 하나만 닫혀도 전체 접속이 끊긴 것으로 착각해 온라인 상태를 꺼버리면 실제로는 다른 탭에서 계속 쓰고 있는데도 상대방에게는 오프라인으로 보이는 문제가 있었습니다. 그래서 접속을 관리하는 곳에서 사용자별로 지금 열려 있는 접속 수를 함께 추적하도록 해서, 그 수가 0이 될 때(정말 마지막 하나가 끊길 때)만 오프라인으로 전환되도록 만들었습니다. 또한 마지막 접속이 끊기더라도, 그 사용자가 자리비움·방해금지처럼 직접 골라둔 상태였다면 오프라인으로 덮어쓰지 않고 그 상태 그대로 유지되도록 분리했습니다(온라인 상태였을 때만 오프라인으로 바뀝니다). 다만 새로 접속을 시작하는 시점에는 이전에 어떤 상태를 골라뒀었는지와 무관하게 항상 온라인으로 초기화되도록 의도적으로 단순하게 만들었습니다 — 접속이 끊긴 뒤 다시 들어올 때마다 매번 온라인으로 시작하고, 자리비움·방해금지는 그때그때 다시 고르는 방식입니다."
      },
      {
        problem: "메시지 내용을 암호화해서 저장하다 보니, 저장된 값 자체로는 일반적인 '포함 검색'을 할 수 없어서 채팅 검색 기능을 어떻게 구현할지가 어려웠음",
        solution: "본문은 그대로 암호화해서 저장하고, 검색을 위한 별도의 토큰값을 함께 만들어 저장해서 검색할 때는 이 토큰끼리만 비교하도록 설계 — 한글 부분 검색도 되도록 짧은 글자 단위로 쪼개서 토큰화",
        detail: "채팅 내용은 개인정보라 암호화해서 저장했는데, 그러면 저장된 값이 암호문이라 일반적인 '~를 포함한 메시지 찾기' 방식의 검색이 통하지 않았습니다. 그렇다고 검색할 때마다 모든 메시지를 복호화해서 비교하는 건 성능도 떨어지고 암호화한 의미도 퇴색됩니다. 그래서 메시지를 저장할 때 본문과는 별도로, 짧은 글자 단위로 쪼갠 뒤 되돌릴 수 없는 방식으로 변환한 검색용 값을 함께 저장해뒀습니다. 검색어가 들어오면 똑같은 방식으로 변환해서, 저장된 검색용 값과 일치하는지만 비교합니다. 이렇게 하면 원문 내용을 몰라도 '이 메시지에 이 검색어가 들어있는지' 정도는 판단할 수 있고, 한글처럼 띄어쓰기 없이 붙여 쓰는 경우에도 부분적으로 검색이 됩니다. 암호화 처리를 담당하는 부분을 잘못 등록해서 하마터면 관련 없는 다른 데이터까지 전부 암호화될 뻔한 실수도 있었는데, 적용 범위를 딱 필요한 항목 하나로 좁혀서 해결했습니다."
      },
      {
        problem: "사내에서만 쓰는 데스크톱 앱이라 정식 배포 인증 절차를 거치지 않았더니, macOS에서 설치한 앱이 '손상되었기 때문에 열 수 없습니다'라는 오류로 아예 실행조차 안 되는 문제가 있었음",
        solution: "macOS의 실행 차단 기능이 인증되지 않은 외부 앱을 막는 것이 원인임을 확인하고, 빌드 설정에서 관련 검사를 사내 배포 용도에 맞게 조정한 뒤, 이미 다운로드한 사용자를 위한 간단한 명령어 기반 해결 가이드를 함께 제공",
        detail: "이 채팅 프로그램은 사내에서만 쓰는 데스크톱 앱이라 유료 개발자 인증(공증) 절차 없이 만들어 배포했는데, macOS의 보안 기능(Gatekeeper)이 출처가 확인되지 않은 앱이라며 실행 자체를 막았습니다. 사용자 입장에서는 '손상되었기 때문에 열 수 없습니다'라는 오해하기 쉬운 오류 메시지만 보였습니다. 원인은 인증서 서명·공증이 없는 앱이라는 점이었고, 사내용으로 공증까지 받기엔 과한 절차라고 판단해, 빌드 시 관련 보안 검사 옵션을 사내 배포 상황에 맞게 조정했습니다. 그래도 이미 다운로드한 사용자의 macOS에는 이미 '검역' 표시가 남아있을 수 있어서, 터미널에서 간단한 명령어 한 줄로 그 표시를 지우면 정상 실행된다는 안내 문서를 함께 만들어 배포했습니다."
      }
    ]
  },
  {
    id: "baby-yeolmu",
    title: "베이비열무 (아기 육아일기)",
    period: "2026.04",
    summary: "가족끼리만 공유하는 비공개 아기 육아일기 웹앱입니다. 성장·수유·수면·접종·병원 기록, 달력 일기, 사진첩, 네 컷 사진 콜라주 만들기 기능을 구현했고, 회원가입 없이도 정해진 권한만 가진 초대 링크(사진만 보기, 일기 작성 가능 등)로 가족을 초대할 수 있도록 설계했습니다.",
    techStack: ["Java 17", "Spring Boot 3.2", "Thymeleaf", "MyBatis", "H2/Oracle", "Web Push (VAPID)", "PWA"],
    screenshots: [
      { src: "images/screenshots/baby-yeolmu-login.png", caption: "로그인 화면" },
      { src: "images/screenshots/baby-yeolmu-dashboard.png", caption: "홈 대시보드 (데모 데이터)" },
      { src: "images/screenshots/baby-yeolmu-calendar.png", caption: "달력 — 일정을 등록하면 해당 날짜에 바로 표시됨" },
      { src: "images/screenshots/baby-yeolmu-invite.png", caption: "초대장 발행 — 관계별 권한 설정 및 초대코드 발급" },
      { src: "images/screenshots/baby-yeolmu-guest-view.png", caption: "초대 링크로 입장한 화면 — 허용된 사진 외에는 메뉴 자체가 보이지 않음" },
      { src: "images/screenshots/baby-yeolmu-fourcut.png", caption: "인생네컷 — 레이아웃/배경/스티커를 활용한 포토 콜라주" },
      { src: "images/screenshots/baby-yeolmu-fourcut-deco.png", caption: "인생네컷 — 사진 4장 + 귀여운 캐릭터 프레임 + 스티커·글귀로 완성한 콜라주" }
    ],
    challenges: [
      {
        problem: "회원가입 없이 초대 링크만으로 들어오는 손님(게스트)을, 일반 로그인 사용자와 똑같은 권한 체계로 다뤄야 했음",
        solution: "게스트의 세션 정보를 읽어 권한 정보로 변환한 뒤, 로그인 사용자와 동일한 방식으로 인식되도록 처리",
        detail: "초대 링크로 들어온 게스트는 회원가입 없이 사진 보기, 일기 작성 같은 권한 조합만 다르게 부여받는데, 권한 확인 로직 자체는 로그인한 회원을 전제로 설계돼 있었습니다. 그래서 세션에 저장된 게스트 권한 정보를 읽어 로그인 사용자와 같은 형태로 변환하도록 구현했습니다. 그러면 이후 화면·기능별 권한 확인이 로그인 사용자든 게스트든 동일하게 동작합니다."
      },
      {
        problem: "달력 페이지에 기록이 30개 있으면 미디어 파일을 하나씩 31번 나눠서 조회하는 문제, 게스트 권한 확인 로직이 이미지 파일 같은 화면 구성 요소 요청에까지 매번 데이터베이스를 다시 조회해 페이지 하나 열 때 권한 조회만 20~30번씩 나가는 문제",
        solution: "기록들을 먼저 한 번에 가져온 뒤 그 기록들에 딸린 미디어 파일도 한 번에 통째로 조회해서 메모리에서 짝지어주는 방식으로 바꿔 조회 횟수를 31번에서 2번으로 줄이고, 게스트 권한은 잠시 기억해뒀다가 재사용하고 이미지·CSS·JS 같은 정적 파일 요청은 권한 확인 자체를 건너뛰도록 처리해서 페이지당 권한 조회를 1번으로 줄임",
        detail: "달력 페이지는 원래 그 달의 기록을 조회한 뒤, 기록마다 미디어 파일을 한 건씩 추가로 조회하고 있어서 기록이 30개면 조회가 31번 나가는 전형적인 N+1 문제가 있었습니다. 그래서 기록들을 한 번에 가져온 뒤, 그 기록들의 ID를 모아서 미디어 파일도 한 번에 통째로 조회하고 메모리에서 기록별로 다시 짝지어주는 방식으로 바꿔 조회를 31번에서 2번으로 줄였습니다. 또한 게스트 인증을 확인하는 로직이 화면에 쓰이는 이미지·CSS·JS 파일 요청에까지 매번 데이터베이스에서 권한을 다시 조회하고 있어서, 페이지 하나를 열 때 권한 조회만 20~30번씩 나가고 있었습니다. 그래서 그런 정적 파일 요청은 권한 확인 로직 자체를 건너뛰도록 처리하고, 권한 조회 결과는 5분 동안 잠시 기억해뒀다가 재사용하도록 만들어서 페이지당 권한 조회를 1번 수준으로 줄였습니다."
      },
      {
        problem: "아기 사진은 가족 구성원마다 보여줘도 되는 범위가 다른데(예: 사진은 보여줘도 되지만 병원 기록·예방접종 같은 민감한 기록까지는 아닌 경우), 회원가입 없이 링크 하나로 초대하면서도 이런 세밀한 접근 범위를 지킬 방법이 필요했음",
        solution: "초대 코드를 발급할 때 카테고리별(사진 보기/댓글/다운로드/네컷/삭제, 달력, 성장 기록, 예방접종, 진료 기록, 초대 관리, 문서 등)로 권한을 하나하나 골라 담을 수 있게 하고, 그 권한 조합을 발급된 초대 코드/링크에 그대로 저장해서, 이후 그 링크로 들어온 사람은 화면 메뉴부터 실제 서버 요청까지 정확히 그 권한만큼만 접근되도록 구현",
        detail: "초대 링크를 받는 사람마다 보여주고 싶은 범위가 다릅니다 — 사진만 살짝 보여주고 싶은 지인도 있고, 병원 기록까지 함께 챙겨야 하는 가족도 있습니다. 그래서 초대장을 만들 때 '사진 보기', '댓글 작성', '다운로드', '네컷 만들기', '사진 삭제', '달력', '성장/수유/수면', '예방접종', '진료기록', '초대 관리', '문서 보관함'처럼 항목을 세분화해서 원하는 것만 체크해 담을 수 있게 만들었습니다. 예를 들어 '사진 보기'만 체크해서 링크를 만들면, 그 링크로 들어온 사람 화면에는 정말 사진 메뉴 하나만 보이고 나머지 메뉴(달력, 병원 기록 등)는 아예 나타나지 않습니다. 그리고 이건 화면에서만 숨긴 게 아니라, 그 사람이 주소를 직접 입력해서 다른 화면에 들어가려고 해도 서버가 그 권한이 없다는 걸 확인하고 막습니다. 이렇게 하면 사진을 외부에 유출할 걱정 없이, 정말 보여주고 싶은 사람에게 딱 보여주고 싶은 것만 공유할 수 있습니다."
      }
    ]
  },
  {
    id: "card-print-maker",
    title: "카드 전사 이미지 메이커",
    period: "2026.05",
    summary: "학생증·사원증 같은 카드의 앞뒷면 이미지를 미리 정해둔 배치 정보에 맞춰 자동으로 합성해주는 이미지 생성기입니다. 글자·사진·바코드 같은 요소의 위치·크기·색상을 JSON 형식으로 직접 입력해서 배치를 정의하면, 서버가 그 배치대로 카드 이미지를 그려주고 카드 프린터가 지원하는 출력 방식(컬러/흑백 등)에 맞춰 이미지를 만들어줍니다.",
    techStack: ["Java 8", "Spring Boot 2.7", "Thymeleaf", "ZXing", "Java AWT/Graphics2D", "Vanilla JS"],
    diagramTitle: "편집 워크플로우",
    diagram: `<svg viewBox="0 0 700 560" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <marker id="card-json-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
          <path d="M0,0 L10,5 L0,10 z" fill="#2f3ea3"/>
        </marker>
        <marker id="card-rotate-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
          <path d="M0,0 L10,5 L0,10 z" fill="#dc6803"/>
        </marker>
      </defs>
      <text x="350" y="18" text-anchor="middle" font-size="12" font-weight="600" fill="#1a1d23">배치 편집 방식 — JSON 직접 수정</text>

      <rect x="20" y="35" width="330" height="215" rx="10" fill="#1a1d23" stroke="#2f3ea3"/>
      <text x="35" y="55" font-size="10" font-weight="600" fill="#9ca3af">JSON 편집기 (textarea)</text>
      <text x="35" y="76" font-size="9.5" font-family="monospace" fill="#e5e7eb">{ "className": "TextView",</text>
      <text x="35" y="92" font-size="9.5" font-family="monospace" fill="#e5e7eb">  "tag": "userName",</text>
      <rect x="30" y="99" width="220" height="16" rx="3" fill="#2f3ea3"/>
      <text x="35" y="111" font-size="9.5" font-family="monospace" fill="#ffffff">  "position": {"x":320,"y":90},</text>
      <text x="35" y="127" font-size="9.5" font-family="monospace" fill="#e5e7eb">  "size": {"width":600,"height":60},</text>
      <text x="35" y="143" font-size="9.5" font-family="monospace" fill="#e5e7eb">  "color": "#000000",</text>
      <text x="35" y="159" font-size="9.5" font-family="monospace" fill="#e5e7eb">  "align": "left" }</text>
      <text x="35" y="185" font-size="9" fill="#9ca3af">↑ 좌표·크기 숫자를 텍스트로 직접 입력</text>
      <text x="35" y="202" font-size="9" fill="#9ca3af">(마우스로 끌어서 옮기는 UI 없음)</text>

      <line x1="350" y1="107" x2="378" y2="107" stroke="#2f3ea3" stroke-width="1.5" marker-end="url(#card-json-arrow)"/>

      <rect x="380" y="35" width="300" height="215" rx="10" fill="#f7f8fa" stroke="#e5e7eb"/>
      <text x="395" y="55" font-size="10" font-weight="600" fill="#1a1d23">카드 미리보기</text>
      <rect x="410" y="70" width="240" height="150" rx="8" fill="#ffffff" stroke="#e5e7eb"/>
      <rect x="452" y="107" width="120" height="16" rx="3" fill="#eceefb" stroke="#2f3ea3" stroke-dasharray="3 2"/>
      <text x="512" y="119" text-anchor="middle" font-size="9.5" fill="#2f3ea3">홍길동 (x:320, y:90)</text>
      <text x="395" y="238" font-size="9" fill="#6b7280">저장 후 새로고침해야 이 위치에 반영된 결과를 볼 수 있음</text>

      <text x="350" y="278" text-anchor="middle" font-size="9.5" fill="#6b7280">→ 숫자를 추측해 넣고 저장·새로고침으로 결과를 확인하는 과정을 요소 하나마다 반복</text>

      <text x="350" y="320" text-anchor="middle" font-size="12" font-weight="600" fill="#1a1d23">같은 보정값(+15)인데 회전 여부에 따라 실제로 바뀌는 좌표축이 다름</text>
      <text x="350" y="336" text-anchor="middle" font-size="9" fill="#6b7280">CardImage.plusPosition(15) — rotate % 180 == 0 이면 Y, 아니면 X에 더함</text>

      <rect x="20" y="350" width="320" height="195" rx="10" fill="#f7f8fa" stroke="#e5e7eb"/>
      <text x="180" y="372" text-anchor="middle" font-size="10.5" font-weight="600" fill="#1a1d23">회전 없음 (rotate = 0°/180°)</text>
      <rect x="110" y="390" width="140" height="26" rx="4" fill="#ffffff" stroke="#9ca3af" stroke-dasharray="3 2"/>
      <text x="180" y="407" text-anchor="middle" font-size="9.5" fill="#6b7280">원래 위치 (x, y)</text>
      <line x1="180" y1="416" x2="180" y2="466" stroke="#dc6803" stroke-width="1.5" marker-end="url(#card-rotate-arrow)"/>
      <text x="205" y="444" font-size="9" fill="#dc6803">position.y</text>
      <text x="205" y="456" font-size="9" fill="#dc6803">+= 15</text>
      <rect x="110" y="470" width="140" height="26" rx="4" fill="#eceefb" stroke="#2f3ea3"/>
      <text x="180" y="487" text-anchor="middle" font-size="9.5" fill="#2f3ea3">보정 후 (x, y+15)</text>
      <text x="180" y="530" text-anchor="middle" font-size="9" fill="#6b7280">세로(아래)로 15만큼 이동</text>

      <rect x="360" y="350" width="320" height="195" rx="10" fill="#f7f8fa" stroke="#e5e7eb"/>
      <text x="520" y="372" text-anchor="middle" font-size="10.5" font-weight="600" fill="#1a1d23">회전 있음 (rotate = 90°/270°)</text>
      <rect x="450" y="390" width="140" height="26" rx="4" fill="#ffffff" stroke="#9ca3af" stroke-dasharray="3 2"/>
      <text x="520" y="407" text-anchor="middle" font-size="9.5" fill="#6b7280">원래 위치 (x, y)</text>
      <line x1="590" y1="403" x2="630" y2="403" stroke="#dc6803" stroke-width="1.5" marker-end="url(#card-rotate-arrow)"/>
      <text x="595" y="393" font-size="9" fill="#dc6803">position.x += 15</text>
      <rect x="600" y="390" width="70" height="26" rx="4" fill="#eceefb" stroke="#2f3ea3"/>
      <text x="635" y="407" text-anchor="middle" font-size="9" fill="#2f3ea3">(x+15, y)</text>
      <text x="520" y="530" text-anchor="middle" font-size="9" fill="#6b7280">가로(오른쪽)로 15만큼 이동</text>

      <text x="350" y="552" text-anchor="middle" font-size="9" fill="#6b7280">→ 요소 자신이 90°/270° 회전돼 있으면 가로·세로가 뒤바뀌어서, 같은 보정값이 반대 축으로 작용해야 의도한 방향으로 움직임</text>
    </svg>`,
    screenshots: [
      { src: "images/screenshots/card-print-maker.png", caption: "JSON 편집기 + 카드 미리보기 초기 화면" },
      { src: "images/screenshots/card-preview-generated.png", caption: "JSON 입력 후 생성된 카드 미리보기 + 요소 목록" },
      { src: "images/screenshots/card-element-selected.png", caption: "요소 선택 시 캔버스에 위치 표시 + 속성 패널로 값 조정" }
    ],
    challenges: [
      {
        problem: "카드를 구성하는 요소(글자/사진/바코드)가 프린터의 서로 다른 출력 방식(컬러/흑백)으로 각각 출력돼야 했음",
        solution: "글자·사진·바코드 같은 요소 하나하나에 흑백용/컬러용 그리기 로직을 따로 만드는 대신, 그리는 코드는 하나로 통일하고 그 결과를 담는 이미지판 자체를 흑백 전용/컬러 전용으로 미리 다르게 준비해서, 같은 그리기 코드를 실행하는 것만으로 자동으로 흑백·컬러 결과가 나뉘도록 설계",
        detail: "카드 프린터는 컬러 잉크 리본과 흑백 리본을 따로 인쇄 헤드에 걸어 찍는 경우가 많아서, 같은 배치라도 컬러용과 흑백용 이미지를 각각 만들어야 했습니다. 그런데 글자·사진·바코드 같은 요소 하나하나에 '흑백일 때는 이렇게, 컬러일 때는 이렇게' 그리는 로직을 따로 만들면 요소가 늘어날 때마다 관리 부담이 두 배가 됩니다. 그래서 요소를 그리는 코드는 하나로 통일하고, 그 그림을 최종적으로 담는 이미지판을 흑백 전용/컬러 전용으로 미리 다르게 준비해서, 같은 그리기 코드를 두 번 실행하는 것만으로 자동으로 흑백·컬러 결과가 나뉘도록 만들었습니다. 이렇게 하면 앞면 컬러·앞면 흑백·뒷면 컬러·뒷면 흑백, 이 4가지 이미지가 요소별 특수 처리 없이 한 번의 처리 과정에서 모두 생성됩니다."
      },
      {
        problem: "사용자가 올린 사진이 휴대폰으로 찍은 방향(세로/가로, 좌우반전 등)에 따라 제각각으로 들어가 카드에 사진이 회전된 채로 삽입되는 문제",
        solution: "사진에 저장된 촬영 방향 정보를 읽어, 여덟 가지 경우를 각각 직접 계산해서 바로잡는 기능을 구현",
        detail: "사진 파일에 저장된 촬영 방향 정보를 읽고, 정상/좌우반전/180도 회전/90도 회전 등 여덟 가지 방향마다 맞는 보정 계산을 직접 구현했습니다. 그 결과 사진이 어떤 방향으로 촬영됐든 카드에는 항상 올바른 방향으로 삽입됩니다."
      },
      {
        problem: "실제 카드 프린터로 인쇄되는 이미지와 화면 미리보기용 이미지가 서로 다른 회전 방향으로 나가야 했음 — 카드가 프린터에 물리적으로 들어가는 방향과 화면에서 보기 좋은 방향이 달랐고, 카드 종류(도서관용 등)에 따라서도 방향 처리를 다르게 해야 했음",
        solution: "같은 배치 데이터는 그대로 두고, 실제 인쇄용 이미지를 만들 때는 전체를 180도 돌려 프린터가 카드를 삼키는 방향에 맞추고, 화면 미리보기용 이미지를 만들 때는 90도만 돌리는 식으로 용도별 회전값을 분리해서 처리. 도서관용 카드처럼 예외가 있는 카드 종류는 이 회전 자체를 건너뛰도록 별도 분기 처리",
        detail: "카드가 프린터에 실제로 들어가는 방향은 화면에서 보기 편한 방향과 정반대인 경우가 있었습니다. 그래서 배치 데이터 자체는 그대로 두고, 실제 인쇄용 이미지를 만드는 시점에만 전체를 180도 회전시켜서 내보내도록 만들었습니다. 반면 화면에 띄우는 미리보기 이미지는 인쇄용과는 다른 90도 회전이 필요해서, 인쇄용 처리와 미리보기용 처리를 서로 다른 회전값으로 나눠서 구현했습니다. 도서관에서 쓰는 카드처럼 예외적인 카드 종류는 이 회전 처리 자체를 건너뛰도록 조건을 나눠서, 카드 종류마다 실제 프린터와 화면에 맞는 방향으로 정확히 나가도록 만들었습니다."
      },
      {
        problem: "카드 디자인 방향을 가로에서 세로로 바꾸면서, 그 카드 종류에도 다른 카드들과 같은 회전 처리를 걸어야 했는데, 기존 좌표들이 회전이 안 걸리는 걸 전제로 잡혀 있던 값이라 그대로 적용하면 요소들이 밀려서 어긋나는 문제가 생겼음",
        solution: "회전을 걸기 전에 전체 요소 위치에 보정값을 더해주는 함수를 만들되, 요소 자기 자신이 이미 90도/270도로 회전된 상태인지 아닌지에 따라 보정값을 가로(X) 방향에 더할지 세로(Y) 방향에 더할지를 다르게 처리. 정확한 보정값은 한 번에 못 맞춰서, 실제 인쇄 결과를 보고 다시 조정",
        detail: "특정 카드 종류(도서관용)는 원래 다른 카드들과 다른 방향으로 인쇄되도록 회전 처리 자체를 건너뛰고 있었는데, 그 카드의 디자인을 가로에서 세로로 바꾸면서 다른 카드들과 똑같이 회전을 걸어야 했습니다. 문제는 이 카드의 좌표들이 원래 회전이 안 걸리는 걸 전제로 잡혀 있었기 때문에, 회전을 그대로 적용하면 요소들이 캔버스 밖으로 밀려나거나 위치가 어긋났습니다. 그래서 회전을 걸기 전에 전체 요소 위치에 일정한 보정값을 더해주는 함수를 만들었는데, 이 보정값을 무조건 세로 방향에 더하면 안 됐습니다 — 이미 자기 자신이 90도나 270도로 회전된 개별 요소는 회전 때문에 가로·세로 개념이 서로 뒤바뀌어 있어서, 그런 요소에는 같은 보정값을 가로 방향에 더해야 실제로 원하는 방향으로 이동했습니다. 그래서 요소마다 자기 회전 각도를 확인해서 보정값을 넣을 축을 다르게 선택하도록 처리했습니다. 여백(margin) 값은 방향이 바뀐다고 자동으로 재계산해주는 로직이 없어서, 레이아웃을 다시 짤 때 좌표와 함께 사람이 손으로 다시 잡아야 했습니다. 보정값 자체도 처음엔 감으로 넣었다가 실제 인쇄 결과가 안 맞아서, 현장 요청을 받고 다시 조정한 이력이 있습니다."
      }
    ]
  }
];
