(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-auth-invite-invite-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/auth/invite/invite.page.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/auth/invite/invite.page.html ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content>\r\n  <div class=\"parallax-image\" [style.background-image]=\"'url(' +backgroundImage+')'\">\r\n  </div>\r\n  <div class=\"back\" (click)=\"back()\"><img src=\"../../../../assets/imgs/back_two.png\"></div>\r\n  <div class=\"main\">\r\n    <form [formGroup]=\"referralForm\">\r\n      <ion-input placeholder=\"Enter Name\" class=\"enter-input\" formControlName=\"name\" type=\"text\"\r\n        [class.error]=\"referralForm.get('name').invalid && (referralForm.get('name').dirty || referralForm.get('name').touched)\">\r\n      </ion-input>\r\n      <ion-input placeholder=\"Enter Email\" class=\"enter-input\" formControlName=\"email\" type=\"text\"\r\n        [class.error]=\"referralForm.get('email').invalid && (referralForm.get('email').dirty || referralForm.get('email').touched)\">\r\n      </ion-input>\r\n      <ion-input placeholder=\"Enter City\" class=\"enter-input\" formControlName=\"city\" type=\"text\"\r\n        [class.error]=\"referralForm.get('city').invalid && (referralForm.get('city').dirty || referralForm.get('city').touched)\">\r\n      </ion-input>\r\n      <ion-list class=\"line-input\">\r\n        <ion-item\r\n          [class.error]=\"referralForm.get('country_code').invalid && (referralForm.get('country_code').dirty || referralForm.get('country_code').touched)\">\r\n          <ion-label>Select Country</ion-label>\r\n          <ion-select formControlName=\"country_code\">\r\n            <ion-select-option *ngFor=\"let i of countryList\" [value]=\"i.dial_code\"\r\n              (ionSelect)=\"selectCountryCode($event)\">\r\n              {{i.dial_code}} {{i.name}}\r\n            </ion-select-option>\r\n          </ion-select>\r\n        </ion-item>\r\n      </ion-list>\r\n      <ion-input placeholder=\"Enter Contact Number\" class=\"enter-input\" formControlName=\"contact\" type=\"tel\"\r\n        [class.error]=\"referralForm.get('contact').invalid && (referralForm.get('contact').dirty || referralForm.get('contact').touched)\">\r\n      </ion-input>\r\n      <div class=\"main-new\">\r\n        <ion-button  style=\"margin-bottom: 12px;\" color=\"unit-btn\" expand=\"block\" class=\"shadow\" [disabled]=\"!referralForm.valid\"\r\n          (click)=\"onSubmit($event,referralForm,'sms');\">\r\n          Send Invite by SMS </ion-button>\r\n        <ion-button color=\"unit-btn\" expand=\"block\" class=\"shadow\" [disabled]=\"!referralForm.valid\"\r\n          (click)=\"onSubmit($event,referralForm,'email');\">\r\n          Send Invite by Email </ion-button>\r\n      </div>\r\n    </form>\r\n  </div>\r\n</ion-content>");

/***/ }),

/***/ "./src/app/pages/auth/invite/invite-routing.module.ts":
/*!************************************************************!*\
  !*** ./src/app/pages/auth/invite/invite-routing.module.ts ***!
  \************************************************************/
/*! exports provided: InvitePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InvitePageRoutingModule", function() { return InvitePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _invite_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./invite.page */ "./src/app/pages/auth/invite/invite.page.ts");




const routes = [
    {
        path: '',
        component: _invite_page__WEBPACK_IMPORTED_MODULE_3__["InvitePage"]
    }
];
let InvitePageRoutingModule = class InvitePageRoutingModule {
};
InvitePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], InvitePageRoutingModule);



/***/ }),

/***/ "./src/app/pages/auth/invite/invite.module.ts":
/*!****************************************************!*\
  !*** ./src/app/pages/auth/invite/invite.module.ts ***!
  \****************************************************/
/*! exports provided: InvitePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InvitePageModule", function() { return InvitePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _invite_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./invite-routing.module */ "./src/app/pages/auth/invite/invite-routing.module.ts");
/* harmony import */ var _invite_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./invite.page */ "./src/app/pages/auth/invite/invite.page.ts");
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/shared.module */ "./src/app/shared/shared.module.ts");








