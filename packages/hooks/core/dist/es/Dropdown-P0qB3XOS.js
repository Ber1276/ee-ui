import { defineComponent as e, inject as o, computed as i, createElementBlock as t, openBlock as d, Fragment as l, createCommentVNode as a, createElementVNode as s, normalizeClass as n, unref as r, renderSlot as p, createTextVNode as m, toDisplayString as u, useSlots as c, ref as f, provide as v, createVNode as _, mergeProps as y, withCtx as b, createBlock as h, renderList as k } from "vue";
import { u as w, a as g } from "./hooks-C6skdo66.js";
import { E as B, a as C } from "./Button-Pl1Yf8YQ.js";
import { _ as z, w as $ } from "./utils-iRl-pZ4j.js";
import { T as I } from "./Tooltip-CycW2k9E.js";
import { a as j, i as D } from "./vendor-dolnLWnX.js";
const E = Symbol("dropdownContext"), T = { key: 0, role: "separator", class: "divided-placeholder" }, x = ["id"], O = z(e({ name: "ErDropdownItem", __name: "DropdownItem", props: { command: { default: w().value }, label: {}, disabled: { type: Boolean, default: false }, divided: { type: Boolean, default: false } }, setup(e2) {
  const c2 = e2, f2 = o(E), v2 = i(() => f2 == null ? void 0 : f2.size.value);
  function _2() {
    c2.disabled || (f2 == null ? void 0 : f2.handleItemClick(c2));
  }
  return (e3, o2) => (d(), t(l, null, [e3.divided ? (d(), t("li", T)) : a("", true), s("li", { id: `dropdown-item-${e3.command ?? r(w)().value}`, class: n({ "er-dropdown__item": true, ["er-dropdown__item--" + v2.value]: v2.value, "is-disabled": e3.disabled, "is-divided": e3.divided }), onClick: _2 }, [p(e3.$slots, "default", {}, () => [m(u(e3.label), 1)], true)], 10, x)], 64));
} }), [["__scopeId", "data-v-1892338f"]]), A = ["id"], R = { class: "er-dropdown__menu" }, S = $(z(e({ name: "ErDropdown", inheritAttrs: false, __name: "Dropdown", props: { type: {}, size: {}, items: { default: () => [] }, hideOnClick: { type: Boolean, default: true }, splitButton: { type: Boolean }, content: {}, trigger: {}, placement: {}, manual: { type: Boolean }, disabled: { type: Boolean }, popperOptions: {}, transition: {}, showTimeout: {}, hideTimeout: {} }, emits: ["visible-change", "command", "click"], setup(e2, { expose: o2, emit: a2 }) {
  const m2 = e2, u2 = a2;
  c();
  const z2 = f(), $2 = f(), T2 = i(() => j(m2, ["items", "hideAfterClick", "size", "type", "splitButton"]));
  return g(), o2({ open: () => {
    var _a;
    return (_a = z2.value) == null ? void 0 : _a.show();
  }, close: () => {
    var _a;
    return (_a = z2.value) == null ? void 0 : _a.hide();
  } }), v(E, { handleItemClick: function(e3) {
    var _a;
    m2.hideOnClick && ((_a = z2.value) == null ? void 0 : _a.hide()), !D(e3.command) && u2("command", e3.command);
  }, size: i(() => m2.size) }), (e3, o3) => (d(), t("div", { class: n(["er-dropdown", { "is-disabled": m2.disabled }]), id: `dropdown-${r(w)().value}` }, [_(I, y({ ref_key: "tooltipRef", ref: z2 }, T2.value, { "virtual-triggering": e3.splitButton, "virtual-ref": $2.value, onVisibleChange: o3[1] || (o3[1] = (o4) => e3.$emit("visible-change", o4)) }), { content: b(() => [s("ul", R, [p(e3.$slots, "dropdown", {}, () => [(d(true), t(l, null, k(e3.items, (e4) => (d(), h(O, y({ key: e4.command ?? r(w)().value, ref_for: true }, e4), null, 16))), 128))], true)])]), default: b(() => [e3.splitButton ? (d(), h(r(B), { key: 0, type: e3.type, size: e3.size, disabled: e3.disabled }, { default: b(() => [_(r(C), { onClick: o3[0] || (o3[0] = (o4) => e3.$emit("click", o4)) }, { default: b(() => [p(e3.$slots, "default", {}, void 0, true)]), _: 3 }), _(r(C), { ref_key: "triggerRef", ref: $2, icon: "angle-down" }, null, 512)]), _: 3 }, 8, ["type", "size", "disabled"])) : p(e3.$slots, "default", { key: 1 }, void 0, true)]), _: 3 }, 16, ["virtual-triggering", "virtual-ref"])], 10, A));
} }), [["__scopeId", "data-v-82fc3901"]])), V = $(O);
export {
  S as E,
  V as a
};
