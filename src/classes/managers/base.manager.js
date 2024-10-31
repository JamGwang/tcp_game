class BaseManager {
    constructor() {
        if (new.target === BaseManager) {
            // 부모 매니저 자체로 인스턴스 생성 불가
            throw new TypeError("Cannot construct BaseManager instances");
        }
    }

    addPlayer(playerId, ...args) {
        // 원본메소드를 사용할 수 없다.
        throw new Error("Method not implemented");
    }

    removePlaeyr(playerId) {
        throw new Error("Method not implemented");
    }

    clearAll() {
        throw new Error("Method not implemented");
    }
}

export default BaseManager;