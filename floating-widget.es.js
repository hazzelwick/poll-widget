import De, { useState as re, useEffect as hr, StrictMode as Er } from "react";
import Rr from "react-dom";
var te = { env: { NODE_ENV: "production" } }, J = { exports: {} }, V = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var je;
function gr() {
  if (je) return V;
  je = 1;
  var f = De, R = Symbol.for("react.element"), g = Symbol.for("react.fragment"), v = Object.prototype.hasOwnProperty, j = f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, T = { key: !0, ref: !0, __self: !0, __source: !0 };
  function P(_, d, S) {
    var p, m = {}, s = null, C = null;
    S !== void 0 && (s = "" + S), d.key !== void 0 && (s = "" + d.key), d.ref !== void 0 && (C = d.ref);
    for (p in d) v.call(d, p) && !T.hasOwnProperty(p) && (m[p] = d[p]);
    if (_ && _.defaultProps) for (p in d = _.defaultProps, d) m[p] === void 0 && (m[p] = d[p]);
    return { $$typeof: R, type: _, key: s, ref: C, props: m, _owner: j.current };
  }
  return V.Fragment = g, V.jsx = P, V.jsxs = P, V;
}
var Y = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var xe;
function yr() {
  return xe || (xe = 1, te.env.NODE_ENV !== "production" && function() {
    var f = De, R = Symbol.for("react.element"), g = Symbol.for("react.portal"), v = Symbol.for("react.fragment"), j = Symbol.for("react.strict_mode"), T = Symbol.for("react.profiler"), P = Symbol.for("react.provider"), _ = Symbol.for("react.context"), d = Symbol.for("react.forward_ref"), S = Symbol.for("react.suspense"), p = Symbol.for("react.suspense_list"), m = Symbol.for("react.memo"), s = Symbol.for("react.lazy"), C = Symbol.for("react.offscreen"), N = Symbol.iterator, B = "@@iterator";
    function Fe(e) {
      if (e === null || typeof e != "object")
        return null;
      var r = N && e[N] || e[B];
      return typeof r == "function" ? r : null;
    }
    var D = f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function h(e) {
      {
        for (var r = arguments.length, t = new Array(r > 1 ? r - 1 : 0), n = 1; n < r; n++)
          t[n - 1] = arguments[n];
        Ae("error", e, t);
      }
    }
    function Ae(e, r, t) {
      {
        var n = D.ReactDebugCurrentFrame, o = n.getStackAddendum();
        o !== "" && (r += "%s", t = t.concat([o]));
        var u = t.map(function(i) {
          return String(i);
        });
        u.unshift("Warning: " + r), Function.prototype.apply.call(console[e], console, u);
      }
    }
    var $e = !1, Ne = !1, Ie = !1, We = !1, Ve = !1, ne;
    ne = Symbol.for("react.module.reference");
    function Ye(e) {
      return !!(typeof e == "string" || typeof e == "function" || e === v || e === T || Ve || e === j || e === S || e === p || We || e === C || $e || Ne || Ie || typeof e == "object" && e !== null && (e.$$typeof === s || e.$$typeof === m || e.$$typeof === P || e.$$typeof === _ || e.$$typeof === d || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      e.$$typeof === ne || e.getModuleId !== void 0));
    }
    function Le(e, r, t) {
      var n = e.displayName;
      if (n)
        return n;
      var o = r.displayName || r.name || "";
      return o !== "" ? t + "(" + o + ")" : t;
    }
    function ae(e) {
      return e.displayName || "Context";
    }
    function x(e) {
      if (e == null)
        return null;
      if (typeof e.tag == "number" && h("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
        return e.displayName || e.name || null;
      if (typeof e == "string")
        return e;
      switch (e) {
        case v:
          return "Fragment";
        case g:
          return "Portal";
        case T:
          return "Profiler";
        case j:
          return "StrictMode";
        case S:
          return "Suspense";
        case p:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case _:
            var r = e;
            return ae(r) + ".Consumer";
          case P:
            var t = e;
            return ae(t._context) + ".Provider";
          case d:
            return Le(e, e.render, "ForwardRef");
          case m:
            var n = e.displayName || null;
            return n !== null ? n : x(e.type) || "Memo";
          case s: {
            var o = e, u = o._payload, i = o._init;
            try {
              return x(i(u));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var w = Object.assign, I = 0, ie, oe, ue, se, le, ce, fe;
    function de() {
    }
    de.__reactDisabledLog = !0;
    function Me() {
      {
        if (I === 0) {
          ie = console.log, oe = console.info, ue = console.warn, se = console.error, le = console.group, ce = console.groupCollapsed, fe = console.groupEnd;
          var e = {
            configurable: !0,
            enumerable: !0,
            value: de,
            writable: !0
          };
          Object.defineProperties(console, {
            info: e,
            log: e,
            warn: e,
            error: e,
            group: e,
            groupCollapsed: e,
            groupEnd: e
          });
        }
        I++;
      }
    }
    function Ue() {
      {
        if (I--, I === 0) {
          var e = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: w({}, e, {
              value: ie
            }),
            info: w({}, e, {
              value: oe
            }),
            warn: w({}, e, {
              value: ue
            }),
            error: w({}, e, {
              value: se
            }),
            group: w({}, e, {
              value: le
            }),
            groupCollapsed: w({}, e, {
              value: ce
            }),
            groupEnd: w({}, e, {
              value: fe
            })
          });
        }
        I < 0 && h("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var K = D.ReactCurrentDispatcher, G;
    function L(e, r, t) {
      {
        if (G === void 0)
          try {
            throw Error();
          } catch (o) {
            var n = o.stack.trim().match(/\n( *(at )?)/);
            G = n && n[1] || "";
          }
        return `
` + G + e;
      }
    }
    var z = !1, M;
    {
      var qe = typeof WeakMap == "function" ? WeakMap : Map;
      M = new qe();
    }
    function ve(e, r) {
      if (!e || z)
        return "";
      {
        var t = M.get(e);
        if (t !== void 0)
          return t;
      }
      var n;
      z = !0;
      var o = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var u;
      u = K.current, K.current = null, Me();
      try {
        if (r) {
          var i = function() {
            throw Error();
          };
          if (Object.defineProperty(i.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(i, []);
            } catch (y) {
              n = y;
            }
            Reflect.construct(e, [], i);
          } else {
            try {
              i.call();
            } catch (y) {
              n = y;
            }
            e.call(i.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (y) {
            n = y;
          }
          e();
        }
      } catch (y) {
        if (y && n && typeof y.stack == "string") {
          for (var a = y.stack.split(`
`), E = n.stack.split(`
`), l = a.length - 1, c = E.length - 1; l >= 1 && c >= 0 && a[l] !== E[c]; )
            c--;
          for (; l >= 1 && c >= 0; l--, c--)
            if (a[l] !== E[c]) {
              if (l !== 1 || c !== 1)
                do
                  if (l--, c--, c < 0 || a[l] !== E[c]) {
                    var b = `
` + a[l].replace(" at new ", " at ");
                    return e.displayName && b.includes("<anonymous>") && (b = b.replace("<anonymous>", e.displayName)), typeof e == "function" && M.set(e, b), b;
                  }
                while (l >= 1 && c >= 0);
              break;
            }
        }
      } finally {
        z = !1, K.current = u, Ue(), Error.prepareStackTrace = o;
      }
      var A = e ? e.displayName || e.name : "", k = A ? L(A) : "";
      return typeof e == "function" && M.set(e, k), k;
    }
    function Je(e, r, t) {
      return ve(e, !1);
    }
    function Be(e) {
      var r = e.prototype;
      return !!(r && r.isReactComponent);
    }
    function U(e, r, t) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return ve(e, Be(e));
      if (typeof e == "string")
        return L(e);
      switch (e) {
        case S:
          return L("Suspense");
        case p:
          return L("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case d:
            return Je(e.render);
          case m:
            return U(e.type, r, t);
          case s: {
            var n = e, o = n._payload, u = n._init;
            try {
              return U(u(o), r, t);
            } catch {
            }
          }
        }
      return "";
    }
    var W = Object.prototype.hasOwnProperty, pe = {}, he = D.ReactDebugCurrentFrame;
    function q(e) {
      if (e) {
        var r = e._owner, t = U(e.type, e._source, r ? r.type : null);
        he.setExtraStackFrame(t);
      } else
        he.setExtraStackFrame(null);
    }
    function Ke(e, r, t, n, o) {
      {
        var u = Function.call.bind(W);
        for (var i in e)
          if (u(e, i)) {
            var a = void 0;
            try {
              if (typeof e[i] != "function") {
                var E = Error((n || "React class") + ": " + t + " type `" + i + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[i] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw E.name = "Invariant Violation", E;
              }
              a = e[i](r, i, n, t, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (l) {
              a = l;
            }
            a && !(a instanceof Error) && (q(o), h("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", n || "React class", t, i, typeof a), q(null)), a instanceof Error && !(a.message in pe) && (pe[a.message] = !0, q(o), h("Failed %s type: %s", t, a.message), q(null));
          }
      }
    }
    var Ge = Array.isArray;
    function X(e) {
      return Ge(e);
    }
    function ze(e) {
      {
        var r = typeof Symbol == "function" && Symbol.toStringTag, t = r && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return t;
      }
    }
    function Xe(e) {
      try {
        return Ee(e), !1;
      } catch {
        return !0;
      }
    }
    function Ee(e) {
      return "" + e;
    }
    function Re(e) {
      if (Xe(e))
        return h("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", ze(e)), Ee(e);
    }
    var ge = D.ReactCurrentOwner, He = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, ye, _e;
    function Ze(e) {
      if (W.call(e, "ref")) {
        var r = Object.getOwnPropertyDescriptor(e, "ref").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.ref !== void 0;
    }
    function Qe(e) {
      if (W.call(e, "key")) {
        var r = Object.getOwnPropertyDescriptor(e, "key").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.key !== void 0;
    }
    function er(e, r) {
      typeof e.ref == "string" && ge.current;
    }
    function rr(e, r) {
      {
        var t = function() {
          ye || (ye = !0, h("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        t.isReactWarning = !0, Object.defineProperty(e, "key", {
          get: t,
          configurable: !0
        });
      }
    }
    function tr(e, r) {
      {
        var t = function() {
          _e || (_e = !0, h("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        t.isReactWarning = !0, Object.defineProperty(e, "ref", {
          get: t,
          configurable: !0
        });
      }
    }
    var nr = function(e, r, t, n, o, u, i) {
      var a = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: R,
        // Built-in properties that belong on the element
        type: e,
        key: r,
        ref: t,
        props: i,
        // Record the component responsible for creating this element.
        _owner: u
      };
      return a._store = {}, Object.defineProperty(a._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(a, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: n
      }), Object.defineProperty(a, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: o
      }), Object.freeze && (Object.freeze(a.props), Object.freeze(a)), a;
    };
    function ar(e, r, t, n, o) {
      {
        var u, i = {}, a = null, E = null;
        t !== void 0 && (Re(t), a = "" + t), Qe(r) && (Re(r.key), a = "" + r.key), Ze(r) && (E = r.ref, er(r, o));
        for (u in r)
          W.call(r, u) && !He.hasOwnProperty(u) && (i[u] = r[u]);
        if (e && e.defaultProps) {
          var l = e.defaultProps;
          for (u in l)
            i[u] === void 0 && (i[u] = l[u]);
        }
        if (a || E) {
          var c = typeof e == "function" ? e.displayName || e.name || "Unknown" : e;
          a && rr(i, c), E && tr(i, c);
        }
        return nr(e, a, E, o, n, ge.current, i);
      }
    }
    var H = D.ReactCurrentOwner, me = D.ReactDebugCurrentFrame;
    function F(e) {
      if (e) {
        var r = e._owner, t = U(e.type, e._source, r ? r.type : null);
        me.setExtraStackFrame(t);
      } else
        me.setExtraStackFrame(null);
    }
    var Z;
    Z = !1;
    function Q(e) {
      return typeof e == "object" && e !== null && e.$$typeof === R;
    }
    function be() {
      {
        if (H.current) {
          var e = x(H.current.type);
          if (e)
            return `

Check the render method of \`` + e + "`.";
        }
        return "";
      }
    }
    function ir(e) {
      return "";
    }
    var Oe = {};
    function or(e) {
      {
        var r = be();
        if (!r) {
          var t = typeof e == "string" ? e : e.displayName || e.name;
          t && (r = `

Check the top-level render call using <` + t + ">.");
        }
        return r;
      }
    }
    function Te(e, r) {
      {
        if (!e._store || e._store.validated || e.key != null)
          return;
        e._store.validated = !0;
        var t = or(r);
        if (Oe[t])
          return;
        Oe[t] = !0;
        var n = "";
        e && e._owner && e._owner !== H.current && (n = " It was passed a child from " + x(e._owner.type) + "."), F(e), h('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', t, n), F(null);
      }
    }
    function Se(e, r) {
      {
        if (typeof e != "object")
          return;
        if (X(e))
          for (var t = 0; t < e.length; t++) {
            var n = e[t];
            Q(n) && Te(n, r);
          }
        else if (Q(e))
          e._store && (e._store.validated = !0);
        else if (e) {
          var o = Fe(e);
          if (typeof o == "function" && o !== e.entries)
            for (var u = o.call(e), i; !(i = u.next()).done; )
              Q(i.value) && Te(i.value, r);
        }
      }
    }
    function ur(e) {
      {
        var r = e.type;
        if (r == null || typeof r == "string")
          return;
        var t;
        if (typeof r == "function")
          t = r.propTypes;
        else if (typeof r == "object" && (r.$$typeof === d || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        r.$$typeof === m))
          t = r.propTypes;
        else
          return;
        if (t) {
          var n = x(r);
          Ke(t, e.props, "prop", n, e);
        } else if (r.PropTypes !== void 0 && !Z) {
          Z = !0;
          var o = x(r);
          h("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", o || "Unknown");
        }
        typeof r.getDefaultProps == "function" && !r.getDefaultProps.isReactClassApproved && h("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function sr(e) {
      {
        for (var r = Object.keys(e.props), t = 0; t < r.length; t++) {
          var n = r[t];
          if (n !== "children" && n !== "key") {
            F(e), h("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", n), F(null);
            break;
          }
        }
        e.ref !== null && (F(e), h("Invalid attribute `ref` supplied to `React.Fragment`."), F(null));
      }
    }
    var Ce = {};
    function Pe(e, r, t, n, o, u) {
      {
        var i = Ye(e);
        if (!i) {
          var a = "";
          (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (a += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var E = ir();
          E ? a += E : a += be();
          var l;
          e === null ? l = "null" : X(e) ? l = "array" : e !== void 0 && e.$$typeof === R ? (l = "<" + (x(e.type) || "Unknown") + " />", a = " Did you accidentally export a JSX literal instead of a component?") : l = typeof e, h("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", l, a);
        }
        var c = ar(e, r, t, o, u);
        if (c == null)
          return c;
        if (i) {
          var b = r.children;
          if (b !== void 0)
            if (n)
              if (X(b)) {
                for (var A = 0; A < b.length; A++)
                  Se(b[A], e);
                Object.freeze && Object.freeze(b);
              } else
                h("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Se(b, e);
        }
        if (W.call(r, "key")) {
          var k = x(e), y = Object.keys(r).filter(function(pr) {
            return pr !== "key";
          }), ee = y.length > 0 ? "{key: someKey, " + y.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!Ce[k + ee]) {
            var vr = y.length > 0 ? "{" + y.join(": ..., ") + ": ...}" : "{}";
            h(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, ee, k, vr, k), Ce[k + ee] = !0;
          }
        }
        return e === v ? sr(c) : ur(c), c;
      }
    }
    function lr(e, r, t) {
      return Pe(e, r, t, !0);
    }
    function cr(e, r, t) {
      return Pe(e, r, t, !1);
    }
    var fr = cr, dr = lr;
    Y.Fragment = v, Y.jsx = fr, Y.jsxs = dr;
  }()), Y;
}
var we;
function _r() {
  return we || (we = 1, te.env.NODE_ENV === "production" ? J.exports = gr() : J.exports = yr()), J.exports;
}
var O = _r(), $ = {}, ke;
function mr() {
  if (ke) return $;
  ke = 1;
  var f = Rr;
  if (te.env.NODE_ENV === "production")
    $.createRoot = f.createRoot, $.hydrateRoot = f.hydrateRoot;
  else {
    var R = f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    $.createRoot = function(g, v) {
      R.usingClientEntryPoint = !0;
      try {
        return f.createRoot(g, v);
      } finally {
        R.usingClientEntryPoint = !1;
      }
    }, $.hydrateRoot = function(g, v, j) {
      R.usingClientEntryPoint = !0;
      try {
        return f.hydrateRoot(g, v, j);
      } finally {
        R.usingClientEntryPoint = !1;
      }
    };
  }
  return $;
}
var br = mr();
const Or = ({ pollId: f, question: R, options: g }) => {
  const [v, j] = re(null), [T, P] = re({}), [_, d] = re(!1), S = `poll_${f}`;
  hr(() => {
    const s = localStorage.getItem(S);
    if (s)
      P(JSON.parse(s));
    else {
      const C = g.reduce((N, B) => (N[B.id] = 0, N), {});
      P(C);
    }
  }, [f, g, S]);
  const p = () => {
    if (v && !_) {
      const s = {
        ...T,
        [v]: (T[v] || 0) + 1
      };
      P(s), d(!0), localStorage.setItem(S, JSON.stringify(s));
    }
  }, m = Object.values(T).reduce(
    (s, C) => s + C,
    0
  );
  return /* @__PURE__ */ O.jsxs("div", { className: "container", children: [
    /* @__PURE__ */ O.jsx("h2", { className: "question", children: R }),
    /* @__PURE__ */ O.jsx("div", { className: "options", children: g.map((s) => /* @__PURE__ */ O.jsxs("div", { className: "option", children: [
      /* @__PURE__ */ O.jsx(
        "input",
        {
          type: "radio",
          id: `${f}-${s.id}`,
          name: `poll-${f}`,
          value: s.id,
          disabled: _,
          onChange: (C) => j(C.target.value),
          className: "radio"
        }
      ),
      /* @__PURE__ */ O.jsx("label", { htmlFor: `${f}-${s.id}`, className: "label", children: s.text }),
      _ && /* @__PURE__ */ O.jsxs("div", { className: "result", children: [
        Math.round(T[s.id] / m * 100),
        "% (",
        T[s.id],
        " votes)"
      ] })
    ] }, s.id)) }),
    !_ && /* @__PURE__ */ O.jsx(
      "button",
      {
        onClick: p,
        disabled: !v,
        className: "vote-button",
        children: "Vote"
      }
    ),
    _ && /* @__PURE__ */ O.jsxs("p", { className: "total-votes", children: [
      "Total votes: ",
      m
    ] })
  ] });
};
window.renderPollWidgetInline = (f, R) => {
  const g = document.getElementById(f);
  if (!g) {
    console.error(`Container with id "${f}" not found`);
    return;
  }
  br.createRoot(g).render(
    /* @__PURE__ */ O.jsx(Er, { children: /* @__PURE__ */ O.jsx(Or, { ...R }) })
  );
};
//# sourceMappingURL=floating-widget.es.js.map
