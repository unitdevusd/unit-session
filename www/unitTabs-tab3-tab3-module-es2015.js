(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["unitTabs-tab3-tab3-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/unitTabs/tab3/tab3.page.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/unitTabs/tab3/tab3.page.html ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header class=\"ion-no-border\">\r\n  <ion-toolbar>\r\n    <ion-title>\r\n     Inbox\r\n    </ion-title>\r\n    <ion-buttons slot=\"end\" (click)=\"archive()\">\r\n      <ion-button>\r\n        <ion-icon color=\"unit-btn\" name=\"ellipsis-horizontal-outline\"></ion-icon>\r\n      </ion-button>\r\n    </ion-buttons>\r\n  </ion-toolbar>\r\n</ion-header>\r\n<ion-content [fullscreen]=\"true\">\r\n  <ion-refresher color=\"unit-btn\" slot=\"fixed\" (ionRefresh)=\"doRefresh($event)\">\r\n    <ion-refresher-content></ion-refresher-content>\r\n  </ion-refresher>\r\n  <div *ngIf=\"!logged\">\r\n    <ion-item style=\"padding-top: 40px;\" *ngIf=\"!logged\" lines=\"none\">\r\n      <ion-button expand=\"block\" color=\"unit-btn\" fill=\"outline\" (click)=\"logIn()\">Log in</ion-button>\r\n    </ion-item>\r\n    <ion-item lines=\"none\" *ngIf=\"!logged\">\r\n      <p class=\"p-text\">\r\n        <a color=\"unit-btn\" routerLink=\"/phone-verification\"> New here? Sign up </a>\r\n      </p>\r\n    </ion-item>\r\n  </div>\r\n  <div *ngIf=\"logged\">\r\n    <ion-grid class=\"ion-no-padding grid-border\">\r\n      <ion-row class=\"ion-no-padding\">\r\n        <ion-col class=\"ion-no-padding\">\r\n          <ion-segment [(ngModel)]=\"segment\" (ionChange)=\"segmentChanged($event)\" mode=\"md\" color=\"unit-btn\">\r\n            <ion-segment-button value=\"message\">\r\n              <ion-label style=\"text-transform:capitalize\">Messages</ion-label>\r\n            </ion-segment-button>\r\n            <ion-segment-button value=\"groups\">\r\n              <ion-label style=\"text-transform:capitalize\">Groups</ion-label>\r\n            </ion-segment-button>            \r\n            <ion-segment-button value=\"notifications\">\r\n              <ion-label style=\"text-transform:capitalize\">Notifications</ion-label>\r\n            </ion-segment-button>\r\n\r\n          </ion-segment> \r\n        </ion-col>\r\n        <ion-col></ion-col>\r\n      </ion-row>\r\n    </ion-grid>\r\n\r\n    <div *ngIf=\"segment == 'message' \">\r\n      <div class=\"recent-chats ion-padding\">\r\n        <div class=\"heading\">\r\n          <h1>My Chats</h1>\r\n          <ion-icon name=\"search-sharp\"></ion-icon>\r\n        </div>\r\n        <div class=\"chats\">\r\n          <ion-item lines=\"none\" routerLink=\"/conversation-page\">\r\n          <ion-avatar slot=\"start\">\r\n            <img src=\"https://cdn.dxomark.com/wp-content/uploads/medias/post-46226/CloserDetailsOutdoor_AppleiPhone11.jpg\" alt=\"\">\r\n          </ion-avatar>\r\n          <ion-label class=\"ion-text-nowrap\">\r\n            <h2>Joe</h2>\r\n            <p>Typing...</p>\r\n          </ion-label>\r\n          <div class=\"info-div\">\r\n            <p>2:13PM</p>\r\n          </div>\r\n          </ion-item>\r\n          \r\n          <ion-item lines=\"none\" routerLink=\"/conversation-page\">\r\n            <ion-avatar slot=\"start\">\r\n              <img src=\"https://media.gq.com/photos/55828f78e52bc4b477a98e17/4:3/w_628,h_471,c_limit/blogs-the-feed-tinashe-selfie-628.jpg\" alt=\"\">\r\n            </ion-avatar>\r\n            <ion-label class=\"ion-text-nowrap\">\r\n              <h2>Mary</h2>\r\n              <p>Is he moving his stuff in today?</p>\r\n            </ion-label>\r\n            <div class=\"info-div\">\r\n              <p>4:10PM</p>\r\n              <ion-badge>1</ion-badge>\r\n            </div>\r\n            </ion-item>\r\n    \r\n            <ion-item lines=\"none\" routerLink=\"/conversation-page\">\r\n              <ion-avatar slot=\"start\">\r\n                <img src=\"https://cdn57.androidauthority.net/wp-content/uploads/2020/07/OnePlus-Nord-Selfie-Camera-10.jpg\" alt=\"\">\r\n              </ion-avatar>\r\n              <ion-label class=\"ion-text-nowrap\">\r\n                <h2>Andrew</h2>\r\n                <p>On my way now</p>\r\n              </ion-label>\r\n              <div class=\"info-div\">\r\n                <p>6:30AM</p>\r\n                <ion-icon name=\"checkmark-done-outline\"></ion-icon>\r\n              </div>\r\n              </ion-item>\r\n        </div>\r\n      </div>\r\n      <ion-fab-button>\r\n        <ion-icon name=\"chatbox-ellipses-outline\"></ion-icon>\r\n      </ion-fab-button>\r\n      <ng-template>\r\n        <ion-item class=\"cancel-box\">\r\n          <div class=\"ion-padding\">\r\n            <img src=\"../../../../assets/imgs/emptyList.png\">\r\n            <ion-label class=\"cancel-text\"> {{msg}}</ion-label>\r\n          </div>\r\n        </ion-item>\r\n      </ng-template>\r\n    </div>\r\n    \r\n    \r\n\r\n    <div *ngIf=\"segment == 'groups' \">\r\n      <div class=\"recent-groups ion-padding\">\r\n        <div class=\"heading\">\r\n          <h1>My Groups</h1>\r\n          <ion-icon name=\"search-sharp\"></ion-icon>\r\n        </div> \r\n         \r\n         <!-- <div class=\"groups\"> -->\r\n            \r\n          <ion-item lines=\"none\" routerLink=\"#\">\r\n          <ion-avatar slot=\"start\">\r\n            <img src=\"https://images.unsplash.com/photo-1594394489026-c1d58f11b14c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80\" alt=\"\">\r\n          </ion-avatar>\r\n          <ion-label class=\"ion-text-nowrap\">\r\n            <h2>Photographers of San Francisco</h2>\r\n            <p>So many images so little time</p>\r\n          </ion-label>\r\n          <div class=\"info-div\">\r\n            <p>2:42AM</p>\r\n          </div>\r\n          </ion-item>\r\n         \r\n          <ion-item lines=\"none\" routerLink=\"#\">\r\n            <ion-avatar slot=\"start\">\r\n              <img src=\"https://images.unsplash.com/photo-1580493113011-ad79f792a7c2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80\" alt=\"\">\r\n            </ion-avatar>\r\n            <ion-label class=\"ion-text-nowrap\">\r\n              <h2> Harry's Canvas Painting Group </h2>\r\n              <p>I paint flowers so they will not die.</p>\r\n            </ion-label>\r\n            <div class=\"info-div\">\r\n              <p>4:47PM</p>\r\n            </div>\r\n            </ion-item>\r\n          \r\n\r\n            <ion-item lines=\"none\" routerLink=\"#\">\r\n              <ion-avatar slot=\"start\">\r\n                <img src=\"https://images.unsplash.com/photo-1526772662000-3f88f10405ff?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80\" alt=\"\">\r\n              </ion-avatar>\r\n              <ion-label class=\"ion-text-nowrap\">\r\n                <h2>Japanese Outdoor Hiking Group</h2>\r\n                <p>ハイキングに行こう</p>\r\n              </ion-label>\r\n              <div class=\"info-div\">\r\n                <p>6:32AM</p>\r\n              </div>\r\n              </ion-item>\r\n\r\n          </div>\r\n      </div>\r\n\r\n\r\n    \r\n    <div *ngIf=\"segment == 'notifications' \">\r\n      <ion-progress-bar color=\"unit-btn\"  type=\"indeterminate\" *ngIf=\"loading\"></ion-progress-bar>\r\n      <div *ngIf=\"notificationList.length; else notFound\">\r\n        <ion-item-sliding *ngFor=\"let notify of notificationList; let i = index \">\r\n          <ion-item  (click)=\"onNotiClick(notify,i)\">\r\n            <ion-label>\r\n              <h3> {{notify.description}}</h3>\r\n              <p>{{notify.sendAt  | date}}</p>\r\n            </ion-label>\r\n          </ion-item>\r\n          <ion-item-options>\r\n            <ion-item-option (click)=\"markasRead(notify,i)\">\r\n              <ion-icon slot=\"top\" name=\"reader-outline\"></ion-icon>\r\n              <ion-label> read </ion-label>\r\n            </ion-item-option>\r\n          </ion-item-options>\r\n        </ion-item-sliding>\r\n      </div>\r\n    </div>\r\n    <ng-template #notFound>\r\n      <ion-item  *ngIf=\"notificationList <= 0\" class=\"cancel-box\">\r\n        <div class=\"ion-padding\">\r\n          <img src=\"../../../../assets/imgs/emptyList.png\">\r\n          <ion-label class=\"cancel-text\"> {{text}}</ion-label>\r\n        </div>\r\n      </ion-item>\r\n    </ng-template>\r\n  </div>\r\n</ion-content>\r\n");

/***/ }),

