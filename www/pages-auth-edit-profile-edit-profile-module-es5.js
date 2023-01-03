(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-auth-edit-profile-edit-profile-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/auth/edit-profile/edit-profile.page.html":
    /*!******************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/auth/edit-profile/edit-profile.page.html ***!
      \******************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppPagesAuthEditProfileEditProfilePageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-title>Edit Profile</ion-title>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button color=\"unit-btn\" text=\"\" icon=\"chevron-back-outline\"></ion-back-button>\r\n    </ion-buttons>\r\n  </ion-toolbar>\r\n</ion-header>\r\n<ion-content>\r\n  <div class=\"ion-padding container\">\r\n    <img  class=\"circle-pic\" src=\"{{image}}\" />  \r\n   <span class=\"btn\" (click)=\"getImages()\">\r\n    <img src=\"../../../../assets/imgs/feather-edit.png\"/>\r\n   </span>\r\n  </div>\r\n  <div class=\"ion-padding\">\r\n    <form [formGroup]=\"editProfile\">\r\n      <ion-list>\r\n        <ion-row>\r\n          <ion-item class=\"list\" lines=\"none\">\r\n            <ion-label position=\"stacked\" class=\"edit-text\">\r\n              First Name\r\n            </ion-label>\r\n            <ion-input type=\"text\" formControlName=\"firstName\"></ion-input>\r\n          </ion-item>\r\n        </ion-row>\r\n        <ion-row>\r\n          <ion-item class=\"list\" lines=\"none\">\r\n            <ion-label position=\"stacked\" class=\"edit-text\">\r\n              First Name\r\n            </ion-label>\r\n            <ion-input type=\"text\" formControlName=\"lastName\"></ion-input>\r\n          </ion-item>\r\n        </ion-row>\r\n        <ion-row>\r\n          <ion-item class=\"list\" lines=\"none\">\r\n            <ion-label position=\"stacked\" class=\"edit-text\">\r\n              About Me\r\n            </ion-label>\r\n            <ion-input type=\"text\" formControlName=\"description\"></ion-input>\r\n          </ion-item>\r\n        </ion-row>\r\n      </ion-list>\r\n    </form>\r\n  </div>\r\n</ion-content>\r\n<ion-footer class=\"ion-no-border\">\r\n  <ion-toolbar>\r\n    <div class=\"ion-padding\">\r\n      <ion-button color=\"unit-btn\" expand=\"block\" class=\"shadow\" [disabled]=\"!editProfile.valid\"\r\n        (click)=\"updateProfile()\">Update Profile</ion-button>\r\n    </div>\r\n  </ion-toolbar>\r\n</ion-footer>";
      /***/
    },

    /***/
    "./src/app/pages/auth/edit-profile/edit-profile-routing.module.ts":
    /*!************************************************************************!*\
      !*** ./src/app/pages/auth/edit-profile/edit-profile-routing.module.ts ***!
      \************************************************************************/

    /*! exports provided: EditProfilePageRoutingModule */

    /***/
    function srcAppPagesAuthEditProfileEditProfileRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "EditProfilePageRoutingModule", function () {
        return EditProfilePageRoutingModule;
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


      var _edit_profile_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./edit-profile.page */
      "./src/app/pages/auth/edit-profile/edit-profile.page.ts");

      var routes = [{
        path: '',
        component: _edit_profile_page__WEBPACK_IMPORTED_MODULE_3__["EditProfilePage"]
      }];

      var EditProfilePageRoutingModule = function EditProfilePageRoutingModule() {
        _classCallCheck(this, EditProfilePageRoutingModule);
      };

      EditProfilePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], EditProfilePageRoutingModule);
      /***/
    },

    /***/
    "./src/app/pages/auth/edit-profile/edit-profile.module.ts":
    /*!****************************************************************!*\
      !*** ./src/app/pages/auth/edit-profile/edit-profile.module.ts ***!
      \****************************************************************/

    /*! exports provided: EditProfilePageModule */

    /***/
    function srcAppPagesAuthEditProfileEditProfileModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "EditProfilePageModule", function () {
        return EditProfilePageModule;
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


      var _edit_profile_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./edit-profile-routing.module */
      "./src/app/pages/auth/edit-profile/edit-profile-routing.module.ts");
      /* harmony import */


      var _edit_profile_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./edit-profile.page */
      "./src/app/pages/auth/edit-profile/edit-profile.page.ts");

      var EditProfilePageModule = function EditProfilePageModule() {
        _classCallCheck(this, EditProfilePageModule);
      };

      EditProfilePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _edit_profile_routing_module__WEBPACK_IMPORTED_MODULE_5__["EditProfilePageRoutingModule"]],
        declarations: [_edit_profile_page__WEBPACK_IMPORTED_MODULE_6__["EditProfilePage"]],
        providers: []
      })], EditProfilePageModule);
      /***/
    },

    /***/
    "./src/app/pages/auth/edit-profile/edit-profile.page.scss":
    /*!****************************************************************!*\
      !*** ./src/app/pages/auth/edit-profile/edit-profile.page.scss ***!
      \****************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppPagesAuthEditProfileEditProfilePageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".list {\n  width: 100%;\n  padding-bottom: 15px;\n  padding-right: 20px;\n}\n\n.circle-pic {\n  width: 150px;\n  height: 150px;\n  border-radius: 50%;\n  display: block;\n  margin-left: auto;\n  -o-object-fit: cover;\n  object-fit: cover;\n  margin-right: auto;\n  border: 1px solid #cacaca;\n}\n\n.container {\n  position: relative;\n}\n\n.container .btn {\n  position: absolute;\n  top: 76%;\n  left: 65%;\n  transform: translate(-50%, -50%);\n  -ms-transform: translate(-50%, -50%);\n  text-align: center;\n  height: 30px;\n  width: 30px;\n  background-color: #ed1b25;\n  border-radius: 50%;\n  -webkit-border-radius: 50%;\n  display: inline-block;\n  padding: 6px;\n}\n\n.edit-text {\n  font-size: 17px;\n  color: \"dark\";\n  font-family: \"helveticaneuebold\";\n  margin-bottom: 2px;\n  opacity: 1 !important;\n}\n\nion-button {\n  text-transform: capitalize;\n  height: 44px;\n  font-size: 16px;\n  margin: 0 !important;\n  margin-top: 40px !important;\n  font-family: helveticaneuebold;\n}\n\nion-item ion-input {\n  --placeholder-color: #9b9b9b;\n  --placeholder-opacity: 1;\n  font-family: \"medium\";\n  border: 1px solid #cdcfcf;\n  border-radius: 50px;\n  color: #707070;\n  height: 45px;\n  margin-top: 10px;\n  padding: 23px;\n  padding-left: 18px;\n  padding-left: 18px !important;\n  padding-top: 5px !important;\n  padding-bottom: 5px !important;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvYXV0aC9lZGl0LXByb2ZpbGUvZWRpdC1wcm9maWxlLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFdBQVc7RUFDWCxvQkFBb0I7RUFDcEIsbUJBQW1CO0FBQ3ZCOztBQUVFO0VBQ0UsWUFBWTtFQUNaLGFBQWE7RUFDYixrQkFBa0I7RUFDbEIsY0FBYztFQUNkLGlCQUFpQjtFQUNqQixvQkFBb0I7RUFDcEIsaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQix5QkFBeUI7QUFDN0I7O0FBRUU7RUFDRSxrQkFBa0I7QUFDdEI7O0FBRUU7RUFDRSxrQkFBa0I7RUFDbEIsUUFBUTtFQUNSLFNBQVM7RUFDVCxnQ0FBZ0M7RUFDaEMsb0NBQW9DO0VBQ3BDLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osV0FBVztFQUNYLHlCQUF5QjtFQUN6QixrQkFBa0I7RUFDbEIsMEJBQTBCO0VBQzFCLHFCQUFxQjtFQUNyQixZQUFZO0FBQ2hCOztBQUVFO0VBQ0UsZUFBZTtFQUNmLGFBQWE7RUFDYixnQ0FBZ0M7RUFDaEMsa0JBQWtCO0VBQ2xCLHFCQUFxQjtBQUN6Qjs7QUFDRTtFQUNFLDBCQUEwQjtFQUMxQixZQUFZO0VBQ1osZUFBZTtFQUNmLG9CQUFvQjtFQUNwQiwyQkFBMkI7RUFDM0IsOEJBQThCO0FBRWxDOztBQUFFO0VBRUksNEJBQW9CO0VBQ3BCLHdCQUFzQjtFQUN0QixxQkFBcUI7RUFDckIseUJBQXlCO0VBQ3pCLG1CQUFtQjtFQUNuQixjQUFjO0VBQ2QsWUFBWTtFQUNaLGdCQUFnQjtFQUNoQixhQUFhO0VBQ2Isa0JBQWtCO0VBQ2xCLDZCQUE2QjtFQUM3QiwyQkFBMkI7RUFDM0IsOEJBQThCO0FBRXBDIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvYXV0aC9lZGl0LXByb2ZpbGUvZWRpdC1wcm9maWxlLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5saXN0IHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgcGFkZGluZy1ib3R0b206IDE1cHg7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAyMHB4O1xyXG4gIH1cclxuICBcclxuICAuY2lyY2xlLXBpYyB7XHJcbiAgICB3aWR0aDogMTUwcHg7XHJcbiAgICBoZWlnaHQ6IDE1MHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcclxuICAgIC1vLW9iamVjdC1maXQ6IGNvdmVyO1xyXG4gICAgb2JqZWN0LWZpdDogY292ZXI7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjY2FjYWNhO1xyXG4gIH1cclxuICBcclxuICAuY29udGFpbmVyIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB9XHJcbiAgXHJcbiAgLmNvbnRhaW5lciAuYnRuIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogNzYlO1xyXG4gICAgbGVmdDogNjUlO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XHJcbiAgICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBoZWlnaHQ6IDMwcHg7XHJcbiAgICB3aWR0aDogMzBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNlZDFiMjU7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAtd2Via2l0LWJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIHBhZGRpbmc6IDZweDtcclxuICB9XHJcbiAgXHJcbiAgLmVkaXQtdGV4dCB7XHJcbiAgICBmb250LXNpemU6IDE3cHg7XHJcbiAgICBjb2xvcjogXCJkYXJrXCI7XHJcbiAgICBmb250LWZhbWlseTogXCJoZWx2ZXRpY2FuZXVlYm9sZFwiO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMnB4O1xyXG4gICAgb3BhY2l0eTogMSAhaW1wb3J0YW50O1xyXG4gIH1cclxuICBpb24tYnV0dG9uIHtcclxuICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xyXG4gICAgaGVpZ2h0OiA0NHB4O1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgbWFyZ2luOiAwICFpbXBvcnRhbnQ7XHJcbiAgICBtYXJnaW4tdG9wOiA0MHB4ICFpbXBvcnRhbnQ7XHJcbiAgICBmb250LWZhbWlseTogaGVsdmV0aWNhbmV1ZWJvbGQ7XHJcbiAgfVxyXG4gIGlvbi1pdGVtIHtcclxuICAgIGlvbi1pbnB1dCB7XHJcbiAgICAgIC0tcGxhY2Vob2xkZXItY29sb3I6ICM5YjliOWI7XHJcbiAgICAgIC0tcGxhY2Vob2xkZXItb3BhY2l0eTogMTtcclxuICAgICAgZm9udC1mYW1pbHk6IFwibWVkaXVtXCI7XHJcbiAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNjZGNmY2Y7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDUwcHg7XHJcbiAgICAgIGNvbG9yOiAjNzA3MDcwO1xyXG4gICAgICBoZWlnaHQ6IDQ1cHg7XHJcbiAgICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgICAgIHBhZGRpbmc6IDIzcHg7XHJcbiAgICAgIHBhZGRpbmctbGVmdDogMThweDtcclxuICAgICAgcGFkZGluZy1sZWZ0OiAxOHB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgIHBhZGRpbmctdG9wOiA1cHggIWltcG9ydGFudDtcclxuICAgICAgcGFkZGluZy1ib3R0b206IDVweCAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG4gIH1cclxuICAiXX0= */";
      /***/
    },

    /***/
    "./src/app/pages/auth/edit-profile/edit-profile.page.ts":
    /*!**************************************************************!*\
      !*** ./src/app/pages/auth/edit-profile/edit-profile.page.ts ***!
      \**************************************************************/

    /*! exports provided: EditProfilePage */

    /***/
    function srcAppPagesAuthEditProfileEditProfilePageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "EditProfilePage", function () {
        return EditProfilePage;
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


      var _ionic_storage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/storage */
      "./node_modules/@ionic/storage/__ivy_ngcc__/fesm2015/ionic-storage.js");
      /* harmony import */


      var src_app_services_api_service_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/services/api-service.service */
      "./src/app/services/api-service.service.ts");
      /* harmony import */


      var src_app_services_global_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/app/services/global.service */
      "./src/app/services/global.service.ts");
      /* harmony import */


      var src_app_services_loader_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! src/app/services/loader.service */
      "./src/app/services/loader.service.ts");
      /* harmony import */


      var src_app_services_toast_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! src/app/services/toast.service */
      "./src/app/services/toast.service.ts");
      /* harmony import */


      var _config_config__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ../../config/config */
      "./src/app/pages/config/config.ts");
      /* harmony import */


      var _capacitor_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @capacitor/core */
      "./node_modules/@capacitor/core/dist/esm/index.js");

      var Camera = _capacitor_core__WEBPACK_IMPORTED_MODULE_10__["Plugins"].Camera;

      var EditProfilePage = /*#__PURE__*/function () {
        function EditProfilePage(formBuilder, storage, _loader, _apiService, _toast, _global, alertCtrl, zone) {
          _classCallCheck(this, EditProfilePage);

          this.formBuilder = formBuilder;
          this.storage = storage;
          this._loader = _loader;
          this._apiService = _apiService;
          this._toast = _toast;
          this._global = _global;
          this.alertCtrl = alertCtrl;
          this.zone = zone;
          this.url = _config_config__WEBPACK_IMPORTED_MODULE_9__["config"].url;
          this.editProfile = this.formBuilder.group({
            firstName: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            lastName: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            // contact: new FormControl({ value: '', disabled: true }, Validators.nullValidator),
            description: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required)
          });
        }

        _createClass(EditProfilePage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "ionViewWillEnter",
          value: function ionViewWillEnter() {
            this.getUserData();
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
          key: "getUserData",
          value: function getUserData() {
            var _this = this;

            this.storage.get("session").then(function (session) {
              if (session) {
                _this.token = session;

                _this.storage.get("org").then(function (org) {
                  if (org) {
                    _this.orgId = org;
                  }
                });
              }
            });
            this.storage.get('user').then(function (user) {
              if (user) {
                _this.email = user.email;
                _this.firstName = user.firstName;
                _this.lastName = user.lastName;

                if (user.profilePic == null) {
                  _this.image = "/assets/imgs/dummyUser.png";
                  _this.imageResponse = null;
                } else {
                  _this.image = user.profilePic;
                  _this.imageResponse = _this.image;
                }

                _this.editProfile.controls['firstName'].setValue(_this.firstName);

                _this.editProfile.controls['lastName'].setValue(_this.lastName);

                _this.editProfile.controls['description'].setValue('');
              }
            });
          }
        }, {
          key: "getImages",
          value: function getImages() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
              var _this2 = this;

              var options, image, base64, params, url;
              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      options = {
                        quality: 90,
                        allowEditing: false,
                        resultType: _capacitor_core__WEBPACK_IMPORTED_MODULE_10__["CameraResultType"].Base64,
                        height: 128,
                        width: 128
                      };
                      _context2.next = 3;
                      return Camera.getPhoto(options);

                    case 3:
                      image = _context2.sent;

                      if (image.base64String) {
                        base64 = 'data:image/jpeg;base64,' + image.base64String;

                        this._loader.present();

                        params = {
                          auth: {
                            type: 'token',
                            token: this.token,
                            orgId: this.orgId
                          },
                          base64: base64,
                          "public": true
                        };
                        url = this.url + _config_config__WEBPACK_IMPORTED_MODULE_9__["URL"].imageUpload;
                        console.log(url);

                        this._apiService.uploadBase64image(url, params).then(function (response) {
                          _this2._loader.dismiss();

                          if (response.success) {
                            if (response.data && response.data.url) {
                              _this2.zone.run(function () {
                                _this2.image = response.data.url;
                                _this2.imageResponse = response.data.url;

                                _this2.updateProfile();
                              });
                            }
                          } else {
                            _this2.presentAlert({
                              header: "Error",
                              message: response.message,
                              buttons: ["Dismiss"]
                            });
                          }
                        });
                      }

                    case 5:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2, this);
            }));
          }
        }, {
          key: "updateProfile",
          value: function updateProfile() {
            var _this3 = this;

            var params = {
              "auth": {
                "type": "token",
                "token": this.token
              },
              "profile": {
                profilePic: this.imageResponse ? this.imageResponse : this.image,
                firstName: this.editProfile.value.firstName,
                lastName: this.editProfile.value.lastName
              }
            };

            this._apiService.postRequest(this.url + _config_config__WEBPACK_IMPORTED_MODULE_9__["URL"].updateProfile, params).subscribe(function (result) {
              return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this3, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
                var user;
                return regeneratorRuntime.wrap(function _callee3$(_context3) {
                  while (1) {
                    switch (_context3.prev = _context3.next) {
                      case 0:
                        if (result.success) {
                          user = {
                            profile: result.data
                          };
                          this.storage.set("user", user.profile);

                          this._global.sendData(user.profile);

                          this._toast.presentToast(result.message);
                        } else {
                          this.presentAlert({
                            header: "Error",
                            message: result.message,
                            buttons: ["Close"]
                          });
                        }

                      case 1:
                      case "end":
                        return _context3.stop();
                    }
                  }
                }, _callee3, this);
              }));
            }, function (err) {
              _this3.presentAlert({
                header: "Error",
                message: "Unable to process your request. Please try again later",
                buttons: ["Close"]
              });
            });
          }
        }]);

        return EditProfilePage;
      }();

      EditProfilePage.ctorParameters = function () {
        return [{
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
        }, {
          type: _ionic_storage__WEBPACK_IMPORTED_MODULE_4__["Storage"]
        }, {
          type: src_app_services_loader_service__WEBPACK_IMPORTED_MODULE_7__["LoaderService"]
        }, {
          type: src_app_services_api_service_service__WEBPACK_IMPORTED_MODULE_5__["ApiService"]
        }, {
          type: src_app_services_toast_service__WEBPACK_IMPORTED_MODULE_8__["ToastService"]
        }, {
          type: src_app_services_global_service__WEBPACK_IMPORTED_MODULE_6__["GlobalService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]
        }];
      };

      EditProfilePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-edit-profile',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./edit-profile.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/auth/edit-profile/edit-profile.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./edit-profile.page.scss */
        "./src/app/pages/auth/edit-profile/edit-profile.page.scss"))["default"]]
      })], EditProfilePage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=pages-auth-edit-profile-edit-profile-module-es5.js.map