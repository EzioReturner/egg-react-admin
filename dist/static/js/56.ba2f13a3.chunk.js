(window.webpackJsonp = window.webpackJsonp || []).push([
  [56, 96],
  {
    1032: function(t, e, n) {
      'use strict';
      n(236), n(1033);
    },
    1033: function(t, e, n) {},
    1034: function(t, e, n) {
      'use strict';
      n.d(e, 'a', function() {
        return y;
      });
      var r = n(1),
        a = n(98),
        o = n(26),
        c = n.n(o),
        i = n(76);
      function s(t) {
        return (s =
          'function' === typeof Symbol && 'symbol' === typeof Symbol.iterator
            ? function(t) {
                return typeof t;
              }
            : function(t) {
                return t &&
                  'function' === typeof Symbol &&
                  t.constructor === Symbol &&
                  t !== Symbol.prototype
                  ? 'symbol'
                  : typeof t;
              })(t);
      }
      function l() {
        return (l =
          Object.assign ||
          function(t) {
            for (var e = 1; e < arguments.length; e++) {
              var n = arguments[e];
              for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r]);
            }
            return t;
          }).apply(this, arguments);
      }
      function u(t, e, n) {
        return (
          e in t
            ? Object.defineProperty(t, e, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
              })
            : (t[e] = n),
          t
        );
      }
      function f(t, e) {
        for (var n = 0; n < e.length; n++) {
          var r = e[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            'value' in r && (r.writable = !0),
            Object.defineProperty(t, r.key, r);
        }
      }
      function p(t, e) {
        return !e || ('object' !== s(e) && 'function' !== typeof e)
          ? (function(t) {
              if (void 0 === t)
                throw new ReferenceError(
                  "this hasn't been initialised - super() hasn't been called"
                );
              return t;
            })(t)
          : e;
      }
      function m(t) {
        return (m = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function(t) {
              return t.__proto__ || Object.getPrototypeOf(t);
            })(t);
      }
      function d(t, e) {
        return (d =
          Object.setPrototypeOf ||
          function(t, e) {
            return (t.__proto__ = e), t;
          })(t, e);
      }
      var h = function(t, e) {
          var n = {};
          for (var r in t)
            Object.prototype.hasOwnProperty.call(t, r) && e.indexOf(r) < 0 && (n[r] = t[r]);
          if (null != t && 'function' === typeof Object.getOwnPropertySymbols) {
            var a = 0;
            for (r = Object.getOwnPropertySymbols(t); a < r.length; a++)
              e.indexOf(r[a]) < 0 && (n[r[a]] = t[r[a]]);
          }
          return n;
        },
        y = (function(t) {
          function e() {
            var t;
            return (
              (function(t, e) {
                if (!(t instanceof e)) throw new TypeError('Cannot call a class as a function');
              })(this, e),
              ((t = p(this, m(e).apply(this, arguments))).state = { scale: 1, isImgExist: !0 }),
              (t.setScale = function() {
                if (t.avatarChildren && t.avatarNode) {
                  var e = t.avatarChildren.offsetWidth,
                    n = t.avatarNode.offsetWidth;
                  0 === e ||
                    0 === n ||
                    (t.lastChildrenWidth === e && t.lastNodeWidth === n) ||
                    ((t.lastChildrenWidth = e),
                    (t.lastNodeWidth = n),
                    t.setState({ scale: n - 8 < e ? (n - 8) / e : 1 }));
                }
              }),
              (t.handleImgLoadError = function() {
                var e = t.props.onError;
                !1 !== (e ? e() : void 0) && t.setState({ isImgExist: !1 });
              }),
              (t.renderAvatar = function(e) {
                var n,
                  o,
                  i = e.getPrefixCls,
                  s = t.props,
                  f = s.prefixCls,
                  p = s.shape,
                  m = s.size,
                  d = s.src,
                  y = s.srcSet,
                  b = s.icon,
                  v = s.className,
                  g = s.alt,
                  O = h(s, [
                    'prefixCls',
                    'shape',
                    'size',
                    'src',
                    'srcSet',
                    'icon',
                    'className',
                    'alt'
                  ]),
                  E = t.state,
                  j = E.isImgExist,
                  w = E.scale,
                  S = i('avatar', f),
                  x = c()(
                    (u((n = {}), ''.concat(S, '-lg'), 'large' === m),
                    u(n, ''.concat(S, '-sm'), 'small' === m),
                    n)
                  ),
                  C = c()(
                    S,
                    v,
                    x,
                    (u((o = {}), ''.concat(S, '-').concat(p), p),
                    u(o, ''.concat(S, '-image'), d && j),
                    u(o, ''.concat(S, '-icon'), b),
                    o)
                  ),
                  N =
                    'number' === typeof m
                      ? {
                          width: m,
                          height: m,
                          lineHeight: ''.concat(m, 'px'),
                          fontSize: b ? m / 2 : 18
                        }
                      : {},
                  k = t.props.children;
                if (d && j)
                  k = r.createElement('img', {
                    src: d,
                    srcSet: y,
                    onError: t.handleImgLoadError,
                    alt: g
                  });
                else if (b) k = r.createElement(a.a, { type: b });
                else {
                  if (t.avatarChildren || 1 !== w) {
                    var P = 'scale('.concat(w, ') translateX(-50%)'),
                      _ = { msTransform: P, WebkitTransform: P, transform: P },
                      W = 'number' === typeof m ? { lineHeight: ''.concat(m, 'px') } : {};
                    k = r.createElement(
                      'span',
                      {
                        className: ''.concat(S, '-string'),
                        ref: function(e) {
                          return (t.avatarChildren = e);
                        },
                        style: l({}, W, _)
                      },
                      k
                    );
                  } else
                    k = r.createElement(
                      'span',
                      {
                        className: ''.concat(S, '-string'),
                        ref: function(e) {
                          return (t.avatarChildren = e);
                        }
                      },
                      k
                    );
                }
                return r.createElement(
                  'span',
                  l({}, O, {
                    style: l({}, N, O.style),
                    className: C,
                    ref: function(e) {
                      return (t.avatarNode = e);
                    }
                  }),
                  k
                );
              }),
              t
            );
          }
          var n, o, s;
          return (
            (function(t, e) {
              if ('function' !== typeof e && null !== e)
                throw new TypeError('Super expression must either be null or a function');
              (t.prototype = Object.create(e && e.prototype, {
                constructor: { value: t, writable: !0, configurable: !0 }
              })),
                e && d(t, e);
            })(e, r['Component']),
            (n = e),
            (o = [
              {
                key: 'componentDidMount',
                value: function() {
                  this.setScale();
                }
              },
              {
                key: 'componentDidUpdate',
                value: function(t) {
                  this.setScale(),
                    t.src !== this.props.src && this.setState({ isImgExist: !0, scale: 1 });
                }
              },
              {
                key: 'render',
                value: function() {
                  return r.createElement(i.a, null, this.renderAvatar);
                }
              }
            ]) && f(n.prototype, o),
            s && f(n, s),
            e
          );
        })();
      y.defaultProps = { shape: 'circle', size: 'default' };
    },
    365: function(t, e, n) {
      'use strict';
      n.r(e),
        n.d(e, 'randomNumber', function() {
          return c;
        }),
        n.d(e, 'getProjectList', function() {
          return s;
        }),
        n.d(e, 'getContact', function() {
          return l;
        });
      var r = n(100),
        a = n(126),
        o = n.n(a);
      function c(t, e) {
        return Math.floor(Math.random() * (e - t) + t);
      }
      var i = o.a.mock({
        'data|6-6': [
          { name: '@first', detail: '@paragraph(1)', domain: '@domain', time: '@boolean' }
        ]
      });
      function s() {
        return r.default.sendRequest('get', { path: '/get/projectList' });
      }
      function l() {
        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 15;
        return r.default.sendRequest('get', {
          path: 'https://randomuser.me/api/?inc=picture,name&results='.concat(t)
        });
      }
      o.a.mock('/get/projectList', i);
    },
    399: function(t, e, n) {
      'use strict';
      n.r(e);
      n(865);
      var r = n(864),
        a = (n(911), n(913)),
        o = (n(361), n(239)),
        c = (n(912), n(914)),
        i = (n(1032), n(1034)),
        s = n(16),
        l = n(17),
        u = n(43),
        f = n(42),
        p = n(44),
        m = n(1),
        d = n.n(m),
        h = n(365),
        y = n(49),
        b = (function(t) {
          function e() {
            var t, n;
            Object(s.a)(this, e);
            for (var r = arguments.length, a = new Array(r), o = 0; o < r; o++) a[o] = arguments[o];
            return (
              ((n = Object(u.a)(
                this,
                (t = Object(f.a)(e)).call.apply(t, [this].concat(a))
              )).state = { contact: [] }),
              n
            );
          }
          return (
            Object(p.a)(e, t),
            Object(l.a)(e, [
              {
                key: 'componentDidMount',
                value: function() {
                  var t = this;
                  Object(h.getContact)().then(function(e) {
                    t.setState({ contact: e.data.results });
                  });
                }
              },
              {
                key: 'render',
                value: function() {
                  var t = this.state.contact;
                  return d.a.createElement(
                    r.a,
                    {
                      title: d.a.createElement(y.default, { id: 'platform.quickContact' }),
                      className: 'fat-card',
                      bordered: !1,
                      loading: !t.length
                    },
                    d.a.createElement(
                      a.a,
                      { className: 'quick-start' },
                      t.map(function(t, e) {
                        return d.a.createElement(
                          c.a,
                          { className: 'ac', key: e, xl: 2, lg: 4, md: 4, sm: 4, xs: 6 },
                          d.a.createElement(i.a, { src: t.picture.thumbnail }),
                          d.a.createElement('p', null, t.name.first)
                        );
                      }),
                      d.a.createElement(
                        c.a,
                        { className: 'ac', xl: 2, lg: 4, md: 4, sm: 4, xs: 6 },
                        d.a.createElement(
                          o.a,
                          { type: 'primary', size: 'small', icon: 'plus' },
                          'add'
                        )
                      )
                    )
                  );
                }
              }
            ]),
            e
          );
        })(m.PureComponent);
      e.default = b;
    }
  }
]);
//# sourceMappingURL=56.ba2f13a3.chunk.js.map
