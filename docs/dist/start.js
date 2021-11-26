define(["react","antd","highlighter"], function(__WEBPACK_EXTERNAL_MODULE_react__, __WEBPACK_EXTERNAL_MODULE_antd__, __WEBPACK_EXTERNAL_MODULE_highlighter__) { return /******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/less-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!./src/components/component.less":
/*!****************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/less-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!./src/components/component.less ***!
  \****************************************************************************************************************************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".container_PppZ6 {\n  margin: 32px 48px 60px;\n  max-width: 720px;\n}\n", "",{"version":3,"sources":["webpack://./src/components/component.less"],"names":[],"mappings":"AAAA;EACE,sBAAA;EACA,gBAAA;AACF","sourcesContent":[".container {\n  margin: 32px 48px 60px;\n  max-width: 720px;\n}\n"],"sourceRoot":""}]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"container": "container_PppZ6"
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

/***/ "./src/components/component.less":
/*!***************************************!*\
  !*** ./src/components/component.less ***!
  \***************************************/
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_less_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_component_less__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!../../node_modules/less-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!./component.less */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/less-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!./src/components/component.less");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_less_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_component_less__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ __webpack_exports__["default"] = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_less_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_component_less__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_less_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_component_less__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_less_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_component_less__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


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

/***/ }),

/***/ "antd":
/*!*********************************************!*\
  !*** external {"root":"antd","amd":"antd"} ***!
  \*********************************************/
/***/ (function(module) {

module.exports = __WEBPACK_EXTERNAL_MODULE_antd__;

/***/ }),

/***/ "highlighter":
/*!***********************************************************!*\
  !*** external {"root":"highlighter","amd":"highlighter"} ***!
  \***********************************************************/
