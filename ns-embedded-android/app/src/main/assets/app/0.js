(global["webpackJsonp"] = global["webpackJsonp"] || []).push([[0],{

/***/ "./cars/car-detail-edit/car-detail-edit.component.html":
/***/ (function(module, exports) {

module.exports = "<ActionBar class=\"action-bar\">\n    <!--HACK - we should remove the navigation button-->\n    <NavigationButton visibility=\"collapsed\"></NavigationButton>\n    <ActionItem ios.position=\"left\" android.position=\"left\" (tap)=\"onCancelButtonTap()\">\n        <Label text=\"Cancel\" class=\"action-item\"></Label>\n    </ActionItem>\n    <Label class=\"action-bar-title\" text=\"Edit Car Details\" horizontalAlignment=\"center\"></Label>\n    <ActionItem ios.position=\"right\" android.position=\"right\">\n        <Label text=\"Done\" class=\"action-item\" verticalAlignment=\"center\" (tap)=\"onDoneButtonTap()\" \n            [isEnabled]=\"makeModel.valid && imageModel.valid\"\n            [isUserInteractionEnabled]=\"makeModel.valid && imageModel.valid\"></Label>\n    </ActionItem>\n</ActionBar>\n\n<GridLayout class=\"page page-content\">\n    <ScrollView>\n        <StackLayout class=\"car-list\">\n            <Label text=\"CAR MAKE\" class=\"car-list-odd\"></Label>\n            <TextField #makeModel=\"ngModel\" hint=\"Car make field is required\" [(ngModel)]=\"car.name\" class=\"car-list-even\" required></TextField>\n\n            <GridLayout rows=\"*, 55, *\" columns=\"*, auto\" class=\"car-list-odd\">\n                <Label text=\"PRICE PER DAY\"></Label>\n                <Label col=\"1\" horizontalAlignment=\"right\" class=\"text-primary car-list-price\">\n                    <FormattedString>\n                        <Span text=\"€\"></Span>\n                        <Span [text]=\"pricePerDay\"></Span>\n                    </FormattedString>\n                </Label>\n\n                <StackLayout row=\"1\" colSpan=\"2\" verticalAlignment=\"center\">\n                    <Slider [(ngModel)]=\"pricePerDay\"></Slider>\n                </StackLayout>\n\n                <Label text=\"ADD OR REMOVE IMAGE\" row=\"2\" colSpan=\"2\"></Label>\n            </GridLayout>\n\n            <StackLayout class=\"car-list-even\">\n                <!--\n                MyImageAddRemove is a custom component, that wraps an imagepicker plugin and provides custom design and logic\n                on top of it. Check out the custom component at /cars/car-detail-edit/my-image-add-remove.\n                -->\n                <MyImageAddRemove #imageModel=\"ngModel\" [(ngModel)]=\"carImageUrl\" required></MyImageAddRemove>\n                <Label *ngIf=\"!imageModel.valid\" class=\"ng-invalid-image\" text=\"Image field is required\"></Label>\n            </StackLayout>\n\n            <Label class=\"car-list-odd\" text=\"CLASS\"></Label>\n\n            <StackLayout class=\"car-list-even\">\n                <!--\n                MyListSelector is a custom component, that provides custom design and logic for picking an option from a list.\n                Check out the custom component at /cars/car-detail-edit/my-list-selector.\n                -->\n                <MyListSelector [(selectedValue)]=\"car.class\" [items]=\"carClassOptions\" tag=\"class\"></MyListSelector>\n            </StackLayout>\n\n            <Label class=\"car-list-odd\" text=\"DOORS\"></Label>\n\n            <StackLayout class=\"car-list-even\">\n                <MyListSelector [(selectedValue)]=\"car.doors\" [items]=\"carDoorOptions\" tag=\"doors\"></MyListSelector>\n            </StackLayout>\n\n            <Label class=\"car-list-odd\" text=\"SEATS\"></Label>\n\n            <StackLayout class=\"car-list-even\">\n                <MyListSelector [(selectedValue)]=\"car.seats\" [items]=\"carSeatOptions\" tag=\"seats\"></MyListSelector>\n            </StackLayout>\n\n            <Label class=\"car-list-odd\" text=\"TRANSMISSION\"></Label>\n\n            <StackLayout class=\"car-list-even\">\n                <MyListSelector [(selectedValue)]=\"car.transmission\" [items]=\"carTransmissionOptions\" tag=\"transmission\"></MyListSelector>\n            </StackLayout>\n\n            <GridLayout rows=\"*, 55\" columns=\"*, auto\" class=\"car-list-odd\">\n                <Label text=\"LUGGAGE\"></Label>\n                <Label col=\"1\" horizontalAlignment=\"right\" class=\"text-primary\">\n                    <FormattedString>\n                        <Span [text]=\"luggageValue\"></Span>\n                        <Span text=\" Bag(s)\"></Span>\n                    </FormattedString>\n                </Label>\n                <Slider row=\"1\" colSpan=\"2\" minValue=\"0\" maxValue=\"5\" [(ngModel)]=\"luggageValue\"></Slider>\n            </GridLayout>\n        </StackLayout>\n    </ScrollView>\n\n    <ActivityIndicator [busy]=\"isUpdating\"></ActivityIndicator>\n</GridLayout>"

/***/ }),

/***/ "./cars/car-detail-edit/car-detail-edit.component.scss":
/***/ (function(module, exports) {

module.exports = "/**\n * Convenient single import for light variables\n * Includes base variables with light overrides\n **/\n\n/**\n * Light variable overrides\n **/\n\n/**\n * Theme variables overrides\n**/\n\n.car-list .car-list-even,\n.car-list .car-list-odd {\n  padding: 10 15;\n  border-bottom-width: 1;\n  border-color: rgba(2, 39, 52, 0.2);\n}\n\n.car-list .car-list-odd {\n  background-color: rgba(2, 39, 52, 0.1);\n  color: rgba(2, 39, 52, 0.5);\n}\n\n.car-list .car-list-price {\n  width: 35;\n  text-align: right;\n}\n\n.car-list TextField.ng-invalid {\n  placeholder-color: #ED473F;\n}\n\n.car-list .ng-invalid-image {\n  color: #ED473F;\n}"

/***/ }),

/***/ "./cars/car-detail-edit/car-detail-edit.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CarDetailEditComponent", function() { return CarDetailEditComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var nativescript_angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../node_modules/nativescript-angular/router/index.js");
/* harmony import */ var nativescript_angular_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(nativescript_angular_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var ui_dialogs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("../node_modules/tns-core-modules/ui/dialogs/dialogs.js");
/* harmony import */ var ui_dialogs__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(ui_dialogs__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _shared_car_edit_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./cars/shared/car-edit.service.ts");
/* harmony import */ var _shared_car_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./cars/shared/car.service.ts");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./cars/car-detail-edit/constants.ts");







/* ***********************************************************
* This is the item detail edit component.
* This component gets the selected data item, provides options to edit the item and saves the changes.
*************************************************************/
var CarDetailEditComponent = /** @class */ (function () {
    function CarDetailEditComponent(_carService, _carEditService, _pageRoute, _routerExtensions) {
        this._carService = _carService;
        this._carEditService = _carEditService;
        this._pageRoute = _pageRoute;
        this._routerExtensions = _routerExtensions;
        this._carClassOptions = [];
        this._carDoorOptions = [];
        this._carSeatOptions = [];
        this._carTransmissionOptions = [];
        this._isCarImageDirty = false;
        this._isUpdating = false;
    }
    /* ***********************************************************
    * Use the "ngOnInit" handler to get the data item id parameter passed through navigation.
    * Get the data item details from the data service using this id and assign it to the
    * private property that holds it inside the component.
    *************************************************************/
    CarDetailEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.initializeEditOptions();
        /* ***********************************************************
        * Learn more about how to get navigation parameters in this documentation article:
        * http://docs.nativescript.org/angular/core-concepts/angular-navigation.html#passing-parameter
        *************************************************************/
        this._pageRoute.activatedRoute
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["switchMap"])(function (activatedRoute) { return activatedRoute.params; }))
            .forEach(function (params) {
            var carId = params.id;
            _this._car = _this._carEditService.startEdit(carId);
        });
    };
    Object.defineProperty(CarDetailEditComponent.prototype, "isUpdating", {
        get: function () {
            return this._isUpdating;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CarDetailEditComponent.prototype, "car", {
        get: function () {
            return this._car;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CarDetailEditComponent.prototype, "pricePerDay", {
        get: function () {
            return this._car.price;
        },
        set: function (value) {
            // force iOS UISlider to work with discrete steps
            this._car.price = Math.round(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CarDetailEditComponent.prototype, "luggageValue", {
        get: function () {
            return this._car.luggage;
        },
        set: function (value) {
            // force iOS UISlider to work with discrete steps
            this._car.luggage = Math.round(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CarDetailEditComponent.prototype, "carClassOptions", {
        get: function () {
            return this._carClassOptions;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CarDetailEditComponent.prototype, "carDoorOptions", {
        get: function () {
            return this._carDoorOptions;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CarDetailEditComponent.prototype, "carSeatOptions", {
        get: function () {
            return this._carSeatOptions;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CarDetailEditComponent.prototype, "carTransmissionOptions", {
        get: function () {
            return this._carTransmissionOptions;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CarDetailEditComponent.prototype, "carImageUrl", {
        get: function () {
            return this._car.imageUrl;
        },
        set: function (value) {
            this._car.imageUrl = value;
            this._isCarImageDirty = true;
        },
        enumerable: true,
        configurable: true
    });
    /* ***********************************************************
    * The edit cancel button navigates back to the item details page.
    *************************************************************/
    CarDetailEditComponent.prototype.onCancelButtonTap = function () {
        this._routerExtensions.backToPreviousPage();
    };
    /* ***********************************************************
    * The edit done button uses the data service to save the updated values of the data item details.
    * Check out the data service as cars/shared/car.service.ts
    *************************************************************/
    CarDetailEditComponent.prototype.onDoneButtonTap = function () {
        /* ***********************************************************
        * By design this app is set up to work with read-only sample data.
        * Follow the steps in the "Kinvey database setup" section in app/readme.md file
        * and uncomment the code block below to make it editable.
        *************************************************************/
        var _this = this;
        /* ***********************uncomment here*********************
        let queue = Promise.resolve();

        this._isUpdating = true;

        if (this._isCarImageDirty && this._car.imageUrl) {
            queue = queue
                .then(() => this._carService.uploadImage(this._car.imageStoragePath, this._car.imageUrl))
                .then((uploadedFile: any) => {
                    this._car.imageUrl = uploadedFile.url;
                });
        }

        queue.then(() => this._carService.update(this._car))
            .then(() => {
                this._isUpdating = false;
                this._routerExtensions.navigate(["/cars"], {
                    clearHistory: true,
                    animated: true,
                    transition: {
                        name: "slideBottom",
                        duration: 200,
                        curve: "ease"
                    }
                });
            })
            .catch((errorMessage: any) => {
                this._isUpdating = false;
                alert({ title: "Oops!", message: "Something went wrong. Please try again.", okButtonText: "Ok" });
            });
        *********************uncomment here*************************/
        /* ***********************************************************
        * Comment out the code block below if you made the app editable.
        *************************************************************/
        var readOnlyMessage = "Check out the \"Kinvey database setup\" section in the readme file to make it editable."; // tslint:disable-line:max-line-length
        var queue = Promise.resolve();
        queue.then(function () { return Object(ui_dialogs__WEBPACK_IMPORTED_MODULE_3__["alert"])({ title: "Read-Only Template!", message: readOnlyMessage, okButtonText: "Ok" }); })
            .then(function () { return _this._routerExtensions.navigate(["/cars"], {
            clearHistory: true,
            animated: true,
            transition: {
                name: "slideBottom",
                duration: 200,
                curve: "ease"
            }
        }); });
    };
    CarDetailEditComponent.prototype.initializeEditOptions = function () {
        for (var _i = 0, carClassList_1 = _constants__WEBPACK_IMPORTED_MODULE_6__["carClassList"]; _i < carClassList_1.length; _i++) {
            var classItem = carClassList_1[_i];
            this._carClassOptions.push(classItem);
        }
        for (var _a = 0, carDoorList_1 = _constants__WEBPACK_IMPORTED_MODULE_6__["carDoorList"]; _a < carDoorList_1.length; _a++) {
            var doorItem = carDoorList_1[_a];
            this._carDoorOptions.push(doorItem);
        }
        for (var _b = 0, carSeatList_1 = _constants__WEBPACK_IMPORTED_MODULE_6__["carSeatList"]; _b < carSeatList_1.length; _b++) {
            var seatItem = carSeatList_1[_b];
            this._carSeatOptions.push(seatItem);
        }
        for (var _c = 0, carTransmissionList_1 = _constants__WEBPACK_IMPORTED_MODULE_6__["carTransmissionList"]; _c < carTransmissionList_1.length; _c++) {
            var transmissionItem = carTransmissionList_1[_c];
            this._carTransmissionOptions.push(transmissionItem);
        }
    };
    CarDetailEditComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            /*duleId: module.i*/
            selector: "CarDetailEdit",
            template: __webpack_require__("./cars/car-detail-edit/car-detail-edit.component.html"),
            styles: [__webpack_require__("./cars/car-detail-edit/car-detail-edit.component.scss")]
        }),
        __metadata("design:paramtypes", [_shared_car_service__WEBPACK_IMPORTED_MODULE_5__["CarService"],
            _shared_car_edit_service__WEBPACK_IMPORTED_MODULE_4__["CarEditService"],
            nativescript_angular_router__WEBPACK_IMPORTED_MODULE_1__["PageRoute"],
            nativescript_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterExtensions"]])
    ], CarDetailEditComponent);
    return CarDetailEditComponent;
}());



/***/ }),

/***/ "./cars/car-detail-edit/constants.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "carClassList", function() { return carClassList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "carDoorList", function() { return carDoorList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "carSeatList", function() { return carSeatList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "carTransmissionList", function() { return carTransmissionList; });
var carClassList = [
    "Mini",
    "Economy",
    "Compact",
    "Standard",
    "Luxury"
];
var carDoorList = [
    2,
    3,
    5
];
var carSeatList = [
    "2",
    "4",
    "4 + 1",
    "6 + 1"
];
var carTransmissionList = [
    "Manual",
    "Automatic"
];


/***/ }),

/***/ "./cars/car-detail-edit/my-image-add-remove/my-image-add-remove.component.html":
/***/ (function(module, exports) {

module.exports = "<GridLayout height=\"80\" width=\"80\" class=\"thumb\" horizontalAlignment=\"left\" [backgroundImage]=\"imageUrl\" (tap)=\"onImageAddRemoveTap()\">\n    <GridLayout class=\"thumb-remove\" *ngIf=\"imageUrl\">\n        <Label text=\"&#xf014;\" class=\"fa\" horizontalAlignment=\"center\" verticalAlignment=\"center\"></Label>\n    </GridLayout>\n    <GridLayout class=\"thumb-add\" *ngIf=\"!imageUrl\">\n        <Label text=\"&#xf030;\" class=\"fa\" horizontalAlignment=\"center\" verticalAlignment=\"center\"></Label>\n    </GridLayout>\n</GridLayout>\n"

/***/ }),

/***/ "./cars/car-detail-edit/my-image-add-remove/my-image-add-remove.component.scss":
/***/ (function(module, exports) {

module.exports = "/**\n * Convenient single import for light variables\n * Includes base variables with light overrides\n **/\n\n/**\n * Light variable overrides\n **/\n\n/**\n * Theme variables overrides\n**/\n\n.thumb {\n  background-size: cover;\n  background-repeat: no-repeat;\n  font-size: 25;\n  font-weight: bold;\n}\n\n.thumb .thumb-add {\n  background-color: transparent;\n  color: rgba(2, 39, 52, 0.2);\n  border-radius: 3;\n  border-width: 1;\n  border-color: rgba(2, 39, 52, 0.2);\n}\n\n.thumb .thumb-remove {\n  color: #FFFFFF;\n  background-color: rgba(2, 39, 52, 0.2);\n}"

/***/ }),

/***/ "./cars/car-detail-edit/my-image-add-remove/my-image-add-remove.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyImageAddRemoveComponent", function() { return MyImageAddRemoveComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var file_system__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../node_modules/tns-core-modules/file-system/file-system.js");
/* harmony import */ var file_system__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(file_system__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var image_source__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("../node_modules/tns-core-modules/image-source/image-source.js");
/* harmony import */ var image_source__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(image_source__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var nativescript_imagepicker__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("../node_modules/nativescript-imagepicker/imagepicker.js");
/* harmony import */ var nativescript_imagepicker__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(nativescript_imagepicker__WEBPACK_IMPORTED_MODULE_4__);





var tempImageFolderName = "nsimagepicker";
var noop = function () { }; // tslint:disable-line no-empty
var MY_IMAGE_ADD_REMOVE_CONTROL_VALUE_ACCESSOR = {
    provide: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NG_VALUE_ACCESSOR"],
    useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(function () { return MyImageAddRemoveComponent; }),
    multi: true
};
/* ***********************************************************
* The MyImageAddRemove custom component uses an imagepicker plugin to let the user select
* an image and provides custom logic and design to the process.
*************************************************************/
var MyImageAddRemoveComponent = /** @class */ (function () {
    function MyImageAddRemoveComponent() {
        // placeholder for the callback later provided by the ControlValueAccessor
        this.propagateChange = noop;
        this.innerImageUrl = "";
    }
    MyImageAddRemoveComponent_1 = MyImageAddRemoveComponent;
    Object.defineProperty(MyImageAddRemoveComponent, "imageTempFolder", {
        get: function () {
            return file_system__WEBPACK_IMPORTED_MODULE_2__["knownFolders"].temp().getFolder(tempImageFolderName);
        },
        enumerable: true,
        configurable: true
    });
    MyImageAddRemoveComponent.clearImageTempFolder = function () {
        MyImageAddRemoveComponent_1.imageTempFolder.clear();
    };
    Object.defineProperty(MyImageAddRemoveComponent.prototype, "imageUrl", {
        get: function () {
            return this.innerImageUrl;
        },
        set: function (value) {
            if (this.innerImageUrl !== value) {
                this.innerImageUrl = value;
                this.propagateChange(value);
            }
        },
        enumerable: true,
        configurable: true
    });
    // ControlValueAccessor implementation
    MyImageAddRemoveComponent.prototype.writeValue = function (value) {
        if (this.innerImageUrl !== value) {
            this.innerImageUrl = value;
        }
    };
    // ControlValueAccessor implementation
    MyImageAddRemoveComponent.prototype.registerOnChange = function (fn) {
        this.propagateChange = fn;
    };
    // ControlValueAccessor implementation
    // tslint:disable-next-line:no-empty
    MyImageAddRemoveComponent.prototype.registerOnTouched = function (fn) {
    };
    MyImageAddRemoveComponent.prototype.onImageAddRemoveTap = function () {
        if (this.imageUrl) {
            this.handleImageChange(null);
            return;
        }
        MyImageAddRemoveComponent_1.clearImageTempFolder();
        this.pickImage();
    };
    MyImageAddRemoveComponent.prototype.pickImage = function () {
        var _this = this;
        var context = nativescript_imagepicker__WEBPACK_IMPORTED_MODULE_4__["create"]({
            mode: "single"
        });
        context
            .authorize()
            .then(function () { return context.present(); })
            .then(function (selection) { return selection.forEach(function (selectedAsset) {
            selectedAsset.options.height = 768;
            Object(image_source__WEBPACK_IMPORTED_MODULE_3__["fromAsset"])(selectedAsset)
                .then(function (imageSource) { return _this.handleImageChange(imageSource); });
        }); }).catch(function (errorMessage) { return console.log(errorMessage); });
    };
    MyImageAddRemoveComponent.prototype.handleImageChange = function (source) {
        var raisePropertyChange = true;
        var tempImagePath = null;
        if (source) {
            tempImagePath = file_system__WEBPACK_IMPORTED_MODULE_2__["path"].join(MyImageAddRemoveComponent_1.imageTempFolder.path, Date.now() + ".jpg");
            raisePropertyChange = source.saveToFile(tempImagePath, "jpeg");
        }
        if (raisePropertyChange) {
            this.imageUrl = tempImagePath;
        }
    };
    MyImageAddRemoveComponent = MyImageAddRemoveComponent_1 = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "MyImageAddRemove",
            /*duleId: module.i*/
            template: __webpack_require__("./cars/car-detail-edit/my-image-add-remove/my-image-add-remove.component.html"),
            styles: [__webpack_require__("./cars/car-detail-edit/my-image-add-remove/my-image-add-remove.component.scss")],
            providers: [MY_IMAGE_ADD_REMOVE_CONTROL_VALUE_ACCESSOR]
        })
    ], MyImageAddRemoveComponent);
    return MyImageAddRemoveComponent;
    var MyImageAddRemoveComponent_1;
}());



/***/ }),

/***/ "./cars/car-detail-edit/my-list-selector/my-list-selector-modal-view.component.html":
/***/ (function(module, exports) {

module.exports = "<GridLayout rows=\"auto, *, auto\" verticalAlignment=\"top\" class=\"list-modal-view\">\n    <Label [text]=\"title\" class=\"h3 list-modal-header\"></Label>\n    <RadListView row=\"1\" [items]=\"items\" (itemSelected)=\"onItemSelected($event)\" selectionBehavior=\"Press\" class=\"list-modal-list\">\n        <ng-template tkListItemTemplate let-item=\"item\">\n            <GridLayout>\n                <GridLayout android:visibility=\"collapsed\" columns=\"*,auto\" class=\"list-modal-item\">\n                    <Label [text]=\"item.value\"></Label>\n                    <Label col=\"1\" text=\"&#xf00c;\" \n                        class=\"fa list-modal-view-check\" \n                        [visibility]=\"item.isSelected ? 'visible' : 'collapsed'\"></Label>\n                </GridLayout>\n                <GridLayout ios:visibility=\"collapsed\" columns=\"auto,*\" class=\"list-modal-item\">\n                    <Label text=\"&#xf10c;\" \n                        class=\"fa list-modal-view-icon\" verticalAlignment=\"center\" \n                        [visibility]=\"item.isSelected ? 'collapsed' : 'visible'\"></Label>\n                    <Label text=\"&#xf192;\" \n                        class=\"fa list-modal-view-icon selected\" verticalAlignment=\"center\" \n                        [visibility]=\"item.isSelected ? 'visible' : 'collapsed'\"></Label>\n                    <Label col=\"1\" [text]=\"item.value\"></Label>\n                </GridLayout>\n            </GridLayout>\n        </ng-template>\n    </RadListView>\n    <Button class=\"btn btn-outline\" row=\"3\" text=\"CANCEL\" ios:visibility=\"collapsed\" horizontalAlignment=\"right\" (tap)=\"onCancelButtonTap()\"></Button>\n</GridLayout>"

/***/ }),

/***/ "./cars/car-detail-edit/my-list-selector/my-list-selector-modal-view.component.scss":
/***/ (function(module, exports) {

module.exports = "/**\n * Convenient single import for light variables\n * Includes base variables with light overrides\n **/\n\n/**\n * Light variable overrides\n **/\n\n/**\n * Theme variables overrides\n**/\n\n.list-modal-view {\n  color: #022734;\n  background-color: rgba(2, 39, 52, 0.1);\n}\n\n.list-modal-view .list-modal-item {\n  vertical-align: center;\n  margin-bottom: 10;\n}\n\n.list-modal-view .list-modal-header {\n  padding: 15;\n}\n\n.list-modal-view .list-modal-item {\n  padding: 0 15 10 15;\n}\n\n.list-modal-view .list-modal-view-icon {\n  margin-right: 15;\n  margin-top: 2;\n}\n\n.list-modal-view .list-modal-view-icon.selected {\n  color: #3A53FF;\n}\n\n.list-modal-view .btn.btn-outline {\n  border-color: transparent;\n  font-size: 12;\n  padding-right: 0;\n  text-align: right;\n}"

/***/ }),

/***/ "./cars/car-detail-edit/my-list-selector/my-list-selector-modal-view.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyListSelectorModalViewComponent", function() { return MyListSelectorModalViewComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var nativescript_angular_modal_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../node_modules/nativescript-angular/modal-dialog.js");
/* harmony import */ var nativescript_angular_modal_dialog__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(nativescript_angular_modal_dialog__WEBPACK_IMPORTED_MODULE_1__);


var MyListSelectorModalViewComponent = /** @class */ (function () {
    function MyListSelectorModalViewComponent(_params) {
        this._params = _params;
        this._title = _params.context.title;
        this._selectedIndex = _params.context.selectedIndex;
        this._items = [];
        for (var i = 0; i < _params.context.items.length; i++) {
            this._items.push({
                value: _params.context.items[i],
                isSelected: i === this._selectedIndex ? true : false
            });
        }
    }
    MyListSelectorModalViewComponent.prototype.onItemSelected = function (args) {
        var oldSelectedItem = this._items[this._selectedIndex];
        oldSelectedItem.isSelected = false;
        var newSelectedItem = this._items[args.index];
        newSelectedItem.isSelected = true;
        this._selectedIndex = args.index;
        this._params.closeCallback(newSelectedItem.value);
    };
    MyListSelectorModalViewComponent.prototype.onCancelButtonTap = function () {
        this._params.closeCallback(null);
    };
    Object.defineProperty(MyListSelectorModalViewComponent.prototype, "items", {
        get: function () {
            return this._items;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MyListSelectorModalViewComponent.prototype, "title", {
        get: function () {
            return this._title;
        },
        enumerable: true,
        configurable: true
    });
    MyListSelectorModalViewComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "MyListSelectorModalView",
            /*duleId: module.i*/
            template: __webpack_require__("./cars/car-detail-edit/my-list-selector/my-list-selector-modal-view.component.html"),
            styles: [__webpack_require__("./cars/car-detail-edit/my-list-selector/my-list-selector-modal-view.component.scss")]
        }),
        __metadata("design:paramtypes", [nativescript_angular_modal_dialog__WEBPACK_IMPORTED_MODULE_1__["ModalDialogParams"]])
    ], MyListSelectorModalViewComponent);
    return MyListSelectorModalViewComponent;
}());



/***/ }),

/***/ "./cars/car-detail-edit/my-list-selector/my-list-selector.component.html":
/***/ (function(module, exports) {

module.exports = "<GridLayout columns=\"*, auto\" (tap)=\"onSelectorTap()\">\n    <Label class=\"text\" [text]=\"selectedValue\"></Label>\n    <Label text=\"&#xf054;\" class=\"fa text-secondary\" col=\"1\" horizontalAlignment=\"center\" verticalAlignment=\"center\"></Label>\n</GridLayout>\n"

/***/ }),

/***/ "./cars/car-detail-edit/my-list-selector/my-list-selector.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyListSelectorComponent", function() { return MyListSelectorComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var nativescript_angular_modal_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../node_modules/nativescript-angular/modal-dialog.js");
/* harmony import */ var nativescript_angular_modal_dialog__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(nativescript_angular_modal_dialog__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var nativescript_angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../node_modules/nativescript-angular/router/index.js");
/* harmony import */ var nativescript_angular_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(nativescript_angular_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("../node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _shared_car_edit_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./cars/shared/car-edit.service.ts");
/* harmony import */ var _my_list_selector_modal_view_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./cars/car-detail-edit/my-list-selector/my-list-selector-modal-view.component.ts");






var capitalizeFirstLetter = function (s) { return s.charAt(0).toUpperCase() + s.slice(1); };
/* ***********************************************************
* The MyListSelector custom component uses a {N} modal page to let the user select and option
* from a list. You can also check out the my-list-selector-modal-view.component.ts to see the
* contents of the modal page. Learn more about modal pages in this documentation article:
* https://docs.nativescript.org/angular/code-samples/modal-page
*************************************************************/
var MyListSelectorComponent = /** @class */ (function () {
    function MyListSelectorComponent(_pageRoute, _modalService, _vcRef, _carEditService) {
        this._pageRoute = _pageRoute;
        this._modalService = _modalService;
        this._vcRef = _vcRef;
        this._carEditService = _carEditService;
        this.selectedValueChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    MyListSelectorComponent.prototype.ngOnInit = function () {
        var carId = "";
        // use switchMap to get the latest activatedRoute instance
        this._pageRoute.activatedRoute
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(function (activatedRoute) { return activatedRoute.params; }))
            .forEach(function (params) {
            carId = params.id;
        });
        this._carEditModel = this._carEditService.getEditableCarById(carId);
    };
    MyListSelectorComponent.prototype.onSelectorTap = function () {
        var _this = this;
        var title = "Select Car " + capitalizeFirstLetter(this.tag);
        var selectedIndex = this.items.indexOf(this.selectedValue);
        var options = {
            viewContainerRef: this._vcRef,
            context: {
                items: this.items,
                title: title,
                selectedIndex: selectedIndex
            },
            fullscreen: false
        };
        this._modalService.showModal(_my_list_selector_modal_view_component__WEBPACK_IMPORTED_MODULE_5__["MyListSelectorModalViewComponent"], options)
            .then(function (selectedValue) {
            if (selectedValue) {
                _this.selectedValue = selectedValue;
                _this.selectedValueChange.emit(_this.selectedValue);
            }
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], MyListSelectorComponent.prototype, "tag", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], MyListSelectorComponent.prototype, "items", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], MyListSelectorComponent.prototype, "selectedValue", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], MyListSelectorComponent.prototype, "selectedValueChange", void 0);
    MyListSelectorComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            /*duleId: module.i*/
            providers: [nativescript_angular_modal_dialog__WEBPACK_IMPORTED_MODULE_1__["ModalDialogService"]],
            selector: "MyListSelector",
            template: __webpack_require__("./cars/car-detail-edit/my-list-selector/my-list-selector.component.html")
        }),
        __metadata("design:paramtypes", [nativescript_angular_router__WEBPACK_IMPORTED_MODULE_2__["PageRoute"],
            nativescript_angular_modal_dialog__WEBPACK_IMPORTED_MODULE_1__["ModalDialogService"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"],
            _shared_car_edit_service__WEBPACK_IMPORTED_MODULE_4__["CarEditService"]])
    ], MyListSelectorComponent);
    return MyListSelectorComponent;
}());



/***/ }),

/***/ "./cars/car-detail/car-detail.component.html":
/***/ (function(module, exports) {

module.exports = "<ActionBar class=\"action-bar\">\n    <NavigationButton android.systemIcon=\"ic_menu_back\" (tap)=\"onBackButtonTap()\">\n    </NavigationButton>\n    <Label class=\"action-bar-title\" [text]=\"car.name\" horizontalAlignment=\"center\"></Label>\n    <ActionItem ios.position=\"right\" android.position=\"right\" (tap)=\"onEditButtonTap()\">\n        <Label text=\"Edit\" class=\"action-item\"></Label>\n    </ActionItem>\n</ActionBar>\n\n<GridLayout class=\"page page-content\">\n    <ScrollView>\n        <GridLayout rows=\"auto, auto, auto\">\n            <Image [src]=\"car.imageUrl\" stretch=\"aspectFill\" height=\"200\" class=\"m-b-15\"></Image>\n\n            <StackLayout row=\"1\" class=\"hr-light m-t-15 m-b-15\"></StackLayout>\n\n            <GridLayout row=\"2\" rows=\"*,*,*,*,*,*\" columns=\"auto, auto\">\n\n                <Label text=\"Price\" class=\"p-l-15 p-b-10 m-r-20 text-secondary\"></Label>\n                <Label col=\"1\" class=\"text p-b-10\">\n                    <FormattedString>\n                        <Span text=\"&euro;\"></Span>\n                        <Span [text]=\"car.price\"></Span>\n                        <Span text=\"/day\"></Span>\n                    </FormattedString>\n                </Label>\n\n                <Label text=\"Class\" class=\"p-l-15 p-b-10 m-r-20 text-secondary\" row=\"1\"></Label>\n                <Label [text]=\"car.class\" row=\"1\" col=\"1\" class=\"text p-b-10\"></Label>\n\n                <Label text=\"Doors\" class=\"p-l-15 p-b-10 m-r-20 text-secondary\" row=\"2\"></Label>\n                <Label [text]=\"car.doors\" row=\"2\" col=\"1\" class=\"text p-b-10\"></Label>\n\n                <Label text=\"Seats\" class=\"p-l-15 p-b-10 m-r-20 text-secondary\" row=\"3\"></Label>\n                <Label [text]=\"car.seats\" row=\"3\" col=\"1\" class=\"text p-b-10\"></Label>\n\n                <Label text=\"Transmission\" class=\"p-l-15 m-r-20 p-b-10 text-secondary\" row=\"4\"></Label>\n                <Label [text]=\"car.transmission\" row=\"4\" col=\"1\" class=\"text p-b-10\"></Label>\n\n                <Label text=\"Luggage\" class=\"p-l-15 p-b-10 m-r-20 text-secondary\" row=\"5\"></Label>\n                <Label [text]=\"car.luggage\" row=\"5\" col=\"1\" class=\"text p-b-10\"></Label>\n            </GridLayout>\n        </GridLayout>\n    </ScrollView>\n</GridLayout>"

/***/ }),

/***/ "./cars/car-detail/car-detail.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CarDetailComponent", function() { return CarDetailComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var nativescript_angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../node_modules/nativescript-angular/router/index.js");
/* harmony import */ var nativescript_angular_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(nativescript_angular_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _shared_car_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./cars/shared/car.service.ts");




/* ***********************************************************
* This is the item details component in the master-detail structure.
* This component retrieves the passed parameter from the master list component,
* finds the data item by this parameter and displays the detailed data item information.
*************************************************************/
var CarDetailComponent = /** @class */ (function () {
    function CarDetailComponent(_carService, _pageRoute, _routerExtensions) {
        this._carService = _carService;
        this._pageRoute = _pageRoute;
        this._routerExtensions = _routerExtensions;
    }
    /* ***********************************************************
    * Use the "ngOnInit" handler to get the data item id parameter passed through navigation.
    * Get the data item details from the data service using this id and assign it to the
    * private property that holds it inside the component.
    *************************************************************/
    CarDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        /* ***********************************************************
        * Learn more about how to get navigation parameters in this documentation article:
        * http://docs.nativescript.org/angular/core-concepts/angular-navigation.html#passing-parameter
        *************************************************************/
        this._pageRoute.activatedRoute
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["switchMap"])(function (activatedRoute) { return activatedRoute.params; }))
            .forEach(function (params) {
            var carId = params.id;
            _this._car = _this._carService.getCarById(carId);
        });
    };
    Object.defineProperty(CarDetailComponent.prototype, "car", {
        get: function () {
            return this._car;
        },
        enumerable: true,
        configurable: true
    });
    /* ***********************************************************
    * The back button is essential for a master-detail feature.
    *************************************************************/
    CarDetailComponent.prototype.onBackButtonTap = function () {
        this._routerExtensions.backToPreviousPage();
    };
    /* ***********************************************************
    * The master-detail template comes with an example of an item edit page.
    * Check out the edit page in the /cars/car-detail-edit folder.
    *************************************************************/
    CarDetailComponent.prototype.onEditButtonTap = function () {
        this._routerExtensions.navigate(["/cars/car-detail-edit", this._car.id], {
            animated: true,
            transition: {
                name: "slideTop",
                duration: 200,
                curve: "ease"
            }
        });
    };
    CarDetailComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "CarDetail",
            /*duleId: module.i*/
            template: __webpack_require__("./cars/car-detail/car-detail.component.html")
        }),
        __metadata("design:paramtypes", [_shared_car_service__WEBPACK_IMPORTED_MODULE_3__["CarService"],
            nativescript_angular_router__WEBPACK_IMPORTED_MODULE_1__["PageRoute"],
            nativescript_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterExtensions"]])
    ], CarDetailComponent);
    return CarDetailComponent;
}());



/***/ }),

