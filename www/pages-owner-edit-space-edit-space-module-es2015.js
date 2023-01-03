(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-owner-edit-space-edit-space-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/owner/edit-space/edit-space.page.html":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/owner/edit-space/edit-space.page.html ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar>\r\n    <ion-title>Edit Unit</ion-title>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button color=\"unit-btn\" text=\"\" icon=\"chevron-back-outline\"></ion-back-button>\r\n    </ion-buttons>\r\n  </ion-toolbar>\r\n</ion-header>\r\n<ion-content fullscreen class=\"ion-padding\">\r\n  <form [formGroup]=\"editPlace\"> \r\n    <h3 class=\"totally-tt\">Space Details</h3>\r\n    <ion-list lines=\"full\" class=\"ion-no-margin ion-no-padding\">\r\n      <ion-item class=\"item-space\" lines=\"none\">\r\n        <ion-label position=\"stacked\">\r\n          Name of the place\r\n        </ion-label>\r\n        <ion-input formControlName=\"name\"></ion-input>\r\n      </ion-item>\r\n\r\n      <ion-item class=\"item-space\" lines=\"none\">\r\n        <ion-label position=\"stacked\">\r\n          Location\r\n        </ion-label>\r\n        <ion-input formControlName=\"address\"></ion-input>\r\n      </ion-item>\r\n      <ion-item class=\"item-space\" lines=\"none\">\r\n        <ion-label position=\"stacked\">\r\n          About me\r\n        </ion-label>\r\n        <ion-textarea formControlName=\"description\" rows=\"4\"></ion-textarea>\r\n      </ion-item>\r\n      <ion-item class=\"item-space\" lines=\"none\">\r\n        <ion-label position=\"stacked\">\r\n          Size <span>(Enter size in feet)</span>\r\n        </ion-label>\r\n        <ion-grid>\r\n          <ion-row>\r\n            <ion-col>\r\n              <ion-label position=\"stacked\">Length</ion-label>\r\n              <ion-input class=\"input\" type=\"number\" formControlName=\"lenght\" placeholder=\"l\"></ion-input>\r\n            </ion-col>\r\n            <ion-col>\r\n              <ion-label position=\"stacked\">Width</ion-label>\r\n              <ion-input class=\"input\" type=\"number\" formControlName=\"breadth\" placeholder=\"w\"></ion-input>\r\n            </ion-col>\r\n            <ion-col>\r\n              <ion-label position=\"stacked\">Height</ion-label>\r\n              <ion-input class=\"input\" type=\"number\" formControlName=\"height\" placeholder=\"h\"></ion-input>\r\n            </ion-col>\r\n          </ion-row>\r\n        </ion-grid>\r\n      </ion-item>\r\n    </ion-list>\r\n    <ion-item class=\"custom-checkbox\" class=\"space\" lines=\"none\" *ngIf=\"spaceTypeList\">\r\n      <ion-label position=\"stacked\">Space type</ion-label>\r\n      <ion-select formControlName=\"spaceType\" (ionChange)=\"spaceSelected()\">\r\n        <ion-select-option [value]=\"s._id\" *ngFor=\"let s of spaceTypeList; let i=index;\">\r\n          {{s.spaceType}}\r\n        </ion-select-option>\r\n      </ion-select>\r\n    </ion-item>\r\n    <ion-item class=\"space\" lines=\"none\" *ngIf=\"storageTypeList\">\r\n      <ion-label position=\"stacked\">What can be store here?</ion-label>\r\n      <ion-select formControlName=\"storeItems\" (ionChange)=\"storageSelected()\">\r\n        <ion-select-option [value]=\"sp._id\" *ngFor=\"let sp of storageTypeList\">\r\n          {{sp.name}}\r\n        </ion-select-option>\r\n      </ion-select>\r\n    </ion-item>\r\n    <ion-item class=\"space\" lines=\"none\" *ngIf=\"timeSlotTypeList\">\r\n      <ion-label position=\"stacked\">How often the renters be able to access <br> their items?</ion-label>\r\n      <ion-select formControlName=\"accessStatus\" (ionChange)=\"timeSlotSelected()\">\r\n        <ion-select-option [value]=\"st._id\" *ngFor=\"let st of timeSlotTypeList\">\r\n          {{st.accessTime}}\r\n        </ion-select-option>\r\n      </ion-select>\r\n    </ion-item>\r\n    <ion-item class=\"space\" lines=\"none\" *ngIf=\"acccessTypeList\">\r\n      <ion-label position=\"stacked\">When will renters be able to access<br> their items?</ion-label>\r\n      <ion-select formControlName=\"timeAccessStatus\" (ionChange)=\"accessTypeSelected()\">\r\n        <ion-select-option [value]=\"at._id\" *ngFor=\"let at of acccessTypeList\">\r\n          {{at.accessType}}\r\n        </ion-select-option>\r\n      </ion-select>\r\n    </ion-item>\r\n    <h3 class=\"totally-tt\">Rent for your place</h3>\r\n    <ion-item class=\"item-space\" lines=\"none\">\r\n      <ion-label position=\"stacked\">\r\n        Enter rent amount\r\n      </ion-label>\r\n      <ion-grid>\r\n        <ion-row>\r\n          <ion-col>\r\n            <ion-label position=\"stacked\"> Daily </ion-label>\r\n            <ion-input class=\"input\" type=\"number\" formControlName=\"priceDaily\"></ion-input>\r\n          </ion-col>\r\n          <ion-col>\r\n            <ion-label position=\"stacked\"> Weekly </ion-label>\r\n            <ion-input class=\"input\" type=\"number\" formControlName=\"priceWeekly\"></ion-input>\r\n          </ion-col>\r\n          <ion-col>\r\n            <ion-label position=\"stacked\"> Monthly </ion-label>\r\n            <ion-input class=\"input\" type=\"number\" formControlName=\"priceMonthly\"></ion-input>\r\n          </ion-col>\r\n        </ion-row>\r\n      </ion-grid>\r\n    </ion-item>\r\n    <ion-list *ngIf=\"showPercentage\">\r\n      <ion-label class=\"addtotally\">Add discount for first month</ion-label>\r\n      <ion-radio-group formControlName=\"discountPercentage\">\r\n        <ion-item>\r\n          <ion-label>0%</ion-label>\r\n          <ion-radio slot=\"end\" value=\"0\"></ion-radio>\r\n        </ion-item>\r\n        <ion-item>\r\n          <ion-label>25%</ion-label>\r\n          <ion-radio slot=\"end\" value=\"25\"></ion-radio>\r\n        </ion-item>\r\n        <ion-item>\r\n          <ion-label>50%</ion-label>\r\n          <ion-radio slot=\"end\" value=\"50\"></ion-radio>\r\n        </ion-item>\r\n        <ion-item>\r\n          <ion-label>75%</ion-label>\r\n          <ion-radio slot=\"end\" value=\"75\"></ion-radio>\r\n        </ion-item>\r\n      </ion-radio-group>\r\n    </ion-list>\r\n    <h3 class=\"totally-tt\">Add images</h3>\r\n    <ion-item class=\"space\">\r\n      <ion-grid class=\"image_view\">\r\n        <ion-row *ngFor=\"let image of images; let i = index\">\r\n          <ion-col size=\"5\">\r\n            <h5 style=\"font-size: 14px;\">{{image.name}}</h5>\r\n          </ion-col>\r\n          <ion-col size=\"7\">\r\n            <div *ngIf=\"!image.url\">\r\n              <ion-button expand=\"block\" color=\"unit-btn\" shape=\"round\" fill=\"outline\" (click)=\"getImages(image,i)\" class=\"img-btn\">\r\n                Choose\r\n              </ion-button>\r\n            </div>\r\n            <div *ngIf=\"image.url\">\r\n              <img src=\"{{image.url}}\" alt=\"\"> \r\n              <ion-icon name=\"close-circle\" color=\"danger\" (click)=\"deleteImage(image,i)\" class=\"img-btn\" ></ion-icon>\r\n            </div>\r\n          </ion-col>\r\n        </ion-row>\r\n        <ion-row>\r\n          <ion-col size=\"4\"></ion-col>\r\n          <ion-col size=\"8\">\r\n            <h3 class=\"addmore\" (click)=\"addMoreImages()\"> + Add more images </h3>\r\n          </ion-col>\r\n        </ion-row>\r\n      </ion-grid>\r\n    </ion-item>\r\n    <ion-button  (click)=\"updateSpace()\" color=\"unit-btn\" expand=\"block\" class=\"update-btn\">Update Your\r\n      space\r\n    </ion-button>\r\n  </form>\r\n</ion-content>");

