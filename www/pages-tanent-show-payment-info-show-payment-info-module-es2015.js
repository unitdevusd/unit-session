(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-tanent-show-payment-info-show-payment-info-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/tanent/show-payment-info/show-payment-info.page.html":
/*!******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/tanent/show-payment-info/show-payment-info.page.html ***!
  \******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar>\r\n    <ion-title></ion-title>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button color=\"unit-btn\" text=\"\" icon=\"chevron-back-outline\"></ion-back-button>\r\n    </ion-buttons>\r\n  </ion-toolbar>\r\n</ion-header>\r\n<ion-content>\r\n  <ion-grid>\r\n    <ion-row>\r\n      <ion-col size=\"6\">\r\n        <ion-item lines=\"none\">\r\n          <ion-label>\r\n            <h2 class=\"home-titile\">{{placeDetails.name}}</h2>\r\n            <h2 class=\"home-titile\">{{placeDetails.address}}</h2>\r\n            <div class=\"card-content\" *ngIf=\"placeDetails?.pricing\">\r\n              ${{placeDetails.pricing.daily}}/ <span>day</span>\r\n            </div>\r\n            <div class=\"rating\">\r\n              <ion-icon name=\"star\" color=\"unit-btn\"></ion-icon>\r\n              <ion-icon name=\"star\" color=\"unit-btn\"></ion-icon>\r\n              <ion-icon name=\"star\" color=\"unit-btn\"> </ion-icon>\r\n              <ion-icon name=\"star\" color=\"unit-btn\"></ion-icon>\r\n              <ion-icon name=\"star-outline\"></ion-icon>\r\n            </div>\r\n          </ion-label>\r\n        </ion-item>\r\n      </ion-col>\r\n      <ion-col size=\"6\" class=\"place_img\">\r\n        <img *ngIf=\"placeDetails.images.length; else noPlaceImage\" src=\"{{placeDetails.images[0]}}\" />\r\n        <ng-template #noPlaceImage>\r\n          <img src=\"../../../../assets/imgs/dummy_space.png\" />\r\n        </ng-template>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-grid>\r\n  <hr class=\"newline\">\r\n  <ion-grid class=\"ion-no-padding\">\r\n    <ion-row class=\"ion-no-padding\">\r\n      <ion-col size=\"10\" class=\"ion-no-padding\">\r\n        <ion-item lines=\"none\" class=\"booking_info\">\r\n          <ion-label>\r\n            <h2>From</h2>\r\n            <h3> {{bookingDetails.startDate | date:'mediumDate' }} - {{bookingDetails.endDate | date:'mediumDate' }}\r\n            </h3>\r\n          </ion-label>\r\n        </ion-item>\r\n      </ion-col>\r\n      <ion-col size=\"2\" class=\"edit_icon ion-no-padding\">\r\n        <img src=\"../../../../assets/imgs/feather-edit-2.png\" (click)=\"editDates()\" />\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-grid>\r\n  <hr class=\"newline\">\r\n  <ion-grid class=\"ion-no-padding price_cal\">\r\n    <ion-row class=\"ion-no-padding\">\r\n      <ion-col class=\"ion-no-padding\">\r\n        <h2>Fees and Tax Details</h2>\r\n        <ul>\r\n          <li>\r\n            <span class=\"span_left\">\r\n              <span *ngIf=\"showDay\">${{placeDetails.pricing.daily}}</span>\r\n              <span *ngIf=\"showWeek\">${{placeDetails.pricing.weekly}} </span>\r\n              <span *ngIf=\"showMonth\">${{placeDetails.pricing.monthly}} </span>\r\n              x\r\n              <span *ngIf=\"showDay\"> {{noOfDays}}\r\n                <span *ngIf=\"noOfDays > 1\"> day's </span>\r\n                <span *ngIf=\"noOfDays == 1\"> day </span>\r\n                (${{placeDetails.pricing.daily}}/day)\r\n              </span>\r\n              <span *ngIf=\"showWeek\"> {{weeks}}\r\n                <span *ngIf=\"weeks > 1\"> week's </span>\r\n                <span *ngIf=\"weeks == 1\"> week </span>\r\n                (${{placeDetails.pricing.weekly}}/week)\r\n              </span>\r\n              <span *ngIf=\"showMonth\">\r\n                {{months}}\r\n                <span *ngIf=\"months > 1\"> months's </span>\r\n                <span *ngIf=\"months == 1\"> month </span>\r\n                (${{placeDetails.pricing.monthly}}/month)\r\n              </span>\r\n            </span>\r\n            <span class=\"span_right\"> ${{price}} </span>\r\n          </li>\r\n          <!-- <li>\r\n            <span class=\"span_left\">Cleaning Fees </span>\r\n            <span class=\"span_right\"> $0</span>\r\n          </li>\r\n          <li>\r\n            <span class=\"span_left\"> Occupancy Taxes </span>\r\n            <span class=\"span_right\"> $0 </span>\r\n          </li> -->\r\n          <li *ngIf=\"showMonth && placeDetails.discountFirstMonth\">\r\n            <span class=\"span_left\">{{placeDetails.discountPercentage}}% monthly Discount</span>\r\n            <span class=\"span_right\"> - ${{discount}}</span>\r\n          </li>\r\n          <li class=\"total\">\r\n            <span class=\"span_left\">Total</span>\r\n            <span class=\"span_right\">\r\n              <span *ngIf=\"showMonth\">\r\n                <span *ngIf=\"placeDetails.discountFirstMonth\">${{pricewithDiscount}} </span>\r\n                <span *ngIf=\"!placeDetails.discountFirstMonth\">\r\n                  ${{price}}\r\n                </span>\r\n              </span>\r\n              <span *ngIf=\"showWeek || showDay\">\r\n                ${{price}}\r\n              </span>\r\n            </span>\r\n          </li>\r\n        </ul>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-grid>\r\n  <hr class=\"newline\">\r\n  <ion-list lines=\"none\" class=\"ion-no-padding\">\r\n    <ion-item class=\"ion-no-padding\">\r\n      <!-- <ion-label style=\"margin-left: 20px; font-size: 22px;\"> -->\r\n        <ion-icon color=\"tertiary\" name=\"card-outline\" style=\"margin-left: 20px; font-size: 22px;\"></ion-icon>\r\n        <!-- <img style=\"margin-left: 10px;\" src=\"../../../../assets/imgs/material-payment.png\" /> -->\r\n        <!-- <span class=\"card-text\">Pay in Full</span> -->\r\n      <!-- </ion-label> -->\r\n      <ion-select [(ngModel)]=\"paymentMethod\" side=\"end\" placeholder=\"Select payment method\"\r\n        (ionChange)=\"onChange($event)\" slot=\"end\">\r\n        <ion-select-option value=\"full\"> Pay in full</ion-select-option>\r\n        <ion-select-option *ngIf=\"months > 1\" value=\"recurring\">Recurring payments</ion-select-option>\r\n      </ion-select>\r\n      <img style=\"margin-right: 15px;\" src=\"../../../../assets/imgs/down_arrow.png\" slot=\"end\" />\r\n    </ion-item>\r\n  </ion-list>\r\n  <ion-item *ngIf=\"paymentMethod == 'recurring' && months > 1 \" lines=\"none\" class=\"ion-no-padding\">\r\n    <ion-label style=\"margin-left: 20px;\">\r\n      <small *ngIf=\"!placeDetails.discountFirstMonth\"> $ {{chargedPrice}} (first month)</small>\r\n      <small *ngIf=\"placeDetails.discountFirstMonth\"> $ {{priceAfterDiscount}} (first month)</small>\r\n      <br>\r\n      <small> $ {{chargedPrice}} / monthly up to {{bookingDetails?.endDate | date:'mediumDate' }} </small>\r\n    </ion-label>\r\n  </ion-item>\r\n  <hr class=\"newline\">\r\n  <ion-grid class=\"ion-no-padding\">\r\n    <ion-row class=\"ion-no-padding\">\r\n      <ion-col>\r\n        <ion-list *ngIf=\"cards.length != 0\" lines=\"none\">\r\n          <ion-list-header>\r\n            <h4> Payment Mode </h4>\r\n          </ion-list-header>\r\n          <div *ngFor=\"let card of cards\" style=\"text-align: center;\">\r\n            <ion-grid>\r\n              <ion-row>\r\n                <ion-col size=\"3\">\r\n                  <img src=\"../../../../assets/imgs/visa.png\" />\r\n                </ion-col>\r\n                <ion-col size=\"6\"> {{ card.payment.creditCard.cardNumber}} </ion-col>\r\n                <ion-col size=\"3\">\r\n                  <img src=\"../../../../assets/imgs/awesome-check.png\" />\r\n                </ion-col>\r\n              </ion-row>\r\n            </ion-grid>\r\n          </div>\r\n        </ion-list>\r\n        <a class=\"card_add\" *ngIf=\"cards.length == 0\" (click)=\"showCard()\">Add Card</a>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-grid>\r\n  <ion-grid *ngIf=\"showcardForm\">\r\n    <ion-row>\r\n      <ion-col>\r\n        <form [formGroup]=\"paymentForm\" #f=\"ngForm\">\r\n          <ion-list>\r\n            <ion-list-header>\r\n              Card Information\r\n            </ion-list-header>\r\n            <ion-card style=\"box-shadow: none;\">\r\n              <img style=\"margin-bottom: 5px;\" src=\"../../../../assets/imgs/visa.png\">\r\n              <img style=\"margin-bottom: 5px;\" src=\"../../../../assets/imgs/master.png\">\r\n              <img style=\"margin-bottom: 5px;\" src=\"../../../../assets/imgs/Discover-logo.png\">\r\n              <ion-item lines=\"none\" class=\"card_item\">\r\n                <ion-input placeholder=\"XXXX-XXXX-XXXX-XXXX\" type=\"text\" formControlName=\"cardNumber\" maxlength=\"16\"\r\n                  (keypress)=\"onKey($event)\">\r\n                </ion-input>\r\n              </ion-item>\r\n              <ion-row>\r\n                <ion-col size=\"4\">\r\n                  <div class=\"title_text\">\r\n                    CVV\r\n                  </div>\r\n                  <ion-item lines=\"none\" class=\"card_item\">\r\n                    <ion-input placeholder=\"CVV\" type=\"text\" formControlName=\"cardCvv\" maxlength=\"3\"\r\n                      (keypress)=\"onKey($event)\">\r\n                    </ion-input>\r\n                  </ion-item>\r\n                </ion-col>\r\n                <ion-col size=\"8\">\r\n                  <div class=\"title_text\">\r\n                    Date of Expiration\r\n                  </div>\r\n                  <ion-item lines=\"none\" class=\"card_item\">\r\n                    <ion-datetime placeholder=\"MM/YYYY\" displayFormat=\"MM/YYYY\" pickerFormat=\"MM/YYYY\"\r\n                      formControlName=\"cardExpiration\" max=\"2050\">\r\n                    </ion-datetime>\r\n                  </ion-item>\r\n                </ion-col>\r\n              </ion-row>\r\n              <ion-row>\r\n                <ion-col size=\"8\">\r\n                  <div class=\"title_text\">\r\n                    Name on card\r\n                  </div>\r\n                  <ion-item lines=\"none\" class=\"card_item\">\r\n                    <ion-input placeholder=\"Name here\" type=\"text\" formControlName=\"nameonCard\">\r\n                    </ion-input>\r\n                  </ion-item>\r\n                </ion-col>\r\n              </ion-row>\r\n            </ion-card>\r\n          </ion-list>\r\n          <div class=\"ion-padding\">\r\n            <ion-button expand=\"block\" shape=\"round\" color=\"unit-btn\" [disabled]=\"paymentForm.invalid\"\r\n              (click)=\"addCard(f.value)\">\r\n              Save Card</ion-button>\r\n          </div>\r\n        </form>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-grid>\r\n</ion-content>\r\n<ion-footer>\r\n  <ion-toolbar>\r\n    <ion-button expand=\"block\" color=\"unit-btn\" shape=\"round\" [disabled]=\"!profileId\" (click)=\"confirmPayment()\"\r\n      class=\"pay-btn\">\r\n      Pay Now\r\n    </ion-button>\r\n  </ion-toolbar>\r\n</ion-footer>\r\n");

/***/ }),

