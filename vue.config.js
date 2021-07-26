module.exports = {
  publicPath: process.env.NODE_ENV === "production" ? "" : "/",
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
};