/***/ }),

/***/ "./src/app/pages/owner/edit-space/edit-space-routing.module.ts":
/*!*********************************************************************!*\
  !*** ./src/app/pages/owner/edit-space/edit-space-routing.module.ts ***!
  \*********************************************************************/
/*! exports provided: EditSpacePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditSpacePageRoutingModule", function() { return EditSpacePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _edit_space_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./edit-space.page */ "./src/app/pages/owner/edit-space/edit-space.page.ts");




const routes = [
    {
        path: '',
        component: _edit_space_page__WEBPACK_IMPORTED_MODULE_3__["EditSpacePage"]
    }
];
let EditSpacePageRoutingModule = class EditSpacePageRoutingModule {
};
EditSpacePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], EditSpacePageRoutingModule);



/***/ }),

/***/ "./src/app/pages/owner/edit-space/edit-space.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/pages/owner/edit-space/edit-space.module.ts ***!
  \*************************************************************/
/*! exports provided: EditSpacePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditSpacePageModule", function() { return EditSpacePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _edit_space_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./edit-space-routing.module */ "./src/app/pages/owner/edit-space/edit-space-routing.module.ts");
/* harmony import */ var _edit_space_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./edit-space.page */ "./src/app/pages/owner/edit-space/edit-space.page.ts");







