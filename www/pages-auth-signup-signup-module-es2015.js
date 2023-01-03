(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-auth-signup-signup-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/auth/signup/signup.page.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/auth/signup/signup.page.html ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content>\r\n  <div class=\"logo\">\r\n    <img src=\"../../../../assets/imgs/logo.png\" />\r\n  </div>\r\n  <div class=\"content\">\r\n    <form [formGroup]=\"signupForm\">\r\n      <ion-list class=\"line-input\" mode=\"md\">\r\n        <ion-item mode=\"md\">\r\n          <div class=\"left-icon\">\r\n            <img src=\"../../../../assets/imgs/awesome-user-edit.png\">\r\n          </div>\r\n          <ion-input  type=\"Text\" placeholder=\"First Name\" formControlName=\"firstName\"></ion-input>\r\n        </ion-item>\r\n      </ion-list>\r\n      <ion-list class=\"line-input\" mode=\"md\">\r\n        <ion-item mode=\"md\">\r\n          <div class=\"left-icon\">\r\n            <img src=\"../../../../assets/imgs/awesome-user-edit.png\">\r\n          </div>\r\n          <ion-input  type=\"Text\" placeholder=\"Last Name\" formControlName=\"lastName\"></ion-input>\r\n        </ion-item>\r\n      </ion-list>\r\n      <ion-list class=\"line-input\" mode=\"md\">\r\n        <ion-item mode=\"md\">\r\n          <div class=\"left-icon\">\r\n            <img src=\"../../../../assets/imgs/zocial-email.png\r\n            \">\r\n          </div>\r\n          <ion-input  placeholder=\"Email\" type=\"Email\" formControlName=\"email\"></ion-input>\r\n        </ion-item>\r\n      </ion-list>\r\n      <div class=\"error-container\"\r\n        *ngIf=\"signupForm.get('email').invalid && (signupForm.get('email').dirty || signupForm.get('email').touched)\">\r\n        <span style=\"color: red;\r\n          font-size: smaller;\r\n          margin: 10px;\" *ngIf=\"signupForm.get('email').errors.pattern\">\r\n          <ion-icon style=\"color: red;\r\n           padding-top: 5px;;\" name=\"information-circle-outline\"></ion-icon>\r\n          Please enter a valid email address\r\n        </span>\r\n      </div>\r\n      <ion-list class=\"line-input\" mode=\"md\">\r\n        <ion-item mode=\"md\">\r\n          <div class=\"left-icon\">\r\n            <img src=\"../../../../assets/imgs/ionic-ios-lock.png\">\r\n          </div>\r\n          <ion-input  type=\"password\" placeholder=\"Password\" formControlName=\"password\">\r\n          </ion-input>\r\n        </ion-item>\r\n      </ion-list>\r\n      <ion-list class=\"line-input\" mode=\"md\">\r\n        <ion-item mode=\"md\">\r\n          <div class=\"left-icon\">\r\n            <img src=\"../../../../assets/imgs/ionic-ios-lock.png\">\r\n          </div>\r\n          <ion-input  type=\"password\" placeholder=\"Confirm Password\" formControlName=\"password\">\r\n          </ion-input>\r\n        </ion-item>\r\n      </ion-list>\r\n      <ion-button style=\"margin-top: 10% !important;\" *ngIf=\"!passwordInput\" fill=\"solid\" size=\"default\" shape=\"round\" expand=\"block\" color=\"unit-btn\"\r\n        [disabled]=\"!signupForm.valid\" (click)=\"signUp()\">\r\n        Sign up\r\n      </ion-button>\r\n      <p>\r\n        Already have an account? <br>\r\n        <a routerLink=\"/login\" class=\"login-text\"> Login </a>\r\n      </p>\r\n    </form>\r\n  </div>\r\n</ion-content>\r\n");

/***/ }),

