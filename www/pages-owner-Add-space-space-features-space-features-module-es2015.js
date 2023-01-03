(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-owner-Add-space-space-features-space-features-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/owner/Add-space/space-features/space-features.page.html":
/*!*********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/owner/Add-space/space-features/space-features.page.html ***!
  \*********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header class=\"ion-no-border\">\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"end\" (click)=\"saveListing()\">\r\n      <ion-button color=\"unit-btn\" class=\"save\">\r\n        Save and Exit\r\n      </ion-button>\r\n    </ion-buttons>\r\n  </ion-toolbar>\r\n</ion-header>\r\n<ion-content>\r\n  <h4>Features</h4>\r\n  <ion-list>\r\n    <ion-item lines=\"none\" *ngFor=\"let am of features; let i=index\">\r\n      <ion-label>{{am.name}}</ion-label>\r\n      <ion-checkbox slot=\"start\" [value]=\"am._id\" (ionChange)=\"onCheckChange($event)\"></ion-checkbox>\r\n    </ion-item>\r\n  </ion-list>\r\n  <h4>Enter Video Link</h4>\r\n  <ion-item lines=\"none\">\r\n    <ion-input placeholder=\"https://\" [(ngModel)]=\"videoUrl\"></ion-input>\r\n  </ion-item>\r\n  <h4>Add Images</h4>\r\n  <ion-grid class=\"image_view\">\r\n    <ion-row *ngFor=\"let image of images; let i = index\">\r\n      <ion-col size=\"4\">\r\n        <h5>{{image.name}}</h5>\r\n      </ion-col>\r\n      <ion-col size=\"8\">\r\n        <div *ngIf=\"!image.url\">\r\n          <ion-button expand=\"block\" color=\"unit-btn\" shape=\"round\" fill=\"outline\" (click)=\"uploadImage(image,i)\"> Choose\r\n          </ion-button>\r\n        </div>\r\n        <div *ngIf=\"image.url\">\r\n          <img src=\"{{image.url}}\" alt=\"\">\r\n          <ion-icon name=\"close-circle\" color=\"unit-btn\" (click)=\"deleteImage(image,i)\"></ion-icon>\r\n        </div>\r\n      </ion-col>\r\n    </ion-row>\r\n    <ion-row>\r\n      <ion-col size=\"4\"></ion-col>\r\n      <ion-col size=\"8\">\r\n        <h3 class=\"addmore\" (click)=\"addMoreImages()\"> + Add more images </h3>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-grid>\r\n</ion-content>\r\n<ion-footer>\r\n  <ion-toolbar>\r\n    <ion-grid>\r\n      <ion-row>\r\n        <ion-col>\r\n          <ion-button color=\"unit-btn\" fill=\"clear\" (click)=\"backPage()\">\r\n            <ion-icon class=\"back_btn\" slot=\"start\" name=\"chevron-back-outline\"></ion-icon>\r\n            Back\r\n          </ion-button>\r\n        </ion-col>\r\n        <ion-col>\r\n        </ion-col>\r\n        <ion-col style=\"margin-left: 35%;\">\r\n          <ion-button  class=\"next-btn\" color=\"unit-btn\" fill=\"clear\" [disabled]=\"selectedAmenities.length == 0\" fill=\"clear\"\r\n            (click)=\"next(4)\">\r\n            Next\r\n            <ion-icon slot=\"end\" name=\"chevron-forward-outline\"></ion-icon>\r\n          </ion-button>\r\n        </ion-col>\r\n      </ion-row>\r\n    </ion-grid>\r\n  </ion-toolbar>\r\n</ion-footer>");

/***/ }),

/***/ "./src/app/pages/owner/Add-space/space-features/space-features-routing.module.ts":
/*!***************************************************************************************!*\
  !*** ./src/app/pages/owner/Add-space/space-features/space-features-routing.module.ts ***!
  \***************************************************************************************/
/*! exports provided: SpaceFeaturesPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SpaceFeaturesPageRoutingModule", function() { return SpaceFeaturesPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _space_features_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./space-features.page */ "./src/app/pages/owner/Add-space/space-features/space-features.page.ts");




const routes = [
    {
        path: '',
        component: _space_features_page__WEBPACK_IMPORTED_MODULE_3__["SpaceFeaturesPage"]
    }
];
let SpaceFeaturesPageRoutingModule = class SpaceFeaturesPageRoutingModule {
};
SpaceFeaturesPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], SpaceFeaturesPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/owner/Add-space/space-features/space-features.module.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/pages/owner/Add-space/space-features/space-features.module.ts ***!
  \*******************************************************************************/
