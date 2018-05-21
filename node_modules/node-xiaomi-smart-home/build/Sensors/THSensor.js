"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const GenericSensor_1 = require("./GenericSensor");
class THSensor extends GenericSensor_1.default {
    constructor() {
        super(...arguments);
        this.temperature = null;
        this.humidity = null;
    }
    onMessage(message) {
        if (message.data.temperature) {
            this.temperature = parseInt(message.data.temperature) / 100;
        }
        if (message.data.humidity) {
            this.humidity = parseInt(message.data.humidity) / 100;
        }
        if (message.cmd == 'report' || message.cmd == 'read_ack') {
            this.hub.emit('data.th', this.sid, this.temperature, this.humidity);
        }
    }
}
exports.default = THSensor;
//# sourceMappingURL=THSensor.js.map