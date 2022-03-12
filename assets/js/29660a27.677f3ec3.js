"use strict";(self.webpackChunkanomaly_project=self.webpackChunkanomaly_project||[]).push([[8798],{3905:function(e,a,r){r.d(a,{Zo:function(){return m},kt:function(){return d}});var t=r(7294);function n(e,a,r){return a in e?Object.defineProperty(e,a,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[a]=r,e}function i(e,a){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);a&&(t=t.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),r.push.apply(r,t)}return r}function c(e){for(var a=1;a<arguments.length;a++){var r=null!=arguments[a]?arguments[a]:{};a%2?i(Object(r),!0).forEach((function(a){n(e,a,r[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(r,a))}))}return e}function o(e,a){if(null==e)return{};var r,t,n=function(e,a){if(null==e)return{};var r,t,n={},i=Object.keys(e);for(t=0;t<i.length;t++)r=i[t],a.indexOf(r)>=0||(n[r]=e[r]);return n}(e,a);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)r=i[t],a.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=t.createContext({}),l=function(e){var a=t.useContext(s),r=a;return e&&(r="function"==typeof e?e(a):c(c({},a),e)),r},m=function(e){var a=l(e.components);return t.createElement(s.Provider,{value:a},e.children)},u={inlineCode:"code",wrapper:function(e){var a=e.children;return t.createElement(t.Fragment,{},a)}},p=t.forwardRef((function(e,a){var r=e.components,n=e.mdxType,i=e.originalType,s=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),p=l(r),d=n,h=p["".concat(s,".").concat(d)]||p[d]||u[d]||i;return r?t.createElement(h,c(c({ref:a},m),{},{components:r})):t.createElement(h,c({ref:a},m))}));function d(e,a){var r=arguments,n=a&&a.mdxType;if("string"==typeof e||n){var i=r.length,c=new Array(i);c[0]=p;var o={};for(var s in a)hasOwnProperty.call(a,s)&&(o[s]=a[s]);o.originalType=e,o.mdxType="string"==typeof e?e:n,c[1]=o;for(var l=2;l<i;l++)c[l]=r[l];return t.createElement.apply(null,c)}return t.createElement.apply(null,r)}p.displayName="MDXCreateElement"},5360:function(e,a,r){r.d(a,{Z:function(){return k}});var t=r(7294),n=r(9960),i=r(3725),c=r(6010),o="cardContainer_woeA",s="cardContainerLink_iOSj",l="cardTitle_pNjP",m="cardDescription_qC_k",u=r(3919),p=r(5999);function d(e){var a=e.href,r=e.children,i=(0,c.Z)("card margin-bottom--lg padding--lg",o,a&&s);return a?t.createElement(n.Z,{href:a,className:i},r):t.createElement("div",{className:i},r)}function h(e){var a=e.href,r=e.icon,n=e.title,i=e.description;return t.createElement(d,{href:a},t.createElement("h2",{className:(0,c.Z)("text--truncate",l),title:n},r," ",n),t.createElement("div",{className:(0,c.Z)("text--truncate",m),title:i},i))}function f(e){var a=e.item,r=(0,i.Wl)(a);return t.createElement(h,{href:r,icon:"\ud83d\uddc3\ufe0f",title:a.label,description:(0,p.I)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:a.items.length})})}function y(e){var a,r=e.item,n=(0,u.Z)(r.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",c=(0,i.xz)(null!=(a=r.docId)?a:void 0);return t.createElement(h,{href:r.href,icon:n,title:r.label,description:null==c?void 0:c.description})}function g(e){var a=e.item;switch(a.type){case"link":return t.createElement(y,{item:a});case"category":return t.createElement(f,{item:a});default:throw new Error("unknown item type "+JSON.stringify(a))}}function k(e){var a=e.items;return t.createElement("div",{className:"row"},a.map((function(e,a){return t.createElement("article",{key:a,className:"col col--6"},t.createElement(g,{item:e}))})))}},1663:function(e,a,r){r.r(a),r.d(a,{assets:function(){return p},contentTitle:function(){return m},default:function(){return f},frontMatter:function(){return l},metadata:function(){return u},toc:function(){return d}});var t=r(7462),n=r(3366),i=(r(7294),r(3905)),c=r(5360),o=r(3725),s=["components"],l={sidebar_position:3,title:"Anomaly Rising Characters",description:"The characters of The Anomaly Project.",slug:"/anomaly-rising-characters"},m="Anomaly Rising Characters",u={unversionedId:"anomaly-rising-characters/index",id:"anomaly-rising-characters/index",title:"Anomaly Rising Characters",description:"The characters of The Anomaly Project.",source:"@site/docs/anomaly-rising-characters/index.md",sourceDirName:"anomaly-rising-characters",slug:"/anomaly-rising-characters",permalink:"/docs/anomaly-rising-characters",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3,title:"Anomaly Rising Characters",description:"The characters of The Anomaly Project.",slug:"/anomaly-rising-characters"},sidebar:"tutorialSidebar",previous:{title:"WLF Agents",permalink:"/docs/anomaly-rising-lore/lore-the-anomalous-war/the-rebellion/wlf-agents"},next:{title:"Anomaly Rising's Main Cast",permalink:"/docs/anomaly-rising-characters/main-cast/"}},p={},d=[],h={toc:d};function f(e){var a=e.components,r=(0,n.Z)(e,s);return(0,i.kt)("wrapper",(0,t.Z)({},h,r,{components:a,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"anomaly-rising-characters"},"Anomaly Rising Characters"),(0,i.kt)(c.Z,{items:(0,o.jA)().items,mdxType:"DocCardList"}),(0,i.kt)("blockquote",null,(0,i.kt)("h2",{parentName:"blockquote",id:"characters"},"Characters"),(0,i.kt)("p",{parentName:"blockquote"},"Main cast (and later, minor cast) characters that are part of the main story")),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Quick Links: ",(0,i.kt)("a",{parentName:"p",href:"/docs/anomaly-rising-characters/main-cast/aure-mercer"},"Aure Mercer"),", ",(0,i.kt)("a",{parentName:"p",href:"/docs/anomaly-rising-characters/main-cast/ayasa-lnu"},"Ayasa Lnu"),", ",(0,i.kt)("a",{parentName:"p",href:"/docs/anomaly-rising-characters/main-cast/cadence-baker"},"Cadence Baker"),", ",(0,i.kt)("a",{parentName:"p",href:"/docs/anomaly-rising-characters/main-cast/celestius-eve-kastillo"},"Celestius Eve Kastillo"),", ",(0,i.kt)("a",{parentName:"p",href:"/docs/anomaly-rising-characters/main-cast/cijune-peiris"},"Cijune Peiris"),", ",(0,i.kt)("a",{parentName:"p",href:"/docs/anomaly-rising-characters/main-cast/hauma-ohuo"},"Hauma Ohuo"),", ",(0,i.kt)("a",{parentName:"p",href:"/docs/anomaly-rising-characters/main-cast/heavenly-abadzi"},"Heavenly Abadzi"),", ",(0,i.kt)("a",{parentName:"p",href:"/docs/anomaly-rising-characters/main-cast/jacob-anders"},"Jacob Anders"),", ",(0,i.kt)("a",{parentName:"p",href:"/docs/anomaly-rising-characters/main-cast/len-yuu"},"Len Yuu"),", ",(0,i.kt)("a",{parentName:"p",href:"/docs/anomaly-rising-characters/main-cast/marabel-luna-marsela"},"Marabel-Luna Marsela"),", ",(0,i.kt)("a",{parentName:"p",href:"/docs/anomaly-rising-characters/main-cast/mikiya-sateio"},"Mikiya Sateio"),", ",(0,i.kt)("a",{parentName:"p",href:"/docs/anomaly-rising-characters/main-cast/mikko-sateio"},"Mikko Sateio"),", ",(0,i.kt)("a",{parentName:"p",href:"/docs/anomaly-rising-characters/main-cast/payu-giredo"},"Payu Giredo"),", ",(0,i.kt)("a",{parentName:"p",href:"/docs/anomaly-rising-characters/main-cast/randy-noah"},"Randy Noah"),", ",(0,i.kt)("a",{parentName:"p",href:"/docs/anomaly-rising-characters/main-cast/roo-truvade"},"Roo Truvade"),", ",(0,i.kt)("a",{parentName:"p",href:"/docs/anomaly-rising-characters/main-cast/sokemui-wuale"},"Sokemui Wuale"))))}f.isMDXComponent=!0}}]);