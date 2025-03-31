import DefaultTheme from "vitepress/theme";
import { type App } from "vue";
import EeUI, { zhCn } from "ee-ui";
import { ElementPlusContainer } from "@vitepress-demo-preview/component";

import "@vitepress-preview/component/style.css";
import "ee-ui/dist/index.css";

export default {
  ...DefaultTheme,
  enhanceApp({ app }: { app: App }) {
    app.component("demo-preview", ElementPlusContainer);
    app.use(EeUI, { locale: zhCn });
  },
};
