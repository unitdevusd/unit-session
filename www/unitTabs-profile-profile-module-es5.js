(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["unitTabs-profile-profile-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/unitTabs/profile/profile.page.html":
    /*!************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/unitTabs/profile/profile.page.html ***!
      \************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppPagesUnitTabsProfileProfilePageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-content>\r\n  <div class=\"main-div\" *ngIf=\"logged;else notLogged\">\r\n  </div>\r\n  <div class=\"main-heading\" *ngIf=\"logged\">\r\n    <ion-avatar>\r\n      <img *ngIf=\"profileImage; else noProfileImage\" class=\"profile_img\" src=\"{{profileImage}}\">\r\n      <ng-template #noProfileImage>\r\n        <img class=\"profile_img\" src=\"../../../../assets/imgs/dummyUser.png\">\r\n      </ng-template>\r\n    </ion-avatar>\r\n    <h3 class=\"main-title\">{{name}} {{lastName}}</h3>\r\n    <h6 class=\"main-email\">{{email}}</h6>\r\n    <div class=\"edit-profile1\">\r\n      <h3>\r\n        <a routerLink=\"/edit-profile\" style=\"text-decoration: none;\" class=\"edit-profile\">\r\n          Edit profile\r\n          <img class=\"edit_img\" src=\"../../../../assets/imgs/feather-edit.png\">\r\n        </a>\r\n      </h3>\r\n    </div>\r\n  </div>\r\n  <ng-template #notLogged>\r\n    <ion-item style=\"padding-top: 60px;\" lines=\"none\">\r\n      <ion-button expand=\"block\" fill=\"outline\" color=\"unit-btn\" (click)=\"logIn()\">Log in</ion-button>\r\n    </ion-item>\r\n    <ion-item lines=\"none\">\r\n      <p class=\"p-text\">\r\n        <a routerLink=\"/phone-verification\"> New here? Sign up </a>\r\n      </p>\r\n    </ion-item>\r\n\r\n    <ion-item>\r\n      <ion-label>\r\n        Dark Mode\r\n      </ion-label>\r\n      <ion-toggle slot=\"end\" (ionChange)='toggleTheme($event)'></ion-toggle>\r\n    </ion-item>\r\n\r\n    <!-- <ion-item *ngIf=\"version\">\r\n      <ion-note  slot=\"end\" color=\"danger\">{{version}}</ion-note>\r\n        <ion-label>\r\n        App Version\r\n        </ion-label>\r\n    </ion-item> -->\r\n\r\n  </ng-template>\r\n  <br>\r\n  <div class=\"break\">\r\n  </div>\r\n  <div *ngIf=\"logged\">\r\n    <br>\r\n\r\n        <ion-list>\r\n      <!-- <div *ngIf=\"permission.canCreateSpace\">\r\n        <ion-item (click)=\"navigateHost()\" detail=false>\r\n          <img src=\"../../../../assets/imgs/awesome-building.png\" slot=\"end\">\r\n          <ion-label>\r\n            List your space\r\n          </ion-label>\r\n        </ion-item>\r\n        <ion-item (click)=\"becomeTenant()\" detail=false>\r\n          <img src=\"../../../../assets/imgs/ionic-ios-home.png\" slot=\"end\">\r\n          <ion-label>\r\n            View as a Renter\r\n          </ion-label> \r\n        </ion-item>\r\n      </div>\r\n      <div *ngIf=\"!permission.canCreateSpace\">\r\n        <ion-item (click)=\"becomeHost()\" detail=false>\r\n          <img src=\"../../../../assets/imgs/awesome-building.png\" slot=\"end\">\r\n          <ion-label>\r\n            View as an Owner\r\n          </ion-label>\r\n        </ion-item>\r\n      </div> -->\r\n    </ion-list>\r\n    <div>\r\n      <ion-list-header>\r\n        <h3 class=\"account-title\"> Me \r\n          <!-- {{permission.canBook}}  -->\r\n        </h3>\r\n      </ion-list-header>\r\n      <ion-list>\r\n        <ion-item (click)=\"chooseRole()\" detail=false>\r\n          <ion-icon name=\"arrow-forward-outline\" slot=\"end\"></ion-icon>\r\n          <!-- <img src=\"../../../../assets/imgs/awesome-user-edit.png\" slot=\"end\"> -->\r\n          <ion-label *ngIf=\"!permission.canCreateSpace\">\r\n            Switch to Host view\r\n          </ion-label>\r\n          <ion-label *ngIf=\"permission.canCreateSpace\">\r\n            Switch to Renter view\r\n          </ion-label>\r\n        </ion-item>\r\n        <ion-item>\r\n          <ion-label>\r\n            Dark Mode\r\n          </ion-label>\r\n          <ion-toggle slot=\"end\" (ionChange)='toggleTheme($event)'></ion-toggle>\r\n        </ion-item>\r\n\r\n        <ion-item routerLink=\"/payment\" detail=false *ngIf=\"permission.paymentCanpay\">\r\n          <img src=\"../../../../assets/imgs/ionic-md-card.png\" slot=\"end\">\r\n          <ion-label>Payment</ion-label>\r\n        </ion-item>\r\n        <ion-item *ngFor=\"let p of settingPages\" [routerLink]=\"[p.url]\" detail=false>\r\n          <ion-label>\r\n            {{p.title}}\r\n          </ion-label>\r\n          <img src=\"{{p.icon}}\" slot=\"end\">\r\n        </ion-item>\r\n        <ion-item routerLink=\"/checkr\" detail=false>\r\n          <ion-label>\r\n            Personal info\r\n          </ion-label>\r\n          <img src=\"../../../../assets/imgs/awesome-user-edit.png\" slot=\"end\">\r\n        </ion-item>\r\n      </ion-list>\r\n    </div>\r\n    <!-- FOR HOST -->\r\n    \r\n    <!-- <ion-list-header>\r\n      <h3 class=\"account-title\"> Me </h3>\r\n    </ion-list-header>\r\n\r\n    <ion-item (click)=\"chooseRole()\" detail=false>\r\n      <ion-icon name=\"arrow-forward-outline\" slot=\"end\"></ion-icon>\r\n      <img src=\"../../../../assets/imgs/awesome-user-edit.png\" slot=\"end\">\r\n      <ion-label>\r\n        Switch to Renter/Host view\r\n      </ion-label>\r\n    </ion-item>\r\n\r\n    <ion-item>\r\n      <ion-label>\r\n        Dark Mode\r\n      </ion-label>\r\n      <ion-toggle slot=\"end\" (ionChange)='toggleTheme($event)'></ion-toggle>\r\n    </ion-item> -->\r\n\r\n      <ion-list-header>\r\n        <h4 class=\"account-title\"> Earnings </h4>\r\n      </ion-list-header>\r\n    <ion-list *ngIf=\"permission.earningcanRetrive\">\r\n      <ion-item routerLink=\"/view-earnings\" detail=false style=\"padding-right: 0px !important\">\r\n        <ion-icon class=\"icon-style\" slot=\"end\" name=\"cash-outline\"></ion-icon>\r\n        <ion-label>View Earnings</ion-label>\r\n      </ion-item>\r\n    </ion-list>\r\n  </div>\r\n  \r\n    <!-- <ion-list-header>\r\n      <h3 class=\"account-title\"> Referrals </h3>\r\n    </ion-list-header> -->\r\n    <ion-list *ngIf=\"permission.canSendInvite\">\r\n    <ion-item detail=false (click)=\"invite()\">\r\n      <img src=\"../../../../assets/imgs/ionic-md-gift.png\" slot=\"end\">\r\n      <ion-label>Invite friends</ion-label>\r\n    </ion-item>\r\n  </ion-list>\r\n\r\n\r\n  <ion-list-header>\r\n    <h3 class=\"account-title\"> Legal </h3>\r\n  </ion-list-header>\r\n  <ion-list>\r\n    <ion-item (click)=\"consultLawyer()\" detail=false>\r\n      <img src=\"../../../../assets/imgs/ionic-md-document.png\" slot=\"end\">\r\n      <ion-label>\r\n        Consult a legal pro\r\n      </ion-label>\r\n    </ion-item>\r\n\r\n    <!--Terms of Service currently leads to Privacy Policy page. \r\n      Let's create Terms of Service page, then we can uncomment ion-label below-->\r\n\r\n    <!-- <ion-item (click)=\"terms()\">\r\n      <img src=\"../../../../assets/imgs/ionic-md-document.png\" slot=\"end\">\r\n      <ion-label>\r\n        Terms of Service\r\n      </ion-label>\r\n    </ion-item> -->\r\n\r\n    <ion-item (click)=\"privacy()\">\r\n      <img src=\"../../../../assets/imgs/feather-settings.png\" slot=\"end\">\r\n      <ion-label>\r\n        Privacy Policy\r\n      </ion-label>\r\n    </ion-item>\r\n  </ion-list>\r\n\r\n  <ion-list>\r\n    <!-- <ion-list-header>\r\n      <h3 class=\"account-title\"> Support </h3>\r\n    </ion-list-header>    -->\r\n\r\n    <!-- <ion-item *ngIf=\"version\">\r\n      <ion-note  slot=\"end\" color=\"danger\">{{version}}</ion-note>\r\n        <ion-label>\r\n        App Version\r\n        </ion-label>\r\n    </ion-item> -->\r\n  </ion-list>\r\n  \r\n  <!-- <ion-item routerLink=\"/checkr\" detail=false>\r\n    <ion-label>\r\n      Personal info\r\n    </ion-label>\r\n    <img src=\"../../../../assets/imgs/awesome-user-edit.png\" slot=\"end\">\r\n  </ion-item> -->\r\n  \r\n    <div *ngIf=\"logged\">\r\n    <ion-item (click)=\"logout()\">\r\n      <ion-label color=\"danger\" class=\"logout\">\r\n        Logout\r\n      </ion-label>\r\n    </ion-item>\r\n  </div>\r\n</ion-content>";
      /***/
    },

    /***/
    "./src/app/pages/unitTabs/profile/profile-routing.module.ts":
    /*!******************************************************************!*\
      !*** ./src/app/pages/unitTabs/profile/profile-routing.module.ts ***!
      \******************************************************************/

    /*! exports provided: ProfilePageRoutingModule */

    /***/
    function srcAppPagesUnitTabsProfileProfileRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ProfilePageRoutingModule", function () {
        return ProfilePageRoutingModule;
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


      var _profile_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./profile.page */
      "./src/app/pages/unitTabs/profile/profile.page.ts");

      var routes = [{
        path: '',
        component: _profile_page__WEBPACK_IMPORTED_MODULE_3__["ProfilePage"]
      }];

      var ProfilePageRoutingModule = function ProfilePageRoutingModule() {
        _classCallCheck(this, ProfilePageRoutingModule);
      };

      ProfilePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], ProfilePageRoutingModule);
      /***/
    },

    /***/
    "./src/app/pages/unitTabs/profile/profile.module.ts":
    /*!**********************************************************!*\
      !*** ./src/app/pages/unitTabs/profile/profile.module.ts ***!
      \**********************************************************/

    /*! exports provided: ProfilePageModule */

    /***/
    function srcAppPagesUnitTabsProfileProfileModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ProfilePageModule", function () {
        return ProfilePageModule;
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


      var _profile_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./profile-routing.module */
      "./src/app/pages/unitTabs/profile/profile-routing.module.ts");
      /* harmony import */


      var _profile_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./profile.page */
      "./src/app/pages/unitTabs/profile/profile.page.ts");

      var ProfilePageModule = function ProfilePageModule() {
        _classCallCheck(this, ProfilePageModule);
      };

      ProfilePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _profile_routing_module__WEBPACK_IMPORTED_MODULE_5__["ProfilePageRoutingModule"]],
        declarations: [_profile_page__WEBPACK_IMPORTED_MODULE_6__["ProfilePage"]]
      })], ProfilePageModule);
      /***/
    },

    /***/
    "./src/app/pages/unitTabs/profile/profile.page.scss":
    /*!**********************************************************!*\
      !*** ./src/app/pages/unitTabs/profile/profile.page.scss ***!
      \**********************************************************/

    /*! exports provided: default */

    /***/
    function srcAppPagesUnitTabsProfileProfilePageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "ion-content {\n  --ion-background-color: \"primary\";\n}\n\n.circle-pic {\n  width: 100px;\n  height: 100px;\n  border-radius: 50%;\n  display: block;\n  margin-left: auto;\n  margin-right: auto;\n  -o-object-fit: cover;\n     object-fit: cover;\n}\n\n.icon-style {\n  color: \"senary\";\n  width: 25px;\n  height: 25px;\n}\n\nion-item ion-label h2 {\n  font-size: medium;\n  font-weight: bold;\n  color: \"quaternary\";\n}\n\nion-item ion-button {\n  height: 100%;\n}\n\nion-list ion-label {\n  color: \"tertiary\" !important;\n  font-size: 16px !important;\n  font-family: \"medium\";\n  margin-bottom: 0px;\n  padding-left: 6px;\n  margin-top: 0;\n}\n\nion-list ion-item {\n  padding-right: 17px !important;\n  --border-color: \"medium\";\n}\n\nion-list h4 {\n  padding-left: 5px !important;\n}\n\n.p-text {\n  font-size: 14px;\n  line-height: 1.5;\n  color: var(--ion-color-step-600, \"quaternary\");\n}\n\n.p-text a {\n  text-decoration: none;\n  color: \"primary\";\n}\n\n.hydrated img {\n  margin-bottom: 0px;\n  margin-right: -10px;\n}\n\n.break {\n  padding: 4px;\n  background-color: \"quinary\";\n}\n\n.main-div {\n  background: #ed1b25;\n  height: 100px;\n  position: relative;\n}\n\n.account-title {\n  font-size: 17px;\n  color: \"primary\";\n  font-family: \"helveticaneuebold\";\n  margin-bottom: 2px;\n}\n\n.logout {\n  font-size: 16px !important;\n  font-family: \"helveticaneuebold\";\n  padding-left: 8px;\n  margin-top: 10px;\n}\n\n.main-title {\n  font-family: helveticaneuebold;\n  margin-bottom: 0;\n  padding-bottom: 0;\n  margin-top: 45px;\n}\n\n.main-email {\n  margin-top: 5px;\n  color: \"senary\";\n  font-family: medium;\n}\n\n.edit-profile {\n  color: \"secondary\";\n  font-family: medium;\n}\n\nion-item .item-native {\n  background-color: inherit;\n}\n\n.main-heading {\n  background: inherit;\n  background-color: inherit;\n  position: relative;\n  z-index: 999;\n  margin: -42px 26px -10px;\n}\n\n.profile_img {\n  height: 80px;\n  width: 300px;\n  display: block;\n  max-width: 80px;\n}\n\n.edit-profile1 {\n  position: absolute;\n  right: 0;\n  top: -7px;\n}\n\n.edit-profile {\n  color: #fff;\n  font-family: medium;\n  font-size: 14px;\n}\n\n.edit_img {\n  height: auto;\n  width: auto;\n  display: inline-block;\n  max-width: 80px;\n  margin-top: -9px;\n}\n\n.top-heading {\n  color: \"tertiary\";\n}\n\n.top-heading-popular {\n  color: \"tertiary\";\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvdW5pdFRhYnMvcHJvZmlsZS9wcm9maWxlLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGlDQUF1QjtBQUMzQjs7QUFDRTtFQUNFLFlBQVk7RUFDWixhQUFhO0VBRWIsa0JBQWtCO0VBQ2xCLGNBQWM7RUFDZCxpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLG9CQUFpQjtLQUFqQixpQkFBaUI7QUFFckI7O0FBQUU7RUFDRSxlQUFlO0VBQ2YsV0FBVztFQUNYLFlBQVk7QUFHaEI7O0FBREU7RUFHTSxpQkFBaUI7RUFDakIsaUJBQWlCO0VBQ2pCLG1CQUFtQjtBQUUzQjs7QUFQRTtFQVNJLFlBQVk7QUFFbEI7O0FBQ0U7RUFFSSw0QkFBNEI7RUFDNUIsMEJBQTBCO0VBQzFCLHFCQUFxQjtFQUNyQixrQkFBa0I7RUFDbEIsaUJBQWlCO0VBQ2pCLGFBQWE7QUFDbkI7O0FBUkU7RUFVSSw4QkFBOEI7RUFDOUIsd0JBQWU7QUFFckI7O0FBYkU7RUFjSSw0QkFBNEI7QUFHbEM7O0FBQUU7RUFDRSxlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLDhDQUE4QztBQUdsRDs7QUFORTtFQUtJLHFCQUFxQjtFQUNyQixnQkFBZ0I7QUFLdEI7O0FBRkU7RUFDRSxrQkFBa0I7RUFDbEIsbUJBQW1CO0FBS3ZCOztBQUhFO0VBQ0UsWUFBWTtFQUNaLDJCQUEyQjtBQU0vQjs7QUFKRTtFQVlFLG1CQUFnQztFQUNoQyxhQUFhO0VBQ2Isa0JBQWtCO0FBSnRCOztBQU1FO0VBQ0UsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixnQ0FBZ0M7RUFDaEMsa0JBQWtCO0FBSHRCOztBQUtFO0VBQ0UsMEJBQTBCO0VBQzFCLGdDQUFnQztFQUNoQyxpQkFBaUI7RUFDakIsZ0JBQWdCO0FBRnBCOztBQUlFO0VBQ0UsOEJBQThCO0VBQzlCLGdCQUFnQjtFQUNoQixpQkFBaUI7RUFDakIsZ0JBQWdCO0FBRHBCOztBQUdFO0VBQ0UsZUFBZTtFQUNmLGVBQWU7RUFDZixtQkFBbUI7QUFBdkI7O0FBRUU7RUFDRSxrQkFBa0I7RUFDbEIsbUJBQW1CO0FBQ3ZCOztBQUNFO0VBRUkseUJBQXlCO0FBQy9COztBQUVFO0VBQ0UsbUJBQW1CO0VBQ25CLHlCQUF5QjtFQUN6QixrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLHdCQUF3QjtBQUM1Qjs7QUFFRTtFQUNFLFlBQVk7RUFDWixZQUFZO0VBQ1osY0FBYztFQUNkLGVBQWU7QUFDbkI7O0FBQ0U7RUFDRSxrQkFBa0I7RUFDbEIsUUFBUTtFQUNSLFNBQVM7QUFFYjs7QUFBRTtFQUNFLFdBQVc7RUFDWCxtQkFBbUI7RUFDbkIsZUFBZTtBQUduQjs7QUFERTtFQUNFLFlBQVk7RUFDWixXQUFXO0VBQ1gscUJBQXFCO0VBQ3JCLGVBQWU7RUFDZixnQkFBZ0I7QUFJcEI7O0FBRkU7RUFDRSxpQkFBaUI7QUFLckI7O0FBSEU7RUFDRSxpQkFBaUI7QUFNckIiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy91bml0VGFicy9wcm9maWxlL3Byb2ZpbGUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNvbnRlbnQge1xyXG4gICAgLS1pb24tYmFja2dyb3VuZC1jb2xvcjogXCJwcmltYXJ5XCI7XHJcbiAgfVxyXG4gIC5jaXJjbGUtcGljIHtcclxuICAgIHdpZHRoOiAxMDBweDtcclxuICAgIGhlaWdodDogMTAwcHg7XHJcbiAgICAtd2Via2l0LWJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XHJcbiAgICBvYmplY3QtZml0OiBjb3ZlcjtcclxuICB9XHJcbiAgLmljb24tc3R5bGUge1xyXG4gICAgY29sb3I6IFwic2VuYXJ5XCI7XHJcbiAgICB3aWR0aDogMjVweDtcclxuICAgIGhlaWdodDogMjVweDtcclxuICB9XHJcbiAgaW9uLWl0ZW0ge1xyXG4gICAgaW9uLWxhYmVsIHtcclxuICAgICAgaDIge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogbWVkaXVtO1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgIGNvbG9yOiBcInF1YXRlcm5hcnlcIjtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgaW9uLWJ1dHRvbiB7XHJcbiAgICAgIGhlaWdodDogMTAwJTtcclxuICAgIH1cclxuICB9XHJcbiAgaW9uLWxpc3Qge1xyXG4gICAgaW9uLWxhYmVsIHtcclxuICAgICAgY29sb3I6IFwidGVydGlhcnlcIiAhaW1wb3J0YW50O1xyXG4gICAgICBmb250LXNpemU6IDE2cHggIWltcG9ydGFudDtcclxuICAgICAgZm9udC1mYW1pbHk6IFwibWVkaXVtXCI7XHJcbiAgICAgIG1hcmdpbi1ib3R0b206IDBweDtcclxuICAgICAgcGFkZGluZy1sZWZ0OiA2cHg7XHJcbiAgICAgIG1hcmdpbi10b3A6IDA7XHJcbiAgICB9XHJcbiAgICBpb24taXRlbSB7XHJcbiAgICAgIHBhZGRpbmctcmlnaHQ6IDE3cHggIWltcG9ydGFudDtcclxuICAgICAgLS1ib3JkZXItY29sb3I6IFwibWVkaXVtXCI7XHJcbiAgICB9XHJcbiAgICBoNCB7XHJcbiAgICAgIHBhZGRpbmctbGVmdDogNXB4ICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbiAgfVxyXG4gIC5wLXRleHQge1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDEuNTtcclxuICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3Itc3RlcC02MDAsIFwicXVhdGVybmFyeVwiKTtcclxuICAgIGEge1xyXG4gICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICAgIGNvbG9yOiBcInByaW1hcnlcIjtcclxuICAgIH1cclxuICB9XHJcbiAgLmh5ZHJhdGVkIGltZyB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAwcHg7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IC0xMHB4O1xyXG4gIH1cclxuICAuYnJlYWsge1xyXG4gICAgcGFkZGluZzogNHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogXCJxdWluYXJ5XCI7XHJcbiAgfVxyXG4gIC5tYWluLWRpdiB7XHJcbiAgICAvLyBiYWNrZ3JvdW5kOiBcInByaW1hcnktcmdiXCI7XHJcbiAgICAvLyBiYWNrZ3JvdW5kOiByZ2IoMTg2LDM0LDY0KTtcclxuICAgIFxyXG4gICAgLy8gYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KFxyXG4gICAgLy8gICA5MGRlZyxcclxuICAgIC8vICAgcmdiYSgyMzcsIDI3LCAzNywgMSkgMzklLFxyXG4gICAgLy8gICByZ2JhKDI1NSwgMTE0LCAxMjEsIDEpIDYwJSxcclxuICAgIC8vICAgcmdiYSgyNTUsIDExNCwgMTIxLCAxKSA3NCUsXHJcbiAgICAvLyAgIHJnYmEoMjU1LCAxMTQsIDEyMSwgMSkgMTAwJVxyXG4gICAgLy8gKTtcclxuXHJcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDIzNywgMjcsIDM3LCAxKTtcclxuICAgIGhlaWdodDogMTAwcHg7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgfVxyXG4gIC5hY2NvdW50LXRpdGxlIHtcclxuICAgIGZvbnQtc2l6ZTogMTdweDtcclxuICAgIGNvbG9yOiBcInByaW1hcnlcIjtcclxuICAgIGZvbnQtZmFtaWx5OiBcImhlbHZldGljYW5ldWVib2xkXCI7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAycHg7XHJcbiAgfVxyXG4gIC5sb2dvdXQge1xyXG4gICAgZm9udC1zaXplOiAxNnB4ICFpbXBvcnRhbnQ7XHJcbiAgICBmb250LWZhbWlseTogXCJoZWx2ZXRpY2FuZXVlYm9sZFwiO1xyXG4gICAgcGFkZGluZy1sZWZ0OiA4cHg7XHJcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gIH1cclxuICAubWFpbi10aXRsZSB7XHJcbiAgICBmb250LWZhbWlseTogaGVsdmV0aWNhbmV1ZWJvbGQ7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAwO1xyXG4gICAgcGFkZGluZy1ib3R0b206IDA7XHJcbiAgICBtYXJnaW4tdG9wOiA0NXB4O1xyXG4gIH1cclxuICAubWFpbi1lbWFpbCB7XHJcbiAgICBtYXJnaW4tdG9wOiA1cHg7XHJcbiAgICBjb2xvcjogXCJzZW5hcnlcIjtcclxuICAgIGZvbnQtZmFtaWx5OiBtZWRpdW07XHJcbiAgfVxyXG4gIC5lZGl0LXByb2ZpbGUge1xyXG4gICAgY29sb3I6IFwic2Vjb25kYXJ5XCI7XHJcbiAgICBmb250LWZhbWlseTogbWVkaXVtO1xyXG4gIH1cclxuICBpb24taXRlbSB7XHJcbiAgICAuaXRlbS1uYXRpdmUge1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBpbmhlcml0O1xyXG4gICAgfVxyXG4gIH1cclxuICAubWFpbi1oZWFkaW5nIHtcclxuICAgIGJhY2tncm91bmQ6IGluaGVyaXQ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBpbmhlcml0O1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgei1pbmRleDogOTk5O1xyXG4gICAgbWFyZ2luOiAtNDJweCAyNnB4IC0xMHB4O1xyXG4gIH1cclxuICBcclxuICAucHJvZmlsZV9pbWcge1xyXG4gICAgaGVpZ2h0OiA4MHB4O1xyXG4gICAgd2lkdGg6IDMwMHB4O1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBtYXgtd2lkdGg6IDgwcHg7XHJcbiAgfVxyXG4gIC5lZGl0LXByb2ZpbGUxIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHJpZ2h0OiAwO1xyXG4gICAgdG9wOiAtN3B4O1xyXG4gIH1cclxuICAuZWRpdC1wcm9maWxlIHtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgZm9udC1mYW1pbHk6IG1lZGl1bTtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICB9XHJcbiAgLmVkaXRfaW1nIHtcclxuICAgIGhlaWdodDogYXV0bztcclxuICAgIHdpZHRoOiBhdXRvO1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgbWF4LXdpZHRoOiA4MHB4O1xyXG4gICAgbWFyZ2luLXRvcDogLTlweDtcclxuICB9XHJcbiAgLnRvcC1oZWFkaW5ne1xyXG4gICAgY29sb3I6IFwidGVydGlhcnlcIjtcclxuICB9XHJcbiAgLnRvcC1oZWFkaW5nLXBvcHVsYXJ7XHJcbiAgICBjb2xvcjogXCJ0ZXJ0aWFyeVwiO1xyXG4gIH1cclxuIl19 */";
      /***/
    },

    /***/
    "./src/app/pages/unitTabs/profile/profile.page.ts":
    /*!********************************************************!*\
      !*** ./src/app/pages/unitTabs/profile/profile.page.ts ***!
      \********************************************************/

    /*! exports provided: ProfilePage */

    /***/
    function srcAppPagesUnitTabsProfileProfilePageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ProfilePage", function () {
        return ProfilePage;
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


      var _ionic_storage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/storage */
      "./node_modules/@ionic/storage/__ivy_ngcc__/fesm2015/ionic-storage.js");
      /* harmony import */


      var src_app_services_global_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/services/global.service */
      "./src/app/services/global.service.ts");
      /* harmony import */


      var src_app_services_toast_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/app/services/toast.service */
      "./src/app/services/toast.service.ts");
      /* harmony import */


      var _ionic_native_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @ionic-native/social-sharing/ngx */
      "./node_modules/@ionic-native/social-sharing/__ivy_ngcc__/ngx/index.js");
      /* harmony import */


      var _capacitor_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @capacitor/core */
      "./node_modules/@capacitor/core/dist/esm/index.js");
      /* harmony import */


      var _ionic_native_app_version_ngx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @ionic-native/app-version/ngx */
      "./node_modules/@ionic-native/app-version/__ivy_ngcc__/ngx/index.js");
      /* harmony import */


      var src_app_services_api_service_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! src/app/services/api-service.service */
      "./src/app/services/api-service.service.ts");
      /* harmony import */


      var _config_config__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ../../config/config */
      "./src/app/pages/config/config.ts");

      var Device = _capacitor_core__WEBPACK_IMPORTED_MODULE_8__["Plugins"].Device;

      var ProfilePage = /*#__PURE__*/function () {
        function ProfilePage(storage, _gs, alertCtrl, router, _toast, socialSharing, appVersion, navController, _apiService, renderer) {
          var _this = this;

          _classCallCheck(this, ProfilePage);

          this.storage = storage;
          this._gs = _gs;
          this.alertCtrl = alertCtrl;
          this.router = router;
          this._toast = _toast;
          this.socialSharing = socialSharing;
          this.appVersion = appVersion;
          this.navController = navController;
          this._apiService = _apiService;
          this.renderer = renderer;
          this.url = _config_config__WEBPACK_IMPORTED_MODULE_11__["config"].url;
          this.logged = false;
          this.settingPages = [{
            title: 'Password',
            url: '/change-password',
            icon: '../../assets/imgs/feather-lock.png'
          }];
          this.permission = {
            canCreateSpace: false,
            earningcanRetrive: false,
            paymentCanpay: false,
            canviewAdditionalInfo: false,
            canSendInvite: false,
            canBook: false
          };
          this.getRole();
          this.appVersion.getVersionCode().then(function (res) {
            _this.version = res;
          })["catch"](function (error) {
            console.log(error);
          });

          this._gs.getData().subscribe(function (x) {
            if (x != undefined) {
              var user = x;

              _this.getUserData(user);
            }
          });

          this._gs.getUpdatedTabs().subscribe(function (status) {
            if (status) {
              console.log(status.permissions);
              _this.permissionlist = status.permissions;

              _this.setPermissions();
            }
          });

          this._gs.getLogOut().subscribe(function (status) {
            _this.logged = false;
          });

          this.storage.get("session").then(function (session) {
            if (session) {
              _this.storage.get("org").then(function (org) {
                if (org) {
                  _this.token = session;
                  _this.orgId = org;
                }
              });
            }
          });
        }

        _createClass(ProfilePage, [{
          key: "getRole",
          value: function getRole() {
            var _this2 = this;

            var params = {
              apiKey: _config_config__WEBPACK_IMPORTED_MODULE_11__["KEY"].apikey
            };

            this._apiService.postRequest(this.url + _config_config__WEBPACK_IMPORTED_MODULE_11__["URL"].getOnboardRoles, params).subscribe(function (res) {
              return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this2, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
                return regeneratorRuntime.wrap(function _callee$(_context) {
                  while (1) {
                    switch (_context.prev = _context.next) {
                      case 0:
                        if (res.success) {
                          this.whitelistRoles = res.data.roles;
                        }

                      case 1:
                      case "end":
                        return _context.stop();
                    }
                  }
                }, _callee, this);
              }));
            });
          }
        }, {
          key: "setPermissions",
          value: function setPermissions() {
            this.permission.canCreateSpace = this.permissionlist.includes("unit.space.canCreate");
            this.permission.paymentCanpay = this.permissionlist.includes("unit.booking.payment.canPay");
            this.permission.earningcanRetrive = this.permissionlist.includes("unit.myearnings.canRetrive");
            this.permission.canviewAdditionalInfo = this.permissionlist.includes("unit.user.canViewInfo");
            this.permission.canBook = this.permissionlist.includes("unit.space.canBook");
            this.permission.canSendInvite = this.permissionlist.includes("unit.invite.canSendEmail" || false);
          }
        }, {
          key: "toggleTheme",
          value: function toggleTheme(event) {
            if (event.detail.checked) {
              document.body.setAttribute('color-theme', 'dark'); // this.renderer.setAttribute(document.body, 'color-theme', 'dark');
            } else {
              document.body.setAttribute('color-theme', 'light'); // this.renderer.setAttribute(document.body, 'color-theme', 'dark');
            }
          }
        }, {
          key: "getUserData",
          value: function getUserData(user) {
            var _this3 = this;

            console.log(user);

            if (user) {
              this.updateUser(user);
            } else {
              console.log('In');
              this.storage.get('user').then(function (user) {
                if (user) {
                  _this3.updateUser(user);
                }
              });
              this.storage.get('permissions').then(function (permissions) {
                if (permissions) {
                  _this3.permissionlist = permissions;

                  _this3.setPermissions();
                }
              });
            }
          }
        }, {
          key: "updateUser",
          value: function updateUser(user) {
            this.logged = true;
            this.email = user.email;
            this.name = user.firstName;
            this.lastName = user.lastName;
            this.phone = user.phone;

            if (user.profilePic) {
              this.profileImage = user.profilePic;
            } else {
              this.profileImage = "";
            }
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {
            this.getUserData();
          }
        }, {
          key: "logout",
          value: function logout() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
              var _this4 = this;

              var alert;
              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      _context2.next = 2;
                      return this.alertCtrl.create({
                        header: 'LogOut',
                        message: 'Are you sure,you want to logout?',
                        buttons: [{
                          text: 'Cancel',
                          role: 'cancel',
                          cssClass: 'secondary',
                          handler: function handler(blah) {}
                        }, {
                          text: 'Logout',
                          handler: function handler() {
                            _this4.clearAll();
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
          key: "clearAll",
          value: function clearAll() {
            var _this5 = this;

            setTimeout(function () {
              _this5.storage.clear().then(function () {
                console.log('all keys cleared');
              });

              _this5.logged = false;

              _this5._gs.logOut();

              _this5._gs.sendData(false);

              _this5.navController.navigateRoot(['tabs/tab1']);
            }, 200);
          }
        }, {
          key: "logIn",
          value: function logIn() {
            var navigationExtras = {
              queryParams: {
                from: 'tabs/profile'
              }
            };
            this.router.navigate(['login'], navigationExtras);
          } // chooseRole() {
          //   if (!this.token && !this.orgId) {
          //     return false;
          //   }
          //   this._apiService
          //     .postRequest(this.url + UNITURL.updateRole, { token: this.token, orgId: this.orgId, whiteRoles: this.whitelistRoles }).subscribe(
          //       (res) => {
          //         if (res.success) {
          //           this.storage.set("permissions", res.data);
          //           this._gs.updateTabs({
          //             orgId: this.orgId,
          //             token: this.token,
          //             permissions: res.data
          //           });
          //         }
          //       }, (error) => console.log(error)
          //     )
          // }

        }, {
          key: "invite",
          value: function invite() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
              return regeneratorRuntime.wrap(function _callee3$(_context3) {
                while (1) {
                  switch (_context3.prev = _context3.next) {
                    case 0:
                      console.log('Invite send');
                      this.router.navigate(['invite']);

                    case 2:
                    case "end":
                      return _context3.stop();
                  }
                }
              }, _callee3, this);
            }));
          }
        }, {
          key: "consultLawyer",
          value: function consultLawyer() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
              var _this6 = this;

              var alert;
              return regeneratorRuntime.wrap(function _callee4$(_context4) {
                while (1) {
                  switch (_context4.prev = _context4.next) {
                    case 0:
                      _context4.next = 2;
                      return this.alertCtrl.create({
                        header: 'Consult Lawyer',
                        message: 'We will set you up with a free consultation before recommending you to a legal professional. Is this OK?',
                        buttons: [{
                          text: 'No',
                          role: 'cancel',
                          cssClass: 'secondary',
                          handler: function handler(blah) {}
                        }, {
                          text: 'Yes',
                          handler: function handler() {
                            _this6.consult();
                          }
                        }]
                      });

                    case 2:
                      alert = _context4.sent;
                      _context4.next = 5;
                      return alert.present();

                    case 5:
                    case "end":
                      return _context4.stop();
                  }
                }
              }, _callee4, this);
            }));
          }
        }, {
          key: "consult",
          value: function consult() {
            var _this7 = this;

            this.storage.get("org").then(function (org) {
              if (org) {
                _this7.orgId = org;

                _this7.storage.get("loggedUserId").then(function (userId) {
                  _this7.userId = userId;
                });
              }
            });
            var type = 'Legal Advice.';
            var cta_Data = {
              meta: {
                emailId: this.email,
                firstName: this.name,
                lastName: this.lastName,
                contactNumber: this.phone
              },
              subject: "Legal Advice.",
              message: "new lead"
            };

            this._apiService.postRequest(this.url + _config_config__WEBPACK_IMPORTED_MODULE_11__["CTA"].url + this.userId + "/" + this.orgId + "?type=" + type + "&isOpportunity=true", cta_Data).subscribe(function (response) {
              return console.log(response);
            }, function (error) {
              return console.log(error);
            });

            console.log('consult');

            this._toast.presentToast('Legal Team will contact you soon!');
          }
        }, {
          key: "navigateHost",
          value: function navigateHost() {
            var navigationExtras = {
              queryParams: {
                priviousPage: 'tabs/profile'
              }
            };
            this.router.navigate(['add-address'], navigationExtras);
          }
        }, {
          key: "becomeHost",
          value: function becomeHost() {
            console.log('become Host');
          }
        }, {
          key: "becomeTenant",
          value: function becomeTenant() {
            console.log('become Tenant');
          }
        }, {
          key: "terms",
          value: function terms() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
              return regeneratorRuntime.wrap(function _callee5$(_context5) {
                while (1) {
                  switch (_context5.prev = _context5.next) {
                    case 0:
                      _context5.next = 2;
                      return _capacitor_core__WEBPACK_IMPORTED_MODULE_8__["Browser"].open({
                        url: 'https://unitpublicstorage.com/privacy-policy.html'
                      });

                    case 2:
                    case "end":
                      return _context5.stop();
                  }
                }
              }, _callee5);
            }));
          }
        }, {
          key: "privacy",
          value: function privacy() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee6() {
              return regeneratorRuntime.wrap(function _callee6$(_context6) {
                while (1) {
                  switch (_context6.prev = _context6.next) {
                    case 0:
                      _context6.next = 2;
                      return _capacitor_core__WEBPACK_IMPORTED_MODULE_8__["Browser"].open({
                        url: 'https://unitpublicstorage.com/privacy-policy.html'
                      });

                    case 2:
                    case "end":
                      return _context6.stop();
                  }
                }
              }, _callee6);
            }));
          }
        }]);

        return ProfilePage;
      }();

      ProfilePage.ctorParameters = function () {
        return [{
          type: _ionic_storage__WEBPACK_IMPORTED_MODULE_4__["Storage"]
        }, {
          type: src_app_services_global_service__WEBPACK_IMPORTED_MODULE_5__["GlobalService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }, {
          type: src_app_services_toast_service__WEBPACK_IMPORTED_MODULE_6__["ToastService"]
        }, {
          type: _ionic_native_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_7__["SocialSharing"]
        }, {
          type: _ionic_native_app_version_ngx__WEBPACK_IMPORTED_MODULE_9__["AppVersion"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"]
        }, {
          type: src_app_services_api_service_service__WEBPACK_IMPORTED_MODULE_10__["ApiService"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]
        }];
      };

      ProfilePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-profile',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./profile.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/unitTabs/profile/profile.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./profile.page.scss */
        "./src/app/pages/unitTabs/profile/profile.page.scss"))["default"]]
      })], ProfilePage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=unitTabs-profile-profile-module-es5.js.map