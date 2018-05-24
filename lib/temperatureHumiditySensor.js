const createDevice = require('./gladys/createDevice');
const createDeviceState = require('./gladys/createDeviceState');

module.exports = function temperatureHumiditySensor(id, battery, temp, humid, pressure) {

    var pressure = pressure * 10;
    console.log(`Received event "Temperature Humidity Sensor" with id = ${id}, battery = ${battery}%, temperature = ${temp}°C, humidity = ${humid}% and pressure = ${pressure} hPa`);
    var newDevice = {
        device: {
            name: 'Xiaomi Temperature Humidity Sensor',
            identifier: id,
            protocol: 'zigbee',
            service: 'xiaomi-home'
        },
        types: [
            {
                name: 'Temperature Sensor',
                identifier: 'temperature',
                type: 'temperature',
                tag:'temperature',
                unit: '°C',
                sensor: true,
                min: -20,
                max: 60
            },
            {
                name: 'Humidity Sensor',
                type: 'humidity',
                identifier: 'humidity',
                tag: 'humidity',
                unit: '%',
                sensor: true,
                min: 0,
                max: 100
            },
            {
                name: 'Pressure Sensor',
                type: 'pressure',
                identifier: 'pressure',
                tag: 'pressure',
                unit: 'hPa',
                sensor: true,
                min: 300,
                max: 1100
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
                createDeviceState(result.types[0].id, temp),
                createDeviceState(result.types[1].id, humid),
                createDeviceState(result.types[2].id, pressure),
                createDeviceState(result.types[3].id, battery)
            ]);
        })
        .catch(console.log);
}