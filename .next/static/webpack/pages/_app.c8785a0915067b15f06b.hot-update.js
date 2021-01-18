webpackHotUpdate_N_E("pages/_app",{

/***/ "./actions/axios.js":
/*!**************************!*\
  !*** ./actions/axios.js ***!
  \**************************/
/*! exports provided: axiosPublic, axiosAuth */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"axiosPublic\", function() { return axiosPublic; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"axiosAuth\", function() { return axiosAuth; });\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _firebase__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../firebase */ \"./firebase.js\");\n\n\n//const axios = require(\"axios\");\n//const firebase = require(\"../firebase\");\n\n\nvar axiosPublic = axios__WEBPACK_IMPORTED_MODULE_2___default.a.create({\n  baseURL: \"http://localhost:8000/api/v1/\"\n});\nvar axiosAuth = axios__WEBPACK_IMPORTED_MODULE_2___default.a.create({\n  baseURL: \"http://localhost:8000/api/v1\"\n});\naxiosAuth.interceptors.request.use( /*#__PURE__*/function () {\n  var _ref = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[\"default\"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(config) {\n    var user;\n    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {\n      while (1) {\n        switch (_context.prev = _context.next) {\n          case 0:\n            console.log(\"AXIOS AUTH ======> \", user);\n            _context.next = 3;\n            return _firebase__WEBPACK_IMPORTED_MODULE_3__[\"default\"].auth().currenuser;\n\n          case 3:\n            user = _context.sent;\n\n            if (!user) {\n              _context.next = 10;\n              break;\n            }\n\n            _context.next = 7;\n            return user.getIdToken(true);\n\n          case 7:\n            _context.t0 = _context.sent;\n            _context.next = 11;\n            break;\n\n          case 10:\n            _context.t0 = \"\";\n\n          case 11:\n            config.headers.token = _context.t0;\n            return _context.abrupt(\"return\", config);\n\n          case 13:\n          case \"end\":\n            return _context.stop();\n        }\n      }\n    }, _callee);\n  }));\n\n  return function (_x) {\n    return _ref.apply(this, arguments);\n  };\n}(), function (error) {\n  return Promise.reject(error);\n});\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYWN0aW9ucy9heGlvcy5qcz83NjRhIl0sIm5hbWVzIjpbImF4aW9zUHVibGljIiwiYXhpb3MiLCJjcmVhdGUiLCJiYXNlVVJMIiwiYXhpb3NBdXRoIiwiaW50ZXJjZXB0b3JzIiwicmVxdWVzdCIsInVzZSIsImNvbmZpZyIsImNvbnNvbGUiLCJsb2ciLCJ1c2VyIiwiZmlyZWJhc2UiLCJhdXRoIiwiY3VycmVudXNlciIsImdldElkVG9rZW4iLCJoZWFkZXJzIiwidG9rZW4iLCJlcnJvciIsIlByb21pc2UiLCJyZWplY3QiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFTyxJQUFNQSxXQUFXLEdBQUdDLDRDQUFLLENBQUNDLE1BQU4sQ0FBYTtBQUN0Q0MsU0FBTyxFQUFFO0FBRDZCLENBQWIsQ0FBcEI7QUFJQSxJQUFNQyxTQUFTLEdBQUdILDRDQUFLLENBQUNDLE1BQU4sQ0FBYTtBQUNwQ0MsU0FBTyxFQUFFO0FBRDJCLENBQWIsQ0FBbEI7QUFJUEMsU0FBUyxDQUFDQyxZQUFWLENBQXVCQyxPQUF2QixDQUErQkMsR0FBL0I7QUFBQSw4TEFDRSxpQkFBT0MsTUFBUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDRUMsbUJBQU8sQ0FBQ0MsR0FBUixDQUFZLHFCQUFaLEVBQW1DQyxJQUFuQztBQURGO0FBQUEsbUJBRW1CQyxpREFBUSxDQUFDQyxJQUFULEdBQWdCQyxVQUZuQzs7QUFBQTtBQUVNSCxnQkFGTjs7QUFBQSxpQkFHeUJBLElBSHpCO0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUEsbUJBR3NDQSxJQUFJLENBQUNJLFVBQUwsQ0FBZ0IsSUFBaEIsQ0FIdEM7O0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQSwwQkFHOEQsRUFIOUQ7O0FBQUE7QUFHRVAsa0JBQU0sQ0FBQ1EsT0FBUCxDQUFlQyxLQUhqQjtBQUFBLDZDQUlTVCxNQUpUOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEdBREY7O0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FPRSxVQUFDVSxLQUFELEVBQVc7QUFDVCxTQUFPQyxPQUFPLENBQUNDLE1BQVIsQ0FBZUYsS0FBZixDQUFQO0FBQ0QsQ0FUSCIsImZpbGUiOiIuL2FjdGlvbnMvYXhpb3MuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvL2NvbnN0IGF4aW9zID0gcmVxdWlyZShcImF4aW9zXCIpO1xuLy9jb25zdCBmaXJlYmFzZSA9IHJlcXVpcmUoXCIuLi9maXJlYmFzZVwiKTtcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcbmltcG9ydCBmaXJlYmFzZSBmcm9tIFwiLi4vZmlyZWJhc2VcIjtcblxuZXhwb3J0IGNvbnN0IGF4aW9zUHVibGljID0gYXhpb3MuY3JlYXRlKHtcbiAgYmFzZVVSTDogXCJodHRwOi8vbG9jYWxob3N0OjgwMDAvYXBpL3YxL1wiLFxufSk7XG5cbmV4cG9ydCBjb25zdCBheGlvc0F1dGggPSBheGlvcy5jcmVhdGUoe1xuICBiYXNlVVJMOiBcImh0dHA6Ly9sb2NhbGhvc3Q6ODAwMC9hcGkvdjFcIixcbn0pO1xuXG5heGlvc0F1dGguaW50ZXJjZXB0b3JzLnJlcXVlc3QudXNlKFxuICBhc3luYyAoY29uZmlnKSA9PiB7XG4gICAgY29uc29sZS5sb2coXCJBWElPUyBBVVRIID09PT09PT4gXCIsIHVzZXIpO1xuICAgIGxldCB1c2VyID0gYXdhaXQgZmlyZWJhc2UuYXV0aCgpLmN1cnJlbnVzZXI7XG4gICAgY29uZmlnLmhlYWRlcnMudG9rZW4gPSB1c2VyID8gYXdhaXQgdXNlci5nZXRJZFRva2VuKHRydWUpIDogXCJcIjtcbiAgICByZXR1cm4gY29uZmlnO1xuICB9LFxuICAoZXJyb3IpID0+IHtcbiAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QoZXJyb3IpO1xuICB9XG4pO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./actions/axios.js\n");

/***/ })

})