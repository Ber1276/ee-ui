import { defineComponent as e, ref as a, computed as t, onMounted as i, watch as c, createElementBlock as l, openBlock as s, normalizeClass as n, unref as u, createElementVNode as o, withKeys as r, createCommentVNode as d, toDisplayString as v } from "vue";
import { d as m, _ as h, w as p } from "./utils-iRl-pZ4j.js";
import { u as _, a as f, b as w } from "./Form-aNep-qS_.js";
const b = ["id", "name", "disabled", "checked"], k = { class: "er-switch__core" }, x = { class: "er-switch__core-inner" }, V = { key: 0, class: "er-switch__core-inner-text" }, y = p(h(e({ name: "ErSwitch", inheritAttrs: false, __name: "Switch", props: { modelValue: { type: [Boolean, String, Number] }, disabled: { type: Boolean }, activeText: {}, inactiveText: {}, activeValue: { type: [Boolean, String, Number], default: true }, inactiveValue: { type: [Boolean, String, Number], default: false }, name: {}, id: {}, size: {} }, emits: ["update:modelValue", "change"], setup(e2, { expose: h2, emit: p2 }) {
  const y2 = e2, g = p2, T = _(), { formItem: B } = f(), { inputId: S } = w(y2, B), z = a(y2.modelValue), I = a(null), N = t(() => z.value === y2.activeValue);
  function j() {
    if (T.value) return;
    const e3 = N.value ? y2.inactiveValue : y2.activeValue;
    z.value = e3, g("update:modelValue", e3), g("change", e3);
  }
  return i(() => {
    I.value.checked = N.value;
  }), c(N, (e3) => {
    I.value.checked = e3, B == null ? void 0 : B.validate("change").catch((e4) => m(e4));
  }), c(() => y2.modelValue, (e3) => z.value = e3), h2({ focus: function() {
    var _a;
    (_a = I.value) == null ? void 0 : _a.focus();
  }, checked: N }), (e3, a2) => (s(), l("div", { class: n(["er-switch", { [`er-switch--${e3.size}`]: e3.size, "is-disabled": u(T), "is-checked": N.value }]), onClick: j }, [o("input", { class: "er-switch__input", type: "checkbox", role: "switch", ref_key: "inputRef", ref: I, id: u(S), name: e3.name, disabled: u(T), checked: N.value, onKeydown: r(j, ["enter"]), onBlur: a2[0] || (a2[0] = (e4) => {
    var _a;
    return (_a = u(B)) == null ? void 0 : _a.validate("blur").catch((e5) => u(m)(e5));
  }) }, null, 40, b), o("div", k, [o("div", x, [e3.activeText || e3.inactiveText ? (s(), l("span", V, v(N.value ? e3.activeText : e3.inactiveText), 1)) : d("", true)]), a2[1] || (a2[1] = o("div", { class: "er-switch__core-action" }, null, -1))])], 2));
} }), [["__scopeId", "data-v-95726afc"]]));
export {
  y as E
};
