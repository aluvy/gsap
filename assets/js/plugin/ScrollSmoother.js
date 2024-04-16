/* 
 해당 코드의 저작권은 GSAP에게 있으며 무료로 사용할 시 법적 처벌이 들어갈 수 있습니다.
*/


!(function (e, t) {
  'object' == typeof exports && 'undefined' != typeof module
    ? t(exports)
    : 'function' == typeof define && define.amd
    ? define(['exports'], t)
    : t(((e = e || self).window = e.window || {}));
})(this, function (e) {
  'use strict';
  function _defineProperties(e, t) {
    for (var r = 0; r < t.length; r++) {
      var n = t[r];
      (n.enumerable = n.enumerable || !1),
        (n.configurable = !0),
        'value' in n && (n.writable = !0),
        Object.defineProperty(e, n.key, n);
    }
  }
  function q() {
    return 'undefined' != typeof window;
  }
  function r() {
    return A || (q() && (A = window.gsap) && A.registerPlugin && A);
  }
  function u() {
    return String.fromCharCode.apply(null, arguments);
  }
  var A,
    O,
    z,
    B,
    F,
    L,
    N,
    K,
    U,
    W,
    J,
    j,
    D,
    i = 'ScrollSmoother',
    a = u(103, 114, 101, 101, 110, 115, 111, 99, 107, 46, 99, 111, 109),
    t =
      ((function (e) {
        var t = 'undefined' != typeof window,
          r =
            0 ===
              (t ? window.location.href : '').indexOf(
                u(102, 105, 108, 101, 58, 47, 47)
              ) ||
            -1 !== e.indexOf(u(108, 111, 99, 97, 108, 104, 111, 115, 116)) ||
            -1 !== e.indexOf(u(49, 50, 55, 46, 48, 32, 48, 46, 49)),
          n = [
            a,
            u(99, 111, 100, 101, 112, 101, 110, 46, 105, 111),
            u(
              99,
              111,
              100,
              101,
              112,
              101,
              110,
              46,
              112,
              108,
              117,
              109,
              98,
              105,
              110,
              103
            ),
            u(99, 111, 100, 101, 112, 101, 110, 46, 100, 101, 118),
            u(99, 111, 100, 101, 112, 101, 110, 46, 97, 112, 112),
            u(
              99,
              111,
              100,
              101,
              112,
              101,
              110,
              46,
              119,
              101,
              98,
              115,
              105,
              116,
              101
            ),
            u(112, 101, 110, 115, 46, 99, 108, 111, 117, 100),
            u(99, 115, 115, 45, 116, 114, 105, 99, 107, 115, 46, 99, 111, 109),
            u(99, 100, 112, 110, 46, 105, 111),
            u(112, 101, 110, 115, 46, 105, 111),
            u(103, 97, 110, 110, 111, 110, 46, 116, 118),
            u(99, 111, 100, 101, 99, 97, 110, 121, 111, 110, 46, 110, 101, 116),
            u(
              116,
              104,
              101,
              109,
              101,
              102,
              111,
              114,
              101,
              115,
              116,
              46,
              110,
              101,
              116
            ),
            u(99, 101, 114, 101, 98, 114, 97, 120, 46, 99, 111, 46, 117, 107),
            u(116, 121, 109, 112, 97, 110, 117, 115, 46, 110, 101, 116),
            u(116, 119, 101, 101, 110, 109, 97, 120, 46, 99, 111, 109),
            u(116, 119, 101, 101, 110, 108, 105, 116, 101, 46, 99, 111, 109),
            u(112, 108, 110, 107, 114, 46, 99, 111),
            u(104, 111, 116, 106, 97, 114, 46, 99, 111, 109),
            u(119, 101, 98, 112, 97, 99, 107, 98, 105, 110, 46, 99, 111, 109),
            u(97, 114, 99, 104, 105, 118, 101, 46, 111, 114, 103),
            u(99, 111, 100, 101, 115, 97, 110, 100, 98, 111, 120, 46, 105, 111),
            u(99, 115, 98, 46, 97, 112, 112),
            u(115, 116, 97, 99, 107, 98, 108, 105, 116, 122, 46, 99, 111, 109),
            u(115, 116, 97, 99, 107, 98, 108, 105, 116, 122, 46, 105, 111),
            u(99, 111, 100, 105, 101, 114, 46, 105, 111),
            u(
              109,
              111,
              116,
              105,
              111,
              110,
              116,
              114,
              105,
              99,
              107,
              115,
              46,
              99,
              111,
              109
            ),
            u(
              115,
              116,
              97,
              99,
              107,
              111,
              118,
              101,
              114,
              102,
              108,
              111,
              119,
              46,
              99,
              111,
              109
            ),
            u(
              115,
              116,
              97,
              99,
              107,
              101,
              120,
              99,
              104,
              97,
              110,
              103,
              101,
              46,
              99,
              111,
              109
            ),
            u(106, 115, 102, 105, 100, 100, 108, 101, 46, 110, 101, 116),
          ],
          o = n.length;

        if (-1 !== e.indexOf(n[o])) return;
        r;
      })('undefined' != typeof window ? window.location.host : ''),
      (ScrollSmoother.register = function register(e) {
        return (
          O ||
            ((A = e || r()),
            q() &&
              window.document &&
              ((z = window),
              (B = document),
              (F = B.documentElement),
              (L = B.body)),
            A &&
              ((N = A.utils.toArray),
              (K = A.utils.clamp),
              (J = A.parseEase('expo')),
              (U = A.core.globals().ScrollTrigger),
              A.core.globals('ScrollSmoother', ScrollSmoother),
              L &&
                U &&
                ((j = U.core._getVelocityProp),
                (D = U.core._inputObserver),
                (ScrollSmoother.refresh = U.refresh),
                (O = 1)))),
          O
        );
      }),
      (function _createClass(e, t, r) {
        return (
          t && _defineProperties(e.prototype, t),
          r && _defineProperties(e, r),
          e
        );
      })(ScrollSmoother, [
        {
          key: 'progress',
          get: function get() {
            return this.scrollTrigger
              ? this.scrollTrigger.animation._time / 100
              : 0;
          },
        },
      ]),
      ScrollSmoother);
  function ScrollSmoother(e) {
    var o = this;
    O ||
      ScrollSmoother.register(A) ||
      console.warn('Please gsap.registerPlugin(ScrollSmoother)'),
      (e = this.vars = e || {}),
      W && W.kill(),
      (W = this);
    function Ea() {
      return I.update(-C);
    }
    function Ga() {
      return (n.style.overflow = 'visible');
    }
    function Ia(e) {
      e.update();
      var t = e.getTween();
      t && (t.pause(), (t._time = t._dur), (t._tTime = t._tDur)),
        (h = !1),
        e.animation.progress(e.progress, !0);
    }
    function Ja(e, t) {
      ((e !== C && !u) || t) &&
        (P &&
          ((n.style.transform =
            'matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, ' + e + ', 0, 1)'),
          (n._gsap.y = e + 'px')),
        (R = e - C),
        (C = e),
        U.isUpdating || U.update());
    }
    function Ka(e) {
      return arguments.length
        ? (e < 0 && (e = 0),
          (M.y = -e),
          (h = !0),
          u ? (C = -e) : Ja(-e),
          k(e),
          this)
        : -C;
    }
    function Ma(e) {
      (v.scrollTop = 0),
        (e.target.contains && e.target.contains(v)) ||
          (b && !1 === b(o, e)) ||
          (U.isInViewport(e.target) ||
            e.target === d ||
            o.scrollTo(e.target, !1, 'center center'),
          (d = e.target));
    }
    function Na(e) {
      var r, n, o, i;
      w.forEach(function (t) {
        (r = t.pins),
          (i = t.markers),
          e.forEach(function (e) {
            t.trigger &&
              e.trigger &&
              t !== e &&
              (e.trigger === t.trigger ||
                e.pinnedContainer === t.trigger ||
                t.trigger.contains(e.trigger)) &&
              ((n = e.start),
              (o = (n - t.start - t.offset) / t.ratio - (n - t.start)),
              r.forEach(function (e) {
                return (o -= e.distance / t.ratio - e.distance);
              }),
              e.setPositions(n + o, e.end + o),
              e.markerStart &&
                i.push(A.quickSetter([e.markerStart, e.markerEnd], 'y', 'px')),
              e.pin &&
                0 < e.end &&
                ((o = e.end - e.start),
                r.push({ start: e.start, end: e.end, distance: o, trig: e }),
                t.setPositions(t.start, t.end + o),
                t.vars.onRefresh(t)));
          });
      });
    }
    function Oa() {
      Ga(),
        requestAnimationFrame(Ga),
        w &&
          (w.forEach(function (e) {
            var t = e.start,
              r = e.auto
                ? Math.min(U.maxScroll(e.scroller), e.end)
                : t + (e.end - t) / e.ratio,
              n = (r - e.end) / 2;
            (t -= n),
              (r -= n),
              (e.offset = n || 1e-4),
              (e.pins.length = 0),
              e.setPositions(Math.min(t, r), Math.max(t, r)),
              e.vars.onRefresh(e);
          }),
          Na(U.sort())),
        I.reset();
    }
    function Pa() {
      return U.addEventListener('refresh', Oa);
    }
    function Qa() {
      return (
        w &&
        w.forEach(function (e) {
          return e.vars.onRefresh(e);
        })
      );
    }
    function Ra() {
      return (
        w &&
          w.forEach(function (e) {
            return e.vars.onRefreshInit(e);
          }),
        Qa
      );
    }
    function Sa(t, r, n, o) {
      return function () {
        var e = 'function' == typeof r ? r(n, o) : r;
        return (
          e ||
            0 === e ||
            (e = o.getAttribute('data-' + E + t) || ('speed' === t ? 1 : 0)),
          o.setAttribute('data-' + E + t, e),
          'auto' === e ? e : parseFloat(e)
        );
      };
    }
    function Ta(r, e, t, n) {
      function Hb() {
        (e = a()),
          (t = f()),
          (o = parseFloat(e) || 1),
          (c = (s = 'auto' === e) ? 0 : 0.5),
          l && l.kill(),
          (l = t && A.to(r, { ease: J, overwrite: !1, y: '+=0', duration: t })),
          i && ((i.ratio = o), (i.autoSpeed = s));
      }
      function Ib() {
        (d.y = h + 'px'), d.renderTransform(1), Hb();
      }
      function Mb(e) {
        if (s) {
          Ib();
          var t = (function _autoDistance(e, t) {
            var r,
              n,
              o = e.parentNode || F,
              i = e.getBoundingClientRect(),
              a = o.getBoundingClientRect(),
              s = a.top - i.top,
              l = a.bottom - i.bottom,
              c = (Math.abs(s) > Math.abs(l) ? s : l) / (1 - t),
              u = -c * t;
            return (
              0 < c &&
                ((n =
                  0.5 == (r = a.height / (z.innerHeight + a.height))
                    ? 2 * a.height
                    : 2 *
                      Math.min(a.height, (-c * r) / (2 * r - 1)) *
                      (t || 1)),
                (u += t ? -n * t : -n / 2),
                (c += n)),
              { change: c, offset: u }
            );
          })(r, K(0, 1, -e.start / (e.end - e.start)));
          (m = t.change), (u = t.offset);
        } else (m = (e.end - e.start) * (1 - o)), (u = 0);
        g.forEach(function (e) {
          return (m -= e.distance * (1 - o));
        }),
          e.vars.onUpdate(e),
          l && l.progress(1);
      }
      var o,
        i,
        s,
        l,
        c,
        u,
        a = Sa('speed', e, n, r),
        f = Sa('lag', t, n, r),
        h = A.getProperty(r, 'y'),
        d = r._gsap,
        g = [],
        p = [],
        m = 0;
      return (
        Hb(),
        (1 !== o || s || l) &&
          (Mb(
            (i = U.create({
              trigger: s ? r.parentNode : r,
              scroller: v,
              scrub: !0,
              refreshPriority: -999,
              onRefreshInit: Ib,
              onRefresh: Mb,
              onKill: function onKill(e) {
                var t = w.indexOf(e);
                0 <= t && w.splice(t, 1), Ib();
              },
              onUpdate: function onUpdate(e) {
                var t,
                  r,
                  n,
                  o = h + m * (e.progress - c),
                  i = g.length,
                  a = 0;
                if (e.offset) {
                  if (i) {
                    for (r = -C, n = e.end; i--; ) {
                      if (
                        (t = g[i]).trig.isActive ||
                        (r >= t.start && r <= t.end)
                      )
                        return void (
                          l &&
                          ((t.trig.progress +=
                            t.trig.direction < 0 ? 0.001 : -0.001),
                          t.trig.update(0, 0, 1),
                          l.resetTo('y', parseFloat(d.y), -R, !0),
                          _ && l.progress(1))
                        );
                      r > t.end && (a += t.distance), (n -= t.distance);
                    }
                    o =
                      h +
                      a +
                      m *
                        ((A.utils.clamp(e.start, e.end, r) - e.start - a) /
                          (n - e.start) -
                          c);
                  }
                  (o = (function _round(e) {
                    return Math.round(1e5 * e) / 1e5 || 0;
                  })(o + u)),
                    p.length &&
                      !s &&
                      p.forEach(function (e) {
                        return e(o - a);
                      }),
                    l
                      ? (l.resetTo('y', o, -R, !0), _ && l.progress(1))
                      : ((d.y = o + 'px'), d.renderTransform(1));
                }
              },
            }))
          ),
          (A.core.getCache(i.trigger).stRevert = Ra),
          (i.startY = h),
          (i.pins = g),
          (i.markers = p),
          (i.ratio = o),
          (i.autoSpeed = s),
          (r.style.willChange = 'transform')),
        i
      );
    }
    var n,
      v,
      t,
      i,
      w,
      a,
      s,
      l,
      c,
      u,
      r,
      f,
      h,
      d,
      g = e.smoothTouch,
      p = e.onUpdate,
      m = e.onStop,
      S = e.smooth,
      b = e.onFocusIn,
      T = e.normalizeScroll,
      x =
        'undefined' != typeof ResizeObserver &&
        new ResizeObserver(function () {
          return i.refresh();
        }),
      E = e.effectsPrefix || '',
      k = U.getScrollFunc(z),
      P =
        1 === U.isTouch
          ? !0 === g
            ? 0.8
            : parseFloat(g) || 0
          : 0 === S || !1 === S
          ? 0
          : parseFloat(S) || 0.8,
      C = 0,
      R = 0,
      _ = 1,
      I = j(0),
      M = { y: 0 };
    function refreshHeight() {
      return (
        (t = n.clientHeight),
        (n.style.overflow = 'visible'),
        (L.style.height = t + 'px'),
        t - z.innerHeight
      );
    }
    Pa(),
      U.addEventListener('killAll', Pa),
      A.delayedCall(0.5, function () {
        return (_ = 0);
      }),
      (this.scrollTop = Ka),
      (this.scrollTo = function (e, t, r) {
        var n = A.utils.clamp(
          0,
          U.maxScroll(z),
          isNaN(e) ? o.offset(e, r) : +e
        );
        t
          ? u
            ? A.to(o, { duration: P, scrollTop: n, overwrite: 'auto', ease: J })
            : k(n)
          : Ka(n);
      }),
      (this.offset = function (e, t) {
        var r,
          n = (e = N(e)[0]).style.cssText,
          o = U.create({ trigger: e, start: t || 'top top' });
        return (
          w && Na([o]),
          (r = o.start),
          o.kill(!1),
          (e.style.cssText = n),
          (A.core.getCache(e).uncache = 1),
          r
        );
      }),
      (this.content = function (e) {
        if (arguments.length) {
          var t = N(e || '#smooth-content')[0] || L.children[0];
          return (
            t !== n &&
              ((c = (n = t).getAttribute('style') || ''),
              x && x.observe(n),
              A.set(n, {
                overflow: 'visible',
                width: '100%',
                boxSizing: 'border-box',
                y: '+=0',
              }),
              P || A.set(n, { clearProps: 'transform' })),
            this
          );
        }
        return n;
      }),
      (this.wrapper = function (e) {
        return arguments.length
          ? ((v =
              N(e || '#smooth-wrapper')[0] ||
              (function _wrap(e) {
                var t = B.querySelector('.ScrollSmoother-wrapper');
                return (
                  t ||
                    ((t = B.createElement('div')).classList.add(
                      'ScrollSmoother-wrapper'
                    ),
                    e.parentNode.insertBefore(t, e),
                    t.appendChild(e)),
                  t
                );
              })(n)),
            (l = v.getAttribute('style') || ''),
            refreshHeight(),
            A.set(
              v,
              P
                ? {
                    overflow: 'hidden',
                    position: 'fixed',
                    height: '100%',
                    width: '100%',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                  }
                : {
                    overflow: 'visible',
                    position: 'relative',
                    width: '100%',
                    height: 'auto',
                    top: 'auto',
                    bottom: 'auto',
                    left: 'auto',
                    right: 'auto',
                  }
            ),
            this)
          : v;
      }),
      (this.effects = function (e, t) {
        if (((w = w || []), !e)) return w.slice(0);
        (e = N(e)).forEach(function (e) {
          for (var t = w.length; t--; ) w[t].trigger === e && w[t].kill();
        });
        t = t || {};
        var r,
          n,
          o = t.speed,
          i = t.lag,
          a = [];
        for (r = 0; r < e.length; r++) (n = Ta(e[r], o, i, r)) && a.push(n);
        return w.push.apply(w, a), a;
      }),
      (this.sections = function (e, t) {
        if (((a = a || []), !e)) return a.slice(0);
        var r = N(e).map(function (t) {
          return U.create({
            trigger: t,
            start: 'top 120%',
            end: 'bottom -20%',
            onToggle: function onToggle(e) {
              (t.style.opacity = e.isActive ? '1' : '0'),
                (t.style.pointerEvents = e.isActive ? 'all' : 'none');
            },
          });
        });
        return t && t.add ? a.push.apply(a, r) : (a = r.slice(0)), r;
      }),
      this.content(e.content),
      this.wrapper(e.wrapper),
      (this.render = function (e) {
        return Ja(e || 0 === e ? e : C);
      }),
      (this.getVelocity = function () {
        return I.getVelocity(-C);
      }),
      U.scrollerProxy(v, {
        scrollTop: Ka,
        scrollHeight: function scrollHeight() {
          return refreshHeight() && L.scrollHeight;
        },
        fixedMarkers: !1 !== e.fixedMarkers && !!P,
        content: n,
        getBoundingClientRect: function getBoundingClientRect() {
          return {
            top: 0,
            left: 0,
            width: z.innerWidth,
            height: z.innerHeight,
          };
        },
      }),
      U.defaults({ scroller: v });
    var H = U.getAll().filter(function (e) {
      return e.scroller === z || e.scroller === v;
    });
    H.forEach(function (e) {
      return e.revert(!0);
    }),
      (i = U.create({
        animation: A.fromTo(
          M,
          { y: 0 },
          {
            y: function y() {
              return -refreshHeight();
            },
            immediateRender: !1,
            ease: 'none',
            data: 'ScrollSmoother',
            duration: 100,
            onUpdate: function onUpdate() {
              if (this._dur) {
                var e = h;
                e && (Ia(i), (M.y = C)), Ja(M.y, e), Ea(), p && !u && p(this);
              }
            },
          }
        ),
        onRefreshInit: function onRefreshInit() {
          if (w) {
            var e = U.getAll().filter(function (e) {
              return !!e.pin;
            });
            w.forEach(function (r) {
              r.vars.pinnedContainer ||
                e.forEach(function (e) {
                  if (e.pin.contains(r.trigger)) {
                    var t = r.vars;
                    (t.pinnedContainer = e.pin),
                      (r.vars = null),
                      r.init(t, r.animation);
                  }
                });
            });
          }
          (f = C), (M.y = v.scrollTop = 0);
        },
        id: 'ScrollSmoother',
        scroller: z,
        invalidateOnRefresh: !0,
        start: 0,
        refreshPriority: -9999,
        end: refreshHeight,
        onScrubComplete: function onScrubComplete() {
          I.reset(), m && m(o);
        },
        scrub: P || !0,
        onRefresh: function onRefresh(e) {
          Ia(e),
            (M.y = -k()),
            Ja(M.y),
            _ || e.animation.progress(A.utils.clamp(0, 1, f / -e.end));
        },
      })),
      (this.smooth = function (e) {
        return (
          arguments.length && (P = e || 0),
          arguments.length
            ? i.scrubDuration(e)
            : i.getTween()
            ? i.getTween().duration()
            : 0
        );
      }),
      i.getTween() && (i.getTween().vars.ease = e.ease || J),
      (this.scrollTrigger = i),
      e.effects &&
        this.effects(
          !0 === e.effects
            ? '[data-' + E + 'speed], [data-' + E + 'lag]'
            : e.effects,
          {}
        ),
      e.sections &&
        this.sections(!0 === e.sections ? '[data-section]' : e.sections),
      H.forEach(function (e) {
        (e.vars.scroller = v), e.init(e.vars, e.animation);
      }),
      (this.paused = function (e, t) {
        return arguments.length
          ? (!!u !== e &&
              (e
                ? (i.getTween() && i.getTween().pause(),
                  k(-C),
                  I.reset(),
                  (r = U.normalizeScroll()) && r.disable(),
                  ((u = U.observe({
                    preventDefault: !0,
                    type: 'wheel,touch,scroll',
                    debounce: !1,
                    allowClicks: !0,
                    onChangeY: function onChangeY() {
                      return Ka(-C);
                    },
                  })).nested = D(F, 'wheel,touch,scroll', !0, !1 !== t)))
                : (u.nested.kill(),
                  u.kill(),
                  (u = 0),
                  r && r.enable(),
                  (i.progress = (-C - i.start) / (i.end - i.start)),
                  Ia(i))),
            this)
          : !!u;
      }),
      (this.kill = function () {
        o.paused(!1), Ia(i), i.kill();
        for (var e = (w || []).concat(a || []), t = e.length; t--; )
          e[t].kill();
        U.scrollerProxy(v),
          U.removeEventListener('killAll', Pa),
          U.removeEventListener('refresh', Oa),
          L.style.removeProperty('height'),
          (v.style.cssText = l),
          (n.style.cssText = c);
        var r = U.defaults({});
        r && r.scroller === v && U.defaults({ scroller: z }),
          o.normalizer && U.normalizeScroll(!1),
          clearInterval(s),
          (W = null),
          x && x.disconnect(),
          z.removeEventListener('focusin', Ma);
      }),
      (this.refresh = function (e, t) {
        return i.refresh(e, t);
      }),
      T &&
        (this.normalizer = U.normalizeScroll(
          !0 === T ? { debounce: !0, content: !P && n } : T
        )),
      U.config(e),
      'overscrollBehavior' in z.getComputedStyle(L) &&
        A.set([L, F], { overscrollBehavior: 'none' }),
      'scrollBehavior' in z.getComputedStyle(L) &&
        A.set([L, F], { scrollBehavior: 'auto' }),
      z.addEventListener('focusin', Ma),
      (s = setInterval(Ea, 250)),
      'loading' === B.readyState ||
        requestAnimationFrame(function () {
          return U.refresh();
        });
  }
  (t.version = '3.11.0'),
    (t.create = function (e) {
      return W && e && W.content() === N(e.content)[0] ? W : new t(e);
    }),
    (t.get = function () {
      return W;
    }),
    r() && A.registerPlugin(t),
    (e.ScrollSmoother = t),
    (e.default = t);
  if (typeof window === 'undefined' || window !== e) {
    Object.defineProperty(e, '__esModule', { value: !0 });
  } else {
    // delete e.default;
  }
});
