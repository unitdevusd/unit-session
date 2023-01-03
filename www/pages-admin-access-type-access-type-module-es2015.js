(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-admin-access-type-access-type-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/admin/access-type/access-type.page.html":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/admin/access-type/access-type.page.html ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar *ngIf=\"!addType\">\r\n    <ion-title>Access Time</ion-title>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button color=\"unit-btn\" text=\"\" icon=\"chevron-back-outline\"></ion-back-button>\r\n    </ion-buttons>\r\n  </ion-toolbar>\r\n  <ion-toolbar *ngIf=\"addType\">\r\n    <ion-title>{{btnText}}</ion-title>\r\n    <ion-buttons slot=\"end\" class=\"cancel\" (click)=\"cancel()\">\r\n      <span>\r\n        <ion-icon name=\"close\"></ion-icon>\r\n      </span>\r\n    </ion-buttons>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content *ngIf=\"!addType\">\r\n  <ion-list style=\"width: 100%;\" *ngIf=\"placesType.length\">\r\n    <ion-item-sliding *ngFor=\"let type of placesType\">\r\n      <ion-item>\r\n        <ion-label>\r\n          <ion-grid>\r\n            <ion-row>\r\n              <ion-col class=\"ion-align-self-start\" size=\"9\">\r\n                <h2 style=\"font-weight: bold;\">{{type?.accessType}}</h2>\r\n                <!-- <h6>{{type?.subtype}}</h6> -->\r\n              </ion-col>\r\n              <!-- <ion-col class=\"ion-align-self-end\" size=\"3\">\r\n                <h3 style=\"text-align: end;\" *ngIf=\"type.price\">Price: ${{type?.price}} </h3>\r\n              </ion-col> -->\r\n            </ion-row>\r\n          </ion-grid>\r\n        </ion-label>\r\n\r\n      </ion-item>\r\n\r\n      <!-- ITEM SLIDER -->\r\n      <ion-item-options>\r\n        <ion-item-option (click)=\"editType(type)\" color=\"primary\">\r\n          <ion-icon slot=\"top\" name=\"pencil\"></ion-icon>\r\n          <ion-label>Edit</ion-label>\r\n        </ion-item-option>\r\n\r\n        <ion-item-option (click)=\"deleteTypeAlert(type)\" color=\"danger\">\r\n          <ion-icon slot=\"top\" name=\"trash\"></ion-icon>\r\n          <ion-label> Delete </ion-label>\r\n        </ion-item-option>\r\n      </ion-item-options>\r\n\r\n    </ion-item-sliding>\r\n  </ion-list>\r\n\r\n  <ion-fab horizontal=\"end\" vertical=\"bottom\" slot=\"fixed\">\r\n    <ion-fab-button class=\"round-shadow\" (click)=\"add()\">\r\n      <ion-icon name=\"add\"></ion-icon>\r\n    </ion-fab-button>\r\n  </ion-fab>\r\n</ion-content>\r\n\r\n\r\n\r\n<ion-content *ngIf=\"addType\">\r\n  <form [formGroup]=\"addPlaceTypeForm\">\r\n    <ion-item lines=\"none\" class=\"item-space\">\r\n      <ion-label position=\"stacked\"> Type </ion-label>\r\n      <ion-select placeholder=\"Select type\" formControlName=\"type\">\r\n        <ion-select-option value=\"Daytime hours\">Daytime hours</ion-select-option>\r\n        <ion-select-option value=\"Evening hours\">Evening hours</ion-select-option>\r\n        <ion-select-option value=\"24*7\">24/7</ion-select-option>\r\n      </ion-select>\r\n    </ion-item>\r\n\r\n    <ion-item style=\"padding-top: 10px;\" lines=\"none\">\r\n        <ion-textarea placeholder=\"Description\" formControlName=\"description\"></ion-textarea>\r\n    </ion-item>\r\n\r\n  </form>\r\n</ion-content>\r\n<ion-footer *ngIf=\"addType\" class=\"ion-no-border\">\r\n  <ion-toolbar>\r\n    <div class=\"ion-padding\">\r\n      <ion-button color=\"unit-btn\" class=\"shadow\" expand=\"block\" [disabled]=\"!addPlaceTypeForm.valid\" (click)=\"submit()\">\r\n        {{btnText}}\r\n      </ion-button>\r\n    </div>\r\n  </ion-toolbar>\r\n</ion-footer>");

/***/ }),

/***/ "./src/app/pages/admin/access-type/access-type-routing.module.ts":
/*!***********************************************************************!*\
  !*** ./src/app/pages/admin/access-type/access-type-routing.module.ts ***!
  \***********************************************************************/
/*! exports provided: AccessTypePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccessTypePageRoutingModule", function() { return AccessTypePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _access_type_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./access-type.page */ "./src/app/pages/admin/access-type/access-type.page.ts");




const routes = [
    {
        path: '',
        component: _access_type_page__WEBPACK_IMPORTED_MODULE_3__["AccessTypePage"]
    }
];
let AccessTypePageRoutingModule = class AccessTypePageRoutingModule {
};
AccessTypePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], AccessTypePageRoutingModule);



/***/ }),

/***/ "./src/app/pages/admin/access-type/access-type.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/pages/admin/access-type/access-type.module.ts ***!
  \***************************************************************/
/*! exports provided: AccessTypePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccessTypePageModule", function() { return AccessTypePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _access_type_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./access-type-routing.module */ "./src/app/pages/admin/access-type/access-type-routing.module.ts");
/* harmony import */ var _access_type_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./access-type.page */ "./src/app/pages/admin/access-type/access-type.page.ts");







