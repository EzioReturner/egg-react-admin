(window.webpackJsonp = window.webpackJsonp || []).push([
  [22, 134],
  {
    170: function(e, t, a) {
      'use strict';
      a.r(t);
      a(863);
      var c = a(98),
        s = a(125),
        l = a(16),
        i = a(17),
        n = a(43),
        r = a(42),
        u = a(44),
        o = a(1),
        _ = a.n(o),
        m = a(808),
        p = a.n(m),
        b = (function(e) {
          function t() {
            return Object(l.a)(this, t), Object(n.a)(this, Object(r.a)(t).apply(this, arguments));
          }
          return (
            Object(u.a)(t, e),
            Object(i.a)(t, [
              {
                key: 'render',
                value: function() {
                  var e = this.props,
                    t = e.title,
                    a = e.subtitle,
                    l = e.extra,
                    i = e.actions,
                    n = e.type,
                    r = Object(s.a)(e, ['title', 'subtitle', 'extra', 'actions', 'type']),
                    u = {
                      failed: _.a.createElement(c.a, {
                        className: ''.concat(p.a.icon, ' ').concat(p.a.failed),
                        type: 'close-circle',
                        theme: 'filled'
                      }),
                      successed: _.a.createElement(c.a, {
                        className: p.a.icon,
                        type: 'check-circle',
                        theme: 'filled'
                      })
                    };
                  return _.a.createElement(
                    'div',
                    Object.assign({ className: p.a.result }, r),
                    u[n],
                    _.a.createElement('p', { className: p.a.title }, t),
                    _.a.createElement('p', { className: p.a.subTitle }, a),
                    l && _.a.createElement('div', { className: p.a.extra }, l),
                    i && _.a.createElement('div', { className: p.a.actions }, i)
                  );
                }
              }
            ]),
            t
          );
        })(o.PureComponent);
      t.default = b;
    },
    808: function(e, t, a) {
      e.exports = {
        result: 'result_result__1KTm3',
        icon: 'result_icon__33rmN',
        failed: 'result_failed__3q5gW',
        title: 'result_title__1K1Cg',
        subTitle: 'result_subTitle__1P1pO',
        extra: 'result_extra__EOaoH',
        actions: 'result_actions__mjYZx'
      };
    },
    863: function(e, t, a) {
      'use strict';
      a(236), a(866);
    },
    866: function(e, t, a) {}
  }
]);
//# sourceMappingURL=22.1ccb6fa8.chunk.js.map
