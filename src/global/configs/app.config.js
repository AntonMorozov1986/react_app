const APP_CONFIG = {
    name: {
        default: 'ChatiX',
        value: process.env.REACT_APP_NAME,
        type: String,
    },
    environment: {
        default: 'development',
        value: process.env.REACT_ENVIRONMENT_MODE,
        type: String,
    },
    local_domain: {
        default: 'chatix.local',
        value: process.env.LOCAL_DEV_DOMAIN,
        type: String,
    },
    api_url: {
        default: 'https://api.github.com',
        value: process.env.API_BASE_URL,
        type: String,
    },
};

module.exports = key => {
    let value = null;

    if (Object.keys(APP_CONFIG).includes(key)) {
        const configItem = APP_CONFIG[key];
        value = configItem.value !== undefined ? configItem.value : configItem.default;

        switch (configItem.type) {
            case String:
                value = String(value);
                break;

            case Number:
                value = Number(value);
                break;

            case Boolean:
                value = Boolean(JSON.parse(value));
                break;

            case Object:
                value = JSON.parse(value);
                break;

            case Array:
                value = JSON.parse(value).split(',');
                break;
        }
    }

    return value;
};
