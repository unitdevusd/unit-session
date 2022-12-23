(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-auth-checkr-checkr-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/auth/checkr/checkr.page.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/auth/checkr/checkr.page.html ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar>\r\n    <ion-title>Personal Info</ion-title>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button color=\"unit-btn\" text=\"\" icon=\"chevron-back-outline\"></ion-back-button>\r\n    </ion-buttons>\r\n  </ion-toolbar>\r\n</ion-header>\r\n<ion-content>\r\n  <div class=\"ion-padding\">\r\n  <form [formGroup]=\"checkrForm\">\r\n    <ion-item>\r\n      <ion-label position=\"stacked\"><ion-icon item-left name=\"calendar-outline\"></ion-icon> Date of Birth</ion-label>\r\n      <ion-datetime value={{date}} placeholder=\"Select Date\" formControlName=\"dob\">\r\n      </ion-datetime>\r\n    </ion-item>\r\n    <ion-item>\r\n      <ion-label position=\"stacked\"><ion-icon item-letf name=\"shield-outline\"></ion-icon> SSN</ion-label>\r\n      <ion-input placeholder=\"AAA-GG-SSSS\" type=\"text\" formControlName=\"ssn\"></ion-input>\r\n    </ion-item>\r\n    <ion-item>\r\n      <ion-label position=\"stacked\">   <ion-icon item-left name=\"pin-outline\"></ion-icon> Zip Code</ion-label>\r\n      <ion-input placeholder=\"zip\" type=\"text\" formControlName=\"zipcode\"></ion-input>\r\n    </ion-item>\r\n    <ion-item>\r\n      <ion-label position=\"stacked\">   <ion-icon item-left name=\"person-outline\"></ion-icon>Identification Info / Driver’s License Info</ion-label>\r\n      <ion-input placeholder=\"SSSSFFFYYDDD\" type=\"text\" formControlName=\"driver_license_number\"></ion-input>\r\n    </ion-item>\r\n    <ion-item>\r\n      <ion-label position=\"stacked\"> <ion-icon item-left name=\"pin-outline\"></ion-icon> Driver’s License State </ion-label>\r\n      <ion-input placeholder=\"California\" type=\"text\" formControlName=\"driver_license_state\"></ion-input>\r\n    </ion-item>\r\n  </form>\r\n  </div>\r\n</ion-content>\r\n<ion-footer class=\"ion-no-border\" *ngIf=\"!infoId\">\r\n  <ion-toolbar>\r\n    <div class=\"ion-padding\">\r\n      <ion-button  color=\"unit-btn\" expand=\"block\" [disabled]=\"!checkrForm.valid\" (click)=\"checkr()\">\r\n        <span *ngIf=\"!infoId\">Submit</span>\r\n      </ion-button>\r\n    </div>\r\n  </ion-toolbar>\r\n</ion-footer>\r\n");

/***/ }),

/***/ "./src/app/pages/auth/checkr/checkr-routing.module.ts":
/*!************************************************************!*\
  !*** ./src/app/pages/auth/checkr/checkr-routing.module.ts ***!
  \************************************************************/
/*! exports provided: CheckrPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckrPageRoutingModule", function() { return CheckrPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _checkr_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./checkr.page */ "./src/app/pages/auth/checkr/checkr.page.ts");




const routes = [
    {
        path: '',
        component: _checkr_page__WEBPACK_IMPORTED_MODULE_3__["CheckrPage"]
    }
];
let CheckrPageRoutingModule = class CheckrPageRoutingModule {
};
CheckrPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], CheckrPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/auth/checkr/checkr.module.ts":
/*!****************************************************!*\
  !*** ./src/app/pages/auth/checkr/checkr.module.ts ***!
  \****************************************************/
/*! exports provided: CheckrPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckrPageModule", function() { return CheckrPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _checkr_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./checkr-routing.module */ "./src/app/pages/auth/checkr/checkr-routing.module.ts");
/* harmony import */ var _checkr_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./checkr.page */ "./src/app/pages/auth/checkr/checkr.page.ts");







let CheckrPageModule = class CheckrPageModule {
};
CheckrPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _checkr_routing_module__WEBPACK_IMPORTED_MODULE_5__["CheckrPageRoutingModule"]
        ],
        declarations: [_checkr_page__WEBPACK_IMPORTED_MODULE_6__["CheckrPage"]]
    })
], CheckrPageModule);



/***/ }),

/***/ "./src/app/pages/auth/checkr/checkr.page.scss":
/*!****************************************************!*\
  !*** ./src/app/pages/auth/checkr/checkr.page.scss ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2F1dGgvY2hlY2tyL2NoZWNrci5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/pages/auth/checkr/checkr.page.ts":
/*!**************************************************!*\
  !*** ./src/app/pages/auth/checkr/checkr.page.ts ***!
  \**************************************************/
