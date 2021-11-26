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
/*!**************************************!*\
  !*** ./src/components/container.tsx ***!
  \**************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var highlighter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! highlighter */ "highlighter");
/* harmony import */ var highlighter__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(highlighter__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _component_less__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./component.less */ "./src/components/component.less");




var Title = antd__WEBPACK_IMPORTED_MODULE_1__.Typography.Title,
    Paragraph = antd__WEBPACK_IMPORTED_MODULE_1__.Typography.Paragraph,
    Link = antd__WEBPACK_IMPORTED_MODULE_1__.Typography.Link;
var et = "// \u5206\u522B\u662F \u5168\u5C40\u6570\u636E/\u5168\u5C40\u6570\u636E\u64CD\u4F5C/\u9875\u9762\u5B9A\u4E49\u7EC4\u4EF6/\u52A0\u8F7D\u63D0\u793A\u7EC4\u4EF6/\u9519\u8BEF\u63D0\u793A\u7EC4\u4EF6\nexport { default as store } from './store'\nexport { default as actions } from './actions'\nexport { default as Container } from './container'\nexport { default as Loader } from './loader'\nexport { default as Error } from './error'";
var st = "// store.ts\nexport default {\n  user: {\n    name: 'various',\n  },\n}";
var ac = "// actions.ts\nimport { Actions } from '@variousjs/various'\nimport store from './store'\n\ntype Store = typeof store\n\nconst actions: Actions<Store> = {\n  async setName({ dispatch, getStore }, value) {\n    await new Promise((r) => setTimeout(r, 1000))\n    const { user } = getStore()\n    user.name = value\n    dispatch({ user })\n  },\n}\n\nexport default actions";
var ct = "import { RouteComponentProps } from 'react-router-dom'\nimport { ComponentType, ReactNode } from 'react'\n\ntype $dispatch = (type: string, method: string, value?: any) => unknown\ntype $render = (params: {\n  name: string,\n  url?: string,\n  module?: string,\n  props?: { [key: string]: any },\n  target: Element | null,\n  onMounted?: () => void,\n}) => () => void\ntype $preload = (names: string[]) => Promise<void>\n\n// \u6CDB\u578B\uFF0CS \u4E3A\u5168\u5C40\u6570\u636E\u7C7B\u578B\u5B9A\u4E49\uFF0CC \u4E3A\u81EA\u5B9A\u4E49\u5C5E\u6027\nexport interface ContainerProps<S = {}, C = {}> {\n  Router: ComponentType<{ children?: ReactNode }>,          // \u8DEF\u7531\u7EC4\u4EF6\n  $config: Readonly<C>,                                     // \u81EA\u5B9A\u4E49\u914D\u7F6E\n  // \u6839\u636E\u7EC4\u4EF6\u914D\u7F6E\u7684\u540D\u5B57\u751F\u6210 React \u7EC4\u4EF6\n  $component: (name: string) => ComponentType<{\n    silent?: boolean,\n    [key: string]: any,\n  }>,\n  $store: Readonly<S>,                                      // \u5168\u5C40\u6570\u636E\n  $mounted: string[],                                       // \u9875\u9762\u5F53\u524D\u52A0\u8F7D\u7684\u7EC4\u4EF6\n  $dispatch: $dispatch,                                     // \u7EC4\u4EF6/\u5168\u5C40\u901A\u4FE1\u65B9\u6CD5\n  $render: $render,                                         // \u52A8\u6001\u52A0\u8F7D\u7EC4\u4EF6\u65B9\u6CD5\n  $preload: $preload,                                       // \u7EC4\u4EF6\u9884\u52A0\u8F7D\u65B9\u6CD5\n  $router: RouteComponentProps<{ [key: string]: string }>,  // \u5F53\u524D\u9875\u9762\u8DEF\u7531\u53C2\u6570\n}";
var ctx = "import React, { Component, ComponentType } from 'react'\nimport { Route, Link } from 'react-router-dom'\nimport { ContainerProps } from '@variousjs/various'\nimport store from './store'\n\ntype Store = typeof store\ntype Config = {\n  pages: {\n    path: string[] | string,\n    components: string[],\n  }[],\n}\n\nclass Container extends Component<ContainerProps<Store, Config>> {\n  render() {\n    const { Router, $component, $config, $router } = this.props\n\n    return (\n      <Router>\n        {\n          $config.pages.map(({ path, components }) => {\n            const cs = () => components.map((name) => {\n              const C = $component(name)\n              return (\n                <div key={name}>\n                  <C />\n                </div>\n              )\n            })\n\n            return (\n              <Route\n                key={Array.isArray(path) ? path.join() : path}\n                exact\n                path={path}\n                component={cs as unknown as ComponentType}\n              />\n            )\n          })\n        }\n      </Router>\n    )\n  }\n}\n\nexport default Container";
var es = "export interface ErrorProps {\n  reload?: () => void,\n  type: 'LOADING_ERROR' | 'DEPENDENCIES_LOADING_ERROR' | 'NOT_DEFINED' | 'INVALID_COMPONENT' | 'SCRIPT_ERROR' | 'ROUTER_ERROR' | 'CONTAINER_ERROR',\n  message?: string,\n}";
var col = [{
  title: '类型',
  dataIndex: 'type'
}, {
  title: '描述',
  dataIndex: 'desc'
}, {
  title: '是否可以重新加载',
  dataIndex: 'reloadable'
}];
var data = [{
  type: 'LOADING_ERROR',
  desc: '组件加载失败',
  reloadable: 'yes'
}, {
  type: 'DEPENDENCIES_LOADING_ERROR',
  desc: '组件依赖加载失败',
  reloadable: 'yes'
}, {
  type: 'NOT_DEFINED',
  desc: '组件未定义',
  reloadable: 'no'
}, {
  type: 'INVALID_COMPONENT',
  desc: '错误的组件类型',
  reloadable: 'no'
}, {
  type: 'SCRIPT_ERROR',
  desc: '组件运行出错了',
  reloadable: 'yes'
}, {
  type: 'ROUTER_ERROR',
  desc: '页面路由出错',
  reloadable: 'no'
}, {
  type: 'CONTAINER_ERROR',
  desc: '容器组件出错了',
  reloadable: 'no'
}];
var er = "import React, { FC } from 'react'\nimport { Alert, Button } from 'antd'\nimport { ErrorProps } from '@variousjs/various'\n\nconst errorComponent: FC<ErrorProps> = ({ reload, type, message }) => (\n  <>\n    <Alert\n      message=\"Error\"\n      description={message || '\u7EC4\u4EF6\u9519\u8BEF'}\n      type=\"error\"\n    />\n    {\n      reload && <Button onClick={reload}>\u5237\u65B0</Button>\n    }\n  </>\n)\n\nexport default errorComponent";
var ld = "import React from 'react'\nimport { Skeleton } from 'antd'\n\nexport default function Loader() {\n  return (\n    <div style={{ padding: '32px 48px 60px' }}>\n      <Skeleton active />\n    </div>\n  )\n}";
var cst = "// ...\nconst C = $component(name)\nreturn (\n  <div key={name}>\n    <C slient />\n  </div>\n)\n// ...";

