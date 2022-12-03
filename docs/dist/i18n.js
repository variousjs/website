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
  var data = _ref.data;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, data.toc ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: _markdown_less__WEBPACK_IMPORTED_MODULE_1__["default"].toc
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "".concat(_markdown_less__WEBPACK_IMPORTED_MODULE_1__["default"].list, " markdown-body"),
    dangerouslySetInnerHTML: {
      __html: data.toc
    }
  })) : null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "".concat(_markdown_less__WEBPACK_IMPORTED_MODULE_1__["default"].md, " markdown-body"),
    dangerouslySetInnerHTML: {
      __html: data.content
    }
  }));
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
___CSS_LOADER_EXPORT___.push([module.id, ".md_eATBI {\n  padding: 32px 48px 60px 0;\n}\n@media (max-width: 800px) {\n  .md_eATBI {\n    padding-left: 20px;\n    padding-right: 20px;\n  }\n  .toc_Q86k4 {\n    display: none;\n  }\n}\n.toc_Q86k4 {\n  position: fixed;\n  left: 10px;\n  margin-top: 35px;\n}\n.list_ISPoe {\n  transition: all 0.3s ease;\n  background: #fff;\n  border: 3px solid #eee;\n  padding: 10px 14px 10px 0;\n}\n", "",{"version":3,"sources":["webpack://./src/helper/markdown.less"],"names":[],"mappings":"AAAA;EACE,yBAAA;AACF;AAEA;EACE;IACE,kBAAA;IACA,mBAAA;EAAF;EAGA;IACE,aAAA;EADF;AACF;AAIA;EACE,eAAA;EACA,UAAA;EACA,gBAAA;AAFF;AAKA;EACE,yBAAA;EACA,gBAAA;EACA,sBAAA;EACA,yBAAA;AAHF","sourcesContent":[".md {\n  padding: 32px 48px 60px 0;\n}\n\n@media (max-width: 800px) {\n  .md {\n    padding-left: 20px;\n    padding-right: 20px;\n  }\n\n  .toc {\n    display: none;\n  }\n}\n\n.toc {\n  position: fixed;\n  left: 10px;\n  margin-top: 35px;\n}\n\n.list {\n  transition: all .3s ease;\n  background: #fff;\n  border: 3px solid #eee;\n  padding: 10px 14px 10px 0;\n}\n"],"sourceRoot":""}]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"md": "md_eATBI",
	"toc": "toc_Q86k4",
	"list": "list_ISPoe"
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

/***/ "./src/components/i18n/content.md":
/*!****************************************!*\
  !*** ./src/components/i18n/content.md ***!
  \****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({"content":"<h1>\n  <a href=\"#国际化\" id=\"国际化\"></a>国际化\n</h1><p>VariousJS 自带国际化功能，且使用起来非常简单</p><!-- toc -->\n\n<h2>\n  <a href=\"#定义语言及语言包\" id=\"定义语言及语言包\"></a>定义语言及语言包\n</h2><p>组件使用国际化功能前必须先定义当前语言及对应多语言文案</p><h3>\n  <a href=\"#语言包-json-例子\" id=\"语言包-json-例子\"></a>语言包 JSON 例子\n</h3><pre class=\"language-json\"><code class=\"language-json\"><span class=\"token punctuation\">{</span>\n  <span class=\"token property\">\"title\"</span><span class=\"token operator\">:</span> <span class=\"token string\">\"Title\"</span><span class=\"token punctuation\">,</span>\n  <span class=\"token property\">\"hello\"</span><span class=\"token operator\">:</span> <span class=\"token string\">\"Hello, {name}, {name2}\"</span>\n<span class=\"token punctuation\">}</span></code></pre><h3>\n  <a href=\"#主体组件-store-定义当前语言\" id=\"主体组件-store-定义当前语言\"></a>主体组件 store 定义当前语言\n</h3><pre class=\"language-ts\"><code class=\"language-ts\"><span class=\"token keyword\">export</span> <span class=\"token keyword\">default</span> <span class=\"token punctuation\">{</span>\n  locale<span class=\"token operator\">:</span> <span class=\"token string\">'zh'</span><span class=\"token punctuation\">,</span>\n<span class=\"token punctuation\">}</span></code></pre><h3>\n  <a href=\"#主体组件-actions-定义语言切换获取方法\" id=\"主体组件-actions-定义语言切换获取方法\"></a>主体组件 actions 定义语言切换获取方法\n</h3><pre class=\"language-ts\"><code class=\"language-ts\"><span class=\"token keyword\">import</span> <span class=\"token punctuation\">{</span> Actions <span class=\"token punctuation\">}</span> <span class=\"token keyword\">from</span> <span class=\"token string\">'@variousjs/various'</span>\n<span class=\"token keyword\">import</span> <span class=\"token punctuation\">{</span> Store <span class=\"token punctuation\">}</span> <span class=\"token keyword\">from</span> <span class=\"token string\">'./types'</span>\n\n<span class=\"token keyword\">const</span> actions<span class=\"token operator\">:</span> Actions<span class=\"token operator\">&lt;</span>Store<span class=\"token operator\">></span> <span class=\"token operator\">=</span> <span class=\"token punctuation\">{</span>\n  <span class=\"token keyword\">async</span> <span class=\"token function\">setLocale</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">{</span> emit <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span> <span class=\"token punctuation\">{</span> value <span class=\"token punctuation\">}</span><span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n    <span class=\"token function\">emit</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">{</span> locale<span class=\"token operator\">:</span> value <span class=\"token punctuation\">}</span><span class=\"token punctuation\">)</span>\n  <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n\n  <span class=\"token keyword\">async</span> <span class=\"token function\">getLocale</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">{</span> getStore <span class=\"token punctuation\">}</span><span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n    <span class=\"token keyword\">return</span> <span class=\"token function\">getStore</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">.</span>locale\n  <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n<span class=\"token punctuation\">}</span>\n\n<span class=\"token keyword\">export</span> <span class=\"token keyword\">default</span> actions</code></pre><h3>\n  <a href=\"#组件定义国际化配置\" id=\"组件定义国际化配置\"></a>组件定义国际化配置\n</h3><pre class=\"language-ts\"><code class=\"language-ts\"><span class=\"token keyword\">import</span> React<span class=\"token punctuation\">,</span> <span class=\"token punctuation\">{</span> Component<span class=\"token punctuation\">,</span> <span class=\"token constant\">FC</span> <span class=\"token punctuation\">}</span> <span class=\"token keyword\">from</span> <span class=\"token string\">'react'</span>\n<span class=\"token keyword\">import</span> <span class=\"token punctuation\">{</span> Ii8n <span class=\"token punctuation\">}</span> <span class=\"token keyword\">from</span> <span class=\"token string\">'@variousjs/various'</span>\n<span class=\"token keyword\">import</span> Zh <span class=\"token keyword\">from</span> <span class=\"token string\">'./i18n/zh.json'</span>\n<span class=\"token keyword\">import</span> En <span class=\"token keyword\">from</span> <span class=\"token string\">'./i18n/en.json'</span>\n\n<span class=\"token comment\">// Class Component</span>\n<span class=\"token keyword\">export</span> <span class=\"token keyword\">class</span> <span class=\"token class-name\"><span class=\"token constant\">C</span></span> <span class=\"token keyword\">extends</span> <span class=\"token class-name\">Component</span> <span class=\"token punctuation\">{</span>\n  <span class=\"token keyword\">static</span> $i18n<span class=\"token operator\">:</span> <span class=\"token function-variable function\">Ii8n</span> <span class=\"token operator\">=</span> <span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> <span class=\"token operator\">=></span> <span class=\"token punctuation\">(</span><span class=\"token punctuation\">{</span>\n    localeKey<span class=\"token operator\">:</span> <span class=\"token string\">'locale'</span><span class=\"token punctuation\">,</span> <span class=\"token comment\">// 指定语言 key，对应 store 字段</span>\n    resources<span class=\"token operator\">:</span> <span class=\"token punctuation\">{</span> <span class=\"token comment\">// 指定国际化语言</span>\n      zh<span class=\"token operator\">:</span> Zh<span class=\"token punctuation\">,</span>\n      en<span class=\"token operator\">:</span> En<span class=\"token punctuation\">,</span>\n    <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n  <span class=\"token punctuation\">}</span><span class=\"token punctuation\">)</span>\n\n  <span class=\"token function\">render</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n    <span class=\"token comment\">// ...</span>\n  <span class=\"token punctuation\">}</span>\n<span class=\"token punctuation\">}</span>\n\n<span class=\"token comment\">// FC</span>\n<span class=\"token keyword\">const</span> <span class=\"token constant\">F</span><span class=\"token operator\">:</span> <span class=\"token constant\">FC</span> <span class=\"token operator\">&amp;</span> <span class=\"token punctuation\">{</span> $i18n<span class=\"token operator\">:</span> Ii8n <span class=\"token punctuation\">}</span> <span class=\"token operator\">=</span> <span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> <span class=\"token operator\">=></span> <span class=\"token punctuation\">{</span>\n  <span class=\"token keyword\">return</span> <span class=\"token punctuation\">(</span>\n    <span class=\"token comment\">// ...</span>\n  <span class=\"token punctuation\">)</span>\n<span class=\"token punctuation\">}</span>\n<span class=\"token constant\">F</span><span class=\"token punctuation\">.</span><span class=\"token function-variable function\">$i18n</span> <span class=\"token operator\">=</span> <span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> <span class=\"token operator\">=></span> <span class=\"token punctuation\">(</span><span class=\"token punctuation\">{</span>\n  localeKey<span class=\"token operator\">:</span> <span class=\"token string\">'locale'</span><span class=\"token punctuation\">,</span>\n  resources<span class=\"token operator\">:</span> <span class=\"token punctuation\">{</span>\n    zh<span class=\"token operator\">:</span> Zh<span class=\"token punctuation\">,</span>\n    en<span class=\"token operator\">:</span> En<span class=\"token punctuation\">,</span>\n  <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n<span class=\"token punctuation\">}</span><span class=\"token punctuation\">)</span>\n\n<span class=\"token keyword\">export</span> <span class=\"token keyword\">const</span> <span class=\"token constant\">T</span> <span class=\"token operator\">=</span> <span class=\"token constant\">F</span></code></pre><h2>\n  <a href=\"#展示多语言\" id=\"展示多语言\"></a>展示多语言\n</h2><p>定义好语言及多语言后，就可以使用多语言函数了</p><pre class=\"language-ts\"><code class=\"language-ts\"><span class=\"token keyword\">type</span> <span class=\"token class-name\">$t</span> <span class=\"token operator\">=</span> <span class=\"token punctuation\">(</span>key<span class=\"token operator\">:</span> <span class=\"token builtin\">string</span><span class=\"token punctuation\">,</span> params<span class=\"token operator\">?</span><span class=\"token operator\">:</span> Record<span class=\"token operator\">&lt;</span><span class=\"token builtin\">string</span><span class=\"token punctuation\">,</span> <span class=\"token builtin\">string</span> <span class=\"token operator\">|</span> <span class=\"token builtin\">number</span><span class=\"token operator\">></span><span class=\"token punctuation\">)</span> <span class=\"token operator\">=></span> <span class=\"token builtin\">string</span> <span class=\"token operator\">|</span> <span class=\"token keyword\">undefined</span></code></pre><h3>\n  <a href=\"#例子\" id=\"例子\"></a>例子\n</h3>","toc":"<ul>\n<li><a href=\"#%E5%AE%9A%E4%B9%89%E8%AF%AD%E8%A8%80%E5%8F%8A%E8%AF%AD%E8%A8%80%E5%8C%85\">定义语言及语言包</a><ul>\n<li><a href=\"#%E8%AF%AD%E8%A8%80%E5%8C%85-json-%E4%BE%8B%E5%AD%90\">语言包 JSON 例子</a></li>\n<li><a href=\"#%E4%B8%BB%E4%BD%93%E7%BB%84%E4%BB%B6-store-%E5%AE%9A%E4%B9%89%E5%BD%93%E5%89%8D%E8%AF%AD%E8%A8%80\">主体组件 store 定义当前语言</a></li>\n<li><a href=\"#%E4%B8%BB%E4%BD%93%E7%BB%84%E4%BB%B6-actions-%E5%AE%9A%E4%B9%89%E8%AF%AD%E8%A8%80%E5%88%87%E6%8D%A2%E8%8E%B7%E5%8F%96%E6%96%B9%E6%B3%95\">主体组件 actions 定义语言切换获取方法</a></li>\n<li><a href=\"#%E7%BB%84%E4%BB%B6%E5%AE%9A%E4%B9%89%E5%9B%BD%E9%99%85%E5%8C%96%E9%85%8D%E7%BD%AE\">组件定义国际化配置</a></li>\n</ul>\n</li>\n<li><a href=\"#%E5%B1%95%E7%A4%BA%E5%A4%9A%E8%AF%AD%E8%A8%80\">展示多语言</a><ul>\n<li><a href=\"#%E4%BE%8B%E5%AD%90\">例子</a></li>\n</ul>\n</li>\n</ul>\n"});

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
/*!***************************************!*\
  !*** ./src/components/i18n/index.tsx ***!
  \***************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _helper_markdown__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../helper/markdown */ "./src/helper/markdown.tsx");
/* harmony import */ var _content_md__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./content.md */ "./src/components/i18n/content.md");




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
//# sourceMappingURL=i18n.js.map