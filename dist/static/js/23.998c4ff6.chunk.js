(window.webpackJsonp = window.webpackJsonp || []).push([
  [23, 99, 135],
  {
    172: function(e, t, n) {
      'use strict';
      n.r(t);
      n(910);
      var a,
        o = n(898),
        c = (n(863), n(98)),
        r = (n(930), n(896)),
        l = n(16),
        i = n(17),
        u = n(43),
        s = n(42),
        g = n(44),
        m = n(1),
        p = n.n(m),
        b = n(27),
        h = n(363),
        f = n(809),
        y = n.n(f),
        d = h.i18n.languages,
        k = h.i18n.defaultLanguage,
        j =
          Object(b.b)('localeStore')(
            (a =
              Object(b.c)(
                (a = (function(e) {
                  function t() {
                    var e, n;
                    Object(l.a)(this, t);
                    for (var a = arguments.length, o = new Array(a), c = 0; c < a; c++)
                      o[c] = arguments[c];
                    return (
                      ((n = Object(u.a)(
                        this,
                        (e = Object(s.a)(t)).call.apply(e, [this].concat(o))
                      )).changeLang = function(e) {
                        var t = e.key;
                        n.props.localeStore.setLocale(t);
                      }),
                      (n.getMenu = function() {
                        var e = n.props.localeStore.locale || k;
                        return p.a.createElement(
                          r.b,
                          { selectedKeys: [e] },
                          d.map(function(e) {
                            var t = e.key,
                              a = e.icon,
                              o = e.title;
                            return p.a.createElement(
                              r.b.Item,
                              { key: t, onClick: n.changeLang },
                              p.a.createElement('span', { style: { marginRight: '5px' } }, a),
                              o
                            );
                          })
                        );
                      }),
                      n
                    );
                  }
                  return (
                    Object(g.a)(t, e),
                    Object(i.a)(t, [
                      {
                        key: 'render',
                        value: function() {
                          return p.a.createElement(
                            o.a,
                            { overlay: this.getMenu(), placement: 'bottomRight' },
                            p.a.createElement(
                              'div',
                              { className: y.a.langIcon },
                              p.a.createElement(c.a, { type: 'global', className: y.a.icon })
                            )
                          );
                        }
                      }
                    ]),
                    t
                  );
                })(m.Component))
              ) || a)
          ) || a;
      t.default = j;
    },
    363: function(e, t) {
      e.exports = {
        siteName: 'RA-Turbo',
        copyright: ['RA-Turbo admin', 'ezioreturner@gmail.com', 'https://github.com/EzioReturner'],
        menuLinkUrl: 'https://github.com/EzioReturner/RATurbo-react-admin',
        logoPath: '/logo.png',
        fixedHeader: !0,
        i18n: {
          languages: [
            { key: 'zh', title: '\u7b80\u4f53\u4e2d\u6587', icon: '\ud83c\udde8\ud83c\uddf3' },
            { key: 'en', title: 'English', icon: '\ud83c\uddec\ud83c\udde7' },
            { key: 'ja', title: '\u65e5\u672c\u8bed', icon: '\ud83c\uddef\ud83c\uddf5' }
          ],
          defaultLanguage: 'zh'
        },
        theme: {
          '@primary-color': '#fb4491',
          '@link-color': '#fb4491',
          '@border-radius-base': '2px',
          '@font-size-base': '13px'
        }
      };
    },
    809: function(e, t, n) {
      e.exports = { langIcon: 'selectlang_langIcon__GWKmG', icon: 'selectlang_icon__3jmT1' };
    }
  }
]);
//# sourceMappingURL=23.998c4ff6.chunk.js.map
