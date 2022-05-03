define(["react"],(function(n){return function(){"use strict";var s={739:function(n,s,a){var t=a(537),p=a.n(t),o=a(645),e=a.n(o)()(p());e.push([n.id,".md_eATBI {\n  padding: 32px 48px 60px 0;\n}\n@media (max-width: 800px) {\n  .md_eATBI {\n    padding-left: 20px;\n    padding-right: 20px;\n  }\n  .toc_Q86k4 {\n    display: none;\n  }\n}\n.toc_Q86k4 {\n  position: fixed;\n  left: 10px;\n  margin-top: 35px;\n}\n.list_ISPoe {\n  transition: all 0.3s ease;\n  background: #fff;\n  border: 3px solid #eee;\n  padding: 10px 14px 10px 0;\n  visibility: hidden;\n  opacity: 0;\n}\n.list_ISPoe:hover {\n  visibility: visible;\n  opacity: 1;\n}\n.icon_D0VsJ {\n  cursor: pointer;\n}\n.icon_D0VsJ:hover + .list_ISPoe {\n  visibility: visible;\n  opacity: 1;\n}\n","",{version:3,sources:["webpack://./src/helper/markdown.less"],names:[],mappings:"AAAA;EACE,yBAAA;AACF;AAEA;EACE;IACE,kBAAA;IACA,mBAAA;EAAF;EAGA;IACE,aAAA;EADF;AACF;AAIA;EACE,eAAA;EACA,UAAA;EACA,gBAAA;AAFF;AAKA;EACE,yBAAA;EACA,gBAAA;EACA,sBAAA;EACA,yBAAA;EACA,kBAAA;EACA,UAAA;AAHF;AAKE;EACE,mBAAA;EACA,UAAA;AAHJ;AAOA;EACE,eAAA;AALF;AAOE;EACE,mBAAA;EACA,UAAA;AALJ",sourcesContent:[".md {\n  padding: 32px 48px 60px 0;\n}\n\n@media (max-width: 800px) {\n  .md {\n    padding-left: 20px;\n    padding-right: 20px;\n  }\n\n  .toc {\n    display: none;\n  }\n}\n\n.toc {\n  position: fixed;\n  left: 10px;\n  margin-top: 35px;\n}\n\n.list {\n  transition: all .3s ease;\n  background: #fff;\n  border: 3px solid #eee;\n  padding: 10px 14px 10px 0;\n  visibility: hidden;\n  opacity: 0;\n\n  &:hover {\n    visibility: visible;\n    opacity: 1;\n  }\n}\n\n.icon {\n  cursor: pointer;\n\n  &:hover + .list {\n    visibility: visible;\n    opacity: 1;\n  }\n}\n"],sourceRoot:""}]),e.locals={md:"md_eATBI",toc:"toc_Q86k4",list:"list_ISPoe",icon:"icon_D0VsJ"},s.Z=e},645:function(n){n.exports=function(n){var s=[];return s.toString=function(){return this.map((function(s){var a="",t=void 0!==s[5];return s[4]&&(a+="@supports (".concat(s[4],") {")),s[2]&&(a+="@media ".concat(s[2]," {")),t&&(a+="@layer".concat(s[5].length>0?" ".concat(s[5]):""," {")),a+=n(s),t&&(a+="}"),s[2]&&(a+="}"),s[4]&&(a+="}"),a})).join("")},s.i=function(n,a,t,p,o){"string"==typeof n&&(n=[[null,n,void 0]]);var e={};if(t)for(var c=0;c<this.length;c++){var l=this[c][0];null!=l&&(e[l]=!0)}for(var u=0;u<n.length;u++){var r=[].concat(n[u]);t&&e[r[0]]||(void 0!==o&&(void 0===r[5]||(r[1]="@layer".concat(r[5].length>0?" ".concat(r[5]):""," {").concat(r[1],"}")),r[5]=o),a&&(r[2]?(r[1]="@media ".concat(r[2]," {").concat(r[1],"}"),r[2]=a):r[2]=a),p&&(r[4]?(r[1]="@supports (".concat(r[4],") {").concat(r[1],"}"),r[4]=p):r[4]="".concat(p)),s.push(r))}},s}},537:function(n){n.exports=function(n){var s=n[1],a=n[3];if(!a)return s;if("function"==typeof btoa){var t=btoa(unescape(encodeURIComponent(JSON.stringify(a)))),p="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(t),o="/*# ".concat(p," */"),e=a.sources.map((function(n){return"/*# sourceURL=".concat(a.sourceRoot||"").concat(n," */")}));return[s].concat(e).concat([o]).join("\n")}return[s].join("\n")}},379:function(n){var s=[];function a(n){for(var a=-1,t=0;t<s.length;t++)if(s[t].identifier===n){a=t;break}return a}function t(n,t){for(var o={},e=[],c=0;c<n.length;c++){var l=n[c],u=t.base?l[0]+t.base:l[0],r=o[u]||0,i="".concat(u," ").concat(r);o[u]=r+1;var k=a(i),d={css:l[1],media:l[2],sourceMap:l[3],supports:l[4],layer:l[5]};if(-1!==k)s[k].references++,s[k].updater(d);else{var f=p(d,t);t.byIndex=c,s.splice(c,0,{identifier:i,updater:f,references:1})}e.push(i)}return e}function p(n,s){var a=s.domAPI(s);return a.update(n),function(s){if(s){if(s.css===n.css&&s.media===n.media&&s.sourceMap===n.sourceMap&&s.supports===n.supports&&s.layer===n.layer)return;a.update(n=s)}else a.remove()}}n.exports=function(n,p){var o=t(n=n||[],p=p||{});return function(n){n=n||[];for(var e=0;e<o.length;e++){var c=a(o[e]);s[c].references--}for(var l=t(n,p),u=0;u<o.length;u++){var r=a(o[u]);0===s[r].references&&(s[r].updater(),s.splice(r,1))}o=l}}},569:function(n){var s={};n.exports=function(n,a){var t=function(n){if(void 0===s[n]){var a=document.querySelector(n);if(window.HTMLIFrameElement&&a instanceof window.HTMLIFrameElement)try{a=a.contentDocument.head}catch(n){a=null}s[n]=a}return s[n]}(n);if(!t)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");t.appendChild(a)}},216:function(n){n.exports=function(n){var s=document.createElement("style");return n.setAttributes(s,n.attributes),n.insert(s,n.options),s}},565:function(n,s,a){n.exports=function(n){var s=a.nc;s&&n.setAttribute("nonce",s)}},795:function(n){n.exports=function(n){var s=n.insertStyleElement(n);return{update:function(a){!function(n,s,a){var t="";a.supports&&(t+="@supports (".concat(a.supports,") {")),a.media&&(t+="@media ".concat(a.media," {"));var p=void 0!==a.layer;p&&(t+="@layer".concat(a.layer.length>0?" ".concat(a.layer):""," {")),t+=a.css,p&&(t+="}"),a.media&&(t+="}"),a.supports&&(t+="}");var o=a.sourceMap;o&&"undefined"!=typeof btoa&&(t+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),s.styleTagTransform(t,n,s.options)}(s,n,a)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(s)}}}},589:function(n){n.exports=function(n,s){if(s.styleSheet)s.styleSheet.cssText=n;else{for(;s.firstChild;)s.removeChild(s.firstChild);s.appendChild(document.createTextNode(n))}}},161:function(s){s.exports=n}},a={};function t(n){var p=a[n];if(void 0!==p)return p.exports;var o=a[n]={id:n,exports:{}};return s[n](o,o.exports,t),o.exports}t.n=function(n){var s=n&&n.__esModule?function(){return n.default}:function(){return n};return t.d(s,{a:s}),s},t.d=function(n,s){for(var a in s)t.o(s,a)&&!t.o(n,a)&&Object.defineProperty(n,a,{enumerable:!0,get:s[a]})},t.o=function(n,s){return Object.prototype.hasOwnProperty.call(n,s)},t.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})};var p={};return function(){t.r(p),t.d(p,{default:function(){return b}});var n=t(161),s=t.n(n),a=["styles"];function o(){return o=Object.assign||function(n){for(var s=1;s<arguments.length;s++){var a=arguments[s];for(var t in a)Object.prototype.hasOwnProperty.call(a,t)&&(n[t]=a[t])}return n},o.apply(this,arguments)}var e=function(n){var t=n.styles,p=void 0===t?{}:t,e=function(n,s){if(null==n)return{};var a,t,p=function(n,s){if(null==n)return{};var a,t,p={},o=Object.keys(n);for(t=0;t<o.length;t++)a=o[t],s.indexOf(a)>=0||(p[a]=n[a]);return p}(n,s);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(n);for(t=0;t<o.length;t++)a=o[t],s.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(n,a)&&(p[a]=n[a])}return p}(n,a);return s().createElement("svg",o({className:p.icon||"icon",viewBox:"0 0 1024 1024",xmlns:"http://www.w3.org/2000/svg",width:"32",height:"32"},e),s().createElement("defs",null),s().createElement("path",{d:"M891 216H375a4 4 0 00-4 4v64a4 4 0 004 4h516a4 4 0 004-4v-64a4 4 0 00-4-4zm0 260H375a4 4 0 00-4 4v64a4 4 0 004 4h516a4 4 0 004-4v-64a4 4 0 00-4-4zm0 260H375a4 4 0 00-4 4v64a4 4 0 004 4h516a4 4 0 004-4v-64a4 4 0 00-4-4zM213 166a86 86 0 1086 86 86 86 0 00-86-86zm0 520a86 86 0 1086 86 86 86 0 00-86-86zm0-260a86 86 0 1086 86 86 86 0 00-86-86z",fill:"#515151"}))},c=t(379),l=t.n(c),u=t(795),r=t.n(u),i=t(569),k=t.n(i),d=t(565),f=t.n(d),m=t(216),g=t.n(m),y=t(589),A=t.n(y),v=t(739),h={};h.styleTagTransform=A(),h.setAttributes=f(),h.insert=k().bind(null,"head"),h.domAPI=r(),h.insertStyleElement=g(),l()(v.Z,h);var w=v.Z&&v.Z.locals?v.Z.locals:void 0,E=function(n){var a=n.data;return s().createElement(s().Fragment,null,a.toc?s().createElement("div",{className:w.toc},s().createElement("div",{className:w.icon},s().createElement(e,{width:"26",height:"26"})),s().createElement("div",{className:"".concat(w.list," markdown-body"),dangerouslySetInnerHTML:{__html:a.toc}})):null,s().createElement("div",{className:"".concat(w.md," markdown-body"),dangerouslySetInnerHTML:{__html:a.content}}))},x={content:'<h1>\n  <a href="#组件通信" id="组件通信"></a>组件通信\n</h1><p>由于组件完全独立分离，组件间需要一些互相联系的方式，VariousJS 提供简便易用的通信机制，组件间可以方便进行通信联系</p><p>提供的通信方式有两种：方法调用及广播消息</p>\x3c!-- toc --\x3e\n\n<h2>\n  <a href="#方法调用" id="方法调用"></a>方法调用\n</h2><p>方法调用的方式为一个组件提供方法，由另外一个组件进行调用，调用后可以返回内容或者进行一些操作。是被动的通信方式</p><h3>\n  <a href="#方法提供" id="方法提供"></a>方法提供\n</h3><p>方法调用的前提是被调用的组件提供方法，以下为提供方法方式</p><h4>\n  <a href="#主体组件" id="主体组件"></a>主体组件\n</h4><p>通过全局数据定义及方法提供通信方法</p><pre class="language-ts"><code class="language-ts"><span class="token comment">// store.ts 定义全局数据</span>\n<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>\n  user<span class="token operator">:</span> <span class="token punctuation">{</span>\n    name<span class="token operator">:</span> <span class="token string">\'various\'</span><span class="token punctuation">,</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span>\n\n<span class="token comment">// actions.ts 定义全局数据操作方法</span>\n<span class="token keyword">import</span> <span class="token punctuation">{</span> Actions <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'@variousjs/various\'</span>\n<span class="token keyword">import</span> store <span class="token keyword">from</span> <span class="token string">\'./store\'</span>\n\n<span class="token keyword">type</span> <span class="token class-name">Store</span> <span class="token operator">=</span> <span class="token keyword">typeof</span> store\n\n<span class="token keyword">const</span> actions<span class="token operator">:</span> Actions<span class="token operator">&lt;</span>Store<span class="token operator">></span> <span class="token operator">=</span> <span class="token punctuation">{</span>\n  <span class="token keyword">async</span> <span class="token function">setName</span><span class="token punctuation">(</span><span class="token punctuation">{</span> emit<span class="token punctuation">,</span> getStore <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> value <span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">await</span> <span class="token keyword">new</span> <span class="token class-name"><span class="token builtin">Promise</span></span><span class="token punctuation">(</span><span class="token punctuation">(</span>r<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token function">setTimeout</span><span class="token punctuation">(</span>r<span class="token punctuation">,</span> <span class="token number">1000</span><span class="token punctuation">)</span><span class="token punctuation">)</span>\n    <span class="token keyword">const</span> <span class="token punctuation">{</span> user <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">getStore</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n    user<span class="token punctuation">.</span>name <span class="token operator">=</span> value\n    <span class="token function">emit</span><span class="token punctuation">(</span><span class="token punctuation">{</span> user <span class="token punctuation">}</span><span class="token punctuation">)</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">export</span> <span class="token keyword">default</span> actions</code></pre><p>通过以上数据及方法定义，全局提供了 <code>setName</code> 方法，其他组件可以访问该方法修改全局数据 <code>user</code></p><h4>\n  <a href="#功能组件" id="功能组件"></a>功能组件\n</h4><p>功能组件有两种形式，<code>Function Component</code> 及 <code>Class Component</code>。两种方式的组件提供调用方法并不一样，并且要考虑组件的数据安全性，其他组件不能随意访问内部数据</p><p>Function Component 通过定义静态属性方法提供</p><pre class="language-tsx"><code class="language-tsx"><span class="token keyword">import</span> React<span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token constant">FC</span> <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'react\'</span>\n<span class="token keyword">import</span> <span class="token punctuation">{</span> Invoker <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'@variousjs/various\'</span>\n\n<span class="token keyword">const</span> <span class="token constant">A</span><span class="token operator">:</span> <span class="token constant">FC</span> <span class="token operator">&amp;</span> <span class="token operator">&amp;</span> <span class="token punctuation">{</span> getName<span class="token operator">:</span> Invoker <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">(</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span><span class="token plain-text">A</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span><span class="token punctuation">)</span>\n\n<span class="token constant">A</span><span class="token punctuation">.</span><span class="token function-variable function">getName</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token string">\'A\'</span>\n\n<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token constant">A</span></code></pre><p>Class Component 通过定义静态方法 <code>static</code> 提供</p><pre class="language-tsx"><code class="language-tsx"><span class="token keyword">import</span> React<span class="token punctuation">,</span> <span class="token punctuation">{</span> Component <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'react\'</span>\n<span class="token keyword">import</span> <span class="token punctuation">{</span> Invoker <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'@variousjs/various\'</span>\n\n<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">class</span> <span class="token class-name"><span class="token constant">A</span></span> <span class="token keyword">extends</span> <span class="token class-name">Component</span> <span class="token punctuation">{</span>\n  <span class="token keyword">static</span> getName<span class="token operator">:</span> <span class="token function-variable function">Invoker</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token string">\'A\'</span>\n\n  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> <span class="token punctuation">(</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span><span class="token plain-text">A</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span><span class="token punctuation">)</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span></code></pre><p>组件 A 两种方式都提供了方法 <code>getName</code> 调用，其实底层都是提供属性方法的形式。这样处理保证了组件内部数据不被外部直接访问</p><h3>\n  <a href="#调用方法" id="调用方法"></a>调用方法\n</h3><p>调用其他组件方法时候必须先知道对方组件提供的方法情况</p><pre class="language-ts"><code class="language-ts"><span class="token comment">// type 通信类型：store(全局) / 组件名字</span>\n<span class="token comment">// method 方法：调用全局或者其他组件提供的方法</span>\n<span class="token comment">// value 值：传递的参数</span>\n<span class="token keyword">type</span> <span class="token class-name">$dispatch</span> <span class="token operator">=</span> <span class="token punctuation">(</span>type<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span> method<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span> value<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">any</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token builtin">Promise</span><span class="token operator">&lt;</span><span class="token builtin">any</span><span class="token operator">></span></code></pre><p>例如根据上面例子组件提供的方法，可以有以下调用方式</p><pre class="language-tsx"><code class="language-tsx"><span class="token keyword">import</span> React<span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token constant">FC</span><span class="token punctuation">,</span> useEffect <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'react\'</span>\n<span class="token keyword">import</span> <span class="token punctuation">{</span> ComponentsProps <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'@variousjs/various\'</span>\n\n<span class="token keyword">const</span> <span class="token constant">C</span><span class="token operator">:</span> <span class="token constant">FC</span><span class="token operator">&lt;</span>ComponentProps<span class="token operator">></span> <span class="token operator">=</span> <span class="token punctuation">(</span>props<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n  <span class="token function">useEffect</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n    <span class="token comment">// 改变全局数据</span>\n    props<span class="token punctuation">.</span><span class="token function">$dispatch</span><span class="token punctuation">(</span><span class="token string">\'store\'</span><span class="token punctuation">,</span> <span class="token string">\'setName\'</span><span class="token punctuation">,</span> <span class="token string">\'C\'</span><span class="token punctuation">)</span>\n      <span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n        <span class="token comment">// ...</span>\n      <span class="token punctuation">}</span><span class="token punctuation">)</span>\n\n    <span class="token comment">// 获取 A 组件提供的值</span>\n    props<span class="token punctuation">.</span><span class="token function">$dispatch</span><span class="token punctuation">(</span><span class="token string">\'A\'</span><span class="token punctuation">,</span> <span class="token string">\'setName\'</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n      <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>name<span class="token punctuation">)</span>\n    <span class="token punctuation">}</span><span class="token punctuation">)</span>\n\n    <span class="token comment">// 改变 B 组件的状态</span>\n    props<span class="token punctuation">.</span><span class="token function">$dispatch</span><span class="token punctuation">(</span><span class="token string">\'B\'</span><span class="token punctuation">,</span> <span class="token string">\'updateValue\'</span><span class="token punctuation">,</span> <span class="token string">\'C\'</span><span class="token punctuation">)</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span>\n\n  <span class="token keyword">return</span> <span class="token punctuation">(</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span><span class="token plain-text">C</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span><span class="token punctuation">)</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token constant">C</span></code></pre><h3>\n  <a href="#状态改变" id="状态改变"></a>状态改变\n</h3><p>通过定义属性形式提供调用方法，保证了组件内部数据安全性，但有个问题是如何通信改变其他组件的自身状态？答案是使用状态管理</p><p>VariousJS 提供了状态组件 <code>Store</code>，基于 <a href="https://github.com/fratercula/nycticorax">nycticorax</a>，类似 <code>Redux</code> 的用法，用于组件状态管理</p><pre class="language-tsx"><code class="language-tsx"><span class="token keyword">import</span> React<span class="token punctuation">,</span> <span class="token punctuation">{</span> Component <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'react\'</span>\n<span class="token keyword">import</span> <span class="token punctuation">{</span> ComponentProps<span class="token punctuation">,</span> Store<span class="token punctuation">,</span> Connect <span class="token keyword">as</span> <span class="token constant">CT</span><span class="token punctuation">,</span> Invoker <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'@variousjs/various\'</span>\n\n<span class="token keyword">type</span> <span class="token class-name">Store</span> <span class="token operator">=</span> <span class="token punctuation">{</span> value<span class="token operator">:</span> <span class="token builtin">string</span> <span class="token punctuation">}</span>\n<span class="token keyword">type</span> <span class="token class-name">Connect</span> <span class="token operator">=</span> <span class="token constant">CT</span><span class="token operator">&lt;</span>Store<span class="token operator">></span>\n\n<span class="token keyword">const</span> <span class="token punctuation">{</span> createStore<span class="token punctuation">,</span> connect<span class="token punctuation">,</span> emit <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Store<span class="token operator">&lt;</span><span class="token constant">S</span><span class="token operator">></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n\n<span class="token function">createStore</span><span class="token punctuation">(</span><span class="token punctuation">{</span> value<span class="token operator">:</span> <span class="token string">\'B\'</span> <span class="token punctuation">}</span><span class="token punctuation">)</span>\n\n<span class="token keyword">class</span> <span class="token class-name"><span class="token constant">B</span></span> <span class="token keyword">extends</span> <span class="token class-name">Component<span class="token operator">&lt;</span>Connect<span class="token operator">></span></span> <span class="token punctuation">{</span>\n  <span class="token keyword">static</span> updateValue<span class="token operator">:</span> <span class="token function-variable function">Invoker</span> <span class="token operator">=</span> <span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token punctuation">{</span> value <span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n    <span class="token keyword">await</span> <span class="token keyword">new</span> <span class="token class-name"><span class="token builtin">Promise</span></span><span class="token punctuation">(</span><span class="token punctuation">(</span>r<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token function">setTimeout</span><span class="token punctuation">(</span>r<span class="token punctuation">,</span> <span class="token number">1000</span><span class="token punctuation">)</span><span class="token punctuation">)</span>\n    <span class="token function">emit</span><span class="token punctuation">(</span><span class="token punctuation">{</span> value <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token boolean">true</span><span class="token punctuation">)</span>\n  <span class="token punctuation">}</span>\n\n  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">const</span> <span class="token punctuation">{</span> value <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>props\n\n    <span class="token keyword">return</span> <span class="token punctuation">(</span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span><span class="token plain-text">当前值：</span><span class="token punctuation">{</span>value<span class="token punctuation">}</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n    <span class="token punctuation">)</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">connect</span><span class="token punctuation">(</span><span class="token string">\'value\'</span><span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token constant">B</span><span class="token punctuation">)</span></code></pre><p>以上例子 B 组件提供了 <code>updateValue</code> 给其他组件调用改变自身数据状态</p><h2>\n  <a href="#广播消息" id="广播消息"></a>广播消息\n</h2><p>此方式是一个组件直接进行广播消息，传递相关参数，其他组件可以进行消息监听获取参数。是主动的通信方式</p><h3>\n  <a href="#主动广播" id="主动广播"></a>主动广播\n</h3><p>组件进行广播消息没有什么限制</p><pre class="language-ts"><code class="language-ts"><span class="token comment">// name：事件名字，用于区分</span>\n<span class="token comment">// value：传递的参数</span>\n<span class="token keyword">type</span> <span class="token class-name">$postMessage</span> <span class="token operator">=</span> <span class="token punctuation">(</span>name<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span> value<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">any</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token keyword">void</span></code></pre><p>以下例子，点击按钮组件就广播了一个名字为 <code>m</code> 的消息，并且传递了参数 <code>hello world</code></p><pre class="language-tsx"><code class="language-tsx"><span class="token keyword">import</span> React<span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token constant">FC</span> <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'react\'</span>\n<span class="token keyword">import</span> <span class="token punctuation">{</span> ComponentProps <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'@variousjs/various\'</span>\n\n<span class="token keyword">const</span> <span class="token constant">A</span><span class="token operator">:</span> <span class="token constant">FC</span><span class="token operator">&lt;</span>ComponentProps<span class="token operator">></span> <span class="token operator">=</span> <span class="token punctuation">(</span>props<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n  <span class="token keyword">const</span> <span class="token function-variable function">onMsg</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n    props<span class="token punctuation">.</span><span class="token function">$postMessage</span><span class="token punctuation">(</span><span class="token string">\'m\'</span><span class="token punctuation">,</span> <span class="token string">\'hello world\'</span><span class="token punctuation">)</span>\n  <span class="token punctuation">}</span>\n\n  <span class="token keyword">return</span> <span class="token punctuation">(</span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span><span class="token plain-text">\n      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>onMsg<span class="token punctuation">}</span></span><span class="token punctuation">></span></span><span class="token plain-text">广播消息</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">></span></span><span class="token plain-text">\n    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n  <span class="token punctuation">)</span>\n<span class="token punctuation">}</span></code></pre><h3>\n  <a href="#监听消息" id="监听消息"></a>监听消息\n</h3><p>其他组件要进行监听消息，必须定义静态方法 <code>$onMessage</code>。请注意组件无法监听到自己广播的消息</p><pre class="language-ts"><code class="language-ts"><span class="token keyword">export</span> <span class="token keyword">type</span> <span class="token class-name">OnMessage</span> <span class="token operator">=</span> <span class="token punctuation">(</span>message<span class="token operator">:</span> <span class="token punctuation">{</span>\n  type<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span>\n  name<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span>\n  value<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">any</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token keyword">void</span></code></pre><p>监听消息返回的参数中可以获取到当前广播消息的组件名字</p><pre class="language-tsx"><code class="language-tsx"><span class="token keyword">import</span> React<span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token constant">FC</span> <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'react\'</span>\n<span class="token keyword">import</span> <span class="token punctuation">{</span> MessageInvoker <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'@variousjs/various\'</span>\n\n<span class="token keyword">const</span> <span class="token constant">A</span><span class="token operator">:</span> <span class="token function-variable function">FC</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n  <span class="token keyword">return</span> <span class="token punctuation">(</span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span><span class="token plain-text">\n      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>onMsg<span class="token punctuation">}</span></span><span class="token punctuation">></span></span><span class="token plain-text">广播消息</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">></span></span><span class="token plain-text">\n    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n  <span class="token punctuation">)</span>\n<span class="token punctuation">}</span>\n\n<span class="token constant">A</span><span class="token punctuation">.</span>$onMessage<span class="token operator">:</span> <span class="token function-variable function">MessageInvoker</span> <span class="token operator">=</span> <span class="token punctuation">(</span>m<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n  <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>m<span class="token punctuation">)</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token constant">A</span></code></pre>',toc:'<ul>\n<li><a href="#%E6%96%B9%E6%B3%95%E8%B0%83%E7%94%A8">方法调用</a><ul>\n<li><a href="#%E6%96%B9%E6%B3%95%E6%8F%90%E4%BE%9B">方法提供</a><ul>\n<li><a href="#%E4%B8%BB%E4%BD%93%E7%BB%84%E4%BB%B6">主体组件</a></li>\n<li><a href="#%E5%8A%9F%E8%83%BD%E7%BB%84%E4%BB%B6">功能组件</a></li>\n</ul>\n</li>\n<li><a href="#%E8%B0%83%E7%94%A8%E6%96%B9%E6%B3%95">调用方法</a></li>\n<li><a href="#%E7%8A%B6%E6%80%81%E6%94%B9%E5%8F%98">状态改变</a></li>\n</ul>\n</li>\n<li><a href="#%E5%B9%BF%E6%92%AD%E6%B6%88%E6%81%AF">广播消息</a><ul>\n<li><a href="#%E4%B8%BB%E5%8A%A8%E5%B9%BF%E6%92%AD">主动广播</a></li>\n<li><a href="#%E7%9B%91%E5%90%AC%E6%B6%88%E6%81%AF">监听消息</a></li>\n</ul>\n</li>\n</ul>\n'},b=function(){return s().createElement(E,{data:x})}}(),p}()}));
//# sourceMappingURL=communication.js.map