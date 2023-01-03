(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-admin-item-storeage-type-item-storeage-type-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/admin/item-storeage-type/item-storeage-type.page.html":
/*!*******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/admin/item-storeage-type/item-storeage-type.page.html ***!
  \*******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar *ngIf=\"!addType\">\r\n    <ion-title>Storage item types</ion-title>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button color=\"unit-btn\" text=\"\" icon=\"chevron-back-outline\"></ion-back-button>\r\n    </ion-buttons>\r\n  </ion-toolbar>\r\n  <ion-toolbar *ngIf=\"addType\">\r\n    <ion-title>{{btnText}}</ion-title>\r\n    <ion-buttons slot=\"end\" class=\"cancel\" (click)=\"cancel()\">\r\n      <span>\r\n        <ion-icon name=\"close\"></ion-icon>\r\n      </span>\r\n    </ion-buttons>\r\n  </ion-toolbar>\r\n</ion-header>\r\n<ion-content *ngIf=\"!addType\">\r\n  <ion-list style=\"width: 100%;\" *ngIf=\"storedItemType.length\">\r\n    <ion-item-sliding *ngFor=\"let item of storedItemType\">\r\n      <ion-item>\r\n        <ion-label>\r\n          <ion-grid>\r\n            <ion-row>\r\n              <ion-col class=\"ion-align-self-start\" size=\"9\">\r\n                <h2 style=\"font-weight: bold;\">{{item?.name}}</h2>\r\n                <h6>{{item?.description}}</h6>\r\n              </ion-col>\r\n              <ion-col class=\"ion-align-self-end\" size=\"3\">\r\n              </ion-col>\r\n            </ion-row>\r\n          </ion-grid>\r\n        </ion-label>\r\n      </ion-item>\r\n      <ion-item-options>\r\n        <ion-item-option (click)=\"editItem(item)\" color=\"primary\">\r\n          <ion-icon slot=\"top\" name=\"pencil\"></ion-icon>\r\n          <ion-label>Edit</ion-label>\r\n        </ion-item-option>\r\n        <ion-item-option (click)=\"deleteItemAlert(item)\" color=\"danger\">\r\n          <ion-icon slot=\"top\" name=\"trash\"></ion-icon>\r\n          <ion-label> Delete </ion-label>\r\n        </ion-item-option>\r\n      </ion-item-options>\r\n    </ion-item-sliding>\r\n    </ion-list>\r\n    <ion-fab horizontal=\"end\" vertical=\"bottom\" slot=\"fixed\">\r\n      <ion-fab-button class=\"round-shadow\" (click)=\"add()\">\r\n        <ion-icon name=\"add\"></ion-icon>\r\n      </ion-fab-button>\r\n    </ion-fab>\r\n</ion-content>\r\n<ion-content *ngIf=\"addType\">\r\n  <form [formGroup]=\"addItemTypeForm\">\r\n    <ion-item lines=\"none\" class=\"item-space\">\r\n      <ion-label position=\"stacked\">\r\n        Name\r\n      </ion-label>\r\n      <ion-input placeholder=\"Feature name\" type=\"Text\" formControlName=\"name\"></ion-input>\r\n    </ion-item>\r\n    <ion-item lines=\"none\" class=\"item-space\">\r\n      <ion-label position=\"stacked\">\r\n        Description\r\n      </ion-label>\r\n      <ion-input placeholder=\"Feature description\" type=\"Text\" formControlName=\"description\"></ion-input>\r\n    </ion-item>\r\n  </form>\r\n</ion-content>\r\n<ion-footer *ngIf=\"addType\" class=\"ion-no-border\">\r\n  <ion-toolbar>\r\n    <div class=\"ion-padding\">\r\n      <ion-button color=\"unit-btn\" expand=\"block\" class=\"shadow\" [disabled]=\"!addItemTypeForm.valid\" (click)=\"submit()\">\r\n        {{btnText}}\r\n      </ion-button>\r\n    </div>\r\n  </ion-toolbar>\r\n</ion-footer>");

/***/ }),

/***/ "./src/app/pages/admin/item-storeage-type/item-storeage-type-routing.module.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/pages/admin/item-storeage-type/item-storeage-type-routing.module.ts ***!
  \*************************************************************************************/
/*! exports provided: ItemStoreageTypePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ItemStoreageTypePageRoutingModule", function() { return ItemStoreageTypePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _item_storeage_type_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./item-storeage-type.page */ "./src/app/pages/admin/item-storeage-type/item-storeage-type.page.ts");




const routes = [
    {
        path: '',
        component: _item_storeage_type_page__WEBPACK_IMPORTED_MODULE_3__["ItemStoreageTypePage"]
    }
];
let ItemStoreageTypePageRoutingModule = class ItemStoreageTypePageRoutingModule {
};
ItemStoreageTypePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ItemStoreageTypePageRoutingModule);



