(this["webpackJsonpreact-menu-cube"]=this["webpackJsonpreact-menu-cube"]||[]).push([[0],[,,,,,,,,,,function(e,t,c){},function(e,t,c){},function(e,t,c){},,function(e,t,c){"use strict";c.r(t);var n=c(0),s=c(1),a=c.n(s),u=c(3),r=c.n(u),o=(c(10),c(11),c(12),c(4)),l=function(){return Object(n.jsx)("div",{className:"cube__face cube__face--menu"})},b=function(){var e=Object(o.a)({currentClass:"menu"}),t=function(t){e.currentClass=t.target.value};return Object(s.useEffect)((function(){for(var t=document.getElementsByClassName("cube__face--".concat(e.currentClass))[0],c=window.getComputedStyle(t).getPropertyValue("background-color").replace("0.7","1"),n=document.getElementsByClassName("menu_button"),s=0;s<n.length;s++)n[s].value===e.currentClass?(n[s].style.backgroundColor=c,n[s].style.borderColor="rgba(255, 255, 255, 0.75)",n[s].style.color="rgba(0,0,0,1)"):(n[s].style.backgroundColor="rgba(255, 255, 255, 0.2)",n[s].style.borderColor="rgba(255, 255, 255, 0.3)",n[s].style.color="rgba(255, 255, 255,1)")}),[e.currentClass]),Object(s.useEffect)((function(){setTimeout((function(){for(var t=document.getElementsByClassName("menu_button"),c=function(c){setTimeout((function(){e.currentClass=t[c].value}),1e3*c)},n=0;n<t.length;n++)c(n)}),250),setTimeout((function(){e.currentClass="menu"}),6250)}),[]),Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)("div",{className:"row mt-1 mb-2",children:Object(n.jsx)("div",{className:"col",children:Object(n.jsxs)("div",{className:"button-group",children:[Object(n.jsx)("span",{children:Object(n.jsx)("button",{className:"m-3 menu_button",name:"rotate-cube-side",value:"menu",onClick:function(e){return t(e)},children:"menu"})}),Object(n.jsx)("span",{children:Object(n.jsx)("button",{className:"m-3 menu_button",name:"rotate-cube-side",value:"right",onClick:function(e){return t(e)},children:"right"})}),Object(n.jsx)("span",{children:Object(n.jsx)("button",{className:"m-3 menu_button",name:"rotate-cube-side",value:"back",onClick:function(e){return t(e)},children:"back"})}),Object(n.jsx)("span",{children:Object(n.jsx)("button",{className:"m-3 menu_button",name:"rotate-cube-side",value:"left",onClick:function(e){return t(e)},children:"left"})}),Object(n.jsx)("span",{children:Object(n.jsx)("button",{className:"m-3 menu_button",name:"rotate-cube-side",value:"top",onClick:function(e){return t(e)},children:"top"})}),Object(n.jsx)("span",{children:Object(n.jsx)("button",{className:"m-3 menu_button",name:"rotate-cube-side",value:"bottom",onClick:function(e){return t(e)},children:"bottom"})})]})})}),Object(n.jsx)("div",{className:"row",children:Object(n.jsx)("div",{className:"col",children:Object(n.jsxs)("div",{className:"scene m-auto",children:[Object(n.jsxs)("div",{className:"cube show-".concat(e.currentClass),children:[Object(n.jsx)(l,{}),Object(n.jsx)("div",{className:"cube__face cube__face--back",children:"back"}),Object(n.jsx)("div",{className:"cube__face cube__face--right",children:"right"}),Object(n.jsx)("div",{className:"cube__face cube__face--left",children:"left"}),Object(n.jsx)("div",{className:"cube__face cube__face--top",children:"top"}),Object(n.jsx)("div",{className:"cube__face cube__face--bottom",children:"bottom"})]}),Object(n.jsx)("div",{className:"water"})]})})})]})},i=function(){return Object(n.jsx)("div",{className:"App container-fluid",children:Object(n.jsx)(b,{})})},m=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,15)).then((function(t){var c=t.getCLS,n=t.getFID,s=t.getFCP,a=t.getLCP,u=t.getTTFB;c(e),n(e),s(e),a(e),u(e)}))};c(13);r.a.render(Object(n.jsx)(a.a.StrictMode,{children:Object(n.jsx)(i,{})}),document.getElementById("root")),m()}],[[14,1,2]]]);
//# sourceMappingURL=main.f8812797.chunk.js.map