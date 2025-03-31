import { defineComponent as e, createElementBlock as s, openBlock as o, normalizeStyle as t, normalizeClass as a, renderSlot as l } from "vue";
import { _ as d } from "./utils-iRl-pZ4j.js";
const i = d(e({ name: "ErOverlay", __name: "Overlay", props: { mask: { type: Boolean, default: true }, zIndex: {}, overlayClass: {} }, emits: ["click"], setup(e2, { emit: d2 }) {
  const i2 = d2;
  function r(e3) {
    i2("click", e3);
  }
  return (e3, d3) => e3.mask ? (o(), s("div", { key: 0, class: a(["er-overlay", e3.overlayClass]), style: t({ zIndex: e3.zIndex }), onClick: r }, [l(e3.$slots, "default", {}, void 0, true)], 6)) : (o(), s("div", { key: 1, class: a(e3.overlayClass), style: t({ zIndex: e3.zIndex, position: "fixed", top: 0, left: 0, right: 0, bottom: 0 }) }, [l(e3.$slots, "default", {}, void 0, true)], 6));
} }), [["__scopeId", "data-v-35adad8e"]]);
export {
  i as E
};
