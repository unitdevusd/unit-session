(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-owner-view-earnings-view-earnings-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/owner/view-earnings/view-earnings.page.html":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/owner/view-earnings/view-earnings.page.html ***!
  \*********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar>\r\n    <ion-title>My Earnings</ion-title>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button color=\"unit-btn\" text=\"\" icon=\"chevron-back-outline\"></ion-back-button>\r\n    </ion-buttons>\r\n  </ion-toolbar>\r\n</ion-header>\r\n<ion-content>\r\n  <ion-list>\r\n    <ion-item *ngFor = \"let payment of resp\"> \r\n      <ion-grid>\r\n        <ion-row>\r\n          <ion-col size= \"10\" class=\"name\">\r\n            {{payment.name}}\r\n          </ion-col>\r\n          <ion-col size= \"2\" class=\"name\">\r\n            $ {{payment.totalEarings ? payment.totalEarings : 0}}\r\n          </ion-col>\r\n        </ion-row>\r\n      </ion-grid>\r\n    </ion-item>\r\n  </ion-list>\r\n</ion-content>\r\n<ion-footer>\r\n  <ion-toolbar>\r\n    <div class=\"ion-text-center\">\r\n      <ion-label class=\"total\"> Total : $ {{total}}</ion-label>\r\n    </div>\r\n  </ion-toolbar>\r\n</ion-footer>\r\n");

/***/ }),

/***/ "./src/app/pages/owner/view-earnings/view-earnings-routing.module.ts":
/*!***************************************************************************!*\
  !*** ./src/app/pages/owner/view-earnings/view-earnings-routing.module.ts ***!
  \***************************************************************************/
/*! exports provided: ViewEarningsPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewEarningsPageRoutingModule", function() { return ViewEarningsPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _view_earnings_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./view-earnings.page */ "./src/app/pages/owner/view-earnings/view-earnings.page.ts");




const routes = [
    {
        path: '',
        component: _view_earnings_page__WEBPACK_IMPORTED_MODULE_3__["ViewEarningsPage"]
    }
];
let ViewEarningsPageRoutingModule = class ViewEarningsPageRoutingModule {
};
ViewEarningsPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ViewEarningsPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/owner/view-earnings/view-earnings.module.ts":
/*!*******************************************************************!*\
  !*** ./src/app/pages/owner/view-earnings/view-earnings.module.ts ***!
  \*******************************************************************/
/*! exports provided: ViewEarningsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewEarningsPageModule", function() { return ViewEarningsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _view_earnings_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./view-earnings-routing.module */ "./src/app/pages/owner/view-earnings/view-earnings-routing.module.ts");
/* harmony import */ var _view_earnings_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./view-earnings.page */ "./src/app/pages/owner/view-earnings/view-earnings.page.ts");







let ViewEarningsPageModule = class ViewEarningsPageModule {
};
ViewEarningsPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _view_earnings_routing_module__WEBPACK_IMPORTED_MODULE_5__["ViewEarningsPageRoutingModule"]
        ],
        declarations: [_view_earnings_page__WEBPACK_IMPORTED_MODULE_6__["ViewEarningsPage"]]
    })
], ViewEarningsPageModule);



/***/ }),

/***/ "./src/app/pages/owner/view-earnings/view-earnings.page.scss":
/*!*******************************************************************!*\
  !*** ./src/app/pages/owner/view-earnings/view-earnings.page.scss ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".name {\n  font-size: 13px;\n  font-weight: 400;\n  color: tertiary;\n  font-family: 'helveticaneuebold';\n}\n\n.total {\n  font-size: 18px;\n  font-family: 'helveticaneuebold';\n  color: green;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvb3duZXIvdmlldy1lYXJuaW5ncy92aWV3LWVhcm5pbmdzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsZUFBZTtFQUNmLGdDQUFnQztBQUNwQzs7QUFDQztFQUNHLGVBQWU7RUFDZixnQ0FBZ0M7RUFDaEMsWUFBVztBQUVmIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvb3duZXIvdmlldy1lYXJuaW5ncy92aWV3LWVhcm5pbmdzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5uYW1le1xyXG4gICAgZm9udC1zaXplOiAxM3B4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgIGNvbG9yOiB0ZXJ0aWFyeTtcclxuICAgIGZvbnQtZmFtaWx5OiAnaGVsdmV0aWNhbmV1ZWJvbGQnO1xyXG4gfVxyXG4gLnRvdGFse1xyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgZm9udC1mYW1pbHk6ICdoZWx2ZXRpY2FuZXVlYm9sZCc7XHJcbiAgICBjb2xvcjpncmVlbjtcclxuIH0iXX0= */");

/***/ }),

/***/ "./src/app/pages/owner/view-earnings/view-earnings.page.ts":
/*!*****************************************************************!*\
  !*** ./src/app/pages/owner/view-earnings/view-earnings.page.ts ***!
  \*****************************************************************/
/*! exports provided: ViewEarningsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewEarningsPage", function() { return ViewEarningsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_services_api_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/api-service.service */ "./src/app/services/api-service.service.ts");
/* harmony import */ var src_app_services_toast_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/toast.service */ "./src/app/services/toast.service.ts");
/* harmony import */ var _config_config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../config/config */ "./src/app/pages/config/config.ts");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/__ivy_ngcc__/fesm2015/ionic-storage.js");






let ViewEarningsPage = class ViewEarningsPage {
    constructor(_apiService, alert, storage) {
        this._apiService = _apiService;
        this.alert = alert;
        this.storage = storage;
        this.url = _config_config__WEBPACK_IMPORTED_MODULE_4__["config"].url;
        this.total = 0;
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
                        this.viewEarnings();
                    }
                });
            }
        });
    }
    ionViewWillEnter() { }
    viewEarnings() {
        if (this.token) {
            const params = {
                token: this.token,
                orgId: this.orgId
            };
            console.log(params);
            this._apiService.postRequest(this.url + _config_config__WEBPACK_IMPORTED_MODULE_4__["UNITURL"].placeWithTotalEarnings, params).subscribe((result) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                if (result.success) {
                    this.resp = result.data.list;
                    for (var i = 0; i < this.resp.length; i++) {
                        if (this.resp[i].totalEarings) {
                            this.total += Number(this.resp[i].totalEarings);
                        }
                    }
                }
            })), (error) => {
                console.log(error.description);
                this.alert.presentToast(error.description);
            };
        }
    }
};
ViewEarningsPage.ctorParameters = () => [
    { type: src_app_services_api_service_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"] },
    { type: src_app_services_toast_service__WEBPACK_IMPORTED_MODULE_3__["ToastService"] },
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_5__["Storage"] }
];
ViewEarningsPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-view-earnings',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./view-earnings.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/owner/view-earnings/view-earnings.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./view-earnings.page.scss */ "./src/app/pages/owner/view-earnings/view-earnings.page.scss")).default]
    })
], ViewEarningsPage);



/***/ })

}]);
//# sourceMappingURL=pages-owner-view-earnings-view-earnings-module-es2015.js.map