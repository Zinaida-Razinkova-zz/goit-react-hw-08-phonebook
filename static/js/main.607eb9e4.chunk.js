(this["webpackJsonpgoit-react-hw-08-phonebook"]=this["webpackJsonpgoit-react-hw-08-phonebook"]||[]).push([[1],{13:function(t,e,n){t.exports={AppBarHeader:"UserMenu_AppBarHeader__2uudm",navlink:"UserMenu_navlink__2jzwR",buttonLogOut:"UserMenu_buttonLogOut__1R7c2",imgUser:"UserMenu_imgUser__1wf60",welcomeText:"UserMenu_welcomeText__2f0Yt"}},19:function(t,e,n){"use strict";n(3),n(29);var r=n(30);n.d(e,"a",(function(){return r.a}));var c=n(21);n.d(e,"b",(function(){return c.a}))},21:function(t,e,n){"use strict";e.a={getIsAuthenticated:function(t){return t.auth.isAuthenticated},getUsername:function(t){return t.auth.user.name}}},22:function(t,e,n){"use strict";var r=n(2),c=Object(r.b)("contacts/fetchContactRequest"),a=Object(r.b)("contacts/fetchContactSuccess"),s=Object(r.b)("contacts/fetchContactError"),u=Object(r.b)("contacts/addContactRequest"),o=Object(r.b)("contacts/addContactSuccess"),i=Object(r.b)("contacts/addContactError"),b=Object(r.b)("contacts/deleteContactRequest"),j=Object(r.b)("contacts/deleteContactSuccess"),l=Object(r.b)("contacts/deleteContactError"),O=Object(r.b)("contacts/changeFilter");e.a={fetchContactRequest:c,fetchContactSuccess:a,fetchContactError:s,addContactRequest:u,addContactSuccess:o,addContactError:i,deleteContactRequest:b,deleteContactSuccess:j,deleteContactError:l,changeFilter:O}},29:function(t,e,n){"use strict";var r,c,a,s,u=n(5),o=n(7),i=n(2),b=n(3),j={name:null,email:null},l=Object(i.c)(j,(r={},Object(u.a)(r,b.a.registerSuccess,(function(t,e){return e.payload.user})),Object(u.a)(r,b.a.loginSuccess,(function(t,e){return e.payload.user})),Object(u.a)(r,b.a.logoutSuccess,(function(){return j})),Object(u.a)(r,b.a.getCurrentUserSuccess,(function(t,e){return e.payload})),r)),O=Object(i.c)(null,(c={},Object(u.a)(c,b.a.registerSuccess,(function(t,e){return e.payload.token})),Object(u.a)(c,b.a.loginSuccess,(function(t,e){return e.payload.token})),Object(u.a)(c,b.a.logoutSuccess,(function(){return null})),c)),d=function(t,e){return e.payload},h=Object(i.c)(null,(a={},Object(u.a)(a,b.a.registerError,d),Object(u.a)(a,b.a.loginError,d),Object(u.a)(a,b.a.logoutError,d),Object(u.a)(a,b.a.getCurrentUserError,d),a)),g=Object(i.c)(!1,(s={},Object(u.a)(s,b.a.registerSuccess,(function(){return!0})),Object(u.a)(s,b.a.loginSuccess,(function(){return!0})),Object(u.a)(s,b.a.getCurrentUserSuccess,(function(){return!0})),Object(u.a)(s,b.a.registerError,(function(){return!1})),Object(u.a)(s,b.a.loginError,(function(){return!1})),Object(u.a)(s,b.a.getCurrentUserError,(function(){return!1})),Object(u.a)(s,b.a.logoutSuccess,(function(){return!1})),s));e.a=Object(o.c)({user:l,token:O,isAuthenticated:g,error:h})},3:function(t,e,n){"use strict";var r=n(2),c=Object(r.b)("auth/registerRequest"),a=Object(r.b)("auth/registerSuccess"),s=Object(r.b)("auth/registerError"),u=Object(r.b)("auth/loginRequest"),o=Object(r.b)("auth/loginSuccess"),i=Object(r.b)("auth/loginError"),b=Object(r.b)("auth/logoutRequest"),j=Object(r.b)("auth/logoutSuccess"),l=Object(r.b)("auth/logoutError"),O=Object(r.b)("auth/getCurrentUserRequest"),d=Object(r.b)("auth/getCurrentUserSuccess"),h=Object(r.b)("auth/getCurrentUserError");e.a={registerRequest:c,registerSuccess:a,registerError:s,logoutRequest:b,logoutSuccess:j,logoutError:l,loginRequest:u,loginSuccess:o,loginError:i,getCurrentUserRequest:O,getCurrentUserSuccess:d,getCurrentUserError:h}},30:function(t,e,n){"use strict";var r=n(15),c=n.n(r),a=n(24),s=n(17),u=n.n(s),o=n(3);u.a.defaults.baseURL="https://connections-api.herokuapp.com";var i=function(t){u.a.defaults.headers.common.Authorization="Bearer ".concat(t)};e.a={register:function(t){return function(){var e=Object(a.a)(c.a.mark((function e(n){var r;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n(o.a.registerRequest()),e.prev=1,e.next=4,u.a.post("/users/signup",t);case 4:r=e.sent,i(r.data.token),n(o.a.registerSuccess(r.data)),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(1),n(o.a.registerError(e.t0.message));case 12:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(t){return e.apply(this,arguments)}}()},logOut:function(){return function(){var t=Object(a.a)(c.a.mark((function t(e){return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e(o.a.logoutRequest()),t.prev=1,t.next=4,u.a.post("/users/logout");case 4:e(o.a.logoutSuccess()),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(1),e(o.a.logoutError(t.t0.message));case 10:case"end":return t.stop()}}),t,null,[[1,7]])})));return function(e){return t.apply(this,arguments)}}()},logIn:function(t){return function(){var e=Object(a.a)(c.a.mark((function e(n){var r;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n(o.a.loginRequest()),e.prev=1,e.next=4,u.a.post("/users/login",t);case 4:r=e.sent,i(r.data.token),n(o.a.loginSuccess(r.data)),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(1),n(o.a.loginError(e.t0.message));case 12:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(t){return e.apply(this,arguments)}}()},getCurrentUser:function(){return function(){var t=Object(a.a)(c.a.mark((function t(e,n){var r,a,s;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(r=n(),a=r.auth.token){t.next=3;break}return t.abrupt("return");case 3:return i(a),e(o.a.getCurrentUserRequest()),t.prev=5,t.next=8,u.a.get("/users/current");case 8:s=t.sent,e(o.a.getCurrentUserSuccess(s.data)),t.next=15;break;case 12:t.prev=12,t.t0=t.catch(5),e(o.a.getCurrentUserError(t.t0.message));case 15:case"end":return t.stop()}}),t,null,[[5,12]])})));return function(e,n){return t.apply(this,arguments)}}()}}},88:function(t,e,n){"use strict";n.r(e);var r,c=n(0),a=n.n(c),s=n(26),u=n.n(s),o=n(14),i=n(9),b=n(53),j=n(40),l=n(41),O=n(43),d=n(42),h=n(6),g=n(21),f=n(13),p=n.n(f),x=n(1),m=Object(i.b)((function(t){return{isAuthenticated:g.a.getIsAuthenticated(t)}}))((function(t){var e=t.isAuthenticated;return Object(x.jsxs)("nav",{children:[Object(x.jsx)(o.b,{to:"/",exact:!0,className:p.a.navlink,children:"Home"}),e&&Object(x.jsx)(o.b,{to:"/contacts",exact:!0,className:p.a.navlink,children:"Phonebook"})]})})),v=n(19),C={onLogout:v.a.logOut},k=Object(i.b)((function(t){return{name:v.b.getUsername(t)}}),C)((function(t){t.avatar;var e=t.name,n=t.onLogout;return Object(x.jsxs)("div",{className:p.a.userMenuBlock,children:[Object(x.jsxs)("span",{className:p.a.welcomeText,children:["Welcome, ",e,"."]}),Object(x.jsx)("button",{className:p.a.buttonLogOut,type:"button",onClick:n,children:"Logout"})]})})),S=function(){return Object(x.jsxs)("div",{children:[Object(x.jsx)(o.b,{to:"/register",exact:!0,className:p.a.navlink,children:"Sign up"}),Object(x.jsx)(o.b,{to:"/login",exact:!0,className:p.a.navlink,children:"Log in"})]})},U=Object(i.b)((function(t){return{isAuthenticated:g.a.getIsAuthenticated(t)}}))((function(t){var e=t.isAuthenticated;return Object(x.jsxs)("header",{className:p.a.AppBarHeader,children:[Object(x.jsx)(m,{}),e?Object(x.jsx)(k,{}):Object(x.jsx)(S,{})]})})),E=n(30),y=n(18),A=n(34),R=Object(i.b)((function(t){return{isAuthenticated:v.b.getIsAuthenticated(t)}}))((function(t){var e=t.component,n=t.isAuthenticated,r=t.redirectTo,c=Object(A.a)(t,["component","isAuthenticated","redirectTo"]);return Object(x.jsx)(h.b,Object(y.a)(Object(y.a)({},c),{},{render:function(t){return n?Object(x.jsx)(e,Object(y.a)({},t)):Object(x.jsx)(h.a,{to:r})}}))})),w=Object(i.b)((function(t){return{isAuthenticated:v.b.getIsAuthenticated(t)}}))((function(t){var e=t.component,n=t.isAuthenticated,r=t.redirectTo,c=Object(A.a)(t,["component","isAuthenticated","redirectTo"]);return Object(x.jsx)(h.b,Object(y.a)(Object(y.a)({},c),{},{render:function(t){return n&&c.restricted?Object(x.jsx)(h.a,{to:r}):Object(x.jsx)(e,Object(y.a)({},t))}}))})),q=Object(c.lazy)((function(){return n.e(0).then(n.bind(null,96))})),_=Object(c.lazy)((function(){return n.e(0).then(n.bind(null,93))})),T=Object(c.lazy)((function(){return n.e(0).then(n.bind(null,94))})),L=Object(c.lazy)((function(){return n.e(0).then(n.bind(null,95))})),M=function(t){Object(O.a)(n,t);var e=Object(d.a)(n);function n(){return Object(j.a)(this,n),e.apply(this,arguments)}return Object(l.a)(n,[{key:"componentDidMount",value:function(){this.props.onGetCurretnUser()}},{key:"render",value:function(){return Object(x.jsx)(x.Fragment,{children:Object(x.jsxs)("div",{children:[Object(x.jsx)(U,{}),Object(x.jsx)(c.Suspense,{fallback:Object(x.jsx)("p",{children:"\u0417\u0430\u0433\u0440\u0443\u0436\u0430\u0435\u043c..."}),children:Object(x.jsxs)(h.d,{children:[Object(x.jsx)(w,{exact:!0,path:"/",component:q}),Object(x.jsx)(w,{path:"/register",restricted:!0,redirectTo:"/contacts",component:_}),Object(x.jsx)(w,{path:"/login",restricted:!0,redirectTo:"/contacts",component:T}),Object(x.jsx)(R,{path:"/contacts",redirectTo:"/login",component:L})]})})]})})}}]),n}(c.Component),N={onGetCurretnUser:E.a.getCurrentUser},z=Object(i.b)(null,N)(M),I=n(33),B=n(2),F=n(54),H=n.n(F),G=n(16),J=n(5),D=n(7),P=n(22),W=Object(B.c)([],(r={},Object(J.a)(r,P.a.fetchContactSuccess,(function(t,e){return e.payload})),Object(J.a)(r,P.a.addContactSuccess,(function(t,e){return[].concat(Object(I.a)(t),[e.payload])})),Object(J.a)(r,P.a.deleteContactSuccess,(function(t,e){return t.filter((function(t){return t.id!==e.payload}))})),r)),Y=Object(B.c)("",Object(J.a)({},P.a.changeFilter,(function(t,e){return e.payload}))),K=Object(D.c)({items:W,filter:Y}),Q=n(29),V=n(55),X=n.n(V),Z=[].concat(Object(I.a)(Object(B.d)({serializableCheck:{ignoredActions:[G.a,G.f,G.b,G.c,G.d,G.e]}})),[H.a]),$={key:"auth",storage:X.a,whitelist:["token"]},tt=Object(B.a)({reducer:{auth:Object(G.g)($,Q.a),contacts:K},middleware:Z,devTools:!1}),et={store:tt,persistor:Object(G.h)(tt)};n(87);u.a.render(Object(x.jsx)(a.a.StrictMode,{children:Object(x.jsx)(i.a,{store:et.store,children:Object(x.jsx)(b.a,{loading:null,persistor:et.persistor,children:Object(x.jsx)(o.a,{children:Object(x.jsx)(z,{})})})})}),document.getElementById("root"))}},[[88,2,3]]]);
//# sourceMappingURL=main.607eb9e4.chunk.js.map