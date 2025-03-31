import { defineComponent as e, createElementBlock as n, openBlock as o, Fragment as s, renderList as t, createElementVNode as a, normalizeClass as l, createVNode as i, createTextVNode as r, toDisplayString as u, unref as c, ref as p, renderSlot as f, withCtx as d } from "vue";
import { b as m } from "./Button-Pl1Yf8YQ.js";
import { f as v, v as y, I as _, l as g } from "./vendor-dolnLWnX.js";
import { u as h } from "./hooks-C6skdo66.js";
import { E as F } from "./Icon-DYFp5whK.js";
import { _ as U, w as k } from "./utils-iRl-pZ4j.js";
const C = { class: "er-upload-list" }, E = { class: "file-action" }, L = U(e({ name: "ErUploadList", __name: "UploadList", props: { fileList: {}, onRemove: { type: Function } }, setup(e2) {
  const p2 = /* @__PURE__ */ new Map([["success", "check-circle"], ["error", "times-circle"], ["uploading", "spinner"]]);
  return (e3, f2) => (o(), n("ul", C, [(o(true), n(s, null, t(e3.fileList, (s2) => (o(), n("li", { key: s2.uid, class: "er-upload-list__item" }, [a("span", { class: l(["file-name", { [`file-name-${s2.status}`]: true }]) }, [i(F, { icon: "file-alt" }), r(" " + u(s2.name), 1)], 2), a("span", { class: l(["file-status", { [`file-status-${s2.status}`]: true }]) }, [i(F, { icon: c(p2).get(s2.status || "") ?? "", spin: "uploading" === s2.status }, null, 8, ["icon", "spin"])], 2), a("span", E, [i(F, { icon: "times", onClick: (n2) => {
    var _a;
    return (_a = e3.onRemove) == null ? void 0 : _a.call(e3, s2);
  } }, null, 8, ["onClick"])])]))), 128))]));
} }), [["__scopeId", "data-v-d4530b46"]]), R = { class: "er-upload" }, b = k(e({ name: "ErUpload", __name: "Upload", props: { action: {}, defaultFileList: {}, beforeUpload: { type: Function }, onChange: { type: Function }, onProgress: { type: Function }, onSuccess: { type: Function }, onError: { type: Function }, onRemove: { type: Function } }, setup(e2) {
  const s2 = e2, t2 = p(), l2 = p(s2.defaultFileList ?? []);
  function u2(e3) {
    const n2 = l2.value.findIndex((n3) => n3.uid === e3.uid);
    -1 !== n2 ? l2.value.splice(n2, 1, g(e3)) : l2.value.unshift(g(e3));
  }
  function c2() {
    var _a;
    (_a = t2.value) == null ? void 0 : _a.click();
  }
  function F2(e3) {
    var _a;
    const n2 = (_a = e3.target) == null ? void 0 : _a.files;
    n2 && (function(e4) {
      const n3 = Array.from(e4);
      v(n3, (e5) => {
        if (s2 == null ? void 0 : s2.beforeUpload) {
          const n4 = s2.beforeUpload(e5);
          n4 && n4 instanceof Promise ? n4.then((e6) => {
            U2(e6);
          }) : false !== n4 && U2(e5);
        } else U2(e5);
      });
    }(n2), t2.value && (t2.value.value = ""));
  }
  function U2(e3) {
    const n2 = { uid: h().value + "_upload-file_" + Date.now(), status: "ready", name: e3.name, size: e3.size, percent: 0, raw: e3 };
    u2(n2);
    const o2 = new FormData();
    o2.append(e3.name, e3), _.postForm(s2.action, o2, { headers: { "Content-Type": "multipart/form-data" }, onUploadProgress: (o3) => {
      let t3 = Math.round(100 * o3.loaded / o3.total) || 0;
      n2.percent = t3, t3 < 100 && (n2.status = "uploading", u2(n2)), y(s2.onProgress) && s2.onProgress(t3, e3);
    } }).then((o3) => {
      n2.status = "success", n2.response = o3.data, y(s2.onSuccess) && s2.onSuccess(o3.data, e3), u2(n2);
    }).catch((o3) => {
      n2.status = "error", y(s2.onError) && s2.onError(o3, e3), u2(n2);
    }).finally(() => {
      y(s2.onChange) && s2.onChange(e3);
    });
  }
  function k2(e3) {
    l2.value = l2.value.filter((n2) => n2.uid !== e3.uid), y(s2.onRemove) && s2.onRemove(e3);
  }
  return (e3, s3) => (o(), n("div", R, [a("div", { class: "er-upload__content", onClick: c2 }, [f(e3.$slots, "default", {}, () => [i(m, { type: "primary" }, { default: d(() => s3[0] || (s3[0] = [r("Upload File")])), _: 1 })])]), a("input", { ref_key: "fileInputRef", ref: t2, class: "er-file-input", type: "file", onChange: F2, style: { display: "none" } }, null, 544), i(L, { "file-list": l2.value, "on-remove": k2 }, null, 8, ["file-list"])]));
} }));
export {
  b as E
};
