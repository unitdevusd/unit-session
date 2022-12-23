(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-owner-add-address-add-address-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/owner/add-address/add-address.page.html":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/owner/add-address/add-address.page.html ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header class=\"ion-no-border\">\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\" (click)=\"back()\">\r\n      <ion-back-button color=\"unit-btn\" text=\"\" icon=\"chevron-back-outline\"></ion-back-button>\r\n    </ion-buttons>\r\n  </ion-toolbar>\r\n</ion-header>\r\n<ion-content>\r\n  <div>\r\n    <h2 class=\"where-txt\"> Where's your place located?</h2>\r\n    <!-- <p  class=\"title-txt\">Only Confirmed guests will get your exact address after they book. We'll show\r\n      everyone else an approximate location.\r\n    </p> -->\r\n  </div> \r\n  <div class=\"ion-padding\"  (click)=\"inputClicked()\">\r\n    <ion-item>\r\n      <ion-input placeholder=\"Enter Address\"  [value]=\"address\"   [disabled]=\"disable\" ></ion-input>\r\n      <img src=\"../../../../assets/imgs/metro-location.png\" slot=\"start\">\r\n    </ion-item>\r\n  </div>\r\n  <div class=\"ion-padding\" style=\"margin-top: 40px;\">\r\n    <div #map id=\"map\" style=\"border-radius: 15px; width: 335px;height: 250px;\"></div>\r\n  </div>\r\n</ion-content>\r\n<ion-footer *ngIf=\"displayMap\">\r\n  <ion-grid>\r\n    <ion-row>\r\n      <ion-col offset=\"9\">\r\n        <ion-button (click)=\"next()\" color=\"unit-btn\" fill=\"clear\">\r\n         Next\r\n         <ion-icon slot=\"end\" name=\"chevron-forward-outline\"></ion-icon>\r\n        </ion-button>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-grid>\r\n</ion-footer>\r\n");

/***/ }),

/***/ "./src/app/pages/owner/add-address/add-address-routing.module.ts":
/*!***********************************************************************!*\
  !*** ./src/app/pages/owner/add-address/add-address-routing.module.ts ***!
  \***********************************************************************/
/*! exports provided: AddAddressPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddAddressPageRoutingModule", function() { return AddAddressPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _add_address_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./add-address.page */ "./src/app/pages/owner/add-address/add-address.page.ts");




const routes = [
    {
        path: '',
        component: _add_address_page__WEBPACK_IMPORTED_MODULE_3__["AddAddressPage"]
    }
];
let AddAddressPageRoutingModule = class AddAddressPageRoutingModule {
};
AddAddressPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], AddAddressPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/owner/add-address/add-address.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/pages/owner/add-address/add-address.module.ts ***!
  \***************************************************************/
/*! exports provided: AddAddressPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddAddressPageModule", function() { return AddAddressPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _add_address_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./add-address-routing.module */ "./src/app/pages/owner/add-address/add-address-routing.module.ts");
/* harmony import */ var _add_address_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./add-address.page */ "./src/app/pages/owner/add-address/add-address.page.ts");







let AddAddressPageModule = class AddAddressPageModule {
};
AddAddressPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _add_address_routing_module__WEBPACK_IMPORTED_MODULE_5__["AddAddressPageRoutingModule"]
        ],
        declarations: [_add_address_page__WEBPACK_IMPORTED_MODULE_6__["AddAddressPage"]]
    })
], AddAddressPageModule);



/***/ }),

