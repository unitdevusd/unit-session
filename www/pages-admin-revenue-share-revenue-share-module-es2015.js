(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-admin-revenue-share-revenue-share-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/admin/revenue-share/revenue-share.page.html":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/admin/revenue-share/revenue-share.page.html ***!
  \*********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar *ngIf=\"!addPrice\">\r\n    <ion-title>Revenue Share</ion-title>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button color=\"unit-btn\" text=\"\" icon=\"chevron-back-outline\"></ion-back-button>\r\n    </ion-buttons>\r\n  </ion-toolbar>\r\n  <ion-toolbar *ngIf=\"addPrice\">\r\n    <ion-title>{{btnText}}</ion-title>\r\n    <ion-buttons slot=\"end\" class=\"cancel\" (click)=\"cancel()\">\r\n      <span>\r\n        <ion-icon  name=\"close\"></ion-icon>\r\n      </span>\r\n    </ion-buttons>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content *ngIf=\"!addPrice\">\r\n  <ion-list style=\"width: 100%;\" *ngIf=\"priceList.length\">\r\n    <ion-item-sliding *ngFor=\"let p of priceList\">\r\n      <ion-item >\r\n        <ion-label>\r\n          <ion-grid>\r\n            <ion-row>\r\n              <ion-col class=\"ion-align-self-start\" size=\"8\">\r\n                <h2 style=\"font-weight: bold;\r\n                margin: 10px;\">{{p?.country}}</h2>\r\n              </ion-col>\r\n              <ion-col class=\"ion-align-self-end\" size=\"4\">\r\n                <h6 style=\"text-align: center;\" >{{p?.pricetype}}</h6>\r\n                <h3 style=\"text-align: center;\" *ngIf=\"p.price\">\r\n                  <small *ngIf=\"p.pricetype === 'fixed'\"> share in $ {{p?.price}} </small>\r\n                  <small *ngIf=\"p.pricetype === 'percentage'\"> share in % {{p?.price}} </small>\r\n                </h3>\r\n              </ion-col>\r\n            </ion-row>\r\n          </ion-grid>\r\n        </ion-label>\r\n      </ion-item>\r\n\r\n\r\n      <!-- ITEM SLIDER -->\r\n      <ion-item-options>\r\n        <ion-item-option (click)=\"editPrice(p)\" color=\"primary\">\r\n          <ion-icon slot=\"top\" name=\"pencil\"></ion-icon>\r\n          <ion-label>Edit</ion-label>\r\n        </ion-item-option>\r\n  \r\n        <ion-item-option (click)=\"deletePriceAlert(p)\" color=\"danger\">\r\n          <ion-icon slot=\"top\" name=\"trash\"></ion-icon>\r\n          <ion-label> Delete </ion-label>\r\n        </ion-item-option>\r\n      </ion-item-options>\r\n\r\n    </ion-item-sliding>\r\n  </ion-list>\r\n\r\n  <ion-fab horizontal=\"end\" vertical=\"bottom\" slot=\"fixed\">\r\n    <ion-fab-button class= \"round-shadow\" (click)=\"add()\">\r\n      <ion-icon name=\"add\"></ion-icon>\r\n    </ion-fab-button>\r\n  </ion-fab>\r\n\r\n</ion-content>\r\n\r\n<ion-content *ngIf=\"addPrice\">\r\n  <form [formGroup]=\"revenueShareForm\">\r\n    <ion-item lines=\"none\" class=\"item-space\">\r\n      <ion-label position=\"stacked\" > Country </ion-label>\r\n      <ion-select placeholder=\"Select country\" formControlName=\"country\">\r\n        <ion-select-option *ngFor=\"let c of countryList\" [value]=\"c.value\">{{c?.view}}</ion-select-option>\r\n      </ion-select>\r\n    </ion-item>\r\n    <ion-item lines=\"none\" class=\"item-space\">\r\n      <ion-label position=\"stacked\"> Price Type </ion-label>\r\n      <ion-select placeholder=\"Price type\" formControlName=\"pricetype\" (ionChange)=\"onSelectChange($event)\">\r\n        <ion-select-option *ngFor=\"let p of priceTypeOptions\" [value]=\"p.value\">{{p?.view}}</ion-select-option>\r\n      </ion-select>\r\n    </ion-item>\r\n    <ion-item lines=\"none\" class=\"item-space\">\r\n      <ion-label position=\"stacked\">\r\n        Price Cut <p *ngIf=\"\"></p>\r\n      </ion-label>\r\n      <ion-input placeholder=\"Price cut\" type=\"number\" formControlName=\"price\"></ion-input>\r\n    </ion-item>\r\n  </form>\r\n</ion-content>\r\n<ion-footer *ngIf=\"addPrice\" class=\"ion-no-border\">\r\n  <ion-toolbar>\r\n    <div class=\"ion-padding\">\r\n      <ion-button color=\"unit-btn\" expand=\"block\" class=\"shadow\" [disabled]=\"!revenueShareForm.valid\" (click)=\"submit()\">\r\n        {{btnText}}\r\n      </ion-button>\r\n    </div>\r\n  </ion-toolbar>\r\n</ion-footer>");

