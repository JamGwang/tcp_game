//가장 최초에 접속했을 때 유저의 정보를 처리할 핸들러
import { addUser } from '../../session/user.session.js';
import { HANDLER_IDS, RESPONSE_SUCCESS_CODE } from '../../constants/handlerIds.js';
import { createResponse } from '../../utils/response/createResponse.js';
import { handleError } from '../../utils/error/errorHandler.js';
import { createUser, findUserByDeviceId, updateUserLogin } from '../../db/user/user.db.js';
import { getGameSession } from '../../session/game.session.js';
import User from '../../classes/models/user.class.js';


const initialHandler = async ({ socket, userId, payload }) => {
    try {
        const { deviceId, latency, playerId } = payload;
        // 세션에 유저 추가하기
        let user = await findUserByDeviceId(deviceId);
        const coords = {
            x: 0,
            y: 0,
        };

        if (!user) {
            user = await createUser(deviceId);
        } else {
            await updateUserLogin(user.id);
            coords.x = user.xCoord;
            coords.y = user.yCoord;
        }

        user = new User(socket, deviceId, playerId, latency, coords);
        addUser(user);
        const gameSession = getGameSession();
        gameSession.addUser(user);

        // 유저 정보 응답 생성
        const initialResponse = createResponse(
            HANDLER_IDS.INITIAL,
            RESPONSE_SUCCESS_CODE,
            {
                userId: deviceId,
                x: user.x,
                y: user.y,
            },
            deviceId,
        );

        // 소켓을 통해 클라이언트에게 응답 메시지 전송
        socket.write(initialResponse);
    } catch (e) {
        handleError(socket, e);
    }
};

export default initialHandler;
