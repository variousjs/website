define(["react"], function(__WEBPACK_EXTERNAL_MODULE_react__) { return /******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/helper/markdown.tsx":
/*!*********************************!*\
  !*** ./src/helper/markdown.tsx ***!
  \*********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _markdown_less__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./markdown.less */ "./src/helper/markdown.less");



var M = function M(_ref) {
  var children = _ref.children;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "".concat(_markdown_less__WEBPACK_IMPORTED_MODULE_1__["default"].md, " markdown-body"),
    dangerouslySetInnerHTML: {
      __html: children
    }
  });
};

/* harmony default export */ __webpack_exports__["default"] = (M);

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/less-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!./src/helper/markdown.less":
/*!***********************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/less-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!./src/helper/markdown.less ***!
  \***********************************************************************************************************************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".md_eATBI {\n  padding: 32px 48px 60px 0;\n}\n", "",{"version":3,"sources":["webpack://./src/helper/markdown.less"],"names":[],"mappings":"AAAA;EACE,yBAAA;AACF","sourcesContent":[".md {\n  padding: 32px 48px 60px 0;\n}\n"],"sourceRoot":""}]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"md": "md_eATBI"
};
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ (function(module) {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var _i = 0; _i < this.length; _i++) {
        var id = this[_i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i2 = 0; _i2 < modules.length; _i2++) {
      var item = [].concat(modules[_i2]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ (function(module) {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/components/tutorial/content.md":
/*!********************************************!*\
  !*** ./src/components/tutorial/content.md ***!
  \********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// Module
var code = "<h1>\n  <a href=\"#教程\" id=\"教程\"></a>教程\n</h1><p>这里将从零开始创建一个基于 VariousJS 的网站应用。该应用非常简单，但会包含大部分 VariousJS 的功能</p><h2>\n  <a href=\"#前期准备\" id=\"前期准备\"></a>前期准备\n</h2><p>开始之前需要了解 React 相关，以及应用构建打包工具，例如 webpack 等。另外需要明白 VariousJS 的组件体系，以及配置核心由主组件/功能呢组件构成。\n应用打包可以使用 VariousJS 模版打包或者自行配置，需要注意以下两点</p><ul>\n<li>应用需要打包成 amd 格式</li>\n<li>需要将 <code>react</code> / <code>react-dom</code> / <code>@variousjs/various</code> 构建排除</li>\n</ul>\n<p>为了快速构建教程所需要的组件应用，这里使用一个简单打包工具，简单配置即可进行应用打包。</p><h3>\n  <a href=\"#安装 Falco\" id=\"安装 Falco\"></a>安装 Falco\n</h3><p>Falco 是一个简单的应用打包工具，通过简单配置即可进行应用打包，并且可以自动安装依赖。以下安装 Falco</p><pre class=\"language-bash\"><code class=\"language-bash\">$ <span class=\"token function\">npm</span> i @fratercula/falco -g</code></pre><p>全局安装完成，即可进行应用打包。但教程的应用需要一些特殊定制，所以需要在使用目录添加配置 <code>falco.config.js</code></p><pre class=\"language-js\"><code class=\"language-js\"><span class=\"token keyword\">const</span> path <span class=\"token operator\">=</span> <span class=\"token function\">require</span><span class=\"token punctuation\">(</span><span class=\"token string\">'path'</span><span class=\"token punctuation\">)</span>\n\nmodule<span class=\"token punctuation\">.</span>exports <span class=\"token operator\">=</span> <span class=\"token punctuation\">{</span>\n  entry<span class=\"token operator\">:</span> <span class=\"token punctuation\">{</span>\n    <span class=\"token comment\">// 指定应用打包入口，随着教程，这里需要相应进行改动</span>\n    a<span class=\"token operator\">:</span> path<span class=\"token punctuation\">.</span><span class=\"token function\">resolve</span><span class=\"token punctuation\">(</span>__dirname<span class=\"token punctuation\">,</span> <span class=\"token string\">'./a.js'</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">,</span>\n  <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n  <span class=\"token comment\">// 需要将 react，react-dom，@variousjs/various 进行打包排除</span>\n  externals<span class=\"token operator\">:</span> <span class=\"token punctuation\">[</span>\n    <span class=\"token punctuation\">{</span>\n      name<span class=\"token operator\">:</span> <span class=\"token string\">'react'</span><span class=\"token punctuation\">,</span>\n      root<span class=\"token operator\">:</span> <span class=\"token string\">'React'</span><span class=\"token punctuation\">,</span>\n      amd<span class=\"token operator\">:</span> <span class=\"token string\">'react'</span><span class=\"token punctuation\">,</span>\n    <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n    <span class=\"token punctuation\">{</span>\n      name<span class=\"token operator\">:</span> <span class=\"token string\">'react-dom'</span><span class=\"token punctuation\">,</span>\n      root<span class=\"token operator\">:</span> <span class=\"token string\">'ReactDOM'</span><span class=\"token punctuation\">,</span>\n      amd<span class=\"token operator\">:</span> <span class=\"token string\">'react-dom'</span><span class=\"token punctuation\">,</span>\n    <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n    <span class=\"token punctuation\">{</span>\n      name<span class=\"token operator\">:</span> <span class=\"token string\">'@variousjs/various'</span><span class=\"token punctuation\">,</span>\n      root<span class=\"token operator\">:</span> <span class=\"token string\">'Various'</span><span class=\"token punctuation\">,</span>\n      amd<span class=\"token operator\">:</span> <span class=\"token string\">'@variousjs/various'</span><span class=\"token punctuation\">,</span>\n    <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n    <span class=\"token comment\">// 教程 cdn 方式使用 antd UI 组件库，所以这里需要构建排除</span>\n    <span class=\"token punctuation\">{</span>\n      name<span class=\"token operator\">:</span> <span class=\"token string\">'antd'</span><span class=\"token punctuation\">,</span>\n      root<span class=\"token operator\">:</span> <span class=\"token string\">'antd'</span><span class=\"token punctuation\">,</span>\n      amd<span class=\"token operator\">:</span> <span class=\"token string\">'antd'</span><span class=\"token punctuation\">,</span>\n    <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n  <span class=\"token punctuation\">]</span><span class=\"token punctuation\">,</span>\n  output<span class=\"token operator\">:</span> <span class=\"token punctuation\">{</span>\n    path<span class=\"token operator\">:</span> path<span class=\"token punctuation\">.</span><span class=\"token function\">resolve</span><span class=\"token punctuation\">(</span>__dirname<span class=\"token punctuation\">,</span> <span class=\"token string\">'./dist'</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">,</span>\n    filename<span class=\"token operator\">:</span> <span class=\"token string\">'[name].js'</span><span class=\"token punctuation\">,</span>\n    <span class=\"token comment\">// 指定打包成 amd 格式</span>\n    libraryTarget<span class=\"token operator\">:</span> <span class=\"token string\">'amd'</span><span class=\"token punctuation\">,</span>\n  <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n  <span class=\"token comment\">// 不需要任何 polyfill，因为 variousjs 默认都包含了</span>\n  targets<span class=\"token operator\">:</span> <span class=\"token punctuation\">{</span> esmodules<span class=\"token operator\">:</span> <span class=\"token boolean\">true</span> <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n  mode<span class=\"token operator\">:</span> <span class=\"token string\">'production'</span><span class=\"token punctuation\">,</span>\n  sourceMap<span class=\"token operator\">:</span> <span class=\"token boolean\">false</span><span class=\"token punctuation\">,</span>\n<span class=\"token punctuation\">}</span></code></pre><p>添加完配置文件，就可以进行应用打包了。以下命令执行后就在在 <code>dist</code> 目录生成打包后应用</p><pre class=\"language-bash\"><code class=\"language-bash\">$ falco -c</code></pre><h2>\n  <a href=\"#创建主组件\" id=\"创建主组件\"></a>创建主组件\n</h2><p>主组件承载全局数据及控制页面组件展示，以及页面路由定义相关</p><h3>\n  <a href=\"#定义全局数据\" id=\"定义全局数据\"></a>定义全局数据\n</h3><p>创建 <code>store.js</code>，并设定全局值 <code>user</code></p><pre class=\"language-js\"><code class=\"language-js\"><span class=\"token keyword\">export</span> <span class=\"token keyword\">default</span> <span class=\"token punctuation\">{</span>\n  user<span class=\"token operator\">:</span> <span class=\"token punctuation\">{</span>\n    name<span class=\"token operator\">:</span> <span class=\"token string\">'various'</span><span class=\"token punctuation\">,</span>\n  <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n<span class=\"token punctuation\">}</span></code></pre><h3>\n  <a href=\"#控制全局数据\" id=\"控制全局数据\"></a>控制全局数据\n</h3><p>全局数据不能直接修改，需要创建 <code>actions.js</code>，用于操控数据变化</p><pre class=\"language-js\"><code class=\"language-js\"><span class=\"token keyword\">export</span> <span class=\"token keyword\">default</span> <span class=\"token punctuation\">{</span>\n  <span class=\"token keyword\">async</span> <span class=\"token function\">setName</span><span class=\"token punctuation\">(</span><span class=\"token parameter\"><span class=\"token punctuation\">{</span> dispatch<span class=\"token punctuation\">,</span> getStore <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span> value</span><span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n    <span class=\"token keyword\">const</span> next <span class=\"token operator\">=</span> <span class=\"token keyword\">await</span> <span class=\"token keyword\">new</span> <span class=\"token class-name\">Promise</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">(</span><span class=\"token parameter\">r</span><span class=\"token punctuation\">)</span> <span class=\"token operator\">=></span> <span class=\"token function\">setTimeout</span><span class=\"token punctuation\">(</span>r<span class=\"token punctuation\">,</span> <span class=\"token number\">1000</span><span class=\"token punctuation\">,</span> value<span class=\"token punctuation\">)</span><span class=\"token punctuation\">)</span>\n    <span class=\"token keyword\">const</span> <span class=\"token punctuation\">{</span> user <span class=\"token punctuation\">}</span> <span class=\"token operator\">=</span> <span class=\"token function\">getStore</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span>\n    user<span class=\"token punctuation\">.</span>name <span class=\"token operator\">=</span> next\n    <span class=\"token function\">dispatch</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">{</span> user <span class=\"token punctuation\">}</span><span class=\"token punctuation\">)</span>\n  <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n  <span class=\"token comment\">// 虽然能够直接通过 $store 数据，但这里还是可以进行一些简单数据处理</span>\n  <span class=\"token function\">getName</span><span class=\"token punctuation\">(</span><span class=\"token parameter\"><span class=\"token punctuation\">{</span> getStore <span class=\"token punctuation\">}</span></span><span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n    <span class=\"token keyword\">const</span> <span class=\"token punctuation\">{</span> user <span class=\"token punctuation\">}</span> <span class=\"token operator\">=</span> <span class=\"token function\">getStore</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span>\n    <span class=\"token keyword\">return</span> user<span class=\"token punctuation\">.</span>name\n  <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n<span class=\"token punctuation\">}</span></code></pre><h3>\n  <a href=\"#定义错误提示组件\" id=\"定义错误提示组件\"></a>定义错误提示组件\n</h3><p>错误提示针对组件加载/运行期间的错误友好提示，统一进行处理，创建 <code>error.jsx</code></p><pre class=\"language-jsx\"><code class=\"language-jsx\"><span class=\"token keyword\">import</span> React <span class=\"token keyword\">from</span> <span class=\"token string\">'react'</span>\n<span class=\"token keyword\">import</span> <span class=\"token punctuation\">{</span> Alert <span class=\"token punctuation\">}</span> <span class=\"token keyword\">from</span> <span class=\"token string\">'antd'</span>\n\n<span class=\"token keyword\">export</span> <span class=\"token keyword\">default</span> <span class=\"token keyword\">function</span> <span class=\"token function\">Error</span><span class=\"token punctuation\">(</span><span class=\"token parameter\"><span class=\"token punctuation\">{</span> message<span class=\"token punctuation\">,</span> type <span class=\"token punctuation\">}</span></span><span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n  <span class=\"token keyword\">return</span> <span class=\"token punctuation\">(</span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span><span class=\"token class-name\">Alert</span></span>\n      <span class=\"token attr-name\">message</span><span class=\"token attr-value\"><span class=\"token punctuation attr-equals\">=</span><span class=\"token punctuation\">\"</span>Error<span class=\"token punctuation\">\"</span></span>\n      <span class=\"token attr-name\">description</span><span class=\"token script language-javascript\"><span class=\"token script-punctuation punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token template-string\"><span class=\"token template-punctuation string\">`</span><span class=\"token string\">[</span><span class=\"token interpolation\"><span class=\"token interpolation-punctuation punctuation\">${</span>type<span class=\"token interpolation-punctuation punctuation\">}</span></span><span class=\"token string\">]:</span><span class=\"token interpolation\"><span class=\"token interpolation-punctuation punctuation\">${</span>message <span class=\"token operator\">||</span> <span class=\"token string\">'组件错误'</span><span class=\"token interpolation-punctuation punctuation\">}</span></span><span class=\"token template-punctuation string\">`</span></span><span class=\"token punctuation\">}</span></span>\n      <span class=\"token attr-name\">type</span><span class=\"token attr-value\"><span class=\"token punctuation attr-equals\">=</span><span class=\"token punctuation\">\"</span>error<span class=\"token punctuation\">\"</span></span>\n      <span class=\"token attr-name\">style</span><span class=\"token script language-javascript\"><span class=\"token script-punctuation punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token punctuation\">{</span> marginTop<span class=\"token operator\">:</span> <span class=\"token number\">30</span> <span class=\"token punctuation\">}</span><span class=\"token punctuation\">}</span></span>\n    <span class=\"token punctuation\">/></span></span>\n  <span class=\"token punctuation\">)</span>\n<span class=\"token punctuation\">}</span></code></pre><h3>\n  <a href=\"#定义加载提示组件\" id=\"定义加载提示组件\"></a>定义加载提示组件\n</h3><p>创建 <code>loader.jsx</code>，用于统一的展示组件加载提示</p><pre class=\"language-jsx\"><code class=\"language-jsx\"><span class=\"token keyword\">import</span> React <span class=\"token keyword\">from</span> <span class=\"token string\">'react'</span>\n<span class=\"token keyword\">import</span> <span class=\"token punctuation\">{</span> Spin <span class=\"token punctuation\">}</span> <span class=\"token keyword\">from</span> <span class=\"token string\">'antd'</span>\n\n<span class=\"token keyword\">export</span> <span class=\"token keyword\">default</span> <span class=\"token keyword\">function</span> <span class=\"token function\">Loader</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n  <span class=\"token keyword\">return</span> <span class=\"token punctuation\">(</span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span><span class=\"token class-name\">Spin</span></span> <span class=\"token punctuation\">/></span></span>\n  <span class=\"token punctuation\">)</span>\n<span class=\"token punctuation\">}</span></code></pre><h3>\n  <a href=\"#创建组件容器\" id=\"创建组件容器\"></a>创建组件容器\n</h3><p>容器定义页面路由，及页面布局。理论上可以根据配置定义页面各种各样的样式。这里创建最简单的页面结构，接入的组件只需要按顺序排布即可。另外也创建路由相关，创建 <code>container.jsx</code></p><pre class=\"language-jsx\"><code class=\"language-jsx\"><span class=\"token keyword\">import</span> React<span class=\"token punctuation\">,</span> <span class=\"token punctuation\">{</span> Component <span class=\"token punctuation\">}</span> <span class=\"token keyword\">from</span> <span class=\"token string\">'react'</span>\n<span class=\"token keyword\">import</span> <span class=\"token punctuation\">{</span> Router<span class=\"token punctuation\">,</span> Route <span class=\"token punctuation\">}</span> <span class=\"token keyword\">from</span> <span class=\"token string\">'@variousjs/various'</span>\n<span class=\"token keyword\">import</span> <span class=\"token punctuation\">{</span> Radio<span class=\"token punctuation\">,</span> Badge<span class=\"token punctuation\">,</span> Button <span class=\"token punctuation\">}</span> <span class=\"token keyword\">from</span> <span class=\"token string\">'antd'</span>\n<span class=\"token keyword\">import</span> csses <span class=\"token keyword\">from</span> <span class=\"token string\">'./entry.module.less'</span>\n\n<span class=\"token keyword\">export</span> <span class=\"token keyword\">default</span> <span class=\"token keyword\">class</span> <span class=\"token class-name\">C</span> <span class=\"token keyword\">extends</span> <span class=\"token class-name\">Component</span> <span class=\"token punctuation\">{</span>\n  state <span class=\"token operator\">=</span> <span class=\"token punctuation\">{</span>\n    path<span class=\"token operator\">:</span> <span class=\"token string\">'/'</span>\n  <span class=\"token punctuation\">}</span>\n\n  <span class=\"token function-variable function\">onRouterChange</span> <span class=\"token operator\">=</span> <span class=\"token punctuation\">(</span><span class=\"token parameter\">e</span><span class=\"token punctuation\">)</span> <span class=\"token operator\">=></span> <span class=\"token punctuation\">{</span>\n    <span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>props<span class=\"token punctuation\">.</span>$router<span class=\"token punctuation\">.</span>history<span class=\"token punctuation\">.</span><span class=\"token function\">push</span><span class=\"token punctuation\">(</span>e<span class=\"token punctuation\">.</span>target<span class=\"token punctuation\">.</span>value<span class=\"token punctuation\">)</span>\n    <span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span><span class=\"token function\">setState</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">{</span> path<span class=\"token operator\">:</span> e<span class=\"token punctuation\">.</span>target<span class=\"token punctuation\">.</span>value <span class=\"token punctuation\">}</span><span class=\"token punctuation\">)</span>\n  <span class=\"token punctuation\">}</span>\n\n  <span class=\"token function\">componentDidMount</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n    <span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span><span class=\"token function\">setState</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">{</span> path<span class=\"token operator\">:</span> <span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>props<span class=\"token punctuation\">.</span>$router<span class=\"token punctuation\">.</span>location<span class=\"token punctuation\">.</span>pathname <span class=\"token punctuation\">}</span><span class=\"token punctuation\">)</span>\n  <span class=\"token punctuation\">}</span>\n\n  <span class=\"token function\">render</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n    <span class=\"token keyword\">const</span> <span class=\"token punctuation\">{</span> $component<span class=\"token punctuation\">,</span> $config<span class=\"token punctuation\">,</span> $store <span class=\"token punctuation\">}</span> <span class=\"token operator\">=</span> <span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>props\n\n    <span class=\"token comment\">// 假设有以下配置</span>\n    <span class=\"token comment\">// {</span>\n    <span class=\"token comment\">//   ...</span>\n    <span class=\"token comment\">//   pages: [</span>\n    <span class=\"token comment\">//     {</span>\n    <span class=\"token comment\">//       path: '/',</span>\n    <span class=\"token comment\">//       components: ['a'],</span>\n    <span class=\"token comment\">//     },</span>\n    <span class=\"token comment\">//     ...</span>\n    <span class=\"token comment\">//   ],</span>\n    <span class=\"token comment\">//   links: [</span>\n    <span class=\"token comment\">//     {</span>\n    <span class=\"token comment\">//       name: 'Home',</span>\n    <span class=\"token comment\">//       path: '/',</span>\n    <span class=\"token comment\">//     },</span>\n    <span class=\"token comment\">//     ...</span>\n    <span class=\"token comment\">//   ],</span>\n    <span class=\"token comment\">// }</span>\n\n    <span class=\"token keyword\">return</span> <span class=\"token punctuation\">(</span>\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>div</span> <span class=\"token attr-name\">className</span><span class=\"token script language-javascript\"><span class=\"token script-punctuation punctuation\">=</span><span class=\"token punctuation\">{</span>csses<span class=\"token punctuation\">.</span>container<span class=\"token punctuation\">}</span></span><span class=\"token punctuation\">></span></span><span class=\"token plain-text\">\n        </span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>div</span> <span class=\"token attr-name\">className</span><span class=\"token script language-javascript\"><span class=\"token script-punctuation punctuation\">=</span><span class=\"token punctuation\">{</span>csses<span class=\"token punctuation\">.</span>top<span class=\"token punctuation\">}</span></span><span class=\"token punctuation\">></span></span><span class=\"token plain-text\">\n          </span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span><span class=\"token class-name\">Radio.Group</span></span>\n            <span class=\"token attr-name\">size</span><span class=\"token attr-value\"><span class=\"token punctuation attr-equals\">=</span><span class=\"token punctuation\">\"</span>large<span class=\"token punctuation\">\"</span></span>\n            <span class=\"token attr-name\">value</span><span class=\"token script language-javascript\"><span class=\"token script-punctuation punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>state<span class=\"token punctuation\">.</span>path<span class=\"token punctuation\">}</span></span>\n            <span class=\"token attr-name\">onChange</span><span class=\"token script language-javascript\"><span class=\"token script-punctuation punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>onRouterChange<span class=\"token punctuation\">}</span></span>\n            <span class=\"token attr-name\">buttonStyle</span><span class=\"token attr-value\"><span class=\"token punctuation attr-equals\">=</span><span class=\"token punctuation\">\"</span>solid<span class=\"token punctuation\">\"</span></span>\n          <span class=\"token punctuation\">></span></span><span class=\"token plain-text\">\n            </span><span class=\"token punctuation\">{</span>\n              $config<span class=\"token punctuation\">.</span>links<span class=\"token punctuation\">.</span><span class=\"token function\">map</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">(</span><span class=\"token parameter\"><span class=\"token punctuation\">{</span> path<span class=\"token punctuation\">,</span> name <span class=\"token punctuation\">}</span></span><span class=\"token punctuation\">)</span> <span class=\"token operator\">=></span> <span class=\"token punctuation\">(</span>\n                <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span><span class=\"token class-name\">Radio.Button</span></span> <span class=\"token attr-name\">key</span><span class=\"token script language-javascript\"><span class=\"token script-punctuation punctuation\">=</span><span class=\"token punctuation\">{</span>path<span class=\"token punctuation\">}</span></span> <span class=\"token attr-name\">value</span><span class=\"token script language-javascript\"><span class=\"token script-punctuation punctuation\">=</span><span class=\"token punctuation\">{</span>path<span class=\"token punctuation\">}</span></span><span class=\"token punctuation\">></span></span><span class=\"token plain-text\">\n                  </span><span class=\"token punctuation\">{</span>name<span class=\"token punctuation\">}</span><span class=\"token plain-text\">\n                </span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span><span class=\"token class-name\">Radio.Button</span></span><span class=\"token punctuation\">></span></span>\n              <span class=\"token punctuation\">)</span><span class=\"token punctuation\">)</span>\n            <span class=\"token punctuation\">}</span><span class=\"token plain-text\">\n          </span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span><span class=\"token class-name\">Radio.Group</span></span><span class=\"token punctuation\">></span></span><span class=\"token plain-text\">\n\n          </span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>div</span><span class=\"token punctuation\">></span></span><span class=\"token plain-text\">\n            Store:\n            </span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span><span class=\"token class-name\">Badge</span></span>\n              <span class=\"token attr-name\">style</span><span class=\"token script language-javascript\"><span class=\"token script-punctuation punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token punctuation\">{</span> marginLeft<span class=\"token operator\">:</span> <span class=\"token number\">10</span> <span class=\"token punctuation\">}</span><span class=\"token punctuation\">}</span></span>\n              <span class=\"token attr-name\">count</span><span class=\"token script language-javascript\"><span class=\"token script-punctuation punctuation\">=</span><span class=\"token punctuation\">{</span>$store<span class=\"token punctuation\">.</span>user<span class=\"token punctuation\">.</span>name<span class=\"token punctuation\">}</span></span>\n            <span class=\"token punctuation\">/></span></span><span class=\"token plain-text\">\n            </span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span><span class=\"token class-name\">Button</span></span>\n              <span class=\"token attr-name\">style</span><span class=\"token script language-javascript\"><span class=\"token script-punctuation punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token punctuation\">{</span> marginLeft<span class=\"token operator\">:</span> <span class=\"token number\">10</span> <span class=\"token punctuation\">}</span><span class=\"token punctuation\">}</span></span>\n              <span class=\"token attr-name\">onClick</span><span class=\"token script language-javascript\"><span class=\"token script-punctuation punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> <span class=\"token operator\">=></span> <span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>props<span class=\"token punctuation\">.</span><span class=\"token function\">$dispatch</span><span class=\"token punctuation\">(</span><span class=\"token string\">'a'</span><span class=\"token punctuation\">,</span> <span class=\"token string\">'getName'</span><span class=\"token punctuation\">,</span> <span class=\"token string\">'A'</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">}</span></span>\n            <span class=\"token punctuation\">></span></span><span class=\"token plain-text\">\n              Click A\n            </span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span><span class=\"token class-name\">Button</span></span><span class=\"token punctuation\">></span></span><span class=\"token plain-text\">\n          </span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>div</span><span class=\"token punctuation\">></span></span><span class=\"token plain-text\">\n        </span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>div</span><span class=\"token punctuation\">></span></span><span class=\"token plain-text\">\n\n        </span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span><span class=\"token class-name\">Router</span></span><span class=\"token punctuation\">></span></span><span class=\"token plain-text\">\n          </span><span class=\"token punctuation\">{</span>\n            $config<span class=\"token punctuation\">.</span>pages<span class=\"token punctuation\">.</span><span class=\"token function\">map</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">(</span><span class=\"token parameter\"><span class=\"token punctuation\">{</span> path<span class=\"token punctuation\">,</span> components <span class=\"token punctuation\">}</span></span><span class=\"token punctuation\">)</span> <span class=\"token operator\">=></span> <span class=\"token punctuation\">{</span>\n              <span class=\"token keyword\">const</span> <span class=\"token function-variable function\">cs</span> <span class=\"token operator\">=</span> <span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> <span class=\"token operator\">=></span> components<span class=\"token punctuation\">.</span><span class=\"token function\">map</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">(</span><span class=\"token parameter\">name</span><span class=\"token punctuation\">)</span> <span class=\"token operator\">=></span> <span class=\"token punctuation\">{</span>\n                <span class=\"token keyword\">const</span> <span class=\"token constant\">C</span> <span class=\"token operator\">=</span> <span class=\"token function\">$component</span><span class=\"token punctuation\">(</span>name<span class=\"token punctuation\">)</span>\n                <span class=\"token keyword\">return</span> <span class=\"token punctuation\">(</span>\n                  <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>div</span>\n                    <span class=\"token attr-name\">key</span><span class=\"token script language-javascript\"><span class=\"token script-punctuation punctuation\">=</span><span class=\"token punctuation\">{</span>name<span class=\"token punctuation\">}</span></span>\n                    <span class=\"token attr-name\">style</span><span class=\"token script language-javascript\"><span class=\"token script-punctuation punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token punctuation\">{</span> display<span class=\"token operator\">:</span> <span class=\"token string\">'inline-block'</span><span class=\"token punctuation\">,</span> width<span class=\"token operator\">:</span> <span class=\"token number\">300</span><span class=\"token punctuation\">,</span> verticalAlign<span class=\"token operator\">:</span> <span class=\"token string\">'top'</span> <span class=\"token punctuation\">}</span><span class=\"token punctuation\">}</span></span>\n                  <span class=\"token punctuation\">></span></span><span class=\"token plain-text\">\n                    </span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span><span class=\"token class-name\">C</span></span> <span class=\"token punctuation\">/></span></span><span class=\"token plain-text\">\n                  </span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>div</span><span class=\"token punctuation\">></span></span>\n                <span class=\"token punctuation\">)</span>\n              <span class=\"token punctuation\">}</span><span class=\"token punctuation\">)</span>\n\n              <span class=\"token keyword\">return</span> <span class=\"token punctuation\">(</span>\n                <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span><span class=\"token class-name\">Route</span></span>\n                  <span class=\"token attr-name\">key</span><span class=\"token script language-javascript\"><span class=\"token script-punctuation punctuation\">=</span><span class=\"token punctuation\">{</span>path<span class=\"token punctuation\">}</span></span>\n                  <span class=\"token attr-name\">exact</span>\n                  <span class=\"token attr-name\">path</span><span class=\"token script language-javascript\"><span class=\"token script-punctuation punctuation\">=</span><span class=\"token punctuation\">{</span>path<span class=\"token punctuation\">}</span></span>\n                  <span class=\"token attr-name\">component</span><span class=\"token script language-javascript\"><span class=\"token script-punctuation punctuation\">=</span><span class=\"token punctuation\">{</span>cs<span class=\"token punctuation\">}</span></span>\n                <span class=\"token punctuation\">/></span></span>\n              <span class=\"token punctuation\">)</span>\n            <span class=\"token punctuation\">}</span><span class=\"token punctuation\">)</span>\n          <span class=\"token punctuation\">}</span><span class=\"token plain-text\">\n        </span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span><span class=\"token class-name\">Router</span></span><span class=\"token punctuation\">></span></span><span class=\"token plain-text\">\n      </span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>div</span><span class=\"token punctuation\">></span></span>\n    <span class=\"token punctuation\">)</span>\n  <span class=\"token punctuation\">}</span>\n<span class=\"token punctuation\">}</span></code></pre><p>创建样式文件 <code>entry.module.less</code></p><pre class=\"language-css\"><code class=\"language-css\"><span class=\"token selector\">.container</span> <span class=\"token punctuation\">{</span>\n  <span class=\"token property\">background</span><span class=\"token punctuation\">:</span> #fff<span class=\"token punctuation\">;</span>\n  <span class=\"token property\">padding</span><span class=\"token punctuation\">:</span> 50px<span class=\"token punctuation\">;</span>\n<span class=\"token punctuation\">}</span>\n<span class=\"token selector\">.top</span> <span class=\"token punctuation\">{</span>\n  <span class=\"token property\">display</span><span class=\"token punctuation\">:</span> flex<span class=\"token punctuation\">;</span>\n  <span class=\"token property\">align-items</span><span class=\"token punctuation\">:</span> center<span class=\"token punctuation\">;</span>\n  <span class=\"token property\">justify-content</span><span class=\"token punctuation\">:</span> space-between<span class=\"token punctuation\">;</span>\n<span class=\"token punctuation\">}</span></code></pre><h3>\n  <a href=\"#构建主组件\" id=\"构建主组件\"></a>构建主组件\n</h3><p>创建好以上文件，接下来创建主应用入口 <code>entry.js</code></p><pre class=\"language-js\"><code class=\"language-js\"><span class=\"token keyword\">export</span> <span class=\"token punctuation\">{</span> <span class=\"token keyword\">default</span> <span class=\"token keyword\">as</span> actions <span class=\"token punctuation\">}</span> <span class=\"token keyword\">from</span> <span class=\"token string\">'./actions'</span>\n<span class=\"token keyword\">export</span> <span class=\"token punctuation\">{</span> <span class=\"token keyword\">default</span> <span class=\"token keyword\">as</span> store <span class=\"token punctuation\">}</span> <span class=\"token keyword\">from</span> <span class=\"token string\">'./store'</span>\n<span class=\"token keyword\">export</span> <span class=\"token punctuation\">{</span> <span class=\"token keyword\">default</span> <span class=\"token keyword\">as</span> Container <span class=\"token punctuation\">}</span> <span class=\"token keyword\">from</span> <span class=\"token string\">'./container'</span>\n<span class=\"token keyword\">export</span> <span class=\"token punctuation\">{</span> <span class=\"token keyword\">default</span> <span class=\"token keyword\">as</span> Loader <span class=\"token punctuation\">}</span> <span class=\"token keyword\">from</span> <span class=\"token string\">'./loader'</span>\n<span class=\"token keyword\">export</span> <span class=\"token punctuation\">{</span> <span class=\"token keyword\">default</span> <span class=\"token keyword\">as</span> Error <span class=\"token punctuation\">}</span> <span class=\"token keyword\">from</span> <span class=\"token string\">'./error'</span></code></pre><p>接下来修改 <code>falco.config.js</code> 的 <code>entry</code> 配置，就可以构建主主组件了。会生成 <code>dist/entry.js</code></p><pre class=\"language-js\"><code class=\"language-js\"><span class=\"token punctuation\">{</span>\n  <span class=\"token comment\">// ...</span>\n  entry<span class=\"token operator\">:</span> <span class=\"token punctuation\">{</span>\n    entry<span class=\"token operator\">:</span> path<span class=\"token punctuation\">.</span><span class=\"token function\">resolve</span><span class=\"token punctuation\">(</span>__dirname<span class=\"token punctuation\">,</span> <span class=\"token string\">'./entry.js'</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">,</span>\n  <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n  <span class=\"token comment\">// ...</span>\n<span class=\"token punctuation\">}</span></code></pre><h2>\n  <a href=\"#创建功能组件\" id=\"创建功能组件\"></a>创建功能组件\n</h2><p>功能组件负责某一部分功能，应该尽量的独立。这里创建两个功能组件 <code>a.js</code>，<code>b.js</code>。并且两个组件都非常简单</p><h3>\n  <a href=\"#A 组件\" id=\"A 组件\"></a>A 组件\n</h3><p>A 组件提供方法给其他组件调用，进行通信</p><pre class=\"language-jsx\"><code class=\"language-jsx\"><span class=\"token keyword\">import</span> React <span class=\"token keyword\">from</span> <span class=\"token string\">'react'</span>\n<span class=\"token keyword\">import</span> <span class=\"token punctuation\">{</span> Card<span class=\"token punctuation\">,</span> Button<span class=\"token punctuation\">,</span> message <span class=\"token punctuation\">}</span> <span class=\"token keyword\">from</span> <span class=\"token string\">'antd'</span>\n\n<span class=\"token keyword\">const</span> <span class=\"token function-variable function\">A</span> <span class=\"token operator\">=</span> <span class=\"token punctuation\">(</span><span class=\"token parameter\">props</span><span class=\"token punctuation\">)</span> <span class=\"token operator\">=></span> <span class=\"token punctuation\">{</span>\n  <span class=\"token keyword\">const</span> id <span class=\"token operator\">=</span> props<span class=\"token punctuation\">.</span>$router<span class=\"token operator\">?.</span>match<span class=\"token punctuation\">.</span>params<span class=\"token punctuation\">.</span>id\n\n  <span class=\"token keyword\">return</span> <span class=\"token punctuation\">(</span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>div</span> <span class=\"token attr-name\">className</span><span class=\"token attr-value\"><span class=\"token punctuation attr-equals\">=</span><span class=\"token punctuation\">\"</span>container<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span><span class=\"token plain-text\">\n      &lt;Card\n        hoverable\n        style=</span><span class=\"token punctuation\">{</span><span class=\"token punctuation\">{</span> width<span class=\"token operator\">:</span> <span class=\"token number\">240</span> <span class=\"token punctuation\">}</span><span class=\"token punctuation\">}</span><span class=\"token plain-text\">\n        cover=</span><span class=\"token punctuation\">{</span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>img</span> <span class=\"token attr-name\">alt</span><span class=\"token attr-value\"><span class=\"token punctuation attr-equals\">=</span><span class=\"token punctuation\">\"</span>example<span class=\"token punctuation\">\"</span></span> <span class=\"token attr-name\">src</span><span class=\"token attr-value\"><span class=\"token punctuation attr-equals\">=</span><span class=\"token punctuation\">\"</span>https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png<span class=\"token punctuation\">\"</span></span> <span class=\"token punctuation\">/></span></span><span class=\"token punctuation\">}</span><span class=\"token plain-text\">\n        actions=</span><span class=\"token punctuation\">{</span><span class=\"token punctuation\">[</span>\n          <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span><span class=\"token class-name\">Button</span></span>\n            <span class=\"token attr-name\">key</span><span class=\"token attr-value\"><span class=\"token punctuation attr-equals\">=</span><span class=\"token punctuation\">\"</span>next<span class=\"token punctuation\">\"</span></span>\n            <span class=\"token attr-name\">onClick</span><span class=\"token script language-javascript\"><span class=\"token script-punctuation punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> <span class=\"token operator\">=></span> props<span class=\"token punctuation\">.</span><span class=\"token function\">$dispatch</span><span class=\"token punctuation\">(</span><span class=\"token string\">'b'</span><span class=\"token punctuation\">,</span> <span class=\"token string\">'setValue'</span><span class=\"token punctuation\">,</span> <span class=\"token number\">1</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">}</span></span>\n          <span class=\"token punctuation\">></span></span><span class=\"token plain-text\">\n            B\n          </span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span><span class=\"token class-name\">Button</span></span><span class=\"token punctuation\">></span></span><span class=\"token punctuation\">,</span>\n          <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span><span class=\"token class-name\">Button</span></span>\n            <span class=\"token attr-name\">key</span><span class=\"token attr-value\"><span class=\"token punctuation attr-equals\">=</span><span class=\"token punctuation\">\"</span>store<span class=\"token punctuation\">\"</span></span>\n            <span class=\"token attr-name\">type</span><span class=\"token attr-value\"><span class=\"token punctuation attr-equals\">=</span><span class=\"token punctuation\">\"</span>primary<span class=\"token punctuation\">\"</span></span>\n            <span class=\"token attr-name\">onClick</span><span class=\"token script language-javascript\"><span class=\"token script-punctuation punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token keyword\">async</span> <span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> <span class=\"token operator\">=></span> <span class=\"token punctuation\">{</span>\n              <span class=\"token keyword\">await</span> props<span class=\"token punctuation\">.</span><span class=\"token function\">$dispatch</span><span class=\"token punctuation\">(</span><span class=\"token string\">'store'</span><span class=\"token punctuation\">,</span> <span class=\"token string\">'setName'</span><span class=\"token punctuation\">,</span> <span class=\"token template-string\"><span class=\"token template-punctuation string\">`</span><span class=\"token interpolation\"><span class=\"token interpolation-punctuation punctuation\">${</span>Math<span class=\"token punctuation\">.</span><span class=\"token function\">random</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">.</span><span class=\"token function\">toFixed</span><span class=\"token punctuation\">(</span><span class=\"token number\">2</span><span class=\"token punctuation\">)</span><span class=\"token interpolation-punctuation punctuation\">}</span></span><span class=\"token template-punctuation string\">`</span></span><span class=\"token punctuation\">)</span>\n              message<span class=\"token punctuation\">.</span><span class=\"token function\">info</span><span class=\"token punctuation\">(</span><span class=\"token string\">'changed'</span><span class=\"token punctuation\">)</span>\n            <span class=\"token punctuation\">}</span><span class=\"token punctuation\">}</span></span>\n          <span class=\"token punctuation\">></span></span><span class=\"token plain-text\">\n            Store\n          </span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span><span class=\"token class-name\">Button</span></span><span class=\"token punctuation\">></span></span>\n        <span class=\"token punctuation\">]</span><span class=\"token punctuation\">}</span><span class=\"token plain-text\">\n      >\n        </span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span><span class=\"token class-name\">Card.Meta</span></span>\n          <span class=\"token attr-name\">title</span><span class=\"token attr-value\"><span class=\"token punctuation attr-equals\">=</span><span class=\"token punctuation\">\"</span>Route Params<span class=\"token punctuation\">\"</span></span>\n          <span class=\"token attr-name\">description</span><span class=\"token script language-javascript\"><span class=\"token script-punctuation punctuation\">=</span><span class=\"token punctuation\">{</span>id<span class=\"token punctuation\">}</span></span>\n        <span class=\"token punctuation\">/></span></span><span class=\"token plain-text\">\n      </span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span><span class=\"token class-name\">Card</span></span><span class=\"token punctuation\">></span></span><span class=\"token plain-text\">\n    </span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>div</span><span class=\"token punctuation\">></span></span>\n  <span class=\"token punctuation\">)</span>\n<span class=\"token punctuation\">}</span>\n\n<span class=\"token comment\">// 提供 getName 方法</span>\n<span class=\"token constant\">A</span><span class=\"token punctuation\">.</span><span class=\"token function-variable function\">getName</span> <span class=\"token operator\">=</span> <span class=\"token punctuation\">(</span><span class=\"token parameter\">e</span><span class=\"token punctuation\">)</span> <span class=\"token operator\">=></span> message<span class=\"token punctuation\">.</span><span class=\"token function\">info</span><span class=\"token punctuation\">(</span>e<span class=\"token punctuation\">)</span>\n\n<span class=\"token keyword\">export</span> <span class=\"token keyword\">default</span> <span class=\"token constant\">A</span></code></pre><p>接下来修改 <code>falco.config.js</code> 的 <code>entry</code> 配置，即可打包 A 组件，生成 <code>dist/a.js</code></p><pre class=\"language-js\"><code class=\"language-js\"><span class=\"token punctuation\">{</span>\n  <span class=\"token comment\">// ...</span>\n  entry<span class=\"token operator\">:</span> <span class=\"token punctuation\">{</span>\n    a<span class=\"token operator\">:</span> path<span class=\"token punctuation\">.</span><span class=\"token function\">resolve</span><span class=\"token punctuation\">(</span>__dirname<span class=\"token punctuation\">,</span> <span class=\"token string\">'./a.js'</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">,</span>\n  <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n  <span class=\"token comment\">// ...</span>\n<span class=\"token punctuation\">}</span></code></pre><h3>\n  <a href=\"#B 组件\" id=\"B 组件\"></a>B 组件\n</h3><p>B 组件提供方法给其他组件调用改变自身状态，其中 Store 使用可以参考 <a href=\"https://github.com/fratercula/nycticorax\">nycticorax</a></p><pre class=\"language-jsx\"><code class=\"language-jsx\"><span class=\"token keyword\">import</span> React<span class=\"token punctuation\">,</span> <span class=\"token punctuation\">{</span> Component <span class=\"token punctuation\">}</span> <span class=\"token keyword\">from</span> <span class=\"token string\">'react'</span>\n<span class=\"token keyword\">import</span> <span class=\"token punctuation\">{</span> Store <span class=\"token punctuation\">}</span> <span class=\"token keyword\">from</span> <span class=\"token string\">'@variousjs/various'</span>\n<span class=\"token keyword\">import</span> <span class=\"token punctuation\">{</span> Descriptions <span class=\"token punctuation\">}</span> <span class=\"token keyword\">from</span> <span class=\"token string\">'antd'</span>\n\n<span class=\"token keyword\">const</span> <span class=\"token punctuation\">{</span>\n  createStore<span class=\"token punctuation\">,</span>\n  connect<span class=\"token punctuation\">,</span>\n  dispatch<span class=\"token punctuation\">,</span>\n  getStore<span class=\"token punctuation\">,</span>\n<span class=\"token punctuation\">}</span> <span class=\"token operator\">=</span> <span class=\"token keyword\">new</span> <span class=\"token class-name\">Store</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span>\n\n<span class=\"token function\">createStore</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">{</span> value<span class=\"token operator\">:</span> <span class=\"token number\">0</span> <span class=\"token punctuation\">}</span><span class=\"token punctuation\">)</span>\n\n<span class=\"token keyword\">class</span> <span class=\"token class-name\">X</span> <span class=\"token keyword\">extends</span> <span class=\"token class-name\">Component</span> <span class=\"token punctuation\">{</span>\n  <span class=\"token comment\">// 提供 setValue 方法</span>\n  <span class=\"token keyword\">static</span> <span class=\"token function-variable function\">setValue</span> <span class=\"token operator\">=</span> <span class=\"token keyword\">async</span> <span class=\"token punctuation\">(</span><span class=\"token parameter\">value</span><span class=\"token punctuation\">)</span> <span class=\"token operator\">=></span> <span class=\"token punctuation\">{</span>\n    <span class=\"token keyword\">const</span> store <span class=\"token operator\">=</span> <span class=\"token function\">getStore</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span>\n    <span class=\"token function\">dispatch</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">{</span> value<span class=\"token operator\">:</span> value <span class=\"token operator\">+</span> store<span class=\"token punctuation\">.</span>value <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span> <span class=\"token boolean\">true</span><span class=\"token punctuation\">)</span>\n  <span class=\"token punctuation\">}</span>\n\n  <span class=\"token function\">render</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n    <span class=\"token keyword\">const</span> <span class=\"token punctuation\">{</span> user <span class=\"token punctuation\">}</span> <span class=\"token operator\">=</span> <span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>props<span class=\"token punctuation\">.</span>$store\n    <span class=\"token keyword\">const</span> <span class=\"token punctuation\">{</span> value <span class=\"token punctuation\">}</span> <span class=\"token operator\">=</span> <span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>props\n\n    <span class=\"token keyword\">return</span> <span class=\"token punctuation\">(</span>\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span><span class=\"token class-name\">Descriptions</span></span>\n        <span class=\"token attr-name\">style</span><span class=\"token script language-javascript\"><span class=\"token script-punctuation punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token punctuation\">{</span> marginTop<span class=\"token operator\">:</span> <span class=\"token number\">30</span> <span class=\"token punctuation\">}</span><span class=\"token punctuation\">}</span></span>\n        <span class=\"token attr-name\">bordered</span>\n        <span class=\"token attr-name\">title</span><span class=\"token attr-value\"><span class=\"token punctuation attr-equals\">=</span><span class=\"token punctuation\">\"</span>B<span class=\"token punctuation\">\"</span></span>\n        <span class=\"token attr-name\">size</span><span class=\"token attr-value\"><span class=\"token punctuation attr-equals\">=</span><span class=\"token punctuation\">\"</span>small<span class=\"token punctuation\">\"</span></span>\n      <span class=\"token punctuation\">></span></span><span class=\"token plain-text\">\n        </span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span><span class=\"token class-name\">Descriptions.Item</span></span> <span class=\"token attr-name\">label</span><span class=\"token attr-value\"><span class=\"token punctuation attr-equals\">=</span><span class=\"token punctuation\">\"</span>Store<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span><span class=\"token punctuation\">{</span>user<span class=\"token punctuation\">.</span>name<span class=\"token punctuation\">}</span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span><span class=\"token class-name\">Descriptions.Item</span></span><span class=\"token punctuation\">></span></span><span class=\"token plain-text\">\n        </span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span><span class=\"token class-name\">Descriptions.Item</span></span> <span class=\"token attr-name\">label</span><span class=\"token attr-value\"><span class=\"token punctuation attr-equals\">=</span><span class=\"token punctuation\">\"</span>Value<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span><span class=\"token punctuation\">{</span>value<span class=\"token punctuation\">}</span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span><span class=\"token class-name\">Descriptions.Item</span></span><span class=\"token punctuation\">></span></span><span class=\"token plain-text\">\n      </span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span><span class=\"token class-name\">Descriptions</span></span><span class=\"token punctuation\">></span></span>\n    <span class=\"token punctuation\">)</span>\n  <span class=\"token punctuation\">}</span>\n<span class=\"token punctuation\">}</span>\n\n<span class=\"token keyword\">export</span> <span class=\"token keyword\">default</span> <span class=\"token function\">connect</span><span class=\"token punctuation\">(</span><span class=\"token string\">'value'</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">(</span><span class=\"token constant\">X</span><span class=\"token punctuation\">)</span></code></pre><p>接下来修改 <code>falco.config.js</code> 的 <code>entry</code> 配置，即可打包 B 组件，生成 <code>dist/b.js</code></p><pre class=\"language-js\"><code class=\"language-js\"><span class=\"token punctuation\">{</span>\n  <span class=\"token comment\">// ...</span>\n  entry<span class=\"token operator\">:</span> <span class=\"token punctuation\">{</span>\n    b<span class=\"token operator\">:</span> path<span class=\"token punctuation\">.</span><span class=\"token function\">resolve</span><span class=\"token punctuation\">(</span>__dirname<span class=\"token punctuation\">,</span> <span class=\"token string\">'./b.js'</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">,</span>\n  <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n  <span class=\"token comment\">// ...</span>\n<span class=\"token punctuation\">}</span></code></pre><h2>\n  <a href=\"#创建应用页面\" id=\"创建应用页面\"></a>创建应用页面\n</h2><p>准备了主应用及功能组件，这时候可以配置页面了，在 dist 目录同级创建 <code>index.html</code></p><pre class=\"language-html\"><code class=\"language-html\"><span class=\"token doctype\"><span class=\"token punctuation\">&lt;!</span><span class=\"token doctype-tag\">doctype</span> <span class=\"token name\">html</span><span class=\"token punctuation\">></span></span>\n<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>html</span><span class=\"token punctuation\">></span></span>\n<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>head</span><span class=\"token punctuation\">></span></span>\n<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>meta</span> <span class=\"token attr-name\">charset</span><span class=\"token attr-value\"><span class=\"token punctuation attr-equals\">=</span><span class=\"token punctuation\">\"</span>UTF-8<span class=\"token punctuation\">\"</span></span> <span class=\"token punctuation\">/></span></span>\n<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>title</span><span class=\"token punctuation\">></span></span> VariousJS <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>title</span><span class=\"token punctuation\">></span></span>\n<span class=\"token comment\">&lt;!-- antd 样式 --></span>\n<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>link</span> <span class=\"token attr-name\">rel</span><span class=\"token attr-value\"><span class=\"token punctuation attr-equals\">=</span><span class=\"token punctuation\">\"</span>stylesheet<span class=\"token punctuation\">\"</span></span> <span class=\"token attr-name\">href</span><span class=\"token attr-value\"><span class=\"token punctuation attr-equals\">=</span><span class=\"token punctuation\">\"</span>https://cdn.jsdelivr.net/npm/antd@4.16.13/dist/antd.compact.min.css<span class=\"token punctuation\">\"</span></span> <span class=\"token punctuation\">/></span></span>\n<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>head</span><span class=\"token punctuation\">></span></span>\n<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>body</span><span class=\"token punctuation\">></span></span>\n<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>div</span> <span class=\"token attr-name\">id</span><span class=\"token attr-value\"><span class=\"token punctuation attr-equals\">=</span><span class=\"token punctuation\">\"</span>root<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>div</span><span class=\"token punctuation\">></span></span>\n<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>script</span> <span class=\"token attr-name\">src</span><span class=\"token attr-value\"><span class=\"token punctuation attr-equals\">=</span><span class=\"token punctuation\">\"</span>https://cdn.jsdelivr.net/npm/requirejs@2.3.6/require.js<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span><span class=\"token script\"></span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>script</span><span class=\"token punctuation\">></span></span>\n<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>script</span> <span class=\"token attr-name\">src</span><span class=\"token attr-value\"><span class=\"token punctuation attr-equals\">=</span><span class=\"token punctuation\">\"</span>https://cdn.jsdelivr.net/npm/@variousjs/various@0.3.0/dist/index.js<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span><span class=\"token script\"></span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>script</span><span class=\"token punctuation\">></span></span>\n<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>script</span><span class=\"token punctuation\">></span></span><span class=\"token script\"><span class=\"token language-javascript\">\n<span class=\"token keyword\">var</span> config <span class=\"token operator\">=</span> <span class=\"token punctuation\">{</span>\n  root<span class=\"token operator\">:</span> <span class=\"token string\">'#root'</span><span class=\"token punctuation\">,</span>\n  entry<span class=\"token operator\">:</span> <span class=\"token string\">'./dist/entry.js'</span><span class=\"token punctuation\">,</span>\n  routerMode<span class=\"token operator\">:</span> <span class=\"token string\">'hash'</span><span class=\"token punctuation\">,</span>\n  dependencies<span class=\"token operator\">:</span> <span class=\"token punctuation\">{</span>\n    <span class=\"token comment\">// 内置依赖，如果不定义会默认使用 unpkg cdn 链接</span>\n    react<span class=\"token operator\">:</span> <span class=\"token string\">'https://cdn.jsdelivr.net/npm/react@17.0.2/umd/react.production.min.js'</span><span class=\"token punctuation\">,</span>\n    <span class=\"token string\">'react-dom'</span><span class=\"token operator\">:</span> <span class=\"token string\">'https://cdn.jsdelivr.net/npm/react-dom@17.0.2/umd/react-dom.production.min.js'</span><span class=\"token punctuation\">,</span>\n\n    <span class=\"token comment\">// 依赖定义，antd 依赖 moment</span>\n    moment<span class=\"token operator\">:</span> <span class=\"token string\">'https://cdn.jsdelivr.net/npm/moment@2.29.1/min/moment.min.js'</span><span class=\"token punctuation\">,</span>\n    antd<span class=\"token operator\">:</span> <span class=\"token string\">'https://cdn.jsdelivr.net/npm/antd@4.16.13/dist/antd-with-locales.min.js'</span><span class=\"token punctuation\">,</span>\n  <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n  components<span class=\"token operator\">:</span> <span class=\"token punctuation\">{</span>\n    <span class=\"token comment\">// 组件定义</span>\n    a<span class=\"token operator\">:</span> <span class=\"token string\">'./dist/a.js'</span><span class=\"token punctuation\">,</span>\n    b<span class=\"token operator\">:</span> <span class=\"token string\">'./dist/b.js'</span><span class=\"token punctuation\">,</span>\n  <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n\n  <span class=\"token comment\">// 以下属于自定义属性</span>\n  pages<span class=\"token operator\">:</span> <span class=\"token punctuation\">[</span>\n    <span class=\"token punctuation\">{</span>\n      path<span class=\"token operator\">:</span> <span class=\"token punctuation\">[</span><span class=\"token string\">'/'</span><span class=\"token punctuation\">,</span> <span class=\"token string\">'/com/:id'</span><span class=\"token punctuation\">]</span><span class=\"token punctuation\">,</span>\n      components<span class=\"token operator\">:</span> <span class=\"token punctuation\">[</span><span class=\"token string\">'a'</span><span class=\"token punctuation\">,</span> <span class=\"token string\">'b'</span><span class=\"token punctuation\">]</span>\n    <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n    <span class=\"token punctuation\">{</span>\n      path<span class=\"token operator\">:</span> <span class=\"token string\">'/error'</span><span class=\"token punctuation\">,</span>\n      <span class=\"token comment\">// 定义不存在的组件，测试错误情况</span>\n      components<span class=\"token operator\">:</span> <span class=\"token punctuation\">[</span><span class=\"token string\">'error'</span><span class=\"token punctuation\">]</span><span class=\"token punctuation\">,</span>\n    <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n  <span class=\"token punctuation\">]</span><span class=\"token punctuation\">,</span>\n  links<span class=\"token operator\">:</span> <span class=\"token punctuation\">[</span>\n    <span class=\"token punctuation\">{</span>\n      name<span class=\"token operator\">:</span> <span class=\"token string\">'Router `/`'</span><span class=\"token punctuation\">,</span>\n      path<span class=\"token operator\">:</span> <span class=\"token string\">'/'</span><span class=\"token punctuation\">,</span>\n    <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n    <span class=\"token punctuation\">{</span>\n      name<span class=\"token operator\">:</span> <span class=\"token string\">'Router `/com/5`'</span><span class=\"token punctuation\">,</span>\n      path<span class=\"token operator\">:</span> <span class=\"token string\">'/com/5'</span><span class=\"token punctuation\">,</span>\n    <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n    <span class=\"token punctuation\">{</span>\n      name<span class=\"token operator\">:</span> <span class=\"token string\">'Router `error`'</span><span class=\"token punctuation\">,</span>\n      path<span class=\"token operator\">:</span> <span class=\"token string\">'/error'</span><span class=\"token punctuation\">,</span>\n    <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n  <span class=\"token punctuation\">]</span><span class=\"token punctuation\">,</span>\n<span class=\"token punctuation\">}</span>\n\n<span class=\"token keyword\">var</span> various <span class=\"token operator\">=</span> <span class=\"token keyword\">new</span> <span class=\"token class-name\">window<span class=\"token punctuation\">.</span>Various</span><span class=\"token punctuation\">(</span>config<span class=\"token punctuation\">)</span>\n\nvarious<span class=\"token punctuation\">.</span><span class=\"token function-variable function\">onError</span> <span class=\"token operator\">=</span> <span class=\"token keyword\">function</span><span class=\"token punctuation\">(</span><span class=\"token parameter\">e</span><span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n  console<span class=\"token punctuation\">.</span><span class=\"token function\">log</span><span class=\"token punctuation\">(</span>e<span class=\"token punctuation\">)</span>\n  document<span class=\"token punctuation\">.</span><span class=\"token function\">write</span><span class=\"token punctuation\">(</span>e<span class=\"token punctuation\">.</span>message<span class=\"token punctuation\">)</span>\n<span class=\"token punctuation\">}</span>\n\nvarious<span class=\"token punctuation\">.</span><span class=\"token function\">start</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span>\n</span></span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>script</span><span class=\"token punctuation\">></span></span>\n\n<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>body</span><span class=\"token punctuation\">></span></span>\n<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>html</span><span class=\"token punctuation\">></span></span></code></pre><h2>\n  <a href=\"#全部完成\" id=\"全部完成\"></a>全部完成\n</h2><p>接着创建 web 服务，访问 <code>index.html</code> 即可查看网站应用了。这里提供一个 <a href=\"/example\">demo</a>。另外可以源码可以在 <code>https://github.com/variousjs/website/tree/master/docs/example</code> 查看</p>";
// Exports
/* harmony default export */ __webpack_exports__["default"] = (code);