/***/ "./src/app/pages/unitTabs/tab3/tab3-routing.module.ts":
/*!************************************************************!*\
  !*** ./src/app/pages/unitTabs/tab3/tab3-routing.module.ts ***!
  \************************************************************/
/*! exports provided: Tab3PageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab3PageRoutingModule", function() { return Tab3PageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _tab3_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tab3.page */ "./src/app/pages/unitTabs/tab3/tab3.page.ts");




const routes = [
    {
        path: '',
        component: _tab3_page__WEBPACK_IMPORTED_MODULE_3__["Tab3Page"],
    }
];
let Tab3PageRoutingModule = class Tab3PageRoutingModule {
};
Tab3PageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], Tab3PageRoutingModule);



/***/ }),

/***/ "./src/app/pages/unitTabs/tab3/tab3.module.ts":
/*!****************************************************!*\
  !*** ./src/app/pages/unitTabs/tab3/tab3.module.ts ***!
  \****************************************************/
/*! exports provided: Tab3PageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab3PageModule", function() { return Tab3PageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _tab3_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./tab3.page */ "./src/app/pages/unitTabs/tab3/tab3.page.ts");
/* harmony import */ var _tab3_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./tab3-routing.module */ "./src/app/pages/unitTabs/tab3/tab3-routing.module.ts");








