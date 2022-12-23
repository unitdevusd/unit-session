(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-owner-Add-space-space-properties-space-properties-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/owner/Add-space/space-properties/space-properties.page.html":
/*!*************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/owner/Add-space/space-properties/space-properties.page.html ***!
  \*************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header class=\"ion-no-border\">\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"end\" (click)=\"saveListing()\">\r\n      <ion-button color=\"unit-btn\" class=\"save\">\r\n        Save and Exit\r\n      </ion-button>\r\n      </ion-buttons>\r\n  </ion-toolbar>\r\n</ion-header>\r\n<ion-content>\r\n  <ion-item lines=\"none\">\r\n    <ion-label position=\"stacked\">What can be stored here?</ion-label>\r\n    <ion-select [(ngModel)]=\"selectedStorageType\" (ionChange)=\"storageSelected()\" *ngIf=\"storageType\">\r\n      <ion-select-option [value]=\"sp._id\" *ngFor=\"let sp of storageType\">\r\n        {{sp.name}}\r\n      </ion-select-option>\r\n    </ion-select>\r\n  </ion-item>\r\n  <ion-item lines=\"none\">\r\n    <ion-label position=\"stacked\">\r\n      How often can a tenant access this unit?\r\n    </ion-label>\r\n    <ion-select [(ngModel)]=\"selectedtimeSlotType\" (ionChange)=\"timeSlotSelected()\" *ngIf=\"timeSlotType\">\r\n      <ion-select-option [value]=\"st._id\" *ngFor=\"let st of timeSlotType\">\r\n        {{st.accessTime}}\r\n      </ion-select-option>\r\n    </ion-select>\r\n  </ion-item>\r\n  <ion-item lines=\"none\">\r\n    <ion-label position=\"stacked\">At what time of the day?</ion-label>\r\n    <ion-select [(ngModel)]=\"selectedAccessType\" (ionChange)=\"accessTypeSelected()\" *ngIf=\"acccessType\">\r\n      <ion-select-option [value]=\"at._id\" *ngFor=\"let at of acccessType\">\r\n        {{at.accessType}}\r\n      </ion-select-option>\r\n    </ion-select>\r\n  </ion-item>\r\n  <h4 style=\"margin-left: 20px !important;\">Add Discount for first Month</h4>\r\n  <ion-list>\r\n    <ion-select style=\"margin-left:15px; margin-right:15px\" placeholder=\"Discount\" [(ngModel)]=\"selectedDiscount\"\r\n      (ionChange)=\"discountSelected()\">\r\n      <ion-select-option [value]=\"d.value\" *ngFor=\"let d of discount\">\r\n        {{d.name}}\r\n      </ion-select-option>\r\n    </ion-select>\r\n  </ion-list>\r\n  <h4 class=\"rent-tt\">Booking Rates Offered</h4>\r\n  <ion-grid>\r\n    <ion-row>\r\n      <ion-col size=\"8\">\r\n        <ion-label position=\"stacked\">\r\n          Daily\r\n          <span class=\"range\">\r\n            {{dailyPriceRange}}\r\n          </span>\r\n        </ion-label>\r\n      </ion-col>\r\n      <ion-col size=\"4\">\r\n        <ion-input class=\"input\" placeholder=\"$\" [(ngModel)]=\"dailyPrice\"> </ion-input>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-grid>\r\n  <ion-grid>\r\n    <ion-row>\r\n      <ion-col size=\"8\">\r\n        <ion-label position=\"stacked\">\r\n          Weekly\r\n          <span class=\"range\">\r\n            {{weeklyPriceRange}}\r\n          </span>\r\n        </ion-label>\r\n      </ion-col>\r\n      <ion-col size=\"4\">\r\n        <ion-input class=\"input\" placeholder=\"$\" [(ngModel)]=\"weeklyPrice\"> </ion-input>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-grid>\r\n  <ion-grid>\r\n    <ion-row>\r\n      <ion-col size=\"8\">\r\n        <ion-label position=\"stacked\">\r\n          Monthly\r\n          <span class=\"range\">\r\n            {{monthlyPriceRange}}\r\n          </span>\r\n        </ion-label>\r\n      </ion-col>\r\n      <ion-col size=\"4\">\r\n        <ion-input class=\"input\" placeholder=\"$\" [(ngModel)]=\"monthlyPrice\"> </ion-input>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-grid>\r\n</ion-content>\r\n<ion-footer>\r\n  <ion-toolbar>\r\n    <ion-grid>\r\n      <ion-row>\r\n        <ion-col>\r\n          <ion-button color=\"unit-btn\" fill=\"clear\" (click)=\"backPage()\">\r\n            <ion-icon class=\"back_btn\" slot=\"start\" name=\"chevron-back-outline\"></ion-icon>\r\n            Back\r\n          </ion-button>\r\n        </ion-col>\r\n        <ion-col>\r\n        </ion-col>\r\n        <ion-col style=\"margin-left: 35%;\">\r\n          <ion-button color=\"unit-btn\" fill=\"clear\"\r\n            [disabled]=\"!selectedDiscount || !selectedAccessType || !selectedtimeSlotType || !selectedStorageType\"\r\n            (click)=\"next(2)\">\r\n            Next\r\n            <ion-icon class=\"next_btn\" slot=\"end\" name=\"chevron-forward-outline\"></ion-icon>\r\n          </ion-button>\r\n        </ion-col>\r\n      </ion-row>\r\n    </ion-grid>\r\n  </ion-toolbar>\r\n</ion-footer>");

/***/ }),

