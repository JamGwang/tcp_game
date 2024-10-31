// 프로토콜 버퍼 매핑
// 프로토 확장자에 접근하여 프로토 load를 하기 위함
export const packetNames = {
    common: {
        Packet: 'common.Packet',
        Ping: 'common.Ping',
    },
    initial: {
        InitialPacket: 'initial.InitialPacket',
    },
    game: {
        CreateGamePayload: 'game.CreateGamePayload',
        JoinGamePayload: 'game.JoinGamePayload',
    },
    response: {
        Response: 'response.Response',
    },
    gameNotification: {
        Start: 'gameNotification.Start',
        LocationUpdate: 'gameNotification.LocationUpdate',
    }
};