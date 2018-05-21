"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const GenericSensor_1 = require("./GenericSensor");
class WaterLeakSensor extends GenericSensor_1.default {
    onMessage(message) {
        if (message.cmd == 'report') {
            this.hub.emit('data.waterleak', this.sid, message.data.status);
        }
    }
}
exports.default = WaterLeakSensor;
//# sourceMappingURL=WaterLeakSensor.js.map