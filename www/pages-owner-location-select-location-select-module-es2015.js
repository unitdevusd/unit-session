(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-owner-location-select-location-select-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/owner/location-select/location-select.page.html":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/owner/location-select/location-select.page.html ***!
  \*************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header class=\"ion-no-border ion-padding\">\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\" class=\"cancel\" (click)=\"close()\">\r\n      <span>\r\n        <ion-icon name=\"chevron-back-outline\" color=\"unit-btn\"></ion-icon>\r\n      </span>\r\n    </ion-buttons>\r\n    <ion-searchbar \r\n    search-icon = true\r\n    #searchbar \r\n    [(ngModel)]=\"autocomplete.input\" \r\n    placeholder=\"Find your Location\"\r\n    (ionInput)=\"searchLocation()\"\r\n    (ionClear)=\"clearAutocomplete()\"\r\n    color=\"white\"\r\n    >\r\n  </ion-searchbar>\r\n  </ion-toolbar>\r\n</ion-header>\r\n<ion-content>\r\n  <ion-list (click)=\"useCurrentLoaction()\" lines=\"none\">\r\n    <ion-item>\r\n      <ion-label>\r\n        <p class=\"main_text\">Current Location</p>\r\n      </ion-label>\r\n      <img style=\"margin-inline: 0px 10px;\" src=\"../../../../assets/imgs/material-location-on.png\" slot=\"start\" />\r\n    </ion-item>\r\n  </ion-list>\r\n  <ion-list [hidden]=\"autocompleteItems.length == 0\" lines=\"none\">\r\n    <ion-item *ngFor=\"let item of autocompleteItems\" tappable (click)=\"selectSearchResult(item)\">\r\n      <ion-label>\r\n        <p class=\"main_text\"> {{ item.structured_formatting.main_text }} </p>\r\n        <p class=\"secondary_text\"> {{ item.structured_formatting.secondary_text }} </p>\r\n      </ion-label>\r\n      <img style=\"margin-inline: 0px 10px;\" src=\"../../../../assets/imgs/material-location-on.png\" slot=\"start\" />\r\n    </ion-item>\r\n  </ion-list>\r\n</ion-content>");

/***/ }),

/***/ "./src/app/pages/owner/location-select/location-select-routing.module.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/pages/owner/location-select/location-select-routing.module.ts ***!
  \*******************************************************************************/
/*! exports provided: LocationSelectPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LocationSelectPageRoutingModule", function() { return LocationSelectPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _location_select_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./location-select.page */ "./src/app/pages/owner/location-select/location-select.page.ts");




const routes = [
    {
        path: '',
        component: _location_select_page__WEBPACK_IMPORTED_MODULE_3__["LocationSelectPage"]
    }
];
let LocationSelectPageRoutingModule = class LocationSelectPageRoutingModule {
};
LocationSelectPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], LocationSelectPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/owner/location-select/location-select.module.ts":
/*!***********************************************************************!*\
  !*** ./src/app/pages/owner/location-select/location-select.module.ts ***!
  \***********************************************************************/
/*! exports provided: LocationSelectPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LocationSelectPageModule", function() { return LocationSelectPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _location_select_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./location-select-routing.module */ "./src/app/pages/owner/location-select/location-select-routing.module.ts");
/* harmony import */ var _location_select_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./location-select.page */ "./src/app/pages/owner/location-select/location-select.page.ts");







let LocationSelectPageModule = class LocationSelectPageModule {
};
LocationSelectPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _location_select_routing_module__WEBPACK_IMPORTED_MODULE_5__["LocationSelectPageRoutingModule"]
        ],
        declarations: [_location_select_page__WEBPACK_IMPORTED_MODULE_6__["LocationSelectPage"]]
    })
], LocationSelectPageModule);



/***/ }),

