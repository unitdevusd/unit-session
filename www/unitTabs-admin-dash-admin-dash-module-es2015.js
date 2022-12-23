(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["unitTabs-admin-dash-admin-dash-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/unitTabs/admin-dash/admin-dash.page.html":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/unitTabs/admin-dash/admin-dash.page.html ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar>\r\n    <ion-title>Dashboard</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n<ion-content>\r\n  <ion-refresher slot=\"fixed\" (ionRefresh)=\"doRefresh($event)\" (ionPull)=\"ionPull($event)\"\r\n  (ionStart)=\"ionStart($event)\">\r\n    <ion-refresher-content pullingIcon=\"arrow-dropdown\" >\r\n    </ion-refresher-content>\r\n  </ion-refresher>\r\n  <div>\r\n    <ion-card>\r\n      <ion-card-header>\r\n        <ion-card-subtitle>Spaces</ion-card-subtitle>\r\n        <ion-card-title>\r\n          {{count?.spaces}}\r\n          <span>\r\n            <ion-icon name=\"home-outline\"></ion-icon>\r\n          </span>\r\n        </ion-card-title>\r\n      </ion-card-header>\r\n    </ion-card>\r\n    <ion-card>\r\n      <ion-card-header>\r\n        <ion-card-subtitle>Bookings</ion-card-subtitle>\r\n        <ion-card-title>\r\n         {{count?.bookingsCount}}\r\n          <span>\r\n            <ion-icon name=\"bookmark-outline\"></ion-icon>\r\n          </span>\r\n        </ion-card-title>\r\n      </ion-card-header>\r\n    </ion-card>\r\n    <ion-card>\r\n      <ion-card-header>\r\n        <ion-card-subtitle>Tenant</ion-card-subtitle>\r\n        <ion-card-title>\r\n          5\r\n          <span>\r\n            <ion-icon name=\"person-outline\"></ion-icon>\r\n          </span>\r\n        </ion-card-title>\r\n      </ion-card-header>\r\n    </ion-card>\r\n    <ion-card>\r\n      <ion-card-header>\r\n        <ion-card-subtitle>Checked In</ion-card-subtitle>\r\n        <ion-card-title>\r\n          6\r\n          <span>\r\n            <ion-icon name=\"checkmark-outline\"></ion-icon>\r\n          </span>\r\n        </ion-card-title>\r\n      </ion-card-header>\r\n    </ion-card>\r\n    <ion-card>\r\n      <ion-card-header>\r\n        <ion-card-subtitle>Owners</ion-card-subtitle>\r\n        <ion-card-title>\r\n          10\r\n          <span>\r\n            <ion-icon name=\"person-outline\"></ion-icon>\r\n          </span>\r\n        </ion-card-title>\r\n      </ion-card-header>\r\n    </ion-card>\r\n  </div>\r\n  \r\n</ion-content>\r\n\r\n");

/***/ }),

/***/ "./src/app/pages/unitTabs/admin-dash/admin-dash-routing.module.ts":
/*!************************************************************************!*\
  !*** ./src/app/pages/unitTabs/admin-dash/admin-dash-routing.module.ts ***!
  \************************************************************************/
/*! exports provided: AdminDashPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminDashPageRoutingModule", function() { return AdminDashPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _admin_dash_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./admin-dash.page */ "./src/app/pages/unitTabs/admin-dash/admin-dash.page.ts");




const routes = [
    {
        path: '',
        component: _admin_dash_page__WEBPACK_IMPORTED_MODULE_3__["AdminDashPage"]
    }
];
let AdminDashPageRoutingModule = class AdminDashPageRoutingModule {
};
AdminDashPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], AdminDashPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/unitTabs/admin-dash/admin-dash.module.ts":
/*!****************************************************************!*\
  !*** ./src/app/pages/unitTabs/admin-dash/admin-dash.module.ts ***!
  \****************************************************************/
/*! exports provided: AdminDashPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminDashPageModule", function() { return AdminDashPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _admin_dash_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./admin-dash-routing.module */ "./src/app/pages/unitTabs/admin-dash/admin-dash-routing.module.ts");
/* harmony import */ var _admin_dash_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./admin-dash.page */ "./src/app/pages/unitTabs/admin-dash/admin-dash.page.ts");







let AdminDashPageModule = class AdminDashPageModule {
};
AdminDashPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _admin_dash_routing_module__WEBPACK_IMPORTED_MODULE_5__["AdminDashPageRoutingModule"]
        ],
        declarations: [_admin_dash_page__WEBPACK_IMPORTED_MODULE_6__["AdminDashPage"]]
    })
], AdminDashPageModule);



/***/ }),

/***/ "./src/app/pages/unitTabs/admin-dash/admin-dash.page.scss":
/*!****************************************************************!*\
  !*** ./src/app/pages/unitTabs/admin-dash/admin-dash.page.scss ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("span {\n  float: right;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvdW5pdFRhYnMvYWRtaW4tZGFzaC9hZG1pbi1kYXNoLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFlBQ0o7QUFBQSIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3VuaXRUYWJzL2FkbWluLWRhc2gvYWRtaW4tZGFzaC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJzcGFuIHtcclxuICAgIGZsb2F0OiByaWdodFxyXG59OyJdfQ== */");

/***/ }),

/***/ "./src/app/pages/unitTabs/admin-dash/admin-dash.page.ts":
/*!**************************************************************!*\
  !*** ./src/app/pages/unitTabs/admin-dash/admin-dash.page.ts ***!
  \**************************************************************/
/*! exports provided: AdminDashPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminDashPage", function() { return AdminDashPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_services_api_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/api-service.service */ "./src/app/services/api-service.service.ts");
/* harmony import */ var _config_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../config/config */ "./src/app/pages/config/config.ts");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/__ivy_ngcc__/fesm2015/ionic-storage.js");





let AdminDashPage = class AdminDashPage {
    constructor(_api, storage) {
        this._api = _api;
        this.storage = storage;
        this.url = _config_config__WEBPACK_IMPORTED_MODULE_3__["config"].url;
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
                        this.getcount();
                    }
                });
            }
        });
    }
    getcount() {
        if (this.token) {
            if (this.token) {
                const params = {
                    token: this.token,
                    orgId: this.orgId
                };
                this._api.postRequest(this.url + _config_config__WEBPACK_IMPORTED_MODULE_3__["UNITURL"].getCountForAdmin, params).subscribe((result) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                    if (result.success) {
                        console.log('@@@', result);
                        this.count = result.data.tabsCount;
                        console.log(this.count);
                    }
                })), (error) => {
                    console.log(error.description);
                };
            }
        }
    }
    doRefresh(event) {
        setTimeout(() => {
            this.getcount();
            event.target.complete();
        }, 1000);
    }
    ionPull(event) { }
    ionStart(event) { }
};
AdminDashPage.ctorParameters = () => [
    { type: src_app_services_api_service_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"] },
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_4__["Storage"] }
];
AdminDashPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-admin-dash',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./admin-dash.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/unitTabs/admin-dash/admin-dash.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./admin-dash.page.scss */ "./src/app/pages/unitTabs/admin-dash/admin-dash.page.scss")).default]
    })
], AdminDashPage);



/***/ })

}]);
//# sourceMappingURL=unitTabs-admin-dash-admin-dash-module-es2015.js.map