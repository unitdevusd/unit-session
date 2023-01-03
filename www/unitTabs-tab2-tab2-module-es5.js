(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["unitTabs-tab2-tab2-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/unitTabs/tab2/tab2.page.html":
    /*!******************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/unitTabs/tab2/tab2.page.html ***!
      \******************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppPagesUnitTabsTab2Tab2PageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header [translucent]=\"true\"  class=\"ion-no-border\">\r\n    <ion-toolbar>\r\n      <ion-title>My Bookings</ion-title>\r\n      <ion-buttons slot=\"start\">\r\n        <ion-menu-button></ion-menu-button>\r\n      </ion-buttons>\r\n    </ion-toolbar>\r\n  </ion-header>\r\n<ion-content [fullscreen]=\"true\">\r\n  <ion-item style=\"padding-top: 40px;\" *ngIf=\"!logged\" lines=\"none\">\r\n    <ion-button color=\"unit-btn\" expand=\"block\" fill=\"outline\" (click)=\"logIn()\">Log in</ion-button>\r\n  </ion-item>\r\n  <ion-item lines=\"none\" *ngIf=\"!logged\">\r\n    <p class=\"p-text\">\r\n      <a color=\"unit-btn\" routerLink=\"/phone-verification\"> New here? Sign up </a>\r\n    </p>\r\n  </ion-item>\r\n  <div class=\"ion-padding\" *ngIf=\"logged\">\r\n    <ion-segment (ionChange)=\"segmentChanged($event)\" value=\"0\" [(ngModel)]=\"segment\" class=\"tab-padding\">\r\n      <ion-segment-button value=\"0\" class=\"tab-spacing\">\r\n        <ion-label class=\"tab-label\">Upcoming</ion-label>\r\n      </ion-segment-button>\r\n      <ion-segment-button value=\"1\" class=\"tab-spacing\">\r\n        <ion-label class=\"tab-label\">Past</ion-label>\r\n      </ion-segment-button>\r\n      <ion-segment-button value=\"2\" class=\"tab-spacing\">\r\n        <ion-label class=\"tab-label\">Cancelled</ion-label>\r\n      </ion-segment-button>\r\n    </ion-segment>\r\n    <ion-slides #slides (ionSlideDidChange)=\"slideChanged(slides)\" (ionSlidesDidLoad)=\"slideChanged(slides)\"\r\n      scrollbar=\"false\" [options]=\"slideOpts\">\r\n      <ion-slide>\r\n        <ion-list style=\"width: 100%;\" class=\"ion-no-padding\" lines=\"full\">\r\n          <ion-item *ngFor=\"let place of placeData?.bookedlist\" (click)=\"bookingDeatils(place, 'Upcoming')\">\r\n            <ion-grid>\r\n              <ion-row>\r\n                <ion-col class=\"ion-align-self-start\">\r\n                  <ion-avatar *ngIf=\"place.place.images.length\" class=\"full-width\">\r\n                    <img src=\"{{place?.place?.images[0]}}\">\r\n                  </ion-avatar>\r\n                  <ion-avatar *ngIf=\"!place.place.images.length\" class=\"full-width\">\r\n                    <img src=\"../../../../assets/imgs/dummy_space.png\">\r\n                  </ion-avatar>\r\n                </ion-col>\r\n                <ion-col class=\"ion-align-self-center padd-left\">\r\n                  <ion-label>\r\n                    <h3 style=\"font-weight: bold;\">{{place?.place?.name}}</h3>\r\n                    <h6>{{place?.place?.address}}</h6>\r\n                    <h6 class=\"pricing\">${{place?.place?.pricing?.daily}}/<span>day</span></h6>\r\n                    <ion-badge color=\"success\" *ngIf=\"place?.paymentStatus == 'paid'\" class=\"paid\">\r\n                      {{place?.paymentStatus}}</ion-badge>\r\n                    <ion-badge color=\"warning\" *ngIf=\"place?.paymentStatus == 'refund'\" class=\"danger\">\r\n                      {{place?.paymentStatus}}</ion-badge>\r\n                    <ion-badge color=\"danger\" *ngIf=\"place?.paymentStatus == 'notPaid'\" class=\"danger\">\r\n                      {{place?.paymentStatus}}</ion-badge>\r\n                  </ion-label>\r\n                </ion-col>\r\n              </ion-row>\r\n            </ion-grid>\r\n          </ion-item>\r\n          <ion-item *ngIf=\"placeData?.bookedlist.length <= 0\" class=\"cancel-box\">\r\n            <div class=\"ion-padding\">\r\n              <img src=\"../../../../assets/imgs/emptyList.png\">\r\n              <ion-label class=\"cancel-text\"> No upcoming bookings.</ion-label>\r\n            </div>\r\n          </ion-item>\r\n        </ion-list>\r\n      </ion-slide>\r\n      <ion-slide>\r\n        <ion-list style=\"width: 100%;\" class=\"ion-no-padding\" lines=\"full\">\r\n          <ion-item class=\"item-space\" *ngFor=\"let place of placeData?.completedList\"\r\n            (click)=\"bookingDeatils(place, 'Past')\">\r\n            <ion-grid>\r\n              <ion-row>\r\n                <ion-col class=\"ion-align-self-start\">\r\n                  <ion-avatar *ngIf=\"place.place.images.length\" class=\"full-width\">\r\n                    <img src=\"{{place?.place?.images[0]}}\">\r\n                  </ion-avatar>\r\n                  <ion-avatar *ngIf=\"!place.place.images.length\" class=\"full-width\">\r\n                    <img src=\"../../../../assets/imgs/dummy_space.png\">\r\n                  </ion-avatar>\r\n                </ion-col>\r\n                <ion-col class=\"ion-align-self-center padd-left\">\r\n                  <ion-label>\r\n                    <h3>{{place?.place?.name}}</h3>\r\n                    <h6>{{place?.place?.address}}</h6>\r\n                    <h6 class=\"pricing\">${{place?.place?.pricing?.daily}}/<span>day</span></h6>\r\n                    <ion-badge color=\"success\" *ngIf=\"place?.paymentStatus == 'paid'\" class=\"paid\">\r\n                      {{place?.paymentStatus}}</ion-badge>\r\n                    <ion-badge color=\"warning\" *ngIf=\"place?.paymentStatus == 'refund'\" class=\"danger\">\r\n                      {{place?.paymentStatus}}</ion-badge>\r\n                    <ion-badge color=\"danger\" *ngIf=\"place?.paymentStatus == 'notPaid'\" class=\"danger\">\r\n                      {{place?.paymentStatus}}</ion-badge>\r\n                  </ion-label>\r\n                </ion-col>\r\n              </ion-row>\r\n            </ion-grid>\r\n          </ion-item>\r\n          <ion-item *ngIf=\"placeData?.completedList.length <= 0\" class=\"cancel-box\">\r\n            <div class=\"ion-padding\">\r\n              <img src=\"../../../../assets/imgs/emptyList.png\">\r\n              <ion-label class=\"cancel-text\"> No past bookings.</ion-label>\r\n            </div>\r\n          </ion-item>\r\n        </ion-list>\r\n      </ion-slide>\r\n      <ion-slide>\r\n        <ion-list style=\"width: 100%;\" class=\"ion-no-padding\" lines=\"full\">\r\n          <ion-item class=\"item-space\" *ngFor=\"let place of placeData?.cancledList\"\r\n            (click)=\"bookingDeatils(place, 'Canceled')\">\r\n            <ion-grid>\r\n              <ion-row>\r\n                <ion-col class=\"ion-align-self-start\">\r\n                  <ion-avatar *ngIf=\"place.place.images.length\" class=\"full-width\">\r\n                    <img src=\"{{place?.place?.images[0]}}\">\r\n                  </ion-avatar>\r\n                  <ion-avatar *ngIf=\"!place.place.images.length\" class=\"full-width\">\r\n                    <img src=\"../../../../assets/imgs/dummy_space.png\">\r\n                  </ion-avatar>\r\n                </ion-col>\r\n                <ion-col class=\"ion-align-self-center\">\r\n                  <ion-label>\r\n                    <h3 style=\"font-weight: bold;\">{{place?.place?.name}}</h3>\r\n                    <h6 style=\"margin-top: 10px;\">{{place?.place?.address}}</h6>\r\n                    <h6 class=\"pricing\">${{place?.place?.pricing?.daily}}/<span>day</span></h6>\r\n                  </ion-label>\r\n                </ion-col>\r\n                <ion-col class=\"ion-align-self-end\">\r\n                  <ion-label>\r\n                    <ion-badge style=\"margin-top: 10px;\" color=\"success\" *ngIf=\"place?.paymentStatus == 'paid'\">\r\n                      {{place?.paymentStatus}}</ion-badge>\r\n                    <ion-badge style=\"margin-top: 10px;\" color=\"warning\" *ngIf=\"place?.paymentStatus == 'refund'\">\r\n                      {{place?.paymentStatus}}</ion-badge>\r\n                    <ion-badge style=\"margin-top: 10px;\" color=\"danger\" *ngIf=\"place?.paymentStatus == 'notPaid'\">\r\n                      {{place?.paymentStatus}}</ion-badge>\r\n                  </ion-label>\r\n                </ion-col>\r\n              </ion-row>\r\n            </ion-grid>\r\n          </ion-item>\r\n          <ion-item *ngIf=\"placeData?.cancledList.length <= 0 \" class=\"cancel-box\">\r\n            <div class=\"ion-padding\">\r\n              <img src=\"../../../../assets/imgs/emptyList2.png\">\r\n              <ion-label class=\"cancel-text\"> No canceled bookings.</ion-label>\r\n            </div>\r\n          </ion-item>\r\n        </ion-list>\r\n      </ion-slide>\r\n    </ion-slides>\r\n  </div>\r\n</ion-content>\r\n";
      /***/
    },

    /***/
    "./src/app/pages/unitTabs/tab2/tab2-routing.module.ts":
    /*!************************************************************!*\
      !*** ./src/app/pages/unitTabs/tab2/tab2-routing.module.ts ***!
      \************************************************************/

    /*! exports provided: Tab2PageRoutingModule */

    /***/
    function srcAppPagesUnitTabsTab2Tab2RoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Tab2PageRoutingModule", function () {
        return Tab2PageRoutingModule;
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


      var _tab2_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./tab2.page */
      "./src/app/pages/unitTabs/tab2/tab2.page.ts");

      var routes = [{
        path: '',
        component: _tab2_page__WEBPACK_IMPORTED_MODULE_3__["Tab2Page"]
      }];

      var Tab2PageRoutingModule = function Tab2PageRoutingModule() {
        _classCallCheck(this, Tab2PageRoutingModule);
      };

      Tab2PageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], Tab2PageRoutingModule);
      /***/
    },

    /***/
    "./src/app/pages/unitTabs/tab2/tab2.module.ts":
    /*!****************************************************!*\
      !*** ./src/app/pages/unitTabs/tab2/tab2.module.ts ***!
      \****************************************************/

    /*! exports provided: Tab2PageModule */

    /***/
    function srcAppPagesUnitTabsTab2Tab2ModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Tab2PageModule", function () {
        return Tab2PageModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/forms */
      "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
      /* harmony import */


      var _tab2_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./tab2.page */
      "./src/app/pages/unitTabs/tab2/tab2.page.ts");
      /* harmony import */


      var _tab2_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./tab2-routing.module */
      "./src/app/pages/unitTabs/tab2/tab2-routing.module.ts");

      var Tab2PageModule = function Tab2PageModule() {
        _classCallCheck(this, Tab2PageModule);
      };

      Tab2PageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        imports: [_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonicModule"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _tab2_routing_module__WEBPACK_IMPORTED_MODULE_6__["Tab2PageRoutingModule"]],
        declarations: [_tab2_page__WEBPACK_IMPORTED_MODULE_5__["Tab2Page"]]
      })], Tab2PageModule);
      /***/
    },

    /***/
    "./src/app/pages/unitTabs/tab2/tab2.page.scss":
    /*!****************************************************!*\
      !*** ./src/app/pages/unitTabs/tab2/tab2.page.scss ***!
      \****************************************************/

    /*! exports provided: default */

    /***/
    function srcAppPagesUnitTabsTab2Tab2PageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "ion-content ion-toolbar {\n  --background: translucent;\n}\n\n.item-space {\n  padding-top: 10px;\n}\n\n.sc-ion-label-ios-s h3,\n.sc-ion-label-ios-s h4,\n.sc-ion-label-ios-s h5,\n.sc-ion-label-ios-s h6 {\n  margin-left: 0;\n  margin-right: 0;\n  margin-top: 0;\n  margin-bottom: 3px;\n  font-size: 14px;\n  font-weight: 300;\n  line-height: normal;\n}\n\nion-item ion-label h2 {\n  font-size: medium;\n  font-weight: bold;\n  color: \"quaternary\";\n}\n\nion-item ion-button {\n  height: 100%;\n}\n\n.p-text {\n  font-size: 14px;\n  line-height: 1.5;\n  color: var(--ion-color-step-600, #60646b);\n}\n\n.p-text a {\n  text-decoration: none;\n  color: #ed1b25;\n}\n\n.tab-label {\n  font-size: 13px;\n  font-family: \"helveticaneuebold\";\n}\n\n.tab-spacing {\n  padding: 5px 0;\n  background-color: \"primary\";\n}\n\n.tab-padding {\n  border-radius: 10px;\n  margin-bottom: 20px;\n}\n\n.full-width {\n  width: 120%;\n  height: 100%;\n}\n\n.full-width img {\n  border-radius: 20px;\n  width: 300px;\n  display: block;\n  height: 95px;\n  margin-right: 24px;\n}\n\nh3 {\n  font-size: 13px !important;\n  color: #000;\n  font-family: \"helveticaneuebold\";\n  font-weight: 400 !important;\n}\n\nh6 {\n  margin-top: 4px;\n  font-size: 11px !important;\n  color: #000;\n  font-family: \"helveticaneuebold\";\n  font-weight: 400 !important;\n}\n\n.danger {\n  --ion-color-base: #fff !important;\n  --ion-color-contrast: #ff703b !important;\n  text-transform: capitalize;\n  padding-left: 0;\n  font-family: medium;\n  font-size: 13px;\n  padding-top: 10px;\n}\n\n.paid {\n  --ion-color-base: #fff !important;\n  --ion-color-contrast: #1dc916 !important;\n  text-transform: capitalize;\n  padding-left: 0;\n  font-family: medium;\n  font-size: 13px;\n}\n\n.padd-left {\n  margin-left: 40px;\n}\n\n.padding-none {\n  padding: 0;\n}\n\n.cancel-text {\n  text-align: center;\n  font-size: 14px;\n  font-family: \"helveticaneuebold\";\n  text-align: center;\n}\n\n.ion-padding {\n  width: 100%;\n}\n\n.cancel-box {\n  --inner-border-width: 0;\n}\n\n.cancel-box img {\n  display: block;\n  margin: 0 auto;\n}\n\n.pricing {\n  text-align: left;\n  color: #000;\n  font-size: 11px;\n  font-family: \"medium\";\n  font-weight: 400;\n}\n\n.pricing span {\n  color: #9b9b9b;\n}\n\nhr {\n  display: block;\n  margin-top: 0.5em;\n  margin-bottom: 0.5em;\n  margin-left: 25px;\n  margin-right: 25px;\n  border: 0.5px solid #cacaca;\n  height: 0px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvdW5pdFRhYnMvdGFiMi90YWIyLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHlCQUFhO0FBQ2pCOztBQUVFO0VBQ0UsaUJBQWlCO0FBQ3JCOztBQUVFOzs7O0VBSUUsY0FBYztFQUNkLGVBQWU7RUFDZixhQUFhO0VBQ2Isa0JBQWtCO0VBQ2xCLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsbUJBQW1CO0FBQ3ZCOztBQUVFO0VBR00saUJBQWlCO0VBQ2pCLGlCQUFpQjtFQUNqQixtQkFBbUI7QUFEM0I7O0FBSkU7RUFTSSxZQUFZO0FBRGxCOztBQUlFO0VBQ0UsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQix5Q0FBeUM7QUFEN0M7O0FBRkU7RUFLSSxxQkFBcUI7RUFDckIsY0FBYztBQUNwQjs7QUFFRTtFQUNFLGVBQWU7RUFFZixnQ0FBZ0M7QUFBcEM7O0FBRUU7RUFDRSxjQUFjO0VBQ2QsMkJBQTJCO0FBQy9COztBQUNFO0VBQ0UsbUJBQW1CO0VBQ25CLG1CQUFtQjtBQUV2Qjs7QUFBRTtFQUNFLFdBQVc7RUFDWCxZQUFZO0FBR2hCOztBQUxFO0VBSUksbUJBQW1CO0VBQ25CLFlBQVk7RUFDWixjQUFjO0VBQ2QsWUFBWTtFQUNaLGtCQUFrQjtBQUt4Qjs7QUFGRTtFQUNFLDBCQUEwQjtFQUMxQixXQUFXO0VBQ1gsZ0NBQWdDO0VBQ2hDLDJCQUEyQjtBQUsvQjs7QUFIRTtFQUNFLGVBQWU7RUFDZiwwQkFBMEI7RUFDMUIsV0FBVztFQUNYLGdDQUFnQztFQUNoQywyQkFBMkI7QUFNL0I7O0FBSkU7RUFDRSxpQ0FBaUI7RUFDakIsd0NBQXFCO0VBQ3JCLDBCQUEwQjtFQUMxQixlQUFlO0VBQ2YsbUJBQW1CO0VBQ25CLGVBQWU7RUFDZixpQkFBaUI7QUFPckI7O0FBTEU7RUFDRSxpQ0FBaUI7RUFDakIsd0NBQXFCO0VBQ3JCLDBCQUEwQjtFQUMxQixlQUFlO0VBQ2YsbUJBQW1CO0VBQ25CLGVBQWU7QUFRbkI7O0FBTkU7RUFDRSxpQkFBaUI7QUFTckI7O0FBUEU7RUFDRSxVQUFVO0FBVWQ7O0FBUkU7RUFDRSxrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLGdDQUFnQztFQUNoQyxrQkFBa0I7QUFXdEI7O0FBVEU7RUFDRSxXQUFXO0FBWWY7O0FBVkU7RUFDRSx1QkFBcUI7QUFhekI7O0FBWEU7RUFDRSxjQUFjO0VBQ2QsY0FBYztBQWNsQjs7QUFaRTtFQUNFLGdCQUFnQjtFQUNoQixXQUFXO0VBQ1gsZUFBZTtFQUNmLHFCQUFxQjtFQUNyQixnQkFBZ0I7QUFlcEI7O0FBcEJFO0VBT0ksY0FBYztBQWlCcEI7O0FBYkU7RUFDRSxjQUFjO0VBQ2QsaUJBQWlCO0VBQ2pCLG9CQUFvQjtFQUNwQixpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLDJCQUEyQjtFQUMzQixXQUFXO0FBZ0JmIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvdW5pdFRhYnMvdGFiMi90YWIyLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jb250ZW50IGlvbi10b29sYmFyIHtcclxuICAgIC0tYmFja2dyb3VuZDogdHJhbnNsdWNlbnQ7XHJcbiAgfVxyXG4gIFxyXG4gIC5pdGVtLXNwYWNlIHtcclxuICAgIHBhZGRpbmctdG9wOiAxMHB4O1xyXG4gIH1cclxuICBcclxuICAuc2MtaW9uLWxhYmVsLWlvcy1zIGgzLFxyXG4gIC5zYy1pb24tbGFiZWwtaW9zLXMgaDQsXHJcbiAgLnNjLWlvbi1sYWJlbC1pb3MtcyBoNSxcclxuICAuc2MtaW9uLWxhYmVsLWlvcy1zIGg2IHtcclxuICAgIG1hcmdpbi1sZWZ0OiAwO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAwO1xyXG4gICAgbWFyZ2luLXRvcDogMDtcclxuICAgIG1hcmdpbi1ib3R0b206IDNweDtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbiAgICBsaW5lLWhlaWdodDogbm9ybWFsO1xyXG4gIH1cclxuICBcclxuICBpb24taXRlbSB7XHJcbiAgICBpb24tbGFiZWwge1xyXG4gICAgICBoMiB7XHJcbiAgICAgICAgZm9udC1zaXplOiBtZWRpdW07XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgY29sb3I6IFwicXVhdGVybmFyeVwiO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBpb24tYnV0dG9uIHtcclxuICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgfVxyXG4gIH1cclxuICAucC10ZXh0IHtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAxLjU7XHJcbiAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXN0ZXAtNjAwLCAjNjA2NDZiKTtcclxuICAgIGEge1xyXG4gICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICAgIGNvbG9yOiAjZWQxYjI1O1xyXG4gICAgfVxyXG4gIH1cclxuICAudGFiLWxhYmVsIHtcclxuICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICAgIC8vIC0tYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xyXG4gICAgZm9udC1mYW1pbHk6IFwiaGVsdmV0aWNhbmV1ZWJvbGRcIjtcclxuICB9XHJcbiAgLnRhYi1zcGFjaW5nIHtcclxuICAgIHBhZGRpbmc6IDVweCAwO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogXCJwcmltYXJ5XCI7XHJcbiAgfVxyXG4gIC50YWItcGFkZGluZyB7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuICB9XHJcbiAgLmZ1bGwtd2lkdGgge1xyXG4gICAgd2lkdGg6IDEyMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBpbWcge1xyXG4gICAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG4gICAgICB3aWR0aDogMzAwcHg7XHJcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICBoZWlnaHQ6IDk1cHg7XHJcbiAgICAgIG1hcmdpbi1yaWdodDogMjRweDtcclxuICAgIH1cclxuICB9XHJcbiAgaDMge1xyXG4gICAgZm9udC1zaXplOiAxM3B4ICFpbXBvcnRhbnQ7XHJcbiAgICBjb2xvcjogIzAwMDtcclxuICAgIGZvbnQtZmFtaWx5OiBcImhlbHZldGljYW5ldWVib2xkXCI7XHJcbiAgICBmb250LXdlaWdodDogNDAwICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG4gIGg2IHtcclxuICAgIG1hcmdpbi10b3A6IDRweDtcclxuICAgIGZvbnQtc2l6ZTogMTFweCAhaW1wb3J0YW50O1xyXG4gICAgY29sb3I6ICMwMDA7XHJcbiAgICBmb250LWZhbWlseTogXCJoZWx2ZXRpY2FuZXVlYm9sZFwiO1xyXG4gICAgZm9udC13ZWlnaHQ6IDQwMCAhaW1wb3J0YW50O1xyXG4gIH1cclxuICAuZGFuZ2VyIHtcclxuICAgIC0taW9uLWNvbG9yLWJhc2U6ICNmZmYgIWltcG9ydGFudDtcclxuICAgIC0taW9uLWNvbG9yLWNvbnRyYXN0OiAjZmY3MDNiICFpbXBvcnRhbnQ7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcclxuICAgIHBhZGRpbmctbGVmdDogMDtcclxuICAgIGZvbnQtZmFtaWx5OiBtZWRpdW07XHJcbiAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgICBwYWRkaW5nLXRvcDogMTBweDtcclxuICB9XHJcbiAgLnBhaWQge1xyXG4gICAgLS1pb24tY29sb3ItYmFzZTogI2ZmZiAhaW1wb3J0YW50O1xyXG4gICAgLS1pb24tY29sb3ItY29udHJhc3Q6ICMxZGM5MTYgIWltcG9ydGFudDtcclxuICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xyXG4gICAgcGFkZGluZy1sZWZ0OiAwO1xyXG4gICAgZm9udC1mYW1pbHk6IG1lZGl1bTtcclxuICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICB9XHJcbiAgLnBhZGQtbGVmdCB7XHJcbiAgICBtYXJnaW4tbGVmdDogNDBweDtcclxuICB9XHJcbiAgLnBhZGRpbmctbm9uZSB7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gIH1cclxuICAuY2FuY2VsLXRleHQge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgZm9udC1mYW1pbHk6IFwiaGVsdmV0aWNhbmV1ZWJvbGRcIjtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB9XHJcbiAgLmlvbi1wYWRkaW5nIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gIH1cclxuICAuY2FuY2VsLWJveCB7XHJcbiAgICAtLWlubmVyLWJvcmRlci13aWR0aDogMDtcclxuICB9XHJcbiAgLmNhbmNlbC1ib3ggaW1nIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgfVxyXG4gIC5wcmljaW5nIHtcclxuICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICBjb2xvcjogIzAwMDtcclxuICAgIGZvbnQtc2l6ZTogMTFweDtcclxuICAgIGZvbnQtZmFtaWx5OiBcIm1lZGl1bVwiO1xyXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgIHNwYW4ge1xyXG4gICAgICBjb2xvcjogIzliOWI5YjtcclxuICAgIH1cclxuICB9XHJcbiAgXHJcbiAgaHIge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBtYXJnaW4tdG9wOiAwLjVlbTtcclxuICAgIG1hcmdpbi1ib3R0b206IDAuNWVtO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDI1cHg7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDI1cHg7XHJcbiAgICBib3JkZXI6IDAuNXB4IHNvbGlkICNjYWNhY2E7XHJcbiAgICBoZWlnaHQ6IDBweDtcclxuICB9Il19 */";
      /***/
    },

    /***/
    "./src/app/pages/unitTabs/tab2/tab2.page.ts":
    /*!**************************************************!*\
      !*** ./src/app/pages/unitTabs/tab2/tab2.page.ts ***!
      \**************************************************/

    /*! exports provided: Tab2Page */

    /***/
    function srcAppPagesUnitTabsTab2Tab2PageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Tab2Page", function () {
        return Tab2Page;
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


      var src_app_services_api_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/services/api-service.service */
      "./src/app/services/api-service.service.ts");
      /* harmony import */


      var src_app_services_global_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/services/global.service */
      "./src/app/services/global.service.ts");
      /* harmony import */


      var src_app_services_loader_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/services/loader.service */
      "./src/app/services/loader.service.ts");
      /* harmony import */


      var _config_config__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../config/config */
      "./src/app/pages/config/config.ts");
      /* harmony import */


      var _ionic_storage__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @ionic/storage */
      "./node_modules/@ionic/storage/__ivy_ngcc__/fesm2015/ionic-storage.js");
      /* harmony import */


      var src_app_services_toast_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! src/app/services/toast.service */
      "./src/app/services/toast.service.ts");
      /* harmony import */


      var src_app_utilities_mainfunction__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! src/app/utilities/mainfunction */
      "./src/app/utilities/mainfunction.ts");
      /* harmony import */


      var moment__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! moment */
      "./node_modules/moment/moment.js");
      /* harmony import */


      var moment__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_10__);

      var Tab2Page = /*#__PURE__*/function () {
        function Tab2Page(router, _apiService, _loader, _gs, storage, _toast) {
          var _this = this;

          _classCallCheck(this, Tab2Page);

          this.router = router;
          this._apiService = _apiService;
          this._loader = _loader;
          this._gs = _gs;
          this.storage = storage;
          this._toast = _toast;
          this.segment = 0;
          this.url = _config_config__WEBPACK_IMPORTED_MODULE_6__["config"].url;
          this.logged = false;

          this._gs.getUpdatedTabs().subscribe(function (status) {
            if (status) {
              _this.token = status.token;
              _this.orgId = status.orgId;
              _this.logged = true;

              _this.getBookingInfo();
            }
          });

          this._gs.getMyStaysRefresh().subscribe(function (status) {
            if (status) {
              _this.getBookingInfo();
            }
          }); // logout status


          this._gs.getLogOut().subscribe(function (status) {
            if (status) {
              _this.logged = false;
            }
          });
        }

        _createClass(Tab2Page, [{
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
                    _this2.token = session;
                    _this2.orgId = org;
                    _this2.logged = true;

                    _this2.getBookingInfo();
                  }
                });
              }
            });
          }
        }, {
          key: "getBookingInfo",
          value: function getBookingInfo() {
            this.getMyStays();
          }
        }, {
          key: "getMyStays",
          value: function getMyStays() {
            var _this3 = this;

            this._loader.present();

            if (this.token && this.orgId) {
              var params = {
                token: this.token,
                orgId: this.orgId
              };
              console.log(this.url + _config_config__WEBPACK_IMPORTED_MODULE_6__["UNITURL"].mybookings);
              console.log(params);
              this._apiService.postRequest(this.url + _config_config__WEBPACK_IMPORTED_MODULE_6__["UNITURL"].mybookings, params).subscribe(function (result) {
                return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this3, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
                  return regeneratorRuntime.wrap(function _callee$(_context) {
                    while (1) {
                      switch (_context.prev = _context.next) {
                        case 0:
                          console.log(result);

                          if (result.success) {
                            console.log('', result.data.bookingList);
                            this.placeData = Object(src_app_utilities_mainfunction__WEBPACK_IMPORTED_MODULE_9__["segment"])(result.data.bookingList);

                            if (this.placeData.bookedlist.length || this.placeData.cancledList.length || this.placeData.completedList.length) {
                              this.placeData.bookedlist.reverse();
                              this.placeData.cancledList.reverse();
                              this.placeData.completedList.reverse();
                            }
                          }

                          this._loader.dismiss();

                        case 3:
                        case "end":
                          return _context.stop();
                      }
                    }
                  }, _callee, this);
                }));
              }), function (error) {
                _this3._loader.dismiss();

                _this3._toast.presentToast(error.description);
              };
            }
          }
        }, {
          key: "logIn",
          value: function logIn() {
            var navigationExtras = {
              queryParams: {
                from: 'tabs/tab2'
              }
            };
            this.router.navigate(['login'], navigationExtras);
          }
        }, {
          key: "segmentChanged",
          value: function segmentChanged(ev) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      _context2.next = 2;
                      return this.selectedSlider.slideTo(this.segment);

                    case 2:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2, this);
            }));
          }
        }, {
          key: "slideChanged",
          value: function slideChanged(slider) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
              var _this4 = this;

              return regeneratorRuntime.wrap(function _callee3$(_context3) {
                while (1) {
                  switch (_context3.prev = _context3.next) {
                    case 0:
                      this.selectedSlider = slider;
                      slider.getActiveIndex().then(function (value) {
                        console.log(value);
                        _this4.segment = value;
                      });

                    case 2:
                    case "end":
                      return _context3.stop();
                  }
                }
              }, _callee3, this);
            }));
          }
        }, {
          key: "bookingDeatils",
          value: function bookingDeatils(place, tabType) {
            if (place.bookedStatus == "canceled" || place.bookedStatus == "complete") {
              this.navigateToDetails(place, tabType);
            } else {
              if (place.bookedStatus == "confirm") {
                if (place.paymentStatus == "notPaid") {
                  this.navigateToPayment(place);
                } else {
                  this.navigateToDetails(place, tabType);
                }
              } else {
                if (place.paymentStatus == "notPaid") {
                  this.navigateToPayment(place);
                } else {
                  this.navigateToDetails(place, tabType);
                }
              }
            }
          }
        }, {
          key: "navigateToPayment",
          value: function navigateToPayment(place) {
            var newStartDate = moment__WEBPACK_IMPORTED_MODULE_10__(place.startDate).format('YYYY-MM-DD');
            var newEndDate = moment__WEBPACK_IMPORTED_MODULE_10__(place.endDate).format('YYYY-MM-DD');
            var noOfDays = Object(src_app_utilities_mainfunction__WEBPACK_IMPORTED_MODULE_9__["getDays"])(newStartDate, newEndDate);
            console.log(noOfDays);
            var params = {
              endDate: place.endDate,
              placeId: place._id,
              startDate: place.startDate
            };
            var navigationExtras = {
              queryParams: {
                bookPlaceParams: JSON.stringify(params),
                placeData: JSON.stringify(place),
                from: 'tabs/tab2'
              }
            };
            this.router.navigate(['show-payment-info'], navigationExtras);
          }
        }, {
          key: "navigateToDetails",
          value: function navigateToDetails(place, tabType) {
            var navigationExtras = {
              queryParams: {
                type: "Owner",
                tabType: tabType
              }
            };
            this.router.navigate(['booking-detail', place._id], navigationExtras);
          }
        }]);

        return Tab2Page;
      }();

      Tab2Page.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }, {
          type: src_app_services_api_service_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"]
        }, {
          type: src_app_services_loader_service__WEBPACK_IMPORTED_MODULE_5__["LoaderService"]
        }, {
          type: src_app_services_global_service__WEBPACK_IMPORTED_MODULE_4__["GlobalService"]
        }, {
          type: _ionic_storage__WEBPACK_IMPORTED_MODULE_7__["Storage"]
        }, {
          type: src_app_services_toast_service__WEBPACK_IMPORTED_MODULE_8__["ToastService"]
        }];
      };

      Tab2Page = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-tab2',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./tab2.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/unitTabs/tab2/tab2.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./tab2.page.scss */
        "./src/app/pages/unitTabs/tab2/tab2.page.scss"))["default"]]
      })], Tab2Page);
      /***/
    }
  }]);
})();
//# sourceMappingURL=unitTabs-tab2-tab2-module-es5.js.map