let AccessTypePageModule = class AccessTypePageModule {
};
AccessTypePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _access_type_routing_module__WEBPACK_IMPORTED_MODULE_5__["AccessTypePageRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"]
        ],
        declarations: [_access_type_page__WEBPACK_IMPORTED_MODULE_6__["AccessTypePage"]]
    })
], AccessTypePageModule);



/***/ }),

/***/ "./src/app/pages/admin/access-type/access-type.page.scss":
/*!***************************************************************!*\
  !*** ./src/app/pages/admin/access-type/access-type.page.scss ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".label-stacked.sc-ion-label-ios-h {\n  margin-bottom: 4px;\n  font-size: 14px;\n  font-weight: bold;\n  color: darkgray;\n}\n\nion-item.sc-ion-textarea-ios-h:not(.item-label),\nion-item:not(.item-label) .sc-ion-textarea-ios-h {\n  border: solid 1px #d7d8da;\n  height: 100px;\n  border-radius: 10px;\n  padding: 5px;\n}\n\n.cancel {\n  margin-right: 5px;\n  font-size: x-large;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvYWRtaW4vYWNjZXNzLXR5cGUvYWNjZXNzLXR5cGUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksa0JBQWtCO0VBQ2xCLGVBQWU7RUFDZixpQkFBaUI7RUFDakIsZUFBZTtBQUNuQjs7QUFFRTs7RUFFRSx5QkFBeUI7RUFDekIsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixZQUFZO0FBQ2hCOztBQUdFO0VBQ0UsaUJBQWlCO0VBQ2pCLGtCQUFrQjtBQUF0QiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2FkbWluL2FjY2Vzcy10eXBlL2FjY2Vzcy10eXBlLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5sYWJlbC1zdGFja2VkLnNjLWlvbi1sYWJlbC1pb3MtaCB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA0cHg7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGNvbG9yOiBkYXJrZ3JheTtcclxuICB9XHJcbiAgXHJcbiAgaW9uLWl0ZW0uc2MtaW9uLXRleHRhcmVhLWlvcy1oOm5vdCguaXRlbS1sYWJlbCksXHJcbiAgaW9uLWl0ZW06bm90KC5pdGVtLWxhYmVsKSAuc2MtaW9uLXRleHRhcmVhLWlvcy1oIHtcclxuICAgIGJvcmRlcjogc29saWQgMXB4ICNkN2Q4ZGE7XHJcbiAgICBoZWlnaHQ6IDEwMHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgIHBhZGRpbmc6IDVweDtcclxuICB9XHJcbiAgXHJcbiAgIFxyXG4gIC5jYW5jZWx7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDVweDtcclxuICAgIGZvbnQtc2l6ZTogeC1sYXJnZTtcclxuICB9Il19 */");

/***/ }),

/***/ "./src/app/pages/admin/access-type/access-type.page.ts":
/*!*************************************************************!*\
  !*** ./src/app/pages/admin/access-type/access-type.page.ts ***!
  \*************************************************************/
/*! exports provided: AccessTypePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccessTypePage", function() { return AccessTypePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var src_app_services_api_service_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/api-service.service */ "./src/app/services/api-service.service.ts");
/* harmony import */ var src_app_services_loader_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/loader.service */ "./src/app/services/loader.service.ts");
/* harmony import */ var src_app_services_toast_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/toast.service */ "./src/app/services/toast.service.ts");
/* harmony import */ var _config_config__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../config/config */ "./src/app/pages/config/config.ts");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/__ivy_ngcc__/fesm2015/ionic-storage.js");









let AccessTypePage = class AccessTypePage {
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
        this.btnText = 'Add Access time';
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
            this._apiService.postRequest(this.url + _config_config__WEBPACK_IMPORTED_MODULE_7__["UNITURL"].accessTypeList, params).subscribe((result) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
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
                accessTypeId: this.typeId,
                token: this.token,
                accessType: formValue.type,
                description: formValue.description,
                orgId: this.orgId
            };
            console.log('@@', params);
            this._apiService.postRequest(this.url + _config_config__WEBPACK_IMPORTED_MODULE_7__["UNITURL"].updateAccessType, params).subscribe((result) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
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
                accessTypeName: formValue.type,
                description: formValue.description,
                orgId: this.orgId
            };
            console.log(params);
            this._apiService.postRequest(this.url + _config_config__WEBPACK_IMPORTED_MODULE_7__["UNITURL"].addAccessType, params).subscribe((result) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
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
        this.btnText = 'Update Access time';
        this.typeId = placeType._id;
        this.addPlaceTypeForm.controls['type'].setValue(placeType.accessType);
        this.addPlaceTypeForm.controls['description'].setValue(placeType.description);
    }
    ;
    deleteTypeAlert(property) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const alert = yield this.alertCtrl.create({
                header: 'Delete Access Time',
                message: 'Do you want to delete ' + property.type + ' from time ?',
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
        this._apiService.postRequest(this.url + _config_config__WEBPACK_IMPORTED_MODULE_7__["UNITURL"].deleteAccessType, params).subscribe((result) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
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
        this.btnText = 'Add Access time';
        this.addPlaceTypeForm.reset();
    }
    onSelectChange(ev) {
        this.subtypes = [];
    }
};
AccessTypePage.ctorParameters = () => [
    { type: src_app_services_api_service_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: src_app_services_loader_service__WEBPACK_IMPORTED_MODULE_5__["LoaderService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"] },
    { type: src_app_services_toast_service__WEBPACK_IMPORTED_MODULE_6__["ToastService"] },
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_8__["Storage"] }
];
AccessTypePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-access-type',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./access-type.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/admin/access-type/access-type.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./access-type.page.scss */ "./src/app/pages/admin/access-type/access-type.page.scss")).default]
    })
], AccessTypePage);



/***/ })

}]);
//# sourceMappingURL=pages-admin-access-type-access-type-module-es2015.js.map