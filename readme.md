```
TCP 멀티플레이 프로젝트

tcp_game
├─ .env // 환경 변수, 상수
├─ .gitignore
├─ .prettierrc
├─ assets
│  ├─ item.json
│  ├─ item_unlock.json
│  └─ stage.json
├─ client.js // 클라이언트 코드
├─ package-lock.json
├─ package.json
├─ readme.md
└─ src
   ├─ config
   │  └─ config.js // 상수와 환경변수 사용을 위해 접근해야 할 곳
   ├─ constants
   │  ├─ env.js // 환경 변수, 상수 관리 (중앙 집중식 관리)
   │  ├─ handlerIds.js // 핸들러ID 지정
   │  └─ header.js	// 패킷 헤더 관련 상수
   ├─ events	// 이벤트별 분리
   │  ├─ onConnection.js // 소켓 연결설정 이벤트
   │  ├─ onData.js // 데이터 수신 이벤트
   │  ├─ onEnd.js // 데이터 전송 완료 이벤트
   │  └─ onError.js // 에러 발생 이벤트
   ├─ handlers
   │  ├─ index.js // 핸들러 매핑을 위한 handler/index.js
   │  └─ user
   │     └─ initial.handler.js // 최초 접속 시 유저 정보처리 핸들러
   ├─ init
   │  ├─ assets.js // 데이터 파일 로드
   │  ├─ index.js // 서버 초기화 작업 (init/index.js)
   │  └─ loadProtos.js // 프로토 파일 로드
   ├─ protobuf
   │  ├─ initial.proto // 최초 패킷 구조
   │  ├─ packetNames.js // 패킷 이름 매핑
   │  ├─ request
   │  │  └─ common.proto // 공통 패킷 구조
   │  └─ response
   │     └─ reponse.proto // 공통 응답 메시지 구조
   ├─ server.js // 서버 코드
   ├─ session
   │  ├─ sessions.js // 각 유저세션, 게임세션을 추가할 배열들
   │  └─ user.session.js // 세션 관리 함수(유저 추가, 삭제, 조회 등)
   └─ utils
      ├─ error
      │  ├─ customError.js // CustomError 객체 (Class)
      │  ├─ errorCodes.js // 사용자 정의 에러코드
      │  └─ errorHandler.js // 에러 처리 핸들러
      ├─ parser
      │  └─ packetParser.js // 패킷 파싱(패킷 내용 해석, 검증 추가)
      └─ response
         └─ createResponse.js // 요청에 대한 반환 패킷 구성 함수
```

```
tcp_game
├─ .gitignore
├─ .prettierrc
├─ assets
│  ├─ item.json
│  ├─ item_unlock.json
│  └─ stage.json
├─ client.js
├─ package-lock.json
├─ package.json
├─ readme.md
└─ src
   ├─ config
   │  └─ config.js                      // db 환경변수 추가
   ├─ constants
   │  ├─ env.js                         // db 환경변수 추가
   │  ├─ handlerIds.js
   │  └─ header.js
   ├─ db
   │  └─ migration
   │     └─ createSchemas.js            //(new) sql 쿼리 실행
   │  └─ sql
   │     └─ user_db.sql                 //(new) user_db에 사용할 sql문
   │  └─ database.js                    //(new) 커넥션 풀 생성, 쿼리실행 시 로그
   ├─ events
   │  ├─ onConnection.js
   │  ├─ onData.js
   │  ├─ onEnd.js
   │  └─ onError.js
   ├─ handlers
   │  ├─ index.js
   │  └─ user
   │     └─ initial.handler.js
   ├─ init
   │  ├─ assets.js
   │  ├─ index.js                        // db 연결 호출
   │  └─ loadProtos.js
   ├─ protobuf
   │  ├─ initial.proto
   │  ├─ packetNames.js
   │  ├─ request
   │  │  └─ common.proto
   │  └─ response
   │     └─ reponse.proto
   ├─ server.js
   ├─ session
   │  ├─ sessions.js
   │  └─ user.session.js
   └─ utils
      ├─ dateFormatter.js               //(new) 로그에 날짜를 남기기 위한 날짜 포맷
      ├─ db
      │  └─ testConnection.js           //(new) db연결 테스트 코드
      ├─ error
      │  ├─ customError.js
      │  ├─ errorCodes.js
      │  └─ errorHandler.js
      ├─ parser
      │  └─ packetParser.js
      └─ response
         └─ createResponse.js

```
