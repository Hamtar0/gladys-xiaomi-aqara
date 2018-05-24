const createDevice = require('./gladys/createDevice');
const createDeviceState = require('./gladys/createDeviceState');

module.exports = function humanMotionSensor(id, battery, light, inactivity, status) {

    console.log(`Received event "Motion Sensor" with id = ${id}, battery = ${battery}%, light = ${light} lux, inactivity since ${inactivity} sec and status = ${status}`);
    if (light == null) { light = 0 } ;
    var newDevice = {
        device: {
            name: 'Xiaomi Human Motion Sensor',
            identifier: id,
            protocol: 'zigbee',
            service: 'xiaomi-home'
        },
        types: [
            {
                name: 'Human Motion Sensor',
                identifier: 'motion',
                type: 'motion',
                tag:'motion',
                sensor: true,
                min: 0,
                max: 1
            },
            {
                name: 'Light',
                type: 'light',
                identifier: 'light',
                tag: 'light',
                unit: 'lux',
                sensor: true,
                min: 0,
                max: 120000
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
            },
            {
                name: 'Seconds inactivity',
                type: 'seconds',
                identifier: 'seconds',
                tag: 'seconds',
                unit: 'sec',
                sensor: true,
                min: 0,
                max: 1800
            }
        ]
    };

    createDevice(newDevice)
        .then((result) => {
            return Promise.all([
                createDeviceState(result.types[0].id, status),
                createDeviceState(result.types[1].id, light),
                createDeviceState(result.types[2].id, battery),
                createDeviceState(result.types[3].id, inactivity)
            ]);
        })
        .catch(console.log);
}