define(["react","antd","highlighter"],(function(n,e,t){return function(){"use strict";var r={4093:function(n,e,t){var r=t(7537),o=t.n(r),a=t(3645),c=t.n(a)()(o());c.push([n.id,".container_PppZ6 {\n  margin: 32px 48px 60px;\n  max-width: 720px;\n}\n","",{version:3,sources:["webpack://./src/components/component.less"],names:[],mappings:"AAAA;EACE,sBAAA;EACA,gBAAA;AACF",sourcesContent:[".container {\n  margin: 32px 48px 60px;\n  max-width: 720px;\n}\n"],sourceRoot:""}]),c.locals={container:"container_PppZ6"},e.Z=c},3645:function(n){n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t="",r=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),r&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=n(e),r&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t})).join("")},e.i=function(n,t,r,o,a){"string"==typeof n&&(n=[[null,n,void 0]]);var c={};if(r)for(var i=0;i<this.length;i++){var u=this[i][0];null!=u&&(c[u]=!0)}for(var s=0;s<n.length;s++){var l=[].concat(n[s]);r&&c[l[0]]||(void 0!==a&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=a),t&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=t):l[2]=t),o&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=o):l[4]="".concat(o)),e.push(l))}},e}},7537:function(n){n.exports=function(n){var e=n[1],t=n[3];if(!t)return e;if("function"==typeof btoa){var r=btoa(unescape(encodeURIComponent(JSON.stringify(t)))),o="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(r),a="/*# ".concat(o," */"),c=t.sources.map((function(n){return"/*# sourceURL=".concat(t.sourceRoot||"").concat(n," */")}));return[e].concat(c).concat([a]).join("\n")}return[e].join("\n")}},3379:function(n){var e=[];function t(n){for(var t=-1,r=0;r<e.length;r++)if(e[r].identifier===n){t=r;break}return t}function r(n,r){for(var a={},c=[],i=0;i<n.length;i++){var u=n[i],s=r.base?u[0]+r.base:u[0],l=a[s]||0,p="".concat(s," ").concat(l);a[s]=l+1;var f=t(p),d={css:u[1],media:u[2],sourceMap:u[3],supports:u[4],layer:u[5]};if(-1!==f)e[f].references++,e[f].updater(d);else{var m=o(d,r);r.byIndex=i,e.splice(i,0,{identifier:p,updater:m,references:1})}c.push(p)}return c}function o(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;t.update(n=e)}else t.remove()}}n.exports=function(n,o){var a=r(n=n||[],o=o||{});return function(n){n=n||[];for(var c=0;c<a.length;c++){var i=t(a[c]);e[i].references--}for(var u=r(n,o),s=0;s<a.length;s++){var l=t(a[s]);0===e[l].references&&(e[l].updater(),e.splice(l,1))}a=u}}},569:function(n){var e={};n.exports=function(n,t){var r=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},9216:function(n){n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},3565:function(n,e,t){n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},7795:function(n){n.exports=function(n){var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var o=void 0!==t.layer;o&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,o&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var a=t.sourceMap;a&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),e.styleTagTransform(r,n,e.options)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},4589:function(n){n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}},2161:function(e){e.exports=n},7937:function(n){n.exports=e},3090:function(n){n.exports=t}},o={};function a(n){var e=o[n];if(void 0!==e)return e.exports;var t=o[n]={id:n,exports:{}};return r[n](t,t.exports,a),t.exports}a.n=function(n){var e=n&&n.__esModule?function(){return n.default}:function(){return n};return a.d(e,{a:e}),e},a.d=function(n,e){for(var t in e)a.o(e,t)&&!a.o(n,t)&&Object.defineProperty(n,t,{enumerable:!0,get:e[t]})},a.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)},a.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})};var c={};return function(){a.r(c),a.d(c,{default:function(){return T}});var n=a(2161),e=a.n(n),t=a(7937),r=a(3090),o=a.n(r),i=a(3379),u=a.n(i),s=a(7795),l=a.n(s),p=a(569),f=a.n(p),d=a(3565),m=a.n(d),v=a(9216),g=a.n(v),h=a(4589),y=a.n(h),x=a(4093),b={};b.styleTagTransform=y(),b.setAttributes=m(),b.insert=f().bind(null,"head"),b.domAPI=l(),b.insertStyleElement=g(),u()(x.Z,b);var A=x.Z&&x.Z.locals?x.Z.locals:void 0,E=t.Typography.Title,M=t.Typography.Paragraph,T=function(){return e().createElement("div",{className:A.container},e().createElement(t.Typography,null,e().createElement(E,{level:2},"动态加载"),e().createElement(M,null,"容器组件及功能组件都拥有动态加载组件能力，提供这个方法可以更加灵活自定义页面功能，并且动态加载的组件一样可以访问全局数据，也拥有组件通信能力"),e().createElement(t.Alert,{message:"动态加载的组件没有这个方法",type:"warning"}),e().createElement(o(),{code:"type $render = (params: {\n  name: string,                   // 组件名字\n  url?: string,                   // 组件 url（如果页面已经定义组件，则可以不提供此参数）\n  module?: string,                // 渲染模块（如果组件提供了多个子模块）\n  props?: { [key: string]: any }, // 传递参数\n  target: Element | null,         // 渲染节点\n  onMounted?: () => void,         // 加载完成回调\n}) => () => void // 组件卸载方法",language:"ts"}),e().createElement(M,null,"参考例子"),e().createElement(o(),{language:"tsx",code:"this.unMount = $render({\n  name: 'switch',\n  // 引用第三方组件\n  url: 'https://unpkg.com/react-ios-switch@0.1.19/build/bundle.js',\n  target: document.querySelector('#y'),\n  props: { checked: true },\n  onMounted: () => {\n    console.log('ready')\n  },\n})"}),e().createElement(t.Alert,{message:"请注意动态加载组件后，一定要在当前组件卸载时候调用加载返回的卸载方法",type:"warning"}),e().createElement(o(),{language:"tsx",code:"componentWillUnmount() {\n  if (this.unMount) {\n    this.unMount()\n  }\n}"})))}}(),c}()}));
//# sourceMappingURL=render.js.map