/***/ }),

/***/ "./src/app/pages/admin/revenue-share/revenue-share-routing.module.ts":
/*!***************************************************************************!*\
  !*** ./src/app/pages/admin/revenue-share/revenue-share-routing.module.ts ***!
  \***************************************************************************/
/*! exports provided: RevenueSharePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RevenueSharePageRoutingModule", function() { return RevenueSharePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _revenue_share_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./revenue-share.page */ "./src/app/pages/admin/revenue-share/revenue-share.page.ts");




const routes = [
    {
        path: '',
        component: _revenue_share_page__WEBPACK_IMPORTED_MODULE_3__["RevenueSharePage"]
    }
];
let RevenueSharePageRoutingModule = class RevenueSharePageRoutingModule {
};
RevenueSharePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], RevenueSharePageRoutingModule);



/***/ }),

/***/ "./src/app/pages/admin/revenue-share/revenue-share.module.ts":
/*!*******************************************************************!*\
  !*** ./src/app/pages/admin/revenue-share/revenue-share.module.ts ***!
  \*******************************************************************/
/*! exports provided: RevenueSharePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RevenueSharePageModule", function() { return RevenueSharePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _revenue_share_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./revenue-share-routing.module */ "./src/app/pages/admin/revenue-share/revenue-share-routing.module.ts");
/* harmony import */ var _revenue_share_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./revenue-share.page */ "./src/app/pages/admin/revenue-share/revenue-share.page.ts");







let RevenueSharePageModule = class RevenueSharePageModule {
};
RevenueSharePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _revenue_share_routing_module__WEBPACK_IMPORTED_MODULE_5__["RevenueSharePageRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"]
        ],
        declarations: [_revenue_share_page__WEBPACK_IMPORTED_MODULE_6__["RevenueSharePage"]]
    })
], RevenueSharePageModule);



/***/ }),

