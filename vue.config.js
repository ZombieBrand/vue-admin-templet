// eslint-disable-next-line camelcase
const BASE_URl = process.env.NODE_ENV === "procution" ? "/admin" : "/";
const path = require("path");
const resolve = dir => path.join(__dirname, dir);
module.exports = {
  lintOnSave: false,
  publicPath: BASE_URl,
  chainWebpack: config => {
    config.resolve.alias.set("@", resolve("src"));
  },

  // 打包不生成.map文件
  productionSourceMap: true

  // devServer: {
  //   proxy: 'http://localhost:4000'
  // }
};
