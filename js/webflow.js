/*!
 * Webflow: Front-end site library
 * @license MIT
 * Inline scripts may access the api using an async handler:
 *   var Webflow = Webflow || [];
 *   Webflow.push(readyFunction);
 */

(()=>{
    var pe = (i,g)=>()=>(g || i((g = {
        exports: {}
    }).exports, g),
    g.exports);
    var Ge = pe(()=>{
        window.tram = function(i) {
            function g(e, a) {
                var u = new n.Bare;
                return u.init(e, a)
            }
            function m(e) {
                return e.replace(/[A-Z]/g, function(a) {
                    return "-" + a.toLowerCase()
                })
            }
            function O(e) {
                var a = parseInt(e.slice(1), 16)
                  , u = a >> 16 & 255
                  , c = a >> 8 & 255
                  , s = 255 & a;
                return [u, c, s]
            }
            function K(e, a, u) {
                return "#" + (1 << 24 | e << 16 | a << 8 | u).toString(16).slice(1)
            }
            function T() {}
            function C(e, a) {
                j("Type warning: Expected: [" + e + "] Got: [" + typeof a + "] " + a)
            }
            function M(e, a, u) {
                j("Units do not match [" + e + "]: " + a + ", " + u)
            }
            function S(e, a, u) {
                if (a !== void 0 && (u = a),
                e === void 0)
                    return u;
                var c = u;
                return Me.test(e) || !Ie.test(e) ? c = parseInt(e, 10) : Ie.test(e) && (c = 1e3 * parseFloat(e)),
                0 > c && (c = 0),
                c === c ? c : u
            }
            function j(e) {
                X.debug && window && window.console.warn(e)
            }
            function ne(e) {
                for (var a = -1, u = e ? e.length : 0, c = []; ++a < u; ) {
                    var s = e[a];
                    s && c.push(s)
                }
                return c
            }
            var D = function(e, a, u) {
                function c(N) {
                    return typeof N == "object"
                }
                function s(N) {
                    return typeof N == "function"
                }
                function l() {}
                function F(N, ie) {
                    function y() {
                        var he = new V;
                        return s(he.init) && he.init.apply(he, arguments),
                        he
                    }
                    function V() {}
                    ie === u && (ie = N,
                    N = Object),
                    y.Bare = V;
                    var G, fe = l[e] = N[e], Ae = V[e] = y[e] = new l;
                    return Ae.constructor = y,
                    y.mixin = function(he) {
                        return V[e] = y[e] = F(y, he)[e],
                        y
                    }
                    ,
                    y.open = function(he) {
                        if (G = {},
                        s(he) ? G = he.call(y, Ae, fe, y, N) : c(he) && (G = he),
                        c(G))
                            for (var ze in G)
                                a.call(G, ze) && (Ae[ze] = G[ze]);
                        return s(Ae.init) || (Ae.init = N),
                        y
                    }
                    ,
                    y.open(ie)
                }
                return F
            }("prototype", {}.hasOwnProperty)
              , B = {
                ease: ["ease", function(e, a, u, c) {
                    var s = (e /= c) * e
                      , l = s * e;
                    return a + u * (-2.75 * l * s + 11 * s * s + -15.5 * l + 8 * s + .25 * e)
                }
                ],
                "ease-in": ["ease-in", function(e, a, u, c) {
                    var s = (e /= c) * e
                      , l = s * e;
                    return a + u * (-1 * l * s + 3 * s * s + -3 * l + 2 * s)
                }
                ],
                "ease-out": ["ease-out", function(e, a, u, c) {
                    var s = (e /= c) * e
                      , l = s * e;
                    return a + u * (.3 * l * s + -1.6 * s * s + 2.2 * l + -1.8 * s + 1.9 * e)
                }
                ],
                "ease-in-out": ["ease-in-out", function(e, a, u, c) {
                    var s = (e /= c) * e
                      , l = s * e;
                    return a + u * (2 * l * s + -5 * s * s + 2 * l + 2 * s)
                }
                ],
                linear: ["linear", function(e, a, u, c) {
                    return u * e / c + a
                }
                ],
                "ease-in-quad": ["cubic-bezier(0.550, 0.085, 0.680, 0.530)", function(e, a, u, c) {
                    return u * (e /= c) * e + a
                }
                ],
                "ease-out-quad": ["cubic-bezier(0.250, 0.460, 0.450, 0.940)", function(e, a, u, c) {
                    return -u * (e /= c) * (e - 2) + a
                }
                ],
                "ease-in-out-quad": ["cubic-bezier(0.455, 0.030, 0.515, 0.955)", function(e, a, u, c) {
                    return (e /= c / 2) < 1 ? u / 2 * e * e + a : -u / 2 * (--e * (e - 2) - 1) + a
                }
                ],
                "ease-in-cubic": ["cubic-bezier(0.550, 0.055, 0.675, 0.190)", function(e, a, u, c) {
                    return u * (e /= c) * e * e + a
                }
                ],
                "ease-out-cubic": ["cubic-bezier(0.215, 0.610, 0.355, 1)", function(e, a, u, c) {
                    return u * ((e = e / c - 1) * e * e + 1) + a
                }
                ],
                "ease-in-out-cubic": ["cubic-bezier(0.645, 0.045, 0.355, 1)", function(e, a, u, c) {
                    return (e /= c / 2) < 1 ? u / 2 * e * e * e + a : u / 2 * ((e -= 2) * e * e + 2) + a
                }
                ],
                "ease-in-quart": ["cubic-bezier(0.895, 0.030, 0.685, 0.220)", function(e, a, u, c) {
                    return u * (e /= c) * e * e * e + a
                }
                ],
                "ease-out-quart": ["cubic-bezier(0.165, 0.840, 0.440, 1)", function(e, a, u, c) {
                    return -u * ((e = e / c - 1) * e * e * e - 1) + a
                }
                ],
                "ease-in-out-quart": ["cubic-bezier(0.770, 0, 0.175, 1)", function(e, a, u, c) {
                    return (e /= c / 2) < 1 ? u / 2 * e * e * e * e + a : -u / 2 * ((e -= 2) * e * e * e - 2) + a
                }
                ],
                "ease-in-quint": ["cubic-bezier(0.755, 0.050, 0.855, 0.060)", function(e, a, u, c) {
                    return u * (e /= c) * e * e * e * e + a
                }
                ],
                "ease-out-quint": ["cubic-bezier(0.230, 1, 0.320, 1)", function(e, a, u, c) {
                    return u * ((e = e / c - 1) * e * e * e * e + 1) + a
                }
                ],
                "ease-in-out-quint": ["cubic-bezier(0.860, 0, 0.070, 1)", function(e, a, u, c) {
                    return (e /= c / 2) < 1 ? u / 2 * e * e * e * e * e + a : u / 2 * ((e -= 2) * e * e * e * e + 2) + a
                }
                ],
                "ease-in-sine": ["cubic-bezier(0.470, 0, 0.745, 0.715)", function(e, a, u, c) {
                    return -u * Math.cos(e / c * (Math.PI / 2)) + u + a
                }
                ],
                "ease-out-sine": ["cubic-bezier(0.390, 0.575, 0.565, 1)", function(e, a, u, c) {
                    return u * Math.sin(e / c * (Math.PI / 2)) + a
                }
                ],
                "ease-in-out-sine": ["cubic-bezier(0.445, 0.050, 0.550, 0.950)", function(e, a, u, c) {
                    return -u / 2 * (Math.cos(Math.PI * e / c) - 1) + a
                }
                ],
                "ease-in-expo": ["cubic-bezier(0.950, 0.050, 0.795, 0.035)", function(e, a, u, c) {
                    return e === 0 ? a : u * Math.pow(2, 10 * (e / c - 1)) + a
                }
                ],
                "ease-out-expo": ["cubic-bezier(0.190, 1, 0.220, 1)", function(e, a, u, c) {
                    return e === c ? a + u : u * (-Math.pow(2, -10 * e / c) + 1) + a
                }
                ],
                "ease-in-out-expo": ["cubic-bezier(1, 0, 0, 1)", function(e, a, u, c) {
                    return e === 0 ? a : e === c ? a + u : (e /= c / 2) < 1 ? u / 2 * Math.pow(2, 10 * (e - 1)) + a : u / 2 * (-Math.pow(2, -10 * --e) + 2) + a
                }
                ],
                "ease-in-circ": ["cubic-bezier(0.600, 0.040, 0.980, 0.335)", function(e, a, u, c) {
                    return -u * (Math.sqrt(1 - (e /= c) * e) - 1) + a
                }
                ],
                "ease-out-circ": ["cubic-bezier(0.075, 0.820, 0.165, 1)", function(e, a, u, c) {
                    return u * Math.sqrt(1 - (e = e / c - 1) * e) + a
                }
                ],
                "ease-in-out-circ": ["cubic-bezier(0.785, 0.135, 0.150, 0.860)", function(e, a, u, c) {
                    return (e /= c / 2) < 1 ? -u / 2 * (Math.sqrt(1 - e * e) - 1) + a : u / 2 * (Math.sqrt(1 - (e -= 2) * e) + 1) + a
                }
                ],
                "ease-in-back": ["cubic-bezier(0.600, -0.280, 0.735, 0.045)", function(e, a, u, c, s) {
                    return s === void 0 && (s = 1.70158),
                    u * (e /= c) * e * ((s + 1) * e - s) + a
                }
                ],
                "ease-out-back": ["cubic-bezier(0.175, 0.885, 0.320, 1.275)", function(e, a, u, c, s) {
                    return s === void 0 && (s = 1.70158),
                    u * ((e = e / c - 1) * e * ((s + 1) * e + s) + 1) + a
                }
                ],
                "ease-in-out-back": ["cubic-bezier(0.680, -0.550, 0.265, 1.550)", function(e, a, u, c, s) {
                    return s === void 0 && (s = 1.70158),
                    (e /= c / 2) < 1 ? u / 2 * e * e * (((s *= 1.525) + 1) * e - s) + a : u / 2 * ((e -= 2) * e * (((s *= 1.525) + 1) * e + s) + 2) + a
                }
                ]
            }
              , z = {
                "ease-in-back": "cubic-bezier(0.600, 0, 0.735, 0.045)",
                "ease-out-back": "cubic-bezier(0.175, 0.885, 0.320, 1)",
                "ease-in-out-back": "cubic-bezier(0.680, 0, 0.265, 1)"
            }
              , P = document
              , U = window
              , $ = "bkwld-tram"
              , H = /[\-\.0-9]/g
              , R = /[A-Z]/
              , L = "number"
              , Z = /^(rgb|#)/
              , I = /(em|cm|mm|in|pt|pc|px)$/
              , Y = /(em|cm|mm|in|pt|pc|px|%)$/
              , oe = /(deg|rad|turn)$/
              , ue = "unitless"
              , ae = /(all|none) 0s ease 0s/
              , _e = /^(width|height)$/
              , le = " "
              , k = P.createElement("a")
              , d = ["Webkit", "Moz", "O", "ms"]
              , w = ["-webkit-", "-moz-", "-o-", "-ms-"]
              , A = function(e) {
                if (e in k.style)
                    return {
                        dom: e,
                        css: e
                    };
                var a, u, c = "", s = e.split("-");
                for (a = 0; a < s.length; a++)
                    c += s[a].charAt(0).toUpperCase() + s[a].slice(1);
                for (a = 0; a < d.length; a++)
                    if (u = d[a] + c,
                    u in k.style)
                        return {
                            dom: u,
                            css: w[a] + e
                        }
            }
              , E = g.support = {
                bind: Function.prototype.bind,
                transform: A("transform"),
                transition: A("transition"),
                backface: A("backface-visibility"),
                timing: A("transition-timing-function")
            };
            if (E.transition) {
                var v = E.timing.dom;
                if (k.style[v] = B["ease-in-back"][0],
                !k.style[v])
                    for (var p in z)
                        B[p][0] = z[p]
            }
            var f = g.frame = function() {
                var e = U.requestAnimationFrame || U.webkitRequestAnimationFrame || U.mozRequestAnimationFrame || U.oRequestAnimationFrame || U.msRequestAnimationFrame;
                return e && E.bind ? e.bind(U) : function(a) {
                    U.setTimeout(a, 16)
                }
            }()
              , b = g.now = function() {
                var e = U.performance
                  , a = e && (e.now || e.webkitNow || e.msNow || e.mozNow);
                return a && E.bind ? a.bind(e) : Date.now || function() {
                    return +new Date
                }
            }()
              , t = D(function(e) {
                function a(q, Q) {
                    var se = ne(("" + q).split(le))
                      , ee = se[0];
                    Q = Q || {};
                    var ve = Le[ee];
                    if (!ve)
                        return j("Unsupported property: " + ee);
                    if (!Q.weak || !this.props[ee]) {
                        var ye = ve[0]
                          , me = this.props[ee];
                        return me || (me = this.props[ee] = new ye.Bare),
                        me.init(this.$el, se, ve, Q),
                        me
                    }
                }
                function u(q, Q, se) {
                    if (q) {
                        var ee = typeof q;
                        if (Q || (this.timer && this.timer.destroy(),
                        this.queue = [],
                        this.active = !1),
                        ee == "number" && Q)
                            return this.timer = new W({
                                duration: q,
                                context: this,
                                complete: l
                            }),
                            void (this.active = !0);
                        if (ee == "string" && Q) {
                            switch (q) {
                            case "hide":
                                y.call(this);
                                break;
                            case "stop":
                                F.call(this);
                                break;
                            case "redraw":
                                V.call(this);
                                break;
                            default:
                                a.call(this, q, se && se[1])
                            }
                            return l.call(this)
                        }
                        if (ee == "function")
                            return void q.call(this, this);
                        if (ee == "object") {
                            var ve = 0;
                            Ae.call(this, q, function(ce, Ut) {
                                ce.span > ve && (ve = ce.span),
                                ce.stop(),
                                ce.animate(Ut)
                            }, function(ce) {
                                "wait"in ce && (ve = S(ce.wait, 0))
                            }),
                            fe.call(this),
                            ve > 0 && (this.timer = new W({
                                duration: ve,
                                context: this
                            }),
                            this.active = !0,
                            Q && (this.timer.complete = l));
                            var ye = this
                              , me = !1
                              , Pe = {};
                            f(function() {
                                Ae.call(ye, q, function(ce) {
                                    ce.active && (me = !0,
                                    Pe[ce.name] = ce.nextStyle)
                                }),
                                me && ye.$el.css(Pe)
                            })
                        }
                    }
                }
                function c(q) {
                    q = S(q, 0),
                    this.active ? this.queue.push({
                        options: q
                    }) : (this.timer = new W({
                        duration: q,
                        context: this,
                        complete: l
                    }),
                    this.active = !0)
                }
                function s(q) {
                    return this.active ? (this.queue.push({
                        options: q,
                        args: arguments
                    }),
                    void (this.timer.complete = l)) : j("No active transition timer. Use start() or wait() before then().")
                }
                function l() {
                    if (this.timer && this.timer.destroy(),
                    this.active = !1,
                    this.queue.length) {
                        var q = this.queue.shift();
                        u.call(this, q.options, !0, q.args)
                    }
                }
                function F(q) {
                    this.timer && this.timer.destroy(),
                    this.queue = [],
                    this.active = !1;
                    var Q;
                    typeof q == "string" ? (Q = {},
                    Q[q] = 1) : Q = typeof q == "object" && q != null ? q : this.props,
                    Ae.call(this, Q, he),
                    fe.call(this)
                }
                function N(q) {
                    F.call(this, q),
                    Ae.call(this, q, ze, Pt)
                }
                function ie(q) {
                    typeof q != "string" && (q = "block"),
                    this.el.style.display = q
                }
                function y() {
                    F.call(this),
                    this.el.style.display = "none"
                }
                function V() {
                    this.el.offsetHeight
                }
                function G() {
                    F.call(this),
                    i.removeData(this.el, $),
                    this.$el = this.el = null
                }
                function fe() {
                    var q, Q, se = [];
                    this.upstream && se.push(this.upstream);
                    for (q in this.props)
                        Q = this.props[q],
                        Q.active && se.push(Q.string);
                    se = se.join(","),
                    this.style !== se && (this.style = se,
                    this.el.style[E.transition.dom] = se)
                }
                function Ae(q, Q, se) {
                    var ee, ve, ye, me, Pe = Q !== he, ce = {};
                    for (ee in q)
                        ye = q[ee],
                        ee in de ? (ce.transform || (ce.transform = {}),
                        ce.transform[ee] = ye) : (R.test(ee) && (ee = m(ee)),
                        ee in Le ? ce[ee] = ye : (me || (me = {}),
                        me[ee] = ye));
                    for (ee in ce) {
                        if (ye = ce[ee],
                        ve = this.props[ee],
                        !ve) {
                            if (!Pe)
                                continue;
                            ve = a.call(this, ee)
                        }
                        Q.call(this, ve, ye)
                    }
                    se && me && se.call(this, me)
                }
                function he(q) {
                    q.stop()
                }
                function ze(q, Q) {
                    q.set(Q)
                }
                function Pt(q) {
                    this.$el.css(q)
                }
                function be(q, Q) {
                    e[q] = function() {
                        return this.children ? Bt.call(this, Q, arguments) : (this.el && Q.apply(this, arguments),
                        this)
                    }
                }
                function Bt(q, Q) {
                    var se, ee = this.children.length;
                    for (se = 0; ee > se; se++)
                        q.apply(this.children[se], Q);
                    return this
                }
                e.init = function(q) {
                    if (this.$el = i(q),
                    this.el = this.$el[0],
                    this.props = {},
                    this.queue = [],
                    this.style = "",
                    this.active = !1,
                    X.keepInherited && !X.fallback) {
                        var Q = we(this.el, "transition");
                        Q && !ae.test(Q) && (this.upstream = Q)
                    }
                    E.backface && X.hideBackface && re(this.el, E.backface.css, "hidden")
                }
                ,
                be("add", a),
                be("start", u),
                be("wait", c),
                be("then", s),
                be("next", l),
                be("stop", F),
                be("set", N),
                be("show", ie),
                be("hide", y),
                be("redraw", V),
                be("destroy", G)
            })
              , n = D(t, function(e) {
                function a(u, c) {
                    var s = i.data(u, $) || i.data(u, $, new t.Bare);
                    return s.el || s.init(u),
                    c ? s.start(c) : s
                }
                e.init = function(u, c) {
                    var s = i(u);
                    if (!s.length)
                        return this;
                    if (s.length === 1)
                        return a(s[0], c);
                    var l = [];
                    return s.each(function(F, N) {
                        l.push(a(N, c))
                    }),
                    this.children = l,
                    this
                }
            })
              , r = D(function(e) {
                function a() {
                    var l = this.get();
                    this.update("auto");
                    var F = this.get();
                    return this.update(l),
                    F
                }
                function u(l, F, N) {
                    return F !== void 0 && (N = F),
                    l in B ? l : N
                }
                function c(l) {
                    var F = /rgba?\((\d+),\s*(\d+),\s*(\d+)/.exec(l);
                    return (F ? K(F[1], F[2], F[3]) : l).replace(/#(\w)(\w)(\w)$/, "#$1$1$2$2$3$3")
                }
                var s = {
                    duration: 500,
                    ease: "ease",
                    delay: 0
                };
                e.init = function(l, F, N, ie) {
                    this.$el = l,
                    this.el = l[0];
                    var y = F[0];
                    N[2] && (y = N[2]),
                    ge[y] && (y = ge[y]),
                    this.name = y,
                    this.type = N[1],
                    this.duration = S(F[1], this.duration, s.duration),
                    this.ease = u(F[2], this.ease, s.ease),
                    this.delay = S(F[3], this.delay, s.delay),
                    this.span = this.duration + this.delay,
                    this.active = !1,
                    this.nextStyle = null,
                    this.auto = _e.test(this.name),
                    this.unit = ie.unit || this.unit || X.defaultUnit,
                    this.angle = ie.angle || this.angle || X.defaultAngle,
                    X.fallback || ie.fallback ? this.animate = this.fallback : (this.animate = this.transition,
                    this.string = this.name + le + this.duration + "ms" + (this.ease != "ease" ? le + B[this.ease][0] : "") + (this.delay ? le + this.delay + "ms" : ""))
                }
                ,
                e.set = function(l) {
                    l = this.convert(l, this.type),
                    this.update(l),
                    this.redraw()
                }
                ,
                e.transition = function(l) {
                    this.active = !0,
                    l = this.convert(l, this.type),
                    this.auto && (this.el.style[this.name] == "auto" && (this.update(this.get()),
                    this.redraw()),
                    l == "auto" && (l = a.call(this))),
                    this.nextStyle = l
                }
                ,
                e.fallback = function(l) {
                    var F = this.el.style[this.name] || this.convert(this.get(), this.type);
                    l = this.convert(l, this.type),
                    this.auto && (F == "auto" && (F = this.convert(this.get(), this.type)),
                    l == "auto" && (l = a.call(this))),
                    this.tween = new x({
                        from: F,
                        to: l,
                        duration: this.duration,
                        delay: this.delay,
                        ease: this.ease,
                        update: this.update,
                        context: this
                    })
                }
                ,
                e.get = function() {
                    return we(this.el, this.name)
                }
                ,
                e.update = function(l) {
                    re(this.el, this.name, l)
                }
                ,
                e.stop = function() {
                    (this.active || this.nextStyle) && (this.active = !1,
                    this.nextStyle = null,
                    re(this.el, this.name, this.get()));
                    var l = this.tween;
                    l && l.context && l.destroy()
                }
                ,
                e.convert = function(l, F) {
                    if (l == "auto" && this.auto)
                        return l;
                    var N, ie = typeof l == "number", y = typeof l == "string";
                    switch (F) {
                    case L:
                        if (ie)
                            return l;
                        if (y && l.replace(H, "") === "")
                            return +l;
                        N = "number(unitless)";
                        break;
                    case Z:
                        if (y) {
                            if (l === "" && this.original)
                                return this.original;
                            if (F.test(l))
                                return l.charAt(0) == "#" && l.length == 7 ? l : c(l)
                        }
                        N = "hex or rgb string";
                        break;
                    case I:
                        if (ie)
                            return l + this.unit;
                        if (y && F.test(l))
                            return l;
                        N = "number(px) or string(unit)";
                        break;
                    case Y:
                        if (ie)
                            return l + this.unit;
                        if (y && F.test(l))
                            return l;
                        N = "number(px) or string(unit or %)";
                        break;
                    case oe:
                        if (ie)
                            return l + this.angle;
                        if (y && F.test(l))
                            return l;
                        N = "number(deg) or string(angle)";
                        break;
                    case ue:
                        if (ie || y && Y.test(l))
                            return l;
                        N = "number(unitless) or string(unit or %)"
                    }
                    return C(N, l),
                    l
                }
                ,
                e.redraw = function() {
                    this.el.offsetHeight
                }
            })
              , o = D(r, function(e, a) {
                e.init = function() {
                    a.init.apply(this, arguments),
                    this.original || (this.original = this.convert(this.get(), Z))
                }
            })
              , h = D(r, function(e, a) {
                e.init = function() {
                    a.init.apply(this, arguments),
                    this.animate = this.fallback
                }
                ,
                e.get = function() {
                    return this.$el[this.name]()
                }
                ,
                e.update = function(u) {
                    this.$el[this.name](u)
                }
            })
              , _ = D(r, function(e, a) {
                function u(c, s) {
                    var l, F, N, ie, y;
                    for (l in c)
                        ie = de[l],
                        N = ie[0],
                        F = ie[1] || l,
                        y = this.convert(c[l], N),
                        s.call(this, F, y, N)
                }
                e.init = function() {
                    a.init.apply(this, arguments),
                    this.current || (this.current = {},
                    de.perspective && X.perspective && (this.current.perspective = X.perspective,
                    re(this.el, this.name, this.style(this.current)),
                    this.redraw()))
                }
                ,
                e.set = function(c) {
                    u.call(this, c, function(s, l) {
                        this.current[s] = l
                    }),
                    re(this.el, this.name, this.style(this.current)),
                    this.redraw()
                }
                ,
                e.transition = function(c) {
                    var s = this.values(c);
                    this.tween = new J({
                        current: this.current,
                        values: s,
                        duration: this.duration,
                        delay: this.delay,
                        ease: this.ease
                    });
                    var l, F = {};
                    for (l in this.current)
                        F[l] = l in s ? s[l] : this.current[l];
                    this.active = !0,
                    this.nextStyle = this.style(F)
                }
                ,
                e.fallback = function(c) {
                    var s = this.values(c);
                    this.tween = new J({
                        current: this.current,
                        values: s,
                        duration: this.duration,
                        delay: this.delay,
                        ease: this.ease,
                        update: this.update,
                        context: this
                    })
                }
                ,
                e.update = function() {
                    re(this.el, this.name, this.style(this.current))
                }
                ,
                e.style = function(c) {
                    var s, l = "";
                    for (s in c)
                        l += s + "(" + c[s] + ") ";
                    return l
                }
                ,
                e.values = function(c) {
                    var s, l = {};
                    return u.call(this, c, function(F, N, ie) {
                        l[F] = N,
                        this.current[F] === void 0 && (s = 0,
                        ~F.indexOf("scale") && (s = 1),
                        this.current[F] = this.convert(s, ie))
                    }),
                    l
                }
            })
              , x = D(function(e) {
                function a(y) {
                    N.push(y) === 1 && f(u)
                }
                function u() {
                    var y, V, G, fe = N.length;
                    if (fe)
                        for (f(u),
                        V = b(),
                        y = fe; y--; )
                            G = N[y],
                            G && G.render(V)
                }
                function c(y) {
                    var V, G = i.inArray(y, N);
                    G >= 0 && (V = N.slice(G + 1),
                    N.length = G,
                    V.length && (N = N.concat(V)))
                }
                function s(y) {
                    return Math.round(y * ie) / ie
                }
                function l(y, V, G) {
                    return K(y[0] + G * (V[0] - y[0]), y[1] + G * (V[1] - y[1]), y[2] + G * (V[2] - y[2]))
                }
                var F = {
                    ease: B.ease[1],
                    from: 0,
                    to: 1
                };
                e.init = function(y) {
                    this.duration = y.duration || 0,
                    this.delay = y.delay || 0;
                    var V = y.ease || F.ease;
                    B[V] && (V = B[V][1]),
                    typeof V != "function" && (V = F.ease),
                    this.ease = V,
                    this.update = y.update || T,
                    this.complete = y.complete || T,
                    this.context = y.context || this,
                    this.name = y.name;
                    var G = y.from
                      , fe = y.to;
                    G === void 0 && (G = F.from),
                    fe === void 0 && (fe = F.to),
                    this.unit = y.unit || "",
                    typeof G == "number" && typeof fe == "number" ? (this.begin = G,
                    this.change = fe - G) : this.format(fe, G),
                    this.value = this.begin + this.unit,
                    this.start = b(),
                    y.autoplay !== !1 && this.play()
                }
                ,
                e.play = function() {
                    this.active || (this.start || (this.start = b()),
                    this.active = !0,
                    a(this))
                }
                ,
                e.stop = function() {
                    this.active && (this.active = !1,
                    c(this))
                }
                ,
                e.render = function(y) {
                    var V, G = y - this.start;
                    if (this.delay) {
                        if (G <= this.delay)
                            return;
                        G -= this.delay
                    }
                    if (G < this.duration) {
                        var fe = this.ease(G, 0, 1, this.duration);
                        return V = this.startRGB ? l(this.startRGB, this.endRGB, fe) : s(this.begin + fe * this.change),
                        this.value = V + this.unit,
                        void this.update.call(this.context, this.value)
                    }
                    V = this.endHex || this.begin + this.change,
                    this.value = V + this.unit,
                    this.update.call(this.context, this.value),
                    this.complete.call(this.context),
                    this.destroy()
                }
                ,
                e.format = function(y, V) {
                    if (V += "",
                    y += "",
                    y.charAt(0) == "#")
                        return this.startRGB = O(V),
                        this.endRGB = O(y),
                        this.endHex = y,
                        this.begin = 0,
                        void (this.change = 1);
                    if (!this.unit) {
                        var G = V.replace(H, "")
                          , fe = y.replace(H, "");
                        G !== fe && M("tween", V, y),
                        this.unit = G
                    }
                    V = parseFloat(V),
                    y = parseFloat(y),
                    this.begin = this.value = V,
                    this.change = y - V
                }
                ,
                e.destroy = function() {
                    this.stop(),
                    this.context = null,
                    this.ease = this.update = this.complete = T
                }
                ;
                var N = []
                  , ie = 1e3
            })
              , W = D(x, function(e) {
                e.init = function(a) {
                    this.duration = a.duration || 0,
                    this.complete = a.complete || T,
                    this.context = a.context,
                    this.play()
                }
                ,
                e.render = function(a) {
                    var u = a - this.start;
                    u < this.duration || (this.complete.call(this.context),
                    this.destroy())
                }
            })
              , J = D(x, function(e, a) {
                e.init = function(u) {
                    this.context = u.context,
                    this.update = u.update,
                    this.tweens = [],
                    this.current = u.current;
                    var c, s;
                    for (c in u.values)
                        s = u.values[c],
                        this.current[c] !== s && this.tweens.push(new x({
                            name: c,
                            from: this.current[c],
                            to: s,
                            duration: u.duration,
                            delay: u.delay,
                            ease: u.ease,
                            autoplay: !1
                        }));
                    this.play()
                }
                ,
                e.render = function(u) {
                    var c, s, l = this.tweens.length, F = !1;
                    for (c = l; c--; )
                        s = this.tweens[c],
                        s.context && (s.render(u),
                        this.current[s.name] = s.value,
                        F = !0);
                    return F ? void (this.update && this.update.call(this.context)) : this.destroy()
                }
                ,
                e.destroy = function() {
                    if (a.destroy.call(this),
                    this.tweens) {
                        var u, c = this.tweens.length;
                        for (u = c; u--; )
                            this.tweens[u].destroy();
                        this.tweens = null,
                        this.current = null
                    }
                }
            })
              , X = g.config = {
                debug: !1,
                defaultUnit: "px",
                defaultAngle: "deg",
                keepInherited: !1,
                hideBackface: !1,
                perspective: "",
                fallback: !E.transition,
                agentTests: []
            };
            g.fallback = function(e) {
                if (!E.transition)
                    return X.fallback = !0;
                X.agentTests.push("(" + e + ")");
                var a = new RegExp(X.agentTests.join("|"),"i");
                X.fallback = a.test(navigator.userAgent)
            }
            ,
            g.fallback("6.0.[2-5] Safari"),
            g.tween = function(e) {
                return new x(e)
            }
            ,
            g.delay = function(e, a, u) {
                return new W({
                    complete: a,
                    duration: e,
                    context: u
                })
            }
            ,
            i.fn.tram = function(e) {
                return g.call(null, this, e)
            }
            ;
            var re = i.style
              , we = i.css
              , ge = {
                transform: E.transform && E.transform.css
            }
              , Le = {
                color: [o, Z],
                background: [o, Z, "background-color"],
                "outline-color": [o, Z],
                "border-color": [o, Z],
                "border-top-color": [o, Z],
                "border-right-color": [o, Z],
                "border-bottom-color": [o, Z],
                "border-left-color": [o, Z],
                "border-width": [r, I],
                "border-top-width": [r, I],
                "border-right-width": [r, I],
                "border-bottom-width": [r, I],
                "border-left-width": [r, I],
                "border-spacing": [r, I],
                "letter-spacing": [r, I],
                margin: [r, I],
                "margin-top": [r, I],
                "margin-right": [r, I],
                "margin-bottom": [r, I],
                "margin-left": [r, I],
                padding: [r, I],
                "padding-top": [r, I],
                "padding-right": [r, I],
                "padding-bottom": [r, I],
                "padding-left": [r, I],
                "outline-width": [r, I],
                opacity: [r, L],
                top: [r, Y],
                right: [r, Y],
                bottom: [r, Y],
                left: [r, Y],
                "font-size": [r, Y],
                "text-indent": [r, Y],
                "word-spacing": [r, Y],
                width: [r, Y],
                "min-width": [r, Y],
                "max-width": [r, Y],
                height: [r, Y],
                "min-height": [r, Y],
                "max-height": [r, Y],
                "line-height": [r, ue],
                "scroll-top": [h, L, "scrollTop"],
                "scroll-left": [h, L, "scrollLeft"]
            }
              , de = {};
            E.transform && (Le.transform = [_],
            de = {
                x: [Y, "translateX"],
                y: [Y, "translateY"],
                rotate: [oe],
                rotateX: [oe],
                rotateY: [oe],
                scale: [L],
                scaleX: [L],
                scaleY: [L],
                skew: [oe],
                skewX: [oe],
                skewY: [oe]
            }),
            E.transform && E.backface && (de.z = [Y, "translateZ"],
            de.rotateZ = [oe],
            de.scaleZ = [L],
            de.perspective = [I]);
            var Me = /ms/
              , Ie = /s|\./;
            return i.tram = g
        }(window.jQuery)
    }
    );
    var rt = pe((ai,nt)=>{
        var Ht = window.$
          , Xt = Ge() && Ht.tram;
        nt.exports = function() {
            var i = {};
            i.VERSION = "1.6.0-Webflow";
            var g = {}
              , m = Array.prototype
              , O = Object.prototype
              , K = Function.prototype
              , T = m.push
              , C = m.slice
              , M = m.concat
              , S = O.toString
              , j = O.hasOwnProperty
              , ne = m.forEach
              , D = m.map
              , B = m.reduce
              , z = m.reduceRight
              , P = m.filter
              , U = m.every
              , $ = m.some
              , H = m.indexOf
              , R = m.lastIndexOf
              , L = Array.isArray
              , Z = Object.keys
              , I = K.bind
              , Y = i.each = i.forEach = function(d, w, A) {
                if (d == null)
                    return d;
                if (ne && d.forEach === ne)
                    d.forEach(w, A);
                else if (d.length === +d.length) {
                    for (var E = 0, v = d.length; E < v; E++)
                        if (w.call(A, d[E], E, d) === g)
                            return
                } else
                    for (var p = i.keys(d), E = 0, v = p.length; E < v; E++)
                        if (w.call(A, d[p[E]], p[E], d) === g)
                            return;
                return d
            }
            ;
            i.map = i.collect = function(d, w, A) {
                var E = [];
                return d == null ? E : D && d.map === D ? d.map(w, A) : (Y(d, function(v, p, f) {
                    E.push(w.call(A, v, p, f))
                }),
                E)
            }
            ,
            i.find = i.detect = function(d, w, A) {
                var E;
                return oe(d, function(v, p, f) {
                    if (w.call(A, v, p, f))
                        return E = v,
                        !0
                }),
                E
            }
            ,
            i.filter = i.select = function(d, w, A) {
                var E = [];
                return d == null ? E : P && d.filter === P ? d.filter(w, A) : (Y(d, function(v, p, f) {
                    w.call(A, v, p, f) && E.push(v)
                }),
                E)
            }
            ;
            var oe = i.some = i.any = function(d, w, A) {
                w || (w = i.identity);
                var E = !1;
                return d == null ? E : $ && d.some === $ ? d.some(w, A) : (Y(d, function(v, p, f) {
                    if (E || (E = w.call(A, v, p, f)))
                        return g
                }),
                !!E)
            }
            ;
            i.contains = i.include = function(d, w) {
                return d == null ? !1 : H && d.indexOf === H ? d.indexOf(w) != -1 : oe(d, function(A) {
                    return A === w
                })
            }
            ,
            i.delay = function(d, w) {
                var A = C.call(arguments, 2);
                return setTimeout(function() {
                    return d.apply(null, A)
                }, w)
            }
            ,
            i.defer = function(d) {
                return i.delay.apply(i, [d, 1].concat(C.call(arguments, 1)))
            }
            ,
            i.throttle = function(d) {
                var w, A, E;
                return function() {
                    w || (w = !0,
                    A = arguments,
                    E = this,
                    Xt.frame(function() {
                        w = !1,
                        d.apply(E, A)
                    }))
                }
            }
            ,
            i.debounce = function(d, w, A) {
                var E, v, p, f, b, t = function() {
                    var n = i.now() - f;
                    n < w ? E = setTimeout(t, w - n) : (E = null,
                    A || (b = d.apply(p, v),
                    p = v = null))
                };
                return function() {
                    p = this,
                    v = arguments,
                    f = i.now();
                    var n = A && !E;
                    return E || (E = setTimeout(t, w)),
                    n && (b = d.apply(p, v),
                    p = v = null),
                    b
                }
            }
            ,
            i.defaults = function(d) {
                if (!i.isObject(d))
                    return d;
                for (var w = 1, A = arguments.length; w < A; w++) {
                    var E = arguments[w];
                    for (var v in E)
                        d[v] === void 0 && (d[v] = E[v])
                }
                return d
            }
            ,
            i.keys = function(d) {
                if (!i.isObject(d))
                    return [];
                if (Z)
                    return Z(d);
                var w = [];
                for (var A in d)
                    i.has(d, A) && w.push(A);
                return w
            }
            ,
            i.has = function(d, w) {
                return j.call(d, w)
            }
            ,
            i.isObject = function(d) {
                return d === Object(d)
            }
            ,
            i.now = Date.now || function() {
                return new Date().getTime()
            }
            ,
            i.templateSettings = {
                evaluate: /<%([\s\S]+?)%>/g,
                interpolate: /<%=([\s\S]+?)%>/g,
                escape: /<%-([\s\S]+?)%>/g
            };
            var ue = /(.)^/
              , ae = {
                "'": "'",
                "\\": "\\",
                "\r": "r",
                "\n": "n",
                "\u2028": "u2028",
                "\u2029": "u2029"
            }
              , _e = /\\|'|\r|\n|\u2028|\u2029/g
              , le = function(d) {
                return "\\" + ae[d]
            }
              , k = /^\s*(\w|\$)+\s*$/;
            return i.template = function(d, w, A) {
                !w && A && (w = A),
                w = i.defaults({}, w, i.templateSettings);
                var E = RegExp([(w.escape || ue).source, (w.interpolate || ue).source, (w.evaluate || ue).source].join("|") + "|$", "g")
                  , v = 0
                  , p = "__p+='";
                d.replace(E, function(n, r, o, h, _) {
                    return p += d.slice(v, _).replace(_e, le),
                    v = _ + n.length,
                    r ? p += `'+
((__t=(` + r + `))==null?'':_.escape(__t))+
'` : o ? p += `'+
((__t=(` + o + `))==null?'':__t)+
'` : h && (p += `';
` + h + `
__p+='`),
                    n
                }),
                p += `';
`;
                var f = w.variable;
                if (f) {
                    if (!k.test(f))
                        throw new Error("variable is not a bare identifier: " + f)
                } else
                    p = `with(obj||{}){
` + p + `}
`,
                    f = "obj";
                p = `var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};
` + p + `return __p;
`;
                var b;
                try {
                    b = new Function(w.variable || "obj","_",p)
                } catch (n) {
                    throw n.source = p,
                    n
                }
                var t = function(n) {
                    return b.call(this, n, i)
                };
                return t.source = "function(" + f + `){
` + p + "}",
                t
            }
            ,
            i
        }()
    }
    );
    var Te = pe((si,dt)=>{
        var te = {}
          , We = {}
          , Ne = []
          , Qe = window.Webflow || []
          , Ce = window.jQuery
          , Ee = Ce(window)
          , Vt = Ce(document)
          , Oe = Ce.isFunction
          , xe = te._ = rt()
          , at = te.tram = Ge() && Ce.tram
          , Ue = !1
          , je = !1;
        at.config.hideBackface = !1;
        at.config.keepInherited = !0;
        te.define = function(i, g, m) {
            We[i] && ut(We[i]);
            var O = We[i] = g(Ce, xe, m) || {};
            return st(O),
            O
        }
        ;
        te.require = function(i) {
            return We[i]
        }
        ;
        function st(i) {
            te.env() && (Oe(i.design) && Ee.on("__wf_design", i.design),
            Oe(i.preview) && Ee.on("__wf_preview", i.preview)),
            Oe(i.destroy) && Ee.on("__wf_destroy", i.destroy),
            i.ready && Oe(i.ready) && Kt(i)
        }
        function Kt(i) {
            if (Ue) {
                i.ready();
                return
            }
            xe.contains(Ne, i.ready) || Ne.push(i.ready)
        }
        function ut(i) {
            Oe(i.design) && Ee.off("__wf_design", i.design),
            Oe(i.preview) && Ee.off("__wf_preview", i.preview),
            Oe(i.destroy) && Ee.off("__wf_destroy", i.destroy),
            i.ready && Oe(i.ready) && $t(i)
        }
        function $t(i) {
            Ne = xe.filter(Ne, function(g) {
                return g !== i.ready
            })
        }
        te.push = function(i) {
            if (Ue) {
                Oe(i) && i();
                return
            }
            Qe.push(i)
        }
        ;
        te.env = function(i) {
            var g = window.__wf_design
              , m = typeof g < "u";
            if (!i)
                return m;
            if (i === "design")
                return m && g;
            if (i === "preview")
                return m && !g;
            if (i === "slug")
                return m && window.__wf_slug;
            if (i === "editor")
                return window.WebflowEditor;
            if (i === "test")
                return window.__wf_test;
            if (i === "frame")
                return window !== window.top
        }
        ;
        var Be = navigator.userAgent.toLowerCase()
          , ft = te.env.touch = "ontouchstart"in window || window.DocumentTouch && document instanceof window.DocumentTouch
          , Yt = te.env.chrome = /chrome/.test(Be) && /Google/.test(navigator.vendor) && parseInt(Be.match(/chrome\/(\d+)\./)[1], 10)
          , Gt = te.env.ios = /(ipod|iphone|ipad)/.test(Be);
        te.env.safari = /safari/.test(Be) && !Yt && !Gt;
        var Ze;
        ft && Vt.on("touchstart mousedown", function(i) {
            Ze = i.target
        });
        te.validClick = ft ? function(i) {
            return i === Ze || Ce.contains(i, Ze)
        }
        : function() {
            return !0
        }
        ;
        var ct = "resize.webflow orientationchange.webflow load.webflow"
          , Zt = "scroll.webflow " + ct;
        te.resize = Je(Ee, ct);
        te.scroll = Je(Ee, Zt);
        te.redraw = Je();
        function Je(i, g) {
            var m = []
              , O = {};
            return O.up = xe.throttle(function(K) {
                xe.each(m, function(T) {
                    T(K)
                })
            }),
            i && g && i.on(g, O.up),
            O.on = function(K) {
                typeof K == "function" && (xe.contains(m, K) || m.push(K))
            }
            ,
            O.off = function(K) {
                if (!arguments.length) {
                    m = [];
                    return
                }
                m = xe.filter(m, function(T) {
                    return T !== K
                })
            }
            ,
            O
        }
        te.location = function(i) {
            window.location = i
        }
        ;
        te.env() && (te.location = function() {}
        );
        te.ready = function() {
            Ue = !0,
            je ? Qt() : xe.each(Ne, ot),
            xe.each(Qe, ot),
            te.resize.up()
        }
        ;
        function ot(i) {
            Oe(i) && i()
        }
        function Qt() {
            je = !1,
            xe.each(We, st)
        }
        var qe;
        te.load = function(i) {
            qe.then(i)
        }
        ;
        function lt() {
            qe && (qe.reject(),
            Ee.off("load", qe.resolve)),
            qe = new Ce.Deferred,
            Ee.on("load", qe.resolve)
        }
        te.destroy = function(i) {
            i = i || {},
            je = !0,
            Ee.triggerHandler("__wf_destroy"),
            i.domready != null && (Ue = i.domready),
            xe.each(We, ut),
            te.resize.off(),
            te.scroll.off(),
            te.redraw.off(),
            Ne = [],
            Qe = [],
            qe.state() === "pending" && lt()
        }
        ;
        Ce(te.ready);
        lt();
        dt.exports = window.Webflow = te
    }
    );
    var pt = pe((ui,vt)=>{
        var ht = Te();
        ht.define("brand", vt.exports = function(i) {
            var g = {}, m = document, O = i("html"), K = i("body"), T = ".w-webflow-badge", C = window.location, M = /PhantomJS/i.test(navigator.userAgent), S = "fullscreenchange webkitfullscreenchange mozfullscreenchange msfullscreenchange", j;
            g.ready = function() {
                var z = O.attr("data-wf-status")
                  , P = O.attr("data-wf-domain") || "";
                /\.webflow\.io$/i.test(P) && C.hostname !== P && (z = !0),
                z && !M && (j = j || D(),
                B(),
                setTimeout(B, 500),
                i(m).off(S, ne).on(S, ne))
            }
            ;
            function ne() {
                var z = m.fullScreen || m.mozFullScreen || m.webkitIsFullScreen || m.msFullscreenElement || !!m.webkitFullscreenElement;
                i(j).attr("style", z ? "display: none !important;" : "")
            }
            function D() {
                var z = i('<a class="w-webflow-badge"></a>').attr("href", "https://webflow.com?utm_campaign=brandjs")
                  , P = i("<img>").attr("src", "https://d3e54v103j8qbb.cloudfront.net/img/webflow-badge-icon-d2.89e12c322e.svg").attr("alt", "").css({
                    marginRight: "4px",
                    width: "26px"
                })
                  , U = i("<img>").attr("src", "https://d3e54v103j8qbb.cloudfront.net/img/webflow-badge-text-d2.c82cec3b78.svg").attr("alt", "Made in Webflow");
                return z.append(P, U),
                z[0]
            }
            function B() {
                var z = K.children(T)
                  , P = z.length && z.get(0) === j
                  , U = ht.env("editor");
                if (P) {
                    U && z.remove();
                    return
                }
                z.length && z.remove(),
                U || K.append(j)
            }
            return g
        }
        )
    }
    );
    var wt = pe((fi,mt)=>{
        var jt = Te();
        jt.define("focus-visible", mt.exports = function() {
            function i(m) {
                var O = !0
                  , K = !1
                  , T = null
                  , C = {
                    text: !0,
                    search: !0,
                    url: !0,
                    tel: !0,
                    email: !0,
                    password: !0,
                    number: !0,
                    date: !0,
                    month: !0,
                    week: !0,
                    time: !0,
                    datetime: !0,
                    "datetime-local": !0
                };
                function M(L) {
                    return !!(L && L !== document && L.nodeName !== "HTML" && L.nodeName !== "BODY" && "classList"in L && "contains"in L.classList)
                }
                function S(L) {
                    var Z = L.type
                      , I = L.tagName;
                    return !!(I === "INPUT" && C[Z] && !L.readOnly || I === "TEXTAREA" && !L.readOnly || L.isContentEditable)
                }
                function j(L) {
                    L.getAttribute("data-wf-focus-visible") || L.setAttribute("data-wf-focus-visible", "true")
                }
                function ne(L) {
                    L.getAttribute("data-wf-focus-visible") && L.removeAttribute("data-wf-focus-visible")
                }
                function D(L) {
                    L.metaKey || L.altKey || L.ctrlKey || (M(m.activeElement) && j(m.activeElement),
                    O = !0)
                }
                function B() {
                    O = !1
                }
                function z(L) {
                    M(L.target) && (O || S(L.target)) && j(L.target)
                }
                function P(L) {
                    M(L.target) && L.target.hasAttribute("data-wf-focus-visible") && (K = !0,
                    window.clearTimeout(T),
                    T = window.setTimeout(function() {
                        K = !1
                    }, 100),
                    ne(L.target))
                }
                function U() {
                    document.visibilityState === "hidden" && (K && (O = !0),
                    $())
                }
                function $() {
                    document.addEventListener("mousemove", R),
                    document.addEventListener("mousedown", R),
                    document.addEventListener("mouseup", R),
                    document.addEventListener("pointermove", R),
                    document.addEventListener("pointerdown", R),
                    document.addEventListener("pointerup", R),
                    document.addEventListener("touchmove", R),
                    document.addEventListener("touchstart", R),
                    document.addEventListener("touchend", R)
                }
                function H() {
                    document.removeEventListener("mousemove", R),
                    document.removeEventListener("mousedown", R),
                    document.removeEventListener("mouseup", R),
                    document.removeEventListener("pointermove", R),
                    document.removeEventListener("pointerdown", R),
                    document.removeEventListener("pointerup", R),
                    document.removeEventListener("touchmove", R),
                    document.removeEventListener("touchstart", R),
                    document.removeEventListener("touchend", R)
                }
                function R(L) {
                    L.target.nodeName && L.target.nodeName.toLowerCase() === "html" || (O = !1,
                    H())
                }
                document.addEventListener("keydown", D, !0),
                document.addEventListener("mousedown", B, !0),
                document.addEventListener("pointerdown", B, !0),
                document.addEventListener("touchstart", B, !0),
                document.addEventListener("visibilitychange", U, !0),
                $(),
                m.addEventListener("focus", z, !0),
                m.addEventListener("blur", P, !0)
            }
            function g() {
                if (typeof document < "u")
                    try {
                        document.querySelector(":focus-visible")
                    } catch {
                        i(document)
                    }
            }
            return {
                ready: g
            }
        }
        )
    }
    );
    var yt = pe((ci,bt)=>{
        var gt = Te();
        gt.define("focus", bt.exports = function() {
            var i = []
              , g = !1;
            function m(C) {
                g && (C.preventDefault(),
                C.stopPropagation(),
                C.stopImmediatePropagation(),
                i.unshift(C))
            }
            function O(C) {
                var M = C.target
                  , S = M.tagName;
                return /^a$/i.test(S) && M.href != null || /^(button|textarea)$/i.test(S) && M.disabled !== !0 || /^input$/i.test(S) && /^(button|reset|submit|radio|checkbox)$/i.test(M.type) && !M.disabled || !/^(button|input|textarea|select|a)$/i.test(S) && !Number.isNaN(Number.parseFloat(M.tabIndex)) || /^audio$/i.test(S) || /^video$/i.test(S) && M.controls === !0
            }
            function K(C) {
                O(C) && (g = !0,
                setTimeout(()=>{
                    for (g = !1,
                    C.target.focus(); i.length > 0; ) {
                        var M = i.pop();
                        M.target.dispatchEvent(new MouseEvent(M.type,M))
                    }
                }
                , 0))
            }
            function T() {
                typeof document < "u" && document.body.hasAttribute("data-wf-focus-within") && gt.env.safari && (document.addEventListener("mousedown", K, !0),
                document.addEventListener("mouseup", m, !0),
                document.addEventListener("click", m, !0))
            }
            return {
                ready: T
            }
        }
        )
    }
    );
    var Ve = pe((li,Et)=>{
        "use strict";
        var et = window.jQuery
          , Se = {}
          , He = []
          , xt = ".w-ix"
          , Xe = {
            reset: function(i, g) {
                g.__wf_intro = null
            },
            intro: function(i, g) {
                g.__wf_intro || (g.__wf_intro = !0,
                et(g).triggerHandler(Se.types.INTRO))
            },
            outro: function(i, g) {
                g.__wf_intro && (g.__wf_intro = null,
                et(g).triggerHandler(Se.types.OUTRO))
            }
        };
        Se.triggers = {};
        Se.types = {
            INTRO: "w-ix-intro" + xt,
            OUTRO: "w-ix-outro" + xt
        };
        Se.init = function() {
            for (var i = He.length, g = 0; g < i; g++) {
                var m = He[g];
                m[0](0, m[1])
            }
            He = [],
            et.extend(Se.triggers, Xe)
        }
        ;
        Se.async = function() {
            for (var i in Xe) {
                var g = Xe[i];
                Xe.hasOwnProperty(i) && (Se.triggers[i] = function(m, O) {
                    He.push([g, O])
                }
                )
            }
        }
        ;
        Se.async();
        Et.exports = Se
    }
    );
    var _t = pe((di,kt)=>{
        var ke = Te()
          , Ke = Ve();
        ke.define("ix", kt.exports = function(i, g) {
            var m = {}, O, K = i(window), T = ".w-ix", C = i.tram, M = ke.env, S = M(), j = M.chrome && M.chrome < 35, ne = "none 0s ease 0s", D = i(), B = {}, z = [], P = [], U = [], $, H = 1, R = {
                tabs: ".w-tab-link, .w-tab-pane",
                dropdown: ".w-dropdown",
                slider: ".w-slide",
                navbar: ".w-nav"
            };
            m.init = function(v) {
                setTimeout(function() {
                    L(v)
                }, 1)
            }
            ,
            m.preview = function() {
                O = !1,
                H = 100,
                setTimeout(function() {
                    L(window.__wf_ix)
                }, 1)
            }
            ,
            m.design = function() {
                O = !0,
                m.destroy()
            }
            ,
            m.destroy = function() {
                $ = !0,
                D.each(ue),
                ke.scroll.off(ae),
                Ke.async(),
                z = [],
                P = [],
                U = []
            }
            ,
            m.ready = function() {
                if (S)
                    return M("design") ? m.design() : m.preview();
                B && $ && ($ = !1,
                Z())
            }
            ,
            m.run = k,
            m.style = S ? w : A;
            function L(v) {
                v && (B = {},
                g.each(v, function(p) {
                    B[p.slug] = p.value
                }),
                Z())
            }
            function Z() {
                I(),
                Ke.init(),
                ke.redraw.up()
            }
            function I() {
                var v = i("[data-ix]");
                v.length && (v.each(ue),
                v.each(Y),
                z.length && (ke.scroll.on(ae),
                setTimeout(ae, 1)),
                P.length && ke.load(_e),
                U.length && setTimeout(le, H))
            }
            function Y(v, p) {
                var f = i(p)
                  , b = f.attr("data-ix")
                  , t = B[b];
                if (t) {
                    var n = t.triggers;
                    n && (m.style(f, t.style),
                    g.each(n, function(r) {
                        var o = {}
                          , h = r.type
                          , _ = r.stepsB && r.stepsB.length;
                        function x() {
                            k(r, f, {
                                group: "A"
                            })
                        }
                        function W() {
                            k(r, f, {
                                group: "B"
                            })
                        }
                        if (h === "load") {
                            r.preload && !S ? P.push(x) : U.push(x);
                            return
                        }
                        if (h === "click") {
                            f.on("click" + T, function(re) {
                                ke.validClick(re.currentTarget) && (f.attr("href") === "#" && re.preventDefault(),
                                k(r, f, {
                                    group: o.clicked ? "B" : "A"
                                }),
                                _ && (o.clicked = !o.clicked))
                            }),
                            D = D.add(f);
                            return
                        }
                        if (h === "hover") {
                            f.on("mouseenter" + T, x),
                            f.on("mouseleave" + T, W),
                            D = D.add(f);
                            return
                        }
                        if (h === "scroll") {
                            z.push({
                                el: f,
                                trigger: r,
                                state: {
                                    active: !1
                                },
                                offsetTop: oe(r.offsetTop),
                                offsetBot: oe(r.offsetBot)
                            });
                            return
                        }
                        var J = R[h];
                        if (J) {
                            var X = f.closest(J);
                            X.on(Ke.types.INTRO, x).on(Ke.types.OUTRO, W),
                            D = D.add(X);
                            return
                        }
                    }))
                }
            }
            function oe(v) {
                if (!v)
                    return 0;
                v = String(v);
                var p = parseInt(v, 10);
                return p !== p ? 0 : (v.indexOf("%") > 0 && (p /= 100,
                p >= 1 && (p = .999)),
                p)
            }
            function ue(v, p) {
                i(p).off(T)
            }
            function ae() {
                for (var v = K.scrollTop(), p = K.height(), f = z.length, b = 0; b < f; b++) {
                    var t = z[b]
                      , n = t.el
                      , r = t.trigger
                      , o = r.stepsB && r.stepsB.length
                      , h = t.state
                      , _ = n.offset().top
                      , x = n.outerHeight()
                      , W = t.offsetTop
                      , J = t.offsetBot;
                    W < 1 && W > 0 && (W *= p),
                    J < 1 && J > 0 && (J *= p);
                    var X = _ + x - W >= v && _ + J <= v + p;
                    X !== h.active && (X === !1 && !o || (h.active = X,
                    k(r, n, {
                        group: X ? "A" : "B"
                    })))
                }
            }
            function _e() {
                for (var v = P.length, p = 0; p < v; p++)
                    P[p]()
            }
            function le() {
                for (var v = U.length, p = 0; p < v; p++)
                    U[p]()
            }
            function k(v, p, f, b) {
                f = f || {};
                var t = f.done
                  , n = v.preserve3d;
                if (O && !f.force)
                    return;
                var r = f.group || "A"
                  , o = v["loop" + r]
                  , h = v["steps" + r];
                if (!h || !h.length)
                    return;
                if (h.length < 2 && (o = !1),
                !b) {
                    var _ = v.selector;
                    _ && (v.descend ? p = p.find(_) : v.siblings ? p = p.siblings(_) : p = i(_),
                    S && p.attr("data-ix-affect", 1)),
                    j && p.addClass("w-ix-emptyfix"),
                    n && p.css("transform-style", "preserve-3d")
                }
                for (var x = C(p), W = {
                    omit3d: !n
                }, J = 0; J < h.length; J++)
                    d(x, h[J], W);
                function X() {
                    if (o)
                        return k(v, p, f, !0);
                    W.width === "auto" && x.set({
                        width: "auto"
                    }),
                    W.height === "auto" && x.set({
                        height: "auto"
                    }),
                    t && t()
                }
                W.start ? x.then(X) : X()
            }
            function d(v, p, f) {
                var b = "add"
                  , t = "start";
                f.start && (b = t = "then");
                var n = p.transition;
                if (n) {
                    n = n.split(",");
                    for (var r = 0; r < n.length; r++) {
                        var o = n[r];
                        v[b](o)
                    }
                }
                var h = E(p, f) || {};
                if (h.width != null && (f.width = h.width),
                h.height != null && (f.height = h.height),
                n == null) {
                    f.start ? v.then(function() {
                        var W = this.queue;
                        this.set(h),
                        h.display && (v.redraw(),
                        ke.redraw.up()),
                        this.queue = W,
                        this.next()
                    }) : (v.set(h),
                    h.display && (v.redraw(),
                    ke.redraw.up()));
                    var _ = h.wait;
                    _ != null && (v.wait(_),
                    f.start = !0)
                } else {
                    if (h.display) {
                        var x = h.display;
                        delete h.display,
                        f.start ? v.then(function() {
                            var W = this.queue;
                            this.set({
                                display: x
                            }).redraw(),
                            ke.redraw.up(),
                            this.queue = W,
                            this.next()
                        }) : (v.set({
                            display: x
                        }).redraw(),
                        ke.redraw.up())
                    }
                    v[t](h),
                    f.start = !0
                }
            }
            function w(v, p) {
                var f = C(v);
                if (!i.isEmptyObject(p)) {
                    v.css("transition", "");
                    var b = v.css("transition");
                    b === ne && (b = f.upstream = null),
                    f.upstream = ne,
                    f.set(E(p)),
                    f.upstream = b
                }
            }
            function A(v, p) {
                C(v).set(E(p))
            }
            function E(v, p) {
                var f = p && p.omit3d
                  , b = {}
                  , t = !1;
                for (var n in v)
                    n !== "transition" && n !== "keysort" && (f && (n === "z" || n === "rotateX" || n === "rotateY" || n === "scaleZ") || (b[n] = v[n],
                    t = !0));
                return t ? b : null
            }
            return m
        }
        )
    }
    );
    var At = pe((hi,Lt)=>{
        var De = Te();
        De.define("links", Lt.exports = function(i, g) {
            var m = {}, O = i(window), K, T = De.env(), C = window.location, M = document.createElement("a"), S = "w--current", j = /index\.(html|php)$/, ne = /\/$/, D, B;
            m.ready = m.design = m.preview = z;
            function z() {
                K = T && De.env("design"),
                B = De.env("slug") || C.pathname || "",
                De.scroll.off(U),
                D = [];
                for (var H = document.links, R = 0; R < H.length; ++R)
                    P(H[R]);
                D.length && (De.scroll.on(U),
                U())
            }
            function P(H) {
                var R = K && H.getAttribute("href-disabled") || H.getAttribute("href");
                if (M.href = R,
                !(R.indexOf(":") >= 0)) {
                    var L = i(H);
                    if (M.hash.length > 1 && M.host + M.pathname === C.host + C.pathname) {
                        if (!/^#[a-zA-Z0-9\-\_]+$/.test(M.hash))
                            return;
                        var Z = i(M.hash);
                        Z.length && D.push({
                            link: L,
                            sec: Z,
                            active: !1
                        });
                        return
                    }
                    if (!(R === "#" || R === "")) {
                        var I = M.href === C.href || R === B || j.test(R) && ne.test(B);
                        $(L, S, I)
                    }
                }
            }
            function U() {
                var H = O.scrollTop()
                  , R = O.height();
                g.each(D, function(L) {
                    var Z = L.link
                      , I = L.sec
                      , Y = I.offset().top
                      , oe = I.outerHeight()
                      , ue = R * .5
                      , ae = I.is(":visible") && Y + oe - ue >= H && Y + ue <= H + R;
                    L.active !== ae && (L.active = ae,
                    $(Z, S, ae))
                })
            }
            function $(H, R, L) {
                var Z = H.hasClass(R);
                L && Z || !L && !Z || (L ? H.addClass(R) : H.removeClass(R))
            }
            return m
        }
        )
    }
    );
    var Tt = pe((vi,Ot)=>{
        var $e = Te();
        $e.define("scroll", Ot.exports = function(i) {
            var g = {
                WF_CLICK_EMPTY: "click.wf-empty-link",
                WF_CLICK_SCROLL: "click.wf-scroll"
            }
              , m = window.location
              , O = P() ? null : window.history
              , K = i(window)
              , T = i(document)
              , C = i(document.body)
              , M = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || function(k) {
                window.setTimeout(k, 15)
            }
              , S = $e.env("editor") ? ".w-editor-body" : "body"
              , j = "header, " + S + " > .header, " + S + " > .w-nav:not([data-no-scroll])"
              , ne = 'a[href="#"]'
              , D = 'a[href*="#"]:not(.w-tab-link):not(' + ne + ")"
              , B = '.wf-force-outline-none[tabindex="-1"]:focus{outline:none;}'
              , z = document.createElement("style");
            z.appendChild(document.createTextNode(B));
            function P() {
                try {
                    return !!window.frameElement
                } catch {
                    return !0
                }
            }
            var U = /^#[a-zA-Z0-9][\w:.-]*$/;
            function $(k) {
                return U.test(k.hash) && k.host + k.pathname === m.host + m.pathname
            }
            let H = typeof window.matchMedia == "function" && window.matchMedia("(prefers-reduced-motion: reduce)");
            function R() {
                return document.body.getAttribute("data-wf-scroll-motion") === "none" || H.matches
            }
            function L(k, d) {
                var w;
                switch (d) {
                case "add":
                    w = k.attr("tabindex"),
                    w ? k.attr("data-wf-tabindex-swap", w) : k.attr("tabindex", "-1");
                    break;
                case "remove":
                    w = k.attr("data-wf-tabindex-swap"),
                    w ? (k.attr("tabindex", w),
                    k.removeAttr("data-wf-tabindex-swap")) : k.removeAttr("tabindex");
                    break
                }
                k.toggleClass("wf-force-outline-none", d === "add")
            }
            function Z(k) {
                var d = k.currentTarget;
                if (!($e.env("design") || window.$.mobile && /(?:^|\s)ui-link(?:$|\s)/.test(d.className))) {
                    var w = $(d) ? d.hash : "";
                    if (w !== "") {
                        var A = i(w);
                        A.length && (k && (k.preventDefault(),
                        k.stopPropagation()),
                        I(w, k),
                        window.setTimeout(function() {
                            Y(A, function() {
                                L(A, "add"),
                                A.get(0).focus({
                                    preventScroll: !0
                                }),
                                L(A, "remove")
                            })
                        }, k ? 0 : 300))
                    }
                }
            }
            function I(k) {
                if (m.hash !== k && O && O.pushState && !($e.env.chrome && m.protocol === "file:")) {
                    var d = O.state && O.state.hash;
                    d !== k && O.pushState({
                        hash: k
                    }, "", k)
                }
            }
            function Y(k, d) {
                var w = K.scrollTop()
                  , A = oe(k);
                if (w !== A) {
                    var E = ue(k, w, A)
                      , v = Date.now()
                      , p = function() {
                        var f = Date.now() - v;
                        window.scroll(0, ae(w, A, f, E)),
                        f <= E ? M(p) : typeof d == "function" && d()
                    };
                    M(p)
                }
            }
            function oe(k) {
                var d = i(j)
                  , w = d.css("position") === "fixed" ? d.outerHeight() : 0
                  , A = k.offset().top - w;
                if (k.data("scroll") === "mid") {
                    var E = K.height() - w
                      , v = k.outerHeight();
                    v < E && (A -= Math.round((E - v) / 2))
                }
                return A
            }
            function ue(k, d, w) {
                if (R())
                    return 0;
                var A = 1;
                return C.add(k).each(function(E, v) {
                    var p = parseFloat(v.getAttribute("data-scroll-time"));
                    !isNaN(p) && p >= 0 && (A = p)
                }),
                (472.143 * Math.log(Math.abs(d - w) + 125) - 2e3) * A
            }
            function ae(k, d, w, A) {
                return w > A ? d : k + (d - k) * _e(w / A)
            }
            function _e(k) {
                return k < .5 ? 4 * k * k * k : (k - 1) * (2 * k - 2) * (2 * k - 2) + 1
            }
            function le() {
                var {WF_CLICK_EMPTY: k, WF_CLICK_SCROLL: d} = g;
                T.on(d, D, Z),
                T.on(k, ne, function(w) {
                    w.preventDefault()
                }),
                document.head.insertBefore(z, document.head.firstChild)
            }
            return {
                ready: le
            }
        }
        )
    }
    );
    var Ft = pe((pi,St)=>{
        var Jt = Te();
        Jt.define("touch", St.exports = function(i) {
            var g = {}
              , m = window.getSelection;
            i.event.special.tap = {
                bindType: "click",
                delegateType: "click"
            },
            g.init = function(T) {
                return T = typeof T == "string" ? i(T).get(0) : T,
                T ? new O(T) : null
            }
            ;
            function O(T) {
                var C = !1, M = !1, S = Math.min(Math.round(window.innerWidth * .04), 40), j, ne;
                T.addEventListener("touchstart", D, !1),
                T.addEventListener("touchmove", B, !1),
                T.addEventListener("touchend", z, !1),
                T.addEventListener("touchcancel", P, !1),
                T.addEventListener("mousedown", D, !1),
                T.addEventListener("mousemove", B, !1),
                T.addEventListener("mouseup", z, !1),
                T.addEventListener("mouseout", P, !1);
                function D($) {
                    var H = $.touches;
                    H && H.length > 1 || (C = !0,
                    H ? (M = !0,
                    j = H[0].clientX) : j = $.clientX,
                    ne = j)
                }
                function B($) {
                    if (C) {
                        if (M && $.type === "mousemove") {
                            $.preventDefault(),
                            $.stopPropagation();
                            return
                        }
                        var H = $.touches
                          , R = H ? H[0].clientX : $.clientX
                          , L = R - ne;
                        ne = R,
                        Math.abs(L) > S && m && String(m()) === "" && (K("swipe", $, {
                            direction: L > 0 ? "right" : "left"
                        }),
                        P())
                    }
                }
                function z($) {
                    if (C && (C = !1,
                    M && $.type === "mouseup")) {
                        $.preventDefault(),
                        $.stopPropagation(),
                        M = !1;
                        return
                    }
                }
                function P() {
                    C = !1
                }
                function U() {
                    T.removeEventListener("touchstart", D, !1),
                    T.removeEventListener("touchmove", B, !1),
                    T.removeEventListener("touchend", z, !1),
                    T.removeEventListener("touchcancel", P, !1),
                    T.removeEventListener("mousedown", D, !1),
                    T.removeEventListener("mousemove", B, !1),
                    T.removeEventListener("mouseup", z, !1),
                    T.removeEventListener("mouseout", P, !1),
                    T = null
                }
                this.destroy = U
            }
            function K(T, C, M) {
                var S = i.Event(T, {
                    originalEvent: C
                });
                i(C.target).trigger(S, M)
            }
            return g.instance = g.init(document),
            g
        }
        )
    }
    );
    var Ct = pe((mi,Mt)=>{
        var tt = Te();
        tt.define("forms", Mt.exports = function(i, g) {
            var m = {}, O = i(document), K, T = window.location, C = window.XDomainRequest && !window.atob, M = ".w-form", S, j = /e(-)?mail/i, ne = /^\S+@\S+$/, D = window.alert, B = tt.env(), z, P, U, $ = /list-manage[1-9]?.com/i, H = g.debounce(function() {
                D("Oops! This page has improperly configured forms. Please contact your website administrator to fix this issue.")
            }, 100);
            m.ready = m.design = m.preview = function() {
                R(),
                !B && !z && Z()
            }
            ;
            function R() {
                S = i("html").attr("data-wf-site"),
                P = "https://webflow.com/api/v1/form/" + S,
                C && P.indexOf("https://webflow.com") >= 0 && (P = P.replace("https://webflow.com", "https://formdata.webflow.com")),
                U = `${P}/signFile`,
                K = i(M + " form"),
                K.length && K.each(L)
            }
            function L(f, b) {
                var t = i(b)
                  , n = i.data(b, M);
                n || (n = i.data(b, M, {
                    form: t
                })),
                I(n);
                var r = t.closest("div.w-form");
                n.done = r.find("> .w-form-done"),
                n.fail = r.find("> .w-form-fail"),
                n.fileUploads = r.find(".w-file-upload"),
                n.fileUploads.each(function(_) {
                    E(_, n)
                });
                var o = n.form.attr("aria-label") || n.form.attr("data-name") || "Form";
                n.done.attr("aria-label") || n.form.attr("aria-label", o),
                n.done.attr("tabindex", "-1"),
                n.done.attr("role", "region"),
                n.done.attr("aria-label") || n.done.attr("aria-label", o + " success"),
                n.fail.attr("tabindex", "-1"),
                n.fail.attr("role", "region"),
                n.fail.attr("aria-label") || n.fail.attr("aria-label", o + " failure");
                var h = n.action = t.attr("action");
                if (n.handler = null,
                n.redirect = t.attr("data-redirect"),
                $.test(h)) {
                    n.handler = d;
                    return
                }
                if (!h) {
                    if (S) {
                        n.handler = k;
                        return
                    }
                    H()
                }
            }
            function Z() {
                z = !0,
                O.on("submit", M + " form", function(_) {
                    var x = i.data(this, M);
                    x.handler && (x.evt = _,
                    x.handler(x))
                });
                let f = ".w-checkbox-input"
                  , b = ".w-radio-input"
                  , t = "w--redirected-checked"
                  , n = "w--redirected-focus"
                  , r = "w--redirected-focus-visible"
                  , o = ":focus-visible, [data-wf-focus-visible]"
                  , h = [["checkbox", f], ["radio", b]];
                O.on("change", M + ' form input[type="checkbox"]:not(' + f + ")", _=>{
                    i(_.target).siblings(f).toggleClass(t)
                }
                ),
                O.on("change", M + ' form input[type="radio"]', _=>{
                    i(`input[name="${_.target.name}"]:not(${f})`).map((W,J)=>i(J).siblings(b).removeClass(t));
                    let x = i(_.target);
                    x.hasClass("w-radio-input") || x.siblings(b).addClass(t)
                }
                ),
                h.forEach(([_,x])=>{
                    O.on("focus", M + ` form input[type="${_}"]:not(` + x + ")", W=>{
                        i(W.target).siblings(x).addClass(n),
                        i(W.target).filter(o).siblings(x).addClass(r)
                    }
                    ),
                    O.on("blur", M + ` form input[type="${_}"]:not(` + x + ")", W=>{
                        i(W.target).siblings(x).removeClass(`${n} ${r}`)
                    }
                    )
                }
                )
            }
            function I(f) {
                var b = f.btn = f.form.find(':input[type="submit"]');
                f.wait = f.btn.attr("data-wait") || null,
                f.success = !1,
                b.prop("disabled", !1),
                f.label && b.val(f.label)
            }
            function Y(f) {
                var b = f.btn
                  , t = f.wait;
                b.prop("disabled", !0),
                t && (f.label = b.val(),
                b.val(t))
            }
            function oe(f, b) {
                var t = null;
                return b = b || {},
                f.find(':input:not([type="submit"]):not([type="file"])').each(function(n, r) {
                    var o = i(r)
                      , h = o.attr("type")
                      , _ = o.attr("data-name") || o.attr("name") || "Field " + (n + 1)
                      , x = o.val();
                    if (h === "checkbox")
                        x = o.is(":checked");
                    else if (h === "radio") {
                        if (b[_] === null || typeof b[_] == "string")
                            return;
                        x = f.find('input[name="' + o.attr("name") + '"]:checked').val() || null
                    }
                    typeof x == "string" && (x = i.trim(x)),
                    b[_] = x,
                    t = t || le(o, h, _, x)
                }),
                t
            }
            function ue(f) {
                var b = {};
                return f.find(':input[type="file"]').each(function(t, n) {
                    var r = i(n)
                      , o = r.attr("data-name") || r.attr("name") || "File " + (t + 1)
                      , h = r.attr("data-value");
                    typeof h == "string" && (h = i.trim(h)),
                    b[o] = h
                }),
                b
            }
            let ae = {
                _mkto_trk: "marketo"
            };
            function _e() {
                return document.cookie.split("; ").reduce(function(b, t) {
                    let n = t.split("=")
                      , r = n[0];
                    if (r in ae) {
                        let o = ae[r]
                          , h = n.slice(1).join("=");
                        b[o] = h
                    }
                    return b
                }, {})
            }
            function le(f, b, t, n) {
                var r = null;
                return b === "password" ? r = "Passwords cannot be submitted." : f.attr("required") ? n ? j.test(f.attr("type")) && (ne.test(n) || (r = "Please enter a valid email address for: " + t)) : r = "Please fill out the required field: " + t : t === "g-recaptcha-response" && !n && (r = "Please confirm you\u2019re not a robot."),
                r
            }
            function k(f) {
                A(f),
                w(f)
            }
            function d(f) {
                I(f);
                var b = f.form
                  , t = {};
                if (/^https/.test(T.href) && !/^https/.test(f.action)) {
                    b.attr("method", "post");
                    return
                }
                A(f);
                var n = oe(b, t);
                if (n)
                    return D(n);
                Y(f);
                var r;
                g.each(t, function(x, W) {
                    j.test(W) && (t.EMAIL = x),
                    /^((full[ _-]?)?name)$/i.test(W) && (r = x),
                    /^(first[ _-]?name)$/i.test(W) && (t.FNAME = x),
                    /^(last[ _-]?name)$/i.test(W) && (t.LNAME = x)
                }),
                r && !t.FNAME && (r = r.split(" "),
                t.FNAME = r[0],
                t.LNAME = t.LNAME || r[1]);
                var o = f.action.replace("/post?", "/post-json?") + "&c=?"
                  , h = o.indexOf("u=") + 2;
                h = o.substring(h, o.indexOf("&", h));
                var _ = o.indexOf("id=") + 3;
                _ = o.substring(_, o.indexOf("&", _)),
                t["b_" + h + "_" + _] = "",
                i.ajax({
                    url: o,
                    data: t,
                    dataType: "jsonp"
                }).done(function(x) {
                    f.success = x.result === "success" || /already/.test(x.msg),
                    f.success || console.info("MailChimp error: " + x.msg),
                    w(f)
                }).fail(function() {
                    w(f)
                })
            }
            function w(f) {
                var b = f.form
                  , t = f.redirect
                  , n = f.success;
                if (n && t) {
                    tt.location(t);
                    return
                }
                f.done.toggle(n),
                f.fail.toggle(!n),
                n ? f.done.focus() : f.fail.focus(),
                b.toggle(!n),
                I(f)
            }
            function A(f) {
                f.evt && f.evt.preventDefault(),
                f.evt = null
            }
            function E(f, b) {
                if (!b.fileUploads || !b.fileUploads[f])
                    return;
                var t, n = i(b.fileUploads[f]), r = n.find("> .w-file-upload-default"), o = n.find("> .w-file-upload-uploading"), h = n.find("> .w-file-upload-success"), _ = n.find("> .w-file-upload-error"), x = r.find(".w-file-upload-input"), W = r.find(".w-file-upload-label"), J = W.children(), X = _.find(".w-file-upload-error-msg"), re = h.find(".w-file-upload-file"), we = h.find(".w-file-remove-link"), ge = re.find(".w-file-upload-file-name"), Le = X.attr("data-w-size-error"), de = X.attr("data-w-type-error"), Me = X.attr("data-w-generic-error");
                if (B || W.on("click keydown", function(s) {
                    s.type === "keydown" && s.which !== 13 && s.which !== 32 || (s.preventDefault(),
                    x.click())
                }),
                W.find(".w-icon-file-upload-icon").attr("aria-hidden", "true"),
                we.find(".w-icon-file-upload-remove").attr("aria-hidden", "true"),
                B)
                    x.on("click", function(s) {
                        s.preventDefault()
                    }),
                    W.on("click", function(s) {
                        s.preventDefault()
                    }),
                    J.on("click", function(s) {
                        s.preventDefault()
                    });
                else {
                    we.on("click keydown", function(s) {
                        if (s.type === "keydown") {
                            if (s.which !== 13 && s.which !== 32)
                                return;
                            s.preventDefault()
                        }
                        x.removeAttr("data-value"),
                        x.val(""),
                        ge.html(""),
                        r.toggle(!0),
                        h.toggle(!1),
                        W.focus()
                    }),
                    x.on("change", function(s) {
                        t = s.target && s.target.files && s.target.files[0],
                        t && (r.toggle(!1),
                        _.toggle(!1),
                        o.toggle(!0),
                        o.focus(),
                        ge.text(t.name),
                        c() || Y(b),
                        b.fileUploads[f].uploading = !0,
                        v(t, a))
                    });
                    var Ie = W.outerHeight();
                    x.height(Ie),
                    x.width(1)
                }
                function e(s) {
                    var l = s.responseJSON && s.responseJSON.msg
                      , F = Me;
                    typeof l == "string" && l.indexOf("InvalidFileTypeError") === 0 ? F = de : typeof l == "string" && l.indexOf("MaxFileSizeError") === 0 && (F = Le),
                    X.text(F),
                    x.removeAttr("data-value"),
                    x.val(""),
                    o.toggle(!1),
                    r.toggle(!0),
                    _.toggle(!0),
                    _.focus(),
                    b.fileUploads[f].uploading = !1,
                    c() || I(b)
                }
                function a(s, l) {
                    if (s)
                        return e(s);
                    var F = l.fileName
                      , N = l.postData
                      , ie = l.fileId
                      , y = l.s3Url;
                    x.attr("data-value", ie),
                    p(y, N, t, F, u)
                }
                function u(s) {
                    if (s)
                        return e(s);
                    o.toggle(!1),
                    h.css("display", "inline-block"),
                    h.focus(),
                    b.fileUploads[f].uploading = !1,
                    c() || I(b)
                }
                function c() {
                    var s = b.fileUploads && b.fileUploads.toArray() || [];
                    return s.some(function(l) {
                        return l.uploading
                    })
                }
            }
            function v(f, b) {
                var t = new URLSearchParams({
                    name: f.name,
                    size: f.size
                });
                i.ajax({
                    type: "GET",
                    url: `${U}?${t}`,
                    crossDomain: !0
                }).done(function(n) {
                    b(null, n)
                }).fail(function(n) {
                    b(n)
                })
            }
            function p(f, b, t, n, r) {
                var o = new FormData;
                for (var h in b)
                    o.append(h, b[h]);
                o.append("file", t, n),
                i.ajax({
                    type: "POST",
                    url: f,
                    data: o,
                    processData: !1,
                    contentType: !1
                }).done(function() {
                    r(null)
                }).fail(function(_) {
                    r(_)
                })
            }
            return m
        }
        )
    }
    );
    var Wt = pe((wi,It)=>{
        "use strict";
        var it = Ve();
        function Rt(i, g) {
            var m = document.createEvent("CustomEvent");
            m.initCustomEvent(g, !0, !0, null),
            i.dispatchEvent(m)
        }
        var ei = window.jQuery
          , Ye = {}
          , qt = ".w-ix"
          , ti = {
            reset: function(i, g) {
                it.triggers.reset(i, g)
            },
            intro: function(i, g) {
                it.triggers.intro(i, g),
                Rt(g, "COMPONENT_ACTIVE")
            },
            outro: function(i, g) {
                it.triggers.outro(i, g),
                Rt(g, "COMPONENT_INACTIVE")
            }
        };
        Ye.triggers = {};
        Ye.types = {
            INTRO: "w-ix-intro" + qt,
            OUTRO: "w-ix-outro" + qt
        };
        ei.extend(Ye.triggers, ti);
        It.exports = Ye
    }
    );
    var zt = pe((gi,Dt)=>{
        var Re = Te()
          , ii = Wt()
          , Fe = {
            ARROW_LEFT: 37,
            ARROW_UP: 38,
            ARROW_RIGHT: 39,
            ARROW_DOWN: 40,
            SPACE: 32,
            ENTER: 13,
            HOME: 36,
            END: 35
        }
          , Nt = 'a[href], area[href], [role="button"], input, select, textarea, button, iframe, object, embed, *[tabindex], *[contenteditable]';
        Re.define("slider", Dt.exports = function(i, g) {
            var m = {}, O = i.tram, K = i(document), T, C, M = Re.env(), S = ".w-slider", j = '<div class="w-slider-dot" data-wf-ignore />', ne = '<div aria-live="off" aria-atomic="true" class="w-slider-aria-label" data-wf-ignore />', D = "w-slider-force-show", B = ii.triggers, z, P = !1;
            m.ready = function() {
                C = Re.env("design"),
                U()
            }
            ,
            m.design = function() {
                C = !0,
                setTimeout(U, 1e3)
            }
            ,
            m.preview = function() {
                C = !1,
                U()
            }
            ,
            m.redraw = function() {
                P = !0,
                U(),
                P = !1
            }
            ,
            m.destroy = $;
            function U() {
                T = K.find(S),
                T.length && (T.each(L),
                !z && ($(),
                H()))
            }
            function $() {
                Re.resize.off(R),
                Re.redraw.off(m.redraw)
            }
            function H() {
                Re.resize.on(R),
                Re.redraw.on(m.redraw)
            }
            function R() {
                T.filter(":visible").each(E)
            }
            function L(t, n) {
                var r = i(n)
                  , o = i.data(n, S);
                o || (o = i.data(n, S, {
                    index: 0,
                    depth: 1,
                    hasFocus: {
                        keyboard: !1,
                        mouse: !1
                    },
                    el: r,
                    config: {}
                })),
                o.mask = r.children(".w-slider-mask"),
                o.left = r.children(".w-slider-arrow-left"),
                o.right = r.children(".w-slider-arrow-right"),
                o.nav = r.children(".w-slider-nav"),
                o.slides = o.mask.children(".w-slide"),
                o.slides.each(B.reset),
                P && (o.maskWidth = 0),
                r.attr("role") === void 0 && r.attr("role", "region"),
                r.attr("aria-label") === void 0 && r.attr("aria-label", "carousel");
                var h = o.mask.attr("id");
                if (h || (h = "w-slider-mask-" + t,
                o.mask.attr("id", h)),
                !C && !o.ariaLiveLabel && (o.ariaLiveLabel = i(ne).appendTo(o.mask)),
                o.left.attr("role", "button"),
                o.left.attr("tabindex", "0"),
                o.left.attr("aria-controls", h),
                o.left.attr("aria-label") === void 0 && o.left.attr("aria-label", "previous slide"),
                o.right.attr("role", "button"),
                o.right.attr("tabindex", "0"),
                o.right.attr("aria-controls", h),
                o.right.attr("aria-label") === void 0 && o.right.attr("aria-label", "next slide"),
                !O.support.transform) {
                    o.left.hide(),
                    o.right.hide(),
                    o.nav.hide(),
                    z = !0;
                    return
                }
                o.el.off(S),
                o.left.off(S),
                o.right.off(S),
                o.nav.off(S),
                Z(o),
                C ? (o.el.on("setting" + S, d(o)),
                k(o),
                o.hasTimer = !1) : (o.el.on("swipe" + S, d(o)),
                o.left.on("click" + S, ue(o)),
                o.right.on("click" + S, ae(o)),
                o.left.on("keydown" + S, oe(o, ue)),
                o.right.on("keydown" + S, oe(o, ae)),
                o.nav.on("keydown" + S, "> div", d(o)),
                o.config.autoplay && !o.hasTimer && (o.hasTimer = !0,
                o.timerCount = 1,
                le(o)),
                o.el.on("mouseenter" + S, Y(o, !0, "mouse")),
                o.el.on("focusin" + S, Y(o, !0, "keyboard")),
                o.el.on("mouseleave" + S, Y(o, !1, "mouse")),
                o.el.on("focusout" + S, Y(o, !1, "keyboard"))),
                o.nav.on("click" + S, "> div", d(o)),
                M || o.mask.contents().filter(function() {
                    return this.nodeType === 3
                }).remove();
                var _ = r.filter(":hidden");
                _.addClass(D);
                var x = r.parents(":hidden");
                x.addClass(D),
                P || E(t, n),
                _.removeClass(D),
                x.removeClass(D)
            }
            function Z(t) {
                var n = {};
                n.crossOver = 0,
                n.animation = t.el.attr("data-animation") || "slide",
                n.animation === "outin" && (n.animation = "cross",
                n.crossOver = .5),
                n.easing = t.el.attr("data-easing") || "ease";
                var r = t.el.attr("data-duration");
                if (n.duration = r != null ? parseInt(r, 10) : 500,
                I(t.el.attr("data-infinite")) && (n.infinite = !0),
                I(t.el.attr("data-disable-swipe")) && (n.disableSwipe = !0),
                I(t.el.attr("data-hide-arrows")) ? n.hideArrows = !0 : t.config.hideArrows && (t.left.show(),
                t.right.show()),
                I(t.el.attr("data-autoplay"))) {
                    n.autoplay = !0,
                    n.delay = parseInt(t.el.attr("data-delay"), 10) || 2e3,
                    n.timerMax = parseInt(t.el.attr("data-autoplay-limit"), 10);
                    var o = "mousedown" + S + " touchstart" + S;
                    C || t.el.off(o).one(o, function() {
                        k(t)
                    })
                }
                var h = t.right.width();
                n.edge = h ? h + 40 : 100,
                t.config = n
            }
            function I(t) {
                return t === "1" || t === "true"
            }
            function Y(t, n, r) {
                return function(o) {
                    if (n)
                        t.hasFocus[r] = n;
                    else if (i.contains(t.el.get(0), o.relatedTarget) || (t.hasFocus[r] = n,
                    t.hasFocus.mouse && r === "keyboard" || t.hasFocus.keyboard && r === "mouse"))
                        return;
                    n ? (t.ariaLiveLabel.attr("aria-live", "polite"),
                    t.hasTimer && k(t)) : (t.ariaLiveLabel.attr("aria-live", "off"),
                    t.hasTimer && le(t))
                }
            }
            function oe(t, n) {
                return function(r) {
                    switch (r.keyCode) {
                    case Fe.SPACE:
                    case Fe.ENTER:
                        return n(t)(),
                        r.preventDefault(),
                        r.stopPropagation()
                    }
                }
            }
            function ue(t) {
                return function() {
                    A(t, {
                        index: t.index - 1,
                        vector: -1
                    })
                }
            }
            function ae(t) {
                return function() {
                    A(t, {
                        index: t.index + 1,
                        vector: 1
                    })
                }
            }
            function _e(t, n) {
                var r = null;
                n === t.slides.length && (U(),
                v(t)),
                g.each(t.anchors, function(o, h) {
                    i(o.els).each(function(_, x) {
                        i(x).index() === n && (r = h)
                    })
                }),
                r != null && A(t, {
                    index: r,
                    immediate: !0
                })
            }
            function le(t) {
                k(t);
                var n = t.config
                  , r = n.timerMax;
                r && t.timerCount++ > r || (t.timerId = window.setTimeout(function() {
                    t.timerId == null || C || (ae(t)(),
                    le(t))
                }, n.delay))
            }
            function k(t) {
                window.clearTimeout(t.timerId),
                t.timerId = null
            }
            function d(t) {
                return function(n, r) {
                    r = r || {};
                    var o = t.config;
                    if (C && n.type === "setting") {
                        if (r.select === "prev")
                            return ue(t)();
                        if (r.select === "next")
                            return ae(t)();
                        if (Z(t),
                        v(t),
                        r.select == null)
                            return;
                        _e(t, r.select);
                        return
                    }
                    if (n.type === "swipe")
                        return o.disableSwipe || Re.env("editor") ? void 0 : r.direction === "left" ? ae(t)() : r.direction === "right" ? ue(t)() : void 0;
                    if (t.nav.has(n.target).length) {
                        var h = i(n.target).index();
                        if (n.type === "click" && A(t, {
                            index: h
                        }),
                        n.type === "keydown")
                            switch (n.keyCode) {
                            case Fe.ENTER:
                            case Fe.SPACE:
                                {
                                    A(t, {
                                        index: h
                                    }),
                                    n.preventDefault();
                                    break
                                }
                            case Fe.ARROW_LEFT:
                            case Fe.ARROW_UP:
                                {
                                    w(t.nav, Math.max(h - 1, 0)),
                                    n.preventDefault();
                                    break
                                }
                            case Fe.ARROW_RIGHT:
                            case Fe.ARROW_DOWN:
                                {
                                    w(t.nav, Math.min(h + 1, t.pages)),
                                    n.preventDefault();
                                    break
                                }
                            case Fe.HOME:
                                {
                                    w(t.nav, 0),
                                    n.preventDefault();
                                    break
                                }
                            case Fe.END:
                                {
                                    w(t.nav, t.pages),
                                    n.preventDefault();
                                    break
                                }
                            default:
                                return
                            }
                    }
                }
            }
            function w(t, n) {
                var r = t.children().eq(n).focus();
                t.children().not(r)
            }
            function A(t, n) {
                n = n || {};
                var r = t.config
                  , o = t.anchors;
                t.previous = t.index;
                var h = n.index
                  , _ = {};
                h < 0 ? (h = o.length - 1,
                r.infinite && (_.x = -t.endX,
                _.from = 0,
                _.to = o[0].width)) : h >= o.length && (h = 0,
                r.infinite && (_.x = o[o.length - 1].width,
                _.from = -o[o.length - 1].x,
                _.to = _.from - _.x)),
                t.index = h;
                var x = t.nav.children().eq(h).addClass("w-active").attr("aria-pressed", "true").attr("tabindex", "0");
                t.nav.children().not(x).removeClass("w-active").attr("aria-pressed", "false").attr("tabindex", "-1"),
                r.hideArrows && (t.index === o.length - 1 ? t.right.hide() : t.right.show(),
                t.index === 0 ? t.left.hide() : t.left.show());
                var W = t.offsetX || 0
                  , J = t.offsetX = -o[t.index].x
                  , X = {
                    x: J,
                    opacity: 1,
                    visibility: ""
                }
                  , re = i(o[t.index].els)
                  , we = i(o[t.previous] && o[t.previous].els)
                  , ge = t.slides.not(re)
                  , Le = r.animation
                  , de = r.easing
                  , Me = Math.round(r.duration)
                  , Ie = n.vector || (t.index > t.previous ? 1 : -1)
                  , e = "opacity " + Me + "ms " + de
                  , a = "transform " + Me + "ms " + de;
                if (re.find(Nt).removeAttr("tabindex"),
                re.removeAttr("aria-hidden"),
                re.find("*").removeAttr("aria-hidden"),
                ge.find(Nt).attr("tabindex", "-1"),
                ge.attr("aria-hidden", "true"),
                ge.find("*").attr("aria-hidden", "true"),
                C || (re.each(B.intro),
                ge.each(B.outro)),
                n.immediate && !P) {
                    O(re).set(X),
                    s();
                    return
                }
                if (t.index === t.previous)
                    return;
                if (C || t.ariaLiveLabel.text(`Slide ${h + 1} of ${o.length}.`),
                Le === "cross") {
                    var u = Math.round(Me - Me * r.crossOver)
                      , c = Math.round(Me - u);
                    e = "opacity " + u + "ms " + de,
                    O(we).set({
                        visibility: ""
                    }).add(e).start({
                        opacity: 0
                    }),
                    O(re).set({
                        visibility: "",
                        x: J,
                        opacity: 0,
                        zIndex: t.depth++
                    }).add(e).wait(c).then({
                        opacity: 1
                    }).then(s);
                    return
                }
                if (Le === "fade") {
                    O(we).set({
                        visibility: ""
                    }).stop(),
                    O(re).set({
                        visibility: "",
                        x: J,
                        opacity: 0,
                        zIndex: t.depth++
                    }).add(e).start({
                        opacity: 1
                    }).then(s);
                    return
                }
                if (Le === "over") {
                    X = {
                        x: t.endX
                    },
                    O(we).set({
                        visibility: ""
                    }).stop(),
                    O(re).set({
                        visibility: "",
                        zIndex: t.depth++,
                        x: J + o[t.index].width * Ie
                    }).add(a).start({
                        x: J
                    }).then(s);
                    return
                }
                r.infinite && _.x ? (O(t.slides.not(we)).set({
                    visibility: "",
                    x: _.x
                }).add(a).start({
                    x: J
                }),
                O(we).set({
                    visibility: "",
                    x: _.from
                }).add(a).start({
                    x: _.to
                }),
                t.shifted = we) : (r.infinite && t.shifted && (O(t.shifted).set({
                    visibility: "",
                    x: W
                }),
                t.shifted = null),
                O(t.slides).set({
                    visibility: ""
                }).add(a).start({
                    x: J
                }));
                function s() {
                    re = i(o[t.index].els),
                    ge = t.slides.not(re),
                    Le !== "slide" && (X.visibility = "hidden"),
                    O(ge).set(X)
                }
            }
            function E(t, n) {
                var r = i.data(n, S);
                if (r) {
                    if (f(r))
                        return v(r);
                    C && b(r) && v(r)
                }
            }
            function v(t) {
                var n = 1
                  , r = 0
                  , o = 0
                  , h = 0
                  , _ = t.maskWidth
                  , x = _ - t.config.edge;
                x < 0 && (x = 0),
                t.anchors = [{
                    els: [],
                    x: 0,
                    width: 0
                }],
                t.slides.each(function(J, X) {
                    o - r > x && (n++,
                    r += _,
                    t.anchors[n - 1] = {
                        els: [],
                        x: o,
                        width: 0
                    }),
                    h = i(X).outerWidth(!0),
                    o += h,
                    t.anchors[n - 1].width += h,
                    t.anchors[n - 1].els.push(X);
                    var re = J + 1 + " of " + t.slides.length;
                    i(X).attr("aria-label", re),
                    i(X).attr("role", "group")
                }),
                t.endX = o,
                C && (t.pages = null),
                t.nav.length && t.pages !== n && (t.pages = n,
                p(t));
                var W = t.index;
                W >= n && (W = n - 1),
                A(t, {
                    immediate: !0,
                    index: W
                })
            }
            function p(t) {
                var n = [], r, o = t.el.attr("data-nav-spacing");
                o && (o = parseFloat(o) + "px");
                for (var h = 0, _ = t.pages; h < _; h++)
                    r = i(j),
                    r.attr("aria-label", "Show slide " + (h + 1) + " of " + _).attr("aria-pressed", "false").attr("role", "button").attr("tabindex", "-1"),
                    t.nav.hasClass("w-num") && r.text(h + 1),
                    o != null && r.css({
                        "margin-left": o,
                        "margin-right": o
                    }),
                    n.push(r);
                t.nav.empty().append(n)
            }
            function f(t) {
                var n = t.mask.width();
                return t.maskWidth !== n ? (t.maskWidth = n,
                !0) : !1
            }
            function b(t) {
                var n = 0;
                return t.slides.each(function(r, o) {
                    n += i(o).outerWidth(!0)
                }),
                t.slidesWidth !== n ? (t.slidesWidth = n,
                !0) : !1
            }
            return m
        }
        )
    }
    );
    pt();
    wt();
    yt();
    Ve();
    _t();
    At();
    Tt();
    Ft();
    Ct();
    zt();
}
)();
/*!
 * tram.js v0.8.2-global
 * Cross-browser CSS3 transitions in JavaScript
 * https://github.com/bkwld/tram
 * MIT License
 */
/*!
 * Webflow._ (aka) Underscore.js 1.6.0 (custom build)
 * _.each
 * _.map
 * _.find
 * _.filter
 * _.any
 * _.contains
 * _.delay
 * _.defer
 * _.throttle (webflow)
 * _.debounce
 * _.keys
 * _.has
 * _.now
 * _.template (webflow: upgraded to 1.13.6)
 *
 * http://underscorejs.org
 * (c) 2009-2013 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 * Underscore may be freely distributed under the MIT license.
 * @license MIT
 */
/**
 * ----------------------------------------------------------------------
 * Webflow: Interactions: Init
 */
Webflow.require('ix').init([{
    "slug": "galeria",
    "name": "Galeria",
    "value": {
        "style": {},
        "triggers": [{
            "type": "hover",
            "selector": ".nombre-prod",
            "descend": true,
            "preserve3d": true,
            "stepsA": [{
                "transition": "transform 200 ease 0",
                "x": "0px",
                "y": "-60px",
                "z": "0px"
            }, {}],
            "stepsB": [{
                "transition": "transform 200 ease 0",
                "x": "0px",
                "y": "0px",
                "z": "0px"
            }]
        }]
    }
}, {
    "slug": "aparecer-desde-el-centro",
    "name": "Aparecer desde el centro",
    "value": {
        "style": {
            "opacity": 0,
            "scaleX": 0.5,
            "scaleY": 0.5,
            "scaleZ": 1
        },
        "triggers": [{
            "type": "scroll",
            "stepsA": [{
                "opacity": 1,
                "transition": "transform 500ms ease-in 0, opacity 500ms ease-in 0",
                "scaleX": 1,
                "scaleY": 1,
                "scaleZ": 1
            }],
            "stepsB": []
        }]
    }
}, {
    "slug": "aparecer-de-izq-a-der",
    "name": "Aparecer de izq a der",
    "value": {
        "style": {
            "opacity": 0,
            "x": "-100px",
            "y": "0px",
            "z": "0px"
        },
        "triggers": [{
            "type": "scroll",
            "stepsA": [{
                "opacity": 1,
                "transition": "transform 500ms ease-in 0, opacity 500ms ease-in 0",
                "x": "0px",
                "y": "0px",
                "z": "0px"
            }],
            "stepsB": []
        }]
    }
}, {
    "slug": "aparecer-de-der-a-izq",
    "name": "Aparecer de der a izq",
    "value": {
        "style": {
            "opacity": 0,
            "x": "100px",
            "y": "0px",
            "z": "0px"
        },
        "triggers": [{
            "type": "scroll",
            "stepsA": [{
                "opacity": 1,
                "transition": "transform 500ms ease-in 0, opacity 500ms ease-in 0",
                "x": "0px",
                "y": "0px",
                "z": "0px"
            }],
            "stepsB": []
        }]
    }
}]);
