(window.webpackJsonp=window.webpackJsonp||[]).push([[60],{"./src/e2e/404.e2e.js":function(e,n,t){(function(e){function n(e,n,t,r,o,a,c){try{var u=e[a](c),s=u.value}catch(i){return void t(i)}u.done?n(s):Promise.resolve(s).then(r,o)}function t(e){return function(){var t=this,r=arguments;return new Promise((function(o,a){var c=e.apply(t,r);function u(e){n(c,o,a,u,s,"next",e)}function s(e){n(c,o,a,u,s,"throw",e)}u(void 0)}))}}var r="http://localhost:".concat(e.env.PORT||9527);describe("404",(function(){beforeAll(t(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return jest.setTimeout(1e6),e.next=3,page.goto("".concat(r,"/#/user/login"));case 3:return e.next=5,page.type("#normal_login_username","admin");case 5:return e.next=7,page.type("#normal_login_password","123");case 7:return e.next=9,page.click('button[type="submit"]');case 9:case"end":return e.stop()}}),e)})))),it("test route 404",t(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,page.goto("".concat(r,"/#/23333333"));case 2:return e.next=4,page.waitForSelector("h1");case 4:return e.next=6,page.evaluate((function(){return document.getElementsByTagName("h1")[0].innerText}));case 6:n=e.sent,expect(n).toContain("404");case 8:case"end":return e.stop()}}),e)}))))}))}).call(this,t("./node_modules/process/browser.js"))}}]);
//# sourceMappingURL=src-e2e-404-e2e.e03416db.chunk.js.map