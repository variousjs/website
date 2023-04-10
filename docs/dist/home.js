define(["react"],(function(n){return function(){"use strict";var e={739:function(n,e,t){var o=t(537),r=t.n(o),a=t(645),i=t.n(a)()(r());i.push([n.id,".md_eATBI {\n  padding: 32px 200px 60px 0;\n}\n@media (max-width: 800px) {\n  .md_eATBI {\n    padding-left: 20px;\n    padding-right: 20px;\n  }\n  .toc_Q86k4 {\n    display: none;\n  }\n}\n.toc_Q86k4 {\n  position: fixed;\n  margin-top: 90px;\n  right: 50px;\n  top: 0;\n  overflow-y: auto;\n  bottom: 50px;\n  border: 3px solid #eee;\n}\n.list_ISPoe {\n  transition: all 0.3s ease;\n  background: #fff;\n  padding: 10px 14px 10px 0;\n}\n","",{version:3,sources:["webpack://./src/helper/markdown.less"],names:[],mappings:"AAAA;EACE,0BAAA;AACF;AAEA;EACE;IACE,kBAAA;IACA,mBAAA;EAAF;EAGA;IACE,aAAA;EADF;AACF;AAIA;EACE,eAAA;EACA,gBAAA;EACA,WAAA;EACA,MAAA;EACA,gBAAA;EACA,YAAA;EACA,sBAAA;AAFF;AAKA;EACE,yBAAA;EACA,gBAAA;EACA,yBAAA;AAHF",sourcesContent:[".md {\n  padding: 32px 200px 60px 0;\n}\n\n@media (max-width: 800px) {\n  .md {\n    padding-left: 20px;\n    padding-right: 20px;\n  }\n\n  .toc {\n    display: none;\n  }\n}\n\n.toc {\n  position: fixed;\n  margin-top: 90px;\n  right: 50px;\n  top: 0;\n  overflow-y: auto;\n  bottom: 50px;\n  border: 3px solid #eee;\n}\n\n.list {\n  transition: all .3s ease;\n  background: #fff;\n  padding: 10px 14px 10px 0;\n}\n"],sourceRoot:""}]),i.locals={md:"md_eATBI",toc:"toc_Q86k4",list:"list_ISPoe"},e.Z=i},645:function(n){n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t="",o=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),o&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=n(e),o&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t})).join("")},e.i=function(n,t,o,r,a){"string"==typeof n&&(n=[[null,n,void 0]]);var i={};if(o)for(var c=0;c<this.length;c++){var s=this[c][0];null!=s&&(i[s]=!0)}for(var p=0;p<n.length;p++){var u=[].concat(n[p]);o&&i[u[0]]||(void 0!==a&&(void 0===u[5]||(u[1]="@layer".concat(u[5].length>0?" ".concat(u[5]):""," {").concat(u[1],"}")),u[5]=a),t&&(u[2]?(u[1]="@media ".concat(u[2]," {").concat(u[1],"}"),u[2]=t):u[2]=t),r&&(u[4]?(u[1]="@supports (".concat(u[4],") {").concat(u[1],"}"),u[4]=r):u[4]="".concat(r)),e.push(u))}},e}},537:function(n){n.exports=function(n){var e=n[1],t=n[3];if(!t)return e;if("function"==typeof btoa){var o=btoa(unescape(encodeURIComponent(JSON.stringify(t)))),r="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(o),a="/*# ".concat(r," */"),i=t.sources.map((function(n){return"/*# sourceURL=".concat(t.sourceRoot||"").concat(n," */")}));return[e].concat(i).concat([a]).join("\n")}return[e].join("\n")}},379:function(n){var e=[];function t(n){for(var t=-1,o=0;o<e.length;o++)if(e[o].identifier===n){t=o;break}return t}function o(n,o){for(var a={},i=[],c=0;c<n.length;c++){var s=n[c],p=o.base?s[0]+o.base:s[0],u=a[p]||0,d="".concat(p," ").concat(u);a[p]=u+1;var f=t(d),l={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==f)e[f].references++,e[f].updater(l);else{var A=r(l,o);o.byIndex=c,e.splice(c,0,{identifier:d,updater:A,references:1})}i.push(d)}return i}function r(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;t.update(n=e)}else t.remove()}}n.exports=function(n,r){var a=o(n=n||[],r=r||{});return function(n){n=n||[];for(var i=0;i<a.length;i++){var c=t(a[i]);e[c].references--}for(var s=o(n,r),p=0;p<a.length;p++){var u=t(a[p]);0===e[u].references&&(e[u].updater(),e.splice(u,1))}a=s}}},569:function(n){var e={};n.exports=function(n,t){var o=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(t)}},216:function(n){n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},565:function(n,e,t){n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},795:function(n){n.exports=function(n){var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var o="";t.supports&&(o+="@supports (".concat(t.supports,") {")),t.media&&(o+="@media ".concat(t.media," {"));var r=void 0!==t.layer;r&&(o+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),o+=t.css,r&&(o+="}"),t.media&&(o+="}"),t.supports&&(o+="}");var a=t.sourceMap;a&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),e.styleTagTransform(o,n,e.options)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},589:function(n){n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}},161:function(e){e.exports=n}},t={};function o(n){var r=t[n];if(void 0!==r)return r.exports;var a=t[n]={id:n,exports:{}};return e[n](a,a.exports,o),a.exports}o.n=function(n){var e=n&&n.__esModule?function(){return n.default}:function(){return n};return o.d(e,{a:e}),e},o.d=function(n,e){for(var t in e)o.o(e,t)&&!o.o(n,t)&&Object.defineProperty(n,t,{enumerable:!0,get:e[t]})},o.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)},o.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},o.nc=void 0;var r={};return function(){o.r(r),o.d(r,{default:function(){return b}});var n=o(161),e=o.n(n),t=o(379),a=o.n(t),i=o(795),c=o.n(i),s=o(569),p=o.n(s),u=o(565),d=o.n(u),f=o(216),l=o.n(f),A=o(589),m=o.n(A),h=o(739),v={};v.styleTagTransform=m(),v.setAttributes=d(),v.insert=p().bind(null,"head"),v.domAPI=c(),v.insertStyleElement=l(),a()(h.Z,v);var x=h.Z&&h.Z.locals?h.Z.locals:void 0,g=function(n){var t=n.data;return e().createElement(e().Fragment,null,e().createElement("div",{className:"".concat(x.md," markdown-body"),dangerouslySetInnerHTML:{__html:t.content}}),t.toc?e().createElement("div",{className:x.toc},e().createElement("div",{className:"".concat(x.list," markdown-body"),dangerouslySetInnerHTML:{__html:t.toc}})):null)},y={content:'<p>VariousJS 是一个基于 RequireJS + React 的一个运行框架</p><h2>\n  <a href="#特性" id="特性"></a>特性\n</h2><p>VariousJS 提供一个动态加载组件的环境，并提供通信机制，方便组件间联系。可以类比为微信及微信小程序关系，提供的环境类比微信主体，组件则可以类比成小程序</p><h3>\n  <a href="#组件独立" id="组件独立"></a>组件独立\n</h3><p>组件的 <code>开发</code> / <code>测试</code> / <code>部署</code> 都可以是完全独立的</p><h3>\n  <a href="#按需加载" id="按需加载"></a>按需加载\n</h3><p>支持按需加载，只有页面需要用到的组件才会加载，并且已加载组件不会重复加载</p><h3>\n  <a href="#动态加载" id="动态加载"></a>动态加载\n</h3><p>框架允许动态加载组件，甚至可以是第三方 React 组件。类比小程序的使用，只需要指定组件 URL 地址即可加载使用</p><h3>\n  <a href="#预加载" id="预加载"></a>预加载\n</h3><p>提供简单的方式进行组件预加载，加快响应速度，提升用户体验</p><h3>\n  <a href="#组件通信" id="组件通信"></a>组件通信\n</h3><p>允许组件与全局互相通信，也支持组件间互相通信</p><h3>\n  <a href="#组件共享" id="组件共享"></a>组件共享\n</h3><p>基于 <a href="https://github.com/amdjs/amdjs-api/blob/master/AMD.md">AMD</a> 规范，可以抽出公共组件共享使用，避免资源重复浪费加载</p><h3>\n  <a href="#容错机制" id="容错机制"></a>容错机制\n</h3><p>组件间各自独立，都有独立的错误处理/重试机制，组件的错误并不会影响其他。类比小程序出错并不会影响微信主体或者其他小程序。这一点保证线上发布的安全稳定性</p><h3>\n  <a href="#快速接入" id="快速接入"></a>快速接入\n</h3><p>组件的接入只需要指定组件配置即可，不需要重新构建。可以直接修改组件路径快速发布/回滚。基于这些特性，组件还可以灰度控制，保证线上发布安全。另外其他基于 VariousJS 的系统也可以非常方便进行接入组件，组件升级等操作</p>\x3c!-- toc --\x3e\n',toc:""},b=function(){return e().createElement(g,{data:y})}}(),r}()}));
//# sourceMappingURL=home.js.map