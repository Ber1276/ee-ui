import { defineComponent as o, ref as t, computed as e, createBlock as n, openBlock as i, createSlots as c, withCtx as r, createElementVNode as l, normalizeStyle as a, createCommentVNode as f, createTextVNode as s, toDisplayString as m, createVNode as p, unref as u, renderSlot as d } from "vue";
import { b as _, _ as y, w as B } from "./utils-iRl-pZ4j.js";
import { g as T } from "./hooks-C6skdo66.js";
import { b as h } from "./Button-Pl1Yf8YQ.js";
import { E as v } from "./Icon-DYFp5whK.js";
import { T as k } from "./Tooltip-CycW2k9E.js";
const x = { class: "er-popconfirm__main" }, j = { class: "er-popconfirm__action" }, w = B(y(o({ name: "ErPopconfirm", __name: "Popconfirm", props: { title: { default: "" }, confirmButtonText: {}, cancelButtonText: {}, confirmButtonType: { default: "primary" }, cancelButtonType: {}, icon: { default: "question-circle" }, iconColor: { default: "#f90" }, hideIcon: { type: Boolean }, hideAfter: { default: 200 }, width: { default: 150 } }, emits: ["confirm", "cancel"], setup(o2, { emit: y2 }) {
  const B2 = o2, w2 = y2, C = t(), I = e(() => ({ width: _(B2.width) })), { t: $ } = T();
  function g() {
    var _a;
    (_a = C.value) == null ? void 0 : _a.hide();
  }
  function E(o3) {
    w2("confirm", o3), g();
  }
  function b(o3) {
    w2("cancel", o3), g();
  }
  return (o3, t2) => (i(), n(k, { ref_key: "tooltipRef", ref: C, trigger: "click", "hide-timeout": o3.hideAfter }, c({ content: r(() => [l("div", { class: "er-popconfirm", style: a(I.value) }, [l("div", x, [!o3.hideIcon && o3.icon ? (i(), n(v, { key: 0, icon: o3.icon, color: o3.iconColor }, null, 8, ["icon", "color"])) : f("", true), s(" " + m(o3.title), 1)]), l("div", j, [p(h, { size: "small", class: "er-popconfirm__cancel", type: o3.cancelButtonType, onClick: b }, { default: r(() => [s(m(o3.cancelButtonText || u($)("popconfirm.cancelButtonText")), 1)]), _: 1 }, 8, ["type"]), p(h, { size: "small", class: "er-popconfirm__confirm", type: o3.confirmButtonType, onClick: E }, { default: r(() => [s(m(o3.confirmButtonText || u($)("popconfirm.confirmButtonText")), 1)]), _: 1 }, 8, ["type"])])], 4)]), _: 2 }, [o3.$slots.default ? { name: "default", fn: r(() => [d(o3.$slots, "default", {}, void 0, true)]), key: "0" } : void 0, o3.$slots.reference ? { name: "default", fn: r(() => [d(o3.$slots, "reference", {}, void 0, true)]), key: "1" } : void 0]), 1032, ["hide-timeout"]));
} }), [["__scopeId", "data-v-98029d15"]]));
export {
  w as E
};
