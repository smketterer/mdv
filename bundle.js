(function(e, a) { for(var i in a) e[i] = a[i]; }(exports, /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("blessed-vue");

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_blessed_vue__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_blessed_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_blessed_vue__);
//
//
//
//
//
//
//
//
//

const fs = __webpack_require__(7)
const marked = __webpack_require__(8)
const TerminalRenderer = __webpack_require__(9)



marked.setOptions({
  renderer: new TerminalRenderer()
})

/* harmony default export */ __webpack_exports__["a"] = ({
  name: 'app',
  computed: {
    contentStyle: function() {
      return {
        scrollbar: {
          bg: 'gray'
        },
      }
    }
  },
  data: function() {
    return {
      page: 0,
      pages: [],
      pageTitle: '',
      pageContent: '',
    }
  },
  mounted: function() {
    // Close the program when CTRL+C is pressed.
    this.$refs.screen.key(['C-c', 'escape'], () => {
      process.exit(0)
    })

    this.$refs.content.focus()

    // Error if no file provided.
    if (typeof process.argv[2] === 'undefined') {
      throw new Error("No file provided.")
    }

    // Read file with UTF-8 encoding, splitting it into pages based on !!!
    fs.readFile(process.argv[2], 'utf8', (err, contents) => {
      // Generates SGR sequences which can be read by blessed.
      if (contents.indexOf('!!!') !== -1) {
        this.pages = contents.split('!!!').slice(1)
        this.pageTitle = marked(this.pages[0].split(/\n/)[0])
        this.pageContent = marked(this.pages[0].split(/\n/).slice(1).join('\n'))
      } else {
        this.pages = [contents]
        this.pageTitle = ''
        this.pageContent = marked(this.pages[0])
      }
    })

    this.$refs.screen.key(['right', 'space'], () => {
      this.nextSlide()
    })
    this.$refs.screen.key(['left'], () => {
      this.prevSlide()
    })
  },
  methods: {
    prevSlide() {
      if (this.page > 0) {
        this.pageContent = ''
        this.$refs.content.setScroll(0)
        this.page -= 1
        this.pageTitle = marked(this.pages[this.page].split(/\n/)[0])
        __WEBPACK_IMPORTED_MODULE_0_blessed_vue___default.a.nextTick(() => {
          this.pageContent = marked(this.pages[this.page].split(/\n/).slice(1).join('\n'))
        })
      }
    },
    nextSlide() {
      if (this.page < this.pages.length - 2) {
        this.pageContent = ''
        this.$refs.content.setScroll(0)
        this.page += 1
        this.pageTitle = marked(this.pages[this.page].split(/\n/)[0])
        __WEBPACK_IMPORTED_MODULE_0_blessed_vue___default.a.nextTick(() => {
          this.pageContent = marked(this.pages[this.page].split(/\n/).slice(1).join('\n'))
        })
      }
    }
  }
});


/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__node_modules_vue_loader_lib_selector_type_script_index_0_App_vue__ = __webpack_require__(1);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_472cff63_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_App_vue__ = __webpack_require__(6);
var normalizeComponent = __webpack_require__(5)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = "304e3d20"
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__node_modules_vue_loader_lib_selector_type_script_index_0_App_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_472cff63_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_App_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "App.vue"

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_blessed_vue__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_blessed_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_blessed_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vuex__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vuex___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_vuex__);



__WEBPACK_IMPORTED_MODULE_0_blessed_vue___default.a.use(__WEBPACK_IMPORTED_MODULE_1_vuex___default.a)

const state = {}
const mutations = {}
const actions = {}
const getters = {}

/* harmony default export */ __webpack_exports__["a"] = (new __WEBPACK_IMPORTED_MODULE_1_vuex___default.a.Store({
  state,
  getters,
  actions,
  mutations
}));


/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_blessed_vue__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_blessed_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_blessed_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__App_vue__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__store__ = __webpack_require__(3);




const el = __WEBPACK_IMPORTED_MODULE_0_blessed_vue___default.a.dom.createElement()

__WEBPACK_IMPORTED_MODULE_0_blessed_vue___default.a.dom.append(el)

const vm = new __WEBPACK_IMPORTED_MODULE_0_blessed_vue___default.a({
  name: 'app',
  components: {
    App: __WEBPACK_IMPORTED_MODULE_1__App_vue__["a" /* default */]
  },
  store: __WEBPACK_IMPORTED_MODULE_2__store__["a" /* default */],
  template: '<App/>'
}).$mount(el)


/***/ }),
/* 5 */
/***/ (function(module, exports) {

/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file.
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

module.exports = function normalizeComponent (
  rawScriptExports,
  compiledTemplate,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier /* server only */
) {
  var esModule
  var scriptExports = rawScriptExports = rawScriptExports || {}

  // ES6 modules interop
  var type = typeof rawScriptExports.default
  if (type === 'object' || type === 'function') {
    esModule = rawScriptExports
    scriptExports = rawScriptExports.default
  }

  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (compiledTemplate) {
    options.render = compiledTemplate.render
    options.staticRenderFns = compiledTemplate.staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = injectStyles
  }

  if (hook) {
    var functional = options.functional
    var existing = functional
      ? options.render
      : options.beforeCreate

    if (!functional) {
      // inject component registration as beforeCreate hook
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    } else {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functioal component in vue file
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return existing(h, context)
      }
    }
  }

  return {
    esModule: esModule,
    exports: scriptExports,
    options: options
  }
}


/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "screen",
    { ref: "screen", attrs: { smartCSR: true, autoPadding: true } },
    [
      _c("text", {
        attrs: {
          top: "0",
          left: "center",
          top: 2,
          content: "" + this.pageTitle
        }
      }),
      _vm._v(" "),
      _c(
        "box",
        {
          attrs: {
            border: { type: "line" },
            top: this.pageTitle ? 4 : 2,
            bottom: 2,
            left: 4,
            right: 4
          }
        },
        [
          _c("box", {
            ref: "content",
            style: _vm.contentStyle,
            attrs: {
              top: 1,
              bottom: 1,
              left: 2,
              right: 2,
              autofocus: true,
              scrollbar: true,
              alwaysScroll: true,
              scrollable: true,
              mouse: true,
              keys: true,
              vi: true,
              content: this.pageContent
            },
            on: { click: _vm.nextSlide }
          })
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = require("fs");

/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = require("marked");

/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = require("marked-terminal");

/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = require("vuex");

/***/ })
/******/ ])));