/***/ "./cars/car-list.component.html":
/***/ (function(module, exports) {

module.exports = "<ActionBar class=\"action-bar\">\n    <!-- Should remove the navigation button -->\n    <NavigationButton ios:visibility=\"collapsed\"></NavigationButton>\n    <Label class=\"action-bar-title\" text=\"Browse\" horizontalAlignment=\"center\"></Label>\n</ActionBar>\n\n<GridLayout class=\"page page-content\">\n    <RadListView [items]=\"cars\" (itemTap)=\"onCarItemTap($event)\" class=\"list-group\">\n    <!--\n    RadListView is a UI component part of the Progress NativeScript UI set of components.\n    Learn more about the RadListView UI component and how it can be customized in this documentation article:\n    http://docs.telerik.com/devtools/nativescript-ui/Controls/Angular/ListView/getting-started\n    This component is used to display the master list in the master-detail structure.\n    -->\n        <ng-template tkListItemTemplate let-car=\"item\">\n            <StackLayout class=\"list-group-item\">\n                <GridLayout rows=\"*, *, *\" columns=\"*, *\" class=\"list-group-item-content\">\n                    <Label [text]=\"car.name\" class=\"text-primary font-weight-bold\"></Label>\n                    <Label col=\"1\" horizontalAlignment=\"right\" class=\"list-group-item-text m-r-5\">\n                        <FormattedString>\n                            <Span text=\"&euro;\"></Span>\n                            <Span [text]=\"car.price\"></Span>\n                            <Span text=\"/day\"></Span>\n                        </FormattedString>\n                    </Label>\n\n                    <StackLayout row=\"1\" class=\"hr-light m-t-5 m-b-5\" colSpan=\"2\"></StackLayout>\n\n                    <Image row=\"2\" [src]=\"car.imageUrl\" stretch=\"aspectFill\" height=\"120\" class=\"m-r-20\"></Image>\n                    <StackLayout row=\"2\" col=\"1\" verticalAlignment=\"center\" class=\"list-group-item-text\">\n                        <Label class=\"p-b-10\">\n                            <!-- set fontFamily=\"system\" to workaround \"Service exited due to Segmentation fault: 11\" error -->\n                            <FormattedString ios:fontFamily=\"system\">\n                                <Span text=\"&#xf1b9;   \" class=\"fa text-primary\"></Span>\n                                <Span [text]=\"car.class\"></Span>\n                            </FormattedString>\n                        </Label>\n                        <Label class=\"p-b-10\">\n                            <!-- set fontFamily=\"system\" to workaround \"Service exited due to Segmentation fault: 11\" error -->\n                            <FormattedString ios:fontFamily=\"system\">\n                                <Span text=\"&#xf085;   \" class=\"fa text-primary\"></Span>\n                                <Span [text]=\"car.transmission\"></Span>\n                                <Span text=\" Transmission\"></Span>\n                            </FormattedString>\n                        </Label>\n                        <Label>\n                            <!-- set fontFamily=\"system\" to workaround \"Service exited due to Segmentation fault: 11\" error -->\n                            <FormattedString ios:fontFamily=\"system\">\n                                <Span text=\"&#xf2dc;   \" class=\"fa text-primary\"></Span>\n                                <Span [text]=\"car.hasAC ? 'Yes' : 'No'\"></Span>\n                            </FormattedString>\n                        </Label>\n                    </StackLayout>\n                </GridLayout>\n            </StackLayout>\n        </ng-template>\n    </RadListView>\n\n    <ActivityIndicator [busy]=\"isLoading\"></ActivityIndicator>\n</GridLayout>"

/***/ }),

