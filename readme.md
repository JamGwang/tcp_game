#### TCP 멀티플레이 프로젝트
### **필수 기능**

**프로젝트 생성 및 이벤트 별 코드 처리**

**환경변수 및 상수, 에러 처리**

**프로토콜 버퍼 적용 및 패킷 파싱**

**유저 세션 및 게임 세션 관리**

**접속 및 이동 패킷 교환**

**DB 연동**
유저의 마지막위치 저장

```
tcp_game
├─ .gitignore
├─ .prettierrc
├─ package-lock.json
├─ package.json
├─ readme.md
└─ src
   ├─ classes                                      // 클래스 정의
   │  ├─ managers
   │  │  ├─ base.manager.js
   │  │  └─ interval.manager.js
   │  └─ models
   │     ├─ game.class.js
   │     └─ user.class.js
   ├─ config
   │  └─ config.js                                 // 상수와 환경변수 사용을 위해 접근해야 할 파일
   ├─ constants
   │  ├─ env.js                                    // 환경 변수, 상수 관리
   │  ├─ handlerIds.js                             // 핸들러ID
   │  └─ header.js                                 // 패킷 헤더
   ├─ db
   │  ├─ migration                                 // 쿼리문 실행
   │  │  └─ createSchemas.js
   │  ├─ sql                                       // DB쿼리문
   │  │  └─ user_db.sql
   │  └─ database.js
   ├─ events                                       // 이벤트별 분리
   │  ├─ onConnection.js
   │  ├─ onData.js
   │  ├─ onEnd.js
   │  └─ onError.js
   ├─ handlers
   │  ├─ game
   │  │  └─ updateLocation.handler.js              // 위치 업데이트 핸들러
   │  ├─ index.js                                  // 핸들러 매핑 handler/index.js
   │  └─ user
   │     └─ initial.handler.js                     // 최초 접속 시 유저 정보처리 핸들러
   ├─ init
   │  ├─ index.js                                  // 서버 초기화 작업 init/index.js
   │  └─ loadProtos.js                             // 프로토콜 버퍼 로드
   ├─ protobuf
   │  ├─ packetNames.js                            // 패킷 이름
   │  ├─ request
   │  │  ├─ common.proto                           // 공통 패킷 구조
   │  │  ├─ game.proto                             // 게임 패킷 (위치 정보)
   │  │  └─ initial.proto                          // 최초 패킷
   │  └─ response
   │     └─ reponse.proto                          // 공통 응답메시지 패킷
   ├─ server.js
   ├─ session                                      // 각 세션 관리
   │  ├─ game.session.js
   │  ├─ sessions.js
   │  └─ user.session.js
   └─ utils
      ├─ dateFormatter.js                          // 로그용 Date 포멧터
      ├─ db
      │  └─ testConnection.js                      // db연결 확인용 테스트 코드
      ├─ error                                     // 에러 핸들링
      │  ├─ customError.js
      │  ├─ errorCodes.js
      │  └─ errorHandler.js
      ├─ notification
      │  └─ game.notification.js                   // 게임 내 알림
      ├─ parser
      │  └─ packetParser.js                        // 패킷파서
      └─ response
         └─ createResponse.js                      // 응답메시지 생성

```
