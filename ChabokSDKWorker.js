/*! chabokpush - 1.0.3 | (c) 2017, 2018  ADP digital | ISC | http://chabokpush.com/ */
!function (t, e) {
    "object" == typeof exports && "object" == typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define("chabokpush", [], e) : "object" == typeof exports ? exports.chabokpush = e() : t.chabokpush = e()
}("undefined" != typeof self ? self : this, function () {
    return function (t) {
        function e(r) {
            if (n[r]) return n[r].exports;
            var i = n[r] = {i: r, l: !1, exports: {}};
            return t[r].call(i.exports, i, i.exports, e), i.l = !0, i.exports
        }

        var n = {};
        return e.m = t, e.c = n, e.d = function (t, n, r) {
            e.o(t, n) || Object.defineProperty(t, n, {configurable: !1, enumerable: !0, get: r})
        }, e.n = function (t) {
            var n = t && t.__esModule ? function () {
                return t.default
            } : function () {
                return t
            };
            return e.d(n, "a", n), n
        }, e.o = function (t, e) {
            return Object.prototype.hasOwnProperty.call(t, e)
        }, e.p = "", e(e.s = 40)
    }([function (t, e) {
        function n() {
            throw new Error("setTimeout has not been defined")
        }

        function r() {
            throw new Error("clearTimeout has not been defined")
        }

        function i(t) {
            if (l === setTimeout) return setTimeout(t, 0);
            if ((l === n || !l) && setTimeout) return l = setTimeout, setTimeout(t, 0);
            try {
                return l(t, 0)
            } catch (e) {
                try {
                    return l.call(null, t, 0)
                } catch (e) {
                    return l.call(this, t, 0)
                }
            }
        }

        function o(t) {
            if (f === clearTimeout) return clearTimeout(t);
            if ((f === r || !f) && clearTimeout) return f = clearTimeout, clearTimeout(t);
            try {
                return f(t)
            } catch (e) {
                try {
                    return f.call(null, t)
                } catch (e) {
                    return f.call(this, t)
                }
            }
        }

        function s() {
            g && p && (g = !1, p.length ? d = p.concat(d) : b = -1, d.length && a())
        }

        function a() {
            if (!g) {
                var t = i(s);
                g = !0;
                for (var e = d.length; e;) {
                    for (p = d, d = []; ++b < e;) p && p[b].run();
                    b = -1, e = d.length
                }
                p = null, g = !1, o(t)
            }
        }

        function u(t, e) {
            this.fun = t, this.array = e
        }

        function c() {
        }

        var l, f, h = t.exports = {};
        !function () {
            try {
                l = "function" == typeof setTimeout ? setTimeout : n
            } catch (t) {
                l = n
            }
            try {
                f = "function" == typeof clearTimeout ? clearTimeout : r
            } catch (t) {
                f = r
            }
        }();
        var p, d = [], g = !1, b = -1;
        h.nextTick = function (t) {
            var e = new Array(arguments.length - 1);
            if (arguments.length > 1) for (var n = 1; n < arguments.length; n++) e[n - 1] = arguments[n];
            d.push(new u(t, e)), 1 !== d.length || g || i(a)
        }, u.prototype.run = function () {
            this.fun.apply(null, this.array)
        }, h.title = "browser", h.browser = !0, h.env = {}, h.argv = [], h.version = "", h.versions = {}, h.on = c, h.addListener = c, h.once = c, h.off = c, h.removeListener = c, h.removeAllListeners = c, h.emit = c, h.prependListener = c, h.prependOnceListener = c, h.listeners = function (t) {
            return []
        }, h.binding = function (t) {
            throw new Error("process.binding is not supported")
        }, h.cwd = function () {
            return "/"
        }, h.chdir = function (t) {
            throw new Error("process.chdir is not supported")
        }, h.umask = function () {
            return 0
        }
    }, function (t, e, n) {
        "use strict";

        function r(t) {
            return "[object Array]" === k.call(t)
        }

        function i(t) {
            return "[object ArrayBuffer]" === k.call(t)
        }

        function o(t) {
            return "undefined" != typeof FormData && t instanceof FormData
        }

        function s(t) {
            return "undefined" != typeof ArrayBuffer && ArrayBuffer.isView ? ArrayBuffer.isView(t) : t && t.buffer && t.buffer instanceof ArrayBuffer
        }

        function a(t) {
            return "string" == typeof t
        }

        function u(t) {
            return "number" == typeof t
        }

        function c(t) {
            return void 0 === t
        }

        function l(t) {
            return null !== t && "object" == typeof t
        }

        function f(t) {
            return "[object Date]" === k.call(t)
        }

        function h(t) {
            return "[object File]" === k.call(t)
        }

        function p(t) {
            return "[object Blob]" === k.call(t)
        }

        function d(t) {
            return "[object Function]" === k.call(t)
        }

        function g(t) {
            return l(t) && d(t.pipe)
        }

        function b(t) {
            return "undefined" != typeof URLSearchParams && t instanceof URLSearchParams
        }

        function m(t) {
            return t.replace(/^\s*/, "").replace(/\s*$/, "")
        }

        function y() {
            return ("undefined" == typeof navigator || "ReactNative" !== navigator.product) && ("undefined" != typeof window && "undefined" != typeof document)
        }

        function v(t, e) {
            if (null !== t && void 0 !== t) if ("object" != typeof t && (t = [t]), r(t)) for (var n = 0, i = t.length; n < i; n++) e.call(null, t[n], n, t); else for (var o in t) Object.prototype.hasOwnProperty.call(t, o) && e.call(null, t[o], o, t)
        }

        function w() {
            function t(t, n) {
                "object" == typeof e[n] && "object" == typeof t ? e[n] = w(e[n], t) : e[n] = t
            }

            for (var e = {}, n = 0, r = arguments.length; n < r; n++) v(arguments[n], t);
            return e
        }

        function _(t, e, n) {
            return v(e, function (e, r) {
                t[r] = n && "function" == typeof e ? S(e, n) : e
            }), t
        }

        var S = n(17), E = n(62), k = Object.prototype.toString;
        t.exports = {
            isArray: r,
            isArrayBuffer: i,
            isBuffer: E,
            isFormData: o,
            isArrayBufferView: s,
            isString: a,
            isNumber: u,
            isObject: l,
            isUndefined: c,
            isDate: f,
            isFile: h,
            isBlob: p,
            isFunction: d,
            isStream: g,
            isURLSearchParams: b,
            isStandardBrowserEnv: y,
            forEach: v,
            merge: w,
            extend: _,
            trim: m
        }
    }, function (t, e) {
        var n;
        n = function () {
            return this
        }();
        try {
            n = n || Function("return this")() || (0, eval)("this")
        } catch (t) {
            "object" == typeof window && (n = window)
        }
        t.exports = n
    }, function (t, e) {
        "function" == typeof Object.create ? t.exports = function (t, e) {
            t.super_ = e, t.prototype = Object.create(e.prototype, {
                constructor: {
                    value: t,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            })
        } : t.exports = function (t, e) {
            t.super_ = e;
            var n = function () {
            };
            n.prototype = e.prototype, t.prototype = new n, t.prototype.constructor = t
        }
    }, function (t, e, n) {
        function r(t, e) {
            for (var n in t) e[n] = t[n]
        }

        function i(t, e, n) {
            return s(t, e, n)
        }

        var o = n(10), s = o.Buffer;
        s.from && s.alloc && s.allocUnsafe && s.allocUnsafeSlow ? t.exports = o : (r(o, e), e.Buffer = i), r(s, i), i.from = function (t, e, n) {
            if ("number" == typeof t) throw new TypeError("Argument must not be a number");
            return s(t, e, n)
        }, i.alloc = function (t, e, n) {
            if ("number" != typeof t) throw new TypeError("Argument must be a number");
            var r = s(t);
            return void 0 !== e ? "string" == typeof n ? r.fill(e, n) : r.fill(e) : r.fill(0), r
        }, i.allocUnsafe = function (t) {
            if ("number" != typeof t) throw new TypeError("Argument must be a number");
            return s(t)
        }, i.allocUnsafeSlow = function (t) {
            if ("number" != typeof t) throw new TypeError("Argument must be a number");
            return o.SlowBuffer(t)
        }
    }, function (t, e) {
        function n() {
            this._events = this._events || {}, this._maxListeners = this._maxListeners || void 0
        }

        function r(t) {
            return "function" == typeof t
        }

        function i(t) {
            return "number" == typeof t
        }

        function o(t) {
            return "object" == typeof t && null !== t
        }

        function s(t) {
            return void 0 === t
        }

        t.exports = n, n.EventEmitter = n, n.prototype._events = void 0, n.prototype._maxListeners = void 0, n.defaultMaxListeners = 10, n.prototype.setMaxListeners = function (t) {
            if (!i(t) || t < 0 || isNaN(t)) throw TypeError("n must be a positive number");
            return this._maxListeners = t, this
        }, n.prototype.emit = function (t) {
            var e, n, i, a, u, c;
            if (this._events || (this._events = {}), "error" === t && (!this._events.error || o(this._events.error) && !this._events.error.length)) {
                if ((e = arguments[1]) instanceof Error) throw e;
                var l = new Error('Uncaught, unspecified "error" event. (' + e + ")");
                throw l.context = e, l
            }
            if (n = this._events[t], s(n)) return !1;
            if (r(n)) switch (arguments.length) {
                case 1:
                    n.call(this);
                    break;
                case 2:
                    n.call(this, arguments[1]);
                    break;
                case 3:
                    n.call(this, arguments[1], arguments[2]);
                    break;
                default:
                    a = Array.prototype.slice.call(arguments, 1), n.apply(this, a)
            } else if (o(n)) for (a = Array.prototype.slice.call(arguments, 1), c = n.slice(), i = c.length, u = 0; u < i; u++) c[u].apply(this, a);
            return !0
        }, n.prototype.addListener = function (t, e) {
            var i;
            if (!r(e)) throw TypeError("listener must be a function");
            return this._events || (this._events = {}), this._events.newListener && this.emit("newListener", t, r(e.listener) ? e.listener : e), this._events[t] ? o(this._events[t]) ? this._events[t].push(e) : this._events[t] = [this._events[t], e] : this._events[t] = e, o(this._events[t]) && !this._events[t].warned && (i = s(this._maxListeners) ? n.defaultMaxListeners : this._maxListeners) && i > 0 && this._events[t].length > i && (this._events[t].warned = !0, console.trace), this
        }, n.prototype.on = n.prototype.addListener, n.prototype.once = function (t, e) {
            function n() {
                this.removeListener(t, n), i || (i = !0, e.apply(this, arguments))
            }

            if (!r(e)) throw TypeError("listener must be a function");
            var i = !1;
            return n.listener = e, this.on(t, n), this
        }, n.prototype.removeListener = function (t, e) {
            var n, i, s, a;
            if (!r(e)) throw TypeError("listener must be a function");
            if (!this._events || !this._events[t]) return this;
            if (n = this._events[t], s = n.length, i = -1, n === e || r(n.listener) && n.listener === e) delete this._events[t], this._events.removeListener && this.emit("removeListener", t, e); else if (o(n)) {
                for (a = s; a-- > 0;) if (n[a] === e || n[a].listener && n[a].listener === e) {
                    i = a;
                    break
                }
                if (i < 0) return this;
                1 === n.length ? (n.length = 0, delete this._events[t]) : n.splice(i, 1), this._events.removeListener && this.emit("removeListener", t, e)
            }
            return this
        }, n.prototype.removeAllListeners = function (t) {
            var e, n;
            if (!this._events) return this;
            if (!this._events.removeListener) return 0 === arguments.length ? this._events = {} : this._events[t] && delete this._events[t], this;
            if (0 === arguments.length) {
                for (e in this._events) "removeListener" !== e && this.removeAllListeners(e);
                return this.removeAllListeners("removeListener"), this._events = {}, this
            }
            if (n = this._events[t], r(n)) this.removeListener(t, n); else if (n) for (; n.length;) this.removeListener(t, n[n.length - 1]);
            return delete this._events[t], this
        }, n.prototype.listeners = function (t) {
            return this._events && this._events[t] ? r(this._events[t]) ? [this._events[t]] : this._events[t].slice() : []
        }, n.prototype.listenerCount = function (t) {
            if (this._events) {
                var e = this._events[t];
                if (r(e)) return 1;
                if (e) return e.length
            }
            return 0
        }, n.listenerCount = function (t, e) {
            return t.listenerCount(e)
        }
    }, function (t, e, n) {
        "use strict";

        function r(t) {
            if (!(this instanceof r)) return new r(t);
            c.call(this, t), l.call(this, t), t && !1 === t.readable && (this.readable = !1), t && !1 === t.writable && (this.writable = !1), this.allowHalfOpen = !0, t && !1 === t.allowHalfOpen && (this.allowHalfOpen = !1), this.once("end", i)
        }

        function i() {
            this.allowHalfOpen || this._writableState.ended || s(o, this)
        }

        function o(t) {
            t.end()
        }

        var s = n(7), a = Object.keys || function (t) {
            var e = [];
            for (var n in t) e.push(n);
            return e
        };
        t.exports = r;
        var u = n(8);
        u.inherits = n(3);
        var c = n(23), l = n(27);
        u.inherits(r, c);
        for (var f = a(l.prototype), h = 0; h < f.length; h++) {
            var p = f[h];
            r.prototype[p] || (r.prototype[p] = l.prototype[p])
        }
        Object.defineProperty(r.prototype, "destroyed", {
            get: function () {
                return void 0 !== this._readableState && void 0 !== this._writableState && (this._readableState.destroyed && this._writableState.destroyed)
            }, set: function (t) {
                void 0 !== this._readableState && void 0 !== this._writableState && (this._readableState.destroyed = t, this._writableState.destroyed = t)
            }
        }), r.prototype._destroy = function (t, e) {
            this.push(null), this.end(), s(e, t)
        }
    }, function (t, e, n) {
        "use strict";
        (function (e) {
            function n(t, n, r, i) {
                if ("function" != typeof t) throw new TypeError('"callback" argument must be a function');
                var o, s, a = arguments.length;
                switch (a) {
                    case 0:
                    case 1:
                        return e.nextTick(t);
                    case 2:
                        return e.nextTick(function () {
                            t.call(null, n)
                        });
                    case 3:
                        return e.nextTick(function () {
                            t.call(null, n, r)
                        });
                    case 4:
                        return e.nextTick(function () {
                            t.call(null, n, r, i)
                        });
                    default:
                        for (o = new Array(a - 1), s = 0; s < o.length;) o[s++] = arguments[s];
                        return e.nextTick(function () {
                            t.apply(null, o)
                        })
                }
            }

            !e.version || 0 === e.version.indexOf("v0.") || 0 === e.version.indexOf("v1.") && 0 !== e.version.indexOf("v1.8.") ? t.exports = n : t.exports = e.nextTick
        }).call(e, n(0))
    }, function (t, e, n) {
        (function (t) {
            function n(t) {
                return Array.isArray ? Array.isArray(t) : "[object Array]" === b(t)
            }

            function r(t) {
                return "boolean" == typeof t
            }

            function i(t) {
                return null === t
            }

            function o(t) {
                return null == t
            }

            function s(t) {
                return "number" == typeof t
            }

            function a(t) {
                return "string" == typeof t
            }

            function u(t) {
                return "symbol" == typeof t
            }

            function c(t) {
                return void 0 === t
            }

            function l(t) {
                return "[object RegExp]" === b(t)
            }

            function f(t) {
                return "object" == typeof t && null !== t
            }

            function h(t) {
                return "[object Date]" === b(t)
            }

            function p(t) {
                return "[object Error]" === b(t) || t instanceof Error
            }

            function d(t) {
                return "function" == typeof t
            }

            function g(t) {
                return null === t || "boolean" == typeof t || "number" == typeof t || "string" == typeof t || "symbol" == typeof t || void 0 === t
            }

            function b(t) {
                return Object.prototype.toString.call(t)
            }

            e.isArray = n, e.isBoolean = r, e.isNull = i, e.isNullOrUndefined = o, e.isNumber = s, e.isString = a, e.isSymbol = u, e.isUndefined = c, e.isRegExp = l, e.isObject = f, e.isDate = h, e.isError = p, e.isFunction = d, e.isPrimitive = g, e.isBuffer = t.isBuffer
        }).call(e, n(10).Buffer)
    }, function (t, e, n) {
        e = t.exports = n(23), e.Stream = e, e.Readable = e, e.Writable = n(27), e.Duplex = n(6), e.Transform = n(29), e.PassThrough = n(88)
    }, function (t, e, n) {
        "use strict";
        (function (t) {
            function r() {
                return o.TYPED_ARRAY_SUPPORT ? 2147483647 : 1073741823
            }

            function i(t, e) {
                if (r() < e) throw new RangeError("Invalid typed array length");
                return o.TYPED_ARRAY_SUPPORT ? (t = new Uint8Array(e), t.__proto__ = o.prototype) : (null === t && (t = new o(e)), t.length = e), t
            }

            function o(t, e, n) {
                if (!(o.TYPED_ARRAY_SUPPORT || this instanceof o)) return new o(t, e, n);
                if ("number" == typeof t) {
                    if ("string" == typeof e) throw new Error("If encoding is specified then the first argument must be a string");
                    return c(this, t)
                }
                return s(this, t, e, n)
            }

            function s(t, e, n, r) {
                if ("number" == typeof e) throw new TypeError('"value" argument must not be a number');
                return "undefined" != typeof ArrayBuffer && e instanceof ArrayBuffer ? h(t, e, n, r) : "string" == typeof e ? l(t, e, n) : p(t, e)
            }

            function a(t) {
                if ("number" != typeof t) throw new TypeError('"size" argument must be a number');
                if (t < 0) throw new RangeError('"size" argument must not be negative')
            }

            function u(t, e, n, r) {
                return a(e), e <= 0 ? i(t, e) : void 0 !== n ? "string" == typeof r ? i(t, e).fill(n, r) : i(t, e).fill(n) : i(t, e)
            }

            function c(t, e) {
                if (a(e), t = i(t, e < 0 ? 0 : 0 | d(e)), !o.TYPED_ARRAY_SUPPORT) for (var n = 0; n < e; ++n) t[n] = 0;
                return t
            }

            function l(t, e, n) {
                if ("string" == typeof n && "" !== n || (n = "utf8"), !o.isEncoding(n)) throw new TypeError('"encoding" must be a valid string encoding');
                var r = 0 | b(e, n);
                t = i(t, r);
                var s = t.write(e, n);
                return s !== r && (t = t.slice(0, s)), t
            }

            function f(t, e) {
                var n = e.length < 0 ? 0 : 0 | d(e.length);
                t = i(t, n);
                for (var r = 0; r < n; r += 1) t[r] = 255 & e[r];
                return t
            }

            function h(t, e, n, r) {
                if (e.byteLength, n < 0 || e.byteLength < n) throw new RangeError("'offset' is out of bounds");
                if (e.byteLength < n + (r || 0)) throw new RangeError("'length' is out of bounds");
                return e = void 0 === n && void 0 === r ? new Uint8Array(e) : void 0 === r ? new Uint8Array(e, n) : new Uint8Array(e, n, r), o.TYPED_ARRAY_SUPPORT ? (t = e, t.__proto__ = o.prototype) : t = f(t, e), t
            }

            function p(t, e) {
                if (o.isBuffer(e)) {
                    var n = 0 | d(e.length);
                    return t = i(t, n), 0 === t.length ? t : (e.copy(t, 0, 0, n), t)
                }
                if (e) {
                    if ("undefined" != typeof ArrayBuffer && e.buffer instanceof ArrayBuffer || "length" in e) return "number" != typeof e.length || $(e.length) ? i(t, 0) : f(t, e);
                    if ("Buffer" === e.type && Q(e.data)) return f(t, e.data)
                }
                throw new TypeError("First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.")
            }

            function d(t) {
                if (t >= r()) throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x" + r().toString(16) + " bytes");
                return 0 | t
            }

            function g(t) {
                return +t != t && (t = 0), o.alloc(+t)
            }

            function b(t, e) {
                if (o.isBuffer(t)) return t.length;
                if ("undefined" != typeof ArrayBuffer && "function" == typeof ArrayBuffer.isView && (ArrayBuffer.isView(t) || t instanceof ArrayBuffer)) return t.byteLength;
                "string" != typeof t && (t = "" + t);
                var n = t.length;
                if (0 === n) return 0;
                for (var r = !1; ;) switch (e) {
                    case"ascii":
                    case"latin1":
                    case"binary":
                        return n;
                    case"utf8":
                    case"utf-8":
                    case void 0:
                        return H(t).length;
                    case"ucs2":
                    case"ucs-2":
                    case"utf16le":
                    case"utf-16le":
                        return 2 * n;
                    case"hex":
                        return n >>> 1;
                    case"base64":
                        return Y(t).length;
                    default:
                        if (r) return H(t).length;
                        e = ("" + e).toLowerCase(), r = !0
                }
            }

            function m(t, e, n) {
                var r = !1;
                if ((void 0 === e || e < 0) && (e = 0), e > this.length) return "";
                if ((void 0 === n || n > this.length) && (n = this.length), n <= 0) return "";
                if (n >>>= 0, e >>>= 0, n <= e) return "";
                for (t || (t = "utf8"); ;) switch (t) {
                    case"hex":
                        return P(this, e, n);
                    case"utf8":
                    case"utf-8":
                        return A(this, e, n);
                    case"ascii":
                        return R(this, e, n);
                    case"latin1":
                    case"binary":
                        return C(this, e, n);
                    case"base64":
                        return T(this, e, n);
                    case"ucs2":
                    case"ucs-2":
                    case"utf16le":
                    case"utf-16le":
                        return M(this, e, n);
                    default:
                        if (r) throw new TypeError("Unknown encoding: " + t);
                        t = (t + "").toLowerCase(), r = !0
                }
            }

            function y(t, e, n) {
                var r = t[e];
                t[e] = t[n], t[n] = r
            }

            function v(t, e, n, r, i) {
                if (0 === t.length) return -1;
                if ("string" == typeof n ? (r = n, n = 0) : n > 2147483647 ? n = 2147483647 : n < -2147483648 && (n = -2147483648), n = +n, isNaN(n) && (n = i ? 0 : t.length - 1), n < 0 && (n = t.length + n), n >= t.length) {
                    if (i) return -1;
                    n = t.length - 1
                } else if (n < 0) {
                    if (!i) return -1;
                    n = 0
                }
                if ("string" == typeof e && (e = o.from(e, r)), o.isBuffer(e)) return 0 === e.length ? -1 : w(t, e, n, r, i);
                if ("number" == typeof e) return e &= 255, o.TYPED_ARRAY_SUPPORT && "function" == typeof Uint8Array.prototype.indexOf ? i ? Uint8Array.prototype.indexOf.call(t, e, n) : Uint8Array.prototype.lastIndexOf.call(t, e, n) : w(t, [e], n, r, i);
                throw new TypeError("val must be string, number or Buffer")
            }

            function w(t, e, n, r, i) {
                function o(t, e) {
                    return 1 === s ? t[e] : t.readUInt16BE(e * s)
                }

                var s = 1, a = t.length, u = e.length;
                if (void 0 !== r && ("ucs2" === (r = String(r).toLowerCase()) || "ucs-2" === r || "utf16le" === r || "utf-16le" === r)) {
                    if (t.length < 2 || e.length < 2) return -1;
                    s = 2, a /= 2, u /= 2, n /= 2
                }
                var c;
                if (i) {
                    var l = -1;
                    for (c = n; c < a; c++) if (o(t, c) === o(e, -1 === l ? 0 : c - l)) {
                        if (-1 === l && (l = c), c - l + 1 === u) return l * s
                    } else -1 !== l && (c -= c - l), l = -1
                } else for (n + u > a && (n = a - u), c = n; c >= 0; c--) {
                    for (var f = !0, h = 0; h < u; h++) if (o(t, c + h) !== o(e, h)) {
                        f = !1;
                        break
                    }
                    if (f) return c
                }
                return -1
            }

            function _(t, e, n, r) {
                n = Number(n) || 0;
                var i = t.length - n;
                r ? (r = Number(r)) > i && (r = i) : r = i;
                var o = e.length;
                if (o % 2 != 0) throw new TypeError("Invalid hex string");
                r > o / 2 && (r = o / 2);
                for (var s = 0; s < r; ++s) {
                    var a = parseInt(e.substr(2 * s, 2), 16);
                    if (isNaN(a)) return s;
                    t[n + s] = a
                }
                return s
            }

            function S(t, e, n, r) {
                return V(H(e, t.length - n), t, n, r)
            }

            function E(t, e, n, r) {
                return V(z(e), t, n, r)
            }

            function k(t, e, n, r) {
                return E(t, e, n, r)
            }

            function x(t, e, n, r) {
                return V(Y(e), t, n, r)
            }

            function I(t, e, n, r) {
                return V(G(e, t.length - n), t, n, r)
            }

            function T(t, e, n) {
                return 0 === e && n === t.length ? X.fromByteArray(t) : X.fromByteArray(t.slice(e, n))
            }

            function A(t, e, n) {
                n = Math.min(t.length, n);
                for (var r = [], i = e; i < n;) {
                    var o = t[i], s = null, a = o > 239 ? 4 : o > 223 ? 3 : o > 191 ? 2 : 1;
                    if (i + a <= n) {
                        var u, c, l, f;
                        switch (a) {
                            case 1:
                                o < 128 && (s = o);
                                break;
                            case 2:
                                u = t[i + 1], 128 == (192 & u) && (f = (31 & o) << 6 | 63 & u) > 127 && (s = f);
                                break;
                            case 3:
                                u = t[i + 1], c = t[i + 2], 128 == (192 & u) && 128 == (192 & c) && (f = (15 & o) << 12 | (63 & u) << 6 | 63 & c) > 2047 && (f < 55296 || f > 57343) && (s = f);
                                break;
                            case 4:
                                u = t[i + 1], c = t[i + 2], l = t[i + 3], 128 == (192 & u) && 128 == (192 & c) && 128 == (192 & l) && (f = (15 & o) << 18 | (63 & u) << 12 | (63 & c) << 6 | 63 & l) > 65535 && f < 1114112 && (s = f)
                        }
                    }
                    null === s ? (s = 65533, a = 1) : s > 65535 && (s -= 65536, r.push(s >>> 10 & 1023 | 55296), s = 56320 | 1023 & s), r.push(s), i += a
                }
                return O(r)
            }

            function O(t) {
                var e = t.length;
                if (e <= Z) return String.fromCharCode.apply(String, t);
                for (var n = "", r = 0; r < e;) n += String.fromCharCode.apply(String, t.slice(r, r += Z));
                return n
            }

            function R(t, e, n) {
                var r = "";
                n = Math.min(t.length, n);
                for (var i = e; i < n; ++i) r += String.fromCharCode(127 & t[i]);
                return r
            }

            function C(t, e, n) {
                var r = "";
                n = Math.min(t.length, n);
                for (var i = e; i < n; ++i) r += String.fromCharCode(t[i]);
                return r
            }

            function P(t, e, n) {
                var r = t.length;
                (!e || e < 0) && (e = 0), (!n || n < 0 || n > r) && (n = r);
                for (var i = "", o = e; o < n; ++o) i += K(t[o]);
                return i
            }

            function M(t, e, n) {
                for (var r = t.slice(e, n), i = "", o = 0; o < r.length; o += 2) i += String.fromCharCode(r[o] + 256 * r[o + 1]);
                return i
            }

            function j(t, e, n) {
                if (t % 1 != 0 || t < 0) throw new RangeError("offset is not uint");
                if (t + e > n) throw new RangeError("Trying to access beyond buffer length")
            }

            function L(t, e, n, r, i, s) {
                if (!o.isBuffer(t)) throw new TypeError('"buffer" argument must be a Buffer instance');
                if (e > i || e < s) throw new RangeError('"value" argument is out of bounds');
                if (n + r > t.length) throw new RangeError("Index out of range")
            }

            function N(t, e, n, r) {
                e < 0 && (e = 65535 + e + 1);
                for (var i = 0, o = Math.min(t.length - n, 2); i < o; ++i) t[n + i] = (e & 255 << 8 * (r ? i : 1 - i)) >>> 8 * (r ? i : 1 - i)
            }

            function U(t, e, n, r) {
                e < 0 && (e = 4294967295 + e + 1);
                for (var i = 0, o = Math.min(t.length - n, 4); i < o; ++i) t[n + i] = e >>> 8 * (r ? i : 3 - i) & 255
            }

            function B(t, e, n, r, i, o) {
                if (n + r > t.length) throw new RangeError("Index out of range");
                if (n < 0) throw new RangeError("Index out of range")
            }

            function D(t, e, n, r, i) {
                return i || B(t, e, n, 4, 3.4028234663852886e38, -3.4028234663852886e38), J.write(t, e, n, r, 23, 4), n + 4
            }

            function q(t, e, n, r, i) {
                return i || B(t, e, n, 8, 1.7976931348623157e308, -1.7976931348623157e308), J.write(t, e, n, r, 52, 8), n + 8
            }

            function F(t) {
                if (t = W(t).replace(tt, ""), t.length < 2) return "";
                for (; t.length % 4 != 0;) t += "=";
                return t
            }

            function W(t) {
                return t.trim ? t.trim() : t.replace(/^\s+|\s+$/g, "")
            }

            function K(t) {
                return t < 16 ? "0" + t.toString(16) : t.toString(16)
            }

            function H(t, e) {
                e = e || 1 / 0;
                for (var n, r = t.length, i = null, o = [], s = 0; s < r; ++s) {
                    if ((n = t.charCodeAt(s)) > 55295 && n < 57344) {
                        if (!i) {
                            if (n > 56319) {
                                (e -= 3) > -1 && o.push(239, 191, 189);
                                continue
                            }
                            if (s + 1 === r) {
                                (e -= 3) > -1 && o.push(239, 191, 189);
                                continue
                            }
                            i = n;
                            continue
                        }
                        if (n < 56320) {
                            (e -= 3) > -1 && o.push(239, 191, 189), i = n;
                            continue
                        }
                        n = 65536 + (i - 55296 << 10 | n - 56320)
                    } else i && (e -= 3) > -1 && o.push(239, 191, 189);
                    if (i = null, n < 128) {
                        if ((e -= 1) < 0) break;
                        o.push(n)
                    } else if (n < 2048) {
                        if ((e -= 2) < 0) break;
                        o.push(n >> 6 | 192, 63 & n | 128)
                    } else if (n < 65536) {
                        if ((e -= 3) < 0) break;
                        o.push(n >> 12 | 224, n >> 6 & 63 | 128, 63 & n | 128)
                    } else {
                        if (!(n < 1114112)) throw new Error("Invalid code point");
                        if ((e -= 4) < 0) break;
                        o.push(n >> 18 | 240, n >> 12 & 63 | 128, n >> 6 & 63 | 128, 63 & n | 128)
                    }
                }
                return o
            }

            function z(t) {
                for (var e = [], n = 0; n < t.length; ++n) e.push(255 & t.charCodeAt(n));
                return e
            }

            function G(t, e) {
                for (var n, r, i, o = [], s = 0; s < t.length && !((e -= 2) < 0); ++s) n = t.charCodeAt(s), r = n >> 8, i = n % 256, o.push(i), o.push(r);
                return o
            }

            function Y(t) {
                return X.toByteArray(F(t))
            }

            function V(t, e, n, r) {
                for (var i = 0; i < r && !(i + n >= e.length || i >= t.length); ++i) e[i + n] = t[i];
                return i
            }

            function $(t) {
                return t !== t
            }

            /*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <feross@feross.org> <http://feross.org>
 * @license  MIT
 */
            var X = n(81), J = n(82), Q = n(24);
            e.Buffer = o, e.SlowBuffer = g, e.INSPECT_MAX_BYTES = 50, o.TYPED_ARRAY_SUPPORT = void 0 !== t.TYPED_ARRAY_SUPPORT ? t.TYPED_ARRAY_SUPPORT : function () {
                try {
                    var t = new Uint8Array(1);
                    return t.__proto__ = {
                        __proto__: Uint8Array.prototype, foo: function () {
                            return 42
                        }
                    }, 42 === t.foo() && "function" == typeof t.subarray && 0 === t.subarray(1, 1).byteLength
                } catch (t) {
                    return !1
                }
            }(), e.kMaxLength = r(), o.poolSize = 8192, o._augment = function (t) {
                return t.__proto__ = o.prototype, t
            }, o.from = function (t, e, n) {
                return s(null, t, e, n)
            }, o.TYPED_ARRAY_SUPPORT && (o.prototype.__proto__ = Uint8Array.prototype, o.__proto__ = Uint8Array, "undefined" != typeof Symbol && Symbol.species && o[Symbol.species] === o && Object.defineProperty(o, Symbol.species, {
                value: null,
                configurable: !0
            })), o.alloc = function (t, e, n) {
                return u(null, t, e, n)
            }, o.allocUnsafe = function (t) {
                return c(null, t)
            }, o.allocUnsafeSlow = function (t) {
                return c(null, t)
            }, o.isBuffer = function (t) {
                return !(null == t || !t._isBuffer)
            }, o.compare = function (t, e) {
                if (!o.isBuffer(t) || !o.isBuffer(e)) throw new TypeError("Arguments must be Buffers");
                if (t === e) return 0;
                for (var n = t.length, r = e.length, i = 0, s = Math.min(n, r); i < s; ++i) if (t[i] !== e[i]) {
                    n = t[i], r = e[i];
                    break
                }
                return n < r ? -1 : r < n ? 1 : 0
            }, o.isEncoding = function (t) {
                switch (String(t).toLowerCase()) {
                    case"hex":
                    case"utf8":
                    case"utf-8":
                    case"ascii":
                    case"latin1":
                    case"binary":
                    case"base64":
                    case"ucs2":
                    case"ucs-2":
                    case"utf16le":
                    case"utf-16le":
                        return !0;
                    default:
                        return !1
                }
            }, o.concat = function (t, e) {
                if (!Q(t)) throw new TypeError('"list" argument must be an Array of Buffers');
                if (0 === t.length) return o.alloc(0);
                var n;
                if (void 0 === e) for (e = 0, n = 0; n < t.length; ++n) e += t[n].length;
                var r = o.allocUnsafe(e), i = 0;
                for (n = 0; n < t.length; ++n) {
                    var s = t[n];
                    if (!o.isBuffer(s)) throw new TypeError('"list" argument must be an Array of Buffers');
                    s.copy(r, i), i += s.length
                }
                return r
            }, o.byteLength = b, o.prototype._isBuffer = !0, o.prototype.swap16 = function () {
                var t = this.length;
                if (t % 2 != 0) throw new RangeError("Buffer size must be a multiple of 16-bits");
                for (var e = 0; e < t; e += 2) y(this, e, e + 1);
                return this
            }, o.prototype.swap32 = function () {
                var t = this.length;
                if (t % 4 != 0) throw new RangeError("Buffer size must be a multiple of 32-bits");
                for (var e = 0; e < t; e += 4) y(this, e, e + 3), y(this, e + 1, e + 2);
                return this
            }, o.prototype.swap64 = function () {
                var t = this.length;
                if (t % 8 != 0) throw new RangeError("Buffer size must be a multiple of 64-bits");
                for (var e = 0; e < t; e += 8) y(this, e, e + 7), y(this, e + 1, e + 6), y(this, e + 2, e + 5), y(this, e + 3, e + 4);
                return this
            }, o.prototype.toString = function () {
                var t = 0 | this.length;
                return 0 === t ? "" : 0 === arguments.length ? A(this, 0, t) : m.apply(this, arguments)
            }, o.prototype.equals = function (t) {
                if (!o.isBuffer(t)) throw new TypeError("Argument must be a Buffer");
                return this === t || 0 === o.compare(this, t)
            }, o.prototype.inspect = function () {
                var t = "", n = e.INSPECT_MAX_BYTES;
                return this.length > 0 && (t = this.toString("hex", 0, n).match(/.{2}/g).join(" "), this.length > n && (t += " ... ")), "<Buffer " + t + ">"
            }, o.prototype.compare = function (t, e, n, r, i) {
                if (!o.isBuffer(t)) throw new TypeError("Argument must be a Buffer");
                if (void 0 === e && (e = 0), void 0 === n && (n = t ? t.length : 0), void 0 === r && (r = 0), void 0 === i && (i = this.length), e < 0 || n > t.length || r < 0 || i > this.length) throw new RangeError("out of range index");
                if (r >= i && e >= n) return 0;
                if (r >= i) return -1;
                if (e >= n) return 1;
                if (e >>>= 0, n >>>= 0, r >>>= 0, i >>>= 0, this === t) return 0;
                for (var s = i - r, a = n - e, u = Math.min(s, a), c = this.slice(r, i), l = t.slice(e, n), f = 0; f < u; ++f) if (c[f] !== l[f]) {
                    s = c[f], a = l[f];
                    break
                }
                return s < a ? -1 : a < s ? 1 : 0
            }, o.prototype.includes = function (t, e, n) {
                return -1 !== this.indexOf(t, e, n)
            }, o.prototype.indexOf = function (t, e, n) {
                return v(this, t, e, n, !0)
            }, o.prototype.lastIndexOf = function (t, e, n) {
                return v(this, t, e, n, !1)
            }, o.prototype.write = function (t, e, n, r) {
                if (void 0 === e) r = "utf8", n = this.length, e = 0; else if (void 0 === n && "string" == typeof e) r = e, n = this.length, e = 0; else {
                    if (!isFinite(e)) throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");
                    e |= 0, isFinite(n) ? (n |= 0, void 0 === r && (r = "utf8")) : (r = n, n = void 0)
                }
                var i = this.length - e;
                if ((void 0 === n || n > i) && (n = i), t.length > 0 && (n < 0 || e < 0) || e > this.length) throw new RangeError("Attempt to write outside buffer bounds");
                r || (r = "utf8");
                for (var o = !1; ;) switch (r) {
                    case"hex":
                        return _(this, t, e, n);
                    case"utf8":
                    case"utf-8":
                        return S(this, t, e, n);
                    case"ascii":
                        return E(this, t, e, n);
                    case"latin1":
                    case"binary":
                        return k(this, t, e, n);
                    case"base64":
                        return x(this, t, e, n);
                    case"ucs2":
                    case"ucs-2":
                    case"utf16le":
                    case"utf-16le":
                        return I(this, t, e, n);
                    default:
                        if (o) throw new TypeError("Unknown encoding: " + r);
                        r = ("" + r).toLowerCase(), o = !0
                }
            }, o.prototype.toJSON = function () {
                return {type: "Buffer", data: Array.prototype.slice.call(this._arr || this, 0)}
            };
            var Z = 4096;
            o.prototype.slice = function (t, e) {
                var n = this.length;
                t = ~~t, e = void 0 === e ? n : ~~e, t < 0 ? (t += n) < 0 && (t = 0) : t > n && (t = n), e < 0 ? (e += n) < 0 && (e = 0) : e > n && (e = n), e < t && (e = t);
                var r;
                if (o.TYPED_ARRAY_SUPPORT) r = this.subarray(t, e), r.__proto__ = o.prototype; else {
                    var i = e - t;
                    r = new o(i, void 0);
                    for (var s = 0; s < i; ++s) r[s] = this[s + t]
                }
                return r
            }, o.prototype.readUIntLE = function (t, e, n) {
                t |= 0, e |= 0, n || j(t, e, this.length);
                for (var r = this[t], i = 1, o = 0; ++o < e && (i *= 256);) r += this[t + o] * i;
                return r
            }, o.prototype.readUIntBE = function (t, e, n) {
                t |= 0, e |= 0, n || j(t, e, this.length);
                for (var r = this[t + --e], i = 1; e > 0 && (i *= 256);) r += this[t + --e] * i;
                return r
            }, o.prototype.readUInt8 = function (t, e) {
                return e || j(t, 1, this.length), this[t]
            }, o.prototype.readUInt16LE = function (t, e) {
                return e || j(t, 2, this.length), this[t] | this[t + 1] << 8
            }, o.prototype.readUInt16BE = function (t, e) {
                return e || j(t, 2, this.length), this[t] << 8 | this[t + 1]
            }, o.prototype.readUInt32LE = function (t, e) {
                return e || j(t, 4, this.length), (this[t] | this[t + 1] << 8 | this[t + 2] << 16) + 16777216 * this[t + 3]
            }, o.prototype.readUInt32BE = function (t, e) {
                return e || j(t, 4, this.length), 16777216 * this[t] + (this[t + 1] << 16 | this[t + 2] << 8 | this[t + 3])
            }, o.prototype.readIntLE = function (t, e, n) {
                t |= 0, e |= 0, n || j(t, e, this.length);
                for (var r = this[t], i = 1, o = 0; ++o < e && (i *= 256);) r += this[t + o] * i;
                return i *= 128, r >= i && (r -= Math.pow(2, 8 * e)), r
            }, o.prototype.readIntBE = function (t, e, n) {
                t |= 0, e |= 0, n || j(t, e, this.length);
                for (var r = e, i = 1, o = this[t + --r]; r > 0 && (i *= 256);) o += this[t + --r] * i;
                return i *= 128, o >= i && (o -= Math.pow(2, 8 * e)), o
            }, o.prototype.readInt8 = function (t, e) {
                return e || j(t, 1, this.length), 128 & this[t] ? -1 * (255 - this[t] + 1) : this[t]
            }, o.prototype.readInt16LE = function (t, e) {
                e || j(t, 2, this.length);
                var n = this[t] | this[t + 1] << 8;
                return 32768 & n ? 4294901760 | n : n
            }, o.prototype.readInt16BE = function (t, e) {
                e || j(t, 2, this.length);
                var n = this[t + 1] | this[t] << 8;
                return 32768 & n ? 4294901760 | n : n
            }, o.prototype.readInt32LE = function (t, e) {
                return e || j(t, 4, this.length), this[t] | this[t + 1] << 8 | this[t + 2] << 16 | this[t + 3] << 24
            }, o.prototype.readInt32BE = function (t, e) {
                return e || j(t, 4, this.length), this[t] << 24 | this[t + 1] << 16 | this[t + 2] << 8 | this[t + 3]
            }, o.prototype.readFloatLE = function (t, e) {
                return e || j(t, 4, this.length), J.read(this, t, !0, 23, 4)
            }, o.prototype.readFloatBE = function (t, e) {
                return e || j(t, 4, this.length), J.read(this, t, !1, 23, 4)
            }, o.prototype.readDoubleLE = function (t, e) {
                return e || j(t, 8, this.length), J.read(this, t, !0, 52, 8)
            }, o.prototype.readDoubleBE = function (t, e) {
                return e || j(t, 8, this.length), J.read(this, t, !1, 52, 8)
            }, o.prototype.writeUIntLE = function (t, e, n, r) {
                if (t = +t, e |= 0, n |= 0, !r) {
                    L(this, t, e, n, Math.pow(2, 8 * n) - 1, 0)
                }
                var i = 1, o = 0;
                for (this[e] = 255 & t; ++o < n && (i *= 256);) this[e + o] = t / i & 255;
                return e + n
            }, o.prototype.writeUIntBE = function (t, e, n, r) {
                if (t = +t, e |= 0, n |= 0, !r) {
                    L(this, t, e, n, Math.pow(2, 8 * n) - 1, 0)
                }
                var i = n - 1, o = 1;
                for (this[e + i] = 255 & t; --i >= 0 && (o *= 256);) this[e + i] = t / o & 255;
                return e + n
            }, o.prototype.writeUInt8 = function (t, e, n) {
                return t = +t, e |= 0, n || L(this, t, e, 1, 255, 0), o.TYPED_ARRAY_SUPPORT || (t = Math.floor(t)), this[e] = 255 & t, e + 1
            }, o.prototype.writeUInt16LE = function (t, e, n) {
                return t = +t, e |= 0, n || L(this, t, e, 2, 65535, 0), o.TYPED_ARRAY_SUPPORT ? (this[e] = 255 & t, this[e + 1] = t >>> 8) : N(this, t, e, !0), e + 2
            }, o.prototype.writeUInt16BE = function (t, e, n) {
                return t = +t, e |= 0, n || L(this, t, e, 2, 65535, 0), o.TYPED_ARRAY_SUPPORT ? (this[e] = t >>> 8, this[e + 1] = 255 & t) : N(this, t, e, !1), e + 2
            }, o.prototype.writeUInt32LE = function (t, e, n) {
                return t = +t, e |= 0, n || L(this, t, e, 4, 4294967295, 0), o.TYPED_ARRAY_SUPPORT ? (this[e + 3] = t >>> 24, this[e + 2] = t >>> 16, this[e + 1] = t >>> 8, this[e] = 255 & t) : U(this, t, e, !0), e + 4
            }, o.prototype.writeUInt32BE = function (t, e, n) {
                return t = +t, e |= 0, n || L(this, t, e, 4, 4294967295, 0), o.TYPED_ARRAY_SUPPORT ? (this[e] = t >>> 24, this[e + 1] = t >>> 16, this[e + 2] = t >>> 8, this[e + 3] = 255 & t) : U(this, t, e, !1), e + 4
            }, o.prototype.writeIntLE = function (t, e, n, r) {
                if (t = +t, e |= 0, !r) {
                    var i = Math.pow(2, 8 * n - 1);
                    L(this, t, e, n, i - 1, -i)
                }
                var o = 0, s = 1, a = 0;
                for (this[e] = 255 & t; ++o < n && (s *= 256);) t < 0 && 0 === a && 0 !== this[e + o - 1] && (a = 1), this[e + o] = (t / s >> 0) - a & 255;
                return e + n
            }, o.prototype.writeIntBE = function (t, e, n, r) {
                if (t = +t, e |= 0, !r) {
                    var i = Math.pow(2, 8 * n - 1);
                    L(this, t, e, n, i - 1, -i)
                }
                var o = n - 1, s = 1, a = 0;
                for (this[e + o] = 255 & t; --o >= 0 && (s *= 256);) t < 0 && 0 === a && 0 !== this[e + o + 1] && (a = 1), this[e + o] = (t / s >> 0) - a & 255;
                return e + n
            }, o.prototype.writeInt8 = function (t, e, n) {
                return t = +t, e |= 0, n || L(this, t, e, 1, 127, -128), o.TYPED_ARRAY_SUPPORT || (t = Math.floor(t)), t < 0 && (t = 255 + t + 1), this[e] = 255 & t, e + 1
            }, o.prototype.writeInt16LE = function (t, e, n) {
                return t = +t, e |= 0, n || L(this, t, e, 2, 32767, -32768), o.TYPED_ARRAY_SUPPORT ? (this[e] = 255 & t, this[e + 1] = t >>> 8) : N(this, t, e, !0), e + 2
            }, o.prototype.writeInt16BE = function (t, e, n) {
                return t = +t, e |= 0, n || L(this, t, e, 2, 32767, -32768), o.TYPED_ARRAY_SUPPORT ? (this[e] = t >>> 8, this[e + 1] = 255 & t) : N(this, t, e, !1), e + 2
            }, o.prototype.writeInt32LE = function (t, e, n) {
                return t = +t, e |= 0, n || L(this, t, e, 4, 2147483647, -2147483648), o.TYPED_ARRAY_SUPPORT ? (this[e] = 255 & t, this[e + 1] = t >>> 8, this[e + 2] = t >>> 16, this[e + 3] = t >>> 24) : U(this, t, e, !0), e + 4
            }, o.prototype.writeInt32BE = function (t, e, n) {
                return t = +t, e |= 0, n || L(this, t, e, 4, 2147483647, -2147483648), t < 0 && (t = 4294967295 + t + 1), o.TYPED_ARRAY_SUPPORT ? (this[e] = t >>> 24, this[e + 1] = t >>> 16, this[e + 2] = t >>> 8, this[e + 3] = 255 & t) : U(this, t, e, !1), e + 4
            }, o.prototype.writeFloatLE = function (t, e, n) {
                return D(this, t, e, !0, n)
            }, o.prototype.writeFloatBE = function (t, e, n) {
                return D(this, t, e, !1, n)
            }, o.prototype.writeDoubleLE = function (t, e, n) {
                return q(this, t, e, !0, n)
            }, o.prototype.writeDoubleBE = function (t, e, n) {
                return q(this, t, e, !1, n)
            }, o.prototype.copy = function (t, e, n, r) {
                if (n || (n = 0), r || 0 === r || (r = this.length), e >= t.length && (e = t.length), e || (e = 0), r > 0 && r < n && (r = n), r === n) return 0;
                if (0 === t.length || 0 === this.length) return 0;
                if (e < 0) throw new RangeError("targetStart out of bounds");
                if (n < 0 || n >= this.length) throw new RangeError("sourceStart out of bounds");
                if (r < 0) throw new RangeError("sourceEnd out of bounds");
                r > this.length && (r = this.length), t.length - e < r - n && (r = t.length - e + n);
                var i, s = r - n;
                if (this === t && n < e && e < r) for (i = s - 1; i >= 0; --i) t[i + e] = this[i + n]; else if (s < 1e3 || !o.TYPED_ARRAY_SUPPORT) for (i = 0; i < s; ++i) t[i + e] = this[i + n]; else Uint8Array.prototype.set.call(t, this.subarray(n, n + s), e);
                return s
            }, o.prototype.fill = function (t, e, n, r) {
                if ("string" == typeof t) {
                    if ("string" == typeof e ? (r = e, e = 0, n = this.length) : "string" == typeof n && (r = n, n = this.length), 1 === t.length) {
                        var i = t.charCodeAt(0);
                        i < 256 && (t = i)
                    }
                    if (void 0 !== r && "string" != typeof r) throw new TypeError("encoding must be a string");
                    if ("string" == typeof r && !o.isEncoding(r)) throw new TypeError("Unknown encoding: " + r)
                } else "number" == typeof t && (t &= 255);
                if (e < 0 || this.length < e || this.length < n) throw new RangeError("Out of range index");
                if (n <= e) return this;
                e >>>= 0, n = void 0 === n ? this.length : n >>> 0, t || (t = 0);
                var s;
                if ("number" == typeof t) for (s = e; s < n; ++s) this[s] = t; else {
                    var a = o.isBuffer(t) ? t : H(new o(t, r).toString()), u = a.length;
                    for (s = 0; s < n - e; ++s) this[s + e] = a[s % u]
                }
                return this
            };
            var tt = /[^+\/0-9A-Za-z-_]/g
        }).call(e, n(2))
    }, function (t, e, n) {
        "use strict";

        function r() {
            h = !1
        }

        function i(t) {
            if (!t) return void(l !== d && (l = d, r()));
            if (t !== l) {
                if (t.length !== d.length) throw new Error("Custom alphabet for shortid must be " + d.length + " unique characters. You submitted " + t.length + " characters: " + t);
                var e = t.split("").filter(function (t, e, n) {
                    return e !== n.lastIndexOf(t)
                });
                if (e.length) throw new Error("Custom alphabet for shortid must be " + d.length + " unique characters. These characters were not unique: " + e.join(", "));
                l = t, r()
            }
        }

        function o(t) {
            return i(t), l
        }

        function s(t) {
            p.seed(t), f !== t && (r(), f = t)
        }

        function a() {
            l || i(d);
            for (var t, e = l.split(""), n = [], r = p.nextValue(); e.length > 0;) r = p.nextValue(), t = Math.floor(r * e.length), n.push(e.splice(t, 1)[0]);
            return n.join("")
        }

        function u() {
            return h || (h = a())
        }

        function c(t) {
            return u()[t]
        }

        var l, f, h, p = n(118), d = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ_-";
        t.exports = {characters: o, seed: s, lookup: c, shuffled: u}
    }, function (t, e, n) {
        "use strict";
        var r = n(51)();
        t.exports = function (t) {
            return t !== r && null !== t
        }
    }, function (t, e, n) {
        "use strict";
        (function (e) {
            function r(t, e) {
                !i.isUndefined(t) && i.isUndefined(t["Content-Type"]) && (t["Content-Type"] = e)
            }

            var i = n(1), o = n(64), s = {"Content-Type": "application/x-www-form-urlencoded"}, a = {
                adapter: function () {
                    var t;
                    return "undefined" != typeof XMLHttpRequest ? t = n(18) : void 0 !== e && (t = n(18)), t
                }(),
                transformRequest: [function (t, e) {
                    return o(e, "Content-Type"), i.isFormData(t) || i.isArrayBuffer(t) || i.isBuffer(t) || i.isStream(t) || i.isFile(t) || i.isBlob(t) ? t : i.isArrayBufferView(t) ? t.buffer : i.isURLSearchParams(t) ? (r(e, "application/x-www-form-urlencoded;charset=utf-8"), t.toString()) : i.isObject(t) ? (r(e, "application/json;charset=utf-8"), JSON.stringify(t)) : t
                }],
                transformResponse: [function (t) {
                    if ("string" == typeof t) try {
                        t = JSON.parse(t)
                    } catch (t) {
                    }
                    return t
                }],
                timeout: 0,
                xsrfCookieName: "XSRF-TOKEN",
                xsrfHeaderName: "X-XSRF-TOKEN",
                maxContentLength: -1,
                validateStatus: function (t) {
                    return t >= 200 && t < 300
                }
            };
            a.headers = {common: {Accept: "application/json, text/plain, */*"}}, i.forEach(["delete", "get", "head"], function (t) {
                a.headers[t] = {}
            }), i.forEach(["post", "put", "patch"], function (t) {
                a.headers[t] = i.merge(s)
            }), t.exports = a
        }).call(e, n(0))
    }, function (t, e) {
        function n() {
            for (var t = {}, e = 0; e < arguments.length; e++) {
                var n = arguments[e];
                for (var i in n) r.call(n, i) && (t[i] = n[i])
            }
            return t
        }

        t.exports = n;
        var r = Object.prototype.hasOwnProperty
    }, function (t, e, n) {
        "use strict";

        function r() {
            this.protocol = null, this.slashes = null, this.auth = null, this.host = null, this.port = null, this.hostname = null, this.hash = null, this.search = null, this.query = null, this.pathname = null, this.path = null, this.href = null
        }

        function i(t, e, n) {
            if (t && c.isObject(t) && t instanceof r) return t;
            var i = new r;
            return i.parse(t, e, n), i
        }

        function o(t) {
            return c.isString(t) && (t = i(t)), t instanceof r ? t.format() : r.prototype.format.call(t)
        }

        function s(t, e) {
            return i(t, !1, !0).resolve(e)
        }

        function a(t, e) {
            return t ? i(t, !1, !0).resolveObject(e) : e
        }

        var u = n(102), c = n(103);
        e.parse = i, e.resolve = s, e.resolveObject = a, e.format = o, e.Url = r;
        var l = /^([a-z0-9.+-]+:)/i, f = /:[0-9]*$/, h = /^(\/\/?(?!\/)[^\?\s]*)(\?[^\s]*)?$/,
            p = ["<", ">", '"', "`", " ", "\r", "\n", "\t"], d = ["{", "}", "|", "\\", "^", "`"].concat(p),
            g = ["'"].concat(d), b = ["%", "/", "?", ";", "#"].concat(g), m = ["/", "?", "#"],
            y = /^[+a-z0-9A-Z_-]{0,63}$/, v = /^([+a-z0-9A-Z_-]{0,63})(.*)$/, w = {javascript: !0, "javascript:": !0},
            _ = {javascript: !0, "javascript:": !0}, S = {
                http: !0,
                https: !0,
                ftp: !0,
                gopher: !0,
                file: !0,
                "http:": !0,
                "https:": !0,
                "ftp:": !0,
                "gopher:": !0,
                "file:": !0
            }, E = n(104);
        r.prototype.parse = function (t, e, n) {
            if (!c.isString(t)) throw new TypeError("Parameter 'url' must be a string, not " + typeof t);
            var r = t.indexOf("?"), i = -1 !== r && r < t.indexOf("#") ? "?" : "#", o = t.split(i), s = /\\/g;
            o[0] = o[0].replace(s, "/"), t = o.join(i);
            var a = t;
            if (a = a.trim(), !n && 1 === t.split("#").length) {
                var f = h.exec(a);
                if (f) return this.path = a, this.href = a, this.pathname = f[1], f[2] ? (this.search = f[2], this.query = e ? E.parse(this.search.substr(1)) : this.search.substr(1)) : e && (this.search = "", this.query = {}), this
            }
            var p = l.exec(a);
            if (p) {
                p = p[0];
                var d = p.toLowerCase();
                this.protocol = d, a = a.substr(p.length)
            }
            if (n || p || a.match(/^\/\/[^@\/]+@[^@\/]+/)) {
                var k = "//" === a.substr(0, 2);
                !k || p && _[p] || (a = a.substr(2), this.slashes = !0)
            }
            if (!_[p] && (k || p && !S[p])) {
                for (var x = -1, I = 0; I < m.length; I++) {
                    var T = a.indexOf(m[I]);
                    -1 !== T && (-1 === x || T < x) && (x = T)
                }
                var A, O;
                O = -1 === x ? a.lastIndexOf("@") : a.lastIndexOf("@", x), -1 !== O && (A = a.slice(0, O), a = a.slice(O + 1), this.auth = decodeURIComponent(A)), x = -1;
                for (var I = 0; I < b.length; I++) {
                    var T = a.indexOf(b[I]);
                    -1 !== T && (-1 === x || T < x) && (x = T)
                }
                -1 === x && (x = a.length), this.host = a.slice(0, x), a = a.slice(x), this.parseHost(), this.hostname = this.hostname || "";
                var R = "[" === this.hostname[0] && "]" === this.hostname[this.hostname.length - 1];
                if (!R) for (var C = this.hostname.split(/\./), I = 0, P = C.length; I < P; I++) {
                    var M = C[I];
                    if (M && !M.match(y)) {
                        for (var j = "", L = 0, N = M.length; L < N; L++) M.charCodeAt(L) > 127 ? j += "x" : j += M[L];
                        if (!j.match(y)) {
                            var U = C.slice(0, I), B = C.slice(I + 1), D = M.match(v);
                            D && (U.push(D[1]), B.unshift(D[2])), B.length && (a = "/" + B.join(".") + a), this.hostname = U.join(".");
                            break
                        }
                    }
                }
                this.hostname.length > 255 ? this.hostname = "" : this.hostname = this.hostname.toLowerCase(), R || (this.hostname = u.toASCII(this.hostname));
                var q = this.port ? ":" + this.port : "", F = this.hostname || "";
                this.host = F + q, this.href += this.host, R && (this.hostname = this.hostname.substr(1, this.hostname.length - 2), "/" !== a[0] && (a = "/" + a))
            }
            if (!w[d]) for (var I = 0, P = g.length; I < P; I++) {
                var W = g[I];
                if (-1 !== a.indexOf(W)) {
                    var K = encodeURIComponent(W);
                    K === W && (K = escape(W)), a = a.split(W).join(K)
                }
            }
            var H = a.indexOf("#");
            -1 !== H && (this.hash = a.substr(H), a = a.slice(0, H));
            var z = a.indexOf("?");
            if (-1 !== z ? (this.search = a.substr(z), this.query = a.substr(z + 1), e && (this.query = E.parse(this.query)), a = a.slice(0, z)) : e && (this.search = "", this.query = {}), a && (this.pathname = a), S[d] && this.hostname && !this.pathname && (this.pathname = "/"), this.pathname || this.search) {
                var q = this.pathname || "", G = this.search || "";
                this.path = q + G
            }
            return this.href = this.format(), this
        }, r.prototype.format = function () {
            var t = this.auth || "";
            t && (t = encodeURIComponent(t), t = t.replace(/%3A/i, ":"), t += "@");
            var e = this.protocol || "", n = this.pathname || "", r = this.hash || "", i = !1, o = "";
            this.host ? i = t + this.host : this.hostname && (i = t + (-1 === this.hostname.indexOf(":") ? this.hostname : "[" + this.hostname + "]"), this.port && (i += ":" + this.port)), this.query && c.isObject(this.query) && Object.keys(this.query).length && (o = E.stringify(this.query));
            var s = this.search || o && "?" + o || "";
            return e && ":" !== e.substr(-1) && (e += ":"), this.slashes || (!e || S[e]) && !1 !== i ? (i = "//" + (i || ""), n && "/" !== n.charAt(0) && (n = "/" + n)) : i || (i = ""), r && "#" !== r.charAt(0) && (r = "#" + r), s && "?" !== s.charAt(0) && (s = "?" + s), n = n.replace(/[?#]/g, function (t) {
                return encodeURIComponent(t)
            }), s = s.replace("#", "%23"), e + i + n + s + r
        }, r.prototype.resolve = function (t) {
            return this.resolveObject(i(t, !1, !0)).format()
        }, r.prototype.resolveObject = function (t) {
            if (c.isString(t)) {
                var e = new r;
                e.parse(t, !1, !0), t = e
            }
            for (var n = new r, i = Object.keys(this), o = 0; o < i.length; o++) {
                var s = i[o];
                n[s] = this[s]
            }
            if (n.hash = t.hash, "" === t.href) return n.href = n.format(), n;
            if (t.slashes && !t.protocol) {
                for (var a = Object.keys(t), u = 0; u < a.length; u++) {
                    var l = a[u];
                    "protocol" !== l && (n[l] = t[l])
                }
                return S[n.protocol] && n.hostname && !n.pathname && (n.path = n.pathname = "/"), n.href = n.format(), n
            }
            if (t.protocol && t.protocol !== n.protocol) {
                if (!S[t.protocol]) {
                    for (var f = Object.keys(t), h = 0; h < f.length; h++) {
                        var p = f[h];
                        n[p] = t[p]
                    }
                    return n.href = n.format(), n
                }
                if (n.protocol = t.protocol, t.host || _[t.protocol]) n.pathname = t.pathname; else {
                    for (var d = (t.pathname || "").split("/"); d.length && !(t.host = d.shift());) ;
                    t.host || (t.host = ""), t.hostname || (t.hostname = ""), "" !== d[0] && d.unshift(""), d.length < 2 && d.unshift(""), n.pathname = d.join("/")
                }
                if (n.search = t.search, n.query = t.query, n.host = t.host || "", n.auth = t.auth, n.hostname = t.hostname || t.host, n.port = t.port, n.pathname || n.search) {
                    var g = n.pathname || "", b = n.search || "";
                    n.path = g + b
                }
                return n.slashes = n.slashes || t.slashes, n.href = n.format(), n
            }
            var m = n.pathname && "/" === n.pathname.charAt(0),
                y = t.host || t.pathname && "/" === t.pathname.charAt(0), v = y || m || n.host && t.pathname, w = v,
                E = n.pathname && n.pathname.split("/") || [], d = t.pathname && t.pathname.split("/") || [],
                k = n.protocol && !S[n.protocol];
            if (k && (n.hostname = "", n.port = null, n.host && ("" === E[0] ? E[0] = n.host : E.unshift(n.host)), n.host = "", t.protocol && (t.hostname = null, t.port = null, t.host && ("" === d[0] ? d[0] = t.host : d.unshift(t.host)), t.host = null), v = v && ("" === d[0] || "" === E[0])), y) n.host = t.host || "" === t.host ? t.host : n.host, n.hostname = t.hostname || "" === t.hostname ? t.hostname : n.hostname, n.search = t.search, n.query = t.query, E = d; else if (d.length) E || (E = []), E.pop(), E = E.concat(d), n.search = t.search, n.query = t.query; else if (!c.isNullOrUndefined(t.search)) {
                if (k) {
                    n.hostname = n.host = E.shift();
                    var x = !!(n.host && n.host.indexOf("@") > 0) && n.host.split("@");
                    x && (n.auth = x.shift(), n.host = n.hostname = x.shift())
                }
                return n.search = t.search, n.query = t.query, c.isNull(n.pathname) && c.isNull(n.search) || (n.path = (n.pathname ? n.pathname : "") + (n.search ? n.search : "")), n.href = n.format(), n
            }
            if (!E.length) return n.pathname = null, n.search ? n.path = "/" + n.search : n.path = null, n.href = n.format(), n;
            for (var I = E.slice(-1)[0], T = (n.host || t.host || E.length > 1) && ("." === I || ".." === I) || "" === I, A = 0, O = E.length; O >= 0; O--) I = E[O], "." === I ? E.splice(O, 1) : ".." === I ? (E.splice(O, 1), A++) : A && (E.splice(O, 1), A--);
            if (!v && !w) for (; A--; A) E.unshift("..");
            !v || "" === E[0] || E[0] && "/" === E[0].charAt(0) || E.unshift(""), T && "/" !== E.join("/").substr(-1) && E.push("");
            var R = "" === E[0] || E[0] && "/" === E[0].charAt(0);
            if (k) {
                n.hostname = n.host = R ? "" : E.length ? E.shift() : "";
                var x = !!(n.host && n.host.indexOf("@") > 0) && n.host.split("@");
                x && (n.auth = x.shift(), n.host = n.hostname = x.shift())
            }
            return v = v || n.host && E.length, v && !R && E.unshift(""), E.length ? n.pathname = E.join("/") : (n.pathname = null, n.path = null), c.isNull(n.pathname) && c.isNull(n.search) || (n.path = (n.pathname ? n.pathname : "") + (n.search ? n.search : "")), n.auth = t.auth || n.auth, n.slashes = n.slashes || t.slashes, n.href = n.format(), n
        }, r.prototype.parseHost = function () {
            var t = this.host, e = f.exec(t);
            e && (e = e[0], ":" !== e && (this.port = e.substr(1)), t = t.substr(0, t.length - e.length)), t && (this.hostname = t)
        }
    }, function (t, e, n) {
        "use strict";

        function r(t, e) {
            function n(n) {
                e.rejectUnauthorized && t.emit("error", n), r.end()
            }

            var r;
            return e.port = e.port || 8883, e.host = e.hostname || e.host || "localhost", e.rejectUnauthorized = !1 !== e.rejectUnauthorized, delete e.path, r = i.connect(e), r.on("secureConnect", function () {
                e.rejectUnauthorized && !r.authorized ? r.emit("error", new Error("TLS not authorized")) : r.removeListener("error", n)
            }), r.on("error", n), r
        }

        var i = n(108);
        t.exports = r
    }, function (t, e, n) {
        "use strict";
        t.exports = function (t, e) {
            return function () {
                for (var n = new Array(arguments.length), r = 0; r < n.length; r++) n[r] = arguments[r];
                return t.apply(e, n)
            }
        }
    }, function (t, e, n) {
        "use strict";
        (function (e) {
            var r = n(1), i = n(65), o = n(67), s = n(68), a = n(69), u = n(19),
                c = "undefined" != typeof window && window.btoa && window.btoa.bind(window) || n(70);
            t.exports = function (t) {
                return new Promise(function (l, f) {
                    var h = t.data, p = t.headers;
                    r.isFormData(h) && delete p["Content-Type"];
                    var d = new XMLHttpRequest, g = "onreadystatechange", b = !1;
                    if ("test" === e.env.NODE_ENV || "undefined" == typeof window || !window.XDomainRequest || "withCredentials" in d || a(t.url) || (d = new window.XDomainRequest, g = "onload", b = !0, d.onprogress = function () {
                    }, d.ontimeout = function () {
                    }), t.auth) {
                        var m = t.auth.username || "", y = t.auth.password || "";
                        p.Authorization = "Basic " + c(m + ":" + y)
                    }
                    if (d.open(t.method.toUpperCase(), o(t.url, t.params, t.paramsSerializer), !0), d.timeout = t.timeout, d[g] = function () {
                        if (d && (4 === d.readyState || b) && (0 !== d.status || d.responseURL && 0 === d.responseURL.indexOf("file:"))) {
                            var e = "getAllResponseHeaders" in d ? s(d.getAllResponseHeaders()) : null,
                                n = t.responseType && "text" !== t.responseType ? d.response : d.responseText, r = {
                                    data: n,
                                    status: 1223 === d.status ? 204 : d.status,
                                    statusText: 1223 === d.status ? "No Content" : d.statusText,
                                    headers: e,
                                    config: t,
                                    request: d
                                };
                            i(l, f, r), d = null
                        }
                    }, d.onerror = function () {
                        f(u("Network Error", t, null, d)), d = null
                    }, d.ontimeout = function () {
                        f(u("timeout of " + t.timeout + "ms exceeded", t, "ECONNABORTED", d)), d = null
                    }, r.isStandardBrowserEnv()) {
                        var v = n(71),
                            w = (t.withCredentials || a(t.url)) && t.xsrfCookieName ? v.read(t.xsrfCookieName) : void 0;
                        w && (p[t.xsrfHeaderName] = w)
                    }
                    if ("setRequestHeader" in d && r.forEach(p, function (t, e) {
                        void 0 === h && "content-type" === e.toLowerCase() ? delete p[e] : d.setRequestHeader(e, t)
                    }), t.withCredentials && (d.withCredentials = !0), t.responseType) try {
                        d.responseType = t.responseType
                    } catch (e) {
                        if ("json" !== t.responseType) throw e
                    }
                    "function" == typeof t.onDownloadProgress && d.addEventListener("progress", t.onDownloadProgress), "function" == typeof t.onUploadProgress && d.upload && d.upload.addEventListener("progress", t.onUploadProgress), t.cancelToken && t.cancelToken.promise.then(function (t) {
                        d && (d.abort(), f(t), d = null)
                    }), void 0 === h && (h = null), d.send(h)
                })
            }
        }).call(e, n(0))
    }, function (t, e, n) {
        "use strict";
        var r = n(66);
        t.exports = function (t, e, n, i, o) {
            var s = new Error(t);
            return r(s, e, n, i, o)
        }
    }, function (t, e, n) {
        "use strict";
        t.exports = function (t) {
            return !(!t || !t.__CANCEL__)
        }
    }, function (t, e, n) {
        "use strict";

        function r(t) {
            this.message = t
        }

        r.prototype.toString = function () {
            return "Cancel" + (this.message ? ": " + this.message : "")
        }, r.prototype.__CANCEL__ = !0, t.exports = r
    }, function (t, e, n) {
        "use strict";
        (function (e) {
            function r(t) {
                if (!(this instanceof r)) return new r(t);
                this.options = t || {}, this.options = i(a, t), this._inflights = {}
            }

            var i = n(14), o = n(9).Readable, s = {objectMode: !0}, a = {clean: !0};
            r.prototype.put = function (t, e) {
                return this._inflights[t.messageId] = t, e && e(), this
            }, r.prototype.createStream = function () {
                var t = new o(s), n = this._inflights, r = Object.keys(this._inflights), i = !1, a = 0;
                return t._read = function () {
                    !i && a < r.length ? this.push(n[r[a++]]) : this.push(null)
                }, t.destroy = function () {
                    if (!i) {
                        var t = this;
                        i = !0, e.nextTick(function () {
                            t.emit("close")
                        })
                    }
                }, t
            }, r.prototype.del = function (t, e) {
                return t = this._inflights[t.messageId], t ? (delete this._inflights[t.messageId], e(null, t)) : e && e(new Error("missing packet")), this
            }, r.prototype.get = function (t, e) {
                return t = this._inflights[t.messageId], t ? e(null, t) : e && e(new Error("missing packet")), this
            }, r.prototype.close = function (t) {
                this.options.clean && (this._inflights = null), t && t()
            }, t.exports = r
        }).call(e, n(0))
    }, function (t, e, n) {
        "use strict";
        (function (e, r) {
            function i(t) {
                return U.from(t)
            }

            function o(t) {
                return U.isBuffer(t) || t instanceof B
            }

            function s(t, e, n) {
                if ("function" == typeof t.prependListener) return t.prependListener(e, n);
                t._events && t._events[e] ? j(t._events[e]) ? t._events[e].unshift(n) : t._events[e] = [n, t._events[e]] : t.on(e, n)
            }

            function a(t, e) {
                M = M || n(6), t = t || {}, this.objectMode = !!t.objectMode, e instanceof M && (this.objectMode = this.objectMode || !!t.readableObjectMode);
                var r = t.highWaterMark, i = this.objectMode ? 16 : 16384;
                this.highWaterMark = r || 0 === r ? r : i, this.highWaterMark = Math.floor(this.highWaterMark), this.buffer = new K, this.length = 0, this.pipes = null, this.pipesCount = 0, this.flowing = null, this.ended = !1, this.endEmitted = !1, this.reading = !1, this.sync = !0, this.needReadable = !1, this.emittedReadable = !1, this.readableListening = !1, this.resumeScheduled = !1, this.destroyed = !1, this.defaultEncoding = t.defaultEncoding || "utf8", this.awaitDrain = 0, this.readingMore = !1, this.decoder = null, this.encoding = null, t.encoding && (W || (W = n(28).StringDecoder), this.decoder = new W(t.encoding), this.encoding = t.encoding)
            }

            function u(t) {
                if (M = M || n(6), !(this instanceof u)) return new u(t);
                this._readableState = new a(t, this), this.readable = !0, t && ("function" == typeof t.read && (this._read = t.read), "function" == typeof t.destroy && (this._destroy = t.destroy)), N.call(this)
            }

            function c(t, e, n, r, o) {
                var s = t._readableState;
                if (null === e) s.reading = !1, g(t, s); else {
                    var a;
                    o || (a = f(s, e)), a ? t.emit("error", a) : s.objectMode || e && e.length > 0 ? ("string" == typeof e || s.objectMode || Object.getPrototypeOf(e) === U.prototype || (e = i(e)), r ? s.endEmitted ? t.emit("error", new Error("stream.unshift() after end event")) : l(t, s, e, !0) : s.ended ? t.emit("error", new Error("stream.push() after EOF")) : (s.reading = !1, s.decoder && !n ? (e = s.decoder.write(e), s.objectMode || 0 !== e.length ? l(t, s, e, !1) : y(t, s)) : l(t, s, e, !1))) : r || (s.reading = !1)
                }
                return h(s)
            }

            function l(t, e, n, r) {
                e.flowing && 0 === e.length && !e.sync ? (t.emit("data", n), t.read(0)) : (e.length += e.objectMode ? 1 : n.length, r ? e.buffer.unshift(n) : e.buffer.push(n), e.needReadable && b(t)), y(t, e)
            }

            function f(t, e) {
                var n;
                return o(e) || "string" == typeof e || void 0 === e || t.objectMode || (n = new TypeError("Invalid non-string/buffer chunk")), n
            }

            function h(t) {
                return !t.ended && (t.needReadable || t.length < t.highWaterMark || 0 === t.length)
            }

            function p(t) {
                return t >= G ? t = G : (t--, t |= t >>> 1, t |= t >>> 2, t |= t >>> 4, t |= t >>> 8, t |= t >>> 16, t++), t
            }

            function d(t, e) {
                return t <= 0 || 0 === e.length && e.ended ? 0 : e.objectMode ? 1 : t !== t ? e.flowing && e.length ? e.buffer.head.data.length : e.length : (t > e.highWaterMark && (e.highWaterMark = p(t)), t <= e.length ? t : e.ended ? e.length : (e.needReadable = !0, 0))
            }

            function g(t, e) {
                if (!e.ended) {
                    if (e.decoder) {
                        var n = e.decoder.end();
                        n && n.length && (e.buffer.push(n), e.length += e.objectMode ? 1 : n.length)
                    }
                    e.ended = !0, b(t)
                }
            }

            function b(t) {
                var e = t._readableState;
                e.needReadable = !1, e.emittedReadable || (F("emitReadable", e.flowing), e.emittedReadable = !0, e.sync ? P(m, t) : m(t))
            }

            function m(t) {
                F("emit readable"), t.emit("readable"), k(t)
            }

            function y(t, e) {
                e.readingMore || (e.readingMore = !0, P(v, t, e))
            }

            function v(t, e) {
                for (var n = e.length; !e.reading && !e.flowing && !e.ended && e.length < e.highWaterMark && (F("maybeReadMore read 0"), t.read(0), n !== e.length);) n = e.length;
                e.readingMore = !1
            }

            function w(t) {
                return function () {
                    var e = t._readableState;
                    F("pipeOnDrain", e.awaitDrain), e.awaitDrain && e.awaitDrain--, 0 === e.awaitDrain && L(t, "data") && (e.flowing = !0, k(t))
                }
            }

            function _(t) {
                F("readable nexttick read 0"), t.read(0)
            }

            function S(t, e) {
                e.resumeScheduled || (e.resumeScheduled = !0, P(E, t, e))
            }

            function E(t, e) {
                e.reading || (F("resume read 0"), t.read(0)), e.resumeScheduled = !1, e.awaitDrain = 0, t.emit("resume"), k(t), e.flowing && !e.reading && t.read(0)
            }

            function k(t) {
                var e = t._readableState;
                for (F("flow", e.flowing); e.flowing && null !== t.read();) ;
            }

            function x(t, e) {
                if (0 === e.length) return null;
                var n;
                return e.objectMode ? n = e.buffer.shift() : !t || t >= e.length ? (n = e.decoder ? e.buffer.join("") : 1 === e.buffer.length ? e.buffer.head.data : e.buffer.concat(e.length), e.buffer.clear()) : n = I(t, e.buffer, e.decoder), n
            }

            function I(t, e, n) {
                var r;
                return t < e.head.data.length ? (r = e.head.data.slice(0, t), e.head.data = e.head.data.slice(t)) : r = t === e.head.data.length ? e.shift() : n ? T(t, e) : A(t, e), r
            }

            function T(t, e) {
                var n = e.head, r = 1, i = n.data;
                for (t -= i.length; n = n.next;) {
                    var o = n.data, s = t > o.length ? o.length : t;
                    if (s === o.length ? i += o : i += o.slice(0, t), 0 === (t -= s)) {
                        s === o.length ? (++r, n.next ? e.head = n.next : e.head = e.tail = null) : (e.head = n, n.data = o.slice(s));
                        break
                    }
                    ++r
                }
                return e.length -= r, i
            }

            function A(t, e) {
                var n = U.allocUnsafe(t), r = e.head, i = 1;
                for (r.data.copy(n), t -= r.data.length; r = r.next;) {
                    var o = r.data, s = t > o.length ? o.length : t;
                    if (o.copy(n, n.length - t, 0, s), 0 === (t -= s)) {
                        s === o.length ? (++i, r.next ? e.head = r.next : e.head = e.tail = null) : (e.head = r, r.data = o.slice(s));
                        break
                    }
                    ++i
                }
                return e.length -= i, n
            }

            function O(t) {
                var e = t._readableState;
                if (e.length > 0) throw new Error('"endReadable()" called on non-empty stream');
                e.endEmitted || (e.ended = !0, P(R, e, t))
            }

            function R(t, e) {
                t.endEmitted || 0 !== t.length || (t.endEmitted = !0, e.readable = !1, e.emit("end"))
            }

            function C(t, e) {
                for (var n = 0, r = t.length; n < r; n++) if (t[n] === e) return n;
                return -1
            }

            var P = n(7);
            t.exports = u;
            var M, j = n(24);
            u.ReadableState = a;
            var L = (n(5).EventEmitter, function (t, e) {
                return t.listeners(e).length
            }), N = n(25), U = n(4).Buffer, B = e.Uint8Array || function () {
            }, D = n(8);
            D.inherits = n(3);
            var q = n(83), F = void 0;
            F = q && q.debuglog ? q.debuglog("stream") : function () {
            };
            var W, K = n(84), H = n(26);
            D.inherits(u, N);
            var z = ["error", "close", "destroy", "pause", "resume"];
            Object.defineProperty(u.prototype, "destroyed", {
                get: function () {
                    return void 0 !== this._readableState && this._readableState.destroyed
                }, set: function (t) {
                    this._readableState && (this._readableState.destroyed = t)
                }
            }), u.prototype.destroy = H.destroy, u.prototype._undestroy = H.undestroy, u.prototype._destroy = function (t, e) {
                this.push(null), e(t)
            }, u.prototype.push = function (t, e) {
                var n, r = this._readableState;
                return r.objectMode ? n = !0 : "string" == typeof t && (e = e || r.defaultEncoding, e !== r.encoding && (t = U.from(t, e), e = ""), n = !0), c(this, t, e, !1, n)
            }, u.prototype.unshift = function (t) {
                return c(this, t, null, !0, !1)
            }, u.prototype.isPaused = function () {
                return !1 === this._readableState.flowing
            }, u.prototype.setEncoding = function (t) {
                return W || (W = n(28).StringDecoder), this._readableState.decoder = new W(t), this._readableState.encoding = t, this
            };
            var G = 8388608;
            u.prototype.read = function (t) {
                F("read", t), t = parseInt(t, 10);
                var e = this._readableState, n = t;
                if (0 !== t && (e.emittedReadable = !1), 0 === t && e.needReadable && (e.length >= e.highWaterMark || e.ended)) return F("read: emitReadable", e.length, e.ended), 0 === e.length && e.ended ? O(this) : b(this), null;
                if (0 === (t = d(t, e)) && e.ended) return 0 === e.length && O(this), null;
                var r = e.needReadable;
                F("need readable", r), (0 === e.length || e.length - t < e.highWaterMark) && (r = !0, F("length less than watermark", r)), e.ended || e.reading ? (r = !1, F("reading or ended", r)) : r && (F("do read"), e.reading = !0, e.sync = !0, 0 === e.length && (e.needReadable = !0), this._read(e.highWaterMark), e.sync = !1, e.reading || (t = d(n, e)));
                var i;
                return i = t > 0 ? x(t, e) : null, null === i ? (e.needReadable = !0, t = 0) : e.length -= t, 0 === e.length && (e.ended || (e.needReadable = !0), n !== t && e.ended && O(this)), null !== i && this.emit("data", i), i
            }, u.prototype._read = function (t) {
                this.emit("error", new Error("_read() is not implemented"))
            }, u.prototype.pipe = function (t, e) {
                function n(t, e) {
                    F("onunpipe"), t === h && e && !1 === e.hasUnpiped && (e.hasUnpiped = !0, o())
                }

                function i() {
                    F("onend"), t.end()
                }

                function o() {
                    F("cleanup"), t.removeListener("close", c), t.removeListener("finish", l), t.removeListener("drain", b), t.removeListener("error", u), t.removeListener("unpipe", n), h.removeListener("end", i), h.removeListener("end", f), h.removeListener("data", a), m = !0, !p.awaitDrain || t._writableState && !t._writableState.needDrain || b()
                }

                function a(e) {
                    F("ondata"), y = !1, !1 !== t.write(e) || y || ((1 === p.pipesCount && p.pipes === t || p.pipesCount > 1 && -1 !== C(p.pipes, t)) && !m && (F("false write response, pause", h._readableState.awaitDrain), h._readableState.awaitDrain++, y = !0), h.pause())
                }

                function u(e) {
                    F("onerror", e), f(), t.removeListener("error", u), 0 === L(t, "error") && t.emit("error", e)
                }

                function c() {
                    t.removeListener("finish", l), f()
                }

                function l() {
                    F("onfinish"), t.removeListener("close", c), f()
                }

                function f() {
                    F("unpipe"), h.unpipe(t)
                }

                var h = this, p = this._readableState;
                switch (p.pipesCount) {
                    case 0:
                        p.pipes = t;
                        break;
                    case 1:
                        p.pipes = [p.pipes, t];
                        break;
                    default:
                        p.pipes.push(t)
                }
                p.pipesCount += 1, F("pipe count=%d opts=%j", p.pipesCount, e);
                var d = (!e || !1 !== e.end) && t !== r.stdout && t !== r.stderr, g = d ? i : f;
                p.endEmitted ? P(g) : h.once("end", g), t.on("unpipe", n);
                var b = w(h);
                t.on("drain", b);
                var m = !1, y = !1;
                return h.on("data", a), s(t, "error", u), t.once("close", c), t.once("finish", l), t.emit("pipe", h), p.flowing || (F("pipe resume"), h.resume()), t
            }, u.prototype.unpipe = function (t) {
                var e = this._readableState, n = {hasUnpiped: !1};
                if (0 === e.pipesCount) return this;
                if (1 === e.pipesCount) return t && t !== e.pipes ? this : (t || (t = e.pipes), e.pipes = null, e.pipesCount = 0, e.flowing = !1, t && t.emit("unpipe", this, n), this);
                if (!t) {
                    var r = e.pipes, i = e.pipesCount;
                    e.pipes = null, e.pipesCount = 0, e.flowing = !1;
                    for (var o = 0; o < i; o++) r[o].emit("unpipe", this, n);
                    return this
                }
                var s = C(e.pipes, t);
                return -1 === s ? this : (e.pipes.splice(s, 1), e.pipesCount -= 1, 1 === e.pipesCount && (e.pipes = e.pipes[0]), t.emit("unpipe", this, n), this)
            }, u.prototype.on = function (t, e) {
                var n = N.prototype.on.call(this, t, e);
                if ("data" === t) !1 !== this._readableState.flowing && this.resume(); else if ("readable" === t) {
                    var r = this._readableState;
                    r.endEmitted || r.readableListening || (r.readableListening = r.needReadable = !0, r.emittedReadable = !1, r.reading ? r.length && b(this) : P(_, this))
                }
                return n
            }, u.prototype.addListener = u.prototype.on, u.prototype.resume = function () {
                var t = this._readableState;
                return t.flowing || (F("resume"), t.flowing = !0, S(this, t)), this
            }, u.prototype.pause = function () {
                return F("call pause flowing=%j", this._readableState.flowing), !1 !== this._readableState.flowing && (F("pause"), this._readableState.flowing = !1, this.emit("pause")), this
            }, u.prototype.wrap = function (t) {
                var e = this._readableState, n = !1, r = this;
                t.on("end", function () {
                    if (F("wrapped end"), e.decoder && !e.ended) {
                        var t = e.decoder.end();
                        t && t.length && r.push(t)
                    }
                    r.push(null)
                }), t.on("data", function (i) {
                    if (F("wrapped data"), e.decoder && (i = e.decoder.write(i)), (!e.objectMode || null !== i && void 0 !== i) && (e.objectMode || i && i.length)) {
                        r.push(i) || (n = !0, t.pause())
                    }
                });
                for (var i in t) void 0 === this[i] && "function" == typeof t[i] && (this[i] = function (e) {
                    return function () {
                        return t[e].apply(t, arguments)
                    }
                }(i));
                for (var o = 0; o < z.length; o++) t.on(z[o], r.emit.bind(r, z[o]));
                return r._read = function (e) {
                    F("wrapped _read", e), n && (n = !1, t.resume())
                }, r
            }, u._fromList = x
        }).call(e, n(2), n(0))
    }, function (t, e) {
        var n = {}.toString;
        t.exports = Array.isArray || function (t) {
            return "[object Array]" == n.call(t)
        }
    }, function (t, e, n) {
        t.exports = n(5).EventEmitter
    }, function (t, e, n) {
        "use strict";

        function r(t, e) {
            var n = this, r = this._readableState && this._readableState.destroyed,
                i = this._writableState && this._writableState.destroyed;
            if (r || i) return void(e ? e(t) : !t || this._writableState && this._writableState.errorEmitted || s(o, this, t));
            this._readableState && (this._readableState.destroyed = !0), this._writableState && (this._writableState.destroyed = !0), this._destroy(t || null, function (t) {
                !e && t ? (s(o, n, t), n._writableState && (n._writableState.errorEmitted = !0)) : e && e(t)
            })
        }

        function i() {
            this._readableState && (this._readableState.destroyed = !1, this._readableState.reading = !1, this._readableState.ended = !1, this._readableState.endEmitted = !1), this._writableState && (this._writableState.destroyed = !1, this._writableState.ended = !1, this._writableState.ending = !1, this._writableState.finished = !1, this._writableState.errorEmitted = !1)
        }

        function o(t, e) {
            t.emit("error", e)
        }

        var s = n(7);
        t.exports = {destroy: r, undestroy: i}
    }, function (t, e, n) {
        "use strict";
        (function (e, r, i) {
            function o(t) {
                var e = this;
                this.next = null, this.entry = null, this.finish = function () {
                    T(e, t)
                }
            }

            function s(t) {
                return j.from(t)
            }

            function a(t) {
                return j.isBuffer(t) || t instanceof L
            }

            function u() {
            }

            function c(t, e) {
                O = O || n(6), t = t || {}, this.objectMode = !!t.objectMode, e instanceof O && (this.objectMode = this.objectMode || !!t.writableObjectMode);
                var r = t.highWaterMark, i = this.objectMode ? 16 : 16384;
                this.highWaterMark = r || 0 === r ? r : i, this.highWaterMark = Math.floor(this.highWaterMark), this.finalCalled = !1, this.needDrain = !1, this.ending = !1, this.ended = !1, this.finished = !1, this.destroyed = !1;
                var s = !1 === t.decodeStrings;
                this.decodeStrings = !s, this.defaultEncoding = t.defaultEncoding || "utf8", this.length = 0, this.writing = !1, this.corked = 0, this.sync = !0, this.bufferProcessing = !1, this.onwrite = function (t) {
                    y(e, t)
                }, this.writecb = null, this.writelen = 0, this.bufferedRequest = null, this.lastBufferedRequest = null, this.pendingcb = 0, this.prefinished = !1, this.errorEmitted = !1, this.bufferedRequestCount = 0, this.corkedRequestsFree = new o(this)
            }

            function l(t) {
                if (O = O || n(6), !(U.call(l, this) || this instanceof O)) return new l(t);
                this._writableState = new c(t, this), this.writable = !0, t && ("function" == typeof t.write && (this._write = t.write), "function" == typeof t.writev && (this._writev = t.writev), "function" == typeof t.destroy && (this._destroy = t.destroy), "function" == typeof t.final && (this._final = t.final)), M.call(this)
            }

            function f(t, e) {
                var n = new Error("write after end");
                t.emit("error", n), A(e, n)
            }

            function h(t, e, n, r) {
                var i = !0, o = !1;
                return null === n ? o = new TypeError("May not write null values to stream") : "string" == typeof n || void 0 === n || e.objectMode || (o = new TypeError("Invalid non-string/buffer chunk")), o && (t.emit("error", o), A(r, o), i = !1), i
            }

            function p(t, e, n) {
                return t.objectMode || !1 === t.decodeStrings || "string" != typeof e || (e = j.from(e, n)), e
            }

            function d(t, e, n, r, i, o) {
                if (!n) {
                    var s = p(e, r, i);
                    r !== s && (n = !0, i = "buffer", r = s)
                }
                var a = e.objectMode ? 1 : r.length;
                e.length += a;
                var u = e.length < e.highWaterMark;
                if (u || (e.needDrain = !0), e.writing || e.corked) {
                    var c = e.lastBufferedRequest;
                    e.lastBufferedRequest = {
                        chunk: r,
                        encoding: i,
                        isBuf: n,
                        callback: o,
                        next: null
                    }, c ? c.next = e.lastBufferedRequest : e.bufferedRequest = e.lastBufferedRequest, e.bufferedRequestCount += 1
                } else g(t, e, !1, a, r, i, o);
                return u
            }

            function g(t, e, n, r, i, o, s) {
                e.writelen = r, e.writecb = s, e.writing = !0, e.sync = !0, n ? t._writev(i, e.onwrite) : t._write(i, o, e.onwrite), e.sync = !1
            }

            function b(t, e, n, r, i) {
                --e.pendingcb, n ? (A(i, r), A(x, t, e), t._writableState.errorEmitted = !0, t.emit("error", r)) : (i(r), t._writableState.errorEmitted = !0, t.emit("error", r), x(t, e))
            }

            function m(t) {
                t.writing = !1, t.writecb = null, t.length -= t.writelen, t.writelen = 0
            }

            function y(t, e) {
                var n = t._writableState, r = n.sync, i = n.writecb;
                if (m(n), e) b(t, n, r, e, i); else {
                    var o = S(n);
                    o || n.corked || n.bufferProcessing || !n.bufferedRequest || _(t, n), r ? R(v, t, n, o, i) : v(t, n, o, i)
                }
            }

            function v(t, e, n, r) {
                n || w(t, e), e.pendingcb--, r(), x(t, e)
            }

            function w(t, e) {
                0 === e.length && e.needDrain && (e.needDrain = !1, t.emit("drain"))
            }

            function _(t, e) {
                e.bufferProcessing = !0;
                var n = e.bufferedRequest;
                if (t._writev && n && n.next) {
                    var r = e.bufferedRequestCount, i = new Array(r), s = e.corkedRequestsFree;
                    s.entry = n;
                    for (var a = 0, u = !0; n;) i[a] = n, n.isBuf || (u = !1), n = n.next, a += 1;
                    i.allBuffers = u, g(t, e, !0, e.length, i, "", s.finish), e.pendingcb++, e.lastBufferedRequest = null, s.next ? (e.corkedRequestsFree = s.next, s.next = null) : e.corkedRequestsFree = new o(e)
                } else {
                    for (; n;) {
                        var c = n.chunk, l = n.encoding, f = n.callback;
                        if (g(t, e, !1, e.objectMode ? 1 : c.length, c, l, f), n = n.next, e.writing) break
                    }
                    null === n && (e.lastBufferedRequest = null)
                }
                e.bufferedRequestCount = 0, e.bufferedRequest = n, e.bufferProcessing = !1
            }

            function S(t) {
                return t.ending && 0 === t.length && null === t.bufferedRequest && !t.finished && !t.writing
            }

            function E(t, e) {
                t._final(function (n) {
                    e.pendingcb--, n && t.emit("error", n), e.prefinished = !0, t.emit("prefinish"), x(t, e)
                })
            }

            function k(t, e) {
                e.prefinished || e.finalCalled || ("function" == typeof t._final ? (e.pendingcb++, e.finalCalled = !0, A(E, t, e)) : (e.prefinished = !0, t.emit("prefinish")))
            }

            function x(t, e) {
                var n = S(e);
                return n && (k(t, e), 0 === e.pendingcb && (e.finished = !0, t.emit("finish"))), n
            }

            function I(t, e, n) {
                e.ending = !0, x(t, e), n && (e.finished ? A(n) : t.once("finish", n)), e.ended = !0, t.writable = !1
            }

            function T(t, e, n) {
                var r = t.entry;
                for (t.entry = null; r;) {
                    var i = r.callback;
                    e.pendingcb--, i(n), r = r.next
                }
                e.corkedRequestsFree ? e.corkedRequestsFree.next = t : e.corkedRequestsFree = t
            }

            var A = n(7);
            t.exports = l;
            var O, R = !e.browser && ["v0.10", "v0.9."].indexOf(e.version.slice(0, 5)) > -1 ? r : A;
            l.WritableState = c;
            var C = n(8);
            C.inherits = n(3);
            var P = {deprecate: n(87)}, M = n(25), j = n(4).Buffer, L = i.Uint8Array || function () {
            }, N = n(26);
            C.inherits(l, M), c.prototype.getBuffer = function () {
                for (var t = this.bufferedRequest, e = []; t;) e.push(t), t = t.next;
                return e
            }, function () {
                try {
                    Object.defineProperty(c.prototype, "buffer", {
                        get: P.deprecate(function () {
                            return this.getBuffer()
                        }, "_writableState.buffer is deprecated. Use _writableState.getBuffer instead.", "DEP0003")
                    })
                } catch (t) {
                }
            }();
            var U;
            "function" == typeof Symbol && Symbol.hasInstance && "function" == typeof Function.prototype[Symbol.hasInstance] ? (U = Function.prototype[Symbol.hasInstance], Object.defineProperty(l, Symbol.hasInstance, {
                value: function (t) {
                    return !!U.call(this, t) || t && t._writableState instanceof c
                }
            })) : U = function (t) {
                return t instanceof this
            }, l.prototype.pipe = function () {
                this.emit("error", new Error("Cannot pipe, not readable"))
            }, l.prototype.write = function (t, e, n) {
                var r = this._writableState, i = !1, o = a(t) && !r.objectMode;
                return o && !j.isBuffer(t) && (t = s(t)), "function" == typeof e && (n = e, e = null), o ? e = "buffer" : e || (e = r.defaultEncoding), "function" != typeof n && (n = u), r.ended ? f(this, n) : (o || h(this, r, t, n)) && (r.pendingcb++, i = d(this, r, o, t, e, n)), i
            }, l.prototype.cork = function () {
                this._writableState.corked++
            }, l.prototype.uncork = function () {
                var t = this._writableState;
                t.corked && (t.corked--, t.writing || t.corked || t.finished || t.bufferProcessing || !t.bufferedRequest || _(this, t))
            }, l.prototype.setDefaultEncoding = function (t) {
                if ("string" == typeof t && (t = t.toLowerCase()), !(["hex", "utf8", "utf-8", "ascii", "binary", "base64", "ucs2", "ucs-2", "utf16le", "utf-16le", "raw"].indexOf((t + "").toLowerCase()) > -1)) throw new TypeError("Unknown encoding: " + t);
                return this._writableState.defaultEncoding = t, this
            }, l.prototype._write = function (t, e, n) {
                n(new Error("_write() is not implemented"))
            }, l.prototype._writev = null, l.prototype.end = function (t, e, n) {
                var r = this._writableState;
                "function" == typeof t ? (n = t, t = null, e = null) : "function" == typeof e && (n = e, e = null), null !== t && void 0 !== t && this.write(t, e), r.corked && (r.corked = 1, this.uncork()), r.ending || r.finished || I(this, r, n)
            }, Object.defineProperty(l.prototype, "destroyed", {
                get: function () {
                    return void 0 !== this._writableState && this._writableState.destroyed
                }, set: function (t) {
                    this._writableState && (this._writableState.destroyed = t)
                }
            }), l.prototype.destroy = N.destroy, l.prototype._undestroy = N.undestroy, l.prototype._destroy = function (t, e) {
                this.end(), e(t)
            }
        }).call(e, n(0), n(85).setImmediate, n(2))
    }, function (t, e, n) {
        "use strict";

        function r(t) {
            if (!t) return "utf8";
            for (var e; ;) switch (t) {
                case"utf8":
                case"utf-8":
                    return "utf8";
                case"ucs2":
                case"ucs-2":
                case"utf16le":
                case"utf-16le":
                    return "utf16le";
                case"latin1":
                case"binary":
                    return "latin1";
                case"base64":
                case"ascii":
                case"hex":
                    return t;
                default:
                    if (e) return;
                    t = ("" + t).toLowerCase(), e = !0
            }
        }

        function i(t) {
            var e = r(t);
            if ("string" != typeof e && (y.isEncoding === v || !v(t))) throw new Error("Unknown encoding: " + t);
            return e || t
        }

        function o(t) {
            this.encoding = i(t);
            var e;
            switch (this.encoding) {
                case"utf16le":
                    this.text = h, this.end = p, e = 4;
                    break;
                case"utf8":
                    this.fillLast = c, e = 4;
                    break;
                case"base64":
                    this.text = d, this.end = g, e = 3;
                    break;
                default:
                    return this.write = b, void(this.end = m)
            }
            this.lastNeed = 0, this.lastTotal = 0, this.lastChar = y.allocUnsafe(e)
        }

        function s(t) {
            return t <= 127 ? 0 : t >> 5 == 6 ? 2 : t >> 4 == 14 ? 3 : t >> 3 == 30 ? 4 : -1
        }

        function a(t, e, n) {
            var r = e.length - 1;
            if (r < n) return 0;
            var i = s(e[r]);
            return i >= 0 ? (i > 0 && (t.lastNeed = i - 1), i) : --r < n ? 0 : (i = s(e[r])) >= 0 ? (i > 0 && (t.lastNeed = i - 2), i) : --r < n ? 0 : (i = s(e[r]), i >= 0 ? (i > 0 && (2 === i ? i = 0 : t.lastNeed = i - 3), i) : 0)
        }

        function u(t, e, n) {
            if (128 != (192 & e[0])) return t.lastNeed = 0, "�".repeat(n);
            if (t.lastNeed > 1 && e.length > 1) {
                if (128 != (192 & e[1])) return t.lastNeed = 1, "�".repeat(n + 1);
                if (t.lastNeed > 2 && e.length > 2 && 128 != (192 & e[2])) return t.lastNeed = 2, "�".repeat(n + 2)
            }
        }

        function c(t) {
            var e = this.lastTotal - this.lastNeed, n = u(this, t, e);
            return void 0 !== n ? n : this.lastNeed <= t.length ? (t.copy(this.lastChar, e, 0, this.lastNeed), this.lastChar.toString(this.encoding, 0, this.lastTotal)) : (t.copy(this.lastChar, e, 0, t.length), void(this.lastNeed -= t.length))
        }

        function l(t, e) {
            var n = a(this, t, e);
            if (!this.lastNeed) return t.toString("utf8", e);
            this.lastTotal = n;
            var r = t.length - (n - this.lastNeed);
            return t.copy(this.lastChar, 0, r), t.toString("utf8", e, r)
        }

        function f(t) {
            var e = t && t.length ? this.write(t) : "";
            return this.lastNeed ? e + "�".repeat(this.lastTotal - this.lastNeed) : e
        }

        function h(t, e) {
            if ((t.length - e) % 2 == 0) {
                var n = t.toString("utf16le", e);
                if (n) {
                    var r = n.charCodeAt(n.length - 1);
                    if (r >= 55296 && r <= 56319) return this.lastNeed = 2, this.lastTotal = 4, this.lastChar[0] = t[t.length - 2], this.lastChar[1] = t[t.length - 1], n.slice(0, -1)
                }
                return n
            }
            return this.lastNeed = 1, this.lastTotal = 2, this.lastChar[0] = t[t.length - 1], t.toString("utf16le", e, t.length - 1)
        }

        function p(t) {
            var e = t && t.length ? this.write(t) : "";
            if (this.lastNeed) {
                var n = this.lastTotal - this.lastNeed;
                return e + this.lastChar.toString("utf16le", 0, n)
            }
            return e
        }

        function d(t, e) {
            var n = (t.length - e) % 3;
            return 0 === n ? t.toString("base64", e) : (this.lastNeed = 3 - n, this.lastTotal = 3, 1 === n ? this.lastChar[0] = t[t.length - 1] : (this.lastChar[0] = t[t.length - 2], this.lastChar[1] = t[t.length - 1]), t.toString("base64", e, t.length - n))
        }

        function g(t) {
            var e = t && t.length ? this.write(t) : "";
            return this.lastNeed ? e + this.lastChar.toString("base64", 0, 3 - this.lastNeed) : e
        }

        function b(t) {
            return t.toString(this.encoding)
        }

        function m(t) {
            return t && t.length ? this.write(t) : ""
        }

        var y = n(4).Buffer, v = y.isEncoding || function (t) {
            switch ((t = "" + t) && t.toLowerCase()) {
                case"hex":
                case"utf8":
                case"utf-8":
                case"ascii":
                case"binary":
                case"base64":
                case"ucs2":
                case"ucs-2":
                case"utf16le":
                case"utf-16le":
                case"raw":
                    return !0;
                default:
                    return !1
            }
        };
        e.StringDecoder = o, o.prototype.write = function (t) {
            if (0 === t.length) return "";
            var e, n;
            if (this.lastNeed) {
                if (void 0 === (e = this.fillLast(t))) return "";
                n = this.lastNeed, this.lastNeed = 0
            } else n = 0;
            return n < t.length ? e ? e + this.text(t, n) : this.text(t, n) : e || ""
        }, o.prototype.end = f, o.prototype.text = l, o.prototype.fillLast = function (t) {
            if (this.lastNeed <= t.length) return t.copy(this.lastChar, this.lastTotal - this.lastNeed, 0, this.lastNeed), this.lastChar.toString(this.encoding, 0, this.lastTotal);
            t.copy(this.lastChar, this.lastTotal - this.lastNeed, 0, t.length), this.lastNeed -= t.length
        }
    }, function (t, e, n) {
        "use strict";

        function r(t) {
            this.afterTransform = function (e, n) {
                return i(t, e, n)
            }, this.needTransform = !1, this.transforming = !1, this.writecb = null, this.writechunk = null, this.writeencoding = null
        }

        function i(t, e, n) {
            var r = t._transformState;
            r.transforming = !1;
            var i = r.writecb;
            if (!i) return t.emit("error", new Error("write callback called multiple times"));
            r.writechunk = null, r.writecb = null, null !== n && void 0 !== n && t.push(n), i(e);
            var o = t._readableState;
            o.reading = !1, (o.needReadable || o.length < o.highWaterMark) && t._read(o.highWaterMark)
        }

        function o(t) {
            if (!(this instanceof o)) return new o(t);
            a.call(this, t), this._transformState = new r(this);
            var e = this;
            this._readableState.needReadable = !0, this._readableState.sync = !1, t && ("function" == typeof t.transform && (this._transform = t.transform), "function" == typeof t.flush && (this._flush = t.flush)), this.once("prefinish", function () {
                "function" == typeof this._flush ? this._flush(function (t, n) {
                    s(e, t, n)
                }) : s(e)
            })
        }

        function s(t, e, n) {
            if (e) return t.emit("error", e);
            null !== n && void 0 !== n && t.push(n);
            var r = t._writableState, i = t._transformState;
            if (r.length) throw new Error("Calling transform done when ws.length != 0");
            if (i.transforming) throw new Error("Calling transform done when still transforming");
            return t.push(null)
        }

        t.exports = o;
        var a = n(6), u = n(8);
        u.inherits = n(3), u.inherits(o, a), o.prototype.push = function (t, e) {
            return this._transformState.needTransform = !1, a.prototype.push.call(this, t, e)
        }, o.prototype._transform = function (t, e, n) {
            throw new Error("_transform() is not implemented")
        }, o.prototype._write = function (t, e, n) {
            var r = this._transformState;
            if (r.writecb = n, r.writechunk = t, r.writeencoding = e, !r.transforming) {
                var i = this._readableState;
                (r.needTransform || i.needReadable || i.length < i.highWaterMark) && this._read(i.highWaterMark)
            }
        }, o.prototype._read = function (t) {
            var e = this._transformState;
            null !== e.writechunk && e.writecb && !e.transforming ? (e.transforming = !0, this._transform(e.writechunk, e.writeencoding, e.afterTransform)) : e.needTransform = !0
        }, o.prototype._destroy = function (t, e) {
            var n = this;
            a.prototype._destroy.call(this, t, function (t) {
                e(t), n.emit("close")
            })
        }
    }, function (t, e, n) {
        var r = n(89), i = function () {
        }, o = function (t) {
            return t.setHeader && "function" == typeof t.abort
        }, s = function (t) {
            return t.stdio && Array.isArray(t.stdio) && 3 === t.stdio.length
        }, a = function (t, e, n) {
            if ("function" == typeof e) return a(t, null, e);
            e || (e = {}), n = r(n || i);
            var u = t._writableState, c = t._readableState, l = e.readable || !1 !== e.readable && t.readable,
                f = e.writable || !1 !== e.writable && t.writable, h = function () {
                    t.writable || p()
                }, p = function () {
                    f = !1, l || n.call(t)
                }, d = function () {
                    l = !1, f || n.call(t)
                }, g = function (e) {
                    n.call(t, e ? new Error("exited with error code: " + e) : null)
                }, b = function () {
                    return (!l || c && c.ended) && (!f || u && u.ended) ? void 0 : n.call(t, new Error("premature close"))
                }, m = function () {
                    t.req.on("finish", p)
                };
            return o(t) ? (t.on("complete", p), t.on("abort", b), t.req ? m() : t.on("request", m)) : f && !u && (t.on("end", h), t.on("close", h)), s(t) && t.on("exit", g), t.on("end", d), t.on("finish", p), !1 !== e.error && t.on("error", n), t.on("close", b), function () {
                t.removeListener("complete", p), t.removeListener("abort", b), t.removeListener("request", m), t.req && t.req.removeListener("finish", p), t.removeListener("end", h), t.removeListener("close", h), t.removeListener("finish", p), t.removeListener("exit", g), t.removeListener("end", d), t.removeListener("error", n), t.removeListener("close", b)
            }
        };
        t.exports = a
    }, function (t, e, n) {
        "use strict";

        function r(t) {
            return [0, 1, 2].map(function (e) {
                return [0, 1].map(function (n) {
                    return [0, 1].map(function (r) {
                        var s = new i(1);
                        return s.writeUInt8(o.codes[t] << o.CMD_SHIFT | (n ? o.DUP_MASK : 0) | e << o.QOS_SHIFT | r, 0, !0), s
                    })
                })
            })
        }

        var i = n(4).Buffer, o = t.exports;
        o.types = {
            0: "reserved",
            1: "connect",
            2: "connack",
            3: "publish",
            4: "puback",
            5: "pubrec",
            6: "pubrel",
            7: "pubcomp",
            8: "subscribe",
            9: "suback",
            10: "unsubscribe",
            11: "unsuback",
            12: "pingreq",
            13: "pingresp",
            14: "disconnect",
            15: "reserved"
        }, o.codes = {};
        for (var s in o.types) {
            var a = o.types[s];
            o.codes[a] = s
        }
        o.CMD_SHIFT = 4, o.CMD_MASK = 240, o.DUP_MASK = 8, o.QOS_MASK = 3, o.QOS_SHIFT = 1, o.RETAIN_MASK = 1, o.LENGTH_MASK = 127, o.LENGTH_FIN_MASK = 128, o.SESSIONPRESENT_MASK = 1, o.SESSIONPRESENT_HEADER = i.from([o.SESSIONPRESENT_MASK]), o.CONNACK_HEADER = i.from([o.codes.connack << o.CMD_SHIFT]), o.USERNAME_MASK = 128, o.PASSWORD_MASK = 64, o.WILL_RETAIN_MASK = 32, o.WILL_QOS_MASK = 24, o.WILL_QOS_SHIFT = 3, o.WILL_FLAG_MASK = 4, o.CLEAN_SESSION_MASK = 2, o.CONNECT_HEADER = i.from([o.codes.connect << o.CMD_SHIFT]), o.PUBLISH_HEADER = r("publish"), o.SUBSCRIBE_HEADER = r("subscribe"), o.UNSUBSCRIBE_HEADER = r("unsubscribe"), o.ACKS = {
            unsuback: r("unsuback"),
            puback: r("puback"),
            pubcomp: r("pubcomp"),
            pubrel: r("pubrel"),
            pubrec: r("pubrec")
        }, o.SUBACK_HEADER = i.from([o.codes.suback << o.CMD_SHIFT]), o.VERSION3 = i.from([3]), o.VERSION4 = i.from([4]), o.QOS = [0, 1, 2].map(function (t) {
            return i.from([t])
        }), o.EMPTY = {
            pingreq: i.from([o.codes.pingreq << 4, 0]),
            pingresp: i.from([o.codes.pingresp << 4, 0]),
            disconnect: i.from([o.codes.disconnect << 4, 0])
        }
    }, function (t, e, n) {
        "use strict";

        function r(t, e) {
            switch (e.cork && (e.cork(), I(i, e)), C && (C = !1, O()), t.cmd) {
                case"connect":
                    return o(t, e);
                case"connack":
                    return s(t, e);
                case"publish":
                    return a(t, e);
                case"puback":
                case"pubrec":
                case"pubrel":
                case"pubcomp":
                case"unsuback":
                    return u(t, e);
                case"subscribe":
                    return c(t, e);
                case"suback":
                    return l(t, e);
                case"unsubscribe":
                    return f(t, e);
                case"pingreq":
                case"pingresp":
                case"disconnect":
                    return h(t, e);
                default:
                    return e.emit("error", new Error("Unknown command")), !1
            }
        }

        function i(t) {
            t.uncork()
        }

        function o(t, e) {
            var n = t || {}, r = n.protocolId || "MQTT", i = n.protocolVersion || 4, o = n.will, s = n.clean,
                a = n.keepalive || 0, u = n.clientId || "", c = n.username, l = n.password;
            void 0 === s && (s = !0);
            var f = 0;
            if (!r || "string" != typeof r && !S.isBuffer(r)) return e.emit("error", new Error("Invalid protocolId")), !1;
            if (f += r.length + 2, 3 !== i && 4 !== i) return e.emit("error", new Error("Invalid protocol version")), !1;
            if (f += 1, "string" != typeof u && !S.isBuffer(u) || !u && 4 !== i || !u && !s) {
                if (i < 4) return e.emit("error", new Error("clientId must be supplied before 3.1.1")), !1;
                if (1 * s == 0) return e.emit("error", new Error("clientId must be given if cleanSession set to 0")), !1
            } else f += u.length + 2;
            if ("number" != typeof a || a < 0 || a > 65535 || a % 1 != 0) return e.emit("error", new Error("Invalid keepalive")), !1;
            if (f += 2, f += 1, o) {
                if ("object" != typeof o) return e.emit("error", new Error("Invalid will")), !1;
                if (!o.topic || "string" != typeof o.topic) return e.emit("error", new Error("Invalid will topic")), !1;
                if (f += S.byteLength(o.topic) + 2, o.payload && o.payload) {
                    if (!(o.payload.length >= 0)) return e.emit("error", new Error("Invalid will payload")), !1;
                    "string" == typeof o.payload ? f += S.byteLength(o.payload) + 2 : f += o.payload.length + 2
                } else f += 2
            }
            if (c) {
                if (!c.length) return e.emit("error", new Error("Invalid username")), !1;
                f += S.byteLength(c) + 2
            }
            if (l) {
                if (!l.length) return e.emit("error", new Error("Invalid password")), !1;
                f += w(l) + 2
            }
            e.write(_.CONNECT_HEADER), g(e, f), v(e, r), e.write(4 === i ? _.VERSION4 : _.VERSION3);
            var h = 0;
            return h |= c ? _.USERNAME_MASK : 0, h |= l ? _.PASSWORD_MASK : 0, h |= o && o.retain ? _.WILL_RETAIN_MASK : 0, h |= o && o.qos ? o.qos << _.WILL_QOS_SHIFT : 0, h |= o ? _.WILL_FLAG_MASK : 0, h |= s ? _.CLEAN_SESSION_MASK : 0, e.write(S.from([h])), R(e, a), v(e, u), o && (b(e, o.topic), v(e, o.payload)), c && v(e, c), l && v(e, l), !0
        }

        function s(t, e) {
            var n = t || {}, r = n.returnCode;
            return "number" != typeof r ? (e.emit("error", new Error("Invalid return code")), !1) : (e.write(_.CONNACK_HEADER), g(e, 2), e.write(t.sessionPresent ? _.SESSIONPRESENT_HEADER : k), e.write(S.from([r])))
        }

        function a(t, e) {
            var n = t || {}, r = n.qos || 0, i = n.retain ? _.RETAIN_MASK : 0, o = n.topic, s = n.payload || E,
                a = n.messageId, u = 0;
            if ("string" == typeof o) u += S.byteLength(o) + 2; else {
                if (!S.isBuffer(o)) return e.emit("error", new Error("Invalid topic")), !1;
                u += o.length + 2
            }
            return S.isBuffer(s) ? u += s.length : u += S.byteLength(s), r && "number" != typeof a ? (e.emit("error", new Error("Invalid messageId")), !1) : (r && (u += 2), e.write(_.PUBLISH_HEADER[r][t.dup ? 1 : 0][i ? 1 : 0]), g(e, u), R(e, w(o)), e.write(o), r > 0 && R(e, a), e.write(s))
        }

        function u(t, e) {
            var n = t || {}, r = n.cmd || "puback", i = n.messageId, o = n.dup && "pubrel" === r ? _.DUP_MASK : 0,
                s = 0;
            return "pubrel" === r && (s = 1), "number" != typeof i ? (e.emit("error", new Error("Invalid messageId")), !1) : (e.write(_.ACKS[r][s][o][0]), g(e, 2), R(e, i))
        }

        function c(t, e) {
            var n = t || {}, r = n.dup ? _.DUP_MASK : 0, i = n.messageId, o = n.subscriptions, s = 0;
            if ("number" != typeof i) return e.emit("error", new Error("Invalid messageId")), !1;
            if (s += 2, "object" != typeof o || !o.length) return e.emit("error", new Error("Invalid subscriptions")), !1;
            for (var a = 0; a < o.length; a += 1) {
                var u = o[a].topic, c = o[a].qos;
                if ("string" != typeof u) return e.emit("error", new Error("Invalid subscriptions - invalid topic")), !1;
                if ("number" != typeof c) return e.emit("error", new Error("Invalid subscriptions - invalid qos")), !1;
                s += S.byteLength(u) + 2 + 1
            }
            e.write(_.SUBSCRIBE_HEADER[1][r ? 1 : 0][0]), g(e, s), R(e, i);
            for (var l = !0, f = 0; f < o.length; f++) {
                var h = o[f], p = h.topic, d = h.qos;
                b(e, p), l = e.write(_.QOS[d])
            }
            return l
        }

        function l(t, e) {
            var n = t || {}, r = n.messageId, i = n.granted, o = 0;
            if ("number" != typeof r) return e.emit("error", new Error("Invalid messageId")), !1;
            if (o += 2, "object" != typeof i || !i.length) return e.emit("error", new Error("Invalid qos vector")), !1;
            for (var s = 0; s < i.length; s += 1) {
                if ("number" != typeof i[s]) return e.emit("error", new Error("Invalid qos vector")), !1;
                o += 1
            }
            return e.write(_.SUBACK_HEADER), g(e, o), R(e, r), e.write(S.from(i))
        }

        function f(t, e) {
            var n = t || {}, r = n.messageId, i = n.dup ? _.DUP_MASK : 0, o = n.unsubscriptions, s = 0;
            if ("number" != typeof r) return e.emit("error", new Error("Invalid messageId")), !1;
            if (s += 2, "object" != typeof o || !o.length) return e.emit("error", new Error("Invalid unsubscriptions")), !1;
            for (var a = 0; a < o.length; a += 1) {
                if ("string" != typeof o[a]) return e.emit("error", new Error("Invalid unsubscriptions")), !1;
                s += S.byteLength(o[a]) + 2
            }
            e.write(_.UNSUBSCRIBE_HEADER[1][i ? 1 : 0][0]), g(e, s), R(e, r);
            for (var u = !0, c = 0; c < o.length; c++) u = b(e, o[c]);
            return u
        }

        function h(t, e) {
            return e.write(_.EMPTY[t.cmd])
        }

        function p(t) {
            return t >= 0 && t < 128 ? 1 : t >= 128 && t < 16384 ? 2 : t >= 16384 && t < 2097152 ? 3 : t >= 2097152 && t < 268435456 ? 4 : 0
        }

        function d(t) {
            var e = 0, n = 0, r = S.allocUnsafe(p(t));
            do {
                e = t % 128 | 0, t = t / 128 | 0, t > 0 && (e |= 128), r.writeUInt8(e, n++, !0)
            } while (t > 0);
            return r
        }

        function g(t, e) {
            var n = P[e];
            n || (n = d(e), e < 16384 && (P[e] = n)), t.write(n)
        }

        function b(t, e) {
            var n = S.byteLength(e);
            R(t, n), t.write(e, "utf8")
        }

        function m(t, e) {
            return t.write(T[e])
        }

        function y(t, e) {
            return t.write(A(e))
        }

        function v(t, e) {
            e && "string" == typeof e ? b(t, e) : e ? (R(t, e.length), t.write(e)) : R(t, 0)
        }

        function w(t) {
            return t ? S.isBuffer(t) ? t.length : S.byteLength(t) : 0
        }

        var _ = n(31), S = n(4).Buffer, E = S.allocUnsafe(0), k = S.from([0]), x = n(99), I = n(7), T = x.cache,
            A = x.generateNumber, O = x.generateCache, R = m, C = !0;
        Object.defineProperty(r, "cacheNumbers", {
            get: function () {
                return R === m
            }, set: function (t) {
                t ? (T && 0 !== Object.keys(T).length || (C = !0), R = m) : (C = !1, R = y)
            }
        });
        var P = {};
        t.exports = r
    }, function (t, e) {
        t.exports = function (t) {
            return t.webpackPolyfill || (t.deprecate = function () {
            }, t.paths = [], t.children || (t.children = []), Object.defineProperty(t, "loaded", {
                enumerable: !0,
                get: function () {
                    return t.l
                }
            }), Object.defineProperty(t, "id", {
                enumerable: !0, get: function () {
                    return t.i
                }
            }), t.webpackPolyfill = 1), t
        }
    }, function (t, e, n) {
        "use strict";

        function r(t, e) {
            var n, r;
            return e.port = e.port || 1883, e.hostname = e.hostname || e.host || "localhost", n = e.port, r = e.hostname, i.createConnection(n, r)
        }

        var i = n(107);
        t.exports = r
    }, function (t, e, n) {
        "use strict";

        function r(t) {
            c ? wx.sendSocketMessage({data: t}) : l.push(t)
        }

        function i(t, e) {
            var n = {
                OPEN: 1,
                CLOSING: 2,
                CLOSED: 3,
                readyState: c ? 1 : 0,
                send: r,
                close: wx.closeSocket,
                onopen: null,
                onmessage: null,
                onclose: null,
                onerror: null
            };
            return wx.connectSocket({url: t, protocols: e}), wx.onSocketOpen(function (t) {
                n.readyState = n.OPEN, c = !0;
                for (var e = 0; e < l.length; e++) r(l[e]);
                l = [], n.onopen && n.onopen.apply(n, arguments)
            }), wx.onSocketMessage(function (t) {
                n.onmessage && n.onmessage.apply(n, arguments)
            }), wx.onSocketClose(function () {
                n.onclose && n.onclose.apply(n, arguments), n.readyState = n.CLOSED, c = !1
            }), wx.onSocketError(function () {
                n.onerror && n.onerror.apply(n, arguments), n.readyState = n.CLOSED, c = !1
            }), n
        }

        function o(t, e) {
            var n = "wxs" === t.protocol ? "wss" : "ws", r = n + "://" + t.hostname + ":" + t.port + t.path;
            return "function" == typeof t.transformWsUrl && (r = t.transformWsUrl(r, t, e)), r
        }

        function s(t) {
            t.hostname || (t.hostname = "localhost"), t.port || ("wss" === t.protocol ? t.port = 443 : t.port = 80), t.path || (t.path = "/"), t.wsOptions || (t.wsOptions = {})
        }

        function a(t, e) {
            var n = "MQIsdp" === e.protocolId && 3 === e.protocolVersion ? "mqttv3.1" : "mqtt";
            s(e);
            var r = o(e, t);
            return f(i(r, [n]))
        }

        function u(t, e) {
            if (e.hostname || (e.hostname = e.host), !e.hostname) {
                if ("undefined" == typeof document) throw new Error("Could not determine host. Specify host manually.");
                var n = h.parse(document.URL);
                e.hostname = n.hostname, e.port || (e.port = n.port)
            }
            return a(t, e)
        }

        var c = !1, l = [], f = n(36), h = n(15);
        t.exports = u
    }, function (t, e, n) {
        "use strict";
        (function (e, r) {
            function i(t, n, r) {
                var i = new s({objectMode: t.objectMode});
                return i._write = n, i._flush = r, i._destroy = function (t, n) {
                    var r = this;
                    this.push(null), this.end(), e.nextTick(function () {
                        n(t), r.emit("close")
                    })
                }, i
            }

            function o(t, n, o) {
                function s(t, e, n) {
                    if (v.readyState !== v.OPEN) return void n();
                    I && "string" == typeof t && (t = new c(t, "utf8")), v.send(t, n)
                }

                function l(t, e, n) {
                    if (v.bufferedAmount > k) return void setTimeout(l, x, t, e, n);
                    I && "string" == typeof t && (t = new c(t, "utf8"));
                    try {
                        v.send(t)
                    } catch (t) {
                        return n(t)
                    }
                    n()
                }

                function f(t) {
                    v.close(), t()
                }

                function h() {
                    y.setReadable(E), y.setWritable(E), y.emit("connect")
                }

                function p() {
                    y.end(), y.destroy()
                }

                function d(t) {
                    y.destroy(t)
                }

                function g(t) {
                    var e = t.data;
                    e = e instanceof ArrayBuffer ? c.from(e) : c.from(e, "utf8"), E.push(e)
                }

                function b() {
                    v.close()
                }

                function m(t, e) {
                    for (var n = new Array(t.length), r = 0; r < t.length; r++) "string" == typeof t[r].chunk ? n[r] = c.from(t[r], "utf8") : n[r] = t[r].chunk;
                    this._write(c.concat(n), "binary", e)
                }

                var y, v, w = "browser" === e.title, _ = !!r.WebSocket, S = w ? l : s;
                n && !Array.isArray(n) && "object" == typeof n && (o = n, n = null, ("string" == typeof o.protocol || Array.isArray(o.protocol)) && (n = o.protocol)), o || (o = {}), void 0 === o.objectMode && (o.objectMode = !(!0 === o.binary || void 0 === o.binary));
                var E = i(o, S, f);
                o.objectMode || (E._writev = m);
                var k = o.browserBufferSize || 524288, x = o.browserBufferTimeout || 1e3;
                "object" == typeof t ? v = t : (v = _ && w ? new u(t, n) : new u(t, n, o), v.binaryType = "arraybuffer"), v.readyState === v.OPEN ? y = E : (y = a.obj(), v.onopen = h), y.socket = v, v.onclose = p, v.onerror = d, v.onmessage = g, E.on("close", b);
                var I = !o.objectMode;
                return y
            }

            var s = n(9).Transform, a = n(109), u = n(111), c = n(4).Buffer;
            t.exports = o
        }).call(e, n(0), n(2))
    }, function (t, e, n) {
        "use strict";
        (function (e) {
            function r(t, e) {
                var n = t.protocol + "://" + t.hostname + ":" + t.port + t.path;
                return "function" == typeof t.transformWsUrl && (n = t.transformWsUrl(n, t, e)), n
            }

            function i(t) {
                t.hostname || (t.hostname = "localhost"), t.port || ("wss" === t.protocol ? t.port = 443 : t.port = 80), t.path || (t.path = "/"), t.wsOptions || (t.wsOptions = {}), f || "wss" !== t.protocol || l.forEach(function (e) {
                    t.hasOwnProperty(e) && !t.wsOptions.hasOwnProperty(e) && (t.wsOptions[e] = t[e])
                })
            }

            function o(t, e) {
                var n = "MQIsdp" === e.protocolId && 3 === e.protocolVersion ? "mqttv3.1" : "mqtt";
                i(e);
                var o = r(e, t);
                return u(o, [n], e.wsOptions)
            }

            function s(t, e) {
                return o(t, e)
            }

            function a(t, e) {
                if (e.hostname || (e.hostname = e.host), !e.hostname) {
                    if ("undefined" == typeof document) throw new Error("Could not determine host. Specify host manually.");
                    var n = c.parse(document.URL);
                    e.hostname = n.hostname, e.port || (e.port = n.port)
                }
                return o(t, e)
            }

            var u = n(36), c = n(15), l = ["rejectUnauthorized", "ca", "cert", "key", "pfx", "passphrase"],
                f = "browser" === e.title;
            t.exports = f ? a : s
        }).call(e, n(0))
    }, function (t, e, n) {
        "use strict";
        t.exports = {
            HOST: "push.adpdigital.com",
            HOST_DEV: "sandbox.push.adpdigital.com",
            BASE_URL: "https://${host}/api/",
            BROKER_ADDRESS: "wss://${host}:4433",
            EXCLUSIVE_APPIDS: ["chabok-demo", "adp-bms-push"],
            DEFAULT_CHANNELS: ["default"],
            STORAGE_KEY: "CHABOK_SDK"
        }
    }, function (t, e, n) {
        "use strict";

        function r(t, e) {
            for (var n, r = 0, o = ""; !n;) o += t(e >> 4 * r & 15 | i()), n = e < Math.pow(16, r + 1), r++;
            return o
        }

        var i = n(119);
        t.exports = r
    }, function (t, e, n) {
        "use strict";

        function r(t, e) {
            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
        }

        function i(t, e) {
            if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !e || "object" != typeof e && "function" != typeof e ? t : e
        }

        function o(t, e) {
            if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
            t.prototype = Object.create(e && e.prototype, {
                constructor: {
                    value: t,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
        }

        var s = function () {
                function t(t, e) {
                    for (var n = 0; n < e.length; n++) {
                        var r = e[n];
                        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
                    }
                }

                return function (e, n, r) {
                    return n && t(e.prototype, n), r && t(e, r), e
                }
            }(), a = n(41), u = n(60), c = n(79), l = n(5), f = n(112), h = n(116), p = n(38), d = n(124), g = a(), b = a(),
            m = a(), y = a(), v = a(), w = a(), _ = a(), S = a(), E = a(), k = a(), x = a(), I = a(), T = a(), A = a(),
            O = a(), R = a(), C = a(), P = 1e3, M = null, j = function (t) {
                function e(t, n) {
                    r(this, e);
                    var o = i(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this));
                    if (M) {
                        var s;
                        return s = M, i(o, s)
                    }
                    var a = {realtime: !0, webpush: {enabled: !0, publicKey: null}, silent: !1};
                    return o.config = Object.assign(a, n), o.push = new d, o.auth = t, o._createdAt = Date.now(), o.isForground = !0, o[g](), o[R](), M = o, o
                }

                return o(e, t), s(e, [{
                    key: "register", value: function (t) {
                        var e = this;
                        return new Promise(function (n, r) {
                            if (!f.isValidUserId(t)) return r("Chabok Error: Invalid User Id");
                            if (e.isRegistered() && e.getUserId() !== t) {
                                var i = e.getUserId();
                                e[k](), f.updateStorage("reregisteredFrom", i)
                            }
                            e.userId = t;
                            var o = e.auth.appId, s = e.config.webpush;
                            return o ? new Promise(function (n, r) {
                                return s.enabled ? (e.push.once("tokenSubscription", function (r) {
                                    return n(e[A](o, t, r))
                                }), e.push.requestToken({publicKey: e.config.webpush.publicKey})) : n(e[T]())
                            }).then(function (t) {
                                n(t.id ? e[x](t) : e[I](t))
                            }) : r("Chabok Error: appId is Invalid")
                        })
                    }
                }, {
                    key: "addTag", value: function (t) {
                        return this[E]("addTags", t)
                    }
                }, {
                    key: "addTags", value: function () {
                        for (var t = arguments.length, e = Array(t), n = 0; n < t; n++) e[n] = arguments[n];
                        return this[E].apply(this, ["addTags"].concat(e))
                    }
                }, {
                    key: "removeTag", value: function (t) {
                        return this[E]("removeTags", t)
                    }
                }, {
                    key: "removeTags", value: function () {
                        for (var t = arguments.length, e = Array(t), n = 0; n < t; n++) e[n] = arguments[n];
                        return this[E].apply(this, ["removeTags"].concat(e))
                    }
                }, {
                    key: "isRegistered", value: function () {
                        return null != this.getInstallationId()
                    }
                }, {
                    key: "getInstallationId", value: function () {
                        return f.encryptedStorage().get(p.STORAGE_KEY).deviceId
                    }
                }, {
                    key: "getInstallations", value: function (t) {
                        return t && 0 !== t.length ? this.webClient.get("installations", {params: {filter: {where: {id: {inq: t}}}}}).then(function (t) {
                            return t.data
                        }) : []
                    }
                }, {
                    key: "publish", value: function (t) {
                        return this[y](t)
                    }
                }, {
                    key: "publishEvent", value: function (t, e) {
                        this[m]("event", t, e)
                    }
                }, {
                    key: "track", value: function (t, e) {
                        this[m]("track", t, e)
                    }
                }, {
                    key: "setUserInfo", value: function (t) {
                        if (!t) return Promise.reject(new Error("invalid userInfo!"));
                        var e = this[T]();
                        return e.id ? (e.userInfo = t, this[x](e).then(function (t) {
                            return !!t
                        })) : Promise.reject(new Error("user is not registered!"))
                    }
                }, {
                    key: "getUserInfo", value: function () {
                        var t = this.getInstallationId();
                        return t ? this.webClient.get("installations/" + t).then(function (t) {
                            if (t && t.data) return t.data.userInfo
                        }) : Promise.reject(new Error("user is not registered!"))
                    }
                }, {
                    key: "getTags", value: function () {
                        var t = this.getUserId();
                        return t ? this.webClient.get("installations/tags/" + t).then(function (t) {
                            return t.data || []
                        }) : Promise.reject(new Error("user is not registered!"))
                    }
                }, {
                    key: "subscribe", value: function (t, e) {
                        e = e || !1;
                        var n = f.fromChabokChannel(t);
                        this[v]({name: n, type: "user", live: e})
                    }
                }, {
                    key: "unSubscribe", value: function (t) {
                        var e = f.fromChabokChannel(t);
                        this[w]({name: e, type: "user"})
                    }
                }, {
                    key: "subscribeEvent", value: function (t, e, n) {
                        void 0 === n && (n = !0), this[v]({name: t, userId: e, live: n, type: "event"})
                    }
                }, {
                    key: "unSubscribeEvent", value: function (t, e) {
                        this[w]({name: t, userId: e, type: "event"})
                    }
                }, {
                    key: "unregister", value: function () {
                        this.webClient.delete("installations/" + this.getInstallationId()), this[k]()
                    }
                }, {
                    key: k, value: function () {
                        this.client && this.client.end(), f.resetStorage()
                    }
                }, {
                    key: "isAlreadyReceived", value: function (t) {
                        return !!t.id && function (t) {
                            var e = f.encryptedStorage().get(p.STORAGE_KEY), n = e.receivedIds || new Array(P),
                                r = n.indexOf(t) > -1;
                            return n[n.length % P] = t, e.receivedIds = n, f.encryptedStorage().set(p.STORAGE_KEY, e), r
                        }(t.id)
                    }
                }, {
                    key: "errorHandler", value: function (t, e) {
                        t && this.emit && this.emit("error", t)
                    }
                }, {
                    key: "dismiss", value: function () {
                        this[O](), M = null
                    }
                }, {
                    key: "showLocalNotification", value: function (t, e) {
                        t = t || {};
                        var n = t.title || "پیام جدید",
                            r = {body: t.body, icon: t.icon || "https://husseinhj.github.io/rtlstackedit/icons-c75a9472175cc17394ba6428d867fbcf/firefox_app_128x128.png"};
                        t.groupId && (r.tag = t.groupId);
                        var i = e || 5e3;
                        Notification.requestPermission(function (e) {
                            if ("granted" === e) {
                                var o = new Notification(n, r);
                                t.clickUrl && (o.onclick = function (e) {
                                    window.open(t.clickUrl, "_blank")
                                }), setTimeout(o.close.bind(o), i)
                            }
                        })
                    }
                }, {
                    key: "getUserId", value: function () {
                        return f.encryptedStorage().get(p.STORAGE_KEY).userId
                    }
                }, {
                    key: g, value: function () {
                        var t = this.auth, e = t.appId, n = t.apiKey, r = t.devMode,
                            i = p.BASE_URL.replace("${host}", f.getAppDomain(e, r));
                        f.incLaunchCount(), this.webClient = u.create({
                            baseURL: i,
                            timeout: 15e3,
                            headers: {"X-Access-Token": n}
                        })
                    }
                }, {
                    key: O, value: function () {
                        var t = this;
                        this.client && (this.client.once("connect", function (e) {
                            return t.client.end()
                        }), this.client.end())
                    }
                }, {
                    key: C, value: function (t) {
                        var e = this.config.realtime, n = f.encryptedStorage().get(p.STORAGE_KEY);
                        return this.deviceId = t.id, n.deviceId = this.deviceId, n.userId = t.userId, f.encryptedStorage().set(p.STORAGE_KEY, n), this.emit("registered", this.deviceId), e && this[b](), {deviceId: this.deviceId}
                    }
                }, {
                    key: x, value: function (t) {
                        var e = this, n = t.id;
                        return n ? this.webClient.put("installations/" + n, t).then(function (n) {
                            return t.id = n.data.id, e[C](t)
                        }).catch(function (n) {
                            if (404 !== n.response.status) throw n;
                            e[I](t)
                        }) : this[I](t)
                    }
                }, {
                    key: I, value: function (t) {
                        var e = this, n = f.getStorageKey("reregisteredFrom");
                        return n && (t.reregisteredFrom = n, f.removeStorageKey("reregisteredFrom")), this.webClient.post("installations", t).then(function (n) {
                            return t.id = n.data.id, e[C](t)
                        }).catch(function (t) {
                            throw t
                        })
                    }
                }, {
                    key: T, value: function (t) {
                        var e = this.auth.appId, n = this.config.realtime, r = this.userId,
                            i = f.encryptedStorage().get(p.STORAGE_KEY), o = i.deviceId,
                            s = f.defaultDevice({appId: e, userId: r, token: t, realtime: n});
                        return o && (s.id = o), s
                    }
                }, {
                    key: A, value: function (t, e, n) {
                        return n ? (n = Object.assign(n, {expirationTime: 0}), Object.keys(n).length && this.emit("subscriptionToken", n), this[T](n)) : this[T]()
                    }
                }, {
                    key: b, value: function () {
                        var t = this;
                        if (this.deviceId && this.userId && (!this.client || !this.client.connected)) {
                            var e = this.auth, n = e.username, r = e.password, i = e.appId, o = e.devMode, s = {
                                clientId: [i, this.userId, this.deviceId].join("/"),
                                clean: !1,
                                keepalive: 180,
                                reconnectPeriod: 3e3,
                                connectTimeout: 15e3,
                                username: n,
                                password: r,
                                wsOptions: {}
                            }, a = p.BROKER_ADDRESS.replace("${host}", f.getAppDomain(i, o));
                            this.client = c.connect(a, s), this.client.on("connect", this[_].bind(this)), this.client.on("message", this[S].bind(this)), this.client.on("reconnect", function (e) {
                                t.emit("connecting")
                            }), this.client.on("close", function (e) {
                                t.emit("closed")
                            }), this.client.on("error", function (e) {
                                t.emit("error", e)
                            }), this.client.on("offline", function () {
                                this.emit("disconnected")
                            })
                        }
                    }
                }, {
                    key: _, value: function () {
                        var t = this, e = this.auth.appId, n = f.toTopicName(e, this.userId, this.deviceId, "user"),
                            r = p.DEFAULT_CHANNELS.map(function (n) {
                                return f.toTopicName(e, t.userId, n)
                            }), i = {};
                        return r.push(n), r.forEach(function (t) {
                            i[t] = 1
                        }), this.isForground ? this.client.subscribe(i, function (e) {
                            t.emit("connected")
                        }) : this[O]()
                    }
                }, {
                    key: S, value: function (t, e) {
                        var n = t.split("/");
                        if (5 === n.length) {
                            if ("user" === n[2]) {
                                var r = f.toChabokMessage(t, e);
                                if (!this.config.silent && !r.silent) {
                                    var i = {body: r.content, groupId: r.channel};
                                    r.notification && (i.title = r.notification.title, i.badge = r.notification.badge, r.notification.text && (i.body = r.notification.text), r.notification.body && (i.body = r.notification.body), r.notification.icon && (i.icon = r.notification.icon), r.notification.clickUrl && (i.clickUrl = r.notification.clickUrl), r.notification.groupId && (i.groupId = r.notification.groupId)), this.showLocalNotification(i)
                                }
                                return this.emit("message", r)
                            }
                            if ("event" === n[2]) {
                                var o = f.toEventMessage(t, e);
                                if (!this.isAlreadyReceived(o)) return this.emit(n[3], o)
                            }
                        }
                    }
                }, {
                    key: y, value: function (t) {
                        var e = this;
                        return new Promise(function (n, r) {
                            t && t.user || r(new Error("Chabok error: Invalid Message, please provide user.")), t.channel || r(new Error("Chabok error: invalid channel name, please provide channel name.")), t.id || (t.id = Date.now()), t.createdAt || (t.createdAt = Date.now());
                            var i = f.toTopicName(e.auth.appId, t.user, t.channel, "publish"), o = JSON.stringify(t);
                            return e.client ? e.client.publish(i, o, {
                                qos: t.live ? 0 : 1,
                                retain: t.stateful
                            }, function (t, e) {
                                return t ? r(t) : n(e.payload)
                            }) : e[y].bind(e)(t)
                        })
                    }
                }, {
                    key: m, value: function (t, e, n) {
                        if (!this.client) return this.once("connected", this[m].bind(this)(t, e, n));
                        n = n || {};
                        var r = f.toTopicName(this.auth.appId, this.deviceId, e, t), i = void 0 === n.live || n.live,
                            o = n.stateful;
                        n.id = n.id || h.generate(), delete n.live, delete n.stateful;
                        var s = JSON.stringify(n);
                        return this.client.publish(r, s, {qos: i ? 0 : 1, retain: o}, this.errorHandler.bind(this))
                    }
                }, {
                    key: R, value: function () {
                        var t = this;
                        this.config.realtime && window && (window.addEventListener("focus", function () {
                            t.isForground = !0, t.timer && clearTimeout(t.timer), t.userId && t[b]()
                        }), window.addEventListener("blur", function () {
                            t.isForground = !1, t.timer && clearTimeout(t.timer), t.timer = setTimeout(function () {
                                t[O]()
                            }, 1e3)
                        }))
                    }
                }, {
                    key: v, value: function (t) {
                        var e = this;
                        if (!this.client || !this.client.connected) return this.once("connected", this[v].bind(this)(t));
                        Array.isArray(t) || (t = [t]);
                        var n = {};
                        return t.forEach(function (t) {
                            var r = t.name, i = t.type, o = t.live, s = void 0;
                            s = "event" === i ? f.toTopicName(e.auth.appId, t.userId, r, i) : f.toTopicName(e.auth.appId, e.userId, r, i), n[s] = o ? 0 : 1
                        }), this.client.subscribe(n, this.errorHandler.bind(this))
                    }
                }, {
                    key: w, value: function (t) {
                        var e = this;
                        if (!this.client || !this.client.connected) return this.once("connected", this[w].bind(this)(t));
                        Array.isArray(t) || (t = [t]);
                        var n = [];
                        return t.forEach(function (t) {
                            var r = t.name, i = t.type, o = void 0;
                            o = "event" === i ? f.toTopicName(e.auth.appId, t.userId, r, i) : f.toTopicName(e.auth.appId, e.userId, r, i), n.push(o)
                        }), this.client.unsubscribe(n, this.errorHandler.bind(this))
                    }
                }, {
                    key: E, value: function (t) {
                        for (var e = arguments.length, n = Array(e > 1 ? e - 1 : 0), r = 1; r < e; r++) n[r - 1] = arguments[r];
                        if (!n.every(function (t) {
                            return "string" == typeof t
                        })) return Promise.reject(new Error("invalid tag names!"));
                        var i = this.getUserId();
                        if (!i) return Promise.reject(new Error("user is not registered!"));
                        var o = {userId: i, tags: n};
                        return this.webClient.post("installations/" + t, o).then(function (t) {
                            return t && t.data ? {count: t.data.count || 0} : {count: 0}
                        })
                    }
                }]), e
            }(l);
        e.Chabok = j
    }, function (t, e, n) {
        "use strict";
        t.exports = n(42)() ? Symbol : n(43)
    }, function (t, e, n) {
        "use strict";
        var r = {object: !0, symbol: !0};
        t.exports = function () {
            var t;
            if ("function" != typeof Symbol) return !1;
            t = Symbol("test symbol");
            try {
                String(t)
            } catch (t) {
                return !1
            }
            return !!r[typeof Symbol.iterator] && (!!r[typeof Symbol.toPrimitive] && !!r[typeof Symbol.toStringTag])
        }
    }, function (t, e, n) {
        "use strict";
        var r, i, o, s, a = n(44), u = n(58), c = Object.create, l = Object.defineProperties, f = Object.defineProperty,
            h = Object.prototype, p = c(null);
        if ("function" == typeof Symbol) {
            r = Symbol;
            try {
                String(r()), s = !0
            } catch (t) {
            }
        }
        var d = function () {
            var t = c(null);
            return function (e) {
                for (var n, r, i = 0; t[e + (i || "")];) ++i;
                return e += i || "", t[e] = !0, n = "@@" + e, f(h, n, a.gs(null, function (t) {
                    r || (r = !0, f(this, n, a(t)), r = !1)
                })), n
            }
        }();
        o = function (t) {
            if (this instanceof o) throw new TypeError("Symbol is not a constructor");
            return i(t)
        }, t.exports = i = function t(e) {
            var n;
            if (this instanceof t) throw new TypeError("Symbol is not a constructor");
            return s ? r(e) : (n = c(o.prototype), e = void 0 === e ? "" : String(e), l(n, {
                __description__: a("", e),
                __name__: a("", d(e))
            }))
        }, l(i, {
            for: a(function (t) {
                return p[t] ? p[t] : p[t] = i(String(t))
            }),
            keyFor: a(function (t) {
                var e;
                u(t);
                for (e in p) if (p[e] === t) return e
            }),
            hasInstance: a("", r && r.hasInstance || i("hasInstance")),
            isConcatSpreadable: a("", r && r.isConcatSpreadable || i("isConcatSpreadable")),
            iterator: a("", r && r.iterator || i("iterator")),
            match: a("", r && r.match || i("match")),
            replace: a("", r && r.replace || i("replace")),
            search: a("", r && r.search || i("search")),
            species: a("", r && r.species || i("species")),
            split: a("", r && r.split || i("split")),
            toPrimitive: a("", r && r.toPrimitive || i("toPrimitive")),
            toStringTag: a("", r && r.toStringTag || i("toStringTag")),
            unscopables: a("", r && r.unscopables || i("unscopables"))
        }), l(o.prototype, {
            constructor: a(i), toString: a("", function () {
                return this.__name__
            })
        }), l(i.prototype, {
            toString: a(function () {
                return "Symbol (" + u(this).__description__ + ")"
            }), valueOf: a(function () {
                return u(this)
            })
        }), f(i.prototype, i.toPrimitive, a("", function () {
            var t = u(this);
            return "symbol" == typeof t ? t : t.toString()
        })), f(i.prototype, i.toStringTag, a("c", "Symbol")), f(o.prototype, i.toStringTag, a("c", i.prototype[i.toStringTag])), f(o.prototype, i.toPrimitive, a("c", i.prototype[i.toPrimitive]))
    }, function (t, e, n) {
        "use strict";
        var r, i = n(45), o = n(53), s = n(54), a = n(55);
        r = t.exports = function (t, e) {
            var n, r, s, u, c;
            return arguments.length < 2 || "string" != typeof t ? (u = e, e = t, t = null) : u = arguments[2], null == t ? (n = s = !0, r = !1) : (n = a.call(t, "c"), r = a.call(t, "e"), s = a.call(t, "w")), c = {
                value: e,
                configurable: n,
                enumerable: r,
                writable: s
            }, u ? i(o(u), c) : c
        }, r.gs = function (t, e, n) {
            var r, u, c, l;
            return "string" != typeof t ? (c = n, n = e, e = t, t = null) : c = arguments[3], null == e ? e = void 0 : s(e) ? null == n ? n = void 0 : s(n) || (c = n, n = void 0) : (c = e, e = n = void 0), null == t ? (r = !0, u = !1) : (r = a.call(t, "c"), u = a.call(t, "e")), l = {
                get: e,
                set: n,
                configurable: r,
                enumerable: u
            }, c ? i(o(c), l) : l
        }
    }, function (t, e, n) {
        "use strict";
        t.exports = n(46)() ? Object.assign : n(47)
    }, function (t, e, n) {
        "use strict";
        t.exports = function () {
            var t, e = Object.assign;
            return "function" == typeof e && (t = {foo: "raz"}, e(t, {bar: "dwa"}, {trzy: "trzy"}), t.foo + t.bar + t.trzy === "razdwatrzy")
        }
    }, function (t, e, n) {
        "use strict";
        var r = n(48), i = n(52), o = Math.max;
        t.exports = function (t, e) {
            var n, s, a, u = o(arguments.length, 2);
            for (t = Object(i(t)), a = function (r) {
                try {
                    t[r] = e[r]
                } catch (t) {
                    n || (n = t)
                }
            }, s = 1; s < u; ++s) e = arguments[s], r(e).forEach(a);
            if (void 0 !== n) throw n;
            return t
        }
    }, function (t, e, n) {
        "use strict";
        t.exports = n(49)() ? Object.keys : n(50)
    }, function (t, e, n) {
        "use strict";
        t.exports = function () {
            try {
                return Object.keys("primitive"), !0
            } catch (t) {
                return !1
            }
        }
    }, function (t, e, n) {
        "use strict";
        var r = n(12), i = Object.keys;
        t.exports = function (t) {
            return i(r(t) ? Object(t) : t)
        }
    }, function (t, e, n) {
        "use strict";
        t.exports = function () {
        }
    }, function (t, e, n) {
        "use strict";
        var r = n(12);
        t.exports = function (t) {
            if (!r(t)) throw new TypeError("Cannot use null or undefined");
            return t
        }
    }, function (t, e, n) {
        "use strict";
        var r = n(12), i = Array.prototype.forEach, o = Object.create, s = function (t, e) {
            var n;
            for (n in t) e[n] = t[n]
        };
        t.exports = function (t) {
            var e = o(null);
            return i.call(arguments, function (t) {
                r(t) && s(Object(t), e)
            }), e
        }
    }, function (t, e, n) {
        "use strict";
        t.exports = function (t) {
            return "function" == typeof t
        }
    }, function (t, e, n) {
        "use strict";
        t.exports = n(56)() ? String.prototype.contains : n(57)
    }, function (t, e, n) {
        "use strict";
        var r = "razdwatrzy";
        t.exports = function () {
            return "function" == typeof r.contains && (!0 === r.contains("dwa") && !1 === r.contains("foo"))
        }
    }, function (t, e, n) {
        "use strict";
        var r = String.prototype.indexOf;
        t.exports = function (t) {
            return r.call(this, t, arguments[1]) > -1
        }
    }, function (t, e, n) {
        "use strict";
        var r = n(59);
        t.exports = function (t) {
            if (!r(t)) throw new TypeError(t + " is not a symbol");
            return t
        }
    }, function (t, e, n) {
        "use strict";
        t.exports = function (t) {
            return !!t && ("symbol" == typeof t || !!t.constructor && ("Symbol" === t.constructor.name && "Symbol" === t[t.constructor.toStringTag]))
        }
    }, function (t, e, n) {
        t.exports = n(61)
    }, function (t, e, n) {
        "use strict";

        function r(t) {
            var e = new s(t), n = o(s.prototype.request, e);
            return i.extend(n, s.prototype, e), i.extend(n, e), n
        }

        var i = n(1), o = n(17), s = n(63), a = n(13), u = r(a);
        u.Axios = s, u.create = function (t) {
            return r(i.merge(a, t))
        }, u.Cancel = n(21), u.CancelToken = n(77), u.isCancel = n(20), u.all = function (t) {
            return Promise.all(t)
        }, u.spread = n(78), t.exports = u, t.exports.default = u
    }, function (t, e) {
        function n(t) {
            return !!t.constructor && "function" == typeof t.constructor.isBuffer && t.constructor.isBuffer(t)
        }

        function r(t) {
            return "function" == typeof t.readFloatLE && "function" == typeof t.slice && n(t.slice(0, 0))
        }

        /*!
 * Determine if an object is a Buffer
 *
 * @author   Feross Aboukhadijeh <feross@feross.org> <http://feross.org>
 * @license  MIT
 */
        t.exports = function (t) {
            return null != t && (n(t) || r(t) || !!t._isBuffer)
        }
    }, function (t, e, n) {
        "use strict";

        function r(t) {
            this.defaults = t, this.interceptors = {request: new s, response: new s}
        }

        var i = n(13), o = n(1), s = n(72), a = n(73);
        r.prototype.request = function (t) {
            "string" == typeof t && (t = o.merge({url: arguments[0]}, arguments[1])), t = o.merge(i, this.defaults, {method: "get"}, t), t.method = t.method.toLowerCase();
            var e = [a, void 0], n = Promise.resolve(t);
            for (this.interceptors.request.forEach(function (t) {
                e.unshift(t.fulfilled, t.rejected)
            }), this.interceptors.response.forEach(function (t) {
                e.push(t.fulfilled, t.rejected)
            }); e.length;) n = n.then(e.shift(), e.shift());
            return n
        }, o.forEach(["delete", "get", "head", "options"], function (t) {
            r.prototype[t] = function (e, n) {
                return this.request(o.merge(n || {}, {method: t, url: e}))
            }
        }), o.forEach(["post", "put", "patch"], function (t) {
            r.prototype[t] = function (e, n, r) {
                return this.request(o.merge(r || {}, {method: t, url: e, data: n}))
            }
        }), t.exports = r
    }, function (t, e, n) {
        "use strict";
        var r = n(1);
        t.exports = function (t, e) {
            r.forEach(t, function (n, r) {
                r !== e && r.toUpperCase() === e.toUpperCase() && (t[e] = n, delete t[r])
            })
        }
    }, function (t, e, n) {
        "use strict";
        var r = n(19);
        t.exports = function (t, e, n) {
            var i = n.config.validateStatus;
            n.status && i && !i(n.status) ? e(r("Request failed with status code " + n.status, n.config, null, n.request, n)) : t(n)
        }
    }, function (t, e, n) {
        "use strict";
        t.exports = function (t, e, n, r, i) {
            return t.config = e, n && (t.code = n), t.request = r, t.response = i, t
        }
    }, function (t, e, n) {
        "use strict";

        function r(t) {
            return encodeURIComponent(t).replace(/%40/gi, "@").replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]")
        }

        var i = n(1);
        t.exports = function (t, e, n) {
            if (!e) return t;
            var o;
            if (n) o = n(e); else if (i.isURLSearchParams(e)) o = e.toString(); else {
                var s = [];
                i.forEach(e, function (t, e) {
                    null !== t && void 0 !== t && (i.isArray(t) && (e += "[]"), i.isArray(t) || (t = [t]), i.forEach(t, function (t) {
                        i.isDate(t) ? t = t.toISOString() : i.isObject(t) && (t = JSON.stringify(t)), s.push(r(e) + "=" + r(t))
                    }))
                }), o = s.join("&")
            }
            return o && (t += (-1 === t.indexOf("?") ? "?" : "&") + o), t
        }
    }, function (t, e, n) {
        "use strict";
        var r = n(1),
            i = ["age", "authorization", "content-length", "content-type", "etag", "expires", "from", "host", "if-modified-since", "if-unmodified-since", "last-modified", "location", "max-forwards", "proxy-authorization", "referer", "retry-after", "user-agent"];
        t.exports = function (t) {
            var e, n, o, s = {};
            return t ? (r.forEach(t.split("\n"), function (t) {
                if (o = t.indexOf(":"), e = r.trim(t.substr(0, o)).toLowerCase(), n = r.trim(t.substr(o + 1)), e) {
                    if (s[e] && i.indexOf(e) >= 0) return;
                    s[e] = "set-cookie" === e ? (s[e] ? s[e] : []).concat([n]) : s[e] ? s[e] + ", " + n : n
                }
            }), s) : s
        }
    }, function (t, e, n) {
        "use strict";
        var r = n(1);
        t.exports = r.isStandardBrowserEnv() ? function () {
            function t(t) {
                var e = t;
                return n && (i.setAttribute("href", e), e = i.href), i.setAttribute("href", e), {
                    href: i.href,
                    protocol: i.protocol ? i.protocol.replace(/:$/, "") : "",
                    host: i.host,
                    search: i.search ? i.search.replace(/^\?/, "") : "",
                    hash: i.hash ? i.hash.replace(/^#/, "") : "",
                    hostname: i.hostname,
                    port: i.port,
                    pathname: "/" === i.pathname.charAt(0) ? i.pathname : "/" + i.pathname
                }
            }

            var e, n = /(msie|trident)/i.test(navigator.userAgent), i = document.createElement("a");
            return e = t(window.location.href), function (n) {
                var i = r.isString(n) ? t(n) : n;
                return i.protocol === e.protocol && i.host === e.host
            }
        }() : function () {
            return function () {
                return !0
            }
        }()
    }, function (t, e, n) {
        "use strict";

        function r() {
            this.message = "String contains an invalid character"
        }

        function i(t) {
            for (var e, n, i = String(t), s = "", a = 0, u = o; i.charAt(0 | a) || (u = "=", a % 1); s += u.charAt(63 & e >> 8 - a % 1 * 8)) {
                if ((n = i.charCodeAt(a += .75)) > 255) throw new r;
                e = e << 8 | n
            }
            return s
        }

        var o = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
        r.prototype = new Error, r.prototype.code = 5, r.prototype.name = "InvalidCharacterError", t.exports = i
    }, function (t, e, n) {
        "use strict";
        var r = n(1);
        t.exports = r.isStandardBrowserEnv() ? function () {
            return {
                write: function (t, e, n, i, o, s) {
                    var a = [];
                    a.push(t + "=" + encodeURIComponent(e)), r.isNumber(n) && a.push("expires=" + new Date(n).toGMTString()), r.isString(i) && a.push("path=" + i), r.isString(o) && a.push("domain=" + o), !0 === s && a.push("secure"), document.cookie = a.join("; ")
                }, read: function (t) {
                    var e = document.cookie.match(new RegExp("(^|;\\s*)(" + t + ")=([^;]*)"));
                    return e ? decodeURIComponent(e[3]) : null
                }, remove: function (t) {
                    this.write(t, "", Date.now() - 864e5)
                }
            }
        }() : function () {
            return {
                write: function () {
                }, read: function () {
                    return null
                }, remove: function () {
                }
            }
        }()
    }, function (t, e, n) {
        "use strict";

        function r() {
            this.handlers = []
        }

        var i = n(1);
        r.prototype.use = function (t, e) {
            return this.handlers.push({fulfilled: t, rejected: e}), this.handlers.length - 1
        }, r.prototype.eject = function (t) {
            this.handlers[t] && (this.handlers[t] = null)
        }, r.prototype.forEach = function (t) {
            i.forEach(this.handlers, function (e) {
                null !== e && t(e)
            })
        }, t.exports = r
    }, function (t, e, n) {
        "use strict";

        function r(t) {
            t.cancelToken && t.cancelToken.throwIfRequested()
        }

        var i = n(1), o = n(74), s = n(20), a = n(13), u = n(75), c = n(76);
        t.exports = function (t) {
            return r(t), t.baseURL && !u(t.url) && (t.url = c(t.baseURL, t.url)), t.headers = t.headers || {}, t.data = o(t.data, t.headers, t.transformRequest), t.headers = i.merge(t.headers.common || {}, t.headers[t.method] || {}, t.headers || {}), i.forEach(["delete", "get", "head", "post", "put", "patch", "common"], function (e) {
                delete t.headers[e]
            }), (t.adapter || a.adapter)(t).then(function (e) {
                return r(t), e.data = o(e.data, e.headers, t.transformResponse), e
            }, function (e) {
                return s(e) || (r(t), e && e.response && (e.response.data = o(e.response.data, e.response.headers, t.transformResponse))), Promise.reject(e)
            })
        }
    }, function (t, e, n) {
        "use strict";
        var r = n(1);
        t.exports = function (t, e, n) {
            return r.forEach(n, function (n) {
                t = n(t, e)
            }), t
        }
    }, function (t, e, n) {
        "use strict";
        t.exports = function (t) {
            return /^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(t)
        }
    }, function (t, e, n) {
        "use strict";
        t.exports = function (t, e) {
            return e ? t.replace(/\/+$/, "") + "/" + e.replace(/^\/+/, "") : t
        }
    }, function (t, e, n) {
        "use strict";

        function r(t) {
            if ("function" != typeof t) throw new TypeError("executor must be a function.");
            var e;
            this.promise = new Promise(function (t) {
                e = t
            });
            var n = this;
            t(function (t) {
                n.reason || (n.reason = new i(t), e(n.reason))
            })
        }

        var i = n(21);
        r.prototype.throwIfRequested = function () {
            if (this.reason) throw this.reason
        }, r.source = function () {
            var t;
            return {
                token: new r(function (e) {
                    t = e
                }), cancel: t
            }
        }, t.exports = r
    }, function (t, e, n) {
        "use strict";
        t.exports = function (t) {
            return function (e) {
                return t.apply(null, e)
            }
        }
    }, function (t, e, n) {
        "use strict";
        (function (e) {
            function r(t) {
                var e;
                t.auth && (e = t.auth.match(/^(.+):(.+)$/), e ? (t.username = e[1], t.password = e[2]) : t.username = t.auth)
            }

            function i(t, e) {
                function n(t) {
                    return e.servers && (t._reconnectCount && t._reconnectCount !== e.servers.length || (t._reconnectCount = 0), e.host = e.servers[t._reconnectCount].host, e.port = e.servers[t._reconnectCount].port, e.hostname = e.host, t._reconnectCount++), c[e.protocol](t, e)
                }

                if ("object" != typeof t || e || (e = t, t = null), e = e || {}, t) {
                    var i = a.parse(t, !0);
                    if (null != i.port && (i.port = Number(i.port)), e = u(i, e), null === e.protocol) throw new Error("Missing protocol");
                    e.protocol = e.protocol.replace(/:$/, "")
                }
                if (r(e), e.query && "string" == typeof e.query.clientId && (e.clientId = e.query.clientId), e.cert && e.key) {
                    if (!e.protocol) throw new Error("Missing secure protocol key");
                    if (-1 === ["mqtts", "wss", "wxs"].indexOf(e.protocol)) switch (e.protocol) {
                        case"mqtt":
                            e.protocol = "mqtts";
                            break;
                        case"ws":
                            e.protocol = "wss";
                            break;
                        case"wx":
                            e.protocol = "wxs";
                            break;
                        default:
                            throw new Error('Unknown protocol for secure connection: "' + e.protocol + '"!')
                    }
                }
                if (!c[e.protocol]) {
                    var s = -1 !== ["mqtts", "wss"].indexOf(e.protocol);
                    e.protocol = ["mqtt", "mqtts", "ws", "wss", "wx", "wxs"].filter(function (t, e) {
                        return (!s || e % 2 != 0) && "function" == typeof c[t]
                    })[0]
                }
                if (!1 === e.clean && !e.clientId) throw new Error("Missing clientId for unclean clients");
                return new o(n, e)
            }

            var o = n(80), s = n(22), a = n(15), u = n(14), c = {};
            "browser" !== e.title ? (c.mqtt = n(34), c.tcp = n(34), c.ssl = n(16), c.tls = n(16), c.mqtts = n(16)) : (c.wx = n(35), c.wxs = n(35)), c.ws = n(37), c.wss = n(37), t.exports = i, t.exports.connect = i, t.exports.MqttClient = o, t.exports.Store = s
        }).call(e, n(0))
    }, function (t, e, n) {
        "use strict";
        (function (e, r) {
            function i() {
                return "mqttjs_" + Math.random().toString(16).substr(2, 8)
            }

            function o(t, e, n) {
                t.emit("packetsend", e), !h.writeToStream(e, t.stream) && n ? t.stream.once("drain", n) : n && n()
            }

            function s(t, e, n) {
                t.outgoingStore.put(e, function (r) {
                    if (r) return n && n(r);
                    o(t, e, n)
                })
            }

            function a() {
            }

            function u(t, e) {
                var n, r = this;
                if (!(this instanceof u)) return new u(t, e);
                this.options = e || {};
                for (n in v) void 0 === this.options[n] ? this.options[n] = v[n] : this.options[n] = e[n];
                this.options.clientId = "string" == typeof this.options.clientId ? this.options.clientId : i(), this.streamBuilder = t, this.outgoingStore = this.options.outgoingStore || new l, this.incomingStore = this.options.incomingStore || new l, this.queueQoSZero = void 0 === this.options.queueQoSZero || this.options.queueQoSZero, this._resubscribeTopics = {}, this.messageIdToTopic = {}, this.pingTimer = null, this.connected = !1, this.disconnecting = !1, this.queue = [], this.connackTimer = null, this.reconnectTimer = null, this.nextId = Math.floor(65535 * Math.random()), this.outgoing = {}, this.on("connect", function () {
                    if (!this.disconnected) {
                        this.connected = !0;
                        var t = null;
                        t = this.outgoingStore.createStream(), t.once("readable", function () {
                            function e() {
                                var n, i = t.read(1);
                                i && (!r.disconnecting && !r.reconnectTimer && r.options.reconnectPeriod > 0 ? (t.read(0), n = r.outgoing[i.messageId], r.outgoing[i.messageId] = function (t, r) {
                                    n && n(t, r), e()
                                }, r._sendPacket(i)) : t.destroy && t.destroy())
                            }

                            e()
                        }).on("error", this.emit.bind(this, "error"))
                    }
                }), this.on("close", function () {
                    this.connected = !1, clearTimeout(this.connackTimer)
                }), this.on("connect", this._setupPingTimer), this.on("connect", function () {
                    function t() {
                        var n = e.shift(), i = null;
                        n && (i = n.packet, r._sendPacket(i, function (e) {
                            n.cb && n.cb(e), t()
                        }))
                    }

                    var e = this.queue;
                    t()
                });
                var o = !0;
                this.on("connect", function () {
                    !o && this.options.clean && Object.keys(this._resubscribeTopics).length > 0 && (this.options.resubscribe ? (this._resubscribeTopics.resubscribe = !0, this.subscribe(this._resubscribeTopics)) : this._resubscribeTopics = {}), o = !1
                }), this.on("close", function () {
                    null !== r.pingTimer && (r.pingTimer.clear(), r.pingTimer = null)
                }), this.on("close", this._setupReconnect), c.EventEmitter.call(this), this._setupStream()
            }

            var c = n(5), l = n(22), f = n(30), h = n(91), p = n(9).Writable, d = n(3), g = n(100), b = n(101),
                m = n(14), y = e.setImmediate || function (t) {
                    r.nextTick(t)
                }, v = {
                    keepalive: 60,
                    reschedulePings: !0,
                    protocolId: "MQTT",
                    protocolVersion: 4,
                    reconnectPeriod: 1e3,
                    connectTimeout: 3e4,
                    clean: !0,
                    resubscribe: !0
                };
            d(u, c.EventEmitter), u.prototype._setupStream = function () {
                function t() {
                    r.nextTick(e)
                }

                function e() {
                    var e = l.shift(), n = c;
                    e ? i._handlePacket(e, t) : (c = null, n())
                }

                var n, i = this, s = new p, u = h.parser(this.options), c = null, l = [];
                this._clearReconnect(), this.stream = this.streamBuilder(this), u.on("packet", function (t) {
                    l.push(t)
                }), s._write = function (t, n, r) {
                    c = r, u.parse(t), e()
                }, this.stream.pipe(s), this.stream.on("error", a), f(this.stream, this.emit.bind(this, "close")), n = Object.create(this.options), n.cmd = "connect", o(this, n), u.on("error", this.emit.bind(this, "error")), this.stream.setMaxListeners(1e3), clearTimeout(this.connackTimer), this.connackTimer = setTimeout(function () {
                    i._cleanUp(!0)
                }, this.options.connectTimeout)
            }, u.prototype._handlePacket = function (t, e) {
                switch (this.emit("packetreceive", t), t.cmd) {
                    case"publish":
                        this._handlePublish(t, e);
                        break;
                    case"puback":
                    case"pubrec":
                    case"pubcomp":
                    case"suback":
                    case"unsuback":
                        this._handleAck(t), e();
                        break;
                    case"pubrel":
                        this._handlePubrel(t, e);
                        break;
                    case"connack":
                        this._handleConnack(t), e();
                        break;
                    case"pingresp":
                        this._handlePingresp(t), e()
                }
            }, u.prototype._checkDisconnecting = function (t) {
                return this.disconnecting && (t ? t(new Error("client disconnecting")) : this.emit("error", new Error("client disconnecting"))), this.disconnecting
            }, u.prototype.publish = function (t, e, n, r) {
                var i;
                if ("function" == typeof n && (r = n, n = null), n = m({
                    qos: 0,
                    retain: !1,
                    dup: !1
                }, n), this._checkDisconnecting(r)) return this;
                switch (i = {
                    cmd: "publish",
                    topic: t,
                    payload: e,
                    qos: n.qos,
                    retain: n.retain,
                    messageId: this._nextId(),
                    dup: n.dup
                }, n.qos) {
                    case 1:
                    case 2:
                        this.outgoing[i.messageId] = r || a, this._sendPacket(i);
                        break;
                    default:
                        this._sendPacket(i, r)
                }
                return this
            }, u.prototype.subscribe = function () {
                var t, e, n = Array.prototype.slice.call(arguments), r = [], i = n.shift(), o = i.resubscribe,
                    s = n.pop() || a, u = n.pop(), c = this;
                if (delete i.resubscribe, "string" == typeof i && (i = [i]), "function" != typeof s && (u = s, s = a), null !== (e = b.validateTopics(i))) return y(s, new Error("Invalid topic " + e)), this;
                if (this._checkDisconnecting(s)) return this;
                if (u = m({qos: 0}, u), Array.isArray(i) ? i.forEach(function (t) {
                    (c._resubscribeTopics[t] < u.qos || !c._resubscribeTopics.hasOwnProperty(t) || o) && r.push({
                        topic: t,
                        qos: u.qos
                    })
                }) : Object.keys(i).forEach(function (t) {
                    (c._resubscribeTopics[t] < i[t] || !c._resubscribeTopics.hasOwnProperty(t) || o) && r.push({
                        topic: t,
                        qos: i[t]
                    })
                }), t = {
                    cmd: "subscribe",
                    subscriptions: r,
                    qos: 1,
                    retain: !1,
                    dup: !1,
                    messageId: this._nextId()
                }, !r.length) return void s(null, []);
                if (this.options.resubscribe) {
                    var l = [];
                    r.forEach(function (t) {
                        c.options.reconnectPeriod > 0 && (c._resubscribeTopics[t.topic] = t.qos, l.push(t.topic))
                    }), c.messageIdToTopic[t.messageId] = l
                }
                return this.outgoing[t.messageId] = function (t, e) {
                    if (!t) for (var n = e.granted, i = 0; i < n.length; i += 1) r[i].qos = n[i];
                    s(t, r)
                }, this._sendPacket(t), this
            }, u.prototype.unsubscribe = function (t, e) {
                var n = {cmd: "unsubscribe", qos: 1, messageId: this._nextId()}, r = this;
                return e = e || a, this._checkDisconnecting(e) ? this : ("string" == typeof t ? n.unsubscriptions = [t] : "object" == typeof t && t.length && (n.unsubscriptions = t), this.options.resubscribe && n.unsubscriptions.forEach(function (t) {
                    delete r._resubscribeTopics[t]
                }), this.outgoing[n.messageId] = e, this._sendPacket(n), this)
            }, u.prototype.end = function (t, e) {
                function n() {
                    i.disconnected = !0, i.incomingStore.close(function () {
                        i.outgoingStore.close(e)
                    }), i._deferredReconnect && i._deferredReconnect()
                }

                function r() {
                    i._cleanUp(t, y.bind(null, n))
                }

                var i = this;
                return "function" == typeof t && (e = t, t = !1), this.disconnecting ? this : (this._clearReconnect(), this.disconnecting = !0, !t && Object.keys(this.outgoing).length > 0 ? this.once("outgoingEmpty", setTimeout.bind(null, r, 10)) : r(), this)
            }, u.prototype.removeOutgoingMessage = function (t) {
                var e = this.outgoing[t];
                return delete this.outgoing[t], this.outgoingStore.del({messageId: t}, function () {
                    e(new Error("Message removed"))
                }), this
            }, u.prototype.reconnect = function (t) {
                var e = this, n = function () {
                    t ? (e.options.incomingStore = t.incomingStore, e.options.outgoingStore = t.outgoingStore) : (e.options.incomingStore = null, e.options.outgoingStore = null), e.incomingStore = e.options.incomingStore || new l, e.outgoingStore = e.options.outgoingStore || new l, e.disconnecting = !1, e.disconnected = !1, e._deferredReconnect = null, e._reconnect()
                };
                return this.disconnecting && !this.disconnected ? this._deferredReconnect = n : n(), this
            }, u.prototype._reconnect = function () {
                this.emit("reconnect"), this._setupStream()
            }, u.prototype._setupReconnect = function () {
                var t = this;
                !t.disconnecting && !t.reconnectTimer && t.options.reconnectPeriod > 0 && (this.reconnecting || (this.emit("offline"), this.reconnecting = !0), t.reconnectTimer = setInterval(function () {
                    t._reconnect()
                }, t.options.reconnectPeriod))
            }, u.prototype._clearReconnect = function () {
                this.reconnectTimer && (clearInterval(this.reconnectTimer), this.reconnectTimer = null)
            }, u.prototype._cleanUp = function (t, e) {
                e && this.stream.on("close", e), t ? this.stream.destroy() : this._sendPacket({cmd: "disconnect"}, y.bind(null, this.stream.end.bind(this.stream))), this.disconnecting || (this._clearReconnect(), this._setupReconnect()), null !== this.pingTimer && (this.pingTimer.clear(), this.pingTimer = null)
            }, u.prototype._sendPacket = function (t, e) {
                if (!this.connected) return void(0 === (t.qos || 0) && this.queueQoSZero || "publish" !== t.cmd ? this.queue.push({
                    packet: t,
                    cb: e
                }) : t.qos > 0 ? this.outgoingStore.put(t, function (t) {
                    if (t) return e && e(t)
                }) : e && e(new Error("No connection to broker")));
                if (this._shiftPingInterval(), "publish" !== t.cmd) return void o(this, t, e);
                switch (t.qos) {
                    case 2:
                    case 1:
                        s(this, t, e);
                        break;
                    case 0:
                    default:
                        o(this, t, e)
                }
            }, u.prototype._setupPingTimer = function () {
                var t = this;
                !this.pingTimer && this.options.keepalive && (this.pingResp = !0, this.pingTimer = g(function () {
                    t._checkPing()
                }, 1e3 * this.options.keepalive))
            }, u.prototype._shiftPingInterval = function () {
                this.pingTimer && this.options.keepalive && this.options.reschedulePings && this.pingTimer.reschedule(1e3 * this.options.keepalive)
            }, u.prototype._checkPing = function () {
                this.pingResp ? (this.pingResp = !1, this._sendPacket({cmd: "pingreq"})) : this._cleanUp(!0)
            }, u.prototype._handlePingresp = function () {
                this.pingResp = !0
            }, u.prototype._handleConnack = function (t) {
                var e = t.returnCode,
                    n = ["", "Unacceptable protocol version", "Identifier rejected", "Server unavailable", "Bad username or password", "Not authorized"];
                if (clearTimeout(this.connackTimer), 0 === e) this.reconnecting = !1, this.emit("connect", t); else if (e > 0) {
                    var r = new Error("Connection refused: " + n[e]);
                    r.code = e, this.emit("error", r)
                }
            }, u.prototype._handlePublish = function (t, e) {
                var n = t.topic.toString(), r = t.payload, i = t.qos, o = t.messageId, s = this;
                switch (i) {
                    case 2:
                        this.incomingStore.put(t, function () {
                            s._sendPacket({cmd: "pubrec", messageId: o}, e)
                        });
                        break;
                    case 1:
                        this.emit("message", n, r, t), this.handleMessage(t, function (t) {
                            if (t) return e && e(t);
                            s._sendPacket({cmd: "puback", messageId: o}, e)
                        });
                        break;
                    case 0:
                        this.emit("message", n, r, t), this.handleMessage(t, e)
                }
            }, u.prototype.handleMessage = function (t, e) {
                e()
            }, u.prototype._handleAck = function (t) {
                var e = t.messageId, n = t.cmd, r = null, i = this.outgoing[e], o = this;
                if (i) {
                    switch (n) {
                        case"pubcomp":
                        case"puback":
                            delete this.outgoing[e], this.outgoingStore.del(t, i);
                            break;
                        case"pubrec":
                            r = {cmd: "pubrel", qos: 2, messageId: e}, this._sendPacket(r);
                            break;
                        case"suback":
                            if (delete this.outgoing[e], 1 === t.granted.length && 0 != (128 & t.granted[0])) {
                                var s = this.messageIdToTopic[e];
                                s && s.forEach(function (t) {
                                    delete o._resubscribeTopics[t]
                                })
                            }
                            i(null, t);
                            break;
                        case"unsuback":
                            delete this.outgoing[e], i(null);
                            break;
                        default:
                            o.emit("error", new Error("unrecognized packet type"))
                    }
                    this.disconnecting && 0 === Object.keys(this.outgoing).length && this.emit("outgoingEmpty")
                }
            }, u.prototype._handlePubrel = function (t, e) {
                var n = t.messageId, r = this, i = {cmd: "pubcomp", messageId: n};
                r.incomingStore.get(t, function (n, o) {
                    n || "pubrel" === o.cmd ? r._sendPacket(i, e) : (r.emit("message", o.topic, o.payload, o), r.incomingStore.put(t), r.handleMessage(o, function (t) {
                        if (t) return e && e(t);
                        r._sendPacket(i, e)
                    }))
                })
            }, u.prototype._nextId = function () {
                var t = this.nextId++;
                return 65535 === t && (this.nextId = 1), t
            }, u.prototype.getLastMessageId = function () {
                return 1 === this.nextId ? 65535 : this.nextId - 1
            }, t.exports = u
        }).call(e, n(2), n(0))
    }, function (t, e, n) {
        "use strict";

        function r(t) {
            var e = t.length;
            if (e % 4 > 0) throw new Error("Invalid string. Length must be a multiple of 4");
            return "=" === t[e - 2] ? 2 : "=" === t[e - 1] ? 1 : 0
        }

        function i(t) {
            return 3 * t.length / 4 - r(t)
        }

        function o(t) {
            var e, n, i, o, s, a = t.length;
            o = r(t), s = new f(3 * a / 4 - o), n = o > 0 ? a - 4 : a;
            var u = 0;
            for (e = 0; e < n; e += 4) i = l[t.charCodeAt(e)] << 18 | l[t.charCodeAt(e + 1)] << 12 | l[t.charCodeAt(e + 2)] << 6 | l[t.charCodeAt(e + 3)], s[u++] = i >> 16 & 255, s[u++] = i >> 8 & 255, s[u++] = 255 & i;
            return 2 === o ? (i = l[t.charCodeAt(e)] << 2 | l[t.charCodeAt(e + 1)] >> 4, s[u++] = 255 & i) : 1 === o && (i = l[t.charCodeAt(e)] << 10 | l[t.charCodeAt(e + 1)] << 4 | l[t.charCodeAt(e + 2)] >> 2, s[u++] = i >> 8 & 255, s[u++] = 255 & i), s
        }

        function s(t) {
            return c[t >> 18 & 63] + c[t >> 12 & 63] + c[t >> 6 & 63] + c[63 & t]
        }

        function a(t, e, n) {
            for (var r, i = [], o = e; o < n; o += 3) r = (t[o] << 16) + (t[o + 1] << 8) + t[o + 2], i.push(s(r));
            return i.join("")
        }

        function u(t) {
            for (var e, n = t.length, r = n % 3, i = "", o = [], s = 0, u = n - r; s < u; s += 16383) o.push(a(t, s, s + 16383 > u ? u : s + 16383));
            return 1 === r ? (e = t[n - 1], i += c[e >> 2], i += c[e << 4 & 63], i += "==") : 2 === r && (e = (t[n - 2] << 8) + t[n - 1], i += c[e >> 10], i += c[e >> 4 & 63], i += c[e << 2 & 63], i += "="), o.push(i), o.join("")
        }

        e.byteLength = i, e.toByteArray = o, e.fromByteArray = u;
        for (var c = [], l = [], f = "undefined" != typeof Uint8Array ? Uint8Array : Array, h = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", p = 0, d = h.length; p < d; ++p) c[p] = h[p], l[h.charCodeAt(p)] = p;
        l["-".charCodeAt(0)] = 62, l["_".charCodeAt(0)] = 63
    }, function (t, e) {
        e.read = function (t, e, n, r, i) {
            var o, s, a = 8 * i - r - 1, u = (1 << a) - 1, c = u >> 1, l = -7, f = n ? i - 1 : 0, h = n ? -1 : 1,
                p = t[e + f];
            for (f += h, o = p & (1 << -l) - 1, p >>= -l, l += a; l > 0; o = 256 * o + t[e + f], f += h, l -= 8) ;
            for (s = o & (1 << -l) - 1, o >>= -l, l += r; l > 0; s = 256 * s + t[e + f], f += h, l -= 8) ;
            if (0 === o) o = 1 - c; else {
                if (o === u) return s ? NaN : 1 / 0 * (p ? -1 : 1);
                s += Math.pow(2, r), o -= c
            }
            return (p ? -1 : 1) * s * Math.pow(2, o - r)
        }, e.write = function (t, e, n, r, i, o) {
            var s, a, u, c = 8 * o - i - 1, l = (1 << c) - 1, f = l >> 1,
                h = 23 === i ? Math.pow(2, -24) - Math.pow(2, -77) : 0, p = r ? 0 : o - 1, d = r ? 1 : -1,
                g = e < 0 || 0 === e && 1 / e < 0 ? 1 : 0;
            for (e = Math.abs(e), isNaN(e) || e === 1 / 0 ? (a = isNaN(e) ? 1 : 0, s = l) : (s = Math.floor(Math.log(e) / Math.LN2), e * (u = Math.pow(2, -s)) < 1 && (s--, u *= 2), e += s + f >= 1 ? h / u : h * Math.pow(2, 1 - f), e * u >= 2 && (s++, u /= 2), s + f >= l ? (a = 0, s = l) : s + f >= 1 ? (a = (e * u - 1) * Math.pow(2, i), s += f) : (a = e * Math.pow(2, f - 1) * Math.pow(2, i), s = 0)); i >= 8; t[n + p] = 255 & a, p += d, a /= 256, i -= 8) ;
            for (s = s << i | a, c += i; c > 0; t[n + p] = 255 & s, p += d, s /= 256, c -= 8) ;
            t[n + p - d] |= 128 * g
        }
    }, function (t, e) {
    }, function (t, e, n) {
        "use strict";

        function r(t, e) {
            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
        }

        function i(t, e, n) {
            t.copy(e, n)
        }

        var o = n(4).Buffer;
        t.exports = function () {
            function t() {
                r(this, t), this.head = null, this.tail = null, this.length = 0
            }

            return t.prototype.push = function (t) {
                var e = {data: t, next: null};
                this.length > 0 ? this.tail.next = e : this.head = e, this.tail = e, ++this.length
            }, t.prototype.unshift = function (t) {
                var e = {data: t, next: this.head};
                0 === this.length && (this.tail = e), this.head = e, ++this.length
            }, t.prototype.shift = function () {
                if (0 !== this.length) {
                    var t = this.head.data;
                    return 1 === this.length ? this.head = this.tail = null : this.head = this.head.next, --this.length, t
                }
            }, t.prototype.clear = function () {
                this.head = this.tail = null, this.length = 0
            }, t.prototype.join = function (t) {
                if (0 === this.length) return "";
                for (var e = this.head, n = "" + e.data; e = e.next;) n += t + e.data;
                return n
            }, t.prototype.concat = function (t) {
                if (0 === this.length) return o.alloc(0);
                if (1 === this.length) return this.head.data;
                for (var e = o.allocUnsafe(t >>> 0), n = this.head, r = 0; n;) i(n.data, e, r), r += n.data.length, n = n.next;
                return e
            }, t
        }()
    }, function (t, e, n) {
        function r(t, e) {
            this._id = t, this._clearFn = e
        }

        var i = Function.prototype.apply;
        e.setTimeout = function () {
            return new r(i.call(setTimeout, window, arguments), clearTimeout)
        }, e.setInterval = function () {
            return new r(i.call(setInterval, window, arguments), clearInterval)
        }, e.clearTimeout = e.clearInterval = function (t) {
            t && t.close()
        }, r.prototype.unref = r.prototype.ref = function () {
        }, r.prototype.close = function () {
            this._clearFn.call(window, this._id)
        }, e.enroll = function (t, e) {
            clearTimeout(t._idleTimeoutId), t._idleTimeout = e
        }, e.unenroll = function (t) {
            clearTimeout(t._idleTimeoutId), t._idleTimeout = -1
        }, e._unrefActive = e.active = function (t) {
            clearTimeout(t._idleTimeoutId);
            var e = t._idleTimeout;
            e >= 0 && (t._idleTimeoutId = setTimeout(function () {
                t._onTimeout && t._onTimeout()
            }, e))
        }, n(86), e.setImmediate = setImmediate, e.clearImmediate = clearImmediate
    }, function (t, e, n) {
        (function (t, e) {
            !function (t, n) {
                "use strict";

                function r(t) {
                    "function" != typeof t && (t = new Function("" + t));
                    for (var e = new Array(arguments.length - 1), n = 0; n < e.length; n++) e[n] = arguments[n + 1];
                    var r = {callback: t, args: e};
                    return c[u] = r, a(u), u++
                }

                function i(t) {
                    delete c[t]
                }

                function o(t) {
                    var e = t.callback, r = t.args;
                    switch (r.length) {
                        case 0:
                            e();
                            break;
                        case 1:
                            e(r[0]);
                            break;
                        case 2:
                            e(r[0], r[1]);
                            break;
                        case 3:
                            e(r[0], r[1], r[2]);
                            break;
                        default:
                            e.apply(n, r)
                    }
                }

                function s(t) {
                    if (l) setTimeout(s, 0, t); else {
                        var e = c[t];
                        if (e) {
                            l = !0;
                            try {
                                o(e)
                            } finally {
                                i(t), l = !1
                            }
                        }
                    }
                }

                if (!t.setImmediate) {
                    var a, u = 1, c = {}, l = !1, f = t.document, h = Object.getPrototypeOf && Object.getPrototypeOf(t);
                    h = h && h.setTimeout ? h : t, "[object process]" === {}.toString.call(t.process) ? function () {
                        a = function (t) {
                            e.nextTick(function () {
                                s(t)
                            })
                        }
                    }() : function () {
                        if (t.postMessage && !t.importScripts) {
                            var e = !0, n = t.onmessage;
                            return t.onmessage = function () {
                                e = !1
                            }, t.postMessage("", "*"), t.onmessage = n, e
                        }
                    }() ? function () {
                        var e = "setImmediate$" + Math.random() + "$", n = function (n) {
                            n.source === t && "string" == typeof n.data && 0 === n.data.indexOf(e) && s(+n.data.slice(e.length))
                        };
                        t.addEventListener ? t.addEventListener("message", n, !1) : t.attachEvent("onmessage", n), a = function (n) {
                            t.postMessage(e + n, "*")
                        }
                    }() : t.MessageChannel ? function () {
                        var t = new MessageChannel;
                        t.port1.onmessage = function (t) {
                            s(t.data)
                        }, a = function (e) {
                            t.port2.postMessage(e)
                        }
                    }() : f && "onreadystatechange" in f.createElement("script") ? function () {
                        var t = f.documentElement;
                        a = function (e) {
                            var n = f.createElement("script");
                            n.onreadystatechange = function () {
                                s(e), n.onreadystatechange = null, t.removeChild(n), n = null
                            }, t.appendChild(n)
                        }
                    }() : function () {
                        a = function (t) {
                            setTimeout(s, 0, t)
                        }
                    }(), h.setImmediate = r, h.clearImmediate = i
                }
            }("undefined" == typeof self ? void 0 === t ? this : t : self)
        }).call(e, n(2), n(0))
    }, function (t, e, n) {
        (function (e) {
            function n(t, e) {
                function n() {
                    if (!i) {
                        if (r("throwDeprecation")) throw new Error(e);
                        r("traceDeprecation"), i = !0
                    }
                    return t.apply(this, arguments)
                }

                if (r("noDeprecation")) return t;
                var i = !1;
                return n
            }

            function r(t) {
                try {
                    if (!e.localStorage) return !1
                } catch (t) {
                    return !1
                }
                var n = e.localStorage[t];
                return null != n && "true" === String(n).toLowerCase()
            }

            t.exports = n
        }).call(e, n(2))
    }, function (t, e, n) {
        "use strict";

        function r(t) {
            if (!(this instanceof r)) return new r(t);
            i.call(this, t)
        }

        t.exports = r;
        var i = n(29), o = n(8);
        o.inherits = n(3), o.inherits(r, i), r.prototype._transform = function (t, e, n) {
            n(null, t)
        }
    }, function (t, e, n) {
        function r(t) {
            var e = function () {
                return e.called ? e.value : (e.called = !0, e.value = t.apply(this, arguments))
            };
            return e.called = !1, e
        }

        function i(t) {
            var e = function () {
                if (e.called) throw new Error(e.onceError);
                return e.called = !0, e.value = t.apply(this, arguments)
            }, n = t.name || "Function wrapped with `once`";
            return e.onceError = n + " shouldn't be called more than once", e.called = !1, e
        }

        var o = n(90);
        t.exports = o(r), t.exports.strict = o(i), r.proto = r(function () {
            Object.defineProperty(Function.prototype, "once", {
                value: function () {
                    return r(this)
                }, configurable: !0
            }), Object.defineProperty(Function.prototype, "onceStrict", {
                value: function () {
                    return i(this)
                }, configurable: !0
            })
        })
    }, function (t, e) {
        function n(t, e) {
            function r() {
                for (var e = new Array(arguments.length), n = 0; n < e.length; n++) e[n] = arguments[n];
                var r = t.apply(this, e), i = e[e.length - 1];
                return "function" == typeof r && r !== i && Object.keys(i).forEach(function (t) {
                    r[t] = i[t]
                }), r
            }

            if (t && e) return n(t)(e);
            if ("function" != typeof t) throw new TypeError("need wrapper function");
            return Object.keys(t).forEach(function (e) {
                r[e] = t[e]
            }), r
        }

        t.exports = n
    }, function (t, e, n) {
        "use strict";
        e.parser = n(92), e.generate = n(98), e.writeToStream = n(32)
    }, function (t, e, n) {
        "use strict";

        function r() {
            if (!(this instanceof r)) return new r;
            this._states = ["_parseHeader", "_parseLength", "_parsePayload", "_newPacket"], this._resetState()
        }

        var i = n(93), o = n(3), s = n(5).EventEmitter, a = n(97), u = n(31);
        o(r, s), r.prototype._resetState = function () {
            this.packet = new a, this.error = null, this._list = i(), this._stateCounter = 0
        }, r.prototype.parse = function (t) {
            for (this.error && this._resetState(), this._list.append(t); (-1 !== this.packet.length || this._list.length > 0) && this[this._states[this._stateCounter]]() && !this.error;) ++this._stateCounter >= this._states.length && (this._stateCounter = 0);
            return this._list.length
        }, r.prototype._parseHeader = function () {
            var t = this._list.readUInt8(0);
            return this.packet.cmd = u.types[t >> u.CMD_SHIFT], this.packet.retain = 0 != (t & u.RETAIN_MASK), this.packet.qos = t >> u.QOS_SHIFT & u.QOS_MASK, this.packet.dup = 0 != (t & u.DUP_MASK), this._list.consume(1), !0
        }, r.prototype._parseLength = function () {
            for (var t, e = 0, n = 1, r = 0, i = !0; e < 5 && (t = this._list.readUInt8(e++), r += n * (t & u.LENGTH_MASK), n *= 128, 0 != (t & u.LENGTH_FIN_MASK));) if (this._list.length <= e) {
                i = !1;
                break
            }
            return i && (this.packet.length = r, this._list.consume(e)), i
        }, r.prototype._parsePayload = function () {
            var t = !1;
            if (0 === this.packet.length || this._list.length >= this.packet.length) {
                switch (this._pos = 0, this.packet.cmd) {
                    case"connect":
                        this._parseConnect();
                        break;
                    case"connack":
                        this._parseConnack();
                        break;
                    case"publish":
                        this._parsePublish();
                        break;
                    case"puback":
                    case"pubrec":
                    case"pubrel":
                    case"pubcomp":
                        this._parseMessageId();
                        break;
                    case"subscribe":
                        this._parseSubscribe();
                        break;
                    case"suback":
                        this._parseSuback();
                        break;
                    case"unsubscribe":
                        this._parseUnsubscribe();
                        break;
                    case"unsuback":
                        this._parseUnsuback();
                        break;
                    case"pingreq":
                    case"pingresp":
                    case"disconnect":
                        break;
                    default:
                        this._emitError(new Error("Not supported"))
                }
                t = !0
            }
            return t
        }, r.prototype._parseConnect = function () {
            var t, e, n, r, i, o, s = {}, a = this.packet;
            if (null === (t = this._parseString())) return this._emitError(new Error("Cannot parse protocolId"));
            if ("MQTT" !== t && "MQIsdp" !== t) return this._emitError(new Error("Invalid protocolId"));
            if (a.protocolId = t, this._pos >= this._list.length) return this._emitError(new Error("Packet too short"));
            if (a.protocolVersion = this._list.readUInt8(this._pos), 3 !== a.protocolVersion && 4 !== a.protocolVersion) return this._emitError(new Error("Invalid protocol version"));
            if (++this._pos >= this._list.length) return this._emitError(new Error("Packet too short"));
            if (s.username = this._list.readUInt8(this._pos) & u.USERNAME_MASK, s.password = this._list.readUInt8(this._pos) & u.PASSWORD_MASK, s.will = this._list.readUInt8(this._pos) & u.WILL_FLAG_MASK, s.will && (a.will = {}, a.will.retain = 0 != (this._list.readUInt8(this._pos) & u.WILL_RETAIN_MASK), a.will.qos = (this._list.readUInt8(this._pos) & u.WILL_QOS_MASK) >> u.WILL_QOS_SHIFT), a.clean = 0 != (this._list.readUInt8(this._pos) & u.CLEAN_SESSION_MASK), this._pos++, a.keepalive = this._parseNum(), -1 === a.keepalive) return this._emitError(new Error("Packet too short"));
            if (null === (e = this._parseString())) return this._emitError(new Error("Packet too short"));
            if (a.clientId = e, s.will) {
                if (null === (n = this._parseString())) return this._emitError(new Error("Cannot parse will topic"));
                if (a.will.topic = n, null === (r = this._parseBuffer())) return this._emitError(new Error("Cannot parse will payload"));
                a.will.payload = r
            }
            if (s.username) {
                if (null === (o = this._parseString())) return this._emitError(new Error("Cannot parse username"));
                a.username = o
            }
            if (s.password) {
                if (null === (i = this._parseBuffer())) return this._emitError(new Error("Cannot parse password"));
                a.password = i
            }
            return a
        }, r.prototype._parseConnack = function () {
            var t = this.packet;
            return this._list.length < 2 ? null : (t.sessionPresent = !!(this._list.readUInt8(this._pos++) & u.SESSIONPRESENT_MASK), t.returnCode = this._list.readUInt8(this._pos), -1 === t.returnCode ? this._emitError(new Error("Cannot parse return code")) : void 0)
        }, r.prototype._parsePublish = function () {
            var t = this.packet;
            if (t.topic = this._parseString(), null === t.topic) return this._emitError(new Error("Cannot parse topic"));
            t.qos > 0 && !this._parseMessageId() || (t.payload = this._list.slice(this._pos, t.length))
        }, r.prototype._parseSubscribe = function () {
            var t, e, n = this.packet;
            if (1 !== n.qos) return this._emitError(new Error("Wrong subscribe header"));
            if (n.subscriptions = [], this._parseMessageId()) for (; this._pos < n.length;) {
                if (null === (t = this._parseString())) return this._emitError(new Error("Cannot parse topic"));
                e = this._list.readUInt8(this._pos++), n.subscriptions.push({topic: t, qos: e})
            }
        }, r.prototype._parseSuback = function () {
            if (this.packet.granted = [], this._parseMessageId()) for (; this._pos < this.packet.length;) this.packet.granted.push(this._list.readUInt8(this._pos++))
        }, r.prototype._parseUnsubscribe = function () {
            var t = this.packet;
            if (t.unsubscriptions = [], this._parseMessageId()) for (; this._pos < t.length;) {
                var e;
                if (null === (e = this._parseString())) return this._emitError(new Error("Cannot parse topic"));
                t.unsubscriptions.push(e)
            }
        }, r.prototype._parseUnsuback = function () {
            if (!this._parseMessageId()) return this._emitError(new Error("Cannot parse messageId"))
        }, r.prototype._parseMessageId = function () {
            var t = this.packet;
            return t.messageId = this._parseNum(), null !== t.messageId || (this._emitError(new Error("Cannot parse messageId")), !1)
        }, r.prototype._parseString = function (t) {
            var e, n = this._parseNum(), r = n + this._pos;
            return -1 === n || r > this._list.length || r > this.packet.length ? null : (e = this._list.toString("utf8", this._pos, r), this._pos += n, e)
        }, r.prototype._parseBuffer = function () {
            var t, e = this._parseNum(), n = e + this._pos;
            return -1 === e || n > this._list.length || n > this.packet.length ? null : (t = this._list.slice(this._pos, n), this._pos += e, t)
        }, r.prototype._parseNum = function () {
            if (this._list.length - this._pos < 2) return -1;
            var t = this._list.readUInt16BE(this._pos);
            return this._pos += 2, t
        }, r.prototype._newPacket = function () {
            return this.packet && (this._list.consume(this.packet.length), this.emit("packet", this.packet)), this.packet = new a, !0
        }, r.prototype._emitError = function (t) {
            this.error = t, this.emit("error", t)
        }, t.exports = r
    }, function (t, e, n) {
        (function (e) {
            function r(t) {
                if (!(this instanceof r)) return new r(t);
                if (this._bufs = [], this.length = 0, "function" == typeof t) {
                    this._callback = t;
                    var e = function (t) {
                        this._callback && (this._callback(t), this._callback = null)
                    }.bind(this);
                    this.on("pipe", function (t) {
                        t.on("error", e)
                    }), this.on("unpipe", function (t) {
                        t.removeListener("error", e)
                    })
                } else this.append(t);
                i.call(this)
            }

            var i = n(94);
            n(95).inherits(r, i), r.prototype._offset = function (t) {
                var e, n = 0, r = 0;
                if (0 === t) return [0, 0];
                for (; r < this._bufs.length; r++) {
                    if (e = n + this._bufs[r].length, t < e || r == this._bufs.length - 1) return [r, t - n];
                    n = e
                }
            }, r.prototype.append = function (t) {
                var n = 0;
                if (e.isBuffer(t)) this._appendBuffer(t); else if (Array.isArray(t)) for (; n < t.length; n++) this.append(t[n]); else if (t instanceof r) for (; n < t._bufs.length; n++) this.append(t._bufs[n]); else null != t && ("number" == typeof t && (t = t.toString()), this._appendBuffer(new e(t)));
                return this
            }, r.prototype._appendBuffer = function (t) {
                this._bufs.push(t), this.length += t.length
            }, r.prototype._write = function (t, e, n) {
                this._appendBuffer(t), "function" == typeof n && n()
            }, r.prototype._read = function (t) {
                if (!this.length) return this.push(null);
                t = Math.min(t, this.length), this.push(this.slice(0, t)), this.consume(t)
            }, r.prototype.end = function (t) {
                i.prototype.end.call(this, t), this._callback && (this._callback(null, this.slice()), this._callback = null)
            }, r.prototype.get = function (t) {
                return this.slice(t, t + 1)[0]
            }, r.prototype.slice = function (t, e) {
                return "number" == typeof t && t < 0 && (t += this.length), "number" == typeof e && e < 0 && (e += this.length), this.copy(null, 0, t, e)
            }, r.prototype.copy = function (t, n, r, i) {
                if (("number" != typeof r || r < 0) && (r = 0), ("number" != typeof i || i > this.length) && (i = this.length), r >= this.length) return t || new e(0);
                if (i <= 0) return t || new e(0);
                var o, s, a = !!t, u = this._offset(r), c = i - r, l = c, f = a && n || 0, h = u[1];
                if (0 === r && i == this.length) {
                    if (!a) return 1 === this._bufs.length ? this._bufs[0] : e.concat(this._bufs, this.length);
                    for (s = 0; s < this._bufs.length; s++) this._bufs[s].copy(t, f), f += this._bufs[s].length;
                    return t
                }
                if (l <= this._bufs[u[0]].length - h) return a ? this._bufs[u[0]].copy(t, n, h, h + l) : this._bufs[u[0]].slice(h, h + l);
                for (a || (t = new e(c)), s = u[0]; s < this._bufs.length; s++) {
                    if (o = this._bufs[s].length - h, !(l > o)) {
                        this._bufs[s].copy(t, f, h, h + l);
                        break
                    }
                    this._bufs[s].copy(t, f, h), f += o, l -= o, h && (h = 0)
                }
                return t
            }, r.prototype.shallowSlice = function (t, e) {
                t = t || 0, e = e || this.length, t < 0 && (t += this.length), e < 0 && (e += this.length);
                var n = this._offset(t), i = this._offset(e), o = this._bufs.slice(n[0], i[0] + 1);
                return 0 == i[1] ? o.pop() : o[o.length - 1] = o[o.length - 1].slice(0, i[1]), 0 != n[1] && (o[0] = o[0].slice(n[1])), new r(o)
            }, r.prototype.toString = function (t, e, n) {
                return this.slice(e, n).toString(t)
            }, r.prototype.consume = function (t) {
                for (; this._bufs.length;) {
                    if (!(t >= this._bufs[0].length)) {
                        this._bufs[0] = this._bufs[0].slice(t), this.length -= t;
                        break
                    }
                    t -= this._bufs[0].length, this.length -= this._bufs[0].length, this._bufs.shift()
                }
                return this
            }, r.prototype.duplicate = function () {
                for (var t = 0, e = new r; t < this._bufs.length; t++) e.append(this._bufs[t]);
                return e
            }, r.prototype.destroy = function () {
                this._bufs.length = 0, this.length = 0, this.push(null)
            }, function () {
                var t = {
                    readDoubleBE: 8,
                    readDoubleLE: 8,
                    readFloatBE: 4,
                    readFloatLE: 4,
                    readInt32BE: 4,
                    readInt32LE: 4,
                    readUInt32BE: 4,
                    readUInt32LE: 4,
                    readInt16BE: 2,
                    readInt16LE: 2,
                    readUInt16BE: 2,
                    readUInt16LE: 2,
                    readInt8: 1,
                    readUInt8: 1
                };
                for (var e in t) !function (e) {
                    r.prototype[e] = function (n) {
                        return this.slice(n, n + t[e])[e](0)
                    }
                }(e)
            }(), t.exports = r
        }).call(e, n(10).Buffer)
    }, function (t, e, n) {
        t.exports = n(6)
    }, function (t, e, n) {
        (function (t, r) {
            function i(t, n) {
                var r = {seen: [], stylize: s};
                return arguments.length >= 3 && (r.depth = arguments[2]), arguments.length >= 4 && (r.colors = arguments[3]), g(n) ? r.showHidden = n : n && e._extend(r, n), _(r.showHidden) && (r.showHidden = !1), _(r.depth) && (r.depth = 2), _(r.colors) && (r.colors = !1), _(r.customInspect) && (r.customInspect = !0), r.colors && (r.stylize = o), u(r, t, r.depth)
            }

            function o(t, e) {
                var n = i.styles[e];
                return n ? "[" + i.colors[n][0] + "m" + t + "[" + i.colors[n][1] + "m" : t
            }

            function s(t, e) {
                return t
            }

            function a(t) {
                var e = {};
                return t.forEach(function (t, n) {
                    e[t] = !0
                }), e
            }

            function u(t, n, r) {
                if (t.customInspect && n && I(n.inspect) && n.inspect !== e.inspect && (!n.constructor || n.constructor.prototype !== n)) {
                    var i = n.inspect(r, t);
                    return v(i) || (i = u(t, i, r)), i
                }
                var o = c(t, n);
                if (o) return o;
                var s = Object.keys(n), g = a(s);
                if (t.showHidden && (s = Object.getOwnPropertyNames(n)), x(n) && (s.indexOf("message") >= 0 || s.indexOf("description") >= 0)) return l(n);
                if (0 === s.length) {
                    if (I(n)) {
                        var b = n.name ? ": " + n.name : "";
                        return t.stylize("[Function" + b + "]", "special")
                    }
                    if (S(n)) return t.stylize(RegExp.prototype.toString.call(n), "regexp");
                    if (k(n)) return t.stylize(Date.prototype.toString.call(n), "date");
                    if (x(n)) return l(n)
                }
                var m = "", y = !1, w = ["{", "}"];
                if (d(n) && (y = !0, w = ["[", "]"]), I(n)) {
                    m = " [Function" + (n.name ? ": " + n.name : "") + "]"
                }
                if (S(n) && (m = " " + RegExp.prototype.toString.call(n)), k(n) && (m = " " + Date.prototype.toUTCString.call(n)), x(n) && (m = " " + l(n)), 0 === s.length && (!y || 0 == n.length)) return w[0] + m + w[1];
                if (r < 0) return S(n) ? t.stylize(RegExp.prototype.toString.call(n), "regexp") : t.stylize("[Object]", "special");
                t.seen.push(n);
                var _;
                return _ = y ? f(t, n, r, g, s) : s.map(function (e) {
                    return h(t, n, r, g, e, y)
                }), t.seen.pop(), p(_, m, w)
            }

            function c(t, e) {
                if (_(e)) return t.stylize("undefined", "undefined");
                if (v(e)) {
                    var n = "'" + JSON.stringify(e).replace(/^"|"$/g, "").replace(/'/g, "\\'").replace(/\\"/g, '"') + "'";
                    return t.stylize(n, "string")
                }
                return y(e) ? t.stylize("" + e, "number") : g(e) ? t.stylize("" + e, "boolean") : b(e) ? t.stylize("null", "null") : void 0
            }

            function l(t) {
                return "[" + Error.prototype.toString.call(t) + "]"
            }

            function f(t, e, n, r, i) {
                for (var o = [], s = 0, a = e.length; s < a; ++s) O(e, String(s)) ? o.push(h(t, e, n, r, String(s), !0)) : o.push("");
                return i.forEach(function (i) {
                    i.match(/^\d+$/) || o.push(h(t, e, n, r, i, !0))
                }), o
            }

            function h(t, e, n, r, i, o) {
                var s, a, c;
                if (c = Object.getOwnPropertyDescriptor(e, i) || {value: e[i]}, c.get ? a = c.set ? t.stylize("[Getter/Setter]", "special") : t.stylize("[Getter]", "special") : c.set && (a = t.stylize("[Setter]", "special")), O(r, i) || (s = "[" + i + "]"), a || (t.seen.indexOf(c.value) < 0 ? (a = b(n) ? u(t, c.value, null) : u(t, c.value, n - 1), a.indexOf("\n") > -1 && (a = o ? a.split("\n").map(function (t) {
                    return "  " + t
                }).join("\n").substr(2) : "\n" + a.split("\n").map(function (t) {
                    return "   " + t
                }).join("\n"))) : a = t.stylize("[Circular]", "special")), _(s)) {
                    if (o && i.match(/^\d+$/)) return a;
                    s = JSON.stringify("" + i), s.match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/) ? (s = s.substr(1, s.length - 2), s = t.stylize(s, "name")) : (s = s.replace(/'/g, "\\'").replace(/\\"/g, '"').replace(/(^"|"$)/g, "'"), s = t.stylize(s, "string"))
                }
                return s + ": " + a
            }

            function p(t, e, n) {
                var r = 0;
                return t.reduce(function (t, e) {
                    return r++, e.indexOf("\n") >= 0 && r++, t + e.replace(/\u001b\[\d\d?m/g, "").length + 1
                }, 0) > 60 ? n[0] + ("" === e ? "" : e + "\n ") + " " + t.join(",\n  ") + " " + n[1] : n[0] + e + " " + t.join(", ") + " " + n[1]
            }

            function d(t) {
                return Array.isArray(t)
            }

            function g(t) {
                return "boolean" == typeof t
            }

            function b(t) {
                return null === t
            }

            function m(t) {
                return null == t
            }

            function y(t) {
                return "number" == typeof t
            }

            function v(t) {
                return "string" == typeof t
            }

            function w(t) {
                return "symbol" == typeof t
            }

            function _(t) {
                return void 0 === t
            }

            function S(t) {
                return E(t) && "[object RegExp]" === A(t)
            }

            function E(t) {
                return "object" == typeof t && null !== t
            }

            function k(t) {
                return E(t) && "[object Date]" === A(t)
            }

            function x(t) {
                return E(t) && ("[object Error]" === A(t) || t instanceof Error)
            }

            function I(t) {
                return "function" == typeof t
            }

            function T(t) {
                return null === t || "boolean" == typeof t || "number" == typeof t || "string" == typeof t || "symbol" == typeof t || void 0 === t
            }

            function A(t) {
                return Object.prototype.toString.call(t)
            }

            function O(t, e) {
                return Object.prototype.hasOwnProperty.call(t, e)
            }

            var R = /%[sdj%]/g;
            e.format = function (t) {
                if (!v(t)) {
                    for (var e = [], n = 0; n < arguments.length; n++) e.push(i(arguments[n]));
                    return e.join(" ")
                }
                for (var n = 1, r = arguments, o = r.length, s = String(t).replace(R, function (t) {
                    if ("%%" === t) return "%";
                    if (n >= o) return t;
                    switch (t) {
                        case"%s":
                            return String(r[n++]);
                        case"%d":
                            return Number(r[n++]);
                        case"%j":
                            try {
                                return JSON.stringify(r[n++])
                            } catch (t) {
                                return "[Circular]"
                            }
                        default:
                            return t
                    }
                }), a = r[n]; n < o; a = r[++n]) b(a) || !E(a) ? s += " " + a : s += " " + i(a);
                return s
            }, e.deprecate = function (n, i) {
                function o() {
                    if (!s) {
                        if (r.throwDeprecation) throw new Error(i);
                        r.traceDeprecation, s = !0
                    }
                    return n.apply(this, arguments)
                }

                if (_(t.process)) return function () {
                    return e.deprecate(n, i).apply(this, arguments)
                };
                if (!0 === r.noDeprecation) return n;
                var s = !1;
                return o
            };
            var C, P = {};
            e.debuglog = function (t) {
                if (_(C) && (C = r.env.NODE_DEBUG || ""), t = t.toUpperCase(), !P[t]) if (new RegExp("\\b" + t + "\\b", "i").test(C)) {
                    r.pid;
                    P[t] = function () {
                        e.format.apply(e, arguments)
                    }
                } else P[t] = function () {
                };
                return P[t]
            }, e.inspect = i, i.colors = {
                bold: [1, 22],
                italic: [3, 23],
                underline: [4, 24],
                inverse: [7, 27],
                white: [37, 39],
                grey: [90, 39],
                black: [30, 39],
                blue: [34, 39],
                cyan: [36, 39],
                green: [32, 39],
                magenta: [35, 39],
                red: [31, 39],
                yellow: [33, 39]
            }, i.styles = {
                special: "cyan",
                number: "yellow",
                boolean: "yellow",
                undefined: "grey",
                null: "bold",
                string: "green",
                date: "magenta",
                regexp: "red"
            }, e.isArray = d, e.isBoolean = g, e.isNull = b, e.isNullOrUndefined = m, e.isNumber = y, e.isString = v, e.isSymbol = w, e.isUndefined = _, e.isRegExp = S, e.isObject = E, e.isDate = k, e.isError = x, e.isFunction = I, e.isPrimitive = T, e.isBuffer = n(96);
            e.log = function () {
            }, e.inherits = n(3), e._extend = function (t, e) {
                if (!e || !E(e)) return t;
                for (var n = Object.keys(e), r = n.length; r--;) t[n[r]] = e[n[r]];
                return t
            }
        }).call(e, n(2), n(0))
    }, function (t, e) {
        t.exports = function (t) {
            return t && "object" == typeof t && "function" == typeof t.copy && "function" == typeof t.fill && "function" == typeof t.readUInt8
        }
    }, function (t, e) {
        function n() {
            this.cmd = null, this.retain = !1, this.qos = 0, this.dup = !1, this.length = -1, this.topic = null, this.payload = null
        }

        t.exports = n
    }, function (t, e, n) {
        "use strict";

        function r(t) {
            var e = new i;
            return s(t, e), e.concat()
        }

        function i() {
            this._array = new Array(20), this._i = 0
        }

        var o = n(4).Buffer, s = n(32), a = n(5).EventEmitter;
        n(3)(i, a), i.prototype.write = function (t) {
            return this._array[this._i++] = t, !0
        }, i.prototype.concat = function () {
            var t, e, n = 0, r = new Array(this._array.length), i = this._array, s = 0;
            for (t = 0; t < i.length && i[t]; t++) "string" != typeof i[t] ? r[t] = i[t].length : r[t] = o.byteLength(i[t]), n += r[t];
            for (e = o.allocUnsafe(n), t = 0; t < i.length && i[t]; t++) "string" != typeof i[t] ? (i[t].copy(e, s), s += r[t]) : (e.write(i[t], s), s += r[t]);
            return e
        }, t.exports = r
    }, function (t, e, n) {
        "use strict";

        function r(t) {
            var e = o.allocUnsafe(2);
            return e.writeUInt8(t >> 8, 0, !0), e.writeUInt8(255 & t, 1, !0), e
        }

        function i() {
            for (var t = 0; t < s; t++) a[t] = r(t)
        }

        var o = n(4).Buffer, s = 65536, a = {};
        t.exports = {cache: a, generateCache: i, generateNumber: r}
    }, function (t, e, n) {
        "use strict";

        function r(t, e, n) {
            var r = this;
            this._callback = t, this._args = n, this._interval = setInterval(t, e, this._args), this.reschedule = function (t) {
                t || (t = r._interval), r._interval && clearInterval(r._interval), r._interval = setInterval(r._callback, t, r._args)
            }, this.clear = function () {
                r._interval && (clearInterval(r._interval), r._interval = void 0)
            }, this.destroy = function () {
                r._interval && clearInterval(r._interval), r._callback = void 0, r._interval = void 0, r._args = void 0
            }
        }

        function i() {
            if ("function" != typeof arguments[0]) throw new Error("callback needed");
            if ("number" != typeof arguments[1]) throw new Error("interval needed");
            var t;
            if (arguments.length > 0) {
                t = new Array(arguments.length - 2);
                for (var e = 0; e < t.length; e++) t[e] = arguments[e + 2]
            }
            return new r(arguments[0], arguments[1], t)
        }

        t.exports = i
    }, function (t, e, n) {
        "use strict";

        function r(t) {
            for (var e = t.split("/"), n = 0; n < e.length; n++) if ("+" !== e[n]) {
                if ("#" === e[n]) return n === e.length - 1;
                if (-1 !== e[n].indexOf("+") || -1 !== e[n].indexOf("#")) return !1
            }
            return !0
        }

        function i(t) {
            if (0 === t.length) return "empty_topic_list";
            for (var e = 0; e < t.length; e++) if (!r(t[e])) return t[e];
            return null
        }

        t.exports = {validateTopics: i}
    }, function (t, e, n) {
        (function (t, r) {
            var i;
            !function (o) {
                function s(t) {
                    throw new RangeError(P[t])
                }

                function a(t, e) {
                    for (var n = t.length, r = []; n--;) r[n] = e(t[n]);
                    return r
                }

                function u(t, e) {
                    var n = t.split("@"), r = "";
                    return n.length > 1 && (r = n[0] + "@", t = n[1]), t = t.replace(C, "."), r + a(t.split("."), e).join(".")
                }

                function c(t) {
                    for (var e, n, r = [], i = 0, o = t.length; i < o;) e = t.charCodeAt(i++), e >= 55296 && e <= 56319 && i < o ? (n = t.charCodeAt(i++), 56320 == (64512 & n) ? r.push(((1023 & e) << 10) + (1023 & n) + 65536) : (r.push(e), i--)) : r.push(e);
                    return r
                }

                function l(t) {
                    return a(t, function (t) {
                        var e = "";
                        return t > 65535 && (t -= 65536, e += L(t >>> 10 & 1023 | 55296), t = 56320 | 1023 & t), e += L(t)
                    }).join("")
                }

                function f(t) {
                    return t - 48 < 10 ? t - 22 : t - 65 < 26 ? t - 65 : t - 97 < 26 ? t - 97 : _
                }

                function h(t, e) {
                    return t + 22 + 75 * (t < 26) - ((0 != e) << 5)
                }

                function p(t, e, n) {
                    var r = 0;
                    for (t = n ? j(t / x) : t >> 1, t += j(t / e); t > M * E >> 1; r += _) t = j(t / M);
                    return j(r + (M + 1) * t / (t + k))
                }

                function d(t) {
                    var e, n, r, i, o, a, u, c, h, d, g = [], b = t.length, m = 0, y = T, v = I;
                    for (n = t.lastIndexOf(A), n < 0 && (n = 0), r = 0; r < n; ++r) t.charCodeAt(r) >= 128 && s("not-basic"), g.push(t.charCodeAt(r));
                    for (i = n > 0 ? n + 1 : 0; i < b;) {
                        for (o = m, a = 1, u = _; i >= b && s("invalid-input"), c = f(t.charCodeAt(i++)), (c >= _ || c > j((w - m) / a)) && s("overflow"), m += c * a, h = u <= v ? S : u >= v + E ? E : u - v, !(c < h); u += _) d = _ - h, a > j(w / d) && s("overflow"), a *= d;
                        e = g.length + 1, v = p(m - o, e, 0 == o), j(m / e) > w - y && s("overflow"), y += j(m / e), m %= e, g.splice(m++, 0, y)
                    }
                    return l(g)
                }

                function g(t) {
                    var e, n, r, i, o, a, u, l, f, d, g, b, m, y, v, k = [];
                    for (t = c(t), b = t.length, e = T, n = 0, o = I, a = 0; a < b; ++a) (g = t[a]) < 128 && k.push(L(g));
                    for (r = i = k.length, i && k.push(A); r < b;) {
                        for (u = w, a = 0; a < b; ++a) (g = t[a]) >= e && g < u && (u = g);
                        for (m = r + 1, u - e > j((w - n) / m) && s("overflow"), n += (u - e) * m, e = u, a = 0; a < b; ++a) if (g = t[a], g < e && ++n > w && s("overflow"), g == e) {
                            for (l = n, f = _; d = f <= o ? S : f >= o + E ? E : f - o, !(l < d); f += _) v = l - d, y = _ - d, k.push(L(h(d + v % y, 0))), l = j(v / y);
                            k.push(L(h(l, 0))), o = p(n, m, r == i), n = 0, ++r
                        }
                        ++n, ++e
                    }
                    return k.join("")
                }

                function b(t) {
                    return u(t, function (t) {
                        return O.test(t) ? d(t.slice(4).toLowerCase()) : t
                    })
                }

                function m(t) {
                    return u(t, function (t) {
                        return R.test(t) ? "xn--" + g(t) : t
                    })
                }

                var y = ("object" == typeof e && e && e.nodeType, "object" == typeof t && t && t.nodeType, "object" == typeof r && r);
                var v, w = 2147483647, _ = 36, S = 1, E = 26, k = 38, x = 700, I = 72, T = 128, A = "-", O = /^xn--/,
                    R = /[^\x20-\x7E]/, C = /[\x2E\u3002\uFF0E\uFF61]/g, P = {
                        overflow: "Overflow: input needs wider integers to process",
                        "not-basic": "Illegal input >= 0x80 (not a basic code point)",
                        "invalid-input": "Invalid input"
                    }, M = _ - S, j = Math.floor, L = String.fromCharCode;
                v = {
                    version: "1.4.1",
                    ucs2: {decode: c, encode: l},
                    decode: d,
                    encode: g,
                    toASCII: m,
                    toUnicode: b
                }, void 0 !== (i = function () {
                    return v
                }.call(e, n, e, t)) && (t.exports = i)
            }()
        }).call(e, n(33)(t), n(2))
    }, function (t, e, n) {
        "use strict";
        t.exports = {
            isString: function (t) {
                return "string" == typeof t
            }, isObject: function (t) {
                return "object" == typeof t && null !== t
            }, isNull: function (t) {
                return null === t
            }, isNullOrUndefined: function (t) {
                return null == t
            }
        }
    }, function (t, e, n) {
        "use strict";
        e.decode = e.parse = n(105), e.encode = e.stringify = n(106)
    }, function (t, e, n) {
        "use strict";

        function r(t, e) {
            return Object.prototype.hasOwnProperty.call(t, e)
        }

        t.exports = function (t, e, n, o) {
            e = e || "&", n = n || "=";
            var s = {};
            if ("string" != typeof t || 0 === t.length) return s;
            var a = /\+/g;
            t = t.split(e);
            var u = 1e3;
            o && "number" == typeof o.maxKeys && (u = o.maxKeys);
            var c = t.length;
            u > 0 && c > u && (c = u);
            for (var l = 0; l < c; ++l) {
                var f, h, p, d, g = t[l].replace(a, "%20"), b = g.indexOf(n);
                b >= 0 ? (f = g.substr(0, b), h = g.substr(b + 1)) : (f = g, h = ""), p = decodeURIComponent(f), d = decodeURIComponent(h), r(s, p) ? i(s[p]) ? s[p].push(d) : s[p] = [s[p], d] : s[p] = d
            }
            return s
        };
        var i = Array.isArray || function (t) {
            return "[object Array]" === Object.prototype.toString.call(t)
        }
    }, function (t, e, n) {
        "use strict";

        function r(t, e) {
            if (t.map) return t.map(e);
            for (var n = [], r = 0; r < t.length; r++) n.push(e(t[r], r));
            return n
        }

        var i = function (t) {
            switch (typeof t) {
                case"string":
                    return t;
                case"boolean":
                    return t ? "true" : "false";
                case"number":
                    return isFinite(t) ? t : "";
                default:
                    return ""
            }
        };
        t.exports = function (t, e, n, a) {
            return e = e || "&", n = n || "=", null === t && (t = void 0), "object" == typeof t ? r(s(t), function (s) {
                var a = encodeURIComponent(i(s)) + n;
                return o(t[s]) ? r(t[s], function (t) {
                    return a + encodeURIComponent(i(t))
                }).join(e) : a + encodeURIComponent(i(t[s]))
            }).join(e) : a ? encodeURIComponent(i(a)) + n + encodeURIComponent(i(t)) : ""
        };
        var o = Array.isArray || function (t) {
            return "[object Array]" === Object.prototype.toString.call(t)
        }, s = Object.keys || function (t) {
            var e = [];
            for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && e.push(n);
            return e
        }
    }, function (t, e) {
    }, function (t, e) {
    }, function (t, e, n) {
        (function (e, r) {
            var i = n(9), o = n(30), s = n(3), a = n(110), u = new e([0]), c = function (t, e) {
                t._corked ? t.once("uncork", e) : e()
            }, l = function (t, e) {
                return function (n) {
                    n ? t.destroy("premature close" === n.message ? null : n) : e && !t._ended && t.end()
                }
            }, f = function (t, e) {
                return t ? t._writableState && t._writableState.finished ? e() : t._writableState ? t.end(e) : (t.end(), void e()) : e()
            }, h = function (t) {
                return new i.Readable({objectMode: !0, highWaterMark: 16}).wrap(t)
            }, p = function (t, e, n) {
                if (!(this instanceof p)) return new p(t, e, n);
                i.Duplex.call(this, n), this._writable = null, this._readable = null, this._readable2 = null, this._forwardDestroy = !n || !1 !== n.destroy, this._forwardEnd = !n || !1 !== n.end, this._corked = 1, this._ondrain = null, this._drained = !1, this._forwarding = !1, this._unwrite = null, this._unread = null, this._ended = !1, this.destroyed = !1, t && this.setWritable(t), e && this.setReadable(e)
            };
            s(p, i.Duplex), p.obj = function (t, e, n) {
                return n || (n = {}), n.objectMode = !0, n.highWaterMark = 16, new p(t, e, n)
            }, p.prototype.cork = function () {
                1 == ++this._corked && this.emit("cork")
            }, p.prototype.uncork = function () {
                this._corked && 0 == --this._corked && this.emit("uncork")
            }, p.prototype.setWritable = function (t) {
                if (this._unwrite && this._unwrite(), this.destroyed) return void(t && t.destroy && t.destroy());
                if (null === t || !1 === t) return void this.end();
                var e = this, n = o(t, {writable: !0, readable: !1}, l(this, this._forwardEnd)), i = function () {
                    var t = e._ondrain;
                    e._ondrain = null, t && t()
                }, s = function () {
                    e._writable.removeListener("drain", i), n()
                };
                this._unwrite && r.nextTick(i), this._writable = t, this._writable.on("drain", i), this._unwrite = s, this.uncork()
            }, p.prototype.setReadable = function (t) {
                if (this._unread && this._unread(), this.destroyed) return void(t && t.destroy && t.destroy());
                if (null === t || !1 === t) return this.push(null), void this.resume();
                var e = this, n = o(t, {writable: !1, readable: !0}, l(this)), r = function () {
                    e._forward()
                }, i = function () {
                    e.push(null)
                }, s = function () {
                    e._readable2.removeListener("readable", r), e._readable2.removeListener("end", i), n()
                };
                this._drained = !0, this._readable = t, this._readable2 = t._readableState ? t : h(t), this._readable2.on("readable", r), this._readable2.on("end", i), this._unread = s, this._forward()
            }, p.prototype._read = function () {
                this._drained = !0, this._forward()
            }, p.prototype._forward = function () {
                if (!this._forwarding && this._readable2 && this._drained) {
                    this._forwarding = !0;
                    for (var t; this._drained && null !== (t = a(this._readable2));) this.destroyed || (this._drained = this.push(t));
                    this._forwarding = !1
                }
            }, p.prototype.destroy = function (t) {
                if (!this.destroyed) {
                    this.destroyed = !0;
                    var e = this;
                    r.nextTick(function () {
                        e._destroy(t)
                    })
                }
            }, p.prototype._destroy = function (t) {
                if (t) {
                    var e = this._ondrain;
                    this._ondrain = null, e ? e(t) : this.emit("error", t)
                }
                this._forwardDestroy && (this._readable && this._readable.destroy && this._readable.destroy(), this._writable && this._writable.destroy && this._writable.destroy()), this.emit("close")
            }, p.prototype._write = function (t, e, n) {
                return this.destroyed ? n() : this._corked ? c(this, this._write.bind(this, t, e, n)) : t === u ? this._finish(n) : this._writable ? void(!1 === this._writable.write(t) ? this._ondrain = n : n()) : n()
            }, p.prototype._finish = function (t) {
                var e = this;
                this.emit("preend"), c(this, function () {
                    f(e._forwardEnd && e._writable, function () {
                        !1 === e._writableState.prefinished && (e._writableState.prefinished = !0), e.emit("prefinish"), c(e, t)
                    })
                })
            }, p.prototype.end = function (t, e, n) {
                return "function" == typeof t ? this.end(null, null, t) : "function" == typeof e ? this.end(t, null, e) : (this._ended = !0, t && this.write(t), this._writableState.ending || this.write(u), i.Writable.prototype.end.call(this, n))
            }, t.exports = p
        }).call(e, n(10).Buffer, n(0))
    }, function (t, e) {
        function n(t) {
            var e = t._readableState;
            return e ? e.objectMode ? t.read() : t.read(r(e)) : null
        }

        function r(t) {
            return t.buffer.length ? t.buffer.head ? t.buffer.head.data.length : t.buffer[0].length : t.length
        }

        t.exports = n
    }, function (t, e) {
        var n = null;
        "undefined" != typeof WebSocket ? n = WebSocket : "undefined" != typeof MozWebSocket ? n = MozWebSocket : "undefined" != typeof window && (n = window.WebSocket || window.MozWebSocket), t.exports = n
    }, function (t, e, n) {
        "use strict";
        var r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
            return typeof t
        } : function (t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
        }, i = n(113), o = n(38), s = "69$hsYgrj_K1xhm-yHC45@GcgN=mPMX+NANNmu=4llIKL@WPZ4", a = n(114), u = {
            incLaunchCount: function () {
                var t = u.encryptedStorage().get(o.STORAGE_KEY);
                t.launchCount = t.launchCount || 0, t.launchCount++, u.encryptedStorage().set(o.STORAGE_KEY, t)
            }, getStorageKey: function (t) {
                return u.encryptedStorage().get(o.STORAGE_KEY)[t]
            }, removeStorageKey: function (t) {
                var e = u.encryptedStorage().get(o.STORAGE_KEY);
                delete e[t], u.encryptedStorage().set(o.STORAGE_KEY, e)
            }, updateStorage: function (t, e) {
                var n = u.encryptedStorage().get(o.STORAGE_KEY);
                n[t] = e, u.encryptedStorage().set(o.STORAGE_KEY, n)
            }, resetStorage: function () {
                var t = u.encryptedStorage().get(o.STORAGE_KEY), e = t.launchCount, n = t.launchTime;
                u.encryptedStorage().set(o.STORAGE_KEY, {launchCount: e, launchTime: n})
            }, isValidUserId: function (t) {
                return !!t && (!(t.length <= 3 || t.length > 64) && !/\s|\/|\\|\+|\*|#/gi.test(t))
            }, encryptedStorage: function () {
                var t = this;
                return {
                    get: function (e) {
                        return i.get(e) ? JSON.parse(t.decrypt(i.get(e))) : {}
                    }, set: function (e, n) {
                        return n = "object" === (void 0 === n ? "undefined" : r(n)) ? JSON.stringify(n) : n, i.set(e, t.encrypt(n)), t
                    }
                }
            }, decrypt: function (t) {
                return String(t).split("").map(function (t, e) {
                    return String.fromCharCode(t.charCodeAt(0) - s.charCodeAt(e % s.length))
                }).join("")
            }, encrypt: function (t) {
                return String(t).split("").map(function (t, e) {
                    return String.fromCharCode(t.charCodeAt(0) + s.charCodeAt(e % s.length))
                }).join("")
            }, getAppDomain: function (t, e) {
                return e ? o.HOST_DEV : -1 === o.EXCLUSIVE_APPIDS.indexOf(t) ? t.replace("-demo", "") + "." + o.HOST : o.HOST
            }, defaultDevice: function (t) {
                var e = t.appId, r = t.userId, i = t.token, s = t.realtime;
                i = i || "disabled";
                var u = navigator.connection || navigator.mozConnection || navigator.webkitConnection || {type: null};
                return i = Object.keys(i).length ? JSON.stringify(Object.assign(i, {expirationTime: 0})) : "notSupported" === i ? "---" : "disabled", {
                    realtime: s,
                    launchCount: +this.encryptedStorage().get(o.STORAGE_KEY).launchCount,
                    launchTime: Date.now(),
                    appId: e,
                    userId: r,
                    deviceToken: i,
                    deviceType: "web",
                    deviceModel: a.name ? a.name.toLowerCase() : "NodeJS",
                    osVersion: a.os.version,
                    deviceManufacture: a.os.family,
                    browserVersion: a.version,
                    appVersion: n(115).version,
                    subscriptions: o.DEFAULT_CHANNELS,
                    timeZone: Intl.DateTimeFormat().resolvedOptions().timeZone,
                    connection: u.type
                }
            }, toTopicName: function (t, e) {
                var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "",
                    r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "user", i = void 0, o = void 0;
                switch (r) {
                    case"user":
                        var s = n.split("/");
                        "public" === s[0] ? (i = s[0], o = s[1]) : (i = e, o = s[0]);
                        break;
                    case"publish":
                        i = "*" === e ? "public" : e, o = n;
                        break;
                    case"event":
                    case"track":
                        i = n, o = e || "+";
                        break;
                    default:
                        throw new Error("Invalid topic type.")
                }
                return ["app", t, r, i, o].join("/")
            }, fromChabokChannel: function (t) {
                var e = t.split("/"), n = void 0;
                switch (e.length) {
                    case 1:
                        n = "public/" + e[0];
                        break;
                    case 2:
                        if ("public" !== e[0] && "private" !== e[0]) throw new Error("Invalid channel name format, please read documentations.");
                        n = "public" === e[0] ? "public/" + e[1] : e[1];
                        break;
                    default:
                        throw new Error("Invalid channel name format, please read documentations.")
                }
                return n
            }, toChabokMessage: function (t, e) {
                var n = t.split("/"), r = n[3] + "/" + n[4];
                try {
                    var i = JSON.parse(e);
                    return i.channel = r, i
                } catch (t) {
                    return e
                }
            }, toEventMessage: function (t, e) {
                var n = t.split("/"), r = n[1], i = n[3], o = n[4],
                    s = {appId: r, eventName: i, deviceId: o, receivedAt: Date.now()};
                try {
                    return s.data = JSON.parse(e), s.createdAt = s.data.createdAt, s.id = s.data.id, s
                } catch (t) {
                    return e
                }
            }
        };
        t.exports = u
    }, function (t, e) {
        !function (e, n) {
            var r = {
                version: "2.5.2", areas: {}, apis: {}, inherit: function (t, e) {
                    for (var n in t) e.hasOwnProperty(n) || (e[n] = t[n]);
                    return e
                }, stringify: function (t) {
                    return void 0 === t || "function" == typeof t ? t + "" : JSON.stringify(t)
                }, parse: function (t) {
                    try {
                        return JSON.parse(t)
                    } catch (e) {
                        return t
                    }
                }, fn: function (t, e) {
                    r.storeAPI[t] = e;
                    for (var n in r.apis) r.apis[n][t] = e
                }, get: function (t, e) {
                    return t.getItem(e)
                }, set: function (t, e, n) {
                    t.setItem(e, n)
                }, remove: function (t, e) {
                    t.removeItem(e)
                }, key: function (t, e) {
                    return t.key(e)
                }, length: function (t) {
                    return t.length
                }, clear: function (t) {
                    t.clear()
                }, Store: function (t, e, n) {
                    var i = r.inherit(r.storeAPI, function (t, e, n) {
                        return 0 === arguments.length ? i.getAll() : "function" == typeof e ? i.transact(t, e, n) : void 0 !== e ? i.set(t, e, n) : "string" == typeof t || "number" == typeof t ? i.get(t) : t ? i.setAll(t, e) : i.clear()
                    });
                    i._id = t;
                    try {
                        e.setItem("_safariPrivate_", "sucks"), i._area = e, e.removeItem("_safariPrivate_")
                    } catch (t) {
                    }
                    return i._area || (i._area = r.inherit(r.storageAPI, {
                        items: {},
                        name: "fake"
                    })), i._ns = n || "", r.areas[t] || (r.areas[t] = i._area), r.apis[i._ns + i._id] || (r.apis[i._ns + i._id] = i), i
                }, storeAPI: {
                    area: function (t, e) {
                        var n = this[t];
                        return n && n.area || (n = r.Store(t, e, this._ns), this[t] || (this[t] = n)), n
                    }, namespace: function (t, e) {
                        if (!t) return this._ns ? this._ns.substring(0, this._ns.length - 1) : "";
                        var n = t, i = this[n];
                        return i && i.namespace || (i = r.Store(this._id, this._area, this._ns + n + "."), this[n] || (this[n] = i), e || i.area("session", r.areas.session)), i
                    }, isFake: function () {
                        return "fake" === this._area.name
                    }, toString: function () {
                        return "store" + (this._ns ? "." + this.namespace() : "") + "[" + this._id + "]"
                    }, has: function (t) {
                        return this._area.has ? this._area.has(this._in(t)) : !!(this._in(t) in this._area)
                    }, size: function () {
                        return this.keys().length
                    }, each: function (t, e) {
                        for (var n = 0, i = r.length(this._area); n < i; n++) {
                            var o = this._out(r.key(this._area, n));
                            if (void 0 !== o && !1 === t.call(this, o, e || this.get(o))) break;
                            i > r.length(this._area) && (i--, n--)
                        }
                        return e || this
                    }, keys: function () {
                        return this.each(function (t, e) {
                            e.push(t)
                        }, [])
                    }, get: function (t, e) {
                        var n = r.get(this._area, this._in(t));
                        return null !== n ? r.parse(n) : e || n
                    }, getAll: function () {
                        return this.each(function (t, e) {
                            e[t] = this.get(t)
                        }, {})
                    }, transact: function (t, e, n) {
                        var r = this.get(t, n), i = e(r);
                        return this.set(t, void 0 === i ? r : i), this
                    }, set: function (t, e, n) {
                        var i = this.get(t);
                        return null != i && !1 === n ? e : r.set(this._area, this._in(t), r.stringify(e), n) || i
                    }, setAll: function (t, e) {
                        var n, r;
                        for (var i in t) r = t[i], this.set(i, r, e) !== r && (n = !0);
                        return n
                    }, remove: function (t) {
                        var e = this.get(t);
                        return r.remove(this._area, this._in(t)), e
                    }, clear: function () {
                        return this._ns ? this.each(function (t) {
                            r.remove(this._area, this._in(t))
                        }, 1) : r.clear(this._area), this
                    }, clearAll: function () {
                        var t = this._area;
                        for (var e in r.areas) r.areas.hasOwnProperty(e) && (this._area = r.areas[e], this.clear());
                        return this._area = t, this
                    }, _in: function (t) {
                        return "string" != typeof t && (t = r.stringify(t)), this._ns ? this._ns + t : t
                    }, _out: function (t) {
                        return this._ns ? t && 0 === t.indexOf(this._ns) ? t.substring(this._ns.length) : void 0 : t
                    }
                }, storageAPI: {
                    length: 0, has: function (t) {
                        return this.items.hasOwnProperty(t)
                    }, key: function (t) {
                        var e = 0;
                        for (var n in this.items) if (this.has(n) && t === e++) return n
                    }, setItem: function (t, e) {
                        this.has(t) || this.length++, this.items[t] = e
                    }, removeItem: function (t) {
                        this.has(t) && (delete this.items[t], this.length--)
                    }, getItem: function (t) {
                        return this.has(t) ? this.items[t] : null
                    }, clear: function () {
                        for (var t in this.items) this.removeItem(t)
                    }, toString: function () {
                        return this.length + " items in " + this.name + "Storage"
                    }
                }
            }, i = r.Store("local", function () {
                try {
                    return localStorage
                } catch (t) {
                }
            }());
            i.local = i, i._ = r, i.area("session", function () {
                try {
                    return sessionStorage
                } catch (t) {
                }
            }()), "function" == typeof n && void 0 !== n.amd ? n("store2", [], function () {
                return i
            }) : void 0 !== t && t.exports ? t.exports = i : (e.store && (r.conflict = e.store), e.store = i)
        }(this, this.define)
    }, function (t, e, n) {
        (function (t, r) {
            var i;
            (function () {
                "use strict";

                function o(t) {
                    return t = String(t), t.charAt(0).toUpperCase() + t.slice(1)
                }

                function s(t, e, n) {
                    var r = {
                        "10.0": "10",
                        6.4: "10 Technical Preview",
                        6.3: "8.1",
                        6.2: "8",
                        6.1: "Server 2008 R2 / 7",
                        "6.0": "Server 2008 / Vista",
                        5.2: "Server 2003 / XP 64-bit",
                        5.1: "XP",
                        5.01: "2000 SP1",
                        "5.0": "2000",
                        "4.0": "NT",
                        "4.90": "ME"
                    };
                    return e && n && /^Win/i.test(t) && !/^Windows Phone /i.test(t) && (r = r[/[\d.]+$/.exec(t)]) && (t = "Windows " + r), t = String(t), e && n && (t = t.replace(RegExp(e, "i"), n)), t = u(t.replace(/ ce$/i, " CE").replace(/\bhpw/i, "web").replace(/\bMacintosh\b/, "Mac OS").replace(/_PowerPC\b/i, " OS").replace(/\b(OS X) [^ \d]+/i, "$1").replace(/\bMac (OS X)\b/, "$1").replace(/\/(\d)/, " $1").replace(/_/g, ".").replace(/(?: BePC|[ .]*fc[ \d.]+)$/i, "").replace(/\bx86\.64\b/gi, "x86_64").replace(/\b(Windows Phone) OS\b/, "$1").replace(/\b(Chrome OS \w+) [\d.]+\b/, "$1").split(" on ")[0])
                }

                function a(t, e) {
                    var n = -1, r = t ? t.length : 0;
                    if ("number" == typeof r && r > -1 && r <= S) for (; ++n < r;) e(t[n], n, t); else c(t, e)
                }

                function u(t) {
                    return t = d(t), /^(?:webOS|i(?:OS|P))/.test(t) ? t : o(t)
                }

                function c(t, e) {
                    for (var n in t) I.call(t, n) && e(t[n], n, t)
                }

                function l(t) {
                    return null == t ? o(t) : T.call(t).slice(8, -1)
                }

                function f(t, e) {
                    var n = null != t ? typeof t[e] : "number";
                    return !(/^(?:boolean|number|string|undefined)$/.test(n) || "object" == n && !t[e])
                }

                function h(t) {
                    return String(t).replace(/([ -])(?!$)/g, "$1?")
                }

                function p(t, e) {
                    var n = null;
                    return a(t, function (r, i) {
                        n = e(n, r, i, t)
                    }), n
                }

                function d(t) {
                    return String(t).replace(/^ +| +$/g, "")
                }

                function g(t) {
                    function e(e) {
                        return p(e, function (e, n) {
                            var r = n.pattern || h(n);
                            return !e && (e = RegExp("\\b" + r + " *\\d+[.\\w_]*", "i").exec(t) || RegExp("\\b" + r + " *\\w+-[\\w]*", "i").exec(t) || RegExp("\\b" + r + "(?:; *(?:[a-z]+[_-])?[a-z]+\\d+|[^ ();-]*)", "i").exec(t)) && ((e = String(n.label && !RegExp(r, "i").test(n.label) ? n.label : e).split("/"))[1] && !/[\d.]+/.test(e[0]) && (e[0] += " " + e[1]), n = n.label || n, e = u(e[0].replace(RegExp(r, "i"), n).replace(RegExp("; *(?:" + n + "[_-])?", "i"), " ").replace(RegExp("(" + n + ")[-_.]?(\\w)", "i"), "$1 $2"))), e
                        })
                    }

                    function n() {
                        return this.description || ""
                    }

                    var r = m, i = t && "object" == typeof t && "String" != l(t);
                    i && (r = t, t = null);
                    var o = r.navigator || {}, a = o.userAgent || "";
                    t || (t = a);
                    var b, v, w = i || k == y,
                        _ = i ? !!o.likeChrome : /\bChrome\b/.test(t) && !/internal|\n/i.test(T.toString()),
                        S = i ? "Object" : "ScriptBridgingProxyObject", x = i ? "Object" : "Environment",
                        I = i && r.java ? "JavaPackage" : l(r.java), A = i ? "Object" : "RuntimeObject",
                        O = /\bJava/.test(I) && r.java, R = O && l(r.environment) == x, C = O ? "a" : "α",
                        P = O ? "b" : "β", M = r.document || {}, j = r.operamini || r.opera,
                        L = E.test(L = i && j ? j["[[Class]]"] : l(j)) ? L : j = null, N = t, U = [], B = null,
                        D = t == a, q = D && j && "function" == typeof j.version && j.version(), F = function (e) {
                            return p(e, function (e, n) {
                                return e || RegExp("\\b" + (n.pattern || h(n)) + "\\b", "i").exec(t) && (n.label || n)
                            })
                        }([{label: "EdgeHTML", pattern: "Edge"}, "Trident", {
                            label: "WebKit",
                            pattern: "AppleWebKit"
                        }, "iCab", "Presto", "NetFront", "Tasman", "KHTML", "Gecko"]), W = function (e) {
                            return p(e, function (e, n) {
                                return e || RegExp("\\b" + (n.pattern || h(n)) + "\\b", "i").exec(t) && (n.label || n)
                            })
                        }(["Adobe AIR", "Arora", "Avant Browser", "Breach", "Camino", "Electron", "Epiphany", "Fennec", "Flock", "Galeon", "GreenBrowser", "iCab", "Iceweasel", "K-Meleon", "Konqueror", "Lunascape", "Maxthon", {
                            label: "Microsoft Edge",
                            pattern: "Edge"
                        }, "Midori", "Nook Browser", "PaleMoon", "PhantomJS", "Raven", "Rekonq", "RockMelt", {
                            label: "Samsung Internet",
                            pattern: "SamsungBrowser"
                        }, "SeaMonkey", {
                            label: "Silk",
                            pattern: "(?:Cloud9|Silk-Accelerated)"
                        }, "Sleipnir", "SlimBrowser", {
                            label: "SRWare Iron",
                            pattern: "Iron"
                        }, "Sunrise", "Swiftfox", "Waterfox", "WebPositive", "Opera Mini", {
                            label: "Opera Mini",
                            pattern: "OPiOS"
                        }, "Opera", {label: "Opera", pattern: "OPR"}, "Chrome", {
                            label: "Chrome Mobile",
                            pattern: "(?:CriOS|CrMo)"
                        }, {label: "Firefox", pattern: "(?:Firefox|Minefield)"}, {
                            label: "Firefox for iOS",
                            pattern: "FxiOS"
                        }, {label: "IE", pattern: "IEMobile"}, {label: "IE", pattern: "MSIE"}, "Safari"]),
                        K = e([{label: "BlackBerry", pattern: "BB10"}, "BlackBerry", {
                            label: "Galaxy S",
                            pattern: "GT-I9000"
                        }, {label: "Galaxy S2", pattern: "GT-I9100"}, {
                            label: "Galaxy S3",
                            pattern: "GT-I9300"
                        }, {label: "Galaxy S4", pattern: "GT-I9500"}, {
                            label: "Galaxy S5",
                            pattern: "SM-G900"
                        }, {label: "Galaxy S6", pattern: "SM-G920"}, {
                            label: "Galaxy S6 Edge",
                            pattern: "SM-G925"
                        }, {label: "Galaxy S7", pattern: "SM-G930"}, {
                            label: "Galaxy S7 Edge",
                            pattern: "SM-G935"
                        }, "Google TV", "Lumia", "iPad", "iPod", "iPhone", "Kindle", {
                            label: "Kindle Fire",
                            pattern: "(?:Cloud9|Silk-Accelerated)"
                        }, "Nexus", "Nook", "PlayBook", "PlayStation Vita", "PlayStation", "TouchPad", "Transformer", {
                            label: "Wii U",
                            pattern: "WiiU"
                        }, "Wii", "Xbox One", {label: "Xbox 360", pattern: "Xbox"}, "Xoom"]), H = function (e) {
                            return p(e, function (e, n, r) {
                                return e || (n[K] || n[/^[a-z]+(?: +[a-z]+\b)*/i.exec(K)] || RegExp("\\b" + h(r) + "(?:\\b|\\w*\\d)", "i").exec(t)) && r
                            })
                        }({
                            Apple: {iPad: 1, iPhone: 1, iPod: 1},
                            Archos: {},
                            Amazon: {Kindle: 1, "Kindle Fire": 1},
                            Asus: {Transformer: 1},
                            "Barnes & Noble": {Nook: 1},
                            BlackBerry: {PlayBook: 1},
                            Google: {"Google TV": 1, Nexus: 1},
                            HP: {TouchPad: 1},
                            HTC: {},
                            LG: {},
                            Microsoft: {Xbox: 1, "Xbox One": 1},
                            Motorola: {Xoom: 1},
                            Nintendo: {"Wii U": 1, Wii: 1},
                            Nokia: {Lumia: 1},
                            Samsung: {"Galaxy S": 1, "Galaxy S2": 1, "Galaxy S3": 1, "Galaxy S4": 1},
                            Sony: {PlayStation: 1, "PlayStation Vita": 1}
                        }), z = function (e) {
                            return p(e, function (e, n) {
                                var r = n.pattern || h(n);
                                return !e && (e = RegExp("\\b" + r + "(?:/[\\d.]+|[ \\w.]*)", "i").exec(t)) && (e = s(e, r, n.label || n)), e
                            })
                        }(["Windows Phone", "Android", "CentOS", {
                            label: "Chrome OS",
                            pattern: "CrOS"
                        }, "Debian", "Fedora", "FreeBSD", "Gentoo", "Haiku", "Kubuntu", "Linux Mint", "OpenBSD", "Red Hat", "SuSE", "Ubuntu", "Xubuntu", "Cygwin", "Symbian OS", "hpwOS", "webOS ", "webOS", "Tablet OS", "Tizen", "Linux", "Mac OS X", "Macintosh", "Mac", "Windows 98;", "Windows "]);
                    if (F && (F = [F]), H && !K && (K = e([H])), (b = /\bGoogle TV\b/.exec(K)) && (K = b[0]), /\bSimulator\b/i.test(t) && (K = (K ? K + " " : "") + "Simulator"), "Opera Mini" == W && /\bOPiOS\b/.test(t) && U.push("running in Turbo/Uncompressed mode"), "IE" == W && /\blike iPhone OS\b/.test(t) ? (b = g(t.replace(/like iPhone OS/, "")), H = b.manufacturer, K = b.product) : /^iP/.test(K) ? (W || (W = "Safari"), z = "iOS" + ((b = / OS ([\d_]+)/i.exec(t)) ? " " + b[1].replace(/_/g, ".") : "")) : "Konqueror" != W || /buntu/i.test(z) ? H && "Google" != H && (/Chrome/.test(W) && !/\bMobile Safari\b/i.test(t) || /\bVita\b/.test(K)) || /\bAndroid\b/.test(z) && /^Chrome/.test(W) && /\bVersion\//i.test(t) ? (W = "Android Browser", z = /\bAndroid\b/.test(z) ? z : "Android") : "Silk" == W ? (/\bMobi/i.test(t) || (z = "Android", U.unshift("desktop mode")), /Accelerated *= *true/i.test(t) && U.unshift("accelerated")) : "PaleMoon" == W && (b = /\bFirefox\/([\d.]+)\b/.exec(t)) ? U.push("identifying as Firefox " + b[1]) : "Firefox" == W && (b = /\b(Mobile|Tablet|TV)\b/i.exec(t)) ? (z || (z = "Firefox OS"), K || (K = b[1])) : !W || (b = !/\bMinefield\b/i.test(t) && /\b(?:Firefox|Safari)\b/.exec(W)) ? (W && !K && /[\/,]|^[^(]+?\)/.test(t.slice(t.indexOf(b + "/") + 8)) && (W = null), (b = K || H || z) && (K || H || /\b(?:Android|Symbian OS|Tablet OS|webOS)\b/.test(z)) && (W = /[a-z]+(?: Hat)?/i.exec(/\bAndroid\b/.test(z) ? z : b) + " Browser")) : "Electron" == W && (b = (/\bChrome\/([\d.]+)\b/.exec(t) || 0)[1]) && U.push("Chromium " + b) : z = "Kubuntu", q || (q = function (e) {
                        return p(e, function (e, n) {
                            return e || (RegExp(n + "(?:-[\\d.]+/|(?: for [\\w-]+)?[ /-])([\\d.]+[^ ();/_-]*)", "i").exec(t) || 0)[1] || null
                        })
                    }(["(?:Cloud9|CriOS|CrMo|Edge|FxiOS|IEMobile|Iron|Opera ?Mini|OPiOS|OPR|Raven|SamsungBrowser|Silk(?!/[\\d.]+$))", "Version", h(W), "(?:Firefox|Minefield|NetFront)"])), (b = "iCab" == F && parseFloat(q) > 3 && "WebKit" || /\bOpera\b/.test(W) && (/\bOPR\b/.test(t) ? "Blink" : "Presto") || /\b(?:Midori|Nook|Safari)\b/i.test(t) && !/^(?:Trident|EdgeHTML)$/.test(F) && "WebKit" || !F && /\bMSIE\b/i.test(t) && ("Mac OS" == z ? "Tasman" : "Trident") || "WebKit" == F && /\bPlayStation\b(?! Vita\b)/i.test(W) && "NetFront") && (F = [b]), "IE" == W && (b = (/; *(?:XBLWP|ZuneWP)(\d+)/i.exec(t) || 0)[1]) ? (W += " Mobile", z = "Windows Phone " + (/\+$/.test(b) ? b : b + ".x"), U.unshift("desktop mode")) : /\bWPDesktop\b/i.test(t) ? (W = "IE Mobile", z = "Windows Phone 8.x", U.unshift("desktop mode"), q || (q = (/\brv:([\d.]+)/.exec(t) || 0)[1])) : "IE" != W && "Trident" == F && (b = /\brv:([\d.]+)/.exec(t)) && (W && U.push("identifying as " + W + (q ? " " + q : "")), W = "IE", q = b[1]), D) {
                        if (f(r, "global")) if (O && (b = O.lang.System, N = b.getProperty("os.arch"), z = z || b.getProperty("os.name") + " " + b.getProperty("os.version")), w && f(r, "system") && (b = [r.system])[0]) {
                            z || (z = b[0].os || null);
                            try {
                                b[1] = r.require("ringo/engine").version, q = b[1].join("."), W = "RingoJS"
                            } catch (t) {
                                b[0].global.system == r.system && (W = "Narwhal")
                            }
                        } else "object" == typeof r.process && !r.process.browser && (b = r.process) ? "object" == typeof b.versions ? "string" == typeof b.versions.electron ? (U.push("Node " + b.versions.node), W = "Electron", q = b.versions.electron) : "string" == typeof b.versions.nw && (U.push("Chromium " + q, "Node " + b.versions.node), W = "NW.js", q = b.versions.nw) : (W = "Node.js", N = b.arch, z = b.platform, q = /[\d.]+/.exec(b.version), q = q ? q[0] : "unknown") : R && (W = "Rhino"); else l(b = r.runtime) == S ? (W = "Adobe AIR", z = b.flash.system.Capabilities.os) : l(b = r.phantom) == A ? (W = "PhantomJS", q = (b = b.version || null) && b.major + "." + b.minor + "." + b.patch) : "number" == typeof M.documentMode && (b = /\bTrident\/(\d+)/i.exec(t)) ? (q = [q, M.documentMode], (b = +b[1] + 4) != q[1] && (U.push("IE " + q[1] + " mode"), F && (F[1] = ""), q[1] = b), q = "IE" == W ? String(q[1].toFixed(1)) : q[0]) : "number" == typeof M.documentMode && /^(?:Chrome|Firefox)\b/.test(W) && (U.push("masking as " + W + " " + q), W = "IE", q = "11.0", F = ["Trident"], z = "Windows");
                        z = z && u(z)
                    }
                    if (q && (b = /(?:[ab]|dp|pre|[ab]\d+pre)(?:\d+\+?)?$/i.exec(q) || /(?:alpha|beta)(?: ?\d)?/i.exec(t + ";" + (D && o.appMinorVersion)) || /\bMinefield\b/i.test(t) && "a") && (B = /b/i.test(b) ? "beta" : "alpha", q = q.replace(RegExp(b + "\\+?$"), "") + ("beta" == B ? P : C) + (/\d+\+?/.exec(b) || "")), "Fennec" == W || "Firefox" == W && /\b(?:Android|Firefox OS)\b/.test(z)) W = "Firefox Mobile"; else if ("Maxthon" == W && q) q = q.replace(/\.[\d.]+/, ".x"); else if (/\bXbox\b/i.test(K)) "Xbox 360" == K && (z = null), "Xbox 360" == K && /\bIEMobile\b/.test(t) && U.unshift("mobile mode"); else if (!/^(?:Chrome|IE|Opera)$/.test(W) && (!W || K || /Browser|Mobi/.test(W)) || "Windows CE" != z && !/Mobi/i.test(t)) if ("IE" == W && D) try {
                        null === r.external && U.unshift("platform preview")
                    } catch (t) {
                        U.unshift("embedded")
                    } else (/\bBlackBerry\b/.test(K) || /\bBB10\b/.test(t)) && (b = (RegExp(K.replace(/ +/g, " *") + "/([.\\d]+)", "i").exec(t) || 0)[1] || q) ? (b = [b, /BB10/.test(t)], z = (b[1] ? (K = null, H = "BlackBerry") : "Device Software") + " " + b[0], q = null) : this != c && "Wii" != K && (D && j || /Opera/.test(W) && /\b(?:MSIE|Firefox)\b/i.test(t) || "Firefox" == W && /\bOS X (?:\d+\.){2,}/.test(z) || "IE" == W && (z && !/^Win/.test(z) && q > 5.5 || /\bWindows XP\b/.test(z) && q > 8 || 8 == q && !/\bTrident\b/.test(t))) && !E.test(b = g.call(c, t.replace(E, "") + ";")) && b.name && (b = "ing as " + b.name + ((b = b.version) ? " " + b : ""), E.test(W) ? (/\bIE\b/.test(b) && "Mac OS" == z && (z = null), b = "identify" + b) : (b = "mask" + b, W = L ? u(L.replace(/([a-z])([A-Z])/g, "$1 $2")) : "Opera", /\bIE\b/.test(b) && (z = null), D || (q = null)), F = ["Presto"], U.push(b)); else W += " Mobile";
                    (b = (/\bAppleWebKit\/([\d.]+\+?)/i.exec(t) || 0)[1]) && (b = [parseFloat(b.replace(/\.(\d)$/, ".0$1")), b], "Safari" == W && "+" == b[1].slice(-1) ? (W = "WebKit Nightly", B = "alpha", q = b[1].slice(0, -1)) : q != b[1] && q != (b[2] = (/\bSafari\/([\d.]+\+?)/i.exec(t) || 0)[1]) || (q = null), b[1] = (/\bChrome\/([\d.]+)/i.exec(t) || 0)[1], 537.36 == b[0] && 537.36 == b[2] && parseFloat(b[1]) >= 28 && "WebKit" == F && (F = ["Blink"]), D && (_ || b[1]) ? (F && (F[1] = "like Chrome"), b = b[1] || (b = b[0], b < 530 ? 1 : b < 532 ? 2 : b < 532.05 ? 3 : b < 533 ? 4 : b < 534.03 ? 5 : b < 534.07 ? 6 : b < 534.1 ? 7 : b < 534.13 ? 8 : b < 534.16 ? 9 : b < 534.24 ? 10 : b < 534.3 ? 11 : b < 535.01 ? 12 : b < 535.02 ? "13+" : b < 535.07 ? 15 : b < 535.11 ? 16 : b < 535.19 ? 17 : b < 536.05 ? 18 : b < 536.1 ? 19 : b < 537.01 ? 20 : b < 537.11 ? "21+" : b < 537.13 ? 23 : b < 537.18 ? 24 : b < 537.24 ? 25 : b < 537.36 ? 26 : "Blink" != F ? "27" : "28")) : (F && (F[1] = "like Safari"), b = b[0], b = b < 400 ? 1 : b < 500 ? 2 : b < 526 ? 3 : b < 533 ? 4 : b < 534 ? "4+" : b < 535 ? 5 : b < 537 ? 6 : b < 538 ? 7 : b < 601 ? 8 : "8"), F && (F[1] += " " + (b += "number" == typeof b ? ".x" : /[.+]/.test(b) ? "" : "+")), "Safari" == W && (!q || parseInt(q) > 45) && (q = b)), "Opera" == W && (b = /\bzbov|zvav$/.exec(z)) ? (W += " ", U.unshift("desktop mode"), "zvav" == b ? (W += "Mini", q = null) : W += "Mobile", z = z.replace(RegExp(" *" + b + "$"), "")) : "Safari" == W && /\bChrome\b/.exec(F && F[1]) && (U.unshift("desktop mode"), W = "Chrome Mobile", q = null, /\bOS X\b/.test(z) ? (H = "Apple", z = "iOS 4.3+") : z = null), q && 0 == q.indexOf(b = /[\d.]+$/.exec(z)) && t.indexOf("/" + b + "-") > -1 && (z = d(z.replace(b, ""))), F && !/\b(?:Avant|Nook)\b/.test(W) && (/Browser|Lunascape|Maxthon/.test(W) || "Safari" != W && /^iOS/.test(z) && /\bSafari\b/.test(F[1]) || /^(?:Adobe|Arora|Breach|Midori|Opera|Phantom|Rekonq|Rock|Samsung Internet|Sleipnir|Web)/.test(W) && F[1]) && (b = F[F.length - 1]) && U.push(b), U.length && (U = ["(" + U.join("; ") + ")"]), H && K && K.indexOf(H) < 0 && U.push("on " + H), K && U.push((/^on /.test(U[U.length - 1]) ? "" : "on ") + K), z && (b = / ([\d.+]+)$/.exec(z), v = b && "/" == z.charAt(z.length - b[0].length - 1), z = {
                        architecture: 32,
                        family: b && !v ? z.replace(b[0], "") : z,
                        version: b ? b[1] : null,
                        toString: function () {
                            var t = this.version;
                            return this.family + (t && !v ? " " + t : "") + (64 == this.architecture ? " 64-bit" : "")
                        }
                    }), (b = /\b(?:AMD|IA|Win|WOW|x86_|x)64\b/i.exec(N)) && !/\bi686\b/i.test(N) ? (z && (z.architecture = 64, z.family = z.family.replace(RegExp(" *" + b), "")), W && (/\bWOW64\b/i.test(t) || D && /\w(?:86|32)$/.test(o.cpuClass || o.platform) && !/\bWin64; x64\b/i.test(t)) && U.unshift("32-bit")) : z && /^OS X/.test(z.family) && "Chrome" == W && parseFloat(q) >= 39 && (z.architecture = 64), t || (t = null);
                    var G = {};
                    return G.description = t, G.layout = F && F[0], G.manufacturer = H, G.name = W, G.prerelease = B, G.product = K, G.ua = t, G.version = W && q, G.os = z || {
                        architecture: null,
                        family: null,
                        version: null,
                        toString: function () {
                            return "null"
                        }
                    }, G.parse = g, G.toString = n, G.version && U.unshift(q), G.name && U.unshift(W), z && W && (z != String(z).split(" ")[0] || z != W.split(" ")[0] && !K) && U.push(K ? "(" + z + ")" : "on " + z), U.length && (G.description = U.join(" ")), G
                }

                var b = {function: !0, object: !0}, m = b[typeof window] && window || this, y = m, v = b[typeof e] && e,
                    w = b[typeof t] && t && !t.nodeType && t, _ = v && w && "object" == typeof r && r;
                !_ || _.global !== _ && _.window !== _ && _.self !== _ || (m = _);
                var S = Math.pow(2, 53) - 1, E = /\bOpera/, k = this, x = Object.prototype, I = x.hasOwnProperty,
                    T = x.toString, A = g();
                m.platform = A, void 0 !== (i = function () {
                    return A
                }.call(e, n, e, t)) && (t.exports = i)
            }).call(this)
        }).call(e, n(33)(t), n(2))
    }, function (t, e) {
        t.exports = {
            name: "chabokpush",
            version: "1.0.3",
            description: "Chabok Javascript client for browsers, React-Native, Web Workers & Node.js",
            main: "dist/chabokpush.min.js",
            homepage: "http://chabokpush.com/",
            scripts: {
                build: "webpack --env build",
                "demo-build": "webpack --env demo && node ./development.js",
                "dev-build": "webpack --env demo && NODE_ENV=staging node ./development.js",
                dev: "webpack --progress --colors --watch --env dev",
                pretest: "webpack --env build",
                test: "mocha --compilers js:babel-core/register --colors ./test/*.spec.js  -r ./test/setup.js",
                "test:watch": "mocha --compilers js:babel-core/register --colors -w ./test/*.spec.js -r ./test/setup.js",
                release: "./release.sh"
            },
            repository: {type: "git", url: "https://github.com/chabokpush/chabok-client-js.git"},
            author: "ADP digital",
            license: "ISC",
            eslintConfig: {
                env: {browser: !0, node: !0},
                parserOptions: {ecmaVersion: 6, sourceType: "module"},
                rules: {semi: 2}
            },
            dependencies: {
                axios: "^0.17.1",
                "es6-symbol": "^3.1.1",
                "faye-websocket": "^0.11.1",
                mqtt: "^2.15.0",
                platform: "^1.3.4",
                shortid: "^2.2.8",
                store2: "^2.5.2"
            },
            devDependencies: {
                "babel-cli": "^6.26.0",
                "babel-core": "^6.26.0",
                "babel-eslint": "^8.0.3",
                "babel-loader": "^7.1.2",
                "babel-plugin-add-module-exports": "0.2.1",
                "babel-preset-es2015": "6.24.1",
                chai: "^4.1.2",
                "copy-webpack-plugin": "^4.3.0",
                eslint: "^4.13.1",
                "eslint-loader": "^1.9.0",
                "html-webpack-plugin": "^2.30.1",
                mocha: "^4.0.1",
                webpack: "^3.10.0",
                yargs: "^10.0.3"
            }
        }
    }, function (t, e, n) {
        "use strict";
        t.exports = n(117)
    }, function (t, e, n) {
        "use strict";

        function r(e) {
            return a.seed(e), t.exports
        }

        function i(e) {
            return f = e, t.exports
        }

        function o(t) {
            return void 0 !== t && a.characters(t), a.shuffled()
        }

        function s() {
            return c(f)
        }

        var a = n(11), u = (n(39), n(120)), c = n(121), l = n(122), f = n(123) || 0;
        t.exports = s, t.exports.generate = s, t.exports.seed = r, t.exports.worker = i, t.exports.characters = o, t.exports.decode = u, t.exports.isValid = l
    }, function (t, e, n) {
        "use strict";

        function r() {
            return (o = (9301 * o + 49297) % 233280) / 233280
        }

        function i(t) {
            o = t
        }

        var o = 1;
        t.exports = {nextValue: r, seed: i}
    }, function (t, e, n) {
        "use strict";

        function r() {
            if (!i || !i.getRandomValues) return 48 & Math.floor(256 * Math.random());
            var t = new Uint8Array(1);
            return i.getRandomValues(t), 48 & t[0]
        }

        var i = "object" == typeof window && (window.crypto || window.msCrypto);
        t.exports = r
    }, function (t, e, n) {
        "use strict";

        function r(t) {
            var e = i.shuffled();
            return {version: 15 & e.indexOf(t.substr(0, 1)), worker: 15 & e.indexOf(t.substr(1, 1))}
        }

        var i = n(11);
        t.exports = r
    }, function (t, e, n) {
        "use strict";

        function r(t) {
            var e = "", n = Math.floor(.001 * (Date.now() - u));
            return n === o ? i++ : (i = 0, o = n), e += s(a.lookup, c), e += s(a.lookup, t), i > 0 && (e += s(a.lookup, i)), e += s(a.lookup, n)
        }

        var i, o, s = n(39), a = n(11), u = 1459707606518, c = 6;
        t.exports = r
    }, function (t, e, n) {
        "use strict";

        function r(t) {
            if (!t || "string" != typeof t || t.length < 6) return !1;
            for (var e = i.characters(), n = t.length, r = 0; r < n; r++) if (-1 === e.indexOf(t[r])) return !1;
            return !0
        }

        var i = n(11);
        t.exports = r
    }, function (t, e, n) {
        "use strict";
        t.exports = 0
    }, function (t, e, n) {
        "use strict";

        function r(t, e) {
            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
        }

        function i(t, e) {
            if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !e || "object" != typeof e && "function" != typeof e ? t : e
        }

        function o(t, e) {
            if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
            t.prototype = Object.create(e && e.prototype, {
                constructor: {
                    value: t,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
        }

        Object.defineProperty(e, "__esModule", {value: !0});
        var s = function () {
            function t(t, e) {
                for (var n = 0; n < e.length; n++) {
                    var r = e[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
                }
            }

            return function (e, n, r) {
                return n && t(e.prototype, n), r && t(e, r), e
            }
        }(), a = n(5), u = null, c = function (t) {
            function e() {
                r(this, e);
                var t = i(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this));
                if (t.registerServiceWorker(), u) {
                    var n;
                    return n = u, i(t, n)
                }
                return u = t, t
            }

            return o(e, t), s(e, [{
                key: "initializeState", value: function () {
                    var t = this;
                    return "showNotification" in ServiceWorkerRegistration.prototype ? "denied" === Notification.permission ? void this.emit("tokenSubscription", "disabled") : "PushManager" in window ? void navigator.serviceWorker.ready.then(function (e) {
                        e.pushManager.getSubscription().then(function (e) {
                            e && t.sendSubscriptionToServer(e)
                        }).catch(function (t) {
                        })
                    }) : void this.emit("tokenSubscription", "notSupported") : void this.emit("tokenSubscription", "notSupported")
                }
            }, {
                key: "buildApplicationServerKey", value: function (t) {
                    var e = t || "BLbNRYGZ39Qx-qYrlenpoWArW4zNR6A5XG9ch0VrA8YbJDWMJeWV0hK25Qt75NMrjgP_GG07TBnJ8gNPnVPGkyg",
                        n = e.replace(/-/g, "+").replace(/_/g, "/"), r = atob(n).split("").map(function (t) {
                            return t.charCodeAt(0)
                        });
                    return new Uint8Array(r)
                }
            }, {
                key: "sendSubscriptionToServer", value: function (t) {
                    this.emit("tokenSubscription", t.toJSON())
                }
            }, {
                key: "removeSubscriptionFromServer", value: function (t) {
                }
            }, {
                key: "registerServiceWorker", value: function () {
                    var t = this;
                    "serviceWorker" in navigator ? navigator.serviceWorker.register("/rtlstackedit/ChabokSDKWorker.js").then(function (e) {
                        return t.initializeState(), navigator.serviceWorker.ready
                    }).catch(function (t) {
                    }) : this.emit("tokenSubscription", "notSupported")
                }
            }, {
                key: "permissionGranted", value: function (t) {
                    var e = this;
                    "serviceWorker" in navigator ? navigator.serviceWorker.ready.then(function (n) {
                        n.pushManager.subscribe({
                            userVisibleOnly: !0,
                            applicationServerKey: e.buildApplicationServerKey(t)
                        }).then(function (t) {
                            e.sendSubscriptionToServer(t)
                        }).catch(function (t) {
                            e.emit("tokenSubscription", "An error occurred while logging on to the external notification service. Please try again in a few minutes or contact your contact person.")
                        })
                    }) : this.emit("tokenSubscription", null)
                }
            }, {
                key: "permissionDenied", value: function () {
                    this.emit("tokenSubscription", "disabled"), this.invalidateToken()
                }
            }, {
                key: "requestToken", value: function (t) {
                    var e = this, n = t.publicKey;
                    return "denied" === Notification.permission ? void this.permissionDenied() : "default" === Notification.permission ? void Notification.requestPermission().then(function (t) {
                        if ("granted" !== t) return void e.permissionDenied();
                        e.permissionGranted(n)
                    }) : void this.permissionGranted(n)
                }
            }, {
                key: "invalidateToken", value: function () {
                    var t = this;
                    navigator.serviceWorker.ready.then(function (e) {
                        e.pushManager.getSubscription().then(function (e) {
                            if (!e) return void t.emit("tokenSubscription");
                            e.unsubscribe().then(function () {
                                t.emit("tokenSubscription")
                            }).catch(function (e) {
                                t.emit("tokenSubscription", "There was an error while logging out of the external notification service.")
                            }), t.removeSubscriptionFromServer()
                        }).catch(function (t) {
                        })
                    })
                }
            }]), e
        }(a);
        e.default = c, t.exports = e.default
    }])
});
//# sourceMappingURL=chabokpush.min.js.map