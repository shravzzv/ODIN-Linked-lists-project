/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/LinkedList.js":
/*!***************************!*\
  !*** ./src/LinkedList.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   LinkedList: () => (/* binding */ LinkedList)\n/* harmony export */ });\n/* harmony import */ var _Node__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Node */ \"./src/Node.js\");\n\r\n\r\nclass LinkedList {\r\n  constructor() {\r\n    this.head = null\r\n  }\r\n\r\n  append(value) {\r\n    // adds a new node to the end of the list\r\n    const node = new _Node__WEBPACK_IMPORTED_MODULE_0__.Node(value)\r\n    if (this.head === null) {\r\n      this.head = node\r\n    } else {\r\n      let currentNode = this.head\r\n      while (currentNode.nextNode) {\r\n        currentNode = currentNode.nextNode\r\n      }\r\n      currentNode.nextNode = node\r\n    }\r\n  }\r\n\r\n  prepend(value) {\r\n    // adds a new node to the start of the list\r\n    const node = new _Node__WEBPACK_IMPORTED_MODULE_0__.Node(value)\r\n    node.nextNode = this.head\r\n    this.head = node\r\n  }\r\n\r\n  getSize() {\r\n    // returns the total number of nodes in the list\r\n    if (this.head === null) return 0\r\n    else {\r\n      let count = 1\r\n      let currentNode = this.head\r\n      while (currentNode.nextNode) {\r\n        count++\r\n        currentNode = currentNode.nextNode\r\n      }\r\n      return count\r\n    }\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack://odin-linked-lists-project/./src/LinkedList.js?");

/***/ }),

/***/ "./src/Node.js":
/*!*********************!*\
  !*** ./src/Node.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Node: () => (/* binding */ Node)\n/* harmony export */ });\nclass Node {\r\n  constructor(value = null, nextNode = null) {\r\n    this.value = value\r\n    this.nextNode = nextNode\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack://odin-linked-lists-project/./src/Node.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _LinkedList__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./LinkedList */ \"./src/LinkedList.js\");\n\r\n\r\nconst myList = new _LinkedList__WEBPACK_IMPORTED_MODULE_0__.LinkedList()\r\nmyList.append('sai shravan')\r\nconsole.log(myList.head)\r\n\n\n//# sourceURL=webpack://odin-linked-lists-project/./src/index.js?");

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
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;