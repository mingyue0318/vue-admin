import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import ElementPlus from "element-plus";
import Antd from "ant-design-vue";
import "element-plus/lib/theme-chalk/index.css";
import "ant-design-vue/dist/antd.css";
// 国际化
import i18n from "@/language/index";
// svg全局组件
import SvgIcon from "@/components/Svgicon";
// svg文件解析
import "@/js/svg.js";
// axsio
import axios from "axios";

const app = createApp(App);

app.config.globalProperties.$axios = axios;
app.use(ElementPlus).use(Antd).use(i18n).component("svg-icon", SvgIcon);

app.use(store).use(router).mount("#app");
