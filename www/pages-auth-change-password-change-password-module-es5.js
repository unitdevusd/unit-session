(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-auth-change-password-change-password-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/auth/change-password/change-password.page.html":
    /*!************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/auth/change-password/change-password.page.html ***!
      \************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppPagesAuthChangePasswordChangePasswordPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-title>Change Password</ion-title>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button color=\"unit-btn\" text=\"\" icon=\"chevron-back-outline\"></ion-back-button>\r\n    </ion-buttons> \r\n  </ion-toolbar>\r\n</ion-header>\r\n<ion-content>\r\n  <div class=\"ion-padding\"></div>\r\n    <form [formGroup]=\"passwordForm\">\r\n      <ion-item lines=\"none\">\r\n        <ion-label position=\"floating\"> Password </ion-label>\r\n        <ion-input type=\"password\" class=\"custom-class\"  placeholder=\"Enter existing password\" formControlName=\"password\"></ion-input>\r\n      </ion-item>\r\n      <ion-item lines=\"none\">\r\n        <ion-label position=\"floating\"> New Password</ion-label>\r\n        <ion-input  class=\"custom-class\" type=\"password\"  placeholder=\"Enter new password\" formControlName=\"newPassword\"></ion-input>\r\n      </ion-item>\r\n    </form>\r\n</ion-content>\r\n<ion-footer class=\"ion-no-border\">\r\n  <ion-toolbar>\r\n    <div class=\"ion-padding\">\r\n      <ion-button color=\"unit-btn\" expand=\"block\" class=\"shadow\" [disabled]=\"!passwordForm.valid\" (click)=\"changePassword()\">Change Password</ion-button>\r\n    </div>\r\n  </ion-toolbar>\r\n</ion-footer>";
      /***/
    },

    /***/
    "./src/app/pages/auth/change-password/change-password-routing.module.ts":
    /*!******************************************************************************!*\
      !*** ./src/app/pages/auth/change-password/change-password-routing.module.ts ***!
      \******************************************************************************/

    /*! exports provided: ChangePasswordPageRoutingModule */

    /***/
    function srcAppPagesAuthChangePasswordChangePasswordRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ChangePasswordPageRoutingModule", function () {
        return ChangePasswordPageRoutingModule;
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


      var _change_password_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./change-password.page */
      "./src/app/pages/auth/change-password/change-password.page.ts");

      var routes = [{
        path: '',
        component: _change_password_page__WEBPACK_IMPORTED_MODULE_3__["ChangePasswordPage"]
      }];

      var ChangePasswordPageRoutingModule = function ChangePasswordPageRoutingModule() {
        _classCallCheck(this, ChangePasswordPageRoutingModule);
      };

      ChangePasswordPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], ChangePasswordPageRoutingModule);
      /***/
    },

    /***/
    "./src/app/pages/auth/change-password/change-password.module.ts":
    /*!**********************************************************************!*\
      !*** ./src/app/pages/auth/change-password/change-password.module.ts ***!
      \**********************************************************************/

    /*! exports provided: ChangePasswordPageModule */

    /***/
    function srcAppPagesAuthChangePasswordChangePasswordModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ChangePasswordPageModule", function () {
        return ChangePasswordPageModule;
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


      var _change_password_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./change-password-routing.module */
      "./src/app/pages/auth/change-password/change-password-routing.module.ts");
      /* harmony import */


      var _change_password_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./change-password.page */
      "./src/app/pages/auth/change-password/change-password.page.ts");

      var ChangePasswordPageModule = function ChangePasswordPageModule() {
        _classCallCheck(this, ChangePasswordPageModule);
      };

      ChangePasswordPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _change_password_routing_module__WEBPACK_IMPORTED_MODULE_5__["ChangePasswordPageRoutingModule"]],
        declarations: [_change_password_page__WEBPACK_IMPORTED_MODULE_6__["ChangePasswordPage"]]
      })], ChangePasswordPageModule);
      /***/
    },

    /***/
    "./src/app/pages/auth/change-password/change-password.page.scss":
    /*!**********************************************************************!*\
      !*** ./src/app/pages/auth/change-password/change-password.page.scss ***!
      \**********************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppPagesAuthChangePasswordChangePasswordPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".label-stacked.sc-ion-label-ios-h {\n  margin-bottom: 4px;\n  font-size: 14px;\n  font-weight: bold;\n  color: black;\n}\n\nion-item ion-label {\n  font-size: 19px;\n  color: \"dark\";\n  font-family: \"helveticaneuebold\";\n  margin-bottom: 10px;\n  margin-left: 10px;\n}\n\nform {\n  margin: 0 20px;\n}\n\n.item-native {\n  padding-left: 0;\n}\n\nion-button {\n  text-transform: capitalize;\n  height: 44px;\n  font-size: 16px;\n  margin: 0 !important;\n  margin-top: 40px !important;\n  font-family: helveticaneuebold;\n}\n\nion-input.custom-class {\n  --padding-top: 12px;\n  --padding-bottom: 12px;\n  --padding-start: 18px;\n  --border-color: transparent !important;\n  --background-activated: white;\n  --background-focused: white;\n  --background-hover: white;\n  --highlight-height: 0;\n  border: 1px solid #cdcfcf;\n  border-radius: 50px;\n  color: #707070;\n  height: 45px;\n  margin-top: 5px;\n}\n\n.error-div {\n  margin-left: 18px;\n}\n\n.error-div p {\n  color: #ed1b25;\n  font-size: 16px;\n  font-family: 'medium';\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvYXV0aC9jaGFuZ2UtcGFzc3dvcmQvY2hhbmdlLXBhc3N3b3JkLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGtCQUFrQjtFQUNsQixlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLFlBQVk7QUFDaEI7O0FBRUU7RUFFSSxlQUFlO0VBQ2YsYUFBYTtFQUNiLGdDQUFnQztFQUNoQyxtQkFBbUI7RUFDbkIsaUJBQWlCO0FBQXZCOztBQUdFO0VBQ0UsY0FBYztBQUFsQjs7QUFFRTtFQUNFLGVBQWU7QUFDbkI7O0FBQ0U7RUFDRSwwQkFBMEI7RUFDMUIsWUFBWTtFQUNaLGVBQWU7RUFDZixvQkFBb0I7RUFDcEIsMkJBQTJCO0VBQzNCLDhCQUE4QjtBQUVsQzs7QUFBRTtFQUNFLG1CQUFjO0VBQ2Qsc0JBQWlCO0VBQ2pCLHFCQUFnQjtFQUNoQixzQ0FBZTtFQUNmLDZCQUF1QjtFQUN2QiwyQkFBcUI7RUFDckIseUJBQW1CO0VBQ25CLHFCQUFtQjtFQUNuQix5QkFBeUI7RUFDekIsbUJBQW1CO0VBQ25CLGNBQWM7RUFDZCxZQUFZO0VBQ1osZUFBZTtBQUduQjs7QUFBRTtFQUNFLGlCQUFpQjtBQUdyQjs7QUFKRTtFQUdJLGNBQWE7RUFDYixlQUFlO0VBQ2YscUJBQXFCO0FBSzNCIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvYXV0aC9jaGFuZ2UtcGFzc3dvcmQvY2hhbmdlLXBhc3N3b3JkLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5sYWJlbC1zdGFja2VkLnNjLWlvbi1sYWJlbC1pb3MtaCB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA0cHg7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGNvbG9yOiBibGFjaztcclxuICB9XHJcbiAgXHJcbiAgaW9uLWl0ZW0ge1xyXG4gICAgaW9uLWxhYmVsIHtcclxuICAgICAgZm9udC1zaXplOiAxOXB4O1xyXG4gICAgICBjb2xvcjogXCJkYXJrXCI7XHJcbiAgICAgIGZvbnQtZmFtaWx5OiBcImhlbHZldGljYW5ldWVib2xkXCI7XHJcbiAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG4gICAgfVxyXG4gIH1cclxuICBmb3JtIHtcclxuICAgIG1hcmdpbjogMCAyMHB4O1xyXG4gIH1cclxuICAuaXRlbS1uYXRpdmUge1xyXG4gICAgcGFkZGluZy1sZWZ0OiAwO1xyXG4gIH1cclxuICBpb24tYnV0dG9uIHtcclxuICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xyXG4gICAgaGVpZ2h0OiA0NHB4O1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgbWFyZ2luOiAwICFpbXBvcnRhbnQ7XHJcbiAgICBtYXJnaW4tdG9wOiA0MHB4ICFpbXBvcnRhbnQ7XHJcbiAgICBmb250LWZhbWlseTogaGVsdmV0aWNhbmV1ZWJvbGQ7XHJcbiAgfVxyXG4gIGlvbi1pbnB1dC5jdXN0b20tY2xhc3Mge1xyXG4gICAgLS1wYWRkaW5nLXRvcDogMTJweDtcclxuICAgIC0tcGFkZGluZy1ib3R0b206IDEycHg7XHJcbiAgICAtLXBhZGRpbmctc3RhcnQ6IDE4cHg7XHJcbiAgICAtLWJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcclxuICAgIC0tYmFja2dyb3VuZC1hY3RpdmF0ZWQ6IHdoaXRlO1xyXG4gICAgLS1iYWNrZ3JvdW5kLWZvY3VzZWQ6IHdoaXRlO1xyXG4gICAgLS1iYWNrZ3JvdW5kLWhvdmVyOiB3aGl0ZTtcclxuICAgIC0taGlnaGxpZ2h0LWhlaWdodDogMDtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNjZGNmY2Y7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MHB4O1xyXG4gICAgY29sb3I6ICM3MDcwNzA7XHJcbiAgICBoZWlnaHQ6IDQ1cHg7XHJcbiAgICBtYXJnaW4tdG9wOiA1cHg7XHJcbiAgfVxyXG4gIFxyXG4gIC5lcnJvci1kaXZ7XHJcbiAgICBtYXJnaW4tbGVmdDogMThweDtcclxuICAgIHB7XHJcbiAgICAgIGNvbG9yOiNlZDFiMjU7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgZm9udC1mYW1pbHk6ICdtZWRpdW0nO1xyXG4gICAgfVxyXG4gIH0iXX0= */";
      /***/
    },

    /***/
    "./src/app/pages/auth/change-password/change-password.page.ts":
    /*!********************************************************************!*\
      !*** ./src/app/pages/auth/change-password/change-password.page.ts ***!
      \********************************************************************/

    /*! exports provided: ChangePasswordPage */

    /***/
    function srcAppPagesAuthChangePasswordChangePasswordPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ChangePasswordPage", function () {
        return ChangePasswordPage;
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

      var ChangePasswordPage = /*#__PURE__*/function () {
        function ChangePasswordPage(formBuilder, _apiService, loader, alertController, storage) {
          _classCallCheck(this, ChangePasswordPage);

          this.formBuilder = formBuilder;
          this._apiService = _apiService;
          this.loader = loader;
          this.alertController = alertController;
          this.storage = storage;
          this.url = _config_config__WEBPACK_IMPORTED_MODULE_6__["config"].url;
          this.passwordForm = this.formBuilder.group({
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            newPassword: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required)
          });
        }

        _createClass(ChangePasswordPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this = this;

            this.storage.get("session").then(function (session) {
              if (session) {
                _this.token = session.token;
              }
            });
          }
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
                      return this.alertController.create({
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
          key: "changePassword",
          value: function changePassword() {
            var _this2 = this;

            this.loader.present();
            var params = {
              "auth": {
                "type": "token",
                "token": this.token
              },
              "currentPassword": this.passwordForm.value.password,
              "newPassword": this.passwordForm.value.newPassword
            };
            this._apiService.postRequest(this.url + _config_config__WEBPACK_IMPORTED_MODULE_6__["URL"].changePassword, params).subscribe(function (result) {
              return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this2, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
                return regeneratorRuntime.wrap(function _callee2$(_context2) {
                  while (1) {
                    switch (_context2.prev = _context2.next) {
                      case 0:
                        if (result.success) {
                          this.presentAlert({
                            header: "Error",
                            message: result.message,
                            buttons: ["Close"]
                          });
                        } else {
                          this.presentAlert({
                            header: "Error",
                            message: result.message,
                            buttons: ["Close"]
                          });
                        }

                      case 1:
                      case "end":
                        return _context2.stop();
                    }
                  }
                }, _callee2, this);
              }));
            }), function (error) {
              _this2.loader.dismiss();

              _this2.presentAlert({
                header: "Error",
                message: "Unable to process your request. Please try again later",
                buttons: ["Close"]
              });
            };
          }
        }]);

        return ChangePasswordPage;
      }();

      ChangePasswordPage.ctorParameters = function () {
        return [{
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
        }, {
          type: src_app_services_api_service_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"]
        }, {
          type: src_app_services_loader_service__WEBPACK_IMPORTED_MODULE_5__["LoaderService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"]
        }, {
          type: _ionic_storage__WEBPACK_IMPORTED_MODULE_7__["Storage"]
        }];
      };

      ChangePasswordPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-change-password',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./change-password.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/auth/change-password/change-password.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./change-password.page.scss */
        "./src/app/pages/auth/change-password/change-password.page.scss"))["default"]]
      })], ChangePasswordPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=pages-auth-change-password-change-password-module-es5.js.map