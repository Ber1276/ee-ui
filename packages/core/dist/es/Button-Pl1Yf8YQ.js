import { defineComponent as e, useSlots as o, inject as t, ref as a, computed as l, createBlock as i, openBlock as s, resolveDynamicComponent as n, unref as u, normalizeClass as d, withCtx as p, renderSlot as r, createCommentVNode as c, createVNode as y, normalizeStyle as b, provide as f, reactive as v, toRef as g, createElementBlock as m } from "vue";
import { E as B } from "./Icon-DYFp5whK.js";
import { t as _ } from "./vendor-dolnLWnX.js";
import { _ as z, w as x } from "./utils-iRl-pZ4j.js";
const k = Symbol("buttonGroupContext"), h = z(e({ name: "ErButton", __name: "Button", props: { tag: { default: "button" }, type: {}, size: {}, plain: { type: Boolean }, round: { type: Boolean }, circle: { type: Boolean }, disabled: { type: Boolean }, autofocus: { type: Boolean }, nativeType: { default: "button" }, icon: {}, loading: { type: Boolean }, loadingIcon: {}, useThrottle: { type: Boolean, default: true }, throttleDuration: { default: 500 } }, emits: ["click"], setup(e2, { expose: f2, emit: v2 }) {
  const g2 = e2, m2 = v2, z2 = o(), x2 = t(k, void 0), h2 = a(), I2 = l(() => (x2 == null ? void 0 : x2.size) ?? g2.size ?? ""), $2 = l(() => (x2 == null ? void 0 : x2.type) ?? g2.type ?? ""), E2 = l(() => g2.disabled || (x2 == null ? void 0 : x2.disabled) || false), T2 = l(() => ({ marginRight: z2.default ? "6px" : "0px" })), j = (e3) => {
    m2("click", e3);
  }, G = _(j, g2.throttleDuration);
  return f2({ ref: h2, disabled: E2, size: I2, type: $2 }), (e3, o2) => (s(), i(n(e3.tag), { ref_key: "_ref", ref: h2, class: d(["er-button", { [`er-button--${$2.value}`]: $2.value, [`er-button--${I2.value}`]: I2.value, "is-plain": e3.plain, "is-round": e3.round, "is-circle": e3.circle, "is-disabled": E2.value, "is-loading": e3.loading }]), disabled: !(!E2.value && !e3.loading) || void 0, type: "button" === e3.tag ? e3.nativeType : void 0, autofocus: e3.autofocus, onClick: o2[0] || (o2[0] = (o3) => e3.useThrottle ? u(G)(o3) : j(o3)) }, { default: p(() => [e3.loading ? r(e3.$slots, "loading", { key: 0 }, () => [y(B, { class: "loading-icon", icon: e3.loadingIcon ?? "spinner", style: b(T2.value), size: "1x", spin: "" }, null, 8, ["icon", "style"])], true) : c("", true), e3.icon && !e3.loading ? (s(), i(B, { key: 1, icon: e3.icon, size: "1x", style: b(T2.value) }, null, 8, ["icon", "style"])) : c("", true), r(e3.$slots, "default", {}, void 0, true)]), _: 3 }, 8, ["class", "disabled", "type", "autofocus"]));
} }), [["__scopeId", "data-v-d46ab85b"]]), I = { class: "er-button-group" }, $ = z(e({ name: "ErButtonGroup", __name: "ButtonGroup", props: { size: {}, type: {}, disabled: { type: Boolean } }, setup(e2) {
  const o2 = e2;
  return f(k, v({ size: g(o2, "size"), type: g(o2, "type"), disabled: g(o2, "disabled") })), (e3, o3) => (s(), m("div", I, [r(e3.$slots, "default", {}, void 0, true)]));
} }), [["__scopeId", "data-v-ce37ee21"]]), E = x(h), T = x($);
export {
  T as E,
  E as a,
  h as b
};
