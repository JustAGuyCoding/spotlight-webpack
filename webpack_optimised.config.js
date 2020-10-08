/**
 * Webpack configuration - generates HTML with full optimisations (using bundling, cache-busting, minification) ready for
 * deployment. Call with --env.production to enable automatic minification using  HtmlWebpackPlugin
 **/

const path                      = require('path');
const HtmlWebpackPlugin         = require('html-webpack-plugin');
const { CleanWebpackPlugin }    = require('clean-webpack-plugin');
const MiniCssExtractPlugin      = require('mini-css-extract-plugin');
const StyleExtHtmlWebpackPlugin = require("style-ext-html-webpack-plugin");
const CopyPlugin                = require('copy-webpack-plugin');
const webpack                   = require('webpack');

module.exports = {

    entry: './src/spotlight.js',
    output: {
        path        : path.resolve(__dirname, 'dist'),
        filename    : 'spotlight.[contenthash].js',
    },


    plugins: [

        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery',
            dropdsown: "exports-loader?dropdown!bootstrap/js/dist/dropdown",
        }),

        new CleanWebpackPlugin({
            dry     : false,
            verbose : true,
        }),

        new HtmlWebpackPlugin({
            title           : 'Spotlight',
            filename        : 'index.html',
            template        : './src/spotlight.html',

            scriptLoading   : 'defer',
            inject          : false,
                /* Prevent automatic insertion of CSS link tag, as it will inlined, but specify postiion  of bundled.js in the lodash template. */

            /* _Lodash template params. */
            static: false
        }),

        new MiniCssExtractPlugin({
            filename        : 'spotlight.css',
            chunkFilename   : '[id].css',
        }),

        new StyleExtHtmlWebpackPlugin({
            position: 'head-bottom',
            minify: true /*clean-css*/
        }),

        new CopyPlugin({
            patterns: [
                { from: './license.txt', to: '../dist/license.txt' },
                { from: './notice.txt', to: '../dist/notice.txt' },
                { from: './readme_html.md', to: '../dist/readme.md' },
            ],
        }),
    ],
    module: {
        rules: [

            /* Images - uses require(lodash template), HtmlWebpackPlugin and file-loader to pickup and process(copy to dist).  */
            {
                test: /\.(png|svg|jpg|gif)$/,
                loader: 'file-loader',
                options: {
                    name: "images/[name].[ext]",
                    esModule: false
                    /* Fixes [object,object] appearing on spotlight.html template when require(file) processed by lodash in HtmlWebpackPlugin.*/
                }
            },

            /* SASS-CSS-Extract-Internalise\Inline - uses StyleExtHtmlWebpackPlugin*/
            {
                test: /\.s[ac]ss$/i,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                        },
                    },
                    'css-loader',
                    'sass-loader',
                ],
            },
        ],
    },
};
