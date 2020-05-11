(window.webpackJsonp = window.webpackJsonp || []).push([
  [27],
  {
    180: function(e, r, n) {
      'use strict';
      n.r(r);
      n(361);
      var t,
        i = n(239),
        c = (n(404), n(355)),
        a = n(16),
        o = n(17),
        p = n(43),
        s = n(42),
        u = n(44),
        d = n(1),
        l = n.n(d),
        h = n(34),
        y =
          Object(h.f)(
            (t = (function(e) {
              function r() {
                return (
                  Object(a.a)(this, r), Object(p.a)(this, Object(s.a)(r).apply(this, arguments))
                );
              }
              return (
                Object(u.a)(r, e),
                Object(o.a)(r, [
                  {
                    key: 'handleTriggerError',
                    value: function(e) {
                      var r = e.code,
                        n = e.description;
                      this.props.history.push('/exception/'.concat(r)),
                        c.a.error({
                          message: '\u8bf7\u6c42\u9519\u8bef '.concat(r),
                          description: n
                        });
                    }
                  },
                  {
                    key: 'render',
                    value: function() {
                      var e = this;
                      return l.a.createElement(
                        'div',
                        null,
                        l.a.createElement(
                          i.a,
                          {
                            type: 'primary',
                            onClick: function() {
                              return e.handleTriggerError({
                                code: 403,
                                description:
                                  '\u7528\u6237\u5df2\u6388\u6743,\u4f46\u662f\u6ca1\u6709\u8bbf\u95ee\u9875\u9762\u7684\u6743\u9650\u54e6~'
                              });
                            }
                          },
                          '\u9519\u8bef403'
                        ),
                        l.a.createElement(
                          i.a,
                          {
                            style: { margin: '0 16px' },
                            type: 'primary',
                            onClick: function() {
                              return e.handleTriggerError({
                                code: 404,
                                description:
                                  '\u62b1\u6b49~\u670d\u52a1\u5668\u4e0a\u6ca1\u6709\u76f8\u5e94\u7684\u8d44\u6e90'
                              });
                            }
                          },
                          '\u9519\u8bef404'
                        ),
                        l.a.createElement(
                          i.a,
                          {
                            type: 'primary',
                            onClick: function() {
                              return e.handleTriggerError({
                                code: 500,
                                description: '\u670d\u52a1\u5668\u51fa\u9519\u4e86\u54e6'
                              });
                            }
                          },
                          '\u9519\u8bef500'
                        )
                      );
                    }
                  }
                ]),
                r
              );
            })(d.Component))
          ) || t;
      r.default = y;
    }
  }
]);
//# sourceMappingURL=27.2c801972.chunk.js.map