/***/ (function(module) {

module.exports = __WEBPACK_EXTERNAL_MODULE_highlighter__;

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
/*!**********************************!*\
  !*** ./src/components/start.tsx ***!
  \**********************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var highlighter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! highlighter */ "highlighter");
/* harmony import */ var highlighter__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(highlighter__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _component_less__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./component.less */ "./src/components/component.less");




var Title = antd__WEBPACK_IMPORTED_MODULE_1__.Typography.Title,
    Paragraph = antd__WEBPACK_IMPORTED_MODULE_1__.Typography.Paragraph;
var html = "<!doctype html>\n<html>\n<head>\n<meta charset=\"UTF-8\" />\n<title> VariousJS </title>\n</head>\n<body>\n<div id=\"root\"></div>\n<script src=\"https://cdn.jsdelivr.net/npm/requirejs@2.3.6/require.js\"></script>\n<script src=\"https://cdn.jsdelivr.net/npm/@variousjs/various/dist/index.js\"></script>\n<script>\nvar config = {\n  root: '#root',\n  entry: './dist/entry.js',\n  routerMode: 'hash',\n  dependencies: {\n    // \u4F9D\u8D56\u5B9A\u4E49\n    moment: 'https://cdn.jsdelivr.net/npm/moment@2.29.1/min/moment.min.js',\n    antd: 'https://cdn.jsdelivr.net/npm/antd@4.16.13/dist/antd-with-locales.min.js',\n  },\n  components: {\n    // \u7EC4\u4EF6\u5B9A\u4E49\n    introduction: './dist/introduction.js',\n  },\n\n  // \u4EE5\u4E0B\u5C5E\u4E8E\u81EA\u5B9A\u4E49\u5C5E\u6027\n  nav: [\n    {\n      name: '\u7B80\u4ECB',\n      path: '/',\n    },\n    {\n      name: '\u57FA\u7840\u8BF4\u660E',\n      children: [\n        {\n          name: '# Getting started',\n          path: '/doc',\n        },\n        {\n          name: '# Authorization',\n          path: '/doc1',\n        },\n      ],\n    },\n    {\n      name: 'API \u8BF4\u660E',\n      children: [\n        {\n          name: '# Integration',\n          path: '/api',\n        },\n      ],\n    },\n  ],\n\n  pages: [\n    {\n      path: ['/'],\n      components: ['introduction'],\n    },\n  ],\n}\n\nvar various = new window.Various(config)\n\nvarious.onError = function(e) {\n  console.log(e)\n  document.write(e.message)\n}\n\n// \u521D\u59CB\u5316\nvarious.start()\n</script>\n\n</body>\n</html>";
var tf = "interface Config {\n  dependencies?: { [key: string]: string }, // \u4F9D\u8D56\u7EC4\u4EF6\u5B9A\u4E49\n  components: { [key: string]: string }, // \u529F\u80FD\u7EC4\u4EF6\u5B9A\u4E49\n  entry?: string, // \u5BB9\u5668\u7EC4\u4EF6\u5B9A\u4E49\n  routerMode?: 'browser' | 'hash', // react-router \u8DEF\u7531\u6A21\u5F0F\n  root?: string, // \u5E94\u7528\u6E32\u67D3\u9875\u9762\u8282\u70B9\n}";

var H = function H() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: _component_less__WEBPACK_IMPORTED_MODULE_3__["default"].container
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(antd__WEBPACK_IMPORTED_MODULE_1__.Typography, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Title, {
    level: 2
  }, "\u57FA\u7840\u6982\u5FF5"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Paragraph, null, "\u5728 VariousJS \u4F53\u7CFB\u4E0B\uFF0C\u4E00\u5207\u529F\u80FD\uFF0C\u4F9D\u8D56\uFF0C\u9875\u9762\u90FD\u53EF\u4EE5\u8BA4\u4E3A\u662F\u4E00\u4E2A\u7EC4\u4EF6\uFF0C\u867D\u7136\u5E95\u5C42\u6784\u5EFA\u6A21\u5F0F\u90FD\u662F\u4E00\u76F4\u7684 AMD \u6A21\u5F0F\uFF0C\u4F46\u6709\u4E00\u5B9A\u7684\u533A\u522B"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Title, {
    level: 3
  }, "\u7EC4\u4EF6\u8BF4\u660E"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Paragraph, null, "\u7EC4\u4EF6\u7C7B\u578B\u53EF\u4EE5\u5927\u6982\u5206\u4E3A\u4E09\u7C7B\uFF0C\u5BF9\u5E94\u63D0\u4F9B\u4E0D\u540C\u7684\u80FD\u529B"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Title, {
    level: 5
  }, "\u5BB9\u5668\u7EC4\u4EF6"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Paragraph, null, "\u5BB9\u5668\u7EC4\u4EF6\u662F\u5168\u5C40\u9875\u9762\u5B9A\u4E49\u7EC4\u4EF6\uFF0C\u5305\u62EC\u9875\u9762\u8DEF\u7531\u5B9A\u4E49\uFF0C\u5982\u4F55\u653E\u7F6E\u7EC4\u4EF6\u5B9A\u4E49\u7B49\u3002\u53E6\u5916\u5B9A\u4E49\u63D0\u4F9B\u5168\u5C40\u6570\u636E\u8BBF\u95EE\u3002\u53EF\u4EE5\u6839\u636E\u914D\u7F6E\u751F\u6210\u5404\u79CD\u81EA\u5B9A\u4E49\u9875\u9762\u3002\u6B64\u5BB9\u5668\u7EC4\u4EF6\u4E3A\u5FC5\u987B\u63D0\u4F9B"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Title, {
    level: 5
  }, "\u4F9D\u8D56\u7EC4\u4EF6"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Paragraph, null, "\u4F9D\u8D56\u7EC4\u4EF6\u5373\u516C\u5171\uFF08\u5171\u4EAB\uFF09\u7EC4\u4EF6\uFF0C\u4F8B\u5982 \u2018antd\u2019 \u57FA\u7840 UI \u7EC4\u4EF6\u5E93\uFF0C\u9AD8\u4EAE\u4EE3\u7801\u7EC4\u4EF6\u7B49\u3002\u5F15\u5165\u4F9D\u8D56\u7EC4\u4EF6\u51CF\u5C11\u91CD\u590D\u52A0\u8F7D\u7684\u6D6A\u8D39\u3002VariousJS \u5DF2\u7ECF\u5185\u7F6E \u2018React\u2019\uFF0C\u2018ReactDOM\u2019\uFF0C\u2018ReactRouterDOM\u2019 \u7B49\u57FA\u7840\u4F9D\u8D56\uFF0C\u5176\u4ED6\u7EC4\u4EF6\u53EF\u4EE5\u76F4\u63A5\u4F7F\u7528"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Title, {
    level: 5
  }, "\u529F\u80FD\u7EC4\u4EF6"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Paragraph, null, "\u529F\u80FD\u7EC4\u4EF6\u662F\u4E00\u4E2A\u72EC\u7ACB\u7684\u7EC4\u4EF6\uFF0C\u4E0D\u8026\u5408\u5176\u4ED6\u7EC4\u4EF6\uFF0C\u53EF\u4EE5\u5355\u72EC\u8FD0\u884C\u3002\u53EF\u4EE5\u975E\u5E38\u7B80\u5355\uFF0C\u53EF\u4EE5\u662F\u4E00\u4E2A\u5C0F\u6309\u94AE\uFF0C\u4E5F\u53EF\u4EE5\u975E\u5E38\u590D\u6742\uFF0C\u751A\u81F3\u53EF\u4EE5\u662F\u4E00\u4E2A\u9875\u9762\u3002\u8FD9\u4E9B\u529F\u80FD\u7EC4\u4EF6\u53EF\u4EE5\u88AB\u914D\u7F6E\u7531\u5BB9\u5668\u7EC4\u4EF6\u8FDB\u884C\u8DEF\u7531\u5206\u914D\u653E\u7F6E\u5230\u5BF9\u5E94\u4F4D\u7F6E\u63D0\u4F9B\u529F\u80FD"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(antd__WEBPACK_IMPORTED_MODULE_1__.Divider, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Title, {
    level: 3
  }, "\u9875\u9762\u7ED3\u6784"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Paragraph, null, "\u56E0\u4E3A VariousJS \u57FA\u4E8E RequireJS\uFF0C\u6240\u4EE5\u5176\u6838\u5FC3\u5E76\u4E0D\u53C2\u4E0E\u5E94\u7528\u6253\u5305\uFF0C\u53EA\u9700\u8981\u9875\u9762 script \u5F15\u5165\u5373\u53EF\u3002\u5E76\u63D0\u4F9B\u4E00\u4E9B\u53C2\u6570\u914D\u7F6E"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((highlighter__WEBPACK_IMPORTED_MODULE_2___default()), {
    code: html,
    language: "html"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(antd__WEBPACK_IMPORTED_MODULE_1__.Divider, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Title, {
    level: 3
  }, "\u53C2\u6570\u914D\u7F6E"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Paragraph, null, "\u5BB9\u5668\u7EC4\u4EF6\u53EF\u4EE5\u8BFB\u53D6\u81EA\u5B9A\u4E49\u914D\u7F6E\u53C2\u6570\uFF0C\u53E6\u5916\u9700\u8981\u5B9A\u4E49\u7EC4\u4EF6\u914D\u7F6E\uFF0C\u4EE5\u4E0B\u4E3A\u5185\u7F6E\u53C2\u6570\u914D\u7F6E\u8BF4\u660E"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((highlighter__WEBPACK_IMPORTED_MODULE_2___default()), {
    code: tf,
    language: "typescript"
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (H);
}();
/******/ 	return __webpack_exports__;
/******/ })()
;
});;
//# sourceMappingURL=start.js.map