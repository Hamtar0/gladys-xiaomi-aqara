"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class GenericSensor {
    constructor(sid, hub) {
        this.lastHeartBeat = null;
        this.data = {};
        this.type = null;
        this.sid = sid;
        this.hub = hub;
    }
    onMessage(message) {
    }
    heartBeat() {
        this.lastHeartBeat = (new Date()).getTime();
    }
}
exports.default = GenericSensor;
//# sourceMappingURL=GenericSensor.js.map