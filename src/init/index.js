// 서버 초기화 작업
import pools from '../db/database.js';
import { testAllConnections } from '../utils/db/testConnection.js';
import { addGameSession } from '../session/game.session.js';
import { loadGameAssets } from './assets.js';
import { loadProtos } from './loadProtos.js';
import { v4 as uuidv4 } from 'uuid';

const initServer = async () => {
    try {
        await loadProtos();
        const gameId = uuidv4();
        const gameSession = addGameSession(gameId);
        console.log(gameSession);
        // 다음 작업
    } catch (e) {
        console.error(e);
        process.exit(1); // 오류 발생 시 프로세스 종료
    }
};

export default initServer;
