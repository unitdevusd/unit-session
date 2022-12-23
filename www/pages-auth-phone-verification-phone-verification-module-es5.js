(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-auth-phone-verification-phone-verification-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/auth/phone-verification/phone-verification.page.html":
    /*!******************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/auth/phone-verification/phone-verification.page.html ***!
      \******************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppPagesAuthPhoneVerificationPhoneVerificationPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-content fullscreen>\r\n  <div class=\"logo\">\r\n    <img src=\"../../../../assets/imgs/logo.png\" />\r\n  </div>\r\n  <div class=\"content\" *ngIf=\"!isOTP\">\r\n    <form [formGroup]=\"contactForm\">\r\n      <ion-list class=\"line-input\">\r\n        <ion-item>\r\n          <ion-label>Country Code</ion-label>\r\n          <ion-select formControlName=\"country_code\">\r\n            <ion-select-option *ngFor=\"let i of countryList\" [value]=\"i.dial_code\"\r\n              (ionSelect)=\"selectCountryCode($event)\">{{i.dial_code}} {{i.name}}\r\n            </ion-select-option>\r\n          </ion-select>\r\n        </ion-item>\r\n      </ion-list>\r\n      <ion-input placeholder=\"Enter Number\" class=\"enter-input\" formControlName=\"mobile\" type=\"tel\"></ion-input>\r\n    </form>\r\n    <ion-button size=\"large\" color=\"maincolor\" fill=\"solid\" size=\"default\" shape=\"round\" expand=\"block\" class=\"m-top\"\r\n      [disabled]=\"!contactForm.valid\" (click)=\"getOtp()\" class=\"same-bt\">\r\n      Verify Contact\r\n    </ion-button>\r\n    <ion-text class=\"already-have\">\r\n      <h5>Already have an account?</h5>\r\n    </ion-text>\r\n    <div class=\"login-text\">\r\n      <a routerLink=\"/login\">Login</a>\r\n    </div>\r\n  </div>\r\n  <div class=\"content-container\" *ngIf=\"isOTP\">\r\n    <h3 class=\"verify-number\">Verify your number</h3>\r\n    <h6 class=\"code-text\">Enter the 4 digit code we just sent you</h6>\r\n    <div class=\"custom-container\">\r\n      <form [formGroup]=\"otpForm\">\r\n        <ion-input #otp1 type=\"tel\" class=\"enter-input\" maxlength=\"1\" formControlName=\"firstDigit\" class=\"code\"\r\n          (keyup)=\"otpController($event,otp2,'')\"></ion-input>\r\n        <ion-input #otp2   type=\"tel\" class=\"enter-input\" maxlength=\"1\" formControlName=\"secondDigit\" class=\"code\"\r\n          (keyup)=\"otpController($event,otp3,otp1)\"></ion-input>\r\n        <ion-input #otp3   type=\"tel\" class=\"enter-input\" maxlength=\"1\" formControlName=\"thirdDigit\" class=\"code\"\r\n          (keyup)=\"otpController($event,otp4,otp2)\"></ion-input>\r\n        <ion-input #otp4  type=\"tel\" class=\"enter-input\" maxlength=\"1\" formControlName=\"forthDigit\" class=\"code\"\r\n          (keyup)=\"otpController($event,'',otp3)\"></ion-input>\r\n      </form>\r\n    </div>\r\n    <ion-button size=\"large\" color=\"maincolor\" fill=\"solid\" size=\"default\" shape=\"round\" expand=\"block\" class=\"m-top\"\r\n      [disabled]=\"!otpForm.valid\" (click)=\"otpVerify()\" class=\"same-bt mt-a\">\r\n      Verify\r\n      OTP</ion-button>\r\n    <ion-text class=\"already-have\">\r\n      <h5>Already have an account?</h5>\r\n    </ion-text>\r\n    <div class=\"login-text\">\r\n      <a (click)=\"loginPage()\">Login</a>\r\n    </div>\r\n  </div>\r\n</ion-content>";
      /***/
    },

    /***/
    "./src/app/pages/auth/phone-verification/phone-verification-routing.module.ts":
    /*!************************************************************************************!*\
      !*** ./src/app/pages/auth/phone-verification/phone-verification-routing.module.ts ***!
      \************************************************************************************/

    /*! exports provided: PhoneVerificationPageRoutingModule */

    /***/
    function srcAppPagesAuthPhoneVerificationPhoneVerificationRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PhoneVerificationPageRoutingModule", function () {
        return PhoneVerificationPageRoutingModule;
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


      var _phone_verification_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./phone-verification.page */
      "./src/app/pages/auth/phone-verification/phone-verification.page.ts");

      var routes = [{
        path: '',
        component: _phone_verification_page__WEBPACK_IMPORTED_MODULE_3__["PhoneVerificationPage"]
      }];

      var PhoneVerificationPageRoutingModule = function PhoneVerificationPageRoutingModule() {
        _classCallCheck(this, PhoneVerificationPageRoutingModule);
      };

      PhoneVerificationPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], PhoneVerificationPageRoutingModule);
      /***/
    },

    /***/
    "./src/app/pages/auth/phone-verification/phone-verification.module.ts":
    /*!****************************************************************************!*\
      !*** ./src/app/pages/auth/phone-verification/phone-verification.module.ts ***!
      \****************************************************************************/

    /*! exports provided: PhoneVerificationPageModule */

    /***/
    function srcAppPagesAuthPhoneVerificationPhoneVerificationModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PhoneVerificationPageModule", function () {
        return PhoneVerificationPageModule;
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


      var _phone_verification_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./phone-verification-routing.module */
      "./src/app/pages/auth/phone-verification/phone-verification-routing.module.ts");
      /* harmony import */


      var _phone_verification_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./phone-verification.page */
      "./src/app/pages/auth/phone-verification/phone-verification.page.ts");

      var PhoneVerificationPageModule = function PhoneVerificationPageModule() {
        _classCallCheck(this, PhoneVerificationPageModule);
      };

      PhoneVerificationPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _phone_verification_routing_module__WEBPACK_IMPORTED_MODULE_5__["PhoneVerificationPageRoutingModule"]],
        declarations: [_phone_verification_page__WEBPACK_IMPORTED_MODULE_6__["PhoneVerificationPage"]]
      })], PhoneVerificationPageModule);
      /***/
    },

    /***/
    "./src/app/pages/auth/phone-verification/phone-verification.page.scss":
    /*!****************************************************************************!*\
      !*** ./src/app/pages/auth/phone-verification/phone-verification.page.scss ***!
      \****************************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppPagesAuthPhoneVerificationPhoneVerificationPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".logo {\n  margin: 20px auto 0px;\n  width: 20%;\n}\n\nion-button {\n  --box-shadow: none !important;\n}\n\nion-header {\n  --ion-background-color: transparent;\n}\n\nion-content {\n  --background: transparent;\n  transform: translate3d(0, 140px, 0);\n}\n\n.content {\n  background-color: \"secondary\";\n  height: 100%;\n  border-radius: 20px;\n  padding-top: 50px;\n}\n\n.line-input {\n  margin-bottom: 0 !important;\n  margin-left: 30px;\n  margin-right: 30px;\n  margin-top: 80px;\n}\n\n.line-input ion-item {\n  --border-color: transparent !important;\n  --background-activated: white;\n  --background-focused: white;\n  --background-hover: white;\n  --highlight-height: 0;\n  border: 1px solid #cdcfcf;\n  border-radius: 50px;\n  color: #707070;\n  height: 45px;\n}\n\n.line-input ion-item.item-has-focus {\n  border: 1px solid var(--ion-color-primary);\n}\n\n.line-input ion-item ion-label {\n  color: #727272 !important;\n  font-size: 14px !important;\n  padding-left: 0px;\n  font-family: medium;\n}\n\n.sc-ion-input-md-h {\n  --padding-top: 7px !important;\n}\n\nion-input {\n  --placeholder-color: #9b9b9b;\n  --placeholder-opacity: 1;\n  margin-left: 7px;\n  font-family: medium;\n}\n\n.enter-input {\n  margin-left: 30px;\n  margin-right: 30px;\n  border: 1px solid #cdcfcf;\n  border-radius: 25px;\n  padding: 30px 50px;\n  width: 85%;\n  height: 45px;\n  margin-top: 15px;\n  color: #727272 !important;\n  font-size: 14px !important;\n  padding-left: 20px !important;\n}\n\nion-select ion-select-option {\n  font-size: 15px;\n  width: 100% !important;\n}\n\n.verify-number {\n  margin-left: 30px;\n  margin-bottom: 0;\n  font-size: 20px;\n  color: \"dark2\";\n  font-family: medium;\n}\n\n.code-text {\n  color: #838383;\n  font-size: 13px;\n  margin-left: 30px;\n  margin-top: 5px;\n  margin-bottom: 0px;\n}\n\n.mt-a {\n  margin-top: 100px !important;\n}\n\n.code {\n  border: 1px solid #cdcfcf;\n  width: 50px;\n  height: 50px;\n  border-radius: 7px;\n  display: inline-block;\n  margin-right: 5px;\n  margin-top: 25px;\n  text-align: center;\n}\n\nion-input {\n  --placeholder-color: #707070;\n  --placeholder-opacity: 1;\n  font-family: medium;\n  margin-left: 7px;\n}\n\na {\n  color: #ed1b25;\n  font-size: 17px;\n  font-family: medium;\n  font-weight: 400;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvYXV0aC9waG9uZS12ZXJpZmljYXRpb24vcGhvbmUtdmVyaWZpY2F0aW9uLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFLRTtFQUNFLHFCQUFxQjtFQUNyQixVQUFVO0FBSmQ7O0FBT0U7RUFDRSw2QkFBYTtBQUpqQjs7QUFNRTtFQUNFLG1DQUF1QjtBQUgzQjs7QUFLRTtFQUNFLHlCQUFhO0VBQ2IsbUNBQW1DO0FBRnZDOztBQUlFO0VBQ0UsNkJBQTZCO0VBQzdCLFlBQVk7RUFDWixtQkFBbUI7RUFDbkIsaUJBQWlCO0FBRHJCOztBQUdFO0VBQ0UsMkJBQTJCO0VBQzNCLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsZ0JBQWdCO0FBQXBCOztBQUpFO0VBTUksc0NBQWU7RUFDZiw2QkFBdUI7RUFDdkIsMkJBQXFCO0VBQ3JCLHlCQUFtQjtFQUNuQixxQkFBbUI7RUFDbkIseUJBQXlCO0VBQ3pCLG1CQUFtQjtFQUNuQixjQUFjO0VBQ2QsWUFBWTtBQUVsQjs7QUFoQkU7RUFnQk0sMENBQTBDO0FBSWxEOztBQXBCRTtFQW1CTSx5QkFBeUI7RUFDekIsMEJBQTBCO0VBQzFCLGlCQUFpQjtFQUNqQixtQkFBbUI7QUFLM0I7O0FBREU7RUFDRSw2QkFBYztBQUlsQjs7QUFGRTtFQUNFLDRCQUFvQjtFQUNwQix3QkFBc0I7RUFDdEIsZ0JBQWdCO0VBQ2hCLG1CQUFtQjtBQUt2Qjs7QUFIRTtFQUNFLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIseUJBQXlCO0VBQ3pCLG1CQUFtQjtFQUNuQixrQkFBa0I7RUFDbEIsVUFBVTtFQUNWLFlBQVk7RUFDWixnQkFBZ0I7RUFDaEIseUJBQXlCO0VBQ3pCLDBCQUEwQjtFQUMxQiw2QkFBNkI7QUFNakM7O0FBSkU7RUFFSSxlQUFlO0VBQ2Ysc0JBQXNCO0FBTTVCOztBQUZFO0VBQ0UsaUJBQWlCO0VBQ2pCLGdCQUFnQjtFQUNoQixlQUFlO0VBQ2YsY0FBYztFQUNkLG1CQUFtQjtBQUt2Qjs7QUFIRTtFQUNFLGNBQWM7RUFDZCxlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLGVBQWU7RUFDZixrQkFBa0I7QUFNdEI7O0FBSkU7RUFDRSw0QkFBNEI7QUFPaEM7O0FBTEU7RUFDRSx5QkFBeUI7RUFDekIsV0FBVztFQUNYLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIscUJBQXFCO0VBQ3JCLGlCQUFpQjtFQUNqQixnQkFBZ0I7RUFDaEIsa0JBQWtCO0FBUXRCOztBQU5FO0VBQ0UsNEJBQW9CO0VBQ3BCLHdCQUFzQjtFQUN0QixtQkFBbUI7RUFDbkIsZ0JBQWdCO0FBU3BCOztBQU5FO0VBQ0UsY0FBYztFQUNkLGVBQWU7RUFDZixtQkFBbUI7RUFDbkIsZ0JBQWdCO0FBU3BCIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvYXV0aC9waG9uZS12ZXJpZmljYXRpb24vcGhvbmUtdmVyaWZpY2F0aW9uLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcclxuICAgIC8vIGJhY2tncm91bmQtY29sb3I6ICM0QzRFNTA7XHJcbiAgICAvLyBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi8uLi8uLi8uLi9hc3NldHMvaW1ncy9wbGFjZTEuanBnXCIpO1xyXG4gIH1cclxuICBcclxuICAubG9nbyB7XHJcbiAgICBtYXJnaW46IDIwcHggYXV0byAwcHg7XHJcbiAgICB3aWR0aDogMjAlO1xyXG4gIH1cclxuXHJcbiAgaW9uLWJ1dHRvbiB7XHJcbiAgICAtLWJveC1zaGFkb3c6IG5vbmUgIWltcG9ydGFudDtcclxuICB9XHJcbiAgaW9uLWhlYWRlciB7XHJcbiAgICAtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICB9XHJcbiAgaW9uLWNvbnRlbnQge1xyXG4gICAgLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMTQwcHgsIDApO1xyXG4gIH1cclxuICAuY29udGVudCB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBcInNlY29uZGFyeVwiO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcclxuICAgIHBhZGRpbmctdG9wOiA1MHB4O1xyXG4gIH1cclxuICAubGluZS1pbnB1dCB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAwICFpbXBvcnRhbnQ7XHJcbiAgICBtYXJnaW4tbGVmdDogMzBweDtcclxuICAgIG1hcmdpbi1yaWdodDogMzBweDtcclxuICAgIG1hcmdpbi10b3A6IDgwcHg7XHJcbiAgICBpb24taXRlbSB7XHJcbiAgICAgIC0tYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xyXG4gICAgICAtLWJhY2tncm91bmQtYWN0aXZhdGVkOiB3aGl0ZTtcclxuICAgICAgLS1iYWNrZ3JvdW5kLWZvY3VzZWQ6IHdoaXRlO1xyXG4gICAgICAtLWJhY2tncm91bmQtaG92ZXI6IHdoaXRlO1xyXG4gICAgICAtLWhpZ2hsaWdodC1oZWlnaHQ6IDA7XHJcbiAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNjZGNmY2Y7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDUwcHg7XHJcbiAgICAgIGNvbG9yOiAjNzA3MDcwO1xyXG4gICAgICBoZWlnaHQ6IDQ1cHg7XHJcbiAgICAgICYuaXRlbS1oYXMtZm9jdXMge1xyXG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcclxuICAgICAgfVxyXG4gICAgICBpb24tbGFiZWwge1xyXG4gICAgICAgIGNvbG9yOiAjNzI3MjcyICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNHB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAwcHg7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6IG1lZGl1bTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuICAuc2MtaW9uLWlucHV0LW1kLWgge1xyXG4gICAgLS1wYWRkaW5nLXRvcDogN3B4ICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG4gIGlvbi1pbnB1dCB7XHJcbiAgICAtLXBsYWNlaG9sZGVyLWNvbG9yOiAjOWI5YjliO1xyXG4gICAgLS1wbGFjZWhvbGRlci1vcGFjaXR5OiAxO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDdweDtcclxuICAgIGZvbnQtZmFtaWx5OiBtZWRpdW07XHJcbiAgfVxyXG4gIC5lbnRlci1pbnB1dCB7XHJcbiAgICBtYXJnaW4tbGVmdDogMzBweDtcclxuICAgIG1hcmdpbi1yaWdodDogMzBweDtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNjZGNmY2Y7XHJcbiAgICBib3JkZXItcmFkaXVzOiAyNXB4O1xyXG4gICAgcGFkZGluZzogMzBweCA1MHB4O1xyXG4gICAgd2lkdGg6IDg1JTtcclxuICAgIGhlaWdodDogNDVweDtcclxuICAgIG1hcmdpbi10b3A6IDE1cHg7XHJcbiAgICBjb2xvcjogIzcyNzI3MiAhaW1wb3J0YW50O1xyXG4gICAgZm9udC1zaXplOiAxNHB4ICFpbXBvcnRhbnQ7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDIwcHggIWltcG9ydGFudDtcclxuICB9XHJcbiAgaW9uLXNlbGVjdCB7XHJcbiAgICBpb24tc2VsZWN0LW9wdGlvbiB7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgICAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcclxuICAgIH1cclxuICB9XHJcbiAgXHJcbiAgLnZlcmlmeS1udW1iZXIge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDMwcHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAwO1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgY29sb3I6IFwiZGFyazJcIjtcclxuICAgIGZvbnQtZmFtaWx5OiBtZWRpdW07XHJcbiAgfVxyXG4gIC5jb2RlLXRleHQge1xyXG4gICAgY29sb3I6ICM4MzgzODM7XHJcbiAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgICBtYXJnaW4tbGVmdDogMzBweDtcclxuICAgIG1hcmdpbi10b3A6IDVweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDBweDtcclxuICB9XHJcbiAgLm10LWEge1xyXG4gICAgbWFyZ2luLXRvcDogMTAwcHggIWltcG9ydGFudDtcclxuICB9XHJcbiAgLmNvZGUge1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2NkY2ZjZjtcclxuICAgIHdpZHRoOiA1MHB4O1xyXG4gICAgaGVpZ2h0OiA1MHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogN3B4O1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiA1cHg7XHJcbiAgICBtYXJnaW4tdG9wOiAyNXB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIH1cclxuICBpb24taW5wdXQge1xyXG4gICAgLS1wbGFjZWhvbGRlci1jb2xvcjogIzcwNzA3MDtcclxuICAgIC0tcGxhY2Vob2xkZXItb3BhY2l0eTogMTtcclxuICAgIGZvbnQtZmFtaWx5OiBtZWRpdW07XHJcbiAgICBtYXJnaW4tbGVmdDogN3B4O1xyXG4gIH1cclxuICBcclxuICBhIHtcclxuICAgIGNvbG9yOiAjZWQxYjI1O1xyXG4gICAgZm9udC1zaXplOiAxN3B4O1xyXG4gICAgZm9udC1mYW1pbHk6IG1lZGl1bTtcclxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgfVxyXG4gICJdfQ== */";
      /***/
    },

    /***/
    "./src/app/pages/auth/phone-verification/phone-verification.page.ts":
    /*!**************************************************************************!*\
      !*** ./src/app/pages/auth/phone-verification/phone-verification.page.ts ***!
      \**************************************************************************/

    /*! exports provided: PhoneVerificationPage */

    /***/
    function srcAppPagesAuthPhoneVerificationPhoneVerificationPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PhoneVerificationPage", function () {
        return PhoneVerificationPage;
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


      var src_app_services_api_service_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/services/api-service.service */
      "./src/app/services/api-service.service.ts");
      /* harmony import */


      var src_app_services_loader_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/app/services/loader.service */
      "./src/app/services/loader.service.ts");
      /* harmony import */


      var src_app_services_toast_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! src/app/services/toast.service */
      "./src/app/services/toast.service.ts");
      /* harmony import */


      var src_app_utilities_countrycode__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! src/app/utilities/countrycode */
      "./src/app/utilities/countrycode.ts");
      /* harmony import */


      var _config_config__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ../../config/config */
      "./src/app/pages/config/config.ts");

      var PhoneVerificationPage = /*#__PURE__*/function () {
        function PhoneVerificationPage(formBuilder, _api, router, _loader, alertCtrl, _toast) {
          _classCallCheck(this, PhoneVerificationPage);

          this.formBuilder = formBuilder;
          this._api = _api;
          this.router = router;
          this._loader = _loader;
          this.alertCtrl = alertCtrl;
          this._toast = _toast;
          this.isOTP = false;
          this.url = _config_config__WEBPACK_IMPORTED_MODULE_9__["config"].url;
          this.countryList = src_app_utilities_countrycode__WEBPACK_IMPORTED_MODULE_8__["countryCode"];
          this.contactForm = this.formBuilder.group({
            country_code: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            mobile: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required)
          });
          this.otpForm = this.formBuilder.group({
            firstDigit: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            secondDigit: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            thirdDigit: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            forthDigit: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required)
          }); // this.smsRetriever.getAppHash()
          // .then((res: any) => {
          //   console.log(res);
          //   alert(res);
          //   this.hash = res;
          // })
          // .catch((error: any) => console.error(error));
          // this.smsRetriever.startWatching()
          //   .then((res: any) => {
          //     console.log(res);
          //     //  <#> 323741 is your 6 digit OTP for MyApp. LDQEGVDEvcl
          //     const otp = res.Message.toString().substr(4, 6);
          //     alert(`OTP Received - ${otp}`);
          //   })
          //   .catch((error: any) => console.error(error));
        }

        _createClass(PhoneVerificationPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "getOtp",
          value: function getOtp() {
            var _this = this;

            this.isOTP = true;

            this._loader.present();

            this._api.postRequest(this.url + _config_config__WEBPACK_IMPORTED_MODULE_9__["UNITURL"].sendOtp, this.contactForm.value).subscribe(function (result) {
              return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
                return regeneratorRuntime.wrap(function _callee$(_context) {
                  while (1) {
                    switch (_context.prev = _context.next) {
                      case 0:
                        if (result.success) {
                          this.isOTP = true;

                          this._loader.dismiss();
                        } else {
                          this._loader.dismiss();
                        }

                      case 1:
                      case "end":
                        return _context.stop();
                    }
                  }
                }, _callee, this);
              }));
            }), function (error) {
              console.log('error', error);
            };
          }
        }, {
          key: "otpVerify",
          value: function otpVerify() {
            var _this2 = this;

            if (!this.contactForm.value.country_code) {
              console.log(this.countryCode);
            } else {
              this.countryCode = this.contactForm.value.country_code;
              this.mobileNum = this.contactForm.value.mobile;
            }

            this._loader.present();

            var str1 = '';
            var newstr = str1.concat(this.otpForm.value.firstDigit);
            var newstr2 = newstr.concat(this.otpForm.value.secondDigit);
            var newstr3 = newstr2.concat(this.otpForm.value.thirdDigit);
            var mainStr = newstr3.concat(this.otpForm.value.forthDigit);
            var params = {
              country_code: this.contactForm.value.country_code ? this.contactForm.value.country_code : this.countryCode,
              mobile: this.contactForm.value.mobile ? this.contactForm.value.mobile : this.mobileNum,
              otp: parseInt(mainStr)
            };
            this._api.postRequest(this.url + _config_config__WEBPACK_IMPORTED_MODULE_9__["UNITURL"].verifyOtp, params).subscribe(function (result) {
              return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this2, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
                var contact;
                return regeneratorRuntime.wrap(function _callee2$(_context2) {
                  while (1) {
                    switch (_context2.prev = _context2.next) {
                      case 0:
                        if (result.success) {
                          console.log(result);
                          this.isOTP = false;

                          this._loader.dismiss();

                          this.otpForm.reset();

                          this._toast.presentToast(result.message);

                          contact = {
                            countryCode: this.contactForm.value.country_code,
                            contact: this.contactForm.value.mobile
                          };
                          this.itemDetailNavigation(contact);
                        } else {
                          this._loader.dismiss();

                          this.otpForm.reset();
                          this.contactForm.reset();
                          this.presentAlert("Error", result.message);
                        }

                      case 1:
                      case "end":
                        return _context2.stop();
                    }
                  }
                }, _callee2, this);
              }));
            }), function (error) {
              _this2.contactForm.reset();

              _this2.otpForm.reset();

              console.log('error', error);
            };
          }
        }, {
          key: "presentAlert",
          value: function presentAlert(header, message) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
              var _this3 = this;

              var alert;
              return regeneratorRuntime.wrap(function _callee3$(_context3) {
                while (1) {
                  switch (_context3.prev = _context3.next) {
                    case 0:
                      _context3.next = 2;
                      return this.alertCtrl.create({
                        header: header,
                        message: message,
                        buttons: [{
                          text: 'ok',
                          role: 'cancel',
                          cssClass: 'secondary',
                          handler: function handler(blah) {}
                        }, {
                          text: 'Login',
                          handler: function handler() {
                            _this3.loginPage();
                          }
                        }]
                      });

                    case 2:
                      alert = _context3.sent;
                      _context3.next = 5;
                      return alert.present();

                    case 5:
                      return _context3.abrupt("return", _context3.sent);

                    case 6:
                    case "end":
                      return _context3.stop();
                  }
                }
              }, _callee3, this);
            }));
          }
        }, {
          key: "itemDetailNavigation",
          value: function itemDetailNavigation(contact) {
            var navigationExtras = {
              queryParams: {
                special: JSON.stringify(contact)
              }
            };
            this.router.navigate(['signup'], navigationExtras);
          }
        }, {
          key: "otpController",
          value: function otpController(event, next, prev) {
            if (event.target.value.length < 1 && prev) {
              prev.setFocus();
            } else if (next && event.target.value.length > 0) {
              next.setFocus();
            }
          }
        }, {
          key: "loginPage",
          value: function loginPage() {
            this.isOTP = false;
            this.router.navigate(['login']);
          }
        }]);

        return PhoneVerificationPage;
      }();

      PhoneVerificationPage.ctorParameters = function () {
        return [{
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
        }, {
          type: src_app_services_api_service_service__WEBPACK_IMPORTED_MODULE_5__["ApiService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
        }, {
          type: src_app_services_loader_service__WEBPACK_IMPORTED_MODULE_6__["LoaderService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"]
        }, {
          type: src_app_services_toast_service__WEBPACK_IMPORTED_MODULE_7__["ToastService"]
        }];
      };

      PhoneVerificationPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-phone-verification',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./phone-verification.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/auth/phone-verification/phone-verification.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./phone-verification.page.scss */
        "./src/app/pages/auth/phone-verification/phone-verification.page.scss"))["default"]]
      })], PhoneVerificationPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=pages-auth-phone-verification-phone-verification-module-es5.js.map