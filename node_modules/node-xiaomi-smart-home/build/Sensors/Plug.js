"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const GenericSensor_1 = require("./GenericSensor");
class Plug extends GenericSensor_1.default {
    onMessage(message) {
        this.on = message.data.status == 'on';
        if (message.cmd == 'report' || message.cmd == 'read_ack') {
            this.hub.emit('data.plug', this.sid, this.on);
        }
    }
}
exports.default = Plug;
//# sourceMappingURL=Plug.js.map