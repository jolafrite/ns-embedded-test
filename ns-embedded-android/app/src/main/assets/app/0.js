(global["webpackJsonp"] = global["webpackJsonp"] || []).push([[0],{

/***/ "./cars/car-detail-edit/car-detail-edit.component.ngfactory.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_CarDetailEditComponent", function() { return RenderType_CarDetailEditComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_CarDetailEditComponent_0", function() { return View_CarDetailEditComponent_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_CarDetailEditComponent_Host_0", function() { return View_CarDetailEditComponent_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CarDetailEditComponentNgFactory", function() { return CarDetailEditComponentNgFactory; });
/* harmony import */ var _car_detail_edit_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./cars/car-detail-edit/car-detail-edit.component.scss.shim.ngstyle.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _node_modules_nativescript_angular_directives_action_bar_ngfactory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../node_modules/nativescript-angular/directives/action-bar.ngfactory.js");
/* harmony import */ var nativescript_angular_directives_action_bar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("../node_modules/nativescript-angular/directives/action-bar.js");
/* harmony import */ var nativescript_angular_directives_action_bar__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(nativescript_angular_directives_action_bar__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var tns_core_modules_ui_page_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("../node_modules/tns-core-modules/ui/page/page.js");
/* harmony import */ var tns_core_modules_ui_page_page__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(tns_core_modules_ui_page_page__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("../node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var nativescript_angular_forms_value_accessors_text_value_accessor__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("../node_modules/nativescript-angular/forms/value-accessors/text-value-accessor.js");
/* harmony import */ var nativescript_angular_forms_value_accessors_text_value_accessor__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(nativescript_angular_forms_value_accessors_text_value_accessor__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var nativescript_angular_forms_value_accessors_number_value_accessor__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("../node_modules/nativescript-angular/forms/value-accessors/number-value-accessor.js");
/* harmony import */ var nativescript_angular_forms_value_accessors_number_value_accessor__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(nativescript_angular_forms_value_accessors_number_value_accessor__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _my_image_add_remove_my_image_add_remove_component_ngfactory__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./cars/car-detail-edit/my-image-add-remove/my-image-add-remove.component.ngfactory.js");
/* harmony import */ var _my_image_add_remove_my_image_add_remove_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./cars/car-detail-edit/my-image-add-remove/my-image-add-remove.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("../node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _my_list_selector_my_list_selector_component_ngfactory__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("./cars/car-detail-edit/my-list-selector/my-list-selector.component.ngfactory.js");
/* harmony import */ var nativescript_angular_directives_dialogs__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("../node_modules/nativescript-angular/directives/dialogs.js");
/* harmony import */ var nativescript_angular_directives_dialogs__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(nativescript_angular_directives_dialogs__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var nativescript_angular_router_ns_location_strategy__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("../node_modules/nativescript-angular/router/ns-location-strategy.js");
/* harmony import */ var nativescript_angular_router_ns_location_strategy__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(nativescript_angular_router_ns_location_strategy__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _my_list_selector_my_list_selector_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__("./cars/car-detail-edit/my-list-selector/my-list-selector.component.ts");
/* harmony import */ var nativescript_angular_router_page_router_outlet__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__("../node_modules/nativescript-angular/router/page-router-outlet.js");
/* harmony import */ var nativescript_angular_router_page_router_outlet__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(nativescript_angular_router_page_router_outlet__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _shared_car_edit_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__("./cars/shared/car-edit.service.ts");
/* harmony import */ var _car_detail_edit_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__("./cars/car-detail-edit/car-detail-edit.component.ts");
/* harmony import */ var _shared_car_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__("./cars/shared/car.service.ts");
/* harmony import */ var nativescript_angular_router_router_extensions__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__("../node_modules/nativescript-angular/router/router-extensions.js");
/* harmony import */ var nativescript_angular_router_router_extensions__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(nativescript_angular_router_router_extensions__WEBPACK_IMPORTED_MODULE_19__);
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 




















var styles_CarDetailEditComponent = [_car_detail_edit_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];
var RenderType_CarDetailEditComponent = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({ encapsulation: 0, styles: styles_CarDetailEditComponent, data: {} });

function View_CarDetailEditComponent_1(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 0, "Label", [["class", "ng-invalid-image"], ["text", "Image field is required"]], null, null, null, null, null))], null, null); }
function View_CarDetailEditComponent_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 10, "ActionBar", [["class", "action-bar"]], null, null, null, _node_modules_nativescript_angular_directives_action_bar_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_ActionBarComponent_0"], _node_modules_nativescript_angular_directives_action_bar_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_ActionBarComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 49152, null, 0, nativescript_angular_directives_action_bar__WEBPACK_IMPORTED_MODULE_3__["ActionBarComponent"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], tns_core_modules_ui_page_page__WEBPACK_IMPORTED_MODULE_4__["Page"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, 0, 1, "NavigationButton", [["visibility", "collapsed"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](3, 147456, null, 0, nativescript_angular_directives_action_bar__WEBPACK_IMPORTED_MODULE_3__["NavigationButtonDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], [2, nativescript_angular_directives_action_bar__WEBPACK_IMPORTED_MODULE_3__["ActionBarScope"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](4, 0, null, 0, 2, "ActionItem", [["android.position", "left"], ["ios.position", "left"]], null, [[null, "tap"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("tap" === en)) {
        var pd_0 = (_co.onCancelButtonTap() !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](5, 147456, null, 0, nativescript_angular_directives_action_bar__WEBPACK_IMPORTED_MODULE_3__["ActionItemDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], [2, nativescript_angular_directives_action_bar__WEBPACK_IMPORTED_MODULE_3__["ActionBarScope"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](6, 0, null, null, 0, "Label", [["class", "action-item"], ["text", "Cancel"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](7, 0, null, 0, 0, "Label", [["class", "action-bar-title"], ["horizontalAlignment", "center"], ["text", "Edit Car Details"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](8, 0, null, 0, 2, "ActionItem", [["android.position", "right"], ["ios.position", "right"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](9, 147456, null, 0, nativescript_angular_directives_action_bar__WEBPACK_IMPORTED_MODULE_3__["ActionItemDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], [2, nativescript_angular_directives_action_bar__WEBPACK_IMPORTED_MODULE_3__["ActionBarScope"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](10, 0, null, null, 0, "Label", [["class", "action-item"], ["text", "Done"], ["verticalAlignment", "center"]], [[8, "isEnabled", 0], [8, "isUserInteractionEnabled", 0]], [[null, "tap"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("tap" === en)) {
        var pd_0 = (_co.onDoneButtonTap() !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](11, 0, null, null, 69, "GridLayout", [["class", "page page-content"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](12, 0, null, null, 67, "ScrollView", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](13, 0, null, null, 66, "StackLayout", [["class", "car-list"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](14, 0, null, null, 0, "Label", [["class", "car-list-odd"], ["text", "CAR MAKE"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](15, 0, null, null, 7, "TextField", [["class", "car-list-even"], ["hint", "Car make field is required"], ["required", ""]], [[1, "required", 0], [2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "ngModelChange"], [null, "touch"], [null, "textChange"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("touch" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 18).onTouched() !== false);
        ad = (pd_0 && ad);
    } if (("textChange" === en)) {
        var pd_1 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 18).onChange($event.value) !== false);
        ad = (pd_1 && ad);
    } if (("ngModelChange" === en)) {
        var pd_2 = ((_co.car.name = $event) !== false);
        ad = (pd_2 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](16, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["RequiredValidator"], [], { required: [0, "required"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](1024, null, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NG_VALIDATORS"], function (p0_0) { return [p0_0]; }, [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["RequiredValidator"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](18, 16384, null, 0, nativescript_angular_forms_value_accessors_text_value_accessor__WEBPACK_IMPORTED_MODULE_6__["TextValueAccessor"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](1024, null, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NG_VALUE_ACCESSOR"], function (p0_0) { return [p0_0]; }, [nativescript_angular_forms_value_accessors_text_value_accessor__WEBPACK_IMPORTED_MODULE_6__["TextValueAccessor"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](20, 671744, [["makeModel", 4]], 0, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgModel"], [[8, null], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NG_VALIDATORS"]], [8, null], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NG_VALUE_ACCESSOR"]]], { model: [0, "model"] }, { update: "ngModelChange" }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControl"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgModel"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](22, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatus"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControl"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](23, 0, null, null, 13, "GridLayout", [["class", "car-list-odd"], ["columns", "*, auto"], ["rows", "*, 55, *"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](24, 0, null, null, 0, "Label", [["text", "PRICE PER DAY"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](25, 0, null, null, 3, "Label", [["class", "text-primary car-list-price"], ["col", "1"], ["horizontalAlignment", "right"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](26, 0, null, null, 2, "FormattedString", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](27, 0, null, null, 0, "Span", [["text", "\u20AC"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](28, 0, null, null, 0, "Span", [], [[8, "text", 0]], null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](29, 0, null, null, 6, "StackLayout", [["colSpan", "2"], ["row", "1"], ["verticalAlignment", "center"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](30, 0, null, null, 5, "Slider", [], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "ngModelChange"], [null, "valueChange"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("valueChange" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 31).onChange($event.value) !== false);
        ad = (pd_0 && ad);
    } if (("ngModelChange" === en)) {
        var pd_1 = ((_co.pricePerDay = $event) !== false);
        ad = (pd_1 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](31, 16384, null, 0, nativescript_angular_forms_value_accessors_number_value_accessor__WEBPACK_IMPORTED_MODULE_7__["NumberValueAccessor"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](1024, null, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NG_VALUE_ACCESSOR"], function (p0_0) { return [p0_0]; }, [nativescript_angular_forms_value_accessors_number_value_accessor__WEBPACK_IMPORTED_MODULE_7__["NumberValueAccessor"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](33, 671744, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgModel"], [[8, null], [8, null], [8, null], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NG_VALUE_ACCESSOR"]]], { model: [0, "model"] }, { update: "ngModelChange" }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControl"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgModel"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](35, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatus"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControl"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](36, 0, null, null, 0, "Label", [["colSpan", "2"], ["row", "2"], ["text", "ADD OR REMOVE IMAGE"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](37, 0, null, null, 10, "StackLayout", [["class", "car-list-even"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](38, 0, null, null, 7, "MyImageAddRemove", [["required", ""]], [[1, "required", 0], [2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "ngModelChange"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("ngModelChange" === en)) {
        var pd_0 = ((_co.carImageUrl = $event) !== false);
        ad = (pd_0 && ad);
    } return ad; }, _my_image_add_remove_my_image_add_remove_component_ngfactory__WEBPACK_IMPORTED_MODULE_8__["View_MyImageAddRemoveComponent_0"], _my_image_add_remove_my_image_add_remove_component_ngfactory__WEBPACK_IMPORTED_MODULE_8__["RenderType_MyImageAddRemoveComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](39, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["RequiredValidator"], [], { required: [0, "required"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](1024, null, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NG_VALIDATORS"], function (p0_0) { return [p0_0]; }, [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["RequiredValidator"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](41, 49152, null, 0, _my_image_add_remove_my_image_add_remove_component__WEBPACK_IMPORTED_MODULE_9__["MyImageAddRemoveComponent"], [], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](1024, null, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NG_VALUE_ACCESSOR"], function (p0_0) { return [p0_0]; }, [_my_image_add_remove_my_image_add_remove_component__WEBPACK_IMPORTED_MODULE_9__["MyImageAddRemoveComponent"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](43, 671744, [["imageModel", 4]], 0, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgModel"], [[8, null], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NG_VALIDATORS"]], [8, null], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NG_VALUE_ACCESSOR"]]], { model: [0, "model"] }, { update: "ngModelChange" }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControl"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgModel"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](45, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatus"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControl"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_CarDetailEditComponent_1)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](47, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](48, 0, null, null, 0, "Label", [["class", "car-list-odd"], ["text", "CLASS"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](49, 0, null, null, 3, "StackLayout", [["class", "car-list-even"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](50, 16777216, null, null, 2, "MyListSelector", [["tag", "class"]], null, [[null, "selectedValueChange"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("selectedValueChange" === en)) {
        var pd_0 = ((_co.car.class = $event) !== false);
        ad = (pd_0 && ad);
    } return ad; }, _my_list_selector_my_list_selector_component_ngfactory__WEBPACK_IMPORTED_MODULE_11__["View_MyListSelectorComponent_0"], _my_list_selector_my_list_selector_component_ngfactory__WEBPACK_IMPORTED_MODULE_11__["RenderType_MyListSelectorComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](512, null, nativescript_angular_directives_dialogs__WEBPACK_IMPORTED_MODULE_12__["ModalDialogService"], nativescript_angular_directives_dialogs__WEBPACK_IMPORTED_MODULE_12__["ModalDialogService"], [nativescript_angular_router_ns_location_strategy__WEBPACK_IMPORTED_MODULE_13__["NSLocationStrategy"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](52, 114688, null, 0, _my_list_selector_my_list_selector_component__WEBPACK_IMPORTED_MODULE_14__["MyListSelectorComponent"], [nativescript_angular_router_page_router_outlet__WEBPACK_IMPORTED_MODULE_15__["PageRoute"], nativescript_angular_directives_dialogs__WEBPACK_IMPORTED_MODULE_12__["ModalDialogService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _shared_car_edit_service__WEBPACK_IMPORTED_MODULE_16__["CarEditService"]], { tag: [0, "tag"], items: [1, "items"], selectedValue: [2, "selectedValue"] }, { selectedValueChange: "selectedValueChange" }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](53, 0, null, null, 0, "Label", [["class", "car-list-odd"], ["text", "DOORS"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](54, 0, null, null, 3, "StackLayout", [["class", "car-list-even"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](55, 16777216, null, null, 2, "MyListSelector", [["tag", "doors"]], null, [[null, "selectedValueChange"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("selectedValueChange" === en)) {
        var pd_0 = ((_co.car.doors = $event) !== false);
        ad = (pd_0 && ad);
    } return ad; }, _my_list_selector_my_list_selector_component_ngfactory__WEBPACK_IMPORTED_MODULE_11__["View_MyListSelectorComponent_0"], _my_list_selector_my_list_selector_component_ngfactory__WEBPACK_IMPORTED_MODULE_11__["RenderType_MyListSelectorComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](512, null, nativescript_angular_directives_dialogs__WEBPACK_IMPORTED_MODULE_12__["ModalDialogService"], nativescript_angular_directives_dialogs__WEBPACK_IMPORTED_MODULE_12__["ModalDialogService"], [nativescript_angular_router_ns_location_strategy__WEBPACK_IMPORTED_MODULE_13__["NSLocationStrategy"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](57, 114688, null, 0, _my_list_selector_my_list_selector_component__WEBPACK_IMPORTED_MODULE_14__["MyListSelectorComponent"], [nativescript_angular_router_page_router_outlet__WEBPACK_IMPORTED_MODULE_15__["PageRoute"], nativescript_angular_directives_dialogs__WEBPACK_IMPORTED_MODULE_12__["ModalDialogService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _shared_car_edit_service__WEBPACK_IMPORTED_MODULE_16__["CarEditService"]], { tag: [0, "tag"], items: [1, "items"], selectedValue: [2, "selectedValue"] }, { selectedValueChange: "selectedValueChange" }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](58, 0, null, null, 0, "Label", [["class", "car-list-odd"], ["text", "SEATS"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](59, 0, null, null, 3, "StackLayout", [["class", "car-list-even"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](60, 16777216, null, null, 2, "MyListSelector", [["tag", "seats"]], null, [[null, "selectedValueChange"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("selectedValueChange" === en)) {
        var pd_0 = ((_co.car.seats = $event) !== false);
        ad = (pd_0 && ad);
    } return ad; }, _my_list_selector_my_list_selector_component_ngfactory__WEBPACK_IMPORTED_MODULE_11__["View_MyListSelectorComponent_0"], _my_list_selector_my_list_selector_component_ngfactory__WEBPACK_IMPORTED_MODULE_11__["RenderType_MyListSelectorComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](512, null, nativescript_angular_directives_dialogs__WEBPACK_IMPORTED_MODULE_12__["ModalDialogService"], nativescript_angular_directives_dialogs__WEBPACK_IMPORTED_MODULE_12__["ModalDialogService"], [nativescript_angular_router_ns_location_strategy__WEBPACK_IMPORTED_MODULE_13__["NSLocationStrategy"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](62, 114688, null, 0, _my_list_selector_my_list_selector_component__WEBPACK_IMPORTED_MODULE_14__["MyListSelectorComponent"], [nativescript_angular_router_page_router_outlet__WEBPACK_IMPORTED_MODULE_15__["PageRoute"], nativescript_angular_directives_dialogs__WEBPACK_IMPORTED_MODULE_12__["ModalDialogService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _shared_car_edit_service__WEBPACK_IMPORTED_MODULE_16__["CarEditService"]], { tag: [0, "tag"], items: [1, "items"], selectedValue: [2, "selectedValue"] }, { selectedValueChange: "selectedValueChange" }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](63, 0, null, null, 0, "Label", [["class", "car-list-odd"], ["text", "TRANSMISSION"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](64, 0, null, null, 3, "StackLayout", [["class", "car-list-even"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](65, 16777216, null, null, 2, "MyListSelector", [["tag", "transmission"]], null, [[null, "selectedValueChange"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("selectedValueChange" === en)) {
        var pd_0 = ((_co.car.transmission = $event) !== false);
        ad = (pd_0 && ad);
    } return ad; }, _my_list_selector_my_list_selector_component_ngfactory__WEBPACK_IMPORTED_MODULE_11__["View_MyListSelectorComponent_0"], _my_list_selector_my_list_selector_component_ngfactory__WEBPACK_IMPORTED_MODULE_11__["RenderType_MyListSelectorComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](512, null, nativescript_angular_directives_dialogs__WEBPACK_IMPORTED_MODULE_12__["ModalDialogService"], nativescript_angular_directives_dialogs__WEBPACK_IMPORTED_MODULE_12__["ModalDialogService"], [nativescript_angular_router_ns_location_strategy__WEBPACK_IMPORTED_MODULE_13__["NSLocationStrategy"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](67, 114688, null, 0, _my_list_selector_my_list_selector_component__WEBPACK_IMPORTED_MODULE_14__["MyListSelectorComponent"], [nativescript_angular_router_page_router_outlet__WEBPACK_IMPORTED_MODULE_15__["PageRoute"], nativescript_angular_directives_dialogs__WEBPACK_IMPORTED_MODULE_12__["ModalDialogService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _shared_car_edit_service__WEBPACK_IMPORTED_MODULE_16__["CarEditService"]], { tag: [0, "tag"], items: [1, "items"], selectedValue: [2, "selectedValue"] }, { selectedValueChange: "selectedValueChange" }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](68, 0, null, null, 11, "GridLayout", [["class", "car-list-odd"], ["columns", "*, auto"], ["rows", "*, 55"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](69, 0, null, null, 0, "Label", [["text", "LUGGAGE"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](70, 0, null, null, 3, "Label", [["class", "text-primary"], ["col", "1"], ["horizontalAlignment", "right"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](71, 0, null, null, 2, "FormattedString", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](72, 0, null, null, 0, "Span", [], [[8, "text", 0]], null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](73, 0, null, null, 0, "Span", [["text", " Bag(s)"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](74, 0, null, null, 5, "Slider", [["colSpan", "2"], ["maxValue", "5"], ["minValue", "0"], ["row", "1"]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "ngModelChange"], [null, "valueChange"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("valueChange" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 75).onChange($event.value) !== false);
        ad = (pd_0 && ad);
    } if (("ngModelChange" === en)) {
        var pd_1 = ((_co.luggageValue = $event) !== false);
        ad = (pd_1 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](75, 16384, null, 0, nativescript_angular_forms_value_accessors_number_value_accessor__WEBPACK_IMPORTED_MODULE_7__["NumberValueAccessor"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](1024, null, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NG_VALUE_ACCESSOR"], function (p0_0) { return [p0_0]; }, [nativescript_angular_forms_value_accessors_number_value_accessor__WEBPACK_IMPORTED_MODULE_7__["NumberValueAccessor"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](77, 671744, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgModel"], [[8, null], [8, null], [8, null], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NG_VALUE_ACCESSOR"]]], { model: [0, "model"] }, { update: "ngModelChange" }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControl"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgModel"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](79, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatus"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControl"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](80, 0, null, null, 0, "ActivityIndicator", [], [[8, "busy", 0]], null, null, null, null))], function (_ck, _v) { var _co = _v.component; var currVal_10 = ""; _ck(_v, 16, 0, currVal_10); var currVal_11 = _co.car.name; _ck(_v, 20, 0, currVal_11); var currVal_20 = _co.pricePerDay; _ck(_v, 33, 0, currVal_20); var currVal_29 = ""; _ck(_v, 39, 0, currVal_29); var currVal_30 = _co.carImageUrl; _ck(_v, 43, 0, currVal_30); var currVal_31 = !_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 43).valid; _ck(_v, 47, 0, currVal_31); var currVal_32 = "class"; var currVal_33 = _co.carClassOptions; var currVal_34 = _co.car.class; _ck(_v, 52, 0, currVal_32, currVal_33, currVal_34); var currVal_35 = "doors"; var currVal_36 = _co.carDoorOptions; var currVal_37 = _co.car.doors; _ck(_v, 57, 0, currVal_35, currVal_36, currVal_37); var currVal_38 = "seats"; var currVal_39 = _co.carSeatOptions; var currVal_40 = _co.car.seats; _ck(_v, 62, 0, currVal_38, currVal_39, currVal_40); var currVal_41 = "transmission"; var currVal_42 = _co.carTransmissionOptions; var currVal_43 = _co.car.transmission; _ck(_v, 67, 0, currVal_41, currVal_42, currVal_43); var currVal_52 = _co.luggageValue; _ck(_v, 77, 0, currVal_52); }, function (_ck, _v) { var _co = _v.component; var currVal_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 20).valid && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 43).valid); var currVal_1 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 20).valid && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 43).valid); _ck(_v, 10, 0, currVal_0, currVal_1); var currVal_2 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 16).required ? "" : null); var currVal_3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 22).ngClassUntouched; var currVal_4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 22).ngClassTouched; var currVal_5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 22).ngClassPristine; var currVal_6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 22).ngClassDirty; var currVal_7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 22).ngClassValid; var currVal_8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 22).ngClassInvalid; var currVal_9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 22).ngClassPending; _ck(_v, 15, 0, currVal_2, currVal_3, currVal_4, currVal_5, currVal_6, currVal_7, currVal_8, currVal_9); var currVal_12 = _co.pricePerDay; _ck(_v, 28, 0, currVal_12); var currVal_13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 35).ngClassUntouched; var currVal_14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 35).ngClassTouched; var currVal_15 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 35).ngClassPristine; var currVal_16 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 35).ngClassDirty; var currVal_17 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 35).ngClassValid; var currVal_18 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 35).ngClassInvalid; var currVal_19 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 35).ngClassPending; _ck(_v, 30, 0, currVal_13, currVal_14, currVal_15, currVal_16, currVal_17, currVal_18, currVal_19); var currVal_21 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 39).required ? "" : null); var currVal_22 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 45).ngClassUntouched; var currVal_23 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 45).ngClassTouched; var currVal_24 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 45).ngClassPristine; var currVal_25 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 45).ngClassDirty; var currVal_26 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 45).ngClassValid; var currVal_27 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 45).ngClassInvalid; var currVal_28 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 45).ngClassPending; _ck(_v, 38, 0, currVal_21, currVal_22, currVal_23, currVal_24, currVal_25, currVal_26, currVal_27, currVal_28); var currVal_44 = _co.luggageValue; _ck(_v, 72, 0, currVal_44); var currVal_45 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 79).ngClassUntouched; var currVal_46 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 79).ngClassTouched; var currVal_47 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 79).ngClassPristine; var currVal_48 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 79).ngClassDirty; var currVal_49 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 79).ngClassValid; var currVal_50 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 79).ngClassInvalid; var currVal_51 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 79).ngClassPending; _ck(_v, 74, 0, currVal_45, currVal_46, currVal_47, currVal_48, currVal_49, currVal_50, currVal_51); var currVal_53 = _co.isUpdating; _ck(_v, 80, 0, currVal_53); }); }
function View_CarDetailEditComponent_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "CarDetailEdit", [], null, null, null, View_CarDetailEditComponent_0, RenderType_CarDetailEditComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 114688, null, 0, _car_detail_edit_component__WEBPACK_IMPORTED_MODULE_17__["CarDetailEditComponent"], [_shared_car_service__WEBPACK_IMPORTED_MODULE_18__["CarService"], _shared_car_edit_service__WEBPACK_IMPORTED_MODULE_16__["CarEditService"], nativescript_angular_router_page_router_outlet__WEBPACK_IMPORTED_MODULE_15__["PageRoute"], nativescript_angular_router_router_extensions__WEBPACK_IMPORTED_MODULE_19__["RouterExtensions"]], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
var CarDetailEditComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("CarDetailEdit", _car_detail_edit_component__WEBPACK_IMPORTED_MODULE_17__["CarDetailEditComponent"], View_CarDetailEditComponent_Host_0, {}, {}, []);



/***/ }),

/***/ "./cars/car-detail-edit/car-detail-edit.component.scss.shim.ngstyle.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "styles", function() { return styles; });
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
var styles = [".car-list[_ngcontent-%COMP%]   .car-list-even[_ngcontent-%COMP%], .car-list[_ngcontent-%COMP%]   .car-list-odd[_ngcontent-%COMP%] {\n  padding: 10 15;\n  border-bottom-width: 1;\n  border-color: rgba(2, 39, 52, 0.2);\n}\n\n.car-list[_ngcontent-%COMP%]   .car-list-odd[_ngcontent-%COMP%] {\n  background-color: rgba(2, 39, 52, 0.1);\n  color: rgba(2, 39, 52, 0.5);\n}\n\n.car-list[_ngcontent-%COMP%]   .car-list-price[_ngcontent-%COMP%] {\n  width: 35;\n  text-align: right;\n}\n\n.car-list[_ngcontent-%COMP%]   TextField.ng-invalid[_ngcontent-%COMP%] {\n  placeholder-color: #ED473F;\n}\n\n.car-list[_ngcontent-%COMP%]   .ng-invalid-image[_ngcontent-%COMP%] {\n  color: #ED473F;\n}"];



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

/***/ "./cars/car-detail-edit/my-image-add-remove/my-image-add-remove.component.ngfactory.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_MyImageAddRemoveComponent", function() { return RenderType_MyImageAddRemoveComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_MyImageAddRemoveComponent_0", function() { return View_MyImageAddRemoveComponent_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_MyImageAddRemoveComponent_Host_0", function() { return View_MyImageAddRemoveComponent_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyImageAddRemoveComponentNgFactory", function() { return MyImageAddRemoveComponentNgFactory; });
/* harmony import */ var _my_image_add_remove_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./cars/car-detail-edit/my-image-add-remove/my-image-add-remove.component.scss.shim.ngstyle.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("../node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _my_image_add_remove_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./cars/car-detail-edit/my-image-add-remove/my-image-add-remove.component.ts");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 





var styles_MyImageAddRemoveComponent = [_my_image_add_remove_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];
var RenderType_MyImageAddRemoveComponent = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({ encapsulation: 0, styles: styles_MyImageAddRemoveComponent, data: {} });

function View_MyImageAddRemoveComponent_1(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "GridLayout", [["class", "thumb-remove"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 0, "Label", [["class", "fa"], ["horizontalAlignment", "center"], ["text", "\uF014"], ["verticalAlignment", "center"]], null, null, null, null, null))], null, null); }
function View_MyImageAddRemoveComponent_2(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "GridLayout", [["class", "thumb-add"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 0, "Label", [["class", "fa"], ["horizontalAlignment", "center"], ["text", "\uF030"], ["verticalAlignment", "center"]], null, null, null, null, null))], null, null); }
function View_MyImageAddRemoveComponent_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 4, "GridLayout", [["class", "thumb"], ["height", "80"], ["horizontalAlignment", "left"], ["width", "80"]], [[8, "backgroundImage", 0]], [[null, "tap"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("tap" === en)) {
        var pd_0 = (_co.onImageAddRemoveTap() !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_MyImageAddRemoveComponent_1)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_MyImageAddRemoveComponent_2)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](4, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_1 = _co.imageUrl; _ck(_v, 2, 0, currVal_1); var currVal_2 = !_co.imageUrl; _ck(_v, 4, 0, currVal_2); }, function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.imageUrl; _ck(_v, 0, 0, currVal_0); }); }
function View_MyImageAddRemoveComponent_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 2, "MyImageAddRemove", [], null, null, null, View_MyImageAddRemoveComponent_0, RenderType_MyImageAddRemoveComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](5120, null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NG_VALUE_ACCESSOR"], function (p0_0) { return [p0_0]; }, [_my_image_add_remove_component__WEBPACK_IMPORTED_MODULE_4__["MyImageAddRemoveComponent"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 49152, null, 0, _my_image_add_remove_component__WEBPACK_IMPORTED_MODULE_4__["MyImageAddRemoveComponent"], [], null, null)], null, null); }
var MyImageAddRemoveComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("MyImageAddRemove", _my_image_add_remove_component__WEBPACK_IMPORTED_MODULE_4__["MyImageAddRemoveComponent"], View_MyImageAddRemoveComponent_Host_0, {}, {}, []);



/***/ }),

/***/ "./cars/car-detail-edit/my-image-add-remove/my-image-add-remove.component.scss.shim.ngstyle.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "styles", function() { return styles; });
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
var styles = [".thumb[_ngcontent-%COMP%] {\n  background-size: cover;\n  background-repeat: no-repeat;\n  font-size: 25;\n  font-weight: bold;\n}\n\n.thumb[_ngcontent-%COMP%]   .thumb-add[_ngcontent-%COMP%] {\n  background-color: transparent;\n  color: rgba(2, 39, 52, 0.2);\n  border-radius: 3;\n  border-width: 1;\n  border-color: rgba(2, 39, 52, 0.2);\n}\n\n.thumb[_ngcontent-%COMP%]   .thumb-remove[_ngcontent-%COMP%] {\n  color: #FFFFFF;\n  background-color: rgba(2, 39, 52, 0.2);\n}"];



/***/ }),

/***/ "./cars/car-detail-edit/my-image-add-remove/my-image-add-remove.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyImageAddRemoveComponent", function() { return MyImageAddRemoveComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵ0", function() { return ɵ0; });
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
var ɵ0 = noop;
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
    Object.defineProperty(MyImageAddRemoveComponent, "imageTempFolder", {
        get: function () {
            return file_system__WEBPACK_IMPORTED_MODULE_2__["knownFolders"].temp().getFolder(tempImageFolderName);
        },
        enumerable: true,
        configurable: true
    });
    MyImageAddRemoveComponent.clearImageTempFolder = function () {
        MyImageAddRemoveComponent.imageTempFolder.clear();
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
        MyImageAddRemoveComponent.clearImageTempFolder();
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
            tempImagePath = file_system__WEBPACK_IMPORTED_MODULE_2__["path"].join(MyImageAddRemoveComponent.imageTempFolder.path, Date.now() + ".jpg");
            raisePropertyChange = source.saveToFile(tempImagePath, "jpeg");
        }
        if (raisePropertyChange) {
            this.imageUrl = tempImagePath;
        }
    };
    return MyImageAddRemoveComponent;
}());




/***/ }),

/***/ "./cars/car-detail-edit/my-list-selector/my-list-selector-modal-view.component.ngfactory.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_MyListSelectorModalViewComponent", function() { return RenderType_MyListSelectorModalViewComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_MyListSelectorModalViewComponent_0", function() { return View_MyListSelectorModalViewComponent_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_MyListSelectorModalViewComponent_Host_0", function() { return View_MyListSelectorModalViewComponent_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyListSelectorModalViewComponentNgFactory", function() { return MyListSelectorModalViewComponentNgFactory; });
/* harmony import */ var _my_list_selector_modal_view_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./cars/car-detail-edit/my-list-selector/my-list-selector-modal-view.component.scss.shim.ngstyle.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _node_modules_nativescript_ui_listview_angular_listview_directives_ngfactory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../node_modules/nativescript-ui-listview/angular/listview-directives.ngfactory.js");
/* harmony import */ var nativescript_ui_listview_angular_listview_directives__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("../node_modules/nativescript-ui-listview/angular/listview-directives.js");
/* harmony import */ var nativescript_ui_listview_angular_listview_directives__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(nativescript_ui_listview_angular_listview_directives__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _my_list_selector_modal_view_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./cars/car-detail-edit/my-list-selector/my-list-selector-modal-view.component.ts");
/* harmony import */ var nativescript_angular_directives_dialogs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("../node_modules/nativescript-angular/directives/dialogs.js");
/* harmony import */ var nativescript_angular_directives_dialogs__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(nativescript_angular_directives_dialogs__WEBPACK_IMPORTED_MODULE_5__);
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 






var styles_MyListSelectorModalViewComponent = [_my_list_selector_modal_view_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];
var RenderType_MyListSelectorModalViewComponent = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({ encapsulation: 0, styles: styles_MyListSelectorModalViewComponent, data: {} });

function View_MyListSelectorModalViewComponent_1(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 7, "GridLayout", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 2, "GridLayout", [[":android:visibility", "collapsed"], ["class", "list-modal-item"], ["columns", "*,auto"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, null, 0, "Label", [], [[8, "text", 0]], null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](3, 0, null, null, 0, "Label", [["class", "fa list-modal-view-check"], ["col", "1"], ["text", "\uF00C"]], [[8, "visibility", 0]], null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](4, 0, null, null, 3, "GridLayout", [[":ios:visibility", "collapsed"], ["class", "list-modal-item"], ["columns", "auto,*"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](5, 0, null, null, 0, "Label", [["class", "fa list-modal-view-icon"], ["text", "\uF10C"], ["verticalAlignment", "center"]], [[8, "visibility", 0]], null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](6, 0, null, null, 0, "Label", [["class", "fa list-modal-view-icon selected"], ["text", "\uF192"], ["verticalAlignment", "center"]], [[8, "visibility", 0]], null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](7, 0, null, null, 0, "Label", [["col", "1"]], [[8, "text", 0]], null, null, null, null))], null, function (_ck, _v) { var currVal_0 = _v.context.item.value; _ck(_v, 2, 0, currVal_0); var currVal_1 = (_v.context.item.isSelected ? "visible" : "collapsed"); _ck(_v, 3, 0, currVal_1); var currVal_2 = (_v.context.item.isSelected ? "collapsed" : "visible"); _ck(_v, 5, 0, currVal_2); var currVal_3 = (_v.context.item.isSelected ? "visible" : "collapsed"); _ck(_v, 6, 0, currVal_3); var currVal_4 = _v.context.item.value; _ck(_v, 7, 0, currVal_4); }); }
function View_MyListSelectorModalViewComponent_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 7, "GridLayout", [["class", "list-modal-view"], ["rows", "auto, *, auto"], ["verticalAlignment", "top"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 0, "Label", [["class", "h3 list-modal-header"]], [[8, "text", 0]], null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, null, 4, "RadListView", [["class", "list-modal-list"], ["row", "1"], ["selectionBehavior", "Press"]], null, [[null, "itemSelected"], [null, "itemLoading"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("itemLoading" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 3).onItemLoading($event) !== false);
        ad = (pd_0 && ad);
    } if (("itemSelected" === en)) {
        var pd_1 = (_co.onItemSelected($event) !== false);
        ad = (pd_1 && ad);
    } return ad; }, _node_modules_nativescript_ui_listview_angular_listview_directives_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_RadListViewComponent_0"], _node_modules_nativescript_ui_listview_angular_listview_directives_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_RadListViewComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](3, 1359872, null, 1, nativescript_ui_listview_angular_listview_directives__WEBPACK_IMPORTED_MODULE_3__["RadListViewComponent"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"]], { items: [0, "items"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](335544320, 1, { itemTemplateQuery: 0 }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](0, [[1, 2]], null, 1, null, View_MyListSelectorModalViewComponent_1)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](6, 81920, null, 0, nativescript_ui_listview_angular_listview_directives__WEBPACK_IMPORTED_MODULE_3__["TKListViewItemDirective"], [nativescript_ui_listview_angular_listview_directives__WEBPACK_IMPORTED_MODULE_3__["RadListViewComponent"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](7, 0, null, null, 0, "Button", [[":ios:visibility", "collapsed"], ["class", "btn btn-outline"], ["horizontalAlignment", "right"], ["row", "3"], ["text", "CANCEL"]], null, [[null, "tap"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("tap" === en)) {
        var pd_0 = (_co.onCancelButtonTap() !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null))], function (_ck, _v) { var _co = _v.component; var currVal_1 = _co.items; _ck(_v, 3, 0, currVal_1); _ck(_v, 6, 0); }, function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.title; _ck(_v, 1, 0, currVal_0); }); }
function View_MyListSelectorModalViewComponent_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "MyListSelectorModalView", [], null, null, null, View_MyListSelectorModalViewComponent_0, RenderType_MyListSelectorModalViewComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 49152, null, 0, _my_list_selector_modal_view_component__WEBPACK_IMPORTED_MODULE_4__["MyListSelectorModalViewComponent"], [nativescript_angular_directives_dialogs__WEBPACK_IMPORTED_MODULE_5__["ModalDialogParams"]], null, null)], null, null); }
var MyListSelectorModalViewComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("MyListSelectorModalView", _my_list_selector_modal_view_component__WEBPACK_IMPORTED_MODULE_4__["MyListSelectorModalViewComponent"], View_MyListSelectorModalViewComponent_Host_0, {}, {}, []);



/***/ }),

/***/ "./cars/car-detail-edit/my-list-selector/my-list-selector-modal-view.component.scss.shim.ngstyle.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "styles", function() { return styles; });
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
var styles = [".list-modal-view[_ngcontent-%COMP%] {\n  color: #022734;\n  background-color: rgba(2, 39, 52, 0.1);\n}\n\n.list-modal-view[_ngcontent-%COMP%]   .list-modal-item[_ngcontent-%COMP%] {\n  vertical-align: center;\n  margin-bottom: 10;\n}\n\n.list-modal-view[_ngcontent-%COMP%]   .list-modal-header[_ngcontent-%COMP%] {\n  padding: 15;\n}\n\n.list-modal-view[_ngcontent-%COMP%]   .list-modal-item[_ngcontent-%COMP%] {\n  padding: 0 15 10 15;\n}\n\n.list-modal-view[_ngcontent-%COMP%]   .list-modal-view-icon[_ngcontent-%COMP%] {\n  margin-right: 15;\n  margin-top: 2;\n}\n\n.list-modal-view[_ngcontent-%COMP%]   .list-modal-view-icon.selected[_ngcontent-%COMP%] {\n  color: #3A53FF;\n}\n\n.list-modal-view[_ngcontent-%COMP%]   .btn.btn-outline[_ngcontent-%COMP%] {\n  border-color: transparent;\n  font-size: 12;\n  padding-right: 0;\n  text-align: right;\n}"];



/***/ }),

/***/ "./cars/car-detail-edit/my-list-selector/my-list-selector-modal-view.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyListSelectorModalViewComponent", function() { return MyListSelectorModalViewComponent; });
/* harmony import */ var nativescript_angular_modal_dialog__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/nativescript-angular/modal-dialog.js");
/* harmony import */ var nativescript_angular_modal_dialog__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(nativescript_angular_modal_dialog__WEBPACK_IMPORTED_MODULE_0__);

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
    return MyListSelectorModalViewComponent;
}());



/***/ }),

/***/ "./cars/car-detail-edit/my-list-selector/my-list-selector.component.ngfactory.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_MyListSelectorComponent", function() { return RenderType_MyListSelectorComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_MyListSelectorComponent_0", function() { return View_MyListSelectorComponent_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_MyListSelectorComponent_Host_0", function() { return View_MyListSelectorComponent_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyListSelectorComponentNgFactory", function() { return MyListSelectorComponentNgFactory; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var nativescript_angular_directives_dialogs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../node_modules/nativescript-angular/directives/dialogs.js");
/* harmony import */ var nativescript_angular_directives_dialogs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(nativescript_angular_directives_dialogs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var nativescript_angular_router_ns_location_strategy__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../node_modules/nativescript-angular/router/ns-location-strategy.js");
/* harmony import */ var nativescript_angular_router_ns_location_strategy__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(nativescript_angular_router_ns_location_strategy__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _my_list_selector_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./cars/car-detail-edit/my-list-selector/my-list-selector.component.ts");
/* harmony import */ var nativescript_angular_router_page_router_outlet__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("../node_modules/nativescript-angular/router/page-router-outlet.js");
/* harmony import */ var nativescript_angular_router_page_router_outlet__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(nativescript_angular_router_page_router_outlet__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _shared_car_edit_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./cars/shared/car-edit.service.ts");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 






var styles_MyListSelectorComponent = [];
var RenderType_MyListSelectorComponent = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵcrt"]({ encapsulation: 2, styles: styles_MyListSelectorComponent, data: {} });

function View_MyListSelectorComponent_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 2, "GridLayout", [["columns", "*, auto"]], null, [[null, "tap"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("tap" === en)) {
        var pd_0 = (_co.onSelectorTap() !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](1, 0, null, null, 0, "Label", [["class", "text"]], [[8, "text", 0]], null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](2, 0, null, null, 0, "Label", [["class", "fa text-secondary"], ["col", "1"], ["horizontalAlignment", "center"], ["text", "\uF054"], ["verticalAlignment", "center"]], null, null, null, null, null))], null, function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.selectedValue; _ck(_v, 1, 0, currVal_0); }); }
function View_MyListSelectorComponent_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 16777216, null, null, 2, "MyListSelector", [], null, null, null, View_MyListSelectorComponent_0, RenderType_MyListSelectorComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵprd"](512, null, nativescript_angular_directives_dialogs__WEBPACK_IMPORTED_MODULE_1__["ModalDialogService"], nativescript_angular_directives_dialogs__WEBPACK_IMPORTED_MODULE_1__["ModalDialogService"], [nativescript_angular_router_ns_location_strategy__WEBPACK_IMPORTED_MODULE_2__["NSLocationStrategy"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](2, 114688, null, 0, _my_list_selector_component__WEBPACK_IMPORTED_MODULE_3__["MyListSelectorComponent"], [nativescript_angular_router_page_router_outlet__WEBPACK_IMPORTED_MODULE_4__["PageRoute"], nativescript_angular_directives_dialogs__WEBPACK_IMPORTED_MODULE_1__["ModalDialogService"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _shared_car_edit_service__WEBPACK_IMPORTED_MODULE_5__["CarEditService"]], null, null)], function (_ck, _v) { _ck(_v, 2, 0); }, null); }
var MyListSelectorComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵccf"]("MyListSelector", _my_list_selector_component__WEBPACK_IMPORTED_MODULE_3__["MyListSelectorComponent"], View_MyListSelectorComponent_Host_0, { tag: "tag", items: "items", selectedValue: "selectedValue" }, { selectedValueChange: "selectedValueChange" }, []);



/***/ }),

/***/ "./cars/car-detail-edit/my-list-selector/my-list-selector.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyListSelectorComponent", function() { return MyListSelectorComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵ0", function() { return ɵ0; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var nativescript_angular_modal_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../node_modules/nativescript-angular/modal-dialog.js");
/* harmony import */ var nativescript_angular_modal_dialog__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(nativescript_angular_modal_dialog__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var nativescript_angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../node_modules/nativescript-angular/router/index.js");
/* harmony import */ var nativescript_angular_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(nativescript_angular_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("../node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _shared_car_edit_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./cars/shared/car-edit.service.ts");
/* harmony import */ var _my_list_selector_modal_view_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./cars/car-detail-edit/my-list-selector/my-list-selector-modal-view.component.ts");






var capitalizeFirstLetter = function (s) { return s.charAt(0).toUpperCase() + s.slice(1); };
var ɵ0 = capitalizeFirstLetter;
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
    return MyListSelectorComponent;
}());




/***/ }),

/***/ "./cars/car-detail/car-detail.component.ngfactory.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_CarDetailComponent", function() { return RenderType_CarDetailComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_CarDetailComponent_0", function() { return View_CarDetailComponent_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_CarDetailComponent_Host_0", function() { return View_CarDetailComponent_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CarDetailComponentNgFactory", function() { return CarDetailComponentNgFactory; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _node_modules_nativescript_angular_directives_action_bar_ngfactory__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../node_modules/nativescript-angular/directives/action-bar.ngfactory.js");
/* harmony import */ var nativescript_angular_directives_action_bar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../node_modules/nativescript-angular/directives/action-bar.js");
/* harmony import */ var nativescript_angular_directives_action_bar__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(nativescript_angular_directives_action_bar__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var tns_core_modules_ui_page_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("../node_modules/tns-core-modules/ui/page/page.js");
/* harmony import */ var tns_core_modules_ui_page_page__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(tns_core_modules_ui_page_page__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _car_detail_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./cars/car-detail/car-detail.component.ts");
/* harmony import */ var _shared_car_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./cars/shared/car.service.ts");
/* harmony import */ var nativescript_angular_router_page_router_outlet__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("../node_modules/nativescript-angular/router/page-router-outlet.js");
/* harmony import */ var nativescript_angular_router_page_router_outlet__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(nativescript_angular_router_page_router_outlet__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var nativescript_angular_router_router_extensions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("../node_modules/nativescript-angular/router/router-extensions.js");
/* harmony import */ var nativescript_angular_router_router_extensions__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(nativescript_angular_router_router_extensions__WEBPACK_IMPORTED_MODULE_7__);
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 








var styles_CarDetailComponent = [];
var RenderType_CarDetailComponent = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵcrt"]({ encapsulation: 2, styles: styles_CarDetailComponent, data: {} });

function View_CarDetailComponent_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 7, "ActionBar", [["class", "action-bar"]], null, null, null, _node_modules_nativescript_angular_directives_action_bar_ngfactory__WEBPACK_IMPORTED_MODULE_1__["View_ActionBarComponent_0"], _node_modules_nativescript_angular_directives_action_bar_ngfactory__WEBPACK_IMPORTED_MODULE_1__["RenderType_ActionBarComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](1, 49152, null, 0, nativescript_angular_directives_action_bar__WEBPACK_IMPORTED_MODULE_2__["ActionBarComponent"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], tns_core_modules_ui_page_page__WEBPACK_IMPORTED_MODULE_3__["Page"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](2, 0, null, 0, 1, "NavigationButton", [["android.systemIcon", "ic_menu_back"]], null, [[null, "tap"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("tap" === en)) {
        var pd_0 = (_co.onBackButtonTap() !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](3, 147456, null, 0, nativescript_angular_directives_action_bar__WEBPACK_IMPORTED_MODULE_2__["NavigationButtonDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], [2, nativescript_angular_directives_action_bar__WEBPACK_IMPORTED_MODULE_2__["ActionBarScope"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](4, 0, null, 0, 0, "Label", [["class", "action-bar-title"], ["horizontalAlignment", "center"]], [[8, "text", 0]], null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](5, 0, null, 0, 2, "ActionItem", [["android.position", "right"], ["ios.position", "right"]], null, [[null, "tap"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("tap" === en)) {
        var pd_0 = (_co.onEditButtonTap() !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](6, 147456, null, 0, nativescript_angular_directives_action_bar__WEBPACK_IMPORTED_MODULE_2__["ActionItemDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], [2, nativescript_angular_directives_action_bar__WEBPACK_IMPORTED_MODULE_2__["ActionBarScope"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](7, 0, null, null, 0, "Label", [["class", "action-item"], ["text", "Edit"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](8, 0, null, null, 21, "GridLayout", [["class", "page page-content"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](9, 0, null, null, 20, "ScrollView", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](10, 0, null, null, 19, "GridLayout", [["rows", "auto, auto, auto"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](11, 0, null, null, 0, "Image", [["class", "m-b-15"], ["height", "200"], ["stretch", "aspectFill"]], [[8, "src", 0]], null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](12, 0, null, null, 0, "StackLayout", [["class", "hr-light m-t-15 m-b-15"], ["row", "1"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](13, 0, null, null, 16, "GridLayout", [["columns", "auto, auto"], ["row", "2"], ["rows", "*,*,*,*,*,*"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](14, 0, null, null, 0, "Label", [["class", "p-l-15 p-b-10 m-r-20 text-secondary"], ["text", "Price"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](15, 0, null, null, 4, "Label", [["class", "text p-b-10"], ["col", "1"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](16, 0, null, null, 3, "FormattedString", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](17, 0, null, null, 0, "Span", [["text", "\u20AC"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](18, 0, null, null, 0, "Span", [], [[8, "text", 0]], null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](19, 0, null, null, 0, "Span", [["text", "/day"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](20, 0, null, null, 0, "Label", [["class", "p-l-15 p-b-10 m-r-20 text-secondary"], ["row", "1"], ["text", "Class"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](21, 0, null, null, 0, "Label", [["class", "text p-b-10"], ["col", "1"], ["row", "1"]], [[8, "text", 0]], null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](22, 0, null, null, 0, "Label", [["class", "p-l-15 p-b-10 m-r-20 text-secondary"], ["row", "2"], ["text", "Doors"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](23, 0, null, null, 0, "Label", [["class", "text p-b-10"], ["col", "1"], ["row", "2"]], [[8, "text", 0]], null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](24, 0, null, null, 0, "Label", [["class", "p-l-15 p-b-10 m-r-20 text-secondary"], ["row", "3"], ["text", "Seats"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](25, 0, null, null, 0, "Label", [["class", "text p-b-10"], ["col", "1"], ["row", "3"]], [[8, "text", 0]], null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](26, 0, null, null, 0, "Label", [["class", "p-l-15 m-r-20 p-b-10 text-secondary"], ["row", "4"], ["text", "Transmission"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](27, 0, null, null, 0, "Label", [["class", "text p-b-10"], ["col", "1"], ["row", "4"]], [[8, "text", 0]], null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](28, 0, null, null, 0, "Label", [["class", "p-l-15 p-b-10 m-r-20 text-secondary"], ["row", "5"], ["text", "Luggage"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](29, 0, null, null, 0, "Label", [["class", "text p-b-10"], ["col", "1"], ["row", "5"]], [[8, "text", 0]], null, null, null, null))], null, function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.car.name; _ck(_v, 4, 0, currVal_0); var currVal_1 = _co.car.imageUrl; _ck(_v, 11, 0, currVal_1); var currVal_2 = _co.car.price; _ck(_v, 18, 0, currVal_2); var currVal_3 = _co.car.class; _ck(_v, 21, 0, currVal_3); var currVal_4 = _co.car.doors; _ck(_v, 23, 0, currVal_4); var currVal_5 = _co.car.seats; _ck(_v, 25, 0, currVal_5); var currVal_6 = _co.car.transmission; _ck(_v, 27, 0, currVal_6); var currVal_7 = _co.car.luggage; _ck(_v, 29, 0, currVal_7); }); }
function View_CarDetailComponent_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 1, "CarDetail", [], null, null, null, View_CarDetailComponent_0, RenderType_CarDetailComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](1, 114688, null, 0, _car_detail_component__WEBPACK_IMPORTED_MODULE_4__["CarDetailComponent"], [_shared_car_service__WEBPACK_IMPORTED_MODULE_5__["CarService"], nativescript_angular_router_page_router_outlet__WEBPACK_IMPORTED_MODULE_6__["PageRoute"], nativescript_angular_router_router_extensions__WEBPACK_IMPORTED_MODULE_7__["RouterExtensions"]], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
var CarDetailComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵccf"]("CarDetail", _car_detail_component__WEBPACK_IMPORTED_MODULE_4__["CarDetailComponent"], View_CarDetailComponent_Host_0, {}, {}, []);



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
    return CarDetailComponent;
}());



/***/ }),

/***/ "./cars/car-list.component.ngfactory.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_CarListComponent", function() { return RenderType_CarListComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_CarListComponent_0", function() { return View_CarListComponent_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_CarListComponent_Host_0", function() { return View_CarListComponent_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CarListComponentNgFactory", function() { return CarListComponentNgFactory; });
/* harmony import */ var _car_list_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./cars/car-list.component.scss.shim.ngstyle.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _node_modules_nativescript_angular_directives_action_bar_ngfactory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../node_modules/nativescript-angular/directives/action-bar.ngfactory.js");
/* harmony import */ var nativescript_angular_directives_action_bar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("../node_modules/nativescript-angular/directives/action-bar.js");
/* harmony import */ var nativescript_angular_directives_action_bar__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(nativescript_angular_directives_action_bar__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var tns_core_modules_ui_page_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("../node_modules/tns-core-modules/ui/page/page.js");
/* harmony import */ var tns_core_modules_ui_page_page__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(tns_core_modules_ui_page_page__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_nativescript_ui_listview_angular_listview_directives_ngfactory__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("../node_modules/nativescript-ui-listview/angular/listview-directives.ngfactory.js");
/* harmony import */ var nativescript_ui_listview_angular_listview_directives__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("../node_modules/nativescript-ui-listview/angular/listview-directives.js");
/* harmony import */ var nativescript_ui_listview_angular_listview_directives__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(nativescript_ui_listview_angular_listview_directives__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _car_list_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./cars/car-list.component.ts");
/* harmony import */ var _shared_car_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./cars/shared/car.service.ts");
/* harmony import */ var nativescript_angular_router_router_extensions__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("../node_modules/nativescript-angular/router/router-extensions.js");
/* harmony import */ var nativescript_angular_router_router_extensions__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(nativescript_angular_router_router_extensions__WEBPACK_IMPORTED_MODULE_9__);
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 










var styles_CarListComponent = [_car_list_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];
var RenderType_CarListComponent = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({ encapsulation: 0, styles: styles_CarListComponent, data: {} });

function View_CarListComponent_1(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 23, "StackLayout", [["class", "list-group-item"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 22, "GridLayout", [["class", "list-group-item-content"], ["columns", "*, *"], ["rows", "*, *, *"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, null, 0, "Label", [["class", "text-primary font-weight-bold"]], [[8, "text", 0]], null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](3, 0, null, null, 4, "Label", [["class", "list-group-item-text m-r-5"], ["col", "1"], ["horizontalAlignment", "right"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](4, 0, null, null, 3, "FormattedString", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](5, 0, null, null, 0, "Span", [["text", "\u20AC"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](6, 0, null, null, 0, "Span", [], [[8, "text", 0]], null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](7, 0, null, null, 0, "Span", [["text", "/day"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](8, 0, null, null, 0, "StackLayout", [["class", "hr-light m-t-5 m-b-5"], ["colSpan", "2"], ["row", "1"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](9, 0, null, null, 0, "Image", [["class", "m-r-20"], ["height", "120"], ["row", "2"], ["stretch", "aspectFill"]], [[8, "src", 0]], null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](10, 0, null, null, 13, "StackLayout", [["class", "list-group-item-text"], ["col", "1"], ["row", "2"], ["verticalAlignment", "center"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](11, 0, null, null, 3, "Label", [["class", "p-b-10"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](12, 0, null, null, 2, "FormattedString", [[":ios:fontFamily", "system"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](13, 0, null, null, 0, "Span", [["class", "fa text-primary"], ["text", "\uF1B9   "]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](14, 0, null, null, 0, "Span", [], [[8, "text", 0]], null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](15, 0, null, null, 4, "Label", [["class", "p-b-10"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](16, 0, null, null, 3, "FormattedString", [[":ios:fontFamily", "system"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](17, 0, null, null, 0, "Span", [["class", "fa text-primary"], ["text", "\uF085   "]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](18, 0, null, null, 0, "Span", [], [[8, "text", 0]], null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](19, 0, null, null, 0, "Span", [["text", " Transmission"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](20, 0, null, null, 3, "Label", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](21, 0, null, null, 2, "FormattedString", [[":ios:fontFamily", "system"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](22, 0, null, null, 0, "Span", [["class", "fa text-primary"], ["text", "\uF2DC   "]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](23, 0, null, null, 0, "Span", [], [[8, "text", 0]], null, null, null, null))], null, function (_ck, _v) { var currVal_0 = _v.context.item.name; _ck(_v, 2, 0, currVal_0); var currVal_1 = _v.context.item.price; _ck(_v, 6, 0, currVal_1); var currVal_2 = _v.context.item.imageUrl; _ck(_v, 9, 0, currVal_2); var currVal_3 = _v.context.item.class; _ck(_v, 14, 0, currVal_3); var currVal_4 = _v.context.item.transmission; _ck(_v, 18, 0, currVal_4); var currVal_5 = (_v.context.item.hasAC ? "Yes" : "No"); _ck(_v, 23, 0, currVal_5); }); }
function View_CarListComponent_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 4, "ActionBar", [["class", "action-bar"]], null, null, null, _node_modules_nativescript_angular_directives_action_bar_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_ActionBarComponent_0"], _node_modules_nativescript_angular_directives_action_bar_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_ActionBarComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 49152, null, 0, nativescript_angular_directives_action_bar__WEBPACK_IMPORTED_MODULE_3__["ActionBarComponent"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], tns_core_modules_ui_page_page__WEBPACK_IMPORTED_MODULE_4__["Page"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, 0, 1, "NavigationButton", [[":ios:visibility", "collapsed"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](3, 147456, null, 0, nativescript_angular_directives_action_bar__WEBPACK_IMPORTED_MODULE_3__["NavigationButtonDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], [2, nativescript_angular_directives_action_bar__WEBPACK_IMPORTED_MODULE_3__["ActionBarScope"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](4, 0, null, 0, 0, "Label", [["class", "action-bar-title"], ["horizontalAlignment", "center"], ["text", "Browse"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](5, 0, null, null, 6, "GridLayout", [["class", "page page-content"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](6, 0, null, null, 4, "RadListView", [["class", "list-group"]], null, [[null, "itemTap"], [null, "itemLoading"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("itemLoading" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 7).onItemLoading($event) !== false);
        ad = (pd_0 && ad);
    } if (("itemTap" === en)) {
        var pd_1 = (_co.onCarItemTap($event) !== false);
        ad = (pd_1 && ad);
    } return ad; }, _node_modules_nativescript_ui_listview_angular_listview_directives_ngfactory__WEBPACK_IMPORTED_MODULE_5__["View_RadListViewComponent_0"], _node_modules_nativescript_ui_listview_angular_listview_directives_ngfactory__WEBPACK_IMPORTED_MODULE_5__["RenderType_RadListViewComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](7, 1359872, null, 1, nativescript_ui_listview_angular_listview_directives__WEBPACK_IMPORTED_MODULE_6__["RadListViewComponent"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"]], { items: [0, "items"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](335544320, 1, { itemTemplateQuery: 0 }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](0, [[1, 2]], null, 1, null, View_CarListComponent_1)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](10, 81920, null, 0, nativescript_ui_listview_angular_listview_directives__WEBPACK_IMPORTED_MODULE_6__["TKListViewItemDirective"], [nativescript_ui_listview_angular_listview_directives__WEBPACK_IMPORTED_MODULE_6__["RadListViewComponent"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](11, 0, null, null, 0, "ActivityIndicator", [], [[8, "busy", 0]], null, null, null, null))], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.cars; _ck(_v, 7, 0, currVal_0); _ck(_v, 10, 0); }, function (_ck, _v) { var _co = _v.component; var currVal_1 = _co.isLoading; _ck(_v, 11, 0, currVal_1); }); }
function View_CarListComponent_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "CarsList", [], null, null, null, View_CarListComponent_0, RenderType_CarListComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 114688, null, 0, _car_list_component__WEBPACK_IMPORTED_MODULE_7__["CarListComponent"], [_shared_car_service__WEBPACK_IMPORTED_MODULE_8__["CarService"], nativescript_angular_router_router_extensions__WEBPACK_IMPORTED_MODULE_9__["RouterExtensions"]], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
var CarListComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("CarsList", _car_list_component__WEBPACK_IMPORTED_MODULE_7__["CarListComponent"], View_CarListComponent_Host_0, {}, {}, []);



/***/ }),

/***/ "./cars/car-list.component.scss.shim.ngstyle.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "styles", function() { return styles; });
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
var styles = [".list-group[_ngcontent-%COMP%]   .list-group-item[_ngcontent-%COMP%] {\n  padding: 0 0 8 0;\n  background-color: rgba(2, 39, 52, 0.1);\n}\n\n.list-group[_ngcontent-%COMP%]   .list-group-item[_ngcontent-%COMP%]   .list-group-item-content[_ngcontent-%COMP%] {\n  padding: 8 15 4 15;\n  background-color: #FFFFFF;\n}\n\n.list-group[_ngcontent-%COMP%]   .list-group-item[_ngcontent-%COMP%]   .fa[_ngcontent-%COMP%] {\n  color: #3A53FF;\n}"];



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
    return CarListComponent;
}());



/***/ }),

/***/ "./cars/cars-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CarsRoutingModule", function() { return CarsRoutingModule; });
/* harmony import */ var _car_detail_edit_car_detail_edit_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./cars/car-detail-edit/car-detail-edit.component.ts");
/* harmony import */ var _car_detail_car_detail_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./cars/car-detail/car-detail.component.ts");
/* harmony import */ var _car_list_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./cars/car-list.component.ts");



var routes = [
    { path: "", component: _car_list_component__WEBPACK_IMPORTED_MODULE_2__["CarListComponent"] },
    { path: "car-detail/:id", component: _car_detail_car_detail_component__WEBPACK_IMPORTED_MODULE_1__["CarDetailComponent"] },
    { path: "car-detail-edit/:id", component: _car_detail_edit_car_detail_edit_component__WEBPACK_IMPORTED_MODULE_0__["CarDetailEditComponent"] }
];
var CarsRoutingModule = /** @class */ (function () {
    function CarsRoutingModule() {
    }
    return CarsRoutingModule;
}());



/***/ }),

/***/ "./cars/cars.module.ngfactory.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CarsModuleNgFactory", function() { return CarsModuleNgFactory; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _cars_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./cars/cars.module.ts");
/* harmony import */ var _node_modules_angular_router_router_ngfactory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../node_modules/@angular/router/router.ngfactory.js");
/* harmony import */ var _car_list_component_ngfactory__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./cars/car-list.component.ngfactory.js");
/* harmony import */ var _car_detail_car_detail_component_ngfactory__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./cars/car-detail/car-detail.component.ngfactory.js");
/* harmony import */ var _car_detail_edit_car_detail_edit_component_ngfactory__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./cars/car-detail-edit/car-detail-edit.component.ngfactory.js");
/* harmony import */ var _car_detail_edit_my_list_selector_my_list_selector_modal_view_component_ngfactory__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./cars/car-detail-edit/my-list-selector/my-list-selector-modal-view.component.ngfactory.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("../node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var nativescript_angular_platform_providers__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("../node_modules/nativescript-angular/platform-providers.js");
/* harmony import */ var nativescript_angular_platform_providers__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(nativescript_angular_platform_providers__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var nativescript_angular_router_ns_location_strategy__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("../node_modules/nativescript-angular/router/ns-location-strategy.js");
/* harmony import */ var nativescript_angular_router_ns_location_strategy__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(nativescript_angular_router_ns_location_strategy__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var nativescript_angular_router_router_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("../node_modules/nativescript-angular/router/router.module.js");
/* harmony import */ var nativescript_angular_router_router_module__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(nativescript_angular_router_router_module__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var nativescript_angular_directives_dialogs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("../node_modules/nativescript-angular/directives/dialogs.js");
/* harmony import */ var nativescript_angular_directives_dialogs__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(nativescript_angular_directives_dialogs__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var tns_core_modules_ui_frame_frame__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("../node_modules/tns-core-modules/ui/frame/frame.js");
/* harmony import */ var tns_core_modules_ui_frame_frame__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(tns_core_modules_ui_frame_frame__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var tns_core_modules_ui_page_page__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("../node_modules/tns-core-modules/ui/page/page.js");
/* harmony import */ var tns_core_modules_ui_page_page__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(tns_core_modules_ui_page_page__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var nativescript_angular_router_ns_platform_location__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__("../node_modules/nativescript-angular/router/ns-platform-location.js");
/* harmony import */ var nativescript_angular_router_ns_platform_location__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(nativescript_angular_router_ns_platform_location__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var nativescript_angular_router_router_extensions__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__("../node_modules/nativescript-angular/router/router-extensions.js");
/* harmony import */ var nativescript_angular_router_router_extensions__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(nativescript_angular_router_router_extensions__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__("../node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var nativescript_angular_router_ns_route_reuse_strategy__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__("../node_modules/nativescript-angular/router/ns-route-reuse-strategy.js");
/* harmony import */ var nativescript_angular_router_ns_route_reuse_strategy__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(nativescript_angular_router_ns_route_reuse_strategy__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__("../node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _shared_car_service__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__("./cars/shared/car.service.ts");
/* harmony import */ var _shared_car_edit_service__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__("./cars/shared/car-edit.service.ts");
/* harmony import */ var nativescript_angular_common__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__("../node_modules/nativescript-angular/common.js");
/* harmony import */ var nativescript_angular_common__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(nativescript_angular_common__WEBPACK_IMPORTED_MODULE_21__);
/* harmony import */ var _cars_routing_module__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__("./cars/cars-routing.module.ts");
/* harmony import */ var nativescript_angular_forms_forms_module__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__("../node_modules/nativescript-angular/forms/forms.module.js");
/* harmony import */ var nativescript_angular_forms_forms_module__WEBPACK_IMPORTED_MODULE_23___default = /*#__PURE__*/__webpack_require__.n(nativescript_angular_forms_forms_module__WEBPACK_IMPORTED_MODULE_23__);
/* harmony import */ var nativescript_ui_listview_angular_listview_directives__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__("../node_modules/nativescript-ui-listview/angular/listview-directives.js");
/* harmony import */ var nativescript_ui_listview_angular_listview_directives__WEBPACK_IMPORTED_MODULE_24___default = /*#__PURE__*/__webpack_require__.n(nativescript_ui_listview_angular_listview_directives__WEBPACK_IMPORTED_MODULE_24__);
/* harmony import */ var _car_list_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__("./cars/car-list.component.ts");
/* harmony import */ var _car_detail_car_detail_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__("./cars/car-detail/car-detail.component.ts");
/* harmony import */ var _car_detail_edit_car_detail_edit_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__("./cars/car-detail-edit/car-detail-edit.component.ts");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 




























var CarsModuleNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵcmf"](_cars_module__WEBPACK_IMPORTED_MODULE_1__["CarsModule"], [], function (_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmod"]([_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](512, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵCodegenComponentFactoryResolver"], [[8, [_node_modules_angular_router_router_ngfactory__WEBPACK_IMPORTED_MODULE_2__["ɵEmptyOutletComponentNgFactory"], _car_list_component_ngfactory__WEBPACK_IMPORTED_MODULE_3__["CarListComponentNgFactory"], _car_detail_car_detail_component_ngfactory__WEBPACK_IMPORTED_MODULE_4__["CarDetailComponentNgFactory"], _car_detail_edit_car_detail_edit_component_ngfactory__WEBPACK_IMPORTED_MODULE_5__["CarDetailEditComponentNgFactory"], _car_detail_edit_my_list_selector_my_list_selector_modal_view_component_ngfactory__WEBPACK_IMPORTED_MODULE_6__["MyListSelectorModalViewComponentNgFactory"]]], [3, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"]], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModuleRef"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgLocalization"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgLocaleLocalization"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["LOCALE_ID"], [2, _angular_common__WEBPACK_IMPORTED_MODULE_7__["ɵangular_packages_common_common_a"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, nativescript_angular_platform_providers__WEBPACK_IMPORTED_MODULE_8__["FrameService"], nativescript_angular_platform_providers__WEBPACK_IMPORTED_MODULE_8__["FrameService"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, nativescript_angular_router_ns_location_strategy__WEBPACK_IMPORTED_MODULE_9__["NSLocationStrategy"], nativescript_angular_router_router_module__WEBPACK_IMPORTED_MODULE_10__["provideLocationStrategy"], [[3, nativescript_angular_router_ns_location_strategy__WEBPACK_IMPORTED_MODULE_9__["NSLocationStrategy"]], nativescript_angular_platform_providers__WEBPACK_IMPORTED_MODULE_8__["FrameService"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, nativescript_angular_directives_dialogs__WEBPACK_IMPORTED_MODULE_11__["ModalDialogService"], nativescript_angular_directives_dialogs__WEBPACK_IMPORTED_MODULE_11__["ModalDialogService"], [nativescript_angular_router_ns_location_strategy__WEBPACK_IMPORTED_MODULE_9__["NSLocationStrategy"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, nativescript_angular_platform_providers__WEBPACK_IMPORTED_MODULE_8__["DEVICE"], nativescript_angular_platform_providers__WEBPACK_IMPORTED_MODULE_8__["getDefaultDevice"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, tns_core_modules_ui_frame_frame__WEBPACK_IMPORTED_MODULE_12__["Frame"], nativescript_angular_platform_providers__WEBPACK_IMPORTED_MODULE_8__["getDefaultFrame"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, tns_core_modules_ui_page_page__WEBPACK_IMPORTED_MODULE_13__["Page"], nativescript_angular_platform_providers__WEBPACK_IMPORTED_MODULE_8__["getDefaultPage"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](6144, _angular_common__WEBPACK_IMPORTED_MODULE_7__["LocationStrategy"], null, [nativescript_angular_router_ns_location_strategy__WEBPACK_IMPORTED_MODULE_9__["NSLocationStrategy"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, nativescript_angular_router_ns_platform_location__WEBPACK_IMPORTED_MODULE_14__["NativescriptPlatformLocation"], nativescript_angular_router_ns_platform_location__WEBPACK_IMPORTED_MODULE_14__["NativescriptPlatformLocation"], [nativescript_angular_router_ns_location_strategy__WEBPACK_IMPORTED_MODULE_9__["NSLocationStrategy"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_common__WEBPACK_IMPORTED_MODULE_7__["PlatformLocation"], nativescript_angular_router_ns_platform_location__WEBPACK_IMPORTED_MODULE_14__["NativescriptPlatformLocation"], [nativescript_angular_router_ns_location_strategy__WEBPACK_IMPORTED_MODULE_9__["NSLocationStrategy"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, nativescript_angular_router_router_extensions__WEBPACK_IMPORTED_MODULE_15__["RouterExtensions"], nativescript_angular_router_router_extensions__WEBPACK_IMPORTED_MODULE_15__["RouterExtensions"], [_angular_router__WEBPACK_IMPORTED_MODULE_16__["Router"], nativescript_angular_router_ns_location_strategy__WEBPACK_IMPORTED_MODULE_9__["NSLocationStrategy"], nativescript_angular_platform_providers__WEBPACK_IMPORTED_MODULE_8__["FrameService"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, nativescript_angular_router_ns_route_reuse_strategy__WEBPACK_IMPORTED_MODULE_17__["NSRouteReuseStrategy"], nativescript_angular_router_ns_route_reuse_strategy__WEBPACK_IMPORTED_MODULE_17__["NSRouteReuseStrategy"], [nativescript_angular_router_ns_location_strategy__WEBPACK_IMPORTED_MODULE_9__["NSLocationStrategy"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](6144, _angular_router__WEBPACK_IMPORTED_MODULE_16__["RouteReuseStrategy"], null, [nativescript_angular_router_ns_route_reuse_strategy__WEBPACK_IMPORTED_MODULE_17__["NSRouteReuseStrategy"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_forms__WEBPACK_IMPORTED_MODULE_18__["ɵangular_packages_forms_forms_i"], _angular_forms__WEBPACK_IMPORTED_MODULE_18__["ɵangular_packages_forms_forms_i"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _shared_car_service__WEBPACK_IMPORTED_MODULE_19__["CarService"], _shared_car_service__WEBPACK_IMPORTED_MODULE_19__["CarService"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _shared_car_edit_service__WEBPACK_IMPORTED_MODULE_20__["CarEditService"], _shared_car_edit_service__WEBPACK_IMPORTED_MODULE_20__["CarEditService"], [_shared_car_service__WEBPACK_IMPORTED_MODULE_19__["CarService"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_router__WEBPACK_IMPORTED_MODULE_16__["RouterModule"], _angular_router__WEBPACK_IMPORTED_MODULE_16__["RouterModule"], [[2, _angular_router__WEBPACK_IMPORTED_MODULE_16__["ɵangular_packages_router_router_a"]], [2, _angular_router__WEBPACK_IMPORTED_MODULE_16__["Router"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_common__WEBPACK_IMPORTED_MODULE_7__["CommonModule"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["CommonModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, nativescript_angular_common__WEBPACK_IMPORTED_MODULE_21__["NativeScriptCommonModule"], nativescript_angular_common__WEBPACK_IMPORTED_MODULE_21__["NativeScriptCommonModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, nativescript_angular_router_router_module__WEBPACK_IMPORTED_MODULE_10__["NativeScriptRouterModule"], nativescript_angular_router_router_module__WEBPACK_IMPORTED_MODULE_10__["NativeScriptRouterModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _cars_routing_module__WEBPACK_IMPORTED_MODULE_22__["CarsRoutingModule"], _cars_routing_module__WEBPACK_IMPORTED_MODULE_22__["CarsRoutingModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_forms__WEBPACK_IMPORTED_MODULE_18__["ɵangular_packages_forms_forms_bb"], _angular_forms__WEBPACK_IMPORTED_MODULE_18__["ɵangular_packages_forms_forms_bb"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_forms__WEBPACK_IMPORTED_MODULE_18__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_18__["FormsModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, nativescript_angular_forms_forms_module__WEBPACK_IMPORTED_MODULE_23__["NativeScriptFormsModule"], nativescript_angular_forms_forms_module__WEBPACK_IMPORTED_MODULE_23__["NativeScriptFormsModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, nativescript_ui_listview_angular_listview_directives__WEBPACK_IMPORTED_MODULE_24__["NativeScriptUIListViewModule"], nativescript_ui_listview_angular_listview_directives__WEBPACK_IMPORTED_MODULE_24__["NativeScriptUIListViewModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _cars_module__WEBPACK_IMPORTED_MODULE_1__["CarsModule"], _cars_module__WEBPACK_IMPORTED_MODULE_1__["CarsModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1024, _angular_router__WEBPACK_IMPORTED_MODULE_16__["ROUTES"], function () { return [[{ path: "", component: _car_list_component__WEBPACK_IMPORTED_MODULE_25__["CarListComponent"] }, { path: "car-detail/:id", component: _car_detail_car_detail_component__WEBPACK_IMPORTED_MODULE_26__["CarDetailComponent"] }, { path: "car-detail-edit/:id", component: _car_detail_edit_car_detail_edit_component__WEBPACK_IMPORTED_MODULE_27__["CarDetailEditComponent"] }]]; }, [])]); });



/***/ }),

/***/ "./cars/cars.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CarsModule", function() { return CarsModule; });
var CarsModule = /** @class */ (function () {
    function CarsModule() {
    }
    return CarsModule;
}());



/***/ }),

/***/ "./cars/shared/car-edit.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CarEditService", function() { return CarEditService; });
/* harmony import */ var _car_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./cars/shared/car.model.ts");
/* harmony import */ var _car_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./cars/shared/car.service.ts");


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
            this._editModel = new _car_model__WEBPACK_IMPORTED_MODULE_0__["Car"](car);
        }
        return this._editModel;
    };
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
/* harmony import */ var file_system__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/tns-core-modules/file-system/file-system.js");
/* harmony import */ var file_system__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(file_system__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var kinvey_nativescript_sdk__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../node_modules/kinvey-nativescript-sdk/kinvey-nativescript-sdk.js");
/* harmony import */ var kinvey_nativescript_sdk__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(kinvey_nativescript_sdk__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _shared_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./shared/config.ts");
/* harmony import */ var _car_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./cars/shared/car.model.ts");




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
        this.carsStore = kinvey_nativescript_sdk__WEBPACK_IMPORTED_MODULE_1__["Kinvey"].DataStore.collection("cars");
    }
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
            var sortByNameQuery = new kinvey_nativescript_sdk__WEBPACK_IMPORTED_MODULE_1__["Kinvey"].Query();
            sortByNameQuery.ascending("name");
            var stream = _this.carsStore.find(sortByNameQuery);
            return stream.toPromise();
        }).then(function (data) {
            _this.allCars = [];
            data.forEach(function (carData) {
                carData.id = carData._id;
                var car = new _car_model__WEBPACK_IMPORTED_MODULE_3__["Car"](carData);
                _this.allCars.push(car);
            });
            return _this.allCars;
        });
    };
    CarService.prototype.update = function (carModel) {
        var updateModel = CarService.cloneUpdateModel(carModel);
        return this.carsStore.save(updateModel);
    };
    CarService.prototype.uploadImage = function (remoteFullPath, localFullPath) {
        var imageFile = file_system__WEBPACK_IMPORTED_MODULE_0__["File"].fromPath(localFullPath);
        var imageContent = imageFile.readSync();
        var metadata = {
            filename: imageFile.name,
            mimeType: this.getMimeType(imageFile.extension),
            size: imageContent.length,
            public: true
        };
        return kinvey_nativescript_sdk__WEBPACK_IMPORTED_MODULE_1__["Kinvey"].Files.upload(imageFile, metadata, { timeout: 2147483647 })
            .then(function (uploadedFile) {
            var query = new kinvey_nativescript_sdk__WEBPACK_IMPORTED_MODULE_1__["Kinvey"].Query();
            query.equalTo("_id", uploadedFile._id);
            return kinvey_nativescript_sdk__WEBPACK_IMPORTED_MODULE_1__["Kinvey"].Files.find(query);
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
        if (!!kinvey_nativescript_sdk__WEBPACK_IMPORTED_MODULE_1__["Kinvey"].User.getActiveUser()) {
            return Promise.resolve();
        }
        else {
            return kinvey_nativescript_sdk__WEBPACK_IMPORTED_MODULE_1__["Kinvey"].User.login(_shared_config__WEBPACK_IMPORTED_MODULE_2__["Config"].kinveyUsername, _shared_config__WEBPACK_IMPORTED_MODULE_2__["Config"].kinveyPassword);
        }
    };
    CarService.prototype.getMimeType = function (imageExtension) {
        var extension = imageExtension === "jpg" ? "jpeg" : imageExtension;
        return "image/" + extension.replace(/\./g, "");
    };
    return CarService;
}());



/***/ })

}]);