(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-owner-Add-space-space-publish-space-publish-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/owner/Add-space/space-publish/space-publish.page.html":
/*!*******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/owner/Add-space/space-publish/space-publish.page.html ***!
  \*******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header class=\"ion-no-border\">\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-button (click)=\"back()\">\r\n        <ion-icon color=\"unit-btn\" name=\"chevron-back-outline\"></ion-icon>\r\n      </ion-button>\r\n    </ion-buttons>\r\n  </ion-toolbar>\r\n</ion-header>\r\n<ion-content>\r\n  <div class=\"content-main\">\r\n    <h3>Your Space is ready to publish!</h3>\r\n    <ion-card class=\"box-radius\">\r\n      <div *ngIf=\"spaceDetails.images.length; else noImage\">\r\n        <img src=\"{{spaceDetails.images[0]}}\" />\r\n      </div>\r\n      <ng-template #noImage>\r\n        <div> \r\n          <img   class=\"noimage\" src=\"../../../../../assets/imgs/publish-place-dummy.png\">\r\n        </div>\r\n      </ng-template>\r\n      <ion-card-header style=\"padding-bottom: 5px;\">\r\n        <ion-card-title class=\"header-text\">{{spaceDetails.name}}</ion-card-title>\r\n      </ion-card-header>\r\n      <ion-card-content class=\"header-sub\">\r\n        {{spaceDetails.address}}\r\n      </ion-card-content>\r\n    </ion-card>\r\n    <div class=\"btns\">\r\n      <ion-button color=\"danger\" fill=\"outline\" size=\"default\" shape=\"round\" expand=\"block\" (click)=\"publish(true)\"\r\n        class=\"not-btn\">\r\n        Publish\r\n      </ion-button>\r\n    </div>\r\n  </div>\r\n</ion-content>\r\n");

/***/ }),

/***/ "./src/app/pages/owner/Add-space/space-publish/space-publish-routing.module.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/pages/owner/Add-space/space-publish/space-publish-routing.module.ts ***!
  \*************************************************************************************/
/*! exports provided: SpacePublishPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SpacePublishPageRoutingModule", function() { return SpacePublishPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _space_publish_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./space-publish.page */ "./src/app/pages/owner/Add-space/space-publish/space-publish.page.ts");




const routes = [
    {
        path: '',
        component: _space_publish_page__WEBPACK_IMPORTED_MODULE_3__["SpacePublishPage"]
    }
];
let SpacePublishPageRoutingModule = class SpacePublishPageRoutingModule {
};
SpacePublishPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], SpacePublishPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/owner/Add-space/space-publish/space-publish.module.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/pages/owner/Add-space/space-publish/space-publish.module.ts ***!
  \*****************************************************************************/
/*! exports provided: SpacePublishPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SpacePublishPageModule", function() { return SpacePublishPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _space_publish_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./space-publish-routing.module */ "./src/app/pages/owner/Add-space/space-publish/space-publish-routing.module.ts");
/* harmony import */ var _space_publish_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./space-publish.page */ "./src/app/pages/owner/Add-space/space-publish/space-publish.page.ts");







let SpacePublishPageModule = class SpacePublishPageModule {
};
SpacePublishPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _space_publish_routing_module__WEBPACK_IMPORTED_MODULE_5__["SpacePublishPageRoutingModule"]
        ],
        declarations: [_space_publish_page__WEBPACK_IMPORTED_MODULE_6__["SpacePublishPage"]]
    })
], SpacePublishPageModule);



/***/ }),

