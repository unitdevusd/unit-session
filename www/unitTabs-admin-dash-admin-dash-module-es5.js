(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["unitTabs-admin-dash-admin-dash-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/unitTabs/admin-dash/admin-dash.page.html":
    /*!******************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/unitTabs/admin-dash/admin-dash.page.html ***!
      \******************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppPagesUnitTabsAdminDashAdminDashPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-title>Dashboard</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n<ion-content>\r\n  <ion-refresher slot=\"fixed\" (ionRefresh)=\"doRefresh($event)\" (ionPull)=\"ionPull($event)\"\r\n  (ionStart)=\"ionStart($event)\">\r\n    <ion-refresher-content pullingIcon=\"arrow-dropdown\" >\r\n    </ion-refresher-content>\r\n  </ion-refresher>\r\n  <div>\r\n    <ion-card>\r\n      <ion-card-header>\r\n        <ion-card-subtitle>Spaces</ion-card-subtitle>\r\n        <ion-card-title>\r\n          {{count?.spaces}}\r\n          <span>\r\n            <ion-icon name=\"home-outline\"></ion-icon>\r\n          </span>\r\n        </ion-card-title>\r\n      </ion-card-header>\r\n    </ion-card>\r\n    <ion-card>\r\n      <ion-card-header>\r\n        <ion-card-subtitle>Bookings</ion-card-subtitle>\r\n        <ion-card-title>\r\n         {{count?.bookingsCount}}\r\n          <span>\r\n            <ion-icon name=\"bookmark-outline\"></ion-icon>\r\n          </span>\r\n        </ion-card-title>\r\n      </ion-card-header>\r\n    </ion-card>\r\n    <ion-card>\r\n      <ion-card-header>\r\n        <ion-card-subtitle>Tenant</ion-card-subtitle>\r\n        <ion-card-title>\r\n          5\r\n          <span>\r\n            <ion-icon name=\"person-outline\"></ion-icon>\r\n          </span>\r\n        </ion-card-title>\r\n      </ion-card-header>\r\n    </ion-card>\r\n    <ion-card>\r\n      <ion-card-header>\r\n        <ion-card-subtitle>Checked In</ion-card-subtitle>\r\n        <ion-card-title>\r\n          6\r\n          <span>\r\n            <ion-icon name=\"checkmark-outline\"></ion-icon>\r\n          </span>\r\n        </ion-card-title>\r\n      </ion-card-header>\r\n    </ion-card>\r\n    <ion-card>\r\n      <ion-card-header>\r\n        <ion-card-subtitle>Owners</ion-card-subtitle>\r\n        <ion-card-title>\r\n          10\r\n          <span>\r\n            <ion-icon name=\"person-outline\"></ion-icon>\r\n          </span>\r\n        </ion-card-title>\r\n      </ion-card-header>\r\n    </ion-card>\r\n  </div>\r\n  \r\n</ion-content>\r\n\r\n";
      /***/
    },

    /***/
    "./src/app/pages/unitTabs/admin-dash/admin-dash-routing.module.ts":
    /*!************************************************************************!*\
      !*** ./src/app/pages/unitTabs/admin-dash/admin-dash-routing.module.ts ***!
      \************************************************************************/

    /*! exports provided: AdminDashPageRoutingModule */

    /***/
    function srcAppPagesUnitTabsAdminDashAdminDashRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AdminDashPageRoutingModule", function () {
        return AdminDashPageRoutingModule;
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


      var _admin_dash_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./admin-dash.page */
      "./src/app/pages/unitTabs/admin-dash/admin-dash.page.ts");

      var routes = [{
        path: '',
        component: _admin_dash_page__WEBPACK_IMPORTED_MODULE_3__["AdminDashPage"]
      }];

      var AdminDashPageRoutingModule = function AdminDashPageRoutingModule() {
        _classCallCheck(this, AdminDashPageRoutingModule);
      };

      AdminDashPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], AdminDashPageRoutingModule);
      /***/
    },

    /***/
    "./src/app/pages/unitTabs/admin-dash/admin-dash.module.ts":
    /*!****************************************************************!*\
      !*** ./src/app/pages/unitTabs/admin-dash/admin-dash.module.ts ***!
      \****************************************************************/

    /*! exports provided: AdminDashPageModule */

    /***/
    function srcAppPagesUnitTabsAdminDashAdminDashModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AdminDashPageModule", function () {
        return AdminDashPageModule;
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


      var _admin_dash_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./admin-dash-routing.module */
      "./src/app/pages/unitTabs/admin-dash/admin-dash-routing.module.ts");
      /* harmony import */


      var _admin_dash_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./admin-dash.page */
      "./src/app/pages/unitTabs/admin-dash/admin-dash.page.ts");

      var AdminDashPageModule = function AdminDashPageModule() {
        _classCallCheck(this, AdminDashPageModule);
      };

      AdminDashPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _admin_dash_routing_module__WEBPACK_IMPORTED_MODULE_5__["AdminDashPageRoutingModule"]],
        declarations: [_admin_dash_page__WEBPACK_IMPORTED_MODULE_6__["AdminDashPage"]]
      })], AdminDashPageModule);
      /***/
    },

    /***/
    "./src/app/pages/unitTabs/admin-dash/admin-dash.page.scss":
    /*!****************************************************************!*\
      !*** ./src/app/pages/unitTabs/admin-dash/admin-dash.page.scss ***!
      \****************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppPagesUnitTabsAdminDashAdminDashPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "span {\n  float: right;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvdW5pdFRhYnMvYWRtaW4tZGFzaC9hZG1pbi1kYXNoLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFlBQ0o7QUFBQSIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3VuaXRUYWJzL2FkbWluLWRhc2gvYWRtaW4tZGFzaC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJzcGFuIHtcclxuICAgIGZsb2F0OiByaWdodFxyXG59OyJdfQ== */";
      /***/
    },

    /***/
    "./src/app/pages/unitTabs/admin-dash/admin-dash.page.ts":
    /*!**************************************************************!*\
      !*** ./src/app/pages/unitTabs/admin-dash/admin-dash.page.ts ***!
      \**************************************************************/

    /*! exports provided: AdminDashPage */

    /***/
    function srcAppPagesUnitTabsAdminDashAdminDashPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AdminDashPage", function () {
        return AdminDashPage;
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


      var src_app_services_api_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/services/api-service.service */
      "./src/app/services/api-service.service.ts");
      /* harmony import */


      var _config_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../config/config */
      "./src/app/pages/config/config.ts");
      /* harmony import */


      var _ionic_storage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/storage */
      "./node_modules/@ionic/storage/__ivy_ngcc__/fesm2015/ionic-storage.js");

      var AdminDashPage = /*#__PURE__*/function () {
        function AdminDashPage(_api, storage) {
          _classCallCheck(this, AdminDashPage);

          this._api = _api;
          this.storage = storage;
          this.url = _config_config__WEBPACK_IMPORTED_MODULE_3__["config"].url;
        }

        _createClass(AdminDashPage, [{
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

                    _this.getcount();
                  }
                });
              }
            });
          }
        }, {
          key: "getcount",
          value: function getcount() {
            var _this2 = this;

            if (this.token) {
              if (this.token) {
                var params = {
                  token: this.token,
                  orgId: this.orgId
                };
                this._api.postRequest(this.url + _config_config__WEBPACK_IMPORTED_MODULE_3__["UNITURL"].getCountForAdmin, params).subscribe(function (result) {
                  return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this2, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
                    return regeneratorRuntime.wrap(function _callee$(_context) {
                      while (1) {
                        switch (_context.prev = _context.next) {
                          case 0:
                            if (result.success) {
                              console.log('@@@', result);
                              this.count = result.data.tabsCount;
                              console.log(this.count);
                            }

                          case 1:
                          case "end":
                            return _context.stop();
                        }
                      }
                    }, _callee, this);
                  }));
                }), function (error) {
                  console.log(error.description);
                };
              }
            }
          }
        }, {
          key: "doRefresh",
          value: function doRefresh(event) {
            var _this3 = this;

            setTimeout(function () {
              _this3.getcount();

              event.target.complete();
            }, 1000);
          }
        }, {
          key: "ionPull",
          value: function ionPull(event) {}
        }, {
          key: "ionStart",
          value: function ionStart(event) {}
        }]);

        return AdminDashPage;
      }();

      AdminDashPage.ctorParameters = function () {
        return [{
          type: src_app_services_api_service_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"]
        }, {
          type: _ionic_storage__WEBPACK_IMPORTED_MODULE_4__["Storage"]
        }];
      };

      AdminDashPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-admin-dash',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./admin-dash.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/unitTabs/admin-dash/admin-dash.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./admin-dash.page.scss */
        "./src/app/pages/unitTabs/admin-dash/admin-dash.page.scss"))["default"]]
      })], AdminDashPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=unitTabs-admin-dash-admin-dash-module-es5.js.map