/***/ "./src/app/pages/owner/add-address/add-address.page.scss":
/*!***************************************************************!*\
  !*** ./src/app/pages/owner/add-address/add-address.page.scss ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("#map_canvas {\n  width: 90%;\n  height: 80%;\n  border: 1px solid red;\n}\n\n#address {\n  padding: 10px;\n  font-size: 18px;\n  font-weight: bold;\n}\n\n#map {\n  width: 100%;\n  height: 70vh;\n}\n\n#map_center {\n  position: absolute;\n  z-index: 99;\n  height: 40px;\n  width: 40px;\n  top: 50%;\n  left: 50%;\n  margin-left: -21px;\n  margin-top: -41px;\n}\n\n#map_center img {\n  max-width: 70%;\n}\n\n.map_div {\n  overflow: hidden;\n  width: 335px;\n  height: 250px;\n  position: relative;\n  border-radius: 15px;\n  text-align: center;\n  align-items: center;\n  margin-left: 30px;\n}\n\n.where-txt {\n  font-size: 21px;\n  color: #000;\n  font-family: \"helveticaneuebold\";\n  margin-left: 30px;\n}\n\n.title-txt {\n  color: #9d9d9d;\n  font-size: 14px;\n  margin: 15px 30px;\n}\n\n.footer-ios ion-toolbar:first-of-type {\n  --border-width: 0 !important;\n  box-shadow: 0px -3px 10px #EAEAEA;\n}\n\n.next-btn {\n  font-family: 'helveticaneuebold';\n  color: #F43F3F;\n  font-size: 16px;\n}\n\nion-input {\n  --placeholder-opacity: 1;\n  font-family: medium;\n  margin-left: 7px;\n  font-size: 14px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvb3duZXIvYWRkLWFkZHJlc3MvYWRkLWFkZHJlc3MucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksVUFBVTtFQUNWLFdBQVc7RUFDWCxxQkFBcUI7QUFDekI7O0FBRUU7RUFDRSxhQUFhO0VBQ2IsZUFBZTtFQUNmLGlCQUFpQjtBQUNyQjs7QUFFRTtFQUNFLFdBQVc7RUFDWCxZQUFZO0FBQ2hCOztBQUVFO0VBQ0Usa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxZQUFZO0VBQ1osV0FBVztFQUNYLFFBQVE7RUFDUixTQUFTO0VBQ1Qsa0JBQWtCO0VBQ2xCLGlCQUFpQjtBQUNyQjs7QUFURTtFQVVJLGNBQWM7QUFHcEI7O0FBQ0U7RUFDRSxnQkFBZ0I7RUFDaEIsWUFBWTtFQUNaLGFBQWE7RUFDYixrQkFBa0I7RUFDbEIsbUJBQW1CO0VBQ25CLGtCQUFrQjtFQUNsQixtQkFBbUI7RUFDbkIsaUJBQWlCO0FBRXJCOztBQUNFO0VBQ0UsZUFBZTtFQUNmLFdBQVc7RUFDWCxnQ0FBZ0M7RUFDaEMsaUJBQWlCO0FBRXJCOztBQUFFO0VBQ0UsY0FBYztFQUNkLGVBQWU7RUFDZixpQkFBaUI7QUFHckI7O0FBREU7RUFDRSw0QkFBZTtFQUNmLGlDQUFpQztBQUlyQzs7QUFERTtFQUNFLGdDQUFnQztFQUNoQyxjQUFjO0VBQ2QsZUFBZTtBQUluQjs7QUFERTtFQUNFLHdCQUFzQjtFQUN0QixtQkFBbUI7RUFDbkIsZ0JBQWdCO0VBQ2hCLGVBQWU7QUFJbkIiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9vd25lci9hZGQtYWRkcmVzcy9hZGQtYWRkcmVzcy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjbWFwX2NhbnZhcyB7XHJcbiAgICB3aWR0aDogOTAlO1xyXG4gICAgaGVpZ2h0OiA4MCU7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZWQ7XHJcbiAgfVxyXG4gIFxyXG4gICNhZGRyZXNzIHtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICB9XHJcbiAgXHJcbiAgI21hcCB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogNzB2aDtcclxuICB9XHJcbiAgXHJcbiAgI21hcF9jZW50ZXIge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgei1pbmRleDogOTk7XHJcbiAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgICB3aWR0aDogNDBweDtcclxuICAgIHRvcDogNTAlO1xyXG4gICAgbGVmdDogNTAlO1xyXG4gICAgbWFyZ2luLWxlZnQ6IC0yMXB4O1xyXG4gICAgbWFyZ2luLXRvcDogLTQxcHg7XHJcbiAgICBpbWcge1xyXG4gICAgICBtYXgtd2lkdGg6IDcwJTtcclxuICAgIH1cclxuICB9XHJcbiAgXHJcbiAgLm1hcF9kaXYge1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIHdpZHRoOiAzMzVweDtcclxuICAgIGhlaWdodDogMjUwcHg7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIG1hcmdpbi1sZWZ0OiAzMHB4O1xyXG4gIH1cclxuICBcclxuICAud2hlcmUtdHh0IHtcclxuICAgIGZvbnQtc2l6ZTogMjFweDtcclxuICAgIGNvbG9yOiAjMDAwO1xyXG4gICAgZm9udC1mYW1pbHk6IFwiaGVsdmV0aWNhbmV1ZWJvbGRcIjtcclxuICAgIG1hcmdpbi1sZWZ0OiAzMHB4O1xyXG4gIH1cclxuICAudGl0bGUtdHh0IHtcclxuICAgIGNvbG9yOiAjOWQ5ZDlkO1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgbWFyZ2luOiAxNXB4IDMwcHg7XHJcbiAgfVxyXG4gIC5mb290ZXItaW9zIGlvbi10b29sYmFyOmZpcnN0LW9mLXR5cGUge1xyXG4gICAgLS1ib3JkZXItd2lkdGg6IDAgIWltcG9ydGFudDtcclxuICAgIGJveC1zaGFkb3c6IDBweCAtM3B4IDEwcHggI0VBRUFFQTtcclxuICAgXHJcbiAgfVxyXG4gIC5uZXh0LWJ0bntcclxuICAgIGZvbnQtZmFtaWx5OiAnaGVsdmV0aWNhbmV1ZWJvbGQnO1xyXG4gICAgY29sb3I6ICNGNDNGM0Y7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgfVxyXG4gIFxyXG4gIGlvbi1pbnB1dCB7XHJcbiAgICAtLXBsYWNlaG9sZGVyLW9wYWNpdHk6IDE7XHJcbiAgICBmb250LWZhbWlseTogbWVkaXVtO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDdweDtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICB9XHJcbiAgIl19 */");