/***/ "./src/app/pages/owner/location-select/location-select.page.scss":
/*!***********************************************************************!*\
  !*** ./src/app/pages/owner/location-select/location-select.page.scss ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".cancel {\n  margin-right: 5px;\n  font-size: x-large;\n}\n\nion-icon {\n  color: lightslategray;\n}\n\nion-list ion-item {\n  border-bottom: 1px solid #e9e9e9;\n  margin-left: 20px;\n  margin-right: 20px;\n  margin-bottom: 10px;\n  padding-bottom: 10px;\n}\n\nion-list .main_text {\n  color: #212529;\n  font-size: 16px;\n  font-weight: 500;\n}\n\nion-list .secondary_text {\n  color: #212529;\n  font-size: 14px;\n  font-weight: 300;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvb3duZXIvbG9jYXRpb24tc2VsZWN0L2xvY2F0aW9uLXNlbGVjdC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxpQkFBaUI7RUFDakIsa0JBQWtCO0FBQ3RCOztBQUNBO0VBQ0UscUJBQ0Y7QUFDQTs7QUFDQTtFQUVJLGdDQUFnQztFQUNoQyxpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLG1CQUFtQjtFQUNuQixvQkFBb0I7QUFDeEI7O0FBUEE7RUFTSSxjQUFjO0VBQ1osZUFBZTtFQUNmLGdCQUFnQjtBQUV0Qjs7QUFiQTtFQWNJLGNBQWM7RUFDWixlQUFlO0VBQ2YsZ0JBQWdCO0FBR3RCIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvb3duZXIvbG9jYXRpb24tc2VsZWN0L2xvY2F0aW9uLXNlbGVjdC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2FuY2Vse1xyXG4gICAgbWFyZ2luLXJpZ2h0OiA1cHg7XHJcbiAgICBmb250LXNpemU6IHgtbGFyZ2U7XHJcbiAgfVxyXG5pb24taWNvbntcclxuICBjb2xvcjogbGlnaHRzbGF0ZWdyYXlcclxufVxyXG5cclxuaW9uLWxpc3R7XHJcbiAgaW9uLWl0ZW17XHJcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2U5ZTllOTtcclxuICAgIG1hcmdpbi1sZWZ0OiAyMHB4O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICAgIHBhZGRpbmctYm90dG9tOiAxMHB4O1xyXG4gIH1cclxuICAubWFpbl90ZXh0e1xyXG4gICAgY29sb3I6ICMyMTI1Mjk7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICB9XHJcbiAgLnNlY29uZGFyeV90ZXh0e1xyXG4gICAgY29sb3I6ICMyMTI1Mjk7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgZm9udC13ZWlnaHQ6IDMwMDtcclxuICB9XHJcbn1cclxuXHJcbiJdfQ== */");

/***/ }),

/***/ "./src/app/pages/owner/location-select/location-select.page.ts":
/*!*********************************************************************!*\
  !*** ./src/app/pages/owner/location-select/location-select.page.ts ***!
  \*********************************************************************/
/*! exports provided: LocationSelectPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LocationSelectPage", function() { return LocationSelectPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _ionic_native_native_geocoder_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic-native/native-geocoder/ngx */ "./node_modules/@ionic-native/native-geocoder/__ivy_ngcc__/ngx/index.js");
/* harmony import */ var _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic-native/geolocation/ngx */ "./node_modules/@ionic-native/geolocation/__ivy_ngcc__/ngx/index.js");