/***/ "./cars/car-list.component.scss":
/***/ (function(module, exports) {

module.exports = "/**\n * Convenient single import for light variables\n * Includes base variables with light overrides\n **/\n\n/**\n * Light variable overrides\n **/\n\n/**\n * Theme variables overrides\n**/\n\n.list-group .list-group-item {\n  padding: 0 0 8 0;\n  background-color: rgba(2, 39, 52, 0.1);\n}\n\n.list-group .list-group-item .list-group-item-content {\n  padding: 8 15 4 15;\n  background-color: #FFFFFF;\n}\n\n.list-group .list-group-item .fa {\n  color: #3A53FF;\n}"

/***/ }),

/***/ "./cars/car-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CarListComponent", function() { return CarListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var data_observable_array__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../node_modules/tns-core-modules/data/observable-array/observable-array.js");
/* harmony import */ var data_observable_array__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(data_observable_array__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var nativescript_angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../node_modules/nativescript-angular/router/index.js");
/* harmony import */ var nativescript_angular_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(nativescript_angular_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _shared_car_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./cars/shared/car.service.ts");




/* ***********************************************************
* This is the master list component in the master-detail structure.
* This component gets the data, passes it to the master view and displays it in a list.
* It also handles the navigation to the details page for each item.
*************************************************************/
var CarListComponent = /** @class */ (function () {
    function CarListComponent(_carService, _routerExtensions) {
        this._carService = _carService;
        this._routerExtensions = _routerExtensions;
        this._isLoading = false;
        this._cars = new data_observable_array__WEBPACK_IMPORTED_MODULE_1__["ObservableArray"]([]);
    }
    /* ***********************************************************
    * Use the "ngOnInit" handler to get the data and assign it to the
    * private property that holds it inside the component.
    *************************************************************/
    CarListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._isLoading = true;
        /* ***********************************************************
        * The data is retrieved remotely from FireBase.
        * The actual data retrieval code is wrapped in a data service.
        * Check out the service in cars/shared/car.service.ts
        *************************************************************/
        this._carService.load()
            .then(function (cars) {
            _this._cars = new data_observable_array__WEBPACK_IMPORTED_MODULE_1__["ObservableArray"](cars);
            _this._isLoading = false;
        })
            .catch(function () {
            _this._isLoading = false;
        });
    };
    Object.defineProperty(CarListComponent.prototype, "cars", {
        get: function () {
            return this._cars;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CarListComponent.prototype, "isLoading", {
        get: function () {
            return this._isLoading;
        },
        enumerable: true,
        configurable: true
    });
    /* ***********************************************************
    * Use the "itemTap" event handler of the <RadListView> to navigate to the
    * item details page. Retrieve a reference for the data item (the id) and pass it
    * to the item details page, so that it can identify which data item to display.
    * Learn more about navigating with a parameter in this documentation article:
    * http://docs.nativescript.org/angular/core-concepts/angular-navigation.html#passing-parameter
    *************************************************************/
    CarListComponent.prototype.onCarItemTap = function (args) {
        var tappedCarItem = args.view.bindingContext;
        this._routerExtensions.navigate(["/cars/car-detail", tappedCarItem.id], {
            animated: true,
            transition: {
                name: "slide",
                duration: 200,
                curve: "ease"
            }
        });
    };
    CarListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "CarsList",
            /*duleId: module.i*/
            template: __webpack_require__("./cars/car-list.component.html"),
            styles: [__webpack_require__("./cars/car-list.component.scss")]
        }),
        __metadata("design:paramtypes", [_shared_car_service__WEBPACK_IMPORTED_MODULE_3__["CarService"],
            nativescript_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterExtensions"]])
    ], CarListComponent);
    return CarListComponent;
}());



/***/ }),

