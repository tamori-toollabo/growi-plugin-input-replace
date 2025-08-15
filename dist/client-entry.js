var ig = { exports: {} }, rp = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var _b;
function nT() {
  if (_b) return rp;
  _b = 1;
  var H = Symbol.for("react.transitional.element"), F = Symbol.for("react.fragment");
  function ie(D, re, ve) {
    var Ie = null;
    if (ve !== void 0 && (Ie = "" + ve), re.key !== void 0 && (Ie = "" + re.key), "key" in re) {
      ve = {};
      for (var ct in re)
        ct !== "key" && (ve[ct] = re[ct]);
    } else ve = re;
    return re = ve.ref, {
      $$typeof: H,
      type: D,
      key: Ie,
      ref: re !== void 0 ? re : null,
      props: ve
    };
  }
  return rp.Fragment = F, rp.jsx = ie, rp.jsxs = ie, rp;
}
var sp = {}, cg = { exports: {} }, $e = {};
/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Cb;
function uT() {
  if (Cb) return $e;
  Cb = 1;
  var H = Symbol.for("react.transitional.element"), F = Symbol.for("react.portal"), ie = Symbol.for("react.fragment"), D = Symbol.for("react.strict_mode"), re = Symbol.for("react.profiler"), ve = Symbol.for("react.consumer"), Ie = Symbol.for("react.context"), ct = Symbol.for("react.forward_ref"), Y = Symbol.for("react.suspense"), J = Symbol.for("react.memo"), ue = Symbol.for("react.lazy"), K = Symbol.iterator;
  function U(g) {
    return g === null || typeof g != "object" ? null : (g = K && g[K] || g["@@iterator"], typeof g == "function" ? g : null);
  }
  var le = {
    isMounted: function() {
      return !1;
    },
    enqueueForceUpdate: function() {
    },
    enqueueReplaceState: function() {
    },
    enqueueSetState: function() {
    }
  }, ze = Object.assign, ot = {};
  function Ve(g, w, Z) {
    this.props = g, this.context = w, this.refs = ot, this.updater = Z || le;
  }
  Ve.prototype.isReactComponent = {}, Ve.prototype.setState = function(g, w) {
    if (typeof g != "object" && typeof g != "function" && g != null)
      throw Error(
        "takes an object of state variables to update or a function which returns an object of state variables."
      );
    this.updater.enqueueSetState(this, g, w, "setState");
  }, Ve.prototype.forceUpdate = function(g) {
    this.updater.enqueueForceUpdate(this, g, "forceUpdate");
  };
  function Xe() {
  }
  Xe.prototype = Ve.prototype;
  function It(g, w, Z) {
    this.props = g, this.context = w, this.refs = ot, this.updater = Z || le;
  }
  var rt = It.prototype = new Xe();
  rt.constructor = It, ze(rt, Ve.prototype), rt.isPureReactComponent = !0;
  var Wt = Array.isArray, Ne = { H: null, A: null, T: null, S: null, V: null }, Rt = Object.prototype.hasOwnProperty;
  function We(g, w, Z, I, ce, Ae) {
    return Z = Ae.ref, {
      $$typeof: H,
      type: g,
      key: w,
      ref: Z !== void 0 ? Z : null,
      props: Ae
    };
  }
  function Ot(g, w) {
    return We(
      g.type,
      w,
      void 0,
      void 0,
      void 0,
      g.props
    );
  }
  function de(g) {
    return typeof g == "object" && g !== null && g.$$typeof === H;
  }
  function zt(g) {
    var w = { "=": "=0", ":": "=2" };
    return "$" + g.replace(/[=:]/g, function(Z) {
      return w[Z];
    });
  }
  var Se = /\/+/g;
  function De(g, w) {
    return typeof g == "object" && g !== null && g.key != null ? zt("" + g.key) : w.toString(36);
  }
  function Mt() {
  }
  function Yt(g) {
    switch (g.status) {
      case "fulfilled":
        return g.value;
      case "rejected":
        throw g.reason;
      default:
        switch (typeof g.status == "string" ? g.then(Mt, Mt) : (g.status = "pending", g.then(
          function(w) {
            g.status === "pending" && (g.status = "fulfilled", g.value = w);
          },
          function(w) {
            g.status === "pending" && (g.status = "rejected", g.reason = w);
          }
        )), g.status) {
          case "fulfilled":
            return g.value;
          case "rejected":
            throw g.reason;
        }
    }
    throw g;
  }
  function mt(g, w, Z, I, ce) {
    var Ae = typeof g;
    (Ae === "undefined" || Ae === "boolean") && (g = null);
    var oe = !1;
    if (g === null) oe = !0;
    else
      switch (Ae) {
        case "bigint":
        case "string":
        case "number":
          oe = !0;
          break;
        case "object":
          switch (g.$$typeof) {
            case H:
            case F:
              oe = !0;
              break;
            case ue:
              return oe = g._init, mt(
                oe(g._payload),
                w,
                Z,
                I,
                ce
              );
          }
      }
    if (oe)
      return ce = ce(g), oe = I === "" ? "." + De(g, 0) : I, Wt(ce) ? (Z = "", oe != null && (Z = oe.replace(Se, "$&/") + "/"), mt(ce, w, Z, "", function(xt) {
        return xt;
      })) : ce != null && (de(ce) && (ce = Ot(
        ce,
        Z + (ce.key == null || g && g.key === ce.key ? "" : ("" + ce.key).replace(
          Se,
          "$&/"
        ) + "/") + oe
      )), w.push(ce)), 1;
    oe = 0;
    var nl = I === "" ? "." : I + ":";
    if (Wt(g))
      for (var _e = 0; _e < g.length; _e++)
        I = g[_e], Ae = nl + De(I, _e), oe += mt(
          I,
          w,
          Z,
          Ae,
          ce
        );
    else if (_e = U(g), typeof _e == "function")
      for (g = _e.call(g), _e = 0; !(I = g.next()).done; )
        I = I.value, Ae = nl + De(I, _e++), oe += mt(
          I,
          w,
          Z,
          Ae,
          ce
        );
    else if (Ae === "object") {
      if (typeof g.then == "function")
        return mt(
          Yt(g),
          w,
          Z,
          I,
          ce
        );
      throw w = String(g), Error(
        "Objects are not valid as a React child (found: " + (w === "[object Object]" ? "object with keys {" + Object.keys(g).join(", ") + "}" : w) + "). If you meant to render a collection of children, use an array instead."
      );
    }
    return oe;
  }
  function O(g, w, Z) {
    if (g == null) return g;
    var I = [], ce = 0;
    return mt(g, I, "", "", function(Ae) {
      return w.call(Z, Ae, ce++);
    }), I;
  }
  function W(g) {
    if (g._status === -1) {
      var w = g._result;
      w = w(), w.then(
        function(Z) {
          (g._status === 0 || g._status === -1) && (g._status = 1, g._result = Z);
        },
        function(Z) {
          (g._status === 0 || g._status === -1) && (g._status = 2, g._result = Z);
        }
      ), g._status === -1 && (g._status = 0, g._result = w);
    }
    if (g._status === 1) return g._result.default;
    throw g._result;
  }
  var P = typeof reportError == "function" ? reportError : function(g) {
    if (typeof window == "object" && typeof window.ErrorEvent == "function") {
      var w = new window.ErrorEvent("error", {
        bubbles: !0,
        cancelable: !0,
        message: typeof g == "object" && g !== null && typeof g.message == "string" ? String(g.message) : String(g),
        error: g
      });
      if (!window.dispatchEvent(w)) return;
    } else if (typeof process == "object" && typeof process.emit == "function") {
      process.emit("uncaughtException", g);
      return;
    }
    console.error(g);
  };
  function ge() {
  }
  return $e.Children = {
    map: O,
    forEach: function(g, w, Z) {
      O(
        g,
        function() {
          w.apply(this, arguments);
        },
        Z
      );
    },
    count: function(g) {
      var w = 0;
      return O(g, function() {
        w++;
      }), w;
    },
    toArray: function(g) {
      return O(g, function(w) {
        return w;
      }) || [];
    },
    only: function(g) {
      if (!de(g))
        throw Error(
          "React.Children.only expected to receive a single React element child."
        );
      return g;
    }
  }, $e.Component = Ve, $e.Fragment = ie, $e.Profiler = re, $e.PureComponent = It, $e.StrictMode = D, $e.Suspense = Y, $e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = Ne, $e.__COMPILER_RUNTIME = {
    __proto__: null,
    c: function(g) {
      return Ne.H.useMemoCache(g);
    }
  }, $e.cache = function(g) {
    return function() {
      return g.apply(null, arguments);
    };
  }, $e.cloneElement = function(g, w, Z) {
    if (g == null)
      throw Error(
        "The argument must be a React element, but you passed " + g + "."
      );
    var I = ze({}, g.props), ce = g.key, Ae = void 0;
    if (w != null)
      for (oe in w.ref !== void 0 && (Ae = void 0), w.key !== void 0 && (ce = "" + w.key), w)
        !Rt.call(w, oe) || oe === "key" || oe === "__self" || oe === "__source" || oe === "ref" && w.ref === void 0 || (I[oe] = w[oe]);
    var oe = arguments.length - 2;
    if (oe === 1) I.children = Z;
    else if (1 < oe) {
      for (var nl = Array(oe), _e = 0; _e < oe; _e++)
        nl[_e] = arguments[_e + 2];
      I.children = nl;
    }
    return We(g.type, ce, void 0, void 0, Ae, I);
  }, $e.createContext = function(g) {
    return g = {
      $$typeof: Ie,
      _currentValue: g,
      _currentValue2: g,
      _threadCount: 0,
      Provider: null,
      Consumer: null
    }, g.Provider = g, g.Consumer = {
      $$typeof: ve,
      _context: g
    }, g;
  }, $e.createElement = function(g, w, Z) {
    var I, ce = {}, Ae = null;
    if (w != null)
      for (I in w.key !== void 0 && (Ae = "" + w.key), w)
        Rt.call(w, I) && I !== "key" && I !== "__self" && I !== "__source" && (ce[I] = w[I]);
    var oe = arguments.length - 2;
    if (oe === 1) ce.children = Z;
    else if (1 < oe) {
      for (var nl = Array(oe), _e = 0; _e < oe; _e++)
        nl[_e] = arguments[_e + 2];
      ce.children = nl;
    }
    if (g && g.defaultProps)
      for (I in oe = g.defaultProps, oe)
        ce[I] === void 0 && (ce[I] = oe[I]);
    return We(g, Ae, void 0, void 0, null, ce);
  }, $e.createRef = function() {
    return { current: null };
  }, $e.forwardRef = function(g) {
    return { $$typeof: ct, render: g };
  }, $e.isValidElement = de, $e.lazy = function(g) {
    return {
      $$typeof: ue,
      _payload: { _status: -1, _result: g },
      _init: W
    };
  }, $e.memo = function(g, w) {
    return {
      $$typeof: J,
      type: g,
      compare: w === void 0 ? null : w
    };
  }, $e.startTransition = function(g) {
    var w = Ne.T, Z = {};
    Ne.T = Z;
    try {
      var I = g(), ce = Ne.S;
      ce !== null && ce(Z, I), typeof I == "object" && I !== null && typeof I.then == "function" && I.then(ge, P);
    } catch (Ae) {
      P(Ae);
    } finally {
      Ne.T = w;
    }
  }, $e.unstable_useCacheRefresh = function() {
    return Ne.H.useCacheRefresh();
  }, $e.use = function(g) {
    return Ne.H.use(g);
  }, $e.useActionState = function(g, w, Z) {
    return Ne.H.useActionState(g, w, Z);
  }, $e.useCallback = function(g, w) {
    return Ne.H.useCallback(g, w);
  }, $e.useContext = function(g) {
    return Ne.H.useContext(g);
  }, $e.useDebugValue = function() {
  }, $e.useDeferredValue = function(g, w) {
    return Ne.H.useDeferredValue(g, w);
  }, $e.useEffect = function(g, w, Z) {
    var I = Ne.H;
    if (typeof Z == "function")
      throw Error(
        "useEffect CRUD overload is not enabled in this build of React."
      );
    return I.useEffect(g, w);
  }, $e.useId = function() {
    return Ne.H.useId();
  }, $e.useImperativeHandle = function(g, w, Z) {
    return Ne.H.useImperativeHandle(g, w, Z);
  }, $e.useInsertionEffect = function(g, w) {
    return Ne.H.useInsertionEffect(g, w);
  }, $e.useLayoutEffect = function(g, w) {
    return Ne.H.useLayoutEffect(g, w);
  }, $e.useMemo = function(g, w) {
    return Ne.H.useMemo(g, w);
  }, $e.useOptimistic = function(g, w) {
    return Ne.H.useOptimistic(g, w);
  }, $e.useReducer = function(g, w, Z) {
    return Ne.H.useReducer(g, w, Z);
  }, $e.useRef = function(g) {
    return Ne.H.useRef(g);
  }, $e.useState = function(g) {
    return Ne.H.useState(g);
  }, $e.useSyncExternalStore = function(g, w, Z) {
    return Ne.H.useSyncExternalStore(
      g,
      w,
      Z
    );
  }, $e.useTransition = function() {
    return Ne.H.useTransition();
  }, $e.version = "19.1.1", $e;
}
var yp = { exports: {} };
/**
 * @license React
 * react.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
yp.exports;
var Hb;
function iT() {
  return Hb || (Hb = 1, (function(H, F) {
    process.env.NODE_ENV !== "production" && (function() {
      function ie(m, z) {
        Object.defineProperty(ve.prototype, m, {
          get: function() {
            console.warn(
              "%s(...) is deprecated in plain JavaScript React classes. %s",
              z[0],
              z[1]
            );
          }
        });
      }
      function D(m) {
        return m === null || typeof m != "object" ? null : (m = An && m[An] || m["@@iterator"], typeof m == "function" ? m : null);
      }
      function re(m, z) {
        m = (m = m.constructor) && (m.displayName || m.name) || "ReactClass";
        var te = m + "." + z;
        ji[te] || (console.error(
          "Can't call %s on a component that is not yet mounted. This is a no-op, but it might indicate a bug in your application. Instead, assign to `this.state` directly or define a `state = {};` class property with the desired state in the %s component.",
          z,
          m
        ), ji[te] = !0);
      }
      function ve(m, z, te) {
        this.props = m, this.context = z, this.refs = sf, this.updater = te || Rn;
      }
      function Ie() {
      }
      function ct(m, z, te) {
        this.props = m, this.context = z, this.refs = sf, this.updater = te || Rn;
      }
      function Y(m) {
        return "" + m;
      }
      function J(m) {
        try {
          Y(m);
          var z = !1;
        } catch {
          z = !0;
        }
        if (z) {
          z = console;
          var te = z.error, ne = typeof Symbol == "function" && Symbol.toStringTag && m[Symbol.toStringTag] || m.constructor.name || "Object";
          return te.call(
            z,
            "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
            ne
          ), Y(m);
        }
      }
      function ue(m) {
        if (m == null) return null;
        if (typeof m == "function")
          return m.$$typeof === Fr ? null : m.displayName || m.name || null;
        if (typeof m == "string") return m;
        switch (m) {
          case g:
            return "Fragment";
          case Z:
            return "Profiler";
          case w:
            return "StrictMode";
          case oe:
            return "Suspense";
          case nl:
            return "SuspenseList";
          case ta:
            return "Activity";
        }
        if (typeof m == "object")
          switch (typeof m.tag == "number" && console.error(
            "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
          ), m.$$typeof) {
            case ge:
              return "Portal";
            case ce:
              return (m.displayName || "Context") + ".Provider";
            case I:
              return (m._context.displayName || "Context") + ".Consumer";
            case Ae:
              var z = m.render;
              return m = m.displayName, m || (m = z.displayName || z.name || "", m = m !== "" ? "ForwardRef(" + m + ")" : "ForwardRef"), m;
            case _e:
              return z = m.displayName || null, z !== null ? z : ue(m.type) || "Memo";
            case xt:
              z = m._payload, m = m._init;
              try {
                return ue(m(z));
              } catch {
              }
          }
        return null;
      }
      function K(m) {
        if (m === g) return "<>";
        if (typeof m == "object" && m !== null && m.$$typeof === xt)
          return "<...>";
        try {
          var z = ue(m);
          return z ? "<" + z + ">" : "<...>";
        } catch {
          return "<...>";
        }
      }
      function U() {
        var m = Qe.A;
        return m === null ? null : m.getOwner();
      }
      function le() {
        return Error("react-stack-top-frame");
      }
      function ze(m) {
        if (On.call(m, "key")) {
          var z = Object.getOwnPropertyDescriptor(m, "key").get;
          if (z && z.isReactWarning) return !1;
        }
        return m.key !== void 0;
      }
      function ot(m, z) {
        function te() {
          mu || (mu = !0, console.error(
            "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
            z
          ));
        }
        te.isReactWarning = !0, Object.defineProperty(m, "key", {
          get: te,
          configurable: !0
        });
      }
      function Ve() {
        var m = ue(this.type);
        return df[m] || (df[m] = !0, console.error(
          "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
        )), m = this.props.ref, m !== void 0 ? m : null;
      }
      function Xe(m, z, te, ne, pe, Ce, Be, at) {
        return te = Ce.ref, m = {
          $$typeof: P,
          type: m,
          key: z,
          props: Ce,
          _owner: pe
        }, (te !== void 0 ? te : null) !== null ? Object.defineProperty(m, "ref", {
          enumerable: !1,
          get: Ve
        }) : Object.defineProperty(m, "ref", { enumerable: !1, value: null }), m._store = {}, Object.defineProperty(m._store, "validated", {
          configurable: !1,
          enumerable: !1,
          writable: !0,
          value: 0
        }), Object.defineProperty(m, "_debugInfo", {
          configurable: !1,
          enumerable: !1,
          writable: !0,
          value: null
        }), Object.defineProperty(m, "_debugStack", {
          configurable: !1,
          enumerable: !1,
          writable: !0,
          value: Be
        }), Object.defineProperty(m, "_debugTask", {
          configurable: !1,
          enumerable: !1,
          writable: !0,
          value: at
        }), Object.freeze && (Object.freeze(m.props), Object.freeze(m)), m;
      }
      function It(m, z) {
        return z = Xe(
          m.type,
          z,
          void 0,
          void 0,
          m._owner,
          m.props,
          m._debugStack,
          m._debugTask
        ), m._store && (z._store.validated = m._store.validated), z;
      }
      function rt(m) {
        return typeof m == "object" && m !== null && m.$$typeof === P;
      }
      function Wt(m) {
        var z = { "=": "=0", ":": "=2" };
        return "$" + m.replace(/[=:]/g, function(te) {
          return z[te];
        });
      }
      function Ne(m, z) {
        return typeof m == "object" && m !== null && m.key != null ? (J(m.key), Wt("" + m.key)) : z.toString(36);
      }
      function Rt() {
      }
      function We(m) {
        switch (m.status) {
          case "fulfilled":
            return m.value;
          case "rejected":
            throw m.reason;
          default:
            switch (typeof m.status == "string" ? m.then(Rt, Rt) : (m.status = "pending", m.then(
              function(z) {
                m.status === "pending" && (m.status = "fulfilled", m.value = z);
              },
              function(z) {
                m.status === "pending" && (m.status = "rejected", m.reason = z);
              }
            )), m.status) {
              case "fulfilled":
                return m.value;
              case "rejected":
                throw m.reason;
            }
        }
        throw m;
      }
      function Ot(m, z, te, ne, pe) {
        var Ce = typeof m;
        (Ce === "undefined" || Ce === "boolean") && (m = null);
        var Be = !1;
        if (m === null) Be = !0;
        else
          switch (Ce) {
            case "bigint":
            case "string":
            case "number":
              Be = !0;
              break;
            case "object":
              switch (m.$$typeof) {
                case P:
                case ge:
                  Be = !0;
                  break;
                case xt:
                  return Be = m._init, Ot(
                    Be(m._payload),
                    z,
                    te,
                    ne,
                    pe
                  );
              }
          }
        if (Be) {
          Be = m, pe = pe(Be);
          var at = ne === "" ? "." + Ne(Be, 0) : ne;
          return ku(pe) ? (te = "", at != null && (te = at.replace(Al, "$&/") + "/"), Ot(pe, z, te, "", function(el) {
            return el;
          })) : pe != null && (rt(pe) && (pe.key != null && (Be && Be.key === pe.key || J(pe.key)), te = It(
            pe,
            te + (pe.key == null || Be && Be.key === pe.key ? "" : ("" + pe.key).replace(
              Al,
              "$&/"
            ) + "/") + at
          ), ne !== "" && Be != null && rt(Be) && Be.key == null && Be._store && !Be._store.validated && (te._store.validated = 2), pe = te), z.push(pe)), 1;
        }
        if (Be = 0, at = ne === "" ? "." : ne + ":", ku(m))
          for (var we = 0; we < m.length; we++)
            ne = m[we], Ce = at + Ne(ne, we), Be += Ot(
              ne,
              z,
              te,
              Ce,
              pe
            );
        else if (we = D(m), typeof we == "function")
          for (we === m.entries && (wa || console.warn(
            "Using Maps as children is not supported. Use an array of keyed ReactElements instead."
          ), wa = !0), m = we.call(m), we = 0; !(ne = m.next()).done; )
            ne = ne.value, Ce = at + Ne(ne, we++), Be += Ot(
              ne,
              z,
              te,
              Ce,
              pe
            );
        else if (Ce === "object") {
          if (typeof m.then == "function")
            return Ot(
              We(m),
              z,
              te,
              ne,
              pe
            );
          throw z = String(m), Error(
            "Objects are not valid as a React child (found: " + (z === "[object Object]" ? "object with keys {" + Object.keys(m).join(", ") + "}" : z) + "). If you meant to render a collection of children, use an array instead."
          );
        }
        return Be;
      }
      function de(m, z, te) {
        if (m == null) return m;
        var ne = [], pe = 0;
        return Ot(m, ne, "", "", function(Ce) {
          return z.call(te, Ce, pe++);
        }), ne;
      }
      function zt(m) {
        if (m._status === -1) {
          var z = m._result;
          z = z(), z.then(
            function(te) {
              (m._status === 0 || m._status === -1) && (m._status = 1, m._result = te);
            },
            function(te) {
              (m._status === 0 || m._status === -1) && (m._status = 2, m._result = te);
            }
          ), m._status === -1 && (m._status = 0, m._result = z);
        }
        if (m._status === 1)
          return z = m._result, z === void 0 && console.error(
            `lazy: Expected the result of a dynamic import() call. Instead received: %s

Your code should look like: 
  const MyComponent = lazy(() => import('./MyComponent'))

Did you accidentally put curly braces around the import?`,
            z
          ), "default" in z || console.error(
            `lazy: Expected the result of a dynamic import() call. Instead received: %s

Your code should look like: 
  const MyComponent = lazy(() => import('./MyComponent'))`,
            z
          ), z.default;
        throw m._result;
      }
      function Se() {
        var m = Qe.H;
        return m === null && console.error(
          `Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://react.dev/link/invalid-hook-call for tips about how to debug and fix this problem.`
        ), m;
      }
      function De() {
      }
      function Mt(m) {
        if (kc === null)
          try {
            var z = ("require" + Math.random()).slice(0, 7);
            kc = (H && H[z]).call(
              H,
              "timers"
            ).setImmediate;
          } catch {
            kc = function(ne) {
              hf === !1 && (hf = !0, typeof MessageChannel > "u" && console.error(
                "This browser does not have a MessageChannel implementation, so enqueuing tasks via await act(async () => ...) will fail. Please file an issue at https://github.com/facebook/react/issues if you encounter this warning."
              ));
              var pe = new MessageChannel();
              pe.port1.onmessage = ne, pe.port2.postMessage(void 0);
            };
          }
        return kc(m);
      }
      function Yt(m) {
        return 1 < m.length && typeof AggregateError == "function" ? new AggregateError(m) : m[0];
      }
      function mt(m, z) {
        z !== tn - 1 && console.error(
          "You seem to have overlapping act() calls, this is not supported. Be sure to await previous act() calls before making a new one. "
        ), tn = z;
      }
      function O(m, z, te) {
        var ne = Qe.actQueue;
        if (ne !== null)
          if (ne.length !== 0)
            try {
              W(ne), Mt(function() {
                return O(m, z, te);
              });
              return;
            } catch (pe) {
              Qe.thrownErrors.push(pe);
            }
          else Qe.actQueue = null;
        0 < Qe.thrownErrors.length ? (ne = Yt(Qe.thrownErrors), Qe.thrownErrors.length = 0, te(ne)) : z(m);
      }
      function W(m) {
        if (!Rl) {
          Rl = !0;
          var z = 0;
          try {
            for (; z < m.length; z++) {
              var te = m[z];
              do {
                Qe.didUsePromise = !1;
                var ne = te(!1);
                if (ne !== null) {
                  if (Qe.didUsePromise) {
                    m[z] = te, m.splice(0, z);
                    return;
                  }
                  te = ne;
                } else break;
              } while (!0);
            }
            m.length = 0;
          } catch (pe) {
            m.splice(0, z + 1), Qe.thrownErrors.push(pe);
          } finally {
            Rl = !1;
          }
        }
      }
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(Error());
      var P = Symbol.for("react.transitional.element"), ge = Symbol.for("react.portal"), g = Symbol.for("react.fragment"), w = Symbol.for("react.strict_mode"), Z = Symbol.for("react.profiler"), I = Symbol.for("react.consumer"), ce = Symbol.for("react.context"), Ae = Symbol.for("react.forward_ref"), oe = Symbol.for("react.suspense"), nl = Symbol.for("react.suspense_list"), _e = Symbol.for("react.memo"), xt = Symbol.for("react.lazy"), ta = Symbol.for("react.activity"), An = Symbol.iterator, ji = {}, Rn = {
        isMounted: function() {
          return !1;
        },
        enqueueForceUpdate: function(m) {
          re(m, "forceUpdate");
        },
        enqueueReplaceState: function(m) {
          re(m, "replaceState");
        },
        enqueueSetState: function(m) {
          re(m, "setState");
        }
      }, Zc = Object.assign, sf = {};
      Object.freeze(sf), ve.prototype.isReactComponent = {}, ve.prototype.setState = function(m, z) {
        if (typeof m != "object" && typeof m != "function" && m != null)
          throw Error(
            "takes an object of state variables to update or a function which returns an object of state variables."
          );
        this.updater.enqueueSetState(this, m, z, "setState");
      }, ve.prototype.forceUpdate = function(m) {
        this.updater.enqueueForceUpdate(this, m, "forceUpdate");
      };
      var Pt = {
        isMounted: [
          "isMounted",
          "Instead, make sure to clean up subscriptions and pending requests in componentWillUnmount to prevent memory leaks."
        ],
        replaceState: [
          "replaceState",
          "Refactor your code to use setState instead (see https://github.com/facebook/react/issues/3236)."
        ]
      }, hl;
      for (hl in Pt)
        Pt.hasOwnProperty(hl) && ie(hl, Pt[hl]);
      Ie.prototype = ve.prototype, Pt = ct.prototype = new Ie(), Pt.constructor = ct, Zc(Pt, ve.prototype), Pt.isPureReactComponent = !0;
      var ku = Array.isArray, Fr = Symbol.for("react.client.reference"), Qe = {
        H: null,
        A: null,
        T: null,
        S: null,
        V: null,
        actQueue: null,
        isBatchingLegacy: !1,
        didScheduleLegacyUpdate: !1,
        didUsePromise: !1,
        thrownErrors: [],
        getCurrentStack: null,
        recentlyCreatedOwnerStacks: 0
      }, On = Object.prototype.hasOwnProperty, Kc = console.createTask ? console.createTask : function() {
        return null;
      };
      Pt = {
        react_stack_bottom_frame: function(m) {
          return m();
        }
      };
      var mu, Ir, df = {}, $u = Pt.react_stack_bottom_frame.bind(
        Pt,
        le
      )(), El = Kc(K(le)), wa = !1, Al = /\/+/g, Jc = typeof reportError == "function" ? reportError : function(m) {
        if (typeof window == "object" && typeof window.ErrorEvent == "function") {
          var z = new window.ErrorEvent("error", {
            bubbles: !0,
            cancelable: !0,
            message: typeof m == "object" && m !== null && typeof m.message == "string" ? String(m.message) : String(m),
            error: m
          });
          if (!window.dispatchEvent(z)) return;
        } else if (typeof process == "object" && typeof process.emit == "function") {
          process.emit("uncaughtException", m);
          return;
        }
        console.error(m);
      }, hf = !1, kc = null, tn = 0, la = !1, Rl = !1, ln = typeof queueMicrotask == "function" ? function(m) {
        queueMicrotask(function() {
          return queueMicrotask(m);
        });
      } : Mt;
      Pt = Object.freeze({
        __proto__: null,
        c: function(m) {
          return Se().useMemoCache(m);
        }
      }), F.Children = {
        map: de,
        forEach: function(m, z, te) {
          de(
            m,
            function() {
              z.apply(this, arguments);
            },
            te
          );
        },
        count: function(m) {
          var z = 0;
          return de(m, function() {
            z++;
          }), z;
        },
        toArray: function(m) {
          return de(m, function(z) {
            return z;
          }) || [];
        },
        only: function(m) {
          if (!rt(m))
            throw Error(
              "React.Children.only expected to receive a single React element child."
            );
          return m;
        }
      }, F.Component = ve, F.Fragment = g, F.Profiler = Z, F.PureComponent = ct, F.StrictMode = w, F.Suspense = oe, F.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = Qe, F.__COMPILER_RUNTIME = Pt, F.act = function(m) {
        var z = Qe.actQueue, te = tn;
        tn++;
        var ne = Qe.actQueue = z !== null ? z : [], pe = !1;
        try {
          var Ce = m();
        } catch (we) {
          Qe.thrownErrors.push(we);
        }
        if (0 < Qe.thrownErrors.length)
          throw mt(z, te), m = Yt(Qe.thrownErrors), Qe.thrownErrors.length = 0, m;
        if (Ce !== null && typeof Ce == "object" && typeof Ce.then == "function") {
          var Be = Ce;
          return ln(function() {
            pe || la || (la = !0, console.error(
              "You called act(async () => ...) without await. This could lead to unexpected testing behaviour, interleaving multiple act calls and mixing their scopes. You should - await act(async () => ...);"
            ));
          }), {
            then: function(we, el) {
              pe = !0, Be.then(
                function(an) {
                  if (mt(z, te), te === 0) {
                    try {
                      W(ne), Mt(function() {
                        return O(
                          an,
                          we,
                          el
                        );
                      });
                    } catch (Th) {
                      Qe.thrownErrors.push(Th);
                    }
                    if (0 < Qe.thrownErrors.length) {
                      var Pr = Yt(
                        Qe.thrownErrors
                      );
                      Qe.thrownErrors.length = 0, el(Pr);
                    }
                  } else we(an);
                },
                function(an) {
                  mt(z, te), 0 < Qe.thrownErrors.length && (an = Yt(
                    Qe.thrownErrors
                  ), Qe.thrownErrors.length = 0), el(an);
                }
              );
            }
          };
        }
        var at = Ce;
        if (mt(z, te), te === 0 && (W(ne), ne.length !== 0 && ln(function() {
          pe || la || (la = !0, console.error(
            "A component suspended inside an `act` scope, but the `act` call was not awaited. When testing React components that depend on asynchronous data, you must await the result:\n\nawait act(() => ...)"
          ));
        }), Qe.actQueue = null), 0 < Qe.thrownErrors.length)
          throw m = Yt(Qe.thrownErrors), Qe.thrownErrors.length = 0, m;
        return {
          then: function(we, el) {
            pe = !0, te === 0 ? (Qe.actQueue = ne, Mt(function() {
              return O(
                at,
                we,
                el
              );
            })) : we(at);
          }
        };
      }, F.cache = function(m) {
        return function() {
          return m.apply(null, arguments);
        };
      }, F.captureOwnerStack = function() {
        var m = Qe.getCurrentStack;
        return m === null ? null : m();
      }, F.cloneElement = function(m, z, te) {
        if (m == null)
          throw Error(
            "The argument must be a React element, but you passed " + m + "."
          );
        var ne = Zc({}, m.props), pe = m.key, Ce = m._owner;
        if (z != null) {
          var Be;
          e: {
            if (On.call(z, "ref") && (Be = Object.getOwnPropertyDescriptor(
              z,
              "ref"
            ).get) && Be.isReactWarning) {
              Be = !1;
              break e;
            }
            Be = z.ref !== void 0;
          }
          Be && (Ce = U()), ze(z) && (J(z.key), pe = "" + z.key);
          for (at in z)
            !On.call(z, at) || at === "key" || at === "__self" || at === "__source" || at === "ref" && z.ref === void 0 || (ne[at] = z[at]);
        }
        var at = arguments.length - 2;
        if (at === 1) ne.children = te;
        else if (1 < at) {
          Be = Array(at);
          for (var we = 0; we < at; we++)
            Be[we] = arguments[we + 2];
          ne.children = Be;
        }
        for (ne = Xe(
          m.type,
          pe,
          void 0,
          void 0,
          Ce,
          ne,
          m._debugStack,
          m._debugTask
        ), pe = 2; pe < arguments.length; pe++)
          Ce = arguments[pe], rt(Ce) && Ce._store && (Ce._store.validated = 1);
        return ne;
      }, F.createContext = function(m) {
        return m = {
          $$typeof: ce,
          _currentValue: m,
          _currentValue2: m,
          _threadCount: 0,
          Provider: null,
          Consumer: null
        }, m.Provider = m, m.Consumer = {
          $$typeof: I,
          _context: m
        }, m._currentRenderer = null, m._currentRenderer2 = null, m;
      }, F.createElement = function(m, z, te) {
        for (var ne = 2; ne < arguments.length; ne++) {
          var pe = arguments[ne];
          rt(pe) && pe._store && (pe._store.validated = 1);
        }
        if (ne = {}, pe = null, z != null)
          for (we in Ir || !("__self" in z) || "key" in z || (Ir = !0, console.warn(
            "Your app (or one of its dependencies) is using an outdated JSX transform. Update to the modern JSX transform for faster performance: https://react.dev/link/new-jsx-transform"
          )), ze(z) && (J(z.key), pe = "" + z.key), z)
            On.call(z, we) && we !== "key" && we !== "__self" && we !== "__source" && (ne[we] = z[we]);
        var Ce = arguments.length - 2;
        if (Ce === 1) ne.children = te;
        else if (1 < Ce) {
          for (var Be = Array(Ce), at = 0; at < Ce; at++)
            Be[at] = arguments[at + 2];
          Object.freeze && Object.freeze(Be), ne.children = Be;
        }
        if (m && m.defaultProps)
          for (we in Ce = m.defaultProps, Ce)
            ne[we] === void 0 && (ne[we] = Ce[we]);
        pe && ot(
          ne,
          typeof m == "function" ? m.displayName || m.name || "Unknown" : m
        );
        var we = 1e4 > Qe.recentlyCreatedOwnerStacks++;
        return Xe(
          m,
          pe,
          void 0,
          void 0,
          U(),
          ne,
          we ? Error("react-stack-top-frame") : $u,
          we ? Kc(K(m)) : El
        );
      }, F.createRef = function() {
        var m = { current: null };
        return Object.seal(m), m;
      }, F.forwardRef = function(m) {
        m != null && m.$$typeof === _e ? console.error(
          "forwardRef requires a render function but received a `memo` component. Instead of forwardRef(memo(...)), use memo(forwardRef(...))."
        ) : typeof m != "function" ? console.error(
          "forwardRef requires a render function but was given %s.",
          m === null ? "null" : typeof m
        ) : m.length !== 0 && m.length !== 2 && console.error(
          "forwardRef render functions accept exactly two parameters: props and ref. %s",
          m.length === 1 ? "Did you forget to use the ref parameter?" : "Any additional parameter will be undefined."
        ), m != null && m.defaultProps != null && console.error(
          "forwardRef render functions do not support defaultProps. Did you accidentally pass a React component?"
        );
        var z = { $$typeof: Ae, render: m }, te;
        return Object.defineProperty(z, "displayName", {
          enumerable: !1,
          configurable: !0,
          get: function() {
            return te;
          },
          set: function(ne) {
            te = ne, m.name || m.displayName || (Object.defineProperty(m, "name", { value: ne }), m.displayName = ne);
          }
        }), z;
      }, F.isValidElement = rt, F.lazy = function(m) {
        return {
          $$typeof: xt,
          _payload: { _status: -1, _result: m },
          _init: zt
        };
      }, F.memo = function(m, z) {
        m == null && console.error(
          "memo: The first argument must be a component. Instead received: %s",
          m === null ? "null" : typeof m
        ), z = {
          $$typeof: _e,
          type: m,
          compare: z === void 0 ? null : z
        };
        var te;
        return Object.defineProperty(z, "displayName", {
          enumerable: !1,
          configurable: !0,
          get: function() {
            return te;
          },
          set: function(ne) {
            te = ne, m.name || m.displayName || (Object.defineProperty(m, "name", { value: ne }), m.displayName = ne);
          }
        }), z;
      }, F.startTransition = function(m) {
        var z = Qe.T, te = {};
        Qe.T = te, te._updatedFibers = /* @__PURE__ */ new Set();
        try {
          var ne = m(), pe = Qe.S;
          pe !== null && pe(te, ne), typeof ne == "object" && ne !== null && typeof ne.then == "function" && ne.then(De, Jc);
        } catch (Ce) {
          Jc(Ce);
        } finally {
          z === null && te._updatedFibers && (m = te._updatedFibers.size, te._updatedFibers.clear(), 10 < m && console.warn(
            "Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table."
          )), Qe.T = z;
        }
      }, F.unstable_useCacheRefresh = function() {
        return Se().useCacheRefresh();
      }, F.use = function(m) {
        return Se().use(m);
      }, F.useActionState = function(m, z, te) {
        return Se().useActionState(
          m,
          z,
          te
        );
      }, F.useCallback = function(m, z) {
        return Se().useCallback(m, z);
      }, F.useContext = function(m) {
        var z = Se();
        return m.$$typeof === I && console.error(
          "Calling useContext(Context.Consumer) is not supported and will cause bugs. Did you mean to call useContext(Context) instead?"
        ), z.useContext(m);
      }, F.useDebugValue = function(m, z) {
        return Se().useDebugValue(m, z);
      }, F.useDeferredValue = function(m, z) {
        return Se().useDeferredValue(m, z);
      }, F.useEffect = function(m, z, te) {
        m == null && console.warn(
          "React Hook useEffect requires an effect callback. Did you forget to pass a callback to the hook?"
        );
        var ne = Se();
        if (typeof te == "function")
          throw Error(
            "useEffect CRUD overload is not enabled in this build of React."
          );
        return ne.useEffect(m, z);
      }, F.useId = function() {
        return Se().useId();
      }, F.useImperativeHandle = function(m, z, te) {
        return Se().useImperativeHandle(m, z, te);
      }, F.useInsertionEffect = function(m, z) {
        return m == null && console.warn(
          "React Hook useInsertionEffect requires an effect callback. Did you forget to pass a callback to the hook?"
        ), Se().useInsertionEffect(m, z);
      }, F.useLayoutEffect = function(m, z) {
        return m == null && console.warn(
          "React Hook useLayoutEffect requires an effect callback. Did you forget to pass a callback to the hook?"
        ), Se().useLayoutEffect(m, z);
      }, F.useMemo = function(m, z) {
        return Se().useMemo(m, z);
      }, F.useOptimistic = function(m, z) {
        return Se().useOptimistic(m, z);
      }, F.useReducer = function(m, z, te) {
        return Se().useReducer(m, z, te);
      }, F.useRef = function(m) {
        return Se().useRef(m);
      }, F.useState = function(m) {
        return Se().useState(m);
      }, F.useSyncExternalStore = function(m, z, te) {
        return Se().useSyncExternalStore(
          m,
          z,
          te
        );
      }, F.useTransition = function() {
        return Se().useTransition();
      }, F.version = "19.1.1", typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(Error());
    })();
  })(yp, yp.exports)), yp.exports;
}
var xb;
function mp() {
  return xb || (xb = 1, process.env.NODE_ENV === "production" ? cg.exports = uT() : cg.exports = iT()), cg.exports;
}
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Nb;
function cT() {
  return Nb || (Nb = 1, process.env.NODE_ENV !== "production" && (function() {
    function H(g) {
      if (g == null) return null;
      if (typeof g == "function")
        return g.$$typeof === zt ? null : g.displayName || g.name || null;
      if (typeof g == "string") return g;
      switch (g) {
        case ot:
          return "Fragment";
        case Xe:
          return "Profiler";
        case Ve:
          return "StrictMode";
        case Ne:
          return "Suspense";
        case Rt:
          return "SuspenseList";
        case de:
          return "Activity";
      }
      if (typeof g == "object")
        switch (typeof g.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), g.$$typeof) {
          case ze:
            return "Portal";
          case rt:
            return (g.displayName || "Context") + ".Provider";
          case It:
            return (g._context.displayName || "Context") + ".Consumer";
          case Wt:
            var w = g.render;
            return g = g.displayName, g || (g = w.displayName || w.name || "", g = g !== "" ? "ForwardRef(" + g + ")" : "ForwardRef"), g;
          case We:
            return w = g.displayName || null, w !== null ? w : H(g.type) || "Memo";
          case Ot:
            w = g._payload, g = g._init;
            try {
              return H(g(w));
            } catch {
            }
        }
      return null;
    }
    function F(g) {
      return "" + g;
    }
    function ie(g) {
      try {
        F(g);
        var w = !1;
      } catch {
        w = !0;
      }
      if (w) {
        w = console;
        var Z = w.error, I = typeof Symbol == "function" && Symbol.toStringTag && g[Symbol.toStringTag] || g.constructor.name || "Object";
        return Z.call(
          w,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          I
        ), F(g);
      }
    }
    function D(g) {
      if (g === ot) return "<>";
      if (typeof g == "object" && g !== null && g.$$typeof === Ot)
        return "<...>";
      try {
        var w = H(g);
        return w ? "<" + w + ">" : "<...>";
      } catch {
        return "<...>";
      }
    }
    function re() {
      var g = Se.A;
      return g === null ? null : g.getOwner();
    }
    function ve() {
      return Error("react-stack-top-frame");
    }
    function Ie(g) {
      if (De.call(g, "key")) {
        var w = Object.getOwnPropertyDescriptor(g, "key").get;
        if (w && w.isReactWarning) return !1;
      }
      return g.key !== void 0;
    }
    function ct(g, w) {
      function Z() {
        mt || (mt = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          w
        ));
      }
      Z.isReactWarning = !0, Object.defineProperty(g, "key", {
        get: Z,
        configurable: !0
      });
    }
    function Y() {
      var g = H(this.type);
      return O[g] || (O[g] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), g = this.props.ref, g !== void 0 ? g : null;
    }
    function J(g, w, Z, I, ce, Ae, oe, nl) {
      return Z = Ae.ref, g = {
        $$typeof: le,
        type: g,
        key: w,
        props: Ae,
        _owner: ce
      }, (Z !== void 0 ? Z : null) !== null ? Object.defineProperty(g, "ref", {
        enumerable: !1,
        get: Y
      }) : Object.defineProperty(g, "ref", { enumerable: !1, value: null }), g._store = {}, Object.defineProperty(g._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: 0
      }), Object.defineProperty(g, "_debugInfo", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: null
      }), Object.defineProperty(g, "_debugStack", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: oe
      }), Object.defineProperty(g, "_debugTask", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: nl
      }), Object.freeze && (Object.freeze(g.props), Object.freeze(g)), g;
    }
    function ue(g, w, Z, I, ce, Ae, oe, nl) {
      var _e = w.children;
      if (_e !== void 0)
        if (I)
          if (Mt(_e)) {
            for (I = 0; I < _e.length; I++)
              K(_e[I]);
            Object.freeze && Object.freeze(_e);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else K(_e);
      if (De.call(w, "key")) {
        _e = H(g);
        var xt = Object.keys(w).filter(function(An) {
          return An !== "key";
        });
        I = 0 < xt.length ? "{key: someKey, " + xt.join(": ..., ") + ": ...}" : "{key: someKey}", ge[_e + I] || (xt = 0 < xt.length ? "{" + xt.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          I,
          _e,
          xt,
          _e
        ), ge[_e + I] = !0);
      }
      if (_e = null, Z !== void 0 && (ie(Z), _e = "" + Z), Ie(w) && (ie(w.key), _e = "" + w.key), "key" in w) {
        Z = {};
        for (var ta in w)
          ta !== "key" && (Z[ta] = w[ta]);
      } else Z = w;
      return _e && ct(
        Z,
        typeof g == "function" ? g.displayName || g.name || "Unknown" : g
      ), J(
        g,
        _e,
        Ae,
        ce,
        re(),
        Z,
        oe,
        nl
      );
    }
    function K(g) {
      typeof g == "object" && g !== null && g.$$typeof === le && g._store && (g._store.validated = 1);
    }
    var U = mp(), le = Symbol.for("react.transitional.element"), ze = Symbol.for("react.portal"), ot = Symbol.for("react.fragment"), Ve = Symbol.for("react.strict_mode"), Xe = Symbol.for("react.profiler"), It = Symbol.for("react.consumer"), rt = Symbol.for("react.context"), Wt = Symbol.for("react.forward_ref"), Ne = Symbol.for("react.suspense"), Rt = Symbol.for("react.suspense_list"), We = Symbol.for("react.memo"), Ot = Symbol.for("react.lazy"), de = Symbol.for("react.activity"), zt = Symbol.for("react.client.reference"), Se = U.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, De = Object.prototype.hasOwnProperty, Mt = Array.isArray, Yt = console.createTask ? console.createTask : function() {
      return null;
    };
    U = {
      react_stack_bottom_frame: function(g) {
        return g();
      }
    };
    var mt, O = {}, W = U.react_stack_bottom_frame.bind(
      U,
      ve
    )(), P = Yt(D(ve)), ge = {};
    sp.Fragment = ot, sp.jsx = function(g, w, Z, I, ce) {
      var Ae = 1e4 > Se.recentlyCreatedOwnerStacks++;
      return ue(
        g,
        w,
        Z,
        !1,
        I,
        ce,
        Ae ? Error("react-stack-top-frame") : W,
        Ae ? Yt(D(g)) : P
      );
    }, sp.jsxs = function(g, w, Z, I, ce) {
      var Ae = 1e4 > Se.recentlyCreatedOwnerStacks++;
      return ue(
        g,
        w,
        Z,
        !0,
        I,
        ce,
        Ae ? Error("react-stack-top-frame") : W,
        Ae ? Yt(D(g)) : P
      );
    };
  })()), sp;
}
var wb;
function oT() {
  return wb || (wb = 1, process.env.NODE_ENV === "production" ? ig.exports = nT() : ig.exports = cT()), ig.exports;
}
var sg = oT(), og = { exports: {} }, dp = {}, fg = { exports: {} }, _0 = {};
/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Bb;
function fT() {
  return Bb || (Bb = 1, (function(H) {
    function F(O, W) {
      var P = O.length;
      O.push(W);
      e: for (; 0 < P; ) {
        var ge = P - 1 >>> 1, g = O[ge];
        if (0 < re(g, W))
          O[ge] = W, O[P] = g, P = ge;
        else break e;
      }
    }
    function ie(O) {
      return O.length === 0 ? null : O[0];
    }
    function D(O) {
      if (O.length === 0) return null;
      var W = O[0], P = O.pop();
      if (P !== W) {
        O[0] = P;
        e: for (var ge = 0, g = O.length, w = g >>> 1; ge < w; ) {
          var Z = 2 * (ge + 1) - 1, I = O[Z], ce = Z + 1, Ae = O[ce];
          if (0 > re(I, P))
            ce < g && 0 > re(Ae, I) ? (O[ge] = Ae, O[ce] = P, ge = ce) : (O[ge] = I, O[Z] = P, ge = Z);
          else if (ce < g && 0 > re(Ae, P))
            O[ge] = Ae, O[ce] = P, ge = ce;
          else break e;
        }
      }
      return W;
    }
    function re(O, W) {
      var P = O.sortIndex - W.sortIndex;
      return P !== 0 ? P : O.id - W.id;
    }
    if (H.unstable_now = void 0, typeof performance == "object" && typeof performance.now == "function") {
      var ve = performance;
      H.unstable_now = function() {
        return ve.now();
      };
    } else {
      var Ie = Date, ct = Ie.now();
      H.unstable_now = function() {
        return Ie.now() - ct;
      };
    }
    var Y = [], J = [], ue = 1, K = null, U = 3, le = !1, ze = !1, ot = !1, Ve = !1, Xe = typeof setTimeout == "function" ? setTimeout : null, It = typeof clearTimeout == "function" ? clearTimeout : null, rt = typeof setImmediate < "u" ? setImmediate : null;
    function Wt(O) {
      for (var W = ie(J); W !== null; ) {
        if (W.callback === null) D(J);
        else if (W.startTime <= O)
          D(J), W.sortIndex = W.expirationTime, F(Y, W);
        else break;
        W = ie(J);
      }
    }
    function Ne(O) {
      if (ot = !1, Wt(O), !ze)
        if (ie(Y) !== null)
          ze = !0, Rt || (Rt = !0, De());
        else {
          var W = ie(J);
          W !== null && mt(Ne, W.startTime - O);
        }
    }
    var Rt = !1, We = -1, Ot = 5, de = -1;
    function zt() {
      return Ve ? !0 : !(H.unstable_now() - de < Ot);
    }
    function Se() {
      if (Ve = !1, Rt) {
        var O = H.unstable_now();
        de = O;
        var W = !0;
        try {
          e: {
            ze = !1, ot && (ot = !1, It(We), We = -1), le = !0;
            var P = U;
            try {
              t: {
                for (Wt(O), K = ie(Y); K !== null && !(K.expirationTime > O && zt()); ) {
                  var ge = K.callback;
                  if (typeof ge == "function") {
                    K.callback = null, U = K.priorityLevel;
                    var g = ge(
                      K.expirationTime <= O
                    );
                    if (O = H.unstable_now(), typeof g == "function") {
                      K.callback = g, Wt(O), W = !0;
                      break t;
                    }
                    K === ie(Y) && D(Y), Wt(O);
                  } else D(Y);
                  K = ie(Y);
                }
                if (K !== null) W = !0;
                else {
                  var w = ie(J);
                  w !== null && mt(
                    Ne,
                    w.startTime - O
                  ), W = !1;
                }
              }
              break e;
            } finally {
              K = null, U = P, le = !1;
            }
            W = void 0;
          }
        } finally {
          W ? De() : Rt = !1;
        }
      }
    }
    var De;
    if (typeof rt == "function")
      De = function() {
        rt(Se);
      };
    else if (typeof MessageChannel < "u") {
      var Mt = new MessageChannel(), Yt = Mt.port2;
      Mt.port1.onmessage = Se, De = function() {
        Yt.postMessage(null);
      };
    } else
      De = function() {
        Xe(Se, 0);
      };
    function mt(O, W) {
      We = Xe(function() {
        O(H.unstable_now());
      }, W);
    }
    H.unstable_IdlePriority = 5, H.unstable_ImmediatePriority = 1, H.unstable_LowPriority = 4, H.unstable_NormalPriority = 3, H.unstable_Profiling = null, H.unstable_UserBlockingPriority = 2, H.unstable_cancelCallback = function(O) {
      O.callback = null;
    }, H.unstable_forceFrameRate = function(O) {
      0 > O || 125 < O ? console.error(
        "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
      ) : Ot = 0 < O ? Math.floor(1e3 / O) : 5;
    }, H.unstable_getCurrentPriorityLevel = function() {
      return U;
    }, H.unstable_next = function(O) {
      switch (U) {
        case 1:
        case 2:
        case 3:
          var W = 3;
          break;
        default:
          W = U;
      }
      var P = U;
      U = W;
      try {
        return O();
      } finally {
        U = P;
      }
    }, H.unstable_requestPaint = function() {
      Ve = !0;
    }, H.unstable_runWithPriority = function(O, W) {
      switch (O) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          O = 3;
      }
      var P = U;
      U = O;
      try {
        return W();
      } finally {
        U = P;
      }
    }, H.unstable_scheduleCallback = function(O, W, P) {
      var ge = H.unstable_now();
      switch (typeof P == "object" && P !== null ? (P = P.delay, P = typeof P == "number" && 0 < P ? ge + P : ge) : P = ge, O) {
        case 1:
          var g = -1;
          break;
        case 2:
          g = 250;
          break;
        case 5:
          g = 1073741823;
          break;
        case 4:
          g = 1e4;
          break;
        default:
          g = 5e3;
      }
      return g = P + g, O = {
        id: ue++,
        callback: W,
        priorityLevel: O,
        startTime: P,
        expirationTime: g,
        sortIndex: -1
      }, P > ge ? (O.sortIndex = P, F(J, O), ie(Y) === null && O === ie(J) && (ot ? (It(We), We = -1) : ot = !0, mt(Ne, P - ge))) : (O.sortIndex = g, F(Y, O), ze || le || (ze = !0, Rt || (Rt = !0, De()))), O;
    }, H.unstable_shouldYield = zt, H.unstable_wrapCallback = function(O) {
      var W = U;
      return function() {
        var P = U;
        U = W;
        try {
          return O.apply(this, arguments);
        } finally {
          U = P;
        }
      };
    };
  })(_0)), _0;
}
var C0 = {};
/**
 * @license React
 * scheduler.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var qb;
function rT() {
  return qb || (qb = 1, (function(H) {
    process.env.NODE_ENV !== "production" && (function() {
      function F() {
        if (Ne = !1, de) {
          var O = H.unstable_now();
          De = O;
          var W = !0;
          try {
            e: {
              rt = !1, Wt && (Wt = !1, We(zt), zt = -1), It = !0;
              var P = Xe;
              try {
                t: {
                  for (Ie(O), Ve = D(le); Ve !== null && !(Ve.expirationTime > O && Y()); ) {
                    var ge = Ve.callback;
                    if (typeof ge == "function") {
                      Ve.callback = null, Xe = Ve.priorityLevel;
                      var g = ge(
                        Ve.expirationTime <= O
                      );
                      if (O = H.unstable_now(), typeof g == "function") {
                        Ve.callback = g, Ie(O), W = !0;
                        break t;
                      }
                      Ve === D(le) && re(le), Ie(O);
                    } else re(le);
                    Ve = D(le);
                  }
                  if (Ve !== null) W = !0;
                  else {
                    var w = D(ze);
                    w !== null && J(
                      ct,
                      w.startTime - O
                    ), W = !1;
                  }
                }
                break e;
              } finally {
                Ve = null, Xe = P, It = !1;
              }
              W = void 0;
            }
          } finally {
            W ? Mt() : de = !1;
          }
        }
      }
      function ie(O, W) {
        var P = O.length;
        O.push(W);
        e: for (; 0 < P; ) {
          var ge = P - 1 >>> 1, g = O[ge];
          if (0 < ve(g, W))
            O[ge] = W, O[P] = g, P = ge;
          else break e;
        }
      }
      function D(O) {
        return O.length === 0 ? null : O[0];
      }
      function re(O) {
        if (O.length === 0) return null;
        var W = O[0], P = O.pop();
        if (P !== W) {
          O[0] = P;
          e: for (var ge = 0, g = O.length, w = g >>> 1; ge < w; ) {
            var Z = 2 * (ge + 1) - 1, I = O[Z], ce = Z + 1, Ae = O[ce];
            if (0 > ve(I, P))
              ce < g && 0 > ve(Ae, I) ? (O[ge] = Ae, O[ce] = P, ge = ce) : (O[ge] = I, O[Z] = P, ge = Z);
            else if (ce < g && 0 > ve(Ae, P))
              O[ge] = Ae, O[ce] = P, ge = ce;
            else break e;
          }
        }
        return W;
      }
      function ve(O, W) {
        var P = O.sortIndex - W.sortIndex;
        return P !== 0 ? P : O.id - W.id;
      }
      function Ie(O) {
        for (var W = D(ze); W !== null; ) {
          if (W.callback === null) re(ze);
          else if (W.startTime <= O)
            re(ze), W.sortIndex = W.expirationTime, ie(le, W);
          else break;
          W = D(ze);
        }
      }
      function ct(O) {
        if (Wt = !1, Ie(O), !rt)
          if (D(le) !== null)
            rt = !0, de || (de = !0, Mt());
          else {
            var W = D(ze);
            W !== null && J(
              ct,
              W.startTime - O
            );
          }
      }
      function Y() {
        return Ne ? !0 : !(H.unstable_now() - De < Se);
      }
      function J(O, W) {
        zt = Rt(function() {
          O(H.unstable_now());
        }, W);
      }
      if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(Error()), H.unstable_now = void 0, typeof performance == "object" && typeof performance.now == "function") {
        var ue = performance;
        H.unstable_now = function() {
          return ue.now();
        };
      } else {
        var K = Date, U = K.now();
        H.unstable_now = function() {
          return K.now() - U;
        };
      }
      var le = [], ze = [], ot = 1, Ve = null, Xe = 3, It = !1, rt = !1, Wt = !1, Ne = !1, Rt = typeof setTimeout == "function" ? setTimeout : null, We = typeof clearTimeout == "function" ? clearTimeout : null, Ot = typeof setImmediate < "u" ? setImmediate : null, de = !1, zt = -1, Se = 5, De = -1;
      if (typeof Ot == "function")
        var Mt = function() {
          Ot(F);
        };
      else if (typeof MessageChannel < "u") {
        var Yt = new MessageChannel(), mt = Yt.port2;
        Yt.port1.onmessage = F, Mt = function() {
          mt.postMessage(null);
        };
      } else
        Mt = function() {
          Rt(F, 0);
        };
      H.unstable_IdlePriority = 5, H.unstable_ImmediatePriority = 1, H.unstable_LowPriority = 4, H.unstable_NormalPriority = 3, H.unstable_Profiling = null, H.unstable_UserBlockingPriority = 2, H.unstable_cancelCallback = function(O) {
        O.callback = null;
      }, H.unstable_forceFrameRate = function(O) {
        0 > O || 125 < O ? console.error(
          "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
        ) : Se = 0 < O ? Math.floor(1e3 / O) : 5;
      }, H.unstable_getCurrentPriorityLevel = function() {
        return Xe;
      }, H.unstable_next = function(O) {
        switch (Xe) {
          case 1:
          case 2:
          case 3:
            var W = 3;
            break;
          default:
            W = Xe;
        }
        var P = Xe;
        Xe = W;
        try {
          return O();
        } finally {
          Xe = P;
        }
      }, H.unstable_requestPaint = function() {
        Ne = !0;
      }, H.unstable_runWithPriority = function(O, W) {
        switch (O) {
          case 1:
          case 2:
          case 3:
          case 4:
          case 5:
            break;
          default:
            O = 3;
        }
        var P = Xe;
        Xe = O;
        try {
          return W();
        } finally {
          Xe = P;
        }
      }, H.unstable_scheduleCallback = function(O, W, P) {
        var ge = H.unstable_now();
        switch (typeof P == "object" && P !== null ? (P = P.delay, P = typeof P == "number" && 0 < P ? ge + P : ge) : P = ge, O) {
          case 1:
            var g = -1;
            break;
          case 2:
            g = 250;
            break;
          case 5:
            g = 1073741823;
            break;
          case 4:
            g = 1e4;
            break;
          default:
            g = 5e3;
        }
        return g = P + g, O = {
          id: ot++,
          callback: W,
          priorityLevel: O,
          startTime: P,
          expirationTime: g,
          sortIndex: -1
        }, P > ge ? (O.sortIndex = P, ie(ze, O), D(le) === null && O === D(ze) && (Wt ? (We(zt), zt = -1) : Wt = !0, J(ct, P - ge))) : (O.sortIndex = g, ie(le, O), rt || It || (rt = !0, de || (de = !0, Mt()))), O;
      }, H.unstable_shouldYield = Y, H.unstable_wrapCallback = function(O) {
        var W = Xe;
        return function() {
          var P = Xe;
          Xe = W;
          try {
            return O.apply(this, arguments);
          } finally {
            Xe = P;
          }
        };
      }, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(Error());
    })();
  })(C0)), C0;
}
var Yb;
function $b() {
  return Yb || (Yb = 1, process.env.NODE_ENV === "production" ? fg.exports = fT() : fg.exports = rT()), fg.exports;
}
var rg = { exports: {} }, ga = {};
/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var jb;
function sT() {
  if (jb) return ga;
  jb = 1;
  var H = mp();
  function F(Y) {
    var J = "https://react.dev/errors/" + Y;
    if (1 < arguments.length) {
      J += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var ue = 2; ue < arguments.length; ue++)
        J += "&args[]=" + encodeURIComponent(arguments[ue]);
    }
    return "Minified React error #" + Y + "; visit " + J + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  function ie() {
  }
  var D = {
    d: {
      f: ie,
      r: function() {
        throw Error(F(522));
      },
      D: ie,
      C: ie,
      L: ie,
      m: ie,
      X: ie,
      S: ie,
      M: ie
    },
    p: 0,
    findDOMNode: null
  }, re = Symbol.for("react.portal");
  function ve(Y, J, ue) {
    var K = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: re,
      key: K == null ? null : "" + K,
      children: Y,
      containerInfo: J,
      implementation: ue
    };
  }
  var Ie = H.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
  function ct(Y, J) {
    if (Y === "font") return "";
    if (typeof J == "string")
      return J === "use-credentials" ? J : "";
  }
  return ga.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = D, ga.createPortal = function(Y, J) {
    var ue = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!J || J.nodeType !== 1 && J.nodeType !== 9 && J.nodeType !== 11)
      throw Error(F(299));
    return ve(Y, J, null, ue);
  }, ga.flushSync = function(Y) {
    var J = Ie.T, ue = D.p;
    try {
      if (Ie.T = null, D.p = 2, Y) return Y();
    } finally {
      Ie.T = J, D.p = ue, D.d.f();
    }
  }, ga.preconnect = function(Y, J) {
    typeof Y == "string" && (J ? (J = J.crossOrigin, J = typeof J == "string" ? J === "use-credentials" ? J : "" : void 0) : J = null, D.d.C(Y, J));
  }, ga.prefetchDNS = function(Y) {
    typeof Y == "string" && D.d.D(Y);
  }, ga.preinit = function(Y, J) {
    if (typeof Y == "string" && J && typeof J.as == "string") {
      var ue = J.as, K = ct(ue, J.crossOrigin), U = typeof J.integrity == "string" ? J.integrity : void 0, le = typeof J.fetchPriority == "string" ? J.fetchPriority : void 0;
      ue === "style" ? D.d.S(
        Y,
        typeof J.precedence == "string" ? J.precedence : void 0,
        {
          crossOrigin: K,
          integrity: U,
          fetchPriority: le
        }
      ) : ue === "script" && D.d.X(Y, {
        crossOrigin: K,
        integrity: U,
        fetchPriority: le,
        nonce: typeof J.nonce == "string" ? J.nonce : void 0
      });
    }
  }, ga.preinitModule = function(Y, J) {
    if (typeof Y == "string")
      if (typeof J == "object" && J !== null) {
        if (J.as == null || J.as === "script") {
          var ue = ct(
            J.as,
            J.crossOrigin
          );
          D.d.M(Y, {
            crossOrigin: ue,
            integrity: typeof J.integrity == "string" ? J.integrity : void 0,
            nonce: typeof J.nonce == "string" ? J.nonce : void 0
          });
        }
      } else J == null && D.d.M(Y);
  }, ga.preload = function(Y, J) {
    if (typeof Y == "string" && typeof J == "object" && J !== null && typeof J.as == "string") {
      var ue = J.as, K = ct(ue, J.crossOrigin);
      D.d.L(Y, ue, {
        crossOrigin: K,
        integrity: typeof J.integrity == "string" ? J.integrity : void 0,
        nonce: typeof J.nonce == "string" ? J.nonce : void 0,
        type: typeof J.type == "string" ? J.type : void 0,
        fetchPriority: typeof J.fetchPriority == "string" ? J.fetchPriority : void 0,
        referrerPolicy: typeof J.referrerPolicy == "string" ? J.referrerPolicy : void 0,
        imageSrcSet: typeof J.imageSrcSet == "string" ? J.imageSrcSet : void 0,
        imageSizes: typeof J.imageSizes == "string" ? J.imageSizes : void 0,
        media: typeof J.media == "string" ? J.media : void 0
      });
    }
  }, ga.preloadModule = function(Y, J) {
    if (typeof Y == "string")
      if (J) {
        var ue = ct(J.as, J.crossOrigin);
        D.d.m(Y, {
          as: typeof J.as == "string" && J.as !== "script" ? J.as : void 0,
          crossOrigin: ue,
          integrity: typeof J.integrity == "string" ? J.integrity : void 0
        });
      } else D.d.m(Y);
  }, ga.requestFormReset = function(Y) {
    D.d.r(Y);
  }, ga.unstable_batchedUpdates = function(Y, J) {
    return Y(J);
  }, ga.useFormState = function(Y, J, ue) {
    return Ie.H.useFormState(Y, J, ue);
  }, ga.useFormStatus = function() {
    return Ie.H.useHostTransitionStatus();
  }, ga.version = "19.1.1", ga;
}
var ba = {};
/**
 * @license React
 * react-dom.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Gb;
function dT() {
  return Gb || (Gb = 1, process.env.NODE_ENV !== "production" && (function() {
    function H() {
    }
    function F(K) {
      return "" + K;
    }
    function ie(K, U, le) {
      var ze = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
      try {
        F(ze);
        var ot = !1;
      } catch {
        ot = !0;
      }
      return ot && (console.error(
        "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
        typeof Symbol == "function" && Symbol.toStringTag && ze[Symbol.toStringTag] || ze.constructor.name || "Object"
      ), F(ze)), {
        $$typeof: J,
        key: ze == null ? null : "" + ze,
        children: K,
        containerInfo: U,
        implementation: le
      };
    }
    function D(K, U) {
      if (K === "font") return "";
      if (typeof U == "string")
        return U === "use-credentials" ? U : "";
    }
    function re(K) {
      return K === null ? "`null`" : K === void 0 ? "`undefined`" : K === "" ? "an empty string" : 'something with type "' + typeof K + '"';
    }
    function ve(K) {
      return K === null ? "`null`" : K === void 0 ? "`undefined`" : K === "" ? "an empty string" : typeof K == "string" ? JSON.stringify(K) : typeof K == "number" ? "`" + K + "`" : 'something with type "' + typeof K + '"';
    }
    function Ie() {
      var K = ue.H;
      return K === null && console.error(
        `Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://react.dev/link/invalid-hook-call for tips about how to debug and fix this problem.`
      ), K;
    }
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(Error());
    var ct = mp(), Y = {
      d: {
        f: H,
        r: function() {
          throw Error(
            "Invalid form element. requestFormReset must be passed a form that was rendered by React."
          );
        },
        D: H,
        C: H,
        L: H,
        m: H,
        X: H,
        S: H,
        M: H
      },
      p: 0,
      findDOMNode: null
    }, J = Symbol.for("react.portal"), ue = ct.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
    typeof Map == "function" && Map.prototype != null && typeof Map.prototype.forEach == "function" && typeof Set == "function" && Set.prototype != null && typeof Set.prototype.clear == "function" && typeof Set.prototype.forEach == "function" || console.error(
      "React depends on Map and Set built-in types. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills"
    ), ba.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = Y, ba.createPortal = function(K, U) {
      var le = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
      if (!U || U.nodeType !== 1 && U.nodeType !== 9 && U.nodeType !== 11)
        throw Error("Target container is not a DOM element.");
      return ie(K, U, null, le);
    }, ba.flushSync = function(K) {
      var U = ue.T, le = Y.p;
      try {
        if (ue.T = null, Y.p = 2, K)
          return K();
      } finally {
        ue.T = U, Y.p = le, Y.d.f() && console.error(
          "flushSync was called from inside a lifecycle method. React cannot flush when React is already rendering. Consider moving this call to a scheduler task or micro task."
        );
      }
    }, ba.preconnect = function(K, U) {
      typeof K == "string" && K ? U != null && typeof U != "object" ? console.error(
        "ReactDOM.preconnect(): Expected the `options` argument (second) to be an object but encountered %s instead. The only supported option at this time is `crossOrigin` which accepts a string.",
        ve(U)
      ) : U != null && typeof U.crossOrigin != "string" && console.error(
        "ReactDOM.preconnect(): Expected the `crossOrigin` option (second argument) to be a string but encountered %s instead. Try removing this option or passing a string value instead.",
        re(U.crossOrigin)
      ) : console.error(
        "ReactDOM.preconnect(): Expected the `href` argument (first) to be a non-empty string but encountered %s instead.",
        re(K)
      ), typeof K == "string" && (U ? (U = U.crossOrigin, U = typeof U == "string" ? U === "use-credentials" ? U : "" : void 0) : U = null, Y.d.C(K, U));
    }, ba.prefetchDNS = function(K) {
      if (typeof K != "string" || !K)
        console.error(
          "ReactDOM.prefetchDNS(): Expected the `href` argument (first) to be a non-empty string but encountered %s instead.",
          re(K)
        );
      else if (1 < arguments.length) {
        var U = arguments[1];
        typeof U == "object" && U.hasOwnProperty("crossOrigin") ? console.error(
          "ReactDOM.prefetchDNS(): Expected only one argument, `href`, but encountered %s as a second argument instead. This argument is reserved for future options and is currently disallowed. It looks like the you are attempting to set a crossOrigin property for this DNS lookup hint. Browsers do not perform DNS queries using CORS and setting this attribute on the resource hint has no effect. Try calling ReactDOM.prefetchDNS() with just a single string argument, `href`.",
          ve(U)
        ) : console.error(
          "ReactDOM.prefetchDNS(): Expected only one argument, `href`, but encountered %s as a second argument instead. This argument is reserved for future options and is currently disallowed. Try calling ReactDOM.prefetchDNS() with just a single string argument, `href`.",
          ve(U)
        );
      }
      typeof K == "string" && Y.d.D(K);
    }, ba.preinit = function(K, U) {
      if (typeof K == "string" && K ? U == null || typeof U != "object" ? console.error(
        "ReactDOM.preinit(): Expected the `options` argument (second) to be an object with an `as` property describing the type of resource to be preinitialized but encountered %s instead.",
        ve(U)
      ) : U.as !== "style" && U.as !== "script" && console.error(
        'ReactDOM.preinit(): Expected the `as` property in the `options` argument (second) to contain a valid value describing the type of resource to be preinitialized but encountered %s instead. Valid values for `as` are "style" and "script".',
        ve(U.as)
      ) : console.error(
        "ReactDOM.preinit(): Expected the `href` argument (first) to be a non-empty string but encountered %s instead.",
        re(K)
      ), typeof K == "string" && U && typeof U.as == "string") {
        var le = U.as, ze = D(le, U.crossOrigin), ot = typeof U.integrity == "string" ? U.integrity : void 0, Ve = typeof U.fetchPriority == "string" ? U.fetchPriority : void 0;
        le === "style" ? Y.d.S(
          K,
          typeof U.precedence == "string" ? U.precedence : void 0,
          {
            crossOrigin: ze,
            integrity: ot,
            fetchPriority: Ve
          }
        ) : le === "script" && Y.d.X(K, {
          crossOrigin: ze,
          integrity: ot,
          fetchPriority: Ve,
          nonce: typeof U.nonce == "string" ? U.nonce : void 0
        });
      }
    }, ba.preinitModule = function(K, U) {
      var le = "";
      if (typeof K == "string" && K || (le += " The `href` argument encountered was " + re(K) + "."), U !== void 0 && typeof U != "object" ? le += " The `options` argument encountered was " + re(U) + "." : U && "as" in U && U.as !== "script" && (le += " The `as` option encountered was " + ve(U.as) + "."), le)
        console.error(
          "ReactDOM.preinitModule(): Expected up to two arguments, a non-empty `href` string and, optionally, an `options` object with a valid `as` property.%s",
          le
        );
      else
        switch (le = U && typeof U.as == "string" ? U.as : "script", le) {
          case "script":
            break;
          default:
            le = ve(le), console.error(
              'ReactDOM.preinitModule(): Currently the only supported "as" type for this function is "script" but received "%s" instead. This warning was generated for `href` "%s". In the future other module types will be supported, aligning with the import-attributes proposal. Learn more here: (https://github.com/tc39/proposal-import-attributes)',
              le,
              K
            );
        }
      typeof K == "string" && (typeof U == "object" && U !== null ? (U.as == null || U.as === "script") && (le = D(
        U.as,
        U.crossOrigin
      ), Y.d.M(K, {
        crossOrigin: le,
        integrity: typeof U.integrity == "string" ? U.integrity : void 0,
        nonce: typeof U.nonce == "string" ? U.nonce : void 0
      })) : U == null && Y.d.M(K));
    }, ba.preload = function(K, U) {
      var le = "";
      if (typeof K == "string" && K || (le += " The `href` argument encountered was " + re(K) + "."), U == null || typeof U != "object" ? le += " The `options` argument encountered was " + re(U) + "." : typeof U.as == "string" && U.as || (le += " The `as` option encountered was " + re(U.as) + "."), le && console.error(
        'ReactDOM.preload(): Expected two arguments, a non-empty `href` string and an `options` object with an `as` property valid for a `<link rel="preload" as="..." />` tag.%s',
        le
      ), typeof K == "string" && typeof U == "object" && U !== null && typeof U.as == "string") {
        le = U.as;
        var ze = D(
          le,
          U.crossOrigin
        );
        Y.d.L(K, le, {
          crossOrigin: ze,
          integrity: typeof U.integrity == "string" ? U.integrity : void 0,
          nonce: typeof U.nonce == "string" ? U.nonce : void 0,
          type: typeof U.type == "string" ? U.type : void 0,
          fetchPriority: typeof U.fetchPriority == "string" ? U.fetchPriority : void 0,
          referrerPolicy: typeof U.referrerPolicy == "string" ? U.referrerPolicy : void 0,
          imageSrcSet: typeof U.imageSrcSet == "string" ? U.imageSrcSet : void 0,
          imageSizes: typeof U.imageSizes == "string" ? U.imageSizes : void 0,
          media: typeof U.media == "string" ? U.media : void 0
        });
      }
    }, ba.preloadModule = function(K, U) {
      var le = "";
      typeof K == "string" && K || (le += " The `href` argument encountered was " + re(K) + "."), U !== void 0 && typeof U != "object" ? le += " The `options` argument encountered was " + re(U) + "." : U && "as" in U && typeof U.as != "string" && (le += " The `as` option encountered was " + re(U.as) + "."), le && console.error(
        'ReactDOM.preloadModule(): Expected two arguments, a non-empty `href` string and, optionally, an `options` object with an `as` property valid for a `<link rel="modulepreload" as="..." />` tag.%s',
        le
      ), typeof K == "string" && (U ? (le = D(
        U.as,
        U.crossOrigin
      ), Y.d.m(K, {
        as: typeof U.as == "string" && U.as !== "script" ? U.as : void 0,
        crossOrigin: le,
        integrity: typeof U.integrity == "string" ? U.integrity : void 0
      })) : Y.d.m(K));
    }, ba.requestFormReset = function(K) {
      Y.d.r(K);
    }, ba.unstable_batchedUpdates = function(K, U) {
      return K(U);
    }, ba.useFormState = function(K, U, le) {
      return Ie().useFormState(K, U, le);
    }, ba.useFormStatus = function() {
      return Ie().useHostTransitionStatus();
    }, ba.version = "19.1.1", typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(Error());
  })()), ba;
}
var Lb;
function Wb() {
  if (Lb) return rg.exports;
  Lb = 1;
  function H() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function")) {
      if (process.env.NODE_ENV !== "production")
        throw new Error("^_^");
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(H);
      } catch (F) {
        console.error(F);
      }
    }
  }
  return process.env.NODE_ENV === "production" ? (H(), rg.exports = sT()) : rg.exports = dT(), rg.exports;
}
/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Vb;
function hT() {
  if (Vb) return dp;
  Vb = 1;
  var H = $b(), F = mp(), ie = Wb();
  function D(l) {
    var n = "https://react.dev/errors/" + l;
    if (1 < arguments.length) {
      n += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var u = 2; u < arguments.length; u++)
        n += "&args[]=" + encodeURIComponent(arguments[u]);
    }
    return "Minified React error #" + l + "; visit " + n + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  function re(l) {
    return !(!l || l.nodeType !== 1 && l.nodeType !== 9 && l.nodeType !== 11);
  }
  function ve(l) {
    var n = l, u = l;
    if (l.alternate) for (; n.return; ) n = n.return;
    else {
      l = n;
      do
        n = l, (n.flags & 4098) !== 0 && (u = n.return), l = n.return;
      while (l);
    }
    return n.tag === 3 ? u : null;
  }
  function Ie(l) {
    if (l.tag === 13) {
      var n = l.memoizedState;
      if (n === null && (l = l.alternate, l !== null && (n = l.memoizedState)), n !== null) return n.dehydrated;
    }
    return null;
  }
  function ct(l) {
    if (ve(l) !== l)
      throw Error(D(188));
  }
  function Y(l) {
    var n = l.alternate;
    if (!n) {
      if (n = ve(l), n === null) throw Error(D(188));
      return n !== l ? null : l;
    }
    for (var u = l, c = n; ; ) {
      var r = u.return;
      if (r === null) break;
      var s = r.alternate;
      if (s === null) {
        if (c = r.return, c !== null) {
          u = c;
          continue;
        }
        break;
      }
      if (r.child === s.child) {
        for (s = r.child; s; ) {
          if (s === u) return ct(r), l;
          if (s === c) return ct(r), n;
          s = s.sibling;
        }
        throw Error(D(188));
      }
      if (u.return !== c.return) u = r, c = s;
      else {
        for (var y = !1, p = r.child; p; ) {
          if (p === u) {
            y = !0, u = r, c = s;
            break;
          }
          if (p === c) {
            y = !0, c = r, u = s;
            break;
          }
          p = p.sibling;
        }
        if (!y) {
          for (p = s.child; p; ) {
            if (p === u) {
              y = !0, u = s, c = r;
              break;
            }
            if (p === c) {
              y = !0, c = s, u = r;
              break;
            }
            p = p.sibling;
          }
          if (!y) throw Error(D(189));
        }
      }
      if (u.alternate !== c) throw Error(D(190));
    }
    if (u.tag !== 3) throw Error(D(188));
    return u.stateNode.current === u ? l : n;
  }
  function J(l) {
    var n = l.tag;
    if (n === 5 || n === 26 || n === 27 || n === 6) return l;
    for (l = l.child; l !== null; ) {
      if (n = J(l), n !== null) return n;
      l = l.sibling;
    }
    return null;
  }
  var ue = Object.assign, K = Symbol.for("react.element"), U = Symbol.for("react.transitional.element"), le = Symbol.for("react.portal"), ze = Symbol.for("react.fragment"), ot = Symbol.for("react.strict_mode"), Ve = Symbol.for("react.profiler"), Xe = Symbol.for("react.provider"), It = Symbol.for("react.consumer"), rt = Symbol.for("react.context"), Wt = Symbol.for("react.forward_ref"), Ne = Symbol.for("react.suspense"), Rt = Symbol.for("react.suspense_list"), We = Symbol.for("react.memo"), Ot = Symbol.for("react.lazy"), de = Symbol.for("react.activity"), zt = Symbol.for("react.memo_cache_sentinel"), Se = Symbol.iterator;
  function De(l) {
    return l === null || typeof l != "object" ? null : (l = Se && l[Se] || l["@@iterator"], typeof l == "function" ? l : null);
  }
  var Mt = Symbol.for("react.client.reference");
  function Yt(l) {
    if (l == null) return null;
    if (typeof l == "function")
      return l.$$typeof === Mt ? null : l.displayName || l.name || null;
    if (typeof l == "string") return l;
    switch (l) {
      case ze:
        return "Fragment";
      case Ve:
        return "Profiler";
      case ot:
        return "StrictMode";
      case Ne:
        return "Suspense";
      case Rt:
        return "SuspenseList";
      case de:
        return "Activity";
    }
    if (typeof l == "object")
      switch (l.$$typeof) {
        case le:
          return "Portal";
        case rt:
          return (l.displayName || "Context") + ".Provider";
        case It:
          return (l._context.displayName || "Context") + ".Consumer";
        case Wt:
          var n = l.render;
          return l = l.displayName, l || (l = n.displayName || n.name || "", l = l !== "" ? "ForwardRef(" + l + ")" : "ForwardRef"), l;
        case We:
          return n = l.displayName || null, n !== null ? n : Yt(l.type) || "Memo";
        case Ot:
          n = l._payload, l = l._init;
          try {
            return Yt(l(n));
          } catch {
          }
      }
    return null;
  }
  var mt = Array.isArray, O = F.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, W = ie.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, P = {
    pending: !1,
    data: null,
    method: null,
    action: null
  }, ge = [], g = -1;
  function w(l) {
    return { current: l };
  }
  function Z(l) {
    0 > g || (l.current = ge[g], ge[g] = null, g--);
  }
  function I(l, n) {
    g++, ge[g] = l.current, l.current = n;
  }
  var ce = w(null), Ae = w(null), oe = w(null), nl = w(null);
  function _e(l, n) {
    switch (I(oe, n), I(Ae, l), I(ce, null), n.nodeType) {
      case 9:
      case 11:
        l = (l = n.documentElement) && (l = l.namespaceURI) ? qu(l) : 0;
        break;
      default:
        if (l = n.tagName, n = n.namespaceURI)
          n = qu(n), l = Go(n, l);
        else
          switch (l) {
            case "svg":
              l = 1;
              break;
            case "math":
              l = 2;
              break;
            default:
              l = 0;
          }
    }
    Z(ce), I(ce, l);
  }
  function xt() {
    Z(ce), Z(Ae), Z(oe);
  }
  function ta(l) {
    l.memoizedState !== null && I(nl, l);
    var n = ce.current, u = Go(n, l.type);
    n !== u && (I(Ae, l), I(ce, u));
  }
  function An(l) {
    Ae.current === l && (Z(ce), Z(Ae)), nl.current === l && (Z(nl), pa._currentValue = P);
  }
  var ji = Object.prototype.hasOwnProperty, Rn = H.unstable_scheduleCallback, Zc = H.unstable_cancelCallback, sf = H.unstable_shouldYield, Pt = H.unstable_requestPaint, hl = H.unstable_now, ku = H.unstable_getCurrentPriorityLevel, Fr = H.unstable_ImmediatePriority, Qe = H.unstable_UserBlockingPriority, On = H.unstable_NormalPriority, Kc = H.unstable_LowPriority, mu = H.unstable_IdlePriority, Ir = H.log, df = H.unstable_setDisableYieldValue, $u = null, El = null;
  function wa(l) {
    if (typeof Ir == "function" && df(l), El && typeof El.setStrictMode == "function")
      try {
        El.setStrictMode($u, l);
      } catch {
      }
  }
  var Al = Math.clz32 ? Math.clz32 : kc, Jc = Math.log, hf = Math.LN2;
  function kc(l) {
    return l >>>= 0, l === 0 ? 32 : 31 - (Jc(l) / hf | 0) | 0;
  }
  var tn = 256, la = 4194304;
  function Rl(l) {
    var n = l & 42;
    if (n !== 0) return n;
    switch (l & -l) {
      case 1:
        return 1;
      case 2:
        return 2;
      case 4:
        return 4;
      case 8:
        return 8;
      case 16:
        return 16;
      case 32:
        return 32;
      case 64:
        return 64;
      case 128:
        return 128;
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return l & 4194048;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return l & 62914560;
      case 67108864:
        return 67108864;
      case 134217728:
        return 134217728;
      case 268435456:
        return 268435456;
      case 536870912:
        return 536870912;
      case 1073741824:
        return 0;
      default:
        return l;
    }
  }
  function ln(l, n, u) {
    var c = l.pendingLanes;
    if (c === 0) return 0;
    var r = 0, s = l.suspendedLanes, y = l.pingedLanes;
    l = l.warmLanes;
    var p = c & 134217727;
    return p !== 0 ? (c = p & ~s, c !== 0 ? r = Rl(c) : (y &= p, y !== 0 ? r = Rl(y) : u || (u = p & ~l, u !== 0 && (r = Rl(u))))) : (p = c & ~s, p !== 0 ? r = Rl(p) : y !== 0 ? r = Rl(y) : u || (u = c & ~l, u !== 0 && (r = Rl(u)))), r === 0 ? 0 : n !== 0 && n !== r && (n & s) === 0 && (s = r & -r, u = n & -n, s >= u || s === 32 && (u & 4194048) !== 0) ? n : r;
  }
  function m(l, n) {
    return (l.pendingLanes & ~(l.suspendedLanes & ~l.pingedLanes) & n) === 0;
  }
  function z(l, n) {
    switch (l) {
      case 1:
      case 2:
      case 4:
      case 8:
      case 64:
        return n + 250;
      case 16:
      case 32:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return n + 5e3;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return -1;
      case 67108864:
      case 134217728:
      case 268435456:
      case 536870912:
      case 1073741824:
        return -1;
      default:
        return -1;
    }
  }
  function te() {
    var l = tn;
    return tn <<= 1, (tn & 4194048) === 0 && (tn = 256), l;
  }
  function ne() {
    var l = la;
    return la <<= 1, (la & 62914560) === 0 && (la = 4194304), l;
  }
  function pe(l) {
    for (var n = [], u = 0; 31 > u; u++) n.push(l);
    return n;
  }
  function Ce(l, n) {
    l.pendingLanes |= n, n !== 268435456 && (l.suspendedLanes = 0, l.pingedLanes = 0, l.warmLanes = 0);
  }
  function Be(l, n, u, c, r, s) {
    var y = l.pendingLanes;
    l.pendingLanes = u, l.suspendedLanes = 0, l.pingedLanes = 0, l.warmLanes = 0, l.expiredLanes &= u, l.entangledLanes &= u, l.errorRecoveryDisabledLanes &= u, l.shellSuspendCounter = 0;
    var p = l.entanglements, S = l.expirationTimes, C = l.hiddenUpdates;
    for (u = y & ~u; 0 < u; ) {
      var Q = 31 - Al(u), $ = 1 << Q;
      p[Q] = 0, S[Q] = -1;
      var N = C[Q];
      if (N !== null)
        for (C[Q] = null, Q = 0; Q < N.length; Q++) {
          var q = N[Q];
          q !== null && (q.lane &= -536870913);
        }
      u &= ~$;
    }
    c !== 0 && at(l, c, 0), s !== 0 && r === 0 && l.tag !== 0 && (l.suspendedLanes |= s & ~(y & ~n));
  }
  function at(l, n, u) {
    l.pendingLanes |= n, l.suspendedLanes &= ~n;
    var c = 31 - Al(n);
    l.entangledLanes |= n, l.entanglements[c] = l.entanglements[c] | 1073741824 | u & 4194090;
  }
  function we(l, n) {
    var u = l.entangledLanes |= n;
    for (l = l.entanglements; u; ) {
      var c = 31 - Al(u), r = 1 << c;
      r & n | l[c] & n && (l[c] |= n), u &= ~r;
    }
  }
  function el(l) {
    switch (l) {
      case 2:
        l = 1;
        break;
      case 8:
        l = 4;
        break;
      case 32:
        l = 16;
        break;
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        l = 128;
        break;
      case 268435456:
        l = 134217728;
        break;
      default:
        l = 0;
    }
    return l;
  }
  function an(l) {
    return l &= -l, 2 < l ? 8 < l ? (l & 134217727) !== 0 ? 32 : 268435456 : 8 : 2;
  }
  function Pr() {
    var l = W.p;
    return l !== 0 ? l : (l = window.event, l === void 0 ? 32 : Om(l.type));
  }
  function Th(l, n) {
    var u = W.p;
    try {
      return W.p = l, n();
    } finally {
      W.p = u;
    }
  }
  var ul = Math.random().toString(36).slice(2), yl = "__reactFiber$" + ul, Zl = "__reactProps$" + ul, $c = "__reactContainer$" + ul, es = "__reactEvents$" + ul, pp = "__reactListeners$" + ul, ts = "__reactHandles$" + ul, vp = "__reactResources$" + ul, he = "__reactMarker$" + ul;
  function yf(l) {
    delete l[yl], delete l[Zl], delete l[es], delete l[pp], delete l[ts];
  }
  function Ol(l) {
    var n = l[yl];
    if (n) return n;
    for (var u = l.parentNode; u; ) {
      if (n = u[$c] || u[yl]) {
        if (u = n.alternate, n.child !== null || u !== null && u.child !== null)
          for (l = Hl(l); l !== null; ) {
            if (u = l[yl]) return u;
            l = Hl(l);
          }
        return n;
      }
      l = u, u = l.parentNode;
    }
    return null;
  }
  function Gi(l) {
    if (l = l[yl] || l[$c]) {
      var n = l.tag;
      if (n === 5 || n === 6 || n === 13 || n === 26 || n === 27 || n === 3)
        return l;
    }
    return null;
  }
  function mf(l) {
    var n = l.tag;
    if (n === 5 || n === 26 || n === 27 || n === 6) return l.stateNode;
    throw Error(D(33));
  }
  function pu(l) {
    var n = l[vp];
    return n || (n = l[vp] = { hoistableStyles: /* @__PURE__ */ new Map(), hoistableScripts: /* @__PURE__ */ new Map() }), n;
  }
  function il(l) {
    l[he] = !0;
  }
  var pf = /* @__PURE__ */ new Set(), Sa = {};
  function Wu(l, n) {
    Fu(l, n), Fu(l + "Capture", n);
  }
  function Fu(l, n) {
    for (Sa[l] = n, l = 0; l < n.length; l++)
      pf.add(n[l]);
  }
  var gp = RegExp(
    "^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"
  ), ls = {}, Eh = {};
  function bp(l) {
    return ji.call(Eh, l) ? !0 : ji.call(ls, l) ? !1 : gp.test(l) ? Eh[l] = !0 : (ls[l] = !0, !1);
  }
  function vu(l, n, u) {
    if (bp(n))
      if (u === null) l.removeAttribute(n);
      else {
        switch (typeof u) {
          case "undefined":
          case "function":
          case "symbol":
            l.removeAttribute(n);
            return;
          case "boolean":
            var c = n.toLowerCase().slice(0, 5);
            if (c !== "data-" && c !== "aria-") {
              l.removeAttribute(n);
              return;
            }
        }
        l.setAttribute(n, "" + u);
      }
  }
  function vf(l, n, u) {
    if (u === null) l.removeAttribute(n);
    else {
      switch (typeof u) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          l.removeAttribute(n);
          return;
      }
      l.setAttribute(n, "" + u);
    }
  }
  function Dn(l, n, u, c) {
    if (c === null) l.removeAttribute(u);
    else {
      switch (typeof c) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          l.removeAttribute(u);
          return;
      }
      l.setAttributeNS(n, u, "" + c);
    }
  }
  var as, Ah;
  function Li(l) {
    if (as === void 0)
      try {
        throw Error();
      } catch (u) {
        var n = u.stack.trim().match(/\n( *(at )?)/);
        as = n && n[1] || "", Ah = -1 < u.stack.indexOf(`
    at`) ? " (<anonymous>)" : -1 < u.stack.indexOf("@") ? "@unknown:0:0" : "";
      }
    return `
` + as + l + Ah;
  }
  var Kl = !1;
  function Iu(l, n) {
    if (!l || Kl) return "";
    Kl = !0;
    var u = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      var c = {
        DetermineComponentFrameRoot: function() {
          try {
            if (n) {
              var $ = function() {
                throw Error();
              };
              if (Object.defineProperty($.prototype, "props", {
                set: function() {
                  throw Error();
                }
              }), typeof Reflect == "object" && Reflect.construct) {
                try {
                  Reflect.construct($, []);
                } catch (q) {
                  var N = q;
                }
                Reflect.construct(l, [], $);
              } else {
                try {
                  $.call();
                } catch (q) {
                  N = q;
                }
                l.call($.prototype);
              }
            } else {
              try {
                throw Error();
              } catch (q) {
                N = q;
              }
              ($ = l()) && typeof $.catch == "function" && $.catch(function() {
              });
            }
          } catch (q) {
            if (q && N && typeof q.stack == "string")
              return [q.stack, N.stack];
          }
          return [null, null];
        }
      };
      c.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
      var r = Object.getOwnPropertyDescriptor(
        c.DetermineComponentFrameRoot,
        "name"
      );
      r && r.configurable && Object.defineProperty(
        c.DetermineComponentFrameRoot,
        "name",
        { value: "DetermineComponentFrameRoot" }
      );
      var s = c.DetermineComponentFrameRoot(), y = s[0], p = s[1];
      if (y && p) {
        var S = y.split(`
`), C = p.split(`
`);
        for (r = c = 0; c < S.length && !S[c].includes("DetermineComponentFrameRoot"); )
          c++;
        for (; r < C.length && !C[r].includes(
          "DetermineComponentFrameRoot"
        ); )
          r++;
        if (c === S.length || r === C.length)
          for (c = S.length - 1, r = C.length - 1; 1 <= c && 0 <= r && S[c] !== C[r]; )
            r--;
        for (; 1 <= c && 0 <= r; c--, r--)
          if (S[c] !== C[r]) {
            if (c !== 1 || r !== 1)
              do
                if (c--, r--, 0 > r || S[c] !== C[r]) {
                  var Q = `
` + S[c].replace(" at new ", " at ");
                  return l.displayName && Q.includes("<anonymous>") && (Q = Q.replace("<anonymous>", l.displayName)), Q;
                }
              while (1 <= c && 0 <= r);
            break;
          }
      }
    } finally {
      Kl = !1, Error.prepareStackTrace = u;
    }
    return (u = l ? l.displayName || l.name : "") ? Li(u) : "";
  }
  function Vi(l) {
    switch (l.tag) {
      case 26:
      case 27:
      case 5:
        return Li(l.type);
      case 16:
        return Li("Lazy");
      case 13:
        return Li("Suspense");
      case 19:
        return Li("SuspenseList");
      case 0:
      case 15:
        return Iu(l.type, !1);
      case 11:
        return Iu(l.type.render, !1);
      case 1:
        return Iu(l.type, !0);
      case 31:
        return Li("Activity");
      default:
        return "";
    }
  }
  function Rh(l) {
    try {
      var n = "";
      do
        n += Vi(l), l = l.return;
      while (l);
      return n;
    } catch (u) {
      return `
Error generating stack: ` + u.message + `
` + u.stack;
    }
  }
  function ql(l) {
    switch (typeof l) {
      case "bigint":
      case "boolean":
      case "number":
      case "string":
      case "undefined":
        return l;
      case "object":
        return l;
      default:
        return "";
    }
  }
  function gf(l) {
    var n = l.type;
    return (l = l.nodeName) && l.toLowerCase() === "input" && (n === "checkbox" || n === "radio");
  }
  function Oh(l) {
    var n = gf(l) ? "checked" : "value", u = Object.getOwnPropertyDescriptor(
      l.constructor.prototype,
      n
    ), c = "" + l[n];
    if (!l.hasOwnProperty(n) && typeof u < "u" && typeof u.get == "function" && typeof u.set == "function") {
      var r = u.get, s = u.set;
      return Object.defineProperty(l, n, {
        configurable: !0,
        get: function() {
          return r.call(this);
        },
        set: function(y) {
          c = "" + y, s.call(this, y);
        }
      }), Object.defineProperty(l, n, {
        enumerable: u.enumerable
      }), {
        getValue: function() {
          return c;
        },
        setValue: function(y) {
          c = "" + y;
        },
        stopTracking: function() {
          l._valueTracker = null, delete l[n];
        }
      };
    }
  }
  function Pu(l) {
    l._valueTracker || (l._valueTracker = Oh(l));
  }
  function Xi(l) {
    if (!l) return !1;
    var n = l._valueTracker;
    if (!n) return !0;
    var u = n.getValue(), c = "";
    return l && (c = gf(l) ? l.checked ? "true" : "false" : l.value), l = c, l !== u ? (n.setValue(l), !0) : !1;
  }
  function Wc(l) {
    if (l = l || (typeof document < "u" ? document : void 0), typeof l > "u") return null;
    try {
      return l.activeElement || l.body;
    } catch {
      return l.body;
    }
  }
  var hg = /[\n"\\]/g;
  function Ba(l) {
    return l.replace(
      hg,
      function(n) {
        return "\\" + n.charCodeAt(0).toString(16) + " ";
      }
    );
  }
  function ns(l, n, u, c, r, s, y, p) {
    l.name = "", y != null && typeof y != "function" && typeof y != "symbol" && typeof y != "boolean" ? l.type = y : l.removeAttribute("type"), n != null ? y === "number" ? (n === 0 && l.value === "" || l.value != n) && (l.value = "" + ql(n)) : l.value !== "" + ql(n) && (l.value = "" + ql(n)) : y !== "submit" && y !== "reset" || l.removeAttribute("value"), n != null ? bf(l, y, ql(n)) : u != null ? bf(l, y, ql(u)) : c != null && l.removeAttribute("value"), r == null && s != null && (l.defaultChecked = !!s), r != null && (l.checked = r && typeof r != "function" && typeof r != "symbol"), p != null && typeof p != "function" && typeof p != "symbol" && typeof p != "boolean" ? l.name = "" + ql(p) : l.removeAttribute("name");
  }
  function us(l, n, u, c, r, s, y, p) {
    if (s != null && typeof s != "function" && typeof s != "symbol" && typeof s != "boolean" && (l.type = s), n != null || u != null) {
      if (!(s !== "submit" && s !== "reset" || n != null))
        return;
      u = u != null ? "" + ql(u) : "", n = n != null ? "" + ql(n) : u, p || n === l.value || (l.value = n), l.defaultValue = n;
    }
    c = c ?? r, c = typeof c != "function" && typeof c != "symbol" && !!c, l.checked = p ? l.checked : !!c, l.defaultChecked = !!c, y != null && typeof y != "function" && typeof y != "symbol" && typeof y != "boolean" && (l.name = y);
  }
  function bf(l, n, u) {
    n === "number" && Wc(l.ownerDocument) === l || l.defaultValue === "" + u || (l.defaultValue = "" + u);
  }
  function Qi(l, n, u, c) {
    if (l = l.options, n) {
      n = {};
      for (var r = 0; r < u.length; r++)
        n["$" + u[r]] = !0;
      for (u = 0; u < l.length; u++)
        r = n.hasOwnProperty("$" + l[u].value), l[u].selected !== r && (l[u].selected = r), r && c && (l[u].defaultSelected = !0);
    } else {
      for (u = "" + ql(u), n = null, r = 0; r < l.length; r++) {
        if (l[r].value === u) {
          l[r].selected = !0, c && (l[r].defaultSelected = !0);
          return;
        }
        n !== null || l[r].disabled || (n = l[r]);
      }
      n !== null && (n.selected = !0);
    }
  }
  function Dh(l, n, u) {
    if (n != null && (n = "" + ql(n), n !== l.value && (l.value = n), u == null)) {
      l.defaultValue !== n && (l.defaultValue = n);
      return;
    }
    l.defaultValue = u != null ? "" + ql(u) : "";
  }
  function zh(l, n, u, c) {
    if (n == null) {
      if (c != null) {
        if (u != null) throw Error(D(92));
        if (mt(c)) {
          if (1 < c.length) throw Error(D(93));
          c = c[0];
        }
        u = c;
      }
      u == null && (u = ""), n = u;
    }
    u = ql(n), l.defaultValue = u, c = l.textContent, c === u && c !== "" && c !== null && (l.value = c);
  }
  function Fc(l, n) {
    if (n) {
      var u = l.firstChild;
      if (u && u === l.lastChild && u.nodeType === 3) {
        u.nodeValue = n;
        return;
      }
    }
    l.textContent = n;
  }
  var Sp = new Set(
    "animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(
      " "
    )
  );
  function is(l, n, u) {
    var c = n.indexOf("--") === 0;
    u == null || typeof u == "boolean" || u === "" ? c ? l.setProperty(n, "") : n === "float" ? l.cssFloat = "" : l[n] = "" : c ? l.setProperty(n, u) : typeof u != "number" || u === 0 || Sp.has(n) ? n === "float" ? l.cssFloat = u : l[n] = ("" + u).trim() : l[n] = u + "px";
  }
  function Sf(l, n, u) {
    if (n != null && typeof n != "object")
      throw Error(D(62));
    if (l = l.style, u != null) {
      for (var c in u)
        !u.hasOwnProperty(c) || n != null && n.hasOwnProperty(c) || (c.indexOf("--") === 0 ? l.setProperty(c, "") : c === "float" ? l.cssFloat = "" : l[c] = "");
      for (var r in n)
        c = n[r], n.hasOwnProperty(r) && u[r] !== c && is(l, r, c);
    } else
      for (var s in n)
        n.hasOwnProperty(s) && is(l, s, n[s]);
  }
  function Zi(l) {
    if (l.indexOf("-") === -1) return !1;
    switch (l) {
      case "annotation-xml":
      case "color-profile":
      case "font-face":
      case "font-face-src":
      case "font-face-uri":
      case "font-face-format":
      case "font-face-name":
      case "missing-glyph":
        return !1;
      default:
        return !0;
    }
  }
  var yg = /* @__PURE__ */ new Map([
    ["acceptCharset", "accept-charset"],
    ["htmlFor", "for"],
    ["httpEquiv", "http-equiv"],
    ["crossOrigin", "crossorigin"],
    ["accentHeight", "accent-height"],
    ["alignmentBaseline", "alignment-baseline"],
    ["arabicForm", "arabic-form"],
    ["baselineShift", "baseline-shift"],
    ["capHeight", "cap-height"],
    ["clipPath", "clip-path"],
    ["clipRule", "clip-rule"],
    ["colorInterpolation", "color-interpolation"],
    ["colorInterpolationFilters", "color-interpolation-filters"],
    ["colorProfile", "color-profile"],
    ["colorRendering", "color-rendering"],
    ["dominantBaseline", "dominant-baseline"],
    ["enableBackground", "enable-background"],
    ["fillOpacity", "fill-opacity"],
    ["fillRule", "fill-rule"],
    ["floodColor", "flood-color"],
    ["floodOpacity", "flood-opacity"],
    ["fontFamily", "font-family"],
    ["fontSize", "font-size"],
    ["fontSizeAdjust", "font-size-adjust"],
    ["fontStretch", "font-stretch"],
    ["fontStyle", "font-style"],
    ["fontVariant", "font-variant"],
    ["fontWeight", "font-weight"],
    ["glyphName", "glyph-name"],
    ["glyphOrientationHorizontal", "glyph-orientation-horizontal"],
    ["glyphOrientationVertical", "glyph-orientation-vertical"],
    ["horizAdvX", "horiz-adv-x"],
    ["horizOriginX", "horiz-origin-x"],
    ["imageRendering", "image-rendering"],
    ["letterSpacing", "letter-spacing"],
    ["lightingColor", "lighting-color"],
    ["markerEnd", "marker-end"],
    ["markerMid", "marker-mid"],
    ["markerStart", "marker-start"],
    ["overlinePosition", "overline-position"],
    ["overlineThickness", "overline-thickness"],
    ["paintOrder", "paint-order"],
    ["panose-1", "panose-1"],
    ["pointerEvents", "pointer-events"],
    ["renderingIntent", "rendering-intent"],
    ["shapeRendering", "shape-rendering"],
    ["stopColor", "stop-color"],
    ["stopOpacity", "stop-opacity"],
    ["strikethroughPosition", "strikethrough-position"],
    ["strikethroughThickness", "strikethrough-thickness"],
    ["strokeDasharray", "stroke-dasharray"],
    ["strokeDashoffset", "stroke-dashoffset"],
    ["strokeLinecap", "stroke-linecap"],
    ["strokeLinejoin", "stroke-linejoin"],
    ["strokeMiterlimit", "stroke-miterlimit"],
    ["strokeOpacity", "stroke-opacity"],
    ["strokeWidth", "stroke-width"],
    ["textAnchor", "text-anchor"],
    ["textDecoration", "text-decoration"],
    ["textRendering", "text-rendering"],
    ["transformOrigin", "transform-origin"],
    ["underlinePosition", "underline-position"],
    ["underlineThickness", "underline-thickness"],
    ["unicodeBidi", "unicode-bidi"],
    ["unicodeRange", "unicode-range"],
    ["unitsPerEm", "units-per-em"],
    ["vAlphabetic", "v-alphabetic"],
    ["vHanging", "v-hanging"],
    ["vIdeographic", "v-ideographic"],
    ["vMathematical", "v-mathematical"],
    ["vectorEffect", "vector-effect"],
    ["vertAdvY", "vert-adv-y"],
    ["vertOriginX", "vert-origin-x"],
    ["vertOriginY", "vert-origin-y"],
    ["wordSpacing", "word-spacing"],
    ["writingMode", "writing-mode"],
    ["xmlnsXlink", "xmlns:xlink"],
    ["xHeight", "x-height"]
  ]), Tp = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
  function Tf(l) {
    return Tp.test("" + l) ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')" : l;
  }
  var Ki = null;
  function cs(l) {
    return l = l.target || l.srcElement || window, l.correspondingUseElement && (l = l.correspondingUseElement), l.nodeType === 3 ? l.parentNode : l;
  }
  var Ic = null, Pc = null;
  function Ep(l) {
    var n = Gi(l);
    if (n && (l = n.stateNode)) {
      var u = l[Zl] || null;
      e: switch (l = n.stateNode, n.type) {
        case "input":
          if (ns(
            l,
            u.value,
            u.defaultValue,
            u.defaultValue,
            u.checked,
            u.defaultChecked,
            u.type,
            u.name
          ), n = u.name, u.type === "radio" && n != null) {
            for (u = l; u.parentNode; ) u = u.parentNode;
            for (u = u.querySelectorAll(
              'input[name="' + Ba(
                "" + n
              ) + '"][type="radio"]'
            ), n = 0; n < u.length; n++) {
              var c = u[n];
              if (c !== l && c.form === l.form) {
                var r = c[Zl] || null;
                if (!r) throw Error(D(90));
                ns(
                  c,
                  r.value,
                  r.defaultValue,
                  r.defaultValue,
                  r.checked,
                  r.defaultChecked,
                  r.type,
                  r.name
                );
              }
            }
            for (n = 0; n < u.length; n++)
              c = u[n], c.form === l.form && Xi(c);
          }
          break e;
        case "textarea":
          Dh(l, u.value, u.defaultValue);
          break e;
        case "select":
          n = u.value, n != null && Qi(l, !!u.multiple, n, !1);
      }
    }
  }
  var Mh = !1;
  function eo(l, n, u) {
    if (Mh) return l(n, u);
    Mh = !0;
    try {
      var c = l(n);
      return c;
    } finally {
      if (Mh = !1, (Ic !== null || Pc !== null) && (Rc(), Ic && (n = Ic, l = Pc, Pc = Ic = null, Ep(n), l)))
        for (n = 0; n < l.length; n++) Ep(l[n]);
    }
  }
  function Ji(l, n) {
    var u = l.stateNode;
    if (u === null) return null;
    var c = u[Zl] || null;
    if (c === null) return null;
    u = c[n];
    e: switch (n) {
      case "onClick":
      case "onClickCapture":
      case "onDoubleClick":
      case "onDoubleClickCapture":
      case "onMouseDown":
      case "onMouseDownCapture":
      case "onMouseMove":
      case "onMouseMoveCapture":
      case "onMouseUp":
      case "onMouseUpCapture":
      case "onMouseEnter":
        (c = !c.disabled) || (l = l.type, c = !(l === "button" || l === "input" || l === "select" || l === "textarea")), l = !c;
        break e;
      default:
        l = !1;
    }
    if (l) return null;
    if (u && typeof u != "function")
      throw Error(
        D(231, n, typeof u)
      );
    return u;
  }
  var zn = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), os = !1;
  if (zn)
    try {
      var gu = {};
      Object.defineProperty(gu, "passive", {
        get: function() {
          os = !0;
        }
      }), window.addEventListener("test", gu, gu), window.removeEventListener("test", gu, gu);
    } catch {
      os = !1;
    }
  var bu = null, to = null, ki = null;
  function Uh() {
    if (ki) return ki;
    var l, n = to, u = n.length, c, r = "value" in bu ? bu.value : bu.textContent, s = r.length;
    for (l = 0; l < u && n[l] === r[l]; l++) ;
    var y = u - l;
    for (c = 1; c <= y && n[u - c] === r[s - c]; c++) ;
    return ki = r.slice(l, 1 < c ? 1 - c : void 0);
  }
  function Dl(l) {
    var n = l.keyCode;
    return "charCode" in l ? (l = l.charCode, l === 0 && n === 13 && (l = 13)) : l = n, l === 10 && (l = 13), 32 <= l || l === 13 ? l : 0;
  }
  function fs() {
    return !0;
  }
  function rs() {
    return !1;
  }
  function Jl(l) {
    function n(u, c, r, s, y) {
      this._reactName = u, this._targetInst = r, this.type = c, this.nativeEvent = s, this.target = y, this.currentTarget = null;
      for (var p in l)
        l.hasOwnProperty(p) && (u = l[p], this[p] = u ? u(s) : s[p]);
      return this.isDefaultPrevented = (s.defaultPrevented != null ? s.defaultPrevented : s.returnValue === !1) ? fs : rs, this.isPropagationStopped = rs, this;
    }
    return ue(n.prototype, {
      preventDefault: function() {
        this.defaultPrevented = !0;
        var u = this.nativeEvent;
        u && (u.preventDefault ? u.preventDefault() : typeof u.returnValue != "unknown" && (u.returnValue = !1), this.isDefaultPrevented = fs);
      },
      stopPropagation: function() {
        var u = this.nativeEvent;
        u && (u.stopPropagation ? u.stopPropagation() : typeof u.cancelBubble != "unknown" && (u.cancelBubble = !0), this.isPropagationStopped = fs);
      },
      persist: function() {
      },
      isPersistent: fs
    }), n;
  }
  var ei = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function(l) {
      return l.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0
  }, ss = Jl(ei), Ef = ue({}, ei, { view: 0, detail: 0 }), Ap = Jl(Ef), _h, ds, Af, $i = ue({}, Ef, {
    screenX: 0,
    screenY: 0,
    clientX: 0,
    clientY: 0,
    pageX: 0,
    pageY: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    getModifierState: Su,
    button: 0,
    buttons: 0,
    relatedTarget: function(l) {
      return l.relatedTarget === void 0 ? l.fromElement === l.srcElement ? l.toElement : l.fromElement : l.relatedTarget;
    },
    movementX: function(l) {
      return "movementX" in l ? l.movementX : (l !== Af && (Af && l.type === "mousemove" ? (_h = l.screenX - Af.screenX, ds = l.screenY - Af.screenY) : ds = _h = 0, Af = l), _h);
    },
    movementY: function(l) {
      return "movementY" in l ? l.movementY : ds;
    }
  }), Ch = Jl($i), Rp = ue({}, $i, { dataTransfer: 0 }), Op = Jl(Rp), mg = ue({}, Ef, { relatedTarget: 0 }), Hh = Jl(mg), pg = ue({}, ei, {
    animationName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), vg = Jl(pg), gg = ue({}, ei, {
    clipboardData: function(l) {
      return "clipboardData" in l ? l.clipboardData : window.clipboardData;
    }
  }), Rf = Jl(gg), Dp = ue({}, ei, { data: 0 }), xh = Jl(Dp), zp = {
    Esc: "Escape",
    Spacebar: " ",
    Left: "ArrowLeft",
    Up: "ArrowUp",
    Right: "ArrowRight",
    Down: "ArrowDown",
    Del: "Delete",
    Win: "OS",
    Menu: "ContextMenu",
    Apps: "ContextMenu",
    Scroll: "ScrollLock",
    MozPrintableKey: "Unidentified"
  }, Mp = {
    8: "Backspace",
    9: "Tab",
    12: "Clear",
    13: "Enter",
    16: "Shift",
    17: "Control",
    18: "Alt",
    19: "Pause",
    20: "CapsLock",
    27: "Escape",
    32: " ",
    33: "PageUp",
    34: "PageDown",
    35: "End",
    36: "Home",
    37: "ArrowLeft",
    38: "ArrowUp",
    39: "ArrowRight",
    40: "ArrowDown",
    45: "Insert",
    46: "Delete",
    112: "F1",
    113: "F2",
    114: "F3",
    115: "F4",
    116: "F5",
    117: "F6",
    118: "F7",
    119: "F8",
    120: "F9",
    121: "F10",
    122: "F11",
    123: "F12",
    144: "NumLock",
    145: "ScrollLock",
    224: "Meta"
  }, Nh = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey"
  };
  function Up(l) {
    var n = this.nativeEvent;
    return n.getModifierState ? n.getModifierState(l) : (l = Nh[l]) ? !!n[l] : !1;
  }
  function Su() {
    return Up;
  }
  var Wi = ue({}, Ef, {
    key: function(l) {
      if (l.key) {
        var n = zp[l.key] || l.key;
        if (n !== "Unidentified") return n;
      }
      return l.type === "keypress" ? (l = Dl(l), l === 13 ? "Enter" : String.fromCharCode(l)) : l.type === "keydown" || l.type === "keyup" ? Mp[l.keyCode] || "Unidentified" : "";
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: Su,
    charCode: function(l) {
      return l.type === "keypress" ? Dl(l) : 0;
    },
    keyCode: function(l) {
      return l.type === "keydown" || l.type === "keyup" ? l.keyCode : 0;
    },
    which: function(l) {
      return l.type === "keypress" ? Dl(l) : l.type === "keydown" || l.type === "keyup" ? l.keyCode : 0;
    }
  }), nn = Jl(Wi), Ta = ue({}, $i, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0
  }), Of = Jl(Ta), hs = ue({}, Ef, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: Su
  }), wh = Jl(hs), aa = ue({}, ei, {
    propertyName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), _p = Jl(aa), ys = ue({}, $i, {
    deltaX: function(l) {
      return "deltaX" in l ? l.deltaX : "wheelDeltaX" in l ? -l.wheelDeltaX : 0;
    },
    deltaY: function(l) {
      return "deltaY" in l ? l.deltaY : "wheelDeltaY" in l ? -l.wheelDeltaY : "wheelDelta" in l ? -l.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  }), Fi = Jl(ys), Bh = ue({}, ei, {
    newState: 0,
    oldState: 0
  }), Cp = Jl(Bh), Hp = [9, 13, 27, 32], Df = zn && "CompositionEvent" in window, zf = null;
  zn && "documentMode" in document && (zf = document.documentMode);
  var qh = zn && "TextEvent" in window && !zf, Mn = zn && (!Df || zf && 8 < zf && 11 >= zf), Yh = " ", ms = !1;
  function Mf(l, n) {
    switch (l) {
      case "keyup":
        return Hp.indexOf(n.keyCode) !== -1;
      case "keydown":
        return n.keyCode !== 229;
      case "keypress":
      case "mousedown":
      case "focusout":
        return !0;
      default:
        return !1;
    }
  }
  function ti(l) {
    return l = l.detail, typeof l == "object" && "data" in l ? l.data : null;
  }
  var li = !1;
  function jh(l, n) {
    switch (l) {
      case "compositionend":
        return ti(n);
      case "keypress":
        return n.which !== 32 ? null : (ms = !0, Yh);
      case "textInput":
        return l = n.data, l === Yh && ms ? null : l;
      default:
        return null;
    }
  }
  function Ii(l, n) {
    if (li)
      return l === "compositionend" || !Df && Mf(l, n) ? (l = Uh(), ki = to = bu = null, li = !1, l) : null;
    switch (l) {
      case "paste":
        return null;
      case "keypress":
        if (!(n.ctrlKey || n.altKey || n.metaKey) || n.ctrlKey && n.altKey) {
          if (n.char && 1 < n.char.length)
            return n.char;
          if (n.which) return String.fromCharCode(n.which);
        }
        return null;
      case "compositionend":
        return Mn && n.locale !== "ko" ? null : n.data;
      default:
        return null;
    }
  }
  var xp = {
    color: !0,
    date: !0,
    datetime: !0,
    "datetime-local": !0,
    email: !0,
    month: !0,
    number: !0,
    password: !0,
    range: !0,
    search: !0,
    tel: !0,
    text: !0,
    time: !0,
    url: !0,
    week: !0
  };
  function ps(l) {
    var n = l && l.nodeName && l.nodeName.toLowerCase();
    return n === "input" ? !!xp[l.type] : n === "textarea";
  }
  function vs(l, n, u, c) {
    Ic ? Pc ? Pc.push(c) : Pc = [c] : Ic = c, n = jo(n, "onChange"), 0 < n.length && (u = new ss(
      "onChange",
      "change",
      null,
      u,
      c
    ), l.push({ event: u, listeners: n }));
  }
  var un = null, cn = null;
  function Gh(l) {
    Mc(l, 0);
  }
  function Un(l) {
    var n = mf(l);
    if (Xi(n)) return l;
  }
  function Lh(l, n) {
    if (l === "change") return n;
  }
  var Vh = !1;
  if (zn) {
    var Pi;
    if (zn) {
      var ec = "oninput" in document;
      if (!ec) {
        var Xh = document.createElement("div");
        Xh.setAttribute("oninput", "return;"), ec = typeof Xh.oninput == "function";
      }
      Pi = ec;
    } else Pi = !1;
    Vh = Pi && (!document.documentMode || 9 < document.documentMode);
  }
  function lo() {
    un && (un.detachEvent("onpropertychange", Qh), cn = un = null);
  }
  function Qh(l) {
    if (l.propertyName === "value" && Un(cn)) {
      var n = [];
      vs(
        n,
        cn,
        l,
        cs(l)
      ), eo(Gh, n);
    }
  }
  function gs(l, n, u) {
    l === "focusin" ? (lo(), un = n, cn = u, un.attachEvent("onpropertychange", Qh)) : l === "focusout" && lo();
  }
  function ai(l) {
    if (l === "selectionchange" || l === "keyup" || l === "keydown")
      return Un(cn);
  }
  function Tu(l, n) {
    if (l === "click") return Un(n);
  }
  function Zh(l, n) {
    if (l === "input" || l === "change")
      return Un(n);
  }
  function Kh(l, n) {
    return l === n && (l !== 0 || 1 / l === 1 / n) || l !== l && n !== n;
  }
  var zl = typeof Object.is == "function" ? Object.is : Kh;
  function ni(l, n) {
    if (zl(l, n)) return !0;
    if (typeof l != "object" || l === null || typeof n != "object" || n === null)
      return !1;
    var u = Object.keys(l), c = Object.keys(n);
    if (u.length !== c.length) return !1;
    for (c = 0; c < u.length; c++) {
      var r = u[c];
      if (!ji.call(n, r) || !zl(l[r], n[r]))
        return !1;
    }
    return !0;
  }
  function ui(l) {
    for (; l && l.firstChild; ) l = l.firstChild;
    return l;
  }
  function _t(l, n) {
    var u = ui(l);
    l = 0;
    for (var c; u; ) {
      if (u.nodeType === 3) {
        if (c = l + u.textContent.length, l <= n && c >= n)
          return { node: u, offset: n - l };
        l = c;
      }
      e: {
        for (; u; ) {
          if (u.nextSibling) {
            u = u.nextSibling;
            break e;
          }
          u = u.parentNode;
        }
        u = void 0;
      }
      u = ui(u);
    }
  }
  function Uf(l, n) {
    return l && n ? l === n ? !0 : l && l.nodeType === 3 ? !1 : n && n.nodeType === 3 ? Uf(l, n.parentNode) : "contains" in l ? l.contains(n) : l.compareDocumentPosition ? !!(l.compareDocumentPosition(n) & 16) : !1 : !1;
  }
  function Jh(l) {
    l = l != null && l.ownerDocument != null && l.ownerDocument.defaultView != null ? l.ownerDocument.defaultView : window;
    for (var n = Wc(l.document); n instanceof l.HTMLIFrameElement; ) {
      try {
        var u = typeof n.contentWindow.location.href == "string";
      } catch {
        u = !1;
      }
      if (u) l = n.contentWindow;
      else break;
      n = Wc(l.document);
    }
    return n;
  }
  function _f(l) {
    var n = l && l.nodeName && l.nodeName.toLowerCase();
    return n && (n === "input" && (l.type === "text" || l.type === "search" || l.type === "tel" || l.type === "url" || l.type === "password") || n === "textarea" || l.contentEditable === "true");
  }
  var tc = zn && "documentMode" in document && 11 >= document.documentMode, _n = null, on = null, ii = null, lc = !1;
  function bs(l, n, u) {
    var c = u.window === u ? u.document : u.nodeType === 9 ? u : u.ownerDocument;
    lc || _n == null || _n !== Wc(c) || (c = _n, "selectionStart" in c && _f(c) ? c = { start: c.selectionStart, end: c.selectionEnd } : (c = (c.ownerDocument && c.ownerDocument.defaultView || window).getSelection(), c = {
      anchorNode: c.anchorNode,
      anchorOffset: c.anchorOffset,
      focusNode: c.focusNode,
      focusOffset: c.focusOffset
    }), ii && ni(ii, c) || (ii = c, c = jo(on, "onSelect"), 0 < c.length && (n = new ss(
      "onSelect",
      "select",
      null,
      n,
      u
    ), l.push({ event: n, listeners: c }), n.target = _n)));
  }
  function Eu(l, n) {
    var u = {};
    return u[l.toLowerCase()] = n.toLowerCase(), u["Webkit" + l] = "webkit" + n, u["Moz" + l] = "moz" + n, u;
  }
  var ac = {
    animationend: Eu("Animation", "AnimationEnd"),
    animationiteration: Eu("Animation", "AnimationIteration"),
    animationstart: Eu("Animation", "AnimationStart"),
    transitionrun: Eu("Transition", "TransitionRun"),
    transitionstart: Eu("Transition", "TransitionStart"),
    transitioncancel: Eu("Transition", "TransitionCancel"),
    transitionend: Eu("Transition", "TransitionEnd")
  }, qa = {}, fn = {};
  zn && (fn = document.createElement("div").style, "AnimationEvent" in window || (delete ac.animationend.animation, delete ac.animationiteration.animation, delete ac.animationstart.animation), "TransitionEvent" in window || delete ac.transitionend.transition);
  function Cn(l) {
    if (qa[l]) return qa[l];
    if (!ac[l]) return l;
    var n = ac[l], u;
    for (u in n)
      if (n.hasOwnProperty(u) && u in fn)
        return qa[l] = n[u];
    return l;
  }
  var Np = Cn("animationend"), kh = Cn("animationiteration"), wp = Cn("animationstart"), $h = Cn("transitionrun"), Ss = Cn("transitionstart"), Bp = Cn("transitioncancel"), Wh = Cn("transitionend"), Fh = /* @__PURE__ */ new Map(), ao = "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
    " "
  );
  ao.push("scrollEnd");
  function Ya(l, n) {
    Fh.set(l, n), Wu(n, [l]);
  }
  var Ih = /* @__PURE__ */ new WeakMap();
  function Ea(l, n) {
    if (typeof l == "object" && l !== null) {
      var u = Ih.get(l);
      return u !== void 0 ? u : (n = {
        value: l,
        source: n,
        stack: Rh(n)
      }, Ih.set(l, n), n);
    }
    return {
      value: l,
      source: n,
      stack: Rh(n)
    };
  }
  var na = [], ci = 0, Hn = 0;
  function rn() {
    for (var l = ci, n = Hn = ci = 0; n < l; ) {
      var u = na[n];
      na[n++] = null;
      var c = na[n];
      na[n++] = null;
      var r = na[n];
      na[n++] = null;
      var s = na[n];
      if (na[n++] = null, c !== null && r !== null) {
        var y = c.pending;
        y === null ? r.next = r : (r.next = y.next, y.next = r), c.pending = r;
      }
      s !== 0 && uo(u, r, s);
    }
  }
  function oi(l, n, u, c) {
    na[ci++] = l, na[ci++] = n, na[ci++] = u, na[ci++] = c, Hn |= c, l.lanes |= c, l = l.alternate, l !== null && (l.lanes |= c);
  }
  function no(l, n, u, c) {
    return oi(l, n, u, c), Cf(l);
  }
  function xn(l, n) {
    return oi(l, null, null, n), Cf(l);
  }
  function uo(l, n, u) {
    l.lanes |= u;
    var c = l.alternate;
    c !== null && (c.lanes |= u);
    for (var r = !1, s = l.return; s !== null; )
      s.childLanes |= u, c = s.alternate, c !== null && (c.childLanes |= u), s.tag === 22 && (l = s.stateNode, l === null || l._visibility & 1 || (r = !0)), l = s, s = s.return;
    return l.tag === 3 ? (s = l.stateNode, r && n !== null && (r = 31 - Al(u), l = s.hiddenUpdates, c = l[r], c === null ? l[r] = [n] : c.push(n), n.lane = u | 536870912), s) : null;
  }
  function Cf(l) {
    if (50 < xo)
      throw xo = 0, Iy = null, Error(D(185));
    for (var n = l.return; n !== null; )
      l = n, n = l.return;
    return l.tag === 3 ? l.stateNode : null;
  }
  var io = {};
  function qp(l, n, u, c) {
    this.tag = l, this.key = u, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.refCleanup = this.ref = null, this.pendingProps = n, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = c, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function ua(l, n, u, c) {
    return new qp(l, n, u, c);
  }
  function Hf(l) {
    return l = l.prototype, !(!l || !l.isReactComponent);
  }
  function sn(l, n) {
    var u = l.alternate;
    return u === null ? (u = ua(
      l.tag,
      n,
      l.key,
      l.mode
    ), u.elementType = l.elementType, u.type = l.type, u.stateNode = l.stateNode, u.alternate = l, l.alternate = u) : (u.pendingProps = n, u.type = l.type, u.flags = 0, u.subtreeFlags = 0, u.deletions = null), u.flags = l.flags & 65011712, u.childLanes = l.childLanes, u.lanes = l.lanes, u.child = l.child, u.memoizedProps = l.memoizedProps, u.memoizedState = l.memoizedState, u.updateQueue = l.updateQueue, n = l.dependencies, u.dependencies = n === null ? null : { lanes: n.lanes, firstContext: n.firstContext }, u.sibling = l.sibling, u.index = l.index, u.ref = l.ref, u.refCleanup = l.refCleanup, u;
  }
  function Ke(l, n) {
    l.flags &= 65011714;
    var u = l.alternate;
    return u === null ? (l.childLanes = 0, l.lanes = n, l.child = null, l.subtreeFlags = 0, l.memoizedProps = null, l.memoizedState = null, l.updateQueue = null, l.dependencies = null, l.stateNode = null) : (l.childLanes = u.childLanes, l.lanes = u.lanes, l.child = u.child, l.subtreeFlags = 0, l.deletions = null, l.memoizedProps = u.memoizedProps, l.memoizedState = u.memoizedState, l.updateQueue = u.updateQueue, l.type = u.type, n = u.dependencies, l.dependencies = n === null ? null : {
      lanes: n.lanes,
      firstContext: n.firstContext
    }), l;
  }
  function ee(l, n, u, c, r, s) {
    var y = 0;
    if (c = l, typeof l == "function") Hf(l) && (y = 1);
    else if (typeof l == "string")
      y = vv(
        l,
        u,
        ce.current
      ) ? 26 : l === "html" || l === "head" || l === "body" ? 27 : 5;
    else
      e: switch (l) {
        case de:
          return l = ua(31, u, n, r), l.elementType = de, l.lanes = s, l;
        case ze:
          return ja(u.children, r, s, n);
        case ot:
          y = 8, r |= 24;
          break;
        case Ve:
          return l = ua(12, u, n, r | 2), l.elementType = Ve, l.lanes = s, l;
        case Ne:
          return l = ua(13, u, n, r), l.elementType = Ne, l.lanes = s, l;
        case Rt:
          return l = ua(19, u, n, r), l.elementType = Rt, l.lanes = s, l;
        default:
          if (typeof l == "object" && l !== null)
            switch (l.$$typeof) {
              case Xe:
              case rt:
                y = 10;
                break e;
              case It:
                y = 9;
                break e;
              case Wt:
                y = 11;
                break e;
              case We:
                y = 14;
                break e;
              case Ot:
                y = 16, c = null;
                break e;
            }
          y = 29, u = Error(
            D(130, l === null ? "null" : typeof l, "")
          ), c = null;
      }
    return n = ua(y, u, n, r), n.elementType = l, n.type = c, n.lanes = s, n;
  }
  function ja(l, n, u, c) {
    return l = ua(7, l, c, n), l.lanes = u, l;
  }
  function co(l, n, u) {
    return l = ua(6, l, null, n), l.lanes = u, l;
  }
  function jt(l, n, u) {
    return n = ua(
      4,
      l.children !== null ? l.children : [],
      l.key,
      n
    ), n.lanes = u, n.stateNode = {
      containerInfo: l.containerInfo,
      pendingChildren: null,
      implementation: l.implementation
    }, n;
  }
  var fi = [], ri = 0, xf = null, oo = 0, Ga = [], ia = 0, Au = null, dn = 1, Vt = "";
  function nt(l, n) {
    fi[ri++] = oo, fi[ri++] = xf, xf = l, oo = n;
  }
  function Ts(l, n, u) {
    Ga[ia++] = dn, Ga[ia++] = Vt, Ga[ia++] = Au, Au = l;
    var c = dn;
    l = Vt;
    var r = 32 - Al(c) - 1;
    c &= ~(1 << r), u += 1;
    var s = 32 - Al(n) + r;
    if (30 < s) {
      var y = r - r % 5;
      s = (c & (1 << y) - 1).toString(32), c >>= y, r -= y, dn = 1 << 32 - Al(n) + r | u << r | c, Vt = s + l;
    } else
      dn = 1 << s | u << r | c, Vt = l;
  }
  function nc(l) {
    l.return !== null && (nt(l, 1), Ts(l, 1, 0));
  }
  function Nn(l) {
    for (; l === xf; )
      xf = fi[--ri], fi[ri] = null, oo = fi[--ri], fi[ri] = null;
    for (; l === Au; )
      Au = Ga[--ia], Ga[ia] = null, Vt = Ga[--ia], Ga[ia] = null, dn = Ga[--ia], Ga[ia] = null;
  }
  var Ft = null, st = null, ft = !1, La = null, Va = !1, uc = Error(D(519));
  function Ru(l) {
    var n = Error(D(418, ""));
    throw so(Ea(n, l)), uc;
  }
  function Nf(l) {
    var n = l.stateNode, u = l.type, c = l.memoizedProps;
    switch (n[yl] = l, n[Zl] = c, u) {
      case "dialog":
        Ye("cancel", n), Ye("close", n);
        break;
      case "iframe":
      case "object":
      case "embed":
        Ye("load", n);
        break;
      case "video":
      case "audio":
        for (u = 0; u < br.length; u++)
          Ye(br[u], n);
        break;
      case "source":
        Ye("error", n);
        break;
      case "img":
      case "image":
      case "link":
        Ye("error", n), Ye("load", n);
        break;
      case "details":
        Ye("toggle", n);
        break;
      case "input":
        Ye("invalid", n), us(
          n,
          c.value,
          c.defaultValue,
          c.checked,
          c.defaultChecked,
          c.type,
          c.name,
          !0
        ), Pu(n);
        break;
      case "select":
        Ye("invalid", n);
        break;
      case "textarea":
        Ye("invalid", n), zh(n, c.value, c.defaultValue, c.children), Pu(n);
    }
    u = c.children, typeof u != "string" && typeof u != "number" && typeof u != "bigint" || n.textContent === "" + u || c.suppressHydrationWarning === !0 || dm(n.textContent, u) ? (c.popover != null && (Ye("beforetoggle", n), Ye("toggle", n)), c.onScroll != null && Ye("scroll", n), c.onScrollEnd != null && Ye("scrollend", n), c.onClick != null && (n.onclick = Cd), n = !0) : n = !1, n || Ru(l);
  }
  function Ph(l) {
    for (Ft = l.return; Ft; )
      switch (Ft.tag) {
        case 5:
        case 13:
          Va = !1;
          return;
        case 27:
        case 3:
          Va = !0;
          return;
        default:
          Ft = Ft.return;
      }
  }
  function fo(l) {
    if (l !== Ft) return !1;
    if (!ft) return Ph(l), ft = !0, !1;
    var n = l.tag, u;
    if ((u = n !== 3 && n !== 27) && ((u = n === 5) && (u = l.type, u = !(u !== "form" && u !== "button") || eu(l.type, l.memoizedProps)), u = !u), u && st && Ru(l), Ph(l), n === 13) {
      if (l = l.memoizedState, l = l !== null ? l.dehydrated : null, !l) throw Error(D(317));
      e: {
        for (l = l.nextSibling, n = 0; l; ) {
          if (l.nodeType === 8)
            if (u = l.data, u === "/$") {
              if (n === 0) {
                st = gn(l.nextSibling);
                break e;
              }
              n--;
            } else
              u !== "$" && u !== "$!" && u !== "$?" || n++;
          l = l.nextSibling;
        }
        st = null;
      }
    } else
      n === 27 ? (n = st, Mi(l.type) ? (l = Ui, Ui = null, st = l) : st = n) : st = Ft ? gn(l.stateNode.nextSibling) : null;
    return !0;
  }
  function ro() {
    st = Ft = null, ft = !1;
  }
  function ey() {
    var l = La;
    return l !== null && (da === null ? da = l : da.push.apply(
      da,
      l
    ), La = null), l;
  }
  function so(l) {
    La === null ? La = [l] : La.push(l);
  }
  var wf = w(null), Ou = null, hn = null;
  function Du(l, n, u) {
    I(wf, n._currentValue), n._currentValue = u;
  }
  function wn(l) {
    l._currentValue = wf.current, Z(wf);
  }
  function Es(l, n, u) {
    for (; l !== null; ) {
      var c = l.alternate;
      if ((l.childLanes & n) !== n ? (l.childLanes |= n, c !== null && (c.childLanes |= n)) : c !== null && (c.childLanes & n) !== n && (c.childLanes |= n), l === u) break;
      l = l.return;
    }
  }
  function ty(l, n, u, c) {
    var r = l.child;
    for (r !== null && (r.return = l); r !== null; ) {
      var s = r.dependencies;
      if (s !== null) {
        var y = r.child;
        s = s.firstContext;
        e: for (; s !== null; ) {
          var p = s;
          s = r;
          for (var S = 0; S < n.length; S++)
            if (p.context === n[S]) {
              s.lanes |= u, p = s.alternate, p !== null && (p.lanes |= u), Es(
                s.return,
                u,
                l
              ), c || (y = null);
              break e;
            }
          s = p.next;
        }
      } else if (r.tag === 18) {
        if (y = r.return, y === null) throw Error(D(341));
        y.lanes |= u, s = y.alternate, s !== null && (s.lanes |= u), Es(y, u, l), y = null;
      } else y = r.child;
      if (y !== null) y.return = r;
      else
        for (y = r; y !== null; ) {
          if (y === l) {
            y = null;
            break;
          }
          if (r = y.sibling, r !== null) {
            r.return = y.return, y = r;
            break;
          }
          y = y.return;
        }
      r = y;
    }
  }
  function ho(l, n, u, c) {
    l = null;
    for (var r = n, s = !1; r !== null; ) {
      if (!s) {
        if ((r.flags & 524288) !== 0) s = !0;
        else if ((r.flags & 262144) !== 0) break;
      }
      if (r.tag === 10) {
        var y = r.alternate;
        if (y === null) throw Error(D(387));
        if (y = y.memoizedProps, y !== null) {
          var p = r.type;
          zl(r.pendingProps.value, y.value) || (l !== null ? l.push(p) : l = [p]);
        }
      } else if (r === nl.current) {
        if (y = r.alternate, y === null) throw Error(D(387));
        y.memoizedState.memoizedState !== r.memoizedState.memoizedState && (l !== null ? l.push(pa) : l = [pa]);
      }
      r = r.return;
    }
    l !== null && ty(
      n,
      l,
      u,
      c
    ), n.flags |= 262144;
  }
  function Bf(l) {
    for (l = l.firstContext; l !== null; ) {
      if (!zl(
        l.context._currentValue,
        l.memoizedValue
      ))
        return !0;
      l = l.next;
    }
    return !1;
  }
  function si(l) {
    Ou = l, hn = null, l = l.dependencies, l !== null && (l.firstContext = null);
  }
  function ml(l) {
    return ly(Ou, l);
  }
  function qf(l, n) {
    return Ou === null && si(l), ly(l, n);
  }
  function ly(l, n) {
    var u = n._currentValue;
    if (n = { context: n, memoizedValue: u, next: null }, hn === null) {
      if (l === null) throw Error(D(308));
      hn = n, l.dependencies = { lanes: 0, firstContext: n }, l.flags |= 524288;
    } else hn = hn.next = n;
    return u;
  }
  var yo = typeof AbortController < "u" ? AbortController : function() {
    var l = [], n = this.signal = {
      aborted: !1,
      addEventListener: function(u, c) {
        l.push(c);
      }
    };
    this.abort = function() {
      n.aborted = !0, l.forEach(function(u) {
        return u();
      });
    };
  }, As = H.unstable_scheduleCallback, Yp = H.unstable_NormalPriority, cl = {
    $$typeof: rt,
    Consumer: null,
    Provider: null,
    _currentValue: null,
    _currentValue2: null,
    _threadCount: 0
  };
  function mo() {
    return {
      controller: new yo(),
      data: /* @__PURE__ */ new Map(),
      refCount: 0
    };
  }
  function Bn(l) {
    l.refCount--, l.refCount === 0 && As(Yp, function() {
      l.controller.abort();
    });
  }
  var di = null, Yf = 0, Xa = 0, ol = null;
  function Rs(l, n) {
    if (di === null) {
      var u = di = [];
      Yf = 0, Xa = zc(), ol = {
        status: "pending",
        value: void 0,
        then: function(c) {
          u.push(c);
        }
      };
    }
    return Yf++, n.then(Os, Os), n;
  }
  function Os() {
    if (--Yf === 0 && di !== null) {
      ol !== null && (ol.status = "fulfilled");
      var l = di;
      di = null, Xa = 0, ol = null;
      for (var n = 0; n < l.length; n++) (0, l[n])();
    }
  }
  function jp(l, n) {
    var u = [], c = {
      status: "pending",
      value: null,
      reason: null,
      then: function(r) {
        u.push(r);
      }
    };
    return l.then(
      function() {
        c.status = "fulfilled", c.value = n;
        for (var r = 0; r < u.length; r++) (0, u[r])(n);
      },
      function(r) {
        for (c.status = "rejected", c.reason = r, r = 0; r < u.length; r++)
          (0, u[r])(void 0);
      }
    ), c;
  }
  var Ds = O.S;
  O.S = function(l, n) {
    typeof n == "object" && n !== null && typeof n.then == "function" && Rs(l, n), Ds !== null && Ds(l, n);
  };
  var qn = w(null);
  function jf() {
    var l = qn.current;
    return l !== null ? l : Dt.pooledCache;
  }
  function ic(l, n) {
    n === null ? I(qn, qn.current) : I(qn, n.pool);
  }
  function zs() {
    var l = jf();
    return l === null ? null : { parent: cl._currentValue, pool: l };
  }
  var hi = Error(D(460)), Ms = Error(D(474)), Gf = Error(D(542)), Us = { then: function() {
  } };
  function _s(l) {
    return l = l.status, l === "fulfilled" || l === "rejected";
  }
  function Lf() {
  }
  function ay(l, n, u) {
    switch (u = l[u], u === void 0 ? l.push(n) : u !== n && (n.then(Lf, Lf), n = u), n.status) {
      case "fulfilled":
        return n.value;
      case "rejected":
        throw l = n.reason, uy(l), l;
      default:
        if (typeof n.status == "string") n.then(Lf, Lf);
        else {
          if (l = Dt, l !== null && 100 < l.shellSuspendCounter)
            throw Error(D(482));
          l = n, l.status = "pending", l.then(
            function(c) {
              if (n.status === "pending") {
                var r = n;
                r.status = "fulfilled", r.value = c;
              }
            },
            function(c) {
              if (n.status === "pending") {
                var r = n;
                r.status = "rejected", r.reason = c;
              }
            }
          );
        }
        switch (n.status) {
          case "fulfilled":
            return n.value;
          case "rejected":
            throw l = n.reason, uy(l), l;
        }
        throw cc = n, hi;
    }
  }
  var cc = null;
  function ny() {
    if (cc === null) throw Error(D(459));
    var l = cc;
    return cc = null, l;
  }
  function uy(l) {
    if (l === hi || l === Gf)
      throw Error(D(483));
  }
  var Yn = !1;
  function Cs(l) {
    l.updateQueue = {
      baseState: l.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, lanes: 0, hiddenCallbacks: null },
      callbacks: null
    };
  }
  function Hs(l, n) {
    l = l.updateQueue, n.updateQueue === l && (n.updateQueue = {
      baseState: l.baseState,
      firstBaseUpdate: l.firstBaseUpdate,
      lastBaseUpdate: l.lastBaseUpdate,
      shared: l.shared,
      callbacks: null
    });
  }
  function ca(l) {
    return { lane: l, tag: 0, payload: null, callback: null, next: null };
  }
  function jn(l, n, u) {
    var c = l.updateQueue;
    if (c === null) return null;
    if (c = c.shared, (vt & 2) !== 0) {
      var r = c.pending;
      return r === null ? n.next = n : (n.next = r.next, r.next = n), c.pending = n, n = Cf(l), uo(l, null, u), n;
    }
    return oi(l, c, n, u), Cf(l);
  }
  function oc(l, n, u) {
    if (n = n.updateQueue, n !== null && (n = n.shared, (u & 4194048) !== 0)) {
      var c = n.lanes;
      c &= l.pendingLanes, u |= c, n.lanes = u, we(l, u);
    }
  }
  function iy(l, n) {
    var u = l.updateQueue, c = l.alternate;
    if (c !== null && (c = c.updateQueue, u === c)) {
      var r = null, s = null;
      if (u = u.firstBaseUpdate, u !== null) {
        do {
          var y = {
            lane: u.lane,
            tag: u.tag,
            payload: u.payload,
            callback: null,
            next: null
          };
          s === null ? r = s = y : s = s.next = y, u = u.next;
        } while (u !== null);
        s === null ? r = s = n : s = s.next = n;
      } else r = s = n;
      u = {
        baseState: c.baseState,
        firstBaseUpdate: r,
        lastBaseUpdate: s,
        shared: c.shared,
        callbacks: c.callbacks
      }, l.updateQueue = u;
      return;
    }
    l = u.lastBaseUpdate, l === null ? u.firstBaseUpdate = n : l.next = n, u.lastBaseUpdate = n;
  }
  var cy = !1;
  function po() {
    if (cy) {
      var l = ol;
      if (l !== null) throw l;
    }
  }
  function zu(l, n, u, c) {
    cy = !1;
    var r = l.updateQueue;
    Yn = !1;
    var s = r.firstBaseUpdate, y = r.lastBaseUpdate, p = r.shared.pending;
    if (p !== null) {
      r.shared.pending = null;
      var S = p, C = S.next;
      S.next = null, y === null ? s = C : y.next = C, y = S;
      var Q = l.alternate;
      Q !== null && (Q = Q.updateQueue, p = Q.lastBaseUpdate, p !== y && (p === null ? Q.firstBaseUpdate = C : p.next = C, Q.lastBaseUpdate = S));
    }
    if (s !== null) {
      var $ = r.baseState;
      y = 0, Q = C = S = null, p = s;
      do {
        var N = p.lane & -536870913, q = N !== p.lane;
        if (q ? (et & N) === N : (c & N) === N) {
          N !== 0 && N === Xa && (cy = !0), Q !== null && (Q = Q.next = {
            lane: 0,
            tag: p.tag,
            payload: p.payload,
            callback: null,
            next: null
          });
          e: {
            var Te = l, Ee = p;
            N = n;
            var ht = u;
            switch (Ee.tag) {
              case 1:
                if (Te = Ee.payload, typeof Te == "function") {
                  $ = Te.call(ht, $, N);
                  break e;
                }
                $ = Te;
                break e;
              case 3:
                Te.flags = Te.flags & -65537 | 128;
              case 0:
                if (Te = Ee.payload, N = typeof Te == "function" ? Te.call(ht, $, N) : Te, N == null) break e;
                $ = ue({}, $, N);
                break e;
              case 2:
                Yn = !0;
            }
          }
          N = p.callback, N !== null && (l.flags |= 64, q && (l.flags |= 8192), q = r.callbacks, q === null ? r.callbacks = [N] : q.push(N));
        } else
          q = {
            lane: N,
            tag: p.tag,
            payload: p.payload,
            callback: p.callback,
            next: null
          }, Q === null ? (C = Q = q, S = $) : Q = Q.next = q, y |= N;
        if (p = p.next, p === null) {
          if (p = r.shared.pending, p === null)
            break;
          q = p, p = q.next, q.next = null, r.lastBaseUpdate = q, r.shared.pending = null;
        }
      } while (!0);
      Q === null && (S = $), r.baseState = S, r.firstBaseUpdate = C, r.lastBaseUpdate = Q, s === null && (r.shared.lanes = 0), Nu |= y, l.lanes = y, l.memoizedState = $;
    }
  }
  function xs(l, n) {
    if (typeof l != "function")
      throw Error(D(191, l));
    l.call(n);
  }
  function Vf(l, n) {
    var u = l.callbacks;
    if (u !== null)
      for (l.callbacks = null, l = 0; l < u.length; l++)
        xs(u[l], n);
  }
  var fc = w(null), Xf = w(0);
  function pl(l, n) {
    l = xu, I(Xf, l), I(fc, n), xu = l | n.baseLanes;
  }
  function vo() {
    I(Xf, xu), I(fc, fc.current);
  }
  function go() {
    xu = Xf.current, Z(fc), Z(Xf);
  }
  var Qa = 0, qe = null, pt = null, Gt = null, Qf = !1, Aa = !1, yi = !1, yn = 0, Ra = 0, Mu = null, oy = 0;
  function Lt() {
    throw Error(D(321));
  }
  function Ns(l, n) {
    if (n === null) return !1;
    for (var u = 0; u < n.length && u < l.length; u++)
      if (!zl(l[u], n[u])) return !1;
    return !0;
  }
  function ws(l, n, u, c, r, s) {
    return Qa = s, qe = n, n.memoizedState = null, n.updateQueue = null, n.lanes = 0, O.H = l === null || l.memoizedState === null ? Ay : Ry, yi = !1, s = u(c, r), yi = !1, Aa && (s = fy(
      n,
      u,
      c,
      r
    )), mi(l), s;
  }
  function mi(l) {
    O.H = Is;
    var n = pt !== null && pt.next !== null;
    if (Qa = 0, Gt = pt = qe = null, Qf = !1, Ra = 0, Mu = null, n) throw Error(D(300));
    l === null || fl || (l = l.dependencies, l !== null && Bf(l) && (fl = !0));
  }
  function fy(l, n, u, c) {
    qe = l;
    var r = 0;
    do {
      if (Aa && (Mu = null), Ra = 0, Aa = !1, 25 <= r) throw Error(D(301));
      if (r += 1, Gt = pt = null, l.updateQueue != null) {
        var s = l.updateQueue;
        s.lastEffect = null, s.events = null, s.stores = null, s.memoCache != null && (s.memoCache.index = 0);
      }
      O.H = Uu, s = n(u, c);
    } while (Aa);
    return s;
  }
  function Gp() {
    var l = O.H, n = l.useState()[0];
    return n = typeof n.then == "function" ? Kf(n) : n, l = l.useState()[0], (pt !== null ? pt.memoizedState : null) !== l && (qe.flags |= 1024), n;
  }
  function Bs() {
    var l = yn !== 0;
    return yn = 0, l;
  }
  function bo(l, n, u) {
    n.updateQueue = l.updateQueue, n.flags &= -2053, l.lanes &= ~u;
  }
  function qs(l) {
    if (Qf) {
      for (l = l.memoizedState; l !== null; ) {
        var n = l.queue;
        n !== null && (n.pending = null), l = l.next;
      }
      Qf = !1;
    }
    Qa = 0, Gt = pt = qe = null, Aa = !1, Ra = yn = 0, Mu = null;
  }
  function Yl() {
    var l = {
      memoizedState: null,
      baseState: null,
      baseQueue: null,
      queue: null,
      next: null
    };
    return Gt === null ? qe.memoizedState = Gt = l : Gt = Gt.next = l, Gt;
  }
  function Xt() {
    if (pt === null) {
      var l = qe.alternate;
      l = l !== null ? l.memoizedState : null;
    } else l = pt.next;
    var n = Gt === null ? qe.memoizedState : Gt.next;
    if (n !== null)
      Gt = n, pt = l;
    else {
      if (l === null)
        throw qe.alternate === null ? Error(D(467)) : Error(D(310));
      pt = l, l = {
        memoizedState: pt.memoizedState,
        baseState: pt.baseState,
        baseQueue: pt.baseQueue,
        queue: pt.queue,
        next: null
      }, Gt === null ? qe.memoizedState = Gt = l : Gt = Gt.next = l;
    }
    return Gt;
  }
  function Zf() {
    return { lastEffect: null, events: null, stores: null, memoCache: null };
  }
  function Kf(l) {
    var n = Ra;
    return Ra += 1, Mu === null && (Mu = []), l = ay(Mu, l, n), n = qe, (Gt === null ? n.memoizedState : Gt.next) === null && (n = n.alternate, O.H = n === null || n.memoizedState === null ? Ay : Ry), l;
  }
  function tl(l) {
    if (l !== null && typeof l == "object") {
      if (typeof l.then == "function") return Kf(l);
      if (l.$$typeof === rt) return ml(l);
    }
    throw Error(D(438, String(l)));
  }
  function Ys(l) {
    var n = null, u = qe.updateQueue;
    if (u !== null && (n = u.memoCache), n == null) {
      var c = qe.alternate;
      c !== null && (c = c.updateQueue, c !== null && (c = c.memoCache, c != null && (n = {
        data: c.data.map(function(r) {
          return r.slice();
        }),
        index: 0
      })));
    }
    if (n == null && (n = { data: [], index: 0 }), u === null && (u = Zf(), qe.updateQueue = u), u.memoCache = n, u = n.data[n.index], u === void 0)
      for (u = n.data[n.index] = Array(l), c = 0; c < l; c++)
        u[c] = zt;
    return n.index++, u;
  }
  function Gn(l, n) {
    return typeof n == "function" ? n(l) : n;
  }
  function Jf(l) {
    var n = Xt();
    return js(n, pt, l);
  }
  function js(l, n, u) {
    var c = l.queue;
    if (c === null) throw Error(D(311));
    c.lastRenderedReducer = u;
    var r = l.baseQueue, s = c.pending;
    if (s !== null) {
      if (r !== null) {
        var y = r.next;
        r.next = s.next, s.next = y;
      }
      n.baseQueue = r = s, c.pending = null;
    }
    if (s = l.baseState, r === null) l.memoizedState = s;
    else {
      n = r.next;
      var p = y = null, S = null, C = n, Q = !1;
      do {
        var $ = C.lane & -536870913;
        if ($ !== C.lane ? (et & $) === $ : (Qa & $) === $) {
          var N = C.revertLane;
          if (N === 0)
            S !== null && (S = S.next = {
              lane: 0,
              revertLane: 0,
              action: C.action,
              hasEagerState: C.hasEagerState,
              eagerState: C.eagerState,
              next: null
            }), $ === Xa && (Q = !0);
          else if ((Qa & N) === N) {
            C = C.next, N === Xa && (Q = !0);
            continue;
          } else
            $ = {
              lane: 0,
              revertLane: C.revertLane,
              action: C.action,
              hasEagerState: C.hasEagerState,
              eagerState: C.eagerState,
              next: null
            }, S === null ? (p = S = $, y = s) : S = S.next = $, qe.lanes |= N, Nu |= N;
          $ = C.action, yi && u(s, $), s = C.hasEagerState ? C.eagerState : u(s, $);
        } else
          N = {
            lane: $,
            revertLane: C.revertLane,
            action: C.action,
            hasEagerState: C.hasEagerState,
            eagerState: C.eagerState,
            next: null
          }, S === null ? (p = S = N, y = s) : S = S.next = N, qe.lanes |= $, Nu |= $;
        C = C.next;
      } while (C !== null && C !== n);
      if (S === null ? y = s : S.next = p, !zl(s, l.memoizedState) && (fl = !0, Q && (u = ol, u !== null)))
        throw u;
      l.memoizedState = s, l.baseState = y, l.baseQueue = S, c.lastRenderedState = s;
    }
    return r === null && (c.lanes = 0), [l.memoizedState, c.dispatch];
  }
  function Gs(l) {
    var n = Xt(), u = n.queue;
    if (u === null) throw Error(D(311));
    u.lastRenderedReducer = l;
    var c = u.dispatch, r = u.pending, s = n.memoizedState;
    if (r !== null) {
      u.pending = null;
      var y = r = r.next;
      do
        s = l(s, y.action), y = y.next;
      while (y !== r);
      zl(s, n.memoizedState) || (fl = !0), n.memoizedState = s, n.baseQueue === null && (n.baseState = s), u.lastRenderedState = s;
    }
    return [s, c];
  }
  function kf(l, n, u) {
    var c = qe, r = Xt(), s = ft;
    if (s) {
      if (u === void 0) throw Error(D(407));
      u = u();
    } else u = n();
    var y = !zl(
      (pt || r).memoizedState,
      u
    );
    y && (r.memoizedState = u, fl = !0), r = r.queue;
    var p = sy.bind(null, c, r, l);
    if (Tt(2048, 8, p, [l]), r.getSnapshot !== n || y || Gt !== null && Gt.memoizedState.tag & 1) {
      if (c.flags |= 2048, oa(
        9,
        Ff(),
        ry.bind(
          null,
          c,
          r,
          u,
          n
        ),
        null
      ), Dt === null) throw Error(D(349));
      s || (Qa & 124) !== 0 || Ls(c, n, u);
    }
    return u;
  }
  function Ls(l, n, u) {
    l.flags |= 16384, l = { getSnapshot: n, value: u }, n = qe.updateQueue, n === null ? (n = Zf(), qe.updateQueue = n, n.stores = [l]) : (u = n.stores, u === null ? n.stores = [l] : u.push(l));
  }
  function ry(l, n, u, c) {
    n.value = u, n.getSnapshot = c, dy(n) && Vs(l);
  }
  function sy(l, n, u) {
    return u(function() {
      dy(n) && Vs(l);
    });
  }
  function dy(l) {
    var n = l.getSnapshot;
    l = l.value;
    try {
      var u = n();
      return !zl(l, u);
    } catch {
      return !0;
    }
  }
  function Vs(l) {
    var n = xn(l, 2);
    n !== null && za(n, l, 2);
  }
  function $f(l) {
    var n = Yl();
    if (typeof l == "function") {
      var u = l;
      if (l = u(), yi) {
        wa(!0);
        try {
          u();
        } finally {
          wa(!1);
        }
      }
    }
    return n.memoizedState = n.baseState = l, n.queue = {
      pending: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: Gn,
      lastRenderedState: l
    }, n;
  }
  function Xs(l, n, u, c) {
    return l.baseState = u, js(
      l,
      pt,
      typeof c == "function" ? c : Gn
    );
  }
  function Lp(l, n, u, c, r) {
    if (hc(l)) throw Error(D(485));
    if (l = n.action, l !== null) {
      var s = {
        payload: r,
        action: l,
        next: null,
        isTransition: !0,
        status: "pending",
        value: null,
        reason: null,
        listeners: [],
        then: function(y) {
          s.listeners.push(y);
        }
      };
      O.T !== null ? u(!0) : s.isTransition = !1, c(s), u = n.pending, u === null ? (s.next = n.pending = s, Qs(n, s)) : (s.next = u.next, n.pending = u.next = s);
    }
  }
  function Qs(l, n) {
    var u = n.action, c = n.payload, r = l.state;
    if (n.isTransition) {
      var s = O.T, y = {};
      O.T = y;
      try {
        var p = u(r, c), S = O.S;
        S !== null && S(y, p), Wf(l, n, p);
      } catch (C) {
        Ks(l, n, C);
      } finally {
        O.T = s;
      }
    } else
      try {
        s = u(r, c), Wf(l, n, s);
      } catch (C) {
        Ks(l, n, C);
      }
  }
  function Wf(l, n, u) {
    u !== null && typeof u == "object" && typeof u.then == "function" ? u.then(
      function(c) {
        Zs(l, n, c);
      },
      function(c) {
        return Ks(l, n, c);
      }
    ) : Zs(l, n, u);
  }
  function Zs(l, n, u) {
    n.status = "fulfilled", n.value = u, hy(n), l.state = u, n = l.pending, n !== null && (u = n.next, u === n ? l.pending = null : (u = u.next, n.next = u, Qs(l, u)));
  }
  function Ks(l, n, u) {
    var c = l.pending;
    if (l.pending = null, c !== null) {
      c = c.next;
      do
        n.status = "rejected", n.reason = u, hy(n), n = n.next;
      while (n !== c);
    }
    l.action = null;
  }
  function hy(l) {
    l = l.listeners;
    for (var n = 0; n < l.length; n++) (0, l[n])();
  }
  function Js(l, n) {
    return n;
  }
  function yy(l, n) {
    if (ft) {
      var u = Dt.formState;
      if (u !== null) {
        e: {
          var c = qe;
          if (ft) {
            if (st) {
              t: {
                for (var r = st, s = Va; r.nodeType !== 8; ) {
                  if (!s) {
                    r = null;
                    break t;
                  }
                  if (r = gn(
                    r.nextSibling
                  ), r === null) {
                    r = null;
                    break t;
                  }
                }
                s = r.data, r = s === "F!" || s === "F" ? r : null;
              }
              if (r) {
                st = gn(
                  r.nextSibling
                ), c = r.data === "F!";
                break e;
              }
            }
            Ru(c);
          }
          c = !1;
        }
        c && (n = u[0]);
      }
    }
    return u = Yl(), u.memoizedState = u.baseState = n, c = {
      pending: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: Js,
      lastRenderedState: n
    }, u.queue = c, u = Ty.bind(
      null,
      qe,
      c
    ), c.dispatch = u, c = $f(!1), s = er.bind(
      null,
      qe,
      !1,
      c.queue
    ), c = Yl(), r = {
      state: n,
      dispatch: null,
      action: l,
      pending: null
    }, c.queue = r, u = Lp.bind(
      null,
      qe,
      r,
      s,
      u
    ), r.dispatch = u, c.memoizedState = l, [n, u, !1];
  }
  function Ln(l) {
    var n = Xt();
    return ks(n, pt, l);
  }
  function ks(l, n, u) {
    if (n = js(
      l,
      n,
      Js
    )[0], l = Jf(Gn)[0], typeof n == "object" && n !== null && typeof n.then == "function")
      try {
        var c = Kf(n);
      } catch (y) {
        throw y === hi ? Gf : y;
      }
    else c = n;
    n = Xt();
    var r = n.queue, s = r.dispatch;
    return u !== n.memoizedState && (qe.flags |= 2048, oa(
      9,
      Ff(),
      bg.bind(null, r, u),
      null
    )), [c, s, l];
  }
  function bg(l, n) {
    l.action = n;
  }
  function $s(l) {
    var n = Xt(), u = pt;
    if (u !== null)
      return ks(n, u, l);
    Xt(), n = n.memoizedState, u = Xt();
    var c = u.queue.dispatch;
    return u.memoizedState = l, [n, c, !1];
  }
  function oa(l, n, u, c) {
    return l = { tag: l, create: u, deps: c, inst: n, next: null }, n = qe.updateQueue, n === null && (n = Zf(), qe.updateQueue = n), u = n.lastEffect, u === null ? n.lastEffect = l.next = l : (c = u.next, u.next = l, l.next = c, n.lastEffect = l), l;
  }
  function Ff() {
    return { destroy: void 0, resource: void 0 };
  }
  function If() {
    return Xt().memoizedState;
  }
  function pi(l, n, u, c) {
    var r = Yl();
    c = c === void 0 ? null : c, qe.flags |= l, r.memoizedState = oa(
      1 | n,
      Ff(),
      u,
      c
    );
  }
  function Tt(l, n, u, c) {
    var r = Xt();
    c = c === void 0 ? null : c;
    var s = r.memoizedState.inst;
    pt !== null && c !== null && Ns(c, pt.memoizedState.deps) ? r.memoizedState = oa(n, s, u, c) : (qe.flags |= l, r.memoizedState = oa(
      1 | n,
      s,
      u,
      c
    ));
  }
  function Vp(l, n) {
    pi(8390656, 8, l, n);
  }
  function Xp(l, n) {
    Tt(2048, 8, l, n);
  }
  function my(l, n) {
    return Tt(4, 2, l, n);
  }
  function mn(l, n) {
    return Tt(4, 4, l, n);
  }
  function py(l, n) {
    if (typeof n == "function") {
      l = l();
      var u = n(l);
      return function() {
        typeof u == "function" ? u() : n(null);
      };
    }
    if (n != null)
      return l = l(), n.current = l, function() {
        n.current = null;
      };
  }
  function Ws(l, n, u) {
    u = u != null ? u.concat([l]) : null, Tt(4, 4, py.bind(null, n, l), u);
  }
  function rc() {
  }
  function sc(l, n) {
    var u = Xt();
    n = n === void 0 ? null : n;
    var c = u.memoizedState;
    return n !== null && Ns(n, c[1]) ? c[0] : (u.memoizedState = [l, n], l);
  }
  function vy(l, n) {
    var u = Xt();
    n = n === void 0 ? null : n;
    var c = u.memoizedState;
    if (n !== null && Ns(n, c[1]))
      return c[0];
    if (c = l(), yi) {
      wa(!0);
      try {
        l();
      } finally {
        wa(!1);
      }
    }
    return u.memoizedState = [c, n], c;
  }
  function Pf(l, n, u) {
    return u === void 0 || (Qa & 1073741824) !== 0 ? l.memoizedState = n : (l.memoizedState = u, l = Py(), qe.lanes |= l, Nu |= l, u);
  }
  function gy(l, n, u, c) {
    return zl(u, n) ? u : fc.current !== null ? (l = Pf(l, u, c), zl(l, n) || (fl = !0), l) : (Qa & 42) === 0 ? (fl = !0, l.memoizedState = u) : (l = Py(), qe.lanes |= l, Nu |= l, n);
  }
  function Qp(l, n, u, c, r) {
    var s = W.p;
    W.p = s !== 0 && 8 > s ? s : 8;
    var y = O.T, p = {};
    O.T = p, er(l, !1, n, u);
    try {
      var S = r(), C = O.S;
      if (C !== null && C(p, S), S !== null && typeof S == "object" && typeof S.then == "function") {
        var Q = jp(
          S,
          c
        );
        dc(
          l,
          n,
          Q,
          Da(l)
        );
      } else
        dc(
          l,
          n,
          c,
          Da(l)
        );
    } catch ($) {
      dc(
        l,
        n,
        { then: function() {
        }, status: "rejected", reason: $ },
        Da()
      );
    } finally {
      W.p = s, O.T = y;
    }
  }
  function Sg() {
  }
  function Fs(l, n, u, c) {
    if (l.tag !== 5) throw Error(D(476));
    var r = Zp(l).queue;
    Qp(
      l,
      r,
      n,
      P,
      u === null ? Sg : function() {
        return So(l), u(c);
      }
    );
  }
  function Zp(l) {
    var n = l.memoizedState;
    if (n !== null) return n;
    n = {
      memoizedState: P,
      baseState: P,
      baseQueue: null,
      queue: {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Gn,
        lastRenderedState: P
      },
      next: null
    };
    var u = {};
    return n.next = {
      memoizedState: u,
      baseState: u,
      baseQueue: null,
      queue: {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Gn,
        lastRenderedState: u
      },
      next: null
    }, l.memoizedState = n, l = l.alternate, l !== null && (l.memoizedState = n), n;
  }
  function So(l) {
    var n = Zp(l).next.queue;
    dc(l, n, {}, Da());
  }
  function Za() {
    return ml(pa);
  }
  function by() {
    return Xt().memoizedState;
  }
  function Kp() {
    return Xt().memoizedState;
  }
  function Jp(l) {
    for (var n = l.return; n !== null; ) {
      switch (n.tag) {
        case 24:
        case 3:
          var u = Da();
          l = ca(u);
          var c = jn(n, l, u);
          c !== null && (za(c, n, u), oc(c, n, u)), n = { cache: mo() }, l.payload = n;
          return;
      }
      n = n.return;
    }
  }
  function Sy(l, n, u) {
    var c = Da();
    u = {
      lane: c,
      revertLane: 0,
      action: u,
      hasEagerState: !1,
      eagerState: null,
      next: null
    }, hc(l) ? kp(n, u) : (u = no(l, n, u, c), u !== null && (za(u, l, c), Ey(u, n, c)));
  }
  function Ty(l, n, u) {
    var c = Da();
    dc(l, n, u, c);
  }
  function dc(l, n, u, c) {
    var r = {
      lane: c,
      revertLane: 0,
      action: u,
      hasEagerState: !1,
      eagerState: null,
      next: null
    };
    if (hc(l)) kp(n, r);
    else {
      var s = l.alternate;
      if (l.lanes === 0 && (s === null || s.lanes === 0) && (s = n.lastRenderedReducer, s !== null))
        try {
          var y = n.lastRenderedState, p = s(y, u);
          if (r.hasEagerState = !0, r.eagerState = p, zl(p, y))
            return oi(l, n, r, 0), Dt === null && rn(), !1;
        } catch {
        } finally {
        }
      if (u = no(l, n, r, c), u !== null)
        return za(u, l, c), Ey(u, n, c), !0;
    }
    return !1;
  }
  function er(l, n, u, c) {
    if (c = {
      lane: 2,
      revertLane: zc(),
      action: c,
      hasEagerState: !1,
      eagerState: null,
      next: null
    }, hc(l)) {
      if (n) throw Error(D(479));
    } else
      n = no(
        l,
        u,
        c,
        2
      ), n !== null && za(n, l, 2);
  }
  function hc(l) {
    var n = l.alternate;
    return l === qe || n !== null && n === qe;
  }
  function kp(l, n) {
    Aa = Qf = !0;
    var u = l.pending;
    u === null ? n.next = n : (n.next = u.next, u.next = n), l.pending = n;
  }
  function Ey(l, n, u) {
    if ((u & 4194048) !== 0) {
      var c = n.lanes;
      c &= l.pendingLanes, u |= c, n.lanes = u, we(l, u);
    }
  }
  var Is = {
    readContext: ml,
    use: tl,
    useCallback: Lt,
    useContext: Lt,
    useEffect: Lt,
    useImperativeHandle: Lt,
    useLayoutEffect: Lt,
    useInsertionEffect: Lt,
    useMemo: Lt,
    useReducer: Lt,
    useRef: Lt,
    useState: Lt,
    useDebugValue: Lt,
    useDeferredValue: Lt,
    useTransition: Lt,
    useSyncExternalStore: Lt,
    useId: Lt,
    useHostTransitionStatus: Lt,
    useFormState: Lt,
    useActionState: Lt,
    useOptimistic: Lt,
    useMemoCache: Lt,
    useCacheRefresh: Lt
  }, Ay = {
    readContext: ml,
    use: tl,
    useCallback: function(l, n) {
      return Yl().memoizedState = [
        l,
        n === void 0 ? null : n
      ], l;
    },
    useContext: ml,
    useEffect: Vp,
    useImperativeHandle: function(l, n, u) {
      u = u != null ? u.concat([l]) : null, pi(
        4194308,
        4,
        py.bind(null, n, l),
        u
      );
    },
    useLayoutEffect: function(l, n) {
      return pi(4194308, 4, l, n);
    },
    useInsertionEffect: function(l, n) {
      pi(4, 2, l, n);
    },
    useMemo: function(l, n) {
      var u = Yl();
      n = n === void 0 ? null : n;
      var c = l();
      if (yi) {
        wa(!0);
        try {
          l();
        } finally {
          wa(!1);
        }
      }
      return u.memoizedState = [c, n], c;
    },
    useReducer: function(l, n, u) {
      var c = Yl();
      if (u !== void 0) {
        var r = u(n);
        if (yi) {
          wa(!0);
          try {
            u(n);
          } finally {
            wa(!1);
          }
        }
      } else r = n;
      return c.memoizedState = c.baseState = r, l = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: l,
        lastRenderedState: r
      }, c.queue = l, l = l.dispatch = Sy.bind(
        null,
        qe,
        l
      ), [c.memoizedState, l];
    },
    useRef: function(l) {
      var n = Yl();
      return l = { current: l }, n.memoizedState = l;
    },
    useState: function(l) {
      l = $f(l);
      var n = l.queue, u = Ty.bind(null, qe, n);
      return n.dispatch = u, [l.memoizedState, u];
    },
    useDebugValue: rc,
    useDeferredValue: function(l, n) {
      var u = Yl();
      return Pf(u, l, n);
    },
    useTransition: function() {
      var l = $f(!1);
      return l = Qp.bind(
        null,
        qe,
        l.queue,
        !0,
        !1
      ), Yl().memoizedState = l, [!1, l];
    },
    useSyncExternalStore: function(l, n, u) {
      var c = qe, r = Yl();
      if (ft) {
        if (u === void 0)
          throw Error(D(407));
        u = u();
      } else {
        if (u = n(), Dt === null)
          throw Error(D(349));
        (et & 124) !== 0 || Ls(c, n, u);
      }
      r.memoizedState = u;
      var s = { value: u, getSnapshot: n };
      return r.queue = s, Vp(sy.bind(null, c, s, l), [
        l
      ]), c.flags |= 2048, oa(
        9,
        Ff(),
        ry.bind(
          null,
          c,
          s,
          u,
          n
        ),
        null
      ), u;
    },
    useId: function() {
      var l = Yl(), n = Dt.identifierPrefix;
      if (ft) {
        var u = Vt, c = dn;
        u = (c & ~(1 << 32 - Al(c) - 1)).toString(32) + u, n = "«" + n + "R" + u, u = yn++, 0 < u && (n += "H" + u.toString(32)), n += "»";
      } else
        u = oy++, n = "«" + n + "r" + u.toString(32) + "»";
      return l.memoizedState = n;
    },
    useHostTransitionStatus: Za,
    useFormState: yy,
    useActionState: yy,
    useOptimistic: function(l) {
      var n = Yl();
      n.memoizedState = n.baseState = l;
      var u = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: null,
        lastRenderedState: null
      };
      return n.queue = u, n = er.bind(
        null,
        qe,
        !0,
        u
      ), u.dispatch = n, [l, n];
    },
    useMemoCache: Ys,
    useCacheRefresh: function() {
      return Yl().memoizedState = Jp.bind(
        null,
        qe
      );
    }
  }, Ry = {
    readContext: ml,
    use: tl,
    useCallback: sc,
    useContext: ml,
    useEffect: Xp,
    useImperativeHandle: Ws,
    useInsertionEffect: my,
    useLayoutEffect: mn,
    useMemo: vy,
    useReducer: Jf,
    useRef: If,
    useState: function() {
      return Jf(Gn);
    },
    useDebugValue: rc,
    useDeferredValue: function(l, n) {
      var u = Xt();
      return gy(
        u,
        pt.memoizedState,
        l,
        n
      );
    },
    useTransition: function() {
      var l = Jf(Gn)[0], n = Xt().memoizedState;
      return [
        typeof l == "boolean" ? l : Kf(l),
        n
      ];
    },
    useSyncExternalStore: kf,
    useId: by,
    useHostTransitionStatus: Za,
    useFormState: Ln,
    useActionState: Ln,
    useOptimistic: function(l, n) {
      var u = Xt();
      return Xs(u, pt, l, n);
    },
    useMemoCache: Ys,
    useCacheRefresh: Kp
  }, Uu = {
    readContext: ml,
    use: tl,
    useCallback: sc,
    useContext: ml,
    useEffect: Xp,
    useImperativeHandle: Ws,
    useInsertionEffect: my,
    useLayoutEffect: mn,
    useMemo: vy,
    useReducer: Gs,
    useRef: If,
    useState: function() {
      return Gs(Gn);
    },
    useDebugValue: rc,
    useDeferredValue: function(l, n) {
      var u = Xt();
      return pt === null ? Pf(u, l, n) : gy(
        u,
        pt.memoizedState,
        l,
        n
      );
    },
    useTransition: function() {
      var l = Gs(Gn)[0], n = Xt().memoizedState;
      return [
        typeof l == "boolean" ? l : Kf(l),
        n
      ];
    },
    useSyncExternalStore: kf,
    useId: by,
    useHostTransitionStatus: Za,
    useFormState: $s,
    useActionState: $s,
    useOptimistic: function(l, n) {
      var u = Xt();
      return pt !== null ? Xs(u, pt, l, n) : (u.baseState = l, [l, u.queue.dispatch]);
    },
    useMemoCache: Ys,
    useCacheRefresh: Kp
  }, yc = null, To = 0;
  function Ps(l) {
    var n = To;
    return To += 1, yc === null && (yc = []), ay(yc, l, n);
  }
  function mc(l, n) {
    n = n.props.ref, l.ref = n !== void 0 ? n : null;
  }
  function jl(l, n) {
    throw n.$$typeof === K ? Error(D(525)) : (l = Object.prototype.toString.call(n), Error(
      D(
        31,
        l === "[object Object]" ? "object with keys {" + Object.keys(n).join(", ") + "}" : l
      )
    ));
  }
  function Oy(l) {
    var n = l._init;
    return n(l._payload);
  }
  function fa(l) {
    function n(M, R) {
      if (l) {
        var _ = M.deletions;
        _ === null ? (M.deletions = [R], M.flags |= 16) : _.push(R);
      }
    }
    function u(M, R) {
      if (!l) return null;
      for (; R !== null; )
        n(M, R), R = R.sibling;
      return null;
    }
    function c(M) {
      for (var R = /* @__PURE__ */ new Map(); M !== null; )
        M.key !== null ? R.set(M.key, M) : R.set(M.index, M), M = M.sibling;
      return R;
    }
    function r(M, R) {
      return M = sn(M, R), M.index = 0, M.sibling = null, M;
    }
    function s(M, R, _) {
      return M.index = _, l ? (_ = M.alternate, _ !== null ? (_ = _.index, _ < R ? (M.flags |= 67108866, R) : _) : (M.flags |= 67108866, R)) : (M.flags |= 1048576, R);
    }
    function y(M) {
      return l && M.alternate === null && (M.flags |= 67108866), M;
    }
    function p(M, R, _, k) {
      return R === null || R.tag !== 6 ? (R = co(_, M.mode, k), R.return = M, R) : (R = r(R, _), R.return = M, R);
    }
    function S(M, R, _, k) {
      var se = _.type;
      return se === ze ? Q(
        M,
        R,
        _.props.children,
        k,
        _.key
      ) : R !== null && (R.elementType === se || typeof se == "object" && se !== null && se.$$typeof === Ot && Oy(se) === R.type) ? (R = r(R, _.props), mc(R, _), R.return = M, R) : (R = ee(
        _.type,
        _.key,
        _.props,
        null,
        M.mode,
        k
      ), mc(R, _), R.return = M, R);
    }
    function C(M, R, _, k) {
      return R === null || R.tag !== 4 || R.stateNode.containerInfo !== _.containerInfo || R.stateNode.implementation !== _.implementation ? (R = jt(_, M.mode, k), R.return = M, R) : (R = r(R, _.children || []), R.return = M, R);
    }
    function Q(M, R, _, k, se) {
      return R === null || R.tag !== 7 ? (R = ja(
        _,
        M.mode,
        k,
        se
      ), R.return = M, R) : (R = r(R, _), R.return = M, R);
    }
    function $(M, R, _) {
      if (typeof R == "string" && R !== "" || typeof R == "number" || typeof R == "bigint")
        return R = co(
          "" + R,
          M.mode,
          _
        ), R.return = M, R;
      if (typeof R == "object" && R !== null) {
        switch (R.$$typeof) {
          case U:
            return _ = ee(
              R.type,
              R.key,
              R.props,
              null,
              M.mode,
              _
            ), mc(_, R), _.return = M, _;
          case le:
            return R = jt(
              R,
              M.mode,
              _
            ), R.return = M, R;
          case Ot:
            var k = R._init;
            return R = k(R._payload), $(M, R, _);
        }
        if (mt(R) || De(R))
          return R = ja(
            R,
            M.mode,
            _,
            null
          ), R.return = M, R;
        if (typeof R.then == "function")
          return $(M, Ps(R), _);
        if (R.$$typeof === rt)
          return $(
            M,
            qf(M, R),
            _
          );
        jl(M, R);
      }
      return null;
    }
    function N(M, R, _, k) {
      var se = R !== null ? R.key : null;
      if (typeof _ == "string" && _ !== "" || typeof _ == "number" || typeof _ == "bigint")
        return se !== null ? null : p(M, R, "" + _, k);
      if (typeof _ == "object" && _ !== null) {
        switch (_.$$typeof) {
          case U:
            return _.key === se ? S(M, R, _, k) : null;
          case le:
            return _.key === se ? C(M, R, _, k) : null;
          case Ot:
            return se = _._init, _ = se(_._payload), N(M, R, _, k);
        }
        if (mt(_) || De(_))
          return se !== null ? null : Q(M, R, _, k, null);
        if (typeof _.then == "function")
          return N(
            M,
            R,
            Ps(_),
            k
          );
        if (_.$$typeof === rt)
          return N(
            M,
            R,
            qf(M, _),
            k
          );
        jl(M, _);
      }
      return null;
    }
    function q(M, R, _, k, se) {
      if (typeof k == "string" && k !== "" || typeof k == "number" || typeof k == "bigint")
        return M = M.get(_) || null, p(R, M, "" + k, se);
      if (typeof k == "object" && k !== null) {
        switch (k.$$typeof) {
          case U:
            return M = M.get(
              k.key === null ? _ : k.key
            ) || null, S(R, M, k, se);
          case le:
            return M = M.get(
              k.key === null ? _ : k.key
            ) || null, C(R, M, k, se);
          case Ot:
            var Je = k._init;
            return k = Je(k._payload), q(
              M,
              R,
              _,
              k,
              se
            );
        }
        if (mt(k) || De(k))
          return M = M.get(_) || null, Q(R, M, k, se, null);
        if (typeof k.then == "function")
          return q(
            M,
            R,
            _,
            Ps(k),
            se
          );
        if (k.$$typeof === rt)
          return q(
            M,
            R,
            _,
            qf(R, k),
            se
          );
        jl(R, k);
      }
      return null;
    }
    function Te(M, R, _, k) {
      for (var se = null, Je = null, be = R, Oe = R = 0, bl = null; be !== null && Oe < _.length; Oe++) {
        be.index > Oe ? (bl = be, be = null) : bl = be.sibling;
        var it = N(
          M,
          be,
          _[Oe],
          k
        );
        if (it === null) {
          be === null && (be = bl);
          break;
        }
        l && be && it.alternate === null && n(M, be), R = s(it, R, Oe), Je === null ? se = it : Je.sibling = it, Je = it, be = bl;
      }
      if (Oe === _.length)
        return u(M, be), ft && nt(M, Oe), se;
      if (be === null) {
        for (; Oe < _.length; Oe++)
          be = $(M, _[Oe], k), be !== null && (R = s(
            be,
            R,
            Oe
          ), Je === null ? se = be : Je.sibling = be, Je = be);
        return ft && nt(M, Oe), se;
      }
      for (be = c(be); Oe < _.length; Oe++)
        bl = q(
          be,
          M,
          Oe,
          _[Oe],
          k
        ), bl !== null && (l && bl.alternate !== null && be.delete(
          bl.key === null ? Oe : bl.key
        ), R = s(
          bl,
          R,
          Oe
        ), Je === null ? se = bl : Je.sibling = bl, Je = bl);
      return l && be.forEach(function(Ni) {
        return n(M, Ni);
      }), ft && nt(M, Oe), se;
    }
    function Ee(M, R, _, k) {
      if (_ == null) throw Error(D(151));
      for (var se = null, Je = null, be = R, Oe = R = 0, bl = null, it = _.next(); be !== null && !it.done; Oe++, it = _.next()) {
        be.index > Oe ? (bl = be, be = null) : bl = be.sibling;
        var Ni = N(M, be, it.value, k);
        if (Ni === null) {
          be === null && (be = bl);
          break;
        }
        l && be && Ni.alternate === null && n(M, be), R = s(Ni, R, Oe), Je === null ? se = Ni : Je.sibling = Ni, Je = Ni, be = bl;
      }
      if (it.done)
        return u(M, be), ft && nt(M, Oe), se;
      if (be === null) {
        for (; !it.done; Oe++, it = _.next())
          it = $(M, it.value, k), it !== null && (R = s(it, R, Oe), Je === null ? se = it : Je.sibling = it, Je = it);
        return ft && nt(M, Oe), se;
      }
      for (be = c(be); !it.done; Oe++, it = _.next())
        it = q(be, M, Oe, it.value, k), it !== null && (l && it.alternate !== null && be.delete(it.key === null ? Oe : it.key), R = s(it, R, Oe), Je === null ? se = it : Je.sibling = it, Je = it);
      return l && be.forEach(function(Hg) {
        return n(M, Hg);
      }), ft && nt(M, Oe), se;
    }
    function ht(M, R, _, k) {
      if (typeof _ == "object" && _ !== null && _.type === ze && _.key === null && (_ = _.props.children), typeof _ == "object" && _ !== null) {
        switch (_.$$typeof) {
          case U:
            e: {
              for (var se = _.key; R !== null; ) {
                if (R.key === se) {
                  if (se = _.type, se === ze) {
                    if (R.tag === 7) {
                      u(
                        M,
                        R.sibling
                      ), k = r(
                        R,
                        _.props.children
                      ), k.return = M, M = k;
                      break e;
                    }
                  } else if (R.elementType === se || typeof se == "object" && se !== null && se.$$typeof === Ot && Oy(se) === R.type) {
                    u(
                      M,
                      R.sibling
                    ), k = r(R, _.props), mc(k, _), k.return = M, M = k;
                    break e;
                  }
                  u(M, R);
                  break;
                } else n(M, R);
                R = R.sibling;
              }
              _.type === ze ? (k = ja(
                _.props.children,
                M.mode,
                k,
                _.key
              ), k.return = M, M = k) : (k = ee(
                _.type,
                _.key,
                _.props,
                null,
                M.mode,
                k
              ), mc(k, _), k.return = M, M = k);
            }
            return y(M);
          case le:
            e: {
              for (se = _.key; R !== null; ) {
                if (R.key === se)
                  if (R.tag === 4 && R.stateNode.containerInfo === _.containerInfo && R.stateNode.implementation === _.implementation) {
                    u(
                      M,
                      R.sibling
                    ), k = r(R, _.children || []), k.return = M, M = k;
                    break e;
                  } else {
                    u(M, R);
                    break;
                  }
                else n(M, R);
                R = R.sibling;
              }
              k = jt(_, M.mode, k), k.return = M, M = k;
            }
            return y(M);
          case Ot:
            return se = _._init, _ = se(_._payload), ht(
              M,
              R,
              _,
              k
            );
        }
        if (mt(_))
          return Te(
            M,
            R,
            _,
            k
          );
        if (De(_)) {
          if (se = De(_), typeof se != "function") throw Error(D(150));
          return _ = se.call(_), Ee(
            M,
            R,
            _,
            k
          );
        }
        if (typeof _.then == "function")
          return ht(
            M,
            R,
            Ps(_),
            k
          );
        if (_.$$typeof === rt)
          return ht(
            M,
            R,
            qf(M, _),
            k
          );
        jl(M, _);
      }
      return typeof _ == "string" && _ !== "" || typeof _ == "number" || typeof _ == "bigint" ? (_ = "" + _, R !== null && R.tag === 6 ? (u(M, R.sibling), k = r(R, _), k.return = M, M = k) : (u(M, R), k = co(_, M.mode, k), k.return = M, M = k), y(M)) : u(M, R);
    }
    return function(M, R, _, k) {
      try {
        To = 0;
        var se = ht(
          M,
          R,
          _,
          k
        );
        return yc = null, se;
      } catch (be) {
        if (be === hi || be === Gf) throw be;
        var Je = ua(29, be, null, M.mode);
        return Je.lanes = k, Je.return = M, Je;
      } finally {
      }
    };
  }
  var pc = fa(!0), Vn = fa(!1), Oa = w(null), Gl = null;
  function _u(l) {
    var n = l.alternate;
    I(Et, Et.current & 1), I(Oa, l), Gl === null && (n === null || fc.current !== null || n.memoizedState !== null) && (Gl = l);
  }
  function Xn(l) {
    if (l.tag === 22) {
      if (I(Et, Et.current), I(Oa, l), Gl === null) {
        var n = l.alternate;
        n !== null && n.memoizedState !== null && (Gl = l);
      }
    } else Qn();
  }
  function Qn() {
    I(Et, Et.current), I(Oa, Oa.current);
  }
  function pn(l) {
    Z(Oa), Gl === l && (Gl = null), Z(Et);
  }
  var Et = w(0);
  function tr(l) {
    for (var n = l; n !== null; ) {
      if (n.tag === 13) {
        var u = n.memoizedState;
        if (u !== null && (u = u.dehydrated, u === null || u.data === "$?" || Rr(u)))
          return n;
      } else if (n.tag === 19 && n.memoizedProps.revealOrder !== void 0) {
        if ((n.flags & 128) !== 0) return n;
      } else if (n.child !== null) {
        n.child.return = n, n = n.child;
        continue;
      }
      if (n === l) break;
      for (; n.sibling === null; ) {
        if (n.return === null || n.return === l) return null;
        n = n.return;
      }
      n.sibling.return = n.return, n = n.sibling;
    }
    return null;
  }
  function vi(l, n, u, c) {
    n = l.memoizedState, u = u(c, n), u = u == null ? n : ue({}, n, u), l.memoizedState = u, l.lanes === 0 && (l.updateQueue.baseState = u);
  }
  var ed = {
    enqueueSetState: function(l, n, u) {
      l = l._reactInternals;
      var c = Da(), r = ca(c);
      r.payload = n, u != null && (r.callback = u), n = jn(l, r, c), n !== null && (za(n, l, c), oc(n, l, c));
    },
    enqueueReplaceState: function(l, n, u) {
      l = l._reactInternals;
      var c = Da(), r = ca(c);
      r.tag = 1, r.payload = n, u != null && (r.callback = u), n = jn(l, r, c), n !== null && (za(n, l, c), oc(n, l, c));
    },
    enqueueForceUpdate: function(l, n) {
      l = l._reactInternals;
      var u = Da(), c = ca(u);
      c.tag = 2, n != null && (c.callback = n), n = jn(l, c, u), n !== null && (za(n, l, u), oc(n, l, u));
    }
  };
  function Eo(l, n, u, c, r, s, y) {
    return l = l.stateNode, typeof l.shouldComponentUpdate == "function" ? l.shouldComponentUpdate(c, s, y) : n.prototype && n.prototype.isPureReactComponent ? !ni(u, c) || !ni(r, s) : !0;
  }
  function vc(l, n, u, c) {
    l = n.state, typeof n.componentWillReceiveProps == "function" && n.componentWillReceiveProps(u, c), typeof n.UNSAFE_componentWillReceiveProps == "function" && n.UNSAFE_componentWillReceiveProps(u, c), n.state !== l && ed.enqueueReplaceState(n, n.state, null);
  }
  function gi(l, n) {
    var u = n;
    if ("ref" in n) {
      u = {};
      for (var c in n)
        c !== "ref" && (u[c] = n[c]);
    }
    if (l = l.defaultProps) {
      u === n && (u = ue({}, u));
      for (var r in l)
        u[r] === void 0 && (u[r] = l[r]);
    }
    return u;
  }
  var lr = typeof reportError == "function" ? reportError : function(l) {
    if (typeof window == "object" && typeof window.ErrorEvent == "function") {
      var n = new window.ErrorEvent("error", {
        bubbles: !0,
        cancelable: !0,
        message: typeof l == "object" && l !== null && typeof l.message == "string" ? String(l.message) : String(l),
        error: l
      });
      if (!window.dispatchEvent(n)) return;
    } else if (typeof process == "object" && typeof process.emit == "function") {
      process.emit("uncaughtException", l);
      return;
    }
    console.error(l);
  };
  function Ao(l) {
    lr(l);
  }
  function Dy(l) {
    console.error(l);
  }
  function ar(l) {
    lr(l);
  }
  function nr(l, n) {
    try {
      var u = l.onUncaughtError;
      u(n.value, { componentStack: n.stack });
    } catch (c) {
      setTimeout(function() {
        throw c;
      });
    }
  }
  function zy(l, n, u) {
    try {
      var c = l.onCaughtError;
      c(u.value, {
        componentStack: u.stack,
        errorBoundary: n.tag === 1 ? n.stateNode : null
      });
    } catch (r) {
      setTimeout(function() {
        throw r;
      });
    }
  }
  function My(l, n, u) {
    return u = ca(u), u.tag = 3, u.payload = { element: null }, u.callback = function() {
      nr(l, n);
    }, u;
  }
  function Uy(l) {
    return l = ca(l), l.tag = 3, l;
  }
  function ra(l, n, u, c) {
    var r = u.type.getDerivedStateFromError;
    if (typeof r == "function") {
      var s = c.value;
      l.payload = function() {
        return r(s);
      }, l.callback = function() {
        zy(n, u, c);
      };
    }
    var y = u.stateNode;
    y !== null && typeof y.componentDidCatch == "function" && (l.callback = function() {
      zy(n, u, c), typeof r != "function" && (Ei === null ? Ei = /* @__PURE__ */ new Set([this]) : Ei.add(this));
      var p = c.stack;
      this.componentDidCatch(c.value, {
        componentStack: p !== null ? p : ""
      });
    });
  }
  function $p(l, n, u, c, r) {
    if (u.flags |= 32768, c !== null && typeof c == "object" && typeof c.then == "function") {
      if (n = u.alternate, n !== null && ho(
        n,
        u,
        r,
        !0
      ), u = Oa.current, u !== null) {
        switch (u.tag) {
          case 13:
            return Gl === null ? Dc() : u.alternate === null && Jt === 0 && (Jt = 3), u.flags &= -257, u.flags |= 65536, u.lanes = r, c === Us ? u.flags |= 16384 : (n = u.updateQueue, n === null ? u.updateQueue = /* @__PURE__ */ new Set([c]) : n.add(c), Dd(l, c, r)), !1;
          case 22:
            return u.flags |= 65536, c === Us ? u.flags |= 16384 : (n = u.updateQueue, n === null ? (n = {
              transitions: null,
              markerInstances: null,
              retryQueue: /* @__PURE__ */ new Set([c])
            }, u.updateQueue = n) : (u = n.retryQueue, u === null ? n.retryQueue = /* @__PURE__ */ new Set([c]) : u.add(c)), Dd(l, c, r)), !1;
        }
        throw Error(D(435, u.tag));
      }
      return Dd(l, c, r), Dc(), !1;
    }
    if (ft)
      return n = Oa.current, n !== null ? ((n.flags & 65536) === 0 && (n.flags |= 256), n.flags |= 65536, n.lanes = r, c !== uc && (l = Error(D(422), { cause: c }), so(Ea(l, u)))) : (c !== uc && (n = Error(D(423), {
        cause: c
      }), so(
        Ea(n, u)
      )), l = l.current.alternate, l.flags |= 65536, r &= -r, l.lanes |= r, c = Ea(c, u), r = My(
        l.stateNode,
        c,
        r
      ), iy(l, r), Jt !== 4 && (Jt = 2)), !1;
    var s = Error(D(520), { cause: c });
    if (s = Ea(s, u), _o === null ? _o = [s] : _o.push(s), Jt !== 4 && (Jt = 2), n === null) return !0;
    c = Ea(c, u), u = n;
    do {
      switch (u.tag) {
        case 3:
          return u.flags |= 65536, l = r & -r, u.lanes |= l, l = My(u.stateNode, c, l), iy(u, l), !1;
        case 1:
          if (n = u.type, s = u.stateNode, (u.flags & 128) === 0 && (typeof n.getDerivedStateFromError == "function" || s !== null && typeof s.componentDidCatch == "function" && (Ei === null || !Ei.has(s))))
            return u.flags |= 65536, r &= -r, u.lanes |= r, r = Uy(r), ra(
              r,
              l,
              u,
              c
            ), iy(u, r), !1;
      }
      u = u.return;
    } while (u !== null);
    return !1;
  }
  var Qt = Error(D(461)), fl = !1;
  function vl(l, n, u, c) {
    n.child = l === null ? Vn(n, null, u, c) : pc(
      n,
      l.child,
      u,
      c
    );
  }
  function Wp(l, n, u, c, r) {
    u = u.render;
    var s = n.ref;
    if ("ref" in c) {
      var y = {};
      for (var p in c)
        p !== "ref" && (y[p] = c[p]);
    } else y = c;
    return si(n), c = ws(
      l,
      n,
      u,
      y,
      s,
      r
    ), p = Bs(), l !== null && !fl ? (bo(l, n, r), Zn(l, n, r)) : (ft && p && nc(n), n.flags |= 1, vl(l, n, c, r), n.child);
  }
  function Cu(l, n, u, c, r) {
    if (l === null) {
      var s = u.type;
      return typeof s == "function" && !Hf(s) && s.defaultProps === void 0 && u.compare === null ? (n.tag = 15, n.type = s, gc(
        l,
        n,
        s,
        c,
        r
      )) : (l = ee(
        u.type,
        null,
        c,
        n,
        n.mode,
        r
      ), l.ref = n.ref, l.return = n, n.child = l);
    }
    if (s = l.child, !rd(l, r)) {
      var y = s.memoizedProps;
      if (u = u.compare, u = u !== null ? u : ni, u(y, c) && l.ref === n.ref)
        return Zn(l, n, r);
    }
    return n.flags |= 1, l = sn(s, c), l.ref = n.ref, l.return = n, n.child = l;
  }
  function gc(l, n, u, c, r) {
    if (l !== null) {
      var s = l.memoizedProps;
      if (ni(s, c) && l.ref === n.ref)
        if (fl = !1, n.pendingProps = c = s, rd(l, r))
          (l.flags & 131072) !== 0 && (fl = !0);
        else
          return n.lanes = l.lanes, Zn(l, n, r);
    }
    return ld(
      l,
      n,
      u,
      c,
      r
    );
  }
  function td(l, n, u) {
    var c = n.pendingProps, r = c.children, s = l !== null ? l.memoizedState : null;
    if (c.mode === "hidden") {
      if ((n.flags & 128) !== 0) {
        if (c = s !== null ? s.baseLanes | u : u, l !== null) {
          for (r = n.child = l.child, s = 0; r !== null; )
            s = s | r.lanes | r.childLanes, r = r.sibling;
          n.childLanes = s & ~c;
        } else n.childLanes = 0, n.child = null;
        return bc(
          l,
          n,
          c,
          u
        );
      }
      if ((u & 536870912) !== 0)
        n.memoizedState = { baseLanes: 0, cachePool: null }, l !== null && ic(
          n,
          s !== null ? s.cachePool : null
        ), s !== null ? pl(n, s) : vo(), Xn(n);
      else
        return n.lanes = n.childLanes = 536870912, bc(
          l,
          n,
          s !== null ? s.baseLanes | u : u,
          u
        );
    } else
      s !== null ? (ic(n, s.cachePool), pl(n, s), Qn(), n.memoizedState = null) : (l !== null && ic(n, null), vo(), Qn());
    return vl(l, n, r, u), n.child;
  }
  function bc(l, n, u, c) {
    var r = jf();
    return r = r === null ? null : { parent: cl._currentValue, pool: r }, n.memoizedState = {
      baseLanes: u,
      cachePool: r
    }, l !== null && ic(n, null), vo(), Xn(n), l !== null && ho(l, n, c, !0), null;
  }
  function ur(l, n) {
    var u = n.ref;
    if (u === null)
      l !== null && l.ref !== null && (n.flags |= 4194816);
    else {
      if (typeof u != "function" && typeof u != "object")
        throw Error(D(284));
      (l === null || l.ref !== u) && (n.flags |= 4194816);
    }
  }
  function ld(l, n, u, c, r) {
    return si(n), u = ws(
      l,
      n,
      u,
      c,
      void 0,
      r
    ), c = Bs(), l !== null && !fl ? (bo(l, n, r), Zn(l, n, r)) : (ft && c && nc(n), n.flags |= 1, vl(l, n, u, r), n.child);
  }
  function _y(l, n, u, c, r, s) {
    return si(n), n.updateQueue = null, u = fy(
      n,
      c,
      u,
      r
    ), mi(l), c = Bs(), l !== null && !fl ? (bo(l, n, s), Zn(l, n, s)) : (ft && c && nc(n), n.flags |= 1, vl(l, n, u, s), n.child);
  }
  function ad(l, n, u, c, r) {
    if (si(n), n.stateNode === null) {
      var s = io, y = u.contextType;
      typeof y == "object" && y !== null && (s = ml(y)), s = new u(c, s), n.memoizedState = s.state !== null && s.state !== void 0 ? s.state : null, s.updater = ed, n.stateNode = s, s._reactInternals = n, s = n.stateNode, s.props = c, s.state = n.memoizedState, s.refs = {}, Cs(n), y = u.contextType, s.context = typeof y == "object" && y !== null ? ml(y) : io, s.state = n.memoizedState, y = u.getDerivedStateFromProps, typeof y == "function" && (vi(
        n,
        u,
        y,
        c
      ), s.state = n.memoizedState), typeof u.getDerivedStateFromProps == "function" || typeof s.getSnapshotBeforeUpdate == "function" || typeof s.UNSAFE_componentWillMount != "function" && typeof s.componentWillMount != "function" || (y = s.state, typeof s.componentWillMount == "function" && s.componentWillMount(), typeof s.UNSAFE_componentWillMount == "function" && s.UNSAFE_componentWillMount(), y !== s.state && ed.enqueueReplaceState(s, s.state, null), zu(n, c, s, r), po(), s.state = n.memoizedState), typeof s.componentDidMount == "function" && (n.flags |= 4194308), c = !0;
    } else if (l === null) {
      s = n.stateNode;
      var p = n.memoizedProps, S = gi(u, p);
      s.props = S;
      var C = s.context, Q = u.contextType;
      y = io, typeof Q == "object" && Q !== null && (y = ml(Q));
      var $ = u.getDerivedStateFromProps;
      Q = typeof $ == "function" || typeof s.getSnapshotBeforeUpdate == "function", p = n.pendingProps !== p, Q || typeof s.UNSAFE_componentWillReceiveProps != "function" && typeof s.componentWillReceiveProps != "function" || (p || C !== y) && vc(
        n,
        s,
        c,
        y
      ), Yn = !1;
      var N = n.memoizedState;
      s.state = N, zu(n, c, s, r), po(), C = n.memoizedState, p || N !== C || Yn ? (typeof $ == "function" && (vi(
        n,
        u,
        $,
        c
      ), C = n.memoizedState), (S = Yn || Eo(
        n,
        u,
        S,
        c,
        N,
        C,
        y
      )) ? (Q || typeof s.UNSAFE_componentWillMount != "function" && typeof s.componentWillMount != "function" || (typeof s.componentWillMount == "function" && s.componentWillMount(), typeof s.UNSAFE_componentWillMount == "function" && s.UNSAFE_componentWillMount()), typeof s.componentDidMount == "function" && (n.flags |= 4194308)) : (typeof s.componentDidMount == "function" && (n.flags |= 4194308), n.memoizedProps = c, n.memoizedState = C), s.props = c, s.state = C, s.context = y, c = S) : (typeof s.componentDidMount == "function" && (n.flags |= 4194308), c = !1);
    } else {
      s = n.stateNode, Hs(l, n), y = n.memoizedProps, Q = gi(u, y), s.props = Q, $ = n.pendingProps, N = s.context, C = u.contextType, S = io, typeof C == "object" && C !== null && (S = ml(C)), p = u.getDerivedStateFromProps, (C = typeof p == "function" || typeof s.getSnapshotBeforeUpdate == "function") || typeof s.UNSAFE_componentWillReceiveProps != "function" && typeof s.componentWillReceiveProps != "function" || (y !== $ || N !== S) && vc(
        n,
        s,
        c,
        S
      ), Yn = !1, N = n.memoizedState, s.state = N, zu(n, c, s, r), po();
      var q = n.memoizedState;
      y !== $ || N !== q || Yn || l !== null && l.dependencies !== null && Bf(l.dependencies) ? (typeof p == "function" && (vi(
        n,
        u,
        p,
        c
      ), q = n.memoizedState), (Q = Yn || Eo(
        n,
        u,
        Q,
        c,
        N,
        q,
        S
      ) || l !== null && l.dependencies !== null && Bf(l.dependencies)) ? (C || typeof s.UNSAFE_componentWillUpdate != "function" && typeof s.componentWillUpdate != "function" || (typeof s.componentWillUpdate == "function" && s.componentWillUpdate(c, q, S), typeof s.UNSAFE_componentWillUpdate == "function" && s.UNSAFE_componentWillUpdate(
        c,
        q,
        S
      )), typeof s.componentDidUpdate == "function" && (n.flags |= 4), typeof s.getSnapshotBeforeUpdate == "function" && (n.flags |= 1024)) : (typeof s.componentDidUpdate != "function" || y === l.memoizedProps && N === l.memoizedState || (n.flags |= 4), typeof s.getSnapshotBeforeUpdate != "function" || y === l.memoizedProps && N === l.memoizedState || (n.flags |= 1024), n.memoizedProps = c, n.memoizedState = q), s.props = c, s.state = q, s.context = S, c = Q) : (typeof s.componentDidUpdate != "function" || y === l.memoizedProps && N === l.memoizedState || (n.flags |= 4), typeof s.getSnapshotBeforeUpdate != "function" || y === l.memoizedProps && N === l.memoizedState || (n.flags |= 1024), c = !1);
    }
    return s = c, ur(l, n), c = (n.flags & 128) !== 0, s || c ? (s = n.stateNode, u = c && typeof u.getDerivedStateFromError != "function" ? null : s.render(), n.flags |= 1, l !== null && c ? (n.child = pc(
      n,
      l.child,
      null,
      r
    ), n.child = pc(
      n,
      null,
      u,
      r
    )) : vl(l, n, u, r), n.memoizedState = s.state, l = n.child) : l = Zn(
      l,
      n,
      r
    ), l;
  }
  function nd(l, n, u, c) {
    return ro(), n.flags |= 256, vl(l, n, u, c), n.child;
  }
  var ud = {
    dehydrated: null,
    treeContext: null,
    retryLane: 0,
    hydrationErrors: null
  };
  function Cy(l) {
    return { baseLanes: l, cachePool: zs() };
  }
  function Hy(l, n, u) {
    return l = l !== null ? l.childLanes & ~u : 0, n && (l |= ka), l;
  }
  function xy(l, n, u) {
    var c = n.pendingProps, r = !1, s = (n.flags & 128) !== 0, y;
    if ((y = s) || (y = l !== null && l.memoizedState === null ? !1 : (Et.current & 2) !== 0), y && (r = !0, n.flags &= -129), y = (n.flags & 32) !== 0, n.flags &= -33, l === null) {
      if (ft) {
        if (r ? _u(n) : Qn(), ft) {
          var p = st, S;
          if (S = p) {
            e: {
              for (S = p, p = Va; S.nodeType !== 8; ) {
                if (!p) {
                  p = null;
                  break e;
                }
                if (S = gn(
                  S.nextSibling
                ), S === null) {
                  p = null;
                  break e;
                }
              }
              p = S;
            }
            p !== null ? (n.memoizedState = {
              dehydrated: p,
              treeContext: Au !== null ? { id: dn, overflow: Vt } : null,
              retryLane: 536870912,
              hydrationErrors: null
            }, S = ua(
              18,
              null,
              null,
              0
            ), S.stateNode = p, S.return = n, n.child = S, Ft = n, st = null, S = !0) : S = !1;
          }
          S || Ru(n);
        }
        if (p = n.memoizedState, p !== null && (p = p.dehydrated, p !== null))
          return Rr(p) ? n.lanes = 32 : n.lanes = 536870912, null;
        pn(n);
      }
      return p = c.children, c = c.fallback, r ? (Qn(), r = n.mode, p = cd(
        { mode: "hidden", children: p },
        r
      ), c = ja(
        c,
        r,
        u,
        null
      ), p.return = n, c.return = n, p.sibling = c, n.child = p, r = n.child, r.memoizedState = Cy(u), r.childLanes = Hy(
        l,
        y,
        u
      ), n.memoizedState = ud, c) : (_u(n), id(n, p));
    }
    if (S = l.memoizedState, S !== null && (p = S.dehydrated, p !== null)) {
      if (s)
        n.flags & 256 ? (_u(n), n.flags &= -257, n = bi(
          l,
          n,
          u
        )) : n.memoizedState !== null ? (Qn(), n.child = l.child, n.flags |= 128, n = null) : (Qn(), r = c.fallback, p = n.mode, c = cd(
          { mode: "visible", children: c.children },
          p
        ), r = ja(
          r,
          p,
          u,
          null
        ), r.flags |= 2, c.return = n, r.return = n, c.sibling = r, n.child = c, pc(
          n,
          l.child,
          null,
          u
        ), c = n.child, c.memoizedState = Cy(u), c.childLanes = Hy(
          l,
          y,
          u
        ), n.memoizedState = ud, n = r);
      else if (_u(n), Rr(p)) {
        if (y = p.nextSibling && p.nextSibling.dataset, y) var C = y.dgst;
        y = C, c = Error(D(419)), c.stack = "", c.digest = y, so({ value: c, source: null, stack: null }), n = bi(
          l,
          n,
          u
        );
      } else if (fl || ho(l, n, u, !1), y = (u & l.childLanes) !== 0, fl || y) {
        if (y = Dt, y !== null && (c = u & -u, c = (c & 42) !== 0 ? 1 : el(c), c = (c & (y.suspendedLanes | u)) !== 0 ? 0 : c, c !== 0 && c !== S.retryLane))
          throw S.retryLane = c, xn(l, c), za(y, l, c), Qt;
        p.data === "$?" || Dc(), n = bi(
          l,
          n,
          u
        );
      } else
        p.data === "$?" ? (n.flags |= 192, n.child = l.child, n = null) : (l = S.treeContext, st = gn(
          p.nextSibling
        ), Ft = n, ft = !0, La = null, Va = !1, l !== null && (Ga[ia++] = dn, Ga[ia++] = Vt, Ga[ia++] = Au, dn = l.id, Vt = l.overflow, Au = n), n = id(
          n,
          c.children
        ), n.flags |= 4096);
      return n;
    }
    return r ? (Qn(), r = c.fallback, p = n.mode, S = l.child, C = S.sibling, c = sn(S, {
      mode: "hidden",
      children: c.children
    }), c.subtreeFlags = S.subtreeFlags & 65011712, C !== null ? r = sn(C, r) : (r = ja(
      r,
      p,
      u,
      null
    ), r.flags |= 2), r.return = n, c.return = n, c.sibling = r, n.child = c, c = r, r = n.child, p = l.child.memoizedState, p === null ? p = Cy(u) : (S = p.cachePool, S !== null ? (C = cl._currentValue, S = S.parent !== C ? { parent: C, pool: C } : S) : S = zs(), p = {
      baseLanes: p.baseLanes | u,
      cachePool: S
    }), r.memoizedState = p, r.childLanes = Hy(
      l,
      y,
      u
    ), n.memoizedState = ud, c) : (_u(n), u = l.child, l = u.sibling, u = sn(u, {
      mode: "visible",
      children: c.children
    }), u.return = n, u.sibling = null, l !== null && (y = n.deletions, y === null ? (n.deletions = [l], n.flags |= 16) : y.push(l)), n.child = u, n.memoizedState = null, u);
  }
  function id(l, n) {
    return n = cd(
      { mode: "visible", children: n },
      l.mode
    ), n.return = l, l.child = n;
  }
  function cd(l, n) {
    return l = ua(22, l, null, n), l.lanes = 0, l.stateNode = {
      _visibility: 1,
      _pendingMarkers: null,
      _retryCache: null,
      _transitions: null
    }, l;
  }
  function bi(l, n, u) {
    return pc(n, l.child, null, u), l = id(
      n,
      n.pendingProps.children
    ), l.flags |= 2, n.memoizedState = null, l;
  }
  function ir(l, n, u) {
    l.lanes |= n;
    var c = l.alternate;
    c !== null && (c.lanes |= n), Es(l.return, n, u);
  }
  function od(l, n, u, c, r) {
    var s = l.memoizedState;
    s === null ? l.memoizedState = {
      isBackwards: n,
      rendering: null,
      renderingStartTime: 0,
      last: c,
      tail: u,
      tailMode: r
    } : (s.isBackwards = n, s.rendering = null, s.renderingStartTime = 0, s.last = c, s.tail = u, s.tailMode = r);
  }
  function fd(l, n, u) {
    var c = n.pendingProps, r = c.revealOrder, s = c.tail;
    if (vl(l, n, c.children, u), c = Et.current, (c & 2) !== 0)
      c = c & 1 | 2, n.flags |= 128;
    else {
      if (l !== null && (l.flags & 128) !== 0)
        e: for (l = n.child; l !== null; ) {
          if (l.tag === 13)
            l.memoizedState !== null && ir(l, u, n);
          else if (l.tag === 19)
            ir(l, u, n);
          else if (l.child !== null) {
            l.child.return = l, l = l.child;
            continue;
          }
          if (l === n) break e;
          for (; l.sibling === null; ) {
            if (l.return === null || l.return === n)
              break e;
            l = l.return;
          }
          l.sibling.return = l.return, l = l.sibling;
        }
      c &= 1;
    }
    switch (I(Et, c), r) {
      case "forwards":
        for (u = n.child, r = null; u !== null; )
          l = u.alternate, l !== null && tr(l) === null && (r = u), u = u.sibling;
        u = r, u === null ? (r = n.child, n.child = null) : (r = u.sibling, u.sibling = null), od(
          n,
          !1,
          r,
          u,
          s
        );
        break;
      case "backwards":
        for (u = null, r = n.child, n.child = null; r !== null; ) {
          if (l = r.alternate, l !== null && tr(l) === null) {
            n.child = r;
            break;
          }
          l = r.sibling, r.sibling = u, u = r, r = l;
        }
        od(
          n,
          !0,
          u,
          null,
          s
        );
        break;
      case "together":
        od(n, !1, null, null, void 0);
        break;
      default:
        n.memoizedState = null;
    }
    return n.child;
  }
  function Zn(l, n, u) {
    if (l !== null && (n.dependencies = l.dependencies), Nu |= n.lanes, (u & n.childLanes) === 0)
      if (l !== null) {
        if (ho(
          l,
          n,
          u,
          !1
        ), (u & n.childLanes) === 0)
          return null;
      } else return null;
    if (l !== null && n.child !== l.child)
      throw Error(D(153));
    if (n.child !== null) {
      for (l = n.child, u = sn(l, l.pendingProps), n.child = u, u.return = n; l.sibling !== null; )
        l = l.sibling, u = u.sibling = sn(l, l.pendingProps), u.return = n;
      u.sibling = null;
    }
    return n.child;
  }
  function rd(l, n) {
    return (l.lanes & n) !== 0 ? !0 : (l = l.dependencies, !!(l !== null && Bf(l)));
  }
  function Fp(l, n, u) {
    switch (n.tag) {
      case 3:
        _e(n, n.stateNode.containerInfo), Du(n, cl, l.memoizedState.cache), ro();
        break;
      case 27:
      case 5:
        ta(n);
        break;
      case 4:
        _e(n, n.stateNode.containerInfo);
        break;
      case 10:
        Du(
          n,
          n.type,
          n.memoizedProps.value
        );
        break;
      case 13:
        var c = n.memoizedState;
        if (c !== null)
          return c.dehydrated !== null ? (_u(n), n.flags |= 128, null) : (u & n.child.childLanes) !== 0 ? xy(l, n, u) : (_u(n), l = Zn(
            l,
            n,
            u
          ), l !== null ? l.sibling : null);
        _u(n);
        break;
      case 19:
        var r = (l.flags & 128) !== 0;
        if (c = (u & n.childLanes) !== 0, c || (ho(
          l,
          n,
          u,
          !1
        ), c = (u & n.childLanes) !== 0), r) {
          if (c)
            return fd(
              l,
              n,
              u
            );
          n.flags |= 128;
        }
        if (r = n.memoizedState, r !== null && (r.rendering = null, r.tail = null, r.lastEffect = null), I(Et, Et.current), c) break;
        return null;
      case 22:
      case 23:
        return n.lanes = 0, td(l, n, u);
      case 24:
        Du(n, cl, l.memoizedState.cache);
    }
    return Zn(l, n, u);
  }
  function Ip(l, n, u) {
    if (l !== null)
      if (l.memoizedProps !== n.pendingProps)
        fl = !0;
      else {
        if (!rd(l, u) && (n.flags & 128) === 0)
          return fl = !1, Fp(
            l,
            n,
            u
          );
        fl = (l.flags & 131072) !== 0;
      }
    else
      fl = !1, ft && (n.flags & 1048576) !== 0 && Ts(n, oo, n.index);
    switch (n.lanes = 0, n.tag) {
      case 16:
        e: {
          l = n.pendingProps;
          var c = n.elementType, r = c._init;
          if (c = r(c._payload), n.type = c, typeof c == "function")
            Hf(c) ? (l = gi(c, l), n.tag = 1, n = ad(
              null,
              n,
              c,
              l,
              u
            )) : (n.tag = 0, n = ld(
              null,
              n,
              c,
              l,
              u
            ));
          else {
            if (c != null) {
              if (r = c.$$typeof, r === Wt) {
                n.tag = 11, n = Wp(
                  null,
                  n,
                  c,
                  l,
                  u
                );
                break e;
              } else if (r === We) {
                n.tag = 14, n = Cu(
                  null,
                  n,
                  c,
                  l,
                  u
                );
                break e;
              }
            }
            throw n = Yt(c) || c, Error(D(306, n, ""));
          }
        }
        return n;
      case 0:
        return ld(
          l,
          n,
          n.type,
          n.pendingProps,
          u
        );
      case 1:
        return c = n.type, r = gi(
          c,
          n.pendingProps
        ), ad(
          l,
          n,
          c,
          r,
          u
        );
      case 3:
        e: {
          if (_e(
            n,
            n.stateNode.containerInfo
          ), l === null) throw Error(D(387));
          c = n.pendingProps;
          var s = n.memoizedState;
          r = s.element, Hs(l, n), zu(n, c, null, u);
          var y = n.memoizedState;
          if (c = y.cache, Du(n, cl, c), c !== s.cache && ty(
            n,
            [cl],
            u,
            !0
          ), po(), c = y.element, s.isDehydrated)
            if (s = {
              element: c,
              isDehydrated: !1,
              cache: y.cache
            }, n.updateQueue.baseState = s, n.memoizedState = s, n.flags & 256) {
              n = nd(
                l,
                n,
                c,
                u
              );
              break e;
            } else if (c !== r) {
              r = Ea(
                Error(D(424)),
                n
              ), so(r), n = nd(
                l,
                n,
                c,
                u
              );
              break e;
            } else {
              switch (l = n.stateNode.containerInfo, l.nodeType) {
                case 9:
                  l = l.body;
                  break;
                default:
                  l = l.nodeName === "HTML" ? l.ownerDocument.body : l;
              }
              for (st = gn(l.firstChild), Ft = n, ft = !0, La = null, Va = !0, u = Vn(
                n,
                null,
                c,
                u
              ), n.child = u; u; )
                u.flags = u.flags & -3 | 4096, u = u.sibling;
            }
          else {
            if (ro(), c === r) {
              n = Zn(
                l,
                n,
                u
              );
              break e;
            }
            vl(
              l,
              n,
              c,
              u
            );
          }
          n = n.child;
        }
        return n;
      case 26:
        return ur(l, n), l === null ? (u = yv(
          n.type,
          null,
          n.pendingProps,
          null
        )) ? n.memoizedState = u : ft || (u = n.type, l = n.pendingProps, c = Wa(
          oe.current
        ).createElement(u), c[yl] = n, c[Zl] = l, Me(c, u, l), il(c), n.stateNode = c) : n.memoizedState = yv(
          n.type,
          l.memoizedProps,
          n.pendingProps,
          l.memoizedState
        ), null;
      case 27:
        return ta(n), l === null && ft && (c = n.stateNode = fe(
          n.type,
          n.pendingProps,
          oe.current
        ), Ft = n, Va = !0, r = st, Mi(n.type) ? (Ui = r, st = gn(
          c.firstChild
        )) : st = r), vl(
          l,
          n,
          n.pendingProps.children,
          u
        ), ur(l, n), l === null && (n.flags |= 4194304), n.child;
      case 5:
        return l === null && ft && ((r = c = st) && (c = Vo(
          c,
          n.type,
          n.pendingProps,
          Va
        ), c !== null ? (n.stateNode = c, Ft = n, st = gn(
          c.firstChild
        ), Va = !1, r = !0) : r = !1), r || Ru(n)), ta(n), r = n.type, s = n.pendingProps, y = l !== null ? l.memoizedProps : null, c = s.children, eu(r, s) ? c = null : y !== null && eu(r, y) && (n.flags |= 32), n.memoizedState !== null && (r = ws(
          l,
          n,
          Gp,
          null,
          null,
          u
        ), pa._currentValue = r), ur(l, n), vl(l, n, c, u), n.child;
      case 6:
        return l === null && ft && ((l = u = st) && (u = Ug(
          u,
          n.pendingProps,
          Va
        ), u !== null ? (n.stateNode = u, Ft = n, st = null, l = !0) : l = !1), l || Ru(n)), null;
      case 13:
        return xy(l, n, u);
      case 4:
        return _e(
          n,
          n.stateNode.containerInfo
        ), c = n.pendingProps, l === null ? n.child = pc(
          n,
          null,
          c,
          u
        ) : vl(
          l,
          n,
          c,
          u
        ), n.child;
      case 11:
        return Wp(
          l,
          n,
          n.type,
          n.pendingProps,
          u
        );
      case 7:
        return vl(
          l,
          n,
          n.pendingProps,
          u
        ), n.child;
      case 8:
        return vl(
          l,
          n,
          n.pendingProps.children,
          u
        ), n.child;
      case 12:
        return vl(
          l,
          n,
          n.pendingProps.children,
          u
        ), n.child;
      case 10:
        return c = n.pendingProps, Du(n, n.type, c.value), vl(
          l,
          n,
          c.children,
          u
        ), n.child;
      case 9:
        return r = n.type._context, c = n.pendingProps.children, si(n), r = ml(r), c = c(r), n.flags |= 1, vl(l, n, c, u), n.child;
      case 14:
        return Cu(
          l,
          n,
          n.type,
          n.pendingProps,
          u
        );
      case 15:
        return gc(
          l,
          n,
          n.type,
          n.pendingProps,
          u
        );
      case 19:
        return fd(l, n, u);
      case 31:
        return c = n.pendingProps, u = n.mode, c = {
          mode: c.mode,
          children: c.children
        }, l === null ? (u = cd(
          c,
          u
        ), u.ref = n.ref, n.child = u, u.return = n, n = u) : (u = sn(l.child, c), u.ref = n.ref, n.child = u, u.return = n, n = u), n;
      case 22:
        return td(l, n, u);
      case 24:
        return si(n), c = ml(cl), l === null ? (r = jf(), r === null && (r = Dt, s = mo(), r.pooledCache = s, s.refCount++, s !== null && (r.pooledCacheLanes |= u), r = s), n.memoizedState = {
          parent: c,
          cache: r
        }, Cs(n), Du(n, cl, r)) : ((l.lanes & u) !== 0 && (Hs(l, n), zu(n, null, null, u), po()), r = l.memoizedState, s = n.memoizedState, r.parent !== c ? (r = { parent: c, cache: c }, n.memoizedState = r, n.lanes === 0 && (n.memoizedState = n.updateQueue.baseState = r), Du(n, cl, c)) : (c = s.cache, Du(n, cl, c), c !== r.cache && ty(
          n,
          [cl],
          u,
          !0
        ))), vl(
          l,
          n,
          n.pendingProps.children,
          u
        ), n.child;
      case 29:
        throw n.pendingProps;
    }
    throw Error(D(156, n.tag));
  }
  function Kn(l) {
    l.flags |= 4;
  }
  function Ro(l, n) {
    if (n.type !== "stylesheet" || (n.state.loading & 4) !== 0)
      l.flags &= -16777217;
    else if (l.flags |= 16777216, !pm(n)) {
      if (n = Oa.current, n !== null && ((et & 4194048) === et ? Gl !== null : (et & 62914560) !== et && (et & 536870912) === 0 || n !== Gl))
        throw cc = Us, Ms;
      l.flags |= 8192;
    }
  }
  function cr(l, n) {
    n !== null && (l.flags |= 4), l.flags & 16384 && (n = l.tag !== 22 ? ne() : 536870912, l.lanes |= n, Uo |= n);
  }
  function Oo(l, n) {
    if (!ft)
      switch (l.tailMode) {
        case "hidden":
          n = l.tail;
          for (var u = null; n !== null; )
            n.alternate !== null && (u = n), n = n.sibling;
          u === null ? l.tail = null : u.sibling = null;
          break;
        case "collapsed":
          u = l.tail;
          for (var c = null; u !== null; )
            u.alternate !== null && (c = u), u = u.sibling;
          c === null ? n || l.tail === null ? l.tail = null : l.tail.sibling = null : c.sibling = null;
      }
  }
  function Re(l) {
    var n = l.alternate !== null && l.alternate.child === l.child, u = 0, c = 0;
    if (n)
      for (var r = l.child; r !== null; )
        u |= r.lanes | r.childLanes, c |= r.subtreeFlags & 65011712, c |= r.flags & 65011712, r.return = l, r = r.sibling;
    else
      for (r = l.child; r !== null; )
        u |= r.lanes | r.childLanes, c |= r.subtreeFlags, c |= r.flags, r.return = l, r = r.sibling;
    return l.subtreeFlags |= c, l.childLanes = u, n;
  }
  function Ny(l, n, u) {
    var c = n.pendingProps;
    switch (Nn(n), n.tag) {
      case 31:
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return Re(n), null;
      case 1:
        return Re(n), null;
      case 3:
        return u = n.stateNode, c = null, l !== null && (c = l.memoizedState.cache), n.memoizedState.cache !== c && (n.flags |= 2048), wn(cl), xt(), u.pendingContext && (u.context = u.pendingContext, u.pendingContext = null), (l === null || l.child === null) && (fo(n) ? Kn(n) : l === null || l.memoizedState.isDehydrated && (n.flags & 256) === 0 || (n.flags |= 1024, ey())), Re(n), null;
      case 26:
        return u = n.memoizedState, l === null ? (Kn(n), u !== null ? (Re(n), Ro(n, u)) : (Re(n), n.flags &= -16777217)) : u ? u !== l.memoizedState ? (Kn(n), Re(n), Ro(n, u)) : (Re(n), n.flags &= -16777217) : (l.memoizedProps !== c && Kn(n), Re(n), n.flags &= -16777217), null;
      case 27:
        An(n), u = oe.current;
        var r = n.type;
        if (l !== null && n.stateNode != null)
          l.memoizedProps !== c && Kn(n);
        else {
          if (!c) {
            if (n.stateNode === null)
              throw Error(D(166));
            return Re(n), null;
          }
          l = ce.current, fo(n) ? Nf(n) : (l = fe(r, c, u), n.stateNode = l, Kn(n));
        }
        return Re(n), null;
      case 5:
        if (An(n), u = n.type, l !== null && n.stateNode != null)
          l.memoizedProps !== c && Kn(n);
        else {
          if (!c) {
            if (n.stateNode === null)
              throw Error(D(166));
            return Re(n), null;
          }
          if (l = ce.current, fo(n))
            Nf(n);
          else {
            switch (r = Wa(
              oe.current
            ), l) {
              case 1:
                l = r.createElementNS(
                  "http://www.w3.org/2000/svg",
                  u
                );
                break;
              case 2:
                l = r.createElementNS(
                  "http://www.w3.org/1998/Math/MathML",
                  u
                );
                break;
              default:
                switch (u) {
                  case "svg":
                    l = r.createElementNS(
                      "http://www.w3.org/2000/svg",
                      u
                    );
                    break;
                  case "math":
                    l = r.createElementNS(
                      "http://www.w3.org/1998/Math/MathML",
                      u
                    );
                    break;
                  case "script":
                    l = r.createElement("div"), l.innerHTML = "<script><\/script>", l = l.removeChild(l.firstChild);
                    break;
                  case "select":
                    l = typeof c.is == "string" ? r.createElement("select", { is: c.is }) : r.createElement("select"), c.multiple ? l.multiple = !0 : c.size && (l.size = c.size);
                    break;
                  default:
                    l = typeof c.is == "string" ? r.createElement(u, { is: c.is }) : r.createElement(u);
                }
            }
            l[yl] = n, l[Zl] = c;
            e: for (r = n.child; r !== null; ) {
              if (r.tag === 5 || r.tag === 6)
                l.appendChild(r.stateNode);
              else if (r.tag !== 4 && r.tag !== 27 && r.child !== null) {
                r.child.return = r, r = r.child;
                continue;
              }
              if (r === n) break e;
              for (; r.sibling === null; ) {
                if (r.return === null || r.return === n)
                  break e;
                r = r.return;
              }
              r.sibling.return = r.return, r = r.sibling;
            }
            n.stateNode = l;
            e: switch (Me(l, u, c), u) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                l = !!c.autoFocus;
                break e;
              case "img":
                l = !0;
                break e;
              default:
                l = !1;
            }
            l && Kn(n);
          }
        }
        return Re(n), n.flags &= -16777217, null;
      case 6:
        if (l && n.stateNode != null)
          l.memoizedProps !== c && Kn(n);
        else {
          if (typeof c != "string" && n.stateNode === null)
            throw Error(D(166));
          if (l = oe.current, fo(n)) {
            if (l = n.stateNode, u = n.memoizedProps, c = null, r = Ft, r !== null)
              switch (r.tag) {
                case 27:
                case 5:
                  c = r.memoizedProps;
              }
            l[yl] = n, l = !!(l.nodeValue === u || c !== null && c.suppressHydrationWarning === !0 || dm(l.nodeValue, u)), l || Ru(n);
          } else
            l = Wa(l).createTextNode(
              c
            ), l[yl] = n, n.stateNode = l;
        }
        return Re(n), null;
      case 13:
        if (c = n.memoizedState, l === null || l.memoizedState !== null && l.memoizedState.dehydrated !== null) {
          if (r = fo(n), c !== null && c.dehydrated !== null) {
            if (l === null) {
              if (!r) throw Error(D(318));
              if (r = n.memoizedState, r = r !== null ? r.dehydrated : null, !r) throw Error(D(317));
              r[yl] = n;
            } else
              ro(), (n.flags & 128) === 0 && (n.memoizedState = null), n.flags |= 4;
            Re(n), r = !1;
          } else
            r = ey(), l !== null && l.memoizedState !== null && (l.memoizedState.hydrationErrors = r), r = !0;
          if (!r)
            return n.flags & 256 ? (pn(n), n) : (pn(n), null);
        }
        if (pn(n), (n.flags & 128) !== 0)
          return n.lanes = u, n;
        if (u = c !== null, l = l !== null && l.memoizedState !== null, u) {
          c = n.child, r = null, c.alternate !== null && c.alternate.memoizedState !== null && c.alternate.memoizedState.cachePool !== null && (r = c.alternate.memoizedState.cachePool.pool);
          var s = null;
          c.memoizedState !== null && c.memoizedState.cachePool !== null && (s = c.memoizedState.cachePool.pool), s !== r && (c.flags |= 2048);
        }
        return u !== l && u && (n.child.flags |= 8192), cr(n, n.updateQueue), Re(n), null;
      case 4:
        return xt(), l === null && rm(n.stateNode.containerInfo), Re(n), null;
      case 10:
        return wn(n.type), Re(n), null;
      case 19:
        if (Z(Et), r = n.memoizedState, r === null) return Re(n), null;
        if (c = (n.flags & 128) !== 0, s = r.rendering, s === null)
          if (c) Oo(r, !1);
          else {
            if (Jt !== 0 || l !== null && (l.flags & 128) !== 0)
              for (l = n.child; l !== null; ) {
                if (s = tr(l), s !== null) {
                  for (n.flags |= 128, Oo(r, !1), l = s.updateQueue, n.updateQueue = l, cr(n, l), n.subtreeFlags = 0, l = u, u = n.child; u !== null; )
                    Ke(u, l), u = u.sibling;
                  return I(
                    Et,
                    Et.current & 1 | 2
                  ), n.child;
                }
                l = l.sibling;
              }
            r.tail !== null && hl() > bd && (n.flags |= 128, c = !0, Oo(r, !1), n.lanes = 4194304);
          }
        else {
          if (!c)
            if (l = tr(s), l !== null) {
              if (n.flags |= 128, c = !0, l = l.updateQueue, n.updateQueue = l, cr(n, l), Oo(r, !0), r.tail === null && r.tailMode === "hidden" && !s.alternate && !ft)
                return Re(n), null;
            } else
              2 * hl() - r.renderingStartTime > bd && u !== 536870912 && (n.flags |= 128, c = !0, Oo(r, !1), n.lanes = 4194304);
          r.isBackwards ? (s.sibling = n.child, n.child = s) : (l = r.last, l !== null ? l.sibling = s : n.child = s, r.last = s);
        }
        return r.tail !== null ? (n = r.tail, r.rendering = n, r.tail = n.sibling, r.renderingStartTime = hl(), n.sibling = null, l = Et.current, I(Et, c ? l & 1 | 2 : l & 1), n) : (Re(n), null);
      case 22:
      case 23:
        return pn(n), go(), c = n.memoizedState !== null, l !== null ? l.memoizedState !== null !== c && (n.flags |= 8192) : c && (n.flags |= 8192), c ? (u & 536870912) !== 0 && (n.flags & 128) === 0 && (Re(n), n.subtreeFlags & 6 && (n.flags |= 8192)) : Re(n), u = n.updateQueue, u !== null && cr(n, u.retryQueue), u = null, l !== null && l.memoizedState !== null && l.memoizedState.cachePool !== null && (u = l.memoizedState.cachePool.pool), c = null, n.memoizedState !== null && n.memoizedState.cachePool !== null && (c = n.memoizedState.cachePool.pool), c !== u && (n.flags |= 2048), l !== null && Z(qn), null;
      case 24:
        return u = null, l !== null && (u = l.memoizedState.cache), n.memoizedState.cache !== u && (n.flags |= 2048), wn(cl), Re(n), null;
      case 25:
        return null;
      case 30:
        return null;
    }
    throw Error(D(156, n.tag));
  }
  function Tg(l, n) {
    switch (Nn(n), n.tag) {
      case 1:
        return l = n.flags, l & 65536 ? (n.flags = l & -65537 | 128, n) : null;
      case 3:
        return wn(cl), xt(), l = n.flags, (l & 65536) !== 0 && (l & 128) === 0 ? (n.flags = l & -65537 | 128, n) : null;
      case 26:
      case 27:
      case 5:
        return An(n), null;
      case 13:
        if (pn(n), l = n.memoizedState, l !== null && l.dehydrated !== null) {
          if (n.alternate === null)
            throw Error(D(340));
          ro();
        }
        return l = n.flags, l & 65536 ? (n.flags = l & -65537 | 128, n) : null;
      case 19:
        return Z(Et), null;
      case 4:
        return xt(), null;
      case 10:
        return wn(n.type), null;
      case 22:
      case 23:
        return pn(n), go(), l !== null && Z(qn), l = n.flags, l & 65536 ? (n.flags = l & -65537 | 128, n) : null;
      case 24:
        return wn(cl), null;
      case 25:
        return null;
      default:
        return null;
    }
  }
  function wy(l, n) {
    switch (Nn(n), n.tag) {
      case 3:
        wn(cl), xt();
        break;
      case 26:
      case 27:
      case 5:
        An(n);
        break;
      case 4:
        xt();
        break;
      case 13:
        pn(n);
        break;
      case 19:
        Z(Et);
        break;
      case 10:
        wn(n.type);
        break;
      case 22:
      case 23:
        pn(n), go(), l !== null && Z(qn);
        break;
      case 24:
        wn(cl);
    }
  }
  function or(l, n) {
    try {
      var u = n.updateQueue, c = u !== null ? u.lastEffect : null;
      if (c !== null) {
        var r = c.next;
        u = r;
        do {
          if ((u.tag & l) === l) {
            c = void 0;
            var s = u.create, y = u.inst;
            c = s(), y.destroy = c;
          }
          u = u.next;
        } while (u !== r);
      }
    } catch (p) {
      bt(n, n.return, p);
    }
  }
  function Si(l, n, u) {
    try {
      var c = n.updateQueue, r = c !== null ? c.lastEffect : null;
      if (r !== null) {
        var s = r.next;
        c = s;
        do {
          if ((c.tag & l) === l) {
            var y = c.inst, p = y.destroy;
            if (p !== void 0) {
              y.destroy = void 0, r = n;
              var S = u, C = p;
              try {
                C();
              } catch (Q) {
                bt(
                  r,
                  S,
                  Q
                );
              }
            }
          }
          c = c.next;
        } while (c !== s);
      }
    } catch (Q) {
      bt(n, n.return, Q);
    }
  }
  function sd(l) {
    var n = l.updateQueue;
    if (n !== null) {
      var u = l.stateNode;
      try {
        Vf(n, u);
      } catch (c) {
        bt(l, l.return, c);
      }
    }
  }
  function By(l, n, u) {
    u.props = gi(
      l.type,
      l.memoizedProps
    ), u.state = l.memoizedState;
    try {
      u.componentWillUnmount();
    } catch (c) {
      bt(l, n, c);
    }
  }
  function Do(l, n) {
    try {
      var u = l.ref;
      if (u !== null) {
        switch (l.tag) {
          case 26:
          case 27:
          case 5:
            var c = l.stateNode;
            break;
          case 30:
            c = l.stateNode;
            break;
          default:
            c = l.stateNode;
        }
        typeof u == "function" ? l.refCleanup = u(c) : u.current = c;
      }
    } catch (r) {
      bt(l, n, r);
    }
  }
  function vn(l, n) {
    var u = l.ref, c = l.refCleanup;
    if (u !== null)
      if (typeof c == "function")
        try {
          c();
        } catch (r) {
          bt(l, n, r);
        } finally {
          l.refCleanup = null, l = l.alternate, l != null && (l.refCleanup = null);
        }
      else if (typeof u == "function")
        try {
          u(null);
        } catch (r) {
          bt(l, n, r);
        }
      else u.current = null;
  }
  function zo(l) {
    var n = l.type, u = l.memoizedProps, c = l.stateNode;
    try {
      e: switch (n) {
        case "button":
        case "input":
        case "select":
        case "textarea":
          u.autoFocus && c.focus();
          break e;
        case "img":
          u.src ? c.src = u.src : u.srcSet && (c.srcset = u.srcSet);
      }
    } catch (r) {
      bt(l, l.return, r);
    }
  }
  function qy(l, n, u) {
    try {
      var c = l.stateNode;
      Dg(c, l.type, u, n), c[Zl] = n;
    } catch (r) {
      bt(l, l.return, r);
    }
  }
  function Pp(l) {
    return l.tag === 5 || l.tag === 3 || l.tag === 26 || l.tag === 27 && Mi(l.type) || l.tag === 4;
  }
  function Ka(l) {
    e: for (; ; ) {
      for (; l.sibling === null; ) {
        if (l.return === null || Pp(l.return)) return null;
        l = l.return;
      }
      for (l.sibling.return = l.return, l = l.sibling; l.tag !== 5 && l.tag !== 6 && l.tag !== 18; ) {
        if (l.tag === 27 && Mi(l.type) || l.flags & 2 || l.child === null || l.tag === 4) continue e;
        l.child.return = l, l = l.child;
      }
      if (!(l.flags & 2)) return l.stateNode;
    }
  }
  function Sc(l, n, u) {
    var c = l.tag;
    if (c === 5 || c === 6)
      l = l.stateNode, n ? (u.nodeType === 9 ? u.body : u.nodeName === "HTML" ? u.ownerDocument.body : u).insertBefore(l, n) : (n = u.nodeType === 9 ? u.body : u.nodeName === "HTML" ? u.ownerDocument.body : u, n.appendChild(l), u = u._reactRootContainer, u != null || n.onclick !== null || (n.onclick = Cd));
    else if (c !== 4 && (c === 27 && Mi(l.type) && (u = l.stateNode, n = null), l = l.child, l !== null))
      for (Sc(l, n, u), l = l.sibling; l !== null; )
        Sc(l, n, u), l = l.sibling;
  }
  function dd(l, n, u) {
    var c = l.tag;
    if (c === 5 || c === 6)
      l = l.stateNode, n ? u.insertBefore(l, n) : u.appendChild(l);
    else if (c !== 4 && (c === 27 && Mi(l.type) && (u = l.stateNode), l = l.child, l !== null))
      for (dd(l, n, u), l = l.sibling; l !== null; )
        dd(l, n, u), l = l.sibling;
  }
  function hd(l) {
    var n = l.stateNode, u = l.memoizedProps;
    try {
      for (var c = l.type, r = n.attributes; r.length; )
        n.removeAttributeNode(r[0]);
      Me(n, c, u), n[yl] = l, n[Zl] = u;
    } catch (s) {
      bt(l, l.return, s);
    }
  }
  var Jn = !1, Zt = !1, yd = !1, md = typeof WeakSet == "function" ? WeakSet : Set, rl = null;
  function Yy(l, n) {
    if (l = l.containerInfo, Tr = zr, l = Jh(l), _f(l)) {
      if ("selectionStart" in l)
        var u = {
          start: l.selectionStart,
          end: l.selectionEnd
        };
      else
        e: {
          u = (u = l.ownerDocument) && u.defaultView || window;
          var c = u.getSelection && u.getSelection();
          if (c && c.rangeCount !== 0) {
            u = c.anchorNode;
            var r = c.anchorOffset, s = c.focusNode;
            c = c.focusOffset;
            try {
              u.nodeType, s.nodeType;
            } catch {
              u = null;
              break e;
            }
            var y = 0, p = -1, S = -1, C = 0, Q = 0, $ = l, N = null;
            t: for (; ; ) {
              for (var q; $ !== u || r !== 0 && $.nodeType !== 3 || (p = y + r), $ !== s || c !== 0 && $.nodeType !== 3 || (S = y + c), $.nodeType === 3 && (y += $.nodeValue.length), (q = $.firstChild) !== null; )
                N = $, $ = q;
              for (; ; ) {
                if ($ === l) break t;
                if (N === u && ++C === r && (p = y), N === s && ++Q === c && (S = y), (q = $.nextSibling) !== null) break;
                $ = N, N = $.parentNode;
              }
              $ = q;
            }
            u = p === -1 || S === -1 ? null : { start: p, end: S };
          } else u = null;
        }
      u = u || { start: 0, end: 0 };
    } else u = null;
    for (Er = { focusedElem: l, selectionRange: u }, zr = !1, rl = n; rl !== null; )
      if (n = rl, l = n.child, (n.subtreeFlags & 1024) !== 0 && l !== null)
        l.return = n, rl = l;
      else
        for (; rl !== null; ) {
          switch (n = rl, s = n.alternate, l = n.flags, n.tag) {
            case 0:
              break;
            case 11:
            case 15:
              break;
            case 1:
              if ((l & 1024) !== 0 && s !== null) {
                l = void 0, u = n, r = s.memoizedProps, s = s.memoizedState, c = u.stateNode;
                try {
                  var Te = gi(
                    u.type,
                    r,
                    u.elementType === u.type
                  );
                  l = c.getSnapshotBeforeUpdate(
                    Te,
                    s
                  ), c.__reactInternalSnapshotBeforeUpdate = l;
                } catch (Ee) {
                  bt(
                    u,
                    u.return,
                    Ee
                  );
                }
              }
              break;
            case 3:
              if ((l & 1024) !== 0) {
                if (l = n.stateNode.containerInfo, u = l.nodeType, u === 9)
                  Ar(l);
                else if (u === 1)
                  switch (l.nodeName) {
                    case "HEAD":
                    case "HTML":
                    case "BODY":
                      Ar(l);
                      break;
                    default:
                      l.textContent = "";
                  }
              }
              break;
            case 5:
            case 26:
            case 27:
            case 6:
            case 4:
            case 17:
              break;
            default:
              if ((l & 1024) !== 0) throw Error(D(163));
          }
          if (l = n.sibling, l !== null) {
            l.return = n.return, rl = l;
            break;
          }
          rl = n.return;
        }
  }
  function jy(l, n, u) {
    var c = u.flags;
    switch (u.tag) {
      case 0:
      case 11:
      case 15:
        $n(l, u), c & 4 && or(5, u);
        break;
      case 1:
        if ($n(l, u), c & 4)
          if (l = u.stateNode, n === null)
            try {
              l.componentDidMount();
            } catch (y) {
              bt(u, u.return, y);
            }
          else {
            var r = gi(
              u.type,
              n.memoizedProps
            );
            n = n.memoizedState;
            try {
              l.componentDidUpdate(
                r,
                n,
                l.__reactInternalSnapshotBeforeUpdate
              );
            } catch (y) {
              bt(
                u,
                u.return,
                y
              );
            }
          }
        c & 64 && sd(u), c & 512 && Do(u, u.return);
        break;
      case 3:
        if ($n(l, u), c & 64 && (l = u.updateQueue, l !== null)) {
          if (n = null, u.child !== null)
            switch (u.child.tag) {
              case 27:
              case 5:
                n = u.child.stateNode;
                break;
              case 1:
                n = u.child.stateNode;
            }
          try {
            Vf(l, n);
          } catch (y) {
            bt(u, u.return, y);
          }
        }
        break;
      case 27:
        n === null && c & 4 && hd(u);
      case 26:
      case 5:
        $n(l, u), n === null && c & 4 && zo(u), c & 512 && Do(u, u.return);
        break;
      case 12:
        $n(l, u);
        break;
      case 13:
        $n(l, u), c & 4 && pd(l, u), c & 64 && (l = u.memoizedState, l !== null && (l = l.dehydrated, l !== null && (u = Eg.bind(
          null,
          u
        ), _g(l, u))));
        break;
      case 22:
        if (c = u.memoizedState !== null || Jn, !c) {
          n = n !== null && n.memoizedState !== null || Zt, r = Jn;
          var s = Zt;
          Jn = c, (Zt = n) && !s ? Ti(
            l,
            u,
            (u.subtreeFlags & 8772) !== 0
          ) : $n(l, u), Jn = r, Zt = s;
        }
        break;
      case 30:
        break;
      default:
        $n(l, u);
    }
  }
  function Gy(l) {
    var n = l.alternate;
    n !== null && (l.alternate = null, Gy(n)), l.child = null, l.deletions = null, l.sibling = null, l.tag === 5 && (n = l.stateNode, n !== null && yf(n)), l.stateNode = null, l.return = null, l.dependencies = null, l.memoizedProps = null, l.memoizedState = null, l.pendingProps = null, l.stateNode = null, l.updateQueue = null;
  }
  var Nt = null, Ml = !1;
  function kn(l, n, u) {
    for (u = u.child; u !== null; )
      Fe(l, n, u), u = u.sibling;
  }
  function Fe(l, n, u) {
    if (El && typeof El.onCommitFiberUnmount == "function")
      try {
        El.onCommitFiberUnmount($u, u);
      } catch {
      }
    switch (u.tag) {
      case 26:
        Zt || vn(u, n), kn(
          l,
          n,
          u
        ), u.memoizedState ? u.memoizedState.count-- : u.stateNode && (u = u.stateNode, u.parentNode.removeChild(u));
        break;
      case 27:
        Zt || vn(u, n);
        var c = Nt, r = Ml;
        Mi(u.type) && (Nt = u.stateNode, Ml = !1), kn(
          l,
          n,
          u
        ), ya(u.stateNode), Nt = c, Ml = r;
        break;
      case 5:
        Zt || vn(u, n);
      case 6:
        if (c = Nt, r = Ml, Nt = null, kn(
          l,
          n,
          u
        ), Nt = c, Ml = r, Nt !== null)
          if (Ml)
            try {
              (Nt.nodeType === 9 ? Nt.body : Nt.nodeName === "HTML" ? Nt.ownerDocument.body : Nt).removeChild(u.stateNode);
            } catch (s) {
              bt(
                u,
                n,
                s
              );
            }
          else
            try {
              Nt.removeChild(u.stateNode);
            } catch (s) {
              bt(
                u,
                n,
                s
              );
            }
        break;
      case 18:
        Nt !== null && (Ml ? (l = Nt, xd(
          l.nodeType === 9 ? l.body : l.nodeName === "HTML" ? l.ownerDocument.body : l,
          u.stateNode
        ), au(l)) : xd(Nt, u.stateNode));
        break;
      case 4:
        c = Nt, r = Ml, Nt = u.stateNode.containerInfo, Ml = !0, kn(
          l,
          n,
          u
        ), Nt = c, Ml = r;
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        Zt || Si(2, u, n), Zt || Si(4, u, n), kn(
          l,
          n,
          u
        );
        break;
      case 1:
        Zt || (vn(u, n), c = u.stateNode, typeof c.componentWillUnmount == "function" && By(
          u,
          n,
          c
        )), kn(
          l,
          n,
          u
        );
        break;
      case 21:
        kn(
          l,
          n,
          u
        );
        break;
      case 22:
        Zt = (c = Zt) || u.memoizedState !== null, kn(
          l,
          n,
          u
        ), Zt = c;
        break;
      default:
        kn(
          l,
          n,
          u
        );
    }
  }
  function pd(l, n) {
    if (n.memoizedState === null && (l = n.alternate, l !== null && (l = l.memoizedState, l !== null && (l = l.dehydrated, l !== null))))
      try {
        au(l);
      } catch (u) {
        bt(n, n.return, u);
      }
  }
  function Ly(l) {
    switch (l.tag) {
      case 13:
      case 19:
        var n = l.stateNode;
        return n === null && (n = l.stateNode = new md()), n;
      case 22:
        return l = l.stateNode, n = l._retryCache, n === null && (n = l._retryCache = new md()), n;
      default:
        throw Error(D(435, l.tag));
    }
  }
  function vd(l, n) {
    var u = Ly(l);
    n.forEach(function(c) {
      var r = Ag.bind(null, l, c);
      u.has(c) || (u.add(c), c.then(r, r));
    });
  }
  function kl(l, n) {
    var u = n.deletions;
    if (u !== null)
      for (var c = 0; c < u.length; c++) {
        var r = u[c], s = l, y = n, p = y;
        e: for (; p !== null; ) {
          switch (p.tag) {
            case 27:
              if (Mi(p.type)) {
                Nt = p.stateNode, Ml = !1;
                break e;
              }
              break;
            case 5:
              Nt = p.stateNode, Ml = !1;
              break e;
            case 3:
            case 4:
              Nt = p.stateNode.containerInfo, Ml = !0;
              break e;
          }
          p = p.return;
        }
        if (Nt === null) throw Error(D(160));
        Fe(s, y, r), Nt = null, Ml = !1, s = r.alternate, s !== null && (s.return = null), r.return = null;
      }
    if (n.subtreeFlags & 13878)
      for (n = n.child; n !== null; )
        fr(n, l), n = n.sibling;
  }
  var $l = null;
  function fr(l, n) {
    var u = l.alternate, c = l.flags;
    switch (l.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        kl(n, l), gl(l), c & 4 && (Si(3, l, l.return), or(3, l), Si(5, l, l.return));
        break;
      case 1:
        kl(n, l), gl(l), c & 512 && (Zt || u === null || vn(u, u.return)), c & 64 && Jn && (l = l.updateQueue, l !== null && (c = l.callbacks, c !== null && (u = l.shared.hiddenCallbacks, l.shared.hiddenCallbacks = u === null ? c : u.concat(c))));
        break;
      case 26:
        var r = $l;
        if (kl(n, l), gl(l), c & 512 && (Zt || u === null || vn(u, u.return)), c & 4) {
          var s = u !== null ? u.memoizedState : null;
          if (c = l.memoizedState, u === null)
            if (c === null)
              if (l.stateNode === null) {
                e: {
                  c = l.type, u = l.memoizedProps, r = r.ownerDocument || r;
                  t: switch (c) {
                    case "title":
                      s = r.getElementsByTagName("title")[0], (!s || s[he] || s[yl] || s.namespaceURI === "http://www.w3.org/2000/svg" || s.hasAttribute("itemprop")) && (s = r.createElement(c), r.head.insertBefore(
                        s,
                        r.querySelector("head > title")
                      )), Me(s, c, u), s[yl] = l, il(s), c = s;
                      break e;
                    case "link":
                      var y = ym(
                        "link",
                        "href",
                        r
                      ).get(c + (u.href || ""));
                      if (y) {
                        for (var p = 0; p < y.length; p++)
                          if (s = y[p], s.getAttribute("href") === (u.href == null || u.href === "" ? null : u.href) && s.getAttribute("rel") === (u.rel == null ? null : u.rel) && s.getAttribute("title") === (u.title == null ? null : u.title) && s.getAttribute("crossorigin") === (u.crossOrigin == null ? null : u.crossOrigin)) {
                            y.splice(p, 1);
                            break t;
                          }
                      }
                      s = r.createElement(c), Me(s, c, u), r.head.appendChild(s);
                      break;
                    case "meta":
                      if (y = ym(
                        "meta",
                        "content",
                        r
                      ).get(c + (u.content || ""))) {
                        for (p = 0; p < y.length; p++)
                          if (s = y[p], s.getAttribute("content") === (u.content == null ? null : "" + u.content) && s.getAttribute("name") === (u.name == null ? null : u.name) && s.getAttribute("property") === (u.property == null ? null : u.property) && s.getAttribute("http-equiv") === (u.httpEquiv == null ? null : u.httpEquiv) && s.getAttribute("charset") === (u.charSet == null ? null : u.charSet)) {
                            y.splice(p, 1);
                            break t;
                          }
                      }
                      s = r.createElement(c), Me(s, c, u), r.head.appendChild(s);
                      break;
                    default:
                      throw Error(D(468, c));
                  }
                  s[yl] = l, il(s), c = s;
                }
                l.stateNode = c;
              } else
                mm(
                  r,
                  l.type,
                  l.stateNode
                );
            else
              l.stateNode = pv(
                r,
                c,
                l.memoizedProps
              );
          else
            s !== c ? (s === null ? u.stateNode !== null && (u = u.stateNode, u.parentNode.removeChild(u)) : s.count--, c === null ? mm(
              r,
              l.type,
              l.stateNode
            ) : pv(
              r,
              c,
              l.memoizedProps
            )) : c === null && l.stateNode !== null && qy(
              l,
              l.memoizedProps,
              u.memoizedProps
            );
        }
        break;
      case 27:
        kl(n, l), gl(l), c & 512 && (Zt || u === null || vn(u, u.return)), u !== null && c & 4 && qy(
          l,
          l.memoizedProps,
          u.memoizedProps
        );
        break;
      case 5:
        if (kl(n, l), gl(l), c & 512 && (Zt || u === null || vn(u, u.return)), l.flags & 32) {
          r = l.stateNode;
          try {
            Fc(r, "");
          } catch (q) {
            bt(l, l.return, q);
          }
        }
        c & 4 && l.stateNode != null && (r = l.memoizedProps, qy(
          l,
          r,
          u !== null ? u.memoizedProps : r
        )), c & 1024 && (yd = !0);
        break;
      case 6:
        if (kl(n, l), gl(l), c & 4) {
          if (l.stateNode === null)
            throw Error(D(162));
          c = l.memoizedProps, u = l.stateNode;
          try {
            u.nodeValue = c;
          } catch (q) {
            bt(l, l.return, q);
          }
        }
        break;
      case 3:
        if (Hi = null, r = $l, $l = Nd(n.containerInfo), kl(n, l), $l = r, gl(l), c & 4 && u !== null && u.memoizedState.isDehydrated)
          try {
            au(n.containerInfo);
          } catch (q) {
            bt(l, l.return, q);
          }
        yd && (yd = !1, Vy(l));
        break;
      case 4:
        c = $l, $l = Nd(
          l.stateNode.containerInfo
        ), kl(n, l), gl(l), $l = c;
        break;
      case 12:
        kl(n, l), gl(l);
        break;
      case 13:
        kl(n, l), gl(l), l.child.flags & 8192 && l.memoizedState !== null != (u !== null && u.memoizedState !== null) && (Wy = hl()), c & 4 && (c = l.updateQueue, c !== null && (l.updateQueue = null, vd(l, c)));
        break;
      case 22:
        r = l.memoizedState !== null;
        var S = u !== null && u.memoizedState !== null, C = Jn, Q = Zt;
        if (Jn = C || r, Zt = Q || S, kl(n, l), Zt = Q, Jn = C, gl(l), c & 8192)
          e: for (n = l.stateNode, n._visibility = r ? n._visibility & -2 : n._visibility | 1, r && (u === null || S || Jn || Zt || wt(l)), u = null, n = l; ; ) {
            if (n.tag === 5 || n.tag === 26) {
              if (u === null) {
                S = u = n;
                try {
                  if (s = S.stateNode, r)
                    y = s.style, typeof y.setProperty == "function" ? y.setProperty("display", "none", "important") : y.display = "none";
                  else {
                    p = S.stateNode;
                    var $ = S.memoizedProps.style, N = $ != null && $.hasOwnProperty("display") ? $.display : null;
                    p.style.display = N == null || typeof N == "boolean" ? "" : ("" + N).trim();
                  }
                } catch (q) {
                  bt(S, S.return, q);
                }
              }
            } else if (n.tag === 6) {
              if (u === null) {
                S = n;
                try {
                  S.stateNode.nodeValue = r ? "" : S.memoizedProps;
                } catch (q) {
                  bt(S, S.return, q);
                }
              }
            } else if ((n.tag !== 22 && n.tag !== 23 || n.memoizedState === null || n === l) && n.child !== null) {
              n.child.return = n, n = n.child;
              continue;
            }
            if (n === l) break e;
            for (; n.sibling === null; ) {
              if (n.return === null || n.return === l) break e;
              u === n && (u = null), n = n.return;
            }
            u === n && (u = null), n.sibling.return = n.return, n = n.sibling;
          }
        c & 4 && (c = l.updateQueue, c !== null && (u = c.retryQueue, u !== null && (c.retryQueue = null, vd(l, u))));
        break;
      case 19:
        kl(n, l), gl(l), c & 4 && (c = l.updateQueue, c !== null && (l.updateQueue = null, vd(l, c)));
        break;
      case 30:
        break;
      case 21:
        break;
      default:
        kl(n, l), gl(l);
    }
  }
  function gl(l) {
    var n = l.flags;
    if (n & 2) {
      try {
        for (var u, c = l.return; c !== null; ) {
          if (Pp(c)) {
            u = c;
            break;
          }
          c = c.return;
        }
        if (u == null) throw Error(D(160));
        switch (u.tag) {
          case 27:
            var r = u.stateNode, s = Ka(l);
            dd(l, s, r);
            break;
          case 5:
            var y = u.stateNode;
            u.flags & 32 && (Fc(y, ""), u.flags &= -33);
            var p = Ka(l);
            dd(l, p, y);
            break;
          case 3:
          case 4:
            var S = u.stateNode.containerInfo, C = Ka(l);
            Sc(
              l,
              C,
              S
            );
            break;
          default:
            throw Error(D(161));
        }
      } catch (Q) {
        bt(l, l.return, Q);
      }
      l.flags &= -3;
    }
    n & 4096 && (l.flags &= -4097);
  }
  function Vy(l) {
    if (l.subtreeFlags & 1024)
      for (l = l.child; l !== null; ) {
        var n = l;
        Vy(n), n.tag === 5 && n.flags & 1024 && n.stateNode.reset(), l = l.sibling;
      }
  }
  function $n(l, n) {
    if (n.subtreeFlags & 8772)
      for (n = n.child; n !== null; )
        jy(l, n.alternate, n), n = n.sibling;
  }
  function wt(l) {
    for (l = l.child; l !== null; ) {
      var n = l;
      switch (n.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          Si(4, n, n.return), wt(n);
          break;
        case 1:
          vn(n, n.return);
          var u = n.stateNode;
          typeof u.componentWillUnmount == "function" && By(
            n,
            n.return,
            u
          ), wt(n);
          break;
        case 27:
          ya(n.stateNode);
        case 26:
        case 5:
          vn(n, n.return), wt(n);
          break;
        case 22:
          n.memoizedState === null && wt(n);
          break;
        case 30:
          wt(n);
          break;
        default:
          wt(n);
      }
      l = l.sibling;
    }
  }
  function Ti(l, n, u) {
    for (u = u && (n.subtreeFlags & 8772) !== 0, n = n.child; n !== null; ) {
      var c = n.alternate, r = l, s = n, y = s.flags;
      switch (s.tag) {
        case 0:
        case 11:
        case 15:
          Ti(
            r,
            s,
            u
          ), or(4, s);
          break;
        case 1:
          if (Ti(
            r,
            s,
            u
          ), c = s, r = c.stateNode, typeof r.componentDidMount == "function")
            try {
              r.componentDidMount();
            } catch (C) {
              bt(c, c.return, C);
            }
          if (c = s, r = c.updateQueue, r !== null) {
            var p = c.stateNode;
            try {
              var S = r.shared.hiddenCallbacks;
              if (S !== null)
                for (r.shared.hiddenCallbacks = null, r = 0; r < S.length; r++)
                  xs(S[r], p);
            } catch (C) {
              bt(c, c.return, C);
            }
          }
          u && y & 64 && sd(s), Do(s, s.return);
          break;
        case 27:
          hd(s);
        case 26:
        case 5:
          Ti(
            r,
            s,
            u
          ), u && c === null && y & 4 && zo(s), Do(s, s.return);
          break;
        case 12:
          Ti(
            r,
            s,
            u
          );
          break;
        case 13:
          Ti(
            r,
            s,
            u
          ), u && y & 4 && pd(r, s);
          break;
        case 22:
          s.memoizedState === null && Ti(
            r,
            s,
            u
          ), Do(s, s.return);
          break;
        case 30:
          break;
        default:
          Ti(
            r,
            s,
            u
          );
      }
      n = n.sibling;
    }
  }
  function Ja(l, n) {
    var u = null;
    l !== null && l.memoizedState !== null && l.memoizedState.cachePool !== null && (u = l.memoizedState.cachePool.pool), l = null, n.memoizedState !== null && n.memoizedState.cachePool !== null && (l = n.memoizedState.cachePool.pool), l !== u && (l != null && l.refCount++, u != null && Bn(u));
  }
  function gd(l, n) {
    l = null, n.alternate !== null && (l = n.alternate.memoizedState.cache), n = n.memoizedState.cache, n !== l && (n.refCount++, l != null && Bn(l));
  }
  function Ul(l, n, u, c) {
    if (n.subtreeFlags & 10256)
      for (n = n.child; n !== null; )
        Xy(
          l,
          n,
          u,
          c
        ), n = n.sibling;
  }
  function Xy(l, n, u, c) {
    var r = n.flags;
    switch (n.tag) {
      case 0:
      case 11:
      case 15:
        Ul(
          l,
          n,
          u,
          c
        ), r & 2048 && or(9, n);
        break;
      case 1:
        Ul(
          l,
          n,
          u,
          c
        );
        break;
      case 3:
        Ul(
          l,
          n,
          u,
          c
        ), r & 2048 && (l = null, n.alternate !== null && (l = n.alternate.memoizedState.cache), n = n.memoizedState.cache, n !== l && (n.refCount++, l != null && Bn(l)));
        break;
      case 12:
        if (r & 2048) {
          Ul(
            l,
            n,
            u,
            c
          ), l = n.stateNode;
          try {
            var s = n.memoizedProps, y = s.id, p = s.onPostCommit;
            typeof p == "function" && p(
              y,
              n.alternate === null ? "mount" : "update",
              l.passiveEffectDuration,
              -0
            );
          } catch (S) {
            bt(n, n.return, S);
          }
        } else
          Ul(
            l,
            n,
            u,
            c
          );
        break;
      case 13:
        Ul(
          l,
          n,
          u,
          c
        );
        break;
      case 23:
        break;
      case 22:
        s = n.stateNode, y = n.alternate, n.memoizedState !== null ? s._visibility & 2 ? Ul(
          l,
          n,
          u,
          c
        ) : dt(l, n) : s._visibility & 2 ? Ul(
          l,
          n,
          u,
          c
        ) : (s._visibility |= 2, Hu(
          l,
          n,
          u,
          c,
          (n.subtreeFlags & 10256) !== 0
        )), r & 2048 && Ja(y, n);
        break;
      case 24:
        Ul(
          l,
          n,
          u,
          c
        ), r & 2048 && gd(n.alternate, n);
        break;
      default:
        Ul(
          l,
          n,
          u,
          c
        );
    }
  }
  function Hu(l, n, u, c, r) {
    for (r = r && (n.subtreeFlags & 10256) !== 0, n = n.child; n !== null; ) {
      var s = l, y = n, p = u, S = c, C = y.flags;
      switch (y.tag) {
        case 0:
        case 11:
        case 15:
          Hu(
            s,
            y,
            p,
            S,
            r
          ), or(8, y);
          break;
        case 23:
          break;
        case 22:
          var Q = y.stateNode;
          y.memoizedState !== null ? Q._visibility & 2 ? Hu(
            s,
            y,
            p,
            S,
            r
          ) : dt(
            s,
            y
          ) : (Q._visibility |= 2, Hu(
            s,
            y,
            p,
            S,
            r
          )), r && C & 2048 && Ja(
            y.alternate,
            y
          );
          break;
        case 24:
          Hu(
            s,
            y,
            p,
            S,
            r
          ), r && C & 2048 && gd(y.alternate, y);
          break;
        default:
          Hu(
            s,
            y,
            p,
            S,
            r
          );
      }
      n = n.sibling;
    }
  }
  function dt(l, n) {
    if (n.subtreeFlags & 10256)
      for (n = n.child; n !== null; ) {
        var u = l, c = n, r = c.flags;
        switch (c.tag) {
          case 22:
            dt(u, c), r & 2048 && Ja(
              c.alternate,
              c
            );
            break;
          case 24:
            dt(u, c), r & 2048 && gd(c.alternate, c);
            break;
          default:
            dt(u, c);
        }
        n = n.sibling;
      }
  }
  var Tc = 8192;
  function Kt(l) {
    if (l.subtreeFlags & Tc)
      for (l = l.child; l !== null; )
        ev(l), l = l.sibling;
  }
  function ev(l) {
    switch (l.tag) {
      case 26:
        Kt(l), l.flags & Tc && l.memoizedState !== null && bv(
          $l,
          l.memoizedState,
          l.memoizedProps
        );
        break;
      case 5:
        Kt(l);
        break;
      case 3:
      case 4:
        var n = $l;
        $l = Nd(l.stateNode.containerInfo), Kt(l), $l = n;
        break;
      case 22:
        l.memoizedState === null && (n = l.alternate, n !== null && n.memoizedState !== null ? (n = Tc, Tc = 16777216, Kt(l), Tc = n) : Kt(l));
        break;
      default:
        Kt(l);
    }
  }
  function Qy(l) {
    var n = l.alternate;
    if (n !== null && (l = n.child, l !== null)) {
      n.child = null;
      do
        n = l.sibling, l.sibling = null, l = n;
      while (l !== null);
    }
  }
  function Ec(l) {
    var n = l.deletions;
    if ((l.flags & 16) !== 0) {
      if (n !== null)
        for (var u = 0; u < n.length; u++) {
          var c = n[u];
          rl = c, Ky(
            c,
            l
          );
        }
      Qy(l);
    }
    if (l.subtreeFlags & 10256)
      for (l = l.child; l !== null; )
        Zy(l), l = l.sibling;
  }
  function Zy(l) {
    switch (l.tag) {
      case 0:
      case 11:
      case 15:
        Ec(l), l.flags & 2048 && Si(9, l, l.return);
        break;
      case 3:
        Ec(l);
        break;
      case 12:
        Ec(l);
        break;
      case 22:
        var n = l.stateNode;
        l.memoizedState !== null && n._visibility & 2 && (l.return === null || l.return.tag !== 13) ? (n._visibility &= -3, Wl(l)) : Ec(l);
        break;
      default:
        Ec(l);
    }
  }
  function Wl(l) {
    var n = l.deletions;
    if ((l.flags & 16) !== 0) {
      if (n !== null)
        for (var u = 0; u < n.length; u++) {
          var c = n[u];
          rl = c, Ky(
            c,
            l
          );
        }
      Qy(l);
    }
    for (l = l.child; l !== null; ) {
      switch (n = l, n.tag) {
        case 0:
        case 11:
        case 15:
          Si(8, n, n.return), Wl(n);
          break;
        case 22:
          u = n.stateNode, u._visibility & 2 && (u._visibility &= -3, Wl(n));
          break;
        default:
          Wl(n);
      }
      l = l.sibling;
    }
  }
  function Ky(l, n) {
    for (; rl !== null; ) {
      var u = rl;
      switch (u.tag) {
        case 0:
        case 11:
        case 15:
          Si(8, u, n);
          break;
        case 23:
        case 22:
          if (u.memoizedState !== null && u.memoizedState.cachePool !== null) {
            var c = u.memoizedState.cachePool.pool;
            c != null && c.refCount++;
          }
          break;
        case 24:
          Bn(u.memoizedState.cache);
      }
      if (c = u.child, c !== null) c.return = u, rl = c;
      else
        e: for (u = l; rl !== null; ) {
          c = rl;
          var r = c.sibling, s = c.return;
          if (Gy(c), c === u) {
            rl = null;
            break e;
          }
          if (r !== null) {
            r.return = s, rl = r;
            break e;
          }
          rl = s;
        }
    }
  }
  var Jy = {
    getCacheForType: function(l) {
      var n = ml(cl), u = n.data.get(l);
      return u === void 0 && (u = l(), n.data.set(l, u)), u;
    }
  }, tv = typeof WeakMap == "function" ? WeakMap : Map, vt = 0, Dt = null, Pe = null, et = 0, gt = 0, sa = null, Wn = !1, Mo = !1, ky = !1, xu = 0, Jt = 0, Nu = 0, Ac = 0, Fn = 0, ka = 0, Uo = 0, _o = null, da = null, $y = !1, Wy = 0, bd = 1 / 0, Co = null, Ei = null, _l = 0, In = null, Ho = null, Cl = 0, Sd = 0, Td = null, Fy = null, xo = 0, Iy = null;
  function Da() {
    if ((vt & 2) !== 0 && et !== 0)
      return et & -et;
    if (O.T !== null) {
      var l = Xa;
      return l !== 0 ? l : zc();
    }
    return Pr();
  }
  function Py() {
    ka === 0 && (ka = (et & 536870912) === 0 || ft ? te() : 536870912);
    var l = Oa.current;
    return l !== null && (l.flags |= 32), ka;
  }
  function za(l, n, u) {
    (l === Dt && (gt === 2 || gt === 9) || l.cancelPendingCommit !== null) && (Pn(l, 0), wu(
      l,
      et,
      ka,
      !1
    )), Ce(l, u), ((vt & 2) === 0 || l !== Dt) && (l === Dt && ((vt & 2) === 0 && (Ac |= u), Jt === 4 && wu(
      l,
      et,
      ka,
      !1
    )), ha(l));
  }
  function No(l, n, u) {
    if ((vt & 6) !== 0) throw Error(D(327));
    var c = !u && (n & 124) === 0 && (n & l.expiredLanes) === 0 || m(l, n), r = c ? tm(l, n) : Ed(l, n, !0), s = c;
    do {
      if (r === 0) {
        Mo && !c && wu(l, n, 0, !1);
        break;
      } else {
        if (u = l.current.alternate, s && !lv(u)) {
          r = Ed(l, n, !1), s = !1;
          continue;
        }
        if (r === 2) {
          if (s = n, l.errorRecoveryDisabledLanes & s)
            var y = 0;
          else
            y = l.pendingLanes & -536870913, y = y !== 0 ? y : y & 536870912 ? 536870912 : 0;
          if (y !== 0) {
            n = y;
            e: {
              var p = l;
              r = _o;
              var S = p.current.memoizedState.isDehydrated;
              if (S && (Pn(p, y).flags |= 256), y = Ed(
                p,
                y,
                !1
              ), y !== 2) {
                if (ky && !S) {
                  p.errorRecoveryDisabledLanes |= s, Ac |= s, r = 4;
                  break e;
                }
                s = da, da = r, s !== null && (da === null ? da = s : da.push.apply(
                  da,
                  s
                ));
              }
              r = y;
            }
            if (s = !1, r !== 2) continue;
          }
        }
        if (r === 1) {
          Pn(l, 0), wu(l, n, 0, !0);
          break;
        }
        e: {
          switch (c = l, s = r, s) {
            case 0:
            case 1:
              throw Error(D(345));
            case 4:
              if ((n & 4194048) !== n) break;
            case 6:
              wu(
                c,
                n,
                ka,
                !Wn
              );
              break e;
            case 2:
              da = null;
              break;
            case 3:
            case 5:
              break;
            default:
              throw Error(D(329));
          }
          if ((n & 62914560) === n && (r = Wy + 300 - hl(), 10 < r)) {
            if (wu(
              c,
              n,
              ka,
              !Wn
            ), ln(c, 0, !0) !== 0) break e;
            c.timeoutHandle = Hd(
              rr.bind(
                null,
                c,
                u,
                da,
                Co,
                $y,
                n,
                ka,
                Ac,
                Uo,
                Wn,
                s,
                2,
                -0,
                0
              ),
              r
            );
            break e;
          }
          rr(
            c,
            u,
            da,
            Co,
            $y,
            n,
            ka,
            Ac,
            Uo,
            Wn,
            s,
            0,
            -0,
            0
          );
        }
      }
      break;
    } while (!0);
    ha(l);
  }
  function rr(l, n, u, c, r, s, y, p, S, C, Q, $, N, q) {
    if (l.timeoutHandle = -1, $ = n.subtreeFlags, ($ & 8192 || ($ & 16785408) === 16785408) && (Ko = { stylesheets: null, count: 0, unsuspend: gv }, ev(n), $ = vm(), $ !== null)) {
      l.cancelPendingCommit = $(
        uv.bind(
          null,
          l,
          n,
          s,
          u,
          c,
          r,
          y,
          p,
          S,
          Q,
          1,
          N,
          q
        )
      ), wu(l, s, y, !C);
      return;
    }
    uv(
      l,
      n,
      s,
      u,
      c,
      r,
      y,
      p,
      S
    );
  }
  function lv(l) {
    for (var n = l; ; ) {
      var u = n.tag;
      if ((u === 0 || u === 11 || u === 15) && n.flags & 16384 && (u = n.updateQueue, u !== null && (u = u.stores, u !== null)))
        for (var c = 0; c < u.length; c++) {
          var r = u[c], s = r.getSnapshot;
          r = r.value;
          try {
            if (!zl(s(), r)) return !1;
          } catch {
            return !1;
          }
        }
      if (u = n.child, n.subtreeFlags & 16384 && u !== null)
        u.return = n, n = u;
      else {
        if (n === l) break;
        for (; n.sibling === null; ) {
          if (n.return === null || n.return === l) return !0;
          n = n.return;
        }
        n.sibling.return = n.return, n = n.sibling;
      }
    }
    return !0;
  }
  function wu(l, n, u, c) {
    n &= ~Fn, n &= ~Ac, l.suspendedLanes |= n, l.pingedLanes &= ~n, c && (l.warmLanes |= n), c = l.expirationTimes;
    for (var r = n; 0 < r; ) {
      var s = 31 - Al(r), y = 1 << s;
      c[s] = -1, r &= ~y;
    }
    u !== 0 && at(l, u, n);
  }
  function Rc() {
    return (vt & 6) === 0 ? (yr(0), !1) : !0;
  }
  function Ai() {
    if (Pe !== null) {
      if (gt === 0)
        var l = Pe.return;
      else
        l = Pe, hn = Ou = null, qs(l), yc = null, To = 0, l = Pe;
      for (; l !== null; )
        wy(l.alternate, l), l = l.return;
      Pe = null;
    }
  }
  function Pn(l, n) {
    var u = l.timeoutHandle;
    u !== -1 && (l.timeoutHandle = -1, zg(u)), u = l.cancelPendingCommit, u !== null && (l.cancelPendingCommit = null, u()), Ai(), Dt = l, Pe = u = sn(l.current, null), et = n, gt = 0, sa = null, Wn = !1, Mo = m(l, n), ky = !1, Uo = ka = Fn = Ac = Nu = Jt = 0, da = _o = null, $y = !1, (n & 8) !== 0 && (n |= n & 32);
    var c = l.entangledLanes;
    if (c !== 0)
      for (l = l.entanglements, c &= n; 0 < c; ) {
        var r = 31 - Al(c), s = 1 << r;
        n |= l[r], c &= ~s;
      }
    return xu = n, rn(), u;
  }
  function em(l, n) {
    qe = null, O.H = Is, n === hi || n === Gf ? (n = ny(), gt = 3) : n === Ms ? (n = ny(), gt = 4) : gt = n === Qt ? 8 : n !== null && typeof n == "object" && typeof n.then == "function" ? 6 : 1, sa = n, Pe === null && (Jt = 1, nr(
      l,
      Ea(n, l.current)
    ));
  }
  function av() {
    var l = O.H;
    return O.H = Is, l === null ? Is : l;
  }
  function Oc() {
    var l = O.A;
    return O.A = Jy, l;
  }
  function Dc() {
    Jt = 4, Wn || (et & 4194048) !== et && Oa.current !== null || (Mo = !0), (Nu & 134217727) === 0 && (Ac & 134217727) === 0 || Dt === null || wu(
      Dt,
      et,
      ka,
      !1
    );
  }
  function Ed(l, n, u) {
    var c = vt;
    vt |= 2;
    var r = av(), s = Oc();
    (Dt !== l || et !== n) && (Co = null, Pn(l, n)), n = !1;
    var y = Jt;
    e: do
      try {
        if (gt !== 0 && Pe !== null) {
          var p = Pe, S = sa;
          switch (gt) {
            case 8:
              Ai(), y = 6;
              break e;
            case 3:
            case 2:
            case 9:
            case 6:
              Oa.current === null && (n = !0);
              var C = gt;
              if (gt = 0, sa = null, wo(l, p, S, C), u && Mo) {
                y = 0;
                break e;
              }
              break;
            default:
              C = gt, gt = 0, sa = null, wo(l, p, S, C);
          }
        }
        Ad(), y = Jt;
        break;
      } catch (Q) {
        em(l, Q);
      }
    while (!0);
    return n && l.shellSuspendCounter++, hn = Ou = null, vt = c, O.H = r, O.A = s, Pe === null && (Dt = null, et = 0, rn()), y;
  }
  function Ad() {
    for (; Pe !== null; ) am(Pe);
  }
  function tm(l, n) {
    var u = vt;
    vt |= 2;
    var c = av(), r = Oc();
    Dt !== l || et !== n ? (Co = null, bd = hl() + 500, Pn(l, n)) : Mo = m(
      l,
      n
    );
    e: do
      try {
        if (gt !== 0 && Pe !== null) {
          n = Pe;
          var s = sa;
          t: switch (gt) {
            case 1:
              gt = 0, sa = null, wo(l, n, s, 1);
              break;
            case 2:
            case 9:
              if (_s(s)) {
                gt = 0, sa = null, nm(n);
                break;
              }
              n = function() {
                gt !== 2 && gt !== 9 || Dt !== l || (gt = 7), ha(l);
              }, s.then(n, n);
              break e;
            case 3:
              gt = 7;
              break e;
            case 4:
              gt = 5;
              break e;
            case 7:
              _s(s) ? (gt = 0, sa = null, nm(n)) : (gt = 0, sa = null, wo(l, n, s, 7));
              break;
            case 5:
              var y = null;
              switch (Pe.tag) {
                case 26:
                  y = Pe.memoizedState;
                case 5:
                case 27:
                  var p = Pe;
                  if (!y || pm(y)) {
                    gt = 0, sa = null;
                    var S = p.sibling;
                    if (S !== null) Pe = S;
                    else {
                      var C = p.return;
                      C !== null ? (Pe = C, sr(C)) : Pe = null;
                    }
                    break t;
                  }
              }
              gt = 0, sa = null, wo(l, n, s, 5);
              break;
            case 6:
              gt = 0, sa = null, wo(l, n, s, 6);
              break;
            case 8:
              Ai(), Jt = 6;
              break e;
            default:
              throw Error(D(462));
          }
        }
        lm();
        break;
      } catch (Q) {
        em(l, Q);
      }
    while (!0);
    return hn = Ou = null, O.H = c, O.A = r, vt = u, Pe !== null ? 0 : (Dt = null, et = 0, rn(), Jt);
  }
  function lm() {
    for (; Pe !== null && !sf(); )
      am(Pe);
  }
  function am(l) {
    var n = Ip(l.alternate, l, xu);
    l.memoizedProps = l.pendingProps, n === null ? sr(l) : Pe = n;
  }
  function nm(l) {
    var n = l, u = n.alternate;
    switch (n.tag) {
      case 15:
      case 0:
        n = _y(
          u,
          n,
          n.pendingProps,
          n.type,
          void 0,
          et
        );
        break;
      case 11:
        n = _y(
          u,
          n,
          n.pendingProps,
          n.type.render,
          n.ref,
          et
        );
        break;
      case 5:
        qs(n);
      default:
        wy(u, n), n = Pe = Ke(n, xu), n = Ip(u, n, xu);
    }
    l.memoizedProps = l.pendingProps, n === null ? sr(l) : Pe = n;
  }
  function wo(l, n, u, c) {
    hn = Ou = null, qs(n), yc = null, To = 0;
    var r = n.return;
    try {
      if ($p(
        l,
        r,
        n,
        u,
        et
      )) {
        Jt = 1, nr(
          l,
          Ea(u, l.current)
        ), Pe = null;
        return;
      }
    } catch (s) {
      if (r !== null) throw Pe = r, s;
      Jt = 1, nr(
        l,
        Ea(u, l.current)
      ), Pe = null;
      return;
    }
    n.flags & 32768 ? (ft || c === 1 ? l = !0 : Mo || (et & 536870912) !== 0 ? l = !1 : (Wn = l = !0, (c === 2 || c === 9 || c === 3 || c === 6) && (c = Oa.current, c !== null && c.tag === 13 && (c.flags |= 16384))), nv(n, l)) : sr(n);
  }
  function sr(l) {
    var n = l;
    do {
      if ((n.flags & 32768) !== 0) {
        nv(
          n,
          Wn
        );
        return;
      }
      l = n.return;
      var u = Ny(
        n.alternate,
        n,
        xu
      );
      if (u !== null) {
        Pe = u;
        return;
      }
      if (n = n.sibling, n !== null) {
        Pe = n;
        return;
      }
      Pe = n = l;
    } while (n !== null);
    Jt === 0 && (Jt = 5);
  }
  function nv(l, n) {
    do {
      var u = Tg(l.alternate, l);
      if (u !== null) {
        u.flags &= 32767, Pe = u;
        return;
      }
      if (u = l.return, u !== null && (u.flags |= 32768, u.subtreeFlags = 0, u.deletions = null), !n && (l = l.sibling, l !== null)) {
        Pe = l;
        return;
      }
      Pe = l = u;
    } while (l !== null);
    Jt = 6, Pe = null;
  }
  function uv(l, n, u, c, r, s, y, p, S) {
    l.cancelPendingCommit = null;
    do
      Od();
    while (_l !== 0);
    if ((vt & 6) !== 0) throw Error(D(327));
    if (n !== null) {
      if (n === l.current) throw Error(D(177));
      if (s = n.lanes | n.childLanes, s |= Hn, Be(
        l,
        u,
        s,
        y,
        p,
        S
      ), l === Dt && (Pe = Dt = null, et = 0), Ho = n, In = l, Cl = u, Sd = s, Td = r, Fy = c, (n.subtreeFlags & 10256) !== 0 || (n.flags & 10256) !== 0 ? (l.callbackNode = null, l.callbackPriority = 0, Rg(On, function() {
        return um(), null;
      })) : (l.callbackNode = null, l.callbackPriority = 0), c = (n.flags & 13878) !== 0, (n.subtreeFlags & 13878) !== 0 || c) {
        c = O.T, O.T = null, r = W.p, W.p = 2, y = vt, vt |= 4;
        try {
          Yy(l, n, u);
        } finally {
          vt = y, W.p = r, O.T = c;
        }
      }
      _l = 1, iv(), dr(), Rd();
    }
  }
  function iv() {
    if (_l === 1) {
      _l = 0;
      var l = In, n = Ho, u = (n.flags & 13878) !== 0;
      if ((n.subtreeFlags & 13878) !== 0 || u) {
        u = O.T, O.T = null;
        var c = W.p;
        W.p = 2;
        var r = vt;
        vt |= 4;
        try {
          fr(n, l);
          var s = Er, y = Jh(l.containerInfo), p = s.focusedElem, S = s.selectionRange;
          if (y !== p && p && p.ownerDocument && Uf(
            p.ownerDocument.documentElement,
            p
          )) {
            if (S !== null && _f(p)) {
              var C = S.start, Q = S.end;
              if (Q === void 0 && (Q = C), "selectionStart" in p)
                p.selectionStart = C, p.selectionEnd = Math.min(
                  Q,
                  p.value.length
                );
              else {
                var $ = p.ownerDocument || document, N = $ && $.defaultView || window;
                if (N.getSelection) {
                  var q = N.getSelection(), Te = p.textContent.length, Ee = Math.min(S.start, Te), ht = S.end === void 0 ? Ee : Math.min(S.end, Te);
                  !q.extend && Ee > ht && (y = ht, ht = Ee, Ee = y);
                  var M = _t(
                    p,
                    Ee
                  ), R = _t(
                    p,
                    ht
                  );
                  if (M && R && (q.rangeCount !== 1 || q.anchorNode !== M.node || q.anchorOffset !== M.offset || q.focusNode !== R.node || q.focusOffset !== R.offset)) {
                    var _ = $.createRange();
                    _.setStart(M.node, M.offset), q.removeAllRanges(), Ee > ht ? (q.addRange(_), q.extend(R.node, R.offset)) : (_.setEnd(R.node, R.offset), q.addRange(_));
                  }
                }
              }
            }
            for ($ = [], q = p; q = q.parentNode; )
              q.nodeType === 1 && $.push({
                element: q,
                left: q.scrollLeft,
                top: q.scrollTop
              });
            for (typeof p.focus == "function" && p.focus(), p = 0; p < $.length; p++) {
              var k = $[p];
              k.element.scrollLeft = k.left, k.element.scrollTop = k.top;
            }
          }
          zr = !!Tr, Er = Tr = null;
        } finally {
          vt = r, W.p = c, O.T = u;
        }
      }
      l.current = n, _l = 2;
    }
  }
  function dr() {
    if (_l === 2) {
      _l = 0;
      var l = In, n = Ho, u = (n.flags & 8772) !== 0;
      if ((n.subtreeFlags & 8772) !== 0 || u) {
        u = O.T, O.T = null;
        var c = W.p;
        W.p = 2;
        var r = vt;
        vt |= 4;
        try {
          jy(l, n.alternate, n);
        } finally {
          vt = r, W.p = c, O.T = u;
        }
      }
      _l = 3;
    }
  }
  function Rd() {
    if (_l === 4 || _l === 3) {
      _l = 0, Pt();
      var l = In, n = Ho, u = Cl, c = Fy;
      (n.subtreeFlags & 10256) !== 0 || (n.flags & 10256) !== 0 ? _l = 5 : (_l = 0, Ho = In = null, cv(l, l.pendingLanes));
      var r = l.pendingLanes;
      if (r === 0 && (Ei = null), an(u), n = n.stateNode, El && typeof El.onCommitFiberRoot == "function")
        try {
          El.onCommitFiberRoot(
            $u,
            n,
            void 0,
            (n.current.flags & 128) === 128
          );
        } catch {
        }
      if (c !== null) {
        n = O.T, r = W.p, W.p = 2, O.T = null;
        try {
          for (var s = l.onRecoverableError, y = 0; y < c.length; y++) {
            var p = c[y];
            s(p.value, {
              componentStack: p.stack
            });
          }
        } finally {
          O.T = n, W.p = r;
        }
      }
      (Cl & 3) !== 0 && Od(), ha(l), r = l.pendingLanes, (u & 4194090) !== 0 && (r & 42) !== 0 ? l === Iy ? xo++ : (xo = 0, Iy = l) : xo = 0, yr(0);
    }
  }
  function cv(l, n) {
    (l.pooledCacheLanes &= n) === 0 && (n = l.pooledCache, n != null && (l.pooledCache = null, Bn(n)));
  }
  function Od(l) {
    return iv(), dr(), Rd(), um();
  }
  function um() {
    if (_l !== 5) return !1;
    var l = In, n = Sd;
    Sd = 0;
    var u = an(Cl), c = O.T, r = W.p;
    try {
      W.p = 32 > u ? 32 : u, O.T = null, u = Td, Td = null;
      var s = In, y = Cl;
      if (_l = 0, Ho = In = null, Cl = 0, (vt & 6) !== 0) throw Error(D(331));
      var p = vt;
      if (vt |= 4, Zy(s.current), Xy(
        s,
        s.current,
        y,
        u
      ), vt = p, yr(0, !1), El && typeof El.onPostCommitFiberRoot == "function")
        try {
          El.onPostCommitFiberRoot($u, s);
        } catch {
        }
      return !0;
    } finally {
      W.p = r, O.T = c, cv(l, n);
    }
  }
  function im(l, n, u) {
    n = Ea(u, n), n = My(l.stateNode, n, 2), l = jn(l, n, 2), l !== null && (Ce(l, 2), ha(l));
  }
  function bt(l, n, u) {
    if (l.tag === 3)
      im(l, l, u);
    else
      for (; n !== null; ) {
        if (n.tag === 3) {
          im(
            n,
            l,
            u
          );
          break;
        } else if (n.tag === 1) {
          var c = n.stateNode;
          if (typeof n.type.getDerivedStateFromError == "function" || typeof c.componentDidCatch == "function" && (Ei === null || !Ei.has(c))) {
            l = Ea(u, l), u = Uy(2), c = jn(n, u, 2), c !== null && (ra(
              u,
              c,
              n,
              l
            ), Ce(c, 2), ha(c));
            break;
          }
        }
        n = n.return;
      }
  }
  function Dd(l, n, u) {
    var c = l.pingCache;
    if (c === null) {
      c = l.pingCache = new tv();
      var r = /* @__PURE__ */ new Set();
      c.set(n, r);
    } else
      r = c.get(n), r === void 0 && (r = /* @__PURE__ */ new Set(), c.set(n, r));
    r.has(u) || (ky = !0, r.add(u), l = cm.bind(null, l, n, u), n.then(l, l));
  }
  function cm(l, n, u) {
    var c = l.pingCache;
    c !== null && c.delete(n), l.pingedLanes |= l.suspendedLanes & u, l.warmLanes &= ~u, Dt === l && (et & u) === u && (Jt === 4 || Jt === 3 && (et & 62914560) === et && 300 > hl() - Wy ? (vt & 2) === 0 && Pn(l, 0) : Fn |= u, Uo === et && (Uo = 0)), ha(l);
  }
  function om(l, n) {
    n === 0 && (n = ne()), l = xn(l, n), l !== null && (Ce(l, n), ha(l));
  }
  function Eg(l) {
    var n = l.memoizedState, u = 0;
    n !== null && (u = n.retryLane), om(l, u);
  }
  function Ag(l, n) {
    var u = 0;
    switch (l.tag) {
      case 13:
        var c = l.stateNode, r = l.memoizedState;
        r !== null && (u = r.retryLane);
        break;
      case 19:
        c = l.stateNode;
        break;
      case 22:
        c = l.stateNode._retryCache;
        break;
      default:
        throw Error(D(314));
    }
    c !== null && c.delete(n), om(l, u);
  }
  function Rg(l, n) {
    return Rn(l, n);
  }
  var zd = null, Ri = null, hr = !1, Bo = !1, Md = !1, Oi = 0;
  function ha(l) {
    l !== Ri && l.next === null && (Ri === null ? zd = Ri = l : Ri = Ri.next = l), Bo = !0, hr || (hr = !0, rv());
  }
  function yr(l, n) {
    if (!Md && Bo) {
      Md = !0;
      do
        for (var u = !1, c = zd; c !== null; ) {
          if (l !== 0) {
            var r = c.pendingLanes;
            if (r === 0) var s = 0;
            else {
              var y = c.suspendedLanes, p = c.pingedLanes;
              s = (1 << 31 - Al(42 | l) + 1) - 1, s &= r & ~(y & ~p), s = s & 201326741 ? s & 201326741 | 1 : s ? s | 2 : 0;
            }
            s !== 0 && (u = !0, pr(c, s));
          } else
            s = et, s = ln(
              c,
              c === Dt ? s : 0,
              c.cancelPendingCommit !== null || c.timeoutHandle !== -1
            ), (s & 3) === 0 || m(c, s) || (u = !0, pr(c, s));
          c = c.next;
        }
      while (u);
      Md = !1;
    }
  }
  function ov() {
    mr();
  }
  function mr() {
    Bo = hr = !1;
    var l = 0;
    Oi !== 0 && (Yu() && (l = Oi), Oi = 0);
    for (var n = hl(), u = null, c = zd; c !== null; ) {
      var r = c.next, s = fm(c, n);
      s === 0 ? (c.next = null, u === null ? zd = r : u.next = r, r === null && (Ri = u)) : (u = c, (l !== 0 || (s & 3) !== 0) && (Bo = !0)), c = r;
    }
    yr(l);
  }
  function fm(l, n) {
    for (var u = l.suspendedLanes, c = l.pingedLanes, r = l.expirationTimes, s = l.pendingLanes & -62914561; 0 < s; ) {
      var y = 31 - Al(s), p = 1 << y, S = r[y];
      S === -1 ? ((p & u) === 0 || (p & c) !== 0) && (r[y] = z(p, n)) : S <= n && (l.expiredLanes |= p), s &= ~p;
    }
    if (n = Dt, u = et, u = ln(
      l,
      l === n ? u : 0,
      l.cancelPendingCommit !== null || l.timeoutHandle !== -1
    ), c = l.callbackNode, u === 0 || l === n && (gt === 2 || gt === 9) || l.cancelPendingCommit !== null)
      return c !== null && c !== null && Zc(c), l.callbackNode = null, l.callbackPriority = 0;
    if ((u & 3) === 0 || m(l, u)) {
      if (n = u & -u, n === l.callbackPriority) return n;
      switch (c !== null && Zc(c), an(u)) {
        case 2:
        case 8:
          u = Qe;
          break;
        case 32:
          u = On;
          break;
        case 268435456:
          u = mu;
          break;
        default:
          u = On;
      }
      return c = fv.bind(null, l), u = Rn(u, c), l.callbackPriority = n, l.callbackNode = u, n;
    }
    return c !== null && c !== null && Zc(c), l.callbackPriority = 2, l.callbackNode = null, 2;
  }
  function fv(l, n) {
    if (_l !== 0 && _l !== 5)
      return l.callbackNode = null, l.callbackPriority = 0, null;
    var u = l.callbackNode;
    if (Od() && l.callbackNode !== u)
      return null;
    var c = et;
    return c = ln(
      l,
      l === Dt ? c : 0,
      l.cancelPendingCommit !== null || l.timeoutHandle !== -1
    ), c === 0 ? null : (No(l, c, n), fm(l, hl()), l.callbackNode != null && l.callbackNode === u ? fv.bind(null, l) : null);
  }
  function pr(l, n) {
    if (Od()) return null;
    No(l, n, !0);
  }
  function rv() {
    Mg(function() {
      (vt & 6) !== 0 ? Rn(
        Fr,
        ov
      ) : mr();
    });
  }
  function zc() {
    return Oi === 0 && (Oi = te()), Oi;
  }
  function Ud(l) {
    return l == null || typeof l == "symbol" || typeof l == "boolean" ? null : typeof l == "function" ? l : Tf("" + l);
  }
  function vr(l, n) {
    var u = n.ownerDocument.createElement("input");
    return u.name = n.name, u.value = n.value, l.id && u.setAttribute("form", l.id), n.parentNode.insertBefore(u, n), l = new FormData(l), u.parentNode.removeChild(u), l;
  }
  function sv(l, n, u, c, r) {
    if (n === "submit" && u && u.stateNode === r) {
      var s = Ud(
        (r[Zl] || null).action
      ), y = c.submitter;
      y && (n = (n = y[Zl] || null) ? Ud(n.formAction) : y.getAttribute("formAction"), n !== null && (s = n, y = null));
      var p = new ss(
        "action",
        "action",
        null,
        c,
        r
      );
      l.push({
        event: p,
        listeners: [
          {
            instance: null,
            listener: function() {
              if (c.defaultPrevented) {
                if (Oi !== 0) {
                  var S = y ? vr(r, y) : new FormData(r);
                  Fs(
                    u,
                    {
                      pending: !0,
                      data: S,
                      method: r.method,
                      action: s
                    },
                    null,
                    S
                  );
                }
              } else
                typeof s == "function" && (p.preventDefault(), S = y ? vr(r, y) : new FormData(r), Fs(
                  u,
                  {
                    pending: !0,
                    data: S,
                    method: r.method,
                    action: s
                  },
                  s,
                  S
                ));
            },
            currentTarget: r
          }
        ]
      });
    }
  }
  for (var kt = 0; kt < ao.length; kt++) {
    var gr = ao[kt], Og = gr.toLowerCase(), Ze = gr[0].toUpperCase() + gr.slice(1);
    Ya(
      Og,
      "on" + Ze
    );
  }
  Ya(Np, "onAnimationEnd"), Ya(kh, "onAnimationIteration"), Ya(wp, "onAnimationStart"), Ya("dblclick", "onDoubleClick"), Ya("focusin", "onFocus"), Ya("focusout", "onBlur"), Ya($h, "onTransitionRun"), Ya(Ss, "onTransitionStart"), Ya(Bp, "onTransitionCancel"), Ya(Wh, "onTransitionEnd"), Fu("onMouseEnter", ["mouseout", "mouseover"]), Fu("onMouseLeave", ["mouseout", "mouseover"]), Fu("onPointerEnter", ["pointerout", "pointerover"]), Fu("onPointerLeave", ["pointerout", "pointerover"]), Wu(
    "onChange",
    "change click focusin focusout input keydown keyup selectionchange".split(" ")
  ), Wu(
    "onSelect",
    "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
      " "
    )
  ), Wu("onBeforeInput", [
    "compositionend",
    "keypress",
    "textInput",
    "paste"
  ]), Wu(
    "onCompositionEnd",
    "compositionend focusout keydown keypress keyup mousedown".split(" ")
  ), Wu(
    "onCompositionStart",
    "compositionstart focusout keydown keypress keyup mousedown".split(" ")
  ), Wu(
    "onCompositionUpdate",
    "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
  );
  var br = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
    " "
  ), Di = new Set(
    "beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(br)
  );
  function Mc(l, n) {
    n = (n & 4) !== 0;
    for (var u = 0; u < l.length; u++) {
      var c = l[u], r = c.event;
      c = c.listeners;
      e: {
        var s = void 0;
        if (n)
          for (var y = c.length - 1; 0 <= y; y--) {
            var p = c[y], S = p.instance, C = p.currentTarget;
            if (p = p.listener, S !== s && r.isPropagationStopped())
              break e;
            s = p, r.currentTarget = C;
            try {
              s(r);
            } catch (Q) {
              lr(Q);
            }
            r.currentTarget = null, s = S;
          }
        else
          for (y = 0; y < c.length; y++) {
            if (p = c[y], S = p.instance, C = p.currentTarget, p = p.listener, S !== s && r.isPropagationStopped())
              break e;
            s = p, r.currentTarget = C;
            try {
              s(r);
            } catch (Q) {
              lr(Q);
            }
            r.currentTarget = null, s = S;
          }
      }
    }
  }
  function Ye(l, n) {
    var u = n[es];
    u === void 0 && (u = n[es] = /* @__PURE__ */ new Set());
    var c = l + "__bubble";
    u.has(c) || (_d(n, l, 2, !1), u.add(c));
  }
  function qo(l, n, u) {
    var c = 0;
    n && (c |= 4), _d(
      u,
      l,
      c,
      n
    );
  }
  var Yo = "_reactListening" + Math.random().toString(36).slice(2);
  function rm(l) {
    if (!l[Yo]) {
      l[Yo] = !0, pf.forEach(function(u) {
        u !== "selectionchange" && (Di.has(u) || qo(u, !1, l), qo(u, !0, l));
      });
      var n = l.nodeType === 9 ? l : l.ownerDocument;
      n === null || n[Yo] || (n[Yo] = !0, qo("selectionchange", !1, n));
    }
  }
  function _d(l, n, u, c) {
    switch (Om(n)) {
      case 2:
        var r = Sv;
        break;
      case 8:
        r = Tv;
        break;
      default:
        r = Am;
    }
    u = r.bind(
      null,
      n,
      u,
      l
    ), r = void 0, !os || n !== "touchstart" && n !== "touchmove" && n !== "wheel" || (r = !0), c ? r !== void 0 ? l.addEventListener(n, u, {
      capture: !0,
      passive: r
    }) : l.addEventListener(n, u, !0) : r !== void 0 ? l.addEventListener(n, u, {
      passive: r
    }) : l.addEventListener(n, u, !1);
  }
  function $a(l, n, u, c, r) {
    var s = c;
    if ((n & 1) === 0 && (n & 2) === 0 && c !== null)
      e: for (; ; ) {
        if (c === null) return;
        var y = c.tag;
        if (y === 3 || y === 4) {
          var p = c.stateNode.containerInfo;
          if (p === r) break;
          if (y === 4)
            for (y = c.return; y !== null; ) {
              var S = y.tag;
              if ((S === 3 || S === 4) && y.stateNode.containerInfo === r)
                return;
              y = y.return;
            }
          for (; p !== null; ) {
            if (y = Ol(p), y === null) return;
            if (S = y.tag, S === 5 || S === 6 || S === 26 || S === 27) {
              c = s = y;
              continue e;
            }
            p = p.parentNode;
          }
        }
        c = c.return;
      }
    eo(function() {
      var C = s, Q = cs(u), $ = [];
      e: {
        var N = Fh.get(l);
        if (N !== void 0) {
          var q = ss, Te = l;
          switch (l) {
            case "keypress":
              if (Dl(u) === 0) break e;
            case "keydown":
            case "keyup":
              q = nn;
              break;
            case "focusin":
              Te = "focus", q = Hh;
              break;
            case "focusout":
              Te = "blur", q = Hh;
              break;
            case "beforeblur":
            case "afterblur":
              q = Hh;
              break;
            case "click":
              if (u.button === 2) break e;
            case "auxclick":
            case "dblclick":
            case "mousedown":
            case "mousemove":
            case "mouseup":
            case "mouseout":
            case "mouseover":
            case "contextmenu":
              q = Ch;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              q = Op;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              q = wh;
              break;
            case Np:
            case kh:
            case wp:
              q = vg;
              break;
            case Wh:
              q = _p;
              break;
            case "scroll":
            case "scrollend":
              q = Ap;
              break;
            case "wheel":
              q = Fi;
              break;
            case "copy":
            case "cut":
            case "paste":
              q = Rf;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              q = Of;
              break;
            case "toggle":
            case "beforetoggle":
              q = Cp;
          }
          var Ee = (n & 4) !== 0, ht = !Ee && (l === "scroll" || l === "scrollend"), M = Ee ? N !== null ? N + "Capture" : null : N;
          Ee = [];
          for (var R = C, _; R !== null; ) {
            var k = R;
            if (_ = k.stateNode, k = k.tag, k !== 5 && k !== 26 && k !== 27 || _ === null || M === null || (k = Ji(R, M), k != null && Ee.push(
              Bu(R, k, _)
            )), ht) break;
            R = R.return;
          }
          0 < Ee.length && (N = new q(
            N,
            Te,
            null,
            u,
            Q
          ), $.push({ event: N, listeners: Ee }));
        }
      }
      if ((n & 7) === 0) {
        e: {
          if (N = l === "mouseover" || l === "pointerover", q = l === "mouseout" || l === "pointerout", N && u !== Ki && (Te = u.relatedTarget || u.fromElement) && (Ol(Te) || Te[$c]))
            break e;
          if ((q || N) && (N = Q.window === Q ? Q : (N = Q.ownerDocument) ? N.defaultView || N.parentWindow : window, q ? (Te = u.relatedTarget || u.toElement, q = C, Te = Te ? Ol(Te) : null, Te !== null && (ht = ve(Te), Ee = Te.tag, Te !== ht || Ee !== 5 && Ee !== 27 && Ee !== 6) && (Te = null)) : (q = null, Te = C), q !== Te)) {
            if (Ee = Ch, k = "onMouseLeave", M = "onMouseEnter", R = "mouse", (l === "pointerout" || l === "pointerover") && (Ee = Of, k = "onPointerLeave", M = "onPointerEnter", R = "pointer"), ht = q == null ? N : mf(q), _ = Te == null ? N : mf(Te), N = new Ee(
              k,
              R + "leave",
              q,
              u,
              Q
            ), N.target = ht, N.relatedTarget = _, k = null, Ol(Q) === C && (Ee = new Ee(
              M,
              R + "enter",
              Te,
              u,
              Q
            ), Ee.target = _, Ee.relatedTarget = ht, k = Ee), ht = k, q && Te)
              t: {
                for (Ee = q, M = Te, R = 0, _ = Ee; _; _ = zi(_))
                  R++;
                for (_ = 0, k = M; k; k = zi(k))
                  _++;
                for (; 0 < R - _; )
                  Ee = zi(Ee), R--;
                for (; 0 < _ - R; )
                  M = zi(M), _--;
                for (; R--; ) {
                  if (Ee === M || M !== null && Ee === M.alternate)
                    break t;
                  Ee = zi(Ee), M = zi(M);
                }
                Ee = null;
              }
            else Ee = null;
            q !== null && Sr(
              $,
              N,
              q,
              Ee,
              !1
            ), Te !== null && ht !== null && Sr(
              $,
              ht,
              Te,
              Ee,
              !0
            );
          }
        }
        e: {
          if (N = C ? mf(C) : window, q = N.nodeName && N.nodeName.toLowerCase(), q === "select" || q === "input" && N.type === "file")
            var se = Lh;
          else if (ps(N))
            if (Vh)
              se = Zh;
            else {
              se = ai;
              var Je = gs;
            }
          else
            q = N.nodeName, !q || q.toLowerCase() !== "input" || N.type !== "checkbox" && N.type !== "radio" ? C && Zi(C.elementType) && (se = Lh) : se = Tu;
          if (se && (se = se(l, C))) {
            vs(
              $,
              se,
              u,
              Q
            );
            break e;
          }
          Je && Je(l, N, C), l === "focusout" && C && N.type === "number" && C.memoizedProps.value != null && bf(N, "number", N.value);
        }
        switch (Je = C ? mf(C) : window, l) {
          case "focusin":
            (ps(Je) || Je.contentEditable === "true") && (_n = Je, on = C, ii = null);
            break;
          case "focusout":
            ii = on = _n = null;
            break;
          case "mousedown":
            lc = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            lc = !1, bs($, u, Q);
            break;
          case "selectionchange":
            if (tc) break;
          case "keydown":
          case "keyup":
            bs($, u, Q);
        }
        var be;
        if (Df)
          e: {
            switch (l) {
              case "compositionstart":
                var Oe = "onCompositionStart";
                break e;
              case "compositionend":
                Oe = "onCompositionEnd";
                break e;
              case "compositionupdate":
                Oe = "onCompositionUpdate";
                break e;
            }
            Oe = void 0;
          }
        else
          li ? Mf(l, u) && (Oe = "onCompositionEnd") : l === "keydown" && u.keyCode === 229 && (Oe = "onCompositionStart");
        Oe && (Mn && u.locale !== "ko" && (li || Oe !== "onCompositionStart" ? Oe === "onCompositionEnd" && li && (be = Uh()) : (bu = Q, to = "value" in bu ? bu.value : bu.textContent, li = !0)), Je = jo(C, Oe), 0 < Je.length && (Oe = new xh(
          Oe,
          l,
          null,
          u,
          Q
        ), $.push({ event: Oe, listeners: Je }), be ? Oe.data = be : (be = ti(u), be !== null && (Oe.data = be)))), (be = qh ? jh(l, u) : Ii(l, u)) && (Oe = jo(C, "onBeforeInput"), 0 < Oe.length && (Je = new xh(
          "onBeforeInput",
          "beforeinput",
          null,
          u,
          Q
        ), $.push({
          event: Je,
          listeners: Oe
        }), Je.data = be)), sv(
          $,
          l,
          C,
          u,
          Q
        );
      }
      Mc($, n);
    });
  }
  function Bu(l, n, u) {
    return {
      instance: l,
      listener: n,
      currentTarget: u
    };
  }
  function jo(l, n) {
    for (var u = n + "Capture", c = []; l !== null; ) {
      var r = l, s = r.stateNode;
      if (r = r.tag, r !== 5 && r !== 26 && r !== 27 || s === null || (r = Ji(l, u), r != null && c.unshift(
        Bu(l, r, s)
      ), r = Ji(l, n), r != null && c.push(
        Bu(l, r, s)
      )), l.tag === 3) return c;
      l = l.return;
    }
    return [];
  }
  function zi(l) {
    if (l === null) return null;
    do
      l = l.return;
    while (l && l.tag !== 5 && l.tag !== 27);
    return l || null;
  }
  function Sr(l, n, u, c, r) {
    for (var s = n._reactName, y = []; u !== null && u !== c; ) {
      var p = u, S = p.alternate, C = p.stateNode;
      if (p = p.tag, S !== null && S === c) break;
      p !== 5 && p !== 26 && p !== 27 || C === null || (S = C, r ? (C = Ji(u, s), C != null && y.unshift(
        Bu(u, C, S)
      )) : r || (C = Ji(u, s), C != null && y.push(
        Bu(u, C, S)
      ))), u = u.return;
    }
    y.length !== 0 && l.push({ event: n, listeners: y });
  }
  var Ma = /\r\n?/g, sm = /\u0000|\uFFFD/g;
  function dv(l) {
    return (typeof l == "string" ? l : "" + l).replace(Ma, `
`).replace(sm, "");
  }
  function dm(l, n) {
    return n = dv(n), dv(l) === n;
  }
  function Cd() {
  }
  function He(l, n, u, c, r, s) {
    switch (u) {
      case "children":
        typeof c == "string" ? n === "body" || n === "textarea" && c === "" || Fc(l, c) : (typeof c == "number" || typeof c == "bigint") && n !== "body" && Fc(l, "" + c);
        break;
      case "className":
        vf(l, "class", c);
        break;
      case "tabIndex":
        vf(l, "tabindex", c);
        break;
      case "dir":
      case "role":
      case "viewBox":
      case "width":
      case "height":
        vf(l, u, c);
        break;
      case "style":
        Sf(l, c, s);
        break;
      case "data":
        if (n !== "object") {
          vf(l, "data", c);
          break;
        }
      case "src":
      case "href":
        if (c === "" && (n !== "a" || u !== "href")) {
          l.removeAttribute(u);
          break;
        }
        if (c == null || typeof c == "function" || typeof c == "symbol" || typeof c == "boolean") {
          l.removeAttribute(u);
          break;
        }
        c = Tf("" + c), l.setAttribute(u, c);
        break;
      case "action":
      case "formAction":
        if (typeof c == "function") {
          l.setAttribute(
            u,
            "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')"
          );
          break;
        } else
          typeof s == "function" && (u === "formAction" ? (n !== "input" && He(l, n, "name", r.name, r, null), He(
            l,
            n,
            "formEncType",
            r.formEncType,
            r,
            null
          ), He(
            l,
            n,
            "formMethod",
            r.formMethod,
            r,
            null
          ), He(
            l,
            n,
            "formTarget",
            r.formTarget,
            r,
            null
          )) : (He(l, n, "encType", r.encType, r, null), He(l, n, "method", r.method, r, null), He(l, n, "target", r.target, r, null)));
        if (c == null || typeof c == "symbol" || typeof c == "boolean") {
          l.removeAttribute(u);
          break;
        }
        c = Tf("" + c), l.setAttribute(u, c);
        break;
      case "onClick":
        c != null && (l.onclick = Cd);
        break;
      case "onScroll":
        c != null && Ye("scroll", l);
        break;
      case "onScrollEnd":
        c != null && Ye("scrollend", l);
        break;
      case "dangerouslySetInnerHTML":
        if (c != null) {
          if (typeof c != "object" || !("__html" in c))
            throw Error(D(61));
          if (u = c.__html, u != null) {
            if (r.children != null) throw Error(D(60));
            l.innerHTML = u;
          }
        }
        break;
      case "multiple":
        l.multiple = c && typeof c != "function" && typeof c != "symbol";
        break;
      case "muted":
        l.muted = c && typeof c != "function" && typeof c != "symbol";
        break;
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
      case "defaultValue":
      case "defaultChecked":
      case "innerHTML":
      case "ref":
        break;
      case "autoFocus":
        break;
      case "xlinkHref":
        if (c == null || typeof c == "function" || typeof c == "boolean" || typeof c == "symbol") {
          l.removeAttribute("xlink:href");
          break;
        }
        u = Tf("" + c), l.setAttributeNS(
          "http://www.w3.org/1999/xlink",
          "xlink:href",
          u
        );
        break;
      case "contentEditable":
      case "spellCheck":
      case "draggable":
      case "value":
      case "autoReverse":
      case "externalResourcesRequired":
      case "focusable":
      case "preserveAlpha":
        c != null && typeof c != "function" && typeof c != "symbol" ? l.setAttribute(u, "" + c) : l.removeAttribute(u);
        break;
      case "inert":
      case "allowFullScreen":
      case "async":
      case "autoPlay":
      case "controls":
      case "default":
      case "defer":
      case "disabled":
      case "disablePictureInPicture":
      case "disableRemotePlayback":
      case "formNoValidate":
      case "hidden":
      case "loop":
      case "noModule":
      case "noValidate":
      case "open":
      case "playsInline":
      case "readOnly":
      case "required":
      case "reversed":
      case "scoped":
      case "seamless":
      case "itemScope":
        c && typeof c != "function" && typeof c != "symbol" ? l.setAttribute(u, "") : l.removeAttribute(u);
        break;
      case "capture":
      case "download":
        c === !0 ? l.setAttribute(u, "") : c !== !1 && c != null && typeof c != "function" && typeof c != "symbol" ? l.setAttribute(u, c) : l.removeAttribute(u);
        break;
      case "cols":
      case "rows":
      case "size":
      case "span":
        c != null && typeof c != "function" && typeof c != "symbol" && !isNaN(c) && 1 <= c ? l.setAttribute(u, c) : l.removeAttribute(u);
        break;
      case "rowSpan":
      case "start":
        c == null || typeof c == "function" || typeof c == "symbol" || isNaN(c) ? l.removeAttribute(u) : l.setAttribute(u, c);
        break;
      case "popover":
        Ye("beforetoggle", l), Ye("toggle", l), vu(l, "popover", c);
        break;
      case "xlinkActuate":
        Dn(
          l,
          "http://www.w3.org/1999/xlink",
          "xlink:actuate",
          c
        );
        break;
      case "xlinkArcrole":
        Dn(
          l,
          "http://www.w3.org/1999/xlink",
          "xlink:arcrole",
          c
        );
        break;
      case "xlinkRole":
        Dn(
          l,
          "http://www.w3.org/1999/xlink",
          "xlink:role",
          c
        );
        break;
      case "xlinkShow":
        Dn(
          l,
          "http://www.w3.org/1999/xlink",
          "xlink:show",
          c
        );
        break;
      case "xlinkTitle":
        Dn(
          l,
          "http://www.w3.org/1999/xlink",
          "xlink:title",
          c
        );
        break;
      case "xlinkType":
        Dn(
          l,
          "http://www.w3.org/1999/xlink",
          "xlink:type",
          c
        );
        break;
      case "xmlBase":
        Dn(
          l,
          "http://www.w3.org/XML/1998/namespace",
          "xml:base",
          c
        );
        break;
      case "xmlLang":
        Dn(
          l,
          "http://www.w3.org/XML/1998/namespace",
          "xml:lang",
          c
        );
        break;
      case "xmlSpace":
        Dn(
          l,
          "http://www.w3.org/XML/1998/namespace",
          "xml:space",
          c
        );
        break;
      case "is":
        vu(l, "is", c);
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        (!(2 < u.length) || u[0] !== "o" && u[0] !== "O" || u[1] !== "n" && u[1] !== "N") && (u = yg.get(u) || u, vu(l, u, c));
    }
  }
  function j(l, n, u, c, r, s) {
    switch (u) {
      case "style":
        Sf(l, c, s);
        break;
      case "dangerouslySetInnerHTML":
        if (c != null) {
          if (typeof c != "object" || !("__html" in c))
            throw Error(D(61));
          if (u = c.__html, u != null) {
            if (r.children != null) throw Error(D(60));
            l.innerHTML = u;
          }
        }
        break;
      case "children":
        typeof c == "string" ? Fc(l, c) : (typeof c == "number" || typeof c == "bigint") && Fc(l, "" + c);
        break;
      case "onScroll":
        c != null && Ye("scroll", l);
        break;
      case "onScrollEnd":
        c != null && Ye("scrollend", l);
        break;
      case "onClick":
        c != null && (l.onclick = Cd);
        break;
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
      case "innerHTML":
      case "ref":
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        if (!Sa.hasOwnProperty(u))
          e: {
            if (u[0] === "o" && u[1] === "n" && (r = u.endsWith("Capture"), n = u.slice(2, r ? u.length - 7 : void 0), s = l[Zl] || null, s = s != null ? s[u] : null, typeof s == "function" && l.removeEventListener(n, s, r), typeof c == "function")) {
              typeof s != "function" && s !== null && (u in l ? l[u] = null : l.hasAttribute(u) && l.removeAttribute(u)), l.addEventListener(n, c, r);
              break e;
            }
            u in l ? l[u] = c : c === !0 ? l.setAttribute(u, "") : vu(l, u, c);
          }
    }
  }
  function Me(l, n, u) {
    switch (n) {
      case "div":
      case "span":
      case "svg":
      case "path":
      case "a":
      case "g":
      case "p":
      case "li":
        break;
      case "img":
        Ye("error", l), Ye("load", l);
        var c = !1, r = !1, s;
        for (s in u)
          if (u.hasOwnProperty(s)) {
            var y = u[s];
            if (y != null)
              switch (s) {
                case "src":
                  c = !0;
                  break;
                case "srcSet":
                  r = !0;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  throw Error(D(137, n));
                default:
                  He(l, n, s, y, u, null);
              }
          }
        r && He(l, n, "srcSet", u.srcSet, u, null), c && He(l, n, "src", u.src, u, null);
        return;
      case "input":
        Ye("invalid", l);
        var p = s = y = r = null, S = null, C = null;
        for (c in u)
          if (u.hasOwnProperty(c)) {
            var Q = u[c];
            if (Q != null)
              switch (c) {
                case "name":
                  r = Q;
                  break;
                case "type":
                  y = Q;
                  break;
                case "checked":
                  S = Q;
                  break;
                case "defaultChecked":
                  C = Q;
                  break;
                case "value":
                  s = Q;
                  break;
                case "defaultValue":
                  p = Q;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  if (Q != null)
                    throw Error(D(137, n));
                  break;
                default:
                  He(l, n, c, Q, u, null);
              }
          }
        us(
          l,
          s,
          p,
          S,
          C,
          y,
          r,
          !1
        ), Pu(l);
        return;
      case "select":
        Ye("invalid", l), c = y = s = null;
        for (r in u)
          if (u.hasOwnProperty(r) && (p = u[r], p != null))
            switch (r) {
              case "value":
                s = p;
                break;
              case "defaultValue":
                y = p;
                break;
              case "multiple":
                c = p;
              default:
                He(l, n, r, p, u, null);
            }
        n = s, u = y, l.multiple = !!c, n != null ? Qi(l, !!c, n, !1) : u != null && Qi(l, !!c, u, !0);
        return;
      case "textarea":
        Ye("invalid", l), s = r = c = null;
        for (y in u)
          if (u.hasOwnProperty(y) && (p = u[y], p != null))
            switch (y) {
              case "value":
                c = p;
                break;
              case "defaultValue":
                r = p;
                break;
              case "children":
                s = p;
                break;
              case "dangerouslySetInnerHTML":
                if (p != null) throw Error(D(91));
                break;
              default:
                He(l, n, y, p, u, null);
            }
        zh(l, c, r, s), Pu(l);
        return;
      case "option":
        for (S in u)
          if (u.hasOwnProperty(S) && (c = u[S], c != null))
            switch (S) {
              case "selected":
                l.selected = c && typeof c != "function" && typeof c != "symbol";
                break;
              default:
                He(l, n, S, c, u, null);
            }
        return;
      case "dialog":
        Ye("beforetoggle", l), Ye("toggle", l), Ye("cancel", l), Ye("close", l);
        break;
      case "iframe":
      case "object":
        Ye("load", l);
        break;
      case "video":
      case "audio":
        for (c = 0; c < br.length; c++)
          Ye(br[c], l);
        break;
      case "image":
        Ye("error", l), Ye("load", l);
        break;
      case "details":
        Ye("toggle", l);
        break;
      case "embed":
      case "source":
      case "link":
        Ye("error", l), Ye("load", l);
      case "area":
      case "base":
      case "br":
      case "col":
      case "hr":
      case "keygen":
      case "meta":
      case "param":
      case "track":
      case "wbr":
      case "menuitem":
        for (C in u)
          if (u.hasOwnProperty(C) && (c = u[C], c != null))
            switch (C) {
              case "children":
              case "dangerouslySetInnerHTML":
                throw Error(D(137, n));
              default:
                He(l, n, C, c, u, null);
            }
        return;
      default:
        if (Zi(n)) {
          for (Q in u)
            u.hasOwnProperty(Q) && (c = u[Q], c !== void 0 && j(
              l,
              n,
              Q,
              c,
              u,
              void 0
            ));
          return;
        }
    }
    for (p in u)
      u.hasOwnProperty(p) && (c = u[p], c != null && He(l, n, p, c, u, null));
  }
  function Dg(l, n, u, c) {
    switch (n) {
      case "div":
      case "span":
      case "svg":
      case "path":
      case "a":
      case "g":
      case "p":
      case "li":
        break;
      case "input":
        var r = null, s = null, y = null, p = null, S = null, C = null, Q = null;
        for (q in u) {
          var $ = u[q];
          if (u.hasOwnProperty(q) && $ != null)
            switch (q) {
              case "checked":
                break;
              case "value":
                break;
              case "defaultValue":
                S = $;
              default:
                c.hasOwnProperty(q) || He(l, n, q, null, c, $);
            }
        }
        for (var N in c) {
          var q = c[N];
          if ($ = u[N], c.hasOwnProperty(N) && (q != null || $ != null))
            switch (N) {
              case "type":
                s = q;
                break;
              case "name":
                r = q;
                break;
              case "checked":
                C = q;
                break;
              case "defaultChecked":
                Q = q;
                break;
              case "value":
                y = q;
                break;
              case "defaultValue":
                p = q;
                break;
              case "children":
              case "dangerouslySetInnerHTML":
                if (q != null)
                  throw Error(D(137, n));
                break;
              default:
                q !== $ && He(
                  l,
                  n,
                  N,
                  q,
                  c,
                  $
                );
            }
        }
        ns(
          l,
          y,
          p,
          S,
          C,
          Q,
          s,
          r
        );
        return;
      case "select":
        q = y = p = N = null;
        for (s in u)
          if (S = u[s], u.hasOwnProperty(s) && S != null)
            switch (s) {
              case "value":
                break;
              case "multiple":
                q = S;
              default:
                c.hasOwnProperty(s) || He(
                  l,
                  n,
                  s,
                  null,
                  c,
                  S
                );
            }
        for (r in c)
          if (s = c[r], S = u[r], c.hasOwnProperty(r) && (s != null || S != null))
            switch (r) {
              case "value":
                N = s;
                break;
              case "defaultValue":
                p = s;
                break;
              case "multiple":
                y = s;
              default:
                s !== S && He(
                  l,
                  n,
                  r,
                  s,
                  c,
                  S
                );
            }
        n = p, u = y, c = q, N != null ? Qi(l, !!u, N, !1) : !!c != !!u && (n != null ? Qi(l, !!u, n, !0) : Qi(l, !!u, u ? [] : "", !1));
        return;
      case "textarea":
        q = N = null;
        for (p in u)
          if (r = u[p], u.hasOwnProperty(p) && r != null && !c.hasOwnProperty(p))
            switch (p) {
              case "value":
                break;
              case "children":
                break;
              default:
                He(l, n, p, null, c, r);
            }
        for (y in c)
          if (r = c[y], s = u[y], c.hasOwnProperty(y) && (r != null || s != null))
            switch (y) {
              case "value":
                N = r;
                break;
              case "defaultValue":
                q = r;
                break;
              case "children":
                break;
              case "dangerouslySetInnerHTML":
                if (r != null) throw Error(D(91));
                break;
              default:
                r !== s && He(l, n, y, r, c, s);
            }
        Dh(l, N, q);
        return;
      case "option":
        for (var Te in u)
          if (N = u[Te], u.hasOwnProperty(Te) && N != null && !c.hasOwnProperty(Te))
            switch (Te) {
              case "selected":
                l.selected = !1;
                break;
              default:
                He(
                  l,
                  n,
                  Te,
                  null,
                  c,
                  N
                );
            }
        for (S in c)
          if (N = c[S], q = u[S], c.hasOwnProperty(S) && N !== q && (N != null || q != null))
            switch (S) {
              case "selected":
                l.selected = N && typeof N != "function" && typeof N != "symbol";
                break;
              default:
                He(
                  l,
                  n,
                  S,
                  N,
                  c,
                  q
                );
            }
        return;
      case "img":
      case "link":
      case "area":
      case "base":
      case "br":
      case "col":
      case "embed":
      case "hr":
      case "keygen":
      case "meta":
      case "param":
      case "source":
      case "track":
      case "wbr":
      case "menuitem":
        for (var Ee in u)
          N = u[Ee], u.hasOwnProperty(Ee) && N != null && !c.hasOwnProperty(Ee) && He(l, n, Ee, null, c, N);
        for (C in c)
          if (N = c[C], q = u[C], c.hasOwnProperty(C) && N !== q && (N != null || q != null))
            switch (C) {
              case "children":
              case "dangerouslySetInnerHTML":
                if (N != null)
                  throw Error(D(137, n));
                break;
              default:
                He(
                  l,
                  n,
                  C,
                  N,
                  c,
                  q
                );
            }
        return;
      default:
        if (Zi(n)) {
          for (var ht in u)
            N = u[ht], u.hasOwnProperty(ht) && N !== void 0 && !c.hasOwnProperty(ht) && j(
              l,
              n,
              ht,
              void 0,
              c,
              N
            );
          for (Q in c)
            N = c[Q], q = u[Q], !c.hasOwnProperty(Q) || N === q || N === void 0 && q === void 0 || j(
              l,
              n,
              Q,
              N,
              c,
              q
            );
          return;
        }
    }
    for (var M in u)
      N = u[M], u.hasOwnProperty(M) && N != null && !c.hasOwnProperty(M) && He(l, n, M, null, c, N);
    for ($ in c)
      N = c[$], q = u[$], !c.hasOwnProperty($) || N === q || N == null && q == null || He(l, n, $, N, c, q);
  }
  var Tr = null, Er = null;
  function Wa(l) {
    return l.nodeType === 9 ? l : l.ownerDocument;
  }
  function qu(l) {
    switch (l) {
      case "http://www.w3.org/2000/svg":
        return 1;
      case "http://www.w3.org/1998/Math/MathML":
        return 2;
      default:
        return 0;
    }
  }
  function Go(l, n) {
    if (l === 0)
      switch (n) {
        case "svg":
          return 1;
        case "math":
          return 2;
        default:
          return 0;
      }
    return l === 1 && n === "foreignObject" ? 0 : l;
  }
  function eu(l, n) {
    return l === "textarea" || l === "noscript" || typeof n.children == "string" || typeof n.children == "number" || typeof n.children == "bigint" || typeof n.dangerouslySetInnerHTML == "object" && n.dangerouslySetInnerHTML !== null && n.dangerouslySetInnerHTML.__html != null;
  }
  var Lo = null;
  function Yu() {
    var l = window.event;
    return l && l.type === "popstate" ? l === Lo ? !1 : (Lo = l, !0) : (Lo = null, !1);
  }
  var Hd = typeof setTimeout == "function" ? setTimeout : void 0, zg = typeof clearTimeout == "function" ? clearTimeout : void 0, hv = typeof Promise == "function" ? Promise : void 0, Mg = typeof queueMicrotask == "function" ? queueMicrotask : typeof hv < "u" ? function(l) {
    return hv.resolve(null).then(l).catch(tu);
  } : Hd;
  function tu(l) {
    setTimeout(function() {
      throw l;
    });
  }
  function Mi(l) {
    return l === "head";
  }
  function xd(l, n) {
    var u = n, c = 0, r = 0;
    do {
      var s = u.nextSibling;
      if (l.removeChild(u), s && s.nodeType === 8)
        if (u = s.data, u === "/$") {
          if (0 < c && 8 > c) {
            u = c;
            var y = l.ownerDocument;
            if (u & 1 && ya(y.documentElement), u & 2 && ya(y.body), u & 4)
              for (u = y.head, ya(u), y = u.firstChild; y; ) {
                var p = y.nextSibling, S = y.nodeName;
                y[he] || S === "SCRIPT" || S === "STYLE" || S === "LINK" && y.rel.toLowerCase() === "stylesheet" || u.removeChild(y), y = p;
              }
          }
          if (r === 0) {
            l.removeChild(s), au(n);
            return;
          }
          r--;
        } else
          u === "$" || u === "$?" || u === "$!" ? r++ : c = u.charCodeAt(0) - 48;
      else c = 0;
      u = s;
    } while (u);
    au(n);
  }
  function Ar(l) {
    var n = l.firstChild;
    for (n && n.nodeType === 10 && (n = n.nextSibling); n; ) {
      var u = n;
      switch (n = n.nextSibling, u.nodeName) {
        case "HTML":
        case "HEAD":
        case "BODY":
          Ar(u), yf(u);
          continue;
        case "SCRIPT":
        case "STYLE":
          continue;
        case "LINK":
          if (u.rel.toLowerCase() === "stylesheet") continue;
      }
      l.removeChild(u);
    }
  }
  function Vo(l, n, u, c) {
    for (; l.nodeType === 1; ) {
      var r = u;
      if (l.nodeName.toLowerCase() !== n.toLowerCase()) {
        if (!c && (l.nodeName !== "INPUT" || l.type !== "hidden"))
          break;
      } else if (c) {
        if (!l[he])
          switch (n) {
            case "meta":
              if (!l.hasAttribute("itemprop")) break;
              return l;
            case "link":
              if (s = l.getAttribute("rel"), s === "stylesheet" && l.hasAttribute("data-precedence"))
                break;
              if (s !== r.rel || l.getAttribute("href") !== (r.href == null || r.href === "" ? null : r.href) || l.getAttribute("crossorigin") !== (r.crossOrigin == null ? null : r.crossOrigin) || l.getAttribute("title") !== (r.title == null ? null : r.title))
                break;
              return l;
            case "style":
              if (l.hasAttribute("data-precedence")) break;
              return l;
            case "script":
              if (s = l.getAttribute("src"), (s !== (r.src == null ? null : r.src) || l.getAttribute("type") !== (r.type == null ? null : r.type) || l.getAttribute("crossorigin") !== (r.crossOrigin == null ? null : r.crossOrigin)) && s && l.hasAttribute("async") && !l.hasAttribute("itemprop"))
                break;
              return l;
            default:
              return l;
          }
      } else if (n === "input" && l.type === "hidden") {
        var s = r.name == null ? null : "" + r.name;
        if (r.type === "hidden" && l.getAttribute("name") === s)
          return l;
      } else return l;
      if (l = gn(l.nextSibling), l === null) break;
    }
    return null;
  }
  function Ug(l, n, u) {
    if (n === "") return null;
    for (; l.nodeType !== 3; )
      if ((l.nodeType !== 1 || l.nodeName !== "INPUT" || l.type !== "hidden") && !u || (l = gn(l.nextSibling), l === null)) return null;
    return l;
  }
  function Rr(l) {
    return l.data === "$!" || l.data === "$?" && l.ownerDocument.readyState === "complete";
  }
  function _g(l, n) {
    var u = l.ownerDocument;
    if (l.data !== "$?" || u.readyState === "complete")
      n();
    else {
      var c = function() {
        n(), u.removeEventListener("DOMContentLoaded", c);
      };
      u.addEventListener("DOMContentLoaded", c), l._reactRetry = c;
    }
  }
  function gn(l) {
    for (; l != null; l = l.nextSibling) {
      var n = l.nodeType;
      if (n === 1 || n === 3) break;
      if (n === 8) {
        if (n = l.data, n === "$" || n === "$!" || n === "$?" || n === "F!" || n === "F")
          break;
        if (n === "/$") return null;
      }
    }
    return l;
  }
  var Ui = null;
  function Hl(l) {
    l = l.previousSibling;
    for (var n = 0; l; ) {
      if (l.nodeType === 8) {
        var u = l.data;
        if (u === "$" || u === "$!" || u === "$?") {
          if (n === 0) return l;
          n--;
        } else u === "/$" && n++;
      }
      l = l.previousSibling;
    }
    return null;
  }
  function fe(l, n, u) {
    switch (n = Wa(u), l) {
      case "html":
        if (l = n.documentElement, !l) throw Error(D(452));
        return l;
      case "head":
        if (l = n.head, !l) throw Error(D(453));
        return l;
      case "body":
        if (l = n.body, !l) throw Error(D(454));
        return l;
      default:
        throw Error(D(451));
    }
  }
  function ya(l) {
    for (var n = l.attributes; n.length; )
      l.removeAttributeNode(n[0]);
    yf(l);
  }
  var $t = /* @__PURE__ */ new Map(), Ll = /* @__PURE__ */ new Set();
  function Nd(l) {
    return typeof l.getRootNode == "function" ? l.getRootNode() : l.nodeType === 9 ? l : l.ownerDocument;
  }
  var ju = W.d;
  W.d = {
    f: wd,
    r: Bd,
    D: Gu,
    C: qd,
    L: _i,
    m: Vl,
    X: Ci,
    S: ma,
    M: hm
  };
  function wd() {
    var l = ju.f(), n = Rc();
    return l || n;
  }
  function Bd(l) {
    var n = Gi(l);
    n !== null && n.tag === 5 && n.type === "form" ? So(n) : ju.r(l);
  }
  var xl = typeof document > "u" ? null : document;
  function bn(l, n, u) {
    var c = xl;
    if (c && typeof n == "string" && n) {
      var r = Ba(n);
      r = 'link[rel="' + l + '"][href="' + r + '"]', typeof u == "string" && (r += '[crossorigin="' + u + '"]'), Ll.has(r) || (Ll.add(r), l = { rel: l, crossOrigin: u, href: n }, c.querySelector(r) === null && (n = c.createElement("link"), Me(n, "link", l), il(n), c.head.appendChild(n)));
    }
  }
  function Gu(l) {
    ju.D(l), bn("dns-prefetch", l, null);
  }
  function qd(l, n) {
    ju.C(l, n), bn("preconnect", l, n);
  }
  function _i(l, n, u) {
    ju.L(l, n, u);
    var c = xl;
    if (c && l && n) {
      var r = 'link[rel="preload"][as="' + Ba(n) + '"]';
      n === "image" && u && u.imageSrcSet ? (r += '[imagesrcset="' + Ba(
        u.imageSrcSet
      ) + '"]', typeof u.imageSizes == "string" && (r += '[imagesizes="' + Ba(
        u.imageSizes
      ) + '"]')) : r += '[href="' + Ba(l) + '"]';
      var s = r;
      switch (n) {
        case "style":
          s = Xo(l);
          break;
        case "script":
          s = Fa(l);
      }
      $t.has(s) || (l = ue(
        {
          rel: "preload",
          href: n === "image" && u && u.imageSrcSet ? void 0 : l,
          as: n
        },
        u
      ), $t.set(s, l), c.querySelector(r) !== null || n === "style" && c.querySelector(Qo(s)) || n === "script" && c.querySelector(Uc(s)) || (n = c.createElement("link"), Me(n, "link", l), il(n), c.head.appendChild(n)));
    }
  }
  function Vl(l, n) {
    ju.m(l, n);
    var u = xl;
    if (u && l) {
      var c = n && typeof n.as == "string" ? n.as : "script", r = 'link[rel="modulepreload"][as="' + Ba(c) + '"][href="' + Ba(l) + '"]', s = r;
      switch (c) {
        case "audioworklet":
        case "paintworklet":
        case "serviceworker":
        case "sharedworker":
        case "worker":
        case "script":
          s = Fa(l);
      }
      if (!$t.has(s) && (l = ue({ rel: "modulepreload", href: l }, n), $t.set(s, l), u.querySelector(r) === null)) {
        switch (c) {
          case "audioworklet":
          case "paintworklet":
          case "serviceworker":
          case "sharedworker":
          case "worker":
          case "script":
            if (u.querySelector(Uc(s)))
              return;
        }
        c = u.createElement("link"), Me(c, "link", l), il(c), u.head.appendChild(c);
      }
    }
  }
  function ma(l, n, u) {
    ju.S(l, n, u);
    var c = xl;
    if (c && l) {
      var r = pu(c).hoistableStyles, s = Xo(l);
      n = n || "default";
      var y = r.get(s);
      if (!y) {
        var p = { loading: 0, preload: null };
        if (y = c.querySelector(
          Qo(s)
        ))
          p.loading = 5;
        else {
          l = ue(
            { rel: "stylesheet", href: l, "data-precedence": n },
            u
          ), (u = $t.get(s)) && jd(l, u);
          var S = y = c.createElement("link");
          il(S), Me(S, "link", l), S._p = new Promise(function(C, Q) {
            S.onload = C, S.onerror = Q;
          }), S.addEventListener("load", function() {
            p.loading |= 1;
          }), S.addEventListener("error", function() {
            p.loading |= 2;
          }), p.loading |= 4, Yd(y, n, c);
        }
        y = {
          type: "stylesheet",
          instance: y,
          count: 1,
          state: p
        }, r.set(s, y);
      }
    }
  }
  function Ci(l, n) {
    ju.X(l, n);
    var u = xl;
    if (u && l) {
      var c = pu(u).hoistableScripts, r = Fa(l), s = c.get(r);
      s || (s = u.querySelector(Uc(r)), s || (l = ue({ src: l, async: !0 }, n), (n = $t.get(r)) && Gd(l, n), s = u.createElement("script"), il(s), Me(s, "link", l), u.head.appendChild(s)), s = {
        type: "script",
        instance: s,
        count: 1,
        state: null
      }, c.set(r, s));
    }
  }
  function hm(l, n) {
    ju.M(l, n);
    var u = xl;
    if (u && l) {
      var c = pu(u).hoistableScripts, r = Fa(l), s = c.get(r);
      s || (s = u.querySelector(Uc(r)), s || (l = ue({ src: l, async: !0, type: "module" }, n), (n = $t.get(r)) && Gd(l, n), s = u.createElement("script"), il(s), Me(s, "link", l), u.head.appendChild(s)), s = {
        type: "script",
        instance: s,
        count: 1,
        state: null
      }, c.set(r, s));
    }
  }
  function yv(l, n, u, c) {
    var r = (r = oe.current) ? Nd(r) : null;
    if (!r) throw Error(D(446));
    switch (l) {
      case "meta":
      case "title":
        return null;
      case "style":
        return typeof u.precedence == "string" && typeof u.href == "string" ? (n = Xo(u.href), u = pu(
          r
        ).hoistableStyles, c = u.get(n), c || (c = {
          type: "style",
          instance: null,
          count: 0,
          state: null
        }, u.set(n, c)), c) : { type: "void", instance: null, count: 0, state: null };
      case "link":
        if (u.rel === "stylesheet" && typeof u.href == "string" && typeof u.precedence == "string") {
          l = Xo(u.href);
          var s = pu(
            r
          ).hoistableStyles, y = s.get(l);
          if (y || (r = r.ownerDocument || r, y = {
            type: "stylesheet",
            instance: null,
            count: 0,
            state: { loading: 0, preload: null }
          }, s.set(l, y), (s = r.querySelector(
            Qo(l)
          )) && !s._p && (y.instance = s, y.state.loading = 5), $t.has(l) || (u = {
            rel: "preload",
            as: "style",
            href: u.href,
            crossOrigin: u.crossOrigin,
            integrity: u.integrity,
            media: u.media,
            hrefLang: u.hrefLang,
            referrerPolicy: u.referrerPolicy
          }, $t.set(l, u), s || mv(
            r,
            l,
            u,
            y.state
          ))), n && c === null)
            throw Error(D(528, ""));
          return y;
        }
        if (n && c !== null)
          throw Error(D(529, ""));
        return null;
      case "script":
        return n = u.async, u = u.src, typeof u == "string" && n && typeof n != "function" && typeof n != "symbol" ? (n = Fa(u), u = pu(
          r
        ).hoistableScripts, c = u.get(n), c || (c = {
          type: "script",
          instance: null,
          count: 0,
          state: null
        }, u.set(n, c)), c) : { type: "void", instance: null, count: 0, state: null };
      default:
        throw Error(D(444, l));
    }
  }
  function Xo(l) {
    return 'href="' + Ba(l) + '"';
  }
  function Qo(l) {
    return 'link[rel="stylesheet"][' + l + "]";
  }
  function Zo(l) {
    return ue({}, l, {
      "data-precedence": l.precedence,
      precedence: null
    });
  }
  function mv(l, n, u, c) {
    l.querySelector('link[rel="preload"][as="style"][' + n + "]") ? c.loading = 1 : (n = l.createElement("link"), c.preload = n, n.addEventListener("load", function() {
      return c.loading |= 1;
    }), n.addEventListener("error", function() {
      return c.loading |= 2;
    }), Me(n, "link", u), il(n), l.head.appendChild(n));
  }
  function Fa(l) {
    return '[src="' + Ba(l) + '"]';
  }
  function Uc(l) {
    return "script[async]" + l;
  }
  function pv(l, n, u) {
    if (n.count++, n.instance === null)
      switch (n.type) {
        case "style":
          var c = l.querySelector(
            'style[data-href~="' + Ba(u.href) + '"]'
          );
          if (c)
            return n.instance = c, il(c), c;
          var r = ue({}, u, {
            "data-href": u.href,
            "data-precedence": u.precedence,
            href: null,
            precedence: null
          });
          return c = (l.ownerDocument || l).createElement(
            "style"
          ), il(c), Me(c, "style", r), Yd(c, u.precedence, l), n.instance = c;
        case "stylesheet":
          r = Xo(u.href);
          var s = l.querySelector(
            Qo(r)
          );
          if (s)
            return n.state.loading |= 4, n.instance = s, il(s), s;
          c = Zo(u), (r = $t.get(r)) && jd(c, r), s = (l.ownerDocument || l).createElement("link"), il(s);
          var y = s;
          return y._p = new Promise(function(p, S) {
            y.onload = p, y.onerror = S;
          }), Me(s, "link", c), n.state.loading |= 4, Yd(s, u.precedence, l), n.instance = s;
        case "script":
          return s = Fa(u.src), (r = l.querySelector(
            Uc(s)
          )) ? (n.instance = r, il(r), r) : (c = u, (r = $t.get(s)) && (c = ue({}, u), Gd(c, r)), l = l.ownerDocument || l, r = l.createElement("script"), il(r), Me(r, "link", c), l.head.appendChild(r), n.instance = r);
        case "void":
          return null;
        default:
          throw Error(D(443, n.type));
      }
    else
      n.type === "stylesheet" && (n.state.loading & 4) === 0 && (c = n.instance, n.state.loading |= 4, Yd(c, u.precedence, l));
    return n.instance;
  }
  function Yd(l, n, u) {
    for (var c = u.querySelectorAll(
      'link[rel="stylesheet"][data-precedence],style[data-precedence]'
    ), r = c.length ? c[c.length - 1] : null, s = r, y = 0; y < c.length; y++) {
      var p = c[y];
      if (p.dataset.precedence === n) s = p;
      else if (s !== r) break;
    }
    s ? s.parentNode.insertBefore(l, s.nextSibling) : (n = u.nodeType === 9 ? u.head : u, n.insertBefore(l, n.firstChild));
  }
  function jd(l, n) {
    l.crossOrigin == null && (l.crossOrigin = n.crossOrigin), l.referrerPolicy == null && (l.referrerPolicy = n.referrerPolicy), l.title == null && (l.title = n.title);
  }
  function Gd(l, n) {
    l.crossOrigin == null && (l.crossOrigin = n.crossOrigin), l.referrerPolicy == null && (l.referrerPolicy = n.referrerPolicy), l.integrity == null && (l.integrity = n.integrity);
  }
  var Hi = null;
  function ym(l, n, u) {
    if (Hi === null) {
      var c = /* @__PURE__ */ new Map(), r = Hi = /* @__PURE__ */ new Map();
      r.set(u, c);
    } else
      r = Hi, c = r.get(u), c || (c = /* @__PURE__ */ new Map(), r.set(u, c));
    if (c.has(l)) return c;
    for (c.set(l, null), u = u.getElementsByTagName(l), r = 0; r < u.length; r++) {
      var s = u[r];
      if (!(s[he] || s[yl] || l === "link" && s.getAttribute("rel") === "stylesheet") && s.namespaceURI !== "http://www.w3.org/2000/svg") {
        var y = s.getAttribute(n) || "";
        y = l + y;
        var p = c.get(y);
        p ? p.push(s) : c.set(y, [s]);
      }
    }
    return c;
  }
  function mm(l, n, u) {
    l = l.ownerDocument || l, l.head.insertBefore(
      u,
      n === "title" ? l.querySelector("head > title") : null
    );
  }
  function vv(l, n, u) {
    if (u === 1 || n.itemProp != null) return !1;
    switch (l) {
      case "meta":
      case "title":
        return !0;
      case "style":
        if (typeof n.precedence != "string" || typeof n.href != "string" || n.href === "")
          break;
        return !0;
      case "link":
        if (typeof n.rel != "string" || typeof n.href != "string" || n.href === "" || n.onLoad || n.onError)
          break;
        switch (n.rel) {
          case "stylesheet":
            return l = n.disabled, typeof n.precedence == "string" && l == null;
          default:
            return !0;
        }
      case "script":
        if (n.async && typeof n.async != "function" && typeof n.async != "symbol" && !n.onLoad && !n.onError && n.src && typeof n.src == "string")
          return !0;
    }
    return !1;
  }
  function pm(l) {
    return !(l.type === "stylesheet" && (l.state.loading & 3) === 0);
  }
  var Ko = null;
  function gv() {
  }
  function bv(l, n, u) {
    if (Ko === null) throw Error(D(475));
    var c = Ko;
    if (n.type === "stylesheet" && (typeof u.media != "string" || matchMedia(u.media).matches !== !1) && (n.state.loading & 4) === 0) {
      if (n.instance === null) {
        var r = Xo(u.href), s = l.querySelector(
          Qo(r)
        );
        if (s) {
          l = s._p, l !== null && typeof l == "object" && typeof l.then == "function" && (c.count++, c = Or.bind(c), l.then(c, c)), n.state.loading |= 4, n.instance = s, il(s);
          return;
        }
        s = l.ownerDocument || l, u = Zo(u), (r = $t.get(r)) && jd(u, r), s = s.createElement("link"), il(s);
        var y = s;
        y._p = new Promise(function(p, S) {
          y.onload = p, y.onerror = S;
        }), Me(s, "link", u), n.instance = s;
      }
      c.stylesheets === null && (c.stylesheets = /* @__PURE__ */ new Map()), c.stylesheets.set(n, l), (l = n.state.preload) && (n.state.loading & 3) === 0 && (c.count++, n = Or.bind(c), l.addEventListener("load", n), l.addEventListener("error", n));
    }
  }
  function vm() {
    if (Ko === null) throw Error(D(475));
    var l = Ko;
    return l.stylesheets && l.count === 0 && Dr(l, l.stylesheets), 0 < l.count ? function(n) {
      var u = setTimeout(function() {
        if (l.stylesheets && Dr(l, l.stylesheets), l.unsuspend) {
          var c = l.unsuspend;
          l.unsuspend = null, c();
        }
      }, 6e4);
      return l.unsuspend = n, function() {
        l.unsuspend = null, clearTimeout(u);
      };
    } : null;
  }
  function Or() {
    if (this.count--, this.count === 0) {
      if (this.stylesheets) Dr(this, this.stylesheets);
      else if (this.unsuspend) {
        var l = this.unsuspend;
        this.unsuspend = null, l();
      }
    }
  }
  var Jo = null;
  function Dr(l, n) {
    l.stylesheets = null, l.unsuspend !== null && (l.count++, Jo = /* @__PURE__ */ new Map(), n.forEach(Ua, l), Jo = null, Or.call(l));
  }
  function Ua(l, n) {
    if (!(n.state.loading & 4)) {
      var u = Jo.get(l);
      if (u) var c = u.get(null);
      else {
        u = /* @__PURE__ */ new Map(), Jo.set(l, u);
        for (var r = l.querySelectorAll(
          "link[data-precedence],style[data-precedence]"
        ), s = 0; s < r.length; s++) {
          var y = r[s];
          (y.nodeName === "LINK" || y.getAttribute("media") !== "not all") && (u.set(y.dataset.precedence, y), c = y);
        }
        c && u.set(null, c);
      }
      r = n.instance, y = r.getAttribute("data-precedence"), s = u.get(y) || c, s === c && u.set(null, r), u.set(y, r), this.count++, c = Or.bind(this), r.addEventListener("load", c), r.addEventListener("error", c), s ? s.parentNode.insertBefore(r, s.nextSibling) : (l = l.nodeType === 9 ? l.head : l, l.insertBefore(r, l.firstChild)), n.state.loading |= 4;
    }
  }
  var pa = {
    $$typeof: rt,
    Provider: null,
    Consumer: null,
    _currentValue: P,
    _currentValue2: P,
    _threadCount: 0
  };
  function Cg(l, n, u, c, r, s, y, p) {
    this.tag = 1, this.containerInfo = l, this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.next = this.pendingContext = this.context = this.cancelPendingCommit = null, this.callbackPriority = 0, this.expirationTimes = pe(-1), this.entangledLanes = this.shellSuspendCounter = this.errorRecoveryDisabledLanes = this.expiredLanes = this.warmLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = pe(0), this.hiddenUpdates = pe(null), this.identifierPrefix = c, this.onUncaughtError = r, this.onCaughtError = s, this.onRecoverableError = y, this.pooledCache = null, this.pooledCacheLanes = 0, this.formState = p, this.incompleteTransitions = /* @__PURE__ */ new Map();
  }
  function gm(l, n, u, c, r, s, y, p, S, C, Q, $) {
    return l = new Cg(
      l,
      n,
      u,
      y,
      p,
      S,
      C,
      $
    ), n = 1, s === !0 && (n |= 24), s = ua(3, null, null, n), l.current = s, s.stateNode = l, n = mo(), n.refCount++, l.pooledCache = n, n.refCount++, s.memoizedState = {
      element: c,
      isDehydrated: u,
      cache: n
    }, Cs(s), l;
  }
  function bm(l) {
    return l ? (l = io, l) : io;
  }
  function Sm(l, n, u, c, r, s) {
    r = bm(r), c.context === null ? c.context = r : c.pendingContext = r, c = ca(n), c.payload = { element: u }, s = s === void 0 ? null : s, s !== null && (c.callback = s), u = jn(l, c, n), u !== null && (za(u, l, n), oc(u, l, n));
  }
  function Tm(l, n) {
    if (l = l.memoizedState, l !== null && l.dehydrated !== null) {
      var u = l.retryLane;
      l.retryLane = u !== 0 && u < n ? u : n;
    }
  }
  function Ld(l, n) {
    Tm(l, n), (l = l.alternate) && Tm(l, n);
  }
  function Em(l) {
    if (l.tag === 13) {
      var n = xn(l, 67108864);
      n !== null && za(n, l, 67108864), Ld(l, 67108864);
    }
  }
  var zr = !0;
  function Sv(l, n, u, c) {
    var r = O.T;
    O.T = null;
    var s = W.p;
    try {
      W.p = 2, Am(l, n, u, c);
    } finally {
      W.p = s, O.T = r;
    }
  }
  function Tv(l, n, u, c) {
    var r = O.T;
    O.T = null;
    var s = W.p;
    try {
      W.p = 8, Am(l, n, u, c);
    } finally {
      W.p = s, O.T = r;
    }
  }
  function Am(l, n, u, c) {
    if (zr) {
      var r = Vd(c);
      if (r === null)
        $a(
          l,
          n,
          c,
          Xd,
          u
        ), _c(l, c);
      else if (Av(
        r,
        l,
        n,
        u,
        c
      ))
        c.stopPropagation();
      else if (_c(l, c), n & 4 && -1 < Ev.indexOf(l)) {
        for (; r !== null; ) {
          var s = Gi(r);
          if (s !== null)
            switch (s.tag) {
              case 3:
                if (s = s.stateNode, s.current.memoizedState.isDehydrated) {
                  var y = Rl(s.pendingLanes);
                  if (y !== 0) {
                    var p = s;
                    for (p.pendingLanes |= 2, p.entangledLanes |= 2; y; ) {
                      var S = 1 << 31 - Al(y);
                      p.entanglements[1] |= S, y &= ~S;
                    }
                    ha(s), (vt & 6) === 0 && (bd = hl() + 500, yr(0));
                  }
                }
                break;
              case 13:
                p = xn(s, 2), p !== null && za(p, s, 2), Rc(), Ld(s, 2);
            }
          if (s = Vd(c), s === null && $a(
            l,
            n,
            c,
            Xd,
            u
          ), s === r) break;
          r = s;
        }
        r !== null && c.stopPropagation();
      } else
        $a(
          l,
          n,
          c,
          null,
          u
        );
    }
  }
  function Vd(l) {
    return l = cs(l), Rm(l);
  }
  var Xd = null;
  function Rm(l) {
    if (Xd = null, l = Ol(l), l !== null) {
      var n = ve(l);
      if (n === null) l = null;
      else {
        var u = n.tag;
        if (u === 13) {
          if (l = Ie(n), l !== null) return l;
          l = null;
        } else if (u === 3) {
          if (n.stateNode.current.memoizedState.isDehydrated)
            return n.tag === 3 ? n.stateNode.containerInfo : null;
          l = null;
        } else n !== l && (l = null);
      }
    }
    return Xd = l, null;
  }
  function Om(l) {
    switch (l) {
      case "beforetoggle":
      case "cancel":
      case "click":
      case "close":
      case "contextmenu":
      case "copy":
      case "cut":
      case "auxclick":
      case "dblclick":
      case "dragend":
      case "dragstart":
      case "drop":
      case "focusin":
      case "focusout":
      case "input":
      case "invalid":
      case "keydown":
      case "keypress":
      case "keyup":
      case "mousedown":
      case "mouseup":
      case "paste":
      case "pause":
      case "play":
      case "pointercancel":
      case "pointerdown":
      case "pointerup":
      case "ratechange":
      case "reset":
      case "resize":
      case "seeked":
      case "submit":
      case "toggle":
      case "touchcancel":
      case "touchend":
      case "touchstart":
      case "volumechange":
      case "change":
      case "selectionchange":
      case "textInput":
      case "compositionstart":
      case "compositionend":
      case "compositionupdate":
      case "beforeblur":
      case "afterblur":
      case "beforeinput":
      case "blur":
      case "fullscreenchange":
      case "focus":
      case "hashchange":
      case "popstate":
      case "select":
      case "selectstart":
        return 2;
      case "drag":
      case "dragenter":
      case "dragexit":
      case "dragleave":
      case "dragover":
      case "mousemove":
      case "mouseout":
      case "mouseover":
      case "pointermove":
      case "pointerout":
      case "pointerover":
      case "scroll":
      case "touchmove":
      case "wheel":
      case "mouseenter":
      case "mouseleave":
      case "pointerenter":
      case "pointerleave":
        return 8;
      case "message":
        switch (ku()) {
          case Fr:
            return 2;
          case Qe:
            return 8;
          case On:
          case Kc:
            return 32;
          case mu:
            return 268435456;
          default:
            return 32;
        }
      default:
        return 32;
    }
  }
  var ko = !1, lu = null, Lu = null, Vu = null, Mr = /* @__PURE__ */ new Map(), Ur = /* @__PURE__ */ new Map(), xi = [], Ev = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(
    " "
  );
  function _c(l, n) {
    switch (l) {
      case "focusin":
      case "focusout":
        lu = null;
        break;
      case "dragenter":
      case "dragleave":
        Lu = null;
        break;
      case "mouseover":
      case "mouseout":
        Vu = null;
        break;
      case "pointerover":
      case "pointerout":
        Mr.delete(n.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        Ur.delete(n.pointerId);
    }
  }
  function Cc(l, n, u, c, r, s) {
    return l === null || l.nativeEvent !== s ? (l = {
      blockedOn: n,
      domEventName: u,
      eventSystemFlags: c,
      nativeEvent: s,
      targetContainers: [r]
    }, n !== null && (n = Gi(n), n !== null && Em(n)), l) : (l.eventSystemFlags |= c, n = l.targetContainers, r !== null && n.indexOf(r) === -1 && n.push(r), l);
  }
  function Av(l, n, u, c, r) {
    switch (n) {
      case "focusin":
        return lu = Cc(
          lu,
          l,
          n,
          u,
          c,
          r
        ), !0;
      case "dragenter":
        return Lu = Cc(
          Lu,
          l,
          n,
          u,
          c,
          r
        ), !0;
      case "mouseover":
        return Vu = Cc(
          Vu,
          l,
          n,
          u,
          c,
          r
        ), !0;
      case "pointerover":
        var s = r.pointerId;
        return Mr.set(
          s,
          Cc(
            Mr.get(s) || null,
            l,
            n,
            u,
            c,
            r
          )
        ), !0;
      case "gotpointercapture":
        return s = r.pointerId, Ur.set(
          s,
          Cc(
            Ur.get(s) || null,
            l,
            n,
            u,
            c,
            r
          )
        ), !0;
    }
    return !1;
  }
  function Dm(l) {
    var n = Ol(l.target);
    if (n !== null) {
      var u = ve(n);
      if (u !== null) {
        if (n = u.tag, n === 13) {
          if (n = Ie(u), n !== null) {
            l.blockedOn = n, Th(l.priority, function() {
              if (u.tag === 13) {
                var c = Da();
                c = el(c);
                var r = xn(u, c);
                r !== null && za(r, u, c), Ld(u, c);
              }
            });
            return;
          }
        } else if (n === 3 && u.stateNode.current.memoizedState.isDehydrated) {
          l.blockedOn = u.tag === 3 ? u.stateNode.containerInfo : null;
          return;
        }
      }
    }
    l.blockedOn = null;
  }
  function _r(l) {
    if (l.blockedOn !== null) return !1;
    for (var n = l.targetContainers; 0 < n.length; ) {
      var u = Vd(l.nativeEvent);
      if (u === null) {
        u = l.nativeEvent;
        var c = new u.constructor(
          u.type,
          u
        );
        Ki = c, u.target.dispatchEvent(c), Ki = null;
      } else
        return n = Gi(u), n !== null && Em(n), l.blockedOn = u, !1;
      n.shift();
    }
    return !0;
  }
  function Cr(l, n, u) {
    _r(l) && u.delete(n);
  }
  function $o() {
    ko = !1, lu !== null && _r(lu) && (lu = null), Lu !== null && _r(Lu) && (Lu = null), Vu !== null && _r(Vu) && (Vu = null), Mr.forEach(Cr), Ur.forEach(Cr);
  }
  function Qd(l, n) {
    l.blockedOn === n && (l.blockedOn = null, ko || (ko = !0, H.unstable_scheduleCallback(
      H.unstable_NormalPriority,
      $o
    )));
  }
  var Hc = null;
  function zm(l) {
    Hc !== l && (Hc = l, H.unstable_scheduleCallback(
      H.unstable_NormalPriority,
      function() {
        Hc === l && (Hc = null);
        for (var n = 0; n < l.length; n += 3) {
          var u = l[n], c = l[n + 1], r = l[n + 2];
          if (typeof c != "function") {
            if (Rm(c || u) === null)
              continue;
            break;
          }
          var s = Gi(u);
          s !== null && (l.splice(n, 3), n -= 3, Fs(
            s,
            {
              pending: !0,
              data: r,
              method: u.method,
              action: c
            },
            c,
            r
          ));
        }
      }
    ));
  }
  function au(l) {
    function n(S) {
      return Qd(S, l);
    }
    lu !== null && Qd(lu, l), Lu !== null && Qd(Lu, l), Vu !== null && Qd(Vu, l), Mr.forEach(n), Ur.forEach(n);
    for (var u = 0; u < xi.length; u++) {
      var c = xi[u];
      c.blockedOn === l && (c.blockedOn = null);
    }
    for (; 0 < xi.length && (u = xi[0], u.blockedOn === null); )
      Dm(u), u.blockedOn === null && xi.shift();
    if (u = (l.ownerDocument || l).$$reactFormReplay, u != null)
      for (c = 0; c < u.length; c += 3) {
        var r = u[c], s = u[c + 1], y = r[Zl] || null;
        if (typeof s == "function")
          y || zm(u);
        else if (y) {
          var p = null;
          if (s && s.hasAttribute("formAction")) {
            if (r = s, y = s[Zl] || null)
              p = y.formAction;
            else if (Rm(r) !== null) continue;
          } else p = y.action;
          typeof p == "function" ? u[c + 1] = p : (u.splice(c, 3), c -= 3), zm(u);
        }
      }
  }
  function Mm(l) {
    this._internalRoot = l;
  }
  Zd.prototype.render = Mm.prototype.render = function(l) {
    var n = this._internalRoot;
    if (n === null) throw Error(D(409));
    var u = n.current, c = Da();
    Sm(u, c, l, n, null, null);
  }, Zd.prototype.unmount = Mm.prototype.unmount = function() {
    var l = this._internalRoot;
    if (l !== null) {
      this._internalRoot = null;
      var n = l.containerInfo;
      Sm(l.current, 2, null, l, null, null), Rc(), n[$c] = null;
    }
  };
  function Zd(l) {
    this._internalRoot = l;
  }
  Zd.prototype.unstable_scheduleHydration = function(l) {
    if (l) {
      var n = Pr();
      l = { blockedOn: null, target: l, priority: n };
      for (var u = 0; u < xi.length && n !== 0 && n < xi[u].priority; u++) ;
      xi.splice(u, 0, l), u === 0 && Dm(l);
    }
  };
  var Um = F.version;
  if (Um !== "19.1.1")
    throw Error(
      D(
        527,
        Um,
        "19.1.1"
      )
    );
  W.findDOMNode = function(l) {
    var n = l._reactInternals;
    if (n === void 0)
      throw typeof l.render == "function" ? Error(D(188)) : (l = Object.keys(l).join(","), Error(D(268, l)));
    return l = Y(n), l = l !== null ? J(l) : null, l = l === null ? null : l.stateNode, l;
  };
  var Fl = {
    bundleType: 0,
    version: "19.1.1",
    rendererPackageName: "react-dom",
    currentDispatcherRef: O,
    reconcilerVersion: "19.1.1"
  };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var Hr = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Hr.isDisabled && Hr.supportsFiber)
      try {
        $u = Hr.inject(
          Fl
        ), El = Hr;
      } catch {
      }
  }
  return dp.createRoot = function(l, n) {
    if (!re(l)) throw Error(D(299));
    var u = !1, c = "", r = Ao, s = Dy, y = ar, p = null;
    return n != null && (n.unstable_strictMode === !0 && (u = !0), n.identifierPrefix !== void 0 && (c = n.identifierPrefix), n.onUncaughtError !== void 0 && (r = n.onUncaughtError), n.onCaughtError !== void 0 && (s = n.onCaughtError), n.onRecoverableError !== void 0 && (y = n.onRecoverableError), n.unstable_transitionCallbacks !== void 0 && (p = n.unstable_transitionCallbacks)), n = gm(
      l,
      1,
      !1,
      null,
      null,
      u,
      c,
      r,
      s,
      y,
      p,
      null
    ), l[$c] = n.current, rm(l), new Mm(n);
  }, dp.hydrateRoot = function(l, n, u) {
    if (!re(l)) throw Error(D(299));
    var c = !1, r = "", s = Ao, y = Dy, p = ar, S = null, C = null;
    return u != null && (u.unstable_strictMode === !0 && (c = !0), u.identifierPrefix !== void 0 && (r = u.identifierPrefix), u.onUncaughtError !== void 0 && (s = u.onUncaughtError), u.onCaughtError !== void 0 && (y = u.onCaughtError), u.onRecoverableError !== void 0 && (p = u.onRecoverableError), u.unstable_transitionCallbacks !== void 0 && (S = u.unstable_transitionCallbacks), u.formState !== void 0 && (C = u.formState)), n = gm(
      l,
      1,
      !0,
      n,
      u ?? null,
      c,
      r,
      s,
      y,
      p,
      S,
      C
    ), n.context = bm(null), u = n.current, c = Da(), c = el(c), r = ca(c), r.callback = null, jn(u, r, c), u = c, n.current.lanes = u, Ce(n, u), ha(n), l[$c] = n.current, rm(l), new Zd(n);
  }, dp.version = "19.1.1", dp;
}
var hp = {};
/**
 * @license React
 * react-dom-client.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Xb;
function yT() {
  return Xb || (Xb = 1, process.env.NODE_ENV !== "production" && (function() {
    function H(e, t) {
      for (e = e.memoizedState; e !== null && 0 < t; )
        e = e.next, t--;
      return e;
    }
    function F(e, t, a, i) {
      if (a >= t.length) return i;
      var o = t[a], f = He(e) ? e.slice() : Ze({}, e);
      return f[o] = F(e[o], t, a + 1, i), f;
    }
    function ie(e, t, a) {
      if (t.length !== a.length)
        console.warn("copyWithRename() expects paths of the same length");
      else {
        for (var i = 0; i < a.length - 1; i++)
          if (t[i] !== a[i]) {
            console.warn(
              "copyWithRename() expects paths to be the same except for the deepest key"
            );
            return;
          }
        return D(e, t, a, 0);
      }
    }
    function D(e, t, a, i) {
      var o = t[i], f = He(e) ? e.slice() : Ze({}, e);
      return i + 1 === t.length ? (f[a[i]] = f[o], He(f) ? f.splice(o, 1) : delete f[o]) : f[o] = D(
        e[o],
        t,
        a,
        i + 1
      ), f;
    }
    function re(e, t, a) {
      var i = t[a], o = He(e) ? e.slice() : Ze({}, e);
      return a + 1 === t.length ? (He(o) ? o.splice(i, 1) : delete o[i], o) : (o[i] = re(e[i], t, a + 1), o);
    }
    function ve() {
      return !1;
    }
    function Ie() {
      return null;
    }
    function ct() {
    }
    function Y() {
      console.error(
        "Do not call Hooks inside useEffect(...), useMemo(...), or other built-in Hooks. You can only call Hooks at the top level of your React function. For more information, see https://react.dev/link/rules-of-hooks"
      );
    }
    function J() {
      console.error(
        "Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo()."
      );
    }
    function ue() {
    }
    function K(e) {
      var t = [];
      return e.forEach(function(a) {
        t.push(a);
      }), t.sort().join(", ");
    }
    function U(e, t, a, i) {
      return new zf(e, t, a, i);
    }
    function le(e, t) {
      e.context === Wo && (bt(e.current, 2, t, e, null, null), gc());
    }
    function ze(e, t) {
      if (uu !== null) {
        var a = t.staleFamilies;
        t = t.updatedFamilies, Ro(), Df(
          e.current,
          t,
          a
        ), gc();
      }
    }
    function ot(e) {
      uu = e;
    }
    function Ve(e) {
      return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11);
    }
    function Xe(e) {
      var t = e, a = e;
      if (e.alternate) for (; t.return; ) t = t.return;
      else {
        e = t;
        do
          t = e, (t.flags & 4098) !== 0 && (a = t.return), e = t.return;
        while (e);
      }
      return t.tag === 3 ? a : null;
    }
    function It(e) {
      if (e.tag === 13) {
        var t = e.memoizedState;
        if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null) return t.dehydrated;
      }
      return null;
    }
    function rt(e) {
      if (Xe(e) !== e)
        throw Error("Unable to find node on an unmounted component.");
    }
    function Wt(e) {
      var t = e.alternate;
      if (!t) {
        if (t = Xe(e), t === null)
          throw Error("Unable to find node on an unmounted component.");
        return t !== e ? null : e;
      }
      for (var a = e, i = t; ; ) {
        var o = a.return;
        if (o === null) break;
        var f = o.alternate;
        if (f === null) {
          if (i = o.return, i !== null) {
            a = i;
            continue;
          }
          break;
        }
        if (o.child === f.child) {
          for (f = o.child; f; ) {
            if (f === a) return rt(o), e;
            if (f === i) return rt(o), t;
            f = f.sibling;
          }
          throw Error("Unable to find node on an unmounted component.");
        }
        if (a.return !== i.return) a = o, i = f;
        else {
          for (var d = !1, h = o.child; h; ) {
            if (h === a) {
              d = !0, a = o, i = f;
              break;
            }
            if (h === i) {
              d = !0, i = o, a = f;
              break;
            }
            h = h.sibling;
          }
          if (!d) {
            for (h = f.child; h; ) {
              if (h === a) {
                d = !0, a = f, i = o;
                break;
              }
              if (h === i) {
                d = !0, i = f, a = o;
                break;
              }
              h = h.sibling;
            }
            if (!d)
              throw Error(
                "Child was not found in either parent set. This indicates a bug in React related to the return pointer. Please file an issue."
              );
          }
        }
        if (a.alternate !== i)
          throw Error(
            "Return fibers should always be each others' alternates. This error is likely caused by a bug in React. Please file an issue."
          );
      }
      if (a.tag !== 3)
        throw Error("Unable to find node on an unmounted component.");
      return a.stateNode.current === a ? e : t;
    }
    function Ne(e) {
      var t = e.tag;
      if (t === 5 || t === 26 || t === 27 || t === 6) return e;
      for (e = e.child; e !== null; ) {
        if (t = Ne(e), t !== null) return t;
        e = e.sibling;
      }
      return null;
    }
    function Rt(e) {
      return e === null || typeof e != "object" ? null : (e = dm && e[dm] || e["@@iterator"], typeof e == "function" ? e : null);
    }
    function We(e) {
      if (e == null) return null;
      if (typeof e == "function")
        return e.$$typeof === Cd ? null : e.displayName || e.name || null;
      if (typeof e == "string") return e;
      switch (e) {
        case Ye:
          return "Fragment";
        case Yo:
          return "Profiler";
        case qo:
          return "StrictMode";
        case jo:
          return "Suspense";
        case zi:
          return "SuspenseList";
        case sm:
          return "Activity";
      }
      if (typeof e == "object")
        switch (typeof e.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), e.$$typeof) {
          case Mc:
            return "Portal";
          case $a:
            return (e.displayName || "Context") + ".Provider";
          case _d:
            return (e._context.displayName || "Context") + ".Consumer";
          case Bu:
            var t = e.render;
            return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
          case Sr:
            return t = e.displayName || null, t !== null ? t : We(e.type) || "Memo";
          case Ma:
            t = e._payload, e = e._init;
            try {
              return We(e(t));
            } catch {
            }
        }
      return null;
    }
    function Ot(e) {
      return typeof e.tag == "number" ? de(e) : typeof e.name == "string" ? e.name : null;
    }
    function de(e) {
      var t = e.type;
      switch (e.tag) {
        case 31:
          return "Activity";
        case 24:
          return "Cache";
        case 9:
          return (t._context.displayName || "Context") + ".Consumer";
        case 10:
          return (t.displayName || "Context") + ".Provider";
        case 18:
          return "DehydratedFragment";
        case 11:
          return e = t.render, e = e.displayName || e.name || "", t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef");
        case 7:
          return "Fragment";
        case 26:
        case 27:
        case 5:
          return t;
        case 4:
          return "Portal";
        case 3:
          return "Root";
        case 6:
          return "Text";
        case 16:
          return We(t);
        case 8:
          return t === qo ? "StrictMode" : "Mode";
        case 22:
          return "Offscreen";
        case 12:
          return "Profiler";
        case 21:
          return "Scope";
        case 13:
          return "Suspense";
        case 19:
          return "SuspenseList";
        case 25:
          return "TracingMarker";
        case 1:
        case 0:
        case 14:
        case 15:
          if (typeof t == "function")
            return t.displayName || t.name || null;
          if (typeof t == "string") return t;
          break;
        case 29:
          if (t = e._debugInfo, t != null) {
            for (var a = t.length - 1; 0 <= a; a--)
              if (typeof t[a].name == "string") return t[a].name;
          }
          if (e.return !== null)
            return de(e.return);
      }
      return null;
    }
    function zt(e) {
      return { current: e };
    }
    function Se(e, t) {
      0 > Wa ? console.error("Unexpected pop.") : (t !== Er[Wa] && console.error("Unexpected Fiber popped."), e.current = Tr[Wa], Tr[Wa] = null, Er[Wa] = null, Wa--);
    }
    function De(e, t, a) {
      Wa++, Tr[Wa] = e.current, Er[Wa] = a, e.current = t;
    }
    function Mt(e) {
      return e === null && console.error(
        "Expected host context to exist. This error is likely caused by a bug in React. Please file an issue."
      ), e;
    }
    function Yt(e, t) {
      De(eu, t, e), De(Go, e, e), De(qu, null, e);
      var a = t.nodeType;
      switch (a) {
        case 9:
        case 11:
          a = a === 9 ? "#document" : "#fragment", t = (t = t.documentElement) && (t = t.namespaceURI) ? gt(t) : Vc;
          break;
        default:
          if (a = t.tagName, t = t.namespaceURI)
            t = gt(t), t = sa(
              t,
              a
            );
          else
            switch (a) {
              case "svg":
                t = bh;
                break;
              case "math":
                t = Pv;
                break;
              default:
                t = Vc;
            }
      }
      a = a.toLowerCase(), a = Dh(null, a), a = {
        context: t,
        ancestorInfo: a
      }, Se(qu, e), De(qu, a, e);
    }
    function mt(e) {
      Se(qu, e), Se(Go, e), Se(eu, e);
    }
    function O() {
      return Mt(qu.current);
    }
    function W(e) {
      e.memoizedState !== null && De(Lo, e, e);
      var t = Mt(qu.current), a = e.type, i = sa(t.context, a);
      a = Dh(t.ancestorInfo, a), i = { context: i, ancestorInfo: a }, t !== i && (De(Go, e, e), De(qu, i, e));
    }
    function P(e) {
      Go.current === e && (Se(qu, e), Se(Go, e)), Lo.current === e && (Se(Lo, e), cp._currentValue = Wr);
    }
    function ge(e) {
      return typeof Symbol == "function" && Symbol.toStringTag && e[Symbol.toStringTag] || e.constructor.name || "Object";
    }
    function g(e) {
      try {
        return w(e), !1;
      } catch {
        return !0;
      }
    }
    function w(e) {
      return "" + e;
    }
    function Z(e, t) {
      if (g(e))
        return console.error(
          "The provided `%s` attribute is an unsupported type %s. This value must be coerced to a string before using it here.",
          t,
          ge(e)
        ), w(e);
    }
    function I(e, t) {
      if (g(e))
        return console.error(
          "The provided `%s` CSS property is an unsupported type %s. This value must be coerced to a string before using it here.",
          t,
          ge(e)
        ), w(e);
    }
    function ce(e) {
      if (g(e))
        return console.error(
          "Form field values (value, checked, defaultValue, or defaultChecked props) must be strings, not %s. This value must be coerced to a string before using it here.",
          ge(e)
        ), w(e);
    }
    function Ae(e) {
      if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u") return !1;
      var t = __REACT_DEVTOOLS_GLOBAL_HOOK__;
      if (t.isDisabled) return !0;
      if (!t.supportsFiber)
        return console.error(
          "The installed version of React DevTools is too old and will not work with the current version of React. Please update React DevTools. https://react.dev/link/react-devtools"
        ), !0;
      try {
        Ui = t.inject(e), Hl = t;
      } catch (a) {
        console.error("React instrumentation encountered an error: %s.", a);
      }
      return !!t.checkDCE;
    }
    function oe(e) {
      if (typeof _g == "function" && gn(e), Hl && typeof Hl.setStrictMode == "function")
        try {
          Hl.setStrictMode(Ui, e);
        } catch (t) {
          ya || (ya = !0, console.error(
            "React instrumentation encountered an error: %s",
            t
          ));
        }
    }
    function nl(e) {
      fe = e;
    }
    function _e() {
      fe !== null && typeof fe.markCommitStopped == "function" && fe.markCommitStopped();
    }
    function xt(e) {
      fe !== null && typeof fe.markComponentRenderStarted == "function" && fe.markComponentRenderStarted(e);
    }
    function ta() {
      fe !== null && typeof fe.markComponentRenderStopped == "function" && fe.markComponentRenderStopped();
    }
    function An(e) {
      fe !== null && typeof fe.markRenderStarted == "function" && fe.markRenderStarted(e);
    }
    function ji() {
      fe !== null && typeof fe.markRenderStopped == "function" && fe.markRenderStopped();
    }
    function Rn(e, t) {
      fe !== null && typeof fe.markStateUpdateScheduled == "function" && fe.markStateUpdateScheduled(e, t);
    }
    function Zc(e) {
      return e >>>= 0, e === 0 ? 32 : 31 - (Nd(e) / ju | 0) | 0;
    }
    function sf(e) {
      if (e & 1) return "SyncHydrationLane";
      if (e & 2) return "Sync";
      if (e & 4) return "InputContinuousHydration";
      if (e & 8) return "InputContinuous";
      if (e & 16) return "DefaultHydration";
      if (e & 32) return "Default";
      if (e & 128) return "TransitionHydration";
      if (e & 4194048) return "Transition";
      if (e & 62914560) return "Retry";
      if (e & 67108864) return "SelectiveHydration";
      if (e & 134217728) return "IdleHydration";
      if (e & 268435456) return "Idle";
      if (e & 536870912) return "Offscreen";
      if (e & 1073741824) return "Deferred";
    }
    function Pt(e) {
      var t = e & 42;
      if (t !== 0) return t;
      switch (e & -e) {
        case 1:
          return 1;
        case 2:
          return 2;
        case 4:
          return 4;
        case 8:
          return 8;
        case 16:
          return 16;
        case 32:
          return 32;
        case 64:
          return 64;
        case 128:
          return 128;
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
          return e & 4194048;
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
          return e & 62914560;
        case 67108864:
          return 67108864;
        case 134217728:
          return 134217728;
        case 268435456:
          return 268435456;
        case 536870912:
          return 536870912;
        case 1073741824:
          return 0;
        default:
          return console.error(
            "Should have found matching lanes. This is a bug in React."
          ), e;
      }
    }
    function hl(e, t, a) {
      var i = e.pendingLanes;
      if (i === 0) return 0;
      var o = 0, f = e.suspendedLanes, d = e.pingedLanes;
      e = e.warmLanes;
      var h = i & 134217727;
      return h !== 0 ? (i = h & ~f, i !== 0 ? o = Pt(i) : (d &= h, d !== 0 ? o = Pt(d) : a || (a = h & ~e, a !== 0 && (o = Pt(a))))) : (h = i & ~f, h !== 0 ? o = Pt(h) : d !== 0 ? o = Pt(d) : a || (a = i & ~e, a !== 0 && (o = Pt(a)))), o === 0 ? 0 : t !== 0 && t !== o && (t & f) === 0 && (f = o & -o, a = t & -t, f >= a || f === 32 && (a & 4194048) !== 0) ? t : o;
    }
    function ku(e, t) {
      return (e.pendingLanes & ~(e.suspendedLanes & ~e.pingedLanes) & t) === 0;
    }
    function Fr(e, t) {
      switch (e) {
        case 1:
        case 2:
        case 4:
        case 8:
        case 64:
          return t + 250;
        case 16:
        case 32:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
          return t + 5e3;
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
          return -1;
        case 67108864:
        case 134217728:
        case 268435456:
        case 536870912:
        case 1073741824:
          return -1;
        default:
          return console.error(
            "Should have found matching lanes. This is a bug in React."
          ), -1;
      }
    }
    function Qe() {
      var e = wd;
      return wd <<= 1, (wd & 4194048) === 0 && (wd = 256), e;
    }
    function On() {
      var e = Bd;
      return Bd <<= 1, (Bd & 62914560) === 0 && (Bd = 4194304), e;
    }
    function Kc(e) {
      for (var t = [], a = 0; 31 > a; a++) t.push(e);
      return t;
    }
    function mu(e, t) {
      e.pendingLanes |= t, t !== 268435456 && (e.suspendedLanes = 0, e.pingedLanes = 0, e.warmLanes = 0);
    }
    function Ir(e, t, a, i, o, f) {
      var d = e.pendingLanes;
      e.pendingLanes = a, e.suspendedLanes = 0, e.pingedLanes = 0, e.warmLanes = 0, e.expiredLanes &= a, e.entangledLanes &= a, e.errorRecoveryDisabledLanes &= a, e.shellSuspendCounter = 0;
      var h = e.entanglements, v = e.expirationTimes, b = e.hiddenUpdates;
      for (a = d & ~a; 0 < a; ) {
        var B = 31 - Ll(a), L = 1 << B;
        h[B] = 0, v[B] = -1;
        var x = b[B];
        if (x !== null)
          for (b[B] = null, B = 0; B < x.length; B++) {
            var V = x[B];
            V !== null && (V.lane &= -536870913);
          }
        a &= ~L;
      }
      i !== 0 && df(e, i, 0), f !== 0 && o === 0 && e.tag !== 0 && (e.suspendedLanes |= f & ~(d & ~t));
    }
    function df(e, t, a) {
      e.pendingLanes |= t, e.suspendedLanes &= ~t;
      var i = 31 - Ll(t);
      e.entangledLanes |= t, e.entanglements[i] = e.entanglements[i] | 1073741824 | a & 4194090;
    }
    function $u(e, t) {
      var a = e.entangledLanes |= t;
      for (e = e.entanglements; a; ) {
        var i = 31 - Ll(a), o = 1 << i;
        o & t | e[i] & t && (e[i] |= t), a &= ~o;
      }
    }
    function El(e) {
      switch (e) {
        case 2:
          e = 1;
          break;
        case 8:
          e = 4;
          break;
        case 32:
          e = 16;
          break;
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
          e = 128;
          break;
        case 268435456:
          e = 134217728;
          break;
        default:
          e = 0;
      }
      return e;
    }
    function wa(e, t, a) {
      if ($t)
        for (e = e.pendingUpdatersLaneMap; 0 < a; ) {
          var i = 31 - Ll(a), o = 1 << i;
          e[i].add(t), a &= ~o;
        }
    }
    function Al(e, t) {
      if ($t)
        for (var a = e.pendingUpdatersLaneMap, i = e.memoizedUpdaters; 0 < t; ) {
          var o = 31 - Ll(t);
          e = 1 << o, o = a[o], 0 < o.size && (o.forEach(function(f) {
            var d = f.alternate;
            d !== null && i.has(d) || i.add(f);
          }), o.clear()), t &= ~e;
        }
    }
    function Jc(e) {
      return e &= -e, xl < e ? bn < e ? (e & 134217727) !== 0 ? Gu : qd : bn : xl;
    }
    function hf() {
      var e = Me.p;
      return e !== 0 ? e : (e = window.event, e === void 0 ? Gu : Md(e.type));
    }
    function kc(e, t) {
      var a = Me.p;
      try {
        return Me.p = e, t();
      } finally {
        Me.p = a;
      }
    }
    function tn(e) {
      delete e[Vl], delete e[ma], delete e[hm], delete e[yv], delete e[Xo];
    }
    function la(e) {
      var t = e[Vl];
      if (t) return t;
      for (var a = e.parentNode; a; ) {
        if (t = a[Ci] || a[Vl]) {
          if (a = t.alternate, t.child !== null || a !== null && a.child !== null)
            for (e = xo(e); e !== null; ) {
              if (a = e[Vl])
                return a;
              e = xo(e);
            }
          return t;
        }
        e = a, a = e.parentNode;
      }
      return null;
    }
    function Rl(e) {
      if (e = e[Vl] || e[Ci]) {
        var t = e.tag;
        if (t === 5 || t === 6 || t === 13 || t === 26 || t === 27 || t === 3)
          return e;
      }
      return null;
    }
    function ln(e) {
      var t = e.tag;
      if (t === 5 || t === 26 || t === 27 || t === 6)
        return e.stateNode;
      throw Error("getNodeFromInstance: Invalid argument.");
    }
    function m(e) {
      var t = e[Qo];
      return t || (t = e[Qo] = { hoistableStyles: /* @__PURE__ */ new Map(), hoistableScripts: /* @__PURE__ */ new Map() }), t;
    }
    function z(e) {
      e[Zo] = !0;
    }
    function te(e, t) {
      ne(e, t), ne(e + "Capture", t);
    }
    function ne(e, t) {
      Fa[e] && console.error(
        "EventRegistry: More than one plugin attempted to publish the same registration name, `%s`.",
        e
      ), Fa[e] = t;
      var a = e.toLowerCase();
      for (Uc[a] = e, e === "onDoubleClick" && (Uc.ondblclick = e), e = 0; e < t.length; e++)
        mv.add(t[e]);
    }
    function pe(e, t) {
      pv[t.type] || t.onChange || t.onInput || t.readOnly || t.disabled || t.value == null || console.error(
        e === "select" ? "You provided a `value` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultValue`. Otherwise, set `onChange`." : "You provided a `value` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultValue`. Otherwise, set either `onChange` or `readOnly`."
      ), t.onChange || t.readOnly || t.disabled || t.checked == null || console.error(
        "You provided a `checked` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultChecked`. Otherwise, set either `onChange` or `readOnly`."
      );
    }
    function Ce(e) {
      return Yu.call(Gd, e) ? !0 : Yu.call(jd, e) ? !1 : Yd.test(e) ? Gd[e] = !0 : (jd[e] = !0, console.error("Invalid attribute name: `%s`", e), !1);
    }
    function Be(e, t, a) {
      if (Ce(t)) {
        if (!e.hasAttribute(t)) {
          switch (typeof a) {
            case "symbol":
            case "object":
              return a;
            case "function":
              return a;
            case "boolean":
              if (a === !1) return a;
          }
          return a === void 0 ? void 0 : null;
        }
        return e = e.getAttribute(t), e === "" && a === !0 ? !0 : (Z(a, t), e === "" + a ? a : e);
      }
    }
    function at(e, t, a) {
      if (Ce(t))
        if (a === null) e.removeAttribute(t);
        else {
          switch (typeof a) {
            case "undefined":
            case "function":
            case "symbol":
              e.removeAttribute(t);
              return;
            case "boolean":
              var i = t.toLowerCase().slice(0, 5);
              if (i !== "data-" && i !== "aria-") {
                e.removeAttribute(t);
                return;
              }
          }
          Z(a, t), e.setAttribute(t, "" + a);
        }
    }
    function we(e, t, a) {
      if (a === null) e.removeAttribute(t);
      else {
        switch (typeof a) {
          case "undefined":
          case "function":
          case "symbol":
          case "boolean":
            e.removeAttribute(t);
            return;
        }
        Z(a, t), e.setAttribute(t, "" + a);
      }
    }
    function el(e, t, a, i) {
      if (i === null) e.removeAttribute(a);
      else {
        switch (typeof i) {
          case "undefined":
          case "function":
          case "symbol":
          case "boolean":
            e.removeAttribute(a);
            return;
        }
        Z(i, a), e.setAttributeNS(t, a, "" + i);
      }
    }
    function an() {
    }
    function Pr() {
      if (Hi === 0) {
        ym = console.log, mm = console.info, vv = console.warn, pm = console.error, Ko = console.group, gv = console.groupCollapsed, bv = console.groupEnd;
        var e = {
          configurable: !0,
          enumerable: !0,
          value: an,
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
      Hi++;
    }
    function Th() {
      if (Hi--, Hi === 0) {
        var e = { configurable: !0, enumerable: !0, writable: !0 };
        Object.defineProperties(console, {
          log: Ze({}, e, { value: ym }),
          info: Ze({}, e, { value: mm }),
          warn: Ze({}, e, { value: vv }),
          error: Ze({}, e, { value: pm }),
          group: Ze({}, e, { value: Ko }),
          groupCollapsed: Ze({}, e, { value: gv }),
          groupEnd: Ze({}, e, { value: bv })
        });
      }
      0 > Hi && console.error(
        "disabledDepth fell below zero. This is a bug in React. Please file an issue."
      );
    }
    function ul(e) {
      if (vm === void 0)
        try {
          throw Error();
        } catch (a) {
          var t = a.stack.trim().match(/\n( *(at )?)/);
          vm = t && t[1] || "", Or = -1 < a.stack.indexOf(`
    at`) ? " (<anonymous>)" : -1 < a.stack.indexOf("@") ? "@unknown:0:0" : "";
        }
      return `
` + vm + e + Or;
    }
    function yl(e, t) {
      if (!e || Jo) return "";
      var a = Dr.get(e);
      if (a !== void 0) return a;
      Jo = !0, a = Error.prepareStackTrace, Error.prepareStackTrace = void 0;
      var i = null;
      i = j.H, j.H = null, Pr();
      try {
        var o = {
          DetermineComponentFrameRoot: function() {
            try {
              if (t) {
                var x = function() {
                  throw Error();
                };
                if (Object.defineProperty(x.prototype, "props", {
                  set: function() {
                    throw Error();
                  }
                }), typeof Reflect == "object" && Reflect.construct) {
                  try {
                    Reflect.construct(x, []);
                  } catch (ye) {
                    var V = ye;
                  }
                  Reflect.construct(e, [], x);
                } else {
                  try {
                    x.call();
                  } catch (ye) {
                    V = ye;
                  }
                  e.call(x.prototype);
                }
              } else {
                try {
                  throw Error();
                } catch (ye) {
                  V = ye;
                }
                (x = e()) && typeof x.catch == "function" && x.catch(function() {
                });
              }
            } catch (ye) {
              if (ye && V && typeof ye.stack == "string")
                return [ye.stack, V.stack];
            }
            return [null, null];
          }
        };
        o.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
        var f = Object.getOwnPropertyDescriptor(
          o.DetermineComponentFrameRoot,
          "name"
        );
        f && f.configurable && Object.defineProperty(
          o.DetermineComponentFrameRoot,
          "name",
          { value: "DetermineComponentFrameRoot" }
        );
        var d = o.DetermineComponentFrameRoot(), h = d[0], v = d[1];
        if (h && v) {
          var b = h.split(`
`), B = v.split(`
`);
          for (d = f = 0; f < b.length && !b[f].includes(
            "DetermineComponentFrameRoot"
          ); )
            f++;
          for (; d < B.length && !B[d].includes(
            "DetermineComponentFrameRoot"
          ); )
            d++;
          if (f === b.length || d === B.length)
            for (f = b.length - 1, d = B.length - 1; 1 <= f && 0 <= d && b[f] !== B[d]; )
              d--;
          for (; 1 <= f && 0 <= d; f--, d--)
            if (b[f] !== B[d]) {
              if (f !== 1 || d !== 1)
                do
                  if (f--, d--, 0 > d || b[f] !== B[d]) {
                    var L = `
` + b[f].replace(
                      " at new ",
                      " at "
                    );
                    return e.displayName && L.includes("<anonymous>") && (L = L.replace("<anonymous>", e.displayName)), typeof e == "function" && Dr.set(e, L), L;
                  }
                while (1 <= f && 0 <= d);
              break;
            }
        }
      } finally {
        Jo = !1, j.H = i, Th(), Error.prepareStackTrace = a;
      }
      return b = (b = e ? e.displayName || e.name : "") ? ul(b) : "", typeof e == "function" && Dr.set(e, b), b;
    }
    function Zl(e) {
      var t = Error.prepareStackTrace;
      if (Error.prepareStackTrace = void 0, e = e.stack, Error.prepareStackTrace = t, e.startsWith(`Error: react-stack-top-frame
`) && (e = e.slice(29)), t = e.indexOf(`
`), t !== -1 && (e = e.slice(t + 1)), t = e.indexOf("react_stack_bottom_frame"), t !== -1 && (t = e.lastIndexOf(
        `
`,
        t
      )), t !== -1)
        e = e.slice(0, t);
      else return "";
      return e;
    }
    function $c(e) {
      switch (e.tag) {
        case 26:
        case 27:
        case 5:
          return ul(e.type);
        case 16:
          return ul("Lazy");
        case 13:
          return ul("Suspense");
        case 19:
          return ul("SuspenseList");
        case 0:
        case 15:
          return yl(e.type, !1);
        case 11:
          return yl(e.type.render, !1);
        case 1:
          return yl(e.type, !0);
        case 31:
          return ul("Activity");
        default:
          return "";
      }
    }
    function es(e) {
      try {
        var t = "";
        do {
          t += $c(e);
          var a = e._debugInfo;
          if (a)
            for (var i = a.length - 1; 0 <= i; i--) {
              var o = a[i];
              if (typeof o.name == "string") {
                var f = t, d = o.env, h = ul(
                  o.name + (d ? " [" + d + "]" : "")
                );
                t = f + h;
              }
            }
          e = e.return;
        } while (e);
        return t;
      } catch (v) {
        return `
Error generating stack: ` + v.message + `
` + v.stack;
      }
    }
    function pp(e) {
      return (e = e ? e.displayName || e.name : "") ? ul(e) : "";
    }
    function ts() {
      if (Ua === null) return null;
      var e = Ua._debugOwner;
      return e != null ? Ot(e) : null;
    }
    function vp() {
      if (Ua === null) return "";
      var e = Ua;
      try {
        var t = "";
        switch (e.tag === 6 && (e = e.return), e.tag) {
          case 26:
          case 27:
          case 5:
            t += ul(e.type);
            break;
          case 13:
            t += ul("Suspense");
            break;
          case 19:
            t += ul("SuspenseList");
            break;
          case 31:
            t += ul("Activity");
            break;
          case 30:
          case 0:
          case 15:
          case 1:
            e._debugOwner || t !== "" || (t += pp(
              e.type
            ));
            break;
          case 11:
            e._debugOwner || t !== "" || (t += pp(
              e.type.render
            ));
        }
        for (; e; )
          if (typeof e.tag == "number") {
            var a = e;
            e = a._debugOwner;
            var i = a._debugStack;
            e && i && (typeof i != "string" && (a._debugStack = i = Zl(i)), i !== "" && (t += `
` + i));
          } else if (e.debugStack != null) {
            var o = e.debugStack;
            (e = e.owner) && o && (t += `
` + Zl(o));
          } else break;
        var f = t;
      } catch (d) {
        f = `
Error generating stack: ` + d.message + `
` + d.stack;
      }
      return f;
    }
    function he(e, t, a, i, o, f, d) {
      var h = Ua;
      yf(e);
      try {
        return e !== null && e._debugTask ? e._debugTask.run(
          t.bind(null, a, i, o, f, d)
        ) : t(a, i, o, f, d);
      } finally {
        yf(h);
      }
      throw Error(
        "runWithFiberInDEV should never be called in production. This is a bug in React."
      );
    }
    function yf(e) {
      j.getCurrentStack = e === null ? null : vp, pa = !1, Ua = e;
    }
    function Ol(e) {
      switch (typeof e) {
        case "bigint":
        case "boolean":
        case "number":
        case "string":
        case "undefined":
          return e;
        case "object":
          return ce(e), e;
        default:
          return "";
      }
    }
    function Gi(e) {
      var t = e.type;
      return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
    }
    function mf(e) {
      var t = Gi(e) ? "checked" : "value", a = Object.getOwnPropertyDescriptor(
        e.constructor.prototype,
        t
      );
      ce(e[t]);
      var i = "" + e[t];
      if (!e.hasOwnProperty(t) && typeof a < "u" && typeof a.get == "function" && typeof a.set == "function") {
        var o = a.get, f = a.set;
        return Object.defineProperty(e, t, {
          configurable: !0,
          get: function() {
            return o.call(this);
          },
          set: function(d) {
            ce(d), i = "" + d, f.call(this, d);
          }
        }), Object.defineProperty(e, t, {
          enumerable: a.enumerable
        }), {
          getValue: function() {
            return i;
          },
          setValue: function(d) {
            ce(d), i = "" + d;
          },
          stopTracking: function() {
            e._valueTracker = null, delete e[t];
          }
        };
      }
    }
    function pu(e) {
      e._valueTracker || (e._valueTracker = mf(e));
    }
    function il(e) {
      if (!e) return !1;
      var t = e._valueTracker;
      if (!t) return !0;
      var a = t.getValue(), i = "";
      return e && (i = Gi(e) ? e.checked ? "true" : "false" : e.value), e = i, e !== a ? (t.setValue(e), !0) : !1;
    }
    function pf(e) {
      if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u") return null;
      try {
        return e.activeElement || e.body;
      } catch {
        return e.body;
      }
    }
    function Sa(e) {
      return e.replace(
        Cg,
        function(t) {
          return "\\" + t.charCodeAt(0).toString(16) + " ";
        }
      );
    }
    function Wu(e, t) {
      t.checked === void 0 || t.defaultChecked === void 0 || bm || (console.error(
        "%s contains an input of type %s with both checked and defaultChecked props. Input elements must be either controlled or uncontrolled (specify either the checked prop, or the defaultChecked prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://react.dev/link/controlled-components",
        ts() || "A component",
        t.type
      ), bm = !0), t.value === void 0 || t.defaultValue === void 0 || gm || (console.error(
        "%s contains an input of type %s with both value and defaultValue props. Input elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://react.dev/link/controlled-components",
        ts() || "A component",
        t.type
      ), gm = !0);
    }
    function Fu(e, t, a, i, o, f, d, h) {
      e.name = "", d != null && typeof d != "function" && typeof d != "symbol" && typeof d != "boolean" ? (Z(d, "type"), e.type = d) : e.removeAttribute("type"), t != null ? d === "number" ? (t === 0 && e.value === "" || e.value != t) && (e.value = "" + Ol(t)) : e.value !== "" + Ol(t) && (e.value = "" + Ol(t)) : d !== "submit" && d !== "reset" || e.removeAttribute("value"), t != null ? ls(e, d, Ol(t)) : a != null ? ls(e, d, Ol(a)) : i != null && e.removeAttribute("value"), o == null && f != null && (e.defaultChecked = !!f), o != null && (e.checked = o && typeof o != "function" && typeof o != "symbol"), h != null && typeof h != "function" && typeof h != "symbol" && typeof h != "boolean" ? (Z(h, "name"), e.name = "" + Ol(h)) : e.removeAttribute("name");
    }
    function gp(e, t, a, i, o, f, d, h) {
      if (f != null && typeof f != "function" && typeof f != "symbol" && typeof f != "boolean" && (Z(f, "type"), e.type = f), t != null || a != null) {
        if (!(f !== "submit" && f !== "reset" || t != null))
          return;
        a = a != null ? "" + Ol(a) : "", t = t != null ? "" + Ol(t) : a, h || t === e.value || (e.value = t), e.defaultValue = t;
      }
      i = i ?? o, i = typeof i != "function" && typeof i != "symbol" && !!i, e.checked = h ? e.checked : !!i, e.defaultChecked = !!i, d != null && typeof d != "function" && typeof d != "symbol" && typeof d != "boolean" && (Z(d, "name"), e.name = d);
    }
    function ls(e, t, a) {
      t === "number" && pf(e.ownerDocument) === e || e.defaultValue === "" + a || (e.defaultValue = "" + a);
    }
    function Eh(e, t) {
      t.value == null && (typeof t.children == "object" && t.children !== null ? gr.Children.forEach(t.children, function(a) {
        a == null || typeof a == "string" || typeof a == "number" || typeof a == "bigint" || Tm || (Tm = !0, console.error(
          "Cannot infer the option value of complex children. Pass a `value` prop or use a plain string as children to <option>."
        ));
      }) : t.dangerouslySetInnerHTML == null || Ld || (Ld = !0, console.error(
        "Pass a `value` prop if you set dangerouslyInnerHTML so React knows which value should be selected."
      ))), t.selected == null || Sm || (console.error(
        "Use the `defaultValue` or `value` props on <select> instead of setting `selected` on <option>."
      ), Sm = !0);
    }
    function bp() {
      var e = ts();
      return e ? `

Check the render method of \`` + e + "`." : "";
    }
    function vu(e, t, a, i) {
      if (e = e.options, t) {
        t = {};
        for (var o = 0; o < a.length; o++)
          t["$" + a[o]] = !0;
        for (a = 0; a < e.length; a++)
          o = t.hasOwnProperty("$" + e[a].value), e[a].selected !== o && (e[a].selected = o), o && i && (e[a].defaultSelected = !0);
      } else {
        for (a = "" + Ol(a), t = null, o = 0; o < e.length; o++) {
          if (e[o].value === a) {
            e[o].selected = !0, i && (e[o].defaultSelected = !0);
            return;
          }
          t !== null || e[o].disabled || (t = e[o]);
        }
        t !== null && (t.selected = !0);
      }
    }
    function vf(e, t) {
      for (e = 0; e < zr.length; e++) {
        var a = zr[e];
        if (t[a] != null) {
          var i = He(t[a]);
          t.multiple && !i ? console.error(
            "The `%s` prop supplied to <select> must be an array if `multiple` is true.%s",
            a,
            bp()
          ) : !t.multiple && i && console.error(
            "The `%s` prop supplied to <select> must be a scalar value if `multiple` is false.%s",
            a,
            bp()
          );
        }
      }
      t.value === void 0 || t.defaultValue === void 0 || Em || (console.error(
        "Select elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled select element and remove one of these props. More info: https://react.dev/link/controlled-components"
      ), Em = !0);
    }
    function Dn(e, t) {
      t.value === void 0 || t.defaultValue === void 0 || Sv || (console.error(
        "%s contains a textarea with both value and defaultValue props. Textarea elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled textarea and remove one of these props. More info: https://react.dev/link/controlled-components",
        ts() || "A component"
      ), Sv = !0), t.children != null && t.value == null && console.error(
        "Use the `defaultValue` or `value` props instead of setting children on <textarea>."
      );
    }
    function as(e, t, a) {
      if (t != null && (t = "" + Ol(t), t !== e.value && (e.value = t), a == null)) {
        e.defaultValue !== t && (e.defaultValue = t);
        return;
      }
      e.defaultValue = a != null ? "" + Ol(a) : "";
    }
    function Ah(e, t, a, i) {
      if (t == null) {
        if (i != null) {
          if (a != null)
            throw Error(
              "If you supply `defaultValue` on a <textarea>, do not pass children."
            );
          if (He(i)) {
            if (1 < i.length)
              throw Error("<textarea> can only have at most one child.");
            i = i[0];
          }
          a = i;
        }
        a == null && (a = ""), t = a;
      }
      a = Ol(t), e.defaultValue = a, i = e.textContent, i === a && i !== "" && i !== null && (e.value = i);
    }
    function Li(e, t) {
      return e.serverProps === void 0 && e.serverTail.length === 0 && e.children.length === 1 && 3 < e.distanceFromLeaf && e.distanceFromLeaf > 15 - t ? Li(e.children[0], t) : e;
    }
    function Kl(e) {
      return "  " + "  ".repeat(e);
    }
    function Iu(e) {
      return "+ " + "  ".repeat(e);
    }
    function Vi(e) {
      return "- " + "  ".repeat(e);
    }
    function Rh(e) {
      switch (e.tag) {
        case 26:
        case 27:
        case 5:
          return e.type;
        case 16:
          return "Lazy";
        case 13:
          return "Suspense";
        case 19:
          return "SuspenseList";
        case 0:
        case 15:
          return e = e.type, e.displayName || e.name || null;
        case 11:
          return e = e.type.render, e.displayName || e.name || null;
        case 1:
          return e = e.type, e.displayName || e.name || null;
        default:
          return null;
      }
    }
    function ql(e, t) {
      return Tv.test(e) ? (e = JSON.stringify(e), e.length > t - 2 ? 8 > t ? '{"..."}' : "{" + e.slice(0, t - 7) + '..."}' : "{" + e + "}") : e.length > t ? 5 > t ? '{"..."}' : e.slice(0, t - 3) + "..." : e;
    }
    function gf(e, t, a) {
      var i = 120 - 2 * a;
      if (t === null)
        return Iu(a) + ql(e, i) + `
`;
      if (typeof t == "string") {
        for (var o = 0; o < t.length && o < e.length && t.charCodeAt(o) === e.charCodeAt(o); o++) ;
        return o > i - 8 && 10 < o && (e = "..." + e.slice(o - 8), t = "..." + t.slice(o - 8)), Iu(a) + ql(e, i) + `
` + Vi(a) + ql(t, i) + `
`;
      }
      return Kl(a) + ql(e, i) + `
`;
    }
    function Oh(e) {
      return Object.prototype.toString.call(e).replace(/^\[object (.*)\]$/, function(t, a) {
        return a;
      });
    }
    function Pu(e, t) {
      switch (typeof e) {
        case "string":
          return e = JSON.stringify(e), e.length > t ? 5 > t ? '"..."' : e.slice(0, t - 4) + '..."' : e;
        case "object":
          if (e === null) return "null";
          if (He(e)) return "[...]";
          if (e.$$typeof === Di)
            return (t = We(e.type)) ? "<" + t + ">" : "<...>";
          var a = Oh(e);
          if (a === "Object") {
            a = "", t -= 2;
            for (var i in e)
              if (e.hasOwnProperty(i)) {
                var o = JSON.stringify(i);
                if (o !== '"' + i + '"' && (i = o), t -= i.length - 2, o = Pu(
                  e[i],
                  15 > t ? t : 15
                ), t -= o.length, 0 > t) {
                  a += a === "" ? "..." : ", ...";
                  break;
                }
                a += (a === "" ? "" : ",") + i + ":" + o;
              }
            return "{" + a + "}";
          }
          return a;
        case "function":
          return (t = e.displayName || e.name) ? "function " + t : "function";
        default:
          return String(e);
      }
    }
    function Xi(e, t) {
      return typeof e != "string" || Tv.test(e) ? "{" + Pu(e, t - 2) + "}" : e.length > t - 2 ? 5 > t ? '"..."' : '"' + e.slice(0, t - 5) + '..."' : '"' + e + '"';
    }
    function Wc(e, t, a) {
      var i = 120 - a.length - e.length, o = [], f;
      for (f in t)
        if (t.hasOwnProperty(f) && f !== "children") {
          var d = Xi(
            t[f],
            120 - a.length - f.length - 1
          );
          i -= f.length + d.length + 2, o.push(f + "=" + d);
        }
      return o.length === 0 ? a + "<" + e + `>
` : 0 < i ? a + "<" + e + " " + o.join(" ") + `>
` : a + "<" + e + `
` + a + "  " + o.join(`
` + a + "  ") + `
` + a + `>
`;
    }
    function hg(e, t, a) {
      var i = "", o = Ze({}, t), f;
      for (f in e)
        if (e.hasOwnProperty(f)) {
          delete o[f];
          var d = 120 - 2 * a - f.length - 2, h = Pu(e[f], d);
          t.hasOwnProperty(f) ? (d = Pu(t[f], d), i += Iu(a) + f + ": " + h + `
`, i += Vi(a) + f + ": " + d + `
`) : i += Iu(a) + f + ": " + h + `
`;
        }
      for (var v in o)
        o.hasOwnProperty(v) && (e = Pu(
          o[v],
          120 - 2 * a - v.length - 2
        ), i += Vi(a) + v + ": " + e + `
`);
      return i;
    }
    function Ba(e, t, a, i) {
      var o = "", f = /* @__PURE__ */ new Map();
      for (b in a)
        a.hasOwnProperty(b) && f.set(
          b.toLowerCase(),
          b
        );
      if (f.size === 1 && f.has("children"))
        o += Wc(
          e,
          t,
          Kl(i)
        );
      else {
        for (var d in t)
          if (t.hasOwnProperty(d) && d !== "children") {
            var h = 120 - 2 * (i + 1) - d.length - 1, v = f.get(d.toLowerCase());
            if (v !== void 0) {
              f.delete(d.toLowerCase());
              var b = t[d];
              v = a[v];
              var B = Xi(
                b,
                h
              );
              h = Xi(
                v,
                h
              ), typeof b == "object" && b !== null && typeof v == "object" && v !== null && Oh(b) === "Object" && Oh(v) === "Object" && (2 < Object.keys(b).length || 2 < Object.keys(v).length || -1 < B.indexOf("...") || -1 < h.indexOf("...")) ? o += Kl(i + 1) + d + `={{
` + hg(
                b,
                v,
                i + 2
              ) + Kl(i + 1) + `}}
` : (o += Iu(i + 1) + d + "=" + B + `
`, o += Vi(i + 1) + d + "=" + h + `
`);
            } else
              o += Kl(i + 1) + d + "=" + Xi(t[d], h) + `
`;
          }
        f.forEach(function(L) {
          if (L !== "children") {
            var x = 120 - 2 * (i + 1) - L.length - 1;
            o += Vi(i + 1) + L + "=" + Xi(a[L], x) + `
`;
          }
        }), o = o === "" ? Kl(i) + "<" + e + `>
` : Kl(i) + "<" + e + `
` + o + Kl(i) + `>
`;
      }
      return e = a.children, t = t.children, typeof e == "string" || typeof e == "number" || typeof e == "bigint" ? (f = "", (typeof t == "string" || typeof t == "number" || typeof t == "bigint") && (f = "" + t), o += gf(f, "" + e, i + 1)) : (typeof t == "string" || typeof t == "number" || typeof t == "bigint") && (o = e == null ? o + gf("" + t, null, i + 1) : o + gf("" + t, void 0, i + 1)), o;
    }
    function ns(e, t) {
      var a = Rh(e);
      if (a === null) {
        for (a = "", e = e.child; e; )
          a += ns(e, t), e = e.sibling;
        return a;
      }
      return Kl(t) + "<" + a + `>
`;
    }
    function us(e, t) {
      var a = Li(e, t);
      if (a !== e && (e.children.length !== 1 || e.children[0] !== a))
        return Kl(t) + `...
` + us(a, t + 1);
      a = "";
      var i = e.fiber._debugInfo;
      if (i)
        for (var o = 0; o < i.length; o++) {
          var f = i[o].name;
          typeof f == "string" && (a += Kl(t) + "<" + f + `>
`, t++);
        }
      if (i = "", o = e.fiber.pendingProps, e.fiber.tag === 6)
        i = gf(o, e.serverProps, t), t++;
      else if (f = Rh(e.fiber), f !== null)
        if (e.serverProps === void 0) {
          i = t;
          var d = 120 - 2 * i - f.length - 2, h = "";
          for (b in o)
            if (o.hasOwnProperty(b) && b !== "children") {
              var v = Xi(o[b], 15);
              if (d -= b.length + v.length + 2, 0 > d) {
                h += " ...";
                break;
              }
              h += " " + b + "=" + v;
            }
          i = Kl(i) + "<" + f + h + `>
`, t++;
        } else
          e.serverProps === null ? (i = Wc(
            f,
            o,
            Iu(t)
          ), t++) : typeof e.serverProps == "string" ? console.error(
            "Should not have matched a non HostText fiber to a Text node. This is a bug in React."
          ) : (i = Ba(
            f,
            o,
            e.serverProps,
            t
          ), t++);
      var b = "";
      for (o = e.fiber.child, f = 0; o && f < e.children.length; )
        d = e.children[f], d.fiber === o ? (b += us(d, t), f++) : b += ns(o, t), o = o.sibling;
      for (o && 0 < e.children.length && (b += Kl(t) + `...
`), o = e.serverTail, e.serverProps === null && t--, e = 0; e < o.length; e++)
        f = o[e], b = typeof f == "string" ? b + (Vi(t) + ql(f, 120 - 2 * t) + `
`) : b + Wc(
          f.type,
          f.props,
          Vi(t)
        );
      return a + i + b;
    }
    function bf(e) {
      try {
        return `

` + us(e, 0);
      } catch {
        return "";
      }
    }
    function Qi(e, t, a) {
      for (var i = t, o = null, f = 0; i; )
        i === e && (f = 0), o = {
          fiber: i,
          children: o !== null ? [o] : [],
          serverProps: i === t ? a : i === e ? null : void 0,
          serverTail: [],
          distanceFromLeaf: f
        }, f++, i = i.return;
      return o !== null ? bf(o).replaceAll(/^[+-]/gm, ">") : "";
    }
    function Dh(e, t) {
      var a = Ze({}, e || Om), i = { tag: t };
      return Vd.indexOf(t) !== -1 && (a.aTagInScope = null, a.buttonTagInScope = null, a.nobrTagInScope = null), Xd.indexOf(t) !== -1 && (a.pTagInButtonScope = null), Am.indexOf(t) !== -1 && t !== "address" && t !== "div" && t !== "p" && (a.listItemTagAutoclosing = null, a.dlItemTagAutoclosing = null), a.current = i, t === "form" && (a.formTag = i), t === "a" && (a.aTagInScope = i), t === "button" && (a.buttonTagInScope = i), t === "nobr" && (a.nobrTagInScope = i), t === "p" && (a.pTagInButtonScope = i), t === "li" && (a.listItemTagAutoclosing = i), (t === "dd" || t === "dt") && (a.dlItemTagAutoclosing = i), t === "#document" || t === "html" ? a.containerTagInScope = null : a.containerTagInScope || (a.containerTagInScope = i), e !== null || t !== "#document" && t !== "html" && t !== "body" ? a.implicitRootScope === !0 && (a.implicitRootScope = !1) : a.implicitRootScope = !0, a;
    }
    function zh(e, t, a) {
      switch (t) {
        case "select":
          return e === "hr" || e === "option" || e === "optgroup" || e === "script" || e === "template" || e === "#text";
        case "optgroup":
          return e === "option" || e === "#text";
        case "option":
          return e === "#text";
        case "tr":
          return e === "th" || e === "td" || e === "style" || e === "script" || e === "template";
        case "tbody":
        case "thead":
        case "tfoot":
          return e === "tr" || e === "style" || e === "script" || e === "template";
        case "colgroup":
          return e === "col" || e === "template";
        case "table":
          return e === "caption" || e === "colgroup" || e === "tbody" || e === "tfoot" || e === "thead" || e === "style" || e === "script" || e === "template";
        case "head":
          return e === "base" || e === "basefont" || e === "bgsound" || e === "link" || e === "meta" || e === "title" || e === "noscript" || e === "noframes" || e === "style" || e === "script" || e === "template";
        case "html":
          if (a) break;
          return e === "head" || e === "body" || e === "frameset";
        case "frameset":
          return e === "frame";
        case "#document":
          if (!a) return e === "html";
      }
      switch (e) {
        case "h1":
        case "h2":
        case "h3":
        case "h4":
        case "h5":
        case "h6":
          return t !== "h1" && t !== "h2" && t !== "h3" && t !== "h4" && t !== "h5" && t !== "h6";
        case "rp":
        case "rt":
          return Rm.indexOf(t) === -1;
        case "caption":
        case "col":
        case "colgroup":
        case "frameset":
        case "frame":
        case "tbody":
        case "td":
        case "tfoot":
        case "th":
        case "thead":
        case "tr":
          return t == null;
        case "head":
          return a || t === null;
        case "html":
          return a && t === "#document" || t === null;
        case "body":
          return a && (t === "#document" || t === "html") || t === null;
      }
      return !0;
    }
    function Fc(e, t) {
      switch (e) {
        case "address":
        case "article":
        case "aside":
        case "blockquote":
        case "center":
        case "details":
        case "dialog":
        case "dir":
        case "div":
        case "dl":
        case "fieldset":
        case "figcaption":
        case "figure":
        case "footer":
        case "header":
        case "hgroup":
        case "main":
        case "menu":
        case "nav":
        case "ol":
        case "p":
        case "section":
        case "summary":
        case "ul":
        case "pre":
        case "listing":
        case "table":
        case "hr":
        case "xmp":
        case "h1":
        case "h2":
        case "h3":
        case "h4":
        case "h5":
        case "h6":
          return t.pTagInButtonScope;
        case "form":
          return t.formTag || t.pTagInButtonScope;
        case "li":
          return t.listItemTagAutoclosing;
        case "dd":
        case "dt":
          return t.dlItemTagAutoclosing;
        case "button":
          return t.buttonTagInScope;
        case "a":
          return t.aTagInScope;
        case "nobr":
          return t.nobrTagInScope;
      }
      return null;
    }
    function Sp(e, t) {
      for (; e; ) {
        switch (e.tag) {
          case 5:
          case 26:
          case 27:
            if (e.type === t) return e;
        }
        e = e.return;
      }
      return null;
    }
    function is(e, t) {
      t = t || Om;
      var a = t.current;
      if (t = (a = zh(
        e,
        a && a.tag,
        t.implicitRootScope
      ) ? null : a) ? null : Fc(e, t), t = a || t, !t) return !0;
      var i = t.tag;
      if (t = String(!!a) + "|" + e + "|" + i, ko[t]) return !1;
      ko[t] = !0;
      var o = (t = Ua) ? Sp(t.return, i) : null, f = t !== null && o !== null ? Qi(o, t, null) : "", d = "<" + e + ">";
      return a ? (a = "", i === "table" && e === "tr" && (a += " Add a <tbody>, <thead> or <tfoot> to your code to match the DOM tree generated by the browser."), console.error(
        `In HTML, %s cannot be a child of <%s>.%s
This will cause a hydration error.%s`,
        d,
        i,
        a,
        f
      )) : console.error(
        `In HTML, %s cannot be a descendant of <%s>.
This will cause a hydration error.%s`,
        d,
        i,
        f
      ), t && (e = t.return, o === null || e === null || o === e && e._debugOwner === t._debugOwner || he(o, function() {
        console.error(
          `<%s> cannot contain a nested %s.
See this log for the ancestor stack trace.`,
          i,
          d
        );
      })), !1;
    }
    function Sf(e, t, a) {
      if (a || zh("#text", t, !1))
        return !0;
      if (a = "#text|" + t, ko[a]) return !1;
      ko[a] = !0;
      var i = (a = Ua) ? Sp(a, t) : null;
      return a = a !== null && i !== null ? Qi(
        i,
        a,
        a.tag !== 6 ? { children: null } : null
      ) : "", /\S/.test(e) ? console.error(
        `In HTML, text nodes cannot be a child of <%s>.
This will cause a hydration error.%s`,
        t,
        a
      ) : console.error(
        `In HTML, whitespace text nodes cannot be a child of <%s>. Make sure you don't have any extra whitespace between tags on each line of your source code.
This will cause a hydration error.%s`,
        t,
        a
      ), !1;
    }
    function Zi(e, t) {
      if (t) {
        var a = e.firstChild;
        if (a && a === e.lastChild && a.nodeType === 3) {
          a.nodeValue = t;
          return;
        }
      }
      e.textContent = t;
    }
    function yg(e) {
      return e.replace(xi, function(t, a) {
        return a.toUpperCase();
      });
    }
    function Tp(e, t, a) {
      var i = t.indexOf("--") === 0;
      i || (-1 < t.indexOf("-") ? _c.hasOwnProperty(t) && _c[t] || (_c[t] = !0, console.error(
        "Unsupported style property %s. Did you mean %s?",
        t,
        yg(t.replace(Ur, "ms-"))
      )) : Mr.test(t) ? _c.hasOwnProperty(t) && _c[t] || (_c[t] = !0, console.error(
        "Unsupported vendor-prefixed style property %s. Did you mean %s?",
        t,
        t.charAt(0).toUpperCase() + t.slice(1)
      )) : !Ev.test(a) || Cc.hasOwnProperty(a) && Cc[a] || (Cc[a] = !0, console.error(
        `Style property values shouldn't contain a semicolon. Try "%s: %s" instead.`,
        t,
        a.replace(Ev, "")
      )), typeof a == "number" && (isNaN(a) ? Av || (Av = !0, console.error(
        "`NaN` is an invalid value for the `%s` css style property.",
        t
      )) : isFinite(a) || Dm || (Dm = !0, console.error(
        "`Infinity` is an invalid value for the `%s` css style property.",
        t
      )))), a == null || typeof a == "boolean" || a === "" ? i ? e.setProperty(t, "") : t === "float" ? e.cssFloat = "" : e[t] = "" : i ? e.setProperty(t, a) : typeof a != "number" || a === 0 || _r.has(t) ? t === "float" ? e.cssFloat = a : (I(a, t), e[t] = ("" + a).trim()) : e[t] = a + "px";
    }
    function Tf(e, t, a) {
      if (t != null && typeof t != "object")
        throw Error(
          "The `style` prop expects a mapping from style properties to values, not a string. For example, style={{marginRight: spacing + 'em'}} when using JSX."
        );
      if (t && Object.freeze(t), e = e.style, a != null) {
        if (t) {
          var i = {};
          if (a) {
            for (var o in a)
              if (a.hasOwnProperty(o) && !t.hasOwnProperty(o))
                for (var f = lu[o] || [o], d = 0; d < f.length; d++)
                  i[f[d]] = o;
          }
          for (var h in t)
            if (t.hasOwnProperty(h) && (!a || a[h] !== t[h]))
              for (o = lu[h] || [h], f = 0; f < o.length; f++)
                i[o[f]] = h;
          h = {};
          for (var v in t)
            for (o = lu[v] || [v], f = 0; f < o.length; f++)
              h[o[f]] = v;
          v = {};
          for (var b in i)
            if (o = i[b], (f = h[b]) && o !== f && (d = o + "," + f, !v[d])) {
              v[d] = !0, d = console;
              var B = t[o];
              d.error.call(
                d,
                "%s a style property during rerender (%s) when a conflicting property is set (%s) can lead to styling bugs. To avoid this, don't mix shorthand and non-shorthand properties for the same value; instead, replace the shorthand with separate values.",
                B == null || typeof B == "boolean" || B === "" ? "Removing" : "Updating",
                o,
                f
              );
            }
        }
        for (var L in a)
          !a.hasOwnProperty(L) || t != null && t.hasOwnProperty(L) || (L.indexOf("--") === 0 ? e.setProperty(L, "") : L === "float" ? e.cssFloat = "" : e[L] = "");
        for (var x in t)
          b = t[x], t.hasOwnProperty(x) && a[x] !== b && Tp(e, x, b);
      } else
        for (i in t)
          t.hasOwnProperty(i) && Tp(e, i, t[i]);
    }
    function Ki(e) {
      if (e.indexOf("-") === -1) return !1;
      switch (e) {
        case "annotation-xml":
        case "color-profile":
        case "font-face":
        case "font-face-src":
        case "font-face-uri":
        case "font-face-format":
        case "font-face-name":
        case "missing-glyph":
          return !1;
        default:
          return !0;
      }
    }
    function cs(e) {
      return Qd.get(e) || e;
    }
    function Ic(e, t) {
      if (Yu.call(au, t) && au[t])
        return !0;
      if (Zd.test(t)) {
        if (e = "aria-" + t.slice(4).toLowerCase(), e = zm.hasOwnProperty(e) ? e : null, e == null)
          return console.error(
            "Invalid ARIA attribute `%s`. ARIA attributes follow the pattern aria-* and must be lowercase.",
            t
          ), au[t] = !0;
        if (t !== e)
          return console.error(
            "Invalid ARIA attribute `%s`. Did you mean `%s`?",
            t,
            e
          ), au[t] = !0;
      }
      if (Mm.test(t)) {
        if (e = t.toLowerCase(), e = zm.hasOwnProperty(e) ? e : null, e == null) return au[t] = !0, !1;
        t !== e && (console.error(
          "Unknown ARIA attribute `%s`. Did you mean `%s`?",
          t,
          e
        ), au[t] = !0);
      }
      return !0;
    }
    function Pc(e, t) {
      var a = [], i;
      for (i in t)
        Ic(e, i) || a.push(i);
      t = a.map(function(o) {
        return "`" + o + "`";
      }).join(", "), a.length === 1 ? console.error(
        "Invalid aria prop %s on <%s> tag. For details, see https://react.dev/link/invalid-aria-props",
        t,
        e
      ) : 1 < a.length && console.error(
        "Invalid aria props %s on <%s> tag. For details, see https://react.dev/link/invalid-aria-props",
        t,
        e
      );
    }
    function Ep(e, t, a, i) {
      if (Yu.call(Fl, t) && Fl[t])
        return !0;
      var o = t.toLowerCase();
      if (o === "onfocusin" || o === "onfocusout")
        return console.error(
          "React uses onFocus and onBlur instead of onFocusIn and onFocusOut. All React events are normalized to bubble, so onFocusIn and onFocusOut are not needed/supported by React."
        ), Fl[t] = !0;
      if (typeof a == "function" && (e === "form" && t === "action" || e === "input" && t === "formAction" || e === "button" && t === "formAction"))
        return !0;
      if (i != null) {
        if (e = i.possibleRegistrationNames, i.registrationNameDependencies.hasOwnProperty(t))
          return !0;
        if (i = e.hasOwnProperty(o) ? e[o] : null, i != null)
          return console.error(
            "Invalid event handler property `%s`. Did you mean `%s`?",
            t,
            i
          ), Fl[t] = !0;
        if (Hr.test(t))
          return console.error(
            "Unknown event handler property `%s`. It will be ignored.",
            t
          ), Fl[t] = !0;
      } else if (Hr.test(t))
        return l.test(t) && console.error(
          "Invalid event handler property `%s`. React events use the camelCase naming convention, for example `onClick`.",
          t
        ), Fl[t] = !0;
      if (n.test(t) || u.test(t)) return !0;
      if (o === "innerhtml")
        return console.error(
          "Directly setting property `innerHTML` is not permitted. For more information, lookup documentation on `dangerouslySetInnerHTML`."
        ), Fl[t] = !0;
      if (o === "aria")
        return console.error(
          "The `aria` attribute is reserved for future use in React. Pass individual `aria-` attributes instead."
        ), Fl[t] = !0;
      if (o === "is" && a !== null && a !== void 0 && typeof a != "string")
        return console.error(
          "Received a `%s` for a string attribute `is`. If this is expected, cast the value to a string.",
          typeof a
        ), Fl[t] = !0;
      if (typeof a == "number" && isNaN(a))
        return console.error(
          "Received NaN for the `%s` attribute. If this is expected, cast the value to a string.",
          t
        ), Fl[t] = !0;
      if (Hc.hasOwnProperty(o)) {
        if (o = Hc[o], o !== t)
          return console.error(
            "Invalid DOM property `%s`. Did you mean `%s`?",
            t,
            o
          ), Fl[t] = !0;
      } else if (t !== o)
        return console.error(
          "React does not recognize the `%s` prop on a DOM element. If you intentionally want it to appear in the DOM as a custom attribute, spell it as lowercase `%s` instead. If you accidentally passed it from a parent component, remove it from the DOM element.",
          t,
          o
        ), Fl[t] = !0;
      switch (t) {
        case "dangerouslySetInnerHTML":
        case "children":
        case "style":
        case "suppressContentEditableWarning":
        case "suppressHydrationWarning":
        case "defaultValue":
        case "defaultChecked":
        case "innerHTML":
        case "ref":
          return !0;
        case "innerText":
        case "textContent":
          return !0;
      }
      switch (typeof a) {
        case "boolean":
          switch (t) {
            case "autoFocus":
            case "checked":
            case "multiple":
            case "muted":
            case "selected":
            case "contentEditable":
            case "spellCheck":
            case "draggable":
            case "value":
            case "autoReverse":
            case "externalResourcesRequired":
            case "focusable":
            case "preserveAlpha":
            case "allowFullScreen":
            case "async":
            case "autoPlay":
            case "controls":
            case "default":
            case "defer":
            case "disabled":
            case "disablePictureInPicture":
            case "disableRemotePlayback":
            case "formNoValidate":
            case "hidden":
            case "loop":
            case "noModule":
            case "noValidate":
            case "open":
            case "playsInline":
            case "readOnly":
            case "required":
            case "reversed":
            case "scoped":
            case "seamless":
            case "itemScope":
            case "capture":
            case "download":
            case "inert":
              return !0;
            default:
              return o = t.toLowerCase().slice(0, 5), o === "data-" || o === "aria-" ? !0 : (a ? console.error(
                'Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s="%s" or %s={value.toString()}.',
                a,
                t,
                t,
                a,
                t
              ) : console.error(
                'Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s="%s" or %s={value.toString()}.\n\nIf you used to conditionally omit it with %s={condition && value}, pass %s={condition ? value : undefined} instead.',
                a,
                t,
                t,
                a,
                t,
                t,
                t
              ), Fl[t] = !0);
          }
        case "function":
        case "symbol":
          return Fl[t] = !0, !1;
        case "string":
          if (a === "false" || a === "true") {
            switch (t) {
              case "checked":
              case "selected":
              case "multiple":
              case "muted":
              case "allowFullScreen":
              case "async":
              case "autoPlay":
              case "controls":
              case "default":
              case "defer":
              case "disabled":
              case "disablePictureInPicture":
              case "disableRemotePlayback":
              case "formNoValidate":
              case "hidden":
              case "loop":
              case "noModule":
              case "noValidate":
              case "open":
              case "playsInline":
              case "readOnly":
              case "required":
              case "reversed":
              case "scoped":
              case "seamless":
              case "itemScope":
              case "inert":
                break;
              default:
                return !0;
            }
            console.error(
              "Received the string `%s` for the boolean attribute `%s`. %s Did you mean %s={%s}?",
              a,
              t,
              a === "false" ? "The browser will interpret it as a truthy value." : 'Although this works, it will not work as expected if you pass the string "false".',
              t,
              a
            ), Fl[t] = !0;
          }
      }
      return !0;
    }
    function Mh(e, t, a) {
      var i = [], o;
      for (o in t)
        Ep(e, o, t[o], a) || i.push(o);
      t = i.map(function(f) {
        return "`" + f + "`";
      }).join(", "), i.length === 1 ? console.error(
        "Invalid value for prop %s on <%s> tag. Either remove it from the element, or pass a string or number value to keep it in the DOM. For details, see https://react.dev/link/attribute-behavior ",
        t,
        e
      ) : 1 < i.length && console.error(
        "Invalid values for props %s on <%s> tag. Either remove them from the element, or pass a string or number value to keep them in the DOM. For details, see https://react.dev/link/attribute-behavior ",
        t,
        e
      );
    }
    function eo(e) {
      return c.test("" + e) ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')" : e;
    }
    function Ji(e) {
      return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e;
    }
    function zn(e) {
      var t = Rl(e);
      if (t && (e = t.stateNode)) {
        var a = e[ma] || null;
        e: switch (e = t.stateNode, t.type) {
          case "input":
            if (Fu(
              e,
              a.value,
              a.defaultValue,
              a.defaultValue,
              a.checked,
              a.defaultChecked,
              a.type,
              a.name
            ), t = a.name, a.type === "radio" && t != null) {
              for (a = e; a.parentNode; ) a = a.parentNode;
              for (Z(t, "name"), a = a.querySelectorAll(
                'input[name="' + Sa(
                  "" + t
                ) + '"][type="radio"]'
              ), t = 0; t < a.length; t++) {
                var i = a[t];
                if (i !== e && i.form === e.form) {
                  var o = i[ma] || null;
                  if (!o)
                    throw Error(
                      "ReactDOMInput: Mixing React and non-React radio inputs with the same `name` is not supported."
                    );
                  Fu(
                    i,
                    o.value,
                    o.defaultValue,
                    o.defaultValue,
                    o.checked,
                    o.defaultChecked,
                    o.type,
                    o.name
                  );
                }
              }
              for (t = 0; t < a.length; t++)
                i = a[t], i.form === e.form && il(i);
            }
            break e;
          case "textarea":
            as(e, a.value, a.defaultValue);
            break e;
          case "select":
            t = a.value, t != null && vu(e, !!a.multiple, t, !1);
        }
      }
    }
    function os(e, t, a) {
      if (p) return e(t, a);
      p = !0;
      try {
        var i = e(t);
        return i;
      } finally {
        if (p = !1, (s !== null || y !== null) && (gc(), s && (t = s, e = y, y = s = null, zn(t), e)))
          for (t = 0; t < e.length; t++) zn(e[t]);
      }
    }
    function gu(e, t) {
      var a = e.stateNode;
      if (a === null) return null;
      var i = a[ma] || null;
      if (i === null) return null;
      a = i[t];
      e: switch (t) {
        case "onClick":
        case "onClickCapture":
        case "onDoubleClick":
        case "onDoubleClickCapture":
        case "onMouseDown":
        case "onMouseDownCapture":
        case "onMouseMove":
        case "onMouseMoveCapture":
        case "onMouseUp":
        case "onMouseUpCapture":
        case "onMouseEnter":
          (i = !i.disabled) || (e = e.type, i = !(e === "button" || e === "input" || e === "select" || e === "textarea")), e = !i;
          break e;
        default:
          e = !1;
      }
      if (e) return null;
      if (a && typeof a != "function")
        throw Error(
          "Expected `" + t + "` listener to be a function, instead got a value of `" + typeof a + "` type."
        );
      return a;
    }
    function bu() {
      if (q) return q;
      var e, t = N, a = t.length, i, o = "value" in $ ? $.value : $.textContent, f = o.length;
      for (e = 0; e < a && t[e] === o[e]; e++) ;
      var d = a - e;
      for (i = 1; i <= d && t[a - i] === o[f - i]; i++) ;
      return q = o.slice(e, 1 < i ? 1 - i : void 0);
    }
    function to(e) {
      var t = e.keyCode;
      return "charCode" in e ? (e = e.charCode, e === 0 && t === 13 && (e = 13)) : e = t, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0;
    }
    function ki() {
      return !0;
    }
    function Uh() {
      return !1;
    }
    function Dl(e) {
      function t(a, i, o, f, d) {
        this._reactName = a, this._targetInst = o, this.type = i, this.nativeEvent = f, this.target = d, this.currentTarget = null;
        for (var h in e)
          e.hasOwnProperty(h) && (a = e[h], this[h] = a ? a(f) : f[h]);
        return this.isDefaultPrevented = (f.defaultPrevented != null ? f.defaultPrevented : f.returnValue === !1) ? ki : Uh, this.isPropagationStopped = Uh, this;
      }
      return Ze(t.prototype, {
        preventDefault: function() {
          this.defaultPrevented = !0;
          var a = this.nativeEvent;
          a && (a.preventDefault ? a.preventDefault() : typeof a.returnValue != "unknown" && (a.returnValue = !1), this.isDefaultPrevented = ki);
        },
        stopPropagation: function() {
          var a = this.nativeEvent;
          a && (a.stopPropagation ? a.stopPropagation() : typeof a.cancelBubble != "unknown" && (a.cancelBubble = !0), this.isPropagationStopped = ki);
        },
        persist: function() {
        },
        isPersistent: ki
      }), t;
    }
    function fs(e) {
      var t = this.nativeEvent;
      return t.getModifierState ? t.getModifierState(e) : (e = uS[e]) ? !!t[e] : !1;
    }
    function rs() {
      return fs;
    }
    function Jl(e, t) {
      switch (e) {
        case "keyup":
          return vS.indexOf(t.keyCode) !== -1;
        case "keydown":
          return t.keyCode !== N0;
        case "keypress":
        case "mousedown":
        case "focusout":
          return !0;
        default:
          return !1;
      }
    }
    function ei(e) {
      return e = e.detail, typeof e == "object" && "data" in e ? e.data : null;
    }
    function ss(e, t) {
      switch (e) {
        case "compositionend":
          return ei(t);
        case "keypress":
          return t.which !== B0 ? null : (Y0 = !0, q0);
        case "textInput":
          return e = t.data, e === q0 && Y0 ? null : e;
        default:
          return null;
      }
    }
    function Ef(e, t) {
      if (Kd)
        return e === "compositionend" || !xg && Jl(e, t) ? (e = bu(), q = N = $ = null, Kd = !1, e) : null;
      switch (e) {
        case "paste":
          return null;
        case "keypress":
          if (!(t.ctrlKey || t.altKey || t.metaKey) || t.ctrlKey && t.altKey) {
            if (t.char && 1 < t.char.length)
              return t.char;
            if (t.which)
              return String.fromCharCode(t.which);
          }
          return null;
        case "compositionend":
          return w0 && t.locale !== "ko" ? null : t.data;
        default:
          return null;
      }
    }
    function Ap(e) {
      var t = e && e.nodeName && e.nodeName.toLowerCase();
      return t === "input" ? !!bS[e.type] : t === "textarea";
    }
    function _h(e) {
      if (!S) return !1;
      e = "on" + e;
      var t = e in document;
      return t || (t = document.createElement("div"), t.setAttribute(e, "return;"), t = typeof t[e] == "function"), t;
    }
    function ds(e, t, a, i) {
      s ? y ? y.push(i) : y = [i] : s = i, t = fr(t, "onChange"), 0 < t.length && (a = new Ee(
        "onChange",
        "change",
        null,
        a,
        i
      ), e.push({ event: a, listeners: t }));
    }
    function Af(e) {
      kn(e, 0);
    }
    function $i(e) {
      var t = ln(e);
      if (il(t)) return e;
    }
    function Ch(e, t) {
      if (e === "change") return t;
    }
    function Rp() {
      Cm && (Cm.detachEvent("onpropertychange", Op), Hm = Cm = null);
    }
    function Op(e) {
      if (e.propertyName === "value" && $i(Hm)) {
        var t = [];
        ds(
          t,
          Hm,
          e,
          Ji(e)
        ), os(Af, t);
      }
    }
    function mg(e, t, a) {
      e === "focusin" ? (Rp(), Cm = t, Hm = a, Cm.attachEvent("onpropertychange", Op)) : e === "focusout" && Rp();
    }
    function Hh(e) {
      if (e === "selectionchange" || e === "keyup" || e === "keydown")
        return $i(Hm);
    }
    function pg(e, t) {
      if (e === "click") return $i(t);
    }
    function vg(e, t) {
      if (e === "input" || e === "change")
        return $i(t);
    }
    function gg(e, t) {
      return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
    }
    function Rf(e, t) {
      if (_a(e, t)) return !0;
      if (typeof e != "object" || e === null || typeof t != "object" || t === null)
        return !1;
      var a = Object.keys(e), i = Object.keys(t);
      if (a.length !== i.length) return !1;
      for (i = 0; i < a.length; i++) {
        var o = a[i];
        if (!Yu.call(t, o) || !_a(e[o], t[o]))
          return !1;
      }
      return !0;
    }
    function Dp(e) {
      for (; e && e.firstChild; ) e = e.firstChild;
      return e;
    }
    function xh(e, t) {
      var a = Dp(e);
      e = 0;
      for (var i; a; ) {
        if (a.nodeType === 3) {
          if (i = e + a.textContent.length, e <= t && i >= t)
            return { node: a, offset: t - e };
          e = i;
        }
        e: {
          for (; a; ) {
            if (a.nextSibling) {
              a = a.nextSibling;
              break e;
            }
            a = a.parentNode;
          }
          a = void 0;
        }
        a = Dp(a);
      }
    }
    function zp(e, t) {
      return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? zp(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1;
    }
    function Mp(e) {
      e = e != null && e.ownerDocument != null && e.ownerDocument.defaultView != null ? e.ownerDocument.defaultView : window;
      for (var t = pf(e.document); t instanceof e.HTMLIFrameElement; ) {
        try {
          var a = typeof t.contentWindow.location.href == "string";
        } catch {
          a = !1;
        }
        if (a) e = t.contentWindow;
        else break;
        t = pf(e.document);
      }
      return t;
    }
    function Nh(e) {
      var t = e && e.nodeName && e.nodeName.toLowerCase();
      return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
    }
    function Up(e, t, a) {
      var i = a.window === a ? a.document : a.nodeType === 9 ? a : a.ownerDocument;
      wg || Jd == null || Jd !== pf(i) || (i = Jd, "selectionStart" in i && Nh(i) ? i = { start: i.selectionStart, end: i.selectionEnd } : (i = (i.ownerDocument && i.ownerDocument.defaultView || window).getSelection(), i = {
        anchorNode: i.anchorNode,
        anchorOffset: i.anchorOffset,
        focusNode: i.focusNode,
        focusOffset: i.focusOffset
      }), xm && Rf(xm, i) || (xm = i, i = fr(Ng, "onSelect"), 0 < i.length && (t = new Ee(
        "onSelect",
        "select",
        null,
        t,
        a
      ), e.push({ event: t, listeners: i }), t.target = Jd)));
    }
    function Su(e, t) {
      var a = {};
      return a[e.toLowerCase()] = t.toLowerCase(), a["Webkit" + e] = "webkit" + t, a["Moz" + e] = "moz" + t, a;
    }
    function Wi(e) {
      if (Bg[e]) return Bg[e];
      if (!kd[e]) return e;
      var t = kd[e], a;
      for (a in t)
        if (t.hasOwnProperty(a) && a in G0)
          return Bg[e] = t[a];
      return e;
    }
    function nn(e, t) {
      Z0.set(e, t), te(t, [e]);
    }
    function Ta(e, t) {
      if (typeof e == "object" && e !== null) {
        var a = Yg.get(e);
        return a !== void 0 ? a : (t = {
          value: e,
          source: t,
          stack: es(t)
        }, Yg.set(e, t), t);
      }
      return {
        value: e,
        source: t,
        stack: es(t)
      };
    }
    function Of() {
      for (var e = $d, t = jg = $d = 0; t < e; ) {
        var a = nu[t];
        nu[t++] = null;
        var i = nu[t];
        nu[t++] = null;
        var o = nu[t];
        nu[t++] = null;
        var f = nu[t];
        if (nu[t++] = null, i !== null && o !== null) {
          var d = i.pending;
          d === null ? o.next = o : (o.next = d.next, d.next = o), i.pending = o;
        }
        f !== 0 && _p(a, o, f);
      }
    }
    function hs(e, t, a, i) {
      nu[$d++] = e, nu[$d++] = t, nu[$d++] = a, nu[$d++] = i, jg |= i, e.lanes |= i, e = e.alternate, e !== null && (e.lanes |= i);
    }
    function wh(e, t, a, i) {
      return hs(e, t, a, i), ys(e);
    }
    function aa(e, t) {
      return hs(e, null, null, t), ys(e);
    }
    function _p(e, t, a) {
      e.lanes |= a;
      var i = e.alternate;
      i !== null && (i.lanes |= a);
      for (var o = !1, f = e.return; f !== null; )
        f.childLanes |= a, i = f.alternate, i !== null && (i.childLanes |= a), f.tag === 22 && (e = f.stateNode, e === null || e._visibility & Rv || (o = !0)), e = f, f = f.return;
      return e.tag === 3 ? (f = e.stateNode, o && t !== null && (o = 31 - Ll(a), e = f.hiddenUpdates, i = e[o], i === null ? e[o] = [t] : i.push(t), t.lane = a | 536870912), f) : null;
    }
    function ys(e) {
      if (tp > VS)
        throw Zr = tp = 0, lp = m0 = null, Error(
          "Maximum update depth exceeded. This can happen when a component repeatedly calls setState inside componentWillUpdate or componentDidUpdate. React limits the number of nested updates to prevent infinite loops."
        );
      Zr > XS && (Zr = 0, lp = null, console.error(
        "Maximum update depth exceeded. This can happen when a component calls setState inside useEffect, but useEffect either doesn't have a dependency array, or one of the dependencies changes on every render."
      )), e.alternate === null && (e.flags & 4098) !== 0 && vn(e);
      for (var t = e, a = t.return; a !== null; )
        t.alternate === null && (t.flags & 4098) !== 0 && vn(e), t = a, a = t.return;
      return t.tag === 3 ? t.stateNode : null;
    }
    function Fi(e) {
      if (uu === null) return e;
      var t = uu(e);
      return t === void 0 ? e : t.current;
    }
    function Bh(e) {
      if (uu === null) return e;
      var t = uu(e);
      return t === void 0 ? e != null && typeof e.render == "function" && (t = Fi(e.render), e.render !== t) ? (t = { $$typeof: Bu, render: t }, e.displayName !== void 0 && (t.displayName = e.displayName), t) : e : t.current;
    }
    function Cp(e, t) {
      if (uu === null) return !1;
      var a = e.elementType;
      t = t.type;
      var i = !1, o = typeof t == "object" && t !== null ? t.$$typeof : null;
      switch (e.tag) {
        case 1:
          typeof t == "function" && (i = !0);
          break;
        case 0:
          (typeof t == "function" || o === Ma) && (i = !0);
          break;
        case 11:
          (o === Bu || o === Ma) && (i = !0);
          break;
        case 14:
        case 15:
          (o === Sr || o === Ma) && (i = !0);
          break;
        default:
          return !1;
      }
      return !!(i && (e = uu(a), e !== void 0 && e === uu(t)));
    }
    function Hp(e) {
      uu !== null && typeof WeakSet == "function" && (Wd === null && (Wd = /* @__PURE__ */ new WeakSet()), Wd.add(e));
    }
    function Df(e, t, a) {
      var i = e.alternate, o = e.child, f = e.sibling, d = e.tag, h = e.type, v = null;
      switch (d) {
        case 0:
        case 15:
        case 1:
          v = h;
          break;
        case 11:
          v = h.render;
      }
      if (uu === null)
        throw Error("Expected resolveFamily to be set during hot reload.");
      var b = !1;
      h = !1, v !== null && (v = uu(v), v !== void 0 && (a.has(v) ? h = !0 : t.has(v) && (d === 1 ? h = !0 : b = !0))), Wd !== null && (Wd.has(e) || i !== null && Wd.has(i)) && (h = !0), h && (e._debugNeedsRemount = !0), (h || b) && (i = aa(e, 2), i !== null && Qt(i, e, 2)), o === null || h || Df(
        o,
        t,
        a
      ), f !== null && Df(
        f,
        t,
        a
      );
    }
    function zf(e, t, a, i) {
      this.tag = e, this.key = a, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.refCleanup = this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = i, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null, this.actualDuration = -0, this.actualStartTime = -1.1, this.treeBaseDuration = this.selfBaseDuration = -0, this._debugTask = this._debugStack = this._debugOwner = this._debugInfo = null, this._debugNeedsRemount = !1, this._debugHookTypes = null, J0 || typeof Object.preventExtensions != "function" || Object.preventExtensions(this);
    }
    function qh(e) {
      return e = e.prototype, !(!e || !e.isReactComponent);
    }
    function Mn(e, t) {
      var a = e.alternate;
      switch (a === null ? (a = U(
        e.tag,
        t,
        e.key,
        e.mode
      ), a.elementType = e.elementType, a.type = e.type, a.stateNode = e.stateNode, a._debugOwner = e._debugOwner, a._debugStack = e._debugStack, a._debugTask = e._debugTask, a._debugHookTypes = e._debugHookTypes, a.alternate = e, e.alternate = a) : (a.pendingProps = t, a.type = e.type, a.flags = 0, a.subtreeFlags = 0, a.deletions = null, a.actualDuration = -0, a.actualStartTime = -1.1), a.flags = e.flags & 65011712, a.childLanes = e.childLanes, a.lanes = e.lanes, a.child = e.child, a.memoizedProps = e.memoizedProps, a.memoizedState = e.memoizedState, a.updateQueue = e.updateQueue, t = e.dependencies, a.dependencies = t === null ? null : {
        lanes: t.lanes,
        firstContext: t.firstContext,
        _debugThenableState: t._debugThenableState
      }, a.sibling = e.sibling, a.index = e.index, a.ref = e.ref, a.refCleanup = e.refCleanup, a.selfBaseDuration = e.selfBaseDuration, a.treeBaseDuration = e.treeBaseDuration, a._debugInfo = e._debugInfo, a._debugNeedsRemount = e._debugNeedsRemount, a.tag) {
        case 0:
        case 15:
          a.type = Fi(e.type);
          break;
        case 1:
          a.type = Fi(e.type);
          break;
        case 11:
          a.type = Bh(e.type);
      }
      return a;
    }
    function Yh(e, t) {
      e.flags &= 65011714;
      var a = e.alternate;
      return a === null ? (e.childLanes = 0, e.lanes = t, e.child = null, e.subtreeFlags = 0, e.memoizedProps = null, e.memoizedState = null, e.updateQueue = null, e.dependencies = null, e.stateNode = null, e.selfBaseDuration = 0, e.treeBaseDuration = 0) : (e.childLanes = a.childLanes, e.lanes = a.lanes, e.child = a.child, e.subtreeFlags = 0, e.deletions = null, e.memoizedProps = a.memoizedProps, e.memoizedState = a.memoizedState, e.updateQueue = a.updateQueue, e.type = a.type, t = a.dependencies, e.dependencies = t === null ? null : {
        lanes: t.lanes,
        firstContext: t.firstContext,
        _debugThenableState: t._debugThenableState
      }, e.selfBaseDuration = a.selfBaseDuration, e.treeBaseDuration = a.treeBaseDuration), e;
    }
    function ms(e, t, a, i, o, f) {
      var d = 0, h = e;
      if (typeof e == "function")
        qh(e) && (d = 1), h = Fi(h);
      else if (typeof e == "string")
        d = O(), d = wo(e, a, d) ? 26 : e === "html" || e === "head" || e === "body" ? 27 : 5;
      else
        e: switch (e) {
          case sm:
            return t = U(31, a, t, o), t.elementType = sm, t.lanes = f, t;
          case Ye:
            return ti(
              a.children,
              o,
              f,
              t
            );
          case qo:
            d = 8, o |= va, o |= Xu;
            break;
          case Yo:
            return e = a, i = o, typeof e.id != "string" && console.error(
              'Profiler must specify an "id" of type `string` as a prop. Received the type `%s` instead.',
              typeof e.id
            ), t = U(12, e, t, i | Il), t.elementType = Yo, t.lanes = f, t.stateNode = { effectDuration: 0, passiveEffectDuration: 0 }, t;
          case jo:
            return t = U(13, a, t, o), t.elementType = jo, t.lanes = f, t;
          case zi:
            return t = U(19, a, t, o), t.elementType = zi, t.lanes = f, t;
          default:
            if (typeof e == "object" && e !== null)
              switch (e.$$typeof) {
                case rm:
                case $a:
                  d = 10;
                  break e;
                case _d:
                  d = 9;
                  break e;
                case Bu:
                  d = 11, h = Bh(h);
                  break e;
                case Sr:
                  d = 14;
                  break e;
                case Ma:
                  d = 16, h = null;
                  break e;
              }
            h = "", (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (h += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports."), e === null ? a = "null" : He(e) ? a = "array" : e !== void 0 && e.$$typeof === Di ? (a = "<" + (We(e.type) || "Unknown") + " />", h = " Did you accidentally export a JSX literal instead of a component?") : a = typeof e, (d = i ? Ot(i) : null) && (h += `

Check the render method of \`` + d + "`."), d = 29, a = Error(
              "Element type is invalid: expected a string (for built-in components) or a class/function (for composite components) but got: " + (a + "." + h)
            ), h = null;
        }
      return t = U(d, a, t, o), t.elementType = e, t.type = h, t.lanes = f, t._debugOwner = i, t;
    }
    function Mf(e, t, a) {
      return t = ms(
        e.type,
        e.key,
        e.props,
        e._owner,
        t,
        a
      ), t._debugOwner = e._owner, t._debugStack = e._debugStack, t._debugTask = e._debugTask, t;
    }
    function ti(e, t, a, i) {
      return e = U(7, e, i, t), e.lanes = a, e;
    }
    function li(e, t, a) {
      return e = U(6, e, null, t), e.lanes = a, e;
    }
    function jh(e, t, a) {
      return t = U(
        4,
        e.children !== null ? e.children : [],
        e.key,
        t
      ), t.lanes = a, t.stateNode = {
        containerInfo: e.containerInfo,
        pendingChildren: null,
        implementation: e.implementation
      }, t;
    }
    function Ii(e, t) {
      un(), Fd[Id++] = Dv, Fd[Id++] = Ov, Ov = e, Dv = t;
    }
    function xp(e, t, a) {
      un(), iu[cu++] = Nc, iu[cu++] = wc, iu[cu++] = xr, xr = e;
      var i = Nc;
      e = wc;
      var o = 32 - Ll(i) - 1;
      i &= ~(1 << o), a += 1;
      var f = 32 - Ll(t) + o;
      if (30 < f) {
        var d = o - o % 5;
        f = (i & (1 << d) - 1).toString(32), i >>= d, o -= d, Nc = 1 << 32 - Ll(t) + o | a << o | i, wc = f + e;
      } else
        Nc = 1 << f | a << o | i, wc = e;
    }
    function ps(e) {
      un(), e.return !== null && (Ii(e, 1), xp(e, 1, 0));
    }
    function vs(e) {
      for (; e === Ov; )
        Ov = Fd[--Id], Fd[Id] = null, Dv = Fd[--Id], Fd[Id] = null;
      for (; e === xr; )
        xr = iu[--cu], iu[cu] = null, wc = iu[--cu], iu[cu] = null, Nc = iu[--cu], iu[cu] = null;
    }
    function un() {
      yt || console.error(
        "Expected to be hydrating. This is a bug in React. Please file an issue."
      );
    }
    function cn(e, t) {
      if (e.return === null) {
        if (ou === null)
          ou = {
            fiber: e,
            children: [],
            serverProps: void 0,
            serverTail: [],
            distanceFromLeaf: t
          };
        else {
          if (ou.fiber !== e)
            throw Error(
              "Saw multiple hydration diff roots in a pass. This is a bug in React."
            );
          ou.distanceFromLeaf > t && (ou.distanceFromLeaf = t);
        }
        return ou;
      }
      var a = cn(
        e.return,
        t + 1
      ).children;
      return 0 < a.length && a[a.length - 1].fiber === e ? (a = a[a.length - 1], a.distanceFromLeaf > t && (a.distanceFromLeaf = t), a) : (t = {
        fiber: e,
        children: [],
        serverProps: void 0,
        serverTail: [],
        distanceFromLeaf: t
      }, a.push(t), t);
    }
    function Gh(e, t) {
      Bc || (e = cn(e, 0), e.serverProps = null, t !== null && (t = Sd(t), e.serverTail.push(t)));
    }
    function Un(e) {
      var t = "", a = ou;
      throw a !== null && (ou = null, t = bf(a)), lo(
        Ta(
          Error(
            `Hydration failed because the server rendered HTML didn't match the client. As a result this tree will be regenerated on the client. This can happen if a SSR-ed Client Component used:

- A server/client branch \`if (typeof window !== 'undefined')\`.
- Variable input such as \`Date.now()\` or \`Math.random()\` which changes each time it's called.
- Date formatting in a user's locale which doesn't match the server.
- External changing data without sending a snapshot of it along with the HTML.
- Invalid HTML tag nesting.

It can also happen if the client has a browser extension installed which messes with the HTML before React loaded.

https://react.dev/link/hydration-mismatch` + t
          ),
          e
        )
      ), Gg;
    }
    function Lh(e) {
      var t = e.stateNode, a = e.type, i = e.memoizedProps;
      switch (t[Vl] = e, t[ma] = i, $n(a, i), a) {
        case "dialog":
          Fe("cancel", t), Fe("close", t);
          break;
        case "iframe":
        case "object":
        case "embed":
          Fe("load", t);
          break;
        case "video":
        case "audio":
          for (a = 0; a < ap.length; a++)
            Fe(ap[a], t);
          break;
        case "source":
          Fe("error", t);
          break;
        case "img":
        case "image":
        case "link":
          Fe("error", t), Fe("load", t);
          break;
        case "details":
          Fe("toggle", t);
          break;
        case "input":
          pe("input", i), Fe("invalid", t), Wu(t, i), gp(
            t,
            i.value,
            i.defaultValue,
            i.checked,
            i.defaultChecked,
            i.type,
            i.name,
            !0
          ), pu(t);
          break;
        case "option":
          Eh(t, i);
          break;
        case "select":
          pe("select", i), Fe("invalid", t), vf(t, i);
          break;
        case "textarea":
          pe("textarea", i), Fe("invalid", t), Dn(t, i), Ah(
            t,
            i.value,
            i.defaultValue,
            i.children
          ), pu(t);
      }
      a = i.children, typeof a != "string" && typeof a != "number" && typeof a != "bigint" || t.textContent === "" + a || i.suppressHydrationWarning === !0 || Xy(t.textContent, a) ? (i.popover != null && (Fe("beforetoggle", t), Fe("toggle", t)), i.onScroll != null && Fe("scroll", t), i.onScrollEnd != null && Fe("scrollend", t), i.onClick != null && (t.onclick = Hu), t = !0) : t = !1, t || Un(e);
    }
    function Vh(e) {
      for (Ca = e.return; Ca; )
        switch (Ca.tag) {
          case 5:
          case 13:
            wi = !1;
            return;
          case 27:
          case 3:
            wi = !0;
            return;
          default:
            Ca = Ca.return;
        }
    }
    function Pi(e) {
      if (e !== Ca) return !1;
      if (!yt)
        return Vh(e), yt = !0, !1;
      var t = e.tag, a;
      if ((a = t !== 3 && t !== 27) && ((a = t === 5) && (a = e.type, a = !(a !== "form" && a !== "button") || Wn(e.type, e.memoizedProps)), a = !a), a && ll) {
        for (a = ll; a; ) {
          var i = cn(e, 0), o = Sd(a);
          i.serverTail.push(o), a = o.type === "Suspense" ? Fy(a) : Cl(a.nextSibling);
        }
        Un(e);
      }
      if (Vh(e), t === 13) {
        if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e)
          throw Error(
            "Expected to have a hydrated suspense instance. This error is likely caused by a bug in React. Please file an issue."
          );
        ll = Fy(e);
      } else
        t === 27 ? (t = ll, Fn(e.type) ? (e = z0, z0 = null, ll = e) : ll = t) : ll = Ca ? Cl(e.stateNode.nextSibling) : null;
      return !0;
    }
    function ec() {
      ll = Ca = null, Bc = yt = !1;
    }
    function Xh() {
      var e = Nr;
      return e !== null && (Na === null ? Na = e : Na.push.apply(
        Na,
        e
      ), Nr = null), e;
    }
    function lo(e) {
      Nr === null ? Nr = [e] : Nr.push(e);
    }
    function Qh() {
      var e = ou;
      if (e !== null) {
        ou = null;
        for (var t = bf(e); 0 < e.children.length; )
          e = e.children[0];
        he(e.fiber, function() {
          console.error(
            `A tree hydrated but some attributes of the server rendered HTML didn't match the client properties. This won't be patched up. This can happen if a SSR-ed Client Component used:

- A server/client branch \`if (typeof window !== 'undefined')\`.
- Variable input such as \`Date.now()\` or \`Math.random()\` which changes each time it's called.
- Date formatting in a user's locale which doesn't match the server.
- External changing data without sending a snapshot of it along with the HTML.
- Invalid HTML tag nesting.

It can also happen if the client has a browser extension installed which messes with the HTML before React loaded.

%s%s`,
            "https://react.dev/link/hydration-mismatch",
            t
          );
        });
      }
    }
    function gs() {
      Pd = zv = null, eh = !1;
    }
    function ai(e, t, a) {
      De(Lg, t._currentValue, e), t._currentValue = a, De(Vg, t._currentRenderer, e), t._currentRenderer !== void 0 && t._currentRenderer !== null && t._currentRenderer !== F0 && console.error(
        "Detected multiple renderers concurrently rendering the same context provider. This is currently unsupported."
      ), t._currentRenderer = F0;
    }
    function Tu(e, t) {
      e._currentValue = Lg.current;
      var a = Vg.current;
      Se(Vg, t), e._currentRenderer = a, Se(Lg, t);
    }
    function Zh(e, t, a) {
      for (; e !== null; ) {
        var i = e.alternate;
        if ((e.childLanes & t) !== t ? (e.childLanes |= t, i !== null && (i.childLanes |= t)) : i !== null && (i.childLanes & t) !== t && (i.childLanes |= t), e === a) break;
        e = e.return;
      }
      e !== a && console.error(
        "Expected to find the propagation root when scheduling context work. This error is likely caused by a bug in React. Please file an issue."
      );
    }
    function Kh(e, t, a, i) {
      var o = e.child;
      for (o !== null && (o.return = e); o !== null; ) {
        var f = o.dependencies;
        if (f !== null) {
          var d = o.child;
          f = f.firstContext;
          e: for (; f !== null; ) {
            var h = f;
            f = o;
            for (var v = 0; v < t.length; v++)
              if (h.context === t[v]) {
                f.lanes |= a, h = f.alternate, h !== null && (h.lanes |= a), Zh(
                  f.return,
                  a,
                  e
                ), i || (d = null);
                break e;
              }
            f = h.next;
          }
        } else if (o.tag === 18) {
          if (d = o.return, d === null)
            throw Error(
              "We just came from a parent so we must have had a parent. This is a bug in React."
            );
          d.lanes |= a, f = d.alternate, f !== null && (f.lanes |= a), Zh(
            d,
            a,
            e
          ), d = null;
        } else d = o.child;
        if (d !== null) d.return = o;
        else
          for (d = o; d !== null; ) {
            if (d === e) {
              d = null;
              break;
            }
            if (o = d.sibling, o !== null) {
              o.return = d.return, d = o;
              break;
            }
            d = d.return;
          }
        o = d;
      }
    }
    function zl(e, t, a, i) {
      e = null;
      for (var o = t, f = !1; o !== null; ) {
        if (!f) {
          if ((o.flags & 524288) !== 0) f = !0;
          else if ((o.flags & 262144) !== 0) break;
        }
        if (o.tag === 10) {
          var d = o.alternate;
          if (d === null)
            throw Error("Should have a current fiber. This is a bug in React.");
          if (d = d.memoizedProps, d !== null) {
            var h = o.type;
            _a(o.pendingProps.value, d.value) || (e !== null ? e.push(h) : e = [h]);
          }
        } else if (o === Lo.current) {
          if (d = o.alternate, d === null)
            throw Error("Should have a current fiber. This is a bug in React.");
          d.memoizedState.memoizedState !== o.memoizedState.memoizedState && (e !== null ? e.push(cp) : e = [cp]);
        }
        o = o.return;
      }
      e !== null && Kh(
        t,
        e,
        a,
        i
      ), t.flags |= 262144;
    }
    function ni(e) {
      for (e = e.firstContext; e !== null; ) {
        if (!_a(
          e.context._currentValue,
          e.memoizedValue
        ))
          return !0;
        e = e.next;
      }
      return !1;
    }
    function ui(e) {
      zv = e, Pd = null, e = e.dependencies, e !== null && (e.firstContext = null);
    }
    function _t(e) {
      return eh && console.error(
        "Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo()."
      ), Jh(zv, e);
    }
    function Uf(e, t) {
      return zv === null && ui(e), Jh(e, t);
    }
    function Jh(e, t) {
      var a = t._currentValue;
      if (t = { context: t, memoizedValue: a, next: null }, Pd === null) {
        if (e === null)
          throw Error(
            "Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo()."
          );
        Pd = t, e.dependencies = {
          lanes: 0,
          firstContext: t,
          _debugThenableState: null
        }, e.flags |= 524288;
      } else Pd = Pd.next = t;
      return a;
    }
    function _f() {
      return {
        controller: new zS(),
        data: /* @__PURE__ */ new Map(),
        refCount: 0
      };
    }
    function tc(e) {
      e.controller.signal.aborted && console.warn(
        "A cache instance was retained after it was already freed. This likely indicates a bug in React."
      ), e.refCount++;
    }
    function _n(e) {
      e.refCount--, 0 > e.refCount && console.warn(
        "A cache instance was released after it was already freed. This likely indicates a bug in React."
      ), e.refCount === 0 && MS(US, function() {
        e.controller.abort();
      });
    }
    function on() {
      var e = wr;
      return wr = 0, e;
    }
    function ii(e) {
      var t = wr;
      return wr = e, t;
    }
    function lc(e) {
      var t = wr;
      return wr += e, t;
    }
    function bs(e) {
      Ia = th(), 0 > e.actualStartTime && (e.actualStartTime = Ia);
    }
    function Eu(e) {
      if (0 <= Ia) {
        var t = th() - Ia;
        e.actualDuration += t, e.selfBaseDuration = t, Ia = -1;
      }
    }
    function ac(e) {
      if (0 <= Ia) {
        var t = th() - Ia;
        e.actualDuration += t, Ia = -1;
      }
    }
    function qa() {
      if (0 <= Ia) {
        var e = th() - Ia;
        Ia = -1, wr += e;
      }
    }
    function fn() {
      Ia = th();
    }
    function Cn(e) {
      for (var t = e.child; t; )
        e.actualDuration += t.actualDuration, t = t.sibling;
    }
    function Np(e, t) {
      if (Nm === null) {
        var a = Nm = [];
        Xg = 0, Br = Yy(), lh = {
          status: "pending",
          value: void 0,
          then: function(i) {
            a.push(i);
          }
        };
      }
      return Xg++, t.then(kh, kh), t;
    }
    function kh() {
      if (--Xg === 0 && Nm !== null) {
        lh !== null && (lh.status = "fulfilled");
        var e = Nm;
        Nm = null, Br = 0, lh = null;
        for (var t = 0; t < e.length; t++) (0, e[t])();
      }
    }
    function wp(e, t) {
      var a = [], i = {
        status: "pending",
        value: null,
        reason: null,
        then: function(o) {
          a.push(o);
        }
      };
      return e.then(
        function() {
          i.status = "fulfilled", i.value = t;
          for (var o = 0; o < a.length; o++) (0, a[o])(t);
        },
        function(o) {
          for (i.status = "rejected", i.reason = o, o = 0; o < a.length; o++)
            (0, a[o])(void 0);
        }
      ), i;
    }
    function $h() {
      var e = qr.current;
      return e !== null ? e : Ct.pooledCache;
    }
    function Ss(e, t) {
      t === null ? De(qr, qr.current, e) : De(qr, t.pool, e);
    }
    function Bp() {
      var e = $h();
      return e === null ? null : { parent: Nl._currentValue, pool: e };
    }
    function Wh() {
      return { didWarnAboutUncachedPromise: !1, thenables: [] };
    }
    function Fh(e) {
      return e = e.status, e === "fulfilled" || e === "rejected";
    }
    function ao() {
    }
    function Ya(e, t, a) {
      j.actQueue !== null && (j.didUsePromise = !0);
      var i = e.thenables;
      switch (a = i[a], a === void 0 ? i.push(t) : a !== t && (e.didWarnAboutUncachedPromise || (e.didWarnAboutUncachedPromise = !0, console.error(
        "A component was suspended by an uncached promise. Creating promises inside a Client Component or hook is not yet supported, except via a Suspense-compatible library or framework."
      )), t.then(ao, ao), t = a), t.status) {
        case "fulfilled":
          return t.value;
        case "rejected":
          throw e = t.reason, Ea(e), e;
        default:
          if (typeof t.status == "string")
            t.then(ao, ao);
          else {
            if (e = Ct, e !== null && 100 < e.shellSuspendCounter)
              throw Error(
                "An unknown Component is an async Client Component. Only Server Components can be async at the moment. This error is often caused by accidentally adding `'use client'` to a module that was originally written for the server."
              );
            e = t, e.status = "pending", e.then(
              function(o) {
                if (t.status === "pending") {
                  var f = t;
                  f.status = "fulfilled", f.value = o;
                }
              },
              function(o) {
                if (t.status === "pending") {
                  var f = t;
                  f.status = "rejected", f.reason = o;
                }
              }
            );
          }
          switch (t.status) {
            case "fulfilled":
              return t.value;
            case "rejected":
              throw e = t.reason, Ea(e), e;
          }
          throw Vm = t, xv = !0, Lm;
      }
    }
    function Ih() {
      if (Vm === null)
        throw Error(
          "Expected a suspended thenable. This is a bug in React. Please file an issue."
        );
      var e = Vm;
      return Vm = null, xv = !1, e;
    }
    function Ea(e) {
      if (e === Lm || e === Hv)
        throw Error(
          "Hooks are not supported inside an async component. This error is often caused by accidentally adding `'use client'` to a module that was originally written for the server."
        );
    }
    function na(e) {
      e.updateQueue = {
        baseState: e.memoizedState,
        firstBaseUpdate: null,
        lastBaseUpdate: null,
        shared: { pending: null, lanes: 0, hiddenCallbacks: null },
        callbacks: null
      };
    }
    function ci(e, t) {
      e = e.updateQueue, t.updateQueue === e && (t.updateQueue = {
        baseState: e.baseState,
        firstBaseUpdate: e.firstBaseUpdate,
        lastBaseUpdate: e.lastBaseUpdate,
        shared: e.shared,
        callbacks: null
      });
    }
    function Hn(e) {
      return {
        lane: e,
        tag: l1,
        payload: null,
        callback: null,
        next: null
      };
    }
    function rn(e, t, a) {
      var i = e.updateQueue;
      if (i === null) return null;
      if (i = i.shared, Kg === i && !u1) {
        var o = de(e);
        console.error(
          `An update (setState, replaceState, or forceUpdate) was scheduled from inside an update function. Update functions should be pure, with zero side-effects. Consider using componentDidUpdate or a callback.

Please update the following component: %s`,
          o
        ), u1 = !0;
      }
      return (St & xa) !== Sn ? (o = i.pending, o === null ? t.next = t : (t.next = o.next, o.next = t), i.pending = t, t = ys(e), _p(e, null, a), t) : (hs(e, i, t, a), ys(e));
    }
    function oi(e, t, a) {
      if (t = t.updateQueue, t !== null && (t = t.shared, (a & 4194048) !== 0)) {
        var i = t.lanes;
        i &= e.pendingLanes, a |= i, t.lanes = a, $u(e, a);
      }
    }
    function no(e, t) {
      var a = e.updateQueue, i = e.alternate;
      if (i !== null && (i = i.updateQueue, a === i)) {
        var o = null, f = null;
        if (a = a.firstBaseUpdate, a !== null) {
          do {
            var d = {
              lane: a.lane,
              tag: a.tag,
              payload: a.payload,
              callback: null,
              next: null
            };
            f === null ? o = f = d : f = f.next = d, a = a.next;
          } while (a !== null);
          f === null ? o = f = t : f = f.next = t;
        } else o = f = t;
        a = {
          baseState: i.baseState,
          firstBaseUpdate: o,
          lastBaseUpdate: f,
          shared: i.shared,
          callbacks: i.callbacks
        }, e.updateQueue = a;
        return;
      }
      e = a.lastBaseUpdate, e === null ? a.firstBaseUpdate = t : e.next = t, a.lastBaseUpdate = t;
    }
    function xn() {
      if (Jg) {
        var e = lh;
        if (e !== null) throw e;
      }
    }
    function uo(e, t, a, i) {
      Jg = !1;
      var o = e.updateQueue;
      Fo = !1, Kg = o.shared;
      var f = o.firstBaseUpdate, d = o.lastBaseUpdate, h = o.shared.pending;
      if (h !== null) {
        o.shared.pending = null;
        var v = h, b = v.next;
        v.next = null, d === null ? f = b : d.next = b, d = v;
        var B = e.alternate;
        B !== null && (B = B.updateQueue, h = B.lastBaseUpdate, h !== d && (h === null ? B.firstBaseUpdate = b : h.next = b, B.lastBaseUpdate = v));
      }
      if (f !== null) {
        var L = o.baseState;
        d = 0, B = b = v = null, h = f;
        do {
          var x = h.lane & -536870913, V = x !== h.lane;
          if (V ? (lt & x) === x : (i & x) === x) {
            x !== 0 && x === Br && (Jg = !0), B !== null && (B = B.next = {
              lane: 0,
              tag: h.tag,
              payload: h.payload,
              callback: null,
              next: null
            });
            e: {
              x = e;
              var ye = h, Ue = t, Ht = a;
              switch (ye.tag) {
                case a1:
                  if (ye = ye.payload, typeof ye == "function") {
                    eh = !0;
                    var ut = ye.call(
                      Ht,
                      L,
                      Ue
                    );
                    if (x.mode & va) {
                      oe(!0);
                      try {
                        ye.call(Ht, L, Ue);
                      } finally {
                        oe(!1);
                      }
                    }
                    eh = !1, L = ut;
                    break e;
                  }
                  L = ye;
                  break e;
                case Zg:
                  x.flags = x.flags & -65537 | 128;
                case l1:
                  if (ut = ye.payload, typeof ut == "function") {
                    if (eh = !0, ye = ut.call(
                      Ht,
                      L,
                      Ue
                    ), x.mode & va) {
                      oe(!0);
                      try {
                        ut.call(Ht, L, Ue);
                      } finally {
                        oe(!1);
                      }
                    }
                    eh = !1;
                  } else ye = ut;
                  if (ye == null) break e;
                  L = Ze({}, L, ye);
                  break e;
                case n1:
                  Fo = !0;
              }
            }
            x = h.callback, x !== null && (e.flags |= 64, V && (e.flags |= 8192), V = o.callbacks, V === null ? o.callbacks = [x] : V.push(x));
          } else
            V = {
              lane: x,
              tag: h.tag,
              payload: h.payload,
              callback: h.callback,
              next: null
            }, B === null ? (b = B = V, v = L) : B = B.next = V, d |= x;
          if (h = h.next, h === null) {
            if (h = o.shared.pending, h === null)
              break;
            V = h, h = V.next, V.next = null, o.lastBaseUpdate = V, o.shared.pending = null;
          }
        } while (!0);
        B === null && (v = L), o.baseState = v, o.firstBaseUpdate = b, o.lastBaseUpdate = B, f === null && (o.shared.lanes = 0), tf |= d, e.lanes = d, e.memoizedState = L;
      }
      Kg = null;
    }
    function Cf(e, t) {
      if (typeof e != "function")
        throw Error(
          "Invalid argument passed as callback. Expected a function. Instead received: " + e
        );
      e.call(t);
    }
    function io(e, t) {
      var a = e.shared.hiddenCallbacks;
      if (a !== null)
        for (e.shared.hiddenCallbacks = null, e = 0; e < a.length; e++)
          Cf(a[e], t);
    }
    function qp(e, t) {
      var a = e.callbacks;
      if (a !== null)
        for (e.callbacks = null, e = 0; e < a.length; e++)
          Cf(a[e], t);
    }
    function ua(e, t) {
      var a = Yi;
      De(Nv, a, e), De(ah, t, e), Yi = a | t.baseLanes;
    }
    function Hf(e) {
      De(Nv, Yi, e), De(
        ah,
        ah.current,
        e
      );
    }
    function sn(e) {
      Yi = Nv.current, Se(ah, e), Se(Nv, e);
    }
    function Ke() {
      var e = G;
      su === null ? su = [e] : su.push(e);
    }
    function ee() {
      var e = G;
      if (su !== null && (Yc++, su[Yc] !== e)) {
        var t = de(xe);
        if (!i1.has(t) && (i1.add(t), su !== null)) {
          for (var a = "", i = 0; i <= Yc; i++) {
            var o = su[i], f = i === Yc ? e : o;
            for (o = i + 1 + ". " + o; 30 > o.length; )
              o += " ";
            o += f + `
`, a += o;
          }
          console.error(
            `React has detected a change in the order of Hooks called by %s. This will lead to bugs and errors if not fixed. For more information, read the Rules of Hooks: https://react.dev/link/rules-of-hooks

   Previous render            Next render
   ------------------------------------------------------
%s   ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
`,
            t,
            a
          );
        }
      }
    }
    function ja(e) {
      e == null || He(e) || console.error(
        "%s received a final argument that is not an array (instead, received `%s`). When specified, the final argument must be an array.",
        G,
        typeof e
      );
    }
    function co() {
      var e = de(xe);
      o1.has(e) || (o1.add(e), console.error(
        "ReactDOM.useFormState has been renamed to React.useActionState. Please update %s to use React.useActionState.",
        e
      ));
    }
    function jt() {
      throw Error(
        `Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://react.dev/link/invalid-hook-call for tips about how to debug and fix this problem.`
      );
    }
    function fi(e, t) {
      if (Qm) return !1;
      if (t === null)
        return console.error(
          "%s received a final argument during this render, but not during the previous render. Even though the final argument is optional, its type cannot change between renders.",
          G
        ), !1;
      e.length !== t.length && console.error(
        `The final argument passed to %s changed size between renders. The order and size of this array must remain constant.

Previous: %s
Incoming: %s`,
        G,
        "[" + t.join(", ") + "]",
        "[" + e.join(", ") + "]"
      );
      for (var a = 0; a < t.length && a < e.length; a++)
        if (!_a(e[a], t[a])) return !1;
      return !0;
    }
    function ri(e, t, a, i, o, f) {
      Io = f, xe = t, su = e !== null ? e._debugHookTypes : null, Yc = -1, Qm = e !== null && e.type !== t.type, (Object.prototype.toString.call(a) === "[object AsyncFunction]" || Object.prototype.toString.call(a) === "[object AsyncGeneratorFunction]") && (f = de(xe), kg.has(f) || (kg.add(f), console.error(
        "%s is an async Client Component. Only Server Components can be async at the moment. This error is often caused by accidentally adding `'use client'` to a module that was originally written for the server.",
        f === null ? "An unknown Component" : "<" + f + ">"
      ))), t.memoizedState = null, t.updateQueue = null, t.lanes = 0, j.H = e !== null && e.memoizedState !== null ? Wg : su !== null ? f1 : $g, jr = f = (t.mode & va) !== Bt;
      var d = Fg(a, i, o);
      if (jr = !1, uh && (d = oo(
        t,
        a,
        i,
        o
      )), f) {
        oe(!0);
        try {
          d = oo(
            t,
            a,
            i,
            o
          );
        } finally {
          oe(!1);
        }
      }
      return xf(e, t), d;
    }
    function xf(e, t) {
      t._debugHookTypes = su, t.dependencies === null ? qc !== null && (t.dependencies = {
        lanes: 0,
        firstContext: null,
        _debugThenableState: qc
      }) : t.dependencies._debugThenableState = qc, j.H = qv;
      var a = Ut !== null && Ut.next !== null;
      if (Io = 0, su = G = Sl = Ut = xe = null, Yc = -1, e !== null && (e.flags & 65011712) !== (t.flags & 65011712) && console.error(
        "Internal React error: Expected static flag was missing. Please notify the React team."
      ), wv = !1, Xm = 0, qc = null, a)
        throw Error(
          "Rendered fewer hooks than expected. This may be caused by an accidental early return statement."
        );
      e === null || Xl || (e = e.dependencies, e !== null && ni(e) && (Xl = !0)), xv ? (xv = !1, e = !0) : e = !1, e && (t = de(t) || "Unknown", c1.has(t) || kg.has(t) || (c1.add(t), console.error(
        "`use` was called from inside a try/catch block. This is not allowed and can lead to unexpected behavior. To handle errors triggered by `use`, wrap your component in a error boundary."
      )));
    }
    function oo(e, t, a, i) {
      xe = e;
      var o = 0;
      do {
        if (uh && (qc = null), Xm = 0, uh = !1, o >= CS)
          throw Error(
            "Too many re-renders. React limits the number of renders to prevent an infinite loop."
          );
        if (o += 1, Qm = !1, Sl = Ut = null, e.updateQueue != null) {
          var f = e.updateQueue;
          f.lastEffect = null, f.events = null, f.stores = null, f.memoCache != null && (f.memoCache.index = 0);
        }
        Yc = -1, j.H = r1, f = Fg(t, a, i);
      } while (uh);
      return f;
    }
    function Ga() {
      var e = j.H, t = e.useState()[0];
      return t = typeof t.then == "function" ? nc(t) : t, e = e.useState()[0], (Ut !== null ? Ut.memoizedState : null) !== e && (xe.flags |= 1024), t;
    }
    function ia() {
      var e = Bv !== 0;
      return Bv = 0, e;
    }
    function Au(e, t, a) {
      t.updateQueue = e.updateQueue, t.flags = (t.mode & Xu) !== Bt ? t.flags & -402655237 : t.flags & -2053, e.lanes &= ~a;
    }
    function dn(e) {
      if (wv) {
        for (e = e.memoizedState; e !== null; ) {
          var t = e.queue;
          t !== null && (t.pending = null), e = e.next;
        }
        wv = !1;
      }
      Io = 0, su = Sl = Ut = xe = null, Yc = -1, G = null, uh = !1, Xm = Bv = 0, qc = null;
    }
    function Vt() {
      var e = {
        memoizedState: null,
        baseState: null,
        baseQueue: null,
        queue: null,
        next: null
      };
      return Sl === null ? xe.memoizedState = Sl = e : Sl = Sl.next = e, Sl;
    }
    function nt() {
      if (Ut === null) {
        var e = xe.alternate;
        e = e !== null ? e.memoizedState : null;
      } else e = Ut.next;
      var t = Sl === null ? xe.memoizedState : Sl.next;
      if (t !== null)
        Sl = t, Ut = e;
      else {
        if (e === null)
          throw xe.alternate === null ? Error(
            "Update hook called on initial render. This is likely a bug in React. Please file an issue."
          ) : Error("Rendered more hooks than during the previous render.");
        Ut = e, e = {
          memoizedState: Ut.memoizedState,
          baseState: Ut.baseState,
          baseQueue: Ut.baseQueue,
          queue: Ut.queue,
          next: null
        }, Sl === null ? xe.memoizedState = Sl = e : Sl = Sl.next = e;
      }
      return Sl;
    }
    function Ts() {
      return { lastEffect: null, events: null, stores: null, memoCache: null };
    }
    function nc(e) {
      var t = Xm;
      return Xm += 1, qc === null && (qc = Wh()), e = Ya(qc, e, t), t = xe, (Sl === null ? t.memoizedState : Sl.next) === null && (t = t.alternate, j.H = t !== null && t.memoizedState !== null ? Wg : $g), e;
    }
    function Nn(e) {
      if (e !== null && typeof e == "object") {
        if (typeof e.then == "function") return nc(e);
        if (e.$$typeof === $a) return _t(e);
      }
      throw Error("An unsupported type was passed to use(): " + String(e));
    }
    function Ft(e) {
      var t = null, a = xe.updateQueue;
      if (a !== null && (t = a.memoCache), t == null) {
        var i = xe.alternate;
        i !== null && (i = i.updateQueue, i !== null && (i = i.memoCache, i != null && (t = {
          data: i.data.map(function(o) {
            return o.slice();
          }),
          index: 0
        })));
      }
      if (t == null && (t = { data: [], index: 0 }), a === null && (a = Ts(), xe.updateQueue = a), a.memoCache = t, a = t.data[t.index], a === void 0 || Qm)
        for (a = t.data[t.index] = Array(e), i = 0; i < e; i++)
          a[i] = dv;
      else
        a.length !== e && console.error(
          "Expected a constant size argument for each invocation of useMemoCache. The previous cache was allocated with size %s but size %s was requested.",
          a.length,
          e
        );
      return t.index++, a;
    }
    function st(e, t) {
      return typeof t == "function" ? t(e) : t;
    }
    function ft(e, t, a) {
      var i = Vt();
      if (a !== void 0) {
        var o = a(t);
        if (jr) {
          oe(!0);
          try {
            a(t);
          } finally {
            oe(!1);
          }
        }
      } else o = t;
      return i.memoizedState = i.baseState = o, e = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: e,
        lastRenderedState: o
      }, i.queue = e, e = e.dispatch = cy.bind(
        null,
        xe,
        e
      ), [i.memoizedState, e];
    }
    function La(e) {
      var t = nt();
      return Va(t, Ut, e);
    }
    function Va(e, t, a) {
      var i = e.queue;
      if (i === null)
        throw Error(
          "Should have a queue. You are likely calling Hooks conditionally, which is not allowed. (https://react.dev/link/invalid-hook-call)"
        );
      i.lastRenderedReducer = a;
      var o = e.baseQueue, f = i.pending;
      if (f !== null) {
        if (o !== null) {
          var d = o.next;
          o.next = f.next, f.next = d;
        }
        t.baseQueue !== o && console.error(
          "Internal error: Expected work-in-progress queue to be a clone. This is a bug in React."
        ), t.baseQueue = o = f, i.pending = null;
      }
      if (f = e.baseState, o === null) e.memoizedState = f;
      else {
        t = o.next;
        var h = d = null, v = null, b = t, B = !1;
        do {
          var L = b.lane & -536870913;
          if (L !== b.lane ? (lt & L) === L : (Io & L) === L) {
            var x = b.revertLane;
            if (x === 0)
              v !== null && (v = v.next = {
                lane: 0,
                revertLane: 0,
                action: b.action,
                hasEagerState: b.hasEagerState,
                eagerState: b.eagerState,
                next: null
              }), L === Br && (B = !0);
            else if ((Io & x) === x) {
              b = b.next, x === Br && (B = !0);
              continue;
            } else
              L = {
                lane: 0,
                revertLane: b.revertLane,
                action: b.action,
                hasEagerState: b.hasEagerState,
                eagerState: b.eagerState,
                next: null
              }, v === null ? (h = v = L, d = f) : v = v.next = L, xe.lanes |= x, tf |= x;
            L = b.action, jr && a(f, L), f = b.hasEagerState ? b.eagerState : a(f, L);
          } else
            x = {
              lane: L,
              revertLane: b.revertLane,
              action: b.action,
              hasEagerState: b.hasEagerState,
              eagerState: b.eagerState,
              next: null
            }, v === null ? (h = v = x, d = f) : v = v.next = x, xe.lanes |= L, tf |= L;
          b = b.next;
        } while (b !== null && b !== t);
        if (v === null ? d = f : v.next = h, !_a(f, e.memoizedState) && (Xl = !0, B && (a = lh, a !== null)))
          throw a;
        e.memoizedState = f, e.baseState = d, e.baseQueue = v, i.lastRenderedState = f;
      }
      return o === null && (i.lanes = 0), [e.memoizedState, i.dispatch];
    }
    function uc(e) {
      var t = nt(), a = t.queue;
      if (a === null)
        throw Error(
          "Should have a queue. You are likely calling Hooks conditionally, which is not allowed. (https://react.dev/link/invalid-hook-call)"
        );
      a.lastRenderedReducer = e;
      var i = a.dispatch, o = a.pending, f = t.memoizedState;
      if (o !== null) {
        a.pending = null;
        var d = o = o.next;
        do
          f = e(f, d.action), d = d.next;
        while (d !== o);
        _a(f, t.memoizedState) || (Xl = !0), t.memoizedState = f, t.baseQueue === null && (t.baseState = f), a.lastRenderedState = f;
      }
      return [f, i];
    }
    function Ru(e, t, a) {
      var i = xe, o = Vt();
      if (yt) {
        if (a === void 0)
          throw Error(
            "Missing getServerSnapshot, which is required for server-rendered content. Will revert to client rendering."
          );
        var f = a();
        nh || f === a() || (console.error(
          "The result of getServerSnapshot should be cached to avoid an infinite loop"
        ), nh = !0);
      } else {
        if (f = t(), nh || (a = t(), _a(f, a) || (console.error(
          "The result of getSnapshot should be cached to avoid an infinite loop"
        ), nh = !0)), Ct === null)
          throw Error(
            "Expected a work-in-progress root. This is a bug in React. Please file an issue."
          );
        (lt & 124) !== 0 || Ph(i, t, f);
      }
      return o.memoizedState = f, a = { value: f, getSnapshot: t }, o.queue = a, Rs(
        ro.bind(null, i, a, e),
        [e]
      ), i.flags |= 2048, Bn(
        ru | wl,
        di(),
        fo.bind(
          null,
          i,
          a,
          f,
          t
        ),
        null
      ), f;
    }
    function Nf(e, t, a) {
      var i = xe, o = nt(), f = yt;
      if (f) {
        if (a === void 0)
          throw Error(
            "Missing getServerSnapshot, which is required for server-rendered content. Will revert to client rendering."
          );
        a = a();
      } else if (a = t(), !nh) {
        var d = t();
        _a(a, d) || (console.error(
          "The result of getSnapshot should be cached to avoid an infinite loop"
        ), nh = !0);
      }
      (d = !_a(
        (Ut || o).memoizedState,
        a
      )) && (o.memoizedState = a, Xl = !0), o = o.queue;
      var h = ro.bind(null, i, o, e);
      if (ol(2048, wl, h, [e]), o.getSnapshot !== t || d || Sl !== null && Sl.memoizedState.tag & ru) {
        if (i.flags |= 2048, Bn(
          ru | wl,
          di(),
          fo.bind(
            null,
            i,
            o,
            a,
            t
          ),
          null
        ), Ct === null)
          throw Error(
            "Expected a work-in-progress root. This is a bug in React. Please file an issue."
          );
        f || (Io & 124) !== 0 || Ph(i, t, a);
      }
      return a;
    }
    function Ph(e, t, a) {
      e.flags |= 16384, e = { getSnapshot: t, value: a }, t = xe.updateQueue, t === null ? (t = Ts(), xe.updateQueue = t, t.stores = [e]) : (a = t.stores, a === null ? t.stores = [e] : a.push(e));
    }
    function fo(e, t, a, i) {
      t.value = a, t.getSnapshot = i, ey(t) && so(e);
    }
    function ro(e, t, a) {
      return a(function() {
        ey(t) && so(e);
      });
    }
    function ey(e) {
      var t = e.getSnapshot;
      e = e.value;
      try {
        var a = t();
        return !_a(e, a);
      } catch {
        return !0;
      }
    }
    function so(e) {
      var t = aa(e, 2);
      t !== null && Qt(t, e, 2);
    }
    function wf(e) {
      var t = Vt();
      if (typeof e == "function") {
        var a = e;
        if (e = a(), jr) {
          oe(!0);
          try {
            a();
          } finally {
            oe(!1);
          }
        }
      }
      return t.memoizedState = t.baseState = e, t.queue = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: st,
        lastRenderedState: e
      }, t;
    }
    function Ou(e) {
      e = wf(e);
      var t = e.queue, a = po.bind(null, xe, t);
      return t.dispatch = a, [e.memoizedState, a];
    }
    function hn(e) {
      var t = Vt();
      t.memoizedState = t.baseState = e;
      var a = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: null,
        lastRenderedState: null
      };
      return t.queue = a, t = xs.bind(
        null,
        xe,
        !0,
        a
      ), a.dispatch = t, [e, t];
    }
    function Du(e, t) {
      var a = nt();
      return wn(a, Ut, e, t);
    }
    function wn(e, t, a, i) {
      return e.baseState = a, Va(
        e,
        Ut,
        typeof i == "function" ? i : st
      );
    }
    function Es(e, t) {
      var a = nt();
      return Ut !== null ? wn(a, Ut, e, t) : (a.baseState = e, [e, a.queue.dispatch]);
    }
    function ty(e, t, a, i, o) {
      if (Vf(e))
        throw Error("Cannot update form state while rendering.");
      if (e = t.action, e !== null) {
        var f = {
          payload: o,
          action: e,
          next: null,
          isTransition: !0,
          status: "pending",
          value: null,
          reason: null,
          listeners: [],
          then: function(d) {
            f.listeners.push(d);
          }
        };
        j.T !== null ? a(!0) : f.isTransition = !1, i(f), a = t.pending, a === null ? (f.next = t.pending = f, ho(t, f)) : (f.next = a.next, t.pending = a.next = f);
      }
    }
    function ho(e, t) {
      var a = t.action, i = t.payload, o = e.state;
      if (t.isTransition) {
        var f = j.T, d = {};
        j.T = d, j.T._updatedFibers = /* @__PURE__ */ new Set();
        try {
          var h = a(o, i), v = j.S;
          v !== null && v(d, h), Bf(e, t, h);
        } catch (b) {
          ml(e, t, b);
        } finally {
          j.T = f, f === null && d._updatedFibers && (e = d._updatedFibers.size, d._updatedFibers.clear(), 10 < e && console.warn(
            "Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table."
          ));
        }
      } else
        try {
          d = a(o, i), Bf(e, t, d);
        } catch (b) {
          ml(e, t, b);
        }
    }
    function Bf(e, t, a) {
      a !== null && typeof a == "object" && typeof a.then == "function" ? (a.then(
        function(i) {
          si(e, t, i);
        },
        function(i) {
          return ml(e, t, i);
        }
      ), t.isTransition || console.error(
        "An async function with useActionState was called outside of a transition. This is likely not what you intended (for example, isPending will not update correctly). Either call the returned function inside startTransition, or pass it to an `action` or `formAction` prop."
      )) : si(e, t, a);
    }
    function si(e, t, a) {
      t.status = "fulfilled", t.value = a, qf(t), e.state = a, t = e.pending, t !== null && (a = t.next, a === t ? e.pending = null : (a = a.next, t.next = a, ho(e, a)));
    }
    function ml(e, t, a) {
      var i = e.pending;
      if (e.pending = null, i !== null) {
        i = i.next;
        do
          t.status = "rejected", t.reason = a, qf(t), t = t.next;
        while (t !== i);
      }
      e.action = null;
    }
    function qf(e) {
      e = e.listeners;
      for (var t = 0; t < e.length; t++) (0, e[t])();
    }
    function ly(e, t) {
      return t;
    }
    function yo(e, t) {
      if (yt) {
        var a = Ct.formState;
        if (a !== null) {
          e: {
            var i = xe;
            if (yt) {
              if (ll) {
                t: {
                  for (var o = ll, f = wi; o.nodeType !== 8; ) {
                    if (!f) {
                      o = null;
                      break t;
                    }
                    if (o = Cl(
                      o.nextSibling
                    ), o === null) {
                      o = null;
                      break t;
                    }
                  }
                  f = o.data, o = f === A0 || f === ob ? o : null;
                }
                if (o) {
                  ll = Cl(
                    o.nextSibling
                  ), i = o.data === A0;
                  break e;
                }
              }
              Un(i);
            }
            i = !1;
          }
          i && (t = a[0]);
        }
      }
      return a = Vt(), a.memoizedState = a.baseState = t, i = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: ly,
        lastRenderedState: t
      }, a.queue = i, a = po.bind(
        null,
        xe,
        i
      ), i.dispatch = a, i = wf(!1), f = xs.bind(
        null,
        xe,
        !1,
        i.queue
      ), i = Vt(), o = {
        state: t,
        dispatch: null,
        action: e,
        pending: null
      }, i.queue = o, a = ty.bind(
        null,
        xe,
        o,
        f,
        a
      ), o.dispatch = a, i.memoizedState = e, [t, a, !1];
    }
    function As(e) {
      var t = nt();
      return Yp(t, Ut, e);
    }
    function Yp(e, t, a) {
      if (t = Va(
        e,
        t,
        ly
      )[0], e = La(st)[0], typeof t == "object" && t !== null && typeof t.then == "function")
        try {
          var i = nc(t);
        } catch (d) {
          throw d === Lm ? Hv : d;
        }
      else i = t;
      t = nt();
      var o = t.queue, f = o.dispatch;
      return a !== t.memoizedState && (xe.flags |= 2048, Bn(
        ru | wl,
        di(),
        cl.bind(null, o, a),
        null
      )), [i, f, e];
    }
    function cl(e, t) {
      e.action = t;
    }
    function mo(e) {
      var t = nt(), a = Ut;
      if (a !== null)
        return Yp(t, a, e);
      nt(), t = t.memoizedState, a = nt();
      var i = a.queue.dispatch;
      return a.memoizedState = e, [t, i, !1];
    }
    function Bn(e, t, a, i) {
      return e = {
        tag: e,
        create: a,
        deps: i,
        inst: t,
        next: null
      }, t = xe.updateQueue, t === null && (t = Ts(), xe.updateQueue = t), a = t.lastEffect, a === null ? t.lastEffect = e.next = e : (i = a.next, a.next = e, e.next = i, t.lastEffect = e), e;
    }
    function di() {
      return { destroy: void 0, resource: void 0 };
    }
    function Yf(e) {
      var t = Vt();
      return e = { current: e }, t.memoizedState = e;
    }
    function Xa(e, t, a, i) {
      var o = Vt();
      i = i === void 0 ? null : i, xe.flags |= e, o.memoizedState = Bn(
        ru | t,
        di(),
        a,
        i
      );
    }
    function ol(e, t, a, i) {
      var o = nt();
      i = i === void 0 ? null : i;
      var f = o.memoizedState.inst;
      Ut !== null && i !== null && fi(i, Ut.memoizedState.deps) ? o.memoizedState = Bn(t, f, a, i) : (xe.flags |= e, o.memoizedState = Bn(
        ru | t,
        f,
        a,
        i
      ));
    }
    function Rs(e, t) {
      (xe.mode & Xu) !== Bt && (xe.mode & K0) === Bt ? Xa(276826112, wl, e, t) : Xa(8390656, wl, e, t);
    }
    function Os(e, t) {
      var a = 4194308;
      return (xe.mode & Xu) !== Bt && (a |= 134217728), Xa(a, Pl, e, t);
    }
    function jp(e, t) {
      if (typeof t == "function") {
        e = e();
        var a = t(e);
        return function() {
          typeof a == "function" ? a() : t(null);
        };
      }
      if (t != null)
        return t.hasOwnProperty("current") || console.error(
          "Expected useImperativeHandle() first argument to either be a ref callback or React.createRef() object. Instead received: %s.",
          "an object with keys {" + Object.keys(t).join(", ") + "}"
        ), e = e(), t.current = e, function() {
          t.current = null;
        };
    }
    function Ds(e, t, a) {
      typeof t != "function" && console.error(
        "Expected useImperativeHandle() second argument to be a function that creates a handle. Instead received: %s.",
        t !== null ? typeof t : "null"
      ), a = a != null ? a.concat([e]) : null;
      var i = 4194308;
      (xe.mode & Xu) !== Bt && (i |= 134217728), Xa(
        i,
        Pl,
        jp.bind(null, t, e),
        a
      );
    }
    function qn(e, t, a) {
      typeof t != "function" && console.error(
        "Expected useImperativeHandle() second argument to be a function that creates a handle. Instead received: %s.",
        t !== null ? typeof t : "null"
      ), a = a != null ? a.concat([e]) : null, ol(
        4,
        Pl,
        jp.bind(null, t, e),
        a
      );
    }
    function jf(e, t) {
      return Vt().memoizedState = [
        e,
        t === void 0 ? null : t
      ], e;
    }
    function ic(e, t) {
      var a = nt();
      t = t === void 0 ? null : t;
      var i = a.memoizedState;
      return t !== null && fi(t, i[1]) ? i[0] : (a.memoizedState = [e, t], e);
    }
    function zs(e, t) {
      var a = Vt();
      t = t === void 0 ? null : t;
      var i = e();
      if (jr) {
        oe(!0);
        try {
          e();
        } finally {
          oe(!1);
        }
      }
      return a.memoizedState = [i, t], i;
    }
    function hi(e, t) {
      var a = nt();
      t = t === void 0 ? null : t;
      var i = a.memoizedState;
      if (t !== null && fi(t, i[1]))
        return i[0];
      if (i = e(), jr) {
        oe(!0);
        try {
          e();
        } finally {
          oe(!1);
        }
      }
      return a.memoizedState = [i, t], i;
    }
    function Ms(e, t) {
      var a = Vt();
      return _s(a, e, t);
    }
    function Gf(e, t) {
      var a = nt();
      return Lf(
        a,
        Ut.memoizedState,
        e,
        t
      );
    }
    function Us(e, t) {
      var a = nt();
      return Ut === null ? _s(a, e, t) : Lf(
        a,
        Ut.memoizedState,
        e,
        t
      );
    }
    function _s(e, t, a) {
      return a === void 0 || (Io & 1073741824) !== 0 ? e.memoizedState = t : (e.memoizedState = a, e = $p(), xe.lanes |= e, tf |= e, a);
    }
    function Lf(e, t, a, i) {
      return _a(a, t) ? a : ah.current !== null ? (e = _s(e, a, i), _a(e, t) || (Xl = !0), e) : (Io & 42) === 0 ? (Xl = !0, e.memoizedState = a) : (e = $p(), xe.lanes |= e, tf |= e, t);
    }
    function ay(e, t, a, i, o) {
      var f = Me.p;
      Me.p = f !== 0 && f < bn ? f : bn;
      var d = j.T, h = {};
      j.T = h, xs(e, !1, t, a), h._updatedFibers = /* @__PURE__ */ new Set();
      try {
        var v = o(), b = j.S;
        if (b !== null && b(h, v), v !== null && typeof v == "object" && typeof v.then == "function") {
          var B = wp(
            v,
            i
          );
          zu(
            e,
            t,
            B,
            ra(e)
          );
        } else
          zu(
            e,
            t,
            i,
            ra(e)
          );
      } catch (L) {
        zu(
          e,
          t,
          { then: function() {
          }, status: "rejected", reason: L },
          ra(e)
        );
      } finally {
        Me.p = f, j.T = d, d === null && h._updatedFibers && (e = h._updatedFibers.size, h._updatedFibers.clear(), 10 < e && console.warn(
          "Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table."
        ));
      }
    }
    function cc(e, t, a, i) {
      if (e.tag !== 5)
        throw Error(
          "Expected the form instance to be a HostComponent. This is a bug in React."
        );
      var o = ny(e).queue;
      ay(
        e,
        o,
        t,
        Wr,
        a === null ? ue : function() {
          return uy(e), a(i);
        }
      );
    }
    function ny(e) {
      var t = e.memoizedState;
      if (t !== null) return t;
      t = {
        memoizedState: Wr,
        baseState: Wr,
        baseQueue: null,
        queue: {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: st,
          lastRenderedState: Wr
        },
        next: null
      };
      var a = {};
      return t.next = {
        memoizedState: a,
        baseState: a,
        baseQueue: null,
        queue: {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: st,
          lastRenderedState: a
        },
        next: null
      }, e.memoizedState = t, e = e.alternate, e !== null && (e.memoizedState = t), t;
    }
    function uy(e) {
      j.T === null && console.error(
        "requestFormReset was called outside a transition or action. To fix, move to an action, or wrap with startTransition."
      );
      var t = ny(e).next.queue;
      zu(
        e,
        t,
        {},
        ra(e)
      );
    }
    function Yn() {
      var e = wf(!1);
      return e = ay.bind(
        null,
        xe,
        e.queue,
        !0,
        !1
      ), Vt().memoizedState = e, [!1, e];
    }
    function Cs() {
      var e = La(st)[0], t = nt().memoizedState;
      return [
        typeof e == "boolean" ? e : nc(e),
        t
      ];
    }
    function Hs() {
      var e = uc(st)[0], t = nt().memoizedState;
      return [
        typeof e == "boolean" ? e : nc(e),
        t
      ];
    }
    function ca() {
      return _t(cp);
    }
    function jn() {
      var e = Vt(), t = Ct.identifierPrefix;
      if (yt) {
        var a = wc, i = Nc;
        a = (i & ~(1 << 32 - Ll(i) - 1)).toString(32) + a, t = "«" + t + "R" + a, a = Bv++, 0 < a && (t += "H" + a.toString(32)), t += "»";
      } else
        a = _S++, t = "«" + t + "r" + a.toString(32) + "»";
      return e.memoizedState = t;
    }
    function oc() {
      return Vt().memoizedState = iy.bind(
        null,
        xe
      );
    }
    function iy(e, t) {
      for (var a = e.return; a !== null; ) {
        switch (a.tag) {
          case 24:
          case 3:
            var i = ra(a);
            e = Hn(i);
            var o = rn(a, e, i);
            o !== null && (Qt(o, a, i), oi(o, a, i)), a = _f(), t != null && o !== null && console.error(
              "The seed argument is not enabled outside experimental channels."
            ), e.payload = { cache: a };
            return;
        }
        a = a.return;
      }
    }
    function cy(e, t, a) {
      var i = arguments;
      typeof i[3] == "function" && console.error(
        "State updates from the useState() and useReducer() Hooks don't support the second callback argument. To execute a side effect after rendering, declare it in the component body with useEffect()."
      ), i = ra(e);
      var o = {
        lane: i,
        revertLane: 0,
        action: a,
        hasEagerState: !1,
        eagerState: null,
        next: null
      };
      Vf(e) ? fc(t, o) : (o = wh(e, t, o, i), o !== null && (Qt(o, e, i), Xf(o, t, i))), Rn(e, i);
    }
    function po(e, t, a) {
      var i = arguments;
      typeof i[3] == "function" && console.error(
        "State updates from the useState() and useReducer() Hooks don't support the second callback argument. To execute a side effect after rendering, declare it in the component body with useEffect()."
      ), i = ra(e), zu(e, t, a, i), Rn(e, i);
    }
    function zu(e, t, a, i) {
      var o = {
        lane: i,
        revertLane: 0,
        action: a,
        hasEagerState: !1,
        eagerState: null,
        next: null
      };
      if (Vf(e)) fc(t, o);
      else {
        var f = e.alternate;
        if (e.lanes === 0 && (f === null || f.lanes === 0) && (f = t.lastRenderedReducer, f !== null)) {
          var d = j.H;
          j.H = Zu;
          try {
            var h = t.lastRenderedState, v = f(h, a);
            if (o.hasEagerState = !0, o.eagerState = v, _a(v, h))
              return hs(e, t, o, 0), Ct === null && Of(), !1;
          } catch {
          } finally {
            j.H = d;
          }
        }
        if (a = wh(e, t, o, i), a !== null)
          return Qt(a, e, i), Xf(a, t, i), !0;
      }
      return !1;
    }
    function xs(e, t, a, i) {
      if (j.T === null && Br === 0 && console.error(
        "An optimistic state update occurred outside a transition or action. To fix, move the update to an action, or wrap with startTransition."
      ), i = {
        lane: 2,
        revertLane: Yy(),
        action: i,
        hasEagerState: !1,
        eagerState: null,
        next: null
      }, Vf(e)) {
        if (t)
          throw Error("Cannot update optimistic state while rendering.");
        console.error("Cannot call startTransition while rendering.");
      } else
        t = wh(
          e,
          a,
          i,
          2
        ), t !== null && Qt(t, e, 2);
      Rn(e, 2);
    }
    function Vf(e) {
      var t = e.alternate;
      return e === xe || t !== null && t === xe;
    }
    function fc(e, t) {
      uh = wv = !0;
      var a = e.pending;
      a === null ? t.next = t : (t.next = a.next, a.next = t), e.pending = t;
    }
    function Xf(e, t, a) {
      if ((a & 4194048) !== 0) {
        var i = t.lanes;
        i &= e.pendingLanes, a |= i, t.lanes = a, $u(e, a);
      }
    }
    function pl(e) {
      var t = ke;
      return e != null && (ke = t === null ? e : t.concat(e)), t;
    }
    function vo(e, t, a) {
      for (var i = Object.keys(e.props), o = 0; o < i.length; o++) {
        var f = i[o];
        if (f !== "children" && f !== "key") {
          t === null && (t = Mf(e, a.mode, 0), t._debugInfo = ke, t.return = a), he(
            t,
            function(d) {
              console.error(
                "Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.",
                d
              );
            },
            f
          );
          break;
        }
      }
    }
    function go(e) {
      var t = Zm;
      return Zm += 1, ih === null && (ih = Wh()), Ya(ih, e, t);
    }
    function Qa(e, t) {
      t = t.props.ref, e.ref = t !== void 0 ? t : null;
    }
    function qe(e, t) {
      throw t.$$typeof === br ? Error(
        `A React Element from an older version of React was rendered. This is not supported. It can happen if:
- Multiple copies of the "react" package is used.
- A library pre-bundled an old copy of "react" or "react/jsx-runtime".
- A compiler tries to "inline" JSX instead of using the runtime.`
      ) : (e = Object.prototype.toString.call(t), Error(
        "Objects are not valid as a React child (found: " + (e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e) + "). If you meant to render a collection of children, use an array instead."
      ));
    }
    function pt(e, t) {
      var a = de(e) || "Component";
      O1[a] || (O1[a] = !0, t = t.displayName || t.name || "Component", e.tag === 3 ? console.error(
        `Functions are not valid as a React child. This may happen if you return %s instead of <%s /> from render. Or maybe you meant to call this function rather than return it.
  root.render(%s)`,
        t,
        t,
        t
      ) : console.error(
        `Functions are not valid as a React child. This may happen if you return %s instead of <%s /> from render. Or maybe you meant to call this function rather than return it.
  <%s>{%s}</%s>`,
        t,
        t,
        a,
        t,
        a
      ));
    }
    function Gt(e, t) {
      var a = de(e) || "Component";
      D1[a] || (D1[a] = !0, t = String(t), e.tag === 3 ? console.error(
        `Symbols are not valid as a React child.
  root.render(%s)`,
        t
      ) : console.error(
        `Symbols are not valid as a React child.
  <%s>%s</%s>`,
        a,
        t,
        a
      ));
    }
    function Qf(e) {
      function t(T, E) {
        if (e) {
          var A = T.deletions;
          A === null ? (T.deletions = [E], T.flags |= 16) : A.push(E);
        }
      }
      function a(T, E) {
        if (!e) return null;
        for (; E !== null; )
          t(T, E), E = E.sibling;
        return null;
      }
      function i(T) {
        for (var E = /* @__PURE__ */ new Map(); T !== null; )
          T.key !== null ? E.set(T.key, T) : E.set(T.index, T), T = T.sibling;
        return E;
      }
      function o(T, E) {
        return T = Mn(T, E), T.index = 0, T.sibling = null, T;
      }
      function f(T, E, A) {
        return T.index = A, e ? (A = T.alternate, A !== null ? (A = A.index, A < E ? (T.flags |= 67108866, E) : A) : (T.flags |= 67108866, E)) : (T.flags |= 1048576, E);
      }
      function d(T) {
        return e && T.alternate === null && (T.flags |= 67108866), T;
      }
      function h(T, E, A, X) {
        return E === null || E.tag !== 6 ? (E = li(
          A,
          T.mode,
          X
        ), E.return = T, E._debugOwner = T, E._debugTask = T._debugTask, E._debugInfo = ke, E) : (E = o(E, A), E.return = T, E._debugInfo = ke, E);
      }
      function v(T, E, A, X) {
        var ae = A.type;
        return ae === Ye ? (E = B(
          T,
          E,
          A.props.children,
          X,
          A.key
        ), vo(A, E, T), E) : E !== null && (E.elementType === ae || Cp(E, A) || typeof ae == "object" && ae !== null && ae.$$typeof === Ma && Po(ae) === E.type) ? (E = o(E, A.props), Qa(E, A), E.return = T, E._debugOwner = A._owner, E._debugInfo = ke, E) : (E = Mf(A, T.mode, X), Qa(E, A), E.return = T, E._debugInfo = ke, E);
      }
      function b(T, E, A, X) {
        return E === null || E.tag !== 4 || E.stateNode.containerInfo !== A.containerInfo || E.stateNode.implementation !== A.implementation ? (E = jh(A, T.mode, X), E.return = T, E._debugInfo = ke, E) : (E = o(E, A.children || []), E.return = T, E._debugInfo = ke, E);
      }
      function B(T, E, A, X, ae) {
        return E === null || E.tag !== 7 ? (E = ti(
          A,
          T.mode,
          X,
          ae
        ), E.return = T, E._debugOwner = T, E._debugTask = T._debugTask, E._debugInfo = ke, E) : (E = o(E, A), E.return = T, E._debugInfo = ke, E);
      }
      function L(T, E, A) {
        if (typeof E == "string" && E !== "" || typeof E == "number" || typeof E == "bigint")
          return E = li(
            "" + E,
            T.mode,
            A
          ), E.return = T, E._debugOwner = T, E._debugTask = T._debugTask, E._debugInfo = ke, E;
        if (typeof E == "object" && E !== null) {
          switch (E.$$typeof) {
            case Di:
              return A = Mf(
                E,
                T.mode,
                A
              ), Qa(A, E), A.return = T, T = pl(E._debugInfo), A._debugInfo = ke, ke = T, A;
            case Mc:
              return E = jh(
                E,
                T.mode,
                A
              ), E.return = T, E._debugInfo = ke, E;
            case Ma:
              var X = pl(E._debugInfo);
              return E = Po(E), T = L(T, E, A), ke = X, T;
          }
          if (He(E) || Rt(E))
            return A = ti(
              E,
              T.mode,
              A,
              null
            ), A.return = T, A._debugOwner = T, A._debugTask = T._debugTask, T = pl(E._debugInfo), A._debugInfo = ke, ke = T, A;
          if (typeof E.then == "function")
            return X = pl(E._debugInfo), T = L(
              T,
              go(E),
              A
            ), ke = X, T;
          if (E.$$typeof === $a)
            return L(
              T,
              Uf(T, E),
              A
            );
          qe(T, E);
        }
        return typeof E == "function" && pt(T, E), typeof E == "symbol" && Gt(T, E), null;
      }
      function x(T, E, A, X) {
        var ae = E !== null ? E.key : null;
        if (typeof A == "string" && A !== "" || typeof A == "number" || typeof A == "bigint")
          return ae !== null ? null : h(T, E, "" + A, X);
        if (typeof A == "object" && A !== null) {
          switch (A.$$typeof) {
            case Di:
              return A.key === ae ? (ae = pl(A._debugInfo), T = v(
                T,
                E,
                A,
                X
              ), ke = ae, T) : null;
            case Mc:
              return A.key === ae ? b(T, E, A, X) : null;
            case Ma:
              return ae = pl(A._debugInfo), A = Po(A), T = x(
                T,
                E,
                A,
                X
              ), ke = ae, T;
          }
          if (He(A) || Rt(A))
            return ae !== null ? null : (ae = pl(A._debugInfo), T = B(
              T,
              E,
              A,
              X,
              null
            ), ke = ae, T);
          if (typeof A.then == "function")
            return ae = pl(A._debugInfo), T = x(
              T,
              E,
              go(A),
              X
            ), ke = ae, T;
          if (A.$$typeof === $a)
            return x(
              T,
              E,
              Uf(T, A),
              X
            );
          qe(T, A);
        }
        return typeof A == "function" && pt(T, A), typeof A == "symbol" && Gt(T, A), null;
      }
      function V(T, E, A, X, ae) {
        if (typeof X == "string" && X !== "" || typeof X == "number" || typeof X == "bigint")
          return T = T.get(A) || null, h(E, T, "" + X, ae);
        if (typeof X == "object" && X !== null) {
          switch (X.$$typeof) {
            case Di:
              return A = T.get(
                X.key === null ? A : X.key
              ) || null, T = pl(X._debugInfo), E = v(
                E,
                A,
                X,
                ae
              ), ke = T, E;
            case Mc:
              return T = T.get(
                X.key === null ? A : X.key
              ) || null, b(E, T, X, ae);
            case Ma:
              var je = pl(X._debugInfo);
              return X = Po(X), E = V(
                T,
                E,
                A,
                X,
                ae
              ), ke = je, E;
          }
          if (He(X) || Rt(X))
            return A = T.get(A) || null, T = pl(X._debugInfo), E = B(
              E,
              A,
              X,
              ae,
              null
            ), ke = T, E;
          if (typeof X.then == "function")
            return je = pl(X._debugInfo), E = V(
              T,
              E,
              A,
              go(X),
              ae
            ), ke = je, E;
          if (X.$$typeof === $a)
            return V(
              T,
              E,
              A,
              Uf(E, X),
              ae
            );
          qe(E, X);
        }
        return typeof X == "function" && pt(E, X), typeof X == "symbol" && Gt(E, X), null;
      }
      function ye(T, E, A, X) {
        if (typeof A != "object" || A === null) return X;
        switch (A.$$typeof) {
          case Di:
          case Mc:
            ct(T, E, A);
            var ae = A.key;
            if (typeof ae != "string") break;
            if (X === null) {
              X = /* @__PURE__ */ new Set(), X.add(ae);
              break;
            }
            if (!X.has(ae)) {
              X.add(ae);
              break;
            }
            he(E, function() {
              console.error(
                "Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version.",
                ae
              );
            });
            break;
          case Ma:
            A = Po(A), ye(T, E, A, X);
        }
        return X;
      }
      function Ue(T, E, A, X) {
        for (var ae = null, je = null, me = null, Ge = E, Le = E = 0, qt = null; Ge !== null && Le < A.length; Le++) {
          Ge.index > Le ? (qt = Ge, Ge = null) : qt = Ge.sibling;
          var dl = x(
            T,
            Ge,
            A[Le],
            X
          );
          if (dl === null) {
            Ge === null && (Ge = qt);
            break;
          }
          ae = ye(
            T,
            dl,
            A[Le],
            ae
          ), e && Ge && dl.alternate === null && t(T, Ge), E = f(dl, E, Le), me === null ? je = dl : me.sibling = dl, me = dl, Ge = qt;
        }
        if (Le === A.length)
          return a(T, Ge), yt && Ii(T, Le), je;
        if (Ge === null) {
          for (; Le < A.length; Le++)
            Ge = L(T, A[Le], X), Ge !== null && (ae = ye(
              T,
              Ge,
              A[Le],
              ae
            ), E = f(
              Ge,
              E,
              Le
            ), me === null ? je = Ge : me.sibling = Ge, me = Ge);
          return yt && Ii(T, Le), je;
        }
        for (Ge = i(Ge); Le < A.length; Le++)
          qt = V(
            Ge,
            T,
            Le,
            A[Le],
            X
          ), qt !== null && (ae = ye(
            T,
            qt,
            A[Le],
            ae
          ), e && qt.alternate !== null && Ge.delete(
            qt.key === null ? Le : qt.key
          ), E = f(
            qt,
            E,
            Le
          ), me === null ? je = qt : me.sibling = qt, me = qt);
        return e && Ge.forEach(function(Qc) {
          return t(T, Qc);
        }), yt && Ii(T, Le), je;
      }
      function Ht(T, E, A, X) {
        if (A == null)
          throw Error("An iterable object provided no iterator.");
        for (var ae = null, je = null, me = E, Ge = E = 0, Le = null, qt = null, dl = A.next(); me !== null && !dl.done; Ge++, dl = A.next()) {
          me.index > Ge ? (Le = me, me = null) : Le = me.sibling;
          var Qc = x(T, me, dl.value, X);
          if (Qc === null) {
            me === null && (me = Le);
            break;
          }
          qt = ye(
            T,
            Qc,
            dl.value,
            qt
          ), e && me && Qc.alternate === null && t(T, me), E = f(Qc, E, Ge), je === null ? ae = Qc : je.sibling = Qc, je = Qc, me = Le;
        }
        if (dl.done)
          return a(T, me), yt && Ii(T, Ge), ae;
        if (me === null) {
          for (; !dl.done; Ge++, dl = A.next())
            me = L(T, dl.value, X), me !== null && (qt = ye(
              T,
              me,
              dl.value,
              qt
            ), E = f(
              me,
              E,
              Ge
            ), je === null ? ae = me : je.sibling = me, je = me);
          return yt && Ii(T, Ge), ae;
        }
        for (me = i(me); !dl.done; Ge++, dl = A.next())
          Le = V(
            me,
            T,
            Ge,
            dl.value,
            X
          ), Le !== null && (qt = ye(
            T,
            Le,
            dl.value,
            qt
          ), e && Le.alternate !== null && me.delete(
            Le.key === null ? Ge : Le.key
          ), E = f(
            Le,
            E,
            Ge
          ), je === null ? ae = Le : je.sibling = Le, je = Le);
        return e && me.forEach(function(aT) {
          return t(T, aT);
        }), yt && Ii(T, Ge), ae;
      }
      function ut(T, E, A, X) {
        if (typeof A == "object" && A !== null && A.type === Ye && A.key === null && (vo(A, null, T), A = A.props.children), typeof A == "object" && A !== null) {
          switch (A.$$typeof) {
            case Di:
              var ae = pl(A._debugInfo);
              e: {
                for (var je = A.key; E !== null; ) {
                  if (E.key === je) {
                    if (je = A.type, je === Ye) {
                      if (E.tag === 7) {
                        a(
                          T,
                          E.sibling
                        ), X = o(
                          E,
                          A.props.children
                        ), X.return = T, X._debugOwner = A._owner, X._debugInfo = ke, vo(A, X, T), T = X;
                        break e;
                      }
                    } else if (E.elementType === je || Cp(
                      E,
                      A
                    ) || typeof je == "object" && je !== null && je.$$typeof === Ma && Po(je) === E.type) {
                      a(
                        T,
                        E.sibling
                      ), X = o(E, A.props), Qa(X, A), X.return = T, X._debugOwner = A._owner, X._debugInfo = ke, T = X;
                      break e;
                    }
                    a(T, E);
                    break;
                  } else t(T, E);
                  E = E.sibling;
                }
                A.type === Ye ? (X = ti(
                  A.props.children,
                  T.mode,
                  X,
                  A.key
                ), X.return = T, X._debugOwner = T, X._debugTask = T._debugTask, X._debugInfo = ke, vo(A, X, T), T = X) : (X = Mf(
                  A,
                  T.mode,
                  X
                ), Qa(X, A), X.return = T, X._debugInfo = ke, T = X);
              }
              return T = d(T), ke = ae, T;
            case Mc:
              e: {
                for (ae = A, A = ae.key; E !== null; ) {
                  if (E.key === A)
                    if (E.tag === 4 && E.stateNode.containerInfo === ae.containerInfo && E.stateNode.implementation === ae.implementation) {
                      a(
                        T,
                        E.sibling
                      ), X = o(
                        E,
                        ae.children || []
                      ), X.return = T, T = X;
                      break e;
                    } else {
                      a(T, E);
                      break;
                    }
                  else t(T, E);
                  E = E.sibling;
                }
                X = jh(
                  ae,
                  T.mode,
                  X
                ), X.return = T, T = X;
              }
              return d(T);
            case Ma:
              return ae = pl(A._debugInfo), A = Po(A), T = ut(
                T,
                E,
                A,
                X
              ), ke = ae, T;
          }
          if (He(A))
            return ae = pl(A._debugInfo), T = Ue(
              T,
              E,
              A,
              X
            ), ke = ae, T;
          if (Rt(A)) {
            if (ae = pl(A._debugInfo), je = Rt(A), typeof je != "function")
              throw Error(
                "An object is not an iterable. This error is likely caused by a bug in React. Please file an issue."
              );
            var me = je.call(A);
            return me === A ? (T.tag !== 0 || Object.prototype.toString.call(T.type) !== "[object GeneratorFunction]" || Object.prototype.toString.call(me) !== "[object Generator]") && (A1 || console.error(
              "Using Iterators as children is unsupported and will likely yield unexpected results because enumerating a generator mutates it. You may convert it to an array with `Array.from()` or the `[...spread]` operator before rendering. You can also use an Iterable that can iterate multiple times over the same items."
            ), A1 = !0) : A.entries !== je || Pg || (console.error(
              "Using Maps as children is not supported. Use an array of keyed ReactElements instead."
            ), Pg = !0), T = Ht(
              T,
              E,
              me,
              X
            ), ke = ae, T;
          }
          if (typeof A.then == "function")
            return ae = pl(A._debugInfo), T = ut(
              T,
              E,
              go(A),
              X
            ), ke = ae, T;
          if (A.$$typeof === $a)
            return ut(
              T,
              E,
              Uf(T, A),
              X
            );
          qe(T, A);
        }
        return typeof A == "string" && A !== "" || typeof A == "number" || typeof A == "bigint" ? (ae = "" + A, E !== null && E.tag === 6 ? (a(
          T,
          E.sibling
        ), X = o(E, ae), X.return = T, T = X) : (a(T, E), X = li(
          ae,
          T.mode,
          X
        ), X.return = T, X._debugOwner = T, X._debugTask = T._debugTask, X._debugInfo = ke, T = X), d(T)) : (typeof A == "function" && pt(T, A), typeof A == "symbol" && Gt(T, A), a(T, E));
      }
      return function(T, E, A, X) {
        var ae = ke;
        ke = null;
        try {
          Zm = 0;
          var je = ut(
            T,
            E,
            A,
            X
          );
          return ih = null, je;
        } catch (qt) {
          if (qt === Lm || qt === Hv) throw qt;
          var me = U(29, qt, null, T.mode);
          me.lanes = X, me.return = T;
          var Ge = me._debugInfo = ke;
          if (me._debugOwner = T._debugOwner, me._debugTask = T._debugTask, Ge != null) {
            for (var Le = Ge.length - 1; 0 <= Le; Le--)
              if (typeof Ge[Le].stack == "string") {
                me._debugOwner = Ge[Le], me._debugTask = Ge[Le].debugTask;
                break;
              }
          }
          return me;
        } finally {
          ke = ae;
        }
      };
    }
    function Aa(e) {
      var t = e.alternate;
      De(
        Bl,
        Bl.current & oh,
        e
      ), De(du, e, e), qi === null && (t === null || ah.current !== null || t.memoizedState !== null) && (qi = e);
    }
    function yi(e) {
      if (e.tag === 22) {
        if (De(Bl, Bl.current, e), De(du, e, e), qi === null) {
          var t = e.alternate;
          t !== null && t.memoizedState !== null && (qi = e);
        }
      } else yn(e);
    }
    function yn(e) {
      De(Bl, Bl.current, e), De(
        du,
        du.current,
        e
      );
    }
    function Ra(e) {
      Se(du, e), qi === e && (qi = null), Se(Bl, e);
    }
    function Mu(e) {
      for (var t = e; t !== null; ) {
        if (t.tag === 13) {
          var a = t.memoizedState;
          if (a !== null && (a = a.dehydrated, a === null || a.data === Lc || In(a)))
            return t;
        } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
          if ((t.flags & 128) !== 0) return t;
        } else if (t.child !== null) {
          t.child.return = t, t = t.child;
          continue;
        }
        if (t === e) break;
        for (; t.sibling === null; ) {
          if (t.return === null || t.return === e) return null;
          t = t.return;
        }
        t.sibling.return = t.return, t = t.sibling;
      }
      return null;
    }
    function oy(e) {
      if (e !== null && typeof e != "function") {
        var t = String(e);
        Y1.has(t) || (Y1.add(t), console.error(
          "Expected the last optional `callback` argument to be a function. Instead received: %s.",
          e
        ));
      }
    }
    function Lt(e, t, a, i) {
      var o = e.memoizedState, f = a(i, o);
      if (e.mode & va) {
        oe(!0);
        try {
          f = a(i, o);
        } finally {
          oe(!1);
        }
      }
      f === void 0 && (t = We(t) || "Component", N1.has(t) || (N1.add(t), console.error(
        "%s.getDerivedStateFromProps(): A valid state object (or null) must be returned. You have returned undefined.",
        t
      ))), o = f == null ? o : Ze({}, o, f), e.memoizedState = o, e.lanes === 0 && (e.updateQueue.baseState = o);
    }
    function Ns(e, t, a, i, o, f, d) {
      var h = e.stateNode;
      if (typeof h.shouldComponentUpdate == "function") {
        if (a = h.shouldComponentUpdate(
          i,
          f,
          d
        ), e.mode & va) {
          oe(!0);
          try {
            a = h.shouldComponentUpdate(
              i,
              f,
              d
            );
          } finally {
            oe(!1);
          }
        }
        return a === void 0 && console.error(
          "%s.shouldComponentUpdate(): Returned undefined instead of a boolean value. Make sure to return true or false.",
          We(t) || "Component"
        ), a;
      }
      return t.prototype && t.prototype.isPureReactComponent ? !Rf(a, i) || !Rf(o, f) : !0;
    }
    function ws(e, t, a, i) {
      var o = t.state;
      typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(a, i), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(a, i), t.state !== o && (e = de(e) || "Component", U1.has(e) || (U1.add(e), console.error(
        "%s.componentWillReceiveProps(): Assigning directly to this.state is deprecated (except inside a component's constructor). Use setState instead.",
        e
      )), e0.enqueueReplaceState(
        t,
        t.state,
        null
      ));
    }
    function mi(e, t) {
      var a = t;
      if ("ref" in t) {
        a = {};
        for (var i in t)
          i !== "ref" && (a[i] = t[i]);
      }
      if (e = e.defaultProps) {
        a === t && (a = Ze({}, a));
        for (var o in e)
          a[o] === void 0 && (a[o] = e[o]);
      }
      return a;
    }
    function fy(e) {
      t0(e), console.warn(
        `%s

%s
`,
        fh ? "An error occurred in the <" + fh + "> component." : "An error occurred in one of your React components.",
        `Consider adding an error boundary to your tree to customize error handling behavior.
Visit https://react.dev/link/error-boundaries to learn more about error boundaries.`
      );
    }
    function Gp(e) {
      var t = fh ? "The above error occurred in the <" + fh + "> component." : "The above error occurred in one of your React components.", a = "React will try to recreate this component tree from scratch using the error boundary you provided, " + ((l0 || "Anonymous") + ".");
      if (typeof e == "object" && e !== null && typeof e.environmentName == "string") {
        var i = e.environmentName;
        e = [
          `%o

%s

%s
`,
          e,
          t,
          a
        ].slice(0), typeof e[0] == "string" ? e.splice(
          0,
          1,
          pb + e[0],
          vb,
          lg + i + lg,
          gb
        ) : e.splice(
          0,
          0,
          pb,
          vb,
          lg + i + lg,
          gb
        ), e.unshift(console), i = tT.apply(console.error, e), i();
      } else
        console.error(
          `%o

%s

%s
`,
          e,
          t,
          a
        );
    }
    function Bs(e) {
      t0(e);
    }
    function bo(e, t) {
      try {
        fh = t.source ? de(t.source) : null, l0 = null;
        var a = t.value;
        if (j.actQueue !== null)
          j.thrownErrors.push(a);
        else {
          var i = e.onUncaughtError;
          i(a, { componentStack: t.stack });
        }
      } catch (o) {
        setTimeout(function() {
          throw o;
        });
      }
    }
    function qs(e, t, a) {
      try {
        fh = a.source ? de(a.source) : null, l0 = de(t);
        var i = e.onCaughtError;
        i(a.value, {
          componentStack: a.stack,
          errorBoundary: t.tag === 1 ? t.stateNode : null
        });
      } catch (o) {
        setTimeout(function() {
          throw o;
        });
      }
    }
    function Yl(e, t, a) {
      return a = Hn(a), a.tag = Zg, a.payload = { element: null }, a.callback = function() {
        he(t.source, bo, e, t);
      }, a;
    }
    function Xt(e) {
      return e = Hn(e), e.tag = Zg, e;
    }
    function Zf(e, t, a, i) {
      var o = a.type.getDerivedStateFromError;
      if (typeof o == "function") {
        var f = i.value;
        e.payload = function() {
          return o(f);
        }, e.callback = function() {
          Hp(a), he(
            i.source,
            qs,
            t,
            a,
            i
          );
        };
      }
      var d = a.stateNode;
      d !== null && typeof d.componentDidCatch == "function" && (e.callback = function() {
        Hp(a), he(
          i.source,
          qs,
          t,
          a,
          i
        ), typeof o != "function" && (af === null ? af = /* @__PURE__ */ new Set([this]) : af.add(this)), HS(this, i), typeof o == "function" || (a.lanes & 2) === 0 && console.error(
          "%s: Error boundaries should implement getDerivedStateFromError(). In that method, return a state update to display an error message or fallback UI.",
          de(a) || "Unknown"
        );
      });
    }
    function Kf(e, t, a, i, o) {
      if (a.flags |= 32768, $t && zo(e, o), i !== null && typeof i == "object" && typeof i.then == "function") {
        if (t = a.alternate, t !== null && zl(
          t,
          a,
          o,
          !0
        ), yt && (Bc = !0), a = du.current, a !== null) {
          switch (a.tag) {
            case 13:
              return qi === null ? ad() : a.alternate === null && al === Gc && (al = i0), a.flags &= -257, a.flags |= 65536, a.lanes = o, i === Qg ? a.flags |= 16384 : (t = a.updateQueue, t === null ? a.updateQueue = /* @__PURE__ */ new Set([i]) : t.add(i), Ny(e, i, o)), !1;
            case 22:
              return a.flags |= 65536, i === Qg ? a.flags |= 16384 : (t = a.updateQueue, t === null ? (t = {
                transitions: null,
                markerInstances: null,
                retryQueue: /* @__PURE__ */ new Set([i])
              }, a.updateQueue = t) : (a = t.retryQueue, a === null ? t.retryQueue = /* @__PURE__ */ new Set([i]) : a.add(i)), Ny(e, i, o)), !1;
          }
          throw Error(
            "Unexpected Suspense handler tag (" + a.tag + "). This is a bug in React."
          );
        }
        return Ny(e, i, o), ad(), !1;
      }
      if (yt)
        return Bc = !0, t = du.current, t !== null ? ((t.flags & 65536) === 0 && (t.flags |= 256), t.flags |= 65536, t.lanes = o, i !== Gg && lo(
          Ta(
            Error(
              "There was an error while hydrating but React was able to recover by instead client rendering from the nearest Suspense boundary.",
              { cause: i }
            ),
            a
          )
        )) : (i !== Gg && lo(
          Ta(
            Error(
              "There was an error while hydrating but React was able to recover by instead client rendering the entire root.",
              { cause: i }
            ),
            a
          )
        ), e = e.current.alternate, e.flags |= 65536, o &= -o, e.lanes |= o, i = Ta(i, a), o = Yl(
          e.stateNode,
          i,
          o
        ), no(e, o), al !== Gr && (al = hh)), !1;
      var f = Ta(
        Error(
          "There was an error during concurrent rendering but React was able to recover by instead synchronously rendering the entire root.",
          { cause: i }
        ),
        a
      );
      if (Pm === null ? Pm = [f] : Pm.push(f), al !== Gr && (al = hh), t === null) return !0;
      i = Ta(i, a), a = t;
      do {
        switch (a.tag) {
          case 3:
            return a.flags |= 65536, e = o & -o, a.lanes |= e, e = Yl(
              a.stateNode,
              i,
              e
            ), no(a, e), !1;
          case 1:
            if (t = a.type, f = a.stateNode, (a.flags & 128) === 0 && (typeof t.getDerivedStateFromError == "function" || f !== null && typeof f.componentDidCatch == "function" && (af === null || !af.has(f))))
              return a.flags |= 65536, o &= -o, a.lanes |= o, o = Xt(o), Zf(
                o,
                e,
                a,
                i
              ), no(a, o), !1;
        }
        a = a.return;
      } while (a !== null);
      return !1;
    }
    function tl(e, t, a, i) {
      t.child = e === null ? z1(t, null, a, i) : ch(
        t,
        e.child,
        a,
        i
      );
    }
    function Ys(e, t, a, i, o) {
      a = a.render;
      var f = t.ref;
      if ("ref" in i) {
        var d = {};
        for (var h in i)
          h !== "ref" && (d[h] = i[h]);
      } else d = i;
      return ui(t), xt(t), i = ri(
        e,
        t,
        a,
        d,
        f,
        o
      ), h = ia(), ta(), e !== null && !Xl ? (Au(e, t, o), Ln(e, t, o)) : (yt && h && ps(t), t.flags |= 1, tl(e, t, i, o), t.child);
    }
    function Gn(e, t, a, i, o) {
      if (e === null) {
        var f = a.type;
        return typeof f == "function" && !qh(f) && f.defaultProps === void 0 && a.compare === null ? (a = Fi(f), t.tag = 15, t.type = a, Vs(t, f), Jf(
          e,
          t,
          a,
          i,
          o
        )) : (e = ms(
          a.type,
          null,
          i,
          t,
          t.mode,
          o
        ), e.ref = t.ref, e.return = t, t.child = e);
      }
      if (f = e.child, !ks(e, o)) {
        var d = f.memoizedProps;
        if (a = a.compare, a = a !== null ? a : Rf, a(d, i) && e.ref === t.ref)
          return Ln(
            e,
            t,
            o
          );
      }
      return t.flags |= 1, e = Mn(f, i), e.ref = t.ref, e.return = t, t.child = e;
    }
    function Jf(e, t, a, i, o) {
      if (e !== null) {
        var f = e.memoizedProps;
        if (Rf(f, i) && e.ref === t.ref && t.type === e.type)
          if (Xl = !1, t.pendingProps = i = f, ks(e, o))
            (e.flags & 131072) !== 0 && (Xl = !0);
          else
            return t.lanes = e.lanes, Ln(e, t, o);
      }
      return Ls(
        e,
        t,
        a,
        i,
        o
      );
    }
    function js(e, t, a) {
      var i = t.pendingProps, o = i.children, f = e !== null ? e.memoizedState : null;
      if (i.mode === "hidden") {
        if ((t.flags & 128) !== 0) {
          if (i = f !== null ? f.baseLanes | a : a, e !== null) {
            for (o = t.child = e.child, f = 0; o !== null; )
              f = f | o.lanes | o.childLanes, o = o.sibling;
            t.childLanes = f & ~i;
          } else t.childLanes = 0, t.child = null;
          return Gs(
            e,
            t,
            i,
            a
          );
        }
        if ((a & 536870912) !== 0)
          t.memoizedState = { baseLanes: 0, cachePool: null }, e !== null && Ss(
            t,
            f !== null ? f.cachePool : null
          ), f !== null ? ua(t, f) : Hf(t), yi(t);
        else
          return t.lanes = t.childLanes = 536870912, Gs(
            e,
            t,
            f !== null ? f.baseLanes | a : a,
            a
          );
      } else
        f !== null ? (Ss(t, f.cachePool), ua(t, f), yn(t), t.memoizedState = null) : (e !== null && Ss(t, null), Hf(t), yn(t));
      return tl(e, t, o, a), t.child;
    }
    function Gs(e, t, a, i) {
      var o = $h();
      return o = o === null ? null : {
        parent: Nl._currentValue,
        pool: o
      }, t.memoizedState = {
        baseLanes: a,
        cachePool: o
      }, e !== null && Ss(t, null), Hf(t), yi(t), e !== null && zl(e, t, i, !0), null;
    }
    function kf(e, t) {
      var a = t.ref;
      if (a === null)
        e !== null && e.ref !== null && (t.flags |= 4194816);
      else {
        if (typeof a != "function" && typeof a != "object")
          throw Error(
            "Expected ref to be a function, an object returned by React.createRef(), or undefined/null."
          );
        (e === null || e.ref !== a) && (t.flags |= 4194816);
      }
    }
    function Ls(e, t, a, i, o) {
      if (a.prototype && typeof a.prototype.render == "function") {
        var f = We(a) || "Unknown";
        G1[f] || (console.error(
          "The <%s /> component appears to have a render method, but doesn't extend React.Component. This is likely to cause errors. Change %s to extend React.Component instead.",
          f,
          f
        ), G1[f] = !0);
      }
      return t.mode & va && Qu.recordLegacyContextWarning(
        t,
        null
      ), e === null && (Vs(t, t.type), a.contextTypes && (f = We(a) || "Unknown", V1[f] || (V1[f] = !0, console.error(
        "%s uses the legacy contextTypes API which was removed in React 19. Use React.createContext() with React.useContext() instead. (https://react.dev/link/legacy-context)",
        f
      )))), ui(t), xt(t), a = ri(
        e,
        t,
        a,
        i,
        void 0,
        o
      ), i = ia(), ta(), e !== null && !Xl ? (Au(e, t, o), Ln(e, t, o)) : (yt && i && ps(t), t.flags |= 1, tl(e, t, a, o), t.child);
    }
    function ry(e, t, a, i, o, f) {
      return ui(t), xt(t), Yc = -1, Qm = e !== null && e.type !== t.type, t.updateQueue = null, a = oo(
        t,
        i,
        a,
        o
      ), xf(e, t), i = ia(), ta(), e !== null && !Xl ? (Au(e, t, f), Ln(e, t, f)) : (yt && i && ps(t), t.flags |= 1, tl(e, t, a, f), t.child);
    }
    function sy(e, t, a, i, o) {
      switch (Ie(t)) {
        case !1:
          var f = t.stateNode, d = new t.type(
            t.memoizedProps,
            f.context
          ).state;
          f.updater.enqueueSetState(f, d, null);
          break;
        case !0:
          t.flags |= 128, t.flags |= 65536, f = Error("Simulated error coming from DevTools");
          var h = o & -o;
          if (t.lanes |= h, d = Ct, d === null)
            throw Error(
              "Expected a work-in-progress root. This is a bug in React. Please file an issue."
            );
          h = Xt(h), Zf(
            h,
            d,
            t,
            Ta(f, t)
          ), no(t, h);
      }
      if (ui(t), t.stateNode === null) {
        if (d = Wo, f = a.contextType, "contextType" in a && f !== null && (f === void 0 || f.$$typeof !== $a) && !q1.has(a) && (q1.add(a), h = f === void 0 ? " However, it is set to undefined. This can be caused by a typo or by mixing up named and default imports. This can also happen due to a circular dependency, so try moving the createContext() call to a separate file." : typeof f != "object" ? " However, it is set to a " + typeof f + "." : f.$$typeof === _d ? " Did you accidentally pass the Context.Consumer instead?" : " However, it is set to an object with keys {" + Object.keys(f).join(", ") + "}.", console.error(
          "%s defines an invalid contextType. contextType should point to the Context object returned by React.createContext().%s",
          We(a) || "Component",
          h
        )), typeof f == "object" && f !== null && (d = _t(f)), f = new a(i, d), t.mode & va) {
          oe(!0);
          try {
            f = new a(i, d);
          } finally {
            oe(!1);
          }
        }
        if (d = t.memoizedState = f.state !== null && f.state !== void 0 ? f.state : null, f.updater = e0, t.stateNode = f, f._reactInternals = t, f._reactInternalInstance = M1, typeof a.getDerivedStateFromProps == "function" && d === null && (d = We(a) || "Component", _1.has(d) || (_1.add(d), console.error(
          "`%s` uses `getDerivedStateFromProps` but its initial state is %s. This is not recommended. Instead, define the initial state by assigning an object to `this.state` in the constructor of `%s`. This ensures that `getDerivedStateFromProps` arguments have a consistent shape.",
          d,
          f.state === null ? "null" : "undefined",
          d
        ))), typeof a.getDerivedStateFromProps == "function" || typeof f.getSnapshotBeforeUpdate == "function") {
          var v = h = d = null;
          if (typeof f.componentWillMount == "function" && f.componentWillMount.__suppressDeprecationWarning !== !0 ? d = "componentWillMount" : typeof f.UNSAFE_componentWillMount == "function" && (d = "UNSAFE_componentWillMount"), typeof f.componentWillReceiveProps == "function" && f.componentWillReceiveProps.__suppressDeprecationWarning !== !0 ? h = "componentWillReceiveProps" : typeof f.UNSAFE_componentWillReceiveProps == "function" && (h = "UNSAFE_componentWillReceiveProps"), typeof f.componentWillUpdate == "function" && f.componentWillUpdate.__suppressDeprecationWarning !== !0 ? v = "componentWillUpdate" : typeof f.UNSAFE_componentWillUpdate == "function" && (v = "UNSAFE_componentWillUpdate"), d !== null || h !== null || v !== null) {
            f = We(a) || "Component";
            var b = typeof a.getDerivedStateFromProps == "function" ? "getDerivedStateFromProps()" : "getSnapshotBeforeUpdate()";
            H1.has(f) || (H1.add(f), console.error(
              `Unsafe legacy lifecycles will not be called for components using new component APIs.

%s uses %s but also contains the following legacy lifecycles:%s%s%s

The above lifecycles should be removed. Learn more about this warning here:
https://react.dev/link/unsafe-component-lifecycles`,
              f,
              b,
              d !== null ? `
  ` + d : "",
              h !== null ? `
  ` + h : "",
              v !== null ? `
  ` + v : ""
            ));
          }
        }
        f = t.stateNode, d = We(a) || "Component", f.render || (a.prototype && typeof a.prototype.render == "function" ? console.error(
          "No `render` method found on the %s instance: did you accidentally return an object from the constructor?",
          d
        ) : console.error(
          "No `render` method found on the %s instance: you may have forgotten to define `render`.",
          d
        )), !f.getInitialState || f.getInitialState.isReactClassApproved || f.state || console.error(
          "getInitialState was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Did you mean to define a state property instead?",
          d
        ), f.getDefaultProps && !f.getDefaultProps.isReactClassApproved && console.error(
          "getDefaultProps was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Use a static property to define defaultProps instead.",
          d
        ), f.contextType && console.error(
          "contextType was defined as an instance property on %s. Use a static property to define contextType instead.",
          d
        ), a.childContextTypes && !B1.has(a) && (B1.add(a), console.error(
          "%s uses the legacy childContextTypes API which was removed in React 19. Use React.createContext() instead. (https://react.dev/link/legacy-context)",
          d
        )), a.contextTypes && !w1.has(a) && (w1.add(a), console.error(
          "%s uses the legacy contextTypes API which was removed in React 19. Use React.createContext() with static contextType instead. (https://react.dev/link/legacy-context)",
          d
        )), typeof f.componentShouldUpdate == "function" && console.error(
          "%s has a method called componentShouldUpdate(). Did you mean shouldComponentUpdate()? The name is phrased as a question because the function is expected to return a value.",
          d
        ), a.prototype && a.prototype.isPureReactComponent && typeof f.shouldComponentUpdate < "u" && console.error(
          "%s has a method called shouldComponentUpdate(). shouldComponentUpdate should not be used when extending React.PureComponent. Please extend React.Component if shouldComponentUpdate is used.",
          We(a) || "A pure component"
        ), typeof f.componentDidUnmount == "function" && console.error(
          "%s has a method called componentDidUnmount(). But there is no such lifecycle method. Did you mean componentWillUnmount()?",
          d
        ), typeof f.componentDidReceiveProps == "function" && console.error(
          "%s has a method called componentDidReceiveProps(). But there is no such lifecycle method. If you meant to update the state in response to changing props, use componentWillReceiveProps(). If you meant to fetch data or run side-effects or mutations after React has updated the UI, use componentDidUpdate().",
          d
        ), typeof f.componentWillRecieveProps == "function" && console.error(
          "%s has a method called componentWillRecieveProps(). Did you mean componentWillReceiveProps()?",
          d
        ), typeof f.UNSAFE_componentWillRecieveProps == "function" && console.error(
          "%s has a method called UNSAFE_componentWillRecieveProps(). Did you mean UNSAFE_componentWillReceiveProps()?",
          d
        ), h = f.props !== i, f.props !== void 0 && h && console.error(
          "When calling super() in `%s`, make sure to pass up the same props that your component's constructor was passed.",
          d
        ), f.defaultProps && console.error(
          "Setting defaultProps as an instance property on %s is not supported and will be ignored. Instead, define defaultProps as a static property on %s.",
          d,
          d
        ), typeof f.getSnapshotBeforeUpdate != "function" || typeof f.componentDidUpdate == "function" || C1.has(a) || (C1.add(a), console.error(
          "%s: getSnapshotBeforeUpdate() should be used with componentDidUpdate(). This component defines getSnapshotBeforeUpdate() only.",
          We(a)
        )), typeof f.getDerivedStateFromProps == "function" && console.error(
          "%s: getDerivedStateFromProps() is defined as an instance method and will be ignored. Instead, declare it as a static method.",
          d
        ), typeof f.getDerivedStateFromError == "function" && console.error(
          "%s: getDerivedStateFromError() is defined as an instance method and will be ignored. Instead, declare it as a static method.",
          d
        ), typeof a.getSnapshotBeforeUpdate == "function" && console.error(
          "%s: getSnapshotBeforeUpdate() is defined as a static method and will be ignored. Instead, declare it as an instance method.",
          d
        ), (h = f.state) && (typeof h != "object" || He(h)) && console.error("%s.state: must be set to an object or null", d), typeof f.getChildContext == "function" && typeof a.childContextTypes != "object" && console.error(
          "%s.getChildContext(): childContextTypes must be defined in order to use getChildContext().",
          d
        ), f = t.stateNode, f.props = i, f.state = t.memoizedState, f.refs = {}, na(t), d = a.contextType, f.context = typeof d == "object" && d !== null ? _t(d) : Wo, f.state === i && (d = We(a) || "Component", x1.has(d) || (x1.add(d), console.error(
          "%s: It is not recommended to assign props directly to state because updates to props won't be reflected in state. In most cases, it is better to use props directly.",
          d
        ))), t.mode & va && Qu.recordLegacyContextWarning(
          t,
          f
        ), Qu.recordUnsafeLifecycleWarnings(
          t,
          f
        ), f.state = t.memoizedState, d = a.getDerivedStateFromProps, typeof d == "function" && (Lt(
          t,
          a,
          d,
          i
        ), f.state = t.memoizedState), typeof a.getDerivedStateFromProps == "function" || typeof f.getSnapshotBeforeUpdate == "function" || typeof f.UNSAFE_componentWillMount != "function" && typeof f.componentWillMount != "function" || (d = f.state, typeof f.componentWillMount == "function" && f.componentWillMount(), typeof f.UNSAFE_componentWillMount == "function" && f.UNSAFE_componentWillMount(), d !== f.state && (console.error(
          "%s.componentWillMount(): Assigning directly to this.state is deprecated (except inside a component's constructor). Use setState instead.",
          de(t) || "Component"
        ), e0.enqueueReplaceState(
          f,
          f.state,
          null
        )), uo(t, i, f, o), xn(), f.state = t.memoizedState), typeof f.componentDidMount == "function" && (t.flags |= 4194308), (t.mode & Xu) !== Bt && (t.flags |= 134217728), f = !0;
      } else if (e === null) {
        f = t.stateNode;
        var B = t.memoizedProps;
        h = mi(a, B), f.props = h;
        var L = f.context;
        v = a.contextType, d = Wo, typeof v == "object" && v !== null && (d = _t(v)), b = a.getDerivedStateFromProps, v = typeof b == "function" || typeof f.getSnapshotBeforeUpdate == "function", B = t.pendingProps !== B, v || typeof f.UNSAFE_componentWillReceiveProps != "function" && typeof f.componentWillReceiveProps != "function" || (B || L !== d) && ws(
          t,
          f,
          i,
          d
        ), Fo = !1;
        var x = t.memoizedState;
        f.state = x, uo(t, i, f, o), xn(), L = t.memoizedState, B || x !== L || Fo ? (typeof b == "function" && (Lt(
          t,
          a,
          b,
          i
        ), L = t.memoizedState), (h = Fo || Ns(
          t,
          a,
          h,
          i,
          x,
          L,
          d
        )) ? (v || typeof f.UNSAFE_componentWillMount != "function" && typeof f.componentWillMount != "function" || (typeof f.componentWillMount == "function" && f.componentWillMount(), typeof f.UNSAFE_componentWillMount == "function" && f.UNSAFE_componentWillMount()), typeof f.componentDidMount == "function" && (t.flags |= 4194308), (t.mode & Xu) !== Bt && (t.flags |= 134217728)) : (typeof f.componentDidMount == "function" && (t.flags |= 4194308), (t.mode & Xu) !== Bt && (t.flags |= 134217728), t.memoizedProps = i, t.memoizedState = L), f.props = i, f.state = L, f.context = d, f = h) : (typeof f.componentDidMount == "function" && (t.flags |= 4194308), (t.mode & Xu) !== Bt && (t.flags |= 134217728), f = !1);
      } else {
        f = t.stateNode, ci(e, t), d = t.memoizedProps, v = mi(a, d), f.props = v, b = t.pendingProps, x = f.context, L = a.contextType, h = Wo, typeof L == "object" && L !== null && (h = _t(L)), B = a.getDerivedStateFromProps, (L = typeof B == "function" || typeof f.getSnapshotBeforeUpdate == "function") || typeof f.UNSAFE_componentWillReceiveProps != "function" && typeof f.componentWillReceiveProps != "function" || (d !== b || x !== h) && ws(
          t,
          f,
          i,
          h
        ), Fo = !1, x = t.memoizedState, f.state = x, uo(t, i, f, o), xn();
        var V = t.memoizedState;
        d !== b || x !== V || Fo || e !== null && e.dependencies !== null && ni(e.dependencies) ? (typeof B == "function" && (Lt(
          t,
          a,
          B,
          i
        ), V = t.memoizedState), (v = Fo || Ns(
          t,
          a,
          v,
          i,
          x,
          V,
          h
        ) || e !== null && e.dependencies !== null && ni(e.dependencies)) ? (L || typeof f.UNSAFE_componentWillUpdate != "function" && typeof f.componentWillUpdate != "function" || (typeof f.componentWillUpdate == "function" && f.componentWillUpdate(i, V, h), typeof f.UNSAFE_componentWillUpdate == "function" && f.UNSAFE_componentWillUpdate(
          i,
          V,
          h
        )), typeof f.componentDidUpdate == "function" && (t.flags |= 4), typeof f.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof f.componentDidUpdate != "function" || d === e.memoizedProps && x === e.memoizedState || (t.flags |= 4), typeof f.getSnapshotBeforeUpdate != "function" || d === e.memoizedProps && x === e.memoizedState || (t.flags |= 1024), t.memoizedProps = i, t.memoizedState = V), f.props = i, f.state = V, f.context = h, f = v) : (typeof f.componentDidUpdate != "function" || d === e.memoizedProps && x === e.memoizedState || (t.flags |= 4), typeof f.getSnapshotBeforeUpdate != "function" || d === e.memoizedProps && x === e.memoizedState || (t.flags |= 1024), f = !1);
      }
      if (h = f, kf(e, t), d = (t.flags & 128) !== 0, h || d) {
        if (h = t.stateNode, yf(t), d && typeof a.getDerivedStateFromError != "function")
          a = null, Ia = -1;
        else {
          if (xt(t), a = h1(h), t.mode & va) {
            oe(!0);
            try {
              h1(h);
            } finally {
              oe(!1);
            }
          }
          ta();
        }
        t.flags |= 1, e !== null && d ? (t.child = ch(
          t,
          e.child,
          null,
          o
        ), t.child = ch(
          t,
          null,
          a,
          o
        )) : tl(e, t, a, o), t.memoizedState = h.state, e = t.child;
      } else
        e = Ln(
          e,
          t,
          o
        );
      return o = t.stateNode, f && o.props !== i && (rh || console.error(
        "It looks like %s is reassigning its own `this.props` while rendering. This is not supported and can lead to confusing bugs.",
        de(t) || "a component"
      ), rh = !0), e;
    }
    function dy(e, t, a, i) {
      return ec(), t.flags |= 256, tl(e, t, a, i), t.child;
    }
    function Vs(e, t) {
      t && t.childContextTypes && console.error(
        `childContextTypes cannot be defined on a function component.
  %s.childContextTypes = ...`,
        t.displayName || t.name || "Component"
      ), typeof t.getDerivedStateFromProps == "function" && (e = We(t) || "Unknown", X1[e] || (console.error(
        "%s: Function components do not support getDerivedStateFromProps.",
        e
      ), X1[e] = !0)), typeof t.contextType == "object" && t.contextType !== null && (t = We(t) || "Unknown", L1[t] || (console.error(
        "%s: Function components do not support contextType.",
        t
      ), L1[t] = !0));
    }
    function $f(e) {
      return { baseLanes: e, cachePool: Bp() };
    }
    function Xs(e, t, a) {
      return e = e !== null ? e.childLanes & ~a : 0, t && (e |= En), e;
    }
    function Lp(e, t, a) {
      var i, o = t.pendingProps;
      ve(t) && (t.flags |= 128);
      var f = !1, d = (t.flags & 128) !== 0;
      if ((i = d) || (i = e !== null && e.memoizedState === null ? !1 : (Bl.current & Km) !== 0), i && (f = !0, t.flags &= -129), i = (t.flags & 32) !== 0, t.flags &= -33, e === null) {
        if (yt) {
          if (f ? Aa(t) : yn(t), yt) {
            var h = ll, v;
            if (!(v = !h)) {
              e: {
                var b = h;
                for (v = wi; b.nodeType !== 8; ) {
                  if (!v) {
                    v = null;
                    break e;
                  }
                  if (b = Cl(b.nextSibling), b === null) {
                    v = null;
                    break e;
                  }
                }
                v = b;
              }
              v !== null ? (un(), t.memoizedState = {
                dehydrated: v,
                treeContext: xr !== null ? { id: Nc, overflow: wc } : null,
                retryLane: 536870912,
                hydrationErrors: null
              }, b = U(18, null, null, Bt), b.stateNode = v, b.return = t, t.child = b, Ca = t, ll = null, v = !0) : v = !1, v = !v;
            }
            v && (Gh(
              t,
              h
            ), Un(t));
          }
          if (h = t.memoizedState, h !== null && (h = h.dehydrated, h !== null))
            return In(h) ? t.lanes = 32 : t.lanes = 536870912, null;
          Ra(t);
        }
        return h = o.children, o = o.fallback, f ? (yn(t), f = t.mode, h = Wf(
          {
            mode: "hidden",
            children: h
          },
          f
        ), o = ti(
          o,
          f,
          a,
          null
        ), h.return = t, o.return = t, h.sibling = o, t.child = h, f = t.child, f.memoizedState = $f(a), f.childLanes = Xs(
          e,
          i,
          a
        ), t.memoizedState = n0, o) : (Aa(t), Qs(
          t,
          h
        ));
      }
      var B = e.memoizedState;
      if (B !== null && (h = B.dehydrated, h !== null)) {
        if (d)
          t.flags & 256 ? (Aa(t), t.flags &= -257, t = Zs(
            e,
            t,
            a
          )) : t.memoizedState !== null ? (yn(t), t.child = e.child, t.flags |= 128, t = null) : (yn(t), f = o.fallback, h = t.mode, o = Wf(
            {
              mode: "visible",
              children: o.children
            },
            h
          ), f = ti(
            f,
            h,
            a,
            null
          ), f.flags |= 2, o.return = t, f.return = t, o.sibling = f, t.child = o, ch(
            t,
            e.child,
            null,
            a
          ), o = t.child, o.memoizedState = $f(a), o.childLanes = Xs(
            e,
            i,
            a
          ), t.memoizedState = n0, t = f);
        else if (Aa(t), yt && console.error(
          "We should not be hydrating here. This is a bug in React. Please file a bug."
        ), In(h)) {
          if (i = h.nextSibling && h.nextSibling.dataset, i) {
            v = i.dgst;
            var L = i.msg;
            b = i.stck;
            var x = i.cstck;
          }
          h = L, i = v, o = b, v = f = x, f = Error(h || "The server could not finish this Suspense boundary, likely due to an error during server rendering. Switched to client rendering."), f.stack = o || "", f.digest = i, i = v === void 0 ? null : v, o = {
            value: f,
            source: null,
            stack: i
          }, typeof i == "string" && Yg.set(
            f,
            o
          ), lo(o), t = Zs(
            e,
            t,
            a
          );
        } else if (Xl || zl(
          e,
          t,
          a,
          !1
        ), i = (a & e.childLanes) !== 0, Xl || i) {
          if (i = Ct, i !== null && (o = a & -a, o = (o & 42) !== 0 ? 1 : El(
            o
          ), o = (o & (i.suspendedLanes | a)) !== 0 ? 0 : o, o !== 0 && o !== B.retryLane))
            throw B.retryLane = o, aa(
              e,
              o
            ), Qt(
              i,
              e,
              o
            ), j1;
          h.data === Lc || ad(), t = Zs(
            e,
            t,
            a
          );
        } else
          h.data === Lc ? (t.flags |= 192, t.child = e.child, t = null) : (e = B.treeContext, ll = Cl(
            h.nextSibling
          ), Ca = t, yt = !0, Nr = null, Bc = !1, ou = null, wi = !1, e !== null && (un(), iu[cu++] = Nc, iu[cu++] = wc, iu[cu++] = xr, Nc = e.id, wc = e.overflow, xr = t), t = Qs(
            t,
            o.children
          ), t.flags |= 4096);
        return t;
      }
      return f ? (yn(t), f = o.fallback, h = t.mode, v = e.child, b = v.sibling, o = Mn(
        v,
        {
          mode: "hidden",
          children: o.children
        }
      ), o.subtreeFlags = v.subtreeFlags & 65011712, b !== null ? f = Mn(
        b,
        f
      ) : (f = ti(
        f,
        h,
        a,
        null
      ), f.flags |= 2), f.return = t, o.return = t, o.sibling = f, t.child = o, o = f, f = t.child, h = e.child.memoizedState, h === null ? h = $f(a) : (v = h.cachePool, v !== null ? (b = Nl._currentValue, v = v.parent !== b ? { parent: b, pool: b } : v) : v = Bp(), h = {
        baseLanes: h.baseLanes | a,
        cachePool: v
      }), f.memoizedState = h, f.childLanes = Xs(
        e,
        i,
        a
      ), t.memoizedState = n0, o) : (Aa(t), a = e.child, e = a.sibling, a = Mn(a, {
        mode: "visible",
        children: o.children
      }), a.return = t, a.sibling = null, e !== null && (i = t.deletions, i === null ? (t.deletions = [e], t.flags |= 16) : i.push(e)), t.child = a, t.memoizedState = null, a);
    }
    function Qs(e, t) {
      return t = Wf(
        { mode: "visible", children: t },
        e.mode
      ), t.return = e, e.child = t;
    }
    function Wf(e, t) {
      return e = U(22, e, null, t), e.lanes = 0, e.stateNode = {
        _visibility: Rv,
        _pendingMarkers: null,
        _retryCache: null,
        _transitions: null
      }, e;
    }
    function Zs(e, t, a) {
      return ch(t, e.child, null, a), e = Qs(
        t,
        t.pendingProps.children
      ), e.flags |= 2, t.memoizedState = null, e;
    }
    function Ks(e, t, a) {
      e.lanes |= t;
      var i = e.alternate;
      i !== null && (i.lanes |= t), Zh(
        e.return,
        t,
        a
      );
    }
    function hy(e, t) {
      var a = He(e);
      return e = !a && typeof Rt(e) == "function", a || e ? (a = a ? "array" : "iterable", console.error(
        "A nested %s was passed to row #%s in <SuspenseList />. Wrap it in an additional SuspenseList to configure its revealOrder: <SuspenseList revealOrder=...> ... <SuspenseList revealOrder=...>{%s}</SuspenseList> ... </SuspenseList>",
        a,
        t,
        a
      ), !1) : !0;
    }
    function Js(e, t, a, i, o) {
      var f = e.memoizedState;
      f === null ? e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: i,
        tail: a,
        tailMode: o
      } : (f.isBackwards = t, f.rendering = null, f.renderingStartTime = 0, f.last = i, f.tail = a, f.tailMode = o);
    }
    function yy(e, t, a) {
      var i = t.pendingProps, o = i.revealOrder, f = i.tail;
      if (i = i.children, o !== void 0 && o !== "forwards" && o !== "backwards" && o !== "together" && !Q1[o])
        if (Q1[o] = !0, typeof o == "string")
          switch (o.toLowerCase()) {
            case "together":
            case "forwards":
            case "backwards":
              console.error(
                '"%s" is not a valid value for revealOrder on <SuspenseList />. Use lowercase "%s" instead.',
                o,
                o.toLowerCase()
              );
              break;
            case "forward":
            case "backward":
              console.error(
                '"%s" is not a valid value for revealOrder on <SuspenseList />. React uses the -s suffix in the spelling. Use "%ss" instead.',
                o,
                o.toLowerCase()
              );
              break;
            default:
              console.error(
                '"%s" is not a supported revealOrder on <SuspenseList />. Did you mean "together", "forwards" or "backwards"?',
                o
              );
          }
        else
          console.error(
            '%s is not a supported value for revealOrder on <SuspenseList />. Did you mean "together", "forwards" or "backwards"?',
            o
          );
      f === void 0 || a0[f] || (f !== "collapsed" && f !== "hidden" ? (a0[f] = !0, console.error(
        '"%s" is not a supported value for tail on <SuspenseList />. Did you mean "collapsed" or "hidden"?',
        f
      )) : o !== "forwards" && o !== "backwards" && (a0[f] = !0, console.error(
        '<SuspenseList tail="%s" /> is only valid if revealOrder is "forwards" or "backwards". Did you mean to specify revealOrder="forwards"?',
        f
      )));
      e: if ((o === "forwards" || o === "backwards") && i !== void 0 && i !== null && i !== !1)
        if (He(i)) {
          for (var d = 0; d < i.length; d++)
            if (!hy(i[d], d)) break e;
        } else if (d = Rt(i), typeof d == "function") {
          if (d = d.call(i))
            for (var h = d.next(), v = 0; !h.done; h = d.next()) {
              if (!hy(h.value, v)) break e;
              v++;
            }
        } else
          console.error(
            'A single row was passed to a <SuspenseList revealOrder="%s" />. This is not useful since it needs multiple rows. Did you mean to pass multiple children or an array?',
            o
          );
      if (tl(e, t, i, a), i = Bl.current, (i & Km) !== 0)
        i = i & oh | Km, t.flags |= 128;
      else {
        if (e !== null && (e.flags & 128) !== 0)
          e: for (e = t.child; e !== null; ) {
            if (e.tag === 13)
              e.memoizedState !== null && Ks(
                e,
                a,
                t
              );
            else if (e.tag === 19)
              Ks(e, a, t);
            else if (e.child !== null) {
              e.child.return = e, e = e.child;
              continue;
            }
            if (e === t) break e;
            for (; e.sibling === null; ) {
              if (e.return === null || e.return === t)
                break e;
              e = e.return;
            }
            e.sibling.return = e.return, e = e.sibling;
          }
        i &= oh;
      }
      switch (De(Bl, i, t), o) {
        case "forwards":
          for (a = t.child, o = null; a !== null; )
            e = a.alternate, e !== null && Mu(e) === null && (o = a), a = a.sibling;
          a = o, a === null ? (o = t.child, t.child = null) : (o = a.sibling, a.sibling = null), Js(
            t,
            !1,
            o,
            a,
            f
          );
          break;
        case "backwards":
          for (a = null, o = t.child, t.child = null; o !== null; ) {
            if (e = o.alternate, e !== null && Mu(e) === null) {
              t.child = o;
              break;
            }
            e = o.sibling, o.sibling = a, a = o, o = e;
          }
          Js(
            t,
            !0,
            a,
            null,
            f
          );
          break;
        case "together":
          Js(t, !1, null, null, void 0);
          break;
        default:
          t.memoizedState = null;
      }
      return t.child;
    }
    function Ln(e, t, a) {
      if (e !== null && (t.dependencies = e.dependencies), Ia = -1, tf |= t.lanes, (a & t.childLanes) === 0)
        if (e !== null) {
          if (zl(
            e,
            t,
            a,
            !1
          ), (a & t.childLanes) === 0)
            return null;
        } else return null;
      if (e !== null && t.child !== e.child)
        throw Error("Resuming work not yet implemented.");
      if (t.child !== null) {
        for (e = t.child, a = Mn(e, e.pendingProps), t.child = a, a.return = t; e.sibling !== null; )
          e = e.sibling, a = a.sibling = Mn(e, e.pendingProps), a.return = t;
        a.sibling = null;
      }
      return t.child;
    }
    function ks(e, t) {
      return (e.lanes & t) !== 0 ? !0 : (e = e.dependencies, !!(e !== null && ni(e)));
    }
    function bg(e, t, a) {
      switch (t.tag) {
        case 3:
          Yt(
            t,
            t.stateNode.containerInfo
          ), ai(
            t,
            Nl,
            e.memoizedState.cache
          ), ec();
          break;
        case 27:
        case 5:
          W(t);
          break;
        case 4:
          Yt(
            t,
            t.stateNode.containerInfo
          );
          break;
        case 10:
          ai(
            t,
            t.type,
            t.memoizedProps.value
          );
          break;
        case 12:
          (a & t.childLanes) !== 0 && (t.flags |= 4), t.flags |= 2048;
          var i = t.stateNode;
          i.effectDuration = -0, i.passiveEffectDuration = -0;
          break;
        case 13:
          if (i = t.memoizedState, i !== null)
            return i.dehydrated !== null ? (Aa(t), t.flags |= 128, null) : (a & t.child.childLanes) !== 0 ? Lp(
              e,
              t,
              a
            ) : (Aa(t), e = Ln(
              e,
              t,
              a
            ), e !== null ? e.sibling : null);
          Aa(t);
          break;
        case 19:
          var o = (e.flags & 128) !== 0;
          if (i = (a & t.childLanes) !== 0, i || (zl(
            e,
            t,
            a,
            !1
          ), i = (a & t.childLanes) !== 0), o) {
            if (i)
              return yy(
                e,
                t,
                a
              );
            t.flags |= 128;
          }
          if (o = t.memoizedState, o !== null && (o.rendering = null, o.tail = null, o.lastEffect = null), De(
            Bl,
            Bl.current,
            t
          ), i) break;
          return null;
        case 22:
        case 23:
          return t.lanes = 0, js(e, t, a);
        case 24:
          ai(
            t,
            Nl,
            e.memoizedState.cache
          );
      }
      return Ln(e, t, a);
    }
    function $s(e, t, a) {
      if (t._debugNeedsRemount && e !== null) {
        a = ms(
          t.type,
          t.key,
          t.pendingProps,
          t._debugOwner || null,
          t.mode,
          t.lanes
        ), a._debugStack = t._debugStack, a._debugTask = t._debugTask;
        var i = t.return;
        if (i === null) throw Error("Cannot swap the root fiber.");
        if (e.alternate = null, t.alternate = null, a.index = t.index, a.sibling = t.sibling, a.return = t.return, a.ref = t.ref, a._debugInfo = t._debugInfo, t === i.child)
          i.child = a;
        else {
          var o = i.child;
          if (o === null)
            throw Error("Expected parent to have a child.");
          for (; o.sibling !== t; )
            if (o = o.sibling, o === null)
              throw Error("Expected to find the previous sibling.");
          o.sibling = a;
        }
        return t = i.deletions, t === null ? (i.deletions = [e], i.flags |= 16) : t.push(e), a.flags |= 2, a;
      }
      if (e !== null)
        if (e.memoizedProps !== t.pendingProps || t.type !== e.type)
          Xl = !0;
        else {
          if (!ks(e, a) && (t.flags & 128) === 0)
            return Xl = !1, bg(
              e,
              t,
              a
            );
          Xl = (e.flags & 131072) !== 0;
        }
      else
        Xl = !1, (i = yt) && (un(), i = (t.flags & 1048576) !== 0), i && (i = t.index, un(), xp(t, Dv, i));
      switch (t.lanes = 0, t.tag) {
        case 16:
          e: if (i = t.pendingProps, e = Po(t.elementType), t.type = e, typeof e == "function")
            qh(e) ? (i = mi(
              e,
              i
            ), t.tag = 1, t.type = e = Fi(e), t = sy(
              null,
              t,
              e,
              i,
              a
            )) : (t.tag = 0, Vs(t, e), t.type = e = Fi(e), t = Ls(
              null,
              t,
              e,
              i,
              a
            ));
          else {
            if (e != null) {
              if (o = e.$$typeof, o === Bu) {
                t.tag = 11, t.type = e = Bh(e), t = Ys(
                  null,
                  t,
                  e,
                  i,
                  a
                );
                break e;
              } else if (o === Sr) {
                t.tag = 14, t = Gn(
                  null,
                  t,
                  e,
                  i,
                  a
                );
                break e;
              }
            }
            throw t = "", e !== null && typeof e == "object" && e.$$typeof === Ma && (t = " Did you wrap a component in React.lazy() more than once?"), e = We(e) || e, Error(
              "Element type is invalid. Received a promise that resolves to: " + e + ". Lazy element type must resolve to a class or function." + t
            );
          }
          return t;
        case 0:
          return Ls(
            e,
            t,
            t.type,
            t.pendingProps,
            a
          );
        case 1:
          return i = t.type, o = mi(
            i,
            t.pendingProps
          ), sy(
            e,
            t,
            i,
            o,
            a
          );
        case 3:
          e: {
            if (Yt(
              t,
              t.stateNode.containerInfo
            ), e === null)
              throw Error(
                "Should have a current fiber. This is a bug in React."
              );
            i = t.pendingProps;
            var f = t.memoizedState;
            o = f.element, ci(e, t), uo(t, i, null, a);
            var d = t.memoizedState;
            if (i = d.cache, ai(t, Nl, i), i !== f.cache && Kh(
              t,
              [Nl],
              a,
              !0
            ), xn(), i = d.element, f.isDehydrated)
              if (f = {
                element: i,
                isDehydrated: !1,
                cache: d.cache
              }, t.updateQueue.baseState = f, t.memoizedState = f, t.flags & 256) {
                t = dy(
                  e,
                  t,
                  i,
                  a
                );
                break e;
              } else if (i !== o) {
                o = Ta(
                  Error(
                    "This root received an early update, before anything was able hydrate. Switched the entire root to client rendering."
                  ),
                  t
                ), lo(o), t = dy(
                  e,
                  t,
                  i,
                  a
                );
                break e;
              } else {
                switch (e = t.stateNode.containerInfo, e.nodeType) {
                  case 9:
                    e = e.body;
                    break;
                  default:
                    e = e.nodeName === "HTML" ? e.ownerDocument.body : e;
                }
                for (ll = Cl(e.firstChild), Ca = t, yt = !0, Nr = null, Bc = !1, ou = null, wi = !0, e = z1(
                  t,
                  null,
                  i,
                  a
                ), t.child = e; e; )
                  e.flags = e.flags & -3 | 4096, e = e.sibling;
              }
            else {
              if (ec(), i === o) {
                t = Ln(
                  e,
                  t,
                  a
                );
                break e;
              }
              tl(
                e,
                t,
                i,
                a
              );
            }
            t = t.child;
          }
          return t;
        case 26:
          return kf(e, t), e === null ? (e = wu(
            t.type,
            null,
            t.pendingProps,
            null
          )) ? t.memoizedState = e : yt || (e = t.type, a = t.pendingProps, i = Mt(
            eu.current
          ), i = et(
            i
          ).createElement(e), i[Vl] = t, i[ma] = a, Kt(i, e, a), z(i), t.stateNode = i) : t.memoizedState = wu(
            t.type,
            e.memoizedProps,
            t.pendingProps,
            e.memoizedState
          ), null;
        case 27:
          return W(t), e === null && yt && (i = Mt(eu.current), o = O(), i = t.stateNode = Py(
            t.type,
            t.pendingProps,
            i,
            o,
            !1
          ), Bc || (o = Dt(
            i,
            t.type,
            t.pendingProps,
            o
          ), o !== null && (cn(t, 0).serverProps = o)), Ca = t, wi = !0, o = ll, Fn(t.type) ? (z0 = o, ll = Cl(
            i.firstChild
          )) : ll = o), tl(
            e,
            t,
            t.pendingProps.children,
            a
          ), kf(e, t), e === null && (t.flags |= 4194304), t.child;
        case 5:
          return e === null && yt && (f = O(), i = is(
            t.type,
            f.ancestorInfo
          ), o = ll, (d = !o) || (d = Ei(
            o,
            t.type,
            t.pendingProps,
            wi
          ), d !== null ? (t.stateNode = d, Bc || (f = Dt(
            d,
            t.type,
            t.pendingProps,
            f
          ), f !== null && (cn(t, 0).serverProps = f)), Ca = t, ll = Cl(
            d.firstChild
          ), wi = !1, f = !0) : f = !1, d = !f), d && (i && Gh(t, o), Un(t))), W(t), o = t.type, f = t.pendingProps, d = e !== null ? e.memoizedProps : null, i = f.children, Wn(o, f) ? i = null : d !== null && Wn(o, d) && (t.flags |= 32), t.memoizedState !== null && (o = ri(
            e,
            t,
            Ga,
            null,
            null,
            a
          ), cp._currentValue = o), kf(e, t), tl(
            e,
            t,
            i,
            a
          ), t.child;
        case 6:
          return e === null && yt && (e = t.pendingProps, a = O(), i = a.ancestorInfo.current, e = i != null ? Sf(
            e,
            i.tag,
            a.ancestorInfo.implicitRootScope
          ) : !0, a = ll, (i = !a) || (i = _l(
            a,
            t.pendingProps,
            wi
          ), i !== null ? (t.stateNode = i, Ca = t, ll = null, i = !0) : i = !1, i = !i), i && (e && Gh(t, a), Un(t))), null;
        case 13:
          return Lp(e, t, a);
        case 4:
          return Yt(
            t,
            t.stateNode.containerInfo
          ), i = t.pendingProps, e === null ? t.child = ch(
            t,
            null,
            i,
            a
          ) : tl(
            e,
            t,
            i,
            a
          ), t.child;
        case 11:
          return Ys(
            e,
            t,
            t.type,
            t.pendingProps,
            a
          );
        case 7:
          return tl(
            e,
            t,
            t.pendingProps,
            a
          ), t.child;
        case 8:
          return tl(
            e,
            t,
            t.pendingProps.children,
            a
          ), t.child;
        case 12:
          return t.flags |= 4, t.flags |= 2048, i = t.stateNode, i.effectDuration = -0, i.passiveEffectDuration = -0, tl(
            e,
            t,
            t.pendingProps.children,
            a
          ), t.child;
        case 10:
          return i = t.type, o = t.pendingProps, f = o.value, "value" in o || Z1 || (Z1 = !0, console.error(
            "The `value` prop is required for the `<Context.Provider>`. Did you misspell it or forget to pass it?"
          )), ai(t, i, f), tl(
            e,
            t,
            o.children,
            a
          ), t.child;
        case 9:
          return o = t.type._context, i = t.pendingProps.children, typeof i != "function" && console.error(
            "A context consumer was rendered with multiple children, or a child that isn't a function. A context consumer expects a single child that is a function. If you did pass a function, make sure there is no trailing or leading whitespace around it."
          ), ui(t), o = _t(o), xt(t), i = Fg(
            i,
            o,
            void 0
          ), ta(), t.flags |= 1, tl(
            e,
            t,
            i,
            a
          ), t.child;
        case 14:
          return Gn(
            e,
            t,
            t.type,
            t.pendingProps,
            a
          );
        case 15:
          return Jf(
            e,
            t,
            t.type,
            t.pendingProps,
            a
          );
        case 19:
          return yy(
            e,
            t,
            a
          );
        case 31:
          return i = t.pendingProps, a = t.mode, i = {
            mode: i.mode,
            children: i.children
          }, e === null ? (e = Wf(
            i,
            a
          ), e.ref = t.ref, t.child = e, e.return = t, t = e) : (e = Mn(e.child, i), e.ref = t.ref, t.child = e, e.return = t, t = e), t;
        case 22:
          return js(e, t, a);
        case 24:
          return ui(t), i = _t(Nl), e === null ? (o = $h(), o === null && (o = Ct, f = _f(), o.pooledCache = f, tc(f), f !== null && (o.pooledCacheLanes |= a), o = f), t.memoizedState = {
            parent: i,
            cache: o
          }, na(t), ai(t, Nl, o)) : ((e.lanes & a) !== 0 && (ci(e, t), uo(t, null, null, a), xn()), o = e.memoizedState, f = t.memoizedState, o.parent !== i ? (o = {
            parent: i,
            cache: i
          }, t.memoizedState = o, t.lanes === 0 && (t.memoizedState = t.updateQueue.baseState = o), ai(t, Nl, i)) : (i = f.cache, ai(t, Nl, i), i !== o.cache && Kh(
            t,
            [Nl],
            a,
            !0
          ))), tl(
            e,
            t,
            t.pendingProps.children,
            a
          ), t.child;
        case 29:
          throw t.pendingProps;
      }
      throw Error(
        "Unknown unit of work tag (" + t.tag + "). This error is likely caused by a bug in React. Please file an issue."
      );
    }
    function oa(e) {
      e.flags |= 4;
    }
    function Ff(e, t) {
      if (t.type !== "stylesheet" || (t.state.loading & hu) !== $r)
        e.flags &= -16777217;
      else if (e.flags |= 16777216, !sr(t)) {
        if (t = du.current, t !== null && ((lt & 4194048) === lt ? qi !== null : (lt & 62914560) !== lt && (lt & 536870912) === 0 || t !== qi))
          throw Vm = Qg, t1;
        e.flags |= 8192;
      }
    }
    function If(e, t) {
      t !== null && (e.flags |= 4), e.flags & 16384 && (t = e.tag !== 22 ? On() : 536870912, e.lanes |= t, Xr |= t);
    }
    function pi(e, t) {
      if (!yt)
        switch (e.tailMode) {
          case "hidden":
            t = e.tail;
            for (var a = null; t !== null; )
              t.alternate !== null && (a = t), t = t.sibling;
            a === null ? e.tail = null : a.sibling = null;
            break;
          case "collapsed":
            a = e.tail;
            for (var i = null; a !== null; )
              a.alternate !== null && (i = a), a = a.sibling;
            i === null ? t || e.tail === null ? e.tail = null : e.tail.sibling = null : i.sibling = null;
        }
    }
    function Tt(e) {
      var t = e.alternate !== null && e.alternate.child === e.child, a = 0, i = 0;
      if (t)
        if ((e.mode & Il) !== Bt) {
          for (var o = e.selfBaseDuration, f = e.child; f !== null; )
            a |= f.lanes | f.childLanes, i |= f.subtreeFlags & 65011712, i |= f.flags & 65011712, o += f.treeBaseDuration, f = f.sibling;
          e.treeBaseDuration = o;
        } else
          for (o = e.child; o !== null; )
            a |= o.lanes | o.childLanes, i |= o.subtreeFlags & 65011712, i |= o.flags & 65011712, o.return = e, o = o.sibling;
      else if ((e.mode & Il) !== Bt) {
        o = e.actualDuration, f = e.selfBaseDuration;
        for (var d = e.child; d !== null; )
          a |= d.lanes | d.childLanes, i |= d.subtreeFlags, i |= d.flags, o += d.actualDuration, f += d.treeBaseDuration, d = d.sibling;
        e.actualDuration = o, e.treeBaseDuration = f;
      } else
        for (o = e.child; o !== null; )
          a |= o.lanes | o.childLanes, i |= o.subtreeFlags, i |= o.flags, o.return = e, o = o.sibling;
      return e.subtreeFlags |= i, e.childLanes = a, t;
    }
    function Vp(e, t, a) {
      var i = t.pendingProps;
      switch (vs(t), t.tag) {
        case 31:
        case 16:
        case 15:
        case 0:
        case 11:
        case 7:
        case 8:
        case 12:
        case 9:
        case 14:
          return Tt(t), null;
        case 1:
          return Tt(t), null;
        case 3:
          return a = t.stateNode, i = null, e !== null && (i = e.memoizedState.cache), t.memoizedState.cache !== i && (t.flags |= 2048), Tu(Nl, t), mt(t), a.pendingContext && (a.context = a.pendingContext, a.pendingContext = null), (e === null || e.child === null) && (Pi(t) ? (Qh(), oa(t)) : e === null || e.memoizedState.isDehydrated && (t.flags & 256) === 0 || (t.flags |= 1024, Xh())), Tt(t), null;
        case 26:
          return a = t.memoizedState, e === null ? (oa(t), a !== null ? (Tt(t), Ff(
            t,
            a
          )) : (Tt(t), t.flags &= -16777217)) : a ? a !== e.memoizedState ? (oa(t), Tt(t), Ff(
            t,
            a
          )) : (Tt(t), t.flags &= -16777217) : (e.memoizedProps !== i && oa(t), Tt(t), t.flags &= -16777217), null;
        case 27:
          P(t), a = Mt(eu.current);
          var o = t.type;
          if (e !== null && t.stateNode != null)
            e.memoizedProps !== i && oa(t);
          else {
            if (!i) {
              if (t.stateNode === null)
                throw Error(
                  "We must have new props for new mounts. This error is likely caused by a bug in React. Please file an issue."
                );
              return Tt(t), null;
            }
            e = O(), Pi(t) ? Lh(t) : (e = Py(
              o,
              i,
              a,
              e,
              !0
            ), t.stateNode = e, oa(t));
          }
          return Tt(t), null;
        case 5:
          if (P(t), a = t.type, e !== null && t.stateNode != null)
            e.memoizedProps !== i && oa(t);
          else {
            if (!i) {
              if (t.stateNode === null)
                throw Error(
                  "We must have new props for new mounts. This error is likely caused by a bug in React. Please file an issue."
                );
              return Tt(t), null;
            }
            if (o = O(), Pi(t))
              Lh(t);
            else {
              switch (e = Mt(eu.current), is(a, o.ancestorInfo), o = o.context, e = et(e), o) {
                case bh:
                  e = e.createElementNS($o, a);
                  break;
                case Pv:
                  e = e.createElementNS(
                    Cr,
                    a
                  );
                  break;
                default:
                  switch (a) {
                    case "svg":
                      e = e.createElementNS(
                        $o,
                        a
                      );
                      break;
                    case "math":
                      e = e.createElementNS(
                        Cr,
                        a
                      );
                      break;
                    case "script":
                      e = e.createElement("div"), e.innerHTML = "<script><\/script>", e = e.removeChild(e.firstChild);
                      break;
                    case "select":
                      e = typeof i.is == "string" ? e.createElement("select", { is: i.is }) : e.createElement("select"), i.multiple ? e.multiple = !0 : i.size && (e.size = i.size);
                      break;
                    default:
                      e = typeof i.is == "string" ? e.createElement(a, {
                        is: i.is
                      }) : e.createElement(a), a.indexOf("-") === -1 && (a !== a.toLowerCase() && console.error(
                        "<%s /> is using incorrect casing. Use PascalCase for React components, or lowercase for HTML elements.",
                        a
                      ), Object.prototype.toString.call(e) !== "[object HTMLUnknownElement]" || Yu.call(
                        rb,
                        a
                      ) || (rb[a] = !0, console.error(
                        "The tag <%s> is unrecognized in this browser. If you meant to render a React component, start its name with an uppercase letter.",
                        a
                      )));
                  }
              }
              e[Vl] = t, e[ma] = i;
              e: for (o = t.child; o !== null; ) {
                if (o.tag === 5 || o.tag === 6)
                  e.appendChild(o.stateNode);
                else if (o.tag !== 4 && o.tag !== 27 && o.child !== null) {
                  o.child.return = o, o = o.child;
                  continue;
                }
                if (o === t) break e;
                for (; o.sibling === null; ) {
                  if (o.return === null || o.return === t)
                    break e;
                  o = o.return;
                }
                o.sibling.return = o.return, o = o.sibling;
              }
              t.stateNode = e;
              e: switch (Kt(e, a, i), a) {
                case "button":
                case "input":
                case "select":
                case "textarea":
                  e = !!i.autoFocus;
                  break e;
                case "img":
                  e = !0;
                  break e;
                default:
                  e = !1;
              }
              e && oa(t);
            }
          }
          return Tt(t), t.flags &= -16777217, null;
        case 6:
          if (e && t.stateNode != null)
            e.memoizedProps !== i && oa(t);
          else {
            if (typeof i != "string" && t.stateNode === null)
              throw Error(
                "We must have new props for new mounts. This error is likely caused by a bug in React. Please file an issue."
              );
            if (e = Mt(eu.current), a = O(), Pi(t)) {
              e = t.stateNode, a = t.memoizedProps, o = !Bc, i = null;
              var f = Ca;
              if (f !== null)
                switch (f.tag) {
                  case 3:
                    o && (o = Td(
                      e,
                      a,
                      i
                    ), o !== null && (cn(t, 0).serverProps = o));
                    break;
                  case 27:
                  case 5:
                    i = f.memoizedProps, o && (o = Td(
                      e,
                      a,
                      i
                    ), o !== null && (cn(
                      t,
                      0
                    ).serverProps = o));
                }
              e[Vl] = t, e = !!(e.nodeValue === a || i !== null && i.suppressHydrationWarning === !0 || Xy(e.nodeValue, a)), e || Un(t);
            } else
              o = a.ancestorInfo.current, o != null && Sf(
                i,
                o.tag,
                a.ancestorInfo.implicitRootScope
              ), e = et(e).createTextNode(
                i
              ), e[Vl] = t, t.stateNode = e;
          }
          return Tt(t), null;
        case 13:
          if (i = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
            if (o = Pi(t), i !== null && i.dehydrated !== null) {
              if (e === null) {
                if (!o)
                  throw Error(
                    "A dehydrated suspense component was completed without a hydrated node. This is probably a bug in React."
                  );
                if (o = t.memoizedState, o = o !== null ? o.dehydrated : null, !o)
                  throw Error(
                    "Expected to have a hydrated suspense instance. This error is likely caused by a bug in React. Please file an issue."
                  );
                o[Vl] = t, Tt(t), (t.mode & Il) !== Bt && i !== null && (o = t.child, o !== null && (t.treeBaseDuration -= o.treeBaseDuration));
              } else
                Qh(), ec(), (t.flags & 128) === 0 && (t.memoizedState = null), t.flags |= 4, Tt(t), (t.mode & Il) !== Bt && i !== null && (o = t.child, o !== null && (t.treeBaseDuration -= o.treeBaseDuration));
              o = !1;
            } else
              o = Xh(), e !== null && e.memoizedState !== null && (e.memoizedState.hydrationErrors = o), o = !0;
            if (!o)
              return t.flags & 256 ? (Ra(t), t) : (Ra(t), null);
          }
          return Ra(t), (t.flags & 128) !== 0 ? (t.lanes = a, (t.mode & Il) !== Bt && Cn(t), t) : (a = i !== null, e = e !== null && e.memoizedState !== null, a && (i = t.child, o = null, i.alternate !== null && i.alternate.memoizedState !== null && i.alternate.memoizedState.cachePool !== null && (o = i.alternate.memoizedState.cachePool.pool), f = null, i.memoizedState !== null && i.memoizedState.cachePool !== null && (f = i.memoizedState.cachePool.pool), f !== o && (i.flags |= 2048)), a !== e && a && (t.child.flags |= 8192), If(t, t.updateQueue), Tt(t), (t.mode & Il) !== Bt && a && (e = t.child, e !== null && (t.treeBaseDuration -= e.treeBaseDuration)), null);
        case 4:
          return mt(t), e === null && Ly(
            t.stateNode.containerInfo
          ), Tt(t), null;
        case 10:
          return Tu(t.type, t), Tt(t), null;
        case 19:
          if (Se(Bl, t), o = t.memoizedState, o === null) return Tt(t), null;
          if (i = (t.flags & 128) !== 0, f = o.rendering, f === null)
            if (i) pi(o, !1);
            else {
              if (al !== Gc || e !== null && (e.flags & 128) !== 0)
                for (e = t.child; e !== null; ) {
                  if (f = Mu(e), f !== null) {
                    for (t.flags |= 128, pi(o, !1), e = f.updateQueue, t.updateQueue = e, If(t, e), t.subtreeFlags = 0, e = a, a = t.child; a !== null; )
                      Yh(a, e), a = a.sibling;
                    return De(
                      Bl,
                      Bl.current & oh | Km,
                      t
                    ), t.child;
                  }
                  e = e.sibling;
                }
              o.tail !== null && tu() > Lv && (t.flags |= 128, i = !0, pi(o, !1), t.lanes = 4194304);
            }
          else {
            if (!i)
              if (e = Mu(f), e !== null) {
                if (t.flags |= 128, i = !0, e = e.updateQueue, t.updateQueue = e, If(t, e), pi(o, !0), o.tail === null && o.tailMode === "hidden" && !f.alternate && !yt)
                  return Tt(t), null;
              } else
                2 * tu() - o.renderingStartTime > Lv && a !== 536870912 && (t.flags |= 128, i = !0, pi(o, !1), t.lanes = 4194304);
            o.isBackwards ? (f.sibling = t.child, t.child = f) : (e = o.last, e !== null ? e.sibling = f : t.child = f, o.last = f);
          }
          return o.tail !== null ? (e = o.tail, o.rendering = e, o.tail = e.sibling, o.renderingStartTime = tu(), e.sibling = null, a = Bl.current, a = i ? a & oh | Km : a & oh, De(Bl, a, t), e) : (Tt(t), null);
        case 22:
        case 23:
          return Ra(t), sn(t), i = t.memoizedState !== null, e !== null ? e.memoizedState !== null !== i && (t.flags |= 8192) : i && (t.flags |= 8192), i ? (a & 536870912) !== 0 && (t.flags & 128) === 0 && (Tt(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : Tt(t), a = t.updateQueue, a !== null && If(t, a.retryQueue), a = null, e !== null && e.memoizedState !== null && e.memoizedState.cachePool !== null && (a = e.memoizedState.cachePool.pool), i = null, t.memoizedState !== null && t.memoizedState.cachePool !== null && (i = t.memoizedState.cachePool.pool), i !== a && (t.flags |= 2048), e !== null && Se(qr, t), null;
        case 24:
          return a = null, e !== null && (a = e.memoizedState.cache), t.memoizedState.cache !== a && (t.flags |= 2048), Tu(Nl, t), Tt(t), null;
        case 25:
          return null;
        case 30:
          return null;
      }
      throw Error(
        "Unknown unit of work tag (" + t.tag + "). This error is likely caused by a bug in React. Please file an issue."
      );
    }
    function Xp(e, t) {
      switch (vs(t), t.tag) {
        case 1:
          return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, (t.mode & Il) !== Bt && Cn(t), t) : null;
        case 3:
          return Tu(Nl, t), mt(t), e = t.flags, (e & 65536) !== 0 && (e & 128) === 0 ? (t.flags = e & -65537 | 128, t) : null;
        case 26:
        case 27:
        case 5:
          return P(t), null;
        case 13:
          if (Ra(t), e = t.memoizedState, e !== null && e.dehydrated !== null) {
            if (t.alternate === null)
              throw Error(
                "Threw in newly mounted dehydrated component. This is likely a bug in React. Please file an issue."
              );
            ec();
          }
          return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, (t.mode & Il) !== Bt && Cn(t), t) : null;
        case 19:
          return Se(Bl, t), null;
        case 4:
          return mt(t), null;
        case 10:
          return Tu(t.type, t), null;
        case 22:
        case 23:
          return Ra(t), sn(t), e !== null && Se(qr, t), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, (t.mode & Il) !== Bt && Cn(t), t) : null;
        case 24:
          return Tu(Nl, t), null;
        case 25:
          return null;
        default:
          return null;
      }
    }
    function my(e, t) {
      switch (vs(t), t.tag) {
        case 3:
          Tu(Nl, t), mt(t);
          break;
        case 26:
        case 27:
        case 5:
          P(t);
          break;
        case 4:
          mt(t);
          break;
        case 13:
          Ra(t);
          break;
        case 19:
          Se(Bl, t);
          break;
        case 10:
          Tu(t.type, t);
          break;
        case 22:
        case 23:
          Ra(t), sn(t), e !== null && Se(qr, t);
          break;
        case 24:
          Tu(Nl, t);
      }
    }
    function mn(e) {
      return (e.mode & Il) !== Bt;
    }
    function py(e, t) {
      mn(e) ? (fn(), rc(t, e), qa()) : rc(t, e);
    }
    function Ws(e, t, a) {
      mn(e) ? (fn(), sc(
        a,
        e,
        t
      ), qa()) : sc(
        a,
        e,
        t
      );
    }
    function rc(e, t) {
      try {
        var a = t.updateQueue, i = a !== null ? a.lastEffect : null;
        if (i !== null) {
          var o = i.next;
          a = o;
          do {
            if ((a.tag & e) === e && ((e & wl) !== fu ? fe !== null && typeof fe.markComponentPassiveEffectMountStarted == "function" && fe.markComponentPassiveEffectMountStarted(
              t
            ) : (e & Pl) !== fu && fe !== null && typeof fe.markComponentLayoutEffectMountStarted == "function" && fe.markComponentLayoutEffectMountStarted(
              t
            ), i = void 0, (e & Ha) !== fu && (vh = !0), i = he(
              t,
              xS,
              a
            ), (e & Ha) !== fu && (vh = !1), (e & wl) !== fu ? fe !== null && typeof fe.markComponentPassiveEffectMountStopped == "function" && fe.markComponentPassiveEffectMountStopped() : (e & Pl) !== fu && fe !== null && typeof fe.markComponentLayoutEffectMountStopped == "function" && fe.markComponentLayoutEffectMountStopped(), i !== void 0 && typeof i != "function")) {
              var f = void 0;
              f = (a.tag & Pl) !== 0 ? "useLayoutEffect" : (a.tag & Ha) !== 0 ? "useInsertionEffect" : "useEffect";
              var d = void 0;
              d = i === null ? " You returned null. If your effect does not require clean up, return undefined (or nothing)." : typeof i.then == "function" ? `

It looks like you wrote ` + f + `(async () => ...) or returned a Promise. Instead, write the async function inside your effect and call it immediately:

` + f + `(() => {
  async function fetchData() {
    // You can await here
    const response = await MyAPI.getData(someId);
    // ...
  }
  fetchData();
}, [someId]); // Or [] if effect doesn't need props or state

Learn more about data fetching with Hooks: https://react.dev/link/hooks-data-fetching` : " You returned: " + i, he(
                t,
                function(h, v) {
                  console.error(
                    "%s must not return anything besides a function, which is used for clean-up.%s",
                    h,
                    v
                  );
                },
                f,
                d
              );
            }
            a = a.next;
          } while (a !== o);
        }
      } catch (h) {
        Re(t, t.return, h);
      }
    }
    function sc(e, t, a) {
      try {
        var i = t.updateQueue, o = i !== null ? i.lastEffect : null;
        if (o !== null) {
          var f = o.next;
          i = f;
          do {
            if ((i.tag & e) === e) {
              var d = i.inst, h = d.destroy;
              h !== void 0 && (d.destroy = void 0, (e & wl) !== fu ? fe !== null && typeof fe.markComponentPassiveEffectUnmountStarted == "function" && fe.markComponentPassiveEffectUnmountStarted(
                t
              ) : (e & Pl) !== fu && fe !== null && typeof fe.markComponentLayoutEffectUnmountStarted == "function" && fe.markComponentLayoutEffectUnmountStarted(
                t
              ), (e & Ha) !== fu && (vh = !0), o = t, he(
                o,
                NS,
                o,
                a,
                h
              ), (e & Ha) !== fu && (vh = !1), (e & wl) !== fu ? fe !== null && typeof fe.markComponentPassiveEffectUnmountStopped == "function" && fe.markComponentPassiveEffectUnmountStopped() : (e & Pl) !== fu && fe !== null && typeof fe.markComponentLayoutEffectUnmountStopped == "function" && fe.markComponentLayoutEffectUnmountStopped());
            }
            i = i.next;
          } while (i !== f);
        }
      } catch (v) {
        Re(t, t.return, v);
      }
    }
    function vy(e, t) {
      mn(e) ? (fn(), rc(t, e), qa()) : rc(t, e);
    }
    function Pf(e, t, a) {
      mn(e) ? (fn(), sc(
        a,
        e,
        t
      ), qa()) : sc(
        a,
        e,
        t
      );
    }
    function gy(e) {
      var t = e.updateQueue;
      if (t !== null) {
        var a = e.stateNode;
        e.type.defaultProps || "ref" in e.memoizedProps || rh || (a.props !== e.memoizedProps && console.error(
          "Expected %s props to match memoized props before processing the update queue. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.",
          de(e) || "instance"
        ), a.state !== e.memoizedState && console.error(
          "Expected %s state to match memoized state before processing the update queue. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.",
          de(e) || "instance"
        ));
        try {
          he(
            e,
            qp,
            t,
            a
          );
        } catch (i) {
          Re(e, e.return, i);
        }
      }
    }
    function Qp(e, t, a) {
      return e.getSnapshotBeforeUpdate(t, a);
    }
    function Sg(e, t) {
      var a = t.memoizedProps, i = t.memoizedState;
      t = e.stateNode, e.type.defaultProps || "ref" in e.memoizedProps || rh || (t.props !== e.memoizedProps && console.error(
        "Expected %s props to match memoized props before getSnapshotBeforeUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.",
        de(e) || "instance"
      ), t.state !== e.memoizedState && console.error(
        "Expected %s state to match memoized state before getSnapshotBeforeUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.",
        de(e) || "instance"
      ));
      try {
        var o = mi(
          e.type,
          a,
          e.elementType === e.type
        ), f = he(
          e,
          Qp,
          t,
          o,
          i
        );
        a = K1, f !== void 0 || a.has(e.type) || (a.add(e.type), he(e, function() {
          console.error(
            "%s.getSnapshotBeforeUpdate(): A snapshot value (or null) must be returned. You have returned undefined.",
            de(e)
          );
        })), t.__reactInternalSnapshotBeforeUpdate = f;
      } catch (d) {
        Re(e, e.return, d);
      }
    }
    function Fs(e, t, a) {
      a.props = mi(
        e.type,
        e.memoizedProps
      ), a.state = e.memoizedState, mn(e) ? (fn(), he(
        e,
        b1,
        e,
        t,
        a
      ), qa()) : he(
        e,
        b1,
        e,
        t,
        a
      );
    }
    function Zp(e) {
      var t = e.ref;
      if (t !== null) {
        switch (e.tag) {
          case 26:
          case 27:
          case 5:
            var a = e.stateNode;
            break;
          case 30:
            a = e.stateNode;
            break;
          default:
            a = e.stateNode;
        }
        if (typeof t == "function")
          if (mn(e))
            try {
              fn(), e.refCleanup = t(a);
            } finally {
              qa();
            }
          else e.refCleanup = t(a);
        else
          typeof t == "string" ? console.error("String refs are no longer supported.") : t.hasOwnProperty("current") || console.error(
            "Unexpected ref object provided for %s. Use either a ref-setter function or React.createRef().",
            de(e)
          ), t.current = a;
      }
    }
    function So(e, t) {
      try {
        he(e, Zp, e);
      } catch (a) {
        Re(e, t, a);
      }
    }
    function Za(e, t) {
      var a = e.ref, i = e.refCleanup;
      if (a !== null)
        if (typeof i == "function")
          try {
            if (mn(e))
              try {
                fn(), he(e, i);
              } finally {
                qa(e);
              }
            else he(e, i);
          } catch (o) {
            Re(e, t, o);
          } finally {
            e.refCleanup = null, e = e.alternate, e != null && (e.refCleanup = null);
          }
        else if (typeof a == "function")
          try {
            if (mn(e))
              try {
                fn(), he(e, a, null);
              } finally {
                qa(e);
              }
            else he(e, a, null);
          } catch (o) {
            Re(e, t, o);
          }
        else a.current = null;
    }
    function by(e, t, a, i) {
      var o = e.memoizedProps, f = o.id, d = o.onCommit;
      o = o.onRender, t = t === null ? "mount" : "update", Uv && (t = "nested-update"), typeof o == "function" && o(
        f,
        t,
        e.actualDuration,
        e.treeBaseDuration,
        e.actualStartTime,
        a
      ), typeof d == "function" && d(
        e.memoizedProps.id,
        t,
        i,
        a
      );
    }
    function Kp(e, t, a, i) {
      var o = e.memoizedProps;
      e = o.id, o = o.onPostCommit, t = t === null ? "mount" : "update", Uv && (t = "nested-update"), typeof o == "function" && o(
        e,
        t,
        i,
        a
      );
    }
    function Jp(e) {
      var t = e.type, a = e.memoizedProps, i = e.stateNode;
      try {
        he(
          e,
          xu,
          i,
          t,
          a,
          e
        );
      } catch (o) {
        Re(e, e.return, o);
      }
    }
    function Sy(e, t, a) {
      try {
        he(
          e,
          Jt,
          e.stateNode,
          e.type,
          a,
          t,
          e
        );
      } catch (i) {
        Re(e, e.return, i);
      }
    }
    function Ty(e) {
      return e.tag === 5 || e.tag === 3 || e.tag === 26 || e.tag === 27 && Fn(e.type) || e.tag === 4;
    }
    function dc(e) {
      e: for (; ; ) {
        for (; e.sibling === null; ) {
          if (e.return === null || Ty(e.return)) return null;
          e = e.return;
        }
        for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
          if (e.tag === 27 && Fn(e.type) || e.flags & 2 || e.child === null || e.tag === 4) continue e;
          e.child.return = e, e = e.child;
        }
        if (!(e.flags & 2)) return e.stateNode;
      }
    }
    function er(e, t, a) {
      var i = e.tag;
      if (i === 5 || i === 6)
        e = e.stateNode, t ? (a.nodeType === 9 ? a.body : a.nodeName === "HTML" ? a.ownerDocument.body : a).insertBefore(e, t) : (t = a.nodeType === 9 ? a.body : a.nodeName === "HTML" ? a.ownerDocument.body : a, t.appendChild(e), a = a._reactRootContainer, a != null || t.onclick !== null || (t.onclick = Hu));
      else if (i !== 4 && (i === 27 && Fn(e.type) && (a = e.stateNode, t = null), e = e.child, e !== null))
        for (er(e, t, a), e = e.sibling; e !== null; )
          er(e, t, a), e = e.sibling;
    }
    function hc(e, t, a) {
      var i = e.tag;
      if (i === 5 || i === 6)
        e = e.stateNode, t ? a.insertBefore(e, t) : a.appendChild(e);
      else if (i !== 4 && (i === 27 && Fn(e.type) && (a = e.stateNode), e = e.child, e !== null))
        for (hc(e, t, a), e = e.sibling; e !== null; )
          hc(e, t, a), e = e.sibling;
    }
    function kp(e) {
      for (var t, a = e.return; a !== null; ) {
        if (Ty(a)) {
          t = a;
          break;
        }
        a = a.return;
      }
      if (t == null)
        throw Error(
          "Expected to find a host parent. This error is likely caused by a bug in React. Please file an issue."
        );
      switch (t.tag) {
        case 27:
          t = t.stateNode, a = dc(e), hc(
            e,
            a,
            t
          );
          break;
        case 5:
          a = t.stateNode, t.flags & 32 && (Nu(a), t.flags &= -33), t = dc(e), hc(
            e,
            t,
            a
          );
          break;
        case 3:
        case 4:
          t = t.stateNode.containerInfo, a = dc(e), er(
            e,
            a,
            t
          );
          break;
        default:
          throw Error(
            "Invalid host parent fiber. This error is likely caused by a bug in React. Please file an issue."
          );
      }
    }
    function Ey(e) {
      var t = e.stateNode, a = e.memoizedProps;
      try {
        he(
          e,
          za,
          e.type,
          a,
          t,
          e
        );
      } catch (i) {
        Re(e, e.return, i);
      }
    }
    function Is(e, t) {
      if (e = e.containerInfo, R0 = ag, e = Mp(e), Nh(e)) {
        if ("selectionStart" in e)
          var a = {
            start: e.selectionStart,
            end: e.selectionEnd
          };
        else
          e: {
            a = (a = e.ownerDocument) && a.defaultView || window;
            var i = a.getSelection && a.getSelection();
            if (i && i.rangeCount !== 0) {
              a = i.anchorNode;
              var o = i.anchorOffset, f = i.focusNode;
              i = i.focusOffset;
              try {
                a.nodeType, f.nodeType;
              } catch {
                a = null;
                break e;
              }
              var d = 0, h = -1, v = -1, b = 0, B = 0, L = e, x = null;
              t: for (; ; ) {
                for (var V; L !== a || o !== 0 && L.nodeType !== 3 || (h = d + o), L !== f || i !== 0 && L.nodeType !== 3 || (v = d + i), L.nodeType === 3 && (d += L.nodeValue.length), (V = L.firstChild) !== null; )
                  x = L, L = V;
                for (; ; ) {
                  if (L === e) break t;
                  if (x === a && ++b === o && (h = d), x === f && ++B === i && (v = d), (V = L.nextSibling) !== null) break;
                  L = x, x = L.parentNode;
                }
                L = V;
              }
              a = h === -1 || v === -1 ? null : { start: h, end: v };
            } else a = null;
          }
        a = a || { start: 0, end: 0 };
      } else a = null;
      for (O0 = {
        focusedElem: e,
        selectionRange: a
      }, ag = !1, Ql = t; Ql !== null; )
        if (t = Ql, e = t.child, (t.subtreeFlags & 1024) !== 0 && e !== null)
          e.return = t, Ql = e;
        else
          for (; Ql !== null; ) {
            switch (e = t = Ql, a = e.alternate, o = e.flags, e.tag) {
              case 0:
                break;
              case 11:
              case 15:
                break;
              case 1:
                (o & 1024) !== 0 && a !== null && Sg(e, a);
                break;
              case 3:
                if ((o & 1024) !== 0) {
                  if (e = e.stateNode.containerInfo, a = e.nodeType, a === 9)
                    Co(e);
                  else if (a === 1)
                    switch (e.nodeName) {
                      case "HEAD":
                      case "HTML":
                      case "BODY":
                        Co(e);
                        break;
                      default:
                        e.textContent = "";
                    }
                }
                break;
              case 5:
              case 26:
              case 27:
              case 6:
              case 4:
              case 17:
                break;
              default:
                if ((o & 1024) !== 0)
                  throw Error(
                    "This unit of work tag should not have side-effects. This error is likely caused by a bug in React. Please file an issue."
                  );
            }
            if (e = t.sibling, e !== null) {
              e.return = t.return, Ql = e;
              break;
            }
            Ql = t.return;
          }
    }
    function Ay(e, t, a) {
      var i = a.flags;
      switch (a.tag) {
        case 0:
        case 11:
        case 15:
          Vn(e, a), i & 4 && py(a, Pl | ru);
          break;
        case 1:
          if (Vn(e, a), i & 4)
            if (e = a.stateNode, t === null)
              a.type.defaultProps || "ref" in a.memoizedProps || rh || (e.props !== a.memoizedProps && console.error(
                "Expected %s props to match memoized props before componentDidMount. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.",
                de(a) || "instance"
              ), e.state !== a.memoizedState && console.error(
                "Expected %s state to match memoized state before componentDidMount. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.",
                de(a) || "instance"
              )), mn(a) ? (fn(), he(
                a,
                Ig,
                a,
                e
              ), qa()) : he(
                a,
                Ig,
                a,
                e
              );
            else {
              var o = mi(
                a.type,
                t.memoizedProps
              );
              t = t.memoizedState, a.type.defaultProps || "ref" in a.memoizedProps || rh || (e.props !== a.memoizedProps && console.error(
                "Expected %s props to match memoized props before componentDidUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.",
                de(a) || "instance"
              ), e.state !== a.memoizedState && console.error(
                "Expected %s state to match memoized state before componentDidUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.",
                de(a) || "instance"
              )), mn(a) ? (fn(), he(
                a,
                p1,
                a,
                e,
                o,
                t,
                e.__reactInternalSnapshotBeforeUpdate
              ), qa()) : he(
                a,
                p1,
                a,
                e,
                o,
                t,
                e.__reactInternalSnapshotBeforeUpdate
              );
            }
          i & 64 && gy(a), i & 512 && So(a, a.return);
          break;
        case 3:
          if (t = on(), Vn(e, a), i & 64 && (i = a.updateQueue, i !== null)) {
            if (o = null, a.child !== null)
              switch (a.child.tag) {
                case 27:
                case 5:
                  o = a.child.stateNode;
                  break;
                case 1:
                  o = a.child.stateNode;
              }
            try {
              he(
                a,
                qp,
                i,
                o
              );
            } catch (d) {
              Re(a, a.return, d);
            }
          }
          e.effectDuration += ii(t);
          break;
        case 27:
          t === null && i & 4 && Ey(a);
        case 26:
        case 5:
          Vn(e, a), t === null && i & 4 && Jp(a), i & 512 && So(a, a.return);
          break;
        case 12:
          if (i & 4) {
            i = on(), Vn(e, a), e = a.stateNode, e.effectDuration += lc(i);
            try {
              he(
                a,
                by,
                a,
                t,
                Mv,
                e.effectDuration
              );
            } catch (d) {
              Re(a, a.return, d);
            }
          } else Vn(e, a);
          break;
        case 13:
          Vn(e, a), i & 4 && To(e, a), i & 64 && (e = a.memoizedState, e !== null && (e = e.dehydrated, e !== null && (a = or.bind(
            null,
            a
          ), Ho(e, a))));
          break;
        case 22:
          if (i = a.memoizedState !== null || jc, !i) {
            t = t !== null && t.memoizedState !== null || sl, o = jc;
            var f = sl;
            jc = i, (sl = t) && !f ? Xn(
              e,
              a,
              (a.subtreeFlags & 8772) !== 0
            ) : Vn(e, a), jc = o, sl = f;
          }
          break;
        case 30:
          break;
        default:
          Vn(e, a);
      }
    }
    function Ry(e) {
      var t = e.alternate;
      t !== null && (e.alternate = null, Ry(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && tn(t)), e.stateNode = null, e._debugOwner = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
    }
    function Uu(e, t, a) {
      for (a = a.child; a !== null; )
        yc(
          e,
          t,
          a
        ), a = a.sibling;
    }
    function yc(e, t, a) {
      if (Hl && typeof Hl.onCommitFiberUnmount == "function")
        try {
          Hl.onCommitFiberUnmount(Ui, a);
        } catch (f) {
          ya || (ya = !0, console.error(
            "React instrumentation encountered an error: %s",
            f
          ));
        }
      switch (a.tag) {
        case 26:
          sl || Za(a, t), Uu(
            e,
            t,
            a
          ), a.memoizedState ? a.memoizedState.count-- : a.stateNode && (a = a.stateNode, a.parentNode.removeChild(a));
          break;
        case 27:
          sl || Za(a, t);
          var i = Tl, o = Pa;
          Fn(a.type) && (Tl = a.stateNode, Pa = !1), Uu(
            e,
            t,
            a
          ), he(
            a,
            No,
            a.stateNode
          ), Tl = i, Pa = o;
          break;
        case 5:
          sl || Za(a, t);
        case 6:
          if (i = Tl, o = Pa, Tl = null, Uu(
            e,
            t,
            a
          ), Tl = i, Pa = o, Tl !== null)
            if (Pa)
              try {
                he(
                  a,
                  Uo,
                  Tl,
                  a.stateNode
                );
              } catch (f) {
                Re(
                  a,
                  t,
                  f
                );
              }
            else
              try {
                he(
                  a,
                  ka,
                  Tl,
                  a.stateNode
                );
              } catch (f) {
                Re(
                  a,
                  t,
                  f
                );
              }
          break;
        case 18:
          Tl !== null && (Pa ? (e = Tl, _o(
            e.nodeType === 9 ? e.body : e.nodeName === "HTML" ? e.ownerDocument.body : e,
            a.stateNode
          ), zc(e)) : _o(Tl, a.stateNode));
          break;
        case 4:
          i = Tl, o = Pa, Tl = a.stateNode.containerInfo, Pa = !0, Uu(
            e,
            t,
            a
          ), Tl = i, Pa = o;
          break;
        case 0:
        case 11:
        case 14:
        case 15:
          sl || sc(
            Ha,
            a,
            t
          ), sl || Ws(
            a,
            t,
            Pl
          ), Uu(
            e,
            t,
            a
          );
          break;
        case 1:
          sl || (Za(a, t), i = a.stateNode, typeof i.componentWillUnmount == "function" && Fs(
            a,
            t,
            i
          )), Uu(
            e,
            t,
            a
          );
          break;
        case 21:
          Uu(
            e,
            t,
            a
          );
          break;
        case 22:
          sl = (i = sl) || a.memoizedState !== null, Uu(
            e,
            t,
            a
          ), sl = i;
          break;
        default:
          Uu(
            e,
            t,
            a
          );
      }
    }
    function To(e, t) {
      if (t.memoizedState === null && (e = t.alternate, e !== null && (e = e.memoizedState, e !== null && (e = e.dehydrated, e !== null))))
        try {
          he(
            t,
            Da,
            e
          );
        } catch (a) {
          Re(t, t.return, a);
        }
    }
    function Ps(e) {
      switch (e.tag) {
        case 13:
        case 19:
          var t = e.stateNode;
          return t === null && (t = e.stateNode = new J1()), t;
        case 22:
          return e = e.stateNode, t = e._retryCache, t === null && (t = e._retryCache = new J1()), t;
        default:
          throw Error(
            "Unexpected Suspense handler tag (" + e.tag + "). This is a bug in React."
          );
      }
    }
    function mc(e, t) {
      var a = Ps(e);
      t.forEach(function(i) {
        var o = Si.bind(null, e, i);
        if (!a.has(i)) {
          if (a.add(i), $t)
            if (sh !== null && dh !== null)
              zo(dh, sh);
            else
              throw Error(
                "Expected finished root and lanes to be set. This is a bug in React."
              );
          i.then(o, o);
        }
      });
    }
    function jl(e, t) {
      var a = t.deletions;
      if (a !== null)
        for (var i = 0; i < a.length; i++) {
          var o = e, f = t, d = a[i], h = f;
          e: for (; h !== null; ) {
            switch (h.tag) {
              case 27:
                if (Fn(h.type)) {
                  Tl = h.stateNode, Pa = !1;
                  break e;
                }
                break;
              case 5:
                Tl = h.stateNode, Pa = !1;
                break e;
              case 3:
              case 4:
                Tl = h.stateNode.containerInfo, Pa = !0;
                break e;
            }
            h = h.return;
          }
          if (Tl === null)
            throw Error(
              "Expected to find a host parent. This error is likely caused by a bug in React. Please file an issue."
            );
          yc(o, f, d), Tl = null, Pa = !1, o = d, f = o.alternate, f !== null && (f.return = null), o.return = null;
        }
      if (t.subtreeFlags & 13878)
        for (t = t.child; t !== null; )
          Oy(t, e), t = t.sibling;
    }
    function Oy(e, t) {
      var a = e.alternate, i = e.flags;
      switch (e.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          jl(t, e), fa(e), i & 4 && (sc(
            Ha | ru,
            e,
            e.return
          ), rc(Ha | ru, e), Ws(
            e,
            e.return,
            Pl | ru
          ));
          break;
        case 1:
          jl(t, e), fa(e), i & 512 && (sl || a === null || Za(a, a.return)), i & 64 && jc && (e = e.updateQueue, e !== null && (i = e.callbacks, i !== null && (a = e.shared.hiddenCallbacks, e.shared.hiddenCallbacks = a === null ? i : a.concat(i))));
          break;
        case 26:
          var o = Ku;
          if (jl(t, e), fa(e), i & 512 && (sl || a === null || Za(a, a.return)), i & 4)
            if (t = a !== null ? a.memoizedState : null, i = e.memoizedState, a === null)
              if (i === null)
                if (e.stateNode === null) {
                  e: {
                    i = e.type, a = e.memoizedProps, t = o.ownerDocument || o;
                    t: switch (i) {
                      case "title":
                        o = t.getElementsByTagName("title")[0], (!o || o[Zo] || o[Vl] || o.namespaceURI === $o || o.hasAttribute("itemprop")) && (o = t.createElement(i), t.head.insertBefore(
                          o,
                          t.querySelector("head > title")
                        )), Kt(o, i, a), o[Vl] = e, z(o), i = o;
                        break e;
                      case "link":
                        var f = am(
                          "link",
                          "href",
                          t
                        ).get(i + (a.href || ""));
                        if (f) {
                          for (var d = 0; d < f.length; d++)
                            if (o = f[d], o.getAttribute("href") === (a.href == null || a.href === "" ? null : a.href) && o.getAttribute("rel") === (a.rel == null ? null : a.rel) && o.getAttribute("title") === (a.title == null ? null : a.title) && o.getAttribute("crossorigin") === (a.crossOrigin == null ? null : a.crossOrigin)) {
                              f.splice(d, 1);
                              break t;
                            }
                        }
                        o = t.createElement(i), Kt(o, i, a), t.head.appendChild(o);
                        break;
                      case "meta":
                        if (f = am(
                          "meta",
                          "content",
                          t
                        ).get(i + (a.content || ""))) {
                          for (d = 0; d < f.length; d++)
                            if (o = f[d], Z(
                              a.content,
                              "content"
                            ), o.getAttribute("content") === (a.content == null ? null : "" + a.content) && o.getAttribute("name") === (a.name == null ? null : a.name) && o.getAttribute("property") === (a.property == null ? null : a.property) && o.getAttribute("http-equiv") === (a.httpEquiv == null ? null : a.httpEquiv) && o.getAttribute("charset") === (a.charSet == null ? null : a.charSet)) {
                              f.splice(d, 1);
                              break t;
                            }
                        }
                        o = t.createElement(i), Kt(o, i, a), t.head.appendChild(o);
                        break;
                      default:
                        throw Error(
                          'getNodesForType encountered a type it did not expect: "' + i + '". This is a bug in React.'
                        );
                    }
                    o[Vl] = e, z(o), i = o;
                  }
                  e.stateNode = i;
                } else
                  nm(
                    o,
                    e.type,
                    e.stateNode
                  );
              else
                e.stateNode = Ed(
                  o,
                  i,
                  e.memoizedProps
                );
            else
              t !== i ? (t === null ? a.stateNode !== null && (a = a.stateNode, a.parentNode.removeChild(a)) : t.count--, i === null ? nm(
                o,
                e.type,
                e.stateNode
              ) : Ed(
                o,
                i,
                e.memoizedProps
              )) : i === null && e.stateNode !== null && Sy(
                e,
                e.memoizedProps,
                a.memoizedProps
              );
          break;
        case 27:
          jl(t, e), fa(e), i & 512 && (sl || a === null || Za(a, a.return)), a !== null && i & 4 && Sy(
            e,
            e.memoizedProps,
            a.memoizedProps
          );
          break;
        case 5:
          if (jl(t, e), fa(e), i & 512 && (sl || a === null || Za(a, a.return)), e.flags & 32) {
            t = e.stateNode;
            try {
              he(e, Nu, t);
            } catch (B) {
              Re(e, e.return, B);
            }
          }
          i & 4 && e.stateNode != null && (t = e.memoizedProps, Sy(
            e,
            t,
            a !== null ? a.memoizedProps : t
          )), i & 1024 && (u0 = !0, e.type !== "form" && console.error(
            "Unexpected host component type. Expected a form. This is a bug in React."
          ));
          break;
        case 6:
          if (jl(t, e), fa(e), i & 4) {
            if (e.stateNode === null)
              throw Error(
                "This should have a text node initialized. This error is likely caused by a bug in React. Please file an issue."
              );
            i = e.memoizedProps, a = a !== null ? a.memoizedProps : i, t = e.stateNode;
            try {
              he(
                e,
                Ac,
                t,
                a,
                i
              );
            } catch (B) {
              Re(e, e.return, B);
            }
          }
          break;
        case 3:
          if (o = on(), eg = null, f = Ku, Ku = rr(t.containerInfo), jl(t, e), Ku = f, fa(e), i & 4 && a !== null && a.memoizedState.isDehydrated)
            try {
              he(
                e,
                Iy,
                t.containerInfo
              );
            } catch (B) {
              Re(e, e.return, B);
            }
          u0 && (u0 = !1, pc(e)), t.effectDuration += ii(o);
          break;
        case 4:
          i = Ku, Ku = rr(
            e.stateNode.containerInfo
          ), jl(t, e), fa(e), Ku = i;
          break;
        case 12:
          i = on(), jl(t, e), fa(e), e.stateNode.effectDuration += lc(i);
          break;
        case 13:
          jl(t, e), fa(e), e.child.flags & 8192 && e.memoizedState !== null != (a !== null && a.memoizedState !== null) && (s0 = tu()), i & 4 && (i = e.updateQueue, i !== null && (e.updateQueue = null, mc(e, i)));
          break;
        case 22:
          o = e.memoizedState !== null;
          var h = a !== null && a.memoizedState !== null, v = jc, b = sl;
          if (jc = v || o, sl = b || h, jl(t, e), sl = b, jc = v, fa(e), i & 8192)
            e: for (t = e.stateNode, t._visibility = o ? t._visibility & ~Rv : t._visibility | Rv, o && (a === null || h || jc || sl || Gl(e)), a = null, t = e; ; ) {
              if (t.tag === 5 || t.tag === 26) {
                if (a === null) {
                  h = a = t;
                  try {
                    f = h.stateNode, o ? he(h, da, f) : he(
                      h,
                      Wy,
                      h.stateNode,
                      h.memoizedProps
                    );
                  } catch (B) {
                    Re(h, h.return, B);
                  }
                }
              } else if (t.tag === 6) {
                if (a === null) {
                  h = t;
                  try {
                    d = h.stateNode, o ? he(h, $y, d) : he(
                      h,
                      bd,
                      d,
                      h.memoizedProps
                    );
                  } catch (B) {
                    Re(h, h.return, B);
                  }
                }
              } else if ((t.tag !== 22 && t.tag !== 23 || t.memoizedState === null || t === e) && t.child !== null) {
                t.child.return = t, t = t.child;
                continue;
              }
              if (t === e) break e;
              for (; t.sibling === null; ) {
                if (t.return === null || t.return === e)
                  break e;
                a === t && (a = null), t = t.return;
              }
              a === t && (a = null), t.sibling.return = t.return, t = t.sibling;
            }
          i & 4 && (i = e.updateQueue, i !== null && (a = i.retryQueue, a !== null && (i.retryQueue = null, mc(e, a))));
          break;
        case 19:
          jl(t, e), fa(e), i & 4 && (i = e.updateQueue, i !== null && (e.updateQueue = null, mc(e, i)));
          break;
        case 30:
          break;
        case 21:
          break;
        default:
          jl(t, e), fa(e);
      }
    }
    function fa(e) {
      var t = e.flags;
      if (t & 2) {
        try {
          he(e, kp, e);
        } catch (a) {
          Re(e, e.return, a);
        }
        e.flags &= -3;
      }
      t & 4096 && (e.flags &= -4097);
    }
    function pc(e) {
      if (e.subtreeFlags & 1024)
        for (e = e.child; e !== null; ) {
          var t = e;
          pc(t), t.tag === 5 && t.flags & 1024 && t.stateNode.reset(), e = e.sibling;
        }
    }
    function Vn(e, t) {
      if (t.subtreeFlags & 8772)
        for (t = t.child; t !== null; )
          Ay(e, t.alternate, t), t = t.sibling;
    }
    function Oa(e) {
      switch (e.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          Ws(
            e,
            e.return,
            Pl
          ), Gl(e);
          break;
        case 1:
          Za(e, e.return);
          var t = e.stateNode;
          typeof t.componentWillUnmount == "function" && Fs(
            e,
            e.return,
            t
          ), Gl(e);
          break;
        case 27:
          he(
            e,
            No,
            e.stateNode
          );
        case 26:
        case 5:
          Za(e, e.return), Gl(e);
          break;
        case 22:
          e.memoizedState === null && Gl(e);
          break;
        case 30:
          Gl(e);
          break;
        default:
          Gl(e);
      }
    }
    function Gl(e) {
      for (e = e.child; e !== null; )
        Oa(e), e = e.sibling;
    }
    function _u(e, t, a, i) {
      var o = a.flags;
      switch (a.tag) {
        case 0:
        case 11:
        case 15:
          Xn(
            e,
            a,
            i
          ), py(a, Pl);
          break;
        case 1:
          if (Xn(
            e,
            a,
            i
          ), t = a.stateNode, typeof t.componentDidMount == "function" && he(
            a,
            Ig,
            a,
            t
          ), t = a.updateQueue, t !== null) {
            e = a.stateNode;
            try {
              he(
                a,
                io,
                t,
                e
              );
            } catch (f) {
              Re(a, a.return, f);
            }
          }
          i && o & 64 && gy(a), So(a, a.return);
          break;
        case 27:
          Ey(a);
        case 26:
        case 5:
          Xn(
            e,
            a,
            i
          ), i && t === null && o & 4 && Jp(a), So(a, a.return);
          break;
        case 12:
          if (i && o & 4) {
            o = on(), Xn(
              e,
              a,
              i
            ), i = a.stateNode, i.effectDuration += lc(o);
            try {
              he(
                a,
                by,
                a,
                t,
                Mv,
                i.effectDuration
              );
            } catch (f) {
              Re(a, a.return, f);
            }
          } else
            Xn(
              e,
              a,
              i
            );
          break;
        case 13:
          Xn(
            e,
            a,
            i
          ), i && o & 4 && To(e, a);
          break;
        case 22:
          a.memoizedState === null && Xn(
            e,
            a,
            i
          ), So(a, a.return);
          break;
        case 30:
          break;
        default:
          Xn(
            e,
            a,
            i
          );
      }
    }
    function Xn(e, t, a) {
      for (a = a && (t.subtreeFlags & 8772) !== 0, t = t.child; t !== null; )
        _u(
          e,
          t.alternate,
          t,
          a
        ), t = t.sibling;
    }
    function Qn(e, t) {
      var a = null;
      e !== null && e.memoizedState !== null && e.memoizedState.cachePool !== null && (a = e.memoizedState.cachePool.pool), e = null, t.memoizedState !== null && t.memoizedState.cachePool !== null && (e = t.memoizedState.cachePool.pool), e !== a && (e != null && tc(e), a != null && _n(a));
    }
    function pn(e, t) {
      e = null, t.alternate !== null && (e = t.alternate.memoizedState.cache), t = t.memoizedState.cache, t !== e && (tc(t), e != null && _n(e));
    }
    function Et(e, t, a, i) {
      if (t.subtreeFlags & 10256)
        for (t = t.child; t !== null; )
          tr(
            e,
            t,
            a,
            i
          ), t = t.sibling;
    }
    function tr(e, t, a, i) {
      var o = t.flags;
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          Et(
            e,
            t,
            a,
            i
          ), o & 2048 && vy(t, wl | ru);
          break;
        case 1:
          Et(
            e,
            t,
            a,
            i
          );
          break;
        case 3:
          var f = on();
          Et(
            e,
            t,
            a,
            i
          ), o & 2048 && (a = null, t.alternate !== null && (a = t.alternate.memoizedState.cache), t = t.memoizedState.cache, t !== a && (tc(t), a != null && _n(a))), e.passiveEffectDuration += ii(f);
          break;
        case 12:
          if (o & 2048) {
            o = on(), Et(
              e,
              t,
              a,
              i
            ), e = t.stateNode, e.passiveEffectDuration += lc(o);
            try {
              he(
                t,
                Kp,
                t,
                t.alternate,
                Mv,
                e.passiveEffectDuration
              );
            } catch (h) {
              Re(t, t.return, h);
            }
          } else
            Et(
              e,
              t,
              a,
              i
            );
          break;
        case 13:
          Et(
            e,
            t,
            a,
            i
          );
          break;
        case 23:
          break;
        case 22:
          f = t.stateNode;
          var d = t.alternate;
          t.memoizedState !== null ? f._visibility & xc ? Et(
            e,
            t,
            a,
            i
          ) : Eo(
            e,
            t
          ) : f._visibility & xc ? Et(
            e,
            t,
            a,
            i
          ) : (f._visibility |= xc, vi(
            e,
            t,
            a,
            i,
            (t.subtreeFlags & 10256) !== 0
          )), o & 2048 && Qn(d, t);
          break;
        case 24:
          Et(
            e,
            t,
            a,
            i
          ), o & 2048 && pn(t.alternate, t);
          break;
        default:
          Et(
            e,
            t,
            a,
            i
          );
      }
    }
    function vi(e, t, a, i, o) {
      for (o = o && (t.subtreeFlags & 10256) !== 0, t = t.child; t !== null; )
        ed(
          e,
          t,
          a,
          i,
          o
        ), t = t.sibling;
    }
    function ed(e, t, a, i, o) {
      var f = t.flags;
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          vi(
            e,
            t,
            a,
            i,
            o
          ), vy(t, wl);
          break;
        case 23:
          break;
        case 22:
          var d = t.stateNode;
          t.memoizedState !== null ? d._visibility & xc ? vi(
            e,
            t,
            a,
            i,
            o
          ) : Eo(
            e,
            t
          ) : (d._visibility |= xc, vi(
            e,
            t,
            a,
            i,
            o
          )), o && f & 2048 && Qn(
            t.alternate,
            t
          );
          break;
        case 24:
          vi(
            e,
            t,
            a,
            i,
            o
          ), o && f & 2048 && pn(t.alternate, t);
          break;
        default:
          vi(
            e,
            t,
            a,
            i,
            o
          );
      }
    }
    function Eo(e, t) {
      if (t.subtreeFlags & 10256)
        for (t = t.child; t !== null; ) {
          var a = e, i = t, o = i.flags;
          switch (i.tag) {
            case 22:
              Eo(
                a,
                i
              ), o & 2048 && Qn(
                i.alternate,
                i
              );
              break;
            case 24:
              Eo(
                a,
                i
              ), o & 2048 && pn(
                i.alternate,
                i
              );
              break;
            default:
              Eo(
                a,
                i
              );
          }
          t = t.sibling;
        }
    }
    function vc(e) {
      if (e.subtreeFlags & Jm)
        for (e = e.child; e !== null; )
          gi(e), e = e.sibling;
    }
    function gi(e) {
      switch (e.tag) {
        case 26:
          vc(e), e.flags & Jm && e.memoizedState !== null && uv(
            Ku,
            e.memoizedState,
            e.memoizedProps
          );
          break;
        case 5:
          vc(e);
          break;
        case 3:
        case 4:
          var t = Ku;
          Ku = rr(
            e.stateNode.containerInfo
          ), vc(e), Ku = t;
          break;
        case 22:
          e.memoizedState === null && (t = e.alternate, t !== null && t.memoizedState !== null ? (t = Jm, Jm = 16777216, vc(e), Jm = t) : vc(e));
          break;
        default:
          vc(e);
      }
    }
    function lr(e) {
      var t = e.alternate;
      if (t !== null && (e = t.child, e !== null)) {
        t.child = null;
        do
          t = e.sibling, e.sibling = null, e = t;
        while (e !== null);
      }
    }
    function Ao(e) {
      var t = e.deletions;
      if ((e.flags & 16) !== 0) {
        if (t !== null)
          for (var a = 0; a < t.length; a++) {
            var i = t[a];
            Ql = i, zy(
              i,
              e
            );
          }
        lr(e);
      }
      if (e.subtreeFlags & 10256)
        for (e = e.child; e !== null; )
          Dy(e), e = e.sibling;
    }
    function Dy(e) {
      switch (e.tag) {
        case 0:
        case 11:
        case 15:
          Ao(e), e.flags & 2048 && Pf(
            e,
            e.return,
            wl | ru
          );
          break;
        case 3:
          var t = on();
          Ao(e), e.stateNode.passiveEffectDuration += ii(t);
          break;
        case 12:
          t = on(), Ao(e), e.stateNode.passiveEffectDuration += lc(t);
          break;
        case 22:
          t = e.stateNode, e.memoizedState !== null && t._visibility & xc && (e.return === null || e.return.tag !== 13) ? (t._visibility &= ~xc, ar(e)) : Ao(e);
          break;
        default:
          Ao(e);
      }
    }
    function ar(e) {
      var t = e.deletions;
      if ((e.flags & 16) !== 0) {
        if (t !== null)
          for (var a = 0; a < t.length; a++) {
            var i = t[a];
            Ql = i, zy(
              i,
              e
            );
          }
        lr(e);
      }
      for (e = e.child; e !== null; )
        nr(e), e = e.sibling;
    }
    function nr(e) {
      switch (e.tag) {
        case 0:
        case 11:
        case 15:
          Pf(
            e,
            e.return,
            wl
          ), ar(e);
          break;
        case 22:
          var t = e.stateNode;
          t._visibility & xc && (t._visibility &= ~xc, ar(e));
          break;
        default:
          ar(e);
      }
    }
    function zy(e, t) {
      for (; Ql !== null; ) {
        var a = Ql, i = a;
        switch (i.tag) {
          case 0:
          case 11:
          case 15:
            Pf(
              i,
              t,
              wl
            );
            break;
          case 23:
          case 22:
            i.memoizedState !== null && i.memoizedState.cachePool !== null && (i = i.memoizedState.cachePool.pool, i != null && tc(i));
            break;
          case 24:
            _n(i.memoizedState.cache);
        }
        if (i = a.child, i !== null) i.return = a, Ql = i;
        else
          e: for (a = e; Ql !== null; ) {
            i = Ql;
            var o = i.sibling, f = i.return;
            if (Ry(i), i === a) {
              Ql = null;
              break e;
            }
            if (o !== null) {
              o.return = f, Ql = o;
              break e;
            }
            Ql = f;
          }
      }
    }
    function My() {
      BS.forEach(function(e) {
        return e();
      });
    }
    function Uy() {
      var e = typeof IS_REACT_ACT_ENVIRONMENT < "u" ? IS_REACT_ACT_ENVIRONMENT : void 0;
      return e || j.actQueue === null || console.error(
        "The current testing environment is not configured to support act(...)"
      ), e;
    }
    function ra(e) {
      if ((St & xa) !== Sn && lt !== 0)
        return lt & -lt;
      var t = j.T;
      return t !== null ? (t._updatedFibers || (t._updatedFibers = /* @__PURE__ */ new Set()), t._updatedFibers.add(e), e = Br, e !== 0 ? e : Yy()) : hf();
    }
    function $p() {
      En === 0 && (En = (lt & 536870912) === 0 || yt ? Qe() : 536870912);
      var e = du.current;
      return e !== null && (e.flags |= 32), En;
    }
    function Qt(e, t, a) {
      if (vh && console.error("useInsertionEffect must not schedule updates."), p0 && (Vv = !0), (e === Ct && (At === Lr || At === Vr) || e.cancelPendingCommit !== null) && (bc(e, 0), Cu(
        e,
        lt,
        En,
        !1
      )), mu(e, a), (St & xa) !== 0 && e === Ct) {
        if (pa)
          switch (t.tag) {
            case 0:
            case 11:
            case 15:
              e = tt && de(tt) || "Unknown", ab.has(e) || (ab.add(e), t = de(t) || "Unknown", console.error(
                "Cannot update a component (`%s`) while rendering a different component (`%s`). To locate the bad setState() call inside `%s`, follow the stack trace as described in https://react.dev/link/setstate-in-render",
                t,
                e,
                e
              ));
              break;
            case 1:
              lb || (console.error(
                "Cannot update during an existing state transition (such as within `render`). Render methods should be a pure function of props and state."
              ), lb = !0);
          }
      } else
        $t && wa(e, t, a), Pp(t), e === Ct && ((St & xa) === Sn && (lf |= a), al === Gr && Cu(
          e,
          lt,
          En,
          !1
        )), Ka(e);
    }
    function fl(e, t, a) {
      if ((St & (xa | Ju)) !== Sn)
        throw Error("Should not already be working.");
      var i = !a && (t & 124) === 0 && (t & e.expiredLanes) === 0 || ku(e, t), o = i ? Cy(e, t) : nd(e, t, !0), f = i;
      do {
        if (o === Gc) {
          mh && !i && Cu(e, t, 0, !1);
          break;
        } else {
          if (a = e.current.alternate, f && !Wp(a)) {
            o = nd(e, t, !1), f = !1;
            continue;
          }
          if (o === hh) {
            if (f = t, e.errorRecoveryDisabledLanes & f)
              var d = 0;
            else
              d = e.pendingLanes & -536870913, d = d !== 0 ? d : d & 536870912 ? 536870912 : 0;
            if (d !== 0) {
              t = d;
              e: {
                o = e;
                var h = d;
                d = Pm;
                var v = o.current.memoizedState.isDehydrated;
                if (v && (bc(
                  o,
                  h
                ).flags |= 256), h = nd(
                  o,
                  h,
                  !1
                ), h !== hh) {
                  if (f0 && !v) {
                    o.errorRecoveryDisabledLanes |= f, lf |= f, o = Gr;
                    break e;
                  }
                  o = Na, Na = d, o !== null && (Na === null ? Na = o : Na.push.apply(
                    Na,
                    o
                  ));
                }
                o = h;
              }
              if (f = !1, o !== hh) continue;
            }
          }
          if (o === $m) {
            bc(e, 0), Cu(e, t, 0, !0);
            break;
          }
          e: {
            switch (i = e, o) {
              case Gc:
              case $m:
                throw Error("Root did not complete. This is a bug in React.");
              case Gr:
                if ((t & 4194048) !== t) break;
              case jv:
                Cu(
                  i,
                  t,
                  En,
                  !ef
                );
                break e;
              case hh:
                Na = null;
                break;
              case i0:
              case k1:
                break;
              default:
                throw Error("Unknown root exit status.");
            }
            if (j.actQueue !== null)
              fd(
                i,
                a,
                t,
                Na,
                ep,
                Gv,
                En,
                lf,
                Xr
              );
            else {
              if ((t & 62914560) === t && (f = s0 + W1 - tu(), 10 < f)) {
                if (Cu(
                  i,
                  t,
                  En,
                  !ef
                ), hl(i, 0, !0) !== 0) break e;
                i.timeoutHandle = sb(
                  vl.bind(
                    null,
                    i,
                    a,
                    Na,
                    ep,
                    Gv,
                    t,
                    En,
                    lf,
                    Xr,
                    ef,
                    o,
                    GS,
                    I0,
                    0
                  ),
                  f
                );
                break e;
              }
              vl(
                i,
                a,
                Na,
                ep,
                Gv,
                t,
                En,
                lf,
                Xr,
                ef,
                o,
                YS,
                I0,
                0
              );
            }
          }
        }
        break;
      } while (!0);
      Ka(e);
    }
    function vl(e, t, a, i, o, f, d, h, v, b, B, L, x, V) {
      if (e.timeoutHandle = kr, L = t.subtreeFlags, (L & 8192 || (L & 16785408) === 16785408) && (ip = { stylesheets: null, count: 0, unsuspend: nv }, gi(t), L = iv(), L !== null)) {
        e.cancelPendingCommit = L(
          fd.bind(
            null,
            e,
            t,
            f,
            a,
            i,
            o,
            d,
            h,
            v,
            B,
            jS,
            x,
            V
          )
        ), Cu(
          e,
          f,
          d,
          !b
        );
        return;
      }
      fd(
        e,
        t,
        f,
        a,
        i,
        o,
        d,
        h,
        v
      );
    }
    function Wp(e) {
      for (var t = e; ; ) {
        var a = t.tag;
        if ((a === 0 || a === 11 || a === 15) && t.flags & 16384 && (a = t.updateQueue, a !== null && (a = a.stores, a !== null)))
          for (var i = 0; i < a.length; i++) {
            var o = a[i], f = o.getSnapshot;
            o = o.value;
            try {
              if (!_a(f(), o)) return !1;
            } catch {
              return !1;
            }
          }
        if (a = t.child, t.subtreeFlags & 16384 && a !== null)
          a.return = t, t = a;
        else {
          if (t === e) break;
          for (; t.sibling === null; ) {
            if (t.return === null || t.return === e) return !0;
            t = t.return;
          }
          t.sibling.return = t.return, t = t.sibling;
        }
      }
      return !0;
    }
    function Cu(e, t, a, i) {
      t &= ~r0, t &= ~lf, e.suspendedLanes |= t, e.pingedLanes &= ~t, i && (e.warmLanes |= t), i = e.expirationTimes;
      for (var o = t; 0 < o; ) {
        var f = 31 - Ll(o), d = 1 << f;
        i[f] = -1, o &= ~d;
      }
      a !== 0 && df(e, a, t);
    }
    function gc() {
      return (St & (xa | Ju)) === Sn ? (Sc(0), !1) : !0;
    }
    function td() {
      if (tt !== null) {
        if (At === en)
          var e = tt.return;
        else
          e = tt, gs(), dn(e), ih = null, Zm = 0, e = tt;
        for (; e !== null; )
          my(e.alternate, e), e = e.return;
        tt = null;
      }
    }
    function bc(e, t) {
      var a = e.timeoutHandle;
      a !== kr && (e.timeoutHandle = kr, PS(a)), a = e.cancelPendingCommit, a !== null && (e.cancelPendingCommit = null, a()), td(), Ct = e, tt = a = Mn(e.current, null), lt = t, At = en, Tn = null, ef = !1, mh = ku(e, t), f0 = !1, al = Gc, Xr = En = r0 = lf = tf = 0, Na = Pm = null, Gv = !1, (t & 8) !== 0 && (t |= t & 32);
      var i = e.entangledLanes;
      if (i !== 0)
        for (e = e.entanglements, i &= t; 0 < i; ) {
          var o = 31 - Ll(i), f = 1 << o;
          t |= e[o], i &= ~f;
        }
      return Yi = t, Of(), t = W0(), 1e3 < t - $0 && (j.recentlyCreatedOwnerStacks = 0, $0 = t), Qu.discardPendingWarnings(), a;
    }
    function ur(e, t) {
      xe = null, j.H = qv, j.getCurrentStack = null, pa = !1, Ua = null, t === Lm || t === Hv ? (t = Ih(), At = Fm) : t === t1 ? (t = Ih(), At = $1) : At = t === j1 ? o0 : t !== null && typeof t == "object" && typeof t.then == "function" ? yh : Wm, Tn = t;
      var a = tt;
      if (a === null)
        al = $m, bo(
          e,
          Ta(t, e.current)
        );
      else
        switch (a.mode & Il && Eu(a), ta(), At) {
          case Wm:
            fe !== null && typeof fe.markComponentErrored == "function" && fe.markComponentErrored(
              a,
              t,
              lt
            );
            break;
          case Lr:
          case Vr:
          case Fm:
          case yh:
          case Im:
            fe !== null && typeof fe.markComponentSuspended == "function" && fe.markComponentSuspended(
              a,
              t,
              lt
            );
        }
    }
    function ld() {
      var e = j.H;
      return j.H = qv, e === null ? qv : e;
    }
    function _y() {
      var e = j.A;
      return j.A = wS, e;
    }
    function ad() {
      al = Gr, ef || (lt & 4194048) !== lt && du.current !== null || (mh = !0), (tf & 134217727) === 0 && (lf & 134217727) === 0 || Ct === null || Cu(
        Ct,
        lt,
        En,
        !1
      );
    }
    function nd(e, t, a) {
      var i = St;
      St |= xa;
      var o = ld(), f = _y();
      if (Ct !== e || lt !== t) {
        if ($t) {
          var d = e.memoizedUpdaters;
          0 < d.size && (zo(e, lt), d.clear()), Al(e, t);
        }
        ep = null, bc(e, t);
      }
      An(t), t = !1, d = al;
      e: do
        try {
          if (At !== en && tt !== null) {
            var h = tt, v = Tn;
            switch (At) {
              case o0:
                td(), d = jv;
                break e;
              case Fm:
              case Lr:
              case Vr:
              case yh:
                du.current === null && (t = !0);
                var b = At;
                if (At = en, Tn = null, bi(e, h, v, b), a && mh) {
                  d = Gc;
                  break e;
                }
                break;
              default:
                b = At, At = en, Tn = null, bi(e, h, v, b);
            }
          }
          ud(), d = al;
          break;
        } catch (B) {
          ur(e, B);
        }
      while (!0);
      return t && e.shellSuspendCounter++, gs(), St = i, j.H = o, j.A = f, ji(), tt === null && (Ct = null, lt = 0, Of()), d;
    }
    function ud() {
      for (; tt !== null; ) xy(tt);
    }
    function Cy(e, t) {
      var a = St;
      St |= xa;
      var i = ld(), o = _y();
      if (Ct !== e || lt !== t) {
        if ($t) {
          var f = e.memoizedUpdaters;
          0 < f.size && (zo(e, lt), f.clear()), Al(e, t);
        }
        ep = null, Lv = tu() + F1, bc(e, t);
      } else
        mh = ku(
          e,
          t
        );
      An(t);
      e: do
        try {
          if (At !== en && tt !== null)
            t: switch (t = tt, f = Tn, At) {
              case Wm:
                At = en, Tn = null, bi(
                  e,
                  t,
                  f,
                  Wm
                );
                break;
              case Lr:
              case Vr:
                if (Fh(f)) {
                  At = en, Tn = null, id(t);
                  break;
                }
                t = function() {
                  At !== Lr && At !== Vr || Ct !== e || (At = Im), Ka(e);
                }, f.then(t, t);
                break e;
              case Fm:
                At = Im;
                break e;
              case $1:
                At = c0;
                break e;
              case Im:
                Fh(f) ? (At = en, Tn = null, id(t)) : (At = en, Tn = null, bi(
                  e,
                  t,
                  f,
                  Im
                ));
                break;
              case c0:
                var d = null;
                switch (tt.tag) {
                  case 26:
                    d = tt.memoizedState;
                  case 5:
                  case 27:
                    var h = tt;
                    if (!d || sr(d)) {
                      At = en, Tn = null;
                      var v = h.sibling;
                      if (v !== null) tt = v;
                      else {
                        var b = h.return;
                        b !== null ? (tt = b, ir(b)) : tt = null;
                      }
                      break t;
                    }
                    break;
                  default:
                    console.error(
                      "Unexpected type of fiber triggered a suspensey commit. This is a bug in React."
                    );
                }
                At = en, Tn = null, bi(
                  e,
                  t,
                  f,
                  c0
                );
                break;
              case yh:
                At = en, Tn = null, bi(
                  e,
                  t,
                  f,
                  yh
                );
                break;
              case o0:
                td(), al = jv;
                break e;
              default:
                throw Error(
                  "Unexpected SuspendedReason. This is a bug in React."
                );
            }
          j.actQueue !== null ? ud() : Hy();
          break;
        } catch (B) {
          ur(e, B);
        }
      while (!0);
      return gs(), j.H = i, j.A = o, St = a, tt !== null ? (fe !== null && typeof fe.markRenderYielded == "function" && fe.markRenderYielded(), Gc) : (ji(), Ct = null, lt = 0, Of(), al);
    }
    function Hy() {
      for (; tt !== null && !hv(); )
        xy(tt);
    }
    function xy(e) {
      var t = e.alternate;
      (e.mode & Il) !== Bt ? (bs(e), t = he(
        e,
        $s,
        t,
        e,
        Yi
      ), Eu(e)) : t = he(
        e,
        $s,
        t,
        e,
        Yi
      ), e.memoizedProps = e.pendingProps, t === null ? ir(e) : tt = t;
    }
    function id(e) {
      var t = he(e, cd, e);
      e.memoizedProps = e.pendingProps, t === null ? ir(e) : tt = t;
    }
    function cd(e) {
      var t = e.alternate, a = (e.mode & Il) !== Bt;
      switch (a && bs(e), e.tag) {
        case 15:
        case 0:
          t = ry(
            t,
            e,
            e.pendingProps,
            e.type,
            void 0,
            lt
          );
          break;
        case 11:
          t = ry(
            t,
            e,
            e.pendingProps,
            e.type.render,
            e.ref,
            lt
          );
          break;
        case 5:
          dn(e);
        default:
          my(t, e), e = tt = Yh(e, Yi), t = $s(t, e, Yi);
      }
      return a && Eu(e), t;
    }
    function bi(e, t, a, i) {
      gs(), dn(t), ih = null, Zm = 0;
      var o = t.return;
      try {
        if (Kf(
          e,
          o,
          t,
          a,
          lt
        )) {
          al = $m, bo(
            e,
            Ta(a, e.current)
          ), tt = null;
          return;
        }
      } catch (f) {
        if (o !== null) throw tt = o, f;
        al = $m, bo(
          e,
          Ta(a, e.current)
        ), tt = null;
        return;
      }
      t.flags & 32768 ? (yt || i === Wm ? e = !0 : mh || (lt & 536870912) !== 0 ? e = !1 : (ef = e = !0, (i === Lr || i === Vr || i === Fm || i === yh) && (i = du.current, i !== null && i.tag === 13 && (i.flags |= 16384))), od(t, e)) : ir(t);
    }
    function ir(e) {
      var t = e;
      do {
        if ((t.flags & 32768) !== 0) {
          od(
            t,
            ef
          );
          return;
        }
        var a = t.alternate;
        if (e = t.return, bs(t), a = he(
          t,
          Vp,
          a,
          t,
          Yi
        ), (t.mode & Il) !== Bt && ac(t), a !== null) {
          tt = a;
          return;
        }
        if (t = t.sibling, t !== null) {
          tt = t;
          return;
        }
        tt = t = e;
      } while (t !== null);
      al === Gc && (al = k1);
    }
    function od(e, t) {
      do {
        var a = Xp(e.alternate, e);
        if (a !== null) {
          a.flags &= 32767, tt = a;
          return;
        }
        if ((e.mode & Il) !== Bt) {
          ac(e), a = e.actualDuration;
          for (var i = e.child; i !== null; )
            a += i.actualDuration, i = i.sibling;
          e.actualDuration = a;
        }
        if (a = e.return, a !== null && (a.flags |= 32768, a.subtreeFlags = 0, a.deletions = null), !t && (e = e.sibling, e !== null)) {
          tt = e;
          return;
        }
        tt = e = a;
      } while (e !== null);
      al = jv, tt = null;
    }
    function fd(e, t, a, i, o, f, d, h, v) {
      e.cancelPendingCommit = null;
      do
        Ro();
      while (ea !== Qr);
      if (Qu.flushLegacyContextWarning(), Qu.flushPendingUnsafeLifecycleWarnings(), (St & (xa | Ju)) !== Sn)
        throw Error("Should not already be working.");
      if (fe !== null && typeof fe.markCommitStarted == "function" && fe.markCommitStarted(a), t === null) _e();
      else {
        if (a === 0 && console.error(
          "finishedLanes should not be empty during a commit. This is a bug in React."
        ), t === e.current)
          throw Error(
            "Cannot commit the same tree as before. This error is likely caused by a bug in React. Please file an issue."
          );
        if (f = t.lanes | t.childLanes, f |= jg, Ir(
          e,
          a,
          f,
          d,
          h,
          v
        ), e === Ct && (tt = Ct = null, lt = 0), ph = t, nf = e, uf = a, h0 = f, y0 = o, tb = i, (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0 ? (e.callbackNode = null, e.callbackPriority = 0, qy(Vo, function() {
          return cr(), null;
        })) : (e.callbackNode = null, e.callbackPriority = 0), Mv = th(), i = (t.flags & 13878) !== 0, (t.subtreeFlags & 13878) !== 0 || i) {
          i = j.T, j.T = null, o = Me.p, Me.p = xl, d = St, St |= Ju;
          try {
            Is(e, t, a);
          } finally {
            St = d, Me.p = o, j.T = i;
          }
        }
        ea = I1, Zn(), rd(), Fp();
      }
    }
    function Zn() {
      if (ea === I1) {
        ea = Qr;
        var e = nf, t = ph, a = uf, i = (t.flags & 13878) !== 0;
        if ((t.subtreeFlags & 13878) !== 0 || i) {
          i = j.T, j.T = null;
          var o = Me.p;
          Me.p = xl;
          var f = St;
          St |= Ju;
          try {
            sh = a, dh = e, Oy(t, e), dh = sh = null, a = O0;
            var d = Mp(e.containerInfo), h = a.focusedElem, v = a.selectionRange;
            if (d !== h && h && h.ownerDocument && zp(
              h.ownerDocument.documentElement,
              h
            )) {
              if (v !== null && Nh(h)) {
                var b = v.start, B = v.end;
                if (B === void 0 && (B = b), "selectionStart" in h)
                  h.selectionStart = b, h.selectionEnd = Math.min(
                    B,
                    h.value.length
                  );
                else {
                  var L = h.ownerDocument || document, x = L && L.defaultView || window;
                  if (x.getSelection) {
                    var V = x.getSelection(), ye = h.textContent.length, Ue = Math.min(
                      v.start,
                      ye
                    ), Ht = v.end === void 0 ? Ue : Math.min(v.end, ye);
                    !V.extend && Ue > Ht && (d = Ht, Ht = Ue, Ue = d);
                    var ut = xh(
                      h,
                      Ue
                    ), T = xh(
                      h,
                      Ht
                    );
                    if (ut && T && (V.rangeCount !== 1 || V.anchorNode !== ut.node || V.anchorOffset !== ut.offset || V.focusNode !== T.node || V.focusOffset !== T.offset)) {
                      var E = L.createRange();
                      E.setStart(ut.node, ut.offset), V.removeAllRanges(), Ue > Ht ? (V.addRange(E), V.extend(T.node, T.offset)) : (E.setEnd(T.node, T.offset), V.addRange(E));
                    }
                  }
                }
              }
              for (L = [], V = h; V = V.parentNode; )
                V.nodeType === 1 && L.push({
                  element: V,
                  left: V.scrollLeft,
                  top: V.scrollTop
                });
              for (typeof h.focus == "function" && h.focus(), h = 0; h < L.length; h++) {
                var A = L[h];
                A.element.scrollLeft = A.left, A.element.scrollTop = A.top;
              }
            }
            ag = !!R0, O0 = R0 = null;
          } finally {
            St = f, Me.p = o, j.T = i;
          }
        }
        e.current = t, ea = P1;
      }
    }
    function rd() {
      if (ea === P1) {
        ea = Qr;
        var e = nf, t = ph, a = uf, i = (t.flags & 8772) !== 0;
        if ((t.subtreeFlags & 8772) !== 0 || i) {
          i = j.T, j.T = null;
          var o = Me.p;
          Me.p = xl;
          var f = St;
          St |= Ju;
          try {
            fe !== null && typeof fe.markLayoutEffectsStarted == "function" && fe.markLayoutEffectsStarted(a), sh = a, dh = e, Ay(
              e,
              t.alternate,
              t
            ), dh = sh = null, fe !== null && typeof fe.markLayoutEffectsStopped == "function" && fe.markLayoutEffectsStopped();
          } finally {
            St = f, Me.p = o, j.T = i;
          }
        }
        ea = eb;
      }
    }
    function Fp() {
      if (ea === LS || ea === eb) {
        ea = Qr, Mg();
        var e = nf, t = ph, a = uf, i = tb, o = (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0;
        o ? ea = d0 : (ea = Qr, ph = nf = null, Kn(e, e.pendingLanes), Zr = 0, lp = null);
        var f = e.pendingLanes;
        if (f === 0 && (af = null), o || Do(e), o = Jc(a), t = t.stateNode, Hl && typeof Hl.onCommitFiberRoot == "function")
          try {
            var d = (t.current.flags & 128) === 128;
            switch (o) {
              case xl:
                var h = xd;
                break;
              case bn:
                h = Ar;
                break;
              case Gu:
                h = Vo;
                break;
              case qd:
                h = Rr;
                break;
              default:
                h = Vo;
            }
            Hl.onCommitFiberRoot(
              Ui,
              t,
              h,
              d
            );
          } catch (L) {
            ya || (ya = !0, console.error(
              "React instrumentation encountered an error: %s",
              L
            ));
          }
        if ($t && e.memoizedUpdaters.clear(), My(), i !== null) {
          d = j.T, h = Me.p, Me.p = xl, j.T = null;
          try {
            var v = e.onRecoverableError;
            for (t = 0; t < i.length; t++) {
              var b = i[t], B = Ip(b.stack);
              he(
                b.source,
                v,
                b.value,
                B
              );
            }
          } finally {
            j.T = d, Me.p = h;
          }
        }
        (uf & 3) !== 0 && Ro(), Ka(e), f = e.pendingLanes, (a & 4194090) !== 0 && (f & 42) !== 0 ? (_v = !0, e === m0 ? tp++ : (tp = 0, m0 = e)) : tp = 0, Sc(0), _e();
      }
    }
    function Ip(e) {
      return e = { componentStack: e }, Object.defineProperty(e, "digest", {
        get: function() {
          console.error(
            'You are accessing "digest" from the errorInfo object passed to onRecoverableError. This property is no longer provided as part of errorInfo but can be accessed as a property of the Error instance itself.'
          );
        }
      }), e;
    }
    function Kn(e, t) {
      (e.pooledCacheLanes &= t) === 0 && (t = e.pooledCache, t != null && (e.pooledCache = null, _n(t)));
    }
    function Ro(e) {
      return Zn(), rd(), Fp(), cr();
    }
    function cr() {
      if (ea !== d0) return !1;
      var e = nf, t = h0;
      h0 = 0;
      var a = Jc(uf), i = Gu > a ? Gu : a;
      a = j.T;
      var o = Me.p;
      try {
        Me.p = i, j.T = null, i = y0, y0 = null;
        var f = nf, d = uf;
        if (ea = Qr, ph = nf = null, uf = 0, (St & (xa | Ju)) !== Sn)
          throw Error("Cannot flush passive effects while already rendering.");
        p0 = !0, Vv = !1, fe !== null && typeof fe.markPassiveEffectsStarted == "function" && fe.markPassiveEffectsStarted(d);
        var h = St;
        if (St |= Ju, Dy(f.current), tr(
          f,
          f.current,
          d,
          i
        ), fe !== null && typeof fe.markPassiveEffectsStopped == "function" && fe.markPassiveEffectsStopped(), Do(f), St = h, Sc(0, !1), Vv ? f === lp ? Zr++ : (Zr = 0, lp = f) : Zr = 0, Vv = p0 = !1, Hl && typeof Hl.onPostCommitFiberRoot == "function")
          try {
            Hl.onPostCommitFiberRoot(Ui, f);
          } catch (b) {
            ya || (ya = !0, console.error(
              "React instrumentation encountered an error: %s",
              b
            ));
          }
        var v = f.current.stateNode;
        return v.effectDuration = 0, v.passiveEffectDuration = 0, !0;
      } finally {
        Me.p = o, j.T = a, Kn(e, t);
      }
    }
    function Oo(e, t, a) {
      t = Ta(a, t), t = Yl(e.stateNode, t, 2), e = rn(e, t, 2), e !== null && (mu(e, 2), Ka(e));
    }
    function Re(e, t, a) {
      if (vh = !1, e.tag === 3)
        Oo(e, e, a);
      else {
        for (; t !== null; ) {
          if (t.tag === 3) {
            Oo(
              t,
              e,
              a
            );
            return;
          }
          if (t.tag === 1) {
            var i = t.stateNode;
            if (typeof t.type.getDerivedStateFromError == "function" || typeof i.componentDidCatch == "function" && (af === null || !af.has(i))) {
              e = Ta(a, e), a = Xt(2), i = rn(t, a, 2), i !== null && (Zf(
                a,
                i,
                t,
                e
              ), mu(i, 2), Ka(i));
              return;
            }
          }
          t = t.return;
        }
        console.error(
          `Internal React error: Attempted to capture a commit phase error inside a detached tree. This indicates a bug in React. Potential causes include deleting the same fiber more than once, committing an already-finished tree, or an inconsistent return pointer.

Error message:

%s`,
          a
        );
      }
    }
    function Ny(e, t, a) {
      var i = e.pingCache;
      if (i === null) {
        i = e.pingCache = new qS();
        var o = /* @__PURE__ */ new Set();
        i.set(t, o);
      } else
        o = i.get(t), o === void 0 && (o = /* @__PURE__ */ new Set(), i.set(t, o));
      o.has(a) || (f0 = !0, o.add(a), i = Tg.bind(null, e, t, a), $t && zo(e, a), t.then(i, i));
    }
    function Tg(e, t, a) {
      var i = e.pingCache;
      i !== null && i.delete(t), e.pingedLanes |= e.suspendedLanes & a, e.warmLanes &= ~a, Uy() && j.actQueue === null && console.error(
        `A suspended resource finished loading inside a test, but the event was not wrapped in act(...).

When testing, code that resolves suspended data should be wrapped into act(...):

act(() => {
  /* finish loading suspended data */
});
/* assert on the output */

This ensures that you're testing the behavior the user would see in the browser. Learn more at https://react.dev/link/wrap-tests-with-act`
      ), Ct === e && (lt & a) === a && (al === Gr || al === i0 && (lt & 62914560) === lt && tu() - s0 < W1 ? (St & xa) === Sn && bc(e, 0) : r0 |= a, Xr === lt && (Xr = 0)), Ka(e);
    }
    function wy(e, t) {
      t === 0 && (t = On()), e = aa(e, t), e !== null && (mu(e, t), Ka(e));
    }
    function or(e) {
      var t = e.memoizedState, a = 0;
      t !== null && (a = t.retryLane), wy(e, a);
    }
    function Si(e, t) {
      var a = 0;
      switch (e.tag) {
        case 13:
          var i = e.stateNode, o = e.memoizedState;
          o !== null && (a = o.retryLane);
          break;
        case 19:
          i = e.stateNode;
          break;
        case 22:
          i = e.stateNode._retryCache;
          break;
        default:
          throw Error(
            "Pinged unknown suspense boundary type. This is probably a bug in React."
          );
      }
      i !== null && i.delete(t), wy(e, a);
    }
    function sd(e, t, a) {
      if ((t.subtreeFlags & 67117056) !== 0)
        for (t = t.child; t !== null; ) {
          var i = e, o = t, f = o.type === qo;
          f = a || f, o.tag !== 22 ? o.flags & 67108864 ? f && he(
            o,
            By,
            i,
            o,
            (o.mode & K0) === Bt
          ) : sd(
            i,
            o,
            f
          ) : o.memoizedState === null && (f && o.flags & 8192 ? he(
            o,
            By,
            i,
            o
          ) : o.subtreeFlags & 67108864 && he(
            o,
            sd,
            i,
            o,
            f
          )), t = t.sibling;
        }
    }
    function By(e, t) {
      var a = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : !0;
      oe(!0);
      try {
        Oa(t), a && nr(t), _u(e, t.alternate, t, !1), a && ed(e, t, 0, null, !1, 0);
      } finally {
        oe(!1);
      }
    }
    function Do(e) {
      var t = !0;
      e.current.mode & (va | Xu) || (t = !1), sd(
        e,
        e.current,
        t
      );
    }
    function vn(e) {
      if ((St & xa) === Sn) {
        var t = e.tag;
        if (t === 3 || t === 1 || t === 0 || t === 11 || t === 14 || t === 15) {
          if (t = de(e) || "ReactComponent", Xv !== null) {
            if (Xv.has(t)) return;
            Xv.add(t);
          } else Xv = /* @__PURE__ */ new Set([t]);
          he(e, function() {
            console.error(
              "Can't perform a React state update on a component that hasn't mounted yet. This indicates that you have a side-effect in your render function that asynchronously later calls tries to update the component. Move this work to useEffect instead."
            );
          });
        }
      }
    }
    function zo(e, t) {
      $t && e.memoizedUpdaters.forEach(function(a) {
        wa(e, a, t);
      });
    }
    function qy(e, t) {
      var a = j.actQueue;
      return a !== null ? (a.push(t), QS) : Hd(e, t);
    }
    function Pp(e) {
      Uy() && j.actQueue === null && he(e, function() {
        console.error(
          `An update to %s inside a test was not wrapped in act(...).

When testing, code that causes React state updates should be wrapped into act(...):

act(() => {
  /* fire events that update state */
});
/* assert on the output */

This ensures that you're testing the behavior the user would see in the browser. Learn more at https://react.dev/link/wrap-tests-with-act`,
          de(e)
        );
      });
    }
    function Ka(e) {
      e !== gh && e.next === null && (gh === null ? Qv = gh = e : gh = gh.next = e), Zv = !0, j.actQueue !== null ? g0 || (g0 = !0, rl()) : v0 || (v0 = !0, rl());
    }
    function Sc(e, t) {
      if (!b0 && Zv) {
        b0 = !0;
        do
          for (var a = !1, i = Qv; i !== null; ) {
            if (e !== 0) {
              var o = i.pendingLanes;
              if (o === 0) var f = 0;
              else {
                var d = i.suspendedLanes, h = i.pingedLanes;
                f = (1 << 31 - Ll(42 | e) + 1) - 1, f &= o & ~(d & ~h), f = f & 201326741 ? f & 201326741 | 1 : f ? f | 2 : 0;
              }
              f !== 0 && (a = !0, yd(i, f));
            } else
              f = lt, f = hl(
                i,
                i === Ct ? f : 0,
                i.cancelPendingCommit !== null || i.timeoutHandle !== kr
              ), (f & 3) === 0 || ku(i, f) || (a = !0, yd(i, f));
            i = i.next;
          }
        while (a);
        b0 = !1;
      }
    }
    function dd() {
      hd();
    }
    function hd() {
      Zv = g0 = v0 = !1;
      var e = 0;
      Kr !== 0 && (Mo() && (e = Kr), Kr = 0);
      for (var t = tu(), a = null, i = Qv; i !== null; ) {
        var o = i.next, f = Jn(i, t);
        f === 0 ? (i.next = null, a === null ? Qv = o : a.next = o, o === null && (gh = a)) : (a = i, (e !== 0 || (f & 3) !== 0) && (Zv = !0)), i = o;
      }
      Sc(e);
    }
    function Jn(e, t) {
      for (var a = e.suspendedLanes, i = e.pingedLanes, o = e.expirationTimes, f = e.pendingLanes & -62914561; 0 < f; ) {
        var d = 31 - Ll(f), h = 1 << d, v = o[d];
        v === -1 ? ((h & a) === 0 || (h & i) !== 0) && (o[d] = Fr(h, t)) : v <= t && (e.expiredLanes |= h), f &= ~h;
      }
      if (t = Ct, a = lt, a = hl(
        e,
        e === t ? a : 0,
        e.cancelPendingCommit !== null || e.timeoutHandle !== kr
      ), i = e.callbackNode, a === 0 || e === t && (At === Lr || At === Vr) || e.cancelPendingCommit !== null)
        return i !== null && md(i), e.callbackNode = null, e.callbackPriority = 0;
      if ((a & 3) === 0 || ku(e, a)) {
        if (t = a & -a, t !== e.callbackPriority || j.actQueue !== null && i !== S0)
          md(i);
        else return t;
        switch (Jc(a)) {
          case xl:
          case bn:
            a = Ar;
            break;
          case Gu:
            a = Vo;
            break;
          case qd:
            a = Rr;
            break;
          default:
            a = Vo;
        }
        return i = Zt.bind(null, e), j.actQueue !== null ? (j.actQueue.push(i), a = S0) : a = Hd(a, i), e.callbackPriority = t, e.callbackNode = a, t;
      }
      return i !== null && md(i), e.callbackPriority = 2, e.callbackNode = null, 2;
    }
    function Zt(e, t) {
      if (_v = Uv = !1, ea !== Qr && ea !== d0)
        return e.callbackNode = null, e.callbackPriority = 0, null;
      var a = e.callbackNode;
      if (Ro() && e.callbackNode !== a)
        return null;
      var i = lt;
      return i = hl(
        e,
        e === Ct ? i : 0,
        e.cancelPendingCommit !== null || e.timeoutHandle !== kr
      ), i === 0 ? null : (fl(
        e,
        i,
        t
      ), Jn(e, tu()), e.callbackNode != null && e.callbackNode === a ? Zt.bind(null, e) : null);
    }
    function yd(e, t) {
      if (Ro()) return null;
      Uv = _v, _v = !1, fl(e, t, !0);
    }
    function md(e) {
      e !== S0 && e !== null && zg(e);
    }
    function rl() {
      j.actQueue !== null && j.actQueue.push(function() {
        return hd(), null;
      }), eT(function() {
        (St & (xa | Ju)) !== Sn ? Hd(
          xd,
          dd
        ) : hd();
      });
    }
    function Yy() {
      return Kr === 0 && (Kr = Qe()), Kr;
    }
    function jy(e) {
      return e == null || typeof e == "symbol" || typeof e == "boolean" ? null : typeof e == "function" ? e : (Z(e, "action"), eo("" + e));
    }
    function Gy(e, t) {
      var a = t.ownerDocument.createElement("input");
      return a.name = t.name, a.value = t.value, e.id && a.setAttribute("form", e.id), t.parentNode.insertBefore(a, t), e = new FormData(e), a.parentNode.removeChild(a), e;
    }
    function Nt(e, t, a, i, o) {
      if (t === "submit" && a && a.stateNode === o) {
        var f = jy(
          (o[ma] || null).action
        ), d = i.submitter;
        d && (t = (t = d[ma] || null) ? jy(t.formAction) : d.getAttribute("formAction"), t !== null && (f = t, d = null));
        var h = new Ee(
          "action",
          "action",
          null,
          i,
          o
        );
        e.push({
          event: h,
          listeners: [
            {
              instance: null,
              listener: function() {
                if (i.defaultPrevented) {
                  if (Kr !== 0) {
                    var v = d ? Gy(
                      o,
                      d
                    ) : new FormData(o), b = {
                      pending: !0,
                      data: v,
                      method: o.method,
                      action: f
                    };
                    Object.freeze(b), cc(
                      a,
                      b,
                      null,
                      v
                    );
                  }
                } else
                  typeof f == "function" && (h.preventDefault(), v = d ? Gy(
                    o,
                    d
                  ) : new FormData(o), b = {
                    pending: !0,
                    data: v,
                    method: o.method,
                    action: f
                  }, Object.freeze(b), cc(
                    a,
                    b,
                    f,
                    v
                  ));
              },
              currentTarget: o
            }
          ]
        });
      }
    }
    function Ml(e, t, a) {
      e.currentTarget = a;
      try {
        t(e);
      } catch (i) {
        t0(i);
      }
      e.currentTarget = null;
    }
    function kn(e, t) {
      t = (t & 4) !== 0;
      for (var a = 0; a < e.length; a++) {
        var i = e[a];
        e: {
          var o = void 0, f = i.event;
          if (i = i.listeners, t)
            for (var d = i.length - 1; 0 <= d; d--) {
              var h = i[d], v = h.instance, b = h.currentTarget;
              if (h = h.listener, v !== o && f.isPropagationStopped())
                break e;
              v !== null ? he(
                v,
                Ml,
                f,
                h,
                b
              ) : Ml(f, h, b), o = v;
            }
          else
            for (d = 0; d < i.length; d++) {
              if (h = i[d], v = h.instance, b = h.currentTarget, h = h.listener, v !== o && f.isPropagationStopped())
                break e;
              v !== null ? he(
                v,
                Ml,
                f,
                h,
                b
              ) : Ml(f, h, b), o = v;
            }
        }
      }
    }
    function Fe(e, t) {
      T0.has(e) || console.error(
        'Did not expect a listenToNonDelegatedEvent() call for "%s". This is a bug in React. Please file an issue.',
        e
      );
      var a = t[hm];
      a === void 0 && (a = t[hm] = /* @__PURE__ */ new Set());
      var i = e + "__bubble";
      a.has(i) || (vd(t, e, 2, !1), a.add(i));
    }
    function pd(e, t, a) {
      T0.has(e) && !t && console.error(
        'Did not expect a listenToNativeEvent() call for "%s" in the bubble phase. This is a bug in React. Please file an issue.',
        e
      );
      var i = 0;
      t && (i |= 4), vd(
        a,
        e,
        i,
        t
      );
    }
    function Ly(e) {
      if (!e[Kv]) {
        e[Kv] = !0, mv.forEach(function(a) {
          a !== "selectionchange" && (T0.has(a) || pd(a, !1, e), pd(a, !0, e));
        });
        var t = e.nodeType === 9 ? e : e.ownerDocument;
        t === null || t[Kv] || (t[Kv] = !0, pd("selectionchange", !1, t));
      }
    }
    function vd(e, t, a, i) {
      switch (Md(t)) {
        case xl:
          var o = Rg;
          break;
        case bn:
          o = zd;
          break;
        default:
          o = Ri;
      }
      a = o.bind(
        null,
        t,
        a,
        e
      ), o = void 0, !C || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (o = !0), i ? o !== void 0 ? e.addEventListener(t, a, {
        capture: !0,
        passive: o
      }) : e.addEventListener(t, a, !0) : o !== void 0 ? e.addEventListener(t, a, {
        passive: o
      }) : e.addEventListener(
        t,
        a,
        !1
      );
    }
    function kl(e, t, a, i, o) {
      var f = i;
      if ((t & 1) === 0 && (t & 2) === 0 && i !== null)
        e: for (; ; ) {
          if (i === null) return;
          var d = i.tag;
          if (d === 3 || d === 4) {
            var h = i.stateNode.containerInfo;
            if (h === o) break;
            if (d === 4)
              for (d = i.return; d !== null; ) {
                var v = d.tag;
                if ((v === 3 || v === 4) && d.stateNode.containerInfo === o)
                  return;
                d = d.return;
              }
            for (; h !== null; ) {
              if (d = la(h), d === null) return;
              if (v = d.tag, v === 5 || v === 6 || v === 26 || v === 27) {
                i = f = d;
                continue e;
              }
              h = h.parentNode;
            }
          }
          i = i.return;
        }
      os(function() {
        var b = f, B = Ji(a), L = [];
        e: {
          var x = Z0.get(e);
          if (x !== void 0) {
            var V = Ee, ye = e;
            switch (e) {
              case "keypress":
                if (to(a) === 0) break e;
              case "keydown":
              case "keyup":
                V = cS;
                break;
              case "focusin":
                ye = "focus", V = it;
                break;
              case "focusout":
                ye = "blur", V = it;
                break;
              case "beforeblur":
              case "afterblur":
                V = it;
                break;
              case "click":
                if (a.button === 2) break e;
              case "auxclick":
              case "dblclick":
              case "mousedown":
              case "mousemove":
              case "mouseup":
              case "mouseout":
              case "mouseover":
              case "contextmenu":
                V = Je;
                break;
              case "drag":
              case "dragend":
              case "dragenter":
              case "dragexit":
              case "dragleave":
              case "dragover":
              case "dragstart":
              case "drop":
                V = Oe;
                break;
              case "touchcancel":
              case "touchend":
              case "touchmove":
              case "touchstart":
                V = rS;
                break;
              case L0:
              case V0:
              case X0:
                V = Hg;
                break;
              case Q0:
                V = dS;
                break;
              case "scroll":
              case "scrollend":
                V = M;
                break;
              case "wheel":
                V = yS;
                break;
              case "copy":
              case "cut":
              case "paste":
                V = eS;
                break;
              case "gotpointercapture":
              case "lostpointercapture":
              case "pointercancel":
              case "pointerdown":
              case "pointermove":
              case "pointerout":
              case "pointerover":
              case "pointerup":
                V = x0;
                break;
              case "toggle":
              case "beforetoggle":
                V = pS;
            }
            var Ue = (t & 4) !== 0, Ht = !Ue && (e === "scroll" || e === "scrollend"), ut = Ue ? x !== null ? x + "Capture" : null : x;
            Ue = [];
            for (var T = b, E; T !== null; ) {
              var A = T;
              if (E = A.stateNode, A = A.tag, A !== 5 && A !== 26 && A !== 27 || E === null || ut === null || (A = gu(T, ut), A != null && Ue.push(
                $l(
                  T,
                  A,
                  E
                )
              )), Ht) break;
              T = T.return;
            }
            0 < Ue.length && (x = new V(
              x,
              ye,
              null,
              a,
              B
            ), L.push({
              event: x,
              listeners: Ue
            }));
          }
        }
        if ((t & 7) === 0) {
          e: {
            if (x = e === "mouseover" || e === "pointerover", V = e === "mouseout" || e === "pointerout", x && a !== r && (ye = a.relatedTarget || a.fromElement) && (la(ye) || ye[Ci]))
              break e;
            if ((V || x) && (x = B.window === B ? B : (x = B.ownerDocument) ? x.defaultView || x.parentWindow : window, V ? (ye = a.relatedTarget || a.toElement, V = b, ye = ye ? la(ye) : null, ye !== null && (Ht = Xe(ye), Ue = ye.tag, ye !== Ht || Ue !== 5 && Ue !== 27 && Ue !== 6) && (ye = null)) : (V = null, ye = b), V !== ye)) {
              if (Ue = Je, A = "onMouseLeave", ut = "onMouseEnter", T = "mouse", (e === "pointerout" || e === "pointerover") && (Ue = x0, A = "onPointerLeave", ut = "onPointerEnter", T = "pointer"), Ht = V == null ? x : ln(V), E = ye == null ? x : ln(ye), x = new Ue(
                A,
                T + "leave",
                V,
                a,
                B
              ), x.target = Ht, x.relatedTarget = E, A = null, la(B) === b && (Ue = new Ue(
                ut,
                T + "enter",
                ye,
                a,
                B
              ), Ue.target = E, Ue.relatedTarget = Ht, A = Ue), Ht = A, V && ye)
                t: {
                  for (Ue = V, ut = ye, T = 0, E = Ue; E; E = gl(E))
                    T++;
                  for (E = 0, A = ut; A; A = gl(A))
                    E++;
                  for (; 0 < T - E; )
                    Ue = gl(Ue), T--;
                  for (; 0 < E - T; )
                    ut = gl(ut), E--;
                  for (; T--; ) {
                    if (Ue === ut || ut !== null && Ue === ut.alternate)
                      break t;
                    Ue = gl(Ue), ut = gl(ut);
                  }
                  Ue = null;
                }
              else Ue = null;
              V !== null && Vy(
                L,
                x,
                V,
                Ue,
                !1
              ), ye !== null && Ht !== null && Vy(
                L,
                Ht,
                ye,
                Ue,
                !0
              );
            }
          }
          e: {
            if (x = b ? ln(b) : window, V = x.nodeName && x.nodeName.toLowerCase(), V === "select" || V === "input" && x.type === "file")
              var X = Ch;
            else if (Ap(x))
              if (j0)
                X = vg;
              else {
                X = Hh;
                var ae = mg;
              }
            else
              V = x.nodeName, !V || V.toLowerCase() !== "input" || x.type !== "checkbox" && x.type !== "radio" ? b && Ki(b.elementType) && (X = Ch) : X = pg;
            if (X && (X = X(e, b))) {
              ds(
                L,
                X,
                a,
                B
              );
              break e;
            }
            ae && ae(e, x, b), e === "focusout" && b && x.type === "number" && b.memoizedProps.value != null && ls(x, "number", x.value);
          }
          switch (ae = b ? ln(b) : window, e) {
            case "focusin":
              (Ap(ae) || ae.contentEditable === "true") && (Jd = ae, Ng = b, xm = null);
              break;
            case "focusout":
              xm = Ng = Jd = null;
              break;
            case "mousedown":
              wg = !0;
              break;
            case "contextmenu":
            case "mouseup":
            case "dragend":
              wg = !1, Up(
                L,
                a,
                B
              );
              break;
            case "selectionchange":
              if (SS) break;
            case "keydown":
            case "keyup":
              Up(
                L,
                a,
                B
              );
          }
          var je;
          if (xg)
            e: {
              switch (e) {
                case "compositionstart":
                  var me = "onCompositionStart";
                  break e;
                case "compositionend":
                  me = "onCompositionEnd";
                  break e;
                case "compositionupdate":
                  me = "onCompositionUpdate";
                  break e;
              }
              me = void 0;
            }
          else
            Kd ? Jl(e, a) && (me = "onCompositionEnd") : e === "keydown" && a.keyCode === N0 && (me = "onCompositionStart");
          me && (w0 && a.locale !== "ko" && (Kd || me !== "onCompositionStart" ? me === "onCompositionEnd" && Kd && (je = bu()) : ($ = B, N = "value" in $ ? $.value : $.textContent, Kd = !0)), ae = fr(
            b,
            me
          ), 0 < ae.length && (me = new H0(
            me,
            e,
            null,
            a,
            B
          ), L.push({
            event: me,
            listeners: ae
          }), je ? me.data = je : (je = ei(a), je !== null && (me.data = je)))), (je = gS ? ss(e, a) : Ef(e, a)) && (me = fr(
            b,
            "onBeforeInput"
          ), 0 < me.length && (ae = new lS(
            "onBeforeInput",
            "beforeinput",
            null,
            a,
            B
          ), L.push({
            event: ae,
            listeners: me
          }), ae.data = je)), Nt(
            L,
            e,
            b,
            a,
            B
          );
        }
        kn(L, t);
      });
    }
    function $l(e, t, a) {
      return {
        instance: e,
        listener: t,
        currentTarget: a
      };
    }
    function fr(e, t) {
      for (var a = t + "Capture", i = []; e !== null; ) {
        var o = e, f = o.stateNode;
        if (o = o.tag, o !== 5 && o !== 26 && o !== 27 || f === null || (o = gu(e, a), o != null && i.unshift(
          $l(e, o, f)
        ), o = gu(e, t), o != null && i.push(
          $l(e, o, f)
        )), e.tag === 3) return i;
        e = e.return;
      }
      return [];
    }
    function gl(e) {
      if (e === null) return null;
      do
        e = e.return;
      while (e && e.tag !== 5 && e.tag !== 27);
      return e || null;
    }
    function Vy(e, t, a, i, o) {
      for (var f = t._reactName, d = []; a !== null && a !== i; ) {
        var h = a, v = h.alternate, b = h.stateNode;
        if (h = h.tag, v !== null && v === i) break;
        h !== 5 && h !== 26 && h !== 27 || b === null || (v = b, o ? (b = gu(a, f), b != null && d.unshift(
          $l(a, b, v)
        )) : o || (b = gu(a, f), b != null && d.push(
          $l(a, b, v)
        ))), a = a.return;
      }
      d.length !== 0 && e.push({ event: t, listeners: d });
    }
    function $n(e, t) {
      Pc(e, t), e !== "input" && e !== "textarea" && e !== "select" || t == null || t.value !== null || Um || (Um = !0, e === "select" && t.multiple ? console.error(
        "`value` prop on `%s` should not be null. Consider using an empty array when `multiple` is set to `true` to clear the component or `undefined` for uncontrolled components.",
        e
      ) : console.error(
        "`value` prop on `%s` should not be null. Consider using an empty string to clear the component or `undefined` for uncontrolled components.",
        e
      ));
      var a = {
        registrationNameDependencies: Fa,
        possibleRegistrationNames: Uc
      };
      Ki(e) || typeof t.is == "string" || Mh(e, t, a), t.contentEditable && !t.suppressContentEditableWarning && t.children != null && console.error(
        "A component is `contentEditable` and contains `children` managed by React. It is now your responsibility to guarantee that none of those nodes are unexpectedly modified or duplicated. This is probably not intentional."
      );
    }
    function wt(e, t, a, i) {
      t !== a && (a = Ul(a), Ul(t) !== a && (i[e] = t));
    }
    function Ti(e, t, a) {
      t.forEach(function(i) {
        a[Qy(i)] = i === "style" ? Ec(e) : e.getAttribute(i);
      });
    }
    function Ja(e, t) {
      t === !1 ? console.error(
        "Expected `%s` listener to be a function, instead got `false`.\n\nIf you used to conditionally omit it with %s={condition && value}, pass %s={condition ? value : undefined} instead.",
        e,
        e,
        e
      ) : console.error(
        "Expected `%s` listener to be a function, instead got a value of `%s` type.",
        e,
        typeof t
      );
    }
    function gd(e, t) {
      return e = e.namespaceURI === Cr || e.namespaceURI === $o ? e.ownerDocument.createElementNS(
        e.namespaceURI,
        e.tagName
      ) : e.ownerDocument.createElement(e.tagName), e.innerHTML = t, e.innerHTML;
    }
    function Ul(e) {
      return g(e) && (console.error(
        "The provided HTML markup uses a value of unsupported type %s. This value must be coerced to a string before using it here.",
        ge(e)
      ), w(e)), (typeof e == "string" ? e : "" + e).replace(ZS, `
`).replace(KS, "");
    }
    function Xy(e, t) {
      return t = Ul(t), Ul(e) === t;
    }
    function Hu() {
    }
    function dt(e, t, a, i, o, f) {
      switch (a) {
        case "children":
          typeof i == "string" ? (Sf(i, t, !1), t === "body" || t === "textarea" && i === "" || Zi(e, i)) : (typeof i == "number" || typeof i == "bigint") && (Sf("" + i, t, !1), t !== "body" && Zi(e, "" + i));
          break;
        case "className":
          we(e, "class", i);
          break;
        case "tabIndex":
          we(e, "tabindex", i);
          break;
        case "dir":
        case "role":
        case "viewBox":
        case "width":
        case "height":
          we(e, a, i);
          break;
        case "style":
          Tf(e, i, f);
          break;
        case "data":
          if (t !== "object") {
            we(e, "data", i);
            break;
          }
        case "src":
        case "href":
          if (i === "" && (t !== "a" || a !== "href")) {
            console.error(
              a === "src" ? 'An empty string ("") was passed to the %s attribute. This may cause the browser to download the whole page again over the network. To fix this, either do not render the element at all or pass null to %s instead of an empty string.' : 'An empty string ("") was passed to the %s attribute. To fix this, either do not render the element at all or pass null to %s instead of an empty string.',
              a,
              a
            ), e.removeAttribute(a);
            break;
          }
          if (i == null || typeof i == "function" || typeof i == "symbol" || typeof i == "boolean") {
            e.removeAttribute(a);
            break;
          }
          Z(i, a), i = eo("" + i), e.setAttribute(a, i);
          break;
        case "action":
        case "formAction":
          if (i != null && (t === "form" ? a === "formAction" ? console.error(
            "You can only pass the formAction prop to <input> or <button>. Use the action prop on <form>."
          ) : typeof i == "function" && (o.encType == null && o.method == null || $v || ($v = !0, console.error(
            "Cannot specify a encType or method for a form that specifies a function as the action. React provides those automatically. They will get overridden."
          )), o.target == null || kv || (kv = !0, console.error(
            "Cannot specify a target for a form that specifies a function as the action. The function will always be executed in the same window."
          ))) : t === "input" || t === "button" ? a === "action" ? console.error(
            "You can only pass the action prop to <form>. Use the formAction prop on <input> or <button>."
          ) : t !== "input" || o.type === "submit" || o.type === "image" || Jv ? t !== "button" || o.type == null || o.type === "submit" || Jv ? typeof i == "function" && (o.name == null || ib || (ib = !0, console.error(
            'Cannot specify a "name" prop for a button that specifies a function as a formAction. React needs it to encode which action should be invoked. It will get overridden.'
          )), o.formEncType == null && o.formMethod == null || $v || ($v = !0, console.error(
            "Cannot specify a formEncType or formMethod for a button that specifies a function as a formAction. React provides those automatically. They will get overridden."
          )), o.formTarget == null || kv || (kv = !0, console.error(
            "Cannot specify a formTarget for a button that specifies a function as a formAction. The function will always be executed in the same window."
          ))) : (Jv = !0, console.error(
            'A button can only specify a formAction along with type="submit" or no type.'
          )) : (Jv = !0, console.error(
            'An input can only specify a formAction along with type="submit" or type="image".'
          )) : console.error(
            a === "action" ? "You can only pass the action prop to <form>." : "You can only pass the formAction prop to <input> or <button>."
          )), typeof i == "function") {
            e.setAttribute(
              a,
              "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')"
            );
            break;
          } else
            typeof f == "function" && (a === "formAction" ? (t !== "input" && dt(e, t, "name", o.name, o, null), dt(
              e,
              t,
              "formEncType",
              o.formEncType,
              o,
              null
            ), dt(
              e,
              t,
              "formMethod",
              o.formMethod,
              o,
              null
            ), dt(
              e,
              t,
              "formTarget",
              o.formTarget,
              o,
              null
            )) : (dt(
              e,
              t,
              "encType",
              o.encType,
              o,
              null
            ), dt(e, t, "method", o.method, o, null), dt(
              e,
              t,
              "target",
              o.target,
              o,
              null
            )));
          if (i == null || typeof i == "symbol" || typeof i == "boolean") {
            e.removeAttribute(a);
            break;
          }
          Z(i, a), i = eo("" + i), e.setAttribute(a, i);
          break;
        case "onClick":
          i != null && (typeof i != "function" && Ja(a, i), e.onclick = Hu);
          break;
        case "onScroll":
          i != null && (typeof i != "function" && Ja(a, i), Fe("scroll", e));
          break;
        case "onScrollEnd":
          i != null && (typeof i != "function" && Ja(a, i), Fe("scrollend", e));
          break;
        case "dangerouslySetInnerHTML":
          if (i != null) {
            if (typeof i != "object" || !("__html" in i))
              throw Error(
                "`props.dangerouslySetInnerHTML` must be in the form `{__html: ...}`. Please visit https://react.dev/link/dangerously-set-inner-html for more information."
              );
            if (a = i.__html, a != null) {
              if (o.children != null)
                throw Error(
                  "Can only set one of `children` or `props.dangerouslySetInnerHTML`."
                );
              e.innerHTML = a;
            }
          }
          break;
        case "multiple":
          e.multiple = i && typeof i != "function" && typeof i != "symbol";
          break;
        case "muted":
          e.muted = i && typeof i != "function" && typeof i != "symbol";
          break;
        case "suppressContentEditableWarning":
        case "suppressHydrationWarning":
        case "defaultValue":
        case "defaultChecked":
        case "innerHTML":
        case "ref":
          break;
        case "autoFocus":
          break;
        case "xlinkHref":
          if (i == null || typeof i == "function" || typeof i == "boolean" || typeof i == "symbol") {
            e.removeAttribute("xlink:href");
            break;
          }
          Z(i, a), a = eo("" + i), e.setAttributeNS(Jr, "xlink:href", a);
          break;
        case "contentEditable":
        case "spellCheck":
        case "draggable":
        case "value":
        case "autoReverse":
        case "externalResourcesRequired":
        case "focusable":
        case "preserveAlpha":
          i != null && typeof i != "function" && typeof i != "symbol" ? (Z(i, a), e.setAttribute(a, "" + i)) : e.removeAttribute(a);
          break;
        case "inert":
          i !== "" || Wv[a] || (Wv[a] = !0, console.error(
            "Received an empty string for a boolean attribute `%s`. This will treat the attribute as if it were false. Either pass `false` to silence this warning, or pass `true` if you used an empty string in earlier versions of React to indicate this attribute is true.",
            a
          ));
        case "allowFullScreen":
        case "async":
        case "autoPlay":
        case "controls":
        case "default":
        case "defer":
        case "disabled":
        case "disablePictureInPicture":
        case "disableRemotePlayback":
        case "formNoValidate":
        case "hidden":
        case "loop":
        case "noModule":
        case "noValidate":
        case "open":
        case "playsInline":
        case "readOnly":
        case "required":
        case "reversed":
        case "scoped":
        case "seamless":
        case "itemScope":
          i && typeof i != "function" && typeof i != "symbol" ? e.setAttribute(a, "") : e.removeAttribute(a);
          break;
        case "capture":
        case "download":
          i === !0 ? e.setAttribute(a, "") : i !== !1 && i != null && typeof i != "function" && typeof i != "symbol" ? (Z(i, a), e.setAttribute(a, i)) : e.removeAttribute(a);
          break;
        case "cols":
        case "rows":
        case "size":
        case "span":
          i != null && typeof i != "function" && typeof i != "symbol" && !isNaN(i) && 1 <= i ? (Z(i, a), e.setAttribute(a, i)) : e.removeAttribute(a);
          break;
        case "rowSpan":
        case "start":
          i == null || typeof i == "function" || typeof i == "symbol" || isNaN(i) ? e.removeAttribute(a) : (Z(i, a), e.setAttribute(a, i));
          break;
        case "popover":
          Fe("beforetoggle", e), Fe("toggle", e), at(e, "popover", i);
          break;
        case "xlinkActuate":
          el(
            e,
            Jr,
            "xlink:actuate",
            i
          );
          break;
        case "xlinkArcrole":
          el(
            e,
            Jr,
            "xlink:arcrole",
            i
          );
          break;
        case "xlinkRole":
          el(
            e,
            Jr,
            "xlink:role",
            i
          );
          break;
        case "xlinkShow":
          el(
            e,
            Jr,
            "xlink:show",
            i
          );
          break;
        case "xlinkTitle":
          el(
            e,
            Jr,
            "xlink:title",
            i
          );
          break;
        case "xlinkType":
          el(
            e,
            Jr,
            "xlink:type",
            i
          );
          break;
        case "xmlBase":
          el(
            e,
            E0,
            "xml:base",
            i
          );
          break;
        case "xmlLang":
          el(
            e,
            E0,
            "xml:lang",
            i
          );
          break;
        case "xmlSpace":
          el(
            e,
            E0,
            "xml:space",
            i
          );
          break;
        case "is":
          f != null && console.error(
            'Cannot update the "is" prop after it has been initialized.'
          ), at(e, "is", i);
          break;
        case "innerText":
        case "textContent":
          break;
        case "popoverTarget":
          cb || i == null || typeof i != "object" || (cb = !0, console.error(
            "The `popoverTarget` prop expects the ID of an Element as a string. Received %s instead.",
            i
          ));
        default:
          !(2 < a.length) || a[0] !== "o" && a[0] !== "O" || a[1] !== "n" && a[1] !== "N" ? (a = cs(a), at(e, a, i)) : Fa.hasOwnProperty(a) && i != null && typeof i != "function" && Ja(a, i);
      }
    }
    function Tc(e, t, a, i, o, f) {
      switch (a) {
        case "style":
          Tf(e, i, f);
          break;
        case "dangerouslySetInnerHTML":
          if (i != null) {
            if (typeof i != "object" || !("__html" in i))
              throw Error(
                "`props.dangerouslySetInnerHTML` must be in the form `{__html: ...}`. Please visit https://react.dev/link/dangerously-set-inner-html for more information."
              );
            if (a = i.__html, a != null) {
              if (o.children != null)
                throw Error(
                  "Can only set one of `children` or `props.dangerouslySetInnerHTML`."
                );
              e.innerHTML = a;
            }
          }
          break;
        case "children":
          typeof i == "string" ? Zi(e, i) : (typeof i == "number" || typeof i == "bigint") && Zi(e, "" + i);
          break;
        case "onScroll":
          i != null && (typeof i != "function" && Ja(a, i), Fe("scroll", e));
          break;
        case "onScrollEnd":
          i != null && (typeof i != "function" && Ja(a, i), Fe("scrollend", e));
          break;
        case "onClick":
          i != null && (typeof i != "function" && Ja(a, i), e.onclick = Hu);
          break;
        case "suppressContentEditableWarning":
        case "suppressHydrationWarning":
        case "innerHTML":
        case "ref":
          break;
        case "innerText":
        case "textContent":
          break;
        default:
          if (Fa.hasOwnProperty(a))
            i != null && typeof i != "function" && Ja(a, i);
          else
            e: {
              if (a[0] === "o" && a[1] === "n" && (o = a.endsWith("Capture"), t = a.slice(2, o ? a.length - 7 : void 0), f = e[ma] || null, f = f != null ? f[a] : null, typeof f == "function" && e.removeEventListener(t, f, o), typeof i == "function")) {
                typeof f != "function" && f !== null && (a in e ? e[a] = null : e.hasAttribute(a) && e.removeAttribute(a)), e.addEventListener(t, i, o);
                break e;
              }
              a in e ? e[a] = i : i === !0 ? e.setAttribute(a, "") : at(e, a, i);
            }
      }
    }
    function Kt(e, t, a) {
      switch ($n(t, a), t) {
        case "div":
        case "span":
        case "svg":
        case "path":
        case "a":
        case "g":
        case "p":
        case "li":
          break;
        case "img":
          Fe("error", e), Fe("load", e);
          var i = !1, o = !1, f;
          for (f in a)
            if (a.hasOwnProperty(f)) {
              var d = a[f];
              if (d != null)
                switch (f) {
                  case "src":
                    i = !0;
                    break;
                  case "srcSet":
                    o = !0;
                    break;
                  case "children":
                  case "dangerouslySetInnerHTML":
                    throw Error(
                      t + " is a void element tag and must neither have `children` nor use `dangerouslySetInnerHTML`."
                    );
                  default:
                    dt(e, t, f, d, a, null);
                }
            }
          o && dt(e, t, "srcSet", a.srcSet, a, null), i && dt(e, t, "src", a.src, a, null);
          return;
        case "input":
          pe("input", a), Fe("invalid", e);
          var h = f = d = o = null, v = null, b = null;
          for (i in a)
            if (a.hasOwnProperty(i)) {
              var B = a[i];
              if (B != null)
                switch (i) {
                  case "name":
                    o = B;
                    break;
                  case "type":
                    d = B;
                    break;
                  case "checked":
                    v = B;
                    break;
                  case "defaultChecked":
                    b = B;
                    break;
                  case "value":
                    f = B;
                    break;
                  case "defaultValue":
                    h = B;
                    break;
                  case "children":
                  case "dangerouslySetInnerHTML":
                    if (B != null)
                      throw Error(
                        t + " is a void element tag and must neither have `children` nor use `dangerouslySetInnerHTML`."
                      );
                    break;
                  default:
                    dt(e, t, i, B, a, null);
                }
            }
          Wu(e, a), gp(
            e,
            f,
            h,
            v,
            b,
            d,
            o,
            !1
          ), pu(e);
          return;
        case "select":
          pe("select", a), Fe("invalid", e), i = d = f = null;
          for (o in a)
            if (a.hasOwnProperty(o) && (h = a[o], h != null))
              switch (o) {
                case "value":
                  f = h;
                  break;
                case "defaultValue":
                  d = h;
                  break;
                case "multiple":
                  i = h;
                default:
                  dt(
                    e,
                    t,
                    o,
                    h,
                    a,
                    null
                  );
              }
          vf(e, a), t = f, a = d, e.multiple = !!i, t != null ? vu(e, !!i, t, !1) : a != null && vu(e, !!i, a, !0);
          return;
        case "textarea":
          pe("textarea", a), Fe("invalid", e), f = o = i = null;
          for (d in a)
            if (a.hasOwnProperty(d) && (h = a[d], h != null))
              switch (d) {
                case "value":
                  i = h;
                  break;
                case "defaultValue":
                  o = h;
                  break;
                case "children":
                  f = h;
                  break;
                case "dangerouslySetInnerHTML":
                  if (h != null)
                    throw Error(
                      "`dangerouslySetInnerHTML` does not make sense on <textarea>."
                    );
                  break;
                default:
                  dt(
                    e,
                    t,
                    d,
                    h,
                    a,
                    null
                  );
              }
          Dn(e, a), Ah(e, i, o, f), pu(e);
          return;
        case "option":
          Eh(e, a);
          for (v in a)
            if (a.hasOwnProperty(v) && (i = a[v], i != null))
              switch (v) {
                case "selected":
                  e.selected = i && typeof i != "function" && typeof i != "symbol";
                  break;
                default:
                  dt(e, t, v, i, a, null);
              }
          return;
        case "dialog":
          Fe("beforetoggle", e), Fe("toggle", e), Fe("cancel", e), Fe("close", e);
          break;
        case "iframe":
        case "object":
          Fe("load", e);
          break;
        case "video":
        case "audio":
          for (i = 0; i < ap.length; i++)
            Fe(ap[i], e);
          break;
        case "image":
          Fe("error", e), Fe("load", e);
          break;
        case "details":
          Fe("toggle", e);
          break;
        case "embed":
        case "source":
        case "link":
          Fe("error", e), Fe("load", e);
        case "area":
        case "base":
        case "br":
        case "col":
        case "hr":
        case "keygen":
        case "meta":
        case "param":
        case "track":
        case "wbr":
        case "menuitem":
          for (b in a)
            if (a.hasOwnProperty(b) && (i = a[b], i != null))
              switch (b) {
                case "children":
                case "dangerouslySetInnerHTML":
                  throw Error(
                    t + " is a void element tag and must neither have `children` nor use `dangerouslySetInnerHTML`."
                  );
                default:
                  dt(e, t, b, i, a, null);
              }
          return;
        default:
          if (Ki(t)) {
            for (B in a)
              a.hasOwnProperty(B) && (i = a[B], i !== void 0 && Tc(
                e,
                t,
                B,
                i,
                a,
                void 0
              ));
            return;
          }
      }
      for (h in a)
        a.hasOwnProperty(h) && (i = a[h], i != null && dt(e, t, h, i, a, null));
    }
    function ev(e, t, a, i) {
      switch ($n(t, i), t) {
        case "div":
        case "span":
        case "svg":
        case "path":
        case "a":
        case "g":
        case "p":
        case "li":
          break;
        case "input":
          var o = null, f = null, d = null, h = null, v = null, b = null, B = null;
          for (V in a) {
            var L = a[V];
            if (a.hasOwnProperty(V) && L != null)
              switch (V) {
                case "checked":
                  break;
                case "value":
                  break;
                case "defaultValue":
                  v = L;
                default:
                  i.hasOwnProperty(V) || dt(
                    e,
                    t,
                    V,
                    null,
                    i,
                    L
                  );
              }
          }
          for (var x in i) {
            var V = i[x];
            if (L = a[x], i.hasOwnProperty(x) && (V != null || L != null))
              switch (x) {
                case "type":
                  f = V;
                  break;
                case "name":
                  o = V;
                  break;
                case "checked":
                  b = V;
                  break;
                case "defaultChecked":
                  B = V;
                  break;
                case "value":
                  d = V;
                  break;
                case "defaultValue":
                  h = V;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  if (V != null)
                    throw Error(
                      t + " is a void element tag and must neither have `children` nor use `dangerouslySetInnerHTML`."
                    );
                  break;
                default:
                  V !== L && dt(
                    e,
                    t,
                    x,
                    V,
                    i,
                    L
                  );
              }
          }
          t = a.type === "checkbox" || a.type === "radio" ? a.checked != null : a.value != null, i = i.type === "checkbox" || i.type === "radio" ? i.checked != null : i.value != null, t || !i || ub || (console.error(
            "A component is changing an uncontrolled input to be controlled. This is likely caused by the value changing from undefined to a defined value, which should not happen. Decide between using a controlled or uncontrolled input element for the lifetime of the component. More info: https://react.dev/link/controlled-components"
          ), ub = !0), !t || i || nb || (console.error(
            "A component is changing a controlled input to be uncontrolled. This is likely caused by the value changing from a defined to undefined, which should not happen. Decide between using a controlled or uncontrolled input element for the lifetime of the component. More info: https://react.dev/link/controlled-components"
          ), nb = !0), Fu(
            e,
            d,
            h,
            v,
            b,
            B,
            f,
            o
          );
          return;
        case "select":
          V = d = h = x = null;
          for (f in a)
            if (v = a[f], a.hasOwnProperty(f) && v != null)
              switch (f) {
                case "value":
                  break;
                case "multiple":
                  V = v;
                default:
                  i.hasOwnProperty(f) || dt(
                    e,
                    t,
                    f,
                    null,
                    i,
                    v
                  );
              }
          for (o in i)
            if (f = i[o], v = a[o], i.hasOwnProperty(o) && (f != null || v != null))
              switch (o) {
                case "value":
                  x = f;
                  break;
                case "defaultValue":
                  h = f;
                  break;
                case "multiple":
                  d = f;
                default:
                  f !== v && dt(
                    e,
                    t,
                    o,
                    f,
                    i,
                    v
                  );
              }
          i = h, t = d, a = V, x != null ? vu(e, !!t, x, !1) : !!a != !!t && (i != null ? vu(e, !!t, i, !0) : vu(e, !!t, t ? [] : "", !1));
          return;
        case "textarea":
          V = x = null;
          for (h in a)
            if (o = a[h], a.hasOwnProperty(h) && o != null && !i.hasOwnProperty(h))
              switch (h) {
                case "value":
                  break;
                case "children":
                  break;
                default:
                  dt(e, t, h, null, i, o);
              }
          for (d in i)
            if (o = i[d], f = a[d], i.hasOwnProperty(d) && (o != null || f != null))
              switch (d) {
                case "value":
                  x = o;
                  break;
                case "defaultValue":
                  V = o;
                  break;
                case "children":
                  break;
                case "dangerouslySetInnerHTML":
                  if (o != null)
                    throw Error(
                      "`dangerouslySetInnerHTML` does not make sense on <textarea>."
                    );
                  break;
                default:
                  o !== f && dt(e, t, d, o, i, f);
              }
          as(e, x, V);
          return;
        case "option":
          for (var ye in a)
            if (x = a[ye], a.hasOwnProperty(ye) && x != null && !i.hasOwnProperty(ye))
              switch (ye) {
                case "selected":
                  e.selected = !1;
                  break;
                default:
                  dt(
                    e,
                    t,
                    ye,
                    null,
                    i,
                    x
                  );
              }
          for (v in i)
            if (x = i[v], V = a[v], i.hasOwnProperty(v) && x !== V && (x != null || V != null))
              switch (v) {
                case "selected":
                  e.selected = x && typeof x != "function" && typeof x != "symbol";
                  break;
                default:
                  dt(
                    e,
                    t,
                    v,
                    x,
                    i,
                    V
                  );
              }
          return;
        case "img":
        case "link":
        case "area":
        case "base":
        case "br":
        case "col":
        case "embed":
        case "hr":
        case "keygen":
        case "meta":
        case "param":
        case "source":
        case "track":
        case "wbr":
        case "menuitem":
          for (var Ue in a)
            x = a[Ue], a.hasOwnProperty(Ue) && x != null && !i.hasOwnProperty(Ue) && dt(
              e,
              t,
              Ue,
              null,
              i,
              x
            );
          for (b in i)
            if (x = i[b], V = a[b], i.hasOwnProperty(b) && x !== V && (x != null || V != null))
              switch (b) {
                case "children":
                case "dangerouslySetInnerHTML":
                  if (x != null)
                    throw Error(
                      t + " is a void element tag and must neither have `children` nor use `dangerouslySetInnerHTML`."
                    );
                  break;
                default:
                  dt(
                    e,
                    t,
                    b,
                    x,
                    i,
                    V
                  );
              }
          return;
        default:
          if (Ki(t)) {
            for (var Ht in a)
              x = a[Ht], a.hasOwnProperty(Ht) && x !== void 0 && !i.hasOwnProperty(Ht) && Tc(
                e,
                t,
                Ht,
                void 0,
                i,
                x
              );
            for (B in i)
              x = i[B], V = a[B], !i.hasOwnProperty(B) || x === V || x === void 0 && V === void 0 || Tc(
                e,
                t,
                B,
                x,
                i,
                V
              );
            return;
          }
      }
      for (var ut in a)
        x = a[ut], a.hasOwnProperty(ut) && x != null && !i.hasOwnProperty(ut) && dt(e, t, ut, null, i, x);
      for (L in i)
        x = i[L], V = a[L], !i.hasOwnProperty(L) || x === V || x == null && V == null || dt(e, t, L, x, i, V);
    }
    function Qy(e) {
      switch (e) {
        case "class":
          return "className";
        case "for":
          return "htmlFor";
        default:
          return e;
      }
    }
    function Ec(e) {
      var t = {};
      e = e.style;
      for (var a = 0; a < e.length; a++) {
        var i = e[a];
        t[i] = e.getPropertyValue(i);
      }
      return t;
    }
    function Zy(e, t, a) {
      if (t != null && typeof t != "object")
        console.error(
          "The `style` prop expects a mapping from style properties to values, not a string. For example, style={{marginRight: spacing + 'em'}} when using JSX."
        );
      else {
        var i, o = i = "", f;
        for (f in t)
          if (t.hasOwnProperty(f)) {
            var d = t[f];
            d != null && typeof d != "boolean" && d !== "" && (f.indexOf("--") === 0 ? (I(d, f), i += o + f + ":" + ("" + d).trim()) : typeof d != "number" || d === 0 || _r.has(f) ? (I(d, f), i += o + f.replace(Lu, "-$1").toLowerCase().replace(Vu, "-ms-") + ":" + ("" + d).trim()) : i += o + f.replace(Lu, "-$1").toLowerCase().replace(Vu, "-ms-") + ":" + d + "px", o = ";");
          }
        i = i || null, t = e.getAttribute("style"), t !== i && (i = Ul(i), Ul(t) !== i && (a.style = Ec(e)));
      }
    }
    function Wl(e, t, a, i, o, f) {
      if (o.delete(a), e = e.getAttribute(a), e === null)
        switch (typeof i) {
          case "undefined":
          case "function":
          case "symbol":
          case "boolean":
            return;
        }
      else if (i != null)
        switch (typeof i) {
          case "function":
          case "symbol":
          case "boolean":
            break;
          default:
            if (Z(i, t), e === "" + i)
              return;
        }
      wt(t, e, i, f);
    }
    function Ky(e, t, a, i, o, f) {
      if (o.delete(a), e = e.getAttribute(a), e === null) {
        switch (typeof i) {
          case "function":
          case "symbol":
            return;
        }
        if (!i) return;
      } else
        switch (typeof i) {
          case "function":
          case "symbol":
            break;
          default:
            if (i) return;
        }
      wt(t, e, i, f);
    }
    function Jy(e, t, a, i, o, f) {
      if (o.delete(a), e = e.getAttribute(a), e === null)
        switch (typeof i) {
          case "undefined":
          case "function":
          case "symbol":
            return;
        }
      else if (i != null)
        switch (typeof i) {
          case "function":
          case "symbol":
            break;
          default:
            if (Z(i, a), e === "" + i)
              return;
        }
      wt(t, e, i, f);
    }
    function tv(e, t, a, i, o, f) {
      if (o.delete(a), e = e.getAttribute(a), e === null)
        switch (typeof i) {
          case "undefined":
          case "function":
          case "symbol":
          case "boolean":
            return;
          default:
            if (isNaN(i)) return;
        }
      else if (i != null)
        switch (typeof i) {
          case "function":
          case "symbol":
          case "boolean":
            break;
          default:
            if (!isNaN(i) && (Z(i, t), e === "" + i))
              return;
        }
      wt(t, e, i, f);
    }
    function vt(e, t, a, i, o, f) {
      if (o.delete(a), e = e.getAttribute(a), e === null)
        switch (typeof i) {
          case "undefined":
          case "function":
          case "symbol":
          case "boolean":
            return;
        }
      else if (i != null)
        switch (typeof i) {
          case "function":
          case "symbol":
          case "boolean":
            break;
          default:
            if (Z(i, t), a = eo("" + i), e === a)
              return;
        }
      wt(t, e, i, f);
    }
    function Dt(e, t, a, i) {
      for (var o = {}, f = /* @__PURE__ */ new Set(), d = e.attributes, h = 0; h < d.length; h++)
        switch (d[h].name.toLowerCase()) {
          case "value":
            break;
          case "checked":
            break;
          case "selected":
            break;
          default:
            f.add(d[h].name);
        }
      if (Ki(t)) {
        for (var v in a)
          if (a.hasOwnProperty(v)) {
            var b = a[v];
            if (b != null) {
              if (Fa.hasOwnProperty(v))
                typeof b != "function" && Ja(v, b);
              else if (a.suppressHydrationWarning !== !0)
                switch (v) {
                  case "children":
                    typeof b != "string" && typeof b != "number" || wt(
                      "children",
                      e.textContent,
                      b,
                      o
                    );
                    continue;
                  case "suppressContentEditableWarning":
                  case "suppressHydrationWarning":
                  case "defaultValue":
                  case "defaultChecked":
                  case "innerHTML":
                  case "ref":
                    continue;
                  case "dangerouslySetInnerHTML":
                    d = e.innerHTML, b = b ? b.__html : void 0, b != null && (b = gd(e, b), wt(
                      v,
                      d,
                      b,
                      o
                    ));
                    continue;
                  case "style":
                    f.delete(v), Zy(e, b, o);
                    continue;
                  case "offsetParent":
                  case "offsetTop":
                  case "offsetLeft":
                  case "offsetWidth":
                  case "offsetHeight":
                  case "isContentEditable":
                  case "outerText":
                  case "outerHTML":
                    f.delete(v.toLowerCase()), console.error(
                      "Assignment to read-only property will result in a no-op: `%s`",
                      v
                    );
                    continue;
                  case "className":
                    f.delete("class"), d = Be(
                      e,
                      "class",
                      b
                    ), wt(
                      "className",
                      d,
                      b,
                      o
                    );
                    continue;
                  default:
                    i.context === Vc && t !== "svg" && t !== "math" ? f.delete(v.toLowerCase()) : f.delete(v), d = Be(
                      e,
                      v,
                      b
                    ), wt(
                      v,
                      d,
                      b,
                      o
                    );
                }
            }
          }
      } else
        for (b in a)
          if (a.hasOwnProperty(b) && (v = a[b], v != null)) {
            if (Fa.hasOwnProperty(b))
              typeof v != "function" && Ja(b, v);
            else if (a.suppressHydrationWarning !== !0)
              switch (b) {
                case "children":
                  typeof v != "string" && typeof v != "number" || wt(
                    "children",
                    e.textContent,
                    v,
                    o
                  );
                  continue;
                case "suppressContentEditableWarning":
                case "suppressHydrationWarning":
                case "value":
                case "checked":
                case "selected":
                case "defaultValue":
                case "defaultChecked":
                case "innerHTML":
                case "ref":
                  continue;
                case "dangerouslySetInnerHTML":
                  d = e.innerHTML, v = v ? v.__html : void 0, v != null && (v = gd(e, v), d !== v && (o[b] = { __html: d }));
                  continue;
                case "className":
                  Wl(
                    e,
                    b,
                    "class",
                    v,
                    f,
                    o
                  );
                  continue;
                case "tabIndex":
                  Wl(
                    e,
                    b,
                    "tabindex",
                    v,
                    f,
                    o
                  );
                  continue;
                case "style":
                  f.delete(b), Zy(e, v, o);
                  continue;
                case "multiple":
                  f.delete(b), wt(
                    b,
                    e.multiple,
                    v,
                    o
                  );
                  continue;
                case "muted":
                  f.delete(b), wt(
                    b,
                    e.muted,
                    v,
                    o
                  );
                  continue;
                case "autoFocus":
                  f.delete("autofocus"), wt(
                    b,
                    e.autofocus,
                    v,
                    o
                  );
                  continue;
                case "data":
                  if (t !== "object") {
                    f.delete(b), d = e.getAttribute("data"), wt(
                      b,
                      d,
                      v,
                      o
                    );
                    continue;
                  }
                case "src":
                case "href":
                  if (!(v !== "" || t === "a" && b === "href" || t === "object" && b === "data")) {
                    console.error(
                      b === "src" ? 'An empty string ("") was passed to the %s attribute. This may cause the browser to download the whole page again over the network. To fix this, either do not render the element at all or pass null to %s instead of an empty string.' : 'An empty string ("") was passed to the %s attribute. To fix this, either do not render the element at all or pass null to %s instead of an empty string.',
                      b,
                      b
                    );
                    continue;
                  }
                  vt(
                    e,
                    b,
                    b,
                    v,
                    f,
                    o
                  );
                  continue;
                case "action":
                case "formAction":
                  if (d = e.getAttribute(b), typeof v == "function") {
                    f.delete(b.toLowerCase()), b === "formAction" ? (f.delete("name"), f.delete("formenctype"), f.delete("formmethod"), f.delete("formtarget")) : (f.delete("enctype"), f.delete("method"), f.delete("target"));
                    continue;
                  } else if (d === JS) {
                    f.delete(b.toLowerCase()), wt(
                      b,
                      "function",
                      v,
                      o
                    );
                    continue;
                  }
                  vt(
                    e,
                    b,
                    b.toLowerCase(),
                    v,
                    f,
                    o
                  );
                  continue;
                case "xlinkHref":
                  vt(
                    e,
                    b,
                    "xlink:href",
                    v,
                    f,
                    o
                  );
                  continue;
                case "contentEditable":
                  Jy(
                    e,
                    b,
                    "contenteditable",
                    v,
                    f,
                    o
                  );
                  continue;
                case "spellCheck":
                  Jy(
                    e,
                    b,
                    "spellcheck",
                    v,
                    f,
                    o
                  );
                  continue;
                case "draggable":
                case "autoReverse":
                case "externalResourcesRequired":
                case "focusable":
                case "preserveAlpha":
                  Jy(
                    e,
                    b,
                    b,
                    v,
                    f,
                    o
                  );
                  continue;
                case "allowFullScreen":
                case "async":
                case "autoPlay":
                case "controls":
                case "default":
                case "defer":
                case "disabled":
                case "disablePictureInPicture":
                case "disableRemotePlayback":
                case "formNoValidate":
                case "hidden":
                case "loop":
                case "noModule":
                case "noValidate":
                case "open":
                case "playsInline":
                case "readOnly":
                case "required":
                case "reversed":
                case "scoped":
                case "seamless":
                case "itemScope":
                  Ky(
                    e,
                    b,
                    b.toLowerCase(),
                    v,
                    f,
                    o
                  );
                  continue;
                case "capture":
                case "download":
                  e: {
                    h = e;
                    var B = d = b, L = o;
                    if (f.delete(B), h = h.getAttribute(B), h === null)
                      switch (typeof v) {
                        case "undefined":
                        case "function":
                        case "symbol":
                          break e;
                        default:
                          if (v === !1) break e;
                      }
                    else if (v != null)
                      switch (typeof v) {
                        case "function":
                        case "symbol":
                          break;
                        case "boolean":
                          if (v === !0 && h === "") break e;
                          break;
                        default:
                          if (Z(v, d), h === "" + v)
                            break e;
                      }
                    wt(
                      d,
                      h,
                      v,
                      L
                    );
                  }
                  continue;
                case "cols":
                case "rows":
                case "size":
                case "span":
                  e: {
                    if (h = e, B = d = b, L = o, f.delete(B), h = h.getAttribute(B), h === null)
                      switch (typeof v) {
                        case "undefined":
                        case "function":
                        case "symbol":
                        case "boolean":
                          break e;
                        default:
                          if (isNaN(v) || 1 > v) break e;
                      }
                    else if (v != null)
                      switch (typeof v) {
                        case "function":
                        case "symbol":
                        case "boolean":
                          break;
                        default:
                          if (!(isNaN(v) || 1 > v) && (Z(v, d), h === "" + v))
                            break e;
                      }
                    wt(
                      d,
                      h,
                      v,
                      L
                    );
                  }
                  continue;
                case "rowSpan":
                  tv(
                    e,
                    b,
                    "rowspan",
                    v,
                    f,
                    o
                  );
                  continue;
                case "start":
                  tv(
                    e,
                    b,
                    b,
                    v,
                    f,
                    o
                  );
                  continue;
                case "xHeight":
                  Wl(
                    e,
                    b,
                    "x-height",
                    v,
                    f,
                    o
                  );
                  continue;
                case "xlinkActuate":
                  Wl(
                    e,
                    b,
                    "xlink:actuate",
                    v,
                    f,
                    o
                  );
                  continue;
                case "xlinkArcrole":
                  Wl(
                    e,
                    b,
                    "xlink:arcrole",
                    v,
                    f,
                    o
                  );
                  continue;
                case "xlinkRole":
                  Wl(
                    e,
                    b,
                    "xlink:role",
                    v,
                    f,
                    o
                  );
                  continue;
                case "xlinkShow":
                  Wl(
                    e,
                    b,
                    "xlink:show",
                    v,
                    f,
                    o
                  );
                  continue;
                case "xlinkTitle":
                  Wl(
                    e,
                    b,
                    "xlink:title",
                    v,
                    f,
                    o
                  );
                  continue;
                case "xlinkType":
                  Wl(
                    e,
                    b,
                    "xlink:type",
                    v,
                    f,
                    o
                  );
                  continue;
                case "xmlBase":
                  Wl(
                    e,
                    b,
                    "xml:base",
                    v,
                    f,
                    o
                  );
                  continue;
                case "xmlLang":
                  Wl(
                    e,
                    b,
                    "xml:lang",
                    v,
                    f,
                    o
                  );
                  continue;
                case "xmlSpace":
                  Wl(
                    e,
                    b,
                    "xml:space",
                    v,
                    f,
                    o
                  );
                  continue;
                case "inert":
                  v !== "" || Wv[b] || (Wv[b] = !0, console.error(
                    "Received an empty string for a boolean attribute `%s`. This will treat the attribute as if it were false. Either pass `false` to silence this warning, or pass `true` if you used an empty string in earlier versions of React to indicate this attribute is true.",
                    b
                  )), Ky(
                    e,
                    b,
                    b,
                    v,
                    f,
                    o
                  );
                  continue;
                default:
                  if (!(2 < b.length) || b[0] !== "o" && b[0] !== "O" || b[1] !== "n" && b[1] !== "N") {
                    h = cs(b), d = !1, i.context === Vc && t !== "svg" && t !== "math" ? f.delete(h.toLowerCase()) : (B = b.toLowerCase(), B = Hc.hasOwnProperty(
                      B
                    ) && Hc[B] || null, B !== null && B !== b && (d = !0, f.delete(B)), f.delete(h));
                    e: if (B = e, L = h, h = v, Ce(L))
                      if (B.hasAttribute(L))
                        B = B.getAttribute(
                          L
                        ), Z(
                          h,
                          L
                        ), h = B === "" + h ? h : B;
                      else {
                        switch (typeof h) {
                          case "function":
                          case "symbol":
                            break e;
                          case "boolean":
                            if (B = L.toLowerCase().slice(0, 5), B !== "data-" && B !== "aria-")
                              break e;
                        }
                        h = h === void 0 ? void 0 : null;
                      }
                    else h = void 0;
                    d || wt(
                      b,
                      h,
                      v,
                      o
                    );
                  }
              }
          }
      return 0 < f.size && a.suppressHydrationWarning !== !0 && Ti(e, f, o), Object.keys(o).length === 0 ? null : o;
    }
    function Pe(e, t) {
      switch (e.length) {
        case 0:
          return "";
        case 1:
          return e[0];
        case 2:
          return e[0] + " " + t + " " + e[1];
        default:
          return e.slice(0, -1).join(", ") + ", " + t + " " + e[e.length - 1];
      }
    }
    function et(e) {
      return e.nodeType === 9 ? e : e.ownerDocument;
    }
    function gt(e) {
      switch (e) {
        case $o:
          return bh;
        case Cr:
          return Pv;
        default:
          return Vc;
      }
    }
    function sa(e, t) {
      if (e === Vc)
        switch (t) {
          case "svg":
            return bh;
          case "math":
            return Pv;
          default:
            return Vc;
        }
      return e === bh && t === "foreignObject" ? Vc : e;
    }
    function Wn(e, t) {
      return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.children == "bigint" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
    }
    function Mo() {
      var e = window.event;
      return e && e.type === "popstate" ? e === D0 ? !1 : (D0 = e, !0) : (D0 = null, !1);
    }
    function ky(e) {
      setTimeout(function() {
        throw e;
      });
    }
    function xu(e, t, a) {
      switch (t) {
        case "button":
        case "input":
        case "select":
        case "textarea":
          a.autoFocus && e.focus();
          break;
        case "img":
          a.src ? e.src = a.src : a.srcSet && (e.srcset = a.srcSet);
      }
    }
    function Jt(e, t, a, i) {
      ev(e, t, a, i), e[ma] = i;
    }
    function Nu(e) {
      Zi(e, "");
    }
    function Ac(e, t, a) {
      e.nodeValue = a;
    }
    function Fn(e) {
      return e === "head";
    }
    function ka(e, t) {
      e.removeChild(t);
    }
    function Uo(e, t) {
      (e.nodeType === 9 ? e.body : e.nodeName === "HTML" ? e.ownerDocument.body : e).removeChild(t);
    }
    function _o(e, t) {
      var a = t, i = 0, o = 0;
      do {
        var f = a.nextSibling;
        if (e.removeChild(a), f && f.nodeType === 8)
          if (a = f.data, a === Iv) {
            if (0 < i && 8 > i) {
              a = i;
              var d = e.ownerDocument;
              if (a & $S && No(d.documentElement), a & WS && No(d.body), a & FS)
                for (a = d.head, No(a), d = a.firstChild; d; ) {
                  var h = d.nextSibling, v = d.nodeName;
                  d[Zo] || v === "SCRIPT" || v === "STYLE" || v === "LINK" && d.rel.toLowerCase() === "stylesheet" || a.removeChild(d), d = h;
                }
            }
            if (o === 0) {
              e.removeChild(f), zc(t);
              return;
            }
            o--;
          } else
            a === Fv || a === Lc || a === np ? o++ : i = a.charCodeAt(0) - 48;
        else i = 0;
        a = f;
      } while (a);
      zc(t);
    }
    function da(e) {
      e = e.style, typeof e.setProperty == "function" ? e.setProperty("display", "none", "important") : e.display = "none";
    }
    function $y(e) {
      e.nodeValue = "";
    }
    function Wy(e, t) {
      t = t[IS], t = t != null && t.hasOwnProperty("display") ? t.display : null, e.style.display = t == null || typeof t == "boolean" ? "" : ("" + t).trim();
    }
    function bd(e, t) {
      e.nodeValue = t;
    }
    function Co(e) {
      var t = e.firstChild;
      for (t && t.nodeType === 10 && (t = t.nextSibling); t; ) {
        var a = t;
        switch (t = t.nextSibling, a.nodeName) {
          case "HTML":
          case "HEAD":
          case "BODY":
            Co(a), tn(a);
            continue;
          case "SCRIPT":
          case "STYLE":
            continue;
          case "LINK":
            if (a.rel.toLowerCase() === "stylesheet") continue;
        }
        e.removeChild(a);
      }
    }
    function Ei(e, t, a, i) {
      for (; e.nodeType === 1; ) {
        var o = a;
        if (e.nodeName.toLowerCase() !== t.toLowerCase()) {
          if (!i && (e.nodeName !== "INPUT" || e.type !== "hidden"))
            break;
        } else if (i) {
          if (!e[Zo])
            switch (t) {
              case "meta":
                if (!e.hasAttribute("itemprop")) break;
                return e;
              case "link":
                if (f = e.getAttribute("rel"), f === "stylesheet" && e.hasAttribute("data-precedence"))
                  break;
                if (f !== o.rel || e.getAttribute("href") !== (o.href == null || o.href === "" ? null : o.href) || e.getAttribute("crossorigin") !== (o.crossOrigin == null ? null : o.crossOrigin) || e.getAttribute("title") !== (o.title == null ? null : o.title))
                  break;
                return e;
              case "style":
                if (e.hasAttribute("data-precedence")) break;
                return e;
              case "script":
                if (f = e.getAttribute("src"), (f !== (o.src == null ? null : o.src) || e.getAttribute("type") !== (o.type == null ? null : o.type) || e.getAttribute("crossorigin") !== (o.crossOrigin == null ? null : o.crossOrigin)) && f && e.hasAttribute("async") && !e.hasAttribute("itemprop"))
                  break;
                return e;
              default:
                return e;
            }
        } else if (t === "input" && e.type === "hidden") {
          Z(o.name, "name");
          var f = o.name == null ? null : "" + o.name;
          if (o.type === "hidden" && e.getAttribute("name") === f)
            return e;
        } else return e;
        if (e = Cl(e.nextSibling), e === null) break;
      }
      return null;
    }
    function _l(e, t, a) {
      if (t === "") return null;
      for (; e.nodeType !== 3; )
        if ((e.nodeType !== 1 || e.nodeName !== "INPUT" || e.type !== "hidden") && !a || (e = Cl(e.nextSibling), e === null)) return null;
      return e;
    }
    function In(e) {
      return e.data === np || e.data === Lc && e.ownerDocument.readyState === fb;
    }
    function Ho(e, t) {
      var a = e.ownerDocument;
      if (e.data !== Lc || a.readyState === fb)
        t();
      else {
        var i = function() {
          t(), a.removeEventListener("DOMContentLoaded", i);
        };
        a.addEventListener("DOMContentLoaded", i), e._reactRetry = i;
      }
    }
    function Cl(e) {
      for (; e != null; e = e.nextSibling) {
        var t = e.nodeType;
        if (t === 1 || t === 3) break;
        if (t === 8) {
          if (t = e.data, t === Fv || t === np || t === Lc || t === A0 || t === ob)
            break;
          if (t === Iv) return null;
        }
      }
      return e;
    }
    function Sd(e) {
      if (e.nodeType === 1) {
        for (var t = e.nodeName.toLowerCase(), a = {}, i = e.attributes, o = 0; o < i.length; o++) {
          var f = i[o];
          a[Qy(f.name)] = f.name.toLowerCase() === "style" ? Ec(e) : f.value;
        }
        return { type: t, props: a };
      }
      return e.nodeType === 8 ? { type: "Suspense", props: {} } : e.nodeValue;
    }
    function Td(e, t, a) {
      return a === null || a[kS] !== !0 ? (e.nodeValue === t ? e = null : (t = Ul(t), e = Ul(e.nodeValue) === t ? null : e.nodeValue), e) : null;
    }
    function Fy(e) {
      e = e.nextSibling;
      for (var t = 0; e; ) {
        if (e.nodeType === 8) {
          var a = e.data;
          if (a === Iv) {
            if (t === 0)
              return Cl(e.nextSibling);
            t--;
          } else
            a !== Fv && a !== np && a !== Lc || t++;
        }
        e = e.nextSibling;
      }
      return null;
    }
    function xo(e) {
      e = e.previousSibling;
      for (var t = 0; e; ) {
        if (e.nodeType === 8) {
          var a = e.data;
          if (a === Fv || a === np || a === Lc) {
            if (t === 0) return e;
            t--;
          } else a === Iv && t++;
        }
        e = e.previousSibling;
      }
      return null;
    }
    function Iy(e) {
      zc(e);
    }
    function Da(e) {
      zc(e);
    }
    function Py(e, t, a, i, o) {
      switch (o && is(e, i.ancestorInfo), t = et(a), e) {
        case "html":
          if (e = t.documentElement, !e)
            throw Error(
              "React expected an <html> element (document.documentElement) to exist in the Document but one was not found. React never removes the documentElement for any Document it renders into so the cause is likely in some other script running on this page."
            );
          return e;
        case "head":
          if (e = t.head, !e)
            throw Error(
              "React expected a <head> element (document.head) to exist in the Document but one was not found. React never removes the head for any Document it renders into so the cause is likely in some other script running on this page."
            );
          return e;
        case "body":
          if (e = t.body, !e)
            throw Error(
              "React expected a <body> element (document.body) to exist in the Document but one was not found. React never removes the body for any Document it renders into so the cause is likely in some other script running on this page."
            );
          return e;
        default:
          throw Error(
            "resolveSingletonInstance was called with an element type that is not supported. This is a bug in React."
          );
      }
    }
    function za(e, t, a, i) {
      if (!a[Ci] && Rl(a)) {
        var o = a.tagName.toLowerCase();
        console.error(
          "You are mounting a new %s component when a previous one has not first unmounted. It is an error to render more than one %s component at a time and attributes and children of these components will likely fail in unpredictable ways. Please only render a single instance of <%s> and if you need to mount a new one, ensure any previous ones have unmounted first.",
          o,
          o,
          o
        );
      }
      switch (e) {
        case "html":
        case "head":
        case "body":
          break;
        default:
          console.error(
            "acquireSingletonInstance was called with an element type that is not supported. This is a bug in React."
          );
      }
      for (o = a.attributes; o.length; )
        a.removeAttributeNode(o[0]);
      Kt(a, e, t), a[Vl] = i, a[ma] = t;
    }
    function No(e) {
      for (var t = e.attributes; t.length; )
        e.removeAttributeNode(t[0]);
      tn(e);
    }
    function rr(e) {
      return typeof e.getRootNode == "function" ? e.getRootNode() : e.nodeType === 9 ? e : e.ownerDocument;
    }
    function lv(e, t, a) {
      var i = Sh;
      if (i && typeof t == "string" && t) {
        var o = Sa(t);
        o = 'link[rel="' + e + '"][href="' + o + '"]', typeof a == "string" && (o += '[crossorigin="' + a + '"]'), mb.has(o) || (mb.add(o), e = { rel: e, crossOrigin: a, href: t }, i.querySelector(o) === null && (t = i.createElement("link"), Kt(t, "link", e), z(t), i.head.appendChild(t)));
      }
    }
    function wu(e, t, a, i) {
      var o = (o = eu.current) ? rr(o) : null;
      if (!o)
        throw Error(
          '"resourceRoot" was expected to exist. This is a bug in React.'
        );
      switch (e) {
        case "meta":
        case "title":
          return null;
        case "style":
          return typeof a.precedence == "string" && typeof a.href == "string" ? (a = Ai(a.href), t = m(o).hoistableStyles, i = t.get(a), i || (i = {
            type: "style",
            instance: null,
            count: 0,
            state: null
          }, t.set(a, i)), i) : { type: "void", instance: null, count: 0, state: null };
        case "link":
          if (a.rel === "stylesheet" && typeof a.href == "string" && typeof a.precedence == "string") {
            e = Ai(a.href);
            var f = m(o).hoistableStyles, d = f.get(e);
            if (!d && (o = o.ownerDocument || o, d = {
              type: "stylesheet",
              instance: null,
              count: 0,
              state: { loading: $r, preload: null }
            }, f.set(e, d), (f = o.querySelector(
              Pn(e)
            )) && !f._p && (d.instance = f, d.state.loading = up | hu), !yu.has(e))) {
              var h = {
                rel: "preload",
                as: "style",
                href: a.href,
                crossOrigin: a.crossOrigin,
                integrity: a.integrity,
                media: a.media,
                hrefLang: a.hrefLang,
                referrerPolicy: a.referrerPolicy
              };
              yu.set(e, h), f || av(
                o,
                e,
                h,
                d.state
              );
            }
            if (t && i === null)
              throw a = `

  - ` + Rc(t) + `
  + ` + Rc(a), Error(
                "Expected <link> not to update to be updated to a stylesheet with precedence. Check the `rel`, `href`, and `precedence` props of this component. Alternatively, check whether two different <link> components render in the same slot or share the same key." + a
              );
            return d;
          }
          if (t && i !== null)
            throw a = `

  - ` + Rc(t) + `
  + ` + Rc(a), Error(
              "Expected stylesheet with precedence to not be updated to a different kind of <link>. Check the `rel`, `href`, and `precedence` props of this component. Alternatively, check whether two different <link> components render in the same slot or share the same key." + a
            );
          return null;
        case "script":
          return t = a.async, a = a.src, typeof a == "string" && t && typeof t != "function" && typeof t != "symbol" ? (a = Oc(a), t = m(o).hoistableScripts, i = t.get(a), i || (i = {
            type: "script",
            instance: null,
            count: 0,
            state: null
          }, t.set(a, i)), i) : { type: "void", instance: null, count: 0, state: null };
        default:
          throw Error(
            'getResource encountered a type it did not expect: "' + e + '". this is a bug in React.'
          );
      }
    }
    function Rc(e) {
      var t = 0, a = "<link";
      return typeof e.rel == "string" ? (t++, a += ' rel="' + e.rel + '"') : Yu.call(e, "rel") && (t++, a += ' rel="' + (e.rel === null ? "null" : "invalid type " + typeof e.rel) + '"'), typeof e.href == "string" ? (t++, a += ' href="' + e.href + '"') : Yu.call(e, "href") && (t++, a += ' href="' + (e.href === null ? "null" : "invalid type " + typeof e.href) + '"'), typeof e.precedence == "string" ? (t++, a += ' precedence="' + e.precedence + '"') : Yu.call(e, "precedence") && (t++, a += " precedence={" + (e.precedence === null ? "null" : "invalid type " + typeof e.precedence) + "}"), Object.getOwnPropertyNames(e).length > t && (a += " ..."), a + " />";
    }
    function Ai(e) {
      return 'href="' + Sa(e) + '"';
    }
    function Pn(e) {
      return 'link[rel="stylesheet"][' + e + "]";
    }
    function em(e) {
      return Ze({}, e, {
        "data-precedence": e.precedence,
        precedence: null
      });
    }
    function av(e, t, a, i) {
      e.querySelector(
        'link[rel="preload"][as="style"][' + t + "]"
      ) ? i.loading = up : (t = e.createElement("link"), i.preload = t, t.addEventListener("load", function() {
        return i.loading |= up;
      }), t.addEventListener("error", function() {
        return i.loading |= hb;
      }), Kt(t, "link", a), z(t), e.head.appendChild(t));
    }
    function Oc(e) {
      return '[src="' + Sa(e) + '"]';
    }
    function Dc(e) {
      return "script[async]" + e;
    }
    function Ed(e, t, a) {
      if (t.count++, t.instance === null)
        switch (t.type) {
          case "style":
            var i = e.querySelector(
              'style[data-href~="' + Sa(a.href) + '"]'
            );
            if (i)
              return t.instance = i, z(i), i;
            var o = Ze({}, a, {
              "data-href": a.href,
              "data-precedence": a.precedence,
              href: null,
              precedence: null
            });
            return i = (e.ownerDocument || e).createElement("style"), z(i), Kt(i, "style", o), Ad(i, a.precedence, e), t.instance = i;
          case "stylesheet":
            o = Ai(a.href);
            var f = e.querySelector(
              Pn(o)
            );
            if (f)
              return t.state.loading |= hu, t.instance = f, z(f), f;
            i = em(a), (o = yu.get(o)) && tm(i, o), f = (e.ownerDocument || e).createElement("link"), z(f);
            var d = f;
            return d._p = new Promise(function(h, v) {
              d.onload = h, d.onerror = v;
            }), Kt(f, "link", i), t.state.loading |= hu, Ad(f, a.precedence, e), t.instance = f;
          case "script":
            return f = Oc(a.src), (o = e.querySelector(
              Dc(f)
            )) ? (t.instance = o, z(o), o) : (i = a, (o = yu.get(f)) && (i = Ze({}, a), lm(i, o)), e = e.ownerDocument || e, o = e.createElement("script"), z(o), Kt(o, "link", i), e.head.appendChild(o), t.instance = o);
          case "void":
            return null;
          default:
            throw Error(
              'acquireResource encountered a resource type it did not expect: "' + t.type + '". this is a bug in React.'
            );
        }
      else
        t.type === "stylesheet" && (t.state.loading & hu) === $r && (i = t.instance, t.state.loading |= hu, Ad(i, a.precedence, e));
      return t.instance;
    }
    function Ad(e, t, a) {
      for (var i = a.querySelectorAll(
        'link[rel="stylesheet"][data-precedence],style[data-precedence]'
      ), o = i.length ? i[i.length - 1] : null, f = o, d = 0; d < i.length; d++) {
        var h = i[d];
        if (h.dataset.precedence === t) f = h;
        else if (f !== o) break;
      }
      f ? f.parentNode.insertBefore(e, f.nextSibling) : (t = a.nodeType === 9 ? a.head : a, t.insertBefore(e, t.firstChild));
    }
    function tm(e, t) {
      e.crossOrigin == null && (e.crossOrigin = t.crossOrigin), e.referrerPolicy == null && (e.referrerPolicy = t.referrerPolicy), e.title == null && (e.title = t.title);
    }
    function lm(e, t) {
      e.crossOrigin == null && (e.crossOrigin = t.crossOrigin), e.referrerPolicy == null && (e.referrerPolicy = t.referrerPolicy), e.integrity == null && (e.integrity = t.integrity);
    }
    function am(e, t, a) {
      if (eg === null) {
        var i = /* @__PURE__ */ new Map(), o = eg = /* @__PURE__ */ new Map();
        o.set(a, i);
      } else
        o = eg, i = o.get(a), i || (i = /* @__PURE__ */ new Map(), o.set(a, i));
      if (i.has(e)) return i;
      for (i.set(e, null), a = a.getElementsByTagName(e), o = 0; o < a.length; o++) {
        var f = a[o];
        if (!(f[Zo] || f[Vl] || e === "link" && f.getAttribute("rel") === "stylesheet") && f.namespaceURI !== $o) {
          var d = f.getAttribute(t) || "";
          d = e + d;
          var h = i.get(d);
          h ? h.push(f) : i.set(d, [f]);
        }
      }
      return i;
    }
    function nm(e, t, a) {
      e = e.ownerDocument || e, e.head.insertBefore(
        a,
        t === "title" ? e.querySelector("head > title") : null
      );
    }
    function wo(e, t, a) {
      var i = !a.ancestorInfo.containerTagInScope;
      if (a.context === bh || t.itemProp != null)
        return !i || t.itemProp == null || e !== "meta" && e !== "title" && e !== "style" && e !== "link" && e !== "script" || console.error(
          "Cannot render a <%s> outside the main document if it has an `itemProp` prop. `itemProp` suggests the tag belongs to an `itemScope` which can appear anywhere in the DOM. If you were intending for React to hoist this <%s> remove the `itemProp` prop. Otherwise, try moving this tag into the <head> or <body> of the Document.",
          e,
          e
        ), !1;
      switch (e) {
        case "meta":
        case "title":
          return !0;
        case "style":
          if (typeof t.precedence != "string" || typeof t.href != "string" || t.href === "") {
            i && console.error(
              'Cannot render a <style> outside the main document without knowing its precedence and a unique href key. React can hoist and deduplicate <style> tags if you provide a `precedence` prop along with an `href` prop that does not conflict with the `href` values used in any other hoisted <style> or <link rel="stylesheet" ...> tags.  Note that hoisting <style> tags is considered an advanced feature that most will not use directly. Consider moving the <style> tag to the <head> or consider adding a `precedence="default"` and `href="some unique resource identifier"`.'
            );
            break;
          }
          return !0;
        case "link":
          if (typeof t.rel != "string" || typeof t.href != "string" || t.href === "" || t.onLoad || t.onError) {
            if (t.rel === "stylesheet" && typeof t.precedence == "string") {
              e = t.href;
              var o = t.onError, f = t.disabled;
              a = [], t.onLoad && a.push("`onLoad`"), o && a.push("`onError`"), f != null && a.push("`disabled`"), o = Pe(a, "and"), o += a.length === 1 ? " prop" : " props", f = a.length === 1 ? "an " + o : "the " + o, a.length && console.error(
                'React encountered a <link rel="stylesheet" href="%s" ... /> with a `precedence` prop that also included %s. The presence of loading and error handlers indicates an intent to manage the stylesheet loading state from your from your Component code and React will not hoist or deduplicate this stylesheet. If your intent was to have React hoist and deduplciate this stylesheet using the `precedence` prop remove the %s, otherwise remove the `precedence` prop.',
                e,
                f,
                o
              );
            }
            i && (typeof t.rel != "string" || typeof t.href != "string" || t.href === "" ? console.error(
              "Cannot render a <link> outside the main document without a `rel` and `href` prop. Try adding a `rel` and/or `href` prop to this <link> or moving the link into the <head> tag"
            ) : (t.onError || t.onLoad) && console.error(
              "Cannot render a <link> with onLoad or onError listeners outside the main document. Try removing onLoad={...} and onError={...} or moving it into the root <head> tag or somewhere in the <body>."
            ));
            break;
          }
          switch (t.rel) {
            case "stylesheet":
              return e = t.precedence, t = t.disabled, typeof e != "string" && i && console.error(
                'Cannot render a <link rel="stylesheet" /> outside the main document without knowing its precedence. Consider adding precedence="default" or moving it into the root <head> tag.'
              ), typeof e == "string" && t == null;
            default:
              return !0;
          }
        case "script":
          if (e = t.async && typeof t.async != "function" && typeof t.async != "symbol", !e || t.onLoad || t.onError || !t.src || typeof t.src != "string") {
            i && (e ? t.onLoad || t.onError ? console.error(
              "Cannot render a <script> with onLoad or onError listeners outside the main document. Try removing onLoad={...} and onError={...} or moving it into the root <head> tag or somewhere in the <body>."
            ) : console.error(
              "Cannot render a <script> outside the main document without `async={true}` and a non-empty `src` prop. Ensure there is a valid `src` and either make the script async or move it into the root <head> tag or somewhere in the <body>."
            ) : console.error(
              'Cannot render a sync or defer <script> outside the main document without knowing its order. Try adding async="" or moving it into the root <head> tag.'
            ));
            break;
          }
          return !0;
        case "noscript":
        case "template":
          i && console.error(
            "Cannot render <%s> outside the main document. Try moving it into the root <head> tag.",
            e
          );
      }
      return !1;
    }
    function sr(e) {
      return !(e.type === "stylesheet" && (e.state.loading & yb) === $r);
    }
    function nv() {
    }
    function uv(e, t, a) {
      if (ip === null)
        throw Error(
          "Internal React Error: suspendedState null when it was expected to exists. Please report this as a React bug."
        );
      var i = ip;
      if (t.type === "stylesheet" && (typeof a.media != "string" || matchMedia(a.media).matches !== !1) && (t.state.loading & hu) === $r) {
        if (t.instance === null) {
          var o = Ai(a.href), f = e.querySelector(
            Pn(o)
          );
          if (f) {
            e = f._p, e !== null && typeof e == "object" && typeof e.then == "function" && (i.count++, i = dr.bind(i), e.then(i, i)), t.state.loading |= hu, t.instance = f, z(f);
            return;
          }
          f = e.ownerDocument || e, a = em(a), (o = yu.get(o)) && tm(a, o), f = f.createElement("link"), z(f);
          var d = f;
          d._p = new Promise(function(h, v) {
            d.onload = h, d.onerror = v;
          }), Kt(f, "link", a), t.instance = f;
        }
        i.stylesheets === null && (i.stylesheets = /* @__PURE__ */ new Map()), i.stylesheets.set(t, e), (e = t.state.preload) && (t.state.loading & yb) === $r && (i.count++, t = dr.bind(i), e.addEventListener("load", t), e.addEventListener("error", t));
      }
    }
    function iv() {
      if (ip === null)
        throw Error(
          "Internal React Error: suspendedState null when it was expected to exists. Please report this as a React bug."
        );
      var e = ip;
      return e.stylesheets && e.count === 0 && Rd(e, e.stylesheets), 0 < e.count ? function(t) {
        var a = setTimeout(function() {
          if (e.stylesheets && Rd(e, e.stylesheets), e.unsuspend) {
            var i = e.unsuspend;
            e.unsuspend = null, i();
          }
        }, 6e4);
        return e.unsuspend = t, function() {
          e.unsuspend = null, clearTimeout(a);
        };
      } : null;
    }
    function dr() {
      if (this.count--, this.count === 0) {
        if (this.stylesheets)
          Rd(this, this.stylesheets);
        else if (this.unsuspend) {
          var e = this.unsuspend;
          this.unsuspend = null, e();
        }
      }
    }
    function Rd(e, t) {
      e.stylesheets = null, e.unsuspend !== null && (e.count++, tg = /* @__PURE__ */ new Map(), t.forEach(cv, e), tg = null, dr.call(e));
    }
    function cv(e, t) {
      if (!(t.state.loading & hu)) {
        var a = tg.get(e);
        if (a) var i = a.get(M0);
        else {
          a = /* @__PURE__ */ new Map(), tg.set(e, a);
          for (var o = e.querySelectorAll(
            "link[data-precedence],style[data-precedence]"
          ), f = 0; f < o.length; f++) {
            var d = o[f];
            (d.nodeName === "LINK" || d.getAttribute("media") !== "not all") && (a.set(d.dataset.precedence, d), i = d);
          }
          i && a.set(M0, i);
        }
        o = t.instance, d = o.getAttribute("data-precedence"), f = a.get(d) || i, f === i && a.set(M0, o), a.set(d, o), this.count++, i = dr.bind(this), o.addEventListener("load", i), o.addEventListener("error", i), f ? f.parentNode.insertBefore(o, f.nextSibling) : (e = e.nodeType === 9 ? e.head : e, e.insertBefore(o, e.firstChild)), t.state.loading |= hu;
      }
    }
    function Od(e, t, a, i, o, f, d, h) {
      for (this.tag = 1, this.containerInfo = e, this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = kr, this.callbackNode = this.next = this.pendingContext = this.context = this.cancelPendingCommit = null, this.callbackPriority = 0, this.expirationTimes = Kc(-1), this.entangledLanes = this.shellSuspendCounter = this.errorRecoveryDisabledLanes = this.expiredLanes = this.warmLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = Kc(0), this.hiddenUpdates = Kc(null), this.identifierPrefix = i, this.onUncaughtError = o, this.onCaughtError = f, this.onRecoverableError = d, this.pooledCache = null, this.pooledCacheLanes = 0, this.formState = h, this.incompleteTransitions = /* @__PURE__ */ new Map(), this.passiveEffectDuration = this.effectDuration = -0, this.memoizedUpdaters = /* @__PURE__ */ new Set(), e = this.pendingUpdatersLaneMap = [], t = 0; 31 > t; t++) e.push(/* @__PURE__ */ new Set());
      this._debugRootType = a ? "hydrateRoot()" : "createRoot()";
    }
    function um(e, t, a, i, o, f, d, h, v, b, B, L) {
      return e = new Od(
        e,
        t,
        a,
        d,
        h,
        v,
        b,
        L
      ), t = RS, f === !0 && (t |= va | Xu), $t && (t |= Il), f = U(3, null, null, t), e.current = f, f.stateNode = e, t = _f(), tc(t), e.pooledCache = t, tc(t), f.memoizedState = {
        element: i,
        isDehydrated: a,
        cache: t
      }, na(f), e;
    }
    function im(e) {
      return e ? (e = Wo, e) : Wo;
    }
    function bt(e, t, a, i, o, f) {
      if (Hl && typeof Hl.onScheduleFiberRoot == "function")
        try {
          Hl.onScheduleFiberRoot(Ui, i, a);
        } catch (d) {
          ya || (ya = !0, console.error(
            "React instrumentation encountered an error: %s",
            d
          ));
        }
      fe !== null && typeof fe.markRenderScheduled == "function" && fe.markRenderScheduled(t), o = im(o), i.context === null ? i.context = o : i.pendingContext = o, pa && Ua !== null && !bb && (bb = !0, console.error(
        `Render methods should be a pure function of props and state; triggering nested component updates from render is not allowed. If necessary, trigger nested updates in componentDidUpdate.

Check the render method of %s.`,
        de(Ua) || "Unknown"
      )), i = Hn(t), i.payload = { element: a }, f = f === void 0 ? null : f, f !== null && (typeof f != "function" && console.error(
        "Expected the last optional `callback` argument to be a function. Instead received: %s.",
        f
      ), i.callback = f), a = rn(e, i, t), a !== null && (Qt(a, e, t), oi(a, e, t));
    }
    function Dd(e, t) {
      if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
        var a = e.retryLane;
        e.retryLane = a !== 0 && a < t ? a : t;
      }
    }
    function cm(e, t) {
      Dd(e, t), (e = e.alternate) && Dd(e, t);
    }
    function om(e) {
      if (e.tag === 13) {
        var t = aa(e, 67108864);
        t !== null && Qt(t, e, 67108864), cm(e, 67108864);
      }
    }
    function Eg() {
      return Ua;
    }
    function Ag() {
      for (var e = /* @__PURE__ */ new Map(), t = 1, a = 0; 31 > a; a++) {
        var i = sf(t);
        e.set(t, i), t *= 2;
      }
      return e;
    }
    function Rg(e, t, a, i) {
      var o = j.T;
      j.T = null;
      var f = Me.p;
      try {
        Me.p = xl, Ri(e, t, a, i);
      } finally {
        Me.p = f, j.T = o;
      }
    }
    function zd(e, t, a, i) {
      var o = j.T;
      j.T = null;
      var f = Me.p;
      try {
        Me.p = bn, Ri(e, t, a, i);
      } finally {
        Me.p = f, j.T = o;
      }
    }
    function Ri(e, t, a, i) {
      if (ag) {
        var o = hr(i);
        if (o === null)
          kl(
            e,
            t,
            i,
            ng,
            a
          ), Oi(e, i);
        else if (yr(
          o,
          e,
          t,
          a,
          i
        ))
          i.stopPropagation();
        else if (Oi(e, i), t & 4 && -1 < lT.indexOf(e)) {
          for (; o !== null; ) {
            var f = Rl(o);
            if (f !== null)
              switch (f.tag) {
                case 3:
                  if (f = f.stateNode, f.current.memoizedState.isDehydrated) {
                    var d = Pt(f.pendingLanes);
                    if (d !== 0) {
                      var h = f;
                      for (h.pendingLanes |= 2, h.entangledLanes |= 2; d; ) {
                        var v = 1 << 31 - Ll(d);
                        h.entanglements[1] |= v, d &= ~v;
                      }
                      Ka(f), (St & (xa | Ju)) === Sn && (Lv = tu() + F1, Sc(0));
                    }
                  }
                  break;
                case 13:
                  h = aa(f, 2), h !== null && Qt(h, f, 2), gc(), cm(f, 2);
              }
            if (f = hr(i), f === null && kl(
              e,
              t,
              i,
              ng,
              a
            ), f === o) break;
            o = f;
          }
          o !== null && i.stopPropagation();
        } else
          kl(
            e,
            t,
            i,
            null,
            a
          );
      }
    }
    function hr(e) {
      return e = Ji(e), Bo(e);
    }
    function Bo(e) {
      if (ng = null, e = la(e), e !== null) {
        var t = Xe(e);
        if (t === null) e = null;
        else {
          var a = t.tag;
          if (a === 13) {
            if (e = It(t), e !== null) return e;
            e = null;
          } else if (a === 3) {
            if (t.stateNode.current.memoizedState.isDehydrated)
              return t.tag === 3 ? t.stateNode.containerInfo : null;
            e = null;
          } else t !== e && (e = null);
        }
      }
      return ng = e, null;
    }
    function Md(e) {
      switch (e) {
        case "beforetoggle":
        case "cancel":
        case "click":
        case "close":
        case "contextmenu":
        case "copy":
        case "cut":
        case "auxclick":
        case "dblclick":
        case "dragend":
        case "dragstart":
        case "drop":
        case "focusin":
        case "focusout":
        case "input":
        case "invalid":
        case "keydown":
        case "keypress":
        case "keyup":
        case "mousedown":
        case "mouseup":
        case "paste":
        case "pause":
        case "play":
        case "pointercancel":
        case "pointerdown":
        case "pointerup":
        case "ratechange":
        case "reset":
        case "resize":
        case "seeked":
        case "submit":
        case "toggle":
        case "touchcancel":
        case "touchend":
        case "touchstart":
        case "volumechange":
        case "change":
        case "selectionchange":
        case "textInput":
        case "compositionstart":
        case "compositionend":
        case "compositionupdate":
        case "beforeblur":
        case "afterblur":
        case "beforeinput":
        case "blur":
        case "fullscreenchange":
        case "focus":
        case "hashchange":
        case "popstate":
        case "select":
        case "selectstart":
          return xl;
        case "drag":
        case "dragenter":
        case "dragexit":
        case "dragleave":
        case "dragover":
        case "mousemove":
        case "mouseout":
        case "mouseover":
        case "pointermove":
        case "pointerout":
        case "pointerover":
        case "scroll":
        case "touchmove":
        case "wheel":
        case "mouseenter":
        case "mouseleave":
        case "pointerenter":
        case "pointerleave":
          return bn;
        case "message":
          switch (Mi()) {
            case xd:
              return xl;
            case Ar:
              return bn;
            case Vo:
            case Ug:
              return Gu;
            case Rr:
              return qd;
            default:
              return Gu;
          }
        default:
          return Gu;
      }
    }
    function Oi(e, t) {
      switch (e) {
        case "focusin":
        case "focusout":
          cf = null;
          break;
        case "dragenter":
        case "dragleave":
          of = null;
          break;
        case "mouseover":
        case "mouseout":
          ff = null;
          break;
        case "pointerover":
        case "pointerout":
          op.delete(t.pointerId);
          break;
        case "gotpointercapture":
        case "lostpointercapture":
          fp.delete(t.pointerId);
      }
    }
    function ha(e, t, a, i, o, f) {
      return e === null || e.nativeEvent !== f ? (e = {
        blockedOn: t,
        domEventName: a,
        eventSystemFlags: i,
        nativeEvent: f,
        targetContainers: [o]
      }, t !== null && (t = Rl(t), t !== null && om(t)), e) : (e.eventSystemFlags |= i, t = e.targetContainers, o !== null && t.indexOf(o) === -1 && t.push(o), e);
    }
    function yr(e, t, a, i, o) {
      switch (t) {
        case "focusin":
          return cf = ha(
            cf,
            e,
            t,
            a,
            i,
            o
          ), !0;
        case "dragenter":
          return of = ha(
            of,
            e,
            t,
            a,
            i,
            o
          ), !0;
        case "mouseover":
          return ff = ha(
            ff,
            e,
            t,
            a,
            i,
            o
          ), !0;
        case "pointerover":
          var f = o.pointerId;
          return op.set(
            f,
            ha(
              op.get(f) || null,
              e,
              t,
              a,
              i,
              o
            )
          ), !0;
        case "gotpointercapture":
          return f = o.pointerId, fp.set(
            f,
            ha(
              fp.get(f) || null,
              e,
              t,
              a,
              i,
              o
            )
          ), !0;
      }
      return !1;
    }
    function ov(e) {
      var t = la(e.target);
      if (t !== null) {
        var a = Xe(t);
        if (a !== null) {
          if (t = a.tag, t === 13) {
            if (t = It(a), t !== null) {
              e.blockedOn = t, kc(e.priority, function() {
                if (a.tag === 13) {
                  var i = ra(a);
                  i = El(i);
                  var o = aa(
                    a,
                    i
                  );
                  o !== null && Qt(o, a, i), cm(a, i);
                }
              });
              return;
            }
          } else if (t === 3 && a.stateNode.current.memoizedState.isDehydrated) {
            e.blockedOn = a.tag === 3 ? a.stateNode.containerInfo : null;
            return;
          }
        }
      }
      e.blockedOn = null;
    }
    function mr(e) {
      if (e.blockedOn !== null) return !1;
      for (var t = e.targetContainers; 0 < t.length; ) {
        var a = hr(e.nativeEvent);
        if (a === null) {
          a = e.nativeEvent;
          var i = new a.constructor(
            a.type,
            a
          ), o = i;
          r !== null && console.error(
            "Expected currently replaying event to be null. This error is likely caused by a bug in React. Please file an issue."
          ), r = o, a.target.dispatchEvent(i), r === null && console.error(
            "Expected currently replaying event to not be null. This error is likely caused by a bug in React. Please file an issue."
          ), r = null;
        } else
          return t = Rl(a), t !== null && om(t), e.blockedOn = a, !1;
        t.shift();
      }
      return !0;
    }
    function fm(e, t, a) {
      mr(e) && a.delete(t);
    }
    function fv() {
      U0 = !1, cf !== null && mr(cf) && (cf = null), of !== null && mr(of) && (of = null), ff !== null && mr(ff) && (ff = null), op.forEach(fm), fp.forEach(fm);
    }
    function pr(e, t) {
      e.blockedOn === t && (e.blockedOn = null, U0 || (U0 = !0, kt.unstable_scheduleCallback(
        kt.unstable_NormalPriority,
        fv
      )));
    }
    function rv(e) {
      ug !== e && (ug = e, kt.unstable_scheduleCallback(
        kt.unstable_NormalPriority,
        function() {
          ug === e && (ug = null);
          for (var t = 0; t < e.length; t += 3) {
            var a = e[t], i = e[t + 1], o = e[t + 2];
            if (typeof i != "function") {
              if (Bo(i || a) === null)
                continue;
              break;
            }
            var f = Rl(a);
            f !== null && (e.splice(t, 3), t -= 3, a = {
              pending: !0,
              data: o,
              method: a.method,
              action: i
            }, Object.freeze(a), cc(
              f,
              a,
              i,
              o
            ));
          }
        }
      ));
    }
    function zc(e) {
      function t(v) {
        return pr(v, e);
      }
      cf !== null && pr(cf, e), of !== null && pr(of, e), ff !== null && pr(ff, e), op.forEach(t), fp.forEach(t);
      for (var a = 0; a < rf.length; a++) {
        var i = rf[a];
        i.blockedOn === e && (i.blockedOn = null);
      }
      for (; 0 < rf.length && (a = rf[0], a.blockedOn === null); )
        ov(a), a.blockedOn === null && rf.shift();
      if (a = (e.ownerDocument || e).$$reactFormReplay, a != null)
        for (i = 0; i < a.length; i += 3) {
          var o = a[i], f = a[i + 1], d = o[ma] || null;
          if (typeof f == "function")
            d || rv(a);
          else if (d) {
            var h = null;
            if (f && f.hasAttribute("formAction")) {
              if (o = f, d = f[ma] || null)
                h = d.formAction;
              else if (Bo(o) !== null) continue;
            } else h = d.action;
            typeof h == "function" ? a[i + 1] = h : (a.splice(i, 3), i -= 3), rv(a);
          }
        }
    }
    function Ud(e) {
      this._internalRoot = e;
    }
    function vr(e) {
      this._internalRoot = e;
    }
    function sv(e) {
      e[Ci] && (e._reactRootContainer ? console.error(
        "You are calling ReactDOMClient.createRoot() on a container that was previously passed to ReactDOM.render(). This is not supported."
      ) : console.error(
        "You are calling ReactDOMClient.createRoot() on a container that has already been passed to createRoot() before. Instead, call root.render() on the existing root instead if you want to update it."
      ));
    }
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(Error());
    var kt = $b(), gr = mp(), Og = Wb(), Ze = Object.assign, br = Symbol.for("react.element"), Di = Symbol.for("react.transitional.element"), Mc = Symbol.for("react.portal"), Ye = Symbol.for("react.fragment"), qo = Symbol.for("react.strict_mode"), Yo = Symbol.for("react.profiler"), rm = Symbol.for("react.provider"), _d = Symbol.for("react.consumer"), $a = Symbol.for("react.context"), Bu = Symbol.for("react.forward_ref"), jo = Symbol.for("react.suspense"), zi = Symbol.for("react.suspense_list"), Sr = Symbol.for("react.memo"), Ma = Symbol.for("react.lazy"), sm = Symbol.for("react.activity"), dv = Symbol.for("react.memo_cache_sentinel"), dm = Symbol.iterator, Cd = Symbol.for("react.client.reference"), He = Array.isArray, j = gr.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, Me = Og.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, Dg = Object.freeze({
      pending: !1,
      data: null,
      method: null,
      action: null
    }), Tr = [], Er = [], Wa = -1, qu = zt(null), Go = zt(null), eu = zt(null), Lo = zt(null), Yu = Object.prototype.hasOwnProperty, Hd = kt.unstable_scheduleCallback, zg = kt.unstable_cancelCallback, hv = kt.unstable_shouldYield, Mg = kt.unstable_requestPaint, tu = kt.unstable_now, Mi = kt.unstable_getCurrentPriorityLevel, xd = kt.unstable_ImmediatePriority, Ar = kt.unstable_UserBlockingPriority, Vo = kt.unstable_NormalPriority, Ug = kt.unstable_LowPriority, Rr = kt.unstable_IdlePriority, _g = kt.log, gn = kt.unstable_setDisableYieldValue, Ui = null, Hl = null, fe = null, ya = !1, $t = typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u", Ll = Math.clz32 ? Math.clz32 : Zc, Nd = Math.log, ju = Math.LN2, wd = 256, Bd = 4194304, xl = 2, bn = 8, Gu = 32, qd = 268435456, _i = Math.random().toString(36).slice(2), Vl = "__reactFiber$" + _i, ma = "__reactProps$" + _i, Ci = "__reactContainer$" + _i, hm = "__reactEvents$" + _i, yv = "__reactListeners$" + _i, Xo = "__reactHandles$" + _i, Qo = "__reactResources$" + _i, Zo = "__reactMarker$" + _i, mv = /* @__PURE__ */ new Set(), Fa = {}, Uc = {}, pv = {
      button: !0,
      checkbox: !0,
      image: !0,
      hidden: !0,
      radio: !0,
      reset: !0,
      submit: !0
    }, Yd = RegExp(
      "^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"
    ), jd = {}, Gd = {}, Hi = 0, ym, mm, vv, pm, Ko, gv, bv;
    an.__reactDisabledLog = !0;
    var vm, Or, Jo = !1, Dr = new (typeof WeakMap == "function" ? WeakMap : Map)(), Ua = null, pa = !1, Cg = /[\n"\\]/g, gm = !1, bm = !1, Sm = !1, Tm = !1, Ld = !1, Em = !1, zr = ["value", "defaultValue"], Sv = !1, Tv = /["'&<>\n\t]|^\s|\s$/, Am = "address applet area article aside base basefont bgsound blockquote body br button caption center col colgroup dd details dir div dl dt embed fieldset figcaption figure footer form frame frameset h1 h2 h3 h4 h5 h6 head header hgroup hr html iframe img input isindex li link listing main marquee menu menuitem meta nav noembed noframes noscript object ol p param plaintext pre script section select source style summary table tbody td template textarea tfoot th thead title tr track ul wbr xmp".split(
      " "
    ), Vd = "applet caption html table td th marquee object template foreignObject desc title".split(
      " "
    ), Xd = Vd.concat(["button"]), Rm = "dd dt li option optgroup p rp rt".split(" "), Om = {
      current: null,
      formTag: null,
      aTagInScope: null,
      buttonTagInScope: null,
      nobrTagInScope: null,
      pTagInButtonScope: null,
      listItemTagAutoclosing: null,
      dlItemTagAutoclosing: null,
      containerTagInScope: null,
      implicitRootScope: !1
    }, ko = {}, lu = {
      animation: "animationDelay animationDirection animationDuration animationFillMode animationIterationCount animationName animationPlayState animationTimingFunction".split(
        " "
      ),
      background: "backgroundAttachment backgroundClip backgroundColor backgroundImage backgroundOrigin backgroundPositionX backgroundPositionY backgroundRepeat backgroundSize".split(
        " "
      ),
      backgroundPosition: ["backgroundPositionX", "backgroundPositionY"],
      border: "borderBottomColor borderBottomStyle borderBottomWidth borderImageOutset borderImageRepeat borderImageSlice borderImageSource borderImageWidth borderLeftColor borderLeftStyle borderLeftWidth borderRightColor borderRightStyle borderRightWidth borderTopColor borderTopStyle borderTopWidth".split(
        " "
      ),
      borderBlockEnd: [
        "borderBlockEndColor",
        "borderBlockEndStyle",
        "borderBlockEndWidth"
      ],
      borderBlockStart: [
        "borderBlockStartColor",
        "borderBlockStartStyle",
        "borderBlockStartWidth"
      ],
      borderBottom: [
        "borderBottomColor",
        "borderBottomStyle",
        "borderBottomWidth"
      ],
      borderColor: [
        "borderBottomColor",
        "borderLeftColor",
        "borderRightColor",
        "borderTopColor"
      ],
      borderImage: [
        "borderImageOutset",
        "borderImageRepeat",
        "borderImageSlice",
        "borderImageSource",
        "borderImageWidth"
      ],
      borderInlineEnd: [
        "borderInlineEndColor",
        "borderInlineEndStyle",
        "borderInlineEndWidth"
      ],
      borderInlineStart: [
        "borderInlineStartColor",
        "borderInlineStartStyle",
        "borderInlineStartWidth"
      ],
      borderLeft: ["borderLeftColor", "borderLeftStyle", "borderLeftWidth"],
      borderRadius: [
        "borderBottomLeftRadius",
        "borderBottomRightRadius",
        "borderTopLeftRadius",
        "borderTopRightRadius"
      ],
      borderRight: [
        "borderRightColor",
        "borderRightStyle",
        "borderRightWidth"
      ],
      borderStyle: [
        "borderBottomStyle",
        "borderLeftStyle",
        "borderRightStyle",
        "borderTopStyle"
      ],
      borderTop: ["borderTopColor", "borderTopStyle", "borderTopWidth"],
      borderWidth: [
        "borderBottomWidth",
        "borderLeftWidth",
        "borderRightWidth",
        "borderTopWidth"
      ],
      columnRule: ["columnRuleColor", "columnRuleStyle", "columnRuleWidth"],
      columns: ["columnCount", "columnWidth"],
      flex: ["flexBasis", "flexGrow", "flexShrink"],
      flexFlow: ["flexDirection", "flexWrap"],
      font: "fontFamily fontFeatureSettings fontKerning fontLanguageOverride fontSize fontSizeAdjust fontStretch fontStyle fontVariant fontVariantAlternates fontVariantCaps fontVariantEastAsian fontVariantLigatures fontVariantNumeric fontVariantPosition fontWeight lineHeight".split(
        " "
      ),
      fontVariant: "fontVariantAlternates fontVariantCaps fontVariantEastAsian fontVariantLigatures fontVariantNumeric fontVariantPosition".split(
        " "
      ),
      gap: ["columnGap", "rowGap"],
      grid: "gridAutoColumns gridAutoFlow gridAutoRows gridTemplateAreas gridTemplateColumns gridTemplateRows".split(
        " "
      ),
      gridArea: [
        "gridColumnEnd",
        "gridColumnStart",
        "gridRowEnd",
        "gridRowStart"
      ],
      gridColumn: ["gridColumnEnd", "gridColumnStart"],
      gridColumnGap: ["columnGap"],
      gridGap: ["columnGap", "rowGap"],
      gridRow: ["gridRowEnd", "gridRowStart"],
      gridRowGap: ["rowGap"],
      gridTemplate: [
        "gridTemplateAreas",
        "gridTemplateColumns",
        "gridTemplateRows"
      ],
      listStyle: ["listStyleImage", "listStylePosition", "listStyleType"],
      margin: ["marginBottom", "marginLeft", "marginRight", "marginTop"],
      marker: ["markerEnd", "markerMid", "markerStart"],
      mask: "maskClip maskComposite maskImage maskMode maskOrigin maskPositionX maskPositionY maskRepeat maskSize".split(
        " "
      ),
      maskPosition: ["maskPositionX", "maskPositionY"],
      outline: ["outlineColor", "outlineStyle", "outlineWidth"],
      overflow: ["overflowX", "overflowY"],
      padding: ["paddingBottom", "paddingLeft", "paddingRight", "paddingTop"],
      placeContent: ["alignContent", "justifyContent"],
      placeItems: ["alignItems", "justifyItems"],
      placeSelf: ["alignSelf", "justifySelf"],
      textDecoration: [
        "textDecorationColor",
        "textDecorationLine",
        "textDecorationStyle"
      ],
      textEmphasis: ["textEmphasisColor", "textEmphasisStyle"],
      transition: [
        "transitionDelay",
        "transitionDuration",
        "transitionProperty",
        "transitionTimingFunction"
      ],
      wordWrap: ["overflowWrap"]
    }, Lu = /([A-Z])/g, Vu = /^ms-/, Mr = /^(?:webkit|moz|o)[A-Z]/, Ur = /^-ms-/, xi = /-(.)/g, Ev = /;\s*$/, _c = {}, Cc = {}, Av = !1, Dm = !1, _r = new Set(
      "animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(
        " "
      )
    ), Cr = "http://www.w3.org/1998/Math/MathML", $o = "http://www.w3.org/2000/svg", Qd = /* @__PURE__ */ new Map([
      ["acceptCharset", "accept-charset"],
      ["htmlFor", "for"],
      ["httpEquiv", "http-equiv"],
      ["crossOrigin", "crossorigin"],
      ["accentHeight", "accent-height"],
      ["alignmentBaseline", "alignment-baseline"],
      ["arabicForm", "arabic-form"],
      ["baselineShift", "baseline-shift"],
      ["capHeight", "cap-height"],
      ["clipPath", "clip-path"],
      ["clipRule", "clip-rule"],
      ["colorInterpolation", "color-interpolation"],
      ["colorInterpolationFilters", "color-interpolation-filters"],
      ["colorProfile", "color-profile"],
      ["colorRendering", "color-rendering"],
      ["dominantBaseline", "dominant-baseline"],
      ["enableBackground", "enable-background"],
      ["fillOpacity", "fill-opacity"],
      ["fillRule", "fill-rule"],
      ["floodColor", "flood-color"],
      ["floodOpacity", "flood-opacity"],
      ["fontFamily", "font-family"],
      ["fontSize", "font-size"],
      ["fontSizeAdjust", "font-size-adjust"],
      ["fontStretch", "font-stretch"],
      ["fontStyle", "font-style"],
      ["fontVariant", "font-variant"],
      ["fontWeight", "font-weight"],
      ["glyphName", "glyph-name"],
      ["glyphOrientationHorizontal", "glyph-orientation-horizontal"],
      ["glyphOrientationVertical", "glyph-orientation-vertical"],
      ["horizAdvX", "horiz-adv-x"],
      ["horizOriginX", "horiz-origin-x"],
      ["imageRendering", "image-rendering"],
      ["letterSpacing", "letter-spacing"],
      ["lightingColor", "lighting-color"],
      ["markerEnd", "marker-end"],
      ["markerMid", "marker-mid"],
      ["markerStart", "marker-start"],
      ["overlinePosition", "overline-position"],
      ["overlineThickness", "overline-thickness"],
      ["paintOrder", "paint-order"],
      ["panose-1", "panose-1"],
      ["pointerEvents", "pointer-events"],
      ["renderingIntent", "rendering-intent"],
      ["shapeRendering", "shape-rendering"],
      ["stopColor", "stop-color"],
      ["stopOpacity", "stop-opacity"],
      ["strikethroughPosition", "strikethrough-position"],
      ["strikethroughThickness", "strikethrough-thickness"],
      ["strokeDasharray", "stroke-dasharray"],
      ["strokeDashoffset", "stroke-dashoffset"],
      ["strokeLinecap", "stroke-linecap"],
      ["strokeLinejoin", "stroke-linejoin"],
      ["strokeMiterlimit", "stroke-miterlimit"],
      ["strokeOpacity", "stroke-opacity"],
      ["strokeWidth", "stroke-width"],
      ["textAnchor", "text-anchor"],
      ["textDecoration", "text-decoration"],
      ["textRendering", "text-rendering"],
      ["transformOrigin", "transform-origin"],
      ["underlinePosition", "underline-position"],
      ["underlineThickness", "underline-thickness"],
      ["unicodeBidi", "unicode-bidi"],
      ["unicodeRange", "unicode-range"],
      ["unitsPerEm", "units-per-em"],
      ["vAlphabetic", "v-alphabetic"],
      ["vHanging", "v-hanging"],
      ["vIdeographic", "v-ideographic"],
      ["vMathematical", "v-mathematical"],
      ["vectorEffect", "vector-effect"],
      ["vertAdvY", "vert-adv-y"],
      ["vertOriginX", "vert-origin-x"],
      ["vertOriginY", "vert-origin-y"],
      ["wordSpacing", "word-spacing"],
      ["writingMode", "writing-mode"],
      ["xmlnsXlink", "xmlns:xlink"],
      ["xHeight", "x-height"]
    ]), Hc = {
      accept: "accept",
      acceptcharset: "acceptCharset",
      "accept-charset": "acceptCharset",
      accesskey: "accessKey",
      action: "action",
      allowfullscreen: "allowFullScreen",
      alt: "alt",
      as: "as",
      async: "async",
      autocapitalize: "autoCapitalize",
      autocomplete: "autoComplete",
      autocorrect: "autoCorrect",
      autofocus: "autoFocus",
      autoplay: "autoPlay",
      autosave: "autoSave",
      capture: "capture",
      cellpadding: "cellPadding",
      cellspacing: "cellSpacing",
      challenge: "challenge",
      charset: "charSet",
      checked: "checked",
      children: "children",
      cite: "cite",
      class: "className",
      classid: "classID",
      classname: "className",
      cols: "cols",
      colspan: "colSpan",
      content: "content",
      contenteditable: "contentEditable",
      contextmenu: "contextMenu",
      controls: "controls",
      controlslist: "controlsList",
      coords: "coords",
      crossorigin: "crossOrigin",
      dangerouslysetinnerhtml: "dangerouslySetInnerHTML",
      data: "data",
      datetime: "dateTime",
      default: "default",
      defaultchecked: "defaultChecked",
      defaultvalue: "defaultValue",
      defer: "defer",
      dir: "dir",
      disabled: "disabled",
      disablepictureinpicture: "disablePictureInPicture",
      disableremoteplayback: "disableRemotePlayback",
      download: "download",
      draggable: "draggable",
      enctype: "encType",
      enterkeyhint: "enterKeyHint",
      fetchpriority: "fetchPriority",
      for: "htmlFor",
      form: "form",
      formmethod: "formMethod",
      formaction: "formAction",
      formenctype: "formEncType",
      formnovalidate: "formNoValidate",
      formtarget: "formTarget",
      frameborder: "frameBorder",
      headers: "headers",
      height: "height",
      hidden: "hidden",
      high: "high",
      href: "href",
      hreflang: "hrefLang",
      htmlfor: "htmlFor",
      httpequiv: "httpEquiv",
      "http-equiv": "httpEquiv",
      icon: "icon",
      id: "id",
      imagesizes: "imageSizes",
      imagesrcset: "imageSrcSet",
      inert: "inert",
      innerhtml: "innerHTML",
      inputmode: "inputMode",
      integrity: "integrity",
      is: "is",
      itemid: "itemID",
      itemprop: "itemProp",
      itemref: "itemRef",
      itemscope: "itemScope",
      itemtype: "itemType",
      keyparams: "keyParams",
      keytype: "keyType",
      kind: "kind",
      label: "label",
      lang: "lang",
      list: "list",
      loop: "loop",
      low: "low",
      manifest: "manifest",
      marginwidth: "marginWidth",
      marginheight: "marginHeight",
      max: "max",
      maxlength: "maxLength",
      media: "media",
      mediagroup: "mediaGroup",
      method: "method",
      min: "min",
      minlength: "minLength",
      multiple: "multiple",
      muted: "muted",
      name: "name",
      nomodule: "noModule",
      nonce: "nonce",
      novalidate: "noValidate",
      open: "open",
      optimum: "optimum",
      pattern: "pattern",
      placeholder: "placeholder",
      playsinline: "playsInline",
      poster: "poster",
      preload: "preload",
      profile: "profile",
      radiogroup: "radioGroup",
      readonly: "readOnly",
      referrerpolicy: "referrerPolicy",
      rel: "rel",
      required: "required",
      reversed: "reversed",
      role: "role",
      rows: "rows",
      rowspan: "rowSpan",
      sandbox: "sandbox",
      scope: "scope",
      scoped: "scoped",
      scrolling: "scrolling",
      seamless: "seamless",
      selected: "selected",
      shape: "shape",
      size: "size",
      sizes: "sizes",
      span: "span",
      spellcheck: "spellCheck",
      src: "src",
      srcdoc: "srcDoc",
      srclang: "srcLang",
      srcset: "srcSet",
      start: "start",
      step: "step",
      style: "style",
      summary: "summary",
      tabindex: "tabIndex",
      target: "target",
      title: "title",
      type: "type",
      usemap: "useMap",
      value: "value",
      width: "width",
      wmode: "wmode",
      wrap: "wrap",
      about: "about",
      accentheight: "accentHeight",
      "accent-height": "accentHeight",
      accumulate: "accumulate",
      additive: "additive",
      alignmentbaseline: "alignmentBaseline",
      "alignment-baseline": "alignmentBaseline",
      allowreorder: "allowReorder",
      alphabetic: "alphabetic",
      amplitude: "amplitude",
      arabicform: "arabicForm",
      "arabic-form": "arabicForm",
      ascent: "ascent",
      attributename: "attributeName",
      attributetype: "attributeType",
      autoreverse: "autoReverse",
      azimuth: "azimuth",
      basefrequency: "baseFrequency",
      baselineshift: "baselineShift",
      "baseline-shift": "baselineShift",
      baseprofile: "baseProfile",
      bbox: "bbox",
      begin: "begin",
      bias: "bias",
      by: "by",
      calcmode: "calcMode",
      capheight: "capHeight",
      "cap-height": "capHeight",
      clip: "clip",
      clippath: "clipPath",
      "clip-path": "clipPath",
      clippathunits: "clipPathUnits",
      cliprule: "clipRule",
      "clip-rule": "clipRule",
      color: "color",
      colorinterpolation: "colorInterpolation",
      "color-interpolation": "colorInterpolation",
      colorinterpolationfilters: "colorInterpolationFilters",
      "color-interpolation-filters": "colorInterpolationFilters",
      colorprofile: "colorProfile",
      "color-profile": "colorProfile",
      colorrendering: "colorRendering",
      "color-rendering": "colorRendering",
      contentscripttype: "contentScriptType",
      contentstyletype: "contentStyleType",
      cursor: "cursor",
      cx: "cx",
      cy: "cy",
      d: "d",
      datatype: "datatype",
      decelerate: "decelerate",
      descent: "descent",
      diffuseconstant: "diffuseConstant",
      direction: "direction",
      display: "display",
      divisor: "divisor",
      dominantbaseline: "dominantBaseline",
      "dominant-baseline": "dominantBaseline",
      dur: "dur",
      dx: "dx",
      dy: "dy",
      edgemode: "edgeMode",
      elevation: "elevation",
      enablebackground: "enableBackground",
      "enable-background": "enableBackground",
      end: "end",
      exponent: "exponent",
      externalresourcesrequired: "externalResourcesRequired",
      fill: "fill",
      fillopacity: "fillOpacity",
      "fill-opacity": "fillOpacity",
      fillrule: "fillRule",
      "fill-rule": "fillRule",
      filter: "filter",
      filterres: "filterRes",
      filterunits: "filterUnits",
      floodopacity: "floodOpacity",
      "flood-opacity": "floodOpacity",
      floodcolor: "floodColor",
      "flood-color": "floodColor",
      focusable: "focusable",
      fontfamily: "fontFamily",
      "font-family": "fontFamily",
      fontsize: "fontSize",
      "font-size": "fontSize",
      fontsizeadjust: "fontSizeAdjust",
      "font-size-adjust": "fontSizeAdjust",
      fontstretch: "fontStretch",
      "font-stretch": "fontStretch",
      fontstyle: "fontStyle",
      "font-style": "fontStyle",
      fontvariant: "fontVariant",
      "font-variant": "fontVariant",
      fontweight: "fontWeight",
      "font-weight": "fontWeight",
      format: "format",
      from: "from",
      fx: "fx",
      fy: "fy",
      g1: "g1",
      g2: "g2",
      glyphname: "glyphName",
      "glyph-name": "glyphName",
      glyphorientationhorizontal: "glyphOrientationHorizontal",
      "glyph-orientation-horizontal": "glyphOrientationHorizontal",
      glyphorientationvertical: "glyphOrientationVertical",
      "glyph-orientation-vertical": "glyphOrientationVertical",
      glyphref: "glyphRef",
      gradienttransform: "gradientTransform",
      gradientunits: "gradientUnits",
      hanging: "hanging",
      horizadvx: "horizAdvX",
      "horiz-adv-x": "horizAdvX",
      horizoriginx: "horizOriginX",
      "horiz-origin-x": "horizOriginX",
      ideographic: "ideographic",
      imagerendering: "imageRendering",
      "image-rendering": "imageRendering",
      in2: "in2",
      in: "in",
      inlist: "inlist",
      intercept: "intercept",
      k1: "k1",
      k2: "k2",
      k3: "k3",
      k4: "k4",
      k: "k",
      kernelmatrix: "kernelMatrix",
      kernelunitlength: "kernelUnitLength",
      kerning: "kerning",
      keypoints: "keyPoints",
      keysplines: "keySplines",
      keytimes: "keyTimes",
      lengthadjust: "lengthAdjust",
      letterspacing: "letterSpacing",
      "letter-spacing": "letterSpacing",
      lightingcolor: "lightingColor",
      "lighting-color": "lightingColor",
      limitingconeangle: "limitingConeAngle",
      local: "local",
      markerend: "markerEnd",
      "marker-end": "markerEnd",
      markerheight: "markerHeight",
      markermid: "markerMid",
      "marker-mid": "markerMid",
      markerstart: "markerStart",
      "marker-start": "markerStart",
      markerunits: "markerUnits",
      markerwidth: "markerWidth",
      mask: "mask",
      maskcontentunits: "maskContentUnits",
      maskunits: "maskUnits",
      mathematical: "mathematical",
      mode: "mode",
      numoctaves: "numOctaves",
      offset: "offset",
      opacity: "opacity",
      operator: "operator",
      order: "order",
      orient: "orient",
      orientation: "orientation",
      origin: "origin",
      overflow: "overflow",
      overlineposition: "overlinePosition",
      "overline-position": "overlinePosition",
      overlinethickness: "overlineThickness",
      "overline-thickness": "overlineThickness",
      paintorder: "paintOrder",
      "paint-order": "paintOrder",
      panose1: "panose1",
      "panose-1": "panose1",
      pathlength: "pathLength",
      patterncontentunits: "patternContentUnits",
      patterntransform: "patternTransform",
      patternunits: "patternUnits",
      pointerevents: "pointerEvents",
      "pointer-events": "pointerEvents",
      points: "points",
      pointsatx: "pointsAtX",
      pointsaty: "pointsAtY",
      pointsatz: "pointsAtZ",
      popover: "popover",
      popovertarget: "popoverTarget",
      popovertargetaction: "popoverTargetAction",
      prefix: "prefix",
      preservealpha: "preserveAlpha",
      preserveaspectratio: "preserveAspectRatio",
      primitiveunits: "primitiveUnits",
      property: "property",
      r: "r",
      radius: "radius",
      refx: "refX",
      refy: "refY",
      renderingintent: "renderingIntent",
      "rendering-intent": "renderingIntent",
      repeatcount: "repeatCount",
      repeatdur: "repeatDur",
      requiredextensions: "requiredExtensions",
      requiredfeatures: "requiredFeatures",
      resource: "resource",
      restart: "restart",
      result: "result",
      results: "results",
      rotate: "rotate",
      rx: "rx",
      ry: "ry",
      scale: "scale",
      security: "security",
      seed: "seed",
      shaperendering: "shapeRendering",
      "shape-rendering": "shapeRendering",
      slope: "slope",
      spacing: "spacing",
      specularconstant: "specularConstant",
      specularexponent: "specularExponent",
      speed: "speed",
      spreadmethod: "spreadMethod",
      startoffset: "startOffset",
      stddeviation: "stdDeviation",
      stemh: "stemh",
      stemv: "stemv",
      stitchtiles: "stitchTiles",
      stopcolor: "stopColor",
      "stop-color": "stopColor",
      stopopacity: "stopOpacity",
      "stop-opacity": "stopOpacity",
      strikethroughposition: "strikethroughPosition",
      "strikethrough-position": "strikethroughPosition",
      strikethroughthickness: "strikethroughThickness",
      "strikethrough-thickness": "strikethroughThickness",
      string: "string",
      stroke: "stroke",
      strokedasharray: "strokeDasharray",
      "stroke-dasharray": "strokeDasharray",
      strokedashoffset: "strokeDashoffset",
      "stroke-dashoffset": "strokeDashoffset",
      strokelinecap: "strokeLinecap",
      "stroke-linecap": "strokeLinecap",
      strokelinejoin: "strokeLinejoin",
      "stroke-linejoin": "strokeLinejoin",
      strokemiterlimit: "strokeMiterlimit",
      "stroke-miterlimit": "strokeMiterlimit",
      strokewidth: "strokeWidth",
      "stroke-width": "strokeWidth",
      strokeopacity: "strokeOpacity",
      "stroke-opacity": "strokeOpacity",
      suppresscontenteditablewarning: "suppressContentEditableWarning",
      suppresshydrationwarning: "suppressHydrationWarning",
      surfacescale: "surfaceScale",
      systemlanguage: "systemLanguage",
      tablevalues: "tableValues",
      targetx: "targetX",
      targety: "targetY",
      textanchor: "textAnchor",
      "text-anchor": "textAnchor",
      textdecoration: "textDecoration",
      "text-decoration": "textDecoration",
      textlength: "textLength",
      textrendering: "textRendering",
      "text-rendering": "textRendering",
      to: "to",
      transform: "transform",
      transformorigin: "transformOrigin",
      "transform-origin": "transformOrigin",
      typeof: "typeof",
      u1: "u1",
      u2: "u2",
      underlineposition: "underlinePosition",
      "underline-position": "underlinePosition",
      underlinethickness: "underlineThickness",
      "underline-thickness": "underlineThickness",
      unicode: "unicode",
      unicodebidi: "unicodeBidi",
      "unicode-bidi": "unicodeBidi",
      unicoderange: "unicodeRange",
      "unicode-range": "unicodeRange",
      unitsperem: "unitsPerEm",
      "units-per-em": "unitsPerEm",
      unselectable: "unselectable",
      valphabetic: "vAlphabetic",
      "v-alphabetic": "vAlphabetic",
      values: "values",
      vectoreffect: "vectorEffect",
      "vector-effect": "vectorEffect",
      version: "version",
      vertadvy: "vertAdvY",
      "vert-adv-y": "vertAdvY",
      vertoriginx: "vertOriginX",
      "vert-origin-x": "vertOriginX",
      vertoriginy: "vertOriginY",
      "vert-origin-y": "vertOriginY",
      vhanging: "vHanging",
      "v-hanging": "vHanging",
      videographic: "vIdeographic",
      "v-ideographic": "vIdeographic",
      viewbox: "viewBox",
      viewtarget: "viewTarget",
      visibility: "visibility",
      vmathematical: "vMathematical",
      "v-mathematical": "vMathematical",
      vocab: "vocab",
      widths: "widths",
      wordspacing: "wordSpacing",
      "word-spacing": "wordSpacing",
      writingmode: "writingMode",
      "writing-mode": "writingMode",
      x1: "x1",
      x2: "x2",
      x: "x",
      xchannelselector: "xChannelSelector",
      xheight: "xHeight",
      "x-height": "xHeight",
      xlinkactuate: "xlinkActuate",
      "xlink:actuate": "xlinkActuate",
      xlinkarcrole: "xlinkArcrole",
      "xlink:arcrole": "xlinkArcrole",
      xlinkhref: "xlinkHref",
      "xlink:href": "xlinkHref",
      xlinkrole: "xlinkRole",
      "xlink:role": "xlinkRole",
      xlinkshow: "xlinkShow",
      "xlink:show": "xlinkShow",
      xlinktitle: "xlinkTitle",
      "xlink:title": "xlinkTitle",
      xlinktype: "xlinkType",
      "xlink:type": "xlinkType",
      xmlbase: "xmlBase",
      "xml:base": "xmlBase",
      xmllang: "xmlLang",
      "xml:lang": "xmlLang",
      xmlns: "xmlns",
      "xml:space": "xmlSpace",
      xmlnsxlink: "xmlnsXlink",
      "xmlns:xlink": "xmlnsXlink",
      xmlspace: "xmlSpace",
      y1: "y1",
      y2: "y2",
      y: "y",
      ychannelselector: "yChannelSelector",
      z: "z",
      zoomandpan: "zoomAndPan"
    }, zm = {
      "aria-current": 0,
      "aria-description": 0,
      "aria-details": 0,
      "aria-disabled": 0,
      "aria-hidden": 0,
      "aria-invalid": 0,
      "aria-keyshortcuts": 0,
      "aria-label": 0,
      "aria-roledescription": 0,
      "aria-autocomplete": 0,
      "aria-checked": 0,
      "aria-expanded": 0,
      "aria-haspopup": 0,
      "aria-level": 0,
      "aria-modal": 0,
      "aria-multiline": 0,
      "aria-multiselectable": 0,
      "aria-orientation": 0,
      "aria-placeholder": 0,
      "aria-pressed": 0,
      "aria-readonly": 0,
      "aria-required": 0,
      "aria-selected": 0,
      "aria-sort": 0,
      "aria-valuemax": 0,
      "aria-valuemin": 0,
      "aria-valuenow": 0,
      "aria-valuetext": 0,
      "aria-atomic": 0,
      "aria-busy": 0,
      "aria-live": 0,
      "aria-relevant": 0,
      "aria-dropeffect": 0,
      "aria-grabbed": 0,
      "aria-activedescendant": 0,
      "aria-colcount": 0,
      "aria-colindex": 0,
      "aria-colspan": 0,
      "aria-controls": 0,
      "aria-describedby": 0,
      "aria-errormessage": 0,
      "aria-flowto": 0,
      "aria-labelledby": 0,
      "aria-owns": 0,
      "aria-posinset": 0,
      "aria-rowcount": 0,
      "aria-rowindex": 0,
      "aria-rowspan": 0,
      "aria-setsize": 0
    }, au = {}, Mm = RegExp(
      "^(aria)-[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"
    ), Zd = RegExp(
      "^(aria)[A-Z][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"
    ), Um = !1, Fl = {}, Hr = /^on./, l = /^on[^A-Z]/, n = RegExp(
      "^(aria)-[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"
    ), u = RegExp(
      "^(aria)[A-Z][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"
    ), c = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i, r = null, s = null, y = null, p = !1, S = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), C = !1;
    if (S)
      try {
        var Q = {};
        Object.defineProperty(Q, "passive", {
          get: function() {
            C = !0;
          }
        }), window.addEventListener("test", Q, Q), window.removeEventListener("test", Q, Q);
      } catch {
        C = !1;
      }
    var $ = null, N = null, q = null, Te = {
      eventPhase: 0,
      bubbles: 0,
      cancelable: 0,
      timeStamp: function(e) {
        return e.timeStamp || Date.now();
      },
      defaultPrevented: 0,
      isTrusted: 0
    }, Ee = Dl(Te), ht = Ze({}, Te, { view: 0, detail: 0 }), M = Dl(ht), R, _, k, se = Ze({}, ht, {
      screenX: 0,
      screenY: 0,
      clientX: 0,
      clientY: 0,
      pageX: 0,
      pageY: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      getModifierState: rs,
      button: 0,
      buttons: 0,
      relatedTarget: function(e) {
        return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
      },
      movementX: function(e) {
        return "movementX" in e ? e.movementX : (e !== k && (k && e.type === "mousemove" ? (R = e.screenX - k.screenX, _ = e.screenY - k.screenY) : _ = R = 0, k = e), R);
      },
      movementY: function(e) {
        return "movementY" in e ? e.movementY : _;
      }
    }), Je = Dl(se), be = Ze({}, se, { dataTransfer: 0 }), Oe = Dl(be), bl = Ze({}, ht, { relatedTarget: 0 }), it = Dl(bl), Ni = Ze({}, Te, {
      animationName: 0,
      elapsedTime: 0,
      pseudoElement: 0
    }), Hg = Dl(Ni), Pb = Ze({}, Te, {
      clipboardData: function(e) {
        return "clipboardData" in e ? e.clipboardData : window.clipboardData;
      }
    }), eS = Dl(Pb), tS = Ze({}, Te, { data: 0 }), H0 = Dl(
      tS
    ), lS = H0, aS = {
      Esc: "Escape",
      Spacebar: " ",
      Left: "ArrowLeft",
      Up: "ArrowUp",
      Right: "ArrowRight",
      Down: "ArrowDown",
      Del: "Delete",
      Win: "OS",
      Menu: "ContextMenu",
      Apps: "ContextMenu",
      Scroll: "ScrollLock",
      MozPrintableKey: "Unidentified"
    }, nS = {
      8: "Backspace",
      9: "Tab",
      12: "Clear",
      13: "Enter",
      16: "Shift",
      17: "Control",
      18: "Alt",
      19: "Pause",
      20: "CapsLock",
      27: "Escape",
      32: " ",
      33: "PageUp",
      34: "PageDown",
      35: "End",
      36: "Home",
      37: "ArrowLeft",
      38: "ArrowUp",
      39: "ArrowRight",
      40: "ArrowDown",
      45: "Insert",
      46: "Delete",
      112: "F1",
      113: "F2",
      114: "F3",
      115: "F4",
      116: "F5",
      117: "F6",
      118: "F7",
      119: "F8",
      120: "F9",
      121: "F10",
      122: "F11",
      123: "F12",
      144: "NumLock",
      145: "ScrollLock",
      224: "Meta"
    }, uS = {
      Alt: "altKey",
      Control: "ctrlKey",
      Meta: "metaKey",
      Shift: "shiftKey"
    }, iS = Ze({}, ht, {
      key: function(e) {
        if (e.key) {
          var t = aS[e.key] || e.key;
          if (t !== "Unidentified") return t;
        }
        return e.type === "keypress" ? (e = to(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? nS[e.keyCode] || "Unidentified" : "";
      },
      code: 0,
      location: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      repeat: 0,
      locale: 0,
      getModifierState: rs,
      charCode: function(e) {
        return e.type === "keypress" ? to(e) : 0;
      },
      keyCode: function(e) {
        return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
      },
      which: function(e) {
        return e.type === "keypress" ? to(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
      }
    }), cS = Dl(iS), oS = Ze({}, se, {
      pointerId: 0,
      width: 0,
      height: 0,
      pressure: 0,
      tangentialPressure: 0,
      tiltX: 0,
      tiltY: 0,
      twist: 0,
      pointerType: 0,
      isPrimary: 0
    }), x0 = Dl(oS), fS = Ze({}, ht, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: rs
    }), rS = Dl(fS), sS = Ze({}, Te, {
      propertyName: 0,
      elapsedTime: 0,
      pseudoElement: 0
    }), dS = Dl(sS), hS = Ze({}, se, {
      deltaX: function(e) {
        return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
      },
      deltaY: function(e) {
        return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
      },
      deltaZ: 0,
      deltaMode: 0
    }), yS = Dl(hS), mS = Ze({}, Te, {
      newState: 0,
      oldState: 0
    }), pS = Dl(mS), vS = [9, 13, 27, 32], N0 = 229, xg = S && "CompositionEvent" in window, _m = null;
    S && "documentMode" in document && (_m = document.documentMode);
    var gS = S && "TextEvent" in window && !_m, w0 = S && (!xg || _m && 8 < _m && 11 >= _m), B0 = 32, q0 = String.fromCharCode(B0), Y0 = !1, Kd = !1, bS = {
      color: !0,
      date: !0,
      datetime: !0,
      "datetime-local": !0,
      email: !0,
      month: !0,
      number: !0,
      password: !0,
      range: !0,
      search: !0,
      tel: !0,
      text: !0,
      time: !0,
      url: !0,
      week: !0
    }, Cm = null, Hm = null, j0 = !1;
    S && (j0 = _h("input") && (!document.documentMode || 9 < document.documentMode));
    var _a = typeof Object.is == "function" ? Object.is : gg, SS = S && "documentMode" in document && 11 >= document.documentMode, Jd = null, Ng = null, xm = null, wg = !1, kd = {
      animationend: Su("Animation", "AnimationEnd"),
      animationiteration: Su("Animation", "AnimationIteration"),
      animationstart: Su("Animation", "AnimationStart"),
      transitionrun: Su("Transition", "TransitionRun"),
      transitionstart: Su("Transition", "TransitionStart"),
      transitioncancel: Su("Transition", "TransitionCancel"),
      transitionend: Su("Transition", "TransitionEnd")
    }, Bg = {}, G0 = {};
    S && (G0 = document.createElement("div").style, "AnimationEvent" in window || (delete kd.animationend.animation, delete kd.animationiteration.animation, delete kd.animationstart.animation), "TransitionEvent" in window || delete kd.transitionend.transition);
    var L0 = Wi("animationend"), V0 = Wi("animationiteration"), X0 = Wi("animationstart"), TS = Wi("transitionrun"), ES = Wi("transitionstart"), AS = Wi("transitioncancel"), Q0 = Wi("transitionend"), Z0 = /* @__PURE__ */ new Map(), qg = "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
      " "
    );
    qg.push("scrollEnd");
    var Yg = /* @__PURE__ */ new WeakMap(), Rv = 1, xc = 2, nu = [], $d = 0, jg = 0, Wo = {};
    Object.freeze(Wo);
    var uu = null, Wd = null, Bt = 0, RS = 1, Il = 2, va = 8, Xu = 16, K0 = 64, J0 = !1;
    try {
      var k0 = Object.preventExtensions({});
    } catch {
      J0 = !0;
    }
    var Fd = [], Id = 0, Ov = null, Dv = 0, iu = [], cu = 0, xr = null, Nc = 1, wc = "", Ca = null, ll = null, yt = !1, Bc = !1, ou = null, Nr = null, wi = !1, Gg = Error(
      "Hydration Mismatch Exception: This is not a real error, and should not leak into userspace. If you're seeing this, it's likely a bug in React."
    ), $0 = 0;
    if (typeof performance == "object" && typeof performance.now == "function")
      var OS = performance, W0 = function() {
        return OS.now();
      };
    else {
      var DS = Date;
      W0 = function() {
        return DS.now();
      };
    }
    var Lg = zt(null), Vg = zt(null), F0 = {}, zv = null, Pd = null, eh = !1, zS = typeof AbortController < "u" ? AbortController : function() {
      var e = [], t = this.signal = {
        aborted: !1,
        addEventListener: function(a, i) {
          e.push(i);
        }
      };
      this.abort = function() {
        t.aborted = !0, e.forEach(function(a) {
          return a();
        });
      };
    }, MS = kt.unstable_scheduleCallback, US = kt.unstable_NormalPriority, Nl = {
      $$typeof: $a,
      Consumer: null,
      Provider: null,
      _currentValue: null,
      _currentValue2: null,
      _threadCount: 0,
      _currentRenderer: null,
      _currentRenderer2: null
    }, th = kt.unstable_now, I0 = -0, Mv = -0, Ia = -1.1, wr = -0, Uv = !1, _v = !1, Nm = null, Xg = 0, Br = 0, lh = null, P0 = j.S;
    j.S = function(e, t) {
      typeof t == "object" && t !== null && typeof t.then == "function" && Np(e, t), P0 !== null && P0(e, t);
    };
    var qr = zt(null), Qu = {
      recordUnsafeLifecycleWarnings: function() {
      },
      flushPendingUnsafeLifecycleWarnings: function() {
      },
      recordLegacyContextWarning: function() {
      },
      flushLegacyContextWarning: function() {
      },
      discardPendingWarnings: function() {
      }
    }, wm = [], Bm = [], qm = [], Ym = [], jm = [], Gm = [], Yr = /* @__PURE__ */ new Set();
    Qu.recordUnsafeLifecycleWarnings = function(e, t) {
      Yr.has(e.type) || (typeof t.componentWillMount == "function" && t.componentWillMount.__suppressDeprecationWarning !== !0 && wm.push(e), e.mode & va && typeof t.UNSAFE_componentWillMount == "function" && Bm.push(e), typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps.__suppressDeprecationWarning !== !0 && qm.push(e), e.mode & va && typeof t.UNSAFE_componentWillReceiveProps == "function" && Ym.push(e), typeof t.componentWillUpdate == "function" && t.componentWillUpdate.__suppressDeprecationWarning !== !0 && jm.push(e), e.mode & va && typeof t.UNSAFE_componentWillUpdate == "function" && Gm.push(e));
    }, Qu.flushPendingUnsafeLifecycleWarnings = function() {
      var e = /* @__PURE__ */ new Set();
      0 < wm.length && (wm.forEach(function(h) {
        e.add(
          de(h) || "Component"
        ), Yr.add(h.type);
      }), wm = []);
      var t = /* @__PURE__ */ new Set();
      0 < Bm.length && (Bm.forEach(function(h) {
        t.add(
          de(h) || "Component"
        ), Yr.add(h.type);
      }), Bm = []);
      var a = /* @__PURE__ */ new Set();
      0 < qm.length && (qm.forEach(function(h) {
        a.add(
          de(h) || "Component"
        ), Yr.add(h.type);
      }), qm = []);
      var i = /* @__PURE__ */ new Set();
      0 < Ym.length && (Ym.forEach(
        function(h) {
          i.add(
            de(h) || "Component"
          ), Yr.add(h.type);
        }
      ), Ym = []);
      var o = /* @__PURE__ */ new Set();
      0 < jm.length && (jm.forEach(function(h) {
        o.add(
          de(h) || "Component"
        ), Yr.add(h.type);
      }), jm = []);
      var f = /* @__PURE__ */ new Set();
      if (0 < Gm.length && (Gm.forEach(function(h) {
        f.add(
          de(h) || "Component"
        ), Yr.add(h.type);
      }), Gm = []), 0 < t.size) {
        var d = K(
          t
        );
        console.error(
          `Using UNSAFE_componentWillMount in strict mode is not recommended and may indicate bugs in your code. See https://react.dev/link/unsafe-component-lifecycles for details.

* Move code with side effects to componentDidMount, and set initial state in the constructor.

Please update the following components: %s`,
          d
        );
      }
      0 < i.size && (d = K(
        i
      ), console.error(
        `Using UNSAFE_componentWillReceiveProps in strict mode is not recommended and may indicate bugs in your code. See https://react.dev/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* If you're updating state whenever props change, refactor your code to use memoization techniques or move it to static getDerivedStateFromProps. Learn more at: https://react.dev/link/derived-state

Please update the following components: %s`,
        d
      )), 0 < f.size && (d = K(
        f
      ), console.error(
        `Using UNSAFE_componentWillUpdate in strict mode is not recommended and may indicate bugs in your code. See https://react.dev/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.

Please update the following components: %s`,
        d
      )), 0 < e.size && (d = K(e), console.warn(
        `componentWillMount has been renamed, and is not recommended for use. See https://react.dev/link/unsafe-component-lifecycles for details.

* Move code with side effects to componentDidMount, and set initial state in the constructor.
* Rename componentWillMount to UNSAFE_componentWillMount to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`,
        d
      )), 0 < a.size && (d = K(
        a
      ), console.warn(
        `componentWillReceiveProps has been renamed, and is not recommended for use. See https://react.dev/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* If you're updating state whenever props change, refactor your code to use memoization techniques or move it to static getDerivedStateFromProps. Learn more at: https://react.dev/link/derived-state
* Rename componentWillReceiveProps to UNSAFE_componentWillReceiveProps to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`,
        d
      )), 0 < o.size && (d = K(o), console.warn(
        `componentWillUpdate has been renamed, and is not recommended for use. See https://react.dev/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* Rename componentWillUpdate to UNSAFE_componentWillUpdate to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`,
        d
      ));
    };
    var Cv = /* @__PURE__ */ new Map(), e1 = /* @__PURE__ */ new Set();
    Qu.recordLegacyContextWarning = function(e, t) {
      for (var a = null, i = e; i !== null; )
        i.mode & va && (a = i), i = i.return;
      a === null ? console.error(
        "Expected to find a StrictMode component in a strict mode tree. This error is likely caused by a bug in React. Please file an issue."
      ) : !e1.has(e.type) && (i = Cv.get(a), e.type.contextTypes != null || e.type.childContextTypes != null || t !== null && typeof t.getChildContext == "function") && (i === void 0 && (i = [], Cv.set(a, i)), i.push(e));
    }, Qu.flushLegacyContextWarning = function() {
      Cv.forEach(function(e) {
        if (e.length !== 0) {
          var t = e[0], a = /* @__PURE__ */ new Set();
          e.forEach(function(o) {
            a.add(de(o) || "Component"), e1.add(o.type);
          });
          var i = K(a);
          he(t, function() {
            console.error(
              `Legacy context API has been detected within a strict-mode tree.

The old API will be supported in all 16.x releases, but applications using it should migrate to the new version.

Please update the following components: %s

Learn more about this warning here: https://react.dev/link/legacy-context`,
              i
            );
          });
        }
      });
    }, Qu.discardPendingWarnings = function() {
      wm = [], Bm = [], qm = [], Ym = [], jm = [], Gm = [], Cv = /* @__PURE__ */ new Map();
    };
    var Lm = Error(
      "Suspense Exception: This is not a real error! It's an implementation detail of `use` to interrupt the current render. You must either rethrow it immediately, or move the `use` call outside of the `try/catch` block. Capturing without rethrowing will lead to unexpected behavior.\n\nTo handle async errors, wrap your component in an error boundary, or call the promise's `.catch` method and pass the result to `use`."
    ), t1 = Error(
      "Suspense Exception: This is not a real error, and should not leak into userspace. If you're seeing this, it's likely a bug in React."
    ), Hv = Error(
      "Suspense Exception: This is not a real error! It's an implementation detail of `useActionState` to interrupt the current render. You must either rethrow it immediately, or move the `useActionState` call outside of the `try/catch` block. Capturing without rethrowing will lead to unexpected behavior.\n\nTo handle async errors, wrap your component in an error boundary."
    ), Qg = {
      then: function() {
        console.error(
          'Internal React error: A listener was unexpectedly attached to a "noop" thenable. This is a bug in React. Please file an issue.'
        );
      }
    }, Vm = null, xv = !1, fu = 0, ru = 1, Ha = 2, Pl = 4, wl = 8, l1 = 0, a1 = 1, n1 = 2, Zg = 3, Fo = !1, u1 = !1, Kg = null, Jg = !1, ah = zt(null), Nv = zt(0), nh, i1 = /* @__PURE__ */ new Set(), c1 = /* @__PURE__ */ new Set(), kg = /* @__PURE__ */ new Set(), o1 = /* @__PURE__ */ new Set(), Io = 0, xe = null, Ut = null, Sl = null, wv = !1, uh = !1, jr = !1, Bv = 0, Xm = 0, qc = null, _S = 0, CS = 25, G = null, su = null, Yc = -1, Qm = !1, qv = {
      readContext: _t,
      use: Nn,
      useCallback: jt,
      useContext: jt,
      useEffect: jt,
      useImperativeHandle: jt,
      useLayoutEffect: jt,
      useInsertionEffect: jt,
      useMemo: jt,
      useReducer: jt,
      useRef: jt,
      useState: jt,
      useDebugValue: jt,
      useDeferredValue: jt,
      useTransition: jt,
      useSyncExternalStore: jt,
      useId: jt,
      useHostTransitionStatus: jt,
      useFormState: jt,
      useActionState: jt,
      useOptimistic: jt,
      useMemoCache: jt,
      useCacheRefresh: jt
    }, $g = null, f1 = null, Wg = null, r1 = null, Bi = null, Zu = null, Yv = null;
    $g = {
      readContext: function(e) {
        return _t(e);
      },
      use: Nn,
      useCallback: function(e, t) {
        return G = "useCallback", Ke(), ja(t), jf(e, t);
      },
      useContext: function(e) {
        return G = "useContext", Ke(), _t(e);
      },
      useEffect: function(e, t) {
        return G = "useEffect", Ke(), ja(t), Rs(e, t);
      },
      useImperativeHandle: function(e, t, a) {
        return G = "useImperativeHandle", Ke(), ja(a), Ds(e, t, a);
      },
      useInsertionEffect: function(e, t) {
        G = "useInsertionEffect", Ke(), ja(t), Xa(4, Ha, e, t);
      },
      useLayoutEffect: function(e, t) {
        return G = "useLayoutEffect", Ke(), ja(t), Os(e, t);
      },
      useMemo: function(e, t) {
        G = "useMemo", Ke(), ja(t);
        var a = j.H;
        j.H = Bi;
        try {
          return zs(e, t);
        } finally {
          j.H = a;
        }
      },
      useReducer: function(e, t, a) {
        G = "useReducer", Ke();
        var i = j.H;
        j.H = Bi;
        try {
          return ft(e, t, a);
        } finally {
          j.H = i;
        }
      },
      useRef: function(e) {
        return G = "useRef", Ke(), Yf(e);
      },
      useState: function(e) {
        G = "useState", Ke();
        var t = j.H;
        j.H = Bi;
        try {
          return Ou(e);
        } finally {
          j.H = t;
        }
      },
      useDebugValue: function() {
        G = "useDebugValue", Ke();
      },
      useDeferredValue: function(e, t) {
        return G = "useDeferredValue", Ke(), Ms(e, t);
      },
      useTransition: function() {
        return G = "useTransition", Ke(), Yn();
      },
      useSyncExternalStore: function(e, t, a) {
        return G = "useSyncExternalStore", Ke(), Ru(
          e,
          t,
          a
        );
      },
      useId: function() {
        return G = "useId", Ke(), jn();
      },
      useFormState: function(e, t) {
        return G = "useFormState", Ke(), co(), yo(e, t);
      },
      useActionState: function(e, t) {
        return G = "useActionState", Ke(), yo(e, t);
      },
      useOptimistic: function(e) {
        return G = "useOptimistic", Ke(), hn(e);
      },
      useHostTransitionStatus: ca,
      useMemoCache: Ft,
      useCacheRefresh: function() {
        return G = "useCacheRefresh", Ke(), oc();
      }
    }, f1 = {
      readContext: function(e) {
        return _t(e);
      },
      use: Nn,
      useCallback: function(e, t) {
        return G = "useCallback", ee(), jf(e, t);
      },
      useContext: function(e) {
        return G = "useContext", ee(), _t(e);
      },
      useEffect: function(e, t) {
        return G = "useEffect", ee(), Rs(e, t);
      },
      useImperativeHandle: function(e, t, a) {
        return G = "useImperativeHandle", ee(), Ds(e, t, a);
      },
      useInsertionEffect: function(e, t) {
        G = "useInsertionEffect", ee(), Xa(4, Ha, e, t);
      },
      useLayoutEffect: function(e, t) {
        return G = "useLayoutEffect", ee(), Os(e, t);
      },
      useMemo: function(e, t) {
        G = "useMemo", ee();
        var a = j.H;
        j.H = Bi;
        try {
          return zs(e, t);
        } finally {
          j.H = a;
        }
      },
      useReducer: function(e, t, a) {
        G = "useReducer", ee();
        var i = j.H;
        j.H = Bi;
        try {
          return ft(e, t, a);
        } finally {
          j.H = i;
        }
      },
      useRef: function(e) {
        return G = "useRef", ee(), Yf(e);
      },
      useState: function(e) {
        G = "useState", ee();
        var t = j.H;
        j.H = Bi;
        try {
          return Ou(e);
        } finally {
          j.H = t;
        }
      },
      useDebugValue: function() {
        G = "useDebugValue", ee();
      },
      useDeferredValue: function(e, t) {
        return G = "useDeferredValue", ee(), Ms(e, t);
      },
      useTransition: function() {
        return G = "useTransition", ee(), Yn();
      },
      useSyncExternalStore: function(e, t, a) {
        return G = "useSyncExternalStore", ee(), Ru(
          e,
          t,
          a
        );
      },
      useId: function() {
        return G = "useId", ee(), jn();
      },
      useActionState: function(e, t) {
        return G = "useActionState", ee(), yo(e, t);
      },
      useFormState: function(e, t) {
        return G = "useFormState", ee(), co(), yo(e, t);
      },
      useOptimistic: function(e) {
        return G = "useOptimistic", ee(), hn(e);
      },
      useHostTransitionStatus: ca,
      useMemoCache: Ft,
      useCacheRefresh: function() {
        return G = "useCacheRefresh", ee(), oc();
      }
    }, Wg = {
      readContext: function(e) {
        return _t(e);
      },
      use: Nn,
      useCallback: function(e, t) {
        return G = "useCallback", ee(), ic(e, t);
      },
      useContext: function(e) {
        return G = "useContext", ee(), _t(e);
      },
      useEffect: function(e, t) {
        G = "useEffect", ee(), ol(2048, wl, e, t);
      },
      useImperativeHandle: function(e, t, a) {
        return G = "useImperativeHandle", ee(), qn(e, t, a);
      },
      useInsertionEffect: function(e, t) {
        return G = "useInsertionEffect", ee(), ol(4, Ha, e, t);
      },
      useLayoutEffect: function(e, t) {
        return G = "useLayoutEffect", ee(), ol(4, Pl, e, t);
      },
      useMemo: function(e, t) {
        G = "useMemo", ee();
        var a = j.H;
        j.H = Zu;
        try {
          return hi(e, t);
        } finally {
          j.H = a;
        }
      },
      useReducer: function(e, t, a) {
        G = "useReducer", ee();
        var i = j.H;
        j.H = Zu;
        try {
          return La(e, t, a);
        } finally {
          j.H = i;
        }
      },
      useRef: function() {
        return G = "useRef", ee(), nt().memoizedState;
      },
      useState: function() {
        G = "useState", ee();
        var e = j.H;
        j.H = Zu;
        try {
          return La(st);
        } finally {
          j.H = e;
        }
      },
      useDebugValue: function() {
        G = "useDebugValue", ee();
      },
      useDeferredValue: function(e, t) {
        return G = "useDeferredValue", ee(), Gf(e, t);
      },
      useTransition: function() {
        return G = "useTransition", ee(), Cs();
      },
      useSyncExternalStore: function(e, t, a) {
        return G = "useSyncExternalStore", ee(), Nf(
          e,
          t,
          a
        );
      },
      useId: function() {
        return G = "useId", ee(), nt().memoizedState;
      },
      useFormState: function(e) {
        return G = "useFormState", ee(), co(), As(e);
      },
      useActionState: function(e) {
        return G = "useActionState", ee(), As(e);
      },
      useOptimistic: function(e, t) {
        return G = "useOptimistic", ee(), Du(e, t);
      },
      useHostTransitionStatus: ca,
      useMemoCache: Ft,
      useCacheRefresh: function() {
        return G = "useCacheRefresh", ee(), nt().memoizedState;
      }
    }, r1 = {
      readContext: function(e) {
        return _t(e);
      },
      use: Nn,
      useCallback: function(e, t) {
        return G = "useCallback", ee(), ic(e, t);
      },
      useContext: function(e) {
        return G = "useContext", ee(), _t(e);
      },
      useEffect: function(e, t) {
        G = "useEffect", ee(), ol(2048, wl, e, t);
      },
      useImperativeHandle: function(e, t, a) {
        return G = "useImperativeHandle", ee(), qn(e, t, a);
      },
      useInsertionEffect: function(e, t) {
        return G = "useInsertionEffect", ee(), ol(4, Ha, e, t);
      },
      useLayoutEffect: function(e, t) {
        return G = "useLayoutEffect", ee(), ol(4, Pl, e, t);
      },
      useMemo: function(e, t) {
        G = "useMemo", ee();
        var a = j.H;
        j.H = Yv;
        try {
          return hi(e, t);
        } finally {
          j.H = a;
        }
      },
      useReducer: function(e, t, a) {
        G = "useReducer", ee();
        var i = j.H;
        j.H = Yv;
        try {
          return uc(e, t, a);
        } finally {
          j.H = i;
        }
      },
      useRef: function() {
        return G = "useRef", ee(), nt().memoizedState;
      },
      useState: function() {
        G = "useState", ee();
        var e = j.H;
        j.H = Yv;
        try {
          return uc(st);
        } finally {
          j.H = e;
        }
      },
      useDebugValue: function() {
        G = "useDebugValue", ee();
      },
      useDeferredValue: function(e, t) {
        return G = "useDeferredValue", ee(), Us(e, t);
      },
      useTransition: function() {
        return G = "useTransition", ee(), Hs();
      },
      useSyncExternalStore: function(e, t, a) {
        return G = "useSyncExternalStore", ee(), Nf(
          e,
          t,
          a
        );
      },
      useId: function() {
        return G = "useId", ee(), nt().memoizedState;
      },
      useFormState: function(e) {
        return G = "useFormState", ee(), co(), mo(e);
      },
      useActionState: function(e) {
        return G = "useActionState", ee(), mo(e);
      },
      useOptimistic: function(e, t) {
        return G = "useOptimistic", ee(), Es(e, t);
      },
      useHostTransitionStatus: ca,
      useMemoCache: Ft,
      useCacheRefresh: function() {
        return G = "useCacheRefresh", ee(), nt().memoizedState;
      }
    }, Bi = {
      readContext: function(e) {
        return J(), _t(e);
      },
      use: function(e) {
        return Y(), Nn(e);
      },
      useCallback: function(e, t) {
        return G = "useCallback", Y(), Ke(), jf(e, t);
      },
      useContext: function(e) {
        return G = "useContext", Y(), Ke(), _t(e);
      },
      useEffect: function(e, t) {
        return G = "useEffect", Y(), Ke(), Rs(e, t);
      },
      useImperativeHandle: function(e, t, a) {
        return G = "useImperativeHandle", Y(), Ke(), Ds(e, t, a);
      },
      useInsertionEffect: function(e, t) {
        G = "useInsertionEffect", Y(), Ke(), Xa(4, Ha, e, t);
      },
      useLayoutEffect: function(e, t) {
        return G = "useLayoutEffect", Y(), Ke(), Os(e, t);
      },
      useMemo: function(e, t) {
        G = "useMemo", Y(), Ke();
        var a = j.H;
        j.H = Bi;
        try {
          return zs(e, t);
        } finally {
          j.H = a;
        }
      },
      useReducer: function(e, t, a) {
        G = "useReducer", Y(), Ke();
        var i = j.H;
        j.H = Bi;
        try {
          return ft(e, t, a);
        } finally {
          j.H = i;
        }
      },
      useRef: function(e) {
        return G = "useRef", Y(), Ke(), Yf(e);
      },
      useState: function(e) {
        G = "useState", Y(), Ke();
        var t = j.H;
        j.H = Bi;
        try {
          return Ou(e);
        } finally {
          j.H = t;
        }
      },
      useDebugValue: function() {
        G = "useDebugValue", Y(), Ke();
      },
      useDeferredValue: function(e, t) {
        return G = "useDeferredValue", Y(), Ke(), Ms(e, t);
      },
      useTransition: function() {
        return G = "useTransition", Y(), Ke(), Yn();
      },
      useSyncExternalStore: function(e, t, a) {
        return G = "useSyncExternalStore", Y(), Ke(), Ru(
          e,
          t,
          a
        );
      },
      useId: function() {
        return G = "useId", Y(), Ke(), jn();
      },
      useFormState: function(e, t) {
        return G = "useFormState", Y(), Ke(), yo(e, t);
      },
      useActionState: function(e, t) {
        return G = "useActionState", Y(), Ke(), yo(e, t);
      },
      useOptimistic: function(e) {
        return G = "useOptimistic", Y(), Ke(), hn(e);
      },
      useMemoCache: function(e) {
        return Y(), Ft(e);
      },
      useHostTransitionStatus: ca,
      useCacheRefresh: function() {
        return G = "useCacheRefresh", Ke(), oc();
      }
    }, Zu = {
      readContext: function(e) {
        return J(), _t(e);
      },
      use: function(e) {
        return Y(), Nn(e);
      },
      useCallback: function(e, t) {
        return G = "useCallback", Y(), ee(), ic(e, t);
      },
      useContext: function(e) {
        return G = "useContext", Y(), ee(), _t(e);
      },
      useEffect: function(e, t) {
        G = "useEffect", Y(), ee(), ol(2048, wl, e, t);
      },
      useImperativeHandle: function(e, t, a) {
        return G = "useImperativeHandle", Y(), ee(), qn(e, t, a);
      },
      useInsertionEffect: function(e, t) {
        return G = "useInsertionEffect", Y(), ee(), ol(4, Ha, e, t);
      },
      useLayoutEffect: function(e, t) {
        return G = "useLayoutEffect", Y(), ee(), ol(4, Pl, e, t);
      },
      useMemo: function(e, t) {
        G = "useMemo", Y(), ee();
        var a = j.H;
        j.H = Zu;
        try {
          return hi(e, t);
        } finally {
          j.H = a;
        }
      },
      useReducer: function(e, t, a) {
        G = "useReducer", Y(), ee();
        var i = j.H;
        j.H = Zu;
        try {
          return La(e, t, a);
        } finally {
          j.H = i;
        }
      },
      useRef: function() {
        return G = "useRef", Y(), ee(), nt().memoizedState;
      },
      useState: function() {
        G = "useState", Y(), ee();
        var e = j.H;
        j.H = Zu;
        try {
          return La(st);
        } finally {
          j.H = e;
        }
      },
      useDebugValue: function() {
        G = "useDebugValue", Y(), ee();
      },
      useDeferredValue: function(e, t) {
        return G = "useDeferredValue", Y(), ee(), Gf(e, t);
      },
      useTransition: function() {
        return G = "useTransition", Y(), ee(), Cs();
      },
      useSyncExternalStore: function(e, t, a) {
        return G = "useSyncExternalStore", Y(), ee(), Nf(
          e,
          t,
          a
        );
      },
      useId: function() {
        return G = "useId", Y(), ee(), nt().memoizedState;
      },
      useFormState: function(e) {
        return G = "useFormState", Y(), ee(), As(e);
      },
      useActionState: function(e) {
        return G = "useActionState", Y(), ee(), As(e);
      },
      useOptimistic: function(e, t) {
        return G = "useOptimistic", Y(), ee(), Du(e, t);
      },
      useMemoCache: function(e) {
        return Y(), Ft(e);
      },
      useHostTransitionStatus: ca,
      useCacheRefresh: function() {
        return G = "useCacheRefresh", ee(), nt().memoizedState;
      }
    }, Yv = {
      readContext: function(e) {
        return J(), _t(e);
      },
      use: function(e) {
        return Y(), Nn(e);
      },
      useCallback: function(e, t) {
        return G = "useCallback", Y(), ee(), ic(e, t);
      },
      useContext: function(e) {
        return G = "useContext", Y(), ee(), _t(e);
      },
      useEffect: function(e, t) {
        G = "useEffect", Y(), ee(), ol(2048, wl, e, t);
      },
      useImperativeHandle: function(e, t, a) {
        return G = "useImperativeHandle", Y(), ee(), qn(e, t, a);
      },
      useInsertionEffect: function(e, t) {
        return G = "useInsertionEffect", Y(), ee(), ol(4, Ha, e, t);
      },
      useLayoutEffect: function(e, t) {
        return G = "useLayoutEffect", Y(), ee(), ol(4, Pl, e, t);
      },
      useMemo: function(e, t) {
        G = "useMemo", Y(), ee();
        var a = j.H;
        j.H = Zu;
        try {
          return hi(e, t);
        } finally {
          j.H = a;
        }
      },
      useReducer: function(e, t, a) {
        G = "useReducer", Y(), ee();
        var i = j.H;
        j.H = Zu;
        try {
          return uc(e, t, a);
        } finally {
          j.H = i;
        }
      },
      useRef: function() {
        return G = "useRef", Y(), ee(), nt().memoizedState;
      },
      useState: function() {
        G = "useState", Y(), ee();
        var e = j.H;
        j.H = Zu;
        try {
          return uc(st);
        } finally {
          j.H = e;
        }
      },
      useDebugValue: function() {
        G = "useDebugValue", Y(), ee();
      },
      useDeferredValue: function(e, t) {
        return G = "useDeferredValue", Y(), ee(), Us(e, t);
      },
      useTransition: function() {
        return G = "useTransition", Y(), ee(), Hs();
      },
      useSyncExternalStore: function(e, t, a) {
        return G = "useSyncExternalStore", Y(), ee(), Nf(
          e,
          t,
          a
        );
      },
      useId: function() {
        return G = "useId", Y(), ee(), nt().memoizedState;
      },
      useFormState: function(e) {
        return G = "useFormState", Y(), ee(), mo(e);
      },
      useActionState: function(e) {
        return G = "useActionState", Y(), ee(), mo(e);
      },
      useOptimistic: function(e, t) {
        return G = "useOptimistic", Y(), ee(), Es(e, t);
      },
      useMemoCache: function(e) {
        return Y(), Ft(e);
      },
      useHostTransitionStatus: ca,
      useCacheRefresh: function() {
        return G = "useCacheRefresh", ee(), nt().memoizedState;
      }
    };
    var s1 = {
      react_stack_bottom_frame: function(e, t, a) {
        var i = pa;
        pa = !0;
        try {
          return e(t, a);
        } finally {
          pa = i;
        }
      }
    }, Fg = s1.react_stack_bottom_frame.bind(s1), d1 = {
      react_stack_bottom_frame: function(e) {
        var t = pa;
        pa = !0;
        try {
          return e.render();
        } finally {
          pa = t;
        }
      }
    }, h1 = d1.react_stack_bottom_frame.bind(d1), y1 = {
      react_stack_bottom_frame: function(e, t) {
        try {
          t.componentDidMount();
        } catch (a) {
          Re(e, e.return, a);
        }
      }
    }, Ig = y1.react_stack_bottom_frame.bind(
      y1
    ), m1 = {
      react_stack_bottom_frame: function(e, t, a, i, o) {
        try {
          t.componentDidUpdate(a, i, o);
        } catch (f) {
          Re(e, e.return, f);
        }
      }
    }, p1 = m1.react_stack_bottom_frame.bind(
      m1
    ), v1 = {
      react_stack_bottom_frame: function(e, t) {
        var a = t.stack;
        e.componentDidCatch(t.value, {
          componentStack: a !== null ? a : ""
        });
      }
    }, HS = v1.react_stack_bottom_frame.bind(
      v1
    ), g1 = {
      react_stack_bottom_frame: function(e, t, a) {
        try {
          a.componentWillUnmount();
        } catch (i) {
          Re(e, t, i);
        }
      }
    }, b1 = g1.react_stack_bottom_frame.bind(
      g1
    ), S1 = {
      react_stack_bottom_frame: function(e) {
        e.resourceKind != null && console.error(
          "Expected only SimpleEffects when enableUseEffectCRUDOverload is disabled, got %s",
          e.resourceKind
        );
        var t = e.create;
        return e = e.inst, t = t(), e.destroy = t;
      }
    }, xS = S1.react_stack_bottom_frame.bind(S1), T1 = {
      react_stack_bottom_frame: function(e, t, a) {
        try {
          a();
        } catch (i) {
          Re(e, t, i);
        }
      }
    }, NS = T1.react_stack_bottom_frame.bind(T1), E1 = {
      react_stack_bottom_frame: function(e) {
        var t = e._init;
        return t(e._payload);
      }
    }, Po = E1.react_stack_bottom_frame.bind(E1), ih = null, Zm = 0, ke = null, Pg, A1 = Pg = !1, R1 = {}, O1 = {}, D1 = {};
    ct = function(e, t, a) {
      if (a !== null && typeof a == "object" && a._store && (!a._store.validated && a.key == null || a._store.validated === 2)) {
        if (typeof a._store != "object")
          throw Error(
            "React Component in warnForMissingKey should have a _store. This error is likely caused by a bug in React. Please file an issue."
          );
        a._store.validated = 1;
        var i = de(e), o = i || "null";
        if (!R1[o]) {
          R1[o] = !0, a = a._owner, e = e._debugOwner;
          var f = "";
          e && typeof e.tag == "number" && (o = de(e)) && (f = `

Check the render method of \`` + o + "`."), f || i && (f = `

Check the top-level render call using <` + i + ">.");
          var d = "";
          a != null && e !== a && (i = null, typeof a.tag == "number" ? i = de(a) : typeof a.name == "string" && (i = a.name), i && (d = " It was passed a child from " + i + ".")), he(t, function() {
            console.error(
              'Each child in a list should have a unique "key" prop.%s%s See https://react.dev/link/warning-keys for more information.',
              f,
              d
            );
          });
        }
      }
    };
    var ch = Qf(!0), z1 = Qf(!1), du = zt(null), qi = null, oh = 1, Km = 2, Bl = zt(0), M1 = {}, U1 = /* @__PURE__ */ new Set(), _1 = /* @__PURE__ */ new Set(), C1 = /* @__PURE__ */ new Set(), H1 = /* @__PURE__ */ new Set(), x1 = /* @__PURE__ */ new Set(), N1 = /* @__PURE__ */ new Set(), w1 = /* @__PURE__ */ new Set(), B1 = /* @__PURE__ */ new Set(), q1 = /* @__PURE__ */ new Set(), Y1 = /* @__PURE__ */ new Set();
    Object.freeze(M1);
    var e0 = {
      enqueueSetState: function(e, t, a) {
        e = e._reactInternals;
        var i = ra(e), o = Hn(i);
        o.payload = t, a != null && (oy(a), o.callback = a), t = rn(e, o, i), t !== null && (Qt(t, e, i), oi(t, e, i)), Rn(e, i);
      },
      enqueueReplaceState: function(e, t, a) {
        e = e._reactInternals;
        var i = ra(e), o = Hn(i);
        o.tag = a1, o.payload = t, a != null && (oy(a), o.callback = a), t = rn(e, o, i), t !== null && (Qt(t, e, i), oi(t, e, i)), Rn(e, i);
      },
      enqueueForceUpdate: function(e, t) {
        e = e._reactInternals;
        var a = ra(e), i = Hn(a);
        i.tag = n1, t != null && (oy(t), i.callback = t), t = rn(e, i, a), t !== null && (Qt(t, e, a), oi(t, e, a)), fe !== null && typeof fe.markForceUpdateScheduled == "function" && fe.markForceUpdateScheduled(e, a);
      }
    }, t0 = typeof reportError == "function" ? reportError : function(e) {
      if (typeof window == "object" && typeof window.ErrorEvent == "function") {
        var t = new window.ErrorEvent("error", {
          bubbles: !0,
          cancelable: !0,
          message: typeof e == "object" && e !== null && typeof e.message == "string" ? String(e.message) : String(e),
          error: e
        });
        if (!window.dispatchEvent(t)) return;
      } else if (typeof process == "object" && typeof process.emit == "function") {
        process.emit("uncaughtException", e);
        return;
      }
      console.error(e);
    }, fh = null, l0 = null, j1 = Error(
      "This is not a real error. It's an implementation detail of React's selective hydration feature. If this leaks into userspace, it's a bug in React. Please file an issue."
    ), Xl = !1, G1 = {}, L1 = {}, V1 = {}, X1 = {}, rh = !1, Q1 = {}, a0 = {}, n0 = {
      dehydrated: null,
      treeContext: null,
      retryLane: 0,
      hydrationErrors: null
    }, Z1 = !1, K1 = null;
    K1 = /* @__PURE__ */ new Set();
    var jc = !1, sl = !1, u0 = !1, J1 = typeof WeakSet == "function" ? WeakSet : Set, Ql = null, sh = null, dh = null, Tl = null, Pa = !1, Ku = null, Jm = 8192, wS = {
      getCacheForType: function(e) {
        var t = _t(Nl), a = t.data.get(e);
        return a === void 0 && (a = e(), t.data.set(e, a)), a;
      },
      getOwner: function() {
        return Ua;
      }
    };
    if (typeof Symbol == "function" && Symbol.for) {
      var km = Symbol.for;
      km("selector.component"), km("selector.has_pseudo_class"), km("selector.role"), km("selector.test_id"), km("selector.text");
    }
    var BS = [], qS = typeof WeakMap == "function" ? WeakMap : Map, Sn = 0, xa = 2, Ju = 4, Gc = 0, $m = 1, hh = 2, i0 = 3, Gr = 4, jv = 6, k1 = 5, St = Sn, Ct = null, tt = null, lt = 0, en = 0, Wm = 1, Lr = 2, Fm = 3, $1 = 4, c0 = 5, yh = 6, Im = 7, o0 = 8, Vr = 9, At = en, Tn = null, ef = !1, mh = !1, f0 = !1, Yi = 0, al = Gc, tf = 0, lf = 0, r0 = 0, En = 0, Xr = 0, Pm = null, Na = null, Gv = !1, s0 = 0, W1 = 300, Lv = 1 / 0, F1 = 500, ep = null, af = null, YS = 0, jS = 1, GS = 2, Qr = 0, I1 = 1, P1 = 2, eb = 3, LS = 4, d0 = 5, ea = 0, nf = null, ph = null, uf = 0, h0 = 0, y0 = null, tb = null, VS = 50, tp = 0, m0 = null, p0 = !1, Vv = !1, XS = 50, Zr = 0, lp = null, vh = !1, Xv = null, lb = !1, ab = /* @__PURE__ */ new Set(), QS = {}, Qv = null, gh = null, v0 = !1, g0 = !1, Zv = !1, b0 = !1, Kr = 0, S0 = {};
    (function() {
      for (var e = 0; e < qg.length; e++) {
        var t = qg[e], a = t.toLowerCase();
        t = t[0].toUpperCase() + t.slice(1), nn(a, "on" + t);
      }
      nn(L0, "onAnimationEnd"), nn(V0, "onAnimationIteration"), nn(X0, "onAnimationStart"), nn("dblclick", "onDoubleClick"), nn("focusin", "onFocus"), nn("focusout", "onBlur"), nn(TS, "onTransitionRun"), nn(ES, "onTransitionStart"), nn(AS, "onTransitionCancel"), nn(Q0, "onTransitionEnd");
    })(), ne("onMouseEnter", ["mouseout", "mouseover"]), ne("onMouseLeave", ["mouseout", "mouseover"]), ne("onPointerEnter", ["pointerout", "pointerover"]), ne("onPointerLeave", ["pointerout", "pointerover"]), te(
      "onChange",
      "change click focusin focusout input keydown keyup selectionchange".split(
        " "
      )
    ), te(
      "onSelect",
      "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
        " "
      )
    ), te("onBeforeInput", [
      "compositionend",
      "keypress",
      "textInput",
      "paste"
    ]), te(
      "onCompositionEnd",
      "compositionend focusout keydown keypress keyup mousedown".split(" ")
    ), te(
      "onCompositionStart",
      "compositionstart focusout keydown keypress keyup mousedown".split(" ")
    ), te(
      "onCompositionUpdate",
      "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
    );
    var ap = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
      " "
    ), T0 = new Set(
      "beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(ap)
    ), Kv = "_reactListening" + Math.random().toString(36).slice(2), nb = !1, ub = !1, Jv = !1, ib = !1, kv = !1, $v = !1, cb = !1, Wv = {}, ZS = /\r\n?/g, KS = /\u0000|\uFFFD/g, Jr = "http://www.w3.org/1999/xlink", E0 = "http://www.w3.org/XML/1998/namespace", JS = "javascript:throw new Error('React form unexpectedly submitted.')", kS = "suppressHydrationWarning", Fv = "$", Iv = "/$", Lc = "$?", np = "$!", $S = 1, WS = 2, FS = 4, A0 = "F!", ob = "F", fb = "complete", IS = "style", Vc = 0, bh = 1, Pv = 2, R0 = null, O0 = null, rb = { dialog: !0, webview: !0 }, D0 = null, sb = typeof setTimeout == "function" ? setTimeout : void 0, PS = typeof clearTimeout == "function" ? clearTimeout : void 0, kr = -1, db = typeof Promise == "function" ? Promise : void 0, eT = typeof queueMicrotask == "function" ? queueMicrotask : typeof db < "u" ? function(e) {
      return db.resolve(null).then(e).catch(ky);
    } : sb, z0 = null, $r = 0, up = 1, hb = 2, yb = 3, hu = 4, yu = /* @__PURE__ */ new Map(), mb = /* @__PURE__ */ new Set(), Xc = Me.d;
    Me.d = {
      f: function() {
        var e = Xc.f(), t = gc();
        return e || t;
      },
      r: function(e) {
        var t = Rl(e);
        t !== null && t.tag === 5 && t.type === "form" ? uy(t) : Xc.r(e);
      },
      D: function(e) {
        Xc.D(e), lv("dns-prefetch", e, null);
      },
      C: function(e, t) {
        Xc.C(e, t), lv("preconnect", e, t);
      },
      L: function(e, t, a) {
        Xc.L(e, t, a);
        var i = Sh;
        if (i && e && t) {
          var o = 'link[rel="preload"][as="' + Sa(t) + '"]';
          t === "image" && a && a.imageSrcSet ? (o += '[imagesrcset="' + Sa(
            a.imageSrcSet
          ) + '"]', typeof a.imageSizes == "string" && (o += '[imagesizes="' + Sa(
            a.imageSizes
          ) + '"]')) : o += '[href="' + Sa(e) + '"]';
          var f = o;
          switch (t) {
            case "style":
              f = Ai(e);
              break;
            case "script":
              f = Oc(e);
          }
          yu.has(f) || (e = Ze(
            {
              rel: "preload",
              href: t === "image" && a && a.imageSrcSet ? void 0 : e,
              as: t
            },
            a
          ), yu.set(f, e), i.querySelector(o) !== null || t === "style" && i.querySelector(
            Pn(f)
          ) || t === "script" && i.querySelector(Dc(f)) || (t = i.createElement("link"), Kt(t, "link", e), z(t), i.head.appendChild(t)));
        }
      },
      m: function(e, t) {
        Xc.m(e, t);
        var a = Sh;
        if (a && e) {
          var i = t && typeof t.as == "string" ? t.as : "script", o = 'link[rel="modulepreload"][as="' + Sa(i) + '"][href="' + Sa(e) + '"]', f = o;
          switch (i) {
            case "audioworklet":
            case "paintworklet":
            case "serviceworker":
            case "sharedworker":
            case "worker":
            case "script":
              f = Oc(e);
          }
          if (!yu.has(f) && (e = Ze({ rel: "modulepreload", href: e }, t), yu.set(f, e), a.querySelector(o) === null)) {
            switch (i) {
              case "audioworklet":
              case "paintworklet":
              case "serviceworker":
              case "sharedworker":
              case "worker":
              case "script":
                if (a.querySelector(Dc(f)))
                  return;
            }
            i = a.createElement("link"), Kt(i, "link", e), z(i), a.head.appendChild(i);
          }
        }
      },
      X: function(e, t) {
        Xc.X(e, t);
        var a = Sh;
        if (a && e) {
          var i = m(a).hoistableScripts, o = Oc(e), f = i.get(o);
          f || (f = a.querySelector(
            Dc(o)
          ), f || (e = Ze({ src: e, async: !0 }, t), (t = yu.get(o)) && lm(e, t), f = a.createElement("script"), z(f), Kt(f, "link", e), a.head.appendChild(f)), f = {
            type: "script",
            instance: f,
            count: 1,
            state: null
          }, i.set(o, f));
        }
      },
      S: function(e, t, a) {
        Xc.S(e, t, a);
        var i = Sh;
        if (i && e) {
          var o = m(i).hoistableStyles, f = Ai(e);
          t = t || "default";
          var d = o.get(f);
          if (!d) {
            var h = { loading: $r, preload: null };
            if (d = i.querySelector(
              Pn(f)
            ))
              h.loading = up | hu;
            else {
              e = Ze(
                {
                  rel: "stylesheet",
                  href: e,
                  "data-precedence": t
                },
                a
              ), (a = yu.get(f)) && tm(e, a);
              var v = d = i.createElement("link");
              z(v), Kt(v, "link", e), v._p = new Promise(function(b, B) {
                v.onload = b, v.onerror = B;
              }), v.addEventListener("load", function() {
                h.loading |= up;
              }), v.addEventListener("error", function() {
                h.loading |= hb;
              }), h.loading |= hu, Ad(d, t, i);
            }
            d = {
              type: "stylesheet",
              instance: d,
              count: 1,
              state: h
            }, o.set(f, d);
          }
        }
      },
      M: function(e, t) {
        Xc.M(e, t);
        var a = Sh;
        if (a && e) {
          var i = m(a).hoistableScripts, o = Oc(e), f = i.get(o);
          f || (f = a.querySelector(
            Dc(o)
          ), f || (e = Ze({ src: e, async: !0, type: "module" }, t), (t = yu.get(o)) && lm(e, t), f = a.createElement("script"), z(f), Kt(f, "link", e), a.head.appendChild(f)), f = {
            type: "script",
            instance: f,
            count: 1,
            state: null
          }, i.set(o, f));
        }
      }
    };
    var Sh = typeof document > "u" ? null : document, eg = null, ip = null, M0 = null, tg = null, Wr = Dg, cp = {
      $$typeof: $a,
      Provider: null,
      Consumer: null,
      _currentValue: Wr,
      _currentValue2: Wr,
      _threadCount: 0
    }, pb = "%c%s%c ", vb = "background: #e6e6e6;background: light-dark(rgba(0,0,0,0.1), rgba(255,255,255,0.25));color: #000000;color: light-dark(#000000, #ffffff);border-radius: 2px", gb = "", lg = " ", tT = Function.prototype.bind, bb = !1, Sb = null, Tb = null, Eb = null, Ab = null, Rb = null, Ob = null, Db = null, zb = null, Mb = null;
    Sb = function(e, t, a, i) {
      t = H(e, t), t !== null && (a = F(t.memoizedState, a, 0, i), t.memoizedState = a, t.baseState = a, e.memoizedProps = Ze({}, e.memoizedProps), a = aa(e, 2), a !== null && Qt(a, e, 2));
    }, Tb = function(e, t, a) {
      t = H(e, t), t !== null && (a = re(t.memoizedState, a, 0), t.memoizedState = a, t.baseState = a, e.memoizedProps = Ze({}, e.memoizedProps), a = aa(e, 2), a !== null && Qt(a, e, 2));
    }, Eb = function(e, t, a, i) {
      t = H(e, t), t !== null && (a = ie(t.memoizedState, a, i), t.memoizedState = a, t.baseState = a, e.memoizedProps = Ze({}, e.memoizedProps), a = aa(e, 2), a !== null && Qt(a, e, 2));
    }, Ab = function(e, t, a) {
      e.pendingProps = F(e.memoizedProps, t, 0, a), e.alternate && (e.alternate.pendingProps = e.pendingProps), t = aa(e, 2), t !== null && Qt(t, e, 2);
    }, Rb = function(e, t) {
      e.pendingProps = re(e.memoizedProps, t, 0), e.alternate && (e.alternate.pendingProps = e.pendingProps), t = aa(e, 2), t !== null && Qt(t, e, 2);
    }, Ob = function(e, t, a) {
      e.pendingProps = ie(
        e.memoizedProps,
        t,
        a
      ), e.alternate && (e.alternate.pendingProps = e.pendingProps), t = aa(e, 2), t !== null && Qt(t, e, 2);
    }, Db = function(e) {
      var t = aa(e, 2);
      t !== null && Qt(t, e, 2);
    }, zb = function(e) {
      Ie = e;
    }, Mb = function(e) {
      ve = e;
    };
    var ag = !0, ng = null, U0 = !1, cf = null, of = null, ff = null, op = /* @__PURE__ */ new Map(), fp = /* @__PURE__ */ new Map(), rf = [], lT = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(
      " "
    ), ug = null;
    if (vr.prototype.render = Ud.prototype.render = function(e) {
      var t = this._internalRoot;
      if (t === null) throw Error("Cannot update an unmounted root.");
      var a = arguments;
      typeof a[1] == "function" ? console.error(
        "does not support the second callback argument. To execute a side effect after rendering, declare it in a component body with useEffect()."
      ) : Ve(a[1]) ? console.error(
        "You passed a container to the second argument of root.render(...). You don't need to pass it again since you already passed it to create the root."
      ) : typeof a[1] < "u" && console.error(
        "You passed a second argument to root.render(...) but it only accepts one argument."
      ), a = e;
      var i = t.current, o = ra(i);
      bt(i, o, a, t, null, null);
    }, vr.prototype.unmount = Ud.prototype.unmount = function() {
      var e = arguments;
      if (typeof e[0] == "function" && console.error(
        "does not support a callback argument. To execute a side effect after rendering, declare it in a component body with useEffect()."
      ), e = this._internalRoot, e !== null) {
        this._internalRoot = null;
        var t = e.containerInfo;
        (St & (xa | Ju)) !== Sn && console.error(
          "Attempted to synchronously unmount a root while React was already rendering. React cannot finish unmounting the root until the current render has completed, which may lead to a race condition."
        ), bt(e.current, 2, null, e, null, null), gc(), t[Ci] = null;
      }
    }, vr.prototype.unstable_scheduleHydration = function(e) {
      if (e) {
        var t = hf();
        e = { blockedOn: null, target: e, priority: t };
        for (var a = 0; a < rf.length && t !== 0 && t < rf[a].priority; a++) ;
        rf.splice(a, 0, e), a === 0 && ov(e);
      }
    }, (function() {
      var e = gr.version;
      if (e !== "19.1.1")
        throw Error(
          `Incompatible React versions: The "react" and "react-dom" packages must have the exact same version. Instead got:
  - react:      ` + (e + `
  - react-dom:  19.1.1
Learn more: https://react.dev/warnings/version-mismatch`)
        );
    })(), typeof Map == "function" && Map.prototype != null && typeof Map.prototype.forEach == "function" && typeof Set == "function" && Set.prototype != null && typeof Set.prototype.clear == "function" && typeof Set.prototype.forEach == "function" || console.error(
      "React depends on Map and Set built-in types. Make sure that you load a polyfill in older browsers. https://react.dev/link/react-polyfills"
    ), Me.findDOMNode = function(e) {
      var t = e._reactInternals;
      if (t === void 0)
        throw typeof e.render == "function" ? Error("Unable to find node on an unmounted component.") : (e = Object.keys(e).join(","), Error(
          "Argument appears to not be a ReactComponent. Keys: " + e
        ));
      return e = Wt(t), e = e !== null ? Ne(e) : null, e = e === null ? null : e.stateNode, e;
    }, !(function() {
      var e = {
        bundleType: 1,
        version: "19.1.1",
        rendererPackageName: "react-dom",
        currentDispatcherRef: j,
        reconcilerVersion: "19.1.1"
      };
      return e.overrideHookState = Sb, e.overrideHookStateDeletePath = Tb, e.overrideHookStateRenamePath = Eb, e.overrideProps = Ab, e.overridePropsDeletePath = Rb, e.overridePropsRenamePath = Ob, e.scheduleUpdate = Db, e.setErrorHandler = zb, e.setSuspenseHandler = Mb, e.scheduleRefresh = ze, e.scheduleRoot = le, e.setRefreshHandler = ot, e.getCurrentFiber = Eg, e.getLaneLabelMap = Ag, e.injectProfilingHooks = nl, Ae(e);
    })() && S && window.top === window.self && (-1 < navigator.userAgent.indexOf("Chrome") && navigator.userAgent.indexOf("Edge") === -1 || -1 < navigator.userAgent.indexOf("Firefox"))) {
      var Ub = window.location.protocol;
      /^(https?|file):$/.test(Ub) && console.info(
        "%cDownload the React DevTools for a better development experience: https://react.dev/link/react-devtools" + (Ub === "file:" ? `
You might need to use a local HTTP server (instead of file://): https://react.dev/link/react-devtools-faq` : ""),
        "font-weight:bold"
      );
    }
    hp.createRoot = function(e, t) {
      if (!Ve(e))
        throw Error("Target container is not a DOM element.");
      sv(e);
      var a = !1, i = "", o = fy, f = Gp, d = Bs, h = null;
      return t != null && (t.hydrate ? console.warn(
        "hydrate through createRoot is deprecated. Use ReactDOMClient.hydrateRoot(container, <App />) instead."
      ) : typeof t == "object" && t !== null && t.$$typeof === Di && console.error(
        `You passed a JSX element to createRoot. You probably meant to call root.render instead. Example usage:

  let root = createRoot(domContainer);
  root.render(<App />);`
      ), t.unstable_strictMode === !0 && (a = !0), t.identifierPrefix !== void 0 && (i = t.identifierPrefix), t.onUncaughtError !== void 0 && (o = t.onUncaughtError), t.onCaughtError !== void 0 && (f = t.onCaughtError), t.onRecoverableError !== void 0 && (d = t.onRecoverableError), t.unstable_transitionCallbacks !== void 0 && (h = t.unstable_transitionCallbacks)), t = um(
        e,
        1,
        !1,
        null,
        null,
        a,
        i,
        o,
        f,
        d,
        h,
        null
      ), e[Ci] = t.current, Ly(e), new Ud(t);
    }, hp.hydrateRoot = function(e, t, a) {
      if (!Ve(e))
        throw Error("Target container is not a DOM element.");
      sv(e), t === void 0 && console.error(
        "Must provide initial children as second argument to hydrateRoot. Example usage: hydrateRoot(domContainer, <App />)"
      );
      var i = !1, o = "", f = fy, d = Gp, h = Bs, v = null, b = null;
      return a != null && (a.unstable_strictMode === !0 && (i = !0), a.identifierPrefix !== void 0 && (o = a.identifierPrefix), a.onUncaughtError !== void 0 && (f = a.onUncaughtError), a.onCaughtError !== void 0 && (d = a.onCaughtError), a.onRecoverableError !== void 0 && (h = a.onRecoverableError), a.unstable_transitionCallbacks !== void 0 && (v = a.unstable_transitionCallbacks), a.formState !== void 0 && (b = a.formState)), t = um(
        e,
        1,
        !0,
        t,
        a ?? null,
        i,
        o,
        f,
        d,
        h,
        v,
        b
      ), t.context = im(null), a = t.current, i = ra(a), i = El(i), o = Hn(i), o.callback = null, rn(a, o, i), a = i, t.current.lanes = a, mu(t, a), Ka(t), e[Ci] = t.current, Ly(e), new vr(t);
    }, hp.version = "19.1.1", typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(Error());
  })()), hp;
}
var Qb;
function mT() {
  if (Qb) return og.exports;
  Qb = 1;
  function H() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function")) {
      if (process.env.NODE_ENV !== "production")
        throw new Error("^_^");
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(H);
      } catch (F) {
        console.error(F);
      }
    }
  }
  return process.env.NODE_ENV === "production" ? (H(), og.exports = hT()) : og.exports = yT(), og.exports;
}
var Zb = mT();
const pT = ({ name: H, placeholder: F }) => /* @__PURE__ */ sg.jsx("input", { name: H, placeholder: F }), vT = ({ target: H, value: F }) => /* @__PURE__ */ sg.jsx("span", { className: "replace-target", "data-target": H, children: F }), Fb = (
  // Note: overloads in JSDoc can’t yet use different `@template`s.
  /**
   * @type {(
   *   (<Condition extends string>(test: Condition) => (node: unknown, index?: number | null | undefined, parent?: Parent | null | undefined, context?: unknown) => node is Node & {type: Condition}) &
   *   (<Condition extends Props>(test: Condition) => (node: unknown, index?: number | null | undefined, parent?: Parent | null | undefined, context?: unknown) => node is Node & Condition) &
   *   (<Condition extends TestFunction>(test: Condition) => (node: unknown, index?: number | null | undefined, parent?: Parent | null | undefined, context?: unknown) => node is Node & Predicate<Condition, Node>) &
   *   ((test?: null | undefined) => (node?: unknown, index?: number | null | undefined, parent?: Parent | null | undefined, context?: unknown) => node is Node) &
   *   ((test?: Test) => Check)
   * )}
   */
  /**
   * @param {Test} [test]
   * @returns {Check}
   */
  (function(H) {
    if (H == null)
      return TT;
    if (typeof H == "function")
      return dg(H);
    if (typeof H == "object")
      return Array.isArray(H) ? gT(H) : bT(H);
    if (typeof H == "string")
      return ST(H);
    throw new Error("Expected function, string, or object as test");
  })
);
function gT(H) {
  const F = [];
  let ie = -1;
  for (; ++ie < H.length; )
    F[ie] = Fb(H[ie]);
  return dg(D);
  function D(...re) {
    let ve = -1;
    for (; ++ve < F.length; )
      if (F[ve].apply(this, re)) return !0;
    return !1;
  }
}
function bT(H) {
  const F = (
    /** @type {Record<string, unknown>} */
    H
  );
  return dg(ie);
  function ie(D) {
    const re = (
      /** @type {Record<string, unknown>} */
      /** @type {unknown} */
      D
    );
    let ve;
    for (ve in H)
      if (re[ve] !== F[ve]) return !1;
    return !0;
  }
}
function ST(H) {
  return dg(F);
  function F(ie) {
    return ie && ie.type === H;
  }
}
function dg(H) {
  return F;
  function F(ie, D, re) {
    return !!(ET(ie) && H.call(
      this,
      ie,
      typeof D == "number" ? D : void 0,
      re || void 0
    ));
  }
}
function TT() {
  return !0;
}
function ET(H) {
  return H !== null && typeof H == "object" && "type" in H;
}
const Ib = [], AT = !0, Kb = !1, RT = "skip";
function OT(H, F, ie, D) {
  let re;
  typeof F == "function" && typeof ie != "function" ? (D = ie, ie = F) : re = F;
  const ve = Fb(re), Ie = D ? -1 : 1;
  ct(H, void 0, [])();
  function ct(Y, J, ue) {
    const K = (
      /** @type {Record<string, unknown>} */
      Y && typeof Y == "object" ? Y : {}
    );
    if (typeof K.type == "string") {
      const le = (
        // `hast`
        typeof K.tagName == "string" ? K.tagName : (
          // `xast`
          typeof K.name == "string" ? K.name : void 0
        )
      );
      Object.defineProperty(U, "name", {
        value: "node (" + (Y.type + (le ? "<" + le + ">" : "")) + ")"
      });
    }
    return U;
    function U() {
      let le = Ib, ze, ot, Ve;
      if ((!F || ve(Y, J, ue[ue.length - 1] || void 0)) && (le = DT(ie(Y, ue)), le[0] === Kb))
        return le;
      if ("children" in Y && Y.children) {
        const Xe = (
          /** @type {UnistParent} */
          Y
        );
        if (Xe.children && le[0] !== RT)
          for (ot = (D ? Xe.children.length : -1) + Ie, Ve = ue.concat(Xe); ot > -1 && ot < Xe.children.length; ) {
            const It = Xe.children[ot];
            if (ze = ct(It, ot, Ve)(), ze[0] === Kb)
              return ze;
            ot = typeof ze[1] == "number" ? ze[1] : ot + Ie;
          }
      }
      return le;
    }
  }
}
function DT(H) {
  return Array.isArray(H) ? H : typeof H == "number" ? [AT, H] : H == null ? Ib : [H];
}
function zT(H, F, ie, D) {
  let re, ve, Ie;
  ve = F, Ie = ie, re = D, OT(H, ve, ct, re);
  function ct(Y, J) {
    const ue = J[J.length - 1], K = ue ? ue.children.indexOf(Y) : void 0;
    return Ie(Y, K, ue);
  }
}
const Jb = () => (H) => {
  zT(H, "leafDirective", (F) => {
    const ie = F;
    if (ie.name === "input") {
      const D = ie.data || (ie.data = {}), re = ie.attributes.name || "", ve = ie.attributes.placeholder || "";
      D.hName = "input-replace", D.hProperties = { name: re, placeholder: ve }, D.hChildren = [];
    }
    if (ie.name === "replace") {
      const D = ie.data || (ie.data = {}), re = ie.attributes.target || "", ve = ie.attributes.value || "";
      D.hName = "span-replace", D.hProperties = { target: re, value: ve }, D.hChildren = [];
    }
  });
};
function kb() {
  document.querySelectorAll("input-replace").forEach((H) => {
    const F = H.getAttribute("name") || "", ie = H.getAttribute("placeholder") || "";
    Zb.createRoot(H).render(/* @__PURE__ */ sg.jsx(pT, { name: F, placeholder: ie }));
  }), document.querySelectorAll("span-replace").forEach((H) => {
    const F = H.getAttribute("target") || "", ie = H.getAttribute("value") || "";
    Zb.createRoot(H).render(/* @__PURE__ */ sg.jsx(vT, { target: F, value: ie }));
  });
}
const MT = () => {
  if (typeof growiFacade > "u" || growiFacade == null || growiFacade.markdownRenderer == null)
    return;
  const { optionsGenerators: H } = growiFacade.markdownRenderer, F = H.customGenerateViewOptions;
  H.customGenerateViewOptions = (...D) => {
    const re = F ? F(...D) : H.generateViewOptions(...D);
    return re.remarkPlugins.push(Jb), re;
  };
  const ie = H.customGeneratePreviewOptions;
  H.customGeneratePreviewOptions = (...D) => {
    const re = ie ? ie(...D) : H.generatePreviewOptions(...D);
    return re.remarkPlugins.push(Jb), re;
  }, document.readyState !== "loading" ? kb() : document.addEventListener("DOMContentLoaded", kb);
}, UT = () => {
};
window.pluginActivators == null && (window.pluginActivators = {});
window.pluginActivators["growi-plugin-input-replace"] = {
  activate: MT,
  deactivate: UT
};
export {
  MT as default
};
