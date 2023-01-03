(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-admin-space-type-space-type-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/admin/space-type/space-type.page.html":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/admin/space-type/space-type.page.html ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar *ngIf=\"!addType\">\r\n    <ion-title>Space Type</ion-title>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button color=\"unit-btn\" text=\"\" icon=\"chevron-back-outline\"></ion-back-button>\r\n    </ion-buttons>\r\n  </ion-toolbar>\r\n  <ion-toolbar *ngIf=\"addType\">\r\n    <ion-title>{{btnText}}</ion-title>\r\n    <ion-buttons slot=\"end\" class=\"cancel\" (click)=\"cancel()\">\r\n      <span>\r\n        <ion-icon name=\"close\"></ion-icon>\r\n      </span>\r\n    </ion-buttons>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content *ngIf=\"!addType\">\r\n\r\n  <ion-list style=\"width: 100%;\" *ngIf=\"placesType.length\">\r\n\r\n    <ion-item-sliding *ngFor=\"let type of placesType\">\r\n      <ion-item>\r\n        <ion-label>\r\n          <ion-grid>\r\n            <ion-row>\r\n              <ion-col class=\"ion-align-self-start\" size=\"9\">\r\n                <h2 style=\"font-weight: bold;\">{{type?.spaceType}}</h2>\r\n              </ion-col>\r\n            </ion-row>\r\n          </ion-grid>\r\n        </ion-label>\r\n      </ion-item>\r\n      <!-- ITEM SLIDER -->\r\n      <ion-item-options>\r\n        <ion-item-option (click)=\"editType(type)\" color=\"primary\">\r\n          <ion-icon slot=\"top\" name=\"pencil\"></ion-icon>\r\n          <ion-label>Edit</ion-label>\r\n        </ion-item-option>\r\n        <ion-item-option (click)=\"deleteTypeAlert(type)\" color=\"danger\">\r\n          <ion-icon slot=\"top\" name=\"trash\"></ion-icon>\r\n          <ion-label> Delete </ion-label>\r\n        </ion-item-option>\r\n      </ion-item-options>\r\n    </ion-item-sliding>\r\n  </ion-list>\r\n  <ion-fab horizontal=\"end\" vertical=\"bottom\" slot=\"fixed\">\r\n    <ion-fab-button class=\"round-shadow\" (click)=\"add()\">\r\n      <ion-icon name=\"add\"></ion-icon>\r\n    </ion-fab-button>\r\n  </ion-fab>\r\n</ion-content>\r\n<ion-content *ngIf=\"addType\" class=\"form\">\r\n  <form [formGroup]=\"addPlaceTypeForm\">\r\n    <ion-item lines=\"none\">\r\n      <ion-label position=\"floating\"> Type </ion-label>\r\n      <ion-input class=\"input\" placeHolder=\"Space Type\" formControlName=\"type\"></ion-input>\r\n    </ion-item>\r\n    <ion-item lines=\"none\">\r\n      <ion-label position=\"floating\"> Description </ion-label>\r\n      <ion-input class=\"input\" placeHolder=\"Description\" formControlName=\"desc\"></ion-input>\r\n    </ion-item>\r\n    <ion-list-header>\r\n      Recent Conversations\r\n    </ion-list-header>\r\n    <ion-item lines=\"none\">\r\n      <ion-label position=\"floating\">Daily Price</ion-label>\r\n      <ion-grid>\r\n        <ion-row>\r\n          <ion-col>\r\n            <ion-input class=\"input\" formControlName=\"dailyMin\" placeholder=\"min\"></ion-input>\r\n          </ion-col>\r\n          <ion-col>\r\n            <ion-input class=\"input\" formControlName=\"dailyMax\" placeholder=\"max\"></ion-input>\r\n          </ion-col>\r\n        </ion-row>\r\n      </ion-grid>\r\n    </ion-item>\r\n    <ion-item lines=\"none\">\r\n      <ion-label position=\"stacked\">weekly Price</ion-label>\r\n      <ion-grid>\r\n        <ion-row>\r\n          <ion-col>\r\n            <ion-input class=\"input\" formControlName=\"weeklyMin\" placeholder=\"min\"></ion-input>\r\n          </ion-col>\r\n          <ion-col>\r\n            <ion-input class=\"input\" formControlName=\"weeklyMax\" placeholder=\"max\"></ion-input>\r\n          </ion-col>\r\n        </ion-row>\r\n      </ion-grid>\r\n    </ion-item>\r\n    <ion-item lines=\"none\">\r\n      <ion-label position=\"stacked\">Monthly Price</ion-label>\r\n      <ion-grid>\r\n        <ion-row>\r\n          <ion-col>\r\n            <ion-input class=\"input\" formControlName=\"monthlyMin\" placeholder=\"min\"></ion-input>\r\n          </ion-col>\r\n          <ion-col>\r\n            <ion-input class=\"input\" formControlName=\"monthlyMax\" placeholder=\"max\"></ion-input>\r\n          </ion-col>\r\n        </ion-row>\r\n      </ion-grid>\r\n    </ion-item>\r\n    <ion-item>\r\n      <ion-label position=\"stacked\">Add Images</ion-label>\r\n      <ion-grid>\r\n        <ion-row>\r\n          <ion-col text-center>\r\n            <ion-button (click)=\"getImages()\">Choose Images</ion-button>\r\n          </ion-col>\r\n        </ion-row>\r\n        <ion-row>\r\n          <ion-col>\r\n            <div class=\"images\">\r\n              <div class=\"one-image\" *ngFor=\"let img of imageResponse; let i = index\">\r\n                <img src=\"{{img}}\" alt=\"\" srcset=\"\">\r\n                <ion-button class=\"close-icon\" color=\"danger\" (click)=\"deleteImage(i)\">\r\n                  <ion-icon name=\"trash-outline\"></ion-icon>\r\n                </ion-button>\r\n              </div>\r\n            </div>\r\n          </ion-col>\r\n        </ion-row>\r\n      </ion-grid>\r\n    </ion-item>\r\n  </form>\r\n</ion-content>\r\n<ion-footer *ngIf=\"addType\" class=\"ion-no-border\">\r\n  <ion-toolbar>\r\n    <div class=\"ion-padding\">\r\n      <ion-button color=\"unit-btn\" class=\"shadow\" expand=\"block\"\r\n        [disabled]=\"!addPlaceTypeForm.valid && !imageResponse.length\" (click)=\"submit()\">\r\n        {{btnText}}\r\n      </ion-button>\r\n    </div>\r\n  </ion-toolbar>\r\n</ion-footer>");

