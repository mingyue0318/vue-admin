module.exports = {
  css: {
    // 不用在每一个页面都进行引入样式，就能直接引用。
    loaderOptions: {
      sass: {
        prependData: `@import '@/style/main.scss';`,
      },
    },
  },
};