/***/ "./src/app/pages/tanent/show-payment-info/show-payment-info-routing.module.ts":
/*!************************************************************************************!*\
  !*** ./src/app/pages/tanent/show-payment-info/show-payment-info-routing.module.ts ***!
  \************************************************************************************/
/*! exports provided: ShowPaymentInfoPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShowPaymentInfoPageRoutingModule", function() { return ShowPaymentInfoPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _show_payment_info_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./show-payment-info.page */ "./src/app/pages/tanent/show-payment-info/show-payment-info.page.ts");




const routes = [
    {
        path: '',
        component: _show_payment_info_page__WEBPACK_IMPORTED_MODULE_3__["ShowPaymentInfoPage"]
    }
];
let ShowPaymentInfoPageRoutingModule = class ShowPaymentInfoPageRoutingModule {
};
ShowPaymentInfoPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ShowPaymentInfoPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/tanent/show-payment-info/show-payment-info.module.ts":
/*!****************************************************************************!*\
  !*** ./src/app/pages/tanent/show-payment-info/show-payment-info.module.ts ***!
  \****************************************************************************/
/*! exports provided: ShowPaymentInfoPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShowPaymentInfoPageModule", function() { return ShowPaymentInfoPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _show_payment_info_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./show-payment-info-routing.module */ "./src/app/pages/tanent/show-payment-info/show-payment-info-routing.module.ts");
/* harmony import */ var _show_payment_info_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./show-payment-info.page */ "./src/app/pages/tanent/show-payment-info/show-payment-info.page.ts");







