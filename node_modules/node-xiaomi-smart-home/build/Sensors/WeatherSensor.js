"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const GenericSensor_1 = require("./GenericSensor");
class WeatherSensor extends GenericSensor_1.default {
    constructor() {
        super(...arguments);
        this.temperature = null;
        this.humidity = null;
        this.pressure = null;
    }
    onMessage(message) {
        if (message.data.temperature) {
            this.temperature = parseInt(message.data.temperature) / 100;
        }
        if (message.data.humidity) {
            this.humidity = parseInt(message.data.humidity) / 100;
        }
        if (message.data.pressure) {
            this.pressure = parseInt(message.data.pressure);
        }
        if (message.cmd == 'report' || message.cmd == 'read_ack') {
            this.hub.emit('data.weather', this.sid, this.temperature, this.humidity, this.pressure);
        }
    }
}
exports.default = WeatherSensor;
//# sourceMappingURL=WeatherSensor.js.map