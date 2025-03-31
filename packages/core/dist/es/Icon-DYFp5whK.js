import { defineComponent as e, computed as o, createElementBlock as t, openBlock as a, mergeProps as n, createVNode as p, unref as l, normalizeProps as s, guardReactiveProps as r } from "vue";
import { FontAwesomeIcon as i } from "@fortawesome/vue-fontawesome";
import { a as y } from "./vendor-dolnLWnX.js";
import { _ as m, w as c } from "./utils-iRl-pZ4j.js";
const B = m(e({ name: "ErIcon", inheritAttrs: false, __name: "Icon", props: { border: { type: Boolean }, fixedWidth: { type: Boolean }, flip: {}, icon: {}, mask: {}, listItem: { type: Boolean }, pull: {}, pulse: { type: Boolean }, rotation: {}, swapOpacity: { type: Boolean }, size: {}, spin: { type: Boolean }, transform: {}, symbol: { type: [Boolean, String] }, title: {}, inverse: { type: Boolean }, bounce: { type: Boolean }, shake: { type: Boolean }, beat: { type: Boolean }, fade: { type: Boolean }, beatFade: { type: Boolean }, spinPulse: { type: Boolean }, spinReverse: { type: Boolean }, type: {}, color: {} }, setup(e2) {
  const m2 = e2, c2 = o(() => y(m2, ["type", "color"])), B2 = o(() => ({ color: m2.color ?? void 0 }));
  return (e3, o2) => (a(), t("i", n({ class: ["er-icon", { [`er-icon--${e3.type}`]: e3.type }], style: B2.value }, e3.$attrs), [p(l(i), s(r(c2.value)), null, 16)], 16));
} }), [["__scopeId", "data-v-2977db35"]]), u = c(B);
export {
  B as E,
  u as a
};
