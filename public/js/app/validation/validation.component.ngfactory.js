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
import * as import3 from './validation.component';
import * as import4 from '@angular/core/src/linker/view_utils';
import * as import6 from '@angular/core/src/linker/view_type';
import * as import7 from '@angular/core/src/change_detection/change_detection';
import * as import8 from '../shared/solution.service';
import * as import9 from '../shared/session-storage.service';
import * as import10 from '../flash-message/flash-messages.service';
import * as import11 from '@angular/core/src/metadata/view';
import * as import12 from '@angular/core/src/linker/component_factory';
import * as import13 from '@angular/core/src/linker/query_list';
import * as import14 from '@angular/router/src/directives/router_link';
import * as import15 from '@angular/common/src/directives/ng_if';
import * as import16 from '@angular/router/src/router';
import * as import17 from '@angular/router/src/router_state';
import * as import18 from '@angular/common/src/location/location_strategy';
import * as import19 from '@angular/core/src/linker/template_ref';
import * as import20 from '@angular/core/src/linker/element_ref';
import * as import21 from './success-validation/success-validation.component';
import * as import22 from './success-validation/success-validation.component.ngfactory';
var renderType_ValidationComponent_Host = null;
var _View_ValidationComponent_Host0 = (function (_super) {
    __extends(_View_ValidationComponent_Host0, _super);
    function _View_ValidationComponent_Host0(viewUtils, parentInjector, declarationEl) {
        _super.call(this, _View_ValidationComponent_Host0, renderType_ValidationComponent_Host, import6.ViewType.HOST, viewUtils, parentInjector, declarationEl, import7.ChangeDetectorStatus.CheckAlways);
    }
    _View_ValidationComponent_Host0.prototype.createInternal = function (rootSelector) {
        this._el_0 = this.selectOrCreateHostElement('app-validation', rootSelector, null);
        this._appEl_0 = new import2.AppElement(0, null, this, this._el_0);
        var compView_0 = viewFactory_ValidationComponent0(this.viewUtils, this.injector(0), this._appEl_0);
        this._ValidationComponent_0_4 = new import3.ValidationComponent(this.parentInjector.get(import8.SolutionService), this.parentInjector.get(import9.SessionStorageService), this.parentInjector.get(import10.FlashMessageService));
        this._appEl_0.initComponent(this._ValidationComponent_0_4, [], compView_0);
        compView_0.create(this._ValidationComponent_0_4, this.projectableNodes, null);
        this.init([].concat([this._el_0]), [this._el_0], [], []);
        return this._appEl_0;
    };
    _View_ValidationComponent_Host0.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import3.ValidationComponent) && (0 === requestNodeIndex))) {
            return this._ValidationComponent_0_4;
        }
        return notFoundResult;
    };
    _View_ValidationComponent_Host0.prototype.detectChangesInternal = function (throwOnChange) {
        if (((this.numberOfChecks === 0) && !throwOnChange)) {
            this._ValidationComponent_0_4.ngOnInit();
        }
        this.detectContentChildrenChanges(throwOnChange);
        this.detectViewChildrenChanges(throwOnChange);
    };
    return _View_ValidationComponent_Host0;
}(import1.AppView));
function viewFactory_ValidationComponent_Host0(viewUtils, parentInjector, declarationEl) {
    if ((renderType_ValidationComponent_Host === null)) {
        (renderType_ValidationComponent_Host = viewUtils.createRenderComponentType('', 0, import11.ViewEncapsulation.None, [], {}));
    }
    return new _View_ValidationComponent_Host0(viewUtils, parentInjector, declarationEl);
}
export var ValidationComponentNgFactory = new import12.ComponentFactory('app-validation', viewFactory_ValidationComponent_Host0, import3.ValidationComponent);
var styles_ValidationComponent = [];
var renderType_ValidationComponent = null;
var _View_ValidationComponent0 = (function (_super) {
    __extends(_View_ValidationComponent0, _super);
    function _View_ValidationComponent0(viewUtils, parentInjector, declarationEl) {
        _super.call(this, _View_ValidationComponent0, renderType_ValidationComponent, import6.ViewType.COMPONENT, viewUtils, parentInjector, declarationEl, import7.ChangeDetectorStatus.CheckAlways);
    }
    _View_ValidationComponent0.prototype.createInternal = function (rootSelector) {
        var parentRenderNode = this.renderer.createViewRoot(this.declarationAppElement.nativeElement);
        this._viewQuery_solution_0 = new import13.QueryList();
        this._el_0 = this.renderer.createElement(parentRenderNode, 'button', null);
        this.renderer.setElementAttribute(this._el_0, 'data-target', '#notViewValidation');
        this.renderer.setElementAttribute(this._el_0, 'data-toggle', 'modal');
        this.renderer.setElementAttribute(this._el_0, 'id', 'openModalNotView');
        this._text_1 = this.renderer.createText(parentRenderNode, '\n\n', null);
        this._el_2 = this.renderer.createElement(parentRenderNode, 'div', null);
        this.renderer.setElementAttribute(this._el_2, 'aria-hidden', 'true');
        this.renderer.setElementAttribute(this._el_2, 'class', 'modal fade');
        this.renderer.setElementAttribute(this._el_2, 'id', 'notViewValidation');
        this.renderer.setElementAttribute(this._el_2, 'role', 'dialog');
        this.renderer.setElementAttribute(this._el_2, 'tabindex', '-1');
        this._text_3 = this.renderer.createText(this._el_2, '\n    ', null);
        this._el_4 = this.renderer.createElement(this._el_2, 'div', null);
        this.renderer.setElementAttribute(this._el_4, 'class', 'modal-dialog');
        this.renderer.setElementAttribute(this._el_4, 'role', 'document');
        this._text_5 = this.renderer.createText(this._el_4, '\n        ', null);
        this._el_6 = this.renderer.createElement(this._el_4, 'div', null);
        this.renderer.setElementAttribute(this._el_6, 'class', 'modal-content');
        this._text_7 = this.renderer.createText(this._el_6, '\n            ', null);
        this._el_8 = this.renderer.createElement(this._el_6, 'div', null);
        this.renderer.setElementAttribute(this._el_8, 'class', 'modal-body');
        this.renderer.setElementAttribute(this._el_8, 'style', 'text-align: center; padding: 5% 0 5% 0');
        this._text_9 = this.renderer.createText(this._el_8, '\n                You must be registered and logged in to validate and insert solution.\n            ', null);
        this._text_10 = this.renderer.createText(this._el_6, '\n            ', null);
        this._el_11 = this.renderer.createElement(this._el_6, 'div', null);
        this.renderer.setElementAttribute(this._el_11, 'class', 'modal-footer');
        this._text_12 = this.renderer.createText(this._el_11, '\n                ', null);
        this._el_13 = this.renderer.createElement(this._el_11, 'button', null);
        this.renderer.setElementAttribute(this._el_13, 'class', 'btn btn-primary');
        this.renderer.setElementAttribute(this._el_13, 'data-dismiss', 'modal');
        this.renderer.setElementAttribute(this._el_13, 'type', 'button');
        this._RouterLink_13_3 = new import14.RouterLink(this.parentInjector.get(import16.Router), this.parentInjector.get(import17.ActivatedRoute), this.parentInjector.get(import18.LocationStrategy));
        this._text_14 = this.renderer.createText(this._el_13, 'Log in', null);
        this._text_15 = this.renderer.createText(this._el_11, '\n            ', null);
        this._text_16 = this.renderer.createText(this._el_6, '\n        ', null);
        this._text_17 = this.renderer.createText(this._el_4, '\n    ', null);
        this._text_18 = this.renderer.createText(this._el_2, '\n', null);
        this._text_19 = this.renderer.createText(parentRenderNode, '\n\n', null);
        this._el_20 = this.renderer.createElement(parentRenderNode, 'div', null);
        this.renderer.setElementAttribute(this._el_20, 'class', 'container');
        this.renderer.setElementAttribute(this._el_20, 'style', 'margin-top: 3%');
        this._text_21 = this.renderer.createText(this._el_20, '\n    ', null);
        this._el_22 = this.renderer.createElement(this._el_20, 'div', null);
        this.renderer.setElementAttribute(this._el_22, 'class', 'row');
        this._text_23 = this.renderer.createText(this._el_22, '\n        ', null);
        this._anchor_24 = this.renderer.createTemplateAnchor(this._el_22, null);
        this._appEl_24 = new import2.AppElement(24, 22, this, this._anchor_24);
        this._TemplateRef_24_5 = new import19.TemplateRef_(this._appEl_24, viewFactory_ValidationComponent1);
        this._NgIf_24_6 = new import15.NgIf(this._appEl_24.vcRef, this._TemplateRef_24_5);
        this._text_25 = this.renderer.createText(this._el_22, '\n    ', null);
        this._text_26 = this.renderer.createText(this._el_20, '\n', null);
        this._expr_0 = import7.UNINITIALIZED;
        var disposable_0 = this.renderer.listen(this._el_13, 'click', this.eventHandler(this._handle_click_13_0.bind(this)));
        this._arr_0 = import4.pureProxy1(function (p0) {
            return [p0];
        });
        this._expr_2 = import7.UNINITIALIZED;
        this._expr_3 = import7.UNINITIALIZED;
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
            this._text_10,
            this._el_11,
            this._text_12,
            this._el_13,
            this._text_14,
            this._text_15,
            this._text_16,
            this._text_17,
            this._text_18,
            this._text_19,
            this._el_20,
            this._text_21,
            this._el_22,
            this._text_23,
            this._anchor_24,
            this._text_25,
            this._text_26
        ], [disposable_0], []);
        return null;
    };
    _View_ValidationComponent0.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import14.RouterLink) && ((13 <= requestNodeIndex) && (requestNodeIndex <= 14)))) {
            return this._RouterLink_13_3;
        }
        if (((token === import19.TemplateRef) && (24 === requestNodeIndex))) {
            return this._TemplateRef_24_5;
        }
        if (((token === import15.NgIf) && (24 === requestNodeIndex))) {
            return this._NgIf_24_6;
        }
        return notFoundResult;
    };
    _View_ValidationComponent0.prototype.detectChangesInternal = function (throwOnChange) {
        var currVal_2 = this._arr_0('/signin');
        if (import4.checkBinding(throwOnChange, this._expr_2, currVal_2)) {
            this._RouterLink_13_3.routerLink = currVal_2;
            this._expr_2 = currVal_2;
        }
        var currVal_3 = this.context.showValidator();
        if (import4.checkBinding(throwOnChange, this._expr_3, currVal_3)) {
            this._NgIf_24_6.ngIf = currVal_3;
            this._expr_3 = currVal_3;
        }
        this.detectContentChildrenChanges(throwOnChange);
        var currVal_0 = true;
        if (import4.checkBinding(throwOnChange, this._expr_0, currVal_0)) {
            this.renderer.setElementProperty(this._el_0, 'hidden', currVal_0);
            this._expr_0 = currVal_0;
        }
        this.detectViewChildrenChanges(throwOnChange);
        if (!throwOnChange) {
            if (this._viewQuery_solution_0.dirty) {
                this._viewQuery_solution_0.reset([this._appEl_24.mapNestedViews(_View_ValidationComponent1, function (nestedView) {
                        return [new import20.ElementRef(nestedView._el_14)];
                    })]);
                this.context.solutionElem = this._viewQuery_solution_0.first;
            }
        }
    };
    _View_ValidationComponent0.prototype._handle_click_13_0 = function ($event) {
        this.markPathToRootAsCheckOnce();
        var pd_0 = (this._RouterLink_13_3.onClick($event.button, $event.ctrlKey, $event.metaKey) !== false);
        return (true && pd_0);
    };
    return _View_ValidationComponent0;
}(import1.AppView));
export function viewFactory_ValidationComponent0(viewUtils, parentInjector, declarationEl) {
    if ((renderType_ValidationComponent === null)) {
        (renderType_ValidationComponent = viewUtils.createRenderComponentType('C:/Users/Silvia/OneDrive/Bc/web-competition/assets/app/validation/validation.component.html', 0, import11.ViewEncapsulation.None, styles_ValidationComponent, {}));
    }
    return new _View_ValidationComponent0(viewUtils, parentInjector, declarationEl);
}
var _View_ValidationComponent1 = (function (_super) {
    __extends(_View_ValidationComponent1, _super);
    function _View_ValidationComponent1(viewUtils, parentInjector, declarationEl) {
        _super.call(this, _View_ValidationComponent1, renderType_ValidationComponent, import6.ViewType.EMBEDDED, viewUtils, parentInjector, declarationEl, import7.ChangeDetectorStatus.CheckAlways);
    }
    _View_ValidationComponent1.prototype.createInternal = function (rootSelector) {
        this._el_0 = this.renderer.createElement(null, 'div', null);
        this._text_1 = this.renderer.createText(this._el_0, '\n            ', null);
        this._el_2 = this.renderer.createElement(this._el_0, 'div', null);
        this.renderer.setElementAttribute(this._el_2, 'class', 'col-xs-12 col-md-6 col-md-offset-3');
        this._text_3 = this.renderer.createText(this._el_2, '\n                ', null);
        this._el_4 = this.renderer.createElement(this._el_2, 'div', null);
        this.renderer.setElementAttribute(this._el_4, 'class', 'jumbotron ');
        this._text_5 = this.renderer.createText(this._el_4, '\n                    ', null);
        this._el_6 = this.renderer.createElement(this._el_4, 'div', null);
        this.renderer.setElementAttribute(this._el_6, 'class', 'text-center');
        this._text_7 = this.renderer.createText(this._el_6, '\n                        ', null);
        this._el_8 = this.renderer.createElement(this._el_6, 'h2', null);
        this._text_9 = this.renderer.createText(this._el_8, 'Validate solution', null);
        this._text_10 = this.renderer.createText(this._el_6, '\n                    ', null);
        this._text_11 = this.renderer.createText(this._el_4, '\n                    ', null);
        this._el_12 = this.renderer.createElement(this._el_4, 'div', null);
        this._text_13 = this.renderer.createText(this._el_12, '\n                        ', null);
        this._el_14 = this.renderer.createElement(this._el_12, 'input', null);
        this.renderer.setElementAttribute(this._el_14, 'type', 'file');
        this._text_15 = this.renderer.createText(this._el_12, '\n                    ', null);
        this._text_16 = this.renderer.createText(this._el_4, '\n                    ', null);
        this._el_17 = this.renderer.createElement(this._el_4, 'div', null);
        this.renderer.setElementAttribute(this._el_17, 'align', 'right');
        this._text_18 = this.renderer.createText(this._el_17, '\n                        ', null);
        this._el_19 = this.renderer.createElement(this._el_17, 'button', null);
        this.renderer.setElementAttribute(this._el_19, 'class', 'btn btn-primary btn-s');
        this._text_20 = this.renderer.createText(this._el_19, 'Validate', null);
        this._text_21 = this.renderer.createText(this._el_17, '\n                    ', null);
        this._text_22 = this.renderer.createText(this._el_4, '\n                ', null);
        this._text_23 = this.renderer.createText(this._el_2, '\n            ', null);
        this._text_24 = this.renderer.createText(this._el_0, '\n            ', null);
        this._el_25 = this.renderer.createElement(this._el_0, 'div', null);
        this._text_26 = this.renderer.createText(this._el_25, '\n                ', null);
        this._el_27 = this.renderer.createElement(this._el_25, 'app-success-validation', null);
        this._appEl_27 = new import2.AppElement(27, 25, this, this._el_27);
        var compView_27 = import22.viewFactory_SuccessValidationComponent0(this.viewUtils, this.injector(27), this._appEl_27);
        this._SuccessValidationComponent_27_4 = new import21.SuccessValidationComponent(this.parent.parentInjector.get(import8.SolutionService), this.parent.parentInjector.get(import9.SessionStorageService), this.parent.parentInjector.get(import10.FlashMessageService));
        this._appEl_27.initComponent(this._SuccessValidationComponent_27_4, [], compView_27);
        compView_27.create(this._SuccessValidationComponent_27_4, [], null);
        this._text_28 = this.renderer.createText(this._el_25, '\n            ', null);
        this._text_29 = this.renderer.createText(this._el_0, '\n        ', null);
        var disposable_0 = this.renderer.listen(this._el_19, 'click', this.eventHandler(this._handle_click_19_0.bind(this)));
        this.init([].concat([this._el_0]), [
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
            this._text_10,
            this._text_11,
            this._el_12,
            this._text_13,
            this._el_14,
            this._text_15,
            this._text_16,
            this._el_17,
            this._text_18,
            this._el_19,
            this._text_20,
            this._text_21,
            this._text_22,
            this._text_23,
            this._text_24,
            this._el_25,
            this._text_26,
            this._el_27,
            this._text_28,
            this._text_29
        ], [disposable_0], []);
        return null;
    };
    _View_ValidationComponent1.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import21.SuccessValidationComponent) && (27 === requestNodeIndex))) {
            return this._SuccessValidationComponent_27_4;
        }
        return notFoundResult;
    };
    _View_ValidationComponent1.prototype.detectChangesInternal = function (throwOnChange) {
        if (((this.numberOfChecks === 0) && !throwOnChange)) {
            this._SuccessValidationComponent_27_4.ngOnInit();
        }
        this.detectContentChildrenChanges(throwOnChange);
        this.detectViewChildrenChanges(throwOnChange);
    };
    _View_ValidationComponent1.prototype.dirtyParentQueriesInternal = function () {
        this.parent._viewQuery_solution_0.setDirty();
    };
    _View_ValidationComponent1.prototype.destroyInternal = function () {
        this._SuccessValidationComponent_27_4.ngOnDestroy();
    };
    _View_ValidationComponent1.prototype._handle_click_19_0 = function ($event) {
        this.markPathToRootAsCheckOnce();
        var pd_0 = (this.parent.context.onValidate() !== false);
        return (true && pd_0);
    };
    return _View_ValidationComponent1;
}(import1.AppView));
function viewFactory_ValidationComponent1(viewUtils, parentInjector, declarationEl) {
    return new _View_ValidationComponent1(viewUtils, parentInjector, declarationEl);
}
