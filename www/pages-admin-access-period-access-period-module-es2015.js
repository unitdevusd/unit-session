(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-admin-access-period-access-period-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/admin/access-period/access-period.page.html":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/admin/access-period/access-period.page.html ***!
  \*********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar *ngIf=\"!addType\">\r\n    <ion-title>Access Type</ion-title>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button color=\"n\" text=\"\" icon=\"chevron-back-outline\"></ion-back-button>\r\n    </ion-buttons>\r\n  </ion-toolbar>\r\n  <ion-toolbar *ngIf=\"addType\">\r\n    <ion-title>{{btnText}}</ion-title>\r\n    <ion-buttons slot=\"end\" class=\"cancel\" (click)=\"cancel()\">\r\n      <span>\r\n        <ion-icon name=\"close\"></ion-icon>\r\n      </span>\r\n    </ion-buttons>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content *ngIf=\"!addType\">\r\n\r\n  <ion-list style=\"width: 100%;\" *ngIf=\"placesType.length\">\r\n\r\n\r\n    <ion-item-sliding *ngFor=\"let type of placesType\">\r\n      <ion-item>\r\n        <ion-label>\r\n          <ion-grid>\r\n            <ion-row>\r\n              <ion-col class=\"ion-align-self-start\" size=\"9\">\r\n                <h2 style=\"font-weight: bold;\">{{type?.accessTime}}</h2>\r\n                <!-- <h6>{{type?.subtype}}</h6> -->\r\n              </ion-col>\r\n              <!-- <ion-col class=\"ion-align-self-end\" size=\"3\">\r\n                <h3 style=\"text-align: end;\" *ngIf=\"type.price\">Price: ${{type?.price}} </h3>\r\n              </ion-col> -->\r\n            </ion-row>\r\n          </ion-grid>\r\n        </ion-label>\r\n\r\n      </ion-item>\r\n\r\n      <!-- ITEM SLIDER -->\r\n      <ion-item-options>\r\n        <ion-item-option (click)=\"editType(type)\" color=\"primary\">\r\n          <ion-icon slot=\"top\" name=\"pencil\"></ion-icon>\r\n          <ion-label>Edit</ion-label>\r\n        </ion-item-option>\r\n\r\n        <ion-item-option (click)=\"deleteTypeAlert(type)\" color=\"danger\">\r\n          <ion-icon slot=\"top\" name=\"trash\"></ion-icon>\r\n          <ion-label> Delete </ion-label>\r\n        </ion-item-option>\r\n      </ion-item-options>\r\n\r\n    </ion-item-sliding>\r\n  </ion-list>\r\n\r\n  <ion-fab horizontal=\"end\" vertical=\"bottom\" slot=\"fixed\">\r\n    <ion-fab-button class=\"round-shadow\" (click)=\"add()\">\r\n      <ion-icon name=\"add\"></ion-icon>\r\n    </ion-fab-button>\r\n  </ion-fab>\r\n</ion-content>\r\n\r\n\r\n\r\n<ion-content *ngIf=\"addType\">\r\n  <form [formGroup]=\"addPlaceTypeForm\">\r\n    <ion-item lines=\"none\" class=\"item-space\">\r\n      <ion-label position=\"stacked\"> Type </ion-label>\r\n      <ion-select placeholder=\"Select type\" formControlName=\"type\">\r\n        <ion-select-option value=\"Monthly\">Monthly</ion-select-option>\r\n        <ion-select-option value=\"Weekly\">Weekly</ion-select-option>\r\n        <ion-select-option value=\"Daily\">Daily</ion-select-option>\r\n      </ion-select>\r\n    </ion-item>\r\n\r\n    <ion-item style=\"padding-top: 10px;\" lines=\"none\">\r\n        <ion-textarea placeholder=\"Description\" formControlName=\"description\"></ion-textarea>\r\n    </ion-item>\r\n\r\n  </form>\r\n</ion-content>\r\n<ion-footer *ngIf=\"addType\" class=\"ion-no-border\">\r\n  <ion-toolbar>\r\n    <div class=\"ion-padding\">\r\n      <ion-button color=\"unit-btn\" class=\"shadow\" expand=\"block\" [disabled]=\"!addPlaceTypeForm.valid\" (click)=\"submit()\">\r\n        {{btnText}}\r\n      </ion-button>\r\n    </div>\r\n  </ion-toolbar>\r\n</ion-footer>");

/***/ }),

/***/ "./src/app/pages/admin/access-period/access-period-routing.module.ts":
/*!***************************************************************************!*\
  !*** ./src/app/pages/admin/access-period/access-period-routing.module.ts ***!
  \***************************************************************************/
