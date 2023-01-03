(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["unitTabs-my-spaces-my-spaces-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/unitTabs/my-spaces/my-spaces.page.html":
    /*!****************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/unitTabs/my-spaces/my-spaces.page.html ***!
      \****************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppPagesUnitTabsMySpacesMySpacesPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header class=\"ion-no-border\">\r\n  <ion-toolbar>\r\n    <ion-title class=\"tittle\">My Units</ion-title>\r\n    <ion-buttons slot=\"end\" (click)=\"addSpace()\">\r\n      <ion-button>\r\n        <img src=\"../../../../assets/imgs/ionic-ios-add.png\" />\r\n      </ion-button>\r\n    </ion-buttons>\r\n  </ion-toolbar>\r\n</ion-header>\r\n<ion-content>\r\n  <div *ngIf=\"placesList.length != 0; else notFound\" class=\"content\">\r\n    <div *ngFor=\"let space of placesList\" class=\"ion-no-padding\">\r\n      <ion-grid class=\"card-grid ion-no-padding\">\r\n        <ion-row class=\"ion-no-padding\">\r\n          <ion-col size=\"12\" class=\"ion-no-padding\">\r\n            <ion-card style=\"border-radius: 15px;\" class=\"card_features ion-no-padding\">\r\n              <ion-grid class=\"heading-grid\">\r\n                <ion-row>\r\n                  <ion-col size=\"7\">\r\n                    <h4 style=\"margin-left: 8px;\">{{space.name}}</h4>\r\n                  </ion-col>\r\n                  <ion-col size=\"5\" style=\"text-align: end; margin-top: 5px;\">\r\n                    <span class=\"dot-green\" *ngIf=\"space.publish\"></span>\r\n                    <span class=\"dot-danger\" *ngIf=\"!space.publish\"></span>\r\n                  </ion-col>\r\n                </ion-row>\r\n              </ion-grid>\r\n              <div *ngIf=\"space.images?.length; else noImageFound\">\r\n                <img class=\"spaceimg\" src=\"{{space.images[0]}}\" />\r\n              </div>\r\n              <ng-template #noImageFound>\r\n                <div *ngIf=\"!space.images?.length\">\r\n                  <img src=\"../../../../assets/imgs/dummy_space.png\" />\r\n                </div>\r\n              </ng-template>\r\n              <ion-grid *ngIf=\"space.spaceStatus === 'Complete'\">\r\n                <ion-row>\r\n                  <ion-col size=\"8\">\r\n                    <ion-card-header>\r\n                      <ion-card-subtitle style=\"margin-left: 8px;\">{{space.address}}</ion-card-subtitle>\r\n                    </ion-card-header>\r\n                    <ion-card-content>\r\n                      <div class=\"card-content\" style=\"margin-left: 8px;\">\r\n                        {{space.spaceName}} <span> ({{space.itemToStore}})</span>\r\n                      </div>\r\n                    </ion-card-content>\r\n                  </ion-col>\r\n                  <ion-col size=\"4\" class=\"no-padding\">\r\n                  </ion-col>\r\n                </ion-row>\r\n              </ion-grid>\r\n              <ion-grid *ngIf=\"space.spaceStatus === 'Complete'\">\r\n                <ion-row>\r\n                  <ion-col size=\"8\">\r\n                    <div style=\"margin-top: 10px; margin-left: 8px; margin-bottom: 5px;\">\r\n                      <ion-icon name=\"trash-outline\" color=\"dark\" style=\"font-size: 20px;\" class=\"mr-l\" (click)=\"deleteSpaceAlert(space)\">\r\n                      </ion-icon>\r\n                      <ion-icon name=\"create-outline\" color=\"dark\" style=\"font-size: 20px;\" class=\"mr-l\" (click)=\"editSpace(space)\">\r\n                      </ion-icon>\r\n                      <ion-icon name=\"share-social-outline\" color=\"dark\" style=\"font-size: 20px;\" class=\"mr-l\"\r\n                        (click)=\"shareByFacebook(space)\"></ion-icon>\r\n                    </div>\r\n                  </ion-col>\r\n                  <ion-col size=\"4\">\r\n                    <ion-button shape=\"round\" *ngIf=\"space.publish\" fill=\"outline\" expand=\"block\"\r\n                      (click)=\"publish(space,false)\" color=\"unit-btn\">\r\n                      Unpublish\r\n                    </ion-button>\r\n                    <ion-button shape=\"round\" color=\"primary\" (click)=\"publish(space, true)\" *ngIf=\"!space.publish\"\r\n                      fill=\"outline\" expand=\"block\" color=\"unit-btn\">\r\n                      Publish\r\n                    </ion-button>\r\n                  </ion-col>\r\n                </ion-row>\r\n              </ion-grid>\r\n              <div *ngIf=\"space.spaceStatus === 'Progress'\" (click)=\"inProgress(space)\">\r\n                <ion-card-header>\r\n                </ion-card-header>\r\n                <ion-card-content>\r\n                  <ion-item lines=\"none\" style=\"margin-bottom: 10px;\">\r\n                    <ion-label>\r\n                      <span class=\"finish\">\r\n                        Finish your listing\r\n                      </span>\r\n                      <br>\r\n                      <span class=\"progress-text\">you're {{space.progressPercentage}} % of the way there.</span>\r\n                      <ion-progress-bar color=\"success\" [value]=\"10/100\"></ion-progress-bar>\r\n                    </ion-label>\r\n                    <!-- <ion-icon slot=\"end\" name=\"chevron-forward-sharp\"></ion-icon> -->\r\n                  </ion-item>\r\n                </ion-card-content>\r\n              </div>\r\n            </ion-card>\r\n          </ion-col>\r\n        </ion-row>\r\n      </ion-grid>\r\n    </div>\r\n  </div>\r\n  <ng-template #notFound>\r\n    <h2 class=\"main-heading\" *ngIf=\"userName\">Hi {{userName}} {{lastName}}</h2>\r\n    <h3 class=\"main-titile\" *ngIf=\"userName\">Do you want to add any spaces?</h3>\r\n    <div class=\"ion-padding\">\r\n      <img class=\"dummy_place\" src=\"/assets/imgs/owner_img.png\" />\r\n    </div>\r\n    <div class=\"addplace\">\r\n      <ion-button shape=\"round\" color=\"unit-white\" (click)=\"addSpace()\" fill=\"outline\" expand=\"block\" class=\"new-btn\">\r\n        Add new Space\r\n      </ion-button>\r\n    </div>\r\n  </ng-template>\r\n</ion-content>";
      /***/
    },

    /***/
    "./src/app/pages/unitTabs/my-spaces/my-spaces-routing.module.ts":
    /*!**********************************************************************!*\
      !*** ./src/app/pages/unitTabs/my-spaces/my-spaces-routing.module.ts ***!
      \**********************************************************************/

    /*! exports provided: MySpacesPageRoutingModule */

    /***/
    function srcAppPagesUnitTabsMySpacesMySpacesRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MySpacesPageRoutingModule", function () {
        return MySpacesPageRoutingModule;
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


      var _my_spaces_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./my-spaces.page */
      "./src/app/pages/unitTabs/my-spaces/my-spaces.page.ts");

      var routes = [{
        path: '',
        component: _my_spaces_page__WEBPACK_IMPORTED_MODULE_3__["MySpacesPage"]
      }];

      var MySpacesPageRoutingModule = function MySpacesPageRoutingModule() {
        _classCallCheck(this, MySpacesPageRoutingModule);
      };

      MySpacesPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], MySpacesPageRoutingModule);
      /***/
    },

    /***/
    "./src/app/pages/unitTabs/my-spaces/my-spaces.module.ts":
    /*!**************************************************************!*\
      !*** ./src/app/pages/unitTabs/my-spaces/my-spaces.module.ts ***!
      \**************************************************************/

    /*! exports provided: MySpacesPageModule */

    /***/
    function srcAppPagesUnitTabsMySpacesMySpacesModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MySpacesPageModule", function () {
        return MySpacesPageModule;
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


      var _my_spaces_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./my-spaces-routing.module */
      "./src/app/pages/unitTabs/my-spaces/my-spaces-routing.module.ts");
      /* harmony import */


      var _my_spaces_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./my-spaces.page */
      "./src/app/pages/unitTabs/my-spaces/my-spaces.page.ts");

      var MySpacesPageModule = function MySpacesPageModule() {
        _classCallCheck(this, MySpacesPageModule);
      };

      MySpacesPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _my_spaces_routing_module__WEBPACK_IMPORTED_MODULE_5__["MySpacesPageRoutingModule"]],
        declarations: [_my_spaces_page__WEBPACK_IMPORTED_MODULE_6__["MySpacesPage"]]
      })], MySpacesPageModule);
      /***/
    },

    /***/
    "./src/app/pages/unitTabs/my-spaces/my-spaces.page.scss":
    /*!**************************************************************!*\
      !*** ./src/app/pages/unitTabs/my-spaces/my-spaces.page.scss ***!
      \**************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppPagesUnitTabsMySpacesMySpacesPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "ion-content {\n  --background: transparent;\n  transform: translate3d(0, 0px, 0);\n}\n\n.card-grid {\n  padding-top: 0px !important;\n  padding-bottom: 0px !important;\n}\n\n.card_features {\n  -webkit-margin-start: 10px !important;\n          margin-inline-start: 10px !important;\n  -webkit-margin-end: 10px !important;\n          margin-inline-end: 10px !important;\n}\n\n.card_features ion-col ion-button {\n  font-size: 12px;\n  padding: 3px 5px;\n  color: secondary;\n  font-family: \"helveticaneuebold\";\n  text-transform: capitalize;\n}\n\n.card_features ion-card-header {\n  padding-bottom: 5px !important;\n  padding: 0px !important;\n}\n\n.card_features ion-card-header ion-card-subtitle {\n  text-align: left;\n  color: tertiary;\n  margin-top: 8px;\n  font-size: 14px;\n  font-family: \"medium\";\n  text-transform: capitalize;\n  font-weight: 400;\n}\n\n.card_features ion-card-header ion-card-title {\n  text-align: left;\n  color: tertiary;\n  font-size: 13px;\n}\n\n.card_features ion-card-header ion-card-title span {\n  color: #9b9b9b;\n}\n\n.card_features ion-card-content {\n  padding: 0px !important;\n}\n\n.card_features ion-card-content .card-content {\n  text-align: left !important;\n  color: tertiary;\n  font-size: 11px !important;\n  margin-top: 0px;\n  font-family: \"helveticaneuebold\";\n}\n\n.card_features ion-card-content .card-content span {\n  color: #9b9b9b;\n}\n\n.sc-ion-card-md-h,\n.sc-ion-card-ios-h {\n  margin-top: 0;\n  margin-bottom: 0;\n  -webkit-margin-start: 0;\n  margin-inline-start: 0;\n  -webkit-margin-end: 0;\n  margin-inline-end: 0;\n}\n\n.top-heading {\n  margin-left: 15px;\n  margin-top: 20px;\n  margin-bottom: 0px;\n}\n\n.heading-grid {\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 0;\n}\n\n.heading-grid ion-col .heading {\n  text-align: end;\n}\n\n.heading-grid ion-col h4 {\n  color: \"secondary\";\n  font-size: 19px;\n  font-family: \"helveticaneuebold\";\n  margin-top: 0px;\n}\n\n.heading-grid ion-col ion-badge {\n  font-size: 12px;\n  padding: 7px 20px;\n  border-radius: 15px;\n  font-family: \"helveticaneuebold\";\n  font-weight: 400;\n}\n\n.main-heading {\n  font-size: 22px;\n  color: tertiary;\n  font-family: \"helveticaneuebold\";\n  margin-left: 30px;\n  margin-bottom: 5px;\n  text-transform: capitalize !important;\n}\n\n.main-titile {\n  font-size: 12px;\n  color: tertiary;\n  font-family: \"medium\";\n  margin-left: 30px;\n  margin-top: 5px;\n}\n\n.addplace .new-btn {\n  margin: 0 20px;\n  font-size: 15px;\n  color: tertiary !important;\n  font-family: \"medium\";\n  height: 44px !important;\n  text-transform: capitalize !important;\n}\n\n.dummy_place {\n  display: block;\n  margin: 0 auto;\n}\n\n.mr-l {\n  margin-right: 15px;\n}\n\n.finish {\n  font-size: 14px;\n  color: secondary;\n  font-family: \"medium\";\n}\n\n.progress-text {\n  color: #909090;\n  font-size: 12px;\n  font-family: \"medium\";\n}\n\n.spaceimg {\n  width: 100% !important;\n  height: 180px;\n  -o-object-fit: cover;\n     object-fit: cover;\n}\n\n.content {\n  background-color: secondary;\n  border-radius: 25px 25px 0px 0px;\n  padding-top: 0px;\n  margin-top: 20px;\n  height: 100%;\n}\n\n.tittle {\n  font-size: 16px !important;\n  font-family: 'helveticaneuebold' !important;\n  font-weight: 400 !important;\n}\n\n.dot-green {\n  height: 15px;\n  width: 15px;\n  background-color: #2dd36f;\n  border-radius: 50%;\n  display: inline-block;\n}\n\n.dot-danger {\n  height: 15px;\n  width: 15px;\n  background-color: #eb445a;\n  border-radius: 50%;\n  display: inline-block;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvdW5pdFRhYnMvbXktc3BhY2VzL215LXNwYWNlcy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDSSx5QkFBYTtFQUNiLGlDQUFpQztBQUFyQzs7QUFFRTtFQUNFLDJCQUEyQjtFQUMzQiw4QkFBOEI7QUFDbEM7O0FBQ0U7RUFDRSxxQ0FBb0M7VUFBcEMsb0NBQW9DO0VBQ3BDLG1DQUFrQztVQUFsQyxrQ0FBa0M7QUFFdEM7O0FBSkU7RUFLTSxlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtFQUNoQixnQ0FBZ0M7RUFDaEMsMEJBQTBCO0FBR2xDOztBQVpFO0VBYUksOEJBQThCO0VBQzlCLHVCQUF1QjtBQUc3Qjs7QUFqQkU7RUFnQk0sZ0JBQWdCO0VBQ2hCLGVBQWU7RUFDZixlQUFlO0VBQ2YsZUFBZTtFQUNmLHFCQUFxQjtFQUNyQiwwQkFBMEI7RUFDMUIsZ0JBQWdCO0FBS3hCOztBQTNCRTtFQXlCTSxnQkFBZ0I7RUFDaEIsZUFBZTtFQUNmLGVBQWU7QUFNdkI7O0FBakNFO0VBNkJRLGNBQWM7QUFReEI7O0FBckNFO0VBa0NJLHVCQUF1QjtBQU83Qjs7QUF6Q0U7RUFvQ00sMkJBQTJCO0VBQzNCLGVBQWU7RUFDZiwwQkFBMEI7RUFDMUIsZUFBZTtFQUNmLGdDQUFnQztBQVN4Qzs7QUFqREU7RUEwQ1EsY0FBYztBQVd4Qjs7QUFMRTs7RUFFRSxhQUFhO0VBQ2IsZ0JBQWdCO0VBQ2hCLHVCQUF1QjtFQUN2QixzQkFBc0I7RUFDdEIscUJBQXFCO0VBQ3JCLG9CQUFvQjtBQVF4Qjs7QUFMRTtFQUNFLGlCQUFpQjtFQUNqQixnQkFBZ0I7RUFDaEIsa0JBQWtCO0FBUXRCOztBQUxFO0VBQ0Usa0JBQWtCO0VBQ2xCLE9BQU87RUFDUCxRQUFRO0VBQ1IsTUFBTTtBQVFWOztBQVpFO0VBT00sZUFBZTtBQVN2Qjs7QUFoQkU7RUFVTSxrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLGdDQUFnQztFQUNoQyxlQUFlO0FBVXZCOztBQXZCRTtFQWdCTSxlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLG1CQUFtQjtFQUNuQixnQ0FBZ0M7RUFDaEMsZ0JBQWdCO0FBV3hCOztBQU5FO0VBQ0UsZUFBZTtFQUNmLGVBQWU7RUFDZixnQ0FBZ0M7RUFDaEMsaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixxQ0FBcUM7QUFTekM7O0FBTkU7RUFDRSxlQUFlO0VBQ2YsZUFBZTtFQUNmLHFCQUFxQjtFQUNyQixpQkFBaUI7RUFDakIsZUFBZTtBQVNuQjs7QUFQRTtFQUNFLGNBQWM7RUFDZCxlQUFlO0VBQ2YsMEJBQTBCO0VBQzFCLHFCQUFxQjtFQUNyQix1QkFBdUI7RUFDdkIscUNBQXFDO0FBVXpDOztBQVJFO0VBQ0UsY0FBYztFQUNkLGNBQWM7QUFXbEI7O0FBVEU7RUFDRSxrQkFBa0I7QUFZdEI7O0FBVkU7RUFDRSxlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLHFCQUFxQjtBQWF6Qjs7QUFYRTtFQUNFLGNBQWM7RUFDZCxlQUFlO0VBQ2YscUJBQXFCO0FBY3pCOztBQVhFO0VBQ0Usc0JBQXNCO0VBQ3RCLGFBQWE7RUFDYixvQkFBaUI7S0FBakIsaUJBQWlCO0FBY3JCOztBQVhFO0VBQ0UsMkJBQTJCO0VBQzNCLGdDQUFnQztFQUNoQyxnQkFBZ0I7RUFDaEIsZ0JBQWdCO0VBQ2hCLFlBQVk7QUFjaEI7O0FBWEU7RUFDRSwwQkFBMEI7RUFDMUIsMkNBQTJDO0VBQzNDLDJCQUEyQjtBQWMvQjs7QUFYRTtFQUNFLFlBQVk7RUFDWixXQUFXO0VBQ1gseUJBQXlCO0VBQ3pCLGtCQUFrQjtFQUNsQixxQkFBcUI7QUFjekI7O0FBWEU7RUFDRSxZQUFZO0VBQ1osV0FBVztFQUNYLHlCQUF5QjtFQUN6QixrQkFBa0I7RUFDbEIscUJBQXFCO0FBY3pCIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvdW5pdFRhYnMvbXktc3BhY2VzL215LXNwYWNlcy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuaW9uLWNvbnRlbnQge1xyXG4gICAgLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMHB4LCAwKTtcclxuICB9XHJcbiAgLmNhcmQtZ3JpZCB7XHJcbiAgICBwYWRkaW5nLXRvcDogMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMHB4ICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG4gIC5jYXJkX2ZlYXR1cmVzIHtcclxuICAgIG1hcmdpbi1pbmxpbmUtc3RhcnQ6IDEwcHggIWltcG9ydGFudDtcclxuICAgIG1hcmdpbi1pbmxpbmUtZW5kOiAxMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICBpb24tY29sIHtcclxuICAgICAgaW9uLWJ1dHRvbiB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgICAgIHBhZGRpbmc6IDNweCA1cHg7XHJcbiAgICAgICAgY29sb3I6IHNlY29uZGFyeTtcclxuICAgICAgICBmb250LWZhbWlseTogXCJoZWx2ZXRpY2FuZXVlYm9sZFwiO1xyXG4gICAgICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBpb24tY2FyZC1oZWFkZXIge1xyXG4gICAgICBwYWRkaW5nLWJvdHRvbTogNXB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgIHBhZGRpbmc6IDBweCAhaW1wb3J0YW50O1xyXG4gICAgICBpb24tY2FyZC1zdWJ0aXRsZSB7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgICAgICBjb2xvcjogdGVydGlhcnk7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogOHB4O1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgICBmb250LWZhbWlseTogXCJtZWRpdW1cIjtcclxuICAgICAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcclxuICAgICAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgICB9XHJcbiAgICAgIGlvbi1jYXJkLXRpdGxlIHtcclxuICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgICAgIGNvbG9yOiB0ZXJ0aWFyeTtcclxuICAgICAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgICAgICAgc3BhbiB7XHJcbiAgICAgICAgICBjb2xvcjogIzliOWI5YjtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIGlvbi1jYXJkLWNvbnRlbnQge1xyXG4gICAgICBwYWRkaW5nOiAwcHggIWltcG9ydGFudDtcclxuICAgICAgLmNhcmQtY29udGVudCB7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogbGVmdCAhaW1wb3J0YW50O1xyXG4gICAgICAgIGNvbG9yOiB0ZXJ0aWFyeTtcclxuICAgICAgICBmb250LXNpemU6IDExcHggIWltcG9ydGFudDtcclxuICAgICAgICBtYXJnaW4tdG9wOiAwcHg7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6IFwiaGVsdmV0aWNhbmV1ZWJvbGRcIjtcclxuICAgICAgICBzcGFuIHtcclxuICAgICAgICAgIGNvbG9yOiAjOWI5YjliO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuICBcclxuICAuc2MtaW9uLWNhcmQtbWQtaCxcclxuICAuc2MtaW9uLWNhcmQtaW9zLWgge1xyXG4gICAgbWFyZ2luLXRvcDogMDtcclxuICAgIG1hcmdpbi1ib3R0b206IDA7XHJcbiAgICAtd2Via2l0LW1hcmdpbi1zdGFydDogMDtcclxuICAgIG1hcmdpbi1pbmxpbmUtc3RhcnQ6IDA7XHJcbiAgICAtd2Via2l0LW1hcmdpbi1lbmQ6IDA7XHJcbiAgICBtYXJnaW4taW5saW5lLWVuZDogMDtcclxuICB9XHJcbiAgXHJcbiAgLnRvcC1oZWFkaW5nIHtcclxuICAgIG1hcmdpbi1sZWZ0OiAxNXB4O1xyXG4gICAgbWFyZ2luLXRvcDogMjBweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDBweDtcclxuICB9XHJcbiAgXHJcbiAgLmhlYWRpbmctZ3JpZCB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgcmlnaHQ6IDA7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBpb24tY29sIHtcclxuICAgICAgLmhlYWRpbmcge1xyXG4gICAgICAgIHRleHQtYWxpZ246IGVuZDtcclxuICAgICAgfVxyXG4gICAgICBoNCB7XHJcbiAgICAgICAgY29sb3I6IFwic2Vjb25kYXJ5XCI7XHJcbiAgICAgICAgZm9udC1zaXplOiAxOXB4O1xyXG4gICAgICAgIGZvbnQtZmFtaWx5OiBcImhlbHZldGljYW5ldWVib2xkXCI7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMHB4O1xyXG4gICAgICB9XHJcbiAgICAgIGlvbi1iYWRnZSB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgICAgIHBhZGRpbmc6IDdweCAyMHB4O1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6IFwiaGVsdmV0aWNhbmV1ZWJvbGRcIjtcclxuICAgICAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG4gIFxyXG4gIC5tYWluLWhlYWRpbmcge1xyXG4gICAgZm9udC1zaXplOiAyMnB4O1xyXG4gICAgY29sb3I6IHRlcnRpYXJ5O1xyXG4gICAgZm9udC1mYW1pbHk6IFwiaGVsdmV0aWNhbmV1ZWJvbGRcIjtcclxuICAgIG1hcmdpbi1sZWZ0OiAzMHB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogNXB4O1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemUgIWltcG9ydGFudDtcclxuICB9XHJcbiAgXHJcbiAgLm1haW4tdGl0aWxlIHtcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgIGNvbG9yOiB0ZXJ0aWFyeTtcclxuICAgIGZvbnQtZmFtaWx5OiBcIm1lZGl1bVwiO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDMwcHg7XHJcbiAgICBtYXJnaW4tdG9wOiA1cHg7XHJcbiAgfVxyXG4gIC5hZGRwbGFjZSAubmV3LWJ0biB7XHJcbiAgICBtYXJnaW46IDAgMjBweDtcclxuICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgIGNvbG9yOiB0ZXJ0aWFyeSAhaW1wb3J0YW50O1xyXG4gICAgZm9udC1mYW1pbHk6IFwibWVkaXVtXCI7XHJcbiAgICBoZWlnaHQ6IDQ0cHggIWltcG9ydGFudDtcclxuICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG4gIC5kdW1teV9wbGFjZSB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gIH1cclxuICAubXItbCB7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDE1cHg7XHJcbiAgfVxyXG4gIC5maW5pc2gge1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgY29sb3I6IHNlY29uZGFyeTtcclxuICAgIGZvbnQtZmFtaWx5OiBcIm1lZGl1bVwiO1xyXG4gIH1cclxuICAucHJvZ3Jlc3MtdGV4dCB7XHJcbiAgICBjb2xvcjogIzkwOTA5MDtcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgIGZvbnQtZmFtaWx5OiBcIm1lZGl1bVwiO1xyXG4gIH1cclxuICBcclxuICAuc3BhY2VpbWd7XHJcbiAgICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xyXG4gICAgaGVpZ2h0OiAxODBweDtcclxuICAgIG9iamVjdC1maXQ6IGNvdmVyO1xyXG4gIH1cclxuICBcclxuICAuY29udGVudHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHNlY29uZGFyeTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDI1cHggMjVweCAwcHggMHB4O1xyXG4gICAgcGFkZGluZy10b3A6IDBweDtcclxuICAgIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgICBoZWlnaHQ6IDEwMCU7IFxyXG4gIH1cclxuICBcclxuICAudGl0dGxle1xyXG4gICAgZm9udC1zaXplOiAxNnB4ICFpbXBvcnRhbnQ7XHJcbiAgICBmb250LWZhbWlseTogJ2hlbHZldGljYW5ldWVib2xkJyAhaW1wb3J0YW50O1xyXG4gICAgZm9udC13ZWlnaHQ6IDQwMCAhaW1wb3J0YW50O1xyXG4gIH1cclxuXHJcbiAgLmRvdC1ncmVlbiB7XHJcbiAgICBoZWlnaHQ6IDE1cHg7XHJcbiAgICB3aWR0aDogMTVweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMyZGQzNmY7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgfVxyXG5cclxuICAuZG90LWRhbmdlciB7XHJcbiAgICBoZWlnaHQ6IDE1cHg7XHJcbiAgICB3aWR0aDogMTVweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNlYjQ0NWE7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgfSJdfQ== */";
      /***/
    },

    /***/
    "./src/app/pages/unitTabs/my-spaces/my-spaces.page.ts":
    /*!************************************************************!*\
      !*** ./src/app/pages/unitTabs/my-spaces/my-spaces.page.ts ***!
      \************************************************************/

    /*! exports provided: MySpacesPage */

    /***/
    function srcAppPagesUnitTabsMySpacesMySpacesPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MySpacesPage", function () {
        return MySpacesPage;
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


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var src_app_services_api_service_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/services/api-service.service */
      "./src/app/services/api-service.service.ts");
      /* harmony import */


      var src_app_services_global_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/services/global.service */
      "./src/app/services/global.service.ts");
      /* harmony import */


      var src_app_services_loader_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/app/services/loader.service */
      "./src/app/services/loader.service.ts");
      /* harmony import */


      var _config_config__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../../config/config */
      "./src/app/pages/config/config.ts");
      /* harmony import */


      var _ionic_native_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @ionic-native/social-sharing/ngx */
      "./node_modules/@ionic-native/social-sharing/__ivy_ngcc__/ngx/index.js");
      /* harmony import */


      var _ionic_storage__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @ionic/storage */
      "./node_modules/@ionic/storage/__ivy_ngcc__/fesm2015/ionic-storage.js");
      /* harmony import */


      var src_app_services_toast_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! src/app/services/toast.service */
      "./src/app/services/toast.service.ts");

      var MySpacesPage = /*#__PURE__*/function () {
        function MySpacesPage(_apiService, router, alrtCtrl, _gs, socialSharing, _loader, storage, _toast) {
          var _this = this;

          _classCallCheck(this, MySpacesPage);

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

          this._gs.getUpdatedTabs().subscribe(function (status) {
            if (status) {
              _this.token = status.token;
              _this.orgId = status.orgId;

              _this.getAdditionalInfo();

              _this.getSpaces();
            }
          });

          this._gs.getRefreshScreen().subscribe(function (x) {
            if (x) {
              _this.getAdditionalInfo();

              _this.getSpaces();
            }
          });
        }

        _createClass(MySpacesPage, [{
          key: "getAdditionalInfo",
          value: function getAdditionalInfo() {
            var _this2 = this;

            var params = {
              token: this.token,
              orgId: this.orgId
            };
            this._apiService.postRequest(this.url + _config_config__WEBPACK_IMPORTED_MODULE_7__["UNITURL"].getUserInformation, params).subscribe(function (result) {
              return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this2, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
                return regeneratorRuntime.wrap(function _callee$(_context) {
                  while (1) {
                    switch (_context.prev = _context.next) {
                      case 0:
                        if (result.success) {
                          if (result.data.length == 0) {
                            this.additionalInfo = false;
                          } else {
                            this.additionalInfo = true;
                          }
                        } else {
                          console.log(result);
                        }

                      case 1:
                      case "end":
                        return _context.stop();
                    }
                  }
                }, _callee, this);
              }));
            }), function (error) {
              console.log(error.description);

              _this2._toast.presentToast(error.description);
            };
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {
            this.getUserData();
          }
        }, {
          key: "getUserData",
          value: function getUserData() {
            var _this3 = this;

            this.storage.get("session").then(function (session) {
              if (session) {
                _this3.storage.get("user").then(function (user) {
                  console.log('user', user);
                  _this3.userName = user.firstName;
                  _this3.lastName = user.lastName;
                });

                _this3.storage.get("org").then(function (org) {
                  if (org) {
                    _this3.token = session;
                    _this3.orgId = org;

                    _this3.storage.get("permissions").then(function (permissions) {
                      var havepermission = permissions.includes("unit.space.canRetriveOwn");

                      if (havepermission) {
                        _this3.getSpaces();

                        _this3.getAdditionalInfo();
                      }
                    });
                  }
                });
              }
            });
          }
        }, {
          key: "getSpaces",
          value: function getSpaces() {
            var _this4 = this;

            this._loader.present('Loading Spaces, please wait ...');

            var params = {
              token: this.token,
              orgId: this.orgId
            };
            this._apiService.postRequest(this.url + _config_config__WEBPACK_IMPORTED_MODULE_7__["UNITURL"].myPlaces, params).subscribe(function (result) {
              return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this4, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
                return regeneratorRuntime.wrap(function _callee2$(_context2) {
                  while (1) {
                    switch (_context2.prev = _context2.next) {
                      case 0:
                        this._loader.dismiss();

                        if (result.success) {
                          result.data.list.map(function (x) {
                            if (x.index != x.spaceListingSteps) {
                              x['progressPercentage'] = Math.floor(x.index / x.spaceListingSteps * 100);
                            }
                          });
                          this.placesList = result.data.list;
                        } else {
                          console.log(result);
                        }

                      case 2:
                      case "end":
                        return _context2.stop();
                    }
                  }
                }, _callee2, this);
              }));
            }), function (error) {
              _this4._loader.dismiss();

              console.log(error.description);

              _this4._toast.presentToast(error.description);
            };
          }
        }, {
          key: "addSpace",
          value: function addSpace() {
            var navigationExtras = {
              queryParams: {
                priviousPage: 'tabs/my-spaces'
              }
            };
            this.router.navigate(['add-address'], navigationExtras);
          }
        }, {
          key: "inProgress",
          value: function inProgress(space) {
            console.log(space.index);
            var navigationExtras = {
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
        }, {
          key: "publish",
          value: function publish(space, flag) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
              var _this5 = this;

              var message, alert;
              return regeneratorRuntime.wrap(function _callee3$(_context3) {
                while (1) {
                  switch (_context3.prev = _context3.next) {
                    case 0:
                      if (this.additionalInfo) {
                        _context3.next = 9;
                        break;
                      }

                      message = "Please complete your profile to publish your listing.";
                      _context3.next = 4;
                      return this.alrtCtrl.create({
                        header: 'Profile',
                        message: message,
                        buttons: [{
                          text: 'Cancel',
                          role: 'cancel',
                          cssClass: 'secondary',
                          handler: function handler(blah) {}
                        }, {
                          text: 'ok',
                          handler: function handler() {
                            _this5.addDetails();
                          }
                        }]
                      });

                    case 4:
                      alert = _context3.sent;
                      _context3.next = 7;
                      return alert.present();

                    case 7:
                      _context3.next = 10;
                      break;

                    case 9:
                      this.PublishAlert(space, flag);

                    case 10:
                    case "end":
                      return _context3.stop();
                  }
                }
              }, _callee3, this);
            }));
          }
        }, {
          key: "addDetails",
          value: function addDetails() {
            var navigationExtras = {
              queryParams: {
                priviousPage: 'tabs/my-spaces'
              }
            };
            this.router.navigate(['checkr'], navigationExtras);
          }
        }, {
          key: "PublishAlert",
          value: function PublishAlert(place, flag) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
              var _this6 = this;

              var message, header, alert;
              return regeneratorRuntime.wrap(function _callee4$(_context4) {
                while (1) {
                  switch (_context4.prev = _context4.next) {
                    case 0:
                      message = '';
                      header = '';

                      if (flag == true) {
                        header = 'Publish';
                        message = 'Do you want to publish' + ' ' + place.name + ' ' + '?';
                      } else {
                        header = 'Unpublish';
                        message = 'Do you want to unpublish' + ' ' + place.name + ' ' + '?';
                      }

                      console.log(place);
                      _context4.next = 6;
                      return this.alrtCtrl.create({
                        header: header,
                        message: message,
                        buttons: [{
                          text: 'Cancel',
                          role: 'cancel',
                          cssClass: 'secondary',
                          handler: function handler(blah) {}
                        }, {
                          text: 'ok',
                          handler: function handler() {
                            _this6.spacePublish(place, flag);
                          }
                        }]
                      });

                    case 6:
                      alert = _context4.sent;
                      _context4.next = 9;
                      return alert.present();

                    case 9:
                    case "end":
                      return _context4.stop();
                  }
                }
              }, _callee4, this);
            }));
          }
        }, {
          key: "spacePublish",
          value: function spacePublish(space, flag) {
            var _this7 = this;

            console.log(space);

            if (this.token) {
              var params = {
                token: this.token,
                placeId: space._id,
                publish: flag,
                orgId: this.orgId
              };
              this._apiService.postRequest(this.url + _config_config__WEBPACK_IMPORTED_MODULE_7__["UNITURL"].publishSpace, params).subscribe(function (result) {
                return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this7, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
                  return regeneratorRuntime.wrap(function _callee5$(_context5) {
                    while (1) {
                      switch (_context5.prev = _context5.next) {
                        case 0:
                          console.log(result);

                          if (result.success) {
                            this._toast.presentToast(result.message);

                            this.getSpaces();
                          }

                        case 2:
                        case "end":
                          return _context5.stop();
                      }
                    }
                  }, _callee5, this);
                }));
              }), function (error) {
                console.log(error.description);

                _this7._toast.presentToast(error.description);
              };
            }
          }
        }, {
          key: "shareByFacebook",
          value: function shareByFacebook(place) {
            var id = place._id;
            var navigationExtras = {
              queryParams: {
                special: id
              }
            };
            this.router.navigate(['invite'], navigationExtras);
          } //   shareByFacebook(place){
          //   console.log('place', place);
          //   this.socialSharing.shareViaFacebook(null,null,'https://apps.apple.com/in/app/myrivu/id1250322239').then((res) => {
          //     // Success
          //   }).catch((e) => {
          //     // Error!
          //   });
          // }

        }, {
          key: "editSpace",
          value: function editSpace(place) {
            var id = place._id;
            var navigationExtras = {
              queryParams: {
                special: id
              }
            };
            this.router.navigate(['edit-space'], navigationExtras);
          }
        }, {
          key: "deleteSpaceAlert",
          value: function deleteSpaceAlert(place) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee6() {
              var _this8 = this;

              var alert;
              return regeneratorRuntime.wrap(function _callee6$(_context6) {
                while (1) {
                  switch (_context6.prev = _context6.next) {
                    case 0:
                      _context6.next = 2;
                      return this.alrtCtrl.create({
                        header: 'Delete',
                        message: 'Do you want to delete ' + place.name + '?',
                        buttons: [{
                          text: 'Cancel',
                          role: 'cancel',
                          cssClass: 'secondary',
                          handler: function handler(blah) {}
                        }, {
                          text: 'Delete',
                          handler: function handler() {
                            _this8.deleteSpace(place._id);
                          }
                        }]
                      });

                    case 2:
                      alert = _context6.sent;
                      _context6.next = 5;
                      return alert.present();

                    case 5:
                    case "end":
                      return _context6.stop();
                  }
                }
              }, _callee6, this);
            }));
          }
        }, {
          key: "deleteSpace",
          value: function deleteSpace(id) {
            var _this9 = this;

            var params = {
              token: this.token,
              placeId: id,
              orgId: this.orgId
            };
            this._apiService.postRequest(this.url + _config_config__WEBPACK_IMPORTED_MODULE_7__["UNITURL"].removePlace, params).subscribe(function (result) {
              return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this9, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee7() {
                return regeneratorRuntime.wrap(function _callee7$(_context7) {
                  while (1) {
                    switch (_context7.prev = _context7.next) {
                      case 0:
                        console.log(result);

                        if (result.success) {
                          this._toast.presentToast(result.message);

                          this.getSpaces();
                        }

                      case 2:
                      case "end":
                        return _context7.stop();
                    }
                  }
                }, _callee7, this);
              }));
            }), function (error) {
              console.log(error.description);

              _this9._toast.presentToast(error.description);
            };
          }
        }]);

        return MySpacesPage;
      }();

      MySpacesPage.ctorParameters = function () {
        return [{
          type: src_app_services_api_service_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"]
        }, {
          type: src_app_services_global_service__WEBPACK_IMPORTED_MODULE_5__["GlobalService"]
        }, {
          type: _ionic_native_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_8__["SocialSharing"]
        }, {
          type: src_app_services_loader_service__WEBPACK_IMPORTED_MODULE_6__["LoaderService"]
        }, {
          type: _ionic_storage__WEBPACK_IMPORTED_MODULE_9__["Storage"]
        }, {
          type: src_app_services_toast_service__WEBPACK_IMPORTED_MODULE_10__["ToastService"]
        }];
      };

      MySpacesPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-my-spaces',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./my-spaces.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/unitTabs/my-spaces/my-spaces.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./my-spaces.page.scss */
        "./src/app/pages/unitTabs/my-spaces/my-spaces.page.scss"))["default"]]
      })], MySpacesPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=unitTabs-my-spaces-my-spaces-module-es5.js.map