let Tab3PageModule = class Tab3PageModule {
};
Tab3PageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
        imports: [
            _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonicModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild([{ path: '', component: _tab3_page__WEBPACK_IMPORTED_MODULE_6__["Tab3Page"] }]),
            _tab3_routing_module__WEBPACK_IMPORTED_MODULE_7__["Tab3PageRoutingModule"],
        ],
        declarations: [_tab3_page__WEBPACK_IMPORTED_MODULE_6__["Tab3Page"]]
    })
], Tab3PageModule);



/***/ }),

/***/ "./src/app/pages/unitTabs/tab3/tab3.page.scss":
/*!****************************************************!*\
  !*** ./src/app/pages/unitTabs/tab3/tab3.page.scss ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("section {\n  margin-top: 1em;\n  margin-bottom: 2.5em;\n}\n\n:root {\n  --ion-safe-area-top: 20px;\n  --ion-safe-area-bottom: 22px;\n}\n\nion-content ion-toolbar {\n  --background: translucent;\n}\n\n.item-space {\n  padding-top: 10px;\n}\n\n.sc-ion-label-ios-s h3, .sc-ion-label-ios-s h4, .sc-ion-label-ios-s h5, .sc-ion-label-ios-s h6 {\n  margin-left: 0;\n  margin-right: 0;\n  margin-top: 0;\n  margin-bottom: 3px;\n  font-size: 14px;\n  font-weight: 300;\n  line-height: normal;\n}\n\nion-item ion-label h2 {\n  font-size: medium;\n  font-weight: bold;\n  color: \"quaternary\";\n}\n\nion-item ion-button {\n  height: 100%;\n}\n\n.p-text {\n  font-size: 14px;\n  line-height: 1.5;\n  color: var(--ion-color-step-600, \"quaternary\");\n}\n\n.p-text a {\n  text-decoration: none;\n  color: #ED1B25;\n}\n\n.cancel-box {\n  --inner-border-width: 0;\n}\n\n.cancel-box img {\n  display: block;\n  margin: 0 auto;\n}\n\n.ion-padding {\n  width: 100%;\n}\n\n.cancel-text {\n  text-align: center;\n  font-size: 14px;\n  font-family: 'helveticaneuebold';\n  text-align: center;\n}\n\n.grid-border {\n  border-bottom: 1px solid red;\n  margin-left: 25px;\n  margin-right: 25px;\n}\n\n.chat-list {\n  background: \"secondary\";\n  margin-top: 5px;\n  border-top-right-radius: 38px;\n  border-top-left-radius: 38px;\n}\n\n.chat-list .all-chats {\n  padding-top: 0;\n}\n\n.chat-list .heading {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  color: \"quaternary\";\n}\n\n.chat-list .heading h1 {\n  font-size: 0.6rem;\n  font-weight: bold;\n  color: \"quaternary\";\n}\n\n.chat-list .heading ion-icon {\n  font-size: 1.5rem;\n}\n\n.chat-list .chats {\n  margin-top: 15px;\n}\n\n.chat-list .chats ion-item:part(native) {\n  padding: 0;\n}\n\n.chat-list .chats ion-item {\n  margin-bottom: 15px;\n}\n\n.chat-list .chats ion-item ion-avatar {\n  width: 100% !important;\n  height: 100% !important;\n  max-width: 51px;\n}\n\n.chat-list .chats ion-item ion-label h2 {\n  font-size: 1rem;\n  font-weight: bolder;\n  color: \"quaternary\";\n}\n\n.chat-list .chats ion-item ion-label p {\n  margin-top: 6px;\n  font-size: 0.8rem;\n  color: \"quaternary\";\n  opacity: 0.5;\n  letter-spacing: 0.5;\n  font-weight: bold;\n}\n\n.chat-list .chats ion-item .info-div {\n  position: absolute;\n  right: 0;\n  font-size: 0.4rem;\n  color: \"tertiary\";\n  font-weight: bolder;\n  text-align: right;\n}\n\n.chat-list .chats ion-item .info-div p {\n  opacity: 0.5;\n}\n\n.chat-list .chats ion-item .info-div ion-icon {\n  font-size: 1.3rem;\n}\n\n.chat-list .chats ion-item .info-div ion-badge {\n  font-size: 11px;\n  /* background: blue; */\n  margin-bottom: 5px;\n  --padding-start: 5px;\n  --padding-end: 5px;\n  --padding-bottom: 3px;\n  --padding-top: 3px;\n}\n\nion-fab-button {\n  position: fixed;\n  z-index: 111;\n  bottom: 30px;\n  right: 15px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvdW5pdFRhYnMvdGFiMy90YWIzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGVBQWU7RUFDZixvQkFBb0I7QUFDeEI7O0FBQ0U7RUFDRSx5QkFBb0I7RUFDcEIsNEJBQXVCO0FBRTNCOztBQUNFO0VBQ0UseUJBQWE7QUFFakI7O0FBQ0U7RUFDSSxpQkFBaUI7QUFFdkI7O0FBQ0U7RUFDRSxjQUFjO0VBQ2QsZUFBZTtFQUNmLGFBQWE7RUFDYixrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixtQkFBbUI7QUFFdkI7O0FBQ0U7RUFHTSxpQkFBaUI7RUFDakIsaUJBQWlCO0VBQ2pCLG1CQUFtQjtBQUEzQjs7QUFMRTtFQVNJLFlBQVk7QUFBbEI7O0FBR0U7RUFDRSxlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLDhDQUE4QztBQUFsRDs7QUFIRTtFQUtJLHFCQUFxQjtFQUNyQixjQUFjO0FBRXBCOztBQUNFO0VBQ0UsdUJBQXFCO0FBRXpCOztBQUFFO0VBQ0UsY0FBYztFQUNkLGNBQWM7QUFHbEI7O0FBREU7RUFDRSxXQUFXO0FBSWY7O0FBRkU7RUFDRSxrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLGdDQUFnQztFQUNoQyxrQkFDRjtBQUlGOztBQUhFO0VBQ0UsNEJBQTRCO0VBQzVCLGlCQUFpQjtFQUNqQixrQkFBa0I7QUFNdEI7O0FBSEU7RUFDRSx1QkFBdUI7RUFDdkIsZUFBZTtFQUNmLDZCQUE2QjtFQUM3Qiw0QkFBNEI7QUFNaEM7O0FBVkU7RUFPSSxjQUFhO0FBT25COztBQWRFO0VBVUksYUFBWTtFQUNaLDhCQUE4QjtFQUM5QixtQkFBbUI7RUFDbkIsbUJBQW1CO0FBUXpCOztBQXJCRTtFQWVNLGlCQUFpQjtFQUNqQixpQkFBaUI7RUFDakIsbUJBQW1CO0FBVTNCOztBQTNCRTtFQW9CTSxpQkFBaUI7QUFXekI7O0FBL0JFO0VBd0JJLGdCQUFnQjtBQVd0Qjs7QUFuQ0U7RUEwQk0sVUFBVTtBQWFsQjs7QUF2Q0U7RUE2Qk0sbUJBQW1CO0FBYzNCOztBQTNDRTtFQStCUSxzQkFBc0I7RUFDdEIsdUJBQXVCO0VBQ3ZCLGVBQWU7QUFnQnpCOztBQWpERTtFQXFDVSxlQUFlO0VBQ2YsbUJBQW1CO0VBQ25CLG1CQUFtQjtBQWdCL0I7O0FBdkRFO0VBMENVLGVBQWU7RUFDZixpQkFBaUI7RUFDakIsbUJBQW1CO0VBQ25CLFlBQVk7RUFDWixtQkFBbUI7RUFDbkIsaUJBQWlCO0FBaUI3Qjs7QUFoRUU7RUFtRFEsa0JBQWtCO0VBQ2xCLFFBQVE7RUFDUixpQkFBaUI7RUFDakIsaUJBQWlCO0VBQ2pCLG1CQUFtQjtFQUNuQixpQkFBaUI7QUFpQjNCOztBQXpFRTtFQTBEVSxZQUFZO0FBbUJ4Qjs7QUE3RUU7RUE2RFUsaUJBQWlCO0FBb0I3Qjs7QUFqRkU7RUFnRVUsZUFBZTtFQUNoQixzQkFBQTtFQUNDLGtCQUFrQjtFQUNsQixvQkFBZ0I7RUFDaEIsa0JBQWM7RUFDZCxxQkFBaUI7RUFDakIsa0JBQWM7QUFxQjFCOztBQWRFO0VBQ0UsZUFBZTtFQUNmLFlBQVk7RUFDWixZQUFZO0VBQ1osV0FBVztBQWlCZiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3VuaXRUYWJzL3RhYjMvdGFiMy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJzZWN0aW9uIHtcclxuICAgIG1hcmdpbi10b3A6IDFlbTtcclxuICAgIG1hcmdpbi1ib3R0b206IDIuNWVtO1xyXG4gIH1cclxuICA6cm9vdCB7XHJcbiAgICAtLWlvbi1zYWZlLWFyZWEtdG9wOiAyMHB4O1xyXG4gICAgLS1pb24tc2FmZS1hcmVhLWJvdHRvbTogMjJweDtcclxuICB9XHJcblxyXG4gIGlvbi1jb250ZW50IGlvbi10b29sYmFyIHtcclxuICAgIC0tYmFja2dyb3VuZDogdHJhbnNsdWNlbnQ7XHJcbiAgfVxyXG4gIFxyXG4gIC5pdGVtLXNwYWNle1xyXG4gICAgICBwYWRkaW5nLXRvcDogMTBweDtcclxuICB9XHJcbiAgXHJcbiAgLnNjLWlvbi1sYWJlbC1pb3MtcyBoMywgLnNjLWlvbi1sYWJlbC1pb3MtcyBoNCwgLnNjLWlvbi1sYWJlbC1pb3MtcyBoNSwgLnNjLWlvbi1sYWJlbC1pb3MtcyBoNiB7XHJcbiAgICBtYXJnaW4tbGVmdDogMDtcclxuICAgIG1hcmdpbi1yaWdodDogMDtcclxuICAgIG1hcmdpbi10b3A6IDA7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAzcHg7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBmb250LXdlaWdodDogMzAwO1xyXG4gICAgbGluZS1oZWlnaHQ6IG5vcm1hbDtcclxuICB9XHJcblxyXG4gIGlvbi1pdGVte1xyXG4gICAgaW9uLWxhYmVse1xyXG4gICAgICBoMntcclxuICAgICAgICBmb250LXNpemU6IG1lZGl1bTtcclxuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICBjb2xvcjogXCJxdWF0ZXJuYXJ5XCI7XHJcbiAgICAgIH0gICAgXHJcbiAgICB9XHJcbiAgICBpb24tYnV0dG9ue1xyXG4gICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICB9XHJcbiAgfVxyXG4gIC5wLXRleHQge1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDEuNTtcclxuICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3Itc3RlcC02MDAsIFwicXVhdGVybmFyeVwiKTtcclxuICAgIGEge1xyXG4gICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICAgIGNvbG9yOiAjRUQxQjI1O1xyXG4gICAgfVxyXG4gIH1cclxuICAuY2FuY2VsLWJveHtcclxuICAgIC0taW5uZXItYm9yZGVyLXdpZHRoOiAwO1xyXG4gIH1cclxuICAuY2FuY2VsLWJveCBpbWd7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gIH1cclxuICAuaW9uLXBhZGRpbmd7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICB9XHJcbiAgLmNhbmNlbC10ZXh0e1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgZm9udC1mYW1pbHk6ICdoZWx2ZXRpY2FuZXVlYm9sZCc7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXJcclxuICB9XHJcbiAgLmdyaWQtYm9yZGVye1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJlZDtcclxuICAgIG1hcmdpbi1sZWZ0OiAyNXB4O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAyNXB4O1xyXG4gIH1cclxuXHJcbiAgLmNoYXQtbGlzdHtcclxuICAgIGJhY2tncm91bmQ6IFwic2Vjb25kYXJ5XCI7XHJcbiAgICBtYXJnaW4tdG9wOiA1cHg7XHJcbiAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMzhweDtcclxuICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDM4cHg7XHJcblxyXG4gICAgLmFsbC1jaGF0c3tcclxuICAgICAgcGFkZGluZy10b3A6MDtcclxuICAgIH1cclxuICAgIC5oZWFkaW5ne1xyXG4gICAgICBkaXNwbGF5OmZsZXg7XHJcbiAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgY29sb3I6IFwicXVhdGVybmFyeVwiO1xyXG4gICAgICBoMXtcclxuICAgICAgICBmb250LXNpemU6IDAuNnJlbTtcclxuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICBjb2xvcjogXCJxdWF0ZXJuYXJ5XCI7XHJcbiAgICAgIH1cclxuICAgICAgaW9uLWljb257XHJcbiAgICAgICAgZm9udC1zaXplOiAxLjVyZW07XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIC5jaGF0c3tcclxuICAgICAgbWFyZ2luLXRvcDogMTVweDtcclxuICAgICAgaW9uLWl0ZW06cGFydChuYXRpdmUpe1xyXG4gICAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICAgIH1cclxuICAgICAgaW9uLWl0ZW17XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMTVweDtcclxuICAgICAgICBpb24tYXZhdGFye1xyXG4gICAgICAgICAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcclxuICAgICAgICAgIGhlaWdodDogMTAwJSAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgbWF4LXdpZHRoOiA1MXB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICBpb24tbGFiZWx7XHJcbiAgICAgICAgICBoMntcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxcmVtO1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogYm9sZGVyO1xyXG4gICAgICAgICAgICBjb2xvcjogXCJxdWF0ZXJuYXJ5XCI7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBwe1xyXG4gICAgICAgICAgICBtYXJnaW4tdG9wOiA2cHg7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMC44cmVtO1xyXG4gICAgICAgICAgICBjb2xvcjogXCJxdWF0ZXJuYXJ5XCI7XHJcbiAgICAgICAgICAgIG9wYWNpdHk6IDAuNTtcclxuICAgICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDAuNTtcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5pbmZvLWRpdntcclxuICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgIHJpZ2h0OiAwO1xyXG4gICAgICAgICAgZm9udC1zaXplOiAwLjRyZW07XHJcbiAgICAgICAgICBjb2xvcjogXCJ0ZXJ0aWFyeVwiO1xyXG4gICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcclxuICAgICAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gICAgICAgICAgcHtcclxuICAgICAgICAgICAgb3BhY2l0eTogMC41O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgaW9uLWljb257XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMS4zcmVtO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgaW9uLWJhZGdle1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDExcHg7XHJcbiAgICAgICAgICAgLyogYmFja2dyb3VuZDogYmx1ZTsgKi9cclxuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogNXB4O1xyXG4gICAgICAgICAgICAtLXBhZGRpbmctc3RhcnQ6IDVweDtcclxuICAgICAgICAgICAgLS1wYWRkaW5nLWVuZDogNXB4O1xyXG4gICAgICAgICAgICAtLXBhZGRpbmctYm90dG9tOiAzcHg7XHJcbiAgICAgICAgICAgIC0tcGFkZGluZy10b3A6IDNweDtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIGlvbi1mYWItYnV0dG9ue1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgei1pbmRleDogMTExO1xyXG4gICAgYm90dG9tOiAzMHB4O1xyXG4gICAgcmlnaHQ6IDE1cHg7XHJcbiAgfSJdfQ== */");

/***/ }),

