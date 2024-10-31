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
├─ package-lock.json
├─ package.json
├─ readme.md
└─ src
   ├─ classes
   │  └─ managers
   │     ├─ base.manager.js
   │     └─ interval.manager.js
   │  └─ models
   │     ├─ game.class.js
   │     └─ user.class.js
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
   │  │  └─ updateLocation.handler.js
   │  ├─ index.js
   │  └─ user
   │     └─ initial.handler.js
   ├─ init
   │  ├─ assets.js
   │  ├─ index.js
   │  └─ loadProtos.js
   ├─ protobuf
   │  ├─ packetNames.js
   │  ├─ request
   │  │  ├─ common.proto
   │  │  ├─ game.proto
   │  │  └─ initial.proto
   │  └─ response
   │     └─ reponse.proto
   ├─ server.js
   ├─ session
   │  ├─ game.session.js
   │  ├─ sessions.js
   │  └─ user.session.js
   └─ utils
      ├─ dateFormatter.js
      ├─ db
      │  └─ testConnection.js
      ├─ error
      │  ├─ customError.js
      │  ├─ errorCodes.js
      │  └─ errorHandler.js
      ├─ notification
      │  └─ game.notification.js
      ├─ parser
      │  └─ packetParser.js
      └─ response
         └─ createResponse.js

```