/***/ }),

/***/ "./src/app/pages/admin/space-type/space-type-routing.module.ts":
/*!*********************************************************************!*\
  !*** ./src/app/pages/admin/space-type/space-type-routing.module.ts ***!
  \*********************************************************************/
/*! exports provided: SpaceTypePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SpaceTypePageRoutingModule", function() { return SpaceTypePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _space_type_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./space-type.page */ "./src/app/pages/admin/space-type/space-type.page.ts");




const routes = [
    {
        path: '',
        component: _space_type_page__WEBPACK_IMPORTED_MODULE_3__["SpaceTypePage"]
    }
];
let SpaceTypePageRoutingModule = class SpaceTypePageRoutingModule {
};
SpaceTypePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], SpaceTypePageRoutingModule);



/***/ }),

/***/ "./src/app/pages/admin/space-type/space-type.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/pages/admin/space-type/space-type.module.ts ***!
  \*************************************************************/
/*! exports provided: SpaceTypePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SpaceTypePageModule", function() { return SpaceTypePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _space_type_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./space-type-routing.module */ "./src/app/pages/admin/space-type/space-type-routing.module.ts");
/* harmony import */ var _space_type_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./space-type.page */ "./src/app/pages/admin/space-type/space-type.page.ts");







let SpaceTypePageModule = class SpaceTypePageModule {
};
SpaceTypePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _space_type_routing_module__WEBPACK_IMPORTED_MODULE_5__["SpaceTypePageRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"]
        ],
        providers: [],
        declarations: [_space_type_page__WEBPACK_IMPORTED_MODULE_6__["SpaceTypePage"]]
    })
], SpaceTypePageModule);



/***/ }),

