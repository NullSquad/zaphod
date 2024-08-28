var N, f, en, D, tn, B, _n, F = {},
    rn = [],
    yn = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;

function C(e, n) {
    for (var t in n) e[t] = n[t];
    return e
}

function on(e) {
    var n = e.parentNode;
    n && n.removeChild(e)
}

function ln(e, n, t) {
    var _, l, r, u = {};
    for (r in n) r == "key" ? _ = n[r] : r == "ref" ? l = n[r] : u[r] = n[r];
    if (arguments.length > 2 && (u.children = arguments.length > 3 ? N.call(arguments, 2) : t), typeof e == "function" && e.defaultProps != null)
        for (r in e.defaultProps) u[r] === void 0 && (u[r] = e.defaultProps[r]);
    return U(e, u, _, l, null)
}

function U(e, n, t, _, l) {
    var r = {
        type: e,
        props: n,
        key: t,
        ref: _,
        __k: null,
        __: null,
        __b: 0,
        __e: null,
        __d: void 0,
        __c: null,
        __h: null,
        constructor: void 0,
        __v: l ?? ++en
    };
    return f.vnode != null && f.vnode(r), r
}

function W(e) {
    return e.children
}

function A(e, n) {
    this.props = e, this.context = n
}

function E(e, n) {
    if (n == null) return e.__ ? E(e.__, e.__.__k.indexOf(e) + 1) : null;
    for (var t; n < e.__k.length; n++)
        if ((t = e.__k[n]) != null && t.__e != null) return t.__e;
    return typeof e.type == "function" ? E(e) : null
}

function un(e) {
    var n, t;
    if ((e = e.__) != null && e.__c != null) {
        for (e.__e = e.__c.base = null, n = 0; n < e.__k.length; n++)
            if ((t = e.__k[n]) != null && t.__e != null) {
                e.__e = e.__c.base = t.__e;
                break
            } return un(e)
    }
}

function R(e) {
    (!e.__d && (e.__d = !0) && D.push(e) && !L.__r++ || B !== f.debounceRendering) && ((B = f.debounceRendering) || tn)(L)
}

function L() {
    for (var e; L.__r = D.length;) e = D.sort(function(n, t) {
        return n.__v.__b - t.__v.__b
    }), D = [], e.some(function(n) {
        var t, _, l, r, u, a;
        n.__d && (u = (r = (t = n).__v).__e, (a = t.__P) && (_ = [], (l = C({}, r)).__v = r.__v + 1, V(a, r, l, t.__n, a.ownerSVGElement !== void 0, r.__h != null ? [u] : null, _, u ?? E(r), r.__h), an(_, r), r.__e != u && un(r)))
    })
}

function cn(e, n, t, _, l, r, u, a, s, h) {
    var o, m, c, i, p, b, v, y = _ && _.__k || rn,
        k = y.length;
    for (t.__k = [], o = 0; o < n.length; o++)
        if ((i = t.__k[o] = (i = n[o]) == null || typeof i == "boolean" ? null : typeof i == "string" || typeof i == "number" || typeof i == "bigint" ? U(null, i, null, null, i) : Array.isArray(i) ? U(W, {
                children: i
            }, null, null, null) : i.__b > 0 ? U(i.type, i.props, i.key, null, i.__v) : i) != null) {
            if (i.__ = t, i.__b = t.__b + 1, (c = y[o]) === null || c && i.key == c.key && i.type === c.type) y[o] = void 0;
            else
                for (m = 0; m < k; m++) {
                    if ((c = y[m]) && i.key == c.key && i.type === c.type) {
                        y[m] = void 0;
                        break
                    }
                    c = null
                }
            V(e, i, c = c || F, l, r, u, a, s, h), p = i.__e, (m = i.ref) && c.ref != m && (v || (v = []), c.ref && v.push(c.ref, null, i), v.push(m, i.__c || p, i)), p != null ? (b == null && (b = p), typeof i.type == "function" && i.__k != null && i.__k === c.__k ? i.__d = s = sn(i, s, e) : s = fn(e, i, c, y, p, s), h || t.type !== "option" ? typeof t.type == "function" && (t.__d = s) : e.value = "") : s && c.__e == s && s.parentNode != e && (s = E(c))
        } for (t.__e = b, o = k; o--;) y[o] != null && (typeof t.type == "function" && y[o].__e != null && y[o].__e == t.__d && (t.__d = E(_, o + 1)), hn(y[o], y[o]));
    if (v)
        for (o = 0; o < v.length; o++) pn(v[o], v[++o], v[++o])
}

