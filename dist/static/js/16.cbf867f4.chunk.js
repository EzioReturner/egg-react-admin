(window.webpackJsonp = window.webpackJsonp || []).push([
  [16, 17, 20, 55, 132, 133, 142],
  {
    166: function(e, a, t) {
      'use strict';
      t.r(a);
      var r = t(1),
        n = t.n(r),
        c = t(362),
        l = t(804),
        i = t.n(l);
      a.default = function(e) {
        var a = e.hideBreadcrumb,
          t = e.title,
          r = e.subTitle,
          l = e.content,
          o = e.extraContent,
          s = e.logo;
        return n.a.createElement(
          'div',
          { className: i.a.pageHeader },
          !a && n.a.createElement(c.default, null),
          s && n.a.createElement('div', { className: i.a.logo }, s),
          n.a.createElement(
            'div',
            { className: i.a.main },
            n.a.createElement(
              'div',
              { className: i.a.row },
              t && n.a.createElement('h1', { className: i.a.title }, t),
              r && n.a.createElement('div', { className: i.a.subTitle }, r)
            ),
            n.a.createElement(
              'div',
              { className: i.a.row },
              l && n.a.createElement('div', { className: i.a.content }, l),
              o && n.a.createElement('div', { className: i.a.extraContent }, o)
            )
          )
        );
      };
    },
    167: function(e, a, t) {
      'use strict';
      t.r(a);
      var r = t(125),
        n = t(1),
        c = t.n(n),
        l = t(166),
        i = t(805),
        o = t.n(i);
      a.default = function(e) {
        var a = e.hideHeader,
          t = e.children,
          n = Object(r.a)(e, ['hideHeader', 'children']);
        return c.a.createElement(
          'div',
          { className: o.a.pageWrapper },
          !a && c.a.createElement(l.default, n),
          c.a.createElement('div', { className: o.a.pageBody }, t)
        );
      };
    },
    187: function(e, a, t) {
      'use strict';
      t.r(a);
      var r = t(16),
        n = t(17),
        c = t(43),
        l = t(42),
        i = t(44),
        o = t(1),
        s = t.n(o),
        u = t(167),
        p = t(49),
        d = t(827),
        m = function(e) {
          var a = e.title;
          return s.a.createElement('h1', { className: d.title }, a);
        },
        b = (function(e) {
          function a() {
            return Object(r.a)(this, a), Object(c.a)(this, Object(l.a)(a).apply(this, arguments));
          }
          return (
            Object(i.a)(a, e),
            Object(n.a)(a, [
              {
                key: 'render',
                value: function() {
                  return s.a.createElement(
                    u.default,
                    {
                      title: s.a.createElement(p.default, {
                        id: 'typescript',
                        defaultMessage: 'TypeScript\u6837\u4f8b'
                      })
                    },
                    s.a.createElement(m, { title: 'ts-Example is at work!' })
                  );
                }
              }
            ]),
            a
          );
        })(o.Component);
      a.default = b;
    },
    362: function(e, a, t) {
      'use strict';
      t.r(a);
      t(863);
      var r,
        n,
        c = t(98),
        l = t(16),
        i = t(17),
        o = t(43),
        s = t(42),
        u = t(44),
        p = t(1),
        d = t.n(p),
        m = t(27),
        b = t(34),
        _ = t(26),
        h = t.n(_),
        f = t(804),
        v = t.n(f),
        g =
          ((r = Object(m.b)('layoutStore', 'localeStore')),
          Object(b.f)(
            (n =
              r(
                (n =
                  Object(m.c)(
                    (n = (function(e) {
                      function a() {
                        return (
                          Object(l.a)(this, a),
                          Object(o.a)(this, Object(s.a)(a).apply(this, arguments))
                        );
                      }
                      return (
                        Object(u.a)(a, e),
                        Object(i.a)(a, [
                          {
                            key: 'componentDidMount',
                            value: function() {
                              var e = this.props,
                                a = e.layoutStore,
                                t = e.location.pathname;
                              a.addBreadcrumb(t);
                            }
                          },
                          {
                            key: 'handleDelBreadcrumb',
                            value: function(e, a) {
                              e.stopPropagation();
                              var t = this.props,
                                r = t.layoutStore.delBreadcrumb,
                                n = t.history,
                                c = r(a, t.location.pathname);
                              c && n.push(c.path);
                            }
                          },
                          {
                            key: 'handleGoBreadPath',
                            value: function(e) {
                              var a = this.props,
                                t = a.history;
                              a.location.pathname !== e && t.push(e);
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
                                a = this.props,
                                t = a.layoutStore.breadcrumbList,
                                r = a.localeStore.localeObj;
                              return d.a.createElement(
                                'div',
                                { className: v.a.breadcrumbList },
                                t.map(function(a, t) {
                                  var n = a.display,
                                    l = a.path,
                                    i = a.name,
                                    o = l
                                      .split('/')
                                      .slice(1)
                                      .join('.');
                                  return n
                                    ? d.a.createElement(
                                        'div',
                                        {
                                          key: t,
                                          className: h()(
                                            v.a.breadcrumb,
                                            e.checkDisplay(l) ? v.a.display : ''
                                          ),
                                          onClick: function() {
                                            return e.handleGoBreadPath(l);
                                          }
                                        },
                                        r['menu.'.concat(o)] || i,
                                        d.a.createElement(c.a, {
                                          type: 'close',
                                          className: v.a.closeIcon,
                                          onClick: function(a) {
                                            return e.handleDelBreadcrumb(a, i);
                                          }
                                        })
                                      )
                                    : null;
                                })
                              );
                            }
                          }
                        ]),
                        a
                      );
                    })(p.Component))
                  ) || n)
              ) || n)
          ) || n);
      a.default = g;
    },
    804: function(e, a, t) {
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
    805: function(e, a, t) {
      e.exports = {
        pageWrapper: 'pageWrapper_pageWrapper__2MhWF',
        pageBody: 'pageWrapper_pageBody__2S0kZ'
      };
    },
    827: function(e, a, t) {
      e.exports = { title: 'TsExample_title__2PQaY' };
    },
    863: function(e, a, t) {
      'use strict';
      t(236), t(866);
    },
    866: function(e, a, t) {}
  }
]);
//# sourceMappingURL=16.cbf867f4.chunk.js.map
