(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["unitTabs-my-spaces-my-spaces-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/unitTabs/my-spaces/my-spaces.page.html":
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/unitTabs/my-spaces/my-spaces.page.html ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header class=\"ion-no-border\">\r\n  <ion-toolbar>\r\n    <ion-title class=\"tittle\">My Units</ion-title>\r\n    <ion-buttons slot=\"end\" (click)=\"addSpace()\">\r\n      <ion-button>\r\n        <img src=\"../../../../assets/imgs/ionic-ios-add.png\" />\r\n      </ion-button>\r\n    </ion-buttons>\r\n  </ion-toolbar>\r\n</ion-header>\r\n<ion-content>\r\n  <div *ngIf=\"placesList.length != 0; else notFound\" class=\"content\">\r\n    <div *ngFor=\"let space of placesList\" class=\"ion-no-padding\">\r\n      <ion-grid class=\"card-grid ion-no-padding\">\r\n        <ion-row class=\"ion-no-padding\">\r\n          <ion-col size=\"12\" class=\"ion-no-padding\">\r\n            <ion-card style=\"border-radius: 15px;\" class=\"card_features ion-no-padding\">\r\n              <ion-grid class=\"heading-grid\">\r\n                <ion-row>\r\n                  <ion-col size=\"7\">\r\n                    <h4 style=\"margin-left: 8px;\">{{space.name}}</h4>\r\n                  </ion-col>\r\n                  <ion-col size=\"5\" style=\"text-align: end; margin-top: 5px;\">\r\n                    <span class=\"dot-green\" *ngIf=\"space.publish\"></span>\r\n                    <span class=\"dot-danger\" *ngIf=\"!space.publish\"></span>\r\n                  </ion-col>\r\n                </ion-row>\r\n              </ion-grid>\r\n              <div *ngIf=\"space.images?.length; else noImageFound\">\r\n                <img class=\"spaceimg\" src=\"{{space.images[0]}}\" />\r\n              </div>\r\n              <ng-template #noImageFound>\r\n                <div *ngIf=\"!space.images?.length\">\r\n                  <img src=\"../../../../assets/imgs/dummy_space.png\" />\r\n                </div>\r\n              </ng-template>\r\n              <ion-grid *ngIf=\"space.spaceStatus === 'Complete'\">\r\n                <ion-row>\r\n                  <ion-col size=\"8\">\r\n                    <ion-card-header>\r\n                      <ion-card-subtitle style=\"margin-left: 8px;\">{{space.address}}</ion-card-subtitle>\r\n                    </ion-card-header>\r\n                    <ion-card-content>\r\n                      <div class=\"card-content\" style=\"margin-left: 8px;\">\r\n                        {{space.spaceName}} <span> ({{space.itemToStore}})</span>\r\n                      </div>\r\n                    </ion-card-content>\r\n                  </ion-col>\r\n                  <ion-col size=\"4\" class=\"no-padding\">\r\n                  </ion-col>\r\n                </ion-row>\r\n              </ion-grid>\r\n              <ion-grid *ngIf=\"space.spaceStatus === 'Complete'\">\r\n                <ion-row>\r\n                  <ion-col size=\"8\">\r\n                    <div style=\"margin-top: 10px; margin-left: 8px; margin-bottom: 5px;\">\r\n                      <ion-icon name=\"trash-outline\" color=\"dark\" style=\"font-size: 20px;\" class=\"mr-l\" (click)=\"deleteSpaceAlert(space)\">\r\n                      </ion-icon>\r\n                      <ion-icon name=\"create-outline\" color=\"dark\" style=\"font-size: 20px;\" class=\"mr-l\" (click)=\"editSpace(space)\">\r\n                      </ion-icon>\r\n                      <ion-icon name=\"share-social-outline\" color=\"dark\" style=\"font-size: 20px;\" class=\"mr-l\"\r\n                        (click)=\"shareByFacebook(space)\"></ion-icon>\r\n                    </div>\r\n                  </ion-col>\r\n                  <ion-col size=\"4\">\r\n                    <ion-button shape=\"round\" *ngIf=\"space.publish\" fill=\"outline\" expand=\"block\"\r\n                      (click)=\"publish(space,false)\" color=\"unit-btn\">\r\n                      Unpublish\r\n                    </ion-button>\r\n                    <ion-button shape=\"round\" color=\"primary\" (click)=\"publish(space, true)\" *ngIf=\"!space.publish\"\r\n                      fill=\"outline\" expand=\"block\" color=\"unit-btn\">\r\n                      Publish\r\n                    </ion-button>\r\n                  </ion-col>\r\n                </ion-row>\r\n              </ion-grid>\r\n              <div *ngIf=\"space.spaceStatus === 'Progress'\" (click)=\"inProgress(space)\">\r\n                <ion-card-header>\r\n                </ion-card-header>\r\n                <ion-card-content>\r\n                  <ion-item lines=\"none\" style=\"margin-bottom: 10px;\">\r\n                    <ion-label>\r\n                      <span class=\"finish\">\r\n                        Finish your listing\r\n                      </span>\r\n                      <br>\r\n                      <span class=\"progress-text\">you're {{space.progressPercentage}} % of the way there.</span>\r\n                      <ion-progress-bar color=\"success\" [value]=\"10/100\"></ion-progress-bar>\r\n                    </ion-label>\r\n                    <!-- <ion-icon slot=\"end\" name=\"chevron-forward-sharp\"></ion-icon> -->\r\n                  </ion-item>\r\n                </ion-card-content>\r\n              </div>\r\n            </ion-card>\r\n          </ion-col>\r\n        </ion-row>\r\n      </ion-grid>\r\n    </div>\r\n  </div>\r\n  <ng-template #notFound>\r\n    <h2 class=\"main-heading\" *ngIf=\"userName\">Hi {{userName}} {{lastName}}</h2>\r\n    <h3 class=\"main-titile\" *ngIf=\"userName\">Do you want to add any spaces?</h3>\r\n    <div class=\"ion-padding\">\r\n      <img class=\"dummy_place\" src=\"/assets/imgs/owner_img.png\" />\r\n    </div>\r\n    <div class=\"addplace\">\r\n      <ion-button shape=\"round\" color=\"unit-white\" (click)=\"addSpace()\" fill=\"outline\" expand=\"block\" class=\"new-btn\">\r\n        Add new Space\r\n      </ion-button>\r\n    </div>\r\n  </ng-template>\r\n</ion-content>");

/***/ }),

