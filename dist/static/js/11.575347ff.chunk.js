(window.webpackJsonp = window.webpackJsonp || []).push([
  [11, 17, 18, 20, 50, 55, 56, 66, 96, 108, 126, 132, 133, 147],
  {
    1032: function(e, t, a) {
      'use strict';
      a(236), a(1033);
    },
    1033: function(e, t, a) {},
    1034: function(e, t, a) {
      'use strict';
      a.d(t, 'a', function() {
        return v;
      });
      var n = a(1),
        r = a(98),
        o = a(26),
        c = a.n(o),
        i = a(76);
      function l(e) {
        return (l =
          'function' === typeof Symbol && 'symbol' === typeof Symbol.iterator
            ? function(e) {
                return typeof e;
              }
            : function(e) {
                return e &&
                  'function' === typeof Symbol &&
                  e.constructor === Symbol &&
                  e !== Symbol.prototype
                  ? 'symbol'
                  : typeof e;
              })(e);
      }
      function s() {
        return (s =
          Object.assign ||
          function(e) {
            for (var t = 1; t < arguments.length; t++) {
              var a = arguments[t];
              for (var n in a) Object.prototype.hasOwnProperty.call(a, n) && (e[n] = a[n]);
            }
            return e;
          }).apply(this, arguments);
      }
      function u(e, t, a) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: a,
                enumerable: !0,
                configurable: !0,
                writable: !0
              })
            : (e[t] = a),
          e
        );
      }
      function d(e, t) {
        for (var a = 0; a < t.length; a++) {
          var n = t[a];
          (n.enumerable = n.enumerable || !1),
            (n.configurable = !0),
            'value' in n && (n.writable = !0),
            Object.defineProperty(e, n.key, n);
        }
      }
      function m(e, t) {
        return !t || ('object' !== l(t) && 'function' !== typeof t)
          ? (function(e) {
              if (void 0 === e)
                throw new ReferenceError(
                  "this hasn't been initialised - super() hasn't been called"
                );
              return e;
            })(e)
          : t;
      }
      function p(e) {
        return (p = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function(e) {
              return e.__proto__ || Object.getPrototypeOf(e);
            })(e);
      }
      function f(e, t) {
        return (f =
          Object.setPrototypeOf ||
          function(e, t) {
            return (e.__proto__ = t), e;
          })(e, t);
      }
      var h = function(e, t) {
          var a = {};
          for (var n in e)
            Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (a[n] = e[n]);
          if (null != e && 'function' === typeof Object.getOwnPropertySymbols) {
            var r = 0;
            for (n = Object.getOwnPropertySymbols(e); r < n.length; r++)
              t.indexOf(n[r]) < 0 && (a[n[r]] = e[n[r]]);
          }
          return a;
        },
        v = (function(e) {
          function t() {
            var e;
            return (
              (function(e, t) {
                if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function');
              })(this, t),
              ((e = m(this, p(t).apply(this, arguments))).state = { scale: 1, isImgExist: !0 }),
              (e.setScale = function() {
                if (e.avatarChildren && e.avatarNode) {
                  var t = e.avatarChildren.offsetWidth,
                    a = e.avatarNode.offsetWidth;
                  0 === t ||
                    0 === a ||
                    (e.lastChildrenWidth === t && e.lastNodeWidth === a) ||
                    ((e.lastChildrenWidth = t),
                    (e.lastNodeWidth = a),
                    e.setState({ scale: a - 8 < t ? (a - 8) / t : 1 }));
                }
              }),
              (e.handleImgLoadError = function() {
                var t = e.props.onError;
                !1 !== (t ? t() : void 0) && e.setState({ isImgExist: !1 });
              }),
              (e.renderAvatar = function(t) {
                var a,
                  o,
                  i = t.getPrefixCls,
                  l = e.props,
                  d = l.prefixCls,
                  m = l.shape,
                  p = l.size,
                  f = l.src,
                  v = l.srcSet,
                  b = l.icon,
                  y = l.className,
                  g = l.alt,
                  E = h(l, [
                    'prefixCls',
                    'shape',
                    'size',
                    'src',
                    'srcSet',
                    'icon',
                    'className',
                    'alt'
                  ]),
                  O = e.state,
                  j = O.isImgExist,
                  _ = O.scale,
                  S = i('avatar', d),
                  N = c()(
                    (u((a = {}), ''.concat(S, '-lg'), 'large' === p),
                    u(a, ''.concat(S, '-sm'), 'small' === p),
                    a)
                  ),
                  x = c()(
                    S,
                    y,
                    N,
                    (u((o = {}), ''.concat(S, '-').concat(m), m),
                    u(o, ''.concat(S, '-image'), f && j),
                    u(o, ''.concat(S, '-icon'), b),
                    o)
                  ),
                  k =
                    'number' === typeof p
                      ? {
                          width: p,
                          height: p,
                          lineHeight: ''.concat(p, 'px'),
                          fontSize: b ? p / 2 : 18
                        }
                      : {},
                  C = e.props.children;
                if (f && j)
                  C = n.createElement('img', {
                    src: f,
                    srcSet: v,
                    onError: e.handleImgLoadError,
                    alt: g
                  });
                else if (b) C = n.createElement(r.a, { type: b });
                else {
                  if (e.avatarChildren || 1 !== _) {
                    var w = 'scale('.concat(_, ') translateX(-50%)'),
                      M = { msTransform: w, WebkitTransform: w, transform: w },
                      P = 'number' === typeof p ? { lineHeight: ''.concat(p, 'px') } : {};
                    C = n.createElement(
                      'span',
                      {
                        className: ''.concat(S, '-string'),
                        ref: function(t) {
                          return (e.avatarChildren = t);
                        },
                        style: s({}, P, M)
                      },
                      C
                    );
                  } else
                    C = n.createElement(
                      'span',
                      {
                        className: ''.concat(S, '-string'),
                        ref: function(t) {
                          return (e.avatarChildren = t);
                        }
                      },
                      C
                    );
                }
                return n.createElement(
                  'span',
                  s({}, E, {
                    style: s({}, k, E.style),
                    className: x,
                    ref: function(t) {
                      return (e.avatarNode = t);
                    }
                  }),
                  C
                );
              }),
              e
            );
          }
          var a, o, l;
          return (
            (function(e, t) {
              if ('function' !== typeof t && null !== t)
                throw new TypeError('Super expression must either be null or a function');
              (e.prototype = Object.create(t && t.prototype, {
                constructor: { value: e, writable: !0, configurable: !0 }
              })),
                t && f(e, t);
            })(t, n['Component']),
            (a = t),
            (o = [
              {
                key: 'componentDidMount',
                value: function() {
                  this.setScale();
                }
              },
              {
                key: 'componentDidUpdate',
                value: function(e) {
                  this.setScale(),
                    e.src !== this.props.src && this.setState({ isImgExist: !0, scale: 1 });
                }
              },
              {
                key: 'render',
                value: function() {
                  return n.createElement(i.a, null, this.renderAvatar);
                }
              }
            ]) && d(a.prototype, o),
            l && d(a, l),
            t
          );
        })();
      v.defaultProps = { shape: 'circle', size: 'default' };
    },
    164: function(e, t, a) {
      'use strict';
      a.r(t);
      var n = a(60),
        r = a(16),
        o = a(17),
        c = a(43),
        i = a(42),
        l = a(44),
        s = a(1),
        u = a.n(s),
        d = a(124),
        m = a.n(d),
        p = a(885),
        f = (function(e) {
          function t(e) {
            var a;
            return (
              Object(r.a)(this, t),
              ((a = Object(c.a)(this, Object(i.a)(t).call(this, e))).echartsDOM = null),
              a
            );
          }
          return (
            Object(l.a)(t, e),
            Object(o.a)(t, [
              {
                key: 'initChart',
                value: function() {
                  var e = this.renderChart();
                  Object(p.bind)(this.echartsDOM, function() {
                    e.resize();
                  });
                }
              },
              {
                key: 'componentDidUpdate',
                value: function() {
                  this.renderChart();
                }
              },
              {
                key: 'getInstance',
                value: function() {
                  var e = this.props,
                    t = e.option,
                    a = e.theme;
                  return m.a.getInstanceByDom(this.echartsDOM) || m.a.init(this.echartsDOM, a, t);
                }
              },
              {
                key: 'componentDidMount',
                value: function() {
                  this.initChart();
                }
              },
              {
                key: 'componentWillUnmount',
                value: function() {
                  this.dispose();
                }
              },
              {
                key: 'dispose',
                value: function() {
                  Object(p.clear)(this.echartsDOM), this.echartsDOM && m.a.dispose(this.echartsDOM);
                }
              },
              {
                key: 'renderChart',
                value: function() {
                  var e = this.getInstance(),
                    t = this.props.option,
                    a = this.props,
                    n = a.notMerge,
                    r = a.lazyUpdate;
                  return (
                    (t = Array.isArray(t) ? t : [t]),
                    e.setOption(t[0] || {}, n || !1, r || !1),
                    t[1] && e.setOption(t[1]),
                    e
                  );
                }
              },
              {
                key: 'render',
                value: function() {
                  var e = this,
                    t = this.props,
                    a = t.style,
                    r = t.className,
                    o = Object(n.a)({ height: '300px' }, a);
                  return u.a.createElement('div', {
                    style: o,
                    className: 'echarts-react '.concat(r || ''),
                    ref: function(t) {
                      e.echartsDOM = t;
                    }
                  });
                }
              }
            ]),
            t
          );
        })(s.Component);
      t.default = f;
    },
    166: function(e, t, a) {
      'use strict';
      a.r(t);
      var n = a(1),
        r = a.n(n),
        o = a(362),
        c = a(804),
        i = a.n(c);
      t.default = function(e) {
        var t = e.hideBreadcrumb,
          a = e.title,
          n = e.subTitle,
          c = e.content,
          l = e.extraContent,
          s = e.logo;
        return r.a.createElement(
          'div',
          { className: i.a.pageHeader },
          !t && r.a.createElement(o.default, null),
          s && r.a.createElement('div', { className: i.a.logo }, s),
          r.a.createElement(
            'div',
            { className: i.a.main },
            r.a.createElement(
              'div',
              { className: i.a.row },
              a && r.a.createElement('h1', { className: i.a.title }, a),
              n && r.a.createElement('div', { className: i.a.subTitle }, n)
            ),
            r.a.createElement(
              'div',
              { className: i.a.row },
              c && r.a.createElement('div', { className: i.a.content }, c),
              l && r.a.createElement('div', { className: i.a.extraContent }, l)
            )
          )
        );
      };
    },
    167: function(e, t, a) {
      'use strict';
      a.r(t);
      var n = a(125),
        r = a(1),
        o = a.n(r),
        c = a(166),
        i = a(805),
        l = a.n(i);
      t.default = function(e) {
        var t = e.hideHeader,
          a = e.children,
          r = Object(n.a)(e, ['hideHeader', 'children']);
        return o.a.createElement(
          'div',
          { className: l.a.pageWrapper },
          !t && o.a.createElement(c.default, r),
          o.a.createElement('div', { className: l.a.pageBody }, a)
        );
      };
    },
    186: function(e, t, a) {
      'use strict';
      a.r(t);
      a(911);
      var n,
        r = a(913),
        o = (a(912), a(914)),
        c = a(16),
        i = a(17),
        l = a(43),
        s = a(42),
        u = a(44),
        d = a(1),
        m = a.n(d),
        p = a(27),
        f = a(167),
        h = a(49),
        v = a(398),
        b = a(399),
        y = a(397),
        g = a(400),
        E =
          (a(826),
          Object(p.b)('userStore')(
            (n =
              Object(p.c)(
                (n = (function(e) {
                  function t() {
                    return (
                      Object(c.a)(this, t), Object(l.a)(this, Object(s.a)(t).apply(this, arguments))
                    );
                  }
                  return (
                    Object(u.a)(t, e),
                    Object(i.a)(t, [
                      {
                        key: 'render',
                        value: function() {
                          var e = this.props.userStore.userInfo,
                            t = m.a.createElement(
                              o.a,
                              { xl: 16, lg: 16, md: 16, sm: 24, xs: 24 },
                              m.a.createElement(
                                'div',
                                { className: 'p-left-part' },
                                m.a.createElement('img', {
                                  alt: '',
                                  src: a(814),
                                  className: 'user-photo'
                                }),
                                m.a.createElement(
                                  'div',
                                  null,
                                  m.a.createElement(
                                    'p',
                                    null,
                                    m.a.createElement(h.default, { id: 'platform.morning' }),
                                    ', ',
                                    e.name,
                                    ', ',
                                    m.a.createElement(h.default, { id: 'platform.greating' })
                                  ),
                                  m.a.createElement(
                                    'span',
                                    { className: 'subText' },
                                    m.a.createElement(h.default, { id: 'platform.job' }),
                                    ' | ',
                                    m.a.createElement(h.default, { id: 'platform.department' })
                                  )
                                )
                              )
                            ),
                            n = m.a.createElement(
                              'div',
                              { className: 'p-right-part' },
                              m.a.createElement(
                                r.a,
                                { gutter: 24 },
                                m.a.createElement(
                                  o.a,
                                  { xl: 8, lg: 8, md: 8, sm: 4, xs: 8 },
                                  m.a.createElement(h.default, {
                                    id: 'platform.projects',
                                    className: 'numTitle'
                                  }),
                                  m.a.createElement('p', null, '23')
                                ),
                                m.a.createElement(
                                  o.a,
                                  { xl: 8, lg: 8, md: 8, sm: 4, xs: 8 },
                                  m.a.createElement(h.default, {
                                    id: 'platform.rank',
                                    className: 'numTitle'
                                  }),
                                  m.a.createElement('p', null, '1/9')
                                ),
                                m.a.createElement(
                                  o.a,
                                  { xl: 8, lg: 8, md: 8, sm: 4, xs: 8 },
                                  m.a.createElement(h.default, {
                                    id: 'platform.visitors',
                                    className: 'numTitle'
                                  }),
                                  m.a.createElement('p', null, '2333')
                                )
                              )
                            );
                          return m.a.createElement(
                            f.default,
                            { content: t, extraContent: n },
                            m.a.createElement(
                              'div',
                              { className: 'platform' },
                              m.a.createElement(
                                r.a,
                                { gutter: 24 },
                                m.a.createElement(
                                  o.a,
                                  { xl: 16, lg: 24, md: 24, sm: 24, xs: 24 },
                                  m.a.createElement(b.default, null),
                                  m.a.createElement(
                                    r.a,
                                    { style: { margin: '24px 0' } },
                                    m.a.createElement(v.default, null)
                                  )
                                ),
                                m.a.createElement(
                                  o.a,
                                  { xl: 8, lg: 24, md: 24, sm: 24, xs: 24 },
                                  m.a.createElement(y.default, null),
                                  m.a.createElement(
                                    r.a,
                                    { style: { marginTop: '24px' } },
                                    m.a.createElement(g.default, null)
                                  )
                                )
                              )
                            )
                          );
                        }
                      }
                    ]),
                    t
                  );
                })(d.Component))
              ) || n)
          ) || n);
      t.default = E;
    },
    362: function(e, t, a) {
      'use strict';
      a.r(t);
      a(863);
      var n,
        r,
        o = a(98),
        c = a(16),
        i = a(17),
        l = a(43),
        s = a(42),
        u = a(44),
        d = a(1),
        m = a.n(d),
        p = a(27),
        f = a(34),
        h = a(26),
        v = a.n(h),
        b = a(804),
        y = a.n(b),
        g =
          ((n = Object(p.b)('layoutStore', 'localeStore')),
          Object(f.f)(
            (r =
              n(
                (r =
                  Object(p.c)(
                    (r = (function(e) {
                      function t() {
                        return (
                          Object(c.a)(this, t),
                          Object(l.a)(this, Object(s.a)(t).apply(this, arguments))
                        );
                      }
                      return (
                        Object(u.a)(t, e),
                        Object(i.a)(t, [
                          {
                            key: 'componentDidMount',
                            value: function() {
                              var e = this.props,
                                t = e.layoutStore,
                                a = e.location.pathname;
                              t.addBreadcrumb(a);
                            }
                          },
                          {
                            key: 'handleDelBreadcrumb',
                            value: function(e, t) {
                              e.stopPropagation();
                              var a = this.props,
                                n = a.layoutStore.delBreadcrumb,
                                r = a.history,
                                o = n(t, a.location.pathname);
                              o && r.push(o.path);
                            }
                          },
                          {
                            key: 'handleGoBreadPath',
                            value: function(e) {
                              var t = this.props,
                                a = t.history;
                              t.location.pathname !== e && a.push(e);
                            }
                          },
                          {
                            key: 'checkDisplay',
                            value: function(e) {
                              return e === this.props.location.pathname;
                            }
                          },
                          {
                            key: 'render',
                            value: function() {
                              var e = this,
                                t = this.props,
                                a = t.layoutStore.breadcrumbList,
                                n = t.localeStore.localeObj;
                              return m.a.createElement(
                                'div',
                                { className: y.a.breadcrumbList },
                                a.map(function(t, a) {
                                  var r = t.display,
                                    c = t.path,
                                    i = t.name,
                                    l = c
                                      .split('/')
                                      .slice(1)
                                      .join('.');
                                  return r
                                    ? m.a.createElement(
                                        'div',
                                        {
                                          key: a,
                                          className: v()(
                                            y.a.breadcrumb,
                                            e.checkDisplay(c) ? y.a.display : ''
                                          ),
                                          onClick: function() {
                                            return e.handleGoBreadPath(c);
                                          }
                                        },
                                        n['menu.'.concat(l)] || i,
                                        m.a.createElement(o.a, {
                                          type: 'close',
                                          className: y.a.closeIcon,
                                          onClick: function(t) {
                                            return e.handleDelBreadcrumb(t, i);
                                          }
                                        })
                                      )
                                    : null;
                                })
                              );
                            }
                          }
                        ]),
                        t
                      );
                    })(d.Component))
                  ) || r)
              ) || r)
          ) || r);
      t.default = g;
    },
    365: function(e, t, a) {
      'use strict';
      a.r(t),
        a.d(t, 'randomNumber', function() {
          return c;
        }),
        a.d(t, 'getProjectList', function() {
          return l;
        }),
        a.d(t, 'getContact', function() {
          return s;
        });
      var n = a(100),
        r = a(126),
        o = a.n(r);
      function c(e, t) {
        return Math.floor(Math.random() * (t - e) + e);
      }
      var i = o.a.mock({
        'data|6-6': [
          { name: '@first', detail: '@paragraph(1)', domain: '@domain', time: '@boolean' }
        ]
      });
      function l() {
        return n.default.sendRequest('get', { path: '/get/projectList' });
      }
      function s() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 15;
        return n.default.sendRequest('get', {
          path: 'https://randomuser.me/api/?inc=picture,name&results='.concat(e)
        });
      }
      o.a.mock('/get/projectList', i);
    },
    397: function(e, t, a) {
      'use strict';
      a.r(t);
      a(865);
      var n = a(864),
        r = a(1),
        o = a.n(r),
        c = a(101),
        i = a(164),
        l = a(49);
      t.default = function() {
        return o.a.createElement(
          n.a,
          {
            className: 'fat-card',
            hoverable: !0,
            bordered: !1,
            title: o.a.createElement(l.default, { id: 'platform.MutliAnalysis' })
          },
          o.a.createElement(i.default, { option: c.multiAnalysisOption })
        );
      };
    },
    398: function(e, t, a) {
      'use strict';
      a.r(t);
      a(865);
      var n = a(864),
        r = a(16),
        o = a(17),
        c = a(43),
        i = a(42),
        l = a(44),
        s = a(1),
        u = a.n(s),
        d = a(365),
        m = a(49),
        p = (function(e) {
          function t() {
            var e, a;
            Object(r.a)(this, t);
            for (var n = arguments.length, o = new Array(n), l = 0; l < n; l++) o[l] = arguments[l];
            return (
              ((a = Object(c.a)(
                this,
                (e = Object(i.a)(t)).call.apply(e, [this].concat(o))
              )).state = { projectList: [] }),
              a
            );
          }
          return (
            Object(l.a)(t, e),
            Object(o.a)(t, [
              {
                key: 'randomNumber',
                value: function() {
                  var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 2,
                    t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 5;
                  return Math.floor(Math.random() * (t - e) + e);
                }
              },
              {
                key: 'componentDidMount',
                value: function() {
                  var e = this;
                  Object(d.getProjectList)().then(function(t) {
                    e.setState({ projectList: t.data.data });
                  });
                }
              },
              {
                key: 'render',
                value: function() {
                  var e = this,
                    t = this.state.projectList;
                  return u.a.createElement(
                    n.a,
                    {
                      title: u.a.createElement(m.default, { id: 'platform.projectList' }),
                      className: 'fat-card',
                      bordered: !1,
                      bodyStyle: { padding: '14px' }
                    },
                    u.a.createElement(
                      'div',
                      { className: 'project-list' },
                      t.map(function(t, a) {
                        var n = t.name,
                          r = t.detail,
                          o = t.domain,
                          c = t.time;
                        return u.a.createElement(
                          'div',
                          { key: a, className: 'projectInfo' },
                          u.a.createElement(
                            'div',
                            { className: 'top' },
                            u.a.createElement('p', { className: c ? 'triangle' : 'rect' }, n),
                            u.a.createElement('span', null, r)
                          ),
                          u.a.createElement(
                            'div',
                            { className: 'bottom' },
                            u.a.createElement('span', { className: 'domain' }, o),
                            u.a.createElement(
                              'span',
                              { className: 'time' },
                              ''.concat(e.randomNumber(), ' ').concat(c ? 'years' : 'day', ' ago')
                            )
                          )
                        );
                      })
                    )
                  );
                }
              }
            ]),
            t
          );
        })(s.PureComponent);
      t.default = p;
    },
    399: function(e, t, a) {
      'use strict';
      a.r(t);
      a(865);
      var n = a(864),
        r = (a(911), a(913)),
        o = (a(361), a(239)),
        c = (a(912), a(914)),
        i = (a(1032), a(1034)),
        l = a(16),
        s = a(17),
        u = a(43),
        d = a(42),
        m = a(44),
        p = a(1),
        f = a.n(p),
        h = a(365),
        v = a(49),
        b = (function(e) {
          function t() {
            var e, a;
            Object(l.a)(this, t);
            for (var n = arguments.length, r = new Array(n), o = 0; o < n; o++) r[o] = arguments[o];
            return (
              ((a = Object(u.a)(
                this,
                (e = Object(d.a)(t)).call.apply(e, [this].concat(r))
              )).state = { contact: [] }),
              a
            );
          }
          return (
            Object(m.a)(t, e),
            Object(s.a)(t, [
              {
                key: 'componentDidMount',
                value: function() {
                  var e = this;
                  Object(h.getContact)().then(function(t) {
                    e.setState({ contact: t.data.results });
                  });
                }
              },
              {
                key: 'render',
                value: function() {
                  var e = this.state.contact;
                  return f.a.createElement(
                    n.a,
                    {
                      title: f.a.createElement(v.default, { id: 'platform.quickContact' }),
                      className: 'fat-card',
                      bordered: !1,
                      loading: !e.length
                    },
                    f.a.createElement(
                      r.a,
                      { className: 'quick-start' },
                      e.map(function(e, t) {
                        return f.a.createElement(
                          c.a,
                          { className: 'ac', key: t, xl: 2, lg: 4, md: 4, sm: 4, xs: 6 },
                          f.a.createElement(i.a, { src: e.picture.thumbnail }),
                          f.a.createElement('p', null, e.name.first)
                        );
                      }),
                      f.a.createElement(
                        c.a,
                        { className: 'ac', xl: 2, lg: 4, md: 4, sm: 4, xs: 6 },
                        f.a.createElement(
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
            t
          );
        })(p.PureComponent);
      t.default = b;
    },
    400: function(e, t, a) {
      'use strict';
      a.r(t);
      a(865);
      var n = a(864),
        r = a(16),
        o = a(17),
        c = a(43),
        i = a(42),
        l = a(44),
        s = a(1),
        u = a.n(s),
        d = a(49),
        m = (function(e) {
          function t() {
            return Object(r.a)(this, t), Object(c.a)(this, Object(i.a)(t).apply(this, arguments));
          }
          return (
            Object(l.a)(t, e),
            Object(o.a)(t, [
              {
                key: 'render',
                value: function() {
                  return u.a.createElement(
                    n.a,
                    {
                      title: u.a.createElement(d.default, { id: 'platform.teamCard' }),
                      className: 'fat-card',
                      bordered: !1
                    },
                    u.a.createElement(
                      'div',
                      { className: 'team-card' },
                      ['amoy avenger', 'soul tango', 'we are Groot'].map(function(e, t) {
                        return u.a.createElement(
                          'div',
                          { className: 'team-card-detail', key: t },
                          u.a.createElement('p', null, e),
                          u.a.createElement(
                            'span',
                            null,
                            'project:',
                            Math.floor(-9 * Math.random() + 10)
                          )
                        );
                      })
                    )
                  );
                }
              }
            ]),
            t
          );
        })(s.PureComponent);
      t.default = m;
    },
    804: function(e, t, a) {
      e.exports = {
        pageHeader: 'pageHeader_pageHeader__p1rRP',
        breadcrumbList: 'pageHeader_breadcrumbList__2p4Fg',
        breadcrumb: 'pageHeader_breadcrumb__2hsYH',
        display: 'pageHeader_display__1ljYf',
        closeIcon: 'pageHeader_closeIcon__wK7AT',
        title: 'pageHeader_title__vehcb',
        subTitle: 'pageHeader_subTitle__1D5N-',
        row: 'pageHeader_row__35DeB',
        content: 'pageHeader_content__3jK7H',
        extraContent: 'pageHeader_extraContent__lJbST',
        main: 'pageHeader_main__3zzR2'
      };
    },
    805: function(e, t, a) {
      e.exports = {
        pageWrapper: 'pageWrapper_pageWrapper__2MhWF',
        pageBody: 'pageWrapper_pageBody__2S0kZ'
      };
    },
    814: function(e, t, a) {
      e.exports = a.p + 'static/media/userPhoto.d5c9292d.jpg';
    },
    826: function(e, t, a) {},
    863: function(e, t, a) {
      'use strict';
      a(236), a(866);
    },
    866: function(e, t, a) {},
    871: function(e, t, a) {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 });
      (t.SizeSensorId = 'size-sensor-id'),
        (t.SensorStyle =
          'display:block;position:absolute;top:0;left:0;height:100%;width:100%;overflow:hidden;pointer-events:none;z-index:-1;opacity:0'),
        (t.SensorClassName = 'size-sensor-object');
    },
    885: function(e, t, a) {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 }), (t.ver = t.clear = t.bind = void 0);
      var n = a(886);
      (t.bind = function(e, t) {
        var a = (0, n.getSensor)(e);
        return (
          a.bind(t),
          function() {
            a.unbind(t);
          }
        );
      }),
        (t.clear = function(e) {
          var t = (0, n.getSensor)(e);
          (0, n.removeSensor)(t);
        }),
        (t.ver = '0.2.4');
    },
    886: function(e, t, a) {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.removeSensor = t.getSensor = void 0);
      var n,
        r = a(887),
        o = (n = r) && n.__esModule ? n : { default: n },
        c = a(888),
        i = a(871);
      var l = {};
      (t.getSensor = function(e) {
        var t = e.getAttribute(i.SizeSensorId);
        if (t && l[t]) return l[t];
        var a = (0, o.default)();
        e.setAttribute(i.SizeSensorId, a);
        var n = (0, c.createSensor)(e);
        return (l[a] = n), n;
      }),
        (t.removeSensor = function(e) {
          var t = e.element.getAttribute(i.SizeSensorId);
          e.element.removeAttribute(i.SizeSensorId), e.destroy(), t && l[t] && delete l[t];
        });
    },
    887: function(e, t, a) {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 });
      var n = 1;
      (t.default = function() {
        return '' + n++;
      }),
        (e.exports = t.default);
    },
    888: function(e, t, a) {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 }), (t.createSensor = void 0);
      var n = a(889);
      t.createSensor = n.createSensor;
    },
    889: function(e, t, a) {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 }), (t.createSensor = void 0);
      var n,
        r = a(890),
        o = (n = r) && n.__esModule ? n : { default: n },
        c = a(871);
      t.createSensor = function(e) {
        var t = void 0,
          a = [],
          n = (0, o.default)(function() {
            a.forEach(function(t) {
              t(e);
            });
          }),
          r = function() {
            t &&
              t.parentNode &&
              (t.contentDocument && t.contentDocument.defaultView.removeEventListener('resize', n),
              t.parentNode.removeChild(t),
              (t = void 0),
              (a = []));
          };
        return {
          element: e,
          bind: function(r) {
            t ||
              (t = (function() {
                'static' === getComputedStyle(e).position && (e.style.position = 'relative');
                var t = document.createElement('object');
                return (
                  (t.onload = function() {
                    t.contentDocument.defaultView.addEventListener('resize', n), n();
                  }),
                  t.setAttribute('style', c.SensorStyle),
                  t.setAttribute('class', c.SensorClassName),
                  (t.type = 'text/html'),
                  e.appendChild(t),
                  (t.data = 'about:blank'),
                  t
                );
              })()),
              -1 === a.indexOf(r) && a.push(r);
          },
          destroy: r,
          unbind: function(e) {
            var n = a.indexOf(e);
            -1 !== n && a.splice(n, 1), 0 === a.length && t && r();
          }
        };
      };
    },
    890: function(e, t, a) {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.default = function(e) {
          var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 60,
            a = null;
          return function() {
            for (var n = this, r = arguments.length, o = Array(r), c = 0; c < r; c++)
              o[c] = arguments[c];
            clearTimeout(a),
              (a = setTimeout(function() {
                e.apply(n, o);
              }, t));
          };
        }),
        (e.exports = t.default);
    }
  }
]);
//# sourceMappingURL=11.575347ff.chunk.js.map
