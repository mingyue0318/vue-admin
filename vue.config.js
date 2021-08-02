const path = require("path");

module.exports = {
  publicPath: process.env.NODE_ENV === "production" ? "" : "./",
  outputDir: process.env.NODE_ENV === "production" ? "dist" : "devDist",
  // 关闭自动检测
  lintOnSave: false,
  css: {
    // 不用在每一个页面都进行引入样式，就能直接引用。
    loaderOptions: {
      sass: {
        prependData: `@import '@/styles/main.scss';`,
      },
    },
  },
  chainWebpack: (config) => {
    config.resolve.alias.set("vue-i18n", "vue-i18n/dist/vue-i18n.cjs.js");
    config.module.rules.delete("svg");
    config.module
      .rule("svg-sprite-loader")
      .test(/\.svg$/)
      .include.add(path.resolve("./src/assets/svg"))
      .end()
      .use("svg-sprite-loader")
      .loader("svg-sprite-loader")
      .options({
        symbolId: "icon-[name]",
      });
  },
  devServer: {
    // open: false, //运行后是否自动打开项目
    // host: "0.0.0.0", // 别人可以外部访问
    proxy: {
      [process.env.VUE_APP_FLAG]: {
        //这里最好有一个 /
        target: process.env.VUE_APP_API, // 后台接口域名
        // ws: true, //如果要代理 websockets，配置这个参数
        secure: false, // 如果是https接口，需要配置这个参数
        changeOrigin: true, //是否跨域
        pathRewrite: {
          [`^${process.env.VUE_APP_FLAG}`]: "", // 将/api 替换成 ''
        },
      },
    },
  },
};
