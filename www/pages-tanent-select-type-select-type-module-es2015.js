(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-tanent-select-type-select-type-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/tanent/select-type/select-type.page.html":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/tanent/select-type/select-type.page.html ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header class=\"ion-no-border\">\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\" (click)=\"back()\">\r\n      <ion-buttons slot=\"start\">\r\n        <ion-back-button color=\"unit-btn\" text=\"\" icon=\"chevron-back-outline\"></ion-back-button>\r\n      </ion-buttons>\r\n    </ion-buttons>\r\n  </ion-toolbar>\r\n</ion-header>\r\n<ion-content>\r\n  <ion-card>\r\n    <ion-grid>\r\n      <ion-row>\r\n        <ion-col size=\"4\" *ngIf=\"data?.meta?.place?.images?.length\">\r\n          <img style=\"width: 100%; height: 100px; border-radius: 10px;\" src=\"{{data?.meta.place.images[0]}}\" />\r\n        </ion-col>\r\n        <ion-col size=\"4\" *ngIf=\"!data?.meta?.place?.images?.length\">\r\n          <img style=\"width: 100%; height: 100px; border-radius: 10px;\" src=\"../../../../assets/imgs/dummy_space.png\" />\r\n        </ion-col>\r\n        <ion-col size=\"8\" style=\"margin-top: 5%;\">\r\n          <span>{{data?.meta?.place?.name}} </span>\r\n          <br>\r\n          <br>\r\n          <span> Booked at: {{data?.meta?.spaceDetails?.startDate | date }} </span>\r\n          <br>\r\n          <br>\r\n          <span> Booked upto: {{data?.meta?.spaceDetails?.endDate | date}} </span>\r\n        </ion-col>\r\n      </ion-row>\r\n    </ion-grid>\r\n  </ion-card>\r\n  <div class=\"ion-padding\">\r\n    <div class=\"center\">\r\n      <ion-label style=\"font-size: large; text-align: center;\">\r\n        Do you want to extend your booking or schedule your pickup?\r\n      </ion-label>\r\n      <div style=\"padding-top: 20px;\">\r\n        <ion-grid>\r\n          <ion-row>\r\n            <ion-button style=\"width:100%\" color=\"unit-btn\" (click)=\"extend()\"> Extend\r\n            </ion-button>\r\n            <ion-button color=\"unit-btn\" style=\"width:100%\" (click)=\"pickUp()\"> Schedule Pickup\r\n            </ion-button>\r\n          </ion-row>\r\n        </ion-grid>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</ion-content>\r\n");

/***/ }),

/***/ "./src/app/pages/tanent/select-type/select-type-routing.module.ts":
/*!************************************************************************!*\
  !*** ./src/app/pages/tanent/select-type/select-type-routing.module.ts ***!
  \************************************************************************/
/*! exports provided: SelectTypePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectTypePageRoutingModule", function() { return SelectTypePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _select_type_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./select-type.page */ "./src/app/pages/tanent/select-type/select-type.page.ts");




const routes = [
    {
        path: '',
        component: _select_type_page__WEBPACK_IMPORTED_MODULE_3__["SelectTypePage"]
    }
];
let SelectTypePageRoutingModule = class SelectTypePageRoutingModule {
};
SelectTypePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], SelectTypePageRoutingModule);



/***/ }),

/***/ "./src/app/pages/tanent/select-type/select-type.module.ts":
/*!****************************************************************!*\
  !*** ./src/app/pages/tanent/select-type/select-type.module.ts ***!
  \****************************************************************/
/*! exports provided: SelectTypePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectTypePageModule", function() { return SelectTypePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _select_type_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./select-type-routing.module */ "./src/app/pages/tanent/select-type/select-type-routing.module.ts");
/* harmony import */ var _select_type_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./select-type.page */ "./src/app/pages/tanent/select-type/select-type.page.ts");







let SelectTypePageModule = class SelectTypePageModule {
};
SelectTypePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _select_type_routing_module__WEBPACK_IMPORTED_MODULE_5__["SelectTypePageRoutingModule"]
        ],
        declarations: [_select_type_page__WEBPACK_IMPORTED_MODULE_6__["SelectTypePage"]]
    })
], SelectTypePageModule);



/***/ }),

/***/ "./src/app/pages/tanent/select-type/select-type.page.scss":
/*!****************************************************************!*\
  !*** ./src/app/pages/tanent/select-type/select-type.page.scss ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3RhbmVudC9zZWxlY3QtdHlwZS9zZWxlY3QtdHlwZS5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/pages/tanent/select-type/select-type.page.ts":
/*!**************************************************************!*\
  !*** ./src/app/pages/tanent/select-type/select-type.page.ts ***!
  \**************************************************************/
/*! exports provided: SelectTypePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectTypePage", function() { return SelectTypePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");



let SelectTypePage = class SelectTypePage {
    constructor(route, router) {
        this.route = route;
        this.router = router;
    }
    ngOnInit() {
        this.route.queryParams.subscribe(params => {
            if (params && params.notification) {
                this.data = JSON.parse(params.notification);
                this.bookingId = this.data.meta.spaceDetails._id;
                this.startDate = this.data.meta.spaceDetails.endDate;
            }
        });
    }
    extend() {
        const navigationExtras = {
            queryParams: {
                bookingId: this.bookingId,
                startDate: this.startDate
            }
        };
        this.router.navigate(['extend-booking'], navigationExtras);
    }
    pickUp() {
        const navigationExtras = {
            queryParams: {
                bookingId: this.bookingId,
                endDate: this.startDate
            }
        };
        this.router.navigate(['pick-up'], navigationExtras);
    }
    back() {
        this.router.navigate(['tabs/tab3']);
    }
};
SelectTypePage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
SelectTypePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-select-type',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./select-type.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/tanent/select-type/select-type.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./select-type.page.scss */ "./src/app/pages/tanent/select-type/select-type.page.scss")).default]
    })
], SelectTypePage);



/***/ })

}]);
//# sourceMappingURL=pages-tanent-select-type-select-type-module-es2015.js.map