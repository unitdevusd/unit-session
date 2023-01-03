(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-owner-Add-space-edit-space-edit-space-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/owner/Add-space/edit-space/edit-space.page.html":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/owner/Add-space/edit-space/edit-space.page.html ***!
  \*************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar>\r\n    <ion-title>edit-unit</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n\r\n</ion-content>\r\n");

/***/ }),

/***/ "./src/app/pages/owner/Add-space/edit-space/edit-space-routing.module.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/pages/owner/Add-space/edit-space/edit-space-routing.module.ts ***!
  \*******************************************************************************/
/*! exports provided: EditSpacePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditSpacePageRoutingModule", function() { return EditSpacePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _edit_space_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./edit-space.page */ "./src/app/pages/owner/Add-space/edit-space/edit-space.page.ts");




const routes = [
    {
        path: '',
        component: _edit_space_page__WEBPACK_IMPORTED_MODULE_3__["EditSpacePage"]
    }
];
let EditSpacePageRoutingModule = class EditSpacePageRoutingModule {
};
EditSpacePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], EditSpacePageRoutingModule);



/***/ }),

/***/ "./src/app/pages/owner/Add-space/edit-space/edit-space.module.ts":
/*!***********************************************************************!*\
  !*** ./src/app/pages/owner/Add-space/edit-space/edit-space.module.ts ***!
  \***********************************************************************/
/*! exports provided: EditSpacePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditSpacePageModule", function() { return EditSpacePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _edit_space_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./edit-space-routing.module */ "./src/app/pages/owner/Add-space/edit-space/edit-space-routing.module.ts");
/* harmony import */ var _edit_space_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./edit-space.page */ "./src/app/pages/owner/Add-space/edit-space/edit-space.page.ts");







let EditSpacePageModule = class EditSpacePageModule {
};
EditSpacePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _edit_space_routing_module__WEBPACK_IMPORTED_MODULE_5__["EditSpacePageRoutingModule"]
        ],
        declarations: [_edit_space_page__WEBPACK_IMPORTED_MODULE_6__["EditSpacePage"]]
    })
], EditSpacePageModule);



/***/ }),

/***/ "./src/app/pages/owner/Add-space/edit-space/edit-space.page.scss":
/*!***********************************************************************!*\
  !*** ./src/app/pages/owner/Add-space/edit-space/edit-space.page.scss ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL293bmVyL0FkZC1zcGFjZS9lZGl0LXNwYWNlL2VkaXQtc3BhY2UucGFnZS5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/pages/owner/Add-space/edit-space/edit-space.page.ts":
/*!*********************************************************************!*\
  !*** ./src/app/pages/owner/Add-space/edit-space/edit-space.page.ts ***!
  \*********************************************************************/
/*! exports provided: EditSpacePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditSpacePage", function() { return EditSpacePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let EditSpacePage = class EditSpacePage {
    constructor() { }
    ngOnInit() {
    }
};
EditSpacePage.ctorParameters = () => [];
EditSpacePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-edit-space',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./edit-space.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/owner/Add-space/edit-space/edit-space.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./edit-space.page.scss */ "./src/app/pages/owner/Add-space/edit-space/edit-space.page.scss")).default]
    })
], EditSpacePage);



/***/ })

}]);
//# sourceMappingURL=pages-owner-Add-space-edit-space-edit-space-module-es2015.js.map