let LocationSelectPage = class LocationSelectPage {
    constructor(geolocation, zone, router, nativeGeocoder, route) {
        this.geolocation = geolocation;
        this.zone = zone;
        this.router = router;
        this.nativeGeocoder = nativeGeocoder;
        this.route = route;
        this.route.queryParams.subscribe(params => {
            this.fromPage = params.from;
        });
        this.GoogleAutocomplete = new google.maps.places.AutocompleteService();
        this.autocomplete = { input: '' };
        this.autocompleteItems = [];
    }
    ionViewWillEnter() {
        setTimeout(() => this.setFocus(), 300);
    }
    setFocus() {
        this.searchbar.setFocus();
    }
    ngOnInit() {
        console.log('@@@');
        this.getCurrentLocation();
    }
    getCurrentLocation() {
        this.geolocation.getCurrentPosition().then((resp) => {
            console.log('@@', resp);
            this.lat = resp.coords.latitude;
            this.long = resp.coords.longitude;
            this.getAddressFromCoords(resp.coords.latitude, resp.coords.longitude);
        });
    }
    close() {
        if (this.fromPage == 'address') {
            this.router.navigate(['/add-address']);
        }
        else {
            this.router.navigate(['tabs/tab1']);
        }
    }
    useCurrentLoaction() {
        if (this.fromPage == 'address') {
            this.navigateToAddress();
        }
        else {
            let locationLatLong = [];
            let latlong = {
                latitude: this.lat,
                longitude: this.long
            };
            locationLatLong.push(latlong);
            let navigationExtras = {
                queryParams: {
                    location: JSON.stringify(locationLatLong)
                }
            };
            this.router.navigate(['/category'], navigationExtras);
        }
    }
    selectSearchResult(item) {
        console.log(item);
        if (this.fromPage == 'address') {
            this.navigateToAddress(item);
        }
        else {
            let navigationExtras = {
                queryParams: {
                    location: JSON.stringify(item)
                }
            };
            this.router.navigate(['/category'], navigationExtras);
        }
    }
    searchLocation() {
        if (this.autocomplete.input == '') {
            this.autocompleteItems = [];
            return;
        }
        this.GoogleAutocomplete.getPlacePredictions({ input: this.autocomplete.input }, (predictions, status) => {
            this.autocompleteItems = [];
            this.zone.run(() => {
                predictions.forEach((prediction) => {
                    this.autocompleteItems.push(prediction);
                    console.log('@@', this.autocompleteItems);
                });
            });
        });
    }
    clearAutocomplete() {
        this.autocompleteItems = [];
        this.autocomplete.input = '';
    }
    navigateToAddress(item) {
        let locationLatLong = [];
        let latlong = {
            latitude: this.lat,
            longitude: this.long
        };
        locationLatLong.push(latlong);
        if (item) {
            console.log(this.getLatLOng(item.description));
            this.getLatLOng(item.description).then(location => {
                let navigationExtras = {
                    queryParams: {
                        location: JSON.stringify(location),
                        address: item.description
                    }
                };
                this.router.navigate(['/add-address'], navigationExtras);
            });
        }
        else {
            console.log('In 149');
            let inFo = this.getAddressFromCoords(this.lat, this.long);
            console.log(inFo);
            if (this.address) {
                let navigationExtras = {
                    queryParams: {
                        location: JSON.stringify(locationLatLong),
                        address: this.address
                    }
                };
                this.router.navigate(['/add-address'], navigationExtras);
            }
        }
    }
    getAddressFromCoords(latitude, longitude) {
        console.log("getAddressFromCoords " + latitude + " " + longitude);
        if (latitude == undefined) {
            return;
        }
        let options = {
            useLocale: true,
            maxResults: 5
        };
        this.nativeGeocoder.reverseGeocode(latitude, longitude, options)
            .then((result) => {
            this.address = "";
            let responseAddress = [];
            for (let [key, value] of Object.entries(result[0])) {
                if (value.length > 0)
                    responseAddress.push(value);
            }
            responseAddress.reverse();
            for (let value of responseAddress) {
                this.address += value + ", ";
            }
            this.address = this.address.slice(0, -2);
        })
            .catch((error) => {
            this.address = "Address Not Available!";
        });
    }
    getLatLOng(addressString) {
        console.log(addressString);
        let options = {
            useLocale: true,
            maxResults: 5,
        };
        console.log(options);
        return new Promise((resolve, reject) => {
            this.nativeGeocoder.forwardGeocode(addressString)
                .then((result) => {
                console.log(result);
                resolve(result);
            })
                .catch((error) => {
                reject(error);
            });
        });
    }
};
LocationSelectPage.ctorParameters = () => [
    { type: _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_4__["Geolocation"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _ionic_native_native_geocoder_ngx__WEBPACK_IMPORTED_MODULE_3__["NativeGeocoder"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }
];
LocationSelectPage.propDecorators = {
    searchbar: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"], args: ['searchbar', { static: false },] }]
};
LocationSelectPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-location-select',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./location-select.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/owner/location-select/location-select.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./location-select.page.scss */ "./src/app/pages/owner/location-select/location-select.page.scss")).default]
    })
], LocationSelectPage);



/***/ })

}]);
//# sourceMappingURL=pages-owner-location-select-location-select-module-es2015.js.map