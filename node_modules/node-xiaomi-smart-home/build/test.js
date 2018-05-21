"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Hub_1 = require("./Hub");
let hub = new Hub_1.Hub();
hub.listen();
hub.on('message', function (message) {
});
hub.on('error', function (e) {
});
hub.on('data.button', function (sid, type) {
    if (type == hub.clickTypes.double_click) {
    }
    console.info('BUTTON', sid, type);
});
hub.on('data.magnet', function (sid, closed) {
    console.info('MAGNET', sid, closed);
});
hub.on('data.motion', function (sid, motion) {
    console.info('motion', sid, motion);
});
hub.on('data.th', function (sid, temperature, humidity) {
    console.info('th', sid, temperature, humidity);
});
hub.on('data.plug', function (sid, on) {
    console.info('plug', sid, on);
});
hub.on('data.weather', function (sid, temperature, humidity, pressure) {
    console.info('weather', sid, temperature, humidity, pressure);
});
hub.on('data.waterleak', function (sid, leak) {
    console.info('leak', sid, leak);
});
//# sourceMappingURL=test.js.map