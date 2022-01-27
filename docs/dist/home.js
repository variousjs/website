define(["react"],(function(n){return function(){"use strict";var e={739:function(n,e,t){var r=t(537),o=t.n(r),a=t(645),i=t.n(a)()(o());i.push([n.id,".md_eATBI {\n  padding: 32px 48px 60px 0;\n}\n.toc_Q86k4 {\n  position: fixed;\n  left: 10px;\n  margin-top: 10px;\n  background: #fff;\n  border: 2px solid #eee;\n}\n","",{version:3,sources:["webpack://./src/helper/markdown.less"],names:[],mappings:"AAAA;EACE,yBAAA;AACF;AAEA;EACE,eAAA;EACA,UAAA;EACA,gBAAA;EACA,gBAAA;EACA,sBAAA;AAAF",sourcesContent:[".md {\n  padding: 32px 48px 60px 0;\n}\n\n.toc {\n  position: fixed;\n  left: 10px;\n  margin-top: 10px;\n  background: #fff;\n  border: 2px solid #eee;\n}\n"],sourceRoot:""}]),i.locals={md:"md_eATBI",toc:"toc_Q86k4"},e.Z=i},645:function(n){n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t="",r=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),r&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=n(e),r&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t})).join("")},e.i=function(n,t,r,o,a){"string"==typeof n&&(n=[[null,n,void 0]]);var i={};if(r)for(var c=0;c<this.length;c++){var u=this[c][0];null!=u&&(i[u]=!0)}for(var s=0;s<n.length;s++){var p=[].concat(n[s]);r&&i[p[0]]||(void 0!==a&&(void 0===p[5]||(p[1]="@layer".concat(p[5].length>0?" ".concat(p[5]):""," {").concat(p[1],"}")),p[5]=a),t&&(p[2]?(p[1]="@media ".concat(p[2]," {").concat(p[1],"}"),p[2]=t):p[2]=t),o&&(p[4]?(p[1]="@supports (".concat(p[4],") {").concat(p[1],"}"),p[4]=o):p[4]="".concat(o)),e.push(p))}},e}},537:function(n){n.exports=function(n){var e=n[1],t=n[3];if(!t)return e;if("function"==typeof btoa){var r=btoa(unescape(encodeURIComponent(JSON.stringify(t)))),o="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(r),a="/*# ".concat(o," */"),i=t.sources.map((function(n){return"/*# sourceURL=".concat(t.sourceRoot||"").concat(n," */")}));return[e].concat(i).concat([a]).join("\n")}return[e].join("\n")}},379:function(n){var e=[];function t(n){for(var t=-1,r=0;r<e.length;r++)if(e[r].identifier===n){t=r;break}return t}function r(n,r){for(var a={},i=[],c=0;c<n.length;c++){var u=n[c],s=r.base?u[0]+r.base:u[0],p=a[s]||0,f="".concat(s," ").concat(p);a[s]=p+1;var d=t(f),l={css:u[1],media:u[2],sourceMap:u[3],supports:u[4],layer:u[5]};if(-1!==d)e[d].references++,e[d].updater(l);else{var h=o(l,r);r.byIndex=c,e.splice(c,0,{identifier:f,updater:h,references:1})}i.push(f)}return i}function o(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;t.update(n=e)}else t.remove()}}n.exports=function(n,o){var a=r(n=n||[],o=o||{});return function(n){n=n||[];for(var i=0;i<a.length;i++){var c=t(a[i]);e[c].references--}for(var u=r(n,o),s=0;s<a.length;s++){var p=t(a[s]);0===e[p].references&&(e[p].updater(),e.splice(p,1))}a=u}}},569:function(n){var e={};n.exports=function(n,t){var r=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},216:function(n){n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},565:function(n,e,t){n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},795:function(n){n.exports=function(n){var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var o=void 0!==t.layer;o&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,o&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var a=t.sourceMap;a&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),e.styleTagTransform(r,n,e.options)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},589:function(n){n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}},161:function(e){e.exports=n}},t={};function r(n){var o=t[n];if(void 0!==o)return o.exports;var a=t[n]={id:n,exports:{}};return e[n](a,a.exports,r),a.exports}r.n=function(n){var e=n&&n.__esModule?function(){return n.default}:function(){return n};return r.d(e,{a:e}),e},r.d=function(n,e){for(var t in e)r.o(e,t)&&!r.o(n,t)&&Object.defineProperty(n,t,{enumerable:!0,get:e[t]})},r.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)},r.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})};var o={};return function(){r.r(o),r.d(o,{default:function(){return g}});var n=r(161),e=r.n(n),t=r(379),a=r.n(t),i=r(795),c=r.n(i),u=r(569),s=r.n(u),p=r(565),f=r.n(p),d=r(216),l=r.n(d),h=r(589),A=r.n(h),m=r(739),v={};v.styleTagTransform=A(),v.setAttributes=f(),v.insert=s().bind(null,"head"),v.domAPI=c(),v.insertStyleElement=l(),a()(m.Z,v);var E=m.Z&&m.Z.locals?m.Z.locals:void 0,y=function(n){var t=n.data;return e().createElement(e().Fragment,null,e().createElement("div",{className:E.toc,dangerouslySetInnerHTML:{__html:t.toc}}),e().createElement("div",{className:"".concat(E.md," markdown-body"),dangerouslySetInnerHTML:{__html:t.content}}))},B={content:'<p>VariousJS 是一个基于 RequireJS + React 的一个运行框架</p><h2>\n  <a href="#特性" id="特性"></a>特性\n</h2><p>VariousJS 提供一个动态加载环境，并提供通信机制，方便组件间通信。可以类比为微信及微信小程序关系，提供的环境类比微信主体，组件则可以类比成小程序</p>\x3c!-- toc --\x3e\n\n<h3>\n  <a href="#组件独立" id="组件独立"></a>组件独立\n</h3><p>组件的 <code>开发</code> / <code>测试</code> / <code>部署</code> 都可以是完全独立的</p><h3>\n  <a href="#按需加载" id="按需加载"></a>按需加载\n</h3><p>支持按需加载，只有页面需要用到的组件才会加载，并且已加载组件不会重复加载</p><h3>\n  <a href="#动态加载" id="动态加载"></a>动态加载\n</h3><p>框架允许动态加载组件，甚至可以加载第三方 React 组件。类比小程序的使用，只需要指定组件 URL 地址即可加载使用</p><h3>\n  <a href="#预加载" id="预加载"></a>预加载\n</h3><p>可以将需要的组件预先请求加载，加快响应速度，提升用户体验</p><h3>\n  <a href="#组件通信" id="组件通信"></a>组件通信\n</h3><p>允许组件与全局互相通信，也支持组件间互相通信</p><h3>\n  <a href="#组件共享" id="组件共享"></a>组件共享\n</h3><p>基于 <a href="https://github.com/amdjs/amdjs-api/blob/master/AMD.md">AMD</a> 规范，可以抽出公共组件共享使用，避免资源重复浪费加载</p><h3>\n  <a href="#容错机制" id="容错机制"></a>容错机制\n</h3><p>组件间各自独立，都有独立的错误处理/重试机制，组件的错误并不会影响其他。类比小程序出错并不会影响微信主体或者其他小程序。这一点保证线上发布的安全稳定性</p><h3>\n  <a href="#快速接入" id="快速接入"></a>快速接入\n</h3><p>组件的接入只需要指定组件配置即可，不需要重新构建。可以直接修改组件路径快速发布/回滚。基于这些特性，组件还可以灰度控制，保证线上发布安全。另外其他基于 VariousJS 的系统也可以非常方便进行接入组件，组件升级等操作</p>',toc:'<ul>\n<li><a href="#%E7%BB%84%E4%BB%B6%E7%8B%AC%E7%AB%8B">组件独立</a></li>\n<li><a href="#%E6%8C%89%E9%9C%80%E5%8A%A0%E8%BD%BD">按需加载</a></li>\n<li><a href="#%E5%8A%A8%E6%80%81%E5%8A%A0%E8%BD%BD">动态加载</a></li>\n<li><a href="#%E9%A2%84%E5%8A%A0%E8%BD%BD">预加载</a></li>\n<li><a href="#%E7%BB%84%E4%BB%B6%E9%80%9A%E4%BF%A1">组件通信</a></li>\n<li><a href="#%E7%BB%84%E4%BB%B6%E5%85%B1%E4%BA%AB">组件共享</a></li>\n<li><a href="#%E5%AE%B9%E9%94%99%E6%9C%BA%E5%88%B6">容错机制</a></li>\n<li><a href="#%E5%BF%AB%E9%80%9F%E6%8E%A5%E5%85%A5">快速接入</a></li>\n</ul>\n'},g=function(){return e().createElement(y,{data:B})}}(),o}()}));
//# sourceMappingURL=home.js.map