/***/ }),

/***/ "./src/app/pages/owner/add-address/add-address.page.ts":
/*!*************************************************************!*\
  !*** ./src/app/pages/owner/add-address/add-address.page.ts ***!
  \*************************************************************/
/*! exports provided: AddAddressPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddAddressPage", function() { return AddAddressPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _ionic_native_native_geocoder_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic-native/native-geocoder/ngx */ "./node_modules/@ionic-native/native-geocoder/__ivy_ngcc__/ngx/index.js");




let AddAddressPage = class AddAddressPage {
    constructor(router, route, nativeGeocoder) {
        this.router = router;
        this.route = route;
        this.nativeGeocoder = nativeGeocoder;
        this.disable = true;
        this.displayMap = false;
        this.latlong = [];
        this.priviousPage = '';
    }
    ngOnInit() {
        this.route.queryParams.subscribe(params => {
            if (params.address) {
                this.address = params.address;
                console.log(params.location);
                this.latlong = JSON.parse(params.location);
                this.displayMap = true;
                let lat = this.latlong[0].latitude;
                let long = this.latlong[0].longitude;
                setTimeout(() => {
                    this.loadMap(lat, long);
                }, 100);
            }
            if (params.priviousPage) {
                this.priviousPage = params.priviousPage;
            }
        });
    }
    loadMap(lat, long) {
        let coords = new google.maps.LatLng(lat, long);
        let mapOtions = {
            center: coords,
            zoom: 14,
            mapTypeId: google.maps.MapTypeId.ROADMAP,
            disableDefaultUI: true,
        };
        this.map = new google.maps.Map(this.mapElement.nativeElement, mapOtions);
        let marker = new google.maps.Marker({
            map: this.map,
            position: coords
        });
        google.maps.event.addListener(this.map, "idle", function () {
            google.maps.event.trigger(this.map, 'resize');
        });
        this.map.addListener('dragend', () => {
            this.latitude = this.map.center.lat();
            this.longitude = this.map.center.lng();
            this.getAddressFromCoords(this.map.center.lat(), this.map.center.lng());
        });
    }
    getAddressFromCoords(latitude, longitude) {
        console.log("getAddressFromCoords " + latitude + " " + longitude);
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
    back() {
        console.log(this.priviousPage);
        if (this.priviousPage) {
            this.router.navigate([this.priviousPage]);
        }
        else {
            this.router.navigate(['tabs/my-spaces']);
        }
    }
    inputClicked() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let navigationExtras = {
                queryParams: {
                    from: 'address'
                }
            };
            this.router.navigate(['/location'], navigationExtras);
        });
    }
    next() {
        let navigationExtras = {
            queryParams: {
                location: JSON.stringify(this.latlong),
                address: this.address
            }
        };
        this.router.navigate(['space-details'], navigationExtras);
    }
};
AddAddressPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _ionic_native_native_geocoder_ngx__WEBPACK_IMPORTED_MODULE_3__["NativeGeocoder"] }
];
AddAddressPage.propDecorators = {
    mapElement: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"], args: ['map', { static: false },] }]
};
AddAddressPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-add-address',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./add-address.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/owner/add-address/add-address.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./add-address.page.scss */ "./src/app/pages/owner/add-address/add-address.page.scss")).default]
    })
], AddAddressPage);



/***/ })

}]);
//# sourceMappingURL=pages-owner-add-address-add-address-module-es2015.js.map