/***/ "./cars/cars-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CarsRoutingModule", function() { return CarsRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var nativescript_angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../node_modules/nativescript-angular/router/index.js");
/* harmony import */ var nativescript_angular_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(nativescript_angular_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _car_detail_edit_car_detail_edit_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./cars/car-detail-edit/car-detail-edit.component.ts");
/* harmony import */ var _car_detail_car_detail_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./cars/car-detail/car-detail.component.ts");
/* harmony import */ var _car_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./cars/car-list.component.ts");





var routes = [
    { path: "", component: _car_list_component__WEBPACK_IMPORTED_MODULE_4__["CarListComponent"] },
    { path: "car-detail/:id", component: _car_detail_car_detail_component__WEBPACK_IMPORTED_MODULE_3__["CarDetailComponent"] },
    { path: "car-detail-edit/:id", component: _car_detail_edit_car_detail_edit_component__WEBPACK_IMPORTED_MODULE_2__["CarDetailEditComponent"] }
];
var CarsRoutingModule = /** @class */ (function () {
    function CarsRoutingModule() {
    }
    CarsRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [nativescript_angular_router__WEBPACK_IMPORTED_MODULE_1__["NativeScriptRouterModule"].forChild(routes)],
            exports: [nativescript_angular_router__WEBPACK_IMPORTED_MODULE_1__["NativeScriptRouterModule"]]
        })
    ], CarsRoutingModule);
    return CarsRoutingModule;
}());



