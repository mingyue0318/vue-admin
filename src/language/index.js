import { createI18n } from "vue-i18n";
// const messages = {
//   en: {
//     message: {
//       hello: "hello world",
//     },
//   },
//   ja: {
//     message: {
//       hello: "こんにちは、世界",
//     },
//   },
// };
const i18n = createI18n({
  locale: "cn", // set locale
  fallbackLocale: "en", // set fallback locale
  //   messages: messages, // set locale messages
  messages: {
    en: require("@/language/en-US"),
    cn: require("@/language/zh-CN"),
    // {
    //   login: {
    //     hello: "hello world",
    //   },
    // },
    // ja: {
    //   login: {
    //     hello: "こんにちは、世界",
    //   },
    // },
  },
  // If you need to specify other options, you can set other options
  // ...
});

export default i18n;