/***/ "./src/app/pages/admin/revenue-share/revenue-share.page.scss":
/*!*******************************************************************!*\
  !*** ./src/app/pages/admin/revenue-share/revenue-share.page.scss ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".label-stacked.sc-ion-label-ios-h {\n  margin-bottom: 4px;\n  font-size: 14px;\n  font-weight: bold;\n  color: darkgray;\n}\n\nion-item.sc-ion-textarea-ios-h:not(.item-label),\nion-item:not(.item-label) .sc-ion-textarea-ios-h {\n  border: solid 1px #d7d8da;\n  height: 100px;\n  border-radius: 10px;\n  padding: 5px;\n}\n\n.cancel {\n  margin-right: 5px;\n  font-size: x-large;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvYWRtaW4vcmV2ZW51ZS1zaGFyZS9yZXZlbnVlLXNoYXJlLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGtCQUFrQjtFQUNsQixlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLGVBQWU7QUFDbkI7O0FBRUU7O0VBRUUseUJBQXlCO0VBQ3pCLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsWUFBWTtBQUNoQjs7QUFHRTtFQUNFLGlCQUFpQjtFQUNqQixrQkFBa0I7QUFBdEIiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9hZG1pbi9yZXZlbnVlLXNoYXJlL3JldmVudWUtc2hhcmUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmxhYmVsLXN0YWNrZWQuc2MtaW9uLWxhYmVsLWlvcy1oIHtcclxuICAgIG1hcmdpbi1ib3R0b206IDRweDtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgY29sb3I6IGRhcmtncmF5O1xyXG4gIH1cclxuICBcclxuICBpb24taXRlbS5zYy1pb24tdGV4dGFyZWEtaW9zLWg6bm90KC5pdGVtLWxhYmVsKSxcclxuICBpb24taXRlbTpub3QoLml0ZW0tbGFiZWwpIC5zYy1pb24tdGV4dGFyZWEtaW9zLWgge1xyXG4gICAgYm9yZGVyOiBzb2xpZCAxcHggI2Q3ZDhkYTtcclxuICAgIGhlaWdodDogMTAwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgcGFkZGluZzogNXB4O1xyXG4gIH1cclxuICBcclxuICAgXHJcbiAgLmNhbmNlbHtcclxuICAgIG1hcmdpbi1yaWdodDogNXB4O1xyXG4gICAgZm9udC1zaXplOiB4LWxhcmdlO1xyXG4gIH0iXX0= */");

/***/ }),

/***/ "./src/app/pages/admin/revenue-share/revenue-share.page.ts":
/*!*****************************************************************!*\
  !*** ./src/app/pages/admin/revenue-share/revenue-share.page.ts ***!
  \*****************************************************************/
/*! exports provided: RevenueSharePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RevenueSharePage", function() { return RevenueSharePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var src_app_services_api_service_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/api-service.service */ "./src/app/services/api-service.service.ts");
/* harmony import */ var src_app_services_loader_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/loader.service */ "./src/app/services/loader.service.ts");
/* harmony import */ var src_app_services_toast_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/toast.service */ "./src/app/services/toast.service.ts");
/* harmony import */ var _config_config__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../config/config */ "./src/app/pages/config/config.ts");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/__ivy_ngcc__/fesm2015/ionic-storage.js");









