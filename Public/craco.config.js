const CracoLessPlugin     = require('craco-less');
const {getThemeVariables} = require('antd/dist/theme');

module.exports = {
    plugins: [
        {
            plugin: CracoLessPlugin,
            options: {
                lessLoaderOptions: {
                    lessOptions: {
                        modifyVars: {
                            ...getThemeVariables({ dark  : false, compact : false}),
                            'border-radius-base': '10px',
                            'drawer-body-padding' : 0,
                            'layout-header-background' : "#ffffff",
                            'primary-color' : "#cd9933"
                        },
                        javascriptEnabled: true,
                    },
                },
            },
        },
    ],
};