/***/ "./src/app/pages/owner/Add-space/space-properties/space-properties-routing.module.ts":
/*!*******************************************************************************************!*\
  !*** ./src/app/pages/owner/Add-space/space-properties/space-properties-routing.module.ts ***!
  \*******************************************************************************************/
/*! exports provided: SpacePropertiesPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SpacePropertiesPageRoutingModule", function() { return SpacePropertiesPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _space_properties_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./space-properties.page */ "./src/app/pages/owner/Add-space/space-properties/space-properties.page.ts");




const routes = [
    {
        path: '',
        component: _space_properties_page__WEBPACK_IMPORTED_MODULE_3__["SpacePropertiesPage"]
    }
];
let SpacePropertiesPageRoutingModule = class SpacePropertiesPageRoutingModule {
};
SpacePropertiesPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], SpacePropertiesPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/owner/Add-space/space-properties/space-properties.module.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/pages/owner/Add-space/space-properties/space-properties.module.ts ***!
  \***********************************************************************************/
/*! exports provided: SpacePropertiesPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SpacePropertiesPageModule", function() { return SpacePropertiesPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _space_properties_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./space-properties-routing.module */ "./src/app/pages/owner/Add-space/space-properties/space-properties-routing.module.ts");
/* harmony import */ var _space_properties_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./space-properties.page */ "./src/app/pages/owner/Add-space/space-properties/space-properties.page.ts");







let SpacePropertiesPageModule = class SpacePropertiesPageModule {
};
SpacePropertiesPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _space_properties_routing_module__WEBPACK_IMPORTED_MODULE_5__["SpacePropertiesPageRoutingModule"]
        ],
        declarations: [_space_properties_page__WEBPACK_IMPORTED_MODULE_6__["SpacePropertiesPage"]]
    })
], SpacePropertiesPageModule);



/***/ }),