let InvitePageModule = class InvitePageModule {
};
InvitePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _invite_routing_module__WEBPACK_IMPORTED_MODULE_5__["InvitePageRoutingModule"],
            src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"]
        ],
        declarations: [_invite_page__WEBPACK_IMPORTED_MODULE_6__["InvitePage"]]
    })
], InvitePageModule);



/***/ }),

/***/ "./src/app/pages/auth/invite/invite.page.scss":
/*!****************************************************!*\
  !*** ./src/app/pages/auth/invite/invite.page.scss ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-toolbar {\n  --background: transparent;\n}\n\n.line-input {\n  margin-bottom: 15px !important;\n  margin-left: 8px;\n  margin-right: -20px;\n  margin-top: 15px;\n}\n\n.line-input ion-item {\n  --border-color: transparent !important;\n  --background-activated: white;\n  --background-focused: white;\n  --background-hover: white;\n  --highlight-height: 0;\n  border: 1px solid #cdcfcf;\n  border-radius: 50px;\n  color: \"quaternary\";\n  height: 47px;\n  margin-left: 0px;\n  margin-right: 15px;\n}\n\n.line-input ion-item.item-has-focus {\n  border: 1px solid var(--ion-color-primary);\n}\n\n.line-input ion-item ion-label {\n  color: \"quaternary\" !important;\n  font-size: 14px !important;\n  padding-left: 0px;\n  font-family: medium;\n}\n\n.back {\n  position: absolute;\n  z-index: 9999;\n  top: 30px;\n  left: 20px;\n}\n\n.parallax-image {\n  background-repeat: no-repeat;\n  background-position: center;\n  background-size: cover;\n  height: 20vh;\n}\n\n.error {\n  border: 1px solid #ed1b25 !important;\n}\n\n.main {\n  background-color: \"secondary\";\n  width: 100%;\n  position: absolute;\n  padding: 20px 30px 0px 20px;\n}\n\n.main form ion-input {\n  border: 1px solid #cdcfcf;\n  --placeholder-color: \"quaternary\";\n  --placeholder-opacity: 1;\n  font-family: medium;\n  border-radius: 25px;\n  margin-left: 7px;\n  --padding-start: 15px;\n  margin-top: 15px;\n}\n\n.main .main-new {\n  background-color: \"secondary\";\n  width: 100%;\n  position: absolute;\n  padding: 20px 40px 0px 10px;\n  margin-top: 10px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvYXV0aC9pbnZpdGUvaW52aXRlLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHlCQUFhO0FBQ2Y7O0FBQ0E7RUFDSSw4QkFBOEI7RUFDOUIsZ0JBQWdCO0VBQ2hCLG1CQUFtQjtFQUNuQixnQkFBZ0I7QUFFcEI7O0FBTkE7RUFNSSxzQ0FBZTtFQUNmLDZCQUF1QjtFQUN2QiwyQkFBcUI7RUFDckIseUJBQW1CO0VBQ25CLHFCQUFtQjtFQUNuQix5QkFBeUI7RUFDekIsbUJBQW1CO0VBQ25CLG1CQUFtQjtFQUNuQixZQUFZO0VBQ1osZ0JBQWdCO0VBQ2hCLGtCQUFrQjtBQUl0Qjs7QUFwQkE7RUFrQk0sMENBQTBDO0FBTWhEOztBQXhCQTtFQXFCTSw4QkFBOEI7RUFDOUIsMEJBQTBCO0VBQzFCLGlCQUFpQjtFQUNqQixtQkFBbUI7QUFPekI7O0FBSEE7RUFDRSxrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLFNBQVM7RUFDVCxVQUFVO0FBTVo7O0FBSEE7RUFDSSw0QkFBNEI7RUFDNUIsMkJBQTJCO0VBQzNCLHNCQUFzQjtFQUN0QixZQUFZO0FBTWhCOztBQUhBO0VBQ0ksb0NBQW9DO0FBTXhDOztBQUpBO0VBQ0ksNkJBQTZCO0VBQzdCLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsMkJBQTJCO0FBTy9COztBQVhBO0VBT1kseUJBQXlCO0VBQ3pCLGlDQUFvQjtFQUNwQix3QkFBc0I7RUFDdEIsbUJBQW1CO0VBQ25CLG1CQUFtQjtFQUNuQixnQkFBZ0I7RUFDaEIscUJBQWdCO0VBQ2hCLGdCQUFnQjtBQVE1Qjs7QUF0QkE7RUFrQk0sNkJBQTZCO0VBQzdCLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsMkJBQTJCO0VBQzNCLGdCQUFnQjtBQVF0QiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2F1dGgvaW52aXRlL2ludml0ZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tdG9vbGJhciB7XHJcbiAgLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxufVxyXG4ubGluZS1pbnB1dCB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxNXB4ICFpbXBvcnRhbnQ7XHJcbiAgICBtYXJnaW4tbGVmdDogOHB4O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAtMjBweDtcclxuICAgIG1hcmdpbi10b3A6IDE1cHg7XHJcbiAgaW9uLWl0ZW0ge1xyXG4gICAgLS1ib3JkZXItY29sb3I6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XHJcbiAgICAtLWJhY2tncm91bmQtYWN0aXZhdGVkOiB3aGl0ZTtcclxuICAgIC0tYmFja2dyb3VuZC1mb2N1c2VkOiB3aGl0ZTtcclxuICAgIC0tYmFja2dyb3VuZC1ob3Zlcjogd2hpdGU7XHJcbiAgICAtLWhpZ2hsaWdodC1oZWlnaHQ6IDA7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjY2RjZmNmO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTBweDtcclxuICAgIGNvbG9yOiBcInF1YXRlcm5hcnlcIjtcclxuICAgIGhlaWdodDogNDdweDtcclxuICAgIG1hcmdpbi1sZWZ0OiAwcHg7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDE1cHg7XHJcbiAgICAmLml0ZW0taGFzLWZvY3VzIHtcclxuICAgICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xyXG4gICAgfVxyXG4gICAgaW9uLWxhYmVsIHtcclxuICAgICAgY29sb3I6IFwicXVhdGVybmFyeVwiICFpbXBvcnRhbnQ7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTRweCAhaW1wb3J0YW50O1xyXG4gICAgICBwYWRkaW5nLWxlZnQ6IDBweDtcclxuICAgICAgZm9udC1mYW1pbHk6IG1lZGl1bTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuLmJhY2t7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHotaW5kZXg6IDk5OTk7XHJcbiAgdG9wOiAzMHB4O1xyXG4gIGxlZnQ6IDIwcHg7XHJcbn1cclxuXHJcbi5wYXJhbGxheC1pbWFnZXtcclxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gICAgaGVpZ2h0OiAyMHZoO1xyXG5cclxufVxyXG4uZXJyb3J7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZWQxYjI1ICFpbXBvcnRhbnQ7XHJcbn1cclxuLm1haW57XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBcInNlY29uZGFyeVwiO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBwYWRkaW5nOiAyMHB4IDMwcHggMHB4IDIwcHg7XHJcbiAgICBmb3Jte1xyXG4gICAgICAgIGlvbi1pbnB1dHtcclxuICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2NkY2ZjZjtcclxuICAgICAgICAgICAgLS1wbGFjZWhvbGRlci1jb2xvcjogXCJxdWF0ZXJuYXJ5XCI7XHJcbiAgICAgICAgICAgIC0tcGxhY2Vob2xkZXItb3BhY2l0eTogMTtcclxuICAgICAgICAgICAgZm9udC1mYW1pbHk6IG1lZGl1bTtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMjVweDtcclxuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDdweDtcclxuICAgICAgICAgICAgLS1wYWRkaW5nLXN0YXJ0OiAxNXB4O1xyXG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAxNXB4O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC5tYWluLW5ld3tcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogXCJzZWNvbmRhcnlcIjtcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgcGFkZGluZzogMjBweCA0MHB4IDBweCAxMHB4O1xyXG4gICAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gICAgfVxyXG59XHJcbiJdfQ== */");

