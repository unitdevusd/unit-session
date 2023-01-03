(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-admin-add-feature-add-feature-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/admin/add-feature/add-feature.page.html":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/admin/add-feature/add-feature.page.html ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar *ngIf=\"!addAmenity\">\r\n    <ion-title>Features</ion-title>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button color=\"unit-btn\" text=\"\" icon=\"chevron-back-outline\"></ion-back-button>\r\n    </ion-buttons>\r\n  </ion-toolbar>\r\n  <ion-toolbar *ngIf=\"addAmenity\">\r\n    <ion-title>{{btnText}}</ion-title>\r\n    <ion-buttons slot=\"end\" class=\"cancel\" (click)=\"cancel()\">\r\n      <span>\r\n        <ion-icon name=\"close\"></ion-icon>\r\n      </span>\r\n    </ion-buttons>\r\n  </ion-toolbar>\r\n</ion-header>\r\n<ion-content *ngIf=\"!addAmenity\">\r\n\r\n  <ion-list style=\"width: 100%;\" *ngIf=\"amenities.length\">\r\n    <ion-item-sliding *ngFor=\"let amenity of amenities\">\r\n\r\n      <ion-item>\r\n        <ion-label>\r\n          <ion-grid>\r\n            <ion-row>\r\n              <ion-col class=\"ion-align-self-start\" size=\"9\">\r\n                <h2 style=\"font-weight: bold;\">{{amenity?.name}}</h2>\r\n                <h6>{{amenity?.description}}</h6>\r\n              </ion-col>\r\n              <ion-col class=\"ion-align-self-end\" size=\"3\">\r\n                <!-- <h3 style=\"text-align: end;\" *ngIf=\"amenity.price\">Price: ${{amenity?.price}} </h3> -->\r\n              </ion-col>\r\n            </ion-row>\r\n          </ion-grid>\r\n        </ion-label>\r\n      </ion-item>\r\n\r\n      <!-- ITEM SLIDER -->\r\n      <ion-item-options>\r\n        <ion-item-option (click)=\"editAmenity(amenity)\" color=\"primary\">\r\n          <ion-icon slot=\"top\" name=\"pencil\"></ion-icon>\r\n          <ion-label>Edit</ion-label>\r\n        </ion-item-option>\r\n\r\n        <ion-item-option (click)=\"deleteAmenityAlert(amenity)\" color=\"danger\">\r\n          <ion-icon slot=\"top\" name=\"trash\"></ion-icon>\r\n          <ion-label> Delete </ion-label>\r\n        </ion-item-option>\r\n      </ion-item-options>\r\n    </ion-item-sliding>\r\n  </ion-list>\r\n\r\n  <ion-fab horizontal=\"end\" vertical=\"bottom\" slot=\"fixed\">\r\n    <ion-fab-button class=\"round-shadow\" (click)=\"add()\">\r\n      <ion-icon name=\"add\"></ion-icon>\r\n    </ion-fab-button>\r\n  </ion-fab>\r\n</ion-content>\r\n\r\n<ion-content *ngIf=\"addAmenity\">\r\n  <form [formGroup]=\"addAmenityForm\">\r\n    <ion-item lines=\"none\" class=\"item-space\">\r\n      <ion-label position=\"stacked\">\r\n        Name\r\n      </ion-label>\r\n      <ion-input placeholder=\"Feature name\" type=\"Text\" formControlName=\"name\"></ion-input>\r\n    </ion-item>\r\n    <ion-item lines=\"none\" class=\"item-space\">\r\n      <ion-label position=\"stacked\">\r\n        Description\r\n      </ion-label>\r\n      <ion-input placeholder=\"Feature description\" type=\"Text\" formControlName=\"description\"></ion-input>\r\n    </ion-item>\r\n    <ion-item>\r\n      <ion-label position=\"stacked\">Add Images</ion-label>\r\n      <ion-grid>\r\n        <ion-row>\r\n          <ion-col text-center>\r\n            <ion-button (click)=\"getImages()\">Choose Images</ion-button>\r\n          </ion-col>\r\n        </ion-row>\r\n        <ion-row>\r\n          <ion-col>\r\n            <div class=\"images\">\r\n              <div class=\"one-image\" *ngFor=\"let img of imageResponse; let i = index\">\r\n                <img src=\"{{img}}\" alt=\"\" srcset=\"\">\r\n                <ion-button class=\"close-icon\" color=\"danger\" (click)=\"deleteImage(i)\">\r\n                  <ion-icon name=\"trash-outline\"></ion-icon>\r\n                </ion-button>\r\n              </div>\r\n            </div>\r\n          </ion-col>\r\n        </ion-row>\r\n      </ion-grid>\r\n    </ion-item>\r\n  </form>\r\n</ion-content>\r\n<ion-footer *ngIf=\"addAmenity\" class=\"ion-no-border\">\r\n  <ion-toolbar>\r\n    <div class=\"ion-padding\">\r\n      <ion-button color=\"unit-btn\" expand=\"block\" class=\"shadow\" [disabled]=\"!addAmenityForm.valid  && !imageResponse.length \" (click)=\"submit()\">\r\n        {{btnText}}\r\n      </ion-button>\r\n    </div>\r\n  </ion-toolbar>\r\n</ion-footer>\r\n");

