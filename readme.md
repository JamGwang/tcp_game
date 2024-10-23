```
TCP 멀티플레이 프로젝트
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
