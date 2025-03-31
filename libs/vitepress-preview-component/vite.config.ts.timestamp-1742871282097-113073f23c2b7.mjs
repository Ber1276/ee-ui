// vite.config.ts
import { defineConfig } from "file:///D:/CODE/Front-end/offer/vue/ee-ui/node_modules/.pnpm/vite@5.4.14_@types+node@20.17.24_sass@1.86.0_terser@5.39.0/node_modules/vite/dist/node/index.js";
import { resolve } from "path";
import vue from "file:///D:/CODE/Front-end/offer/vue/ee-ui/node_modules/.pnpm/@vitejs+plugin-vue@5.2.3_vi_a4b39c20fd46d584518ca5b9dd3b9f0d/node_modules/@vitejs/plugin-vue/dist/index.mjs";
import dts from "file:///D:/CODE/Front-end/offer/vue/ee-ui/node_modules/.pnpm/vite-plugin-dts@3.9.1_@type_7d3a51eba81d90ab395a8e0004dd8a5c/node_modules/vite-plugin-dts/dist/index.mjs";
var __vite_injected_original_dirname = "D:\\CODE\\Front-end\\offer\\vue\\ee-ui\\libs\\vitepress-preview-component";
var vite_config_default = defineConfig({
  build: {
    outDir: ".dist",
    lib: {
      entry: resolve(__vite_injected_original_dirname, "./index.ts"),
      name: "previewComponent",
      fileName: "preview-component",
      formats: ["es"]
    },
    rollupOptions: {
      external: ["vue"],
      output: {
        globals: {
          vue: "Vue"
        }
      }
    }
  },
  plugins: [
    dts({
      exclude: ["./vite.config.ts"],
      insertTypesEntry: true
    }),
    vue()
  ]
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJEOlxcXFxDT0RFXFxcXEZyb250LWVuZFxcXFxvZmZlclxcXFx2dWVcXFxcZWUtdWlcXFxcbGlic1xcXFx2aXRlcHJlc3MtcHJldmlldy1jb21wb25lbnRcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIkQ6XFxcXENPREVcXFxcRnJvbnQtZW5kXFxcXG9mZmVyXFxcXHZ1ZVxcXFxlZS11aVxcXFxsaWJzXFxcXHZpdGVwcmVzcy1wcmV2aWV3LWNvbXBvbmVudFxcXFx2aXRlLmNvbmZpZy50c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vRDovQ09ERS9Gcm9udC1lbmQvb2ZmZXIvdnVlL2VlLXVpL2xpYnMvdml0ZXByZXNzLXByZXZpZXctY29tcG9uZW50L3ZpdGUuY29uZmlnLnRzXCI7aW1wb3J0IHsgZGVmaW5lQ29uZmlnIH0gZnJvbSBcInZpdGVcIjtcclxuaW1wb3J0IHsgcmVzb2x2ZSB9IGZyb20gXCJwYXRoXCI7XHJcbmltcG9ydCB2dWUgZnJvbSBcIkB2aXRlanMvcGx1Z2luLXZ1ZVwiO1xyXG5pbXBvcnQgZHRzIGZyb20gXCJ2aXRlLXBsdWdpbi1kdHNcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbmZpZyh7XHJcbiAgYnVpbGQ6IHtcclxuICAgIG91dERpcjogXCIuZGlzdFwiLFxyXG4gICAgbGliOiB7XHJcbiAgICAgIGVudHJ5OiByZXNvbHZlKF9fZGlybmFtZSwgXCIuL2luZGV4LnRzXCIpLFxyXG4gICAgICBuYW1lOiBcInByZXZpZXdDb21wb25lbnRcIixcclxuICAgICAgZmlsZU5hbWU6IFwicHJldmlldy1jb21wb25lbnRcIixcclxuICAgICAgZm9ybWF0czogW1wiZXNcIl0sXHJcbiAgICB9LFxyXG4gICAgcm9sbHVwT3B0aW9uczoge1xyXG4gICAgICBleHRlcm5hbDogW1widnVlXCJdLFxyXG4gICAgICBvdXRwdXQ6IHtcclxuICAgICAgICBnbG9iYWxzOiB7XHJcbiAgICAgICAgICB2dWU6IFwiVnVlXCIsXHJcbiAgICAgICAgfSxcclxuICAgICAgfSxcclxuICAgIH0sXHJcbiAgfSxcclxuICBwbHVnaW5zOiBbXHJcbiAgICBkdHMoe1xyXG4gICAgICBleGNsdWRlOiBbXCIuL3ZpdGUuY29uZmlnLnRzXCJdLFxyXG4gICAgICBpbnNlcnRUeXBlc0VudHJ5OiB0cnVlLFxyXG4gICAgfSksXHJcbiAgICB2dWUoKSxcclxuICBdLFxyXG59KTtcclxuIl0sCiAgIm1hcHBpbmdzIjogIjtBQUF3WSxTQUFTLG9CQUFvQjtBQUNyYSxTQUFTLGVBQWU7QUFDeEIsT0FBTyxTQUFTO0FBQ2hCLE9BQU8sU0FBUztBQUhoQixJQUFNLG1DQUFtQztBQUt6QyxJQUFPLHNCQUFRLGFBQWE7QUFBQSxFQUMxQixPQUFPO0FBQUEsSUFDTCxRQUFRO0FBQUEsSUFDUixLQUFLO0FBQUEsTUFDSCxPQUFPLFFBQVEsa0NBQVcsWUFBWTtBQUFBLE1BQ3RDLE1BQU07QUFBQSxNQUNOLFVBQVU7QUFBQSxNQUNWLFNBQVMsQ0FBQyxJQUFJO0FBQUEsSUFDaEI7QUFBQSxJQUNBLGVBQWU7QUFBQSxNQUNiLFVBQVUsQ0FBQyxLQUFLO0FBQUEsTUFDaEIsUUFBUTtBQUFBLFFBQ04sU0FBUztBQUFBLFVBQ1AsS0FBSztBQUFBLFFBQ1A7QUFBQSxNQUNGO0FBQUEsSUFDRjtBQUFBLEVBQ0Y7QUFBQSxFQUNBLFNBQVM7QUFBQSxJQUNQLElBQUk7QUFBQSxNQUNGLFNBQVMsQ0FBQyxrQkFBa0I7QUFBQSxNQUM1QixrQkFBa0I7QUFBQSxJQUNwQixDQUFDO0FBQUEsSUFDRCxJQUFJO0FBQUEsRUFDTjtBQUNGLENBQUM7IiwKICAibmFtZXMiOiBbXQp9Cg==
