(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-auth-forgot-password-forgot-password-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/auth/forgot-password/forgot-password.page.html":
    /*!************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/auth/forgot-password/forgot-password.page.html ***!
      \************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppPagesAuthForgotPasswordForgotPasswordPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header class=\"ion-no-border\">\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button color=\"unit-btn\" text=\"\" icon=\"chevron-back-outline\"></ion-back-button>\r\n    </ion-buttons>\r\n  </ion-toolbar>\r\n</ion-header>\r\n<ion-content>\r\n  <div>\r\n    <div class=\"title\">Forgot Password</div>\r\n    <p class=\"email-txt\">Enter your email address and we'll help you reset your password </p>\r\n  </div>\r\n  <ion-grid fixed>\r\n    <ion-row class=\"ion-justify-content-center ion-align-items-center\" style=\"height: 100%;\">\r\n      <ion-col size=\"12\" class=\"ion-text-center\">\r\n        <form [formGroup]=\"fp\">\r\n          <ion-list class=\"line-input\" mode=\"md\">\r\n            <ion-item mode=\"md\">\r\n              <div class=\"left-icon\">\r\n                <img src=\"../../../../assets/imgs/zocial-email.png\r\n                \">\r\n              </div>\r\n              <ion-input class=\"ion-text-left\" placeholder=\"Email\" type=\"email\" formControlName=\"email\"></ion-input>\r\n            </ion-item>\r\n          </ion-list>\r\n        </form>\r\n        <ion-button [disabled]=\"!fp.valid\" fill=\"solid\" size=\"default\" shape=\"round\" color=\"unit-btn\" expand=\"block\"\r\n          (click)=\"forgotPassword()\" class=\"same-bt\">\r\n          Submit\r\n        </ion-button>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-grid>\r\n</ion-content>\r\n";
      /***/
    },

    /***/
    "./src/app/pages/auth/forgot-password/forgot-password-routing.module.ts":
    /*!******************************************************************************!*\
      !*** ./src/app/pages/auth/forgot-password/forgot-password-routing.module.ts ***!
      \******************************************************************************/

    /*! exports provided: ForgotPasswordPageRoutingModule */

    /***/
    function srcAppPagesAuthForgotPasswordForgotPasswordRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ForgotPasswordPageRoutingModule", function () {
        return ForgotPasswordPageRoutingModule;
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


      var _forgot_password_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./forgot-password.page */
      "./src/app/pages/auth/forgot-password/forgot-password.page.ts");

      var routes = [{
        path: '',
        component: _forgot_password_page__WEBPACK_IMPORTED_MODULE_3__["ForgotPasswordPage"]
      }];

      var ForgotPasswordPageRoutingModule = function ForgotPasswordPageRoutingModule() {
        _classCallCheck(this, ForgotPasswordPageRoutingModule);
      };

      ForgotPasswordPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], ForgotPasswordPageRoutingModule);
      /***/
    },

    /***/
    "./src/app/pages/auth/forgot-password/forgot-password.module.ts":
    /*!**********************************************************************!*\
      !*** ./src/app/pages/auth/forgot-password/forgot-password.module.ts ***!
      \**********************************************************************/

    /*! exports provided: ForgotPasswordPageModule */

    /***/
    function srcAppPagesAuthForgotPasswordForgotPasswordModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ForgotPasswordPageModule", function () {
        return ForgotPasswordPageModule;
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


      var _forgot_password_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./forgot-password-routing.module */
      "./src/app/pages/auth/forgot-password/forgot-password-routing.module.ts");
      /* harmony import */


      var _forgot_password_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./forgot-password.page */
      "./src/app/pages/auth/forgot-password/forgot-password.page.ts");

      var ForgotPasswordPageModule = function ForgotPasswordPageModule() {
        _classCallCheck(this, ForgotPasswordPageModule);
      };

      ForgotPasswordPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _forgot_password_routing_module__WEBPACK_IMPORTED_MODULE_5__["ForgotPasswordPageRoutingModule"]],
        declarations: [_forgot_password_page__WEBPACK_IMPORTED_MODULE_6__["ForgotPasswordPage"]]
      })], ForgotPasswordPageModule);
      /***/
    },

    /***/
    "./src/app/pages/auth/forgot-password/forgot-password.page.scss":
    /*!**********************************************************************!*\
      !*** ./src/app/pages/auth/forgot-password/forgot-password.page.scss ***!
      \**********************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppPagesAuthForgotPasswordForgotPasswordPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "p {\n  padding: 0 40px;\n  font-size: 14px;\n  line-height: 1.5;\n  color: var(--ion-color-step-600, #60646b);\n}\n\n.btn {\n  padding: 0 10px 0 10px;\n}\n\n.line-input {\n  margin-bottom: 0 !important;\n}\n\n.line-input ion-item {\n  --border-color: transparent !important;\n  --background-activated: white;\n  --background-focused: white;\n  --background-hover: white;\n  --highlight-height: 0;\n  border: 1px solid #cdcfcf;\n  border-radius: 50px;\n  color: #707070;\n  height: 45px;\n  margin: 0 15px;\n}\n\n.line-input ion-item.item-has-focus {\n  border: 1px solid var(--ion-color-primary);\n}\n\n.line-input ion-item ion-label {\n  color: #807e7e !important;\n  font-weight: 300;\n  font-size: 14px !important;\n}\n\n.line-input ion-item ion-icon {\n  color: #807e7e !important;\n  margin-right: 8px !important;\n}\n\n.sc-ion-input-ios-h {\n  font-size: 14px !important;\n}\n\nion-button {\n  text-transform: capitalize;\n  height: 44px;\n  font-size: 16px;\n  margin: 0 !important;\n  margin-top: 40px !important;\n  font-family: helveticaneuebold;\n  margin-left: 15px !important;\n  margin-right: 15px !important;\n}\n\n.sc-ion-input-md-h {\n  --padding-top: 7px !important;\n}\n\nion-input {\n  --placeholder-color: #9B9B9B;\n  --placeholder-opacity: 1;\n  font-family: medium;\n  margin-left: 7px;\n}\n\n.title {\n  margin-left: 30px;\n  margin-bottom: 0;\n  font-size: 20px;\n  color: \"dark2\";\n  font-family: medium;\n  margin-top: 100px;\n}\n\n.email-txt {\n  color: #838383;\n  font-size: 14px;\n  margin-left: 0px;\n  margin-top: 5px;\n  padding-left: 29px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvYXV0aC9mb3Jnb3QtcGFzc3dvcmQvZm9yZ290LXBhc3N3b3JkLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGVBQWU7RUFDZixlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLHlDQUF5QztBQUM3Qzs7QUFDRTtFQUNFLHNCQUFzQjtBQUUxQjs7QUFFRTtFQUNFLDJCQUEyQjtBQUMvQjs7QUFGRTtFQUdJLHNDQUFlO0VBQ2YsNkJBQXVCO0VBQ3ZCLDJCQUFxQjtFQUNyQix5QkFBbUI7RUFDbkIscUJBQW1CO0VBQ25CLHlCQUF5QjtFQUN6QixtQkFBbUI7RUFDbkIsY0FBYztFQUNkLFlBQVk7RUFDWixjQUFjO0FBR3BCOztBQWZFO0VBY00sMENBQTBDO0FBS2xEOztBQW5CRTtFQWtCTSx5QkFBeUI7RUFDekIsZ0JBQWdCO0VBQ2hCLDBCQUEwQjtBQUtsQzs7QUF6QkU7RUF3Qk0seUJBQXlCO0VBQ3pCLDRCQUE0QjtBQUtwQzs7QUFBRTtFQUNFLDBCQUEwQjtBQUc5Qjs7QUFBRTtFQUNFLDBCQUEwQjtFQUMxQixZQUFZO0VBQ1osZUFBZTtFQUNmLG9CQUFvQjtFQUNwQiwyQkFBMkI7RUFDM0IsOEJBQThCO0VBQzlCLDRCQUE0QjtFQUM1Qiw2QkFBNkI7QUFHakM7O0FBREU7RUFDRSw2QkFBYztBQUlsQjs7QUFGRTtFQUNFLDRCQUFvQjtFQUNwQix3QkFBc0I7RUFDdEIsbUJBQW1CO0VBQ25CLGdCQUFnQjtBQUtwQjs7QUFIQztFQUNDLGlCQUFpQjtFQUNqQixnQkFBZ0I7RUFDaEIsZUFBZTtFQUNmLGNBQWM7RUFDZCxtQkFBbUI7RUFDbkIsaUJBQWlCO0FBTW5COztBQUpDO0VBQ0MsY0FBYztFQUNkLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsZUFBZTtFQUNmLGtCQUFrQjtBQU9wQiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2F1dGgvZm9yZ290LXBhc3N3b3JkL2ZvcmdvdC1wYXNzd29yZC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJwIHtcclxuICAgIHBhZGRpbmc6IDAgNDBweDtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAxLjU7XHJcbiAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXN0ZXAtNjAwLCAjNjA2NDZiKTtcclxuICB9XHJcbiAgLmJ0bntcclxuICAgIHBhZGRpbmc6IDAgMTBweCAwIDEwcHg7XHJcbiAgfVxyXG5cclxuXHJcbiAgLmxpbmUtaW5wdXQge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMCAhaW1wb3J0YW50O1xyXG4gICAgaW9uLWl0ZW0ge1xyXG4gICAgICAtLWJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcclxuICAgICAgLS1iYWNrZ3JvdW5kLWFjdGl2YXRlZDogd2hpdGU7XHJcbiAgICAgIC0tYmFja2dyb3VuZC1mb2N1c2VkOiB3aGl0ZTtcclxuICAgICAgLS1iYWNrZ3JvdW5kLWhvdmVyOiB3aGl0ZTtcclxuICAgICAgLS1oaWdobGlnaHQtaGVpZ2h0OiAwO1xyXG4gICAgICBib3JkZXI6IDFweCBzb2xpZCAjY2RjZmNmO1xyXG4gICAgICBib3JkZXItcmFkaXVzOiA1MHB4O1xyXG4gICAgICBjb2xvcjogIzcwNzA3MDtcclxuICAgICAgaGVpZ2h0OiA0NXB4O1xyXG4gICAgICBtYXJnaW46IDAgMTVweDtcclxuICAgICAgJi5pdGVtLWhhcy1mb2N1cyB7XHJcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xyXG4gICAgICB9XHJcbiAgXHJcbiAgICAgIGlvbi1sYWJlbCB7XHJcbiAgICAgICAgY29sb3I6ICM4MDdlN2UgIWltcG9ydGFudDtcclxuICAgICAgICBmb250LXdlaWdodDogMzAwO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTRweCAhaW1wb3J0YW50O1xyXG4gICAgICB9XHJcbiAgXHJcbiAgICAgIGlvbi1pY29uIHtcclxuICAgICAgICBjb2xvcjogIzgwN2U3ZSAhaW1wb3J0YW50O1xyXG4gICAgICAgIG1hcmdpbi1yaWdodDogOHB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbiAgXHJcbiAgLnNjLWlvbi1pbnB1dC1pb3MtaCB7XHJcbiAgICBmb250LXNpemU6IDE0cHggIWltcG9ydGFudDtcclxuICB9XHJcblxyXG4gIGlvbi1idXR0b257XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcclxuICAgIGhlaWdodDogNDRweDtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIG1hcmdpbjogMCAhaW1wb3J0YW50O1xyXG4gICAgbWFyZ2luLXRvcDogNDBweCAhaW1wb3J0YW50O1xyXG4gICAgZm9udC1mYW1pbHk6IGhlbHZldGljYW5ldWVib2xkO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDE1cHggIWltcG9ydGFudDtcclxuICAgIG1hcmdpbi1yaWdodDogMTVweCAhaW1wb3J0YW50O1xyXG4gIH1cclxuICAuc2MtaW9uLWlucHV0LW1kLWgge1xyXG4gICAgLS1wYWRkaW5nLXRvcDogN3B4ICFpbXBvcnRhbnQ7XHJcbn1cclxuICBpb24taW5wdXQge1xyXG4gICAgLS1wbGFjZWhvbGRlci1jb2xvcjogIzlCOUI5QjtcclxuICAgIC0tcGxhY2Vob2xkZXItb3BhY2l0eTogMTtcclxuICAgIGZvbnQtZmFtaWx5OiBtZWRpdW07XHJcbiAgICBtYXJnaW4tbGVmdDogN3B4O1xyXG59XHJcbiAudGl0bGV7XHJcbiAgbWFyZ2luLWxlZnQ6IDMwcHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogMDtcclxuICBmb250LXNpemU6IDIwcHg7XHJcbiAgY29sb3I6IFwiZGFyazJcIjtcclxuICBmb250LWZhbWlseTogbWVkaXVtO1xyXG4gIG1hcmdpbi10b3A6IDEwMHB4O1xyXG4gfVxyXG4gLmVtYWlsLXR4dHtcclxuICBjb2xvcjogIzgzODM4MztcclxuICBmb250LXNpemU6IDE0cHg7XHJcbiAgbWFyZ2luLWxlZnQ6IDBweDtcclxuICBtYXJnaW4tdG9wOiA1cHg7XHJcbiAgcGFkZGluZy1sZWZ0OiAyOXB4O1xyXG4gfSJdfQ== */";
      /***/
    },

    /***/
    "./src/app/pages/auth/forgot-password/forgot-password.page.ts":
    /*!********************************************************************!*\
      !*** ./src/app/pages/auth/forgot-password/forgot-password.page.ts ***!
      \********************************************************************/

    /*! exports provided: ForgotPasswordPage */

    /***/
    function srcAppPagesAuthForgotPasswordForgotPasswordPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ForgotPasswordPage", function () {
        return ForgotPasswordPage;
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


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var src_app_services_api_service_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/services/api-service.service */
      "./src/app/services/api-service.service.ts");
      /* harmony import */


      var _config_config__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../config/config */
      "./src/app/pages/config/config.ts");

      var ForgotPasswordPage = /*#__PURE__*/function () {
        function ForgotPasswordPage(formBuilder, _apiService, alertCtrl) {
          _classCallCheck(this, ForgotPasswordPage);

          this.formBuilder = formBuilder;
          this._apiService = _apiService;
          this.alertCtrl = alertCtrl;
          this.url = _config_config__WEBPACK_IMPORTED_MODULE_5__["config"].url;
          this.fp = this.formBuilder.group({
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')]))
          });
        }

        _createClass(ForgotPasswordPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "presentAlert",
          value: function presentAlert(options) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var alert;
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      _context.next = 2;
                      return this.alertCtrl.create({
                        header: options.header ? options.header : 'Alert',
                        message: options.message ? options.message : '',
                        buttons: options.buttons
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
          key: "forgotPassword",
          value: function forgotPassword(data) {
            var _this = this;

            var params = {
              email: data.email
            };

            if (_config_config__WEBPACK_IMPORTED_MODULE_5__["configEmail"].siteName) {
              params["siteName"] = _config_config__WEBPACK_IMPORTED_MODULE_5__["configEmail"].siteName;
            }

            if (_config_config__WEBPACK_IMPORTED_MODULE_5__["configEmail"].from) {
              params["from"] = _config_config__WEBPACK_IMPORTED_MODULE_5__["configEmail"].from;
            }

            if (_config_config__WEBPACK_IMPORTED_MODULE_5__["configEmail"].subject) {
              params["subject"] = _config_config__WEBPACK_IMPORTED_MODULE_5__["configEmail"].subject;
            }

            if (_config_config__WEBPACK_IMPORTED_MODULE_5__["configEmail"].resetUrl) {
              params["resetUrl"] = _config_config__WEBPACK_IMPORTED_MODULE_5__["configEmail"].resetUrl;
            }

            if (_config_config__WEBPACK_IMPORTED_MODULE_5__["configEmail"].team) {
              params["team"] = _config_config__WEBPACK_IMPORTED_MODULE_5__["configEmail"].team;
            }

            this._apiService.postRequest(this.url + _config_config__WEBPACK_IMPORTED_MODULE_5__["URL"].forgotPassword, params).subscribe(function (res) {
              if (res.success) {
                // this.storage.set("forgot", res.data);
                _this.fp.reset();
              } else {
                _this.presentAlert({
                  header: "Error",
                  message: res.message,
                  buttons: ["Close"]
                });
              }
            }, function (err) {
              _this.presentAlert({
                header: "Error",
                message: "Unable to process your request. Please try again later",
                buttons: ["Close"]
              });
            });
          }
        }]);

        return ForgotPasswordPage;
      }();

      ForgotPasswordPage.ctorParameters = function () {
        return [{
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
        }, {
          type: src_app_services_api_service_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"]
        }];
      };

      ForgotPasswordPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-forgot-password',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./forgot-password.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/auth/forgot-password/forgot-password.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./forgot-password.page.scss */
        "./src/app/pages/auth/forgot-password/forgot-password.page.scss"))["default"]]
      })], ForgotPasswordPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=pages-auth-forgot-password-forgot-password-module-es5.js.map