/***/ }),

/***/ "./src/helper/markdown.less":
/*!**********************************!*\
  !*** ./src/helper/markdown.less ***!
  \**********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_less_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_markdown_less__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!../../node_modules/less-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!./markdown.less */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/less-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!./src/helper/markdown.less");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_less_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_markdown_less__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ __webpack_exports__["default"] = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_less_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_markdown_less__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_less_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_markdown_less__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_less_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_markdown_less__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ (function(module) {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ (function(module) {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ (function(module) {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ (function(module) {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ (function(module) {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "react":
/*!***********************************************!*\
  !*** external {"root":"React","amd":"react"} ***!
  \***********************************************/
/***/ (function(module) {

module.exports = __WEBPACK_EXTERNAL_MODULE_react__;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	!function() {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = function(module) {
/******/ 			var getter = module && module.__esModule ?
/******/ 				function() { return module['default']; } :
/******/ 				function() { return module; };
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
!function() {
/*!*******************************************!*\
  !*** ./src/components/tutorial/index.tsx ***!
  \*******************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _helper_markdown__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../helper/markdown */ "./src/helper/markdown.tsx");
/* harmony import */ var _content_md__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./content.md */ "./src/components/tutorial/content.md");




var H = function H() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_helper_markdown__WEBPACK_IMPORTED_MODULE_1__["default"], null, _content_md__WEBPACK_IMPORTED_MODULE_2__["default"]);
};

/* harmony default export */ __webpack_exports__["default"] = (H);
}();
/******/ 	return __webpack_exports__;
/******/ })()
;
});;
//# sourceMappingURL=tutorial.js.map