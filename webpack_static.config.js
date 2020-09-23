/**
 * Webpack configuration - generates a static HTML template bundling files but not providing other enhancements, such
 * as cache-busting (hashing) or minification, which do not make sense for a static HTML template (for using as a
 * starting point in projects).
 **/

/**
 * Copyright 2020 Anthony Vick trading as Just A Guy Coding.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
**/

const path                   = require('path');
const HtmlWebpackPlugin      = require('html-webpack-plugin');
const CopyPlugin             = require('copy-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin   = require('mini-css-extract-plugin');

module.exports = {
    mode: 'production',
    entry   : './src/spotlight.js',
    output  : {
        path        : path.resolve(__dirname, 'dist'),
        filename    : 'spotlight.js',
    },

     plugins: [
        new HtmlWebpackPlugin({
            title   : 'Spotlight',
            filename: 'index.html',
            template: './src/spotlight.html',
            minify: {
                collapseWhitespace: false,
                removeComments:     true,
                ignoreCustomComments: [
                    /^\s+Copyright/,
                    /\/Copyright\s+$/
                  ]
            },
            inject  : false,
            static  : true
        }),

        new CleanWebpackPlugin({
            dry: false,
            verbose: true,
        }),

         new CopyPlugin({
             patterns: [
                 { from: './src/images', to: '../dist/images' },
                 { from: './license.txt', to: '../dist/license.txt' },
                 { from: './notice.txt', to: '../dist/notice.txt' },
                 { from: './readme_html.md', to: '../dist/readme.md' },
             ],
         }),

         new MiniCssExtractPlugin({
            filename: 'spotlight.css',
            chunkFilename: '[id].css',

        }),
    ],
    module: {
        rules: [
            {
                test: /\.(png|svg|jpg|gif)$/,
                loader: 'file-loader',
                options: {
                    name: 'images/[name].[ext]',
                    esModule: false
                },
            },
            {
                test: /\.s[ac]ss$/i,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                            publicPath: '.',
                        },
                    },
                    'css-loader',
                    'sass-loader',
                ],
            },
        ],
    },
};