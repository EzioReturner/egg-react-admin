(window.webpackJsonp = window.webpackJsonp || []).push([
  [66, 96],
  {
    365: function(t, e, a) {
      'use strict';
      a.r(e),
        a.d(e, 'randomNumber', function() {
          return o;
        }),
        a.d(e, 'getProjectList', function() {
          return s;
        }),
        a.d(e, 'getContact', function() {
          return u;
        });
      var n = a(100),
        r = a(126),
        c = a.n(r);
      function o(t, e) {
        return Math.floor(Math.random() * (e - t) + t);
      }
      var i = c.a.mock({
        'data|6-6': [
          { name: '@first', detail: '@paragraph(1)', domain: '@domain', time: '@boolean' }
        ]
      });
      function s() {
        return n.default.sendRequest('get', { path: '/get/projectList' });
      }
      function u() {
        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 15;
        return n.default.sendRequest('get', {
          path: 'https://randomuser.me/api/?inc=picture,name&results='.concat(t)
        });
      }
      c.a.mock('/get/projectList', i);
    },
    398: function(t, e, a) {
      'use strict';
      a.r(e);
      a(865);
      var n = a(864),
        r = a(16),
        c = a(17),
        o = a(43),
        i = a(42),
        s = a(44),
        u = a(1),
        l = a.n(u),
        m = a(365),
        d = a(49),
        p = (function(t) {
          function e() {
            var t, a;
            Object(r.a)(this, e);
            for (var n = arguments.length, c = new Array(n), s = 0; s < n; s++) c[s] = arguments[s];
            return (
              ((a = Object(o.a)(
                this,
                (t = Object(i.a)(e)).call.apply(t, [this].concat(c))
              )).state = { projectList: [] }),
              a
            );
          }
          return (
            Object(s.a)(e, t),
            Object(c.a)(e, [
              {
                key: 'randomNumber',
                value: function() {
                  var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 2,
                    e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 5;
                  return Math.floor(Math.random() * (e - t) + t);
                }
              },
              {
                key: 'componentDidMount',
                value: function() {
                  var t = this;
                  Object(m.getProjectList)().then(function(e) {
                    t.setState({ projectList: e.data.data });
                  });
                }
              },
              {
                key: 'render',
                value: function() {
                  var t = this,
                    e = this.state.projectList;
                  return l.a.createElement(
                    n.a,
                    {
                      title: l.a.createElement(d.default, { id: 'platform.projectList' }),
                      className: 'fat-card',
                      bordered: !1,
                      bodyStyle: { padding: '14px' }
                    },
                    l.a.createElement(
                      'div',
                      { className: 'project-list' },
                      e.map(function(e, a) {
                        var n = e.name,
                          r = e.detail,
                          c = e.domain,
                          o = e.time;
                        return l.a.createElement(
                          'div',
                          { key: a, className: 'projectInfo' },
                          l.a.createElement(
                            'div',
                            { className: 'top' },
                            l.a.createElement('p', { className: o ? 'triangle' : 'rect' }, n),
                            l.a.createElement('span', null, r)
                          ),
                          l.a.createElement(
                            'div',
                            { className: 'bottom' },
                            l.a.createElement('span', { className: 'domain' }, c),
                            l.a.createElement(
                              'span',
                              { className: 'time' },
                              ''.concat(t.randomNumber(), ' ').concat(o ? 'years' : 'day', ' ago')
                            )
                          )
                        );
                      })
                    )
                  );
                }
              }
            ]),
            e
          );
        })(u.PureComponent);
      e.default = p;
    }
  }
]);
//# sourceMappingURL=66.a181da8a.chunk.js.map
