/******/ (() => { // webpackBootstrap
/******/ 	// runtime can't be in strict mode because a global variable is assign and maybe created.
/******/ 	var __webpack_modules__ = ({

/***/ "./src/admin/components/SettingsPage.js":
/*!**********************************************!*\
  !*** ./src/admin/components/SettingsPage.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ AutoPostBadgePage)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var flarum_admin_app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/admin/app */ "flarum/admin/app");
/* harmony import */ var flarum_admin_app__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_admin_app__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var flarum_components_ExtensionPage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! flarum/components/ExtensionPage */ "flarum/components/ExtensionPage");
/* harmony import */ var flarum_components_ExtensionPage__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(flarum_components_ExtensionPage__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var flarum_common_components_Button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! flarum/common/components/Button */ "flarum/common/components/Button");
/* harmony import */ var flarum_common_components_Button__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(flarum_common_components_Button__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var flarum_common_utils_ItemList__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! flarum/common/utils/ItemList */ "flarum/common/utils/ItemList");
/* harmony import */ var flarum_common_utils_ItemList__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(flarum_common_utils_ItemList__WEBPACK_IMPORTED_MODULE_4__);





var AutoPostBadgePage = /*#__PURE__*/function (_ExtensionPage) {
  (0,_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(AutoPostBadgePage, _ExtensionPage);
  function AutoPostBadgePage() {
    return _ExtensionPage.apply(this, arguments) || this;
  }
  var _proto = AutoPostBadgePage.prototype;
  _proto.oninit = function oninit(vnode) {
    _ExtensionPage.prototype.oninit.call(this, vnode);
  };
  _proto.content = function content() {
    return m("div", {
      className: "container"
    }, m("div", {
      className: "row"
    }, m("div", {
      className: "column"
    }, this.iconManagerItems().toArray()), m("div", {
      className: "column"
    }, this.labelManagerItems().toArray())));
  };
  _proto.iconManagerItems = function iconManagerItems() {
    var items = new (flarum_common_utils_ItemList__WEBPACK_IMPORTED_MODULE_4___default())();
    items.add('heading', m("div", null, m("h2", {
      "class": "h2titleext"
    }, flarum_admin_app__WEBPACK_IMPORTED_MODULE_1___default().translator.trans('justoverclock-auto-post-count-badge.admin.settings.icon-manager.title')), m("p", {
      "class": "helpText"
    }, flarum_admin_app__WEBPACK_IMPORTED_MODULE_1___default().translator.trans('justoverclock-auto-post-count-badge.admin.settings.icon-manager.help_text', {
      a: m("a", {
        href: "https://fontawesome.com/icons?m=free",
        tabindex: "-1"
      })
    }))), 100);
    items.add('tierOne', m("div", {
      "class": "formOne"
    }, m("div", {
      "class": "helptext"
    }, flarum_admin_app__WEBPACK_IMPORTED_MODULE_1___default().translator.trans('justoverclock-auto-post-count-badge.admin.settings.tier', {
      tier: 1,
      from: 0,
      to: 9
    })), m("input", {
      type: "text",
      name: "tierOne",
      "class": "FormControl autopost",
      placeholder: "fas fa-baby",
      bidi: this.setting('justoverclock-auto-post-count-badge.levelOne')
    }), m((flarum_common_components_Button__WEBPACK_IMPORTED_MODULE_3___default()), {
      onclick: this.saveSettings.bind(this),
      className: "Button Button--primary autopost"
    }, m("i", {
      className: "fas fa-save autopost"
    }))), 95);
    items.add('tierTwo', m("div", {
      className: "formtwo"
    }, m("div", {
      className: "helptext"
    }, flarum_admin_app__WEBPACK_IMPORTED_MODULE_1___default().translator.trans('justoverclock-auto-post-count-badge.admin.settings.tier', {
      tier: 2,
      from: 10,
      to: 49
    })), m("input", {
      type: "text",
      name: "tierTwo",
      "class": "FormControl autopost",
      placeholder: "fas fa-child",
      bidi: this.setting('justoverclock-auto-post-count-badge.levelTwo')
    }), m((flarum_common_components_Button__WEBPACK_IMPORTED_MODULE_3___default()), {
      onclick: this.saveSettings.bind(this),
      className: "Button Button--primary autopost"
    }, m("i", {
      className: "fas fa-save autopost"
    }))), 90);
    items.add('tierThree', m("div", {
      className: "formTree"
    }, m("div", {
      className: "helptext"
    }, flarum_admin_app__WEBPACK_IMPORTED_MODULE_1___default().translator.trans('justoverclock-auto-post-count-badge.admin.settings.tier', {
      tier: 3,
      from: 50,
      to: 99
    })), m("input", {
      type: "text",
      name: "tierTree",
      className: "FormControl autopost",
      placeholder: "fas fa-bullhorn",
      bidi: this.setting('justoverclock-auto-post-count-badge.levelThree')
    }), m((flarum_common_components_Button__WEBPACK_IMPORTED_MODULE_3___default()), {
      onclick: this.saveSettings.bind(this),
      className: "Button Button--primary autopost"
    }, m("i", {
      className: "fas fa-save autopost"
    }))), 85);
    items.add('tierFour', m("div", {
      className: "formFour"
    }, m("div", {
      className: "helptext"
    }, flarum_admin_app__WEBPACK_IMPORTED_MODULE_1___default().translator.trans('justoverclock-auto-post-count-badge.admin.settings.tier', {
      tier: 4,
      from: 100,
      to: 299
    })), m("input", {
      type: "text",
      name: "tierFour",
      className: "FormControl autopost",
      placeholder: "fas fa-chalkboard-teacher",
      bidi: this.setting('justoverclock-auto-post-count-badge.levelFour')
    }), m((flarum_common_components_Button__WEBPACK_IMPORTED_MODULE_3___default()), {
      onclick: this.saveSettings.bind(this),
      className: "Button Button--primary autopost"
    }, m("i", {
      className: "fas fa-save autopost"
    }))), 80);
    items.add('tierFive', m("div", {
      className: "formFive"
    }, m("div", {
      className: "helptext"
    }, flarum_admin_app__WEBPACK_IMPORTED_MODULE_1___default().translator.trans('justoverclock-auto-post-count-badge.admin.settings.tier', {
      tier: 5,
      from: 300,
      to: 599
    })), m("input", {
      type: "text",
      name: "tierFive",
      className: "FormControl autopost",
      placeholder: "fab fa-optin-monster",
      bidi: this.setting('justoverclock-auto-post-count-badge.levelFive')
    }), m((flarum_common_components_Button__WEBPACK_IMPORTED_MODULE_3___default()), {
      onclick: this.saveSettings.bind(this),
      className: "Button Button--primary autopost"
    }, m("i", {
      className: "fas fa-save autopost"
    }))), 75);
    items.add('tierSix', m("div", {
      className: "formSix"
    }, m("div", {
      className: "helptext"
    }, flarum_admin_app__WEBPACK_IMPORTED_MODULE_1___default().translator.trans('justoverclock-auto-post-count-badge.admin.settings.tier', {
      tier: 6,
      from: 600,
      to: 999
    })), m("input", {
      type: "text",
      name: "tierSix",
      className: "FormControl autopost",
      placeholder: "fas fa-graduation-cap",
      bidi: this.setting('justoverclock-auto-post-count-badge.levelSix')
    }), m((flarum_common_components_Button__WEBPACK_IMPORTED_MODULE_3___default()), {
      onclick: this.saveSettings.bind(this),
      className: "Button Button--primary autopost"
    }, m("i", {
      className: "fas fa-save autopost"
    }))), 70);
    items.add('tierSeven', m("div", {
      className: "formSeven"
    }, m("div", {
      className: "helptext"
    }, flarum_admin_app__WEBPACK_IMPORTED_MODULE_1___default().translator.trans('justoverclock-auto-post-count-badge.admin.settings.tier', {
      tier: 7,
      from: 1000,
      to: 1999
    })), m("input", {
      type: "text",
      name: "tierSeven",
      className: "FormControl autopost",
      placeholder: "fas fa-medal",
      bidi: this.setting('justoverclock-auto-post-count-badge.levelSeven')
    }), m((flarum_common_components_Button__WEBPACK_IMPORTED_MODULE_3___default()), {
      onclick: this.saveSettings.bind(this),
      className: "Button Button--primary autopost"
    }, m("i", {
      className: "fas fa-save autopost"
    }))), 65);
    items.add('tierEight', m("div", {
      className: "formEight"
    }, m("div", {
      className: "helptext"
    }, flarum_admin_app__WEBPACK_IMPORTED_MODULE_1___default().translator.trans('justoverclock-auto-post-count-badge.admin.settings.tier', {
      tier: 8,
      from: 2000,
      to: 3999
    })), m("input", {
      type: "text",
      name: "tierEight",
      className: "FormControl autopost",
      placeholder: "fas fa-stethoscope",
      bidi: this.setting('justoverclock-auto-post-count-badge.levelEight')
    }), m((flarum_common_components_Button__WEBPACK_IMPORTED_MODULE_3___default()), {
      onclick: this.saveSettings.bind(this),
      className: "Button Button--primary autopost"
    }, m("i", {
      className: "fas fa-save autopost"
    }))), 60);
    items.add('tierNine', m("div", {
      className: "formNine"
    }, m("div", {
      className: "helptext"
    }, flarum_admin_app__WEBPACK_IMPORTED_MODULE_1___default().translator.trans('justoverclock-auto-post-count-badge.admin.settings.tier', {
      tier: 9,
      from: 4000,
      to: 7999
    })), m("input", {
      type: "text",
      name: "tierNine",
      className: "FormControl autopost",
      placeholder: "fas fa-user-shield",
      bidi: this.setting('justoverclock-auto-post-count-badge.levelNine')
    }), m((flarum_common_components_Button__WEBPACK_IMPORTED_MODULE_3___default()), {
      onclick: this.saveSettings.bind(this),
      className: "Button Button--primary autopost"
    }, m("i", {
      className: "fas fa-save autopost"
    }))), 55);
    return items;
  };
  _proto.labelManagerItems = function labelManagerItems() {
    var items = new (flarum_common_utils_ItemList__WEBPACK_IMPORTED_MODULE_4___default())();
    items.add('heading', m("div", null, m("h2", {
      "class": "h2titleext"
    }, flarum_admin_app__WEBPACK_IMPORTED_MODULE_1___default().translator.trans('justoverclock-auto-post-count-badge.admin.settings.label-manager.title')), m("p", {
      "class": "helpText"
    }, flarum_admin_app__WEBPACK_IMPORTED_MODULE_1___default().translator.trans('justoverclock-auto-post-count-badge.admin.settings.label-manager.help'))), 100);
    items.add('tierOne', m("div", {
      className: "formOne"
    }, m("div", {
      className: "helptext"
    }, flarum_admin_app__WEBPACK_IMPORTED_MODULE_1___default().translator.trans('justoverclock-auto-post-count-badge.admin.settings.tier', {
      tier: 1,
      from: 0,
      to: 9
    })), m("input", {
      type: "text",
      name: "badgeOne",
      className: "FormControl autopost",
      placeholder: "The Baby",
      bidi: this.setting('justoverclock-auto-post-count-badge.badgeOne')
    }), m((flarum_common_components_Button__WEBPACK_IMPORTED_MODULE_3___default()), {
      onclick: this.saveSettings.bind(this),
      className: "Button Button--primary autopost"
    }, m("i", {
      className: "fas fa-save autopost"
    }))), 95);
    items.add('tierTwo', m("div", {
      className: "formtwo"
    }, m("div", {
      className: "helptext"
    }, flarum_admin_app__WEBPACK_IMPORTED_MODULE_1___default().translator.trans('justoverclock-auto-post-count-badge.admin.settings.tier', {
      tier: 2,
      from: 10,
      to: 49
    })), m("input", {
      type: "text",
      name: "badgeTwo",
      className: "FormControl autopost",
      placeholder: "The Newbie",
      bidi: this.setting('justoverclock-auto-post-count-badge.badgeTwo')
    }), m((flarum_common_components_Button__WEBPACK_IMPORTED_MODULE_3___default()), {
      onclick: this.saveSettings.bind(this),
      className: "Button Button--primary autopost"
    }, m("i", {
      className: "fas fa-save autopost"
    }))), 90);
    items.add('tierThree', m("div", {
      className: "formTree"
    }, m("div", {
      className: "helptext"
    }, flarum_admin_app__WEBPACK_IMPORTED_MODULE_1___default().translator.trans('justoverclock-auto-post-count-badge.admin.settings.tier', {
      tier: 3,
      from: 50,
      to: 99
    })), m("input", {
      type: "text",
      name: "badgeThree",
      className: "FormControl autopost",
      placeholder: "The Talker",
      bidi: this.setting('justoverclock-auto-post-count-badge.badgeThree')
    }), m((flarum_common_components_Button__WEBPACK_IMPORTED_MODULE_3___default()), {
      onclick: this.saveSettings.bind(this),
      className: "Button Button--primary autopost"
    }, m("i", {
      className: "fas fa-save autopost"
    }))), 85);
    items.add('tierFour', m("div", {
      className: "formFour"
    }, m("div", {
      className: "helptext"
    }, flarum_admin_app__WEBPACK_IMPORTED_MODULE_1___default().translator.trans('justoverclock-auto-post-count-badge.admin.settings.tier', {
      tier: 4,
      from: 100,
      to: 299
    })), m("input", {
      type: "text",
      name: "badgeFour",
      className: "FormControl autopost",
      placeholder: "The teacher",
      bidi: this.setting('justoverclock-auto-post-count-badge.badgeFour')
    }), m((flarum_common_components_Button__WEBPACK_IMPORTED_MODULE_3___default()), {
      onclick: this.saveSettings.bind(this),
      className: "Button Button--primary autopost"
    }, m("i", {
      className: "fas fa-save autopost"
    }))), 80);
    items.add('tierFive', m("div", {
      className: "formFive"
    }, m("div", {
      className: "helptext"
    }, flarum_admin_app__WEBPACK_IMPORTED_MODULE_1___default().translator.trans('justoverclock-auto-post-count-badge.admin.settings.tier', {
      tier: 5,
      from: 300,
      to: 599
    })), m("input", {
      type: "text",
      name: "badgeFive",
      className: "FormControl autopost",
      placeholder: "The Monster!",
      bidi: this.setting('justoverclock-auto-post-count-badge.badgeFive')
    }), m((flarum_common_components_Button__WEBPACK_IMPORTED_MODULE_3___default()), {
      onclick: this.saveSettings.bind(this),
      className: "Button Button--primary autopost"
    }, m("i", {
      className: "fas fa-save autopost"
    }))), 75);
    items.add('tierSix', m("div", {
      className: "formSix"
    }, m("div", {
      className: "helptext"
    }, flarum_admin_app__WEBPACK_IMPORTED_MODULE_1___default().translator.trans('justoverclock-auto-post-count-badge.admin.settings.tier', {
      tier: 6,
      from: 600,
      to: 999
    })), m("input", {
      type: "text",
      name: "badgeSix",
      className: "FormControl autopost",
      placeholder: "The Guru!",
      bidi: this.setting('justoverclock-auto-post-count-badge.badgeSix')
    }), m((flarum_common_components_Button__WEBPACK_IMPORTED_MODULE_3___default()), {
      onclick: this.saveSettings.bind(this),
      className: "Button Button--primary autopost"
    }, m("i", {
      className: "fas fa-save autopost"
    }))), 70);
    items.add('tierSeven', m("div", {
      className: "formSeven"
    }, m("div", {
      className: "helptext"
    }, flarum_admin_app__WEBPACK_IMPORTED_MODULE_1___default().translator.trans('justoverclock-auto-post-count-badge.admin.settings.tier', {
      tier: 7,
      from: 1000,
      to: 1999
    })), m("input", {
      type: "text",
      name: "badgeSeven",
      className: "FormControl autopost",
      placeholder: "The Flarumist!",
      bidi: this.setting('justoverclock-auto-post-count-badge.badgeSeven')
    }), m((flarum_common_components_Button__WEBPACK_IMPORTED_MODULE_3___default()), {
      onclick: this.saveSettings.bind(this),
      className: "Button Button--primary autopost"
    }, m("i", {
      className: "fas fa-save autopost"
    }))), 65);
    items.add('tierEight', m("div", {
      className: "formEight"
    }, m("div", {
      className: "helptext"
    }, flarum_admin_app__WEBPACK_IMPORTED_MODULE_1___default().translator.trans('justoverclock-auto-post-count-badge.admin.settings.tier', {
      tier: 8,
      from: 2000,
      to: 3999
    })), m("input", {
      type: "text",
      name: "badgeEight",
      className: "FormControl autopost",
      placeholder: "Expert",
      bidi: this.setting('justoverclock-auto-post-count-badge.badgeEight')
    }), m((flarum_common_components_Button__WEBPACK_IMPORTED_MODULE_3___default()), {
      onclick: this.saveSettings.bind(this),
      className: "Button Button--primary autopost"
    }, m("i", {
      className: "fas fa-save autopost"
    }))), 60);
    items.add('tierNine', m("div", {
      className: "formNine"
    }, m("div", {
      className: "helptext"
    }, flarum_admin_app__WEBPACK_IMPORTED_MODULE_1___default().translator.trans('justoverclock-auto-post-count-badge.admin.settings.tier', {
      tier: 9,
      from: 4000,
      to: 7999
    })), m("input", {
      type: "text",
      name: "badgeNine",
      className: "FormControl autopost",
      placeholder: "Untouchable",
      bidi: this.setting('justoverclock-auto-post-count-badge.badgeNine')
    }), m((flarum_common_components_Button__WEBPACK_IMPORTED_MODULE_3___default()), {
      onclick: this.saveSettings.bind(this),
      className: "Button Button--primary autopost"
    }, m("i", {
      className: "fas fa-save autopost"
    }))), 55);
    return items;
  };
  return AutoPostBadgePage;
}((flarum_components_ExtensionPage__WEBPACK_IMPORTED_MODULE_2___default()));


/***/ }),

/***/ "./src/admin/components/index.ts":
/*!***************************************!*\
  !*** ./src/admin/components/index.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SettingsPage: () => (/* reexport safe */ _SettingsPage__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _SettingsPage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SettingsPage */ "./src/admin/components/SettingsPage.js");



