class User {
    constructor(id, socket) {
        this.id = id;
        this.socket = socket;
        // 유저 위치 초기화
        this.x = 0;
        this.y = 0;

        this.sequence = 0;
        this.lastUpdateTime = Date.now();
    }

    updatePosition(x, y) {
        // 위치 갱신
        this.x = x;
        this.y = y;
        this.lastUpdateTime = Date.now();
    }

    getNextSequence() {
        return ++this.sequence;
    }
}

export default User;