(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-owner-Add-space-space-description-space-description-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/owner/Add-space/space-description/space-description.page.html":
/*!***************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/owner/Add-space/space-description/space-description.page.html ***!
  \***************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header  class=\"ion-no-border\">\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"end\" (click)=\"saveListing()\">\r\n      <ion-button color=\"unit-btn\" class=\"save\" style=\"text-transform:capitalize\">\r\n        Save and Exit\r\n      </ion-button>\r\n    </ion-buttons>\r\n  </ion-toolbar>\r\n</ion-header>\r\n<ion-content>\r\n  <form [formGroup]=\"additionaldetails\">\r\n    <ion-item lines=\"none\">\r\n      <ion-label position=\"stacked\">Things to Be Aware of</ion-label>\r\n      <ion-textarea type=\"text\" placeholder=\"Storage located next to doghouse\" rows=\"4\" cols=\"20\" placeholder=\"Text here\" formControlName=\"description\">\r\n      </ion-textarea>\r\n    </ion-item>\r\n    <ion-item lines=\"none\">\r\n      <ion-label position=\"stacked\">Safety Precautions to Follow</ion-label>\r\n      <ion-textarea type=\"text\" rows=\"4\" cols=\"20\" placeholder=\"Text here\" formControlName=\"healthdesc\">\r\n      </ion-textarea>\r\n    </ion-item>\r\n    <!-- <ion-item lines=\"none\">\r\n      <ion-label position=\"stacked\">Cancellation policy</ion-label>\r\n      <ion-textarea type=\"text\" rows=\"4\" cols=\"20\" placeholder=\"Text here\" formControlName=\"policydesc\">\r\n      </ion-textarea>\r\n    </ion-item> -->\r\n  </form>\r\n</ion-content>\r\n<ion-footer>\r\n  <ion-toolbar>\r\n    <ion-grid>\r\n      <ion-row>\r\n        <ion-col>\r\n          <ion-button color=\"unit-btn\" fill=\"clear\" (click)=\"backPage()\">\r\n            <ion-icon class=\"back_btn\" slot=\"start\" name=\"chevron-back-outline\" style=\"text-transform:capitalize\"></ion-icon>\r\n            Back\r\n          </ion-button>\r\n        </ion-col>\r\n        <ion-col>\r\n        </ion-col>\r\n        <ion-col style=\"margin-left: 35%;\">\r\n          <ion-button color=\"unit-btn\" fill=\"clear\"\r\n            [disabled]=\"!additionaldetails.valid\"\r\n            (click)=\"next(3)\" style=\"text-transform:capitalize\">\r\n            Next\r\n            <ion-icon class=\"next_btn\" slot=\"end\" name=\"chevron-forward-outline\"></ion-icon>\r\n          </ion-button>\r\n        </ion-col>\r\n      </ion-row>\r\n    </ion-grid>\r\n  </ion-toolbar>\r\n</ion-footer>");

/***/ }),

/***/ "./src/app/pages/owner/Add-space/space-description/space-description-routing.module.ts":
/*!*********************************************************************************************!*\
  !*** ./src/app/pages/owner/Add-space/space-description/space-description-routing.module.ts ***!
  \*********************************************************************************************/
/*! exports provided: SpaceDescriptionPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SpaceDescriptionPageRoutingModule", function() { return SpaceDescriptionPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _space_description_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./space-description.page */ "./src/app/pages/owner/Add-space/space-description/space-description.page.ts");




const routes = [
    {
        path: '',
        component: _space_description_page__WEBPACK_IMPORTED_MODULE_3__["SpaceDescriptionPage"]
    }
];
let SpaceDescriptionPageRoutingModule = class SpaceDescriptionPageRoutingModule {
};
SpaceDescriptionPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], SpaceDescriptionPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/owner/Add-space/space-description/space-description.module.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/pages/owner/Add-space/space-description/space-description.module.ts ***!
  \*************************************************************************************/
/*! exports provided: SpaceDescriptionPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SpaceDescriptionPageModule", function() { return SpaceDescriptionPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _space_description_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./space-description-routing.module */ "./src/app/pages/owner/Add-space/space-description/space-description-routing.module.ts");
/* harmony import */ var _space_description_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./space-description.page */ "./src/app/pages/owner/Add-space/space-description/space-description.page.ts");







