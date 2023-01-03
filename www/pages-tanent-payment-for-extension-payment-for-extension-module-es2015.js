(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-tanent-payment-for-extension-payment-for-extension-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/tanent/payment-for-extension/payment-for-extension.page.html":
/*!**************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/tanent/payment-for-extension/payment-for-extension.page.html ***!
  \**************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar>\r\n    <ion-title>payment-for-extension</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n\r\n</ion-content>\r\n");

/***/ }),

/***/ "./src/app/pages/tanent/payment-for-extension/payment-for-extension-routing.module.ts":
/*!********************************************************************************************!*\
  !*** ./src/app/pages/tanent/payment-for-extension/payment-for-extension-routing.module.ts ***!
  \********************************************************************************************/
/*! exports provided: PaymentForExtensionPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaymentForExtensionPageRoutingModule", function() { return PaymentForExtensionPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _payment_for_extension_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./payment-for-extension.page */ "./src/app/pages/tanent/payment-for-extension/payment-for-extension.page.ts");




const routes = [
    {
        path: '',
        component: _payment_for_extension_page__WEBPACK_IMPORTED_MODULE_3__["PaymentForExtensionPage"]
    }
];
let PaymentForExtensionPageRoutingModule = class PaymentForExtensionPageRoutingModule {
};
PaymentForExtensionPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], PaymentForExtensionPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/tanent/payment-for-extension/payment-for-extension.module.ts":
/*!************************************************************************************!*\
  !*** ./src/app/pages/tanent/payment-for-extension/payment-for-extension.module.ts ***!
  \************************************************************************************/
/*! exports provided: PaymentForExtensionPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaymentForExtensionPageModule", function() { return PaymentForExtensionPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _payment_for_extension_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./payment-for-extension-routing.module */ "./src/app/pages/tanent/payment-for-extension/payment-for-extension-routing.module.ts");
/* harmony import */ var _payment_for_extension_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./payment-for-extension.page */ "./src/app/pages/tanent/payment-for-extension/payment-for-extension.page.ts");







let PaymentForExtensionPageModule = class PaymentForExtensionPageModule {
};
PaymentForExtensionPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _payment_for_extension_routing_module__WEBPACK_IMPORTED_MODULE_5__["PaymentForExtensionPageRoutingModule"]
        ],
        declarations: [_payment_for_extension_page__WEBPACK_IMPORTED_MODULE_6__["PaymentForExtensionPage"]]
    })
], PaymentForExtensionPageModule);



/***/ }),

/***/ "./src/app/pages/tanent/payment-for-extension/payment-for-extension.page.scss":
/*!************************************************************************************!*\
  !*** ./src/app/pages/tanent/payment-for-extension/payment-for-extension.page.scss ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3RhbmVudC9wYXltZW50LWZvci1leHRlbnNpb24vcGF5bWVudC1mb3ItZXh0ZW5zaW9uLnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/pages/tanent/payment-for-extension/payment-for-extension.page.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/pages/tanent/payment-for-extension/payment-for-extension.page.ts ***!
  \**********************************************************************************/
/*! exports provided: PaymentForExtensionPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaymentForExtensionPage", function() { return PaymentForExtensionPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let PaymentForExtensionPage = class PaymentForExtensionPage {
    constructor() { }
    ngOnInit() {
    }
};
PaymentForExtensionPage.ctorParameters = () => [];
PaymentForExtensionPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-payment-for-extension',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./payment-for-extension.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/tanent/payment-for-extension/payment-for-extension.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./payment-for-extension.page.scss */ "./src/app/pages/tanent/payment-for-extension/payment-for-extension.page.scss")).default]
    })
], PaymentForExtensionPage);



/***/ })

}]);
//# sourceMappingURL=pages-tanent-payment-for-extension-payment-for-extension-module-es2015.js.map