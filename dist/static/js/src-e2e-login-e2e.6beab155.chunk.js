(window.webpackJsonp=window.webpackJsonp||[]).push([[62],{"./src/e2e/login.e2e.js":function(e,r,n){(function(e){function r(e,r,n,t,o,a,s){try{var i=e[a](s),u=i.value}catch(c){return void n(c)}i.done?r(u):Promise.resolve(u).then(t,o)}function n(e){return function(){var n=this,t=arguments;return new Promise((function(o,a){var s=e.apply(n,t);function i(e){r(s,o,a,i,u,"next",e)}function u(e){r(s,o,a,i,u,"throw",e)}i(void 0)}))}}var t="http://localhost:".concat(e.env.PORT||9527);describe("login",(function(){beforeAll(n(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:jest.setTimeout(1e6);case 1:case"end":return e.stop()}}),e)})))),beforeEach(n(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,page.goto("".concat(t,"/#/user/login"),{waitUntil:"networkidle2"});case 2:case"end":return e.stop()}}),e)})))),afterEach(n(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,page.waitFor(1e3);case 2:case"end":return e.stop()}}),e)})))),it("should login with success",n(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,page.waitForSelector("#normal_login_username",{timeout:2e3});case 2:return e.next=4,page.type("#normal_login_username","admin");case 4:return e.next=6,page.type("#normal_login_password","123");case 6:return e.next=8,page.click('button[type="submit"]');case 8:return e.next=10,page.waitForSelector(".ant-message-success");case 10:case"end":return e.stop()}}),e)})))),it("should login with failure",n(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,page.waitForSelector("#normal_login_username",{timeout:2e3});case 2:return e.next=4,page.type("#normal_login_username","wrong_user");case 4:return e.next=6,page.type("#normal_login_password","wrong_password");case 6:return e.next=8,page.click('button[type="submit"]');case 8:return e.next=10,page.waitForSelector(".ant-alert-error");case 10:case"end":return e.stop()}}),e)}))))}))}).call(this,n("./node_modules/process/browser.js"))}}]);
//# sourceMappingURL=src-e2e-login-e2e.6beab155.chunk.js.map