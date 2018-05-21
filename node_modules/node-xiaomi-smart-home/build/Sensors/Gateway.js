"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const GenericSensor_1 = require("./GenericSensor");
class Gateway extends GenericSensor_1.default {
    constructor(sid, hub) {
        super(sid, hub);
        this.hub.sendMessage({ cmd: "get_id_list", sid: sid });
    }
    onMessage(message) {
        if (message.cmd == 'get_id_list_ack') {
            this.initSensors(message.data);
        }
    }
    initSensors(sids) {
        for (let sid of sids) {
            this.hub.sendMessage({ cmd: "read", sid: sid });
        }
    }
}
exports.default = Gateway;
//# sourceMappingURL=Gateway.js.map