import { defineComponent as e, ref as a, watch as l, provide as t, createElementBlock as s, openBlock as o, renderSlot as i, inject as d, computed as n, normalizeClass as c, createElementVNode as r, createVNode as m, createTextVNode as p, toDisplayString as u, Transition as v, mergeProps as f, toHandlers as h, unref as _, withCtx as b, withDirectives as g, vShow as y } from "vue";
import { d as C, _ as I, w as E } from "./utils-iRl-pZ4j.js";
import { f as $ } from "./vendor-dolnLWnX.js";
import { E as x } from "./Icon-DYFp5whK.js";
const V = Symbol("collapseContext"), w = { class: "er-collapse" }, j = "ErCollapse", k = I(e({ name: j, __name: "Collapse", props: { modelValue: {}, accordion: { type: Boolean } }, emits: ["update:modelValue", "change"], setup(e2, { emit: d2 }) {
  const n2 = e2, c2 = d2, r2 = a(n2.modelValue);
  function m2(e3) {
    r2.value = e3, $(["update:modelValue", "change"], (a2) => c2(a2, e3));
  }
  return n2.accordion && r2.value.length > 1 && C(j, "accordion mode should only have one active item"), l(() => n2.modelValue, (e3) => m2(e3)), t(V, { activeNames: r2, handleItemClick: function(e3) {
    let a2 = [...r2.value];
    if (n2.accordion) return a2 = [a2[0] === e3 ? "" : e3], void m2(a2);
    const l2 = a2.indexOf(e3);
    l2 > -1 ? a2.splice(l2, 1) : a2.push(e3), m2(a2);
  } }), (e3, a2) => (o(), s("div", w, [i(e3.$slots, "default", {}, void 0, true)]));
} }), [["__scopeId", "data-v-6b230717"]]), B = (e2) => e2.style.height = "0px", L = (e2) => e2.style.height = `${e2.scrollHeight}px`, N = (e2) => e2.style.height = "", H = (e2) => e2.style.overflow = "hidden", O = (e2) => e2.style.overflow = "", S = { beforeEnter(e2) {
  B(e2), H(e2);
}, enter: (e2) => L(e2), afterEnter(e2) {
  N(e2), O(e2);
}, beforeLeave(e2) {
  L(e2), H(e2);
}, leave: (e2) => B(e2), afterLeave(e2) {
  N(e2), O(e2);
} }, q = ["id"], z = { class: "er-collapse-item__title" }, A = { class: "er-collapse-item__wapper" }, D = ["id"], F = I(e({ name: "ErCollapseItem", __name: "CollapseItem", props: { name: {}, title: {}, disabled: { type: Boolean } }, setup(e2) {
  const a2 = e2, l2 = d(V), t2 = n(() => {
    var _a;
    return (_a = l2 == null ? void 0 : l2.activeNames.value) == null ? void 0 : _a.includes(a2.name);
  });
  function C2() {
    a2.disabled || (l2 == null ? void 0 : l2.handleItemClick(a2.name));
  }
  return (e3, a3) => (o(), s("div", { class: c(["er-collapse-item", { "is-disabled": e3.disabled }]) }, [r("div", { class: c(["er-collapse-item__header", { "is-disabled": e3.disabled, "is-active": t2.value }]), id: `item-header-${e3.name}`, onClick: C2 }, [r("span", z, [i(e3.$slots, "title", {}, () => [p(u(e3.title), 1)], true)]), m(x, { icon: "angle-right", class: "header-angle" })], 10, q), m(v, f({ name: "slide" }, h(_(S))), { default: b(() => [g(r("div", A, [r("div", { class: "er-collapse-item__content", id: `item-content-${e3.name}` }, [i(e3.$slots, "default", {}, void 0, true)], 8, D)], 512), [[y, t2.value]])]), _: 3 }, 16)], 2));
} }), [["__scopeId", "data-v-f9283536"]]), G = E(k), J = E(F);
export {
  G as E,
  J as a
};
