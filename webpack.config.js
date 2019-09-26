/**
 * This Webpack config is used for bundling files for the demo.
 */

const webpack = require('webpack');
const path = require('path');
const NODE_ENV = JSON.stringify(
    process.env.NODE_ENV ? process.env.NODE_ENV : 'development'
);
const devtool = NODE_ENV == '"development"' ? 'source-map' : undefined;

console.info('process.env.NODE_ENV', JSON.stringify(process.env.NODE_ENV));

module.exports = {
    devtool,
    entry: {
        ab: ['./components/AB.tsx'],
    },
    optimization: {
        minimize: true,
        usedExports: true,
    },
    output: {
        path: path.join(__dirname, '/dist'),
        filename: '[name].js',
        chunkFilename: '[name].chunk.js',
        libraryTarget: 'commonjs2',
        publicPath: '',
    },
    resolve: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
    },
    externals: {
        'js-cookie': 'js-cookie',
        react: 'react',
        'react-dom': 'react-dom',
        'react-modal': 'react-modal',
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: JSON.stringify(process.env.NODE_ENV),
            },
        }),
        new webpack.optimize.ModuleConcatenationPlugin(),
    ],
    module: {
        rules: [
            // all files with a `.ts` or `.tsx` extension will be handled by a TypeScript loader
            {
                test: /\.tsx?$/,
                use: ['awesome-typescript-loader'],
            },
        ],
    },
};