/***/ }),

/***/ "./src/admin/index.js":
/*!****************************!*\
  !*** ./src/admin/index.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   components: () => (/* reexport module object */ _components__WEBPACK_IMPORTED_MODULE_2__)
/* harmony export */ });
/* harmony import */ var flarum_admin_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! flarum/admin/app */ "flarum/admin/app");
/* harmony import */ var flarum_admin_app__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(flarum_admin_app__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_SettingsPage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/SettingsPage */ "./src/admin/components/SettingsPage.js");
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components */ "./src/admin/components/index.ts");


flarum_admin_app__WEBPACK_IMPORTED_MODULE_0___default().initializers.add('justoverclock/auto-post-count-badge', function () {
  flarum_admin_app__WEBPACK_IMPORTED_MODULE_0___default().extensionData["for"]('justoverclock-auto-post-count-badge').registerPage(_components_SettingsPage__WEBPACK_IMPORTED_MODULE_1__["default"]);
});



/***/ }),

/***/ "flarum/admin/app":
/*!**************************************************!*\
  !*** external "flarum.core.compat['admin/app']" ***!
  \**************************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.core.compat['admin/app'];

/***/ }),

/***/ "flarum/common/components/Button":
/*!*****************************************************************!*\
  !*** external "flarum.core.compat['common/components/Button']" ***!
  \*****************************************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.core.compat['common/components/Button'];

/***/ }),