/***/ }),

/***/ "./src/app/pages/auth/invite/invite.page.ts":
/*!**************************************************!*\
  !*** ./src/app/pages/auth/invite/invite.page.ts ***!
  \**************************************************/
/*! exports provided: InvitePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InvitePage", function() { return InvitePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/__ivy_ngcc__/fesm2015/ionic-storage.js");
/* harmony import */ var src_app_services_api_service_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/api-service.service */ "./src/app/services/api-service.service.ts");
/* harmony import */ var src_app_utilities_countrycode__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/utilities/countrycode */ "./src/app/utilities/countrycode.ts");
/* harmony import */ var _config_config__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../config/config */ "./src/app/pages/config/config.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var src_app_services_loader_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/services/loader.service */ "./src/app/services/loader.service.ts");










let InvitePage = class InvitePage {
    constructor(fb, storage, _api, router, platform, loader, alertCtrl) {
        this.fb = fb;
        this.storage = storage;
        this._api = _api;
        this.router = router;
        this.loader = loader;
        this.alertCtrl = alertCtrl;
        this.url = _config_config__WEBPACK_IMPORTED_MODULE_7__["config"].url;
        this.countryList = src_app_utilities_countrycode__WEBPACK_IMPORTED_MODULE_6__["countryCode"];
        this.click = false;
        platform.ready().then(() => {
            this.width = platform.width();
            this.heigth = platform.height();
        });
    }
    ngOnInit() {
        this.backgroundImage = '../../../../assets/imgs/place1.jpg';
        this.referralForm = this.fb.group({
            name: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email]],
            city: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            contact: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(10), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(10)]],
            country_code: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
        });
        this.getUser();
    }
    ;
    getUser() {
        this.storage.get("session").then((session) => {
            if (session) {
                this.storage.get("org").then((org) => {
                    if (org) {
                        this.storage.get("loggedUserId").then((userId) => {
                            this.userId = userId;
                            this.org = org;
                            this.token = session;
                            const params = {
                                "auth": {
                                    "type": "token",
                                    "token": this.token,
                                    "orgId": this.org
                                }
                            };
                            this.getCountyList(params);
                        });
                    }
                });
            }
        });
    }
    selectCountryCode($event) {
        console.log($event);
    }
    getCountyList(params) {
        this._api.postRequest(this.url + _config_config__WEBPACK_IMPORTED_MODULE_7__["URL"].countriesList, params).subscribe(x => {
            console.log('@@@', x);
        });
    }
    ;
    onSubmit(event, form, type) {
        event.target.disabled = true;
        this.loader.present();
        this.sendInvite(form.value, type);
    }
    sendInvite(value, type) {
        let params = {
            "auth": {
                "type": "token",
                "token": this.token,
                "orgId": this.org
            },
            name: value.name,
            emailId: value.email,
            contactNumber: value.contact,
            city: value.city,
            countryCode: value.country_code
        };
        if (type == 'sms') {
            params['type'] = type;
        }
        if (type == 'email') {
            params['type'] = type;
        }
        console.log(this.url + _config_config__WEBPACK_IMPORTED_MODULE_7__["UNITURL"].sendInvite);
        console.log(params);
        this._api.postRequest(this.url + _config_config__WEBPACK_IMPORTED_MODULE_7__["UNITURL"].sendInvite, params).subscribe((response) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.loader.dismiss();
            if (response.success == true) {
                const alert = yield this.alertCtrl.create({
                    header: 'Success',
                    message: response.message ? response.message : '',
                    buttons: [
                        {
                            text: 'Dismiss',
                            role: 'Dismiss',
                            cssClass: 'secondary',
                            handler: (blah) => {
                                this.back();
                            }
                        }
                    ]
                });
                yield alert.present();
                this.referralForm.reset();
            }
            else {
                const alert = yield this.alertCtrl.create({
                    header: "Error",
                    message: response.message ? response.message : '',
                    buttons: [
                        {
                            text: 'Dismiss',
                            role: 'Dismiss',
                            cssClass: 'secondary',
                            handler: (blah) => {
                                this.back();
                            }
                        }
                    ]
                });
                yield alert.present();
            }
        }), (error) => {
            this.loader.dismiss();
        });
    }
    back() {
        this.router.navigate(["tabs/profile"]);
    }
    ;
};
InvitePage.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_4__["Storage"] },
    { type: src_app_services_api_service_service__WEBPACK_IMPORTED_MODULE_5__["ApiService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["Platform"] },
    { type: src_app_services_loader_service__WEBPACK_IMPORTED_MODULE_9__["LoaderService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["AlertController"] }
];
InvitePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-invite',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./invite.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/auth/invite/invite.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./invite.page.scss */ "./src/app/pages/auth/invite/invite.page.scss")).default]
    })
], InvitePage);