/*! exports provided: SpaceFeaturesPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SpaceFeaturesPageModule", function() { return SpaceFeaturesPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _space_features_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./space-features-routing.module */ "./src/app/pages/owner/Add-space/space-features/space-features-routing.module.ts");
/* harmony import */ var _space_features_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./space-features.page */ "./src/app/pages/owner/Add-space/space-features/space-features.page.ts");







let SpaceFeaturesPageModule = class SpaceFeaturesPageModule {
};
SpaceFeaturesPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _space_features_routing_module__WEBPACK_IMPORTED_MODULE_5__["SpaceFeaturesPageRoutingModule"]
        ],
        declarations: [_space_features_page__WEBPACK_IMPORTED_MODULE_6__["SpaceFeaturesPage"]],
        providers: []
    })
], SpaceFeaturesPageModule);



/***/ }),

/***/ "./src/app/pages/owner/Add-space/space-features/space-features.page.scss":
/*!*******************************************************************************!*\
  !*** ./src/app/pages/owner/Add-space/space-features/space-features.page.scss ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("h4 {\n  font-size: 16px !important;\n  margin-left: 24px;\n  color: #3C3939;\n  font-family: 'medium';\n}\n\nion-label {\n  color: #656565 !important;\n  font-size: 17px !important;\n  margin-left: 8px;\n}\n\n.list-ios {\n  margin-bottom: 10px !important;\n}\n\n.save {\n  font-family: medium;\n  font-size: 16px;\n}\n\nion-list h4 {\n  font-size: 20px;\n  margin-bottom: 10px;\n  color: #3c3939;\n  font-family: 'medium';\n  opacity: 1;\n  margin-left: 20px;\n}\n\nion-button {\n  text-transform: capitalize;\n  --border-color: #d7d8da80;\n}\n\n.input {\n  border-bottom: 1px solid #d7d8da80;\n}\n\nion-item ion-input {\n  border: 1px solid #CACACA !important;\n  border-radius: 30px;\n  --padding-start: 15px;\n  --padding-end: 15px;\n}\n\nion-item ion-select {\n  --padding-end: 15px;\n}\n\n.image_view ion-row ion-col img {\n  max-width: 90%;\n  border-radius: 25px;\n}\n\n.image_view ion-row ion-col ion-icon {\n  position: absolute;\n  right: 22px;\n  font-size: 25px;\n  top: 0px;\n}\n\n.addmore {\n  margin-top: 0px;\n  margin-left: 55px;\n  font-size: 13px;\n  color: #ff0000;\n}\n\nh5 {\n  font-size: 16px;\n  margin-bottom: 10px;\n  color: #3c3939;\n  font-family: 'medium';\n  opacity: 1;\n  margin-left: 11px;\n}\n\nion-footer {\n  height: 9% !important;\n}\n\nion-footer ion-button {\n  margin-top: -3px !important;\n}\n\nion-footer ion-button .next_btn {\n  margin-left: 0 !important;\n}\n\nion-footer ion-button .back_btn {\n  margin-right: 0 !important;\n}\n\nion-checkbox {\n  margin-right: 5px;\n  --background-checked: #FF0000;\n  --border-color-checked:  #FF0000;\n  width: 20px !important;\n  height: 20px !important;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvb3duZXIvQWRkLXNwYWNlL3NwYWNlLWZlYXR1cmVzL3NwYWNlLWZlYXR1cmVzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLDBCQUEwQjtFQUMxQixpQkFBaUI7RUFDakIsY0FBYztFQUNkLHFCQUFxQjtBQUN6Qjs7QUFFRTtFQUNFLHlCQUF5QjtFQUN6QiwwQkFBMEI7RUFDMUIsZ0JBQWdCO0FBQ3BCOztBQUNFO0VBQ0UsOEJBQThCO0FBRWxDOztBQUFFO0VBQ0UsbUJBQW1CO0VBQ2pCLGVBQWU7QUFHckI7O0FBREU7RUFFSSxlQUFlO0VBQ2YsbUJBQW1CO0VBQ25CLGNBQWM7RUFDZCxxQkFBcUI7RUFDckIsVUFBVTtFQUNWLGlCQUFpQjtBQUd2Qjs7QUFFRTtFQUNFLDBCQUEwQjtFQUMxQix5QkFBZTtBQUNuQjs7QUFFRTtFQUNFLGtDQUFrQztBQUN0Qzs7QUFDRTtFQUVJLG9DQUFvQztFQUNwQyxtQkFBbUI7RUFDbkIscUJBQWdCO0VBQ2hCLG1CQUFjO0FBQ3BCOztBQU5FO0VBUUksbUJBQWM7QUFFcEI7O0FBRUU7RUFJUSxjQUFjO0VBQ2QsbUJBQW1CO0FBRjdCOztBQUhFO0VBUVEsa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxlQUFlO0VBQ2YsUUFBUTtBQURsQjs7QUFPRTtFQUNFLGVBQWU7RUFDZixpQkFBaUI7RUFDakIsZUFBZTtFQUNmLGNBQWM7QUFKbEI7O0FBTUU7RUFDRSxlQUFlO0VBQ2YsbUJBQW1CO0VBQ25CLGNBQWM7RUFDZCxxQkFBcUI7RUFDckIsVUFBVTtFQUNWLGlCQUFpQjtBQUhyQjs7QUFLRTtFQUNFLHFCQUFxQjtBQUZ6Qjs7QUFDRTtFQUdJLDJCQUEyQjtBQUFqQzs7QUFIRTtFQUtNLHlCQUF5QjtBQUVqQzs7QUFQRTtFQVFNLDBCQUEwQjtBQUdsQzs7QUFDRTtFQUNFLGlCQUFpQjtFQUNqQiw2QkFBcUI7RUFDckIsZ0NBQXVCO0VBQ3ZCLHNCQUFzQjtFQUN0Qix1QkFBdUI7QUFFM0IiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9vd25lci9BZGQtc3BhY2Uvc3BhY2UtZmVhdHVyZXMvc3BhY2UtZmVhdHVyZXMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaDQge1xyXG4gICAgZm9udC1zaXplOiAxNnB4ICFpbXBvcnRhbnQ7XHJcbiAgICBtYXJnaW4tbGVmdDogMjRweDtcclxuICAgIGNvbG9yOiAjM0MzOTM5O1xyXG4gICAgZm9udC1mYW1pbHk6ICdtZWRpdW0nO1xyXG4gIH1cclxuICBcclxuICBpb24tbGFiZWwge1xyXG4gICAgY29sb3I6ICM2NTY1NjUgIWltcG9ydGFudDtcclxuICAgIGZvbnQtc2l6ZTogMTdweCAhaW1wb3J0YW50O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDhweDtcclxuICB9XHJcbiAgLmxpc3QtaW9zIHtcclxuICAgIG1hcmdpbi1ib3R0b206IDEwcHggIWltcG9ydGFudDtcclxuICB9XHJcbiAgLnNhdmV7XHJcbiAgICBmb250LWZhbWlseTogbWVkaXVtO1xyXG4gICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgfVxyXG4gIGlvbi1saXN0IHtcclxuICAgIGg0IHtcclxuICAgICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gICAgICBjb2xvcjogIzNjMzkzOTtcclxuICAgICAgZm9udC1mYW1pbHk6ICdtZWRpdW0nO1xyXG4gICAgICBvcGFjaXR5OiAxO1xyXG4gICAgICBtYXJnaW4tbGVmdDogMjBweDtcclxuICAgIH1cclxuICB9XHJcbiAgXHJcbiAgXHJcbiAgaW9uLWJ1dHRvbiB7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcclxuICAgIC0tYm9yZGVyLWNvbG9yOiAjZDdkOGRhODA7XHJcbiAgfVxyXG4gIFxyXG4gIC5pbnB1dCB7XHJcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2Q3ZDhkYTgwO1xyXG4gIH1cclxuICBpb24taXRlbSB7XHJcbiAgICBpb24taW5wdXQge1xyXG4gICAgICBib3JkZXI6IDFweCBzb2xpZCAjQ0FDQUNBICFpbXBvcnRhbnQ7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDMwcHg7XHJcbiAgICAgIC0tcGFkZGluZy1zdGFydDogMTVweDtcclxuICAgICAgLS1wYWRkaW5nLWVuZDogMTVweDtcclxuICAgIH1cclxuICAgIGlvbi1zZWxlY3R7XHJcbiAgICAgIC0tcGFkZGluZy1lbmQ6IDE1cHg7XHJcbiAgICB9XHJcbiAgfVxyXG4gIFxyXG4gIC5pbWFnZV92aWV3IHtcclxuICAgIGlvbi1yb3cge1xyXG4gICAgICBpb24tY29sIHtcclxuICAgICAgICBpbWcge1xyXG4gICAgICAgICAgbWF4LXdpZHRoOiA5MCU7XHJcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiAyNXB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICBpb24taWNvbiB7XHJcbiAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICByaWdodDogMjJweDtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMjVweDtcclxuICAgICAgICAgIHRvcDogMHB4O1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuICBcclxuICAuYWRkbW9yZSB7XHJcbiAgICBtYXJnaW4tdG9wOiAwcHg7XHJcbiAgICBtYXJnaW4tbGVmdDogNTVweDtcclxuICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICAgIGNvbG9yOiAjZmYwMDAwO1xyXG4gIH1cclxuICBoNXtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgICBjb2xvcjogIzNjMzkzOTtcclxuICAgIGZvbnQtZmFtaWx5OiAnbWVkaXVtJztcclxuICAgIG9wYWNpdHk6IDE7XHJcbiAgICBtYXJnaW4tbGVmdDogMTFweDtcclxuICB9XHJcbiAgaW9uLWZvb3RlciB7XHJcbiAgICBoZWlnaHQ6IDklICFpbXBvcnRhbnQ7XHJcbiAgICBpb24tYnV0dG9uIHtcclxuICAgICAgbWFyZ2luLXRvcDogLTNweCAhaW1wb3J0YW50O1xyXG4gICAgICAubmV4dF9idG4ge1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAwICFpbXBvcnRhbnQ7XHJcbiAgICAgIH1cclxuICAgICAgLmJhY2tfYnRuIHtcclxuICAgICAgICBtYXJnaW4tcmlnaHQ6IDAgIWltcG9ydGFudDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuICBpb24tY2hlY2tib3h7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDVweDtcclxuICAgIC0tYmFja2dyb3VuZC1jaGVja2VkOiAjRkYwMDAwO1xyXG4gICAgLS1ib3JkZXItY29sb3ItY2hlY2tlZDogICNGRjAwMDA7XHJcbiAgICB3aWR0aDogMjBweCAhaW1wb3J0YW50O1xyXG4gICAgaGVpZ2h0OiAyMHB4ICFpbXBvcnRhbnQ7XHJcbiAgfSJdfQ== */");