/***/ }),

/***/ "./src/app/pages/admin/add-feature/add-feature-routing.module.ts":
/*!***********************************************************************!*\
  !*** ./src/app/pages/admin/add-feature/add-feature-routing.module.ts ***!
  \***********************************************************************/
/*! exports provided: AddFeaturePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddFeaturePageRoutingModule", function() { return AddFeaturePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _add_feature_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./add-feature.page */ "./src/app/pages/admin/add-feature/add-feature.page.ts");




const routes = [
    {
        path: '',
        component: _add_feature_page__WEBPACK_IMPORTED_MODULE_3__["AddFeaturePage"]
    }
];
let AddFeaturePageRoutingModule = class AddFeaturePageRoutingModule {
};
AddFeaturePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], AddFeaturePageRoutingModule);



/***/ }),

/***/ "./src/app/pages/admin/add-feature/add-feature.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/pages/admin/add-feature/add-feature.module.ts ***!
  \***************************************************************/
/*! exports provided: AddFeaturePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddFeaturePageModule", function() { return AddFeaturePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _add_feature_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./add-feature-routing.module */ "./src/app/pages/admin/add-feature/add-feature-routing.module.ts");
/* harmony import */ var _add_feature_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./add-feature.page */ "./src/app/pages/admin/add-feature/add-feature.page.ts");







let AddFeaturePageModule = class AddFeaturePageModule {
};
AddFeaturePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _add_feature_routing_module__WEBPACK_IMPORTED_MODULE_5__["AddFeaturePageRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"]
        ],
        providers: [],
        declarations: [_add_feature_page__WEBPACK_IMPORTED_MODULE_6__["AddFeaturePage"]]
    })
], AddFeaturePageModule);



/***/ }),

