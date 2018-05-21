"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const GenericSensor_1 = require("./GenericSensor");
class Button extends GenericSensor_1.default {
    onMessage(message) {
        if (message.cmd == 'report') {
            this.hub.emit('data.button', this.sid, message.data.status);
        }
    }
}
exports.default = Button;
//# sourceMappingURL=Button.js.map