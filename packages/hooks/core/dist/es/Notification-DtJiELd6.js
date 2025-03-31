import { defineComponent as t, ref as o, computed as e, onMounted as n, createBlock as s, openBlock as i, Transition as a, withCtx as l, withDirectives as r, createElementVNode as c, normalizeStyle as f, normalizeClass as u, createCommentVNode as d, createElementBlock as p, toDisplayString as m, renderSlot as v, unref as h, createVNode as g, withModifiers as y, vShow as _, isVNode as x, h as C, render as k, shallowReactive as b } from "vue";
import { e as w, d as I, u as E } from "./hooks-C6skdo66.js";
import { t as N, R as O, _ as j, a as z } from "./utils-iRl-pZ4j.js";
import { E as B } from "./Icon-DYFp5whK.js";
import { A as $, g as A, u as D, f as M, B as R, h as L, w as W } from "./vendor-dolnLWnX.js";
const H = ["info", "success", "warning", "danger"], T = ["top-right", "top-left", "bottom-right", "bottom-left"], Z = { class: "er-notification__text" }, q = { class: "er-notification__title" }, F = { class: "er-notification__content" }, G = { key: 1, class: "er-notification__close" }, J = j(t({ __name: "Notification", props: { title: {}, id: {}, zIndex: {}, position: {}, type: { default: "info" }, message: {}, duration: { default: 3e3 }, showClose: { type: Boolean, default: true }, offset: { default: 20 }, transitionName: { default: "fade" }, icon: {}, onClick: {}, onClose: {}, onDestory: {} }, setup(t2, { expose: x2 }) {
  const C2 = t2, k2 = o(false), b2 = o(), I2 = o(0), { topOffset: E2, bottomOffset: j2 } = w({ getLastBottomOffset: $(X, C2), offset: C2.offset, boxHeight: I2 }), z2 = e(() => A(C2.icon) ? C2.icon : N.get(C2.type)), M2 = e(() => C2.position.endsWith("right") ? "right" : "left"), R2 = e(() => C2.position.startsWith("top") ? "top" : "bottom"), L2 = e(() => ({ [R2.value]: E2.value + "px", zIndex: C2.zIndex }));
  let W2;
  function H2() {
    0 !== C2.duration && (W2 = D(J2, C2.duration));
  }
  function T2() {
    clearTimeout(W2);
  }
  function J2() {
    var _a;
    k2.value = false, (_a = C2 == null ? void 0 : C2.onClose) == null ? void 0 : _a.call(C2);
  }
  return n(() => {
    k2.value = true, H2();
  }), x2({ close: J2, bottomOffset: j2 }), (t3, o2) => (i(), s(a, { name: `er-notification-${t3.transitionName}`, onAfterLeave: o2[1] || (o2[1] = (o3) => !k2.value && t3.onDestory()), onEnter: o2[2] || (o2[2] = (t4) => I2.value = b2.value.getBoundingClientRect().height) }, { default: l(() => [r(c("div", { ref_key: "notifyRef", ref: b2, class: u(["er-notification", { [`er-notification--${t3.type}`]: t3.type, "show-close": t3.showClose, [M2.value]: true }]), style: f(L2.value), role: "alert", onClick: o2[0] || (o2[0] = (...o3) => t3.onClick && t3.onClick(...o3)), onMouseenter: T2, onMouseleave: H2 }, [z2.value ? (i(), s(B, { key: 0, icon: z2.value, class: "er-notification__icon" }, null, 8, ["icon"])) : d("", true), c("div", Z, [c("div", q, m(t3.title), 1), c("div", F, [v(t3.$slots, "default", {}, () => [t3.message ? (i(), s(h(O), { key: 0, vNode: t3.message }, null, 8, ["vNode"])) : d("", true)], true)])]), t3.showClose ? (i(), p("div", G, [g(B, { icon: "xmark", onClick: y(J2, ["stop"]) })])) : d("", true)], 38), [[_, k2.value]])]), _: 3 }, 8, ["name"]));
} }), [["__scopeId", "data-v-59ea9afe"]]), { nextZIndex: K } = I(), P = { type: "info", position: "top-right", duration: 3e3, offset: 20, transitionName: "fade", showClose: true }, Q = /* @__PURE__ */ new Map();
M(T, (t2) => Q.set(t2, b([])));
const S = (t2) => Q.get(t2);
function U(t2) {
  const o2 = !t2 || x(t2) || A(t2) ? { message: t2 } : t2;
  return { ...P, ...o2 };
}
const V = function(t2 = {}) {
  return function(t3) {
    const o2 = E().value, e2 = document.createElement("div"), n2 = S(t3.position || "top-right"), s2 = { ...t3, id: o2, zIndex: K(), onDestory: () => {
      const t4 = R(n2, { id: o2 });
      -1 !== t4 && (n2.splice(t4, 1), k(null, e2));
    } }, i2 = C(J, s2);
    k(i2, e2), document.body.appendChild(e2.firstElementChild);
    const a2 = i2.component, l2 = { close: () => {
      var _a;
      return (_a = a2.exposed) == null ? void 0 : _a.close();
    } }, r2 = { props: s2, id: o2, vm: a2, vnode: i2, handler: l2 };
    return n2.push(r2), r2;
  }(U(t2)).handler;
};
function X() {
  const t2 = S(this.position || "top-right"), o2 = R(t2, { id: this.id });
  return o2 <= 0 ? 0 : L(t2, [o2 - 1, "vm", "exposed", "bottomOffset", "value"]);
}
M(H, (t2) => {
  W(V, t2, (o2) => {
    const e2 = U(o2);
    return V({ ...e2, type: t2 });
  });
}), V.closeAll = function(t2) {
  Q.forEach((o2) => {
    M(o2, (o3) => {
      t2 ? o3.props.type === t2 && o3.handler.close() : o3.handler.close();
    });
  });
};
const Y = z(V, "$notify");
export {
  Y as E,
  T as a,
  H as n
};
