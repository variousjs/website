define(["react"],(function(n){return function(){"use strict";var a={739:function(n,a,s){var t=s(537),e=s.n(t),o=s(645),c=s.n(o)()(e());c.push([n.id,".md_eATBI {\n  padding: 32px 48px 60px 0;\n}\n","",{version:3,sources:["webpack://./src/helper/markdown.less"],names:[],mappings:"AAAA;EACE,yBAAA;AACF",sourcesContent:[".md {\n  padding: 32px 48px 60px 0;\n}\n"],sourceRoot:""}]),c.locals={md:"md_eATBI"},a.Z=c},645:function(n){n.exports=function(n){var a=[];return a.toString=function(){return this.map((function(a){var s="",t=void 0!==a[5];return a[4]&&(s+="@supports (".concat(a[4],") {")),a[2]&&(s+="@media ".concat(a[2]," {")),t&&(s+="@layer".concat(a[5].length>0?" ".concat(a[5]):""," {")),s+=n(a),t&&(s+="}"),a[2]&&(s+="}"),a[4]&&(s+="}"),s})).join("")},a.i=function(n,s,t,e,o){"string"==typeof n&&(n=[[null,n,void 0]]);var c={};if(t)for(var r=0;r<this.length;r++){var p=this[r][0];null!=p&&(c[p]=!0)}for(var i=0;i<n.length;i++){var l=[].concat(n[i]);t&&c[l[0]]||(void 0!==o&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=o),s&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=s):l[2]=s),e&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=e):l[4]="".concat(e)),a.push(l))}},a}},537:function(n){n.exports=function(n){var a=n[1],s=n[3];if(!s)return a;if("function"==typeof btoa){var t=btoa(unescape(encodeURIComponent(JSON.stringify(s)))),e="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(t),o="/*# ".concat(e," */"),c=s.sources.map((function(n){return"/*# sourceURL=".concat(s.sourceRoot||"").concat(n," */")}));return[a].concat(c).concat([o]).join("\n")}return[a].join("\n")}},379:function(n){var a=[];function s(n){for(var s=-1,t=0;t<a.length;t++)if(a[t].identifier===n){s=t;break}return s}function t(n,t){for(var o={},c=[],r=0;r<n.length;r++){var p=n[r],i=t.base?p[0]+t.base:p[0],l=o[i]||0,u="".concat(i," ").concat(l);o[i]=l+1;var d=s(u),f={css:p[1],media:p[2],sourceMap:p[3],supports:p[4],layer:p[5]};if(-1!==d)a[d].references++,a[d].updater(f);else{var m=e(f,t);t.byIndex=r,a.splice(r,0,{identifier:u,updater:m,references:1})}c.push(u)}return c}function e(n,a){var s=a.domAPI(a);return s.update(n),function(a){if(a){if(a.css===n.css&&a.media===n.media&&a.sourceMap===n.sourceMap&&a.supports===n.supports&&a.layer===n.layer)return;s.update(n=a)}else s.remove()}}n.exports=function(n,e){var o=t(n=n||[],e=e||{});return function(n){n=n||[];for(var c=0;c<o.length;c++){var r=s(o[c]);a[r].references--}for(var p=t(n,e),i=0;i<o.length;i++){var l=s(o[i]);0===a[l].references&&(a[l].updater(),a.splice(l,1))}o=p}}},569:function(n){var a={};n.exports=function(n,s){var t=function(n){if(void 0===a[n]){var s=document.querySelector(n);if(window.HTMLIFrameElement&&s instanceof window.HTMLIFrameElement)try{s=s.contentDocument.head}catch(n){s=null}a[n]=s}return a[n]}(n);if(!t)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");t.appendChild(s)}},216:function(n){n.exports=function(n){var a=document.createElement("style");return n.setAttributes(a,n.attributes),n.insert(a,n.options),a}},565:function(n,a,s){n.exports=function(n){var a=s.nc;a&&n.setAttribute("nonce",a)}},795:function(n){n.exports=function(n){var a=n.insertStyleElement(n);return{update:function(s){!function(n,a,s){var t="";s.supports&&(t+="@supports (".concat(s.supports,") {")),s.media&&(t+="@media ".concat(s.media," {"));var e=void 0!==s.layer;e&&(t+="@layer".concat(s.layer.length>0?" ".concat(s.layer):""," {")),t+=s.css,e&&(t+="}"),s.media&&(t+="}"),s.supports&&(t+="}");var o=s.sourceMap;o&&"undefined"!=typeof btoa&&(t+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),a.styleTagTransform(t,n,a.options)}(a,n,s)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(a)}}}},589:function(n){n.exports=function(n,a){if(a.styleSheet)a.styleSheet.cssText=n;else{for(;a.firstChild;)a.removeChild(a.firstChild);a.appendChild(document.createTextNode(n))}}},161:function(a){a.exports=n}},s={};function t(n){var e=s[n];if(void 0!==e)return e.exports;var o=s[n]={id:n,exports:{}};return a[n](o,o.exports,t),o.exports}t.n=function(n){var a=n&&n.__esModule?function(){return n.default}:function(){return n};return t.d(a,{a:a}),a},t.d=function(n,a){for(var s in a)t.o(a,s)&&!t.o(n,s)&&Object.defineProperty(n,s,{enumerable:!0,get:a[s]})},t.o=function(n,a){return Object.prototype.hasOwnProperty.call(n,a)},t.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})};var e={};return function(){t.r(e),t.d(e,{default:function(){return S}});var n=t(161),a=t.n(n),s=t(379),o=t.n(s),c=t(795),r=t.n(c),p=t(569),i=t.n(p),l=t(565),u=t.n(l),d=t(216),f=t.n(d),m=t(589),k=t.n(m),h=t(739),v={};v.styleTagTransform=k(),v.setAttributes=u(),v.insert=i().bind(null,"head"),v.domAPI=r(),v.insertStyleElement=f(),o()(h.Z,v);var g=h.Z&&h.Z.locals?h.Z.locals:void 0,y=function(n){var s=n.data;return a().createElement("div",{className:"".concat(g.md," markdown-body"),dangerouslySetInnerHTML:{__html:s.content}})},b={content:'<h1>\n  <a href="#开始" id="开始"></a>开始\n</h1><p>这里主要介绍 VariousJS 的基础概念及相关资源。</p><h2>\n  <a href="#了解 VariousJS" id="了解 VariousJS"></a>了解 VariousJS\n</h2><p>使用 VariousJS 前需要一定的应用构建及 <code>react</code> 基础，并了解 <a href="https://github.com/amdjs/amdjs-api/blob/master/AMD.md">AMD</a> 模块化规范</p><h3>\n  <a href="#基本原则" id="基本原则"></a>基本原则\n</h3><p>VariousJS 基于 <a href="https://requirejs.org/">RequireJS</a>，组件的加载处理由 RequireJS 提供，VariousJS 提供组件间联系的桥梁，并基于 <code>react</code> / <code>react-dom</code> 提供组件控制及页面路由能力。</p><ul>\n<li>VariousJS 核心并不参与应用打包构建，而是通过 cdn script 方式引入</li>\n<li>VariousJS 由加载器和核心功能两部分组成，加载器主要负责引入核心功能，而核心功能提供相应的基础能力</li>\n<li>使用 VariousJS 可以任意使用打包构建工具构建功能组件（基于 react），唯一要求是输出 AMD（UMD） 格式</li>\n<li>使用 VariousJS 只要提供了 AMD 导出的组件，通过一定的配置，就可以生成一个 web 应用，并且整个过程不需要再进行打包构建</li>\n</ul>\n<h3>\n  <a href="#示例教程" id="示例教程"></a>示例教程\n</h3><p>可以尝试通过 <a href="#tutorial">教程</a> 一步步创建一个简单的 VariousJS 应用</p><h2>\n  <a href="#脚手架" id="脚手架"></a>脚手架\n</h2><p>VariousJS 提供开箱即用的脚手架（基于 webpack），可以快速构建页面应用。脚手架没有进行黑魔法封装，都是裸露的基本配置。\n脚手架默认集成 <code>TypeScript</code>，<code>ESlint</code>。集成 <code>@variousjs/various</code> 用于 VariousJS API，属性相关提示</p><pre class="language-bash"><code class="language-bash"><span class="token comment"># 创建</span>\n$ <span class="token function">npm</span> init @variousjs\n\n<span class="token comment"># 初始化安装依赖</span>\n$ <span class="token function">npm</span> i\n\n<span class="token comment"># 开发</span>\n$ <span class="token function">npm</span> start\n\n<span class="token comment"># 构建</span>\n$ <span class="token function">npm</span> run build\n\n<span class="token comment"># 代码检查</span>\n$ <span class="token function">npm</span> run lint</code></pre><p>由于组件互相独立开发测试，可以使用一些零配置工具进行开发测试，例如 <a href="https://tsdx.io">TSDX</a>，或者 <a href="https://github.com/fratercula/falco">Falco</a></p><p>如果使用自定义构建工具开发 VariousJS 应用，需要注意以下</p><h3>\n  <a href="#组件要求" id="组件要求"></a>组件要求\n</h3><p>组件必须为 AMD（UMD） 导出的 React 组件。只要符合要求的组件都可以加载，甚至可以是第三方组件，所以组件需要打包成 AMD 格式（UMD 也可以），但是不能指定 <code>library name</code>，如果指定了可能会造成找不到组件错误</p><pre class="language-js"><code class="language-js">module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>\n  <span class="token comment">// ...,</span>\n  output<span class="token operator">:</span> <span class="token punctuation">{</span>\n    <span class="token comment">// ...,</span>\n    libraryTarget<span class="token operator">:</span> <span class="token string">\'amd\'</span><span class="token punctuation">,</span> <span class="token comment">// 指定 amd 格式</span>\n    <span class="token comment">// ...,</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token comment">// 如果定义了依赖组件，注意需要 externals 配置添加排除</span>\n  externals<span class="token operator">:</span> <span class="token punctuation">{</span>\n    antd<span class="token operator">:</span> <span class="token punctuation">{</span>\n      root<span class="token operator">:</span> <span class="token string">\'antd\'</span><span class="token punctuation">,</span>\n      amd<span class="token operator">:</span> <span class="token string">\'antd\'</span><span class="token punctuation">,</span>\n    <span class="token punctuation">}</span><span class="token punctuation">,</span>\n    <span class="token comment">// ...</span>\n  <span class="token punctuation">}</span>，\n  <span class="token comment">// ...</span>\n<span class="token punctuation">}</span></code></pre><h3>\n  <a href="#内置依赖" id="内置依赖"></a>内置依赖\n</h3><p>VariousJS 内置一些底层依赖，需要在配置 <code>externals</code>，其他组件开发可以直接使用</p><ul>\n<li>react</li>\n<li>react-dom</li>\n<li>@variousjs/various：包含状态/通信支持</li>\n</ul>\n<h3>\n  <a href="#组件开发" id="组件开发"></a>组件开发\n</h3><p>由于多个组件由 RequireJS 引入，这时候在开发时候 webpack-dev-server 会在多个组件重复加载热更新 js，造成热更新失效或者出错问题。所以需要进行一些处理，例如分离 webpack 配置</p><pre class="language-json"><code class="language-json"><span class="token property">"start"</span><span class="token operator">:</span> <span class="token string">"webpack --progress --config webpack.component.config.js &amp; webpack serve --config webpack.entry.config.js --progress"</span></code></pre><h3>\n  <a href="#Polyfill" id="Polyfill"></a>Polyfill\n</h3><p>考虑到组件代码共享及减少重复代码加载，VariousJS 核心 js 已经将浏览器兼容 Polyfill 包含，所以组件构建适合需要注意不需要添加额外的 Polyfill 支持</p><h3>\n  <a href="#兼容性" id="兼容性"></a>兼容性\n</h3><p>现代浏览器</p><h2>\n  <a href="#CDN 链接" id="CDN 链接"></a>CDN 链接\n</h2><p>如基本原则所说明，VariousJS 由加载器及核心组件组成，并且需要 CDN 方式引入。不过页面引入时候只需要引入加载器即可。加载器会自动引入核心功能组件。但需要保证 js 资源在同一个目录</p><pre class="language-html"><code class="language-html"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>https://cdn.jsdelivr.net/npm/@variousjs/various/dist/index.js<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token script"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>\n\n<span class="token comment">&lt;!-- 或者使用 unpkg --\x3e</span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>https://unpkg.com/@variousjs/various/dist/index.js<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token script"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span></code></pre>',toc:[{content:"开始",slug:"开始",lvl:1,i:0,seen:0},{content:"了解 VariousJS",slug:"了解-variousjs",lvl:2,i:1,seen:0},{content:"基本原则",slug:"基本原则",lvl:3,i:2,seen:0},{content:"示例教程",slug:"示例教程",lvl:3,i:3,seen:0},{content:"脚手架",slug:"脚手架",lvl:2,i:4,seen:0},{content:"组件要求",slug:"组件要求",lvl:3,i:5,seen:0},{content:"内置依赖",slug:"内置依赖",lvl:3,i:6,seen:0},{content:"组件开发",slug:"组件开发",lvl:3,i:7,seen:0},{content:"Polyfill",slug:"polyfill",lvl:3,i:8,seen:0},{content:"兼容性",slug:"兼容性",lvl:3,i:9,seen:0},{content:"CDN 链接",slug:"cdn-链接",lvl:2,i:10,seen:0}]},S=function(){return a().createElement(y,{data:b})}}(),e}()}));
//# sourceMappingURL=getting-started.js.map