/***/ "./src/app/pages/auth/signup/signup-routing.module.ts":
/*!************************************************************!*\
  !*** ./src/app/pages/auth/signup/signup-routing.module.ts ***!
  \************************************************************/
/*! exports provided: SignupPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupPageRoutingModule", function() { return SignupPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _signup_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./signup.page */ "./src/app/pages/auth/signup/signup.page.ts");




const routes = [
    {
        path: '',
        component: _signup_page__WEBPACK_IMPORTED_MODULE_3__["SignupPage"]
    }
];
let SignupPageRoutingModule = class SignupPageRoutingModule {
};
SignupPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], SignupPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/auth/signup/signup.module.ts":
/*!****************************************************!*\
  !*** ./src/app/pages/auth/signup/signup.module.ts ***!
  \****************************************************/
/*! exports provided: SignupPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupPageModule", function() { return SignupPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _signup_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./signup-routing.module */ "./src/app/pages/auth/signup/signup-routing.module.ts");
/* harmony import */ var _signup_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./signup.page */ "./src/app/pages/auth/signup/signup.page.ts");







let SignupPageModule = class SignupPageModule {
};
SignupPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _signup_routing_module__WEBPACK_IMPORTED_MODULE_5__["SignupPageRoutingModule"]
        ],
        declarations: [_signup_page__WEBPACK_IMPORTED_MODULE_6__["SignupPage"]]
    })
], SignupPageModule);



/***/ }),

