import { defineComponent as e, useSlots as t, ref as l, computed as o, createBlock as s, openBlock as a, Transition as c, withCtx as r, withDirectives as n, createElementVNode as i, normalizeClass as p, createCommentVNode as f, createElementBlock as _, normalizeStyle as u, renderSlot as d, createTextVNode as m, toDisplayString as v, createVNode as y, withModifiers as w, vShow as h } from "vue";
import { t as I, _ as b, w as k } from "./utils-iRl-pZ4j.js";
import { E as x } from "./Icon-DYFp5whK.js";
const $ = { class: "er-alert__content" }, g = { class: "er-alert__description" }, B = { key: 0, class: "er-alert__close" }, E = k(b(e({ name: "ErAlert", __name: "Alert", props: { title: {}, type: { default: "info" }, description: {}, effect: { default: "light" }, closable: { type: Boolean, default: true }, center: { type: Boolean }, showIcon: { type: Boolean } }, emits: ["close"], setup(e2, { expose: b2, emit: k2 }) {
  const E2 = e2, j = k2, A = t(), C = l(true), q = o(() => I.get(E2.type) ?? "circle-info"), z = o(() => E2.description || A.default);
  function D() {
    C.value = false, j("close");
  }
  return b2({ open: function() {
    C.value = true;
  }, close: D }), (e3, t2) => (a(), s(c, { name: "er-alert-fade" }, { default: r(() => [n(i("div", { class: p(["er-alert", { [`er-alert__${e3.type}`]: e3.type, [`er-alert__${e3.effect}`]: e3.effect, "text-center": e3.center }]), role: "alert" }, [e3.showIcon ? (a(), s(x, { key: 0, class: p(["er-alert__icon", { "big-icon": z.value }]), icon: q.value }, null, 8, ["class", "icon"])) : f("", true), i("div", $, [i("span", { class: p(["er-alert__title", { "with-desc": z.value }]), style: u({ display: e3.center && !e3.showIcon ? "flow" : "inline" }) }, [d(e3.$slots, "title", {}, () => [m(v(e3.title), 1)], true)], 6), i("p", g, [d(e3.$slots, "default", {}, () => [m(v(e3.description), 1)], true)]), e3.closable ? (a(), _("div", B, [y(x, { onClick: w(D, ["stop"]), icon: "xmark" })])) : f("", true)])], 2), [[h, C.value]])]), _: 3 }));
} }), [["__scopeId", "data-v-e1c24b96"]]));
export {
  E
};
