define(["react","antd"], function(__WEBPACK_EXTERNAL_MODULE_react__, __WEBPACK_EXTERNAL_MODULE_antd__) { return /******/ (function() { // webpackBootstrap
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
  !*** ./src/components/introduction.tsx ***!
  \*****************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _component_less__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./component.less */ "./src/components/component.less");




var H = function H() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: _component_less__WEBPACK_IMPORTED_MODULE_2__["default"].container
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(antd__WEBPACK_IMPORTED_MODULE_1__.Typography, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(antd__WEBPACK_IMPORTED_MODULE_1__.Typography.Title, {
    level: 2
  }, "VariousJS \u7B80\u4ECB"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(antd__WEBPACK_IMPORTED_MODULE_1__.Typography.Paragraph, null, "VariousJS \u662F\u4E00\u4E2A\u57FA\u4E8E RequireJS + React \u7684\u4E00\u4E2A\u8FD0\u884C\u6846\u67B6\u3002\u63D0\u4F9B\u7075\u6D3B\u7684\u7EC4\u4EF6\u52A0\u8F7D\u53CA\u901A\u4FE1\u80FD\u529B\uFF0C\u63D0\u4F9B\u63D0\u9AD8\u591A\u7EC4\u4EF6\u5408\u4F5C\u53CA\u590D\u7528\u6548\u7387\u7684\u4E00\u79CD\u65B9\u6848\u3002"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(antd__WEBPACK_IMPORTED_MODULE_1__.Typography.Paragraph, null, "\u9700\u8981\u7279\u522B\u8BF4\u660E\u7684\u662F\uFF0CVariousJS \u5E76\u4E0D\u662F\u5FAE\u524D\u7AEF\u6846\u67B6\u3002\u5B83\u5E76\u4E0D\u662F\u4E3A\u4E86\u89E3\u51B3\u591A\u4E1A\u52A1\u591A\u7CFB\u7EDF\u9879\u76EE\u5408\u5E76\u5728\u4E00\u8D77\u7684\u95EE\u9898\u3002"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(antd__WEBPACK_IMPORTED_MODULE_1__.Typography.Title, {
    level: 3
  }, "\u8BBE\u8BA1\u7406\u5FF5"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(antd__WEBPACK_IMPORTED_MODULE_1__.Typography.Paragraph, null, "VariousJS \u662F\u63D0\u4F9B\u4E00\u79CD\u89E3\u51B3\u7EC4\u4EF6\u5F00\u53D1/\u52A0\u8F7D/\u590D\u7528\u9EBB\u70E6\u7684\u95EE\u9898\u89E3\u51B3\u65B9\u6848"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(antd__WEBPACK_IMPORTED_MODULE_1__.Typography.Title, {
    level: 5
  }, "\u4E00\u5207\u7686\u4E3A\u7EC4\u4EF6"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(antd__WEBPACK_IMPORTED_MODULE_1__.Typography.Paragraph, null, "\u5728 VariousJS \u4F53\u7CFB\u4E0B\uFF0C\u4EFB\u4F55\u9875\u9762/\u529F\u80FD/\u5C0F\u90E8\u4EF6\u90FD\u53EF\u4EE5\u8BA4\u4E3A\u662F\u4E00\u4E2A\u7EC4\u4EF6"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(antd__WEBPACK_IMPORTED_MODULE_1__.Typography.Title, {
    level: 5
  }, "\u72EC\u7ACB\u89E3\u8026"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(antd__WEBPACK_IMPORTED_MODULE_1__.Typography.Paragraph, null, "\u7EC4\u4EF6\u4EE3\u7801\u72EC\u7ACB\uFF0C\u72EC\u7ACB\u5F00\u53D1\uFF0C\u4E92\u4E0D\u5E72\u6270\u3002\u4E0D\u63A8\u5D07 monorepo \u65B9\u5F0F\u7BA1\u7406\u4EE3\u7801\uFF0C\u907F\u514D\u9879\u76EE\u968F\u7740\u9700\u6C42\u53D8\u66F4/\u589E\u52A0\u9010\u6B65\u53D8\u5F97\u96BE\u4EE5\u7EF4\u62A4"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(antd__WEBPACK_IMPORTED_MODULE_1__.Divider, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(antd__WEBPACK_IMPORTED_MODULE_1__.Typography.Title, {
    level: 3
  }, "\u7279\u6027"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(antd__WEBPACK_IMPORTED_MODULE_1__.Typography.Paragraph, null, "VariousJS \u63D0\u4F9B\u4E00\u4E2A\u52A8\u6001\u52A0\u8F7D\u7EC4\u4EF6\u73AF\u5883\uFF0C\u5E76\u63D0\u4F9B\u65B9\u4FBF\u7684\u901A\u4FE1\u673A\u5236\u3002\u53EF\u4EE5\u7C7B\u6BD4\u4E3A\u5FAE\u4FE1\u53CA\u5FAE\u4FE1\u5C0F\u7A0B\u5E8F\u5173\u7CFB\uFF0C\u63D0\u4F9B\u7684\u73AF\u5883\u7C7B\u6BD4\u5FAE\u4FE1\u4E3B\u4F53\uFF0C\u7EC4\u4EF6\u5219\u53EF\u4EE5\u7C7B\u6BD4\u6210\u5C0F\u7A0B\u5E8F"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(antd__WEBPACK_IMPORTED_MODULE_1__.Typography.Title, {
    level: 5
  }, "\u72EC\u7ACB"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(antd__WEBPACK_IMPORTED_MODULE_1__.Typography.Paragraph, null, "\u7EC4\u4EF6\u53EF\u4EE5\u7C7B\u6BD4\u5C0F\u7A0B\u5E8F\uFF0C\u5F00\u53D1/\u6D4B\u8BD5/\u90E8\u7F72\u90FD\u662F\u5B8C\u5168\u72EC\u7ACB\u7684"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(antd__WEBPACK_IMPORTED_MODULE_1__.Typography.Title, {
    level: 5
  }, "\u6309\u9700\u52A0\u8F7D"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(antd__WEBPACK_IMPORTED_MODULE_1__.Typography.Paragraph, null, "\u57FA\u4E8E RequireJS\uFF0C\u5929\u7136\u652F\u6301\u7EC4\u4EF6\u6309\u9700\u52A0\u8F7D\uFF0C\u53EA\u6709\u5F53\u524D\u9875\u9762\u7528\u5230\u7684\u7EC4\u4EF6\u624D\u4F1A\u52A0\u8F7D\uFF0C\u5E76\u4E14\u5DF2\u52A0\u8F7D\u7EC4\u4EF6\u4E0D\u4F1A\u91CD\u590D\u52A0\u8F7D"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(antd__WEBPACK_IMPORTED_MODULE_1__.Typography.Title, {
    level: 5
  }, "\u52A8\u6001\u52A0\u8F7D"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(antd__WEBPACK_IMPORTED_MODULE_1__.Typography.Paragraph, null, "\u5141\u8BB8\u52A8\u6001\u52A0\u8F7D\u7EC4\u4EF6\uFF0C\u751A\u81F3\u53EF\u4EE5\u52A0\u8F7D\u7B2C\u4E09\u65B9 React \u7EC4\u4EF6\u3002\u7C7B\u6BD4\u5C0F\u7A0B\u5E8F\u7684\u4F7F\u7528\uFF0C\u53EA\u9700\u8981\u6307\u5B9A\u7EC4\u4EF6 js URL \u5730\u5740\u5373\u53EF\u52A0\u8F7D\u8FDB\u6765"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(antd__WEBPACK_IMPORTED_MODULE_1__.Typography.Title, {
    level: 5
  }, "\u9884\u52A0\u8F7D"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(antd__WEBPACK_IMPORTED_MODULE_1__.Typography.Paragraph, null, "\u53EF\u4EE5\u9884\u5148\u52A0\u8F7D\u7EC4\u4EF6\u8D44\u6E90\uFF0C\u63D0\u5347\u7528\u6237\u4F53\u9A8C"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(antd__WEBPACK_IMPORTED_MODULE_1__.Typography.Title, {
    level: 5
  }, "\u901A\u4FE1"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(antd__WEBPACK_IMPORTED_MODULE_1__.Typography.Paragraph, null, "\u5F3A\u5927\u7684\u901A\u4FE1\u673A\u5236\uFF0C\u5141\u8BB8\u7EC4\u4EF6\u4E0E\u5168\u5C40\u95F4\u4E92\u76F8\u901A\u4FE1\uFF0C\u540C\u65F6\u4E5F\u652F\u6301\u7EC4\u4EF6\u95F4\u4E92\u76F8\u901A\u4FE1"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(antd__WEBPACK_IMPORTED_MODULE_1__.Typography.Title, {
    level: 5
  }, "\u7EC4\u4EF6\u5171\u4EAB"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(antd__WEBPACK_IMPORTED_MODULE_1__.Typography.Paragraph, null, "\u57FA\u4E8E RequireJS \u6A21\u5757\u5171\u4EAB\u673A\u5236\uFF0C\u7EC4\u4EF6\u90FD\u53EF\u4EE5\u5171\u4EAB\u4F7F\u7528"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(antd__WEBPACK_IMPORTED_MODULE_1__.Typography.Title, {
    level: 5
  }, "\u5BB9\u9519\u673A\u5236"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(antd__WEBPACK_IMPORTED_MODULE_1__.Typography.Paragraph, null, "\u7EC4\u4EF6\u95F4\u5404\u81EA\u72EC\u7ACB\uFF0C\u90FD\u6709\u72EC\u7ACB\u7684\u9519\u8BEF\u5224\u65AD\u673A\u5236\u53CA\u91CD\u8BD5\u673A\u5236\uFF0C\u7EC4\u4EF6\u7684\u9519\u8BEF\u5E76\u4E0D\u4F1A\u5F71\u54CD\u5176\u4ED6\u3002\u7C7B\u6BD4\u5C0F\u7A0B\u5E8F\u51FA\u9519\u5E76\u4E0D\u4F1A\u5F71\u54CD\u5FAE\u4FE1\u4E3B\u4F53\u6216\u8005\u5176\u4ED6\u5C0F\u7A0B\u5E8F\u3002\u8FD9\u4E00\u70B9\u4FDD\u8BC1\u7EBF\u4E0A\u53D1\u5E03\u7684\u5B89\u5168\u7A33\u5B9A\u6027"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(antd__WEBPACK_IMPORTED_MODULE_1__.Typography.Title, {
    level: 5
  }, "\u5FEB\u901F\u63A5\u5165"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(antd__WEBPACK_IMPORTED_MODULE_1__.Typography.Paragraph, null, "\u5728 VariousJS \u73AF\u5883\u4E0B\uFF0C\u7EC4\u4EF6\u7684\u63A5\u5165\u662F\u975E\u5E38\u65B9\u4FBF\u7684\uFF0C\u53EA\u9700\u8981\u6307\u5B9A\u7EC4\u4EF6\u914D\u7F6E\u5373\u53EF\uFF0C\u4E0D\u9700\u8981\u91CD\u65B0\u6784\u5EFA\u3002\u53E6\u5916\u53D1\u5E03/\u56DE\u6EDA\u5207\u6362\u7248\u672C\u53F7\u4E5F\u662F\u76F4\u63A5\u4FEE\u6539\u914D\u7F6E\u5373\u53EF\u3002\u57FA\u4E8E\u6B64\u7279\u6027\uFF0C\u7EC4\u4EF6\u8FD8\u53EF\u4EE5\u5BF9\u7528\u6237\u8FDB\u884C\u7248\u672C\u7070\u5EA6\u63A7\u5236\u3002\u4FDD\u8BC1\u7EBF\u4E0A\u53D1\u5E03\u5B89\u5168"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(antd__WEBPACK_IMPORTED_MODULE_1__.Typography.Paragraph, null, "\u53E6\u5916\u57FA\u4E8E\u8FD9\u4E2A\u5FEB\u901F\u63A5\u5165\u4E0D\u9700\u8981\u91CD\u65B0\u6784\u5EFA\u7279\u6027\uFF0C\u5176\u4ED6\u57FA\u4E8E VariousJS \u7CFB\u7EDF\u4E5F\u975E\u5E38\u65B9\u4FBF\u63A5\u5165\u7EC4\u4EF6\uFF0C\u7EC4\u4EF6\u5347\u7EA7\u7B49\u64CD\u4F5C"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(antd__WEBPACK_IMPORTED_MODULE_1__.Divider, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(antd__WEBPACK_IMPORTED_MODULE_1__.Typography.Title, {
    level: 3
  }, "\u6280\u672F\u6808\u9650\u5236"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(antd__WEBPACK_IMPORTED_MODULE_1__.Typography.Paragraph, null, "\u7531\u4E8E VariousJS \u57FA\u4E8E RequireJS + React\uFF0C\u6240\u4EE5\u5BF9\u5E94\u7684\u6709\u4EE5\u4E0B\u9650\u5236"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(antd__WEBPACK_IMPORTED_MODULE_1__.Typography.Paragraph, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("ul", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, "\u6240\u6709\u7EC4\u4EF6\u5FC5\u987B\u4E3A React \u7EC4\u4EF6"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, "\u6240\u6709\u7EC4\u4EF6\u5FC5\u987B\u6784\u5EFA\u6253\u5305\u6210 AMD\uFF08UMD\uFF09\u683C\u5F0F")))));
};

/* harmony default export */ __webpack_exports__["default"] = (H);
}();
/******/ 	return __webpack_exports__;
/******/ })()
;
});;
//# sourceMappingURL=introduction.js.map