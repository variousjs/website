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
/* harmony import */ var _svg_list_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../svg/list.svg */ "./src/svg/list.svg");
/* harmony import */ var _markdown_less__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./markdown.less */ "./src/helper/markdown.less");




var M = function M(_ref) {
  var data = _ref.data;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: _markdown_less__WEBPACK_IMPORTED_MODULE_2__["default"].toc
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: _markdown_less__WEBPACK_IMPORTED_MODULE_2__["default"].icon
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_svg_list_svg__WEBPACK_IMPORTED_MODULE_1__["default"], {
    width: "26",
    height: "26"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "".concat(_markdown_less__WEBPACK_IMPORTED_MODULE_2__["default"].list, " markdown-body"),
    dangerouslySetInnerHTML: {
      __html: data.toc
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "".concat(_markdown_less__WEBPACK_IMPORTED_MODULE_2__["default"].md, " markdown-body"),
    dangerouslySetInnerHTML: {
      __html: data.content
    }
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (M);

/***/ }),

/***/ "./src/svg/list.svg":
/*!**************************!*\
  !*** ./src/svg/list.svg ***!
  \**************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _excluded = ["styles"];

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }


/* harmony default export */ __webpack_exports__["default"] = (function (_ref) {
  var _ref$styles = _ref.styles,
      styles = _ref$styles === void 0 ? {} : _ref$styles,
      props = _objectWithoutProperties(_ref, _excluded);

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("svg", _extends({
    className: styles["icon"] || "icon",
    viewBox: "0 0 1024 1024",
    xmlns: "http://www.w3.org/2000/svg",
    width: "32",
    height: "32"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("defs", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
    d: "M891 216H375a4 4 0 00-4 4v64a4 4 0 004 4h516a4 4 0 004-4v-64a4 4 0 00-4-4zm0 260H375a4 4 0 00-4 4v64a4 4 0 004 4h516a4 4 0 004-4v-64a4 4 0 00-4-4zm0 260H375a4 4 0 00-4 4v64a4 4 0 004 4h516a4 4 0 004-4v-64a4 4 0 00-4-4zM213 166a86 86 0 1086 86 86 86 0 00-86-86zm0 520a86 86 0 1086 86 86 86 0 00-86-86zm0-260a86 86 0 1086 86 86 86 0 00-86-86z",
    fill: "#515151"
  }));
});

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
___CSS_LOADER_EXPORT___.push([module.id, ".md_eATBI {\n  padding: 32px 48px 60px 0;\n}\n.toc_Q86k4 {\n  position: fixed;\n  left: 10px;\n  margin-top: 32px;\n}\n.list_ISPoe {\n  transition: all 0.3s ease;\n  background: #fff;\n  border: 3px solid #eee;\n  padding: 10px 14px 10px 0;\n  visibility: hidden;\n  opacity: 0;\n}\n.list_ISPoe:hover {\n  visibility: visible;\n  opacity: 1;\n}\n.icon_D0VsJ {\n  cursor: pointer;\n}\n.icon_D0VsJ:hover + .list_ISPoe {\n  visibility: visible;\n  opacity: 1;\n}\n", "",{"version":3,"sources":["webpack://./src/helper/markdown.less"],"names":[],"mappings":"AAAA;EACE,yBAAA;AACF;AAEA;EACE,eAAA;EACA,UAAA;EACA,gBAAA;AAAF;AAGA;EACE,yBAAA;EACA,gBAAA;EACA,sBAAA;EACA,yBAAA;EACA,kBAAA;EACA,UAAA;AADF;AAGE;EACE,mBAAA;EACA,UAAA;AADJ;AAKA;EACE,eAAA;AAHF;AAKE;EACE,mBAAA;EACA,UAAA;AAHJ","sourcesContent":[".md {\n  padding: 32px 48px 60px 0;\n}\n\n.toc {\n  position: fixed;\n  left: 10px;\n  margin-top: 32px;\n}\n\n.list {\n  transition: all .3s ease;\n  background: #fff;\n  border: 3px solid #eee;\n  padding: 10px 14px 10px 0;\n  visibility: hidden;\n  opacity: 0;\n\n  &:hover {\n    visibility: visible;\n    opacity: 1;\n  }\n}\n\n.icon {\n  cursor: pointer;\n\n  &:hover + .list {\n    visibility: visible;\n    opacity: 1;\n  }\n}\n"],"sourceRoot":""}]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"md": "md_eATBI",
	"toc": "toc_Q86k4",
	"list": "list_ISPoe",
	"icon": "icon_D0VsJ"
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

/***/ "./src/components/communication/content.md":
/*!*************************************************!*\
  !*** ./src/components/communication/content.md ***!
  \*************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({"content":"<h1>\n  <a href=\"#组件通信\" id=\"组件通信\"></a>组件通信\n</h1><p>由于组件完全独立分离，组件间需要一些互相联系的方式，VariousJS 提供简便易用的通信机制，组件间可以方便进行通信联系</p><p>提供的通信方式有两种：方法调用及广播消息</p><!-- toc -->\n\n<h2>\n  <a href=\"#方法调用\" id=\"方法调用\"></a>方法调用\n</h2><p>方法调用的方式为一个组件提供方法，由另外一个组件进行调用，调用后可以返回内容或者进行一些操作。是被动的通信方式</p><h3>\n  <a href=\"#方法提供\" id=\"方法提供\"></a>方法提供\n</h3><p>方法调用的前提是被调用的组件提供方法，以下为提供方法方式</p><h4>\n  <a href=\"#主体组件\" id=\"主体组件\"></a>主体组件\n</h4><p>通过全局数据定义及方法提供通信方法</p><pre class=\"language-ts\"><code class=\"language-ts\"><span class=\"token comment\">// store.ts 定义全局数据</span>\n<span class=\"token keyword\">export</span> <span class=\"token keyword\">default</span> <span class=\"token punctuation\">{</span>\n  user<span class=\"token operator\">:</span> <span class=\"token punctuation\">{</span>\n    name<span class=\"token operator\">:</span> <span class=\"token string\">'various'</span><span class=\"token punctuation\">,</span>\n  <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n<span class=\"token punctuation\">}</span>\n\n<span class=\"token comment\">// actions.ts 定义全局数据操作方法</span>\n<span class=\"token keyword\">import</span> <span class=\"token punctuation\">{</span> Actions <span class=\"token punctuation\">}</span> <span class=\"token keyword\">from</span> <span class=\"token string\">'@variousjs/various'</span>\n<span class=\"token keyword\">import</span> store <span class=\"token keyword\">from</span> <span class=\"token string\">'./store'</span>\n\n<span class=\"token keyword\">type</span> <span class=\"token class-name\">Store</span> <span class=\"token operator\">=</span> <span class=\"token keyword\">typeof</span> store\n\n<span class=\"token keyword\">const</span> actions<span class=\"token operator\">:</span> Actions<span class=\"token operator\">&lt;</span>Store<span class=\"token operator\">></span> <span class=\"token operator\">=</span> <span class=\"token punctuation\">{</span>\n  <span class=\"token keyword\">async</span> <span class=\"token function\">setName</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">{</span> dispatch<span class=\"token punctuation\">,</span> getStore <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span> value<span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n    <span class=\"token keyword\">await</span> <span class=\"token keyword\">new</span> <span class=\"token class-name\"><span class=\"token builtin\">Promise</span></span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">(</span>r<span class=\"token punctuation\">)</span> <span class=\"token operator\">=></span> <span class=\"token function\">setTimeout</span><span class=\"token punctuation\">(</span>r<span class=\"token punctuation\">,</span> <span class=\"token number\">1000</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">)</span>\n    <span class=\"token keyword\">const</span> <span class=\"token punctuation\">{</span> user <span class=\"token punctuation\">}</span> <span class=\"token operator\">=</span> <span class=\"token function\">getStore</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span>\n    user<span class=\"token punctuation\">.</span>name <span class=\"token operator\">=</span> value\n    <span class=\"token function\">dispatch</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">{</span> user <span class=\"token punctuation\">}</span><span class=\"token punctuation\">)</span>\n  <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n<span class=\"token punctuation\">}</span>\n\n<span class=\"token keyword\">export</span> <span class=\"token keyword\">default</span> actions</code></pre><p>通过以上数据及方法定义，全局提供了 <code>setName</code> 方法，其他组件可以访问该方法修改全局数据 <code>user</code></p><h4>\n  <a href=\"#功能组件\" id=\"功能组件\"></a>功能组件\n</h4><p>功能组件有两种形式，<code>Function Component</code> 及 <code>Class Component</code>。两种方式的组件提供调用方法并不一样，并且要考虑组件的数据安全性，其他组件不能随意访问内部数据</p><p>Function Component 通过定义静态属性方法提供</p><pre class=\"language-tsx\"><code class=\"language-tsx\"><span class=\"token keyword\">import</span> React<span class=\"token punctuation\">,</span> <span class=\"token punctuation\">{</span> <span class=\"token constant\">FC</span> <span class=\"token punctuation\">}</span> <span class=\"token keyword\">from</span> <span class=\"token string\">'react'</span>\n\n<span class=\"token keyword\">const</span> <span class=\"token constant\">A</span><span class=\"token operator\">:</span> <span class=\"token function-variable function\">FC</span> <span class=\"token operator\">=</span> <span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> <span class=\"token operator\">=></span> <span class=\"token punctuation\">(</span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>div</span><span class=\"token punctuation\">></span></span><span class=\"token plain-text\">A</span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>div</span><span class=\"token punctuation\">></span></span><span class=\"token punctuation\">)</span>\n\n<span class=\"token constant\">A</span><span class=\"token punctuation\">.</span><span class=\"token function-variable function\">getName</span> <span class=\"token operator\">=</span> <span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> <span class=\"token operator\">=></span> <span class=\"token string\">'A'</span>\n\n<span class=\"token keyword\">export</span> <span class=\"token keyword\">default</span> <span class=\"token constant\">A</span></code></pre><p>Class Component 通过定义静态方法 <code>static</code> 提供</p><pre class=\"language-tsx\"><code class=\"language-tsx\"><span class=\"token keyword\">import</span> React<span class=\"token punctuation\">,</span> <span class=\"token punctuation\">{</span> Component <span class=\"token punctuation\">}</span> <span class=\"token keyword\">from</span> <span class=\"token string\">'react'</span>\n\n<span class=\"token keyword\">export</span> <span class=\"token keyword\">default</span> <span class=\"token keyword\">class</span> <span class=\"token class-name\"><span class=\"token constant\">A</span></span> <span class=\"token keyword\">extends</span> <span class=\"token class-name\">Component</span> <span class=\"token punctuation\">{</span>\n  <span class=\"token keyword\">static</span> <span class=\"token function-variable function\">getName</span> <span class=\"token operator\">=</span> <span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> <span class=\"token operator\">=></span> <span class=\"token string\">'A'</span>\n\n  <span class=\"token function\">render</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n    <span class=\"token keyword\">return</span> <span class=\"token punctuation\">(</span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>div</span><span class=\"token punctuation\">></span></span><span class=\"token plain-text\">A</span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>div</span><span class=\"token punctuation\">></span></span><span class=\"token punctuation\">)</span>\n  <span class=\"token punctuation\">}</span>\n<span class=\"token punctuation\">}</span></code></pre><p>组件 A 两种方式都提供了方法 <code>getName</code> 调用，其实底层都是提供属性方法的形式。这样处理保证了组件内部数据不被外部直接访问</p><h3>\n  <a href=\"#调用方法\" id=\"调用方法\"></a>调用方法\n</h3><p>调用其他组件方法时候必须先知道对方组件提供的方法情况</p><pre class=\"language-ts\"><code class=\"language-ts\"><span class=\"token comment\">// type 通信类型：store(全局) / 组件名字</span>\n<span class=\"token comment\">// method 方法：调用全局或者其他组件提供的方法</span>\n<span class=\"token comment\">// value 值：传递的参数</span>\n<span class=\"token keyword\">type</span> <span class=\"token class-name\">$dispatch</span> <span class=\"token operator\">=</span> <span class=\"token punctuation\">(</span>type<span class=\"token operator\">:</span> <span class=\"token builtin\">string</span><span class=\"token punctuation\">,</span> method<span class=\"token operator\">:</span> <span class=\"token builtin\">string</span><span class=\"token punctuation\">,</span> value<span class=\"token operator\">?</span><span class=\"token operator\">:</span> <span class=\"token builtin\">any</span><span class=\"token punctuation\">)</span> <span class=\"token operator\">=></span> <span class=\"token builtin\">unknown</span></code></pre><p>例如根据上面例子组件提供的方法，可以有以下调用方式</p><pre class=\"language-tsx\"><code class=\"language-tsx\"><span class=\"token keyword\">import</span> React<span class=\"token punctuation\">,</span> <span class=\"token punctuation\">{</span> <span class=\"token constant\">FC</span><span class=\"token punctuation\">,</span> useEffect <span class=\"token punctuation\">}</span> <span class=\"token keyword\">from</span> <span class=\"token string\">'react'</span>\n<span class=\"token keyword\">import</span> <span class=\"token punctuation\">{</span> ComponentsProps <span class=\"token punctuation\">}</span> <span class=\"token keyword\">from</span> <span class=\"token string\">'@variousjs/various'</span>\n\n<span class=\"token keyword\">const</span> <span class=\"token constant\">C</span><span class=\"token operator\">:</span> <span class=\"token constant\">FC</span><span class=\"token operator\">&lt;</span>ComponentProps<span class=\"token operator\">></span> <span class=\"token operator\">=</span> <span class=\"token punctuation\">(</span><span class=\"token parameter\">props</span><span class=\"token punctuation\">)</span> <span class=\"token operator\">=></span> <span class=\"token punctuation\">{</span>\n  <span class=\"token function\">useEffect</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> <span class=\"token operator\">=></span> <span class=\"token punctuation\">{</span>\n    <span class=\"token comment\">// 改变全局数据</span>\n    props<span class=\"token punctuation\">.</span><span class=\"token function\">$dispatch</span><span class=\"token punctuation\">(</span><span class=\"token string\">'store'</span><span class=\"token punctuation\">,</span> <span class=\"token string\">'setName'</span><span class=\"token punctuation\">,</span> <span class=\"token string\">'C'</span><span class=\"token punctuation\">)</span>\n      <span class=\"token punctuation\">.</span><span class=\"token function\">then</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> <span class=\"token operator\">=></span> <span class=\"token punctuation\">{</span>\n        <span class=\"token comment\">// ...</span>\n      <span class=\"token punctuation\">}</span><span class=\"token punctuation\">)</span>\n\n    <span class=\"token comment\">// 获取 A 组件提供的值</span>\n    <span class=\"token keyword\">const</span> name <span class=\"token operator\">=</span> props<span class=\"token punctuation\">.</span><span class=\"token function\">$dispatch</span><span class=\"token punctuation\">(</span><span class=\"token string\">'A'</span><span class=\"token punctuation\">,</span> <span class=\"token string\">'setName'</span><span class=\"token punctuation\">)</span>\n    <span class=\"token builtin\">console</span><span class=\"token punctuation\">.</span><span class=\"token function\">log</span><span class=\"token punctuation\">(</span>name<span class=\"token punctuation\">)</span>\n\n    <span class=\"token comment\">// 改变 B 组件的状态</span>\n    props<span class=\"token punctuation\">.</span><span class=\"token function\">$dispatch</span><span class=\"token punctuation\">(</span><span class=\"token string\">'B'</span><span class=\"token punctuation\">,</span> <span class=\"token string\">'updateValue'</span><span class=\"token punctuation\">,</span> <span class=\"token string\">'C'</span><span class=\"token punctuation\">)</span>\n  <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span> <span class=\"token punctuation\">[</span><span class=\"token punctuation\">]</span><span class=\"token punctuation\">)</span>\n\n  <span class=\"token keyword\">return</span> <span class=\"token punctuation\">(</span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>div</span><span class=\"token punctuation\">></span></span><span class=\"token plain-text\">C</span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>div</span><span class=\"token punctuation\">></span></span><span class=\"token punctuation\">)</span>\n<span class=\"token punctuation\">}</span>\n\n<span class=\"token keyword\">export</span> <span class=\"token keyword\">default</span> <span class=\"token constant\">C</span></code></pre><h3>\n  <a href=\"#状态改变\" id=\"状态改变\"></a>状态改变\n</h3><p>通过定义属性形式提供调用方法，保证了组件内部数据安全性，但有个问题是如何通信改变其他组件的自身状态？答案是使用状态管理</p><p>VariousJS 提供了状态组件 <code>Store</code>，基于 基于 <a href=\"https://github.com/fratercula/nycticorax\">nycticorax</a>，类似 <code>Redux</code> 的用法，用于组件状态管理</p><pre class=\"language-tsx\"><code class=\"language-tsx\"><span class=\"token keyword\">import</span> React<span class=\"token punctuation\">,</span> <span class=\"token punctuation\">{</span> Component <span class=\"token punctuation\">}</span> <span class=\"token keyword\">from</span> <span class=\"token string\">'react'</span>\n<span class=\"token keyword\">import</span> <span class=\"token punctuation\">{</span> ComponentProps<span class=\"token punctuation\">,</span> Store<span class=\"token punctuation\">,</span> Connect <span class=\"token keyword\">as</span> <span class=\"token constant\">CT</span> <span class=\"token punctuation\">}</span> <span class=\"token keyword\">from</span> <span class=\"token string\">'@variousjs/various'</span>\n\n<span class=\"token keyword\">type</span> <span class=\"token class-name\">Store</span> <span class=\"token operator\">=</span> <span class=\"token punctuation\">{</span> value<span class=\"token operator\">:</span> <span class=\"token builtin\">string</span> <span class=\"token punctuation\">}</span>\n<span class=\"token keyword\">type</span> <span class=\"token class-name\">Connect</span> <span class=\"token operator\">=</span> <span class=\"token constant\">CT</span><span class=\"token operator\">&lt;</span>Store<span class=\"token operator\">></span>\n\n<span class=\"token keyword\">const</span> <span class=\"token punctuation\">{</span> createStore<span class=\"token punctuation\">,</span> connect<span class=\"token punctuation\">,</span> dispatch <span class=\"token punctuation\">}</span> <span class=\"token operator\">=</span> <span class=\"token keyword\">new</span> <span class=\"token class-name\">Store<span class=\"token operator\">&lt;</span><span class=\"token constant\">S</span><span class=\"token operator\">></span></span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span>\n\n<span class=\"token function\">createStore</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">{</span> value<span class=\"token operator\">:</span> <span class=\"token string\">'B'</span> <span class=\"token punctuation\">}</span><span class=\"token punctuation\">)</span>\n\n<span class=\"token keyword\">class</span> <span class=\"token class-name\"><span class=\"token constant\">B</span></span> <span class=\"token keyword\">extends</span> <span class=\"token class-name\">Component<span class=\"token operator\">&lt;</span>Connect<span class=\"token operator\">></span></span> <span class=\"token punctuation\">{</span>\n  <span class=\"token keyword\">static</span> <span class=\"token function-variable function\">updateValue</span> <span class=\"token operator\">=</span> <span class=\"token keyword\">async</span> <span class=\"token punctuation\">(</span><span class=\"token parameter\">value<span class=\"token operator\">:</span> string</span><span class=\"token punctuation\">)</span> <span class=\"token operator\">=></span> <span class=\"token punctuation\">{</span>\n    <span class=\"token keyword\">await</span> <span class=\"token keyword\">new</span> <span class=\"token class-name\"><span class=\"token builtin\">Promise</span></span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">(</span><span class=\"token parameter\">r</span><span class=\"token punctuation\">)</span> <span class=\"token operator\">=></span> <span class=\"token function\">setTimeout</span><span class=\"token punctuation\">(</span>r<span class=\"token punctuation\">,</span> <span class=\"token number\">1000</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">)</span>\n    <span class=\"token function\">dispatch</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">{</span> value <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span> <span class=\"token boolean\">true</span><span class=\"token punctuation\">)</span>\n  <span class=\"token punctuation\">}</span>\n\n  <span class=\"token function\">render</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n    <span class=\"token keyword\">const</span> <span class=\"token punctuation\">{</span> value <span class=\"token punctuation\">}</span> <span class=\"token operator\">=</span> <span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>props\n\n    <span class=\"token keyword\">return</span> <span class=\"token punctuation\">(</span>\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>div</span><span class=\"token punctuation\">></span></span><span class=\"token plain-text\">当前值：</span><span class=\"token punctuation\">{</span>value<span class=\"token punctuation\">}</span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>div</span><span class=\"token punctuation\">></span></span>\n    <span class=\"token punctuation\">)</span>\n  <span class=\"token punctuation\">}</span>\n<span class=\"token punctuation\">}</span>\n\n<span class=\"token keyword\">export</span> <span class=\"token keyword\">default</span> <span class=\"token function\">connect</span><span class=\"token punctuation\">(</span><span class=\"token string\">'value'</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">(</span><span class=\"token constant\">B</span><span class=\"token punctuation\">)</span></code></pre><p>以上例子 B 组件提供了 <code>updateValue</code> 给其他组件调用改变自身数据状态</p><h2>\n  <a href=\"#广播消息\" id=\"广播消息\"></a>广播消息\n</h2><p>此方式是一个组件直接进行广播消息，传递相关参数，其他组件可以进行消息监听获取参数。是主动的通信方式</p><h3>\n  <a href=\"#主动广播\" id=\"主动广播\"></a>主动广播\n</h3><p>组件进行广播消息没有什么限制</p><pre class=\"language-ts\"><code class=\"language-ts\"><span class=\"token comment\">// name：事件名字，用于区分</span>\n<span class=\"token comment\">// value：传递的参数</span>\n<span class=\"token keyword\">type</span> <span class=\"token class-name\">$postMessage</span> <span class=\"token operator\">=</span> <span class=\"token punctuation\">(</span>name<span class=\"token operator\">:</span> <span class=\"token builtin\">string</span><span class=\"token punctuation\">,</span> value<span class=\"token operator\">?</span><span class=\"token operator\">:</span> <span class=\"token builtin\">any</span><span class=\"token punctuation\">)</span> <span class=\"token operator\">=></span> <span class=\"token keyword\">void</span></code></pre><p>以下例子，点击按钮组件就广播了一个名字为 <code>m</code> 的消息，并且传递了参数 <code>hello world</code></p><pre class=\"language-tsx\"><code class=\"language-tsx\"><span class=\"token keyword\">import</span> React<span class=\"token punctuation\">,</span> <span class=\"token punctuation\">{</span> <span class=\"token constant\">FC</span> <span class=\"token punctuation\">}</span> <span class=\"token keyword\">from</span> <span class=\"token string\">'react'</span>\n<span class=\"token keyword\">import</span> <span class=\"token punctuation\">{</span> ComponentProps <span class=\"token punctuation\">}</span> <span class=\"token keyword\">from</span> <span class=\"token string\">'@variousjs/various'</span>\n\n<span class=\"token keyword\">const</span> <span class=\"token constant\">A</span><span class=\"token operator\">:</span> <span class=\"token constant\">FC</span><span class=\"token operator\">&lt;</span>ComponentProps<span class=\"token operator\">></span> <span class=\"token operator\">=</span> <span class=\"token punctuation\">(</span><span class=\"token parameter\">props</span><span class=\"token punctuation\">)</span> <span class=\"token operator\">=></span> <span class=\"token punctuation\">{</span>\n  <span class=\"token keyword\">const</span> <span class=\"token function-variable function\">onMsg</span> <span class=\"token operator\">=</span> <span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> <span class=\"token operator\">=></span> <span class=\"token punctuation\">{</span>\n    props<span class=\"token punctuation\">.</span><span class=\"token function\">$postMessage</span><span class=\"token punctuation\">(</span><span class=\"token string\">'m'</span><span class=\"token punctuation\">,</span> <span class=\"token string\">'hello world'</span><span class=\"token punctuation\">)</span>\n  <span class=\"token punctuation\">}</span>\n\n  <span class=\"token keyword\">return</span> <span class=\"token punctuation\">(</span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>div</span><span class=\"token punctuation\">></span></span><span class=\"token plain-text\">\n      </span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>button</span> <span class=\"token attr-name\">onClick</span><span class=\"token script language-javascript\"><span class=\"token script-punctuation punctuation\">=</span><span class=\"token punctuation\">{</span>onMsg<span class=\"token punctuation\">}</span></span><span class=\"token punctuation\">></span></span><span class=\"token plain-text\">广播消息</span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>button</span><span class=\"token punctuation\">></span></span><span class=\"token plain-text\">\n    </span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>div</span><span class=\"token punctuation\">></span></span>\n  <span class=\"token punctuation\">)</span>\n<span class=\"token punctuation\">}</span></code></pre><h3>\n  <a href=\"#监听消息\" id=\"监听消息\"></a>监听消息\n</h3><p>其他组件要进行监听消息，必须定义静态方法 <code>$onMessage</code>。请注意组件无法监听到自己广播的消息</p><pre class=\"language-ts\"><code class=\"language-ts\"><span class=\"token keyword\">type</span> <span class=\"token class-name\">Message</span> <span class=\"token operator\">=</span> <span class=\"token punctuation\">{</span>\n  type<span class=\"token operator\">:</span> <span class=\"token builtin\">string</span><span class=\"token punctuation\">,</span> <span class=\"token comment\">// 组件名字</span>\n  name<span class=\"token operator\">:</span> <span class=\"token builtin\">string</span><span class=\"token punctuation\">,</span> <span class=\"token comment\">// 事件名字</span>\n  value<span class=\"token operator\">?</span><span class=\"token operator\">:</span> <span class=\"token builtin\">any</span><span class=\"token punctuation\">,</span>  <span class=\"token comment\">// 传递参数</span>\n<span class=\"token punctuation\">}</span>\n<span class=\"token keyword\">type</span> <span class=\"token class-name\">$onMessage</span> <span class=\"token operator\">=</span> <span class=\"token punctuation\">(</span>params<span class=\"token operator\">:</span> Message<span class=\"token punctuation\">)</span> <span class=\"token operator\">=></span> <span class=\"token builtin\">unknown</span></code></pre><p>监听消息返回的参数中可以获取到当前广播消息的组件名字</p><pre class=\"language-tsx\"><code class=\"language-tsx\"><span class=\"token keyword\">import</span> React<span class=\"token punctuation\">,</span> <span class=\"token punctuation\">{</span> <span class=\"token constant\">FC</span> <span class=\"token punctuation\">}</span> <span class=\"token keyword\">from</span> <span class=\"token string\">'react'</span>\n<span class=\"token keyword\">import</span> <span class=\"token punctuation\">{</span> Message <span class=\"token punctuation\">}</span> <span class=\"token keyword\">from</span> <span class=\"token string\">'@variousjs/various'</span>\n\n<span class=\"token keyword\">const</span> <span class=\"token constant\">A</span><span class=\"token operator\">:</span> <span class=\"token function-variable function\">FC</span> <span class=\"token operator\">=</span> <span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> <span class=\"token operator\">=></span> <span class=\"token punctuation\">{</span>\n  <span class=\"token keyword\">return</span> <span class=\"token punctuation\">(</span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>div</span><span class=\"token punctuation\">></span></span><span class=\"token plain-text\">\n      </span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>button</span> <span class=\"token attr-name\">onClick</span><span class=\"token script language-javascript\"><span class=\"token script-punctuation punctuation\">=</span><span class=\"token punctuation\">{</span>onMsg<span class=\"token punctuation\">}</span></span><span class=\"token punctuation\">></span></span><span class=\"token plain-text\">广播消息</span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>button</span><span class=\"token punctuation\">></span></span><span class=\"token plain-text\">\n    </span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>div</span><span class=\"token punctuation\">></span></span>\n  <span class=\"token punctuation\">)</span>\n<span class=\"token punctuation\">}</span>\n\n<span class=\"token constant\">A</span><span class=\"token punctuation\">.</span><span class=\"token function-variable function\">$onMessage</span> <span class=\"token operator\">=</span> <span class=\"token punctuation\">(</span><span class=\"token parameter\">m<span class=\"token operator\">:</span> Message</span><span class=\"token punctuation\">)</span> <span class=\"token operator\">=></span> <span class=\"token punctuation\">{</span>\n  <span class=\"token builtin\">console</span><span class=\"token punctuation\">.</span><span class=\"token function\">log</span><span class=\"token punctuation\">(</span>m<span class=\"token punctuation\">)</span>\n<span class=\"token punctuation\">}</span>\n\n<span class=\"token keyword\">export</span> <span class=\"token keyword\">default</span> <span class=\"token constant\">A</span></code></pre>","toc":"<ul>\n<li><a href=\"#%E6%96%B9%E6%B3%95%E8%B0%83%E7%94%A8\">方法调用</a><ul>\n<li><a href=\"#%E6%96%B9%E6%B3%95%E6%8F%90%E4%BE%9B\">方法提供</a><ul>\n<li><a href=\"#%E4%B8%BB%E4%BD%93%E7%BB%84%E4%BB%B6\">主体组件</a></li>\n<li><a href=\"#%E5%8A%9F%E8%83%BD%E7%BB%84%E4%BB%B6\">功能组件</a></li>\n</ul>\n</li>\n<li><a href=\"#%E8%B0%83%E7%94%A8%E6%96%B9%E6%B3%95\">调用方法</a></li>\n<li><a href=\"#%E7%8A%B6%E6%80%81%E6%94%B9%E5%8F%98\">状态改变</a></li>\n</ul>\n</li>\n<li><a href=\"#%E5%B9%BF%E6%92%AD%E6%B6%88%E6%81%AF\">广播消息</a><ul>\n<li><a href=\"#%E4%B8%BB%E5%8A%A8%E5%B9%BF%E6%92%AD\">主动广播</a></li>\n<li><a href=\"#%E7%9B%91%E5%90%AC%E6%B6%88%E6%81%AF\">监听消息</a></li>\n</ul>\n</li>\n</ul>\n"});

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
/*!************************************************!*\
  !*** ./src/components/communication/index.tsx ***!
  \************************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _helper_markdown__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../helper/markdown */ "./src/helper/markdown.tsx");
/* harmony import */ var _content_md__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./content.md */ "./src/components/communication/content.md");




var H = function H() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_helper_markdown__WEBPACK_IMPORTED_MODULE_1__["default"], {
    data: _content_md__WEBPACK_IMPORTED_MODULE_2__["default"]
  });
};

/* harmony default export */ __webpack_exports__["default"] = (H);
}();
/******/ 	return __webpack_exports__;
/******/ })()
;
});;
//# sourceMappingURL=communication.js.map