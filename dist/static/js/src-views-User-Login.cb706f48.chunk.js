(window.webpackJsonp=window.webpackJsonp||[]).push([[114,115,169],{"./src/views/User/Login.tsx":function(e,t,n){"use strict";n.r(t);n("./node_modules/antd/es/alert/style/index.js");var r=n("./node_modules/antd/es/alert/index.js"),a=n("./node_modules/react/index.js"),s=n.n(a),o=n("./src/views/User/LoginForm.tsx");n("./src/views/User/login.less"),n("./node_modules/animate.css/animate.css");function l(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if(!(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e)))return;var n=[],r=!0,a=!1,s=void 0;try{for(var o,l=e[Symbol.iterator]();!(r=(o=l.next()).done)&&(n.push(o.value),!t||n.length!==t);r=!0);}catch(i){a=!0,s=i}finally{try{r||null==l.return||l.return()}finally{if(a)throw s}}return n}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}t.default=function(){var e=l(Object(a.useState)(!1),2),t=e[0],n=e[1],i=l(Object(a.useState)(!1),2),m=i[0],u=i[1];return s.a.createElement("div",{className:"login"},t&&s.a.createElement("div",{className:m?"animated shake":"",onAnimationEnd:function(){return u(!1)}},s.a.createElement(r.a,{message:"\u8d26\u6237\u6216\u8005\u5bc6\u7801\u9519\u8bef a:ra  p:123",type:"error",showIcon:!0,style:{marginBottom:"16px"}})),s.a.createElement(o.default,{handleError:function(){u(!0),n(!0)}}))}},"./src/views/User/LoginForm.tsx":function(e,t,n){"use strict";n.r(t);n("./node_modules/antd/es/button/style/index.js");var r=n("./node_modules/antd/es/button/index.js"),a=(n("./node_modules/antd/es/checkbox/style/index.js"),n("./node_modules/antd/es/checkbox/index.js")),s=(n("./node_modules/antd/es/form/style/index.js"),n("./node_modules/antd/es/form/index.js")),o=(n("./node_modules/antd/es/input/style/index.js"),n("./node_modules/antd/es/input/index.js")),l=(n("./node_modules/antd/es/message/style/index.js"),n("./node_modules/antd/es/message/index.js")),i=n("./node_modules/react/index.js"),m=n.n(i),u=n("./node_modules/@ant-design/icons/es/icons/UserOutlined.js"),c=n("./node_modules/@ant-design/icons/es/icons/LockOutlined.js"),d=n("./src/config/setting.js"),f=n("./node_modules/mobx-react/dist/mobx-react.module.js"),g=n("./node_modules/react-router/esm/react-router.js");n("./src/views/User/login.less"),n("./node_modules/animate.css/animate.css");function p(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if(!(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e)))return;var n=[],r=!0,a=!1,s=void 0;try{for(var o,l=e[Symbol.iterator]();!(r=(o=l.next()).done)&&(n.push(o.value),!t||n.length!==t);r=!0);}catch(i){a=!0,s=i}finally{try{r||null==l.return||l.return()}finally{if(a)throw s}}return n}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}t.default=Object(f.b)("userStore")((function(e){var t=p(Object(i.useState)(!1),2),n=t[0],f=t[1],y=Object(g.g)(),b=e,j=b.handleError,h=b.userStore;return m.a.createElement(i.Fragment,null,m.a.createElement("div",{className:"loginTitle"},"RA-Turbo"===d.siteName?m.a.createElement(m.a.Fragment,null,"R",m.a.createElement("span",null,"A"),"-TORBO"):d.siteName),m.a.createElement(s.a,{name:"normal_login",className:"login-form",initialValues:{remember:!0},onFinish:function(e){f(!0);var t=e.username,n=e.password;return new Promise((function(){h.handleUserLogin(t,n).then((function(e){e?(l.a.success("login success"),setTimeout((function(){y.push("/dashboard")}),800)):(f(!1),j())}))}))}},m.a.createElement(s.a.Item,{name:"username",rules:[{required:!0,message:"Please input your Username!"}]},m.a.createElement(o.a,{prefix:m.a.createElement(u.a,{className:"site-form-item-icon"}),placeholder:"Username: admin | guest"})),m.a.createElement(s.a.Item,{name:"password",rules:[{required:!0,message:"Please input your Password!"}]},m.a.createElement(o.a,{prefix:m.a.createElement(c.a,{className:"site-form-item-icon"}),type:"password",placeholder:"Password: 123"})),m.a.createElement(s.a.Item,null,m.a.createElement(s.a.Item,{name:"remember",valuePropName:"checked",noStyle:!0},m.a.createElement(a.a,null,"Remember me")),m.a.createElement("a",{className:"login-form-forgot",href:""},"Forgot password")),m.a.createElement(s.a.Item,null,m.a.createElement(r.a,{id:"login_button",type:"primary",htmlType:"submit",className:"login-form-button",loading:n},"Log in"),m.a.createElement("span",null," Or "),m.a.createElement("a",{href:""},"register now!"))))}))},"./src/views/User/login.less":function(e,t,n){}}]);
//# sourceMappingURL=src-views-User-Login.cb706f48.chunk.js.map