var H = function H() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: _component_less__WEBPACK_IMPORTED_MODULE_3__["default"].container
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(antd__WEBPACK_IMPORTED_MODULE_1__.Typography, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Title, {
    level: 2
  }, "\u5BB9\u5668\u7EC4\u4EF6"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Paragraph, null, "\u5BB9\u5668\u7EC4\u4EF6\u7528\u4E8E\u5B9A\u4E49\u9875\u9762\u7ED3\u6784\uFF0C\u5168\u5C40\u6570\u636E\uFF0C\u63A7\u5236\u7EC4\u4EF6\u52A0\u8F7D\u3002\u53EF\u4EE5\u6839\u636E\u81EA\u5B9A\u4E49\u914D\u7F6E\u751F\u6210\u5404\u79CD\u7C7B\u578B\u9875\u9762"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Paragraph, null, "\u5BB9\u5668\u7EC4\u4EF6\u9700\u8981\u5BFC\u51FA\u4EE5\u4E0B\u6A21\u5757"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((highlighter__WEBPACK_IMPORTED_MODULE_2___default()), {
    language: "ts",
    code: et
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Title, {
    level: 4
  }, "\u5168\u5C40\u6570\u636E"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Paragraph, null, "\u5168\u5C40\u6570\u636E\u53EF\u4EE5\u88AB\u6240\u6709\u7EC4\u4EF6\u8BBF\u95EE\uFF0C\u901A\u5E38\u7528\u4E8E\u5B58\u50A8\u9700\u8981\u88AB\u5168\u5C40\u8BBF\u95EE\u6570\u636E\uFF0C\u4F8B\u5982\u7528\u6237\u9A8C\u8BC1\u4FE1\u606F"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((highlighter__WEBPACK_IMPORTED_MODULE_2___default()), {
    language: "ts",
    code: st
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(antd__WEBPACK_IMPORTED_MODULE_1__.Divider, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Title, {
    level: 4
  }, "\u6570\u636E\u64CD\u4F5C"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Paragraph, null, "\u5B9A\u4E49\u8BBF\u95EE\u5168\u5C40\u6570\u636E\u65B9\u6CD5\uFF08\u6570\u636E\u5904\u7406\uFF09\uFF0C\u540C\u65F6\u63D0\u4F9B\u6539\u53D8\u5168\u5C40\u6570\u636E\u65B9\u6CD5\u3002\u6570\u636E\u64CD\u4F5C\u57FA\u4E8E ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Link, {
    target: "_blank",
    href: "https://github.com/fratercula/nycticorax"
  }, "nycticorax")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((highlighter__WEBPACK_IMPORTED_MODULE_2___default()), {
    code: ac,
    language: "ts"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(antd__WEBPACK_IMPORTED_MODULE_1__.Divider, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Title, {
    level: 4
  }, "\u9875\u9762\u5B9A\u4E49"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Paragraph, null, "\u9875\u9762\u5B9A\u4E49\u7EC4\u4EF6\u7528\u4E8E\u6839\u636E\u81EA\u5B9A\u4E49\u914D\u7F6E\u751F\u6210\u9875\u9762\u7ED3\u6784\uFF0C\u9875\u9762\u8DEF\u7531\u76F8\u5173\u3002\u5176\u65B9\u6CD5\u5B9A\u4E49\u5982\u4E0B"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((highlighter__WEBPACK_IMPORTED_MODULE_2___default()), {
    language: "ts",
    code: ct
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Paragraph, null, "\u9875\u9762\u81EA\u5B9A\u4E49\u4F8B\u5B50\uFF0C\u6839\u636E pages \u914D\u7F6E\u751F\u6210\u8DEF\u7531\u914D\u7F6E"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(antd__WEBPACK_IMPORTED_MODULE_1__.Alert, {
    message: "\u8BF7\u6CE8\u610F\u5B9A\u4E49\u9875\u9762\u8DEF\u7531\u65F6\u5019\u4E00\u5B9A\u8981\u7528 VariousJS \u63D0\u4F9B\u7684 Router \u7EC4\u4EF6\u5305\u88F9\uFF0C\u4E0D\u7136\u4F1A\u5F15\u8D77\u95EE\u9898\u3002\u5176\u4ED6 Route/Link \u4E4B\u7C7B\u7EC4\u4EF6\u53EF\u4EE5\u4F7F\u7528 \u201CReact-Router\u201D \u63D0\u4F9B\u7684",
    type: "warning"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((highlighter__WEBPACK_IMPORTED_MODULE_2___default()), {
    language: "tsx",
    code: ctx
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(antd__WEBPACK_IMPORTED_MODULE_1__.Divider, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Title, {
    level: 4
  }, "\u9519\u8BEF\u63D0\u793A"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Paragraph, null, "\u9519\u8BEF\u63D0\u793A\u9488\u5BF9\u7EC4\u4EF6\u52A0\u8F7D/\u8FD0\u884C\u671F\u95F4\u7684\u9519\u8BEF\u53CB\u597D\u63D0\u793A\uFF0C\u5E76\u63D0\u4F9B\u91CD\u65B0\u52A0\u8F7D\u65B9\u6CD5"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((highlighter__WEBPACK_IMPORTED_MODULE_2___default()), {
    language: "ts",
    code: es
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Paragraph, null, "\u53C2\u8003\u4F8B\u5B50"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((highlighter__WEBPACK_IMPORTED_MODULE_2___default()), {
    language: "tsx",
    code: er
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Paragraph, null, "\u9519\u8BEF\u7C7B\u578B\u5B9A\u4E49"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(antd__WEBPACK_IMPORTED_MODULE_1__.Table, {
    bordered: true,
    size: "small",
    dataSource: data,
    columns: col,
    pagination: false
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(antd__WEBPACK_IMPORTED_MODULE_1__.Divider, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Title, {
    level: 4
  }, "\u52A0\u8F7D\u63D0\u793A"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Paragraph, null, "\u7EC4\u4EF6\u90FD\u662F\u52A8\u6001\u6309\u9700\u52A0\u8F7D\uFF0C\u9700\u8981\u4E00\u4E2A\u53CB\u597D\u7684\u52A0\u8F7D\u63D0\u793A\u3002\u53C2\u8003\u4F8B\u5B50"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((highlighter__WEBPACK_IMPORTED_MODULE_2___default()), {
    language: "tsx",
    code: ld
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Paragraph, null, "\u8FD0\u884C\u7EC4\u4EF6\u4F7F\u7528\u81EA\u5B9A\u4E49\u52A0\u8F7D\uFF0C\u53EA\u9700\u8981\u5728\u5B9A\u4E49\u751F\u6210\u7684\u7EC4\u4EF6\u914D\u7F6E slient \u53C2\u6570\u5373\u53EF\uFF0C\u8FD9\u65F6\u5019\u7EC4\u4EF6\u7684\u52A0\u8F7D\u53CA\u51FA\u9519\u90FD\u4E0D\u4F1A\u6709\u63D0\u793A\uFF0C\u9700\u8981\u7EC4\u4EF6\u81EA\u884C\u5904\u7406"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((highlighter__WEBPACK_IMPORTED_MODULE_2___default()), {
    code: cst,
    language: "tsx"
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (H);
}();
/******/ 	return __webpack_exports__;
/******/ })()
;
});;
//# sourceMappingURL=container.js.map