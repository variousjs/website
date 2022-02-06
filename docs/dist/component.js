define(["react"],(function(n){return function(){"use strict";var s={739:function(n,s,a){var t=a(537),p=a.n(t),o=a(645),e=a.n(o)()(p());e.push([n.id,".md_eATBI {\n  padding: 32px 48px 60px 0;\n}\n@media (max-width: 800px) {\n  .md_eATBI {\n    padding-left: 20px;\n    padding-right: 20px;\n  }\n  .toc_Q86k4 {\n    display: none;\n  }\n}\n.toc_Q86k4 {\n  position: fixed;\n  left: 10px;\n  margin-top: 35px;\n}\n.list_ISPoe {\n  transition: all 0.3s ease;\n  background: #fff;\n  border: 3px solid #eee;\n  padding: 10px 14px 10px 0;\n  visibility: hidden;\n  opacity: 0;\n}\n.list_ISPoe:hover {\n  visibility: visible;\n  opacity: 1;\n}\n.icon_D0VsJ {\n  cursor: pointer;\n}\n.icon_D0VsJ:hover + .list_ISPoe {\n  visibility: visible;\n  opacity: 1;\n}\n","",{version:3,sources:["webpack://./src/helper/markdown.less"],names:[],mappings:"AAAA;EACE,yBAAA;AACF;AAEA;EACE;IACE,kBAAA;IACA,mBAAA;EAAF;EAGA;IACE,aAAA;EADF;AACF;AAIA;EACE,eAAA;EACA,UAAA;EACA,gBAAA;AAFF;AAKA;EACE,yBAAA;EACA,gBAAA;EACA,sBAAA;EACA,yBAAA;EACA,kBAAA;EACA,UAAA;AAHF;AAKE;EACE,mBAAA;EACA,UAAA;AAHJ;AAOA;EACE,eAAA;AALF;AAOE;EACE,mBAAA;EACA,UAAA;AALJ",sourcesContent:[".md {\n  padding: 32px 48px 60px 0;\n}\n\n@media (max-width: 800px) {\n  .md {\n    padding-left: 20px;\n    padding-right: 20px;\n  }\n\n  .toc {\n    display: none;\n  }\n}\n\n.toc {\n  position: fixed;\n  left: 10px;\n  margin-top: 35px;\n}\n\n.list {\n  transition: all .3s ease;\n  background: #fff;\n  border: 3px solid #eee;\n  padding: 10px 14px 10px 0;\n  visibility: hidden;\n  opacity: 0;\n\n  &:hover {\n    visibility: visible;\n    opacity: 1;\n  }\n}\n\n.icon {\n  cursor: pointer;\n\n  &:hover + .list {\n    visibility: visible;\n    opacity: 1;\n  }\n}\n"],sourceRoot:""}]),e.locals={md:"md_eATBI",toc:"toc_Q86k4",list:"list_ISPoe",icon:"icon_D0VsJ"},s.Z=e},645:function(n){n.exports=function(n){var s=[];return s.toString=function(){return this.map((function(s){var a="",t=void 0!==s[5];return s[4]&&(a+="@supports (".concat(s[4],") {")),s[2]&&(a+="@media ".concat(s[2]," {")),t&&(a+="@layer".concat(s[5].length>0?" ".concat(s[5]):""," {")),a+=n(s),t&&(a+="}"),s[2]&&(a+="}"),s[4]&&(a+="}"),a})).join("")},s.i=function(n,a,t,p,o){"string"==typeof n&&(n=[[null,n,void 0]]);var e={};if(t)for(var c=0;c<this.length;c++){var l=this[c][0];null!=l&&(e[l]=!0)}for(var r=0;r<n.length;r++){var u=[].concat(n[r]);t&&e[u[0]]||(void 0!==o&&(void 0===u[5]||(u[1]="@layer".concat(u[5].length>0?" ".concat(u[5]):""," {").concat(u[1],"}")),u[5]=o),a&&(u[2]?(u[1]="@media ".concat(u[2]," {").concat(u[1],"}"),u[2]=a):u[2]=a),p&&(u[4]?(u[1]="@supports (".concat(u[4],") {").concat(u[1],"}"),u[4]=p):u[4]="".concat(p)),s.push(u))}},s}},537:function(n){n.exports=function(n){var s=n[1],a=n[3];if(!a)return s;if("function"==typeof btoa){var t=btoa(unescape(encodeURIComponent(JSON.stringify(a)))),p="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(t),o="/*# ".concat(p," */"),e=a.sources.map((function(n){return"/*# sourceURL=".concat(a.sourceRoot||"").concat(n," */")}));return[s].concat(e).concat([o]).join("\n")}return[s].join("\n")}},379:function(n){var s=[];function a(n){for(var a=-1,t=0;t<s.length;t++)if(s[t].identifier===n){a=t;break}return a}function t(n,t){for(var o={},e=[],c=0;c<n.length;c++){var l=n[c],r=t.base?l[0]+t.base:l[0],u=o[r]||0,i="".concat(r," ").concat(u);o[r]=u+1;var k=a(i),d={css:l[1],media:l[2],sourceMap:l[3],supports:l[4],layer:l[5]};if(-1!==k)s[k].references++,s[k].updater(d);else{var m=p(d,t);t.byIndex=c,s.splice(c,0,{identifier:i,updater:m,references:1})}e.push(i)}return e}function p(n,s){var a=s.domAPI(s);return a.update(n),function(s){if(s){if(s.css===n.css&&s.media===n.media&&s.sourceMap===n.sourceMap&&s.supports===n.supports&&s.layer===n.layer)return;a.update(n=s)}else a.remove()}}n.exports=function(n,p){var o=t(n=n||[],p=p||{});return function(n){n=n||[];for(var e=0;e<o.length;e++){var c=a(o[e]);s[c].references--}for(var l=t(n,p),r=0;r<o.length;r++){var u=a(o[r]);0===s[u].references&&(s[u].updater(),s.splice(u,1))}o=l}}},569:function(n){var s={};n.exports=function(n,a){var t=function(n){if(void 0===s[n]){var a=document.querySelector(n);if(window.HTMLIFrameElement&&a instanceof window.HTMLIFrameElement)try{a=a.contentDocument.head}catch(n){a=null}s[n]=a}return s[n]}(n);if(!t)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");t.appendChild(a)}},216:function(n){n.exports=function(n){var s=document.createElement("style");return n.setAttributes(s,n.attributes),n.insert(s,n.options),s}},565:function(n,s,a){n.exports=function(n){var s=a.nc;s&&n.setAttribute("nonce",s)}},795:function(n){n.exports=function(n){var s=n.insertStyleElement(n);return{update:function(a){!function(n,s,a){var t="";a.supports&&(t+="@supports (".concat(a.supports,") {")),a.media&&(t+="@media ".concat(a.media," {"));var p=void 0!==a.layer;p&&(t+="@layer".concat(a.layer.length>0?" ".concat(a.layer):""," {")),t+=a.css,p&&(t+="}"),a.media&&(t+="}"),a.supports&&(t+="}");var o=a.sourceMap;o&&"undefined"!=typeof btoa&&(t+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),s.styleTagTransform(t,n,s.options)}(s,n,a)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(s)}}}},589:function(n){n.exports=function(n,s){if(s.styleSheet)s.styleSheet.cssText=n;else{for(;s.firstChild;)s.removeChild(s.firstChild);s.appendChild(document.createTextNode(n))}}},161:function(s){s.exports=n}},a={};function t(n){var p=a[n];if(void 0!==p)return p.exports;var o=a[n]={id:n,exports:{}};return s[n](o,o.exports,t),o.exports}t.n=function(n){var s=n&&n.__esModule?function(){return n.default}:function(){return n};return t.d(s,{a:s}),s},t.d=function(n,s){for(var a in s)t.o(s,a)&&!t.o(n,a)&&Object.defineProperty(n,a,{enumerable:!0,get:s[a]})},t.o=function(n,s){return Object.prototype.hasOwnProperty.call(n,s)},t.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})};var p={};return function(){t.r(p),t.d(p,{default:function(){return B}});var n=t(161),s=t.n(n),a=["styles"];function o(){return o=Object.assign||function(n){for(var s=1;s<arguments.length;s++){var a=arguments[s];for(var t in a)Object.prototype.hasOwnProperty.call(a,t)&&(n[t]=a[t])}return n},o.apply(this,arguments)}var e=function(n){var t=n.styles,p=void 0===t?{}:t,e=function(n,s){if(null==n)return{};var a,t,p=function(n,s){if(null==n)return{};var a,t,p={},o=Object.keys(n);for(t=0;t<o.length;t++)a=o[t],s.indexOf(a)>=0||(p[a]=n[a]);return p}(n,s);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(n);for(t=0;t<o.length;t++)a=o[t],s.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(n,a)&&(p[a]=n[a])}return p}(n,a);return s().createElement("svg",o({className:p.icon||"icon",viewBox:"0 0 1024 1024",xmlns:"http://www.w3.org/2000/svg",width:"32",height:"32"},e),s().createElement("defs",null),s().createElement("path",{d:"M891 216H375a4 4 0 00-4 4v64a4 4 0 004 4h516a4 4 0 004-4v-64a4 4 0 00-4-4zm0 260H375a4 4 0 00-4 4v64a4 4 0 004 4h516a4 4 0 004-4v-64a4 4 0 00-4-4zm0 260H375a4 4 0 00-4 4v64a4 4 0 004 4h516a4 4 0 004-4v-64a4 4 0 00-4-4zM213 166a86 86 0 1086 86 86 86 0 00-86-86zm0 520a86 86 0 1086 86 86 86 0 00-86-86zm0-260a86 86 0 1086 86 86 86 0 00-86-86z",fill:"#515151"}))},c=t(379),l=t.n(c),r=t(795),u=t.n(r),i=t(569),k=t.n(i),d=t(565),m=t.n(d),g=t(216),f=t.n(g),y=t(589),A=t.n(y),v=t(739),E={};E.styleTagTransform=A(),E.setAttributes=m(),E.insert=k().bind(null,"head"),E.domAPI=u(),E.insertStyleElement=f(),l()(v.Z,E);var h=v.Z&&v.Z.locals?v.Z.locals:void 0,w=function(n){var a=n.data;return s().createElement(s().Fragment,null,s().createElement("div",{className:h.toc},s().createElement("div",{className:h.icon},s().createElement(e,{width:"26",height:"26"})),s().createElement("div",{className:"".concat(h.list," markdown-body"),dangerouslySetInnerHTML:{__html:a.toc}})),s().createElement("div",{className:"".concat(h.md," markdown-body"),dangerouslySetInnerHTML:{__html:a.content}}))},x={content:'<h1>\n  <a href="#组件体系" id="组件体系"></a>组件体系\n</h1><p>在 VariousJS 体系下，一切功能，依赖，甚至页面都可以认为是一个 React 组件。每个组件都是独立进行构建打包输出的。\n虽然都是 AMD 规范导出的组件，但还是有一定的区别。根据组件提供的能力划分，总体上可以分为三类组件。</p>\x3c!-- toc --\x3e\n\n<h2>\n  <a href="#主体组件" id="主体组件"></a>主体组件\n</h2><p>主体组件有且只有一个，用于配置整个应用，控制应用的运行。可以使用 <a href="https://github.com/remix-run/react-router">react-router</a> 等定义页面路由，控制页面布局，控制其他组件的展示。另外也提供全局数据配置，数据共享机制等</p><p>主体组件需要提供模块</p><ul>\n<li>全局数据定义</li>\n<li>全局数据操作方法</li>\n<li>容器组件</li>\n<li>加载提示组件</li>\n<li>错误提示组件</li>\n</ul>\n<pre class="language-js"><code class="language-js"><span class="token keyword">export</span> <span class="token punctuation">{</span> <span class="token keyword">default</span> <span class="token keyword">as</span> store <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'./store\'</span>\n<span class="token keyword">export</span> <span class="token punctuation">{</span> <span class="token keyword">default</span> <span class="token keyword">as</span> actions <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'./actions\'</span>\n<span class="token keyword">export</span> <span class="token punctuation">{</span> <span class="token keyword">default</span> <span class="token keyword">as</span> Container <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'./container\'</span>\n<span class="token keyword">export</span> <span class="token punctuation">{</span> <span class="token keyword">default</span> <span class="token keyword">as</span> Loader <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'./loader\'</span>\n<span class="token keyword">export</span> <span class="token punctuation">{</span> <span class="token keyword">default</span> <span class="token keyword">as</span> Error <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'./error\'</span></code></pre><h3>\n  <a href="#全局数据定义" id="全局数据定义"></a>全局数据定义\n</h3><p>全局数据可以被所有组件访问，通常用于存储需要被全局访问数据，例如用户验证信息</p><pre class="language-ts"><code class="language-ts"><span class="token comment">// store.ts</span>\n<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>\n  user<span class="token operator">:</span> <span class="token punctuation">{</span>\n    name<span class="token operator">:</span> <span class="token string">\'various\'</span><span class="token punctuation">,</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span></code></pre><h3>\n  <a href="#全局数据操作方法" id="全局数据操作方法"></a>全局数据操作方法\n</h3><p>定义操作全局数据方法（数据处理），数据操作基于 <a href="https://github.com/fratercula/nycticorax">nycticorax</a></p><pre class="language-ts"><code class="language-ts"><span class="token comment">// actions.ts</span>\n<span class="token keyword">import</span> <span class="token punctuation">{</span> Actions <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'@variousjs/various\'</span>\n<span class="token keyword">import</span> store <span class="token keyword">from</span> <span class="token string">\'./store\'</span>\n\n<span class="token keyword">type</span> <span class="token class-name">Store</span> <span class="token operator">=</span> <span class="token keyword">typeof</span> store\n\n<span class="token keyword">const</span> actions<span class="token operator">:</span> Actions<span class="token operator">&lt;</span>Store<span class="token operator">></span> <span class="token operator">=</span> <span class="token punctuation">{</span>\n  <span class="token keyword">async</span> <span class="token function">setName</span><span class="token punctuation">(</span><span class="token punctuation">{</span> dispatch<span class="token punctuation">,</span> getStore <span class="token punctuation">}</span><span class="token punctuation">,</span> value<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">await</span> <span class="token keyword">new</span> <span class="token class-name"><span class="token builtin">Promise</span></span><span class="token punctuation">(</span><span class="token punctuation">(</span>r<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token function">setTimeout</span><span class="token punctuation">(</span>r<span class="token punctuation">,</span> <span class="token number">1000</span><span class="token punctuation">)</span><span class="token punctuation">)</span>\n    <span class="token keyword">const</span> <span class="token punctuation">{</span> user <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">getStore</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n    user<span class="token punctuation">.</span>name <span class="token operator">=</span> value\n    <span class="token function">dispatch</span><span class="token punctuation">(</span><span class="token punctuation">{</span> user <span class="token punctuation">}</span><span class="token punctuation">)</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">export</span> <span class="token keyword">default</span> actions</code></pre><h3>\n  <a href="#容器组件" id="容器组件"></a>容器组件\n</h3><p>容器组件用于根据自定义配置生成页面结构，页面路由相关，并且负责其他组件的加载控制。通过这种形式，生成新的页面，添加新的功能，可以不需要主应用重新构建打包</p><pre class="language-tsx"><code class="language-tsx"><span class="token comment">// container.tsx</span>\n<span class="token keyword">import</span> React<span class="token punctuation">,</span> <span class="token punctuation">{</span> Component<span class="token punctuation">,</span> ComponentType <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'react\'</span>\n<span class="token keyword">import</span> <span class="token punctuation">{</span> ContainerProps <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'@variousjs/various\'</span>\n<span class="token comment">// 请注意将 react-router-dom 作为一个依赖</span>\n<span class="token keyword">import</span> <span class="token punctuation">{</span> HashRouter <span class="token keyword">as</span> Router<span class="token punctuation">,</span> Route<span class="token punctuation">,</span> Link <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'react-router-dom\'</span>\n<span class="token keyword">type</span> <span class="token class-name">Config</span> <span class="token operator">=</span> <span class="token punctuation">{</span>\n  pages<span class="token operator">:</span> <span class="token punctuation">{</span>\n    path<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">|</span> <span class="token builtin">string</span><span class="token punctuation">,</span>\n    components<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span>\n  <span class="token punctuation">}</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">class</span> <span class="token class-name">Container</span> <span class="token keyword">extends</span> <span class="token class-name">Component<span class="token operator">&lt;</span>ContainerProps<span class="token operator">&lt;</span>Config<span class="token operator">>></span></span> <span class="token punctuation">{</span>\n  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">const</span> <span class="token punctuation">{</span> $component<span class="token punctuation">,</span> $config <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>props\n\n    <span class="token keyword">return</span> <span class="token punctuation">(</span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Router</span></span><span class="token punctuation">></span></span><span class="token plain-text">\n        </span><span class="token punctuation">{</span>\n          $config<span class="token punctuation">.</span>pages<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span> path<span class="token punctuation">,</span> components <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n            <span class="token keyword">const</span> <span class="token function-variable function">cs</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> components<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">name</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n              <span class="token keyword">const</span> <span class="token constant">C</span> <span class="token operator">=</span> <span class="token function">$component</span><span class="token punctuation">(</span>name<span class="token punctuation">)</span>\n              <span class="token keyword">return</span> <span class="token punctuation">(</span>\n                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">key</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>name<span class="token punctuation">}</span></span><span class="token punctuation">></span></span><span class="token plain-text">\n                  </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">C</span></span> <span class="token punctuation">/></span></span><span class="token plain-text">\n                </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n              <span class="token punctuation">)</span>\n            <span class="token punctuation">}</span><span class="token punctuation">)</span>\n\n            <span class="token keyword">return</span> <span class="token punctuation">(</span>\n              <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Route</span></span>\n                <span class="token attr-name">key</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token builtin">Array</span><span class="token punctuation">.</span><span class="token function">isArray</span><span class="token punctuation">(</span>path<span class="token punctuation">)</span> <span class="token operator">?</span> path<span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">:</span> path<span class="token punctuation">}</span></span>\n                <span class="token attr-name">exact</span>\n                <span class="token attr-name">path</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>path<span class="token punctuation">}</span></span>\n                <span class="token attr-name">component</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>cs <span class="token keyword">as</span> <span class="token builtin">unknown</span> <span class="token keyword">as</span> ComponentType<span class="token punctuation">}</span></span>\n              <span class="token punctuation">/></span></span>\n            <span class="token punctuation">)</span>\n          <span class="token punctuation">}</span><span class="token punctuation">)</span>\n        <span class="token punctuation">}</span><span class="token plain-text">\n      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Router</span></span><span class="token punctuation">></span></span>\n    <span class="token punctuation">)</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">export</span> <span class="token keyword">default</span> Container</code></pre><h3>\n  <a href="#加载提示组件" id="加载提示组件"></a>加载提示组件\n</h3><p>组件都是动态加载，所以需要一个友好的加载提示。加载提示组件会在组件加载完成后被移除</p><pre class="language-tsx"><code class="language-tsx"><span class="token comment">// loader.tsx</span>\n<span class="token keyword">import</span> React <span class="token keyword">from</span> <span class="token string">\'react\'</span>\n<span class="token keyword">import</span> <span class="token punctuation">{</span> Skeleton <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'antd\'</span>\n\n<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">function</span> <span class="token function">Loader</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">return</span> <span class="token punctuation">(</span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> padding<span class="token operator">:</span> <span class="token string">\'32px 48px 60px\'</span> <span class="token punctuation">}</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span><span class="token plain-text">\n      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Skeleton</span></span> <span class="token attr-name">active</span> <span class="token punctuation">/></span></span><span class="token plain-text">\n    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n  <span class="token punctuation">)</span>\n<span class="token punctuation">}</span></code></pre><p>如果希望组件使用自定义加载，只需要在页面定义组件生成的组件配置 <code>$slient</code> 参数即可，这时候组件的加载及出错都不会有提示，需要组件自行处理</p><pre class="language-tsx"><code class="language-tsx"><span class="token comment">// ...</span>\n<span class="token keyword">const</span> <span class="token constant">C</span> <span class="token operator">=</span> <span class="token function">$component</span><span class="token punctuation">(</span><span class="token string">\'name\'</span><span class="token punctuation">)</span>\n<span class="token keyword">return</span> <span class="token punctuation">(</span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">key</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token string">\'name\'</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span><span class="token plain-text">\n    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">C</span></span> <span class="token attr-name">$slient</span> <span class="token punctuation">/></span></span><span class="token plain-text">\n  </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n<span class="token punctuation">)</span>\n<span class="token comment">// ...</span></code></pre><h3>\n  <a href="#错误提示组件" id="错误提示组件"></a>错误提示组件\n</h3><p>当组件加载/运行期间出现问题，并不会导致全局应用或者其他组件受到影响，但需要一个友好的错误提示</p><pre class="language-ts"><code class="language-ts"><span class="token keyword">interface</span> <span class="token class-name">ErrorProps</span> <span class="token punctuation">{</span>\n  reload<span class="token operator">?</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token keyword">void</span><span class="token punctuation">,</span>\n  type<span class="token operator">:</span> <span class="token string">\'LOADING_ERROR\'</span> <span class="token operator">|</span> <span class="token string">\'DEPENDENCIES_LOADING_ERROR\'</span> <span class="token operator">|</span> <span class="token string">\'NOT_DEFINED\'</span> <span class="token operator">|</span> <span class="token string">\'INVALID_COMPONENT\'</span> <span class="token operator">|</span> <span class="token string">\'SCRIPT_ERROR\'</span> <span class="token operator">|</span> <span class="token string">\'ROUTER_ERROR\'</span> <span class="token operator">|</span> <span class="token string">\'CONTAINER_ERROR\'</span><span class="token punctuation">,</span>\n  message<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span></code></pre><p>错误提示组件有重新加载方法，但并不是所有错误都可以重新加载。以下为错误类型定义及是否可以重新加载</p><table>\n<thead>\n<tr>\n<th>类型</th>\n<th>描述</th>\n<th>是否可以重新加载</th>\n</tr>\n</thead>\n<tbody><tr>\n<td>LOADING_ERROR</td>\n<td>组件加载失败</td>\n<td>yes</td>\n</tr>\n<tr>\n<td>DEPENDENCIES_LOADING_ERROR</td>\n<td>组件依赖加载失败</td>\n<td>yes</td>\n</tr>\n<tr>\n<td>NOT_DEFINED</td>\n<td>组件未定义</td>\n<td>no</td>\n</tr>\n<tr>\n<td>INVALID_COMPONENT</td>\n<td>错误的组件类型</td>\n<td>no</td>\n</tr>\n<tr>\n<td>SCRIPT_ERROR</td>\n<td>组件运行出错了</td>\n<td>yes</td>\n</tr>\n<tr>\n<td>ROUTER_ERROR</td>\n<td>页面路由出错</td>\n<td>no</td>\n</tr>\n<tr>\n<td>CONTAINER_ERROR</td>\n<td>容器组件出错了</td>\n<td>no</td>\n</tr>\n</tbody></table>\n<pre class="language-tsx"><code class="language-tsx"><span class="token keyword">import</span> React<span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token constant">FC</span> <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'react\'</span>\n<span class="token keyword">import</span> <span class="token punctuation">{</span> Alert<span class="token punctuation">,</span> Button <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'antd\'</span>\n<span class="token keyword">import</span> <span class="token punctuation">{</span> ErrorProps <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'@variousjs/various\'</span>\n\n<span class="token keyword">const</span> errorComponent<span class="token operator">:</span> <span class="token constant">FC</span><span class="token operator">&lt;</span>ErrorProps<span class="token operator">></span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span> reload<span class="token punctuation">,</span> type<span class="token punctuation">,</span> message <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">(</span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span></span><span class="token punctuation">></span></span><span class="token plain-text">\n    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Alert</span></span>\n      <span class="token attr-name">message</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Error<span class="token punctuation">"</span></span>\n      <span class="token attr-name">description</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>message <span class="token operator">||</span> <span class="token string">\'组件错误\'</span><span class="token punctuation">}</span></span>\n      <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>error<span class="token punctuation">"</span></span>\n    <span class="token punctuation">/></span></span><span class="token plain-text">\n    </span><span class="token punctuation">{</span>\n      reload <span class="token operator">&amp;&amp;</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Button</span></span> <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>reload<span class="token punctuation">}</span></span><span class="token punctuation">></span></span><span class="token plain-text">刷新</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Button</span></span><span class="token punctuation">></span></span>\n    <span class="token punctuation">}</span><span class="token plain-text">\n  </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span></span><span class="token punctuation">></span></span>\n<span class="token punctuation">)</span>\n\n<span class="token keyword">export</span> <span class="token keyword">default</span> errorComponent</code></pre><h2>\n  <a href="#功能组件" id="功能组件"></a>功能组件\n</h2><p>功能组件由主体组件加载并控制展示，独立不耦合其他组件，可以单独使用并提供相应能力。可以非常简单，是一个小按钮，也可以非常复杂，甚至可以是一个路由页面。遵循独立运行原则，独立的开发测试，打包及发布。功能组件可以与主体组件通信，也可以跟其他组件通信</p><pre class="language-tsx"><code class="language-tsx"><span class="token keyword">import</span> React<span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token constant">FC</span> <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'react\'</span>\n<span class="token keyword">import</span> <span class="token punctuation">{</span> Button <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'antd\'</span>\n<span class="token keyword">import</span> <span class="token punctuation">{</span> ComponentProps <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'@variousjs/various\'</span>\n<span class="token keyword">import</span> store <span class="token keyword">from</span> <span class="token string">\'./store\'</span>\n\n<span class="token keyword">type</span> <span class="token class-name">Store</span> <span class="token operator">=</span> <span class="token keyword">typeof</span> store\n\n<span class="token keyword">const</span> <span class="token constant">H</span><span class="token operator">:</span> <span class="token constant">FC</span><span class="token operator">&lt;</span>ComponentProps<span class="token operator">&lt;</span>Store<span class="token operator">>></span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">props</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n  <span class="token keyword">const</span> <span class="token function-variable function">onSet</span> <span class="token operator">=</span> <span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n    <span class="token comment">// 改变主体组件的全局数据</span>\n    <span class="token keyword">await</span> props<span class="token punctuation">.</span><span class="token function">$dispatch</span><span class="token punctuation">(</span><span class="token string">\'store\'</span><span class="token punctuation">,</span> <span class="token string">\'setName\'</span><span class="token punctuation">,</span> <span class="token string">\'various\'</span><span class="token punctuation">)</span>\n  <span class="token punctuation">}</span>\n\n  <span class="token keyword">return</span> <span class="token punctuation">(</span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span><span class="token plain-text">\n      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">></span></span><span class="token plain-text">\n        全局值:\n        </span><span class="token punctuation">{</span>props<span class="token punctuation">.</span>$store<span class="token punctuation">.</span>user<span class="token punctuation">.</span>name<span class="token punctuation">}</span><span class="token plain-text">\n      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span><span class="token plain-text">\n      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Button</span></span> <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>onSet<span class="token punctuation">}</span></span><span class="token punctuation">></span></span><span class="token plain-text">更新全局</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Button</span></span><span class="token punctuation">></span></span><span class="token plain-text">\n    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n  <span class="token punctuation">)</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token constant">H</span></code></pre><h2>\n  <a href="#依赖组件" id="依赖组件"></a>依赖组件\n</h2><p>依赖组件即共享组件，提供一些公共的能力，让其他组件可以直接使用，避免重复引入造成浪费。例如 <a href="https://ant.design">antd</a> 组件库。通常以下场景都可以作为依赖组件</p><ul>\n<li>UI 组件库，例如 “antd” 组件库，提供基础 UI 组件</li>\n<li>工具类，例如 “lodash”，“moment.js”，提供基础能力支持</li>\n<li>根据项目情况封装的基础组件，例如基础网络请求，封装一定的验证配置请求库</li>\n</ul>\n<p>Various 已经内置 <code>react</code>, <code>react-dom</code> 的依赖，可以直接使用。请注意如果使用了依赖组件，那么进行构建打包时候需要将依赖进行排除，以 webpack 为例子</p><pre class="language-js"><code class="language-js"><span class="token comment">// 排除 antd 打包</span>\n<span class="token comment">// ...</span>\nexternals<span class="token operator">:</span> <span class="token punctuation">{</span>\n  antd<span class="token operator">:</span> <span class="token punctuation">{</span>\n    root<span class="token operator">:</span> <span class="token string">\'antd\'</span><span class="token punctuation">,</span>\n    amd<span class="token operator">:</span> <span class="token string">\'antd\'</span><span class="token punctuation">,</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n<span class="token comment">// ...</span></code></pre>',toc:'<ul>\n<li><a href="#%E4%B8%BB%E4%BD%93%E7%BB%84%E4%BB%B6">主体组件</a><ul>\n<li><a href="#%E5%85%A8%E5%B1%80%E6%95%B0%E6%8D%AE%E5%AE%9A%E4%B9%89">全局数据定义</a></li>\n<li><a href="#%E5%85%A8%E5%B1%80%E6%95%B0%E6%8D%AE%E6%93%8D%E4%BD%9C%E6%96%B9%E6%B3%95">全局数据操作方法</a></li>\n<li><a href="#%E5%AE%B9%E5%99%A8%E7%BB%84%E4%BB%B6">容器组件</a></li>\n<li><a href="#%E5%8A%A0%E8%BD%BD%E6%8F%90%E7%A4%BA%E7%BB%84%E4%BB%B6">加载提示组件</a></li>\n<li><a href="#%E9%94%99%E8%AF%AF%E6%8F%90%E7%A4%BA%E7%BB%84%E4%BB%B6">错误提示组件</a></li>\n</ul>\n</li>\n<li><a href="#%E5%8A%9F%E8%83%BD%E7%BB%84%E4%BB%B6">功能组件</a></li>\n<li><a href="#%E4%BE%9D%E8%B5%96%E7%BB%84%E4%BB%B6">依赖组件</a></li>\n</ul>\n'},B=function(){return s().createElement(w,{data:x})}}(),p}()}));
//# sourceMappingURL=component.js.map