/***/ }),

/***/ "./src/app/pages/owner/Add-space/space-features/space-features.page.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/pages/owner/Add-space/space-features/space-features.page.ts ***!
  \*****************************************************************************/
/*! exports provided: SpaceFeaturesPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SpaceFeaturesPage", function() { return SpaceFeaturesPage; });
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
/* harmony import */ var _capacitor_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @capacitor/core */ "./node_modules/@capacitor/core/dist/esm/index.js");











const { Camera } = _capacitor_core__WEBPACK_IMPORTED_MODULE_10__["Plugins"];
let SpaceFeaturesPage = class SpaceFeaturesPage {
    constructor(router, _api, route, toast, loader, _gs, alrtCtrl, actionSheetController, storage, zone) {
        this.router = router;
        this._api = _api;
        this.route = route;
        this.toast = toast;
        this.loader = loader;
        this._gs = _gs;
        this.alrtCtrl = alrtCtrl;
        this.actionSheetController = actionSheetController;
        this.storage = storage;
        this.zone = zone;
        this.features = [];
        this.selectedAmenities = [];
        this.url = src_app_pages_config_config__WEBPACK_IMPORTED_MODULE_4__["config"].url;
        this.videoUrl = '';
        this.images = [
            { name: 'Main Image', url: '' },
            { name: 'Image 2', url: '' }
        ];
        this.imageResponse = [];
        this.videoUrls = [];
        this.route.queryParams.subscribe(params => {
            if (params) {
                console.log(params);
                if (params.spaceDetails) {
                    this.spaceDetails = JSON.parse(params.spaceDetails);
                    if (this.spaceDetails._id) {
                        this.spaceId = this.spaceDetails._id;
                    }
                    this.priviousPage = params.priviousPage;
                    setTimeout(() => {
                        this.addSpaceInfo(this.spaceDetails);
                    }, 500);
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
                        this.placeMeta();
                    }
                });
            }
        });
    }
    addSpaceInfo(spaceDetails) {
        console.log(spaceDetails);
        console.log(spaceDetails.amenities);
        if (spaceDetails._id) {
            this.spaceId = spaceDetails._id;
        }
        if (spaceDetails.amenities) {
            console.log(this.features);
            this.features.map(x => {
                spaceDetails.amenities.map(y => {
                    if (x._id === y._id) {
                        console.log('I n 68');
                        x['selected'] = true;
                    }
                });
            });
            console.log(this.features);
            // this.selectedAmenities = spaceDetails.amenities;
        }
    }
    backAlert() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const alert = yield this.alrtCtrl.create({
                header: 'Lose your data',
                message: 'You may loose your data. Are you sure that you want to start all over again?',
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
            this.router.navigate(['tabs/my-spaces']);
        }
        else {
            this.router.navigate(['add-address']);
        }
    }
    saveListing() {
        if (this.selectedAmenities.length) {
            this.addSpace(4);
        }
        else {
            this.addSpace(3);
        }
    }
    addSpace(index) {
        if (this.videoUrl) {
            this.videoUrls.push({ type: 'Video', url: this.videoUrl });
        }
        else {
            this.videoUrl = [];
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
                amenities: this.selectedAmenities,
                images: this.imageResponse,
                videos: this.videoUrls,
                additionalInfo: this.spaceDetails.additionalInfo,
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
        this.router.navigate(['space-description'], navigationExtras);
    }
    next(index) {
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
                amenities: this.selectedAmenities,
                images: this.imageResponse,
                videos: this.videoUrls,
                additionalInfo: this.spaceDetails.additionalInfo,
                spaceTypeName: this.spaceDetails.spaceTypeName
            };
            console.log(params);
            console.log('In space-features', this.spaceId);
            if (this.spaceId) {
                params['_id'] = this.spaceId;
            }
            let navigationExtras = {
                queryParams: {
                    spaceDetails: JSON.stringify(params),
                    priviousPage: 'tab4'
                }
            };
            this.router.navigate(['space-publish'], navigationExtras);
        }
    }
    updateSpace(place) {
        console.log(place);
        // return;
        this.loader.present('Updating Space. Please wait..');
        this._api.postRequest(this.url + src_app_pages_config_config__WEBPACK_IMPORTED_MODULE_4__["UNITURL"].updateSpace, place).subscribe((result) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (result.success) {
                this.toast.presentToast(result.message);
            }
            this._gs.sendRefershScreen("refresh");
            this.loader.dismiss();
            this.router.navigate(['tabs/tab4']);
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
            this.router.navigate(['tabs/tab4']);
        })), (error) => {
            this.loader.dismiss();
            this.toast.presentToast(error.description);
        };
    }
    onCheckChange(ev) {
        console.log(ev);
        if (ev.detail.checked == true) {
            this.selectedAmenities.push(ev.detail.value);
        }
        else {
            let newArray = this.selectedAmenities.filter(x => {
                return x !== ev.detail.value;
            });
            this.selectedAmenities = newArray;
        }
        console.log(this.selectedAmenities);
    }
    placeMeta() {
        const params = {
            apiKey: src_app_pages_config_config__WEBPACK_IMPORTED_MODULE_4__["KEY"].apikey
        };
        this._api.postRequest(this.url + src_app_pages_config_config__WEBPACK_IMPORTED_MODULE_4__["UNITURL"].placeMeta, params).subscribe((result) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (result.success) {
                this.features = result.data.list.amenities;
            }
        }));
    }
    uploadImage(image, index) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const options = {
                quality: 100,
                allowEditing: false,
                resultType: _capacitor_core__WEBPACK_IMPORTED_MODULE_10__["CameraResultType"].Base64,
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
                let url = this.url + src_app_pages_config_config__WEBPACK_IMPORTED_MODULE_4__["URL"].imageUpload;
                this._api.uploadBase64image(url, params).then((response) => {
                    this.loader.dismiss();
                    if (response.success) {
                        if (response.data && response.data.url) {
                            console.log(response.data.url);
                            this.zone.run(() => {
                                this.images[index].url = response.data.url;
                                this.imageResponse.push(response.data.url);
                            });
                        }
                    }
                });
            }
        });
    }
    addMoreImages() {
        this.images.push({ name: `Image ${this.images.length + 1}`, url: '' });
    }
    deleteImage(image, index) {
        this.images[index].url = '';
        this.imageResponse.pop(index);
        console.log(this.imageResponse);
    }
};
SpaceFeaturesPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: src_app_services_api_service_service__WEBPACK_IMPORTED_MODULE_5__["ApiService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: src_app_services_toast_service__WEBPACK_IMPORTED_MODULE_8__["ToastService"] },
    { type: src_app_services_loader_service__WEBPACK_IMPORTED_MODULE_7__["LoaderService"] },
    { type: src_app_services_global_service__WEBPACK_IMPORTED_MODULE_6__["GlobalService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ActionSheetController"] },
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_9__["Storage"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"] }
];
SpaceFeaturesPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-space-features',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./space-features.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/owner/Add-space/space-features/space-features.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./space-features.page.scss */ "./src/app/pages/owner/Add-space/space-features/space-features.page.scss")).default]
    })
], SpaceFeaturesPage);



/***/ })

}]);
//# sourceMappingURL=pages-owner-Add-space-space-features-space-features-module-es2015.js.map