/***/ "./src/app/pages/admin/add-feature/add-feature.page.scss":
/*!***************************************************************!*\
  !*** ./src/app/pages/admin/add-feature/add-feature.page.scss ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".label-stacked.sc-ion-label-ios-h {\n  margin-bottom: 4px;\n  font-size: 14px;\n  font-weight: bold;\n  color: darkgray;\n}\n\nion-item.sc-ion-textarea-ios-h:not(.item-label),\nion-item:not(.item-label) .sc-ion-textarea-ios-h {\n  border: solid 1px #d7d8da;\n  height: 100px;\n  border-radius: 10px;\n  padding: 5px;\n}\n\n.cancel {\n  margin-right: 5px;\n  font-size: x-large;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvYWRtaW4vYWRkLWZlYXR1cmUvYWRkLWZlYXR1cmUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksa0JBQWtCO0VBQ2xCLGVBQWU7RUFDZixpQkFBaUI7RUFDakIsZUFBZTtBQUNuQjs7QUFFRTs7RUFFRSx5QkFBeUI7RUFDekIsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixZQUFZO0FBQ2hCOztBQUlFO0VBQ0UsaUJBQWlCO0VBQ2pCLGtCQUFrQjtBQUR0QiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2FkbWluL2FkZC1mZWF0dXJlL2FkZC1mZWF0dXJlLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5sYWJlbC1zdGFja2VkLnNjLWlvbi1sYWJlbC1pb3MtaCB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA0cHg7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGNvbG9yOiBkYXJrZ3JheTtcclxuICB9XHJcbiAgXHJcbiAgaW9uLWl0ZW0uc2MtaW9uLXRleHRhcmVhLWlvcy1oOm5vdCguaXRlbS1sYWJlbCksXHJcbiAgaW9uLWl0ZW06bm90KC5pdGVtLWxhYmVsKSAuc2MtaW9uLXRleHRhcmVhLWlvcy1oIHtcclxuICAgIGJvcmRlcjogc29saWQgMXB4ICNkN2Q4ZGE7XHJcbiAgICBoZWlnaHQ6IDEwMHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgIHBhZGRpbmc6IDVweDtcclxuICB9XHJcbiAgXHJcblxyXG4gICAgXHJcbiAgLmNhbmNlbHtcclxuICAgIG1hcmdpbi1yaWdodDogNXB4O1xyXG4gICAgZm9udC1zaXplOiB4LWxhcmdlO1xyXG4gIH0iXX0= */");

/***/ }),

/***/ "./src/app/pages/admin/add-feature/add-feature.page.ts":
/*!*************************************************************!*\
  !*** ./src/app/pages/admin/add-feature/add-feature.page.ts ***!
  \*************************************************************/
/*! exports provided: AddFeaturePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddFeaturePage", function() { return AddFeaturePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var src_app_services_toast_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/toast.service */ "./src/app/services/toast.service.ts");
/* harmony import */ var src_app_services_loader_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/loader.service */ "./src/app/services/loader.service.ts");
/* harmony import */ var src_app_services_api_service_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/api-service.service */ "./src/app/services/api-service.service.ts");
/* harmony import */ var _config_config__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../config/config */ "./src/app/pages/config/config.ts");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/__ivy_ngcc__/fesm2015/ionic-storage.js");
/* harmony import */ var _capacitor_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @capacitor/core */ "./node_modules/@capacitor/core/dist/esm/index.js");










