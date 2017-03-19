/**
 * This file is generated by the Angular 2 template compiler.
 * Do not edit.
 */
/* tslint:disable */
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
import * as import1 from '@angular/core/src/linker/view';
import * as import2 from '@angular/core/src/linker/element';
import * as import3 from './signin.component';
import * as import4 from '@angular/core/src/linker/view_utils';
import * as import6 from '@angular/core/src/linker/view_type';
import * as import7 from '@angular/core/src/change_detection/change_detection';
import * as import8 from '../auth.service';
import * as import9 from '../../shared/session-storage.service';
import * as import10 from '@angular/router/src/router';
import * as import11 from '@angular/core/src/metadata/view';
import * as import12 from '@angular/core/src/linker/component_factory';
import * as import13 from '@angular/forms/src/directives/reactive_directives/form_group_directive';
import * as import14 from '@angular/forms/src/directives/ng_control_status';
import * as import15 from '@angular/common/src/directives/ng_class';
import * as import16 from '@angular/forms/src/directives/default_value_accessor';
import * as import17 from '@angular/forms/src/directives/reactive_directives/form_control_directive';
import * as import18 from '@angular/common/src/directives/ng_if';
import * as import19 from '@angular/router/src/directives/router_link';
import * as import20 from '@angular/core/src/change_detection/differs/iterable_differs';
import * as import21 from '@angular/core/src/change_detection/differs/keyvalue_differs';
import * as import22 from '@angular/core/src/linker/element_ref';
import * as import23 from '@angular/core/src/linker/template_ref';
import * as import24 from '@angular/router/src/router_state';
import * as import25 from '@angular/common/src/location/location_strategy';
import * as import26 from '@angular/forms/src/directives/control_value_accessor';
import * as import27 from '@angular/forms/src/directives/ng_control';
import * as import28 from '@angular/forms/src/directives/control_container';
import * as import29 from '@angular/core/src/security';
var renderType_SigninComponent_Host = null;
var _View_SigninComponent_Host0 = (function (_super) {
    __extends(_View_SigninComponent_Host0, _super);
    function _View_SigninComponent_Host0(viewUtils, parentInjector, declarationEl) {
        _super.call(this, _View_SigninComponent_Host0, renderType_SigninComponent_Host, import6.ViewType.HOST, viewUtils, parentInjector, declarationEl, import7.ChangeDetectorStatus.CheckAlways);
    }
    _View_SigninComponent_Host0.prototype.createInternal = function (rootSelector) {
        this._el_0 = this.selectOrCreateHostElement('app-signin', rootSelector, null);
        this._appEl_0 = new import2.AppElement(0, null, this, this._el_0);
        var compView_0 = viewFactory_SigninComponent0(this.viewUtils, this.injector(0), this._appEl_0);
        this._SigninComponent_0_4 = new import3.SigninComponent(this.parentInjector.get(import8.AuthService), this.parentInjector.get(import9.SessionStorageService), this.parentInjector.get(import10.Router));
        this._appEl_0.initComponent(this._SigninComponent_0_4, [], compView_0);
        compView_0.create(this._SigninComponent_0_4, this.projectableNodes, null);
        this.init([].concat([this._el_0]), [this._el_0], [], []);
        return this._appEl_0;
    };
    _View_SigninComponent_Host0.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import3.SigninComponent) && (0 === requestNodeIndex))) {
            return this._SigninComponent_0_4;
        }
        return notFoundResult;
    };
    _View_SigninComponent_Host0.prototype.detectChangesInternal = function (throwOnChange) {
        if (((this.numberOfChecks === 0) && !throwOnChange)) {
            this._SigninComponent_0_4.ngOnInit();
        }
        this.detectContentChildrenChanges(throwOnChange);
        this.detectViewChildrenChanges(throwOnChange);
    };
    return _View_SigninComponent_Host0;
}(import1.AppView));
function viewFactory_SigninComponent_Host0(viewUtils, parentInjector, declarationEl) {
    if ((renderType_SigninComponent_Host === null)) {
        (renderType_SigninComponent_Host = viewUtils.createRenderComponentType('', 0, import11.ViewEncapsulation.None, [], {}));
    }
    return new _View_SigninComponent_Host0(viewUtils, parentInjector, declarationEl);
}
export var SigninComponentNgFactory = new import12.ComponentFactory('app-signin', viewFactory_SigninComponent_Host0, import3.SigninComponent);
var styles_SigninComponent = [];
var renderType_SigninComponent = null;
var _View_SigninComponent0 = (function (_super) {
    __extends(_View_SigninComponent0, _super);
    function _View_SigninComponent0(viewUtils, parentInjector, declarationEl) {
        _super.call(this, _View_SigninComponent0, renderType_SigninComponent, import6.ViewType.COMPONENT, viewUtils, parentInjector, declarationEl, import7.ChangeDetectorStatus.CheckAlways);
    }
    _View_SigninComponent0.prototype.createInternal = function (rootSelector) {
        var parentRenderNode = this.renderer.createViewRoot(this.declarationAppElement.nativeElement);
        this._el_0 = this.renderer.createElement(parentRenderNode, 'div', null);
        this.renderer.setElementAttribute(this._el_0, 'class', 'container');
        this.renderer.setElementAttribute(this._el_0, 'style', 'margin-top: 3%');
        this._text_1 = this.renderer.createText(this._el_0, '\n    ', null);
        this._el_2 = this.renderer.createElement(this._el_0, 'div', null);
        this.renderer.setElementAttribute(this._el_2, 'class', 'row');
        this._text_3 = this.renderer.createText(this._el_2, '\n        ', null);
        this._el_4 = this.renderer.createElement(this._el_2, 'div', null);
        this.renderer.setElementAttribute(this._el_4, 'class', 'col-xs-12 col-md-6 col-md-offset-3');
        this._text_5 = this.renderer.createText(this._el_4, '\n            ', null);
        this._el_6 = this.renderer.createElement(this._el_4, 'div', null);
        this.renderer.setElementAttribute(this._el_6, 'class', 'jumbotron');
        this._text_7 = this.renderer.createText(this._el_6, '\n                ', null);
        this._el_8 = this.renderer.createElement(this._el_6, 'div', null);
        this.renderer.setElementAttribute(this._el_8, 'class', 'text-center');
        this._text_9 = this.renderer.createText(this._el_8, '\n                    ', null);
        this._el_10 = this.renderer.createElement(this._el_8, 'h2', null);
        this._text_11 = this.renderer.createText(this._el_10, 'Log in', null);
        this._text_12 = this.renderer.createText(this._el_8, '\n                ', null);
        this._text_13 = this.renderer.createText(this._el_6, '\n                ', null);
        this._el_14 = this.renderer.createElement(this._el_6, 'form', null);
        this._FormGroupDirective_14_3 = new import13.FormGroupDirective(null, null);
        this._ControlContainer_14_4 = this._FormGroupDirective_14_3;
        this._NgControlStatusGroup_14_5 = new import14.NgControlStatusGroup(this._ControlContainer_14_4);
        this._text_15 = this.renderer.createText(this._el_14, '\n                    ', null);
        this._el_16 = this.renderer.createElement(this._el_14, 'div', null);
        this.renderer.setElementAttribute(this._el_16, 'class', 'form-group');
        this._NgClass_16_3 = new import15.NgClass(this.parentInjector.get(import20.IterableDiffers), this.parentInjector.get(import21.KeyValueDiffers), new import22.ElementRef(this._el_16), this.renderer);
        this._text_17 = this.renderer.createText(this._el_16, '\n                        ', null);
        this._el_18 = this.renderer.createElement(this._el_16, 'label', null);
        this.renderer.setElementAttribute(this._el_18, 'for', 'email');
        this._text_19 = this.renderer.createText(this._el_18, 'Email address', null);
        this._text_20 = this.renderer.createText(this._el_16, '\n                        ', null);
        this._el_21 = this.renderer.createElement(this._el_16, 'input', null);
        this.renderer.setElementAttribute(this._el_21, 'class', 'form-control');
        this.renderer.setElementAttribute(this._el_21, 'id', 'email');
        this.renderer.setElementAttribute(this._el_21, 'type', 'email');
        this._DefaultValueAccessor_21_3 = new import16.DefaultValueAccessor(this.renderer, new import22.ElementRef(this._el_21));
        this._NG_VALUE_ACCESSOR_21_4 = [this._DefaultValueAccessor_21_3];
        this._FormControlDirective_21_5 = new import17.FormControlDirective(null, null, this._NG_VALUE_ACCESSOR_21_4);
        this._NgControl_21_6 = this._FormControlDirective_21_5;
        this._NgControlStatus_21_7 = new import14.NgControlStatus(this._NgControl_21_6);
        this._text_22 = this.renderer.createText(this._el_16, '\n                        ', null);
        this._anchor_23 = this.renderer.createTemplateAnchor(this._el_16, null);
        this._appEl_23 = new import2.AppElement(23, 16, this, this._anchor_23);
        this._TemplateRef_23_5 = new import23.TemplateRef_(this._appEl_23, viewFactory_SigninComponent1);
        this._NgIf_23_6 = new import18.NgIf(this._appEl_23.vcRef, this._TemplateRef_23_5);
        this._text_24 = this.renderer.createText(this._el_16, '\n                    ', null);
        this._text_25 = this.renderer.createText(this._el_14, '\n                    ', null);
        this._el_26 = this.renderer.createElement(this._el_14, 'div', null);
        this.renderer.setElementAttribute(this._el_26, 'class', 'form-group');
        this._NgClass_26_3 = new import15.NgClass(this.parentInjector.get(import20.IterableDiffers), this.parentInjector.get(import21.KeyValueDiffers), new import22.ElementRef(this._el_26), this.renderer);
        this._text_27 = this.renderer.createText(this._el_26, '\n                        ', null);
        this._el_28 = this.renderer.createElement(this._el_26, 'label', null);
        this.renderer.setElementAttribute(this._el_28, 'for', 'password');
        this._text_29 = this.renderer.createText(this._el_28, 'Password', null);
        this._text_30 = this.renderer.createText(this._el_26, '\n                        ', null);
        this._el_31 = this.renderer.createElement(this._el_26, 'input', null);
        this.renderer.setElementAttribute(this._el_31, 'class', 'form-control');
        this.renderer.setElementAttribute(this._el_31, 'id', 'password');
        this.renderer.setElementAttribute(this._el_31, 'type', 'password');
        this._DefaultValueAccessor_31_3 = new import16.DefaultValueAccessor(this.renderer, new import22.ElementRef(this._el_31));
        this._NG_VALUE_ACCESSOR_31_4 = [this._DefaultValueAccessor_31_3];
        this._FormControlDirective_31_5 = new import17.FormControlDirective(null, null, this._NG_VALUE_ACCESSOR_31_4);
        this._NgControl_31_6 = this._FormControlDirective_31_5;
        this._NgControlStatus_31_7 = new import14.NgControlStatus(this._NgControl_31_6);
        this._text_32 = this.renderer.createText(this._el_26, '\n                        ', null);
        this._anchor_33 = this.renderer.createTemplateAnchor(this._el_26, null);
        this._appEl_33 = new import2.AppElement(33, 26, this, this._anchor_33);
        this._TemplateRef_33_5 = new import23.TemplateRef_(this._appEl_33, viewFactory_SigninComponent2);
        this._NgIf_33_6 = new import18.NgIf(this._appEl_33.vcRef, this._TemplateRef_33_5);
        this._text_34 = this.renderer.createText(this._el_26, '\n                    ', null);
        this._text_35 = this.renderer.createText(this._el_14, '\n                    ', null);
        this._el_36 = this.renderer.createElement(this._el_14, 'div', null);
        this.renderer.setElementAttribute(this._el_36, 'align', 'right');
        this._text_37 = this.renderer.createText(this._el_36, '\n                        ', null);
        this._el_38 = this.renderer.createElement(this._el_36, 'button', null);
        this.renderer.setElementAttribute(this._el_38, 'class', 'btn btn-primary');
        this.renderer.setElementAttribute(this._el_38, 'type', 'submit');
        this._text_39 = this.renderer.createText(this._el_38, '\n                            Log in\n                        ', null);
        this._text_40 = this.renderer.createText(this._el_36, '\n                    ', null);
        this._text_41 = this.renderer.createText(this._el_14, '\n                ', null);
        this._text_42 = this.renderer.createText(this._el_6, '\n                ', null);
        this._el_43 = this.renderer.createElement(this._el_6, 'div', null);
        this._text_44 = this.renderer.createText(this._el_43, '\n                    ', null);
        this._el_45 = this.renderer.createElement(this._el_43, 'a', null);
        this._RouterLinkWithHref_45_3 = new import19.RouterLinkWithHref(this.parentInjector.get(import10.Router), this.parentInjector.get(import24.ActivatedRoute), this.parentInjector.get(import25.LocationStrategy));
        this._text_46 = this.renderer.createText(this._el_45, 'Create account', null);
        this._text_47 = this.renderer.createText(this._el_43, '\n                     \n                    ', null);
        this._el_48 = this.renderer.createElement(this._el_43, 'a', null);
        this._text_49 = this.renderer.createText(this._el_48, 'Forgot your password?', null);
        this._text_50 = this.renderer.createText(this._el_43, '\n                ', null);
        this._text_51 = this.renderer.createText(this._el_6, '\n            ', null);
        this._text_52 = this.renderer.createText(this._el_4, '\n        ', null);
        this._text_53 = this.renderer.createText(this._el_2, '\n    ', null);
        this._text_54 = this.renderer.createText(this._el_0, '\n', null);
        var disposable_0 = this.renderer.listen(this._el_14, 'ngSubmit', this.eventHandler(this._handle_ngSubmit_14_0.bind(this)));
        var disposable_1 = this.renderer.listen(this._el_14, 'submit', this.eventHandler(this._handle_submit_14_1.bind(this)));
        var disposable_2 = this.renderer.listen(this._el_14, 'reset', this.eventHandler(this._handle_reset_14_2.bind(this)));
        this._expr_3 = import7.UNINITIALIZED;
        var subscription_0 = this._FormGroupDirective_14_3.ngSubmit.subscribe(this.eventHandler(this._handle_ngSubmit_14_0.bind(this)));
        this._expr_4 = import7.UNINITIALIZED;
        this._expr_5 = import7.UNINITIALIZED;
        this._expr_6 = import7.UNINITIALIZED;
        this._expr_7 = import7.UNINITIALIZED;
        this._expr_8 = import7.UNINITIALIZED;
        this._expr_9 = import7.UNINITIALIZED;
        this._expr_10 = import7.UNINITIALIZED;
        this._map_0 = import4.pureProxy1(function (p0) {
            return { 'has-error': p0 };
        });
        this._expr_11 = import7.UNINITIALIZED;
        var disposable_3 = this.renderer.listen(this._el_21, 'input', this.eventHandler(this._handle_input_21_0.bind(this)));
        var disposable_4 = this.renderer.listen(this._el_21, 'blur', this.eventHandler(this._handle_blur_21_1.bind(this)));
        this._expr_14 = import7.UNINITIALIZED;
        this._expr_15 = import7.UNINITIALIZED;
        this._expr_16 = import7.UNINITIALIZED;
        this._expr_17 = import7.UNINITIALIZED;
        this._expr_18 = import7.UNINITIALIZED;
        this._expr_19 = import7.UNINITIALIZED;
        this._expr_20 = import7.UNINITIALIZED;
        this._expr_21 = import7.UNINITIALIZED;
        this._expr_22 = import7.UNINITIALIZED;
        this._map_1 = import4.pureProxy1(function (p0) {
            return { 'has-error': p0 };
        });
        this._expr_23 = import7.UNINITIALIZED;
        var disposable_5 = this.renderer.listen(this._el_31, 'input', this.eventHandler(this._handle_input_31_0.bind(this)));
        var disposable_6 = this.renderer.listen(this._el_31, 'blur', this.eventHandler(this._handle_blur_31_1.bind(this)));
        this._expr_26 = import7.UNINITIALIZED;
        this._expr_27 = import7.UNINITIALIZED;
        this._expr_28 = import7.UNINITIALIZED;
        this._expr_29 = import7.UNINITIALIZED;
        this._expr_30 = import7.UNINITIALIZED;
        this._expr_31 = import7.UNINITIALIZED;
        this._expr_32 = import7.UNINITIALIZED;
        this._expr_33 = import7.UNINITIALIZED;
        var disposable_7 = this.renderer.listen(this._el_45, 'click', this.eventHandler(this._handle_click_45_0.bind(this)));
        this._arr_0 = import4.pureProxy1(function (p0) {
            return [p0];
        });
        this._expr_35 = import7.UNINITIALIZED;
        this._expr_36 = import7.UNINITIALIZED;
        this.init([], [
            this._el_0,
            this._text_1,
            this._el_2,
            this._text_3,
            this._el_4,
            this._text_5,
            this._el_6,
            this._text_7,
            this._el_8,
            this._text_9,
            this._el_10,
            this._text_11,
            this._text_12,
            this._text_13,
            this._el_14,
            this._text_15,
            this._el_16,
            this._text_17,
            this._el_18,
            this._text_19,
            this._text_20,
            this._el_21,
            this._text_22,
            this._anchor_23,
            this._text_24,
            this._text_25,
            this._el_26,
            this._text_27,
            this._el_28,
            this._text_29,
            this._text_30,
            this._el_31,
            this._text_32,
            this._anchor_33,
            this._text_34,
            this._text_35,
            this._el_36,
            this._text_37,
            this._el_38,
            this._text_39,
            this._text_40,
            this._text_41,
            this._text_42,
            this._el_43,
            this._text_44,
            this._el_45,
            this._text_46,
            this._text_47,
            this._el_48,
            this._text_49,
            this._text_50,
            this._text_51,
            this._text_52,
            this._text_53,
            this._text_54
        ], [
            disposable_0,
            disposable_1,
            disposable_2,
            disposable_3,
            disposable_4,
            disposable_5,
            disposable_6,
            disposable_7
        ], [subscription_0]);
        return null;
    };
    _View_SigninComponent0.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import16.DefaultValueAccessor) && (21 === requestNodeIndex))) {
            return this._DefaultValueAccessor_21_3;
        }
        if (((token === import26.NG_VALUE_ACCESSOR) && (21 === requestNodeIndex))) {
            return this._NG_VALUE_ACCESSOR_21_4;
        }
        if (((token === import17.FormControlDirective) && (21 === requestNodeIndex))) {
            return this._FormControlDirective_21_5;
        }
        if (((token === import27.NgControl) && (21 === requestNodeIndex))) {
            return this._NgControl_21_6;
        }
        if (((token === import14.NgControlStatus) && (21 === requestNodeIndex))) {
            return this._NgControlStatus_21_7;
        }
        if (((token === import23.TemplateRef) && (23 === requestNodeIndex))) {
            return this._TemplateRef_23_5;
        }
        if (((token === import18.NgIf) && (23 === requestNodeIndex))) {
            return this._NgIf_23_6;
        }
        if (((token === import15.NgClass) && ((16 <= requestNodeIndex) && (requestNodeIndex <= 24)))) {
            return this._NgClass_16_3;
        }
        if (((token === import16.DefaultValueAccessor) && (31 === requestNodeIndex))) {
            return this._DefaultValueAccessor_31_3;
        }
        if (((token === import26.NG_VALUE_ACCESSOR) && (31 === requestNodeIndex))) {
            return this._NG_VALUE_ACCESSOR_31_4;
        }
        if (((token === import17.FormControlDirective) && (31 === requestNodeIndex))) {
            return this._FormControlDirective_31_5;
        }
        if (((token === import27.NgControl) && (31 === requestNodeIndex))) {
            return this._NgControl_31_6;
        }
        if (((token === import14.NgControlStatus) && (31 === requestNodeIndex))) {
            return this._NgControlStatus_31_7;
        }
        if (((token === import23.TemplateRef) && (33 === requestNodeIndex))) {
            return this._TemplateRef_33_5;
        }
        if (((token === import18.NgIf) && (33 === requestNodeIndex))) {
            return this._NgIf_33_6;
        }
        if (((token === import15.NgClass) && ((26 <= requestNodeIndex) && (requestNodeIndex <= 34)))) {
            return this._NgClass_26_3;
        }
        if (((token === import13.FormGroupDirective) && ((14 <= requestNodeIndex) && (requestNodeIndex <= 41)))) {
            return this._FormGroupDirective_14_3;
        }
        if (((token === import28.ControlContainer) && ((14 <= requestNodeIndex) && (requestNodeIndex <= 41)))) {
            return this._ControlContainer_14_4;
        }
        if (((token === import14.NgControlStatusGroup) && ((14 <= requestNodeIndex) && (requestNodeIndex <= 41)))) {
            return this._NgControlStatusGroup_14_5;
        }
        if (((token === import19.RouterLinkWithHref) && ((45 <= requestNodeIndex) && (requestNodeIndex <= 46)))) {
            return this._RouterLinkWithHref_45_3;
        }
        return notFoundResult;
    };
    _View_SigninComponent0.prototype.detectChangesInternal = function (throwOnChange) {
        var changes = null;
        changes = null;
        var currVal_3 = this.context.myForm;
        if (import4.checkBinding(throwOnChange, this._expr_3, currVal_3)) {
            this._FormGroupDirective_14_3.form = currVal_3;
            if ((changes === null)) {
                (changes = {});
            }
            changes['form'] = new import7.SimpleChange(this._expr_3, currVal_3);
            this._expr_3 = currVal_3;
        }
        if ((changes !== null)) {
            this._FormGroupDirective_14_3.ngOnChanges(changes);
        }
        var currVal_10 = 'form-group';
        if (import4.checkBinding(throwOnChange, this._expr_10, currVal_10)) {
            this._NgClass_16_3.klass = currVal_10;
            this._expr_10 = currVal_10;
        }
        var currVal_11 = this._map_0((!this.context.myForm.controls['email'].valid && (this.context.myForm.controls['email'].touched || this.context.isSubmitted())));
        if (import4.checkBinding(throwOnChange, this._expr_11, currVal_11)) {
            this._NgClass_16_3.ngClass = currVal_11;
            this._expr_11 = currVal_11;
        }
        if (!throwOnChange) {
            this._NgClass_16_3.ngDoCheck();
        }
        changes = null;
        var currVal_14 = this.context.myForm.controls['email'];
        if (import4.checkBinding(throwOnChange, this._expr_14, currVal_14)) {
            this._FormControlDirective_21_5.form = currVal_14;
            if ((changes === null)) {
                (changes = {});
            }
            changes['form'] = new import7.SimpleChange(this._expr_14, currVal_14);
            this._expr_14 = currVal_14;
        }
        if ((changes !== null)) {
            this._FormControlDirective_21_5.ngOnChanges(changes);
        }
        var currVal_21 = (!this.context.myForm.controls['email'].valid && (this.context.myForm.controls['email'].touched || this.context.isSubmitted()));
        if (import4.checkBinding(throwOnChange, this._expr_21, currVal_21)) {
            this._NgIf_23_6.ngIf = currVal_21;
            this._expr_21 = currVal_21;
        }
        var currVal_22 = 'form-group';
        if (import4.checkBinding(throwOnChange, this._expr_22, currVal_22)) {
            this._NgClass_26_3.klass = currVal_22;
            this._expr_22 = currVal_22;
        }
        var currVal_23 = this._map_1((!this.context.myForm.controls['password'].valid && (this.context.myForm.controls['password'].touched || this.context.isSubmitted())));
        if (import4.checkBinding(throwOnChange, this._expr_23, currVal_23)) {
            this._NgClass_26_3.ngClass = currVal_23;
            this._expr_23 = currVal_23;
        }
        if (!throwOnChange) {
            this._NgClass_26_3.ngDoCheck();
        }
        changes = null;
        var currVal_26 = this.context.myForm.controls['password'];
        if (import4.checkBinding(throwOnChange, this._expr_26, currVal_26)) {
            this._FormControlDirective_31_5.form = currVal_26;
            if ((changes === null)) {
                (changes = {});
            }
            changes['form'] = new import7.SimpleChange(this._expr_26, currVal_26);
            this._expr_26 = currVal_26;
        }
        if ((changes !== null)) {
            this._FormControlDirective_31_5.ngOnChanges(changes);
        }
        var currVal_33 = (this.context.myForm.controls['password'].hasError('required') && (this.context.myForm.controls['password'].touched || this.context.isSubmitted()));
        if (import4.checkBinding(throwOnChange, this._expr_33, currVal_33)) {
            this._NgIf_33_6.ngIf = currVal_33;
            this._expr_33 = currVal_33;
        }
        changes = null;
        var currVal_35 = this._arr_0('/#signup');
        if (import4.checkBinding(throwOnChange, this._expr_35, currVal_35)) {
            this._RouterLinkWithHref_45_3.routerLink = currVal_35;
            if ((changes === null)) {
                (changes = {});
            }
            changes['routerLink'] = new import7.SimpleChange(this._expr_35, currVal_35);
            this._expr_35 = currVal_35;
        }
        if ((changes !== null)) {
            this._RouterLinkWithHref_45_3.ngOnChanges(changes);
        }
        this.detectContentChildrenChanges(throwOnChange);
        var currVal_4 = this._NgControlStatusGroup_14_5.ngClassUntouched;
        if (import4.checkBinding(throwOnChange, this._expr_4, currVal_4)) {
            this.renderer.setElementClass(this._el_14, 'ng-untouched', currVal_4);
            this._expr_4 = currVal_4;
        }
        var currVal_5 = this._NgControlStatusGroup_14_5.ngClassTouched;
        if (import4.checkBinding(throwOnChange, this._expr_5, currVal_5)) {
            this.renderer.setElementClass(this._el_14, 'ng-touched', currVal_5);
            this._expr_5 = currVal_5;
        }
        var currVal_6 = this._NgControlStatusGroup_14_5.ngClassPristine;
        if (import4.checkBinding(throwOnChange, this._expr_6, currVal_6)) {
            this.renderer.setElementClass(this._el_14, 'ng-pristine', currVal_6);
            this._expr_6 = currVal_6;
        }
        var currVal_7 = this._NgControlStatusGroup_14_5.ngClassDirty;
        if (import4.checkBinding(throwOnChange, this._expr_7, currVal_7)) {
            this.renderer.setElementClass(this._el_14, 'ng-dirty', currVal_7);
            this._expr_7 = currVal_7;
        }
        var currVal_8 = this._NgControlStatusGroup_14_5.ngClassValid;
        if (import4.checkBinding(throwOnChange, this._expr_8, currVal_8)) {
            this.renderer.setElementClass(this._el_14, 'ng-valid', currVal_8);
            this._expr_8 = currVal_8;
        }
        var currVal_9 = this._NgControlStatusGroup_14_5.ngClassInvalid;
        if (import4.checkBinding(throwOnChange, this._expr_9, currVal_9)) {
            this.renderer.setElementClass(this._el_14, 'ng-invalid', currVal_9);
            this._expr_9 = currVal_9;
        }
        var currVal_15 = this._NgControlStatus_21_7.ngClassUntouched;
        if (import4.checkBinding(throwOnChange, this._expr_15, currVal_15)) {
            this.renderer.setElementClass(this._el_21, 'ng-untouched', currVal_15);
            this._expr_15 = currVal_15;
        }
        var currVal_16 = this._NgControlStatus_21_7.ngClassTouched;
        if (import4.checkBinding(throwOnChange, this._expr_16, currVal_16)) {
            this.renderer.setElementClass(this._el_21, 'ng-touched', currVal_16);
            this._expr_16 = currVal_16;
        }
        var currVal_17 = this._NgControlStatus_21_7.ngClassPristine;
        if (import4.checkBinding(throwOnChange, this._expr_17, currVal_17)) {
            this.renderer.setElementClass(this._el_21, 'ng-pristine', currVal_17);
            this._expr_17 = currVal_17;
        }
        var currVal_18 = this._NgControlStatus_21_7.ngClassDirty;
        if (import4.checkBinding(throwOnChange, this._expr_18, currVal_18)) {
            this.renderer.setElementClass(this._el_21, 'ng-dirty', currVal_18);
            this._expr_18 = currVal_18;
        }
        var currVal_19 = this._NgControlStatus_21_7.ngClassValid;
        if (import4.checkBinding(throwOnChange, this._expr_19, currVal_19)) {
            this.renderer.setElementClass(this._el_21, 'ng-valid', currVal_19);
            this._expr_19 = currVal_19;
        }
        var currVal_20 = this._NgControlStatus_21_7.ngClassInvalid;
        if (import4.checkBinding(throwOnChange, this._expr_20, currVal_20)) {
            this.renderer.setElementClass(this._el_21, 'ng-invalid', currVal_20);
            this._expr_20 = currVal_20;
        }
        var currVal_27 = this._NgControlStatus_31_7.ngClassUntouched;
        if (import4.checkBinding(throwOnChange, this._expr_27, currVal_27)) {
            this.renderer.setElementClass(this._el_31, 'ng-untouched', currVal_27);
            this._expr_27 = currVal_27;
        }
        var currVal_28 = this._NgControlStatus_31_7.ngClassTouched;
        if (import4.checkBinding(throwOnChange, this._expr_28, currVal_28)) {
            this.renderer.setElementClass(this._el_31, 'ng-touched', currVal_28);
            this._expr_28 = currVal_28;
        }
        var currVal_29 = this._NgControlStatus_31_7.ngClassPristine;
        if (import4.checkBinding(throwOnChange, this._expr_29, currVal_29)) {
            this.renderer.setElementClass(this._el_31, 'ng-pristine', currVal_29);
            this._expr_29 = currVal_29;
        }
        var currVal_30 = this._NgControlStatus_31_7.ngClassDirty;
        if (import4.checkBinding(throwOnChange, this._expr_30, currVal_30)) {
            this.renderer.setElementClass(this._el_31, 'ng-dirty', currVal_30);
            this._expr_30 = currVal_30;
        }
        var currVal_31 = this._NgControlStatus_31_7.ngClassValid;
        if (import4.checkBinding(throwOnChange, this._expr_31, currVal_31)) {
            this.renderer.setElementClass(this._el_31, 'ng-valid', currVal_31);
            this._expr_31 = currVal_31;
        }
        var currVal_32 = this._NgControlStatus_31_7.ngClassInvalid;
        if (import4.checkBinding(throwOnChange, this._expr_32, currVal_32)) {
            this.renderer.setElementClass(this._el_31, 'ng-invalid', currVal_32);
            this._expr_32 = currVal_32;
        }
        var currVal_36 = this._RouterLinkWithHref_45_3.href;
        if (import4.checkBinding(throwOnChange, this._expr_36, currVal_36)) {
            this.renderer.setElementProperty(this._el_45, 'href', this.viewUtils.sanitizer.sanitize(import29.SecurityContext.URL, currVal_36));
            this._expr_36 = currVal_36;
        }
        this.detectViewChildrenChanges(throwOnChange);
    };
    _View_SigninComponent0.prototype.destroyInternal = function () {
        this._RouterLinkWithHref_45_3.ngOnDestroy();
    };
    _View_SigninComponent0.prototype._handle_ngSubmit_14_0 = function ($event) {
        this.markPathToRootAsCheckOnce();
        var pd_0 = (this.context.onSubmit() !== false);
        return (true && pd_0);
    };
    _View_SigninComponent0.prototype._handle_submit_14_1 = function ($event) {
        this.markPathToRootAsCheckOnce();
        var pd_0 = (this._FormGroupDirective_14_3.onSubmit() !== false);
        return (true && pd_0);
    };
    _View_SigninComponent0.prototype._handle_reset_14_2 = function ($event) {
        this.markPathToRootAsCheckOnce();
        var pd_0 = (this._FormGroupDirective_14_3.onReset() !== false);
        return (true && pd_0);
    };
    _View_SigninComponent0.prototype._handle_input_21_0 = function ($event) {
        this.markPathToRootAsCheckOnce();
        var pd_0 = (this._DefaultValueAccessor_21_3.onChange($event.target.value) !== false);
        return (true && pd_0);
    };
    _View_SigninComponent0.prototype._handle_blur_21_1 = function ($event) {
        this.markPathToRootAsCheckOnce();
        var pd_0 = (this._DefaultValueAccessor_21_3.onTouched() !== false);
        return (true && pd_0);
    };
    _View_SigninComponent0.prototype._handle_input_31_0 = function ($event) {
        this.markPathToRootAsCheckOnce();
        var pd_0 = (this._DefaultValueAccessor_31_3.onChange($event.target.value) !== false);
        return (true && pd_0);
    };
    _View_SigninComponent0.prototype._handle_blur_31_1 = function ($event) {
        this.markPathToRootAsCheckOnce();
        var pd_0 = (this._DefaultValueAccessor_31_3.onTouched() !== false);
        return (true && pd_0);
    };
    _View_SigninComponent0.prototype._handle_click_45_0 = function ($event) {
        this.markPathToRootAsCheckOnce();
        var pd_0 = (this._RouterLinkWithHref_45_3.onClick($event.button, $event.ctrlKey, $event.metaKey) !== false);
        return (true && pd_0);
    };
    return _View_SigninComponent0;
}(import1.AppView));
export function viewFactory_SigninComponent0(viewUtils, parentInjector, declarationEl) {
    if ((renderType_SigninComponent === null)) {
        (renderType_SigninComponent = viewUtils.createRenderComponentType('C:/Users/Silvia/OneDrive/Bakalárka/Project/assets/app/auth/signin/signin.component.html', 0, import11.ViewEncapsulation.None, styles_SigninComponent, {}));
    }
    return new _View_SigninComponent0(viewUtils, parentInjector, declarationEl);
}
var _View_SigninComponent1 = (function (_super) {
    __extends(_View_SigninComponent1, _super);
    function _View_SigninComponent1(viewUtils, parentInjector, declarationEl) {
        _super.call(this, _View_SigninComponent1, renderType_SigninComponent, import6.ViewType.EMBEDDED, viewUtils, parentInjector, declarationEl, import7.ChangeDetectorStatus.CheckAlways);
    }
    _View_SigninComponent1.prototype.createInternal = function (rootSelector) {
        this._el_0 = this.renderer.createElement(null, 'div', null);
        this.renderer.setElementAttribute(this._el_0, 'class', 'field-error');
        this._text_1 = this.renderer.createText(this._el_0, '\n                            Email has to be valid e.g. john@gmail.com.\n                        ', null);
        this.init([].concat([this._el_0]), [
            this._el_0,
            this._text_1
        ], [], []);
        return null;
    };
    return _View_SigninComponent1;
}(import1.AppView));
function viewFactory_SigninComponent1(viewUtils, parentInjector, declarationEl) {
    return new _View_SigninComponent1(viewUtils, parentInjector, declarationEl);
}
var _View_SigninComponent2 = (function (_super) {
    __extends(_View_SigninComponent2, _super);
    function _View_SigninComponent2(viewUtils, parentInjector, declarationEl) {
        _super.call(this, _View_SigninComponent2, renderType_SigninComponent, import6.ViewType.EMBEDDED, viewUtils, parentInjector, declarationEl, import7.ChangeDetectorStatus.CheckAlways);
    }
    _View_SigninComponent2.prototype.createInternal = function (rootSelector) {
        this._el_0 = this.renderer.createElement(null, 'div', null);
        this.renderer.setElementAttribute(this._el_0, 'class', 'field-error');
        this._text_1 = this.renderer.createText(this._el_0, '\n                            Field is required.\n                        ', null);
        this.init([].concat([this._el_0]), [
            this._el_0,
            this._text_1
        ], [], []);
        return null;
    };
    return _View_SigninComponent2;
}(import1.AppView));
function viewFactory_SigninComponent2(viewUtils, parentInjector, declarationEl) {
    return new _View_SigninComponent2(viewUtils, parentInjector, declarationEl);
}
