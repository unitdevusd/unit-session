(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["unitTabs-tab4-tab4-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/unitTabs/tab4/tab4.page.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/unitTabs/tab4/tab4.page.html ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar>\r\n    <ion-title>My Unit Bookings</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n<ion-content>\r\n  <div *ngIf=\"placeData.length; else notFound\">\r\n    <div *ngFor=\"let space of placeData\">\r\n      <ion-card>\r\n        <ion-item lines=\"none\">\r\n          <ion-grid>\r\n            <ion-row>\r\n              <ion-col size=\"6\">\r\n                <span class=\"main-title\">\r\n                  {{space.name}}\r\n                </span>\r\n                <br>\r\n                <br>\r\n                <span>\r\n                  <ion-badge color=\"success\" *ngIf=\"space.publish\" class=\"pb\">Published</ion-badge>\r\n                  <ion-badge color=\"danger\" *ngIf=\"!space.publish\" class=\"pb\">Unpublished</ion-badge>\r\n                </span>\r\n              </ion-col>\r\n              <ion-col size=\"6\">\r\n                <div *ngIf=\"space?.images?.length; else noImageFound\">\r\n                  <ion-slides pager=\"true\" [options]=\"slideOpts\" class=\"item-slider\" *ngIf=\"space.images.length\">\r\n                    <ion-slide *ngFor=\"let img of space.images\">\r\n                      <img class=\"slider\" style=\"border-radius: 10px;\" src=\"{{img}}\" />\r\n                    </ion-slide>\r\n                  </ion-slides>\r\n                </div>\r\n                <ng-template #noImageFound>\r\n                  <div>\r\n                    <img img src=\"../../../../assets/imgs/dummy_space.png\">\r\n                  </div>\r\n                </ng-template>\r\n              </ion-col>\r\n            </ion-row>\r\n          </ion-grid>\r\n        </ion-item>\r\n        <br>\r\n        <h5 class=\"booking-text\">Bookings</h5>\r\n        <ion-list *ngIf=\"space.bookings.length != 0; else noBookingFound\" lines=\"none\">\r\n          <ion-item *ngFor=\"let booking of space.bookings\">\r\n            <ion-grid>\r\n              <ion-row>\r\n                <ion-col size=\"10\">\r\n                  <ion-label>\r\n                    <h2>Booked by : {{booking.tenantInfo.profile.firstName}} {{booking.tenantInfo.profile.lastName}}\r\n                    </h2>\r\n                    <h3>Booked at : {{booking.startDate | date:'longDate'}}</h3>\r\n                    <h3>Booked upTo : {{booking.endDate | date:'longDate'}}</h3>\r\n                  </ion-label>\r\n                </ion-col>\r\n                <ion-col size=\"2\">\r\n                  <span>\r\n                    <ion-badge color=\"success\" *ngIf=\"booking.paymentStatus\" class=\"paid\">{{booking.paymentStatus}}\r\n                    </ion-badge>\r\n                    <ion-badge color=\"danger\" *ngIf=\"!booking.paymentStatus\" class=\"paid\">{{booking.paymentStatus}}\r\n                    </ion-badge>\r\n                  </span>\r\n                </ion-col>\r\n              </ion-row>\r\n              <ion-row>\r\n                <p>\r\n                  <a (click)=\"viewDetails(booking._id)\" class=\"view-txt\"> View Details > </a>\r\n                </p>\r\n              </ion-row>\r\n              <ion-row>\r\n                <div class=\"hr_main\"></div>\r\n              </ion-row>\r\n            </ion-grid>\r\n          </ion-item>\r\n        </ion-list>\r\n        <ng-template #noBookingFound>\r\n          <ion-list>\r\n            <ion-item class=\"no-booking\">\r\n              No bookings yet!\r\n            </ion-item>\r\n          </ion-list>\r\n        </ng-template>\r\n      </ion-card>\r\n    </div>\r\n  </div>\r\n  <ng-template #notFound>\r\n    <div class=\"ion-padding\" style=\"text-align: center;\">\r\n      <img src=\"../../../../assets/imgs/emptyList.png\" />\r\n    </div>\r\n  </ng-template>\r\n</ion-content>");

/***/ }),

/***/ "./src/app/pages/unitTabs/tab4/tab4-routing.module.ts":
/*!************************************************************!*\
  !*** ./src/app/pages/unitTabs/tab4/tab4-routing.module.ts ***!
  \************************************************************/
