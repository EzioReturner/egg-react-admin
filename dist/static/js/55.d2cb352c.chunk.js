(window.webpackJsonp = window.webpackJsonp || []).push([
  [55, 132],
  {
    362: function(e, a, t) {
      'use strict';
      t.r(a);
      t(863);
      var r,
        n,
        o = t(98),
        c = t(16),
        i = t(17),
        l = t(43),
        p = t(42),
        s = t(44),
        u = t(1),
        d = t.n(u),
        b = t(27),
        _ = t(34),
        h = t(26),
        m = t.n(h),
        y = t(804),
        f = t.n(y),
        g =
          ((r = Object(b.b)('layoutStore', 'localeStore')),
          Object(_.f)(
            (n =
              r(
                (n =
                  Object(b.c)(
                    (n = (function(e) {
                      function a() {
                        return (
                          Object(c.a)(this, a),
                          Object(l.a)(this, Object(p.a)(a).apply(this, arguments))
                        );
                      }
                      return (
                        Object(s.a)(a, e),
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
                                o = r(a, t.location.pathname);
                              o && n.push(o.path);
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
                                { className: f.a.breadcrumbList },
                                t.map(function(a, t) {
                                  var n = a.display,
                                    c = a.path,
                                    i = a.name,
                                    l = c
                                      .split('/')
                                      .slice(1)
                                      .join('.');
                                  return n
                                    ? d.a.createElement(
                                        'div',
                                        {
                                          key: t,
                                          className: m()(
                                            f.a.breadcrumb,
                                            e.checkDisplay(c) ? f.a.display : ''
                                          ),
                                          onClick: function() {
                                            return e.handleGoBreadPath(c);
                                          }
                                        },
                                        r['menu.'.concat(l)] || i,
                                        d.a.createElement(o.a, {
                                          type: 'close',
                                          className: f.a.closeIcon,
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
                    })(u.Component))
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
    863: function(e, a, t) {
      'use strict';
      t(236), t(866);
    },
    866: function(e, a, t) {}
  }
]);
//# sourceMappingURL=55.d2cb352c.chunk.js.map