let EditSpacePageModule = class EditSpacePageModule {
};
EditSpacePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _edit_space_routing_module__WEBPACK_IMPORTED_MODULE_5__["EditSpacePageRoutingModule"]
        ],
        providers: [],
        declarations: [_edit_space_page__WEBPACK_IMPORTED_MODULE_6__["EditSpacePage"]]
    })
], EditSpacePageModule);



/***/ }),

/***/ "./src/app/pages/owner/edit-space/edit-space.page.scss":
/*!*************************************************************!*\
  !*** ./src/app/pages/owner/edit-space/edit-space.page.scss ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-list ion-input {\n  border: 1px solid #807e7e;\n  border-radius: 18px;\n  --padding-start: 15px;\n}\n\nion-list ion-textarea {\n  border: 1px solid #CACACA;\n  border-radius: 18px;\n  --padding-start: 15px;\n  margin-bottom: 12px;\n  width: 97%;\n}\n\nion-item ion-label {\n  font-size: 15px;\n  margin-bottom: 10px;\n  color: #3c3939;\n  font-family: 'medium';\n  opacity: 1;\n  margin-left: 5px;\n}\n\nion-item ion-select {\n  border: 1px solid #cacaca;\n  border-radius: 18px;\n  --padding-start: 15px;\n  height: 44px;\n  width: 97%;\n}\n\nion-item ion-input {\n  border: 1px solid #CACACA;\n  border-radius: 30px;\n  --padding-start: 15px;\n  margin-bottom: 12px;\n  width: 97%;\n}\n\n.image_view ion-row ion-col img {\n  max-width: 90%;\n  border-radius: 25px;\n}\n\n.image_view ion-row ion-col ion-icon {\n  position: absolute;\n  right: 22px;\n  font-size: 25px;\n  top: 0px;\n}\n\n.addmore {\n  margin-top: 0px;\n  margin-left: 55px;\n  font-size: 13px;\n  color: #ff0000;\n}\n\n.item-space span {\n  font-family: medium;\n  color: #A1A1A1;\n  font-size: 13px;\n}\n\n.item-space {\n  padding-bottom: 0;\n}\n\n.totally-tt {\n  font-size: 18px;\n  color: tertiary;\n  font-family: \"helveticaneuebold\";\n  margin-left: 10px;\n  font-weight: 400;\n}\n\n.addtotally {\n  font-size: 18px;\n  color: tertiary;\n  font-family: \"helveticaneuebold\";\n  margin-left: 10px;\n  font-weight: 400;\n}\n\n.img-btn {\n  height: 43px;\n  font-size: 15px;\n  font-family: medium;\n  --ion-color-base: #cacaca;\n}\n\n.update-btn {\n  font-family: 'helveticaneuebold';\n  font-size: 16px;\n}\n\n.in-list {\n  margin-right: 20px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvb3duZXIvZWRpdC1zcGFjZS9lZGl0LXNwYWNlLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUVNLHlCQUF5QjtFQUN6QixtQkFBbUI7RUFDbkIscUJBQWdCO0FBQXRCOztBQUpBO0VBT00seUJBQXlCO0VBQ3pCLG1CQUFtQjtFQUNuQixxQkFBZ0I7RUFDaEIsbUJBQW1CO0VBQ25CLFVBQVU7QUFDaEI7O0FBR0U7RUFFSSxlQUFlO0VBQ2YsbUJBQW1CO0VBQ25CLGNBQWM7RUFDZCxxQkFBcUI7RUFDckIsVUFBVTtFQUNWLGdCQUFnQjtBQUR0Qjs7QUFORTtFQVlJLHlCQUF5QjtFQUN6QixtQkFBbUI7RUFDbkIscUJBQWdCO0VBQ2hCLFlBQVk7RUFDWixVQUFVO0FBRmhCOztBQWRFO0VBbUJJLHlCQUF5QjtFQUN6QixtQkFBbUI7RUFDbkIscUJBQWdCO0VBQ2hCLG1CQUFtQjtFQUNuQixVQUFVO0FBRGhCOztBQUtFO0VBSVEsY0FBYztFQUNkLG1CQUFtQjtBQUw3Qjs7QUFBRTtFQVFRLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsZUFBZTtFQUNmLFFBQVE7QUFKbEI7O0FBVUU7RUFDRSxlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLGVBQWU7RUFDZixjQUFjO0FBUGxCOztBQVVFO0VBQ0UsbUJBQW1CO0VBQ25CLGNBQWM7RUFDZCxlQUFlO0FBUG5COztBQVNFO0VBQ0UsaUJBQWlCO0FBTnJCOztBQVFFO0VBQ0UsZUFBZTtFQUNmLGVBQWU7RUFDZixnQ0FBZ0M7RUFDaEMsaUJBQWlCO0VBQ2pCLGdCQUFnQjtBQUxwQjs7QUFPRTtFQUNFLGVBQWU7RUFDZixlQUFlO0VBQ2YsZ0NBQWdDO0VBQ2hDLGlCQUFpQjtFQUNqQixnQkFBZ0I7QUFKcEI7O0FBTUU7RUFDRSxZQUFZO0VBQ1YsZUFBZTtFQUNmLG1CQUFtQjtFQUNuQix5QkFBaUI7QUFIdkI7O0FBS0U7RUFDRSxnQ0FBZ0M7RUFDaEMsZUFBZTtBQUZuQjs7QUFJRTtFQUNFLGtCQUFrQjtBQUR0QiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL293bmVyL2VkaXQtc3BhY2UvZWRpdC1zcGFjZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tbGlzdCB7XHJcbiAgICBpb24taW5wdXQge1xyXG4gICAgICBib3JkZXI6IDFweCBzb2xpZCAjODA3ZTdlO1xyXG4gICAgICBib3JkZXItcmFkaXVzOiAxOHB4O1xyXG4gICAgICAtLXBhZGRpbmctc3RhcnQ6IDE1cHg7XHJcbiAgICB9XHJcbiAgICBpb24tdGV4dGFyZWF7XHJcbiAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNDQUNBQ0E7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDE4cHg7XHJcbiAgICAgIC0tcGFkZGluZy1zdGFydDogMTVweDtcclxuICAgICAgbWFyZ2luLWJvdHRvbTogMTJweDtcclxuICAgICAgd2lkdGg6IDk3JTtcclxuICAgIH1cclxuICB9XHJcbiAgXHJcbiAgaW9uLWl0ZW0ge1xyXG4gICAgaW9uLWxhYmVsIHtcclxuICAgICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gICAgICBjb2xvcjogIzNjMzkzOTtcclxuICAgICAgZm9udC1mYW1pbHk6ICdtZWRpdW0nO1xyXG4gICAgICBvcGFjaXR5OiAxO1xyXG4gICAgICBtYXJnaW4tbGVmdDogNXB4O1xyXG4gICAgICBcclxuICAgIH1cclxuICBcclxuICAgIGlvbi1zZWxlY3Qge1xyXG4gICAgICBib3JkZXI6IDFweCBzb2xpZCAjY2FjYWNhO1xyXG4gICAgICBib3JkZXItcmFkaXVzOiAxOHB4O1xyXG4gICAgICAtLXBhZGRpbmctc3RhcnQ6IDE1cHg7XHJcbiAgICAgIGhlaWdodDogNDRweDtcclxuICAgICAgd2lkdGg6IDk3JTtcclxuICAgIH1cclxuICAgIGlvbi1pbnB1dCB7XHJcbiAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNDQUNBQ0E7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDMwcHg7XHJcbiAgICAgIC0tcGFkZGluZy1zdGFydDogMTVweDtcclxuICAgICAgbWFyZ2luLWJvdHRvbTogMTJweDtcclxuICAgICAgd2lkdGg6IDk3JTtcclxuICAgIH1cclxuICB9XHJcbiAgXHJcbiAgLmltYWdlX3ZpZXcge1xyXG4gICAgaW9uLXJvdyB7XHJcbiAgICAgIGlvbi1jb2wge1xyXG4gICAgICAgIGltZyB7XHJcbiAgICAgICAgICBtYXgtd2lkdGg6IDkwJTtcclxuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDI1cHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlvbi1pY29uIHtcclxuICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgIHJpZ2h0OiAyMnB4O1xyXG4gICAgICAgICAgZm9udC1zaXplOiAyNXB4O1xyXG4gICAgICAgICAgdG9wOiAwcHg7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG4gIFxyXG4gIC5hZGRtb3JlIHtcclxuICAgIG1hcmdpbi10b3A6IDBweDtcclxuICAgIG1hcmdpbi1sZWZ0OiA1NXB4O1xyXG4gICAgZm9udC1zaXplOiAxM3B4O1xyXG4gICAgY29sb3I6ICNmZjAwMDA7XHJcbiAgfVxyXG4gIFxyXG4gIC5pdGVtLXNwYWNlIHNwYW57XHJcbiAgICBmb250LWZhbWlseTogbWVkaXVtO1xyXG4gICAgY29sb3I6ICNBMUExQTE7XHJcbiAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgfVxyXG4gIC5pdGVtLXNwYWNle1xyXG4gICAgcGFkZGluZy1ib3R0b206IDA7XHJcbiAgfVxyXG4gIC50b3RhbGx5LXR0e1xyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgY29sb3I6IHRlcnRpYXJ5O1xyXG4gICAgZm9udC1mYW1pbHk6IFwiaGVsdmV0aWNhbmV1ZWJvbGRcIjtcclxuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICB9XHJcbiAgLmFkZHRvdGFsbHl7XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICBjb2xvcjogdGVydGlhcnk7XHJcbiAgICBmb250LWZhbWlseTogXCJoZWx2ZXRpY2FuZXVlYm9sZFwiO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDEwcHg7XHJcbiAgICBmb250LXdlaWdodDogNDAwO1xyXG4gIH1cclxuICAuaW1nLWJ0bntcclxuICAgIGhlaWdodDogNDNweDtcclxuICAgICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgICBmb250LWZhbWlseTogbWVkaXVtO1xyXG4gICAgICAtLWlvbi1jb2xvci1iYXNlOiAjY2FjYWNhO1xyXG4gIH1cclxuICAudXBkYXRlLWJ0bntcclxuICAgIGZvbnQtZmFtaWx5OiAnaGVsdmV0aWNhbmV1ZWJvbGQnO1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gIH1cclxuICAuaW4tbGlzdHtcclxuICAgIG1hcmdpbi1yaWdodDogMjBweDtcclxuICB9XHJcbiAgIl19 */");

