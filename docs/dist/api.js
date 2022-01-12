define(["react"],(function(n){return function(){"use strict";var s={739:function(n,s,a){var t=a(537),p=a.n(t),o=a(645),e=a.n(o)()(p());e.push([n.id,".md_eATBI {\n  padding: 32px 48px 60px 0;\n}\n","",{version:3,sources:["webpack://./src/helper/markdown.less"],names:[],mappings:"AAAA;EACE,yBAAA;AACF",sourcesContent:[".md {\n  padding: 32px 48px 60px 0;\n}\n"],sourceRoot:""}]),e.locals={md:"md_eATBI"},s.Z=e},645:function(n){n.exports=function(n){var s=[];return s.toString=function(){return this.map((function(s){var a="",t=void 0!==s[5];return s[4]&&(a+="@supports (".concat(s[4],") {")),s[2]&&(a+="@media ".concat(s[2]," {")),t&&(a+="@layer".concat(s[5].length>0?" ".concat(s[5]):""," {")),a+=n(s),t&&(a+="}"),s[2]&&(a+="}"),s[4]&&(a+="}"),a})).join("")},s.i=function(n,a,t,p,o){"string"==typeof n&&(n=[[null,n,void 0]]);var e={};if(t)for(var c=0;c<this.length;c++){var l=this[c][0];null!=l&&(e[l]=!0)}for(var u=0;u<n.length;u++){var r=[].concat(n[u]);t&&e[r[0]]||(void 0!==o&&(void 0===r[5]||(r[1]="@layer".concat(r[5].length>0?" ".concat(r[5]):""," {").concat(r[1],"}")),r[5]=o),a&&(r[2]?(r[1]="@media ".concat(r[2]," {").concat(r[1],"}"),r[2]=a):r[2]=a),p&&(r[4]?(r[1]="@supports (".concat(r[4],") {").concat(r[1],"}"),r[4]=p):r[4]="".concat(p)),s.push(r))}},s}},537:function(n){n.exports=function(n){var s=n[1],a=n[3];if(!a)return s;if("function"==typeof btoa){var t=btoa(unescape(encodeURIComponent(JSON.stringify(a)))),p="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(t),o="/*# ".concat(p," */"),e=a.sources.map((function(n){return"/*# sourceURL=".concat(a.sourceRoot||"").concat(n," */")}));return[s].concat(e).concat([o]).join("\n")}return[s].join("\n")}},379:function(n){var s=[];function a(n){for(var a=-1,t=0;t<s.length;t++)if(s[t].identifier===n){a=t;break}return a}function t(n,t){for(var o={},e=[],c=0;c<n.length;c++){var l=n[c],u=t.base?l[0]+t.base:l[0],r=o[u]||0,i="".concat(u," ").concat(r);o[u]=r+1;var k=a(i),d={css:l[1],media:l[2],sourceMap:l[3],supports:l[4],layer:l[5]};if(-1!==k)s[k].references++,s[k].updater(d);else{var m=p(d,t);t.byIndex=c,s.splice(c,0,{identifier:i,updater:m,references:1})}e.push(i)}return e}function p(n,s){var a=s.domAPI(s);return a.update(n),function(s){if(s){if(s.css===n.css&&s.media===n.media&&s.sourceMap===n.sourceMap&&s.supports===n.supports&&s.layer===n.layer)return;a.update(n=s)}else a.remove()}}n.exports=function(n,p){var o=t(n=n||[],p=p||{});return function(n){n=n||[];for(var e=0;e<o.length;e++){var c=a(o[e]);s[c].references--}for(var l=t(n,p),u=0;u<o.length;u++){var r=a(o[u]);0===s[r].references&&(s[r].updater(),s.splice(r,1))}o=l}}},569:function(n){var s={};n.exports=function(n,a){var t=function(n){if(void 0===s[n]){var a=document.querySelector(n);if(window.HTMLIFrameElement&&a instanceof window.HTMLIFrameElement)try{a=a.contentDocument.head}catch(n){a=null}s[n]=a}return s[n]}(n);if(!t)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");t.appendChild(a)}},216:function(n){n.exports=function(n){var s=document.createElement("style");return n.setAttributes(s,n.attributes),n.insert(s,n.options),s}},565:function(n,s,a){n.exports=function(n){var s=a.nc;s&&n.setAttribute("nonce",s)}},795:function(n){n.exports=function(n){var s=n.insertStyleElement(n);return{update:function(a){!function(n,s,a){var t="";a.supports&&(t+="@supports (".concat(a.supports,") {")),a.media&&(t+="@media ".concat(a.media," {"));var p=void 0!==a.layer;p&&(t+="@layer".concat(a.layer.length>0?" ".concat(a.layer):""," {")),t+=a.css,p&&(t+="}"),a.media&&(t+="}"),a.supports&&(t+="}");var o=a.sourceMap;o&&"undefined"!=typeof btoa&&(t+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),s.styleTagTransform(t,n,s.options)}(s,n,a)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(s)}}}},589:function(n){n.exports=function(n,s){if(s.styleSheet)s.styleSheet.cssText=n;else{for(;s.firstChild;)s.removeChild(s.firstChild);s.appendChild(document.createTextNode(n))}}},161:function(s){s.exports=n}},a={};function t(n){var p=a[n];if(void 0!==p)return p.exports;var o=a[n]={id:n,exports:{}};return s[n](o,o.exports,t),o.exports}t.n=function(n){var s=n&&n.__esModule?function(){return n.default}:function(){return n};return t.d(s,{a:s}),s},t.d=function(n,s){for(var a in s)t.o(s,a)&&!t.o(n,a)&&Object.defineProperty(n,a,{enumerable:!0,get:s[a]})},t.o=function(n,s){return Object.prototype.hasOwnProperty.call(n,s)},t.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})};var p={};return function(){t.r(p),t.d(p,{default:function(){return h}});var n=t(161),s=t.n(n),a=t(379),o=t.n(a),e=t(795),c=t.n(e),l=t(569),u=t.n(l),r=t(565),i=t.n(r),k=t(216),d=t.n(k),m=t(589),f=t.n(m),g=t(739),y={};y.styleTagTransform=f(),y.setAttributes=i(),y.insert=u().bind(null,"head"),y.domAPI=c(),y.insertStyleElement=d(),o()(g.Z,y);var v=g.Z&&g.Z.locals?g.Z.locals:void 0,w=function(n){var a=n.children;return s().createElement("div",{className:"".concat(v.md," markdown-body"),dangerouslySetInnerHTML:{__html:a}})},h=function(){return s().createElement(w,null,'<h1> <a href="#组件 API" id="组件 API"></a>组件 API </h1><p>VariousJS 环境下，功能组件，容器组件都有一些 API 可以直接使用</p><h3> <a href="#$component" id="$component"></a>$component </h3><p>根据已经定义的组件名字生成可渲染的组件，用于灵活自定义页面结构及功能</p><pre class="language-ts"><code class="language-ts"><span class="token keyword">import</span> <span class="token punctuation">{</span> ComponentType <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'react\'</span>\n\n<span class="token keyword">type</span> <span class="token class-name">$component</span> <span class="token operator">=</span> <span class="token punctuation">(</span>name<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token operator">=></span> ComponentType<span class="token operator">&lt;</span><span class="token punctuation">{</span>\n  silent<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">boolean</span><span class="token punctuation">,</span>\n  <span class="token punctuation">[</span>key<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">]</span><span class="token operator">:</span> <span class="token builtin">any</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span><span class="token operator">></span></code></pre><blockquote> <p>注意：此方法只有在容器组件提供</p></blockquote> <p>生成的组件可以传递参数，如果传入 <code>$slient</code> 参数，则表示改组件为静默组件，不显示默认的加载及出错提示</p><pre class="language-tsx"><code class="language-tsx"><span class="token keyword">import</span> React<span class="token punctuation">,</span> <span class="token punctuation">{</span> Component<span class="token punctuation">,</span> ComponentType <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'react\'</span>\n<span class="token keyword">import</span> <span class="token punctuation">{</span> ContainerProps <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'@variousjs/various\'</span>\n\n<span class="token keyword">class</span> <span class="token class-name">Container</span> <span class="token keyword">extends</span> <span class="token class-name">Component<span class="token operator">&lt;</span>ContainerProps<span class="token operator">></span></span> <span class="token punctuation">{</span>\n  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">const</span> <span class="token punctuation">{</span> $component <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>props\n    <span class="token keyword">const</span> <span class="token constant">A</span> <span class="token operator">=</span> <span class="token function">$component</span><span class="token punctuation">(</span><span class="token string">\'a\'</span><span class="token punctuation">)</span>\n\n    <span class="token keyword">return</span> <span class="token punctuation">(</span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">A</span></span>\n        <span class="token comment">// 静默组件</span>\n        <span class="token attr-name">$slient</span>\n        <span class="token attr-name">value</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token number">1</span><span class="token punctuation">}</span></span>\n      <span class="token punctuation">/></span></span>\n    <span class="token punctuation">)</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">export</span> <span class="token keyword">default</span> Container</code></pre><h3> <a href="#$dispatch" id="$dispatch"></a>$dispatch </h3><p>此方法用于组件与全局通信，也可以组件间互相通信</p><pre class="language-ts"><code class="language-ts"><span class="token comment">// type 通信类型：store(全局) / 组件名字</span>\n<span class="token comment">// method 方法：调用全局或者其他组件提供的方法</span>\n<span class="token comment">// value 值：传递的参数</span>\n<span class="token keyword">type</span> <span class="token class-name">$dispatch</span> <span class="token operator">=</span> <span class="token punctuation">(</span>type<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span> method<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span> value<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">any</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token builtin">unknown</span></code></pre><p>可以在功能组件及全局组件使用。通信需要对应组件或者全局提供调用方法</p><pre class="language-tsx"><code class="language-tsx"><span class="token keyword">import</span> React<span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token constant">FC</span> <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'react\'</span>\n<span class="token keyword">import</span> <span class="token punctuation">{</span> ComponentProps <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'@variousjs/various\'</span>\n\n<span class="token keyword">const</span> <span class="token constant">A</span><span class="token operator">:</span> <span class="token constant">FC</span><span class="token operator">&lt;</span>ComponentProps<span class="token operator">></span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">props</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n  <span class="token keyword">const</span> <span class="token function-variable function">onB</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n    props<span class="token punctuation">.</span><span class="token function">$dispatch</span><span class="token punctuation">(</span><span class="token string">\'B\'</span><span class="token punctuation">,</span> <span class="token string">\'setName\'</span><span class="token punctuation">,</span> <span class="token string">\'b\'</span><span class="token punctuation">)</span>\n  <span class="token punctuation">}</span>\n  <span class="token keyword">const</span> <span class="token function-variable function">onStore</span> <span class="token operator">=</span> <span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n    <span class="token keyword">const</span> v <span class="token operator">=</span> <span class="token keyword">await</span> props<span class="token punctuation">.</span><span class="token function">$dispatch</span><span class="token punctuation">(</span><span class="token string">\'store\'</span><span class="token punctuation">,</span> <span class="token string">\'getValue\'</span><span class="token punctuation">)</span>\n    <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>v<span class="token punctuation">)</span>\n  <span class="token punctuation">}</span>\n\n  <span class="token keyword">return</span> <span class="token punctuation">(</span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span><span class="token plain-text">\n      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>onB<span class="token punctuation">}</span></span><span class="token punctuation">></span></span><span class="token plain-text">与 B 组件通信</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">></span></span><span class="token plain-text">\n      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>onStore<span class="token punctuation">}</span></span><span class="token punctuation">></span></span><span class="token plain-text">与全局通信</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">></span></span><span class="token plain-text">\n    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n  <span class="token punctuation">)</span>\n<span class="token punctuation">}</span></code></pre><h3> <a href="#$render" id="$render"></a>$render </h3><p>功能组件及容器组件都拥有动态加载组件能力，提供这个方法可以更加灵活自定义页面功能，并且动态加载的组件一样可以访问全局数据，也拥有通信能力</p><p>可以利用此功能，在正式环境进行在控制范围的组件测试</p><pre class="language-ts"><code class="language-ts"><span class="token keyword">type</span> <span class="token class-name">$render</span> <span class="token operator">=</span> <span class="token punctuation">(</span>params<span class="token operator">:</span> <span class="token punctuation">{</span>\n  name<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span>                   <span class="token comment">// 组件名字</span>\n  url<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span>                   <span class="token comment">// 组件 url（如果页面已经定义组件，则可以不提供此参数）</span>\n  module<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span>                <span class="token comment">// 渲染模块（如果组件提供了多个子模块）</span>\n  props<span class="token operator">?</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token punctuation">[</span>key<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">]</span><span class="token operator">:</span> <span class="token builtin">any</span> <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token comment">// 传递参数</span>\n  target<span class="token operator">:</span> Element <span class="token operator">|</span> <span class="token keyword">null</span><span class="token punctuation">,</span>         <span class="token comment">// 渲染节点</span>\n  onMounted<span class="token operator">?</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token keyword">void</span><span class="token punctuation">,</span>         <span class="token comment">// 加载完成回调</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token keyword">void</span> <span class="token comment">// 组件卸载方法</span></code></pre><blockquote> <p>注意：动态加载进来的组件不存在此方法</p></blockquote> <pre class="language-tsx"><code class="language-tsx"><span class="token keyword">import</span> React<span class="token punctuation">,</span> <span class="token punctuation">{</span> Component <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'react\'</span>\n<span class="token keyword">import</span> <span class="token punctuation">{</span> ContainerProps <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'@variousjs/various\'</span>\n\n<span class="token keyword">class</span> <span class="token class-name">Container</span> <span class="token keyword">extends</span> <span class="token class-name">Component<span class="token operator">&lt;</span>ContainerProps<span class="token operator">></span></span> <span class="token punctuation">{</span>\n  <span class="token function">componentDidMount</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span><span class="token keyword">this</span><span class="token punctuation">.</span>props<span class="token punctuation">.</span>$render<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n      <span class="token keyword">return</span>\n    <span class="token punctuation">}</span>\n\n    <span class="token keyword">this</span><span class="token punctuation">.</span>unMount <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>props<span class="token punctuation">.</span><span class="token function">$render</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n      name<span class="token operator">:</span> <span class="token string">\'switch\'</span><span class="token punctuation">,</span>\n      <span class="token comment">// 引用第三方组件</span>\n      url<span class="token operator">:</span> <span class="token string">\'https://unpkg.com/react-ios-switch@0.1.19/build/bundle.js\'</span><span class="token punctuation">,</span>\n      target<span class="token operator">:</span> document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">\'#switch\'</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n      props<span class="token operator">:</span> <span class="token punctuation">{</span> checked<span class="token operator">:</span> <span class="token boolean">true</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>\n      <span class="token function-variable function">onMounted</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n        <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">\'switch ready\'</span><span class="token punctuation">)</span>\n      <span class="token punctuation">}</span><span class="token punctuation">,</span>\n    <span class="token punctuation">}</span><span class="token punctuation">)</span>\n  <span class="token punctuation">}</span>\n\n  <span class="token function">componentWillUnmount</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token comment">// 注意进行组件卸载</span>\n    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>unMount<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n      <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">unMount</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n    <span class="token punctuation">}</span>\n  <span class="token punctuation">}</span>\n\n  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> <span class="token punctuation">(</span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>switch<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>\n    <span class="token punctuation">)</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span></code></pre><h3> <a href="#$preload" id="$preload"></a>$preload </h3><p>此方法可以预先加载已经定义好的组件，只需要输入组件名字即可，并可以判断是否完成预加载。支持在功能组件及容器组件使用</p><pre class="language-ts"><code class="language-ts"><span class="token keyword">type</span> <span class="token class-name">$preload</span> <span class="token operator">=</span> <span class="token punctuation">(</span>names<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token builtin">Promise</span><span class="token operator">&lt;</span><span class="token keyword">void</span><span class="token operator">></span></code></pre><blockquote> <p>注意：预加载的组件必须在页面配置中已经定义</p></blockquote> <pre class="language-tsx"><code class="language-tsx"><span class="token keyword">import</span> React<span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token constant">FC</span> <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'react\'</span>\n<span class="token keyword">import</span> <span class="token punctuation">{</span> ComponentProps <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'@variousjs/various\'</span>\n\n<span class="token keyword">const</span> <span class="token constant">A</span><span class="token operator">:</span> <span class="token constant">FC</span><span class="token operator">&lt;</span>ComponentProps<span class="token operator">></span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">props</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n  <span class="token keyword">const</span> <span class="token function-variable function">onPre</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n    <span class="token keyword">if</span> <span class="token punctuation">(</span>props<span class="token punctuation">.</span>$preload<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n      <span class="token keyword">await</span> props<span class="token punctuation">.</span><span class="token function">$preload</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string">\'b\'</span><span class="token punctuation">]</span><span class="token punctuation">)</span>\n      <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">\'preload B done\'</span><span class="token punctuation">)</span>\n    <span class="token punctuation">}</span>\n  <span class="token punctuation">}</span>\n\n  <span class="token keyword">return</span> <span class="token punctuation">(</span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span><span class="token plain-text">\n      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>onPre<span class="token punctuation">}</span></span><span class="token punctuation">></span></span><span class="token plain-text">预加载 B 组件</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">></span></span><span class="token plain-text">\n    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n  <span class="token punctuation">)</span>\n<span class="token punctuation">}</span></code></pre>')}}(),p}()}));
//# sourceMappingURL=api.js.map