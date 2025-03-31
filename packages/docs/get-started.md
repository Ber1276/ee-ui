---
search: false
next:
  link: /components/button
  text: Button 按钮
---

# 最新 Vue3 + TS 高仿 ElementPlus 打造自己的组件库

## 安装

```bash
npm i @ee-ui --save
```

## 开始使用

**全局使用**

```js
// 引入所有组件
import EeElement from "ee-ui";
// 引入样式
import "ee-ui/dist/style.css";

import App from "./App.vue";
// 全局使用
createApp(App).use(EeElement).mount("#app");
```

```vue
<template>
  <ee-button>我是 Button</ee-button>
</template>
```

**单个导入**

Ee-UI 提供了基于 ES Module 的开箱即用的 Tree Shaking 功能。

```vue
<template>
  <ee-button>我是 Button</ee-button>
</template>
<script>
import { EeButton } from "ee-element";
export default {
  components: { EeButton },
};
</script>
```
