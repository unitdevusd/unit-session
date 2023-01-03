(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-tanent-payment-payment-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/tanent/payment/payment.page.html":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/tanent/payment/payment.page.html ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar>\r\n    <ion-title>Cards</ion-title>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button color=\"unit-btn\" text=\"\" icon=\"chevron-back-outline\"></ion-back-button>\r\n    </ion-buttons>\r\n    <ion-buttons slot=\"end\" (click)=\"newCard()\">\r\n    </ion-buttons>\r\n  </ion-toolbar>\r\n</ion-header>\r\n<ion-content>\r\n  <form [formGroup]=\"paymentForm\" #f=\"ngForm\">\r\n    <ion-list>\r\n      <ion-list-header>\r\n        Enter Card Details\r\n      </ion-list-header>\r\n      <ion-card>\r\n      <ion-item>\r\n          <ion-label position=\"stacked\">Card Number </ion-label>\r\n          <ion-input type=\"text\" formControlName=\"cardNumber\" maxlength=\"16\" (keypress)=\"onKey($event)\"></ion-input>\r\n      </ion-item>\r\n      <ion-row>\r\n        <ion-col>\r\n          <ion-item>\r\n            <ion-label position=\"stacked\">Date</ion-label>\r\n            <ion-datetime displayFormat=\"MM/YYYY\" pickerFormat=\"MM/YYYY\" formControlName=\"cardExpiration\" max=\"2050\">\r\n            </ion-datetime>\r\n          </ion-item>\r\n        </ion-col>\r\n        <ion-col>\r\n          <ion-item>\r\n            <ion-label position=\"stacked\">CVV</ion-label>\r\n            <ion-input type=\"text\" formControlName=\"cardCvv\" maxlength=\"3\" (keypress)=\"onKey($event)\"></ion-input>\r\n          </ion-item>\r\n        </ion-col>\r\n      </ion-row>\r\n      </ion-card>\r\n    </ion-list>\r\n    <div class=\"ion-padding\">\r\n      <ion-button  expand=\"block\"  color=\"unit-btn\" [disabled]=\"paymentForm.invalid\"\r\n        (click)=\"confirmPayment(f.value)\"> Add Card</ion-button>\r\n    </div>\r\n  </form>\r\n  <div *ngIf=\"cards.length != 0\">\r\n    <ion-list *ngFor=\"let card of cards;let i=index\">\r\n      <ion-item  detail=false>\r\n        <ion-label>\r\n          Card Number\r\n          <ion-input style=\"font-size: smaller\" disabled = \"true\">{{ card.payment.creditCard.cardNumber}}</ion-input>\r\n        </ion-label>\r\n        <ion-icon slot=\"end\"  color=\"danger\" name=\"trash-outline\" (click)=\"delete(card,i)\"></ion-icon>\r\n      </ion-item>\r\n    </ion-list>\r\n  </div>\r\n</ion-content>");

/***/ }),

/***/ "./src/app/pages/tanent/payment/payment-routing.module.ts":
/*!****************************************************************!*\
  !*** ./src/app/pages/tanent/payment/payment-routing.module.ts ***!
  \****************************************************************/
/*! exports provided: PaymentPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaymentPageRoutingModule", function() { return PaymentPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _payment_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./payment.page */ "./src/app/pages/tanent/payment/payment.page.ts");




const routes = [
    {
        path: '',
        component: _payment_page__WEBPACK_IMPORTED_MODULE_3__["PaymentPage"]
    }
];
let PaymentPageRoutingModule = class PaymentPageRoutingModule {
};
PaymentPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], PaymentPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/tanent/payment/payment.module.ts":
/*!********************************************************!*\
  !*** ./src/app/pages/tanent/payment/payment.module.ts ***!
  \********************************************************/
/*! exports provided: PaymentPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaymentPageModule", function() { return PaymentPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _payment_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./payment-routing.module */ "./src/app/pages/tanent/payment/payment-routing.module.ts");
/* harmony import */ var _payment_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./payment.page */ "./src/app/pages/tanent/payment/payment.page.ts");







let PaymentPageModule = class PaymentPageModule {
};
PaymentPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _payment_routing_module__WEBPACK_IMPORTED_MODULE_5__["PaymentPageRoutingModule"]
        ],
        declarations: [_payment_page__WEBPACK_IMPORTED_MODULE_6__["PaymentPage"]]
    })
], PaymentPageModule);



/***/ }),

/***/ "./src/app/pages/tanent/payment/payment.page.scss":
/*!********************************************************!*\
  !*** ./src/app/pages/tanent/payment/payment.page.scss ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-list ion-list-header {\n  font-size: 16px;\n  color: \"quaternary\";\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvdGFuZW50L3BheW1lbnQvcGF5bWVudC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFFUSxlQUFlO0VBQ2YsbUJBQW1CO0FBQTNCIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvdGFuZW50L3BheW1lbnQvcGF5bWVudC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tbGlzdHtcclxuICAgIGlvbi1saXN0LWhlYWRlcntcclxuICAgICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgICAgY29sb3I6IFwicXVhdGVybmFyeVwiO1xyXG4gICAgfVxyXG59Il19 */");

