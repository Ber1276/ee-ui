import { defineComponent as e, inject as l, computed as a, createElementBlock as t, openBlock as o, withModifiers as n, normalizeClass as i, renderSlot as s, createVNode as u, unref as d, ref as r, reactive as c, useSlots as p, watch as h, onMounted as v, provide as f, withCtx as m, Fragment as b, renderList as g, createBlock as y, mergeProps as _, createElementVNode as V, nextTick as I, h as x } from "vue";
import { R as k, _ as M, d as w, w as O } from "./utils-iRl-pZ4j.js";
import { c as S, h as L } from "./hooks-C6skdo66.js";
import { u as E, a as j, b as B } from "./Form-aNep-qS_.js";
import { T as D } from "./Tooltip-CycW2k9E.js";
import { E as F } from "./Icon-DYFp5whK.js";
import { E as N } from "./Input-BSUh5uv-.js";
import { C as R, D as C, h as H, b as W, s as $, d as z, E as A, F as T, f as U, r as q, v as G, x as K, i as P, G as J, c as Q } from "./vendor-dolnLWnX.js";
const X = Symbol("selectContext"), Y = { modifiers: [{ name: "offset", options: { offset: [0, 9] } }, { name: "sameWidth", enabled: true, fn: ({ state: e2 }) => {
  e2.styles.popper.width = `${e2.rects.reference.width}px`;
}, phase: "beforeWrite", requires: ["computeStyles"] }] }, Z = ["id"], ee = M(e({ name: "ErOption", __name: "Option", props: { value: {}, label: {}, disabled: { type: Boolean, default: false } }, setup(e2) {
  const r2 = e2, c2 = l(X), p2 = a(() => {
    var _a, _b;
    return ((_b = (_a = c2 == null ? void 0 : c2.selectStates) == null ? void 0 : _a.selectedOption) == null ? void 0 : _b.value) === r2.value;
  }), h2 = a(() => R(["label", "value"], (e3) => C(H(c2, ["highlightedLine", "value", e3]), H(r2, e3))));
  function v2() {
    r2.disabled || (c2 == null ? void 0 : c2.handleSelect(r2));
  }
  return (e3, l2) => (o(), t("li", { class: i(["er-select__menu-item", { "is-disabled": e3.disabled, "is-selected": p2.value, "is-highlighted": h2.value }]), id: `select-item-${e3.value}`, onClick: n(v2, ["stop"]) }, [s(e3.$slots, "default", {}, () => {
    var _a, _b;
    return [u(d(k), { vNode: ((_a = d(c2)) == null ? void 0 : _a.renderLabel) ? (_b = d(c2)) == null ? void 0 : _b.renderLabel(r2) : e3.label }, null, 8, ["vNode"])];
  }, true)], 10, Z));
} }), [["__scopeId", "data-v-d267b7fc"]]), le = { key: 0, class: "er-select__loading" }, ae = { key: 1, class: "er-select__nodata" }, te = { key: 2, class: "er-select__menu" }, oe = "ErSelect", ne = O(M(e({ name: oe, __name: "Select", props: { modelValue: {}, id: {}, options: { default: () => [] }, placeholder: {}, disabled: { type: Boolean }, clearable: { type: Boolean }, renderLabel: {}, filterable: { type: Boolean }, filterMethod: {}, remote: { type: Boolean }, remoteMethod: {} }, emits: ["update:modelValue", "change", "visible-change", "clear", "focus", "blur"], setup(e2, { expose: l2, emit: s2 }) {
  const M2 = e2, O2 = s2, R2 = Fe(M2.modelValue), Z2 = r(), ne2 = r(), ie2 = r(), se = r(false), ue = r(M2.options ?? []), de = r(/* @__PURE__ */ new Map()), re = c({ inputValue: (R2 == null ? void 0 : R2.label) ?? "", selectedOption: R2, mouseHover: false, loading: false, highlightedIndex: -1 }), ce = p(), pe = E(), { formItem: he } = j(), { inputId: ve } = B(M2, he), { wrapperRef: fe, isFocused: me, handleBlur: be, handleFocus: ge } = S(ie2);
  L(Z2, (e3) => Ne(e3));
  const ye = a(() => {
    var _a;
    let e3;
    if (Ve.value) {
      const l3 = (_a = [...de.value][re.highlightedIndex]) == null ? void 0 : _a[0];
      e3 = de.value.get(l3);
    } else e3 = ue.value[re.highlightedIndex];
    return e3;
  }), _e = a(() => {
    var _a;
    return W((_a = ce == null ? void 0 : ce.default) == null ? void 0 : _a.call(ce), (e3) => C(e3.type, ee));
  }), Ve = a(() => $(_e.value) > 0), Ie = a(() => Ve.value ? z(_e.value, (e3) => {
    var _a, _b, _c;
    return { vNode: x(e3), props: K(e3.props, { disabled: true === ((_a = e3.props) == null ? void 0 : _a.disabled) || !P((_b = e3.props) == null ? void 0 : _b.disabled) && !J((_c = e3.props) == null ? void 0 : _c.disabled) }) };
  }) : []), xe = a(() => M2.filterable && re.selectedOption && se.value ? re.selectedOption.label : M2.placeholder), ke = a(() => M2.remote ? 300 : 0), Me = a(() => Ve.value && de.value.size > 0 || !Ve.value && $(ue.value) > 0), we = a(() => !!M2.filterable && !Me.value), Oe = a(() => Ve.value ? de.value.size - 1 : $(ue.value) - 1), Se = a(() => M2.clearable && re.mouseHover && "" !== re.inputValue), Le = A(function() {
    const e3 = re.inputValue;
    re.highlightedIndex = -1, Ve.value ? async function(e4) {
      if (M2.filterable) {
        if (M2.remote && M2.remoteMethod && G(M2.remoteMethod)) return await We(M2.remoteMethod, e4), void je(Ie.value);
        if (M2.filterMethod && G(M2.filterMethod)) {
          const l3 = z(M2.filterMethod(e4), "value");
          je(W(Ie.value, (e5) => Q(l3, H(e5, ["props", "value"]))));
        } else je(W(Ie.value, (l3) => Q(H(l3, ["props", "label"]), e4)));
      }
    }(e3) : async function(e4) {
      M2.filterable && (M2.remote && M2.remoteMethod && G(M2.remoteMethod) ? ue.value = await We(M2.remoteMethod, e4) : M2.filterMethod && G(M2.filterMethod) ? ue.value = M2.filterMethod(e4) : ue.value = W(M2.options, (l3) => Q(l3.label, e4)));
    }(e3);
  }, ke.value), Ee = function({ isDropdownVisible: e3, controlVisible: l3, selectStates: a2, highlightedLine: t2, handleSelect: o2, hasData: n2, lastIndex: i2 }) {
    const s3 = /* @__PURE__ */ new Map();
    return s3.set("Enter", () => {
      e3.value ? a2.highlightedIndex >= 0 && t2.value ? o2(t2.value) : l3(false) : l3(true);
    }), s3.set("Escape", () => e3.value && l3(!e3.value)), s3.set("ArrowUp", (e4) => {
      e4.preventDefault(), n2.value && (-1 !== a2.highlightedIndex && 0 !== a2.highlightedIndex ? a2.highlightedIndex-- : a2.highlightedIndex = i2.value);
    }), s3.set("ArrowDown", (e4) => {
      e4.preventDefault(), n2.value && (-1 !== a2.highlightedIndex && a2.highlightedIndex !== i2.value ? a2.highlightedIndex++ : a2.highlightedIndex = 0);
    }), s3;
  }({ isDropdownVisible: se, controlVisible: Be, selectStates: re, highlightedLine: ye, handleSelect: Re, hasData: Me, lastIndex: Oe });
  function je(e3) {
    de.value.clear(), U(e3, (e4) => {
      de.value.set(e4.vNode, e4.props);
    });
  }
  function Be(e3) {
    var _a;
    ne2.value && ((_a = H(ne2, ["value", e3 ? "show" : "hide"])) == null ? void 0 : _a(), M2.filterable && function(e4) {
      var _a2;
      M2.filterable && (e4 ? (re.selectedOption && (re.inputValue = ""), Le()) : re.inputValue = ((_a2 = re.selectedOption) == null ? void 0 : _a2.label) || "");
    }(e3), se.value = e3, O2("visible-change", e3), re.highlightedIndex = -1);
  }
  function De() {
    pe.value || Be(!se.value);
  }
  function Fe(e3) {
    return T(M2.options, (l3) => l3.value === e3);
  }
  function Ne(e3) {
    me.value && I(() => be(new FocusEvent("focus", e3)));
  }
  function Re(e3) {
    var _a;
    e3.disabled || (re.inputValue = e3.label, re.selectedOption = e3, U(["change", "update:modelValue"], (l3) => O2(l3, e3.value)), Be(false), (_a = ie2.value) == null ? void 0 : _a.focus());
  }
  function Ce() {
    const e3 = Fe(M2.modelValue);
    e3 && (re.inputValue = e3.label, re.selectedOption = e3);
  }
  function He() {
    var _a;
    (_a = ie2.value) == null ? void 0 : _a.clear(), re.inputValue = "", re.selectedOption = null, O2("clear"), U(["change", "update:modelValue"], (e3) => O2(e3, "")), he == null ? void 0 : he.clearValidate();
  }
  async function We(e3, l3) {
    if (!e3 || !G(e3)) return;
    let a2;
    re.loading = true;
    try {
      a2 = await e3(l3);
    } catch (e4) {
      return w(e4), w(oe, "callRemoteMethod error"), a2 = [], Promise.reject(e4);
    } finally {
      re.loading = false;
    }
    return a2;
  }
  function $e(e3) {
    var _a;
    Ee.has(e3.key) && ((_a = Ee.get(e3.key)) == null ? void 0 : _a(e3));
  }
  return h(() => M2.options, (e3) => {
    ue.value = e3 ?? [];
  }), h(() => Ie.value, (e3) => je(e3), { immediate: true }), h(() => M2.modelValue, (e3, l3) => {
    e3 !== l3 && (he == null ? void 0 : he.validate("change").catch((e4) => w(e4))), Ce();
  }), v(() => {
    Ce();
  }), f(X, { handleSelect: Re, selectStates: re, renderLabel: function(e3) {
    return G(M2.renderLabel) ? M2.renderLabel(e3) : e3.label;
  }, highlightedLine: ye }), l2({ focus: function() {
    var _a;
    (_a = ie2.value) == null ? void 0 : _a.focus();
  }, blur: function() {
    Ne();
  } }), (e3, l3) => (o(), t("div", { ref_key: "selectRef", ref: Z2, class: i(["er-select", { "is-disabled": d(pe) }]), onClick: n(De, ["stop"]), onMouseenter: l3[2] || (l3[2] = (e4) => re.mouseHover = true), onMouseleave: l3[3] || (l3[3] = (e4) => re.mouseHover = false) }, [u(D, { ref_key: "tooltipRef", ref: ne2, placement: "bottom-start", "popper-options": d(Y), onClickOutside: l3[1] || (l3[1] = (e4) => Be(false)), manual: "" }, { default: m(() => [V("div", { ref_key: "inputWrapperRef", ref: fe }, [u(N, { ref_key: "inputRef", ref: ie2, modelValue: re.inputValue, "onUpdate:modelValue": l3[0] || (l3[0] = (e4) => re.inputValue = e4), id: d(ve), disabled: d(pe), placeholder: e3.filterable ? xe.value : e3.placeholder, readonly: !e3.filterable || !se.value, onFocus: d(ge), onBlur: d(be), onInput: d(Le), onKeydown: $e }, { suffix: m(() => [Se.value ? (o(), y(F, { key: 0, icon: "circle-xmark", class: "er-input__clear", onClick: n(He, ["stop"]), onMousedown: n(d(q), ["prevent"]) }, null, 8, ["onMousedown"])) : (o(), y(F, { key: 1, class: i(["header-angle", { "is-active": se.value }]), icon: "angle-down" }, null, 8, ["class"]))]), _: 1 }, 8, ["modelValue", "id", "disabled", "placeholder", "readonly", "onFocus", "onBlur", "onInput"])], 512)]), content: m(() => [re.loading ? (o(), t("div", le, [u(F, { icon: "spinner", spin: "" })])) : e3.filterable && we.value ? (o(), t("div", ae, " No data ")) : (o(), t("ul", te, [Ve.value ? (o(true), t(b, { key: 1 }, g(de.value, ([e4, l4]) => (o(), y(d(k), { key: l4.value, vNode: e4 }, null, 8, ["vNode"]))), 128)) : (o(true), t(b, { key: 0 }, g(ue.value, (e4) => (o(), y(ee, _({ key: e4.value, ref_for: true }, e4), null, 16))), 128))]))]), _: 1 }, 8, ["popper-options"])], 34));
} }), [["__scopeId", "data-v-76779018"]])), ie = O(ee);
export {
  ne as E,
  ie as a
};
