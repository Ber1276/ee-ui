// build/vite.es.config.ts
import { defineConfig } from "file:///D:/CODE/Front-end/offer/vue/ee-ui/node_modules/.pnpm/vite@5.4.14_@types+node@20.17.24_sass@1.86.0_terser@5.39.0/node_modules/vite/dist/node/index.js";
import { readdirSync, readdir } from "fs";
import { resolve } from "path";
import { defer, delay, filter, map, includes } from "file:///D:/CODE/Front-end/offer/vue/ee-ui/node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/lodash.js";
import { visualizer } from "file:///D:/CODE/Front-end/offer/vue/ee-ui/node_modules/.pnpm/rollup-plugin-visualizer@5.14.0_rollup@4.36.0/node_modules/rollup-plugin-visualizer/dist/plugin/index.js";
import { hooksPlugin as hooks } from "file:///D:/CODE/Front-end/offer/vue/ee-ui/libs/vite-plugins/.dist/index.js";
import shell from "file:///D:/CODE/Front-end/offer/vue/ee-ui/node_modules/.pnpm/shelljs@0.8.5/node_modules/shelljs/shell.js";
import vue from "file:///D:/CODE/Front-end/offer/vue/ee-ui/node_modules/.pnpm/@vitejs+plugin-vue@5.2.3_vi_a4b39c20fd46d584518ca5b9dd3b9f0d/node_modules/@vitejs/plugin-vue/dist/index.mjs";
import dts from "file:///D:/CODE/Front-end/offer/vue/ee-ui/node_modules/.pnpm/vite-plugin-dts@3.9.1_@type_7d3a51eba81d90ab395a8e0004dd8a5c/node_modules/vite-plugin-dts/dist/index.mjs";
import terser from "file:///D:/CODE/Front-end/offer/vue/ee-ui/node_modules/.pnpm/@rollup+plugin-terser@0.4.4_rollup@4.36.0/node_modules/@rollup/plugin-terser/dist/es/index.js";
var __vite_injected_original_dirname = "D:\\CODE\\Front-end\\offer\\vue\\ee-ui\\packages\\core\\build";
var TRY_MOVE_STYLES_DELAY = 750;
var isProd = process.env.NODE_ENV === "production";
var isDev = process.env.NODE_ENV === "development";
var isTest = process.env.NODE_ENV === "test";
function getDirectoriesSync(basePath) {
  const entries = readdirSync(basePath, { withFileTypes: true });
  return map(
    filter(entries, (entry) => entry.isDirectory()),
    (entry) => entry.name
  );
}
function moveStyles() {
  readdir("./dist/es/theme", (err) => {
    if (err) return delay(moveStyles, TRY_MOVE_STYLES_DELAY);
    defer(() => shell.mv("./dist/es/theme", "./dist"));
  });
}
var vite_es_config_default = defineConfig({
  plugins: [
    vue(),
    visualizer({
      filename: "dist/stats.es.html"
    }),
    dts({
      tsconfigPath: "../../tsconfig.build.json",
      outDir: "dist/types"
    }),
    terser({
      compress: {
        sequences: isProd,
        arguments: isProd,
        drop_console: isProd && ["log"],
        drop_debugger: isProd,
        passes: isProd ? 4 : 1,
        global_defs: {
          "@DEV": JSON.stringify(isDev),
          "@PROD": JSON.stringify(isProd),
          "@TEST": JSON.stringify(isTest)
        }
      },
      format: {
        semicolons: false,
        shorthand: isProd,
        braces: !isProd,
        beautify: !isProd,
        comments: !isProd
      },
      mangle: {
        toplevel: isProd,
        eval: isProd,
        keep_classnames: isDev,
        keep_fnames: isDev
      }
    }),
    hooks({
      rmFiles: [
        "./dist/es",
        "./dist/theme",
        "./dist/types",
        "./dist/stats.es.html"
      ],
      afterBuild: moveStyles
    })
  ],
  build: {
    outDir: "dist/es",
    minify: false,
    cssCodeSplit: true,
    sourcemap: !isProd,
    lib: {
      entry: resolve(__vite_injected_original_dirname, "../index.ts"),
      name: "EricUI",
      fileName: "index",
      formats: ["es"]
    },
    rollupOptions: {
      external: [
        "vue",
        "@fortawesome/fontawesome-svg-core",
        "@fortawesome/free-solid-svg-icons",
        "@fortawesome/vue-fontawesome",
        "@popperjs/core",
        "async-validator"
      ],
      output: {
        assetFileNames: (chunkInfo) => {
          if (chunkInfo.name === "style.css") {
            return "index.css";
          }
          if (chunkInfo.type === "asset" && /\.(css)$/i.test(chunkInfo.name)) {
            return "theme/[name].[ext]";
          }
          return chunkInfo.name;
        },
        manualChunks(id) {
          if (includes(id, "node_modules")) return "vendor";
          if (includes(id, "/packages/hooks")) return "hooks";
          if (includes(id, "/packages/utils") || includes(id, "plugin-vue:export-helper"))
            return "utils";
          for (const item of getDirectoriesSync("../components")) {
            if (includes(id, `/packages/components/${item}`)) return item;
          }
        }
      }
    }
  }
});
export {
  vite_es_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiYnVpbGQvdml0ZS5lcy5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJEOlxcXFxDT0RFXFxcXEZyb250LWVuZFxcXFxvZmZlclxcXFx2dWVcXFxcZWUtdWlcXFxccGFja2FnZXNcXFxcY29yZVxcXFxidWlsZFwiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiRDpcXFxcQ09ERVxcXFxGcm9udC1lbmRcXFxcb2ZmZXJcXFxcdnVlXFxcXGVlLXVpXFxcXHBhY2thZ2VzXFxcXGNvcmVcXFxcYnVpbGRcXFxcdml0ZS5lcy5jb25maWcudHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL0Q6L0NPREUvRnJvbnQtZW5kL29mZmVyL3Z1ZS9lZS11aS9wYWNrYWdlcy9jb3JlL2J1aWxkL3ZpdGUuZXMuY29uZmlnLnRzXCI7aW1wb3J0IHsgZGVmaW5lQ29uZmlnIH0gZnJvbSBcInZpdGVcIjtcclxuaW1wb3J0IHsgcmVhZGRpclN5bmMsIHJlYWRkaXIgfSBmcm9tIFwiZnNcIjtcclxuaW1wb3J0IHsgcmVzb2x2ZSB9IGZyb20gXCJwYXRoXCI7XHJcbmltcG9ydCB7IGRlZmVyLCBkZWxheSwgZmlsdGVyLCBtYXAsIGluY2x1ZGVzIH0gZnJvbSBcImxvZGFzaC1lc1wiO1xyXG5pbXBvcnQgeyB2aXN1YWxpemVyIH0gZnJvbSBcInJvbGx1cC1wbHVnaW4tdmlzdWFsaXplclwiO1xyXG5pbXBvcnQgeyBob29rc1BsdWdpbiBhcyBob29rcyB9IGZyb20gXCJAZWUtdWkvdml0ZS1wbHVnaW5zXCI7XHJcbmltcG9ydCBzaGVsbCBmcm9tIFwic2hlbGxqc1wiO1xyXG5cclxuaW1wb3J0IHZ1ZSBmcm9tIFwiQHZpdGVqcy9wbHVnaW4tdnVlXCI7XHJcbmltcG9ydCBkdHMgZnJvbSBcInZpdGUtcGx1Z2luLWR0c1wiO1xyXG5pbXBvcnQgdGVyc2VyIGZyb20gXCJAcm9sbHVwL3BsdWdpbi10ZXJzZXJcIjtcclxuXHJcbmNvbnN0IFRSWV9NT1ZFX1NUWUxFU19ERUxBWSA9IDc1MCBhcyBjb25zdDtcclxuXHJcbmNvbnN0IGlzUHJvZCA9IHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSBcInByb2R1Y3Rpb25cIjtcclxuY29uc3QgaXNEZXYgPSBwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gXCJkZXZlbG9wbWVudFwiO1xyXG5jb25zdCBpc1Rlc3QgPSBwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gXCJ0ZXN0XCI7XHJcblxyXG5mdW5jdGlvbiBnZXREaXJlY3Rvcmllc1N5bmMoYmFzZVBhdGg6IHN0cmluZykge1xyXG4gIGNvbnN0IGVudHJpZXMgPSByZWFkZGlyU3luYyhiYXNlUGF0aCwgeyB3aXRoRmlsZVR5cGVzOiB0cnVlIH0pO1xyXG5cclxuICByZXR1cm4gbWFwKFxyXG4gICAgZmlsdGVyKGVudHJpZXMsIChlbnRyeSkgPT4gZW50cnkuaXNEaXJlY3RvcnkoKSksXHJcbiAgICAoZW50cnkpID0+IGVudHJ5Lm5hbWVcclxuICApO1xyXG59XHJcblxyXG5mdW5jdGlvbiBtb3ZlU3R5bGVzKCkge1xyXG4gIHJlYWRkaXIoXCIuL2Rpc3QvZXMvdGhlbWVcIiwgKGVycikgPT4ge1xyXG4gICAgaWYgKGVycikgcmV0dXJuIGRlbGF5KG1vdmVTdHlsZXMsIFRSWV9NT1ZFX1NUWUxFU19ERUxBWSk7XHJcbiAgICBkZWZlcigoKSA9PiBzaGVsbC5tdihcIi4vZGlzdC9lcy90aGVtZVwiLCBcIi4vZGlzdFwiKSk7XHJcbiAgfSk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbmZpZyh7XHJcbiAgcGx1Z2luczogW1xyXG4gICAgdnVlKCksXHJcbiAgICB2aXN1YWxpemVyKHtcclxuICAgICAgZmlsZW5hbWU6IFwiZGlzdC9zdGF0cy5lcy5odG1sXCIsXHJcbiAgICB9KSxcclxuICAgIGR0cyh7XHJcbiAgICAgIHRzY29uZmlnUGF0aDogXCIuLi8uLi90c2NvbmZpZy5idWlsZC5qc29uXCIsXHJcbiAgICAgIG91dERpcjogXCJkaXN0L3R5cGVzXCIsXHJcbiAgICB9KSxcclxuICAgIHRlcnNlcih7XHJcbiAgICAgIGNvbXByZXNzOiB7XHJcbiAgICAgICAgc2VxdWVuY2VzOiBpc1Byb2QsXHJcbiAgICAgICAgYXJndW1lbnRzOiBpc1Byb2QsXHJcbiAgICAgICAgZHJvcF9jb25zb2xlOiBpc1Byb2QgJiYgW1wibG9nXCJdLFxyXG4gICAgICAgIGRyb3BfZGVidWdnZXI6IGlzUHJvZCxcclxuICAgICAgICBwYXNzZXM6IGlzUHJvZCA/IDQgOiAxLFxyXG4gICAgICAgIGdsb2JhbF9kZWZzOiB7XHJcbiAgICAgICAgICBcIkBERVZcIjogSlNPTi5zdHJpbmdpZnkoaXNEZXYpLFxyXG4gICAgICAgICAgXCJAUFJPRFwiOiBKU09OLnN0cmluZ2lmeShpc1Byb2QpLFxyXG4gICAgICAgICAgXCJAVEVTVFwiOiBKU09OLnN0cmluZ2lmeShpc1Rlc3QpLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH0sXHJcbiAgICAgIGZvcm1hdDoge1xyXG4gICAgICAgIHNlbWljb2xvbnM6IGZhbHNlLFxyXG4gICAgICAgIHNob3J0aGFuZDogaXNQcm9kLFxyXG4gICAgICAgIGJyYWNlczogIWlzUHJvZCxcclxuICAgICAgICBiZWF1dGlmeTogIWlzUHJvZCxcclxuICAgICAgICBjb21tZW50czogIWlzUHJvZCxcclxuICAgICAgfSxcclxuICAgICAgbWFuZ2xlOiB7XHJcbiAgICAgICAgdG9wbGV2ZWw6IGlzUHJvZCxcclxuICAgICAgICBldmFsOiBpc1Byb2QsXHJcbiAgICAgICAga2VlcF9jbGFzc25hbWVzOiBpc0RldixcclxuICAgICAgICBrZWVwX2ZuYW1lczogaXNEZXYsXHJcbiAgICAgIH0sXHJcbiAgICB9KSxcclxuICAgIGhvb2tzKHtcclxuICAgICAgcm1GaWxlczogW1xyXG4gICAgICAgIFwiLi9kaXN0L2VzXCIsXHJcbiAgICAgICAgXCIuL2Rpc3QvdGhlbWVcIixcclxuICAgICAgICBcIi4vZGlzdC90eXBlc1wiLFxyXG4gICAgICAgIFwiLi9kaXN0L3N0YXRzLmVzLmh0bWxcIixcclxuICAgICAgXSxcclxuICAgICAgYWZ0ZXJCdWlsZDogbW92ZVN0eWxlcyxcclxuICAgIH0pLFxyXG4gIF0sXHJcbiAgYnVpbGQ6IHtcclxuICAgIG91dERpcjogXCJkaXN0L2VzXCIsXHJcbiAgICBtaW5pZnk6IGZhbHNlLFxyXG4gICAgY3NzQ29kZVNwbGl0OiB0cnVlLFxyXG4gICAgc291cmNlbWFwOiAhaXNQcm9kLFxyXG4gICAgbGliOiB7XHJcbiAgICAgIGVudHJ5OiByZXNvbHZlKF9fZGlybmFtZSwgXCIuLi9pbmRleC50c1wiKSxcclxuICAgICAgbmFtZTogXCJFcmljVUlcIixcclxuICAgICAgZmlsZU5hbWU6IFwiaW5kZXhcIixcclxuICAgICAgZm9ybWF0czogW1wiZXNcIl0sXHJcbiAgICB9LFxyXG4gICAgcm9sbHVwT3B0aW9uczoge1xyXG4gICAgICBleHRlcm5hbDogW1xyXG4gICAgICAgIFwidnVlXCIsXHJcbiAgICAgICAgXCJAZm9ydGF3ZXNvbWUvZm9udGF3ZXNvbWUtc3ZnLWNvcmVcIixcclxuICAgICAgICBcIkBmb3J0YXdlc29tZS9mcmVlLXNvbGlkLXN2Zy1pY29uc1wiLFxyXG4gICAgICAgIFwiQGZvcnRhd2Vzb21lL3Z1ZS1mb250YXdlc29tZVwiLFxyXG4gICAgICAgIFwiQHBvcHBlcmpzL2NvcmVcIixcclxuICAgICAgICBcImFzeW5jLXZhbGlkYXRvclwiLFxyXG4gICAgICBdLFxyXG4gICAgICBvdXRwdXQ6IHtcclxuICAgICAgICBhc3NldEZpbGVOYW1lczogKGNodW5rSW5mbykgPT4ge1xyXG4gICAgICAgICAgaWYgKGNodW5rSW5mby5uYW1lID09PSBcInN0eWxlLmNzc1wiKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBcImluZGV4LmNzc1wiO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgaWYgKFxyXG4gICAgICAgICAgICBjaHVua0luZm8udHlwZSA9PT0gXCJhc3NldFwiICYmXHJcbiAgICAgICAgICAgIC9cXC4oY3NzKSQvaS50ZXN0KGNodW5rSW5mby5uYW1lIGFzIHN0cmluZylcclxuICAgICAgICAgICkge1xyXG4gICAgICAgICAgICByZXR1cm4gXCJ0aGVtZS9bbmFtZV0uW2V4dF1cIjtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIHJldHVybiBjaHVua0luZm8ubmFtZSBhcyBzdHJpbmc7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBtYW51YWxDaHVua3MoaWQpIHtcclxuICAgICAgICAgIGlmIChpbmNsdWRlcyhpZCwgXCJub2RlX21vZHVsZXNcIikpIHJldHVybiBcInZlbmRvclwiO1xyXG5cclxuICAgICAgICAgIGlmIChpbmNsdWRlcyhpZCwgXCIvcGFja2FnZXMvaG9va3NcIikpIHJldHVybiBcImhvb2tzXCI7XHJcblxyXG4gICAgICAgICAgaWYgKFxyXG4gICAgICAgICAgICBpbmNsdWRlcyhpZCwgXCIvcGFja2FnZXMvdXRpbHNcIikgfHxcclxuICAgICAgICAgICAgaW5jbHVkZXMoaWQsIFwicGx1Z2luLXZ1ZTpleHBvcnQtaGVscGVyXCIpXHJcbiAgICAgICAgICApXHJcbiAgICAgICAgICAgIHJldHVybiBcInV0aWxzXCI7XHJcblxyXG4gICAgICAgICAgZm9yIChjb25zdCBpdGVtIG9mIGdldERpcmVjdG9yaWVzU3luYyhcIi4uL2NvbXBvbmVudHNcIikpIHtcclxuICAgICAgICAgICAgaWYgKGluY2x1ZGVzKGlkLCBgL3BhY2thZ2VzL2NvbXBvbmVudHMvJHtpdGVtfWApKSByZXR1cm4gaXRlbTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICB9LFxyXG4gICAgfSxcclxuICB9LFxyXG59KTtcclxuIl0sCiAgIm1hcHBpbmdzIjogIjtBQUF5VyxTQUFTLG9CQUFvQjtBQUN0WSxTQUFTLGFB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
