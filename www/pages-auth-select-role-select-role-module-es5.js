(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-auth-select-role-select-role-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/auth/select-role/select-role.page.html":
    /*!****************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/auth/select-role/select-role.page.html ***!
      \****************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppPagesAuthSelectRoleSelectRolePageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header class=\"ion-no-border\">\r\n  <ion-toolbar class=\"color-header\">\r\n    <!-- <ion-buttons>\r\n      <ion-back-button color=\"unit-btn\" text=\"\" icon=\"chevron-back-outline\"></ion-back-button>\r\n    </ion-buttons> -->\r\n  </ion-toolbar>\r\n</ion-header>\r\n<div class=\"logo ion-text-center\">\r\n  <img src=\"../../../../assets/imgs/logo-bg.png\" />\r\n</div>\r\n<ion-content fullscreen>\r\n  <div class=\"content\">\r\n    <div *ngFor=\"let item of roles\">\r\n    <div class=\"img-card\" (click)=\"selectRole(item._id)\">\r\n      <img src=\"{{item.image}}\" />\r\n    </div>\r\n  </div>\r\n  </div>\r\n</ion-content>\r\n";
      /***/
    },

    /***/
    "./src/app/pages/auth/select-role/select-role-routing.module.ts":
    /*!**********************************************************************!*\
      !*** ./src/app/pages/auth/select-role/select-role-routing.module.ts ***!
      \**********************************************************************/

    /*! exports provided: SelectRolePageRoutingModule */

    /***/
    function srcAppPagesAuthSelectRoleSelectRoleRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SelectRolePageRoutingModule", function () {
        return SelectRolePageRoutingModule;
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


      var _select_role_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./select-role.page */
      "./src/app/pages/auth/select-role/select-role.page.ts");

      var routes = [{
        path: '',
        component: _select_role_page__WEBPACK_IMPORTED_MODULE_3__["SelectRolePage"]
      }];

      var SelectRolePageRoutingModule = function SelectRolePageRoutingModule() {
        _classCallCheck(this, SelectRolePageRoutingModule);
      };

      SelectRolePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], SelectRolePageRoutingModule);
      /***/
    },

    /***/
    "./src/app/pages/auth/select-role/select-role.module.ts":
    /*!**************************************************************!*\
      !*** ./src/app/pages/auth/select-role/select-role.module.ts ***!
      \**************************************************************/

    /*! exports provided: SelectRolePageModule */

    /***/
    function srcAppPagesAuthSelectRoleSelectRoleModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SelectRolePageModule", function () {
        return SelectRolePageModule;
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


      var _select_role_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./select-role-routing.module */
      "./src/app/pages/auth/select-role/select-role-routing.module.ts");
      /* harmony import */


      var _select_role_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./select-role.page */
      "./src/app/pages/auth/select-role/select-role.page.ts");

      var SelectRolePageModule = function SelectRolePageModule() {
        _classCallCheck(this, SelectRolePageModule);
      };

      SelectRolePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _select_role_routing_module__WEBPACK_IMPORTED_MODULE_5__["SelectRolePageRoutingModule"]],
        declarations: [_select_role_page__WEBPACK_IMPORTED_MODULE_6__["SelectRolePage"]]
      })], SelectRolePageModule);
      /***/
    },

    /***/
    "./src/app/pages/auth/select-role/select-role.page.scss":
    /*!**************************************************************!*\
      !*** ./src/app/pages/auth/select-role/select-role.page.scss ***!
      \**************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppPagesAuthSelectRoleSelectRolePageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ":host {\n  background-color: #ED1B25;\n}\n\n.color-header {\n  --background: #ED1B25;\n}\n\nion-content {\n  --background: transparent;\n  transform: translate3d(0, 35px, 0);\n}\n\nion-header {\n  --ion-background-color: transparent;\n}\n\n.content {\n  background-color: \"secondary\";\n  height: 100%;\n  border-radius: 25px;\n  padding-top: 60px;\n}\n\n.logo {\n  margin: auto;\n  width: 20%;\n}\n\n.img-card {\n  max-width: 200px;\n  margin: 0 auto 30px;\n  text-align: center;\n}\n\n.text-sucess {\n  border-style: solid;\n  border-color: green;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvYXV0aC9zZWxlY3Qtcm9sZS9zZWxlY3Qtcm9sZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSx5QkFBeUI7QUFDN0I7O0FBRUU7RUFDRSxxQkFBYTtBQUNqQjs7QUFDRTtFQUNFLHlCQUFhO0VBQ2Isa0NBQWtDO0FBRXRDOztBQUFFO0VBQ0UsbUNBQXVCO0FBRzNCOztBQUFFO0VBQ0UsNkJBQTZCO0VBQzdCLFlBQVk7RUFDWixtQkFBbUI7RUFDbkIsaUJBQWlCO0FBR3JCOztBQUFFO0VBQ0UsWUFBWTtFQUNaLFVBQVU7QUFHZDs7QUFBRTtFQUNFLGdCQUFnQjtFQUNoQixtQkFBbUI7RUFDbkIsa0JBQWtCO0FBR3RCOztBQUFFO0VBQ0UsbUJBQW1CO0VBQ25CLG1CQUFtQjtBQUd2QiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2F1dGgvc2VsZWN0LXJvbGUvc2VsZWN0LXJvbGUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0VEMUIyNTtcclxuICBcclxuICB9XHJcbiAgLmNvbG9yLWhlYWRlcntcclxuICAgIC0tYmFja2dyb3VuZDogI0VEMUIyNTtcclxuICB9XHJcbiAgaW9uLWNvbnRlbnQge1xyXG4gICAgLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMzVweCwgMCk7XHJcbiAgfVxyXG4gIGlvbi1oZWFkZXIge1xyXG4gICAgLS1pb24tYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgfVxyXG4gIFxyXG4gIC5jb250ZW50IHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IFwic2Vjb25kYXJ5XCI7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBib3JkZXItcmFkaXVzOiAyNXB4O1xyXG4gICAgcGFkZGluZy10b3A6IDYwcHg7ICAgIFxyXG4gIH1cclxuICBcclxuICAubG9nbyB7XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbiAgICB3aWR0aDogMjAlO1xyXG4gIH1cclxuICBcclxuICAuaW1nLWNhcmR7XHJcbiAgICBtYXgtd2lkdGg6IDIwMHB4O1xyXG4gICAgbWFyZ2luOiAwIGF1dG8gMzBweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB9XHJcbiAgXHJcbiAgLnRleHQtc3VjZXNze1xyXG4gICAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcclxuICAgIGJvcmRlci1jb2xvcjogZ3JlZW47XHJcbiAgfSJdfQ== */";
      /***/
    },

    /***/
    "./src/app/pages/auth/select-role/select-role.page.ts":
    /*!************************************************************!*\
      !*** ./src/app/pages/auth/select-role/select-role.page.ts ***!
      \************************************************************/

    /*! exports provided: SelectRolePage */

    /***/
    function srcAppPagesAuthSelectRoleSelectRolePageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SelectRolePage", function () {
        return SelectRolePage;
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


      var src_app_services_toast_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/app/services/toast.service */
      "./src/app/services/toast.service.ts");
      /* harmony import */


      var _config_config__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../../config/config */
      "./src/app/pages/config/config.ts");

      var SelectRolePage = /*#__PURE__*/function () {
        function SelectRolePage(router, route, _apiService, alertCtrl, _toast, _loader) {
          var _this = this;

          _classCallCheck(this, SelectRolePage);

          this.router = router;
          this.route = route;
          this._apiService = _apiService;
          this.alertCtrl = alertCtrl;
          this._toast = _toast;
          this._loader = _loader;
          this.url = _config_config__WEBPACK_IMPORTED_MODULE_7__["config"].url;
          this.roles = [];
          this.route.queryParams.subscribe(function (params) {
            if (params && params.special) {
              _this.signInData = JSON.parse(params.special);
              console.log(_this.signInData);
            }
          });
        }

        _createClass(SelectRolePage, [{
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
          key: "ngOnInit",
          value: function ngOnInit() {
            this.getRoles();
          }
        }, {
          key: "getRoles",
          value: function getRoles() {
            var _this2 = this;

            var params = {
              apiKey: _config_config__WEBPACK_IMPORTED_MODULE_7__["KEY"].apikey
            };

            this._apiService.postRequest(this.url + _config_config__WEBPACK_IMPORTED_MODULE_7__["URL"].getOnboardRoles, params).subscribe(function (res) {
              return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this2, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
                var i;
                return regeneratorRuntime.wrap(function _callee2$(_context2) {
                  while (1) {
                    switch (_context2.prev = _context2.next) {
                      case 0:
                        if (res.success) {
                          this.roles = res.data.roles;

                          if (this.roles.length) {
                            for (i = 0; i < this.roles.length; i++) {
                              this.roles[1].image = '../../../../assets/imgs/tanent.png';
                              this.roles[1].text = "Rent a Unit";
                              this.roles[0].image = '../../../../assets/imgs/owner.png';
                              this.roles[0].text = "Host your Unit";
                            }
                          }
                        } else {
                          this.presentAlert({
                            header: "Error",
                            message: res.message,
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
            }, function (err) {
              _this2.presentAlert({
                header: "Error",
                message: "Unable to process your request. Please try again later",
                buttons: ["Close"]
              });
            });
          }
        }, {
          key: "selectRole",
          value: function selectRole(roleId) {
            this.signUp(roleId);
          }
        }, {
          key: "signUp",
          value: function signUp(roleId) {
            var _this3 = this;

            this._loader.present('');

            if (this.signInData) {
              var params = {
                apiKey: _config_config__WEBPACK_IMPORTED_MODULE_7__["KEY"].apikey,
                roleId: roleId,
                firstName: this.signInData.firstName,
                lastName: this.signInData.lastName,
                password: this.signInData.password,
                email: this.signInData.email
              };
              console.log(params);

              this._apiService.postRequest(this.url + _config_config__WEBPACK_IMPORTED_MODULE_7__["URL"].signUp, params).subscribe(function (res) {
                _this3._loader.dismiss();

                if (res.success) {
                  _this3._toast.presentToast(res.message);

                  _this3.router.navigate(['login']); // this.openAdditionalDataform();

                } else {
                  _this3.presentAlert({
                    header: "Error",
                    message: res.message,
                    buttons: ["Close"]
                  });
                }
              }, function (err) {
                _this3.presentAlert({
                  header: "Error",
                  message: "Unable to process your request. Please try again later",
                  buttons: ["Close"]
                });
              });
            }
          }
        }, {
          key: "openAdditionalDataform",
          value: function openAdditionalDataform() {
            var user = {
              firstName: this.signInData.firstName,
              lastName: this.signInData.lastName,
              phoneno: this.signInData.phoneno
            };
            var navigationExtras = {
              queryParams: {
                special: JSON.stringify(user)
              }
            };
            this.router.navigate(['checkr'], navigationExtras);
          }
        }]);

        return SelectRolePage;
      }();

      SelectRolePage.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
        }, {
          type: src_app_services_api_service_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"]
        }, {
          type: src_app_services_toast_service__WEBPACK_IMPORTED_MODULE_6__["ToastService"]
        }, {
          type: src_app_services_loader_service__WEBPACK_IMPORTED_MODULE_5__["LoaderService"]
        }];
      };

      SelectRolePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-select-role',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./select-role.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/auth/select-role/select-role.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./select-role.page.scss */
        "./src/app/pages/auth/select-role/select-role.page.scss"))["default"]]
      })], SelectRolePage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=pages-auth-select-role-select-role-module-es5.js.map