/***/ }),

/***/ "./cars/cars.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CarsModule", function() { return CarsModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var nativescript_angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../node_modules/nativescript-angular/common.js");
/* harmony import */ var nativescript_angular_common__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(nativescript_angular_common__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var nativescript_angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../node_modules/nativescript-angular/forms/index.js");
/* harmony import */ var nativescript_angular_forms__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(nativescript_angular_forms__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var nativescript_ui_listview_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("../node_modules/nativescript-ui-listview/angular/listview-directives.js");
/* harmony import */ var nativescript_ui_listview_angular__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(nativescript_ui_listview_angular__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _car_detail_edit_car_detail_edit_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./cars/car-detail-edit/car-detail-edit.component.ts");
/* harmony import */ var _car_detail_edit_my_image_add_remove_my_image_add_remove_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./cars/car-detail-edit/my-image-add-remove/my-image-add-remove.component.ts");
/* harmony import */ var _car_detail_edit_my_list_selector_my_list_selector_modal_view_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./cars/car-detail-edit/my-list-selector/my-list-selector-modal-view.component.ts");
/* harmony import */ var _car_detail_edit_my_list_selector_my_list_selector_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./cars/car-detail-edit/my-list-selector/my-list-selector.component.ts");
/* harmony import */ var _car_detail_car_detail_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./cars/car-detail/car-detail.component.ts");
/* harmony import */ var _car_list_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./cars/car-list.component.ts");
/* harmony import */ var _cars_routing_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./cars/cars-routing.module.ts");
/* harmony import */ var _shared_car_edit_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("./cars/shared/car-edit.service.ts");
/* harmony import */ var _shared_car_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("./cars/shared/car.service.ts");






 // tslint:disable-line:max-line-length






var CarsModule = /** @class */ (function () {
    function CarsModule() {
    }
    CarsModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _cars_routing_module__WEBPACK_IMPORTED_MODULE_10__["CarsRoutingModule"],
                nativescript_angular_common__WEBPACK_IMPORTED_MODULE_1__["NativeScriptCommonModule"],
                nativescript_angular_forms__WEBPACK_IMPORTED_MODULE_2__["NativeScriptFormsModule"],
                nativescript_ui_listview_angular__WEBPACK_IMPORTED_MODULE_3__["NativeScriptUIListViewModule"]
            ],
            declarations: [
                _car_list_component__WEBPACK_IMPORTED_MODULE_9__["CarListComponent"],
                _car_detail_car_detail_component__WEBPACK_IMPORTED_MODULE_8__["CarDetailComponent"],
                _car_detail_edit_car_detail_edit_component__WEBPACK_IMPORTED_MODULE_4__["CarDetailEditComponent"],
                _car_detail_edit_my_list_selector_my_list_selector_component__WEBPACK_IMPORTED_MODULE_7__["MyListSelectorComponent"],
                _car_detail_edit_my_list_selector_my_list_selector_modal_view_component__WEBPACK_IMPORTED_MODULE_6__["MyListSelectorModalViewComponent"],
                _car_detail_edit_my_image_add_remove_my_image_add_remove_component__WEBPACK_IMPORTED_MODULE_5__["MyImageAddRemoveComponent"]
            ],
            entryComponents: [
                _car_detail_edit_my_list_selector_my_list_selector_modal_view_component__WEBPACK_IMPORTED_MODULE_6__["MyListSelectorModalViewComponent"]
            ],
            providers: [
                _shared_car_service__WEBPACK_IMPORTED_MODULE_12__["CarService"],
                _shared_car_edit_service__WEBPACK_IMPORTED_MODULE_11__["CarEditService"]
            ],
            schemas: [
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["NO_ERRORS_SCHEMA"]
            ]
        })
    ], CarsModule);
    return CarsModule;
}());