/***/ }),

/***/ "./src/app/pages/admin/item-storeage-type/item-storeage-type.module.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/pages/admin/item-storeage-type/item-storeage-type.module.ts ***!
  \*****************************************************************************/
/*! exports provided: ItemStoreageTypePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ItemStoreageTypePageModule", function() { return ItemStoreageTypePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _item_storeage_type_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./item-storeage-type-routing.module */ "./src/app/pages/admin/item-storeage-type/item-storeage-type-routing.module.ts");
/* harmony import */ var _item_storeage_type_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./item-storeage-type.page */ "./src/app/pages/admin/item-storeage-type/item-storeage-type.page.ts");







let ItemStoreageTypePageModule = class ItemStoreageTypePageModule {
};
ItemStoreageTypePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _item_storeage_type_routing_module__WEBPACK_IMPORTED_MODULE_5__["ItemStoreageTypePageRoutingModule"]
        ],
        declarations: [_item_storeage_type_page__WEBPACK_IMPORTED_MODULE_6__["ItemStoreageTypePage"]]
    })
], ItemStoreageTypePageModule);



/***/ }),

/***/ "./src/app/pages/admin/item-storeage-type/item-storeage-type.page.scss":
/*!*****************************************************************************!*\
  !*** ./src/app/pages/admin/item-storeage-type/item-storeage-type.page.scss ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".label-stacked.sc-ion-label-ios-h {\n  margin-bottom: 4px;\n  font-size: 14px;\n  font-weight: bold;\n  color: darkgray;\n}\n\nion-item.sc-ion-textarea-ios-h:not(.item-label),\nion-item:not(.item-label) .sc-ion-textarea-ios-h {\n  border: solid 1px #d7d8da;\n  height: 100px;\n  border-radius: 10px;\n  padding: 5px;\n}\n\n.cancel {\n  margin-right: 5px;\n  font-size: x-large;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvYWRtaW4vaXRlbS1zdG9yZWFnZS10eXBlL2l0ZW0tc3RvcmVhZ2UtdHlwZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLGlCQUFpQjtFQUNqQixlQUFlO0FBQ25COztBQUVFOztFQUVFLHlCQUF5QjtFQUN6QixhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLFlBQVk7QUFDaEI7O0FBSUU7RUFDRSxpQkFBaUI7RUFDakIsa0JBQWtCO0FBRHRCIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvYWRtaW4vaXRlbS1zdG9yZWFnZS10eXBlL2l0ZW0tc3RvcmVhZ2UtdHlwZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubGFiZWwtc3RhY2tlZC5zYy1pb24tbGFiZWwtaW9zLWgge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogNHB4O1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBjb2xvcjogZGFya2dyYXk7XHJcbiAgfVxyXG4gIFxyXG4gIGlvbi1pdGVtLnNjLWlvbi10ZXh0YXJlYS1pb3MtaDpub3QoLml0ZW0tbGFiZWwpLFxyXG4gIGlvbi1pdGVtOm5vdCguaXRlbS1sYWJlbCkgLnNjLWlvbi10ZXh0YXJlYS1pb3MtaCB7XHJcbiAgICBib3JkZXI6IHNvbGlkIDFweCAjZDdkOGRhO1xyXG4gICAgaGVpZ2h0OiAxMDBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICBwYWRkaW5nOiA1cHg7XHJcbiAgfVxyXG4gIFxyXG5cclxuICAgIFxyXG4gIC5jYW5jZWx7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDVweDtcclxuICAgIGZvbnQtc2l6ZTogeC1sYXJnZTtcclxuICB9Il19 */");

/***/ }),

/***/ "./src/app/pages/admin/item-storeage-type/item-storeage-type.page.ts":
/*!***************************************************************************!*\
  !*** ./src/app/pages/admin/item-storeage-type/item-storeage-type.page.ts ***!
  \***************************************************************************/
/*! exports provided: ItemStoreageTypePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ItemStoreageTypePage", function() { return ItemStoreageTypePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var src_app_services_api_service_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/api-service.service */ "./src/app/services/api-service.service.ts");
/* harmony import */ var src_app_services_loader_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/loader.service */ "./src/app/services/loader.service.ts");
/* harmony import */ var src_app_services_toast_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/toast.service */ "./src/app/services/toast.service.ts");
/* harmony import */ var _config_config__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../config/config */ "./src/app/pages/config/config.ts");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/__ivy_ngcc__/fesm2015/ionic-storage.js");









