const createDevice = require('./createDevice');
const createDeviceState = require('./createDeviceState');

module.exports = function windowDoorSensor(id, battery, status) {

    console.log(`Received event "Window Door Sensor" with id = ${id}, battery = ${battery}%, and status = ${status}`);

    var newDevice = {
        device: {
            name: 'Xiaomi Window Door Sensor',
            identifier: id,
            protocol: 'zigbee',
            service: 'xiaomi-home'
        },
        types: [
            {
                name: 'Window Door Sensor',
                identifier: 'magnet',
                type: 'binary',
                tag:'magnet',
                sensor: true,
                min: 0,
                max: 1
            },
            {
                name: 'Battery',
                type: 'battery',
                identifier: 'battery',
                tag: 'battery',
                unit: '%',
                sensor: true,
                min: 0,
                max: 100
            }
        ]
    };

    createDevice(newDevice)
        .then((result) => {
            return Promise.all([
                createDeviceState(result.types[0].id, status),
                createDeviceState(result.types[1].id, battery)
            ]);
        })
        .catch(console.log);
}