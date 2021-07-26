import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import ElementPlus from "element-plus";
import Antd from "ant-design-vue";
import "element-plus/lib/theme-chalk/index.css";
import "ant-design-vue/dist/antd.css";

const app = createApp(App);
app.use(ElementPlus);
app.use(Antd);

app.use(store).use(router).mount("#app");
