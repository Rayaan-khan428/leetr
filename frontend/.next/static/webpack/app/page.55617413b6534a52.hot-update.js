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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_plotly_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-plotly.js */ \"(app-pages-browser)/./node_modules/react-plotly.js/react-plotly.js\");\n\n\n\nclass StatusPieChart extends (react__WEBPACK_IMPORTED_MODULE_1___default().Component) {\n    render() {\n        const { darkMode } = this.props;\n        const data = [\n            {\n                values: [\n                    this.props.attempted,\n                    this.props.notAttempted,\n                    this.props.successful\n                ],\n                labels: [\n                    \"Attempted\",\n                    \"Not Attempted\",\n                    \"Successful\"\n                ],\n                type: \"pie\",\n                textinfo: \"label+percent\",\n                textposition: \"outside\",\n                automargin: true,\n                marker: {\n                    colors: [\n                        \"orange\",\n                        \"grey\",\n                        \"green\"\n                    ]\n                },\n                hoverinfo: \"label+percent\"\n            }\n        ];\n        const layout = {\n            title: \"Problem Status Distribution\",\n            showlegend: true,\n            autosize: true,\n            margin: {\n                l: 20,\n                r: 20,\n                t: 45,\n                b: 20\n            },\n            paper_bgcolor: this.props.darkMode ? \"rgb(26,26,26)\" : \"white\",\n            plot_bgcolor: this.props.darkMode ? \"rgb(26,26,26)\" : \"white\",\n            font: {\n                color: this.props.darkMode ? \"white\" : \"black\"\n            }\n        };\n        // Define a style object for the container\n        const style = {\n            width: \"100%\",\n            height: \"100%\"\n        };\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_plotly_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n            data: data,\n            layout: layout,\n            style: style\n        }, void 0, false, {\n            fileName: \"/Users/umarrasool/Desktop/Github/leetr/frontend/components/pieChart.js\",\n            lineNumber: 44,\n            columnNumber: 14\n        }, this);\n    }\n}\n/* harmony default export */ __webpack_exports__[\"default\"] = (StatusPieChart);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbXBvbmVudHMvcGllQ2hhcnQuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQTBCO0FBQ1M7QUFFbkMsTUFBTUUsdUJBQXVCRix3REFBZTtJQUMxQ0ksU0FBUztRQUVQLE1BQU0sRUFBRUMsUUFBUSxFQUFFLEdBQUcsSUFBSSxDQUFDQyxLQUFLO1FBRS9CLE1BQU1DLE9BQU87WUFDWDtnQkFDRUMsUUFBUTtvQkFBQyxJQUFJLENBQUNGLEtBQUssQ0FBQ0csU0FBUztvQkFBRSxJQUFJLENBQUNILEtBQUssQ0FBQ0ksWUFBWTtvQkFBRSxJQUFJLENBQUNKLEtBQUssQ0FBQ0ssVUFBVTtpQkFBQztnQkFDOUVDLFFBQVE7b0JBQUM7b0JBQWE7b0JBQWlCO2lCQUFhO2dCQUNwREMsTUFBTTtnQkFDTkMsVUFBVTtnQkFDVkMsY0FBYztnQkFDZEMsWUFBWTtnQkFDWkMsUUFBUTtvQkFDTkMsUUFBUTt3QkFBQzt3QkFBVTt3QkFBUTtxQkFBUTtnQkFDckM7Z0JBQ0FDLFdBQVc7WUFDYjtTQUNEO1FBRUQsTUFBTUMsU0FBUztZQUNYQyxPQUFPO1lBQ1BDLFlBQVk7WUFDWkMsVUFBVTtZQUNWQyxRQUFRO2dCQUFFQyxHQUFHO2dCQUFJQyxHQUFHO2dCQUFJQyxHQUFHO2dCQUFJQyxHQUFHO1lBQUc7WUFDckNDLGVBQWUsSUFBSSxDQUFDdkIsS0FBSyxDQUFDRCxRQUFRLEdBQUcsa0JBQWtCO1lBQ3ZEeUIsY0FBYyxJQUFJLENBQUN4QixLQUFLLENBQUNELFFBQVEsR0FBRyxrQkFBa0I7WUFDdEQwQixNQUFNO2dCQUNKQyxPQUFPLElBQUksQ0FBQzFCLEtBQUssQ0FBQ0QsUUFBUSxHQUFHLFVBQVU7WUFDekM7UUFDRjtRQUdBLDBDQUEwQztRQUMxQyxNQUFNNEIsUUFBUTtZQUNaQyxPQUFPO1lBQ1BDLFFBQVE7UUFFVjtRQUVBLHFCQUFPLDhEQUFDbEMsdURBQUlBO1lBQUNNLE1BQU1BO1lBQU1hLFFBQVFBO1lBQVFhLE9BQU9BOzs7Ozs7SUFDbEQ7QUFDRjtBQUVBLCtEQUFlL0IsY0FBY0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL3BpZUNoYXJ0LmpzP2Q4YzkiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQbG90IGZyb20gJ3JlYWN0LXBsb3RseS5qcyc7XG5cbmNsYXNzIFN0YXR1c1BpZUNoYXJ0IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgcmVuZGVyKCkge1xuICAgIFxuICAgIGNvbnN0IHsgZGFya01vZGUgfSA9IHRoaXMucHJvcHM7XG5cbiAgICBjb25zdCBkYXRhID0gW1xuICAgICAge1xuICAgICAgICB2YWx1ZXM6IFt0aGlzLnByb3BzLmF0dGVtcHRlZCwgdGhpcy5wcm9wcy5ub3RBdHRlbXB0ZWQsIHRoaXMucHJvcHMuc3VjY2Vzc2Z1bF0sXG4gICAgICAgIGxhYmVsczogWydBdHRlbXB0ZWQnLCAnTm90IEF0dGVtcHRlZCcsICdTdWNjZXNzZnVsJ10sXG4gICAgICAgIHR5cGU6ICdwaWUnLFxuICAgICAgICB0ZXh0aW5mbzogJ2xhYmVsK3BlcmNlbnQnLFxuICAgICAgICB0ZXh0cG9zaXRpb246ICdvdXRzaWRlJyxcbiAgICAgICAgYXV0b21hcmdpbjogdHJ1ZSxcbiAgICAgICAgbWFya2VyOiB7XG4gICAgICAgICAgY29sb3JzOiBbJ29yYW5nZScsICdncmV5JywgJ2dyZWVuJ11cbiAgICAgICAgfSxcbiAgICAgICAgaG92ZXJpbmZvOiAnbGFiZWwrcGVyY2VudCdcbiAgICAgIH1cbiAgICBdO1xuXG4gICAgY29uc3QgbGF5b3V0ID0ge1xuICAgICAgICB0aXRsZTogJ1Byb2JsZW0gU3RhdHVzIERpc3RyaWJ1dGlvbicsXG4gICAgICAgIHNob3dsZWdlbmQ6IHRydWUsXG4gICAgICAgIGF1dG9zaXplOiB0cnVlLCAvLyBtYWtlIHRoZSBjaGFydCByZXNwb25zaXZlXG4gICAgICAgIG1hcmdpbjogeyBsOiAyMCwgcjogMjAsIHQ6IDQ1LCBiOiAyMCB9LCAvLyBwb3RlbnRpYWxseSByZWR1Y2VkIG1hcmdpbnNcbiAgICAgICAgcGFwZXJfYmdjb2xvcjogdGhpcy5wcm9wcy5kYXJrTW9kZSA/ICdyZ2IoMjYsMjYsMjYpJyA6ICd3aGl0ZScsXG4gICAgICAgIHBsb3RfYmdjb2xvcjogdGhpcy5wcm9wcy5kYXJrTW9kZSA/ICdyZ2IoMjYsMjYsMjYpJyA6ICd3aGl0ZScsXG4gICAgICAgIGZvbnQ6IHtcbiAgICAgICAgICBjb2xvcjogdGhpcy5wcm9wcy5kYXJrTW9kZSA/ICd3aGl0ZScgOiAnYmxhY2snLCAvLyBzZXRzIHRoZSB0ZXh0IGNvbG9yIGJhc2VkIG9uIGRhcmtNb2RlXG4gICAgICAgIH0sXG4gICAgICB9O1xuICAgICAgXG4gIFxuICAgICAgLy8gRGVmaW5lIGEgc3R5bGUgb2JqZWN0IGZvciB0aGUgY29udGFpbmVyXG4gICAgICBjb25zdCBzdHlsZSA9IHtcbiAgICAgICAgd2lkdGg6ICcxMDAlJywgLy8gRnVsbCB3aWR0aCBvZiB0aGUgY29udGFpbmVyXG4gICAgICAgIGhlaWdodDogJzEwMCUnLCAvLyBGdWxsIGhlaWdodCBvZiB0aGUgY29udGFpbmVyXG4gICAgICAgIC8vIEFkanVzdCBwYWRkaW5nIGFuZCBvdGhlciBzdHlsaW5nIGFzIG5lZWRlZFxuICAgICAgfTtcbiAgXG4gICAgICByZXR1cm4gPFBsb3QgZGF0YT17ZGF0YX0gbGF5b3V0PXtsYXlvdXR9IHN0eWxlPXtzdHlsZX0gLz47XG4gICAgfVxuICB9XG4gIFxuICBleHBvcnQgZGVmYXVsdCBTdGF0dXNQaWVDaGFydDsiXSwibmFtZXMiOlsiUmVhY3QiLCJQbG90IiwiU3RhdHVzUGllQ2hhcnQiLCJDb21wb25lbnQiLCJyZW5kZXIiLCJkYXJrTW9kZSIsInByb3BzIiwiZGF0YSIsInZhbHVlcyIsImF0dGVtcHRlZCIsIm5vdEF0dGVtcHRlZCIsInN1Y2Nlc3NmdWwiLCJsYWJlbHMiLCJ0eXBlIiwidGV4dGluZm8iLCJ0ZXh0cG9zaXRpb24iLCJhdXRvbWFyZ2luIiwibWFya2VyIiwiY29sb3JzIiwiaG92ZXJpbmZvIiwibGF5b3V0IiwidGl0bGUiLCJzaG93bGVnZW5kIiwiYXV0b3NpemUiLCJtYXJnaW4iLCJsIiwiciIsInQiLCJiIiwicGFwZXJfYmdjb2xvciIsInBsb3RfYmdjb2xvciIsImZvbnQiLCJjb2xvciIsInN0eWxlIiwid2lkdGgiLCJoZWlnaHQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./components/pieChart.js\n"));

/***/ })

});