/***/ "./src/app/pages/owner/Add-space/space-publish/space-publish.page.scss":
/*!*****************************************************************************!*\
  !*** ./src/app/pages/owner/Add-space/space-publish/space-publish.page.scss ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-content {\n  --background: transparent;\n  transform: translate3d(0, 35px, 0);\n}\n\n.content-main {\n  background-color: \"secondary\";\n  height: 100%;\n  border-radius: 20px;\n  padding-top: 40px;\n}\n\nh3 {\n  text-align: center;\n  font-size: 19px;\n  color: #000;\n  font-family: 'helveticaneuebold';\n  margin-bottom: 30px;\n}\n\n.btns {\n  margin-top: 60px;\n  width: 80%;\n  margin: 0 auto;\n}\n\n.btns .publish-btn {\n  margin-top: 140px;\n}\n\n.btns ion-button {\n  text-transform: capitalize;\n  height: 44px;\n  font-size: 16px;\n  font-weight: bold !important;\n  width: 100%;\n  margin-top: 15px;\n}\n\n.header-text {\n  font-size: 16px;\n  width: 100%;\n  font-family: \"helveticaneuebold\";\n  text-align: center;\n  font-weight: 400;\n}\n\n.header-sub {\n  text-align: center;\n  margin-bottom: 20px;\n  font-size: 12px;\n  font-family: 'helveticaneuebold';\n  font-weight: 400;\n  color: #797979;\n}\n\n.box-radius {\n  border-radius: 15px;\n  margin: 0 10%;\n}\n\n.noimage {\n  width: 100% !important;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvb3duZXIvQWRkLXNwYWNlL3NwYWNlLXB1Ymxpc2gvc3BhY2UtcHVibGlzaC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDSSx5QkFBYTtFQUNiLGtDQUFrQztBQUR0Qzs7QUFHRTtFQUNFLDZCQUE2QjtFQUM3QixZQUFZO0VBQ1osbUJBQW1CO0VBQ25CLGlCQUFpQjtBQUFyQjs7QUFHRTtFQUNFLGtCQUFrQjtFQUNoQixlQUFlO0VBQ2YsV0FBVztFQUNYLGdDQUFnQztFQUNoQyxtQkFBbUI7QUFBekI7O0FBSUU7RUFJRSxnQkFBZ0I7RUFDaEIsVUFBVTtFQUNWLGNBQWM7QUFKbEI7O0FBRkU7RUFFSSxpQkFBaUI7QUFJdkI7O0FBTkU7RUFRSSwwQkFBMEI7RUFDMUIsWUFBWTtFQUNaLGVBQWU7RUFDZiw0QkFBNEI7RUFDNUIsV0FBVztFQUNYLGdCQUFnQjtBQUV0Qjs7QUFDRTtFQUNJLGVBQWU7RUFDZixXQUFXO0VBQ1gsZ0NBQWdDO0VBQ2hDLGtCQUFrQjtFQUNsQixnQkFBZ0I7QUFFdEI7O0FBQUU7RUFDRSxrQkFBa0I7RUFDbEIsbUJBQW1CO0VBQ25CLGVBQWU7RUFDZixnQ0FBZ0M7RUFDaEMsZ0JBQWdCO0VBQ2hCLGNBQWM7QUFHbEI7O0FBREU7RUFDRSxtQkFBbUI7RUFDbkIsYUFBYTtBQUlqQjs7QUFGRTtFQUNFLHNCQUFzQjtBQUsxQiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL293bmVyL0FkZC1zcGFjZS9zcGFjZS1wdWJsaXNoL3NwYWNlLXB1Ymxpc2gucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcblxyXG5pb24tY29udGVudCB7XHJcbiAgICAtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAzNXB4LCAwKTtcclxuICB9XHJcbiAgLmNvbnRlbnQtbWFpbiB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBcInNlY29uZGFyeVwiO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcclxuICAgIHBhZGRpbmctdG9wOiA0MHB4O1xyXG4gIH1cclxuICBcclxuICBoM3tcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgZm9udC1zaXplOiAxOXB4O1xyXG4gICAgICBjb2xvcjogIzAwMDtcclxuICAgICAgZm9udC1mYW1pbHk6ICdoZWx2ZXRpY2FuZXVlYm9sZCc7XHJcbiAgICAgIG1hcmdpbi1ib3R0b206IDMwcHg7XHJcbiAgICBcclxuICB9XHJcbiAgXHJcbiAgLmJ0bnMge1xyXG4gICAgLnB1Ymxpc2gtYnRue1xyXG4gICAgICBtYXJnaW4tdG9wOiAxNDBweDtcclxuICAgIH1cclxuICAgIG1hcmdpbi10b3A6IDYwcHg7XHJcbiAgICB3aWR0aDogODAlO1xyXG4gICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICBpb24tYnV0dG9uIHtcclxuICAgICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XHJcbiAgICAgIGhlaWdodDogNDRweDtcclxuICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICBmb250LXdlaWdodDogYm9sZCAhaW1wb3J0YW50O1xyXG4gICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgbWFyZ2luLXRvcDogMTVweDtcclxuICAgIH1cclxuICB9XHJcbiAgLmhlYWRlci10ZXh0e1xyXG4gICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICBmb250LWZhbWlseTogXCJoZWx2ZXRpY2FuZXVlYm9sZFwiO1xyXG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgfVxyXG4gIC5oZWFkZXItc3Vie1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgIGZvbnQtZmFtaWx5OiAnaGVsdmV0aWNhbmV1ZWJvbGQnO1xyXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgIGNvbG9yOiAjNzk3OTc5O1xyXG4gIH1cclxuICAuYm94LXJhZGl1c3tcclxuICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XHJcbiAgICBtYXJnaW46IDAgMTAlO1xyXG4gIH1cclxuICAubm9pbWFnZXtcclxuICAgIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XHJcbiAgfSJdfQ== */");