let ShowPaymentInfoPageModule = class ShowPaymentInfoPageModule {
};
ShowPaymentInfoPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _show_payment_info_routing_module__WEBPACK_IMPORTED_MODULE_5__["ShowPaymentInfoPageRoutingModule"]
        ],
        declarations: [_show_payment_info_page__WEBPACK_IMPORTED_MODULE_6__["ShowPaymentInfoPage"]]
    })
], ShowPaymentInfoPageModule);



/***/ }),

/***/ "./src/app/pages/tanent/show-payment-info/show-payment-info.page.scss":
/*!****************************************************************************!*\
  !*** ./src/app/pages/tanent/show-payment-info/show-payment-info.page.scss ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-item .rating {\n  text-align: left !important;\n}\n\nion-item .card-content {\n  text-align: left !important;\n  color: \"tertiary\";\n  font-size: 11px !important;\n  margin-top: 6px;\n  margin-bottom: 6px;\n  font-family: \"medium\";\n}\n\nion-item .card-content span {\n  color: \"tertiary\";\n}\n\n.place_img img {\n  border-radius: 20px !important;\n}\n\n.booking_info ion-label h2 {\n  font-size: 16px;\n  font-weight: 400;\n  margin-left: 10px;\n  margin-right: 0;\n  margin-top: 0px;\n  padding-top: 0;\n  font-family: \"helveticaneuebold\";\n  color: \"tertiary\";\n}\n\n.booking_info ion-label h3 {\n  margin-left: 10px;\n  font-weight: 600;\n  color: \"tertiary\";\n}\n\n.home-titile {\n  font-size: 15px;\n  font-weight: 400;\n  margin-left: 0px;\n  margin-right: 0;\n  margin-top: 0px;\n  padding-top: 0;\n  font-family: \"helveticaneuebold\";\n  color: \"tertiary\";\n}\n\nhr.newline {\n  display: block;\n  margin-left: 25px;\n  margin-right: 25px;\n  border-style: inset;\n  border-width: 1px;\n  color: \"quaternary\";\n  border: 0.5px solid #cacaca;\n  height: 0;\n}\n\n.edit_icon {\n  margin-top: 9px;\n  font-size: 19px;\n  color: #ed1b25;\n  text-align: right;\n  padding-right: 30px;\n}\n\n.price_cal ion-col h2 {\n  font-size: 16px;\n  font-weight: 400;\n  margin-left: 27px;\n  margin-right: 0;\n  margin-top: 15px;\n  padding-top: 0;\n  font-family: \"helveticaneuebold\";\n  color: \"tertiary\";\n  margin-bottom: 0;\n  padding-bottom: 0;\n  line-height: 0;\n}\n\n.price_cal ul {\n  padding-left: 20px;\n  padding-right: 20px;\n}\n\n.price_cal ul li {\n  display: block;\n  color: \"quaternary\";\n  font-size: 15px;\n  margin-bottom: 25px;\n  clear: both;\n  line-height: 22px;\n}\n\n.price_cal ul li .span_left {\n  float: left;\n  display: inline-block;\n  font-size: 14px;\n  margin-left: 10px;\n}\n\n.price_cal ul li .span_right {\n  display: inline-block;\n  float: right;\n}\n\n.price_cal .total {\n  color: \"tertiary\" !important;\n  margin-top: 29px;\n  font-family: \"helveticaneuebold\";\n}\n\n.card_add {\n  margin-left: 17px;\n  font-size: 13px;\n  color: #ed1b25;\n}\n\n.card-text {\n  font-size: 16px;\n  font-family: \"helveticaneuebold\";\n  color: \"tertiary\";\n  display: inline-block;\n  vertical-align: text-top;\n  margin-left: 10px;\n  font-weight: 400;\n  margin-top: 3px;\n}\n\nh4 {\n  font-size: 15px;\n  font-family: \"helveticaneuebold\";\n  color: \"tertiary\";\n  display: inline-block;\n  vertical-align: text-top;\n  margin-left: 0px;\n  font-weight: 400;\n  margin-top: 0;\n}\n\n.pay-btn {\n  text-transform: capitalize;\n  height: 44px;\n  font-size: 16px;\n  margin: 0 !important;\n  margin-top: 20px !important;\n  font-family: helveticaneuebold;\n  margin-left: 30px !important;\n  margin-right: 30px !important;\n  margin-bottom: 20px !important;\n}\n\n.footer-ios ion-toolbar:first-of-type {\n  --border-width: 0 !important;\n  border: none;\n  box-shadow: 0px -3px 10px #eaeaea;\n}\n\nion-input {\n  --placeholder-color: #cacaca;\n  --placeholder-opacity: 1;\n  font-family: medium;\n  font-size: 15px;\n}\n\nion-datetime {\n  font-size: 16px;\n}\n\nion-list ion-input {\n  border: 1px solid \"quaternary\";\n  border-radius: 18px;\n  --padding-start: 15px;\n}\n\nion-list ion-textarea {\n  border: 1px solid #cacaca;\n  border-radius: 18px;\n  --padding-start: 15px;\n  margin-bottom: 12px;\n  font-size: 15px;\n  color: \"quaternary\";\n  font-family: medium;\n  width: 97%;\n}\n\nion-item ion-label {\n  font-size: 15px;\n  margin-bottom: 10px;\n  color: \"tertiary\";\n  font-family: \"medium\";\n  opacity: 1;\n  margin-left: 5px;\n}\n\nion-datetime {\n  border: 1px solid #cacaca;\n  border-radius: 18px;\n  --padding-start: 15px;\n  height: 44px;\n  width: 97%;\n}\n\nion-input {\n  border: 1px solid #cacaca;\n  border-radius: 30px;\n  --padding-start: 15px;\n  margin-bottom: 12px;\n  width: 97%;\n}\n\n.card_item {\n  --padding-start: 0px !important;\n}\n\n.title_text {\n  font-size: 14px;\n  font-family: 'helveticaneuebold';\n  color: \"tertiary\";\n  margin-bottom: 5px;\n}\n\nion-select::part(icon) {\n  display: none !important;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvdGFuZW50L3Nob3ctcGF5bWVudC1pbmZvL3Nob3ctcGF5bWVudC1pbmZvLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUVNLDJCQUEyQjtBQUFqQzs7QUFGQTtFQUtNLDJCQUEyQjtFQUMzQixpQkFBaUI7RUFDakIsMEJBQTBCO0VBQzFCLGVBQWU7RUFDZixrQkFBa0I7RUFDbEIscUJBQXFCO0FBQzNCOztBQVhBO0VBWVEsaUJBQWdCO0FBR3hCOztBQUVFO0VBRUksOEJBQThCO0FBQXBDOztBQUlFO0VBR00sZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixpQkFBaUI7RUFDakIsZUFBZTtFQUNmLGVBQWU7RUFDZixjQUFjO0VBQ2QsZ0NBQWdDO0VBQ2hDLGlCQUFpQjtBQUh6Qjs7QUFQRTtFQWFNLGlCQUFpQjtFQUNqQixnQkFBZ0I7RUFDaEIsaUJBQWlCO0FBRnpCOztBQU1FO0VBQ0UsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixnQkFBZ0I7RUFDaEIsZUFBZTtFQUNmLGVBQWU7RUFDZixjQUFjO0VBQ2QsZ0NBQWdDO0VBQ2hDLGlCQUFpQjtBQUhyQjs7QUFLRTtFQUNFLGNBQWM7RUFDZCxpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLG1CQUFtQjtFQUNuQixpQkFBaUI7RUFDakIsbUJBQW1CO0VBQ25CLDJCQUEyQjtFQUMzQixTQUFTO0FBRmI7O0FBS0U7RUFDRSxlQUFlO0VBQ2YsZUFBZTtFQUNmLGNBQWM7RUFDZCxpQkFBaUI7RUFDakIsbUJBQW1CO0FBRnZCOztBQUtFO0VBR00sZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixpQkFBaUI7RUFDakIsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixjQUFjO0VBQ2QsZ0NBQWdDO0VBQ2hDLGlCQUFpQjtFQUNqQixnQkFBZ0I7RUFDaEIsaUJBQWlCO0VBQ2pCLGNBQWM7QUFKdEI7O0FBVEU7RUFrQkksa0JBQWtCO0VBQ2xCLG1CQUFtQjtBQUx6Qjs7QUFkRTtFQXFCTSxjQUFjO0VBQ2QsbUJBQW1CO0VBQ25CLGVBQWU7RUFDZixtQkFBbUI7RUFDbkIsV0FBVztFQUNYLGlCQUFpQjtBQUh6Qjs7QUF2QkU7RUE2QlEsV0FBVztFQUNYLHFCQUFxQjtFQUNyQixlQUFlO0VBQ2YsaUJBQWlCO0FBRjNCOztBQTlCRTtFQW1DUSxxQkFBcUI7RUFDckIsWUFBWTtBQUR0Qjs7QUFuQ0U7RUF5Q0ksNEJBQTRCO0VBQzVCLGdCQUFnQjtFQUNoQixnQ0FBZ0M7QUFGdEM7O0FBS0U7RUFDRSxpQkFBaUI7RUFDakIsZUFBZTtFQUNmLGNBQWM7QUFGbEI7O0FBSUU7RUFDRSxlQUFlO0VBQ2YsZ0NBQWdDO0VBQ2hDLGlCQUFpQjtFQUNqQixxQkFBcUI7RUFDckIsd0JBQXdCO0VBQ3hCLGlCQUFpQjtFQUNqQixnQkFBZ0I7RUFDaEIsZUFBZTtBQURuQjs7QUFHRTtFQUNFLGVBQWU7RUFDZixnQ0FBZ0M7RUFDaEMsaUJBQWlCO0VBQ2pCLHFCQUFxQjtFQUNyQix3QkFBd0I7RUFDeEIsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtFQUNoQixhQUFhO0FBQWpCOztBQUVFO0VBQ0UsMEJBQTBCO0VBQzFCLFlBQVk7RUFDWixlQUFlO0VBQ2Ysb0JBQW9CO0VBQ3BCLDJCQUEyQjtFQUMzQiw4QkFBOEI7RUFDOUIsNEJBQTRCO0VBQzVCLDZCQUE2QjtFQUM3Qiw4QkFBOEI7QUFDbEM7O0FBQ0U7RUFDRSw0QkFBZTtFQUNmLFlBQVk7RUFDWixpQ0FBaUM7QUFFckM7O0FBQUU7RUFDRSw0QkFBb0I7RUFDcEIsd0JBQXNCO0VBQ3RCLG1CQUFtQjtFQUNuQixlQUFlO0FBR25COztBQURFO0VBQ0UsZUFBZTtBQUluQjs7QUFERTtFQUVJLDhCQUE4QjtFQUM5QixtQkFBbUI7RUFDbkIscUJBQWdCO0FBR3RCOztBQVBFO0VBT0kseUJBQXlCO0VBQ3pCLG1CQUFtQjtFQUNuQixxQkFBZ0I7RUFDaEIsbUJBQW1CO0VBQ25CLGVBQWU7RUFDZixtQkFBbUI7RUFDbkIsbUJBQW1CO0VBQ25CLFVBQVU7QUFJaEI7O0FBREU7RUFFSSxlQUFlO0VBQ2YsbUJBQW1CO0VBQ25CLGlCQUFpQjtFQUNqQixxQkFBcUI7RUFDckIsVUFBVTtFQUNWLGdCQUFnQjtBQUd0Qjs7QUFDSTtFQUNFLHlCQUF5QjtFQUN6QixtQkFBbUI7RUFDbkIscUJBQWdCO0VBQ2hCLFlBQVk7RUFDWixVQUFVO0FBRWhCOztBQUFJO0VBQ0UseUJBQXlCO0VBQ3pCLG1CQUFtQjtFQUNuQixxQkFBZ0I7RUFDaEIsbUJBQW1CO0VBQ25CLFVBQVU7QUFHaEI7O0FBQUU7RUFDRSwrQkFBZ0I7QUFHcEI7O0FBREU7RUFDRSxlQUFlO0VBQ2IsZ0NBQWdDO0VBQ2hDLGlCQUFpQjtFQUNqQixrQkFBa0I7QUFJeEI7O0FBRkU7RUFDRSx3QkFBd0I7QUFLNUIiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy90YW5lbnQvc2hvdy1wYXltZW50LWluZm8vc2hvdy1wYXltZW50LWluZm8ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWl0ZW0ge1xyXG4gICAgLnJhdGluZyB7XHJcbiAgICAgIHRleHQtYWxpZ246IGxlZnQgIWltcG9ydGFudDtcclxuICAgIH1cclxuICAgIC5jYXJkLWNvbnRlbnQge1xyXG4gICAgICB0ZXh0LWFsaWduOiBsZWZ0ICFpbXBvcnRhbnQ7XHJcbiAgICAgIGNvbG9yOiBcInRlcnRpYXJ5XCI7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTFweCAhaW1wb3J0YW50O1xyXG4gICAgICBtYXJnaW4tdG9wOiA2cHg7XHJcbiAgICAgIG1hcmdpbi1ib3R0b206IDZweDtcclxuICAgICAgZm9udC1mYW1pbHk6IFwibWVkaXVtXCI7XHJcbiAgICAgIHNwYW4ge1xyXG4gICAgICAgIGNvbG9yOlwidGVydGlhcnlcIjtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuICBcclxuICAucGxhY2VfaW1nIHtcclxuICAgIGltZyB7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDIwcHggIWltcG9ydGFudDtcclxuICAgIH1cclxuICB9XHJcbiAgXHJcbiAgLmJvb2tpbmdfaW5mbyB7XHJcbiAgICBpb24tbGFiZWwge1xyXG4gICAgICBoMiB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDEwcHg7XHJcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAwO1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDBweDtcclxuICAgICAgICBwYWRkaW5nLXRvcDogMDtcclxuICAgICAgICBmb250LWZhbWlseTogXCJoZWx2ZXRpY2FuZXVlYm9sZFwiO1xyXG4gICAgICAgIGNvbG9yOiBcInRlcnRpYXJ5XCI7XHJcbiAgICAgIH1cclxuICAgICAgaDMge1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICAgICAgY29sb3I6IFwidGVydGlhcnlcIjtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuICAuaG9tZS10aXRpbGUge1xyXG4gICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgIG1hcmdpbi1sZWZ0OiAwcHg7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDA7XHJcbiAgICBtYXJnaW4tdG9wOiAwcHg7XHJcbiAgICBwYWRkaW5nLXRvcDogMDtcclxuICAgIGZvbnQtZmFtaWx5OiBcImhlbHZldGljYW5ldWVib2xkXCI7XHJcbiAgICBjb2xvcjogXCJ0ZXJ0aWFyeVwiO1xyXG4gIH1cclxuICBoci5uZXdsaW5lIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDI1cHg7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDI1cHg7XHJcbiAgICBib3JkZXItc3R5bGU6IGluc2V0O1xyXG4gICAgYm9yZGVyLXdpZHRoOiAxcHg7XHJcbiAgICBjb2xvcjogXCJxdWF0ZXJuYXJ5XCI7XHJcbiAgICBib3JkZXI6IDAuNXB4IHNvbGlkICNjYWNhY2E7XHJcbiAgICBoZWlnaHQ6IDA7XHJcbiAgfVxyXG4gIFxyXG4gIC5lZGl0X2ljb24ge1xyXG4gICAgbWFyZ2luLXRvcDogOXB4O1xyXG4gICAgZm9udC1zaXplOiAxOXB4O1xyXG4gICAgY29sb3I6ICNlZDFiMjU7XHJcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDMwcHg7XHJcbiAgfVxyXG4gIFxyXG4gIC5wcmljZV9jYWwge1xyXG4gICAgaW9uLWNvbCB7XHJcbiAgICAgIGgyIHtcclxuICAgICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgICAgICBtYXJnaW4tbGVmdDogMjdweDtcclxuICAgICAgICBtYXJnaW4tcmlnaHQ6IDA7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMTVweDtcclxuICAgICAgICBwYWRkaW5nLXRvcDogMDtcclxuICAgICAgICBmb250LWZhbWlseTogXCJoZWx2ZXRpY2FuZXVlYm9sZFwiO1xyXG4gICAgICAgIGNvbG9yOiBcInRlcnRpYXJ5XCI7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMDtcclxuICAgICAgICBwYWRkaW5nLWJvdHRvbTogMDtcclxuICAgICAgICBsaW5lLWhlaWdodDogMDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIFxyXG4gICAgdWwge1xyXG4gICAgICBwYWRkaW5nLWxlZnQ6IDIwcHg7XHJcbiAgICAgIHBhZGRpbmctcmlnaHQ6IDIwcHg7XHJcbiAgICAgIGxpIHtcclxuICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICBjb2xvcjogXCJxdWF0ZXJuYXJ5XCI7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDI1cHg7XHJcbiAgICAgICAgY2xlYXI6IGJvdGg7XHJcbiAgICAgICAgbGluZS1oZWlnaHQ6IDIycHg7XHJcbiAgXHJcbiAgICAgICAgLnNwYW5fbGVmdCB7XHJcbiAgICAgICAgICBmbG9hdDogbGVmdDtcclxuICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICAuc3Bhbl9yaWdodCB7XHJcbiAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgICBmbG9hdDogcmlnaHQ7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICAudG90YWwge1xyXG4gICAgICBjb2xvcjogXCJ0ZXJ0aWFyeVwiICFpbXBvcnRhbnQ7XHJcbiAgICAgIG1hcmdpbi10b3A6IDI5cHg7XHJcbiAgICAgIGZvbnQtZmFtaWx5OiBcImhlbHZldGljYW5ldWVib2xkXCI7XHJcbiAgICB9XHJcbiAgfVxyXG4gIC5jYXJkX2FkZCB7XHJcbiAgICBtYXJnaW4tbGVmdDogMTdweDtcclxuICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICAgIGNvbG9yOiAjZWQxYjI1O1xyXG4gIH1cclxuICAuY2FyZC10ZXh0IHtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIGZvbnQtZmFtaWx5OiBcImhlbHZldGljYW5ldWVib2xkXCI7XHJcbiAgICBjb2xvcjogXCJ0ZXJ0aWFyeVwiO1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgdmVydGljYWwtYWxpZ246IHRleHQtdG9wO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDEwcHg7XHJcbiAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgbWFyZ2luLXRvcDogM3B4O1xyXG4gIH1cclxuICBoNCB7XHJcbiAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICBmb250LWZhbWlseTogXCJoZWx2ZXRpY2FuZXVlYm9sZFwiO1xyXG4gICAgY29sb3I6IFwidGVydGlhcnlcIjtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIHZlcnRpY2FsLWFsaWduOiB0ZXh0LXRvcDtcclxuICAgIG1hcmdpbi1sZWZ0OiAwcHg7XHJcbiAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgbWFyZ2luLXRvcDogMDtcclxuICB9XHJcbiAgLnBheS1idG4ge1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XHJcbiAgICBoZWlnaHQ6IDQ0cHg7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICBtYXJnaW46IDAgIWltcG9ydGFudDtcclxuICAgIG1hcmdpbi10b3A6IDIwcHggIWltcG9ydGFudDtcclxuICAgIGZvbnQtZmFtaWx5OiBoZWx2ZXRpY2FuZXVlYm9sZDtcclxuICAgIG1hcmdpbi1sZWZ0OiAzMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDMwcHggIWltcG9ydGFudDtcclxuICAgIG1hcmdpbi1ib3R0b206IDIwcHggIWltcG9ydGFudDtcclxuICB9XHJcbiAgLmZvb3Rlci1pb3MgaW9uLXRvb2xiYXI6Zmlyc3Qtb2YtdHlwZSB7XHJcbiAgICAtLWJvcmRlci13aWR0aDogMCAhaW1wb3J0YW50O1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgYm94LXNoYWRvdzogMHB4IC0zcHggMTBweCAjZWFlYWVhO1xyXG4gIH1cclxuICBpb24taW5wdXQge1xyXG4gICAgLS1wbGFjZWhvbGRlci1jb2xvcjogI2NhY2FjYTtcclxuICAgIC0tcGxhY2Vob2xkZXItb3BhY2l0eTogMTtcclxuICAgIGZvbnQtZmFtaWx5OiBtZWRpdW07XHJcbiAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgfVxyXG4gIGlvbi1kYXRldGltZSB7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgfVxyXG4gIFxyXG4gIGlvbi1saXN0IHtcclxuICAgIGlvbi1pbnB1dCB7XHJcbiAgICAgIGJvcmRlcjogMXB4IHNvbGlkIFwicXVhdGVybmFyeVwiO1xyXG4gICAgICBib3JkZXItcmFkaXVzOiAxOHB4O1xyXG4gICAgICAtLXBhZGRpbmctc3RhcnQ6IDE1cHg7XHJcbiAgICB9XHJcbiAgICBpb24tdGV4dGFyZWEge1xyXG4gICAgICBib3JkZXI6IDFweCBzb2xpZCAjY2FjYWNhO1xyXG4gICAgICBib3JkZXItcmFkaXVzOiAxOHB4O1xyXG4gICAgICAtLXBhZGRpbmctc3RhcnQ6IDE1cHg7XHJcbiAgICAgIG1hcmdpbi1ib3R0b206IDEycHg7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgICAgY29sb3I6IFwicXVhdGVybmFyeVwiO1xyXG4gICAgICBmb250LWZhbWlseTogbWVkaXVtO1xyXG4gICAgICB3aWR0aDogOTclO1xyXG4gICAgfVxyXG4gIH1cclxuICBpb24taXRlbSB7XHJcbiAgICBpb24tbGFiZWwge1xyXG4gICAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgICAgIGNvbG9yOiBcInRlcnRpYXJ5XCI7XHJcbiAgICAgIGZvbnQtZmFtaWx5OiBcIm1lZGl1bVwiO1xyXG4gICAgICBvcGFjaXR5OiAxO1xyXG4gICAgICBtYXJnaW4tbGVmdDogNXB4O1xyXG4gICAgICB9XHJcbiAgfVxyXG5cclxuICAgIGlvbi1kYXRldGltZSB7XHJcbiAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNjYWNhY2E7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDE4cHg7XHJcbiAgICAgIC0tcGFkZGluZy1zdGFydDogMTVweDtcclxuICAgICAgaGVpZ2h0OiA0NHB4O1xyXG4gICAgICB3aWR0aDogOTclO1xyXG4gICAgfVxyXG4gICAgaW9uLWlucHV0IHtcclxuICAgICAgYm9yZGVyOiAxcHggc29saWQgI2NhY2FjYTtcclxuICAgICAgYm9yZGVyLXJhZGl1czogMzBweDtcclxuICAgICAgLS1wYWRkaW5nLXN0YXJ0OiAxNXB4O1xyXG4gICAgICBtYXJnaW4tYm90dG9tOiAxMnB4O1xyXG4gICAgICB3aWR0aDogOTclO1xyXG4gICAgfVxyXG5cclxuICAuY2FyZF9pdGVte1xyXG4gICAgLS1wYWRkaW5nLXN0YXJ0OiAwcHggIWltcG9ydGFudDtcclxuICB9XHJcbiAgLnRpdGxlX3RleHR7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgIGZvbnQtZmFtaWx5OiAnaGVsdmV0aWNhbmV1ZWJvbGQnO1xyXG4gICAgICBjb2xvcjogXCJ0ZXJ0aWFyeVwiO1xyXG4gICAgICBtYXJnaW4tYm90dG9tOiA1cHg7XHJcbiAgfVxyXG4gIGlvbi1zZWxlY3Q6OnBhcnQoaWNvbikge1xyXG4gICAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xyXG4gICB9Il19 */");

