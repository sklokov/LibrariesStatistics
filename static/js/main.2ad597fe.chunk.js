(this["webpackJsonpsamolet-test"]=this["webpackJsonpsamolet-test"]||[]).push([[0],{130:function(e,t,a){e.exports=a(223)},135:function(e,t,a){},136:function(e,t,a){},137:function(e,t,a){},154:function(e,t,a){},212:function(e,t,a){},223:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(3),l=a.n(c),o=a(14),i=a(39),u=a(127),s=a.n(u),m=a(224),d=(a(135),function(){return r.a.createElement("div",null,r.a.createElement("h1",{className:"site-title"},"\u0421\u0442\u0430\u0442\u0438\u0441\u0442\u0438\u0447\u0435\u0441\u043a\u0430\u044f \u0438\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u044f \u043e \u0431\u0438\u0431\u043b\u0438\u043e\u0442\u0435\u043a\u0430\u0445 \u0432 \u0420\u043e\u0441\u0441\u0438\u0438"))}),b=(a(136),a(27)),E=a(225),f=a(226),p=a(227),h=(a(137),a(69)),v=a.n(h),y=(a(154),a(228)),g=function(e){var t=e.territory,a=e.libraries,n=e.order;return r.a.createElement("div",{className:"Item",key:n},r.a.createElement("div",{className:"Item-left"},r.a.createElement("div",{className:"Item-territory"},r.a.createElement("b",null,t)," - \u0431\u0438\u0431\u043b\u0438\u043e\u0442\u0435\u043a \u0432 \u0433\u043e\u0440\u043e\u0434\u0435 ",a," ")),r.a.createElement("div",{className:"Item-right"},r.a.createElement(i.b,{to:"/region-info/".concat(n)},r.a.createElement(y.a,{type:"primary",size:"small"},"\u041f\u043e\u0434\u0440\u043e\u0431\u043d\u0435\u0435"))))};var j=function(){m.a.Header,m.a.Content,m.a.Footer,m.a.Sider,E.a.SubMenu,f.a.Option,f.a.OptGroup;var e=Object(n.useState)([]),t=Object(b.a)(e,2),a=t[0],c=t[1],l=Object(n.useState)(!1),o=Object(b.a)(l,2),i=o[0],u=o[1],s=Object(n.useState)(""),d=Object(b.a)(s,2),h=d[0],y=d[1],j=Object(n.useState)([]),O=Object(b.a)(j,2),I=O[0],N=O[1],k=Object(n.useState)([""]),w=Object(b.a)(k,2),S=w[0],C=w[1];return Object(n.useEffect)((function(){u(!0),v.a.get("https://cors-anywhere.herokuapp.com/https://data.gov.ru/opendata/7705851331-statlibrary/data-20161110T1744.json").then((function(e){c(e.data),u(!1)})).catch((function(e){console.log(e)}))}),[]),Object(n.useEffect)((function(){N(a.filter((function(e){return e.territory.toLowerCase().includes(h.toLowerCase())})))}),[h,a]),i?r.a.createElement("p",null,"\u0417\u0430\u0433\u0440\u0443\u0437\u043a\u0430..."):r.a.createElement("div",{className:"MainPageContainer"},r.a.createElement("div",{className:"RadioButtons"},r.a.createElement("input",{type:"text",placeholder:"\u041f\u043e\u0438\u0441\u043a \u043f\u043e \u0440\u0435\u0433\u0438\u043e\u043d\u0443",onChange:function(e){return y(e.target.value)}}),r.a.createElement("p",null,r.a.createElement("b",null,"\u0421\u043e\u0440\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c")),r.a.createElement(p.a.Group,{className:"RadioGroup",name:"radiogroup"},r.a.createElement(p.a,{value:"option1",checked:"option1"===S,onClick:function(){return C("option1")},onChange:function(e){N(a.sort((function(e,t){return Number(t.libraries)-Number(e.libraries)})))}},"\u043f\u043e \u0443\u0431\u044b\u0432\u0430\u043d\u0438\u044e"),r.a.createElement(p.a,{value:"option2",checked:"option2"===S,onClick:function(){return C("option2")},onChange:function(e){N(a.sort((function(e,t){return Number(e.libraries)-Number(t.libraries)})))}},"\u043f\u043e \u0432\u043e\u0437\u0440\u0430\u0441\u0442\u0430\u043d\u0438\u044e"))),I.map((function(e,t){return r.a.createElement(g,Object.assign({key:t},e))})))},O=(a(212),a(8)),I=a(229),N=a(230);var k=function(){var e=Object(O.f)().order,t=Object(n.useState)(!1),a=Object(b.a)(t,2),c=a[0],l=a[1],o=Object(n.useState)([]),u=Object(b.a)(o,2),s=u[0],m=u[1],d=Object(n.useState)([]),E=Object(b.a)(d,2),f=E[0],p=E[1];return Object(n.useEffect)((function(){l(!0),v.a.get("https://cors-anywhere.herokuapp.com/https://data.gov.ru/opendata/7705851331-statlibrary/data-20161110T1744.json").then((function(e){m(e.data),l(!1)})).catch((function(e){console.log(e)}))}),[]),Object(n.useEffect)((function(){p(s.filter((function(t){return t.order===Number(e)})))}),[e,s]),c?r.a.createElement("p",null,"\u0417\u0430\u0433\u0440\u0443\u0437\u043a\u0430..."):r.a.createElement("div",null,f.map((function(e,t){return r.a.createElement("div",{key:t},r.a.createElement(I.a,{style:{minWidth:"500px",width:"50%"},title:e.formname,layout:"vertical",bordered:!0},r.a.createElement(I.a.Item,{label:"\u0420\u0435\u0433\u0438\u043e\u043d"},e.territory),r.a.createElement(I.a.Item,{label:"\u041a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e \u0431\u0438\u0431\u043b\u0438\u043e\u0442\u0435\u043a"},e.libraries),r.a.createElement(I.a.Item,{label:"\u041a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e \u043f\u043e\u0434\u043f\u0438\u0441\u0447\u0438\u043a\u043e\u0432"},e.subscribers),r.a.createElement(I.a.Item,{label:"\u041a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e \u0441\u043e\u0442\u0440\u0443\u0434\u043d\u0438\u043a\u043e\u0432"},e.employees),r.a.createElement(I.a.Item,{label:"\u0410\u0434\u043c\u0438\u043d\u0438\u0441\u0442\u0440\u0430\u0442\u0438\u0432\u043d\u0430\u044f \u043f\u0440\u0438\u043d\u0430\u0434\u043b\u0435\u0436\u043d\u043e\u0441\u0442\u044c",span:2},e.fullname),r.a.createElement(I.a.Item,{label:"\u0421\u0442\u0430\u0442\u0443\u0441",span:3},r.a.createElement(N.a,{status:"processing",text:"\u0414\u0435\u0439\u0441\u0442\u0432\u0443\u044e\u0449\u0430\u044f"})),r.a.createElement(I.a.Item,{label:"\u0421\u0440\u0435\u0434\u0441\u0442\u0432\u0430 \u043f\u043e\u0441\u0442\u0443\u043f\u0438\u0432\u0448\u0438\u0435 \u0438\u0437 \u0431\u044e\u0434\u0436\u0435\u0442\u0430"},e.funds_budget," \u0442\u044b\u0441. \u0440\u0443\u0431."),r.a.createElement(I.a.Item,{label:"\u041e\u0442\u0440\u0435\u043c\u043e\u043d\u0442\u0438\u0440\u043e\u0432\u0430\u043d\u043e \u0437\u0434\u0430\u043d\u0438\u0439"},e.buildings_repair),r.a.createElement(I.a.Item,{label:"\u0414\u0430\u043d\u043d\u044b\u0435 \u0437\u0430 \u043f\u0435\u0440\u0438\u043e\u0434"},e.period," \u0433."),r.a.createElement(I.a.Item,{label:"\u0410\u0434\u0440\u0435\u0441"},e.address)),r.a.createElement(i.b,{to:"/"},r.a.createElement(y.a,{className:"BtnAddInfo",type:"primary",size:"default"},"\u041d\u0430\u0437\u0430\u0434")))})))};function w(){var e=m.a.Header,t=m.a.Content,a=m.a.Footer;return r.a.createElement(m.a,{className:"layout"},r.a.createElement(e,{style:{minWidth:"650px",width:"100%"}},r.a.createElement(d,null)),r.a.createElement(t,{style:{padding:"0 50px"}},r.a.createElement("div",{className:"site-layout-content"},r.a.createElement(O.c,null,r.a.createElement(O.a,{exact:!0,path:"/",render:function(){return r.a.createElement(j,null)}}),r.a.createElement(O.a,{path:"/region-info/:order",render:function(){return r.a.createElement(k,null)}})))),r.a.createElement(a,{style:{textAlign:"center"}},"Sergey Klokov Test 2020"))}Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(217);l.a.render(r.a.createElement(o.a,{locale:s.a},r.a.createElement(i.a,null,r.a.createElement(w,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[130,1,2]]]);
//# sourceMappingURL=main.2ad597fe.chunk.js.map