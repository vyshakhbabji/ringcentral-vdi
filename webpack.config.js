const path = require('path');

module.exports = {
    entry: [
        './src/index.ts'
    ],
    output: {
        filename: 'VDIWebRTC.js',
        path: path.resolve(__dirname, 'dist'),
        library: 'VDIWebrtc',
        libraryTarget: 'umd'
    },
    resolve: {
        extensions: [ '.tsx', '.ts', '.js' ]
    },
    optimization: {
        minimize: false
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: [
                    'cache-loader',
                    {
                        loader: 'ts-loader',
                        options: {
                            onlyCompileBundledFiles: true
                        }
                    }
                ],
                include: path.resolve('src')
            }
        ]
    },
    externals: {
        'sip.js': {
            commonjs: 'sip.js',
            commonjs2: 'sip.js',
            amd: 'sip.js',
            root: 'SIP'
        }
    },
    mode: 'production'
};
