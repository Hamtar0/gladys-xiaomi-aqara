"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const GenericSensor_1 = require("./GenericSensor");
class MotionSensor extends GenericSensor_1.default {
    constructor() {
        super(...arguments);
        this.motion = null;
    }
    onMessage(message) {
        this.motion = message.data.status == 'motion';
        if (message.cmd == 'report' || message.cmd == 'read_ack') {
            this.hub.emit('data.motion', this.sid, this.motion);
        }
    }
}
exports.default = MotionSensor;
//# sourceMappingURL=MotionSensor.js.map