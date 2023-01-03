(function () {
  function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

  function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

  function _iterableToArrayLimit(arr, i) { var _i = arr && (typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]); if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

  function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["unitTabs-tab1-tab1-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/component/shared-space-type-slider/shared-space-type-slider.component.html":
    /*!**********************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/component/shared-space-type-slider/shared-space-type-slider.component.html ***!
      \**********************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppComponentSharedSpaceTypeSliderSharedSpaceTypeSliderComponentHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-slides [options]=\"options\">\r\n    <ion-slide *ngFor=\"let item of spaces\" (click)=\"spaceClick(item)\">\r\n        <ion-row>\r\n            <ion-row>\r\n                <ion-col>\r\n                    <div class=\"main\">\r\n                        <img class=\"img-spacetype\" *ngIf=\"item?.images?.length; else noImage\"\r\n                            src=\"{{item.images[0]}}\" />\r\n                        <ng-template #noImage>\r\n                            <img class=\"img-spacetype\" src=\"../../../../assets/imgs/dummys.png\"/>\r\n                        </ng-template>\r\n                    </div>\r\n                    <span class=\"space-span\"\r\n                        [ngStyle]=\"{'color':item.status === true ? 'red' : '' }\">{{item.spaceType}}</span>\r\n                </ion-col>\r\n            </ion-row>\r\n        </ion-row>\r\n    </ion-slide>\r\n</ion-slides>\r\n<div class=\"clear\" *ngIf=\"clearFilter\">\r\n    <p>\r\n        <a style=\"color: red;\" (click)=\"clearFilters()\">clear filters </a>\r\n    </p>\r\n</div>";
      /***/
    },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/component/unit-listing/unit-listing.component.html":
    /*!**********************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/component/unit-listing/unit-listing.component.html ***!
      \**********************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppComponentUnitListingUnitListingComponentHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<!-- <div style=\"position: absolute;top: 42%;left: 0px;font-size: 25px;z-index: 2;\" (click)=\"slidePrev()\"\r\n  *ngIf=\"units.length > 1\">\r\n  <ion-icon name=\"chevron-back-outline\" color=\"unit-btn\"></ion-icon>\r\n</div>\r\n<div style=\"position: absolute;top: 42%;right: 0px;font-size: 25px;z-index: 2;\" (click)=\"slideNext()\"\r\n  *ngIf=\"units.length > 1\">\r\n  <ion-icon name=\"chevron-forward-outline\" color=\"unit-btn\"></ion-icon>\r\n</div> -->\r\n  <ion-slides #slides *ngIf=\"units.length; else noPlaces\" [options]=\"slideOpts\">\r\n    <ion-slide *ngFor=\"let item of units\" (click)=\"place(item)\"\r\n      style=\"width: 100px; height: 370px; border: 2px solid #f8f8f8\">\r\n      <ion-grid class=\"card-grid\">\r\n        <ion-row>\r\n          <ion-col>\r\n            <ion-card class=\"card_features ion-no-padding\">\r\n              <img *ngIf=\"item?.images?.length; else noimage\" src=\"{{item.images[0]}}\" />\r\n              <ng-template #noimage>\r\n                <img src=\"../../../../assets/imgs/dummy_space1.png\" />\r\n              </ng-template>\r\n              <ion-card-header>\r\n                <ion-card-subtitle>{{item?.name}}</ion-card-subtitle>\r\n                <ion-card-title>{{item?.spaceName}} ({{item?.storedItemInfo?.name}})</ion-card-title>\r\n              </ion-card-header>\r\n              <ion-card-content class=\"no-padding\">\r\n                <div class=\"card-content\">\r\n                  ${{item?.pricing?.daily}}/<span>day</span>\r\n\r\n                  <ion-icon name=\"share-social-outline\" color=\"dark\" style=\"font-size: 20px;\" class=\"mr-l\"\r\n                  (click)=\"shareByFacebook(space)\"></ion-icon>\r\n\r\n                </div>\r\n              </ion-card-content>\r\n            </ion-card>\r\n          </ion-col>\r\n        </ion-row>\r\n      </ion-grid>\r\n    </ion-slide>\r\n  </ion-slides>\r\n  <ng-template #noPlaces>\r\n    <div class=\"no-item\">\r\n      <img src=\"../../../../assets/imgs/emptyList.png\" />\r\n      <h5> No Units Found...</h5>\r\n    </div>\r\n  </ng-template>\r\n";
      /***/
    },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/unitTabs/filters/filters.page.html":
    /*!************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/unitTabs/filters/filters.page.html ***!
      \************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppPagesUnitTabsFiltersFiltersPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header class=\"ion-no-border\">\r\n  <ion-toolbar>\r\n    <ion-title>Filters</ion-title>\r\n    <ion-buttons slot=\"end\">\r\n      <ion-button (click)=\"dismiss()\" text=\"\">\r\n        <ion-icon name=\"close-outline\" color=\"unit-btn\"></ion-icon>\r\n      </ion-button>\r\n    </ion-buttons>\r\n  </ion-toolbar>\r\n</ion-header>\r\n<ion-content>\r\n  <ion-list>\r\n    <ion-list-header> \r\n      <h4>Area/City</h4>\r\n    </ion-list-header>\r\n    <ion-searchbar [(ngModel)]=\"autocomplete.input\"  #searchbar placeholder=\"Search for City/Area\" searchIcon=\" \"\r\n    (ionInput)=\"searchLocation()\" clearIcon=\" \" (ionFocus)=\"checkFocus()\" (ionClear)=\"clearAutocomplete()\"\r\n    >\r\n    <img src=\"../../../../assets/imgs/feather-search.png\" />\r\n    </ion-searchbar>\r\n  </ion-list>\r\n  <div [hidden]=\"autocompleteItems.length == 0\" class=\"search_list\">\r\n    <ion-list (click)=\"useCurrentLocation()\" lines=\"none\">\r\n      <ion-item>\r\n        <ion-label>\r\n          <img  class=\"image-loc\" style=\"margin-inline-end: 0px !important;\" slot=\"start\"\r\n            src=\"../../../../assets/imgs/material-location-on.png\" />\r\n          <p class=\"main_text\">Current Location</p>\r\n        </ion-label>\r\n      </ion-item>\r\n    </ion-list>\r\n    <ion-list [hidden]=\"autocompleteItems.length == 0\" lines=\"none\">\r\n      <ion-item *ngFor=\"let item of autocompleteItems\" tappable (click)=\"selectSearchResult(item)\">\r\n        <ion-label>\r\n          <p class=\"secondary_text\"> {{ item.structured_formatting.secondary_text }} </p>\r\n        </ion-label>\r\n      </ion-item>\r\n    </ion-list>\r\n  </div>\r\n  <ion-grid>\r\n    <ion-row>\r\n      <ion-col size=\"6\">\r\n        <ion-list>\r\n          <ion-list-header>\r\n            <h4>From</h4>\r\n          </ion-list-header>\r\n          <ion-datetime displayFormat=\"MMM DD YYYY\" [(ngModel)]=\"dates.startDate\" placeholder=\"Start Date\" class=\"input-with\">\r\n          </ion-datetime>\r\n        </ion-list>\r\n      </ion-col>\r\n      <ion-col size=\"6\">\r\n        <ion-list>\r\n          <ion-list-header>\r\n            <h4>To</h4>\r\n          </ion-list-header>\r\n          <ion-datetime placeholder=\"End Date\" displayFormat=\"MMM DD YYYY\" [(ngModel)]=\"dates.endDate\" class=\"input-with\">\r\n          </ion-datetime>\r\n        </ion-list>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-grid>\r\n  <ion-grid>\r\n    <ion-row>\r\n      <ion-col size=\"12\">\r\n        <ion-list>\r\n          <ion-list-header>\r\n            <h4>Accessibility</h4>\r\n          </ion-list-header>\r\n          <ion-select (ionChange)=\"onTimeChange($event)\" [(ngModel)]=\"selectedAccess\" class=\"select-with\">\r\n            <ion-select-option *ngFor=\"let am of timeSlotTypeList; let i=index\" [value]=\"am._id\">{{am.accessType}}\r\n            </ion-select-option>\r\n          </ion-select>\r\n        </ion-list>\r\n      </ion-col>\r\n      <ion-col size=\"4\"> </ion-col>\r\n      <ion-col size=\"4\"> </ion-col>\r\n    </ion-row>\r\n  </ion-grid>\r\n  <div style=\"text-align: center;\">\r\n    <ion-list>\r\n      <ion-list-header>\r\n        <h4>Features</h4>\r\n      </ion-list-header>\r\n      </ion-list>\r\n      <ion-badge *ngFor=\"let am of features; let i=index\" class=\"bad-col\" color=\"tertiary\">\r\n        {{am.name}}\r\n        <ion-icon name=\"close-outline\" (click)=\"clearFeature(i)\"></ion-icon>\r\n      </ion-badge>\r\n  </div>\r\n</ion-content>\r\n<ion-footer>\r\n  <ion-grid>\r\n    <ion-row class=\"ion-align-items-start\">\r\n      <ion-col>\r\n        <ion-button color=\"primary\" (click)=\"applyFilters()\" class=\"btn\">Apply</ion-button>\r\n      </ion-col>\r\n      <ion-col class=\"ion-align-self-end\" style=\"left: 25%;\">\r\n        <ion-button color=\"danger\" (click)=\"clearFilters()\" class=\"btn\">Clear</ion-button>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-grid>\r\n</ion-footer>\r\n";
      /***/
    },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/unitTabs/tab1/tab1.page.html":
    /*!******************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/unitTabs/tab1/tab1.page.html ***!
      \******************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppPagesUnitTabsTab1Tab1PageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-content [fullscreen]=\"true\">\r\n  <ion-grid class=\"user-details pad-lr\">\r\n    <ion-row>\r\n      <ion-col size=\"12\">\r\n        <h2 class=\"name-txt\">Unit Inventory</h2>\r\n        <p class=\"find-txt\">Here are all the units available to you!</p>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-grid>\r\n  <ion-grid class=\"ion-no-padding pad-lr\">\r\n    <ion-row class=\"ion-no-padding\">\r\n      <ion-col size-sm=\"6\" offset-sm=\"3\" class=\"ion-no-padding\" [size]=\"10\">\r\n        <ion-searchbar color=\"black\" [(ngModel)]=\"autocomplete.input\" #searchbar placeholder=\"Search for Location\" searchIcon=\" \"\r\n          (ionInput)=\"searchLocation()\" clearIcon=\" \" (ionFocus)=\"checkFocus()\" (ionClear)=\"clearAutocomplete()\">\r\n          <img src=\"../../../../assets/imgs/feather-search.png\" />\r\n        </ion-searchbar>\r\n      </ion-col>\r\n      <ion-col [size]=\"2\" class=\"noti\">\r\n        <ion-icon *ngIf=\"!hasFilter\" name=\"funnel\" (click)=\"openFilter()\"\r\n          style=\"margin-right: 14px; margin-top: 14px;\"> </ion-icon>\r\n        <ion-icon *ngIf=\"hasFilter\" color=\"unit-btn\" name=\"funnel\"\r\n          (click)=\"openFilter()\" style=\"margin-right: 14px; margin-top: 14px;\"> </ion-icon>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-grid>\r\n  <div [hidden]=\"autocompleteItems.length == 0\" class=\"search_list\">\r\n    <ion-list (click)=\"useCurrentLocation()\" lines=\"none\">\r\n      <ion-item>\r\n        <ion-label>\r\n          <img  class=\"image-loc\" style=\"margin-inline-end: 0px !important;\" slot=\"start\"\r\n            src=\"../../../../assets/imgs/material-location-on.png\" />\r\n          <p class=\"main_text\">Current Location</p>\r\n        </ion-label>\r\n      </ion-item>\r\n    </ion-list>\r\n    <ion-list [hidden]=\"autocompleteItems.length == 0\" lines=\"none\">\r\n      <ion-item *ngFor=\"let item of autocompleteItems\" tappable (click)=\"selectSearchResult(item)\">\r\n        <ion-label>\r\n          <p class=\"secondary_text\"> {{ item.structured_formatting.secondary_text }} </p>\r\n        </ion-label>\r\n      </ion-item>\r\n    </ion-list>\r\n  </div>\r\n  <shared-space-type-slider [spaces]=\"spaceType\" (clearAll)=\"clearFilters()\" (spaceSelected)=\"spaceClick($event)\">\r\n  </shared-space-type-slider>\r\n  <div class=\"content\" *ngIf=\"displayName\">\r\n    <ion-grid>\r\n      <ion-row>\r\n        <ion-col>\r\n          <h3 class=\"top-heading\">Featured</h3>\r\n        </ion-col>\r\n      </ion-row>\r\n    </ion-grid>\r\n    <div *ngIf=\"placesList.length\">\r\n      <unit-listing [units]=\"placesList\" (unitClicked)='place($event)'></unit-listing>\r\n    </div>\r\n  </div>\r\n  <ion-grid class=\"ion-no-padding\" *ngIf=\"displayName\">\r\n    <ion-row class=\"ion-no-padding\">\r\n      <ion-col>\r\n        <h3 class=\"top-heading-popular\">Popular</h3>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-grid>\r\n  <div *ngIf=\"displayName\">\r\n    <unit-listing [units]=\"placesList\" (unitClicked)='place($event)'></unit-listing>\r\n  </div>\r\n  <!--filter Results-->\r\n  <div class=\"content\" *ngIf=\"!displayName\">\r\n    <ion-grid>\r\n      <ion-row>\r\n        <ion-col>\r\n          <h3 class=\"top-heading\">\r\n            Found {{placesList.length}}\r\n            <span *ngIf=\"placesList.length == 0 || placesList.length == 1 \">unit</span>\r\n            <span *ngIf=\"placesList.length > 1 \">unit's</span>\r\n          </h3>\r\n        </ion-col>\r\n      </ion-row>\r\n    </ion-grid>\r\n    <div *ngIf=\"placesList\">\r\n      <unit-listing [units]=\"placesList\" (unitClicked)='place($event)'></unit-listing>\r\n    </div>\r\n  </div>\r\n</ion-content>\r\n";
      /***/
    },

    /***/
    "./src/app/component/shared-space-type-slider/shared-space-type-slider.component.scss":
    /*!********************************************************************************************!*\
      !*** ./src/app/component/shared-space-type-slider/shared-space-type-slider.component.scss ***!
      \********************************************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppComponentSharedSpaceTypeSliderSharedSpaceTypeSliderComponentScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".img-spacetype {\n  max-width: 80% !important;\n}\n\n.category {\n  border-radius: 18px;\n  border: 1px solid #ed1b25;\n  padding: 6px;\n  width: 65px;\n  display: inline-block;\n}\n\n.main {\n  border-radius: 18px;\n  border: 1px solid #ed1b25;\n  padding: 6px;\n  width: 65px;\n  display: inline-block;\n}\n\n.space-span {\n  display: block;\n  font-size: 12px;\n  color: #9b9b9b;\n  margin-top: 7px;\n  font-family: \"medium\";\n}\n\n.clear {\n  text-align: end;\n  margin-right: 20px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50L3NoYXJlZC1zcGFjZS10eXBlLXNsaWRlci9zaGFyZWQtc3BhY2UtdHlwZS1zbGlkZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSx5QkFBeUI7QUFDN0I7O0FBQ0E7RUFDSSxtQkFBbUI7RUFDbkIseUJBQXlCO0VBQ3pCLFlBQVk7RUFDWixXQUFXO0VBQ1gscUJBQXFCO0FBRXpCOztBQUNBO0VBQ0UsbUJBQW1CO0VBQ25CLHlCQUF5QjtFQUN6QixZQUFZO0VBQ1osV0FBVztFQUNYLHFCQUFxQjtBQUV2Qjs7QUFBQTtFQUNFLGNBQWM7RUFDZCxlQUFlO0VBQ2YsY0FBYztFQUNkLGVBQWU7RUFDZixxQkFBcUI7QUFHdkI7O0FBQUE7RUFDRSxlQUFlO0VBQ2Ysa0JBQWtCO0FBR3BCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50L3NoYXJlZC1zcGFjZS10eXBlLXNsaWRlci9zaGFyZWQtc3BhY2UtdHlwZS1zbGlkZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaW1nLXNwYWNldHlwZXtcclxuICAgIG1heC13aWR0aDogODAlICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG4uY2F0ZWdvcnl7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxOHB4O1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2VkMWIyNTtcclxuICAgIHBhZGRpbmc6IDZweDtcclxuICAgIHdpZHRoOiA2NXB4O1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG59XHJcblxyXG4ubWFpbiB7XHJcbiAgYm9yZGVyLXJhZGl1czogMThweDtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjZWQxYjI1O1xyXG4gIHBhZGRpbmc6IDZweDtcclxuICB3aWR0aDogNjVweDtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbn1cclxuLnNwYWNlLXNwYW4ge1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIGZvbnQtc2l6ZTogMTJweDtcclxuICBjb2xvcjogIzliOWI5YjtcclxuICBtYXJnaW4tdG9wOiA3cHg7XHJcbiAgZm9udC1mYW1pbHk6IFwibWVkaXVtXCI7XHJcbn1cclxuXHJcbi5jbGVhcntcclxuICB0ZXh0LWFsaWduOiBlbmQ7XHJcbiAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xyXG59Il19 */";
      /***/
    },

    /***/
    "./src/app/component/shared-space-type-slider/shared-space-type-slider.component.ts":
    /*!******************************************************************************************!*\
      !*** ./src/app/component/shared-space-type-slider/shared-space-type-slider.component.ts ***!
      \******************************************************************************************/

    /*! exports provided: SharedSpaceTypeSliderComponent */

    /***/
    function srcAppComponentSharedSpaceTypeSliderSharedSpaceTypeSliderComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SharedSpaceTypeSliderComponent", function () {
        return SharedSpaceTypeSliderComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

      var SharedSpaceTypeSliderComponent = /*#__PURE__*/function () {
        function SharedSpaceTypeSliderComponent() {
          _classCallCheck(this, SharedSpaceTypeSliderComponent);

          this.spaceSelected = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
          this.clearAll = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
          this.options = {
            slidesPerView: 4.5,
            spaceBetween: 10,
            slideOffsetBefore: 0
          };
          this.spaceFilters = [];
        }

        _createClass(SharedSpaceTypeSliderComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "spaceClick",
          value: function spaceClick(space) {
            this.clearFilter = true;

            if (space.status) {
              space.status = false;
              var index = this.spaceFilters.indexOf(space._id);

              if (index !== -1) {
                this.spaceFilters.splice(index, 1);
              }
            } else {
              space.status = true;
              this.spaceFilters.push(space._id);
            }

            ;
            this.spaceSelected.emit(this.spaceFilters);
          }
        }, {
          key: "clearFilters",
          value: function clearFilters() {
            this.spaceFilters = [];
            this.clearAll.emit();
            this.clearFilter = false;
          }
        }]);

        return SharedSpaceTypeSliderComponent;
      }();

      SharedSpaceTypeSliderComponent.ctorParameters = function () {
        return [];
      };

      SharedSpaceTypeSliderComponent.propDecorators = {
        spaces: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        spaceSelected: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }],
        clearAll: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }]
      };
      SharedSpaceTypeSliderComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'shared-space-type-slider',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./shared-space-type-slider.component.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/component/shared-space-type-slider/shared-space-type-slider.component.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./shared-space-type-slider.component.scss */
        "./src/app/component/shared-space-type-slider/shared-space-type-slider.component.scss"))["default"]]
      })], SharedSpaceTypeSliderComponent);
      /***/
    },

    /***/
    "./src/app/component/unit-listing/unit-listing.component.scss":
    /*!********************************************************************!*\
      !*** ./src/app/component/unit-listing/unit-listing.component.scss ***!
      \********************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppComponentUnitListingUnitListingComponentScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ":host {\n  --min-height: 35px !important;\n}\n\nion-content {\n  transform: translate3d(0, 12px, 0);\n  --offset-bottom: auto !important;\n  --overflow: hidden;\n  overflow: auto;\n}\n\nion-content::-webkit-scrollbar {\n  display: none;\n}\n\n.content {\n  background-color: \"secondary\";\n  border-radius: 25px 25px 0px 0px;\n  padding-top: 0px;\n  box-shadow: 0px 0px 10px #a3a4a7;\n  margin-top: 20px;\n  height: auto;\n}\n\n.swiper-slide {\n  width: 100% !important;\n}\n\n.swiper-slide img {\n  width: 100%;\n  max-width: 100%;\n  max-height: 100%;\n  -o-object-fit: cover;\n     object-fit: cover;\n  border-radius: 15px;\n  height: 280px;\n}\n\n.card-grid {\n  padding-top: 0px !important;\n  padding-bottom: 0px !important;\n}\n\n.card-grid-new {\n  padding-top: 0px !important;\n  padding-bottom: 30px !important;\n}\n\n.card_features {\n  -webkit-margin-start: 10px !important;\n          margin-inline-start: 10px !important;\n  -webkit-margin-end: 10px !important;\n          margin-inline-end: 10px !important;\n}\n\n.card_features ion-card-header {\n  padding-bottom: 5px !important;\n  padding: 0;\n}\n\n.card_features ion-card-header ion-card-subtitle {\n  text-align: left;\n  font-size: 13px;\n  font-weight: 2;\n  margin-top: 8px;\n  padding-top: 0;\n  font-family: \"helveticaneuebold\";\n  color: \"tertiary\";\n  margin-bottom: 0;\n  padding-bottom: 3px;\n}\n\n.card_features ion-card-header ion-card-title {\n  text-align: left;\n  color: \"tertiary\";\n  font-size: 11px;\n  font-family: \"medium\";\n  font-weight: 400;\n}\n\n.card_features ion-card-header ion-card-title span {\n  color: \"tertiary\";\n}\n\n.card_features ion-card-content .rating {\n  text-align: left !important;\n}\n\n.card_features ion-card-content .card-content {\n  text-align: left !important;\n  color: \"tertiary\";\n  font-size: 11px !important;\n  margin-top: 6px;\n  margin-bottom: 6px;\n  font-family: \"medium\";\n}\n\n.card_features ion-card-content .card-content span {\n  color: #9b9b9b;\n}\n\n.card_features ion-card-content .card-content-popular {\n  text-align: left !important;\n  color: \"#000\";\n  font-size: 11px !important;\n  font-family: \"medium\";\n}\n\n.card_features ion-card-content .card-content-popular span {\n  color: #9b9b9b;\n}\n\n.sc-ion-card-md-h,\n.sc-ion-card-ios-h {\n  margin-top: 0;\n  margin-bottom: 0;\n  -webkit-margin-start: 0;\n  margin-inline-start: 0;\n  -webkit-margin-end: 0;\n  margin-inline-end: 0;\n}\n\n.top-heading {\n  margin-left: 15px;\n  margin-top: 20px;\n  margin-bottom: 0px;\n  font-size: 18px;\n  font-family: \"helveticaneuebold\";\n  color: #000;\n}\n\n.top-heading-popular {\n  margin-left: 15px;\n  margin-top: 20px;\n  margin-bottom: 15px;\n  font-size: 18px;\n  font-family: \"helveticaneuebold\";\n  color: #000;\n}\n\n.category ion-col {\n  text-align: center;\n}\n\n.category ion-col div {\n  border-radius: 18px;\n  border: 1px solid #ed1b25;\n  padding: 6px;\n  width: 65px;\n  display: inline-block;\n}\n\n.category ion-col span {\n  display: block;\n  font-size: 12px;\n  color: #9b9b9b;\n  margin-top: 7px;\n  font-family: \"medium\";\n}\n\n.user-details ion-col p {\n  padding-top: 0px;\n  margin-top: 0px;\n}\n\n.noti {\n  text-align: right;\n}\n\n.noti ion-icon {\n  font-size: 24px;\n  margin-top: 20px;\n  margin-right: 5px;\n}\n\n.noti_main ion-icon {\n  font-size: 24px;\n  margin-top: 12px;\n  margin-right: 10px;\n}\n\nion-searchbar {\n  --icon-color: #ed1b25;\n  --border-radius: 20px;\n  --box-shadow: 0px 0px 5px #e0dbdb;\n  width: 104% !important;\n  padding-top: 0;\n  --placeholder-color: #989797;\n  --box-shadow: 0px 0px 10px #d6d5d5;\n  --placeholder-opacity: 1;\n  padding-left: 0px;\n  padding-top: 0;\n  --background: #F7F7F7;\n}\n\nion-searchbar img {\n  position: absolute;\n  right: 25px;\n  top: 18px;\n  z-index: 999;\n}\n\n.no-item {\n  text-align: center;\n  margin-top: 50px;\n}\n\n.no-item h5 {\n  padding-bottom: 20px;\n}\n\n.name-txt {\n  font-size: 23px;\n  color: #000;\n  font-family: \"helveticaneuebold\";\n}\n\n.find-txt {\n  font-size: 12px;\n  color: #000;\n}\n\n.card_features {\n  box-shadow: none;\n}\n\n.no-padding {\n  padding-left: 0;\n  padding-right: 0;\n  padding-bottom: 0;\n}\n\n.search_list {\n  background: #f7f7f7;\n  border-radius: 15px;\n  box-shadow: 0px 0px 5px #e0dbdb;\n  margin-left: 20px;\n  margin-right: 20px;\n}\n\nion-list ion-item {\n  --min-height: 35px;\n}\n\nion-list ion-item ion-label {\n  border-bottom: 1px solid #cacaca;\n  padding-bottom: 10px;\n  padding-left: 12px;\n  font-size: 10px;\n  margin-bottom: 0px;\n  margin-top: 0px;\n  padding-top: 0px;\n}\n\nion-list ion-item .main_text {\n  font-size: 11px;\n  font-family: \"medium\";\n  color: \"tertiary\";\n  display: inline-block;\n  margin-left: 8px;\n  vertical-align: middle;\n}\n\nion-list ion-item .secondary_text {\n  color: \"tertiary\";\n  font-size: 11px;\n  font-family: \"medium\";\n}\n\n.placelist .card_features img {\n  width: 100%;\n  border-radius: 15px;\n}\n\n.placelist .card-content-ios {\n  padding-left: 0px !important;\n  padding-right: 0px !important;\n  padding-top: 0px !important;\n  padding-bottom: 0px !important;\n  font-size: 16px;\n  line-height: 1.4;\n}\n\n.rating_main {\n  text-align: right !important;\n}\n\n.pricing_full {\n  position: absolute;\n  right: 10px;\n  z-index: 9999;\n  background: red;\n  top: 217px;\n  color: \"secondary\";\n  padding: 8px 20px;\n  border-radius: 30px;\n  font-size: 11px;\n  font-family: \"medium\";\n}\n\n.pad-lr {\n  padding: 0 15px;\n}\n\n.image-loc {\n  height: 10px;\n  width: 10px;\n}\n\n.clear {\n  text-align: end;\n  margin-right: 20px;\n}\n\n.img-spacetype {\n  max-width: 80% !important;\n}\n\n.share-social-outline {\n  position: absolute;\n  right: 25px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50L3VuaXQtbGlzdGluZy91bml0LWxpc3RpbmcuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSw2QkFBYTtBQUNqQjs7QUFFRTtFQUNFLGtDQUFrQztFQUNsQyxnQ0FBZ0I7RUFDaEIsa0JBQVc7RUFDWCxjQUFjO0FBQ2xCOztBQUxFO0VBTUksYUFBYTtBQUduQjs7QUFDRTtFQUNFLDZCQUE2QjtFQUM3QixnQ0FBZ0M7RUFDaEMsZ0JBQWdCO0VBQ2hCLGdDQUFnQztFQUNoQyxnQkFBZ0I7RUFDaEIsWUFBWTtBQUVoQjs7QUFDRTtFQUNFLHNCQUFzQjtBQUUxQjs7QUFIRTtFQUdJLFdBQVc7RUFDWCxlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLG9CQUFpQjtLQUFqQixpQkFBaUI7RUFDakIsbUJBQW1CO0VBQ25CLGFBQWE7QUFJbkI7O0FBREU7RUFDRSwyQkFBMkI7RUFDM0IsOEJBQThCO0FBSWxDOztBQUZFO0VBQ0UsMkJBQTJCO0VBQzNCLCtCQUErQjtBQUtuQzs7QUFGRTtFQUNFLHFDQUFvQztVQUFwQyxvQ0FBb0M7RUFDcEMsbUNBQWtDO1VBQWxDLGtDQUFrQztBQUt0Qzs7QUFQRTtFQUlJLDhCQUE4QjtFQUM5QixVQUFVO0FBT2hCOztBQVpFO0VBT00sZ0JBQWdCO0VBQ2hCLGVBQWU7RUFDZixjQUFjO0VBQ2QsZUFBZTtFQUNmLGNBQWM7RUFDZCxnQ0FBZ0M7RUFDaEMsaUJBQWlCO0VBQ2pCLGdCQUFnQjtFQUNoQixtQkFBbUI7QUFTM0I7O0FBeEJFO0VBa0JNLGdCQUFnQjtFQUNoQixpQkFBaUI7RUFDakIsZUFBZTtFQUNmLHFCQUFxQjtFQUNyQixnQkFBZ0I7QUFVeEI7O0FBaENFO0VBd0JRLGlCQUFpQjtBQVkzQjs7QUFwQ0U7RUE4Qk0sMkJBQTJCO0FBVW5DOztBQXhDRTtFQWlDTSwyQkFBMkI7RUFDM0IsaUJBQWlCO0VBQ2pCLDBCQUEwQjtFQUMxQixlQUFlO0VBQ2Ysa0JBQWtCO0VBQ2xCLHFCQUFxQjtBQVc3Qjs7QUFqREU7RUF3Q1EsY0FBYztBQWF4Qjs7QUFyREU7RUE0Q00sMkJBQTJCO0VBQzNCLGFBQWE7RUFDYiwwQkFBMEI7RUFDMUIscUJBQXFCO0FBYTdCOztBQTVERTtFQWlEUSxjQUFjO0FBZXhCOztBQVRFOztFQUVFLGFBQWE7RUFDYixnQkFBZ0I7RUFDaEIsdUJBQXVCO0VBQ3ZCLHNCQUFzQjtFQUN0QixxQkFBcUI7RUFDckIsb0JBQW9CO0FBWXhCOztBQVRFO0VBQ0UsaUJBQWlCO0VBQ2pCLGdCQUFnQjtFQUNoQixrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLGdDQUFnQztFQUNoQyxXQUFXO0FBWWY7O0FBVkU7RUFDRSxpQkFBaUI7RUFDakIsZ0JBQWdCO0VBQ2hCLG1CQUFtQjtFQUNuQixlQUFlO0VBQ2YsZ0NBQWdDO0VBQ2hDLFdBQVc7QUFhZjs7QUFWRTtFQUVJLGtCQUFrQjtBQVl4Qjs7QUFkRTtFQUlNLG1CQUFtQjtFQUNuQix5QkFBeUI7RUFDekIsWUFBWTtFQUNaLFdBQVc7RUFDWCxxQkFBcUI7QUFjN0I7O0FBdEJFO0VBV00sY0FBYztFQUNkLGVBQWU7RUFDZixjQUFjO0VBQ2QsZUFBZTtFQUNmLHFCQUFxQjtBQWU3Qjs7QUFYRTtFQUdNLGdCQUFnQjtFQUNoQixlQUFlO0FBWXZCOztBQVBFO0VBQ0UsaUJBQWlCO0FBVXJCOztBQVhFO0VBR0ksZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixpQkFBaUI7QUFZdkI7O0FBVEU7RUFFSSxlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtBQVd4Qjs7QUFQRTtFQUNFLHFCQUFhO0VBQ2IscUJBQWdCO0VBQ2hCLGlDQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLGNBQWM7RUFDZCw0QkFBb0I7RUFDcEIsa0NBQWE7RUFDYix3QkFBc0I7RUFDdEIsaUJBQWlCO0VBQ2pCLGNBQWM7RUFDZCxxQkFBYTtBQVVqQjs7QUFyQkU7RUFhSSxrQkFBa0I7RUFDbEIsV0FBVztFQUNYLFNBQVM7RUFDVCxZQUNGO0FBV0o7O0FBUkU7RUFDRSxrQkFBa0I7RUFDbEIsZ0JBQWdCO0FBV3BCOztBQWJFO0VBSUksb0JBQW9CO0FBYTFCOztBQVZFO0VBQ0UsZUFBZTtFQUNmLFdBQVc7RUFDWCxnQ0FBZ0M7QUFhcEM7O0FBWEU7RUFDRSxlQUFlO0VBQ2YsV0FBVztBQWNmOztBQVpFO0VBQ0UsZ0JBQWdCO0FBZXBCOztBQWJFO0VBQ0UsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixpQkFBaUI7QUFnQnJCOztBQWJFO0VBQ0UsbUJBQW1CO0VBQ25CLG1CQUFtQjtFQUNuQiwrQkFBK0I7RUFDL0IsaUJBQWlCO0VBQ2pCLGtCQUFrQjtBQWdCdEI7O0FBZEU7RUFFSSxrQkFBYTtBQWdCbkI7O0FBbEJFO0VBSU0sZ0NBQWdDO0VBQ2hDLG9CQUFvQjtFQUNwQixrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLGtCQUFrQjtFQUNsQixlQUFlO0VBQ2YsZ0JBQWdCO0FBa0J4Qjs7QUE1QkU7RUFhTSxlQUFlO0VBQ2YscUJBQXFCO0VBQ3JCLGlCQUFpQjtFQUNqQixxQkFBcUI7RUFDckIsZ0JBQWdCO0VBQ2hCLHNCQUFzQjtBQW1COUI7O0FBckNFO0VBcUJNLGlCQUFpQjtFQUNqQixlQUFlO0VBQ2YscUJBQXFCO0FBb0I3Qjs7QUFmRTtFQUdNLFdBQVc7RUFDWCxtQkFBbUI7QUFnQjNCOztBQXBCRTtFQVFJLDRCQUE0QjtFQUM1Qiw2QkFBNkI7RUFDN0IsMkJBQTJCO0VBQzNCLDhCQUE4QjtFQUM5QixlQUFlO0VBQ2YsZ0JBQWdCO0FBZ0J0Qjs7QUFiRTtFQUNFLDRCQUE0QjtBQWdCaEM7O0FBZEU7RUFDRSxrQkFBa0I7RUFDbEIsV0FBVztFQUNYLGFBQWE7RUFDYixlQUFlO0VBQ2YsVUFBVTtFQUNWLGtCQUFrQjtFQUNsQixpQkFBaUI7RUFDakIsbUJBQW1CO0VBQ25CLGVBQWU7RUFDZixxQkFBcUI7QUFpQnpCOztBQWRFO0VBQ0UsZUFBZTtBQWlCbkI7O0FBZkU7RUFDRSxZQUFZO0VBQ1osV0FBVztBQWtCZjs7QUFoQkU7RUFDRSxlQUFlO0VBQ2Ysa0JBQWtCO0FBbUJ0Qjs7QUFoQkE7RUFDRSx5QkFBeUI7QUFtQjNCOztBQWhCQTtFQUNFLGtCQUFrQjtFQUNsQixXQUFXO0FBbUJiIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50L3VuaXQtbGlzdGluZy91bml0LWxpc3RpbmcuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XHJcbiAgICAtLW1pbi1oZWlnaHQ6IDM1cHggIWltcG9ydGFudDtcclxuICB9XHJcbiAgXHJcbiAgaW9uLWNvbnRlbnQge1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAxMnB4LCAwKTtcclxuICAgIC0tb2Zmc2V0LWJvdHRvbTogYXV0byAhaW1wb3J0YW50O1xyXG4gICAgLS1vdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgb3ZlcmZsb3c6IGF1dG87XHJcbiAgICAmOjotd2Via2l0LXNjcm9sbGJhciB7XHJcbiAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICB9XHJcbiAgfVxyXG4gIFxyXG4gIC5jb250ZW50IHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IFwic2Vjb25kYXJ5XCI7XHJcbiAgICBib3JkZXItcmFkaXVzOiAyNXB4IDI1cHggMHB4IDBweDtcclxuICAgIHBhZGRpbmctdG9wOiAwcHg7XHJcbiAgICBib3gtc2hhZG93OiAwcHggMHB4IDEwcHggI2EzYTRhNztcclxuICAgIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgICBoZWlnaHQ6IGF1dG87XHJcbiAgfVxyXG4gIFxyXG4gIC5zd2lwZXItc2xpZGUge1xyXG4gICAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcclxuICAgIGltZyB7XHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICBtYXgtd2lkdGg6IDEwMCU7XHJcbiAgICAgIG1heC1oZWlnaHQ6IDEwMCU7XHJcbiAgICAgIG9iamVjdC1maXQ6IGNvdmVyO1xyXG4gICAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xyXG4gICAgICBoZWlnaHQ6IDI4MHB4O1xyXG4gICAgfVxyXG4gIH1cclxuICAuY2FyZC1ncmlkIHtcclxuICAgIHBhZGRpbmctdG9wOiAwcHggIWltcG9ydGFudDtcclxuICAgIHBhZGRpbmctYm90dG9tOiAwcHggIWltcG9ydGFudDtcclxuICB9XHJcbiAgLmNhcmQtZ3JpZC1uZXd7XHJcbiAgICBwYWRkaW5nLXRvcDogMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMzBweCAhaW1wb3J0YW50O1xyXG4gIH0gXHJcbiAgXHJcbiAgLmNhcmRfZmVhdHVyZXMge1xyXG4gICAgbWFyZ2luLWlubGluZS1zdGFydDogMTBweCAhaW1wb3J0YW50O1xyXG4gICAgbWFyZ2luLWlubGluZS1lbmQ6IDEwcHggIWltcG9ydGFudDtcclxuICAgIGlvbi1jYXJkLWhlYWRlciB7XHJcbiAgICAgIHBhZGRpbmctYm90dG9tOiA1cHggIWltcG9ydGFudDtcclxuICAgICAgcGFkZGluZzogMDtcclxuICAgICAgaW9uLWNhcmQtc3VidGl0bGUge1xyXG4gICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICAgICAgZm9udC1zaXplOiAxM3B4O1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiAyO1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDhweDtcclxuICAgICAgICBwYWRkaW5nLXRvcDogMDtcclxuICAgICAgICBmb250LWZhbWlseTogXCJoZWx2ZXRpY2FuZXVlYm9sZFwiO1xyXG4gICAgICAgIGNvbG9yOiBcInRlcnRpYXJ5XCI7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMDtcclxuICAgICAgICBwYWRkaW5nLWJvdHRvbTogM3B4O1xyXG4gICAgICB9XHJcbiAgICAgIGlvbi1jYXJkLXRpdGxlIHtcclxuICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgICAgIGNvbG9yOiBcInRlcnRpYXJ5XCI7XHJcbiAgICAgICAgZm9udC1zaXplOiAxMXB4O1xyXG4gICAgICAgIGZvbnQtZmFtaWx5OiBcIm1lZGl1bVwiO1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICAgICAgc3BhbiB7XHJcbiAgICAgICAgICBjb2xvcjogXCJ0ZXJ0aWFyeVwiO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgaW9uLWNhcmQtY29udGVudCB7XHJcbiAgICAgIC5yYXRpbmcge1xyXG4gICAgICAgIHRleHQtYWxpZ246IGxlZnQgIWltcG9ydGFudDtcclxuICAgICAgfVxyXG4gICAgICAuY2FyZC1jb250ZW50IHtcclxuICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgY29sb3I6IFwidGVydGlhcnlcIjtcclxuICAgICAgICBmb250LXNpemU6IDExcHggIWltcG9ydGFudDtcclxuICAgICAgICBtYXJnaW4tdG9wOiA2cHg7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogNnB4O1xyXG4gICAgICAgIGZvbnQtZmFtaWx5OiBcIm1lZGl1bVwiO1xyXG4gICAgICAgIHNwYW4ge1xyXG4gICAgICAgICAgY29sb3I6ICM5YjliOWI7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIC5jYXJkLWNvbnRlbnQtcG9wdWxhcntcclxuICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgY29sb3I6IFwiIzAwMFwiO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTFweCAhaW1wb3J0YW50O1xyXG4gICAgICAgIGZvbnQtZmFtaWx5OiBcIm1lZGl1bVwiO1xyXG4gICAgICAgIHNwYW4ge1xyXG4gICAgICAgICAgY29sb3I6ICM5YjliOWI7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG4gIFxyXG4gIC5zYy1pb24tY2FyZC1tZC1oLFxyXG4gIC5zYy1pb24tY2FyZC1pb3MtaCB7XHJcbiAgICBtYXJnaW4tdG9wOiAwO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMDtcclxuICAgIC13ZWJraXQtbWFyZ2luLXN0YXJ0OiAwO1xyXG4gICAgbWFyZ2luLWlubGluZS1zdGFydDogMDtcclxuICAgIC13ZWJraXQtbWFyZ2luLWVuZDogMDtcclxuICAgIG1hcmdpbi1pbmxpbmUtZW5kOiAwO1xyXG4gIH1cclxuICBcclxuICAudG9wLWhlYWRpbmcge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDE1cHg7XHJcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMHB4O1xyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgZm9udC1mYW1pbHk6IFwiaGVsdmV0aWNhbmV1ZWJvbGRcIjtcclxuICAgIGNvbG9yOiAjMDAwO1xyXG4gIH1cclxuICAudG9wLWhlYWRpbmctcG9wdWxhcntcclxuICAgIG1hcmdpbi1sZWZ0OiAxNXB4O1xyXG4gICAgbWFyZ2luLXRvcDogMjBweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICBmb250LWZhbWlseTogXCJoZWx2ZXRpY2FuZXVlYm9sZFwiO1xyXG4gICAgY29sb3I6ICMwMDA7XHJcbiAgfVxyXG4gIFxyXG4gIC5jYXRlZ29yeSB7XHJcbiAgICBpb24tY29sIHtcclxuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICBkaXYge1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDE4cHg7XHJcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2VkMWIyNTtcclxuICAgICAgICBwYWRkaW5nOiA2cHg7XHJcbiAgICAgICAgd2lkdGg6IDY1cHg7XHJcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICB9XHJcbiAgICAgIHNwYW4ge1xyXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgICAgICBjb2xvcjogIzliOWI5YjtcclxuICAgICAgICBtYXJnaW4tdG9wOiA3cHg7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6IFwibWVkaXVtXCI7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbiAgLnVzZXItZGV0YWlscyB7XHJcbiAgICBpb24tY29sIHtcclxuICAgICAgcCB7XHJcbiAgICAgICAgcGFkZGluZy10b3A6IDBweDtcclxuICAgICAgICBtYXJnaW4tdG9wOiAwcHg7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbiAgXHJcbiAgLm5vdGkge1xyXG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgICBpb24taWNvbiB7XHJcbiAgICAgIGZvbnQtc2l6ZTogMjRweDtcclxuICAgICAgbWFyZ2luLXRvcDogMjBweDtcclxuICAgICAgbWFyZ2luLXJpZ2h0OiA1cHg7XHJcbiAgICB9XHJcbiAgfVxyXG4gIC5ub3RpX21haW57XHJcbiAgICBpb24taWNvbiB7XHJcbiAgICAgIGZvbnQtc2l6ZTogMjRweDtcclxuICAgICAgbWFyZ2luLXRvcDogMTJweDtcclxuICAgICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG4gICAgfVxyXG4gIH1cclxuICBcclxuICBpb24tc2VhcmNoYmFyIHtcclxuICAgIC0taWNvbi1jb2xvcjogI2VkMWIyNTtcclxuICAgIC0tYm9yZGVyLXJhZGl1czogMjBweDtcclxuICAgIC0tYm94LXNoYWRvdzogMHB4IDBweCA1cHggI2UwZGJkYjtcclxuICAgIHdpZHRoOiAxMDQlICFpbXBvcnRhbnQ7XHJcbiAgICBwYWRkaW5nLXRvcDogMDtcclxuICAgIC0tcGxhY2Vob2xkZXItY29sb3I6ICM5ODk3OTc7XHJcbiAgICAtLWJveC1zaGFkb3c6IDBweCAwcHggMTBweCAjZDZkNWQ1O1xyXG4gICAgLS1wbGFjZWhvbGRlci1vcGFjaXR5OiAxO1xyXG4gICAgcGFkZGluZy1sZWZ0OiAwcHg7XHJcbiAgICBwYWRkaW5nLXRvcDogMDtcclxuICAgIC0tYmFja2dyb3VuZDogI0Y3RjdGNztcclxuICAgIGltZyB7XHJcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgcmlnaHQ6IDI1cHg7XHJcbiAgICAgIHRvcDogMThweDtcclxuICAgICAgei1pbmRleDogOTk5XHJcbiAgICB9XHJcbiAgfVxyXG4gIFxyXG4gIC5uby1pdGVtIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIG1hcmdpbi10b3A6IDUwcHg7XHJcbiAgICBoNXtcclxuICAgICAgcGFkZGluZy1ib3R0b206IDIwcHg7XHJcbiAgICB9XHJcbiAgfVxyXG4gIC5uYW1lLXR4dCB7XHJcbiAgICBmb250LXNpemU6IDIzcHg7XHJcbiAgICBjb2xvcjogIzAwMDtcclxuICAgIGZvbnQtZmFtaWx5OiBcImhlbHZldGljYW5ldWVib2xkXCI7XHJcbiAgfVxyXG4gIC5maW5kLXR4dCB7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICBjb2xvcjogIzAwMDtcclxuICB9XHJcbiAgLmNhcmRfZmVhdHVyZXMge1xyXG4gICAgYm94LXNoYWRvdzogbm9uZTtcclxuICB9XHJcbiAgLm5vLXBhZGRpbmcge1xyXG4gICAgcGFkZGluZy1sZWZ0OiAwO1xyXG4gICAgcGFkZGluZy1yaWdodDogMDtcclxuICAgIHBhZGRpbmctYm90dG9tOiAwO1xyXG4gIH1cclxuICBcclxuICAuc2VhcmNoX2xpc3Qge1xyXG4gICAgYmFja2dyb3VuZDogI2Y3ZjdmNztcclxuICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XHJcbiAgICBib3gtc2hhZG93OiAwcHggMHB4IDVweCAjZTBkYmRiO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDIwcHg7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDIwcHg7XHJcbiAgfVxyXG4gIGlvbi1saXN0IHtcclxuICAgIGlvbi1pdGVtIHtcclxuICAgICAgLS1taW4taGVpZ2h0OiAzNXB4O1xyXG4gICAgICBpb24tbGFiZWwge1xyXG4gICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjY2FjYWNhO1xyXG4gICAgICAgIHBhZGRpbmctYm90dG9tOiAxMHB4O1xyXG4gICAgICAgIHBhZGRpbmctbGVmdDogMTJweDtcclxuICAgICAgICBmb250LXNpemU6IDEwcHg7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMHB4O1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDBweDtcclxuICAgICAgICBwYWRkaW5nLXRvcDogMHB4O1xyXG4gICAgICB9XHJcbiAgICAgIC5tYWluX3RleHQge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTFweDtcclxuICAgICAgICBmb250LWZhbWlseTogXCJtZWRpdW1cIjtcclxuICAgICAgICBjb2xvcjogXCJ0ZXJ0aWFyeVwiO1xyXG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICBtYXJnaW4tbGVmdDogOHB4O1xyXG4gICAgICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiAgICAgIH1cclxuICAgICAgLnNlY29uZGFyeV90ZXh0IHtcclxuICAgICAgICBjb2xvcjogXCJ0ZXJ0aWFyeVwiO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTFweDtcclxuICAgICAgICBmb250LWZhbWlseTogXCJtZWRpdW1cIjtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuICBcclxuICAucGxhY2VsaXN0IHtcclxuICAgIC5jYXJkX2ZlYXR1cmVzIHtcclxuICAgICAgaW1nIHtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICAuY2FyZC1jb250ZW50LWlvcyB7XHJcbiAgICAgIHBhZGRpbmctbGVmdDogMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgIHBhZGRpbmctcmlnaHQ6IDBweCAhaW1wb3J0YW50O1xyXG4gICAgICBwYWRkaW5nLXRvcDogMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgIHBhZGRpbmctYm90dG9tOiAwcHggIWltcG9ydGFudDtcclxuICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICBsaW5lLWhlaWdodDogMS40O1xyXG4gICAgfVxyXG4gIH1cclxuICAucmF0aW5nX21haW4ge1xyXG4gICAgdGV4dC1hbGlnbjogcmlnaHQgIWltcG9ydGFudDtcclxuICB9XHJcbiAgLnByaWNpbmdfZnVsbCB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICByaWdodDogMTBweDtcclxuICAgIHotaW5kZXg6IDk5OTk7XHJcbiAgICBiYWNrZ3JvdW5kOiByZWQ7XHJcbiAgICB0b3A6IDIxN3B4O1xyXG4gICAgY29sb3I6IFwic2Vjb25kYXJ5XCI7XHJcbiAgICBwYWRkaW5nOiA4cHggMjBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDMwcHg7XHJcbiAgICBmb250LXNpemU6IDExcHg7XHJcbiAgICBmb250LWZhbWlseTogXCJtZWRpdW1cIjtcclxuICB9XHJcbiAgXHJcbiAgLnBhZC1scntcclxuICAgIHBhZGRpbmc6IDAgMTVweDtcclxuICB9XHJcbiAgLmltYWdlLWxvY3tcclxuICAgIGhlaWdodDogMTBweDtcclxuICAgIHdpZHRoOiAxMHB4O1xyXG4gIH1cclxuICAuY2xlYXJ7XHJcbiAgICB0ZXh0LWFsaWduOiBlbmQ7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDIwcHg7XHJcbiAgfVxyXG5cclxuLmltZy1zcGFjZXR5cGV7XHJcbiAgbWF4LXdpZHRoOiA4MCUgIWltcG9ydGFudDtcclxufVxyXG5cclxuLnNoYXJlLXNvY2lhbC1vdXRsaW5le1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICByaWdodDogMjVweDtcclxufSJdfQ== */";
      /***/
    },

    /***/
    "./src/app/component/unit-listing/unit-listing.component.ts":
    /*!******************************************************************!*\
      !*** ./src/app/component/unit-listing/unit-listing.component.ts ***!
      \******************************************************************/

    /*! exports provided: UnitListingComponent */

    /***/
    function srcAppComponentUnitListingUnitListingComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "UnitListingComponent", function () {
        return UnitListingComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

      var UnitListingComponent = /*#__PURE__*/function () {
        function UnitListingComponent() {
          _classCallCheck(this, UnitListingComponent);

          this.slideOpts = {
            slidesPerView: 'auto',
            zoom: false,
            grabCursor: true
          };
          this.unitClicked = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        }

        _createClass(UnitListingComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "place",
          value: function place(placeInfo) {
            this.unitClicked.emit(placeInfo);
          }
        }]);

        return UnitListingComponent;
      }();

      UnitListingComponent.ctorParameters = function () {
        return [];
      };

      UnitListingComponent.propDecorators = {
        units: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        unitClicked: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }]
      };
      UnitListingComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'unit-listing',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./unit-listing.component.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/component/unit-listing/unit-listing.component.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./unit-listing.component.scss */
        "./src/app/component/unit-listing/unit-listing.component.scss"))["default"]]
      })], UnitListingComponent);
      /***/
    },

    /***/
    "./src/app/pages/unitTabs/filters/filters-routing.module.ts":
    /*!******************************************************************!*\
      !*** ./src/app/pages/unitTabs/filters/filters-routing.module.ts ***!
      \******************************************************************/

    /*! exports provided: FiltersPageRoutingModule */

    /***/
    function srcAppPagesUnitTabsFiltersFiltersRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FiltersPageRoutingModule", function () {
        return FiltersPageRoutingModule;
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


      var _filters_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./filters.page */
      "./src/app/pages/unitTabs/filters/filters.page.ts");

      var routes = [{
        path: '',
        component: _filters_page__WEBPACK_IMPORTED_MODULE_3__["FiltersPage"]
      }];

      var FiltersPageRoutingModule = function FiltersPageRoutingModule() {
        _classCallCheck(this, FiltersPageRoutingModule);
      };

      FiltersPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], FiltersPageRoutingModule);
      /***/
    },

    /***/
    "./src/app/pages/unitTabs/filters/filters.module.ts":
    /*!**********************************************************!*\
      !*** ./src/app/pages/unitTabs/filters/filters.module.ts ***!
      \**********************************************************/

    /*! exports provided: FiltersPageModule */

    /***/
    function srcAppPagesUnitTabsFiltersFiltersModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FiltersPageModule", function () {
        return FiltersPageModule;
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


      var _filters_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./filters-routing.module */
      "./src/app/pages/unitTabs/filters/filters-routing.module.ts");
      /* harmony import */


      var _filters_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./filters.page */
      "./src/app/pages/unitTabs/filters/filters.page.ts");

      var FiltersPageModule = function FiltersPageModule() {
        _classCallCheck(this, FiltersPageModule);
      };

      FiltersPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _filters_routing_module__WEBPACK_IMPORTED_MODULE_5__["FiltersPageRoutingModule"]],
        declarations: [_filters_page__WEBPACK_IMPORTED_MODULE_6__["FiltersPage"]]
      })], FiltersPageModule);
      /***/
    },

    /***/
    "./src/app/pages/unitTabs/filters/filters.page.scss":
    /*!**********************************************************!*\
      !*** ./src/app/pages/unitTabs/filters/filters.page.scss ***!
      \**********************************************************/

    /*! exports provided: default */

    /***/
    function srcAppPagesUnitTabsFiltersFiltersPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "ion-button {\n  margin-left: 10px !important;\n}\n\nion-list h4 {\n  font-size: 14px;\n  color: \"tertiary\";\n  font-family: \"helveticaneuebold\";\n  margin-bottom: 9px;\n  font-weight: 400;\n  margin-left: 10px;\n}\n\nion-list ion-label {\n  color: \"tertiary\" !important;\n  font-size: 13.6px !important;\n}\n\n.sc-ion-input-ios-h,\n.select-with {\n  --border-color: transparent !important;\n  --background-activated: white;\n  --background-focused: white;\n  --background-hover: white;\n  --highlight-height: 0;\n  border: 1px solid #cdcfcf;\n  border-radius: 50px;\n  color: \"tertiary\";\n  height: 45px;\n  margin: 0 20px;\n  width: 89%;\n  font-family: \"medium\";\n  --placeholder-opacity: 1;\n  text-transform: capitalize;\n  padding-left: 20px !important;\n}\n\n.input-with {\n  --border-color: transparent !important;\n  --background-activated: white;\n  --background-focused: white;\n  --background-hover: white;\n  --highlight-height: 0;\n  border: 1px solid #cdcfcf;\n  border-radius: 50px;\n  color: #707070;\n  height: 45px;\n  margin: 0 20px;\n  width: 89%;\n  font-size: 15px;\n  padding-top: 12.5px;\n  font-family: \"medium\";\n}\n\n.bad-col {\n  font-family: \"medium\";\n  background-color: \"tertiary\";\n  margin: 0 2px 10px;\n  font-size: 12px;\n  font-weight: 400;\n  padding: 6px 10px;\n  color: \"secondary\";\n}\n\n.btn {\n  text-transform: capitalize;\n  height: 36px;\n  font-size: 16px;\n  margin: 0 !important;\n  margin-top: 0px !important;\n  font-family: helveticaneuebold;\n}\n\nion-searchbar {\n  --icon-color: #ed1b25;\n  --border-radius: 20px;\n  --box-shadow: 0px 0px 5px #e0dbdb;\n  width: 95% !important;\n  padding-top: 0;\n  --placeholder-color: #989797;\n  --box-shadow: 0px 0px 10px #d6d5d5;\n  --placeholder-opacity: 1;\n  padding-left: 25px;\n  padding-top: 0;\n  --background: #F7F7F7;\n}\n\nion-searchbar img {\n  position: absolute;\n  right: 25px;\n  top: 18px;\n  z-index: 999;\n}\n\n.search_list {\n  background: #f7f7f7;\n  border-radius: 15px;\n  box-shadow: 0px 0px 5px #e0dbdb;\n  margin-left: 20px;\n  margin-right: 20px;\n}\n\nion-list ion-item {\n  --min-height: 35px;\n}\n\nion-list ion-item ion-label {\n  border-bottom: 1px solid #cacaca;\n  padding-bottom: 10px;\n  padding-left: 12px;\n  font-size: 10px;\n  margin-bottom: 0px;\n  margin-top: 0px;\n  padding-top: 0px;\n}\n\nion-list ion-item .main_text {\n  font-size: 11px;\n  font-family: \"medium\";\n  color: \"tertiary\";\n  display: inline-block;\n  margin-left: 8px;\n  vertical-align: middle;\n}\n\nion-list ion-item .secondary_text {\n  color: \"tertiary\";\n  font-size: 11px;\n  font-family: \"medium\";\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvdW5pdFRhYnMvZmlsdGVycy9maWx0ZXJzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLDRCQUE0QjtBQUM5Qjs7QUFFQTtFQUVJLGVBQWU7RUFDZixpQkFBaUI7RUFDakIsZ0NBQWdDO0VBQ2hDLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsaUJBQWlCO0FBQXJCOztBQVBBO0VBVUksNEJBQTRCO0VBQzVCLDRCQUE0QjtBQUNoQzs7QUFHQTs7RUFFRSxzQ0FBZTtFQUNmLDZCQUF1QjtFQUN2QiwyQkFBcUI7RUFDckIseUJBQW1CO0VBQ25CLHFCQUFtQjtFQUNuQix5QkFBeUI7RUFDekIsbUJBQW1CO0VBQ25CLGlCQUFpQjtFQUNqQixZQUFZO0VBQ1osY0FBYztFQUNkLFVBQVU7RUFDVixxQkFBcUI7RUFDckIsd0JBQXNCO0VBQ3RCLDBCQUEwQjtFQUMxQiw2QkFBNkI7QUFBL0I7O0FBRUE7RUFDRSxzQ0FBZTtFQUNmLDZCQUF1QjtFQUN2QiwyQkFBcUI7RUFDckIseUJBQW1CO0VBQ25CLHFCQUFtQjtFQUNuQix5QkFBeUI7RUFDekIsbUJBQW1CO0VBQ25CLGNBQWM7RUFDZCxZQUFZO0VBQ1osY0FBYztFQUNkLFVBQVU7RUFDVixlQUFlO0VBQ2YsbUJBQW1CO0VBQ25CLHFCQUFxQjtBQUN2Qjs7QUFDQTtFQUNFLHFCQUFxQjtFQUNyQiw0QkFBNEI7RUFDNUIsa0JBQWtCO0VBQ2xCLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsaUJBQWlCO0VBQ2pCLGtCQUFrQjtBQUVwQjs7QUFBQTtFQUNFLDBCQUEwQjtFQUMxQixZQUFZO0VBQ1osZUFBZTtFQUNmLG9CQUFvQjtFQUNwQiwwQkFBMEI7RUFDMUIsOEJBQThCO0FBR2hDOztBQUFBO0VBQ0UscUJBQWE7RUFDYixxQkFBZ0I7RUFDaEIsaUNBQWE7RUFDYixxQkFBcUI7RUFDckIsY0FBYztFQUNkLDRCQUFvQjtFQUNwQixrQ0FBYTtFQUNiLHdCQUFzQjtFQUN0QixrQkFBa0I7RUFDbEIsY0FBYztFQUNkLHFCQUFhO0FBR2Y7O0FBZEE7RUFhSSxrQkFBa0I7RUFDbEIsV0FBVztFQUNYLFNBQVM7RUFDVCxZQUNGO0FBSUY7O0FBREE7RUFDRSxtQkFBbUI7RUFDbkIsbUJBQW1CO0VBQ25CLCtCQUErQjtFQUMvQixpQkFBaUI7RUFDakIsa0JBQWtCO0FBSXBCOztBQURBO0VBRUksa0JBQWE7QUFHakI7O0FBTEE7RUFJTSxnQ0FBZ0M7RUFDaEMsb0JBQW9CO0VBQ3BCLGtCQUFrQjtFQUNsQixlQUFlO0VBQ2Ysa0JBQWtCO0VBQ2xCLGVBQWU7RUFDZixnQkFBZ0I7QUFLdEI7O0FBZkE7RUFhTSxlQUFlO0VBQ2YscUJBQXFCO0VBQ3JCLGlCQUFpQjtFQUNqQixxQkFBcUI7RUFDckIsZ0JBQWdCO0VBQ2hCLHNCQUFzQjtBQU01Qjs7QUF4QkE7RUFxQk0saUJBQWlCO0VBQ2pCLGVBQWU7RUFDZixxQkFBcUI7QUFPM0IiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy91bml0VGFicy9maWx0ZXJzL2ZpbHRlcnMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWJ1dHRvbiB7XHJcbiAgbWFyZ2luLWxlZnQ6IDEwcHggIWltcG9ydGFudDtcclxufVxyXG5cclxuaW9uLWxpc3Qge1xyXG4gIGg0IHtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIGNvbG9yOiBcInRlcnRpYXJ5XCI7XHJcbiAgICBmb250LWZhbWlseTogXCJoZWx2ZXRpY2FuZXVlYm9sZFwiO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogOXB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG4gIH1cclxuICBpb24tbGFiZWwge1xyXG4gICAgY29sb3I6IFwidGVydGlhcnlcIiAhaW1wb3J0YW50O1xyXG4gICAgZm9udC1zaXplOiAxMy42cHggIWltcG9ydGFudDtcclxuICB9XHJcbn1cclxuXHJcbi5zYy1pb24taW5wdXQtaW9zLWgsXHJcbi5zZWxlY3Qtd2l0aCB7XHJcbiAgLS1ib3JkZXItY29sb3I6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XHJcbiAgLS1iYWNrZ3JvdW5kLWFjdGl2YXRlZDogd2hpdGU7XHJcbiAgLS1iYWNrZ3JvdW5kLWZvY3VzZWQ6IHdoaXRlO1xyXG4gIC0tYmFja2dyb3VuZC1ob3Zlcjogd2hpdGU7XHJcbiAgLS1oaWdobGlnaHQtaGVpZ2h0OiAwO1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICNjZGNmY2Y7XHJcbiAgYm9yZGVyLXJhZGl1czogNTBweDtcclxuICBjb2xvcjogXCJ0ZXJ0aWFyeVwiO1xyXG4gIGhlaWdodDogNDVweDtcclxuICBtYXJnaW46IDAgMjBweDtcclxuICB3aWR0aDogODklO1xyXG4gIGZvbnQtZmFtaWx5OiBcIm1lZGl1bVwiO1xyXG4gIC0tcGxhY2Vob2xkZXItb3BhY2l0eTogMTtcclxuICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcclxuICBwYWRkaW5nLWxlZnQ6IDIwcHggIWltcG9ydGFudDtcclxufVxyXG4uaW5wdXQtd2l0aCB7XHJcbiAgLS1ib3JkZXItY29sb3I6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XHJcbiAgLS1iYWNrZ3JvdW5kLWFjdGl2YXRlZDogd2hpdGU7XHJcbiAgLS1iYWNrZ3JvdW5kLWZvY3VzZWQ6IHdoaXRlO1xyXG4gIC0tYmFja2dyb3VuZC1ob3Zlcjogd2hpdGU7XHJcbiAgLS1oaWdobGlnaHQtaGVpZ2h0OiAwO1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICNjZGNmY2Y7XHJcbiAgYm9yZGVyLXJhZGl1czogNTBweDtcclxuICBjb2xvcjogIzcwNzA3MDtcclxuICBoZWlnaHQ6IDQ1cHg7XHJcbiAgbWFyZ2luOiAwIDIwcHg7XHJcbiAgd2lkdGg6IDg5JTtcclxuICBmb250LXNpemU6IDE1cHg7XHJcbiAgcGFkZGluZy10b3A6IDEyLjVweDtcclxuICBmb250LWZhbWlseTogXCJtZWRpdW1cIjtcclxufVxyXG4uYmFkLWNvbCB7XHJcbiAgZm9udC1mYW1pbHk6IFwibWVkaXVtXCI7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogXCJ0ZXJ0aWFyeVwiO1xyXG4gIG1hcmdpbjogMCAycHggMTBweDtcclxuICBmb250LXNpemU6IDEycHg7XHJcbiAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICBwYWRkaW5nOiA2cHggMTBweDtcclxuICBjb2xvcjogXCJzZWNvbmRhcnlcIjtcclxufVxyXG4uYnRuIHtcclxuICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcclxuICBoZWlnaHQ6IDM2cHg7XHJcbiAgZm9udC1zaXplOiAxNnB4O1xyXG4gIG1hcmdpbjogMCAhaW1wb3J0YW50O1xyXG4gIG1hcmdpbi10b3A6IDBweCAhaW1wb3J0YW50O1xyXG4gIGZvbnQtZmFtaWx5OiBoZWx2ZXRpY2FuZXVlYm9sZDtcclxufVxyXG5cclxuaW9uLXNlYXJjaGJhciB7XHJcbiAgLS1pY29uLWNvbG9yOiAjZWQxYjI1O1xyXG4gIC0tYm9yZGVyLXJhZGl1czogMjBweDtcclxuICAtLWJveC1zaGFkb3c6IDBweCAwcHggNXB4ICNlMGRiZGI7XHJcbiAgd2lkdGg6IDk1JSAhaW1wb3J0YW50O1xyXG4gIHBhZGRpbmctdG9wOiAwO1xyXG4gIC0tcGxhY2Vob2xkZXItY29sb3I6ICM5ODk3OTc7XHJcbiAgLS1ib3gtc2hhZG93OiAwcHggMHB4IDEwcHggI2Q2ZDVkNTtcclxuICAtLXBsYWNlaG9sZGVyLW9wYWNpdHk6IDE7XHJcbiAgcGFkZGluZy1sZWZ0OiAyNXB4O1xyXG4gIHBhZGRpbmctdG9wOiAwO1xyXG4gIC0tYmFja2dyb3VuZDogI0Y3RjdGNztcclxuICBpbWcge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgcmlnaHQ6IDI1cHg7XHJcbiAgICB0b3A6IDE4cHg7XHJcbiAgICB6LWluZGV4OiA5OTlcclxuICB9XHJcbn1cclxuXHJcbi5zZWFyY2hfbGlzdCB7XHJcbiAgYmFja2dyb3VuZDogI2Y3ZjdmNztcclxuICBib3JkZXItcmFkaXVzOiAxNXB4O1xyXG4gIGJveC1zaGFkb3c6IDBweCAwcHggNXB4ICNlMGRiZGI7XHJcbiAgbWFyZ2luLWxlZnQ6IDIwcHg7XHJcbiAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xyXG59XHJcblxyXG5pb24tbGlzdCB7XHJcbiAgaW9uLWl0ZW0ge1xyXG4gICAgLS1taW4taGVpZ2h0OiAzNXB4O1xyXG4gICAgaW9uLWxhYmVsIHtcclxuICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNjYWNhY2E7XHJcbiAgICAgIHBhZGRpbmctYm90dG9tOiAxMHB4O1xyXG4gICAgICBwYWRkaW5nLWxlZnQ6IDEycHg7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTBweDtcclxuICAgICAgbWFyZ2luLWJvdHRvbTogMHB4O1xyXG4gICAgICBtYXJnaW4tdG9wOiAwcHg7XHJcbiAgICAgIHBhZGRpbmctdG9wOiAwcHg7XHJcbiAgICB9XHJcbiAgICAubWFpbl90ZXh0IHtcclxuICAgICAgZm9udC1zaXplOiAxMXB4O1xyXG4gICAgICBmb250LWZhbWlseTogXCJtZWRpdW1cIjtcclxuICAgICAgY29sb3I6IFwidGVydGlhcnlcIjtcclxuICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICBtYXJnaW4tbGVmdDogOHB4O1xyXG4gICAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG4gICAgfVxyXG4gICAgLnNlY29uZGFyeV90ZXh0IHtcclxuICAgICAgY29sb3I6IFwidGVydGlhcnlcIjtcclxuICAgICAgZm9udC1zaXplOiAxMXB4O1xyXG4gICAgICBmb250LWZhbWlseTogXCJtZWRpdW1cIjtcclxuICAgIH1cclxuICB9XHJcbn0iXX0= */";
      /***/
    },

    /***/
    "./src/app/pages/unitTabs/filters/filters.page.ts":
    /*!********************************************************!*\
      !*** ./src/app/pages/unitTabs/filters/filters.page.ts ***!
      \********************************************************/

    /*! exports provided: FiltersPage */

    /***/
    function srcAppPagesUnitTabsFiltersFiltersPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FiltersPage", function () {
        return FiltersPage;
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


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var src_app_services_api_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/services/api-service.service */
      "./src/app/services/api-service.service.ts");
      /* harmony import */


      var src_app_services_global_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/services/global.service */
      "./src/app/services/global.service.ts");
      /* harmony import */


      var _config_config__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../config/config */
      "./src/app/pages/config/config.ts");
      /* harmony import */


      var _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @ionic-native/geolocation/ngx */
      "./node_modules/@ionic-native/geolocation/__ivy_ngcc__/ngx/index.js");
      /* harmony import */


      var _ionic_native_native_geocoder_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @ionic-native/native-geocoder/ngx */
      "./node_modules/@ionic-native/native-geocoder/__ivy_ngcc__/ngx/index.js");

      var FiltersPage = /*#__PURE__*/function () {
        function FiltersPage(api, _gs, navParams, modalCtrl, zone, nativeGeocoder, geolocation) {
          var _this = this;

          _classCallCheck(this, FiltersPage);

          this.api = api;
          this._gs = _gs;
          this.navParams = navParams;
          this.modalCtrl = modalCtrl;
          this.zone = zone;
          this.nativeGeocoder = nativeGeocoder;
          this.geolocation = geolocation;
          this.url = _config_config__WEBPACK_IMPORTED_MODULE_5__["config"].url;
          this.features = [];
          this.timeSlotTypeList = [];
          this.dates = {
            startDate: '',
            endDate: ''
          };
          this.selectedFeaturs = [];
          this.selectedTimeSlot = [];
          this.city = ''; // get current location

          setTimeout(function () {
            _this.getCurrentLocation();
          }, 1500);
          this.GoogleAutocomplete = new google.maps.places.AutocompleteService();
          this.autocomplete = {
            input: ''
          };
          this.autocompleteItems = [];
        }

        _createClass(FiltersPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            if (this.navParams.get('filters')) {
              var filters = JSON.parse(this.navParams.get('filters'));
              console.log(filters);
              this.city = filters.city;

              if (filters.selectedDates) {
                this.dates.startDate = filters.selectedDates.startDate;
                this.dates.endDate = filters.selectedDates.endDate;
              }

              if (filters.features) {
                this.selectedFeaturs = filters.features;
              }

              if (filters.accessTime) {
                this.selectedTimeSlot = filters.accessTime;
              }
            }

            this.placeMeta();
          }
        }, {
          key: "placeMeta",
          value: function placeMeta() {
            var _this2 = this;

            var params = {
              apiKey: _config_config__WEBPACK_IMPORTED_MODULE_5__["KEY"].apikey
            };
            this.api.postRequest(this.url + _config_config__WEBPACK_IMPORTED_MODULE_5__["UNITURL"].placeMeta, params).subscribe(function (result) {
              return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this2, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
                var _this3 = this;

                return regeneratorRuntime.wrap(function _callee$(_context) {
                  while (1) {
                    switch (_context.prev = _context.next) {
                      case 0:
                        if (result.success) {
                          console.log(result);
                          this.features = result.data.list.amenities;
                          console.log(this.features);

                          if (this.selectedFeaturs.length) {
                            this.selectedFeaturs.map(function (y) {
                              var index = _this3.features.indexOf(y._id);

                              _this3.features.splice(index, 1);
                            });
                          }

                          this.timeSlotTypeList = result.data.list.accessType;
                          console.log(this.timeSlotTypeList);

                          if (this.selectedTimeSlot.length) {
                            this.selectedTimeSlot.map(function (x) {
                              _this3.selectedAccess = x;
                            });
                          }

                          ;
                        } else {
                          console.log(result.message);
                        }

                      case 1:
                      case "end":
                        return _context.stop();
                    }
                  }
                }, _callee, this);
              }));
            });
          }
        }, {
          key: "onTimeChange",
          value: function onTimeChange(ev) {
            this.selectedTimeSlot = [];
            this.selectedTimeSlot.push(ev.detail.value);
            console.log(this.selectedTimeSlot);
          }
        }, {
          key: "applyFilters",
          value: function applyFilters() {
            var filters = {};

            if (this.selectedTimeSlot.length) {
              filters['accessTime'] = this.selectedTimeSlot;
            }

            if (this.dates.startDate && this.dates.endDate) {
              filters['selectedDates'] = this.dates;
            }

            if (this.city) {
              filters['city'] = this.city;
            }

            if (this.features.length) {
              var featuresArray = [];

              for (var i = 0; i < this.features.length; i++) {
                featuresArray.push(this.features[i]._id);
              }

              filters['features'] = featuresArray;
            }

            console.log(filters); // return;

            this.dismiss();

            this._gs.setFilterRefresh(filters);
          }
        }, {
          key: "clearFilters",
          value: function clearFilters() {
            this.clearAll();

            this._gs.setFilterRefresh("");
          }
        }, {
          key: "clearAll",
          value: function clearAll() {
            this.selectedFeaturs = [];
            this.placeMeta();
            this.dates.startDate = '';
            this.dates.endDate = '';
            this.city = '';
            this.selectedAccess = '';
            this.dismiss();
          }
        }, {
          key: "clearFeature",
          value: function clearFeature(i) {
            this.features.splice(i);
          }
        }, {
          key: "dismiss",
          value: function dismiss() {
            this.modalCtrl.dismiss({
              'dismissed': true
            });
          }
        }, {
          key: "checkFocus",
          value: function checkFocus() {
            console.log('focus');
          }
        }, {
          key: "clearAutocomplete",
          value: function clearAutocomplete() {
            this.autocompleteItems = [];
            this.autocomplete.input = '';
          }
        }, {
          key: "searchLocation",
          value: function searchLocation() {
            var _this4 = this;

            if (this.autocomplete.input == '') {
              this.autocompleteItems = [];
              return;
            }

            this.GoogleAutocomplete.getPlacePredictions({
              input: this.autocomplete.input
            }, function (predictions, status) {
              _this4.autocompleteItems = [];

              _this4.zone.run(function () {
                predictions.forEach(function (prediction) {
                  _this4.autocompleteItems.push(prediction);
                });
              });
            });
          }
        }, {
          key: "selectSearchResult",
          value: function selectSearchResult(item) {
            var _this5 = this;

            this.address = item.structured_formatting.main_text;
            this.autocomplete.input = this.address;
            this.autocompleteItems = [];
            this.getLatLOng(item.description).then(function (location) {
              _this5.filters['location'] = [location[0]['longitude'], location[0]['latitude']];
            });
          }
        }, {
          key: "getLatLOng",
          value: function getLatLOng(addressString) {
            var _this6 = this;

            console.log(addressString);
            var options = {
              useLocale: true,
              maxResults: 5
            };
            console.log(options);
            return new Promise(function (resolve, reject) {
              _this6.nativeGeocoder.forwardGeocode(addressString).then(function (result) {
                console.log(result);
                resolve(result);
              })["catch"](function (error) {
                reject(error);
              });
            });
          }
        }, {
          key: "getCurrentLocation",
          value: function getCurrentLocation() {
            var _this7 = this;

            this.geolocation.getCurrentPosition().then(function (resp) {
              _this7.lat = resp.coords.latitude;
              _this7["long"] = resp.coords.longitude;

              _this7.getAddressFromCoords(resp.coords.latitude, resp.coords.longitude);
            });
          }
        }, {
          key: "useCurrentLocation",
          value: function useCurrentLocation() {
            if (this.lat && this["long"]) {
              this.filters['location'] = [this.lat, this["long"]];
            }
          }
        }, {
          key: "getAddressFromCoords",
          value: function getAddressFromCoords(latitude, longitude) {
            var _this8 = this;

            console.log("getAddressFromCoords " + latitude + " " + longitude);

            if (latitude == undefined) {
              return;
            }

            var options = {
              useLocale: true,
              maxResults: 5
            };
            this.nativeGeocoder.reverseGeocode(latitude, longitude, options).then(function (result) {
              _this8.address = "";
              var responseAddress = [];

              for (var _i = 0, _Object$entries = Object.entries(result[0]); _i < _Object$entries.length; _i++) {
                var _Object$entries$_i = _slicedToArray(_Object$entries[_i], 2),
                    key = _Object$entries$_i[0],
                    value = _Object$entries$_i[1];

                if (value.length > 0) responseAddress.push(value);
              }

              responseAddress.reverse();

              for (var _i2 = 0, _responseAddress = responseAddress; _i2 < _responseAddress.length; _i2++) {
                var _value = _responseAddress[_i2];
                _this8.address += _value + ", ";
              }

              _this8.address = _this8.address.slice(0, -2);
            })["catch"](function (error) {
              _this8.address = "Address Not Available!";
            });
          }
        }]);

        return FiltersPage;
      }();

      FiltersPage.ctorParameters = function () {
        return [{
          type: src_app_services_api_service_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"]
        }, {
          type: src_app_services_global_service__WEBPACK_IMPORTED_MODULE_4__["GlobalService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavParams"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]
        }, {
          type: _ionic_native_native_geocoder_ngx__WEBPACK_IMPORTED_MODULE_7__["NativeGeocoder"]
        }, {
          type: _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_6__["Geolocation"]
        }];
      };

      FiltersPage.propDecorators = {
        filters: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }]
      };
      FiltersPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-filters',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./filters.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/unitTabs/filters/filters.page.html"))["default"],
        providers: [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavParams"]],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./filters.page.scss */
        "./src/app/pages/unitTabs/filters/filters.page.scss"))["default"]]
      })], FiltersPage);
      /***/
    },

    /***/
    "./src/app/pages/unitTabs/tab1/tab1-routing.module.ts":
    /*!************************************************************!*\
      !*** ./src/app/pages/unitTabs/tab1/tab1-routing.module.ts ***!
      \************************************************************/

    /*! exports provided: Tab1PageRoutingModule */

    /***/
    function srcAppPagesUnitTabsTab1Tab1RoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Tab1PageRoutingModule", function () {
        return Tab1PageRoutingModule;
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


      var _tab1_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./tab1.page */
      "./src/app/pages/unitTabs/tab1/tab1.page.ts");

      var routes = [{
        path: '',
        component: _tab1_page__WEBPACK_IMPORTED_MODULE_3__["Tab1Page"]
      }];

      var Tab1PageRoutingModule = function Tab1PageRoutingModule() {
        _classCallCheck(this, Tab1PageRoutingModule);
      };

      Tab1PageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], Tab1PageRoutingModule);
      /***/
    },

    /***/
    "./src/app/pages/unitTabs/tab1/tab1.module.ts":
    /*!****************************************************!*\
      !*** ./src/app/pages/unitTabs/tab1/tab1.module.ts ***!
      \****************************************************/

    /*! exports provided: Tab1PageModule */

    /***/
    function srcAppPagesUnitTabsTab1Tab1ModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Tab1PageModule", function () {
        return Tab1PageModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/forms */
      "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
      /* harmony import */


      var _tab1_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./tab1.page */
      "./src/app/pages/unitTabs/tab1/tab1.page.ts");
      /* harmony import */


      var _tab1_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./tab1-routing.module */
      "./src/app/pages/unitTabs/tab1/tab1-routing.module.ts");
      /* harmony import */


      var _filters_filters_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../filters/filters.module */
      "./src/app/pages/unitTabs/filters/filters.module.ts");
      /* harmony import */


      var src_app_rating_rating_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! src/app/rating/rating.module */
      "./src/app/rating/rating.module.ts");
      /* harmony import */


      var src_app_component_shared_space_type_slider_shared_space_type_slider_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! src/app/component/shared-space-type-slider/shared-space-type-slider.component */
      "./src/app/component/shared-space-type-slider/shared-space-type-slider.component.ts");
      /* harmony import */


      var src_app_component_unit_listing_unit_listing_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! src/app/component/unit-listing/unit-listing.component */
      "./src/app/component/unit-listing/unit-listing.component.ts");

      var Tab1PageModule = function Tab1PageModule() {
        _classCallCheck(this, Tab1PageModule);
      };

      Tab1PageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        imports: [_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonicModule"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"], _tab1_routing_module__WEBPACK_IMPORTED_MODULE_6__["Tab1PageRoutingModule"], _filters_filters_module__WEBPACK_IMPORTED_MODULE_7__["FiltersPageModule"], src_app_rating_rating_module__WEBPACK_IMPORTED_MODULE_8__["RatingPageModule"]],
        entryComponents: [],
        declarations: [_tab1_page__WEBPACK_IMPORTED_MODULE_5__["Tab1Page"], src_app_component_shared_space_type_slider_shared_space_type_slider_component__WEBPACK_IMPORTED_MODULE_9__["SharedSpaceTypeSliderComponent"], src_app_component_unit_listing_unit_listing_component__WEBPACK_IMPORTED_MODULE_10__["UnitListingComponent"]]
      })], Tab1PageModule);
      /***/
    },

    /***/
    "./src/app/pages/unitTabs/tab1/tab1.page.scss":
    /*!****************************************************!*\
      !*** ./src/app/pages/unitTabs/tab1/tab1.page.scss ***!
      \****************************************************/

    /*! exports provided: default */

    /***/
    function srcAppPagesUnitTabsTab1Tab1PageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ":host {\n  --min-height: 35px !important;\n}\n\nion-content {\n  transform: translate3d(0, 12px, 0);\n  --offset-bottom: auto !important;\n  --overflow: hidden;\n  overflow: auto;\n}\n\nion-content::-webkit-scrollbar {\n  display: none;\n}\n\n.content {\n  background-color: \"tertiary\";\n  border-radius: 25px 25px 0px 0px;\n  padding-top: 0px;\n  box-shadow: 0px 0px 10px #a3a4a7;\n  margin-top: 20px;\n  height: auto;\n}\n\n.swiper-slide {\n  width: 100% !important;\n}\n\n.swiper-slide img {\n  width: 100%;\n  max-width: 100%;\n  max-height: 100%;\n  -o-object-fit: cover;\n     object-fit: cover;\n  border-radius: 15px;\n  height: 280px;\n}\n\n.card-grid {\n  padding-top: 0px !important;\n  padding-bottom: 0px !important;\n}\n\n.card-grid-new {\n  padding-top: 0px !important;\n  padding-bottom: 30px !important;\n}\n\n.card_features {\n  -webkit-margin-start: 10px !important;\n          margin-inline-start: 10px !important;\n  -webkit-margin-end: 10px !important;\n          margin-inline-end: 10px !important;\n}\n\n.card_features ion-card-header {\n  padding-bottom: 5px !important;\n  padding: 0;\n}\n\n.card_features ion-card-header ion-card-subtitle {\n  text-align: left;\n  font-size: 13px;\n  font-weight: 400;\n  margin-top: 8px;\n  padding-top: 0;\n  font-family: \"helveticaneuebold\";\n  color: \"dark\";\n  margin-bottom: 0;\n  padding-bottom: 3px;\n}\n\n.card_features ion-card-header ion-card-title {\n  text-align: left;\n  color: #000;\n  font-size: 11px;\n  font-family: \"medium\";\n  font-weight: 400;\n}\n\n.card_features ion-card-header ion-card-title span {\n  color: #9b9b9b;\n}\n\n.card_features ion-card-content .rating {\n  text-align: left !important;\n}\n\n.card_features ion-card-content .card-content {\n  text-align: left !important;\n  color: #000;\n  font-size: 11px !important;\n  margin-top: 6px;\n  margin-bottom: 6px;\n  font-family: \"medium\";\n}\n\n.card_features ion-card-content .card-content span {\n  color: #9b9b9b;\n}\n\n.card_features ion-card-content .card-content-popular {\n  text-align: left !important;\n  color: #000;\n  font-size: 11px !important;\n  font-family: \"medium\";\n}\n\n.card_features ion-card-content .card-content-popular span {\n  color: #9b9b9b;\n}\n\n.sc-ion-card-md-h,\n.sc-ion-card-ios-h {\n  margin-top: 0;\n  margin-bottom: 0;\n  -webkit-margin-start: 0;\n  margin-inline-start: 0;\n  -webkit-margin-end: 0;\n  margin-inline-end: 0;\n}\n\n.top-heading {\n  margin-left: 15px;\n  margin-top: 20px;\n  margin-bottom: 0px;\n  font-size: 18px;\n  font-family: \"helveticaneuebold\";\n  color: \"tertiary\";\n}\n\n.top-heading-popular {\n  margin-left: 15px;\n  margin-top: 20px;\n  margin-bottom: 15px;\n  font-size: 18px;\n  font-family: \"helveticaneuebold\";\n  color: \"tertiary\";\n}\n\n.category ion-col {\n  text-align: center;\n}\n\n.category ion-col div {\n  border-radius: 18px;\n  border: 1px solid #ed1b25;\n  padding: 6px;\n  width: 65px;\n  display: inline-block;\n}\n\n.category ion-col span {\n  display: block;\n  font-size: 12px;\n  color: #9b9b9b;\n  margin-top: 7px;\n  font-family: \"medium\";\n}\n\n.user-details ion-col p {\n  padding-top: 0px;\n  margin-top: 0px;\n}\n\n.noti {\n  text-align: right;\n}\n\n.noti ion-icon {\n  font-size: 24px;\n  margin-top: 20px;\n  margin-right: 5px;\n}\n\n.noti_main ion-icon {\n  font-size: 24px;\n  margin-top: 12px;\n  margin-right: 10px;\n}\n\nion-searchbar {\n  --icon-color: #ed1b25;\n  --border-radius: 20px;\n  --box-shadow: 0px 0px 5px #e0dbdb;\n  width: 104% !important;\n  padding-top: 0;\n  --placeholder-color: \"#989797\";\n  --box-shadow: 0px 0px 10px #d6d5d5;\n  --placeholder-opacity: 1;\n  padding-left: 0px;\n  padding-top: 0;\n  --background: #F7F7F7;\n}\n\nion-searchbar img {\n  position: absolute;\n  right: 25px;\n  top: 18px;\n  z-index: 999;\n}\n\n.no-item {\n  text-align: center;\n}\n\n.name-txt {\n  font-size: 23px;\n  color: \"tertiary\";\n  font-family: \"helveticaneuebold\";\n}\n\n.find-txt {\n  font-size: 12px;\n  color: \"tertiary\";\n}\n\n.card_features {\n  box-shadow: none;\n}\n\n.no-padding {\n  padding-left: 0;\n  padding-right: 0;\n  padding-bottom: 0;\n}\n\n.search_list {\n  background: \"#f7f7f7\";\n  border-radius: 15px;\n  box-shadow: 0px 0px 5px \"#e0dbdb\";\n  margin-left: 20px;\n  margin-right: 20px;\n}\n\nion-list ion-item {\n  --min-height: 35px;\n}\n\nion-list ion-item ion-label {\n  border-bottom: 1px solid #cacaca;\n  padding-bottom: 10px;\n  padding-left: 12px;\n  font-size: 10px;\n  margin-bottom: 0px;\n  margin-top: 0px;\n  padding-top: 0px;\n}\n\nion-list ion-item .main_text {\n  font-size: 11px;\n  font-family: \"medium\";\n  color: \"tertiary\";\n  display: inline-block;\n  margin-left: 8px;\n  vertical-align: middle;\n}\n\nion-list ion-item .secondary_text {\n  color: \"tertiary\";\n  font-size: 11px;\n  font-family: \"medium\";\n}\n\n.placelist .card_features img {\n  width: 100%;\n  border-radius: 15px;\n}\n\n.placelist .card-content-ios {\n  padding-left: 0px !important;\n  padding-right: 0px !important;\n  padding-top: 0px !important;\n  padding-bottom: 0px !important;\n  font-size: 16px;\n  line-height: 1.4;\n}\n\n.rating_main {\n  text-align: right !important;\n}\n\n.pricing_full {\n  position: absolute;\n  right: 10px;\n  z-index: 9999;\n  background: red;\n  top: 217px;\n  color: \"secondary\";\n  padding: 8px 20px;\n  border-radius: 30px;\n  font-size: 11px;\n  font-family: \"medium\";\n}\n\n.pad-lr {\n  padding: 0 15px;\n}\n\n.image-loc {\n  height: 10px;\n  width: 10px;\n}\n\n.clear {\n  text-align: end;\n  margin-right: 20px;\n}\n\n.img-spacetype {\n  max-width: 80% !important;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvdW5pdFRhYnMvdGFiMS90YWIxLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLDZCQUFhO0FBQ2Y7O0FBRUE7RUFDRSxrQ0FBa0M7RUFDbEMsZ0NBQWdCO0VBQ2hCLGtCQUFXO0VBQ1gsY0FBYztBQUNoQjs7QUFMQTtFQU1JLGFBQWE7QUFHakI7O0FBQ0E7RUFDRSw0QkFBNEI7RUFDNUIsZ0NBQWdDO0VBQ2hDLGdCQUFnQjtFQUNoQixnQ0FBZ0M7RUFDaEMsZ0JBQWdCO0VBQ2hCLFlBQVk7QUFFZDs7QUFDQTtFQUNFLHNCQUFzQjtBQUV4Qjs7QUFIQTtFQUdJLFdBQVc7RUFDWCxlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLG9CQUFpQjtLQUFqQixpQkFBaUI7RUFDakIsbUJBQW1CO0VBQ25CLGFBQWE7QUFJakI7O0FBREE7RUFDRSwyQkFBMkI7RUFDM0IsOEJBQThCO0FBSWhDOztBQUZBO0VBQ0UsMkJBQTJCO0VBQzNCLCtCQUErQjtBQUtqQzs7QUFGQTtFQUNFLHFDQUFvQztVQUFwQyxvQ0FBb0M7RUFDcEMsbUNBQWtDO1VBQWxDLGtDQUFrQztBQUtwQzs7QUFQQTtFQUlJLDhCQUE4QjtFQUM5QixVQUFVO0FBT2Q7O0FBWkE7RUFPTSxnQkFBZ0I7RUFDaEIsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixlQUFlO0VBQ2YsY0FBYztFQUNkLGdDQUFnQztFQUNoQyxhQUFhO0VBQ2IsZ0JBQWdCO0VBQ2hCLG1CQUFtQjtBQVN6Qjs7QUF4QkE7RUFrQk0sZ0JBQWdCO0VBQ2hCLFdBQVc7RUFDWCxlQUFlO0VBQ2YscUJBQXFCO0VBQ3JCLGdCQUFnQjtBQVV0Qjs7QUFoQ0E7RUF3QlEsY0FBYztBQVl0Qjs7QUFwQ0E7RUE4Qk0sMkJBQTJCO0FBVWpDOztBQXhDQTtFQWlDTSwyQkFBMkI7RUFDM0IsV0FBVztFQUNYLDBCQUEwQjtFQUMxQixlQUFlO0VBQ2Ysa0JBQWtCO0VBQ2xCLHFCQUFxQjtBQVczQjs7QUFqREE7RUF3Q1EsY0FBYztBQWF0Qjs7QUFyREE7RUE0Q00sMkJBQTJCO0VBQzNCLFdBQVc7RUFDWCwwQkFBMEI7RUFDMUIscUJBQXFCO0FBYTNCOztBQTVEQTtFQWlEUSxjQUFjO0FBZXRCOztBQVRBOztFQUVFLGFBQWE7RUFDYixnQkFBZ0I7RUFDaEIsdUJBQXVCO0VBQ3ZCLHNCQUFzQjtFQUN0QixxQkFBcUI7RUFDckIsb0JBQW9CO0FBWXRCOztBQVRBO0VBQ0UsaUJBQWlCO0VBQ2pCLGdCQUFnQjtFQUNoQixrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLGdDQUFnQztFQUNoQyxpQkFBaUI7QUFZbkI7O0FBVkE7RUFDRSxpQkFBaUI7RUFDakIsZ0JBQWdCO0VBQ2hCLG1CQUFtQjtFQUNuQixlQUFlO0VBQ2YsZ0NBQWdDO0VBQ2hDLGlCQUFpQjtBQWFuQjs7QUFWQTtFQUVJLGtCQUFrQjtBQVl0Qjs7QUFkQTtFQUlNLG1CQUFtQjtFQUNuQix5QkFBeUI7RUFDekIsWUFBWTtFQUNaLFdBQVc7RUFDWCxxQkFBcUI7QUFjM0I7O0FBdEJBO0VBV00sY0FBYztFQUNkLGVBQWU7RUFDZixjQUFjO0VBQ2QsZUFBZTtFQUNmLHFCQUFxQjtBQWUzQjs7QUFYQTtFQUdNLGdCQUFnQjtFQUNoQixlQUFlO0FBWXJCOztBQVBBO0VBQ0UsaUJBQWlCO0FBVW5COztBQVhBO0VBR0ksZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixpQkFBaUI7QUFZckI7O0FBVEE7RUFFSSxlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtBQVd0Qjs7QUFQQTtFQUNFLHFCQUFhO0VBQ2IscUJBQWdCO0VBQ2hCLGlDQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLGNBQWM7RUFDZCw4QkFBb0I7RUFDcEIsa0NBQWE7RUFDYix3QkFBc0I7RUFDdEIsaUJBQWlCO0VBQ2pCLGNBQWM7RUFDZCxxQkFBYTtBQVVmOztBQXJCQTtFQWFJLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsU0FBUztFQUNULFlBQ0Y7QUFXRjs7QUFSQTtFQUNFLGtCQUFrQjtBQVdwQjs7QUFUQTtFQUNFLGVBQWU7RUFDZixpQkFBaUI7RUFDakIsZ0NBQWdDO0FBWWxDOztBQVZBO0VBQ0UsZUFBZTtFQUNmLGlCQUFpQjtBQWFuQjs7QUFYQTtFQUNFLGdCQUFnQjtBQWNsQjs7QUFaQTtFQUNFLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsaUJBQWlCO0FBZW5COztBQVpBO0VBQ0UscUJBQXFCO0VBQ3JCLG1CQUFtQjtFQUNuQixpQ0FBaUM7RUFDakMsaUJBQWlCO0VBQ2pCLGtCQUFrQjtBQWVwQjs7QUFiQTtFQUVJLGtCQUFhO0FBZWpCOztBQWpCQTtFQUlNLGdDQUFnQztFQUNoQyxvQkFBb0I7RUFDcEIsa0JBQWtCO0VBQ2xCLGVBQWU7RUFDZixrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLGdCQUFnQjtBQWlCdEI7O0FBM0JBO0VBYU0sZUFBZTtFQUNmLHFCQUFxQjtFQUNyQixpQkFBaUI7RUFDakIscUJBQXFCO0VBQ3JCLGdCQUFnQjtFQUNoQixzQkFBc0I7QUFrQjVCOztBQXBDQTtFQXFCTSxpQkFBaUI7RUFDakIsZUFBZTtFQUNmLHFCQUFxQjtBQW1CM0I7O0FBZEE7RUFHTSxXQUFXO0VBQ1gsbUJBQW1CO0FBZXpCOztBQW5CQTtFQVFJLDRCQUE0QjtFQUM1Qiw2QkFBNkI7RUFDN0IsMkJBQTJCO0VBQzNCLDhCQUE4QjtFQUM5QixlQUFlO0VBQ2YsZ0JBQWdCO0FBZXBCOztBQVpBO0VBQ0UsNEJBQTRCO0FBZTlCOztBQWJBO0VBQ0Usa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxhQUFhO0VBQ2IsZUFBZTtFQUNmLFVBQVU7RUFDVixrQkFBa0I7RUFDbEIsaUJBQWlCO0VBQ2pCLG1CQUFtQjtFQUNuQixlQUFlO0VBQ2YscUJBQXFCO0FBZ0J2Qjs7QUFiQTtFQUNFLGVBQWU7QUFnQmpCOztBQWRBO0VBQ0UsWUFBWTtFQUNaLFdBQVc7QUFpQmI7O0FBZkE7RUFDRSxlQUFlO0VBQ2Ysa0JBQWtCO0FBa0JwQjs7QUFmQTtFQUNBLHlCQUF5QjtBQWtCekIiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy91bml0VGFicy90YWIxL3RhYjEucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xyXG4gIC0tbWluLWhlaWdodDogMzVweCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG5pb24tY29udGVudCB7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAxMnB4LCAwKTtcclxuICAtLW9mZnNldC1ib3R0b206IGF1dG8gIWltcG9ydGFudDtcclxuICAtLW92ZXJmbG93OiBoaWRkZW47XHJcbiAgb3ZlcmZsb3c6IGF1dG87XHJcbiAgJjo6LXdlYmtpdC1zY3JvbGxiYXIge1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxuICB9XHJcbn1cclxuXHJcbi5jb250ZW50IHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBcInRlcnRpYXJ5XCI7XHJcbiAgYm9yZGVyLXJhZGl1czogMjVweCAyNXB4IDBweCAwcHg7XHJcbiAgcGFkZGluZy10b3A6IDBweDtcclxuICBib3gtc2hhZG93OiAwcHggMHB4IDEwcHggI2EzYTRhNztcclxuICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gIGhlaWdodDogYXV0bztcclxufVxyXG5cclxuLnN3aXBlci1zbGlkZSB7XHJcbiAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcclxuICBpbWcge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBtYXgtd2lkdGg6IDEwMCU7XHJcbiAgICBtYXgtaGVpZ2h0OiAxMDAlO1xyXG4gICAgb2JqZWN0LWZpdDogY292ZXI7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xyXG4gICAgaGVpZ2h0OiAyODBweDtcclxuICB9XHJcbn1cclxuLmNhcmQtZ3JpZCB7XHJcbiAgcGFkZGluZy10b3A6IDBweCAhaW1wb3J0YW50O1xyXG4gIHBhZGRpbmctYm90dG9tOiAwcHggIWltcG9ydGFudDtcclxufVxyXG4uY2FyZC1ncmlkLW5ld3tcclxuICBwYWRkaW5nLXRvcDogMHB4ICFpbXBvcnRhbnQ7XHJcbiAgcGFkZGluZy1ib3R0b206IDMwcHggIWltcG9ydGFudDtcclxufSBcclxuXHJcbi5jYXJkX2ZlYXR1cmVzIHtcclxuICBtYXJnaW4taW5saW5lLXN0YXJ0OiAxMHB4ICFpbXBvcnRhbnQ7XHJcbiAgbWFyZ2luLWlubGluZS1lbmQ6IDEwcHggIWltcG9ydGFudDtcclxuICBpb24tY2FyZC1oZWFkZXIge1xyXG4gICAgcGFkZGluZy1ib3R0b206IDVweCAhaW1wb3J0YW50O1xyXG4gICAgcGFkZGluZzogMDtcclxuICAgIGlvbi1jYXJkLXN1YnRpdGxlIHtcclxuICAgICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgICAgZm9udC1zaXplOiAxM3B4O1xyXG4gICAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgICBtYXJnaW4tdG9wOiA4cHg7XHJcbiAgICAgIHBhZGRpbmctdG9wOiAwO1xyXG4gICAgICBmb250LWZhbWlseTogXCJoZWx2ZXRpY2FuZXVlYm9sZFwiO1xyXG4gICAgICBjb2xvcjogXCJkYXJrXCI7XHJcbiAgICAgIG1hcmdpbi1ib3R0b206IDA7XHJcbiAgICAgIHBhZGRpbmctYm90dG9tOiAzcHg7XHJcbiAgICB9XHJcbiAgICBpb24tY2FyZC10aXRsZSB7XHJcbiAgICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICAgIGNvbG9yOiAjMDAwO1xyXG4gICAgICBmb250LXNpemU6IDExcHg7XHJcbiAgICAgIGZvbnQtZmFtaWx5OiBcIm1lZGl1bVwiO1xyXG4gICAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgICBzcGFuIHtcclxuICAgICAgICBjb2xvcjogIzliOWI5YjtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuICBpb24tY2FyZC1jb250ZW50IHtcclxuICAgIC5yYXRpbmcge1xyXG4gICAgICB0ZXh0LWFsaWduOiBsZWZ0ICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbiAgICAuY2FyZC1jb250ZW50IHtcclxuICAgICAgdGV4dC1hbGlnbjogbGVmdCAhaW1wb3J0YW50O1xyXG4gICAgICBjb2xvcjogIzAwMDtcclxuICAgICAgZm9udC1zaXplOiAxMXB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgIG1hcmdpbi10b3A6IDZweDtcclxuICAgICAgbWFyZ2luLWJvdHRvbTogNnB4O1xyXG4gICAgICBmb250LWZhbWlseTogXCJtZWRpdW1cIjtcclxuICAgICAgc3BhbiB7XHJcbiAgICAgICAgY29sb3I6ICM5YjliOWI7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIC5jYXJkLWNvbnRlbnQtcG9wdWxhcntcclxuICAgICAgdGV4dC1hbGlnbjogbGVmdCAhaW1wb3J0YW50O1xyXG4gICAgICBjb2xvcjogIzAwMDtcclxuICAgICAgZm9udC1zaXplOiAxMXB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgIGZvbnQtZmFtaWx5OiBcIm1lZGl1bVwiO1xyXG4gICAgICBzcGFuIHtcclxuICAgICAgICBjb2xvcjogIzliOWI5YjtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuLnNjLWlvbi1jYXJkLW1kLWgsXHJcbi5zYy1pb24tY2FyZC1pb3MtaCB7XHJcbiAgbWFyZ2luLXRvcDogMDtcclxuICBtYXJnaW4tYm90dG9tOiAwO1xyXG4gIC13ZWJraXQtbWFyZ2luLXN0YXJ0OiAwO1xyXG4gIG1hcmdpbi1pbmxpbmUtc3RhcnQ6IDA7XHJcbiAgLXdlYmtpdC1tYXJnaW4tZW5kOiAwO1xyXG4gIG1hcmdpbi1pbmxpbmUtZW5kOiAwO1xyXG59XHJcblxyXG4udG9wLWhlYWRpbmcge1xyXG4gIG1hcmdpbi1sZWZ0OiAxNXB4O1xyXG4gIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogMHB4O1xyXG4gIGZvbnQtc2l6ZTogMThweDtcclxuICBmb250LWZhbWlseTogXCJoZWx2ZXRpY2FuZXVlYm9sZFwiO1xyXG4gIGNvbG9yOiBcInRlcnRpYXJ5XCI7XHJcbn1cclxuLnRvcC1oZWFkaW5nLXBvcHVsYXJ7XHJcbiAgbWFyZ2luLWxlZnQ6IDE1cHg7XHJcbiAgbWFyZ2luLXRvcDogMjBweDtcclxuICBtYXJnaW4tYm90dG9tOiAxNXB4O1xyXG4gIGZvbnQtc2l6ZTogMThweDtcclxuICBmb250LWZhbWlseTogXCJoZWx2ZXRpY2FuZXVlYm9sZFwiO1xyXG4gIGNvbG9yOiBcInRlcnRpYXJ5XCI7XHJcbn1cclxuXHJcbi5jYXRlZ29yeSB7XHJcbiAgaW9uLWNvbCB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBkaXYge1xyXG4gICAgICBib3JkZXItcmFkaXVzOiAxOHB4O1xyXG4gICAgICBib3JkZXI6IDFweCBzb2xpZCAjZWQxYjI1O1xyXG4gICAgICBwYWRkaW5nOiA2cHg7XHJcbiAgICAgIHdpZHRoOiA2NXB4O1xyXG4gICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICB9XHJcbiAgICBzcGFuIHtcclxuICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgICAgY29sb3I6ICM5YjliOWI7XHJcbiAgICAgIG1hcmdpbi10b3A6IDdweDtcclxuICAgICAgZm9udC1mYW1pbHk6IFwibWVkaXVtXCI7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbi51c2VyLWRldGFpbHMge1xyXG4gIGlvbi1jb2wge1xyXG4gICAgcCB7XHJcbiAgICAgIHBhZGRpbmctdG9wOiAwcHg7XHJcbiAgICAgIG1hcmdpbi10b3A6IDBweDtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi5ub3RpIHtcclxuICB0ZXh0LWFsaWduOiByaWdodDtcclxuICBpb24taWNvbiB7XHJcbiAgICBmb250LXNpemU6IDI0cHg7XHJcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiA1cHg7XHJcbiAgfVxyXG59XHJcbi5ub3RpX21haW57XHJcbiAgaW9uLWljb24ge1xyXG4gICAgZm9udC1zaXplOiAyNHB4O1xyXG4gICAgbWFyZ2luLXRvcDogMTJweDtcclxuICAgIG1hcmdpbi1yaWdodDogMTBweDtcclxuICB9XHJcbn1cclxuXHJcbmlvbi1zZWFyY2hiYXIge1xyXG4gIC0taWNvbi1jb2xvcjogI2VkMWIyNTtcclxuICAtLWJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbiAgLS1ib3gtc2hhZG93OiAwcHggMHB4IDVweCAjZTBkYmRiO1xyXG4gIHdpZHRoOiAxMDQlICFpbXBvcnRhbnQ7XHJcbiAgcGFkZGluZy10b3A6IDA7XHJcbiAgLS1wbGFjZWhvbGRlci1jb2xvcjogXCIjOTg5Nzk3XCI7XHJcbiAgLS1ib3gtc2hhZG93OiAwcHggMHB4IDEwcHggI2Q2ZDVkNTtcclxuICAtLXBsYWNlaG9sZGVyLW9wYWNpdHk6IDE7XHJcbiAgcGFkZGluZy1sZWZ0OiAwcHg7XHJcbiAgcGFkZGluZy10b3A6IDA7XHJcbiAgLS1iYWNrZ3JvdW5kOiAjRjdGN0Y3O1xyXG4gIGltZyB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICByaWdodDogMjVweDtcclxuICAgIHRvcDogMThweDtcclxuICAgIHotaW5kZXg6IDk5OVxyXG4gIH1cclxufVxyXG5cclxuLm5vLWl0ZW0ge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG4ubmFtZS10eHQge1xyXG4gIGZvbnQtc2l6ZTogMjNweDtcclxuICBjb2xvcjogXCJ0ZXJ0aWFyeVwiO1xyXG4gIGZvbnQtZmFtaWx5OiBcImhlbHZldGljYW5ldWVib2xkXCI7XHJcbn1cclxuLmZpbmQtdHh0IHtcclxuICBmb250LXNpemU6IDEycHg7XHJcbiAgY29sb3I6IFwidGVydGlhcnlcIjtcclxufVxyXG4uY2FyZF9mZWF0dXJlcyB7XHJcbiAgYm94LXNoYWRvdzogbm9uZTtcclxufVxyXG4ubm8tcGFkZGluZyB7XHJcbiAgcGFkZGluZy1sZWZ0OiAwO1xyXG4gIHBhZGRpbmctcmlnaHQ6IDA7XHJcbiAgcGFkZGluZy1ib3R0b206IDA7XHJcbn1cclxuXHJcbi5zZWFyY2hfbGlzdCB7XHJcbiAgYmFja2dyb3VuZDogXCIjZjdmN2Y3XCI7XHJcbiAgYm9yZGVyLXJhZGl1czogMTVweDtcclxuICBib3gtc2hhZG93OiAwcHggMHB4IDVweCBcIiNlMGRiZGJcIjtcclxuICBtYXJnaW4tbGVmdDogMjBweDtcclxuICBtYXJnaW4tcmlnaHQ6IDIwcHg7XHJcbn1cclxuaW9uLWxpc3Qge1xyXG4gIGlvbi1pdGVtIHtcclxuICAgIC0tbWluLWhlaWdodDogMzVweDtcclxuICAgIGlvbi1sYWJlbCB7XHJcbiAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjY2FjYWNhO1xyXG4gICAgICBwYWRkaW5nLWJvdHRvbTogMTBweDtcclxuICAgICAgcGFkZGluZy1sZWZ0OiAxMnB4O1xyXG4gICAgICBmb250LXNpemU6IDEwcHg7XHJcbiAgICAgIG1hcmdpbi1ib3R0b206IDBweDtcclxuICAgICAgbWFyZ2luLXRvcDogMHB4O1xyXG4gICAgICBwYWRkaW5nLXRvcDogMHB4O1xyXG4gICAgfVxyXG4gICAgLm1haW5fdGV4dCB7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTFweDtcclxuICAgICAgZm9udC1mYW1pbHk6IFwibWVkaXVtXCI7XHJcbiAgICAgIGNvbG9yOiBcInRlcnRpYXJ5XCI7XHJcbiAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgbWFyZ2luLWxlZnQ6IDhweDtcclxuICAgICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxuICAgIH1cclxuICAgIC5zZWNvbmRhcnlfdGV4dCB7XHJcbiAgICAgIGNvbG9yOiBcInRlcnRpYXJ5XCI7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTFweDtcclxuICAgICAgZm9udC1mYW1pbHk6IFwibWVkaXVtXCI7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4ucGxhY2VsaXN0IHtcclxuICAuY2FyZF9mZWF0dXJlcyB7XHJcbiAgICBpbWcge1xyXG4gICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgYm9yZGVyLXJhZGl1czogMTVweDtcclxuICAgIH1cclxuICB9XHJcbiAgLmNhcmQtY29udGVudC1pb3Mge1xyXG4gICAgcGFkZGluZy1sZWZ0OiAwcHggIWltcG9ydGFudDtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDBweCAhaW1wb3J0YW50O1xyXG4gICAgcGFkZGluZy10b3A6IDBweCAhaW1wb3J0YW50O1xyXG4gICAgcGFkZGluZy1ib3R0b206IDBweCAhaW1wb3J0YW50O1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDEuNDtcclxuICB9XHJcbn1cclxuLnJhdGluZ19tYWluIHtcclxuICB0ZXh0LWFsaWduOiByaWdodCAhaW1wb3J0YW50O1xyXG59XHJcbi5wcmljaW5nX2Z1bGwge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICByaWdodDogMTBweDtcclxuICB6LWluZGV4OiA5OTk5O1xyXG4gIGJhY2tncm91bmQ6IHJlZDtcclxuICB0b3A6IDIxN3B4O1xyXG4gIGNvbG9yOiBcInNlY29uZGFyeVwiO1xyXG4gIHBhZGRpbmc6IDhweCAyMHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDMwcHg7XHJcbiAgZm9udC1zaXplOiAxMXB4O1xyXG4gIGZvbnQtZmFtaWx5OiBcIm1lZGl1bVwiO1xyXG59XHJcblxyXG4ucGFkLWxye1xyXG4gIHBhZGRpbmc6IDAgMTVweDtcclxufVxyXG4uaW1hZ2UtbG9je1xyXG4gIGhlaWdodDogMTBweDtcclxuICB3aWR0aDogMTBweDtcclxufVxyXG4uY2xlYXJ7XHJcbiAgdGV4dC1hbGlnbjogZW5kO1xyXG4gIG1hcmdpbi1yaWdodDogMjBweDtcclxufVxyXG5cclxuLmltZy1zcGFjZXR5cGV7XHJcbm1heC13aWR0aDogODAlICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbiJdfQ== */";
      /***/
    },

    /***/
    "./src/app/pages/unitTabs/tab1/tab1.page.ts":
    /*!**************************************************!*\
      !*** ./src/app/pages/unitTabs/tab1/tab1.page.ts ***!
      \**************************************************/

    /*! exports provided: Tab1Page */

    /***/
    function srcAppPagesUnitTabsTab1Tab1PageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Tab1Page", function () {
        return Tab1Page;
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


      var src_app_services_toast_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! src/app/services/toast.service */
      "./src/app/services/toast.service.ts");
      /* harmony import */


      var _config_config__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../../config/config */
      "./src/app/pages/config/config.ts");
      /* harmony import */


      var _ionic_storage__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @ionic/storage */
      "./node_modules/@ionic/storage/__ivy_ngcc__/fesm2015/ionic-storage.js");
      /* harmony import */


      var _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @ionic-native/geolocation/ngx */
      "./node_modules/@ionic-native/geolocation/__ivy_ngcc__/ngx/index.js");
      /* harmony import */


      var _ionic_native_native_geocoder_ngx__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @ionic-native/native-geocoder/ngx */
      "./node_modules/@ionic-native/native-geocoder/__ivy_ngcc__/ngx/index.js");
      /* harmony import */


      var _filters_filters_page__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ../filters/filters.page */
      "./src/app/pages/unitTabs/filters/filters.page.ts");

      var Tab1Page = /*#__PURE__*/function () {
        function Tab1Page(router, _apiService, _loader, _gs, storage, _toast, geolocation, nativeGeocoder, zone, modalCtrl) {
          var _this9 = this;

          _classCallCheck(this, Tab1Page);

          this.router = router;
          this._apiService = _apiService;
          this._loader = _loader;
          this._gs = _gs;
          this.storage = storage;
          this._toast = _toast;
          this.geolocation = geolocation;
          this.nativeGeocoder = nativeGeocoder;
          this.zone = zone;
          this.modalCtrl = modalCtrl;
          this.url = _config_config__WEBPACK_IMPORTED_MODULE_8__["config"].url;
          this.placesList = [];
          this.today = Date.now();
          this.filters = {};
          this.spaceFilters = [];
          this.hasFilter = true;
          this.size = 10;
          this.sizeFilter = 2;
          this.isEnd = true;
          this.isfirst = false;
          this.user = 'User';
          this.clearFilter = false; // get current location

          setTimeout(function () {
            _this9.getCurrentLocation();
          }, 1500);
          this.GoogleAutocomplete = new google.maps.places.AutocompleteService();
          this.autocomplete = {
            input: ''
          };
          this.autocompleteItems = []; // logout status

          this._gs.getLogOut().subscribe(function (status) {
            if (status) {
              _this9.placeMeta();

              _this9.displayName = true;

              _this9.getPlacesList(_this9.filters);
            }
          });

          this._gs.getData().subscribe(function (status) {
            if (status) {
              _this9.user = status.firstName + ' ' + status.lastName;
            }
          });

          this._gs.getUpdatedTabs().subscribe(function (status) {
            if (status) {
              _this9.token = status.token;
              _this9.orgId = status.orgId;
              _this9.displayName = true;
            }
          });

          this._gs.applyFilters().subscribe(function (filters) {
            if (filters) {
              console.log(filters);

              _this9.zone.run(function () {
                _this9.filters = filters.refresh;

                _this9.getPlacesList(_this9.filters);

                _this9.displayName = true;
                _this9.clearFilter = false;
              });
            }
          });

          if (this.user == 'User') {
            this.storage.get('user').then(function (user) {
              if (user) {
                _this9.user = user.firstName + '' + user.lastName;
              }
            });
          }
        }

        _createClass(Tab1Page, [{
          key: "getCurrentLocation",
          value: function getCurrentLocation() {
            var _this10 = this;

            this.geolocation.getCurrentPosition().then(function (resp) {
              _this10.lat = resp.coords.latitude;
              _this10["long"] = resp.coords.longitude;

              _this10.getAddressFromCoords(resp.coords.latitude, resp.coords.longitude);
            });
          }
        }, {
          key: "useCurrentLocation",
          value: function useCurrentLocation() {
            if (this.lat && this["long"]) {
              this.filters['location'] = [this.lat, this["long"]];
            }
          }
        }, {
          key: "getAddressFromCoords",
          value: function getAddressFromCoords(latitude, longitude) {
            var _this11 = this;

            console.log("getAddressFromCoords " + latitude + " " + longitude);

            if (latitude == undefined) {
              return;
            }

            var options = {
              useLocale: true,
              maxResults: 5
            };
            this.nativeGeocoder.reverseGeocode(latitude, longitude, options).then(function (result) {
              _this11.address = "";
              var responseAddress = [];

              for (var _i3 = 0, _Object$entries2 = Object.entries(result[0]); _i3 < _Object$entries2.length; _i3++) {
                var _Object$entries2$_i = _slicedToArray(_Object$entries2[_i3], 2),
                    key = _Object$entries2$_i[0],
                    value = _Object$entries2$_i[1];

                if (value.length > 0) responseAddress.push(value);
              }

              responseAddress.reverse();

              for (var _i4 = 0, _responseAddress2 = responseAddress; _i4 < _responseAddress2.length; _i4++) {
                var _value2 = _responseAddress2[_i4];
                _this11.address += _value2 + ", ";
              }

              _this11.address = _this11.address.slice(0, -2);
            })["catch"](function (error) {
              _this11.address = "Address Not Available!";
            });
          }
        }, {
          key: "getPlacesList",
          value: function getPlacesList(filters) {
            var _this12 = this;

            this._loader.present();

            var params = {
              filters: filters
            };
            console.log(params);
            this._apiService.postRequest(this.url + _config_config__WEBPACK_IMPORTED_MODULE_8__["UNITURL"].spaces, params).subscribe(function (result) {
              return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this12, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
                return regeneratorRuntime.wrap(function _callee2$(_context2) {
                  while (1) {
                    switch (_context2.prev = _context2.next) {
                      case 0:
                        console.log(result);

                        if (result.success) {
                          this._loader.dismiss();

                          this.placesList = result.data.list;
                          console.log(this.placesList);
                        } else {
                          this._loader.dismiss();

                          console.log('err', result);
                        }

                      case 2:
                      case "end":
                        return _context2.stop();
                    }
                  }
                }, _callee2, this);
              }));
            }), function (error) {
              _this12._loader.dismiss();

              console.log('error', error);
            };
          }
        }, {
          key: "placeMeta",
          value: function placeMeta() {
            var _this13 = this;

            var params = {
              apiKey: _config_config__WEBPACK_IMPORTED_MODULE_8__["KEY"].apikey
            };

            this._apiService.postRequest(this.url + _config_config__WEBPACK_IMPORTED_MODULE_8__["UNITURL"].placeMeta, params).subscribe(function (result) {
              return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this13, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
                return regeneratorRuntime.wrap(function _callee3$(_context3) {
                  while (1) {
                    switch (_context3.prev = _context3.next) {
                      case 0:
                        if (result.success) {
                          console.log(result);
                          this.spaceType = result.data.list.spaceType;
                        } else {
                          this._toast.presentToast(result.message);
                        }

                      case 1:
                      case "end":
                        return _context3.stop();
                    }
                  }
                }, _callee3, this);
              }));
            });
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {
            this.placeMeta();
            this.setIcon();
            this.getPlacesList(this.filters);
          }
        }, {
          key: "setIcon",
          value: function setIcon() {
            if (Object.keys(this.filters).length === 0) {
              this.hasFilter = false;
              this.displayName = true;
            } else {
              this.hasFilter = true;
              this.displayName = false;
            }
          }
        }, {
          key: "searchLocation",
          value: function searchLocation() {
            var _this14 = this;

            if (this.autocomplete.input == '') {
              this.autocompleteItems = [];
              return;
            }

            this.GoogleAutocomplete.getPlacePredictions({
              input: this.autocomplete.input
            }, function (predictions, status) {
              _this14.autocompleteItems = [];

              _this14.zone.run(function () {
                predictions.forEach(function (prediction) {
                  _this14.autocompleteItems.push(prediction);
                });
              });
            });
          }
        }, {
          key: "clearAutocomplete",
          value: function clearAutocomplete() {
            this.autocompleteItems = [];
            this.autocomplete.input = '';
          }
        }, {
          key: "checkFocus",
          value: function checkFocus() {}
        }, {
          key: "openFilter",
          value: function openFilter() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
              var modal;
              return regeneratorRuntime.wrap(function _callee4$(_context4) {
                while (1) {
                  switch (_context4.prev = _context4.next) {
                    case 0:
                      _context4.next = 2;
                      return this.modalCtrl.create({
                        component: _filters_filters_page__WEBPACK_IMPORTED_MODULE_12__["FiltersPage"],
                        cssClass: 'my-custom-modal-css',
                        componentProps: {
                          filters: JSON.stringify(this.filters)
                        }
                      });

                    case 2:
                      modal = _context4.sent;
                      _context4.next = 5;
                      return modal.present();

                    case 5:
                      return _context4.abrupt("return", _context4.sent);

                    case 6:
                    case "end":
                      return _context4.stop();
                  }
                }
              }, _callee4, this);
            }));
          }
        }, {
          key: "place",
          value: function place(_place) {
            var navigationExtras = {
              queryParams: {
                special: JSON.stringify(_place)
              }
            };
            this.router.navigate(['place-detail'], navigationExtras);
          }
        }, {
          key: "spaceClick",
          value: function spaceClick(item) {
            console.log(item);
            this.filters['spaceType'] = item ? item : [];
            console.log(this.filters);
            this.setIcon();
            this.getPlacesList(this.filters);
          }
        }, {
          key: "selectSearchResult",
          value: function selectSearchResult(item) {
            var _this15 = this;

            this.address = item.structured_formatting.main_text;
            this.autocomplete.input = this.address;
            this.autocompleteItems = [];
            this.getLatLOng(item.description).then(function (location) {
              _this15.filters['location'] = [location[0]['longitude'], location[0]['latitude']];
              console.log(_this15.filters);

              _this15.getPlacesList(_this15.filters);
            });
          }
        }, {
          key: "getLatLOng",
          value: function getLatLOng(addressString) {
            var _this16 = this;

            console.log(addressString);
            var options = {
              useLocale: true,
              maxResults: 5
            };
            console.log(options);
            return new Promise(function (resolve, reject) {
              _this16.nativeGeocoder.forwardGeocode(addressString).then(function (result) {
                console.log(result);
                resolve(result);
              })["catch"](function (error) {
                reject(error);
              });
            });
          }
        }, {
          key: "slidePrev",
          value: function slidePrev() {
            this.slides.slidePrev().then(function (x) {
              console.log('x');
            });
          }
        }, {
          key: "slideNext",
          value: function slideNext() {
            this.slides.slideNext().then(function (X) {
              console.log('X');
            });
          }
        }, {
          key: "clearFilters",
          value: function clearFilters() {
            var _this17 = this;

            this.zone.run(function () {
              _this17.spaceType.map(function (x) {
                return x.status = false;
              });

              _this17.filters = {};

              _this17.getPlacesList(_this17.filters);

              _this17.displayName = true;
              _this17.clearFilter = false;
            });
          }
        }]);

        return Tab1Page;
      }();

      Tab1Page.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }, {
          type: src_app_services_api_service_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"]
        }, {
          type: src_app_services_loader_service__WEBPACK_IMPORTED_MODULE_6__["LoaderService"]
        }, {
          type: src_app_services_global_service__WEBPACK_IMPORTED_MODULE_5__["GlobalService"]
        }, {
          type: _ionic_storage__WEBPACK_IMPORTED_MODULE_9__["Storage"]
        }, {
          type: src_app_services_toast_service__WEBPACK_IMPORTED_MODULE_7__["ToastService"]
        }, {
          type: _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_10__["Geolocation"]
        }, {
          type: _ionic_native_native_geocoder_ngx__WEBPACK_IMPORTED_MODULE_11__["NativeGeocoder"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"]
        }];
      };

      Tab1Page.propDecorators = {
        slides: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
          args: [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonSlides"]]
        }],
        searchbar: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
          args: ['searchbar', {
            "static": false
          }]
        }]
      };
      Tab1Page = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-tab1',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./tab1.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/unitTabs/tab1/tab1.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./tab1.page.scss */
        "./src/app/pages/unitTabs/tab1/tab1.page.scss"))["default"]]
      })], Tab1Page);
      /***/
    },

    /***/
    "./src/app/pipes/safe-pipe.pipe.ts":
    /*!*****************************************!*\
      !*** ./src/app/pipes/safe-pipe.pipe.ts ***!
      \*****************************************/

    /*! exports provided: SafePipePipe */

    /***/
    function srcAppPipesSafePipePipeTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SafePipePipe", function () {
        return SafePipePipe;
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


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/platform-browser */
      "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");

      var SafePipePipe = /*#__PURE__*/function () {
        function SafePipePipe(sanitizer) {
          _classCallCheck(this, SafePipePipe);

          this.sanitizer = sanitizer;
        }

        _createClass(SafePipePipe, [{
          key: "transform",
          value: function transform(url) {
            return this.sanitizer.bypassSecurityTrustResourceUrl(url);
          }
        }]);

        return SafePipePipe;
      }();

      SafePipePipe.ctorParameters = function () {
        return [{
          type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["DomSanitizer"]
        }];
      };

      SafePipePipe = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
        name: 'safePipe'
      })], SafePipePipe);
      /***/
    },

    /***/
    "./src/app/rating/rating-routing.module.ts":
    /*!*************************************************!*\
      !*** ./src/app/rating/rating-routing.module.ts ***!
      \*************************************************/

    /*! exports provided: RatingPageRoutingModule */

    /***/
    function srcAppRatingRatingRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RatingPageRoutingModule", function () {
        return RatingPageRoutingModule;
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


      var _rating_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./rating.page */
      "./src/app/rating/rating.page.ts");

      var routes = [{
        path: '',
        component: _rating_page__WEBPACK_IMPORTED_MODULE_3__["RatingPage"]
      }];

      var RatingPageRoutingModule = function RatingPageRoutingModule() {
        _classCallCheck(this, RatingPageRoutingModule);
      };

      RatingPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], RatingPageRoutingModule);
      /***/
    },

    /***/
    "./src/app/rating/rating.module.ts":
    /*!*****************************************!*\
      !*** ./src/app/rating/rating.module.ts ***!
      \*****************************************/

    /*! exports provided: RatingPageModule */

    /***/
    function srcAppRatingRatingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RatingPageModule", function () {
        return RatingPageModule;
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


      var _rating_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./rating-routing.module */
      "./src/app/rating/rating-routing.module.ts");
      /* harmony import */


      var _rating_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./rating.page */
      "./src/app/rating/rating.page.ts");
      /* harmony import */


      var _pipes_safe_pipe_pipe__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../pipes/safe-pipe.pipe */
      "./src/app/pipes/safe-pipe.pipe.ts");

      var RatingPageModule = function RatingPageModule() {
        _classCallCheck(this, RatingPageModule);
      };

      RatingPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _rating_routing_module__WEBPACK_IMPORTED_MODULE_5__["RatingPageRoutingModule"]],
        declarations: [_rating_page__WEBPACK_IMPORTED_MODULE_6__["RatingPage"], _pipes_safe_pipe_pipe__WEBPACK_IMPORTED_MODULE_7__["SafePipePipe"]]
      })], RatingPageModule);
      /***/
    }
  }]);
})();
//# sourceMappingURL=unitTabs-tab1-tab1-module-es5.js.map