/***/ "./src/app/pages/unitTabs/my-spaces/my-spaces-routing.module.ts":
/*!**********************************************************************!*\
  !*** ./src/app/pages/unitTabs/my-spaces/my-spaces-routing.module.ts ***!
  \**********************************************************************/
/*! exports provided: MySpacesPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MySpacesPageRoutingModule", function() { return MySpacesPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _my_spaces_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./my-spaces.page */ "./src/app/pages/unitTabs/my-spaces/my-spaces.page.ts");




const routes = [
    {
        path: '',
        component: _my_spaces_page__WEBPACK_IMPORTED_MODULE_3__["MySpacesPage"]
    }
];
let MySpacesPageRoutingModule = class MySpacesPageRoutingModule {
};
MySpacesPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], MySpacesPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/unitTabs/my-spaces/my-spaces.module.ts":
/*!**************************************************************!*\
  !*** ./src/app/pages/unitTabs/my-spaces/my-spaces.module.ts ***!
  \**************************************************************/
/*! exports provided: MySpacesPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MySpacesPageModule", function() { return MySpacesPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _my_spaces_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./my-spaces-routing.module */ "./src/app/pages/unitTabs/my-spaces/my-spaces-routing.module.ts");
/* harmony import */ var _my_spaces_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./my-spaces.page */ "./src/app/pages/unitTabs/my-spaces/my-spaces.page.ts");







let MySpacesPageModule = class MySpacesPageModule {
};
MySpacesPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _my_spaces_routing_module__WEBPACK_IMPORTED_MODULE_5__["MySpacesPageRoutingModule"]
        ],
        declarations: [_my_spaces_page__WEBPACK_IMPORTED_MODULE_6__["MySpacesPage"]]
    })
], MySpacesPageModule);



/***/ }),

