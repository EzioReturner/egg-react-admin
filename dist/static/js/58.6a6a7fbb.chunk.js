(window.webpackJsonp = window.webpackJsonp || []).push([
  [58, 99, 130],
  {
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
    371: function(e, t, n) {
      'use strict';
      n.r(t);
      n(1037);
      var a = n(1081),
        o = n(1),
        r = n.n(o),
        l = n(372);
      t.default = function(e) {
        var t = e.isMobile,
          n = e.collapsed,
          o = e.toggleCollapsed;
        return t
          ? r.a.createElement(
              a.a,
              {
                visible: !n,
                placement: 'left',
                closable: !1,
                onClose: function() {
                  return o();
                },
                style: { padding: 0, height: '100vh' },
                bodyStyle: { padding: 0 }
              },
              r.a.createElement(l.default, null)
            )
          : r.a.createElement(l.default, null);
      };
    },
    372: function(e, t, n) {
      'use strict';
      n.r(t);
      n(863);
      var a,
        o,
        r = n(98),
        l = n(909),
        i = n(16),
        u = n(17),
        c = n(43),
        s = n(42),
        p = n(44),
        h = (n(930), n(896)),
        m = n(1),
        d = n.n(m),
        f = n(34),
        g = n(165),
        b = n(27),
        y = n(249),
        v = n(26),
        k = n.n(v),
        M = n(363),
        O = n(810),
        E = n.n(O),
        _ = h.b.SubMenu,
        S =
          ((a = Object(b.b)('layoutStore', 'userStore', 'localeStore')),
          Object(f.f)(
            (o =
              a(
                (o =
                  Object(b.c)(
                    (o = (function(e) {
                      function t(e) {
                        var n;
                        return (
                          Object(i.a)(this, t),
                          ((n = Object(c.a)(
                            this,
                            Object(s.a)(t).call(this, e)
                          )).handleOpenMenu = function(e) {
                            var t = n.props.layoutStore,
                              a = t.collapsed,
                              o = t.routeConfig,
                              r =
                                e.filter(function(e) {
                                  return o.some(function(t) {
                                    return t.path === e;
                                  });
                                }).length > 1;
                            (a && !e.length) ||
                              n.setState({ openKeys: r ? [e.pop()] : Object(l.a)(e) });
                          }),
                          (n.state = { openKeys: [] }),
                          n
                        );
                      }
                      return (
                        Object(p.a)(t, e),
                        Object(u.a)(t, [
                          {
                            key: 'componentDidMount',
                            value: function() {
                              this.initOpenMenu();
                            }
                          },
                          {
                            key: 'checkRoute',
                            value: function(e, t) {
                              var n = Array.isArray(e);
                              return (n ? e : e.routes).find(function(a) {
                                return a.path === (n ? '' : e.path) + '/' + t;
                              });
                            }
                          },
                          {
                            key: 'initOpenMenu',
                            value: function() {
                              var e,
                                t = this,
                                n = this.props,
                                a = n.location.pathname,
                                o = n.layoutStore.routeConfig[1].routes,
                                r = a.split('/').reduce(function(n, a) {
                                  return (
                                    a &&
                                      (e = t.checkRoute(e || o, a)) &&
                                      e.routes &&
                                      n.push(e.path),
                                    n
                                  );
                                }, []);
                              this.setState({ openKeys: Object(l.a)(r) });
                            }
                          },
                          {
                            key: 'getMenuTitle',
                            value: function(e, t, n) {
                              var a = this.props.localeStore.localeObj,
                                o = n ? 'menu.'.concat(n, '.').concat(t) : 'menu.'.concat(t);
                              return d.a.createElement(
                                'span',
                                null,
                                e && d.a.createElement(r.a, { type: e }),
                                d.a.createElement('span', null, a[o] || t)
                              );
                            }
                          },
                          {
                            key: 'getNavMenuItem',
                            value: function(e, t) {
                              var n = this;
                              if (!e.length) return [];
                              var a = this.props.userStore.authority;
                              return e
                                .filter(function(e) {
                                  var t = e.authority;
                                  return (
                                    !e.hideMenu && (!t || Object(y.intersection)(a, t).length > 0)
                                  );
                                })
                                .map(function(e) {
                                  return n.getSubMenuOrItem(e, t);
                                });
                            }
                          },
                          {
                            key: 'getSubMenuOrItem',
                            value: function(e, t) {
                              if (
                                e.routes &&
                                !e.hideMenu &&
                                e.routes.some(function(e) {
                                  return e.name;
                                })
                              ) {
                                var n = e.icon,
                                  a = e.name,
                                  o = e.path,
                                  r = e.routes;
                                return d.a.createElement(
                                  _,
                                  { title: this.getMenuTitle(n, a, t), key: o },
                                  this.getNavMenuItem(r, a)
                                );
                              }
                              return d.a.createElement(
                                h.b.Item,
                                { key: e.path },
                                this.getMenuItem(e, t)
                              );
                            }
                          },
                          {
                            key: 'handleClickLink',
                            value: function() {
                              var e = this.props.layoutStore,
                                t = e.isMobile,
                                n = e.toggleCollapsed;
                              t && n();
                            }
                          },
                          {
                            key: 'getMenuItem',
                            value: function(e) {
                              var t = this,
                                n =
                                  arguments.length > 1 && void 0 !== arguments[1]
                                    ? arguments[1]
                                    : '',
                                a = e.icon,
                                o = e.name,
                                l = e.path,
                                i = this.props.localeStore.localeObj,
                                u = n ? 'menu.'.concat(n, '.').concat(o) : 'menu.'.concat(o);
                              return d.a.createElement(
                                g.b,
                                {
                                  to: l,
                                  replace: !0,
                                  onClick: function() {
                                    t.handleClickLink();
                                  }
                                },
                                a && d.a.createElement(r.a, { type: a }),
                                d.a.createElement('span', null, i[u] || o)
                              );
                            }
                          },
                          {
                            key: 'render',
                            value: function() {
                              var e = this.props,
                                t = e.location.pathname,
                                n = e.layoutStore,
                                a = n.collapsed,
                                o = n.routeConfig,
                                r = a ? {} : { openKeys: this.state.openKeys };
                              return d.a.createElement(
                                'div',
                                {
                                  className: k()(E.a.navigator, a ? E.a.collapsed : ''),
                                  mode: 'inline'
                                },
                                d.a.createElement(
                                  'a',
                                  {
                                    className: E.a.controlBut,
                                    href: M.menuLinkUrl,
                                    target: '_blank',
                                    rel: 'noopener noreferrer'
                                  },
                                  d.a.createElement('img', {
                                    alt: '',
                                    src: M.logoPath,
                                    className: E.a.logo
                                  }),
                                  d.a.createElement(
                                    'span',
                                    { className: 'ml-2 '.concat(E.a.title) },
                                    M.siteName
                                  )
                                ),
                                d.a.createElement(
                                  h.b,
                                  Object.assign(
                                    {
                                      className: 'myMenu',
                                      mode: 'inline',
                                      inlineCollapsed: a,
                                      selectedKeys: [t],
                                      onOpenChange: this.handleOpenMenu
                                    },
                                    r
                                  ),
                                  this.getNavMenuItem(o[1].routes)
                                )
                              );
                            }
                          }
                        ]),
                        t
                      );
                    })(m.Component))
                  ) || o)
              ) || o)
          ) || o);
      t.default = S;
    },
    810: function(e, t, n) {
      e.exports = {
        navigator: 'siderMenu_navigator__1Jcq0',
        collapsed: 'siderMenu_collapsed__fhIDd',
        title: 'siderMenu_title__RbyeN',
        controlBut: 'siderMenu_controlBut__15Ml5',
        rotateIcon: 'siderMenu_rotateIcon__2f38h',
        logo: 'siderMenu_logo__qop0d'
      };
    }
  }
]);
//# sourceMappingURL=58.6a6a7fbb.chunk.js.map