/***/ "./src/app/pages/auth/signup/signup.page.scss":
/*!****************************************************!*\
  !*** ./src/app/pages/auth/signup/signup.page.scss ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (":host {\n  --min-height: 42px !important;\n}\n\nion-content {\n  --ion-background-color: transparent;\n}\n\n.content {\n  background-color: \"secondary\";\n  height: 100%;\n  border-radius: 20px;\n}\n\nform {\n  margin-top: 10%;\n}\n\nion-input {\n  --placeholder-color: #9B9B9B;\n  --placeholder-opacity: 1;\n  font-family: medium !important;\n  margin-left: 7px;\n}\n\n.line-input {\n  margin-bottom: 0 !important;\n  margin-left: 30px;\n  margin-right: 30px;\n}\n\n.line-input ion-item.item-has-focus {\n  border: 1px solid var(--ion-color-primary);\n}\n\n.line-input ion-item ion-label {\n  color: #807e7e !important;\n  font-weight: 600;\n  font-size: 14px !important;\n}\n\nion-select ion-select-option {\n  font-size: 15px;\n  width: 100% !important;\n}\n\n.logo {\n  margin: 20px auto 0px;\n  width: 20%;\n}\n\nb {\n  font-weight: 500;\n}\n\np {\n  font-family: medium;\n  color: #8E8E8E;\n  font-size: 17px;\n  margin-top: 25px;\n  line-height: 20px;\n  text-align: center;\n}\n\nion-label {\n  color: #656565 !important;\n  font-size: 17px !important;\n}\n\n.login-text {\n  font-size: 17px;\n  font-family: medium;\n}\n\n.cancel {\n  margin-right: 5px;\n  font-size: x-large;\n}\n\n.sc-ion-input-ios-h {\n  font-size: 14px !important;\n}\n\na {\n  color: #ed1b25;\n}\n\nion-button {\n  text-transform: capitalize;\n  height: 44px;\n  font-size: 16px;\n  margin: 0 !important;\n  margin-left: 30px !important;\n  margin-right: 30px !important;\n  margin-top: 40px !important;\n  font-family: helveticaneuebold;\n}\n\nion-item {\n  --border-color: transparent !important;\n  --background-activated: white;\n  --background-focused: white;\n  --background-hover: white;\n  --highlight-height: 0;\n  border: 1px solid #cdcfcf;\n  border-radius: 50px;\n  color: #707070;\n  height: 45px;\n}\n\nion-item ion-label {\n  color: #807e7e !important;\n  font-weight: 300;\n  font-size: 14px !important;\n}\n\nion-item ion-icon {\n  -webkit-margin-end: 0px !important;\n          margin-inline-end: 0px !important;\n  font-size: 20px !important;\n}\n\n.sc-ion-input-md-h {\n  --padding-top: 7px !important;\n}\n\n.date {\n  color: #9B9B9B;\n  font-family: medium;\n  padding-left: 7px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvYXV0aC9zaWdudXAvc2lnbnVwLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLDZCQUFhO0FBQ2pCOztBQUNFO0VBQ0UsbUNBQXVCO0FBRTNCOztBQUNFO0VBQ0UsNkJBQTZCO0VBQzdCLFlBQVk7RUFDWixtQkFBbUI7QUFFdkI7O0FBQUU7RUFDRSxlQUFlO0FBR25COztBQURFO0VBQ0UsNEJBQW9CO0VBQ3BCLHdCQUFzQjtFQUN0Qiw4QkFBOEI7RUFDOUIsZ0JBQWdCO0FBSXBCOztBQUZFO0VBQ0UsMkJBQTJCO0VBQzNCLGlCQUFpQjtFQUNqQixrQkFBa0I7QUFLdEI7O0FBUkU7RUFPTSwwQ0FBMEM7QUFLbEQ7O0FBWkU7RUFVTSx5QkFBeUI7RUFDekIsZ0JBQWdCO0VBQ2hCLDBCQUEwQjtBQU1sQzs7QUFERTtFQUVJLGVBQWU7RUFDZixzQkFBc0I7QUFHNUI7O0FBQ0U7RUFDRSxxQkFBcUI7RUFDckIsVUFBVTtBQUVkOztBQUNFO0VBQ0UsZ0JBQWdCO0FBRXBCOztBQUNFO0VBQ0UsbUJBQW1CO0VBQ25CLGNBQWM7RUFDZCxlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtFQUNqQixrQkFBa0I7QUFFdEI7O0FBQ0U7RUFDRSx5QkFBeUI7RUFDekIsMEJBQTBCO0FBRTlCOztBQUFFO0VBQ0UsZUFBZTtFQUNmLG1CQUFtQjtBQUd2Qjs7QUFERTtFQUNFLGlCQUFpQjtFQUNqQixrQkFBa0I7QUFJdEI7O0FBREU7RUFDRSwwQkFBMEI7QUFJOUI7O0FBREU7RUFDRSxjQUFjO0FBSWxCOztBQURFO0VBQ0UsMEJBQTBCO0VBQzFCLFlBQVk7RUFDWixlQUFlO0VBQ2Ysb0JBQW9CO0VBQ3BCLDRCQUE0QjtFQUM1Qiw2QkFBNkI7RUFDN0IsMkJBQTJCO0VBQzNCLDhCQUE4QjtBQUlsQzs7QUFERTtFQUNFLHNDQUFlO0VBQ2IsNkJBQXVCO0VBQ3ZCLDJCQUFxQjtFQUNyQix5QkFBbUI7RUFDbkIscUJBQW1CO0VBQ25CLHlCQUF5QjtFQUN6QixtQkFBbUI7RUFDbkIsY0FBYztFQUNkLFlBQVk7QUFJbEI7O0FBYkU7RUFZRSx5QkFBeUI7RUFDekIsZ0JBQWdCO0VBQ2hCLDBCQUEwQjtBQUs5Qjs7QUFuQkU7RUFpQkksa0NBQWlDO1VBQWpDLGlDQUFpQztFQUNqQywwQkFBMEI7QUFNaEM7O0FBSEU7RUFDRSw2QkFBYztBQU1sQjs7QUFKRTtFQUNFLGNBQWM7RUFDZCxtQkFBbUI7RUFDbkIsaUJBQWlCO0FBT3JCIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvYXV0aC9zaWdudXAvc2lnbnVwLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcclxuICAgIC0tbWluLWhlaWdodDogNDJweCAhaW1wb3J0YW50O1xyXG4gIH1cclxuICBpb24tY29udGVudCB7XHJcbiAgICAtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICB9XHJcbiAgXHJcbiAgLmNvbnRlbnQge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogXCJzZWNvbmRhcnlcIjtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbiAgfVxyXG4gIGZvcm0ge1xyXG4gICAgbWFyZ2luLXRvcDogMTAlO1xyXG4gIH1cclxuICBpb24taW5wdXR7XHJcbiAgICAtLXBsYWNlaG9sZGVyLWNvbG9yOiAjOUI5QjlCO1xyXG4gICAgLS1wbGFjZWhvbGRlci1vcGFjaXR5OiAxO1xyXG4gICAgZm9udC1mYW1pbHk6IG1lZGl1bSAhaW1wb3J0YW50O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDdweDtcclxuICB9XHJcbiAgLmxpbmUtaW5wdXQge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMCAhaW1wb3J0YW50O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDMwcHg7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDMwcHg7XHJcbiAgICBpb24taXRlbSB7XHJcbiAgICBcclxuICAgICAgJi5pdGVtLWhhcy1mb2N1cyB7XHJcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xyXG4gICAgICB9XHJcbiAgICAgIGlvbi1sYWJlbCB7XHJcbiAgICAgICAgY29sb3I6ICM4MDdlN2UgIWltcG9ydGFudDtcclxuICAgICAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTRweCAhaW1wb3J0YW50O1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG4gIFxyXG4gIGlvbi1zZWxlY3Qge1xyXG4gICAgaW9uLXNlbGVjdC1vcHRpb24ge1xyXG4gICAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICAgIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbiAgfVxyXG4gIFxyXG4gIC5sb2dvIHtcclxuICAgIG1hcmdpbjogMjBweCBhdXRvIDBweDtcclxuICAgIHdpZHRoOiAyMCU7XHJcbiAgfVxyXG4gIFxyXG4gIGIge1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICB9XHJcbiAgXHJcbiAgcCB7XHJcbiAgICBmb250LWZhbWlseTogbWVkaXVtO1xyXG4gICAgY29sb3I6ICM4RThFOEU7XHJcbiAgICBmb250LXNpemU6IDE3cHg7XHJcbiAgICBtYXJnaW4tdG9wOiAyNXB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDIwcHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgfVxyXG4gIFxyXG4gIGlvbi1sYWJlbCB7XHJcbiAgICBjb2xvcjogIzY1NjU2NSAhaW1wb3J0YW50O1xyXG4gICAgZm9udC1zaXplOiAxN3B4ICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG4gIC5sb2dpbi10ZXh0e1xyXG4gICAgZm9udC1zaXplOiAxN3B4O1xyXG4gICAgZm9udC1mYW1pbHk6IG1lZGl1bTtcclxuICB9XHJcbiAgLmNhbmNlbCB7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDVweDtcclxuICAgIGZvbnQtc2l6ZTogeC1sYXJnZTtcclxuICB9XHJcbiAgXHJcbiAgLnNjLWlvbi1pbnB1dC1pb3MtaCB7XHJcbiAgICBmb250LXNpemU6IDE0cHggIWltcG9ydGFudDtcclxuICB9XHJcbiAgXHJcbiAgYSB7XHJcbiAgICBjb2xvcjogI2VkMWIyNTtcclxuICB9XHJcbiAgXHJcbiAgaW9uLWJ1dHRvbiB7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcclxuICAgIGhlaWdodDogNDRweDtcclxuICAgIGZvbnQtc2l6ZTogMTZweDsgIFxyXG4gICAgbWFyZ2luOiAwICFpbXBvcnRhbnQ7ICBcclxuICAgIG1hcmdpbi1sZWZ0OiAzMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDMwcHggIWltcG9ydGFudDtcclxuICAgIG1hcmdpbi10b3A6IDQwcHggIWltcG9ydGFudDtcclxuICAgIGZvbnQtZmFtaWx5OiBoZWx2ZXRpY2FuZXVlYm9sZDtcclxuICB9XHJcbiAgXHJcbiAgaW9uLWl0ZW0ge1xyXG4gICAgLS1ib3JkZXItY29sb3I6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XHJcbiAgICAgIC0tYmFja2dyb3VuZC1hY3RpdmF0ZWQ6IHdoaXRlO1xyXG4gICAgICAtLWJhY2tncm91bmQtZm9jdXNlZDogd2hpdGU7XHJcbiAgICAgIC0tYmFja2dyb3VuZC1ob3Zlcjogd2hpdGU7XHJcbiAgICAgIC0taGlnaGxpZ2h0LWhlaWdodDogMDtcclxuICAgICAgYm9yZGVyOiAxcHggc29saWQgI2NkY2ZjZjtcclxuICAgICAgYm9yZGVyLXJhZGl1czogNTBweDtcclxuICAgICAgY29sb3I6ICM3MDcwNzA7XHJcbiAgICAgIGhlaWdodDogNDVweDtcclxuICAgXHJcbiAgIGlvbi1sYWJlbCB7XHJcbiAgICBjb2xvcjogIzgwN2U3ZSAhaW1wb3J0YW50O1xyXG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcclxuICAgIGZvbnQtc2l6ZTogMTRweCAhaW1wb3J0YW50O1xyXG4gIH1cclxuICAgIGlvbi1pY29uIHtcclxuICAgICAgbWFyZ2luLWlubGluZS1lbmQ6IDBweCAhaW1wb3J0YW50O1xyXG4gICAgICBmb250LXNpemU6IDIwcHggIWltcG9ydGFudDtcclxuICAgIH1cclxuICB9XHJcbiAgLnNjLWlvbi1pbnB1dC1tZC1oe1xyXG4gICAgLS1wYWRkaW5nLXRvcDogN3B4ICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG4gIC5kYXRle1xyXG4gICAgY29sb3I6ICM5QjlCOUI7XHJcbiAgICBmb250LWZhbWlseTogbWVkaXVtO1xyXG4gICAgcGFkZGluZy1sZWZ0OiA3cHg7XHJcbiAgfSJdfQ== */");

