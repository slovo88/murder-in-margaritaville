(this["webpackJsonpmurder-in-margaritaville"]=this["webpackJsonpmurder-in-margaritaville"]||[]).push([[0],{13:function(e,t,a){e.exports=a(31)},18:function(e,t,a){},19:function(e,t,a){},31:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),o=a(12),c=a.n(o),u=(a(18),a(4)),s=(a(19),a(10)),l=a.n(s);l.a.initializeApp({apiKey:"AIzaSyA95zD0SRNV7xA6OdOIq3kne6i4vFmQNZQ",authDomain:"murder-mystery-pemo.firebaseapp.com",databaseURL:"https://murder-mystery-pemo.firebaseio.com",projectId:"murder-mystery-pemo",storageBucket:"murder-mystery-pemo.appspot.com",messagingSenderId:"588260667602",appId:"1:588260667602:web:4e7937be0264c03a8b3d0b",measurementId:"G-MX55724GKS"});var i=l.a;function m(e){var t=e.loadUser,a=Object(n.useState)(""),o=Object(u.a)(a,2),c=o[0],s=o[1],l=Object(n.useState)(""),i=Object(u.a)(l,2),m=i[0],d=i[1];function f(e){e&&e.preventDefault(),t(c,d)}return r.a.createElement(r.a.Fragment,null,m&&r.a.createElement("p",{className:"error-message"},m),r.a.createElement("form",{onSubmit:f},r.a.createElement("label",{htmlFor:"user-code"},"Enter code:"),r.a.createElement("input",{id:"user-code",name:"user-code",type:"text",onChange:function(e){s(e.target.value.trim()),m&&d("")}})),r.a.createElement("button",{onClick:f},"Submit"))}var d=i.database();function f(e){var t=e.userData,a=e.userList,o=Object(n.useState)(""),c=Object(u.a)(o,2),s=c[0],l=c[1],i=Object(n.useState)(""),m=Object(u.a)(i,2),f=m[0],b=m[1];return r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",null,"So, ",t.charName,", whodunnit?"),r.a.createElement("p",{className:"error-message"},f),r.a.createElement("form",{className:"radio-form",onChange:function(e){return l(e.target.value)}},a.map((function(e){if(t.userCode!==e.userCode)return r.a.createElement(r.a.Fragment,null,r.a.createElement("input",{type:"radio",id:e.userCode,name:"accuse",value:e.userCode}),r.a.createElement("label",{htmlFor:e.userCode},e.charName),r.a.createElement("br",null))}))),r.a.createElement("button",{onClick:function(){if(s){var e=a.find((function(e){return e.userCode===s})).charName;if(window.confirm("Are you sure you want to accuse ".concat(e,"?")))d.ref("accusations/".concat(s)).transaction((function(e){return(e||0)+1})),d.ref("users/".concat(t.userCode,"/hasSubmittedSurvey")).set(!0),d.ref("users/".concat(t.userCode,"/votedFor")).set(e)}else b("Please accuse someone before submitting")}},"Submit"))}var b=i.database();function v(e){var t=e.userList,a=Object(n.useState)([]),o=Object(u.a)(a,2),c=o[0],s=o[1];return Object(n.useEffect)((function(){b.ref("accusations").on("value",(function(e){var a=t.map((function(t){var a=t.charName,n=t.userCode;return{charName:a,votes:e.val()[n]}}));s(a)}))}),[t]),r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",null,"Thanks for submitting!"),r.a.createElement("p",{className:"results-p"},"Here are the results so far. Keep them to yourself until everyone has voted!"),r.a.createElement("div",{style:{width:"100%"}},r.a.createElement("div",{style:{display:"inline-block",width:"50%",textAlign:"right"}},c.map((function(e){var t=e.charName;if(!(e.votes<1))return r.a.createElement(r.a.Fragment,null,r.a.createElement("span",{style:{minHeight:"25px"}},t,": "),r.a.createElement("br",null))}))),r.a.createElement("div",{style:{display:"inline-block",width:"40%",paddingLeft:"10px"}},c.map((function(e){e.charName;var t=e.votes;if(!(t<1))return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"accused-bar",style:{width:"".concat(t/11*100,"%")}}),r.a.createElement("br",null))})))))}function h(e){var t=e.setShowVoted,a=e.userList;return r.a.createElement("div",{className:"voted-container",style:{position:"fixed",top:0,left:0,right:0,bottom:0,backgroundColor:"#282c34"}},r.a.createElement("button",{onClick:function(){return t(!1)}},"X"),r.a.createElement("ul",null,a.map((function(e){return r.a.createElement("li",{className:e.hasSubmittedSurvey?"submitted":""},e.player,e.hasSubmittedSurvey?": ".concat(e.votedFor):"")}))))}var p=i.database();function E(e){var t=e.userData,a=e.setIsLoading,o=e.showVoted,c=e.setShowVoted,s=Object(n.useState)([]),l=Object(u.a)(s,2),i=l[0],m=l[1];return Object(n.useEffect)((function(){a(!0),p.ref("users").once("value",(function(e){m(Object.values(e.val())),a(!1)})),p.ref("users").on("child_changed",(function(e){var t=e.val();i.find((function(e){return e.uid===t.uid}))}))}),[]),r.a.createElement(r.a.Fragment,null,o&&r.a.createElement(h,{setShowVoted:c,userList:i}),t.hasSubmittedSurvey?r.a.createElement(v,{userList:i}):r.a.createElement(f,{userData:t,userList:i}))}var g=i.database();var S=function(){var e=Object(n.useState)(!0),t=Object(u.a)(e,2),a=t[0],o=t[1],c=Object(n.useState)(!1),s=Object(u.a)(c,2),l=s[0],i=s[1],d=Object(n.useState)({}),f=Object(u.a)(d,2),b=f[0],v=f[1],h=Object(n.useState)(!1),p=Object(u.a)(h,2),S=p[0],y=p[1];function O(e,t,a){a&&a.preventDefault(),e?g.ref("users/".concat(e)).on("value",(function(a){var n=a.val();a.val()?(v(n),i(!0),localStorage.setItem("mmp-user-id",e)):t("Please check your code and try again")})):t("Please enter a code before submitting")}return Object(n.useEffect)((function(){var e=localStorage.getItem("mmp-user-id");e&&O(e),o(!1)}),[]),r.a.createElement(r.a.Fragment,null,l&&r.a.createElement("header",null,"Pemo"===b.player&&r.a.createElement("button",{onClick:function(){return y(!0)},className:"see-voted"},"See who has voted"),r.a.createElement("button",{className:"logout",onClick:function(){i(!1),localStorage.removeItem("mmp-user-id")}},"Log out")),r.a.createElement("main",null,a?r.a.createElement("p",null,"Loading..."):l?r.a.createElement(E,{userData:b,setIsLoading:o,setShowVoted:y,showVoted:S}):r.a.createElement(m,{loadUser:O})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(S,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[13,1,2]]]);
//# sourceMappingURL=main.b406d103.chunk.js.map