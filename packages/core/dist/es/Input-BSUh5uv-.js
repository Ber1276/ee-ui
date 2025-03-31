import { defineComponent as e, ref as a, shallowRef as o, computed as l, useAttrs as s, watch as t, createElementBlock as u, openBlock as r, normalizeClass as p, unref as n, withDirectives as i, Fragment as d, createCommentVNode as c, createElementVNode as f, renderSlot as v, mergeProps as m, vModelDynamic as y, createBlock as _, withModifiers as h, vModelText as x, nextTick as w } from "vue";
import { u as k, a as b, b as $ } from "./Form-aNep-qS_.js";
import { d as B, _ as V, w as I } from "./utils-iRl-pZ4j.js";
import { c as g } from "./hooks-C6skdo66.js";
import { E as j } from "./Icon-DYFp5whK.js";
import { r as C, f as F } from "./vendor-dolnLWnX.js";
const R = { key: 0, class: "er-input__prepend" }, z = { key: 0, class: "er-input__prefix" }, E = ["id", "type", "disabled", "readonly", "autocomplete", "placeholder", "autofocus", "form"], P = { key: 1, class: "er-input__suffix" }, M = { key: 1, class: "er-input__append" }, U = ["id", "disabled", "readonly", "autocomplete", "placeholder", "autofocus", "form"], A = V(e({ name: "ErInput", inheritAttrs: false, __name: "Input", props: { id: {}, modelValue: {}, type: { default: "text" }, size: {}, disabled: { type: Boolean }, clearable: { type: Boolean }, showPassword: { type: Boolean }, placeholder: {}, readonly: { type: Boolean }, autocomplete: { default: "off" }, autofocus: { type: Boolean }, form: {} }, emits: ["update:modelValue", "input", "change", "focus", "blur", "clear"], setup(e2, { expose: V2, emit: I2 }) {
  const A2 = e2, q2 = I2, D = a(A2.modelValue), G = a(false), H = o(), J = o(), K = l(() => A2.clearable && !!D.value && !Q.value && X.value), L = l(() => "password" === A2.type && A2.showPassword && !Q.value && !!D.value), N = l(() => H.value || J.value), O = s(), Q = k(), { formItem: S } = b(), { inputId: T } = $(A2, S), { wrapperRef: W, isFocused: X, handleFocus: Y, handleBlur: Z } = g(N, { afterBlur() {
    S == null ? void 0 : S.validate("blur").catch((e3) => B(e3));
  } }), ee = function() {
    D.value = "", F(["update:modelValue", "input", "change"], (e3) => q2(e3, "")), q2("clear"), S == null ? void 0 : S.clearValidate();
  };
  function ae() {
    q2("update:modelValue", D.value), q2("input", D.value);
  }
  function oe() {
    q2("change", D.value);
  }
  function le() {
    G.value = !G.value;
  }
  return t(() => A2.modelValue, (e3) => {
    D.value = e3, S == null ? void 0 : S.validate("change").catch((e4) => B(e4));
  }), V2({ ref: N, focus: async function() {
    var _a;
    await w(), (_a = N.value) == null ? void 0 : _a.focus();
  }, blur: function() {
    var _a;
    (_a = N.value) == null ? void 0 : _a.blur();
  }, select: function() {
    var _a;
    (_a = N.value) == null ? void 0 : _a.select();
  }, clear: ee }), (e3, a2) => (r(), u("div", { class: p(["er-input", { [`er-input--${e3.type}`]: e3.type, [`er-input--${e3.size}`]: e3.size, "is-disabled": n(Q), "is-prepend": e3.$slots.prepend, "is-append": e3.$slots.append, "is-prefix": e3.$slots.prefix, "is-suffix": e3.$slots.suffix, "is-focus": n(X) }]) }, ["textarea" !== e3.type ? (r(), u(d, { key: 0 }, [e3.$slots.prepend ? (r(), u("div", R, [v(e3.$slots, "prepend", {}, void 0, true)])) : c("", true), f("div", { class: "er-input__wrapper", ref_key: "wrapperRef", ref: W }, [e3.$slots.prefix ? (r(), u("span", z, [v(e3.$slots, "prefix", {}, void 0, true)])) : c("", true), i(f("input", m({ class: "er-input__inner", ref_key: "inputRef", ref: H, id: n(T), type: e3.showPassword ? G.value ? "text" : "password" : e3.type, disabled: n(Q), readonly: e3.readonly, autocomplete: e3.autocomplete, placeholder: e3.placeholder, autofocus: e3.autofocus, form: e3.form, "onUpdate:modelValue": a2[0] || (a2[0] = (e4) => D.value = e4) }, n(O), { onInput: ae, onChange: oe, onFocus: a2[1] || (a2[1] = (...e4) => n(Y) && n(Y)(...e4)), onBlur: a2[2] || (a2[2] = (...e4) => n(Z) && n(Z)(...e4)) }), null, 16, E), [[y, D.value]]), e3.$slots.suffix || K.value || L.value ? (r(), u("span", P, [v(e3.$slots, "suffix", {}, void 0, true), K.value ? (r(), _(j, { key: 0, icon: "circle-xmark", class: "er-input__clear", onClick: ee, onMousedown: h(n(C), ["prevent"]) }, null, 8, ["onMousedown"])) : c("", true), L.value && G.value ? (r(), _(j, { key: 1, icon: "eye", class: "er-input__password", onClick: le })) : c("", true), L.value && !G.value ? (r(), _(j, { key: 2, icon: "eye-slash", class: "er-input__password", onClick: le })) : c("", true)])) : c("", true)], 512), e3.$slots.append ? (r(), u("div", M, [v(e3.$slots, "append", {}, void 0, true)])) : c("", true)], 64)) : i((r(), u("textarea", m({ key: 1, class: "er-textarea__wrapper", ref_key: "textareaRef", ref: J, id: n(T), disabled: n(Q), readonly: e3.readonly, autocomplete: e3.autocomplete, placeholder: e3.placeholder, autofocus: e3.autofocus, form: e3.form, "onUpdate:modelValue": a2[3] || (a2[3] = (e4) => D.value = e4) }, n(O), { onInput: ae, onChange: oe, onFocus: a2[4] || (a2[4] = (...e4) => n(Y) && n(Y)(...e4)), onBlur: a2[5] || (a2[5] = (...e4) => n(Z) && n(Z)(...e4)) }), null, 16, U)), [[x, D.value]])], 2));
} }), [["__scopeId", "data-v-3ef8d26c"]]), q = I(A);
export {
  A as E,
  q as a
};
