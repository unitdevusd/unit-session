(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-auth-login-login-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/auth/login/login.page.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/auth/login/login.page.html ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header class=\"ion-no-border\">\r\n  <ion-toolbar>\r\n    <ion-buttons>\r\n      <ion-back-button color=\"unit-btn\" text=\"\" icon=\"chevron-back-outline\"></ion-back-button>\r\n    </ion-buttons>\r\n  </ion-toolbar>\r\n</ion-header>\r\n<ion-content fullscreen class=\"ion-padding\">\r\n  <div class=\"logo\">\r\n    <img _ngcontent-cmb-c7=\"\" src=\"../../../../assets/imgs/logo.png\">\r\n  </div>\r\n  <ion-grid fixed style=\"height: 40%;\">\r\n    <ion-row class=\"ion-justify-content-center ion-align-items-center\" style=\"height: 80%;\">\r\n      <ion-col size=\"12\" class=\"ion-text-center\">\r\n        <form class=\"form\" [formGroup]=\"loginForm\" *ngIf=\"!passwordInput\">\r\n          <ion-list class=\"line-input\" mode=\"md\">\r\n            <ion-item mode=\"md\">\r\n\r\n              <div class=\"left-icon\">\r\n                <img src=\"../../../../assets/imgs/awesome-user-edit.png\">\r\n              </div>\r\n              <ion-input class=\"ion-text-left\" id=\"email\" placeholder=\"Email Address\" type=\"email\" formControlName=\"emailId\"></ion-input>\r\n            </ion-item>\r\n          </ion-list>\r\n          <ion-list class=\"line-input\" mode=\"md\">\r\n            <ion-item mode=\"md\">\r\n              <div class=\"left-icon\">\r\n                <img src=\"../../../../assets/imgs/ionic-ios-lock.png\">\r\n              </div>\r\n              <ion-input class=\"ion-text-left\" id=\"pass\" type=\"password\" placeholder=\"Password\" formControlName=\"password\"></ion-input>\r\n            </ion-item>\r\n          </ion-list>\r\n          <ion-grid>\r\n            <ion-row>\r\n              <ion-col size=\"15\" size-lg offset=\"3\" class=\"ion-align-self-end\">\r\n                <p class=\"forgot-pass\">\r\n                  <a routerLink=\"/forgot-password\">Forgot Password?</a>\r\n                </p>\r\n              </ion-col>\r\n            </ion-row>\r\n          </ion-grid>\r\n        </form>\r\n        <ion-button class=\"button-h\" *ngIf=\"!passwordInput\" fill=\"solid\" size=\"default\" shape=\"round\" expand=\"block\"\r\n          color=\"unit-btn\" [disabled]=\"!loginForm.valid\" (click)=\"login()\">\r\n          Login\r\n        </ion-button>\r\n        <p class=\"have\">\r\n          Don't have an account? <br>\r\n          <a routerLink=\"/phone-verification\" class=\"signup-text\"> Sign up </a>\r\n        </p>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-grid>\r\n</ion-content>\r\n");

/***/ }),

/***/ "./src/app/pages/auth/login/login-routing.module.ts":
/*!**********************************************************!*\
  !*** ./src/app/pages/auth/login/login-routing.module.ts ***!
  \**********************************************************/
/*! exports provided: LoginPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageRoutingModule", function() { return LoginPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login.page */ "./src/app/pages/auth/login/login.page.ts");




const routes = [
    {
        path: '',
        component: _login_page__WEBPACK_IMPORTED_MODULE_3__["LoginPage"]
    }
];
let LoginPageRoutingModule = class LoginPageRoutingModule {
};
LoginPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], LoginPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/auth/login/login.module.ts":
/*!**************************************************!*\
  !*** ./src/app/pages/auth/login/login.module.ts ***!
  \**************************************************/
/*! exports provided: LoginPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageModule", function() { return LoginPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _login_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./login-routing.module */ "./src/app/pages/auth/login/login-routing.module.ts");
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./login.page */ "./src/app/pages/auth/login/login.page.ts");







