(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-unitTabs-tabs-tabs-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/unitTabs/tabs/tabs.page.html":
    /*!******************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/unitTabs/tabs/tabs.page.html ***!
      \******************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppPagesUnitTabsTabsTabsPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-tabs #app_tabs>\r\n  <ion-tab-bar slot=\"bottom\">\r\n    <ion-tab-button tab=\"tab1\" *ngIf=\"!permissions.canCreateSpace && !permissions.spaceCanRetriveAll \">\r\n      <ion-icon name=\"search-outline\"></ion-icon>\r\n      <ion-label>Explore</ion-label>\r\n    </ion-tab-button>\r\n    <ion-tab-button tab=\"my-spaces\" *ngIf=\"permissions.canCreateSpace\">\r\n      <ion-icon name=\"home-outline\"></ion-icon>\r\n      <ion-label>My Spaces</ion-label>\r\n    </ion-tab-button>\r\n    <!-- case tenant -->\r\n    <ion-tab-button tab=\"tab2\" *ngIf=\"permissions.canRetriveOwnBookings\">\r\n      <ion-icon name='bookmark-outline'></ion-icon>\r\n      <ion-label>Bookings</ion-label>\r\n    </ion-tab-button>\r\n    <!-- case owner -->\r\n    <ion-tab-button tab=\"tab4\" *ngIf=\"permissions.canRetriveSpaceBookings\">\r\n      <ion-icon name='bookmark-outline'></ion-icon>\r\n      <ion-label>Bookings</ion-label>\r\n    </ion-tab-button>\r\n    <!-- case noti -->\r\n    <ion-tab-button tab=\"tab3\" *ngIf=\"permissions.notificationcanRetrive\">\r\n      <ion-icon name=\"chatbox-outline\"></ion-icon>\r\n      <ion-label>Inbox</ion-label>\r\n    </ion-tab-button>\r\n    <!--case Admin-->\r\n    <ion-tab-button tab=\"admin-dash\" *ngIf=\"permissions.spaceCanRetriveAll\">\r\n      <ion-icon name=\"home-outline\"></ion-icon>\r\n      <ion-label>Dashboard</ion-label>\r\n    </ion-tab-button>\r\n    <ion-tab-button tab=\"settings\" *ngIf=\"permissions.spaceCanRetriveAll\">\r\n      <ion-icon name=\"settings-outline\"></ion-icon>\r\n      <ion-label>Settings</ion-label>\r\n    </ion-tab-button>\r\n    <ion-tab-button tab=\"profile\" *ngIf=\"!permissions.spaceCanRetriveAll\">\r\n      <ion-icon name=\"person-outline\"></ion-icon>\r\n      <ion-label>Profile</ion-label>\r\n    </ion-tab-button>\r\n  </ion-tab-bar>\r\n</ion-tabs>\r\n";
      /***/
    },

    /***/
    "./src/app/pages/unitTabs/tabs/tabs-routing.module.ts":
    /*!************************************************************!*\
      !*** ./src/app/pages/unitTabs/tabs/tabs-routing.module.ts ***!
      \************************************************************/

    /*! exports provided: TabsPageRoutingModule */

    /***/
    function srcAppPagesUnitTabsTabsTabsRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TabsPageRoutingModule", function () {
        return TabsPageRoutingModule;
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


      var _tabs_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./tabs.page */
      "./src/app/pages/unitTabs/tabs/tabs.page.ts");

      var routes = [{
        path: '',
        component: _tabs_page__WEBPACK_IMPORTED_MODULE_3__["TabsPage"],
        children: [{
          path: 'tab1',
          loadChildren: function loadChildren() {
            return Promise.all(
            /*! import() | unitTabs-tab1-tab1-module */
            [__webpack_require__.e("common"), __webpack_require__.e("unitTabs-tab1-tab1-module")]).then(__webpack_require__.bind(null,
            /*! ../../unitTabs/tab1/tab1.module */
            "./src/app/pages/unitTabs/tab1/tab1.module.ts")).then(function (m) {
              return m.Tab1PageModule;
            });
          }
        }, {
          path: 'tab2',
          loadChildren: function loadChildren() {
            return Promise.all(
            /*! import() | unitTabs-tab2-tab2-module */
            [__webpack_require__.e("common"), __webpack_require__.e("unitTabs-tab2-tab2-module")]).then(__webpack_require__.bind(null,
            /*! ../../unitTabs/tab2/tab2.module */
            "./src/app/pages/unitTabs/tab2/tab2.module.ts")).then(function (m) {
              return m.Tab2PageModule;
            });
          }
        }, {
          path: 'tab3',
          loadChildren: function loadChildren() {
            return Promise.all(
            /*! import() | unitTabs-tab3-tab3-module */
            [__webpack_require__.e("common"), __webpack_require__.e("unitTabs-tab3-tab3-module")]).then(__webpack_require__.bind(null,
            /*! ../../unitTabs/tab3/tab3.module */
            "./src/app/pages/unitTabs/tab3/tab3.module.ts")).then(function (m) {
              return m.Tab3PageModule;
            });
          }
        }, {
          path: 'profile',
          loadChildren: function loadChildren() {
            return Promise.all(
            /*! import() | unitTabs-profile-profile-module */
            [__webpack_require__.e("common"), __webpack_require__.e("unitTabs-profile-profile-module")]).then(__webpack_require__.bind(null,
            /*! ../../unitTabs/profile/profile.module */
            "./src/app/pages/unitTabs/profile/profile.module.ts")).then(function (m) {
              return m.ProfilePageModule;
            });
          }
        }, {
          path: 'my-spaces',
          loadChildren: function loadChildren() {
            return Promise.all(
            /*! import() | unitTabs-my-spaces-my-spaces-module */
            [__webpack_require__.e("common"), __webpack_require__.e("unitTabs-my-spaces-my-spaces-module")]).then(__webpack_require__.bind(null,
            /*! ../../unitTabs/my-spaces/my-spaces.module */
            "./src/app/pages/unitTabs/my-spaces/my-spaces.module.ts")).then(function (m) {
              return m.MySpacesPageModule;
            });
          }
        }, {
          path: 'tab4',
          loadChildren: function loadChildren() {
            return Promise.all(
            /*! import() | unitTabs-tab4-tab4-module */
            [__webpack_require__.e("common"), __webpack_require__.e("unitTabs-tab4-tab4-module")]).then(__webpack_require__.bind(null,
            /*! ../../unitTabs/tab4/tab4.module */
            "./src/app/pages/unitTabs/tab4/tab4.module.ts")).then(function (m) {
              return m.Tab4PageModule;
            });
          }
        }, {
          path: 'admin-dash',
          loadChildren: function loadChildren() {
            return __webpack_require__.e(
            /*! import() | unitTabs-admin-dash-admin-dash-module */
            "unitTabs-admin-dash-admin-dash-module").then(__webpack_require__.bind(null,
            /*! ../../unitTabs/admin-dash/admin-dash.module */
            "./src/app/pages/unitTabs/admin-dash/admin-dash.module.ts")).then(function (m) {
              return m.AdminDashPageModule;
            });
          }
        }, {
          path: 'settings',
          loadChildren: function loadChildren() {
            return __webpack_require__.e(
            /*! import() | unitTabs-settings-settings-module */
            "unitTabs-settings-settings-module").then(__webpack_require__.bind(null,
            /*! ../../unitTabs/settings/settings.module */
            "./src/app/pages/unitTabs/settings/settings.module.ts")).then(function (m) {
              return m.SettingsPageModule;
            });
          }
        }, {
          path: '',
          redirectTo: '/tab1',
          pathMatch: 'full'
        }]
      }, {
        path: '',
        redirectTo: '/tab1',
        pathMatch: 'full'
      }];

      var TabsPageRoutingModule = function TabsPageRoutingModule() {
        _classCallCheck(this, TabsPageRoutingModule);
      };

      TabsPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], TabsPageRoutingModule);
      /***/
    },

    /***/
    "./src/app/pages/unitTabs/tabs/tabs.module.ts":
    /*!****************************************************!*\
      !*** ./src/app/pages/unitTabs/tabs/tabs.module.ts ***!
      \****************************************************/

    /*! exports provided: TabsPageModule */

    /***/
    function srcAppPagesUnitTabsTabsTabsModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TabsPageModule", function () {
        return TabsPageModule;
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


      var _tabs_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./tabs-routing.module */
      "./src/app/pages/unitTabs/tabs/tabs-routing.module.ts");
      /* harmony import */


      var _tabs_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./tabs.page */
      "./src/app/pages/unitTabs/tabs/tabs.page.ts");

      var TabsPageModule = function TabsPageModule() {
        _classCallCheck(this, TabsPageModule);
      };

      TabsPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        imports: [_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonicModule"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _tabs_routing_module__WEBPACK_IMPORTED_MODULE_5__["TabsPageRoutingModule"]],
        declarations: [_tabs_page__WEBPACK_IMPORTED_MODULE_6__["TabsPage"]]
      })], TabsPageModule);
      /***/
    },

    /***/
    "./src/app/pages/unitTabs/tabs/tabs.page.scss":
    /*!****************************************************!*\
      !*** ./src/app/pages/unitTabs/tabs/tabs.page.scss ***!
      \****************************************************/

    /*! exports provided: default */

    /***/
    function srcAppPagesUnitTabsTabsTabsPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "ion-tab-button {\n  --background-focused: #ED1B25;\n  --color-selected: #ED1B25;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvdW5pdFRhYnMvdGFicy90YWJzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFJQTtFQUVJLDZCQUFxQjtFQUNyQix5QkFBaUI7QUFKckIiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy91bml0VGFicy90YWJzL3RhYnMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLXRhYnN7XHJcbiAgLy8gbWFyZ2luLXRvcDogMjVweDtcclxufVxyXG5cclxuaW9uLXRhYi1idXR0b24ge1xyXG4gIC8vIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgICAtLWJhY2tncm91bmQtZm9jdXNlZDogI0VEMUIyNTtcclxuICAgIC0tY29sb3Itc2VsZWN0ZWQ6ICNFRDFCMjU7XHJcbiAgfVxyXG4iXX0= */";
      /***/
    },

    /***/
    "./src/app/pages/unitTabs/tabs/tabs.page.ts":
    /*!**************************************************!*\
      !*** ./src/app/pages/unitTabs/tabs/tabs.page.ts ***!
      \**************************************************/

    /*! exports provided: TabsPage */

    /***/
    function srcAppPagesUnitTabsTabsTabsPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TabsPage", function () {
        return TabsPage;
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


      var src_app_services_global_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/services/global.service */
      "./src/app/services/global.service.ts");
      /* harmony import */


      var _ionic_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @ionic/storage */
      "./node_modules/@ionic/storage/__ivy_ngcc__/fesm2015/ionic-storage.js");

      var TabsPage = /*#__PURE__*/function () {
        function TabsPage(_gs, storage) {
          var _this = this;

          _classCallCheck(this, TabsPage);

          this._gs = _gs;
          this.storage = storage;
          this.permissions = {
            canCreateSpace: false,
            canRetriveOwnBookings: false,
            canRetriveSpaceBookings: false,
            notificationcanRetrive: false,
            spaceCanRetriveAll: false
          };

          this._gs.getUpdatedTabs().subscribe(function (status) {
            _this.getUserData();
          }); // set on bais of notifications


          this._gs.getfcmData().subscribe(function (status) {
            if (status) {
              _this.tabRef.select('tab3');
            }
          }); // logout status


          this._gs.getLogOut().subscribe(function (status) {
            if (status) {
              _this.permissions = {
                canCreateSpace: false,
                canRetriveOwnBookings: false,
                canRetriveSpaceBookings: false,
                notificationcanRetrive: false,
                spaceCanRetriveAll: false
              };
              _this.logged = false;

              _this.tabRef.select('tab1');
            }
          });
        }

        _createClass(TabsPage, [{
          key: "ionViewWillEnter",
          value: function ionViewWillEnter() {
            this.getUserData();
          }
        }, {
          key: "getUserData",
          value: function getUserData() {
            var _this2 = this;

            this.storage.get("session").then(function (session) {
              if (session) {
                _this2.storage.get("permissions").then(function (permissions) {
                  _this2.permissionlist = permissions;

                  _this2.setPermissions();
                });
              }
            });
          }
        }, {
          key: "setPermissions",
          value: function setPermissions() {
            if (this.permissionlist) {
              this.permissions.canRetriveOwnBookings = this.permissionlist.includes("unit.booking.canRetriveOwnBookings");
              this.permissions.canCreateSpace = this.permissionlist.includes("unit.space.canCreate");
              this.permissions.canRetriveSpaceBookings = this.permissionlist.includes("unit.booking.canRetriveSpaceBookings");
              this.permissions.notificationcanRetrive = this.permissionlist.includes("unit.notification.canRetrive");
              this.permissions.spaceCanRetriveAll = this.permissionlist.includes("unit.space.canRetriveAll");

              if (this.permissions.canCreateSpace) {
                this.tabRef.select('my-spaces');
              }

              if (this.permissions.spaceCanRetriveAll) {
                this.tabRef.select('admin-dash');
              }
            }
          }
        }]);

        return TabsPage;
      }();

      TabsPage.ctorParameters = function () {
        return [{
          type: src_app_services_global_service__WEBPACK_IMPORTED_MODULE_2__["GlobalService"]
        }, {
          type: _ionic_storage__WEBPACK_IMPORTED_MODULE_3__["Storage"]
        }];
      };

      TabsPage.propDecorators = {
        tabRef: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
          args: ['app_tabs']
        }]
      };
      TabsPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-tabs',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./tabs.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/unitTabs/tabs/tabs.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./tabs.page.scss */
        "./src/app/pages/unitTabs/tabs/tabs.page.scss"))["default"]]
      })], TabsPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=pages-unitTabs-tabs-tabs-module-es5.js.map