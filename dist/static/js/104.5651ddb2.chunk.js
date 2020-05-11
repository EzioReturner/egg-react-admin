(window.webpackJsonp = window.webpackJsonp || []).push([
  [104],
  {
    366: function(t, e, i) {
      'use strict';
      i.r(e);
      var n,
        r,
        o,
        a,
        u,
        c,
        b,
        l = i(14),
        s = i(16),
        p = i(17),
        f = i(8),
        h = (i(128), i(4)),
        m = i(1),
        O = i.n(m);
      Object(h.e)({ enforceActions: 'always' });
      var y = new ((n = (function() {
        function t() {
          var e = this;
          Object(s.a)(this, t),
            Object(l.a)(this, 'current', r, this),
            Object(l.a)(this, 'submitting', o, this),
            Object(l.a)(this, 'data', a, this),
            (this.steps = void 0),
            (this.getStepChild = function() {
              return e.steps[e.current].component;
            }),
            Object(l.a)(this, 'initStep', u, this),
            Object(l.a)(this, 'onPrev', c, this),
            Object(l.a)(this, 'onSubmit', b, this),
            (this.steps = [
              {
                id: 'form.stepTitle1',
                title: '\u586b\u5199\u4fe1\u606f',
                component: O.a.lazy(function() {
                  return Promise.all([i.e(0), i.e(1), i.e(3), i.e(6), i.e(110)]).then(
                    i.bind(null, 373)
                  );
                })
              },
              {
                id: 'form.stepTitle2',
                title: '\u786e\u8ba4\u62a5\u544a',
                component: O.a.lazy(function() {
                  return Promise.all([i.e(1), i.e(6), i.e(111)]).then(i.bind(null, 374));
                })
              },
              {
                id: 'form.stepTitle3',
                title: '\u5b8c\u6210',
                component: O.a.lazy(function() {
                  return i.e(112).then(i.bind(null, 375));
                })
              }
            ]);
        }
        return (
          Object(p.a)(t, [
            {
              key: 'nextStep',
              value: function() {
                this.current++, (this.submitting = !1);
              }
            },
            {
              key: 'setValue',
              value: function(t) {
                this.data = t;
              }
            }
          ]),
          t
        );
      })()),
      (r = Object(f.a)(n.prototype, 'current', [h.k], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return 0;
        }
      })),
      (o = Object(f.a)(n.prototype, 'submitting', [h.k], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return !1;
        }
      })),
      (a = Object(f.a)(n.prototype, 'data', [h.k], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return { title: '', detail: '', user: '' };
        }
      })),
      (u = Object(f.a)(n.prototype, 'initStep', [h.b], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          var t = this;
          return function() {
            t.current = 0;
          };
        }
      })),
      Object(f.a)(
        n.prototype,
        'nextStep',
        [h.b],
        Object.getOwnPropertyDescriptor(n.prototype, 'nextStep'),
        n.prototype
      ),
      Object(f.a)(
        n.prototype,
        'setValue',
        [h.b],
        Object.getOwnPropertyDescriptor(n.prototype, 'setValue'),
        n.prototype
      ),
      (c = Object(f.a)(n.prototype, 'onPrev', [h.b], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          var t = this;
          return function() {
            t.current--;
          };
        }
      })),
      (b = Object(f.a)(n.prototype, 'onSubmit', [h.b], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          var t = this;
          return function() {
            (t.submitting = !0),
              setTimeout(function() {
                t.nextStep();
              }, 1e3);
          };
        }
      })),
      n)();
      e.default = y;
    }
  }
]);
//# sourceMappingURL=104.5651ddb2.chunk.js.map
