define(["react","antd","highlighter"],(function(e,n,t){return function(){"use strict";var r={4093:function(e,n,t){var r=t(7537),a=t.n(r),o=t(3645),c=t.n(o)()(a());c.push([e.id,".container_PppZ6 {\n  margin: 32px 48px 60px;\n  max-width: 720px;\n}\n","",{version:3,sources:["webpack://./src/components/component.less"],names:[],mappings:"AAAA;EACE,sBAAA;EACA,gBAAA;AACF",sourcesContent:[".container {\n  margin: 32px 48px 60px;\n  max-width: 720px;\n}\n"],sourceRoot:""}]),c.locals={container:"container_PppZ6"},n.Z=c},3645:function(e){e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t="",r=void 0!==n[5];return n[4]&&(t+="@supports (".concat(n[4],") {")),n[2]&&(t+="@media ".concat(n[2]," {")),r&&(t+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),t+=e(n),r&&(t+="}"),n[2]&&(t+="}"),n[4]&&(t+="}"),t})).join("")},n.i=function(e,t,r,a,o){"string"==typeof e&&(e=[[null,e,void 0]]);var c={};if(r)for(var i=0;i<this.length;i++){var l=this[i][0];null!=l&&(c[l]=!0)}for(var u=0;u<e.length;u++){var s=[].concat(e[u]);r&&c[s[0]]||(void 0!==o&&(void 0===s[5]||(s[1]="@layer".concat(s[5].length>0?" ".concat(s[5]):""," {").concat(s[1],"}")),s[5]=o),t&&(s[2]?(s[1]="@media ".concat(s[2]," {").concat(s[1],"}"),s[2]=t):s[2]=t),a&&(s[4]?(s[1]="@supports (".concat(s[4],") {").concat(s[1],"}"),s[4]=a):s[4]="".concat(a)),n.push(s))}},n}},7537:function(e){e.exports=function(e){var n=e[1],t=e[3];if(!t)return n;if("function"==typeof btoa){var r=btoa(unescape(encodeURIComponent(JSON.stringify(t)))),a="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(r),o="/*# ".concat(a," */"),c=t.sources.map((function(e){return"/*# sourceURL=".concat(t.sourceRoot||"").concat(e," */")}));return[n].concat(c).concat([o]).join("\n")}return[n].join("\n")}},3379:function(e){var n=[];function t(e){for(var t=-1,r=0;r<n.length;r++)if(n[r].identifier===e){t=r;break}return t}function r(e,r){for(var o={},c=[],i=0;i<e.length;i++){var l=e[i],u=r.base?l[0]+r.base:l[0],s=o[u]||0,p="".concat(u," ").concat(s);o[u]=s+1;var f=t(p),d={css:l[1],media:l[2],sourceMap:l[3],supports:l[4],layer:l[5]};if(-1!==f)n[f].references++,n[f].updater(d);else{var m=a(d,r);r.byIndex=i,n.splice(i,0,{identifier:p,updater:m,references:1})}c.push(p)}return c}function a(e,n){var t=n.domAPI(n);return t.update(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap&&n.supports===e.supports&&n.layer===e.layer)return;t.update(e=n)}else t.remove()}}e.exports=function(e,a){var o=r(e=e||[],a=a||{});return function(e){e=e||[];for(var c=0;c<o.length;c++){var i=t(o[c]);n[i].references--}for(var l=r(e,a),u=0;u<o.length;u++){var s=t(o[u]);0===n[s].references&&(n[s].updater(),n.splice(s,1))}o=l}}},569:function(e){var n={};e.exports=function(e,t){var r=function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}n[e]=t}return n[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},9216:function(e){e.exports=function(e){var n=document.createElement("style");return e.setAttributes(n,e.attributes),e.insert(n,e.options),n}},3565:function(e,n,t){e.exports=function(e){var n=t.nc;n&&e.setAttribute("nonce",n)}},7795:function(e){e.exports=function(e){var n=e.insertStyleElement(e);return{update:function(t){!function(e,n,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var a=void 0!==t.layer;a&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,a&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var o=t.sourceMap;o&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),n.styleTagTransform(r,e,n.options)}(n,e,t)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)}}}},4589:function(e){e.exports=function(e,n){if(n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}}},2161:function(n){n.exports=e},7937:function(e){e.exports=n},3090:function(e){e.exports=t}},a={};function o(e){var n=a[e];if(void 0!==n)return n.exports;var t=a[e]={id:e,exports:{}};return r[e](t,t.exports,o),t.exports}o.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(n,{a:n}),n},o.d=function(e,n){for(var t in n)o.o(n,t)&&!o.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:n[t]})},o.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var c={};return function(){o.r(c),o.d(c,{default:function(){return A}});var e=o(2161),n=o.n(e),t=o(7937),r=o(3090),a=o.n(r),i=o(3379),l=o.n(i),u=o(7795),s=o.n(u),p=o(569),f=o.n(p),d=o(3565),m=o.n(d),v=o(9216),g=o.n(v),h=o(4589),y=o.n(h),E=o(4093),b={};b.styleTagTransform=y(),b.setAttributes=m(),b.insert=f().bind(null,"head"),b.domAPI=s(),b.insertStyleElement=g(),l()(E.Z,b);var x=E.Z&&E.Z.locals?E.Z.locals:void 0,j=t.Typography.Title,S=t.Typography.Paragraph,A=function(){return n().createElement("div",{className:x.container},n().createElement(t.Typography,null,n().createElement(j,{level:2},"开发说明"),n().createElement(S,null,"VariousJS 需要需要提供 html 模板，容器组件应配置即可生成一个网站。但有以下的限制及配置说明"),n().createElement(j,{level:3},"脚手架"),n().createElement(S,null,"由于 VariosuJS 的组件开发及打包跟普通开发有很多不一样的地方，这里提供脚手架，可以快速开始组件开发"),n().createElement(S,null,"安装 VariousJS 非常方便简单"),n().createElement(a(),{language:"bash",code:"$ cd <dir>\n$ npm init @variousjs\n$ npm i\n\n# 开发\n$ npm start\n\n# 构建\n$ npm run build"}),n().createElement(S,null,"脚手架默认集成 TypeScript，ESlint。安装 “@variousjs/various” 用于 VariousJS 编写提示"),n().createElement(a(),{language:"bash",code:"├── LICENSE\n├── README.md\n├── demo\n|  ├── dist             # 构建目录\n│  └── index.html       # 模板\n├── node_modules\n├── package-lock.json\n├── package.json\n├── src\n│  ├── components       # 组件\n│  ├── declaration.d.ts\n│  ├── entry            # 入口组件\n│  └── types.ts\n├── tsconfig.json\n├── webpack.base.config.js\n├── webpack.component.config.js\n└── webpack.entry.config.js"}),n().createElement(S,null,"由于多组件开发，webpack 配置会有多入口，开发时候命令会特殊处理，避免多入口导致 dev server 重复加载问题"),n().createElement(a(),{language:"json",code:'"start": "webpack --progress --config webpack.component.config.js & webpack serve --config webpack.entry.config.js --progress"'}),n().createElement(S,null,"如果定义了依赖组件，请注意需要 webpack externals 配置添加排除"),n().createElement(a(),{language:"javascript",code:"externals: {\n  antd: {\n    root: 'antd',\n    amd: 'antd',\n  },\n  highlighter: {\n    root: 'highlighter',\n    amd: 'highlighter',\n  },\n}"}),n().createElement(t.Divider,null),n().createElement(S,null,"如果使用自定义构建工具开发 VariousJS 组件，需要注意以下说明"),n().createElement(j,{level:4},"组件限制"),n().createElement(S,null,"组件必须为 AMD 模式的 React 组件。只要符合要求的组件都可以加载，甚至可以是第三方组件"),n().createElement(j,{level:4},"内置依赖"),n().createElement(S,null,"VariousJS 内置一些底层依赖，其他组件开发可以直接使用"),n().createElement("ul",null,n().createElement("li",null,"React"),n().createElement("li",null,"React-DOM"),n().createElement("li",null,"React-Router-DOM"),n().createElement("li",null,"nycticorax: ",n().createElement("a",{rel:"noreferrer",target:"_blank",href:"https://github.com/fratercula/nycticorax"},"https://github.com/fratercula/nycticorax"))),n().createElement(j,{level:4},"组件打包"),n().createElement(S,null,"组件需要打包成 AMD 格式（UMD 也可以），但是不能指定 library name，如果指定了可能会造成找不到组件错误"),n().createElement(a(),{language:"javascript",code:"// webpack 打包参考\nmodule.exports = {\n  // ...,\n  output: {\n    // ...,\n    libraryTarget: 'amd', // 指定 amd 格式\n    // ...,\n  },\n  // ...,\n}"}),n().createElement(j,{level:4},"组件开发"),n().createElement(S,null,"由于多个组件由 RequireJS 引入，这时候 webpack dev 模式的配置不能使用平常入口加载模式，需要入口特殊配置，不然可能导致失效或者重复加载热更新 js 等错误情况"),n().createElement(j,{level:4},"浏览器 Polyfill"),n().createElement(S,null,"考虑到组件代码共享及减少重复代码加载，VariousJS 核心 js 已经将浏览器兼容 Polyfill 包含，所以组件构建适合需要注意不需要添加额外的 Polyfill 支持")))}}(),c}()}));
//# sourceMappingURL=dev.js.map