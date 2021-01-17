/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
eval("var canvas = document.querySelector(\"#view\");\nvar g = canvas.getContext(\"2d\");\n\nfunction fitToWindow() {\n  if (canvas) {\n    canvas.width = window.innerWidth;\n    canvas.height = window.innerHeight;\n  }\n}\n\nfunction initHandlers() {\n  window.addEventListener(\"load\", function () {\n    fitToWindow();\n  });\n  window.addEventListener(\"resize\", function () {\n    fitToWindow();\n  });\n}\n\nfunction render() {}\n\ninitHandlers();\n\n(function () {\n  render();\n  window.requestAnimationFrame(arguments.callee);\n})();\n\n//# sourceURL=webpack://graph-algorithm/./src/main.js?");
/******/ })()
;