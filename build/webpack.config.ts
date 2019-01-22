import * as webpack from 'webpack';
import * as nodeExternals from 'webpack-node-externals';
import resolve from './resolve';
import { readdirSync } from 'fs';
const config: webpack.Configuration = {
  entry: ['webpack/hot/poll?1000', './src/main.hmr.ts'],
  watch: true,
  target: 'node',
  externals: [
    nodeExternals({
      whitelist: ['webpack/hot/poll?1000'],
    }),
  ],
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  mode: 'development',
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
    alias: {},
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
  ],
  output: {
    path: resolve('./dist'),
    filename: 'serve.js',
  },
};

const dirs = readdirSync(resolve('./src'));
const srcDir = resolve('./src');
dirs.forEach((dirName) => {
  config.resolve.alias[dirName] = `${srcDir}/${dirName}`;
});

export default config;
