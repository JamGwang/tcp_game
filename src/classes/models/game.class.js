import { createLocationPacket } from "../../utils/notification/game.notification.js";
import IntervalManager from "../managers/interval.manager.js";

const MAX_PLAYERS = 4;

class Game {
    constructor(id) {
        // 게임 세션의 고유id
        this.id = id;
        this.users = [];
        this.intervalManager = new IntervalManager();
        this.state = 'waiting'; // 'waiting', 'inProgress'
    }

    addUser(user) {
        if (this.users.length >= MAX_PLAYERS) {
            throw new Error('Game session is full');
        }
        this.users.push(user);

        this.intervalManager.addPlayer(user.id, user.ping.bind(user), 1000); // 테스트 interval 1초
        if (this.users.length === MAX_PLAYERS) {
            setTimeout(() => {
                this.startGame();
            }, 3000)
        }
    }

    getUser(userId) {
        return this.users.find((user) => user.id === userId);
    }

    removeUser(userId) {
        this.users = this.users.filter((user) => user.id !== userId);
        this.intervalManager.removePlayer(userId);
        if (this.users.length < MAX_PLAYERS) {
            this.state = 'waiting';
        }
    }

    removeUserBySocket(socket) {
        index = this.users.findIndex((user) => user.socket === socket);
        if (index != -1) return this.users.splice(index, 1)[0];
    }

    getMaxLatency() {
        let maxLatency = 0;
        this.users.forEach((user) => {
            maxLatency = Math.max(maxLatency, user.latency);
        });
        return maxLatency;
    }

    getAllLocation(userId) {
        const maxLatency = this.getMaxLatency();

        const locationData = this.users.filter((user) => user.id !== userId).map((user) => {
            const { x, y } = user.calculatePosition(maxLatency);
            return { id: user.id, playerId: user.playerId, x, y };
        });

        return createLocationPacket(locationData);
    }
}

export default Game;