/***/ "./src/app/pages/owner/Add-space/space-properties/space-properties.page.scss":
/*!***********************************************************************************!*\
  !*** ./src/app/pages/owner/Add-space/space-properties/space-properties.page.scss ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-item ion-label {\n  font-size: 15px;\n  margin-bottom: 10px;\n  color: #3c3939;\n  font-family: \"medium\";\n  opacity: 1;\n  margin-left: 0px;\n}\n\nion-item ion-input {\n  border: 1px solid  #cacaca !important;\n  border-radius: 30px;\n  --padding-start: 15px;\n}\n\nion-item ion-textarea {\n  border: 1px solid  #cacaca !important;\n  border-radius: 30px;\n  --padding-start: 15px;\n}\n\nion-item ion-select {\n  border: 1px solid #cacaca;\n  border-radius: 30px;\n  --padding-start: 15px;\n  --padding-end: 15px;\n  height: 43px;\n  font-family: medium;\n  margin-bottom: 12px;\n  color: #8c8c8c;\n  width: 96%;\n}\n\nh4 {\n  font-size: 15px;\n  margin-bottom: 10px;\n  color: #3c3939;\n  font-family: \"medium\";\n  margin-left: 10px !important;\n}\n\nion-grid ion-label {\n  font-size: 15px;\n  margin-bottom: 10px;\n  color: #3c3939;\n  font-family: \"medium\";\n  margin-left: 21px;\n}\n\nion-grid ion-input {\n  border: 1px solid #cacaca !important;\n  border-radius: 30px;\n  --padding-start: 15px;\n  width: 88%;\n  text-align: center;\n  color: #AFAFAF;\n}\n\nion-grid .range {\n  margin-top: 5px;\n  font-size: 14px;\n  color: \"quaternary\";\n  display: block;\n  margin-left: 22px;\n  font-size: 13px;\n}\n\nion-list {\n  padding-left: 12px;\n  padding-right: 12px;\n}\n\nion-list ion-label {\n  margin-bottom: 4px;\n  font-size: 16px;\n  font-weight: 600;\n  margin-bottom: 10px;\n}\n\nion-list ion-select {\n  --padding-start: 15px;\n  --padding-end: 15px;\n  padding-left: 12px;\n  padding-right: 12px;\n  border: 1px solid #cacaca !important;\n  border-radius: 30px;\n  height: 43px;\n  font-family: medium;\n  margin-bottom: 12px;\n  color: #8c8c8c;\n}\n\nion-toolbar ion-button {\n  text-transform: capitalize;\n  color: #f43f3f;\n  font-size: 16px;\n}\n\n.save {\n  font-family: \"medium\";\n  color: #f43f3f;\n  font-size: 15px;\n}\n\n.rent-tt {\n  font-size: 16px;\n  margin-bottom: 10px;\n  color: #000;\n  font-family: \"medium\";\n  opacity: 1;\n  margin-left: 28px !important;\n}\n\nion-footer {\n  height: 9% !important;\n}\n\nion-footer ion-button {\n  margin-top: -3px !important;\n}\n\nion-footer ion-button .next_btn {\n  margin-left: 0 !important;\n}\n\nion-footer ion-button .back_btn {\n  margin-right: 0 !important;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvb3duZXIvQWRkLXNwYWNlL3NwYWNlLXByb3BlcnRpZXMvc3BhY2UtcHJvcGVydGllcy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFFTSxlQUFlO0VBQ2YsbUJBQW1CO0VBQ25CLGNBQWM7RUFDZCxxQkFBcUI7RUFDckIsVUFBVTtFQUNWLGdCQUFnQjtBQUF0Qjs7QUFQQTtFQVVNLHFDQUFxQztFQUNyQyxtQkFBbUI7RUFDbkIscUJBQWdCO0FBQ3RCOztBQWJBO0VBZU0scUNBQXFDO0VBQ3JDLG1CQUFtQjtFQUNuQixxQkFBZ0I7QUFFdEI7O0FBbkJBO0VBb0JNLHlCQUF5QjtFQUN6QixtQkFBbUI7RUFDbkIscUJBQWdCO0VBQ2hCLG1CQUFjO0VBQ2QsWUFBWTtFQUNaLG1CQUFtQjtFQUNuQixtQkFBbUI7RUFDbkIsY0FBYztFQUNkLFVBQVU7QUFHaEI7O0FBQUU7RUFDRSxlQUFlO0VBQ2YsbUJBQW1CO0VBQ25CLGNBQWM7RUFDZCxxQkFBcUI7RUFDckIsNEJBQTRCO0FBR2hDOztBQUFFO0VBRUksZUFBZTtFQUNmLG1CQUFtQjtFQUNuQixjQUFjO0VBQ2QscUJBQXFCO0VBQ3JCLGlCQUFpQjtBQUV2Qjs7QUFSRTtFQVNJLG9DQUFvQztFQUNwQyxtQkFBbUI7RUFDbkIscUJBQWdCO0VBQ2hCLFVBQVU7RUFDVixrQkFBa0I7RUFDbEIsY0FBYztBQUdwQjs7QUFqQkU7RUFpQkksZUFBZTtFQUNmLGVBQWU7RUFDZixtQkFBbUI7RUFDbkIsY0FBYztFQUNkLGlCQUFpQjtFQUNqQixlQUFlO0FBSXJCOztBQUFFO0VBQ0Usa0JBQWtCO0VBQ2xCLG1CQUFtQjtBQUd2Qjs7QUFMRTtFQUlJLGtCQUFrQjtFQUNsQixlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLG1CQUFtQjtBQUt6Qjs7QUFaRTtFQVVJLHFCQUFnQjtFQUNoQixtQkFBYztFQUNkLGtCQUFrQjtFQUNsQixtQkFBbUI7RUFDbkIsb0NBQW9DO0VBQ3BDLG1CQUFtQjtFQUNuQixZQUFZO0VBQ1osbUJBQW1CO0VBQ25CLG1CQUFtQjtFQUNuQixjQUFjO0FBTXBCOztBQUZFO0VBRUksMEJBQTBCO0VBQzFCLGNBQWM7RUFDZCxlQUFlO0FBSXJCOztBQURFO0VBQ0UscUJBQXFCO0VBQ3JCLGNBQWM7RUFDZCxlQUFlO0FBSW5COztBQUZFO0VBQ0UsZUFBZTtFQUNmLG1CQUFtQjtFQUNuQixXQUFXO0VBQ1gscUJBQXFCO0VBQ3JCLFVBQVU7RUFDViw0QkFBNEI7QUFLaEM7O0FBSEU7RUFDRSxxQkFBcUI7QUFNekI7O0FBUEU7RUFHSSwyQkFBMkI7QUFRakM7O0FBWEU7RUFLTSx5QkFBeUI7QUFVakM7O0FBZkU7RUFRTSwwQkFBMEI7QUFXbEMiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9vd25lci9BZGQtc3BhY2Uvc3BhY2UtcHJvcGVydGllcy9zcGFjZS1wcm9wZXJ0aWVzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1pdGVtIHtcclxuICAgIGlvbi1sYWJlbCB7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICAgICAgY29sb3I6ICMzYzM5Mzk7XHJcbiAgICAgIGZvbnQtZmFtaWx5OiBcIm1lZGl1bVwiO1xyXG4gICAgICBvcGFjaXR5OiAxO1xyXG4gICAgICBtYXJnaW4tbGVmdDogMHB4O1xyXG4gICAgfVxyXG4gICAgaW9uLWlucHV0IHtcclxuICAgICAgYm9yZGVyOiAxcHggc29saWQgICNjYWNhY2EgIWltcG9ydGFudDtcclxuICAgICAgYm9yZGVyLXJhZGl1czogMzBweDtcclxuICAgICAgLS1wYWRkaW5nLXN0YXJ0OiAxNXB4O1xyXG4gICAgfVxyXG4gICAgaW9uLXRleHRhcmVhIHtcclxuICAgICAgYm9yZGVyOiAxcHggc29saWQgICNjYWNhY2EgIWltcG9ydGFudDtcclxuICAgICAgYm9yZGVyLXJhZGl1czogMzBweDtcclxuICAgICAgLS1wYWRkaW5nLXN0YXJ0OiAxNXB4O1xyXG4gICAgfVxyXG4gICAgaW9uLXNlbGVjdCB7XHJcbiAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNjYWNhY2E7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDMwcHg7XHJcbiAgICAgIC0tcGFkZGluZy1zdGFydDogMTVweDtcclxuICAgICAgLS1wYWRkaW5nLWVuZDogMTVweDtcclxuICAgICAgaGVpZ2h0OiA0M3B4O1xyXG4gICAgICBmb250LWZhbWlseTogbWVkaXVtO1xyXG4gICAgICBtYXJnaW4tYm90dG9tOiAxMnB4O1xyXG4gICAgICBjb2xvcjogIzhjOGM4YztcclxuICAgICAgd2lkdGg6IDk2JTtcclxuICAgIH1cclxuICB9XHJcbiAgaDQge1xyXG4gICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICAgIGNvbG9yOiAjM2MzOTM5O1xyXG4gICAgZm9udC1mYW1pbHk6IFwibWVkaXVtXCI7XHJcbiAgICBtYXJnaW4tbGVmdDogMTBweCAhaW1wb3J0YW50O1xyXG4gIH1cclxuICBcclxuICBpb24tZ3JpZCB7XHJcbiAgICBpb24tbGFiZWwge1xyXG4gICAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgICAgIGNvbG9yOiAjM2MzOTM5O1xyXG4gICAgICBmb250LWZhbWlseTogXCJtZWRpdW1cIjtcclxuICAgICAgbWFyZ2luLWxlZnQ6IDIxcHg7XHJcbiAgICB9XHJcbiAgICBpb24taW5wdXQge1xyXG4gICAgICBib3JkZXI6IDFweCBzb2xpZCAjY2FjYWNhICFpbXBvcnRhbnQ7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDMwcHg7XHJcbiAgICAgIC0tcGFkZGluZy1zdGFydDogMTVweDtcclxuICAgICAgd2lkdGg6IDg4JTtcclxuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICBjb2xvcjogI0FGQUZBRjtcclxuICAgIH1cclxuICAgIC5yYW5nZSB7XHJcbiAgICAgIG1hcmdpbi10b3A6IDVweDtcclxuICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICBjb2xvcjogXCJxdWF0ZXJuYXJ5XCI7XHJcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICBtYXJnaW4tbGVmdDogMjJweDtcclxuICAgICAgZm9udC1zaXplOiAxM3B4O1xyXG4gICAgfVxyXG4gIH1cclxuICBcclxuICBpb24tbGlzdCB7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDEycHg7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAxMnB4O1xyXG4gICAgaW9uLWxhYmVsIHtcclxuICAgICAgbWFyZ2luLWJvdHRvbTogNHB4O1xyXG4gICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgICB9XHJcbiAgICBpb24tc2VsZWN0IHtcclxuICAgICAgLS1wYWRkaW5nLXN0YXJ0OiAxNXB4O1xyXG4gICAgICAtLXBhZGRpbmctZW5kOiAxNXB4O1xyXG4gICAgICBwYWRkaW5nLWxlZnQ6IDEycHg7XHJcbiAgICAgIHBhZGRpbmctcmlnaHQ6IDEycHg7XHJcbiAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNjYWNhY2EgIWltcG9ydGFudDtcclxuICAgICAgYm9yZGVyLXJhZGl1czogMzBweDtcclxuICAgICAgaGVpZ2h0OiA0M3B4O1xyXG4gICAgICBmb250LWZhbWlseTogbWVkaXVtO1xyXG4gICAgICBtYXJnaW4tYm90dG9tOiAxMnB4O1xyXG4gICAgICBjb2xvcjogIzhjOGM4YztcclxuICAgIH1cclxuICB9XHJcbiAgXHJcbiAgaW9uLXRvb2xiYXIge1xyXG4gICAgaW9uLWJ1dHRvbiB7XHJcbiAgICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xyXG4gICAgICBjb2xvcjogI2Y0M2YzZjtcclxuICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgfVxyXG4gIH1cclxuICAuc2F2ZSB7XHJcbiAgICBmb250LWZhbWlseTogXCJtZWRpdW1cIjtcclxuICAgIGNvbG9yOiAjZjQzZjNmO1xyXG4gICAgZm9udC1zaXplOiAxNXB4O1xyXG4gIH1cclxuICAucmVudC10dCB7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gICAgY29sb3I6ICMwMDA7XHJcbiAgICBmb250LWZhbWlseTogXCJtZWRpdW1cIjtcclxuICAgIG9wYWNpdHk6IDE7XHJcbiAgICBtYXJnaW4tbGVmdDogMjhweCAhaW1wb3J0YW50O1xyXG4gIH1cclxuICBpb24tZm9vdGVyIHtcclxuICAgIGhlaWdodDogOSUgIWltcG9ydGFudDtcclxuICAgIGlvbi1idXR0b24ge1xyXG4gICAgICBtYXJnaW4tdG9wOiAtM3B4ICFpbXBvcnRhbnQ7XHJcbiAgICAgIC5uZXh0X2J0biB7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDAgIWltcG9ydGFudDtcclxuICAgICAgfVxyXG4gICAgICAuYmFja19idG4ge1xyXG4gICAgICAgIG1hcmdpbi1yaWdodDogMCAhaW1wb3J0YW50O1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG4gICJdfQ== */");