/*! exports provided: Tab4PageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab4PageRoutingModule", function() { return Tab4PageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _tab4_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tab4.page */ "./src/app/pages/unitTabs/tab4/tab4.page.ts");




const routes = [
    {
        path: '',
        component: _tab4_page__WEBPACK_IMPORTED_MODULE_3__["Tab4Page"]
    }
];
let Tab4PageRoutingModule = class Tab4PageRoutingModule {
};
Tab4PageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], Tab4PageRoutingModule);



/***/ }),

/***/ "./src/app/pages/unitTabs/tab4/tab4.module.ts":
/*!****************************************************!*\
  !*** ./src/app/pages/unitTabs/tab4/tab4.module.ts ***!
  \****************************************************/
/*! exports provided: Tab4PageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab4PageModule", function() { return Tab4PageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _tab4_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./tab4-routing.module */ "./src/app/pages/unitTabs/tab4/tab4-routing.module.ts");
/* harmony import */ var _tab4_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./tab4.page */ "./src/app/pages/unitTabs/tab4/tab4.page.ts");







let Tab4PageModule = class Tab4PageModule {
};
Tab4PageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _tab4_routing_module__WEBPACK_IMPORTED_MODULE_5__["Tab4PageRoutingModule"]
        ],
        declarations: [_tab4_page__WEBPACK_IMPORTED_MODULE_6__["Tab4Page"]]
    })
], Tab4PageModule);



/***/ }),

