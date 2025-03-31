import { onMounted as e, watch as t, onUnmounted as a, defineComponent as o, ref as l, computed as i, watchEffect as n, createElementBlock as r, openBlock as u, mergeProps as s, toHandlers as v, renderSlot as c, createVNode as p, Transition as f, withCtx as d, createCommentVNode as m, createElementVNode as g, createTextVNode as h, toDisplayString as _ } from "vue";
import { createPopper as k } from "@popperjs/core";
import { h as T } from "./hooks-C6skdo66.js";
import { H as y, f as b, E as w, A as x } from "./vendor-dolnLWnX.js";
import { _ as E, w as j } from "./utils-iRl-pZ4j.js";
const B = E(o({ name: "ErTooltip", __name: "Tooltip", props: { virtualRef: {}, virtualTriggering: { type: Boolean }, content: {}, trigger: { default: "hover" }, placement: { default: "bottom" }, manual: { type: Boolean }, disabled: { type: Boolean }, popperOptions: {}, transition: { default: "fade" }, showTimeout: { default: 0 }, hideTimeout: { default: 200 } }, emits: ["visible-change", "click-outside"], setup(o2, { expose: E2, emit: j2 }) {
  const B2 = o2, L2 = j2, N = l(false), R = l({}), $ = l({}), A = l({}), M = l(), O = l(), D = l(), H = i(() => {
    var _a;
    return B2.virtualTriggering ? ((_a = B2.virtualRef) == null ? void 0 : _a.ref) ?? B2.virtualRef ?? D.value : D.value;
  }), I = i(() => ({ placement: B2.placement, modifiers: [{ name: "offset", options: { offset: [0, 9] } }], ...B2.popperOptions })), q = i(() => "hover" === B2.trigger ? B2.showTimeout : 0), z = i(() => "hover" === B2.trigger ? B2.hideTimeout : 0), C = /* @__PURE__ */ new Map();
  let F, G, J;
  function K() {
    G == null ? void 0 : G.cancel(), F == null ? void 0 : F();
  }
  function P() {
    F == null ? void 0 : F.cancel(), G == null ? void 0 : G();
  }
  function Q() {
    N.value ? P() : K();
  }
  function S(e2) {
    B2.disabled || (N.value = e2, L2("visible-change", e2));
  }
  function U() {
    var _a;
    B2.disabled || B2.manual || ((_a = C.get(B2.trigger)) == null ? void 0 : _a());
  }
  function V() {
    J == null ? void 0 : J.destroy(), J = null;
  }
  function W() {
    R.value = {}, $.value = {}, A.value = {}, U();
  }
  C.set("hover", () => {
    R.value.mouseenter = K, $.value.mouseleave = P, A.value.mouseenter = K;
  }), C.set("click", () => {
    R.value.click = Q;
  }), C.set("contextmenu", () => {
    R.value.contextmenu = (e2) => {
      e2.preventDefault(), K();
    };
  }), B2.manual || U();
  const X = K;
  return T(M, () => {
    L2("click-outside"), "hover" === B2.trigger || B2.manual || N.value && P();
  }), t(N, (e2) => {
    e2 && H.value && O.value && (J = k(H.value, O.value, I.value));
  }, { flush: "post" }), t(() => B2.manual, (e2) => {
    if (e2) return R.value = {}, $.value = {}, void (A.value = {});
    U();
  }), t(() => B2.trigger, (e2, t2) => {
    e2 !== t2 && W();
  }), t(() => B2.disabled, (e2, t2) => {
    e2 !== t2 && (F == null ? void 0 : F.cancel(), N.value = false, L2("visible-change", false), W());
  }), n(() => {
    F = w(x(S, null, true), q.value), G = w(x(S, null, false), z.value);
  }), function(o3, l2, i2) {
    let n2, r2;
    const u2 = /* @__PURE__ */ new Map(), s2 = () => {
      const e2 = l2.value;
      y(e2) && b(i2.value, (t2, a2) => {
        u2.set(a2, t2), e2 == null ? void 0 : e2.addEventListener(a2, t2);
      });
    };
    e(() => {
      r2 = t(l2, () => o3.virtualTriggering && s2(), { immediate: true }), n2 = t(i2, () => {
        o3.virtualTriggering && ((() => {
          const e2 = l2.value;
          y(e2) && b(["mouseenter", "click", "contextmenu"], (t2) => u2.has(t2) && (e2 == null ? void 0 : e2.removeEventListener(t2, u2.get(t2))));
        })(), s2(), F == null ? void 0 : F.cancel(), S(false));
      }, { deep: true });
    }), a(() => {
      r2 == null ? void 0 : r2(), n2 == null ? void 0 : n2();
    });
  }(B2, H, R), a(() => {
    V();
  }), E2({ show: X, hide: function() {
    F == null ? void 0 : F.cancel(), S(false);
  } }), (e2, t2) => (u(), r("div", s({ class: "er-tooltip", ref_key: "containerNode", ref: M }, v($.value, true)), [e2.virtualTriggering ? c(e2.$slots, "default", { key: 1 }, void 0, true) : (u(), r("div", s({ key: 0, class: "er-tooltip__trigger", ref_key: "_triggerNode", ref: D }, v(R.value, true)), [c(e2.$slots, "default", {}, void 0, true)], 16)), p(f, { name: e2.transition, onAfterLeave: V }, { default: d(() => [N.value ? (u(), r("div", s({ key: 0, class: "er-tooltip__popper", ref_key: "popperNode", ref: O }, v(A.value, true)), [c(e2.$slots, "content", {}, () => [h(_(e2.content), 1)], true), t2[0] || (t2[0] = g("div", { id: "arrow", "data-popper-arrow": "" }, null, -1))], 16)) : m("", true)]), _: 3 }, 8, ["name"])], 16));
} }), [["__scopeId", "data-v-bfe020fd"]]), L = j(B);
export {
  L as E,
  B as T
};
