(window.webpackJsonp = window.webpackJsonp || []).push([
  [93],
  {
    378: function(t, n, o) {
      'use strict';
      o.r(n),
        o.d(n, 'default', function() {
          return r;
        });
      var e = o(100),
        d = o(126),
        u = o.n(d),
        a = u.a.mock({ 'data|70-100': ['@word'] });
      function r() {
        return e.default.sendRequest('get', { path: '/get/wordCloud' });
      }
      u.a.mock('/get/wordCloud', a);
    }
  }
]);
//# sourceMappingURL=93.baf39a6a.chunk.js.map