/*! exports provided: AccessPeriodPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccessPeriodPageRoutingModule", function() { return AccessPeriodPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _access_period_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./access-period.page */ "./src/app/pages/admin/access-period/access-period.page.ts");




const routes = [
    {
        path: '',
        component: _access_period_page__WEBPACK_IMPORTED_MODULE_3__["AccessPeriodPage"]
    }
];
let AccessPeriodPageRoutingModule = class AccessPeriodPageRoutingModule {
};
AccessPeriodPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], AccessPeriodPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/admin/access-period/access-period.module.ts":
/*!*******************************************************************!*\
  !*** ./src/app/pages/admin/access-period/access-period.module.ts ***!
  \*******************************************************************/
/*! exports provided: AccessPeriodPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccessPeriodPageModule", function() { return AccessPeriodPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _access_period_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./access-period-routing.module */ "./src/app/pages/admin/access-period/access-period-routing.module.ts");
/* harmony import */ var _access_period_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./access-period.page */ "./src/app/pages/admin/access-period/access-period.page.ts");







let AccessPeriodPageModule = class AccessPeriodPageModule {
};
AccessPeriodPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _access_period_routing_module__WEBPACK_IMPORTED_MODULE_5__["AccessPeriodPageRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"]
        ],
        declarations: [_access_period_page__WEBPACK_IMPORTED_MODULE_6__["AccessPeriodPage"]]
    })
], AccessPeriodPageModule);



/***/ }),

/***/ "./src/app/pages/admin/access-period/access-period.page.scss":
/*!*******************************************************************!*\
  !*** ./src/app/pages/admin/access-period/access-period.page.scss ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".label-stacked.sc-ion-label-ios-h {\n  margin-bottom: 4px;\n  font-size: 14px;\n  font-weight: bold;\n  color: darkgray;\n}\n\nion-item.sc-ion-textarea-ios-h:not(.item-label),\nion-item:not(.item-label) .sc-ion-textarea-ios-h {\n  border: solid 1px #d7d8da;\n  height: 100px;\n  border-radius: 10px;\n  padding: 5px;\n}\n\n.cancel {\n  margin-right: 5px;\n  font-size: x-large;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvYWRtaW4vYWNjZXNzLXBlcmlvZC9hY2Nlc3MtcGVyaW9kLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGtCQUFrQjtFQUNsQixlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLGVBQWU7QUFDbkI7O0FBRUU7O0VBRUUseUJBQXlCO0VBQ3pCLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsWUFBWTtBQUNoQjs7QUFHRTtFQUNFLGlCQUFpQjtFQUNqQixrQkFBa0I7QUFBdEIiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9hZG1pbi9hY2Nlc3MtcGVyaW9kL2FjY2Vzcy1wZXJpb2QucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmxhYmVsLXN0YWNrZWQuc2MtaW9uLWxhYmVsLWlvcy1oIHtcclxuICAgIG1hcmdpbi1ib3R0b206IDRweDtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgY29sb3I6IGRhcmtncmF5O1xyXG4gIH1cclxuICBcclxuICBpb24taXRlbS5zYy1pb24tdGV4dGFyZWEtaW9zLWg6bm90KC5pdGVtLWxhYmVsKSxcclxuICBpb24taXRlbTpub3QoLml0ZW0tbGFiZWwpIC5zYy1pb24tdGV4dGFyZWEtaW9zLWgge1xyXG4gICAgYm9yZGVyOiBzb2xpZCAxcHggI2Q3ZDhkYTtcclxuICAgIGhlaWdodDogMTAwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgcGFkZGluZzogNXB4O1xyXG4gIH1cclxuICBcclxuICAgIFxyXG4gIC5jYW5jZWx7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDVweDtcclxuICAgIGZvbnQtc2l6ZTogeC1sYXJnZTtcclxuICB9Il19 */");

/***/ }),

/***/ "./src/app/pages/admin/access-period/access-period.page.ts":
/*!*****************************************************************!*\
  !*** ./src/app/pages/admin/access-period/access-period.page.ts ***!
  \*****************************************************************/
/*! exports provided: AccessPeriodPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccessPeriodPage", function() { return AccessPeriodPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var src_app_services_api_service_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/api-service.service */ "./src/app/services/api-service.service.ts");
/* harmony import */ var src_app_services_loader_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/loader.service */ "./src/app/services/loader.service.ts");
/* harmony import */ var src_app_services_toast_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/toast.service */ "./src/app/services/toast.service.ts");
/* harmony import */ var _config_config__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../config/config */ "./src/app/pages/config/config.ts");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/__ivy_ngcc__/fesm2015/ionic-storage.js");