let SpaceDescriptionPageModule = class SpaceDescriptionPageModule {
};
SpaceDescriptionPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _space_description_routing_module__WEBPACK_IMPORTED_MODULE_5__["SpaceDescriptionPageRoutingModule"]
        ],
        declarations: [_space_description_page__WEBPACK_IMPORTED_MODULE_6__["SpaceDescriptionPage"]]
    })
], SpaceDescriptionPageModule);



/***/ }),

/***/ "./src/app/pages/owner/Add-space/space-description/space-description.page.scss":
/*!*************************************************************************************!*\
  !*** ./src/app/pages/owner/Add-space/space-description/space-description.page.scss ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-item ion-label {\n  font-size: 16px !important;\n  margin-bottom: 10px !important;\n  color: #3c3939;\n  font-family: \"medium\";\n  opacity: 1;\n}\n\nion-item ion-textarea {\n  border: 1px solid #cacaca;\n  border-radius: 18px;\n  --padding-start: 15px;\n  margin-bottom: 12px;\n  font-size: 15px;\n  color: #8c8c8c;\n  font-family: medium;\n}\n\nion-footer {\n  height: 9% !important;\n}\n\nion-footer ion-button {\n  margin-top: -3px !important;\n}\n\nion-footer ion-button .next_btn {\n  margin-left: 0 !important;\n}\n\nion-footer ion-button .back_btn {\n  margin-right: 0 !important;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvb3duZXIvQWRkLXNwYWNlL3NwYWNlLWRlc2NyaXB0aW9uL3NwYWNlLWRlc2NyaXB0aW9uLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUVNLDBCQUEwQjtFQUMxQiw4QkFBOEI7RUFDOUIsY0FBYztFQUNkLHFCQUFxQjtFQUNyQixVQUFVO0FBQWhCOztBQU5BO0VBU00seUJBQXlCO0VBQ3pCLG1CQUFtQjtFQUNuQixxQkFBZ0I7RUFDaEIsbUJBQW1CO0VBQ25CLGVBQWU7RUFDZixjQUFjO0VBQ2QsbUJBQW1CO0FBQ3pCOztBQUVFO0VBQ0UscUJBQXFCO0FBQ3pCOztBQUZFO0VBR0ksMkJBQTJCO0FBR2pDOztBQU5FO0VBS00seUJBQXlCO0FBS2pDOztBQVZFO0VBUU0sMEJBQTBCO0FBTWxDIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvb3duZXIvQWRkLXNwYWNlL3NwYWNlLWRlc2NyaXB0aW9uL3NwYWNlLWRlc2NyaXB0aW9uLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1pdGVtIHtcclxuICAgIGlvbi1sYWJlbCB7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTZweCAhaW1wb3J0YW50O1xyXG4gICAgICBtYXJnaW4tYm90dG9tOiAxMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgIGNvbG9yOiAjM2MzOTM5O1xyXG4gICAgICBmb250LWZhbWlseTogXCJtZWRpdW1cIjtcclxuICAgICAgb3BhY2l0eTogMTtcclxuICAgIH1cclxuICAgIGlvbi10ZXh0YXJlYSB7XHJcbiAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNjYWNhY2E7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDE4cHg7XHJcbiAgICAgIC0tcGFkZGluZy1zdGFydDogMTVweDtcclxuICAgICAgbWFyZ2luLWJvdHRvbTogMTJweDtcclxuICAgICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgICBjb2xvcjogIzhjOGM4YztcclxuICAgICAgZm9udC1mYW1pbHk6IG1lZGl1bTtcclxuICAgIH1cclxuICB9XHJcbiAgaW9uLWZvb3RlciB7XHJcbiAgICBoZWlnaHQ6IDklICFpbXBvcnRhbnQ7XHJcbiAgICBpb24tYnV0dG9uIHtcclxuICAgICAgbWFyZ2luLXRvcDogLTNweCAhaW1wb3J0YW50O1xyXG4gICAgICAubmV4dF9idG4ge1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAwICFpbXBvcnRhbnQ7XHJcbiAgICAgIH1cclxuICAgICAgLmJhY2tfYnRuIHtcclxuICAgICAgICBtYXJnaW4tcmlnaHQ6IDAgIWltcG9ydGFudDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuICAiXX0= */");