let RevenueSharePage = class RevenueSharePage {
    constructor(_apiService, _fb, loader, alertCtrl, _toast, storage) {
        this._apiService = _apiService;
        this._fb = _fb;
        this.loader = loader;
        this.alertCtrl = alertCtrl;
        this._toast = _toast;
        this.storage = storage;
        this.url = _config_config__WEBPACK_IMPORTED_MODULE_7__["config"].url;
        this.priceId = '';
        this.priceTypeOptions = [
            { view: "Fixed Price", value: "fixed" },
            { view: "Percentage", value: "percentage" }
        ];
        this.countryList = [
            { view: "USA", value: "usa" },
            { view: "India", value: "ind" }
        ];
        this.addPrice = false;
        this.btnText = 'Add Revenue Share';
        this.priceList = [];
        this.revenueShareForm = this._fb.group({
            country: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            pricetype: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            price: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required)
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
                        this.getPrices();
                    }
                });
            }
        });
    }
    getPrices() {
        if (this.token) {
            const params = {
                token: this.token,
                orgId: this.orgId
            };
            this._apiService.postRequest(this.url + _config_config__WEBPACK_IMPORTED_MODULE_7__["UNITURL"].revenueShareList, params).subscribe((result) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                if (result.success) {
                    console.log(result.data.list);
                    this.priceList = result.data.list;
                }
            })), (error) => {
                console.log(error.description);
            };
        }
    }
    onSelectChange(ev) {
        console.log(ev);
    }
    cancel() {
        this.addPrice = !this.addPrice;
    }
    submit() {
        let formValue = this.revenueShareForm.value;
        if (this.priceId) {
            this.loader.present();
            const params = {
                shareId: this.priceId,
                token: this.token,
                country: formValue.country,
                pricetype: formValue.pricetype,
                price: formValue.price,
                orgId: this.orgId
            };
            this._apiService.postRequest(this.url + _config_config__WEBPACK_IMPORTED_MODULE_7__["UNITURL"].updaterevenueShare, params).subscribe((result) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                if (result.success) {
                    this._toast.presentToast(result.message);
                    this.revenueShareForm.reset();
                    this.addPrice = false;
                    this.getPrices();
                }
                this.loader.dismiss();
            })), (error) => {
                this.loader.dismiss();
                console.log(error.description);
                this._toast.presentToast(error.description);
            };
        }
        else {
            const params = {
                token: this.token,
                country: formValue.country,
                pricetype: formValue.pricetype,
                price: formValue.price,
                orgId: this.orgId
            };
            this._apiService.postRequest(this.url + _config_config__WEBPACK_IMPORTED_MODULE_7__["UNITURL"].addrevenueShare, params).subscribe((result) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                if (result.success) {
                    this._toast.presentToast(result.message);
                    this.revenueShareForm.reset();
                    this.addPrice = false;
                    this.getPrices();
                }
                this.loader.dismiss();
            })), (error) => {
                this.loader.dismiss();
                console.log(error.description);
                this._toast.presentToast(error.description);
            };
        }
    }
    editPrice(p) {
        console.log(p);
        this.addPrice = true;
        this.btnText = 'Update Revenue Share';
        this.priceId = p._id;
        this.revenueShareForm.controls['country'].setValue(p.country);
        this.revenueShareForm.controls['pricetype'].setValue(p.pricetype);
        this.revenueShareForm.controls['price'].setValue(p.price);
    }
    deletePriceAlert(p) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            console.log(p);
            const alert = yield this.alertCtrl.create({
                header: 'Delete Property Type',
                message: 'Do you want to delete ' + p.pricetype + ' from revenue Share ?',
                buttons: [
                    {
                        text: 'Cancel',
                        role: 'cancel',
                        cssClass: 'secondary',
                        handler: (blah) => { }
                    }, {
                        text: 'Delete',
                        handler: () => {
                            this.deletePrice(p._id);
                        }
                    }
                ]
            });
            yield alert.present();
        });
    }
    deletePrice(_id) {
        console.log('delte');
        const params = {
            token: this.token,
            shareId: _id,
            orgId: this.orgId
        };
        this._apiService.postRequest(this.url + _config_config__WEBPACK_IMPORTED_MODULE_7__["UNITURL"].deleterevenueShare, params).subscribe((result) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (result.success) {
                this._toast.presentToast(result.message);
                this.getPrices();
            }
        })), (error) => {
            console.log(error.description);
            this._toast.presentToast(error.description);
        };
    }
    add() {
        this.addPrice = true;
        this.priceId = '';
        this.btnText = 'Add Revenue Share';
    }
};
RevenueSharePage.ctorParameters = () => [
    { type: src_app_services_api_service_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: src_app_services_loader_service__WEBPACK_IMPORTED_MODULE_5__["LoaderService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"] },
    { type: src_app_services_toast_service__WEBPACK_IMPORTED_MODULE_6__["ToastService"] },
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_8__["Storage"] }
];
RevenueSharePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-revenue-share',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./revenue-share.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/admin/revenue-share/revenue-share.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./revenue-share.page.scss */ "./src/app/pages/admin/revenue-share/revenue-share.page.scss")).default]
    })
], RevenueSharePage);



/***/ })

}]);
//# sourceMappingURL=pages-admin-revenue-share-revenue-share-module-es2015.js.map