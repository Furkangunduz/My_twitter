import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import appAxios from "./util";
import store from "./store";

import "./index.css";

const app = createApp(App);

app.use(router);
app.use(store);
app.config.globalProperties.$appAxios = appAxios;
app.config.globalProperties.$log = console.log;

app.mount("#app");