/***/ }),

/***/ "./src/app/pages/owner/Add-space/space-description/space-description.page.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/pages/owner/Add-space/space-description/space-description.page.ts ***!
  \***********************************************************************************/
/*! exports provided: SpaceDescriptionPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SpaceDescriptionPage", function() { return SpaceDescriptionPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var src_app_pages_config_config__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/pages/config/config */ "./src/app/pages/config/config.ts");
/* harmony import */ var src_app_services_api_service_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/api-service.service */ "./src/app/services/api-service.service.ts");
/* harmony import */ var src_app_services_global_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/global.service */ "./src/app/services/global.service.ts");
/* harmony import */ var src_app_services_loader_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/services/loader.service */ "./src/app/services/loader.service.ts");
/* harmony import */ var src_app_services_toast_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/services/toast.service */ "./src/app/services/toast.service.ts");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/__ivy_ngcc__/fesm2015/ionic-storage.js");











let SpaceDescriptionPage = class SpaceDescriptionPage {
    constructor(loader, route, alrtCtrl, router, _api, toast, _gs, _fb, storage) {
        this.loader = loader;
        this.route = route;
        this.alrtCtrl = alrtCtrl;
        this.router = router;
        this._api = _api;
        this.toast = toast;
        this._gs = _gs;
        this._fb = _fb;
        this.storage = storage;
        this.url = src_app_pages_config_config__WEBPACK_IMPORTED_MODULE_5__["config"].url;
        this.additionalInfo = [];
        this.route.queryParams.subscribe(params => {
            if (params) {
                if (params.spaceDetails) {
                    this.spaceDetails = JSON.parse(params.spaceDetails);
                    console.log(this.spaceDetails);
                    if (this.spaceDetails._id) {
                        this.spaceId = this.spaceDetails._id;
                    }
                    this.priviousPage = params.priviousPage;
                    this.addSpaceInfo(this.spaceDetails);
                }
            }
        });
        this.initForm();
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
                    }
                });
            }
        });
    }
    initForm() {
        this.additionaldetails = this._fb.group({
            description: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            healthdesc: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            policydesc: ['']
        });
    }
    addSpaceInfo(spaceDetails) {
        console.log(spaceDetails);
        if (spaceDetails._id) {
            this.spaceId = spaceDetails._id;
        }
        if (spaceDetails.additionalInfo && spaceDetails.additionalInfo.length) {
            this.additionaldetails.controls['description'].setValue(spaceDetails.additionalInfo[0].desc);
            this.additionaldetails.controls['healthdesc'].setValue(spaceDetails.additionalInfo[1].desc);
            this.additionaldetails.controls['policydesc'].setValue(spaceDetails.additionalInfo[2].desc);
        }
    }
    backAlert() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const alert = yield this.alrtCtrl.create({
                header: 'Lose your data',
                message: 'You may lose your data. Are you sure that you want to start all over again?',
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
            this.router.navigate(['tabs/tab4']);
        }
        else {
            this.router.navigate(['add-address']);
        }
    }
    saveListing() {
        if (this.additionaldetails.value) {
            this.additionalInfo.push({ 'name': 'Things to be aware of', 'desc': this.additionaldetails.value.description });
            this.additionalInfo.push({ 'name': 'Safety Precautions to follow', 'desc': this.additionaldetails.value.healthdesc });
            this.addSpace(3);
        }
        else {
            this.addSpace(2);
        }
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
                spaceType: this.spaceDetails.spaceType,
                storeItems: this.spaceDetails.storeItems,
                accessStatus: this.spaceDetails.accessStatus,
                timeAccessStatus: this.spaceDetails.timeAccessStatus,
                index: index,
                pricing: this.spaceDetails.pricing,
                discountFirstMonth: this.spaceDetails.discountFirstMonth,
                discountPercentage: this.spaceDetails.discountPercentage,
                amenities: this.spaceDetails.amenities,
                images: this.spaceDetails.images,
                videos: this.spaceDetails.videos,
                additionalInfo: this.additionalInfo,
                spaceTypeName: this.spaceDetails.spaceTypeName
            };
            this.addPlaceApi(params);
        }
    }
    addPlaceApi(place) {
        console.log(this.spaceId);
        if (this.spaceId) {
            place['placeId'] = this.spaceId;
            this.updateSpace(place);
        }
        else {
            this.addNewPlace(place);
        }
    }
    backPage() {
        let navigationExtras = {
            queryParams: {
                spaceDetails: JSON.stringify(this.spaceDetails),
                priviousPage: 'tabs/my-spaces'
            }
        };
        this.router.navigate(['space-properties'], navigationExtras);
    }
    next(index) {
        console.log(index);
        console.log(this.additionaldetails.value);
        if (this.additionaldetails.value) {
            this.additionalInfo.push({ 'name': 'Things to be aware of', 'desc': this.additionaldetails.value.description });
            this.additionalInfo.push({ 'name': 'Safety Precautions to follow', 'desc': this.additionaldetails.value.healthdesc });
        }
        if (this.token) {
            const params = {
                token: this.token,
                orgId: this.orgId,
                name: this.spaceDetails.name,
                address: this.spaceDetails.address,
                loc: this.spaceDetails.loc,
                description: this.spaceDetails.description,
                size: this.spaceDetails.size,
                spaceType: this.spaceDetails.spaceType,
                storeItems: this.spaceDetails.storeItems,
                accessStatus: this.spaceDetails.accessStatus,
                timeAccessStatus: this.spaceDetails.timeAccessStatus,
                index: index,
                pricing: this.spaceDetails.pricing,
                discountFirstMonth: this.spaceDetails.discountFirstMonth,
                discountPercentage: this.spaceDetails.discountPercentage,
                amenities: this.spaceDetails.amenities,
                images: this.spaceDetails.images,
                videos: this.spaceDetails.videos,
                additionalInfo: this.additionalInfo,
                spaceTypeName: this.spaceDetails.spaceTypeName
            };
            console.log('In space-Images', this.spaceId);
            if (this.spaceId) {
                params['_id'] = this.spaceId;
            }
            let navigationExtras = {
                queryParams: {
                    spaceDetails: JSON.stringify(params),
                    priviousPage: 'tabs/my-spaces'
                }
            };
            this.router.navigate(['space-features'], navigationExtras);
        }
    }
    updateSpace(place) {
        this.loader.present('Updating Space. Please wait..');
        this._api.postRequest(this.url + src_app_pages_config_config__WEBPACK_IMPORTED_MODULE_5__["UNITURL"].updateSpace, place).subscribe((result) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (result.success) {
                this.toast.presentToast(result.message);
            }
            this._gs.sendRefershScreen("refresh");
            this.loader.dismiss();
            this.router.navigate(['tabs/my-spaces']);
        })), (error) => {
            this.loader.dismiss();
            this.toast.presentToast(error.description);
        };
    }
    addNewPlace(place) {
        this.loader.present('Adding Space. Please wait..');
        this._api.postRequest(this.url + src_app_pages_config_config__WEBPACK_IMPORTED_MODULE_5__["UNITURL"].addSpace, place).subscribe((result) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (result.success) {
                this.toast.presentToast(result.message);
            }
            this._gs.sendRefershScreen("refresh");
            this.loader.dismiss();
            this.router.navigate(['tabs/my-spaces']);
        })), (error) => {
            this.loader.dismiss();
            this.toast.presentToast(error.description);
        };
    }
};
SpaceDescriptionPage.ctorParameters = () => [
    { type: src_app_services_loader_service__WEBPACK_IMPORTED_MODULE_8__["LoaderService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: src_app_services_api_service_service__WEBPACK_IMPORTED_MODULE_6__["ApiService"] },
    { type: src_app_services_toast_service__WEBPACK_IMPORTED_MODULE_9__["ToastService"] },
    { type: src_app_services_global_service__WEBPACK_IMPORTED_MODULE_7__["GlobalService"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_10__["Storage"] }
];
SpaceDescriptionPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-space-description',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./space-description.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/owner/Add-space/space-description/space-description.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./space-description.page.scss */ "./src/app/pages/owner/Add-space/space-description/space-description.page.scss")).default]
    })
], SpaceDescriptionPage);



/***/ })

}]);
//# sourceMappingURL=pages-owner-Add-space-space-description-space-description-module-es2015.js.map