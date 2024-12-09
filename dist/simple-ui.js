import or, { forwardRef as ye } from "react";
var he = { exports: {} }, se = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Xe;
function Wr() {
  if (Xe) return se;
  Xe = 1;
  var r = or, t = Symbol.for("react.element"), o = Symbol.for("react.fragment"), a = Object.prototype.hasOwnProperty, c = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, i = { key: !0, ref: !0, __self: !0, __source: !0 };
  function u(l, p, g) {
    var b, x = {}, C = null, j = null;
    g !== void 0 && (C = "" + g), p.key !== void 0 && (C = "" + p.key), p.ref !== void 0 && (j = p.ref);
    for (b in p) a.call(p, b) && !i.hasOwnProperty(b) && (x[b] = p[b]);
    if (l && l.defaultProps) for (b in p = l.defaultProps, p) x[b] === void 0 && (x[b] = p[b]);
    return { $$typeof: t, type: l, key: C, ref: j, props: x, _owner: c.current };
  }
  return se.Fragment = o, se.jsx = u, se.jsxs = u, se;
}
var ie = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var He;
function Vr() {
  return He || (He = 1, process.env.NODE_ENV !== "production" && function() {
    var r = or, t = Symbol.for("react.element"), o = Symbol.for("react.portal"), a = Symbol.for("react.fragment"), c = Symbol.for("react.strict_mode"), i = Symbol.for("react.profiler"), u = Symbol.for("react.provider"), l = Symbol.for("react.context"), p = Symbol.for("react.forward_ref"), g = Symbol.for("react.suspense"), b = Symbol.for("react.suspense_list"), x = Symbol.for("react.memo"), C = Symbol.for("react.lazy"), j = Symbol.for("react.offscreen"), O = Symbol.iterator, S = "@@iterator";
    function w(e) {
      if (e === null || typeof e != "object")
        return null;
      var n = O && e[O] || e[S];
      return typeof n == "function" ? n : null;
    }
    var k = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function y(e) {
      {
        for (var n = arguments.length, s = new Array(n > 1 ? n - 1 : 0), d = 1; d < n; d++)
          s[d - 1] = arguments[d];
        Y("error", e, s);
      }
    }
    function Y(e, n, s) {
      {
        var d = k.ReactDebugCurrentFrame, h = d.getStackAddendum();
        h !== "" && (n += "%s", s = s.concat([h]));
        var E = s.map(function(v) {
          return String(v);
        });
        E.unshift("Warning: " + n), Function.prototype.apply.call(console[e], console, E);
      }
    }
    var W = !1, q = !1, de = !1, fe = !1, pe = !1, J;
    J = Symbol.for("react.module.reference");
    function ee(e) {
      return !!(typeof e == "string" || typeof e == "function" || e === a || e === i || pe || e === c || e === g || e === b || fe || e === j || W || q || de || typeof e == "object" && e !== null && (e.$$typeof === C || e.$$typeof === x || e.$$typeof === u || e.$$typeof === l || e.$$typeof === p || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      e.$$typeof === J || e.getModuleId !== void 0));
    }
    function re(e, n, s) {
      var d = e.displayName;
      if (d)
        return d;
      var h = n.displayName || n.name || "";
      return h !== "" ? s + "(" + h + ")" : s;
    }
    function R(e) {
      return e.displayName || "Context";
    }
    function I(e) {
      if (e == null)
        return null;
      if (typeof e.tag == "number" && y("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
        return e.displayName || e.name || null;
      if (typeof e == "string")
        return e;
      switch (e) {
        case a:
          return "Fragment";
        case o:
          return "Portal";
        case i:
          return "Profiler";
        case c:
          return "StrictMode";
        case g:
          return "Suspense";
        case b:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case l:
            var n = e;
            return R(n) + ".Consumer";
          case u:
            var s = e;
            return R(s._context) + ".Provider";
          case p:
            return re(e, e.render, "ForwardRef");
          case x:
            var d = e.displayName || null;
            return d !== null ? d : I(e.type) || "Memo";
          case C: {
            var h = e, E = h._payload, v = h._init;
            try {
              return I(v(E));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var M = Object.assign, $ = 0, U, te, K, G, oe, N, Ie;
    function Me() {
    }
    Me.__reactDisabledLog = !0;
    function dr() {
      {
        if ($ === 0) {
          U = console.log, te = console.info, K = console.warn, G = console.error, oe = console.group, N = console.groupCollapsed, Ie = console.groupEnd;
          var e = {
            configurable: !0,
            enumerable: !0,
            value: Me,
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
        $++;
      }
    }
    function fr() {
      {
        if ($--, $ === 0) {
          var e = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: M({}, e, {
              value: U
            }),
            info: M({}, e, {
              value: te
            }),
            warn: M({}, e, {
              value: K
            }),
            error: M({}, e, {
              value: G
            }),
            group: M({}, e, {
              value: oe
            }),
            groupCollapsed: M({}, e, {
              value: N
            }),
            groupEnd: M({}, e, {
              value: Ie
            })
          });
        }
        $ < 0 && y("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var we = k.ReactCurrentDispatcher, Re;
    function be(e, n, s) {
      {
        if (Re === void 0)
          try {
            throw Error();
          } catch (h) {
            var d = h.stack.trim().match(/\n( *(at )?)/);
            Re = d && d[1] || "";
          }
        return `
` + Re + e;
      }
    }
    var Ee = !1, ge;
    {
      var pr = typeof WeakMap == "function" ? WeakMap : Map;
      ge = new pr();
    }
    function Ne(e, n) {
      if (!e || Ee)
        return "";
      {
        var s = ge.get(e);
        if (s !== void 0)
          return s;
      }
      var d;
      Ee = !0;
      var h = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var E;
      E = we.current, we.current = null, dr();
      try {
        if (n) {
          var v = function() {
            throw Error();
          };
          if (Object.defineProperty(v.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(v, []);
            } catch (z) {
              d = z;
            }
            Reflect.construct(e, [], v);
          } else {
            try {
              v.call();
            } catch (z) {
              d = z;
            }
            e.call(v.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (z) {
            d = z;
          }
          e();
        }
      } catch (z) {
        if (z && d && typeof z.stack == "string") {
          for (var m = z.stack.split(`
`), A = d.stack.split(`
`), T = m.length - 1, P = A.length - 1; T >= 1 && P >= 0 && m[T] !== A[P]; )
            P--;
          for (; T >= 1 && P >= 0; T--, P--)
            if (m[T] !== A[P]) {
              if (T !== 1 || P !== 1)
                do
                  if (T--, P--, P < 0 || m[T] !== A[P]) {
                    var F = `
` + m[T].replace(" at new ", " at ");
                    return e.displayName && F.includes("<anonymous>") && (F = F.replace("<anonymous>", e.displayName)), typeof e == "function" && ge.set(e, F), F;
                  }
                while (T >= 1 && P >= 0);
              break;
            }
        }
      } finally {
        Ee = !1, we.current = E, fr(), Error.prepareStackTrace = h;
      }
      var H = e ? e.displayName || e.name : "", B = H ? be(H) : "";
      return typeof e == "function" && ge.set(e, B), B;
    }
    function br(e, n, s) {
      return Ne(e, !1);
    }
    function gr(e) {
      var n = e.prototype;
      return !!(n && n.isReactComponent);
    }
    function me(e, n, s) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return Ne(e, gr(e));
      if (typeof e == "string")
        return be(e);
      switch (e) {
        case g:
          return be("Suspense");
        case b:
          return be("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case p:
            return br(e.render);
          case x:
            return me(e.type, n, s);
          case C: {
            var d = e, h = d._payload, E = d._init;
            try {
              return me(E(h), n, s);
            } catch {
            }
          }
        }
      return "";
    }
    var ne = Object.prototype.hasOwnProperty, Fe = {}, We = k.ReactDebugCurrentFrame;
    function ve(e) {
      if (e) {
        var n = e._owner, s = me(e.type, e._source, n ? n.type : null);
        We.setExtraStackFrame(s);
      } else
        We.setExtraStackFrame(null);
    }
    function mr(e, n, s, d, h) {
      {
        var E = Function.call.bind(ne);
        for (var v in e)
          if (E(e, v)) {
            var m = void 0;
            try {
              if (typeof e[v] != "function") {
                var A = Error((d || "React class") + ": " + s + " type `" + v + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[v] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw A.name = "Invariant Violation", A;
              }
              m = e[v](n, v, d, s, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (T) {
              m = T;
            }
            m && !(m instanceof Error) && (ve(h), y("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", d || "React class", s, v, typeof m), ve(null)), m instanceof Error && !(m.message in Fe) && (Fe[m.message] = !0, ve(h), y("Failed %s type: %s", s, m.message), ve(null));
          }
      }
    }
    var vr = Array.isArray;
    function Ce(e) {
      return vr(e);
    }
    function hr(e) {
      {
        var n = typeof Symbol == "function" && Symbol.toStringTag, s = n && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return s;
      }
    }
    function yr(e) {
      try {
        return Ve(e), !1;
      } catch {
        return !0;
      }
    }
    function Ve(e) {
      return "" + e;
    }
    function $e(e) {
      if (yr(e))
        return y("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", hr(e)), Ve(e);
    }
    var ae = k.ReactCurrentOwner, xr = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, Ge, Le, _e;
    _e = {};
    function wr(e) {
      if (ne.call(e, "ref")) {
        var n = Object.getOwnPropertyDescriptor(e, "ref").get;
        if (n && n.isReactWarning)
          return !1;
      }
      return e.ref !== void 0;
    }
    function Rr(e) {
      if (ne.call(e, "key")) {
        var n = Object.getOwnPropertyDescriptor(e, "key").get;
        if (n && n.isReactWarning)
          return !1;
      }
      return e.key !== void 0;
    }
    function Er(e, n) {
      if (typeof e.ref == "string" && ae.current && n && ae.current.stateNode !== n) {
        var s = I(ae.current.type);
        _e[s] || (y('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', I(ae.current.type), e.ref), _e[s] = !0);
      }
    }
    function Cr(e, n) {
      {
        var s = function() {
          Ge || (Ge = !0, y("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", n));
        };
        s.isReactWarning = !0, Object.defineProperty(e, "key", {
          get: s,
          configurable: !0
        });
      }
    }
    function _r(e, n) {
      {
        var s = function() {
          Le || (Le = !0, y("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", n));
        };
        s.isReactWarning = !0, Object.defineProperty(e, "ref", {
          get: s,
          configurable: !0
        });
      }
    }
    var kr = function(e, n, s, d, h, E, v) {
      var m = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: t,
        // Built-in properties that belong on the element
        type: e,
        key: n,
        ref: s,
        props: v,
        // Record the component responsible for creating this element.
        _owner: E
      };
      return m._store = {}, Object.defineProperty(m._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(m, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: d
      }), Object.defineProperty(m, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: h
      }), Object.freeze && (Object.freeze(m.props), Object.freeze(m)), m;
    };
    function Sr(e, n, s, d, h) {
      {
        var E, v = {}, m = null, A = null;
        s !== void 0 && ($e(s), m = "" + s), Rr(n) && ($e(n.key), m = "" + n.key), wr(n) && (A = n.ref, Er(n, h));
        for (E in n)
          ne.call(n, E) && !xr.hasOwnProperty(E) && (v[E] = n[E]);
        if (e && e.defaultProps) {
          var T = e.defaultProps;
          for (E in T)
            v[E] === void 0 && (v[E] = T[E]);
        }
        if (m || A) {
          var P = typeof e == "function" ? e.displayName || e.name || "Unknown" : e;
          m && Cr(v, P), A && _r(v, P);
        }
        return kr(e, m, A, h, d, ae.current, v);
      }
    }
    var ke = k.ReactCurrentOwner, De = k.ReactDebugCurrentFrame;
    function X(e) {
      if (e) {
        var n = e._owner, s = me(e.type, e._source, n ? n.type : null);
        De.setExtraStackFrame(s);
      } else
        De.setExtraStackFrame(null);
    }
    var Se;
    Se = !1;
    function Te(e) {
      return typeof e == "object" && e !== null && e.$$typeof === t;
    }
    function Ye() {
      {
        if (ke.current) {
          var e = I(ke.current.type);
          if (e)
            return `

Check the render method of \`` + e + "`.";
        }
        return "";
      }
    }
    function Tr(e) {
      return "";
    }
    var Ue = {};
    function Pr(e) {
      {
        var n = Ye();
        if (!n) {
          var s = typeof e == "string" ? e : e.displayName || e.name;
          s && (n = `

Check the top-level render call using <` + s + ">.");
        }
        return n;
      }
    }
    function Be(e, n) {
      {
        if (!e._store || e._store.validated || e.key != null)
          return;
        e._store.validated = !0;
        var s = Pr(n);
        if (Ue[s])
          return;
        Ue[s] = !0;
        var d = "";
        e && e._owner && e._owner !== ke.current && (d = " It was passed a child from " + I(e._owner.type) + "."), X(e), y('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', s, d), X(null);
      }
    }
    function qe(e, n) {
      {
        if (typeof e != "object")
          return;
        if (Ce(e))
          for (var s = 0; s < e.length; s++) {
            var d = e[s];
            Te(d) && Be(d, n);
          }
        else if (Te(e))
          e._store && (e._store.validated = !0);
        else if (e) {
          var h = w(e);
          if (typeof h == "function" && h !== e.entries)
            for (var E = h.call(e), v; !(v = E.next()).done; )
              Te(v.value) && Be(v.value, n);
        }
      }
    }
    function jr(e) {
      {
        var n = e.type;
        if (n == null || typeof n == "string")
          return;
        var s;
        if (typeof n == "function")
          s = n.propTypes;
        else if (typeof n == "object" && (n.$$typeof === p || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        n.$$typeof === x))
          s = n.propTypes;
        else
          return;
        if (s) {
          var d = I(n);
          mr(s, e.props, "prop", d, e);
        } else if (n.PropTypes !== void 0 && !Se) {
          Se = !0;
          var h = I(n);
          y("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", h || "Unknown");
        }
        typeof n.getDefaultProps == "function" && !n.getDefaultProps.isReactClassApproved && y("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function Or(e) {
      {
        for (var n = Object.keys(e.props), s = 0; s < n.length; s++) {
          var d = n[s];
          if (d !== "children" && d !== "key") {
            X(e), y("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", d), X(null);
            break;
          }
        }
        e.ref !== null && (X(e), y("Invalid attribute `ref` supplied to `React.Fragment`."), X(null));
      }
    }
    var Je = {};
    function Ke(e, n, s, d, h, E) {
      {
        var v = ee(e);
        if (!v) {
          var m = "";
          (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (m += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var A = Tr();
          A ? m += A : m += Ye();
          var T;
          e === null ? T = "null" : Ce(e) ? T = "array" : e !== void 0 && e.$$typeof === t ? (T = "<" + (I(e.type) || "Unknown") + " />", m = " Did you accidentally export a JSX literal instead of a component?") : T = typeof e, y("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", T, m);
        }
        var P = Sr(e, n, s, h, E);
        if (P == null)
          return P;
        if (v) {
          var F = n.children;
          if (F !== void 0)
            if (d)
              if (Ce(F)) {
                for (var H = 0; H < F.length; H++)
                  qe(F[H], e);
                Object.freeze && Object.freeze(F);
              } else
                y("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              qe(F, e);
        }
        if (ne.call(n, "key")) {
          var B = I(e), z = Object.keys(n).filter(function(Fr) {
            return Fr !== "key";
          }), Pe = z.length > 0 ? "{key: someKey, " + z.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!Je[B + Pe]) {
            var Nr = z.length > 0 ? "{" + z.join(": ..., ") + ": ...}" : "{}";
            y(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, Pe, B, Nr, B), Je[B + Pe] = !0;
          }
        }
        return e === a ? Or(P) : jr(P), P;
      }
    }
    function Ar(e, n, s) {
      return Ke(e, n, s, !0);
    }
    function zr(e, n, s) {
      return Ke(e, n, s, !1);
    }
    var Ir = zr, Mr = Ar;
    ie.Fragment = a, ie.jsx = Ir, ie.jsxs = Mr;
  }()), ie;
}
var Ze;
function $r() {
  return Ze || (Ze = 1, process.env.NODE_ENV === "production" ? he.exports = Wr() : he.exports = Vr()), he.exports;
}
var ue = $r();
function nr(r) {
  var t, o, a = "";
  if (typeof r == "string" || typeof r == "number") a += r;
  else if (typeof r == "object") if (Array.isArray(r)) {
    var c = r.length;
    for (t = 0; t < c; t++) r[t] && (o = nr(r[t])) && (a && (a += " "), a += o);
  } else for (o in r) r[o] && (a && (a += " "), a += o);
  return a;
}
function ar() {
  for (var r, t, o = 0, a = "", c = arguments.length; o < c; o++) (r = arguments[o]) && (t = nr(r)) && (a && (a += " "), a += t);
  return a;
}
const Ae = "-", Gr = (r) => {
  const t = Dr(r), {
    conflictingClassGroups: o,
    conflictingClassGroupModifiers: a
  } = r;
  return {
    getClassGroupId: (u) => {
      const l = u.split(Ae);
      return l[0] === "" && l.length !== 1 && l.shift(), sr(l, t) || Lr(u);
    },
    getConflictingClassGroupIds: (u, l) => {
      const p = o[u] || [];
      return l && a[u] ? [...p, ...a[u]] : p;
    }
  };
}, sr = (r, t) => {
  var u;
  if (r.length === 0)
    return t.classGroupId;
  const o = r[0], a = t.nextPart.get(o), c = a ? sr(r.slice(1), a) : void 0;
  if (c)
    return c;
  if (t.validators.length === 0)
    return;
  const i = r.join(Ae);
  return (u = t.validators.find(({
    validator: l
  }) => l(i))) == null ? void 0 : u.classGroupId;
}, Qe = /^\[(.+)\]$/, Lr = (r) => {
  if (Qe.test(r)) {
    const t = Qe.exec(r)[1], o = t == null ? void 0 : t.substring(0, t.indexOf(":"));
    if (o)
      return "arbitrary.." + o;
  }
}, Dr = (r) => {
  const {
    theme: t,
    prefix: o
  } = r, a = {
    nextPart: /* @__PURE__ */ new Map(),
    validators: []
  };
  return Ur(Object.entries(r.classGroups), o).forEach(([i, u]) => {
    Oe(u, a, i, t);
  }), a;
}, Oe = (r, t, o, a) => {
  r.forEach((c) => {
    if (typeof c == "string") {
      const i = c === "" ? t : er(t, c);
      i.classGroupId = o;
      return;
    }
    if (typeof c == "function") {
      if (Yr(c)) {
        Oe(c(a), t, o, a);
        return;
      }
      t.validators.push({
        validator: c,
        classGroupId: o
      });
      return;
    }
    Object.entries(c).forEach(([i, u]) => {
      Oe(u, er(t, i), o, a);
    });
  });
}, er = (r, t) => {
  let o = r;
  return t.split(Ae).forEach((a) => {
    o.nextPart.has(a) || o.nextPart.set(a, {
      nextPart: /* @__PURE__ */ new Map(),
      validators: []
    }), o = o.nextPart.get(a);
  }), o;
}, Yr = (r) => r.isThemeGetter, Ur = (r, t) => t ? r.map(([o, a]) => {
  const c = a.map((i) => typeof i == "string" ? t + i : typeof i == "object" ? Object.fromEntries(Object.entries(i).map(([u, l]) => [t + u, l])) : i);
  return [o, c];
}) : r, Br = (r) => {
  if (r < 1)
    return {
      get: () => {
      },
      set: () => {
      }
    };
  let t = 0, o = /* @__PURE__ */ new Map(), a = /* @__PURE__ */ new Map();
  const c = (i, u) => {
    o.set(i, u), t++, t > r && (t = 0, a = o, o = /* @__PURE__ */ new Map());
  };
  return {
    get(i) {
      let u = o.get(i);
      if (u !== void 0)
        return u;
      if ((u = a.get(i)) !== void 0)
        return c(i, u), u;
    },
    set(i, u) {
      o.has(i) ? o.set(i, u) : c(i, u);
    }
  };
}, ir = "!", qr = (r) => {
  const {
    separator: t,
    experimentalParseClassName: o
  } = r, a = t.length === 1, c = t[0], i = t.length, u = (l) => {
    const p = [];
    let g = 0, b = 0, x;
    for (let w = 0; w < l.length; w++) {
      let k = l[w];
      if (g === 0) {
        if (k === c && (a || l.slice(w, w + i) === t)) {
          p.push(l.slice(b, w)), b = w + i;
          continue;
        }
        if (k === "/") {
          x = w;
          continue;
        }
      }
      k === "[" ? g++ : k === "]" && g--;
    }
    const C = p.length === 0 ? l : l.substring(b), j = C.startsWith(ir), O = j ? C.substring(1) : C, S = x && x > b ? x - b : void 0;
    return {
      modifiers: p,
      hasImportantModifier: j,
      baseClassName: O,
      maybePostfixModifierPosition: S
    };
  };
  return o ? (l) => o({
    className: l,
    parseClassName: u
  }) : u;
}, Jr = (r) => {
  if (r.length <= 1)
    return r;
  const t = [];
  let o = [];
  return r.forEach((a) => {
    a[0] === "[" ? (t.push(...o.sort(), a), o = []) : o.push(a);
  }), t.push(...o.sort()), t;
}, Kr = (r) => ({
  cache: Br(r.cacheSize),
  parseClassName: qr(r),
  ...Gr(r)
}), Xr = /\s+/, Hr = (r, t) => {
  const {
    parseClassName: o,
    getClassGroupId: a,
    getConflictingClassGroupIds: c
  } = t, i = [], u = r.trim().split(Xr);
  let l = "";
  for (let p = u.length - 1; p >= 0; p -= 1) {
    const g = u[p], {
      modifiers: b,
      hasImportantModifier: x,
      baseClassName: C,
      maybePostfixModifierPosition: j
    } = o(g);
    let O = !!j, S = a(O ? C.substring(0, j) : C);
    if (!S) {
      if (!O) {
        l = g + (l.length > 0 ? " " + l : l);
        continue;
      }
      if (S = a(C), !S) {
        l = g + (l.length > 0 ? " " + l : l);
        continue;
      }
      O = !1;
    }
    const w = Jr(b).join(":"), k = x ? w + ir : w, y = k + S;
    if (i.includes(y))
      continue;
    i.push(y);
    const Y = c(S, O);
    for (let W = 0; W < Y.length; ++W) {
      const q = Y[W];
      i.push(k + q);
    }
    l = g + (l.length > 0 ? " " + l : l);
  }
  return l;
};
function Zr() {
  let r = 0, t, o, a = "";
  for (; r < arguments.length; )
    (t = arguments[r++]) && (o = lr(t)) && (a && (a += " "), a += o);
  return a;
}
const lr = (r) => {
  if (typeof r == "string")
    return r;
  let t, o = "";
  for (let a = 0; a < r.length; a++)
    r[a] && (t = lr(r[a])) && (o && (o += " "), o += t);
  return o;
};
function Qr(r, ...t) {
  let o, a, c, i = u;
  function u(p) {
    const g = t.reduce((b, x) => x(b), r());
    return o = Kr(g), a = o.cache.get, c = o.cache.set, i = l, l(p);
  }
  function l(p) {
    const g = a(p);
    if (g)
      return g;
    const b = Hr(p, o);
    return c(p, b), b;
  }
  return function() {
    return i(Zr.apply(null, arguments));
  };
}
const _ = (r) => {
  const t = (o) => o[r] || [];
  return t.isThemeGetter = !0, t;
}, cr = /^\[(?:([a-z-]+):)?(.+)\]$/i, et = /^\d+\/\d+$/, rt = /* @__PURE__ */ new Set(["px", "full", "screen"]), tt = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/, ot = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/, nt = /^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/, at = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/, st = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/, V = (r) => Z(r) || rt.has(r) || et.test(r), L = (r) => Q(r, "length", bt), Z = (r) => !!r && !Number.isNaN(Number(r)), je = (r) => Q(r, "number", Z), le = (r) => !!r && Number.isInteger(Number(r)), it = (r) => r.endsWith("%") && Z(r.slice(0, -1)), f = (r) => cr.test(r), D = (r) => tt.test(r), lt = /* @__PURE__ */ new Set(["length", "size", "percentage"]), ct = (r) => Q(r, lt, ur), ut = (r) => Q(r, "position", ur), dt = /* @__PURE__ */ new Set(["image", "url"]), ft = (r) => Q(r, dt, mt), pt = (r) => Q(r, "", gt), ce = () => !0, Q = (r, t, o) => {
  const a = cr.exec(r);
  return a ? a[1] ? typeof t == "string" ? a[1] === t : t.has(a[1]) : o(a[2]) : !1;
}, bt = (r) => (
  // `colorFunctionRegex` check is necessary because color functions can have percentages in them which which would be incorrectly classified as lengths.
  // For example, `hsl(0 0% 0%)` would be classified as a length without this check.
  // I could also use lookbehind assertion in `lengthUnitRegex` but that isn't supported widely enough.
  ot.test(r) && !nt.test(r)
), ur = () => !1, gt = (r) => at.test(r), mt = (r) => st.test(r), vt = () => {
  const r = _("colors"), t = _("spacing"), o = _("blur"), a = _("brightness"), c = _("borderColor"), i = _("borderRadius"), u = _("borderSpacing"), l = _("borderWidth"), p = _("contrast"), g = _("grayscale"), b = _("hueRotate"), x = _("invert"), C = _("gap"), j = _("gradientColorStops"), O = _("gradientColorStopPositions"), S = _("inset"), w = _("margin"), k = _("opacity"), y = _("padding"), Y = _("saturate"), W = _("scale"), q = _("sepia"), de = _("skew"), fe = _("space"), pe = _("translate"), J = () => ["auto", "contain", "none"], ee = () => ["auto", "hidden", "clip", "visible", "scroll"], re = () => ["auto", f, t], R = () => [f, t], I = () => ["", V, L], M = () => ["auto", Z, f], $ = () => ["bottom", "center", "left", "left-bottom", "left-top", "right", "right-bottom", "right-top", "top"], U = () => ["solid", "dashed", "dotted", "double", "none"], te = () => ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity"], K = () => ["start", "end", "center", "between", "around", "evenly", "stretch"], G = () => ["", "0", f], oe = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"], N = () => [Z, f];
  return {
    cacheSize: 500,
    separator: ":",
    theme: {
      colors: [ce],
      spacing: [V, L],
      blur: ["none", "", D, f],
      brightness: N(),
      borderColor: [r],
      borderRadius: ["none", "", "full", D, f],
      borderSpacing: R(),
      borderWidth: I(),
      contrast: N(),
      grayscale: G(),
      hueRotate: N(),
      invert: G(),
      gap: R(),
      gradientColorStops: [r],
      gradientColorStopPositions: [it, L],
      inset: re(),
      margin: re(),
      opacity: N(),
      padding: R(),
      saturate: N(),
      scale: N(),
      sepia: G(),
      skew: N(),
      space: R(),
      translate: R()
    },
    classGroups: {
      // Layout
      /**
       * Aspect Ratio
       * @see https://tailwindcss.com/docs/aspect-ratio
       */
      aspect: [{
        aspect: ["auto", "square", "video", f]
      }],
      /**
       * Container
       * @see https://tailwindcss.com/docs/container
       */
      container: ["container"],
      /**
       * Columns
       * @see https://tailwindcss.com/docs/columns
       */
      columns: [{
        columns: [D]
      }],
      /**
       * Break After
       * @see https://tailwindcss.com/docs/break-after
       */
      "break-after": [{
        "break-after": oe()
      }],
      /**
       * Break Before
       * @see https://tailwindcss.com/docs/break-before
       */
      "break-before": [{
        "break-before": oe()
      }],
      /**
       * Break Inside
       * @see https://tailwindcss.com/docs/break-inside
       */
      "break-inside": [{
        "break-inside": ["auto", "avoid", "avoid-page", "avoid-column"]
      }],
      /**
       * Box Decoration Break
       * @see https://tailwindcss.com/docs/box-decoration-break
       */
      "box-decoration": [{
        "box-decoration": ["slice", "clone"]
      }],
      /**
       * Box Sizing
       * @see https://tailwindcss.com/docs/box-sizing
       */
      box: [{
        box: ["border", "content"]
      }],
      /**
       * Display
       * @see https://tailwindcss.com/docs/display
       */
      display: ["block", "inline-block", "inline", "flex", "inline-flex", "table", "inline-table", "table-caption", "table-cell", "table-column", "table-column-group", "table-footer-group", "table-header-group", "table-row-group", "table-row", "flow-root", "grid", "inline-grid", "contents", "list-item", "hidden"],
      /**
       * Floats
       * @see https://tailwindcss.com/docs/float
       */
      float: [{
        float: ["right", "left", "none", "start", "end"]
      }],
      /**
       * Clear
       * @see https://tailwindcss.com/docs/clear
       */
      clear: [{
        clear: ["left", "right", "both", "none", "start", "end"]
      }],
      /**
       * Isolation
       * @see https://tailwindcss.com/docs/isolation
       */
      isolation: ["isolate", "isolation-auto"],
      /**
       * Object Fit
       * @see https://tailwindcss.com/docs/object-fit
       */
      "object-fit": [{
        object: ["contain", "cover", "fill", "none", "scale-down"]
      }],
      /**
       * Object Position
       * @see https://tailwindcss.com/docs/object-position
       */
      "object-position": [{
        object: [...$(), f]
      }],
      /**
       * Overflow
       * @see https://tailwindcss.com/docs/overflow
       */
      overflow: [{
        overflow: ee()
      }],
      /**
       * Overflow X
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-x": [{
        "overflow-x": ee()
      }],
      /**
       * Overflow Y
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-y": [{
        "overflow-y": ee()
      }],
      /**
       * Overscroll Behavior
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      overscroll: [{
        overscroll: J()
      }],
      /**
       * Overscroll Behavior X
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-x": [{
        "overscroll-x": J()
      }],
      /**
       * Overscroll Behavior Y
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-y": [{
        "overscroll-y": J()
      }],
      /**
       * Position
       * @see https://tailwindcss.com/docs/position
       */
      position: ["static", "fixed", "absolute", "relative", "sticky"],
      /**
       * Top / Right / Bottom / Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      inset: [{
        inset: [S]
      }],
      /**
       * Right / Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-x": [{
        "inset-x": [S]
      }],
      /**
       * Top / Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-y": [{
        "inset-y": [S]
      }],
      /**
       * Start
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      start: [{
        start: [S]
      }],
      /**
       * End
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      end: [{
        end: [S]
      }],
      /**
       * Top
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      top: [{
        top: [S]
      }],
      /**
       * Right
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      right: [{
        right: [S]
      }],
      /**
       * Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      bottom: [{
        bottom: [S]
      }],
      /**
       * Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      left: [{
        left: [S]
      }],
      /**
       * Visibility
       * @see https://tailwindcss.com/docs/visibility
       */
      visibility: ["visible", "invisible", "collapse"],
      /**
       * Z-Index
       * @see https://tailwindcss.com/docs/z-index
       */
      z: [{
        z: ["auto", le, f]
      }],
      // Flexbox and Grid
      /**
       * Flex Basis
       * @see https://tailwindcss.com/docs/flex-basis
       */
      basis: [{
        basis: re()
      }],
      /**
       * Flex Direction
       * @see https://tailwindcss.com/docs/flex-direction
       */
      "flex-direction": [{
        flex: ["row", "row-reverse", "col", "col-reverse"]
      }],
      /**
       * Flex Wrap
       * @see https://tailwindcss.com/docs/flex-wrap
       */
      "flex-wrap": [{
        flex: ["wrap", "wrap-reverse", "nowrap"]
      }],
      /**
       * Flex
       * @see https://tailwindcss.com/docs/flex
       */
      flex: [{
        flex: ["1", "auto", "initial", "none", f]
      }],
      /**
       * Flex Grow
       * @see https://tailwindcss.com/docs/flex-grow
       */
      grow: [{
        grow: G()
      }],
      /**
       * Flex Shrink
       * @see https://tailwindcss.com/docs/flex-shrink
       */
      shrink: [{
        shrink: G()
      }],
      /**
       * Order
       * @see https://tailwindcss.com/docs/order
       */
      order: [{
        order: ["first", "last", "none", le, f]
      }],
      /**
       * Grid Template Columns
       * @see https://tailwindcss.com/docs/grid-template-columns
       */
      "grid-cols": [{
        "grid-cols": [ce]
      }],
      /**
       * Grid Column Start / End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start-end": [{
        col: ["auto", {
          span: ["full", le, f]
        }, f]
      }],
      /**
       * Grid Column Start
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start": [{
        "col-start": M()
      }],
      /**
       * Grid Column End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-end": [{
        "col-end": M()
      }],
      /**
       * Grid Template Rows
       * @see https://tailwindcss.com/docs/grid-template-rows
       */
      "grid-rows": [{
        "grid-rows": [ce]
      }],
      /**
       * Grid Row Start / End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start-end": [{
        row: ["auto", {
          span: [le, f]
        }, f]
      }],
      /**
       * Grid Row Start
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start": [{
        "row-start": M()
      }],
      /**
       * Grid Row End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-end": [{
        "row-end": M()
      }],
      /**
       * Grid Auto Flow
       * @see https://tailwindcss.com/docs/grid-auto-flow
       */
      "grid-flow": [{
        "grid-flow": ["row", "col", "dense", "row-dense", "col-dense"]
      }],
      /**
       * Grid Auto Columns
       * @see https://tailwindcss.com/docs/grid-auto-columns
       */
      "auto-cols": [{
        "auto-cols": ["auto", "min", "max", "fr", f]
      }],
      /**
       * Grid Auto Rows
       * @see https://tailwindcss.com/docs/grid-auto-rows
       */
      "auto-rows": [{
        "auto-rows": ["auto", "min", "max", "fr", f]
      }],
      /**
       * Gap
       * @see https://tailwindcss.com/docs/gap
       */
      gap: [{
        gap: [C]
      }],
      /**
       * Gap X
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-x": [{
        "gap-x": [C]
      }],
      /**
       * Gap Y
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-y": [{
        "gap-y": [C]
      }],
      /**
       * Justify Content
       * @see https://tailwindcss.com/docs/justify-content
       */
      "justify-content": [{
        justify: ["normal", ...K()]
      }],
      /**
       * Justify Items
       * @see https://tailwindcss.com/docs/justify-items
       */
      "justify-items": [{
        "justify-items": ["start", "end", "center", "stretch"]
      }],
      /**
       * Justify Self
       * @see https://tailwindcss.com/docs/justify-self
       */
      "justify-self": [{
        "justify-self": ["auto", "start", "end", "center", "stretch"]
      }],
      /**
       * Align Content
       * @see https://tailwindcss.com/docs/align-content
       */
      "align-content": [{
        content: ["normal", ...K(), "baseline"]
      }],
      /**
       * Align Items
       * @see https://tailwindcss.com/docs/align-items
       */
      "align-items": [{
        items: ["start", "end", "center", "baseline", "stretch"]
      }],
      /**
       * Align Self
       * @see https://tailwindcss.com/docs/align-self
       */
      "align-self": [{
        self: ["auto", "start", "end", "center", "stretch", "baseline"]
      }],
      /**
       * Place Content
       * @see https://tailwindcss.com/docs/place-content
       */
      "place-content": [{
        "place-content": [...K(), "baseline"]
      }],
      /**
       * Place Items
       * @see https://tailwindcss.com/docs/place-items
       */
      "place-items": [{
        "place-items": ["start", "end", "center", "baseline", "stretch"]
      }],
      /**
       * Place Self
       * @see https://tailwindcss.com/docs/place-self
       */
      "place-self": [{
        "place-self": ["auto", "start", "end", "center", "stretch"]
      }],
      // Spacing
      /**
       * Padding
       * @see https://tailwindcss.com/docs/padding
       */
      p: [{
        p: [y]
      }],
      /**
       * Padding X
       * @see https://tailwindcss.com/docs/padding
       */
      px: [{
        px: [y]
      }],
      /**
       * Padding Y
       * @see https://tailwindcss.com/docs/padding
       */
      py: [{
        py: [y]
      }],
      /**
       * Padding Start
       * @see https://tailwindcss.com/docs/padding
       */
      ps: [{
        ps: [y]
      }],
      /**
       * Padding End
       * @see https://tailwindcss.com/docs/padding
       */
      pe: [{
        pe: [y]
      }],
      /**
       * Padding Top
       * @see https://tailwindcss.com/docs/padding
       */
      pt: [{
        pt: [y]
      }],
      /**
       * Padding Right
       * @see https://tailwindcss.com/docs/padding
       */
      pr: [{
        pr: [y]
      }],
      /**
       * Padding Bottom
       * @see https://tailwindcss.com/docs/padding
       */
      pb: [{
        pb: [y]
      }],
      /**
       * Padding Left
       * @see https://tailwindcss.com/docs/padding
       */
      pl: [{
        pl: [y]
      }],
      /**
       * Margin
       * @see https://tailwindcss.com/docs/margin
       */
      m: [{
        m: [w]
      }],
      /**
       * Margin X
       * @see https://tailwindcss.com/docs/margin
       */
      mx: [{
        mx: [w]
      }],
      /**
       * Margin Y
       * @see https://tailwindcss.com/docs/margin
       */
      my: [{
        my: [w]
      }],
      /**
       * Margin Start
       * @see https://tailwindcss.com/docs/margin
       */
      ms: [{
        ms: [w]
      }],
      /**
       * Margin End
       * @see https://tailwindcss.com/docs/margin
       */
      me: [{
        me: [w]
      }],
      /**
       * Margin Top
       * @see https://tailwindcss.com/docs/margin
       */
      mt: [{
        mt: [w]
      }],
      /**
       * Margin Right
       * @see https://tailwindcss.com/docs/margin
       */
      mr: [{
        mr: [w]
      }],
      /**
       * Margin Bottom
       * @see https://tailwindcss.com/docs/margin
       */
      mb: [{
        mb: [w]
      }],
      /**
       * Margin Left
       * @see https://tailwindcss.com/docs/margin
       */
      ml: [{
        ml: [w]
      }],
      /**
       * Space Between X
       * @see https://tailwindcss.com/docs/space
       */
      "space-x": [{
        "space-x": [fe]
      }],
      /**
       * Space Between X Reverse
       * @see https://tailwindcss.com/docs/space
       */
      "space-x-reverse": ["space-x-reverse"],
      /**
       * Space Between Y
       * @see https://tailwindcss.com/docs/space
       */
      "space-y": [{
        "space-y": [fe]
      }],
      /**
       * Space Between Y Reverse
       * @see https://tailwindcss.com/docs/space
       */
      "space-y-reverse": ["space-y-reverse"],
      // Sizing
      /**
       * Width
       * @see https://tailwindcss.com/docs/width
       */
      w: [{
        w: ["auto", "min", "max", "fit", "svw", "lvw", "dvw", f, t]
      }],
      /**
       * Min-Width
       * @see https://tailwindcss.com/docs/min-width
       */
      "min-w": [{
        "min-w": [f, t, "min", "max", "fit"]
      }],
      /**
       * Max-Width
       * @see https://tailwindcss.com/docs/max-width
       */
      "max-w": [{
        "max-w": [f, t, "none", "full", "min", "max", "fit", "prose", {
          screen: [D]
        }, D]
      }],
      /**
       * Height
       * @see https://tailwindcss.com/docs/height
       */
      h: [{
        h: [f, t, "auto", "min", "max", "fit", "svh", "lvh", "dvh"]
      }],
      /**
       * Min-Height
       * @see https://tailwindcss.com/docs/min-height
       */
      "min-h": [{
        "min-h": [f, t, "min", "max", "fit", "svh", "lvh", "dvh"]
      }],
      /**
       * Max-Height
       * @see https://tailwindcss.com/docs/max-height
       */
      "max-h": [{
        "max-h": [f, t, "min", "max", "fit", "svh", "lvh", "dvh"]
      }],
      /**
       * Size
       * @see https://tailwindcss.com/docs/size
       */
      size: [{
        size: [f, t, "auto", "min", "max", "fit"]
      }],
      // Typography
      /**
       * Font Size
       * @see https://tailwindcss.com/docs/font-size
       */
      "font-size": [{
        text: ["base", D, L]
      }],
      /**
       * Font Smoothing
       * @see https://tailwindcss.com/docs/font-smoothing
       */
      "font-smoothing": ["antialiased", "subpixel-antialiased"],
      /**
       * Font Style
       * @see https://tailwindcss.com/docs/font-style
       */
      "font-style": ["italic", "not-italic"],
      /**
       * Font Weight
       * @see https://tailwindcss.com/docs/font-weight
       */
      "font-weight": [{
        font: ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black", je]
      }],
      /**
       * Font Family
       * @see https://tailwindcss.com/docs/font-family
       */
      "font-family": [{
        font: [ce]
      }],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-normal": ["normal-nums"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-ordinal": ["ordinal"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-slashed-zero": ["slashed-zero"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-figure": ["lining-nums", "oldstyle-nums"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-spacing": ["proportional-nums", "tabular-nums"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-fraction": ["diagonal-fractions", "stacked-fractions"],
      /**
       * Letter Spacing
       * @see https://tailwindcss.com/docs/letter-spacing
       */
      tracking: [{
        tracking: ["tighter", "tight", "normal", "wide", "wider", "widest", f]
      }],
      /**
       * Line Clamp
       * @see https://tailwindcss.com/docs/line-clamp
       */
      "line-clamp": [{
        "line-clamp": ["none", Z, je]
      }],
      /**
       * Line Height
       * @see https://tailwindcss.com/docs/line-height
       */
      leading: [{
        leading: ["none", "tight", "snug", "normal", "relaxed", "loose", V, f]
      }],
      /**
       * List Style Image
       * @see https://tailwindcss.com/docs/list-style-image
       */
      "list-image": [{
        "list-image": ["none", f]
      }],
      /**
       * List Style Type
       * @see https://tailwindcss.com/docs/list-style-type
       */
      "list-style-type": [{
        list: ["none", "disc", "decimal", f]
      }],
      /**
       * List Style Position
       * @see https://tailwindcss.com/docs/list-style-position
       */
      "list-style-position": [{
        list: ["inside", "outside"]
      }],
      /**
       * Placeholder Color
       * @deprecated since Tailwind CSS v3.0.0
       * @see https://tailwindcss.com/docs/placeholder-color
       */
      "placeholder-color": [{
        placeholder: [r]
      }],
      /**
       * Placeholder Opacity
       * @see https://tailwindcss.com/docs/placeholder-opacity
       */
      "placeholder-opacity": [{
        "placeholder-opacity": [k]
      }],
      /**
       * Text Alignment
       * @see https://tailwindcss.com/docs/text-align
       */
      "text-alignment": [{
        text: ["left", "center", "right", "justify", "start", "end"]
      }],
      /**
       * Text Color
       * @see https://tailwindcss.com/docs/text-color
       */
      "text-color": [{
        text: [r]
      }],
      /**
       * Text Opacity
       * @see https://tailwindcss.com/docs/text-opacity
       */
      "text-opacity": [{
        "text-opacity": [k]
      }],
      /**
       * Text Decoration
       * @see https://tailwindcss.com/docs/text-decoration
       */
      "text-decoration": ["underline", "overline", "line-through", "no-underline"],
      /**
       * Text Decoration Style
       * @see https://tailwindcss.com/docs/text-decoration-style
       */
      "text-decoration-style": [{
        decoration: [...U(), "wavy"]
      }],
      /**
       * Text Decoration Thickness
       * @see https://tailwindcss.com/docs/text-decoration-thickness
       */
      "text-decoration-thickness": [{
        decoration: ["auto", "from-font", V, L]
      }],
      /**
       * Text Underline Offset
       * @see https://tailwindcss.com/docs/text-underline-offset
       */
      "underline-offset": [{
        "underline-offset": ["auto", V, f]
      }],
      /**
       * Text Decoration Color
       * @see https://tailwindcss.com/docs/text-decoration-color
       */
      "text-decoration-color": [{
        decoration: [r]
      }],
      /**
       * Text Transform
       * @see https://tailwindcss.com/docs/text-transform
       */
      "text-transform": ["uppercase", "lowercase", "capitalize", "normal-case"],
      /**
       * Text Overflow
       * @see https://tailwindcss.com/docs/text-overflow
       */
      "text-overflow": ["truncate", "text-ellipsis", "text-clip"],
      /**
       * Text Wrap
       * @see https://tailwindcss.com/docs/text-wrap
       */
      "text-wrap": [{
        text: ["wrap", "nowrap", "balance", "pretty"]
      }],
      /**
       * Text Indent
       * @see https://tailwindcss.com/docs/text-indent
       */
      indent: [{
        indent: R()
      }],
      /**
       * Vertical Alignment
       * @see https://tailwindcss.com/docs/vertical-align
       */
      "vertical-align": [{
        align: ["baseline", "top", "middle", "bottom", "text-top", "text-bottom", "sub", "super", f]
      }],
      /**
       * Whitespace
       * @see https://tailwindcss.com/docs/whitespace
       */
      whitespace: [{
        whitespace: ["normal", "nowrap", "pre", "pre-line", "pre-wrap", "break-spaces"]
      }],
      /**
       * Word Break
       * @see https://tailwindcss.com/docs/word-break
       */
      break: [{
        break: ["normal", "words", "all", "keep"]
      }],
      /**
       * Hyphens
       * @see https://tailwindcss.com/docs/hyphens
       */
      hyphens: [{
        hyphens: ["none", "manual", "auto"]
      }],
      /**
       * Content
       * @see https://tailwindcss.com/docs/content
       */
      content: [{
        content: ["none", f]
      }],
      // Backgrounds
      /**
       * Background Attachment
       * @see https://tailwindcss.com/docs/background-attachment
       */
      "bg-attachment": [{
        bg: ["fixed", "local", "scroll"]
      }],
      /**
       * Background Clip
       * @see https://tailwindcss.com/docs/background-clip
       */
      "bg-clip": [{
        "bg-clip": ["border", "padding", "content", "text"]
      }],
      /**
       * Background Opacity
       * @deprecated since Tailwind CSS v3.0.0
       * @see https://tailwindcss.com/docs/background-opacity
       */
      "bg-opacity": [{
        "bg-opacity": [k]
      }],
      /**
       * Background Origin
       * @see https://tailwindcss.com/docs/background-origin
       */
      "bg-origin": [{
        "bg-origin": ["border", "padding", "content"]
      }],
      /**
       * Background Position
       * @see https://tailwindcss.com/docs/background-position
       */
      "bg-position": [{
        bg: [...$(), ut]
      }],
      /**
       * Background Repeat
       * @see https://tailwindcss.com/docs/background-repeat
       */
      "bg-repeat": [{
        bg: ["no-repeat", {
          repeat: ["", "x", "y", "round", "space"]
        }]
      }],
      /**
       * Background Size
       * @see https://tailwindcss.com/docs/background-size
       */
      "bg-size": [{
        bg: ["auto", "cover", "contain", ct]
      }],
      /**
       * Background Image
       * @see https://tailwindcss.com/docs/background-image
       */
      "bg-image": [{
        bg: ["none", {
          "gradient-to": ["t", "tr", "r", "br", "b", "bl", "l", "tl"]
        }, ft]
      }],
      /**
       * Background Color
       * @see https://tailwindcss.com/docs/background-color
       */
      "bg-color": [{
        bg: [r]
      }],
      /**
       * Gradient Color Stops From Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-from-pos": [{
        from: [O]
      }],
      /**
       * Gradient Color Stops Via Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via-pos": [{
        via: [O]
      }],
      /**
       * Gradient Color Stops To Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to-pos": [{
        to: [O]
      }],
      /**
       * Gradient Color Stops From
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-from": [{
        from: [j]
      }],
      /**
       * Gradient Color Stops Via
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via": [{
        via: [j]
      }],
      /**
       * Gradient Color Stops To
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to": [{
        to: [j]
      }],
      // Borders
      /**
       * Border Radius
       * @see https://tailwindcss.com/docs/border-radius
       */
      rounded: [{
        rounded: [i]
      }],
      /**
       * Border Radius Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-s": [{
        "rounded-s": [i]
      }],
      /**
       * Border Radius End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-e": [{
        "rounded-e": [i]
      }],
      /**
       * Border Radius Top
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-t": [{
        "rounded-t": [i]
      }],
      /**
       * Border Radius Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-r": [{
        "rounded-r": [i]
      }],
      /**
       * Border Radius Bottom
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-b": [{
        "rounded-b": [i]
      }],
      /**
       * Border Radius Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-l": [{
        "rounded-l": [i]
      }],
      /**
       * Border Radius Start Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-ss": [{
        "rounded-ss": [i]
      }],
      /**
       * Border Radius Start End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-se": [{
        "rounded-se": [i]
      }],
      /**
       * Border Radius End End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-ee": [{
        "rounded-ee": [i]
      }],
      /**
       * Border Radius End Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-es": [{
        "rounded-es": [i]
      }],
      /**
       * Border Radius Top Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-tl": [{
        "rounded-tl": [i]
      }],
      /**
       * Border Radius Top Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-tr": [{
        "rounded-tr": [i]
      }],
      /**
       * Border Radius Bottom Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-br": [{
        "rounded-br": [i]
      }],
      /**
       * Border Radius Bottom Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-bl": [{
        "rounded-bl": [i]
      }],
      /**
       * Border Width
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w": [{
        border: [l]
      }],
      /**
       * Border Width X
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-x": [{
        "border-x": [l]
      }],
      /**
       * Border Width Y
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-y": [{
        "border-y": [l]
      }],
      /**
       * Border Width Start
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-s": [{
        "border-s": [l]
      }],
      /**
       * Border Width End
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-e": [{
        "border-e": [l]
      }],
      /**
       * Border Width Top
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-t": [{
        "border-t": [l]
      }],
      /**
       * Border Width Right
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-r": [{
        "border-r": [l]
      }],
      /**
       * Border Width Bottom
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-b": [{
        "border-b": [l]
      }],
      /**
       * Border Width Left
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-l": [{
        "border-l": [l]
      }],
      /**
       * Border Opacity
       * @see https://tailwindcss.com/docs/border-opacity
       */
      "border-opacity": [{
        "border-opacity": [k]
      }],
      /**
       * Border Style
       * @see https://tailwindcss.com/docs/border-style
       */
      "border-style": [{
        border: [...U(), "hidden"]
      }],
      /**
       * Divide Width X
       * @see https://tailwindcss.com/docs/divide-width
       */
      "divide-x": [{
        "divide-x": [l]
      }],
      /**
       * Divide Width X Reverse
       * @see https://tailwindcss.com/docs/divide-width
       */
      "divide-x-reverse": ["divide-x-reverse"],
      /**
       * Divide Width Y
       * @see https://tailwindcss.com/docs/divide-width
       */
      "divide-y": [{
        "divide-y": [l]
      }],
      /**
       * Divide Width Y Reverse
       * @see https://tailwindcss.com/docs/divide-width
       */
      "divide-y-reverse": ["divide-y-reverse"],
      /**
       * Divide Opacity
       * @see https://tailwindcss.com/docs/divide-opacity
       */
      "divide-opacity": [{
        "divide-opacity": [k]
      }],
      /**
       * Divide Style
       * @see https://tailwindcss.com/docs/divide-style
       */
      "divide-style": [{
        divide: U()
      }],
      /**
       * Border Color
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color": [{
        border: [c]
      }],
      /**
       * Border Color X
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-x": [{
        "border-x": [c]
      }],
      /**
       * Border Color Y
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-y": [{
        "border-y": [c]
      }],
      /**
       * Border Color S
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-s": [{
        "border-s": [c]
      }],
      /**
       * Border Color E
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-e": [{
        "border-e": [c]
      }],
      /**
       * Border Color Top
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-t": [{
        "border-t": [c]
      }],
      /**
       * Border Color Right
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-r": [{
        "border-r": [c]
      }],
      /**
       * Border Color Bottom
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-b": [{
        "border-b": [c]
      }],
      /**
       * Border Color Left
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-l": [{
        "border-l": [c]
      }],
      /**
       * Divide Color
       * @see https://tailwindcss.com/docs/divide-color
       */
      "divide-color": [{
        divide: [c]
      }],
      /**
       * Outline Style
       * @see https://tailwindcss.com/docs/outline-style
       */
      "outline-style": [{
        outline: ["", ...U()]
      }],
      /**
       * Outline Offset
       * @see https://tailwindcss.com/docs/outline-offset
       */
      "outline-offset": [{
        "outline-offset": [V, f]
      }],
      /**
       * Outline Width
       * @see https://tailwindcss.com/docs/outline-width
       */
      "outline-w": [{
        outline: [V, L]
      }],
      /**
       * Outline Color
       * @see https://tailwindcss.com/docs/outline-color
       */
      "outline-color": [{
        outline: [r]
      }],
      /**
       * Ring Width
       * @see https://tailwindcss.com/docs/ring-width
       */
      "ring-w": [{
        ring: I()
      }],
      /**
       * Ring Width Inset
       * @see https://tailwindcss.com/docs/ring-width
       */
      "ring-w-inset": ["ring-inset"],
      /**
       * Ring Color
       * @see https://tailwindcss.com/docs/ring-color
       */
      "ring-color": [{
        ring: [r]
      }],
      /**
       * Ring Opacity
       * @see https://tailwindcss.com/docs/ring-opacity
       */
      "ring-opacity": [{
        "ring-opacity": [k]
      }],
      /**
       * Ring Offset Width
       * @see https://tailwindcss.com/docs/ring-offset-width
       */
      "ring-offset-w": [{
        "ring-offset": [V, L]
      }],
      /**
       * Ring Offset Color
       * @see https://tailwindcss.com/docs/ring-offset-color
       */
      "ring-offset-color": [{
        "ring-offset": [r]
      }],
      // Effects
      /**
       * Box Shadow
       * @see https://tailwindcss.com/docs/box-shadow
       */
      shadow: [{
        shadow: ["", "inner", "none", D, pt]
      }],
      /**
       * Box Shadow Color
       * @see https://tailwindcss.com/docs/box-shadow-color
       */
      "shadow-color": [{
        shadow: [ce]
      }],
      /**
       * Opacity
       * @see https://tailwindcss.com/docs/opacity
       */
      opacity: [{
        opacity: [k]
      }],
      /**
       * Mix Blend Mode
       * @see https://tailwindcss.com/docs/mix-blend-mode
       */
      "mix-blend": [{
        "mix-blend": [...te(), "plus-lighter", "plus-darker"]
      }],
      /**
       * Background Blend Mode
       * @see https://tailwindcss.com/docs/background-blend-mode
       */
      "bg-blend": [{
        "bg-blend": te()
      }],
      // Filters
      /**
       * Filter
       * @deprecated since Tailwind CSS v3.0.0
       * @see https://tailwindcss.com/docs/filter
       */
      filter: [{
        filter: ["", "none"]
      }],
      /**
       * Blur
       * @see https://tailwindcss.com/docs/blur
       */
      blur: [{
        blur: [o]
      }],
      /**
       * Brightness
       * @see https://tailwindcss.com/docs/brightness
       */
      brightness: [{
        brightness: [a]
      }],
      /**
       * Contrast
       * @see https://tailwindcss.com/docs/contrast
       */
      contrast: [{
        contrast: [p]
      }],
      /**
       * Drop Shadow
       * @see https://tailwindcss.com/docs/drop-shadow
       */
      "drop-shadow": [{
        "drop-shadow": ["", "none", D, f]
      }],
      /**
       * Grayscale
       * @see https://tailwindcss.com/docs/grayscale
       */
      grayscale: [{
        grayscale: [g]
      }],
      /**
       * Hue Rotate
       * @see https://tailwindcss.com/docs/hue-rotate
       */
      "hue-rotate": [{
        "hue-rotate": [b]
      }],
      /**
       * Invert
       * @see https://tailwindcss.com/docs/invert
       */
      invert: [{
        invert: [x]
      }],
      /**
       * Saturate
       * @see https://tailwindcss.com/docs/saturate
       */
      saturate: [{
        saturate: [Y]
      }],
      /**
       * Sepia
       * @see https://tailwindcss.com/docs/sepia
       */
      sepia: [{
        sepia: [q]
      }],
      /**
       * Backdrop Filter
       * @deprecated since Tailwind CSS v3.0.0
       * @see https://tailwindcss.com/docs/backdrop-filter
       */
      "backdrop-filter": [{
        "backdrop-filter": ["", "none"]
      }],
      /**
       * Backdrop Blur
       * @see https://tailwindcss.com/docs/backdrop-blur
       */
      "backdrop-blur": [{
        "backdrop-blur": [o]
      }],
      /**
       * Backdrop Brightness
       * @see https://tailwindcss.com/docs/backdrop-brightness
       */
      "backdrop-brightness": [{
        "backdrop-brightness": [a]
      }],
      /**
       * Backdrop Contrast
       * @see https://tailwindcss.com/docs/backdrop-contrast
       */
      "backdrop-contrast": [{
        "backdrop-contrast": [p]
      }],
      /**
       * Backdrop Grayscale
       * @see https://tailwindcss.com/docs/backdrop-grayscale
       */
      "backdrop-grayscale": [{
        "backdrop-grayscale": [g]
      }],
      /**
       * Backdrop Hue Rotate
       * @see https://tailwindcss.com/docs/backdrop-hue-rotate
       */
      "backdrop-hue-rotate": [{
        "backdrop-hue-rotate": [b]
      }],
      /**
       * Backdrop Invert
       * @see https://tailwindcss.com/docs/backdrop-invert
       */
      "backdrop-invert": [{
        "backdrop-invert": [x]
      }],
      /**
       * Backdrop Opacity
       * @see https://tailwindcss.com/docs/backdrop-opacity
       */
      "backdrop-opacity": [{
        "backdrop-opacity": [k]
      }],
      /**
       * Backdrop Saturate
       * @see https://tailwindcss.com/docs/backdrop-saturate
       */
      "backdrop-saturate": [{
        "backdrop-saturate": [Y]
      }],
      /**
       * Backdrop Sepia
       * @see https://tailwindcss.com/docs/backdrop-sepia
       */
      "backdrop-sepia": [{
        "backdrop-sepia": [q]
      }],
      // Tables
      /**
       * Border Collapse
       * @see https://tailwindcss.com/docs/border-collapse
       */
      "border-collapse": [{
        border: ["collapse", "separate"]
      }],
      /**
       * Border Spacing
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing": [{
        "border-spacing": [u]
      }],
      /**
       * Border Spacing X
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing-x": [{
        "border-spacing-x": [u]
      }],
      /**
       * Border Spacing Y
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing-y": [{
        "border-spacing-y": [u]
      }],
      /**
       * Table Layout
       * @see https://tailwindcss.com/docs/table-layout
       */
      "table-layout": [{
        table: ["auto", "fixed"]
      }],
      /**
       * Caption Side
       * @see https://tailwindcss.com/docs/caption-side
       */
      caption: [{
        caption: ["top", "bottom"]
      }],
      // Transitions and Animation
      /**
       * Tranisition Property
       * @see https://tailwindcss.com/docs/transition-property
       */
      transition: [{
        transition: ["none", "all", "", "colors", "opacity", "shadow", "transform", f]
      }],
      /**
       * Transition Duration
       * @see https://tailwindcss.com/docs/transition-duration
       */
      duration: [{
        duration: N()
      }],
      /**
       * Transition Timing Function
       * @see https://tailwindcss.com/docs/transition-timing-function
       */
      ease: [{
        ease: ["linear", "in", "out", "in-out", f]
      }],
      /**
       * Transition Delay
       * @see https://tailwindcss.com/docs/transition-delay
       */
      delay: [{
        delay: N()
      }],
      /**
       * Animation
       * @see https://tailwindcss.com/docs/animation
       */
      animate: [{
        animate: ["none", "spin", "ping", "pulse", "bounce", f]
      }],
      // Transforms
      /**
       * Transform
       * @see https://tailwindcss.com/docs/transform
       */
      transform: [{
        transform: ["", "gpu", "none"]
      }],
      /**
       * Scale
       * @see https://tailwindcss.com/docs/scale
       */
      scale: [{
        scale: [W]
      }],
      /**
       * Scale X
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-x": [{
        "scale-x": [W]
      }],
      /**
       * Scale Y
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-y": [{
        "scale-y": [W]
      }],
      /**
       * Rotate
       * @see https://tailwindcss.com/docs/rotate
       */
      rotate: [{
        rotate: [le, f]
      }],
      /**
       * Translate X
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-x": [{
        "translate-x": [pe]
      }],
      /**
       * Translate Y
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-y": [{
        "translate-y": [pe]
      }],
      /**
       * Skew X
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-x": [{
        "skew-x": [de]
      }],
      /**
       * Skew Y
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-y": [{
        "skew-y": [de]
      }],
      /**
       * Transform Origin
       * @see https://tailwindcss.com/docs/transform-origin
       */
      "transform-origin": [{
        origin: ["center", "top", "top-right", "right", "bottom-right", "bottom", "bottom-left", "left", "top-left", f]
      }],
      // Interactivity
      /**
       * Accent Color
       * @see https://tailwindcss.com/docs/accent-color
       */
      accent: [{
        accent: ["auto", r]
      }],
      /**
       * Appearance
       * @see https://tailwindcss.com/docs/appearance
       */
      appearance: [{
        appearance: ["none", "auto"]
      }],
      /**
       * Cursor
       * @see https://tailwindcss.com/docs/cursor
       */
      cursor: [{
        cursor: ["auto", "default", "pointer", "wait", "text", "move", "help", "not-allowed", "none", "context-menu", "progress", "cell", "crosshair", "vertical-text", "alias", "copy", "no-drop", "grab", "grabbing", "all-scroll", "col-resize", "row-resize", "n-resize", "e-resize", "s-resize", "w-resize", "ne-resize", "nw-resize", "se-resize", "sw-resize", "ew-resize", "ns-resize", "nesw-resize", "nwse-resize", "zoom-in", "zoom-out", f]
      }],
      /**
       * Caret Color
       * @see https://tailwindcss.com/docs/just-in-time-mode#caret-color-utilities
       */
      "caret-color": [{
        caret: [r]
      }],
      /**
       * Pointer Events
       * @see https://tailwindcss.com/docs/pointer-events
       */
      "pointer-events": [{
        "pointer-events": ["none", "auto"]
      }],
      /**
       * Resize
       * @see https://tailwindcss.com/docs/resize
       */
      resize: [{
        resize: ["none", "y", "x", ""]
      }],
      /**
       * Scroll Behavior
       * @see https://tailwindcss.com/docs/scroll-behavior
       */
      "scroll-behavior": [{
        scroll: ["auto", "smooth"]
      }],
      /**
       * Scroll Margin
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-m": [{
        "scroll-m": R()
      }],
      /**
       * Scroll Margin X
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mx": [{
        "scroll-mx": R()
      }],
      /**
       * Scroll Margin Y
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-my": [{
        "scroll-my": R()
      }],
      /**
       * Scroll Margin Start
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ms": [{
        "scroll-ms": R()
      }],
      /**
       * Scroll Margin End
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-me": [{
        "scroll-me": R()
      }],
      /**
       * Scroll Margin Top
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mt": [{
        "scroll-mt": R()
      }],
      /**
       * Scroll Margin Right
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mr": [{
        "scroll-mr": R()
      }],
      /**
       * Scroll Margin Bottom
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mb": [{
        "scroll-mb": R()
      }],
      /**
       * Scroll Margin Left
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ml": [{
        "scroll-ml": R()
      }],
      /**
       * Scroll Padding
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-p": [{
        "scroll-p": R()
      }],
      /**
       * Scroll Padding X
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-px": [{
        "scroll-px": R()
      }],
      /**
       * Scroll Padding Y
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-py": [{
        "scroll-py": R()
      }],
      /**
       * Scroll Padding Start
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-ps": [{
        "scroll-ps": R()
      }],
      /**
       * Scroll Padding End
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pe": [{
        "scroll-pe": R()
      }],
      /**
       * Scroll Padding Top
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pt": [{
        "scroll-pt": R()
      }],
      /**
       * Scroll Padding Right
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pr": [{
        "scroll-pr": R()
      }],
      /**
       * Scroll Padding Bottom
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pb": [{
        "scroll-pb": R()
      }],
      /**
       * Scroll Padding Left
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pl": [{
        "scroll-pl": R()
      }],
      /**
       * Scroll Snap Align
       * @see https://tailwindcss.com/docs/scroll-snap-align
       */
      "snap-align": [{
        snap: ["start", "end", "center", "align-none"]
      }],
      /**
       * Scroll Snap Stop
       * @see https://tailwindcss.com/docs/scroll-snap-stop
       */
      "snap-stop": [{
        snap: ["normal", "always"]
      }],
      /**
       * Scroll Snap Type
       * @see https://tailwindcss.com/docs/scroll-snap-type
       */
      "snap-type": [{
        snap: ["none", "x", "y", "both"]
      }],
      /**
       * Scroll Snap Type Strictness
       * @see https://tailwindcss.com/docs/scroll-snap-type
       */
      "snap-strictness": [{
        snap: ["mandatory", "proximity"]
      }],
      /**
       * Touch Action
       * @see https://tailwindcss.com/docs/touch-action
       */
      touch: [{
        touch: ["auto", "none", "manipulation"]
      }],
      /**
       * Touch Action X
       * @see https://tailwindcss.com/docs/touch-action
       */
      "touch-x": [{
        "touch-pan": ["x", "left", "right"]
      }],
      /**
       * Touch Action Y
       * @see https://tailwindcss.com/docs/touch-action
       */
      "touch-y": [{
        "touch-pan": ["y", "up", "down"]
      }],
      /**
       * Touch Action Pinch Zoom
       * @see https://tailwindcss.com/docs/touch-action
       */
      "touch-pz": ["touch-pinch-zoom"],
      /**
       * User Select
       * @see https://tailwindcss.com/docs/user-select
       */
      select: [{
        select: ["none", "text", "all", "auto"]
      }],
      /**
       * Will Change
       * @see https://tailwindcss.com/docs/will-change
       */
      "will-change": [{
        "will-change": ["auto", "scroll", "contents", "transform", f]
      }],
      // SVG
      /**
       * Fill
       * @see https://tailwindcss.com/docs/fill
       */
      fill: [{
        fill: [r, "none"]
      }],
      /**
       * Stroke Width
       * @see https://tailwindcss.com/docs/stroke-width
       */
      "stroke-w": [{
        stroke: [V, L, je]
      }],
      /**
       * Stroke
       * @see https://tailwindcss.com/docs/stroke
       */
      stroke: [{
        stroke: [r, "none"]
      }],
      // Accessibility
      /**
       * Screen Readers
       * @see https://tailwindcss.com/docs/screen-readers
       */
      sr: ["sr-only", "not-sr-only"],
      /**
       * Forced Color Adjust
       * @see https://tailwindcss.com/docs/forced-color-adjust
       */
      "forced-color-adjust": [{
        "forced-color-adjust": ["auto", "none"]
      }]
    },
    conflictingClassGroups: {
      overflow: ["overflow-x", "overflow-y"],
      overscroll: ["overscroll-x", "overscroll-y"],
      inset: ["inset-x", "inset-y", "start", "end", "top", "right", "bottom", "left"],
      "inset-x": ["right", "left"],
      "inset-y": ["top", "bottom"],
      flex: ["basis", "grow", "shrink"],
      gap: ["gap-x", "gap-y"],
      p: ["px", "py", "ps", "pe", "pt", "pr", "pb", "pl"],
      px: ["pr", "pl"],
      py: ["pt", "pb"],
      m: ["mx", "my", "ms", "me", "mt", "mr", "mb", "ml"],
      mx: ["mr", "ml"],
      my: ["mt", "mb"],
      size: ["w", "h"],
      "font-size": ["leading"],
      "fvn-normal": ["fvn-ordinal", "fvn-slashed-zero", "fvn-figure", "fvn-spacing", "fvn-fraction"],
      "fvn-ordinal": ["fvn-normal"],
      "fvn-slashed-zero": ["fvn-normal"],
      "fvn-figure": ["fvn-normal"],
      "fvn-spacing": ["fvn-normal"],
      "fvn-fraction": ["fvn-normal"],
      "line-clamp": ["display", "overflow"],
      rounded: ["rounded-s", "rounded-e", "rounded-t", "rounded-r", "rounded-b", "rounded-l", "rounded-ss", "rounded-se", "rounded-ee", "rounded-es", "rounded-tl", "rounded-tr", "rounded-br", "rounded-bl"],
      "rounded-s": ["rounded-ss", "rounded-es"],
      "rounded-e": ["rounded-se", "rounded-ee"],
      "rounded-t": ["rounded-tl", "rounded-tr"],
      "rounded-r": ["rounded-tr", "rounded-br"],
      "rounded-b": ["rounded-br", "rounded-bl"],
      "rounded-l": ["rounded-tl", "rounded-bl"],
      "border-spacing": ["border-spacing-x", "border-spacing-y"],
      "border-w": ["border-w-s", "border-w-e", "border-w-t", "border-w-r", "border-w-b", "border-w-l"],
      "border-w-x": ["border-w-r", "border-w-l"],
      "border-w-y": ["border-w-t", "border-w-b"],
      "border-color": ["border-color-s", "border-color-e", "border-color-t", "border-color-r", "border-color-b", "border-color-l"],
      "border-color-x": ["border-color-r", "border-color-l"],
      "border-color-y": ["border-color-t", "border-color-b"],
      "scroll-m": ["scroll-mx", "scroll-my", "scroll-ms", "scroll-me", "scroll-mt", "scroll-mr", "scroll-mb", "scroll-ml"],
      "scroll-mx": ["scroll-mr", "scroll-ml"],
      "scroll-my": ["scroll-mt", "scroll-mb"],
      "scroll-p": ["scroll-px", "scroll-py", "scroll-ps", "scroll-pe", "scroll-pt", "scroll-pr", "scroll-pb", "scroll-pl"],
      "scroll-px": ["scroll-pr", "scroll-pl"],
      "scroll-py": ["scroll-pt", "scroll-pb"],
      touch: ["touch-x", "touch-y", "touch-pz"],
      "touch-x": ["touch"],
      "touch-y": ["touch"],
      "touch-pz": ["touch"]
    },
    conflictingClassGroupModifiers: {
      "font-size": ["leading"]
    }
  };
}, ht = /* @__PURE__ */ Qr(vt), xe = (...r) => ht(ar(r)), rr = (r) => typeof r == "boolean" ? `${r}` : r === 0 ? "0" : r, tr = ar, ze = (r, t) => (o) => {
  var a;
  if ((t == null ? void 0 : t.variants) == null) return tr(r, o == null ? void 0 : o.class, o == null ? void 0 : o.className);
  const { variants: c, defaultVariants: i } = t, u = Object.keys(c).map((g) => {
    const b = o == null ? void 0 : o[g], x = i == null ? void 0 : i[g];
    if (b === null) return null;
    const C = rr(b) || rr(x);
    return c[g][C];
  }), l = o && Object.entries(o).reduce((g, b) => {
    let [x, C] = b;
    return C === void 0 || (g[x] = C), g;
  }, {}), p = t == null || (a = t.compoundVariants) === null || a === void 0 ? void 0 : a.reduce((g, b) => {
    let { class: x, className: C, ...j } = b;
    return Object.entries(j).every((O) => {
      let [S, w] = O;
      return Array.isArray(w) ? w.includes({
        ...i,
        ...l
      }[S]) : {
        ...i,
        ...l
      }[S] === w;
    }) ? [
      ...g,
      x,
      C
    ] : g;
  }, []);
  return tr(r, u, p, o == null ? void 0 : o.class, o == null ? void 0 : o.className);
}, yt = ze(
  ["w-full", "rounded-md", "font-semibold", "focus:outline-none", "disabled:cursor-not-allowed"],
  {
    variants: {
      variant: {
        solid: "",
        outline: "border-2",
        ghost: "transition-colors duration-300"
      },
      size: {
        sm: "px-4 py-2 text-sm",
        md: "px-4 py-2 text-base",
        lg: "px-6 py-3 text-lg"
      },
      colorScheme: {
        primary: "text-white"
      }
    },
    compoundVariants: [
      {
        variant: "solid",
        colorScheme: "primary",
        className: "bg-primary-500 hover:bg-primary-600"
      },
      {
        variant: "outline",
        colorScheme: "primary",
        className: "text-primary-600 border-primary-500 bg-transparent hover:bg-primary-100"
      },
      {
        variant: "ghost",
        colorScheme: "primary",
        className: "text-primary-600 bg-transparent hover:bg-primary-100"
      }
    ],
    defaultVariants: {
      variant: "solid",
      size: "md",
      colorScheme: "primary"
    }
  }
), Ct = ye(
  ({ className: r, variant: t, size: o, colorScheme: a, ...c }, i) => /* @__PURE__ */ ue.jsx(
    "button",
    {
      ref: i,
      className: xe(yt({ variant: t, size: o, colorScheme: a, className: r })),
      ...c
    }
  )
), xt = ze([
  "w-full",
  "border",
  "border-gray-200",
  "p-2",
  "rounded-lg",
  "transition-all",
  "duration-100",
  "outline-none",
  "focus:outline-primary-500 ",
  "focus:border-transparent",
  "placeholder:text-gray-400",
  "placeholder:text-sm"
]), _t = ye(({ className: r, ...t }, o) => /* @__PURE__ */ ue.jsx(
  "input",
  {
    ref: o,
    type: "text",
    autoComplete: "off",
    className: xe(xt({ className: r })),
    ...t
  }
)), wt = ye(({ ...r }, t) => /* @__PURE__ */ ue.jsx("div", { ref: t, ...r })), kt = ({ className: r, ...t }) => /* @__PURE__ */ ue.jsx(wt, { className: xe("flex flex-col items-start gap-2", r), ...t }), Rt = ze("w-full", {
  variants: {
    emphasis: {
      low: "text-gray-600 font-light"
    },
    size: {
      sm: "text-sm",
      base: "text-base",
      lg: "text-lg",
      xl: "text-xl",
      "2xl": "text-2xl",
      "3xl": "text-3xl"
    },
    weight: {
      thin: "font-thin",
      normal: "font-normal",
      medium: "font-medium",
      semibold: "font-semibold",
      bold: "font-bold",
      black: "font-black"
    },
    align: {
      left: "text-left",
      center: "text-center",
      right: "text-right"
    },
    italic: {
      true: "italic"
    },
    underline: {
      true: "underline underline-offset-2"
    }
  },
  defaultVariants: {
    size: "base",
    align: "left"
  }
}), St = ye(
  ({ as: r, align: t, size: o, emphasis: a, italic: c, underline: i, weight: u, className: l, ...p }, g) => {
    const b = r || "span";
    return /* @__PURE__ */ ue.jsx(
      b,
      {
        className: xe(
          Rt({
            size: o,
            weight: u,
            emphasis: a,
            italic: c,
            underline: i,
            align: t,
            className: l
          })
        ),
        ...p,
        ref: g
      }
    );
  }
);
export {
  wt as Box,
  Ct as Button,
  _t as Input,
  kt as Stack,
  St as Text
};
