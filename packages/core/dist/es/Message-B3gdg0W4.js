import { defineComponent as e, ref as o, reactive as t, computed as n, watch as s, nextTick as a, createBlock as l, openBlock as r, Transition as c, withCtx as i, withDirectives as u, createVNode as d, createElementVNode as p, withModifiers as f, normalizeClass as m, createElementBlock as y, createCommentVNode as g, unref as v, createTextVNode as b, toDisplayString as x, renderSlot as _, resolveDynamicComponent as B, withKeys as h, vShow as C, isVNode as k, render as w, onMounted as I, normalizeStyle as T, shallowReactive as E, h as z } from "vue";
import { E as $ } from "./Overlay-RMGmcje1.js";
import { E as M } from "./Icon-DYFp5whK.js";
import { b as O } from "./Button-Pl1Yf8YQ.js";
import { E as j } from "./Input-BSUh5uv-.js";
import { u as A, d as P, e as L, f as V } from "./hooks-C6skdo66.js";
import { t as D, _ as R, R as N, a as K } from "./utils-iRl-pZ4j.js";
import { i as S, v as Z, f as H, w as U, g as q, x as F, y as G, z as J, A as Q, u as W, B as X, h as Y } from "./vendor-dolnLWnX.js";
const ee = { class: "er-message-box__title" }, oe = { class: "er-message-box__content" }, te = { key: 1, class: "er-message-box__message" }, ne = { class: "er-message-box__input" }, se = { class: "er-message-box__footer" }, ae = e({ name: "ErMessageBox", inheritAttrs: false, __name: "MessageBox", props: { visible: {}, doClose: {}, doAction: {}, destroy: {}, title: {}, message: {}, type: {}, boxType: { default: "" }, icon: {}, callback: {}, showClose: { type: Boolean, default: true }, showInput: { type: Boolean }, showCancelButton: { type: Boolean }, showConfirmButton: { type: Boolean, default: true }, cancelButtonText: { default: "Cancel" }, confirmButtonText: { default: "Ok" }, cancelButtonLoading: { type: Boolean }, confirmButtonLoading: { type: Boolean }, cancelButtonDisabled: { type: Boolean }, confirmButtonDisabled: { type: Boolean }, cancelButtonType: {}, confirmButtonType: { default: "primary" }, roundButton: { type: Boolean, default: false }, center: { type: Boolean }, lockScroll: { type: Boolean, default: true }, closeOnClickModal: { type: Boolean, default: true }, inputPlaceholder: { default: "Please input..." }, inputValue: { default: "" }, inputType: {}, buttonSize: {}, beforeClose: {} }, setup(e2) {
  const k2 = e2, { doAction: w2 } = k2, I2 = o(), T2 = o(), E2 = A(), { nextZIndex: z2 } = P(), L2 = t({ ...k2, zIndex: z2() }), V2 = n(() => !!L2.message), R2 = n(() => L2.icon ?? D.get(L2.type ?? ""));
  function N2() {
    k2.closeOnClickModal && H2("close");
  }
  function K2(e3) {
    if ("textarea" !== L2.inputType) return e3.preventDefault(), H2("confirm");
  }
  function H2(e3) {
    Z(k2.beforeClose) ? k2.beforeClose(e3, L2, () => w2(e3, L2.inputValue)) : w2(e3, L2.inputValue);
  }
  function U2() {
    H2("close");
  }
  return s(() => {
    var _a;
    return (_a = k2.visible) == null ? void 0 : _a.value;
  }, (e3) => {
    e3 && (L2.zIndex = z2()), "prompt" === k2.boxType && e3 && a(() => {
      T2.value && T2.value.focus();
    });
  }), (e3, o2) => (r(), l(c, { name: "fade-in-linear", onAfterLeave: e3.destroy }, { default: i(() => [u(d($, { "z-index": L2.zIndex, mask: "" }, { default: i(() => [p("div", { role: "dialog", class: "er-overlay-message-box", onClick: N2 }, [p("div", { ref: "rootRef", class: m(["er-message-box", { "is-center": L2.center }]), onClick: o2[5] || (o2[5] = f(() => {
  }, ["stop"])) }, [v(S)(L2.title) ? g("", true) : (r(), y("div", { key: 0, ref_key: "headerRef", ref: I2, class: m(["er-message-box__header", { "show-close": L2.showClose }]) }, [p("div", ee, [R2.value && L2.center ? (r(), l(M, { key: 0, class: m({ [`er-icon-${L2.type}`]: L2.type }), icon: R2.value }, null, 8, ["class", "icon"])) : g("", true), b(" " + x(L2.title), 1)]), e3.showClose ? (r(), y("button", { key: 0, class: "er-message-box__header-btn", onClick: f(U2, ["stop"]) }, [d(M, { icon: "xmark" })])) : g("", true)], 2)), p("div", oe, [R2.value && !L2.center && V2.value ? (r(), l(M, { key: 0, class: m({ [`er-icon-${L2.type}`]: L2.type }), icon: R2.value }, null, 8, ["class", "icon"])) : g("", true), V2.value ? (r(), y("div", te, [_(e3.$slots, "default", {}, () => [(r(), l(B(L2.showInput ? "label" : "p"), { for: L2.showInput ? v(E2) : void 0 }, { default: i(() => [b(x(L2.message), 1)]), _: 1 }, 8, ["for"]))], true)])) : g("", true)]), u(p("div", ne, [d(j, { modelValue: L2.inputValue, "onUpdate:modelValue": o2[0] || (o2[0] = (e4) => L2.inputValue = e4), ref_key: "inputRef", ref: T2, placeholder: L2.inputPlaceholder, type: L2.inputType, onKeyup: h(K2, ["enter"]) }, null, 8, ["modelValue", "placeholder", "type"])], 512), [[C, L2.showInput]]), p("div", se, [L2.showCancelButton ? (r(), l(O, { key: 0, class: "er-message-box__footer-btn er-message-box__cancel-btn", type: L2.cancelButtonType, round: L2.roundButton, loading: L2.cancelButtonLoading, onClick: o2[1] || (o2[1] = (e4) => H2("cancel")), onKeydown: o2[2] || (o2[2] = h(f((e4) => H2("cancel"), ["prevent"]), ["enter"])) }, { default: i(() => [b(x(L2.cancelButtonText), 1)]), _: 1 }, 8, ["type", "round", "loading"])) : g("", true), u(d(O, { class: "er-message-box__footer-btn er-message-box__confirm-btn", type: L2.confirmButtonType ?? "primary", round: L2.roundButton, loading: L2.confirmButtonLoading, onClick: o2[3] || (o2[3] = (e4) => H2("confirm")), onKeydown: o2[4] || (o2[4] = h(f((e4) => H2("confirm"), ["prevent"]), ["enter"])) }, { default: i(() => [b(x(L2.confirmButtonText), 1)]), _: 1 }, 8, ["type", "round", "loading"]), [[C, L2.showConfirmButton]])])], 2)])]), _: 3 }, 8, ["z-index"]), [[C, e3.visible.value]])]), _: 3 }, 8, ["onAfterLeave"]));
} }), le = R(ae, [["__scopeId", "data-v-58dfeb62"]]), re = /* @__PURE__ */ new Map();
function ce(e2) {
  let t2;
  return q(e2) || k(e2) ? e2 = { message: e2 } : t2 = e2.callback, new Promise((n2, s2) => {
    const l2 = function(e3) {
      const t3 = document.createElement("div"), n3 = function(e4, t4) {
        const n4 = o(false), s4 = Z(e4 == null ? void 0 : e4.message) || k(e4 == null ? void 0 : e4.message), a2 = d(le, { ...e4, visible: n4 }, s4 ? { default: ((e5) => Z(e5) ? e5 : () => e5)(e4.message) } : void 0);
        return w(a2, t4), document.body.appendChild(t4.firstElementChild), a2.component;
      }({ ...e3, doClose: () => {
        s3.visible.value = false;
      }, doAction: (o2, t4) => {
        const n4 = re.get(s3);
        let l3;
        a(() => s3.doClose()), l3 = e3.showInput ? { value: t4, action: o2 } : o2, e3.callback ? e3.callback(l3) : "cancel" !== o2 && "close" !== o2 ? n4 == null ? void 0 : n4.resolve(l3) : n4 == null ? void 0 : n4.reject(o2);
      }, destroy: () => {
        w(null, t3), re.delete(s3);
      } }, t3), s3 = n3 == null ? void 0 : n3.proxy;
      return s3.visible.value = true, s3;
    }(e2);
    re.set(l2, { options: e2, callback: t2, resolve: n2, reject: s2 });
  });
}
const ie = { alert: { closeOnClickModal: false }, confirm: { showCancelButton: true }, prompt: { showCancelButton: true, showInput: true } };
H(["alert", "confirm", "prompt"], (e2) => {
  return U(ce, e2, (o2 = e2, (e3, t2, n2) => {
    let s2 = "";
    return G(t2) ? (n2 = t2, s2 = "") : s2 = J(t2) ? "" : t2, ce(F({ title: s2, message: e3, type: "", boxType: o2, ...ie[o2] }, n2));
  }));
  var o2;
}), U(ce, "close", () => {
  re.forEach((e2, o2) => {
    o2.doClose();
  }), re.clear();
});
const ue = ["info", "success", "warning", "danger", "error"], de = ce;
U(de, "install", (e2) => {
  e2.config.globalProperties.$msgbox = ce, e2.config.globalProperties.$messageBox = ce, e2.config.globalProperties.$alert = ce.alert, e2.config.globalProperties.$confirm = ce.confirm, e2.config.globalProperties.$prompt = ce.prompt;
});
const pe = { class: "er-message__content" }, fe = { key: 0, class: "er-message__close" }, me = R(e({ name: "ErMessage", __name: "Message", props: { id: {}, message: {}, duration: { default: 3e3 }, showClose: { type: Boolean }, center: { type: Boolean }, type: { default: "info" }, offset: { default: 10 }, zIndex: {}, transitionName: { default: "fade-up" }, onDestory: {} }, setup(e2, { expose: t2 }) {
  const a2 = e2, b2 = o(false), x2 = o(), B2 = n(() => D.get(a2.type) ?? "circle-info"), h2 = o(0), { topOffset: k2, bottomOffset: w2 } = L({ getLastBottomOffset: Q(_e, a2), offset: a2.offset, boxHeight: h2 }), E2 = n(() => ({ top: k2.value + "px", zIndex: a2.zIndex }));
  let z2;
  function $2() {
    0 !== a2.duration && (z2 = W(j2, a2.duration));
  }
  function O2() {
    clearTimeout(z2);
  }
  function j2() {
    b2.value = false;
  }
  return I(() => {
    b2.value = true, $2();
  }), V(document, "keydown", (e3) => {
    const { code: o2 } = e3;
    "Escape" === o2 && j2();
  }), s(b2, (e3) => {
    e3 || (h2.value = -a2.offset);
  }), t2({ bottomOffset: w2, close: j2 }), (e3, o2) => (r(), l(c, { name: e3.transitionName, onEnter: o2[0] || (o2[0] = (e4) => h2.value = x2.value.getBoundingClientRect().height), onAfterLeave: o2[1] || (o2[1] = (o3) => !b2.value && e3.onDestory()) }, { default: i(() => [u(p("div", { ref_key: "messageRef", ref: x2, class: m(["er-message", { [`er-message--${e3.type}`]: e3.type, "is-close": e3.showClose, "text-center": e3.center }]), style: T(E2.value), role: "alert", onMouseenter: O2, onMouseleave: $2 }, [d(M, { class: "er-message__icon", icon: B2.value }, null, 8, ["icon"]), p("div", pe, [_(e3.$slots, "default", {}, () => [e3.message ? (r(), l(v(N), { key: 0, vNode: e3.message }, null, 8, ["vNode"])) : g("", true)], true)]), e3.showClose ? (r(), y("div", fe, [d(M, { icon: "xmark", onClick: f(j2, ["stop"]) })])) : g("", true)], 38), [[C, b2.value]])]), _: 3 }, 8, ["name"]));
} }), [["__scopeId", "data-v-7b21d1a6"]]), ye = E([]), { nextZIndex: ge } = P(), ve = { type: "info", duration: 3e3, offset: 10, transitionName: "fade-up" };
function be(e2) {
  const o2 = !e2 || k(e2) || q(e2) ? { message: e2 } : e2;
  return { ...ve, ...o2 };
}
const xe = function(e2 = {}) {
  return function(e3) {
    const o2 = A().value, t2 = document.createElement("div"), n2 = { ...e3, id: o2, zIndex: ge(), onDestory: () => {
      const e4 = X(ye, { id: o2 });
      -1 !== e4 && (ye.splice(e4, 1), w(null, t2));
    } }, s2 = z(me, n2);
    w(s2, t2), document.body.appendChild(t2.firstElementChild);
    const a2 = s2.component, l2 = { close: () => a2.exposed.close() }, r2 = { props: n2, id: o2, vm: a2, vnode: s2, handler: l2 };
    return ye.push(r2), r2;
  }(be(e2)).handler;
};
function _e() {
  const e2 = X(ye, { id: this.id });
  return e2 <= 0 ? 0 : Y(ye, [e2 - 1, "vm", "exposed", "bottomOffset", "value"]);
}
H(ue, (e2) => U(xe, e2, (o2) => {
  const t2 = be(o2);
  return xe({ ...t2, type: e2 });
})), xe.closeAll = function(e2) {
  H(ye, (o2) => {
    e2 ? o2.props.type === e2 && o2.handler.close() : o2.handler.close();
  });
};
const Be = K(xe, "$message");
export {
  Be as E,
  de as a,
  ue as m
};
