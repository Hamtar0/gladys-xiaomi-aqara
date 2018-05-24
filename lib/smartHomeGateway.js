const createDevice = require('./gladys/createDevice');
const createDeviceState = require('./gladys/createDeviceState');

module.exports = function smartHomeGateway(id, intensity, color) {

    if (intensity == 0) {
        var light = 0;
    }
    else {
        var light = 1;
    }

    console.log(`Received event "Smart Home Gateway" with id = ${id}, light = ${light}, intensity = ${intensity}% and color = ${color}`);

    var newDevice = {
        device: {
            name: 'Xiaomi Smart Home Gateway',
            identifier: id,
            protocol: 'zigbee',
            service: 'xiaomi-home'
        },
        types: [
            {
                name: 'Light',
                identifier: 'light',
                type: 'light',
                tag:'light',
                sensor: false,
                min: 0,
                max: 1
            },
            {
                name: 'Intensity',
                type: 'intensity',
                identifier: 'intensity',
                tag: 'intensity',
                unit: '%',
                sensor: false,
                min: 0,
                max: 100
            },
            {
                name: 'Color',
                type: 'color',
                identifier: 'color',
                tag: 'color',
                unit: 'rgb',
                sensor: false,
                min: 0,
                max: 255255255
            }
        ]
    };

    createDevice(newDevice)
        .then((result) => {
            return Promise.all([
                createDeviceState(result.types[0].id, light),
                createDeviceState(result.types[1].id, intensity),
                createDeviceState(result.types[2].id, color)
            ]);
        })
        .catch(console.log);
}