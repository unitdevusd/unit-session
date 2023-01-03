(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-owner-booking-detail-booking-detail-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/owner/booking-detail/booking-detail.page.html":
    /*!***********************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/owner/booking-detail/booking-detail.page.html ***!
      \***********************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppPagesOwnerBookingDetailBookingDetailPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-content class=\"ion-no-padding\" *ngIf=\"bookingData; else noBooking\">\r\n  <ion-grid class=\"user-details ion-no-padding\">\r\n    <ion-row class=\"ion-no-padding\">\r\n      <ion-col size=\"12\" class=\"ion-no-padding\" *ngIf=\"bookingData.place.images.length\">\r\n        <ion-slides *ngIf=\"bookingData.place.images.length; else noplaceImages\" pager=\"true\" [options]=\"slideOpts\"\r\n          class=\"item-slider\">\r\n          <ion-slide *ngFor=\"let img of bookingData?.place?.images\">\r\n            <img class=\"slider\" src=\"{{img}}\" />\r\n          </ion-slide>\r\n        </ion-slides>\r\n        <div class=\"back\" (click)=\"back()\">\r\n            <img src=\"../../../../assets/imgs/back_two.png\">\r\n        </div>\r\n      </ion-col>\r\n      <!-- No image check -->\r\n      <ng-template #noplaceImages>\r\n        <ion-col size=\"12\" class=\"ion-no-padding\">\r\n          <div style=\"text-align: center;\">\r\n            <img src=\"../../../../assets/imgs/dummy_space.png\" />\r\n          </div>\r\n          <div class=\"back\" (click)=\"back()\"><img src=\"../../../../assets/imgs/back_two.png\"></div>\r\n        </ion-col>\r\n      </ng-template>\r\n    </ion-row>\r\n  </ion-grid>\r\n  <div class=\"content\">\r\n    <ion-grid>\r\n      <ion-row>\r\n        <ion-col size=\"8\">\r\n          <ion-item lines=\"none\">\r\n            <ion-label>\r\n              <h2>{{bookingData?.place?.name}}</h2>\r\n              <h2>{{bookingData?.place?.address}}</h2>\r\n              <div class=\"rating\">\r\n                <ion-icon name=\"star\" color=\"unit-btn\"></ion-icon>\r\n                <ion-icon name=\"star\" color=\"unit-btn\"></ion-icon>\r\n                <ion-icon name=\"star\" color=\"unit-btn\"> </ion-icon>\r\n                <ion-icon name=\"star\" color=\"unit-btn\"></ion-icon>\r\n                <ion-icon name=\"star-outline\"></ion-icon>\r\n              </div>\r\n            </ion-label>\r\n          </ion-item>\r\n        </ion-col>\r\n        <ion-col size=\"4\">\r\n        </ion-col>\r\n      </ion-row>\r\n    </ion-grid>\r\n    <hr>\r\n    <ion-grid class=\"category\" *ngIf=\"amenities.length\">\r\n      <ion-row>\r\n        <ion-col size=\"3\" *ngFor=\"let item of amenities\">\r\n          <div *ngIf=\"item?.images && item?.images?.length; else noImage\">\r\n            <img src=\"{{item?.images[0]}}\" />\r\n          </div>\r\n          <ng-template #noImage>\r\n            <div style=\"width: 50%; margin-bottom: 10px;\">\r\n              <img src=\"../../../../assets/imgs/dummys.png\" />\r\n            </div>\r\n          </ng-template>\r\n          <span>{{item.name}}</span>\r\n        </ion-col>\r\n      </ion-row>\r\n    </ion-grid>\r\n    <ion-grid class=\"place-details\">\r\n      <ion-row>\r\n        <ion-col>\r\n          <h3>Description</h3>\r\n          <p>{{bookingData?.place?.description}}</p>\r\n        </ion-col>\r\n      </ion-row>\r\n    </ion-grid>\r\n    <hr>\r\n    <ion-grid class=\"otherInfo ion-no-padding\">\r\n      <ion-row class=\"ion-no-padding\">\r\n        <ion-col class=\"ion-no-padding\">\r\n          <ion-list class=\"ion-no-padding\" lines=\"none\" style=\"margin-left: 10px;\">\r\n            <ion-label>\r\n              <h2>Booked on:</h2>\r\n              <p>{{ bookingData?.startDate | date:'longDate'}}</p>\r\n            </ion-label>\r\n          </ion-list>\r\n          <ion-list class=\"ion-no-padding\" lines=\"none\" style=\"margin-left: 10px;margin-top:10px;\">\r\n            <ion-label>\r\n              <h2> Booked upTo:</h2>\r\n              <p>{{ bookingData?.endDate | date:'longDate'}}</p>\r\n            </ion-label>\r\n          </ion-list>\r\n        </ion-col>\r\n      </ion-row>\r\n    </ion-grid>\r\n    <hr>\r\n    <ion-grid class=\"location_info ion-no-padding\">\r\n      <ion-row class=\"ion-no-padding\">\r\n        <h3>Location</h3>\r\n      </ion-row>\r\n    </ion-grid>\r\n    <ion-grid class=\"ion-no-padding\">\r\n      <ion-row class=\"ion-no-padding\">\r\n        <ion-col class=\"ion-no-padding\">\r\n          <div class=\"ion-padding\">\r\n            <div #map id=\"map\" class=\"map_div\"></div>\r\n          </div>\r\n        </ion-col>\r\n      </ion-row>\r\n    </ion-grid>\r\n    <hr>\r\n    <!-- GUEST SIDE -->\r\n    <ion-grid class=\"owner_info ion-no-padding\">\r\n      <ion-row class=\"ion-no-padding\">\r\n        <ion-col class=\"ion-no-padding\">\r\n          <ion-item lines=\"none\">\r\n            <ion-avatar slot=\"end\" style=\"margin-right: 20px\">\r\n              <div *ngIf=\"profileImage\">\r\n                <img src=\"{{profileImage}}\">\r\n              </div>\r\n            </ion-avatar>\r\n            <ion-label>\r\n              <div *ngIf=\"type == 'Owner'\">\r\n                <h2> Owned by {{bookingData?.ownerInfo?.profile.firstName}} {{bookingData?.ownerInfo?.profile.lastName}}\r\n                </h2>\r\n                <h3 *ngIf=\"bookingData.ownerInfo.profile.description\">{{bookingData?.ownerInfo?.profile.description}}\r\n                </h3>\r\n                <h3 *ngIf=\"!bookingData.ownerInfo.profile.description\">joined in may 2020</h3>\r\n                <h3>\r\n                  <ion-icon color=\"unit-btn\" name=\"ribbon\"></ion-icon>\r\n                  Verified User\r\n                </h3>\r\n              </div>\r\n              <div *ngIf=\"type == 'Tenant'\">\r\n                <h2> Booked by {{bookingData?.tenantInfo?.profile.firstName}}\r\n                  {{bookingData?.tenantInfo?.profile.lastName}}</h2>\r\n                <h3 *ngIf=\"bookingData.ownerInfo.profile.description\">{{bookingData?.tenantInfo?.profile.description}}\r\n                </h3>\r\n                <h3 *ngIf=\"!bookingData.ownerInfo.profile.description\">joined in may 2020</h3>\r\n                <h3 class=\"verfied-user\">\r\n                  <ion-icon color=\"unit-btn\" name=\"ribbon\"></ion-icon>\r\n                  Verified User\r\n                </h3>\r\n              </div>\r\n            </ion-label>\r\n          </ion-item>\r\n        </ion-col>\r\n      </ion-row>\r\n    </ion-grid>\r\n  </div>\r\n</ion-content>\r\n<ng-template #noBooking>\r\n  <ion-content class=\"ion-no-padding\">\r\n    <ion-grid class=\"user-details ion-no-padding\">\r\n      <ion-row class=\"ion-no-padding\">\r\n        <ion-col size=\"12\" class=\"ion-no-padding\">\r\n          <div class=\"back\" (click)=\"back()\"><img src=\"../../../../assets/imgs/back_two.png\"></div>\r\n        </ion-col>\r\n      </ion-row>\r\n    </ion-grid>\r\n    <ion-item class=\"cancel-box\">\r\n      <div class=\"ion-padding\">\r\n        <img src=\"../../../../assets/imgs/emptyList.png\">\r\n        <ion-label class=\"cancel-text\"> {{text}}</ion-label>\r\n      </div>\r\n    </ion-item>\r\n  </ion-content>\r\n</ng-template>\r\n<ion-footer class=\"ion-no-border\">\r\n  <ion-toolbar>\r\n    <div class=\"ion-padding\">\r\n      {{tabType}}\r\n      <div *ngIf=\"tabType == 'Upcoming'\">\r\n        <div *ngIf=\"type == 'Tenant'\">\r\n          <ion-button color=\"unit-btn\" class=\"shadow\" expand=\"block\" (click)=\"cancelBookingAlrt()\">\r\n            Cancel Booking\r\n          </ion-button>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </ion-toolbar>\r\n</ion-footer>";
      /***/
    },

    /***/
    "./src/app/pages/owner/booking-detail/booking-detail-routing.module.ts":
    /*!*****************************************************************************!*\
      !*** ./src/app/pages/owner/booking-detail/booking-detail-routing.module.ts ***!
      \*****************************************************************************/

    /*! exports provided: BookingDetailPageRoutingModule */

    /***/
    function srcAppPagesOwnerBookingDetailBookingDetailRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "BookingDetailPageRoutingModule", function () {
        return BookingDetailPageRoutingModule;
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


      var _booking_detail_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./booking-detail.page */
      "./src/app/pages/owner/booking-detail/booking-detail.page.ts");

      var routes = [{
        path: '',
        component: _booking_detail_page__WEBPACK_IMPORTED_MODULE_3__["BookingDetailPage"]
      }];

      var BookingDetailPageRoutingModule = function BookingDetailPageRoutingModule() {
        _classCallCheck(this, BookingDetailPageRoutingModule);
      };

      BookingDetailPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], BookingDetailPageRoutingModule);
      /***/
    },

    /***/
    "./src/app/pages/owner/booking-detail/booking-detail.module.ts":
    /*!*********************************************************************!*\
      !*** ./src/app/pages/owner/booking-detail/booking-detail.module.ts ***!
      \*********************************************************************/

    /*! exports provided: BookingDetailPageModule */

    /***/
    function srcAppPagesOwnerBookingDetailBookingDetailModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "BookingDetailPageModule", function () {
        return BookingDetailPageModule;
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


      var _booking_detail_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./booking-detail-routing.module */
      "./src/app/pages/owner/booking-detail/booking-detail-routing.module.ts");
      /* harmony import */


      var _booking_detail_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./booking-detail.page */
      "./src/app/pages/owner/booking-detail/booking-detail.page.ts");

      var BookingDetailPageModule = function BookingDetailPageModule() {
        _classCallCheck(this, BookingDetailPageModule);
      };

      BookingDetailPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _booking_detail_routing_module__WEBPACK_IMPORTED_MODULE_5__["BookingDetailPageRoutingModule"]],
        declarations: [_booking_detail_page__WEBPACK_IMPORTED_MODULE_6__["BookingDetailPage"]]
      })], BookingDetailPageModule);
      /***/
    },

    /***/
    "./src/app/pages/owner/booking-detail/booking-detail.page.scss":
    /*!*********************************************************************!*\
      !*** ./src/app/pages/owner/booking-detail/booking-detail.page.scss ***!
      \*********************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppPagesOwnerBookingDetailBookingDetailPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "ion-toolbar {\n  --background-color: transparent;\n  --ion-color-base: transparent !important;\n}\n\n.slider {\n  border-radius: 5px;\n}\n\n.slider-slide {\n  color: #000;\n  background-color: \"secondary\";\n  height: 100%;\n}\n\n.swiper-slide img {\n  max-height: 100%;\n  max-width: 100%;\n  pointer-events: none;\n}\n\n.md .swiper-slide .swiper-slide-active,\n.ios .swiper-slide .swiper-slide-active,\n.wp .swiper-slide .swiper-slide-active {\n  width: 100px;\n}\n\n.reviews {\n  font-size: small;\n  font-weight: 400;\n}\n\n:host {\n  background-color: \"secondary\";\n}\n\nion-content {\n  --background: transparent;\n}\n\n.content {\n  background-color: \"secondary\";\n  height: auto !important;\n  border-radius: 25px;\n  padding-top: 0px;\n  box-shadow: 0px 0px 10px #a3a4a7;\n  margin-top: -28px;\n  border-bottom-left-radius: 0;\n  border-bottom-right-radius: 0;\n  position: relative;\n  z-index: 1;\n}\n\n.swiper-pagination-bullet-active {\n  background: #fff;\n}\n\n.user-details ion-col p {\n  padding-top: 0px;\n  margin-top: 0px;\n}\n\nion-item ion-label .rating {\n  text-align: left !important;\n}\n\nion-item ion-label .card-content {\n  text-align: left !important;\n  color: #000;\n  font-size: 11px !important;\n  margin-top: 6px;\n  margin-bottom: 6px;\n  font-family: \"medium\";\n}\n\nion-item ion-label .card-content span {\n  color: #9b9b9b;\n}\n\nion-col ion-button {\n  font-size: 8px;\n  text-transform: capitalize;\n  margin-bottom: 10px;\n}\n\nion-col ion-button button {\n  font-size: 9px;\n  padding: 12px 0px;\n  font-family: \"medium\";\n}\n\n.category ion-col {\n  text-align: center;\n}\n\n.category ion-col div {\n  border-radius: 0;\n  padding: 0px;\n  display: inline-block;\n}\n\n.category ion-col span {\n  color: #5a5a5a;\n  font-size: 12px;\n  display: block;\n  font-family: \"medium\";\n}\n\nion-footer {\n  padding: 10px 10px;\n}\n\nion-footer ion-button {\n  font-size: 15px;\n  font-weight: 600;\n  text-transform: capitalize;\n}\n\n.place-details ion-col {\n  padding-left: 15px;\n}\n\n.place-details ion-col h3 {\n  font-size: 13px;\n  font-weight: 400;\n  color: #101010;\n  font-family: \"helveticaneuebold\";\n}\n\n.place-details ion-col p {\n  font-size: 12px;\n  color: #9b9b9b;\n}\n\nhr {\n  display: block;\n  margin-top: 0.5em;\n  margin-bottom: 0.5em;\n  margin-left: 25px;\n  margin-right: 25px;\n  border-style: inset;\n  border-width: 1px;\n  color: #b9b9b9;\n}\n\n.tour {\n  position: absolute;\n  top: 20px;\n  z-index: 9999;\n  top: 10px;\n  right: 20px;\n}\n\n.tour ion-badge {\n  padding: 10px 20px;\n  font-size: 10px;\n  border-radius: 15px;\n}\n\n.otherInfo ion-col {\n  padding-left: 15px;\n}\n\n.otherInfo ion-col h3 {\n  font-size: 13px;\n  font-weight: bold;\n}\n\n.otherInfo ion-col p {\n  font-size: 12px;\n  color: #9b9b9b;\n}\n\n.location_info ion-row {\n  padding-left: 15px;\n}\n\n.location_info ion-row h3 {\n  font-size: 16px;\n  font-weight: 400;\n  color: #101010;\n  font-family: \"helveticaneuebold\";\n  margin-left: 12px;\n}\n\nh2 {\n  font-size: 13px;\n  font-weight: 400;\n  color: #101010;\n  font-family: \"helveticaneuebold\";\n}\n\n.map_div {\n  width: 320px;\n  height: 200px;\n  position: relative;\n  border-radius: 25px;\n}\n\n.owner_info ion-grid {\n  height: 100%;\n}\n\n.owner_info ion-grid ion-row {\n  height: 33.33%;\n}\n\n.owner_info ion-col {\n  padding-left: 15px;\n}\n\n.owner_info ion-col h2 {\n  font-size: 16px;\n  font-weight: 400;\n  color: #101010;\n  font-family: \"helveticaneuebold\";\n}\n\n.owner_info ion-col h3 {\n  padding: 3px;\n  font-size: 12px;\n  color: #9b9b9b;\n}\n\n.owner_info ion-col h3 ion-icon {\n  font-size: 12px;\n}\n\n.owner_info ion-col h3 img {\n  margin-right: 6px;\n  vertical-align: top;\n}\n\n.safety_info ion-col {\n  padding-left: 15px;\n}\n\n.safety_info ion-col h2 {\n  font-size: 13px;\n  font-weight: 400;\n  color: #101010;\n  font-family: \"helveticaneuebold\";\n}\n\n.safety_info ion-col p {\n  padding: 3px;\n  font-size: 12px;\n  color: #9b9b9b;\n}\n\n.safety_info ion-col p ion-icon {\n  font-size: 12px;\n}\n\n.sc-ion-label-ios-s h2 {\n  font-size: 13px;\n  font-weight: 400;\n  margin-top: 0px;\n  padding-top: 0;\n  font-family: \"helveticaneuebold\";\n  color: \"dark\";\n  margin-bottom: 0;\n  padding-bottom: 0;\n}\n\n.swiper-slide img {\n  width: 100%;\n  border-radius: 0;\n}\n\n.back {\n  position: absolute;\n  z-index: 9999;\n  top: 40px;\n  left: 20px;\n}\n\n.cancel-box {\n  --inner-border-width: 0;\n  top: 10%;\n}\n\n.cancel-box img {\n  display: block;\n  margin: 0 auto;\n}\n\n.ion-padding {\n  width: 100%;\n}\n\n.cancel-text {\n  text-align: center;\n  font-size: 14px;\n  font-family: 'helveticaneuebold';\n  text-align: center;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvb3duZXIvYm9va2luZy1kZXRhaWwvYm9va2luZy1kZXRhaWwucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksK0JBQW1CO0VBQ25CLHdDQUFpQjtBQUNyQjs7QUFFRTtFQUNFLGtCQUFrQjtBQUN0Qjs7QUFDRTtFQUNFLFdBQVc7RUFDWCw2QkFBNkI7RUFDN0IsWUFBWTtBQUVoQjs7QUFBRTtFQUNFLGdCQUFnQjtFQUNoQixlQUFlO0VBQ2Ysb0JBQW9CO0FBR3hCOztBQURFOzs7RUFJSSxZQUFZO0FBR2xCOztBQUNFO0VBQ0UsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtBQUVwQjs7QUFDRTtFQUNFLDZCQUE2QjtBQUVqQzs7QUFBRTtFQUNFLHlCQUFhO0FBR2pCOztBQUFFO0VBQ0UsNkJBQTZCO0VBQzdCLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsZ0JBQWdCO0VBQ2hCLGdDQUFnQztFQUNoQyxpQkFBaUI7RUFDakIsNEJBQTRCO0VBQzVCLDZCQUE2QjtFQUM3QixrQkFBa0I7RUFDbEIsVUFBVTtBQUdkOztBQURFO0VBQ0UsZ0JBQWdCO0FBSXBCOztBQUZFO0VBR00sZ0JBQWdCO0VBQ2hCLGVBQWU7QUFHdkI7O0FBRUU7RUFHTSwyQkFBMkI7QUFEbkM7O0FBRkU7RUFNTSwyQkFBMkI7RUFDM0IsV0FBVztFQUNYLDBCQUEwQjtFQUMxQixlQUFlO0VBQ2Ysa0JBQWtCO0VBQ2xCLHFCQUFxQjtBQUE3Qjs7QUFYRTtFQWFRLGNBQWM7QUFFeEI7O0FBR0U7RUFFSSxjQUFjO0VBQ2QsMEJBQTBCO0VBQzFCLG1CQUFtQjtBQUR6Qjs7QUFIRTtFQU1NLGNBQWM7RUFDZCxpQkFBaUI7RUFDakIscUJBQXFCO0FBQzdCOztBQUlFO0VBRUksa0JBQWtCO0FBRnhCOztBQUFFO0VBSU0sZ0JBQWdCO0VBQ2hCLFlBQVk7RUFDWixxQkFBcUI7QUFBN0I7O0FBTkU7RUFTTSxjQUFjO0VBQ2QsZUFBZTtFQUNmLGNBQWM7RUFDZCxxQkFBcUI7QUFDN0I7O0FBR0U7RUFDRSxrQkFBa0I7QUFBdEI7O0FBREU7RUFHSSxlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLDBCQUEwQjtBQUVoQzs7QUFFRTtFQUVJLGtCQUFrQjtBQUF4Qjs7QUFGRTtFQUlNLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsY0FBYztFQUNkLGdDQUFnQztBQUV4Qzs7QUFURTtFQVVNLGVBQWU7RUFDZixjQUFjO0FBR3RCOztBQUNFO0VBQ0UsY0FBYztFQUNkLGlCQUFpQjtFQUNqQixvQkFBb0I7RUFDcEIsaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixtQkFBbUI7RUFDbkIsaUJBQWlCO0VBQ2pCLGNBQWM7QUFFbEI7O0FBQ0U7RUFDRSxrQkFBa0I7RUFDbEIsU0FBUztFQUNULGFBQWE7RUFDYixTQUFTO0VBQ1QsV0FBVztBQUVmOztBQVBFO0VBT0ksa0JBQWtCO0VBQ2xCLGVBQWU7RUFDZixtQkFBbUI7QUFJekI7O0FBREU7RUFFSSxrQkFBa0I7QUFHeEI7O0FBTEU7RUFJTSxlQUFlO0VBQ2YsaUJBQWlCO0FBS3pCOztBQVZFO0VBUU0sZUFBZTtFQUNmLGNBQWM7QUFNdEI7O0FBRkU7RUFFSSxrQkFBa0I7QUFJeEI7O0FBTkU7RUFJTSxlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLGNBQWM7RUFDZCxnQ0FBZ0M7RUFDaEMsaUJBQWlCO0FBTXpCOztBQUZFO0VBQ0UsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixjQUFjO0VBQ2QsZ0NBQWdDO0FBS3BDOztBQUhFO0VBQ0UsWUFBWTtFQUNaLGFBQWE7RUFDYixrQkFBa0I7RUFDbEIsbUJBQW1CO0FBTXZCOztBQUpFO0VBRUksWUFBWTtBQU1sQjs7QUFSRTtFQUtNLGNBQWM7QUFPdEI7O0FBWkU7RUFVSSxrQkFBa0I7QUFNeEI7O0FBaEJFO0VBWU0sZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixjQUFjO0VBQ2QsZ0NBQWdDO0FBUXhDOztBQXZCRTtFQWtCTSxZQUFZO0VBQ1osZUFBZTtFQUNmLGNBQWM7QUFTdEI7O0FBN0JFO0VBc0JRLGVBQWU7QUFXekI7O0FBakNFO0VBeUJRLGlCQUFpQjtFQUNqQixtQkFBbUI7QUFZN0I7O0FBTkU7RUFFSSxrQkFBa0I7QUFReEI7O0FBVkU7RUFJTSxlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLGNBQWM7RUFDZCxnQ0FBZ0M7QUFVeEM7O0FBakJFO0VBVU0sWUFBWTtFQUNaLGVBQWU7RUFDZixjQUFjO0FBV3RCOztBQXZCRTtFQWNRLGVBQWU7QUFhekI7O0FBUkU7RUFDRSxlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLGVBQWU7RUFDZixjQUFjO0VBQ2QsZ0NBQWdDO0VBQ2hDLGFBQWE7RUFDYixnQkFBZ0I7RUFDaEIsaUJBQWlCO0FBV3JCOztBQVRFO0VBRUksV0FBVztFQUNYLGdCQUFnQjtBQVd0Qjs7QUFSRTtFQUNFLGtCQUFrQjtFQUNsQixhQUFhO0VBQ2IsU0FBUztFQUNULFVBQVU7QUFXZDs7QUFSRTtFQUNFLHVCQUFxQjtFQUNyQixRQUFRO0FBV1o7O0FBVEU7RUFDRSxjQUFjO0VBQ2QsY0FBYztBQVlsQjs7QUFWRTtFQUNFLFdBQVc7QUFhZjs7QUFYRTtFQUNFLGtCQUFrQjtFQUNsQixlQUFlO0VBQ2YsZ0NBQWdDO0VBQ2hDLGtCQUNGO0FBYUYiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9vd25lci9ib29raW5nLWRldGFpbC9ib29raW5nLWRldGFpbC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tdG9vbGJhciB7XHJcbiAgICAtLWJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgLS1pb24tY29sb3ItYmFzZTogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcclxuICB9XHJcbiAgXHJcbiAgLnNsaWRlciB7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgfVxyXG4gIC5zbGlkZXItc2xpZGUge1xyXG4gICAgY29sb3I6ICMwMDA7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBcInNlY29uZGFyeVwiO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gIH1cclxuICAuc3dpcGVyLXNsaWRlIGltZyB7XHJcbiAgICBtYXgtaGVpZ2h0OiAxMDAlO1xyXG4gICAgbWF4LXdpZHRoOiAxMDAlO1xyXG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XHJcbiAgfVxyXG4gIC5tZCxcclxuICAuaW9zLFxyXG4gIC53cCB7XHJcbiAgICAuc3dpcGVyLXNsaWRlIC5zd2lwZXItc2xpZGUtYWN0aXZlIHtcclxuICAgICAgd2lkdGg6IDEwMHB4OyAvL3lvdXIgd2lkdGggaGVyZVxyXG4gICAgfVxyXG4gIH1cclxuICBcclxuICAucmV2aWV3cyB7XHJcbiAgICBmb250LXNpemU6IHNtYWxsO1xyXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICB9XHJcbiAgXHJcbiAgOmhvc3Qge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogXCJzZWNvbmRhcnlcIjtcclxuICB9XHJcbiAgaW9uLWNvbnRlbnQge1xyXG4gICAgLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuICB9XHJcbiAgXHJcbiAgLmNvbnRlbnQge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogXCJzZWNvbmRhcnlcIjtcclxuICAgIGhlaWdodDogYXV0byAhaW1wb3J0YW50O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMjVweDtcclxuICAgIHBhZGRpbmctdG9wOiAwcHg7XHJcbiAgICBib3gtc2hhZG93OiAwcHggMHB4IDEwcHggI2EzYTRhNztcclxuICAgIG1hcmdpbi10b3A6IC0yOHB4O1xyXG4gICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMDtcclxuICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAwO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgei1pbmRleDogMTtcclxuICB9XHJcbiAgLnN3aXBlci1wYWdpbmF0aW9uLWJ1bGxldC1hY3RpdmUge1xyXG4gICAgYmFja2dyb3VuZDogI2ZmZjtcclxuICB9XHJcbiAgLnVzZXItZGV0YWlscyB7XHJcbiAgICBpb24tY29sIHtcclxuICAgICAgcCB7XHJcbiAgICAgICAgcGFkZGluZy10b3A6IDBweDtcclxuICAgICAgICBtYXJnaW4tdG9wOiAwcHg7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbiAgXHJcbiAgaW9uLWl0ZW0ge1xyXG4gICAgaW9uLWxhYmVsIHtcclxuICAgICAgLnJhdGluZyB7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogbGVmdCAhaW1wb3J0YW50O1xyXG4gICAgICB9XHJcbiAgICAgIC5jYXJkLWNvbnRlbnQge1xyXG4gICAgICAgIHRleHQtYWxpZ246IGxlZnQgIWltcG9ydGFudDtcclxuICAgICAgICBjb2xvcjogIzAwMDtcclxuICAgICAgICBmb250LXNpemU6IDExcHggIWltcG9ydGFudDtcclxuICAgICAgICBtYXJnaW4tdG9wOiA2cHg7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogNnB4O1xyXG4gICAgICAgIGZvbnQtZmFtaWx5OiBcIm1lZGl1bVwiO1xyXG4gICAgICAgIHNwYW4ge1xyXG4gICAgICAgICAgY29sb3I6ICM5YjliOWI7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG4gIGlvbi1jb2wge1xyXG4gICAgaW9uLWJ1dHRvbiB7XHJcbiAgICAgIGZvbnQtc2l6ZTogOHB4O1xyXG4gICAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcclxuICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICAgICAgYnV0dG9uIHtcclxuICAgICAgICBmb250LXNpemU6IDlweDtcclxuICAgICAgICBwYWRkaW5nOiAxMnB4IDBweDtcclxuICAgICAgICBmb250LWZhbWlseTogXCJtZWRpdW1cIjtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuICBcclxuICAuY2F0ZWdvcnkge1xyXG4gICAgaW9uLWNvbCB7XHJcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgZGl2IHtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAwO1xyXG4gICAgICAgIHBhZGRpbmc6IDBweDtcclxuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgIH1cclxuICAgICAgc3BhbiB7XHJcbiAgICAgICAgY29sb3I6ICM1YTVhNWE7XHJcbiAgICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgIGZvbnQtZmFtaWx5OiBcIm1lZGl1bVwiO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG4gIGlvbi1mb290ZXIge1xyXG4gICAgcGFkZGluZzogMTBweCAxMHB4O1xyXG4gICAgaW9uLWJ1dHRvbiB7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XHJcbiAgICB9XHJcbiAgfVxyXG4gIFxyXG4gIC5wbGFjZS1kZXRhaWxzIHtcclxuICAgIGlvbi1jb2wge1xyXG4gICAgICBwYWRkaW5nLWxlZnQ6IDE1cHg7XHJcbiAgICAgIGgzIHtcclxuICAgICAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgICAgICBjb2xvcjogIzEwMTAxMDtcclxuICAgICAgICBmb250LWZhbWlseTogXCJoZWx2ZXRpY2FuZXVlYm9sZFwiO1xyXG4gICAgICB9XHJcbiAgICAgIHAge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgICAgICBjb2xvcjogIzliOWI5YjtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuICBociB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIG1hcmdpbi10b3A6IDAuNWVtO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMC41ZW07XHJcbiAgICBtYXJnaW4tbGVmdDogMjVweDtcclxuICAgIG1hcmdpbi1yaWdodDogMjVweDtcclxuICAgIGJvcmRlci1zdHlsZTogaW5zZXQ7XHJcbiAgICBib3JkZXItd2lkdGg6IDFweDtcclxuICAgIGNvbG9yOiAjYjliOWI5O1xyXG4gIH1cclxuICBcclxuICAudG91ciB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDIwcHg7XHJcbiAgICB6LWluZGV4OiA5OTk5O1xyXG4gICAgdG9wOiAxMHB4O1xyXG4gICAgcmlnaHQ6IDIwcHg7XHJcbiAgICBpb24tYmFkZ2Uge1xyXG4gICAgICBwYWRkaW5nOiAxMHB4IDIwcHg7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTBweDtcclxuICAgICAgYm9yZGVyLXJhZGl1czogMTVweDtcclxuICAgIH1cclxuICB9XHJcbiAgLm90aGVySW5mbyB7XHJcbiAgICBpb24tY29sIHtcclxuICAgICAgcGFkZGluZy1sZWZ0OiAxNXB4O1xyXG4gICAgICBoMyB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxM3B4O1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICB9XHJcbiAgICAgIHAge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgICAgICBjb2xvcjogIzliOWI5YjtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuICAubG9jYXRpb25faW5mbyB7XHJcbiAgICBpb24tcm93IHtcclxuICAgICAgcGFkZGluZy1sZWZ0OiAxNXB4O1xyXG4gICAgICBoMyB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICAgICAgY29sb3I6ICMxMDEwMTA7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6IFwiaGVsdmV0aWNhbmV1ZWJvbGRcIjtcclxuICAgICAgICBtYXJnaW4tbGVmdDogMTJweDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuICBoMiB7XHJcbiAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgY29sb3I6ICMxMDEwMTA7XHJcbiAgICBmb250LWZhbWlseTogXCJoZWx2ZXRpY2FuZXVlYm9sZFwiO1xyXG4gIH1cclxuICAubWFwX2RpdiB7XHJcbiAgICB3aWR0aDogMzIwcHg7XHJcbiAgICBoZWlnaHQ6IDIwMHB4O1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMjVweDtcclxuICB9XHJcbiAgLm93bmVyX2luZm8ge1xyXG4gICAgaW9uLWdyaWQge1xyXG4gICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgXHJcbiAgICAgIGlvbi1yb3cge1xyXG4gICAgICAgIGhlaWdodDogMzMuMzMlO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgXHJcbiAgICBpb24tY29sIHtcclxuICAgICAgcGFkZGluZy1sZWZ0OiAxNXB4O1xyXG4gICAgICBoMiB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICAgICAgY29sb3I6ICMxMDEwMTA7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6IFwiaGVsdmV0aWNhbmV1ZWJvbGRcIjtcclxuICAgICAgfVxyXG4gICAgICBoMyB7XHJcbiAgICAgICAgcGFkZGluZzogM3B4O1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgICAgICBjb2xvcjogIzliOWI5YjtcclxuICAgICAgICBpb24taWNvbiB7XHJcbiAgICAgICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGltZyB7XHJcbiAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDZweDtcclxuICAgICAgICAgIHZlcnRpY2FsLWFsaWduOiB0b3A7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG4gIFxyXG4gIC5zYWZldHlfaW5mbyB7XHJcbiAgICBpb24tY29sIHtcclxuICAgICAgcGFkZGluZy1sZWZ0OiAxNXB4O1xyXG4gICAgICBoMiB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxM3B4O1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICAgICAgY29sb3I6ICMxMDEwMTA7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6IFwiaGVsdmV0aWNhbmV1ZWJvbGRcIjtcclxuICAgICAgfVxyXG4gICAgICBwIHtcclxuICAgICAgICBwYWRkaW5nOiAzcHg7XHJcbiAgICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgICAgIGNvbG9yOiAjOWI5YjliO1xyXG4gICAgICAgIGlvbi1pY29uIHtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbiAgLnNjLWlvbi1sYWJlbC1pb3MtcyBoMiB7XHJcbiAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgbWFyZ2luLXRvcDogMHB4O1xyXG4gICAgcGFkZGluZy10b3A6IDA7XHJcbiAgICBmb250LWZhbWlseTogXCJoZWx2ZXRpY2FuZXVlYm9sZFwiO1xyXG4gICAgY29sb3I6IFwiZGFya1wiO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMDtcclxuICAgIHBhZGRpbmctYm90dG9tOiAwO1xyXG4gIH1cclxuICAuc3dpcGVyLXNsaWRlIHtcclxuICAgIGltZyB7XHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICBib3JkZXItcmFkaXVzOiAwO1xyXG4gICAgfVxyXG4gIH1cclxuICAuYmFjayB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB6LWluZGV4OiA5OTk5O1xyXG4gICAgdG9wOiA0MHB4O1xyXG4gICAgbGVmdDogMjBweDtcclxuICB9XHJcblxyXG4gIC5jYW5jZWwtYm94e1xyXG4gICAgLS1pbm5lci1ib3JkZXItd2lkdGg6IDA7XHJcbiAgICB0b3A6IDEwJTtcclxuICB9XHJcbiAgLmNhbmNlbC1ib3ggaW1ne1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBtYXJnaW46IDAgYXV0bztcclxuICB9XHJcbiAgLmlvbi1wYWRkaW5ne1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgfVxyXG4gIC5jYW5jZWwtdGV4dHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIGZvbnQtZmFtaWx5OiAnaGVsdmV0aWNhbmV1ZWJvbGQnO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyXHJcbiAgfVxyXG4gICJdfQ== */";
      /***/
    },

    /***/
    "./src/app/pages/owner/booking-detail/booking-detail.page.ts":
    /*!*******************************************************************!*\
      !*** ./src/app/pages/owner/booking-detail/booking-detail.page.ts ***!
      \*******************************************************************/

    /*! exports provided: BookingDetailPage */

    /***/
    function srcAppPagesOwnerBookingDetailBookingDetailPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "BookingDetailPage", function () {
        return BookingDetailPage;
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


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var src_app_services_api_service_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/services/api-service.service */
      "./src/app/services/api-service.service.ts");
      /* harmony import */


      var src_app_services_global_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/services/global.service */
      "./src/app/services/global.service.ts");
      /* harmony import */


      var src_app_services_loader_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/app/services/loader.service */
      "./src/app/services/loader.service.ts");
      /* harmony import */


      var src_app_services_toast_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! src/app/services/toast.service */
      "./src/app/services/toast.service.ts");
      /* harmony import */


      var _config_config__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../../config/config */
      "./src/app/pages/config/config.ts");
      /* harmony import */


      var _ionic_storage__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @ionic/storage */
      "./node_modules/@ionic/storage/__ivy_ngcc__/fesm2015/ionic-storage.js");

      var BookingDetailPage = /*#__PURE__*/function () {
        function BookingDetailPage(route, router, _api, alert, refresh, alrtCtrl, loader, storage, navController, _gs) {
          var _this = this;

          _classCallCheck(this, BookingDetailPage);

          this.route = route;
          this.router = router;
          this._api = _api;
          this.alert = alert;
          this.refresh = refresh;
          this.alrtCtrl = alrtCtrl;
          this.loader = loader;
          this.storage = storage;
          this.navController = navController;
          this._gs = _gs;
          this.url = _config_config__WEBPACK_IMPORTED_MODULE_8__["config"].url;
          this.type = "";
          this.isCheckin = false;
          this.route.params.subscribe(function (params) {
            _this.bookingId = params.id;
          });
          this.route.queryParams.subscribe(function (qParams) {
            _this.type = qParams.type;

            if (qParams.from) {
              _this.priviousUrl = qParams.from;
            }
          });
        }

        _createClass(BookingDetailPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.placeMeta();
            this.getUserData();
          }
        }, {
          key: "placeMeta",
          value: function placeMeta() {
            var _this2 = this;

            var params = {
              apiKey: _config_config__WEBPACK_IMPORTED_MODULE_8__["KEY"].apikey
            };

            this._api.postRequest(this.url + _config_config__WEBPACK_IMPORTED_MODULE_8__["UNITURL"].placeMeta, params).subscribe(function (result) {
              if (result.success) {
                _this2.amenities = result.data.list.amenities;
                console.log(_this2.amenities);
              }
            }, function (error) {
              console.log(error.description);
            });
          }
        }, {
          key: "getUserData",
          value: function getUserData() {
            var _this3 = this;

            this.storage.get("session").then(function (session) {
              if (session) {
                _this3.storage.get("org").then(function (org) {
                  if (org) {
                    _this3.token = session;
                    _this3.orgId = org;

                    _this3.getBookingDetails();
                  }
                });
              }
            });
          }
        }, {
          key: "getBookingDetails",
          value: function getBookingDetails() {
            var _this4 = this;

            this.loader.present();
            var params = {
              token: this.token,
              orgId: this.orgId,
              bookingId: this.bookingId
            };
            console.log(params);

            this._api.postRequest(this.url + _config_config__WEBPACK_IMPORTED_MODULE_8__["UNITURL"].bookingDetails, params).subscribe(function (result) {
              return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this4, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
                var _this5 = this;

                var lat, _long, amenties, result2;

                return regeneratorRuntime.wrap(function _callee$(_context) {
                  while (1) {
                    switch (_context.prev = _context.next) {
                      case 0:
                        console.log(result);

                        if (result.success) {
                          console.log(result.data);

                          if (result.data.bookingDetails) {
                            this.bookingData = result.data.bookingDetails;

                            if (this.bookingData.place.loc) {
                              this.displayMap = true;
                              lat = this.bookingData.place.loc.coordinates[1];
                              _long = this.bookingData.place.loc.coordinates[0];
                              setTimeout(function () {
                                _this5.loadMap(lat, _long);
                              }, 100);
                            }

                            if (this.bookingData.place.amenities && this.bookingData.place.amenities.length) {
                              amenties = this.bookingData.place.amenities.map(function (x) {
                                return {
                                  '_id': x
                                };
                              });
                              result2 = [];

                              if (this.amenities.length) {
                                this.amenities.map(function (x) {
                                  amenties.map(function (y) {
                                    if (y._id == x._id) {
                                      result2.push(x);
                                    }
                                  });
                                });
                              }

                              this.amenities = result2;
                            }

                            if (this.bookingData.tenantInfo.profile.profilePic != null && this.type == 'Tenant') {
                              this.profileImage = this.bookingData.tenantInfo.profile.profilePic;
                            } else if (this.bookingData.ownerInfo.profile.profilePic != null && this.type == 'Owner') {
                              this.profileImage = this.bookingData.ownerInfo.profile.profilePic;
                            } else {
                              this.profileImage = "/assets/imgs/dummyUser.png";
                            }
                          } else {
                            this.text = "Place Data not Found!";
                          }
                        }

                        this.loader.dismiss();

                      case 3:
                      case "end":
                        return _context.stop();
                    }
                  }
                }, _callee, this);
              }));
            }, function (error) {
              _this4.loader.dismiss();

              console.log(error.description);

              _this4.alert.presentToast(error.description);
            });
          }
        }, {
          key: "loadMap",
          value: function loadMap(lat, _long2) {
            var coords = new google.maps.LatLng(lat, _long2);
            var mapOtions = {
              center: coords,
              zoom: 14,
              mapTypeId: google.maps.MapTypeId.ROADMAP,
              disableDefaultUI: true
            };
            this.map = new google.maps.Map(this.mapElement.nativeElement, mapOtions);
            var marker = new google.maps.Marker({
              map: this.map,
              position: coords
            });
            google.maps.event.addListener(this.map, "idle", function () {
              google.maps.event.trigger(this.map, "resize");
            });
          }
        }, {
          key: "cancelBookingAlrt",
          value: function cancelBookingAlrt() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
              var _this6 = this;

              var alert;
              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      _context2.next = 2;
                      return this.alrtCtrl.create({
                        header: 'Lose your data',
                        message: 'Are you sure that you want to cancel your booking ?',
                        buttons: [{
                          text: 'Cancel',
                          role: 'cancel',
                          cssClass: 'secondary',
                          handler: function handler(blah) {}
                        }, {
                          text: 'ok',
                          handler: function handler() {
                            _this6.cancelBooking();
                          }
                        }]
                      });

                    case 2:
                      alert = _context2.sent;
                      _context2.next = 5;
                      return alert.present();

                    case 5:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2, this);
            }));
          }
        }, {
          key: "cancelBooking",
          value: function cancelBooking() {
            var _this7 = this;

            if (this.token) {
              var params = {
                token: this.token,
                bookingId: this.bookingData._id,
                orgId: this.orgId
              };
              console.log(params);
              this._api.postRequest(this.url + _config_config__WEBPACK_IMPORTED_MODULE_8__["UNITURL"].cancelBooking, params).subscribe(function (result) {
                return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this7, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
                  return regeneratorRuntime.wrap(function _callee3$(_context3) {
                    while (1) {
                      switch (_context3.prev = _context3.next) {
                        case 0:
                          if (result.success) {
                            this.refresh.refreshMyStays("refresh");
                            this.alert.presentToast(result.message);
                            this.router.navigate(['tabs/tab1']);
                          }

                        case 1:
                        case "end":
                          return _context3.stop();
                      }
                    }
                  }, _callee3, this);
                }));
              }), function (error) {
                console.log(error.description);

                _this7.alert.presentToast(error.description);
              };
            }
          }
        }, {
          key: "checkin",
          value: function checkin(url) {
            var _this8 = this;

            if (this.token) {
              var placeid = "";

              if (this.type == true) {
                placeid = this.bookingData._id;
              } else {
                placeid = this.bookingData.place._id;
              }

              var params = {
                token: this.token,
                bookingid: placeid,
                orgId: this.orgId
              };
              console.log(params);
              this._api.postRequest(this.url + url, params).subscribe(function (result) {
                return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this8, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
                  return regeneratorRuntime.wrap(function _callee4$(_context4) {
                    while (1) {
                      switch (_context4.prev = _context4.next) {
                        case 0:
                          if (result.success) {
                            this.refresh.refreshMyStays("refresh");
                            this.alert.presentToast(result.message);
                          }

                        case 1:
                        case "end":
                          return _context4.stop();
                      }
                    }
                  }, _callee4, this);
                }));
              }), function (error) {
                console.log(error.description);

                _this8.alert.presentToast(error.description);
              };
            }
          }
        }, {
          key: "postReview",
          value: function postReview() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
              return regeneratorRuntime.wrap(function _callee5$(_context5) {
                while (1) {
                  switch (_context5.prev = _context5.next) {
                    case 0:
                    case "end":
                      return _context5.stop();
                  }
                }
              }, _callee5);
            }));
          }
        }, {
          key: "back",
          value: function back() {
            console.log(this.priviousUrl);

            if (this.priviousUrl) {
              console.log(this.priviousUrl);
              this.navController.navigateRoot([this.priviousUrl]);
            } else {
              this.navController.navigateRoot(["tabs/tab2"]);
            }
          }
        }]);

        return BookingDetailPage;
      }();

      BookingDetailPage.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }, {
          type: src_app_services_api_service_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"]
        }, {
          type: src_app_services_toast_service__WEBPACK_IMPORTED_MODULE_7__["ToastService"]
        }, {
          type: src_app_services_global_service__WEBPACK_IMPORTED_MODULE_5__["GlobalService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"]
        }, {
          type: src_app_services_loader_service__WEBPACK_IMPORTED_MODULE_6__["LoaderService"]
        }, {
          type: _ionic_storage__WEBPACK_IMPORTED_MODULE_9__["Storage"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"]
        }, {
          type: src_app_services_global_service__WEBPACK_IMPORTED_MODULE_5__["GlobalService"]
        }];
      };

      BookingDetailPage.propDecorators = {
        mapElement: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
          args: ["map", {
            "static": false
          }]
        }]
      };
      BookingDetailPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-booking-detail',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./booking-detail.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/owner/booking-detail/booking-detail.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./booking-detail.page.scss */
        "./src/app/pages/owner/booking-detail/booking-detail.page.scss"))["default"]]
      })], BookingDetailPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=pages-owner-booking-detail-booking-detail-module-es5.js.map