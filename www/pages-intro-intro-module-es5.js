(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-intro-intro-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/intro/intro.page.html":
    /*!***********************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/intro/intro.page.html ***!
      \***********************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppPagesIntroIntroPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-content fullscreen scroll-y=\"false\">\r\n  <ion-slides pager=\"true\" [options]=\"slideOpts\">\r\n    <ion-slide class=\"bg_one\" style=\"background-image: url(../../../assets/imgs/intro.jpg)\">\r\n      <div class=\"slide caseone\">\r\n        <h2>Welcome to Unit!</h2>\r\n        <p>\r\n          Welcome to the modern day storage economy. Hosts and renters on Unit Storage are everyday people like you and\r\n          me.\r\n        </p>\r\n        <a (click)=\"skip()\">Skip</a>\r\n      </div>\r\n      <div class=\"wel-bg\"></div>\r\n    </ion-slide>\r\n    <ion-slide class=\"bg_two\" style=\"background-image: url(../../../assets/imgs/intro-2.jpg)\">\r\n      <div class=\"casetwo\">\r\n        <h2>Need a Space</h2>\r\n        <p>\r\n          Coming Soon : Save your search criteria and subscribe to notifications when suitable Units come up for rent.\r\n        </p>\r\n        <a (click)=\"skip()\">Skip</a>\r\n      </div>\r\n    </ion-slide>\r\n    <ion-slide class=\"bg_three\" style=\"background-image: url(../../../assets/imgs/intro-3.jpg)\">\r\n      <div class=\"casethree\">\r\n        <h2>Rent a Space</h2>\r\n        <p>\r\n          Coming Soon : Connect with friends & colleagues in closely-knit societies called Unit Groups\r\n        </p>\r\n        <a (click)=\"skip()\">Go</a>\r\n\r\n      </div>\r\n      <div class=\"rent-bg\"></div>\r\n    </ion-slide>\r\n  </ion-slides>\r\n</ion-content>";
      /***/
    },

    /***/
    "./src/app/pages/intro/intro-routing.module.ts":
    /*!*****************************************************!*\
      !*** ./src/app/pages/intro/intro-routing.module.ts ***!
      \*****************************************************/

    /*! exports provided: IntroPageRoutingModule */

    /***/
    function srcAppPagesIntroIntroRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "IntroPageRoutingModule", function () {
        return IntroPageRoutingModule;
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


      var _intro_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./intro.page */
      "./src/app/pages/intro/intro.page.ts");

      var routes = [{
        path: '',
        component: _intro_page__WEBPACK_IMPORTED_MODULE_3__["IntroPage"]
      }];

      var IntroPageRoutingModule = function IntroPageRoutingModule() {
        _classCallCheck(this, IntroPageRoutingModule);
      };

      IntroPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], IntroPageRoutingModule);
      /***/
    },

    /***/
    "./src/app/pages/intro/intro.module.ts":
    /*!*********************************************!*\
      !*** ./src/app/pages/intro/intro.module.ts ***!
      \*********************************************/

    /*! exports provided: IntroPageModule */

    /***/
    function srcAppPagesIntroIntroModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "IntroPageModule", function () {
        return IntroPageModule;
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


      var _intro_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./intro-routing.module */
      "./src/app/pages/intro/intro-routing.module.ts");
      /* harmony import */


      var _intro_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./intro.page */
      "./src/app/pages/intro/intro.page.ts");

      var IntroPageModule = function IntroPageModule() {
        _classCallCheck(this, IntroPageModule);
      };

      IntroPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _intro_routing_module__WEBPACK_IMPORTED_MODULE_5__["IntroPageRoutingModule"]],
        declarations: [_intro_page__WEBPACK_IMPORTED_MODULE_6__["IntroPage"]]
      })], IntroPageModule);
      /***/
    },

    /***/
    "./src/app/pages/intro/intro.page.scss":
    /*!*********************************************!*\
      !*** ./src/app/pages/intro/intro.page.scss ***!
      \*********************************************/

    /*! exports provided: default */

    /***/
    function srcAppPagesIntroIntroPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "ion-slides {\n  height: 100%;\n  --bullet-background-active: #ed1b25;\n  --bullet-background: #f03a42;\n}\n\n.swiper-slide {\n  display: block;\n}\n\n.swiper-slide h2 {\n  margin-top: 2.8rem;\n}\n\n.swiper-slide img {\n  max-height: 50%;\n  max-width: 80%;\n  margin: 60px 0 40px;\n  pointer-events: none;\n}\n\nb {\n  font-weight: 500;\n}\n\np {\n  padding: 0 20px;\n  font-size: 14px;\n  line-height: 1.5;\n  color: #9d9d9d;\n}\n\np b {\n  color: var(--ion-text-color, #000000);\n}\n\n.bg_one {\n  background-size: cover;\n}\n\n.bg_two {\n  background-size: cover;\n}\n\n.bg_three {\n  background-size: cover;\n}\n\n.caseone {\n  position: absolute;\n  bottom: 80px;\n  background-color: #fff;\n  width: 80%;\n  right: 0;\n  border-top-left-radius: 60px;\n  padding-bottom: 60px;\n  z-index: 2;\n}\n\n.caseone h2 {\n  color: #ed1b25;\n}\n\n.caseone a {\n  color: #9d9d9d;\n  text-decoration: none;\n}\n\n.casetwo {\n  position: absolute;\n  bottom: 80px;\n  background-color: #fff;\n  width: 100%;\n  right: 0;\n  padding-bottom: 60px;\n}\n\n.casetwo h2 {\n  color: #ed1b25;\n}\n\n.casetwo a {\n  color: #9d9d9d;\n  text-decoration: none;\n}\n\n.casethree {\n  position: absolute;\n  bottom: 80px;\n  background-color: #fff;\n  width: 80%;\n  left: 0;\n  border-bottom-right-radius: 60px;\n  padding-bottom: 60px;\n  z-index: 2;\n}\n\n.casethree h2 {\n  color: #ed1b25;\n}\n\n.casethree a {\n  color: #9d9d9d;\n  text-decoration: none;\n}\n\n.swiper-pagination {\n  bottom: 17% !important;\n}\n\n.wel-bg {\n  position: absolute;\n  bottom: 50px;\n  background-color: #F1363D;\n  width: 50%;\n  left: 57px;\n  z-index: 1;\n  border-top-left-radius: 20px;\n  padding-bottom: 90px;\n  border-bottom-right-radius: 20px;\n}\n\n.rent-bg {\n  position: absolute;\n  bottom: 305px;\n  background-color: #F1363D;\n  width: 50%;\n  right: 60px;\n  z-index: 1;\n  border-top-left-radius: 20px;\n  padding-bottom: 90px;\n  border-bottom-right-radius: 20px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvaW50cm8vaW50cm8ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsWUFBWTtFQUNaLG1DQUEyQjtFQUMzQiw0QkFBb0I7QUFDdEI7O0FBRUE7RUFDRSxjQUFjO0FBQ2hCOztBQUVBO0VBQ0Usa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsZUFBZTtFQUNmLGNBQWM7RUFDZCxtQkFBbUI7RUFDbkIsb0JBQW9CO0FBQ3RCOztBQUVBO0VBQ0UsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsZUFBZTtFQUNmLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsY0FBYztBQUNoQjs7QUFFQTtFQUNFLHFDQUFxQztBQUN2Qzs7QUFFQTtFQUdFLHNCQUFzQjtBQUN4Qjs7QUFDQTtFQUlFLHNCQUFzQjtBQUN4Qjs7QUFDQTtFQUdFLHNCQUFzQjtBQUV4Qjs7QUFBQTtFQUNFLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osc0JBQXNCO0VBQ3RCLFVBQVU7RUFDVixRQUFRO0VBQ1IsNEJBQTRCO0VBQzVCLG9CQUFvQjtFQUNwQixVQUFVO0FBR1o7O0FBWEE7RUFVSSxjQUFjO0FBS2xCOztBQWZBO0VBYUksY0FBYztFQUNkLHFCQUFxQjtBQU16Qjs7QUFGQTtFQUNFLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osc0JBQXNCO0VBQ3RCLFdBQVc7RUFDWCxRQUFRO0VBQ1Isb0JBQW9CO0FBS3RCOztBQVhBO0VBU0ksY0FBYztBQU1sQjs7QUFmQTtFQVlJLGNBQWM7RUFDZCxxQkFBcUI7QUFPekI7O0FBSEE7RUFDRSxrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLHNCQUFzQjtFQUN0QixVQUFVO0VBQ1YsT0FBTztFQUNQLGdDQUFnQztFQUNoQyxvQkFBb0I7RUFDcEIsVUFBVTtBQU1aOztBQWRBO0VBVUksY0FBYztBQVFsQjs7QUFsQkE7RUFhSSxjQUFjO0VBQ2QscUJBQXFCO0FBU3pCOztBQUxBO0VBQ0Usc0JBQXNCO0FBUXhCOztBQU5BO0VBQ0Usa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWix5QkFBeUI7RUFDdkIsVUFBVTtFQUNWLFVBQVU7RUFDVixVQUFVO0VBQ1YsNEJBQTRCO0VBQzVCLG9CQUFvQjtFQUNwQixnQ0FBZ0M7QUFTcEM7O0FBUEE7RUFDRSxrQkFBa0I7RUFDaEIsYUFBYTtFQUNiLHlCQUEwQjtFQUMxQixVQUFVO0VBQ1YsV0FBVztFQUNYLFVBQVU7RUFDViw0QkFBNEI7RUFDNUIsb0JBQW9CO0VBQ3BCLGdDQUFnQztBQVVwQyIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2ludHJvL2ludHJvLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1zbGlkZXMge1xyXG4gIGhlaWdodDogMTAwJTtcclxuICAtLWJ1bGxldC1iYWNrZ3JvdW5kLWFjdGl2ZTogI2VkMWIyNTtcclxuICAtLWJ1bGxldC1iYWNrZ3JvdW5kOiAjZjAzYTQyO1xyXG59XHJcblxyXG4uc3dpcGVyLXNsaWRlIHtcclxuICBkaXNwbGF5OiBibG9jaztcclxufVxyXG5cclxuLnN3aXBlci1zbGlkZSBoMiB7XHJcbiAgbWFyZ2luLXRvcDogMi44cmVtO1xyXG59XHJcblxyXG4uc3dpcGVyLXNsaWRlIGltZyB7XHJcbiAgbWF4LWhlaWdodDogNTAlO1xyXG4gIG1heC13aWR0aDogODAlO1xyXG4gIG1hcmdpbjogNjBweCAwIDQwcHg7XHJcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XHJcbn1cclxuXHJcbmIge1xyXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbn1cclxuXHJcbnAge1xyXG4gIHBhZGRpbmc6IDAgMjBweDtcclxuICBmb250LXNpemU6IDE0cHg7XHJcbiAgbGluZS1oZWlnaHQ6IDEuNTtcclxuICBjb2xvcjogIzlkOWQ5ZDtcclxufVxyXG5cclxucCBiIHtcclxuICBjb2xvcjogdmFyKC0taW9uLXRleHQtY29sb3IsICMwMDAwMDApO1xyXG59XHJcblxyXG4uYmdfb25lIHtcclxuICAtd2Via2l0LWJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgLW1vei1iYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbn1cclxuLmJnX3R3byB7XHJcbiAgXHJcbiAgLXdlYmtpdC1iYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gIC1tb3otYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG59XHJcbi5iZ190aHJlZSB7XHJcbiAgLXdlYmtpdC1iYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gIC1tb3otYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG59XHJcbi5jYXNlb25lIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgYm90dG9tOiA4MHB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgd2lkdGg6IDgwJTtcclxuICByaWdodDogMDtcclxuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiA2MHB4O1xyXG4gIHBhZGRpbmctYm90dG9tOiA2MHB4O1xyXG4gIHotaW5kZXg6IDI7XHJcbiAgaDIge1xyXG4gICAgY29sb3I6ICNlZDFiMjU7XHJcbiAgfVxyXG4gIGEge1xyXG4gICAgY29sb3I6ICM5ZDlkOWQ7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgfVxyXG59XHJcblxyXG4uY2FzZXR3byB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGJvdHRvbTogODBweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIHJpZ2h0OiAwO1xyXG4gIHBhZGRpbmctYm90dG9tOiA2MHB4O1xyXG5cclxuICBoMiB7XHJcbiAgICBjb2xvcjogI2VkMWIyNTtcclxuICB9XHJcbiAgYSB7XHJcbiAgICBjb2xvcjogIzlkOWQ5ZDtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICB9XHJcbn1cclxuXHJcbi5jYXNldGhyZWUge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBib3R0b206IDgwcHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICB3aWR0aDogODAlO1xyXG4gIGxlZnQ6IDA7XHJcbiAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDYwcHg7XHJcbiAgcGFkZGluZy1ib3R0b206IDYwcHg7XHJcbiAgei1pbmRleDogMjtcclxuICBoMiB7XHJcbiAgICBjb2xvcjogI2VkMWIyNTtcclxuICB9XHJcbiAgYSB7XHJcbiAgICBjb2xvcjogIzlkOWQ5ZDtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICB9XHJcbn1cclxuXHJcbi5zd2lwZXItcGFnaW5hdGlvbiB7XHJcbiAgYm90dG9tOiAxNyUgIWltcG9ydGFudDtcclxufVxyXG4ud2VsLWJne1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBib3R0b206IDUwcHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI0YxMzYzRDtcclxuICAgIHdpZHRoOiA1MCU7XHJcbiAgICBsZWZ0OiA1N3B4O1xyXG4gICAgei1pbmRleDogMTtcclxuICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDIwcHg7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogOTBweDtcclxuICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAyMHB4O1xyXG59XHJcbi5yZW50LWJne1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGJvdHRvbTogMzA1cHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAgI0YxMzYzRDtcclxuICAgIHdpZHRoOiA1MCU7XHJcbiAgICByaWdodDogNjBweDtcclxuICAgIHotaW5kZXg6IDE7XHJcbiAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAyMHB4O1xyXG4gICAgcGFkZGluZy1ib3R0b206IDkwcHg7XHJcbiAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMjBweDtcclxufVxyXG5cclxuIl19 */";
      /***/
    },

    /***/
    "./src/app/pages/intro/intro.page.ts":
    /*!*******************************************!*\
      !*** ./src/app/pages/intro/intro.page.ts ***!
      \*******************************************/

    /*! exports provided: IntroPage */

    /***/
    function srcAppPagesIntroIntroPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "IntroPage", function () {
        return IntroPage;
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

      var IntroPage = /*#__PURE__*/function () {
        function IntroPage(router) {
          _classCallCheck(this, IntroPage);

          this.router = router;
        }

        _createClass(IntroPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "skip",
          value: function skip() {
            this.router.navigate(['tabs/tab1']);
          }
        }]);

        return IntroPage;
      }();

      IntroPage.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }];
      };

      IntroPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-intro',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./intro.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/intro/intro.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./intro.page.scss */
        "./src/app/pages/intro/intro.page.scss"))["default"]]
      })], IntroPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=pages-intro-intro-module-es5.js.map