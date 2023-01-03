(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-owner-Add-space-space-details-space-details-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/owner/Add-space/space-details/space-details.page.html":
    /*!*******************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/owner/Add-space/space-details/space-details.page.html ***!
      \*******************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppPagesOwnerAddSpaceSpaceDetailsSpaceDetailsPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header class=\"ion-no-border\">\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-button (click)=\"backAlert()\">\r\n        <ion-icon color=\"unit-btn\" name=\"chevron-back-outline\"></ion-icon>\r\n      </ion-button>\r\n    </ion-buttons>\r\n    <ion-buttons slot=\"end\">\r\n      <ion-button (click)=\"backAlert()\">\r\n        <ion-icon color=\"unit-btn\" name=\"close-outline\"></ion-icon>\r\n      </ion-button>\r\n    </ion-buttons>\r\n    <ion-title class=\"main-title\">Unit Details</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n<ion-content class=\"ion-padding\" scroll-y=\"false\">\r\n  <form [formGroup]=\"addPlace\">\r\n    <ion-list>\r\n      <ion-item lines=\"none\">\r\n        <ion-label position=\"stacked\">Name your Unit</ion-label>\r\n        <ion-input type=\"text\" placeholder=\"The Sparkle Space\" formControlName=\"name\" class=\"height\"></ion-input>\r\n      </ion-item>\r\n      <ion-item lines=\"none\">\r\n        <ion-label position=\"stacked\">Location</ion-label>\r\n        <ion-input type=\"text\" placeholder=\"Location\" formControlName=\"address\" class=\"height\"></ion-input>\r\n      </ion-item>\r\n      <ion-item lines=\"none\">\r\n        <ion-label position=\"stacked\" *ngIf=\"spaceType\">Unit Type</ion-label>\r\n        <ion-select [(ngModel)]=\"selectedspaceType\" [ngModelOptions]=\"{standalone: true}\"\r\n          (ionChange)=\"onSelectChange($event)\">\r\n          <ion-select-option [value]=\"s._id\" *ngFor=\"let s of spaceType\">\r\n            {{s.spaceType}}\r\n          </ion-select-option>\r\n        </ion-select>\r\n      </ion-item>\r\n      <ion-item lines=\"none\" *ngIf=\"displayOther\">\r\n        <ion-label position=\"stacked\">Enter SpaceType</ion-label>\r\n        <ion-input type=\"text\" placeholder=\"Enter SpaceType\" [(ngModel)]=\"spaceTypeName\" class=\"height\"\r\n          [ngModelOptions]=\"{standalone: true}\"></ion-input>\r\n      </ion-item>\r\n      <ion-list>\r\n        <ion-label class=\"size-tt\">Size <span>(Enter size in Feet)</span></ion-label>\r\n        <ion-grid>\r\n          <ion-row>\r\n            <ion-col>\r\n              <ion-item lines=\"none\">\r\n                <ion-label position=\"stacked\">Length</ion-label>\r\n                <ion-input type=\"number\" formControlName=\"lenght\"></ion-input>\r\n              </ion-item>\r\n            </ion-col>\r\n            <ion-col>\r\n              <ion-item lines=\"none\">\r\n                <ion-label position=\"stacked\">Width</ion-label>\r\n                <ion-input type=\"number\" formControlName=\"breadth\"></ion-input>\r\n              </ion-item>\r\n            </ion-col>\r\n            <ion-col>\r\n              <ion-item lines=\"none\">\r\n                <ion-label position=\"stacked\">Height</ion-label>\r\n                <ion-input type=\"number\" formControlName=\"height\"></ion-input>\r\n              </ion-item>\r\n            </ion-col>\r\n          </ion-row>\r\n        </ion-grid>\r\n      </ion-list>\r\n      <ion-item lines=\"none\">\r\n        <ion-label position=\"stacked\">Description</ion-label>\r\n        <ion-textarea type=\"text\" rows=\"4\" cols=\"20\" placeholder=\"Text here\" formControlName=\"description\">\r\n        </ion-textarea>\r\n      </ion-item>\r\n    </ion-list>\r\n  </form>\r\n</ion-content>\r\n<ion-footer>\r\n  <ion-toolbar>\r\n    <ion-grid>\r\n      <ion-row>\r\n        <ion-col></ion-col>\r\n        <ion-col></ion-col>\r\n        <ion-col class=\"ion-align-self-end\" style=\"margin-left: 35%;\">\r\n          <ion-button color=\"unit-btn\" fill=\"clear\" [disabled]=\"!addPlace.valid\" (click)=\"next(1)\" class=\"next-btn\">\r\n            Next\r\n            <ion-icon slot=\"end\" name=\"chevron-forward-outline\"></ion-icon>\r\n          </ion-button>\r\n        </ion-col>\r\n      </ion-row>\r\n    </ion-grid>\r\n  </ion-toolbar>\r\n</ion-footer>";
      /***/
    },

    /***/
    "./src/app/pages/owner/Add-space/space-details/space-details-routing.module.ts":
    /*!*************************************************************************************!*\
      !*** ./src/app/pages/owner/Add-space/space-details/space-details-routing.module.ts ***!
      \*************************************************************************************/

    /*! exports provided: SpaceDetailsPageRoutingModule */

    /***/
    function srcAppPagesOwnerAddSpaceSpaceDetailsSpaceDetailsRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SpaceDetailsPageRoutingModule", function () {
        return SpaceDetailsPageRoutingModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _space_details_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./space-details.page */
      "./src/app/pages/owner/Add-space/space-details/space-details.page.ts");

      var routes = [{
        path: '',
        component: _space_details_page__WEBPACK_IMPORTED_MODULE_3__["SpaceDetailsPage"]
      }];

      var SpaceDetailsPageRoutingModule = function SpaceDetailsPageRoutingModule() {
        _classCallCheck(this, SpaceDetailsPageRoutingModule);
      };

      SpaceDetailsPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], SpaceDetailsPageRoutingModule);
      /***/
    },

    /***/
    "./src/app/pages/owner/Add-space/space-details/space-details.module.ts":
    /*!*****************************************************************************!*\
      !*** ./src/app/pages/owner/Add-space/space-details/space-details.module.ts ***!
      \*****************************************************************************/

    /*! exports provided: SpaceDetailsPageModule */

    /***/
    function srcAppPagesOwnerAddSpaceSpaceDetailsSpaceDetailsModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SpaceDetailsPageModule", function () {
        return SpaceDetailsPageModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/forms */
      "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var _space_details_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./space-details-routing.module */
      "./src/app/pages/owner/Add-space/space-details/space-details-routing.module.ts");
      /* harmony import */


      var _space_details_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./space-details.page */
      "./src/app/pages/owner/Add-space/space-details/space-details.page.ts");

      var SpaceDetailsPageModule = function SpaceDetailsPageModule() {
        _classCallCheck(this, SpaceDetailsPageModule);
      };

      SpaceDetailsPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _space_details_routing_module__WEBPACK_IMPORTED_MODULE_5__["SpaceDetailsPageRoutingModule"]],
        declarations: [_space_details_page__WEBPACK_IMPORTED_MODULE_6__["SpaceDetailsPage"]]
      })], SpaceDetailsPageModule);
      /***/
    },

    /***/
    "./src/app/pages/owner/Add-space/space-details/space-details.page.scss":
    /*!*****************************************************************************!*\
      !*** ./src/app/pages/owner/Add-space/space-details/space-details.page.scss ***!
      \*****************************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppPagesOwnerAddSpaceSpaceDetailsSpaceDetailsPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "ion-list ion-label {\n  font-size: 16px !important;\n  margin-bottom: 10px !important;\n  color: #3c3939;\n  font-family: \"medium\";\n  opacity: 1;\n}\n\nion-list ion-input {\n  border: 1px solid #CACACA;\n  border-radius: 30px;\n  --padding-start: 15px;\n  margin-bottom: 12px;\n}\n\nion-list ion-textarea {\n  border: 1px solid #CACACA;\n  border-radius: 18px;\n  --padding-start: 15px;\n  margin-bottom: 12px;\n  font-size: 15px;\n  color: #8c8c8c;\n  font-family: medium;\n}\n\nion-list ion-select {\n  border: 1px solid #CACACA;\n  border-radius: 30px;\n  --padding-start: 15px;\n  height: 43px;\n  font-family: medium;\n  margin-bottom: 12px;\n  color: #8c8c8c;\n}\n\n.size-tt {\n  margin-left: 21px !important;\n  margin-top: 12px;\n  display: block;\n  margin-bottom: 0 !important;\n}\n\n.size-tt span {\n  font-family: medium;\n  color: #A1A1A1;\n  font-size: 13px;\n}\n\nion-toolbar ion-button {\n  text-transform: capitalize;\n}\n\n.main-title {\n  font-size: 22px;\n  font-family: medium;\n  font-weight: 400;\n}\n\n.footer-ios ion-toolbar:first-of-type {\n  --border-width: 0 !important;\n  border: none;\n  box-shadow: 0px -3px 10px #EAEAEA;\n}\n\n.next-btn {\n  font-family: 'helveticaneuebold';\n  color: #F43F3F;\n  font-size: 16px;\n}\n\nion-input {\n  --placeholder-color: #CACACA;\n  --placeholder-opacity: 1;\n  font-family: medium;\n  font-size: 15px;\n}\n\nion-footer {\n  height: 9% !important;\n}\n\nion-footer ion-button {\n  margin-top: -3px !important;\n}\n\nion-footer ion-button ion-icon {\n  margin-left: 0 !important;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvb3duZXIvQWRkLXNwYWNlL3NwYWNlLWRldGFpbHMvc3BhY2UtZGV0YWlscy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFFTSwwQkFBMEI7RUFDMUIsOEJBQThCO0VBQzlCLGNBQWM7RUFDZCxxQkFBcUI7RUFDckIsVUFBVTtBQUFoQjs7QUFOQTtFQVNNLHlCQUF5QjtFQUN6QixtQkFBbUI7RUFDbkIscUJBQWdCO0VBQ2hCLG1CQUFtQjtBQUN6Qjs7QUFiQTtFQWlCTSx5QkFBeUI7RUFDekIsbUJBQW1CO0VBQ25CLHFCQUFnQjtFQUNoQixtQkFBbUI7RUFDbkIsZUFBZTtFQUNmLGNBQWM7RUFDZCxtQkFBbUI7QUFBekI7O0FBdkJBO0VBMEJNLHlCQUF5QjtFQUN6QixtQkFBbUI7RUFDbkIscUJBQWdCO0VBQ2hCLFlBQVk7RUFDWixtQkFBbUI7RUFDbkIsbUJBQW1CO0VBQ25CLGNBQWM7QUFDcEI7O0FBRUU7RUFDRSw0QkFBNEI7RUFDNUIsZ0JBQWdCO0VBQ2hCLGNBQWM7RUFDZCwyQkFBMkI7QUFDL0I7O0FBQ0U7RUFDRSxtQkFBbUI7RUFDbkIsY0FBYztFQUNkLGVBQWU7QUFFbkI7O0FBQUU7RUFFSSwwQkFBMEI7QUFFaEM7O0FBQ0U7RUFDRSxlQUFlO0VBQ2IsbUJBQW1CO0VBQ25CLGdCQUFnQjtBQUV0Qjs7QUFBRTtFQUNFLDRCQUFlO0VBQ2YsWUFBWTtFQUNaLGlDQUFpQztBQUdyQzs7QUFBRTtFQUNFLGdDQUFnQztFQUNoQyxjQUFjO0VBQ2QsZUFBZTtBQUduQjs7QUFERTtFQUNFLDRCQUFvQjtFQUNwQix3QkFBc0I7RUFDdEIsbUJBQW1CO0VBQ25CLGVBQWU7QUFJbkI7O0FBQUU7RUFDRSxxQkFBcUI7QUFHekI7O0FBSkU7RUFHSSwyQkFBMkI7QUFLakM7O0FBUkU7RUFLTSx5QkFBeUI7QUFPakMiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9vd25lci9BZGQtc3BhY2Uvc3BhY2UtZGV0YWlscy9zcGFjZS1kZXRhaWxzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1saXN0IHtcclxuICAgIGlvbi1sYWJlbCB7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTZweCAhaW1wb3J0YW50O1xyXG4gICAgICBtYXJnaW4tYm90dG9tOiAxMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgIGNvbG9yOiAjM2MzOTM5O1xyXG4gICAgICBmb250LWZhbWlseTogXCJtZWRpdW1cIjtcclxuICAgICAgb3BhY2l0eTogMTtcclxuICAgIH1cclxuICAgIGlvbi1pbnB1dCB7XHJcbiAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNDQUNBQ0E7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDMwcHg7XHJcbiAgICAgIC0tcGFkZGluZy1zdGFydDogMTVweDsgIFxyXG4gICAgICBtYXJnaW4tYm90dG9tOiAxMnB4O1xyXG4gICAgICAvLyAtLW1pbi1oZWlnaHQ6IDQwcHggIWltcG9ydGFudDtcclxuICAgICAgXHJcbiAgICB9XHJcbiAgICBpb24tdGV4dGFyZWEge1xyXG4gICAgICBib3JkZXI6IDFweCBzb2xpZCAjQ0FDQUNBO1xyXG4gICAgICBib3JkZXItcmFkaXVzOiAxOHB4O1xyXG4gICAgICAtLXBhZGRpbmctc3RhcnQ6IDE1cHg7XHJcbiAgICAgIG1hcmdpbi1ib3R0b206IDEycHg7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgICAgY29sb3I6ICM4YzhjOGM7XHJcbiAgICAgIGZvbnQtZmFtaWx5OiBtZWRpdW07XHJcbiAgICB9XHJcbiAgICBpb24tc2VsZWN0IHtcclxuICAgICAgYm9yZGVyOiAxcHggc29saWQgI0NBQ0FDQTtcclxuICAgICAgYm9yZGVyLXJhZGl1czogMzBweDtcclxuICAgICAgLS1wYWRkaW5nLXN0YXJ0OiAxNXB4O1xyXG4gICAgICBoZWlnaHQ6IDQzcHg7XHJcbiAgICAgIGZvbnQtZmFtaWx5OiBtZWRpdW07XHJcbiAgICAgIG1hcmdpbi1ib3R0b206IDEycHg7XHJcbiAgICAgIGNvbG9yOiAjOGM4YzhjO1xyXG4gICAgfVxyXG4gIH0gXHJcbiAgLnNpemUtdHR7XHJcbiAgICBtYXJnaW4tbGVmdDogMjFweCAhaW1wb3J0YW50O1xyXG4gICAgbWFyZ2luLXRvcDogMTJweDtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMCAhaW1wb3J0YW50O1xyXG4gIH1cclxuICAuc2l6ZS10dCBzcGFue1xyXG4gICAgZm9udC1mYW1pbHk6IG1lZGl1bTtcclxuICAgIGNvbG9yOiAjQTFBMUExO1xyXG4gICAgZm9udC1zaXplOiAxM3B4O1xyXG4gIH1cclxuICBpb24tdG9vbGJhcntcclxuICAgIGlvbi1idXR0b257XHJcbiAgICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xyXG4gICAgfVxyXG4gIH1cclxuICAubWFpbi10aXRsZXtcclxuICAgIGZvbnQtc2l6ZTogMjJweDtcclxuICAgICAgZm9udC1mYW1pbHk6IG1lZGl1bTtcclxuICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICB9XHJcbiAgLmZvb3Rlci1pb3MgaW9uLXRvb2xiYXI6Zmlyc3Qtb2YtdHlwZSB7XHJcbiAgICAtLWJvcmRlci13aWR0aDogMCAhaW1wb3J0YW50O1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgYm94LXNoYWRvdzogMHB4IC0zcHggMTBweCAjRUFFQUVBO1xyXG4gICBcclxuICB9XHJcbiAgLm5leHQtYnRue1xyXG4gICAgZm9udC1mYW1pbHk6ICdoZWx2ZXRpY2FuZXVlYm9sZCc7XHJcbiAgICBjb2xvcjogI0Y0M0YzRjtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICB9XHJcbiAgaW9uLWlucHV0e1xyXG4gICAgLS1wbGFjZWhvbGRlci1jb2xvcjogI0NBQ0FDQTtcclxuICAgIC0tcGxhY2Vob2xkZXItb3BhY2l0eTogMTtcclxuICAgIGZvbnQtZmFtaWx5OiBtZWRpdW07XHJcbiAgICBmb250LXNpemU6IDE1cHg7IFxyXG4gIH1cclxuICBcclxuICBcclxuICBpb24tZm9vdGVye1xyXG4gICAgaGVpZ2h0OiA5JSAhaW1wb3J0YW50O1xyXG4gICAgaW9uLWJ1dHRvbntcclxuICAgICAgbWFyZ2luLXRvcDogLTNweCAhaW1wb3J0YW50O1xyXG4gICAgICBpb24taWNvbntcclxuICAgICAgICBtYXJnaW4tbGVmdDogMCAhaW1wb3J0YW50O1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfSJdfQ== */";
      /***/
    },

    /***/
    "./src/app/pages/owner/Add-space/space-details/space-details.page.ts":
    /*!***************************************************************************!*\
      !*** ./src/app/pages/owner/Add-space/space-details/space-details.page.ts ***!
      \***************************************************************************/

    /*! exports provided: SpaceDetailsPage */

    /***/
    function srcAppPagesOwnerAddSpaceSpaceDetailsSpaceDetailsPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SpaceDetailsPage", function () {
        return SpaceDetailsPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/forms */
      "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var src_app_pages_config_config__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/pages/config/config */
      "./src/app/pages/config/config.ts");
      /* harmony import */


      var src_app_services_api_service_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/app/services/api-service.service */
      "./src/app/services/api-service.service.ts");
      /* harmony import */


      var src_app_services_loader_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! src/app/services/loader.service */
      "./src/app/services/loader.service.ts");
      /* harmony import */


      var _ionic_storage__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @ionic/storage */
      "./node_modules/@ionic/storage/__ivy_ngcc__/fesm2015/ionic-storage.js");
      /* harmony import */


      var src_app_services_toast_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! src/app/services/toast.service */
      "./src/app/services/toast.service.ts");

      var SpaceDetailsPage = /*#__PURE__*/function () {
        function SpaceDetailsPage(router, _fb, _apiService, route, alrtCtrl, _loader, storage, _toast, _zone) {
          var _this = this;

          _classCallCheck(this, SpaceDetailsPage);

          this.router = router;
          this._fb = _fb;
          this._apiService = _apiService;
          this.route = route;
          this.alrtCtrl = alrtCtrl;
          this._loader = _loader;
          this.storage = storage;
          this._toast = _toast;
          this._zone = _zone;
          this.priviousPage = '';
          this.url = src_app_pages_config_config__WEBPACK_IMPORTED_MODULE_5__["config"].url;
          this.spaceDetails = '';
          this.spaceType = [];
          this.spaceTypeName = '';
          this.route.queryParams.subscribe(function (params) {
            if (params) {
              if (params.location) {
                _this.addAddress(params);
              }

              if (params.spaceDetails) {
                _this.spaceDetails = JSON.parse(params.spaceDetails);
                _this.priviousPage = params.priviousPage;
              }
            }
          });
          this.initForm();
        }

        _createClass(SpaceDetailsPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.getUserData();
          }
        }, {
          key: "getUserData",
          value: function getUserData() {
            var _this2 = this;

            this.storage.get("session").then(function (session) {
              if (session) {
                _this2.storage.get("org").then(function (org) {
                  if (org) {
                    _this2._zone.run(function () {
                      _this2.token = session;
                      _this2.orgId = org;

                      _this2.placeMeta();
                    });
                  }
                });
              }
            });
          }
        }, {
          key: "initForm",
          value: function initForm() {
            this.addPlace = this._fb.group({
              name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
              description: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
              address: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
              lenght: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
              breadth: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
              height: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
            });
          }
        }, {
          key: "addAddress",
          value: function addAddress(params) {
            console.log(params);
            var address = JSON.parse(params.location);
            this.lat = Number(address[0].latitude);
            this["long"] = Number(address[0].longitude);
            this.location = params.address;

            if (this.location === 'Address Not Available!') {
              this.location = '';
            }

            this.addPlace.controls['address'].setValue(this.location);
          }
        }, {
          key: "addSpaceInfo",
          value: function addSpaceInfo(spaceDetails) {
            var _this3 = this;

            this._zone.run(function () {
              console.log('inspaced', spaceDetails);
              _this3.selectedspaceType = spaceDetails.spaceType;
              _this3.spaceId = spaceDetails._id;
              console.log(spaceDetails.loc);

              if (spaceDetails.loc) {
                _this3.lat = spaceDetails.loc.coordinates[1];
                _this3["long"] = spaceDetails.loc.coordinates[0];
              }

              _this3.location = spaceDetails.address;

              if (_this3.location === 'Address Not Available!') {
                _this3.location = '';
              }

              _this3.addPlace.controls['address'].setValue(_this3.location);

              _this3.addPlace.controls['name'].setValue(spaceDetails.name);

              _this3.addPlace.controls['description'].setValue(spaceDetails.description);

              _this3.addPlace.controls['lenght'].setValue(spaceDetails.size.lenght);

              _this3.addPlace.controls['breadth'].setValue(spaceDetails.size.breadth);

              _this3.addPlace.controls['height'].setValue(spaceDetails.size.height);

              _this3.spaceTypeName = spaceDetails.spaceTypeName;
            });
          }
        }, {
          key: "next",
          value: function next(index) {
            this.slideIndex = index;
            this.addSpace();
          }
        }, {
          key: "addSpace",
          value: function addSpace() {
            console.log('spaceDe', this.spaceDetails);
            console.log(this.selectedspaceType);
            var params = {
              token: this.token,
              orgId: this.orgId,
              name: this.addPlace.value.name,
              address: this.addPlace.value.address,
              loc: {
                type: "Point",
                coordinates: [this["long"], this.lat]
              },
              description: this.addPlace.value.description,
              size: {
                lenght: this.addPlace.value.lenght,
                breadth: this.addPlace.value.breadth,
                height: this.addPlace.value.height
              },
              spaceType: this.selectedspaceType,
              storeItems: this.spaceDetails.storeItems ? this.spaceDetails.storeItems : '',
              accessStatus: this.spaceDetails.accessStatus ? this.spaceDetails.accessStatus : '',
              timeAccessStatus: this.spaceDetails.timeAccessStatus ? this.spaceDetails.timeAccessStatus : '',
              discountFirstMonth: this.spaceDetails.discountFirstMonth,
              discountPercentage: this.spaceDetails.discountPercentage,
              index: this.slideIndex,
              images: this.spaceDetails.images,
              videos: this.spaceDetails.videos,
              amenities: this.spaceDetails.amenities,
              pricing: this.spaceDetails.pricing,
              additionalInfo: this.spaceDetails.additionalInfo,
              spaceTypeName: this.spaceTypeName
            };

            if (this.spaceId) {
              params['_id'] = this.spaceId;
            }

            var navigationExtras = {
              queryParams: {
                spaceDetails: JSON.stringify(params),
                priviousPage: 'tab4'
              }
            };
            this.router.navigate(['space-properties'], navigationExtras);
          }
        }, {
          key: "backAlert",
          value: function backAlert() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var _this4 = this;

              var alert;
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      _context.next = 2;
                      return this.alrtCtrl.create({
                        header: 'Lose your data',
                        message: 'You may loose your data. Are you sure that you want to start all over again?',
                        buttons: [{
                          text: 'Cancel',
                          role: 'cancel',
                          cssClass: 'secondary',
                          handler: function handler(blah) {}
                        }, {
                          text: 'Back',
                          handler: function handler() {
                            _this4.back();
                          }
                        }]
                      });

                    case 2:
                      alert = _context.sent;
                      _context.next = 5;
                      return alert.present();

                    case 5:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          }
        }, {
          key: "back",
          value: function back() {
            if (this.priviousPage) {
              this.router.navigate(['tabs/my-spaces']);
            } else {
              this.router.navigate(['add-address']);
            }
          }
        }, {
          key: "placeMeta",
          value: function placeMeta() {
            var _this5 = this;

            this._loader.present('');

            var params = {
              apiKey: src_app_pages_config_config__WEBPACK_IMPORTED_MODULE_5__["KEY"].apikey
            };

            this._apiService.postRequest(this.url + src_app_pages_config_config__WEBPACK_IMPORTED_MODULE_5__["UNITURL"].placeMeta, params).subscribe(function (result) {
              return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this5, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
                return regeneratorRuntime.wrap(function _callee2$(_context2) {
                  while (1) {
                    switch (_context2.prev = _context2.next) {
                      case 0:
                        this._loader.dismiss();

                        if (result.success) {
                          this.spaceType = result.data.list.spaceType;
                          this.spaceType.push({
                            _id: "0",
                            "spaceType": "others"
                          });
                          console.log(this.spaceDetails);

                          if (this.spaceDetails) {
                            this.addSpaceInfo(this.spaceDetails);
                          }
                        } else {
                          this._toast.presentToast(result.message);
                        }

                      case 2:
                      case "end":
                        return _context2.stop();
                    }
                  }
                }, _callee2, this);
              }));
            });
          }
        }, {
          key: "onSelectChange",
          value: function onSelectChange(ev) {
            if (ev.detail.value == '0') {
              this.displayOther = true;
            } else {
              this.displayOther = false;
              this.spaceTypeName = '';
            }
          }
        }]);

        return SpaceDetailsPage;
      }();

      SpaceDetailsPage.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
        }, {
          type: src_app_services_api_service_service__WEBPACK_IMPORTED_MODULE_6__["ApiService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"]
        }, {
          type: src_app_services_loader_service__WEBPACK_IMPORTED_MODULE_7__["LoaderService"]
        }, {
          type: _ionic_storage__WEBPACK_IMPORTED_MODULE_8__["Storage"]
        }, {
          type: src_app_services_toast_service__WEBPACK_IMPORTED_MODULE_9__["ToastService"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]
        }];
      };

      SpaceDetailsPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-space-details',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./space-details.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/owner/Add-space/space-details/space-details.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./space-details.page.scss */
        "./src/app/pages/owner/Add-space/space-details/space-details.page.scss"))["default"]]
      })], SpaceDetailsPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=pages-owner-Add-space-space-details-space-details-module-es5.js.map