function sn(e, n, t) {
    var _, l;
    for (_ = 0; _ < e.__k.length; _++)(l = e.__k[_]) && (l.__ = e, n = typeof l.type == "function" ? sn(l, n, t) : fn(t, l, l, e.__k, l.__e, n));
    return n
}

function fn(e, n, t, _, l, r) {
    var u, a, s;
    if (n.__d !== void 0) u = n.__d, n.__d = void 0;
    else if (t == null || l != r || l.parentNode == null) n: if (r == null || r.parentNode !== e) e.appendChild(l), u = null;
        else {
            for (a = r, s = 0;
                (a = a.nextSibling) && s < _.length; s += 2)
                if (a == l) break n;
            e.insertBefore(l, r), u = r
        } return u !== void 0 ? u : l.nextSibling
}

function $(e, n, t) {
    n[0] === "-" ? e.setProperty(n, t) : e[n] = t == null ? "" : typeof t != "number" || yn.test(n) ? t : t + "px"
}

function T(e, n, t, _, l) {
    var r;
    n: if (n === "style")
        if (typeof t == "string") e.style.cssText = t;
        else {
            if (typeof _ == "string" && (e.style.cssText = _ = ""), _)
                for (n in _) t && n in t || $(e.style, n, "");
            if (t)
                for (n in t) _ && t[n] === _[n] || $(e.style, n, t[n])
        }
    else if (n[0] === "o" && n[1] === "n") r = n !== (n = n.replace(/Capture$/, "")), n = n.toLowerCase() in e ? n.toLowerCase().slice(2) : n.slice(2), e.l || (e.l = {}), e.l[n + r] = t, t ? _ || e.addEventListener(n, r ? G : j, r) : e.removeEventListener(n, r ? G : j, r);
    else if (n !== "dangerouslySetInnerHTML") {
        if (l) n = n.replace(/xlink[H:h]/, "h").replace(/sName$/, "s");
        else if (n !== "href" && n !== "list" && n !== "form" && n !== "tabIndex" && n !== "download" && n in e) try {
            e[n] = t ?? "";
            break n
        } catch {}
        typeof t == "function" || (t != null && (t !== !1 || n[0] === "a" && n[1] === "r") ? e.setAttribute(n, t) : e.removeAttribute(n))
    }
}

function j(e) {
    this.l[e.type + !1](f.event ? f.event(e) : e)
}

function G(e) {
    this.l[e.type + !0](f.event ? f.event(e) : e)
}

function V(e, n, t, _, l, r, u, a, s) {
    var h, o, m, c, i, p, b, v, y, k, H, d = n.type;
    if (n.constructor !== void 0) return null;
    t.__h != null && (s = t.__h, a = n.__e = t.__e, n.__h = null, r = [a]), (h = f.__b) && h(n);
    try {
        n: if (typeof d == "function") {
            if (v = n.props, y = (h = d.contextType) && _[h.__c], k = h ? y ? y.props.value : h.__ : _, t.__c ? b = (o = n.__c = t.__c).__ = o.__E : ("prototype" in d && d.prototype.render ? n.__c = o = new d(v, k) : (n.__c = o = new A(v, k), o.constructor = d, o.render = kn), y && y.sub(o), o.props = v, o.state || (o.state = {}), o.context = k, o.__n = _, m = o.__d = !0, o.__h = []), o.__s == null && (o.__s = o.state), d.getDerivedStateFromProps != null && (o.__s == o.state && (o.__s = C({}, o.__s)), C(o.__s, d.getDerivedStateFromProps(v, o.__s))), c = o.props, i = o.state, m) d.getDerivedStateFromProps == null && o.componentWillMount != null && o.componentWillMount(), o.componentDidMount != null && o.__h.push(o.componentDidMount);
            else {
                if (d.getDerivedStateFromProps == null && v !== c && o.componentWillReceiveProps != null && o.componentWillReceiveProps(v, k), !o.__e && o.shouldComponentUpdate != null && o.shouldComponentUpdate(v, o.__s, k) === !1 || n.__v === t.__v) {
                    o.props = v, o.state = o.__s, n.__v !== t.__v && (o.__d = !1), o.__v = n, n.__e = t.__e, n.__k = t.__k, n.__k.forEach(function(w) {
                        w && (w.__ = n)
                    }), o.__h.length && u.push(o);
                    break n
                }
                o.componentWillUpdate != null && o.componentWillUpdate(v, o.__s, k), o.componentDidUpdate != null && o.__h.push(function() {
                    o.componentDidUpdate(c, i, p)
                })
            }
            o.context = k, o.props = v, o.state = o.__s, (h = f.__r) && h(n), o.__d = !1, o.__v = n, o.__P = e, h = o.render(o.props, o.state, o.context), o.state = o.__s, o.getChildContext != null && (_ = C(C({}, _), o.getChildContext())), m || o.getSnapshotBeforeUpdate == null || (p = o.getSnapshotBeforeUpdate(c, i)), H = h != null && h.type === W && h.key == null ? h.props.children : h, cn(e, Array.isArray(H) ? H : [H], n, t, _, l, r, u, a, s), o.base = n.__e, n.__h = null, o.__h.length && u.push(o), b && (o.__E = o.__ = null), o.__e = !1
        } else r == null && n.__v === t.__v ? (n.__k = t.__k, n.__e = t.__e) : n.__e = gn(t.__e, n, t, _, l, r, u, s);
        (h = f.diffed) && h(n)
    }
    catch (w) {
        n.__v = null, (s || r != null) && (n.__e = a, n.__h = !!s, r[r.indexOf(a)] = null), f.__e(w, n, t)
    }
}