/***/ }),

/***/ "./src/app/pages/tanent/show-payment-info/show-payment-info.page.ts":
/*!**************************************************************************!*\
  !*** ./src/app/pages/tanent/show-payment-info/show-payment-info.page.ts ***!
  \**************************************************************************/
/*! exports provided: ShowPaymentInfoPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShowPaymentInfoPage", function() { return ShowPaymentInfoPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var src_app_services_api_service_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/api-service.service */ "./src/app/services/api-service.service.ts");
/* harmony import */ var src_app_services_global_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/global.service */ "./src/app/services/global.service.ts");
/* harmony import */ var src_app_services_loader_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/loader.service */ "./src/app/services/loader.service.ts");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/__ivy_ngcc__/fesm2015/ionic-storage.js");
/* harmony import */ var _config_config__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../config/config */ "./src/app/pages/config/config.ts");
/* harmony import */ var _start_booking_start_booking_page__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../start-booking/start-booking.page */ "./src/app/pages/tanent/start-booking/start-booking.page.ts");
/* harmony import */ var src_app_services_toast_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/services/toast.service */ "./src/app/services/toast.service.ts");
/* harmony import */ var src_app_utilities_mainfunction__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/utilities/mainfunction */ "./src/app/utilities/mainfunction.ts");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_13__);