/***/ "./src/app/pages/unitTabs/my-spaces/my-spaces.page.scss":
/*!**************************************************************!*\
  !*** ./src/app/pages/unitTabs/my-spaces/my-spaces.page.scss ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-content {\n  --background: transparent;\n  transform: translate3d(0, 0px, 0);\n}\n\n.card-grid {\n  padding-top: 0px !important;\n  padding-bottom: 0px !important;\n}\n\n.card_features {\n  -webkit-margin-start: 10px !important;\n          margin-inline-start: 10px !important;\n  -webkit-margin-end: 10px !important;\n          margin-inline-end: 10px !important;\n}\n\n.card_features ion-col ion-button {\n  font-size: 12px;\n  padding: 3px 5px;\n  color: secondary;\n  font-family: \"helveticaneuebold\";\n  text-transform: capitalize;\n}\n\n.card_features ion-card-header {\n  padding-bottom: 5px !important;\n  padding: 0px !important;\n}\n\n.card_features ion-card-header ion-card-subtitle {\n  text-align: left;\n  color: tertiary;\n  margin-top: 8px;\n  font-size: 14px;\n  font-family: \"medium\";\n  text-transform: capitalize;\n  font-weight: 400;\n}\n\n.card_features ion-card-header ion-card-title {\n  text-align: left;\n  color: tertiary;\n  font-size: 13px;\n}\n\n.card_features ion-card-header ion-card-title span {\n  color: #9b9b9b;\n}\n\n.card_features ion-card-content {\n  padding: 0px !important;\n}\n\n.card_features ion-card-content .card-content {\n  text-align: left !important;\n  color: tertiary;\n  font-size: 11px !important;\n  margin-top: 0px;\n  font-family: \"helveticaneuebold\";\n}\n\n.card_features ion-card-content .card-content span {\n  color: #9b9b9b;\n}\n\n.sc-ion-card-md-h,\n.sc-ion-card-ios-h {\n  margin-top: 0;\n  margin-bottom: 0;\n  -webkit-margin-start: 0;\n  margin-inline-start: 0;\n  -webkit-margin-end: 0;\n  margin-inline-end: 0;\n}\n\n.top-heading {\n  margin-left: 15px;\n  margin-top: 20px;\n  margin-bottom: 0px;\n}\n\n.heading-grid {\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 0;\n}\n\n.heading-grid ion-col .heading {\n  text-align: end;\n}\n\n.heading-grid ion-col h4 {\n  color: \"secondary\";\n  font-size: 19px;\n  font-family: \"helveticaneuebold\";\n  margin-top: 0px;\n}\n\n.heading-grid ion-col ion-badge {\n  font-size: 12px;\n  padding: 7px 20px;\n  border-radius: 15px;\n  font-family: \"helveticaneuebold\";\n  font-weight: 400;\n}\n\n.main-heading {\n  font-size: 22px;\n  color: tertiary;\n  font-family: \"helveticaneuebold\";\n  margin-left: 30px;\n  margin-bottom: 5px;\n  text-transform: capitalize !important;\n}\n\n.main-titile {\n  font-size: 12px;\n  color: tertiary;\n  font-family: \"medium\";\n  margin-left: 30px;\n  margin-top: 5px;\n}\n\n.addplace .new-btn {\n  margin: 0 20px;\n  font-size: 15px;\n  color: tertiary !important;\n  font-family: \"medium\";\n  height: 44px !important;\n  text-transform: capitalize !important;\n}\n\n.dummy_place {\n  display: block;\n  margin: 0 auto;\n}\n\n.mr-l {\n  margin-right: 15px;\n}\n\n.finish {\n  font-size: 14px;\n  color: secondary;\n  font-family: \"medium\";\n}\n\n.progress-text {\n  color: #909090;\n  font-size: 12px;\n  font-family: \"medium\";\n}\n\n.spaceimg {\n  width: 100% !important;\n  height: 180px;\n  -o-object-fit: cover;\n     object-fit: cover;\n}\n\n.content {\n  background-color: secondary;\n  border-radius: 25px 25px 0px 0px;\n  padding-top: 0px;\n  margin-top: 20px;\n  height: 100%;\n}\n\n.tittle {\n  font-size: 16px !important;\n  font-family: 'helveticaneuebold' !important;\n  font-weight: 400 !important;\n}\n\n.dot-green {\n  height: 15px;\n  width: 15px;\n  background-color: #2dd36f;\n  border-radius: 50%;\n  display: inline-block;\n}\n\n.dot-danger {\n  height: 15px;\n  width: 15px;\n  background-color: #eb445a;\n  border-radius: 50%;\n  display: inline-block;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvdW5pdFRhYnMvbXktc3BhY2VzL215LXNwYWNlcy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDSSx5QkFBYTtFQUNiLGlDQUFpQztBQUFyQzs7QUFFRTtFQUNFLDJCQUEyQjtFQUMzQiw4QkFBOEI7QUFDbEM7O0FBQ0U7RUFDRSxxQ0FBb0M7VUFBcEMsb0NBQW9DO0VBQ3BDLG1DQUFrQztVQUFsQyxrQ0FBa0M7QUFFdEM7O0FBSkU7RUFLTSxlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtFQUNoQixnQ0FBZ0M7RUFDaEMsMEJBQTBCO0FBR2xDOztBQVpFO0VBYUksOEJBQThCO0VBQzlCLHVCQUF1QjtBQUc3Qjs7QUFqQkU7RUFnQk0sZ0JBQWdCO0VBQ2hCLGVBQWU7RUFDZixlQUFlO0VBQ2YsZUFBZTtFQUNmLHFCQUFxQjtFQUNyQiwwQkFBMEI7RUFDMUIsZ0JBQWdCO0FBS3hCOztBQTNCRTtFQXlCTSxnQkFBZ0I7RUFDaEIsZUFBZTtFQUNmLGVBQWU7QUFNdkI7O0FBakNFO0VBNkJRLGNBQWM7QUFReEI7O0FBckNFO0VBa0NJLHVCQUF1QjtBQU83Qjs7QUF6Q0U7RUFvQ00sMkJBQTJCO0VBQzNCLGVBQWU7RUFDZiwwQkFBMEI7RUFDMUIsZUFBZTtFQUNmLGdDQUFnQztBQVN4Qzs7QUFqREU7RUEwQ1EsY0FBYztBQVd4Qjs7QUFMRTs7RUFFRSxhQUFhO0VBQ2IsZ0JBQWdCO0VBQ2hCLHVCQUF1QjtFQUN2QixzQkFBc0I7RUFDdEIscUJBQXFCO0VBQ3JCLG9CQUFvQjtBQVF4Qjs7QUFMRTtFQUNFLGlCQUFpQjtFQUNqQixnQkFBZ0I7RUFDaEIsa0JBQWtCO0FBUXRCOztBQUxFO0VBQ0Usa0JBQWtCO0VBQ2xCLE9BQU87RUFDUCxRQUFRO0VBQ1IsTUFBTTtBQVFWOztBQVpFO0VBT00sZUFBZTtBQVN2Qjs7QUFoQkU7RUFVTSxrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLGdDQUFnQztFQUNoQyxlQUFlO0FBVXZCOztBQXZCRTtFQWdCTSxlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLG1CQUFtQjtFQUNuQixnQ0FBZ0M7RUFDaEMsZ0JBQWdCO0FBV3hCOztBQU5FO0VBQ0UsZUFBZTtFQUNmLGVBQWU7RUFDZixnQ0FBZ0M7RUFDaEMsaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixxQ0FBcUM7QUFTekM7O0FBTkU7RUFDRSxlQUFlO0VBQ2YsZUFBZTtFQUNmLHFCQUFxQjtFQUNyQixpQkFBaUI7RUFDakIsZUFBZTtBQVNuQjs7QUFQRTtFQUNFLGNBQWM7RUFDZCxlQUFlO0VBQ2YsMEJBQTBCO0VBQzFCLHFCQUFxQjtFQUNyQix1QkFBdUI7RUFDdkIscUNBQXFDO0FBVXpDOztBQVJFO0VBQ0UsY0FBYztFQUNkLGNBQWM7QUFXbEI7O0FBVEU7RUFDRSxrQkFBa0I7QUFZdEI7O0FBVkU7RUFDRSxlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLHFCQUFxQjtBQWF6Qjs7QUFYRTtFQUNFLGNBQWM7RUFDZCxlQUFlO0VBQ2YscUJBQXFCO0FBY3pCOztBQVhFO0VBQ0Usc0JBQXNCO0VBQ3RCLGFBQWE7RUFDYixvQkFBaUI7S0FBakIsaUJBQWlCO0FBY3JCOztBQVhFO0VBQ0UsMkJBQTJCO0VBQzNCLGdDQUFnQztFQUNoQyxnQkFBZ0I7RUFDaEIsZ0JBQWdCO0VBQ2hCLFlBQVk7QUFjaEI7O0FBWEU7RUFDRSwwQkFBMEI7RUFDMUIsMkNBQTJDO0VBQzNDLDJCQUEyQjtBQWMvQjs7QUFYRTtFQUNFLFlBQVk7RUFDWixXQUFXO0VBQ1gseUJBQXlCO0VBQ3pCLGtCQUFrQjtFQUNsQixxQkFBcUI7QUFjekI7O0FBWEU7RUFDRSxZQUFZO0VBQ1osV0FBVztFQUNYLHlCQUF5QjtFQUN6QixrQkFBa0I7RUFDbEIscUJBQXFCO0FBY3pCIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvdW5pdFRhYnMvbXktc3BhY2VzL215LXNwYWNlcy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuaW9uLWNvbnRlbnQge1xyXG4gICAgLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMHB4LCAwKTtcclxuICB9XHJcbiAgLmNhcmQtZ3JpZCB7XHJcbiAgICBwYWRkaW5nLXRvcDogMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMHB4ICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG4gIC5jYXJkX2ZlYXR1cmVzIHtcclxuICAgIG1hcmdpbi1pbmxpbmUtc3RhcnQ6IDEwcHggIWltcG9ydGFudDtcclxuICAgIG1hcmdpbi1pbmxpbmUtZW5kOiAxMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICBpb24tY29sIHtcclxuICAgICAgaW9uLWJ1dHRvbiB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgICAgIHBhZGRpbmc6IDNweCA1cHg7XHJcbiAgICAgICAgY29sb3I6IHNlY29uZGFyeTtcclxuICAgICAgICBmb250LWZhbWlseTogXCJoZWx2ZXRpY2FuZXVlYm9sZFwiO1xyXG4gICAgICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBpb24tY2FyZC1oZWFkZXIge1xyXG4gICAgICBwYWRkaW5nLWJvdHRvbTogNXB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgIHBhZGRpbmc6IDBweCAhaW1wb3J0YW50O1xyXG4gICAgICBpb24tY2FyZC1zdWJ0aXRsZSB7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgICAgICBjb2xvcjogdGVydGlhcnk7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogOHB4O1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgICBmb250LWZhbWlseTogXCJtZWRpdW1cIjtcclxuICAgICAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcclxuICAgICAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgICB9XHJcbiAgICAgIGlvbi1jYXJkLXRpdGxlIHtcclxuICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgICAgIGNvbG9yOiB0ZXJ0aWFyeTtcclxuICAgICAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgICAgICAgc3BhbiB7XHJcbiAgICAgICAgICBjb2xvcjogIzliOWI5YjtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIGlvbi1jYXJkLWNvbnRlbnQge1xyXG4gICAgICBwYWRkaW5nOiAwcHggIWltcG9ydGFudDtcclxuICAgICAgLmNhcmQtY29udGVudCB7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogbGVmdCAhaW1wb3J0YW50O1xyXG4gICAgICAgIGNvbG9yOiB0ZXJ0aWFyeTtcclxuICAgICAgICBmb250LXNpemU6IDExcHggIWltcG9ydGFudDtcclxuICAgICAgICBtYXJnaW4tdG9wOiAwcHg7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6IFwiaGVsdmV0aWNhbmV1ZWJvbGRcIjtcclxuICAgICAgICBzcGFuIHtcclxuICAgICAgICAgIGNvbG9yOiAjOWI5YjliO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuICBcclxuICAuc2MtaW9uLWNhcmQtbWQtaCxcclxuICAuc2MtaW9uLWNhcmQtaW9zLWgge1xyXG4gICAgbWFyZ2luLXRvcDogMDtcclxuICAgIG1hcmdpbi1ib3R0b206IDA7XHJcbiAgICAtd2Via2l0LW1hcmdpbi1zdGFydDogMDtcclxuICAgIG1hcmdpbi1pbmxpbmUtc3RhcnQ6IDA7XHJcbiAgICAtd2Via2l0LW1hcmdpbi1lbmQ6IDA7XHJcbiAgICBtYXJnaW4taW5saW5lLWVuZDogMDtcclxuICB9XHJcbiAgXHJcbiAgLnRvcC1oZWFkaW5nIHtcclxuICAgIG1hcmdpbi1sZWZ0OiAxNXB4O1xyXG4gICAgbWFyZ2luLXRvcDogMjBweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDBweDtcclxuICB9XHJcbiAgXHJcbiAgLmhlYWRpbmctZ3JpZCB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgcmlnaHQ6IDA7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBpb24tY29sIHtcclxuICAgICAgLmhlYWRpbmcge1xyXG4gICAgICAgIHRleHQtYWxpZ246IGVuZDtcclxuICAgICAgfVxyXG4gICAgICBoNCB7XHJcbiAgICAgICAgY29sb3I6IFwic2Vjb25kYXJ5XCI7XHJcbiAgICAgICAgZm9udC1zaXplOiAxOXB4O1xyXG4gICAgICAgIGZvbnQtZmFtaWx5OiBcImhlbHZldGljYW5ldWVib2xkXCI7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMHB4O1xyXG4gICAgICB9XHJcbiAgICAgIGlvbi1iYWRnZSB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgICAgIHBhZGRpbmc6IDdweCAyMHB4O1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6IFwiaGVsdmV0aWNhbmV1ZWJvbGRcIjtcclxuICAgICAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG4gIFxyXG4gIC5tYWluLWhlYWRpbmcge1xyXG4gICAgZm9udC1zaXplOiAyMnB4O1xyXG4gICAgY29sb3I6IHRlcnRpYXJ5O1xyXG4gICAgZm9udC1mYW1pbHk6IFwiaGVsdmV0aWNhbmV1ZWJvbGRcIjtcclxuICAgIG1hcmdpbi1sZWZ0OiAzMHB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogNXB4O1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemUgIWltcG9ydGFudDtcclxuICB9XHJcbiAgXHJcbiAgLm1haW4tdGl0aWxlIHtcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgIGNvbG9yOiB0ZXJ0aWFyeTtcclxuICAgIGZvbnQtZmFtaWx5OiBcIm1lZGl1bVwiO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDMwcHg7XHJcbiAgICBtYXJnaW4tdG9wOiA1cHg7XHJcbiAgfVxyXG4gIC5hZGRwbGFjZSAubmV3LWJ0biB7XHJcbiAgICBtYXJnaW46IDAgMjBweDtcclxuICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgIGNvbG9yOiB0ZXJ0aWFyeSAhaW1wb3J0YW50O1xyXG4gICAgZm9udC1mYW1pbHk6IFwibWVkaXVtXCI7XHJcbiAgICBoZWlnaHQ6IDQ0cHggIWltcG9ydGFudDtcclxuICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG4gIC5kdW1teV9wbGFjZSB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gIH1cclxuICAubXItbCB7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDE1cHg7XHJcbiAgfVxyXG4gIC5maW5pc2gge1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgY29sb3I6IHNlY29uZGFyeTtcclxuICAgIGZvbnQtZmFtaWx5OiBcIm1lZGl1bVwiO1xyXG4gIH1cclxuICAucHJvZ3Jlc3MtdGV4dCB7XHJcbiAgICBjb2xvcjogIzkwOTA5MDtcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgIGZvbnQtZmFtaWx5OiBcIm1lZGl1bVwiO1xyXG4gIH1cclxuICBcclxuICAuc3BhY2VpbWd7XHJcbiAgICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xyXG4gICAgaGVpZ2h0OiAxODBweDtcclxuICAgIG9iamVjdC1maXQ6IGNvdmVyO1xyXG4gIH1cclxuICBcclxuICAuY29udGVudHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHNlY29uZGFyeTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDI1cHggMjVweCAwcHggMHB4O1xyXG4gICAgcGFkZGluZy10b3A6IDBweDtcclxuICAgIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgICBoZWlnaHQ6IDEwMCU7IFxyXG4gIH1cclxuICBcclxuICAudGl0dGxle1xyXG4gICAgZm9udC1zaXplOiAxNnB4ICFpbXBvcnRhbnQ7XHJcbiAgICBmb250LWZhbWlseTogJ2hlbHZldGljYW5ldWVib2xkJyAhaW1wb3J0YW50O1xyXG4gICAgZm9udC13ZWlnaHQ6IDQwMCAhaW1wb3J0YW50O1xyXG4gIH1cclxuXHJcbiAgLmRvdC1ncmVlbiB7XHJcbiAgICBoZWlnaHQ6IDE1cHg7XHJcbiAgICB3aWR0aDogMTVweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMyZGQzNmY7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgfVxyXG5cclxuICAuZG90LWRhbmdlciB7XHJcbiAgICBoZWlnaHQ6IDE1cHg7XHJcbiAgICB3aWR0aDogMTVweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNlYjQ0NWE7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgfSJdfQ== */");

