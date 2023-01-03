(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-tanent-extend-booking-extend-booking-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/tanent/extend-booking/extend-booking.page.html":
    /*!************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/tanent/extend-booking/extend-booking.page.html ***!
      \************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppPagesTanentExtendBookingExtendBookingPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header class=\"ion-no-border\">\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\" (click)=\"back()\">\r\n      <ion-back-button color=\"unit-btn\" text=\"\" icon=\"chevron-back-outline\"></ion-back-button>\r\n    </ion-buttons>\r\n  </ion-toolbar>\r\n</ion-header>\r\n<ion-content>\r\n  <form [formGroup]=\"extensionForm\">\r\n    <div class=\"ion-padding\">\r\n      <ion-item lines=\"none\" class=\"item-space\">\r\n        <ion-label position=\"stacked\">Start Date</ion-label>\r\n        <ion-input formControlName=\"startDate\"> </ion-input>\r\n      </ion-item>\r\n      <ion-item lines=\"none\" class=\"item-space\">\r\n        <ion-label position=\"stacked\">End Date</ion-label>\r\n        <ion-datetime value={{date}} placeholder=\"Select Date\" pickerFormat=\"MMM DD, YYYY\" display-timezone=\"utc\"\r\n          formControlName=\"endDate\" (ionChange)=\"endDateChange($event)\" [min]=\"minDate\"></ion-datetime>\r\n      </ion-item>\r\n    </div>\r\n    <div class=\"ion-padding\">\r\n      <ion-item lines=\"none\">\r\n        <ion-label position=\"stacked\">Notes</ion-label>\r\n        <ion-textarea placeholder=\"Any special Notes?\" formControlName=\"description\">\r\n        </ion-textarea>\r\n      </ion-item>\r\n    </div>\r\n  </form>\r\n</ion-content>\r\n<ion-footer class=\"ion-no-border\">\r\n  <ion-toolbar>\r\n    <div class=\"ion-padding\">\r\n      <ion-button color=\"unit-btn\" [disabled]=\"!extensionForm.valid\" expand=\"block\" (click)=\"extensionRequest()\">\r\n        Send Extension Request\r\n      </ion-button>\r\n    </div>\r\n  </ion-toolbar>\r\n</ion-footer>";
      /***/
    },

    /***/
    "./src/app/pages/tanent/extend-booking/extend-booking-routing.module.ts":
    /*!******************************************************************************!*\
      !*** ./src/app/pages/tanent/extend-booking/extend-booking-routing.module.ts ***!
      \******************************************************************************/

    /*! exports provided: ExtendBookingPageRoutingModule */

    /***/
    function srcAppPagesTanentExtendBookingExtendBookingRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ExtendBookingPageRoutingModule", function () {
        return ExtendBookingPageRoutingModule;
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


      var _extend_booking_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./extend-booking.page */
      "./src/app/pages/tanent/extend-booking/extend-booking.page.ts");

      var routes = [{
        path: '',
        component: _extend_booking_page__WEBPACK_IMPORTED_MODULE_3__["ExtendBookingPage"]
      }];

      var ExtendBookingPageRoutingModule = function ExtendBookingPageRoutingModule() {
        _classCallCheck(this, ExtendBookingPageRoutingModule);
      };

      ExtendBookingPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], ExtendBookingPageRoutingModule);
      /***/
    },

    /***/
    "./src/app/pages/tanent/extend-booking/extend-booking.module.ts":
    /*!**********************************************************************!*\
      !*** ./src/app/pages/tanent/extend-booking/extend-booking.module.ts ***!
      \**********************************************************************/

    /*! exports provided: ExtendBookingPageModule */

    /***/
    function srcAppPagesTanentExtendBookingExtendBookingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ExtendBookingPageModule", function () {
        return ExtendBookingPageModule;
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


      var _extend_booking_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./extend-booking-routing.module */
      "./src/app/pages/tanent/extend-booking/extend-booking-routing.module.ts");
      /* harmony import */


      var _extend_booking_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./extend-booking.page */
      "./src/app/pages/tanent/extend-booking/extend-booking.page.ts");

      var ExtendBookingPageModule = function ExtendBookingPageModule() {
        _classCallCheck(this, ExtendBookingPageModule);
      };

      ExtendBookingPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _extend_booking_routing_module__WEBPACK_IMPORTED_MODULE_5__["ExtendBookingPageRoutingModule"]],
        declarations: [_extend_booking_page__WEBPACK_IMPORTED_MODULE_6__["ExtendBookingPage"]]
      })], ExtendBookingPageModule);
      /***/
    },

    /***/
    "./src/app/pages/tanent/extend-booking/extend-booking.page.scss":
    /*!**********************************************************************!*\
      !*** ./src/app/pages/tanent/extend-booking/extend-booking.page.scss ***!
      \**********************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppPagesTanentExtendBookingExtendBookingPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3RhbmVudC9leHRlbmQtYm9va2luZy9leHRlbmQtYm9va2luZy5wYWdlLnNjc3MifQ== */";
      /***/
    },

    /***/
    "./src/app/pages/tanent/extend-booking/extend-booking.page.ts":
    /*!********************************************************************!*\
      !*** ./src/app/pages/tanent/extend-booking/extend-booking.page.ts ***!
      \********************************************************************/

    /*! exports provided: ExtendBookingPage */

    /***/
    function srcAppPagesTanentExtendBookingExtendBookingPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ExtendBookingPage", function () {
        return ExtendBookingPage;
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

      var ExtendBookingPage = /*#__PURE__*/function () {
        function ExtendBookingPage(router, _fb, _api, route, toast, storage) {
          _classCallCheck(this, ExtendBookingPage);

          this.router = router;
          this._fb = _fb;
          this._api = _api;
          this.route = route;
          this.toast = toast;
          this.storage = storage;
          this.url = _config_config__WEBPACK_IMPORTED_MODULE_7__["config"].url;
          this.setUpForm();
        }

        _createClass(ExtendBookingPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this = this;

            this.getUserData();
            this.route.queryParams.subscribe(function (params) {
              if (params) {
                _this.bookingId = params.bookingId;
                _this.strDate = Number(params.startDate);
                var d = new Date(_this.strDate);
                var n = d.toISOString();
                _this.strDate = n;

                _this.setUpForm();
              }
            });
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
          key: "setUpForm",
          value: function setUpForm() {
            this.extensionForm = this._fb.group({
              startDate: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
              endDate: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
              description: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
            });
            console.log(this.strDate);
            var startDate = moment__WEBPACK_IMPORTED_MODULE_4__(this.strDate).format('MMM DD, YYYY');
            this.extensionForm.controls['startDate'].setValue(startDate);
          }
        }, {
          key: "back",
          value: function back() {
            this.router.navigate(['tabs/tab3']);
          }
        }, {
          key: "endDateChange",
          value: function endDateChange(ev) {
            console.log(ev);
          }
        }, {
          key: "extensionRequest",
          value: function extensionRequest() {
            var _this3 = this;

            var endDate = moment__WEBPACK_IMPORTED_MODULE_4__(this.extensionForm.value.endDate).format('MMM DD, YYYY');
            console.log(endDate);

            if (endDate <= this.extensionForm.value.startDate) {
              this.toast.presentToast('please Enter date grater than start Date');
              return;
            }

            if (this.token) {
              var params = {
                bookingId: this.bookingId,
                token: this.token,
                orgId: this.orgId,
                startDate: this.extensionForm.value.startDate,
                endDate: this.extensionForm.value.endDate,
                description: this.extensionForm.value.description
              };

              this._api.postRequest(this.url + _config_config__WEBPACK_IMPORTED_MODULE_7__["UNITURL"].extensionRequest, params).subscribe(function (result) {
                console.log(result);

                if (result.success) {
                  _this3.toast.presentToast('Extension Request send Successfully!..');

                  _this3.back();
                }
              }, function (error) {
                console.log(error);
              });
            }
          }
        }]);

        return ExtendBookingPage;
      }();

      ExtendBookingPage.ctorParameters = function () {
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

      ExtendBookingPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-extend-booking',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./extend-booking.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/tanent/extend-booking/extend-booking.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./extend-booking.page.scss */
        "./src/app/pages/tanent/extend-booking/extend-booking.page.scss"))["default"]]
      })], ExtendBookingPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=pages-tanent-extend-booking-extend-booking-module-es5.js.map