/***/ "./src/app/pages/unitTabs/tab4/tab4.page.scss":
/*!****************************************************!*\
  !*** ./src/app/pages/unitTabs/tab4/tab4.page.scss ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".sc-ion-label-ios-s h3, .sc-ion-label-ios-s h4, .sc-ion-label-ios-s h5, .sc-ion-label-ios-s h6 {\n  margin-left: 0;\n  margin-right: 0;\n  margin-top: 0;\n  margin-bottom: 3px;\n  font-size: 14px;\n  font-weight: 300;\n  line-height: normal;\n}\n\np {\n  font-size: 12px;\n  color: var(--ion-color-step-600, #60646b);\n}\n\n.main-title {\n  font-size: 15px;\n  font-weight: 400;\n  margin-left: 0px;\n  margin-right: 0;\n  margin-top: 0px;\n  padding-top: 0;\n  font-family: 'helveticaneuebold';\n  color: \"tertiary\";\n}\n\n.pb {\n  font-size: 13px !important;\n}\n\n.booking-text {\n  font-size: 16px !important;\n  font-family: 'helveticaneuebold';\n  margin-left: 31px;\n  font-weight: 400;\n  color: tertiary;\n}\n\nh2, h3 {\n  text-align: left !important;\n  color: #5A5A5A;\n  font-size: 12px !important;\n  margin-top: 6px;\n  margin-bottom: 6px;\n  font-family: 'medium';\n  font-weight: 400;\n}\n\n.paid {\n  --ion-color-base: #fff !important;\n  --ion-color-contrast: #1DC916 !important;\n  text-transform: capitalize;\n  padding-left: 0;\n  font-family: medium;\n  font-size: 13px;\n  font-weight: 400;\n}\n\n.view-txt {\n  text-decoration: none;\n  color: #ED1B25;\n  font-family: medium;\n  font-size: 13px;\n  text-transform: capitalize;\n  margin-left: 7px;\n}\n\n.no-booking {\n  padding-left: 10px;\n  font-size: 13px;\n  color: tertiary;\n}\n\n.hr_main {\n  display: block;\n  margin-top: 0.5em;\n  margin-bottom: 0.5em;\n  margin-left: 9px;\n  margin-right: 15px;\n  border: 1px solid #cacaca;\n  height: 0px;\n  width: 100%;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvdW5pdFRhYnMvdGFiNC90YWI0LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGNBQWM7RUFDZCxlQUFlO0VBQ2YsYUFBYTtFQUNiLGtCQUFrQjtFQUNsQixlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLG1CQUFtQjtBQUN2Qjs7QUFFRTtFQUNFLGVBQWU7RUFDZix5Q0FBeUM7QUFDN0M7O0FBRUU7RUFDRSxlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtFQUNoQixlQUFlO0VBQ2YsZUFBZTtFQUNmLGNBQWM7RUFDZCxnQ0FBZ0M7RUFDaEMsaUJBQWlCO0FBQ3JCOztBQUNFO0VBQ0UsMEJBQTBCO0FBRTlCOztBQUFFO0VBQ0UsMEJBQTBCO0VBQzFCLGdDQUFnQztFQUNoQyxpQkFBaUI7RUFDakIsZ0JBQWdCO0VBQ2hCLGVBQWU7QUFHbkI7O0FBREU7RUFDRSwyQkFBMkI7RUFDM0IsY0FBYztFQUNkLDBCQUEwQjtFQUMxQixlQUFlO0VBQ2Ysa0JBQWtCO0VBQ2xCLHFCQUFxQjtFQUNyQixnQkFBZ0I7QUFJcEI7O0FBREU7RUFDRSxpQ0FBaUI7RUFDakIsd0NBQXFCO0VBQ3JCLDBCQUEwQjtFQUMxQixlQUFlO0VBQ2YsbUJBQW1CO0VBQ25CLGVBQWU7RUFDZixnQkFBZ0I7QUFJcEI7O0FBRkU7RUFDRSxxQkFBcUI7RUFDckIsY0FBYztFQUNkLG1CQUFtQjtFQUNuQixlQUFlO0VBQ2YsMEJBQTBCO0VBQzFCLGdCQUFnQjtBQUtwQjs7QUFIRTtFQUNFLGtCQUFrQjtFQUNsQixlQUFlO0VBQ2YsZUFBZTtBQU1uQjs7QUFIRTtFQUNFLGNBQWM7RUFDWixpQkFBaUI7RUFDakIsb0JBQW9CO0VBQ3BCLGdCQUFnQjtFQUNoQixrQkFBa0I7RUFDbEIseUJBQXlCO0VBQ3pCLFdBQVc7RUFDWCxXQUFXO0FBTWpCIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvdW5pdFRhYnMvdGFiNC90YWI0LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zYy1pb24tbGFiZWwtaW9zLXMgaDMsIC5zYy1pb24tbGFiZWwtaW9zLXMgaDQsIC5zYy1pb24tbGFiZWwtaW9zLXMgaDUsIC5zYy1pb24tbGFiZWwtaW9zLXMgaDYge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDA7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDA7XHJcbiAgICBtYXJnaW4tdG9wOiAwO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogM3B4O1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcclxuICAgIGxpbmUtaGVpZ2h0OiBub3JtYWw7XHJcbiAgfVxyXG4gICAgXHJcbiAgcCB7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXN0ZXAtNjAwLCAjNjA2NDZiKTtcclxuICB9XHJcbiAgXHJcbiAgLm1haW4tdGl0bGV7XHJcbiAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDBweDtcclxuICAgIG1hcmdpbi1yaWdodDogMDtcclxuICAgIG1hcmdpbi10b3A6IDBweDtcclxuICAgIHBhZGRpbmctdG9wOiAwO1xyXG4gICAgZm9udC1mYW1pbHk6ICdoZWx2ZXRpY2FuZXVlYm9sZCc7XHJcbiAgICBjb2xvcjogXCJ0ZXJ0aWFyeVwiO1xyXG4gIH1cclxuICAucGJ7XHJcbiAgICBmb250LXNpemU6IDEzcHggIWltcG9ydGFudDtcclxuICB9XHJcbiAgLmJvb2tpbmctdGV4dHtcclxuICAgIGZvbnQtc2l6ZTogMTZweCAhaW1wb3J0YW50O1xyXG4gICAgZm9udC1mYW1pbHk6ICdoZWx2ZXRpY2FuZXVlYm9sZCc7XHJcbiAgICBtYXJnaW4tbGVmdDogMzFweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICBjb2xvcjogdGVydGlhcnk7XHJcbiAgfVxyXG4gIGgyLCBoM3tcclxuICAgIHRleHQtYWxpZ246IGxlZnQgIWltcG9ydGFudDtcclxuICAgIGNvbG9yOiAjNUE1QTVBO1xyXG4gICAgZm9udC1zaXplOiAxMnB4ICFpbXBvcnRhbnQ7XHJcbiAgICBtYXJnaW4tdG9wOiA2cHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA2cHg7XHJcbiAgICBmb250LWZhbWlseTogJ21lZGl1bSc7XHJcbiAgICBmb250LXdlaWdodDogNDAwO1xyXG4gIH1cclxuICBcclxuICAucGFpZHtcclxuICAgIC0taW9uLWNvbG9yLWJhc2U6ICNmZmYgIWltcG9ydGFudDtcclxuICAgIC0taW9uLWNvbG9yLWNvbnRyYXN0OiAjMURDOTE2ICFpbXBvcnRhbnQ7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcclxuICAgIHBhZGRpbmctbGVmdDogMDtcclxuICAgIGZvbnQtZmFtaWx5OiBtZWRpdW07XHJcbiAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgICBmb250LXdlaWdodDogNDAwO1xyXG4gIH1cclxuICAudmlldy10eHR7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICBjb2xvcjogI0VEMUIyNTtcclxuICAgIGZvbnQtZmFtaWx5OiBtZWRpdW07XHJcbiAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcclxuICAgIG1hcmdpbi1sZWZ0OiA3cHg7XHJcbiAgfVxyXG4gIC5uby1ib29raW5ne1xyXG4gICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xyXG4gICAgZm9udC1zaXplOiAxM3B4O1xyXG4gICAgY29sb3I6IHRlcnRpYXJ5O1xyXG4gIH1cclxuICBcclxuICAuaHJfbWFpbntcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICBtYXJnaW4tdG9wOiAwLjVlbTtcclxuICAgICAgbWFyZ2luLWJvdHRvbTogMC41ZW07XHJcbiAgICAgIG1hcmdpbi1sZWZ0OiA5cHg7XHJcbiAgICAgIG1hcmdpbi1yaWdodDogMTVweDtcclxuICAgICAgYm9yZGVyOiAxcHggc29saWQgI2NhY2FjYTtcclxuICAgICAgaGVpZ2h0OiAwcHg7XHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG4gIH0iXX0= */");