/***/ }),

/***/ "./src/app/pages/unitTabs/my-spaces/my-spaces.page.ts":
/*!************************************************************!*\
  !*** ./src/app/pages/unitTabs/my-spaces/my-spaces.page.ts ***!
  \************************************************************/
/*! exports provided: MySpacesPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MySpacesPage", function() { return MySpacesPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var src_app_services_api_service_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/api-service.service */ "./src/app/services/api-service.service.ts");
/* harmony import */ var src_app_services_global_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/global.service */ "./src/app/services/global.service.ts");
/* harmony import */ var src_app_services_loader_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/loader.service */ "./src/app/services/loader.service.ts");
/* harmony import */ var _config_config__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../config/config */ "./src/app/pages/config/config.ts");
/* harmony import */ var _ionic_native_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic-native/social-sharing/ngx */ "./node_modules/@ionic-native/social-sharing/__ivy_ngcc__/ngx/index.js");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/__ivy_ngcc__/fesm2015/ionic-storage.js");
/* harmony import */ var src_app_services_toast_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/services/toast.service */ "./src/app/services/toast.service.ts");











let MySpacesPage = class MySpacesPage {
    constructor(_apiService, router, alrtCtrl, _gs, socialSharing, _loader, storage, _toast) {
        this._apiService = _apiService;
        this.router = router;
        this.alrtCtrl = alrtCtrl;
        this._gs = _gs;
        this.socialSharing = socialSharing;
        this._loader = _loader;
        this.storage = storage;
        this._toast = _toast;
        this.url = _config_config__WEBPACK_IMPORTED_MODULE_7__["config"].url;
        this.placesList = [];
        this.userName = '';
        this.additionalInfo = false;
        this._gs.getUpdatedTabs().subscribe(status => {
            if (status) {
                this.token = status.token;
                this.orgId = status.orgId;
                this.getAdditionalInfo();
                this.getSpaces();
            }
        });
        this._gs.getRefreshScreen().subscribe(x => {
            if (x) {
                this.getAdditionalInfo();
                this.getSpaces();
            }
        });
    }
    getAdditionalInfo() {
        const params = {
            token: this.token,
            orgId: this.orgId
        };
        this._apiService.postRequest(this.url + _config_config__WEBPACK_IMPORTED_MODULE_7__["UNITURL"].getUserInformation, params).subscribe((result) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (result.success) {
                if (result.data.length == 0) {
                    this.additionalInfo = false;
                }
                else {
                    this.additionalInfo = true;
                }
            }
            else {
                console.log(result);
            }
        })), (error) => {
            console.log(error.description);
            this._toast.presentToast(error.description);
        };
    }
    ngOnInit() {
        this.getUserData();
    }
    getUserData() {
        this.storage.get("session").then((session) => {
            if (session) {
                this.storage.get("user").then((user) => {
                    console.log('user', user);
                    this.userName = user.firstName;
                    this.lastName = user.lastName;
                });
                this.storage.get("org").then((org) => {
                    if (org) {
                        this.token = session;
                        this.orgId = org;
                        this.storage.get("permissions").then((permissions) => {
                            let havepermission = permissions.includes("unit.space.canRetriveOwn");
                            if (havepermission) {
                                this.getSpaces();
                                this.getAdditionalInfo();
                            }
                        });
                    }
                });
            }
        });
    }
    getSpaces() {
        this._loader.present('Loading Spaces, please wait ...');
        const params = {
            token: this.token,
            orgId: this.orgId
        };
        this._apiService.postRequest(this.url + _config_config__WEBPACK_IMPORTED_MODULE_7__["UNITURL"].myPlaces, params).subscribe((result) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this._loader.dismiss();
            if (result.success) {
                result.data.list.map(x => {
                    if (x.index != x.spaceListingSteps) {
                        x['progressPercentage'] = Math.floor(x.index / x.spaceListingSteps * 100);
                    }
                });
                this.placesList = result.data.list;
            }
            else {
                console.log(result);
            }
        })), (error) => {
            this._loader.dismiss();
            console.log(error.description);
            this._toast.presentToast(error.description);
        };
    }
    addSpace() {
        let navigationExtras = {
            queryParams: {
                priviousPage: 'tabs/my-spaces'
            }
        };
        this.router.navigate(['add-address'], navigationExtras);
    }
    inProgress(space) {
        console.log(space.index);
        let navigationExtras = {
            queryParams: {
                spaceDetails: JSON.stringify(space),
                priviousPage: 'tabs/my-spaces'
            }
        };
        console.log(space.index);
        if (space.index == 1) {
            this.router.navigate(['space-properties'], navigationExtras);
        }
        if (space.index == 2) {
            this.router.navigate(['space-description'], navigationExtras);
        }
        if (space.index == 3) {
            this.router.navigate(['space-features'], navigationExtras);
        }
        if (space.index == 4) {
            this.router.navigate(['space-publish'], navigationExtras);
        }
    }
    publish(space, flag) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (!this.additionalInfo) {
                let message = `Please complete your profile to publish your listing.`;
                const alert = yield this.alrtCtrl.create({
                    header: 'Profile',
                    message: message,
                    buttons: [
                        {
                            text: 'Cancel',
                            role: 'cancel',
                            cssClass: 'secondary',
                            handler: (blah) => { }
                        }, {
                            text: 'ok',
                            handler: () => {
                                this.addDetails();
                            }
                        }
                    ]
                });
                yield alert.present();
            }
            else {
                this.PublishAlert(space, flag);
            }
        });
    }
    addDetails() {
        let navigationExtras = {
            queryParams: {
                priviousPage: 'tabs/my-spaces'
            }
        };
        this.router.navigate(['checkr'], navigationExtras);
    }
    PublishAlert(place, flag) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let message = '';
            let header = '';
            if (flag == true) {
                header = 'Publish';
                message = 'Do you want to publish' + ' ' + place.name + ' ' + '?';
            }
            else {
                header = 'Unpublish';
                message = 'Do you want to unpublish' + ' ' + place.name + ' ' + '?';
            }
            console.log(place);
            const alert = yield this.alrtCtrl.create({
                header: header,
                message: message,
                buttons: [
                    {
                        text: 'Cancel',
                        role: 'cancel',
                        cssClass: 'secondary',
                        handler: (blah) => { }
                    }, {
                        text: 'ok',
                        handler: () => {
                            this.spacePublish(place, flag);
                        }
                    }
                ]
            });
            yield alert.present();
        });
    }
    spacePublish(space, flag) {
        console.log(space);
        if (this.token) {
            const params = {
                token: this.token,
                placeId: space._id,
                publish: flag,
                orgId: this.orgId
            };
            this._apiService.postRequest(this.url + _config_config__WEBPACK_IMPORTED_MODULE_7__["UNITURL"].publishSpace, params).subscribe((result) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                console.log(result);
                if (result.success) {
                    this._toast.presentToast(result.message);
                    this.getSpaces();
                }
            })), (error) => {
                console.log(error.description);
                this._toast.presentToast(error.description);
            };
        }
    }
    shareByFacebook(place) {
        let id = place._id;
        let navigationExtras = {
            queryParams: {
                special: id
            }
        };
        this.router.navigate(['invite'], navigationExtras);
    }
    //   shareByFacebook(place){
    //   console.log('place', place);
    //   this.socialSharing.shareViaFacebook(null,null,'https://apps.apple.com/in/app/myrivu/id1250322239').then((res) => {
    //     // Success
    //   }).catch((e) => {
    //     // Error!
    //   });
    // }
    editSpace(place) {
        let id = place._id;
        let navigationExtras = {
            queryParams: {
                special: id
            }
        };
        this.router.navigate(['edit-space'], navigationExtras);
    }
    deleteSpaceAlert(place) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const alert = yield this.alrtCtrl.create({
                header: 'Delete',
                message: 'Do you want to delete ' + place.name + '?',
                buttons: [
                    {
                        text: 'Cancel',
                        role: 'cancel',
                        cssClass: 'secondary',
                        handler: (blah) => { }
                    }, {
                        text: 'Delete',
                        handler: () => {
                            this.deleteSpace(place._id);
                        }
                    }
                ]
            });
            yield alert.present();
        });
    }
    deleteSpace(id) {
        const params = {
            token: this.token,
            placeId: id,
            orgId: this.orgId
        };
        this._apiService.postRequest(this.url + _config_config__WEBPACK_IMPORTED_MODULE_7__["UNITURL"].removePlace, params).subscribe((result) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            console.log(result);
            if (result.success) {
                this._toast.presentToast(result.message);
                this.getSpaces();
            }
        })), (error) => {
            console.log(error.description);
            this._toast.presentToast(error.description);
        };
    }
};
MySpacesPage.ctorParameters = () => [
    { type: src_app_services_api_service_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"] },
    { type: src_app_services_global_service__WEBPACK_IMPORTED_MODULE_5__["GlobalService"] },
    { type: _ionic_native_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_8__["SocialSharing"] },
    { type: src_app_services_loader_service__WEBPACK_IMPORTED_MODULE_6__["LoaderService"] },
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_9__["Storage"] },
    { type: src_app_services_toast_service__WEBPACK_IMPORTED_MODULE_10__["ToastService"] }
];
MySpacesPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-my-spaces',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./my-spaces.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/unitTabs/my-spaces/my-spaces.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./my-spaces.page.scss */ "./src/app/pages/unitTabs/my-spaces/my-spaces.page.scss")).default]
    })
], MySpacesPage);



/***/ })

}]);
//# sourceMappingURL=unitTabs-my-spaces-my-spaces-module-es2015.js.map