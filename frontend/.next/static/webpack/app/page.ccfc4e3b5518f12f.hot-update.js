"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./app/page.js":
/*!*********************!*\
  !*** ./app/page.js ***!
  \*********************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_navbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/navbar */ \"(app-pages-browser)/./components/navbar.js\");\n/* harmony import */ var _components_table__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/table */ \"(app-pages-browser)/./components/table.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\nfunction Home() {\n    _s();\n    const [darkMode, setDarkMode] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [searchQuery, setSearchQuery] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const filteredData = _components_table__WEBPACK_IMPORTED_MODULE_3__.rows.filter((item)=>item.title.toLowerCase().includes(searchQuery.toLowerCase()));\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex flex-col min-h-screen w-full \".concat(darkMode ? \"bg-black text-white\" : \"bg-white text-black\"),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"header\", {\n                className: \"w-full\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_navbar__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                    darkMode: darkMode,\n                    handleThemeChange: ()=>setDarkMode(!darkMode),\n                    searchQuery: searchQuery,\n                    onSearchChange: setSearchQuery\n                }, void 0, false, {\n                    fileName: \"/Users/umarrasool/Desktop/Github/leetr/frontend/app/page.js\",\n                    lineNumber: 15,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/umarrasool/Desktop/Github/leetr/frontend/app/page.js\",\n                lineNumber: 14,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex-grow p-4\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_table__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                    data: filteredData,\n                    darkMode: darkMode\n                }, void 0, false, {\n                    fileName: \"/Users/umarrasool/Desktop/Github/leetr/frontend/app/page.js\",\n                    lineNumber: 23,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/umarrasool/Desktop/Github/leetr/frontend/app/page.js\",\n                lineNumber: 22,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/umarrasool/Desktop/Github/leetr/frontend/app/page.js\",\n        lineNumber: 13,\n        columnNumber: 5\n    }, this);\n}\n_s(Home, \"1fwzGVQjCzCxvXqiU0ioXPQQpa4=\");\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9wYWdlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQ3dDO0FBQ2M7QUFDVztBQUVsRCxTQUFTSzs7SUFDdEIsTUFBTSxDQUFDQyxVQUFVQyxZQUFZLEdBQUdOLCtDQUFRQSxDQUFDO0lBQ3pDLE1BQU0sQ0FBQ08sYUFBYUMsZUFBZSxHQUFHUiwrQ0FBUUEsQ0FBQztJQUUvQyxNQUFNUyxlQUFlTixtREFBSUEsQ0FBQ08sTUFBTSxDQUFDQyxDQUFBQSxPQUFRQSxLQUFLQyxLQUFLLENBQUNDLFdBQVcsR0FBR0MsUUFBUSxDQUFDUCxZQUFZTSxXQUFXO0lBRWxHLHFCQUNFLDhEQUFDRTtRQUFJQyxXQUFXLHFDQUE4RixPQUF6RFgsV0FBVyx3QkFBd0I7OzBCQUN0Riw4REFBQ1k7Z0JBQU9ELFdBQVU7MEJBQ2hCLDRFQUFDZiwwREFBbUJBO29CQUNsQkksVUFBVUE7b0JBQ1ZhLG1CQUFtQixJQUFNWixZQUFZLENBQUNEO29CQUN0Q0UsYUFBYUE7b0JBQ2JZLGdCQUFnQlg7Ozs7Ozs7Ozs7OzBCQUdwQiw4REFBQ087Z0JBQUlDLFdBQVU7MEJBQ2IsNEVBQUNkLHlEQUFxQkE7b0JBQUNrQixNQUFNWDtvQkFBY0osVUFBVUE7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBSTdEO0dBckJ3QkQ7S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwL3BhZ2UuanM/YmU2NyJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIGNsaWVudCdcbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcmltYXJ5U2VhcmNoQXBwQmFyIGZyb20gXCJAL2NvbXBvbmVudHMvbmF2YmFyXCI7XG5pbXBvcnQgUmVhY3RWaXJ0dWFsaXplZFRhYmxlLCB7IHJvd3MgfSBmcm9tIFwiQC9jb21wb25lbnRzL3RhYmxlXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoKSB7XG4gIGNvbnN0IFtkYXJrTW9kZSwgc2V0RGFya01vZGVdID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbc2VhcmNoUXVlcnksIHNldFNlYXJjaFF1ZXJ5XSA9IHVzZVN0YXRlKCcnKTtcblxuICBjb25zdCBmaWx0ZXJlZERhdGEgPSByb3dzLmZpbHRlcihpdGVtID0+IGl0ZW0udGl0bGUudG9Mb3dlckNhc2UoKS5pbmNsdWRlcyhzZWFyY2hRdWVyeS50b0xvd2VyQ2FzZSgpKSk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17YGZsZXggZmxleC1jb2wgbWluLWgtc2NyZWVuIHctZnVsbCAke2RhcmtNb2RlID8gJ2JnLWJsYWNrIHRleHQtd2hpdGUnIDogJ2JnLXdoaXRlIHRleHQtYmxhY2snfWB9PlxuICAgICAgPGhlYWRlciBjbGFzc05hbWU9XCJ3LWZ1bGxcIj5cbiAgICAgICAgPFByaW1hcnlTZWFyY2hBcHBCYXIgXG4gICAgICAgICAgZGFya01vZGU9e2RhcmtNb2RlfSBcbiAgICAgICAgICBoYW5kbGVUaGVtZUNoYW5nZT17KCkgPT4gc2V0RGFya01vZGUoIWRhcmtNb2RlKX1cbiAgICAgICAgICBzZWFyY2hRdWVyeT17c2VhcmNoUXVlcnl9XG4gICAgICAgICAgb25TZWFyY2hDaGFuZ2U9e3NldFNlYXJjaFF1ZXJ5fVxuICAgICAgICAvPlxuICAgICAgPC9oZWFkZXI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgtZ3JvdyBwLTRcIj5cbiAgICAgICAgPFJlYWN0VmlydHVhbGl6ZWRUYWJsZSBkYXRhPXtmaWx0ZXJlZERhdGF9IGRhcmtNb2RlPXtkYXJrTW9kZX0gLz5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufVxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJQcmltYXJ5U2VhcmNoQXBwQmFyIiwiUmVhY3RWaXJ0dWFsaXplZFRhYmxlIiwicm93cyIsIkhvbWUiLCJkYXJrTW9kZSIsInNldERhcmtNb2RlIiwic2VhcmNoUXVlcnkiLCJzZXRTZWFyY2hRdWVyeSIsImZpbHRlcmVkRGF0YSIsImZpbHRlciIsIml0ZW0iLCJ0aXRsZSIsInRvTG93ZXJDYXNlIiwiaW5jbHVkZXMiLCJkaXYiLCJjbGFzc05hbWUiLCJoZWFkZXIiLCJoYW5kbGVUaGVtZUNoYW5nZSIsIm9uU2VhcmNoQ2hhbmdlIiwiZGF0YSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/page.js\n"));

/***/ })

});