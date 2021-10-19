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
/*!********************************!*\
  !*** ./src/components/dev.tsx ***!
  \********************************/
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
var wp = "// webpack \u6253\u5305\u53C2\u8003\nmodule.exports = {\n  // ...,\n  output: {\n    // ...,\n    libraryTarget: 'amd', // \u6307\u5B9A amd \u683C\u5F0F\n    // ...,\n  },\n  // ...,\n}";
var ins = "$ cd <dir>\n$ npm init @variousjs\n$ npm i\n\n# \u5F00\u53D1\n$ npm start\n\n# \u6784\u5EFA\n$ npm run build";
var fl = "\u251C\u2500\u2500 LICENSE\n\u251C\u2500\u2500 README.md\n\u251C\u2500\u2500 demo\n|  \u251C\u2500\u2500 dist             # \u6784\u5EFA\u76EE\u5F55\n\u2502  \u2514\u2500\u2500 index.html       # \u6A21\u677F\n\u251C\u2500\u2500 node_modules\n\u251C\u2500\u2500 package-lock.json\n\u251C\u2500\u2500 package.json\n\u251C\u2500\u2500 src\n\u2502  \u251C\u2500\u2500 components       # \u7EC4\u4EF6\n\u2502  \u251C\u2500\u2500 declaration.d.ts\n\u2502  \u251C\u2500\u2500 entry            # \u5165\u53E3\u7EC4\u4EF6\n\u2502  \u2514\u2500\u2500 types.ts\n\u251C\u2500\u2500 tsconfig.json\n\u251C\u2500\u2500 webpack.base.config.js\n\u251C\u2500\u2500 webpack.component.config.js\n\u2514\u2500\u2500 webpack.entry.config.js";
var st = "\"start\": \"webpack --progress --config webpack.component.config.js & webpack serve --config webpack.entry.config.js --progress\"";
var ex = "externals: {\n  antd: {\n    root: 'antd',\n    amd: 'antd',\n  },\n  highlighter: {\n    root: 'highlighter',\n    amd: 'highlighter',\n  },\n}";

