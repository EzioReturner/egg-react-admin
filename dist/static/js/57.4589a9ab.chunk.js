(window.webpackJsonp = window.webpackJsonp || []).push([
  [57, 99, 130],
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
    372: function(e, t, n) {
      'use strict';
      n.r(t);
      n(863);
      var r,
        a,
        o = n(98),
        i = n(909),
        u = n(16),
        l = n(17),
        c = n(43),
        s = n(42),
        p = n(44),
        h = (n(930), n(896)),
        m = n(1),
        f = n.n(m),
        g = n(34),
        d = n(165),
        b = n(27),
        y = n(249),
        v = n(26),
        k = n.n(v),
        M = n(363),
        O = n(810),
        _ = n.n(O),
        j = h.b.SubMenu,
        E =
          ((r = Object(b.b)('layoutStore', 'userStore', 'localeStore')),
          Object(g.f)(
            (a =
              r(
                (a =
                  Object(b.c)(
                    (a = (function(e) {
                      function t(e) {
                        var n;
                        return (
                          Object(u.a)(this, t),
                          ((n = Object(c.a)(
                            this,
                            Object(s.a)(t).call(this, e)
                          )).handleOpenMenu = function(e) {
                            var t = n.props.layoutStore,
                              r = t.collapsed,
                              a = t.routeConfig,
                              o =
                                e.filter(function(e) {
                                  return a.some(function(t) {
                                    return t.path === e;
                                  });
                                }).length > 1;
                            (r && !e.length) ||
                              n.setState({ openKeys: o ? [e.pop()] : Object(i.a)(e) });
                          }),
                          (n.state = { openKeys: [] }),
                          n
                        );
                      }
                      return (
                        Object(p.a)(t, e),
                        Object(l.a)(t, [
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
                              return (n ? e : e.routes).find(function(r) {
                                return r.path === (n ? '' : e.path) + '/' + t;
                              });
                            }
                          },
                          {
                            key: 'initOpenMenu',
                            value: function() {
                              var e,
                                t = this,
                                n = this.props,
                                r = n.location.pathname,
                                a = n.layoutStore.routeConfig[1].routes,
                                o = r.split('/').reduce(function(n, r) {
                                  return (
                                    r &&
                                      (e = t.checkRoute(e || a, r)) &&
                                      e.routes &&
                                      n.push(e.path),
                                    n
                                  );
                                }, []);
                              this.setState({ openKeys: Object(i.a)(o) });
                            }
                          },
                          {
                            key: 'getMenuTitle',
                            value: function(e, t, n) {
                              var r = this.props.localeStore.localeObj,
                                a = n ? 'menu.'.concat(n, '.').concat(t) : 'menu.'.concat(t);
                              return f.a.createElement(
                                'span',
                                null,
                                e && f.a.createElement(o.a, { type: e }),
                                f.a.createElement('span', null, r[a] || t)
                              );
                            }
                          },
                          {
                            key: 'getNavMenuItem',
                            value: function(e, t) {
                              var n = this;
                              if (!e.length) return [];
                              var r = this.props.userStore.authority;
                              return e
                                .filter(function(e) {
                                  var t = e.authority;
                                  return (
                                    !e.hideMenu && (!t || Object(y.intersection)(r, t).length > 0)
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
                                  r = e.name,
                                  a = e.path,
                                  o = e.routes;
                                return f.a.createElement(
                                  j,
                                  { title: this.getMenuTitle(n, r, t), key: a },
                                  this.getNavMenuItem(o, r)
                                );
                              }
                              return f.a.createElement(
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
                                r = e.icon,
                                a = e.name,
                                i = e.path,
                                u = this.props.localeStore.localeObj,
                                l = n ? 'menu.'.concat(n, '.').concat(a) : 'menu.'.concat(a);
                              return f.a.createElement(
                                d.b,
                                {
                                  to: i,
                                  replace: !0,
                                  onClick: function() {
                                    t.handleClickLink();
                                  }
                                },
                                r && f.a.createElement(o.a, { type: r }),
                                f.a.createElement('span', null, u[l] || a)
                              );
                            }
                          },
                          {
                            key: 'render',
                            value: function() {
                              var e = this.props,
                                t = e.location.pathname,
                                n = e.layoutStore,
                                r = n.collapsed,
                                a = n.routeConfig,
                                o = r ? {} : { openKeys: this.state.openKeys };
                              return f.a.createElement(
                                'div',
                                {
                                  className: k()(_.a.navigator, r ? _.a.collapsed : ''),
                                  mode: 'inline'
                                },
                                f.a.createElement(
                                  'a',
                                  {
                                    className: _.a.controlBut,
                                    href: M.menuLinkUrl,
                                    target: '_blank',
                                    rel: 'noopener noreferrer'
                                  },
                                  f.a.createElement('img', {
                                    alt: '',
                                    src: M.logoPath,
                                    className: _.a.logo
                                  }),
                                  f.a.createElement(
                                    'span',
                                    { className: 'ml-2 '.concat(_.a.title) },
                                    M.siteName
                                  )
                                ),
                                f.a.createElement(
                                  h.b,
                                  Object.assign(
                                    {
                                      className: 'myMenu',
                                      mode: 'inline',
                                      inlineCollapsed: r,
                                      selectedKeys: [t],
                                      onOpenChange: this.handleOpenMenu
                                    },
                                    o
                                  ),
                                  this.getNavMenuItem(a[1].routes)
                                )
                              );
                            }
                          }
                        ]),
                        t
                      );
                    })(m.Component))
                  ) || a)
              ) || a)
          ) || a);
      t.default = E;
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
    },
    909: function(e, t, n) {
      'use strict';
      function r(e) {
        return (
          (function(e) {
            if (Array.isArray(e)) {
              for (var t = 0, n = new Array(e.length); t < e.length; t++) n[t] = e[t];
              return n;
            }
          })(e) ||
          (function(e) {
            if (
              Symbol.iterator in Object(e) ||
              '[object Arguments]' === Object.prototype.toString.call(e)
            )
              return Array.from(e);
          })(e) ||
          (function() {
            throw new TypeError('Invalid attempt to spread non-iterable instance');
          })()
        );
      }
      n.d(t, 'a', function() {
        return r;
      });
    }
  }
]);
//# sourceMappingURL=57.4589a9ab.chunk.js.map