/***/ "./src/app/pages/admin/space-type/space-type.page.scss":
/*!*************************************************************!*\
  !*** ./src/app/pages/admin/space-type/space-type.page.scss ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".label-stacked.sc-ion-label-ios-h {\n  margin-bottom: 4px;\n  font-size: 14px;\n  font-weight: bold;\n  color: darkgray;\n}\n\nion-item.sc-ion-textarea-ios-h:not(.item-label),\nion-item:not(.item-label) .sc-ion-textarea-ios-h {\n  border: solid 1px #d7d8da;\n  height: 100px;\n  border-radius: 10px;\n  padding: 5px;\n}\n\n.cancel {\n  margin-right: 5px;\n  font-size: x-large;\n}\n\n.form {\n  margin-top: 10%;\n}\n\n.input {\n  border-bottom: 1px solid \"quaternary\";\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvYWRtaW4vc3BhY2UtdHlwZS9zcGFjZS10eXBlLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGtCQUFrQjtFQUNsQixlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLGVBQWU7QUFDbkI7O0FBRUU7O0VBRUUseUJBQXlCO0VBQ3pCLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsWUFBWTtBQUNoQjs7QUFFRTtFQUNFLGlCQUFpQjtFQUNqQixrQkFBa0I7QUFDdEI7O0FBRUU7RUFDRSxlQUFlO0FBQ25COztBQUVFO0VBQ0UscUNBQXFDO0FBQ3pDIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvYWRtaW4vc3BhY2UtdHlwZS9zcGFjZS10eXBlLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5sYWJlbC1zdGFja2VkLnNjLWlvbi1sYWJlbC1pb3MtaCB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA0cHg7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGNvbG9yOiBkYXJrZ3JheTtcclxuICB9XHJcbiAgXHJcbiAgaW9uLWl0ZW0uc2MtaW9uLXRleHRhcmVhLWlvcy1oOm5vdCguaXRlbS1sYWJlbCksXHJcbiAgaW9uLWl0ZW06bm90KC5pdGVtLWxhYmVsKSAuc2MtaW9uLXRleHRhcmVhLWlvcy1oIHtcclxuICAgIGJvcmRlcjogc29saWQgMXB4ICNkN2Q4ZGE7XHJcbiAgICBoZWlnaHQ6IDEwMHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgIHBhZGRpbmc6IDVweDtcclxuICB9XHJcbiAgXHJcbiAgLmNhbmNlbHtcclxuICAgIG1hcmdpbi1yaWdodDogNXB4O1xyXG4gICAgZm9udC1zaXplOiB4LWxhcmdlO1xyXG4gIH1cclxuXHJcbiAgLmZvcm0ge1xyXG4gICAgbWFyZ2luLXRvcDogMTAlO1xyXG4gIH1cclxuXHJcbiAgLmlucHV0e1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIFwicXVhdGVybmFyeVwiO1xyXG4gIH0iXX0= */");

/***/ }),

/***/ "./src/app/pages/admin/space-type/space-type.page.ts":
/*!***********************************************************!*\
  !*** ./src/app/pages/admin/space-type/space-type.page.ts ***!
  \***********************************************************/
/*! exports provided: SpaceTypePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SpaceTypePage", function() { return SpaceTypePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _config_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../config/config */ "./src/app/pages/config/config.ts");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/__ivy_ngcc__/fesm2015/ionic-storage.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var src_app_services_loader_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/loader.service */ "./src/app/services/loader.service.ts");
/* harmony import */ var src_app_services_api_service_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/api-service.service */ "./src/app/services/api-service.service.ts");
/* harmony import */ var src_app_services_toast_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/services/toast.service */ "./src/app/services/toast.service.ts");
/* harmony import */ var _capacitor_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @capacitor/core */ "./node_modules/@capacitor/core/dist/esm/index.js");










