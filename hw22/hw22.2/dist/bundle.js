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

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _js_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./js/api.js */ \"./src/js/api.js\");\n/* harmony import */ var _js_dom_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./js/dom.js */ \"./src/js/dom.js\");\n//import {showName} from \"./js/script.js\";\n\n\n\n\n// Setup\nvar postList = document.querySelector(\"#post-list\");\nvar postForm = document.querySelector(\"#post-form\");\nvar addPostTitle = document.querySelector(\"#post-title\");\nvar addPostBody = document.querySelector(\"#post-body\");\n\n// Server functions\nvar handleLoadPosts = function handleLoadPosts() {\n  (0,_js_api_js__WEBPACK_IMPORTED_MODULE_0__.getPosts)().then(function (data) {\n    data.forEach(function (post) {\n      return (0,_js_dom_js__WEBPACK_IMPORTED_MODULE_1__.addPostToList)(post);\n    });\n  }).catch(function (error) {\n    return console.log(error);\n  });\n};\nvar handleNewPost = function handleNewPost(e) {\n  e.preventDefault();\n  var postTitleInput = addPostTitle.value.trim();\n  var postBodyInput = addPostBody.value.trim();\n  if (postTitleInput && postBodyInput) {\n    (0,_js_api_js__WEBPACK_IMPORTED_MODULE_0__.addNewPost)({\n      title: postTitleInput,\n      body: postBodyInput,\n      userId: 1\n    }).then(function (data) {\n      return (0,_js_dom_js__WEBPACK_IMPORTED_MODULE_1__.addPostToList)(data);\n    }).catch(function (error) {\n      return console.log(error);\n    });\n  }\n};\nvar handleLoadComments = function handleLoadComments(e) {\n  if (e.target.classList.contains('load-comments')) {\n    var postId = e.target.parentElement.dataset.id;\n    (0,_js_api_js__WEBPACK_IMPORTED_MODULE_0__.loadComments)(postId).then(function (data) {\n      var list = e.target.parentElement.querySelector('.comments-list');\n      data.forEach(function (comment) {\n        return (0,_js_dom_js__WEBPACK_IMPORTED_MODULE_1__.renderComments)(comment, list);\n      });\n    }).catch(function (error) {\n      console.log(error);\n    });\n  }\n};\n\n//Main\npostForm.addEventListener(\"submit\", handleNewPost);\npostList.addEventListener(\"click\", handleLoadComments);\nhandleLoadPosts();\n\n//# sourceURL=webpack://hw22/./src/index.js?");

/***/ }),

/***/ "./src/js/api.js":
/*!***********************!*\
  !*** ./src/js/api.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   addNewPost: () => (/* binding */ addNewPost),\n/* harmony export */   getPosts: () => (/* binding */ getPosts),\n/* harmony export */   loadComments: () => (/* binding */ loadComments)\n/* harmony export */ });\nvar apiUrl = \"https://jsonplaceholder.typicode.com\";\nfunction getPosts() {\n  return fetch(apiUrl + '/posts?_limit=10').then(function (response) {\n    return response.json();\n  });\n}\nvar addNewPost = function addNewPost(post) {\n  return fetch(apiUrl + '/posts/', {\n    method: 'POST',\n    headers: {\n      'Content-Type': 'application/json'\n    },\n    body: JSON.stringify(post)\n  }).then(function (response) {\n    return response.json();\n  });\n};\nvar loadComments = function loadComments(postId) {\n  return fetch(apiUrl + \"/posts/\".concat(postId, \"/comments?_limit=2\")).then(function (response) {\n    return response.json();\n  });\n};\n\n//# sourceURL=webpack://hw22/./src/js/api.js?");

/***/ }),

/***/ "./src/js/dom.js":
/*!***********************!*\
  !*** ./src/js/dom.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   addPostToList: () => (/* binding */ addPostToList),\n/* harmony export */   renderComments: () => (/* binding */ renderComments)\n/* harmony export */ });\nvar postList = document.querySelector(\"#post-list\");\nvar addPostToList = function addPostToList(post) {\n  var li = document.createElement(\"li\");\n  li.classList.add(\"post-list-item\");\n  li.dataset.id = post.id;\n  li.innerHTML = \"\\n        <p><strong>id:</strong> \".concat(post.id, \"</p>\\n        <p><strong>Title:</strong> \").concat(post.title, \"</p>\\n        <p><strong>Body:</strong> \").concat(post.body, \" </p>\\n        <button class=\\\"load-comments\\\">Load comments</button>\\n        <p class=\\\"comments-list\\\"></p>\\n    \");\n  postList.appendChild(li);\n};\nvar renderComments = function renderComments(comment, commentList) {\n  var li = document.createElement(\"li\");\n  li.innerHTML = \"\\n        <p><strong>Name:</strong> \".concat(comment.name, \"</p>\\n        <p><strong>Email:</strong> \").concat(comment.email, \"</p>\\n        <p><strong>Body:</strong> \").concat(comment.body, \" </p>               \\n    \");\n  commentList.appendChild(li);\n};\n\n//# sourceURL=webpack://hw22/./src/js/dom.js?");

/***/ }),

/***/ "./src/sass/main.scss":
/*!****************************!*\
  !*** ./src/sass/main.scss ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://hw22/./src/sass/main.scss?");

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
/******/ 	__webpack_require__("./src/index.js");
/******/ 	var __webpack_exports__ = __webpack_require__("./src/sass/main.scss");
/******/ 	
/******/ })()
;