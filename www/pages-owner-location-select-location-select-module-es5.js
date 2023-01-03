(function () {
  function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

  function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

  function _iterableToArrayLimit(arr, i) { var _i = arr && (typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]); if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

  function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-owner-location-select-location-select-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/owner/location-select/location-select.page.html":
    /*!*************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/owner/location-select/location-select.page.html ***!
      \*************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppPagesOwnerLocationSelectLocationSelectPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header class=\"ion-no-border ion-padding\">\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\" class=\"cancel\" (click)=\"close()\">\r\n      <span>\r\n        <ion-icon name=\"chevron-back-outline\" color=\"unit-btn\"></ion-icon>\r\n      </span>\r\n    </ion-buttons>\r\n    <ion-searchbar \r\n    search-icon = true\r\n    #searchbar \r\n    [(ngModel)]=\"autocomplete.input\" \r\n    placeholder=\"Find your Location\"\r\n    (ionInput)=\"searchLocation()\"\r\n    (ionClear)=\"clearAutocomplete()\"\r\n    color=\"white\"\r\n    >\r\n  </ion-searchbar>\r\n  </ion-toolbar>\r\n</ion-header>\r\n<ion-content>\r\n  <ion-list (click)=\"useCurrentLoaction()\" lines=\"none\">\r\n    <ion-item>\r\n      <ion-label>\r\n        <p class=\"main_text\">Current Location</p>\r\n      </ion-label>\r\n      <img style=\"margin-inline: 0px 10px;\" src=\"../../../../assets/imgs/material-location-on.png\" slot=\"start\" />\r\n    </ion-item>\r\n  </ion-list>\r\n  <ion-list [hidden]=\"autocompleteItems.length == 0\" lines=\"none\">\r\n    <ion-item *ngFor=\"let item of autocompleteItems\" tappable (click)=\"selectSearchResult(item)\">\r\n      <ion-label>\r\n        <p class=\"main_text\"> {{ item.structured_formatting.main_text }} </p>\r\n        <p class=\"secondary_text\"> {{ item.structured_formatting.secondary_text }} </p>\r\n      </ion-label>\r\n      <img style=\"margin-inline: 0px 10px;\" src=\"../../../../assets/imgs/material-location-on.png\" slot=\"start\" />\r\n    </ion-item>\r\n  </ion-list>\r\n</ion-content>";
      /***/
    },

    /***/
    "./src/app/pages/owner/location-select/location-select-routing.module.ts":
    /*!*******************************************************************************!*\
      !*** ./src/app/pages/owner/location-select/location-select-routing.module.ts ***!
      \*******************************************************************************/

    /*! exports provided: LocationSelectPageRoutingModule */

    /***/
    function srcAppPagesOwnerLocationSelectLocationSelectRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LocationSelectPageRoutingModule", function () {
        return LocationSelectPageRoutingModule;
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


      var _location_select_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./location-select.page */
      "./src/app/pages/owner/location-select/location-select.page.ts");

      var routes = [{
        path: '',
        component: _location_select_page__WEBPACK_IMPORTED_MODULE_3__["LocationSelectPage"]
      }];

      var LocationSelectPageRoutingModule = function LocationSelectPageRoutingModule() {
        _classCallCheck(this, LocationSelectPageRoutingModule);
      };

      LocationSelectPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], LocationSelectPageRoutingModule);
      /***/
    },

    /***/
    "./src/app/pages/owner/location-select/location-select.module.ts":
    /*!***********************************************************************!*\
      !*** ./src/app/pages/owner/location-select/location-select.module.ts ***!
      \***********************************************************************/

    /*! exports provided: LocationSelectPageModule */

    /***/
    function srcAppPagesOwnerLocationSelectLocationSelectModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LocationSelectPageModule", function () {
        return LocationSelectPageModule;
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


      var _location_select_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./location-select-routing.module */
      "./src/app/pages/owner/location-select/location-select-routing.module.ts");
      /* harmony import */


      var _location_select_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./location-select.page */
      "./src/app/pages/owner/location-select/location-select.page.ts");

      var LocationSelectPageModule = function LocationSelectPageModule() {
        _classCallCheck(this, LocationSelectPageModule);
      };

      LocationSelectPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _location_select_routing_module__WEBPACK_IMPORTED_MODULE_5__["LocationSelectPageRoutingModule"]],
        declarations: [_location_select_page__WEBPACK_IMPORTED_MODULE_6__["LocationSelectPage"]]
      })], LocationSelectPageModule);
      /***/
    },

    /***/
    "./src/app/pages/owner/location-select/location-select.page.scss":
    /*!***********************************************************************!*\
      !*** ./src/app/pages/owner/location-select/location-select.page.scss ***!
      \***********************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppPagesOwnerLocationSelectLocationSelectPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".cancel {\n  margin-right: 5px;\n  font-size: x-large;\n}\n\nion-icon {\n  color: lightslategray;\n}\n\nion-list ion-item {\n  border-bottom: 1px solid #e9e9e9;\n  margin-left: 20px;\n  margin-right: 20px;\n  margin-bottom: 10px;\n  padding-bottom: 10px;\n}\n\nion-list .main_text {\n  color: #212529;\n  font-size: 16px;\n  font-weight: 500;\n}\n\nion-list .secondary_text {\n  color: #212529;\n  font-size: 14px;\n  font-weight: 300;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvb3duZXIvbG9jYXRpb24tc2VsZWN0L2xvY2F0aW9uLXNlbGVjdC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxpQkFBaUI7RUFDakIsa0JBQWtCO0FBQ3RCOztBQUNBO0VBQ0UscUJBQ0Y7QUFDQTs7QUFDQTtFQUVJLGdDQUFnQztFQUNoQyxpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLG1CQUFtQjtFQUNuQixvQkFBb0I7QUFDeEI7O0FBUEE7RUFTSSxjQUFjO0VBQ1osZUFBZTtFQUNmLGdCQUFnQjtBQUV0Qjs7QUFiQTtFQWNJLGNBQWM7RUFDWixlQUFlO0VBQ2YsZ0JBQWdCO0FBR3RCIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvb3duZXIvbG9jYXRpb24tc2VsZWN0L2xvY2F0aW9uLXNlbGVjdC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2FuY2Vse1xyXG4gICAgbWFyZ2luLXJpZ2h0OiA1cHg7XHJcbiAgICBmb250LXNpemU6IHgtbGFyZ2U7XHJcbiAgfVxyXG5pb24taWNvbntcclxuICBjb2xvcjogbGlnaHRzbGF0ZWdyYXlcclxufVxyXG5cclxuaW9uLWxpc3R7XHJcbiAgaW9uLWl0ZW17XHJcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2U5ZTllOTtcclxuICAgIG1hcmdpbi1sZWZ0OiAyMHB4O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICAgIHBhZGRpbmctYm90dG9tOiAxMHB4O1xyXG4gIH1cclxuICAubWFpbl90ZXh0e1xyXG4gICAgY29sb3I6ICMyMTI1Mjk7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICB9XHJcbiAgLnNlY29uZGFyeV90ZXh0e1xyXG4gICAgY29sb3I6ICMyMTI1Mjk7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgZm9udC13ZWlnaHQ6IDMwMDtcclxuICB9XHJcbn1cclxuXHJcbiJdfQ== */";
      /***/
    },

    /***/
    "./src/app/pages/owner/location-select/location-select.page.ts":
    /*!*********************************************************************!*\
      !*** ./src/app/pages/owner/location-select/location-select.page.ts ***!
      \*********************************************************************/

    /*! exports provided: LocationSelectPage */

    /***/
    function srcAppPagesOwnerLocationSelectLocationSelectPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LocationSelectPage", function () {
        return LocationSelectPage;
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


      var _ionic_native_native_geocoder_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @ionic-native/native-geocoder/ngx */
      "./node_modules/@ionic-native/native-geocoder/__ivy_ngcc__/ngx/index.js");
      /* harmony import */


      var _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic-native/geolocation/ngx */
      "./node_modules/@ionic-native/geolocation/__ivy_ngcc__/ngx/index.js");

      var LocationSelectPage = /*#__PURE__*/function () {
        function LocationSelectPage(geolocation, zone, router, nativeGeocoder, route) {
          var _this = this;

          _classCallCheck(this, LocationSelectPage);

          this.geolocation = geolocation;
          this.zone = zone;
          this.router = router;
          this.nativeGeocoder = nativeGeocoder;
          this.route = route;
          this.route.queryParams.subscribe(function (params) {
            _this.fromPage = params.from;
          });
          this.GoogleAutocomplete = new google.maps.places.AutocompleteService();
          this.autocomplete = {
            input: ''
          };
          this.autocompleteItems = [];
        }

        _createClass(LocationSelectPage, [{
          key: "ionViewWillEnter",
          value: function ionViewWillEnter() {
            var _this2 = this;

            setTimeout(function () {
              return _this2.setFocus();
            }, 300);
          }
        }, {
          key: "setFocus",
          value: function setFocus() {
            this.searchbar.setFocus();
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {
            console.log('@@@');
            this.getCurrentLocation();
          }
        }, {
          key: "getCurrentLocation",
          value: function getCurrentLocation() {
            var _this3 = this;

            this.geolocation.getCurrentPosition().then(function (resp) {
              console.log('@@', resp);
              _this3.lat = resp.coords.latitude;
              _this3["long"] = resp.coords.longitude;

              _this3.getAddressFromCoords(resp.coords.latitude, resp.coords.longitude);
            });
          }
        }, {
          key: "close",
          value: function close() {
            if (this.fromPage == 'address') {
              this.router.navigate(['/add-address']);
            } else {
              this.router.navigate(['tabs/tab1']);
            }
          }
        }, {
          key: "useCurrentLoaction",
          value: function useCurrentLoaction() {
            if (this.fromPage == 'address') {
              this.navigateToAddress();
            } else {
              var locationLatLong = [];
              var latlong = {
                latitude: this.lat,
                longitude: this["long"]
              };
              locationLatLong.push(latlong);
              var navigationExtras = {
                queryParams: {
                  location: JSON.stringify(locationLatLong)
                }
              };
              this.router.navigate(['/category'], navigationExtras);
            }
          }
        }, {
          key: "selectSearchResult",
          value: function selectSearchResult(item) {
            console.log(item);

            if (this.fromPage == 'address') {
              this.navigateToAddress(item);
            } else {
              var navigationExtras = {
                queryParams: {
                  location: JSON.stringify(item)
                }
              };
              this.router.navigate(['/category'], navigationExtras);
            }
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

                  console.log('@@', _this4.autocompleteItems);
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
          key: "navigateToAddress",
          value: function navigateToAddress(item) {
            var _this5 = this;

            var locationLatLong = [];
            var latlong = {
              latitude: this.lat,
              longitude: this["long"]
            };
            locationLatLong.push(latlong);

            if (item) {
              console.log(this.getLatLOng(item.description));
              this.getLatLOng(item.description).then(function (location) {
                var navigationExtras = {
                  queryParams: {
                    location: JSON.stringify(location),
                    address: item.description
                  }
                };

                _this5.router.navigate(['/add-address'], navigationExtras);
              });
            } else {
              console.log('In 149');
              var inFo = this.getAddressFromCoords(this.lat, this["long"]);
              console.log(inFo);

              if (this.address) {
                var navigationExtras = {
                  queryParams: {
                    location: JSON.stringify(locationLatLong),
                    address: this.address
                  }
                };
                this.router.navigate(['/add-address'], navigationExtras);
              }
            }
          }
        }, {
          key: "getAddressFromCoords",
          value: function getAddressFromCoords(latitude, longitude) {
            var _this6 = this;

            console.log("getAddressFromCoords " + latitude + " " + longitude);

            if (latitude == undefined) {
              return;
            }

            var options = {
              useLocale: true,
              maxResults: 5
            };
            this.nativeGeocoder.reverseGeocode(latitude, longitude, options).then(function (result) {
              _this6.address = "";
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
                _this6.address += _value + ", ";
              }

              _this6.address = _this6.address.slice(0, -2);
            })["catch"](function (error) {
              _this6.address = "Address Not Available!";
            });
          }
        }, {
          key: "getLatLOng",
          value: function getLatLOng(addressString) {
            var _this7 = this;

            console.log(addressString);
            var options = {
              useLocale: true,
              maxResults: 5
            };
            console.log(options);
            return new Promise(function (resolve, reject) {
              _this7.nativeGeocoder.forwardGeocode(addressString).then(function (result) {
                console.log(result);
                resolve(result);
              })["catch"](function (error) {
                reject(error);
              });
            });
          }
        }]);

        return LocationSelectPage;
      }();

      LocationSelectPage.ctorParameters = function () {
        return [{
          type: _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_4__["Geolocation"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }, {
          type: _ionic_native_native_geocoder_ngx__WEBPACK_IMPORTED_MODULE_3__["NativeGeocoder"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
        }];
      };

      LocationSelectPage.propDecorators = {
        searchbar: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
          args: ['searchbar', {
            "static": false
          }]
        }]
      };
      LocationSelectPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-location-select',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./location-select.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/owner/location-select/location-select.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./location-select.page.scss */
        "./src/app/pages/owner/location-select/location-select.page.scss"))["default"]]
      })], LocationSelectPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=pages-owner-location-select-location-select-module-es5.js.map