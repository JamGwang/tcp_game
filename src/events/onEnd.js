import { getGameSession } from "../session/game.session.js";
import { gameSessions, userSessions } from "../session/sessions.js";
import { removeUser } from "../session/user.session.js";

export const onEnd = (socket) => async () => {
    console.log('Client disconnected');
    console.log(userSessions);
    console.log(gameSessions);
    // 세션에서 유저 삭제
    await removeUser(socket);

    const gameSession = getGameSession();
    gameSession.removeUserBySocket(socket);
}