const { Camera } = _capacitor_core__WEBPACK_IMPORTED_MODULE_9__["Plugins"];
let SpaceTypePage = class SpaceTypePage {
    constructor(_api, _fb, loader, alertCtrl, _toast, storage, zone) {
        this._api = _api;
        this._fb = _fb;
        this.loader = loader;
        this.alertCtrl = alertCtrl;
        this._toast = _toast;
        this.storage = storage;
        this.zone = zone;
        this.url = _config_config__WEBPACK_IMPORTED_MODULE_2__["config"].url;
        this.placesType = [];
        this.addType = false;
        this.typeId = '';
        this.btnText = 'Add Space type';
        this.subtypes = [];
        this.imageResponse = [];
        this.addPlaceTypeForm = this._fb.group({
            type: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required),
            desc: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required),
            dailyMin: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required),
            dailyMax: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required),
            weeklyMin: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required),
            weeklyMax: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required),
            monthlyMin: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required),
            monthlyMax: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required),
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
            this._api.postRequest(this.url + _config_config__WEBPACK_IMPORTED_MODULE_2__["UNITURL"].spaceTypeList, params).subscribe((result) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
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
        const prices = {
            daily: {
                min: formValue.dailyMin,
                max: formValue.dailyMax
            },
            monthly: {
                min: formValue.monthlyMin,
                max: formValue.monthlyMax
            },
            weekly: {
                min: formValue.weeklyMin,
                max: formValue.weeklyMax
            }
        };
        if (this.typeId) {
            this.loader.present();
            const params = {
                typeId: this.typeId,
                token: this.token,
                spaceType: formValue.type,
                prices: prices,
                description: formValue.desc,
                images: this.imageResponse,
                orgId: this.orgId
            };
            console.log(params);
            this._api.postRequest(this.url + _config_config__WEBPACK_IMPORTED_MODULE_2__["UNITURL"].updateSpaceType, params).subscribe((result) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
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
                typeId: this.typeId,
                token: this.token,
                spaceType: formValue.type,
                prices: prices,
                description: formValue.desc,
                images: this.imageResponse,
                orgId: this.orgId
            };
            console.log(params);
            this._api.postRequest(this.url + _config_config__WEBPACK_IMPORTED_MODULE_2__["UNITURL"].spaceType, params).subscribe((result) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
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
        this.addType = true;
        this.btnText = 'Update Space type';
        this.typeId = placeType._id;
        console.log('@@@', placeType);
        this.addPlaceTypeForm.controls['type'].setValue(placeType.spaceType);
        this.addPlaceTypeForm.controls['desc'].setValue(placeType.description);
        this.addPlaceTypeForm.controls['dailyMin'].setValue(placeType.prices.daily.min);
        this.addPlaceTypeForm.controls['dailyMax'].setValue(placeType.prices.daily.max);
        this.addPlaceTypeForm.controls['weeklyMin'].setValue(placeType.prices.weekly.min);
        this.addPlaceTypeForm.controls['weeklyMax'].setValue(placeType.prices.weekly.max);
        this.addPlaceTypeForm.controls['monthlyMin'].setValue(placeType.prices.monthly.min);
        this.addPlaceTypeForm.controls['monthlyMax'].setValue(placeType.prices.monthly.max);
        console.log(placeType.images);
        this.imageResponse = placeType.images;
    }
    ;
    deleteTypeAlert(property) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const alert = yield this.alertCtrl.create({
                header: 'Delete Space Type',
                message: 'Do you want to delete ' + property.type + ' from properties ?',
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
            typeId: _id,
            orgId: this.orgId
        };
        this._api.postRequest(this.url + _config_config__WEBPACK_IMPORTED_MODULE_2__["UNITURL"].deleteSpaceType, params).subscribe((result) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
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
        this.addPlaceTypeForm.reset();
        this.btnText = 'Add Space type';
    }
    onSelectChange(ev) {
        this.subtypes = [];
    }
    deleteImage(i) {
        this.imageResponse.splice(i, 1);
    }
    getImages() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const options = {
                quality: 100,
                allowEditing: false,
                resultType: _capacitor_core__WEBPACK_IMPORTED_MODULE_9__["CameraResultType"].Base64,
                height: 250,
                width: 250
            };
            const imageData = yield Camera.getPhoto(options);
            if (imageData.base64String) {
                const base64 = 'data:image/jpeg;base64,' + imageData.base64String;
                this.loader.present();
                let params = {
                    auth: {
                        type: 'token',
                        token: this.token,
                        orgId: this.orgId
                    },
                    base64: base64,
                    public: true
                };
                let url = this.url + _config_config__WEBPACK_IMPORTED_MODULE_2__["URL"].imageUpload;
                this._api.uploadBase64image(url, params).then((response) => {
                    this.loader.dismiss();
                    if (response.success) {
                        if (response.data && response.data.url) {
                            console.log(response.data.url);
                            this.zone.run(() => {
                                this.imageResponse.push(response.data.url);
                            });
                        }
                    }
                });
            }
        });
    }
};
SpaceTypePage.ctorParameters = () => [
    { type: src_app_services_api_service_service__WEBPACK_IMPORTED_MODULE_7__["ApiService"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] },
    { type: src_app_services_loader_service__WEBPACK_IMPORTED_MODULE_6__["LoaderService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AlertController"] },
    { type: src_app_services_toast_service__WEBPACK_IMPORTED_MODULE_8__["ToastService"] },
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_3__["Storage"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"] }
];
SpaceTypePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-space-type',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./space-type.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/admin/space-type/space-type.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./space-type.page.scss */ "./src/app/pages/admin/space-type/space-type.page.scss")).default]
    })
], SpaceTypePage);



/***/ })

}]);
//# sourceMappingURL=pages-admin-space-type-space-type-module-es2015.js.map