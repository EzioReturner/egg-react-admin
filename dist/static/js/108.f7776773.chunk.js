(window.webpackJsonp = window.webpackJsonp || []).push([
  [108],
  {
    400: function(e, a, t) {
      'use strict';
      t.r(a);
      t(865);
      var n = t(864),
        r = t(16),
        c = t(17),
        l = t(43),
        o = t(42),
        u = t(44),
        m = t(1),
        d = t.n(m),
        i = t(49),
        s = (function(e) {
          function a() {
            return Object(r.a)(this, a), Object(l.a)(this, Object(o.a)(a).apply(this, arguments));
          }
          return (
            Object(u.a)(a, e),
            Object(c.a)(a, [
              {
                key: 'render',
                value: function() {
                  return d.a.createElement(
                    n.a,
                    {
                      title: d.a.createElement(i.default, { id: 'platform.teamCard' }),
                      className: 'fat-card',
                      bordered: !1
                    },
                    d.a.createElement(
                      'div',
                      { className: 'team-card' },
                      ['amoy avenger', 'soul tango', 'we are Groot'].map(function(e, a) {
                        return d.a.createElement(
                          'div',
                          { className: 'team-card-detail', key: a },
                          d.a.createElement('p', null, e),
                          d.a.createElement(
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
            a
          );
        })(m.PureComponent);
      a.default = s;
    }
  }
]);
//# sourceMappingURL=108.f7776773.chunk.js.map
