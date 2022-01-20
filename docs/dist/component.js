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

/***/ "./src/components/component/content.md":
/*!*********************************************!*\
  !*** ./src/components/component/content.md ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// Module
var code = "<h1>\n  <a href=\"#组件体系\" id=\"组件体系\"></a>组件体系\n</h1><p>在 VariousJS 体系下，一切功能，依赖，甚至页面都可以认为是一个 React 组件。每个组件都是独立进行构建打包输出的。\n虽然都是 AMD 规范导出的组件，但还是有一定的区别。根据组件提供的能力划分，总体上可以分为三类组件。</p><h2>\n  <a href=\"#主体组件\" id=\"主体组件\"></a>主体组件\n</h2><p>主体组件有且只有一个，用于配置整个应用，控制应用的运行。定义页面路由，以及控制页面布局，控制其他组件的展示。另外也提供全局数据配置，数据共享机制等</p><p>主体组件需要提供模块</p><ul>\n<li>全局数据定义</li>\n<li>全局数据操作方法</li>\n<li>容器组件</li>\n<li>加载提示组件</li>\n<li>错误提示组件</li>\n</ul>\n<pre class=\"language-js\"><code class=\"language-js\"><span class=\"token keyword\">export</span> <span class=\"token punctuation\">{</span> <span class=\"token keyword\">default</span> <span class=\"token keyword\">as</span> store <span class=\"token punctuation\">}</span> <span class=\"token keyword\">from</span> <span class=\"token string\">'./store'</span>\n<span class=\"token keyword\">export</span> <span class=\"token punctuation\">{</span> <span class=\"token keyword\">default</span> <span class=\"token keyword\">as</span> actions <span class=\"token punctuation\">}</span> <span class=\"token keyword\">from</span> <span class=\"token string\">'./actions'</span>\n<span class=\"token keyword\">export</span> <span class=\"token punctuation\">{</span> <span class=\"token keyword\">default</span> <span class=\"token keyword\">as</span> Container <span class=\"token punctuation\">}</span> <span class=\"token keyword\">from</span> <span class=\"token string\">'./container'</span>\n<span class=\"token keyword\">export</span> <span class=\"token punctuation\">{</span> <span class=\"token keyword\">default</span> <span class=\"token keyword\">as</span> Loader <span class=\"token punctuation\">}</span> <span class=\"token keyword\">from</span> <span class=\"token string\">'./loader'</span>\n<span class=\"token keyword\">export</span> <span class=\"token punctuation\">{</span> <span class=\"token keyword\">default</span> <span class=\"token keyword\">as</span> Error <span class=\"token punctuation\">}</span> <span class=\"token keyword\">from</span> <span class=\"token string\">'./error'</span></code></pre><h3>\n  <a href=\"#全局数据定义\" id=\"全局数据定义\"></a>全局数据定义\n</h3><p>全局数据可以被所有组件访问，通常用于存储需要被全局访问数据，例如用户验证信息</p><pre class=\"language-ts\"><code class=\"language-ts\"><span class=\"token comment\">// store.ts</span>\n<span class=\"token keyword\">export</span> <span class=\"token keyword\">default</span> <span class=\"token punctuation\">{</span>\n  user<span class=\"token operator\">:</span> <span class=\"token punctuation\">{</span>\n    name<span class=\"token operator\">:</span> <span class=\"token string\">'various'</span><span class=\"token punctuation\">,</span>\n  <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n<span class=\"token punctuation\">}</span></code></pre><h3>\n  <a href=\"#全局数据操作方法\" id=\"全局数据操作方法\"></a>全局数据操作方法\n</h3><p>定义操作全局数据方法（数据处理），数据操作基于 <a href=\"https://github.com/fratercula/nycticorax\">nycticorax</a></p><pre class=\"language-ts\"><code class=\"language-ts\"><span class=\"token comment\">// actions.ts</span>\n<span class=\"token keyword\">import</span> <span class=\"token punctuation\">{</span> Actions <span class=\"token punctuation\">}</span> <span class=\"token keyword\">from</span> <span class=\"token string\">'@variousjs/various'</span>\n<span class=\"token keyword\">import</span> store <span class=\"token keyword\">from</span> <span class=\"token string\">'./store'</span>\n\n<span class=\"token keyword\">type</span> <span class=\"token class-name\">Store</span> <span class=\"token operator\">=</span> <span class=\"token keyword\">typeof</span> store\n\n<span class=\"token keyword\">const</span> actions<span class=\"token operator\">:</span> Actions<span class=\"token operator\">&lt;</span>Store<span class=\"token operator\">></span> <span class=\"token operator\">=</span> <span class=\"token punctuation\">{</span>\n  <span class=\"token keyword\">async</span> <span class=\"token function\">setName</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">{</span> dispatch<span class=\"token punctuation\">,</span> getStore <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span> value<span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n    <span class=\"token keyword\">await</span> <span class=\"token keyword\">new</span> <span class=\"token class-name\"><span class=\"token builtin\">Promise</span></span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">(</span>r<span class=\"token punctuation\">)</span> <span class=\"token operator\">=></span> <span class=\"token function\">setTimeout</span><span class=\"token punctuation\">(</span>r<span class=\"token punctuation\">,</span> <span class=\"token number\">1000</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">)</span>\n    <span class=\"token keyword\">const</span> <span class=\"token punctuation\">{</span> user <span class=\"token punctuation\">}</span> <span class=\"token operator\">=</span> <span class=\"token function\">getStore</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span>\n    user<span class=\"token punctuation\">.</span>name <span class=\"token operator\">=</span> value\n    <span class=\"token function\">dispatch</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">{</span> user <span class=\"token punctuation\">}</span><span class=\"token punctuation\">)</span>\n  <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n<span class=\"token punctuation\">}</span>\n\n<span class=\"token keyword\">export</span> <span class=\"token keyword\">default</span> actions</code></pre><h3>\n  <a href=\"#容器组件\" id=\"容器组件\"></a>容器组件\n</h3><p>容器组件用于根据自定义配置生成页面结构，页面路由相关，并且负责其他组件的加载控制。\n可以根据配置进行页面路由及组件控制定义，通过这种形式，就可以通过配置生成新的页面，添加新的功能了，并且不需要主应用重新构建打包</p><pre class=\"language-tsx\"><code class=\"language-tsx\"><span class=\"token comment\">// container.tsx</span>\n<span class=\"token keyword\">import</span> React<span class=\"token punctuation\">,</span> <span class=\"token punctuation\">{</span> Component<span class=\"token punctuation\">,</span> ComponentType <span class=\"token punctuation\">}</span> <span class=\"token keyword\">from</span> <span class=\"token string\">'react'</span>\n<span class=\"token keyword\">import</span> <span class=\"token punctuation\">{</span> ContainerProps<span class=\"token punctuation\">,</span> Router<span class=\"token punctuation\">,</span> Route<span class=\"token punctuation\">,</span> Link <span class=\"token punctuation\">}</span> <span class=\"token keyword\">from</span> <span class=\"token string\">'@variousjs/various'</span>\n<span class=\"token keyword\">import</span> store <span class=\"token keyword\">from</span> <span class=\"token string\">'./store'</span>\n\n<span class=\"token keyword\">type</span> <span class=\"token class-name\">Store</span> <span class=\"token operator\">=</span> <span class=\"token keyword\">typeof</span> store\n<span class=\"token keyword\">type</span> <span class=\"token class-name\">Config</span> <span class=\"token operator\">=</span> <span class=\"token punctuation\">{</span>\n  pages<span class=\"token operator\">:</span> <span class=\"token punctuation\">{</span>\n    path<span class=\"token operator\">:</span> <span class=\"token builtin\">string</span><span class=\"token punctuation\">[</span><span class=\"token punctuation\">]</span> <span class=\"token operator\">|</span> <span class=\"token builtin\">string</span><span class=\"token punctuation\">,</span>\n    components<span class=\"token operator\">:</span> <span class=\"token builtin\">string</span><span class=\"token punctuation\">[</span><span class=\"token punctuation\">]</span><span class=\"token punctuation\">,</span>\n  <span class=\"token punctuation\">}</span><span class=\"token punctuation\">[</span><span class=\"token punctuation\">]</span><span class=\"token punctuation\">,</span>\n<span class=\"token punctuation\">}</span>\n\n<span class=\"token keyword\">class</span> <span class=\"token class-name\">Container</span> <span class=\"token keyword\">extends</span> <span class=\"token class-name\">Component<span class=\"token operator\">&lt;</span>ContainerProps<span class=\"token operator\">&lt;</span>Store<span class=\"token punctuation\">,</span> Config<span class=\"token operator\">>></span></span> <span class=\"token punctuation\">{</span>\n  <span class=\"token function\">render</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n    <span class=\"token keyword\">const</span> <span class=\"token punctuation\">{</span> $component<span class=\"token punctuation\">,</span> $config <span class=\"token punctuation\">}</span> <span class=\"token operator\">=</span> <span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>props\n\n    <span class=\"token keyword\">return</span> <span class=\"token punctuation\">(</span>\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span><span class=\"token class-name\">Router</span></span><span class=\"token punctuation\">></span></span><span class=\"token plain-text\">\n        </span><span class=\"token punctuation\">{</span>\n          $config<span class=\"token punctuation\">.</span>pages<span class=\"token punctuation\">.</span><span class=\"token function\">map</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">(</span><span class=\"token parameter\"><span class=\"token punctuation\">{</span> path<span class=\"token punctuation\">,</span> components <span class=\"token punctuation\">}</span></span><span class=\"token punctuation\">)</span> <span class=\"token operator\">=></span> <span class=\"token punctuation\">{</span>\n            <span class=\"token keyword\">const</span> <span class=\"token function-variable function\">cs</span> <span class=\"token operator\">=</span> <span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> <span class=\"token operator\">=></span> components<span class=\"token punctuation\">.</span><span class=\"token function\">map</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">(</span><span class=\"token parameter\">name</span><span class=\"token punctuation\">)</span> <span class=\"token operator\">=></span> <span class=\"token punctuation\">{</span>\n              <span class=\"token keyword\">const</span> <span class=\"token constant\">C</span> <span class=\"token operator\">=</span> <span class=\"token function\">$component</span><span class=\"token punctuation\">(</span>name<span class=\"token punctuation\">)</span>\n              <span class=\"token keyword\">return</span> <span class=\"token punctuation\">(</span>\n                <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>div</span> <span class=\"token attr-name\">key</span><span class=\"token script language-javascript\"><span class=\"token script-punctuation punctuation\">=</span><span class=\"token punctuation\">{</span>name<span class=\"token punctuation\">}</span></span><span class=\"token punctuation\">></span></span><span class=\"token plain-text\">\n                  </span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span><span class=\"token class-name\">C</span></span> <span class=\"token punctuation\">/></span></span><span class=\"token plain-text\">\n                </span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>div</span><span class=\"token punctuation\">></span></span>\n              <span class=\"token punctuation\">)</span>\n            <span class=\"token punctuation\">}</span><span class=\"token punctuation\">)</span>\n\n            <span class=\"token keyword\">return</span> <span class=\"token punctuation\">(</span>\n              <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span><span class=\"token class-name\">Route</span></span>\n                <span class=\"token attr-name\">key</span><span class=\"token script language-javascript\"><span class=\"token script-punctuation punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token builtin\">Array</span><span class=\"token punctuation\">.</span><span class=\"token function\">isArray</span><span class=\"token punctuation\">(</span>path<span class=\"token punctuation\">)</span> <span class=\"token operator\">?</span> path<span class=\"token punctuation\">.</span><span class=\"token function\">join</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> <span class=\"token operator\">:</span> path<span class=\"token punctuation\">}</span></span>\n                <span class=\"token attr-name\">exact</span>\n                <span class=\"token attr-name\">path</span><span class=\"token script language-javascript\"><span class=\"token script-punctuation punctuation\">=</span><span class=\"token punctuation\">{</span>path<span class=\"token punctuation\">}</span></span>\n                <span class=\"token attr-name\">component</span><span class=\"token script language-javascript\"><span class=\"token script-punctuation punctuation\">=</span><span class=\"token punctuation\">{</span>cs <span class=\"token keyword\">as</span> <span class=\"token builtin\">unknown</span> <span class=\"token keyword\">as</span> ComponentType<span class=\"token punctuation\">}</span></span>\n              <span class=\"token punctuation\">/></span></span>\n            <span class=\"token punctuation\">)</span>\n          <span class=\"token punctuation\">}</span><span class=\"token punctuation\">)</span>\n        <span class=\"token punctuation\">}</span><span class=\"token plain-text\">\n      </span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span><span class=\"token class-name\">Router</span></span><span class=\"token punctuation\">></span></span>\n    <span class=\"token punctuation\">)</span>\n  <span class=\"token punctuation\">}</span>\n<span class=\"token punctuation\">}</span>\n\n<span class=\"token keyword\">export</span> <span class=\"token keyword\">default</span> Container</code></pre><h3>\n  <a href=\"#加载提示组件\" id=\"加载提示组件\"></a>加载提示组件\n</h3><p>组件都是动态加载，所以需要一个友好的加载提示。加载提示组件会在组件加载完成后被移除</p><pre class=\"language-tsx\"><code class=\"language-tsx\"><span class=\"token comment\">// loader.tsx</span>\n<span class=\"token keyword\">import</span> React <span class=\"token keyword\">from</span> <span class=\"token string\">'react'</span>\n<span class=\"token keyword\">import</span> <span class=\"token punctuation\">{</span> Skeleton <span class=\"token punctuation\">}</span> <span class=\"token keyword\">from</span> <span class=\"token string\">'antd'</span>\n\n<span class=\"token keyword\">export</span> <span class=\"token keyword\">default</span> <span class=\"token keyword\">function</span> <span class=\"token function\">Loader</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n  <span class=\"token keyword\">return</span> <span class=\"token punctuation\">(</span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>div</span> <span class=\"token attr-name\">style</span><span class=\"token script language-javascript\"><span class=\"token script-punctuation punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token punctuation\">{</span> padding<span class=\"token operator\">:</span> <span class=\"token string\">'32px 48px 60px'</span> <span class=\"token punctuation\">}</span><span class=\"token punctuation\">}</span></span><span class=\"token punctuation\">></span></span><span class=\"token plain-text\">\n      </span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span><span class=\"token class-name\">Skeleton</span></span> <span class=\"token attr-name\">active</span> <span class=\"token punctuation\">/></span></span><span class=\"token plain-text\">\n    </span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>div</span><span class=\"token punctuation\">></span></span>\n  <span class=\"token punctuation\">)</span>\n<span class=\"token punctuation\">}</span></code></pre><p>如果希望组件使用自定义加载，只需要在页面定义组件生成的组件配置 <code>$slient</code> 参数即可，这时候组件的加载及出错都不会有提示，需要组件自行处理</p><pre class=\"language-tsx\"><code class=\"language-tsx\"><span class=\"token comment\">// ...</span>\n<span class=\"token keyword\">const</span> <span class=\"token constant\">C</span> <span class=\"token operator\">=</span> <span class=\"token function\">$component</span><span class=\"token punctuation\">(</span><span class=\"token string\">'name'</span><span class=\"token punctuation\">)</span>\n<span class=\"token keyword\">return</span> <span class=\"token punctuation\">(</span>\n  <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>div</span> <span class=\"token attr-name\">key</span><span class=\"token script language-javascript\"><span class=\"token script-punctuation punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token string\">'name'</span><span class=\"token punctuation\">}</span></span><span class=\"token punctuation\">></span></span><span class=\"token plain-text\">\n    </span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span><span class=\"token class-name\">C</span></span> <span class=\"token attr-name\">$slient</span> <span class=\"token punctuation\">/></span></span><span class=\"token plain-text\">\n  </span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>div</span><span class=\"token punctuation\">></span></span>\n<span class=\"token punctuation\">)</span>\n<span class=\"token comment\">// ...</span></code></pre><h3>\n  <a href=\"#错误提示组件\" id=\"错误提示组件\"></a>错误提示组件\n</h3><p>当组件加载/运行期间出现问题，并不会导致全局应用或者其他组件受到影响，但需要一个友好的错误提示</p><pre class=\"language-ts\"><code class=\"language-ts\"><span class=\"token keyword\">interface</span> <span class=\"token class-name\">ErrorProps</span> <span class=\"token punctuation\">{</span>\n  reload<span class=\"token operator\">?</span><span class=\"token operator\">:</span> <span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> <span class=\"token operator\">=></span> <span class=\"token keyword\">void</span><span class=\"token punctuation\">,</span>\n  type<span class=\"token operator\">:</span> <span class=\"token string\">'LOADING_ERROR'</span> <span class=\"token operator\">|</span> <span class=\"token string\">'DEPENDENCIES_LOADING_ERROR'</span> <span class=\"token operator\">|</span> <span class=\"token string\">'NOT_DEFINED'</span> <span class=\"token operator\">|</span> <span class=\"token string\">'INVALID_COMPONENT'</span> <span class=\"token operator\">|</span> <span class=\"token string\">'SCRIPT_ERROR'</span> <span class=\"token operator\">|</span> <span class=\"token string\">'ROUTER_ERROR'</span> <span class=\"token operator\">|</span> <span class=\"token string\">'CONTAINER_ERROR'</span><span class=\"token punctuation\">,</span>\n  message<span class=\"token operator\">?</span><span class=\"token operator\">:</span> <span class=\"token builtin\">string</span><span class=\"token punctuation\">,</span>\n<span class=\"token punctuation\">}</span></code></pre><p>错误提示组件有重新加载方法，但并不是所有错误都可以重新加载。以下为错误类型定义及是否可以重新加载</p><table>\n<thead>\n<tr>\n<th>类型</th>\n<th>描述</th>\n<th>是否可以重新加载</th>\n</tr>\n</thead>\n<tbody><tr>\n<td>LOADING_ERROR</td>\n<td>组件加载失败</td>\n<td>yes</td>\n</tr>\n<tr>\n<td>DEPENDENCIES_LOADING_ERROR</td>\n<td>组件依赖加载失败</td>\n<td>yes</td>\n</tr>\n<tr>\n<td>NOT_DEFINED</td>\n<td>组件未定义</td>\n<td>no</td>\n</tr>\n<tr>\n<td>INVALID_COMPONENT</td>\n<td>错误的组件类型</td>\n<td>no</td>\n</tr>\n<tr>\n<td>SCRIPT_ERROR</td>\n<td>组件运行出错了</td>\n<td>yes</td>\n</tr>\n<tr>\n<td>ROUTER_ERROR</td>\n<td>页面路由出错</td>\n<td>no</td>\n</tr>\n<tr>\n<td>CONTAINER_ERROR</td>\n<td>容器组件出错了</td>\n<td>no</td>\n</tr>\n</tbody></table>\n<pre class=\"language-tsx\"><code class=\"language-tsx\"><span class=\"token keyword\">import</span> React<span class=\"token punctuation\">,</span> <span class=\"token punctuation\">{</span> <span class=\"token constant\">FC</span> <span class=\"token punctuation\">}</span> <span class=\"token keyword\">from</span> <span class=\"token string\">'react'</span>\n<span class=\"token keyword\">import</span> <span class=\"token punctuation\">{</span> Alert<span class=\"token punctuation\">,</span> Button <span class=\"token punctuation\">}</span> <span class=\"token keyword\">from</span> <span class=\"token string\">'antd'</span>\n<span class=\"token keyword\">import</span> <span class=\"token punctuation\">{</span> ErrorProps <span class=\"token punctuation\">}</span> <span class=\"token keyword\">from</span> <span class=\"token string\">'@variousjs/various'</span>\n\n<span class=\"token keyword\">const</span> errorComponent<span class=\"token operator\">:</span> <span class=\"token constant\">FC</span><span class=\"token operator\">&lt;</span>ErrorProps<span class=\"token operator\">></span> <span class=\"token operator\">=</span> <span class=\"token punctuation\">(</span><span class=\"token parameter\"><span class=\"token punctuation\">{</span> reload<span class=\"token punctuation\">,</span> type<span class=\"token punctuation\">,</span> message <span class=\"token punctuation\">}</span></span><span class=\"token punctuation\">)</span> <span class=\"token operator\">=></span> <span class=\"token punctuation\">(</span>\n  <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span></span><span class=\"token punctuation\">></span></span><span class=\"token plain-text\">\n    </span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span><span class=\"token class-name\">Alert</span></span>\n      <span class=\"token attr-name\">message</span><span class=\"token attr-value\"><span class=\"token punctuation attr-equals\">=</span><span class=\"token punctuation\">\"</span>Error<span class=\"token punctuation\">\"</span></span>\n      <span class=\"token attr-name\">description</span><span class=\"token script language-javascript\"><span class=\"token script-punctuation punctuation\">=</span><span class=\"token punctuation\">{</span>message <span class=\"token operator\">||</span> <span class=\"token string\">'组件错误'</span><span class=\"token punctuation\">}</span></span>\n      <span class=\"token attr-name\">type</span><span class=\"token attr-value\"><span class=\"token punctuation attr-equals\">=</span><span class=\"token punctuation\">\"</span>error<span class=\"token punctuation\">\"</span></span>\n    <span class=\"token punctuation\">/></span></span><span class=\"token plain-text\">\n    </span><span class=\"token punctuation\">{</span>\n      reload <span class=\"token operator\">&amp;&amp;</span> <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span><span class=\"token class-name\">Button</span></span> <span class=\"token attr-name\">onClick</span><span class=\"token script language-javascript\"><span class=\"token script-punctuation punctuation\">=</span><span class=\"token punctuation\">{</span>reload<span class=\"token punctuation\">}</span></span><span class=\"token punctuation\">></span></span><span class=\"token plain-text\">刷新</span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span><span class=\"token class-name\">Button</span></span><span class=\"token punctuation\">></span></span>\n    <span class=\"token punctuation\">}</span><span class=\"token plain-text\">\n  </span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span></span><span class=\"token punctuation\">></span></span>\n<span class=\"token punctuation\">)</span>\n\n<span class=\"token keyword\">export</span> <span class=\"token keyword\">default</span> errorComponent</code></pre><h2>\n  <a href=\"#功能组件\" id=\"功能组件\"></a>功能组件\n</h2><p>功能组件由主体组件加载并控制展示，独立不耦合其他组件，可以单独使用并提供相应能力。可以非常简单，是一个小按钮，也可以非常复杂，甚至可以是一个路由页面。遵循独立运行原则，独立的开发测试，打包及发布。\n功能组件可以与主体组件通信，也可以跟其他组件通信</p><pre class=\"language-tsx\"><code class=\"language-tsx\"><span class=\"token keyword\">import</span> React<span class=\"token punctuation\">,</span> <span class=\"token punctuation\">{</span> <span class=\"token constant\">FC</span> <span class=\"token punctuation\">}</span> <span class=\"token keyword\">from</span> <span class=\"token string\">'react'</span>\n<span class=\"token keyword\">import</span> <span class=\"token punctuation\">{</span> Button <span class=\"token punctuation\">}</span> <span class=\"token keyword\">from</span> <span class=\"token string\">'antd'</span>\n<span class=\"token keyword\">import</span> <span class=\"token punctuation\">{</span> ComponentProps <span class=\"token punctuation\">}</span> <span class=\"token keyword\">from</span> <span class=\"token string\">'@variousjs/various'</span>\n<span class=\"token keyword\">import</span> store <span class=\"token keyword\">from</span> <span class=\"token string\">'./store'</span>\n\n<span class=\"token keyword\">type</span> <span class=\"token class-name\">Store</span> <span class=\"token operator\">=</span> <span class=\"token keyword\">typeof</span> store\n\n<span class=\"token keyword\">const</span> <span class=\"token constant\">H</span><span class=\"token operator\">:</span> <span class=\"token constant\">FC</span><span class=\"token operator\">&lt;</span>ComponentProps<span class=\"token operator\">&lt;</span>Store<span class=\"token operator\">>></span> <span class=\"token operator\">=</span> <span class=\"token punctuation\">(</span><span class=\"token parameter\">props</span><span class=\"token punctuation\">)</span> <span class=\"token operator\">=></span> <span class=\"token punctuation\">{</span>\n  <span class=\"token keyword\">const</span> <span class=\"token function-variable function\">onSet</span> <span class=\"token operator\">=</span> <span class=\"token keyword\">async</span> <span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> <span class=\"token operator\">=></span> <span class=\"token punctuation\">{</span>\n    <span class=\"token comment\">// 改变主体组件的全局数据</span>\n    <span class=\"token keyword\">await</span> props<span class=\"token punctuation\">.</span><span class=\"token function\">$dispatch</span><span class=\"token punctuation\">(</span><span class=\"token string\">'store'</span><span class=\"token punctuation\">,</span> <span class=\"token string\">'setName'</span><span class=\"token punctuation\">,</span> <span class=\"token string\">'various'</span><span class=\"token punctuation\">)</span>\n  <span class=\"token punctuation\">}</span>\n\n  <span class=\"token keyword\">return</span> <span class=\"token punctuation\">(</span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>div</span><span class=\"token punctuation\">></span></span><span class=\"token plain-text\">\n      </span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>p</span><span class=\"token punctuation\">></span></span><span class=\"token plain-text\">\n        全局值:\n        </span><span class=\"token punctuation\">{</span>props<span class=\"token punctuation\">.</span>$store<span class=\"token punctuation\">.</span>user<span class=\"token punctuation\">.</span>name<span class=\"token punctuation\">}</span><span class=\"token plain-text\">\n      </span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>p</span><span class=\"token punctuation\">></span></span><span class=\"token plain-text\">\n      </span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>p</span><span class=\"token punctuation\">></span></span><span class=\"token plain-text\">\n        当前页面已加载组件:\n        </span><span class=\"token punctuation\">{</span>props<span class=\"token punctuation\">.</span>$mounted<span class=\"token punctuation\">.</span><span class=\"token function\">join</span><span class=\"token punctuation\">(</span><span class=\"token string\">', '</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">}</span><span class=\"token plain-text\">\n      </span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>p</span><span class=\"token punctuation\">></span></span><span class=\"token plain-text\">\n      </span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span><span class=\"token class-name\">Button</span></span> <span class=\"token attr-name\">onClick</span><span class=\"token script language-javascript\"><span class=\"token script-punctuation punctuation\">=</span><span class=\"token punctuation\">{</span>onSet<span class=\"token punctuation\">}</span></span><span class=\"token punctuation\">></span></span><span class=\"token plain-text\">更新全局</span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span><span class=\"token class-name\">Button</span></span><span class=\"token punctuation\">></span></span><span class=\"token plain-text\">\n    </span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>div</span><span class=\"token punctuation\">></span></span>\n  <span class=\"token punctuation\">)</span>\n<span class=\"token punctuation\">}</span>\n\n<span class=\"token keyword\">export</span> <span class=\"token keyword\">default</span> <span class=\"token constant\">H</span></code></pre><h2>\n  <a href=\"#依赖组件\" id=\"依赖组件\"></a>依赖组件\n</h2><p>依赖组件即共享组件，提供一些公共的能力，让其他组件可以直接使用，避免重复引入造成浪费。例如 <code>antd</code> UI 组件库。通常以下场景都可以作为依赖组件</p><ul>\n<li>UI 组件库，例如 “antd” 组件库，提供基础 UI 组件</li>\n<li>工具类，例如 “lodash”，“moment.js”，提供基础能力支持</li>\n<li>根据项目情况封装的基础组件，例如基础网络请求，封装一定的验证配置请求库</li>\n</ul>\n<p>Various 已经内置 <code>react</code>, <code>react-dom</code> 的依赖，可以直接使用。请注意如果使用了依赖组件，那么进行构建打包时候需要将依赖进行排除，以 webpack 为例子</p><pre class=\"language-js\"><code class=\"language-js\"><span class=\"token comment\">// 排除 antd 打包</span>\n<span class=\"token comment\">// ...</span>\nexternals<span class=\"token operator\">:</span> <span class=\"token punctuation\">{</span>\n  antd<span class=\"token operator\">:</span> <span class=\"token punctuation\">{</span>\n    root<span class=\"token operator\">:</span> <span class=\"token string\">'antd'</span><span class=\"token punctuation\">,</span>\n    amd<span class=\"token operator\">:</span> <span class=\"token string\">'antd'</span><span class=\"token punctuation\">,</span>\n  <span class=\"token punctuation\">}</span>\n<span class=\"token punctuation\">}</span>\n<span class=\"token comment\">// ...</span></code></pre>";
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
/*!********************************************!*\
  !*** ./src/components/component/index.tsx ***!
  \********************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _helper_markdown__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../helper/markdown */ "./src/helper/markdown.tsx");
/* harmony import */ var _content_md__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./content.md */ "./src/components/component/content.md");




var H = function H() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_helper_markdown__WEBPACK_IMPORTED_MODULE_1__["default"], null, _content_md__WEBPACK_IMPORTED_MODULE_2__["default"]);
};

/* harmony default export */ __webpack_exports__["default"] = (H);
}();
/******/ 	return __webpack_exports__;
/******/ })()
;
});;
//# sourceMappingURL=component.js.map