var H = function H() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: _component_less__WEBPACK_IMPORTED_MODULE_3__["default"].container
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(antd__WEBPACK_IMPORTED_MODULE_1__.Typography, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Title, {
    level: 2
  }, "\u5F00\u53D1\u8BF4\u660E"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Paragraph, null, "VariousJS \u9700\u8981\u9700\u8981\u63D0\u4F9B html \u6A21\u677F\uFF0C\u5BB9\u5668\u7EC4\u4EF6\u5E94\u914D\u7F6E\u5373\u53EF\u751F\u6210\u4E00\u4E2A\u7F51\u7AD9\u3002\u4F46\u6709\u4EE5\u4E0B\u7684\u9650\u5236\u53CA\u914D\u7F6E\u8BF4\u660E"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Title, {
    level: 3
  }, "\u811A\u624B\u67B6"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Paragraph, null, "\u7531\u4E8E VariosuJS \u7684\u7EC4\u4EF6\u5F00\u53D1\u53CA\u6253\u5305\u8DDF\u666E\u901A\u5F00\u53D1\u6709\u5F88\u591A\u4E0D\u4E00\u6837\u7684\u5730\u65B9\uFF0C\u8FD9\u91CC\u63D0\u4F9B\u811A\u624B\u67B6\uFF0C\u53EF\u4EE5\u5FEB\u901F\u5F00\u59CB\u7EC4\u4EF6\u5F00\u53D1"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Paragraph, null, "\u5B89\u88C5 VariousJS \u975E\u5E38\u65B9\u4FBF\u7B80\u5355"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((highlighter__WEBPACK_IMPORTED_MODULE_2___default()), {
    language: "bash",
    code: ins
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Paragraph, null, "\u811A\u624B\u67B6\u9ED8\u8BA4\u96C6\u6210 TypeScript\uFF0CESlint"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((highlighter__WEBPACK_IMPORTED_MODULE_2___default()), {
    language: "bash",
    code: fl
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Paragraph, null, "\u7531\u4E8E\u591A\u7EC4\u4EF6\u5F00\u53D1\uFF0Cwebpack \u914D\u7F6E\u4F1A\u6709\u591A\u5165\u53E3\uFF0C\u5F00\u53D1\u65F6\u5019\u547D\u4EE4\u4F1A\u7279\u6B8A\u5904\u7406\uFF0C\u907F\u514D\u591A\u5165\u53E3\u5BFC\u81F4 dev server \u91CD\u590D\u52A0\u8F7D\u95EE\u9898"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((highlighter__WEBPACK_IMPORTED_MODULE_2___default()), {
    language: "json",
    code: st
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Paragraph, null, "\u5982\u679C\u5B9A\u4E49\u4E86\u4F9D\u8D56\u7EC4\u4EF6\uFF0C\u8BF7\u6CE8\u610F\u9700\u8981 webpack externals \u914D\u7F6E\u6DFB\u52A0\u6392\u9664"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((highlighter__WEBPACK_IMPORTED_MODULE_2___default()), {
    language: "javascript",
    code: ex
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(antd__WEBPACK_IMPORTED_MODULE_1__.Divider, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Paragraph, null, "\u5982\u679C\u4F7F\u7528\u81EA\u5B9A\u4E49\u6784\u5EFA\u5DE5\u5177\u5F00\u53D1 VariousJS \u7EC4\u4EF6\uFF0C\u9700\u8981\u6CE8\u610F\u4EE5\u4E0B\u8BF4\u660E"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Title, {
    level: 4
  }, "\u7EC4\u4EF6\u9650\u5236"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Paragraph, null, "\u7EC4\u4EF6\u5FC5\u987B\u4E3A AMD \u6A21\u5F0F\u7684 React \u7EC4\u4EF6\u3002\u53EA\u8981\u7B26\u5408\u8981\u6C42\u7684\u7EC4\u4EF6\u90FD\u53EF\u4EE5\u52A0\u8F7D\uFF0C\u751A\u81F3\u53EF\u4EE5\u662F\u7B2C\u4E09\u65B9\u7EC4\u4EF6"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Title, {
    level: 4
  }, "\u5185\u7F6E\u4F9D\u8D56"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Paragraph, null, "VariousJS \u5185\u7F6E\u4E00\u4E9B\u5E95\u5C42\u4F9D\u8D56\uFF0C\u5176\u4ED6\u7EC4\u4EF6\u5F00\u53D1\u53EF\u4EE5\u76F4\u63A5\u4F7F\u7528"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("ul", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, "React"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, "React-DOM"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, "React-Router-DOM"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, "nycticorax: ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
    rel: "noreferrer",
    target: "_blank",
    href: "https://github.com/fratercula/nycticorax"
  }, "https://github.com/fratercula/nycticorax"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Title, {
    level: 4
  }, "\u7EC4\u4EF6\u6253\u5305"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Paragraph, null, "\u7EC4\u4EF6\u9700\u8981\u6253\u5305\u6210 AMD \u683C\u5F0F\uFF08UMD \u4E5F\u53EF\u4EE5\uFF09\uFF0C\u4F46\u662F\u4E0D\u80FD\u6307\u5B9A library name\uFF0C\u5982\u679C\u6307\u5B9A\u4E86\u53EF\u80FD\u4F1A\u9020\u6210\u627E\u4E0D\u5230\u7EC4\u4EF6\u9519\u8BEF"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((highlighter__WEBPACK_IMPORTED_MODULE_2___default()), {
    language: "javascript",
    code: wp
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Title, {
    level: 4
  }, "\u7EC4\u4EF6\u5F00\u53D1"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Paragraph, null, "\u7531\u4E8E\u591A\u4E2A\u7EC4\u4EF6\u7531 RequireJS \u5F15\u5165\uFF0C\u8FD9\u65F6\u5019 webpack dev \u6A21\u5F0F\u7684\u914D\u7F6E\u4E0D\u80FD\u4F7F\u7528\u5E73\u5E38\u5165\u53E3\u52A0\u8F7D\u6A21\u5F0F\uFF0C\u9700\u8981\u5165\u53E3\u7279\u6B8A\u914D\u7F6E\uFF0C\u4E0D\u7136\u53EF\u80FD\u5BFC\u81F4\u5931\u6548\u6216\u8005\u91CD\u590D\u52A0\u8F7D\u70ED\u66F4\u65B0 js \u7B49\u9519\u8BEF\u60C5\u51B5"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Title, {
    level: 4
  }, "\u6D4F\u89C8\u5668 Polyfill"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Paragraph, null, "\u8003\u8651\u5230\u7EC4\u4EF6\u4EE3\u7801\u5171\u4EAB\u53CA\u51CF\u5C11\u91CD\u590D\u4EE3\u7801\u52A0\u8F7D\uFF0CVariousJS \u6838\u5FC3 js \u5DF2\u7ECF\u5C06\u6D4F\u89C8\u5668\u517C\u5BB9 Polyfill \u5305\u542B\uFF0C\u6240\u4EE5\u7EC4\u4EF6\u6784\u5EFA\u9002\u5408\u9700\u8981\u6CE8\u610F\u4E0D\u9700\u8981\u6DFB\u52A0\u989D\u5916\u7684 Polyfill \u652F\u6301")));
};

/* harmony default export */ __webpack_exports__["default"] = (H);
}();
/******/ 	return __webpack_exports__;
/******/ })()
;
});;
//# sourceMappingURL=dev.js.map