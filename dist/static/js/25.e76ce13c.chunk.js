(window.webpackJsonp = window.webpackJsonp || []).push([
  [25, 131],
  {
    173: function(e, a, n) {
      'use strict';
      n.r(a);
      var t,
        l = n(16),
        c = n(17),
        i = n(43),
        o = n(42),
        d = n(44),
        s = n(1),
        r = n.n(s),
        _ = n(26),
        p = n.n(_),
        u = n(27),
        g = n(811),
        b = n.n(g),
        f =
          Object(u.b)('layoutStore')(
            (t =
              Object(u.c)(
                (t = (function(e) {
                  function a() {
                    return (
                      Object(l.a)(this, a), Object(i.a)(this, Object(o.a)(a).apply(this, arguments))
                    );
                  }
                  return (
                    Object(d.a)(a, e),
                    Object(c.a)(a, [
                      {
                        key: 'render',
                        value: function() {
                          var e = this.props,
                            a = e.spinning,
                            n = e.fixed,
                            t = e.collapsed,
                            l = e.style;
                          return r.a.createElement(
                            'div',
                            {
                              className: p()(
                                b.a.loading,
                                a ? '' : b.a.hide,
                                n ? b.a.fixed : '',
                                t ? b.a.collapsed : ''
                              ),
                              style: l
                            },
                            r.a.createElement(
                              'div',
                              { className: b.a.content },
                              r.a.createElement('div', { className: b.a.circle }),
                              r.a.createElement('span', null, 'LOADING')
                            )
                          );
                        }
                      }
                    ]),
                    a
                  );
                })(s.Component))
              ) || t)
          ) || t;
      a.default = f;
    },
    811: function(e, a, n) {
      e.exports = {
        loading: 'loading_loading__3csF9',
        hide: 'loading_hide__2MdHl',
        fixed: 'loading_fixed__1XuvO',
        collapsed: 'loading_collapsed__2qDGd',
        content: 'loading_content__3327O',
        circle: 'loading_circle__1gpbt',
        roll: 'loading_roll__1FfuW'
      };
    }
  }
]);
//# sourceMappingURL=25.e76ce13c.chunk.js.map
