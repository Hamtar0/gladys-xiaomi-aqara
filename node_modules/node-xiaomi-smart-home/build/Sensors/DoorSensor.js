"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const GenericSensor_1 = require("./GenericSensor");
class DoorSensor extends GenericSensor_1.default {
    constructor() {
        super(...arguments);
        this.closed = null;
    }
    onMessage(message) {
        this.closed = message.data.status == 'close';
        if (message.cmd == 'report' || message.cmd == 'read_ack') {
            this.hub.emit('data.magnet', this.sid, this.closed);
        }
    }
}
exports.default = DoorSensor;
//# sourceMappingURL=DoorSensor.js.map