/***/ }),

/***/ "./cars/shared/car-edit.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CarEditService", function() { return CarEditService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _car_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./cars/shared/car.model.ts");
/* harmony import */ var _car_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./cars/shared/car.service.ts");



var CarEditService = /** @class */ (function () {
    function CarEditService(_carService) {
        this._carService = _carService;
    }
    CarEditService.prototype.startEdit = function (id) {
        this._editModel = null;
        return this.getEditableCarById(id);
    };
    CarEditService.prototype.getEditableCarById = function (id) {
        if (!this._editModel || this._editModel.id !== id) {
            var car = this._carService.getCarById(id);
            // get fresh editable copy of car model
            this._editModel = new _car_model__WEBPACK_IMPORTED_MODULE_1__["Car"](car);
        }
        return this._editModel;
    };
    CarEditService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_car_service__WEBPACK_IMPORTED_MODULE_2__["CarService"]])
    ], CarEditService);
    return CarEditService;
}());



/***/ }),

/***/ "./cars/shared/car.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Car", function() { return Car; });
var Car = /** @class */ (function () {
    function Car(options) {
        this.id = options.id;
        this.name = options.name;
        this.hasAC = options.hasAC;
        this.seats = options.seats;
        this.luggage = Number(options.luggage);
        this.class = options.class;
        this.doors = Number(options.doors);
        this.price = Number(options.price);
        this.transmission = options.transmission;
        this.imageUrl = encodeURI(options.imageUrl);
        this.imageStoragePath = options.imageStoragePath;
    }
    return Car;
}());



