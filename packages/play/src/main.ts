import { createApp } from "vue";
import App from "./App.vue";
import EeUI from "ee-ui";

import "ee-ui/dist/index.css";

const app = createApp(App);
app.use(EeUI);
app.mount("#app");
