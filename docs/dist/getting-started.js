define(["react"],(function(n){return function(){"use strict";var a={739:function(n,a,t){var s=t(537),e=t.n(s),o=t(645),p=t.n(o)()(e());p.push([n.id,".md_eATBI {\n  padding: 32px 200px 60px 0;\n}\n@media (max-width: 800px) {\n  .md_eATBI {\n    padding-left: 20px;\n    padding-right: 20px;\n  }\n  .toc_Q86k4 {\n    display: none;\n  }\n}\n.toc_Q86k4 {\n  position: fixed;\n  margin-top: 90px;\n  right: 50px;\n  top: 0;\n  overflow-y: auto;\n  bottom: 50px;\n  border: 3px solid #eee;\n}\n.list_ISPoe {\n  transition: all 0.3s ease;\n  background: #fff;\n  padding: 10px 14px 10px 0;\n}\n","",{version:3,sources:["webpack://./src/helper/markdown.less"],names:[],mappings:"AAAA;EACE,0BAAA;AACF;AAEA;EACE;IACE,kBAAA;IACA,mBAAA;EAAF;EAGA;IACE,aAAA;EADF;AACF;AAIA;EACE,eAAA;EACA,gBAAA;EACA,WAAA;EACA,MAAA;EACA,gBAAA;EACA,YAAA;EACA,sBAAA;AAFF;AAKA;EACE,yBAAA;EACA,gBAAA;EACA,yBAAA;AAHF",sourcesContent:[".md {\n  padding: 32px 200px 60px 0;\n}\n\n@media (max-width: 800px) {\n  .md {\n    padding-left: 20px;\n    padding-right: 20px;\n  }\n\n  .toc {\n    display: none;\n  }\n}\n\n.toc {\n  position: fixed;\n  margin-top: 90px;\n  right: 50px;\n  top: 0;\n  overflow-y: auto;\n  bottom: 50px;\n  border: 3px solid #eee;\n}\n\n.list {\n  transition: all .3s ease;\n  background: #fff;\n  padding: 10px 14px 10px 0;\n}\n"],sourceRoot:""}]),p.locals={md:"md_eATBI",toc:"toc_Q86k4",list:"list_ISPoe"},a.Z=p},645:function(n){n.exports=function(n){var a=[];return a.toString=function(){return this.map((function(a){var t="",s=void 0!==a[5];return a[4]&&(t+="@supports (".concat(a[4],") {")),a[2]&&(t+="@media ".concat(a[2]," {")),s&&(t+="@layer".concat(a[5].length>0?" ".concat(a[5]):""," {")),t+=n(a),s&&(t+="}"),a[2]&&(t+="}"),a[4]&&(t+="}"),t})).join("")},a.i=function(n,t,s,e,o){"string"==typeof n&&(n=[[null,n,void 0]]);var p={};if(s)for(var r=0;r<this.length;r++){var c=this[r][0];null!=c&&(p[c]=!0)}for(var i=0;i<n.length;i++){var l=[].concat(n[i]);s&&p[l[0]]||(void 0!==o&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=o),t&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=t):l[2]=t),e&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=e):l[4]="".concat(e)),a.push(l))}},a}},537:function(n){n.exports=function(n){var a=n[1],t=n[3];if(!t)return a;if("function"==typeof btoa){var s=btoa(unescape(encodeURIComponent(JSON.stringify(t)))),e="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(s),o="/*# ".concat(e," */"),p=t.sources.map((function(n){return"/*# sourceURL=".concat(t.sourceRoot||"").concat(n," */")}));return[a].concat(p).concat([o]).join("\n")}return[a].join("\n")}},379:function(n){var a=[];function t(n){for(var t=-1,s=0;s<a.length;s++)if(a[s].identifier===n){t=s;break}return t}function s(n,s){for(var o={},p=[],r=0;r<n.length;r++){var c=n[r],i=s.base?c[0]+s.base:c[0],l=o[i]||0,u="".concat(i," ").concat(l);o[i]=l+1;var d=t(u),f={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==d)a[d].references++,a[d].updater(f);else{var m=e(f,s);s.byIndex=r,a.splice(r,0,{identifier:u,updater:m,references:1})}p.push(u)}return p}function e(n,a){var t=a.domAPI(a);return t.update(n),function(a){if(a){if(a.css===n.css&&a.media===n.media&&a.sourceMap===n.sourceMap&&a.supports===n.supports&&a.layer===n.layer)return;t.update(n=a)}else t.remove()}}n.exports=function(n,e){var o=s(n=n||[],e=e||{});return function(n){n=n||[];for(var p=0;p<o.length;p++){var r=t(o[p]);a[r].references--}for(var c=s(n,e),i=0;i<o.length;i++){var l=t(o[i]);0===a[l].references&&(a[l].updater(),a.splice(l,1))}o=c}}},569:function(n){var a={};n.exports=function(n,t){var s=function(n){if(void 0===a[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}a[n]=t}return a[n]}(n);if(!s)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");s.appendChild(t)}},216:function(n){n.exports=function(n){var a=document.createElement("style");return n.setAttributes(a,n.attributes),n.insert(a,n.options),a}},565:function(n,a,t){n.exports=function(n){var a=t.nc;a&&n.setAttribute("nonce",a)}},795:function(n){n.exports=function(n){var a=n.insertStyleElement(n);return{update:function(t){!function(n,a,t){var s="";t.supports&&(s+="@supports (".concat(t.supports,") {")),t.media&&(s+="@media ".concat(t.media," {"));var e=void 0!==t.layer;e&&(s+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),s+=t.css,e&&(s+="}"),t.media&&(s+="}"),t.supports&&(s+="}");var o=t.sourceMap;o&&"undefined"!=typeof btoa&&(s+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),a.styleTagTransform(s,n,a.options)}(a,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(a)}}}},589:function(n){n.exports=function(n,a){if(a.styleSheet)a.styleSheet.cssText=n;else{for(;a.firstChild;)a.removeChild(a.firstChild);a.appendChild(document.createTextNode(n))}}},161:function(a){a.exports=n}},t={};function s(n){var e=t[n];if(void 0!==e)return e.exports;var o=t[n]={id:n,exports:{}};return a[n](o,o.exports,s),o.exports}s.n=function(n){var a=n&&n.__esModule?function(){return n.default}:function(){return n};return s.d(a,{a:a}),a},s.d=function(n,a){for(var t in a)s.o(a,t)&&!s.o(n,t)&&Object.defineProperty(n,t,{enumerable:!0,get:a[t]})},s.o=function(n,a){return Object.prototype.hasOwnProperty.call(n,a)},s.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},s.nc=void 0;var e={};return function(){s.r(e),s.d(e,{default:function(){return y}});var n=s(161),a=s.n(n),t=s(379),o=s.n(t),p=s(795),r=s.n(p),c=s(569),i=s.n(c),l=s(565),u=s.n(l),d=s(216),f=s.n(d),m=s(589),A=s.n(m),h=s(739),k={};k.styleTagTransform=A(),k.setAttributes=u(),k.insert=i().bind(null,"head"),k.domAPI=r(),k.insertStyleElement=f(),o()(h.Z,k);var g=h.Z&&h.Z.locals?h.Z.locals:void 0,v=function(n){var t=n.data;return a().createElement(a().Fragment,null,a().createElement("div",{className:"".concat(g.md," markdown-body"),dangerouslySetInnerHTML:{__html:t.content}}),t.toc?a().createElement("div",{className:g.toc},a().createElement("div",{className:"".concat(g.list," markdown-body"),dangerouslySetInnerHTML:{__html:t.toc}})):null)},E={content:'<h1>\n  <a href="#开始" id="开始"></a>开始\n</h1><p>这里主要介绍 VariousJS 的基础概念及相关资源。</p>\x3c!-- toc --\x3e\n\n<h2>\n  <a href="#了解-variousjs" id="了解-variousjs"></a>了解 VariousJS\n</h2><p>使用 VariousJS 前需要一定的应用构建及 <code>react</code> 基础，并了解 <a href="https://github.com/amdjs/amdjs-api/blob/master/AMD.md">AMD</a> 模块化规范</p><h3>\n  <a href="#基本原则" id="基本原则"></a>基本原则\n</h3><p>VariousJS 基于 <a href="https://requirejs.org/">RequireJS</a>，组件的加载处理由 RequireJS 提供，VariousJS 提供组件间联系的桥梁，并基于 <code>react</code> / <code>react-dom</code> 提供组件控制及页面路由能力。</p><ul>\n<li>VariousJS 核心并不参与应用打包构建，而是通过 cdn script 方式引入</li>\n<li>VariousJS 由加载器和核心功能两部分组成，加载器主要负责引入核心功能，而核心功能提供相应的基础能力</li>\n<li>使用 VariousJS 可以任意使用打包构建工具构建功能组件（基于 react），唯一要求是输出 AMD（UMD） 格式</li>\n<li>使用 VariousJS 只要提供了 AMD 导出的组件，通过一定的配置，就可以生成一个 web 应用，并且整个过程不需要再进行打包构建</li>\n</ul>\n<h3>\n  <a href="#示例教程" id="示例教程"></a>示例教程\n</h3><p>可以尝试通过 <a href="/tutorial">教程</a> 一步步创建一个简单的 VariousJS 应用</p><h2>\n  <a href="#脚手架" id="脚手架"></a>脚手架\n</h2><p>VariousJS 提供开箱即用的脚手架（基于 webpack），可以快速构建页面应用。脚手架没有进行黑魔法封装，都是裸露的基本配置。\n脚手架默认集成 <code>TypeScript</code>，<code>ESlint</code>。集成 <code>@variousjs/various</code> 用于 VariousJS API，属性相关提示</p><pre class="language-bash"><code class="language-bash"><span class="token comment"># 创建</span>\n$ <span class="token function">npm</span> init @variousjs\n\n<span class="token comment"># 初始化安装依赖</span>\n$ <span class="token function">npm</span> i\n\n<span class="token comment"># 开发</span>\n$ <span class="token function">npm</span> start\n\n<span class="token comment"># 构建</span>\n$ <span class="token function">npm</span> run build\n\n<span class="token comment"># 代码检查</span>\n$ <span class="token function">npm</span> run lint</code></pre><p>由于组件互相独立开发测试，可以使用一些零配置工具进行开发测试，例如 <a href="https://tsdx.io">TSDX</a>，或者 <a href="https://github.com/fratercula/falco">Falco</a></p><p>如果使用自定义构建工具开发 VariousJS 应用，需要注意以下</p><h3>\n  <a href="#组件要求" id="组件要求"></a>组件要求\n</h3><p>组件必须为 AMD（UMD） 导出的 React 组件。只要符合要求的组件都可以加载，甚至可以是第三方组件，所以组件需要打包成 AMD 格式（UMD 也可以），但是不能指定 <code>library name</code>，如果指定了可能会造成找不到组件错误</p><pre class="language-js"><code class="language-js">module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>\n  <span class="token comment">// ...,</span>\n  <span class="token literal-property property">output</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n    <span class="token comment">// ...,</span>\n    <span class="token literal-property property">libraryTarget</span><span class="token operator">:</span> <span class="token string">\'amd\'</span><span class="token punctuation">,</span> <span class="token comment">// 指定 amd 格式</span>\n    <span class="token comment">// ...,</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token comment">// 如果定义了依赖组件，注意需要 externals 配置添加排除</span>\n  <span class="token literal-property property">externals</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n    <span class="token literal-property property">antd</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n      <span class="token literal-property property">root</span><span class="token operator">:</span> <span class="token string">\'antd\'</span><span class="token punctuation">,</span>\n      <span class="token literal-property property">amd</span><span class="token operator">:</span> <span class="token string">\'antd\'</span><span class="token punctuation">,</span>\n    <span class="token punctuation">}</span><span class="token punctuation">,</span>\n    <span class="token comment">// ...</span>\n  <span class="token punctuation">}</span>，\n  <span class="token comment">// ...</span>\n<span class="token punctuation">}</span></code></pre><h3>\n  <a href="#内置依赖" id="内置依赖"></a>内置依赖\n</h3><p>VariousJS 内置一些底层依赖，需要在配置 <code>externals</code>，其他组件开发可以直接使用</p><ul>\n<li>react</li>\n<li>react-dom</li>\n<li>@variousjs/various：包含状态/通信支持</li>\n</ul>\n<h3>\n  <a href="#组件开发" id="组件开发"></a>组件开发\n</h3><p>由于多个组件由 RequireJS 引入，这时候在开发时候 webpack-dev-server 会在多个组件重复加载热更新 js，造成热更新失效或者出错问题。所以需要进行一些处理，例如分离 webpack 配置</p><pre class="language-json"><code class="language-json"><span class="token property">"start"</span><span class="token operator">:</span> <span class="token string">"webpack --progress --config webpack.component.config.js &amp; webpack serve --config webpack.entry.config.js --progress"</span></code></pre><h3>\n  <a href="#polyfill" id="polyfill"></a>Polyfill\n</h3><p>考虑到组件代码共享及减少重复代码加载，VariousJS 核心 js 已经将浏览器兼容 Polyfill 包含，所以组件构建时候需要注意不需要添加额外的 Polyfill</p><h3>\n  <a href="#兼容性" id="兼容性"></a>兼容性\n</h3><p>现代浏览器</p><h2>\n  <a href="#cdn-链接" id="cdn-链接"></a>CDN 链接\n</h2><p>如基本原则所说明，VariousJS 由加载器及核心组件组成，并且需要 CDN 方式引入。不过页面引入时候只需要引入加载器即可。加载器会自动引入核心功能组件。但需要保证 js 资源在同一个目录</p><pre class="language-html"><code class="language-html"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>https://cdn.jsdelivr.net/npm/@variousjs/various/dist/index.js<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token script"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>\n\n<span class="token comment">&lt;!-- 或者使用 unpkg --\x3e</span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>https://unpkg.com/@variousjs/various/dist/index.js<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token script"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span></code></pre>',toc:'<ul>\n<li><a href="#%E4%BA%86%E8%A7%A3-variousjs">了解 VariousJS</a><ul>\n<li><a href="#%E5%9F%BA%E6%9C%AC%E5%8E%9F%E5%88%99">基本原则</a></li>\n<li><a href="#%E7%A4%BA%E4%BE%8B%E6%95%99%E7%A8%8B">示例教程</a></li>\n</ul>\n</li>\n<li><a href="#%E8%84%9A%E6%89%8B%E6%9E%B6">脚手架</a><ul>\n<li><a href="#%E7%BB%84%E4%BB%B6%E8%A6%81%E6%B1%82">组件要求</a></li>\n<li><a href="#%E5%86%85%E7%BD%AE%E4%BE%9D%E8%B5%96">内置依赖</a></li>\n<li><a href="#%E7%BB%84%E4%BB%B6%E5%BC%80%E5%8F%91">组件开发</a></li>\n<li><a href="#polyfill">Polyfill</a></li>\n<li><a href="#%E5%85%BC%E5%AE%B9%E6%80%A7">兼容性</a></li>\n</ul>\n</li>\n<li><a href="#cdn-%E9%93%BE%E6%8E%A5">CDN 链接</a></li>\n</ul>\n'},y=function(){return a().createElement(v,{data:E})}}(),e}()}));
//# sourceMappingURL=getting-started.js.map