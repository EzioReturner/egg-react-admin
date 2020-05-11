(window.webpackJsonp = window.webpackJsonp || []).push([
  [51, 60, 99, 127],
  {
    1079: function(e, t, n) {
      'use strict';
      function a(e) {
        return Object.keys(e).reduce(function(t, n) {
          return (
            ('data-' !== n.substr(0, 5) && 'aria-' !== n.substr(0, 5) && 'role' !== n) ||
              'data-__' === n.substr(0, 7) ||
              (t[n] = e[n]),
            t
          );
        }, {});
      }
      n.d(t, 'a', function() {
        return a;
      });
    },
    1192: function(e, t, n) {},
    363: function(e, t) {
      e.exports = {
        siteName: 'RA-Turbo',
        copyright: ['RA-Turbo admin', 'ezioreturner@gmail.com', 'https://github.com/EzioReturner'],
        menuLinkUrl: 'https://github.com/EzioReturner/RATurbo-react-admin',
        logoPath: '/logo.png',
        fixedHeader: !0,
        i18n: {
          languages: [
            { key: 'zh', title: '\u7b80\u4f53\u4e2d\u6587', icon: '\ud83c\udde8\ud83c\uddf3' },
            { key: 'en', title: 'English', icon: '\ud83c\uddec\ud83c\udde7' },
            { key: 'ja', title: '\u65e5\u672c\u8bed', icon: '\ud83c\uddef\ud83c\uddf5' }
          ],
          defaultLanguage: 'zh'
        },
        theme: {
          '@primary-color': '#fb4491',
          '@link-color': '#fb4491',
          '@border-radius-base': '2px',
          '@font-size-base': '13px'
        }
      };
    },
    401: function(e, t, n) {
      'use strict';
      n.r(t);
      n(361);
      var a,
        r,
        o = n(239),
        c = (n(952), n(903)),
        s = (n(1e3), n(1001)),
        i = (n(902), n(934)),
        l = (n(863), n(98)),
        u = n(16),
        p = n(17),
        m = n(43),
        f = n(42),
        d = n(44),
        h = n(1),
        b = n.n(h),
        y = n(34),
        g = n(363),
        E = n(27),
        v =
          (n(813),
          n(382),
          (a = Object(E.b)('userStore')),
          Object(y.f)(
            (r =
              a(
                (r = (function(e) {
                  function t() {
                    var e, n;
                    Object(u.a)(this, t);
                    for (var a = arguments.length, r = new Array(a), o = 0; o < a; o++)
                      r[o] = arguments[o];
                    return (
                      ((n = Object(m.a)(
                        this,
                        (e = Object(f.a)(t)).call.apply(e, [this].concat(r))
                      )).state = { loading: !1 }),
                      (n.handleSubmit = function(e) {
                        e.preventDefault(),
                          n.props.form.validateFields(function(e) {
                            if (!e) {
                              n.setState({ loading: !0 });
                              var t = n.props.form.getFieldsValue(['userName', 'password']),
                                a = t.userName,
                                r = t.password;
                              return new Promise(function() {
                                setTimeout(function() {
                                  n.props.userStore.handleUserLogin(a, r).then(function(e) {
                                    e ? n.handleSuccess() : n.handleError();
                                  });
                                }, 800);
                              });
                            }
                          });
                      }),
                      n
                    );
                  }
                  return (
                    Object(d.a)(t, e),
                    Object(p.a)(t, [
                      {
                        key: 'handleError',
                        value: function() {
                          this.setState({ loading: !1 }), this.props.handleError();
                        }
                      },
                      {
                        key: 'handleSuccess',
                        value: function() {
                          this.props.history.push('/dashboard');
                        }
                      },
                      {
                        key: 'render',
                        value: function() {
                          var e = this.props.form.getFieldDecorator,
                            t = this.state.loading;
                          return b.a.createElement(
                            h.Fragment,
                            null,
                            b.a.createElement(
                              'div',
                              { className: 'loginTitle' },
                              'RA-Turbo' === g.siteName
                                ? b.a.createElement(
                                    b.a.Fragment,
                                    null,
                                    'R',
                                    b.a.createElement('span', null, 'A'),
                                    '-TORBO'
                                  )
                                : g.siteName
                            ),
                            b.a.createElement(
                              s.a,
                              { onSubmit: this.handleSubmit, className: 'login-form' },
                              b.a.createElement(
                                s.a.Item,
                                null,
                                e('userName', {
                                  rules: [{ required: !0, message: 'Please input your username!' }]
                                })(
                                  b.a.createElement(i.a, {
                                    prefix: b.a.createElement(l.a, { type: 'user' }),
                                    placeholder: 'Username: admin | guest',
                                    autoComplete: 'off'
                                  })
                                )
                              ),
                              b.a.createElement(
                                s.a.Item,
                                null,
                                e('password', {
                                  rules: [{ required: !0, message: 'Please input your Password!' }]
                                })(
                                  b.a.createElement(i.a, {
                                    prefix: b.a.createElement(l.a, { type: 'lock' }),
                                    type: 'password',
                                    placeholder: 'Password: 123',
                                    autoComplete: 'off'
                                  })
                                )
                              ),
                              b.a.createElement(
                                s.a.Item,
                                null,
                                e('remember', { valuePropName: 'checked', initialValue: !0 })(
                                  b.a.createElement(c.a, null, 'Remember me')
                                ),
                                b.a.createElement(
                                  'a',
                                  { className: 'login-form-forgot', href: '/login' },
                                  'Forgot password'
                                ),
                                b.a.createElement(
                                  o.a,
                                  {
                                    type: 'primary',
                                    htmlType: 'submit',
                                    className: 'login-form-button',
                                    loading: t
                                  },
                                  b.a.createElement('span', null, 'Log in')
                                ),
                                'Or ',
                                b.a.createElement('a', { href: '/login' }, 'register now!')
                              )
                            )
                          );
                        }
                      }
                    ]),
                    t
                  );
                })(h.Component))
              ) || r)
          ) || r);
      t.default = v;
    },
    419: function(e, t, n) {
      'use strict';
      n.r(t);
      n(236), n(1192);
      var a = n(1),
        r = n.n(a),
        o = n(24),
        c = n(240),
        s = n(98),
        i = n(26),
        l = n.n(i),
        u = n(76),
        p = n(1079);
      function m(e) {
        return (m =
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
      function f() {
        return (f =
          Object.assign ||
          function(e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = arguments[t];
              for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
            }
            return e;
          }).apply(this, arguments);
      }
      function d(e, t, n) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
              })
            : (e[t] = n),
          e
        );
      }
      function h(e, t) {
        for (var n = 0; n < t.length; n++) {
          var a = t[n];
          (a.enumerable = a.enumerable || !1),
            (a.configurable = !0),
            'value' in a && (a.writable = !0),
            Object.defineProperty(e, a.key, a);
        }
      }
      function b(e) {
        return (b = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function(e) {
              return e.__proto__ || Object.getPrototypeOf(e);
            })(e);
      }
      function y(e) {
        if (void 0 === e)
          throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return e;
      }
      function g(e, t) {
        return (g =
          Object.setPrototypeOf ||
          function(e, t) {
            return (e.__proto__ = t), e;
          })(e, t);
      }
      function E() {}
      var v = (function(e) {
          function t() {
            var e, n, r;
            return (
              (function(e, t) {
                if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function');
              })(this, t),
              (n = this),
              (r = b(t).apply(this, arguments)),
              ((e = !r || ('object' !== m(r) && 'function' !== typeof r) ? y(n) : r).state = {
                closing: !0,
                closed: !1
              }),
              (e.handleClose = function(t) {
                t.preventDefault();
                var n = o.findDOMNode(y(e));
                (n.style.height = ''.concat(n.offsetHeight, 'px')),
                  (n.style.height = ''.concat(n.offsetHeight, 'px')),
                  e.setState({ closing: !1 }),
                  (e.props.onClose || E)(t);
              }),
              (e.animationEnd = function() {
                e.setState({ closed: !0, closing: !0 }), (e.props.afterClose || E)();
              }),
              (e.renderAlert = function(t) {
                var n,
                  r,
                  o = t.getPrefixCls,
                  i = e.props,
                  u = i.description,
                  m = i.prefixCls,
                  h = i.message,
                  b = i.closeText,
                  y = i.banner,
                  g = i.className,
                  E = void 0 === g ? '' : g,
                  v = i.style,
                  w = i.icon,
                  O = e.props,
                  k = O.closable,
                  j = O.type,
                  N = O.showIcon,
                  S = O.iconType,
                  P = o('alert', m);
                (N = !(!y || void 0 !== N) || N), (j = y && void 0 === j ? 'warning' : j || 'info');
                var x = 'filled';
                if (!S) {
                  switch (j) {
                    case 'success':
                      S = 'check-circle';
                      break;
                    case 'info':
                      S = 'info-circle';
                      break;
                    case 'error':
                      S = 'close-circle';
                      break;
                    case 'warning':
                      S = 'exclamation-circle';
                      break;
                    default:
                      S = 'default';
                  }
                  u && (x = 'outlined');
                }
                b && (k = !0);
                var C = l()(
                    P,
                    ''.concat(P, '-').concat(j),
                    (d((n = {}), ''.concat(P, '-close'), !e.state.closing),
                    d(n, ''.concat(P, '-with-description'), !!u),
                    d(n, ''.concat(P, '-no-icon'), !N),
                    d(n, ''.concat(P, '-banner'), !!y),
                    d(n, ''.concat(P, '-closable'), k),
                    n),
                    E
                  ),
                  A = k
                    ? a.createElement(
                        'a',
                        { onClick: e.handleClose, className: ''.concat(P, '-close-icon') },
                        b || a.createElement(s.a, { type: 'close' })
                      )
                    : null,
                  T = Object(p.a)(e.props),
                  R =
                    (w &&
                      (a.isValidElement(w)
                        ? a.cloneElement(w, {
                            className: l()(
                              ((r = {}),
                              d(r, w.props.className, w.props.className),
                              d(r, ''.concat(P, '-icon'), !0),
                              r)
                            )
                          })
                        : a.createElement('span', { className: ''.concat(P, '-icon') }, w))) ||
                    a.createElement(s.a, { className: ''.concat(P, '-icon'), type: S, theme: x });
                return e.state.closed
                  ? null
                  : a.createElement(
                      c.a,
                      {
                        component: '',
                        showProp: 'data-show',
                        transitionName: ''.concat(P, '-slide-up'),
                        onEnd: e.animationEnd
                      },
                      a.createElement(
                        'div',
                        f({ 'data-show': e.state.closing, className: C, style: v }, T),
                        N ? R : null,
                        a.createElement('span', { className: ''.concat(P, '-message') }, h),
                        a.createElement('span', { className: ''.concat(P, '-description') }, u),
                        A
                      )
                    );
              }),
              e
            );
          }
          var n, r, i;
          return (
            (function(e, t) {
              if ('function' !== typeof t && null !== t)
                throw new TypeError('Super expression must either be null or a function');
              (e.prototype = Object.create(t && t.prototype, {
                constructor: { value: e, writable: !0, configurable: !0 }
              })),
                t && g(e, t);
            })(t, a['Component']),
            (n = t),
            (r = [
              {
                key: 'render',
                value: function() {
                  return a.createElement(u.a, null, this.renderAlert);
                }
              }
            ]) && h(n.prototype, r),
            i && h(n, i),
            t
          );
        })(),
        w = (n(1e3), n(1001)),
        O = n(16),
        k = n(17),
        j = n(43),
        N = n(42),
        S = n(44),
        P = n(401),
        x =
          (n(813),
          n(382),
          (function(e) {
            function t() {
              var e, n;
              Object(O.a)(this, t);
              for (var a = arguments.length, r = new Array(a), o = 0; o < a; o++)
                r[o] = arguments[o];
              return (
                ((n = Object(j.a)(
                  this,
                  (e = Object(N.a)(t)).call.apply(e, [this].concat(r))
                )).state = { apError: !1, shake: !1 }),
                (n.handleError = function() {
                  n.setState({ apError: !0, shake: !0 });
                }),
                (n.handleAnimationEnd = function() {
                  n.setState({ shake: !1 });
                }),
                n
              );
            }
            return (
              Object(S.a)(t, e),
              Object(k.a)(t, [
                {
                  key: 'render',
                  value: function() {
                    var e = w.a.create({ name: 'login' })(P.default),
                      t = this.state,
                      n = t.apError,
                      a = t.shake;
                    return r.a.createElement(
                      'div',
                      { className: 'login' },
                      n &&
                        r.a.createElement(
                          'div',
                          {
                            className: a ? 'animated shake' : '',
                            onAnimationEnd: this.handleAnimationEnd
                          },
                          r.a.createElement(v, {
                            message: '\u8d26\u6237\u6216\u8005\u5bc6\u7801\u9519\u8bef a:ra  p:123',
                            type: 'error',
                            showIcon: !0,
                            style: { marginBottom: '16px' }
                          })
                        ),
                      r.a.createElement(e, { handleError: this.handleError })
                    );
                  }
                }
              ]),
              t
            );
          })(a.Component));
      t.default = x;
    },
    813: function(e, t, n) {}
  }
]);
//# sourceMappingURL=51.89d4d318.chunk.js.map
