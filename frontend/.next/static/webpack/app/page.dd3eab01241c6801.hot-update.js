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

/***/ "(app-pages-browser)/./components/pieChart.js":
/*!********************************!*\
  !*** ./components/pieChart.js ***!
  \********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_plotly_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-plotly.js */ \"(app-pages-browser)/./node_modules/react-plotly.js/react-plotly.js\");\n\n\n\nclass StatusPieChart extends (react__WEBPACK_IMPORTED_MODULE_1___default().Component) {\n    render() {\n        const { darkMode } = this.props;\n        const data = [\n            {\n                values: [\n                    this.props.attempted,\n                    this.props.notAttempted,\n                    this.props.successful\n                ],\n                labels: [\n                    \"Attempted\",\n                    \"Not Attempted\",\n                    \"Successful\"\n                ],\n                type: \"pie\",\n                textinfo: \"label+percent\",\n                textposition: \"outside\",\n                automargin: true,\n                marker: {\n                    colors: [\n                        \"orange\",\n                        \"grey\",\n                        \"green\"\n                    ]\n                },\n                hoverinfo: \"label+percent\"\n            }\n        ];\n        const layout = {\n            title: \"Problem Status Distribution\",\n            showlegend: true,\n            autosize: true,\n            paper_bgcolor: darkMode ? \"rgb(26,26,26)\" : \"white\",\n            plot_bgcolor: darkMode ? \"rgb(26,26,26)\" : \"white\",\n            // Ensure margins are suitable for your layout\n            margin: {\n                l: 10,\n                r: 10,\n                t: 20,\n                b: 20\n            }\n        };\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_plotly_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n            data: data,\n            layout: layout\n        }, void 0, false, {\n            fileName: \"/Users/umarrasool/Desktop/Github/leetr/frontend/components/pieChart.js\",\n            lineNumber: 34,\n            columnNumber: 12\n        }, this);\n    }\n}\n/* harmony default export */ __webpack_exports__[\"default\"] = (StatusPieChart);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbXBvbmVudHMvcGllQ2hhcnQuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQTBCO0FBQ1M7QUFFbkMsTUFBTUUsdUJBQXVCRix3REFBZTtJQUMxQ0ksU0FBUztRQUVQLE1BQU0sRUFBRUMsUUFBUSxFQUFFLEdBQUcsSUFBSSxDQUFDQyxLQUFLO1FBRS9CLE1BQU1DLE9BQU87WUFDWDtnQkFDRUMsUUFBUTtvQkFBQyxJQUFJLENBQUNGLEtBQUssQ0FBQ0csU0FBUztvQkFBRSxJQUFJLENBQUNILEtBQUssQ0FBQ0ksWUFBWTtvQkFBRSxJQUFJLENBQUNKLEtBQUssQ0FBQ0ssVUFBVTtpQkFBQztnQkFDOUVDLFFBQVE7b0JBQUM7b0JBQWE7b0JBQWlCO2lCQUFhO2dCQUNwREMsTUFBTTtnQkFDTkMsVUFBVTtnQkFDVkMsY0FBYztnQkFDZEMsWUFBWTtnQkFDWkMsUUFBUTtvQkFDTkMsUUFBUTt3QkFBQzt3QkFBVTt3QkFBUTtxQkFBUTtnQkFDckM7Z0JBQ0FDLFdBQVc7WUFDYjtTQUNEO1FBRUQsTUFBTUMsU0FBUztZQUNYQyxPQUFPO1lBQ1BDLFlBQVk7WUFDWkMsVUFBVTtZQUNWQyxlQUFlbkIsV0FBVyxrQkFBa0I7WUFDNUNvQixjQUFjcEIsV0FBVyxrQkFBa0I7WUFDM0MsOENBQThDO1lBQzlDcUIsUUFBUTtnQkFBRUMsR0FBRztnQkFBSUMsR0FBRztnQkFBSUMsR0FBRztnQkFBSUMsR0FBRztZQUFHO1FBQ3ZDO1FBRUYscUJBQU8sOERBQUM3Qix1REFBSUE7WUFBQ00sTUFBTUE7WUFBTWEsUUFBUUE7Ozs7OztJQUNuQztBQUNGO0FBRUEsK0RBQWVsQixjQUFjQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvcGllQ2hhcnQuanM/ZDhjOSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFBsb3QgZnJvbSAncmVhY3QtcGxvdGx5LmpzJztcblxuY2xhc3MgU3RhdHVzUGllQ2hhcnQgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICByZW5kZXIoKSB7XG4gICAgXG4gICAgY29uc3QgeyBkYXJrTW9kZSB9ID0gdGhpcy5wcm9wcztcblxuICAgIGNvbnN0IGRhdGEgPSBbXG4gICAgICB7XG4gICAgICAgIHZhbHVlczogW3RoaXMucHJvcHMuYXR0ZW1wdGVkLCB0aGlzLnByb3BzLm5vdEF0dGVtcHRlZCwgdGhpcy5wcm9wcy5zdWNjZXNzZnVsXSxcbiAgICAgICAgbGFiZWxzOiBbJ0F0dGVtcHRlZCcsICdOb3QgQXR0ZW1wdGVkJywgJ1N1Y2Nlc3NmdWwnXSxcbiAgICAgICAgdHlwZTogJ3BpZScsXG4gICAgICAgIHRleHRpbmZvOiAnbGFiZWwrcGVyY2VudCcsXG4gICAgICAgIHRleHRwb3NpdGlvbjogJ291dHNpZGUnLFxuICAgICAgICBhdXRvbWFyZ2luOiB0cnVlLFxuICAgICAgICBtYXJrZXI6IHtcbiAgICAgICAgICBjb2xvcnM6IFsnb3JhbmdlJywgJ2dyZXknLCAnZ3JlZW4nXVxuICAgICAgICB9LFxuICAgICAgICBob3ZlcmluZm86ICdsYWJlbCtwZXJjZW50J1xuICAgICAgfVxuICAgIF07XG5cbiAgICBjb25zdCBsYXlvdXQgPSB7XG4gICAgICAgIHRpdGxlOiAnUHJvYmxlbSBTdGF0dXMgRGlzdHJpYnV0aW9uJyxcbiAgICAgICAgc2hvd2xlZ2VuZDogdHJ1ZSxcbiAgICAgICAgYXV0b3NpemU6IHRydWUsXG4gICAgICAgIHBhcGVyX2JnY29sb3I6IGRhcmtNb2RlID8gJ3JnYigyNiwyNiwyNiknIDogJ3doaXRlJyxcbiAgICAgICAgcGxvdF9iZ2NvbG9yOiBkYXJrTW9kZSA/ICdyZ2IoMjYsMjYsMjYpJyA6ICd3aGl0ZScsXG4gICAgICAgIC8vIEVuc3VyZSBtYXJnaW5zIGFyZSBzdWl0YWJsZSBmb3IgeW91ciBsYXlvdXRcbiAgICAgICAgbWFyZ2luOiB7IGw6IDEwLCByOiAxMCwgdDogMjAsIGI6IDIwIH0sXG4gICAgICB9O1xuICAgICAgXG4gICAgcmV0dXJuIDxQbG90IGRhdGE9e2RhdGF9IGxheW91dD17bGF5b3V0fSAvPjtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBTdGF0dXNQaWVDaGFydDtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsIlBsb3QiLCJTdGF0dXNQaWVDaGFydCIsIkNvbXBvbmVudCIsInJlbmRlciIsImRhcmtNb2RlIiwicHJvcHMiLCJkYXRhIiwidmFsdWVzIiwiYXR0ZW1wdGVkIiwibm90QXR0ZW1wdGVkIiwic3VjY2Vzc2Z1bCIsImxhYmVscyIsInR5cGUiLCJ0ZXh0aW5mbyIsInRleHRwb3NpdGlvbiIsImF1dG9tYXJnaW4iLCJtYXJrZXIiLCJjb2xvcnMiLCJob3ZlcmluZm8iLCJsYXlvdXQiLCJ0aXRsZSIsInNob3dsZWdlbmQiLCJhdXRvc2l6ZSIsInBhcGVyX2JnY29sb3IiLCJwbG90X2JnY29sb3IiLCJtYXJnaW4iLCJsIiwiciIsInQiLCJiIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./components/pieChart.js\n"));

/***/ })

});