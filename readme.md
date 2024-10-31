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
├─ client2.js
├─ package-lock.json
├─ package.json
├─ readme.md
└─ src
   ├─ classes
   │  └─ managers
   │     ├─ base.manager.js            // (new)모든 매니저클래스의 뼈대클래스 (부모클래스)
   │     └─ interval.manager.js        // (new)인터벌 매니저
   │  └─ models
   │     ├─ game.class.js              // 인터벌매니저 인스턴스 추가
   │     └─ user.class.js              // 핑패킷생성 추가
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
   │  ├─ onData.js                       // 핑 패킷타입 읽기 추가
   │  ├─ onEnd.js
   │  └─ onError.js
   ├─ handlers
   │  ├─ game
   │  │  ├─ createGame.handler.js
   │  │  └─ joinGame.handler.js
   │  ├─ index.js
   │  └─ user
   │     └─ initial.handler.js
   ├─ init
   │  ├─ assets.js
   │  ├─ index.js
   │  └─ loadProtos.js
   ├─ protobuf
   │  ├─ packetNames.js                 // 핑 패킷 매핑
   │  ├─ request
   │  │  ├─ common.proto                // 핑 패킷구조 추가
   │  │  ├─ game.proto
   │  │  └─ initial.proto
   │  └─ response
   │     └─ reponse.proto
   ├─ server.js
   ├─ session
   │  ├─ game.session.js
   │  ├─ sessions.js
   │  └─ user.session.js                // 소켓으로 유저찾는 기능 추가
   └─ utils
      ├─ dateFormatter.js
      ├─ db
      │  └─ testConnection.js
      ├─ error
      │  ├─ customError.js
      │  ├─ errorCodes.js
      │  └─ errorHandler.js
      ├─ notification
      │  └─ game.notification.js          //(new) 게임의 모든 알림 관리
      ├─ parser
      │  └─ packetParser.js
      └─ response
         └─ createResponse.js

```
