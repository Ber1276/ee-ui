import { g as r, j as e, v as n } from "./vendor-dolnLWnX.js";
import { defineComponent as o } from "vue";
const s = (r2) => (r2.install = (e2) => {
  const n2 = (r2 == null ? void 0 : r2.name) || "UnnamedComponent";
  e2.component(n2, r2);
}, r2), c = (r2, e2) => (r2.install = (n2) => {
  n2.config.globalProperties[e2] = r2;
}, r2);
class t extends Error {
  constructor(r2) {
    super(r2), this.name = "ErUIError";
  }
}
function a(e2, n2) {
  if ("production" !== process.env.NODE_ENV) {
    const o2 = r(e2) ? new t(`[${e2}] ${n2}`) : e2;
    console.warn(o2);
  }
}
function i(n2, o2 = "px") {
  return n2 ? e(n2) || r(s2 = n2) && !Number.isNaN(Number(s2)) ? `${n2}${o2}` : r(n2) ? n2 : void a("utils/style", "binding value must be a string or number") : "";
  var s2;
}
const u = o({ props: { vNode: { type: [String, Object, Function], required: true } }, setup: (r2) => () => n(r2.vNode) ? r2.vNode() : r2.vNode }), l = /* @__PURE__ */ new Map([["info", "circle-info"], ["success", "check-circle"], ["warning", "circle-exclamation"], ["danger", "circle-xmark"], ["error", "circle-xmark"]]), m = (r2, e2) => {
  const n2 = r2.__vccOpts || r2;
  for (const [r3, o2] of e2) n2[r3] = o2;
  return n2;
};
export {
  u as R,
  m as _,
  c as a,
  i as b,
  a as d,
  l as t,
  s as w
};