/***/ }),

/***/ "./src/app/pages/auth/signup/signup.page.ts":
/*!**************************************************!*\
  !*** ./src/app/pages/auth/signup/signup.page.ts ***!
  \**************************************************/
/*! exports provided: SignupPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupPage", function() { return SignupPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _config_config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../config/config */ "./src/app/pages/config/config.ts");





let SignupPage = class SignupPage {
    constructor(formBuilder, router, route) {
        this.formBuilder = formBuilder;
        this.router = router;
        this.route = route;
        this.url = _config_config__WEBPACK_IMPORTED_MODULE_4__["config"].url;
        this.signupForm = this.formBuilder.group({
            firstName: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            lastName: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            phoneno: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].nullValidator),
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
            ])),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(6),
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required
            ])),
        });
        this.route.queryParams.subscribe(params => {
            if (params && params.special) {
                this.contact = JSON.parse(params.special);
                this.signupForm.controls['phoneno'].setValue(this.contact);
            }
        });
    }
    ngOnInit() { }
    signUp() {
        this.navigateCheckr(this.signupForm.value);
    }
    navigateCheckr(userMeta) {
        let navigationExtras = {
            queryParams: {
                special: JSON.stringify(userMeta)
            }
        };
        this.router.navigate(['select-role'], navigationExtras);
    }
};
SignupPage.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }
];
SignupPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-signup',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./signup.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/auth/signup/signup.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./signup.page.scss */ "./src/app/pages/auth/signup/signup.page.scss")).default]
    })
], SignupPage);



/***/ })

}]);
//# sourceMappingURL=pages-auth-signup-signup-module-es2015.js.map