function an(e, n) {
    f.__c && f.__c(n, e), e.some(function(t) {
        try {
            e = t.__h, t.__h = [], e.some(function(_) {
                _.call(t)
            })
        } catch (_) {
            f.__e(_, t.__v)
        }
    })
}

function gn(e, n, t, _, l, r, u, a) {
    var s, h, o, m = t.props,
        c = n.props,
        i = n.type,
        p = 0;
    if (i === "svg" && (l = !0), r != null) {
        for (; p < r.length; p++)
            if ((s = r[p]) && (s === e || (i ? s.localName == i : s.nodeType == 3))) {
                e = s, r[p] = null;
                break
            }
    }
    if (e == null) {
        if (i === null) return document.createTextNode(c);
        e = l ? document.createElementNS("http://www.w3.org/2000/svg", i) : document.createElement(i, c.is && c), r = null, a = !1
    }
    if (i === null) m === c || a && e.data === c || (e.data = c);
    else {
        if (r = r && N.call(e.childNodes), h = (m = t.props || F).dangerouslySetInnerHTML, o = c.dangerouslySetInnerHTML, !a) {
            if (r != null)
                for (m = {}, p = 0; p < e.attributes.length; p++) m[e.attributes[p].name] = e.attributes[p].value;
            (o || h) && (o && (h && o.__html == h.__html || o.__html === e.innerHTML) || (e.innerHTML = o && o.__html || ""))
        }
        if (function(b, v, y, k, H) {
                var d;
                for (d in y) d === "children" || d === "key" || d in v || T(b, d, null, y[d], k);
                for (d in v) H && typeof v[d] != "function" || d === "children" || d === "key" || d === "value" || d === "checked" || y[d] === v[d] || T(b, d, v[d], y[d], k)
            }(e, c, m, l, a), o) n.__k = [];
        else if (p = n.props.children, cn(e, Array.isArray(p) ? p : [p], n, t, _, l && i !== "foreignObject", r, u, r ? r[0] : t.__k && E(t, 0), a), r != null)
            for (p = r.length; p--;) r[p] != null && on(r[p]);
        a || ("value" in c && (p = c.value) !== void 0 && (p !== e.value || i === "progress" && !p) && T(e, "value", p, m.value, !1), "checked" in c && (p = c.checked) !== void 0 && p !== e.checked && T(e, "checked", p, m.checked, !1))
    }
    return e
}

function pn(e, n, t) {
    try {
        typeof e == "function" ? e(n) : e.current = n
    } catch (_) {
        f.__e(_, t)
    }
}

function hn(e, n, t) {
    var _, l;
    if (f.unmount && f.unmount(e), (_ = e.ref) && (_.current && _.current !== e.__e || pn(_, null, n)), (_ = e.__c) != null) {
        if (_.componentWillUnmount) try {
            _.componentWillUnmount()
        } catch (r) {
            f.__e(r, n)
        }
        _.base = _.__P = null
    }
    if (_ = e.__k)
        for (l = 0; l < _.length; l++) _[l] && hn(_[l], n, typeof e.type != "function");
    t || e.__e == null || on(e.__e), e.__e = e.__d = void 0
}

function kn(e, n, t) {
    return this.constructor(e, t)
}

function En(e, n, t) {
    var _, l, r;
    f.__ && f.__(e, n), l = (_ = typeof t == "function") ? null : t && t.__k || n.__k, r = [], V(n, e = (!_ && t || n).__k = ln(W, null, [e]), l || F, F, n.ownerSVGElement !== void 0, !_ && t ? [t] : l ? null : n.firstChild ? N.call(n.childNodes) : null, r, !_ && t ? t : l ? l.__e : n.firstChild, _), an(r, e)
}

