#### TCP 멀티플레이 프로젝트

유저, 게임 클래스 생성 및 관리
게임 생성, 게임 입장

```
tcp_game
├─ .gitignore
├─ .prettierrc
├─ assets
│  ├─ item.json
│  ├─ item_unlock.json
│  └─ stage.json
├─ client.js
├─ client2.js                          // (new) 게임 입장 테스트 클라이언트
├─ package-lock.json
├─ package.json
├─ readme.md
└─ src
   ├─ classes
   │  └─ models
   │     ├─ game.class.js              // (new) 게임 클래스 정의
   │     └─ user.class.js              // (new) 유저 클래스 정의
   ├─ config
   │  └─ config.js
   ├─ constants
   │  ├─ env.js
   │  ├─ handlerIds.js
   │  └─ header.js
   ├─ db
   │  └─ migration
   │     └─ createSchemas.js
   │  └─ sql
   │     └─ user_db.sql
   │  └─ database.js
   ├─ events
   │  ├─ onConnection.js
   │  ├─ onData.js
   │  ├─ onEnd.js
   │  └─ onError.js
   ├─ handlers
   │  ├─ game
   │  │  ├─ createGame.handler.js      // (new)게임 생성 핸들러
   │  │  └─ joinGame.handler.js        // (new)게임 참가 핸들러
   │  ├─ index.js
   │  └─ user
   │     └─ initial.handler.js
   ├─ init
   │  ├─ assets.js
   │  ├─ index.js
   │  └─ loadProtos.js
   ├─ protobuf
   │  ├─ packetNames.js                 // 게임 프로토콜 버퍼 매핑 추가
   │  ├─ request
   │  │  ├─ common.proto
   │  │  ├─ game.proto                  // (new)게임 프로토콜 버퍼
   │  │  └─ initial.proto
   │  └─ response
   │     └─ reponse.proto
   ├─ server.js
   ├─ session
   │  ├─ game.session.js                // (new) 게임 세션 관리 메소드
   │  ├─ sessions.js
   │  └─ user.session.js                // user클래스 활용
   └─ utils
      ├─ dateFormatter.js
      ├─ db
      │  └─ testConnection.js
      ├─ error
      │  ├─ customError.js
      │  ├─ errorCodes.js
      │  └─ errorHandler.js
      ├─ parser
      │  └─ packetParser.js
      └─ response
         └─ createResponse.js

```
