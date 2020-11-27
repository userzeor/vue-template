const CompressionPlugin = require("compression-webpack-plugin"); //压缩
// const PrerenderSPAPlugin = require('prerender-spa-plugin')    //预渲染
const path = require("path");

module.exports = {
  devServer: {
    open: true,
    port: 80,
    // proxy: {
    //   "/devapi": {
    //     target: ``,
    //     changeOrigin: true,
    //     pathRewrite: {
    //       ["^/devapi"]: "",
    //     },
    //   },
    // },
    // before: require("./src/mock/mock-server"),
  },
  css: { extract: false, sourceMap: false },
  publicPath: "/",
  productionSourceMap: false, //生产环境禁止生产map文件
  configureWebpack: {
    devtool: "source-map",
    resolve: {
      alias: {
        "@": path.join(__dirname, "src"),
      },
    },
    plugins: [
      //压缩
      new CompressionPlugin({
        test: /\.js$|\.html$|\.css/, //匹配文件名
        threshold: 10240, //对超过10K的数据压缩
        deleteOriginalAssets: false, //是否删除源文件
      }),
      // //预渲染
      // new PrerenderSPAPlugin({
      //     staticDir: path.join(__dirname, 'dist'),
      //     routes: [ '/','/gethelp',"/test",'/share','/useragreement','/agreement_privacy','/mymsg','/mymsg/detail','/bonus','/profitdesc'],
      // })
    ],
  },
};