/*! exports provided: CheckrPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckrPage", function() { return CheckrPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var src_app_services_api_service_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/api-service.service */ "./src/app/services/api-service.service.ts");
/* harmony import */ var src_app_services_loader_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/loader.service */ "./src/app/services/loader.service.ts");
/* harmony import */ var src_app_services_toast_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/toast.service */ "./src/app/services/toast.service.ts");
/* harmony import */ var _config_config__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../config/config */ "./src/app/pages/config/config.ts");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/__ivy_ngcc__/fesm2015/ionic-storage.js");
/* harmony import */ var src_app_services_global_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/services/global.service */ "./src/app/services/global.service.ts");










let CheckrPage = class CheckrPage {
    constructor(formBuilder, router, route, _apiService, _toast, storage, _loader, _gs) {
        this.formBuilder = formBuilder;
        this.router = router;
        this.route = route;
        this._apiService = _apiService;
        this._toast = _toast;
        this.storage = storage;
        this._loader = _loader;
        this._gs = _gs;
        this.url = _config_config__WEBPACK_IMPORTED_MODULE_7__["config"].url;
        this.minDate = new Date().toISOString();
        this.route.queryParams.subscribe(params => {
            if (params) {
                console.log(params);
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
                        this.getuserAdditionalData();
                    }
                });
            }
        });
    }
    getuserAdditionalData() {
        this._loader.present();
        if (this.token && this.orgId) {
            const params = {
                token: this.token,
                orgId: this.orgId
            };
            this._apiService.postRequest(this.url + _config_config__WEBPACK_IMPORTED_MODULE_7__["UNITURL"].getUserInformation, params).subscribe((result) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                this._loader.dismiss();
                if (result.success) {
                    console.log('result', result);
                    this.setValues(result.data);
                }
            })), (error) => {
                this._loader.dismiss();
                console.log('error', error);
            };
        }
    }
    initForm() {
        this.checkrForm = this.formBuilder.group({
            dob: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            ssn: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            zipcode: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            driver_license_number: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            driver_license_state: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
        });
    }
    setValues(Info) {
        if (Info.userInfo) {
            this.infoId = Info.userInfo._id;
            this.checkrForm.controls['dob'].setValue(Info.userInfo.dob);
            this.checkrForm.controls['ssn'].setValue(Info.userInfo.ssn);
            this.checkrForm.controls['zipcode'].setValue(Info.userInfo.zipcode);
            this.checkrForm.controls['driver_license_number'].setValue(Info.userInfo.driver_license_number);
            this.checkrForm.controls['driver_license_state'].setValue(Info.userInfo.driver_license_state);
            this.checkrForm.controls['dob'].disable();
            this.checkrForm.controls['ssn'].disable();
            this.checkrForm.controls['zipcode'].disable();
            this.checkrForm.controls['driver_license_number'].disable();
            this.checkrForm.controls['driver_license_state'].disable();
        }
    }
    checkr() {
        const param = {
            token: this.token,
            orgId: this.orgId,
            zip: this.checkrForm.value.zipcode,
            driver_license_number: this.checkrForm.value.driver_license_number,
            driver_license_state: this.checkrForm.value.driver_license_state,
            dob: this.checkrForm.value.dob,
            ssn: this.checkrForm.value.ssn
        };
        this._loader.present();
        // if(this.infoId){
        //   this._apiService.postRequest(this.url + UNITURL.updateUserInformation,
        //     param).subscribe(
        //       async (result) => {
        //         this._loader.dismiss();
        //         if(result.success){
        //           this._toast.presentToast(result.message);
        //           console.log('result', result);
        //         }
        //       }), (error) => {
        //         this._loader.dismiss();
        //         console.log('error', error)
        //       }
        // }else{
        this._apiService.postRequest(this.url + _config_config__WEBPACK_IMPORTED_MODULE_7__["UNITURL"].addUserInformation, param).subscribe((result) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this._loader.dismiss();
            if (result.success) {
                console.log('result', result);
                this._gs.sendRefershScreen("refresh");
                this._toast.presentToast(result.message);
            }
        })), (error) => {
            this._loader.dismiss();
            console.log('error', error);
        };
    }
};
CheckrPage.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: src_app_services_api_service_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"] },
    { type: src_app_services_toast_service__WEBPACK_IMPORTED_MODULE_6__["ToastService"] },
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_8__["Storage"] },
    { type: src_app_services_loader_service__WEBPACK_IMPORTED_MODULE_5__["LoaderService"] },
    { type: src_app_services_global_service__WEBPACK_IMPORTED_MODULE_9__["GlobalService"] }
];
CheckrPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-checkr',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./checkr.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/auth/checkr/checkr.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./checkr.page.scss */ "./src/app/pages/auth/checkr/checkr.page.scss")).default]
    })
], CheckrPage);



/***/ })

}]);
//# sourceMappingURL=pages-auth-checkr-checkr-module-es2015.js.map