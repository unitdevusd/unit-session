(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-tanent-place-detail-place-detail-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/tanent/place-detail/place-detail.page.html":
    /*!********************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/tanent/place-detail/place-detail.page.html ***!
      \********************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppPagesTanentPlaceDetailPlaceDetailPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-content>\r\n  <ion-grid class=\"user-details ion-no-padding\">\r\n    <ion-row class=\"ion-no-padding\">\r\n      <ion-col size=\"12\" class=\"ion-no-padding\" *ngIf=\"data.images.length; else noPlaceImage\">\r\n        <ion-slides pager=\"true\" [options]=\"slideOpts\" class=\"item-slider\">\r\n          <ion-slide *ngFor=\"let img of data.images\">\r\n            <img class=\"slider\" src=\"{{img}}\" />\r\n          </ion-slide>\r\n        </ion-slides>\r\n        <div class=\"back\" (click)=\"back()\"><img src=\"../../../../assets/imgs/back_two.png\"></div>\r\n        <!-- <div class=\"tour\"> \r\n          <ion-badge color=\"unit-btn\">3D tour</ion-badge>\r\n        </div> -->\r\n      </ion-col>\r\n      <!-- No image check -->\r\n      <ng-template #noPlaceImage>\r\n        <ion-col size=\"12\" class=\"ion-no-padding\" >\r\n          <div style=\"text-align: center;\">\r\n            <img src=\"../../../../assets/imgs/dummy_space.png\" />\r\n          </div>\r\n          <div class=\"back\" (click)=\"back()\"><img src=\"../../../../assets/imgs/back_two.png\"></div>\r\n        </ion-col>\r\n      </ng-template>\r\n    </ion-row>\r\n  </ion-grid>\r\n  <div class=\"content\">\r\n    <ion-grid>\r\n      <ion-row>\r\n        <ion-col size=\"8\">\r\n          <ion-item lines=\"none\">\r\n            <ion-label>\r\n              <h2 style=\"text-transform: capitalize;\">{{data.name}}</h2>\r\n              <h2 style=\"text-transform: capitalize;\">{{data.address}}</h2>\r\n              <div class=\"rating\">\r\n                <ion-icon name=\"star\" color=\"unit-btn\"></ion-icon>\r\n                <ion-icon name=\"star\" color=\"unit-btn\"></ion-icon>\r\n                <ion-icon name=\"star\" color=\"unit-btn\"> </ion-icon>\r\n                <ion-icon name=\"star\" color=\"unit-btn\"></ion-icon>\r\n                <ion-icon name=\"star-outline\"></ion-icon>\r\n              </div>\r\n              <div class=\"card-content\">\r\n              </div>\r\n            </ion-label>\r\n          </ion-item>\r\n        </ion-col>\r\n        <ion-col size=\"4\">\r\n          <ion-button expand=\"block\" color=\"unit-btn\" shape=\"round\" fill=\"outline\" class=\"contact-btn\" (click)=\"review($event,data)\">\r\n            <ion-icon slot=\"start\" name=\"chatbox-outline\" color=\"unit-btn\"></ion-icon>\r\n            Write a review\r\n          </ion-button>\r\n          <ion-button expand=\"block\" color=\"unit-btn\" shape=\"round\" (click)=\"booking(data)\" class=\"check-btn\">Check Availablity</ion-button>\r\n        </ion-col>\r\n      </ion-row>\r\n    </ion-grid>\r\n    <hr>\r\n    <ion-grid class=\"category\">\r\n      <ion-row>\r\n        <ion-col  size=\"3\" *ngFor=\"let item of data.amenities\">\r\n          <div *ngIf=\"item?.images && item?.images?.length; else noImage\">\r\n            <img src=\"{{item?.images[0]}}\" />\r\n          </div>\r\n         <ng-template #noImage>\r\n          <div  style=\"width: 50%;margin-bottom: 10px;\">\r\n            <img src=\"../../../../assets/imgs/dummys.png\" />\r\n          </div>\r\n         </ng-template>\r\n          <span>{{item.name}}</span>\r\n        </ion-col>\r\n      </ion-row>\r\n    </ion-grid>\r\n    <ion-grid class=\"place-details\">\r\n      <ion-row>\r\n        <ion-col>\r\n          <h3>Description</h3>\r\n          <p>{{data?.description}}</p>\r\n        </ion-col>\r\n      </ion-row>\r\n    </ion-grid>\r\n    <hr>\r\n    <ion-grid class=\"otherInfo ion-no-padding\">\r\n      <ion-row class=\"ion-no-padding\">\r\n        <ion-col class=\"ion-no-padding\">\r\n          <ion-list class=\"ion-no-padding\" *ngFor=\"let item of data.amenities\">\r\n            <ion-item class=\"ion-no-padding\" lines=\"none\">\r\n              <ion-icon *ngIf=\"item?.images && item.images.length == 0\" slot=\"start\" color=\"unit-btn\" name=\"nuclear-outline\"></ion-icon>\r\n              <img style=\"margin-left: 5px;\" *ngIf=\"item?.images && item?.images?.length != 0\" slot=\"start\" src=\"{{item?.images[0]}}\" />\r\n              <ion-icon *ngIf=\"!item?.images\" slot=\"start\" color=\"unit-btn\" name=\"nuclear-outline\"></ion-icon>\r\n              <ion-label>\r\n                <h2>{{item.name}}</h2>\r\n                <p>{{item.description}}</p>\r\n              </ion-label>\r\n            </ion-item>\r\n          </ion-list>\r\n          <ion-list class=\"ion-no-padding\" *ngIf=\"data.accessStatusInfo\">\r\n            <ion-item class=\"ion-no-padding\" lines=\"none\">\r\n              <ion-icon slot=\"start\" color=\"unit-btn\" name=\"calendar\"></ion-icon>\r\n              <ion-label>\r\n                <h2>{{data?.accessStatusInfo?.accessTypeName}}</h2>\r\n                <p>{{data?.accessStatusInfo?.description}}</p>\r\n              </ion-label>\r\n            </ion-item>\r\n          </ion-list>\r\n          <ion-list class=\"ion-no-padding\"  *ngIf=\"data.storedItemInfo\">\r\n            <ion-item class=\"ion-no-padding\" lines=\"none\">\r\n              <ion-icon slot=\"start\" color=\"unit-btn\" name=\"home-outline\"></ion-icon> \r\n              <ion-label>\r\n                <h2>{{data?.storedItemInfo?.name}}</h2>\r\n                <p>{{data?.storedItemInfo?.description}}</p>\r\n              </ion-label>\r\n            </ion-item>\r\n          </ion-list>\r\n        </ion-col>\r\n      </ion-row>\r\n    </ion-grid>\r\n    <hr>\r\n    <ion-grid class=\"location_info ion-no-padding\">\r\n      <ion-row class=\"ion-no-padding\">\r\n        <h3>Location</h3>\r\n      </ion-row>\r\n    </ion-grid>\r\n    <ion-grid class=\"ion-no-padding\">\r\n      <ion-row class=\"ion-no-padding\">\r\n        <ion-col class=\"ion-no-padding\">\r\n          <div class=\"ion-padding\">\r\n            <div #map id=\"map\" class=\"map_div\"></div>\r\n          </div>\r\n        </ion-col>\r\n      </ion-row>\r\n    </ion-grid>\r\n    <hr>\r\n    <ion-grid class=\"owner_info ion-no-padding\">\r\n      <ion-row class=\"ion-no-padding\">\r\n        <ion-col class=\"ion-no-padding\">\r\n          <ion-item lines=\"none\">\r\n            <ion-avatar slot=\"end\" style=\"margin-right: 20px\">\r\n              <div *ngIf=\"data?.ownerInfo?.profile.profilePic; else noProfilePic\">\r\n                <img [src]=\"data?.ownerInfo?.profile.profilePic\">\r\n              </div>\r\n              <ng-template #noProfilePic>\r\n                <div>\r\n                  <img img src=\"../../../../assets/imgs/dummyUser.png\">\r\n                </div>\r\n              </ng-template>\r\n            </ion-avatar>\r\n            <ion-label *ngIf=\"data.ownerInfo.profile.firstName\">\r\n              <h2> Owned by {{data?.ownerInfo?.profile.firstName}}</h2>\r\n              <h3 *ngIf=\"data.ownerInfo.profile.description\">{{data?.ownerInfo?.profile.description}}</h3>\r\n             \r\n             <!-- Need to change this to dynamic value instead of being statically typed:-->\r\n             \r\n              <h3 *ngIf=\"!data.ownerInfo.profile.description\">joined in may 2020</h3>\r\n              <h3>\r\n                <img src=\"../../../../assets/imgs/awesome-star.png\">\r\n                {{reviewCount}} Reviews\r\n              </h3>\r\n              <h3>\r\n                <img src=\"../../../../assets/imgs/material-verified-user.png\">\r\n                Verified User\r\n              </h3>\r\n            </ion-label>\r\n          </ion-item>\r\n        </ion-col>\r\n      </ion-row>\r\n    </ion-grid>\r\n    <hr>\r\n    <ion-grid class=\"ion-no-padding\" *ngIf=\"reviewList\">\r\n      <ion-row class=\"ion-no-padding\">\r\n        <ion-col class=\"ion-no-padding\">\r\n          <div   *ngFor=\"let review of reviewList\">\r\n            <ion-item  lines=\"none\">\r\n              <ion-avatar slot=\"end\" style=\"margin-right: 20px\">\r\n                <div *ngIf=\"review.callToAction.icon\">\r\n                  <img src=\"https://prod.imkloud.com{{review.callToAction.icon}}\">\r\n                </div>\r\n              </ion-avatar>\r\n              <ion-label *ngIf=\"review.callToAction.rating\">\r\n                <div class=\"rating\" *ngIf=\"review.callToAction.rating === 1\">\r\n                  <ion-icon name=\"star\" color=\"unit-btn\"></ion-icon>\r\n                  <ion-icon name=\"star-outline\"></ion-icon>\r\n                  <ion-icon name=\"star-outline\"></ion-icon>\r\n                  <ion-icon name=\"star-outline\"></ion-icon>\r\n                  <ion-icon name=\"star-outline\"></ion-icon>\r\n                </div>\r\n                <div class=\"rating\" *ngIf=\"review.callToAction.rating === 2\">\r\n                  <ion-icon name=\"star\" color=\"unit-btn\"></ion-icon>\r\n                  <ion-icon name=\"star\" color=\"unit-btn\"></ion-icon>\r\n                  <ion-icon name=\"star-outline\"></ion-icon>\r\n                  <ion-icon name=\"star-outline\"></ion-icon>\r\n                  <ion-icon name=\"star-outline\"></ion-icon>\r\n                </div>\r\n                <div class=\"rating\" *ngIf=\"review.callToAction.rating === 3\">\r\n                  <ion-icon name=\"star\" color=\"unit-btn\"></ion-icon>\r\n                  <ion-icon name=\"star\" color=\"unit-btn\"></ion-icon>\r\n                  <ion-icon name=\"star\" color=\"unit-btn\"></ion-icon>\r\n                  <ion-icon name=\"star-outline\"></ion-icon>\r\n                  <ion-icon name=\"star-outline\"></ion-icon>\r\n                </div>\r\n                <div class=\"rating\" *ngIf=\"review.callToAction.rating === 4\">\r\n                  <ion-icon name=\"star\" color=\"unit-btn\"></ion-icon>\r\n                  <ion-icon name=\"star\" color=\"unit-btn\"></ion-icon>\r\n                  <ion-icon name=\"star\" color=\"unit-btn\"></ion-icon>\r\n                  <ion-icon name=\"star\" color=\"unit-btn\"></ion-icon>\r\n                  <ion-icon name=\"star-outline\"></ion-icon>\r\n                </div>\r\n                <div class=\"rating\" *ngIf=\"review.callToAction.rating === 5\">\r\n                  <ion-icon name=\"star\" color=\"unit-btn\"></ion-icon>\r\n                  <ion-icon name=\"star\" color=\"unit-btn\"></ion-icon>\r\n                  <ion-icon name=\"star\" color=\"unit-btn\"></ion-icon>\r\n                  <ion-icon name=\"star\" color=\"unit-btn\"></ion-icon>\r\n                  <ion-icon name=\"star\" color=\"unit-btn\"></ion-icon>\r\n                </div>\r\n                <h3 *ngIf=\"review?.callToAction?.text\">{{review?.callToAction?.text}}</h3>\r\n                </ion-label>\r\n            </ion-item>\r\n          </div>\r\n        </ion-col>\r\n        </ion-row>\r\n    </ion-grid>\r\n    <ion-grid class=\"safety_info ion-no-padding\" *ngIf=\"data.additionalInfo && data.additionalInfo.length\">\r\n      <ion-row class=\"ion-no-padding\">\r\n        <ion-col class=\"ion-no-padding\">\r\n          <div   *ngFor=\"let safety of data.additionalInfo\">\r\n            <ion-item  lines=\"none\">\r\n              <ion-label>\r\n                <h2 style=\"text-transform: capitalize;\">{{safety.name}}</h2>\r\n                <p class=\"ion-text-wrap\">\r\n                  {{safety.desc}}\r\n                </p>\r\n              </ion-label>\r\n            </ion-item>\r\n            <hr>\r\n          </div>\r\n        </ion-col>\r\n      </ion-row>\r\n    </ion-grid>\r\n\r\n    <!-- <ion-content> \r\n      <div class=\"ion-padding\">\r\n        <div class=\"date-select\">Select Dates</div>\r\n        <ion-calendar [(ngModel)]=\"dateRange\" [options]=\"optionsRange\" [type]=\"type\" (change)=\"onChange($event)\"\r\n          [format]=\"'YYYY-MM-DD'\" class=\"padding-none\">\r\n        </ion-calendar>\r\n      </div>\r\n    </ion-content> -->\r\n\r\n    <!-- <ion-content> \r\n      <div class=\"ion-padding\">\r\n        <ion-item lines=\"none\">\r\n          <ion-label position=\"stacked\" class=\"tell-txt\">Tell us more about what you want <br> to store here:</ion-label>\r\n          <ion-textarea placeholder=\"Text Here\" [(ngModel)]=\"description\" rows=\"2\">\r\n          </ion-textarea>\r\n        </ion-item>\r\n      </div>\r\n    </ion-content> -->\r\n        \r\n\r\n  </div>\r\n\r\n  \r\n\r\n  <!-- <div class=\"ion-padding\">\r\n    <ion-item lines=\"none\">\r\n      <ion-label position=\"stacked\" slot=\"start\" class=\"tell-txt\">What do you want to store here?</ion-label>\r\n    </ion-item> -->\r\n\r\n    <!-- <ion-chip>\r\n      <ion-label>pots</ion-label>\r\n      <ion-icon name=\"close-circle\"></ion-icon>\r\n    </ion-chip> -->\r\n    \r\n<!-- \r\n    <ion-item>\r\n      <ion-chip *ngFor=\"let c of chips; let i = index;\">\r\n      <ion-label>{{c}}</ion-label>\r\n      <ion-icon name=\"close\" (click)=\"removeItem(i)\"></ion-icon>\r\n      </ion-chip>\r\n      <ion-input type=\"text\" [(ngModel)]=\"storeItem\" (keyup.Space)= \"doSomething(storeItem)\"></ion-input>\r\n    </ion-item> -->\r\n\r\n    <!-- <ion-textarea slot=\"start\" placeholder=\"A giant teddy bear\" [(ngModel)]=\"description\" rows=\"1\">\r\n    </ion-textarea> -->\r\n\r\n \r\n      <!-- <ion-list slot=\"start\">     \r\n        <ion-chip>\r\n          <ion-label>compact cars</ion-label>\r\n          <ion-icon name=\"close-circle\"  (click)=\"removeItem(i)></ion-icon>\r\n        </ion-chip>\r\n        \r\n        <ion-chip>\r\n          <ion-label>big cars</ion-label>\r\n          <ion-icon name=\"close-circle\"></ion-icon>\r\n        </ion-chip>\r\n\r\n        <ion-chip>\r\n          <ion-label>tall lamp box</ion-label>\r\n          <ion-icon name=\"close-circle\"></ion-icon>\r\n        </ion-chip>\r\n\r\n        <ion-chip>\r\n          <ion-label>short & wide box</ion-label>\r\n          <ion-icon name=\"close-circle\"></ion-icon>\r\n        </ion-chip>\r\n\r\n        <ion-chip>\r\n          <ion-label>bulky box</ion-label>\r\n          <ion-icon name=\"close-circle\"></ion-icon>\r\n        </ion-chip>\r\n      </ion-list> -->\r\n<!--       \r\n  </div>  -->\r\n\r\n</ion-content>\r\n<ion-footer>\r\n  <ion-toolbar>\r\n    <ion-button expand=\"block\" color=\"unit-btn\" shape=\"round\" (click)=\"booking(data)\">\r\n      Select Dates | ${{data.pricing.daily}}/day\r\n    </ion-button>\r\n  </ion-toolbar>\r\n</ion-footer>\r\n";
      /***/
    },

    /***/
    "./src/app/pages/tanent/place-detail/place-detail-routing.module.ts":
    /*!**************************************************************************!*\
      !*** ./src/app/pages/tanent/place-detail/place-detail-routing.module.ts ***!
      \**************************************************************************/

    /*! exports provided: PlaceDetailPageRoutingModule */

    /***/
    function srcAppPagesTanentPlaceDetailPlaceDetailRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PlaceDetailPageRoutingModule", function () {
        return PlaceDetailPageRoutingModule;
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


      var _place_detail_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./place-detail.page */
      "./src/app/pages/tanent/place-detail/place-detail.page.ts");

      var routes = [{
        path: '',
        component: _place_detail_page__WEBPACK_IMPORTED_MODULE_3__["PlaceDetailPage"]
      }];

      var PlaceDetailPageRoutingModule = function PlaceDetailPageRoutingModule() {
        _classCallCheck(this, PlaceDetailPageRoutingModule);
      };

      PlaceDetailPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], PlaceDetailPageRoutingModule);
      /***/
    },

    /***/
    "./src/app/pages/tanent/place-detail/place-detail.module.ts":
    /*!******************************************************************!*\
      !*** ./src/app/pages/tanent/place-detail/place-detail.module.ts ***!
      \******************************************************************/

    /*! exports provided: PlaceDetailPageModule */

    /***/
    function srcAppPagesTanentPlaceDetailPlaceDetailModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PlaceDetailPageModule", function () {
        return PlaceDetailPageModule;
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


      var _place_detail_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./place-detail-routing.module */
      "./src/app/pages/tanent/place-detail/place-detail-routing.module.ts");
      /* harmony import */


      var _place_detail_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./place-detail.page */
      "./src/app/pages/tanent/place-detail/place-detail.page.ts");

      var PlaceDetailPageModule = function PlaceDetailPageModule() {
        _classCallCheck(this, PlaceDetailPageModule);
      };

      PlaceDetailPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _place_detail_routing_module__WEBPACK_IMPORTED_MODULE_5__["PlaceDetailPageRoutingModule"]],
        declarations: [_place_detail_page__WEBPACK_IMPORTED_MODULE_6__["PlaceDetailPage"]]
      })], PlaceDetailPageModule);
      /***/
    },

    /***/
    "./src/app/pages/tanent/place-detail/place-detail.page.scss":
    /*!******************************************************************!*\
      !*** ./src/app/pages/tanent/place-detail/place-detail.page.scss ***!
      \******************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppPagesTanentPlaceDetailPlaceDetailPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "ion-toolbar {\n  --background-color: transparent;\n  --ion-color-base: transparent !important;\n}\n\n.slider {\n  border-radius: 5px;\n}\n\n.slider-slide {\n  color: #000;\n  background-color: \"tertiary\";\n  height: 100%;\n}\n\n.swiper-slide img {\n  max-height: 100%;\n  max-width: 100%;\n  pointer-events: none;\n}\n\n.md .swiper-slide .swiper-slide-active,\n.ios .swiper-slide .swiper-slide-active,\n.wp .swiper-slide .swiper-slide-active {\n  width: 100px;\n}\n\n.reviews {\n  font-size: small;\n  font-weight: 400;\n}\n\n:host {\n  background-color: \"tertiary\";\n}\n\nion-content {\n  --background: transparent;\n}\n\n.content {\n  background-color: \"tertiary\";\n  height: auto !important;\n  border-radius: 25px;\n  padding-top: 0px;\n  box-shadow: 0px 0px 10px #a3a4a7;\n  margin-top: -28px;\n  border-bottom-left-radius: 0;\n  border-bottom-right-radius: 0;\n  position: relative;\n  z-index: 1;\n}\n\n.swiper-pagination-bullet-active {\n  background: #fff;\n}\n\n.user-details ion-col p {\n  padding-top: 0px;\n  margin-top: 0px;\n}\n\nion-item ion-label .rating {\n  text-align: left !important;\n}\n\nion-item ion-label .card-content {\n  text-align: left !important;\n  color: #000;\n  font-size: 11px !important;\n  margin-top: 6px;\n  margin-bottom: 6px;\n  font-family: 'medium';\n}\n\nion-item ion-label .card-content span {\n  color: #9b9b9b;\n}\n\nion-col ion-button {\n  font-size: 8px;\n  text-transform: capitalize;\n  margin-bottom: 10px;\n}\n\nion-col ion-button button {\n  font-size: 9px;\n  padding: 12px 0px;\n  font-family: 'medium';\n}\n\n.category ion-col {\n  text-align: center;\n}\n\n.category ion-col div {\n  border-radius: 0;\n  padding: 0px;\n  display: inline-block;\n}\n\n.category ion-col span {\n  color: #5A5A5A;\n  font-size: 12px;\n  display: block;\n  font-family: 'medium';\n}\n\nion-footer {\n  padding: 10px 10px;\n}\n\nion-footer ion-button {\n  font-size: 15px;\n  font-weight: 600;\n  text-transform: capitalize;\n}\n\n.place-details ion-col {\n  padding-left: 15px;\n}\n\n.place-details ion-col h3 {\n  font-size: 13px;\n  font-weight: 400;\n  color: \"secondary\";\n  font-family: 'helveticaneuebold';\n}\n\n.place-details ion-col p {\n  font-size: 12px;\n  color: #9b9b9b;\n}\n\nhr {\n  display: block;\n  margin-top: 0.5em;\n  margin-bottom: 0.5em;\n  margin-left: 25px;\n  margin-right: 25px;\n  border: 0.5px solid #cacaca;\n  height: 0px;\n}\n\n.tour {\n  position: absolute;\n  top: 20px;\n  z-index: 9999;\n  top: 10px;\n  right: 20px;\n}\n\n.tour ion-badge {\n  padding: 10px 20px;\n  font-size: 10px;\n  border-radius: 15px;\n}\n\n.otherInfo ion-col {\n  padding-left: 15px;\n}\n\n.otherInfo ion-col h3 {\n  font-size: 13px;\n  font-weight: bold;\n}\n\n.otherInfo ion-col p {\n  font-size: 12px;\n  color: #9b9b9b;\n}\n\n.location_info ion-row {\n  padding-left: 15px;\n}\n\n.location_info ion-row h3 {\n  font-size: 16px;\n  font-weight: 400;\n  color: \"secondary\";\n  font-family: 'helveticaneuebold';\n  margin-left: 12px;\n}\n\nh2 {\n  font-size: 13px;\n  font-weight: 400;\n  color: \"secondary\";\n  font-family: 'helveticaneuebold';\n}\n\n.map_div {\n  width: 320px;\n  height: 200px;\n  position: relative;\n  border-radius: 25px;\n  left: 25px;\n}\n\n.owner_info ion-grid {\n  height: 100%;\n}\n\n.owner_info ion-grid ion-row {\n  height: 33.33%;\n}\n\n.owner_info ion-col {\n  padding-left: 2px;\n}\n\n.owner_info ion-col h2 {\n  font-size: 16px;\n  font-weight: 400;\n  color: \"secondary\";\n  font-family: 'helveticaneuebold';\n}\n\n.owner_info ion-col h3 {\n  padding: 3px;\n  font-size: 12px;\n  color: #9b9b9b;\n}\n\n.owner_info ion-col h3 ion-icon {\n  font-size: 12px;\n}\n\n.owner_info ion-col h3 img {\n  margin-right: 6px;\n  vertical-align: top;\n}\n\n.safety_info ion-col {\n  padding-left: 2px;\n}\n\n.safety_info ion-col h2 {\n  font-size: 13px;\n  font-weight: 400;\n  color: \"secondary\";\n  font-family: 'helveticaneuebold';\n}\n\n.safety_info ion-col p {\n  padding: 3px;\n  font-size: 12px;\n  color: #9b9b9b;\n}\n\n.safety_info ion-col p ion-icon {\n  font-size: 12px;\n}\n\n.sc-ion-label-ios-s h2 {\n  font-size: 13px;\n  font-weight: 400;\n  margin-top: 0px;\n  padding-top: 0;\n  font-family: 'helveticaneuebold';\n  color: \"tertiary\";\n  margin-bottom: 0;\n  padding-bottom: 0;\n}\n\n.swiper-slide img {\n  width: 100%;\n  border-radius: 0;\n}\n\n.back {\n  position: absolute;\n  z-index: 9999;\n  top: 40px;\n  left: 20px;\n}\n\n.contact-btn {\n  --padding-start: 0px;\n  --padding-end: 0px;\n  height: 30px;\n}\n\n.check-btn {\n  --padding-start: 0px;\n  --padding-end: 0px;\n  height: 30px;\n}\n\nion-avatar {\n  margin-right: 20px !important;\n  margin-top: 0px;\n  padding-top: 0px;\n  height: 50px !important;\n  width: 70px !important;\n}\n\nion-avatar img {\n  border-radius: 50% !important;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvdGFuZW50L3BsYWNlLWRldGFpbC9wbGFjZS1kZXRhaWwucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksK0JBQW1CO0VBQ25CLHdDQUFpQjtBQUNyQjs7QUFFRTtFQUNFLGtCQUFrQjtBQUN0Qjs7QUFDRTtFQUNFLFdBQVc7RUFDWCw0QkFBNEI7RUFDNUIsWUFBWTtBQUVoQjs7QUFBRTtFQUNFLGdCQUFnQjtFQUNoQixlQUFlO0VBQ2Ysb0JBQW9CO0FBR3hCOztBQURFOzs7RUFJSSxZQUFZO0FBR2xCOztBQUNFO0VBQ0UsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtBQUVwQjs7QUFDRTtFQUNFLDRCQUE0QjtBQUVoQzs7QUFBRTtFQUNFLHlCQUFhO0FBR2pCOztBQUFFO0VBQ0UsNEJBQTRCO0VBQzVCLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsZ0JBQWdCO0VBQ2hCLGdDQUFnQztFQUNoQyxpQkFBaUI7RUFDakIsNEJBQTRCO0VBQzVCLDZCQUE2QjtFQUM3QixrQkFBa0I7RUFDbEIsVUFBVTtBQUdkOztBQURFO0VBQ0UsZ0JBQWdCO0FBSXBCOztBQUZFO0VBR00sZ0JBQWdCO0VBQ2hCLGVBQWU7QUFHdkI7O0FBRUU7RUFHTSwyQkFBMkI7QUFEbkM7O0FBRkU7RUFNTSwyQkFBMkI7RUFDM0IsV0FBVztFQUNYLDBCQUEwQjtFQUMxQixlQUFlO0VBQ2Ysa0JBQWtCO0VBQ2xCLHFCQUFxQjtBQUE3Qjs7QUFYRTtFQWFRLGNBQWM7QUFFeEI7O0FBR0U7RUFFSSxjQUFjO0VBQ2QsMEJBQTBCO0VBQzFCLG1CQUFtQjtBQUR6Qjs7QUFIRTtFQU1NLGNBQWM7RUFDZCxpQkFBaUI7RUFDakIscUJBQXFCO0FBQzdCOztBQUlFO0VBRUksa0JBQWtCO0FBRnhCOztBQUFFO0VBSU0sZ0JBQWdCO0VBQ2xCLFlBQVk7RUFDWixxQkFBcUI7QUFBM0I7O0FBTkU7RUFTTSxjQUFjO0VBQ2QsZUFBZTtFQUNmLGNBQWM7RUFDZCxxQkFBcUI7QUFDN0I7O0FBSUU7RUFDRSxrQkFBa0I7QUFEdEI7O0FBQUU7RUFHSSxlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLDBCQUEwQjtBQUNoQzs7QUFHRTtFQUVJLGtCQUFrQjtBQUR4Qjs7QUFERTtFQUlNLGVBQWU7RUFDakIsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQixnQ0FBZ0M7QUFDdEM7O0FBUkU7RUFVTSxlQUFlO0VBQ2YsY0FBYztBQUV0Qjs7QUFHRTtFQUNFLGNBQWM7RUFDZCxpQkFBaUI7RUFDakIsb0JBQW9CO0VBQ3BCLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsMkJBQTJCO0VBQzNCLFdBQVc7QUFBZjs7QUFHRTtFQUNFLGtCQUFrQjtFQUNsQixTQUFTO0VBQ1QsYUFBYTtFQUNiLFNBQVM7RUFDVCxXQUFXO0FBQWY7O0FBTEU7RUFPSSxrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLG1CQUFtQjtBQUV6Qjs7QUFDRTtFQUVJLGtCQUFrQjtBQUN4Qjs7QUFIRTtFQUlNLGVBQWU7RUFDZixpQkFBaUI7QUFHekI7O0FBUkU7RUFRTSxlQUFlO0VBQ2YsY0FBYztBQUl0Qjs7QUFBRTtFQUVJLGtCQUFrQjtBQUV4Qjs7QUFKRTtFQUlNLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLGdDQUFnQztFQUNoQyxpQkFBaUI7QUFJekI7O0FBQ0U7RUFDRSxlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQixnQ0FBZ0M7QUFFcEM7O0FBQUU7RUFDRSxZQUFZO0VBQ1osYUFBYTtFQUNiLGtCQUFrQjtFQUNsQixtQkFBbUI7RUFDbkIsVUFBVTtBQUdkOztBQURFO0VBRUksWUFBWTtBQUdsQjs7QUFMRTtFQUtNLGNBQWM7QUFJdEI7O0FBVEU7RUFVSSxpQkFBaUI7QUFHdkI7O0FBYkU7RUFZTSxlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQixnQ0FBZ0M7QUFLeEM7O0FBcEJFO0VBa0JNLFlBQVk7RUFDWixlQUFlO0VBQ2YsY0FBYztBQU10Qjs7QUExQkU7RUFzQlEsZUFBZTtBQVF6Qjs7QUE5QkU7RUF5QlEsaUJBQWlCO0VBQ3JCLG1CQUFtQjtBQVN6Qjs7QUFIRTtFQUVJLGlCQUFpQjtBQUt2Qjs7QUFQRTtFQUlNLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLGdDQUFnQztBQU94Qzs7QUFkRTtFQVVNLFlBQVk7RUFDWixlQUFlO0VBQ2YsY0FBYztBQVF0Qjs7QUFwQkU7RUFjUSxlQUFlO0FBVXpCOztBQUxFO0VBQ0UsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixlQUFlO0VBQ2YsY0FBYztFQUNkLGdDQUFnQztFQUNoQyxpQkFBaUI7RUFDakIsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtBQVFyQjs7QUFORTtFQUVLLFdBQVc7RUFDWCxnQkFBZ0I7QUFRdkI7O0FBTEU7RUFDRSxrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLFNBQVM7RUFDVCxVQUFVO0FBUWQ7O0FBTEU7RUFDRSxvQkFBZ0I7RUFDaEIsa0JBQWM7RUFDZCxZQUFZO0FBUWhCOztBQU5FO0VBQ0Usb0JBQWdCO0VBQ2hCLGtCQUFjO0VBQ2QsWUFBWTtBQVNoQjs7QUFQRTtFQUNFLDZCQUE2QjtFQUM3QixlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLHVCQUF1QjtFQUN2QixzQkFBc0I7QUFVMUI7O0FBZkU7RUFPSSw2QkFBNkI7QUFZbkMiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy90YW5lbnQvcGxhY2UtZGV0YWlsL3BsYWNlLWRldGFpbC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tdG9vbGJhciB7XHJcbiAgICAtLWJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgLS1pb24tY29sb3ItYmFzZTogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcclxuICB9XHJcbiAgXHJcbiAgLnNsaWRlciB7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgfVxyXG4gIC5zbGlkZXItc2xpZGUge1xyXG4gICAgY29sb3I6ICMwMDA7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBcInRlcnRpYXJ5XCI7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgfVxyXG4gIC5zd2lwZXItc2xpZGUgaW1nIHtcclxuICAgIG1heC1oZWlnaHQ6IDEwMCU7XHJcbiAgICBtYXgtd2lkdGg6IDEwMCU7XHJcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcclxuICB9XHJcbiAgLm1kLFxyXG4gIC5pb3MsXHJcbiAgLndwIHtcclxuICAgIC5zd2lwZXItc2xpZGUgLnN3aXBlci1zbGlkZS1hY3RpdmUge1xyXG4gICAgICB3aWR0aDogMTAwcHg7IC8veW91ciB3aWR0aCBoZXJlXHJcbiAgICB9XHJcbiAgfVxyXG4gIFxyXG4gIC5yZXZpZXdzIHtcclxuICAgIGZvbnQtc2l6ZTogc21hbGw7XHJcbiAgICBmb250LXdlaWdodDogNDAwO1xyXG4gIH1cclxuICBcclxuICA6aG9zdCB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBcInRlcnRpYXJ5XCI7XHJcbiAgfVxyXG4gIGlvbi1jb250ZW50IHtcclxuICAgIC0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbiAgfVxyXG4gIFxyXG4gIC5jb250ZW50IHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IFwidGVydGlhcnlcIjtcclxuICAgIGhlaWdodDogYXV0byAhaW1wb3J0YW50O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMjVweDtcclxuICAgIHBhZGRpbmctdG9wOiAwcHg7XHJcbiAgICBib3gtc2hhZG93OiAwcHggMHB4IDEwcHggI2EzYTRhNztcclxuICAgIG1hcmdpbi10b3A6IC0yOHB4O1xyXG4gICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMDtcclxuICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAwO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgei1pbmRleDogMTtcclxuICB9XHJcbiAgLnN3aXBlci1wYWdpbmF0aW9uLWJ1bGxldC1hY3RpdmV7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gIH1cclxuICAudXNlci1kZXRhaWxzIHtcclxuICAgIGlvbi1jb2wge1xyXG4gICAgICBwIHtcclxuICAgICAgICBwYWRkaW5nLXRvcDogMHB4O1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDBweDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuICBcclxuICBpb24taXRlbSB7XHJcbiAgICBpb24tbGFiZWwge1xyXG4gICAgICAucmF0aW5nIHtcclxuICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0ICFpbXBvcnRhbnQ7XHJcbiAgICAgIH1cclxuICAgICAgLmNhcmQtY29udGVudCB7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogbGVmdCAhaW1wb3J0YW50O1xyXG4gICAgICAgIGNvbG9yOiAjMDAwO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTFweCAhaW1wb3J0YW50O1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDZweDtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiA2cHg7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6ICdtZWRpdW0nO1xyXG4gICAgICAgIHNwYW4ge1xyXG4gICAgICAgICAgY29sb3I6ICM5YjliOWI7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG4gIGlvbi1jb2wge1xyXG4gICAgaW9uLWJ1dHRvbiB7XHJcbiAgICAgIGZvbnQtc2l6ZTogOHB4O1xyXG4gICAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcclxuICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICAgICAgYnV0dG9ue1xyXG4gICAgICAgIGZvbnQtc2l6ZTogOXB4O1xyXG4gICAgICAgIHBhZGRpbmc6IDEycHggMHB4O1xyXG4gICAgICAgIGZvbnQtZmFtaWx5OiAnbWVkaXVtJztcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuICBcclxuICAuY2F0ZWdvcnkge1xyXG4gICAgaW9uLWNvbCB7IFxyXG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgIGRpdiB7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMDtcclxuICAgICAgcGFkZGluZzogMHB4O1xyXG4gICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgIH1cclxuICAgICAgc3BhbiB7XHJcbiAgICAgICAgY29sb3I6ICM1QTVBNUE7XHJcbiAgICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgIGZvbnQtZmFtaWx5OiAnbWVkaXVtJztcclxuICAgICAgfVxyXG4gICAgICBcclxuICAgIH1cclxuICB9XHJcbiAgaW9uLWZvb3RlciB7XHJcbiAgICBwYWRkaW5nOiAxMHB4IDEwcHg7XHJcbiAgICBpb24tYnV0dG9uIHtcclxuICAgICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcclxuICAgIH1cclxuICB9XHJcbiAgXHJcbiAgLnBsYWNlLWRldGFpbHMge1xyXG4gICAgaW9uLWNvbCB7XHJcbiAgICAgIHBhZGRpbmctbGVmdDogMTVweDtcclxuICAgICAgaDN7XHJcbiAgICAgICAgZm9udC1zaXplOiAxM3B4O1xyXG4gICAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgICBjb2xvcjogXCJzZWNvbmRhcnlcIjtcclxuICAgICAgZm9udC1mYW1pbHk6ICdoZWx2ZXRpY2FuZXVlYm9sZCc7XHJcbiAgICAgIH1cclxuICAgICAgcCB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgICAgIGNvbG9yOiAjOWI5YjliO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG4gIFxyXG4gIGhyIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgbWFyZ2luLXRvcDogMC41ZW07XHJcbiAgICBtYXJnaW4tYm90dG9tOiAwLjVlbTtcclxuICAgIG1hcmdpbi1sZWZ0OiAyNXB4O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAyNXB4O1xyXG4gICAgYm9yZGVyOiAwLjVweCBzb2xpZCAjY2FjYWNhO1xyXG4gICAgaGVpZ2h0OiAwcHg7XHJcbiAgfVxyXG4gIFxyXG4gIC50b3VyIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMjBweDtcclxuICAgIHotaW5kZXg6IDk5OTk7XHJcbiAgICB0b3A6IDEwcHg7XHJcbiAgICByaWdodDogMjBweDtcclxuICAgIGlvbi1iYWRnZSB7XHJcbiAgICAgIHBhZGRpbmc6IDEwcHggMjBweDtcclxuICAgICAgZm9udC1zaXplOiAxMHB4O1xyXG4gICAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xyXG4gICAgfVxyXG4gIH1cclxuICAub3RoZXJJbmZve1xyXG4gICAgaW9uLWNvbCB7XHJcbiAgICAgIHBhZGRpbmctbGVmdDogMTVweDtcclxuICAgICAgaDN7XHJcbiAgICAgICAgZm9udC1zaXplOiAxM3B4O1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICB9XHJcbiAgICAgIHAge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgICAgICBjb2xvcjogIzliOWI5YjtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuICAubG9jYXRpb25faW5mb3tcclxuICAgIGlvbi1yb3d7XHJcbiAgICAgIHBhZGRpbmctbGVmdDogMTVweDtcclxuICAgICAgaDN7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICAgICAgY29sb3I6IFwic2Vjb25kYXJ5XCI7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6ICdoZWx2ZXRpY2FuZXVlYm9sZCc7IFxyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAxMnB4O1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBcclxuICB9XHJcbiAgaDJ7XHJcbiAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgY29sb3I6IFwic2Vjb25kYXJ5XCI7XHJcbiAgICBmb250LWZhbWlseTogJ2hlbHZldGljYW5ldWVib2xkJztcclxuICB9XHJcbiAgLm1hcF9kaXZ7XHJcbiAgICB3aWR0aDogMzIwcHg7XHJcbiAgICBoZWlnaHQ6IDIwMHB4OyBcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDI1cHg7XHJcbiAgICBsZWZ0OiAyNXB4O1xyXG4gIH1cclxuICAub3duZXJfaW5mb3tcclxuICAgIGlvbi1ncmlkIHtcclxuICAgICAgaGVpZ2h0OiAxMDAlO1xyXG5cclxuICAgICAgaW9uLXJvdyB7XHJcbiAgICAgICAgaGVpZ2h0OiAzMy4zMyU7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICBcclxuICAgIGlvbi1jb2wge1xyXG4gICAgICBwYWRkaW5nLWxlZnQ6IDJweDtcclxuICAgICAgaDJ7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICAgICAgY29sb3I6IFwic2Vjb25kYXJ5XCI7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6ICdoZWx2ZXRpY2FuZXVlYm9sZCc7XHJcbiAgICAgIH1cclxuICAgICAgaDN7XHJcbiAgICAgICAgcGFkZGluZzogM3B4O1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgICAgICBjb2xvcjogIzliOWI5YjtcclxuICAgICAgICBpb24taWNvbntcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgICAgICB9IFxyXG4gICAgICAgIGltZ3tcclxuICAgICAgICAgIG1hcmdpbi1yaWdodDogNnB4O1xyXG4gICAgICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuICBcclxuICAuc2FmZXR5X2luZm97XHJcbiAgICBpb24tY29sIHtcclxuICAgICAgcGFkZGluZy1sZWZ0OiAycHg7XHJcbiAgICAgIGgye1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICAgICAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgICAgIGNvbG9yOiBcInNlY29uZGFyeVwiO1xyXG4gICAgICAgIGZvbnQtZmFtaWx5OiAnaGVsdmV0aWNhbmV1ZWJvbGQnO1xyXG4gICAgICB9XHJcbiAgICAgIHB7XHJcbiAgICAgICAgcGFkZGluZzogM3B4O1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgICAgICBjb2xvcjogIzliOWI5YjtcclxuICAgICAgICBpb24taWNvbntcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgICAgICB9IFxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG4gIC5zYy1pb24tbGFiZWwtaW9zLXMgaDJ7XHJcbiAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgbWFyZ2luLXRvcDogMHB4O1xyXG4gICAgcGFkZGluZy10b3A6IDA7XHJcbiAgICBmb250LWZhbWlseTogJ2hlbHZldGljYW5ldWVib2xkJztcclxuICAgIGNvbG9yOiBcInRlcnRpYXJ5XCI7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAwO1xyXG4gICAgcGFkZGluZy1ib3R0b206IDA7XHJcbiAgfVxyXG4gIC5zd2lwZXItc2xpZGV7XHJcbiAgICAgaW1ne1xyXG4gICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICBib3JkZXItcmFkaXVzOiAwO1xyXG4gICAgIH1cclxuICB9XHJcbiAgLmJhY2t7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB6LWluZGV4OiA5OTk5O1xyXG4gICAgdG9wOiA0MHB4O1xyXG4gICAgbGVmdDogMjBweDtcclxuICB9XHJcbiAgXHJcbiAgLmNvbnRhY3QtYnRue1xyXG4gICAgLS1wYWRkaW5nLXN0YXJ0OiAwcHg7XHJcbiAgICAtLXBhZGRpbmctZW5kOiAwcHg7XHJcbiAgICBoZWlnaHQ6IDMwcHg7XHJcbiAgfVxyXG4gIC5jaGVjay1idG57XHJcbiAgICAtLXBhZGRpbmctc3RhcnQ6IDBweDtcclxuICAgIC0tcGFkZGluZy1lbmQ6IDBweDtcclxuICAgIGhlaWdodDogMzBweDtcclxuICB9XHJcbiAgaW9uLWF2YXRhcntcclxuICAgIG1hcmdpbi1yaWdodDogMjBweCAhaW1wb3J0YW50O1xyXG4gICAgbWFyZ2luLXRvcDogMHB4O1xyXG4gICAgcGFkZGluZy10b3A6IDBweDtcclxuICAgIGhlaWdodDogNTBweCAhaW1wb3J0YW50O1xyXG4gICAgd2lkdGg6IDcwcHggIWltcG9ydGFudDtcclxuICAgIGltZ3tcclxuICAgICAgYm9yZGVyLXJhZGl1czogNTAlICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbiAgfSJdfQ== */";
      /***/
    },

    /***/
    "./src/app/pages/tanent/place-detail/place-detail.page.ts":
    /*!****************************************************************!*\
      !*** ./src/app/pages/tanent/place-detail/place-detail.page.ts ***!
      \****************************************************************/

    /*! exports provided: PlaceDetailPage */

    /***/
    function srcAppPagesTanentPlaceDetailPlaceDetailPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PlaceDetailPage", function () {
        return PlaceDetailPage;
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


      var src_app_utilities_mainfunction__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! src/app/utilities/mainfunction */
      "./src/app/utilities/mainfunction.ts");
      /* harmony import */


      var _start_booking_start_booking_page__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ../start-booking/start-booking.page */
      "./src/app/pages/tanent/start-booking/start-booking.page.ts");
      /* harmony import */


      var src_app_services_global_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! src/app/services/global.service */
      "./src/app/services/global.service.ts");
      /* harmony import */


      var src_app_rating_rating_page__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! src/app/rating/rating.page */
      "./src/app/rating/rating.page.ts");

      var PlaceDetailPage = /*#__PURE__*/function () {
        // storeItem: any;
        // doSomething: any; 
        // removeItem: any; 
        // validateChip: any;
        // doValidate: any;
        function PlaceDetailPage(route, router, modalCtrl, loader, _api, storage, _gs) {
          var _this = this;

          _classCallCheck(this, PlaceDetailPage);

          this.route = route;
          this.router = router;
          this.modalCtrl = modalCtrl;
          this.loader = loader;
          this._api = _api;
          this.storage = storage;
          this._gs = _gs;
          this.url = _config_config__WEBPACK_IMPORTED_MODULE_6__["config"].url;
          this.amenities = [];
          this.reviewList = [];
          this.displayMap = false;
          this.dates = [];
          this.reviewCount = 0;
          this.route.queryParams.subscribe(function (params) {
            if (params && params.special) {
              _this.data = JSON.parse(params.special);
              console.log(_this.data);
              _this.image = _this.data.images;

              if (_this.data.loc) {
                console.log(_this.data.loc.coordinates);
                _this.displayMap = true;
                var lat = _this.data.loc.coordinates[1];
                var _long = _this.data.loc.coordinates[0];
                setTimeout(function () {
                  _this.loadMap(lat, _long);
                }, 100);
              }

              if (_this.data.videos && _this.data.videos.length) {
                _this.data.videos.map(function (x) {
                  var id = Object(src_app_utilities_mainfunction__WEBPACK_IMPORTED_MODULE_8__["getEmbedUrl"])(x.url);
                  x.url = "//www.youtube.com/embed/".concat(id);
                  return x;
                });

                _this.image = _this.image.concat(_this.data.videos);
              }

              _this.getTimings();
            }

            if (params && params.from) {
              _this.getTimings();
            }
          });

          this._gs.getUpdatedTabs().subscribe(function (status) {
            if (status) {
              _this.token = status.token;
              _this.orgId = status.orgId;
            }
          });
        }

        _createClass(PlaceDetailPage, [{
          key: "ngOnDestroy",
          value: function ngOnDestroy() {}
        }, {
          key: "ionViewWillEnter",
          value: function ionViewWillEnter() {}
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {
            this.getUserData();
          }
        }, {
          key: "getUserData",
          value: function getUserData() {
            var _this2 = this;

            this.getReviews();
            this.storage.get("session").then(function (session) {
              if (session) {
                _this2.storage.get("org").then(function (org) {
                  if (org) {
                    _this2.token = session;
                    _this2.orgId = org;

                    _this2.getTimings();
                  }
                });
              }
            });
          }
        }, {
          key: "getTimings",
          value: function getTimings() {
            var _this3 = this;

            if (this.token) {
              this.loader.present("Getting timeSlots ..");
              var params = {
                placeId: this.data._id,
                token: this.token,
                orgId: this.orgId
              };

              this._api.postRequest(this.url + _config_config__WEBPACK_IMPORTED_MODULE_6__["UNITURL"].getBookingDates, params).subscribe(function (result) {
                return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this3, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
                  return regeneratorRuntime.wrap(function _callee$(_context) {
                    while (1) {
                      switch (_context.prev = _context.next) {
                        case 0:
                          this.loader.dismiss();

                          if (result.success) {
                            if (result.data.dates) {
                              this.dates = result.data.dates;
                            }
                          } else {
                            console.log('error');
                            this.loader.dismiss();
                          }

                        case 2:
                        case "end":
                          return _context.stop();
                      }
                    }
                  }, _callee, this);
                }));
              });
            }
          }
        }, {
          key: "booking",
          value: function booking(place) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
              var placeInfo, myCalendar, event, date, from, to, navigationExtras;
              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      console.log(this.token);

                      if (!this.token) {
                        _context2.next = 15;
                        break;
                      }

                      placeInfo = JSON.stringify(place);
                      _context2.next = 5;
                      return this.modalCtrl.create({
                        component: _start_booking_start_booking_page__WEBPACK_IMPORTED_MODULE_9__["StartBookingPage"],
                        componentProps: {
                          'placeInfo': placeInfo,
                          'dates': JSON.stringify(this.dates)
                        }
                      });

                    case 5:
                      myCalendar = _context2.sent;
                      myCalendar.present();
                      _context2.next = 9;
                      return myCalendar.onDidDismiss();

                    case 9:
                      event = _context2.sent;
                      date = event.data;
                      from = date.from;
                      to = date.to;
                      _context2.next = 17;
                      break;

                    case 15:
                      navigationExtras = {
                        queryParams: {
                          from: "place-detail"
                        }
                      };
                      this.router.navigate(["login"], navigationExtras);

                    case 17:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2, this);
            }));
          }
        }, {
          key: "hostInfo",
          value: function hostInfo() {
            console.log("@@hostInfo");
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
          key: "back",
          value: function back() {
            this.router.navigate(["tabs/tab1"]);
          }
        }, {
          key: "review",
          value: function review(e, unit) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
              var modal;
              return regeneratorRuntime.wrap(function _callee3$(_context3) {
                while (1) {
                  switch (_context3.prev = _context3.next) {
                    case 0:
                      e.stopPropagation();
                      _context3.next = 3;
                      return this.modalCtrl.create({
                        component: src_app_rating_rating_page__WEBPACK_IMPORTED_MODULE_11__["RatingPage"],
                        cssClass: '',
                        componentProps: {
                          'unitId': unit._id,
                          'unitName': unit.name
                        }
                      });

                    case 3:
                      modal = _context3.sent;
                      _context3.next = 6;
                      return modal.present();

                    case 6:
                      return _context3.abrupt("return", _context3.sent);

                    case 7:
                    case "end":
                      return _context3.stop();
                  }
                }
              }, _callee3, this);
            }));
          }
        }, {
          key: "getReviews",
          value: function getReviews() {
            var _this4 = this;

            console.log('HEEREE', this.data._id);
            var url = "https://prod.imkloud.com";
            var params = {
              "auth": {
                "type": "apiKey",
                "apiKey": "xMvXbsyH2oWgwSHrdJ4mrvxRQfb9MA",
                "orgId": "4K4CaGGqcmujsffqc"
              },
              pagination: {
                "skip": 0,
                "limit": 20
              },
              srcProductId: this.data._id
            };

            this._api.postRequest(url + _config_config__WEBPACK_IMPORTED_MODULE_6__["URL"].reviews, params).subscribe(function (result) {
              console.log(result);

              if (result.success) {
                if (result.data) {
                  _this4.reviewCount = result.data.length;
                  _this4.reviewList = result.data;
                }
              }
            }, function (error) {
              console.log(error);
            });
          }
        }]);

        return PlaceDetailPage;
      }();

      PlaceDetailPage.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"]
        }, {
          type: src_app_services_loader_service__WEBPACK_IMPORTED_MODULE_5__["LoaderService"]
        }, {
          type: src_app_services_api_service_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"]
        }, {
          type: _ionic_storage__WEBPACK_IMPORTED_MODULE_7__["Storage"]
        }, {
          type: src_app_services_global_service__WEBPACK_IMPORTED_MODULE_10__["GlobalService"]
        }];
      };

      PlaceDetailPage.propDecorators = {
        mapElement: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
          args: ["map", {
            "static": false
          }]
        }]
      };
      PlaceDetailPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-place-detail',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./place-detail.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/tanent/place-detail/place-detail.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./place-detail.page.scss */
        "./src/app/pages/tanent/place-detail/place-detail.page.scss"))["default"]]
      })], PlaceDetailPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=pages-tanent-place-detail-place-detail-module-es5.js.map