/***/ }),

/***/ "./src/app/shared/directive/index.ts":
/*!*******************************************!*\
  !*** ./src/app/shared/directive/index.ts ***!
  \*******************************************/
/*! exports provided: SHARED_DIRECTIVES, InputMaskDirective, ParallaxHeaderDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SHARED_DIRECTIVES", function() { return SHARED_DIRECTIVES; });
/* harmony import */ var _input_mask_directive__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./input-mask.directive */ "./src/app/shared/directive/input-mask.directive.ts");
/* harmony import */ var _parallax_header_directive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./parallax-header.directive */ "./src/app/shared/directive/parallax-header.directive.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "InputMaskDirective", function() { return _input_mask_directive__WEBPACK_IMPORTED_MODULE_0__["InputMaskDirective"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ParallaxHeaderDirective", function() { return _parallax_header_directive__WEBPACK_IMPORTED_MODULE_1__["ParallaxHeaderDirective"]; });



const SHARED_DIRECTIVES = [_input_mask_directive__WEBPACK_IMPORTED_MODULE_0__["InputMaskDirective"], _parallax_header_directive__WEBPACK_IMPORTED_MODULE_1__["ParallaxHeaderDirective"]];




/***/ }),

/***/ "./src/app/shared/directive/input-mask.directive.ts":
/*!**********************************************************!*\
  !*** ./src/app/shared/directive/input-mask.directive.ts ***!
  \**********************************************************/
