(this["webpackJsonpmemory-card"]=this["webpackJsonpmemory-card"]||[]).push([[0],{17:function(e,t,c){},18:function(e,t,c){"use strict";c.r(t);var n=c(8),r=c(5),s=c(1),o=c.n(s),i=c(6),j=c.n(i),a=c(7),u=c(0);var d=function(e){return Object(u.jsx)("div",{id:"loadBlock",children:"Load"})},l=(c(17),c.p+"static/media/logo.8c2c47f6.png"),b=function(){return Object(u.jsxs)("header",{children:[Object(u.jsx)("img",{src:l,alt:"A site logo"}),Object(u.jsx)("h1",{children:"Memory Card"})]})},h=function(e){return Object(u.jsx)("div",{id:"scoreBoard",children:Object(u.jsxs)("ul",{children:[Object(u.jsx)("li",{children:"sss"}),Object(u.jsx)("li",{children:"ss"})]})})};var O=function(e){return Object(u.jsx)("div",{id:"cardsCollection",children:e.imgArr.map((function(e,t){return Object(u.jsx)("div",{style:{backgroundImage:"url(".concat(e.img,")")}},t)}))})};var f=function(e){return Object(u.jsxs)("section",{children:[Object(u.jsx)(h,{}),Object(u.jsx)(O,{imgArr:e.cardArr})]})};function m(){var e=Object(s.useState)([]),t=Object(r.a)(e,2),c=t[0],o=t[1],i=Object(s.useState)(null),j=Object(r.a)(i,2);j[0],j[1];return Object(s.useEffect)((function(){if(!c.length){Object(a.a)("563492ad6f917000010000016beb93e33efd4bf5829a8d135c840222").photos.search({query:"Nature",per_page:30}).then((function(e){console.log(e.photos);var t=Object(n.a)(e.photos);Promise.all(t.map((function(e){return fetch(e.src.small,{mode:"cors"}).then((function(e){return e.blob()})).then((function(e){return URL.createObjectURL(e)})).then((function(t){return e.img=t}))}))).then((function(){return o(c.concat(t))}))}))}})),Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)(b,{}),Object(u.jsx)(f,{cardArr:c}),0!==c.length?null:Object(u.jsx)(d,{})]})}j.a.render(Object(u.jsx)(o.a.StrictMode,{children:Object(u.jsx)(m,{})}),document.getElementById("root"))}},[[18,1,2]]]);
//# sourceMappingURL=main.6b509bff.chunk.js.map