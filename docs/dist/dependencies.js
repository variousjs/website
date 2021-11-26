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
/*!*****************************************!*\
  !*** ./src/components/dependencies.tsx ***!
  \*****************************************/
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
var wp = "// \u6392\u9664 antd \u6253\u5305\nexternals: {\n  antd: {\n    root: 'antd',\n    amd: 'antd',\n  }\n}";
var hl = "<!-- \u5F15\u5165 antd \u6837\u5F0F -->\n<link rel=\"stylesheet\" href=\"https://cdn.jsdelivr.net/npm/antd@4.16.13/dist/antd.min.css\" />\n<script>\nvar config = {\n  // ...,\n  dependencies: {\n    // antd \u4F9D\u8D56 moment\n    moment: 'https://cdn.jsdelivr.net/npm/moment@2.29.1/min/moment.min.js',\n    antd: 'https://cdn.jsdelivr.net/npm/antd@4.16.13/dist/antd-with-locales.min.js',\n\n    // ...,\n  },\n  // ...,\n}\n</script>";
var antd = "import { Button } from 'antd'\n\nexport default () => (\n  <Button>Button</Button>\n)";
var ts = "// react \u63D0\u4F9B\u4E86 @types/react\uFF0C\u53EF\u4EE5\u76F4\u63A5\u5B89\u88C5 typescript \u63D0\u793A\n// \u4F46\u662F antd \u6CA1\u6709\u63D0\u4F9B\uFF08\u4EE5\u524D\u7248\u672C\u63D0\u4F9B\u4E86 @types/antd\uFF0C\u4F46\u540E\u9762\u6CA1\u6709\u7EF4\u62A4\u4E86\uFF09\n// \u8FD9\u91CC\u81EA\u5B9A\u4E49 declaration.d.ts \u6587\u4EF6\ndeclare module 'antd' {\n  import { ComponentType } from 'react'\n\n  export const Button: ComponentType<any>\n}";

var H = function H() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: _component_less__WEBPACK_IMPORTED_MODULE_3__["default"].container
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(antd__WEBPACK_IMPORTED_MODULE_1__.Typography, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Title, {
    level: 2
  }, "\u4F9D\u8D56\u7EC4\u4EF6"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Paragraph, null, "\u4F9D\u8D56\u7EC4\u4EF6\u901A\u5E38\u662F\u591A\u7EC4\u4EF6\u5171\u7528\u7684\u7EC4\u4EF6\uFF0C\u4E3A\u4E86\u907F\u514D\u4EE3\u7801\u91CD\u590D\u6253\u5305\uFF0C\u51CF\u5C11\u52A0\u8F7D\u800C\u516C\u5171\u51FA\u6765\u7684\u7EC4\u4EF6\u3002\u901A\u5E38\u53EF\u4EE5\u662F\u4EE5\u4E0B\u7C7B\u578B"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("ul", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, "UI \u7EC4\u4EF6\u5E93\uFF0C\u4F8B\u5982 \u201Cantd\u201D \u7EC4\u4EF6\u5E93\uFF0C\u63D0\u4F9B\u57FA\u7840 UI \u7EC4\u4EF6"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, "\u5DE5\u5177\u7C7B\uFF0C\u4F8B\u5982 \u201Clodash\u201D\uFF0C\u201Cmoment.js\u201D\uFF0C\u63D0\u4F9B\u57FA\u7840\u80FD\u529B\u652F\u6301"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, "\u6839\u636E\u9879\u76EE\u60C5\u51B5\u5C01\u88C5\u7684\u57FA\u7840\u7EC4\u4EF6\uFF0C\u4F8B\u5982\u57FA\u7840\u7F51\u7EDC\u8BF7\u6C42\uFF0C\u5C01\u88C5\u4E00\u5B9A\u7684\u9A8C\u8BC1\u914D\u7F6E\u8BF7\u6C42\u5E93")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(antd__WEBPACK_IMPORTED_MODULE_1__.Divider, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Paragraph, null, "\u4EE5\u4E0B\u4E3A\u96C6\u6210 \u201Cantd\u201D \u4F9D\u8D56\u7EC4\u4EF6\u4F8B\u5B50"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Title, {
    level: 5
  }, "webpack \u914D\u7F6E"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Paragraph, null, "webpack \u9700\u8981\u914D\u7F6E externals\uFF0C\u907F\u514D\u91CD\u590D\u6253\u5305\u6D6A\u8D39"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((highlighter__WEBPACK_IMPORTED_MODULE_2___default()), {
    code: wp,
    language: "javascript"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Title, {
    level: 5
  }, "\u6A21\u677F\u914D\u7F6E"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Paragraph, null, "\u6A21\u677F\u914D\u7F6E\u5373 VariousJS \u914D\u7F6E\uFF0C\u52A0\u8F7D \u201Cantd\u201D \u8FDB\u6765\uFF0C\u4F9B\u5176\u4ED6\u7EC4\u4EF6\u4F7F\u7528"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((highlighter__WEBPACK_IMPORTED_MODULE_2___default()), {
    language: "html",
    code: hl
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Title, {
    level: 5
  }, "\u7EC4\u4EF6\u4F7F\u7528"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Paragraph, null, "\u7ECF\u8FC7\u4EE5\u4E0A\u5904\u7406\uFF0C\u5176\u4ED6\u7EC4\u4EF6\u53EF\u4EE5\u76F4\u63A5\u4F7F\u7528 \u201Cantd\u201D \u4E86"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((highlighter__WEBPACK_IMPORTED_MODULE_2___default()), {
    language: "jsx",
    code: antd
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Title, {
    level: 5
  }, "TypeScript \u63D0\u793A"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Paragraph, null, "\u7531\u4E8E\u5E76\u6CA1\u6709\u5B89\u88C5 \u201Cantd\u201D \u800C\u76F4\u63A5\u4F7F\u7528\uFF0C\u8FD9\u65F6\u5019 TypeScript \u4F1A\u63D0\u793A\u4E0D\u5B58\u5728\u6A21\u5757\uFF0C\u89E3\u51B3\u65B9\u5F0F\u53EF\u4EE5\u662F\u76F4\u63A5\u5B89\u88C5 \u201Cantd\u201D\u3002\u6216\u8005\u81EA\u5B9A\u4E49 types"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((highlighter__WEBPACK_IMPORTED_MODULE_2___default()), {
    language: "typescript",
    code: ts
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (H);
}();
/******/ 	return __webpack_exports__;
/******/ })()
;
});;
//# sourceMappingURL=dependencies.js.map