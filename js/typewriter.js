! function(t, e) {
    "object" == typeof exports && "object" == typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define("Typewriter", [], e) : "object" == typeof exports ? exports.Typewriter = e() : t.Typewriter = e()
}(window, function() {
    return function(t) {
        var e = {};

        function n(r) {
            if (e[r]) return e[r].exports;
            var o = e[r] = {
                i: r,
                l: !1,
                exports: {}
            };
            return t[r].call(o.exports, o, o.exports, n), o.l = !0, o.exports
        }
        return n.m = t, n.c = e, n.d = function(t, e, r) {
            n.o(t, e) || Object.defineProperty(t, e, {
                enumerable: !0,
                get: r
            })
        }, n.r = function(t) {
            "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
                value: "Module"
            }), Object.defineProperty(t, "__esModule", {
                value: !0
            })
        }, n.t = function(t, e) {
            if (1 & e && (t = n(t)), 8 & e) return t;
            if (4 & e && "object" == typeof t && t && t.__esModule) return t;
            var r = Object.create(null);
            if (n.r(r), Object.defineProperty(r, "default", {
                    enumerable: !0,
                    value: t
                }), 2 & e && "string" != typeof t)
                for (var o in t) n.d(r, o, function(e) {
                    return t[e]
                }.bind(null, o));
            return r
        }, n.n = function(t) {
            var e = t && t.__esModule ? function() {
                return t.default
            } : function() {
                return t
            };
            return n.d(e, "a", e), e
        }, n.o = function(t, e) {
            return Object.prototype.hasOwnProperty.call(t, e)
        }, n.p = "", n(n.s = 53)
    }([function(t, e, n) {
        var r = n(27)("wks"),
            o = n(15),
            i = n(1).Symbol,
            u = "function" == typeof i;
        (t.exports = function(t) {
            return r[t] || (r[t] = u && i[t] || (u ? i : o)("Symbol." + t))
        }).store = r
    }, function(t, e) {
        var n = t.exports = "undefined" != typeof window && window.Math == Math ? window : "undefined" != typeof self && self.Math == Math ? self : Function("return this")();
        "number" == typeof __g && (__g = n)
    }, function(t, e, n) {
        var r = n(8),
            o = n(36),
            i = n(23),
            u = Object.defineProperty;
        e.f = n(3) ? Object.defineProperty : function(t, e, n) {
            if (r(t), e = i(e, !0), r(n), o) try {
                return u(t, e, n)
            } catch (t) {}
            if ("get" in n || "set" in n) throw TypeError("Accessors not supported!");
            return "value" in n && (t[e] = n.value), t
        }
    }, function(t, e, n) {
        t.exports = !n(6)(function() {
            return 7 != Object.defineProperty({}, "a", {
                get: function() {
                    return 7
                }
            }).a
        })
    }, function(t, e, n) {
        var r = n(1),
            o = n(11),
            i = n(7),
            u = n(9),
            a = n(18),
            c = function(t, e, n) {
                var s, f, l, p, v = t & c.F,
                    h = t & c.G,
                    d = t & c.S,
                    y = t & c.P,
                    m = t & c.B,
                    g = h ? r : d ? r[e] || (r[e] = {}) : (r[e] || {}).prototype,
                    b = h ? o : o[e] || (o[e] = {}),
                    E = b.prototype || (b.prototype = {});
                for (s in h && (n = e), n) l = ((f = !v && g && void 0 !== g[s]) ? g : n)[s], p = m && f ? a(l, r) : y && "function" == typeof l ? a(Function.call, l) : l, g && u(g, s, l, t & c.U), b[s] != l && i(b, s, p), y && E[s] != l && (E[s] = l)
            };
        r.core = o, c.F = 1, c.G = 2, c.S = 4, c.P = 8, c.B = 16, c.W = 32, c.U = 64, c.R = 128, t.exports = c
    }, function(t, e) {
        t.exports = function(t) {
            return "object" == typeof t ? null !== t : "function" == typeof t
        }
    }, function(t, e) {
        t.exports = function(t) {
            try {
                return !!t()
            } catch (t) {
                return !0
            }
        }
    }, function(t, e, n) {
        var r = n(2),
            o = n(14);
        t.exports = n(3) ? function(t, e, n) {
            return r.f(t, e, o(1, n))
        } : function(t, e, n) {
            return t[e] = n, t
        }
    }, function(t, e, n) {
        var r = n(5);
        t.exports = function(t) {
            if (!r(t)) throw TypeError(t + " is not an object!");
            return t
        }
    }, function(t, e, n) {
        var r = n(1),
            o = n(7),
            i = n(10),
            u = n(15)("src"),
            a = Function.toString,
            c = ("" + a).split("toString");
        n(11).inspectSource = function(t) {
            return a.call(t)
        }, (t.exports = function(t, e, n, a) {
            var s = "function" == typeof n;
            s && (i(n, "name") || o(n, "name", e)), t[e] !== n && (s && (i(n, u) || o(n, u, t[e] ? "" + t[e] : c.join(String(e)))), t === r ? t[e] = n : a ? t[e] ? t[e] = n : o(t, e, n) : (delete t[e], o(t, e, n)))
        })(Function.prototype, "toString", function() {
            return "function" == typeof this && this[u] || a.call(this)
        })
    }, function(t, e) {
        var n = {}.hasOwnProperty;
        t.exports = function(t, e) {
            return n.call(t, e)
        }
    }, function(t, e) {
        var n = t.exports = {
            version: "2.5.7"
        };
        "number" == typeof __e && (__e = n)
    }, function(t, e, n) {
        var r = n(39),
            o = n(21);
        t.exports = function(t) {
            return r(o(t))
        }
    }, , function(t, e) {
        t.exports = function(t, e) {
            return {
                enumerable: !(1 & t),
                configurable: !(2 & t),
                writable: !(4 & t),
                value: e
            }
        }
    }, function(t, e) {
        var n = 0,
            r = Math.random();
        t.exports = function(t) {
            return "Symbol(".concat(void 0 === t ? "" : t, ")_", (++n + r).toString(36))
        }
    }, function(t, e) {
        t.exports = {}
    }, function(t, e, n) {
        var r = n(43),
            o = n(29);
        t.exports = Object.keys || function(t) {
            return r(t, o)
        }
    }, function(t, e, n) {
        var r = n(55);
        t.exports = function(t, e, n) {
            if (r(t), void 0 === e) return t;
            switch (n) {
                case 1:
                    return function(n) {
                        return t.call(e, n)
                    };
                case 2:
                    return function(n, r) {
                        return t.call(e, n, r)
                    };
                case 3:
                    return function(n, r, o) {
                        return t.call(e, n, r, o)
                    }
            }
            return function() {
                return t.apply(e, arguments)
            }
        }
    }, function(t, e) {
        var n = {}.toString;
        t.exports = function(t) {
            return n.call(t).slice(8, -1)
        }
    }, function(t, e, n) {
        var r = n(21);
        t.exports = function(t) {
            return Object(r(t))
        }
    }, function(t, e) {
        t.exports = function(t) {
            if (void 0 == t) throw TypeError("Can't call method on  " + t);
            return t
        }
    }, function(t, e) {
        t.exports = !1
    }, function(t, e, n) {
        var r = n(5);
        t.exports = function(t, e) {
            if (!r(t)) return t;
            var n, o;
            if (e && "function" == typeof(n = t.toString) && !r(o = n.call(t))) return o;
            if ("function" == typeof(n = t.valueOf) && !r(o = n.call(t))) return o;
            if (!e && "function" == typeof(n = t.toString) && !r(o = n.call(t))) return o;
            throw TypeError("Can't convert object to primitive value")
        }
    }, function(t, e, n) {
        var r = n(25),
            o = Math.min;
        t.exports = function(t) {
            return t > 0 ? o(r(t), 9007199254740991) : 0
        }
    }, function(t, e) {
        var n = Math.ceil,
            r = Math.floor;
        t.exports = function(t) {
            return isNaN(t = +t) ? 0 : (t > 0 ? r : n)(t)
        }
    }, function(t, e, n) {
        var r = n(19);
        t.exports = Array.isArray || function(t) {
            return "Array" == r(t)
        }
    }, function(t, e, n) {
        var r = n(11),
            o = n(1),
            i = o["__core-js_shared__"] || (o["__core-js_shared__"] = {});
        (t.exports = function(t, e) {
            return i[t] || (i[t] = void 0 !== e ? e : {})
        })("versions", []).push({
            version: r.version,
            mode: n(22) ? "pure" : "global",
            copyright: "© 2018 Denis Pushkarev (zloirock.ru)"
        })
    }, function(t, e, n) {
        var r = n(27)("keys"),
            o = n(15);
        t.exports = function(t) {
            return r[t] || (r[t] = o(t))
        }
    }, function(t, e) {
        t.exports = "constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")
    }, function(t, e, n) {
        var r = n(2).f,
            o = n(10),
            i = n(0)("toStringTag");
        t.exports = function(t, e, n) {
            t && !o(t = n ? t : t.prototype, i) && r(t, i, {
                configurable: !0,
                value: e
            })
        }
    }, function(t, e, n) {
        "use strict";
        var r = n(8);
        t.exports = function() {
            var t = r(this),
                e = "";
            return t.global && (e += "g"), t.ignoreCase && (e += "i"), t.multiline && (e += "m"), t.unicode && (e += "u"), t.sticky && (e += "y"), e
        }
    }, function(t, e) {
        e.f = {}.propertyIsEnumerable
    }, function(t, e, n) {
        var r = n(43),
            o = n(29).concat("length", "prototype");
        e.f = Object.getOwnPropertyNames || function(t) {
            return r(t, o)
        }
    }, function(t, e, n) {
        (function(e) {
            for (var r = n(90), o = "undefined" == typeof window ? e : window, i = ["moz", "webkit"], u = "AnimationFrame", a = o["request" + u], c = o["cancel" + u] || o["cancelRequest" + u], s = 0; !a && s < i.length; s++) a = o[i[s] + "Request" + u], c = o[i[s] + "Cancel" + u] || o[i[s] + "CancelRequest" + u];
            if (!a || !c) {
                var f = 0,
                    l = 0,
                    p = [];
                a = function(t) {
                    if (0 === p.length) {
                        var e = r(),
                            n = Math.max(0, 1e3 / 60 - (e - f));
                        f = n + e, setTimeout(function() {
                            var t = p.slice(0);
                            p.length = 0;
                            for (var e = 0; e < t.length; e++)
                                if (!t[e].cancelled) try {
                                    t[e].callback(f)
                                } catch (t) {
                                    setTimeout(function() {
                                        throw t
                                    }, 0)
                                }
                        }, Math.round(n))
                    }
                    return p.push({
                        handle: ++l,
                        callback: t,
                        cancelled: !1
                    }), l
                }, c = function(t) {
                    for (var e = 0; e < p.length; e++) p[e].handle === t && (p[e].cancelled = !0)
                }
            }
            t.exports = function(t) {
                return a.call(o, t)
            }, t.exports.cancel = function() {
                c.apply(o, arguments)
            }, t.exports.polyfill = function(t) {
                t || (t = o), t.requestAnimationFrame = a, t.cancelAnimationFrame = c
            }
        }).call(this, n(89))
    }, function(t, e, n) {
        var r = n(8),
            o = n(61),
            i = n(29),
            u = n(28)("IE_PROTO"),
            a = function() {},
            c = function() {
                var t, e = n(37)("iframe"),
                    r = i.length;
                for (e.style.display = "none", n(64).appendChild(e), e.src = "javascript:", (t = e.contentWindow.document).open(), t.write("<script>document.F=Object<\/script>"), t.close(), c = t.F; r--;) delete c.prototype[i[r]];
                return c()
            };
        t.exports = Object.create || function(t, e) {
            var n;
            return null !== t ? (a.prototype = r(t), n = new a, a.prototype = null, n[u] = t) : n = c(), void 0 === e ? n : o(n, e)
        }
    }, function(t, e, n) {
        t.exports = !n(3) && !n(6)(function() {
            return 7 != Object.defineProperty(n(37)("div"), "a", {
                get: function() {
                    return 7
                }
            }).a
        })
    }, function(t, e, n) {
        var r = n(5),
            o = n(1).document,
            i = r(o) && r(o.createElement);
        t.exports = function(t) {
            return i ? o.createElement(t) : {}
        }
    }, function(t, e, n) {
        var r = n(18),
            o = n(39),
            i = n(20),
            u = n(24),
            a = n(56);
        t.exports = function(t, e) {
            var n = 1 == t,
                c = 2 == t,
                s = 3 == t,
                f = 4 == t,
                l = 6 == t,
                p = 5 == t || l,
                v = e || a;
            return function(e, a, h) {
                for (var d, y, m = i(e), g = o(m), b = r(a, h, 3), E = u(g.length), T = 0, w = n ? v(e, E) : c ? v(e, 0) : void 0; E > T; T++)
                    if ((p || T in g) && (y = b(d = g[T], T, m), t))
                        if (n) w[T] = y;
                        else if (y) switch (t) {
                    case 3:
                        return !0;
                    case 5:
                        return d;
                    case 6:
                        return T;
                    case 2:
                        w.push(d)
                } else if (f) return !1;
                return l ? -1 : s || f ? f : w
            }
        }
    }, function(t, e, n) {
        var r = n(19);
        t.exports = Object("z").propertyIsEnumerable(0) ? Object : function(t) {
            return "String" == r(t) ? t.split("") : Object(t)
        }
    }, function(t, e, n) {
        "use strict";
        var r = n(6);
        t.exports = function(t, e) {
            return !!t && r(function() {
                e ? t.call(null, function() {}, 1) : t.call(null)
            })
        }
    }, function(t, e, n) {
        "use strict";
        var r = n(58),
            o = n(59),
            i = n(16),
            u = n(12);
        t.exports = n(42)(Array, "Array", function(t, e) {
            this._t = u(t), this._i = 0, this._k = e
        }, function() {
            var t = this._t,
                e = this._k,
                n = this._i++;
            return !t || n >= t.length ? (this._t = void 0, o(1)) : o(0, "keys" == e ? n : "values" == e ? t[n] : [n, t[n]])
        }, "values"), i.Arguments = i.Array, r("keys"), r("values"), r("entries")
    }, function(t, e, n) {
        "use strict";
        var r = n(22),
            o = n(4),
            i = n(9),
            u = n(7),
            a = n(16),
            c = n(60),
            s = n(30),
            f = n(65),
            l = n(0)("iterator"),
            p = !([].keys && "next" in [].keys()),
            v = function() {
                return this
            };
        t.exports = function(t, e, n, h, d, y, m) {
            c(n, e, h);
            var g, b, E, T = function(t) {
                    if (!p && t in S) return S[t];
                    switch (t) {
                        case "keys":
                        case "values":
                            return function() {
                                return new n(this, t)
                            }
                    }
                    return function() {
                        return new n(this, t)
                    }
                },
                w = e + " Iterator",
                O = "values" == d,
                x = !1,
                S = t.prototype,
                _ = S[l] || S["@@iterator"] || d && S[d],
                A = _ || T(d),
                L = d ? O ? T("entries") : A : void 0,
                N = "Array" == e && S.entries || _;
            if (N && (E = f(N.call(new t))) !== Object.prototype && E.next && (s(E, w, !0), r || "function" == typeof E[l] || u(E, l, v)), O && _ && "values" !== _.name && (x = !0, A = function() {
                    return _.call(this)
                }), r && !m || !p && !x && S[l] || u(S, l, A), a[e] = A, a[w] = v, d)
                if (g = {
                        values: O ? A : T("values"),
                        keys: y ? A : T("keys"),
                        entries: L
                    }, m)
                    for (b in g) b in S || i(S, b, g[b]);
                else o(o.P + o.F * (p || x), e, g);
            return g
        }
    }, function(t, e, n) {
        var r = n(10),
            o = n(12),
            i = n(62)(!1),
            u = n(28)("IE_PROTO");
        t.exports = function(t, e) {
            var n, a = o(t),
                c = 0,
                s = [];
            for (n in a) n != u && r(a, n) && s.push(n);
            for (; e.length > c;) r(a, n = e[c++]) && (~i(s, n) || s.push(n));
            return s
        }
    }, function(t, e, n) {
        var r = n(1),
            o = n(11),
            i = n(22),
            u = n(45),
            a = n(2).f;
        t.exports = function(t) {
            var e = o.Symbol || (o.Symbol = i ? {} : r.Symbol || {});
            "_" == t.charAt(0) || t in e || a(e, t, {
                value: u.f(t)
            })
        }
    }, function(t, e, n) {
        e.f = n(0)
    }, function(t, e) {
        e.f = Object.getOwnPropertySymbols
    }, function(t, e, n) {
        var r = n(32),
            o = n(14),
            i = n(12),
            u = n(23),
            a = n(10),
            c = n(36),
            s = Object.getOwnPropertyDescriptor;
        e.f = n(3) ? s : function(t, e) {
            if (t = i(t), e = u(e, !0), c) try {
                return s(t, e)
            } catch (t) {}
            if (a(t, e)) return o(!r.f.call(t, e), t[e])
        }
    }, function(t, e, n) {
        var r = n(5),
            o = n(19),
            i = n(0)("match");
        t.exports = function(t) {
            var e;
            return r(t) && (void 0 !== (e = t[i]) ? !!e : "RegExp" == o(t))
        }
    }, function(t, e, n) {
        n(44)("asyncIterator")
    }, function(t, e, n) {
        "use strict";
        var r = n(1),
            o = n(10),
            i = n(3),
            u = n(4),
            a = n(9),
            c = n(80).KEY,
            s = n(6),
            f = n(27),
            l = n(30),
            p = n(15),
            v = n(0),
            h = n(45),
            d = n(44),
            y = n(81),
            m = n(26),
            g = n(8),
            b = n(5),
            E = n(12),
            T = n(23),
            w = n(14),
            O = n(35),
            x = n(82),
            S = n(47),
            _ = n(2),
            A = n(17),
            L = S.f,
            N = _.f,
            M = x.f,
            R = r.Symbol,
            C = r.JSON,
            j = C && C.stringify,
            P = v("_hidden"),
            k = v("toPrimitive"),
            I = {}.propertyIsEnumerable,
            D = f("symbol-registry"),
            F = f("symbols"),
            U = f("op-symbols"),
            V = Object.prototype,
            H = "function" == typeof R,
            G = r.QObject,
            Q = !G || !G.prototype || !G.prototype.findChild,
            B = i && s(function() {
                return 7 != O(N({}, "a", {
                    get: function() {
                        return N(this, "a", {
                            value: 7
                        }).a
                    }
                })).a
            }) ? function(t, e, n) {
                var r = L(V, e);
                r && delete V[e], N(t, e, n), r && t !== V && N(V, e, r)
            } : N,
            q = function(t) {
                var e = F[t] = O(R.prototype);
                return e._k = t, e
            },
            Y = H && "symbol" == typeof R.iterator ? function(t) {
                return "symbol" == typeof t
            } : function(t) {
                return t instanceof R
            },
            J = function(t, e, n) {
                return t === V && J(U, e, n), g(t), e = T(e, !0), g(n), o(F, e) ? (n.enumerable ? (o(t, P) && t[P][e] && (t[P][e] = !1), n = O(n, {
                    enumerable: w(0, !1)
                })) : (o(t, P) || N(t, P, w(1, {})), t[P][e] = !0), B(t, e, n)) : N(t, e, n)
            },
            W = function(t, e) {
                g(t);
                for (var n, r = y(e = E(e)), o = 0, i = r.length; i > o;) J(t, n = r[o++], e[n]);
                return t
            },
            z = function(t) {
                var e = I.call(this, t = T(t, !0));
                return !(this === V && o(F, t) && !o(U, t)) && (!(e || !o(this, t) || !o(F, t) || o(this, P) && this[P][t]) || e)
            },
            $ = function(t, e) {
                if (t = E(t), e = T(e, !0), t !== V || !o(F, e) || o(U, e)) {
                    var n = L(t, e);
                    return !n || !o(F, e) || o(t, P) && t[P][e] || (n.enumerable = !0), n
                }
            },
            K = function(t) {
                for (var e, n = M(E(t)), r = [], i = 0; n.length > i;) o(F, e = n[i++]) || e == P || e == c || r.push(e);
                return r
            },
            X = function(t) {
                for (var e, n = t === V, r = M(n ? U : E(t)), i = [], u = 0; r.length > u;) !o(F, e = r[u++]) || n && !o(V, e) || i.push(F[e]);
                return i
            };
        H || (a((R = function() {
            if (this instanceof R) throw TypeError("Symbol is not a constructor!");
            var t = p(arguments.length > 0 ? arguments[0] : void 0),
                e = function(n) {
                    this === V && e.call(U, n), o(this, P) && o(this[P], t) && (this[P][t] = !1), B(this, t, w(1, n))
                };
            return i && Q && B(V, t, {
                configurable: !0,
                set: e
            }), q(t)
        }).prototype, "toString", function() {
            return this._k
        }), S.f = $, _.f = J, n(33).f = x.f = K, n(32).f = z, n(46).f = X, i && !n(22) && a(V, "propertyIsEnumerable", z, !0), h.f = function(t) {
            return q(v(t))
        }), u(u.G + u.W + u.F * !H, {
            Symbol: R
        });
        for (var Z = "hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables".split(","), tt = 0; Z.length > tt;) v(Z[tt++]);
        for (var et = A(v.store), nt = 0; et.length > nt;) d(et[nt++]);
        u(u.S + u.F * !H, "Symbol", {
            for: function(t) {
                return o(D, t += "") ? D[t] : D[t] = R(t)
            },
            keyFor: function(t) {
                if (!Y(t)) throw TypeError(t + " is not a symbol!");
                for (var e in D)
                    if (D[e] === t) return e
            },
            useSetter: function() {
                Q = !0
            },
            useSimple: function() {
                Q = !1
            }
        }), u(u.S + u.F * !H, "Object", {
            create: function(t, e) {
                return void 0 === e ? O(t) : W(O(t), e)
            },
            defineProperty: J,
            defineProperties: W,
            getOwnPropertyDescriptor: $,
            getOwnPropertyNames: K,
            getOwnPropertySymbols: X
        }), C && u(u.S + u.F * (!H || s(function() {
            var t = R();
            return "[null]" != j([t]) || "{}" != j({
                a: t
            }) || "{}" != j(Object(t))
        })), "JSON", {
            stringify: function(t) {
                for (var e, n, r = [t], o = 1; arguments.length > o;) r.push(arguments[o++]);
                if (n = e = r[1], (b(e) || void 0 !== t) && !Y(t)) return m(e) || (e = function(t, e) {
                    if ("function" == typeof n && (e = n.call(this, t, e)), !Y(e)) return e
                }), r[1] = e, j.apply(C, r)
            }
        }), R.prototype[k] || n(7)(R.prototype, k, R.prototype.valueOf), l(R, "Symbol"), l(Math, "Math", !0), l(r.JSON, "JSON", !0)
    }, function(t, e, n) {
        var r = n(4);
        r(r.S + r.F * !n(3), "Object", {
            defineProperty: n(2).f
        })
    }, function(t, e, n) {
        var r = n(5),
            o = n(8),
            i = function(t, e) {
                if (o(t), !r(e) && null !== e) throw TypeError(e + ": can't set as prototype!")
            };
        t.exports = {
            set: Object.setPrototypeOf || ("__proto__" in {} ? function(t, e, r) {
                try {
                    (r = n(18)(Function.call, n(47).f(Object.prototype, "__proto__").set, 2))(t, []), e = !(t instanceof Array)
                } catch (t) {
                    e = !0
                }
                return function(t, n) {
                    return i(t, n), e ? t.__proto__ = n : r(t, n), t
                }
            }({}, !1) : void 0),
            check: i
        }
    }, function(t, e, n) {
        "use strict";
        n.r(e);
        n(54), n(41), n(66), n(68), n(70), n(77), n(79), n(49), n(50), n(83), n(51), n(84), n(85), n(87), n(88);
        var r = n(34),
            o = n.n(r),
            i = (n(92), function(t) {
                return new RegExp(/<[a-z][\s\S]*>/i).test(t)
            }),
            u = function(t) {
                var e = document.createElement("div");
                return e.innerHTML = t, e.firstChild
            },
            a = function(t, e) {
                return Math.floor(Math.random() * (e - t + 1)) + t
            };
        n(95);

        function c(t) {
            return function(t) {
                if (Array.isArray(t)) {
                    for (var e = 0, n = new Array(t.length); e < t.length; e++) n[e] = t[e];
                    return n
                }
            }(t) || function(t) {
                if (Symbol.iterator in Object(t) || "[object Arguments]" === Object.prototype.toString.call(t)) return Array.from(t)
            }(t) || function() {
                throw new TypeError("Invalid attempt to spread non-iterable instance")
            }()
        }

        function s(t, e) {
            for (var n = 0; n < e.length; n++) {
                var r = e[n];
                r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
            }
        }

        function f(t, e, n) {
            return e in t ? Object.defineProperty(t, e, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : t[e] = n, t
        }
        var l = function() {
            function t(e, n) {
                var r = this;
                if (function(t, e) {
                        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                    }(this, t), f(this, "eventNames", {
                        TYPE_CHARACTER: "TYPE_CHARACTER",
                        REMOVE_CHARACTER: "REMOVE_CHARACTER",
                        REMOVE_ALL: "REMOVE_ALL",
                        REMOVE_LAST_VISIBLE_NODE: "REMOVE_LAST_VISIBLE_NODE",
                        PAUSE_FOR: "PAUSE_FOR",
                        CALL_FUNCTION: "CALL_FUNCTION",
                        ADD_HTML_TAG_ELEMENT: "ADD_HTML_TAG_ELEMENT",
                        REMOVE_HTML_TAG_ELEMENT: "REMOVE_HTML_TAG_ELEMENT"
                    }), f(this, "visibleNodeTypes", {
                        HTML_TAG: "HTML_TAG",
                        TEXT_NODE: "TEXT_NODE"
                    }), f(this, "state", {
                        cursorAnimation: null,
                        lastFrameTime: null,
                        pauseUntil: null,
                        eventQueue: [],
                        eventLoop: null,
                        eventLoopPaused: !1,
                        reverseCalledEvents: [],
                        calledEvents: [],
                        visibleNodes: [],
                        elements: {
                            container: null,
                            wrapper: document.createElement("span"),
                            cursor: document.createElement("span")
                        }
                    }), f(this, "options", {
                        strings: null,
                        cursor: "|",
                        delay: "natural",
                        loop: !1,
                        autoStart: !1,
                        devMode: !1,
                        wrapperClassName: "Typewriter__wrapper",
                        cursorClassName: "Typewriter__cursor"
                    }), f(this, "setupWrapperElement", function() {
                        r.state.elements.wrapper.className = r.options.wrapperClassName, r.state.elements.cursor.className = r.options.cursorClassName, r.state.elements.cursor.innerHTML = r.options.cursor, r.state.elements.container.innerHTML = "", r.state.elements.container.appendChild(r.state.elements.wrapper), r.state.elements.container.appendChild(r.state.elements.cursor)
                    }), f(this, "start", function() {
                        return r.state.eventLoopPaused = !1, r.runEventLoop(), r
                    }), f(this, "pause", function() {
                        return r.state.eventLoopPaused = !0, r
                    }), f(this, "stop", function() {
                        return r.state.eventLoop && o.a.cancel(r.state.eventLoop), r
                    }), f(this, "pauseFor", function(t) {
                        return r.addEventToQueue(r.eventNames.PAUSE_FOR, {
                            ms: t
                        }), r
                    }), f(this, "typeOutAllStrings", function() {
                        return "string" == typeof r.options.strings ? (r.typeString(r.options.strings).pauseFor(1500), r) : (r.options.strings.forEach(function(t, e) {
                            r.typeString(t), e !== r.options.strings.length - 1 && r.typeString(" "), r.pauseFor(1500)
                        }), r)
                    }), f(this, "typeString", function(t) {
                        return i(t) ? r.typeOutHTMLString(t) : (t.split("").forEach(function(t) {
                            r.addEventToQueue(r.eventNames.TYPE_CHARACTER, {
                                character: t
                            })
                        }), r)
                    }), f(this, "typeOutHTMLString", function(t) {
                        var e = u(t),
                            n = e.innerText.split("");
                        return n.length ? (e.innerText = "", r.addEventToQueue(r.eventNames.ADD_HTML_TAG_ELEMENT, {
                            htmlTagElement: e
                        }), n.forEach(function(t) {
                            r.addEventToQueue(r.eventNames.TYPE_CHARACTER, {
                                character: t,
                                htmlTagElement: e
                            })
                        }), r) : r
                    }), f(this, "deleteAll", function() {
                        return r.addEventToQueue(r.eventNames.REMOVE_ALL, {
                            removingCharacterNode: !1
                        }), r
                    }), f(this, "deleteChars", function(t) {
                        for (var e = 0; e < t; e++) r.addEventToQueue(r.eventNames.REMOVE_CHARACTER);
                        return r
                    }), f(this, "callFunction", function(t, e) {
                        return "function" == typeof t && r.addEventToQueue(r.eventNames.CALL_FUNCTION, {
                            cb: t,
                            thisArg: e
                        }), r
                    }), f(this, "typeCharacters", function(t) {
                        return t.forEach(function(t) {
                            r.addEventToQueue(r.eventNames.TYPE_CHARACTER, {
                                character: t
                            })
                        }), r
                    }), f(this, "removeCharacters", function(t) {
                        return t.forEach(function() {
                            r.addEventToQueue(r.eventNames.REMOVE_CHARACTER)
                        }), r
                    }), f(this, "addEventToQueue", function(t, e) {
                        var n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                        return r.addEventToStateProperty(t, e, n, "eventQueue")
                    }), f(this, "addReverseCalledEvent", function(t, e) {
                        var n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                        return r.options.loop ? r.addEventToStateProperty(t, e, n, "reverseCalledEvents") : r
                    }), f(this, "addEventToStateProperty", function(t, e) {
                        var n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                            o = arguments.length > 3 ? arguments[3] : void 0,
                            i = {
                                eventName: t,
                                eventArgs: e
                            };
                        return r.state[o] = n ? [i].concat(c(r.state[o])) : c(r.state[o]).concat([i]), r
                    }), f(this, "runEventLoop", function() {
                        r.state.lastFrameTime || (r.state.lastFrameTime = Date.now());
                        var t = Date.now(),
                            e = t - r.state.lastFrameTime;
                        if (!r.state.eventQueue.length) {
                            if (!r.options.loop) return;
                            r.state.eventQueue = r.state.calledEvents, r.state.calledEvents = [], r.addEventToQueue(r.eventNames.REMOVE_ALL, null, !0)
                        }
                        if (r.state.eventLoop = o()(r.runEventLoop), !r.state.eventLoopPaused) {
                            if (r.state.pauseUntil) {
                                if (t < r.state.pauseUntil) return;
                                r.state.pauseUntil = null
                            }
                            if (!(e <= ("natural" === r.options.delay ? a(100, 200) : r.options.delay))) {
                                var n = r.state.eventQueue.shift(),
                                    i = n.eventName,
                                    u = n.eventArgs;
                                switch (r.logInDevMode({
                                    currentEvent: n,
                                    state: r.state
                                }), i) {
                                    case r.eventNames.TYPE_CHARACTER:
                                        var s = u.character,
                                            f = u.htmlTagElement,
                                            l = document.createTextNode(s);
                                        f ? f.appendChild(l) : r.state.elements.wrapper.appendChild(l), r.state.visibleNodes = c(r.state.visibleNodes).concat([{
                                            type: r.visibleNodeTypes.TEXT_NODE,
                                            node: l
                                        }]);
                                        break;
                                    case r.eventNames.REMOVE_CHARACTER:
                                        r.addEventToQueue(r.eventNames.REMOVE_LAST_VISIBLE_NODE, {
                                            removingCharacterNode: !0
                                        }, !0);
                                        break;
                                    case r.eventNames.PAUSE_FOR:
                                        var p = n.eventArgs.ms;
                                        r.state.pauseUntil = Date.now() + parseInt(p);
                                        break;
                                    case r.eventNames.CALL_FUNCTION:
                                        var v = n.eventArgs,
                                            h = v.cb,
                                            d = v.thisArg;
                                        h.call(d, {
                                            elements: r.state.elements
                                        });
                                        break;
                                    case r.eventNames.ADD_HTML_TAG_ELEMENT:
                                        var y = n.eventArgs.htmlTagElement;
                                        r.state.elements.wrapper.appendChild(y), r.state.visibleNodes = c(r.state.visibleNodes).concat([{
                                            type: r.visibleNodeTypes.HTML_TAG,
                                            node: y
                                        }]);
                                        break;
                                    case r.eventNames.REMOVE_ALL:
                                        for (var m = 0, g = r.state.visibleNodes.length; m < g; m++) r.addEventToQueue(r.eventNames.REMOVE_LAST_VISIBLE_NODE, {
                                            removingCharacterNode: !1
                                        }, !0);
                                        break;
                                    case r.eventNames.REMOVE_LAST_VISIBLE_NODE:
                                        var b = n.eventArgs.removingCharacterNode;
                                        if (r.state.visibleNodes.length) {
                                            var E = r.state.visibleNodes.pop(),
                                                T = E.type;
                                            E.node.remove(), T === r.visibleNodeTypes.HTML_TAG && b && r.addEventToQueue(r.eventNames.REMOVE_LAST_VISIBLE_NODE, null, !0)
                                        }
                                }
                                r.options.loop && (n.eventName === r.eventNames.REMOVE_ALL && n.eventName === r.eventNames.REMOVE_LAST_VISIBLE_NODE || r.state.calledEvents.push(n)), r.state.lastFrameTime = t
                            }
                        }
                    }), !e) throw new Error("No container element was provided");
                if ("string" == typeof e) {
                    var s = document.querySelector(e);
                    if (!s) throw new Error("Could not find container element");
                    this.state.elements.container = s
                } else this.state.elements.container = e;
                n && (this.options = function(t) {
                    for (var e = 1; e < arguments.length; e++) {
                        var n = null != arguments[e] ? arguments[e] : {},
                            r = Object.keys(n);
                        "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(t) {
                            return Object.getOwnPropertyDescriptor(n, t).enumerable
                        }))), r.forEach(function(e) {
                            f(t, e, n[e])
                        })
                    }
                    return t
                }({}, this.options, n)), this.init()
            }
            return function(t, e, n) {
                e && s(t.prototype, e), n && s(t, n)
            }(t, [{
                key: "init",
                value: function() {
                    this.setupWrapperElement(), !0 === this.options.autoStart && this.options.strings && this.typeOutAllStrings().start()
                }
            }, {
                key: "logInDevMode",
                value: function(t) {
                    this.options.devMode && console.log(t)
                }
            }]), t
        }();
        n.d(e, "default", function() {
            return l
        })
    }, function(t, e, n) {
        "use strict";
        var r = n(4),
            o = n(38)(2);
        r(r.P + r.F * !n(40)([].filter, !0), "Array", {
            filter: function(t) {
                return o(this, t, arguments[1])
            }
        })
    }, function(t, e) {
        t.exports = function(t) {
            if ("function" != typeof t) throw TypeError(t + " is not a function!");
            return t
        }
    }, function(t, e, n) {
        var r = n(57);
        t.exports = function(t, e) {
            return new(r(t))(e)
        }
    }, function(t, e, n) {
        var r = n(5),
            o = n(26),
            i = n(0)("species");
        t.exports = function(t) {
            var e;
            return o(t) && ("function" != typeof(e = t.constructor) || e !== Array && !o(e.prototype) || (e = void 0), r(e) && null === (e = e[i]) && (e = void 0)), void 0 === e ? Array : e
        }
    }, function(t, e, n) {
        var r = n(0)("unscopables"),
            o = Array.prototype;
        void 0 == o[r] && n(7)(o, r, {}), t.exports = function(t) {
            o[r][t] = !0
        }
    }, function(t, e) {
        t.exports = function(t, e) {
            return {
                value: e,
                done: !!t
            }
        }
    }, function(t, e, n) {
        "use strict";
        var r = n(35),
            o = n(14),
            i = n(30),
            u = {};
        n(7)(u, n(0)("iterator"), function() {
            return this
        }), t.exports = function(t, e, n) {
            t.prototype = r(u, {
                next: o(1, n)
            }), i(t, e + " Iterator")
        }
    }, function(t, e, n) {
        var r = n(2),
            o = n(8),
            i = n(17);
        t.exports = n(3) ? Object.defineProperties : function(t, e) {
            o(t);
            for (var n, u = i(e), a = u.length, c = 0; a > c;) r.f(t, n = u[c++], e[n]);
            return t
        }
    }, function(t, e, n) {
        var r = n(12),
            o = n(24),
            i = n(63);
        t.exports = function(t) {
            return function(e, n, u) {
                var a, c = r(e),
                    s = o(c.length),
                    f = i(u, s);
                if (t && n != n) {
                    for (; s > f;)
                        if ((a = c[f++]) != a) return !0
                } else
                    for (; s > f; f++)
                        if ((t || f in c) && c[f] === n) return t || f || 0; return !t && -1
            }
        }
    }, function(t, e, n) {
        var r = n(25),
            o = Math.max,
            i = Math.min;
        t.exports = function(t, e) {
            return (t = r(t)) < 0 ? o(t + e, 0) : i(t, e)
        }
    }, function(t, e, n) {
        var r = n(1).document;
        t.exports = r && r.documentElement
    }, function(t, e, n) {
        var r = n(10),
            o = n(20),
            i = n(28)("IE_PROTO"),
            u = Object.prototype;
        t.exports = Object.getPrototypeOf || function(t) {
            return t = o(t), r(t, i) ? t[i] : "function" == typeof t.constructor && t instanceof t.constructor ? t.constructor.prototype : t instanceof Object ? u : null
        }
    }, function(t, e, n) {
        var r = n(20),
            o = n(17);
        n(67)("keys", function() {
            return function(t) {
                return o(r(t))
            }
        })
    }, function(t, e, n) {
        var r = n(4),
            o = n(11),
            i = n(6);
        t.exports = function(t, e) {
            var n = (o.Object || {})[t] || Object[t],
                u = {};
            u[t] = e(n), r(r.S + r.F * i(function() {
                n(1)
            }), "Object", u)
        }
    }, function(t, e, n) {
        "use strict";
        var r = n(69)(!0);
        n(42)(String, "String", function(t) {
            this._t = String(t), this._i = 0
        }, function() {
            var t, e = this._t,
                n = this._i;
            return n >= e.length ? {
                value: void 0,
                done: !0
            } : (t = r(e, n), this._i += t.length, {
                value: t,
                done: !1
            })
        })
    }, function(t, e, n) {
        var r = n(25),
            o = n(21);
        t.exports = function(t) {
            return function(e, n) {
                var i, u, a = String(o(e)),
                    c = r(n),
                    s = a.length;
                return c < 0 || c >= s ? t ? "" : void 0 : (i = a.charCodeAt(c)) < 55296 || i > 56319 || c + 1 === s || (u = a.charCodeAt(c + 1)) < 56320 || u > 57343 ? t ? a.charAt(c) : i : t ? a.slice(c, c + 2) : u - 56320 + (i - 55296 << 10) + 65536
            }
        }
    }, function(t, e, n) {
        "use strict";
        var r = n(18),
            o = n(4),
            i = n(20),
            u = n(71),
            a = n(72),
            c = n(24),
            s = n(73),
            f = n(74);
        o(o.S + o.F * !n(76)(function(t) {
            Array.from(t)
        }), "Array", {
            from: function(t) {
                var e, n, o, l, p = i(t),
                    v = "function" == typeof this ? this : Array,
                    h = arguments.length,
                    d = h > 1 ? arguments[1] : void 0,
                    y = void 0 !== d,
                    m = 0,
                    g = f(p);
                if (y && (d = r(d, h > 2 ? arguments[2] : void 0, 2)), void 0 == g || v == Array && a(g))
                    for (n = new v(e = c(p.length)); e > m; m++) s(n, m, y ? d(p[m], m) : p[m]);
                else
                    for (l = g.call(p), n = new v; !(o = l.next()).done; m++) s(n, m, y ? u(l, d, [o.value, m], !0) : o.value);
                return n.length = m, n
            }
        })
    }, function(t, e, n) {
        var r = n(8);
        t.exports = function(t, e, n, o) {
            try {
                return o ? e(r(n)[0], n[1]) : e(n)
            } catch (e) {
                var i = t.return;
                throw void 0 !== i && r(i.call(t)), e
            }
        }
    }, function(t, e, n) {
        var r = n(16),
            o = n(0)("iterator"),
            i = Array.prototype;
        t.exports = function(t) {
            return void 0 !== t && (r.Array === t || i[o] === t)
        }
    }, function(t, e, n) {
        "use strict";
        var r = n(2),
            o = n(14);
        t.exports = function(t, e, n) {
            e in t ? r.f(t, e, o(0, n)) : t[e] = n
        }
    }, function(t, e, n) {
        var r = n(75),
            o = n(0)("iterator"),
            i = n(16);
        t.exports = n(11).getIteratorMethod = function(t) {
            if (void 0 != t) return t[o] || t["@@iterator"] || i[r(t)]
        }
    }, function(t, e, n) {
        var r = n(19),
            o = n(0)("toStringTag"),
            i = "Arguments" == r(function() {
                return arguments
            }());
        t.exports = function(t) {
            var e, n, u;
            return void 0 === t ? "Undefined" : null === t ? "Null" : "string" == typeof(n = function(t, e) {
                try {
                    return t[e]
                } catch (t) {}
            }(e = Object(t), o)) ? n : i ? r(e) : "Object" == (u = r(e)) && "function" == typeof e.callee ? "Arguments" : u
        }
    }, function(t, e, n) {
        var r = n(0)("iterator"),
            o = !1;
        try {
            var i = [7][r]();
            i.return = function() {
                o = !0
            }, Array.from(i, function() {
                throw 2
            })
        } catch (t) {}
        t.exports = function(t, e) {
            if (!e && !o) return !1;
            var n = !1;
            try {
                var i = [7],
                    u = i[r]();
                u.next = function() {
                    return {
                        done: n = !0
                    }
                }, i[r] = function() {
                    return u
                }, t(i)
            } catch (t) {}
            return n
        }
    }, function(t, e, n) {
        "use strict";
        n(78);
        var r = n(8),
            o = n(31),
            i = n(3),
            u = /./.toString,
            a = function(t) {
                n(9)(RegExp.prototype, "toString", t, !0)
            };
        n(6)(function() {
            return "/a/b" != u.call({
                source: "a",
                flags: "b"
            })
        }) ? a(function() {
            var t = r(this);
            return "/".concat(t.source, "/", "flags" in t ? t.flags : !i && t instanceof RegExp ? o.call(t) : void 0)
        }) : "toString" != u.name && a(function() {
            return u.call(this)
        })
    }, function(t, e, n) {
        n(3) && "g" != /./g.flags && n(2).f(RegExp.prototype, "flags", {
            configurable: !0,
            get: n(31)
        })
    }, function(t, e, n) {
        var r = Date.prototype,
            o = r.toString,
            i = r.getTime;
        new Date(NaN) + "" != "Invalid Date" && n(9)(r, "toString", function() {
            var t = i.call(this);
            return t == t ? o.call(this) : "Invalid Date"
        })
    }, function(t, e, n) {
        var r = n(15)("meta"),
            o = n(5),
            i = n(10),
            u = n(2).f,
            a = 0,
            c = Object.isExtensible || function() {
                return !0
            },
            s = !n(6)(function() {
                return c(Object.preventExtensions({}))
            }),
            f = function(t) {
                u(t, r, {
                    value: {
                        i: "O" + ++a,
                        w: {}
                    }
                })
            },
            l = t.exports = {
                KEY: r,
                NEED: !1,
                fastKey: function(t, e) {
                    if (!o(t)) return "symbol" == typeof t ? t : ("string" == typeof t ? "S" : "P") + t;
                    if (!i(t, r)) {
                        if (!c(t)) return "F";
                        if (!e) return "E";
                        f(t)
                    }
                    return t[r].i
                },
                getWeak: function(t, e) {
                    if (!i(t, r)) {
                        if (!c(t)) return !0;
                        if (!e) return !1;
                        f(t)
                    }
                    return t[r].w
                },
                onFreeze: function(t) {
                    return s && l.NEED && c(t) && !i(t, r) && f(t), t
                }
            }
    }, function(t, e, n) {
        var r = n(17),
            o = n(46),
            i = n(32);
        t.exports = function(t) {
            var e = r(t),
                n = o.f;
            if (n)
                for (var u, a = n(t), c = i.f, s = 0; a.length > s;) c.call(t, u = a[s++]) && e.push(u);
            return e
        }
    }, function(t, e, n) {
        var r = n(12),
            o = n(33).f,
            i = {}.toString,
            u = "object" == typeof window && window && Object.getOwnPropertyNames ? Object.getOwnPropertyNames(window) : [];
        t.exports.f = function(t) {
            return u && "[object Window]" == i.call(t) ? function(t) {
                try {
                    return o(t)
                } catch (t) {
                    return u.slice()
                }
            }(t) : o(r(t))
        }
    }, function(t, e, n) {
        var r = n(4);
        r(r.S, "Array", {
            isArray: n(26)
        })
    }, function(t, e, n) {
        var r = n(4);
        r(r.S, "Date", {
            now: function() {
                return (new Date).getTime()
            }
        })
    }, function(t, e, n) {
        n(86)("split", 2, function(t, e, r) {
            "use strict";
            var o = n(48),
                i = r,
                u = [].push;
            if ("c" == "abbc".split(/(b)*/)[1] || 4 != "test".split(/(?:)/, -1).length || 2 != "ab".split(/(?:ab)*/).length || 4 != ".".split(/(.?)(.?)/).length || ".".split(/()()/).length > 1 || "".split(/.?/).length) {
                var a = void 0 === /()??/.exec("")[1];
                r = function(t, e) {
                    var n = String(this);
                    if (void 0 === t && 0 === e) return [];
                    if (!o(t)) return i.call(n, t, e);
                    var r, c, s, f, l, p = [],
                        v = (t.ignoreCase ? "i" : "") + (t.multiline ? "m" : "") + (t.unicode ? "u" : "") + (t.sticky ? "y" : ""),
                        h = 0,
                        d = void 0 === e ? 4294967295 : e >>> 0,
                        y = new RegExp(t.source, v + "g");
                    for (a || (r = new RegExp("^" + y.source + "$(?!\\s)", v));
                        (c = y.exec(n)) && !((s = c.index + c[0].length) > h && (p.push(n.slice(h, c.index)), !a && c.length > 1 && c[0].replace(r, function() {
                            for (l = 1; l < arguments.length - 2; l++) void 0 === arguments[l] && (c[l] = void 0)
                        }), c.length > 1 && c.index < n.length && u.apply(p, c.slice(1)), f = c[0].length, h = s, p.length >= d));) y.lastIndex === c.index && y.lastIndex++;
                    return h === n.length ? !f && y.test("") || p.push("") : p.push(n.slice(h)), p.length > d ? p.slice(0, d) : p
                }
            } else "0".split(void 0, 0).length && (r = function(t, e) {
                return void 0 === t && 0 === e ? [] : i.call(this, t, e)
            });
            return [function(n, o) {
                var i = t(this),
                    u = void 0 == n ? void 0 : n[e];
                return void 0 !== u ? u.call(n, i, o) : r.call(String(i), n, o)
            }, r]
        })
    }, function(t, e, n) {
        "use strict";
        var r = n(7),
            o = n(9),
            i = n(6),
            u = n(21),
            a = n(0);
        t.exports = function(t, e, n) {
            var c = a(t),
                s = n(u, c, "" [t]),
                f = s[0],
                l = s[1];
            i(function() {
                var e = {};
                return e[c] = function() {
                    return 7
                }, 7 != "" [t](e)
            }) && (o(String.prototype, t, f), r(RegExp.prototype, c, 2 == e ? function(t, e) {
                return l.call(t, this, e)
            } : function(t) {
                return l.call(t, this)
            }))
        }
    }, function(t, e, n) {
        for (var r = n(41), o = n(17), i = n(9), u = n(1), a = n(7), c = n(16), s = n(0), f = s("iterator"), l = s("toStringTag"), p = c.Array, v = {
                CSSRuleList: !0,
                CSSStyleDeclaration: !1,
                CSSValueList: !1,
                ClientRectList: !1,
                DOMRectList: !1,
                DOMStringList: !1,
                DOMTokenList: !0,
                DataTransferItemList: !1,
                FileList: !1,
                HTMLAllCollection: !1,
                HTMLCollection: !1,
                HTMLFormElement: !1,
                HTMLSelectElement: !1,
                MediaList: !0,
                MimeTypeArray: !1,
                NamedNodeMap: !1,
                NodeList: !0,
                PaintRequestList: !1,
                Plugin: !1,
                PluginArray: !1,
                SVGLengthList: !1,
                SVGNumberList: !1,
                SVGPathSegList: !1,
                SVGPointList: !1,
                SVGStringList: !1,
                SVGTransformList: !1,
                SourceBufferList: !1,
                StyleSheetList: !0,
                TextTrackCueList: !1,
                TextTrackList: !1,
                TouchList: !1
            }, h = o(v), d = 0; d < h.length; d++) {
            var y, m = h[d],
                g = v[m],
                b = u[m],
                E = b && b.prototype;
            if (E && (E[f] || a(E, f, p), E[l] || a(E, l, m), c[m] = p, g))
                for (y in r) E[y] || i(E, y, r[y], !0)
        }
    }, function(t, e, n) {
        "use strict";
        var r = n(4),
            o = n(38)(0),
            i = n(40)([].forEach, !0);
        r(r.P + r.F * !i, "Array", {
            forEach: function(t) {
                return o(this, t, arguments[1])
            }
        })
    }, function(t, e) {
        var n;
        n = function() {
            return this
        }();
        try {
            n = n || Function("return this")() || (0, eval)("this")
        } catch (t) {
            "object" == typeof window && (n = window)
        }
        t.exports = n
    }, function(t, e, n) {
        (function(e) {
            (function() {
                var n, r, o, i, u, a;
                "undefined" != typeof performance && null !== performance && performance.now ? t.exports = function() {
                    return performance.now()
                } : void 0 !== e && null !== e && e.hrtime ? (t.exports = function() {
                    return (n() - u) / 1e6
                }, r = e.hrtime, i = (n = function() {
                    var t;
                    return 1e9 * (t = r())[0] + t[1]
                })(), a = 1e9 * e.uptime(), u = i - a) : Date.now ? (t.exports = function() {
                    return Date.now() - o
                }, o = Date.now()) : (t.exports = function() {
                    return (new Date).getTime() - o
                }, o = (new Date).getTime())
            }).call(this)
        }).call(this, n(91))
    }, function(t, e) {
        var n, r, o = t.exports = {};

        function i() {
            throw new Error("setTimeout has not been defined")
        }

        function u() {
            throw new Error("clearTimeout has not been defined")
        }

        function a(t) {
            if (n === setTimeout) return setTimeout(t, 0);
            if ((n === i || !n) && setTimeout) return n = setTimeout, setTimeout(t, 0);
            try {
                return n(t, 0)
            } catch (e) {
                try {
                    return n.call(null, t, 0)
                } catch (e) {
                    return n.call(this, t, 0)
                }
            }
        }! function() {
            try {
                n = "function" == typeof setTimeout ? setTimeout : i
            } catch (t) {
                n = i
            }
            try {
                r = "function" == typeof clearTimeout ? clearTimeout : u
            } catch (t) {
                r = u
            }
        }();
        var c, s = [],
            f = !1,
            l = -1;

        function p() {
            f && c && (f = !1, c.length ? s = c.concat(s) : l = -1, s.length && v())
        }

        function v() {
            if (!f) {
                var t = a(p);
                f = !0;
                for (var e = s.length; e;) {
                    for (c = s, s = []; ++l < e;) c && c[l].run();
                    l = -1, e = s.length
                }
                c = null, f = !1,
                    function(t) {
                        if (r === clearTimeout) return clearTimeout(t);
                        if ((r === u || !r) && clearTimeout) return r = clearTimeout, clearTimeout(t);
                        try {
                            r(t)
                        } catch (e) {
                            try {
                                return r.call(null, t)
                            } catch (e) {
                                return r.call(this, t)
                            }
                        }
                    }(t)
            }
        }

        function h(t, e) {
            this.fun = t, this.array = e
        }

        function d() {}
        o.nextTick = function(t) {
            var e = new Array(arguments.length - 1);
            if (arguments.length > 1)
                for (var n = 1; n < arguments.length; n++) e[n - 1] = arguments[n];
            s.push(new h(t, e)), 1 !== s.length || f || a(v)
        }, h.prototype.run = function() {
            this.fun.apply(null, this.array)
        }, o.title = "browser", o.browser = !0, o.env = {}, o.argv = [], o.version = "", o.versions = {}, o.on = d, o.addListener = d, o.once = d, o.off = d, o.removeListener = d, o.removeAllListeners = d, o.emit = d, o.prependListener = d, o.prependOnceListener = d, o.listeners = function(t) {
            return []
        }, o.binding = function(t) {
            throw new Error("process.binding is not supported")
        }, o.cwd = function() {
            return "/"
        }, o.chdir = function(t) {
            throw new Error("process.chdir is not supported")
        }, o.umask = function() {
            return 0
        }
    }, function(t, e, n) {
        var r = n(1),
            o = n(93),
            i = n(2).f,
            u = n(33).f,
            a = n(48),
            c = n(31),
            s = r.RegExp,
            f = s,
            l = s.prototype,
            p = /a/g,
            v = /a/g,
            h = new s(p) !== p;
        if (n(3) && (!h || n(6)(function() {
                return v[n(0)("match")] = !1, s(p) != p || s(v) == v || "/a/i" != s(p, "i")
            }))) {
            s = function(t, e) {
                var n = this instanceof s,
                    r = a(t),
                    i = void 0 === e;
                return !n && r && t.constructor === s && i ? t : o(h ? new f(r && !i ? t.source : t, e) : f((r = t instanceof s) ? t.source : t, r && i ? c.call(t) : e), n ? this : l, s)
            };
            for (var d = function(t) {
                    t in s || i(s, t, {
                        configurable: !0,
                        get: function() {
                            return f[t]
                        },
                        set: function(e) {
                            f[t] = e
                        }
                    })
                }, y = u(f), m = 0; y.length > m;) d(y[m++]);
            l.constructor = s, s.prototype = l, n(9)(r, "RegExp", s)
        }
        n(94)("RegExp")
    }, function(t, e, n) {
        var r = n(5),
            o = n(52).set;
        t.exports = function(t, e, n) {
            var i, u = e.constructor;
            return u !== n && "function" == typeof u && (i = u.prototype) !== n.prototype && r(i) && o && o(t, i), t
        }
    }, function(t, e, n) {
        "use strict";
        var r = n(1),
            o = n(2),
            i = n(3),
            u = n(0)("species");
        t.exports = function(t) {
            var e = r[t];
            i && e && !e[u] && o.f(e, u, {
                configurable: !0,
                get: function() {
                    return this
                }
            })
        }
    }, function(t, e, n) {
        var r = n(96);
        "string" == typeof r && (r = [
            [t.i, r, ""]
        ]);
        var o = {
            hmr: !0,
            transform: void 0,
            insertInto: void 0
        };
        n(98)(r, o);
        r.locals && (t.exports = r.locals)
    }, function(t, e, n) {
        (t.exports = n(97)(!1)).push([t.i, ".Typewriter__cursor{-webkit-animation:Typewriter-cursor 1s infinite;animation:Typewriter-cursor 1s infinite;margin-left:1px}@-webkit-keyframes Typewriter-cursor{0%{opacity:0}50%{opacity:1}to{opacity:0}}@keyframes Typewriter-cursor{0%{opacity:0}50%{opacity:1}to{opacity:0}}", ""])
    }, function(t, e) {
        t.exports = function(t) {
            var e = [];
            return e.toString = function() {
                return this.map(function(e) {
                    var n = function(t, e) {
                        var n = t[1] || "",
                            r = t[3];
                        if (!r) return n;
                        if (e && "function" == typeof btoa) {
                            var o = function(t) {
                                    return "/*# sourceMappingURL=data:application/json;charset=utf-8;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(t)))) + " */"
                                }(r),
                                i = r.sources.map(function(t) {
                                    return "/*# sourceURL=" + r.sourceRoot + t + " */"
                                });
                            return [n].concat(i).concat([o]).join("\n")
                        }
                        return [n].join("\n")
                    }(e, t);
                    return e[2] ? "@media " + e[2] + "{" + n + "}" : n
                }).join("")
            }, e.i = function(t, n) {
                "string" == typeof t && (t = [
                    [null, t, ""]
                ]);
                for (var r = {}, o = 0; o < this.length; o++) {
                    var i = this[o][0];
                    "number" == typeof i && (r[i] = !0)
                }
                for (o = 0; o < t.length; o++) {
                    var u = t[o];
                    "number" == typeof u[0] && r[u[0]] || (n && !u[2] ? u[2] = n : n && (u[2] = "(" + u[2] + ") and (" + n + ")"), e.push(u))
                }
            }, e
        }
    }, function(t, e, n) {
        var r = {},
            o = function(t) {
                var e;
                return function() {
                    return void 0 === e && (e = t.apply(this, arguments)), e
                }
            }(function() {
                return window && document && document.all && !window.atob
            }),
            i = function(t) {
                var e = {};
                return function(t, n) {
                    if ("function" == typeof t) return t();
                    if (void 0 === e[t]) {
                        var r = function(t, e) {
                            return e ? e.querySelector(t) : document.querySelector(t)
                        }.call(this, t, n);
                        if (window.HTMLIFrameElement && r instanceof window.HTMLIFrameElement) try {
                            r = r.contentDocument.head
                        } catch (t) {
                            r = null
                        }
                        e[t] = r
                    }
                    return e[t]
                }
            }(),
            u = null,
            a = 0,
            c = [],
            s = n(99);

        function f(t, e) {
            for (var n = 0; n < t.length; n++) {
                var o = t[n],
                    i = r[o.id];
                if (i) {
                    i.refs++;
                    for (var u = 0; u < i.parts.length; u++) i.parts[u](o.parts[u]);
                    for (; u < o.parts.length; u++) i.parts.push(y(o.parts[u], e))
                } else {
                    var a = [];
                    for (u = 0; u < o.parts.length; u++) a.push(y(o.parts[u], e));
                    r[o.id] = {
                        id: o.id,
                        refs: 1,
                        parts: a
                    }
                }
            }
        }

        function l(t, e) {
            for (var n = [], r = {}, o = 0; o < t.length; o++) {
                var i = t[o],
                    u = e.base ? i[0] + e.base : i[0],
                    a = {
                        css: i[1],
                        media: i[2],
                        sourceMap: i[3]
                    };
                r[u] ? r[u].parts.push(a) : n.push(r[u] = {
                    id: u,
                    parts: [a]
                })
            }
            return n
        }

        function p(t, e) {
            var n = i(t.insertInto);
            if (!n) throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
            var r = c[c.length - 1];
            if ("top" === t.insertAt) r ? r.nextSibling ? n.insertBefore(e, r.nextSibling) : n.appendChild(e) : n.insertBefore(e, n.firstChild), c.push(e);
            else if ("bottom" === t.insertAt) n.appendChild(e);
            else {
                if ("object" != typeof t.insertAt || !t.insertAt.before) throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
                var o = i(t.insertAt.before, n);
                n.insertBefore(e, o)
            }
        }

        function v(t) {
            if (null === t.parentNode) return !1;
            t.parentNode.removeChild(t);
            var e = c.indexOf(t);
            e >= 0 && c.splice(e, 1)
        }

        function h(t) {
            var e = document.createElement("style");
            if (void 0 === t.attrs.type && (t.attrs.type = "text/css"), void 0 === t.attrs.nonce) {
                var r = function() {
                    0;
                    return n.nc
                }();
                r && (t.attrs.nonce = r)
            }
            return d(e, t.attrs), p(t, e), e
        }

        function d(t, e) {
            Object.keys(e).forEach(function(n) {
                t.setAttribute(n, e[n])
            })
        }

        function y(t, e) {
            var n, r, o, i;
            if (e.transform && t.css) {
                if (!(i = e.transform(t.css))) return function() {};
                t.css = i
            }
            if (e.singleton) {
                var c = a++;
                n = u || (u = h(e)), r = g.bind(null, n, c, !1), o = g.bind(null, n, c, !0)
            } else t.sourceMap && "function" == typeof URL && "function" == typeof URL.createObjectURL && "function" == typeof URL.revokeObjectURL && "function" == typeof Blob && "function" == typeof btoa ? (n = function(t) {
                var e = document.createElement("link");
                return void 0 === t.attrs.type && (t.attrs.type = "text/css"), t.attrs.rel = "stylesheet", d(e, t.attrs), p(t, e), e
            }(e), r = function(t, e, n) {
                var r = n.css,
                    o = n.sourceMap,
                    i = void 0 === e.convertToAbsoluteUrls && o;
                (e.convertToAbsoluteUrls || i) && (r = s(r));
                o && (r += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(o)))) + " */");
                var u = new Blob([r], {
                        type: "text/css"
                    }),
                    a = t.href;
                t.href = URL.createObjectURL(u), a && URL.revokeObjectURL(a)
            }.bind(null, n, e), o = function() {
                v(n), n.href && URL.revokeObjectURL(n.href)
            }) : (n = h(e), r = function(t, e) {
                var n = e.css,
                    r = e.media;
                r && t.setAttribute("media", r);
                if (t.styleSheet) t.styleSheet.cssText = n;
                else {
                    for (; t.firstChild;) t.removeChild(t.firstChild);
                    t.appendChild(document.createTextNode(n))
                }
            }.bind(null, n), o = function() {
                v(n)
            });
            return r(t),
                function(e) {
                    if (e) {
                        if (e.css === t.css && e.media === t.media && e.sourceMap === t.sourceMap) return;
                        r(t = e)
                    } else o()
                }
        }
        t.exports = function(t, e) {
            if ("undefined" != typeof DEBUG && DEBUG && "object" != typeof document) throw new Error("The style-loader cannot be used in a non-browser environment");
            (e = e || {}).attrs = "object" == typeof e.attrs ? e.attrs : {}, e.singleton || "boolean" == typeof e.singleton || (e.singleton = o()), e.insertInto || (e.insertInto = "head"), e.insertAt || (e.insertAt = "bottom");
            var n = l(t, e);
            return f(n, e),
                function(t) {
                    for (var o = [], i = 0; i < n.length; i++) {
                        var u = n[i];
                        (a = r[u.id]).refs--, o.push(a)
                    }
                    t && f(l(t, e), e);
                    for (i = 0; i < o.length; i++) {
                        var a;
                        if (0 === (a = o[i]).refs) {
                            for (var c = 0; c < a.parts.length; c++) a.parts[c]();
                            delete r[a.id]
                        }
                    }
                }
        };
        var m = function() {
            var t = [];
            return function(e, n) {
                return t[e] = n, t.filter(Boolean).join("\n")
            }
        }();

        function g(t, e, n, r) {
            var o = n ? "" : r.css;
            if (t.styleSheet) t.styleSheet.cssText = m(e, o);
            else {
                var i = document.createTextNode(o),
                    u = t.childNodes;
                u[e] && t.removeChild(u[e]), u.length ? t.insertBefore(i, u[e]) : t.appendChild(i)
            }
        }
    }, function(t, e) {
        t.exports = function(t) {
            var e = "undefined" != typeof window && window.location;
            if (!e) throw new Error("fixUrls requires window.location");
            if (!t || "string" != typeof t) return t;
            var n = e.protocol + "//" + e.host,
                r = n + e.pathname.replace(/\/[^\/]*$/, "/");
            return t.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(t, e) {
                var o, i = e.trim().replace(/^"(.*)"$/, function(t, e) {
                    return e
                }).replace(/^'(.*)'$/, function(t, e) {
                    return e
                });
                return /^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(i) ? t : (o = 0 === i.indexOf("//") ? i : 0 === i.indexOf("/") ? n + i : r + i.replace(/^\.\//, ""), "url(" + JSON.stringify(o) + ")")
            })
        }
    }]).default
});