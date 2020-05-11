(window.webpackJsonp = window.webpackJsonp || []).push([
  [62, 65],
  {
    381: function(e, t, n) {
      'use strict';
      n.r(t);
      var a = n(909),
        i = n(16),
        r = n(17),
        o = n(124),
        s = n.n(o),
        c = n(130),
        u = new ((function() {
          function e() {
            Object(i.a)(this, e), (this.displayChart = new Map());
          }
          return (
            Object(r.a)(e, [
              {
                key: 'initChart',
                value: function(e) {
                  if (e && e.id && e.option) {
                    var t = e.id,
                      n = e.option,
                      a = e.otherOption,
                      i = this.getInstance(t);
                    return (
                      void 0 === i && (i = s.a.init(document.getElementById(t))),
                      i.setOption(n),
                      this.addResize(i),
                      this.cacheDisplayChart(t),
                      a && i.setOption(a),
                      i
                    );
                  }
                }
              },
              {
                key: 'getInstance',
                value: function(e) {
                  return s.a.getInstanceByDom(document.getElementById(e));
                }
              },
              {
                key: 'registerMap',
                value: function(e, t) {
                  s.a.registerMap(e, t);
                }
              },
              {
                key: 'addResize',
                value: function(e) {
                  (e._windowResizeEvent = function() {
                    Object(c.default)(e.resize());
                  }),
                    window.addEventListener('resize', e._windowResizeEvent);
                }
              },
              {
                key: 'cacheDisplayChart',
                value: function(e) {
                  this.displayChart.set(e, '');
                }
              },
              {
                key: 'resizeAllDisplayChart',
                value: function() {
                  var e = this,
                    t = Object(a.a)(this.displayChart.keys());
                  setTimeout(function() {
                    t.forEach(function(t) {
                      e.getInstance(t)._windowResizeEvent();
                    });
                  }, 700);
                }
              },
              {
                key: 'dispose',
                value: function(e) {
                  this.removeDisplayChart(e),
                    this.removeResize(e),
                    s.a.dispose(this.getInstance(e));
                }
              },
              {
                key: 'removeDisplayChart',
                value: function(e) {
                  this.displayChart.has(e) && this.displayChart.delete(e);
                }
              },
              {
                key: 'removeResize',
                value: function(e) {
                  var t = this.getInstance(e);
                  window.removeEventListener('resize', t._windowResizeEvent);
                }
              }
            ]),
            e
          );
        })())();
      t.default = u;
    },
    394: function(e, t, n) {
      'use strict';
      n.r(t);
      n(865);
      var a = n(864),
        i = n(50),
        r = n.n(i),
        o = n(79),
        s = n(16),
        c = n(17),
        u = n(43),
        l = n(42),
        p = n(44),
        d = n(1),
        f = n.n(d),
        h = n(381),
        v = n(101),
        y = n(49),
        m = (function(e) {
          function t() {
            return Object(s.a)(this, t), Object(u.a)(this, Object(l.a)(t).apply(this, arguments));
          }
          return (
            Object(p.a)(t, e),
            Object(c.a)(t, [
              {
                key: 'componentDidMount',
                value: function() {
                  this.initChart();
                }
              },
              {
                key: 'initChart',
                value: (function() {
                  var e = Object(o.a)(
                    r.a.mark(function e() {
                      var t, a, i, o;
                      return r.a.wrap(function(e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return (e.next = 2), n.e(29).then(n.bind(null, 383));
                            case 2:
                              (t = e.sent),
                                (a = t.mapData),
                                (i = t.topData),
                                (o = Object(v.popularOption)(a, i)),
                                h.default.initChart({ id: 'poplar-map', option: o });
                            case 7:
                            case 'end':
                              return e.stop();
                          }
                      }, e);
                    })
                  );
                  return function() {
                    return e.apply(this, arguments);
                  };
                })()
              },
              {
                key: 'componentWillUnmount',
                value: function() {
                  h.default.dispose('poplar-map');
                }
              },
              {
                key: 'render',
                value: function() {
                  return f.a.createElement(
                    a.a,
                    {
                      hoverable: !0,
                      bordered: !1,
                      className: 'fat-card poplar-map-card',
                      title: f.a.createElement(y.default, {
                        id: 'monitor.realTime',
                        defaultMessage: '\u5b9e\u65f6\u70ed\u70b9\u5206\u5e03'
                      })
                    },
                    f.a.createElement('div', { id: 'poplar-map' })
                  );
                }
              }
            ]),
            t
          );
        })(d.Component);
      t.default = m;
    },
    909: function(e, t, n) {
      'use strict';
      function a(e) {
        return (
          (function(e) {
            if (Array.isArray(e)) {
              for (var t = 0, n = new Array(e.length); t < e.length; t++) n[t] = e[t];
              return n;
            }
          })(e) ||
          (function(e) {
            if (
              Symbol.iterator in Object(e) ||
              '[object Arguments]' === Object.prototype.toString.call(e)
            )
              return Array.from(e);
          })(e) ||
          (function() {
            throw new TypeError('Invalid attempt to spread non-iterable instance');
          })()
        );
      }
      n.d(t, 'a', function() {
        return a;
      });
    }
  }
]);
//# sourceMappingURL=62.9647def2.chunk.js.map
