(window.webpackJsonp = window.webpackJsonp || []).push([
  [26, 97],
  {
    174: function(r, e, t) {
      'use strict';
      t.r(e);
      var n,
        i = t(16),
        u = t(17),
        o = t(43),
        f = t(42),
        a = t(44),
        s = t(1),
        c = t(27),
        p = t(380),
        h =
          Object(c.b)('userStore')(
            (n = (function(r) {
              function e() {
                return (
                  Object(i.a)(this, e), Object(o.a)(this, Object(f.a)(e).apply(this, arguments))
                );
              }
              return (
                Object(a.a)(e, r),
                Object(u.a)(e, [
                  {
                    key: 'render',
                    value: function() {
                      var r = this.props,
                        e = r.children,
                        t = r.routeAuthority,
                        n = r.unidentified,
                        i = 'undefined' === typeof e ? null : e,
                        u = r.userStore.authority;
                      return Object(p.CheckPermission)(t, u, i, n);
                    }
                  }
                ]),
                e
              );
            })(s.PureComponent))
          ) || n;
      e.default = h;
    },
    380: function(r, e, t) {
      'use strict';
      t.r(e),
        t.d(e, 'CheckPermission', function() {
          return n;
        });
      var n = function(r, e, t, n) {
        if (!e || 0 === e.length) return n;
        if (!r) return t;
        if (Array.isArray(r)) {
          if (r.indexOf(e) >= 0) return t;
          if (Array.isArray(e))
            for (var i = 0; i < e.length; i += 1) {
              var u = e[i];
              if (r.indexOf(u) >= 0) return t;
            }
          return n;
        }
        if ('string' === typeof r) {
          if ('all' === r) return e ? t : n;
          if (r === e) return t;
          if (Array.isArray(e))
            for (var o = 0; o < e.length; o += 1) {
              if (r === e[o]) return t;
            }
          return n;
        }
        throw new Error('unsupported parameters');
      };
    }
  }
]);
//# sourceMappingURL=26.3e4ba45e.chunk.js.map