/***/ }),

/***/ "./src/app/pages/tanent/payment/payment.page.ts":
/*!******************************************************!*\
  !*** ./src/app/pages/tanent/payment/payment.page.ts ***!
  \******************************************************/
/*! exports provided: PaymentPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaymentPage", function() { return PaymentPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var src_app_services_api_service_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/api-service.service */ "./src/app/services/api-service.service.ts");
/* harmony import */ var src_app_services_loader_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/loader.service */ "./src/app/services/loader.service.ts");
/* harmony import */ var src_app_services_toast_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/toast.service */ "./src/app/services/toast.service.ts");
/* harmony import */ var _config_config__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../config/config */ "./src/app/pages/config/config.ts");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/__ivy_ngcc__/fesm2015/ionic-storage.js");










let PaymentPage = class PaymentPage {
    constructor(formBuilder, api, loader, _toast, alertController, storage) {
        this.formBuilder = formBuilder;
        this.api = api;
        this.loader = loader;
        this._toast = _toast;
        this.alertController = alertController;
        this.storage = storage;
        this.cards = [];
        this.url = _config_config__WEBPACK_IMPORTED_MODULE_8__["config"].url;
        this.showAddCard = false;
        this.paymentForm = this.formBuilder.group({
            cardNumber: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])],
            cardExpiration: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])],
            cardCvv: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])]
        });
    }
    ngOnInit() {
        this.getUserData();
    }
    getUserData() {
        this.storage.get("session").then((session) => {
            if (session) {
                this.storage.get("org").then((org) => {
                    if (org) {
                        this.token = session;
                        this.orgId = org;
                        this.getPaymentProfile();
                    }
                });
            }
        });
    }
    ionViewWillEnter() {
    }
    onKey(e) {
        const charCode = e.which ? e.which : e.keyCode;
        if (charCode > 31 && (charCode < 48 || charCode > 57)) {
            return false;
        }
        return true;
    }
    changeformat(date) {
        const d = new Date(date);
        return moment__WEBPACK_IMPORTED_MODULE_4__(d).format('MMYY');
    }
    getPaymentProfile() {
        this.loader.present();
        if (this.token) {
            const params = {
                token: this.token,
                orgId: this.orgId
            };
            this.api.postRequest(this.url + _config_config__WEBPACK_IMPORTED_MODULE_8__["UNITURL"].getCustomerProfile, params).subscribe((result) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                this.loader.dismiss();
                if (result.success) {
                    console.log(result);
                    this.cards = result.data.Customer_profile.message.response.profile.paymentProfiles;
                    if (this.cards.length == 0) {
                        this.showAddCard = true;
                    }
                    else {
                        this.showAddCard = false;
                    }
                    console.log(this.cards);
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
    delete(card) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            console.log('@@', card);
            const alert = yield this.alertController.create({
                header: 'Delete',
                message: 'Are you sure that you want to delete this card?',
                buttons: [
                    {
                        text: 'Cancel',
                        role: 'cancel',
                        cssClass: 'secondary',
                        handler: (blah) => { }
                    }, {
                        text: 'Ok',
                        handler: () => {
                            this.deleteCard(card);
                        }
                    }
                ]
            });
            yield alert.present();
        });
    }
    deleteCard(card) {
        this.loader.present();
        if (this.token) {
            const params = {
                token: this.token,
                orgId: this.orgId
            };
            this.api.postRequest(this.url + _config_config__WEBPACK_IMPORTED_MODULE_8__["UNITURL"].deleteCustomerProfile, params).subscribe((result) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                this.loader.dismiss();
                if (result.success) {
                    this.cards = this.cards.filter(x => x.customerPaymentProfileId != x.customerPaymentProfileId);
                }
            })), (error) => {
                this.loader.dismiss();
                console.log('error', error);
            };
        }
    }
};
PaymentPage.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: src_app_services_api_service_service__WEBPACK_IMPORTED_MODULE_5__["ApiService"] },
    { type: src_app_services_loader_service__WEBPACK_IMPORTED_MODULE_6__["LoaderService"] },
    { type: src_app_services_toast_service__WEBPACK_IMPORTED_MODULE_7__["ToastService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"] },
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_9__["Storage"] }
];
PaymentPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-payment',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./payment.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/tanent/payment/payment.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./payment.page.scss */ "./src/app/pages/tanent/payment/payment.page.scss")).default]
    })
], PaymentPage);



/***/ })

}]);
//# sourceMappingURL=pages-tanent-payment-payment-module-es2015.js.map