import { IConfig } from 'umi-types';
import pxToViewPort from 'postcss-px-to-viewport';

const BundleAnalyzerPlugin = require('umi-webpack-bundle-analyzer').BundleAnalyzerPlugin;
new BundleAnalyzerPlugin()
// ref: https://umijs.org/config/
const config: IConfig =  {
  chainWebpack(config, { webpack }) {
    config
      .plugin("umi-webpack-bundle-analyzer")
      .use(new BundleAnalyzerPlugin());
  },
  disableCSSModules: true,
  extraPostCSSPlugins: [
    pxToViewPort({
      viewportWidth: 750, // 设计图宽度
      viewportHeight: 1334, // 设计图高度
      exclude: /(\/|\\)(node_modules)(\/|\\)/,
    }),
  ],
  base: 'myapp',
  treeShaking: true,
  plugins: [
    // ref: https://umijs.org/plugin/umi-plugin-react.html
    ['umi-plugin-react', {
      antd: false,
      dva: false,
      dynamicImport: false,
      title: 'myapp',
      dll: false,
      locale: {
        enable: true,
        default: 'zh-CN',
      },
      routes: {
        exclude: [
          /components\//,
        ],
      },
    }],
  ],
}

export default config;