/***/ }),

/***/ "./src/app/pages/owner/Add-space/space-publish/space-publish.page.ts":
/*!***************************************************************************!*\
  !*** ./src/app/pages/owner/Add-space/space-publish/space-publish.page.ts ***!
  \***************************************************************************/
/*! exports provided: SpacePublishPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SpacePublishPage", function() { return SpacePublishPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var src_app_pages_config_config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/pages/config/config */ "./src/app/pages/config/config.ts");
/* harmony import */ var src_app_services_api_service_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/api-service.service */ "./src/app/services/api-service.service.ts");
/* harmony import */ var src_app_services_global_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/global.service */ "./src/app/services/global.service.ts");
/* harmony import */ var src_app_services_loader_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/loader.service */ "./src/app/services/loader.service.ts");
/* harmony import */ var src_app_services_toast_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/services/toast.service */ "./src/app/services/toast.service.ts");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/__ivy_ngcc__/fesm2015/ionic-storage.js");










let SpacePublishPage = class SpacePublishPage {
    constructor(router, _api, route, toast, loader, _gs, alrtCtrl, storage) {
        this.router = router;
        this._api = _api;
        this.route = route;
        this.toast = toast;
        this.loader = loader;
        this._gs = _gs;
        this.alrtCtrl = alrtCtrl;
        this.storage = storage;
        this.url = src_app_pages_config_config__WEBPACK_IMPORTED_MODULE_4__["config"].url;
        this.route.queryParams.subscribe(params => {
            if (params) {
                if (params.spaceDetails) {
                    this.spaceDetails = JSON.parse(params.spaceDetails);
                    console.log(this.spaceDetails);
                    this.spaceDetails.index = 5;
                    if (this.spaceDetails._id) {
                        this.spaceId = this.spaceDetails._id;
                    }
                }
            }
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
                    }
                });
            }
        });
    }
    publish(publish) {
        this.addSpace(publish);
    }
    addSpace(publish) {
        console.log(this.spaceDetails);
        if (this.token) {
            let params = this.spaceDetails;
            params['token'] = this.token;
            this.addPlaceApi(params, publish);
        }
    }
    addPlaceApi(place, publish) {
        place['publish'] = publish;
        console.log(place);
        console.log(this.spaceId);
        // return;
        if (this.spaceId) {
            place['placeId'] = this.spaceId;
            this.updateSpace(place);
        }
        else {
            this.addNewPlace(place);
        }
    }
    updateSpace(place) {
        place['orgId'] = this.orgId;
        this.loader.present('Updating Space. Please wait..');
        this._api.postRequest(this.url + src_app_pages_config_config__WEBPACK_IMPORTED_MODULE_4__["UNITURL"].updateSpace, place).subscribe((result) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            console.log(result);
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
        this._api.postRequest(this.url + src_app_pages_config_config__WEBPACK_IMPORTED_MODULE_4__["UNITURL"].addSpace, place).subscribe((result) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
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
    back() {
        let navigationExtras = {
            queryParams: {
                spaceDetails: JSON.stringify(this.spaceDetails)
            }
        };
        this.router.navigate(['space-features'], navigationExtras);
    }
};
SpacePublishPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: src_app_services_api_service_service__WEBPACK_IMPORTED_MODULE_5__["ApiService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: src_app_services_toast_service__WEBPACK_IMPORTED_MODULE_8__["ToastService"] },
    { type: src_app_services_loader_service__WEBPACK_IMPORTED_MODULE_7__["LoaderService"] },
    { type: src_app_services_global_service__WEBPACK_IMPORTED_MODULE_6__["GlobalService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"] },
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_9__["Storage"] }
];
SpacePublishPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-space-publish',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./space-publish.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/owner/Add-space/space-publish/space-publish.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./space-publish.page.scss */ "./src/app/pages/owner/Add-space/space-publish/space-publish.page.scss")).default]
    })
], SpacePublishPage);



/***/ })

}]);
//# sourceMappingURL=pages-owner-Add-space-space-publish-space-publish-module-es2015.js.map