(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-tanent-start-booking-start-booking-module"],{

/***/ "./src/app/pages/tanent/start-booking/start-booking-routing.module.ts":
/*!****************************************************************************!*\
  !*** ./src/app/pages/tanent/start-booking/start-booking-routing.module.ts ***!
  \****************************************************************************/
/*! exports provided: StartBookingPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StartBookingPageRoutingModule", function() { return StartBookingPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _start_booking_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./start-booking.page */ "./src/app/pages/tanent/start-booking/start-booking.page.ts");




const routes = [
    {
        path: '',
        component: _start_booking_page__WEBPACK_IMPORTED_MODULE_3__["StartBookingPage"]
    }
];
let StartBookingPageRoutingModule = class StartBookingPageRoutingModule {
};
StartBookingPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], StartBookingPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/tanent/start-booking/start-booking.module.ts":
/*!********************************************************************!*\
  !*** ./src/app/pages/tanent/start-booking/start-booking.module.ts ***!
  \********************************************************************/
/*! exports provided: StartBookingPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StartBookingPageModule", function() { return StartBookingPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _start_booking_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./start-booking-routing.module */ "./src/app/pages/tanent/start-booking/start-booking-routing.module.ts");
/* harmony import */ var _start_booking_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./start-booking.page */ "./src/app/pages/tanent/start-booking/start-booking.page.ts");
/* harmony import */ var ion2_calendar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ion2-calendar */ "./node_modules/ion2-calendar/__ivy_ngcc__/dist/index.js");
/* harmony import */ var ion2_calendar__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(ion2_calendar__WEBPACK_IMPORTED_MODULE_7__);







// Calendar UI Module

let StartBookingPageModule = class StartBookingPageModule {
};
StartBookingPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            ion2_calendar__WEBPACK_IMPORTED_MODULE_7__["CalendarModule"],
            _start_booking_routing_module__WEBPACK_IMPORTED_MODULE_5__["StartBookingPageRoutingModule"]
        ],
        declarations: [_start_booking_page__WEBPACK_IMPORTED_MODULE_6__["StartBookingPage"]]
    })
], StartBookingPageModule);



/***/ })

}]);
//# sourceMappingURL=pages-tanent-start-booking-start-booking-module-es2015.js.map