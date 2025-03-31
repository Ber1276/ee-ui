import { defineComponent as e, reactive as r, toRefs as t, provide as a, createElementBlock as l, openBlock as s, renderSlot as o, useCssVars as i, computed as u, useSlots as n, inject as d, ref as c, onMounted as v, onUnmounted as p, watchEffect as f, watch as m, normalizeClass as b, unref as h, createBlock as g, createCommentVNode as y, createElementVNode as I, resolveDynamicComponent as q, withCtx as F, createTextVNode as _, toDisplayString as k, nextTick as x, toRef as j } from "vue";
import { u as w, b as P } from "./hooks-C6skdo66.js";
import { s as $, b as B, f as W, c as A, i as M, d as S, e as E, g as V, h as C, j as O, k as R, l as z, p as D, q as G } from "./vendor-dolnLWnX.js";
import H from "async-validator";
import { _ as J, w as K } from "./utils-iRl-pZ4j.js";
const L = Symbol("formContext"), N = Symbol("formItemContext"), Q = { class: "er-form" }, T = e({ name: "ErForm", __name: "Form", props: { model: {}, rules: {}, disabled: { type: Boolean }, labelWidth: {}, labelPosition: { default: "right" }, labelSuffix: {}, showMessage: { type: Boolean, default: true }, hideRequiredAsterisk: { type: Boolean, default: false }, requiredAsteriskPosition: { default: "left" } }, emits: ["validate"], setup(e2, { expose: i2, emit: u2 }) {
  const n2 = u2, d2 = [], c2 = async function(e3 = [], r2) {
    const t2 = $(e3) ? B(d2, (r3) => A(e3, r3.prop)) : d2;
    try {
      const e4 = await async function(e5 = []) {
        let r3 = {};
        for (const t3 of e5) try {
          await t3.validate("");
        } catch (e6) {
          r3 = { ...r3, ...e6 };
        }
        return !$(Object.keys(r3)) || Promise.reject(r3);
      }(t2);
      return true === e4 && (r2 == null ? void 0 : r2(e4)), e4;
    } catch (e4) {
      if (e4 instanceof Error) throw e4;
      const t3 = e4;
      return r2 == null ? void 0 : r2(false, t3), Promise.reject(t3);
    }
  };
  function v2(e3, r2) {
    return $(r2) ? B(e3, (e4) => A(r2, e4.prop)) : e3;
  }
  const p2 = r({ ...t(e2), emits: n2, addField: function(e3) {
    e3.prop && d2.push(e3);
  }, removeField: function(e3) {
    e3.prop && d2.splice(d2.indexOf(e3), 1);
  } });
  return a(L, p2), i2({ validate: async function(e3) {
    return c2([], e3);
  }, validateField: c2, resetFields: function(e3 = []) {
    W(v2(d2, e3), (e4) => e4.resetField());
  }, clearValidate: function(e3 = []) {
    W(v2(d2, e3), (e4) => e4.clearValidate());
  } }), (e3, r2) => (s(), l("form", Q, [o(e3.$slots, "default")]));
} }), U = { class: "er-form-item__content" }, X = { key: 0, class: "er-form-item__error-msg" }, Y = J(e({ name: "ErFormItem", __name: "FormItem", props: { prop: {}, label: {}, for: {}, labelWidth: {}, disabled: { type: Boolean }, required: { type: Boolean, default: void 0 }, showMessage: { type: Boolean, default: true }, error: {}, rules: {} }, setup(e2, { expose: j2 }) {
  i((e3) => ({ "1d77802b": ne.value }));
  const P2 = e2, W2 = n(), J2 = d(L), K2 = w().value, Q2 = c("init"), T2 = c(""), Y2 = c([]), Z2 = (e3) => e3 && P2.prop && !M(C(e3, P2.prop)) ? C(e3, P2.prop) : null, ee2 = u(() => !(!P2.label && !W2.label)), re2 = u(() => P2.for || (Y2.value.length ? Y2.value[0] : "")), te2 = u(() => `${P2.label ?? ""}${(J2 == null ? void 0 : J2.labelSuffix) ?? ""}`), ae2 = u(() => {
    const e3 = J2 == null ? void 0 : J2.model;
    return Z2(e3);
  }), le = u(() => {
    const { required: e3 } = P2, r2 = [];
    P2.rules && r2.push(...P2.rules);
    const t2 = J2 == null ? void 0 : J2.rules;
    if (t2 && P2.prop) {
      const e4 = Z2(t2);
      e4 && r2.push(...e4);
    }
    if (!M(e3)) {
      const t3 = B(S(r2, (e4, r3) => [e4, r3]), (e4) => A(D(e4[0]), "required"));
      if ($(t3)) for (const a2 of t3) {
        const [t4, l2] = a2;
        t4.required !== e3 && (r2[l2] = { ...t4, required: e3 });
      }
      else r2.push({ required: e3 });
    }
    return r2;
  }), se = u(() => $(le.value) > 0), oe = u(() => !(J2 == null ? void 0 : J2.hideRequiredAsterisk) && (E(le.value, "required") || (P2 == null ? void 0 : P2.required))), ie = u(() => (J2 == null ? void 0 : J2.disabled) || (P2 == null ? void 0 : P2.disabled)), ue = u(() => P2.prop ? V(P2.prop) ? P2.prop : P2.prop.join(".") : ""), ne = u(() => {
    const e3 = (e4) => O(e4) ? `${e4}px` : R(e4, "px") ? e4 : `${e4}px`;
    return P2.labelWidth ? e3(P2.labelWidth) : (J2 == null ? void 0 : J2.labelWidth) ? e3(J2.labelWidth) : "150px";
  });
  let de = null, ce = false;
  const ve = async function(e3, r2) {
    if (ce || !P2.prop || ie.value) return false;
    if (!se.value) return r2 == null ? void 0 : r2(false), false;
    const t2 = function(e4) {
      const r3 = le.value;
      return r3 ? B(r3, (r4) => !r4.trigger || !e4 || (G(r4.trigger) ? r4.trigger.includes(e4) : r4.trigger === e4)).map(({ trigger: e5, ...r4 }) => r4) : [];
    }(e3);
    return $(t2) ? (Q2.value = "validating", async function(e4) {
      const r3 = ue.value;
      return new H({ [r3]: e4 }).validate({ [r3]: ae2.value }, { firstFields: true }).then(() => (Q2.value = "success", J2 == null ? void 0 : J2.emits("validate", P2, true, ""), true)).catch((e5) => {
        const { errors: r4 } = e5;
        return Q2.value = "error", T2.value = r4 && $(r4) > 0 ? r4[0].message ?? "" : "", J2 == null ? void 0 : J2.emits("validate", P2, false, T2.value), Promise.reject(e5);
      });
    }(t2).then(() => (r2 == null ? void 0 : r2(true), true)).catch((e4) => {
      const { fields: t3 } = e4;
      return r2 == null ? void 0 : r2(false, t3), Promise.reject(t3);
    })) : (r2 == null ? void 0 : r2(true), true);
  }, pe = function() {
    const e3 = J2 == null ? void 0 : J2.model;
    e3 && ue.value && !M(C(e3, ue.value)) && (ce = true, e3[ue.value] = z(de)), x(() => fe());
  }, fe = function() {
    Q2.value = "init", T2.value = "", ce = false;
  }, me = r({ ...t(P2), disabled: ie.value, validate: ve, resetField: pe, clearValidate: fe, addInputId: function(e3) {
    A(Y2.value, e3) || Y2.value.push(e3);
  }, removeInputId: function(e3) {
    Y2.value = B(Y2.value, (r2) => r2 != e3);
  } });
  return v(() => {
    P2.prop && (J2 == null ? void 0 : J2.addField(me), de = ae2.value);
  }), p(() => {
    P2.prop && (J2 == null ? void 0 : J2.removeField(me));
  }), f(() => me.disabled = ie.value), m(() => P2.error, (e3) => {
    T2.value = e3 || "", Q2.value = e3 ? "error" : "init";
  }, { immediate: true }), a(N, me), j2({ validateMessage: T2, validateStatus: Q2, validate: ve, resetField: pe, clearValidate: fe }), (e3, r2) => {
    var _a, _b, _c, _d;
    return s(), l("div", { class: b(["er-form-item", { "is-error": "error" === Q2.value, "is-disabled": ie.value, "is-required": oe.value, "asterisk-left": "left" === ((_a = h(J2)) == null ? void 0 : _a.requiredAsteriskPosition), "asterisk-right": "right" === ((_b = h(J2)) == null ? void 0 : _b.requiredAsteriskPosition) }]) }, [ee2.value ? (s(), g(q(re2.value ? "label" : "div"), { key: 0, class: b(["er-form-item__label", `position-${((_c = h(J2)) == null ? void 0 : _c.labelPosition) ?? "right"}`]), id: h(K2), for: re2.value }, { default: F(() => [o(e3.$slots, "label", { label: te2.value }, () => [_(k(te2.value), 1)], true)]), _: 3 }, 8, ["class", "id", "for"])) : y("", true), I("div", U, [o(e3.$slots, "default", { validate: ve }, void 0, true), "error" === Q2.value ? (s(), l("div", X, [((_d = h(J2)) == null ? void 0 : _d.showMessage) && e3.showMessage ? o(e3.$slots, "error", { key: 0, error: T2.value }, () => [_(k(T2.value), 1)], true) : y("", true)])) : y("", true)])], 2);
  };
} }), [["__scopeId", "data-v-089337a9"]]);
function Z() {
  return { form: d(L, void 0), formItem: d(N, void 0) };
}
function ee(e2) {
  const r2 = P("disabled"), t2 = d(L, void 0), a2 = d(N, void 0);
  return u(() => r2.value || h(e2) || (t2 == null ? void 0 : t2.disabled) || (a2 == null ? void 0 : a2.disabled) || false);
}
function re(e2, r2) {
  const t2 = c("");
  let a2;
  return v(() => {
    a2 = m(j(() => e2.id), (e3) => {
      const a3 = e3 ?? w().value;
      a3 !== t2.value && (t2.value && (r2 == null ? void 0 : r2.removeInputId(t2.value)), r2 == null ? void 0 : r2.addInputId(a3), t2.value = a3);
    }, { immediate: true });
  }), p(() => {
    a2 && a2(), t2.value && (r2 == null ? void 0 : r2.removeInputId(t2.value));
  }), { inputId: t2 };
}
const te = K(T), ae = K(Y);
export {
  te as E,
  Z as a,
  re as b,
  ae as c,
  ee as u
};
