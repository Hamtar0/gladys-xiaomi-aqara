const Aqara = require('lumi-aqara');
const config = require('./config.js');
const smartWirelessSwitch = require('./lib/smartWirelessSwitch.js');
const humanMotionSensor = require('./lib/humanMotionSensor.js');
const windowDoorSensor = require('./lib/windowDoorSensor.js');
const temperatureHumiditySensor = require('./lib/temperatureHumiditySensor.js');
const smartHomeGateway = require('./lib/smartHomeGateway.js');

const aqara = new Aqara()
aqara.on('gateway', (gateway) => {
    console.log('Gateway discovered')
    // console.log(gateway);
    gateway.on('ready', () => {
        console.log('Gateway is ready');
        gateway.setPassword(config.gatewayDevPass)
    })

    gateway.on('offline', () => {
        gateway = null
        console.log('Gateway is offline')
    })

    gateway.on('subdevice', (device) => {
        // console.log(device);
        switch (device.getType()) {
            case 'magnet':
                device.on('open', () => {
                    windowDoorSensor(device.getSid(), device.getBatteryPercentage(), '0');
                })
                device.on('close', () => {
                    windowDoorSensor(device.getSid(), device.getBatteryPercentage(), '1');
                })
                break
            case 'switch':
                device.on('click', () => {
                    smartWirelessSwitch(device.getSid(), device.getBatteryPercentage(), '1');
                })
                device.on('doubleClick', () => {
                    smartWirelessSwitch(device.getSid(), device.getBatteryPercentage(), '2');
                })
                device.on('longClickPress', () => {
                    smartWirelessSwitch(device.getSid(), device.getBatteryPercentage(), '3');
                })
                device.on('longClickRelease', () => {
                    smartWirelessSwitch(device.getSid(), device.getBatteryPercentage(), '4');
                })
                break
            case 'motion':
                device.on('motion', () => {
                    humanMotionSensor(device.getSid(), device.getBatteryPercentage(), device.getLux(), '0', '1');
                })
                device.on('noMotion', () => {
                    humanMotionSensor(device.getSid(), device.getBatteryPercentage(), device.getLux(), device.getSecondsSinceMotion(), '0');
                })
                break
            case 'sensor':
                device.on('update', () => {
                    temperatureHumiditySensor(device.getSid(), device.getBatteryPercentage(), device.getTemperature(), device.getHumidity(), device.getPressure());
                })
                break
            case 'leak':
                console.log(`  Leak sensor`)
                device.on('update', () => {
                    console.log(`${device.getSid()}${device.isLeaking() ? '' : ' not'} leaking`)
                })
                break
            case 'cube':
                console.log(`  Cube`)
                device.on('update', () => {
                    console.log(`${device.getSid()} ${device.getStatus()}${device.getRotateDegrees() !== null ? ' ' + device.getRotateDegrees() : ''}`)
                })
                break
            case 'smoke':
                console.log(`  Smoke`)
                device.on('update', () => {
                    console.log(`${device.getSid()} (${device.hasAlarm() ? 'SMOKE DETECTED' : 'no smoke detected'} density: ${device.getDensity()})`)
                })
                break
        }
    })

    gateway.on('lightState', (state) => {
        console.log(state);
        smartHomeGateway(gateway.sid, state.intensity, '000');
    })
})