(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-tanent-pick-up-pick-up-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/tanent/pick-up/pick-up.page.html":
    /*!**********************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/tanent/pick-up/pick-up.page.html ***!
      \**********************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppPagesTanentPickUpPickUpPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header  class=\"ion-no-border\">\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\" (click)=\"back()\">\r\n        <ion-back-button color=\"unit-btn\" text=\"\" icon=\"chevron-back-outline\"></ion-back-button>\r\n    </ion-buttons>\r\n  </ion-toolbar>\r\n</ion-header>\r\n<ion-content>\r\n  <form [formGroup]=\"pickUpForm\">\r\n    <div class=\"ion-padding\">\r\n      <ion-item lines=\"none\" class=\"item-space\">\r\n        <ion-label position=\"stacked\">pickUpDate</ion-label>\r\n        <ion-datetime value={{date}} placeholder=\"Select Date\" pickerFormat=\"MMM DD, YYYY\"\r\n          formControlName=\"pickupDate\" [min]=\"minDate\"></ion-datetime>\r\n      </ion-item>\r\n      </div>\r\n      <div class=\"ion-padding\">\r\n        <ion-item lines=\"none\">\r\n          <ion-label position=\"stacked\">Notes</ion-label>\r\n          <ion-textarea placeholder=\"Any special Notes?\" formControlName=\"description\">\r\n          </ion-textarea>\r\n        </ion-item>\r\n      </div>\r\n  </form>\r\n</ion-content>\r\n<ion-footer class=\"ion-no-border\">\r\n  <ion-toolbar>\r\n    <div class=\"ion-padding\">\r\n      <ion-button color=\"unit-btn\" [disabled]=\"!pickUpForm.valid\" expand=\"block\" (click)=\"pickUp()\">\r\n       Schedule Pickup\r\n      </ion-button>\r\n    </div>\r\n  </ion-toolbar>\r\n</ion-footer>";
      /***/
    },

    /***/
    "./src/app/pages/tanent/pick-up/pick-up-routing.module.ts":
    /*!****************************************************************!*\
      !*** ./src/app/pages/tanent/pick-up/pick-up-routing.module.ts ***!
      \****************************************************************/

    /*! exports provided: PickUpPageRoutingModule */

    /***/
    function srcAppPagesTanentPickUpPickUpRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PickUpPageRoutingModule", function () {
        return PickUpPageRoutingModule;
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


      var _pick_up_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./pick-up.page */
      "./src/app/pages/tanent/pick-up/pick-up.page.ts");

      var routes = [{
        path: '',
        component: _pick_up_page__WEBPACK_IMPORTED_MODULE_3__["PickUpPage"]
      }];

      var PickUpPageRoutingModule = function PickUpPageRoutingModule() {
        _classCallCheck(this, PickUpPageRoutingModule);
      };

      PickUpPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], PickUpPageRoutingModule);
      /***/
    },

    /***/
    "./src/app/pages/tanent/pick-up/pick-up.module.ts":
    /*!********************************************************!*\
      !*** ./src/app/pages/tanent/pick-up/pick-up.module.ts ***!
      \********************************************************/

    /*! exports provided: PickUpPageModule */

    /***/
    function srcAppPagesTanentPickUpPickUpModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PickUpPageModule", function () {
        return PickUpPageModule;
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


      var _pick_up_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./pick-up-routing.module */
      "./src/app/pages/tanent/pick-up/pick-up-routing.module.ts");
      /* harmony import */


      var _pick_up_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./pick-up.page */
      "./src/app/pages/tanent/pick-up/pick-up.page.ts");

      var PickUpPageModule = function PickUpPageModule() {
        _classCallCheck(this, PickUpPageModule);
      };

      PickUpPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _pick_up_routing_module__WEBPACK_IMPORTED_MODULE_5__["PickUpPageRoutingModule"]],
        declarations: [_pick_up_page__WEBPACK_IMPORTED_MODULE_6__["PickUpPage"]]
      })], PickUpPageModule);
      /***/
    },

    /***/
    "./src/app/pages/tanent/pick-up/pick-up.page.scss":
    /*!********************************************************!*\
      !*** ./src/app/pages/tanent/pick-up/pick-up.page.scss ***!
      \********************************************************/

    /*! exports provided: default */

    /***/
    function srcAppPagesTanentPickUpPickUpPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3RhbmVudC9waWNrLXVwL3BpY2stdXAucGFnZS5zY3NzIn0= */";
      /***/
    },

    /***/
    "./src/app/pages/tanent/pick-up/pick-up.page.ts":
    /*!******************************************************!*\
      !*** ./src/app/pages/tanent/pick-up/pick-up.page.ts ***!
      \******************************************************/

    /*! exports provided: PickUpPage */

    /***/
    function srcAppPagesTanentPickUpPickUpPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PickUpPage", function () {
        return PickUpPage;
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


      var moment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! moment */
      "./node_modules/moment/moment.js");
      /* harmony import */


      var moment__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_4__);
      /* harmony import */


      var src_app_services_api_service_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/services/api-service.service */
      "./src/app/services/api-service.service.ts");
      /* harmony import */


      var src_app_services_toast_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/app/services/toast.service */
      "./src/app/services/toast.service.ts");
      /* harmony import */


      var _config_config__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../../config/config */
      "./src/app/pages/config/config.ts");
      /* harmony import */


      var _ionic_storage__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @ionic/storage */
      "./node_modules/@ionic/storage/__ivy_ngcc__/fesm2015/ionic-storage.js");

      var PickUpPage = /*#__PURE__*/function () {
        function PickUpPage(router, _fb, _api, route, toast, storage) {
          var _this = this;

          _classCallCheck(this, PickUpPage);

          this.router = router;
          this._fb = _fb;
          this._api = _api;
          this.route = route;
          this.toast = toast;
          this.storage = storage;
          this.url = _config_config__WEBPACK_IMPORTED_MODULE_7__["config"].url;
          this.route.queryParams.subscribe(function (params) {
            if (params) {
              console.log(params);
              _this.bookingId = params.bookingId;
              _this.pickUpDate = Number(params.endDate);
              var d = new Date(_this.pickUpDate);
              var n = d.toISOString();
              _this.pickUpDate = n;

              _this.initpickUpform();
            }
          });
        }

        _createClass(PickUpPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.getUserData();
          }
        }, {
          key: "getUserData",
          value: function getUserData() {
            var _this2 = this;

            this.storage.get("session").then(function (session) {
              if (session) {
                _this2.storage.get("org").then(function (org) {
                  if (org) {
                    _this2.token = session;
                    _this2.orgId = org;
                  }
                });
              }
            });
          }
        }, {
          key: "initpickUpform",
          value: function initpickUpform() {
            this.pickUpForm = this._fb.group({
              pickupDate: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
              description: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
            });
            console.log(this.pickUpDate);
            var pickup = moment__WEBPACK_IMPORTED_MODULE_4__(this.pickUpDate).format('MMM DD, YYYY');
            console.log(pickup);
            this.pickUpForm.controls['pickupDate'].setValue(pickup);
          }
        }, {
          key: "back",
          value: function back() {
            this.router.navigate(['tabs/tab3']);
          }
        }, {
          key: "pickUp",
          value: function pickUp() {
            var _this3 = this;

            console.log(this.pickUpForm.value);

            if (this.pickUpForm.value.pickupDate <= this.pickUpDate) {
              this.toast.presentToast('please Enter date grater than pickUpDate');
              return;
            }

            if (this.token) {
              console.log(this.pickUpForm.value);
              var params = {
                bookingId: this.bookingId,
                token: this.token,
                orgId: this.orgId,
                pickUpDate: this.pickUpForm.value.pickupDate,
                description: this.pickUpForm.value.description
              };

              this._api.postRequest(this.url + _config_config__WEBPACK_IMPORTED_MODULE_7__["UNITURL"].schedulePickup, params).subscribe(function (result) {
                console.log(result);

                if (result.success) {
                  _this3.toast.presentToast('your pickup scheduled Successfully!..');

                  _this3.back();
                }
              }, function (error) {
                console.log(error);
              });
            }
          }
        }]);

        return PickUpPage;
      }();

      PickUpPage.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
        }, {
          type: src_app_services_api_service_service__WEBPACK_IMPORTED_MODULE_5__["ApiService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
        }, {
          type: src_app_services_toast_service__WEBPACK_IMPORTED_MODULE_6__["ToastService"]
        }, {
          type: _ionic_storage__WEBPACK_IMPORTED_MODULE_8__["Storage"]
        }];
      };

      PickUpPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-pick-up',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./pick-up.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/tanent/pick-up/pick-up.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./pick-up.page.scss */
        "./src/app/pages/tanent/pick-up/pick-up.page.scss"))["default"]]
      })], PickUpPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=pages-tanent-pick-up-pick-up-module-es5.js.map