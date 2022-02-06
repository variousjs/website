define(["react","react-router-dom"],(function(n,e){return function(){"use strict";var t={807:function(n,e,t){var r=t(537),o=t.n(r),a=t(645),i=t.n(a)()(o());i.push([n.id,".links__tgsK {\n  margin-right: 48px;\n  padding: 20px 0 60px 0;\n  border-top: 3px solid #eee;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n.links__tgsK p {\n  color: #666;\n  font-size: 12px;\n  margin: 0 0 4px 0;\n}\n.links__tgsK a {\n  font-size: 16px;\n  color: #40a9ff;\n}\n@media (max-width: 800px) {\n  .links__tgsK {\n    margin-right: 0;\n    padding-left: 32px;\n    padding-right: 32px;\n  }\n}\n","",{version:3,sources:["webpack://./src/components/nav-link/index.less"],names:[],mappings:"AAAA;EACE,kBAAA;EACA,sBAAA;EACA,0BAAA;EACA,aAAA;EACA,mBAAA;EACA,8BAAA;AACF;AAPA;EASI,WAAA;EACA,eAAA;EACA,iBAAA;AACJ;AAZA;EAeI,eAAA;EACA,cAAA;AAAJ;AAIA;EACE;IACE,eAAA;IACA,kBAAA;IACA,mBAAA;EAFF;AACF",sourcesContent:[".links {\n  margin-right: 48px;\n  padding: 20px 0 60px 0;\n  border-top: 3px solid #eee;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n\n  p {\n    color: #666;\n    font-size: 12px;\n    margin: 0 0 4px 0;\n  }\n\n  a {\n    font-size: 16px;\n    color: #40a9ff;\n  }\n}\n\n@media (max-width: 800px) {\n  .links {\n    margin-right: 0;\n    padding-left: 32px;\n    padding-right: 32px;\n  }\n}\n"],sourceRoot:""}]),i.locals={links:"links__tgsK"},e.Z=i},645:function(n){n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t="",r=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),r&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=n(e),r&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t})).join("")},e.i=function(n,t,r,o,a){"string"==typeof n&&(n=[[null,n,void 0]]);var i={};if(r)for(var c=0;c<this.length;c++){var s=this[c][0];null!=s&&(i[s]=!0)}for(var u=0;u<n.length;u++){var p=[].concat(n[u]);r&&i[p[0]]||(void 0!==a&&(void 0===p[5]||(p[1]="@layer".concat(p[5].length>0?" ".concat(p[5]):""," {").concat(p[1],"}")),p[5]=a),t&&(p[2]?(p[1]="@media ".concat(p[2]," {").concat(p[1],"}"),p[2]=t):p[2]=t),o&&(p[4]?(p[1]="@supports (".concat(p[4],") {").concat(p[1],"}"),p[4]=o):p[4]="".concat(o)),e.push(p))}},e}},537:function(n){n.exports=function(n){var e=n[1],t=n[3];if(!t)return e;if("function"==typeof btoa){var r=btoa(unescape(encodeURIComponent(JSON.stringify(t)))),o="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(r),a="/*# ".concat(o," */"),i=t.sources.map((function(n){return"/*# sourceURL=".concat(t.sourceRoot||"").concat(n," */")}));return[e].concat(i).concat([a]).join("\n")}return[e].join("\n")}},379:function(n){var e=[];function t(n){for(var t=-1,r=0;r<e.length;r++)if(e[r].identifier===n){t=r;break}return t}function r(n,r){for(var a={},i=[],c=0;c<n.length;c++){var s=n[c],u=r.base?s[0]+r.base:s[0],p=a[u]||0,l="".concat(u," ").concat(p);a[u]=p+1;var f=t(l),d={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==f)e[f].references++,e[f].updater(d);else{var A=o(d,r);r.byIndex=c,e.splice(c,0,{identifier:l,updater:A,references:1})}i.push(l)}return i}function o(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;t.update(n=e)}else t.remove()}}n.exports=function(n,o){var a=r(n=n||[],o=o||{});return function(n){n=n||[];for(var i=0;i<a.length;i++){var c=t(a[i]);e[c].references--}for(var s=r(n,o),u=0;u<a.length;u++){var p=t(a[u]);0===e[p].references&&(e[p].updater(),e.splice(p,1))}a=s}}},569:function(n){var e={};n.exports=function(n,t){var r=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},216:function(n){n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},565:function(n,e,t){n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},795:function(n){n.exports=function(n){var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var o=void 0!==t.layer;o&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,o&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var a=t.sourceMap;a&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),e.styleTagTransform(r,n,e.options)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},589:function(n){n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}},161:function(e){e.exports=n},439:function(n){n.exports=e}},r={};function o(n){var e=r[n];if(void 0!==e)return e.exports;var a=r[n]={id:n,exports:{}};return t[n](a,a.exports,o),a.exports}o.n=function(n){var e=n&&n.__esModule?function(){return n.default}:function(){return n};return o.d(e,{a:e}),e},o.d=function(n,e){for(var t in e)o.o(e,t)&&!o.o(n,t)&&Object.defineProperty(n,t,{enumerable:!0,get:e[t]})},o.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)},o.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})};var a={};return function(){o.r(a),o.d(a,{default:function(){return y}});var n=o(161),e=o.n(n),t=o(439),r=o(379),i=o.n(r),c=o(795),s=o.n(c),u=o(569),p=o.n(u),l=o(565),f=o.n(l),d=o(216),A=o.n(d),m=o(589),v=o.n(m),g=o(807),x={};x.styleTagTransform=v(),x.setAttributes=f(),x.insert=p().bind(null,"head"),x.domAPI=s(),x.insertStyleElement=A(),i()(g.Z,x);var h=g.Z&&g.Z.locals?g.Z.locals:void 0,y=function(n){var r=n.$config.nav,o=(0,t.useLocation)().pathname,a=r.findIndex((function(n){return n.path===("/"===o?"/docs":o)}));if(-1===a)return null;var i={prev:r[a-1],next:r[a+1]};return e().createElement("div",{className:h.links},i.prev?e().createElement("div",null,e().createElement("p",null,"上一篇"),e().createElement(t.Link,{to:i.prev.path},i.prev.name)):e().createElement("span",null),i.next?e().createElement("div",null,e().createElement("p",null,"下一篇"),e().createElement(t.Link,{to:i.next.path},i.next.name)):e().createElement("span",null))}}(),a}()}));
//# sourceMappingURL=nav-link.js.map