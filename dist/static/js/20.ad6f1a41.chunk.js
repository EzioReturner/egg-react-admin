(window.webpackJsonp = window.webpackJsonp || []).push([
  [20, 55, 132],
  {
    166: function(e, a, t) {
      'use strict';
      t.r(a);
      var n = t(1),
        r = t.n(n),
        c = t(362),
        o = t(804),
        l = t.n(o);
      a.default = function(e) {
        var a = e.hideBreadcrumb,
          t = e.title,
          n = e.subTitle,
          o = e.content,
          i = e.extraContent,
          s = e.logo;
        return r.a.createElement(
          'div',
          { className: l.a.pageHeader },
          !a && r.a.createElement(c.default, null),
          s && r.a.createElement('div', { className: l.a.logo }, s),
          r.a.createElement(
            'div',
            { className: l.a.main },
            r.a.createElement(
              'div',
              { className: l.a.row },
              t && r.a.createElement('h1', { className: l.a.title }, t),
              n && r.a.createElement('div', { className: l.a.subTitle }, n)
            ),
            r.a.createElement(
              'div',
              { className: l.a.row },
              o && r.a.createElement('div', { className: l.a.content }, o),
              i && r.a.createElement('div', { className: l.a.extraContent }, i)
            )
          )
        );
      };
    },
    362: function(e, a, t) {
      'use strict';
      t.r(a);
      t(863);
      var n,
        r,
        c = t(98),
        o = t(16),
        l = t(17),
        i = t(43),
        s = t(42),
        u = t(44),
        d = t(1),
        p = t.n(d),
        m = t(27),
        b = t(34),
        _ = t(26),
        h = t.n(_),
        v = t(804),
        f = t.n(v),
        y =
          ((n = Object(m.b)('layoutStore', 'localeStore')),
          Object(b.f)(
            (r =
              n(
                (r =
                  Object(m.c)(
                    (r = (function(e) {
                      function a() {
                        return (
                          Object(o.a)(this, a),
                          Object(i.a)(this, Object(s.a)(a).apply(this, arguments))
                        );
                      }
                      return (
                        Object(u.a)(a, e),
                        Object(l.a)(a, [
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
                                n = t.layoutStore.delBreadcrumb,
                                r = t.history,
                                c = n(a, t.location.pathname);
                              c && r.push(c.path);
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
                                n = a.localeStore.localeObj;
                              return p.a.createElement(
                                'div',
                                { className: f.a.breadcrumbList },
                                t.map(function(a, t) {
                                  var r = a.display,
                                    o = a.path,
                                    l = a.name,
                                    i = o
                                      .split('/')
                                      .slice(1)
                                      .join('.');
                                  return r
                                    ? p.a.createElement(
                                        'div',
                                        {
                                          key: t,
                                          className: h()(
                                            f.a.breadcrumb,
                                            e.checkDisplay(o) ? f.a.display : ''
                                          ),
                                          onClick: function() {
                                            return e.handleGoBreadPath(o);
                                          }
                                        },
                                        n['menu.'.concat(i)] || l,
                                        p.a.createElement(c.a, {
                                          type: 'close',
                                          className: f.a.closeIcon,
                                          onClick: function(a) {
                                            return e.handleDelBreadcrumb(a, l);
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
                    })(d.Component))
                  ) || r)
              ) || r)
          ) || r);
      a.default = y;
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
    863: function(e, a, t) {
      'use strict';
      t(236), t(866);
    },
    866: function(e, a, t) {}
  }
]);
//# sourceMappingURL=20.ad6f1a41.chunk.js.map