let ShowPaymentInfoPage = class ShowPaymentInfoPage {
    constructor(route, api, loader, router, _gs, formBuilder, modalCtrl, storage, _toast) {
        this.route = route;
        this.api = api;
        this.loader = loader;
        this.router = router;
        this._gs = _gs;
        this.formBuilder = formBuilder;
        this.modalCtrl = modalCtrl;
        this.storage = storage;
        this._toast = _toast;
        this.url = _config_config__WEBPACK_IMPORTED_MODULE_9__["config"].url;
        this.cards = [];
        this.paymentMethod = 'full';
        this.paymentType = {
            Weekly: 'weekly',
            Monthly: 'monthly',
            Daily: 'daily'
        };
        this.showcardForm = false;
        this.dates = [];
        this.paymentForm = this.formBuilder.group({
            cardNumber: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])],
            cardExpiration: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])],
            cardCvv: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])],
            nameonCard: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])]
        });
    }
    ngOnInit() {
        this.route.queryParams.subscribe(params => {
            if (params) {
                console.log('@@here', params);
                if (params.bookPlaceParams) {
                    this.bookingDetails = JSON.parse(params.bookPlaceParams);
                }
                if (params.placeDetails) {
                    this.placeDetails = JSON.parse(params.placeDetails);
                }
                if (params.placeData) {
                    console.log(JSON.parse(params.placeData));
                    let placeData = JSON.parse(params.placeData);
                    this.directPayment = placeData;
                    this.placeDetails = placeData.place;
                    // direct payment 
                }
                if (params.from) {
                    this.priviousPage = params.from;
                }
                this.calculatePrice();
            }
        });
    }
    ionViewWillEnter() {
        this.getUserData();
    }
    getUserData() {
        this.storage.get("session").then((session) => {
            if (session) {
                this.storage.get("org").then((org) => {
                    if (org) {
                        this.token = session;
                        this.orgId = org;
                        this.getTimings();
                        setTimeout(() => {
                            this.getPaymentProfile();
                        }, 200);
                    }
                });
            }
        });
    }
    getTimings() {
        this.loader.present("Getting timeSlots ..");
        if (this.token) {
            const params = {
                placeId: this.placeDetails._id,
                token: this.token,
                orgId: this.orgId
            };
            this.api.postRequest(this.url + _config_config__WEBPACK_IMPORTED_MODULE_9__["UNITURL"].getBookingDates, params).subscribe((result) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                this.loader.dismiss();
                if (result.success) {
                    if (result.data.dates) {
                        this.dates = result.data.dates;
                    }
                }
                else {
                    console.log('error');
                    this.loader.dismiss();
                }
            }));
        }
    }
    getPaymentProfile() {
        this.loader.present('Getting card info ..');
        if (this.token) {
            const params = {
                token: this.token,
                orgId: this.orgId
            };
            this.api.postRequest(this.url + _config_config__WEBPACK_IMPORTED_MODULE_9__["UNITURL"].getCustomerProfile, params).subscribe((result) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                console.log(result);
                this.loader.dismiss();
                if (result.success) {
                    this.showcardForm = false;
                    console.log(result);
                    this.cards = result.data.Customer_profile.message.response.profile.paymentProfiles;
                    this.profileId = result.data.Customer_profile.message.response.profile.paymentProfiles[0].customerPaymentProfileId;
                }
            })), (error) => {
                this.loader.dismiss();
                console.log('error', error);
            };
        }
    }
    itemDetailNavigation() {
        this._gs.refreshMyStays('true');
        let navigationdata = {
            startDate: this.bookingDetails.startDate,
            endDate: this.bookingDetails.endDate,
            place: {
                name: this.placeDetails.name,
                address: this.placeDetails.address,
                images: this.placeDetails.images
            }
        };
        let navigationExtras = {
            queryParams: {
                placeInfo: JSON.stringify(navigationdata)
            }
        };
        this.router.navigate(['confirm-payment'], navigationExtras);
    }
    back() {
        if (this.priviousPage) {
        }
        else {
            let navigationExtras = {
                queryParams: {
                    placeId: this.bookingDetails.placeId
                }
            };
            this.router.navigate(['start-booking'], navigationExtras);
        }
    }
    editDates() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            console.log(this.bookingDetails);
            const myCalendar = yield this.modalCtrl.create({
                component: _start_booking_start_booking_page__WEBPACK_IMPORTED_MODULE_10__["StartBookingPage"],
                componentProps: {
                    'editInfo': this.bookingDetails,
                    'dates': JSON.stringify(this.dates)
                }
            });
            myCalendar.present();
            const event = yield myCalendar.onDidDismiss();
            const date = event.data;
            const from = date.from;
            const to = date.to;
        });
    }
    calculatePrice() {
        this.noOfDays = Object(src_app_utilities_mainfunction__WEBPACK_IMPORTED_MODULE_12__["getDays"])(this.bookingDetails.startDate, this.bookingDetails.endDate);
        console.log(this.noOfDays);
        if (this.noOfDays == 0) {
            this.noOfDays = 1;
        }
        if (this.noOfDays >= 7 && this.noOfDays < 30) {
            this.weeks = Math.round(this.noOfDays / 7);
            this.price = this.placeDetails.pricing.weekly * this.weeks;
            this.paymentStatus = this.paymentType.Weekly;
        }
        else if (this.noOfDays < 7) {
            this.price = this.placeDetails.pricing.daily * this.noOfDays;
            this.paymentStatus = this.paymentType.Daily;
        }
        else if (this.noOfDays >= 30) {
            this.months = Math.floor(this.noOfDays / 30);
            this.paymentStatus = this.paymentType.Monthly;
            this.chargedPrice = this.placeDetails.pricing.monthly;
            if (this.months == 1) {
                if (this.placeDetails.discountFirstMonth) {
                    // discount
                    let numVal1 = this.chargedPrice;
                    let numVal2 = this.placeDetails.discountPercentage / 100;
                    this.pricewithDiscount = numVal1 - (numVal1 * numVal2);
                    this.price = this.chargedPrice;
                    this.discount = this.price - this.pricewithDiscount;
                }
                else {
                    // No discount
                    this.price = this.placeDetails.pricing.monthly * this.months;
                }
            }
            else {
                if (this.placeDetails.discountFirstMonth) {
                    // discount
                    let numVal1 = this.chargedPrice;
                    let numVal2 = this.placeDetails.discountPercentage / 100;
                    this.pricewithDiscount = numVal1 - (numVal1 * numVal2);
                    this.priceAfterDiscount = this.pricewithDiscount;
                    this.price = this.placeDetails.pricing.monthly * this.months;
                    this.discount = this.chargedPrice - this.pricewithDiscount;
                    this.pricewithDiscount = this.price - this.discount;
                }
                else {
                    // No discount
                    this.price = this.placeDetails.pricing.monthly * this.months;
                }
            }
        }
        if (this.noOfDays < 7) {
            this.showDay = true;
        }
        if (this.noOfDays >= 7) {
            this.showDay = false;
            this.showWeek = true;
        }
        if (this.weeks < 4) {
            console.log('here');
            this.showWeek = true;
            this.showDay = false;
        }
        if (this.months) {
            this.showWeek = false;
            this.showDay = false;
            this.showMonth = true;
        }
    }
    showCard() {
        this.showcardForm = true;
    }
    onChange(e) { }
    onKey(e) {
        const charCode = e.which ? e.which : e.keyCode;
        if (charCode > 31 && (charCode < 48 || charCode > 57)) {
            return false;
        }
        return true;
    }
    changeformat(date) {
        const d = new Date(date);
        return moment__WEBPACK_IMPORTED_MODULE_13__(d).format('MMYY');
    }
    addCard(formvalues) {
        this.loader.present('Adding card ...');
        if (formvalues) {
            if (this.token) {
                let customerInfo = {
                    token: this.token,
                    orgId: this.orgId,
                    creditCard: {
                        cardNumber: formvalues.cardNumber,
                        expirationDate: this.changeformat(formvalues.cardExpiration)
                    }
                };
                this.api
                    .postRequest(this.url + _config_config__WEBPACK_IMPORTED_MODULE_9__["UNITURL"].createCustomerForPayments, customerInfo)
                    .subscribe((res) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                    console.log(res);
                    this.loader.dismiss();
                    this.getPaymentProfile();
                    if (res.success) {
                        this._toast.presentToast("Card added successfully.");
                        this.paymentForm.reset();
                    }
                    else {
                        console.log(res.message);
                    }
                }), (error) => {
                    this.loader.dismiss();
                    console.log('error', error);
                });
            }
        }
    }
    confirmPayment() {
        if (!this.profileId) {
            this._toast.presentToast('no card present.Enter card Details.');
            return;
        }
        if (this.token) {
            let formValue = this.bookingDetails;
            const params = {
                token: this.token,
                orgId: this.orgId,
                placeId: this.placeDetails._id,
                startDate: formValue.startDate,
                endDate: formValue.endDate,
                paymentType: this.paymentStatus
            };
            if (this.directPayment) {
                // Direct Payment 
                this.pay(this.directPayment._id, this.price, params);
            }
            else {
                // Book place then payment
                this.api.postRequest(this.url + _config_config__WEBPACK_IMPORTED_MODULE_9__["UNITURL"].booking, params).subscribe((result) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                    this.loader.dismiss();
                    if (result.success) {
                        this.pay(result.data.bookingId, this.price, params);
                    }
                    else {
                        console.log(result.message);
                    }
                })), (error) => {
                    this.loader.dismiss();
                    console.log('error', error);
                };
            }
        }
    }
    pay(bookingId, price, bookingparams) {
        if (this.token) {
            if (this.paymentMethod == 'recurring') {
                console.log('recurring');
                if (this.placeDetails.discountFirstMonth) {
                    console.log(this.pricewithDiscount);
                    console.log(this.priceAfterDiscount);
                    const params = {
                        token: this.token,
                        orgId: this.orgId,
                        customerPaymentProfileId: this.profileId,
                        bookingId: bookingId,
                        totalPrice: this.priceAfterDiscount
                    };
                    this.fullPayment(params, true);
                }
                else {
                    // monthly
                    const params = {
                        token: this.token,
                        orgId: this.orgId,
                        totalPrice: this.price,
                        chargedPrice: this.chargedPrice,
                        startDate: bookingparams.startDate,
                        addMonth: 0
                    };
                    this.monthlyPayment(params);
                }
            }
            else {
                let params = {
                    token: this.token,
                    orgId: this.orgId,
                    customerPaymentProfileId: this.profileId,
                    bookingId: bookingId,
                    totalPrice: price
                };
                console.log(params);
                this.fullPayment(params, false);
            }
        }
    }
    monthlyPayment(params) {
        this.loader.present();
        this.api.postRequest(this.url + _config_config__WEBPACK_IMPORTED_MODULE_9__["UNITURL"].createSubscription, params).subscribe((result) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.loader.dismiss();
            if (result.success) {
                this.itemDetailNavigation();
            }
            else {
                this.itemDetailNavigation();
                console.log(result.message);
            }
        })), (error) => {
            this.loader.dismiss();
            console.log('error', error);
        };
    }
    fullPayment(params, flag) {
        this.loader.present();
        this.api.postRequest(this.url + _config_config__WEBPACK_IMPORTED_MODULE_9__["UNITURL"].chargeCustomer, params).subscribe((result) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.loader.dismiss();
            if (result.success) {
                if (flag) {
                    const newParams = {
                        token: params.token,
                        totalPrice: this.price,
                        chargedPrice: this.chargedPrice,
                        startDate: this.bookingDetails.startDate,
                        endDate: this.bookingDetails.endDate,
                        addMonth: 1
                    };
                    this.monthlyPayment(newParams);
                }
                else {
                    this.itemDetailNavigation();
                }
            }
        })), (error) => {
            this.loader.dismiss();
            console.log('error', error);
        };
    }
};
ShowPaymentInfoPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: src_app_services_api_service_service__WEBPACK_IMPORTED_MODULE_5__["ApiService"] },
    { type: src_app_services_loader_service__WEBPACK_IMPORTED_MODULE_7__["LoaderService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: src_app_services_global_service__WEBPACK_IMPORTED_MODULE_6__["GlobalService"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"] },
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_8__["Storage"] },
    { type: src_app_services_toast_service__WEBPACK_IMPORTED_MODULE_11__["ToastService"] }
];
ShowPaymentInfoPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-show-payment-info',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./show-payment-info.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/tanent/show-payment-info/show-payment-info.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./show-payment-info.page.scss */ "./src/app/pages/tanent/show-payment-info/show-payment-info.page.scss")).default]
    })
], ShowPaymentInfoPage);



/***/ })

}]);
//# sourceMappingURL=pages-tanent-show-payment-info-show-payment-info-module-es2015.js.map