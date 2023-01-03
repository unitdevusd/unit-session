(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-admin-send-notifications-send-notifications-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/admin/send-notifications/send-notifications.page.html":
    /*!*******************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/admin/send-notifications/send-notifications.page.html ***!
      \*******************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppPagesAdminSendNotificationsSendNotificationsPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-title>Send notification</ion-title>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button color=\"unit-btn\" text=\"\" icon=\"chevron-back-outline\"></ion-back-button>\r\n    </ion-buttons>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n<form [formGroup]=\"notificationForm\">\r\n  <ion-item lines=\"none\" class=\"item-space\">\r\n    <ion-label position=\"stacked\">\r\n      Title\r\n    </ion-label>\r\n    <ion-input formControlName=\"title\" placeholder=\"Title\"> </ion-input>\r\n  </ion-item>\r\n\r\n  <ion-item lines=\"none\" class=\"item-space\">\r\n    <ion-label position=\"stacked\"> Message</ion-label>\r\n    <ion-textarea formControlName=\"body\" placeholder=\"Message\"></ion-textarea>\r\n  </ion-item>\r\n</form>\r\n\r\n</ion-content>\r\n\r\n<ion-footer class=\"ion-no-border\">\r\n  <ion-toolbar>\r\n    <div class=\"ion-padding\">\r\n      <ion-button class=\"shadow\" color=\"unit-btn\" expand=\"block\" [disabled]=\"!notificationForm.valid\" (click)=\"send()\">\r\n        Send\r\n      </ion-button>\r\n    </div>\r\n  </ion-toolbar>\r\n</ion-footer>";
      /***/
    },

    /***/
    "./src/app/pages/admin/send-notifications/send-notifications-routing.module.ts":
    /*!*************************************************************************************!*\
      !*** ./src/app/pages/admin/send-notifications/send-notifications-routing.module.ts ***!
      \*************************************************************************************/

    /*! exports provided: SendNotificationsPageRoutingModule */

    /***/
    function srcAppPagesAdminSendNotificationsSendNotificationsRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SendNotificationsPageRoutingModule", function () {
        return SendNotificationsPageRoutingModule;
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


      var _send_notifications_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./send-notifications.page */
      "./src/app/pages/admin/send-notifications/send-notifications.page.ts");

      var routes = [{
        path: '',
        component: _send_notifications_page__WEBPACK_IMPORTED_MODULE_3__["SendNotificationsPage"]
      }];

      var SendNotificationsPageRoutingModule = function SendNotificationsPageRoutingModule() {
        _classCallCheck(this, SendNotificationsPageRoutingModule);
      };

      SendNotificationsPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], SendNotificationsPageRoutingModule);
      /***/
    },

    /***/
    "./src/app/pages/admin/send-notifications/send-notifications.module.ts":
    /*!*****************************************************************************!*\
      !*** ./src/app/pages/admin/send-notifications/send-notifications.module.ts ***!
      \*****************************************************************************/

    /*! exports provided: SendNotificationsPageModule */

    /***/
    function srcAppPagesAdminSendNotificationsSendNotificationsModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SendNotificationsPageModule", function () {
        return SendNotificationsPageModule;
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


      var _send_notifications_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./send-notifications-routing.module */
      "./src/app/pages/admin/send-notifications/send-notifications-routing.module.ts");
      /* harmony import */


      var _send_notifications_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./send-notifications.page */
      "./src/app/pages/admin/send-notifications/send-notifications.page.ts");

      var SendNotificationsPageModule = function SendNotificationsPageModule() {
        _classCallCheck(this, SendNotificationsPageModule);
      };

      SendNotificationsPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _send_notifications_routing_module__WEBPACK_IMPORTED_MODULE_5__["SendNotificationsPageRoutingModule"]],
        declarations: [_send_notifications_page__WEBPACK_IMPORTED_MODULE_6__["SendNotificationsPage"]]
      })], SendNotificationsPageModule);
      /***/
    },

    /***/
    "./src/app/pages/admin/send-notifications/send-notifications.page.scss":
    /*!*****************************************************************************!*\
      !*** ./src/app/pages/admin/send-notifications/send-notifications.page.scss ***!
      \*****************************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppPagesAdminSendNotificationsSendNotificationsPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".label-stacked.sc-ion-label-ios-h {\n  margin-bottom: 4px;\n  font-size: 14px;\n  font-weight: bold;\n  color: darkgray;\n}\n\nion-item.sc-ion-textarea-ios-h:not(.item-label),\nion-item:not(.item-label) .sc-ion-textarea-ios-h {\n  border: solid 1px #d7d8da;\n  height: 100px;\n  border-radius: 10px;\n  padding: 5px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvYWRtaW4vc2VuZC1ub3RpZmljYXRpb25zL3NlbmQtbm90aWZpY2F0aW9ucy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLGlCQUFpQjtFQUNqQixlQUFlO0FBQ25COztBQUVFOztFQUVFLHlCQUF5QjtFQUN6QixhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLFlBQVk7QUFDaEIiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9hZG1pbi9zZW5kLW5vdGlmaWNhdGlvbnMvc2VuZC1ub3RpZmljYXRpb25zLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5sYWJlbC1zdGFja2VkLnNjLWlvbi1sYWJlbC1pb3MtaCB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA0cHg7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGNvbG9yOiBkYXJrZ3JheTtcclxuICB9XHJcbiAgXHJcbiAgaW9uLWl0ZW0uc2MtaW9uLXRleHRhcmVhLWlvcy1oOm5vdCguaXRlbS1sYWJlbCksXHJcbiAgaW9uLWl0ZW06bm90KC5pdGVtLWxhYmVsKSAuc2MtaW9uLXRleHRhcmVhLWlvcy1oIHtcclxuICAgIGJvcmRlcjogc29saWQgMXB4ICNkN2Q4ZGE7XHJcbiAgICBoZWlnaHQ6IDEwMHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgIHBhZGRpbmc6IDVweDtcclxuICB9XHJcbiAgIl19 */";
      /***/
    },

    /***/
    "./src/app/pages/admin/send-notifications/send-notifications.page.ts":
    /*!***************************************************************************!*\
      !*** ./src/app/pages/admin/send-notifications/send-notifications.page.ts ***!
      \***************************************************************************/

    /*! exports provided: SendNotificationsPage */

    /***/
    function srcAppPagesAdminSendNotificationsSendNotificationsPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SendNotificationsPage", function () {
        return SendNotificationsPage;
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


      var src_app_services_api_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/services/api-service.service */
      "./src/app/services/api-service.service.ts");
      /* harmony import */


      var src_app_services_loader_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/services/loader.service */
      "./src/app/services/loader.service.ts");
      /* harmony import */


      var src_app_services_toast_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/services/toast.service */
      "./src/app/services/toast.service.ts");
      /* harmony import */


      var _config_config__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../config/config */
      "./src/app/pages/config/config.ts");
      /* harmony import */


      var _ionic_storage__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @ionic/storage */
      "./node_modules/@ionic/storage/__ivy_ngcc__/fesm2015/ionic-storage.js");

      var SendNotificationsPage = /*#__PURE__*/function () {
        function SendNotificationsPage(formBuilder, loader, api, _toast, storage) {
          _classCallCheck(this, SendNotificationsPage);

          this.formBuilder = formBuilder;
          this.loader = loader;
          this.api = api;
          this._toast = _toast;
          this.storage = storage;
          this.url = _config_config__WEBPACK_IMPORTED_MODULE_6__["config"].url;
          this.notificationForm = this.formBuilder.group({
            title: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            body: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required)
          });
        }

        _createClass(SendNotificationsPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.getUserData();
          }
        }, {
          key: "getUserData",
          value: function getUserData() {
            var _this = this;

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
        }, {
          key: "send",
          value: function send() {
            var _this2 = this;

            this.loader.present();

            if (this.token) {
              var params = {
                orgId: this.orgId,
                token: this.token,
                title: this.notificationForm.value.title,
                bodyOfNotification: this.notificationForm.value.body
              };
              console.log(params);
              this.api.postRequest(this.url + _config_config__WEBPACK_IMPORTED_MODULE_6__["UNITURL"].adminNotfication, params).subscribe(function (result) {
                return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this2, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
                  return regeneratorRuntime.wrap(function _callee$(_context) {
                    while (1) {
                      switch (_context.prev = _context.next) {
                        case 0:
                          this.loader.dismiss();

                          this._toast.presentToast(result.message);

                          if (result.success) {
                            this.notificationForm.reset();
                          } else {}

                        case 3:
                        case "end":
                          return _context.stop();
                      }
                    }
                  }, _callee, this);
                }));
              }), function (error) {
                _this2.loader.dismiss();

                console.log('error', error);
              };
            }
          }
        }]);

        return SendNotificationsPage;
      }();

      SendNotificationsPage.ctorParameters = function () {
        return [{
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
        }, {
          type: src_app_services_loader_service__WEBPACK_IMPORTED_MODULE_4__["LoaderService"]
        }, {
          type: src_app_services_api_service_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"]
        }, {
          type: src_app_services_toast_service__WEBPACK_IMPORTED_MODULE_5__["ToastService"]
        }, {
          type: _ionic_storage__WEBPACK_IMPORTED_MODULE_7__["Storage"]
        }];
      };

      SendNotificationsPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-send-notifications',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./send-notifications.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/admin/send-notifications/send-notifications.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./send-notifications.page.scss */
        "./src/app/pages/admin/send-notifications/send-notifications.page.scss"))["default"]]
      })], SendNotificationsPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=pages-admin-send-notifications-send-notifications-module-es5.js.map