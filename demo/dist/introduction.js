define(["react"], function(__WEBPACK_EXTERNAL_MODULE_react__) { return /******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

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
/******/ 			// no module.id needed
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


var H = function H() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h1", null, "VariousJS \u7B80\u4ECB"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "VariousJS \u662F\u4E00\u4E2A\u57FA\u4E8E RequireJS + React \u7684\u4E00\u4E2A\u8FD0\u884C\u6846\u67B6\u3002\u63D0\u4F9B\u7075\u6D3B\u7684\u7EC4\u4EF6\u52A0\u8F7D\u53CA\u901A\u4FE1\u80FD\u529B\uFF0C\u63D0\u9AD8\u591A\u7EC4\u4EF6\u5408\u4F5C\u53CA\u590D\u7528\u6548\u7387\u7684\u4E00\u79CD\u65B9\u6848\u3002"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "\u9700\u8981\u7279\u522B\u8BF4\u660E\u7684\u662F\uFF0CVariousJS \u5E76\u4E0D\u662F\u5FAE\u524D\u7AEF\u6846\u67B6\u3002\u5B83\u5E76\u4E0D\u662F\u4E3A\u4E86\u89E3\u51B3\u591A\u4E1A\u52A1\u591A\u7CFB\u7EDF\u9879\u76EE\u5408\u5E76\u5728\u4E00\u8D77\u7684\u95EE\u9898\u3002"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h2", null, "\u8BBE\u8BA1\u7406\u5FF5"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "VariousJS \u662F\u63D0\u4F9B\u4E00\u79CD\u89E3\u51B3\u7EC4\u4EF6\u5F00\u53D1/\u52A0\u8F7D/\u590D\u7528\u9EBB\u70E6\u7684\u95EE\u9898\u89E3\u51B3\u65B9\u6848"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h3", null, "\u4E00\u5207\u7686\u4E3A\u7EC4\u4EF6"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "\u5728 VariousJS \u4F53\u7CFB\u4E0B\uFF0C\u4EFB\u4F55\u9875\u9762/\u529F\u80FD/\u5C0F\u90E8\u4EF6\u90FD\u53EF\u4EE5\u8BA4\u4E3A\u662F\u4E00\u4E2A\u7EC4\u4EF6"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h3", null, "\u72EC\u7ACB\u89E3\u8026"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "\u7EC4\u4EF6\u4EE3\u7801\u72EC\u7ACB\uFF0C\u72EC\u7ACB\u5F00\u53D1\uFF0C\u4E92\u4E0D\u5E72\u6270\u3002\u4E0D\u63A8\u5D07 monorepo \u65B9\u5F0F\u7BA1\u7406\u4EE3\u7801\uFF0C\u907F\u514D\u9879\u76EE\u8D8A\u5927\u8D8A\u590D\u6742"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h2", null, "\u7279\u6027"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "VariousJS \u63D0\u4F9B\u4E00\u4E2A\u52A8\u6001\u52A0\u8F7D\u7EC4\u4EF6\u73AF\u5883\uFF0C\u5E76\u63D0\u4F9B\u65B9\u4FBF\u7684\u901A\u4FE1\u673A\u5236\u3002\u53EF\u4EE5\u7C7B\u6BD4\u4E3A\u5FAE\u4FE1\u53CA\u5FAE\u4FE1\u5C0F\u7A0B\u5E8F\u5173\u7CFB\uFF0C\u63D0\u4F9B\u7684\u73AF\u5883\u7C7B\u6BD4\u5FAE\u4FE1\u4E3B\u4F53\uFF0C\u7EC4\u4EF6\u5219\u53EF\u4EE5\u7C7B\u6BD4\u6210\u5C0F\u7A0B\u5E8F"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h3", null, "\u72EC\u7ACB"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "\u7EC4\u4EF6\u53EF\u4EE5\u7C7B\u6BD4\u5C0F\u7A0B\u5E8F\uFF0C\u5F00\u53D1/\u6D4B\u8BD5/\u90E8\u7F72\u90FD\u662F\u5B8C\u5168\u72EC\u7ACB\u7684"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h3", null, "\u6309\u9700\u52A0\u8F7D"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "\u57FA\u4E8E RequireJS\uFF0C\u5929\u7136\u652F\u6301\u7EC4\u4EF6\u6309\u9700\u52A0\u8F7D\uFF0C\u53EA\u6709\u5F53\u524D\u9875\u9762\u7528\u5230\u7684\u7EC4\u4EF6\u624D\u4F1A\u52A0\u8F7D\uFF0C\u5E76\u4E14\u5DF2\u52A0\u8F7D\u7EC4\u4EF6\u4E0D\u4F1A\u91CD\u590D\u52A0\u8F7D"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h3", null, "\u52A8\u6001\u52A0\u8F7D"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "\u5141\u8BB8\u52A8\u6001\u52A0\u8F7D\u7EC4\u4EF6\uFF0C\u751A\u81F3\u53EF\u4EE5\u52A0\u8F7D\u7B2C\u4E09\u65B9 React \u7EC4\u4EF6\u3002\u7C7B\u6BD4\u5C0F\u7A0B\u5E8F\u7684\u4F7F\u7528\uFF0C\u53EA\u9700\u8981\u6307\u5B9A\u7EC4\u4EF6 js URL \u5730\u5740\u5373\u53EF\u52A0\u8F7D\u8FDB\u6765"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h3", null, "\u9884\u52A0\u8F7D"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "\u53EF\u4EE5\u9884\u5148\u52A0\u8F7D\u7EC4\u4EF6\u8D44\u6E90\uFF0C\u63D0\u5347\u7528\u6237\u4F53\u9A8C"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h3", null, "\u901A\u4FE1"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "\u5F3A\u5927\u7684\u901A\u4FE1\u673A\u5236\uFF0C\u5141\u8BB8\u7EC4\u4EF6\u4E0E\u5168\u5C40\u95F4\u4E92\u76F8\u901A\u4FE1\uFF0C\u540C\u65F6\u4E5F\u652F\u6301\u7EC4\u4EF6\u95F4\u4E92\u76F8\u901A\u4FE1"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h3", null, "\u7EC4\u4EF6\u5171\u4EAB"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "\u57FA\u4E8E RequireJS \u6A21\u5757\u5171\u4EAB\u673A\u5236\uFF0C\u7EC4\u4EF6\u90FD\u53EF\u4EE5\u5171\u4EAB\u4F7F\u7528"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h3", null, "\u5BB9\u9519\u673A\u5236"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "\u7EC4\u4EF6\u95F4\u5404\u81EA\u72EC\u7ACB\uFF0C\u90FD\u6709\u72EC\u7ACB\u7684\u9519\u8BEF\u5224\u65AD\u673A\u5236\u53CA\u91CD\u8BD5\u673A\u5236\uFF0C\u7EC4\u4EF6\u7684\u9519\u8BEF\u5E76\u4E0D\u4F1A\u5F71\u54CD\u5176\u4ED6\u3002\u7C7B\u6BD4\u5C0F\u7A0B\u5E8F\u51FA\u9519\u5E76\u4E0D\u4F1A\u5F71\u54CD\u5FAE\u4FE1\u4E3B\u4F53\u3002\u8FD9\u4E00\u70B9\u4FDD\u8BC1\u7EBF\u4E0A\u53D1\u5E03\u7684\u5B89\u5168\u7A33\u5B9A\u6027"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h3", null, "\u5FEB\u901F\u63A5\u5165"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "\u5728 VariousJS \u73AF\u5883\u4E0B\uFF0C\u7EC4\u4EF6\u7684\u63A5\u5165\u662F\u975E\u5E38\u65B9\u4FBF\u7684\uFF0C\u53EA\u9700\u8981\u6307\u5B9A\u7EC4\u4EF6\u914D\u7F6E\u5373\u53EF\uFF0C\u4E0D\u9700\u8981\u91CD\u65B0\u6784\u5EFA\u3002\u53E6\u5916\u53D1\u5E03/\u56DE\u6EDA\u5207\u6362\u7248\u672C\u53F7\u4E5F\u662F\u76F4\u63A5\u4FEE\u6539\u914D\u7F6E\u5373\u53EF\u3002\u57FA\u4E8E\u6B64\u7279\u6027\uFF0C\u7EC4\u4EF6\u8FD8\u53EF\u4EE5\u5BF9\u7528\u6237\u8FDB\u884C\u7248\u672C\u7070\u5EA6\u63A7\u5236\u3002\u4FDD\u8BC1\u7EBF\u4E0A\u53D1\u5E03\u5B89\u5168"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "\u53E6\u5916\u57FA\u4E8E\u8FD9\u4E2A\u5FEB\u901F\u63A5\u5165\u4E0D\u9700\u8981\u91CD\u65B0\u6784\u5EFA\u7279\u6027\uFF0C\u5176\u4ED6\u57FA\u4E8E VariousJS \u7CFB\u7EDF\u4E5F\u975E\u5E38\u65B9\u4FBF\u63A5\u5165\u7EC4\u4EF6\uFF0C\u7EC4\u4EF6\u5347\u7EA7\u7B49\u64CD\u4F5C"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h2", null, "\u6280\u672F\u6808\u9650\u5236"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "\u7531\u4E8E VariousJS \u57FA\u4E8E RequireJS + React\uFF0C\u6240\u4EE5\u5BF9\u5E94\u7684\u6709\u4EE5\u4E0B\u9650\u5236"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("ul", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, "\u6240\u6709\u7EC4\u4EF6\u5FC5\u987B\u4E3A React \u7EC4\u4EF6"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, "\u6240\u6709\u7EC4\u4EF6\u5FC5\u987B\u6784\u5EFA\u6253\u5305\u6210 AMD\uFF08UMD\uFF09\u683C\u5F0F")));
};

/* harmony default export */ __webpack_exports__["default"] = (H);
}();
/******/ 	return __webpack_exports__;
/******/ })()
;
});;
//# sourceMappingURL=introduction.js.map