/***/ }),

/***/ "./cars/shared/car.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CarService", function() { return CarService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var file_system__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../node_modules/tns-core-modules/file-system/file-system.js");
/* harmony import */ var file_system__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(file_system__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var kinvey_nativescript_sdk__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../node_modules/kinvey-nativescript-sdk/kinvey-nativescript-sdk.js");
/* harmony import */ var kinvey_nativescript_sdk__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(kinvey_nativescript_sdk__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _shared_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./shared/config.ts");
/* harmony import */ var _car_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./cars/shared/car.model.ts");





var editableProperties = [
    "class",
    "doors",
    "hasAC",
    "transmission",
    "luggage",
    "name",
    "price",
    "seats",
    "imageUrl"
];
var CarService = /** @class */ (function () {
    function CarService() {
        this.allCars = [];
        this.carsStore = kinvey_nativescript_sdk__WEBPACK_IMPORTED_MODULE_2__["Kinvey"].DataStore.collection("cars");
    }
    CarService_1 = CarService;
    CarService.cloneUpdateModel = function (car) {
        // tslint:disable-next-line:ban-comma-operator
        return editableProperties.reduce(function (a, e) { return (a[e] = car[e], a); }, { _id: car.id });
    };
    CarService.prototype.getCarById = function (id) {
        if (!id) {
            return;
        }
        return this.allCars.filter(function (car) {
            return car.id === id;
        })[0];
    };
    CarService.prototype.load = function () {
        var _this = this;
        return this.login().then(function () {
            return _this.carsStore.sync();
        }).then(function () {
            var sortByNameQuery = new kinvey_nativescript_sdk__WEBPACK_IMPORTED_MODULE_2__["Kinvey"].Query();
            sortByNameQuery.ascending("name");
            var stream = _this.carsStore.find(sortByNameQuery);
            return stream.toPromise();
        }).then(function (data) {
            _this.allCars = [];
            data.forEach(function (carData) {
                carData.id = carData._id;
                var car = new _car_model__WEBPACK_IMPORTED_MODULE_4__["Car"](carData);
                _this.allCars.push(car);
            });
            return _this.allCars;
        });
    };
    CarService.prototype.update = function (carModel) {
        var updateModel = CarService_1.cloneUpdateModel(carModel);
        return this.carsStore.save(updateModel);
    };
    CarService.prototype.uploadImage = function (remoteFullPath, localFullPath) {
        var imageFile = file_system__WEBPACK_IMPORTED_MODULE_1__["File"].fromPath(localFullPath);
        var imageContent = imageFile.readSync();
        var metadata = {
            filename: imageFile.name,
            mimeType: this.getMimeType(imageFile.extension),
            size: imageContent.length,
            public: true
        };
        return kinvey_nativescript_sdk__WEBPACK_IMPORTED_MODULE_2__["Kinvey"].Files.upload(imageFile, metadata, { timeout: 2147483647 })
            .then(function (uploadedFile) {
            var query = new kinvey_nativescript_sdk__WEBPACK_IMPORTED_MODULE_2__["Kinvey"].Query();
            query.equalTo("_id", uploadedFile._id);
            return kinvey_nativescript_sdk__WEBPACK_IMPORTED_MODULE_2__["Kinvey"].Files.find(query);
        })
            .then(function (files) {
            if (files && files.length) {
                var file = files[0];
                file.url = file._downloadURL;
                return file;
            }
            else {
                Promise.reject(new Error("No items with the given ID could be found."));
            }
        });
    };
    CarService.prototype.login = function () {
        if (!!kinvey_nativescript_sdk__WEBPACK_IMPORTED_MODULE_2__["Kinvey"].User.getActiveUser()) {
            return Promise.resolve();
        }
        else {
            return kinvey_nativescript_sdk__WEBPACK_IMPORTED_MODULE_2__["Kinvey"].User.login(_shared_config__WEBPACK_IMPORTED_MODULE_3__["Config"].kinveyUsername, _shared_config__WEBPACK_IMPORTED_MODULE_3__["Config"].kinveyPassword);
        }
    };
    CarService.prototype.getMimeType = function (imageExtension) {
        var extension = imageExtension === "jpg" ? "jpeg" : imageExtension;
        return "image/" + extension.replace(/\./g, "");
    };
    CarService = CarService_1 = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])()
    ], CarService);
    return CarService;
    var CarService_1;
}());



/***/ })

}]);