/***/ }),

/***/ "./src/app/pages/owner/Add-space/space-properties/space-properties.page.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/pages/owner/Add-space/space-properties/space-properties.page.ts ***!
  \*********************************************************************************/
/*! exports provided: SpacePropertiesPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SpacePropertiesPage", function() { return SpacePropertiesPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var src_app_pages_config_config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/pages/config/config */ "./src/app/pages/config/config.ts");
/* harmony import */ var src_app_services_api_service_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/api-service.service */ "./src/app/services/api-service.service.ts");
/* harmony import */ var src_app_services_global_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/global.service */ "./src/app/services/global.service.ts");
/* harmony import */ var src_app_services_loader_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/loader.service */ "./src/app/services/loader.service.ts");
/* harmony import */ var src_app_services_toast_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/services/toast.service */ "./src/app/services/toast.service.ts");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/__ivy_ngcc__/fesm2015/ionic-storage.js");










let SpacePropertiesPage = class SpacePropertiesPage {
    constructor(router, _api, route, toast, _loader, _gs, alrtCtrl, storage, _zone) {
        this.router = router;
        this._api = _api;
        this.route = route;
        this.toast = toast;
        this._loader = _loader;
        this._gs = _gs;
        this.alrtCtrl = alrtCtrl;
        this.storage = storage;
        this._zone = _zone;
        this.url = src_app_pages_config_config__WEBPACK_IMPORTED_MODULE_4__["config"].url;
        this.features = [];
        this.selectedAmenities = [];
        this.selectedDiscount = 25;
        this.discount = [
            { name: '0%', value: '0' },
            { name: '25%', value: '25' },
            { name: '50%', value: '50' },
            { name: '75%', value: '75' }
        ];
    }
    ngOnInit() {
        this.getUserData();
        this.route.queryParams.subscribe(params => {
            if (params) {
                if (params.spaceDetails) {
                    this.spaceDetails = JSON.parse(params.spaceDetails);
                    console.log(this.spaceDetails);
                    this.priviousPage = params.priviousPage;
                    setTimeout(() => {
                        this.addSpaceInfo(this.spaceDetails);
                    }, 500);
                }
            }
        });
    }
    getUserData() {
        this.storage.get("session").then((session) => {
            if (session) {
                this.storage.get("org").then((org) => {
                    if (org) {
                        this._zone.run(() => {
                            this.token = session;
                            this.orgId = org;
                            this.placeMeta();
                        });
                    }
                });
            }
        });
    }
    placeMeta() {
        this._loader.present('');
        if (this.token) {
            const params = {
                apiKey: src_app_pages_config_config__WEBPACK_IMPORTED_MODULE_4__["KEY"].apikey
            };
            this._api.postRequest(this.url + src_app_pages_config_config__WEBPACK_IMPORTED_MODULE_4__["UNITURL"].placeMeta, params).subscribe((result) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                this._loader.dismiss();
                if (result.success) {
                    console.log('placemeta');
                    this.acccessType = result.data.list.accessType;
                    this.features = result.data.list.amenities;
                    this.spaceType = result.data.list.spaceType;
                    this.storageType = result.data.list.itemType;
                    this.timeSlotType = result.data.list.timeAccessType;
                    console.log(this.spaceType);
                }
                else {
                    this.toast.presentToast(result.message);
                }
            }));
        }
    }
    saveListing() {
        if (this.selectedAccessType || this.selectedAccessType || this.selectedtimeSlotType || this.selectedStorageType
            || this.dailyPrice || this.weeklyPrice || this.monthlyPrice) {
            this.addSpace(2);
        }
        else {
            this.addSpace(1);
        }
    }
    backPage() {
        let navigationExtras = {
            queryParams: {
                spaceDetails: JSON.stringify(this.spaceDetails),
                priviousPage: 'tab4'
            }
        };
        this.router.navigate(['space-details'], navigationExtras);
    }
    accessTypeSelected() { }
    timeSlotSelected() { }
    storageSelected() { }
    spaceSelected() { }
    backAlert() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const alert = yield this.alrtCtrl.create({
                header: 'Lose your data',
                message: 'You may loose your data. Are you sure that you want to start all over again?',
                buttons: [
                    {
                        text: 'Cancel',
                        role: 'cancel',
                        cssClass: 'secondary',
                        handler: (blah) => { }
                    }, {
                        text: 'Back',
                        handler: () => {
                            this.back();
                        }
                    }
                ]
            });
            yield alert.present();
        });
    }
    back() {
        if (this.priviousPage) {
            this.router.navigate(['tabs/my-spaces']);
        }
        else {
            this.router.navigate(['add-address']);
        }
    }
    addSpaceInfo(spaceDetails) {
        console.log('In add spaceInfoHelloo', spaceDetails);
        this.spaceId = spaceDetails._id;
        this.selectedAccessType = spaceDetails.timeAccessStatus;
        this.selectedtimeSlotType = spaceDetails.accessStatus;
        this.selectedStorageType = spaceDetails.storeItems;
        this.selectedspaceType = spaceDetails.spaceType;
        console.log(this.selectedspaceType);
        console.log(spaceDetails.pricing);
        if (spaceDetails.pricing) {
            this.dailyPrice = spaceDetails.pricing.daily;
            this.monthlyPrice = spaceDetails.pricing.monthly;
            this.weeklyPrice = spaceDetails.pricing.weekly;
        }
        console.log(this.spaceType);
        this.selectedDiscount = spaceDetails.discountPercentage;
        if (this.selectedspaceType.length) {
            this.item = this.spaceType.filter(x => x._id == this.selectedspaceType);
            if (this.item.length) {
                this.dailyPriceRange = `Recommended from  $ ${this.item[0].prices.daily.min} to $ ${this.item[0].prices.daily.max}`;
                this.weeklyPriceRange = `Recommended from  $ ${this.item[0].prices.weekly.min} to $ ${this.item[0].prices.weekly.max}`;
                this.monthlyPriceRange = `Recommended from   $ ${this.item[0].prices.monthly.min} to $ ${this.item[0].prices.monthly.max}`;
            }
        }
    }
    next(index) {
        console.log(index);
        this.slideIndex = index;
        this.navigate(index);
    }
    navigate(index) {
        const params = {
            token: this.token,
            orgId: this.orgId,
            name: this.spaceDetails.name,
            address: this.spaceDetails.address,
            loc: this.spaceDetails.loc,
            description: this.spaceDetails.description,
            size: this.spaceDetails.size,
            spaceType: this.selectedspaceType,
            storeItems: this.selectedStorageType,
            accessStatus: this.selectedtimeSlotType,
            timeAccessStatus: this.selectedAccessType,
            discountFirstMonth: true,
            discountPercentage: this.selectedDiscount,
            index: index,
            images: this.spaceDetails.images,
            videos: this.spaceDetails.videos,
            amenities: this.spaceDetails.amenities,
            pricing: {
                daily: parseInt(this.dailyPrice),
                weekly: parseInt(this.weeklyPrice),
                monthly: parseInt(this.monthlyPrice)
            },
            spaceTypeName: this.spaceDetails.spaceTypeName
        };
        console.log('In space-prop', params);
        if (this.spaceId) {
            params['_id'] = this.spaceId;
        }
        let navigationExtras = {
            queryParams: {
                spaceDetails: JSON.stringify(params),
                priviousPage: 'tabs/my-spaces'
            }
        };
        this.router.navigate(['space-description'], navigationExtras);
    }
    addSpace(index) {
        if (this.token) {
            const params = {
                token: this.token,
                orgId: this.orgId,
                name: this.spaceDetails.name,
                address: this.spaceDetails.address,
                loc: this.spaceDetails.loc,
                description: this.spaceDetails.description,
                size: this.spaceDetails.size,
                spaceType: this.selectedspaceType,
                storeItems: this.selectedStorageType,
                accessStatus: this.selectedtimeSlotType,
                timeAccessStatus: this.selectedAccessType,
                discountFirstMonth: this.spaceDetails.discountFirstMonth,
                discountPercentage: this.selectedDiscount,
                index: index,
                images: this.spaceDetails.images,
                videos: this.spaceDetails.videos,
                amenities: this.spaceDetails.amenities,
                pricing: {
                    daily: parseInt(this.dailyPrice),
                    weekly: parseInt(this.weeklyPrice),
                    monthly: parseInt(this.monthlyPrice)
                },
                spaceTypeName: this.spaceDetails.spaceTypeName
            };
            this.addPlaceApi(params);
        }
    }
    addPlaceApi(place) {
        if (this.spaceId) {
            place['placeId'] = this.spaceId;
            this.updateSpace(place);
        }
        else {
            this.addNewPlace(place);
        }
    }
    updateSpace(place) {
        this._loader.present('Adding Space. Please wait..');
        this._api.postRequest(this.url + src_app_pages_config_config__WEBPACK_IMPORTED_MODULE_4__["UNITURL"].updateSpace, place).subscribe((result) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (result.success) {
                this.toast.presentToast(result.message);
            }
            this._gs.sendRefershScreen("refresh");
            this._loader.dismiss();
            this.router.navigate(['tabs/my-spaces']);
        })), (error) => {
            this._loader.dismiss();
            this.toast.presentToast(error.description);
        };
    }
    addNewPlace(place) {
        this._api.postRequest(this.url + src_app_pages_config_config__WEBPACK_IMPORTED_MODULE_4__["UNITURL"].addSpace, place).subscribe((result) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (result.success) {
                this.toast.presentToast(result.message);
            }
            this._gs.sendRefershScreen("refresh");
            this._loader.dismiss();
            this.router.navigate(['tabs/my-spaces']);
        })), (error) => {
            this._loader.dismiss();
            this.toast.presentToast(error.description);
        };
    }
    discountSelected() {
        console.log(this.selectedDiscount);
    }
};
SpacePropertiesPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: src_app_services_api_service_service__WEBPACK_IMPORTED_MODULE_5__["ApiService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: src_app_services_toast_service__WEBPACK_IMPORTED_MODULE_8__["ToastService"] },
    { type: src_app_services_loader_service__WEBPACK_IMPORTED_MODULE_7__["LoaderService"] },
    { type: src_app_services_global_service__WEBPACK_IMPORTED_MODULE_6__["GlobalService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"] },
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_9__["Storage"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"] }
];
SpacePropertiesPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-space-properties',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./space-properties.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/owner/Add-space/space-properties/space-properties.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./space-properties.page.scss */ "./src/app/pages/owner/Add-space/space-properties/space-properties.page.scss")).default]
    })
], SpacePropertiesPage);



/***/ })

}]);
//# sourceMappingURL=pages-owner-Add-space-space-properties-space-properties-module-es2015.js.map