/***/ }),

/***/ "./src/app/pages/owner/edit-space/edit-space.page.ts":
/*!***********************************************************!*\
  !*** ./src/app/pages/owner/edit-space/edit-space.page.ts ***!
  \***********************************************************/
/*! exports provided: EditSpacePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditSpacePage", function() { return EditSpacePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var src_app_services_api_service_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/api-service.service */ "./src/app/services/api-service.service.ts");
/* harmony import */ var src_app_services_global_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/global.service */ "./src/app/services/global.service.ts");
/* harmony import */ var src_app_services_loader_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/loader.service */ "./src/app/services/loader.service.ts");
/* harmony import */ var src_app_services_toast_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/services/toast.service */ "./src/app/services/toast.service.ts");
/* harmony import */ var _config_config__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../config/config */ "./src/app/pages/config/config.ts");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/__ivy_ngcc__/fesm2015/ionic-storage.js");
/* harmony import */ var _capacitor_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @capacitor/core */ "./node_modules/@capacitor/core/dist/esm/index.js");












const { Camera } = _capacitor_core__WEBPACK_IMPORTED_MODULE_11__["Plugins"];
let EditSpacePage = class EditSpacePage {
    constructor(router, formBuilder, _apiService, alert, loader, refresh, route, actionSheetController, storage, zone) {
        this.router = router;
        this.formBuilder = formBuilder;
        this._apiService = _apiService;
        this.alert = alert;
        this.loader = loader;
        this.refresh = refresh;
        this.route = route;
        this.actionSheetController = actionSheetController;
        this.storage = storage;
        this.zone = zone;
        this.imageResponse = [];
        this.url = _config_config__WEBPACK_IMPORTED_MODULE_9__["config"].url;
        this.showPercentage = false;
        this.images = [];
        this.route.queryParams.subscribe(params => {
            if (params && params.special) {
                this.formInit();
                this.placeId = params.special;
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
                        this.placeMeta();
                        this.getSinglePlace();
                    }
                });
            }
        });
    }
    placeMeta() {
        if (this.token) {
            const params = {
                apiKey: _config_config__WEBPACK_IMPORTED_MODULE_9__["KEY"].apikey
            };
            this._apiService.postRequest(this.url + _config_config__WEBPACK_IMPORTED_MODULE_9__["UNITURL"].placeMeta, params).subscribe((result) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                if (result.success) {
                    this.zone.run(() => {
                        this.spaceTypeList = result.data.list.spaceType;
                        this.acccessTypeList = result.data.list.accessType;
                        this.features = result.data.list.amenities;
                        this.storageTypeList = result.data.list.itemType;
                        this.timeSlotTypeList = result.data.list.timeAccessType;
                    });
                }
                else {
                    this.alert.presentToast(result.message);
                }
            }));
        }
    }
    formInit() {
        this.editPlace = this.formBuilder.group({
            name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            description: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            address: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].nullValidator],
            lenght: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            breadth: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            height: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            spaceType: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            storeItems: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            priceDaily: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            priceWeekly: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            priceMonthly: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            accessStatus: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            timeAccessStatus: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            discountFirstMonth: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            discountPercentage: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
        });
    }
    getSinglePlace() {
        this.loader.present();
        if (this.token && this.placeId) {
            const params = {
                token: this.token,
                placeId: this.placeId,
                orgId: this.orgId
            };
            this._apiService.postRequest(this.url + _config_config__WEBPACK_IMPORTED_MODULE_9__["UNITURL"].editSpace, params).subscribe((result) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                if (result.success) {
                    this.data = result.data.place;
                    this.setFormValues(this.data);
                    this.imageResponse = this.data.images;
                    if (this.imageResponse && this.imageResponse.length) {
                        for (let i = 0; i < this.imageResponse.length; i++) {
                            if (i == 0) {
                                this.images.push({ name: 'Main image', url: this.imageResponse[i] });
                            }
                            else {
                                this.images.push({ name: `Image ${i + 1}`, url: this.imageResponse[i] });
                            }
                        }
                    }
                    else {
                        this.images.push({ name: 'Main image', url: '' }, { name: 'Image 2', url: '' });
                        this.imageResponse = [];
                    }
                    this.loader.dismiss();
                }
                else {
                    this.loader.dismiss();
                    this.alert.presentToast(result.message);
                }
            }));
        }
    }
    setFormValues(data) {
        this.zone.run(() => {
            this.long = data.loc.coordinates[0];
            this.lat = data.loc.coordinates[1];
            this.editPlace.controls['name'].patchValue(data.name);
            this.editPlace.controls['spaceType'].patchValue(data.spaceType);
            this.editPlace.controls['description'].patchValue(data.description);
            this.editPlace.controls['address'].patchValue(data.address);
            this.editPlace.controls['lenght'].patchValue(data.size.lenght);
            this.editPlace.controls['breadth'].patchValue(data.size.breadth);
            this.editPlace.controls['height'].patchValue(data.size.height);
            this.editPlace.controls['priceDaily'].patchValue(data.pricing.daily);
            this.editPlace.controls['priceWeekly'].patchValue(data.pricing.weekly);
            this.editPlace.controls['priceMonthly'].patchValue(data.pricing.monthly);
            this.editPlace.controls['storeItems'].patchValue(data.storeItems);
            this.editPlace.controls['accessStatus'].patchValue(data.accessStatus);
            this.editPlace.controls['timeAccessStatus'].patchValue(data.timeAccessStatus);
            this.editPlace.controls['discountFirstMonth'].patchValue(data.discountFirstMonth);
            if (data.discountFirstMonth == true) {
                this.showPercentage = true;
            }
            this.editPlace.controls['discountPercentage'].patchValue(data.discountPercentage);
        });
    }
    updateSpace() {
        if (this.token) {
            if (this.editPlace.value.discountFirstMonth == false) {
                this.editPlace.value.discountPercentage = 0;
            }
            const params = {
                token: this.token,
                orgId: this.orgId,
                placeId: this.data._id,
                name: this.editPlace.value.name,
                address: this.editPlace.value.address,
                loc: {
                    type: "Point",
                    coordinates: [
                        this.long,
                        this.lat
                    ]
                },
                description: this.editPlace.value.description,
                size: {
                    lenght: this.editPlace.value.lenght,
                    breadth: this.editPlace.value.breadth,
                    height: this.editPlace.value.height
                },
                spaceType: this.editPlace.value.spaceType,
                storeItems: this.editPlace.value.storeItems,
                images: this.imageResponse,
                videos: this.data.videos,
                publish: this.data.publish,
                amenities: this.data.amenities,
                index: 5,
                pricing: {
                    daily: parseInt(this.editPlace.value.priceDaily),
                    weekly: parseInt(this.editPlace.value.priceWeekly),
                    monthly: parseInt(this.editPlace.value.priceMonthly)
                },
                accessStatus: this.editPlace.value.accessStatus,
                timeAccessStatus: this.editPlace.value.timeAccessStatus,
                discountFirstMonth: this.editPlace.value.discountFirstMonth,
                discountPercentage: this.editPlace.value.discountPercentage
            };
            this.addPlaceApi(params);
        }
    }
    getImages(image, index) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const options = {
                quality: 100,
                allowEditing: false,
                resultType: _capacitor_core__WEBPACK_IMPORTED_MODULE_11__["CameraResultType"].Base64,
                height: 250,
                width: 250
            };
            const imageData = yield Camera.getPhoto(options);
            if (imageData.base64String) {
                const base64 = 'data:image/jpeg;base64,' + imageData.base64String;
                this.loader.present();
                let params = {
                    auth: {
                        type: 'token',
                        token: this.token,
                        orgId: this.orgId
                    },
                    base64: base64,
                    public: true
                };
                let url = this.url + _config_config__WEBPACK_IMPORTED_MODULE_9__["URL"].imageUpload;
                this._apiService.uploadBase64image(url, params).then((response) => {
                    this.loader.dismiss();
                    if (response.success) {
                        if (response.data && response.data.url) {
                            console.log(response.data.url);
                            this.zone.run(() => {
                                this.images[index].url = response.data.url;
                                this.imageResponse.push(response.data.url);
                            });
                        }
                    }
                });
            }
        });
    }
    addPlaceApi(place) {
        console.log(this.imageResponse);
        if (this.imageResponse.length) {
            place.images = this.imageResponse;
        }
        this._apiService.postRequest(this.url + _config_config__WEBPACK_IMPORTED_MODULE_9__["UNITURL"].updateSpace, place).subscribe((result) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (result.success) {
                this.alert.presentToast(result.message);
                this.editPlace.reset();
            }
            this.refresh.sendRefershScreen("refresh");
            this.loader.dismiss();
            this.router.navigate(['tabs/my-spaces']);
        })), (error) => {
            this.loader.dismiss();
            console.log(error.description);
            this.alert.presentToast(error.description);
        };
    }
    accessTypeSelected() {
        console.log('1');
    }
    timeSlotSelected() {
        console.log('2');
    }
    storageSelected() {
        console.log('3');
    }
    spaceSelected() {
        console.log('4');
    }
    discountCheck() {
        console.log(this.editPlace.value['discountFirstMonth']);
        if (this.editPlace.value['discountFirstMonth'] == true) {
            this.showPercentage = true;
        }
        else {
            this.showPercentage = false;
        }
    }
    addMoreImages() {
        this.images.push({ name: `Image ${this.images.length + 1}`, url: '' });
    }
    deleteImage(image, index) {
        this.images[index].url = '';
        this.imageResponse.pop(index);
        console.log(this.imageResponse);
    }
};
EditSpacePage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: src_app_services_api_service_service__WEBPACK_IMPORTED_MODULE_5__["ApiService"] },
    { type: src_app_services_toast_service__WEBPACK_IMPORTED_MODULE_8__["ToastService"] },
    { type: src_app_services_loader_service__WEBPACK_IMPORTED_MODULE_7__["LoaderService"] },
    { type: src_app_services_global_service__WEBPACK_IMPORTED_MODULE_6__["GlobalService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ActionSheetController"] },
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_10__["Storage"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"] }
];
EditSpacePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-edit-space',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./edit-space.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/owner/edit-space/edit-space.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./edit-space.page.scss */ "./src/app/pages/owner/edit-space/edit-space.page.scss")).default]
    })
], EditSpacePage);



/***/ })

}]);
//# sourceMappingURL=pages-owner-edit-space-edit-space-module-es2015.js.map