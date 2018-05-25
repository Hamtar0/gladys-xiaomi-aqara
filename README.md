# gladys-xiaomi-aqara 

The goal of this module is to receive events from Xiaomi Home Devices

## Hardware

- [Xiaomi GateWay](https://fr.gearbest.com/living-appliances/pp_344667.html?wid=55)
- [Xiaomi Switch Button](https://fr.gearbest.com/smart-light-bulb/pp_257679.html?wid=55)
- [Xiaomi Door & Sensor](https://fr.gearbest.com/access-control/pp_626703.html?wid=55)
- [Xiaomi Aqara Humidity & Temperature](https://fr.gearbest.com/access-control/pp_626702.html?wid=55)
- [Xiaomi Aqara Motion Sensor](https://fr.gearbest.com/alarm-systems/pp_659226.html?wid=1433363)

## Prerequisite

- Install the MiHome app from Google Play or AppStore
- Set your region to Mainland China when app init or under Settings -> Locale
- Setup, connect your Gateway & all your Xiaomi devices 
- Update gateway to the latest firmware
- Enable developer mode by following this tutoriel => https://github.com/fooxy/homeassistant-aqara/wiki/Enable-dev-mode

## Installation

Connect to your Raspberry Pi. 

Clone this repository : 

```
git clone https://github.com/Hamtar0/gladys-xiaomi-aqara
```

Go the directory :

```
cd gladys-xiaomi-aqara
```

Install the dependencies : 

If you have yarn (pre-installed on Gladys Raspbian image), just do :

```
yarn install
```

If not, you can do :

```
npm install
```

You now need to modify the `config.js` file :

```
nano config.js
```

Edit each line with your configuration.

Then, execute :

```
pm2 start /home/pi/gladys-xiaomi-aqara/app.js --name gladys-xiaomi-aqara
```

So that gladys-xiaomi-aqara run in background :)

## Debug

To debug, you can see logs by calling : 

```
pm2 logs gladys-xiaomi-aqara
```

## To do

Add support for :
- cube
- plug
- original sensor temperature
- leak sensor
- smoke sensor

Add interactions with gateway (light, color, sound)