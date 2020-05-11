(window.webpackJsonp = window.webpackJsonp || []).push([
  [113],
  {
    100: function(e, t, r) {
      'use strict';
      r.r(t);
      var o = r(60),
        s = (r(404), r(355)),
        n = r(16),
        a = r(17),
        i = r(356),
        c = r.n(i),
        l = new ((function() {
          function e() {
            var t = this;
            Object(n.a)(this, e),
              (this.setHeader = function(e, r) {
                t.instance.defaults.headers.common[e] = r;
              }),
              (this.handleError = function(e) {
                var r = e.message;
                switch (e.status) {
                  case 401:
                  case 404:
                  case 500:
                    break;
                  default:
                    t.notify(r || e);
                }
                return Promise.reject(e);
              }),
              (this.instance = c.a.create()),
              this.initTnterceptors();
          }
          return (
            Object(a.a)(e, [
              {
                key: 'initTnterceptors',
                value: function() {
                  this.instance.interceptors.request.use(
                    function(e) {
                      return e;
                    },
                    function(e) {
                      Promise.reject(e);
                    }
                  );
                }
              },
              {
                key: 'notify',
                value: function(e) {
                  s.a.error({
                    message: '\u8bf7\u6c42\u9519\u8bef',
                    description: ''.concat(
                      e ||
                        'This is the content of the notification. This is the content of the notification. This is the content of the notification.'
                    )
                  });
                }
              },
              {
                key: 'sendRequest',
                value: function(e, t) {
                  var r = t.path,
                    s = t.params,
                    n = t.options,
                    a = n ? Object(o.a)({}, n, { params: s }) : { params: s };
                  return this.instance[e](r, a).catch(this.handleError);
                }
              }
            ]),
            e
          );
        })())();
      t.default = l;
    },
    101: function(e, t, r) {
      'use strict';
      r.r(t),
        r.d(t, 'globalTrendsOption', function() {
          return o;
        }),
        r.d(t, 'popularOption', function() {
          return s;
        }),
        r.d(t, 'monitorListOption', function() {
          return n;
        }),
        r.d(t, 'wordCloudChart', function() {
          return a;
        }),
        r.d(t, 'gaugeOption', function() {
          return i;
        }),
        r.d(t, 'multiAnalysisOption', function() {
          return c;
        }),
        r.d(t, 'analysisOptions', function() {
          return l;
        });
      var o = {
        tooltip: { trigger: 'axis' },
        grid: { left: '0%', right: '1%', bottom: '0%', top: '0%', containLabel: !0 },
        xAxis: [
          {
            show: !1,
            type: 'category',
            boundaryGap: !1,
            data: [
              '\u5468\u4e00',
              '\u5468\u4e8c',
              '\u5468\u4e09',
              '\u5468\u56db',
              '\u5468\u4e94',
              '\u5468\u516d',
              '\u5468\u65e5'
            ]
          }
        ],
        yAxis: [{ show: !1, type: 'value' }],
        series: [
          {
            smooth: !0,
            name: '\u90ae\u4ef6\u8425\u9500',
            type: 'line',
            lineStyle: { color: '#c6f0fd' },
            itemStyle: { color: '#c6f0fd' },
            areaStyle: { color: '#c6f0fd' },
            data: [0, 132, 21, 184, 90, 230, 0]
          },
          {
            smooth: !0,
            name: '\u8054\u76df\u5e7f\u544a',
            type: 'line',
            lineStyle: { color: '#8ac3e8' },
            itemStyle: { color: '#8ac3e8' },
            areaStyle: { color: '#8ac3e8' },
            data: [0, 182, 191, 34, 290, 30, 0]
          },
          {
            smooth: !0,
            name: '\u89c6\u9891\u5e7f\u544a',
            type: 'line',
            lineStyle: { color: '#6bb3e5' },
            itemStyle: { color: '#6bb3e5' },
            areaStyle: { color: '#6bb3e5' },
            data: [0, 232, 121, 154, 190, 330, 0]
          }
        ]
      };
      function s(e, t) {
        return (
          r(427),
          {
            tooltip: { trigger: 'item' },
            bmap: {
              center: [104.114129, 37.550339],
              zoom: 5,
              roam: !0,
              disableDragging: !0,
              mapStyle: {
                styleJson: [
                  { featureType: 'water', elementType: 'all', stylers: { color: '#d1d1d1' } },
                  { featureType: 'land', elementType: 'all', stylers: { color: '#f3f3f3' } },
                  { featureType: 'railway', elementType: 'all', stylers: { visibility: 'off' } },
                  { featureType: 'highway', elementType: 'all', stylers: { color: '#fdfdfd' } },
                  { featureType: 'highway', elementType: 'labels', stylers: { visibility: 'off' } },
                  {
                    featureType: 'arterial',
                    elementType: 'geometry',
                    stylers: { color: '#fefefe' }
                  },
                  {
                    featureType: 'arterial',
                    elementType: 'geometry.fill',
                    stylers: { color: '#fefefe' }
                  },
                  { featureType: 'poi', elementType: 'all', stylers: { visibility: 'off' } },
                  { featureType: 'green', elementType: 'all', stylers: { visibility: 'off' } },
                  { featureType: 'subway', elementType: 'all', stylers: { visibility: 'off' } },
                  { featureType: 'manmade', elementType: 'all', stylers: { color: '#d1d1d1' } },
                  { featureType: 'local', elementType: 'all', stylers: { color: '#d1d1d1' } },
                  {
                    featureType: 'arterial',
                    elementType: 'labels',
                    stylers: { visibility: 'off' }
                  },
                  { featureType: 'boundary', elementType: 'all', stylers: { color: '#fefefe' } },
                  { featureType: 'building', elementType: 'all', stylers: { color: '#d1d1d1' } },
                  {
                    featureType: 'label',
                    elementType: 'labels.text.fill',
                    stylers: { color: '#999999' }
                  }
                ]
              }
            },
            series: [
              {
                name: 'pm2.5',
                type: 'scatter',
                coordinateSystem: 'bmap',
                data: e,
                symbolSize: function(e) {
                  return e[2] / 10;
                },
                label: {
                  normal: { formatter: '{b}', position: 'right', show: !1 },
                  emphasis: { show: !0 }
                },
                itemStyle: { normal: { color: 'rgba(251, 68, 145, 0.6)' } }
              },
              {
                name: 'Top 5',
                type: 'effectScatter',
                coordinateSystem: 'bmap',
                data: t,
                symbolSize: function(e) {
                  return e[2] / 10;
                },
                showEffectOn: 'render',
                rippleEffect: { brushType: 'stroke' },
                hoverAnimation: !0,
                label: { normal: { formatter: '{b}', position: 'right', show: !0 } },
                itemStyle: {
                  normal: {
                    color: 'rgba(251, 68, 145, 0.8)',
                    shadowBlur: 10,
                    shadowColor: 'rgb(251, 68, 145)'
                  }
                },
                zlevel: 1
              }
            ]
          }
        );
      }
      var n = {
        tooltip: { trigger: 'axis', axisPointer: { type: 'shadow' } },
        legend: { top: 0, data: ['2011', '2012'] },
        grid: { left: '0%', right: '4%', bottom: '3%', top: '8%', containLabel: !0 },
        xAxis: { type: 'value', boundaryGap: [0, 0.01] },
        yAxis: {
          type: 'category',
          data: ['Brasil', 'Indonesia', 'America', 'Indian', 'China', 'world sales']
        },
        series: [
          {
            name: '2011',
            type: 'bar',
            barWidth: 10,
            data: [182, 234, 290, 1049, 1317, 6302],
            itemStyle: { color: 'rgba(251, 68, 145, 0.8)' }
          },
          {
            name: '2012',
            type: 'bar',
            barWidth: 10,
            data: [193, 234, 310, 1215, 1341, 6818],
            itemStyle: { color: '#e3e3e3' }
          }
        ]
      };
      function a() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
        r(727);
        var t = [
          'rgb(218,112,214)',
          'rgb(199,21,133)',
          'rgb(255,20,147)',
          'rgb(255,105,180)',
          'rgb(219,112,147)',
          'rgb(255,240,245)',
          'rgb(220,20,60)',
          'rgb(255,192,203)',
          'rgb(255,182,193)',
          'rgb(255,0,255)'
        ];
        function o() {
          var e = Math.floor(-9 * Math.random() + 10);
          return { normal: { color: t[e] } };
        }
        return {
          tooltip: { show: !0 },
          series: [
            {
              name: 'Google Trends',
              type: 'wordCloud',
              left: 'center',
              top: 'center',
              width: '90%',
              height: '90%',
              textRotation: [0, 45, 90, -45],
              textPadding: 0,
              autoSize: { enable: !0, minSize: 14 },
              data: e.map(function(e) {
                return { name: e, value: Math.floor(100 * Math.random()), textStyle: o() };
              })
            }
          ]
        };
      }
      var i = {
          tooltip: { formatter: '{a} <br/>{b} : {c}%' },
          series: [
            {
              radius: '100%',
              name: 'gauge',
              type: 'gauge',
              axisLine: {
                lineStyle: {
                  color: [[0.09, '#e3e3e3'], [0.82, '#fb4491'], [1, '#71669e']],
                  width: 3,
                  shadowColor: '#fff',
                  shadowBlur: 10
                }
              },
              axisLabel: {
                textStyle: {
                  fontWeight: 'bolder',
                  color: '#fff',
                  shadowColor: '#fff',
                  shadowBlur: 10
                }
              },
              axisTick: {
                length: 15,
                lineStyle: { color: 'auto', shadowColor: '#fff', shadowBlur: 10 }
              },
              splitLine: {
                length: 25,
                lineStyle: { width: 3, color: '#fff', shadowColor: '#fff', shadowBlur: 10 }
              },
              pointer: { shadowColor: '#fff', shadowBlur: 5 },
              title: {
                textStyle: {
                  fontWeight: 'bolder',
                  fontSize: 20,
                  fontStyle: 'italic',
                  color: '#e3e3e3'
                }
              },
              detail: {
                offsetCenter: [0, '50%'],
                textStyle: { fontWeight: 'bolder', color: '#fb4491', fontSize: 20 }
              },
              data: [{ value: 70.2, name: 'efficiency' }]
            }
          ]
        },
        c = {
          tooltip: {},
          legend: { left: 0, width: 80, data: ['Allocated Budget', 'Actual Spending'] },
          radar: {
            radius: '75%',
            name: {
              textStyle: {
                color: '#fff',
                backgroundColor: '#999',
                borderRadius: 3,
                padding: [3, 5]
              }
            },
            indicator: [
              { name: 'sales', max: 6500 },
              { name: 'Administration', max: 16e3 },
              { name: 'Information Techology', max: 3e4 },
              { name: 'Customer Support', max: 38e3 },
              { name: 'Development', max: 52e3 },
              { name: 'Marketing', max: 25e3 }
            ]
          },
          series: [
            {
              name: '\u9884\u7b97 vs \u5f00\u9500\uff08Budget vs spending\uff09',
              type: 'radar',
              data: [
                {
                  value: [4300, 1e4, 28e3, 35e3, 5e4, 19e3],
                  name: 'Allocated Budget',
                  itemStyle: { color: '#fb4491' }
                },
                {
                  value: [5e3, 14e3, 28e3, 31e3, 42e3, 21e3],
                  name: 'Actual Spending',
                  itemStyle: { color: '#71669e' }
                }
              ]
            }
          ]
        },
        l = {
          circleOption: {
            legend: {
              orient: 'vertical',
              right: 20,
              data: [
                { name: '\u7537', icon: 'circle' },
                { name: '\u5973', icon: 'circle' },
                { name: '\u672a\u8bc6\u522b', icon: 'circle' }
              ]
            },
            series: {
              name: '\u8bbf\u95ee\u6765\u6e90',
              type: 'pie',
              radius: ['40%', '75%'],
              center: ['45%', '50%'],
              avoidLabelOverlap: !1,
              label: {
                normal: { show: !0, position: 'outside', formatter: '{d}%', fontWeight: 'bold' },
                emphasis: { show: !0, textStyle: { fontSize: '30', fontWeight: 'bold' } }
              },
              labelLine: { normal: { show: !1 } },
              data: [
                { value: 335, name: '\u7537', itemStyle: { color: 'rgba(251, 68, 145, 0.8)' } },
                { value: 310, name: '\u5973', itemStyle: { color: 'rgba(220, 91, 231, 0.8)' } },
                { value: 234, name: '\u672a\u8bc6\u522b', itemStyle: { color: '#d9d9d9' } }
              ]
            }
          },
          barOption: {
            grid: { left: 10, right: 10, top: 40, bottom: 40 },
            xAxis: {
              type: 'category',
              data: ['\u672a\u8bc6\u522b', '0-17', '18-24', '25-34', '35-44', '45+'],
              axisLabel: { color: '#c9c9c9' },
              axisLine: { show: !1 },
              axisTick: { show: !1 }
            },
            yAxis: {
              type: 'value',
              axisLine: { show: !1 },
              axisTick: { show: !1 },
              axisLabel: { show: !1 },
              splitLine: { lineStyle: { color: '#f6f6f6' } }
            },
            series: [
              {
                barCategoryGap: '50%',
                data: [
                  { value: 45, itemStyle: { color: '#d9d9d9' } },
                  4.2,
                  22.5,
                  22.3,
                  '8.00',
                  2.53
                ],
                type: 'bar',
                label: { show: !0, position: 'top', color: '#c9c9c9', formatter: '{c}%' },
                itemStyle: { color: 'rgba(251, 68, 145, 0.8)' },
                z: 2
              },
              {
                type: 'bar',
                silent: !0,
                data: [45, 45, 45, 45, 45, 45],
                barGap: '-100%',
                itemStyle: { color: '#f9f9f9' },
                z: 1
              }
            ]
          },
          cityOption: {
            xAxis: {
              data: [
                '\u672a\u8bc6\u522b',
                '\u4e0a\u6d77',
                '\u5317\u4eac',
                '\u6df1\u5733',
                '\u5e7f\u5dde',
                '\u676d\u5dde'
              ]
            },
            series: {
              data: [
                { name: '\u672a\u8bc6\u522b', value: 45, itemStyle: { color: '#d9d9d9' } },
                14.2,
                2.5,
                7.3,
                '19.00',
                33.53
              ]
            }
          },
          provinceOption: {
            xAxis: {
              data: [
                '\u672a\u8bc6\u522b',
                '\u56db\u5ddd',
                '\u798f\u5efa',
                '\u5e7f\u4e1c',
                '\u6d59\u6c5f',
                '\u6cb3\u5357'
              ]
            },
            series: {
              data: [
                { name: '\u672a\u8bc6\u522b', value: 45, itemStyle: { color: '#d9d9d9' } },
                18.2,
                22.5,
                33.3,
                '9.00',
                13.53
              ]
            }
          },
          lineOption: {
            tooltip: {
              trigger: 'axis',
              axisPointer: { type: 'cross', label: { backgroundColor: '#6a7985' } }
            },
            legend: {
              data: [
                '\u672a\u8bc6\u522b',
                '\u90ae\u4ef6\u8425\u9500',
                '\u89c6\u9891\u5e7f\u544a',
                '\u76f4\u63a5\u8bbf\u95ee',
                '\u641c\u7d22\u5f15\u64ce'
              ]
            },
            grid: { left: '3%', right: '4%', bottom: '3%', containLabel: !0 },
            xAxis: {
              type: 'category',
              boundaryGap: !1,
              axisLine: { lineStyle: { color: '#efefef' } },
              axisLabel: { color: 'rgba(0,0,0,0.7)', fontWeight: 'bold' },
              data: [
                '\u5468\u4e00',
                '\u5468\u4e8c',
                '\u5468\u4e09',
                '\u5468\u56db',
                '\u5468\u4e94',
                '\u5468\u516d',
                '\u5468\u65e5'
              ]
            },
            yAxis: [
              {
                axisLabel: { color: 'rgba(0,0,0,0.7)', fontWeight: 'bold' },
                type: 'value',
                axisLine: { show: !1 },
                axisTick: { show: !1 },
                splitLine: { lineStyle: { color: '#efefef', type: 'dashed' } }
              }
            ],
            series: [
              {
                name: '\u672a\u8bc6\u522b',
                type: 'line',
                smooth: !0,
                data: [520, 682, 534, 534, 390, 820, 410],
                lineStyle: { color: '#efefef' },
                areaStyle: { color: 'rgba(239,239,239,0.7)' },
                itemStyle: { color: '#efefef' }
              },
              {
                name: '\u90ae\u4ef6\u8425\u9500',
                type: 'line',
                smooth: !0,
                lineStyle: { color: 'rgba(220, 91, 231, 0.4)' },
                areaStyle: { color: 'rgba(220, 91, 231, 0.4)' },
                itemStyle: { color: 'rgba(220, 91, 231, 0.4)' },
                data: [220, 182, 191, 234, 290, 330, 310]
              },
              {
                name: '\u641c\u7d22\u5f15\u64ce',
                type: 'line',
                label: { normal: { show: !0, position: 'top' } },
                smooth: !0,
                lineStyle: { color: 'rgb(251, 68, 145,0.9)' },
                areaStyle: { color: 'rgba(251, 68, 145, 0.3)' },
                itemStyle: { color: 'rgba(251, 68, 145, 1)' },
                data: [820, 432, 901, 234, 790, 630, 820]
              }
            ]
          }
        };
    },
    104: function(e, t, r) {
      'use strict';
      r.r(t);
      var o = r(1),
        s = r.n(o),
        n = r(24),
        a = r.n(n),
        i = r(27),
        c = r(94),
        l = r(95),
        u = r(163);
      r(354);
      a.a.render(
        s.a.createElement(i.a, c.Store, s.a.createElement(l.default, null)),
        document.getElementById('root')
      ),
        u.register();
    },
    120: function(e, t, r) {
      'use strict';
      r.r(t),
        r.d(t, 'postLogin', function() {
          return i;
        }),
        r.d(t, 'getUserInfo', function() {
          return c;
        });
      var o = r(100),
        s = r(126),
        n = r.n(s),
        a = n.a.mock({
          'data|1-1': [
            {
              id: '@id',
              name: '@name',
              nickName: '@last',
              phone: /^1[34578]\d{9}$/,
              'age|11-99': 1,
              address: '@county(true)',
              isMale: '@boolean',
              email: '@email',
              createTime: '@datetime'
            }
          ]
        });
      function i(e, t) {
        return o.default.sendRequest('post', {
          path: '/post/login',
          params: { userName: e, password: t }
        });
      }
      function c() {
        return o.default.sendRequest('get', { path: '/get/userInfo' });
      }
      n.a.mock('/post/login', function(e) {
        var t = JSON.parse(e.body).params,
          r = t.userName,
          o = t.password;
        return ('admin' !== r && 'guest' !== r) || 123 !== Number(o)
          ? { message: 'error' }
          : { message: 'ok', userInfo: a };
      }),
        n.a.mock('/get/userInfo', a);
    },
    130: function(e, t, r) {
      'use strict';
      function o(e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 300,
          r = null;
        return function() {
          var o = this,
            s = arguments;
          r && clearTimeout(r),
            (r = setTimeout(function() {
              e.apply(o, s);
            }, t));
        };
      }
      r.r(t),
        r.d(t, 'default', function() {
          return o;
        });
    },
    157: function(e, t, r) {
      'use strict';
      r.r(t);
      var o,
        s,
        n,
        a,
        i,
        c,
        l,
        u,
        p,
        m,
        d,
        f,
        b,
        y,
        h = r(83),
        g = r(14),
        v = r(16),
        w = r(17),
        j = r(8),
        x = (r(128), r(4)),
        O = r(158),
        S = r(130),
        L = r(233),
        P = r.n(L),
        k = r(75);
      Object(x.e)({ enforceActions: 'always' });
      var A =
        ((o = (function() {
          function e() {
            Object(v.a)(this, e),
              Object(g.a)(this, 'spinning', s, this),
              Object(g.a)(this, 'fixed', n, this),
              Object(g.a)(this, 'mountLoading', a, this),
              Object(g.a)(this, 'readyInitializers', i, this),
              Object(g.a)(this, 'collapsed', c, this),
              Object(g.a)(this, 'openMenus', l, this),
              Object(g.a)(this, 'isMobile', u, this),
              Object(g.a)(this, 'breadcrumbList', p, this),
              Object(g.a)(this, 'routeConfig', m, this),
              Object(g.a)(this, 'addBreadcrumb', d, this),
              Object(g.a)(this, 'delBreadcrumb', f, this),
              Object(g.a)(this, 'stopSpinning', b, this),
              Object(g.a)(this, 'toggleCollapsed', y, this),
              this.addWindowEvent(),
              this.changeStatus(),
              this.initMenu();
          }
          return (
            Object(w.a)(e, [
              {
                key: 'addWindowEvent',
                value: function() {
                  var e = this;
                  window.addEventListener(
                    'resize',
                    Object(S.default)(function() {
                      e.changeStatus();
                    })
                  );
                }
              },
              {
                key: 'initMenu',
                value: function() {
                  (this.routeConfig = k.constantRouteConfig), this.setMenu();
                }
              },
              {
                key: 'setMenu',
                value: function() {
                  var e = Object(h.a)(k.constantRouteConfig, 1)[0],
                    t = k.constantRouteConfig[1];
                  (t.routes = k.asyncRouteConfig), (this.routeConfig = [e, t]);
                }
              },
              {
                key: 'changeStatus',
                value: function() {
                  var e = Object(O.default)(navigator.userAgent);
                  (this.isMobile = e.any), this.isMobile && this.toggleCollapsed(!0);
                  var t = document.body.clientWidth;
                  t < 1e3 ? this.toggleCollapsed(!0) : this.toggleCollapsed(!1),
                    t < 600 && (this.isMobile = !0);
                }
              },
              {
                key: 'initBreadcrumb',
                value: function(e, t) {
                  this.breadcrumbList.push({ name: e, path: t, display: !1 });
                }
              },
              {
                key: 'addInitializer',
                value: function(e) {
                  this.readyInitializers.push(e),
                    (this.mountLoading = !0),
                    (this.spinning = !0),
                    P.a.start();
                }
              },
              {
                key: 'checkIsInitial',
                value: function(e) {
                  var t = e.path,
                    r = e.name;
                  this.readyInitializers.includes(t) ||
                    (this.addInitializer(t), r && this.initBreadcrumb(r, t));
                }
              },
              {
                key: 'setOpenMenus',
                value: function(e) {
                  this.openMenus = e;
                }
              }
            ]),
            e
          );
        })()),
        (s = Object(j.a)(o.prototype, 'spinning', [x.k], {
          configurable: !0,
          enumerable: !0,
          writable: !0,
          initializer: function() {
            return !0;
          }
        })),
        (n = Object(j.a)(o.prototype, 'fixed', [x.k], {
          configurable: !0,
          enumerable: !0,
          writable: !0,
          initializer: function() {
            return !1;
          }
        })),
        (a = Object(j.a)(o.prototype, 'mountLoading', [x.k], {
          configurable: !0,
          enumerable: !0,
          writable: !0,
          initializer: function() {
            return !0;
          }
        })),
        (i = Object(j.a)(o.prototype, 'readyInitializers', [x.k], {
          configurable: !0,
          enumerable: !0,
          writable: !0,
          initializer: function() {
            return [];
          }
        })),
        (c = Object(j.a)(o.prototype, 'collapsed', [x.k], {
          configurable: !0,
          enumerable: !0,
          writable: !0,
          initializer: function() {
            return !1;
          }
        })),
        (l = Object(j.a)(o.prototype, 'openMenus', [x.k], {
          configurable: !0,
          enumerable: !0,
          writable: !0,
          initializer: function() {
            return [];
          }
        })),
        (u = Object(j.a)(o.prototype, 'isMobile', [x.k], {
          configurable: !0,
          enumerable: !0,
          writable: !0,
          initializer: function() {
            return !1;
          }
        })),
        (p = Object(j.a)(o.prototype, 'breadcrumbList', [x.k], {
          configurable: !0,
          enumerable: !0,
          writable: !0,
          initializer: function() {
            return [];
          }
        })),
        (m = Object(j.a)(o.prototype, 'routeConfig', [x.k], {
          configurable: !0,
          enumerable: !0,
          writable: !0,
          initializer: function() {
            return [];
          }
        })),
        Object(j.a)(
          o.prototype,
          'initMenu',
          [x.b],
          Object.getOwnPropertyDescriptor(o.prototype, 'initMenu'),
          o.prototype
        ),
        Object(j.a)(
          o.prototype,
          'setMenu',
          [x.b],
          Object.getOwnPropertyDescriptor(o.prototype, 'setMenu'),
          o.prototype
        ),
        Object(j.a)(
          o.prototype,
          'changeStatus',
          [x.b],
          Object.getOwnPropertyDescriptor(o.prototype, 'changeStatus'),
          o.prototype
        ),
        Object(j.a)(
          o.prototype,
          'initBreadcrumb',
          [x.b],
          Object.getOwnPropertyDescriptor(o.prototype, 'initBreadcrumb'),
          o.prototype
        ),
        (d = Object(j.a)(o.prototype, 'addBreadcrumb', [x.b], {
          configurable: !0,
          enumerable: !0,
          writable: !0,
          initializer: function() {
            var e = this;
            return function(t) {
              var r = e.breadcrumbList.find(function(e) {
                return e.path === t;
              });
              r && (r.display = !0);
            };
          }
        })),
        (f = Object(j.a)(o.prototype, 'delBreadcrumb', [x.b], {
          configurable: !0,
          enumerable: !0,
          writable: !0,
          initializer: function() {
            var e = this;
            return function(t, r) {
              var o = !1;
              return (
                (e.breadcrumbList = e.breadcrumbList.reduce(function(e, s) {
                  return s.name === t && ((s.display = !1), (o = s.path === r)), e.push(s), e;
                }, [])),
                o ? e.breadcrumbList[0] : null
              );
            };
          }
        })),
        (b = Object(j.a)(o.prototype, 'stopSpinning', [x.b], {
          configurable: !0,
          enumerable: !0,
          writable: !0,
          initializer: function() {
            var e = this;
            return function() {
              (e.spinning = !1), P.a.done(!0);
            };
          }
        })),
        Object(j.a)(
          o.prototype,
          'addInitializer',
          [x.b],
          Object.getOwnPropertyDescriptor(o.prototype, 'addInitializer'),
          o.prototype
        ),
        Object(j.a)(
          o.prototype,
          'checkIsInitial',
          [x.b],
          Object.getOwnPropertyDescriptor(o.prototype, 'checkIsInitial'),
          o.prototype
        ),
        (y = Object(j.a)(o.prototype, 'toggleCollapsed', [x.b], {
          configurable: !0,
          enumerable: !0,
          writable: !0,
          initializer: function() {
            var e = this;
            return function(t) {
              e.collapsed = [!0, !1].includes(t) ? t : !e.collapsed;
            };
          }
        })),
        Object(j.a)(
          o.prototype,
          'setOpenMenus',
          [x.b],
          Object.getOwnPropertyDescriptor(o.prototype, 'setOpenMenus'),
          o.prototype
        ),
        o);
      t.default = A;
    },
    158: function(e, t, r) {
      'use strict';
      r.r(t),
        r.d(t, 'default', function() {
          return g;
        });
      var o = /iPhone/i,
        s = /iPod/i,
        n = /iPad/i,
        a = /\bAndroid(?:.+)Mobile\b/i,
        i = /Android/i,
        c = /\bAndroid(?:.+)SD4930UR\b/i,
        l = /\bAndroid(?:.+)(?:KF[A-Z]{2,4})\b/i,
        u = /Windows Phone/i,
        p = /\bWindows(?:.+)ARM\b/i,
        m = /BlackBerry/i,
        d = /BB10/i,
        f = /Opera Mini/i,
        b = /\b(CriOS|Chrome)(?:.+)Mobile/i,
        y = /\Mobile(?:.+)Firefox\b/i;
      function h(e, t) {
        return e.test(t);
      }
      function g(e) {
        var t = e || ('undefined' !== typeof navigator ? navigator.userAgent : ''),
          r = t.split('[FBAN');
        'undefined' !== typeof r[1] && (t = r[0]),
          'undefined' !== typeof (r = t.split('Twitter'))[1] && (t = r[0]);
        var g = {
          apple: {
            phone: h(o, t) && !h(u, t),
            ipod: h(s, t),
            tablet: !h(o, t) && h(n, t) && !h(u, t),
            device: (h(o, t) || h(s, t) || h(n, t)) && !h(u, t)
          },
          amazon: { phone: h(c, t), tablet: !h(c, t) && h(l, t), device: h(c, t) || h(l, t) },
          android: {
            phone: (!h(u, t) && h(c, t)) || (!h(u, t) && h(a, t)),
            tablet: !h(u, t) && !h(c, t) && !h(a, t) && (h(l, t) || h(i, t)),
            device: (!h(u, t) && (h(c, t) || h(l, t) || h(a, t) || h(i, t))) || h(/\bokhttp\b/i, t)
          },
          windows: { phone: h(u, t), tablet: h(p, t), device: h(u, t) || h(p, t) },
          other: {
            blackberry: h(m, t),
            blackberry10: h(d, t),
            opera: h(f, t),
            firefox: h(y, t),
            chrome: h(b, t),
            device: h(m, t) || h(d, t) || h(f, t) || h(y, t) || h(b, t)
          }
        };
        return (
          (g.any = g.apple.device || g.android.device || g.windows.device || g.other.device),
          (g.phone = g.apple.phone || g.android.phone || g.windows.phone),
          (g.tablet = g.apple.tablet || g.android.tablet || g.windows.tablet),
          g
        );
      }
    },
    159: function(e, t, r) {
      'use strict';
      r.r(t);
      var o,
        s,
        n = r(60),
        a = r(14),
        i = r(16),
        c = r(17),
        l = r(8),
        u = (r(128), r(4)),
        p = r(249),
        m = r(101);
      Object(u.e)({ enforceActions: 'always' });
      var d =
        ((o = (function() {
          function e() {
            Object(i.a)(this, e),
              Object(a.a)(this, 'showUnDefined', s, this),
              (this.propertyList = ['legend', 'series', 'xAxis']);
          }
          return (
            Object(c.a)(e, [
              {
                key: 'changeShowUnDefined',
                value: function(e) {
                  this.showUnDefined = e;
                }
              },
              {
                key: 'filterUnDefined',
                value: function(e) {
                  var t = this,
                    r = Object(p.cloneDeep)(e),
                    o = function(e) {
                      var o = r[e];
                      t.propertyList.forEach(function(e) {
                        o[e] && (o[e] = t.filterProperty(o[e]));
                      });
                    };
                  for (var s in r) o(s);
                  return r;
                }
              },
              {
                key: 'filterProperty',
                value: function(e) {
                  return (
                    Array.isArray(e)
                      ? e.length < 3
                        ? (e[0].data.shift(), e[1].data.shift())
                        : (e[0].data = [])
                      : (e.data = e.data.filter(function(e) {
                          return e.name
                            ? '\u672a\u8bc6\u522b' !== e.name
                            : '\u672a\u8bc6\u522b' !== e;
                        })),
                    e
                  );
                }
              },
              {
                key: 'getChartOption',
                get: function() {
                  return this.showUnDefined
                    ? Object(n.a)({}, m.analysisOptions)
                    : this.filterUnDefined(Object(n.a)({}, m.analysisOptions));
                }
              }
            ]),
            e
          );
        })()),
        (s = Object(l.a)(o.prototype, 'showUnDefined', [u.k], {
          configurable: !0,
          enumerable: !0,
          writable: !0,
          initializer: function() {
            return !0;
          }
        })),
        Object(l.a)(
          o.prototype,
          'changeShowUnDefined',
          [u.b],
          Object.getOwnPropertyDescriptor(o.prototype, 'changeShowUnDefined'),
          o.prototype
        ),
        Object(l.a)(
          o.prototype,
          'getChartOption',
          [u.d],
          Object.getOwnPropertyDescriptor(o.prototype, 'getChartOption'),
          o.prototype
        ),
        o);
      t.default = d;
    },
    160: function(e, t, r) {
      'use strict';
      r.r(t);
      var o,
        s,
        n,
        a,
        i = r(50),
        c = r.n(i),
        l = r(79),
        u = r(14),
        p = r(16),
        m = r(17),
        d = r(8),
        f = (r(128), r(120)),
        b = r(4);
      Object(b.e)({ enforceActions: 'always' });
      var y =
        ((o = (function() {
          function e() {
            var t = this;
            Object(p.a)(this, e),
              Object(u.a)(this, 'userInfo', s, this),
              Object(u.a)(this, 'authority', n, this),
              Object(u.a)(this, 'reloadUserInfo', a, this),
              Object(b.c)(function() {
                var e = t.getAuthority();
                t.setAuthority(e);
              });
          }
          return (
            Object(m.a)(e, [
              {
                key: 'getAuthority',
                value: function(e) {
                  var t,
                    r = 'undefined' === typeof e ? localStorage.getItem('ra-authority') : e;
                  try {
                    t = JSON.parse(r);
                  } catch (o) {
                    t = r;
                  }
                  return 'string' === typeof t ? [t] : t;
                }
              },
              {
                key: 'setAuthority',
                value: function(e) {
                  var t = 'string' === typeof e ? [e] : e;
                  localStorage.setItem('ra-authority', JSON.stringify(t)), (this.authority = t);
                }
              },
              {
                key: 'handleUserLogin',
                value: function(e, t) {
                  var r = this;
                  return Object(f.postLogin)(e, t).then(function(t) {
                    var o = t.data,
                      s = o.message,
                      n = o.userInfo;
                    if ('ok' === s) {
                      var a = n.data[0];
                      return r.setUserInfo(a), r.setAuthority(e), !0;
                    }
                    return !1;
                  });
                }
              },
              {
                key: 'setUserInfo',
                value: function(e) {
                  (this.userInfo = e), localStorage.setItem('ra-user', JSON.stringify(e));
                }
              },
              {
                key: 'userLogout',
                value: function() {
                  (this.userInfo = {}),
                    (this.authority = []),
                    localStorage.removeItem('ra-authority'),
                    localStorage.removeItem('ra-user');
                }
              }
            ]),
            e
          );
        })()),
        (s = Object(d.a)(o.prototype, 'userInfo', [b.k], {
          configurable: !0,
          enumerable: !0,
          writable: !0,
          initializer: function() {
            return {};
          }
        })),
        (n = Object(d.a)(o.prototype, 'authority', [b.k], {
          configurable: !0,
          enumerable: !0,
          writable: !0,
          initializer: function() {
            return [];
          }
        })),
        Object(d.a)(
          o.prototype,
          'setAuthority',
          [b.b],
          Object.getOwnPropertyDescriptor(o.prototype, 'setAuthority'),
          o.prototype
        ),
        Object(d.a)(
          o.prototype,
          'handleUserLogin',
          [b.b],
          Object.getOwnPropertyDescriptor(o.prototype, 'handleUserLogin'),
          o.prototype
        ),
        Object(d.a)(
          o.prototype,
          'setUserInfo',
          [b.b],
          Object.getOwnPropertyDescriptor(o.prototype, 'setUserInfo'),
          o.prototype
        ),
        Object(d.a)(
          o.prototype,
          'userLogout',
          [b.b],
          Object.getOwnPropertyDescriptor(o.prototype, 'userLogout'),
          o.prototype
        ),
        (a = Object(d.a)(o.prototype, 'reloadUserInfo', [b.b], {
          configurable: !0,
          enumerable: !0,
          writable: !0,
          initializer: function() {
            var e = this;
            return Object(l.a)(
              c.a.mark(function t() {
                var r, o, s, n;
                return c.a.wrap(function(t) {
                  for (;;)
                    switch ((t.prev = t.next)) {
                      case 0:
                        if (
                          ((r = localStorage.getItem('ra-user')),
                          (o = e.getAuthority()),
                          (s = {}),
                          !r)
                        ) {
                          t.next = 7;
                          break;
                        }
                        (s = JSON.parse(r)), (t.next = 11);
                        break;
                      case 7:
                        return (t.next = 9), Object(f.getUserInfo)();
                      case 9:
                        (n = t.sent), (s = n.data[0]);
                      case 11:
                        e.setUserInfo(s), e.setAuthority(o);
                      case 13:
                      case 'end':
                        return t.stop();
                    }
                }, t);
              })
            );
          }
        })),
        o);
      t.default = y;
    },
    161: function(e, t, r) {
      'use strict';
      r.r(t);
      var o,
        s,
        n,
        a = r(50),
        i = r.n(a),
        c = r(79),
        l = r(14),
        u = r(16),
        p = r(17),
        m = r(8),
        d = (r(128), r(4));
      Object(d.e)({ enforceActions: 'always' });
      var f =
        ((o = (function() {
          function e() {
            Object(u.a)(this, e),
              Object(l.a)(this, 'locale', s, this),
              Object(l.a)(this, 'localeObj', n, this),
              this.initLocaleList();
          }
          return (
            Object(p.a)(e, [
              {
                key: 'initLocaleList',
                value: (function() {
                  var e = Object(c.a)(
                    i.a.mark(function e() {
                      var t;
                      return i.a.wrap(
                        function(e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                return (
                                  (e.next = 2), r(792)('./'.concat(this.locale, '/mapping.json'))
                                );
                              case 2:
                                (t = e.sent), this.setLocaleObj(t);
                              case 4:
                              case 'end':
                                return e.stop();
                            }
                        },
                        e,
                        this
                      );
                    })
                  );
                  return function() {
                    return e.apply(this, arguments);
                  };
                })()
              },
              {
                key: 'setLocale',
                value: function(e) {
                  (this.locale = e), localStorage.setItem('ra-locale', e), window.location.reload();
                }
              },
              {
                key: 'setLocaleObj',
                value: function(e) {
                  this.localeObj = e.default;
                }
              }
            ]),
            e
          );
        })()),
        (s = Object(m.a)(o.prototype, 'locale', [d.k], {
          configurable: !0,
          enumerable: !0,
          writable: !0,
          initializer: function() {
            return localStorage.getItem('ra-locale') || 'zh';
          }
        })),
        (n = Object(m.a)(o.prototype, 'localeObj', [d.k], {
          configurable: !0,
          enumerable: !0,
          writable: !0,
          initializer: function() {
            return {};
          }
        })),
        Object(m.a)(
          o.prototype,
          'setLocale',
          [d.b],
          Object.getOwnPropertyDescriptor(o.prototype, 'setLocale'),
          o.prototype
        ),
        Object(m.a)(
          o.prototype,
          'setLocaleObj',
          [d.b],
          Object.getOwnPropertyDescriptor(o.prototype, 'setLocaleObj'),
          o.prototype
        ),
        o);
      t.default = f;
    },
    162: function(e, t, r) {
      'use strict';
      r.r(t);
      var o = r(1),
        s = r.n(o),
        n = r(82),
        a = r(49);
      t.default = function() {
        return s.a.createElement(n.default, {
          errorCode: '404',
          title: s.a.createElement(a.default, { id: 'exception.404' })
        });
      };
    },
    163: function(e, t, r) {
      'use strict';
      r.r(t),
        r.d(t, 'register', function() {
          return s;
        }),
        r.d(t, 'unregister', function() {
          return a;
        });
      var o = Boolean(
        'localhost' === window.location.hostname ||
          '[::1]' === window.location.hostname ||
          window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/)
      );
      function s(e) {
        if ('serviceWorker' in navigator) {
          if (new URL('', window.location.href).origin !== window.location.origin) return;
          window.addEventListener('load', function() {
            var t = ''.concat('', '/service-worker.js');
            o
              ? (!(function(e, t) {
                  fetch(e)
                    .then(function(r) {
                      var o = r.headers.get('content-type');
                      404 === r.status || (null != o && -1 === o.indexOf('javascript'))
                        ? navigator.serviceWorker.ready.then(function(e) {
                            e.unregister().then(function() {
                              window.location.reload();
                            });
                          })
                        : n(e, t);
                    })
                    .catch(function() {
                      console.log('No internet connection found. App is running in offline mode.');
                    });
                })(t, e),
                navigator.serviceWorker.ready.then(function() {
                  console.log(
                    'This web app is being served cache-first by a service worker. To learn more, visit http://bit.ly/CRA-PWA'
                  );
                }))
              : n(t, e);
          });
        }
      }
      function n(e, t) {
        navigator.serviceWorker
          .register(e)
          .then(function(e) {
            e.onupdatefound = function() {
              var r = e.installing;
              null != r &&
                (r.onstatechange = function() {
                  'installed' === r.state &&
                    (navigator.serviceWorker.controller
                      ? (console.log(
                          'New content is available and will be used when all tabs for this page are closed. See http://bit.ly/CRA-PWA.'
                        ),
                        t && t.onUpdate && t.onUpdate(e))
                      : (console.log('Content is cached for offline use.'),
                        t && t.onSuccess && t.onSuccess(e)));
                });
            };
          })
          .catch(function(e) {
            console.error('Error during service worker registration:', e);
          });
      }
      function a() {
        'serviceWorker' in navigator &&
          navigator.serviceWorker.ready.then(function(e) {
            e.unregister();
          });
      }
    },
    232: function(e, t, r) {
      e.exports = { exception: 'exception_exception__XoUUU' };
    },
    353: function(e, t, r) {},
    354: function(e, t, r) {},
    422: function(e, t, r) {
      e.exports = r(104);
    },
    49: function(e, t, r) {
      'use strict';
      r.r(t);
      var o,
        s = r(125),
        n = r(16),
        a = r(17),
        i = r(43),
        c = r(42),
        l = r(44),
        u = r(1),
        p = r.n(u),
        m = r(27),
        d =
          Object(m.b)('localeStore')(
            (o =
              Object(m.c)(
                (o = (function(e) {
                  function t() {
                    return (
                      Object(n.a)(this, t), Object(i.a)(this, Object(c.a)(t).apply(this, arguments))
                    );
                  }
                  return (
                    Object(l.a)(t, e),
                    Object(a.a)(t, [
                      {
                        key: 'render',
                        value: function() {
                          var e = this.props,
                            t = e.id,
                            r = e.defaultMessage,
                            o = e.localeStore.localeObj,
                            n = Object(s.a)(e, ['id', 'defaultMessage', 'localeStore']);
                          return p.a.createElement('span', n, o[t] || r);
                        }
                      }
                    ]),
                    t
                  );
                })(u.Component))
              ) || o)
          ) || o;
      t.default = d;
    },
    75: function(e, t, r) {
      'use strict';
      r.r(t),
        r.d(t, 'constantRouteConfig', function() {
          return o;
        }),
        r.d(t, 'asyncRouteConfig', function() {
          return s;
        });
      var o = [
          {
            path: '/user',
            component: ['/layout/UserLayout', 'fadeRA'],
            routes: [{ name: 'Login', path: '/user/login', component: ['/views/User/Login'] }]
          },
          {
            path: '/',
            component: ['/layout/MainLayout', 'fadeRA'],
            authority: ['admin', 'guest'],
            routes: []
          }
        ],
        s = [
          {
            name: 'dashboard',
            icon: 'pie-chart',
            path: '/dashboard',
            component: ['/views/Dashboard']
          },
          { path: '/', exact: !0, redirect: '/dashboard', hideMenu: !0 },
          {
            name: 'program',
            icon: 'appstore',
            path: '/program',
            routes: [
              {
                name: 'analysis',
                path: '/program/analysis',
                component: ['/views/Program/Analysis'],
                authority: ['admin']
              },
              { name: 'monitor', path: '/program/monitor', component: ['/views/Program/Monitor'] },
              {
                name: 'platform',
                path: '/program/platform',
                component: ['/views/Program/Platform']
              }
            ]
          },
          {
            name: 'form',
            icon: 'form',
            path: '/form',
            routes: [
              {
                name: 'basicForm',
                path: '/form/basicForm',
                component: ['/views/Form/BasicForm'],
                authority: ['admin']
              },
              { name: 'stepForm', path: '/form/stepForm', component: ['/views/Form/StepForm'] },
              {
                name: '\u4e09\u7ea7\u83dc\u5355',
                path: '/form/test',
                routes: [
                  {
                    name: '\u4e09\u7ea7\u83dc\u5355',
                    path: '/form/test/test1',
                    component: ['/views/Form/TestDetail']
                  }
                ]
              }
            ]
          },
          {
            name: 'list',
            icon: 'ordered-list',
            path: '/list',
            routes: [
              { name: 'basicList', path: '/list/basicList', component: ['/views/List/BasicList'] },
              { name: 'cardList', path: '/list/cardList', component: ['/views/List/CardList'] },
              {
                name: 'basicTable',
                path: '/list/basicTable',
                component: ['/views/List/BasicTable']
              }
            ]
          },
          {
            name: 'map',
            icon: 'heat-map',
            path: '/map',
            component: ['/views/Map'],
            authority: ['admin']
          },
          {
            name: 'gallery',
            icon: 'picture',
            path: '/gallery',
            component: ['/views/Gallery'],
            authority: ['admin']
          },
          {
            name: 'result',
            icon: 'check-circle',
            path: '/result',
            routes: [
              {
                name: 'successResult',
                path: '/result/successResult',
                component: ['/views/Result/SuccessResult']
              },
              {
                name: 'failedResult',
                path: '/result/failedResult',
                component: ['/views/Result/FailedResult']
              }
            ]
          },
          {
            name: 'exception',
            icon: 'warning',
            path: '/exception',
            routes: [
              {
                name: '403',
                path: '/exception/403',
                component: ['/views/Exception/403', 'bounceIn-animated']
              },
              { name: '404', path: '/exception/404', component: ['/views/Exception/404'] },
              { name: '500', path: '/exception/500', component: ['/views/Exception/500'] },
              {
                name: 'index',
                path: '/exception/home',
                component: ['/views/Exception'],
                hideMenu: !0
              }
            ]
          }
        ];
    },
    792: function(e, t, r) {
      var o = {
        './en/mapping.json': [255, 30],
        './ja/mapping.json': [256, 31],
        './zh/mapping.json': [257, 32]
      };
      function s(e) {
        if (!r.o(o, e))
          return Promise.resolve().then(function() {
            var t = new Error("Cannot find module '" + e + "'");
            throw ((t.code = 'MODULE_NOT_FOUND'), t);
          });
        var t = o[e],
          s = t[0];
        return r.e(t[1]).then(function() {
          return r.t(s, 3);
        });
      }
      (s.keys = function() {
        return Object.keys(o);
      }),
        (s.id = 792),
        (e.exports = s);
    },
    802: function(e, t, r) {
      var o = {
        './src': [104, 9],
        './src/': [104, 9],
        './src/api/analysis': [378, 9, 93],
        './src/api/analysis.js': [378, 9, 93],
        './src/api/dashboard': [379, 9, 94],
        './src/api/dashboard.js': [379, 9, 94],
        './src/api/list': [367, 9, 95],
        './src/api/list.js': [367, 9, 95],
        './src/api/platform': [365, 9, 96],
        './src/api/platform.js': [365, 9, 96],
        './src/api/user': [120, 9],
        './src/api/user.js': [120, 9],
        './src/assets/chartOption': [101, 9],
        './src/assets/chartOption.js': [101, 9],
        './src/assets/image/cardlist.png': [818, 7, 144],
        './src/assets/image/gallery/1.webp': [828, 7, 68],
        './src/assets/image/gallery/10.webp': [829, 7, 69],
        './src/assets/image/gallery/11.webp': [830, 7, 70],
        './src/assets/image/gallery/12.webp': [831, 7, 71],
        './src/assets/image/gallery/13.webp': [832, 7, 72],
        './src/assets/image/gallery/14.webp': [833, 7, 73],
        './src/assets/image/gallery/15.webp': [834, 7, 74],
        './src/assets/image/gallery/16.webp': [835, 7, 75],
        './src/assets/image/gallery/17.webp': [836, 7, 76],
        './src/assets/image/gallery/18.webp': [837, 7, 77],
        './src/assets/image/gallery/19.webp': [838, 7, 78],
        './src/assets/image/gallery/2.webp': [839, 7, 79],
        './src/assets/image/gallery/20.webp': [840, 7, 80],
        './src/assets/image/gallery/21.webp': [841, 7, 81],
        './src/assets/image/gallery/22.webp': [842, 7, 82],
        './src/assets/image/gallery/23.webp': [843, 7, 83],
        './src/assets/image/gallery/24.webp': [844, 7, 84],
        './src/assets/image/gallery/25.webp': [845, 7, 85],
        './src/assets/image/gallery/3.webp': [846, 7, 86],
        './src/assets/image/gallery/4.webp': [847, 7, 87],
        './src/assets/image/gallery/5.webp': [848, 7, 88],
        './src/assets/image/gallery/6.webp': [849, 7, 89],
        './src/assets/image/gallery/7.webp': [850, 7, 90],
        './src/assets/image/gallery/8.webp': [851, 7, 91],
        './src/assets/image/gallery/9.webp': [852, 7, 92],
        './src/assets/image/loginBack.png': [853, 7, 145],
        './src/assets/image/loginBackground.jpg': [854, 7, 146],
        './src/assets/image/userPhoto.jpg': [814, 7, 147],
        './src/assets/image/weather.svg': [855, 7, 143],
        './src/assets/popular': [383, 9, 29],
        './src/assets/popular.js': [383, 9, 29],
        './src/components/AsyncComponent': [96, 9],
        './src/components/AsyncComponent/': [96, 9],
        './src/components/AsyncComponent/index': [96, 9],
        './src/components/AsyncComponent/index.jsx': [96, 9],
        './src/components/Authorized': [174, 9, 26],
        './src/components/Authorized/': [174, 9, 26],
        './src/components/Authorized/CheckPermission': [380, 9, 97],
        './src/components/Authorized/CheckPermission.jsx': [380, 9, 97],
        './src/components/Authorized/index': [174, 9, 26],
        './src/components/Authorized/index.jsx': [174, 9, 26],
        './src/components/Echarts': [164, 9, 18],
        './src/components/Echarts/': [164, 9, 18],
        './src/components/Echarts/index': [164, 9, 18],
        './src/components/Echarts/index.jsx': [164, 9, 18],
        './src/components/Exception': [82, 9],
        './src/components/Exception/': [82, 9],
        './src/components/Exception/exception.module.scss': [232, 7],
        './src/components/Exception/index': [82, 9],
        './src/components/Exception/index.jsx': [82, 9],
        './src/components/Footer': [175, 9, 19],
        './src/components/Footer/': [175, 9, 19],
        './src/components/Footer/footer.module.scss': [815, 7, 128],
        './src/components/Footer/index': [175, 9, 19],
        './src/components/Footer/index.jsx': [175, 9, 19],
        './src/components/FormatterLocale': [49, 9],
        './src/components/FormatterLocale/': [49, 9],
        './src/components/FormatterLocale/index': [49, 9],
        './src/components/FormatterLocale/index.jsx': [49, 9],
        './src/components/Layout': [176, 9, 0, 3, 4, 5, 12],
        './src/components/Layout/': [176, 9, 0, 3, 4, 5, 12],
        './src/components/Layout/Header': [369, 9, 0, 3, 4, 5, 42],
        './src/components/Layout/Header.jsx': [369, 9, 0, 3, 4, 5, 42],
        './src/components/Layout/Navigator': [371, 9, 0, 3, 4, 54, 58],
        './src/components/Layout/Navigator.jsx': [371, 9, 0, 3, 4, 54, 58],
        './src/components/Layout/SiderMenu': [372, 9, 0, 3, 4, 57],
        './src/components/Layout/SiderMenu.jsx': [372, 9, 0, 3, 4, 57],
        './src/components/Layout/UserInfo': [370, 9, 0, 3, 4, 5, 52],
        './src/components/Layout/UserInfo.jsx': [370, 9, 0, 3, 4, 5, 52],
        './src/components/Layout/header.module.scss': [807, 7, 129],
        './src/components/Layout/index': [176, 9, 0, 3, 4, 5, 12],
        './src/components/Layout/index.jsx': [176, 9, 0, 3, 4, 5, 12],
        './src/components/Layout/siderMenu.module.scss': [810, 7, 130],
        './src/components/Loading': [173, 9, 25],
        './src/components/Loading/': [173, 9, 25],
        './src/components/Loading/index': [173, 9, 25],
        './src/components/Loading/index.jsx': [173, 9, 25],
        './src/components/Loading/loading.module.scss': [811, 7, 131],
        './src/components/PageHeader': [166, 9, 20],
        './src/components/PageHeader/': [166, 9, 20],
        './src/components/PageHeader/Breadcrumb': [362, 9, 55],
        './src/components/PageHeader/Breadcrumb.jsx': [362, 9, 55],
        './src/components/PageHeader/index': [166, 9, 20],
        './src/components/PageHeader/index.jsx': [166, 9, 20],
        './src/components/PageHeader/pageHeader.module.scss': [804, 7, 132],
        './src/components/PageWrapper': [167, 9, 17],
        './src/components/PageWrapper/': [167, 9, 17],
        './src/components/PageWrapper/index': [167, 9, 17],
        './src/components/PageWrapper/index.jsx': [167, 9, 17],
        './src/components/PageWrapper/pageWrapper.module.scss': [805, 7, 133],
        './src/components/RenderRoutes': [95, 9],
        './src/components/RenderRoutes/': [95, 9],
        './src/components/RenderRoutes/index': [95, 9],
        './src/components/RenderRoutes/index.jsx': [95, 9],
        './src/components/Result': [170, 9, 22],
        './src/components/Result/': [170, 9, 22],
        './src/components/Result/index': [170, 9, 22],
        './src/components/Result/index.jsx': [170, 9, 22],
        './src/components/Result/result.module.scss': [808, 7, 134],
        './src/components/SelectLang': [172, 9, 0, 3, 4, 5, 23],
        './src/components/SelectLang/': [172, 9, 0, 3, 4, 5, 23],
        './src/components/SelectLang/index': [172, 9, 0, 3, 4, 5, 23],
        './src/components/SelectLang/index.jsx': [172, 9, 0, 3, 4, 5, 23],
        './src/components/SelectLang/selectlang.module.scss': [809, 7, 135],
        './src/components/SvgIcon': [368, 9, 98],
        './src/components/SvgIcon.jsx': [368, 9, 98],
        './src/components/WrapAnimation': [97, 9],
        './src/components/WrapAnimation/': [97, 9],
        './src/components/WrapAnimation/index': [97, 9],
        './src/components/WrapAnimation/index.jsx': [97, 9],
        './src/config/router.config': [75, 9],
        './src/config/router.config.js': [75, 9],
        './src/config/setting': [363, 7, 99],
        './src/config/setting.js': [363, 7, 99],
        './src/index': [104, 9],
        './src/index.js': [104, 9],
        './src/layout/MainLayout': [407, 9, 0, 3, 4, 5, 38],
        './src/layout/MainLayout.jsx': [407, 9, 0, 3, 4, 5, 38],
        './src/layout/UserLayout': [408, 9, 63],
        './src/layout/UserLayout.jsx': [408, 9, 63],
        './src/layout/mainLayout.module.scss': [819, 7, 136],
        './src/layout/userLayout.module.scss': [820, 7, 137],
        './src/locales/en/mapping': [255, 3, 30],
        './src/locales/en/mapping.json': [255, 3, 30],
        './src/locales/ja/mapping': [256, 3, 31],
        './src/locales/ja/mapping.json': [256, 3, 31],
        './src/locales/zh/mapping': [257, 3, 32],
        './src/locales/zh/mapping.json': [257, 3, 32],
        './src/react-app-env.d': [409, 7, 100],
        './src/react-app-env.d.ts': [409, 7, 100],
        './src/serviceWorker': [163, 9],
        './src/serviceWorker.js': [163, 9],
        './src/store': [94, 9],
        './src/store/': [94, 9],
        './src/store/index': [94, 9],
        './src/store/index.ts': [94, 9],
        './src/store/layoutStore': [157, 9],
        './src/store/layoutStore.ts': [157, 9],
        './src/store/localeStore': [161, 9],
        './src/store/localeStore.ts': [161, 9],
        './src/store/programStore': [159, 9],
        './src/store/programStore.ts': [159, 9],
        './src/store/userStore': [160, 9],
        './src/store/userStore.ts': [160, 9],
        './src/style/antdStyle.scss': [856, 7, 116],
        './src/style/color.scss': [857, 7, 117],
        './src/style/custom.scss': [858, 7, 118],
        './src/style/index.scss': [354, 7],
        './src/style/nprogress.scss': [859, 7, 119],
        './src/style/popStyle.scss': [860, 7, 120],
        './src/style/wrapAnimation.scss': [353, 7],
        './src/utlis/authorityTools': [384, 9, 101],
        './src/utlis/authorityTools.js': [384, 9, 101],
        './src/utlis/debounce': [130, 9],
        './src/utlis/debounce.js': [130, 9],
        './src/utlis/echartTools': [381, 9, 65],
        './src/utlis/echartTools.js': [381, 9, 65],
        './src/utlis/io': [100, 9],
        './src/utlis/io.js': [100, 9],
        './src/utlis/isMobile': [158, 9],
        './src/utlis/isMobile.js': [158, 9],
        './src/views/Dashboard': [179, 9, 0, 1, 2, 3, 8],
        './src/views/Dashboard/': [179, 9, 0, 1, 2, 3, 8],
        './src/views/Dashboard/GlobalTrends': [385, 9, 0, 1, 2, 47],
        './src/views/Dashboard/GlobalTrends.jsx': [385, 9, 0, 1, 2, 47],
        './src/views/Dashboard/Performance': [386, 9, 0, 1, 2, 61, 102],
        './src/views/Dashboard/Performance.jsx': [386, 9, 0, 1, 2, 61, 102],
        './src/views/Dashboard/RowInfoCard': [387, 9, 0, 1, 2, 59],
        './src/views/Dashboard/RowInfoCard.jsx': [387, 9, 0, 1, 2, 59],
        './src/views/Dashboard/SaleTable': [388, 9, 0, 1, 2, 3, 35],
        './src/views/Dashboard/SaleTable.jsx': [388, 9, 0, 1, 2, 3, 35],
        './src/views/Dashboard/Weather': [389, 9, 0, 1, 2, 109, 64],
        './src/views/Dashboard/Weather.jsx': [389, 9, 0, 1, 2, 109, 64],
        './src/views/Dashboard/dashboard.scss': [821, 7, 121],
        './src/views/Dashboard/index': [179, 9, 0, 1, 2, 3, 8],
        './src/views/Dashboard/index.jsx': [179, 9, 0, 1, 2, 3, 8],
        './src/views/Exception': [180, 9, 27],
        './src/views/Exception/': [180, 9, 27],
        './src/views/Exception/403': [403, 9, 28],
        './src/views/Exception/403.jsx': [403, 9, 28],
        './src/views/Exception/404': [162, 9],
        './src/views/Exception/404.jsx': [162, 9],
        './src/views/Exception/500': [410, 9, 103],
        './src/views/Exception/500.jsx': [410, 9, 103],
        './src/views/Exception/index': [180, 9, 27],
        './src/views/Exception/index.jsx': [180, 9, 27],
        './src/views/Form/BasicForm': [418, 9, 0, 1, 2, 3, 33],
        './src/views/Form/BasicForm.jsx': [418, 9, 0, 1, 2, 3, 33],
        './src/views/Form/StepForm': [181, 9, 0, 1, 2, 7, 15],
        './src/views/Form/StepForm/': [181, 9, 0, 1, 2, 7, 15],
        './src/views/Form/StepForm/Step1': [373, 9, 0, 1, 3, 6, 40],
        './src/views/Form/StepForm/Step1.jsx': [373, 9, 0, 1, 3, 6, 40],
        './src/views/Form/StepForm/Step2': [374, 9, 1, 6, 53],
        './src/views/Form/StepForm/Step2.jsx': [374, 9, 1, 6, 53],
        './src/views/Form/StepForm/Step3': [375, 9, 45],
        './src/views/Form/StepForm/Step3.jsx': [375, 9, 45],
        './src/views/Form/StepForm/form.module.scss': [806, 7, 138],
        './src/views/Form/StepForm/formStore': [366, 9, 104],
        './src/views/Form/StepForm/formStore.ts': [366, 9, 104],
        './src/views/Form/StepForm/index': [181, 9, 0, 1, 2, 7, 15],
        './src/views/Form/StepForm/index.jsx': [181, 9, 0, 1, 2, 7, 15],
        './src/views/Form/Test': [411, 9, 105],
        './src/views/Form/Test.jsx': [411, 9, 105],
        './src/views/Form/TestDetail': [412, 9, 106],
        './src/views/Form/TestDetail.jsx': [412, 9, 106],
        './src/views/Gallery': [188, 9, 0, 1, 2, 21],
        './src/views/Gallery/': [188, 9, 0, 1, 2, 21],
        './src/views/Gallery/index': [188, 9, 0, 1, 2, 21],
        './src/views/Gallery/index.jsx': [188, 9, 0, 1, 2, 21],
        './src/views/Gallery/index.scss': [822, 7, 122],
        './src/views/List/BasicList': [182, 9, 0, 1, 2, 3, 9],
        './src/views/List/BasicList/': [182, 9, 0, 1, 2, 3, 9],
        './src/views/List/BasicList/ListTable': [390, 9, 0, 1, 2, 3, 36],
        './src/views/List/BasicList/ListTable.jsx': [390, 9, 0, 1, 2, 3, 36],
        './src/views/List/BasicList/index': [182, 9, 0, 1, 2, 3, 9],
        './src/views/List/BasicList/index.jsx': [182, 9, 0, 1, 2, 3, 9],
        './src/views/List/BasicList/listTable.module.scss': [812, 7, 139],
        './src/views/List/BasicTable': [413, 9, 0, 1, 2, 3, 34],
        './src/views/List/BasicTable.jsx': [413, 9, 0, 1, 2, 3, 34],
        './src/views/List/CardList': [414, 9, 0, 1, 2, 3, 37],
        './src/views/List/CardList.jsx': [414, 9, 0, 1, 2, 3, 37],
        './src/views/List/list.module.scss': [816, 7, 140],
        './src/views/Map': [183, 9, 0, 1, 2, 24],
        './src/views/Map/': [183, 9, 0, 1, 2, 24],
        './src/views/Map/index': [183, 9, 0, 1, 2, 24],
        './src/views/Map/index.jsx': [183, 9, 0, 1, 2, 24],
        './src/views/Map/myMap.scss': [823, 7, 123],
        './src/views/Program/Analysis': [184, 9, 0, 1, 2, 3, 10],
        './src/views/Program/Analysis/': [184, 9, 0, 1, 2, 3, 10],
        './src/views/Program/Analysis/ControllerCard': [402, 9, 0, 1, 2, 3, 39],
        './src/views/Program/Analysis/ControllerCard.jsx': [402, 9, 0, 1, 2, 3, 39],
        './src/views/Program/Analysis/DistributeCard': [391, 9, 0, 1, 2, 44],
        './src/views/Program/Analysis/DistributeCard.jsx': [391, 9, 0, 1, 2, 44],
        './src/views/Program/Analysis/analysis.scss': [824, 7, 124],
        './src/views/Program/Analysis/index': [184, 9, 0, 1, 2, 3, 10],
        './src/views/Program/Analysis/index.jsx': [184, 9, 0, 1, 2, 3, 10],
        './src/views/Program/Monitor': [185, 9, 0, 1, 2, 14],
        './src/views/Program/Monitor/': [185, 9, 0, 1, 2, 14],
        './src/views/Program/Monitor/Efficiency': [392, 9, 0, 1, 2, 48],
        './src/views/Program/Monitor/Efficiency.jsx': [392, 9, 0, 1, 2, 48],
        './src/views/Program/Monitor/MonitorList': [393, 9, 0, 1, 2, 49],
        './src/views/Program/Monitor/MonitorList.jsx': [393, 9, 0, 1, 2, 49],
        './src/views/Program/Monitor/PopularMap': [394, 9, 0, 1, 2, 62],
        './src/views/Program/Monitor/PopularMap.jsx': [394, 9, 0, 1, 2, 62],
        './src/views/Program/Monitor/Proportion': [395, 9, 0, 1, 2, 46],
        './src/views/Program/Monitor/Proportion.jsx': [395, 9, 0, 1, 2, 46],
        './src/views/Program/Monitor/Surplus': [396, 9, 0, 1, 2, 107],
        './src/views/Program/Monitor/Surplus.jsx': [396, 9, 0, 1, 2, 107],
        './src/views/Program/Monitor/index': [185, 9, 0, 1, 2, 14],
        './src/views/Program/Monitor/index.jsx': [185, 9, 0, 1, 2, 14],
        './src/views/Program/Monitor/monitor.scss': [825, 7, 125],
        './src/views/Program/Platform': [186, 9, 0, 1, 2, 11],
        './src/views/Program/Platform/': [186, 9, 0, 1, 2, 11],
        './src/views/Program/Platform/MultiAnalysis': [397, 9, 0, 1, 2, 50],
        './src/views/Program/Platform/MultiAnalysis.jsx': [397, 9, 0, 1, 2, 50],
        './src/views/Program/Platform/PlatformHead': [415, 9, 0, 1, 2, 67],
        './src/views/Program/Platform/PlatformHead.jsx': [415, 9, 0, 1, 2, 67],
        './src/views/Program/Platform/PlatformProject': [398, 9, 0, 1, 2, 66],
        './src/views/Program/Platform/PlatformProject.jsx': [398, 9, 0, 1, 2, 66],
        './src/views/Program/Platform/QuickStart': [399, 9, 0, 1, 2, 56],
        './src/views/Program/Platform/QuickStart.jsx': [399, 9, 0, 1, 2, 56],
        './src/views/Program/Platform/TeamCard': [400, 9, 0, 1, 2, 108],
        './src/views/Program/Platform/TeamCard.jsx': [400, 9, 0, 1, 2, 108],
        './src/views/Program/Platform/index': [186, 9, 0, 1, 2, 11],
        './src/views/Program/Platform/index.jsx': [186, 9, 0, 1, 2, 11],
        './src/views/Program/Platform/platform.scss': [826, 7, 126],
        './src/views/Result/FailedResult': [416, 9, 0, 1, 2, 41],
        './src/views/Result/FailedResult.jsx': [416, 9, 0, 1, 2, 41],
        './src/views/Result/SuccessResult': [417, 9, 0, 1, 2, 7, 43],
        './src/views/Result/SuccessResult.jsx': [417, 9, 0, 1, 2, 7, 43],
        './src/views/Result/styles.module.scss': [817, 7, 141],
        './src/views/TsExample': [187, 9, 16],
        './src/views/TsExample/': [187, 9, 16],
        './src/views/TsExample/index': [187, 9, 16],
        './src/views/TsExample/index.module.scss': [827, 7, 142],
        './src/views/TsExample/index.tsx': [187, 9, 16],
        './src/views/User/Login': [419, 9, 0, 1, 6, 13, 51],
        './src/views/User/Login.jsx': [419, 9, 0, 1, 6, 13, 51],
        './src/views/User/LoginForm': [401, 9, 0, 1, 6, 13, 60],
        './src/views/User/LoginForm.jsx': [401, 9, 0, 1, 6, 13, 60],
        './src/views/User/login.scss': [813, 7, 127]
      };
      function s(e) {
        if (!r.o(o, e))
          return Promise.resolve().then(function() {
            var t = new Error("Cannot find module '" + e + "'");
            throw ((t.code = 'MODULE_NOT_FOUND'), t);
          });
        var t = o[e],
          s = t[0];
        return Promise.all(t.slice(2).map(r.e)).then(function() {
          return r.t(s, t[1]);
        });
      }
      (s.keys = function() {
        return Object.keys(o);
      }),
        (s.id = 802),
        (e.exports = s);
    },
    82: function(e, t, r) {
      'use strict';
      r.r(t);
      r(361);
      var o,
        s = r(239),
        n = r(16),
        a = r(17),
        i = r(43),
        c = r(42),
        l = r(44),
        u = r(1),
        p = r.n(u),
        m = r(34),
        d = r(49),
        f = r(232),
        b = r.n(f),
        y =
          Object(m.f)(
            (o = (function(e) {
              function t() {
                var e, r;
                Object(n.a)(this, t);
                for (var o = arguments.length, s = new Array(o), a = 0; a < o; a++)
                  s[a] = arguments[a];
                return (
                  ((r = Object(i.a)(
                    this,
                    (e = Object(c.a)(t)).call.apply(e, [this].concat(s))
                  )).handleGoHome = function() {
                    r.props.history.push('/dashboard');
                  }),
                  r
                );
              }
              return (
                Object(l.a)(t, e),
                Object(a.a)(t, [
                  {
                    key: 'render',
                    value: function() {
                      var e = this.props,
                        t = e.errorCode,
                        r = e.title,
                        o = e.subTitle;
                      return p.a.createElement(
                        'div',
                        { className: b.a.exception },
                        p.a.createElement('h1', null, t),
                        p.a.createElement('p', null, r),
                        p.a.createElement(
                          'div',
                          null,
                          p.a.createElement(
                            'span',
                            null,
                            o || p.a.createElement(d.default, { id: 'exception.backHome' })
                          ),
                          p.a.createElement(
                            s.a,
                            { type: 'primary', onClick: this.handleGoHome },
                            p.a.createElement(d.default, { id: 'button.backHome' })
                          )
                        )
                      );
                    }
                  }
                ]),
                t
              );
            })(u.Component))
          ) || o;
      t.default = y;
    },
    861: function(e, t) {
      e.exports = BMap;
    },
    94: function(e, t, r) {
      'use strict';
      r.r(t),
        r.d(t, 'Store', function() {
          return c;
        });
      var o = r(157),
        s = r(159),
        n = r(160),
        a = r(161),
        i = new o.default(),
        c = {
          programStore: new s.default(),
          layoutStore: i,
          userStore: new n.default(),
          localeStore: new a.default()
        };
    },
    95: function(e, t, r) {
      'use strict';
      r.r(t);
      var o,
        s = r(16),
        n = r(17),
        a = r(43),
        i = r(42),
        c = r(44),
        l = r(60),
        u = r(125),
        p = r(1),
        m = r.n(p),
        d = r(34),
        f = r(165),
        b = r(27),
        y = r(162),
        h = r(96),
        g = function(e) {
          var t = e.path,
            r = e.exact,
            o = e.strict,
            s = e.render,
            n = e.location,
            a = Object(u.a)(e, ['path', 'exact', 'strict', 'render', 'location']);
          return m.a.createElement(d.b, {
            path: t,
            exact: r,
            strict: o,
            location: n,
            render: function(e) {
              return s(Object(l.a)({}, e, a));
            }
          });
        },
        v =
          Object(b.b)('userStore', 'layoutStore')(
            (o =
              Object(b.c)(
                (o = (function(e) {
                  function t() {
                    return (
                      Object(s.a)(this, t), Object(a.a)(this, Object(i.a)(t).apply(this, arguments))
                    );
                  }
                  return (
                    Object(c.a)(t, e),
                    Object(n.a)(t, [
                      {
                        key: 'generateRoute',
                        value: function(e, t) {
                          var r = this;
                          return e
                            ? m.a.createElement(
                                d.d,
                                t,
                                e.map(function(e, t) {
                                  var o = e.redirect,
                                    s = e.path,
                                    n = e.exact,
                                    a = e.strict,
                                    i = e.routes,
                                    c = e.component,
                                    l = e.key;
                                  return o
                                    ? m.a.createElement(d.a, {
                                        key: l || t,
                                        from: s,
                                        to: o,
                                        exact: n,
                                        strict: a
                                      })
                                    : m.a.createElement(g, {
                                        key: t,
                                        path: s,
                                        exact: n,
                                        strict: a,
                                        render: function(t) {
                                          var o = r.generateRoute(i, { location: t.location });
                                          return c
                                            ? m.a.createElement(
                                                h.default,
                                                { componentInfo: c, route: e },
                                                o
                                              )
                                            : o;
                                        }
                                      });
                                }),
                                m.a.createElement(d.b, { component: y.default })
                              )
                            : null;
                        }
                      },
                      {
                        key: 'render',
                        value: function() {
                          var e = this.props.layoutStore.routeConfig;
                          return m.a.createElement(f.a, null, this.generateRoute(e));
                        }
                      }
                    ]),
                    t
                  );
                })(p.Component))
              ) || o)
          ) || o;
      t.default = v;
    },
    96: function(e, t, r) {
      'use strict';
      r.r(t);
      var o,
        s = r(50),
        n = r.n(s),
        a = r(83),
        i = r(79),
        c = r(16),
        l = r(17),
        u = r(43),
        p = r(42),
        m = r(44),
        d = r(1),
        f = r.n(d),
        b = r(97),
        y = r(27),
        h =
          Object(y.b)('layoutStore')(
            (o = (function(e) {
              function t(e) {
                var r;
                return (
                  Object(c.a)(this, t),
                  ((r = Object(u.a)(this, Object(p.a)(t).call(this, e))).state = {
                    component: null,
                    animate: null
                  }),
                  r
                );
              }
              return (
                Object(m.a)(t, e),
                Object(l.a)(t, [
                  {
                    key: 'componentDidMount',
                    value: (function() {
                      var e = Object(i.a)(
                        n.a.mark(function e() {
                          var t, o, s, i, c, l, u;
                          return n.a.wrap(
                            function(e) {
                              for (;;)
                                switch ((e.prev = e.next)) {
                                  case 0:
                                    return (
                                      (t = this.props),
                                      (o = Object(a.a)(t.componentInfo, 2)),
                                      (s = o[0]),
                                      (i = o[1]),
                                      (c = t.route),
                                      this.props.layoutStore.checkIsInitial(c),
                                      (e.next = 4),
                                      r(802)('./src' + s)
                                    );
                                  case 4:
                                    (l = e.sent),
                                      (u = l.default),
                                      this.setState({ component: u, animate: i });
                                  case 7:
                                  case 'end':
                                    return e.stop();
                                }
                            },
                            e,
                            this
                          );
                        })
                      );
                      return function() {
                        return e.apply(this, arguments);
                      };
                    })()
                  },
                  {
                    key: 'render',
                    value: function() {
                      var e = this.state,
                        t = e.component,
                        r = e.animate;
                      return 'notAnimate' === r
                        ? f.a.createElement(t, this.props)
                        : t
                        ? f.a.createElement(
                            b.default,
                            { animate: r },
                            f.a.createElement(t, this.props)
                          )
                        : null;
                    }
                  }
                ]),
                t
              );
            })(d.PureComponent))
          ) || o;
      t.default = h;
    },
    97: function(e, t, r) {
      'use strict';
      r.r(t);
      var o,
        s = r(83),
        n = r(16),
        a = r(17),
        i = r(43),
        c = r(42),
        l = r(44),
        u = r(1),
        p = r.n(u),
        m = r(803),
        d = r(27),
        f =
          (r(382),
          r(353),
          Object(d.b)('layoutStore')(
            (o =
              Object(d.c)(
                (o = (function(e) {
                  function t() {
                    var e, r;
                    Object(n.a)(this, t);
                    for (var o = arguments.length, s = new Array(o), a = 0; a < o; a++)
                      s[a] = arguments[a];
                    return (
                      ((r = Object(i.a)(
                        this,
                        (e = Object(c.a)(t)).call.apply(e, [this].concat(s))
                      )).state = { animateIn: !1 }),
                      r
                    );
                  }
                  return (
                    Object(l.a)(t, e),
                    Object(a.a)(t, [
                      {
                        key: 'componentDidMount',
                        value: function() {
                          var e = this.props.layoutStore.stopSpinning;
                          this.setState({ animateIn: !0 }), e();
                        }
                      },
                      {
                        key: 'getAnimateWay',
                        value: function(e) {
                          var t = e.split('-'),
                            r = Object(s.a)(t, 2),
                            o = r[0];
                          return r[1]
                            ? { enter: 'animated', enterActive: o }
                            : {
                                enter: ''.concat(o, '-enter'),
                                enterActive: ''.concat(o, '-enter-active')
                              };
                        }
                      },
                      {
                        key: 'render',
                        value: function() {
                          var e = this.props,
                            t = e.children,
                            r = e.animate,
                            o = r ? this.getAnimateWay(r) : 'slide';
                          return p.a.createElement(
                            m.a,
                            {
                              in: this.state.animateIn,
                              classNames: o,
                              timeout: 1e3,
                              mountOnEnter: !0,
                              unmountOnExit: !0
                            },
                            t
                          );
                        }
                      }
                    ]),
                    t
                  );
                })(u.Component))
              ) || o)
          ) || o);
      t.default = f;
    }
  },
  [[422, 114, 115]]
]);
//# sourceMappingURL=main.fb8658a3.chunk.js.map
