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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_PrimarySearchAppBar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/PrimarySearchAppBar */ \"(app-pages-browser)/./components/PrimarySearchAppBar.js\");\n/* harmony import */ var _components_ReactVirtualizedTable__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/ReactVirtualizedTable */ \"(app-pages-browser)/./components/ReactVirtualizedTable.js\");\n/* harmony import */ var _components_ContributionHeatmap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/components/ContributionHeatmap */ \"(app-pages-browser)/./components/ContributionHeatmap.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n // Import the heatmap component\nfunction Home() {\n    _s();\n    // State for managing dark mode\n    const [darkMode, setDarkMode] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);\n    // State for handling search query\n    const [searchQuery, setSearchQuery] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    // Function to filter data based on search query\n    const getFilteredData = ()=>{\n        return _components_ReactVirtualizedTable__WEBPACK_IMPORTED_MODULE_3__.rows.filter((item)=>item.title.toLowerCase().includes(searchQuery.toLowerCase()));\n    };\n    // Filtered data for the table\n    const filteredData = getFilteredData();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex flex-col min-h-screen w-full \".concat(darkMode ? \"bg-[rgb(26,26,26)] text-white\" : \"bg-white text-black\"),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"header\", {\n                className: \"w-full\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_PrimarySearchAppBar__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                    darkMode: darkMode,\n                    handleThemeChange: ()=>setDarkMode((prevMode)=>!prevMode),\n                    searchQuery: searchQuery,\n                    onSearchChange: setSearchQuery\n                }, void 0, false, {\n                    fileName: \"/Users/umarrasool/Desktop/Github/leetr/frontend/app/page.js\",\n                    lineNumber: 29,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/umarrasool/Desktop/Github/leetr/frontend/app/page.js\",\n                lineNumber: 28,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ContributionHeatmap__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                contributionsData: contributionsData,\n                darkMode: darkMode\n            }, void 0, false, {\n                fileName: \"/Users/umarrasool/Desktop/Github/leetr/frontend/app/page.js\",\n                lineNumber: 37,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n                className: \"flex-grow p-14\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ReactVirtualizedTable__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                    data: filteredData,\n                    darkMode: darkMode\n                }, void 0, false, {\n                    fileName: \"/Users/umarrasool/Desktop/Github/leetr/frontend/app/page.js\",\n                    lineNumber: 42,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/umarrasool/Desktop/Github/leetr/frontend/app/page.js\",\n                lineNumber: 41,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/umarrasool/Desktop/Github/leetr/frontend/app/page.js\",\n        lineNumber: 26,\n        columnNumber: 5\n    }, this);\n}\n_s(Home, \"Ua/UIBveqgzmEfqj9tfGNLwXMUQ=\");\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9wYWdlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUN3QztBQUMyQjtBQUNjO0FBQ2QsQ0FBQywrQkFBK0I7QUFHcEYsU0FBU007O0lBQ3RCLCtCQUErQjtJQUMvQixNQUFNLENBQUNDLFVBQVVDLFlBQVksR0FBR1AsK0NBQVFBLENBQUM7SUFFekMsa0NBQWtDO0lBQ2xDLE1BQU0sQ0FBQ1EsYUFBYUMsZUFBZSxHQUFHVCwrQ0FBUUEsQ0FBQztJQUUvQyxnREFBZ0Q7SUFDaEQsTUFBTVUsa0JBQWtCO1FBQ3RCLE9BQU9QLG1FQUFJQSxDQUFDUSxNQUFNLENBQUNDLENBQUFBLE9BQ2pCQSxLQUFLQyxLQUFLLENBQUNDLFdBQVcsR0FBR0MsUUFBUSxDQUFDUCxZQUFZTSxXQUFXO0lBRTdEO0lBRUEsOEJBQThCO0lBQzlCLE1BQU1FLGVBQWVOO0lBRXJCLHFCQUNFLDhEQUFDTztRQUFJQyxXQUFXLHFDQUF3RyxPQUFuRVosV0FBVyxrQ0FBa0M7OzBCQUVoRyw4REFBQ2E7Z0JBQU9ELFdBQVU7MEJBQ2hCLDRFQUFDakIsdUVBQW1CQTtvQkFDbEJLLFVBQVVBO29CQUNWYyxtQkFBbUIsSUFBTWIsWUFBWWMsQ0FBQUEsV0FBWSxDQUFDQTtvQkFDbERiLGFBQWFBO29CQUNiYyxnQkFBZ0JiOzs7Ozs7Ozs7OzswQkFJcEIsOERBQUNMLHVFQUFtQkE7Z0JBQUNtQixtQkFBbUJBO2dCQUFtQmpCLFVBQVVBOzs7Ozs7MEJBSXJFLDhEQUFDa0I7Z0JBQUtOLFdBQVU7MEJBQ2QsNEVBQUNoQix5RUFBcUJBO29CQUFDdUIsTUFBTVQ7b0JBQWNWLFVBQVVBOzs7Ozs7Ozs7Ozs7Ozs7OztBQUk3RDtHQXRDd0JEO0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2FwcC9wYWdlLmpzP2JlNjciXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBjbGllbnQnO1xuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByaW1hcnlTZWFyY2hBcHBCYXIgZnJvbSBcIkAvY29tcG9uZW50cy9QcmltYXJ5U2VhcmNoQXBwQmFyXCI7XG5pbXBvcnQgUmVhY3RWaXJ0dWFsaXplZFRhYmxlLCB7IHJvd3MgfSBmcm9tIFwiQC9jb21wb25lbnRzL1JlYWN0VmlydHVhbGl6ZWRUYWJsZVwiO1xuaW1wb3J0IENvbnRyaWJ1dGlvbkhlYXRtYXAgZnJvbSBcIkAvY29tcG9uZW50cy9Db250cmlidXRpb25IZWF0bWFwXCI7IC8vIEltcG9ydCB0aGUgaGVhdG1hcCBjb21wb25lbnRcblxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKCkge1xuICAvLyBTdGF0ZSBmb3IgbWFuYWdpbmcgZGFyayBtb2RlXG4gIGNvbnN0IFtkYXJrTW9kZSwgc2V0RGFya01vZGVdID0gdXNlU3RhdGUodHJ1ZSk7XG5cbiAgLy8gU3RhdGUgZm9yIGhhbmRsaW5nIHNlYXJjaCBxdWVyeVxuICBjb25zdCBbc2VhcmNoUXVlcnksIHNldFNlYXJjaFF1ZXJ5XSA9IHVzZVN0YXRlKCcnKTtcblxuICAvLyBGdW5jdGlvbiB0byBmaWx0ZXIgZGF0YSBiYXNlZCBvbiBzZWFyY2ggcXVlcnlcbiAgY29uc3QgZ2V0RmlsdGVyZWREYXRhID0gKCkgPT4ge1xuICAgIHJldHVybiByb3dzLmZpbHRlcihpdGVtID0+IFxuICAgICAgaXRlbS50aXRsZS50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKHNlYXJjaFF1ZXJ5LnRvTG93ZXJDYXNlKCkpXG4gICAgKTtcbiAgfTtcblxuICAvLyBGaWx0ZXJlZCBkYXRhIGZvciB0aGUgdGFibGVcbiAgY29uc3QgZmlsdGVyZWREYXRhID0gZ2V0RmlsdGVyZWREYXRhKCk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17YGZsZXggZmxleC1jb2wgbWluLWgtc2NyZWVuIHctZnVsbCAke2RhcmtNb2RlID8gJ2JnLVtyZ2IoMjYsMjYsMjYpXSB0ZXh0LXdoaXRlJyA6ICdiZy13aGl0ZSB0ZXh0LWJsYWNrJ31gfT5cbiAgICAgIHsvKiBIZWFkZXIgd2l0aCBTZWFyY2ggQmFyICovfVxuICAgICAgPGhlYWRlciBjbGFzc05hbWU9XCJ3LWZ1bGxcIj5cbiAgICAgICAgPFByaW1hcnlTZWFyY2hBcHBCYXIgXG4gICAgICAgICAgZGFya01vZGU9e2RhcmtNb2RlfSBcbiAgICAgICAgICBoYW5kbGVUaGVtZUNoYW5nZT17KCkgPT4gc2V0RGFya01vZGUocHJldk1vZGUgPT4gIXByZXZNb2RlKX1cbiAgICAgICAgICBzZWFyY2hRdWVyeT17c2VhcmNoUXVlcnl9XG4gICAgICAgICAgb25TZWFyY2hDaGFuZ2U9e3NldFNlYXJjaFF1ZXJ5fVxuICAgICAgICAvPlxuICAgICAgPC9oZWFkZXI+XG4gICAgICB7LyogQ29udHJpYnV0aW9uIEhlYXRtYXAgKi99XG4gICAgICA8Q29udHJpYnV0aW9uSGVhdG1hcCBjb250cmlidXRpb25zRGF0YT17Y29udHJpYnV0aW9uc0RhdGF9IGRhcmtNb2RlPXtkYXJrTW9kZX0gLz5cblxuXG4gICAgICB7LyogTWFpbiBDb250ZW50IHdpdGggVmlydHVhbGl6ZWQgVGFibGUgKi99XG4gICAgICA8bWFpbiBjbGFzc05hbWU9XCJmbGV4LWdyb3cgcC0xNFwiPlxuICAgICAgICA8UmVhY3RWaXJ0dWFsaXplZFRhYmxlIGRhdGE9e2ZpbHRlcmVkRGF0YX0gZGFya01vZGU9e2RhcmtNb2RlfSAvPlxuICAgICAgPC9tYWluPlxuICAgIDwvZGl2PlxuICApO1xufVxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJQcmltYXJ5U2VhcmNoQXBwQmFyIiwiUmVhY3RWaXJ0dWFsaXplZFRhYmxlIiwicm93cyIsIkNvbnRyaWJ1dGlvbkhlYXRtYXAiLCJIb21lIiwiZGFya01vZGUiLCJzZXREYXJrTW9kZSIsInNlYXJjaFF1ZXJ5Iiwic2V0U2VhcmNoUXVlcnkiLCJnZXRGaWx0ZXJlZERhdGEiLCJmaWx0ZXIiLCJpdGVtIiwidGl0bGUiLCJ0b0xvd2VyQ2FzZSIsImluY2x1ZGVzIiwiZmlsdGVyZWREYXRhIiwiZGl2IiwiY2xhc3NOYW1lIiwiaGVhZGVyIiwiaGFuZGxlVGhlbWVDaGFuZ2UiLCJwcmV2TW9kZSIsIm9uU2VhcmNoQ2hhbmdlIiwiY29udHJpYnV0aW9uc0RhdGEiLCJtYWluIiwiZGF0YSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/page.js\n"));

/***/ })

});