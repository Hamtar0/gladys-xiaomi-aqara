module.exports = {
    gladysUrl: process.env.GLADYS_URL || 'http://localhost:1337', // the URL of your main Gladys Instance
    token: process.env.GLADYS_TOKEN || 'GLADYS_TOKEN', // your gladys security token. You can find it in Gladys Dashboard "Parameters" => "Security".
    gatewayDevPass: process.env.XIAOMI_PASS_DEV || 'XIAOMI_PASS_DEV', // the dev password present in the official app Mi Home when you activate dev mode
};
