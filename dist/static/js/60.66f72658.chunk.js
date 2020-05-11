(window.webpackJsonp = window.webpackJsonp || []).push([
  [60, 99, 127],
  {
    363: function(e, a) {
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
    401: function(e, a, t) {
      'use strict';
      t.r(a);
      t(361);
      var r,
        n,
        o = t(239),
        l = (t(952), t(903)),
        s = (t(1e3), t(1001)),
        i = (t(902), t(934)),
        u = (t(863), t(98)),
        m = t(16),
        c = t(17),
        p = t(43),
        d = t(42),
        h = t(44),
        f = t(1),
        g = t.n(f),
        b = t(34),
        E = t(363),
        y = t(27),
        w =
          (t(813),
          t(382),
          (r = Object(y.b)('userStore')),
          Object(b.f)(
            (n =
              r(
                (n = (function(e) {
                  function a() {
                    var e, t;
                    Object(m.a)(this, a);
                    for (var r = arguments.length, n = new Array(r), o = 0; o < r; o++)
                      n[o] = arguments[o];
                    return (
                      ((t = Object(p.a)(
                        this,
                        (e = Object(d.a)(a)).call.apply(e, [this].concat(n))
                      )).state = { loading: !1 }),
                      (t.handleSubmit = function(e) {
                        e.preventDefault(),
                          t.props.form.validateFields(function(e) {
                            if (!e) {
                              t.setState({ loading: !0 });
                              var a = t.props.form.getFieldsValue(['userName', 'password']),
                                r = a.userName,
                                n = a.password;
                              return new Promise(function() {
                                setTimeout(function() {
                                  t.props.userStore.handleUserLogin(r, n).then(function(e) {
                                    e ? t.handleSuccess() : t.handleError();
                                  });
                                }, 800);
                              });
                            }
                          });
                      }),
                      t
                    );
                  }
                  return (
                    Object(h.a)(a, e),
                    Object(c.a)(a, [
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
                            a = this.state.loading;
                          return g.a.createElement(
                            f.Fragment,
                            null,
                            g.a.createElement(
                              'div',
                              { className: 'loginTitle' },
                              'RA-Turbo' === E.siteName
                                ? g.a.createElement(
                                    g.a.Fragment,
                                    null,
                                    'R',
                                    g.a.createElement('span', null, 'A'),
                                    '-TORBO'
                                  )
                                : E.siteName
                            ),
                            g.a.createElement(
                              s.a,
                              { onSubmit: this.handleSubmit, className: 'login-form' },
                              g.a.createElement(
                                s.a.Item,
                                null,
                                e('userName', {
                                  rules: [{ required: !0, message: 'Please input your username!' }]
                                })(
                                  g.a.createElement(i.a, {
                                    prefix: g.a.createElement(u.a, { type: 'user' }),
                                    placeholder: 'Username: admin | guest',
                                    autoComplete: 'off'
                                  })
                                )
                              ),
                              g.a.createElement(
                                s.a.Item,
                                null,
                                e('password', {
                                  rules: [{ required: !0, message: 'Please input your Password!' }]
                                })(
                                  g.a.createElement(i.a, {
                                    prefix: g.a.createElement(u.a, { type: 'lock' }),
                                    type: 'password',
                                    placeholder: 'Password: 123',
                                    autoComplete: 'off'
                                  })
                                )
                              ),
                              g.a.createElement(
                                s.a.Item,
                                null,
                                e('remember', { valuePropName: 'checked', initialValue: !0 })(
                                  g.a.createElement(l.a, null, 'Remember me')
                                ),
                                g.a.createElement(
                                  'a',
                                  { className: 'login-form-forgot', href: '/login' },
                                  'Forgot password'
                                ),
                                g.a.createElement(
                                  o.a,
                                  {
                                    type: 'primary',
                                    htmlType: 'submit',
                                    className: 'login-form-button',
                                    loading: a
                                  },
                                  g.a.createElement('span', null, 'Log in')
                                ),
                                'Or ',
                                g.a.createElement('a', { href: '/login' }, 'register now!')
                              )
                            )
                          );
                        }
                      }
                    ]),
                    a
                  );
                })(f.Component))
              ) || n)
          ) || n);
      a.default = w;
    },
    813: function(e, a, t) {}
  }
]);
//# sourceMappingURL=60.66f72658.chunk.js.map