/***/ "flarum/common/utils/ItemList":
/*!**************************************************************!*\
  !*** external "flarum.core.compat['common/utils/ItemList']" ***!
  \**************************************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.core.compat['common/utils/ItemList'];

/***/ }),

/***/ "flarum/components/ExtensionPage":
/*!*****************************************************************!*\
  !*** external "flarum.core.compat['components/ExtensionPage']" ***!
  \*****************************************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.core.compat['components/ExtensionPage'];

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js ***!
  \******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _inheritsLoose)
/* harmony export */ });
/* harmony import */ var _setPrototypeOf_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./setPrototypeOf.js */ "./node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js");

function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  (0,_setPrototypeOf_js__WEBPACK_IMPORTED_MODULE_0__["default"])(subClass, superClass);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _setPrototypeOf)
/* harmony export */ });
function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };
  return _setPrototypeOf(o, p);
}

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
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!******************!*\
  !*** ./admin.js ***!
  \******************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   components: () => (/* reexport safe */ _src_admin__WEBPACK_IMPORTED_MODULE_0__.components)
/* harmony export */ });
/* harmony import */ var _src_admin__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./src/admin */ "./src/admin/index.js");

})();

module.exports = __webpack_exports__;
/******/ })()
;
//# sourceMappingURL=admin.js.map