/*! exports provided: InputMaskDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InputMaskDirective", function() { return InputMaskDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let InputMaskDirective = class InputMaskDirective {
    constructor() {
        console.log('.....Working');
    }
};
InputMaskDirective.ctorParameters = () => [];
InputMaskDirective = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
        selector: '[appInputMask]'
    })
], InputMaskDirective);



/***/ }),

/***/ "./src/app/shared/directive/parallax-header.directive.ts":
/*!***************************************************************!*\
  !*** ./src/app/shared/directive/parallax-header.directive.ts ***!
  \***************************************************************/
/*! exports provided: ParallaxHeaderDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ParallaxHeaderDirective", function() { return ParallaxHeaderDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");



let ParallaxHeaderDirective = class ParallaxHeaderDirective {
    constructor(el, render, domCtrl) {
        this.el = el;
        this.render = render;
        this.domCtrl = domCtrl;
    }
    ngOnInit() {
        let content = this.el.nativeElement;
        this.header = content.getElementsByClassName('parallax-image')[0];
        console.log(this.header);
        this.domCtrl.read(() => {
            this.headerHeigth = this.header.clientHeight;
            console.log('height', this.headerHeigth);
        });
    }
};
ParallaxHeaderDirective.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["DomController"] }
];
ParallaxHeaderDirective = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
        selector: '[appParallaxHeader]'
    })
], ParallaxHeaderDirective);



/***/ }),

/***/ "./src/app/shared/shared.module.ts":
/*!*****************************************!*\
  !*** ./src/app/shared/shared.module.ts ***!
  \*****************************************/
/*! exports provided: SharedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return SharedModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./directive */ "./src/app/shared/directive/index.ts");




let SharedModule = class SharedModule {
};
SharedModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [..._directive__WEBPACK_IMPORTED_MODULE_3__["SHARED_DIRECTIVES"]],
        exports: [..._directive__WEBPACK_IMPORTED_MODULE_3__["SHARED_DIRECTIVES"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]
        ]
    })
], SharedModule);



/***/ })

}]);
//# sourceMappingURL=pages-auth-invite-invite-module-es2015.js.map