function Sn(e, n) {
    var t = {
        __c: n = "__cC" + _n++,
        __: e,
        Consumer: function(_, l) {
            return _.children(l)
        },
        Provider: function(_) {
            var l, r;
            return this.getChildContext || (l = [], (r = {})[n] = this, this.getChildContext = function() {
                return r
            }, this.shouldComponentUpdate = function(u) {
                this.props.value !== u.value && l.some(R)
            }, this.sub = function(u) {
                l.push(u);
                var a = u.componentWillUnmount;
                u.componentWillUnmount = function() {
                    l.splice(l.indexOf(u), 1), a && a.call(u)
                }
            }), _.children
        }
    };
    return t.Provider.__ = t.Consumer.contextType = t
}
N = rn.slice, f = {
    __e: function(e, n) {
        for (var t, _, l; n = n.__;)
            if ((t = n.__c) && !t.__) try {
                if ((_ = t.constructor) && _.getDerivedStateFromError != null && (t.setState(_.getDerivedStateFromError(e)), l = t.__d), t.componentDidCatch != null && (t.componentDidCatch(e), l = t.__d), l) return t.__E = t
            } catch (r) {
                e = r
            }
        throw e
    }
}, en = 0, A.prototype.setState = function(e, n) {
    var t;
    t = this.__s != null && this.__s !== this.state ? this.__s : this.__s = C({}, this.state), typeof e == "function" && (e = e(C({}, t), this.props)), e && C(t, e), e != null && this.__v && (n && this.__h.push(n), R(this))
}, A.prototype.forceUpdate = function(e) {
    this.__v && (this.__e = !0, e && this.__h.push(e), R(this))
}, A.prototype.render = W, D = [], tn = typeof Promise == "function" ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, L.__r = 0, _n = 0;
var x, g, z, S = 0,
    I = [],
    J = f.__b,
    K = f.__r,
    Q = f.diffed,
    X = f.__c,
    Y = f.unmount;

function P(e, n) {
    f.__h && f.__h(g, e, S || n), S = 0;
    var t = g.__H || (g.__H = {
        __: [],
        __h: []
    });
    return e >= t.__.length && t.__.push({}), t.__[e]
}

function bn(e) {
    return S = 1, Cn(vn, e)
}

function Cn(e, n, t) {
    var _ = P(x++, 2);
    return _.t = e, _.__c || (_.__ = [t ? t(n) : vn(void 0, n), function(l) {
        var r = _.t(_.__[0], l);
        _.__[0] !== r && (_.__ = [r, _.__[1]], _.__c.setState({}))
    }], _.__c = g), _.__
}

function Pn(e, n) {
    var t = P(x++, 3);
    !f.__s && q(t.__H, n) && (t.__ = e, t.__H = n, g.__H.__h.push(t))
}

function xn(e, n) {
    var t = P(x++, 4);
    !f.__s && q(t.__H, n) && (t.__ = e, t.__H = n, g.__h.push(t))
}

function Dn(e) {
    return S = 5, dn(function() {
        return {
            current: e
        }
    }, [])
}

function wn(e, n, t) {
    S = 6, xn(function() {
        typeof e == "function" ? e(n()) : e && (e.current = n())
    }, t == null ? t : t.concat(e))
}

function dn(e, n) {
    var t = P(x++, 7);
    return q(t.__H, n) && (t.__ = e(), t.__H = n, t.__h = e), t.__
}

function Tn(e, n) {
    return S = 8, dn(function() {
        return e
    }, n)
}

function Un(e) {
    var n = g.context[e.__c],
        t = P(x++, 9);
    return t.c = e, n ? (t.__ == null && (t.__ = !0, n.sub(g)), n.props.value) : e.__
}

function An(e, n) {
    f.useDebugValue && f.useDebugValue(n ? n(e) : e)
}

function Mn(e) {
    var n = P(x++, 10),
        t = bn();
    return n.__ = e, g.componentDidCatch || (g.componentDidCatch = function(_) {
        n.__ && n.__(_), t[1](_)
    }), [t[0], function() {
        t[1](void 0)
    }]
}

