(window.webpackJsonp = window.webpackJsonp || []).push([
  [97],
  {
    380: function(r, n, e) {
      'use strict';
      e.r(n),
        e.d(n, 'CheckPermission', function() {
          return i;
        });
      var i = function(r, n, e, i) {
        if (!n || 0 === n.length) return i;
        if (!r) return e;
        if (Array.isArray(r)) {
          if (r.indexOf(n) >= 0) return e;
          if (Array.isArray(n))
            for (var t = 0; t < n.length; t += 1) {
              var f = n[t];
              if (r.indexOf(f) >= 0) return e;
            }
          return i;
        }
        if ('string' === typeof r) {
          if ('all' === r) return n ? e : i;
          if (r === n) return e;
          if (Array.isArray(n))
            for (var u = 0; u < n.length; u += 1) {
              if (r === n[u]) return e;
            }
          return i;
        }
        throw new Error('unsupported parameters');
      };
    }
  }
]);
//# sourceMappingURL=97.e2119804.chunk.js.map