let AccessPeriodPage = class AccessPeriodPage {
    constructor(_apiService, _fb, loader, alertCtrl, _toast, storage) {
        this._apiService = _apiService;
        this._fb = _fb;
        this.loader = loader;
        this.alertCtrl = alertCtrl;
        this._toast = _toast;
        this.storage = storage;
        this.url = _config_config__WEBPACK_IMPORTED_MODULE_7__["config"].url;
        this.placesType = [];
        this.addType = false;
        this.typeId = '';
        this.btnText = 'Add Access type';
        this.subtypes = [];
        this.addPlaceTypeForm = this._fb.group({
            type: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            description: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required)
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
                        this.getType();
                    }
                });
            }
        });
    }
    getType() {
        if (this.token) {
            const params = {
                token: this.token,
                orgId: this.orgId
            };
            this._apiService.postRequest(this.url + _config_config__WEBPACK_IMPORTED_MODULE_7__["UNITURL"].accessTimeList, params).subscribe((result) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                if (result.success) {
                    console.log(result.data.list);
                    this.placesType = result.data.list;
                }
            })), (error) => {
                console.log(error.description);
            };
        }
    }
    submit() {
        let formValue = this.addPlaceTypeForm.value;
        if (this.typeId) {
            this.loader.present();
            const params = {
                accessTimeId: this.typeId,
                token: this.token,
                accessTime: formValue.type,
                description: formValue.description,
                orgId: this.orgId
            };
            this._apiService.postRequest(this.url + _config_config__WEBPACK_IMPORTED_MODULE_7__["UNITURL"].updateAccessTime, params).subscribe((result) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                if (result.success) {
                    this._toast.presentToast(result.message);
                    this.addPlaceTypeForm.reset();
                    this.addType = false;
                    this.getType();
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
                accessTimeName: formValue.type,
                description: formValue.description,
                orgId: this.orgId
            };
            console.log(params);
            this._apiService.postRequest(this.url + _config_config__WEBPACK_IMPORTED_MODULE_7__["UNITURL"].addAccessTime, params).subscribe((result) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                if (result.success) {
                    this._toast.presentToast(result.message);
                    this.addPlaceTypeForm.reset();
                    this.addType = false;
                    this.getType();
                }
                this.loader.dismiss();
            })), (error) => {
                this.loader.dismiss();
                console.log(error.description);
                this._toast.presentToast(error.description);
            };
        }
    }
    cancel() {
        this.addType = !this.addType;
    }
    editType(placeType) {
        console.log('11', placeType);
        this.addType = true;
        this.btnText = 'Update Access type';
        this.typeId = placeType._id;
        this.addPlaceTypeForm.controls['type'].setValue(placeType.accessTime);
        this.addPlaceTypeForm.controls['description'].setValue(placeType.description);
    }
    ;
    deleteTypeAlert(property) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const alert = yield this.alertCtrl.create({
                header: 'Delete Access type',
                message: 'Do you want to delete ' + property.type + ' from type ?',
                buttons: [
                    {
                        text: 'Cancel',
                        role: 'cancel',
                        cssClass: 'secondary',
                        handler: (blah) => { }
                    }, {
                        text: 'Delete',
                        handler: () => {
                            this.deleteType(property._id);
                        }
                    }
                ]
            });
            yield alert.present();
        });
    }
    deleteType(_id) {
        const params = {
            token: this.token,
            accessTypeId: _id,
            orgId: this.orgId
        };
        this._apiService.postRequest(this.url + _config_config__WEBPACK_IMPORTED_MODULE_7__["UNITURL"].deleteAccessTimeType, params).subscribe((result) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (result.success) {
                this._toast.presentToast(result.message);
                this.getType();
            }
        })), (error) => {
            console.log(error.description);
            this._toast.presentToast(error.description);
        };
    }
    add() {
        this.addType = true;
        this.typeId = '';
        this.btnText = 'Add Access type';
        this.addPlaceTypeForm.reset();
    }
    onSelectChange(ev) {
        this.subtypes = [];
    }
};
AccessPeriodPage.ctorParameters = () => [
    { type: src_app_services_api_service_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: src_app_services_loader_service__WEBPACK_IMPORTED_MODULE_5__["LoaderService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"] },
    { type: src_app_services_toast_service__WEBPACK_IMPORTED_MODULE_6__["ToastService"] },
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_8__["Storage"] }
];
AccessPeriodPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-access-period',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./access-period.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/admin/access-period/access-period.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./access-period.page.scss */ "./src/app/pages/admin/access-period/access-period.page.scss")).default]
    })
], AccessPeriodPage);



/***/ })

}]);
//# sourceMappingURL=pages-admin-access-period-access-period-module-es2015.js.map