/***/ "./src/app/pages/unitTabs/tab3/tab3.page.ts":
/*!**************************************************!*\
  !*** ./src/app/pages/unitTabs/tab3/tab3.page.ts ***!
  \**************************************************/
/*! exports provided: Tab3Page */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab3Page", function() { return Tab3Page; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var src_app_services_api_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/api-service.service */ "./src/app/services/api-service.service.ts");
/* harmony import */ var src_app_services_global_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/global.service */ "./src/app/services/global.service.ts");
/* harmony import */ var src_app_services_toast_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/toast.service */ "./src/app/services/toast.service.ts");
/* harmony import */ var _config_config__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../config/config */ "./src/app/pages/config/config.ts");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/__ivy_ngcc__/fesm2015/ionic-storage.js");








let Tab3Page = class Tab3Page {
    constructor(router, _apiService, _gs, storage, _toast) {
        this.router = router;
        this._apiService = _apiService;
        this._gs = _gs;
        this.storage = storage;
        this._toast = _toast;
        this.url = _config_config__WEBPACK_IMPORTED_MODULE_6__["config"].url;
        this.notificationList = [];
        this.logged = false;
        this.text = `No notifications.`;
        this.msg = `No messages Yet.`;
        this.segment = 'notifications';
        this._gs.getUpdatedTabs().subscribe(status => {
            if (status) {
                this.token = status.token;
                this.orgId = status.orgId;
                this.logged = true;
                this.notifications();
            }
        });
        // logout status
        this._gs.getLogOut().subscribe(status => {
            if (status) {
                this.logged = false;
            }
        });
    }
    ngOnInit() {
        this.getUserData();
    }
    getUserData() {
        this.storage.get("session").then((session) => {
            if (session) {
                this.storage.get("org").then((org) => {
                    if (org) {
                        this.token = session;
                        this.orgId = org;
                        this.logged = true;
                        this.notifications();
                    }
                });
            }
        });
    }
    logIn() {
        let navigationExtras = {
            queryParams: {
                from: 'tabs/tab3'
            }
        };
        this.router.navigate(['login'], navigationExtras);
    }
    doRefresh(ev) {
        this.notifications();
        setTimeout(() => {
            console.log('Async operation has ended');
            ev.target.complete();
        }, 1000);
    }
    notifications() {
        this.loading = true;
        const params = {
            token: this.token,
            orgId: this.orgId
        };
        this._apiService.postRequest(this.url + _config_config__WEBPACK_IMPORTED_MODULE_6__["UNITURL"].allNotifications, params).subscribe((result) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            console.log(result);
            if (result.success) {
                if (result.data.length) {
                    console.log(result.data);
                    this.notificationList = result.data;
                    this.notificationList.reverse();
                }
                setTimeout(() => {
                    this.loading = false;
                }, 1000);
            }
            else {
                this.loading = false;
                this._toast.presentToast(result.message);
            }
        })), (error) => {
            console.log(error.description);
            this.loading = false;
            this._toast.presentToast(error.description);
        };
    }
    markasRead(noti, index) {
        this.markasReaded(noti._id, index);
    }
    markasReaded(_id, index) {
        const params = {
            token: this.token,
            notificationId: _id
        };
        console.log(params);
        this._apiService.postRequest(this.url + '', params).subscribe(result => {
            console.log('@@', result);
        }, (error) => {
            console.log(error.description);
            this._toast.presentToast(error.description);
        });
    }
    archive() {
        console.log('archive');
    }
    onNotiClick(noti, index) {
        console.log(noti);
        setTimeout(() => {
            // noti -->  Place booking
            if (noti.type == "booking") {
                let navigationExtras = {
                    queryParams: {
                        type: "Tenant",
                        from: "tabs/tab3"
                    }
                };
                this.router.navigate(['booking-detail', noti.meta.bookingDetails._id], navigationExtras);
            }
            if (noti.type == "extend") {
                let navigationExtras = {
                    queryParams: {
                        notification: JSON.stringify(noti)
                    }
                };
                this.router.navigate(['select-type'], navigationExtras);
            }
            if (noti.type == 'RequestExtension') {
                let navigationExtras = {
                    queryParams: {
                        notification: JSON.stringify(noti)
                    }
                };
                this.router.navigate(['request-for-extension'], navigationExtras);
            }
            // if (noti.type == "Payment") {
            //   let navigationExtras: NavigationExtras = {
            //     queryParams: {
            //       notification: JSON.stringify(noti)
            //     }
            //   };
            //   this.router.navigate(['payment-for-extension'], navigationExtras);
            // }
        }, 100);
    }
    segmentChanged(ev) {
        console.log(ev.detail.value);
        this.segment = ev.detail.value;
    }
};
Tab3Page.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: src_app_services_api_service_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"] },
    { type: src_app_services_global_service__WEBPACK_IMPORTED_MODULE_4__["GlobalService"] },
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_7__["Storage"] },
    { type: src_app_services_toast_service__WEBPACK_IMPORTED_MODULE_5__["ToastService"] }
];
Tab3Page = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-tab3',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./tab3.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/unitTabs/tab3/tab3.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./tab3.page.scss */ "./src/app/pages/unitTabs/tab3/tab3.page.scss")).default]
    })
], Tab3Page);



/***/ })

}]);
//# sourceMappingURL=unitTabs-tab3-tab3-module-es2015.js.map