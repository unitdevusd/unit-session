(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-owner-request-for-extension-request-for-extension-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/owner/request-for-extension/request-for-extension.page.html":
/*!*************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/owner/request-for-extension/request-for-extension.page.html ***!
  \*************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header class=\"ion-no-border\">\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\" (click)=\"back()\">\r\n      <ion-button>\r\n        <ion-icon name=\"arrow-back-outline\"></ion-icon>\r\n      </ion-button>\r\n    </ion-buttons>\r\n  </ion-toolbar>\r\n</ion-header>\r\n<ion-content>\r\n  <ion-card>\r\n    <ion-grid>\r\n      <ion-row>\r\n        <ion-col size=\"4\">\r\n          <img style=\"width: 100%; height: 100px; border-radius: 10px;\" src=\"{{data?.meta.place.images[0]}}\" />\r\n        </ion-col>\r\n        <ion-col size=\"8\" style=\"margin-top: 5%;\">\r\n          <span>{{data?.meta?.place?.name}} </span>\r\n          <br>\r\n          <br>\r\n          <span> extend from: {{data?.meta?.extensiondetails?.startDate | date }} </span>\r\n          <br>\r\n          <br>\r\n          <span> extended upto: {{data?.meta?.extensiondetails?.endDate | date}} </span>\r\n        </ion-col>\r\n      </ion-row>\r\n    </ion-grid>\r\n  </ion-card>\r\n  <div class=\"ion-padding\">\r\n    <div class=\"center\">\r\n      <ion-label style=\"font-size: large; text-align: center;\">\r\n       Give permission for extend booking \r\n      </ion-label>\r\n      <div style=\"padding-top: 20px;\">\r\n        <ion-grid>\r\n          <ion-row>\r\n            <ion-button style=\"width:100%\" color=\"unit-btn\" (click)=\"extend()\"> Approve\r\n            </ion-button>\r\n            <ion-button color=\"unit-btn\" style=\"width:100%\" (click)=\"notExtend()\"> Cancel\r\n            </ion-button>\r\n          </ion-row>\r\n        </ion-grid>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</ion-content>\r\n");

/***/ }),

/***/ "./src/app/pages/owner/request-for-extension/request-for-extension-routing.module.ts":
/*!*******************************************************************************************!*\
  !*** ./src/app/pages/owner/request-for-extension/request-for-extension-routing.module.ts ***!
  \*******************************************************************************************/
/*! exports provided: RequestForExtensionPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RequestForExtensionPageRoutingModule", function() { return RequestForExtensionPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _request_for_extension_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./request-for-extension.page */ "./src/app/pages/owner/request-for-extension/request-for-extension.page.ts");




const routes = [
    {
        path: '',
        component: _request_for_extension_page__WEBPACK_IMPORTED_MODULE_3__["RequestForExtensionPage"]
    }
];
let RequestForExtensionPageRoutingModule = class RequestForExtensionPageRoutingModule {
};
RequestForExtensionPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], RequestForExtensionPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/owner/request-for-extension/request-for-extension.module.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/pages/owner/request-for-extension/request-for-extension.module.ts ***!
  \***********************************************************************************/
/*! exports provided: RequestForExtensionPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RequestForExtensionPageModule", function() { return RequestForExtensionPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _request_for_extension_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./request-for-extension-routing.module */ "./src/app/pages/owner/request-for-extension/request-for-extension-routing.module.ts");
/* harmony import */ var _request_for_extension_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./request-for-extension.page */ "./src/app/pages/owner/request-for-extension/request-for-extension.page.ts");







let RequestForExtensionPageModule = class RequestForExtensionPageModule {
};
RequestForExtensionPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _request_for_extension_routing_module__WEBPACK_IMPORTED_MODULE_5__["RequestForExtensionPageRoutingModule"]
        ],
        declarations: [_request_for_extension_page__WEBPACK_IMPORTED_MODULE_6__["RequestForExtensionPage"]]
    })
], RequestForExtensionPageModule);



/***/ }),

/***/ "./src/app/pages/owner/request-for-extension/request-for-extension.page.scss":
/*!***********************************************************************************!*\
  !*** ./src/app/pages/owner/request-for-extension/request-for-extension.page.scss ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL293bmVyL3JlcXVlc3QtZm9yLWV4dGVuc2lvbi9yZXF1ZXN0LWZvci1leHRlbnNpb24ucGFnZS5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/pages/owner/request-for-extension/request-for-extension.page.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/pages/owner/request-for-extension/request-for-extension.page.ts ***!
  \*********************************************************************************/
/*! exports provided: RequestForExtensionPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RequestForExtensionPage", function() { return RequestForExtensionPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var src_app_services_api_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/api-service.service */ "./src/app/services/api-service.service.ts");
/* harmony import */ var src_app_services_toast_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/toast.service */ "./src/app/services/toast.service.ts");
/* harmony import */ var _config_config__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../config/config */ "./src/app/pages/config/config.ts");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/__ivy_ngcc__/fesm2015/ionic-storage.js");







let RequestForExtensionPage = class RequestForExtensionPage {
    constructor(router, _api, route, storage, toast) {
        this.router = router;
        this._api = _api;
        this.route = route;
        this.storage = storage;
        this.toast = toast;
        this.url = _config_config__WEBPACK_IMPORTED_MODULE_5__["config"].url;
    }
    ngOnInit() {
        this.getUserData();
        this.route.queryParams.subscribe(params => {
            if (params && params.notification) {
                this.data = JSON.parse(params.notification);
                console.log(this.data);
            }
        });
    }
    back() {
        this.router.navigate(['tabs/tab3']);
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
    notExtend() {
        // reject approval
        const params = {
            token: this.token,
            extendId: this.data.meta.extensiondetails._id,
            approval: false,
            orgId: this.orgId
        };
        this.approval(params);
    }
    extend() {
        //extend Approval
        const params = {
            token: this.token,
            extendId: this.data.meta.extensiondetails._id,
            orgId: this.orgId,
            approval: true
        };
        this.approval(params);
    }
    approval(params) {
        this._api.postRequest(this.url + _config_config__WEBPACK_IMPORTED_MODULE_5__["UNITURL"].approveExtension, params).subscribe((result) => {
            if (result.success) {
                this.toast.presentToast(result.message);
                this.back();
            }
        }, error => {
            console.log(error);
        });
    }
};
RequestForExtensionPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: src_app_services_api_service_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_6__["Storage"] },
    { type: src_app_services_toast_service__WEBPACK_IMPORTED_MODULE_4__["ToastService"] }
];
RequestForExtensionPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-request-for-extension',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./request-for-extension.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/owner/request-for-extension/request-for-extension.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./request-for-extension.page.scss */ "./src/app/pages/owner/request-for-extension/request-for-extension.page.scss")).default]
    })
], RequestForExtensionPage);



/***/ })

}]);
//# sourceMappingURL=pages-owner-request-for-extension-request-for-extension-module-es2015.js.map