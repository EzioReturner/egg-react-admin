(window.webpackJsonp = window.webpackJsonp || []).push([
  [24, 123],
  {
    183: function(e, n, t) {
      'use strict';
      t.r(n);
      t(865);
      var a = t(864),
        i = t(16),
        o = t(17),
        c = t(43),
        r = t(42),
        d = t(44),
        l = t(1),
        p = t.n(l),
        u = t(861),
        h = t.n(u),
        s =
          (t(823),
          (function(e) {
            function n() {
              return Object(i.a)(this, n), Object(c.a)(this, Object(r.a)(n).apply(this, arguments));
            }
            return (
              Object(d.a)(n, e),
              Object(o.a)(n, [
                {
                  key: 'componentDidMount',
                  value: function() {
                    var e = new h.a.Map('mapContainer');
                    e.centerAndZoom(new h.a.Point(108.154, 37.495), 5), e.enableScrollWheelZoom(!0);
                  }
                },
                {
                  key: 'render',
                  value: function() {
                    return p.a.createElement(
                      'div',
                      { style: { height: '100%', minHeight: '500px' } },
                      p.a.createElement(
                        a.a,
                        {
                          style: { height: '100%' },
                          bordered: !0,
                          className: 'thin-card',
                          bodyStyle: { height: '100%', width: '100%', padding: '4px' }
                        },
                        p.a.createElement('div', {
                          className: 'myMapContainer',
                          id: 'mapContainer'
                        })
                      )
                    );
                  }
                }
              ]),
              n
            );
          })(l.Component));
      n.default = s;
    },
    823: function(e, n, t) {}
  }
]);
//# sourceMappingURL=24.8be4ac4a.chunk.js.map