/***/ }),

/***/ "./src/app/pages/unitTabs/tab4/tab4.page.ts":
/*!**************************************************!*\
  !*** ./src/app/pages/unitTabs/tab4/tab4.page.ts ***!
  \**************************************************/
/*! exports provided: Tab4Page */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab4Page", function() { return Tab4Page; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var src_app_services_api_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/api-service.service */ "./src/app/services/api-service.service.ts");
/* harmony import */ var src_app_services_global_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/global.service */ "./src/app/services/global.service.ts");
/* harmony import */ var src_app_services_loader_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/loader.service */ "./src/app/services/loader.service.ts");
/* harmony import */ var _config_config__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../config/config */ "./src/app/pages/config/config.ts");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/__ivy_ngcc__/fesm2015/ionic-storage.js");
/* harmony import */ var src_app_services_toast_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/services/toast.service */ "./src/app/services/toast.service.ts");









let Tab4Page = class Tab4Page {
    constructor(_apiService, _loader, router, _gs, storage, _toast) {
        this._apiService = _apiService;
        this._loader = _loader;
        this.router = router;
        this._gs = _gs;
        this.storage = storage;
        this._toast = _toast;
        this.placeData = [];
        this.url = _config_config__WEBPACK_IMPORTED_MODULE_6__["config"].url;
        this.places = [];
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
                        this.getMybookedPlaces();
                    }
                });
            }
        });
    }
    getMybookedPlaces() {
        this._loader.present('');
        if (this.token) {
            const params = {
                token: this.token,
                orgId: this.orgId
            };
            this._apiService.postRequest(this.url + _config_config__WEBPACK_IMPORTED_MODULE_6__["UNITURL"].bookedPlaces, params).subscribe((result) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                if (result.success) {
                    this.placeData = result.data.places;
                    this._loader.dismiss();
                }
            })), (error) => {
                this._loader.dismiss();
                console.log(error.description);
                this._toast.presentToast(error.description);
            };
        }
    }
    viewDetails(Id) {
        let navigationExtras = {
            queryParams: {
                type: "Tenant",
                from: "tabs/tab4"
            }
        };
        this.router.navigate(['booking-detail', Id], navigationExtras);
    }
};
Tab4Page.ctorParameters = () => [
    { type: src_app_services_api_service_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"] },
    { type: src_app_services_loader_service__WEBPACK_IMPORTED_MODULE_5__["LoaderService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: src_app_services_global_service__WEBPACK_IMPORTED_MODULE_4__["GlobalService"] },
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_7__["Storage"] },
    { type: src_app_services_toast_service__WEBPACK_IMPORTED_MODULE_8__["ToastService"] }
];
Tab4Page = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-tab4',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./tab4.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/unitTabs/tab4/tab4.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./tab4.page.scss */ "./src/app/pages/unitTabs/tab4/tab4.page.scss")).default]
    })
], Tab4Page);



/***/ })

}]);
//# sourceMappingURL=unitTabs-tab4-tab4-module-es2015.js.map