let LoginPageModule = class LoginPageModule {
};
LoginPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _login_routing_module__WEBPACK_IMPORTED_MODULE_5__["LoginPageRoutingModule"]
        ],
        declarations: [_login_page__WEBPACK_IMPORTED_MODULE_6__["LoginPage"]]
    })
], LoginPageModule);



/***/ }),

/***/ "./src/app/pages/auth/login/login.page.scss":
/*!**************************************************!*\
  !*** ./src/app/pages/auth/login/login.page.scss ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".logo {\n  margin: auto;\n  width: 25%;\n  margin-top: 10%;\n}\n\nb {\n  font-weight: 500;\n}\n\n.forgot-pass {\n  text-decoration: none;\n  margin-right: 6px;\n  font-size: 13px;\n  font-family: 'medium';\n  color: var(--ion-color-step-600, #60646b);\n}\n\n.forgot-pass a {\n  text-decoration: none;\n}\n\np {\n  padding: 0 40px;\n  font-size: 14px;\n  line-height: 1.5;\n  color: var(--ion-color-step-600, #60646b);\n}\n\nion-label {\n  color: #656565 !important;\n  font-size: 17px !important;\n}\n\nform {\n  margin-top: 15%;\n}\n\n.cancel {\n  margin-right: 5px;\n  font-size: x-large;\n}\n\n.line-input {\n  margin-bottom: 0 !important;\n}\n\n.line-input ion-item {\n  --border-color: transparent !important;\n  --background-activated: white;\n  --background-focused: white;\n  --background-hover: white;\n  --highlight-height: 0;\n  border: 1px solid #cdcfcf;\n  border-radius: 50px;\n  color: #707070;\n  height: 45px;\n}\n\n.line-input ion-item.item-has-focus {\n  border: 1px solid #CDCFCF;\n}\n\n.line-input ion-item ion-label {\n  color: #807e7e !important;\n  font-weight: 300;\n  font-size: 14px !important;\n}\n\n.line-input ion-item ion-icon {\n  color: #807e7e !important;\n  margin-right: 8px !important;\n}\n\nion-input {\n  --placeholder-color: #9B9B9B;\n  --placeholder-opacity: 1;\n  font-family: medium;\n  margin-left: 7px;\n}\n\n.sc-ion-input-md-h {\n  --padding-top: 7px !important;\n}\n\n.sc-ion-input-ios-h {\n  font-size: 14px !important;\n}\n\na {\n  color: #ED1B25;\n}\n\n.signup-text {\n  font-size: 17px;\n  font-family: medium;\n}\n\nion-button {\n  text-transform: capitalize;\n  height: 44px;\n  font-size: 16px;\n  margin: 0 !important;\n  margin-top: 40px !important;\n  font-family: helveticaneuebold;\n}\n\n.have {\n  font-family: medium;\n  color: #8E8E8E;\n  font-size: 17px;\n  line-height: 20px;\n  margin-top: 25px;\n  line-height: 20px;\n}\n\n#email {\n  caret-color: red;\n}\n\n#pass {\n  caret-color: red;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvYXV0aC9sb2dpbi9sb2dpbi5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxZQUFZO0VBQ1osVUFBVTtFQUNWLGVBQWU7QUFDbkI7O0FBRUU7RUFDRSxnQkFBZ0I7QUFDcEI7O0FBQ0U7RUFDRSxxQkFBcUI7RUFDbkIsaUJBQWlCO0VBQ2pCLGVBQWU7RUFDZixxQkFBcUI7RUFDdkIseUNBQXlDO0FBRTdDOztBQVBFO0VBT0kscUJBQXFCO0FBSTNCOztBQURFO0VBQ0UsZUFBZTtFQUNmLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIseUNBQXlDO0FBSTdDOztBQURFO0VBQ0UseUJBQXlCO0VBQ3pCLDBCQUEwQjtBQUk5Qjs7QUFGRTtFQUNFLGVBQWU7QUFLbkI7O0FBRkU7RUFDRSxpQkFBaUI7RUFDakIsa0JBQWtCO0FBS3RCOztBQUZFO0VBQ0UsMkJBQTJCO0FBSy9COztBQU5FO0VBR0ksc0NBQWU7RUFDZiw2QkFBdUI7RUFDdkIsMkJBQXFCO0VBQ3JCLHlCQUFtQjtFQUNuQixxQkFBbUI7RUFDbkIseUJBQXlCO0VBQ3pCLG1CQUFtQjtFQUNuQixjQUFjO0VBQ2QsWUFBWTtBQU9sQjs7QUFsQkU7RUFhTSx5QkFBeUI7QUFTakM7O0FBdEJFO0VBaUJNLHlCQUF5QjtFQUN6QixnQkFBZ0I7RUFDaEIsMEJBQTBCO0FBU2xDOztBQTVCRTtFQXVCTSx5QkFBeUI7RUFDekIsNEJBQTRCO0FBU3BDOztBQUxFO0VBQ0UsNEJBQW9CO0VBQ3BCLHdCQUFzQjtFQUN0QixtQkFBbUI7RUFDbkIsZ0JBQWdCO0FBUXBCOztBQU5FO0VBQ0UsNkJBQWM7QUFTbEI7O0FBUEU7RUFDRSwwQkFBMEI7QUFVOUI7O0FBUEU7RUFDQyxjQUFjO0FBVWpCOztBQVBFO0VBQ0UsZUFBZTtFQUNmLG1CQUFtQjtBQVV2Qjs7QUFSRTtFQUNFLDBCQUEwQjtFQUMxQixZQUFZO0VBQ1osZUFBZTtFQUNmLG9CQUFvQjtFQUNwQiwyQkFBMkI7RUFDM0IsOEJBQThCO0FBV2xDOztBQVRFO0VBQ0UsbUJBQW1CO0VBQ25CLGNBQWM7RUFDZCxlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLGdCQUFnQjtFQUNoQixpQkFBaUI7QUFZckI7O0FBVkU7RUFDRSxnQkFBZ0I7QUFhcEI7O0FBWEU7RUFDRSxnQkFBZ0I7QUFjcEIiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9hdXRoL2xvZ2luL2xvZ2luLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5sb2dve1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgd2lkdGg6IDI1JTtcclxuICAgIG1hcmdpbi10b3A6IDEwJTtcclxuICB9XHJcbiAgXHJcbiAgYiB7XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG4gIH1cclxuICAuZm9yZ290LXBhc3Mge1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgICBtYXJnaW4tcmlnaHQ6IDZweDtcclxuICAgICAgZm9udC1zaXplOiAxM3B4O1xyXG4gICAgICBmb250LWZhbWlseTogJ21lZGl1bSc7XHJcbiAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXN0ZXAtNjAwLCAjNjA2NDZiKTtcclxuICAgIGF7XHJcbiAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIH1cclxuICB9XHJcbiAgcCB7XHJcbiAgICBwYWRkaW5nOiAwIDQwcHg7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBsaW5lLWhlaWdodDogMS41O1xyXG4gICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1zdGVwLTYwMCwgIzYwNjQ2Yik7XHJcbiAgfVxyXG4gIFxyXG4gIGlvbi1sYWJlbCB7XHJcbiAgICBjb2xvcjogIzY1NjU2NSAhaW1wb3J0YW50O1xyXG4gICAgZm9udC1zaXplOiAxN3B4ICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG4gIGZvcm0ge1xyXG4gICAgbWFyZ2luLXRvcDogMTUlO1xyXG4gIH1cclxuICBcclxuICAuY2FuY2VsIHtcclxuICAgIG1hcmdpbi1yaWdodDogNXB4O1xyXG4gICAgZm9udC1zaXplOiB4LWxhcmdlO1xyXG4gIH1cclxuICBcclxuICAubGluZS1pbnB1dCB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAwICFpbXBvcnRhbnQ7XHJcbiAgICBpb24taXRlbSB7XHJcbiAgICAgIC0tYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xyXG4gICAgICAtLWJhY2tncm91bmQtYWN0aXZhdGVkOiB3aGl0ZTtcclxuICAgICAgLS1iYWNrZ3JvdW5kLWZvY3VzZWQ6IHdoaXRlO1xyXG4gICAgICAtLWJhY2tncm91bmQtaG92ZXI6IHdoaXRlO1xyXG4gICAgICAtLWhpZ2hsaWdodC1oZWlnaHQ6IDA7XHJcbiAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNjZGNmY2Y7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDUwcHg7XHJcbiAgICAgIGNvbG9yOiAjNzA3MDcwO1xyXG4gICAgICBoZWlnaHQ6IDQ1cHg7XHJcbiAgICAgICYuaXRlbS1oYXMtZm9jdXMge1xyXG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNDRENGQ0Y7XHJcbiAgICAgIH1cclxuICBcclxuICAgICAgaW9uLWxhYmVsIHtcclxuICAgICAgICBjb2xvcjogIzgwN2U3ZSAhaW1wb3J0YW50O1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNHB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgIH1cclxuICBcclxuICAgICAgaW9uLWljb24ge1xyXG4gICAgICAgIGNvbG9yOiAjODA3ZTdlICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiA4cHggIWltcG9ydGFudDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuICBpb24taW5wdXR7XHJcbiAgICAtLXBsYWNlaG9sZGVyLWNvbG9yOiAjOUI5QjlCO1xyXG4gICAgLS1wbGFjZWhvbGRlci1vcGFjaXR5OiAxO1xyXG4gICAgZm9udC1mYW1pbHk6IG1lZGl1bTtcclxuICAgIG1hcmdpbi1sZWZ0OiA3cHg7XHJcbiAgfVxyXG4gIC5zYy1pb24taW5wdXQtbWQtaHtcclxuICAgIC0tcGFkZGluZy10b3A6IDdweCAhaW1wb3J0YW50O1xyXG4gIH1cclxuICAuc2MtaW9uLWlucHV0LWlvcy1oIHtcclxuICAgIGZvbnQtc2l6ZTogMTRweCAhaW1wb3J0YW50O1xyXG4gIH1cclxuICBcclxuICBhe1xyXG4gICBjb2xvcjogI0VEMUIyNTtcclxuICBcclxuICB9XHJcbiAgLnNpZ251cC10ZXh0e1xyXG4gICAgZm9udC1zaXplOiAxN3B4O1xyXG4gICAgZm9udC1mYW1pbHk6IG1lZGl1bTtcclxuICB9XHJcbiAgaW9uLWJ1dHRvbntcclxuICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xyXG4gICAgaGVpZ2h0OiA0NHB4O1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgbWFyZ2luOiAwICFpbXBvcnRhbnQ7XHJcbiAgICBtYXJnaW4tdG9wOiA0MHB4ICFpbXBvcnRhbnQ7XHJcbiAgICBmb250LWZhbWlseTogaGVsdmV0aWNhbmV1ZWJvbGQ7XHJcbiAgfVxyXG4gIC5oYXZle1xyXG4gICAgZm9udC1mYW1pbHk6IG1lZGl1bTtcclxuICAgIGNvbG9yOiAjOEU4RThFO1xyXG4gICAgZm9udC1zaXplOiAxN3B4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDIwcHg7XHJcbiAgICBtYXJnaW4tdG9wOiAyNXB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDIwcHg7XHJcbiAgfVxyXG4gICNlbWFpbHtcclxuICAgIGNhcmV0LWNvbG9yOiByZWQ7XHJcbiAgfVxyXG4gICNwYXNze1xyXG4gICAgY2FyZXQtY29sb3I6IHJlZDtcclxuICB9Il19 */");

