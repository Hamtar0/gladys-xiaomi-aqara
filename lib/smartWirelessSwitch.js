const createDevice = require('./gladys/createDevice');
const createDeviceState = require('./gladys/createDeviceState');
const CLICK_TYPE_MAPPING = {
    click: 1,
    double_click: 2,
    long_click_press: 3,
    long_click_release: 4
};

module.exports = function smartWirelessSwitch(id, battery, status) {

    console.log(`Received event "Button" with id = ${id}, battery = ${battery}% and status = ${status}`);

    var newDevice = {
        device: {
            name: 'Xiaomi Button',
            identifier: id,
            protocol: 'zigbee',
            service: 'xiaomi-home'
        },
        types: [
            {
                name: 'Smart Wireless Switch',
                identifier: 'button',
                type: 'button',
                tag:'button',
                sensor: true,
                min: 0,
                max: 4
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