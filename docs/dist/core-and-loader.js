define(["react"],(function(n){return function(){"use strict";var t={739:function(n,t,a){var s=a(537),e=a.n(s),o=a(645),p=a.n(o)()(e());p.push([n.id,".md_eATBI {\n  padding: 32px 48px 60px 0;\n}\n@media (max-width: 800px) {\n  .md_eATBI {\n    padding-left: 20px;\n    padding-right: 20px;\n  }\n  .toc_Q86k4 {\n    display: none;\n  }\n}\n.toc_Q86k4 {\n  position: fixed;\n  left: 10px;\n  margin-top: 35px;\n}\n.list_ISPoe {\n  transition: all 0.3s ease;\n  background: #fff;\n  border: 3px solid #eee;\n  padding: 10px 14px 10px 0;\n  visibility: hidden;\n  opacity: 0;\n}\n.list_ISPoe:hover {\n  visibility: visible;\n  opacity: 1;\n}\n.icon_D0VsJ {\n  cursor: pointer;\n}\n.icon_D0VsJ:hover + .list_ISPoe {\n  visibility: visible;\n  opacity: 1;\n}\n","",{version:3,sources:["webpack://./src/helper/markdown.less"],names:[],mappings:"AAAA;EACE,yBAAA;AACF;AAEA;EACE;IACE,kBAAA;IACA,mBAAA;EAAF;EAGA;IACE,aAAA;EADF;AACF;AAIA;EACE,eAAA;EACA,UAAA;EACA,gBAAA;AAFF;AAKA;EACE,yBAAA;EACA,gBAAA;EACA,sBAAA;EACA,yBAAA;EACA,kBAAA;EACA,UAAA;AAHF;AAKE;EACE,mBAAA;EACA,UAAA;AAHJ;AAOA;EACE,eAAA;AALF;AAOE;EACE,mBAAA;EACA,UAAA;AALJ",sourcesContent:[".md {\n  padding: 32px 48px 60px 0;\n}\n\n@media (max-width: 800px) {\n  .md {\n    padding-left: 20px;\n    padding-right: 20px;\n  }\n\n  .toc {\n    display: none;\n  }\n}\n\n.toc {\n  position: fixed;\n  left: 10px;\n  margin-top: 35px;\n}\n\n.list {\n  transition: all .3s ease;\n  background: #fff;\n  border: 3px solid #eee;\n  padding: 10px 14px 10px 0;\n  visibility: hidden;\n  opacity: 0;\n\n  &:hover {\n    visibility: visible;\n    opacity: 1;\n  }\n}\n\n.icon {\n  cursor: pointer;\n\n  &:hover + .list {\n    visibility: visible;\n    opacity: 1;\n  }\n}\n"],sourceRoot:""}]),p.locals={md:"md_eATBI",toc:"toc_Q86k4",list:"list_ISPoe",icon:"icon_D0VsJ"},t.Z=p},645:function(n){n.exports=function(n){var t=[];return t.toString=function(){return this.map((function(t){var a="",s=void 0!==t[5];return t[4]&&(a+="@supports (".concat(t[4],") {")),t[2]&&(a+="@media ".concat(t[2]," {")),s&&(a+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),a+=n(t),s&&(a+="}"),t[2]&&(a+="}"),t[4]&&(a+="}"),a})).join("")},t.i=function(n,a,s,e,o){"string"==typeof n&&(n=[[null,n,void 0]]);var p={};if(s)for(var r=0;r<this.length;r++){var c=this[r][0];null!=c&&(p[c]=!0)}for(var i=0;i<n.length;i++){var l=[].concat(n[i]);s&&p[l[0]]||(void 0!==o&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=o),a&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=a):l[2]=a),e&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=e):l[4]="".concat(e)),t.push(l))}},t}},537:function(n){n.exports=function(n){var t=n[1],a=n[3];if(!a)return t;if("function"==typeof btoa){var s=btoa(unescape(encodeURIComponent(JSON.stringify(a)))),e="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(s),o="/*# ".concat(e," */"),p=a.sources.map((function(n){return"/*# sourceURL=".concat(a.sourceRoot||"").concat(n," */")}));return[t].concat(p).concat([o]).join("\n")}return[t].join("\n")}},379:function(n){var t=[];function a(n){for(var a=-1,s=0;s<t.length;s++)if(t[s].identifier===n){a=s;break}return a}function s(n,s){for(var o={},p=[],r=0;r<n.length;r++){var c=n[r],i=s.base?c[0]+s.base:c[0],l=o[i]||0,u="".concat(i," ").concat(l);o[i]=l+1;var d=a(u),A={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==d)t[d].references++,t[d].updater(A);else{var f=e(A,s);s.byIndex=r,t.splice(r,0,{identifier:u,updater:f,references:1})}p.push(u)}return p}function e(n,t){var a=t.domAPI(t);return a.update(n),function(t){if(t){if(t.css===n.css&&t.media===n.media&&t.sourceMap===n.sourceMap&&t.supports===n.supports&&t.layer===n.layer)return;a.update(n=t)}else a.remove()}}n.exports=function(n,e){var o=s(n=n||[],e=e||{});return function(n){n=n||[];for(var p=0;p<o.length;p++){var r=a(o[p]);t[r].references--}for(var c=s(n,e),i=0;i<o.length;i++){var l=a(o[i]);0===t[l].references&&(t[l].updater(),t.splice(l,1))}o=c}}},569:function(n){var t={};n.exports=function(n,a){var s=function(n){if(void 0===t[n]){var a=document.querySelector(n);if(window.HTMLIFrameElement&&a instanceof window.HTMLIFrameElement)try{a=a.contentDocument.head}catch(n){a=null}t[n]=a}return t[n]}(n);if(!s)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");s.appendChild(a)}},216:function(n){n.exports=function(n){var t=document.createElement("style");return n.setAttributes(t,n.attributes),n.insert(t,n.options),t}},565:function(n,t,a){n.exports=function(n){var t=a.nc;t&&n.setAttribute("nonce",t)}},795:function(n){n.exports=function(n){var t=n.insertStyleElement(n);return{update:function(a){!function(n,t,a){var s="";a.supports&&(s+="@supports (".concat(a.supports,") {")),a.media&&(s+="@media ".concat(a.media," {"));var e=void 0!==a.layer;e&&(s+="@layer".concat(a.layer.length>0?" ".concat(a.layer):""," {")),s+=a.css,e&&(s+="}"),a.media&&(s+="}"),a.supports&&(s+="}");var o=a.sourceMap;o&&"undefined"!=typeof btoa&&(s+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),t.styleTagTransform(s,n,t.options)}(t,n,a)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(t)}}}},589:function(n){n.exports=function(n,t){if(t.styleSheet)t.styleSheet.cssText=n;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(n))}}},161:function(t){t.exports=n}},a={};function s(n){var e=a[n];if(void 0!==e)return e.exports;var o=a[n]={id:n,exports:{}};return t[n](o,o.exports,s),o.exports}s.n=function(n){var t=n&&n.__esModule?function(){return n.default}:function(){return n};return s.d(t,{a:t}),t},s.d=function(n,t){for(var a in t)s.o(t,a)&&!s.o(n,a)&&Object.defineProperty(n,a,{enumerable:!0,get:t[a]})},s.o=function(n,t){return Object.prototype.hasOwnProperty.call(n,t)},s.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})};var e={};return function(){s.r(e),s.d(e,{default:function(){return S}});var n=s(161),t=s.n(n),a=["styles"];function o(){return o=Object.assign||function(n){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var s in a)Object.prototype.hasOwnProperty.call(a,s)&&(n[s]=a[s])}return n},o.apply(this,arguments)}var p=function(n){var s=n.styles,e=void 0===s?{}:s,p=function(n,t){if(null==n)return{};var a,s,e=function(n,t){if(null==n)return{};var a,s,e={},o=Object.keys(n);for(s=0;s<o.length;s++)a=o[s],t.indexOf(a)>=0||(e[a]=n[a]);return e}(n,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(n);for(s=0;s<o.length;s++)a=o[s],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(n,a)&&(e[a]=n[a])}return e}(n,a);return t().createElement("svg",o({className:e.icon||"icon",viewBox:"0 0 1024 1024",xmlns:"http://www.w3.org/2000/svg",width:"32",height:"32"},p),t().createElement("defs",null),t().createElement("path",{d:"M891 216H375a4 4 0 00-4 4v64a4 4 0 004 4h516a4 4 0 004-4v-64a4 4 0 00-4-4zm0 260H375a4 4 0 00-4 4v64a4 4 0 004 4h516a4 4 0 004-4v-64a4 4 0 00-4-4zm0 260H375a4 4 0 00-4 4v64a4 4 0 004 4h516a4 4 0 004-4v-64a4 4 0 00-4-4zM213 166a86 86 0 1086 86 86 86 0 00-86-86zm0 520a86 86 0 1086 86 86 86 0 00-86-86zm0-260a86 86 0 1086 86 86 86 0 00-86-86z",fill:"#515151"}))},r=s(379),c=s.n(r),i=s(795),l=s.n(i),u=s(569),d=s.n(u),A=s(565),f=s.n(A),m=s(216),v=s.n(m),k=s(589),h=s.n(k),g=s(739),y={};y.styleTagTransform=h(),y.setAttributes=f(),y.insert=d().bind(null,"head"),y.domAPI=l(),y.insertStyleElement=v(),c()(g.Z,y);var E=g.Z&&g.Z.locals?g.Z.locals:void 0,x=function(n){var a=n.data;return t().createElement(t().Fragment,null,a.toc?t().createElement("div",{className:E.toc},t().createElement("div",{className:E.icon},t().createElement(p,{width:"26",height:"26"})),t().createElement("div",{className:"".concat(E.list," markdown-body"),dangerouslySetInnerHTML:{__html:a.toc}})):null,t().createElement("div",{className:"".concat(E.md," markdown-body"),dangerouslySetInnerHTML:{__html:a.content}}))},b={content:'<h1>\n  <a href="#核心-&amp;-加载器" id="核心-&amp;-加载器"></a>核心 &amp; 加载器\n</h1><p>VariousJS 由核心及加载器两部分构成。应用页面引入加载器，由加载器加载核心功能，再由核心功能初始化页面组件相关，并加载其他组件</p>\x3c!-- toc --\x3e\n\n<h3>\n  <a href="#加载器" id="加载器"></a>加载器\n</h3><p>加载器用于加载 VariousJS 核心，应用主体组件，以及 react / react-dom，并加载浏览器 polyfill。依赖 RequireJS，需要 script 方式引入</p><pre class="language-html"><code class="language-html"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">\n<span class="token comment">// 应用配置</span>\n<span class="token keyword">var</span> <span class="token constant">VARIOUS_CONFIG</span> <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token comment">/* ... */</span> <span class="token punctuation">}</span>\n</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>\n\n<span class="token comment">&lt;!-- 引入 RequireJS --\x3e</span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>https://cdn.jsdelivr.net/npm/requirejs@2.3.6/require.js<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token script"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>\n<span class="token comment">&lt;!-- 引入 VariousJS 加载器 --\x3e</span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>https://cdn.jsdelivr.net/npm/@variousjs/various/dist/index.js<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token script"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span></code></pre><p>引入后，会读取 <code>VARIOUS_CONFIG</code> 变量，初始化 VariousJS 应用环境</p><h3>\n  <a href="#核心组件" id="核心组件"></a>核心组件\n</h3><p>核心组件 <code>@variousjs/various</code> 由加载器加载，并不需要显式在页面中指定引入。核心组件也是 AMD 模式导出，所以实际上核心组件也可以认为是一个依赖组件\n核心组件用于初始化主体组件，提供通信，状态功能支持，并导出 TypeScript 类型</p><h3>\n  <a href="#状态组件" id="状态组件"></a>状态组件\n</h3><p>状态组件基于 <a href="https://github.com/fratercula/nycticorax">nycticorax</a>，用于组件内状态管理，通常用于组件件通信改变自身状态。</p><pre class="language-js"><code class="language-js"><span class="token keyword">import</span> <span class="token punctuation">{</span> Store <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'@variousjs/various\'</span>\n\n<span class="token keyword">const</span> <span class="token punctuation">{</span>\n  createStore<span class="token punctuation">,</span>\n  connect<span class="token punctuation">,</span>\n  dispatch<span class="token punctuation">,</span>\n  getStore<span class="token punctuation">,</span>\n<span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Store</span><span class="token punctuation">(</span><span class="token punctuation">)</span></code></pre><h3>\n  <a href="#typescript-类型" id="typescript-类型"></a>TypeScript 类型\n</h3><p>定义了 VariousJS 的一些组件属性及 API 类型</p><pre class="language-ts"><code class="language-ts"><span class="token keyword">import</span> <span class="token punctuation">{</span>\n  <span class="token comment">// 状态方法及属性</span>\n  Connect<span class="token punctuation">,</span>\n  Dispatch<span class="token punctuation">,</span>\n\n  <span class="token comment">// 组件属性及方法</span>\n  ComponentProps<span class="token punctuation">,</span>\n  ErrorProps<span class="token punctuation">,</span>\n  ContainerProps<span class="token punctuation">,</span>\n\n  <span class="token comment">// 全局数据操作属性</span>\n  Actions<span class="token punctuation">,</span>\n<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'@variousjs/various\'</span></code></pre>',toc:'<ul>\n<li><a href="#%E5%8A%A0%E8%BD%BD%E5%99%A8">加载器</a></li>\n<li><a href="#%E6%A0%B8%E5%BF%83%E7%BB%84%E4%BB%B6">核心组件</a></li>\n<li><a href="#%E7%8A%B6%E6%80%81%E7%BB%84%E4%BB%B6">状态组件</a></li>\n<li><a href="#typescript-%E7%B1%BB%E5%9E%8B">TypeScript 类型</a></li>\n</ul>\n'},S=function(){return t().createElement(x,{data:b})}}(),e}()}));
//# sourceMappingURL=core-and-loader.js.map