let ItemStoreageTypePage = class ItemStoreageTypePage {
    constructor(_apiService, _fb, loader, alertCtrl, _toast, storage) {
        this._apiService = _apiService;
        this._fb = _fb;
        this.loader = loader;
        this.alertCtrl = alertCtrl;
        this._toast = _toast;
        this.storage = storage;
        this.url = _config_config__WEBPACK_IMPORTED_MODULE_7__["config"].url;
        this.storedItemType = [];
        this.addType = false;
        this.typeId = '';
        this.btnText = 'Add Storage type.';
        this.subtypes = [];
        this.addItemTypeForm = this._fb.group({
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            description: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required)
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
                        this.getType();
                    }
                });
            }
        });
    }
    getType() {
        if (this.token) {
            const params = {
                token: this.token,
                orgId: this.orgId
            };
            this._apiService.postRequest(this.url + _config_config__WEBPACK_IMPORTED_MODULE_7__["UNITURL"].storedItemtype, params).subscribe((result) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                if (result.success) {
                    console.log(result.data.list);
                    this.storedItemType = result.data.list;
                }
            })), (error) => {
                console.log(error.description);
            };
        }
    }
    editItem(item) {
        console.log(item);
        this.addType = true;
        this.btnText = 'Update storage item type.';
        this.typeId = item._id;
        this.addItemTypeForm.controls['name'].setValue(item.name);
        this.addItemTypeForm.controls['description'].setValue(item.description);
    }
    deleteItemAlert(item) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            console.log(item);
            const alert = yield this.alertCtrl.create({
                header: 'Delete storage item types',
                message: 'Do you want to delete ' + item.name + ' from storage item types?',
                buttons: [
                    {
                        text: 'Cancel',
                        role: 'cancel',
                        cssClass: 'secondary',
                        handler: (blah) => { }
                    }, {
                        text: 'Delete',
                        handler: () => {
                            this.deleteItem(item._id);
                        }
                    }
                ]
            });
            yield alert.present();
        });
    }
    ;
    deleteItem(_id) {
        console.log(_id);
        const params = {
            token: this.token,
            itemId: _id,
            orgId: this.orgId
        };
        this._apiService.postRequest(this.url + _config_config__WEBPACK_IMPORTED_MODULE_7__["UNITURL"].deleteStoredItemtype, params).subscribe((result) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (result.success) {
                this._toast.presentToast(result.message);
                this.getType();
            }
        })), (error) => {
            console.log(error.description);
            this._toast.presentToast(error.description);
        };
    }
    add() {
        console.log('add');
        this.addType = true;
        this.typeId = '';
        this.btnText = 'Add Storage type.';
    }
    cancel() {
        this.addType = !this.addType;
    }
    submit() {
        console.log(this.typeId);
        let formValue = this.addItemTypeForm.value;
        if (this.typeId) {
            // update 
            this.loader.present();
            const params = {
                itemTypeId: this.typeId,
                token: this.token,
                ItemTypeName: formValue.name,
                description: formValue.description,
                orgId: this.orgId
            };
            this._apiService.postRequest(this.url + _config_config__WEBPACK_IMPORTED_MODULE_7__["UNITURL"].updateStoredItemtype, params).subscribe((result) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                if (result.success) {
                    this._toast.presentToast(result.message);
                    this.addItemTypeForm.reset();
                    this.addType = false;
                    this.getType();
                }
                this.loader.dismiss();
            })), (error) => {
                this.loader.dismiss();
                console.log(error.description);
                this._toast.presentToast(error.description);
            };
        }
        else {
            // Add new
            const params = {
                token: this.token,
                itemName: formValue.name,
                description: formValue.description,
                orgId: this.orgId
            };
            this._apiService.postRequest(this.url + _config_config__WEBPACK_IMPORTED_MODULE_7__["UNITURL"].addStoredItemtype, params).subscribe((result) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                if (result.success) {
                    this._toast.presentToast(result.message);
                    this.addItemTypeForm.reset();
                    this.addType = false;
                    this.getType();
                }
                this.loader.dismiss();
            })), (error) => {
                this.loader.dismiss();
                console.log(error.description);
                this._toast.presentToast(error.description);
            };
        }
    }
};
ItemStoreageTypePage.ctorParameters = () => [
    { type: src_app_services_api_service_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: src_app_services_loader_service__WEBPACK_IMPORTED_MODULE_5__["LoaderService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"] },
    { type: src_app_services_toast_service__WEBPACK_IMPORTED_MODULE_6__["ToastService"] },
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_8__["Storage"] }
];
ItemStoreageTypePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-item-storeage-type',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./item-storeage-type.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/admin/item-storeage-type/item-storeage-type.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./item-storeage-type.page.scss */ "./src/app/pages/admin/item-storeage-type/item-storeage-type.page.scss")).default]
    })
], ItemStoreageTypePage);



/***/ })

}]);
//# sourceMappingURL=pages-admin-item-storeage-type-item-storeage-type-module-es2015.js.map