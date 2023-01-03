(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-tanent-confirm-payment-confirm-payment-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/tanent/confirm-payment/confirm-payment.page.html":
    /*!**************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/tanent/confirm-payment/confirm-payment.page.html ***!
      \**************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppPagesTanentConfirmPaymentConfirmPaymentPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header class=\"ion-no-border\">\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"end\" class=\"cancel\" (click)=\"continue()\">\r\n      <span>\r\n        <ion-icon color=\"unit-btn\" name=\"close\"></ion-icon>\r\n      </span>\r\n    </ion-buttons>\r\n  </ion-toolbar>\r\n</ion-header> \r\n<ion-content>\r\n  <ion-grid class=\"success_img\" class=\"ion-no-padding\">\r\n    <ion-row class=\"ion-no-padding\">\r\n      <ion-col class=\"ion-no-padding\" style=\"text-align: center;\">\r\n        <img src=\"../../../../assets/imgs/sucess.png\">\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-grid>\r\n  <ion-grid style=\"text-align:center;\" class=\"ion-no-padding\">\r\n    <ion-row class=\"ion-no-padding\">\r\n      <ion-col class=\"ion-no-padding\">\r\n        <h4 class=\"success_text\">Successful</h4>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-grid>\r\n  <ion-grid class=\"ion-no-padding\" style=\"text-align:center;\">\r\n    <ion-row class=\"ion-no-padding\">\r\n      <ion-col class=\"ion-no-padding\">\r\n        <h3>Your booking is confirmed!</h3>\r\n        <p class=\"success_p\">You will receive a confirmation email along with other details shortly!</p>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-grid>\r\n  <ion-grid class=\"ion-no-padding\">\r\n    <ion-row class=\"ion-no-padding\">\r\n      <ion-col class=\"ion-no-padding\" style=\"text-align: center;\">\r\n        <h5>{{placeInfo.startDate | date:'mediumDate' }} - {{placeInfo.endDate | date:'mediumDate' }}</h5>\r\n      </ion-col>\r\n    </ion-row>\r\n    <ion-row class=\"ion-no-padding\">\r\n      <ion-col *ngIf=\"!placeInfo.place.images.length; else noProductImage\" style=\"text-align: center;\">\r\n        <img  style=\"border-radius: 25px !important;\" src=\"../../../../assets/imgs/dummy_space.png\">\r\n      </ion-col>\r\n     <ng-template #noProductImage>\r\n      <ion-col style=\"text-align: center;\" >\r\n        <img style=\"border-radius: 25px !important;\" src=\"{{placeInfo.place.images[0]}}\">\r\n      </ion-col>\r\n     </ng-template>\r\n    </ion-row>\r\n    <ion-row class=\"ion-no-padding\">\r\n      <ion-col class=\"ion-no-padding\" style=\"text-align: center;\">\r\n        <h5 style=\"margin-bottom: 0px;\">{{placeInfo.place.name}}</h5>\r\n        <h6 style=\"margin-bottom: 0px;\">{{placeInfo.place.address}}</h6>\r\n        <p (click)=\"booking()\"><a>Check My Bookings</a></p>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-grid>\r\n</ion-content>\r\n\r\n";
      /***/
    },

    /***/
    "./src/app/pages/tanent/confirm-payment/confirm-payment-routing.module.ts":
    /*!********************************************************************************!*\
      !*** ./src/app/pages/tanent/confirm-payment/confirm-payment-routing.module.ts ***!
      \********************************************************************************/

    /*! exports provided: ConfirmPaymentPageRoutingModule */

    /***/
    function srcAppPagesTanentConfirmPaymentConfirmPaymentRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ConfirmPaymentPageRoutingModule", function () {
        return ConfirmPaymentPageRoutingModule;
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


      var _confirm_payment_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./confirm-payment.page */
      "./src/app/pages/tanent/confirm-payment/confirm-payment.page.ts");

      var routes = [{
        path: '',
        component: _confirm_payment_page__WEBPACK_IMPORTED_MODULE_3__["ConfirmPaymentPage"]
      }];

      var ConfirmPaymentPageRoutingModule = function ConfirmPaymentPageRoutingModule() {
        _classCallCheck(this, ConfirmPaymentPageRoutingModule);
      };

      ConfirmPaymentPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], ConfirmPaymentPageRoutingModule);
      /***/
    },

    /***/
    "./src/app/pages/tanent/confirm-payment/confirm-payment.module.ts":
    /*!************************************************************************!*\
      !*** ./src/app/pages/tanent/confirm-payment/confirm-payment.module.ts ***!
      \************************************************************************/

    /*! exports provided: ConfirmPaymentPageModule */

    /***/
    function srcAppPagesTanentConfirmPaymentConfirmPaymentModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ConfirmPaymentPageModule", function () {
        return ConfirmPaymentPageModule;
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


      var _confirm_payment_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./confirm-payment-routing.module */
      "./src/app/pages/tanent/confirm-payment/confirm-payment-routing.module.ts");
      /* harmony import */


      var _confirm_payment_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./confirm-payment.page */
      "./src/app/pages/tanent/confirm-payment/confirm-payment.page.ts");

      var ConfirmPaymentPageModule = function ConfirmPaymentPageModule() {
        _classCallCheck(this, ConfirmPaymentPageModule);
      };

      ConfirmPaymentPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _confirm_payment_routing_module__WEBPACK_IMPORTED_MODULE_5__["ConfirmPaymentPageRoutingModule"]],
        declarations: [_confirm_payment_page__WEBPACK_IMPORTED_MODULE_6__["ConfirmPaymentPage"]]
      })], ConfirmPaymentPageModule);
      /***/
    },

    /***/
    "./src/app/pages/tanent/confirm-payment/confirm-payment.page.scss":
    /*!************************************************************************!*\
      !*** ./src/app/pages/tanent/confirm-payment/confirm-payment.page.scss ***!
      \************************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppPagesTanentConfirmPaymentConfirmPaymentPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".success_img {\n  text-align: center;\n  margin-top: 30px;\n}\n\n.success_text {\n  font-size: 26px;\n  color: #EE202C;\n  font-family: 'helveticaneuebold';\n  text-align: center;\n}\n\n.success_p {\n  text-align: center;\n  font-size: 14px;\n  margin: 0 auto;\n  max-width: 262px;\n  font-weight: 400;\n  color: #C3C4C3;\n  font-family: 'medium';\n  margin-bottom: 50px;\n}\n\n.cancel {\n  margin-right: 5px;\n  font-size: x-large;\n}\n\np a {\n  text-decoration: none;\n  color: #ED1B25;\n  font-family: medium;\n  font-size: 14px;\n}\n\nh3 {\n  font-family: 'helveticaneuebold';\n  font-size: 19px;\n}\n\nh5 {\n  font-family: 'helveticaneuebold';\n  font-size: 16px;\n  font-weight: 400;\n  color: #414141;\n}\n\nh6 {\n  text-decoration: none;\n  color: #C2C2C2;\n  font-family: 'helveticaneuebold';\n  font-size: 15px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvdGFuZW50L2NvbmZpcm0tcGF5bWVudC9jb25maXJtLXBheW1lbnQucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0ksa0JBQWtCO0VBQ2xCLGdCQUFnQjtBQUFwQjs7QUFFRTtFQUNFLGVBQWU7RUFDZixjQUFjO0VBQ2QsZ0NBQWdDO0VBQ2hDLGtCQUFrQjtBQUN0Qjs7QUFDRTtFQUNFLGtCQUFrQjtFQUNsQixlQUFlO0VBQ2YsY0FBYztFQUNkLGdCQUFnQjtFQUNoQixnQkFBZ0I7RUFDaEIsY0FBYztFQUNkLHFCQUFxQjtFQUNyQixtQkFBbUI7QUFFdkI7O0FBQUU7RUFDRSxpQkFBaUI7RUFDakIsa0JBQWtCO0FBR3RCOztBQURFO0VBRUkscUJBQXFCO0VBQ3JCLGNBQWM7RUFDZCxtQkFBbUI7RUFDbkIsZUFBZTtBQUdyQjs7QUFBRTtFQUNFLGdDQUFnQztFQUM5QixlQUFlO0FBR3JCOztBQURFO0VBQ0UsZ0NBQWdDO0VBQ2hDLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsY0FBYztBQUlsQjs7QUFGRTtFQUNFLHFCQUFxQjtFQUNyQixjQUFjO0VBQ2QsZ0NBQWdDO0VBQ2hDLGVBQWU7QUFLbkIiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy90YW5lbnQvY29uZmlybS1wYXltZW50L2NvbmZpcm0tcGF5bWVudC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuLnN1Y2Nlc3NfaW1nIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIG1hcmdpbi10b3A6IDMwcHg7XHJcbiAgfVxyXG4gIC5zdWNjZXNzX3RleHQge1xyXG4gICAgZm9udC1zaXplOiAyNnB4O1xyXG4gICAgY29sb3I6ICNFRTIwMkM7XHJcbiAgICBmb250LWZhbWlseTogJ2hlbHZldGljYW5ldWVib2xkJztcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB9XHJcbiAgLnN1Y2Nlc3NfcCB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBtYXJnaW46IDAgYXV0bztcclxuICAgIG1heC13aWR0aDogMjYycHg7XHJcbiAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgY29sb3I6ICNDM0M0QzM7XHJcbiAgICBmb250LWZhbWlseTogJ21lZGl1bSc7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA1MHB4O1xyXG4gIH1cclxuICAuY2FuY2VsIHtcclxuICAgIG1hcmdpbi1yaWdodDogNXB4O1xyXG4gICAgZm9udC1zaXplOiB4LWxhcmdlO1xyXG4gIH1cclxuICBwe1xyXG4gICAgYXtcclxuICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgICBjb2xvcjogI0VEMUIyNTtcclxuICAgICAgZm9udC1mYW1pbHk6IG1lZGl1bTtcclxuICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgfVxyXG4gIH1cclxuICBoM3tcclxuICAgIGZvbnQtZmFtaWx5OiAnaGVsdmV0aWNhbmV1ZWJvbGQnO1xyXG4gICAgICBmb250LXNpemU6IDE5cHg7XHJcbiAgfVxyXG4gIGg1e1xyXG4gICAgZm9udC1mYW1pbHk6ICdoZWx2ZXRpY2FuZXVlYm9sZCc7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgY29sb3I6ICM0MTQxNDE7XHJcbiAgfVxyXG4gIGg2e1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgY29sb3I6ICNDMkMyQzI7XHJcbiAgICBmb250LWZhbWlseTogJ2hlbHZldGljYW5ldWVib2xkJztcclxuICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICB9Il19 */";
      /***/
    },

    /***/
    "./src/app/pages/tanent/confirm-payment/confirm-payment.page.ts":
    /*!**********************************************************************!*\
      !*** ./src/app/pages/tanent/confirm-payment/confirm-payment.page.ts ***!
      \**********************************************************************/

    /*! exports provided: ConfirmPaymentPage */

    /***/
    function srcAppPagesTanentConfirmPaymentConfirmPaymentPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ConfirmPaymentPage", function () {
        return ConfirmPaymentPage;
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


      var src_app_services_global_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/services/global.service */
      "./src/app/services/global.service.ts");

      var ConfirmPaymentPage = /*#__PURE__*/function () {
        function ConfirmPaymentPage(route, router, _gs) {
          var _this = this;

          _classCallCheck(this, ConfirmPaymentPage);

          this.route = route;
          this.router = router;
          this._gs = _gs;
          this.route.queryParams.subscribe(function (params) {
            if (params) _this.placeInfo = JSON.parse(params.placeInfo);
            console.log('@@', _this.placeInfo);
          });
        }

        _createClass(ConfirmPaymentPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "continue",
          value: function _continue() {
            this.router.navigate(['tabs/tab1']);
          }
        }, {
          key: "booking",
          value: function booking() {
            this._gs.refreshMyStays("true");

            this.router.navigate(['tabs/tab2']);
          }
        }]);

        return ConfirmPaymentPage;
      }();

      ConfirmPaymentPage.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }, {
          type: src_app_services_global_service__WEBPACK_IMPORTED_MODULE_3__["GlobalService"]
        }];
      };

      ConfirmPaymentPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-confirm-payment',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./confirm-payment.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/tanent/confirm-payment/confirm-payment.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./confirm-payment.page.scss */
        "./src/app/pages/tanent/confirm-payment/confirm-payment.page.scss"))["default"]]
      })], ConfirmPaymentPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=pages-tanent-confirm-payment-confirm-payment-module-es5.js.map