function Hn() {
    I.forEach(function(e) {
        if (e.__P) try {
            e.__H.__h.forEach(M), e.__H.__h.forEach(O), e.__H.__h = []
        } catch (n) {
            e.__H.__h = [], f.__e(n, e.__v)
        }
    }), I = []
}
f.__b = function(e) {
    g = null, J && J(e)
}, f.__r = function(e) {
    K && K(e), x = 0;
    var n = (g = e.__c).__H;
    n && (n.__h.forEach(M), n.__h.forEach(O), n.__h = [])
}, f.diffed = function(e) {
    Q && Q(e);
    var n = e.__c;
    n && n.__H && n.__H.__h.length && (I.push(n) !== 1 && z === f.requestAnimationFrame || ((z = f.requestAnimationFrame) || function(t) {
        var _, l = function() {
                clearTimeout(r), Z && cancelAnimationFrame(_), setTimeout(t)
            },
            r = setTimeout(l, 100);
        Z && (_ = requestAnimationFrame(l))
    })(Hn)), g = void 0
}, f.__c = function(e, n) {
    n.some(function(t) {
        try {
            t.__h.forEach(M), t.__h = t.__h.filter(function(_) {
                return !_.__ || O(_)
            })
        } catch (_) {
            n.some(function(l) {
                l.__h && (l.__h = [])
            }), n = [], f.__e(_, t.__v)
        }
    }), X && X(e, n)
}, f.unmount = function(e) {
    Y && Y(e);
    var n = e.__c;
    if (n && n.__H) try {
        n.__H.__.forEach(M)
    } catch (t) {
        f.__e(t, n.__v)
    }
};
var Z = typeof requestAnimationFrame == "function";

function M(e) {
    var n = g;
    typeof e.__c == "function" && e.__c(), g = n
}

function O(e) {
    var n = g;
    e.__c = e.__(), g = n
}

function q(e, n) {
    return !e || e.length !== n.length || n.some(function(t, _) {
        return t !== e[_]
    })
}

function vn(e, n) {
    return typeof n == "function" ? n(e) : n
}
var mn = function(e, n, t, _) {
        var l;
        n[0] = 0;
        for (var r = 1; r < n.length; r++) {
            var u = n[r++],
                a = n[r] ? (n[0] |= u ? 1 : 2, t[n[r++]]) : n[++r];
            u === 3 ? _[0] = a : u === 4 ? _[1] = Object.assign(_[1] || {}, a) : u === 5 ? (_[1] = _[1] || {})[n[++r]] = a : u === 6 ? _[1][n[++r]] += a + "" : u ? (l = e.apply(a, mn(e, a, t, ["", null])), _.push(l), a[0] ? n[0] |= 2 : (n[r - 2] = 0, n[r] = l)) : _.push(a)
        }
        return _
    },
    nn = new Map,
    Fn = function(e) {
        var n = nn.get(this);
        return n || (n = new Map, nn.set(this, n)), (n = mn(this, n.get(e) || (n.set(e, n = function(t) {
            for (var _, l, r = 1, u = "", a = "", s = [0], h = function(c) {
                    r === 1 && (c || (u = u.replace(/^\s*\n\s*|\s*\n\s*$/g, ""))) ? s.push(0, c, u) : r === 3 && (c || u) ? (s.push(3, c, u), r = 2) : r === 2 && u === "..." && c ? s.push(4, c, 0) : r === 2 && u && !c ? s.push(5, 0, !0, u) : r >= 5 && ((u || !c && r === 5) && (s.push(r, 0, u, l), r = 6), c && (s.push(r, c, 0, l), r = 6)), u = ""
                }, o = 0; o < t.length; o++) {
                o && (r === 1 && h(), h(o));
                for (var m = 0; m < t[o].length; m++) _ = t[o][m], r === 1 ? _ === "<" ? (h(), s = [s], r = 3) : u += _ : r === 4 ? u === "--" && _ === ">" ? (r = 1, u = "") : u = _ + u[0] : a ? _ === a ? a = "" : u += _ : _ === '"' || _ === "'" ? a = _ : _ === ">" ? (h(), r = 1) : r && (_ === "=" ? (r = 5, l = u, u = "") : _ === "/" && (r < 5 || t[o][m + 1] === ">") ? (h(), r === 3 && (s = s[0]), r = s, (s = s[0]).push(2, 0, r), r = 0) : _ === " " || _ === "	" || _ === `
` || _ === "\r" ? (h(), r = 2) : u += _), r === 3 && u === "!--" && (r = 4, s = s[0])
            }
            return h(), s
        }(e)), n), arguments, [])).length > 1 ? n : n[0]
    }.bind(ln);
export {
    A as Component, Sn as createContext, ln as h, Fn as html, En as render, Tn as useCallback, Un as useContext, An as useDebugValue, Pn as useEffect, Mn as useErrorBoundary, wn as useImperativeHandle, xn as useLayoutEffect, dn as useMemo, Cn as useReducer, Dn as useRef, bn as useState
};