/***/ }),

/***/ "./src/app/pages/auth/login/login.page.ts":
/*!************************************************!*\
  !*** ./src/app/pages/auth/login/login.page.ts ***!
  \************************************************/
/*! exports provided: LoginPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPage", function() { return LoginPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var src_app_services_api_service_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/api-service.service */ "./src/app/services/api-service.service.ts");
/* harmony import */ var _config_config__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../config/config */ "./src/app/pages/config/config.ts");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/__ivy_ngcc__/fesm2015/ionic-storage.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var src_app_services_global_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/services/global.service */ "./src/app/services/global.service.ts");
/* harmony import */ var _capacitor_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @capacitor/core */ "./node_modules/@capacitor/core/dist/esm/index.js");










const { Device } = _capacitor_core__WEBPACK_IMPORTED_MODULE_9__["Plugins"];
let LoginPage = class LoginPage {
    constructor(formBuilder, alertCtrl, _apiService, storage, router, _gs, route) {
        this.formBuilder = formBuilder;
        this.alertCtrl = alertCtrl;
        this._apiService = _apiService;
        this.storage = storage;
        this.router = router;
        this._gs = _gs;
        this.route = route;
        this.url = _config_config__WEBPACK_IMPORTED_MODULE_5__["config"].url;
        this.loginUrl = _config_config__WEBPACK_IMPORTED_MODULE_5__["URL"].signIn;
        this.route.queryParams.subscribe((params) => {
            if (params && params.from) {
                this.priviousUrl = params.from;
                console.log(this.priviousUrl);
            }
        });
        this.loginForm = this.formBuilder.group({
            emailId: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern("^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$"),
            ])),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
        });
    }
    ngOnInit() { }
    presentAlert(options) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const alert = yield this.alertCtrl.create({
                header: options.header ? options.header : 'Alert',
                message: options.message ? options.message : '',
                buttons: options.buttons
            });
            yield alert.present();
        });
    }
    login() {
        this.getLoginResponse();
    }
    getLoginResponse() {
        console.log(this.url + this.loginUrl);
        if (this.loginForm.value) {
            this.loginForm.value.permissions = true;
        }
        this._apiService
            .postRequest(this.url + this.loginUrl, this.loginForm.value)
            .subscribe((res) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (res.success) {
                this.settings(res.data);
                this.navigate();
                this.loginForm.reset();
            }
            else {
                this.presentAlert({ header: "Error", message: res.message, buttons: ["Dismiss"] });
            }
        }), (err) => {
            this.presentAlert({ header: "Error", message: "Unable to process your request. Please try again later", buttons: ["Dismiss"] });
        });
    }
    navigate() {
        if (this.priviousUrl == 'place-detail') {
            let navigationExtras = {
                queryParams: {
                    from: "place-detail"
                },
            };
            this.router.navigate([this.priviousUrl], navigationExtras);
        }
        else {
            this.router.navigate([this.priviousUrl]);
        }
        if (!this.priviousUrl) {
            this.router.navigate(["tabs/tab1"]);
        }
    }
    settings(data) {
        let org = data.orgs.filter(x => x.name == "Unit" || x.name == 'unit');
        if (org.length) {
            this.storage.set("permissions", org[0].permissions);
        }
        this.storage.set("session", data.token);
        this.storage.set("user", data.user.profile);
        this.storage.set("loggedUserId", data.user._id);
        this._gs.updateTabs({
            orgId: org[0].id,
            token: data.token,
            permissions: org[0].permissions
        });
        this._gs.sendData(data.user.profile);
        this.storage.set("org", org[0].id);
        this.attachFCM(data.token);
    }
    attachFCM(token) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const info = yield Device.getInfo();
            this.storage.get('fcm_token').then((fcmToken) => {
                if (fcmToken) {
                    const params = {
                        deviceId: info.uuid,
                        token: token,
                        deviceType: info.operatingSystem,
                        enableNotifications: true,
                        firebaseToken: fcmToken
                    };
                    this._apiService.postRequest(this.url + _config_config__WEBPACK_IMPORTED_MODULE_5__["UNITURL"].addToken, params).subscribe((result) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                        console.log(result);
                    }), (error) => {
                        console.log('error', error);
                    });
                }
            });
        });
    }
};
LoginPage.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"] },
    { type: src_app_services_api_service_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"] },
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_6__["Storage"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"] },
    { type: src_app_services_global_service__WEBPACK_IMPORTED_MODULE_8__["GlobalService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"] }
];
LoginPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-login',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./login.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/auth/login/login.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./login.page.scss */ "./src/app/pages/auth/login/login.page.scss")).default]
    })
], LoginPage);



/***/ })

}]);
//# sourceMappingURL=pages-auth-login-login-module-es2015.js.map