const { Camera } = _capacitor_core__WEBPACK_IMPORTED_MODULE_9__["Plugins"];
let AddFeaturePage = class AddFeaturePage {
    constructor(_apiService, _fb, loader, alertCtrl, _toast, storage, zone, actionSheetController) {
        this._apiService = _apiService;
        this._fb = _fb;
        this.loader = loader;
        this.alertCtrl = alertCtrl;
        this._toast = _toast;
        this.storage = storage;
        this.zone = zone;
        this.actionSheetController = actionSheetController;
        this.url = _config_config__WEBPACK_IMPORTED_MODULE_7__["config"].url;
        this.amenities = [];
        this.addAmenity = false;
        this.amenityId = '';
        this.btnText = 'Add Feature';
        this.imageResponse = [];
        this.addAmenityForm = this._fb.group({
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
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
                        this.getAmenities();
                    }
                });
            }
        });
    }
    getAmenities() {
        if (this.token) {
            const params = {
                token: this.token,
                orgId: this.orgId
            };
            this._apiService.postRequest(this.url + _config_config__WEBPACK_IMPORTED_MODULE_7__["UNITURL"].amenities, params).subscribe((result) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                if (result.success) {
                    console.log(result.data.list);
                    this.amenities = result.data.list;
                }
            })), (error) => {
                console.log(error.description);
            };
        }
    }
    add() {
        console.log('add');
        this.addAmenity = true;
        this.amenityId = '';
        this.btnText = 'Add Feature';
    }
    submit() {
        console.log(this.amenityId);
        let formValue = this.addAmenityForm.value;
        if (this.amenityId) {
            this.loader.present();
            const params = {
                amenityId: this.amenityId,
                token: this.token,
                name: formValue.name,
                description: formValue.description,
                images: this.imageResponse,
                orgId: this.orgId
            };
            this._apiService.postRequest(this.url + _config_config__WEBPACK_IMPORTED_MODULE_7__["UNITURL"].updateAmenity, params).subscribe((result) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                if (result.success) {
                    this._toast.presentToast(result.message);
                    this.addAmenityForm.reset();
                    this.addAmenity = false;
                    this.getAmenities();
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
                name: formValue.name,
                description: formValue.description,
                images: this.imageResponse,
                orgId: this.orgId
            };
            this._apiService.postRequest(this.url + _config_config__WEBPACK_IMPORTED_MODULE_7__["UNITURL"].addAmenity, params).subscribe((result) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                if (result.success) {
                    this._toast.presentToast(result.message);
                    this.addAmenityForm.reset();
                    this.addAmenity = false;
                    this.getAmenities();
                }
                this.loader.dismiss();
            })), (error) => {
                this.loader.dismiss();
                console.log(error.description);
                this._toast.presentToast(error.description);
            };
        }
    }
    editAmenity(amenity) {
        console.log(amenity.images);
        this.addAmenity = true;
        this.btnText = 'Update Feature';
        this.amenityId = amenity._id;
        this.addAmenityForm.controls['name'].setValue(amenity.name);
        this.addAmenityForm.controls['description'].setValue(amenity.description);
        this.imageResponse = amenity.images ? amenity.images : [];
        console.log(this.imageResponse);
    }
    deleteAmenityAlert(amenity) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const alert = yield this.alertCtrl.create({
                header: 'Delete Feature',
                message: 'Do you want to delete ' + amenity.name + ' from Features ?',
                buttons: [
                    {
                        text: 'Cancel',
                        role: 'cancel',
                        cssClass: 'secondary',
                        handler: (blah) => { }
                    }, {
                        text: 'Delete',
                        handler: () => {
                            this.deleteAmenity(amenity._id);
                        }
                    }
                ]
            });
            yield alert.present();
        });
    }
    deleteAmenity(amenityId) {
        const params = {
            token: this.token,
            amenityId: amenityId,
            orgId: this.orgId
        };
        this._apiService.postRequest(this.url + _config_config__WEBPACK_IMPORTED_MODULE_7__["UNITURL"].deleteAmenity, params).subscribe((result) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (result.success) {
                this._toast.presentToast(result.message);
                this.getAmenities();
            }
        })), (error) => {
            console.log(error.description);
            this._toast.presentToast(error.description);
        };
    }
    cancel() {
        this.addAmenity = !this.addAmenity;
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
                let url = this.url + _config_config__WEBPACK_IMPORTED_MODULE_7__["URL"].imageUpload;
                this._apiService.uploadBase64image(url, params).then((response) => {
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
AddFeaturePage.ctorParameters = () => [
    { type: src_app_services_api_service_service__WEBPACK_IMPORTED_MODULE_6__["ApiService"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: src_app_services_loader_service__WEBPACK_IMPORTED_MODULE_5__["LoaderService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"] },
    { type: src_app_services_toast_service__WEBPACK_IMPORTED_MODULE_4__["ToastService"] },
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_8__["Storage"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ActionSheetController"] }
];
AddFeaturePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-add-feature',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./add-feature.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/admin/add-feature/add-feature.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./add-feature.page.scss */ "./src/app/pages/admin/add-feature/add-feature.page.scss")).default]
    })
], AddFeaturePage);



/***/ })

}]);
//# sourceMappingURL=pages-admin-add-feature-add-feature-module-es2015.js.map