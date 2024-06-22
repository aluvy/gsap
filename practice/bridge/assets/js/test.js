(function() {
    const e = document.createElement("link").relList;
    if (e && e.supports && e.supports("modulepreload"))
        return;
    for (const n of document.querySelectorAll('link[rel="modulepreload"]'))
        i(n);
    new MutationObserver(n=>{
        for (const t of n)
            if (t.type === "childList")
                for (const o of t.addedNodes)
                    o.tagName === "LINK" && o.rel === "modulepreload" && i(o)
    }
    ).observe(document, {
        childList: !0,
        subtree: !0
    });
    function r(n) {
        const t = {};
        return n.integrity && (t.integrity = n.integrity),
        n.referrerpolicy && (t.referrerPolicy = n.referrerpolicy),
        n.crossorigin === "use-credentials" ? t.credentials = "include" : n.crossorigin === "anonymous" ? t.credentials = "omit" : t.credentials = "same-origin",
        t
    }
    function i(n) {
        if (n.ep)
            return;
        n.ep = !0;
        const t = r(n);
        fetch(n.href, t)
    }
}
)();
function mn(g) {
    if (g === void 0)
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return g
}
function Ca(g, e) {
    g.prototype = Object.create(e.prototype),
    g.prototype.constructor = g,
    g.__proto__ = e
}
/*!
 * GSAP 3.11.2
 * https://greensock.com
 *
 * @license Copyright 2008-2022, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/
var At = {
    autoSleep: 120,
    force3D: "auto",
    nullTargetWarn: 1,
    units: {
        lineHeight: ""
    }
}, Fr = {
    duration: .5,
    overwrite: !1,
    delay: 0
}, ns, yt, Ve, It = 1e8, ve = 1 / It, Mo = Math.PI * 2, ru = Mo / 4, iu = 0, wa = Math.sqrt, ou = Math.cos, su = Math.sin, Ze = function(e) {
    return typeof e == "string"
}, Ae = function(e) {
    return typeof e == "function"
}, wn = function(e) {
    return typeof e == "number"
}, rs = function(e) {
    return typeof e > "u"
}, fn = function(e) {
    return typeof e == "object"
}, Ct = function(e) {
    return e !== !1
}, Sa = function() {
    return typeof window < "u"
}, _i = function(e) {
    return Ae(e) || Ze(e)
}, Pa = typeof ArrayBuffer == "function" && ArrayBuffer.isView || function() {}
, at = Array.isArray, ko = /(?:-?\.?\d|\.)+/gi, Ea = /[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g, vr = /[-+=.]*\d+[.e-]*\d*[a-z%]*/g, uo = /[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi, Fa = /[+-]=-?[.\d]+/, Ta = /[^,'"\[\]\s]+/gi, au = /^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i, ye, Ot, Bo, is, Mt = {}, Ui = {}, ba, Aa = function(e) {
    return (Ui = ir(e, Mt)) && pt
}, os = function(e, r) {
    return console.warn("Invalid property", e, "set to", r, "Missing plugin? gsap.registerPlugin()")
}, Gi = function(e, r) {
    return !r && console.warn(e)
}, Ma = function(e, r) {
    return e && (Mt[e] = r) && Ui && (Ui[e] = r) || Mt
}, li = function() {
    return 0
}, lu = {
    suppressEvents: !0,
    isStart: !0,
    kill: !1
}, Ri = {
    suppressEvents: !0,
    kill: !1
}, uu = {
    suppressEvents: !0
}, ss = {}, Ln = [], Oo = {}, ka, Et = {}, fo = {}, Ts = 30, Li = [], as = "", ls = function(e) {
    var r = e[0], i, n;
    if (fn(r) || Ae(r) || (e = [e]),
    !(i = (r._gsap || {}).harness)) {
        for (n = Li.length; n-- && !Li[n].targetTest(r); )
            ;
        i = Li[n]
    }
    for (n = e.length; n--; )
        e[n] && (e[n]._gsap || (e[n]._gsap = new el(e[n],i))) || e.splice(n, 1);
    return e
}, jn = function(e) {
    return e._gsap || ls(zt(e))[0]._gsap
}, Ba = function(e, r, i) {
    return (i = e[r]) && Ae(i) ? e[r]() : rs(i) && e.getAttribute && e.getAttribute(r) || i
}, wt = function(e, r) {
    return (e = e.split(",")).forEach(r) || e
}, Be = function(e) {
    return Math.round(e * 1e5) / 1e5 || 0
}, et = function(e) {
    return Math.round(e * 1e7) / 1e7 || 0
}, wr = function(e, r) {
    var i = r.charAt(0)
      , n = parseFloat(r.substr(2));
    return e = parseFloat(e),
    i === "+" ? e + n : i === "-" ? e - n : i === "*" ? e * n : e / n
}, fu = function(e, r) {
    for (var i = r.length, n = 0; e.indexOf(r[n]) < 0 && ++n < i; )
        ;
    return n < i
}, qi = function() {
    var e = Ln.length, r = Ln.slice(0), i, n;
    for (Oo = {},
    Ln.length = 0,
    i = 0; i < e; i++)
        n = r[i],
        n && n._lazy && (n.render(n._lazy[0], n._lazy[1], !0)._lazy = 0)
}, Oa = function(e, r, i, n) {
    Ln.length && qi(),
    e.render(r, i, n || yt && r < 0 && (e._initted || e._startAt)),
    Ln.length && qi()
}, Ra = function(e) {
    var r = parseFloat(e);
    return (r || r === 0) && (e + "").match(Ta).length < 2 ? r : Ze(e) ? e.trim() : e
}, La = function(e) {
    return e
}, Wt = function(e, r) {
    for (var i in r)
        i in e || (e[i] = r[i]);
    return e
}, cu = function(e) {
    return function(r, i) {
        for (var n in i)
            n in r || n === "duration" && e || n === "ease" || (r[n] = i[n])
    }
}, ir = function(e, r) {
    for (var i in r)
        e[i] = r[i];
    return e
}, bs = function g(e, r) {
    for (var i in r)
        i !== "__proto__" && i !== "constructor" && i !== "prototype" && (e[i] = fn(r[i]) ? g(e[i] || (e[i] = {}), r[i]) : r[i]);
    return e
}, Ki = function(e, r) {
    var i = {}, n;
    for (n in e)
        n in r || (i[n] = e[n]);
    return i
}, Jr = function(e) {
    var r = e.parent || ye
      , i = e.keyframes ? cu(at(e.keyframes)) : Wt;
    if (Ct(e.inherit))
        for (; r; )
            i(e, r.vars.defaults),
            r = r.parent || r._dp;
    return e
}, hu = function(e, r) {
    for (var i = e.length, n = i === r.length; n && i-- && e[i] === r[i]; )
        ;
    return i < 0
}, Ia = function(e, r, i, n, t) {
    i === void 0 && (i = "_first"),
    n === void 0 && (n = "_last");
    var o = e[n], s;
    if (t)
        for (s = r[t]; o && o[t] > s; )
            o = o._prev;
    return o ? (r._next = o._next,
    o._next = r) : (r._next = e[i],
    e[i] = r),
    r._next ? r._next._prev = r : e[n] = r,
    r._prev = o,
    r.parent = r._dp = e,
    r
}, io = function(e, r, i, n) {
    i === void 0 && (i = "_first"),
    n === void 0 && (n = "_last");
    var t = r._prev
      , o = r._next;
    t ? t._next = o : e[i] === r && (e[i] = o),
    o ? o._prev = t : e[n] === r && (e[n] = t),
    r._next = r._prev = r.parent = null
}, Vn = function(e, r) {
    e.parent && (!r || e.parent.autoRemoveChildren) && e.parent.remove(e),
    e._act = 0
}, er = function(e, r) {
    if (e && (!r || r._end > e._dur || r._start < 0))
        for (var i = e; i; )
            i._dirty = 1,
            i = i.parent;
    return e
}, du = function(e) {
    for (var r = e.parent; r && r.parent; )
        r._dirty = 1,
        r.totalDuration(),
        r = r.parent;
    return e
}, Ro = function(e, r, i, n) {
    return e._startAt && (yt ? e._startAt.revert(Ri) : e.vars.immediateRender && !e.vars.autoRevert || e._startAt.render(r, !0, n))
}, pu = function g(e) {
    return !e || e._ts && g(e.parent)
}, As = function(e) {
    return e._repeat ? Tr(e._tTime, e = e.duration() + e._rDelay) * e : 0
}, Tr = function(e, r) {
    var i = Math.floor(e /= r);
    return e && i === e ? i - 1 : i
}, Zi = function(e, r) {
    return (e - r._start) * r._ts + (r._ts >= 0 ? 0 : r._dirty ? r.totalDuration() : r._tDur)
}, oo = function(e) {
    return e._end = et(e._start + (e._tDur / Math.abs(e._ts || e._rts || ve) || 0))
}, so = function(e, r) {
    var i = e._dp;
    return i && i.smoothChildTiming && e._ts && (e._start = et(i._time - (e._ts > 0 ? r / e._ts : ((e._dirty ? e.totalDuration() : e._tDur) - r) / -e._ts)),
    oo(e),
    i._dirty || er(i, e)),
    e
}, za = function(e, r) {
    var i;
    if ((r._time || r._initted && !r._dur) && (i = Zi(e.rawTime(), r),
    (!r._dur || Di(0, r.totalDuration(), i) - r._tTime > ve) && r.render(i, !0)),
    er(e, r)._dp && e._initted && e._time >= e._dur && e._ts) {
        if (e._dur < e.duration())
            for (i = e; i._dp; )
                i.rawTime() >= 0 && i.totalTime(i._tTime),
                i = i._dp;
        e._zTime = -ve
    }
}, rn = function(e, r, i, n) {
    return r.parent && Vn(r),
    r._start = et((wn(i) ? i : i || e !== ye ? Bt(e, i, r) : e._time) + r._delay),
    r._end = et(r._start + (r.totalDuration() / Math.abs(r.timeScale()) || 0)),
    Ia(e, r, "_first", "_last", e._sort ? "_start" : 0),
    Lo(r) || (e._recent = r),
    n || za(e, r),
    e._ts < 0 && so(e, e._tTime),
    e
}, Na = function(e, r) {
    return (Mt.ScrollTrigger || os("scrollTrigger", r)) && Mt.ScrollTrigger.create(r, e)
}, Va = function(e, r, i, n, t) {
    if (fs(e, r, t),
    !e._initted)
        return 1;
    if (!i && e._pt && !yt && (e._dur && e.vars.lazy !== !1 || !e._dur && e.vars.lazy) && ka !== Ft.frame)
        return Ln.push(e),
        e._lazy = [t, n],
        1
}, gu = function g(e) {
    var r = e.parent;
    return r && r._ts && r._initted && !r._lock && (r.rawTime() < 0 || g(r))
}, Lo = function(e) {
    var r = e.data;
    return r === "isFromStart" || r === "isStart"
}, mu = function(e, r, i, n) {
    var t = e.ratio, o = r < 0 || !r && (!e._start && gu(e) && !(!e._initted && Lo(e)) || (e._ts < 0 || e._dp._ts < 0) && !Lo(e)) ? 0 : 1, s = e._rDelay, l = 0, f, u, p;
    if (s && e._repeat && (l = Di(0, e._tDur, r),
    u = Tr(l, s),
    e._yoyo && u & 1 && (o = 1 - o),
    u !== Tr(e._tTime, s) && (t = 1 - o,
    e.vars.repeatRefresh && e._initted && e.invalidate())),
    o !== t || yt || n || e._zTime === ve || !r && e._zTime) {
        if (!e._initted && Va(e, r, n, i, l))
            return;
        for (p = e._zTime,
        e._zTime = r || (i ? ve : 0),
        i || (i = r && !p),
        e.ratio = o,
        e._from && (o = 1 - o),
        e._time = 0,
        e._tTime = l,
        f = e._pt; f; )
            f.r(o, f.d),
            f = f._next;
        r < 0 && Ro(e, r, i, !0),
        e._onUpdate && !i && Nt(e, "onUpdate"),
        l && e._repeat && !i && e.parent && Nt(e, "onRepeat"),
        (r >= e._tDur || r < 0) && e.ratio === o && (o && Vn(e, 1),
        !i && !yt && (Nt(e, o ? "onComplete" : "onReverseComplete", !0),
        e._prom && e._prom()))
    } else
        e._zTime || (e._zTime = r)
}, vu = function(e, r, i) {
    var n;
    if (i > r)
        for (n = e._first; n && n._start <= i; ) {
            if (n.data === "isPause" && n._start > r)
                return n;
            n = n._next
        }
    else
        for (n = e._last; n && n._start >= i; ) {
            if (n.data === "isPause" && n._start < r)
                return n;
            n = n._prev
        }
}, br = function(e, r, i, n) {
    var t = e._repeat
      , o = et(r) || 0
      , s = e._tTime / e._tDur;
    return s && !n && (e._time *= o / e._dur),
    e._dur = o,
    e._tDur = t ? t < 0 ? 1e10 : et(o * (t + 1) + e._rDelay * t) : o,
    s > 0 && !n && so(e, e._tTime = e._tDur * s),
    e.parent && oo(e),
    i || er(e.parent, e),
    e
}, Ms = function(e) {
    return e instanceof xt ? er(e) : br(e, e._dur)
}, Du = {
    _start: 0,
    endTime: li,
    totalDuration: li
}, Bt = function g(e, r, i) {
    var n = e.labels, t = e._recent || Du, o = e.duration() >= It ? t.endTime(!1) : e._dur, s, l, f;
    return Ze(r) && (isNaN(r) || r in n) ? (l = r.charAt(0),
    f = r.substr(-1) === "%",
    s = r.indexOf("="),
    l === "<" || l === ">" ? (s >= 0 && (r = r.replace(/=/, "")),
    (l === "<" ? t._start : t.endTime(t._repeat >= 0)) + (parseFloat(r.substr(1)) || 0) * (f ? (s < 0 ? t : i).totalDuration() / 100 : 1)) : s < 0 ? (r in n || (n[r] = o),
    n[r]) : (l = parseFloat(r.charAt(s - 1) + r.substr(s + 1)),
    f && i && (l = l / 100 * (at(i) ? i[0] : i).totalDuration()),
    s > 1 ? g(e, r.substr(0, s - 1), i) + l : o + l)) : r == null ? o : +r
}, jr = function(e, r, i) {
    var n = wn(r[1]), t = (n ? 2 : 1) + (e < 2 ? 0 : 1), o = r[t], s, l;
    if (n && (o.duration = r[1]),
    o.parent = i,
    e) {
        for (s = o,
        l = i; l && !("immediateRender"in s); )
            s = l.vars.defaults || {},
            l = Ct(l.vars.inherit) && l.parent;
        o.immediateRender = Ct(s.immediateRender),
        e < 2 ? o.runBackwards = 1 : o.startAt = r[t - 1]
    }
    return new Ge(r[0],o,r[t + 1])
}, $n = function(e, r) {
    return e || e === 0 ? r(e) : r
}, Di = function(e, r, i) {
    return i < e ? e : i > r ? r : i
}, ot = function(e, r) {
    return !Ze(e) || !(r = au.exec(e)) ? "" : r[1]
}, xu = function(e, r, i) {
    return $n(i, function(n) {
        return Di(e, r, n)
    })
}, Io = [].slice, Wa = function(e, r) {
    return e && fn(e) && "length"in e && (!r && !e.length || e.length - 1 in e && fn(e[0])) && !e.nodeType && e !== Ot
}, _u = function(e, r, i) {
    return i === void 0 && (i = []),
    e.forEach(function(n) {
        var t;
        return Ze(n) && !r || Wa(n, 1) ? (t = i).push.apply(t, zt(n)) : i.push(n)
    }) || i
}, zt = function(e, r, i) {
    return Ve && !r && Ve.selector ? Ve.selector(e) : Ze(e) && !i && (Bo || !Ar()) ? Io.call((r || is).querySelectorAll(e), 0) : at(e) ? _u(e, i) : Wa(e) ? Io.call(e, 0) : e ? [e] : []
}, zo = function(e) {
    return e = zt(e)[0] || Gi("Invalid scope") || {},
    function(r) {
        var i = e.current || e.nativeElement || e;
        return zt(r, i.querySelectorAll ? i : i === e ? Gi("Invalid scope") || is.createElement("div") : e)
    }
}, Ha = function(e) {
    return e.sort(function() {
        return .5 - Math.random()
    })
}, $a = function(e) {
    if (Ae(e))
        return e;
    var r = fn(e) ? e : {
        each: e
    }
      , i = tr(r.ease)
      , n = r.from || 0
      , t = parseFloat(r.base) || 0
      , o = {}
      , s = n > 0 && n < 1
      , l = isNaN(n) || s
      , f = r.axis
      , u = n
      , p = n;
    return Ze(n) ? u = p = {
        center: .5,
        edges: .5,
        end: 1
    }[n] || 0 : !s && l && (u = n[0],
    p = n[1]),
    function(c, a, d) {
        var h = (d || r).length, m = o[h], x, P, C, v, _, y, D, w, S;
        if (!m) {
            if (S = r.grid === "auto" ? 0 : (r.grid || [1, It])[1],
            !S) {
                for (D = -It; D < (D = d[S++].getBoundingClientRect().left) && S < h; )
                    ;
                S--
            }
            for (m = o[h] = [],
            x = l ? Math.min(S, h) * u - .5 : n % S,
            P = S === It ? 0 : l ? h * p / S - .5 : n / S | 0,
            D = 0,
            w = It,
            y = 0; y < h; y++)
                C = y % S - x,
                v = P - (y / S | 0),
                m[y] = _ = f ? Math.abs(f === "y" ? v : C) : wa(C * C + v * v),
                _ > D && (D = _),
                _ < w && (w = _);
            n === "random" && Ha(m),
            m.max = D - w,
            m.min = w,
            m.v = h = (parseFloat(r.amount) || parseFloat(r.each) * (S > h ? h - 1 : f ? f === "y" ? h / S : S : Math.max(S, h / S)) || 0) * (n === "edges" ? -1 : 1),
            m.b = h < 0 ? t - h : t,
            m.u = ot(r.amount || r.each) || 0,
            i = i && h < 0 ? Qa(i) : i
        }
        return h = (m[c] - m.min) / m.max || 0,
        et(m.b + (i ? i(h) : h) * m.v) + m.u
    }
}, No = function(e) {
    var r = Math.pow(10, ((e + "").split(".")[1] || "").length);
    return function(i) {
        var n = et(Math.round(parseFloat(i) / e) * e * r);
        return (n - n % 1) / r + (wn(i) ? 0 : ot(i))
    }
}, Ya = function(e, r) {
    var i = at(e), n, t;
    return !i && fn(e) && (n = i = e.radius || It,
    e.values ? (e = zt(e.values),
    (t = !wn(e[0])) && (n *= n)) : e = No(e.increment)),
    $n(r, i ? Ae(e) ? function(o) {
        return t = e(o),
        Math.abs(t - o) <= n ? t : o
    }
    : function(o) {
        for (var s = parseFloat(t ? o.x : o), l = parseFloat(t ? o.y : 0), f = It, u = 0, p = e.length, c, a; p--; )
            t ? (c = e[p].x - s,
            a = e[p].y - l,
            c = c * c + a * a) : c = Math.abs(e[p] - s),
            c < f && (f = c,
            u = p);
        return u = !n || f <= n ? e[u] : o,
        t || u === o || wn(o) ? u : u + ot(o)
    }
    : No(e))
}, Xa = function(e, r, i, n) {
    return $n(at(e) ? !r : i === !0 ? !!(i = 0) : !n, function() {
        return at(e) ? e[~~(Math.random() * e.length)] : (i = i || 1e-5) && (n = i < 1 ? Math.pow(10, (i + "").length - 2) : 1) && Math.floor(Math.round((e - i / 2 + Math.random() * (r - e + i * .99)) / i) * i * n) / n
    })
}, yu = function() {
    for (var e = arguments.length, r = new Array(e), i = 0; i < e; i++)
        r[i] = arguments[i];
    return function(n) {
        return r.reduce(function(t, o) {
            return o(t)
        }, n)
    }
}, Cu = function(e, r) {
    return function(i) {
        return e(parseFloat(i)) + (r || ot(i))
    }
}, wu = function(e, r, i) {
    return Ga(e, r, 0, 1, i)
}, Ua = function(e, r, i) {
    return $n(i, function(n) {
        return e[~~r(n)]
    })
}, Su = function g(e, r, i) {
    var n = r - e;
    return at(e) ? Ua(e, g(0, e.length), r) : $n(i, function(t) {
        return (n + (t - e) % n) % n + e
    })
}, Pu = function g(e, r, i) {
    var n = r - e
      , t = n * 2;
    return at(e) ? Ua(e, g(0, e.length - 1), r) : $n(i, function(o) {
        return o = (t + (o - e) % t) % t || 0,
        e + (o > n ? t - o : o)
    })
}, ui = function(e) {
    for (var r = 0, i = "", n, t, o, s; ~(n = e.indexOf("random(", r)); )
        o = e.indexOf(")", n),
        s = e.charAt(n + 7) === "[",
        t = e.substr(n + 7, o - n - 7).match(s ? Ta : ko),
        i += e.substr(r, n - r) + Xa(s ? t : +t[0], s ? 0 : +t[1], +t[2] || 1e-5),
        r = o + 1;
    return i + e.substr(r, e.length - r)
}, Ga = function(e, r, i, n, t) {
    var o = r - e
      , s = n - i;
    return $n(t, function(l) {
        return i + ((l - e) / o * s || 0)
    })
}, Eu = function g(e, r, i, n) {
    var t = isNaN(e + r) ? 0 : function(a) {
        return (1 - a) * e + a * r
    }
    ;
    if (!t) {
        var o = Ze(e), s = {}, l, f, u, p, c;
        if (i === !0 && (n = 1) && (i = null),
        o)
            e = {
                p: e
            },
            r = {
                p: r
            };
        else if (at(e) && !at(r)) {
            for (u = [],
            p = e.length,
            c = p - 2,
            f = 1; f < p; f++)
                u.push(g(e[f - 1], e[f]));
            p--,
            t = function(d) {
                d *= p;
                var h = Math.min(c, ~~d);
                return u[h](d - h)
            }
            ,
            i = r
        } else
            n || (e = ir(at(e) ? [] : {}, e));
        if (!u) {
            for (l in r)
                us.call(s, e, l, "get", r[l]);
            t = function(d) {
                return ds(d, s) || (o ? e.p : e)
            }
        }
    }
    return $n(i, t)
}, ks = function(e, r, i) {
    var n = e.labels, t = It, o, s, l;
    for (o in n)
        s = n[o] - r,
        s < 0 == !!i && s && t > (s = Math.abs(s)) && (l = o,
        t = s);
    return l
}, Nt = function(e, r, i) {
    var n = e.vars, t = n[r], o = Ve, s = e._ctx, l, f, u;
    if (!!t)
        return l = n[r + "Params"],
        f = n.callbackScope || e,
        i && Ln.length && qi(),
        s && (Ve = s),
        u = l ? t.apply(f, l) : t.call(f),
        Ve = o,
        u
}, Ur = function(e) {
    return Vn(e),
    e.scrollTrigger && e.scrollTrigger.kill(!!yt),
    e.progress() < 1 && Nt(e, "onInterrupt"),
    e
}, Dr, Fu = function(e) {
    e = !e.name && e.default || e;
    var r = e.name
      , i = Ae(e)
      , n = r && !i && e.init ? function() {
        this._props = []
    }
    : e
      , t = {
        init: li,
        render: ds,
        add: us,
        kill: $u,
        modifier: Hu,
        rawVars: 0
    }
      , o = {
        targetTest: 0,
        get: 0,
        getSetter: hs,
        aliases: {},
        register: 0
    };
    if (Ar(),
    e !== n) {
        if (Et[r])
            return;
        Wt(n, Wt(Ki(e, t), o)),
        ir(n.prototype, ir(t, Ki(e, o))),
        Et[n.prop = r] = n,
        e.targetTest && (Li.push(n),
        ss[r] = 1),
        r = (r === "css" ? "CSS" : r.charAt(0).toUpperCase() + r.substr(1)) + "Plugin"
    }
    Ma(r, n),
    e.register && e.register(pt, n, St)
}, De = 255, Gr = {
    aqua: [0, De, De],
    lime: [0, De, 0],
    silver: [192, 192, 192],
    black: [0, 0, 0],
    maroon: [128, 0, 0],
    teal: [0, 128, 128],
    blue: [0, 0, De],
    navy: [0, 0, 128],
    white: [De, De, De],
    olive: [128, 128, 0],
    yellow: [De, De, 0],
    orange: [De, 165, 0],
    gray: [128, 128, 128],
    purple: [128, 0, 128],
    green: [0, 128, 0],
    red: [De, 0, 0],
    pink: [De, 192, 203],
    cyan: [0, De, De],
    transparent: [De, De, De, 0]
}, co = function(e, r, i) {
    return e += e < 0 ? 1 : e > 1 ? -1 : 0,
    (e * 6 < 1 ? r + (i - r) * e * 6 : e < .5 ? i : e * 3 < 2 ? r + (i - r) * (2 / 3 - e) * 6 : r) * De + .5 | 0
}, qa = function(e, r, i) {
    var n = e ? wn(e) ? [e >> 16, e >> 8 & De, e & De] : 0 : Gr.black, t, o, s, l, f, u, p, c, a, d;
    if (!n) {
        if (e.substr(-1) === "," && (e = e.substr(0, e.length - 1)),
        Gr[e])
            n = Gr[e];
        else if (e.charAt(0) === "#") {
            if (e.length < 6 && (t = e.charAt(1),
            o = e.charAt(2),
            s = e.charAt(3),
            e = "#" + t + t + o + o + s + s + (e.length === 5 ? e.charAt(4) + e.charAt(4) : "")),
            e.length === 9)
                return n = parseInt(e.substr(1, 6), 16),
                [n >> 16, n >> 8 & De, n & De, parseInt(e.substr(7), 16) / 255];
            e = parseInt(e.substr(1), 16),
            n = [e >> 16, e >> 8 & De, e & De]
        } else if (e.substr(0, 3) === "hsl") {
            if (n = d = e.match(ko),
            !r)
                l = +n[0] % 360 / 360,
                f = +n[1] / 100,
                u = +n[2] / 100,
                o = u <= .5 ? u * (f + 1) : u + f - u * f,
                t = u * 2 - o,
                n.length > 3 && (n[3] *= 1),
                n[0] = co(l + 1 / 3, t, o),
                n[1] = co(l, t, o),
                n[2] = co(l - 1 / 3, t, o);
            else if (~e.indexOf("="))
                return n = e.match(Ea),
                i && n.length < 4 && (n[3] = 1),
                n
        } else
            n = e.match(ko) || Gr.transparent;
        n = n.map(Number)
    }
    return r && !d && (t = n[0] / De,
    o = n[1] / De,
    s = n[2] / De,
    p = Math.max(t, o, s),
    c = Math.min(t, o, s),
    u = (p + c) / 2,
    p === c ? l = f = 0 : (a = p - c,
    f = u > .5 ? a / (2 - p - c) : a / (p + c),
    l = p === t ? (o - s) / a + (o < s ? 6 : 0) : p === o ? (s - t) / a + 2 : (t - o) / a + 4,
    l *= 60),
    n[0] = ~~(l + .5),
    n[1] = ~~(f * 100 + .5),
    n[2] = ~~(u * 100 + .5)),
    i && n.length < 4 && (n[3] = 1),
    n
}, Ka = function(e) {
    var r = []
      , i = []
      , n = -1;
    return e.split(In).forEach(function(t) {
        var o = t.match(vr) || [];
        r.push.apply(r, o),
        i.push(n += o.length + 1)
    }),
    r.c = i,
    r
}, Bs = function(e, r, i) {
    var n = "", t = (e + n).match(In), o = r ? "hsla(" : "rgba(", s = 0, l, f, u, p;
    if (!t)
        return e;
    if (t = t.map(function(c) {
        return (c = qa(c, r, 1)) && o + (r ? c[0] + "," + c[1] + "%," + c[2] + "%," + c[3] : c.join(",")) + ")"
    }),
    i && (u = Ka(e),
    l = i.c,
    l.join(n) !== u.c.join(n)))
        for (f = e.replace(In, "1").split(vr),
        p = f.length - 1; s < p; s++)
            n += f[s] + (~l.indexOf(s) ? t.shift() || o + "0,0,0,0)" : (u.length ? u : t.length ? t : i).shift());
    if (!f)
        for (f = e.split(In),
        p = f.length - 1; s < p; s++)
            n += f[s] + t[s];
    return n + f[p]
}, In = function() {
    var g = "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b", e;
    for (e in Gr)
        g += "|" + e + "\\b";
    return new RegExp(g + ")","gi")
}(), Tu = /hsl[a]?\(/, Za = function(e) {
    var r = e.join(" "), i;
    if (In.lastIndex = 0,
    In.test(r))
        return i = Tu.test(r),
        e[1] = Bs(e[1], i),
        e[0] = Bs(e[0], i, Ka(e[1])),
        !0
}, fi, Ft = function() {
    var g = Date.now, e = 500, r = 33, i = g(), n = i, t = 1e3 / 240, o = t, s = [], l, f, u, p, c, a, d = function h(m) {
        var x = g() - n, P = m === !0, C, v, _, y;
        if (x > e && (i += x - r),
        n += x,
        _ = n - i,
        C = _ - o,
        (C > 0 || P) && (y = ++p.frame,
        c = _ - p.time * 1e3,
        p.time = _ = _ / 1e3,
        o += C + (C >= t ? 4 : t - C),
        v = 1),
        P || (l = f(h)),
        v)
            for (a = 0; a < s.length; a++)
                s[a](_, c, y, m)
    };
    return p = {
        time: 0,
        frame: 0,
        tick: function() {
            d(!0)
        },
        deltaRatio: function(m) {
            return c / (1e3 / (m || 60))
        },
        wake: function() {
            ba && (!Bo && Sa() && (Ot = Bo = window,
            is = Ot.document || {},
            Mt.gsap = pt,
            (Ot.gsapVersions || (Ot.gsapVersions = [])).push(pt.version),
            Aa(Ui || Ot.GreenSockGlobals || !Ot.gsap && Ot || {}),
            u = Ot.requestAnimationFrame),
            l && p.sleep(),
            f = u || function(m) {
                return setTimeout(m, o - p.time * 1e3 + 1 | 0)
            }
            ,
            fi = 1,
            d(2))
        },
        sleep: function() {
            (u ? Ot.cancelAnimationFrame : clearTimeout)(l),
            fi = 0,
            f = li
        },
        lagSmoothing: function(m, x) {
            e = m || 1 / ve,
            r = Math.min(x, e, 0)
        },
        fps: function(m) {
            t = 1e3 / (m || 240),
            o = p.time * 1e3 + t
        },
        add: function(m, x, P) {
            var C = x ? function(v, _, y, D) {
                m(v, _, y, D),
                p.remove(C)
            }
            : m;
            return p.remove(m),
            s[P ? "unshift" : "push"](C),
            Ar(),
            C
        },
        remove: function(m, x) {
            ~(x = s.indexOf(m)) && s.splice(x, 1) && a >= x && a--
        },
        _listeners: s
    },
    p
}(), Ar = function() {
    return !fi && Ft.wake()
}, ce = {}, bu = /^[\d.\-M][\d.\-,\s]/, Au = /["']/g, Mu = function(e) {
    for (var r = {}, i = e.substr(1, e.length - 3).split(":"), n = i[0], t = 1, o = i.length, s, l, f; t < o; t++)
        l = i[t],
        s = t !== o - 1 ? l.lastIndexOf(",") : l.length,
        f = l.substr(0, s),
        r[n] = isNaN(f) ? f.replace(Au, "").trim() : +f,
        n = l.substr(s + 1).trim();
    return r
}, ku = function(e) {
    var r = e.indexOf("(") + 1
      , i = e.indexOf(")")
      , n = e.indexOf("(", r);
    return e.substring(r, ~n && n < i ? e.indexOf(")", i + 1) : i)
}, Bu = function(e) {
    var r = (e + "").split("(")
      , i = ce[r[0]];
    return i && r.length > 1 && i.config ? i.config.apply(null, ~e.indexOf("{") ? [Mu(r[1])] : ku(e).split(",").map(Ra)) : ce._CE && bu.test(e) ? ce._CE("", e) : i
}, Qa = function(e) {
    return function(r) {
        return 1 - e(1 - r)
    }
}, Ja = function g(e, r) {
    for (var i = e._first, n; i; )
        i instanceof xt ? g(i, r) : i.vars.yoyoEase && (!i._yoyo || !i._repeat) && i._yoyo !== r && (i.timeline ? g(i.timeline, r) : (n = i._ease,
        i._ease = i._yEase,
        i._yEase = n,
        i._yoyo = r)),
        i = i._next
}, tr = function(e, r) {
    return e && (Ae(e) ? e : ce[e] || Bu(e)) || r
}, ur = function(e, r, i, n) {
    i === void 0 && (i = function(l) {
        return 1 - r(1 - l)
    }
    ),
    n === void 0 && (n = function(l) {
        return l < .5 ? r(l * 2) / 2 : 1 - r((1 - l) * 2) / 2
    }
    );
    var t = {
        easeIn: r,
        easeOut: i,
        easeInOut: n
    }, o;
    return wt(e, function(s) {
        ce[s] = Mt[s] = t,
        ce[o = s.toLowerCase()] = i;
        for (var l in t)
            ce[o + (l === "easeIn" ? ".in" : l === "easeOut" ? ".out" : ".inOut")] = ce[s + "." + l] = t[l]
    }),
    t
}, ja = function(e) {
    return function(r) {
        return r < .5 ? (1 - e(1 - r * 2)) / 2 : .5 + e((r - .5) * 2) / 2
    }
}, ho = function g(e, r, i) {
    var n = r >= 1 ? r : 1
      , t = (i || (e ? .3 : .45)) / (r < 1 ? r : 1)
      , o = t / Mo * (Math.asin(1 / n) || 0)
      , s = function(u) {
        return u === 1 ? 1 : n * Math.pow(2, -10 * u) * su((u - o) * t) + 1
    }
      , l = e === "out" ? s : e === "in" ? function(f) {
        return 1 - s(1 - f)
    }
    : ja(s);
    return t = Mo / t,
    l.config = function(f, u) {
        return g(e, f, u)
    }
    ,
    l
}, po = function g(e, r) {
    r === void 0 && (r = 1.70158);
    var i = function(o) {
        return o ? --o * o * ((r + 1) * o + r) + 1 : 0
    }
      , n = e === "out" ? i : e === "in" ? function(t) {
        return 1 - i(1 - t)
    }
    : ja(i);
    return n.config = function(t) {
        return g(e, t)
    }
    ,
    n
};
wt("Linear,Quad,Cubic,Quart,Quint,Strong", function(g, e) {
    var r = e < 5 ? e + 1 : e;
    ur(g + ",Power" + (r - 1), e ? function(i) {
        return Math.pow(i, r)
    }
    : function(i) {
        return i
    }
    , function(i) {
        return 1 - Math.pow(1 - i, r)
    }, function(i) {
        return i < .5 ? Math.pow(i * 2, r) / 2 : 1 - Math.pow((1 - i) * 2, r) / 2
    })
});
ce.Linear.easeNone = ce.none = ce.Linear.easeIn;
ur("Elastic", ho("in"), ho("out"), ho());
(function(g, e) {
    var r = 1 / e
      , i = 2 * r
      , n = 2.5 * r
      , t = function(s) {
        return s < r ? g * s * s : s < i ? g * Math.pow(s - 1.5 / e, 2) + .75 : s < n ? g * (s -= 2.25 / e) * s + .9375 : g * Math.pow(s - 2.625 / e, 2) + .984375
    };
    ur("Bounce", function(o) {
        return 1 - t(1 - o)
    }, t)
}
)(7.5625, 2.75);
ur("Expo", function(g) {
    return g ? Math.pow(2, 10 * (g - 1)) : 0
});
ur("Circ", function(g) {
    return -(wa(1 - g * g) - 1)
});
ur("Sine", function(g) {
    return g === 1 ? 1 : -ou(g * ru) + 1
});
ur("Back", po("in"), po("out"), po());
ce.SteppedEase = ce.steps = Mt.SteppedEase = {
    config: function(e, r) {
        e === void 0 && (e = 1);
        var i = 1 / e
          , n = e + (r ? 0 : 1)
          , t = r ? 1 : 0
          , o = 1 - ve;
        return function(s) {
            return ((n * Di(0, o, s) | 0) + t) * i
        }
    }
};
Fr.ease = ce["quad.out"];
wt("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt", function(g) {
    return as += g + "," + g + "Params,"
});
var el = function(e, r) {
    this.id = iu++,
    e._gsap = this,
    this.target = e,
    this.harness = r,
    this.get = r ? r.get : Ba,
    this.set = r ? r.getSetter : hs
}
  , Mr = function() {
    function g(r) {
        this.vars = r,
        this._delay = +r.delay || 0,
        (this._repeat = r.repeat === 1 / 0 ? -2 : r.repeat || 0) && (this._rDelay = r.repeatDelay || 0,
        this._yoyo = !!r.yoyo || !!r.yoyoEase),
        this._ts = 1,
        br(this, +r.duration, 1, 1),
        this.data = r.data,
        Ve && (this._ctx = Ve,
        Ve.data.push(this)),
        fi || Ft.wake()
    }
    var e = g.prototype;
    return e.delay = function(i) {
        return i || i === 0 ? (this.parent && this.parent.smoothChildTiming && this.startTime(this._start + i - this._delay),
        this._delay = i,
        this) : this._delay
    }
    ,
    e.duration = function(i) {
        return arguments.length ? this.totalDuration(this._repeat > 0 ? i + (i + this._rDelay) * this._repeat : i) : this.totalDuration() && this._dur
    }
    ,
    e.totalDuration = function(i) {
        return arguments.length ? (this._dirty = 0,
        br(this, this._repeat < 0 ? i : (i - this._repeat * this._rDelay) / (this._repeat + 1))) : this._tDur
    }
    ,
    e.totalTime = function(i, n) {
        if (Ar(),
        !arguments.length)
            return this._tTime;
        var t = this._dp;
        if (t && t.smoothChildTiming && this._ts) {
            for (so(this, i),
            !t._dp || t.parent || za(t, this); t && t.parent; )
                t.parent._time !== t._start + (t._ts >= 0 ? t._tTime / t._ts : (t.totalDuration() - t._tTime) / -t._ts) && t.totalTime(t._tTime, !0),
                t = t.parent;
            !this.parent && this._dp.autoRemoveChildren && (this._ts > 0 && i < this._tDur || this._ts < 0 && i > 0 || !this._tDur && !i) && rn(this._dp, this, this._start - this._delay)
        }
        return (this._tTime !== i || !this._dur && !n || this._initted && Math.abs(this._zTime) === ve || !i && !this._initted && (this.add || this._ptLookup)) && (this._ts || (this._pTime = i),
        Oa(this, i, n)),
        this
    }
    ,
    e.time = function(i, n) {
        return arguments.length ? this.totalTime(Math.min(this.totalDuration(), i + As(this)) % (this._dur + this._rDelay) || (i ? this._dur : 0), n) : this._time
    }
    ,
    e.totalProgress = function(i, n) {
        return arguments.length ? this.totalTime(this.totalDuration() * i, n) : this.totalDuration() ? Math.min(1, this._tTime / this._tDur) : this.ratio
    }
    ,
    e.progress = function(i, n) {
        return arguments.length ? this.totalTime(this.duration() * (this._yoyo && !(this.iteration() & 1) ? 1 - i : i) + As(this), n) : this.duration() ? Math.min(1, this._time / this._dur) : this.ratio
    }
    ,
    e.iteration = function(i, n) {
        var t = this.duration() + this._rDelay;
        return arguments.length ? this.totalTime(this._time + (i - 1) * t, n) : this._repeat ? Tr(this._tTime, t) + 1 : 1
    }
    ,
    e.timeScale = function(i) {
        if (!arguments.length)
            return this._rts === -ve ? 0 : this._rts;
        if (this._rts === i)
            return this;
        var n = this.parent && this._ts ? Zi(this.parent._time, this) : this._tTime;
        return this._rts = +i || 0,
        this._ts = this._ps || i === -ve ? 0 : this._rts,
        this.totalTime(Di(-this._delay, this._tDur, n), !0),
        oo(this),
        du(this)
    }
    ,
    e.paused = function(i) {
        return arguments.length ? (this._ps !== i && (this._ps = i,
        i ? (this._pTime = this._tTime || Math.max(-this._delay, this.rawTime()),
        this._ts = this._act = 0) : (Ar(),
        this._ts = this._rts,
        this.totalTime(this.parent && !this.parent.smoothChildTiming ? this.rawTime() : this._tTime || this._pTime, this.progress() === 1 && Math.abs(this._zTime) !== ve && (this._tTime -= ve)))),
        this) : this._ps
    }
    ,
    e.startTime = function(i) {
        if (arguments.length) {
            this._start = i;
            var n = this.parent || this._dp;
            return n && (n._sort || !this.parent) && rn(n, this, i - this._delay),
            this
        }
        return this._start
    }
    ,
    e.endTime = function(i) {
        return this._start + (Ct(i) ? this.totalDuration() : this.duration()) / Math.abs(this._ts || 1)
    }
    ,
    e.rawTime = function(i) {
        var n = this.parent || this._dp;
        return n ? i && (!this._ts || this._repeat && this._time && this.totalProgress() < 1) ? this._tTime % (this._dur + this._rDelay) : this._ts ? Zi(n.rawTime(i), this) : this._tTime : this._tTime
    }
    ,
    e.revert = function(i) {
        i === void 0 && (i = uu);
        var n = yt;
        return yt = i,
        (this._initted || this._startAt) && (this.timeline && this.timeline.revert(i),
        this.totalTime(-.01, i.suppressEvents)),
        this.data !== "nested" && i.kill !== !1 && this.kill(),
        yt = n,
        this
    }
    ,
    e.globalTime = function(i) {
        for (var n = this, t = arguments.length ? i : n.rawTime(); n; )
            t = n._start + t / (n._ts || 1),
            n = n._dp;
        return !this.parent && this.vars.immediateRender ? -1 : t
    }
    ,
    e.repeat = function(i) {
        return arguments.length ? (this._repeat = i === 1 / 0 ? -2 : i,
        Ms(this)) : this._repeat === -2 ? 1 / 0 : this._repeat
    }
    ,
    e.repeatDelay = function(i) {
        if (arguments.length) {
            var n = this._time;
            return this._rDelay = i,
            Ms(this),
            n ? this.time(n) : this
        }
        return this._rDelay
    }
    ,
    e.yoyo = function(i) {
        return arguments.length ? (this._yoyo = i,
        this) : this._yoyo
    }
    ,
    e.seek = function(i, n) {
        return this.totalTime(Bt(this, i), Ct(n))
    }
    ,
    e.restart = function(i, n) {
        return this.play().totalTime(i ? -this._delay : 0, Ct(n))
    }
    ,
    e.play = function(i, n) {
        return i != null && this.seek(i, n),
        this.reversed(!1).paused(!1)
    }
    ,
    e.reverse = function(i, n) {
        return i != null && this.seek(i || this.totalDuration(), n),
        this.reversed(!0).paused(!1)
    }
    ,
    e.pause = function(i, n) {
        return i != null && this.seek(i, n),
        this.paused(!0)
    }
    ,
    e.resume = function() {
        return this.paused(!1)
    }
    ,
    e.reversed = function(i) {
        return arguments.length ? (!!i !== this.reversed() && this.timeScale(-this._rts || (i ? -ve : 0)),
        this) : this._rts < 0
    }
    ,
    e.invalidate = function() {
        return this._initted = this._act = 0,
        this._zTime = -ve,
        this
    }
    ,
    e.isActive = function() {
        var i = this.parent || this._dp, n = this._start, t;
        return !!(!i || this._ts && this._initted && i.isActive() && (t = i.rawTime(!0)) >= n && t < this.endTime(!0) - ve)
    }
    ,
    e.eventCallback = function(i, n, t) {
        var o = this.vars;
        return arguments.length > 1 ? (n ? (o[i] = n,
        t && (o[i + "Params"] = t),
        i === "onUpdate" && (this._onUpdate = n)) : delete o[i],
        this) : o[i]
    }
    ,
    e.then = function(i) {
        var n = this;
        return new Promise(function(t) {
            var o = Ae(i) ? i : La
              , s = function() {
                var f = n.then;
                n.then = null,
                Ae(o) && (o = o(n)) && (o.then || o === n) && (n.then = f),
                t(o),
                n.then = f
            };
            n._initted && n.totalProgress() === 1 && n._ts >= 0 || !n._tTime && n._ts < 0 ? s() : n._prom = s
        }
        )
    }
    ,
    e.kill = function() {
        Ur(this)
    }
    ,
    g
}();
Wt(Mr.prototype, {
    _time: 0,
    _start: 0,
    _end: 0,
    _tTime: 0,
    _tDur: 0,
    _dirty: 0,
    _repeat: 0,
    _yoyo: !1,
    parent: null,
    _initted: !1,
    _rDelay: 0,
    _ts: 1,
    _dp: 0,
    ratio: 0,
    _zTime: -ve,
    _prom: 0,
    _ps: !1,
    _rts: 1
});
var xt = function(g) {
    Ca(e, g);
    function e(i, n) {
        var t;
        return i === void 0 && (i = {}),
        t = g.call(this, i) || this,
        t.labels = {},
        t.smoothChildTiming = !!i.smoothChildTiming,
        t.autoRemoveChildren = !!i.autoRemoveChildren,
        t._sort = Ct(i.sortChildren),
        ye && rn(i.parent || ye, mn(t), n),
        i.reversed && t.reverse(),
        i.paused && t.paused(!0),
        i.scrollTrigger && Na(mn(t), i.scrollTrigger),
        t
    }
    var r = e.prototype;
    return r.to = function(n, t, o) {
        return jr(0, arguments, this),
        this
    }
    ,
    r.from = function(n, t, o) {
        return jr(1, arguments, this),
        this
    }
    ,
    r.fromTo = function(n, t, o, s) {
        return jr(2, arguments, this),
        this
    }
    ,
    r.set = function(n, t, o) {
        return t.duration = 0,
        t.parent = this,
        Jr(t).repeatDelay || (t.repeat = 0),
        t.immediateRender = !!t.immediateRender,
        new Ge(n,t,Bt(this, o),1),
        this
    }
    ,
    r.call = function(n, t, o) {
        return rn(this, Ge.delayedCall(0, n, t), o)
    }
    ,
    r.staggerTo = function(n, t, o, s, l, f, u) {
        return o.duration = t,
        o.stagger = o.stagger || s,
        o.onComplete = f,
        o.onCompleteParams = u,
        o.parent = this,
        new Ge(n,o,Bt(this, l)),
        this
    }
    ,
    r.staggerFrom = function(n, t, o, s, l, f, u) {
        return o.runBackwards = 1,
        Jr(o).immediateRender = Ct(o.immediateRender),
        this.staggerTo(n, t, o, s, l, f, u)
    }
    ,
    r.staggerFromTo = function(n, t, o, s, l, f, u, p) {
        return s.startAt = o,
        Jr(s).immediateRender = Ct(s.immediateRender),
        this.staggerTo(n, t, s, l, f, u, p)
    }
    ,
    r.render = function(n, t, o) {
        var s = this._time, l = this._dirty ? this.totalDuration() : this._tDur, f = this._dur, u = n <= 0 ? 0 : et(n), p = this._zTime < 0 != n < 0 && (this._initted || !f), c, a, d, h, m, x, P, C, v, _, y, D;
        if (this !== ye && u > l && n >= 0 && (u = l),
        u !== this._tTime || o || p) {
            if (s !== this._time && f && (u += this._time - s,
            n += this._time - s),
            c = u,
            v = this._start,
            C = this._ts,
            x = !C,
            p && (f || (s = this._zTime),
            (n || !t) && (this._zTime = n)),
            this._repeat) {
                if (y = this._yoyo,
                m = f + this._rDelay,
                this._repeat < -1 && n < 0)
                    return this.totalTime(m * 100 + n, t, o);
                if (c = et(u % m),
                u === l ? (h = this._repeat,
                c = f) : (h = ~~(u / m),
                h && h === u / m && (c = f,
                h--),
                c > f && (c = f)),
                _ = Tr(this._tTime, m),
                !s && this._tTime && _ !== h && (_ = h),
                y && h & 1 && (c = f - c,
                D = 1),
                h !== _ && !this._lock) {
                    var w = y && _ & 1
                      , S = w === (y && h & 1);
                    if (h < _ && (w = !w),
                    s = w ? 0 : f,
                    this._lock = 1,
                    this.render(s || (D ? 0 : et(h * m)), t, !f)._lock = 0,
                    this._tTime = u,
                    !t && this.parent && Nt(this, "onRepeat"),
                    this.vars.repeatRefresh && !D && (this.invalidate()._lock = 1),
                    s && s !== this._time || x !== !this._ts || this.vars.onRepeat && !this.parent && !this._act)
                        return this;
                    if (f = this._dur,
                    l = this._tDur,
                    S && (this._lock = 2,
                    s = w ? f : -1e-4,
                    this.render(s, !0),
                    this.vars.repeatRefresh && !D && this.invalidate()),
                    this._lock = 0,
                    !this._ts && !x)
                        return this;
                    Ja(this, D)
                }
            }
            if (this._hasPause && !this._forcing && this._lock < 2 && (P = vu(this, et(s), et(c)),
            P && (u -= c - (c = P._start))),
            this._tTime = u,
            this._time = c,
            this._act = !C,
            this._initted || (this._onUpdate = this.vars.onUpdate,
            this._initted = 1,
            this._zTime = n,
            s = 0),
            !s && c && !t && (Nt(this, "onStart"),
            this._tTime !== u))
                return this;
            if (c >= s && n >= 0)
                for (a = this._first; a; ) {
                    if (d = a._next,
                    (a._act || c >= a._start) && a._ts && P !== a) {
                        if (a.parent !== this)
                            return this.render(n, t, o);
                        if (a.render(a._ts > 0 ? (c - a._start) * a._ts : (a._dirty ? a.totalDuration() : a._tDur) + (c - a._start) * a._ts, t, o),
                        c !== this._time || !this._ts && !x) {
                            P = 0,
                            d && (u += this._zTime = -ve);
                            break
                        }
                    }
                    a = d
                }
            else {
                a = this._last;
                for (var F = n < 0 ? n : c; a; ) {
                    if (d = a._prev,
                    (a._act || F <= a._end) && a._ts && P !== a) {
                        if (a.parent !== this)
                            return this.render(n, t, o);
                        if (a.render(a._ts > 0 ? (F - a._start) * a._ts : (a._dirty ? a.totalDuration() : a._tDur) + (F - a._start) * a._ts, t, o || yt && (a._initted || a._startAt)),
                        c !== this._time || !this._ts && !x) {
                            P = 0,
                            d && (u += this._zTime = F ? -ve : ve);
                            break
                        }
                    }
                    a = d
                }
            }
            if (P && !t && (this.pause(),
            P.render(c >= s ? 0 : -ve)._zTime = c >= s ? 1 : -1,
            this._ts))
                return this._start = v,
                oo(this),
                this.render(n, t, o);
            this._onUpdate && !t && Nt(this, "onUpdate", !0),
            (u === l && this._tTime >= this.totalDuration() || !u && s) && (v === this._start || Math.abs(C) !== Math.abs(this._ts)) && (this._lock || ((n || !f) && (u === l && this._ts > 0 || !u && this._ts < 0) && Vn(this, 1),
            !t && !(n < 0 && !s) && (u || s || !l) && (Nt(this, u === l && n >= 0 ? "onComplete" : "onReverseComplete", !0),
            this._prom && !(u < l && this.timeScale() > 0) && this._prom())))
        }
        return this
    }
    ,
    r.add = function(n, t) {
        var o = this;
        if (wn(t) || (t = Bt(this, t, n)),
        !(n instanceof Mr)) {
            if (at(n))
                return n.forEach(function(s) {
                    return o.add(s, t)
                }),
                this;
            if (Ze(n))
                return this.addLabel(n, t);
            if (Ae(n))
                n = Ge.delayedCall(0, n);
            else
                return this
        }
        return this !== n ? rn(this, n, t) : this
    }
    ,
    r.getChildren = function(n, t, o, s) {
        n === void 0 && (n = !0),
        t === void 0 && (t = !0),
        o === void 0 && (o = !0),
        s === void 0 && (s = -It);
        for (var l = [], f = this._first; f; )
            f._start >= s && (f instanceof Ge ? t && l.push(f) : (o && l.push(f),
            n && l.push.apply(l, f.getChildren(!0, t, o)))),
            f = f._next;
        return l
    }
    ,
    r.getById = function(n) {
        for (var t = this.getChildren(1, 1, 1), o = t.length; o--; )
            if (t[o].vars.id === n)
                return t[o]
    }
    ,
    r.remove = function(n) {
        return Ze(n) ? this.removeLabel(n) : Ae(n) ? this.killTweensOf(n) : (io(this, n),
        n === this._recent && (this._recent = this._last),
        er(this))
    }
    ,
    r.totalTime = function(n, t) {
        return arguments.length ? (this._forcing = 1,
        !this._dp && this._ts && (this._start = et(Ft.time - (this._ts > 0 ? n / this._ts : (this.totalDuration() - n) / -this._ts))),
        g.prototype.totalTime.call(this, n, t),
        this._forcing = 0,
        this) : this._tTime
    }
    ,
    r.addLabel = function(n, t) {
        return this.labels[n] = Bt(this, t),
        this
    }
    ,
    r.removeLabel = function(n) {
        return delete this.labels[n],
        this
    }
    ,
    r.addPause = function(n, t, o) {
        var s = Ge.delayedCall(0, t || li, o);
        return s.data = "isPause",
        this._hasPause = 1,
        rn(this, s, Bt(this, n))
    }
    ,
    r.removePause = function(n) {
        var t = this._first;
        for (n = Bt(this, n); t; )
            t._start === n && t.data === "isPause" && Vn(t),
            t = t._next
    }
    ,
    r.killTweensOf = function(n, t, o) {
        for (var s = this.getTweensOf(n, o), l = s.length; l--; )
            bn !== s[l] && s[l].kill(n, t);
        return this
    }
    ,
    r.getTweensOf = function(n, t) {
        for (var o = [], s = zt(n), l = this._first, f = wn(t), u; l; )
            l instanceof Ge ? fu(l._targets, s) && (f ? (!bn || l._initted && l._ts) && l.globalTime(0) <= t && l.globalTime(l.totalDuration()) > t : !t || l.isActive()) && o.push(l) : (u = l.getTweensOf(s, t)).length && o.push.apply(o, u),
            l = l._next;
        return o
    }
    ,
    r.tweenTo = function(n, t) {
        t = t || {};
        var o = this, s = Bt(o, n), l = t, f = l.startAt, u = l.onStart, p = l.onStartParams, c = l.immediateRender, a, d = Ge.to(o, Wt({
            ease: t.ease || "none",
            lazy: !1,
            immediateRender: !1,
            time: s,
            overwrite: "auto",
            duration: t.duration || Math.abs((s - (f && "time"in f ? f.time : o._time)) / o.timeScale()) || ve,
            onStart: function() {
                if (o.pause(),
                !a) {
                    var m = t.duration || Math.abs((s - (f && "time"in f ? f.time : o._time)) / o.timeScale());
                    d._dur !== m && br(d, m, 0, 1).render(d._time, !0, !0),
                    a = 1
                }
                u && u.apply(d, p || [])
            }
        }, t));
        return c ? d.render(0) : d
    }
    ,
    r.tweenFromTo = function(n, t, o) {
        return this.tweenTo(t, Wt({
            startAt: {
                time: Bt(this, n)
            }
        }, o))
    }
    ,
    r.recent = function() {
        return this._recent
    }
    ,
    r.nextLabel = function(n) {
        return n === void 0 && (n = this._time),
        ks(this, Bt(this, n))
    }
    ,
    r.previousLabel = function(n) {
        return n === void 0 && (n = this._time),
        ks(this, Bt(this, n), 1)
    }
    ,
    r.currentLabel = function(n) {
        return arguments.length ? this.seek(n, !0) : this.previousLabel(this._time + ve)
    }
    ,
    r.shiftChildren = function(n, t, o) {
        o === void 0 && (o = 0);
        for (var s = this._first, l = this.labels, f; s; )
            s._start >= o && (s._start += n,
            s._end += n),
            s = s._next;
        if (t)
            for (f in l)
                l[f] >= o && (l[f] += n);
        return er(this)
    }
    ,
    r.invalidate = function(n) {
        var t = this._first;
        for (this._lock = 0; t; )
            t.invalidate(n),
            t = t._next;
        return g.prototype.invalidate.call(this, n)
    }
    ,
    r.clear = function(n) {
        n === void 0 && (n = !0);
        for (var t = this._first, o; t; )
            o = t._next,
            this.remove(t),
            t = o;
        return this._dp && (this._time = this._tTime = this._pTime = 0),
        n && (this.labels = {}),
        er(this)
    }
    ,
    r.totalDuration = function(n) {
        var t = 0, o = this, s = o._last, l = It, f, u, p;
        if (arguments.length)
            return o.timeScale((o._repeat < 0 ? o.duration() : o.totalDuration()) / (o.reversed() ? -n : n));
        if (o._dirty) {
            for (p = o.parent; s; )
                f = s._prev,
                s._dirty && s.totalDuration(),
                u = s._start,
                u > l && o._sort && s._ts && !o._lock ? (o._lock = 1,
                rn(o, s, u - s._delay, 1)._lock = 0) : l = u,
                u < 0 && s._ts && (t -= u,
                (!p && !o._dp || p && p.smoothChildTiming) && (o._start += u / o._ts,
                o._time -= u,
                o._tTime -= u),
                o.shiftChildren(-u, !1, -1 / 0),
                l = 0),
                s._end > t && s._ts && (t = s._end),
                s = f;
            br(o, o === ye && o._time > t ? o._time : t, 1, 1),
            o._dirty = 0
        }
        return o._tDur
    }
    ,
    e.updateRoot = function(n) {
        if (ye._ts && (Oa(ye, Zi(n, ye)),
        ka = Ft.frame),
        Ft.frame >= Ts) {
            Ts += At.autoSleep || 120;
            var t = ye._first;
            if ((!t || !t._ts) && At.autoSleep && Ft._listeners.length < 2) {
                for (; t && !t._ts; )
                    t = t._next;
                t || Ft.sleep()
            }
        }
    }
    ,
    e
}(Mr);
Wt(xt.prototype, {
    _lock: 0,
    _hasPause: 0,
    _forcing: 0
});
var Ou = function(e, r, i, n, t, o, s) {
    var l = new St(this._pt,e,r,0,1,sl,null,t), f = 0, u = 0, p, c, a, d, h, m, x, P;
    for (l.b = i,
    l.e = n,
    i += "",
    n += "",
    (x = ~n.indexOf("random(")) && (n = ui(n)),
    o && (P = [i, n],
    o(P, e, r),
    i = P[0],
    n = P[1]),
    c = i.match(uo) || []; p = uo.exec(n); )
        d = p[0],
        h = n.substring(f, p.index),
        a ? a = (a + 1) % 5 : h.substr(-5) === "rgba(" && (a = 1),
        d !== c[u++] && (m = parseFloat(c[u - 1]) || 0,
        l._pt = {
            _next: l._pt,
            p: h || u === 1 ? h : ",",
            s: m,
            c: d.charAt(1) === "=" ? wr(m, d) - m : parseFloat(d) - m,
            m: a && a < 4 ? Math.round : 0
        },
        f = uo.lastIndex);
    return l.c = f < n.length ? n.substring(f, n.length) : "",
    l.fp = s,
    (Fa.test(n) || x) && (l.e = 0),
    this._pt = l,
    l
}, us = function(e, r, i, n, t, o, s, l, f, u) {
    Ae(n) && (n = n(t || 0, e, o));
    var p = e[r], c = i !== "get" ? i : Ae(p) ? f ? e[r.indexOf("set") || !Ae(e["get" + r.substr(3)]) ? r : "get" + r.substr(3)](f) : e[r]() : p, a = Ae(p) ? f ? Nu : il : cs, d;
    if (Ze(n) && (~n.indexOf("random(") && (n = ui(n)),
    n.charAt(1) === "=" && (d = wr(c, n) + (ot(c) || 0),
    (d || d === 0) && (n = d))),
    !u || c !== n || Vo)
        return !isNaN(c * n) && n !== "" ? (d = new St(this._pt,e,r,+c || 0,n - (c || 0),typeof p == "boolean" ? Wu : ol,0,a),
        f && (d.fp = f),
        s && d.modifier(s, this, e),
        this._pt = d) : (!p && !(r in e) && os(r, n),
        Ou.call(this, e, r, c, n, a, l || At.stringFilter, f))
}, Ru = function(e, r, i, n, t) {
    if (Ae(e) && (e = ei(e, t, r, i, n)),
    !fn(e) || e.style && e.nodeType || at(e) || Pa(e))
        return Ze(e) ? ei(e, t, r, i, n) : e;
    var o = {}, s;
    for (s in e)
        o[s] = ei(e[s], t, r, i, n);
    return o
}, tl = function(e, r, i, n, t, o) {
    var s, l, f, u;
    if (Et[e] && (s = new Et[e]).init(t, s.rawVars ? r[e] : Ru(r[e], n, t, o, i), i, n, o) !== !1 && (i._pt = l = new St(i._pt,t,e,0,1,s.render,s,0,s.priority),
    i !== Dr))
        for (f = i._ptLookup[i._targets.indexOf(t)],
        u = s._props.length; u--; )
            f[s._props[u]] = l;
    return s
}, bn, Vo, fs = function g(e, r, i) {
    var n = e.vars, t = n.ease, o = n.startAt, s = n.immediateRender, l = n.lazy, f = n.onUpdate, u = n.onUpdateParams, p = n.callbackScope, c = n.runBackwards, a = n.yoyoEase, d = n.keyframes, h = n.autoRevert, m = e._dur, x = e._startAt, P = e._targets, C = e.parent, v = C && C.data === "nested" ? C.vars.targets : P, _ = e._overwrite === "auto" && !ns, y = e.timeline, D, w, S, F, E, T, k, O, R, B, I, V, M;
    if (y && (!d || !t) && (t = "none"),
    e._ease = tr(t, Fr.ease),
    e._yEase = a ? Qa(tr(a === !0 ? t : a, Fr.ease)) : 0,
    a && e._yoyo && !e._repeat && (a = e._yEase,
    e._yEase = e._ease,
    e._ease = a),
    e._from = !y && !!n.runBackwards,
    !y || d && !n.stagger) {
        if (O = P[0] ? jn(P[0]).harness : 0,
        V = O && n[O.prop],
        D = Ki(n, ss),
        x && (x._zTime < 0 && x.progress(1),
        r < 0 && c && s && !h ? x.render(-1, !0) : x.revert(c && m ? Ri : lu),
        x._lazy = 0),
        o) {
            if (Vn(e._startAt = Ge.set(P, Wt({
                data: "isStart",
                overwrite: !1,
                parent: C,
                immediateRender: !0,
                lazy: Ct(l),
                startAt: null,
                delay: 0,
                onUpdate: f,
                onUpdateParams: u,
                callbackScope: p,
                stagger: 0
            }, o))),
            r < 0 && (yt || !s && !h) && e._startAt.revert(Ri),
            s && m && r <= 0 && i <= 0) {
                r && (e._zTime = r);
                return
            }
        } else if (c && m && !x) {
            if (r && (s = !1),
            S = Wt({
                overwrite: !1,
                data: "isFromStart",
                lazy: s && Ct(l),
                immediateRender: s,
                stagger: 0,
                parent: C
            }, D),
            V && (S[O.prop] = V),
            Vn(e._startAt = Ge.set(P, S)),
            r < 0 && (yt ? e._startAt.revert(Ri) : e._startAt.render(-1, !0)),
            e._zTime = r,
            !s)
                g(e._startAt, ve, ve);
            else if (!r)
                return
        }
        for (e._pt = e._ptCache = 0,
        l = m && Ct(l) || l && !m,
        w = 0; w < P.length; w++) {
            if (E = P[w],
            k = E._gsap || ls(P)[w]._gsap,
            e._ptLookup[w] = B = {},
            Oo[k.id] && Ln.length && qi(),
            I = v === P ? w : v.indexOf(E),
            O && (R = new O).init(E, V || D, e, I, v) !== !1 && (e._pt = F = new St(e._pt,E,R.name,0,1,R.render,R,0,R.priority),
            R._props.forEach(function(b) {
                B[b] = F
            }),
            R.priority && (T = 1)),
            !O || V)
                for (S in D)
                    Et[S] && (R = tl(S, D, e, I, E, v)) ? R.priority && (T = 1) : B[S] = F = us.call(e, E, S, "get", D[S], I, v, 0, n.stringFilter);
            e._op && e._op[w] && e.kill(E, e._op[w]),
            _ && e._pt && (bn = e,
            ye.killTweensOf(E, B, e.globalTime(r)),
            M = !e.parent,
            bn = 0),
            e._pt && l && (Oo[k.id] = 1)
        }
        T && al(e),
        e._onInit && e._onInit(e)
    }
    e._onUpdate = f,
    e._initted = (!e._op || e._pt) && !M,
    d && r <= 0 && y.render(It, !0, !0)
}, Lu = function(e, r, i, n, t, o, s) {
    var l = (e._pt && e._ptCache || (e._ptCache = {}))[r], f, u, p, c;
    if (!l)
        for (l = e._ptCache[r] = [],
        p = e._ptLookup,
        c = e._targets.length; c--; ) {
            if (f = p[c][r],
            f && f.d && f.d._pt)
                for (f = f.d._pt; f && f.p !== r && f.fp !== r; )
                    f = f._next;
            if (!f)
                return Vo = 1,
                e.vars[r] = "+=0",
                fs(e, s),
                Vo = 0,
                1;
            l.push(f)
        }
    for (c = l.length; c--; )
        u = l[c],
        f = u._pt || u,
        f.s = (n || n === 0) && !t ? n : f.s + (n || 0) + o * f.c,
        f.c = i - f.s,
        u.e && (u.e = Be(i) + ot(u.e)),
        u.b && (u.b = f.s + ot(u.b))
}, Iu = function(e, r) {
    var i = e[0] ? jn(e[0]).harness : 0, n = i && i.aliases, t, o, s, l;
    if (!n)
        return r;
    t = ir({}, r);
    for (o in n)
        if (o in t)
            for (l = n[o].split(","),
            s = l.length; s--; )
                t[l[s]] = t[o];
    return t
}, zu = function(e, r, i, n) {
    var t = r.ease || n || "power1.inOut", o, s;
    if (at(r))
        s = i[e] || (i[e] = []),
        r.forEach(function(l, f) {
            return s.push({
                t: f / (r.length - 1) * 100,
                v: l,
                e: t
            })
        });
    else
        for (o in r)
            s = i[o] || (i[o] = []),
            o === "ease" || s.push({
                t: parseFloat(e),
                v: r[o],
                e: t
            })
}, ei = function(e, r, i, n, t) {
    return Ae(e) ? e.call(r, i, n, t) : Ze(e) && ~e.indexOf("random(") ? ui(e) : e
}, nl = as + "repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert", rl = {};
wt(nl + ",id,stagger,delay,duration,paused,scrollTrigger", function(g) {
    return rl[g] = 1
});
var Ge = function(g) {
    Ca(e, g);
    function e(i, n, t, o) {
        var s;
        typeof n == "number" && (t.duration = n,
        n = t,
        t = null),
        s = g.call(this, o ? n : Jr(n)) || this;
        var l = s.vars, f = l.duration, u = l.delay, p = l.immediateRender, c = l.stagger, a = l.overwrite, d = l.keyframes, h = l.defaults, m = l.scrollTrigger, x = l.yoyoEase, P = n.parent || ye, C = (at(i) || Pa(i) ? wn(i[0]) : "length"in n) ? [i] : zt(i), v, _, y, D, w, S, F, E;
        if (s._targets = C.length ? ls(C) : Gi("GSAP target " + i + " not found. https://greensock.com", !At.nullTargetWarn) || [],
        s._ptLookup = [],
        s._overwrite = a,
        d || c || _i(f) || _i(u)) {
            if (n = s.vars,
            v = s.timeline = new xt({
                data: "nested",
                defaults: h || {},
                targets: P && P.data === "nested" ? P.vars.targets : C
            }),
            v.kill(),
            v.parent = v._dp = mn(s),
            v._start = 0,
            c || _i(f) || _i(u)) {
                if (D = C.length,
                F = c && $a(c),
                fn(c))
                    for (w in c)
                        ~nl.indexOf(w) && (E || (E = {}),
                        E[w] = c[w]);
                for (_ = 0; _ < D; _++)
                    y = Ki(n, rl),
                    y.stagger = 0,
                    x && (y.yoyoEase = x),
                    E && ir(y, E),
                    S = C[_],
                    y.duration = +ei(f, mn(s), _, S, C),
                    y.delay = (+ei(u, mn(s), _, S, C) || 0) - s._delay,
                    !c && D === 1 && y.delay && (s._delay = u = y.delay,
                    s._start += u,
                    y.delay = 0),
                    v.to(S, y, F ? F(_, S, C) : 0),
                    v._ease = ce.none;
                v.duration() ? f = u = 0 : s.timeline = 0
            } else if (d) {
                Jr(Wt(v.vars.defaults, {
                    ease: "none"
                })),
                v._ease = tr(d.ease || n.ease || "none");
                var T = 0, k, O, R;
                if (at(d))
                    d.forEach(function(B) {
                        return v.to(C, B, ">")
                    }),
                    v.duration();
                else {
                    y = {};
                    for (w in d)
                        w === "ease" || w === "easeEach" || zu(w, d[w], y, d.easeEach);
                    for (w in y)
                        for (k = y[w].sort(function(B, I) {
                            return B.t - I.t
                        }),
                        T = 0,
                        _ = 0; _ < k.length; _++)
                            O = k[_],
                            R = {
                                ease: O.e,
                                duration: (O.t - (_ ? k[_ - 1].t : 0)) / 100 * f
                            },
                            R[w] = O.v,
                            v.to(C, R, T),
                            T += R.duration;
                    v.duration() < f && v.to({}, {
                        duration: f - v.duration()
                    })
                }
            }
            f || s.duration(f = v.duration())
        } else
            s.timeline = 0;
        return a === !0 && !ns && (bn = mn(s),
        ye.killTweensOf(C),
        bn = 0),
        rn(P, mn(s), t),
        n.reversed && s.reverse(),
        n.paused && s.paused(!0),
        (p || !f && !d && s._start === et(P._time) && Ct(p) && pu(mn(s)) && P.data !== "nested") && (s._tTime = -ve,
        s.render(Math.max(0, -u) || 0)),
        m && Na(mn(s), m),
        s
    }
    var r = e.prototype;
    return r.render = function(n, t, o) {
        var s = this._time, l = this._tDur, f = this._dur, u = n < 0, p = n > l - ve && !u ? l : n < ve ? 0 : n, c, a, d, h, m, x, P, C, v;
        if (!f)
            mu(this, n, t, o);
        else if (p !== this._tTime || !n || o || !this._initted && this._tTime || this._startAt && this._zTime < 0 !== u) {
            if (c = p,
            C = this.timeline,
            this._repeat) {
                if (h = f + this._rDelay,
                this._repeat < -1 && u)
                    return this.totalTime(h * 100 + n, t, o);
                if (c = et(p % h),
                p === l ? (d = this._repeat,
                c = f) : (d = ~~(p / h),
                d && d === p / h && (c = f,
                d--),
                c > f && (c = f)),
                x = this._yoyo && d & 1,
                x && (v = this._yEase,
                c = f - c),
                m = Tr(this._tTime, h),
                c === s && !o && this._initted)
                    return this._tTime = p,
                    this;
                d !== m && (C && this._yEase && Ja(C, x),
                this.vars.repeatRefresh && !x && !this._lock && (this._lock = o = 1,
                this.render(et(h * d), !0).invalidate()._lock = 0))
            }
            if (!this._initted) {
                if (Va(this, u ? n : c, o, t, p))
                    return this._tTime = 0,
                    this;
                if (s !== this._time)
                    return this;
                if (f !== this._dur)
                    return this.render(n, t, o)
            }
            if (this._tTime = p,
            this._time = c,
            !this._act && this._ts && (this._act = 1,
            this._lazy = 0),
            this.ratio = P = (v || this._ease)(c / f),
            this._from && (this.ratio = P = 1 - P),
            c && !s && !t && (Nt(this, "onStart"),
            this._tTime !== p))
                return this;
            for (a = this._pt; a; )
                a.r(P, a.d),
                a = a._next;
            C && C.render(n < 0 ? n : !c && x ? -ve : C._dur * C._ease(c / this._dur), t, o) || this._startAt && (this._zTime = n),
            this._onUpdate && !t && (u && Ro(this, n, t, o),
            Nt(this, "onUpdate")),
            this._repeat && d !== m && this.vars.onRepeat && !t && this.parent && Nt(this, "onRepeat"),
            (p === this._tDur || !p) && this._tTime === p && (u && !this._onUpdate && Ro(this, n, !0, !0),
            (n || !f) && (p === this._tDur && this._ts > 0 || !p && this._ts < 0) && Vn(this, 1),
            !t && !(u && !s) && (p || s || x) && (Nt(this, p === l ? "onComplete" : "onReverseComplete", !0),
            this._prom && !(p < l && this.timeScale() > 0) && this._prom()))
        }
        return this
    }
    ,
    r.targets = function() {
        return this._targets
    }
    ,
    r.invalidate = function(n) {
        return (!n || !this.vars.runBackwards) && (this._startAt = 0),
        this._pt = this._op = this._onUpdate = this._lazy = this.ratio = 0,
        this._ptLookup = [],
        this.timeline && this.timeline.invalidate(n),
        g.prototype.invalidate.call(this, n)
    }
    ,
    r.resetTo = function(n, t, o, s) {
        fi || Ft.wake(),
        this._ts || this.play();
        var l = Math.min(this._dur, (this._dp._time - this._start) * this._ts), f;
        return this._initted || fs(this, l),
        f = this._ease(l / this._dur),
        Lu(this, n, t, o, s, f, l) ? this.resetTo(n, t, o, s) : (so(this, 0),
        this.parent || Ia(this._dp, this, "_first", "_last", this._dp._sort ? "_start" : 0),
        this.render(0))
    }
    ,
    r.kill = function(n, t) {
        if (t === void 0 && (t = "all"),
        !n && (!t || t === "all"))
            return this._lazy = this._pt = 0,
            this.parent ? Ur(this) : this;
        if (this.timeline) {
            var o = this.timeline.totalDuration();
            return this.timeline.killTweensOf(n, t, bn && bn.vars.overwrite !== !0)._first || Ur(this),
            this.parent && o !== this.timeline.totalDuration() && br(this, this._dur * this.timeline._tDur / o, 0, 1),
            this
        }
        var s = this._targets, l = n ? zt(n) : s, f = this._ptLookup, u = this._pt, p, c, a, d, h, m, x;
        if ((!t || t === "all") && hu(s, l))
            return t === "all" && (this._pt = 0),
            Ur(this);
        for (p = this._op = this._op || [],
        t !== "all" && (Ze(t) && (h = {},
        wt(t, function(P) {
            return h[P] = 1
        }),
        t = h),
        t = Iu(s, t)),
        x = s.length; x--; )
            if (~l.indexOf(s[x])) {
                c = f[x],
                t === "all" ? (p[x] = t,
                d = c,
                a = {}) : (a = p[x] = p[x] || {},
                d = t);
                for (h in d)
                    m = c && c[h],
                    m && ((!("kill"in m.d) || m.d.kill(h) === !0) && io(this, m, "_pt"),
                    delete c[h]),
                    a !== "all" && (a[h] = 1)
            }
        return this._initted && !this._pt && u && Ur(this),
        this
    }
    ,
    e.to = function(n, t) {
        return new e(n,t,arguments[2])
    }
    ,
    e.from = function(n, t) {
        return jr(1, arguments)
    }
    ,
    e.delayedCall = function(n, t, o, s) {
        return new e(t,0,{
            immediateRender: !1,
            lazy: !1,
            overwrite: !1,
            delay: n,
            onComplete: t,
            onReverseComplete: t,
            onCompleteParams: o,
            onReverseCompleteParams: o,
            callbackScope: s
        })
    }
    ,
    e.fromTo = function(n, t, o) {
        return jr(2, arguments)
    }
    ,
    e.set = function(n, t) {
        return t.duration = 0,
        t.repeatDelay || (t.repeat = 0),
        new e(n,t)
    }
    ,
    e.killTweensOf = function(n, t, o) {
        return ye.killTweensOf(n, t, o)
    }
    ,
    e
}(Mr);
Wt(Ge.prototype, {
    _targets: [],
    _lazy: 0,
    _startAt: 0,
    _op: 0,
    _onInit: 0
});
wt("staggerTo,staggerFrom,staggerFromTo", function(g) {
    Ge[g] = function() {
        var e = new xt
          , r = Io.call(arguments, 0);
        return r.splice(g === "staggerFromTo" ? 5 : 4, 0, 0),
        e[g].apply(e, r)
    }
});
var cs = function(e, r, i) {
    return e[r] = i
}
  , il = function(e, r, i) {
    return e[r](i)
}
  , Nu = function(e, r, i, n) {
    return e[r](n.fp, i)
}
  , Vu = function(e, r, i) {
    return e.setAttribute(r, i)
}
  , hs = function(e, r) {
    return Ae(e[r]) ? il : rs(e[r]) && e.setAttribute ? Vu : cs
}
  , ol = function(e, r) {
    return r.set(r.t, r.p, Math.round((r.s + r.c * e) * 1e6) / 1e6, r)
}
  , Wu = function(e, r) {
    return r.set(r.t, r.p, !!(r.s + r.c * e), r)
}
  , sl = function(e, r) {
    var i = r._pt
      , n = "";
    if (!e && r.b)
        n = r.b;
    else if (e === 1 && r.e)
        n = r.e;
    else {
        for (; i; )
            n = i.p + (i.m ? i.m(i.s + i.c * e) : Math.round((i.s + i.c * e) * 1e4) / 1e4) + n,
            i = i._next;
        n += r.c
    }
    r.set(r.t, r.p, n, r)
}
  , ds = function(e, r) {
    for (var i = r._pt; i; )
        i.r(e, i.d),
        i = i._next
}
  , Hu = function(e, r, i, n) {
    for (var t = this._pt, o; t; )
        o = t._next,
        t.p === n && t.modifier(e, r, i),
        t = o
}
  , $u = function(e) {
    for (var r = this._pt, i, n; r; )
        n = r._next,
        r.p === e && !r.op || r.op === e ? io(this, r, "_pt") : r.dep || (i = 1),
        r = n;
    return !i
}
  , Yu = function(e, r, i, n) {
    n.mSet(e, r, n.m.call(n.tween, i, n.mt), n)
}
  , al = function(e) {
    for (var r = e._pt, i, n, t, o; r; ) {
        for (i = r._next,
        n = t; n && n.pr > r.pr; )
            n = n._next;
        (r._prev = n ? n._prev : o) ? r._prev._next = r : t = r,
        (r._next = n) ? n._prev = r : o = r,
        r = i
    }
    e._pt = t
}
  , St = function() {
    function g(r, i, n, t, o, s, l, f, u) {
        this.t = i,
        this.s = t,
        this.c = o,
        this.p = n,
        this.r = s || ol,
        this.d = l || this,
        this.set = f || cs,
        this.pr = u || 0,
        this._next = r,
        r && (r._prev = this)
    }
    var e = g.prototype;
    return e.modifier = function(i, n, t) {
        this.mSet = this.mSet || this.set,
        this.set = Yu,
        this.m = i,
        this.mt = t,
        this.tween = n
    }
    ,
    g
}();
wt(as + "parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger", function(g) {
    return ss[g] = 1
});
Mt.TweenMax = Mt.TweenLite = Ge;
Mt.TimelineLite = Mt.TimelineMax = xt;
ye = new xt({
    sortChildren: !1,
    defaults: Fr,
    autoRemoveChildren: !0,
    id: "root",
    smoothChildTiming: !0
});
At.stringFilter = Za;
var kr = []
  , Ii = {}
  , Xu = []
  , Os = 0
  , go = function(e) {
    return (Ii[e] || Xu).map(function(r) {
        return r()
    })
}
  , Wo = function() {
    var e = Date.now()
      , r = [];
    e - Os > 2 && (go("matchMediaInit"),
    kr.forEach(function(i) {
        var n = i.queries, t = i.conditions, o, s, l, f;
        for (s in n)
            o = Ot.matchMedia(n[s]).matches,
            o && (l = 1),
            o !== t[s] && (t[s] = o,
            f = 1);
        f && (i.revert(),
        l && r.push(i))
    }),
    go("matchMediaRevert"),
    r.forEach(function(i) {
        return i.onMatch(i)
    }),
    Os = e,
    go("matchMedia"))
}
  , ll = function() {
    function g(r, i) {
        this.selector = i && zo(i),
        this.data = [],
        this._r = [],
        this.isReverted = !1,
        r && this.add(r)
    }
    var e = g.prototype;
    return e.add = function(i, n, t) {
        Ae(i) && (t = n,
        n = i,
        i = Ae);
        var o = this
          , s = function() {
            var f = Ve, u = o.selector, p;
            return f && f !== o && f.data.push(o),
            t && (o.selector = zo(t)),
            Ve = o,
            p = n.apply(o, arguments),
            Ae(p) && o._r.push(p),
            Ve = f,
            o.selector = u,
            o.isReverted = !1,
            p
        };
        return o.last = s,
        i === Ae ? s(o) : i ? o[i] = s : s
    }
    ,
    e.ignore = function(i) {
        var n = Ve;
        Ve = null,
        i(this),
        Ve = n
    }
    ,
    e.getTweens = function() {
        var i = [];
        return this.data.forEach(function(n) {
            return n instanceof g ? i.push.apply(i, n.getTweens()) : n instanceof Ge && !(n.parent && n.parent.data === "nested") && i.push(n)
        }),
        i
    }
    ,
    e.clear = function() {
        this._r.length = this.data.length = 0
    }
    ,
    e.kill = function(i, n) {
        var t = this;
        if (i) {
            var o = this.getTweens();
            this.data.forEach(function(l) {
                l.data === "isFlip" && (l.revert(),
                l.getChildren(!0, !0, !1).forEach(function(f) {
                    return o.splice(o.indexOf(f), 1)
                }))
            }),
            o.map(function(l) {
                return {
                    g: l.globalTime(0),
                    t: l
                }
            }).sort(function(l, f) {
                return f.g - l.g || -1
            }).forEach(function(l) {
                return l.t.revert(i)
            }),
            this.data.forEach(function(l) {
                return !(l instanceof Mr) && l.revert && l.revert(i)
            }),
            this._r.forEach(function(l) {
                return l(i, t)
            }),
            this.isReverted = !0
        } else
            this.data.forEach(function(l) {
                return l.kill && l.kill()
            });
        if (this.clear(),
        n) {
            var s = kr.indexOf(this);
            ~s && kr.splice(s, 1)
        }
    }
    ,
    e.revert = function(i) {
        this.kill(i || {})
    }
    ,
    g
}()
  , Uu = function() {
    function g(r) {
        this.contexts = [],
        this.scope = r
    }
    var e = g.prototype;
    return e.add = function(i, n, t) {
        fn(i) || (i = {
            matches: i
        });
        var o = new ll(0,t || this.scope), s = o.conditions = {}, l, f, u;
        this.contexts.push(o),
        n = o.add("onMatch", n),
        o.queries = i;
        for (f in i)
            f === "all" ? u = 1 : (l = Ot.matchMedia(i[f]),
            l && (kr.indexOf(o) < 0 && kr.push(o),
            (s[f] = l.matches) && (u = 1),
            l.addListener ? l.addListener(Wo) : l.addEventListener("change", Wo)));
        return u && n(o),
        this
    }
    ,
    e.revert = function(i) {
        this.kill(i || {})
    }
    ,
    e.kill = function(i) {
        this.contexts.forEach(function(n) {
            return n.kill(i, !0)
        })
    }
    ,
    g
}()
  , Qi = {
    registerPlugin: function() {
        for (var e = arguments.length, r = new Array(e), i = 0; i < e; i++)
            r[i] = arguments[i];
        r.forEach(function(n) {
            return Fu(n)
        })
    },
    timeline: function(e) {
        return new xt(e)
    },
    getTweensOf: function(e, r) {
        return ye.getTweensOf(e, r)
    },
    getProperty: function(e, r, i, n) {
        Ze(e) && (e = zt(e)[0]);
        var t = jn(e || {}).get
          , o = i ? La : Ra;
        return i === "native" && (i = ""),
        e && (r ? o((Et[r] && Et[r].get || t)(e, r, i, n)) : function(s, l, f) {
            return o((Et[s] && Et[s].get || t)(e, s, l, f))
        }
        )
    },
    quickSetter: function(e, r, i) {
        if (e = zt(e),
        e.length > 1) {
            var n = e.map(function(u) {
                return pt.quickSetter(u, r, i)
            })
              , t = n.length;
            return function(u) {
                for (var p = t; p--; )
                    n[p](u)
            }
        }
        e = e[0] || {};
        var o = Et[r]
          , s = jn(e)
          , l = s.harness && (s.harness.aliases || {})[r] || r
          , f = o ? function(u) {
            var p = new o;
            Dr._pt = 0,
            p.init(e, i ? u + i : u, Dr, 0, [e]),
            p.render(1, p),
            Dr._pt && ds(1, Dr)
        }
        : s.set(e, l);
        return o ? f : function(u) {
            return f(e, l, i ? u + i : u, s, 1)
        }
    },
    quickTo: function(e, r, i) {
        var n, t = pt.to(e, ir((n = {},
        n[r] = "+=0.1",
        n.paused = !0,
        n), i || {})), o = function(l, f, u) {
            return t.resetTo(r, l, f, u)
        };
        return o.tween = t,
        o
    },
    isTweening: function(e) {
        return ye.getTweensOf(e, !0).length > 0
    },
    defaults: function(e) {
        return e && e.ease && (e.ease = tr(e.ease, Fr.ease)),
        bs(Fr, e || {})
    },
    config: function(e) {
        return bs(At, e || {})
    },
    registerEffect: function(e) {
        var r = e.name
          , i = e.effect
          , n = e.plugins
          , t = e.defaults
          , o = e.extendTimeline;
        (n || "").split(",").forEach(function(s) {
            return s && !Et[s] && !Mt[s] && Gi(r + " effect requires " + s + " plugin.")
        }),
        fo[r] = function(s, l, f) {
            return i(zt(s), Wt(l || {}, t), f)
        }
        ,
        o && (xt.prototype[r] = function(s, l, f) {
            return this.add(fo[r](s, fn(l) ? l : (f = l) && {}, this), f)
        }
        )
    },
    registerEase: function(e, r) {
        ce[e] = tr(r)
    },
    parseEase: function(e, r) {
        return arguments.length ? tr(e, r) : ce
    },
    getById: function(e) {
        return ye.getById(e)
    },
    exportRoot: function(e, r) {
        e === void 0 && (e = {});
        var i = new xt(e), n, t;
        for (i.smoothChildTiming = Ct(e.smoothChildTiming),
        ye.remove(i),
        i._dp = 0,
        i._time = i._tTime = ye._time,
        n = ye._first; n; )
            t = n._next,
            (r || !(!n._dur && n instanceof Ge && n.vars.onComplete === n._targets[0])) && rn(i, n, n._start - n._delay),
            n = t;
        return rn(ye, i, 0),
        i
    },
    context: function(e, r) {
        return e ? new ll(e,r) : Ve
    },
    matchMedia: function(e) {
        return new Uu(e)
    },
    matchMediaRefresh: function() {
        return kr.forEach(function(e) {
            var r = e.conditions, i, n;
            for (n in r)
                r[n] && (r[n] = !1,
                i = 1);
            i && e.revert()
        }) || Wo()
    },
    addEventListener: function(e, r) {
        var i = Ii[e] || (Ii[e] = []);
        ~i.indexOf(r) || i.push(r)
    },
    removeEventListener: function(e, r) {
        var i = Ii[e]
          , n = i && i.indexOf(r);
        n >= 0 && i.splice(n, 1)
    },
    utils: {
        wrap: Su,
        wrapYoyo: Pu,
        distribute: $a,
        random: Xa,
        snap: Ya,
        normalize: wu,
        getUnit: ot,
        clamp: xu,
        splitColor: qa,
        toArray: zt,
        selector: zo,
        mapRange: Ga,
        pipe: yu,
        unitize: Cu,
        interpolate: Eu,
        shuffle: Ha
    },
    install: Aa,
    effects: fo,
    ticker: Ft,
    updateRoot: xt.updateRoot,
    plugins: Et,
    globalTimeline: ye,
    core: {
        PropTween: St,
        globals: Ma,
        Tween: Ge,
        Timeline: xt,
        Animation: Mr,
        getCache: jn,
        _removeLinkedListItem: io,
        reverting: function() {
            return yt
        },
        context: function(e) {
            return e && Ve && (Ve.data.push(e),
            e._ctx = Ve),
            Ve
        },
        suppressOverwrites: function(e) {
            return ns = e
        }
    }
};
wt("to,from,fromTo,delayedCall,set,killTweensOf", function(g) {
    return Qi[g] = Ge[g]
});
Ft.add(xt.updateRoot);
Dr = Qi.to({}, {
    duration: 0
});
var Gu = function(e, r) {
    for (var i = e._pt; i && i.p !== r && i.op !== r && i.fp !== r; )
        i = i._next;
    return i
}
  , qu = function(e, r) {
    var i = e._targets, n, t, o;
    for (n in r)
        for (t = i.length; t--; )
            o = e._ptLookup[t][n],
            o && (o = o.d) && (o._pt && (o = Gu(o, n)),
            o && o.modifier && o.modifier(r[n], e, i[t], n))
}
  , mo = function(e, r) {
    return {
        name: e,
        rawVars: 1,
        init: function(n, t, o) {
            o._onInit = function(s) {
                var l, f;
                if (Ze(t) && (l = {},
                wt(t, function(u) {
                    return l[u] = 1
                }),
                t = l),
                r) {
                    l = {};
                    for (f in t)
                        l[f] = r(t[f]);
                    t = l
                }
                qu(s, t)
            }
        }
    }
}
  , pt = Qi.registerPlugin({
    name: "attr",
    init: function(e, r, i, n, t) {
        var o, s, l;
        this.tween = i;
        for (o in r)
            l = e.getAttribute(o) || "",
            s = this.add(e, "setAttribute", (l || 0) + "", r[o], n, t, 0, 0, o),
            s.op = o,
            s.b = l,
            this._props.push(o)
    },
    render: function(e, r) {
        for (var i = r._pt; i; )
            yt ? i.set(i.t, i.p, i.b, i) : i.r(e, i.d),
            i = i._next
    }
}, {
    name: "endArray",
    init: function(e, r) {
        for (var i = r.length; i--; )
            this.add(e, i, e[i] || 0, r[i], 0, 0, 0, 0, 0, 1)
    }
}, mo("roundProps", No), mo("modifiers"), mo("snap", Ya)) || Qi;
Ge.version = xt.version = pt.version = "3.11.2";
ba = 1;
Sa() && Ar();
ce.Power0;
ce.Power1;
ce.Power2;
ce.Power3;
ce.Power4;
ce.Linear;
ce.Quad;
ce.Cubic;
ce.Quart;
ce.Quint;
ce.Strong;
ce.Elastic;
ce.Back;
ce.SteppedEase;
ce.Bounce;
ce.Sine;
ce.Expo;
ce.Circ;
/*!
 * CSSPlugin 3.11.2
 * https://greensock.com
 *
 * Copyright 2008-2022, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/
var Rs, An, Sr, ps, Qn, Ls, gs, Ku = function() {
    return typeof window < "u"
}, Sn = {}, Gn = 180 / Math.PI, Pr = Math.PI / 180, cr = Math.atan2, Is = 1e8, ms = /([A-Z])/g, Zu = /(left|right|width|margin|padding|x)/i, Qu = /[\s,\(]\S/, xn = {
    autoAlpha: "opacity,visibility",
    scale: "scaleX,scaleY",
    alpha: "opacity"
}, Ho = function(e, r) {
    return r.set(r.t, r.p, Math.round((r.s + r.c * e) * 1e4) / 1e4 + r.u, r)
}, Ju = function(e, r) {
    return r.set(r.t, r.p, e === 1 ? r.e : Math.round((r.s + r.c * e) * 1e4) / 1e4 + r.u, r)
}, ju = function(e, r) {
    return r.set(r.t, r.p, e ? Math.round((r.s + r.c * e) * 1e4) / 1e4 + r.u : r.b, r)
}, ef = function(e, r) {
    var i = r.s + r.c * e;
    r.set(r.t, r.p, ~~(i + (i < 0 ? -.5 : .5)) + r.u, r)
}, ul = function(e, r) {
    return r.set(r.t, r.p, e ? r.e : r.b, r)
}, fl = function(e, r) {
    return r.set(r.t, r.p, e !== 1 ? r.b : r.e, r)
}, tf = function(e, r, i) {
    return e.style[r] = i
}, nf = function(e, r, i) {
    return e.style.setProperty(r, i)
}, rf = function(e, r, i) {
    return e._gsap[r] = i
}, of = function(e, r, i) {
    return e._gsap.scaleX = e._gsap.scaleY = i
}, sf = function(e, r, i, n, t) {
    var o = e._gsap;
    o.scaleX = o.scaleY = i,
    o.renderTransform(t, o)
}, af = function(e, r, i, n, t) {
    var o = e._gsap;
    o[r] = i,
    o.renderTransform(t, o)
}, Ce = "transform", Kt = Ce + "Origin", lf = function(e, r) {
    var i = this
      , n = this.target
      , t = n.style;
    if (e in Sn) {
        if (this.tfm = this.tfm || {},
        e !== "transform" && (e = xn[e] || e,
        ~e.indexOf(",") ? e.split(",").forEach(function(o) {
            return i.tfm[o] = vn(n, o)
        }) : this.tfm[e] = n._gsap.x ? n._gsap[e] : vn(n, e)),
        this.props.indexOf(Ce) >= 0)
            return;
        n._gsap.svg && (this.svgo = n.getAttribute("data-svg-origin"),
        this.props.push(Kt, r, "")),
        e = Ce
    }
    (t || r) && this.props.push(e, r, t[e])
}, cl = function(e) {
    e.translate && (e.removeProperty("translate"),
    e.removeProperty("scale"),
    e.removeProperty("rotate"))
}, uf = function() {
    var e = this.props, r = this.target, i = r.style, n = r._gsap, t, o;
    for (t = 0; t < e.length; t += 3)
        e[t + 1] ? r[e[t]] = e[t + 2] : e[t + 2] ? i[e[t]] = e[t + 2] : i.removeProperty(e[t].replace(ms, "-$1").toLowerCase());
    if (this.tfm) {
        for (o in this.tfm)
            n[o] = this.tfm[o];
        n.svg && (n.renderTransform(),
        r.setAttribute("data-svg-origin", this.svgo || "")),
        t = gs(),
        t && !t.isStart && !i[Ce] && (cl(i),
        n.uncache = 1)
    }
}, hl = function(e, r) {
    var i = {
        target: e,
        props: [],
        revert: uf,
        save: lf
    };
    return r && r.split(",").forEach(function(n) {
        return i.save(n)
    }),
    i
}, dl, $o = function(e, r) {
    var i = An.createElementNS ? An.createElementNS((r || "http://www.w3.org/1999/xhtml").replace(/^https/, "http"), e) : An.createElement(e);
    return i.style ? i : An.createElement(e)
}, ln = function g(e, r, i) {
    var n = getComputedStyle(e);
    return n[r] || n.getPropertyValue(r.replace(ms, "-$1").toLowerCase()) || n.getPropertyValue(r) || !i && g(e, Br(r) || r, 1) || ""
}, zs = "O,Moz,ms,Ms,Webkit".split(","), Br = function(e, r, i) {
    var n = r || Qn
      , t = n.style
      , o = 5;
    if (e in t && !i)
        return e;
    for (e = e.charAt(0).toUpperCase() + e.substr(1); o-- && !(zs[o] + e in t); )
        ;
    return o < 0 ? null : (o === 3 ? "ms" : o >= 0 ? zs[o] : "") + e
}, Yo = function() {
    Ku() && window.document && (Rs = window,
    An = Rs.document,
    Sr = An.documentElement,
    Qn = $o("div") || {
        style: {}
    },
    $o("div"),
    Ce = Br(Ce),
    Kt = Ce + "Origin",
    Qn.style.cssText = "border-width:0;line-height:0;position:absolute;padding:0",
    dl = !!Br("perspective"),
    gs = pt.core.reverting,
    ps = 1)
}, vo = function g(e) {
    var r = $o("svg", this.ownerSVGElement && this.ownerSVGElement.getAttribute("xmlns") || "http://www.w3.org/2000/svg"), i = this.parentNode, n = this.nextSibling, t = this.style.cssText, o;
    if (Sr.appendChild(r),
    r.appendChild(this),
    this.style.display = "block",
    e)
        try {
            o = this.getBBox(),
            this._gsapBBox = this.getBBox,
            this.getBBox = g
        } catch {}
    else
        this._gsapBBox && (o = this._gsapBBox());
    return i && (n ? i.insertBefore(this, n) : i.appendChild(this)),
    Sr.removeChild(r),
    this.style.cssText = t,
    o
}, Ns = function(e, r) {
    for (var i = r.length; i--; )
        if (e.hasAttribute(r[i]))
            return e.getAttribute(r[i])
}, pl = function(e) {
    var r;
    try {
        r = e.getBBox()
    } catch {
        r = vo.call(e, !0)
    }
    return r && (r.width || r.height) || e.getBBox === vo || (r = vo.call(e, !0)),
    r && !r.width && !r.x && !r.y ? {
        x: +Ns(e, ["x", "cx", "x1"]) || 0,
        y: +Ns(e, ["y", "cy", "y1"]) || 0,
        width: 0,
        height: 0
    } : r
}, gl = function(e) {
    return !!(e.getCTM && (!e.parentNode || e.ownerSVGElement) && pl(e))
}, ci = function(e, r) {
    if (r) {
        var i = e.style;
        r in Sn && r !== Kt && (r = Ce),
        i.removeProperty ? ((r.substr(0, 2) === "ms" || r.substr(0, 6) === "webkit") && (r = "-" + r),
        i.removeProperty(r.replace(ms, "-$1").toLowerCase())) : i.removeAttribute(r)
    }
}, Mn = function(e, r, i, n, t, o) {
    var s = new St(e._pt,r,i,0,1,o ? fl : ul);
    return e._pt = s,
    s.b = n,
    s.e = t,
    e._props.push(i),
    s
}, Vs = {
    deg: 1,
    rad: 1,
    turn: 1
}, ff = {
    grid: 1,
    flex: 1
}, Wn = function g(e, r, i, n) {
    var t = parseFloat(i) || 0, o = (i + "").trim().substr((t + "").length) || "px", s = Qn.style, l = Zu.test(r), f = e.tagName.toLowerCase() === "svg", u = (f ? "client" : "offset") + (l ? "Width" : "Height"), p = 100, c = n === "px", a = n === "%", d, h, m, x;
    return n === o || !t || Vs[n] || Vs[o] ? t : (o !== "px" && !c && (t = g(e, r, i, "px")),
    x = e.getCTM && gl(e),
    (a || o === "%") && (Sn[r] || ~r.indexOf("adius")) ? (d = x ? e.getBBox()[l ? "width" : "height"] : e[u],
    Be(a ? t / d * p : t / 100 * d)) : (s[l ? "width" : "height"] = p + (c ? o : n),
    h = ~r.indexOf("adius") || n === "em" && e.appendChild && !f ? e : e.parentNode,
    x && (h = (e.ownerSVGElement || {}).parentNode),
    (!h || h === An || !h.appendChild) && (h = An.body),
    m = h._gsap,
    m && a && m.width && l && m.time === Ft.time && !m.uncache ? Be(t / m.width * p) : ((a || o === "%") && !ff[ln(h, "display")] && (s.position = ln(e, "position")),
    h === e && (s.position = "static"),
    h.appendChild(Qn),
    d = Qn[u],
    h.removeChild(Qn),
    s.position = "absolute",
    l && a && (m = jn(h),
    m.time = Ft.time,
    m.width = h[u]),
    Be(c ? d * t / p : d && t ? p / d * t : 0))))
}, vn = function(e, r, i, n) {
    var t;
    return ps || Yo(),
    r in xn && r !== "transform" && (r = xn[r],
    ~r.indexOf(",") && (r = r.split(",")[0])),
    Sn[r] && r !== "transform" ? (t = di(e, n),
    t = r !== "transformOrigin" ? t[r] : t.svg ? t.origin : ji(ln(e, Kt)) + " " + t.zOrigin + "px") : (t = e.style[r],
    (!t || t === "auto" || n || ~(t + "").indexOf("calc(")) && (t = Ji[r] && Ji[r](e, r, i) || ln(e, r) || Ba(e, r) || (r === "opacity" ? 1 : 0))),
    i && !~(t + "").trim().indexOf(" ") ? Wn(e, r, t, i) + i : t
}, cf = function(e, r, i, n) {
    if (!i || i === "none") {
        var t = Br(r, e, 1)
          , o = t && ln(e, t, 1);
        o && o !== i ? (r = t,
        i = o) : r === "borderColor" && (i = ln(e, "borderTopColor"))
    }
    var s = new St(this._pt,e.style,r,0,1,sl), l = 0, f = 0, u, p, c, a, d, h, m, x, P, C, v, _;
    if (s.b = i,
    s.e = n,
    i += "",
    n += "",
    n === "auto" && (e.style[r] = n,
    n = ln(e, r) || n,
    e.style[r] = i),
    u = [i, n],
    Za(u),
    i = u[0],
    n = u[1],
    c = i.match(vr) || [],
    _ = n.match(vr) || [],
    _.length) {
        for (; p = vr.exec(n); )
            m = p[0],
            P = n.substring(l, p.index),
            d ? d = (d + 1) % 5 : (P.substr(-5) === "rgba(" || P.substr(-5) === "hsla(") && (d = 1),
            m !== (h = c[f++] || "") && (a = parseFloat(h) || 0,
            v = h.substr((a + "").length),
            m.charAt(1) === "=" && (m = wr(a, m) + v),
            x = parseFloat(m),
            C = m.substr((x + "").length),
            l = vr.lastIndex - C.length,
            C || (C = C || At.units[r] || v,
            l === n.length && (n += C,
            s.e += C)),
            v !== C && (a = Wn(e, r, h, C) || 0),
            s._pt = {
                _next: s._pt,
                p: P || f === 1 ? P : ",",
                s: a,
                c: x - a,
                m: d && d < 4 || r === "zIndex" ? Math.round : 0
            });
        s.c = l < n.length ? n.substring(l, n.length) : ""
    } else
        s.r = r === "display" && n === "none" ? fl : ul;
    return Fa.test(n) && (s.e = 0),
    this._pt = s,
    s
}, Ws = {
    top: "0%",
    bottom: "100%",
    left: "0%",
    right: "100%",
    center: "50%"
}, hf = function(e) {
    var r = e.split(" ")
      , i = r[0]
      , n = r[1] || "50%";
    return (i === "top" || i === "bottom" || n === "left" || n === "right") && (e = i,
    i = n,
    n = e),
    r[0] = Ws[i] || i,
    r[1] = Ws[n] || n,
    r.join(" ")
}, df = function(e, r) {
    if (r.tween && r.tween._time === r.tween._dur) {
        var i = r.t, n = i.style, t = r.u, o = i._gsap, s, l, f;
        if (t === "all" || t === !0)
            n.cssText = "",
            l = 1;
        else
            for (t = t.split(","),
            f = t.length; --f > -1; )
                s = t[f],
                Sn[s] && (l = 1,
                s = s === "transformOrigin" ? Kt : Ce),
                ci(i, s);
        l && (ci(i, Ce),
        o && (o.svg && i.removeAttribute("transform"),
        di(i, 1),
        o.uncache = 1,
        cl(n)))
    }
}, Ji = {
    clearProps: function(e, r, i, n, t) {
        if (t.data !== "isFromStart") {
            var o = e._pt = new St(e._pt,r,i,0,0,df);
            return o.u = n,
            o.pr = -10,
            o.tween = t,
            e._props.push(i),
            1
        }
    }
}, hi = [1, 0, 0, 1, 0, 0], ml = {}, vl = function(e) {
    return e === "matrix(1, 0, 0, 1, 0, 0)" || e === "none" || !e
}, Hs = function(e) {
    var r = ln(e, Ce);
    return vl(r) ? hi : r.substr(7).match(Ea).map(Be)
}, vs = function(e, r) {
    var i = e._gsap || jn(e), n = e.style, t = Hs(e), o, s, l, f;
    return i.svg && e.getAttribute("transform") ? (l = e.transform.baseVal.consolidate().matrix,
    t = [l.a, l.b, l.c, l.d, l.e, l.f],
    t.join(",") === "1,0,0,1,0,0" ? hi : t) : (t === hi && !e.offsetParent && e !== Sr && !i.svg && (l = n.display,
    n.display = "block",
    o = e.parentNode,
    (!o || !e.offsetParent) && (f = 1,
    s = e.nextElementSibling,
    Sr.appendChild(e)),
    t = Hs(e),
    l ? n.display = l : ci(e, "display"),
    f && (s ? o.insertBefore(e, s) : o ? o.appendChild(e) : Sr.removeChild(e))),
    r && t.length > 6 ? [t[0], t[1], t[4], t[5], t[12], t[13]] : t)
}, Xo = function(e, r, i, n, t, o) {
    var s = e._gsap, l = t || vs(e, !0), f = s.xOrigin || 0, u = s.yOrigin || 0, p = s.xOffset || 0, c = s.yOffset || 0, a = l[0], d = l[1], h = l[2], m = l[3], x = l[4], P = l[5], C = r.split(" "), v = parseFloat(C[0]) || 0, _ = parseFloat(C[1]) || 0, y, D, w, S;
    i ? l !== hi && (D = a * m - d * h) && (w = v * (m / D) + _ * (-h / D) + (h * P - m * x) / D,
    S = v * (-d / D) + _ * (a / D) - (a * P - d * x) / D,
    v = w,
    _ = S) : (y = pl(e),
    v = y.x + (~C[0].indexOf("%") ? v / 100 * y.width : v),
    _ = y.y + (~(C[1] || C[0]).indexOf("%") ? _ / 100 * y.height : _)),
    n || n !== !1 && s.smooth ? (x = v - f,
    P = _ - u,
    s.xOffset = p + (x * a + P * h) - x,
    s.yOffset = c + (x * d + P * m) - P) : s.xOffset = s.yOffset = 0,
    s.xOrigin = v,
    s.yOrigin = _,
    s.smooth = !!n,
    s.origin = r,
    s.originIsAbsolute = !!i,
    e.style[Kt] = "0px 0px",
    o && (Mn(o, s, "xOrigin", f, v),
    Mn(o, s, "yOrigin", u, _),
    Mn(o, s, "xOffset", p, s.xOffset),
    Mn(o, s, "yOffset", c, s.yOffset)),
    e.setAttribute("data-svg-origin", v + " " + _)
}, di = function(e, r) {
    var i = e._gsap || new el(e);
    if ("x"in i && !r && !i.uncache)
        return i;
    var n = e.style, t = i.scaleX < 0, o = "px", s = "deg", l = getComputedStyle(e), f = ln(e, Kt) || "0", u, p, c, a, d, h, m, x, P, C, v, _, y, D, w, S, F, E, T, k, O, R, B, I, V, M, b, U, Z, oe, re, q;
    return u = p = c = h = m = x = P = C = v = 0,
    a = d = 1,
    i.svg = !!(e.getCTM && gl(e)),
    l.translate && ((l.translate !== "none" || l.scale !== "none" || l.rotate !== "none") && (n[Ce] = (l.translate !== "none" ? "translate3d(" + (l.translate + " 0 0").split(" ").slice(0, 3).join(", ") + ") " : "") + (l.rotate !== "none" ? "rotate(" + l.rotate + ") " : "") + (l.scale !== "none" ? "scale(" + l.scale.split(" ").join(",") + ") " : "") + (l[Ce] !== "none" ? l[Ce] : "")),
    n.scale = n.rotate = n.translate = "none"),
    D = vs(e, i.svg),
    i.svg && (i.uncache ? (V = e.getBBox(),
    f = i.xOrigin - V.x + "px " + (i.yOrigin - V.y) + "px",
    I = "") : I = !r && e.getAttribute("data-svg-origin"),
    Xo(e, I || f, !!I || i.originIsAbsolute, i.smooth !== !1, D)),
    _ = i.xOrigin || 0,
    y = i.yOrigin || 0,
    D !== hi && (E = D[0],
    T = D[1],
    k = D[2],
    O = D[3],
    u = R = D[4],
    p = B = D[5],
    D.length === 6 ? (a = Math.sqrt(E * E + T * T),
    d = Math.sqrt(O * O + k * k),
    h = E || T ? cr(T, E) * Gn : 0,
    P = k || O ? cr(k, O) * Gn + h : 0,
    P && (d *= Math.abs(Math.cos(P * Pr))),
    i.svg && (u -= _ - (_ * E + y * k),
    p -= y - (_ * T + y * O))) : (q = D[6],
    oe = D[7],
    b = D[8],
    U = D[9],
    Z = D[10],
    re = D[11],
    u = D[12],
    p = D[13],
    c = D[14],
    w = cr(q, Z),
    m = w * Gn,
    w && (S = Math.cos(-w),
    F = Math.sin(-w),
    I = R * S + b * F,
    V = B * S + U * F,
    M = q * S + Z * F,
    b = R * -F + b * S,
    U = B * -F + U * S,
    Z = q * -F + Z * S,
    re = oe * -F + re * S,
    R = I,
    B = V,
    q = M),
    w = cr(-k, Z),
    x = w * Gn,
    w && (S = Math.cos(-w),
    F = Math.sin(-w),
    I = E * S - b * F,
    V = T * S - U * F,
    M = k * S - Z * F,
    re = O * F + re * S,
    E = I,
    T = V,
    k = M),
    w = cr(T, E),
    h = w * Gn,
    w && (S = Math.cos(w),
    F = Math.sin(w),
    I = E * S + T * F,
    V = R * S + B * F,
    T = T * S - E * F,
    B = B * S - R * F,
    E = I,
    R = V),
    m && Math.abs(m) + Math.abs(h) > 359.9 && (m = h = 0,
    x = 180 - x),
    a = Be(Math.sqrt(E * E + T * T + k * k)),
    d = Be(Math.sqrt(B * B + q * q)),
    w = cr(R, B),
    P = Math.abs(w) > 2e-4 ? w * Gn : 0,
    v = re ? 1 / (re < 0 ? -re : re) : 0),
    i.svg && (I = e.getAttribute("transform"),
    i.forceCSS = e.setAttribute("transform", "") || !vl(ln(e, Ce)),
    I && e.setAttribute("transform", I))),
    Math.abs(P) > 90 && Math.abs(P) < 270 && (t ? (a *= -1,
    P += h <= 0 ? 180 : -180,
    h += h <= 0 ? 180 : -180) : (d *= -1,
    P += P <= 0 ? 180 : -180)),
    r = r || i.uncache,
    i.x = u - ((i.xPercent = u && (!r && i.xPercent || (Math.round(e.offsetWidth / 2) === Math.round(-u) ? -50 : 0))) ? e.offsetWidth * i.xPercent / 100 : 0) + o,
    i.y = p - ((i.yPercent = p && (!r && i.yPercent || (Math.round(e.offsetHeight / 2) === Math.round(-p) ? -50 : 0))) ? e.offsetHeight * i.yPercent / 100 : 0) + o,
    i.z = c + o,
    i.scaleX = Be(a),
    i.scaleY = Be(d),
    i.rotation = Be(h) + s,
    i.rotationX = Be(m) + s,
    i.rotationY = Be(x) + s,
    i.skewX = P + s,
    i.skewY = C + s,
    i.transformPerspective = v + o,
    (i.zOrigin = parseFloat(f.split(" ")[2]) || 0) && (n[Kt] = ji(f)),
    i.xOffset = i.yOffset = 0,
    i.force3D = At.force3D,
    i.renderTransform = i.svg ? gf : dl ? Dl : pf,
    i.uncache = 0,
    i
}, ji = function(e) {
    return (e = e.split(" "))[0] + " " + e[1]
}, Do = function(e, r, i) {
    var n = ot(r);
    return Be(parseFloat(r) + parseFloat(Wn(e, "x", i + "px", n))) + n
}, pf = function(e, r) {
    r.z = "0px",
    r.rotationY = r.rotationX = "0deg",
    r.force3D = 0,
    Dl(e, r)
}, Xn = "0deg", Vr = "0px", Un = ") ", Dl = function(e, r) {
    var i = r || this
      , n = i.xPercent
      , t = i.yPercent
      , o = i.x
      , s = i.y
      , l = i.z
      , f = i.rotation
      , u = i.rotationY
      , p = i.rotationX
      , c = i.skewX
      , a = i.skewY
      , d = i.scaleX
      , h = i.scaleY
      , m = i.transformPerspective
      , x = i.force3D
      , P = i.target
      , C = i.zOrigin
      , v = ""
      , _ = x === "auto" && e && e !== 1 || x === !0;
    if (C && (p !== Xn || u !== Xn)) {
        var y = parseFloat(u) * Pr, D = Math.sin(y), w = Math.cos(y), S;
        y = parseFloat(p) * Pr,
        S = Math.cos(y),
        o = Do(P, o, D * S * -C),
        s = Do(P, s, -Math.sin(y) * -C),
        l = Do(P, l, w * S * -C + C)
    }
    m !== Vr && (v += "perspective(" + m + Un),
    (n || t) && (v += "translate(" + n + "%, " + t + "%) "),
    (_ || o !== Vr || s !== Vr || l !== Vr) && (v += l !== Vr || _ ? "translate3d(" + o + ", " + s + ", " + l + ") " : "translate(" + o + ", " + s + Un),
    f !== Xn && (v += "rotate(" + f + Un),
    u !== Xn && (v += "rotateY(" + u + Un),
    p !== Xn && (v += "rotateX(" + p + Un),
    (c !== Xn || a !== Xn) && (v += "skew(" + c + ", " + a + Un),
    (d !== 1 || h !== 1) && (v += "scale(" + d + ", " + h + Un),
    P.style[Ce] = v || "translate(0, 0)"
}, gf = function(e, r) {
    var i = r || this, n = i.xPercent, t = i.yPercent, o = i.x, s = i.y, l = i.rotation, f = i.skewX, u = i.skewY, p = i.scaleX, c = i.scaleY, a = i.target, d = i.xOrigin, h = i.yOrigin, m = i.xOffset, x = i.yOffset, P = i.forceCSS, C = parseFloat(o), v = parseFloat(s), _, y, D, w, S;
    l = parseFloat(l),
    f = parseFloat(f),
    u = parseFloat(u),
    u && (u = parseFloat(u),
    f += u,
    l += u),
    l || f ? (l *= Pr,
    f *= Pr,
    _ = Math.cos(l) * p,
    y = Math.sin(l) * p,
    D = Math.sin(l - f) * -c,
    w = Math.cos(l - f) * c,
    f && (u *= Pr,
    S = Math.tan(f - u),
    S = Math.sqrt(1 + S * S),
    D *= S,
    w *= S,
    u && (S = Math.tan(u),
    S = Math.sqrt(1 + S * S),
    _ *= S,
    y *= S)),
    _ = Be(_),
    y = Be(y),
    D = Be(D),
    w = Be(w)) : (_ = p,
    w = c,
    y = D = 0),
    (C && !~(o + "").indexOf("px") || v && !~(s + "").indexOf("px")) && (C = Wn(a, "x", o, "px"),
    v = Wn(a, "y", s, "px")),
    (d || h || m || x) && (C = Be(C + d - (d * _ + h * D) + m),
    v = Be(v + h - (d * y + h * w) + x)),
    (n || t) && (S = a.getBBox(),
    C = Be(C + n / 100 * S.width),
    v = Be(v + t / 100 * S.height)),
    S = "matrix(" + _ + "," + y + "," + D + "," + w + "," + C + "," + v + ")",
    a.setAttribute("transform", S),
    P && (a.style[Ce] = S)
}, mf = function(e, r, i, n, t) {
    var o = 360, s = Ze(t), l = parseFloat(t) * (s && ~t.indexOf("rad") ? Gn : 1), f = l - n, u = n + f + "deg", p, c;
    return s && (p = t.split("_")[1],
    p === "short" && (f %= o,
    f !== f % (o / 2) && (f += f < 0 ? o : -o)),
    p === "cw" && f < 0 ? f = (f + o * Is) % o - ~~(f / o) * o : p === "ccw" && f > 0 && (f = (f - o * Is) % o - ~~(f / o) * o)),
    e._pt = c = new St(e._pt,r,i,n,f,Ju),
    c.e = u,
    c.u = "deg",
    e._props.push(i),
    c
}, $s = function(e, r) {
    for (var i in r)
        e[i] = r[i];
    return e
}, vf = function(e, r, i) {
    var n = $s({}, i._gsap), t = "perspective,force3D,transformOrigin,svgOrigin", o = i.style, s, l, f, u, p, c, a, d;
    n.svg ? (f = i.getAttribute("transform"),
    i.setAttribute("transform", ""),
    o[Ce] = r,
    s = di(i, 1),
    ci(i, Ce),
    i.setAttribute("transform", f)) : (f = getComputedStyle(i)[Ce],
    o[Ce] = r,
    s = di(i, 1),
    o[Ce] = f);
    for (l in Sn)
        f = n[l],
        u = s[l],
        f !== u && t.indexOf(l) < 0 && (a = ot(f),
        d = ot(u),
        p = a !== d ? Wn(i, l, f, d) : parseFloat(f),
        c = parseFloat(u),
        e._pt = new St(e._pt,s,l,p,c - p,Ho),
        e._pt.u = d || 0,
        e._props.push(l));
    $s(s, n)
};
wt("padding,margin,Width,Radius", function(g, e) {
    var r = "Top"
      , i = "Right"
      , n = "Bottom"
      , t = "Left"
      , o = (e < 3 ? [r, i, n, t] : [r + t, r + i, n + i, n + t]).map(function(s) {
        return e < 2 ? g + s : "border" + s + g
    });
    Ji[e > 1 ? "border" + g : g] = function(s, l, f, u, p) {
        var c, a;
        if (arguments.length < 4)
            return c = o.map(function(d) {
                return vn(s, d, f)
            }),
            a = c.join(" "),
            a.split(c[0]).length === 5 ? c[0] : a;
        c = (u + "").split(" "),
        a = {},
        o.forEach(function(d, h) {
            return a[d] = c[h] = c[h] || c[(h - 1) / 2 | 0]
        }),
        s.init(l, a, p)
    }
});
var Ds = {
    name: "css",
    register: Yo,
    targetTest: function(e) {
        return e.style && e.nodeType
    },
    init: function(e, r, i, n, t) {
        var o = this._props, s = e.style, l = i.vars.startAt, f, u, p, c, a, d, h, m, x, P, C, v, _, y, D, w;
        ps || Yo(),
        this.styles = this.styles || hl(e),
        w = this.styles.props,
        this.tween = i;
        for (h in r)
            if (h !== "autoRound" && (u = r[h],
            !(Et[h] && tl(h, r, i, n, e, t)))) {
                if (a = typeof u,
                d = Ji[h],
                a === "function" && (u = u.call(i, n, e, t),
                a = typeof u),
                a === "string" && ~u.indexOf("random(") && (u = ui(u)),
                d)
                    d(this, e, h, u, i) && (D = 1);
                else if (h.substr(0, 2) === "--")
                    f = (getComputedStyle(e).getPropertyValue(h) + "").trim(),
                    u += "",
                    In.lastIndex = 0,
                    In.test(f) || (m = ot(f),
                    x = ot(u)),
                    x ? m !== x && (f = Wn(e, h, f, x) + x) : m && (u += m),
                    this.add(s, "setProperty", f, u, n, t, 0, 0, h),
                    o.push(h),
                    w.push(h, 0, s[h]);
                else if (a !== "undefined") {
                    if (l && h in l ? (f = typeof l[h] == "function" ? l[h].call(i, n, e, t) : l[h],
                    Ze(f) && ~f.indexOf("random(") && (f = ui(f)),
                    ot(f + "") || (f += At.units[h] || ot(vn(e, h)) || ""),
                    (f + "").charAt(1) === "=" && (f = vn(e, h))) : f = vn(e, h),
                    c = parseFloat(f),
                    P = a === "string" && u.charAt(1) === "=" && u.substr(0, 2),
                    P && (u = u.substr(2)),
                    p = parseFloat(u),
                    h in xn && (h === "autoAlpha" && (c === 1 && vn(e, "visibility") === "hidden" && p && (c = 0),
                    w.push("visibility", 0, s.visibility),
                    Mn(this, s, "visibility", c ? "inherit" : "hidden", p ? "inherit" : "hidden", !p)),
                    h !== "scale" && h !== "transform" && (h = xn[h],
                    ~h.indexOf(",") && (h = h.split(",")[0]))),
                    C = h in Sn,
                    C) {
                        if (this.styles.save(h),
                        v || (_ = e._gsap,
                        _.renderTransform && !r.parseTransform || di(e, r.parseTransform),
                        y = r.smoothOrigin !== !1 && _.smooth,
                        v = this._pt = new St(this._pt,s,Ce,0,1,_.renderTransform,_,0,-1),
                        v.dep = 1),
                        h === "scale")
                            this._pt = new St(this._pt,_,"scaleY",c,(P ? wr(c, P + p) : p) - c || 0,Ho),
                            this._pt.u = 0,
                            o.push("scaleY", h),
                            h += "X";
                        else if (h === "transformOrigin") {
                            w.push(Kt, 0, s[Kt]),
                            u = hf(u),
                            _.svg ? Xo(e, u, 0, y, 0, this) : (x = parseFloat(u.split(" ")[2]) || 0,
                            x !== _.zOrigin && Mn(this, _, "zOrigin", _.zOrigin, x),
                            Mn(this, s, h, ji(f), ji(u)));
                            continue
                        } else if (h === "svgOrigin") {
                            Xo(e, u, 1, y, 0, this);
                            continue
                        } else if (h in ml) {
                            mf(this, _, h, c, P ? wr(c, P + u) : u);
                            continue
                        } else if (h === "smoothOrigin") {
                            Mn(this, _, "smooth", _.smooth, u);
                            continue
                        } else if (h === "force3D") {
                            _[h] = u;
                            continue
                        } else if (h === "transform") {
                            vf(this, u, e);
                            continue
                        }
                    } else
                        h in s || (h = Br(h) || h);
                    if (C || (p || p === 0) && (c || c === 0) && !Qu.test(u) && h in s)
                        m = (f + "").substr((c + "").length),
                        p || (p = 0),
                        x = ot(u) || (h in At.units ? At.units[h] : m),
                        m !== x && (c = Wn(e, h, f, x)),
                        this._pt = new St(this._pt,C ? _ : s,h,c,(P ? wr(c, P + p) : p) - c,!C && (x === "px" || h === "zIndex") && r.autoRound !== !1 ? ef : Ho),
                        this._pt.u = x || 0,
                        m !== x && x !== "%" && (this._pt.b = f,
                        this._pt.r = ju);
                    else if (h in s)
                        cf.call(this, e, h, f, P ? P + u : u);
                    else if (h in e)
                        this.add(e, h, f || e[h], P ? P + u : u, n, t);
                    else {
                        os(h, u);
                        continue
                    }
                    C || (h in s ? w.push(h, 0, s[h]) : w.push(h, 1, f || e[h])),
                    o.push(h)
                }
            }
        D && al(this)
    },
    render: function(e, r) {
        if (r.tween._time || !gs())
            for (var i = r._pt; i; )
                i.r(e, i.d),
                i = i._next;
        else
            r.styles.revert()
    },
    get: vn,
    aliases: xn,
    getSetter: function(e, r, i) {
        var n = xn[r];
        return n && n.indexOf(",") < 0 && (r = n),
        r in Sn && r !== Kt && (e._gsap.x || vn(e, "x")) ? i && Ls === i ? r === "scale" ? of : rf : (Ls = i || {}) && (r === "scale" ? sf : af) : e.style && !rs(e.style[r]) ? tf : ~r.indexOf("-") ? nf : hs(e, r)
    },
    core: {
        _removeProperty: ci,
        _getMatrix: vs
    }
};
pt.utils.checkPrefix = Br;
pt.core.getStyleSaver = hl;
(function(g, e, r, i) {
    var n = wt(g + "," + e + "," + r, function(t) {
        Sn[t] = 1
    });
    wt(e, function(t) {
        At.units[t] = "deg",
        ml[t] = 1
    }),
    xn[n[13]] = g + "," + e,
    wt(i, function(t) {
        var o = t.split(":");
        xn[o[1]] = n[o[0]]
    })
}
)("x,y,z,scale,scaleX,scaleY,xPercent,yPercent", "rotation,rotationX,rotationY,skewX,skewY", "transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective", "0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");
wt("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective", function(g) {
    At.units[g] = "px"
});
pt.registerPlugin(Ds);
var gn = pt.registerPlugin(Ds) || pt;
gn.core.Tween;
function Ys(g, e) {
    for (var r = 0; r < e.length; r++) {
        var i = e[r];
        i.enumerable = i.enumerable || !1,
        i.configurable = !0,
        "value"in i && (i.writable = !0),
        Object.defineProperty(g, i.key, i)
    }
}
function Df(g, e, r) {
    return e && Ys(g.prototype, e),
    r && Ys(g, r),
    g
}
/*!
 * Observer 3.11.2
 * https://greensock.com
 *
 * @license Copyright 2008-2022, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/
var st, Uo, Tt, kn, Bn, Er, xl, qn, ti, _l, _n, Ut, yl = function() {
    return st || typeof window < "u" && (st = window.gsap) && st.registerPlugin && st
}, Cl = 1, xr = [], de = [], un = [], ni = Date.now, Go = function(e, r) {
    return r
}, xf = function() {
    var e = ti.core
      , r = e.bridge || {}
      , i = e._scrollers
      , n = e._proxies;
    i.push.apply(i, de),
    n.push.apply(n, un),
    de = i,
    un = n,
    Go = function(o, s) {
        return r[o](s)
    }
}, zn = function(e, r) {
    return ~un.indexOf(e) && un[un.indexOf(e) + 1][r]
}, ri = function(e) {
    return !!~_l.indexOf(e)
}, mt = function(e, r, i, n, t) {
    return e.addEventListener(r, i, {
        passive: !n,
        capture: !!t
    })
}, ut = function(e, r, i, n) {
    return e.removeEventListener(r, i, !!n)
}, yi = "scrollLeft", Ci = "scrollTop", qo = function() {
    return _n && _n.isPressed || de.cache++
}, eo = function(e, r) {
    var i = function n(t) {
        if (t || t === 0) {
            Cl && (Tt.history.scrollRestoration = "manual");
            var o = _n && _n.isPressed;
            t = n.v = Math.round(t) || (_n && _n.iOS ? 1 : 0),
            e(t),
            n.cacheID = de.cache,
            o && Go("ss", t)
        } else
            (r || de.cache !== n.cacheID || Go("ref")) && (n.cacheID = de.cache,
            n.v = e());
        return n.v + n.offset
    };
    return i.offset = 0,
    e && i
}, dt = {
    s: yi,
    p: "left",
    p2: "Left",
    os: "right",
    os2: "Right",
    d: "width",
    d2: "Width",
    a: "x",
    sc: eo(function(g) {
        return arguments.length ? Tt.scrollTo(g, qe.sc()) : Tt.pageXOffset || kn[yi] || Bn[yi] || Er[yi] || 0
    })
}, qe = {
    s: Ci,
    p: "top",
    p2: "Top",
    os: "bottom",
    os2: "Bottom",
    d: "height",
    d2: "Height",
    a: "y",
    op: dt,
    sc: eo(function(g) {
        return arguments.length ? Tt.scrollTo(dt.sc(), g) : Tt.pageYOffset || kn[Ci] || Bn[Ci] || Er[Ci] || 0
    })
}, Dt = function(e) {
    return st.utils.toArray(e)[0] || (typeof e == "string" && st.config().nullTargetWarn !== !1 ? console.warn("Element not found:", e) : null)
}, Hn = function(e, r) {
    var i = r.s
      , n = r.sc;
    ri(e) && (e = kn.scrollingElement || Bn);
    var t = de.indexOf(e)
      , o = n === qe.sc ? 1 : 2;
    !~t && (t = de.push(e) - 1),
    de[t + o] || e.addEventListener("scroll", qo);
    var s = de[t + o]
      , l = s || (de[t + o] = eo(zn(e, i), !0) || (ri(e) ? n : eo(function(f) {
        return arguments.length ? e[i] = f : e[i]
    })));
    return l.target = e,
    s || (l.smooth = st.getProperty(e, "scrollBehavior") === "smooth"),
    l
}, Ko = function(e, r, i) {
    var n = e
      , t = e
      , o = ni()
      , s = o
      , l = r || 50
      , f = Math.max(500, l * 3)
      , u = function(d, h) {
        var m = ni();
        h || m - o > l ? (t = n,
        n = d,
        s = o,
        o = m) : i ? n += d : n = t + (d - t) / (m - s) * (o - s)
    }
      , p = function() {
        t = n = i ? 0 : n,
        s = o = 0
    }
      , c = function(d) {
        var h = s
          , m = t
          , x = ni();
        return (d || d === 0) && d !== n && u(d),
        o === s || x - s > f ? 0 : (n + (i ? m : -m)) / ((i ? x : o) - h) * 1e3
    };
    return {
        update: u,
        reset: p,
        getVelocity: c
    }
}, Wr = function(e, r) {
    return r && !e._gsapAllow && e.preventDefault(),
    e.changedTouches ? e.changedTouches[0] : e
}, Xs = function(e) {
    var r = Math.max.apply(Math, e)
      , i = Math.min.apply(Math, e);
    return Math.abs(r) >= Math.abs(i) ? r : i
}, wl = function() {
    ti = st.core.globals().ScrollTrigger,
    ti && ti.core && xf()
}, Sl = function(e) {
    return st = e || yl(),
    st && typeof document < "u" && document.body && (Tt = window,
    kn = document,
    Bn = kn.documentElement,
    Er = kn.body,
    _l = [Tt, kn, Bn, Er],
    st.utils.clamp,
    qn = "onpointerenter"in Er ? "pointer" : "mouse",
    xl = We.isTouch = Tt.matchMedia && Tt.matchMedia("(hover: none), (pointer: coarse)").matches ? 1 : "ontouchstart"in Tt || navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0 ? 2 : 0,
    Ut = We.eventTypes = ("ontouchstart"in Bn ? "touchstart,touchmove,touchcancel,touchend" : "onpointerdown"in Bn ? "pointerdown,pointermove,pointercancel,pointerup" : "mousedown,mousemove,mouseup,mouseup").split(","),
    setTimeout(function() {
        return Cl = 0
    }, 500),
    wl(),
    Uo = 1),
    Uo
};
dt.op = qe;
de.cache = 0;
var We = function() {
    function g(r) {
        this.init(r)
    }
    var e = g.prototype;
    return e.init = function(i) {
        Uo || Sl(st) || console.warn("Please gsap.registerPlugin(Observer)"),
        ti || wl();
        var n = i.tolerance
          , t = i.dragMinimum
          , o = i.type
          , s = i.target
          , l = i.lineHeight
          , f = i.debounce
          , u = i.preventDefault
          , p = i.onStop
          , c = i.onStopDelay
          , a = i.ignore
          , d = i.wheelSpeed
          , h = i.event
          , m = i.onDragStart
          , x = i.onDragEnd
          , P = i.onDrag
          , C = i.onPress
          , v = i.onRelease
          , _ = i.onRight
          , y = i.onLeft
          , D = i.onUp
          , w = i.onDown
          , S = i.onChangeX
          , F = i.onChangeY
          , E = i.onChange
          , T = i.onToggleX
          , k = i.onToggleY
          , O = i.onHover
          , R = i.onHoverEnd
          , B = i.onMove
          , I = i.ignoreCheck
          , V = i.isNormalizer
          , M = i.onGestureStart
          , b = i.onGestureEnd
          , U = i.onWheel
          , Z = i.onEnable
          , oe = i.onDisable
          , re = i.onClick
          , q = i.scrollSpeed
          , ee = i.capture
          , ne = i.allowClicks
          , He = i.lockAxis
          , Zt = i.onLockAxis;
        this.target = s = Dt(s) || Bn,
        this.vars = i,
        a && (a = st.utils.toArray(a)),
        n = n || 1e-9,
        t = t || 0,
        d = d || 1,
        q = q || 1,
        o = o || "wheel,touch,pointer",
        f = f !== !1,
        l || (l = parseFloat(Tt.getComputedStyle(Er).lineHeight) || 22);
        var $e, Oe, J, we, N, L, H, A = this, j = 0, K = 0, _e = Hn(s, dt), ae = Hn(s, qe), se = _e(), ge = ae(), Se = ~o.indexOf("touch") && !~o.indexOf("pointer") && Ut[0] === "pointerdown", Qe = ri(s), he = s.ownerDocument || kn, Je = [0, 0, 0], Re = [0, 0, 0], En = 0, kt = function() {
            return En = ni()
        }, lt = function(z, Y) {
            return (A.event = z) && a && ~a.indexOf(z.target) || Y && Se && z.pointerType !== "touch" || I && I(z, Y)
        }, cn = function() {
            A._vx.reset(),
            A._vy.reset(),
            Oe.pause(),
            p && p(A)
        }, gt = function() {
            var z = A.deltaX = Xs(Je)
              , Y = A.deltaY = Xs(Re)
              , X = Math.abs(z) >= n
              , te = Math.abs(Y) >= n;
            E && (X || te) && E(A, z, Y, Je, Re),
            X && (_ && A.deltaX > 0 && _(A),
            y && A.deltaX < 0 && y(A),
            S && S(A),
            T && A.deltaX < 0 != j < 0 && T(A),
            j = A.deltaX,
            Je[0] = Je[1] = Je[2] = 0),
            te && (w && A.deltaY > 0 && w(A),
            D && A.deltaY < 0 && D(A),
            F && F(A),
            k && A.deltaY < 0 != K < 0 && k(A),
            K = A.deltaY,
            Re[0] = Re[1] = Re[2] = 0),
            (we || J) && (B && B(A),
            J && (P(A),
            J = !1),
            we = !1),
            L && !(L = !1) && Zt && Zt(A),
            N && (U(A),
            N = !1),
            $e = 0
        }, Qt = function(z, Y, X) {
            Je[X] += z,
            Re[X] += Y,
            A._vx.update(z),
            A._vy.update(Y),
            f ? $e || ($e = requestAnimationFrame(gt)) : gt()
        }, Ht = function(z, Y) {
            He && !H && (A.axis = H = Math.abs(z) > Math.abs(Y) ? "x" : "y",
            L = !0),
            H !== "y" && (Je[2] += z,
            A._vx.update(z, !0)),
            H !== "x" && (Re[2] += Y,
            A._vy.update(Y, !0)),
            f ? $e || ($e = requestAnimationFrame(gt)) : gt()
        }, Q = function(z) {
            if (!lt(z, 1)) {
                z = Wr(z, u);
                var Y = z.clientX
                  , X = z.clientY
                  , te = Y - A.x
                  , Xe = X - A.y
                  , ie = A.isDragging;
                A.x = Y,
                A.y = X,
                (ie || Math.abs(A.startX - Y) >= t || Math.abs(A.startY - X) >= t) && (P && (J = !0),
                ie || (A.isDragging = !0),
                Ht(te, Xe),
                ie || m && m(A))
            }
        }, Me = A.onPress = function(pe) {
            lt(pe, 1) || (A.axis = H = null,
            Oe.pause(),
            A.isPressed = !0,
            pe = Wr(pe),
            j = K = 0,
            A.startX = A.x = pe.clientX,
            A.startY = A.y = pe.clientY,
            A._vx.reset(),
            A._vy.reset(),
            mt(V ? s : he, Ut[1], Q, u, !0),
            A.deltaX = A.deltaY = 0,
            C && C(A))
        }
        , Ye = function(z) {
            if (!lt(z, 1)) {
                ut(V ? s : he, Ut[1], Q, !0);
                var Y = A.isDragging && (Math.abs(A.x - A.startX) > 3 || Math.abs(A.y - A.startY) > 3)
                  , X = Wr(z);
                Y || (A._vx.reset(),
                A._vy.reset(),
                u && ne && st.delayedCall(.08, function() {
                    if (ni() - En > 300 && !z.defaultPrevented) {
                        if (z.target.click)
                            z.target.click();
                        else if (he.createEvent) {
                            var te = he.createEvent("MouseEvents");
                            te.initMouseEvent("click", !0, !0, Tt, 1, X.screenX, X.screenY, X.clientX, X.clientY, !1, !1, !1, !1, 0, null),
                            z.target.dispatchEvent(te)
                        }
                    }
                })),
                A.isDragging = A.isGesturing = A.isPressed = !1,
                p && !V && Oe.restart(!0),
                x && Y && x(A),
                v && v(A, Y)
            }
        }, tt = function(z) {
            return z.touches && z.touches.length > 1 && (A.isGesturing = !0) && M(z, A.isDragging)
        }, ke = function() {
            return (A.isGesturing = !1) || b(A)
        }, nt = function(z) {
            if (!lt(z)) {
                var Y = _e()
                  , X = ae();
                Qt((Y - se) * q, (X - ge) * q, 1),
                se = Y,
                ge = X,
                p && Oe.restart(!0)
            }
        }, $t = function(z) {
            if (!lt(z)) {
                z = Wr(z, u),
                U && (N = !0);
                var Y = (z.deltaMode === 1 ? l : z.deltaMode === 2 ? Tt.innerHeight : 1) * d;
                Qt(z.deltaX * Y, z.deltaY * Y, 0),
                p && !V && Oe.restart(!0)
            }
        }, Fn = function(z) {
            if (!lt(z)) {
                var Y = z.clientX
                  , X = z.clientY
                  , te = Y - A.x
                  , Xe = X - A.y;
                A.x = Y,
                A.y = X,
                we = !0,
                (te || Xe) && Ht(te, Xe)
            }
        }, hn = function(z) {
            A.event = z,
            O(A)
        }, Ir = function(z) {
            A.event = z,
            R(A)
        }, zr = function(z) {
            return lt(z) || Wr(z, u) && re(A)
        };
        Oe = A._dc = st.delayedCall(c || .25, cn).pause(),
        A.deltaX = A.deltaY = 0,
        A._vx = Ko(0, 50, !0),
        A._vy = Ko(0, 50, !0),
        A.scrollX = _e,
        A.scrollY = ae,
        A.isDragging = A.isGesturing = A.isPressed = !1,
        A.enable = function(pe) {
            return A.isEnabled || (mt(Qe ? he : s, "scroll", qo),
            o.indexOf("scroll") >= 0 && mt(Qe ? he : s, "scroll", nt, u, ee),
            o.indexOf("wheel") >= 0 && mt(s, "wheel", $t, u, ee),
            (o.indexOf("touch") >= 0 && xl || o.indexOf("pointer") >= 0) && (mt(s, Ut[0], Me, u, ee),
            mt(he, Ut[2], Ye),
            mt(he, Ut[3], Ye),
            ne && mt(s, "click", kt, !1, !0),
            re && mt(s, "click", zr),
            M && mt(he, "gesturestart", tt),
            b && mt(he, "gestureend", ke),
            O && mt(s, qn + "enter", hn),
            R && mt(s, qn + "leave", Ir),
            B && mt(s, qn + "move", Fn)),
            A.isEnabled = !0,
            pe && pe.type && Me(pe),
            Z && Z(A)),
            A
        }
        ,
        A.disable = function() {
            A.isEnabled && (xr.filter(function(pe) {
                return pe !== A && ri(pe.target)
            }).length || ut(Qe ? he : s, "scroll", qo),
            A.isPressed && (A._vx.reset(),
            A._vy.reset(),
            ut(V ? s : he, Ut[1], Q, !0)),
            ut(Qe ? he : s, "scroll", nt, ee),
            ut(s, "wheel", $t, ee),
            ut(s, Ut[0], Me, ee),
            ut(he, Ut[2], Ye),
            ut(he, Ut[3], Ye),
            ut(s, "click", kt, !0),
            ut(s, "click", zr),
            ut(he, "gesturestart", tt),
            ut(he, "gestureend", ke),
            ut(s, qn + "enter", hn),
            ut(s, qn + "leave", Ir),
            ut(s, qn + "move", Fn),
            A.isEnabled = A.isPressed = A.isDragging = !1,
            oe && oe(A))
        }
        ,
        A.kill = function() {
            A.disable();
            var pe = xr.indexOf(A);
            pe >= 0 && xr.splice(pe, 1),
            _n === A && (_n = 0)
        }
        ,
        xr.push(A),
        V && ri(s) && (_n = A),
        A.enable(h)
    }
    ,
    Df(g, [{
        key: "velocityX",
        get: function() {
            return this._vx.getVelocity()
        }
    }, {
        key: "velocityY",
        get: function() {
            return this._vy.getVelocity()
        }
    }]),
    g
}();
We.version = "3.11.2";
We.create = function(g) {
    return new We(g)
}
;
We.register = Sl;
We.getAll = function() {
    return xr.slice()
}
;
We.getById = function(g) {
    return xr.filter(function(e) {
        return e.vars.id === g
    })[0]
}
;
yl() && st.registerPlugin(We);
/*!
 * ScrollToPlugin 3.11.2
 * https://greensock.com
 *
 * @license Copyright 2008-2022, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/
var _t, Pl, Cn, an, Nn, El, Fl, Tl = function() {
    return typeof window < "u"
}, bl = function() {
    return _t || Tl() && (_t = window.gsap) && _t.registerPlugin && _t
}, Al = function(e) {
    return typeof e == "string"
}, Us = function(e) {
    return typeof e == "function"
}, pi = function(e, r) {
    var i = r === "x" ? "Width" : "Height"
      , n = "scroll" + i
      , t = "client" + i;
    return e === Cn || e === an || e === Nn ? Math.max(an[n], Nn[n]) - (Cn["inner" + i] || an[t] || Nn[t]) : e[n] - e["offset" + i]
}, gi = function(e, r) {
    var i = "scroll" + (r === "x" ? "Left" : "Top");
    return e === Cn && (e.pageXOffset != null ? i = "page" + r.toUpperCase() + "Offset" : e = an[i] != null ? an : Nn),
    function() {
        return e[i]
    }
}, _f = function(e, r, i, n) {
    if (Us(e) && (e = e(r, i, n)),
    typeof e != "object")
        return Al(e) && e !== "max" && e.charAt(1) !== "=" ? {
            x: e,
            y: e
        } : {
            y: e
        };
    if (e.nodeType)
        return {
            y: e,
            x: e
        };
    var t = {}, o;
    for (o in e)
        t[o] = o !== "onAutoKill" && Us(e[o]) ? e[o](r, i, n) : e[o];
    return t
}, Ml = function(e, r) {
    if (e = El(e)[0],
    !e || !e.getBoundingClientRect)
        return console.warn("scrollTo target doesn't exist. Using 0") || {
            x: 0,
            y: 0
        };
    var i = e.getBoundingClientRect()
      , n = !r || r === Cn || r === Nn
      , t = n ? {
        top: an.clientTop - (Cn.pageYOffset || an.scrollTop || Nn.scrollTop || 0),
        left: an.clientLeft - (Cn.pageXOffset || an.scrollLeft || Nn.scrollLeft || 0)
    } : r.getBoundingClientRect()
      , o = {
        x: i.left - t.left,
        y: i.top - t.top
    };
    return !n && r && (o.x += gi(r, "x")(),
    o.y += gi(r, "y")()),
    o
}, Gs = function(e, r, i, n, t) {
    return !isNaN(e) && typeof e != "object" ? parseFloat(e) - t : Al(e) && e.charAt(1) === "=" ? parseFloat(e.substr(2)) * (e.charAt(0) === "-" ? -1 : 1) + n - t : e === "max" ? pi(r, i) - t : Math.min(pi(r, i), Ml(e, r)[i] - t)
}, qs = function() {
    _t = bl(),
    Tl() && _t && document.body && (Cn = window,
    Nn = document.body,
    an = document.documentElement,
    El = _t.utils.toArray,
    _t.config({
        autoKillThreshold: 7
    }),
    Fl = _t.config(),
    Pl = 1)
}, xi = {
    version: "3.11.2",
    name: "scrollTo",
    rawVars: 1,
    register: function(e) {
        _t = e,
        qs()
    },
    init: function(e, r, i, n, t) {
        Pl || qs();
        var o = this
          , s = _t.getProperty(e, "scrollSnapType");
        o.isWin = e === Cn,
        o.target = e,
        o.tween = i,
        r = _f(r, n, e, t),
        o.vars = r,
        o.autoKill = !!r.autoKill,
        o.getX = gi(e, "x"),
        o.getY = gi(e, "y"),
        o.x = o.xPrev = o.getX(),
        o.y = o.yPrev = o.getY(),
        _t.getProperty(e, "scrollBehavior") === "smooth" && _t.set(e, {
            scrollBehavior: "auto"
        }),
        s && s !== "none" && (o.snap = 1,
        o.snapInline = e.style.scrollSnapType,
        e.style.scrollSnapType = "none"),
        r.x != null ? (o.add(o, "x", o.x, Gs(r.x, e, "x", o.x, r.offsetX || 0), n, t),
        o._props.push("scrollTo_x")) : o.skipX = 1,
        r.y != null ? (o.add(o, "y", o.y, Gs(r.y, e, "y", o.y, r.offsetY || 0), n, t),
        o._props.push("scrollTo_y")) : o.skipY = 1
    },
    render: function(e, r) {
        for (var i = r._pt, n = r.target, t = r.tween, o = r.autoKill, s = r.xPrev, l = r.yPrev, f = r.isWin, u = r.snap, p = r.snapInline, c, a, d, h, m; i; )
            i.r(e, i.d),
            i = i._next;
        c = f || !r.skipX ? r.getX() : s,
        a = f || !r.skipY ? r.getY() : l,
        d = a - l,
        h = c - s,
        m = Fl.autoKillThreshold,
        r.x < 0 && (r.x = 0),
        r.y < 0 && (r.y = 0),
        o && (!r.skipX && (h > m || h < -m) && c < pi(n, "x") && (r.skipX = 1),
        !r.skipY && (d > m || d < -m) && a < pi(n, "y") && (r.skipY = 1),
        r.skipX && r.skipY && (t.kill(),
        r.vars.onAutoKill && r.vars.onAutoKill.apply(t, r.vars.onAutoKillParams || []))),
        f ? Cn.scrollTo(r.skipX ? c : r.x, r.skipY ? a : r.y) : (r.skipY || (n.scrollTop = r.y),
        r.skipX || (n.scrollLeft = r.x)),
        u && (e === 1 || e === 0) && (a = n.scrollTop,
        c = n.scrollLeft,
        p ? n.style.scrollSnapType = p : n.style.removeProperty("scroll-snap-type"),
        n.scrollTop = a + 1,
        n.scrollLeft = c + 1,
        n.scrollTop = a,
        n.scrollLeft = c),
        r.xPrev = r.x,
        r.yPrev = r.y
    },
    kill: function(e) {
        var r = e === "scrollTo";
        (r || e === "scrollTo_x") && (this.skipX = 1),
        (r || e === "scrollTo_y") && (this.skipY = 1)
    }
};
xi.max = pi;
xi.getOffset = Ml;
xi.buildGetter = gi;
bl() && _t.registerPlugin(xi);
/*!
 * ScrollTrigger 3.11.2
 * https://greensock.com
 *
 * @license Copyright 2008-2022, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/
var G, pr, fe, Te, yn, be, kl, to, no, _r, zi, wi, it, ao, Zo, ct, Ks, Zs, gr, Bl, xo, Ol, Rt, Rl, Ll, Il, Tn, Qo, xs, _o, Si = 1, ht = Date.now, yo = ht(), Vt = 0, Pi = 0, Qs = function() {
    return ao = 1
}, Js = function() {
    return ao = 0
}, tn = function(e) {
    return e
}, qr = function(e) {
    return Math.round(e * 1e5) / 1e5 || 0
}, zl = function() {
    return typeof window < "u"
}, Nl = function() {
    return G || zl() && (G = window.gsap) && G.registerPlugin && G
}, or = function(e) {
    return !!~kl.indexOf(e)
}, Vl = function(e) {
    return zn(e, "getBoundingClientRect") || (or(e) ? function() {
        return Xi.width = fe.innerWidth,
        Xi.height = fe.innerHeight,
        Xi
    }
    : function() {
        return Dn(e)
    }
    )
}, yf = function(e, r, i) {
    var n = i.d
      , t = i.d2
      , o = i.a;
    return (o = zn(e, "getBoundingClientRect")) ? function() {
        return o()[n]
    }
    : function() {
        return (r ? fe["inner" + t] : e["client" + t]) || 0
    }
}, Cf = function(e, r) {
    return !r || ~un.indexOf(e) ? Vl(e) : function() {
        return Xi
    }
}, On = function(e, r) {
    var i = r.s
      , n = r.d2
      , t = r.d
      , o = r.a;
    return (i = "scroll" + n) && (o = zn(e, i)) ? o() - Vl(e)()[t] : or(e) ? (yn[i] || be[i]) - (fe["inner" + n] || yn["client" + n] || be["client" + n]) : e[i] - e["offset" + n]
}, Ei = function(e, r) {
    for (var i = 0; i < gr.length; i += 3)
        (!r || ~r.indexOf(gr[i + 1])) && e(gr[i], gr[i + 1], gr[i + 2])
}, qt = function(e) {
    return typeof e == "string"
}, bt = function(e) {
    return typeof e == "function"
}, Kr = function(e) {
    return typeof e == "number"
}, Ni = function(e) {
    return typeof e == "object"
}, Hr = function(e, r, i) {
    return e && e.progress(r ? 0 : 1) && i && e.pause()
}, Co = function(e, r) {
    if (e.enabled) {
        var i = r(e);
        i && i.totalTime && (e.callbackAnimation = i)
    }
}, hr = Math.abs, Wl = "left", Hl = "top", _s = "right", ys = "bottom", nr = "width", rr = "height", ii = "Right", oi = "Left", si = "Top", ai = "Bottom", Ne = "padding", Lt = "margin", Or = "Width", Cs = "Height", ft = "px", on = function(e) {
    return fe.getComputedStyle(e)
}, wf = function(e) {
    var r = on(e).position;
    e.style.position = r === "absolute" || r === "fixed" ? r : "relative"
}, js = function(e, r) {
    for (var i in r)
        i in e || (e[i] = r[i]);
    return e
}, Dn = function(e, r) {
    var i = r && on(e)[Zo] !== "matrix(1, 0, 0, 1, 0, 0)" && G.to(e, {
        x: 0,
        y: 0,
        xPercent: 0,
        yPercent: 0,
        rotation: 0,
        rotationX: 0,
        rotationY: 0,
        scale: 1,
        skewX: 0,
        skewY: 0
    }).progress(1)
      , n = e.getBoundingClientRect();
    return i && i.progress(0).kill(),
    n
}, Jo = function(e, r) {
    var i = r.d2;
    return e["offset" + i] || e["client" + i] || 0
}, $l = function(e) {
    var r = [], i = e.labels, n = e.duration(), t;
    for (t in i)
        r.push(i[t] / n);
    return r
}, Sf = function(e) {
    return function(r) {
        return G.utils.snap($l(e), r)
    }
}, ws = function(e) {
    var r = G.utils.snap(e)
      , i = Array.isArray(e) && e.slice(0).sort(function(n, t) {
        return n - t
    });
    return i ? function(n, t, o) {
        o === void 0 && (o = .001);
        var s;
        if (!t)
            return r(n);
        if (t > 0) {
            for (n -= o,
            s = 0; s < i.length; s++)
                if (i[s] >= n)
                    return i[s];
            return i[s - 1]
        } else
            for (s = i.length,
            n += o; s--; )
                if (i[s] <= n)
                    return i[s];
        return i[0]
    }
    : function(n, t, o) {
        o === void 0 && (o = .001);
        var s = r(n);
        return !t || Math.abs(s - n) < o || s - n < 0 == t < 0 ? s : r(t < 0 ? n - e : n + e)
    }
}, Pf = function(e) {
    return function(r, i) {
        return ws($l(e))(r, i.direction)
    }
}, Fi = function(e, r, i, n) {
    return i.split(",").forEach(function(t) {
        return e(r, t, n)
    })
}, je = function(e, r, i, n, t) {
    return e.addEventListener(r, i, {
        passive: !n,
        capture: !!t
    })
}, Ke = function(e, r, i, n) {
    return e.removeEventListener(r, i, !!n)
}, Ti = function(e, r, i) {
    return i && i.wheelHandler && e(r, "wheel", i)
}, ea = {
    startColor: "green",
    endColor: "red",
    indent: 0,
    fontSize: "16px",
    fontWeight: "normal"
}, bi = {
    toggleActions: "play",
    anticipatePin: 0
}, ro = {
    top: 0,
    left: 0,
    center: .5,
    bottom: 1,
    right: 1
}, Vi = function(e, r) {
    if (qt(e)) {
        var i = e.indexOf("=")
          , n = ~i ? +(e.charAt(i - 1) + 1) * parseFloat(e.substr(i + 1)) : 0;
        ~i && (e.indexOf("%") > i && (n *= r / 100),
        e = e.substr(0, i - 1)),
        e = n + (e in ro ? ro[e] * r : ~e.indexOf("%") ? parseFloat(e) * r / 100 : parseFloat(e) || 0)
    }
    return e
}, Ai = function(e, r, i, n, t, o, s, l) {
    var f = t.startColor
      , u = t.endColor
      , p = t.fontSize
      , c = t.indent
      , a = t.fontWeight
      , d = Te.createElement("div")
      , h = or(i) || zn(i, "pinType") === "fixed"
      , m = e.indexOf("scroller") !== -1
      , x = h ? be : i
      , P = e.indexOf("start") !== -1
      , C = P ? f : u
      , v = "border-color:" + C + ";font-size:" + p + ";color:" + C + ";font-weight:" + a + ";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";
    return v += "position:" + ((m || l) && h ? "fixed;" : "absolute;"),
    (m || l || !h) && (v += (n === qe ? _s : ys) + ":" + (o + parseFloat(c)) + "px;"),
    s && (v += "box-sizing:border-box;text-align:left;width:" + s.offsetWidth + "px;"),
    d._isStart = P,
    d.setAttribute("class", "gsap-marker-" + e + (r ? " marker-" + r : "")),
    d.style.cssText = v,
    d.innerText = r || r === 0 ? e + "-" + r : e,
    x.children[0] ? x.insertBefore(d, x.children[0]) : x.appendChild(d),
    d._offset = d["offset" + n.op.d2],
    Wi(d, 0, n, P),
    d
}, Wi = function(e, r, i, n) {
    var t = {
        display: "block"
    }
      , o = i[n ? "os2" : "p2"]
      , s = i[n ? "p2" : "os2"];
    e._isFlipped = n,
    t[i.a + "Percent"] = n ? -100 : 0,
    t[i.a] = n ? "1px" : 0,
    t["border" + o + Or] = 1,
    t["border" + s + Or] = 0,
    t[i.p] = r + "px",
    G.set(e, t)
}, ue = [], jo = {}, es, ta = function() {
    return ht() - Vt > 34 && Rr()
}, dr = function() {
    (!Rt || !Rt.isPressed || Rt.startX > be.clientWidth) && (de.cache++,
    es || (es = requestAnimationFrame(Rr)),
    Vt || ar("scrollStart"),
    Vt = ht())
}, wo = function() {
    Il = fe.innerWidth,
    Ll = fe.innerHeight
}, Zr = function() {
    de.cache++,
    !it && !Ol && !Te.fullscreenElement && !Te.webkitFullscreenElement && (!Rl || Il !== fe.innerWidth || Math.abs(fe.innerHeight - Ll) > fe.innerHeight * .25) && to.restart(!0)
}, sr = {}, Ef = [], Yl = function g() {
    return Ke($, "scrollEnd", g) || yr(!0)
}, ar = function(e) {
    return sr[e] && sr[e].map(function(r) {
        return r()
    }) || Ef
}, Pt = [], Xl = function(e) {
    for (var r = 0; r < Pt.length; r += 5)
        (!e || Pt[r + 4] && Pt[r + 4].query === e) && (Pt[r].style.cssText = Pt[r + 1],
        Pt[r].getBBox && Pt[r].setAttribute("transform", Pt[r + 2] || ""),
        Pt[r + 3].uncache = 1)
}, Ss = function(e, r) {
    var i;
    for (ct = 0; ct < ue.length; ct++)
        i = ue[ct],
        i && (!r || i._ctx === r) && (e ? i.kill(1) : i.revert(!0, !0));
    r && Xl(r),
    r || ar("revert")
}, Ul = function(e, r) {
    de.cache++,
    (r || !nn) && de.forEach(function(i) {
        return bt(i) && i.cacheID++ && (i.rec = 0)
    }),
    qt(e) && (fe.history.scrollRestoration = xs = e)
}, nn, Hi = 0, yr = function(e, r) {
    if (Vt && !e) {
        je($, "scrollEnd", Yl);
        return
    }
    nn = $.isRefreshing = !0,
    de.forEach(function(n) {
        return bt(n) && n.cacheID++ && (n.rec = n())
    });
    var i = ar("refreshInit");
    Bl && $.sort(),
    r || Ss(),
    de.forEach(function(n) {
        bt(n) && (n.smooth && (n.target.style.scrollBehavior = "auto"),
        n(0))
    }),
    ue.slice(0).forEach(function(n) {
        return n.refresh()
    }),
    ue.forEach(function(n) {
        return n.vars.end === "max" && n.setPositions(n.start, Math.max(n.start + 1, On(n.scroller, n._dir)))
    }),
    i.forEach(function(n) {
        return n && n.render && n.render(-1)
    }),
    de.forEach(function(n) {
        bt(n) && (n.smooth && requestAnimationFrame(function() {
            return n.target.style.scrollBehavior = "smooth"
        }),
        n.rec && n(n.rec))
    }),
    Ul(xs, 1),
    to.pause(),
    Hi++,
    Rr(2),
    nn = $.isRefreshing = !1,
    ar("refresh")
}, na = 0, $i = 1, Zn, Rr = function(e) {
    if (!nn || e === 2) {
        $.isUpdating = !0,
        Zn && Zn.update(0);
        var r = ue.length
          , i = ht()
          , n = i - yo >= 50
          , t = r && ue[0].scroll();
        if ($i = na > t ? -1 : 1,
        na = t,
        n && (Vt && !ao && i - Vt > 200 && (Vt = 0,
        ar("scrollEnd")),
        zi = yo,
        yo = i),
        $i < 0) {
            for (ct = r; ct-- > 0; )
                ue[ct] && ue[ct].update(0, n);
            $i = 1
        } else
            for (ct = 0; ct < r; ct++)
                ue[ct] && ue[ct].update(0, n);
        $.isUpdating = !1
    }
    es = 0
}, ts = [Wl, Hl, ys, _s, Lt + ai, Lt + ii, Lt + si, Lt + oi, "display", "flexShrink", "float", "zIndex", "gridColumnStart", "gridColumnEnd", "gridRowStart", "gridRowEnd", "gridArea", "justifySelf", "alignSelf", "placeSelf", "order"], Yi = ts.concat([nr, rr, "boxSizing", "max" + Or, "max" + Cs, "position", Lt, Ne, Ne + si, Ne + ii, Ne + ai, Ne + oi]), Ff = function(e, r, i) {
    mi(i);
    var n = e._gsap;
    if (n.spacerIsNative)
        mi(n.spacerState);
    else if (e._gsap.swappedIn) {
        var t = r.parentNode;
        t && (t.insertBefore(e, r),
        t.removeChild(r))
    }
    e._gsap.swappedIn = !1
}, So = function(e, r, i, n) {
    if (!e._gsap.swappedIn) {
        for (var t = ts.length, o = r.style, s = e.style, l; t--; )
            l = ts[t],
            o[l] = i[l];
        o.position = i.position === "absolute" ? "absolute" : "relative",
        i.display === "inline" && (o.display = "inline-block"),
        s[ys] = s[_s] = "auto",
        o.flexBasis = i.flexBasis || "auto",
        o.overflow = "visible",
        o.boxSizing = "border-box",
        o[nr] = Jo(e, dt) + ft,
        o[rr] = Jo(e, qe) + ft,
        o[Ne] = s[Lt] = s[Hl] = s[Wl] = "0",
        mi(n),
        s[nr] = s["max" + Or] = i[nr],
        s[rr] = s["max" + Cs] = i[rr],
        s[Ne] = i[Ne],
        e.parentNode !== r && (e.parentNode.insertBefore(r, e),
        r.appendChild(e)),
        e._gsap.swappedIn = !0
    }
}, Tf = /([A-Z])/g, mi = function(e) {
    if (e) {
        var r = e.t.style, i = e.length, n = 0, t, o;
        for ((e.t._gsap || G.core.getCache(e.t)).uncache = 1; n < i; n += 2)
            o = e[n + 1],
            t = e[n],
            o ? r[t] = o : r[t] && r.removeProperty(t.replace(Tf, "-$1").toLowerCase())
    }
}, Mi = function(e) {
    for (var r = Yi.length, i = e.style, n = [], t = 0; t < r; t++)
        n.push(Yi[t], i[Yi[t]]);
    return n.t = e,
    n
}, bf = function(e, r, i) {
    for (var n = [], t = e.length, o = i ? 8 : 0, s; o < t; o += 2)
        s = e[o],
        n.push(s, s in r ? r[s] : e[o + 1]);
    return n.t = e.t,
    n
}, Xi = {
    left: 0,
    top: 0
}, ra = function(e, r, i, n, t, o, s, l, f, u, p, c, a) {
    bt(e) && (e = e(l)),
    qt(e) && e.substr(0, 3) === "max" && (e = c + (e.charAt(4) === "=" ? Vi("0" + e.substr(3), i) : 0));
    var d = a ? a.time() : 0, h, m, x;
    if (a && a.seek(0),
    Kr(e))
        s && Wi(s, i, n, !0);
    else {
        bt(r) && (r = r(l));
        var P = (e || "0").split(" "), C, v, _, y;
        x = Dt(r) || be,
        C = Dn(x) || {},
        (!C || !C.left && !C.top) && on(x).display === "none" && (y = x.style.display,
        x.style.display = "block",
        C = Dn(x),
        y ? x.style.display = y : x.style.removeProperty("display")),
        v = Vi(P[0], C[n.d]),
        _ = Vi(P[1] || "0", i),
        e = C[n.p] - f[n.p] - u + v + t - _,
        s && Wi(s, _, n, i - _ < 20 || s._isStart && _ > 20),
        i -= i - _
    }
    if (o) {
        var D = e + i
          , w = o._isStart;
        h = "scroll" + n.d2,
        Wi(o, D, n, w && D > 20 || !w && (p ? Math.max(be[h], yn[h]) : o.parentNode[h]) <= D + 1),
        p && (f = Dn(s),
        p && (o.style[n.op.p] = f[n.op.p] - n.op.m - o._offset + ft))
    }
    return a && x && (h = Dn(x),
    a.seek(c),
    m = Dn(x),
    a._caScrollDist = h[n.p] - m[n.p],
    e = e / a._caScrollDist * c),
    a && a.seek(d),
    a ? e : Math.round(e)
}, Af = /(webkit|moz|length|cssText|inset)/i, ia = function(e, r, i, n) {
    if (e.parentNode !== r) {
        var t = e.style, o, s;
        if (r === be) {
            e._stOrig = t.cssText,
            s = on(e);
            for (o in s)
                !+o && !Af.test(o) && s[o] && typeof t[o] == "string" && o !== "0" && (t[o] = s[o]);
            t.top = i,
            t.left = n
        } else
            t.cssText = e._stOrig;
        G.core.getCache(e).uncache = 1,
        r.appendChild(e)
    }
}, oa = function(e, r) {
    var i = Hn(e, r), n = "_scroll" + r.p2, t, o, s = function l(f, u, p, c, a) {
        var d = l.tween
          , h = u.onComplete
          , m = {};
        return p = p || i(),
        a = c && a || 0,
        c = c || f - p,
        d && d.kill(),
        t = Math.round(p),
        u[n] = f,
        u.modifiers = m,
        m[n] = function(x) {
            return x = Math.round(i()),
            x !== t && x !== o && Math.abs(x - t) > 3 && Math.abs(x - o) > 3 ? (d.kill(),
            l.tween = 0) : x = p + c * d.ratio + a * d.ratio * d.ratio,
            o = t,
            t = Math.round(x)
        }
        ,
        u.onComplete = function() {
            l.tween = 0,
            h && h.call(d)
        }
        ,
        d = l.tween = G.to(e, u),
        d
    };
    return e[n] = i,
    i.wheelHandler = function() {
        return s.tween && s.tween.kill() && (s.tween = 0)
    }
    ,
    je(e, "wheel", i.wheelHandler),
    s
}, $ = function() {
    function g(r, i) {
        pr || g.register(G) || console.warn("Please gsap.registerPlugin(ScrollTrigger)"),
        this.init(r, i)
    }
    var e = g.prototype;
    return e.init = function(i, n) {
        if (this.progress = this.start = 0,
        this.vars && this.kill(!0, !0),
        !Pi) {
            this.update = this.refresh = this.kill = tn;
            return
        }
        i = js(qt(i) || Kr(i) || i.nodeType ? {
            trigger: i
        } : i, bi);
        var t = i, o = t.onUpdate, s = t.toggleClass, l = t.id, f = t.onToggle, u = t.onRefresh, p = t.scrub, c = t.trigger, a = t.pin, d = t.pinSpacing, h = t.invalidateOnRefresh, m = t.anticipatePin, x = t.onScrubComplete, P = t.onSnapComplete, C = t.once, v = t.snap, _ = t.pinReparent, y = t.pinSpacer, D = t.containerAnimation, w = t.fastScrollEnd, S = t.preventOverlaps, F = i.horizontal || i.containerAnimation && i.horizontal !== !1 ? dt : qe, E = !p && p !== 0, T = Dt(i.scroller || fe), k = G.core.getCache(T), O = or(T), R = ("pinType"in i ? i.pinType : zn(T, "pinType") || O && "fixed") === "fixed", B = [i.onEnter, i.onLeave, i.onEnterBack, i.onLeaveBack], I = E && i.toggleActions.split(" "), V = "markers"in i ? i.markers : bi.markers, M = O ? 0 : parseFloat(on(T)["border" + F.p2 + Or]) || 0, b = this, U = i.onRefreshInit && function() {
            return i.onRefreshInit(b)
        }
        , Z = yf(T, O, F), oe = Cf(T, O), re = 0, q = 0, ee = Hn(T, F), ne, He, Zt, $e, Oe, J, we, N, L, H, A, j, K, _e, ae, se, ge, Se, Qe, he, Je, Re, En, kt, lt, cn, gt, Qt, Ht, Q, Me, Ye, tt, ke, nt, $t, Fn, hn;
        if (Qo(b),
        b._dir = F,
        m *= 45,
        b.scroller = T,
        b.scroll = D ? D.time.bind(D) : ee,
        $e = ee(),
        b.vars = i,
        n = n || i.animation,
        "refreshPriority"in i && (Bl = 1,
        i.refreshPriority === -9999 && (Zn = b)),
        k.tweenScroll = k.tweenScroll || {
            top: oa(T, qe),
            left: oa(T, dt)
        },
        b.tweenTo = ne = k.tweenScroll[F.p],
        b.scrubDuration = function(z) {
            Me = Kr(z) && z,
            Me ? Q ? Q.duration(z) : Q = G.to(n, {
                ease: "expo",
                totalProgress: "+=0.001",
                duration: Me,
                paused: !0,
                onComplete: function() {
                    return x && x(b)
                }
            }) : (Q && Q.progress(1).kill(),
            Q = 0)
        }
        ,
        n && (n.vars.lazy = !1,
        n._initted || n.vars.immediateRender !== !1 && i.immediateRender !== !1 && n.duration() && n.render(0, !0, !0),
        b.animation = n.pause(),
        n.scrollTrigger = b,
        b.scrubDuration(p),
        Qt = 0,
        l || (l = n.vars.id)),
        ue.push(b),
        v && ((!Ni(v) || v.push) && (v = {
            snapTo: v
        }),
        "scrollBehavior"in be.style && G.set(O ? [be, yn] : T, {
            scrollBehavior: "auto"
        }),
        Zt = bt(v.snapTo) ? v.snapTo : v.snapTo === "labels" ? Sf(n) : v.snapTo === "labelsDirectional" ? Pf(n) : v.directional !== !1 ? function(z, Y) {
            return ws(v.snapTo)(z, ht() - q < 500 ? 0 : Y.direction)
        }
        : G.utils.snap(v.snapTo),
        Ye = v.duration || {
            min: .1,
            max: 2
        },
        Ye = Ni(Ye) ? _r(Ye.min, Ye.max) : _r(Ye, Ye),
        tt = G.delayedCall(v.delay || Me / 2 || .1, function() {
            var z = ee()
              , Y = ht() - q < 500
              , X = ne.tween;
            if ((Y || Math.abs(b.getVelocity()) < 10) && !X && !ao && re !== z) {
                var te = (z - J) / K
                  , Xe = n && !E ? n.totalProgress() : te
                  , ie = Y ? 0 : (Xe - Ht) / (ht() - zi) * 1e3 || 0
                  , Le = G.utils.clamp(-te, 1 - te, hr(ie / 2) * ie / .185)
                  , Pe = te + (v.inertia === !1 ? 0 : Le)
                  , Jt = _r(0, 1, Zt(Pe, b))
                  , xe = Math.round(J + Jt * K)
                  , rt = v
                  , Yt = rt.onStart
                  , Ee = rt.onInterrupt
                  , Fe = rt.onComplete;
                if (z <= we && z >= J && xe !== z) {
                    if (X && !X._initted && X.data <= hr(xe - z))
                        return;
                    v.inertia === !1 && (Le = Jt - te),
                    ne(xe, {
                        duration: Ye(hr(Math.max(hr(Pe - Xe), hr(Jt - Xe)) * .185 / ie / .05 || 0)),
                        ease: v.ease || "power3",
                        data: hr(xe - z),
                        onInterrupt: function() {
                            return tt.restart(!0) && Ee && Ee(b)
                        },
                        onComplete: function() {
                            b.update(),
                            re = ee(),
                            Qt = Ht = n && !E ? n.totalProgress() : b.progress,
                            P && P(b),
                            Fe && Fe(b)
                        }
                    }, z, Le * K, xe - z - Le * K),
                    Yt && Yt(b, ne.tween)
                }
            } else
                b.isActive && re !== z && tt.restart(!0)
        }).pause()),
        l && (jo[l] = b),
        c = b.trigger = Dt(c || a),
        hn = c && c._gsap && c._gsap.stRevert,
        hn && (hn = hn(b)),
        a = a === !0 ? c : Dt(a),
        qt(s) && (s = {
            targets: c,
            className: s
        }),
        a && (d === !1 || d === Lt || (d = !d && on(a.parentNode).display === "flex" ? !1 : Ne),
        b.pin = a,
        He = G.core.getCache(a),
        He.spacer ? _e = He.pinState : (y && (y = Dt(y),
        y && !y.nodeType && (y = y.current || y.nativeElement),
        He.spacerIsNative = !!y,
        y && (He.spacerState = Mi(y))),
        He.spacer = ge = y || Te.createElement("div"),
        ge.classList.add("pin-spacer"),
        l && ge.classList.add("pin-spacer-" + l),
        He.pinState = _e = Mi(a)),
        i.force3D !== !1 && G.set(a, {
            force3D: !0
        }),
        b.spacer = ge = He.spacer,
        gt = on(a),
        En = gt[d + F.os2],
        Qe = G.getProperty(a),
        he = G.quickSetter(a, F.a, ft),
        So(a, ge, gt),
        se = Mi(a)),
        V) {
            j = Ni(V) ? js(V, ea) : ea,
            H = Ai("scroller-start", l, T, F, j, 0),
            A = Ai("scroller-end", l, T, F, j, 0, H),
            Se = H["offset" + F.op.d2];
            var Ir = Dt(zn(T, "content") || T);
            N = this.markerStart = Ai("start", l, Ir, F, j, Se, 0, D),
            L = this.markerEnd = Ai("end", l, Ir, F, j, Se, 0, D),
            D && (Fn = G.quickSetter([N, L], F.a, ft)),
            !R && !(un.length && zn(T, "fixedMarkers") === !0) && (wf(O ? be : T),
            G.set([H, A], {
                force3D: !0
            }),
            lt = G.quickSetter(H, F.a, ft),
            cn = G.quickSetter(A, F.a, ft))
        }
        if (D) {
            var zr = D.vars.onUpdate
              , pe = D.vars.onUpdateParams;
            D.eventCallback("onUpdate", function() {
                b.update(0, 0, 1),
                zr && zr.apply(pe || [])
            })
        }
        b.previous = function() {
            return ue[ue.indexOf(b) - 1]
        }
        ,
        b.next = function() {
            return ue[ue.indexOf(b) + 1]
        }
        ,
        b.revert = function(z, Y) {
            if (!Y)
                return b.kill(!0);
            var X = z !== !1 || !b.enabled
              , te = it;
            X !== b.isReverted && (X && (nt = Math.max(ee(), b.scroll.rec || 0),
            ke = b.progress,
            $t = n && n.progress()),
            N && [N, L, H, A].forEach(function(Xe) {
                return Xe.style.display = X ? "none" : "block"
            }),
            X && (it = 1),
            b.update(X),
            it = te,
            a && (X ? Ff(a, ge, _e) : (!_ || !b.isActive) && So(a, ge, on(a), kt)),
            b.isReverted = X)
        }
        ,
        b.refresh = function(z, Y) {
            if (!((it || !b.enabled) && !Y)) {
                if (a && z && Vt) {
                    je(g, "scrollEnd", Yl);
                    return
                }
                !nn && U && U(b),
                it = 1,
                q = ht(),
                ne.tween && (ne.tween.kill(),
                ne.tween = 0),
                Q && Q.pause(),
                h && n && n.revert({
                    kill: !1
                }).invalidate(),
                b.isReverted || b.revert(!0, !0);
                for (var X = Z(), te = oe(), Xe = D ? D.duration() : On(T, F), ie = 0, Le = 0, Pe = i.end, Jt = i.endTrigger || c, xe = i.start || (i.start === 0 || !c ? 0 : a ? "0 0" : "0 100%"), rt = b.pinnedContainer = i.pinnedContainer && Dt(i.pinnedContainer), Yt = c && Math.max(0, ue.indexOf(b)) || 0, Ee = Yt, Fe, Ie, fr, Yn, Ue, ze, dn, lo, Fs, Nr; Ee--; )
                    ze = ue[Ee],
                    ze.end || ze.refresh(0, 1) || (it = 1),
                    dn = ze.pin,
                    dn && (dn === c || dn === a) && !ze.isReverted && (Nr || (Nr = []),
                    Nr.unshift(ze),
                    ze.revert(!0, !0)),
                    ze !== ue[Ee] && (Yt--,
                    Ee--);
                for (bt(xe) && (xe = xe(b)),
                J = ra(xe, c, X, F, ee(), N, H, b, te, M, R, Xe, D) || (a ? -.001 : 0),
                bt(Pe) && (Pe = Pe(b)),
                qt(Pe) && !Pe.indexOf("+=") && (~Pe.indexOf(" ") ? Pe = (qt(xe) ? xe.split(" ")[0] : "") + Pe : (ie = Vi(Pe.substr(2), X),
                Pe = qt(xe) ? xe : J + ie,
                Jt = c)),
                we = Math.max(J, ra(Pe || (Jt ? "100% 0" : Xe), Jt, X, F, ee() + ie, L, A, b, te, M, R, Xe, D)) || -.001,
                K = we - J || (J -= .01) && .001,
                ie = 0,
                Ee = Yt; Ee--; )
                    ze = ue[Ee],
                    dn = ze.pin,
                    dn && ze.start - ze._pinPush < J && !D && ze.end > 0 && (Fe = ze.end - ze.start,
                    (dn === c || dn === rt) && !Kr(xe) && (ie += Fe * (1 - ze.progress)),
                    dn === a && (Le += Fe));
                if (J += ie,
                we += ie,
                b._pinPush = Le,
                N && ie && (Fe = {},
                Fe[F.a] = "+=" + ie,
                rt && (Fe[F.p] = "-=" + ee()),
                G.set([N, L], Fe)),
                a)
                    Fe = on(a),
                    Yn = F === qe,
                    fr = ee(),
                    Je = parseFloat(Qe(F.a)) + Le,
                    !Xe && we > 1 && ((O ? be : T).style["overflow-" + F.a] = "scroll"),
                    So(a, ge, Fe),
                    se = Mi(a),
                    Ie = Dn(a, !0),
                    lo = R && Hn(T, Yn ? dt : qe)(),
                    d && (kt = [d + F.os2, K + Le + ft],
                    kt.t = ge,
                    Ee = d === Ne ? Jo(a, F) + K + Le : 0,
                    Ee && kt.push(F.d, Ee + ft),
                    mi(kt),
                    R && ee(nt)),
                    R && (Ue = {
                        top: Ie.top + (Yn ? fr - J : lo) + ft,
                        left: Ie.left + (Yn ? lo : fr - J) + ft,
                        boxSizing: "border-box",
                        position: "fixed"
                    },
                    Ue[nr] = Ue["max" + Or] = Math.ceil(Ie.width) + ft,
                    Ue[rr] = Ue["max" + Cs] = Math.ceil(Ie.height) + ft,
                    Ue[Lt] = Ue[Lt + si] = Ue[Lt + ii] = Ue[Lt + ai] = Ue[Lt + oi] = "0",
                    Ue[Ne] = Fe[Ne],
                    Ue[Ne + si] = Fe[Ne + si],
                    Ue[Ne + ii] = Fe[Ne + ii],
                    Ue[Ne + ai] = Fe[Ne + ai],
                    Ue[Ne + oi] = Fe[Ne + oi],
                    ae = bf(_e, Ue, _),
                    nn && ee(0)),
                    n ? (Fs = n._initted,
                    xo(1),
                    n.render(n.duration(), !0, !0),
                    Re = Qe(F.a) - Je + K + Le,
                    K !== Re && R && ae.splice(ae.length - 2, 2),
                    n.render(0, !0, !0),
                    Fs || n.invalidate(!0),
                    n.parent || n.totalTime(n.totalTime()),
                    xo(0)) : Re = K;
                else if (c && ee() && !D)
                    for (Ie = c.parentNode; Ie && Ie !== be; )
                        Ie._pinOffset && (J -= Ie._pinOffset,
                        we -= Ie._pinOffset),
                        Ie = Ie.parentNode;
                Nr && Nr.forEach(function(nu) {
                    return nu.revert(!1, !0)
                }),
                b.start = J,
                b.end = we,
                $e = Oe = nn ? nt : ee(),
                !D && !nn && ($e < nt && ee(nt),
                b.scroll.rec = 0),
                b.revert(!1, !0),
                tt && (re = -1,
                b.isActive && ee(J + K * ke),
                tt.restart(!0)),
                it = 0,
                n && E && (n._initted || $t) && n.progress() !== $t && n.progress($t, !0).render(n.time(), !0, !0),
                (ke !== b.progress || D) && (n && !E && n.totalProgress(ke, !0),
                b.progress = ($e - J) / K === ke ? 0 : ke),
                a && d && (ge._pinOffset = Math.round(b.progress * Re)),
                u && u(b)
            }
        }
        ,
        b.getVelocity = function() {
            return (ee() - Oe) / (ht() - zi) * 1e3 || 0
        }
        ,
        b.endAnimation = function() {
            Hr(b.callbackAnimation),
            n && (Q ? Q.progress(1) : n.paused() ? E || Hr(n, b.direction < 0, 1) : Hr(n, n.reversed()))
        }
        ,
        b.labelToScroll = function(z) {
            return n && n.labels && (J || b.refresh() || J) + n.labels[z] / n.duration() * K || 0
        }
        ,
        b.getTrailing = function(z) {
            var Y = ue.indexOf(b)
              , X = b.direction > 0 ? ue.slice(0, Y).reverse() : ue.slice(Y + 1);
            return (qt(z) ? X.filter(function(te) {
                return te.vars.preventOverlaps === z
            }) : X).filter(function(te) {
                return b.direction > 0 ? te.end <= J : te.start >= we
            })
        }
        ,
        b.update = function(z, Y, X) {
            if (!(D && !X && !z)) {
                var te = nn ? nt : b.scroll(), Xe = z ? 0 : (te - J) / K, ie = Xe < 0 ? 0 : Xe > 1 ? 1 : Xe || 0, Le = b.progress, Pe, Jt, xe, rt, Yt, Ee, Fe, Ie;
                if (Y && (Oe = $e,
                $e = D ? ee() : te,
                v && (Ht = Qt,
                Qt = n && !E ? n.totalProgress() : ie)),
                m && !ie && a && !it && !Si && Vt && J < te + (te - Oe) / (ht() - zi) * m && (ie = 1e-4),
                ie !== Le && b.enabled) {
                    if (Pe = b.isActive = !!ie && ie < 1,
                    Jt = !!Le && Le < 1,
                    Ee = Pe !== Jt,
                    Yt = Ee || !!ie != !!Le,
                    b.direction = ie > Le ? 1 : -1,
                    b.progress = ie,
                    Yt && !it && (xe = ie && !Le ? 0 : ie === 1 ? 1 : Le === 1 ? 2 : 3,
                    E && (rt = !Ee && I[xe + 1] !== "none" && I[xe + 1] || I[xe],
                    Ie = n && (rt === "complete" || rt === "reset" || rt in n))),
                    S && (Ee || Ie) && (Ie || p || !n) && (bt(S) ? S(b) : b.getTrailing(S).forEach(function(ze) {
                        return ze.endAnimation()
                    })),
                    E || (Q && !it && !Si ? ((D || Zn && Zn !== b) && Q.render(Q._dp._time - Q._start),
                    Q.resetTo ? Q.resetTo("totalProgress", ie, n._tTime / n._tDur) : (Q.vars.totalProgress = ie,
                    Q.invalidate().restart())) : n && n.totalProgress(ie, !!it)),
                    a) {
                        if (z && d && (ge.style[d + F.os2] = En),
                        !R)
                            he(qr(Je + Re * ie));
                        else if (Yt) {
                            if (Fe = !z && ie > Le && we + 1 > te && te + 1 >= On(T, F),
                            _)
                                if (!z && (Pe || Fe)) {
                                    var fr = Dn(a, !0)
                                      , Yn = te - J;
                                    ia(a, be, fr.top + (F === qe ? Yn : 0) + ft, fr.left + (F === qe ? 0 : Yn) + ft)
                                } else
                                    ia(a, ge);
                            mi(Pe || Fe ? ae : se),
                            Re !== K && ie < 1 && Pe || he(Je + (ie === 1 && !Fe ? Re : 0))
                        }
                    }
                    v && !ne.tween && !it && !Si && tt.restart(!0),
                    s && (Ee || C && ie && (ie < 1 || !_o)) && no(s.targets).forEach(function(ze) {
                        return ze.classList[Pe || C ? "add" : "remove"](s.className)
                    }),
                    o && !E && !z && o(b),
                    Yt && !it ? (E && (Ie && (rt === "complete" ? n.pause().totalProgress(1) : rt === "reset" ? n.restart(!0).pause() : rt === "restart" ? n.restart(!0) : n[rt]()),
                    o && o(b)),
                    (Ee || !_o) && (f && Ee && Co(b, f),
                    B[xe] && Co(b, B[xe]),
                    C && (ie === 1 ? b.kill(!1, 1) : B[xe] = 0),
                    Ee || (xe = ie === 1 ? 1 : 3,
                    B[xe] && Co(b, B[xe]))),
                    w && !Pe && Math.abs(b.getVelocity()) > (Kr(w) ? w : 2500) && (Hr(b.callbackAnimation),
                    Q ? Q.progress(1) : Hr(n, rt === "reverse" ? 1 : !ie, 1))) : E && o && !it && o(b)
                }
                if (cn) {
                    var Ue = D ? te / D.duration() * (D._caScrollDist || 0) : te;
                    lt(Ue + (H._isFlipped ? 1 : 0)),
                    cn(Ue)
                }
                Fn && Fn(-te / D.duration() * (D._caScrollDist || 0))
            }
        }
        ,
        b.enable = function(z, Y) {
            b.enabled || (b.enabled = !0,
            je(T, "resize", Zr),
            je(O ? Te : T, "scroll", dr),
            U && je(g, "refreshInit", U),
            z !== !1 && (b.progress = ke = 0,
            $e = Oe = re = ee()),
            Y !== !1 && b.refresh())
        }
        ,
        b.getTween = function(z) {
            return z && ne ? ne.tween : Q
        }
        ,
        b.setPositions = function(z, Y) {
            a && (Je += z - J,
            Re += Y - z - K),
            b.start = J = z,
            b.end = we = Y,
            K = Y - z,
            b.update()
        }
        ,
        b.disable = function(z, Y) {
            if (b.enabled && (z !== !1 && b.revert(!0, !0),
            b.enabled = b.isActive = !1,
            Y || Q && Q.pause(),
            nt = 0,
            He && (He.uncache = 1),
            U && Ke(g, "refreshInit", U),
            tt && (tt.pause(),
            ne.tween && ne.tween.kill() && (ne.tween = 0)),
            !O)) {
                for (var X = ue.length; X--; )
                    if (ue[X].scroller === T && ue[X] !== b)
                        return;
                Ke(T, "resize", Zr),
                Ke(T, "scroll", dr)
            }
        }
        ,
        b.kill = function(z, Y) {
            b.disable(z, Y),
            Q && !Y && Q.kill(),
            l && delete jo[l];
            var X = ue.indexOf(b);
            X >= 0 && ue.splice(X, 1),
            X === ct && $i > 0 && ct--,
            X = 0,
            ue.forEach(function(te) {
                return te.scroller === b.scroller && (X = 1)
            }),
            X || nn || (b.scroll.rec = 0),
            n && (n.scrollTrigger = null,
            z && n.revert({
                kill: !1
            }),
            Y || n.kill()),
            N && [N, L, H, A].forEach(function(te) {
                return te.parentNode && te.parentNode.removeChild(te)
            }),
            Zn === b && (Zn = 0),
            a && (He && (He.uncache = 1),
            X = 0,
            ue.forEach(function(te) {
                return te.pin === a && X++
            }),
            X || (He.spacer = 0)),
            i.onKill && i.onKill(b)
        }
        ,
        b.enable(!1, !1),
        hn && hn(b),
        !n || !n.add || K ? b.refresh() : G.delayedCall(.01, function() {
            return J || we || b.refresh()
        }) && (K = .01) && (J = we = 0)
    }
    ,
    g.register = function(i) {
        return pr || (G = i || Nl(),
        zl() && window.document && g.enable(),
        pr = Pi),
        pr
    }
    ,
    g.defaults = function(i) {
        if (i)
            for (var n in i)
                bi[n] = i[n];
        return bi
    }
    ,
    g.disable = function(i, n) {
        Pi = 0,
        ue.forEach(function(o) {
            return o[n ? "kill" : "disable"](i)
        }),
        Ke(fe, "wheel", dr),
        Ke(Te, "scroll", dr),
        clearInterval(wi),
        Ke(Te, "touchcancel", tn),
        Ke(be, "touchstart", tn),
        Fi(Ke, Te, "pointerdown,touchstart,mousedown", Qs),
        Fi(Ke, Te, "pointerup,touchend,mouseup", Js),
        to.kill(),
        Ei(Ke);
        for (var t = 0; t < de.length; t += 3)
            Ti(Ke, de[t], de[t + 1]),
            Ti(Ke, de[t], de[t + 2])
    }
    ,
    g.enable = function() {
        if (fe = window,
        Te = document,
        yn = Te.documentElement,
        be = Te.body,
        G && (no = G.utils.toArray,
        _r = G.utils.clamp,
        Qo = G.core.context || tn,
        xo = G.core.suppressOverwrites || tn,
        xs = fe.history.scrollRestoration || "auto",
        G.core.globals("ScrollTrigger", g),
        be)) {
            Pi = 1,
            We.register(G),
            g.isTouch = We.isTouch,
            Tn = We.isTouch && /(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent),
            je(fe, "wheel", dr),
            kl = [fe, Te, yn, be],
            G.matchMedia ? (g.matchMedia = function(l) {
                var f = G.matchMedia(), u;
                for (u in l)
                    f.add(u, l[u]);
                return f
            }
            ,
            G.addEventListener("matchMediaInit", function() {
                return Ss()
            }),
            G.addEventListener("matchMediaRevert", function() {
                return Xl()
            }),
            G.addEventListener("matchMedia", function() {
                yr(0, 1),
                ar("matchMedia")
            }),
            G.matchMedia("(orientation: portrait)", function() {
                return wo(),
                wo
            })) : console.warn("Requires GSAP 3.11.0 or later"),
            wo(),
            je(Te, "scroll", dr);
            var i = be.style, n = i.borderTopStyle, t = G.core.Animation.prototype, o, s;
            for (t.revert || Object.defineProperty(t, "revert", {
                value: function() {
                    return this.time(-.01, !0)
                }
            }),
            i.borderTopStyle = "solid",
            o = Dn(be),
            qe.m = Math.round(o.top + qe.sc()) || 0,
            dt.m = Math.round(o.left + dt.sc()) || 0,
            n ? i.borderTopStyle = n : i.removeProperty("border-top-style"),
            wi = setInterval(ta, 250),
            G.delayedCall(.5, function() {
                return Si = 0
            }),
            je(Te, "touchcancel", tn),
            je(be, "touchstart", tn),
            Fi(je, Te, "pointerdown,touchstart,mousedown", Qs),
            Fi(je, Te, "pointerup,touchend,mouseup", Js),
            Zo = G.utils.checkPrefix("transform"),
            Yi.push(Zo),
            pr = ht(),
            to = G.delayedCall(.2, yr).pause(),
            gr = [Te, "visibilitychange", function() {
                var l = fe.innerWidth
                  , f = fe.innerHeight;
                Te.hidden ? (Ks = l,
                Zs = f) : (Ks !== l || Zs !== f) && Zr()
            }
            , Te, "DOMContentLoaded", yr, fe, "load", yr, fe, "resize", Zr],
            Ei(je),
            ue.forEach(function(l) {
                return l.enable(0, 1)
            }),
            s = 0; s < de.length; s += 3)
                Ti(Ke, de[s], de[s + 1]),
                Ti(Ke, de[s], de[s + 2])
        }
    }
    ,
    g.config = function(i) {
        "limitCallbacks"in i && (_o = !!i.limitCallbacks);
        var n = i.syncInterval;
        n && clearInterval(wi) || (wi = n) && setInterval(ta, n),
        "ignoreMobileResize"in i && (Rl = g.isTouch === 1 && i.ignoreMobileResize),
        "autoRefreshEvents"in i && (Ei(Ke) || Ei(je, i.autoRefreshEvents || "none"),
        Ol = (i.autoRefreshEvents + "").indexOf("resize") === -1)
    }
    ,
    g.scrollerProxy = function(i, n) {
        var t = Dt(i)
          , o = de.indexOf(t)
          , s = or(t);
        ~o && de.splice(o, s ? 6 : 2),
        n && (s ? un.unshift(fe, n, be, n, yn, n) : un.unshift(t, n))
    }
    ,
    g.clearMatchMedia = function(i) {
        ue.forEach(function(n) {
            return n._ctx && n._ctx.query === i && n._ctx.kill(!0, !0)
        })
    }
    ,
    g.isInViewport = function(i, n, t) {
        var o = (qt(i) ? Dt(i) : i).getBoundingClientRect()
          , s = o[t ? nr : rr] * n || 0;
        return t ? o.right - s > 0 && o.left + s < fe.innerWidth : o.bottom - s > 0 && o.top + s < fe.innerHeight
    }
    ,
    g.positionInViewport = function(i, n, t) {
        qt(i) && (i = Dt(i));
        var o = i.getBoundingClientRect()
          , s = o[t ? nr : rr]
          , l = n == null ? s / 2 : n in ro ? ro[n] * s : ~n.indexOf("%") ? parseFloat(n) * s / 100 : parseFloat(n) || 0;
        return t ? (o.left + l) / fe.innerWidth : (o.top + l) / fe.innerHeight
    }
    ,
    g.killAll = function(i) {
        if (ue.forEach(function(t) {
            return t.vars.id !== "ScrollSmoother" && t.kill()
        }),
        i !== !0) {
            var n = sr.killAll || [];
            sr = {},
            n.forEach(function(t) {
                return t()
            })
        }
    }
    ,
    g
}();
$.version = "3.11.2";
$.saveStyles = function(g) {
    return g ? no(g).forEach(function(e) {
        if (e && e.style) {
            var r = Pt.indexOf(e);
            r >= 0 && Pt.splice(r, 5),
            Pt.push(e, e.style.cssText, e.getBBox && e.getAttribute("transform"), G.core.getCache(e), Qo())
        }
    }) : Pt
}
;
$.revert = function(g, e) {
    return Ss(!g, e)
}
;
$.create = function(g, e) {
    return new $(g,e)
}
;
$.refresh = function(g) {
    return g ? Zr() : (pr || $.register()) && yr(!0)
}
;
$.update = Rr;
$.clearScrollMemory = Ul;
$.maxScroll = function(g, e) {
    return On(g, e ? dt : qe)
}
;
$.getScrollFunc = function(g, e) {
    return Hn(Dt(g), e ? dt : qe)
}
;
$.getById = function(g) {
    return jo[g]
}
;
$.getAll = function() {
    return ue.filter(function(g) {
        return g.vars.id !== "ScrollSmoother"
    })
}
;
$.isScrolling = function() {
    return !!Vt
}
;
$.snapDirectional = ws;
$.addEventListener = function(g, e) {
    var r = sr[g] || (sr[g] = []);
    ~r.indexOf(e) || r.push(e)
}
;
$.removeEventListener = function(g, e) {
    var r = sr[g]
      , i = r && r.indexOf(e);
    i >= 0 && r.splice(i, 1)
}
;
$.batch = function(g, e) {
    var r = [], i = {}, n = e.interval || .016, t = e.batchMax || 1e9, o = function(f, u) {
        var p = []
          , c = []
          , a = G.delayedCall(n, function() {
            u(p, c),
            p = [],
            c = []
        }).pause();
        return function(d) {
            p.length || a.restart(!0),
            p.push(d.trigger),
            c.push(d),
            t <= p.length && a.progress(1)
        }
    }, s;
    for (s in e)
        i[s] = s.substr(0, 2) === "on" && bt(e[s]) && s !== "onRefreshInit" ? o(s, e[s]) : e[s];
    return bt(t) && (t = t(),
    je($, "refresh", function() {
        return t = e.batchMax()
    })),
    no(g).forEach(function(l) {
        var f = {};
        for (s in i)
            f[s] = i[s];
        f.trigger = l,
        r.push($.create(f))
    }),
    r
}
;
var sa = function(e, r, i, n) {
    return r > n ? e(n) : r < 0 && e(0),
    i > n ? (n - r) / (i - r) : i < 0 ? r / (r - i) : 1
}, Po = function g(e, r) {
    r === !0 ? e.style.removeProperty("touch-action") : e.style.touchAction = r === !0 ? "auto" : r ? "pan-" + r + (We.isTouch ? " pinch-zoom" : "") : "none",
    e === yn && g(be, r)
}, aa = {
    auto: 1,
    scroll: 1
}, Mf = function(e) {
    var r = e.event, i = e.target, n = e.axis, t = (r.changedTouches ? r.changedTouches[0] : r).target, o = t._gsap || G.core.getCache(t), s = ht(), l;
    if (!o._isScrollT || s - o._isScrollT > 2e3) {
        for (; t && t.scrollHeight <= t.clientHeight; )
            t = t.parentNode;
        o._isScroll = t && !or(t) && t !== i && (aa[(l = on(t)).overflowY] || aa[l.overflowX]),
        o._isScrollT = s
    }
    (o._isScroll || n === "x") && (r.stopPropagation(),
    r._gsapAllow = !0)
}, Gl = function(e, r, i, n) {
    return We.create({
        target: e,
        capture: !0,
        debounce: !1,
        lockAxis: !0,
        type: r,
        onWheel: n = n && Mf,
        onPress: n,
        onDrag: n,
        onScroll: n,
        onEnable: function() {
            return i && je(Te, We.eventTypes[0], ua, !1, !0)
        },
        onDisable: function() {
            return Ke(Te, We.eventTypes[0], ua, !0)
        }
    })
}, kf = /(input|label|select|textarea)/i, la, ua = function(e) {
    var r = kf.test(e.target.tagName);
    (r || la) && (e._gsapAllow = !0,
    la = r)
}, Bf = function(e) {
    Ni(e) || (e = {}),
    e.preventDefault = e.isNormalizer = e.allowClicks = !0,
    e.type || (e.type = "wheel,touch"),
    e.debounce = !!e.debounce,
    e.id = e.id || "normalizer";
    var r = e, i = r.normalizeScrollX, n = r.momentum, t = r.allowNestedScroll, o, s, l = Dt(e.target) || yn, f = G.core.globals().ScrollSmoother, u = f && f.get(), p = Tn && (e.content && Dt(e.content) || u && e.content !== !1 && !u.smooth() && u.content()), c = Hn(l, qe), a = Hn(l, dt), d = 1, h = (We.isTouch && fe.visualViewport ? fe.visualViewport.scale * fe.visualViewport.width : fe.outerWidth) / fe.innerWidth, m = 0, x = bt(n) ? function() {
        return n(o)
    }
    : function() {
        return n || 2.8
    }
    , P, C, v = Gl(l, e.type, !0, t), _ = function() {
        return C = !1
    }, y = tn, D = tn, w = function() {
        s = On(l, qe),
        D = _r(Tn ? 1 : 0, s),
        i && (y = _r(0, On(l, dt))),
        P = Hi
    }, S = function() {
        p._gsap.y = qr(parseFloat(p._gsap.y) + c.offset) + "px",
        p.style.transform = "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, " + parseFloat(p._gsap.y) + ", 0, 1)",
        c.offset = c.cacheID = 0
    }, F = function() {
        if (C) {
            requestAnimationFrame(_);
            var I = qr(o.deltaY / 2)
              , V = D(c.v - I);
            if (p && V !== c.v + c.offset) {
                c.offset = V - c.v;
                var M = qr((parseFloat(p && p._gsap.y) || 0) - c.offset);
                p.style.transform = "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, " + M + ", 0, 1)",
                p._gsap.y = M + "px",
                c.cacheID = de.cache,
                Rr()
            }
            return !0
        }
        c.offset && S(),
        C = !0
    }, E, T, k, O, R = function() {
        w(),
        E.isActive() && E.vars.scrollY > s && (c() > s ? E.progress(1) && c(s) : E.resetTo("scrollY", s))
    };
    return p && G.set(p, {
        y: "+=0"
    }),
    e.ignoreCheck = function(B) {
        return Tn && B.type === "touchmove" && F() || d > 1.05 && B.type !== "touchstart" || o.isGesturing || B.touches && B.touches.length > 1
    }
    ,
    e.onPress = function() {
        var B = d;
        d = qr((fe.visualViewport && fe.visualViewport.scale || 1) / h),
        E.pause(),
        B !== d && Po(l, d > 1.01 ? !0 : i ? !1 : "x"),
        T = a(),
        k = c(),
        w(),
        P = Hi
    }
    ,
    e.onRelease = e.onGestureStart = function(B, I) {
        if (c.offset && S(),
        !I)
            O.restart(!0);
        else {
            de.cache++;
            var V = x(), M, b;
            i && (M = a(),
            b = M + V * .05 * -B.velocityX / .227,
            V *= sa(a, M, b, On(l, dt)),
            E.vars.scrollX = y(b)),
            M = c(),
            b = M + V * .05 * -B.velocityY / .227,
            V *= sa(c, M, b, On(l, qe)),
            E.vars.scrollY = D(b),
            E.invalidate().duration(V).play(.01),
            (Tn && E.vars.scrollY >= s || M >= s - 1) && G.to({}, {
                onUpdate: R,
                duration: V
            })
        }
    }
    ,
    e.onWheel = function() {
        E._ts && E.pause(),
        ht() - m > 1e3 && (P = 0,
        m = ht())
    }
    ,
    e.onChange = function(B, I, V, M, b) {
        if (Hi !== P && w(),
        I && i && a(y(M[2] === I ? T + (B.startX - B.x) : a() + I - M[1])),
        V) {
            c.offset && S();
            var U = b[2] === V
              , Z = U ? k + B.startY - B.y : c() + V - b[1]
              , oe = D(Z);
            U && Z !== oe && (k += oe - Z),
            c(oe)
        }
        (V || I) && Rr()
    }
    ,
    e.onEnable = function() {
        Po(l, i ? !1 : "x"),
        $.addEventListener("refresh", R),
        je(fe, "resize", R),
        c.smooth && (c.target.style.scrollBehavior = "auto",
        c.smooth = a.smooth = !1),
        v.enable()
    }
    ,
    e.onDisable = function() {
        Po(l, !0),
        Ke(fe, "resize", R),
        $.removeEventListener("refresh", R),
        v.kill()
    }
    ,
    e.lockAxis = e.lockAxis !== !1,
    o = new We(e),
    o.iOS = Tn,
    Tn && !c() && c(1),
    Tn && G.ticker.add(tn),
    O = o._dc,
    E = G.to(o, {
        ease: "power4",
        paused: !0,
        scrollX: i ? "+=0.1" : "+=0",
        scrollY: "+=0.1",
        onComplete: O.vars.onComplete
    }),
    o
};
$.sort = function(g) {
    return ue.sort(g || function(e, r) {
        return (e.vars.refreshPriority || 0) * -1e6 + e.start - (r.start + (r.vars.refreshPriority || 0) * -1e6)
    }
    )
}
;
$.observe = function(g) {
    return new We(g)
}
;
$.normalizeScroll = function(g) {
    if (typeof g > "u")
        return Rt;
    if (g === !0 && Rt)
        return Rt.enable();
    if (g === !1)
        return Rt && Rt.kill();
    var e = g instanceof We ? g : Bf(g);
    return Rt && Rt.target === e.target && Rt.kill(),
    or(e.target) && (Rt = e),
    e
}
;
$.core = {
    _getVelocityProp: Ko,
    _inputObserver: Gl,
    _scrollers: de,
    _proxies: un,
    bridge: {
        ss: function() {
            Vt || ar("scrollStart"),
            Vt = ht()
        },
        ref: function() {
            return it
        }
    }
};
Nl() && G.registerPlugin($);
/*!
 * strings: 3.11.2
 * https://greensock.com
 *
 * Copyright 2008-2022, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/
var Of = /([\uD800-\uDBFF][\uDC00-\uDFFF](?:[\u200D\uFE0F][\uD800-\uDBFF][\uDC00-\uDFFF]){2,}|\uD83D\uDC69(?:\u200D(?:(?:\uD83D\uDC69\u200D)?\uD83D\uDC67|(?:\uD83D\uDC69\u200D)?\uD83D\uDC66)|\uD83C[\uDFFB-\uDFFF])|\uD83D\uDC69\u200D(?:\uD83D\uDC69\u200D)?\uD83D\uDC66\u200D\uD83D\uDC66|\uD83D\uDC69\u200D(?:\uD83D\uDC69\u200D)?\uD83D\uDC67\u200D(?:\uD83D[\uDC66\uDC67])|\uD83C\uDFF3\uFE0F\u200D\uD83C\uDF08|(?:\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD37-\uDD39\uDD3D\uDD3E\uDDD6-\uDDDD])(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2640\u2642]\uFE0F|\uD83D\uDC69(?:\uD83C[\uDFFB-\uDFFF])\u200D(?:\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92])|(?:\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC6F\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD37-\uDD39\uDD3C-\uDD3E\uDDD6-\uDDDF])\u200D[\u2640\u2642]\uFE0F|\uD83C\uDDFD\uD83C\uDDF0|\uD83C\uDDF6\uD83C\uDDE6|\uD83C\uDDF4\uD83C\uDDF2|\uD83C\uDDE9(?:\uD83C[\uDDEA\uDDEC\uDDEF\uDDF0\uDDF2\uDDF4\uDDFF])|\uD83C\uDDF7(?:\uD83C[\uDDEA\uDDF4\uDDF8\uDDFA\uDDFC])|\uD83C\uDDE8(?:\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDEE\uDDF0-\uDDF5\uDDF7\uDDFA-\uDDFF])|(?:\u26F9|\uD83C[\uDFCB\uDFCC]|\uD83D\uDD75)(?:\uFE0F\u200D[\u2640\u2642]|(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2640\u2642])\uFE0F|(?:\uD83D\uDC41\uFE0F\u200D\uD83D\uDDE8|\uD83D\uDC69(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2695\u2696\u2708]|\uD83D\uDC69\u200D[\u2695\u2696\u2708]|\uD83D\uDC68(?:(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2695\u2696\u2708]|\u200D[\u2695\u2696\u2708]))\uFE0F|\uD83C\uDDF2(?:\uD83C[\uDDE6\uDDE8-\uDDED\uDDF0-\uDDFF])|\uD83D\uDC69\u200D(?:\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D(?:\uD83D[\uDC68\uDC69])|\uD83D[\uDC68\uDC69]))|\uD83C\uDDF1(?:\uD83C[\uDDE6-\uDDE8\uDDEE\uDDF0\uDDF7-\uDDFB\uDDFE])|\uD83C\uDDEF(?:\uD83C[\uDDEA\uDDF2\uDDF4\uDDF5])|\uD83C\uDDED(?:\uD83C[\uDDF0\uDDF2\uDDF3\uDDF7\uDDF9\uDDFA])|\uD83C\uDDEB(?:\uD83C[\uDDEE-\uDDF0\uDDF2\uDDF4\uDDF7])|[#\*0-9]\uFE0F\u20E3|\uD83C\uDDE7(?:\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEF\uDDF1-\uDDF4\uDDF6-\uDDF9\uDDFB\uDDFC\uDDFE\uDDFF])|\uD83C\uDDE6(?:\uD83C[\uDDE8-\uDDEC\uDDEE\uDDF1\uDDF2\uDDF4\uDDF6-\uDDFA\uDDFC\uDDFD\uDDFF])|\uD83C\uDDFF(?:\uD83C[\uDDE6\uDDF2\uDDFC])|\uD83C\uDDF5(?:\uD83C[\uDDE6\uDDEA-\uDDED\uDDF0-\uDDF3\uDDF7-\uDDF9\uDDFC\uDDFE])|\uD83C\uDDFB(?:\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDEE\uDDF3\uDDFA])|\uD83C\uDDF3(?:\uD83C[\uDDE6\uDDE8\uDDEA-\uDDEC\uDDEE\uDDF1\uDDF4\uDDF5\uDDF7\uDDFA\uDDFF])|\uD83C\uDFF4\uDB40\uDC67\uDB40\uDC62(?:\uDB40\uDC77\uDB40\uDC6C\uDB40\uDC73|\uDB40\uDC73\uDB40\uDC63\uDB40\uDC74|\uDB40\uDC65\uDB40\uDC6E\uDB40\uDC67)\uDB40\uDC7F|\uD83D\uDC68(?:\u200D(?:\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D)?\uD83D\uDC68|(?:(?:\uD83D[\uDC68\uDC69])\u200D)?\uD83D\uDC66\u200D\uD83D\uDC66|(?:(?:\uD83D[\uDC68\uDC69])\u200D)?\uD83D\uDC67\u200D(?:\uD83D[\uDC66\uDC67])|\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92])|(?:\uD83C[\uDFFB-\uDFFF])\u200D(?:\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]))|\uD83C\uDDF8(?:\uD83C[\uDDE6-\uDDEA\uDDEC-\uDDF4\uDDF7-\uDDF9\uDDFB\uDDFD-\uDDFF])|\uD83C\uDDF0(?:\uD83C[\uDDEA\uDDEC-\uDDEE\uDDF2\uDDF3\uDDF5\uDDF7\uDDFC\uDDFE\uDDFF])|\uD83C\uDDFE(?:\uD83C[\uDDEA\uDDF9])|\uD83C\uDDEE(?:\uD83C[\uDDE8-\uDDEA\uDDF1-\uDDF4\uDDF6-\uDDF9])|\uD83C\uDDF9(?:\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDED\uDDEF-\uDDF4\uDDF7\uDDF9\uDDFB\uDDFC\uDDFF])|\uD83C\uDDEC(?:\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEE\uDDF1-\uDDF3\uDDF5-\uDDFA\uDDFC\uDDFE])|\uD83C\uDDFA(?:\uD83C[\uDDE6\uDDEC\uDDF2\uDDF3\uDDF8\uDDFE\uDDFF])|\uD83C\uDDEA(?:\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDED\uDDF7-\uDDFA])|\uD83C\uDDFC(?:\uD83C[\uDDEB\uDDF8])|(?:\u26F9|\uD83C[\uDFCB\uDFCC]|\uD83D\uDD75)(?:\uD83C[\uDFFB-\uDFFF])|(?:\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD37-\uDD39\uDD3D\uDD3E\uDDD6-\uDDDD])(?:\uD83C[\uDFFB-\uDFFF])|(?:[\u261D\u270A-\u270D]|\uD83C[\uDF85\uDFC2\uDFC7]|\uD83D[\uDC42\uDC43\uDC46-\uDC50\uDC66\uDC67\uDC70\uDC72\uDC74-\uDC76\uDC78\uDC7C\uDC83\uDC85\uDCAA\uDD74\uDD7A\uDD90\uDD95\uDD96\uDE4C\uDE4F\uDEC0\uDECC]|\uD83E[\uDD18-\uDD1C\uDD1E\uDD1F\uDD30-\uDD36\uDDD1-\uDDD5])(?:\uD83C[\uDFFB-\uDFFF])|\uD83D\uDC68(?:\u200D(?:(?:(?:\uD83D[\uDC68\uDC69])\u200D)?\uD83D\uDC67|(?:(?:\uD83D[\uDC68\uDC69])\u200D)?\uD83D\uDC66)|\uD83C[\uDFFB-\uDFFF])|(?:[\u261D\u26F9\u270A-\u270D]|\uD83C[\uDF85\uDFC2-\uDFC4\uDFC7\uDFCA-\uDFCC]|\uD83D[\uDC42\uDC43\uDC46-\uDC50\uDC66-\uDC69\uDC6E\uDC70-\uDC78\uDC7C\uDC81-\uDC83\uDC85-\uDC87\uDCAA\uDD74\uDD75\uDD7A\uDD90\uDD95\uDD96\uDE45-\uDE47\uDE4B-\uDE4F\uDEA3\uDEB4-\uDEB6\uDEC0\uDECC]|\uD83E[\uDD18-\uDD1C\uDD1E\uDD1F\uDD26\uDD30-\uDD39\uDD3D\uDD3E\uDDD1-\uDDDD])(?:\uD83C[\uDFFB-\uDFFF])?|(?:[\u231A\u231B\u23E9-\u23EC\u23F0\u23F3\u25FD\u25FE\u2614\u2615\u2648-\u2653\u267F\u2693\u26A1\u26AA\u26AB\u26BD\u26BE\u26C4\u26C5\u26CE\u26D4\u26EA\u26F2\u26F3\u26F5\u26FA\u26FD\u2705\u270A\u270B\u2728\u274C\u274E\u2753-\u2755\u2757\u2795-\u2797\u27B0\u27BF\u2B1B\u2B1C\u2B50\u2B55]|\uD83C[\uDC04\uDCCF\uDD8E\uDD91-\uDD9A\uDDE6-\uDDFF\uDE01\uDE1A\uDE2F\uDE32-\uDE36\uDE38-\uDE3A\uDE50\uDE51\uDF00-\uDF20\uDF2D-\uDF35\uDF37-\uDF7C\uDF7E-\uDF93\uDFA0-\uDFCA\uDFCF-\uDFD3\uDFE0-\uDFF0\uDFF4\uDFF8-\uDFFF]|\uD83D[\uDC00-\uDC3E\uDC40\uDC42-\uDCFC\uDCFF-\uDD3D\uDD4B-\uDD4E\uDD50-\uDD67\uDD7A\uDD95\uDD96\uDDA4\uDDFB-\uDE4F\uDE80-\uDEC5\uDECC\uDED0-\uDED2\uDEEB\uDEEC\uDEF4-\uDEF8]|\uD83E[\uDD10-\uDD3A\uDD3C-\uDD3E\uDD40-\uDD45\uDD47-\uDD4C\uDD50-\uDD6B\uDD80-\uDD97\uDDC0\uDDD0-\uDDE6])|(?:[#\*0-9\xA9\xAE\u203C\u2049\u2122\u2139\u2194-\u2199\u21A9\u21AA\u231A\u231B\u2328\u23CF\u23E9-\u23F3\u23F8-\u23FA\u24C2\u25AA\u25AB\u25B6\u25C0\u25FB-\u25FE\u2600-\u2604\u260E\u2611\u2614\u2615\u2618\u261D\u2620\u2622\u2623\u2626\u262A\u262E\u262F\u2638-\u263A\u2640\u2642\u2648-\u2653\u2660\u2663\u2665\u2666\u2668\u267B\u267F\u2692-\u2697\u2699\u269B\u269C\u26A0\u26A1\u26AA\u26AB\u26B0\u26B1\u26BD\u26BE\u26C4\u26C5\u26C8\u26CE\u26CF\u26D1\u26D3\u26D4\u26E9\u26EA\u26F0-\u26F5\u26F7-\u26FA\u26FD\u2702\u2705\u2708-\u270D\u270F\u2712\u2714\u2716\u271D\u2721\u2728\u2733\u2734\u2744\u2747\u274C\u274E\u2753-\u2755\u2757\u2763\u2764\u2795-\u2797\u27A1\u27B0\u27BF\u2934\u2935\u2B05-\u2B07\u2B1B\u2B1C\u2B50\u2B55\u3030\u303D\u3297\u3299]|\uD83C[\uDC04\uDCCF\uDD70\uDD71\uDD7E\uDD7F\uDD8E\uDD91-\uDD9A\uDDE6-\uDDFF\uDE01\uDE02\uDE1A\uDE2F\uDE32-\uDE3A\uDE50\uDE51\uDF00-\uDF21\uDF24-\uDF93\uDF96\uDF97\uDF99-\uDF9B\uDF9E-\uDFF0\uDFF3-\uDFF5\uDFF7-\uDFFF]|\uD83D[\uDC00-\uDCFD\uDCFF-\uDD3D\uDD49-\uDD4E\uDD50-\uDD67\uDD6F\uDD70\uDD73-\uDD7A\uDD87\uDD8A-\uDD8D\uDD90\uDD95\uDD96\uDDA4\uDDA5\uDDA8\uDDB1\uDDB2\uDDBC\uDDC2-\uDDC4\uDDD1-\uDDD3\uDDDC-\uDDDE\uDDE1\uDDE3\uDDE8\uDDEF\uDDF3\uDDFA-\uDE4F\uDE80-\uDEC5\uDECB-\uDED2\uDEE0-\uDEE5\uDEE9\uDEEB\uDEEC\uDEF0\uDEF3-\uDEF8]|\uD83E[\uDD10-\uDD3A\uDD3C-\uDD3E\uDD40-\uDD45\uDD47-\uDD4C\uDD50-\uDD6B\uDD80-\uDD97\uDDC0\uDDD0-\uDDE6])\uFE0F)/;
function ql(g) {
    var e = g.nodeType
      , r = "";
    if (e === 1 || e === 9 || e === 11) {
        if (typeof g.textContent == "string")
            return g.textContent;
        for (g = g.firstChild; g; g = g.nextSibling)
            r += ql(g)
    } else if (e === 3 || e === 4)
        return g.nodeValue;
    return r
}
function fa(g, e) {
    for (var r = 0; r < e.length; r++) {
        var i = e[r];
        i.enumerable = i.enumerable || !1,
        i.configurable = !0,
        "value"in i && (i.writable = !0),
        Object.defineProperty(g, i.key, i)
    }
}
function Rf(g, e, r) {
    return e && fa(g.prototype, e),
    r && fa(g, r),
    g
}
/*!
 * ScrollSmoother 3.11.2
 * https://greensock.com
 *
 * @license Copyright 2008-2022, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/
var me, ki, vt, Cr, Qr, jt, Kn, ca, le, Rn, Bi, ha, da, pa, Kl = function() {
    return typeof window < "u"
}, Zl = function() {
    return me || Kl() && (me = window.gsap) && me.registerPlugin && me
}, Lf = function(e) {
    return Math.round(e * 1e5) / 1e5 || 0
}, If = function(e, r) {
    var i = e.parentNode || Qr, n = e.getBoundingClientRect(), t = i.getBoundingClientRect(), o = t.top - n.top, s = t.bottom - n.bottom, l = (Math.abs(o) > Math.abs(s) ? o : s) / (1 - r), f = -l * r, u, p;
    return l > 0 && (u = t.height / (vt.innerHeight + t.height),
    p = u === .5 ? t.height * 2 : Math.min(t.height, -l * u / (2 * u - 1)) * 2 * (r || 1),
    f += r ? -p * r : -p / 2,
    l += p),
    {
        change: l,
        offset: f
    }
}, zf = function(e) {
    var r = Cr.querySelector(".ScrollSmoother-wrapper");
    return r || (r = Cr.createElement("div"),
    r.classList.add("ScrollSmoother-wrapper"),
    e.parentNode.insertBefore(r, e),
    r.appendChild(e)),
    r
}, lr = function() {
    function g(e) {
        var r = this;
        ki || g.register(me) || console.warn("Please gsap.registerPlugin(ScrollSmoother)"),
        e = this.vars = e || {},
        Rn && Rn.kill(),
        Rn = this,
        pa(this);
        var i = e, n = i.smoothTouch, t = i.onUpdate, o = i.onStop, s = i.smooth, l = i.onFocusIn, f = i.normalizeScroll, u, p, c, a, d, h, m, x, P, C, v, _, y, D = this, w = typeof ResizeObserver < "u" && e.autoResize !== !1 && new ResizeObserver(function() {
            return le.isRefreshing || a.refresh()
        }
        ), S = e.effectsPrefix || "", F = le.getScrollFunc(vt), E = le.isTouch === 1 ? n === !0 ? .8 : parseFloat(n) || 0 : s === 0 || s === !1 ? 0 : parseFloat(s) || .8, T = 0, k = 0, O = 1, R = ha(0), B = function() {
            return R.update(-T)
        }, I = {
            y: 0
        }, V = function() {
            return u.style.overflow = "visible"
        }, M, b = function(L) {
            L.update();
            var H = L.getTween();
            H && (H.pause(),
            H._time = H._dur,
            H._tTime = H._tDur),
            M = !1,
            L.animation.progress(L.progress, !0)
        }, U = function(L, H) {
            (L !== T && !C || H) && (E && (u.style.transform = "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, " + L + ", 0, 1)",
            u._gsap.y = L + "px"),
            k = L - T,
            T = L,
            le.isUpdating || le.update())
        }, Z = function(L) {
            return arguments.length ? (L < 0 && (L = 0),
            I.y = -L,
            M = !0,
            C ? T = -L : U(-L),
            F(L),
            this) : -T
        }, oe, re = function(L) {
            p.scrollTop = 0,
            !(L.target.contains && L.target.contains(p) || l && l(r, L) === !1) && (le.isInViewport(L.target) || L.target === oe || r.scrollTo(L.target, !1, "center center"),
            oe = L.target)
        }, q = function(L, H) {
            var A, j, K, _e;
            d.forEach(function(ae) {
                A = ae.pins,
                _e = ae.markers,
                L.forEach(function(se) {
                    ae.trigger && se.trigger && ae !== se && (se.trigger === ae.trigger || se.pinnedContainer === ae.trigger || ae.trigger.contains(se.trigger)) && (j = se.start,
                    K = (j - ae.start - ae.offset) / ae.ratio - (j - ae.start),
                    A.forEach(function(ge) {
                        return K -= ge.distance / ae.ratio - ge.distance
                    }),
                    se.setPositions(j + K, se.end + K),
                    se.markerStart && _e.push(me.quickSetter([se.markerStart, se.markerEnd], "y", "px")),
                    se.pin && se.end > 0 && (K = se.end - se.start,
                    A.push({
                        start: se.start,
                        end: se.end,
                        distance: K,
                        trig: se
                    }),
                    ae.setPositions(ae.start, ae.end + K),
                    ae.vars.onRefresh(ae)))
                })
            })
        }, ee = function() {
            y || b(a),
            I.y = -F(),
            U(I.y),
            O || a.animation.progress(me.utils.clamp(0, 1, _ / -a.end)),
            y && (a.progress -= .001,
            a.update()),
            V(),
            requestAnimationFrame(V),
            d && (d.forEach(function(L) {
                var H = L.start
                  , A = L.auto ? Math.min(le.maxScroll(L.scroller), L.end) : H + (L.end - H) / L.ratio
                  , j = (A - L.end) / 2;
                H -= j,
                A -= j,
                L.offset = j || 1e-4,
                L.pins.length = 0,
                L.setPositions(Math.min(H, A), Math.max(H, A)),
                L.vars.onRefresh(L)
            }),
            q(le.sort())),
            R.reset()
        }, ne = function() {
            return le.addEventListener("refresh", ee)
        }, He = function() {
            return d && d.forEach(function(L) {
                return L.vars.onRefresh(L)
            })
        }, Zt = function() {
            return d && d.forEach(function(L) {
                return L.vars.onRefreshInit(L)
            }),
            He
        }, $e = function(L, H, A, j) {
            return function() {
                var K = typeof H == "function" ? H(A, j) : H;
                return K || K === 0 || (K = j.getAttribute("data-" + S + L) || (L === "speed" ? 1 : 0)),
                j.setAttribute("data-" + S + L, K),
                K === "auto" ? K : parseFloat(K)
            }
        }, Oe = function(L, H, A, j) {
            var K = $e("speed", H, j, L), _e = $e("lag", A, j, L), ae = me.getProperty(L, "y"), se = L._gsap, ge, Se, Qe, he, Je, Re, En = function() {
                H = K(),
                A = _e(),
                ge = parseFloat(H) || 1,
                Qe = H === "auto",
                Je = Qe ? 0 : .5,
                he && he.kill(),
                he = A && me.to(L, {
                    ease: Bi,
                    overwrite: !1,
                    y: "+=0",
                    duration: A
                }),
                Se && (Se.ratio = ge,
                Se.autoSpeed = Qe)
            }, kt = function() {
                se.y = ae + "px",
                se.renderTransform(1),
                En()
            }, lt = [], cn = [], gt = 0, Qt = function(Q) {
                if (Qe) {
                    kt();
                    var Me = If(L, ca(0, 1, -Q.start / (Q.end - Q.start)));
                    gt = Me.change,
                    Re = Me.offset
                } else
                    gt = (Q.end - Q.start) * (1 - ge),
                    Re = 0;
                lt.forEach(function(Ye) {
                    return gt -= Ye.distance * (1 - ge)
                }),
                Q.vars.onUpdate(Q),
                he && he.progress(1)
            };
            return En(),
            (ge !== 1 || Qe || he) && (Se = le.create({
                trigger: Qe ? L.parentNode : L,
                scroller: p,
                scrub: !0,
                refreshPriority: -999,
                onRefreshInit: kt,
                onRefresh: Qt,
                onKill: function(Q) {
                    var Me = d.indexOf(Q);
                    Me >= 0 && d.splice(Me, 1),
                    kt()
                },
                onUpdate: function(Q) {
                    var Me = ae + gt * (Q.progress - Je), Ye = lt.length, tt = 0, ke, nt, $t;
                    if (Q.offset) {
                        if (Ye) {
                            for (nt = -T,
                            $t = Q.end; Ye--; ) {
                                if (ke = lt[Ye],
                                ke.trig.isActive || nt >= ke.start && nt <= ke.end) {
                                    he && (ke.trig.progress += ke.trig.direction < 0 ? .001 : -.001,
                                    ke.trig.update(0, 0, 1),
                                    he.resetTo("y", parseFloat(se.y), -k, !0),
                                    O && he.progress(1));
                                    return
                                }
                                nt > ke.end && (tt += ke.distance),
                                $t -= ke.distance
                            }
                            Me = ae + tt + gt * ((me.utils.clamp(Q.start, Q.end, nt) - Q.start - tt) / ($t - Q.start) - Je)
                        }
                        Me = Lf(Me + Re),
                        cn.length && !Qe && cn.forEach(function(Fn) {
                            return Fn(Me - tt)
                        }),
                        he ? (he.resetTo("y", Me, -k, !0),
                        O && he.progress(1)) : (se.y = Me + "px",
                        se.renderTransform(1))
                    }
                }
            }),
            Qt(Se),
            me.core.getCache(Se.trigger).stRevert = Zt,
            Se.startY = ae,
            Se.pins = lt,
            Se.markers = cn,
            Se.ratio = ge,
            Se.autoSpeed = Qe,
            L.style.willChange = "transform"),
            Se
        };
        ne(),
        le.addEventListener("killAll", ne),
        me.delayedCall(.5, function() {
            return O = 0
        }),
        this.scrollTop = Z,
        this.scrollTo = function(N, L, H) {
            var A = me.utils.clamp(0, le.maxScroll(vt), isNaN(N) ? r.offset(N, H) : +N);
            L ? C ? me.to(r, {
                duration: E,
                scrollTop: A,
                overwrite: "auto",
                ease: Bi
            }) : F(A) : Z(A)
        }
        ,
        this.offset = function(N, L) {
            N = Kn(N)[0];
            var H = N.style.cssText, A = le.create({
                trigger: N,
                start: L || "top top"
            }), j;
            return d && q([A]),
            j = A.start,
            A.kill(!1),
            N.style.cssText = H,
            me.core.getCache(N).uncache = 1,
            j
        }
        ;
        function J() {
            return c = u.clientHeight,
            u.style.overflow = "visible",
            jt.style.height = c + "px",
            c - vt.innerHeight
        }
        this.content = function(N) {
            if (arguments.length) {
                var L = Kn(N || "#smooth-content")[0] || jt.children[0];
                return L !== u && (u = L,
                P = u.getAttribute("style") || "",
                w && w.observe(u),
                me.set(u, {
                    overflow: "visible",
                    width: "100%",
                    boxSizing: "border-box",
                    y: "+=0"
                }),
                E || me.set(u, {
                    clearProps: "transform"
                })),
                this
            }
            return u
        }
        ,
        this.wrapper = function(N) {
            return arguments.length ? (p = Kn(N || "#smooth-wrapper")[0] || zf(u),
            x = p.getAttribute("style") || "",
            J(),
            me.set(p, E ? {
                overflow: "hidden",
                position: "fixed",
                height: "100%",
                width: "100%",
                top: 0,
                left: 0,
                right: 0,
                bottom: 0
            } : {
                overflow: "visible",
                position: "relative",
                width: "100%",
                height: "auto",
                top: "auto",
                bottom: "auto",
                left: "auto",
                right: "auto"
            }),
            this) : p
        }
        ,
        this.effects = function(N, L) {
            var H;
            if (d || (d = []),
            !N)
                return d.slice(0);
            N = Kn(N),
            N.forEach(function(ge) {
                for (var Se = d.length; Se--; )
                    d[Se].trigger === ge && d[Se].kill()
            }),
            L = L || {};
            var A = L, j = A.speed, K = A.lag, _e = [], ae, se;
            for (ae = 0; ae < N.length; ae++)
                se = Oe(N[ae], j, K, ae),
                se && _e.push(se);
            return (H = d).push.apply(H, _e),
            _e
        }
        ,
        this.sections = function(N, L) {
            var H;
            if (h || (h = []),
            !N)
                return h.slice(0);
            var A = Kn(N).map(function(j) {
                return le.create({
                    trigger: j,
                    start: "top 120%",
                    end: "bottom -20%",
                    onToggle: function(_e) {
                        j.style.opacity = _e.isActive ? "1" : "0",
                        j.style.pointerEvents = _e.isActive ? "all" : "none"
                    }
                })
            });
            return L && L.add ? (H = h).push.apply(H, A) : h = A.slice(0),
            A
        }
        ,
        this.content(e.content),
        this.wrapper(e.wrapper),
        this.render = function(N) {
            return U(N || N === 0 ? N : T)
        }
        ,
        this.getVelocity = function() {
            return R.getVelocity(-T)
        }
        ,
        le.scrollerProxy(p, {
            scrollTop: Z,
            scrollHeight: function() {
                return J() && jt.scrollHeight
            },
            fixedMarkers: e.fixedMarkers !== !1 && !!E,
            content: u,
            getBoundingClientRect: function() {
                return {
                    top: 0,
                    left: 0,
                    width: vt.innerWidth,
                    height: vt.innerHeight
                }
            }
        }),
        le.defaults({
            scroller: p
        });
        var we = le.getAll().filter(function(N) {
            return N.scroller === vt || N.scroller === p
        });
        we.forEach(function(N) {
            return N.revert(!0)
        }),
        a = le.create({
            animation: me.fromTo(I, {
                y: 0
            }, {
                y: function() {
                    return -J()
                },
                immediateRender: !1,
                ease: "none",
                data: "ScrollSmoother",
                duration: 100,
                onUpdate: function() {
                    if (this._dur) {
                        var L = M;
                        L && (b(a),
                        I.y = T),
                        U(I.y, L),
                        B(),
                        t && !C && t(D)
                    }
                }
            }),
            onRefreshInit: function(L) {
                if (d) {
                    var H = le.getAll().filter(function(j) {
                        return !!j.pin
                    });
                    d.forEach(function(j) {
                        j.vars.pinnedContainer || H.forEach(function(K) {
                            if (K.pin.contains(j.trigger)) {
                                var _e = j.vars;
                                _e.pinnedContainer = K.pin,
                                j.vars = null,
                                j.init(_e, j.animation)
                            }
                        })
                    })
                }
                var A = L.getTween();
                y = A && A._end > A._dp._time,
                _ = T,
                I.y = 0,
                E && (p.style.pointerEvents = "none",
                p.scrollTop = 0,
                setTimeout(function() {
                    return p.style.removeProperty("pointer-events")
                }, 50))
            },
            id: "ScrollSmoother",
            scroller: vt,
            invalidateOnRefresh: !0,
            start: 0,
            refreshPriority: -9999,
            end: J,
            onScrubComplete: function() {
                R.reset(),
                o && o(r)
            },
            scrub: E || !0
        }),
        this.smooth = function(N) {
            return arguments.length && (E = N || 0),
            arguments.length ? a.scrubDuration(N) : a.getTween() ? a.getTween().duration() : 0
        }
        ,
        a.getTween() && (a.getTween().vars.ease = e.ease || Bi),
        this.scrollTrigger = a,
        e.effects && this.effects(e.effects === !0 ? "[data-" + S + "speed], [data-" + S + "lag]" : e.effects, {}),
        e.sections && this.sections(e.sections === !0 ? "[data-section]" : e.sections),
        we.forEach(function(N) {
            N.vars.scroller = p,
            N.init(N.vars, N.animation)
        }),
        this.paused = function(N, L) {
            return arguments.length ? (!!C !== N && (N ? (a.getTween() && a.getTween().pause(),
            F(-T),
            R.reset(),
            v = le.normalizeScroll(),
            v && v.disable(),
            C = le.observe({
                preventDefault: !0,
                type: "wheel,touch,scroll",
                debounce: !1,
                allowClicks: !0,
                onChangeY: function() {
                    return Z(-T)
                }
            }),
            C.nested = da(Qr, "wheel,touch,scroll", !0, L !== !1)) : (C.nested.kill(),
            C.kill(),
            C = 0,
            v && v.enable(),
            a.progress = (-T - a.start) / (a.end - a.start),
            b(a))),
            this) : !!C
        }
        ,
        this.kill = this.revert = function() {
            r.paused(!1),
            b(a),
            a.kill();
            for (var N = (d || []).concat(h || []), L = N.length; L--; )
                N[L].kill();
            le.scrollerProxy(p),
            le.removeEventListener("killAll", ne),
            le.removeEventListener("refresh", ee),
            p.style.cssText = x,
            u.style.cssText = P;
            var H = le.defaults({});
            H && H.scroller === p && le.defaults({
                scroller: vt
            }),
            r.normalizer && le.normalizeScroll(!1),
            clearInterval(m),
            Rn = null,
            w && w.disconnect(),
            jt.style.removeProperty("height"),
            vt.removeEventListener("focusin", re)
        }
        ,
        this.refresh = function(N, L) {
            return a.refresh(N, L)
        }
        ,
        f && (this.normalizer = le.normalizeScroll(f === !0 ? {
            debounce: !0,
            content: !E && u
        } : f)),
        le.config(e),
        "overscrollBehavior"in vt.getComputedStyle(jt) && me.set([jt, Qr], {
            overscrollBehavior: "none"
        }),
        "scrollBehavior"in vt.getComputedStyle(jt) && me.set([jt, Qr], {
            scrollBehavior: "auto"
        }),
        vt.addEventListener("focusin", re),
        m = setInterval(B, 250),
        Cr.readyState === "loading" || requestAnimationFrame(function() {
            return le.refresh()
        })
    }
    return g.register = function(r) {
        return ki || (me = r || Zl(),
        Kl() && window.document && (vt = window,
        Cr = document,
        Qr = Cr.documentElement,
        jt = Cr.body),
        me && (Kn = me.utils.toArray,
        ca = me.utils.clamp,
        Bi = me.parseEase("expo"),
        pa = me.core.context || function() {}
        ,
        le = me.core.globals().ScrollTrigger,
        me.core.globals("ScrollSmoother", g),
        jt && le && (ha = le.core._getVelocityProp,
        da = le.core._inputObserver,
        g.refresh = le.refresh,
        ki = 1))),
        ki
    }
    ,
    Rf(g, [{
        key: "progress",
        get: function() {
            return this.scrollTrigger ? this.scrollTrigger.animation._time / 100 : 0
        }
    }]),
    g
}();
lr.version = "3.11.2";
lr.create = function(g) {
    return Rn && g && Rn.content() === Kn(g.content)[0] ? Rn : new lr(g)
}
;
lr.get = function() {
    return Rn
}
;
Zl() && me.registerPlugin(lr);
/*!
 * SplitText: 3.11.2
 * https://greensock.com
 *
 * @license Copyright 2008-2022, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/
var Jn, Ql, Jl, Nf = /(?:\r|\n|\t\t)/g, Vf = /(?:\s\s+)/g, Wf = function() {
    Jn = document,
    Ql = window,
    Jl = 1
}, jl = function(e) {
    return Ql.getComputedStyle(e)
}, Hf = Array.isArray, ga = [].slice, Ps = function(e, r) {
    var i;
    return Hf(e) ? e : (i = typeof e) == "string" && !r && e ? ga.call(Jn.querySelectorAll(e), 0) : e && i === "object" && "length"in e ? ga.call(e, 0) : e ? [e] : []
}, Es = function(e) {
    return e.position === "absolute" || e.absolute === !0
}, $f = function(e, r) {
    for (var i = r.length, n; --i > -1; )
        if (n = r[i],
        e.substr(0, n.length) === n)
            return n.length
}, Yf = " style='position:relative;display:inline-block;'", ma = function(e, r) {
    e === void 0 && (e = "");
    var i = ~e.indexOf("++")
      , n = 1;
    return i && (e = e.split("++").join("")),
    function() {
        return "<" + r + Yf + (e ? " class='" + e + (i ? n++ : "") + "'>" : ">")
    }
}, eu = function g(e, r, i) {
    var n = e.nodeType;
    if (n === 1 || n === 9 || n === 11)
        for (e = e.firstChild; e; e = e.nextSibling)
            g(e, r, i);
    else
        (n === 3 || n === 4) && (e.nodeValue = e.nodeValue.split(r).join(i))
}, Eo = function(e, r) {
    for (var i = r.length; --i > -1; )
        e.push(r[i])
}, va = function(e, r, i) {
    for (var n; e && e !== r; ) {
        if (n = e._next || e.nextSibling,
        n)
            return n.textContent.charAt(0) === i;
        e = e.parentNode || e._parent
    }
}, Xf = function g(e) {
    var r = Ps(e.childNodes), i = r.length, n, t;
    for (n = 0; n < i; n++)
        t = r[n],
        t._isSplit ? g(t) : n && t.previousSibling && t.previousSibling.nodeType === 3 ? (t.previousSibling.nodeValue += t.nodeType === 3 ? t.nodeValue : t.firstChild.nodeValue,
        e.removeChild(t)) : t.nodeType !== 3 && (e.insertBefore(t.firstChild, t),
        e.removeChild(t))
}, en = function(e, r) {
    return parseFloat(r[e]) || 0
}, Uf = function(e, r, i, n, t, o, s) {
    var l = jl(e), f = en("paddingLeft", l), u = -999, p = en("borderBottomWidth", l) + en("borderTopWidth", l), c = en("borderLeftWidth", l) + en("borderRightWidth", l), a = en("paddingTop", l) + en("paddingBottom", l), d = en("paddingLeft", l) + en("paddingRight", l), h = en("fontSize", l) * (r.lineThreshold || .2), m = l.textAlign, x = [], P = [], C = [], v = r.wordDelimiter || " ", _ = r.tag ? r.tag : r.span ? "span" : "div", y = r.type || r.split || "chars,words,lines", D = t && ~y.indexOf("lines") ? [] : null, w = ~y.indexOf("words"), S = ~y.indexOf("chars"), F = Es(r), E = r.linesClass, T = ~(E || "").indexOf("++"), k = [], O = l.display === "flex", R = e.style.display, B, I, V, M, b, U, Z, oe, re, q, ee, ne;
    for (T && (E = E.split("++").join("")),
    O && (e.style.display = "block"),
    I = e.getElementsByTagName("*"),
    V = I.length,
    b = [],
    B = 0; B < V; B++)
        b[B] = I[B];
    if (D || F)
        for (B = 0; B < V; B++)
            M = b[B],
            U = M.parentNode === e,
            (U || F || S && !w) && (ne = M.offsetTop,
            D && U && Math.abs(ne - u) > h && (M.nodeName !== "BR" || B === 0) && (Z = [],
            D.push(Z),
            u = ne),
            F && (M._x = M.offsetLeft,
            M._y = ne,
            M._w = M.offsetWidth,
            M._h = M.offsetHeight),
            D && ((M._isSplit && U || !S && U || w && U || !w && M.parentNode.parentNode === e && !M.parentNode._isSplit) && (Z.push(M),
            M._x -= f,
            va(M, e, v) && (M._wordEnd = !0)),
            M.nodeName === "BR" && (M.nextSibling && M.nextSibling.nodeName === "BR" || B === 0) && D.push([])));
    for (B = 0; B < V; B++) {
        if (M = b[B],
        U = M.parentNode === e,
        M.nodeName === "BR") {
            D || F ? (M.parentNode && M.parentNode.removeChild(M),
            b.splice(B--, 1),
            V--) : w || e.appendChild(M);
            continue
        }
        if (F && (re = M.style,
        !w && !U && (M._x += M.parentNode._x,
        M._y += M.parentNode._y),
        re.left = M._x + "px",
        re.top = M._y + "px",
        re.position = "absolute",
        re.display = "block",
        re.width = M._w + 1 + "px",
        re.height = M._h + "px"),
        !w && S)
            if (M._isSplit)
                for (M._next = I = M.nextSibling,
                M.parentNode.appendChild(M); I && I.nodeType === 3 && I.textContent === " "; )
                    M._next = I.nextSibling,
                    M.parentNode.appendChild(I),
                    I = I.nextSibling;
            else
                M.parentNode._isSplit ? (M._parent = M.parentNode,
                !M.previousSibling && M.firstChild && (M.firstChild._isFirst = !0),
                M.nextSibling && M.nextSibling.textContent === " " && !M.nextSibling.nextSibling && k.push(M.nextSibling),
                M._next = M.nextSibling && M.nextSibling._isFirst ? null : M.nextSibling,
                M.parentNode.removeChild(M),
                b.splice(B--, 1),
                V--) : U || (ne = !M.nextSibling && va(M.parentNode, e, v),
                M.parentNode._parent && M.parentNode._parent.appendChild(M),
                ne && M.parentNode.appendChild(Jn.createTextNode(" ")),
                _ === "span" && (M.style.display = "inline"),
                x.push(M));
        else
            M.parentNode._isSplit && !M._isSplit && M.innerHTML !== "" ? P.push(M) : S && !M._isSplit && (_ === "span" && (M.style.display = "inline"),
            x.push(M))
    }
    for (B = k.length; --B > -1; )
        k[B].parentNode.removeChild(k[B]);
    if (D) {
        for (F && (q = Jn.createElement(_),
        e.appendChild(q),
        ee = q.offsetWidth + "px",
        ne = q.offsetParent === e ? 0 : e.offsetLeft,
        e.removeChild(q)),
        re = e.style.cssText,
        e.style.cssText = "display:none;"; e.firstChild; )
            e.removeChild(e.firstChild);
        for (oe = v === " " && (!F || !w && !S),
        B = 0; B < D.length; B++) {
            for (Z = D[B],
            q = Jn.createElement(_),
            q.style.cssText = "display:block;text-align:" + m + ";position:" + (F ? "absolute;" : "relative;"),
            E && (q.className = E + (T ? B + 1 : "")),
            C.push(q),
            V = Z.length,
            I = 0; I < V; I++)
                Z[I].nodeName !== "BR" && (M = Z[I],
                q.appendChild(M),
                oe && M._wordEnd && q.appendChild(Jn.createTextNode(" ")),
                F && (I === 0 && (q.style.top = M._y + "px",
                q.style.left = f + ne + "px"),
                M.style.top = "0px",
                ne && (M.style.left = M._x - ne + "px")));
            V === 0 ? q.innerHTML = "&nbsp;" : !w && !S && (Xf(q),
            eu(q, String.fromCharCode(160), " ")),
            F && (q.style.width = ee,
            q.style.height = M._h + "px"),
            e.appendChild(q)
        }
        e.style.cssText = re
    }
    F && (s > e.clientHeight && (e.style.height = s - a + "px",
    e.clientHeight < s && (e.style.height = s + p + "px")),
    o > e.clientWidth && (e.style.width = o - d + "px",
    e.clientWidth < o && (e.style.width = o + c + "px"))),
    O && (R ? e.style.display = R : e.style.removeProperty("display")),
    Eo(i, x),
    w && Eo(n, P),
    Eo(t, C)
}, Gf = function(e, r, i, n) {
    var t = r.tag ? r.tag : r.span ? "span" : "div", o = r.type || r.split || "chars,words,lines", s = ~o.indexOf("chars"), l = Es(r), f = r.wordDelimiter || " ", u = f !== " " ? "" : l ? "&#173; " : " ", p = "</" + t + ">", c = 1, a = r.specialChars ? typeof r.specialChars == "function" ? r.specialChars : $f : null, d, h, m, x, P, C, v, _, y = Jn.createElement("div"), D = e.parentNode;
    for (D.insertBefore(y, e),
    y.textContent = e.nodeValue,
    D.removeChild(e),
    e = y,
    d = ql(e),
    v = d.indexOf("<") !== -1,
    r.reduceWhiteSpace !== !1 && (d = d.replace(Vf, " ").replace(Nf, "")),
    v && (d = d.split("<").join("{{LT}}")),
    P = d.length,
    h = (d.charAt(0) === " " ? u : "") + i(),
    m = 0; m < P; m++)
        if (C = d.charAt(m),
        a && (_ = a(d.substr(m), r.specialChars)))
            C = d.substr(m, _ || 1),
            h += s && C !== " " ? n() + C + "</" + t + ">" : C,
            m += _ - 1;
        else if (C === f && d.charAt(m - 1) !== f && m) {
            for (h += c ? p : "",
            c = 0; d.charAt(m + 1) === f; )
                h += u,
                m++;
            m === P - 1 ? h += u : d.charAt(m + 1) !== ")" && (h += u + i(),
            c = 1)
        } else
            C === "{" && d.substr(m, 6) === "{{LT}}" ? (h += s ? n() + "{{LT}}</" + t + ">" : "{{LT}}",
            m += 5) : C.charCodeAt(0) >= 55296 && C.charCodeAt(0) <= 56319 || d.charCodeAt(m + 1) >= 65024 && d.charCodeAt(m + 1) <= 65039 ? (x = ((d.substr(m, 12).split(Of) || [])[1] || "").length || 2,
            h += s && C !== " " ? n() + d.substr(m, x) + "</" + t + ">" : d.substr(m, x),
            m += x - 1) : h += s && C !== " " ? n() + C + "</" + t + ">" : C;
    e.outerHTML = h + (c ? p : ""),
    v && eu(D, "{{LT}}", "<")
}, qf = function g(e, r, i, n) {
    var t = Ps(e.childNodes), o = t.length, s = Es(r), l, f;
    if (e.nodeType !== 3 || o > 1) {
        for (r.absolute = !1,
        l = 0; l < o; l++)
            f = t[l],
            f._next = f._isFirst = f._parent = f._wordEnd = null,
            (f.nodeType !== 3 || /\S+/.test(f.nodeValue)) && (s && f.nodeType !== 3 && jl(f).display === "inline" && (f.style.display = "inline-block",
            f.style.position = "relative"),
            f._isSplit = !0,
            g(f, r, i, n));
        r.absolute = s,
        e._isSplit = !0;
        return
    }
    Gf(e, r, i, n)
}, vi = function() {
    function g(r, i) {
        Jl || Wf(),
        this.elements = Ps(r),
        this.chars = [],
        this.words = [],
        this.lines = [],
        this._originals = [],
        this.vars = i || {},
        this.split(i)
    }
    var e = g.prototype;
    return e.split = function(i) {
        this.isSplit && this.revert(),
        this.vars = i = i || this.vars,
        this._originals.length = this.chars.length = this.words.length = this.lines.length = 0;
        for (var n = this.elements.length, t = i.tag ? i.tag : i.span ? "span" : "div", o = ma(i.wordsClass, t), s = ma(i.charsClass, t), l, f, u; --n > -1; )
            u = this.elements[n],
            this._originals[n] = u.innerHTML,
            l = u.clientHeight,
            f = u.clientWidth,
            qf(u, i, o, s),
            Uf(u, i, this.chars, this.words, this.lines, f, l);
        return this.chars.reverse(),
        this.words.reverse(),
        this.lines.reverse(),
        this.isSplit = !0,
        this
    }
    ,
    e.revert = function() {
        var i = this._originals;
        if (!i)
            throw "revert() call wasn't scoped properly.";
        return this.elements.forEach(function(n, t) {
            return n.innerHTML = i[t]
        }),
        this.chars = [],
        this.words = [],
        this.lines = [],
        this.isSplit = !1,
        this
    }
    ,
    g.create = function(i, n) {
        return new g(i,n)
    }
    ,
    g
}();
vi.version = "3.11.2";
var W = pt.registerPlugin(Ds) || pt;
W.core.Tween;
W.registerPlugin(W, $, lr, vi, xi);
const Gt = {
    isPaused: !1,
    stack: null,
    smoother: null
}
  , Pn = {
    isDesktop: "(min-width:1025px)",
    isTablet: "(max-width:1024px) and (min-width:681px)",
    isMobile: "(max-width:680px)",
    reduceMotion: "(prefers-reduced-motion)"
};
function Kf() {
    return $.normalizeScroll(!0),
    lr.create({
        content: "#container",
        smoother: 1.2
    })
}
function Zf(g=10) {
    let e = !1;
    const r = Kf();
    r.paused(!0);
    const i = document.querySelector("#loading");
    function n() {
        let s = gn.timeline().to("#loading .top > span", {
            delay: 1,
            yPercent: -120
        }).to("#loading .top .progress", {
            yPercent: -50,
            opacity: 0
        }, "<")
          , l = gn.timeline().to("#loading .bottom > span > span", {
            y: 0
        }).to("#loading .bottom .arrow", {
            opacity: 1
        });
        gn.timeline().add(s).add(l).eventCallback("onComplete", ()=>{
            e = !0
        }
        )
    }
    function t() {
        let s = 0;
        return (()=>{
            const l = setInterval(()=>{
                s++,
                gn.to(".bar", {
                    width: `${s}%`
                }),
                s >= 100 && (clearInterval(l),
                n())
            }
            , g)
        }
        )()
    }
    gn.matchMedia().add(Pn, s=>{
        let {isMobile: l, isTablet: f, isDesktop: u, reduceMotion: p} = s.conditions;
        gn.timeline(),
        u && i.addEventListener("wheel", c=>{
            const {deltaY: a} = c;
            a > 0 && e && (gn.to(i, {
                yPercent: -100,
                duration: 1.3,
                ease: "power4.inOut",
                onComplete: ()=>{
                    r.paused(!1)
                }
            }),
            e = !1)
        }
        ),
        (l || f) && i.addEventListener("click", c=>{
            console.log("clicked"),
            e && (gn.to(i, {
                yPercent: -100,
                duration: 1.3,
                ease: "power4.inOut",
                onComplete: ()=>{
                    r.paused(!1)
                }
            }),
            e = !1)
        }
        )
    }
    ),
    t()
}



// #intro
function Qf() {
    W.matchMedia().add(Pn, e=>{
        let {isTablet, isMobile, isDesktop, reduceMotion} = e.conditions;
        if (!reduceMotion) {
            if (isDesktop) {  // isDesktop
                let o = W.timeline({ defaults: { scale: 10, transformOrigin: "50% 50%" } })
                    .from("#b", { xPercent: -100 })
                    .from("#r", { yPercent: -1e3 }, .1)
                    .from("#i", { yPercent: 1e3, xPercent: -1e3 }, .15)
                    .from("#d", { yPercent: -1e3, xPercent: -1e3 }, .2)
                    .from("#g", { yPercent: -1e3, xPercent: 1500 }, .25)
                    .from("#e", { yPercent: 1e3, xPercent: 500 }, .3)
                    .from(".site-info", { duration: .1, scale: 1, autoAlpha: 0, y: 30 });

                $.create({
                    trigger: "#intro",
                    start: "top top",
                    end: "+=3000",
                    animation: o,
                    pin: !0,
                    scrub: 1
                })
            }
            if (isTablet) {  // isTablet
                let o = W.timeline({ defaults: { scale: 13, transformOrigin: "50% 50%" } })
                    .from("#b", { xPercent: -100 })
                    .from("#r", { yPercent: -2e3 }, .1)
                    .from("#i", { yPercent: 2e3, xPercent: -1e3 }, .15)
                    .from("#d", { yPercent: -2e3, xPercent: -1e3 }, .2)
                    .from("#g", { yPercent: -2e3, xPercent: 1500 }, .25)
                    .from("#e", { yPercent: 2e3, xPercent: 500 }, .3)
                    .from(".site-info", { duration: .1, scale: 1, autoAlpha: 0, y: 30 });
                
                $.create({
                    trigger: "#intro",
                    start: "top top",
                    end: "+=3000",
                    animation: o,
                    pin: !0,
                    scrub: 1
                })
            }
            if (isMobile) {  // isMobile
                let o = W.timeline({ defaults: { scale: 17, transformOrigin: "50% 50%" } })
                    .from("#b", { xPercent: -100 })
                    .from("#r", { yPercent: -3e3 }, .1)
                    .from("#i", { yPercent: 3e3, xPercent: -2e3 }, .15)
                    .from("#d", { yPercent: -3e3, xPercent: -1e3 }, .2)
                    .from("#g", { yPercent: -3e3, xPercent: 1500 }, .25)
                    .from("#e", { yPercent: 3e3, xPercent: 500 }, .3)
                    .from(".site-info", { duration: .1, scale: 1, autoAlpha: 0, y: 30 });
                
                $.create({
                    trigger: "#intro",
                    start: "top top",
                    end: "+=3000",
                    animation: o,
                    pin: !0,
                    scrub: 1
                })
            }
        }
    })
}

function Lr(g) {
    let e;
    return r=>{
        clearTimeout(e),
        e = setTimeout(()=>{
            g.call(this, r)
        }
        , 1e3)
    }
}

// wall
function Jf() {
    const g = new vi(".wall-front .wall-label:not(.show)",{
        type: "chars"
    })
      , e = new vi(".wall-side .wall-label:not(.show)",{
        type: "chars"
    })
      , r = document.querySelector("#wall")
      , i = document.querySelector(".wall-front")
      , n = document.querySelector(".wall-side")
      , t = {
        x: 0,
        y: 0
    }
      , o = W.matchMedia();
    function s(l) {
        t.x = -1 + l.clientX / document.documentElement.clientWidth * 2,
        t.y = 1 - l.clientY / document.documentElement.clientHeight * 2,
        W.to(".wall-wrapper", {
            rotationZ: t.x * 5,
            rotationX: t.y * 5
        }),
        W.to(".wall-wrapper", {
            rotationZ: 0,
            rotationX: 0
        })
    }
    o.add(Pn, l=>{
        let {isMobile, isTablet, isDesktop, reduceMotion} = l.conditions;
        if (reduceMotion) {
            let a = W.timeline().to(".wall-front", {
                autoAlpha: 0,
                delay: 1
            }).from(".wall-side", {
                autoAlpha: 0,
                duration: 2
            }, "-=0.3");
            $.create({
                trigger: "#wall",
                start: "top top",
                end: "+=2000",
                animation: a,
                pin: !0,
                scrub: !0
            })
        } else {
            if (isMobile) {
                const a = W.timeline();
                W.set(".wall-side", {
                    x: i.offsetWidth / 2,
                    rotationY: "90deg"
                }),
                W.set(".wall-front", {
                    z: n.offsetWidth / 2
                }),
                W.from(".wall-label.show .number", {
                    textContent: 177e3,
                    duration: .8,
                    snap: {
                        textContent: 1
                    },
                    scrollTrigger: {
                        trigger: "#wall",
                        start: "top bottom",
                        toggleActions: "play none none reset"
                    }
                }),
                a.from(g.chars, {
                    opacity: 0,
                    stagger: {
                        each: .1,
                        from: "random"
                    },
                    onUpdate: ()=>{
                        r.removeEventListener("mousemove", s),
                        W.to(".wall-wrapper", {
                            rotationZ: 0,
                            rotationX: 0
                        })
                    }
                    ,
                    onComplete: ()=>{
                        r.addEventListener("mousemove", s)
                    }
                }).to(".wall-wrapper", {
                    rotationY: -90,
                    duration: 15
                }).to(e.chars, {
                    opacity: 0,
                    stagger: {
                        each: .1,
                        from: "random"
                    },
                    onStart: ()=>{
                        r.removeEventListener("mousemove", s),
                        W.to(".wall-wrapper", {
                            rotationZ: 0,
                            rotationX: 0
                        })
                    }
                    ,
                    onReverseComplete: ()=>{
                        r.addEventListener("mousemove", s)
                    }
                }),
                $.create({
                    trigger: "#wall",
                    start: "top top",
                    end: "+=2000",
                    animation: a,
                    pin: !0,
                    pinSpacing: !0,
                    scrub: !0,
                    onLeave: ()=>{}
                    ,
                    onLeaveBack: ()=>{}
                })
            }
            if (isTablet) {
                const a = W.timeline();
                W.set(".wall-side", { x: i.offsetWidth / 2, rotationY: "90deg" }),
                W.set(".wall-front", { z: n.offsetWidth / 2 }),
                W.from(".wall-label.show .number", {
                    textContent: 177e3,
                    duration: .8,
                    snap: { textContent: 1 },
                    scrollTrigger: {
                        trigger: "#wall",
                        start: "top bottom",
                        toggleActions: "play none none reset"
                    }
                }),
                a.from(g.chars, {
                    opacity: 0,
                    stagger: {
                        each: .1,
                        from: "random"
                    },
                    onUpdate: ()=>{
                        r.removeEventListener("mousemove", s),
                        W.to(".wall-wrapper", {
                            rotationZ: 0,
                            rotationX: 0
                        })
                    }
                    ,
                    onComplete: ()=>{
                        r.addEventListener("mousemove", s)
                    }
                }).to(".wall-wrapper", {
                    rotationY: -90,
                    duration: 15
                }).to(e.chars, {
                    opacity: 0,
                    stagger: {
                        each: .1,
                        from: "random"
                    },
                    onStart: ()=>{
                        r.removeEventListener("mousemove", s),
                        W.to(".wall-wrapper", {
                            rotationZ: 0,
                            rotationX: 0
                        })
                    }
                    ,
                    onReverseComplete: ()=>{
                        r.addEventListener("mousemove", s)
                    }
                }),
                $.create({
                    trigger: "#wall",
                    start: "top top",
                    end: "+=2000",
                    animation: a,
                    pin: !0,
                    pinSpacing: !0,
                    scrub: !0,
                    onLeave: ()=>{}
                    ,
                    onLeaveBack: ()=>{}
                })
            }
            if (isDesktop) {
                const a = W.timeline();
                W.set(".wall-side", { x: i.offsetWidth / 2, rotationY: "90deg" }),
                W.set(".wall-front", { z: n.offsetWidth / 2 });
                let d = W.from(".wall-label.show .number", { textContent: 177e3, duration: 2, snap: { textContent: 1 },
                    scrollTrigger: { trigger: "#wall",
                        start: "top bottom",
                        toggleActions: "play none none reset",
                        onComplete: ()=>{}
                    }
                });
                a.from(g.chars, {
                    opacity: 0,
                    stagger: {
                        each: .1,
                        from: "random"
                    },
                    onEnter: ()=>{}
                    ,
                    onUpdate: ()=>{
                        d.progress(1),
                        r.removeEventListener("mousemove", s),
                        W.to(".wall-wrapper", {
                            rotationZ: 0,
                            rotationX: 0
                        })
                    }
                    ,
                    onComplete: ()=>{
                        r.addEventListener("mousemove", s)
                    }
                }).to(".wall-wrapper", {
                    rotationY: -90,
                    duration: 15
                }).to(e.chars, {
                    opacity: 0,
                    stagger: {
                        each: .1,
                        from: "random"
                    },
                    onStart: ()=>{
                        r.removeEventListener("mousemove", s),
                        W.to(".wall-wrapper", {
                            rotationZ: 0,
                            rotationX: 0
                        })
                    }
                    ,
                    onReverseComplete: ()=>{
                        r.addEventListener("mousemove", s)
                    }
                }),
                $.create({
                    trigger: "#wall",
                    start: "top top",
                    end: "+=2000",
                    animation: a,
                    pin: !0,
                    scrub: !0,
                    onLeave: ()=>{}
                    ,
                    onLeaveBack: ()=>{}
                })
            }
        }
    }
    ),
    window.addEventListener("resize", Lr(W.matchMediaRefresh))
}

// demo
function jf() {
    W.matchMedia().add(Pn, e=>{
        e.conditions;
        let r = W.timeline();
        r.to(".demos-front", {
            yPercent: -50
        }),
        r.to(".demos-back", {
            yPercent: -20
        }, 0),
        $.create({
            trigger: "#demo",
            start: "top top",
            end: "+=3000",
            animation: r,
            pin: !0,
            pinSpacing: !1,
            scrub: !0
        })
    }
    )
}

// shop
function ec() {
    document.querySelector(".reduce"),
    W.matchMedia().add(Pn, e=>{
        let {isMobile, isTablet, isDesktop, reduceMotion} = e.conditions;
        if (reduceMotion) {
            if (isDesktop) {
                let o = document.querySelector("#shop .last").getBoundingClientRect().left;
                W.timeline()
                    .to("#shop .shop-horizontal .bg", { xPercent: -20 })
                    .from("#shop .left_nav", { xPercent: -100 }, 0)
                    .from("#shop .shop-cover-bg", { xPercent: 100 }, 0)
                    .from("#shop .shop-cover-bg-inner > div", { xPercent: 50 }, 0)
                    .from("#shop .shop-cover-bg-inner .acc > img", { xPercent: 100 }, 0)
                    .to("#shop .bigger", { scale: .4 })
                    .from(".shop-text-content", { autoAlpha: 0, y: 60, duration: .2 }, "-=0.2");

                let s = W.timeline()
                    .from(".shop-horizontal", { xPercent: 100 })
                    .from(".shop-horizontal .bg", { scale: 1.4 }, 0)
                    .from(".h-section:nth-child(2)", { xPercent: 50 }, "-=0.35")
                    .to(".shop-cover", { x: -o, duration: 3 });
                
                $.create({
                    trigger: "#shop",
                    start: "top top",
                    end: "+=5000",
                    animation: s,
                    pin: !0,
                    pinSpacing: !1,
                    scrub: !0,
                    onEnter: ()=>{}
                })
            }
            if (isTablet || isMobile) {
                document.querySelector("#shop .last").getBoundingClientRect().top,
                W.timeline()
                    .to("#shop .shop-horizontal .bg", { xPercent: -20 })
                    .from("#shop .left_nav", { xPercent: -100 }, 0)
                    .from("#shop .shop-cover-bg", { xPercent: 100 }, 0)
                    .from("#shop .shop-cover-bg-inner > div", { xPercent: 50 }, 0)
                    .from("#shop .shop-cover-bg-inner .acc img", { xPercent: 100 }, 0)
                    .to("#shop .bigger", { scale: .65 })
                    .to("#shop .bg", { height: "57vw" }, "<")
                    .from(".shop-text-content", { autoAlpha: 0, y: 60, duration: .2 }, "-=0.2");
                
                let o = W.timeline()
                    .from(".shop-horizontal", { xPercent: 100 })
                    .from(".shop-horizontal .bg", { scale: 1.4 }, 0)
                    .from(".h-section:nth-child(2)", { yPercent: 150 }, "-=0.35")
                    .from(".h-section:nth-child(3)", { yPercent: 150 }, "<")
                    .to(".shop-cover", { y: -document.querySelector(".h-section").offsetHeight, duration: 3 })
                    .to(".shop-text-content", { yPercent: -500 }, "<");
                $.create({
                    trigger: "#shop",
                    start: "top top",
                    end: "+=5000",
                    animation: o,
                    pin: !0,
                    pinSpacing: !1,
                    scrub: !0,
                    onEnter: ()=>{}
                })
            }
        } else {
            if (isDesktop) {
                let o = document.querySelector("#shop .last").getBoundingClientRect().left
                  , s = W.timeline()
                    .to("#shop .shop-horizontal .bg", { xPercent: -20 })
                    .from("#shop .left_nav", { xPercent: -100 }, 0)
                    .from("#shop .shop-cover-bg", { xPercent: 100 }, 0)
                    .from("#shop .shop-cover-bg-inner > div", { xPercent: 50 }, 0)
                    .from("#shop .shop-cover-bg-inner .acc > img", { xPercent: 100 }, 0)
                    .to("#shop .bigger", { scale: .4 })
                    .from(".shop-text-content", { autoAlpha: 0, y: 60, duration: .2 }, "-=0.2")
                  , l = W.timeline()
                    .from(".shop-horizontal", { xPercent: 100 })
                    .from(".shop-horizontal .bg", { scale: 1.4 }, 0)
                    .add(s)
                    .from(".h-section:nth-child(2)", { xPercent: 50 }, "-=0.35")
                    .to(".shop-cover", { x: -o, duration: 3 });
                $.create({
                    trigger: "#shop",
                    start: "top top",
                    end: "+=5000",
                    animation: l,
                    pin: !0,
                    pinSpacing: !1,
                    scrub: !0,
                    onEnter: ()=>{}
                })
            }
            if (isTablet || isMobile) {
                document.querySelector("#shop .last").getBoundingClientRect().top;
                let o = W.timeline()
                    .to("#shop .shop-horizontal .bg", { xPercent: -20 })
                    .from("#shop .left_nav", { xPercent: -100 }, 0)
                    .from("#shop .shop-cover-bg", { xPercent: 100 }, 0)
                    .from("#shop .shop-cover-bg-inner > div", { xPercent: 50 }, 0)
                    .from("#shop .shop-cover-bg-inner .acc img", { xPercent: 100 }, 0)
                    .to("#shop .bigger", { scale: .65 })
                    .to("#shop .bg", { height: "57vw" }, "<")
                    .from(".shop-text-content", { autoAlpha: 0, y: 60, duration: .2 }, "-=0.2")
                  , s = W.timeline()
                    .from(".shop-horizontal", { xPercent: 100 })
                    .from(".shop-horizontal .bg", { scale: 1.4 }, 0)
                    .add(o)
                    .from(".h-section:nth-child(2)", { yPercent: 150 }, "-=0.35")
                    .from(".h-section:nth-child(3)", { yPercent: 150 }, "<")
                    .to(".shop-cover", { y: -document.querySelector(".h-section").offsetHeight, duration: 3 })
                    .to(".shop-text-content", { yPercent: -500 }, "<");
                $.create({
                    trigger: "#shop",
                    start: "top top",
                    end: "+=5000",
                    animation: s,
                    pin: !0,
                    pinSpacing: !1,
                    scrub: !0,
                    onEnter: ()=>{}
                })
            }
        }
    }
    ),
    window.addEventListener("resize", Lr(W.matchMediaRefresh))
}
var Fo = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function tc(g) {
    return g && g.__esModule && Object.prototype.hasOwnProperty.call(g, "default") ? g.default : g
}
var tu = {
    exports: {}
};
/*!
 * matter-js 0.18.0 by @liabru
 * http://brm.io/matter-js/
 * License MIT
 * 
 * The MIT License (MIT)
 * 
 * Copyright (c) Liam Brummitt and contributors.
 * 
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 * 
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
(function(g, e) {
    (function(i, n) {
        g.exports = n()
    }
    )(Fo, function() {
        return function(r) {
            var i = {};
            function n(t) {
                if (i[t])
                    return i[t].exports;
                var o = i[t] = {
                    i: t,
                    l: !1,
                    exports: {}
                };
                return r[t].call(o.exports, o, o.exports, n),
                o.l = !0,
                o.exports
            }
            return n.m = r,
            n.c = i,
            n.d = function(t, o, s) {
                n.o(t, o) || Object.defineProperty(t, o, {
                    enumerable: !0,
                    get: s
                })
            }
            ,
            n.r = function(t) {
                typeof Symbol < "u" && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
                    value: "Module"
                }),
                Object.defineProperty(t, "__esModule", {
                    value: !0
                })
            }
            ,
            n.t = function(t, o) {
                if (o & 1 && (t = n(t)),
                o & 8 || o & 4 && typeof t == "object" && t && t.__esModule)
                    return t;
                var s = Object.create(null);
                if (n.r(s),
                Object.defineProperty(s, "default", {
                    enumerable: !0,
                    value: t
                }),
                o & 2 && typeof t != "string")
                    for (var l in t)
                        n.d(s, l, function(f) {
                            return t[f]
                        }
                        .bind(null, l));
                return s
            }
            ,
            n.n = function(t) {
                var o = t && t.__esModule ? function() {
                    return t.default
                }
                : function() {
                    return t
                }
                ;
                return n.d(o, "a", o),
                o
            }
            ,
            n.o = function(t, o) {
                return Object.prototype.hasOwnProperty.call(t, o)
            }
            ,
            n.p = "",
            n(n.s = 21)
        }([function(r, i) {
            var n = {};
            r.exports = n,
            function() {
                n._nextId = 0,
                n._seed = 0,
                n._nowStartTime = +new Date,
                n._warnedOnce = {},
                n._decomp = null,
                n.extend = function(o, s) {
                    var l, f;
                    typeof s == "boolean" ? (l = 2,
                    f = s) : (l = 1,
                    f = !0);
                    for (var u = l; u < arguments.length; u++) {
                        var p = arguments[u];
                        if (p)
                            for (var c in p)
                                f && p[c] && p[c].constructor === Object && (!o[c] || o[c].constructor === Object) ? (o[c] = o[c] || {},
                                n.extend(o[c], f, p[c])) : o[c] = p[c]
                    }
                    return o
                }
                ,
                n.clone = function(o, s) {
                    return n.extend({}, s, o)
                }
                ,
                n.keys = function(o) {
                    if (Object.keys)
                        return Object.keys(o);
                    var s = [];
                    for (var l in o)
                        s.push(l);
                    return s
                }
                ,
                n.values = function(o) {
                    var s = [];
                    if (Object.keys) {
                        for (var l = Object.keys(o), f = 0; f < l.length; f++)
                            s.push(o[l[f]]);
                        return s
                    }
                    for (var u in o)
                        s.push(o[u]);
                    return s
                }
                ,
                n.get = function(o, s, l, f) {
                    s = s.split(".").slice(l, f);
                    for (var u = 0; u < s.length; u += 1)
                        o = o[s[u]];
                    return o
                }
                ,
                n.set = function(o, s, l, f, u) {
                    var p = s.split(".").slice(f, u);
                    return n.get(o, s, 0, -1)[p[p.length - 1]] = l,
                    l
                }
                ,
                n.shuffle = function(o) {
                    for (var s = o.length - 1; s > 0; s--) {
                        var l = Math.floor(n.random() * (s + 1))
                          , f = o[s];
                        o[s] = o[l],
                        o[l] = f
                    }
                    return o
                }
                ,
                n.choose = function(o) {
                    return o[Math.floor(n.random() * o.length)]
                }
                ,
                n.isElement = function(o) {
                    return typeof HTMLElement < "u" ? o instanceof HTMLElement : !!(o && o.nodeType && o.nodeName)
                }
                ,
                n.isArray = function(o) {
                    return Object.prototype.toString.call(o) === "[object Array]"
                }
                ,
                n.isFunction = function(o) {
                    return typeof o == "function"
                }
                ,
                n.isPlainObject = function(o) {
                    return typeof o == "object" && o.constructor === Object
                }
                ,
                n.isString = function(o) {
                    return toString.call(o) === "[object String]"
                }
                ,
                n.clamp = function(o, s, l) {
                    return o < s ? s : o > l ? l : o
                }
                ,
                n.sign = function(o) {
                    return o < 0 ? -1 : 1
                }
                ,
                n.now = function() {
                    if (typeof window < "u" && window.performance) {
                        if (window.performance.now)
                            return window.performance.now();
                        if (window.performance.webkitNow)
                            return window.performance.webkitNow()
                    }
                    return Date.now ? Date.now() : new Date - n._nowStartTime
                }
                ,
                n.random = function(o, s) {
                    return o = typeof o < "u" ? o : 0,
                    s = typeof s < "u" ? s : 1,
                    o + t() * (s - o)
                }
                ;
                var t = function() {
                    return n._seed = (n._seed * 9301 + 49297) % 233280,
                    n._seed / 233280
                };
                n.colorToNumber = function(o) {
                    return o = o.replace("#", ""),
                    o.length == 3 && (o = o.charAt(0) + o.charAt(0) + o.charAt(1) + o.charAt(1) + o.charAt(2) + o.charAt(2)),
                    parseInt(o, 16)
                }
                ,
                n.logLevel = 1,
                n.log = function() {
                    console && n.logLevel > 0 && n.logLevel <= 3 && console.log.apply(console, ["matter-js:"].concat(Array.prototype.slice.call(arguments)))
                }
                ,
                n.info = function() {
                    console && n.logLevel > 0 && n.logLevel <= 2 && console.info.apply(console, ["matter-js:"].concat(Array.prototype.slice.call(arguments)))
                }
                ,
                n.warn = function() {
                    console && n.logLevel > 0 && n.logLevel <= 3 && console.warn.apply(console, ["matter-js:"].concat(Array.prototype.slice.call(arguments)))
                }
                ,
                n.warnOnce = function() {
                    var o = Array.prototype.slice.call(arguments).join(" ");
                    n._warnedOnce[o] || (n.warn(o),
                    n._warnedOnce[o] = !0)
                }
                ,
                n.deprecated = function(o, s, l) {
                    o[s] = n.chain(function() {
                        n.warnOnce("\u{1F505} deprecated \u{1F505}", l)
                    }, o[s])
                }
                ,
                n.nextId = function() {
                    return n._nextId++
                }
                ,
                n.indexOf = function(o, s) {
                    if (o.indexOf)
                        return o.indexOf(s);
                    for (var l = 0; l < o.length; l++)
                        if (o[l] === s)
                            return l;
                    return -1
                }
                ,
                n.map = function(o, s) {
                    if (o.map)
                        return o.map(s);
                    for (var l = [], f = 0; f < o.length; f += 1)
                        l.push(s(o[f]));
                    return l
                }
                ,
                n.topologicalSort = function(o) {
                    var s = []
                      , l = []
                      , f = [];
                    for (var u in o)
                        !l[u] && !f[u] && n._topologicalSort(u, l, f, o, s);
                    return s
                }
                ,
                n._topologicalSort = function(o, s, l, f, u) {
                    var p = f[o] || [];
                    l[o] = !0;
                    for (var c = 0; c < p.length; c += 1) {
                        var a = p[c];
                        l[a] || s[a] || n._topologicalSort(a, s, l, f, u)
                    }
                    l[o] = !1,
                    s[o] = !0,
                    u.push(o)
                }
                ,
                n.chain = function() {
                    for (var o = [], s = 0; s < arguments.length; s += 1) {
                        var l = arguments[s];
                        l._chained ? o.push.apply(o, l._chained) : o.push(l)
                    }
                    var f = function() {
                        for (var u, p = new Array(arguments.length), c = 0, a = arguments.length; c < a; c++)
                            p[c] = arguments[c];
                        for (c = 0; c < o.length; c += 1) {
                            var d = o[c].apply(u, p);
                            typeof d < "u" && (u = d)
                        }
                        return u
                    };
                    return f._chained = o,
                    f
                }
                ,
                n.chainPathBefore = function(o, s, l) {
                    return n.set(o, s, n.chain(l, n.get(o, s)))
                }
                ,
                n.chainPathAfter = function(o, s, l) {
                    return n.set(o, s, n.chain(n.get(o, s), l))
                }
                ,
                n.setDecomp = function(o) {
                    n._decomp = o
                }
                ,
                n.getDecomp = function() {
                    var o = n._decomp;
                    try {
                        !o && typeof window < "u" && (o = window.decomp),
                        !o && typeof Fo < "u" && (o = Fo.decomp)
                    } catch {
                        o = null
                    }
                    return o
                }
            }()
        }
        , function(r, i) {
            var n = {};
            r.exports = n,
            function() {
                n.create = function(t) {
                    var o = {
                        min: {
                            x: 0,
                            y: 0
                        },
                        max: {
                            x: 0,
                            y: 0
                        }
                    };
                    return t && n.update(o, t),
                    o
                }
                ,
                n.update = function(t, o, s) {
                    t.min.x = 1 / 0,
                    t.max.x = -1 / 0,
                    t.min.y = 1 / 0,
                    t.max.y = -1 / 0;
                    for (var l = 0; l < o.length; l++) {
                        var f = o[l];
                        f.x > t.max.x && (t.max.x = f.x),
                        f.x < t.min.x && (t.min.x = f.x),
                        f.y > t.max.y && (t.max.y = f.y),
                        f.y < t.min.y && (t.min.y = f.y)
                    }
                    s && (s.x > 0 ? t.max.x += s.x : t.min.x += s.x,
                    s.y > 0 ? t.max.y += s.y : t.min.y += s.y)
                }
                ,
                n.contains = function(t, o) {
                    return o.x >= t.min.x && o.x <= t.max.x && o.y >= t.min.y && o.y <= t.max.y
                }
                ,
                n.overlaps = function(t, o) {
                    return t.min.x <= o.max.x && t.max.x >= o.min.x && t.max.y >= o.min.y && t.min.y <= o.max.y
                }
                ,
                n.translate = function(t, o) {
                    t.min.x += o.x,
                    t.max.x += o.x,
                    t.min.y += o.y,
                    t.max.y += o.y
                }
                ,
                n.shift = function(t, o) {
                    var s = t.max.x - t.min.x
                      , l = t.max.y - t.min.y;
                    t.min.x = o.x,
                    t.max.x = o.x + s,
                    t.min.y = o.y,
                    t.max.y = o.y + l
                }
            }()
        }
        , function(r, i) {
            var n = {};
            r.exports = n,
            function() {
                n.create = function(t, o) {
                    return {
                        x: t || 0,
                        y: o || 0
                    }
                }
                ,
                n.clone = function(t) {
                    return {
                        x: t.x,
                        y: t.y
                    }
                }
                ,
                n.magnitude = function(t) {
                    return Math.sqrt(t.x * t.x + t.y * t.y)
                }
                ,
                n.magnitudeSquared = function(t) {
                    return t.x * t.x + t.y * t.y
                }
                ,
                n.rotate = function(t, o, s) {
                    var l = Math.cos(o)
                      , f = Math.sin(o);
                    s || (s = {});
                    var u = t.x * l - t.y * f;
                    return s.y = t.x * f + t.y * l,
                    s.x = u,
                    s
                }
                ,
                n.rotateAbout = function(t, o, s, l) {
                    var f = Math.cos(o)
                      , u = Math.sin(o);
                    l || (l = {});
                    var p = s.x + ((t.x - s.x) * f - (t.y - s.y) * u);
                    return l.y = s.y + ((t.x - s.x) * u + (t.y - s.y) * f),
                    l.x = p,
                    l
                }
                ,
                n.normalise = function(t) {
                    var o = n.magnitude(t);
                    return o === 0 ? {
                        x: 0,
                        y: 0
                    } : {
                        x: t.x / o,
                        y: t.y / o
                    }
                }
                ,
                n.dot = function(t, o) {
                    return t.x * o.x + t.y * o.y
                }
                ,
                n.cross = function(t, o) {
                    return t.x * o.y - t.y * o.x
                }
                ,
                n.cross3 = function(t, o, s) {
                    return (o.x - t.x) * (s.y - t.y) - (o.y - t.y) * (s.x - t.x)
                }
                ,
                n.add = function(t, o, s) {
                    return s || (s = {}),
                    s.x = t.x + o.x,
                    s.y = t.y + o.y,
                    s
                }
                ,
                n.sub = function(t, o, s) {
                    return s || (s = {}),
                    s.x = t.x - o.x,
                    s.y = t.y - o.y,
                    s
                }
                ,
                n.mult = function(t, o) {
                    return {
                        x: t.x * o,
                        y: t.y * o
                    }
                }
                ,
                n.div = function(t, o) {
                    return {
                        x: t.x / o,
                        y: t.y / o
                    }
                }
                ,
                n.perp = function(t, o) {
                    return o = o === !0 ? -1 : 1,
                    {
                        x: o * -t.y,
                        y: o * t.x
                    }
                }
                ,
                n.neg = function(t) {
                    return {
                        x: -t.x,
                        y: -t.y
                    }
                }
                ,
                n.angle = function(t, o) {
                    return Math.atan2(o.y - t.y, o.x - t.x)
                }
                ,
                n._temp = [n.create(), n.create(), n.create(), n.create(), n.create(), n.create()]
            }()
        }
        , function(r, i, n) {
            var t = {};
            r.exports = t;
            var o = n(2)
              , s = n(0);
            (function() {
                t.create = function(l, f) {
                    for (var u = [], p = 0; p < l.length; p++) {
                        var c = l[p]
                          , a = {
                            x: c.x,
                            y: c.y,
                            index: p,
                            body: f,
                            isInternal: !1
                        };
                        u.push(a)
                    }
                    return u
                }
                ,
                t.fromPath = function(l, f) {
                    var u = /L?\s*([-\d.e]+)[\s,]*([-\d.e]+)*/ig
                      , p = [];
                    return l.replace(u, function(c, a, d) {
                        p.push({
                            x: parseFloat(a),
                            y: parseFloat(d)
                        })
                    }),
                    t.create(p, f)
                }
                ,
                t.centre = function(l) {
                    for (var f = t.area(l, !0), u = {
                        x: 0,
                        y: 0
                    }, p, c, a, d = 0; d < l.length; d++)
                        a = (d + 1) % l.length,
                        p = o.cross(l[d], l[a]),
                        c = o.mult(o.add(l[d], l[a]), p),
                        u = o.add(u, c);
                    return o.div(u, 6 * f)
                }
                ,
                t.mean = function(l) {
                    for (var f = {
                        x: 0,
                        y: 0
                    }, u = 0; u < l.length; u++)
                        f.x += l[u].x,
                        f.y += l[u].y;
                    return o.div(f, l.length)
                }
                ,
                t.area = function(l, f) {
                    for (var u = 0, p = l.length - 1, c = 0; c < l.length; c++)
                        u += (l[p].x - l[c].x) * (l[p].y + l[c].y),
                        p = c;
                    return f ? u / 2 : Math.abs(u) / 2
                }
                ,
                t.inertia = function(l, f) {
                    for (var u = 0, p = 0, c = l, a, d, h = 0; h < c.length; h++)
                        d = (h + 1) % c.length,
                        a = Math.abs(o.cross(c[d], c[h])),
                        u += a * (o.dot(c[d], c[d]) + o.dot(c[d], c[h]) + o.dot(c[h], c[h])),
                        p += a;
                    return f / 6 * (u / p)
                }
                ,
                t.translate = function(l, f, u) {
                    u = typeof u < "u" ? u : 1;
                    var p = l.length, c = f.x * u, a = f.y * u, d;
                    for (d = 0; d < p; d++)
                        l[d].x += c,
                        l[d].y += a;
                    return l
                }
                ,
                t.rotate = function(l, f, u) {
                    if (f !== 0) {
                        var p = Math.cos(f), c = Math.sin(f), a = u.x, d = u.y, h = l.length, m, x, P, C;
                        for (C = 0; C < h; C++)
                            m = l[C],
                            x = m.x - a,
                            P = m.y - d,
                            m.x = a + (x * p - P * c),
                            m.y = d + (x * c + P * p);
                        return l
                    }
                }
                ,
                t.contains = function(l, f) {
                    for (var u = f.x, p = f.y, c = l.length, a = l[c - 1], d, h = 0; h < c; h++) {
                        if (d = l[h],
                        (u - a.x) * (d.y - a.y) + (p - a.y) * (a.x - d.x) > 0)
                            return !1;
                        a = d
                    }
                    return !0
                }
                ,
                t.scale = function(l, f, u, p) {
                    if (f === 1 && u === 1)
                        return l;
                    p = p || t.centre(l);
                    for (var c, a, d = 0; d < l.length; d++)
                        c = l[d],
                        a = o.sub(c, p),
                        l[d].x = p.x + a.x * f,
                        l[d].y = p.y + a.y * u;
                    return l
                }
                ,
                t.chamfer = function(l, f, u, p, c) {
                    typeof f == "number" ? f = [f] : f = f || [8],
                    u = typeof u < "u" ? u : -1,
                    p = p || 2,
                    c = c || 14;
                    for (var a = [], d = 0; d < l.length; d++) {
                        var h = l[d - 1 >= 0 ? d - 1 : l.length - 1]
                          , m = l[d]
                          , x = l[(d + 1) % l.length]
                          , P = f[d < f.length ? d : f.length - 1];
                        if (P === 0) {
                            a.push(m);
                            continue
                        }
                        var C = o.normalise({
                            x: m.y - h.y,
                            y: h.x - m.x
                        })
                          , v = o.normalise({
                            x: x.y - m.y,
                            y: m.x - x.x
                        })
                          , _ = Math.sqrt(2 * Math.pow(P, 2))
                          , y = o.mult(s.clone(C), P)
                          , D = o.normalise(o.mult(o.add(C, v), .5))
                          , w = o.sub(m, o.mult(D, _))
                          , S = u;
                        u === -1 && (S = Math.pow(P, .32) * 1.75),
                        S = s.clamp(S, p, c),
                        S % 2 === 1 && (S += 1);
                        for (var F = Math.acos(o.dot(C, v)), E = F / S, T = 0; T < S; T++)
                            a.push(o.add(o.rotate(y, E * T), w))
                    }
                    return a
                }
                ,
                t.clockwiseSort = function(l) {
                    var f = t.mean(l);
                    return l.sort(function(u, p) {
                        return o.angle(f, u) - o.angle(f, p)
                    }),
                    l
                }
                ,
                t.isConvex = function(l) {
                    var f = 0, u = l.length, p, c, a, d;
                    if (u < 3)
                        return null;
                    for (p = 0; p < u; p++)
                        if (c = (p + 1) % u,
                        a = (p + 2) % u,
                        d = (l[c].x - l[p].x) * (l[a].y - l[c].y),
                        d -= (l[c].y - l[p].y) * (l[a].x - l[c].x),
                        d < 0 ? f |= 1 : d > 0 && (f |= 2),
                        f === 3)
                            return !1;
                    return f !== 0 ? !0 : null
                }
                ,
                t.hull = function(l) {
                    var f = [], u = [], p, c;
                    for (l = l.slice(0),
                    l.sort(function(a, d) {
                        var h = a.x - d.x;
                        return h !== 0 ? h : a.y - d.y
                    }),
                    c = 0; c < l.length; c += 1) {
                        for (p = l[c]; u.length >= 2 && o.cross3(u[u.length - 2], u[u.length - 1], p) <= 0; )
                            u.pop();
                        u.push(p)
                    }
                    for (c = l.length - 1; c >= 0; c -= 1) {
                        for (p = l[c]; f.length >= 2 && o.cross3(f[f.length - 2], f[f.length - 1], p) <= 0; )
                            f.pop();
                        f.push(p)
                    }
                    return f.pop(),
                    u.pop(),
                    f.concat(u)
                }
            }
            )()
        }
        , function(r, i, n) {
            var t = {};
            r.exports = t;
            var o = n(0);
            (function() {
                t.on = function(s, l, f) {
                    for (var u = l.split(" "), p, c = 0; c < u.length; c++)
                        p = u[c],
                        s.events = s.events || {},
                        s.events[p] = s.events[p] || [],
                        s.events[p].push(f);
                    return f
                }
                ,
                t.off = function(s, l, f) {
                    if (!l) {
                        s.events = {};
                        return
                    }
                    typeof l == "function" && (f = l,
                    l = o.keys(s.events).join(" "));
                    for (var u = l.split(" "), p = 0; p < u.length; p++) {
                        var c = s.events[u[p]]
                          , a = [];
                        if (f && c)
                            for (var d = 0; d < c.length; d++)
                                c[d] !== f && a.push(c[d]);
                        s.events[u[p]] = a
                    }
                }
                ,
                t.trigger = function(s, l, f) {
                    var u, p, c, a, d = s.events;
                    if (d && o.keys(d).length > 0) {
                        f || (f = {}),
                        u = l.split(" ");
                        for (var h = 0; h < u.length; h++)
                            if (p = u[h],
                            c = d[p],
                            c) {
                                a = o.clone(f, !1),
                                a.name = p,
                                a.source = s;
                                for (var m = 0; m < c.length; m++)
                                    c[m].apply(s, [a])
                            }
                    }
                }
            }
            )()
        }
        , function(r, i, n) {
            var t = {};
            r.exports = t;
            var o = n(4)
              , s = n(0)
              , l = n(1)
              , f = n(6);
            (function() {
                t.create = function(u) {
                    return s.extend({
                        id: s.nextId(),
                        type: "composite",
                        parent: null,
                        isModified: !1,
                        bodies: [],
                        constraints: [],
                        composites: [],
                        label: "Composite",
                        plugin: {},
                        cache: {
                            allBodies: null,
                            allConstraints: null,
                            allComposites: null
                        }
                    }, u)
                }
                ,
                t.setModified = function(u, p, c, a) {
                    if (u.isModified = p,
                    p && u.cache && (u.cache.allBodies = null,
                    u.cache.allConstraints = null,
                    u.cache.allComposites = null),
                    c && u.parent && t.setModified(u.parent, p, c, a),
                    a)
                        for (var d = 0; d < u.composites.length; d++) {
                            var h = u.composites[d];
                            t.setModified(h, p, c, a)
                        }
                }
                ,
                t.add = function(u, p) {
                    var c = [].concat(p);
                    o.trigger(u, "beforeAdd", {
                        object: p
                    });
                    for (var a = 0; a < c.length; a++) {
                        var d = c[a];
                        switch (d.type) {
                        case "body":
                            if (d.parent !== d) {
                                s.warn("Composite.add: skipped adding a compound body part (you must add its parent instead)");
                                break
                            }
                            t.addBody(u, d);
                            break;
                        case "constraint":
                            t.addConstraint(u, d);
                            break;
                        case "composite":
                            t.addComposite(u, d);
                            break;
                        case "mouseConstraint":
                            t.addConstraint(u, d.constraint);
                            break
                        }
                    }
                    return o.trigger(u, "afterAdd", {
                        object: p
                    }),
                    u
                }
                ,
                t.remove = function(u, p, c) {
                    var a = [].concat(p);
                    o.trigger(u, "beforeRemove", {
                        object: p
                    });
                    for (var d = 0; d < a.length; d++) {
                        var h = a[d];
                        switch (h.type) {
                        case "body":
                            t.removeBody(u, h, c);
                            break;
                        case "constraint":
                            t.removeConstraint(u, h, c);
                            break;
                        case "composite":
                            t.removeComposite(u, h, c);
                            break;
                        case "mouseConstraint":
                            t.removeConstraint(u, h.constraint);
                            break
                        }
                    }
                    return o.trigger(u, "afterRemove", {
                        object: p
                    }),
                    u
                }
                ,
                t.addComposite = function(u, p) {
                    return u.composites.push(p),
                    p.parent = u,
                    t.setModified(u, !0, !0, !1),
                    u
                }
                ,
                t.removeComposite = function(u, p, c) {
                    var a = s.indexOf(u.composites, p);
                    if (a !== -1 && t.removeCompositeAt(u, a),
                    c)
                        for (var d = 0; d < u.composites.length; d++)
                            t.removeComposite(u.composites[d], p, !0);
                    return u
                }
                ,
                t.removeCompositeAt = function(u, p) {
                    return u.composites.splice(p, 1),
                    t.setModified(u, !0, !0, !1),
                    u
                }
                ,
                t.addBody = function(u, p) {
                    return u.bodies.push(p),
                    t.setModified(u, !0, !0, !1),
                    u
                }
                ,
                t.removeBody = function(u, p, c) {
                    var a = s.indexOf(u.bodies, p);
                    if (a !== -1 && t.removeBodyAt(u, a),
                    c)
                        for (var d = 0; d < u.composites.length; d++)
                            t.removeBody(u.composites[d], p, !0);
                    return u
                }
                ,
                t.removeBodyAt = function(u, p) {
                    return u.bodies.splice(p, 1),
                    t.setModified(u, !0, !0, !1),
                    u
                }
                ,
                t.addConstraint = function(u, p) {
                    return u.constraints.push(p),
                    t.setModified(u, !0, !0, !1),
                    u
                }
                ,
                t.removeConstraint = function(u, p, c) {
                    var a = s.indexOf(u.constraints, p);
                    if (a !== -1 && t.removeConstraintAt(u, a),
                    c)
                        for (var d = 0; d < u.composites.length; d++)
                            t.removeConstraint(u.composites[d], p, !0);
                    return u
                }
                ,
                t.removeConstraintAt = function(u, p) {
                    return u.constraints.splice(p, 1),
                    t.setModified(u, !0, !0, !1),
                    u
                }
                ,
                t.clear = function(u, p, c) {
                    if (c)
                        for (var a = 0; a < u.composites.length; a++)
                            t.clear(u.composites[a], p, !0);
                    return p ? u.bodies = u.bodies.filter(function(d) {
                        return d.isStatic
                    }) : u.bodies.length = 0,
                    u.constraints.length = 0,
                    u.composites.length = 0,
                    t.setModified(u, !0, !0, !1),
                    u
                }
                ,
                t.allBodies = function(u) {
                    if (u.cache && u.cache.allBodies)
                        return u.cache.allBodies;
                    for (var p = [].concat(u.bodies), c = 0; c < u.composites.length; c++)
                        p = p.concat(t.allBodies(u.composites[c]));
                    return u.cache && (u.cache.allBodies = p),
                    p
                }
                ,
                t.allConstraints = function(u) {
                    if (u.cache && u.cache.allConstraints)
                        return u.cache.allConstraints;
                    for (var p = [].concat(u.constraints), c = 0; c < u.composites.length; c++)
                        p = p.concat(t.allConstraints(u.composites[c]));
                    return u.cache && (u.cache.allConstraints = p),
                    p
                }
                ,
                t.allComposites = function(u) {
                    if (u.cache && u.cache.allComposites)
                        return u.cache.allComposites;
                    for (var p = [].concat(u.composites), c = 0; c < u.composites.length; c++)
                        p = p.concat(t.allComposites(u.composites[c]));
                    return u.cache && (u.cache.allComposites = p),
                    p
                }
                ,
                t.get = function(u, p, c) {
                    var a, d;
                    switch (c) {
                    case "body":
                        a = t.allBodies(u);
                        break;
                    case "constraint":
                        a = t.allConstraints(u);
                        break;
                    case "composite":
                        a = t.allComposites(u).concat(u);
                        break
                    }
                    return a ? (d = a.filter(function(h) {
                        return h.id.toString() === p.toString()
                    }),
                    d.length === 0 ? null : d[0]) : null
                }
                ,
                t.move = function(u, p, c) {
                    return t.remove(u, p),
                    t.add(c, p),
                    u
                }
                ,
                t.rebase = function(u) {
                    for (var p = t.allBodies(u).concat(t.allConstraints(u)).concat(t.allComposites(u)), c = 0; c < p.length; c++)
                        p[c].id = s.nextId();
                    return u
                }
                ,
                t.translate = function(u, p, c) {
                    for (var a = c ? t.allBodies(u) : u.bodies, d = 0; d < a.length; d++)
                        f.translate(a[d], p);
                    return u
                }
                ,
                t.rotate = function(u, p, c, a) {
                    for (var d = Math.cos(p), h = Math.sin(p), m = a ? t.allBodies(u) : u.bodies, x = 0; x < m.length; x++) {
                        var P = m[x]
                          , C = P.position.x - c.x
                          , v = P.position.y - c.y;
                        f.setPosition(P, {
                            x: c.x + (C * d - v * h),
                            y: c.y + (C * h + v * d)
                        }),
                        f.rotate(P, p)
                    }
                    return u
                }
                ,
                t.scale = function(u, p, c, a, d) {
                    for (var h = d ? t.allBodies(u) : u.bodies, m = 0; m < h.length; m++) {
                        var x = h[m]
                          , P = x.position.x - a.x
                          , C = x.position.y - a.y;
                        f.setPosition(x, {
                            x: a.x + P * p,
                            y: a.y + C * c
                        }),
                        f.scale(x, p, c)
                    }
                    return u
                }
                ,
                t.bounds = function(u) {
                    for (var p = t.allBodies(u), c = [], a = 0; a < p.length; a += 1) {
                        var d = p[a];
                        c.push(d.bounds.min, d.bounds.max)
                    }
                    return l.create(c)
                }
            }
            )()
        }
        , function(r, i, n) {
            var t = {};
            r.exports = t;
            var o = n(3)
              , s = n(2)
              , l = n(7);
            n(16);
            var f = n(0)
              , u = n(1)
              , p = n(11);
            (function() {
                t._inertiaScale = 4,
                t._nextCollidingGroupId = 1,
                t._nextNonCollidingGroupId = -1,
                t._nextCategory = 1,
                t.create = function(a) {
                    var d = {
                        id: f.nextId(),
                        type: "body",
                        label: "Body",
                        parts: [],
                        plugin: {},
                        angle: 0,
                        vertices: o.fromPath("L 0 0 L 40 0 L 40 40 L 0 40"),
                        position: {
                            x: 0,
                            y: 0
                        },
                        force: {
                            x: 0,
                            y: 0
                        },
                        torque: 0,
                        positionImpulse: {
                            x: 0,
                            y: 0
                        },
                        constraintImpulse: {
                            x: 0,
                            y: 0,
                            angle: 0
                        },
                        totalContacts: 0,
                        speed: 0,
                        angularSpeed: 0,
                        velocity: {
                            x: 0,
                            y: 0
                        },
                        angularVelocity: 0,
                        isSensor: !1,
                        isStatic: !1,
                        isSleeping: !1,
                        motion: 0,
                        sleepThreshold: 60,
                        density: .001,
                        restitution: 0,
                        friction: .1,
                        frictionStatic: .5,
                        frictionAir: .01,
                        collisionFilter: {
                            category: 1,
                            mask: 4294967295,
                            group: 0
                        },
                        slop: .05,
                        timeScale: 1,
                        render: {
                            visible: !0,
                            opacity: 1,
                            strokeStyle: null,
                            fillStyle: null,
                            lineWidth: null,
                            sprite: {
                                xScale: 1,
                                yScale: 1,
                                xOffset: 0,
                                yOffset: 0
                            }
                        },
                        events: null,
                        bounds: null,
                        chamfer: null,
                        circleRadius: 0,
                        positionPrev: null,
                        anglePrev: 0,
                        parent: null,
                        axes: null,
                        area: 0,
                        mass: 0,
                        inertia: 0,
                        _original: null
                    }
                      , h = f.extend(d, a);
                    return c(h, a),
                    h
                }
                ,
                t.nextGroup = function(a) {
                    return a ? t._nextNonCollidingGroupId-- : t._nextCollidingGroupId++
                }
                ,
                t.nextCategory = function() {
                    return t._nextCategory = t._nextCategory << 1,
                    t._nextCategory
                }
                ;
                var c = function(a, d) {
                    d = d || {},
                    t.set(a, {
                        bounds: a.bounds || u.create(a.vertices),
                        positionPrev: a.positionPrev || s.clone(a.position),
                        anglePrev: a.anglePrev || a.angle,
                        vertices: a.vertices,
                        parts: a.parts || [a],
                        isStatic: a.isStatic,
                        isSleeping: a.isSleeping,
                        parent: a.parent || a
                    }),
                    o.rotate(a.vertices, a.angle, a.position),
                    p.rotate(a.axes, a.angle),
                    u.update(a.bounds, a.vertices, a.velocity),
                    t.set(a, {
                        axes: d.axes || a.axes,
                        area: d.area || a.area,
                        mass: d.mass || a.mass,
                        inertia: d.inertia || a.inertia
                    });
                    var h = a.isStatic ? "#14151f" : f.choose(["#f19648", "#f5d259", "#f55a3c", "#063e7b", "#ececd1"])
                      , m = a.isStatic ? "#555" : "#ccc"
                      , x = a.isStatic && a.render.fillStyle === null ? 1 : 0;
                    a.render.fillStyle = a.render.fillStyle || h,
                    a.render.strokeStyle = a.render.strokeStyle || m,
                    a.render.lineWidth = a.render.lineWidth || x,
                    a.render.sprite.xOffset += -(a.bounds.min.x - a.position.x) / (a.bounds.max.x - a.bounds.min.x),
                    a.render.sprite.yOffset += -(a.bounds.min.y - a.position.y) / (a.bounds.max.y - a.bounds.min.y)
                };
                t.set = function(a, d, h) {
                    var m;
                    typeof d == "string" && (m = d,
                    d = {},
                    d[m] = h);
                    for (m in d)
                        if (!!Object.prototype.hasOwnProperty.call(d, m))
                            switch (h = d[m],
                            m) {
                            case "isStatic":
                                t.setStatic(a, h);
                                break;
                            case "isSleeping":
                                l.set(a, h);
                                break;
                            case "mass":
                                t.setMass(a, h);
                                break;
                            case "density":
                                t.setDensity(a, h);
                                break;
                            case "inertia":
                                t.setInertia(a, h);
                                break;
                            case "vertices":
                                t.setVertices(a, h);
                                break;
                            case "position":
                                t.setPosition(a, h);
                                break;
                            case "angle":
                                t.setAngle(a, h);
                                break;
                            case "velocity":
                                t.setVelocity(a, h);
                                break;
                            case "angularVelocity":
                                t.setAngularVelocity(a, h);
                                break;
                            case "parts":
                                t.setParts(a, h);
                                break;
                            case "centre":
                                t.setCentre(a, h);
                                break;
                            default:
                                a[m] = h
                            }
                }
                ,
                t.setStatic = function(a, d) {
                    for (var h = 0; h < a.parts.length; h++) {
                        var m = a.parts[h];
                        m.isStatic = d,
                        d ? (m._original = {
                            restitution: m.restitution,
                            friction: m.friction,
                            mass: m.mass,
                            inertia: m.inertia,
                            density: m.density,
                            inverseMass: m.inverseMass,
                            inverseInertia: m.inverseInertia
                        },
                        m.restitution = 0,
                        m.friction = 1,
                        m.mass = m.inertia = m.density = 1 / 0,
                        m.inverseMass = m.inverseInertia = 0,
                        m.positionPrev.x = m.position.x,
                        m.positionPrev.y = m.position.y,
                        m.anglePrev = m.angle,
                        m.angularVelocity = 0,
                        m.speed = 0,
                        m.angularSpeed = 0,
                        m.motion = 0) : m._original && (m.restitution = m._original.restitution,
                        m.friction = m._original.friction,
                        m.mass = m._original.mass,
                        m.inertia = m._original.inertia,
                        m.density = m._original.density,
                        m.inverseMass = m._original.inverseMass,
                        m.inverseInertia = m._original.inverseInertia,
                        m._original = null)
                    }
                }
                ,
                t.setMass = function(a, d) {
                    var h = a.inertia / (a.mass / 6);
                    a.inertia = h * (d / 6),
                    a.inverseInertia = 1 / a.inertia,
                    a.mass = d,
                    a.inverseMass = 1 / a.mass,
                    a.density = a.mass / a.area
                }
                ,
                t.setDensity = function(a, d) {
                    t.setMass(a, d * a.area),
                    a.density = d
                }
                ,
                t.setInertia = function(a, d) {
                    a.inertia = d,
                    a.inverseInertia = 1 / a.inertia
                }
                ,
                t.setVertices = function(a, d) {
                    d[0].body === a ? a.vertices = d : a.vertices = o.create(d, a),
                    a.axes = p.fromVertices(a.vertices),
                    a.area = o.area(a.vertices),
                    t.setMass(a, a.density * a.area);
                    var h = o.centre(a.vertices);
                    o.translate(a.vertices, h, -1),
                    t.setInertia(a, t._inertiaScale * o.inertia(a.vertices, a.mass)),
                    o.translate(a.vertices, a.position),
                    u.update(a.bounds, a.vertices, a.velocity)
                }
                ,
                t.setParts = function(a, d, h) {
                    var m;
                    for (d = d.slice(0),
                    a.parts.length = 0,
                    a.parts.push(a),
                    a.parent = a,
                    m = 0; m < d.length; m++) {
                        var x = d[m];
                        x !== a && (x.parent = a,
                        a.parts.push(x))
                    }
                    if (a.parts.length !== 1) {
                        if (h = typeof h < "u" ? h : !0,
                        h) {
                            var P = [];
                            for (m = 0; m < d.length; m++)
                                P = P.concat(d[m].vertices);
                            o.clockwiseSort(P);
                            var C = o.hull(P)
                              , v = o.centre(C);
                            t.setVertices(a, C),
                            o.translate(a.vertices, v)
                        }
                        var _ = t._totalProperties(a);
                        a.area = _.area,
                        a.parent = a,
                        a.position.x = _.centre.x,
                        a.position.y = _.centre.y,
                        a.positionPrev.x = _.centre.x,
                        a.positionPrev.y = _.centre.y,
                        t.setMass(a, _.mass),
                        t.setInertia(a, _.inertia),
                        t.setPosition(a, _.centre)
                    }
                }
                ,
                t.setCentre = function(a, d, h) {
                    h ? (a.positionPrev.x += d.x,
                    a.positionPrev.y += d.y,
                    a.position.x += d.x,
                    a.position.y += d.y) : (a.positionPrev.x = d.x - (a.position.x - a.positionPrev.x),
                    a.positionPrev.y = d.y - (a.position.y - a.positionPrev.y),
                    a.position.x = d.x,
                    a.position.y = d.y)
                }
                ,
                t.setPosition = function(a, d) {
                    var h = s.sub(d, a.position);
                    a.positionPrev.x += h.x,
                    a.positionPrev.y += h.y;
                    for (var m = 0; m < a.parts.length; m++) {
                        var x = a.parts[m];
                        x.position.x += h.x,
                        x.position.y += h.y,
                        o.translate(x.vertices, h),
                        u.update(x.bounds, x.vertices, a.velocity)
                    }
                }
                ,
                t.setAngle = function(a, d) {
                    var h = d - a.angle;
                    a.anglePrev += h;
                    for (var m = 0; m < a.parts.length; m++) {
                        var x = a.parts[m];
                        x.angle += h,
                        o.rotate(x.vertices, h, a.position),
                        p.rotate(x.axes, h),
                        u.update(x.bounds, x.vertices, a.velocity),
                        m > 0 && s.rotateAbout(x.position, h, a.position, x.position)
                    }
                }
                ,
                t.setVelocity = function(a, d) {
                    a.positionPrev.x = a.position.x - d.x,
                    a.positionPrev.y = a.position.y - d.y,
                    a.velocity.x = d.x,
                    a.velocity.y = d.y,
                    a.speed = s.magnitude(a.velocity)
                }
                ,
                t.setAngularVelocity = function(a, d) {
                    a.anglePrev = a.angle - d,
                    a.angularVelocity = d,
                    a.angularSpeed = Math.abs(a.angularVelocity)
                }
                ,
                t.translate = function(a, d) {
                    t.setPosition(a, s.add(a.position, d))
                }
                ,
                t.rotate = function(a, d, h) {
                    if (!h)
                        t.setAngle(a, a.angle + d);
                    else {
                        var m = Math.cos(d)
                          , x = Math.sin(d)
                          , P = a.position.x - h.x
                          , C = a.position.y - h.y;
                        t.setPosition(a, {
                            x: h.x + (P * m - C * x),
                            y: h.y + (P * x + C * m)
                        }),
                        t.setAngle(a, a.angle + d)
                    }
                }
                ,
                t.scale = function(a, d, h, m) {
                    var x = 0
                      , P = 0;
                    m = m || a.position;
                    for (var C = 0; C < a.parts.length; C++) {
                        var v = a.parts[C];
                        o.scale(v.vertices, d, h, m),
                        v.axes = p.fromVertices(v.vertices),
                        v.area = o.area(v.vertices),
                        t.setMass(v, a.density * v.area),
                        o.translate(v.vertices, {
                            x: -v.position.x,
                            y: -v.position.y
                        }),
                        t.setInertia(v, t._inertiaScale * o.inertia(v.vertices, v.mass)),
                        o.translate(v.vertices, {
                            x: v.position.x,
                            y: v.position.y
                        }),
                        C > 0 && (x += v.area,
                        P += v.inertia),
                        v.position.x = m.x + (v.position.x - m.x) * d,
                        v.position.y = m.y + (v.position.y - m.y) * h,
                        u.update(v.bounds, v.vertices, a.velocity)
                    }
                    a.parts.length > 1 && (a.area = x,
                    a.isStatic || (t.setMass(a, a.density * x),
                    t.setInertia(a, P))),
                    a.circleRadius && (d === h ? a.circleRadius *= d : a.circleRadius = null)
                }
                ,
                t.update = function(a, d, h, m) {
                    var x = Math.pow(d * h * a.timeScale, 2)
                      , P = 1 - a.frictionAir * h * a.timeScale
                      , C = a.position.x - a.positionPrev.x
                      , v = a.position.y - a.positionPrev.y;
                    a.velocity.x = C * P * m + a.force.x / a.mass * x,
                    a.velocity.y = v * P * m + a.force.y / a.mass * x,
                    a.positionPrev.x = a.position.x,
                    a.positionPrev.y = a.position.y,
                    a.position.x += a.velocity.x,
                    a.position.y += a.velocity.y,
                    a.angularVelocity = (a.angle - a.anglePrev) * P * m + a.torque / a.inertia * x,
                    a.anglePrev = a.angle,
                    a.angle += a.angularVelocity,
                    a.speed = s.magnitude(a.velocity),
                    a.angularSpeed = Math.abs(a.angularVelocity);
                    for (var _ = 0; _ < a.parts.length; _++) {
                        var y = a.parts[_];
                        o.translate(y.vertices, a.velocity),
                        _ > 0 && (y.position.x += a.velocity.x,
                        y.position.y += a.velocity.y),
                        a.angularVelocity !== 0 && (o.rotate(y.vertices, a.angularVelocity, a.position),
                        p.rotate(y.axes, a.angularVelocity),
                        _ > 0 && s.rotateAbout(y.position, a.angularVelocity, a.position, y.position)),
                        u.update(y.bounds, y.vertices, a.velocity)
                    }
                }
                ,
                t.applyForce = function(a, d, h) {
                    a.force.x += h.x,
                    a.force.y += h.y;
                    var m = {
                        x: d.x - a.position.x,
                        y: d.y - a.position.y
                    };
                    a.torque += m.x * h.y - m.y * h.x
                }
                ,
                t._totalProperties = function(a) {
                    for (var d = {
                        mass: 0,
                        area: 0,
                        inertia: 0,
                        centre: {
                            x: 0,
                            y: 0
                        }
                    }, h = a.parts.length === 1 ? 0 : 1; h < a.parts.length; h++) {
                        var m = a.parts[h]
                          , x = m.mass !== 1 / 0 ? m.mass : 1;
                        d.mass += x,
                        d.area += m.area,
                        d.inertia += m.inertia,
                        d.centre = s.add(d.centre, s.mult(m.position, x))
                    }
                    return d.centre = s.div(d.centre, d.mass),
                    d
                }
            }
            )()
        }
        , function(r, i, n) {
            var t = {};
            r.exports = t;
            var o = n(4);
            (function() {
                t._motionWakeThreshold = .18,
                t._motionSleepThreshold = .08,
                t._minBias = .9,
                t.update = function(s, l) {
                    for (var f = l * l * l, u = 0; u < s.length; u++) {
                        var p = s[u]
                          , c = p.speed * p.speed + p.angularSpeed * p.angularSpeed;
                        if (p.force.x !== 0 || p.force.y !== 0) {
                            t.set(p, !1);
                            continue
                        }
                        var a = Math.min(p.motion, c)
                          , d = Math.max(p.motion, c);
                        p.motion = t._minBias * a + (1 - t._minBias) * d,
                        p.sleepThreshold > 0 && p.motion < t._motionSleepThreshold * f ? (p.sleepCounter += 1,
                        p.sleepCounter >= p.sleepThreshold && t.set(p, !0)) : p.sleepCounter > 0 && (p.sleepCounter -= 1)
                    }
                }
                ,
                t.afterCollisions = function(s, l) {
                    for (var f = l * l * l, u = 0; u < s.length; u++) {
                        var p = s[u];
                        if (!!p.isActive) {
                            var c = p.collision
                              , a = c.bodyA.parent
                              , d = c.bodyB.parent;
                            if (!(a.isSleeping && d.isSleeping || a.isStatic || d.isStatic) && (a.isSleeping || d.isSleeping)) {
                                var h = a.isSleeping && !a.isStatic ? a : d
                                  , m = h === a ? d : a;
                                !h.isStatic && m.motion > t._motionWakeThreshold * f && t.set(h, !1)
                            }
                        }
                    }
                }
                ,
                t.set = function(s, l) {
                    var f = s.isSleeping;
                    l ? (s.isSleeping = !0,
                    s.sleepCounter = s.sleepThreshold,
                    s.positionImpulse.x = 0,
                    s.positionImpulse.y = 0,
                    s.positionPrev.x = s.position.x,
                    s.positionPrev.y = s.position.y,
                    s.anglePrev = s.angle,
                    s.speed = 0,
                    s.angularSpeed = 0,
                    s.motion = 0,
                    f || o.trigger(s, "sleepStart")) : (s.isSleeping = !1,
                    s.sleepCounter = 0,
                    f && o.trigger(s, "sleepEnd"))
                }
            }
            )()
        }
        , function(r, i, n) {
            var t = {};
            r.exports = t;
            var o = n(3)
              , s = n(9);
            (function() {
                var l = []
                  , f = {
                    overlap: 0,
                    axis: null
                }
                  , u = {
                    overlap: 0,
                    axis: null
                };
                t.create = function(p, c) {
                    return {
                        pair: null,
                        collided: !1,
                        bodyA: p,
                        bodyB: c,
                        parentA: p.parent,
                        parentB: c.parent,
                        depth: 0,
                        normal: {
                            x: 0,
                            y: 0
                        },
                        tangent: {
                            x: 0,
                            y: 0
                        },
                        penetration: {
                            x: 0,
                            y: 0
                        },
                        supports: []
                    }
                }
                ,
                t.collides = function(p, c, a) {
                    if (t._overlapAxes(f, p.vertices, c.vertices, p.axes),
                    f.overlap <= 0 || (t._overlapAxes(u, c.vertices, p.vertices, c.axes),
                    u.overlap <= 0))
                        return null;
                    var d = a && a.table[s.id(p, c)], h;
                    d ? h = d.collision : (h = t.create(p, c),
                    h.collided = !0,
                    h.bodyA = p.id < c.id ? p : c,
                    h.bodyB = p.id < c.id ? c : p,
                    h.parentA = h.bodyA.parent,
                    h.parentB = h.bodyB.parent),
                    p = h.bodyA,
                    c = h.bodyB;
                    var m;
                    f.overlap < u.overlap ? m = f : m = u;
                    var x = h.normal
                      , P = h.supports
                      , C = m.axis
                      , v = C.x
                      , _ = C.y;
                    v * (c.position.x - p.position.x) + _ * (c.position.y - p.position.y) < 0 ? (x.x = v,
                    x.y = _) : (x.x = -v,
                    x.y = -_),
                    h.tangent.x = -x.y,
                    h.tangent.y = x.x,
                    h.depth = m.overlap,
                    h.penetration.x = x.x * h.depth,
                    h.penetration.y = x.y * h.depth;
                    var y = t._findSupports(p, c, x, 1)
                      , D = 0;
                    if (o.contains(p.vertices, y[0]) && (P[D++] = y[0]),
                    o.contains(p.vertices, y[1]) && (P[D++] = y[1]),
                    D < 2) {
                        var w = t._findSupports(c, p, x, -1);
                        o.contains(c.vertices, w[0]) && (P[D++] = w[0]),
                        D < 2 && o.contains(c.vertices, w[1]) && (P[D++] = w[1])
                    }
                    return D === 0 && (P[D++] = y[0]),
                    P.length = D,
                    h
                }
                ,
                t._overlapAxes = function(p, c, a, d) {
                    var h = c.length, m = a.length, x = c[0].x, P = c[0].y, C = a[0].x, v = a[0].y, _ = d.length, y = Number.MAX_VALUE, D = 0, w, S, F, E, T, k;
                    for (T = 0; T < _; T++) {
                        var O = d[T]
                          , R = O.x
                          , B = O.y
                          , I = x * R + P * B
                          , V = C * R + v * B
                          , M = I
                          , b = V;
                        for (k = 1; k < h; k += 1)
                            E = c[k].x * R + c[k].y * B,
                            E > M ? M = E : E < I && (I = E);
                        for (k = 1; k < m; k += 1)
                            E = a[k].x * R + a[k].y * B,
                            E > b ? b = E : E < V && (V = E);
                        if (S = M - V,
                        F = b - I,
                        w = S < F ? S : F,
                        w < y && (y = w,
                        D = T,
                        w <= 0))
                            break
                    }
                    p.axis = d[D],
                    p.overlap = y
                }
                ,
                t._projectToAxis = function(p, c, a) {
                    for (var d = c[0].x * a.x + c[0].y * a.y, h = d, m = 1; m < c.length; m += 1) {
                        var x = c[m].x * a.x + c[m].y * a.y;
                        x > h ? h = x : x < d && (d = x)
                    }
                    p.min = d,
                    p.max = h
                }
                ,
                t._findSupports = function(p, c, a, d) {
                    var h = c.vertices, m = h.length, x = p.position.x, P = p.position.y, C = a.x * d, v = a.y * d, _ = Number.MAX_VALUE, y, D, w, S, F;
                    for (F = 0; F < m; F += 1)
                        D = h[F],
                        S = C * (x - D.x) + v * (P - D.y),
                        S < _ && (_ = S,
                        y = D);
                    return w = h[(m + y.index - 1) % m],
                    _ = C * (x - w.x) + v * (P - w.y),
                    D = h[(y.index + 1) % m],
                    C * (x - D.x) + v * (P - D.y) < _ ? (l[0] = y,
                    l[1] = D,
                    l) : (l[0] = y,
                    l[1] = w,
                    l)
                }
            }
            )()
        }
        , function(r, i, n) {
            var t = {};
            r.exports = t;
            var o = n(17);
            (function() {
                t.create = function(s, l) {
                    var f = s.bodyA
                      , u = s.bodyB
                      , p = {
                        id: t.id(f, u),
                        bodyA: f,
                        bodyB: u,
                        collision: s,
                        contacts: [],
                        activeContacts: [],
                        separation: 0,
                        isActive: !0,
                        confirmedActive: !0,
                        isSensor: f.isSensor || u.isSensor,
                        timeCreated: l,
                        timeUpdated: l,
                        inverseMass: 0,
                        friction: 0,
                        frictionStatic: 0,
                        restitution: 0,
                        slop: 0
                    };
                    return t.update(p, s, l),
                    p
                }
                ,
                t.update = function(s, l, f) {
                    var u = s.contacts
                      , p = l.supports
                      , c = s.activeContacts
                      , a = l.parentA
                      , d = l.parentB
                      , h = a.vertices.length;
                    s.isActive = !0,
                    s.timeUpdated = f,
                    s.collision = l,
                    s.separation = l.depth,
                    s.inverseMass = a.inverseMass + d.inverseMass,
                    s.friction = a.friction < d.friction ? a.friction : d.friction,
                    s.frictionStatic = a.frictionStatic > d.frictionStatic ? a.frictionStatic : d.frictionStatic,
                    s.restitution = a.restitution > d.restitution ? a.restitution : d.restitution,
                    s.slop = a.slop > d.slop ? a.slop : d.slop,
                    l.pair = s,
                    c.length = 0;
                    for (var m = 0; m < p.length; m++) {
                        var x = p[m]
                          , P = x.body === a ? x.index : h + x.index
                          , C = u[P];
                        C ? c.push(C) : c.push(u[P] = o.create(x))
                    }
                }
                ,
                t.setActive = function(s, l, f) {
                    l ? (s.isActive = !0,
                    s.timeUpdated = f) : (s.isActive = !1,
                    s.activeContacts.length = 0)
                }
                ,
                t.id = function(s, l) {
                    return s.id < l.id ? "A" + s.id + "B" + l.id : "A" + l.id + "B" + s.id
                }
            }
            )()
        }
        , function(r, i, n) {
            var t = {};
            r.exports = t;
            var o = n(3)
              , s = n(2)
              , l = n(7)
              , f = n(1)
              , u = n(11)
              , p = n(0);
            (function() {
                t._warming = .4,
                t._torqueDampen = 1,
                t._minLength = 1e-6,
                t.create = function(c) {
                    var a = c;
                    a.bodyA && !a.pointA && (a.pointA = {
                        x: 0,
                        y: 0
                    }),
                    a.bodyB && !a.pointB && (a.pointB = {
                        x: 0,
                        y: 0
                    });
                    var d = a.bodyA ? s.add(a.bodyA.position, a.pointA) : a.pointA
                      , h = a.bodyB ? s.add(a.bodyB.position, a.pointB) : a.pointB
                      , m = s.magnitude(s.sub(d, h));
                    a.length = typeof a.length < "u" ? a.length : m,
                    a.id = a.id || p.nextId(),
                    a.label = a.label || "Constraint",
                    a.type = "constraint",
                    a.stiffness = a.stiffness || (a.length > 0 ? 1 : .7),
                    a.damping = a.damping || 0,
                    a.angularStiffness = a.angularStiffness || 0,
                    a.angleA = a.bodyA ? a.bodyA.angle : a.angleA,
                    a.angleB = a.bodyB ? a.bodyB.angle : a.angleB,
                    a.plugin = {};
                    var x = {
                        visible: !0,
                        lineWidth: 2,
                        strokeStyle: "#ffffff",
                        type: "line",
                        anchors: !0
                    };
                    return a.length === 0 && a.stiffness > .1 ? (x.type = "pin",
                    x.anchors = !1) : a.stiffness < .9 && (x.type = "spring"),
                    a.render = p.extend(x, a.render),
                    a
                }
                ,
                t.preSolveAll = function(c) {
                    for (var a = 0; a < c.length; a += 1) {
                        var d = c[a]
                          , h = d.constraintImpulse;
                        d.isStatic || h.x === 0 && h.y === 0 && h.angle === 0 || (d.position.x += h.x,
                        d.position.y += h.y,
                        d.angle += h.angle)
                    }
                }
                ,
                t.solveAll = function(c, a) {
                    for (var d = 0; d < c.length; d += 1) {
                        var h = c[d]
                          , m = !h.bodyA || h.bodyA && h.bodyA.isStatic
                          , x = !h.bodyB || h.bodyB && h.bodyB.isStatic;
                        (m || x) && t.solve(c[d], a)
                    }
                    for (d = 0; d < c.length; d += 1)
                        h = c[d],
                        m = !h.bodyA || h.bodyA && h.bodyA.isStatic,
                        x = !h.bodyB || h.bodyB && h.bodyB.isStatic,
                        !m && !x && t.solve(c[d], a)
                }
                ,
                t.solve = function(c, a) {
                    var d = c.bodyA
                      , h = c.bodyB
                      , m = c.pointA
                      , x = c.pointB;
                    if (!(!d && !h)) {
                        d && !d.isStatic && (s.rotate(m, d.angle - c.angleA, m),
                        c.angleA = d.angle),
                        h && !h.isStatic && (s.rotate(x, h.angle - c.angleB, x),
                        c.angleB = h.angle);
                        var P = m
                          , C = x;
                        if (d && (P = s.add(d.position, m)),
                        h && (C = s.add(h.position, x)),
                        !(!P || !C)) {
                            var v = s.sub(P, C)
                              , _ = s.magnitude(v);
                            _ < t._minLength && (_ = t._minLength);
                            var y = (_ - c.length) / _, D = c.stiffness < 1 ? c.stiffness * a : c.stiffness, w = s.mult(v, y * D), S = (d ? d.inverseMass : 0) + (h ? h.inverseMass : 0), F = (d ? d.inverseInertia : 0) + (h ? h.inverseInertia : 0), E = S + F, T, k, O, R, B;
                            if (c.damping) {
                                var I = s.create();
                                O = s.div(v, _),
                                B = s.sub(h && s.sub(h.position, h.positionPrev) || I, d && s.sub(d.position, d.positionPrev) || I),
                                R = s.dot(O, B)
                            }
                            d && !d.isStatic && (k = d.inverseMass / S,
                            d.constraintImpulse.x -= w.x * k,
                            d.constraintImpulse.y -= w.y * k,
                            d.position.x -= w.x * k,
                            d.position.y -= w.y * k,
                            c.damping && (d.positionPrev.x -= c.damping * O.x * R * k,
                            d.positionPrev.y -= c.damping * O.y * R * k),
                            T = s.cross(m, w) / E * t._torqueDampen * d.inverseInertia * (1 - c.angularStiffness),
                            d.constraintImpulse.angle -= T,
                            d.angle -= T),
                            h && !h.isStatic && (k = h.inverseMass / S,
                            h.constraintImpulse.x += w.x * k,
                            h.constraintImpulse.y += w.y * k,
                            h.position.x += w.x * k,
                            h.position.y += w.y * k,
                            c.damping && (h.positionPrev.x += c.damping * O.x * R * k,
                            h.positionPrev.y += c.damping * O.y * R * k),
                            T = s.cross(x, w) / E * t._torqueDampen * h.inverseInertia * (1 - c.angularStiffness),
                            h.constraintImpulse.angle += T,
                            h.angle += T)
                        }
                    }
                }
                ,
                t.postSolveAll = function(c) {
                    for (var a = 0; a < c.length; a++) {
                        var d = c[a]
                          , h = d.constraintImpulse;
                        if (!(d.isStatic || h.x === 0 && h.y === 0 && h.angle === 0)) {
                            l.set(d, !1);
                            for (var m = 0; m < d.parts.length; m++) {
                                var x = d.parts[m];
                                o.translate(x.vertices, h),
                                m > 0 && (x.position.x += h.x,
                                x.position.y += h.y),
                                h.angle !== 0 && (o.rotate(x.vertices, h.angle, d.position),
                                u.rotate(x.axes, h.angle),
                                m > 0 && s.rotateAbout(x.position, h.angle, d.position, x.position)),
                                f.update(x.bounds, x.vertices, d.velocity)
                            }
                            h.angle *= t._warming,
                            h.x *= t._warming,
                            h.y *= t._warming
                        }
                    }
                }
                ,
                t.pointAWorld = function(c) {
                    return {
                        x: (c.bodyA ? c.bodyA.position.x : 0) + c.pointA.x,
                        y: (c.bodyA ? c.bodyA.position.y : 0) + c.pointA.y
                    }
                }
                ,
                t.pointBWorld = function(c) {
                    return {
                        x: (c.bodyB ? c.bodyB.position.x : 0) + c.pointB.x,
                        y: (c.bodyB ? c.bodyB.position.y : 0) + c.pointB.y
                    }
                }
            }
            )()
        }
        , function(r, i, n) {
            var t = {};
            r.exports = t;
            var o = n(2)
              , s = n(0);
            (function() {
                t.fromVertices = function(l) {
                    for (var f = {}, u = 0; u < l.length; u++) {
                        var p = (u + 1) % l.length
                          , c = o.normalise({
                            x: l[p].y - l[u].y,
                            y: l[u].x - l[p].x
                        })
                          , a = c.y === 0 ? 1 / 0 : c.x / c.y;
                        a = a.toFixed(3).toString(),
                        f[a] = c
                    }
                    return s.values(f)
                }
                ,
                t.rotate = function(l, f) {
                    if (f !== 0)
                        for (var u = Math.cos(f), p = Math.sin(f), c = 0; c < l.length; c++) {
                            var a = l[c], d;
                            d = a.x * u - a.y * p,
                            a.y = a.x * p + a.y * u,
                            a.x = d
                        }
                }
            }
            )()
        }
        , function(r, i, n) {
            var t = {};
            r.exports = t;
            var o = n(3)
              , s = n(0)
              , l = n(6)
              , f = n(1)
              , u = n(2);
            (function() {
                t.rectangle = function(p, c, a, d, h) {
                    h = h || {};
                    var m = {
                        label: "Rectangle Body",
                        position: {
                            x: p,
                            y: c
                        },
                        vertices: o.fromPath("L 0 0 L " + a + " 0 L " + a + " " + d + " L 0 " + d)
                    };
                    if (h.chamfer) {
                        var x = h.chamfer;
                        m.vertices = o.chamfer(m.vertices, x.radius, x.quality, x.qualityMin, x.qualityMax),
                        delete h.chamfer
                    }
                    return l.create(s.extend({}, m, h))
                }
                ,
                t.trapezoid = function(p, c, a, d, h, m) {
                    m = m || {},
                    h *= .5;
                    var x = (1 - h * 2) * a, P = a * h, C = P + x, v = C + P, _;
                    h < .5 ? _ = "L 0 0 L " + P + " " + -d + " L " + C + " " + -d + " L " + v + " 0" : _ = "L 0 0 L " + C + " " + -d + " L " + v + " 0";
                    var y = {
                        label: "Trapezoid Body",
                        position: {
                            x: p,
                            y: c
                        },
                        vertices: o.fromPath(_)
                    };
                    if (m.chamfer) {
                        var D = m.chamfer;
                        y.vertices = o.chamfer(y.vertices, D.radius, D.quality, D.qualityMin, D.qualityMax),
                        delete m.chamfer
                    }
                    return l.create(s.extend({}, y, m))
                }
                ,
                t.circle = function(p, c, a, d, h) {
                    d = d || {};
                    var m = {
                        label: "Circle Body",
                        circleRadius: a
                    };
                    h = h || 25;
                    var x = Math.ceil(Math.max(10, Math.min(h, a)));
                    return x % 2 === 1 && (x += 1),
                    t.polygon(p, c, x, a, s.extend({}, m, d))
                }
                ,
                t.polygon = function(p, c, a, d, h) {
                    if (h = h || {},
                    a < 3)
                        return t.circle(p, c, d, h);
                    for (var m = 2 * Math.PI / a, x = "", P = m * .5, C = 0; C < a; C += 1) {
                        var v = P + C * m
                          , _ = Math.cos(v) * d
                          , y = Math.sin(v) * d;
                        x += "L " + _.toFixed(3) + " " + y.toFixed(3) + " "
                    }
                    var D = {
                        label: "Polygon Body",
                        position: {
                            x: p,
                            y: c
                        },
                        vertices: o.fromPath(x)
                    };
                    if (h.chamfer) {
                        var w = h.chamfer;
                        D.vertices = o.chamfer(D.vertices, w.radius, w.quality, w.qualityMin, w.qualityMax),
                        delete h.chamfer
                    }
                    return l.create(s.extend({}, D, h))
                }
                ,
                t.fromVertices = function(p, c, a, d, h, m, x, P) {
                    var C = s.getDecomp(), v, _, y, D, w, S, F, E, T, k, O;
                    for (v = Boolean(C && C.quickDecomp),
                    d = d || {},
                    y = [],
                    h = typeof h < "u" ? h : !1,
                    m = typeof m < "u" ? m : .01,
                    x = typeof x < "u" ? x : 10,
                    P = typeof P < "u" ? P : .01,
                    s.isArray(a[0]) || (a = [a]),
                    k = 0; k < a.length; k += 1)
                        if (S = a[k],
                        D = o.isConvex(S),
                        w = !D,
                        w && !v && s.warnOnce("Bodies.fromVertices: Install the 'poly-decomp' library and use Common.setDecomp or provide 'decomp' as a global to decompose concave vertices."),
                        D || !v)
                            D ? S = o.clockwiseSort(S) : S = o.hull(S),
                            y.push({
                                position: {
                                    x: p,
                                    y: c
                                },
                                vertices: S
                            });
                        else {
                            var R = S.map(function(ee) {
                                return [ee.x, ee.y]
                            });
                            C.makeCCW(R),
                            m !== !1 && C.removeCollinearPoints(R, m),
                            P !== !1 && C.removeDuplicatePoints && C.removeDuplicatePoints(R, P);
                            var B = C.quickDecomp(R);
                            for (F = 0; F < B.length; F++) {
                                var I = B[F]
                                  , V = I.map(function(ee) {
                                    return {
                                        x: ee[0],
                                        y: ee[1]
                                    }
                                });
                                x > 0 && o.area(V) < x || y.push({
                                    position: o.centre(V),
                                    vertices: V
                                })
                            }
                        }
                    for (F = 0; F < y.length; F++)
                        y[F] = l.create(s.extend(y[F], d));
                    if (h) {
                        var M = 5;
                        for (F = 0; F < y.length; F++) {
                            var b = y[F];
                            for (E = F + 1; E < y.length; E++) {
                                var U = y[E];
                                if (f.overlaps(b.bounds, U.bounds)) {
                                    var Z = b.vertices
                                      , oe = U.vertices;
                                    for (T = 0; T < b.vertices.length; T++)
                                        for (O = 0; O < U.vertices.length; O++) {
                                            var re = u.magnitudeSquared(u.sub(Z[(T + 1) % Z.length], oe[O]))
                                              , q = u.magnitudeSquared(u.sub(Z[T], oe[(O + 1) % oe.length]));
                                            re < M && q < M && (Z[T].isInternal = !0,
                                            oe[O].isInternal = !0)
                                        }
                                }
                            }
                        }
                    }
                    return y.length > 1 ? (_ = l.create(s.extend({
                        parts: y.slice(0)
                    }, d)),
                    l.setPosition(_, {
                        x: p,
                        y: c
                    }),
                    _) : y[0]
                }
            }
            )()
        }
        , function(r, i, n) {
            var t = {};
            r.exports = t;
            var o = n(0);
            (function() {
                t.create = function(s) {
                    var l = {};
                    return s || o.log("Mouse.create: element was undefined, defaulting to document.body", "warn"),
                    l.element = s || document.body,
                    l.absolute = {
                        x: 0,
                        y: 0
                    },
                    l.position = {
                        x: 0,
                        y: 0
                    },
                    l.mousedownPosition = {
                        x: 0,
                        y: 0
                    },
                    l.mouseupPosition = {
                        x: 0,
                        y: 0
                    },
                    l.offset = {
                        x: 0,
                        y: 0
                    },
                    l.scale = {
                        x: 1,
                        y: 1
                    },
                    l.wheelDelta = 0,
                    l.button = -1,
                    l.pixelRatio = parseInt(l.element.getAttribute("data-pixel-ratio"), 10) || 1,
                    l.sourceEvents = {
                        mousemove: null,
                        mousedown: null,
                        mouseup: null,
                        mousewheel: null
                    },
                    l.mousemove = function(f) {
                        var u = t._getRelativeMousePosition(f, l.element, l.pixelRatio)
                          , p = f.changedTouches;
                        p && (l.button = 0,
                        f.preventDefault()),
                        l.absolute.x = u.x,
                        l.absolute.y = u.y,
                        l.position.x = l.absolute.x * l.scale.x + l.offset.x,
                        l.position.y = l.absolute.y * l.scale.y + l.offset.y,
                        l.sourceEvents.mousemove = f
                    }
                    ,
                    l.mousedown = function(f) {
                        var u = t._getRelativeMousePosition(f, l.element, l.pixelRatio)
                          , p = f.changedTouches;
                        p ? (l.button = 0,
                        f.preventDefault()) : l.button = f.button,
                        l.absolute.x = u.x,
                        l.absolute.y = u.y,
                        l.position.x = l.absolute.x * l.scale.x + l.offset.x,
                        l.position.y = l.absolute.y * l.scale.y + l.offset.y,
                        l.mousedownPosition.x = l.position.x,
                        l.mousedownPosition.y = l.position.y,
                        l.sourceEvents.mousedown = f
                    }
                    ,
                    l.mouseup = function(f) {
                        var u = t._getRelativeMousePosition(f, l.element, l.pixelRatio)
                          , p = f.changedTouches;
                        p && f.preventDefault(),
                        l.button = -1,
                        l.absolute.x = u.x,
                        l.absolute.y = u.y,
                        l.position.x = l.absolute.x * l.scale.x + l.offset.x,
                        l.position.y = l.absolute.y * l.scale.y + l.offset.y,
                        l.mouseupPosition.x = l.position.x,
                        l.mouseupPosition.y = l.position.y,
                        l.sourceEvents.mouseup = f
                    }
                    ,
                    l.mousewheel = function(f) {
                        l.wheelDelta = Math.max(-1, Math.min(1, f.wheelDelta || -f.detail)),
                        f.preventDefault()
                    }
                    ,
                    t.setElement(l, l.element),
                    l
                }
                ,
                t.setElement = function(s, l) {
                    s.element = l,
                    l.addEventListener("mousemove", s.mousemove),
                    l.addEventListener("mousedown", s.mousedown),
                    l.addEventListener("mouseup", s.mouseup),
                    l.addEventListener("mousewheel", s.mousewheel),
                    l.addEventListener("DOMMouseScroll", s.mousewheel),
                    l.addEventListener("touchmove", s.mousemove),
                    l.addEventListener("touchstart", s.mousedown),
                    l.addEventListener("touchend", s.mouseup)
                }
                ,
                t.clearSourceEvents = function(s) {
                    s.sourceEvents.mousemove = null,
                    s.sourceEvents.mousedown = null,
                    s.sourceEvents.mouseup = null,
                    s.sourceEvents.mousewheel = null,
                    s.wheelDelta = 0
                }
                ,
                t.setOffset = function(s, l) {
                    s.offset.x = l.x,
                    s.offset.y = l.y,
                    s.position.x = s.absolute.x * s.scale.x + s.offset.x,
                    s.position.y = s.absolute.y * s.scale.y + s.offset.y
                }
                ,
                t.setScale = function(s, l) {
                    s.scale.x = l.x,
                    s.scale.y = l.y,
                    s.position.x = s.absolute.x * s.scale.x + s.offset.x,
                    s.position.y = s.absolute.y * s.scale.y + s.offset.y
                }
                ,
                t._getRelativeMousePosition = function(s, l, f) {
                    var u = l.getBoundingClientRect(), p = document.documentElement || document.body.parentNode || document.body, c = window.pageXOffset !== void 0 ? window.pageXOffset : p.scrollLeft, a = window.pageYOffset !== void 0 ? window.pageYOffset : p.scrollTop, d = s.changedTouches, h, m;
                    return d ? (h = d[0].pageX - u.left - c,
                    m = d[0].pageY - u.top - a) : (h = s.pageX - u.left - c,
                    m = s.pageY - u.top - a),
                    {
                        x: h / (l.clientWidth / (l.width || l.clientWidth) * f),
                        y: m / (l.clientHeight / (l.height || l.clientHeight) * f)
                    }
                }
            }
            )()
        }
        , function(r, i, n) {
            var t = {};
            r.exports = t;
            var o = n(0)
              , s = n(8);
            (function() {
                t.create = function(l) {
                    var f = {
                        bodies: [],
                        pairs: null
                    };
                    return o.extend(f, l)
                }
                ,
                t.setBodies = function(l, f) {
                    l.bodies = f.slice(0)
                }
                ,
                t.clear = function(l) {
                    l.bodies = []
                }
                ,
                t.collisions = function(l) {
                    var f = [], u = l.pairs, p = l.bodies, c = p.length, a = t.canCollide, d = s.collides, h, m;
                    for (p.sort(t._compareBoundsX),
                    h = 0; h < c; h++) {
                        var x = p[h]
                          , P = x.bounds
                          , C = x.bounds.max.x
                          , v = x.bounds.max.y
                          , _ = x.bounds.min.y
                          , y = x.isStatic || x.isSleeping
                          , D = x.parts.length
                          , w = D === 1;
                        for (m = h + 1; m < c; m++) {
                            var S = p[m]
                              , F = S.bounds;
                            if (F.min.x > C)
                                break;
                            if (!(v < F.min.y || _ > F.max.y) && !(y && (S.isStatic || S.isSleeping)) && !!a(x.collisionFilter, S.collisionFilter)) {
                                var E = S.parts.length;
                                if (w && E === 1) {
                                    var T = d(x, S, u);
                                    T && f.push(T)
                                } else
                                    for (var k = D > 1 ? 1 : 0, O = E > 1 ? 1 : 0, R = k; R < D; R++)
                                        for (var B = x.parts[R], P = B.bounds, I = O; I < E; I++) {
                                            var V = S.parts[I]
                                              , F = V.bounds;
                                            if (!(P.min.x > F.max.x || P.max.x < F.min.x || P.max.y < F.min.y || P.min.y > F.max.y)) {
                                                var T = d(B, V, u);
                                                T && f.push(T)
                                            }
                                        }
                            }
                        }
                    }
                    return f
                }
                ,
                t.canCollide = function(l, f) {
                    return l.group === f.group && l.group !== 0 ? l.group > 0 : (l.mask & f.category) !== 0 && (f.mask & l.category) !== 0
                }
                ,
                t._compareBoundsX = function(l, f) {
                    return l.bounds.min.x - f.bounds.min.x
                }
            }
            )()
        }
        , function(r, i, n) {
            var t = {};
            r.exports = t;
            var o = n(0);
            (function() {
                t._registry = {},
                t.register = function(s) {
                    if (t.isPlugin(s) || o.warn("Plugin.register:", t.toString(s), "does not implement all required fields."),
                    s.name in t._registry) {
                        var l = t._registry[s.name]
                          , f = t.versionParse(s.version).number
                          , u = t.versionParse(l.version).number;
                        f > u ? (o.warn("Plugin.register:", t.toString(l), "was upgraded to", t.toString(s)),
                        t._registry[s.name] = s) : f < u ? o.warn("Plugin.register:", t.toString(l), "can not be downgraded to", t.toString(s)) : s !== l && o.warn("Plugin.register:", t.toString(s), "is already registered to different plugin object")
                    } else
                        t._registry[s.name] = s;
                    return s
                }
                ,
                t.resolve = function(s) {
                    return t._registry[t.dependencyParse(s).name]
                }
                ,
                t.toString = function(s) {
                    return typeof s == "string" ? s : (s.name || "anonymous") + "@" + (s.version || s.range || "0.0.0")
                }
                ,
                t.isPlugin = function(s) {
                    return s && s.name && s.version && s.install
                }
                ,
                t.isUsed = function(s, l) {
                    return s.used.indexOf(l) > -1
                }
                ,
                t.isFor = function(s, l) {
                    var f = s.for && t.dependencyParse(s.for);
                    return !s.for || l.name === f.name && t.versionSatisfies(l.version, f.range)
                }
                ,
                t.use = function(s, l) {
                    if (s.uses = (s.uses || []).concat(l || []),
                    s.uses.length === 0) {
                        o.warn("Plugin.use:", t.toString(s), "does not specify any dependencies to install.");
                        return
                    }
                    for (var f = t.dependencies(s), u = o.topologicalSort(f), p = [], c = 0; c < u.length; c += 1)
                        if (u[c] !== s.name) {
                            var a = t.resolve(u[c]);
                            if (!a) {
                                p.push("\u274C " + u[c]);
                                continue
                            }
                            t.isUsed(s, a.name) || (t.isFor(a, s) || (o.warn("Plugin.use:", t.toString(a), "is for", a.for, "but installed on", t.toString(s) + "."),
                            a._warned = !0),
                            a.install ? a.install(s) : (o.warn("Plugin.use:", t.toString(a), "does not specify an install function."),
                            a._warned = !0),
                            a._warned ? (p.push("\u{1F536} " + t.toString(a)),
                            delete a._warned) : p.push("\u2705 " + t.toString(a)),
                            s.used.push(a.name))
                        }
                    p.length > 0 && o.info(p.join("  "))
                }
                ,
                t.dependencies = function(s, l) {
                    var f = t.dependencyParse(s)
                      , u = f.name;
                    if (l = l || {},
                    !(u in l)) {
                        s = t.resolve(s) || s,
                        l[u] = o.map(s.uses || [], function(c) {
                            t.isPlugin(c) && t.register(c);
                            var a = t.dependencyParse(c)
                              , d = t.resolve(c);
                            return d && !t.versionSatisfies(d.version, a.range) ? (o.warn("Plugin.dependencies:", t.toString(d), "does not satisfy", t.toString(a), "used by", t.toString(f) + "."),
                            d._warned = !0,
                            s._warned = !0) : d || (o.warn("Plugin.dependencies:", t.toString(c), "used by", t.toString(f), "could not be resolved."),
                            s._warned = !0),
                            a.name
                        });
                        for (var p = 0; p < l[u].length; p += 1)
                            t.dependencies(l[u][p], l);
                        return l
                    }
                }
                ,
                t.dependencyParse = function(s) {
                    if (o.isString(s)) {
                        var l = /^[\w-]+(@(\*|[\^~]?\d+\.\d+\.\d+(-[0-9A-Za-z-+]+)?))?$/;
                        return l.test(s) || o.warn("Plugin.dependencyParse:", s, "is not a valid dependency string."),
                        {
                            name: s.split("@")[0],
                            range: s.split("@")[1] || "*"
                        }
                    }
                    return {
                        name: s.name,
                        range: s.range || s.version
                    }
                }
                ,
                t.versionParse = function(s) {
                    var l = /^(\*)|(\^|~|>=|>)?\s*((\d+)\.(\d+)\.(\d+))(-[0-9A-Za-z-+]+)?$/;
                    l.test(s) || o.warn("Plugin.versionParse:", s, "is not a valid version or range.");
                    var f = l.exec(s)
                      , u = Number(f[4])
                      , p = Number(f[5])
                      , c = Number(f[6]);
                    return {
                        isRange: Boolean(f[1] || f[2]),
                        version: f[3],
                        range: s,
                        operator: f[1] || f[2] || "",
                        major: u,
                        minor: p,
                        patch: c,
                        parts: [u, p, c],
                        prerelease: f[7],
                        number: u * 1e8 + p * 1e4 + c
                    }
                }
                ,
                t.versionSatisfies = function(s, l) {
                    l = l || "*";
                    var f = t.versionParse(l)
                      , u = t.versionParse(s);
                    if (f.isRange) {
                        if (f.operator === "*" || s === "*")
                            return !0;
                        if (f.operator === ">")
                            return u.number > f.number;
                        if (f.operator === ">=")
                            return u.number >= f.number;
                        if (f.operator === "~")
                            return u.major === f.major && u.minor === f.minor && u.patch >= f.patch;
                        if (f.operator === "^")
                            return f.major > 0 ? u.major === f.major && u.number >= f.number : f.minor > 0 ? u.minor === f.minor && u.patch >= f.patch : u.patch === f.patch
                    }
                    return s === l || s === "*"
                }
            }
            )()
        }
        , function(r, i, n) {
            var t = {};
            r.exports = t;
            var o = n(0)
              , s = n(5)
              , l = n(1)
              , f = n(4)
              , u = n(2)
              , p = n(13);
            (function() {
                var c, a;
                typeof window < "u" && (c = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.msRequestAnimationFrame || function(v) {
                    window.setTimeout(function() {
                        v(o.now())
                    }, 1e3 / 60)
                }
                ,
                a = window.cancelAnimationFrame || window.mozCancelAnimationFrame || window.webkitCancelAnimationFrame || window.msCancelAnimationFrame),
                t._goodFps = 30,
                t._goodDelta = 1e3 / 60,
                t.create = function(v) {
                    var _ = {
                        controller: t,
                        engine: null,
                        element: null,
                        canvas: null,
                        mouse: null,
                        frameRequestId: null,
                        timing: {
                            historySize: 60,
                            delta: 0,
                            deltaHistory: [],
                            lastTime: 0,
                            lastTimestamp: 0,
                            lastElapsed: 0,
                            timestampElapsed: 0,
                            timestampElapsedHistory: [],
                            engineDeltaHistory: [],
                            engineElapsedHistory: [],
                            elapsedHistory: []
                        },
                        options: {
                            width: 800,
                            height: 600,
                            pixelRatio: 1,
                            background: "#14151f",
                            wireframeBackground: "#14151f",
                            hasBounds: !!v.bounds,
                            enabled: !0,
                            wireframes: !0,
                            showSleeping: !0,
                            showDebug: !1,
                            showStats: !1,
                            showPerformance: !1,
                            showBounds: !1,
                            showVelocity: !1,
                            showCollisions: !1,
                            showSeparations: !1,
                            showAxes: !1,
                            showPositions: !1,
                            showAngleIndicator: !1,
                            showIds: !1,
                            showVertexNumbers: !1,
                            showConvexHulls: !1,
                            showInternalEdges: !1,
                            showMousePosition: !1
                        }
                    }
                      , y = o.extend(_, v);
                    return y.canvas && (y.canvas.width = y.options.width || y.canvas.width,
                    y.canvas.height = y.options.height || y.canvas.height),
                    y.mouse = v.mouse,
                    y.engine = v.engine,
                    y.canvas = y.canvas || m(y.options.width, y.options.height),
                    y.context = y.canvas.getContext("2d"),
                    y.textures = {},
                    y.bounds = y.bounds || {
                        min: {
                            x: 0,
                            y: 0
                        },
                        max: {
                            x: y.canvas.width,
                            y: y.canvas.height
                        }
                    },
                    y.options.showBroadphase = !1,
                    y.options.pixelRatio !== 1 && t.setPixelRatio(y, y.options.pixelRatio),
                    o.isElement(y.element) ? y.element.appendChild(y.canvas) : y.canvas.parentNode || o.log("Render.create: options.element was undefined, render.canvas was created but not appended", "warn"),
                    y
                }
                ,
                t.run = function(v) {
                    (function _(y) {
                        v.frameRequestId = c(_),
                        d(v, y),
                        t.world(v, y),
                        (v.options.showStats || v.options.showDebug) && t.stats(v, v.context, y),
                        (v.options.showPerformance || v.options.showDebug) && t.performance(v, v.context, y)
                    }
                    )()
                }
                ,
                t.stop = function(v) {
                    a(v.frameRequestId)
                }
                ,
                t.setPixelRatio = function(v, _) {
                    var y = v.options
                      , D = v.canvas;
                    _ === "auto" && (_ = x(D)),
                    y.pixelRatio = _,
                    D.setAttribute("data-pixel-ratio", _),
                    D.width = y.width * _,
                    D.height = y.height * _,
                    D.style.width = y.width + "px",
                    D.style.height = y.height + "px"
                }
                ,
                t.lookAt = function(v, _, y, D) {
                    D = typeof D < "u" ? D : !0,
                    _ = o.isArray(_) ? _ : [_],
                    y = y || {
                        x: 0,
                        y: 0
                    };
                    for (var w = {
                        min: {
                            x: 1 / 0,
                            y: 1 / 0
                        },
                        max: {
                            x: -1 / 0,
                            y: -1 / 0
                        }
                    }, S = 0; S < _.length; S += 1) {
                        var F = _[S]
                          , E = F.bounds ? F.bounds.min : F.min || F.position || F
                          , T = F.bounds ? F.bounds.max : F.max || F.position || F;
                        E && T && (E.x < w.min.x && (w.min.x = E.x),
                        T.x > w.max.x && (w.max.x = T.x),
                        E.y < w.min.y && (w.min.y = E.y),
                        T.y > w.max.y && (w.max.y = T.y))
                    }
                    var k = w.max.x - w.min.x + 2 * y.x
                      , O = w.max.y - w.min.y + 2 * y.y
                      , R = v.canvas.height
                      , B = v.canvas.width
                      , I = B / R
                      , V = k / O
                      , M = 1
                      , b = 1;
                    V > I ? b = V / I : M = I / V,
                    v.options.hasBounds = !0,
                    v.bounds.min.x = w.min.x,
                    v.bounds.max.x = w.min.x + k * M,
                    v.bounds.min.y = w.min.y,
                    v.bounds.max.y = w.min.y + O * b,
                    D && (v.bounds.min.x += k * .5 - k * M * .5,
                    v.bounds.max.x += k * .5 - k * M * .5,
                    v.bounds.min.y += O * .5 - O * b * .5,
                    v.bounds.max.y += O * .5 - O * b * .5),
                    v.bounds.min.x -= y.x,
                    v.bounds.max.x -= y.x,
                    v.bounds.min.y -= y.y,
                    v.bounds.max.y -= y.y,
                    v.mouse && (p.setScale(v.mouse, {
                        x: (v.bounds.max.x - v.bounds.min.x) / v.canvas.width,
                        y: (v.bounds.max.y - v.bounds.min.y) / v.canvas.height
                    }),
                    p.setOffset(v.mouse, v.bounds.min))
                }
                ,
                t.startViewTransform = function(v) {
                    var _ = v.bounds.max.x - v.bounds.min.x
                      , y = v.bounds.max.y - v.bounds.min.y
                      , D = _ / v.options.width
                      , w = y / v.options.height;
                    v.context.setTransform(v.options.pixelRatio / D, 0, 0, v.options.pixelRatio / w, 0, 0),
                    v.context.translate(-v.bounds.min.x, -v.bounds.min.y)
                }
                ,
                t.endViewTransform = function(v) {
                    v.context.setTransform(v.options.pixelRatio, 0, 0, v.options.pixelRatio, 0, 0)
                }
                ,
                t.world = function(v, _) {
                    var y = o.now(), D = v.engine, w = D.world, S = v.canvas, F = v.context, E = v.options, T = v.timing, k = s.allBodies(w), O = s.allConstraints(w), R = E.wireframes ? E.wireframeBackground : E.background, B = [], I = [], V, M = {
                        timestamp: D.timing.timestamp
                    };
                    if (f.trigger(v, "beforeRender", M),
                    v.currentBackground !== R && C(v, R),
                    F.globalCompositeOperation = "source-in",
                    F.fillStyle = "transparent",
                    F.fillRect(0, 0, S.width, S.height),
                    F.globalCompositeOperation = "source-over",
                    E.hasBounds) {
                        for (V = 0; V < k.length; V++) {
                            var b = k[V];
                            l.overlaps(b.bounds, v.bounds) && B.push(b)
                        }
                        for (V = 0; V < O.length; V++) {
                            var U = O[V]
                              , Z = U.bodyA
                              , oe = U.bodyB
                              , re = U.pointA
                              , q = U.pointB;
                            Z && (re = u.add(Z.position, U.pointA)),
                            oe && (q = u.add(oe.position, U.pointB)),
                            !(!re || !q) && (l.contains(v.bounds, re) || l.contains(v.bounds, q)) && I.push(U)
                        }
                        t.startViewTransform(v),
                        v.mouse && (p.setScale(v.mouse, {
                            x: (v.bounds.max.x - v.bounds.min.x) / v.options.width,
                            y: (v.bounds.max.y - v.bounds.min.y) / v.options.height
                        }),
                        p.setOffset(v.mouse, v.bounds.min))
                    } else
                        I = O,
                        B = k,
                        v.options.pixelRatio !== 1 && v.context.setTransform(v.options.pixelRatio, 0, 0, v.options.pixelRatio, 0, 0);
                    !E.wireframes || D.enableSleeping && E.showSleeping ? t.bodies(v, B, F) : (E.showConvexHulls && t.bodyConvexHulls(v, B, F),
                    t.bodyWireframes(v, B, F)),
                    E.showBounds && t.bodyBounds(v, B, F),
                    (E.showAxes || E.showAngleIndicator) && t.bodyAxes(v, B, F),
                    E.showPositions && t.bodyPositions(v, B, F),
                    E.showVelocity && t.bodyVelocity(v, B, F),
                    E.showIds && t.bodyIds(v, B, F),
                    E.showSeparations && t.separations(v, D.pairs.list, F),
                    E.showCollisions && t.collisions(v, D.pairs.list, F),
                    E.showVertexNumbers && t.vertexNumbers(v, B, F),
                    E.showMousePosition && t.mousePosition(v, v.mouse, F),
                    t.constraints(I, F),
                    E.hasBounds && t.endViewTransform(v),
                    f.trigger(v, "afterRender", M),
                    T.lastElapsed = o.now() - y
                }
                ,
                t.stats = function(v, _, y) {
                    for (var D = v.engine, w = D.world, S = s.allBodies(w), F = 0, E = 55, T = 44, k = 0, O = 0, R = 0; R < S.length; R += 1)
                        F += S[R].parts.length;
                    var B = {
                        Part: F,
                        Body: S.length,
                        Cons: s.allConstraints(w).length,
                        Comp: s.allComposites(w).length,
                        Pair: D.pairs.list.length
                    };
                    _.fillStyle = "#0e0f19",
                    _.fillRect(k, O, E * 5.5, T),
                    _.font = "12px Arial",
                    _.textBaseline = "top",
                    _.textAlign = "right";
                    for (var I in B) {
                        var V = B[I];
                        _.fillStyle = "#aaa",
                        _.fillText(I, k + E, O + 8),
                        _.fillStyle = "#eee",
                        _.fillText(V, k + E, O + 26),
                        k += E
                    }
                }
                ,
                t.performance = function(v, _) {
                    var y = v.engine
                      , D = v.timing
                      , w = D.deltaHistory
                      , S = D.elapsedHistory
                      , F = D.timestampElapsedHistory
                      , E = D.engineDeltaHistory
                      , T = D.engineElapsedHistory
                      , k = y.timing.lastDelta
                      , O = h(w)
                      , R = h(S)
                      , B = h(E)
                      , I = h(T)
                      , V = h(F)
                      , M = V / O || 0
                      , b = 1e3 / O || 0
                      , U = 4
                      , Z = 12
                      , oe = 60
                      , re = 34
                      , q = 10
                      , ee = 69;
                    _.fillStyle = "#0e0f19",
                    _.fillRect(0, 50, Z * 4 + oe * 5 + 22, re),
                    t.status(_, q, ee, oe, U, w.length, Math.round(b) + " fps", b / t._goodFps, function(ne) {
                        return w[ne] / O - 1
                    }),
                    t.status(_, q + Z + oe, ee, oe, U, E.length, k.toFixed(2) + " dt", t._goodDelta / k, function(ne) {
                        return E[ne] / B - 1
                    }),
                    t.status(_, q + (Z + oe) * 2, ee, oe, U, T.length, I.toFixed(2) + " ut", 1 - I / t._goodFps, function(ne) {
                        return T[ne] / I - 1
                    }),
                    t.status(_, q + (Z + oe) * 3, ee, oe, U, S.length, R.toFixed(2) + " rt", 1 - R / t._goodFps, function(ne) {
                        return S[ne] / R - 1
                    }),
                    t.status(_, q + (Z + oe) * 4, ee, oe, U, F.length, M.toFixed(2) + " x", M * M * M, function(ne) {
                        return (F[ne] / w[ne] / M || 0) - 1
                    })
                }
                ,
                t.status = function(v, _, y, D, w, S, F, E, T) {
                    v.strokeStyle = "#888",
                    v.fillStyle = "#444",
                    v.lineWidth = 1,
                    v.fillRect(_, y + 7, D, 1),
                    v.beginPath(),
                    v.moveTo(_, y + 7 - w * o.clamp(.4 * T(0), -2, 2));
                    for (var k = 0; k < D; k += 1)
                        v.lineTo(_ + k, y + 7 - (k < S ? w * o.clamp(.4 * T(k), -2, 2) : 0));
                    v.stroke(),
                    v.fillStyle = "hsl(" + o.clamp(25 + 95 * E, 0, 120) + ",100%,60%)",
                    v.fillRect(_, y - 7, 4, 4),
                    v.font = "12px Arial",
                    v.textBaseline = "middle",
                    v.textAlign = "right",
                    v.fillStyle = "#eee",
                    v.fillText(F, _ + D, y - 5)
                }
                ,
                t.constraints = function(v, _) {
                    for (var y = _, D = 0; D < v.length; D++) {
                        var w = v[D];
                        if (!(!w.render.visible || !w.pointA || !w.pointB)) {
                            var S = w.bodyA, F = w.bodyB, E, T;
                            if (S ? E = u.add(S.position, w.pointA) : E = w.pointA,
                            w.render.type === "pin")
                                y.beginPath(),
                                y.arc(E.x, E.y, 3, 0, 2 * Math.PI),
                                y.closePath();
                            else {
                                if (F ? T = u.add(F.position, w.pointB) : T = w.pointB,
                                y.beginPath(),
                                y.moveTo(E.x, E.y),
                                w.render.type === "spring")
                                    for (var k = u.sub(T, E), O = u.perp(u.normalise(k)), R = Math.ceil(o.clamp(w.length / 5, 12, 20)), B, I = 1; I < R; I += 1)
                                        B = I % 2 === 0 ? 1 : -1,
                                        y.lineTo(E.x + k.x * (I / R) + O.x * B * 4, E.y + k.y * (I / R) + O.y * B * 4);
                                y.lineTo(T.x, T.y)
                            }
                            w.render.lineWidth && (y.lineWidth = w.render.lineWidth,
                            y.strokeStyle = w.render.strokeStyle,
                            y.stroke()),
                            w.render.anchors && (y.fillStyle = w.render.strokeStyle,
                            y.beginPath(),
                            y.arc(E.x, E.y, 3, 0, 2 * Math.PI),
                            y.arc(T.x, T.y, 3, 0, 2 * Math.PI),
                            y.closePath(),
                            y.fill())
                        }
                    }
                }
                ,
                t.bodies = function(v, _, y) {
                    var D = y;
                    v.engine;
                    var w = v.options, S = w.showInternalEdges || !w.wireframes, F, E, T, k;
                    for (T = 0; T < _.length; T++)
                        if (F = _[T],
                        !!F.render.visible) {
                            for (k = F.parts.length > 1 ? 1 : 0; k < F.parts.length; k++)
                                if (E = F.parts[k],
                                !!E.render.visible) {
                                    if (w.showSleeping && F.isSleeping ? D.globalAlpha = .5 * E.render.opacity : E.render.opacity !== 1 && (D.globalAlpha = E.render.opacity),
                                    E.render.sprite && E.render.sprite.texture && !w.wireframes) {
                                        var O = E.render.sprite
                                          , R = P(v, O.texture);
                                        D.translate(E.position.x, E.position.y),
                                        D.rotate(E.angle),
                                        D.drawImage(R, R.width * -O.xOffset * O.xScale, R.height * -O.yOffset * O.yScale, R.width * O.xScale, R.height * O.yScale),
                                        D.rotate(-E.angle),
                                        D.translate(-E.position.x, -E.position.y)
                                    } else {
                                        if (E.circleRadius)
                                            D.beginPath(),
                                            D.arc(E.position.x, E.position.y, E.circleRadius, 0, 2 * Math.PI);
                                        else {
                                            D.beginPath(),
                                            D.moveTo(E.vertices[0].x, E.vertices[0].y);
                                            for (var B = 1; B < E.vertices.length; B++)
                                                !E.vertices[B - 1].isInternal || S ? D.lineTo(E.vertices[B].x, E.vertices[B].y) : D.moveTo(E.vertices[B].x, E.vertices[B].y),
                                                E.vertices[B].isInternal && !S && D.moveTo(E.vertices[(B + 1) % E.vertices.length].x, E.vertices[(B + 1) % E.vertices.length].y);
                                            D.lineTo(E.vertices[0].x, E.vertices[0].y),
                                            D.closePath()
                                        }
                                        w.wireframes ? (D.lineWidth = 1,
                                        D.strokeStyle = "#bbb",
                                        D.stroke()) : (D.fillStyle = E.render.fillStyle,
                                        E.render.lineWidth && (D.lineWidth = E.render.lineWidth,
                                        D.strokeStyle = E.render.strokeStyle,
                                        D.stroke()),
                                        D.fill())
                                    }
                                    D.globalAlpha = 1
                                }
                        }
                }
                ,
                t.bodyWireframes = function(v, _, y) {
                    var D = y, w = v.options.showInternalEdges, S, F, E, T, k;
                    for (D.beginPath(),
                    E = 0; E < _.length; E++)
                        if (S = _[E],
                        !!S.render.visible)
                            for (k = S.parts.length > 1 ? 1 : 0; k < S.parts.length; k++) {
                                for (F = S.parts[k],
                                D.moveTo(F.vertices[0].x, F.vertices[0].y),
                                T = 1; T < F.vertices.length; T++)
                                    !F.vertices[T - 1].isInternal || w ? D.lineTo(F.vertices[T].x, F.vertices[T].y) : D.moveTo(F.vertices[T].x, F.vertices[T].y),
                                    F.vertices[T].isInternal && !w && D.moveTo(F.vertices[(T + 1) % F.vertices.length].x, F.vertices[(T + 1) % F.vertices.length].y);
                                D.lineTo(F.vertices[0].x, F.vertices[0].y)
                            }
                    D.lineWidth = 1,
                    D.strokeStyle = "#bbb",
                    D.stroke()
                }
                ,
                t.bodyConvexHulls = function(v, _, y) {
                    var D = y, w, S, F;
                    for (D.beginPath(),
                    S = 0; S < _.length; S++)
                        if (w = _[S],
                        !(!w.render.visible || w.parts.length === 1)) {
                            for (D.moveTo(w.vertices[0].x, w.vertices[0].y),
                            F = 1; F < w.vertices.length; F++)
                                D.lineTo(w.vertices[F].x, w.vertices[F].y);
                            D.lineTo(w.vertices[0].x, w.vertices[0].y)
                        }
                    D.lineWidth = 1,
                    D.strokeStyle = "rgba(255,255,255,0.2)",
                    D.stroke()
                }
                ,
                t.vertexNumbers = function(v, _, y) {
                    var D = y, w, S, F;
                    for (w = 0; w < _.length; w++) {
                        var E = _[w].parts;
                        for (F = E.length > 1 ? 1 : 0; F < E.length; F++) {
                            var T = E[F];
                            for (S = 0; S < T.vertices.length; S++)
                                D.fillStyle = "rgba(255,255,255,0.2)",
                                D.fillText(w + "_" + S, T.position.x + (T.vertices[S].x - T.position.x) * .8, T.position.y + (T.vertices[S].y - T.position.y) * .8)
                        }
                    }
                }
                ,
                t.mousePosition = function(v, _, y) {
                    var D = y;
                    D.fillStyle = "rgba(255,255,255,0.8)",
                    D.fillText(_.position.x + "  " + _.position.y, _.position.x + 5, _.position.y - 5)
                }
                ,
                t.bodyBounds = function(v, _, y) {
                    var D = y;
                    v.engine;
                    var w = v.options;
                    D.beginPath();
                    for (var S = 0; S < _.length; S++) {
                        var F = _[S];
                        if (F.render.visible)
                            for (var E = _[S].parts, T = E.length > 1 ? 1 : 0; T < E.length; T++) {
                                var k = E[T];
                                D.rect(k.bounds.min.x, k.bounds.min.y, k.bounds.max.x - k.bounds.min.x, k.bounds.max.y - k.bounds.min.y)
                            }
                    }
                    w.wireframes ? D.strokeStyle = "rgba(255,255,255,0.08)" : D.strokeStyle = "rgba(0,0,0,0.1)",
                    D.lineWidth = 1,
                    D.stroke()
                }
                ,
                t.bodyAxes = function(v, _, y) {
                    var D = y;
                    v.engine;
                    var w = v.options, S, F, E, T;
                    for (D.beginPath(),
                    F = 0; F < _.length; F++) {
                        var k = _[F]
                          , O = k.parts;
                        if (!!k.render.visible)
                            if (w.showAxes)
                                for (E = O.length > 1 ? 1 : 0; E < O.length; E++)
                                    for (S = O[E],
                                    T = 0; T < S.axes.length; T++) {
                                        var R = S.axes[T];
                                        D.moveTo(S.position.x, S.position.y),
                                        D.lineTo(S.position.x + R.x * 20, S.position.y + R.y * 20)
                                    }
                            else
                                for (E = O.length > 1 ? 1 : 0; E < O.length; E++)
                                    for (S = O[E],
                                    T = 0; T < S.axes.length; T++)
                                        D.moveTo(S.position.x, S.position.y),
                                        D.lineTo((S.vertices[0].x + S.vertices[S.vertices.length - 1].x) / 2, (S.vertices[0].y + S.vertices[S.vertices.length - 1].y) / 2)
                    }
                    w.wireframes ? (D.strokeStyle = "indianred",
                    D.lineWidth = 1) : (D.strokeStyle = "rgba(255, 255, 255, 0.4)",
                    D.globalCompositeOperation = "overlay",
                    D.lineWidth = 2),
                    D.stroke(),
                    D.globalCompositeOperation = "source-over"
                }
                ,
                t.bodyPositions = function(v, _, y) {
                    var D = y;
                    v.engine;
                    var w = v.options, S, F, E, T;
                    for (D.beginPath(),
                    E = 0; E < _.length; E++)
                        if (S = _[E],
                        !!S.render.visible)
                            for (T = 0; T < S.parts.length; T++)
                                F = S.parts[T],
                                D.arc(F.position.x, F.position.y, 3, 0, 2 * Math.PI, !1),
                                D.closePath();
                    for (w.wireframes ? D.fillStyle = "indianred" : D.fillStyle = "rgba(0,0,0,0.5)",
                    D.fill(),
                    D.beginPath(),
                    E = 0; E < _.length; E++)
                        S = _[E],
                        S.render.visible && (D.arc(S.positionPrev.x, S.positionPrev.y, 2, 0, 2 * Math.PI, !1),
                        D.closePath());
                    D.fillStyle = "rgba(255,165,0,0.8)",
                    D.fill()
                }
                ,
                t.bodyVelocity = function(v, _, y) {
                    var D = y;
                    D.beginPath();
                    for (var w = 0; w < _.length; w++) {
                        var S = _[w];
                        !S.render.visible || (D.moveTo(S.position.x, S.position.y),
                        D.lineTo(S.position.x + (S.position.x - S.positionPrev.x) * 2, S.position.y + (S.position.y - S.positionPrev.y) * 2))
                    }
                    D.lineWidth = 3,
                    D.strokeStyle = "cornflowerblue",
                    D.stroke()
                }
                ,
                t.bodyIds = function(v, _, y) {
                    var D = y, w, S;
                    for (w = 0; w < _.length; w++)
                        if (!!_[w].render.visible) {
                            var F = _[w].parts;
                            for (S = F.length > 1 ? 1 : 0; S < F.length; S++) {
                                var E = F[S];
                                D.font = "12px Arial",
                                D.fillStyle = "rgba(255,255,255,0.5)",
                                D.fillText(E.id, E.position.x + 10, E.position.y - 10)
                            }
                        }
                }
                ,
                t.collisions = function(v, _, y) {
                    var D = y, w = v.options, S, F, E, T;
                    for (D.beginPath(),
                    E = 0; E < _.length; E++)
                        if (S = _[E],
                        !!S.isActive)
                            for (F = S.collision,
                            T = 0; T < S.activeContacts.length; T++) {
                                var k = S.activeContacts[T]
                                  , O = k.vertex;
                                D.rect(O.x - 1.5, O.y - 1.5, 3.5, 3.5)
                            }
                    for (w.wireframes ? D.fillStyle = "rgba(255,255,255,0.7)" : D.fillStyle = "orange",
                    D.fill(),
                    D.beginPath(),
                    E = 0; E < _.length; E++)
                        if (S = _[E],
                        !!S.isActive && (F = S.collision,
                        S.activeContacts.length > 0)) {
                            var R = S.activeContacts[0].vertex.x
                              , B = S.activeContacts[0].vertex.y;
                            S.activeContacts.length === 2 && (R = (S.activeContacts[0].vertex.x + S.activeContacts[1].vertex.x) / 2,
                            B = (S.activeContacts[0].vertex.y + S.activeContacts[1].vertex.y) / 2),
                            F.bodyB === F.supports[0].body || F.bodyA.isStatic === !0 ? D.moveTo(R - F.normal.x * 8, B - F.normal.y * 8) : D.moveTo(R + F.normal.x * 8, B + F.normal.y * 8),
                            D.lineTo(R, B)
                        }
                    w.wireframes ? D.strokeStyle = "rgba(255,165,0,0.7)" : D.strokeStyle = "orange",
                    D.lineWidth = 1,
                    D.stroke()
                }
                ,
                t.separations = function(v, _, y) {
                    var D = y, w = v.options, S, F, E, T, k;
                    for (D.beginPath(),
                    k = 0; k < _.length; k++)
                        if (S = _[k],
                        !!S.isActive) {
                            F = S.collision,
                            E = F.bodyA,
                            T = F.bodyB;
                            var O = 1;
                            !T.isStatic && !E.isStatic && (O = .5),
                            T.isStatic && (O = 0),
                            D.moveTo(T.position.x, T.position.y),
                            D.lineTo(T.position.x - F.penetration.x * O, T.position.y - F.penetration.y * O),
                            O = 1,
                            !T.isStatic && !E.isStatic && (O = .5),
                            E.isStatic && (O = 0),
                            D.moveTo(E.position.x, E.position.y),
                            D.lineTo(E.position.x + F.penetration.x * O, E.position.y + F.penetration.y * O)
                        }
                    w.wireframes ? D.strokeStyle = "rgba(255,165,0,0.5)" : D.strokeStyle = "orange",
                    D.stroke()
                }
                ,
                t.inspector = function(v, _) {
                    v.engine;
                    var y = v.selected, D = v.render, w = D.options, S;
                    if (w.hasBounds) {
                        var F = D.bounds.max.x - D.bounds.min.x
                          , E = D.bounds.max.y - D.bounds.min.y
                          , T = F / D.options.width
                          , k = E / D.options.height;
                        _.scale(1 / T, 1 / k),
                        _.translate(-D.bounds.min.x, -D.bounds.min.y)
                    }
                    for (var O = 0; O < y.length; O++) {
                        var R = y[O].data;
                        switch (_.translate(.5, .5),
                        _.lineWidth = 1,
                        _.strokeStyle = "rgba(255,165,0,0.9)",
                        _.setLineDash([1, 2]),
                        R.type) {
                        case "body":
                            S = R.bounds,
                            _.beginPath(),
                            _.rect(Math.floor(S.min.x - 3), Math.floor(S.min.y - 3), Math.floor(S.max.x - S.min.x + 6), Math.floor(S.max.y - S.min.y + 6)),
                            _.closePath(),
                            _.stroke();
                            break;
                        case "constraint":
                            var B = R.pointA;
                            R.bodyA && (B = R.pointB),
                            _.beginPath(),
                            _.arc(B.x, B.y, 10, 0, 2 * Math.PI),
                            _.closePath(),
                            _.stroke();
                            break
                        }
                        _.setLineDash([]),
                        _.translate(-.5, -.5)
                    }
                    v.selectStart !== null && (_.translate(.5, .5),
                    _.lineWidth = 1,
                    _.strokeStyle = "rgba(255,165,0,0.6)",
                    _.fillStyle = "rgba(255,165,0,0.1)",
                    S = v.selectBounds,
                    _.beginPath(),
                    _.rect(Math.floor(S.min.x), Math.floor(S.min.y), Math.floor(S.max.x - S.min.x), Math.floor(S.max.y - S.min.y)),
                    _.closePath(),
                    _.stroke(),
                    _.fill(),
                    _.translate(-.5, -.5)),
                    w.hasBounds && _.setTransform(1, 0, 0, 1, 0, 0)
                }
                ;
                var d = function(v, _) {
                    var y = v.engine
                      , D = v.timing
                      , w = D.historySize
                      , S = y.timing.timestamp;
                    D.delta = _ - D.lastTime || t._goodDelta,
                    D.lastTime = _,
                    D.timestampElapsed = S - D.lastTimestamp || 0,
                    D.lastTimestamp = S,
                    D.deltaHistory.unshift(D.delta),
                    D.deltaHistory.length = Math.min(D.deltaHistory.length, w),
                    D.engineDeltaHistory.unshift(y.timing.lastDelta),
                    D.engineDeltaHistory.length = Math.min(D.engineDeltaHistory.length, w),
                    D.timestampElapsedHistory.unshift(D.timestampElapsed),
                    D.timestampElapsedHistory.length = Math.min(D.timestampElapsedHistory.length, w),
                    D.engineElapsedHistory.unshift(y.timing.lastElapsed),
                    D.engineElapsedHistory.length = Math.min(D.engineElapsedHistory.length, w),
                    D.elapsedHistory.unshift(D.lastElapsed),
                    D.elapsedHistory.length = Math.min(D.elapsedHistory.length, w)
                }
                  , h = function(v) {
                    for (var _ = 0, y = 0; y < v.length; y += 1)
                        _ += v[y];
                    return _ / v.length || 0
                }
                  , m = function(v, _) {
                    var y = document.createElement("canvas");
                    return y.width = v,
                    y.height = _,
                    y.oncontextmenu = function() {
                        return !1
                    }
                    ,
                    y.onselectstart = function() {
                        return !1
                    }
                    ,
                    y
                }
                  , x = function(v) {
                    var _ = v.getContext("2d")
                      , y = window.devicePixelRatio || 1
                      , D = _.webkitBackingStorePixelRatio || _.mozBackingStorePixelRatio || _.msBackingStorePixelRatio || _.oBackingStorePixelRatio || _.backingStorePixelRatio || 1;
                    return y / D
                }
                  , P = function(v, _) {
                    var y = v.textures[_];
                    return y || (y = v.textures[_] = new Image,
                    y.src = _,
                    y)
                }
                  , C = function(v, _) {
                    var y = _;
                    /(jpg|gif|png)$/.test(_) && (y = "url(" + _ + ")"),
                    v.canvas.style.background = y,
                    v.canvas.style.backgroundSize = "contain",
                    v.currentBackground = _
                }
            }
            )()
        }
        , function(r, i) {
            var n = {};
            r.exports = n,
            function() {
                n.create = function(t) {
                    return {
                        vertex: t,
                        normalImpulse: 0,
                        tangentImpulse: 0
                    }
                }
            }()
        }
        , function(r, i, n) {
            var t = {};
            r.exports = t;
            var o = n(7)
              , s = n(19)
              , l = n(14)
              , f = n(20)
              , u = n(4)
              , p = n(5)
              , c = n(10)
              , a = n(0)
              , d = n(6);
            (function() {
                t.create = function(h) {
                    h = h || {};
                    var m = {
                        positionIterations: 6,
                        velocityIterations: 4,
                        constraintIterations: 2,
                        enableSleeping: !1,
                        events: [],
                        plugin: {},
                        gravity: {
                            x: 0,
                            y: 1,
                            scale: .001
                        },
                        timing: {
                            timestamp: 0,
                            timeScale: 1,
                            lastDelta: 0,
                            lastElapsed: 0
                        }
                    }
                      , x = a.extend(m, h);
                    return x.world = h.world || p.create({
                        label: "World"
                    }),
                    x.pairs = h.pairs || f.create(),
                    x.detector = h.detector || l.create(),
                    x.grid = {
                        buckets: []
                    },
                    x.world.gravity = x.gravity,
                    x.broadphase = x.grid,
                    x.metrics = {},
                    x
                }
                ,
                t.update = function(h, m, x) {
                    var P = a.now();
                    m = m || 1e3 / 60,
                    x = x || 1;
                    var C = h.world, v = h.detector, _ = h.pairs, y = h.timing, D = y.timestamp, w;
                    y.timestamp += m * y.timeScale,
                    y.lastDelta = m * y.timeScale;
                    var S = {
                        timestamp: y.timestamp
                    };
                    u.trigger(h, "beforeUpdate", S);
                    var F = p.allBodies(C)
                      , E = p.allConstraints(C);
                    for (C.isModified && l.setBodies(v, F),
                    C.isModified && p.setModified(C, !1, !1, !0),
                    h.enableSleeping && o.update(F, y.timeScale),
                    t._bodiesApplyGravity(F, h.gravity),
                    t._bodiesUpdate(F, m, y.timeScale, x, C.bounds),
                    c.preSolveAll(F),
                    w = 0; w < h.constraintIterations; w++)
                        c.solveAll(E, y.timeScale);
                    c.postSolveAll(F),
                    v.pairs = h.pairs;
                    var T = l.collisions(v);
                    for (f.update(_, T, D),
                    h.enableSleeping && o.afterCollisions(_.list, y.timeScale),
                    _.collisionStart.length > 0 && u.trigger(h, "collisionStart", {
                        pairs: _.collisionStart
                    }),
                    s.preSolvePosition(_.list),
                    w = 0; w < h.positionIterations; w++)
                        s.solvePosition(_.list, y.timeScale);
                    for (s.postSolvePosition(F),
                    c.preSolveAll(F),
                    w = 0; w < h.constraintIterations; w++)
                        c.solveAll(E, y.timeScale);
                    for (c.postSolveAll(F),
                    s.preSolveVelocity(_.list),
                    w = 0; w < h.velocityIterations; w++)
                        s.solveVelocity(_.list, y.timeScale);
                    return _.collisionActive.length > 0 && u.trigger(h, "collisionActive", {
                        pairs: _.collisionActive
                    }),
                    _.collisionEnd.length > 0 && u.trigger(h, "collisionEnd", {
                        pairs: _.collisionEnd
                    }),
                    t._bodiesClearForces(F),
                    u.trigger(h, "afterUpdate", S),
                    h.timing.lastElapsed = a.now() - P,
                    h
                }
                ,
                t.merge = function(h, m) {
                    if (a.extend(h, m),
                    m.world) {
                        h.world = m.world,
                        t.clear(h);
                        for (var x = p.allBodies(h.world), P = 0; P < x.length; P++) {
                            var C = x[P];
                            o.set(C, !1),
                            C.id = a.nextId()
                        }
                    }
                }
                ,
                t.clear = function(h) {
                    f.clear(h.pairs),
                    l.clear(h.detector)
                }
                ,
                t._bodiesClearForces = function(h) {
                    for (var m = 0; m < h.length; m++) {
                        var x = h[m];
                        x.force.x = 0,
                        x.force.y = 0,
                        x.torque = 0
                    }
                }
                ,
                t._bodiesApplyGravity = function(h, m) {
                    var x = typeof m.scale < "u" ? m.scale : .001;
                    if (!(m.x === 0 && m.y === 0 || x === 0))
                        for (var P = 0; P < h.length; P++) {
                            var C = h[P];
                            C.isStatic || C.isSleeping || (C.force.y += C.mass * m.y * x,
                            C.force.x += C.mass * m.x * x)
                        }
                }
                ,
                t._bodiesUpdate = function(h, m, x, P, C) {
                    for (var v = 0; v < h.length; v++) {
                        var _ = h[v];
                        _.isStatic || _.isSleeping || d.update(_, m, x, P)
                    }
                }
            }
            )()
        }
        , function(r, i, n) {
            var t = {};
            r.exports = t;
            var o = n(3)
              , s = n(1);
            (function() {
                t._restingThresh = 4,
                t._restingThreshTangent = 6,
                t._positionDampen = .9,
                t._positionWarming = .8,
                t._frictionNormalMultiplier = 5,
                t.preSolvePosition = function(l) {
                    var f, u, p, c = l.length;
                    for (f = 0; f < c; f++)
                        u = l[f],
                        u.isActive && (p = u.activeContacts.length,
                        u.collision.parentA.totalContacts += p,
                        u.collision.parentB.totalContacts += p)
                }
                ,
                t.solvePosition = function(l, f) {
                    var u, p, c, a, d, h, m, x, P = t._positionDampen, C = l.length;
                    for (u = 0; u < C; u++)
                        p = l[u],
                        !(!p.isActive || p.isSensor) && (c = p.collision,
                        a = c.parentA,
                        d = c.parentB,
                        h = c.normal,
                        p.separation = h.x * (d.positionImpulse.x + c.penetration.x - a.positionImpulse.x) + h.y * (d.positionImpulse.y + c.penetration.y - a.positionImpulse.y));
                    for (u = 0; u < C; u++)
                        p = l[u],
                        !(!p.isActive || p.isSensor) && (c = p.collision,
                        a = c.parentA,
                        d = c.parentB,
                        h = c.normal,
                        x = (p.separation - p.slop) * f,
                        (a.isStatic || d.isStatic) && (x *= 2),
                        a.isStatic || a.isSleeping || (m = P / a.totalContacts,
                        a.positionImpulse.x += h.x * x * m,
                        a.positionImpulse.y += h.y * x * m),
                        d.isStatic || d.isSleeping || (m = P / d.totalContacts,
                        d.positionImpulse.x -= h.x * x * m,
                        d.positionImpulse.y -= h.y * x * m))
                }
                ,
                t.postSolvePosition = function(l) {
                    for (var f = t._positionWarming, u = l.length, p = o.translate, c = s.update, a = 0; a < u; a++) {
                        var d = l[a]
                          , h = d.positionImpulse
                          , m = h.x
                          , x = h.y
                          , P = d.velocity;
                        if (d.totalContacts = 0,
                        m !== 0 || x !== 0) {
                            for (var C = 0; C < d.parts.length; C++) {
                                var v = d.parts[C];
                                p(v.vertices, h),
                                c(v.bounds, v.vertices, P),
                                v.position.x += m,
                                v.position.y += x
                            }
                            d.positionPrev.x += m,
                            d.positionPrev.y += x,
                            m * P.x + x * P.y < 0 ? (h.x = 0,
                            h.y = 0) : (h.x *= f,
                            h.y *= f)
                        }
                    }
                }
                ,
                t.preSolveVelocity = function(l) {
                    var f = l.length, u, p;
                    for (u = 0; u < f; u++) {
                        var c = l[u];
                        if (!(!c.isActive || c.isSensor)) {
                            var a = c.activeContacts
                              , d = a.length
                              , h = c.collision
                              , m = h.parentA
                              , x = h.parentB
                              , P = h.normal
                              , C = h.tangent;
                            for (p = 0; p < d; p++) {
                                var v = a[p]
                                  , _ = v.vertex
                                  , y = v.normalImpulse
                                  , D = v.tangentImpulse;
                                if (y !== 0 || D !== 0) {
                                    var w = P.x * y + C.x * D
                                      , S = P.y * y + C.y * D;
                                    m.isStatic || m.isSleeping || (m.positionPrev.x += w * m.inverseMass,
                                    m.positionPrev.y += S * m.inverseMass,
                                    m.anglePrev += m.inverseInertia * ((_.x - m.position.x) * S - (_.y - m.position.y) * w)),
                                    x.isStatic || x.isSleeping || (x.positionPrev.x -= w * x.inverseMass,
                                    x.positionPrev.y -= S * x.inverseMass,
                                    x.anglePrev -= x.inverseInertia * ((_.x - x.position.x) * S - (_.y - x.position.y) * w))
                                }
                            }
                        }
                    }
                }
                ,
                t.solveVelocity = function(l, f) {
                    var u = f * f, p = t._restingThresh * u, c = t._frictionNormalMultiplier, a = t._restingThreshTangent * u, d = Number.MAX_VALUE, h = l.length, m, x, P, C;
                    for (P = 0; P < h; P++) {
                        var v = l[P];
                        if (!(!v.isActive || v.isSensor)) {
                            var _ = v.collision
                              , y = _.parentA
                              , D = _.parentB
                              , w = y.velocity
                              , S = D.velocity
                              , F = _.normal.x
                              , E = _.normal.y
                              , T = _.tangent.x
                              , k = _.tangent.y
                              , O = v.activeContacts
                              , R = O.length
                              , B = 1 / R
                              , I = y.inverseMass + D.inverseMass
                              , V = v.friction * v.frictionStatic * c * u;
                            for (w.x = y.position.x - y.positionPrev.x,
                            w.y = y.position.y - y.positionPrev.y,
                            S.x = D.position.x - D.positionPrev.x,
                            S.y = D.position.y - D.positionPrev.y,
                            y.angularVelocity = y.angle - y.anglePrev,
                            D.angularVelocity = D.angle - D.anglePrev,
                            C = 0; C < R; C++) {
                                var M = O[C]
                                  , b = M.vertex
                                  , U = b.x - y.position.x
                                  , Z = b.y - y.position.y
                                  , oe = b.x - D.position.x
                                  , re = b.y - D.position.y
                                  , q = w.x - Z * y.angularVelocity
                                  , ee = w.y + U * y.angularVelocity
                                  , ne = S.x - re * D.angularVelocity
                                  , He = S.y + oe * D.angularVelocity
                                  , Zt = q - ne
                                  , $e = ee - He
                                  , Oe = F * Zt + E * $e
                                  , J = T * Zt + k * $e
                                  , we = v.separation + Oe
                                  , N = Math.min(we, 1);
                                N = we < 0 ? 0 : N;
                                var L = N * V;
                                J > L || -J > L ? (x = J > 0 ? J : -J,
                                m = v.friction * (J > 0 ? 1 : -1) * u,
                                m < -x ? m = -x : m > x && (m = x)) : (m = J,
                                x = d);
                                var H = U * E - Z * F
                                  , A = oe * E - re * F
                                  , j = B / (I + y.inverseInertia * H * H + D.inverseInertia * A * A)
                                  , K = (1 + v.restitution) * Oe * j;
                                if (m *= j,
                                Oe * Oe > p && Oe < 0)
                                    M.normalImpulse = 0;
                                else {
                                    var _e = M.normalImpulse;
                                    M.normalImpulse += K,
                                    M.normalImpulse = Math.min(M.normalImpulse, 0),
                                    K = M.normalImpulse - _e
                                }
                                if (J * J > a)
                                    M.tangentImpulse = 0;
                                else {
                                    var ae = M.tangentImpulse;
                                    M.tangentImpulse += m,
                                    M.tangentImpulse < -x && (M.tangentImpulse = -x),
                                    M.tangentImpulse > x && (M.tangentImpulse = x),
                                    m = M.tangentImpulse - ae
                                }
                                var se = F * K + T * m
                                  , ge = E * K + k * m;
                                y.isStatic || y.isSleeping || (y.positionPrev.x += se * y.inverseMass,
                                y.positionPrev.y += ge * y.inverseMass,
                                y.anglePrev += (U * ge - Z * se) * y.inverseInertia),
                                D.isStatic || D.isSleeping || (D.positionPrev.x -= se * D.inverseMass,
                                D.positionPrev.y -= ge * D.inverseMass,
                                D.anglePrev -= (oe * ge - re * se) * D.inverseInertia)
                            }
                        }
                    }
                }
            }
            )()
        }
        , function(r, i, n) {
            var t = {};
            r.exports = t;
            var o = n(9)
              , s = n(0);
            (function() {
                t.create = function(l) {
                    return s.extend({
                        table: {},
                        list: [],
                        collisionStart: [],
                        collisionActive: [],
                        collisionEnd: []
                    }, l)
                }
                ,
                t.update = function(l, f, u) {
                    var p = l.list, c = p.length, a = l.table, d = f.length, h = l.collisionStart, m = l.collisionEnd, x = l.collisionActive, P, C, v, _;
                    for (h.length = 0,
                    m.length = 0,
                    x.length = 0,
                    _ = 0; _ < c; _++)
                        p[_].confirmedActive = !1;
                    for (_ = 0; _ < d; _++)
                        P = f[_],
                        v = P.pair,
                        v ? (v.isActive ? x.push(v) : h.push(v),
                        o.update(v, P, u),
                        v.confirmedActive = !0) : (v = o.create(P, u),
                        a[v.id] = v,
                        h.push(v),
                        p.push(v));
                    var y = [];
                    for (c = p.length,
                    _ = 0; _ < c; _++)
                        v = p[_],
                        v.confirmedActive || (o.setActive(v, !1, u),
                        m.push(v),
                        !v.collision.bodyA.isSleeping && !v.collision.bodyB.isSleeping && y.push(_));
                    for (_ = 0; _ < y.length; _++)
                        C = y[_] - _,
                        v = p[C],
                        p.splice(C, 1),
                        delete a[v.id]
                }
                ,
                t.clear = function(l) {
                    return l.table = {},
                    l.list.length = 0,
                    l.collisionStart.length = 0,
                    l.collisionActive.length = 0,
                    l.collisionEnd.length = 0,
                    l
                }
            }
            )()
        }
        , function(r, i, n) {
            var t = r.exports = n(22);
            t.Axes = n(11),
            t.Bodies = n(12),
            t.Body = n(6),
            t.Bounds = n(1),
            t.Collision = n(8),
            t.Common = n(0),
            t.Composite = n(5),
            t.Composites = n(23),
            t.Constraint = n(10),
            t.Contact = n(17),
            t.Detector = n(14),
            t.Engine = n(18),
            t.Events = n(4),
            t.Grid = n(24),
            t.Mouse = n(13),
            t.MouseConstraint = n(25),
            t.Pair = n(9),
            t.Pairs = n(20),
            t.Plugin = n(15),
            t.Query = n(26),
            t.Render = n(16),
            t.Resolver = n(19),
            t.Runner = n(27),
            t.SAT = n(28),
            t.Sleeping = n(7),
            t.Svg = n(29),
            t.Vector = n(2),
            t.Vertices = n(3),
            t.World = n(30),
            t.Engine.run = t.Runner.run,
            t.Common.deprecated(t.Engine, "run", "Engine.run \u27A4 use Matter.Runner.run(engine) instead")
        }
        , function(r, i, n) {
            var t = {};
            r.exports = t;
            var o = n(15)
              , s = n(0);
            (function() {
                t.name = "matter-js",
                t.version = "0.18.0",
                t.uses = [],
                t.used = [],
                t.use = function() {
                    o.use(t, Array.prototype.slice.call(arguments))
                }
                ,
                t.before = function(l, f) {
                    return l = l.replace(/^Matter./, ""),
                    s.chainPathBefore(t, l, f)
                }
                ,
                t.after = function(l, f) {
                    return l = l.replace(/^Matter./, ""),
                    s.chainPathAfter(t, l, f)
                }
            }
            )()
        }
        , function(r, i, n) {
            var t = {};
            r.exports = t;
            var o = n(5)
              , s = n(10)
              , l = n(0)
              , f = n(6)
              , u = n(12)
              , p = l.deprecated;
            (function() {
                t.stack = function(c, a, d, h, m, x, P) {
                    for (var C = o.create({
                        label: "Stack"
                    }), v = c, _ = a, y, D = 0, w = 0; w < h; w++) {
                        for (var S = 0, F = 0; F < d; F++) {
                            var E = P(v, _, F, w, y, D);
                            if (E) {
                                var T = E.bounds.max.y - E.bounds.min.y
                                  , k = E.bounds.max.x - E.bounds.min.x;
                                T > S && (S = T),
                                f.translate(E, {
                                    x: k * .5,
                                    y: T * .5
                                }),
                                v = E.bounds.max.x + m,
                                o.addBody(C, E),
                                y = E,
                                D += 1
                            } else
                                v += m
                        }
                        _ += S + x,
                        v = c
                    }
                    return C
                }
                ,
                t.chain = function(c, a, d, h, m, x) {
                    for (var P = c.bodies, C = 1; C < P.length; C++) {
                        var v = P[C - 1]
                          , _ = P[C]
                          , y = v.bounds.max.y - v.bounds.min.y
                          , D = v.bounds.max.x - v.bounds.min.x
                          , w = _.bounds.max.y - _.bounds.min.y
                          , S = _.bounds.max.x - _.bounds.min.x
                          , F = {
                            bodyA: v,
                            pointA: {
                                x: D * a,
                                y: y * d
                            },
                            bodyB: _,
                            pointB: {
                                x: S * h,
                                y: w * m
                            }
                        }
                          , E = l.extend(F, x);
                        o.addConstraint(c, s.create(E))
                    }
                    return c.label += " Chain",
                    c
                }
                ,
                t.mesh = function(c, a, d, h, m) {
                    var x = c.bodies, P, C, v, _, y;
                    for (P = 0; P < d; P++) {
                        for (C = 1; C < a; C++)
                            v = x[C - 1 + P * a],
                            _ = x[C + P * a],
                            o.addConstraint(c, s.create(l.extend({
                                bodyA: v,
                                bodyB: _
                            }, m)));
                        if (P > 0)
                            for (C = 0; C < a; C++)
                                v = x[C + (P - 1) * a],
                                _ = x[C + P * a],
                                o.addConstraint(c, s.create(l.extend({
                                    bodyA: v,
                                    bodyB: _
                                }, m))),
                                h && C > 0 && (y = x[C - 1 + (P - 1) * a],
                                o.addConstraint(c, s.create(l.extend({
                                    bodyA: y,
                                    bodyB: _
                                }, m)))),
                                h && C < a - 1 && (y = x[C + 1 + (P - 1) * a],
                                o.addConstraint(c, s.create(l.extend({
                                    bodyA: y,
                                    bodyB: _
                                }, m))))
                    }
                    return c.label += " Mesh",
                    c
                }
                ,
                t.pyramid = function(c, a, d, h, m, x, P) {
                    return t.stack(c, a, d, h, m, x, function(C, v, _, y, D, w) {
                        var S = Math.min(h, Math.ceil(d / 2))
                          , F = D ? D.bounds.max.x - D.bounds.min.x : 0;
                        if (!(y > S)) {
                            y = S - y;
                            var E = y
                              , T = d - 1 - y;
                            if (!(_ < E || _ > T)) {
                                w === 1 && f.translate(D, {
                                    x: (_ + (d % 2 === 1 ? 1 : -1)) * F,
                                    y: 0
                                });
                                var k = D ? _ * F : 0;
                                return P(c + k + _ * m, v, _, y, D, w)
                            }
                        }
                    })
                }
                ,
                t.newtonsCradle = function(c, a, d, h, m) {
                    for (var x = o.create({
                        label: "Newtons Cradle"
                    }), P = 0; P < d; P++) {
                        var C = 1.9
                          , v = u.circle(c + P * (h * C), a + m, h, {
                            inertia: 1 / 0,
                            restitution: 1,
                            friction: 0,
                            frictionAir: 1e-4,
                            slop: 1
                        })
                          , _ = s.create({
                            pointA: {
                                x: c + P * (h * C),
                                y: a
                            },
                            bodyB: v
                        });
                        o.addBody(x, v),
                        o.addConstraint(x, _)
                    }
                    return x
                }
                ,
                p(t, "newtonsCradle", "Composites.newtonsCradle \u27A4 moved to newtonsCradle example"),
                t.car = function(c, a, d, h, m) {
                    var x = f.nextGroup(!0)
                      , P = 20
                      , C = -d * .5 + P
                      , v = d * .5 - P
                      , _ = 0
                      , y = o.create({
                        label: "Car"
                    })
                      , D = u.rectangle(c, a, d, h, {
                        collisionFilter: {
                            group: x
                        },
                        chamfer: {
                            radius: h * .5
                        },
                        density: 2e-4
                    })
                      , w = u.circle(c + C, a + _, m, {
                        collisionFilter: {
                            group: x
                        },
                        friction: .8
                    })
                      , S = u.circle(c + v, a + _, m, {
                        collisionFilter: {
                            group: x
                        },
                        friction: .8
                    })
                      , F = s.create({
                        bodyB: D,
                        pointB: {
                            x: C,
                            y: _
                        },
                        bodyA: w,
                        stiffness: 1,
                        length: 0
                    })
                      , E = s.create({
                        bodyB: D,
                        pointB: {
                            x: v,
                            y: _
                        },
                        bodyA: S,
                        stiffness: 1,
                        length: 0
                    });
                    return o.addBody(y, D),
                    o.addBody(y, w),
                    o.addBody(y, S),
                    o.addConstraint(y, F),
                    o.addConstraint(y, E),
                    y
                }
                ,
                p(t, "car", "Composites.car \u27A4 moved to car example"),
                t.softBody = function(c, a, d, h, m, x, P, C, v, _) {
                    v = l.extend({
                        inertia: 1 / 0
                    }, v),
                    _ = l.extend({
                        stiffness: .2,
                        render: {
                            type: "line",
                            anchors: !1
                        }
                    }, _);
                    var y = t.stack(c, a, d, h, m, x, function(D, w) {
                        return u.circle(D, w, C, v)
                    });
                    return t.mesh(y, d, h, P, _),
                    y.label = "Soft Body",
                    y
                }
                ,
                p(t, "softBody", "Composites.softBody \u27A4 moved to softBody and cloth examples")
            }
            )()
        }
        , function(r, i, n) {
            var t = {};
            r.exports = t;
            var o = n(9)
              , s = n(0)
              , l = s.deprecated;
            (function() {
                t.create = function(f) {
                    var u = {
                        buckets: {},
                        pairs: {},
                        pairsList: [],
                        bucketWidth: 48,
                        bucketHeight: 48
                    };
                    return s.extend(u, f)
                }
                ,
                t.update = function(f, u, p, c) {
                    var a, d, h, m = p.world, x = f.buckets, P, C, v = !1;
                    for (a = 0; a < u.length; a++) {
                        var _ = u[a];
                        if (!(_.isSleeping && !c) && !(m.bounds && (_.bounds.max.x < m.bounds.min.x || _.bounds.min.x > m.bounds.max.x || _.bounds.max.y < m.bounds.min.y || _.bounds.min.y > m.bounds.max.y))) {
                            var y = t._getRegion(f, _);
                            if (!_.region || y.id !== _.region.id || c) {
                                (!_.region || c) && (_.region = y);
                                var D = t._regionUnion(y, _.region);
                                for (d = D.startCol; d <= D.endCol; d++)
                                    for (h = D.startRow; h <= D.endRow; h++) {
                                        C = t._getBucketId(d, h),
                                        P = x[C];
                                        var w = d >= y.startCol && d <= y.endCol && h >= y.startRow && h <= y.endRow
                                          , S = d >= _.region.startCol && d <= _.region.endCol && h >= _.region.startRow && h <= _.region.endRow;
                                        !w && S && S && P && t._bucketRemoveBody(f, P, _),
                                        (_.region === y || w && !S || c) && (P || (P = t._createBucket(x, C)),
                                        t._bucketAddBody(f, P, _))
                                    }
                                _.region = y,
                                v = !0
                            }
                        }
                    }
                    v && (f.pairsList = t._createActivePairsList(f))
                }
                ,
                l(t, "update", "Grid.update \u27A4 replaced by Matter.Detector"),
                t.clear = function(f) {
                    f.buckets = {},
                    f.pairs = {},
                    f.pairsList = []
                }
                ,
                l(t, "clear", "Grid.clear \u27A4 replaced by Matter.Detector"),
                t._regionUnion = function(f, u) {
                    var p = Math.min(f.startCol, u.startCol)
                      , c = Math.max(f.endCol, u.endCol)
                      , a = Math.min(f.startRow, u.startRow)
                      , d = Math.max(f.endRow, u.endRow);
                    return t._createRegion(p, c, a, d)
                }
                ,
                t._getRegion = function(f, u) {
                    var p = u.bounds
                      , c = Math.floor(p.min.x / f.bucketWidth)
                      , a = Math.floor(p.max.x / f.bucketWidth)
                      , d = Math.floor(p.min.y / f.bucketHeight)
                      , h = Math.floor(p.max.y / f.bucketHeight);
                    return t._createRegion(c, a, d, h)
                }
                ,
                t._createRegion = function(f, u, p, c) {
                    return {
                        id: f + "," + u + "," + p + "," + c,
                        startCol: f,
                        endCol: u,
                        startRow: p,
                        endRow: c
                    }
                }
                ,
                t._getBucketId = function(f, u) {
                    return "C" + f + "R" + u
                }
                ,
                t._createBucket = function(f, u) {
                    var p = f[u] = [];
                    return p
                }
                ,
                t._bucketAddBody = function(f, u, p) {
                    var c = f.pairs, a = o.id, d = u.length, h;
                    for (h = 0; h < d; h++) {
                        var m = u[h];
                        if (!(p.id === m.id || p.isStatic && m.isStatic)) {
                            var x = a(p, m)
                              , P = c[x];
                            P ? P[2] += 1 : c[x] = [p, m, 1]
                        }
                    }
                    u.push(p)
                }
                ,
                t._bucketRemoveBody = function(f, u, p) {
                    var c = f.pairs, a = o.id, d;
                    u.splice(s.indexOf(u, p), 1);
                    var h = u.length;
                    for (d = 0; d < h; d++) {
                        var m = c[a(p, u[d])];
                        m && (m[2] -= 1)
                    }
                }
                ,
                t._createActivePairsList = function(f) {
                    var u, p = f.pairs, c = s.keys(p), a = c.length, d = [], h;
                    for (h = 0; h < a; h++)
                        u = p[c[h]],
                        u[2] > 0 ? d.push(u) : delete p[c[h]];
                    return d
                }
            }
            )()
        }
        , function(r, i, n) {
            var t = {};
            r.exports = t;
            var o = n(3)
              , s = n(7)
              , l = n(13)
              , f = n(4)
              , u = n(14)
              , p = n(10)
              , c = n(5)
              , a = n(0)
              , d = n(1);
            (function() {
                t.create = function(h, m) {
                    var x = (h ? h.mouse : null) || (m ? m.mouse : null);
                    x || (h && h.render && h.render.canvas ? x = l.create(h.render.canvas) : m && m.element ? x = l.create(m.element) : (x = l.create(),
                    a.warn("MouseConstraint.create: options.mouse was undefined, options.element was undefined, may not function as expected")));
                    var P = p.create({
                        label: "Mouse Constraint",
                        pointA: x.position,
                        pointB: {
                            x: 0,
                            y: 0
                        },
                        length: .01,
                        stiffness: .1,
                        angularStiffness: 1,
                        render: {
                            strokeStyle: "#90EE90",
                            lineWidth: 3
                        }
                    })
                      , C = {
                        type: "mouseConstraint",
                        mouse: x,
                        element: null,
                        body: null,
                        constraint: P,
                        collisionFilter: {
                            category: 1,
                            mask: 4294967295,
                            group: 0
                        }
                    }
                      , v = a.extend(C, m);
                    return f.on(h, "beforeUpdate", function() {
                        var _ = c.allBodies(h.world);
                        t.update(v, _),
                        t._triggerEvents(v)
                    }),
                    v
                }
                ,
                t.update = function(h, m) {
                    var x = h.mouse
                      , P = h.constraint
                      , C = h.body;
                    if (x.button === 0) {
                        if (P.bodyB)
                            s.set(P.bodyB, !1),
                            P.pointA = x.position;
                        else
                            for (var v = 0; v < m.length; v++)
                                if (C = m[v],
                                d.contains(C.bounds, x.position) && u.canCollide(C.collisionFilter, h.collisionFilter))
                                    for (var _ = C.parts.length > 1 ? 1 : 0; _ < C.parts.length; _++) {
                                        var y = C.parts[_];
                                        if (o.contains(y.vertices, x.position)) {
                                            P.pointA = x.position,
                                            P.bodyB = h.body = C,
                                            P.pointB = {
                                                x: x.position.x - C.position.x,
                                                y: x.position.y - C.position.y
                                            },
                                            P.angleB = C.angle,
                                            s.set(C, !1),
                                            f.trigger(h, "startdrag", {
                                                mouse: x,
                                                body: C
                                            });
                                            break
                                        }
                                    }
                    } else
                        P.bodyB = h.body = null,
                        P.pointB = null,
                        C && f.trigger(h, "enddrag", {
                            mouse: x,
                            body: C
                        })
                }
                ,
                t._triggerEvents = function(h) {
                    var m = h.mouse
                      , x = m.sourceEvents;
                    x.mousemove && f.trigger(h, "mousemove", {
                        mouse: m
                    }),
                    x.mousedown && f.trigger(h, "mousedown", {
                        mouse: m
                    }),
                    x.mouseup && f.trigger(h, "mouseup", {
                        mouse: m
                    }),
                    l.clearSourceEvents(m)
                }
            }
            )()
        }
        , function(r, i, n) {
            var t = {};
            r.exports = t;
            var o = n(2)
              , s = n(8)
              , l = n(1)
              , f = n(12)
              , u = n(3);
            (function() {
                t.collides = function(p, c) {
                    for (var a = [], d = c.length, h = p.bounds, m = s.collides, x = l.overlaps, P = 0; P < d; P++) {
                        var C = c[P]
                          , v = C.parts.length
                          , _ = v === 1 ? 0 : 1;
                        if (x(C.bounds, h))
                            for (var y = _; y < v; y++) {
                                var D = C.parts[y];
                                if (x(D.bounds, h)) {
                                    var w = m(D, p);
                                    if (w) {
                                        a.push(w);
                                        break
                                    }
                                }
                            }
                    }
                    return a
                }
                ,
                t.ray = function(p, c, a, d) {
                    d = d || 1e-100;
                    for (var h = o.angle(c, a), m = o.magnitude(o.sub(c, a)), x = (a.x + c.x) * .5, P = (a.y + c.y) * .5, C = f.rectangle(x, P, m, d, {
                        angle: h
                    }), v = t.collides(C, p), _ = 0; _ < v.length; _ += 1) {
                        var y = v[_];
                        y.body = y.bodyB = y.bodyA
                    }
                    return v
                }
                ,
                t.region = function(p, c, a) {
                    for (var d = [], h = 0; h < p.length; h++) {
                        var m = p[h]
                          , x = l.overlaps(m.bounds, c);
                        (x && !a || !x && a) && d.push(m)
                    }
                    return d
                }
                ,
                t.point = function(p, c) {
                    for (var a = [], d = 0; d < p.length; d++) {
                        var h = p[d];
                        if (l.contains(h.bounds, c))
                            for (var m = h.parts.length === 1 ? 0 : 1; m < h.parts.length; m++) {
                                var x = h.parts[m];
                                if (l.contains(x.bounds, c) && u.contains(x.vertices, c)) {
                                    a.push(h);
                                    break
                                }
                            }
                    }
                    return a
                }
            }
            )()
        }
        , function(r, i, n) {
            var t = {};
            r.exports = t;
            var o = n(4)
              , s = n(18)
              , l = n(0);
            (function() {
                var f, u;
                if (typeof window < "u" && (f = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.msRequestAnimationFrame,
                u = window.cancelAnimationFrame || window.mozCancelAnimationFrame || window.webkitCancelAnimationFrame || window.msCancelAnimationFrame),
                !f) {
                    var p;
                    f = function(c) {
                        p = setTimeout(function() {
                            c(l.now())
                        }, 1e3 / 60)
                    }
                    ,
                    u = function() {
                        clearTimeout(p)
                    }
                }
                t.create = function(c) {
                    var a = {
                        fps: 60,
                        correction: 1,
                        deltaSampleSize: 60,
                        counterTimestamp: 0,
                        frameCounter: 0,
                        deltaHistory: [],
                        timePrev: null,
                        timeScalePrev: 1,
                        frameRequestId: null,
                        isFixed: !1,
                        enabled: !0
                    }
                      , d = l.extend(a, c);
                    return d.delta = d.delta || 1e3 / d.fps,
                    d.deltaMin = d.deltaMin || 1e3 / d.fps,
                    d.deltaMax = d.deltaMax || 1e3 / (d.fps * .5),
                    d.fps = 1e3 / d.delta,
                    d
                }
                ,
                t.run = function(c, a) {
                    return typeof c.positionIterations < "u" && (a = c,
                    c = t.create()),
                    function d(h) {
                        c.frameRequestId = f(d),
                        h && c.enabled && t.tick(c, a, h)
                    }(),
                    c
                }
                ,
                t.tick = function(c, a, d) {
                    var h = a.timing, m = 1, x, P = {
                        timestamp: h.timestamp
                    };
                    o.trigger(c, "beforeTick", P),
                    c.isFixed ? x = c.delta : (x = d - c.timePrev || c.delta,
                    c.timePrev = d,
                    c.deltaHistory.push(x),
                    c.deltaHistory = c.deltaHistory.slice(-c.deltaSampleSize),
                    x = Math.min.apply(null, c.deltaHistory),
                    x = x < c.deltaMin ? c.deltaMin : x,
                    x = x > c.deltaMax ? c.deltaMax : x,
                    m = x / c.delta,
                    c.delta = x),
                    c.timeScalePrev !== 0 && (m *= h.timeScale / c.timeScalePrev),
                    h.timeScale === 0 && (m = 0),
                    c.timeScalePrev = h.timeScale,
                    c.correction = m,
                    c.frameCounter += 1,
                    d - c.counterTimestamp >= 1e3 && (c.fps = c.frameCounter * ((d - c.counterTimestamp) / 1e3),
                    c.counterTimestamp = d,
                    c.frameCounter = 0),
                    o.trigger(c, "tick", P),
                    o.trigger(c, "beforeUpdate", P),
                    s.update(a, x, m),
                    o.trigger(c, "afterUpdate", P),
                    o.trigger(c, "afterTick", P)
                }
                ,
                t.stop = function(c) {
                    u(c.frameRequestId)
                }
                ,
                t.start = function(c, a) {
                    t.run(c, a)
                }
            }
            )()
        }
        , function(r, i, n) {
            var t = {};
            r.exports = t;
            var o = n(8)
              , s = n(0)
              , l = s.deprecated;
            (function() {
                t.collides = function(f, u) {
                    return o.collides(f, u)
                }
                ,
                l(t, "collides", "SAT.collides \u27A4 replaced by Collision.collides")
            }
            )()
        }
        , function(r, i, n) {
            var t = {};
            r.exports = t,
            n(1);
            var o = n(0);
            (function() {
                t.pathToVertices = function(s, l) {
                    typeof window < "u" && !("SVGPathSeg"in window) && o.warn("Svg.pathToVertices: SVGPathSeg not defined, a polyfill is required.");
                    var f, u, p, c, a, d, h, m, x, P, C = [], v, _, y = 0, D = 0, w = 0;
                    l = l || 15;
                    var S = function(E, T, k) {
                        var O = k % 2 === 1 && k > 1;
                        if (!x || E != x.x || T != x.y) {
                            x && O ? (v = x.x,
                            _ = x.y) : (v = 0,
                            _ = 0);
                            var R = {
                                x: v + E,
                                y: _ + T
                            };
                            (O || !x) && (x = R),
                            C.push(R),
                            D = v + E,
                            w = _ + T
                        }
                    }
                      , F = function(E) {
                        var T = E.pathSegTypeAsLetter.toUpperCase();
                        if (T !== "Z") {
                            switch (T) {
                            case "M":
                            case "L":
                            case "T":
                            case "C":
                            case "S":
                            case "Q":
                                D = E.x,
                                w = E.y;
                                break;
                            case "H":
                                D = E.x;
                                break;
                            case "V":
                                w = E.y;
                                break
                            }
                            S(D, w, E.pathSegType)
                        }
                    };
                    for (t._svgPathToAbsolute(s),
                    p = s.getTotalLength(),
                    d = [],
                    f = 0; f < s.pathSegList.numberOfItems; f += 1)
                        d.push(s.pathSegList.getItem(f));
                    for (h = d.concat(); y < p; ) {
                        if (P = s.getPathSegAtLength(y),
                        a = d[P],
                        a != m) {
                            for (; h.length && h[0] != a; )
                                F(h.shift());
                            m = a
                        }
                        switch (a.pathSegTypeAsLetter.toUpperCase()) {
                        case "C":
                        case "T":
                        case "S":
                        case "Q":
                        case "A":
                            c = s.getPointAtLength(y),
                            S(c.x, c.y, 0);
                            break
                        }
                        y += l
                    }
                    for (f = 0,
                    u = h.length; f < u; ++f)
                        F(h[f]);
                    return C
                }
                ,
                t._svgPathToAbsolute = function(s) {
                    for (var l, f, u, p, c, a, d = s.pathSegList, h = 0, m = 0, x = d.numberOfItems, P = 0; P < x; ++P) {
                        var C = d.getItem(P)
                          , v = C.pathSegTypeAsLetter;
                        if (/[MLHVCSQTA]/.test(v))
                            "x"in C && (h = C.x),
                            "y"in C && (m = C.y);
                        else
                            switch ("x1"in C && (u = h + C.x1),
                            "x2"in C && (c = h + C.x2),
                            "y1"in C && (p = m + C.y1),
                            "y2"in C && (a = m + C.y2),
                            "x"in C && (h += C.x),
                            "y"in C && (m += C.y),
                            v) {
                            case "m":
                                d.replaceItem(s.createSVGPathSegMovetoAbs(h, m), P);
                                break;
                            case "l":
                                d.replaceItem(s.createSVGPathSegLinetoAbs(h, m), P);
                                break;
                            case "h":
                                d.replaceItem(s.createSVGPathSegLinetoHorizontalAbs(h), P);
                                break;
                            case "v":
                                d.replaceItem(s.createSVGPathSegLinetoVerticalAbs(m), P);
                                break;
                            case "c":
                                d.replaceItem(s.createSVGPathSegCurvetoCubicAbs(h, m, u, p, c, a), P);
                                break;
                            case "s":
                                d.replaceItem(s.createSVGPathSegCurvetoCubicSmoothAbs(h, m, c, a), P);
                                break;
                            case "q":
                                d.replaceItem(s.createSVGPathSegCurvetoQuadraticAbs(h, m, u, p), P);
                                break;
                            case "t":
                                d.replaceItem(s.createSVGPathSegCurvetoQuadraticSmoothAbs(h, m), P);
                                break;
                            case "a":
                                d.replaceItem(s.createSVGPathSegArcAbs(h, m, C.r1, C.r2, C.angle, C.largeArcFlag, C.sweepFlag), P);
                                break;
                            case "z":
                            case "Z":
                                h = l,
                                m = f;
                                break
                            }
                        (v == "M" || v == "m") && (l = h,
                        f = m)
                    }
                }
            }
            )()
        }
        , function(r, i, n) {
            var t = {};
            r.exports = t;
            var o = n(5);
            n(0),
            function() {
                t.create = o.create,
                t.add = o.add,
                t.remove = o.remove,
                t.clear = o.clear,
                t.addComposite = o.addComposite,
                t.addBody = o.addBody,
                t.addConstraint = o.addConstraint
            }()
        }
        ])
    })
}
)(tu);
const Xt = tc(tu.exports);
let Da, To, bo, $r, Yr, xa, Xr, _a, ya, pn, mr, sn, Oi;
new vi(".text-to-canvas h3",{
    type: "chars"
});
function Ao() {
    Da = Xt.Engine,
    To = Xt.Render,
    bo = Xt.Runner,
    $r = Xt.Composite,
    Yr = Xt.Composites,
    xa = Xt.MouseConstraint,
    Xr = Xt.Common,
    _a = Xt.Mouse,
    Xt.World,
    ya = Xt.Body,
    pn = Xt.Bodies,
    mr = Da.create(),
    sn = mr.world,
    Oi = To.create({
        element: document.querySelector("#canvas"),
        engine: mr,
        options: {
            background: "transparent",
            wireframes: !1,
            width: innerWidth,
            height: innerHeight
        }
    }),
    sn.gravity.y = 0;
    const g = {
        isStatic: !0,
        render: {
            fillStyle: "transparent"
        }
    };
    let e = pn.rectangle(innerWidth * .5, 0, innerWidth, 20, {
        ...g
    })
      , r = pn.rectangle(innerWidth * .5, innerHeight, innerWidth, 20, {
        ...g
    })
      , i = pn.rectangle(0, innerHeight * .5, 20, innerHeight, {
        ...g
    })
      , n = pn.rectangle(innerWidth, innerHeight * .5, 20, innerHeight, {
        ...g
    });
    $r.add(sn, [e, r, i, n]);
    const t = {
        friction: .5,
        restitution: .8,
        density: 1,
        render: {
            opacity: 0
        }
    }
      , s = document.querySelector(".award").querySelectorAll("div");
    let l = Yr.stack(innerWidth * .4, 120, s.length, 1, 0, 0, (D,w,S)=>pn.rectangle(D, w, s[S].offsetWidth, s[S].offsetHeight, {
        ...t
    }));
    const u = document.querySelector(".winning").querySelectorAll("div");
    let p = Yr.stack(innerWidth * .4, 270, u.length, 1, 0, 0, (D,w,S)=>pn.rectangle(D, w, u[S].offsetWidth, u[S].offsetHeight, {
        ...t
    }));
    const a = document.querySelector(".create").querySelectorAll("div");
    let d = Yr.stack(innerWidth * .4, 420, a.length, 1, 0, 0, (D,w,S)=>pn.rectangle(D, w, a[S].offsetWidth, a[S].offsetHeight, {
        ...t
    }));
    const m = document.querySelector(".team").querySelectorAll("div");
    let x = Yr.stack(innerWidth * .4, 570, m.length, 1, 0, 0, (D,w,S)=>pn.rectangle(D, w, m[S].offsetWidth, m[S].offsetHeight, {
        ...t
    }));
    $r.add(sn, [l, p, d, x]),
    To.run(Oi);
    var P = bo.create();
    bo.run(P, mr);
    var C = _a.create(Oi.canvas)
      , v = xa.create(mr, {
        mouse: C,
        constraint: {
            stiffness: .2,
            render: {
                visible: !1
            }
        }
    });
    $r.add(sn, v),
    Oi.mouse = C;
    function _() {
        console.log("updating"),
        s.forEach((D,w)=>{
            D.style.transform = `translate(
        ${l.bodies[w].position.x - D.offsetWidth * .5}px,
        ${l.bodies[w].position.y - D.offsetHeight * .5}px)rotate(
        ${l.bodies[w].angle}rad)`
        }
        ),
        u.forEach((D,w)=>{
            D.style.transform = `translate(
        ${p.bodies[w].position.x - D.offsetWidth * .5}px,
        ${p.bodies[w].position.y - D.offsetHeight * .5}px)rotate(
        ${p.bodies[w].angle}rad)`
        }
        ),
        a.forEach((D,w)=>{
            D.style.transform = `translate(
        ${d.bodies[w].position.x - D.offsetWidth * .5}px,
        ${d.bodies[w].position.y - D.offsetHeight * .5}px)rotate(
        ${d.bodies[w].angle}rad)`
        }
        ),
        m.forEach((D,w)=>{
            D.style.transform = `translate(
        ${x.bodies[w].position.x - D.offsetWidth * .5}px,
        ${x.bodies[w].position.y - D.offsetHeight * .5}px)rotate(
        ${x.bodies[w].angle}rad)`
        }
        ),
        Gt.isPaused && requestAnimationFrame(_)
    }
    _();
    var y = function(D) {
        for (var w = $r.allBodies(D.world), S = 0; S < w.length; S++) {
            var F = w[S];
            if (!F.isStatic && F.position.x <= 100) {
                var E = .01 * F.mass;
                ya.applyForce(F, F.position, {
                    x: (E + Xr.random() * E) * Xr.choose([1, -1]),
                    y: (E + Xr.random() * E) * Xr.choose([1, -1])
                })
            }
        }
    };
    return y
}

// portfolio
function nc() {
    W.matchMedia().add(Pn, e=>{
        let {isMobile, isTablet, isDesktop, reduceMotion} = e.conditions;
        if (reduceMotion) {
            if (isDesktop) {
                let o = document.querySelector("#portfolio .last").getBoundingClientRect().left
                  , s = W.timeline()
                    .to(".portfolio-intro-image", { scale: .2 })
                    .from(".portfolio-cover-center", { scale: .4 }, "-=0.3")
                    .from(".portfolio-cover-top", { duration: .2, opacity: 0, y: -50 }, "-=0.1")
                    .from(".portfolio-cover-bottom", { duration: .2, opacity: 0, y: 50 }, "<")
                    .from(".portfolio-cover-middle > svg:nth-child(1)", { duration: .2, opacity: 0, x: -50 }, "<")
                    .from(".portfolio-cover-middle > svg:nth-child(2)", { duration: .2, opacity: 0, x: 50 }, "<");
                W.timeline()
                    .from(".portfolio-horizontal", { xPercent: 100 })
                    .from(".portfolio-intro-image img", { scale: 1.4 }, 0)
                    .add(s)
                    .to("#portfolio .bigger", { scale: .46 }, "+=0.4")
                    .from(".p-section:nth-child(2) .portfolio-item", { xPercent: 50 }, "-=0.2")
                    .from(".portfolio-text-content", { autoAlpha: 0, y: 30 }, "-=0.1");
                let l = W.timeline()
                    .to(".portfolio-cover", { duration: 3, x: -(o - document.querySelector("#portfolio .last").offsetWidth) });
                $.create({
                    trigger: "#portfolio",
                    start: "top top",
                    end: "+=10000",
                    animation: l,
                    pin: !0,
                    onLeave: ()=>{
                        Gt.isPaused = !0,
                        Gt.stack = Ao()
                    }
                    ,
                    onEnterBack: ()=>{
                        Gt.isPaused = !1,
                        document.querySelectorAll("canvas").forEach(f=>{
                            f.remove()
                        }
                        )
                    }
                    ,
                    scrub: !0
                })
            }
            if (isTablet || isMobile) {
                document.querySelector("#portfolio .last").getBoundingClientRect().left;
                let o = W.timeline()
                    .to(".portfolio-intro-image", { scale: .2 })
                    .from(".portfolio-cover-center", { scale: .4 }, "-=0.3")
                    .from(".portfolio-cover-top", { duration: .2, opacity: 0, y: -50 }, "-=0.1")
                    .from(".portfolio-cover-bottom", { duration: .2, opacity: 0, y: 50 }, "<")
                    .from(".portfolio-cover-middle > svg:nth-child(1)", { duration: .2, opacity: 0, x: -50 }, "<")
                    .from(".portfolio-cover-middle > svg:nth-child(2)", { duration: .2, opacity: 0, x: 50 }, "<");
                W.timeline()
                    .from(".portfolio-horizontal", { xPercent: 100 })
                    .from(".portfolio-intro-image img", { scale: 1.4 }, 0)
                    .add(o)
                    .to("#portfolio .bigger", { scale: .65, height: "60vw" }, "+=0.4")
                    .from(".portfolio-text-content", { opacity: 0, duration: .1 })
                    .from(".p-section:nth-child(2) .portfolio-item", { yPercent: 200 }, "-=0.2")
                    .from(".p-section:nth-child(3) .portfolio-item", { yPercent: 200 }, "<");
                let s = W.timeline()
                    .to(".portfolio-text-content", { yPercent: -300 })
                    .to(".portfolio-cover", { duration: 3, y: -document.querySelector("#portfolio .last").offsetHeight * 3 }, "<");
                $.create({
                    trigger: "#portfolio",
                    start: "top top",
                    end: "+=10000",
                    animation: s,
                    pin: !0,
                    onLeave: ()=>{}
                    ,
                    onEnterBack: ()=>{}
                    ,
                    scrub: !0
                })
            }
        } else {
            if (isDesktop) {
                let o = document.querySelector("#portfolio .last").getBoundingClientRect().left
                  , s = W.timeline().to(".portfolio-intro-image", {
                    scale: .2
                }).from(".portfolio-cover-center", {
                    scale: .4
                }, "-=0.3").from(".portfolio-cover-top", {
                    duration: .2,
                    opacity: 0,
                    y: -50
                }, "-=0.1").from(".portfolio-cover-bottom", {
                    duration: .2,
                    opacity: 0,
                    y: 50
                }, "<").from(".portfolio-cover-middle > svg:nth-child(1)", {
                    duration: .2,
                    opacity: 0,
                    x: -50
                }, "<").from(".portfolio-cover-middle > svg:nth-child(2)", {
                    duration: .2,
                    opacity: 0,
                    x: 50
                }, "<")
                  , l = W.timeline().from(".portfolio-horizontal", {
                    xPercent: 100
                }).from(".portfolio-intro-image img", {
                    scale: 1.4
                }, 0).add(s).to("#portfolio .bigger", {
                    scale: .46
                }, "+=0.4").from(".p-section:nth-child(2) .portfolio-item", {
                    xPercent: 50
                }, "-=0.2").from(".portfolio-text-content", {
                    autoAlpha: 0,
                    y: 30
                }, "-=0.1").to(".portfolio-cover", {
                    duration: 3,
                    x: -(o - document.querySelector("#portfolio .last").offsetWidth)
                });
                $.create({
                    trigger: "#portfolio",
                    start: "top top",
                    end: "+=10000",
                    animation: l,
                    pin: !0,
                    onLeave: ()=>{
                        Gt.isPaused = !0,
                        Gt.stack = Ao()
                    }
                    ,
                    onEnterBack: ()=>{
                        Gt.isPaused = !1,
                        document.querySelectorAll("canvas").forEach(f=>{
                            f.remove()
                        }
                        )
                    }
                    ,
                    scrub: !0
                })
            }
            if (isTablet || isMobile) {
                document.querySelector("#portfolio .last").getBoundingClientRect().left;
                let o = W.timeline()
                    .to(".portfolio-intro-image", { scale: .2 })
                    .from(".portfolio-cover-center", { scale: .4 }, "-=0.3")
                    .from(".portfolio-cover-top", { duration: .2, opacity: 0, y: -50 }, "-=0.1")
                    .from(".portfolio-cover-bottom", { duration: .2, opacity: 0, y: 50 }, "<")
                    .from(".portfolio-cover-middle > svg:nth-child(1)", { duration: .2, opacity: 0, x: -50 }, "<")
                    .from(".portfolio-cover-middle > svg:nth-child(2)", { duration: .2, opacity: 0, x: 50 }, "<")
                  , s = W.timeline()
                    .from(".portfolio-horizontal", { xPercent: 100 })
                    .from(".portfolio-intro-image img", { scale: 1.4 }, 0)
                    .add(o)
                    .to("#portfolio .bigger", { scale: .65, height: "60vw" }, "+=0.4")
                    .from(".portfolio-text-content", { opacity: 0, duration: .1 })
                    .from(".p-section:nth-child(2) .portfolio-item", { yPercent: 200 }, "-=0.2")
                    .from(".p-section:nth-child(3) .portfolio-item", { yPercent: 200 }, "<")
                    .to(".portfolio-text-content", { yPercent: -300 })
                    .to(".portfolio-cover", { duration: 3, y: -document.querySelector("#portfolio .last").offsetHeight * 3 }, "<");
                $.create({
                    trigger: "#portfolio",
                    start: "top top",
                    end: "+=10000",
                    animation: s,
                    pin: !0,
                    onLeave: ()=>{
                        Gt.isPaused = !0,
                        Gt.stack = Ao()
                    },
                    onEnterBack: ()=>{
                        Gt.isPaused = !1,
                        document.querySelectorAll("canvas").forEach(l=>{
                            l.remove()
                        })
                    },
                    scrub: !0
                })
            }
        }
    }
    ),
    window.addEventListener("resize", Lr(W.matchMediaRefresh))
}

// letters
function rc() {
    W.matchMedia().add(Pn, e=>{
        let {isMobile: r, isTablet: i, isDesktop: n, reduceMotion} = e.conditions;
        if (reduceMotion) {
            W.set("#canvas", { display: "none" });
            let o = W.timeline()
                .from(".letters-screen", { opacity: 0, y: 50 })
                .to("#canvas", { xPercent: 100 })
                .from("#awards", { xPercent: -100 }, "<")
                .to("#awards .bg", { width: "100%" })
              , s = W.timeline()
                .to(".reduce-text", { autoAlpha: 1 })
                .from(".reduce-text > h3:nth-child(1)", { autoAlpha: 0, y: 30 })
                .from(".reduce-text > h3:nth-child(2)", { autoAlpha: 0, y: 30 })
                .from(".reduce-text > h3:nth-child(3)", { autoAlpha: 0, y: 30 })
                .from(".reduce-text > h3:nth-child(4)", { autoAlpha: 0, y: 30 })
                .add(o);
            $.create({
                trigger: "#letters",
                start: "top top",
                end: "+=3000",
                animation: s,
                pin: !0,
                scrub: !0
            })
        } else {
            W.set("#canvas", { display: "block" });

            let o = W.timeline()
                .from(".letters-screen", { opacity: 0, y: 50 })
                .to("#canvas", { xPercent: 100 })
                .from("#awards", { xPercent: -100 }, "<")
                .to("#awards .bg", { width: "100%" });
            
            $.create({
                trigger: "#letters",
                start: "top top",
                end: "+=3000",
                animation: o,
                pin: !0,
                onEnter: ()=>{
                    sn.gravity.y = 2
                },
                onUpdate: ({progress: s})=>{
                    s >= .3 ? (sn.gravity.y = 0,
                    sn.gravity.x = -5,
                    Gt.stack(mr)) : (sn.gravity.y = 2,
                    sn.gravity.x = 0)
                },
                scrub: !0
            })
        }
    }
    ),
    window.addEventListener("resize", Lr(W.matchMediaRefresh))
}

// elements
function ic() {
    for (let e = 0; e < 5; e++) {
        const r = `
      <div class="chars-row${e + 1}"></div>
    `;
        document.querySelector("#chars").insertAdjacentHTML("beforeend", r)
    }
    let g = [];
    for (let e = 0; e < 11; e++) {
        let r = `
  
    <div class="chars-item${e + 1}">
      <svg xmlns="http://www.w3.org/2000/svg" width="136.978px" height="191.953px" viewBox="0 0 136.978 191.953" enable-background="new 0 0 136.978 191.953" xml:space="preserve"> 
      <path d="M0,191.953V0h65.786c21.708,0,38.232,4.351,49.57,13.052s17.007,21.667,17.007,38.892c0,8.79-2.373,16.7-7.119,23.73 c-4.746,7.033-11.69,12.481-20.83,16.348c10.37,2.814,18.391,8.108,24.06,15.886s8.503,17.118,8.503,28.015 c0,18.018-5.78,31.861-17.336,41.528c-11.558,9.669-28.104,14.502-49.636,14.502H0z M33.354,80.815H66.05 c10.37,0,18.478-2.351,24.324-7.053c5.844-4.701,8.767-11.358,8.767-19.973c0-9.492-2.703-16.348-8.108-20.566 s-13.822-6.328-25.247-6.328H33.354V80.815z M33.354,105.337v59.985H70.4c10.458,0,18.632-2.591,24.521-7.778 c5.887-5.185,8.833-12.393,8.833-21.621c0-19.951-10.197-30.145-30.586-30.586H33.354z" data-svg-origin="68.4885025024414 95.97650146484375" style="transform-origin: 0px 0px;"></path> 
      </svg>
    </div>
`;
        g.push(r)
    }
    for (let e = 0; e < 5; e++)
        g.forEach((r,i)=>{
            document.querySelector(`.chars-row${e + 1}`).insertAdjacentHTML("beforeend", g[i])
        }
        )
}

// elements
function oc() {
    let g = W.matchMedia();
    ic(),
    g.add(Pn, e=>{
        let {isMobile: r, isTablet: i, isDesktop: n, reduceMotion} = e.conditions;
        if (reduceMotion) {
            let o = W.timeline({ defaults: { ease: "none" } })
                .to(".module-screen:nth-child(1)", { yPercent: -100 })
                .to(".module-screen:nth-child(1) .module-screen__wrapper", { yPercent: 100 }, "<")
                .to(".module-screen:nth-child(2)", { yPercent: -100 })
                .to(".module-screen:nth-child(2) .module-screen__wrapper", { yPercent: 100 }, "<")
                .to(".module-screen:nth-child(3)", { yPercent: -100 })
                .to(".module-screen:nth-child(3) .module-screen__wrapper", { yPercent: 100 }, "<")
                .to(".module-screen:nth-child(4)", { yPercent: -100 })
                .to(".module-screen:nth-child(4) .module-screen__wrapper", { yPercent: 100 }, "<")
                .to(".module-screen:nth-child(5)", { yPercent: -100 })
                .to(".module-screen:nth-child(5) .module-screen__wrapper", { yPercent: 100 }, "<")
              , s = W.timeline()
                .from(".elements-screen__bg", { scaleX: 0, ease: "none", duration: .3 })
                .from(".module-screen__text-content", { y: 30, opacity: 0, duration: .2})
                .set(".module-screen", { autoAlpha: 1 })
                .add(o, "<");
            W.set(".elements-col,.elements-horizontal-row", { display: "none" });
            let l = W.timeline();
            l.from(".elements-vertical-text-holder", { xPercent: 3, opacity: 0, duration: .2 })
                .to(".elements-vertical-text-holder", { opacity: 0, duration: .05 }, "+=1")
                .from(".layout-text-holder", { opacity: 0, duration: .2 })
                .to(".layout-text-holder", { opacity: 0, duration: .05 }, "+=1").add(s),
            $.create({
                trigger: "#elements",
                start: "top top",
                end: "+=15000",
                animation: l,
                pin: !0,
                scrub: !0
            })
        } else {
            W.set(".elements-col", { display: "block" }),
            W.set(".elements-horizontal-row", { display: "flex" });
            let o = W.timeline()
                .to(".-l, .-r", { y: "-650vh", duration: 2.5, ease: "none" })
              , s = W.timeline()
                .to(".-c", { y: "650vh", duration: 2.5, ease: "none" })
              , l = W.timeline({ defaults: { ease: "none" } })
                .to(".module-screen:nth-child(1)", { yPercent: -100 })
                .to(".module-screen:nth-child(1) .module-screen__wrapper", { yPercent: 100 }, "<")
                .to(".module-screen:nth-child(2)", { yPercent: -100 })
                .to(".module-screen:nth-child(2) .module-screen__wrapper", { yPercent: 100 }, "<")
                .to(".module-screen:nth-child(3)", { yPercent: -100 })
                .to(".module-screen:nth-child(3) .module-screen__wrapper", { yPercent: 100 }, "<")
                .to(".module-screen:nth-child(4)", { yPercent: -100 })
                .to(".module-screen:nth-child(4) .module-screen__wrapper", { yPercent: 100 }, "<")
                .to(".module-screen:nth-child(5)", { yPercent: -100 })
                .to(".module-screen:nth-child(5) .module-screen__wrapper", { yPercent: 100 }, "<")
              , f = W.timeline()
                .from(".elements-screen__bg", { scaleX: 0, ease: "none", duration: .3 })
                .from(".module-screen__text-content", { y: 30, opacity: 0, duration: .2 })
                .set(".module-screen", { autoAlpha: 1 })
                .add(s)
                .add(o, "<")
                .add(l, "<")
              , u = W.timeline()
                .to(".chars-row3 path", { x: 0, y: 0, rotation: 0, stagger: { amount: 1, from: 6 } })
                .to(".chars-row2 path", { x: 0, y: 0, rotation: 0, stagger: { amount: 1, from: 6 } }, .2)
                .to(".chars-row4 path", { x: 0, y: 0, rotation: 0, stagger: { amount: 1, from: 6 } }, .2)
                .to(".chars-row1 path", { x: 0, y: 0, rotation: 0, stagger: { amount: 1, from: 6 } }, .4)
                .to(".chars-row5 path", { x: 0, y: 0, rotation: 0, stagger: { amount: 1, from: 6 }}, .4)
              , p = W.timeline({ defaults: { scale: 0 } })
                .to(".chars-item1 svg", {})
                .to(".chars-item2 svg", {}, "-=0.3")
                .to(".chars-item3 svg", {}, "-=0.3")
                .to(".chars-item4 svg", {}, "-=0.3")
                .to(".chars-item5 svg", {}, "-=0.3")
                .to(".chars-item6 svg", {}, "-=0.3")
                .to(".chars-item7 svg", {}, "-=0.3")
                .to(".chars-item8 svg", {}, "-=0.3")
                .to(".chars-item9 svg", {}, "-=0.3")
                .to(".chars-item10 svg", {}, "-=0.3")
                .to(".chars-item11 svg", {}, "-=0.3")
              , c = W.timeline();
            c.from(".elements-vertical-text-holder", { xPercent: 3, opacity: 0, duration: .2 })
                .to(".elements-vertical-text-holder", { yPercent: 3, opacity: 0, duration: .05 })
                .fromTo(".elements-col:nth-child(odd)", { yPercent: -100 }, { yPercent: 100 }, "<")
                .fromTo(".elements-col:nth-child(even)", { yPercent: 100 }, { yPercent: -100 }, "<")
                .from(".layout-text-holder", { xPercent: 1, opacity: 0, duration: .2 }, "-=0.2")
                .to(".layout-text-holder", { yPercent: 1, opacity: 0, duration: .05 })
                .fromTo(".elements-horizontal-row:nth-child(odd)", { xPercent: -100 }, { xPercent: 100 }, "<")
                .fromTo(".elements-horizontal-row:nth-child(even)", { xPercent: 100 }, { xPercent: -100 }, "<")
                .add(f, "-=0.25")
                .add(u)
                .add(p),
            $.create({
                trigger: "#elements",
                start: "top top",
                end: "+=15000",
                animation: c,
                pin: !0,
                scrub: !0
            })
        }
    }
    ),
    window.addEventListener("resize", Lr(W.matchMediaRefresh))
}

// qode
function sc() {
    W.matchMedia().add(Pn, e=>{
        let {isMobile: r, isTablet: i, isDesktop: n, reduceMotion} = e.conditions;
        if (reduceMotion)
            W.timeline()
                .to("#text-path-0", { attr: { d: "M 125.2 268.9 C 183.2 249.7 263.6 253 345.9 268.9" } })
                .to(".qode_tagline", { transformOrigin: "50% 500%", rotation: -180 }, "-=0.3")
                .to(".qode_round_text svg", { rotation: -300, ease: "none" }, "<")
                .from(".qode_logo svg", { yPercent: 100, rotation: 360, scale: .9, duration: 1 }, "<")
                .to(".qode-text-holder", { yPercent: 0, opacity: 1 })
                .to("#line", { strokeDashoffset: 0, duration: 3 }),
            $.create({
                trigger: "#qode",
                start: "top top",
                end: "+=15000",
                pin: !0,
                scrub: !0
            });
        else {
            let o = W.timeline()
                .to("#text-path-0", { attr: { d: "M 125.2 268.9 C 183.2 249.7 263.6 253 345.9 268.9" } })
                .to(".qode_tagline", { transformOrigin: "50% 500%", rotation: -180 }, "-=0.3")
                .to(".qode_round_text svg", { rotation: -300, ease: "none" }, "<")
                .from(".qode_logo svg", { yPercent: 100, rotation: 360, scale: .9, duration: 1, }, "<")
                .to(".qode-text-holder", { yPercent: 0, opacity: 1 })
                .to("#line", { strokeDashoffset: 0, duration: 3 });
            $.create({
                trigger: "#qode",
                start: "top top",
                end: "+=15000",
                animation: o,
                pin: !0,
                scrub: !0
            })
        }
    }
    ),
    window.addEventListener("resize", Lr(W.matchMediaRefresh))
}

Zf();
Qf();   // intro
Jf();   // wall
jf();   // demo
ec();   // shop
nc();   // portfolio
rc();   // letters
oc();   // elements
sc();   // qode