(window.webpackJsonp=window.webpackJsonp||[]).push([[115,169],{"./src/views/User/LoginForm.tsx":function(e,n,t){"use strict";t.r(n);t("./node_modules/antd/es/button/style/index.js");var s=t("./node_modules/antd/es/button/index.js"),a=(t("./node_modules/antd/es/checkbox/style/index.js"),t("./node_modules/antd/es/checkbox/index.js")),r=(t("./node_modules/antd/es/form/style/index.js"),t("./node_modules/antd/es/form/index.js")),o=(t("./node_modules/antd/es/input/style/index.js"),t("./node_modules/antd/es/input/index.js")),l=(t("./node_modules/antd/es/message/style/index.js"),t("./node_modules/antd/es/message/index.js")),i=t("./node_modules/react/index.js"),m=t.n(i),d=t("./node_modules/@ant-design/icons/es/icons/UserOutlined.js"),u=t("./node_modules/@ant-design/icons/es/icons/LockOutlined.js"),c=t("./src/config/setting.js"),f=t("./node_modules/mobx-react/dist/mobx-react.module.js"),g=t("./node_modules/react-router/esm/react-router.js");t("./src/views/User/login.less"),t("./node_modules/animate.css/animate.css");function p(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){if(!(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e)))return;var t=[],s=!0,a=!1,r=void 0;try{for(var o,l=e[Symbol.iterator]();!(s=(o=l.next()).done)&&(t.push(o.value),!n||t.length!==n);s=!0);}catch(i){a=!0,r=i}finally{try{s||null==l.return||l.return()}finally{if(a)throw r}}return t}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}n.default=Object(f.b)("userStore")((function(e){var n=p(Object(i.useState)(!1),2),t=n[0],f=n[1],b=Object(g.g)(),j=e,y=j.handleError,E=j.userStore;return m.a.createElement(i.Fragment,null,m.a.createElement("div",{className:"loginTitle"},"RA-Turbo"===c.siteName?m.a.createElement(m.a.Fragment,null,"R",m.a.createElement("span",null,"A"),"-TORBO"):c.siteName),m.a.createElement(r.a,{name:"normal_login",className:"login-form",initialValues:{remember:!0},onFinish:function(e){f(!0);var n=e.username,t=e.password;return new Promise((function(){E.handleUserLogin(n,t).then((function(e){e?(l.a.success("login success"),setTimeout((function(){b.push("/dashboard")}),800)):(f(!1),y())}))}))}},m.a.createElement(r.a.Item,{name:"username",rules:[{required:!0,message:"Please input your Username!"}]},m.a.createElement(o.a,{prefix:m.a.createElement(d.a,{className:"site-form-item-icon"}),placeholder:"Username: admin | guest"})),m.a.createElement(r.a.Item,{name:"password",rules:[{required:!0,message:"Please input your Password!"}]},m.a.createElement(o.a,{prefix:m.a.createElement(u.a,{className:"site-form-item-icon"}),type:"password",placeholder:"Password: 123"})),m.a.createElement(r.a.Item,null,m.a.createElement(r.a.Item,{name:"remember",valuePropName:"checked",noStyle:!0},m.a.createElement(a.a,null,"Remember me")),m.a.createElement("a",{className:"login-form-forgot",href:""},"Forgot password")),m.a.createElement(r.a.Item,null,m.a.createElement(s.a,{id:"login_button",type:"primary",htmlType:"submit",className:"login-form-button",loading:t},"Log in"),m.a.createElement("span",null," Or "),m.a.createElement("a",{href:""},"register now!"))))}))},"./src/views/User/login.less":function(e,n,t){}}]);
//# sourceMappingURL=src-views-User-LoginForm.80e4ea44.chunk.js.map