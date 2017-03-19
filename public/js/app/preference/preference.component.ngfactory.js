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
import * as import3 from './preference.component';
import * as import4 from '@angular/core/src/linker/view_utils';
import * as import6 from '@angular/core/src/linker/view_type';
import * as import7 from '@angular/core/src/change_detection/change_detection';
import * as import8 from './preference.service';
import * as import9 from '../shared/session-storage.service';
import * as import10 from '@angular/core/src/metadata/view';
import * as import11 from '@angular/core/src/linker/component_factory';
import * as import12 from './preference.component.css.shim';
import * as import13 from '@angular/common/src/directives/ng_if';
import * as import14 from '@angular/core/src/linker/template_ref';
var renderType_PreferenceComponent_Host = null;
var _View_PreferenceComponent_Host0 = (function (_super) {
    __extends(_View_PreferenceComponent_Host0, _super);
    function _View_PreferenceComponent_Host0(viewUtils, parentInjector, declarationEl) {
        _super.call(this, _View_PreferenceComponent_Host0, renderType_PreferenceComponent_Host, import6.ViewType.HOST, viewUtils, parentInjector, declarationEl, import7.ChangeDetectorStatus.CheckAlways);
    }
    _View_PreferenceComponent_Host0.prototype.createInternal = function (rootSelector) {
        this._el_0 = this.selectOrCreateHostElement('app-preference', rootSelector, null);
        this._appEl_0 = new import2.AppElement(0, null, this, this._el_0);
        var compView_0 = viewFactory_PreferenceComponent0(this.viewUtils, this.injector(0), this._appEl_0);
        this._PreferenceComponent_0_4 = new import3.PreferenceComponent(this.parentInjector.get(import8.PreferenceService), this.parentInjector.get(import9.SessionStorageService));
        this._appEl_0.initComponent(this._PreferenceComponent_0_4, [], compView_0);
        compView_0.create(this._PreferenceComponent_0_4, this.projectableNodes, null);
        this.init([].concat([this._el_0]), [this._el_0], [], []);
        return this._appEl_0;
    };
    _View_PreferenceComponent_Host0.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import3.PreferenceComponent) && (0 === requestNodeIndex))) {
            return this._PreferenceComponent_0_4;
        }
        return notFoundResult;
    };
    _View_PreferenceComponent_Host0.prototype.detectChangesInternal = function (throwOnChange) {
        if (((this.numberOfChecks === 0) && !throwOnChange)) {
            this._PreferenceComponent_0_4.ngOnInit();
        }
        this.detectContentChildrenChanges(throwOnChange);
        this.detectViewChildrenChanges(throwOnChange);
    };
    return _View_PreferenceComponent_Host0;
}(import1.AppView));
function viewFactory_PreferenceComponent_Host0(viewUtils, parentInjector, declarationEl) {
    if ((renderType_PreferenceComponent_Host === null)) {
        (renderType_PreferenceComponent_Host = viewUtils.createRenderComponentType('', 0, import10.ViewEncapsulation.None, [], {}));
    }
    return new _View_PreferenceComponent_Host0(viewUtils, parentInjector, declarationEl);
}
export var PreferenceComponentNgFactory = new import11.ComponentFactory('app-preference', viewFactory_PreferenceComponent_Host0, import3.PreferenceComponent);
var styles_PreferenceComponent = [import12.styles];
var renderType_PreferenceComponent = null;
var _View_PreferenceComponent0 = (function (_super) {
    __extends(_View_PreferenceComponent0, _super);
    function _View_PreferenceComponent0(viewUtils, parentInjector, declarationEl) {
        _super.call(this, _View_PreferenceComponent0, renderType_PreferenceComponent, import6.ViewType.COMPONENT, viewUtils, parentInjector, declarationEl, import7.ChangeDetectorStatus.CheckAlways);
    }
    _View_PreferenceComponent0.prototype.createInternal = function (rootSelector) {
        var parentRenderNode = this.renderer.createViewRoot(this.declarationAppElement.nativeElement);
        this._el_0 = this.renderer.createElement(parentRenderNode, 'div', null);
        this.renderer.setElementAttribute(this._el_0, 'class', 'container');
        this.renderer.setElementAttribute(this._el_0, 'style', 'margin-top: 3%');
        this._text_1 = this.renderer.createText(this._el_0, '\n    ', null);
        this._el_2 = this.renderer.createElement(this._el_0, 'div', null);
        this.renderer.setElementAttribute(this._el_2, 'class', 'row');
        this._text_3 = this.renderer.createText(this._el_2, '\n        ', null);
        this._el_4 = this.renderer.createElement(this._el_2, 'div', null);
        this.renderer.setElementAttribute(this._el_4, 'style', 'margin-bottom: 3%');
        this._text_5 = this.renderer.createText(this._el_4, '\n            ', null);
        this._el_6 = this.renderer.createElement(this._el_4, 'h2', null);
        this._text_7 = this.renderer.createText(this._el_6, 'Preference', null);
        this._text_8 = this.renderer.createText(this._el_4, '\n        ', null);
        this._text_9 = this.renderer.createText(this._el_2, '\n        ', null);
        this._el_10 = this.renderer.createElement(this._el_2, 'div', null);
        this.renderer.setElementAttribute(this._el_10, 'class', 'col-xs-9 col-md-2');
        this.renderer.setElementAttribute(this._el_10, 'style', 'display: table; height: 20px; overflow: hidden;');
        this._text_11 = this.renderer.createText(this._el_10, '\n            ', null);
        this._anchor_12 = this.renderer.createTemplateAnchor(this._el_10, null);
        this._appEl_12 = new import2.AppElement(12, 10, this, this._anchor_12);
        this._TemplateRef_12_5 = new import14.TemplateRef_(this._appEl_12, viewFactory_PreferenceComponent1);
        this._NgIf_12_6 = new import13.NgIf(this._appEl_12.vcRef, this._TemplateRef_12_5);
        this._text_13 = this.renderer.createText(this._el_10, '\n            ', null);
        this._anchor_14 = this.renderer.createTemplateAnchor(this._el_10, null);
        this._appEl_14 = new import2.AppElement(14, 10, this, this._anchor_14);
        this._TemplateRef_14_5 = new import14.TemplateRef_(this._appEl_14, viewFactory_PreferenceComponent2);
        this._NgIf_14_6 = new import13.NgIf(this._appEl_14.vcRef, this._TemplateRef_14_5);
        this._text_15 = this.renderer.createText(this._el_10, '\n        ', null);
        this._text_16 = this.renderer.createText(this._el_2, '\n        ', null);
        this._el_17 = this.renderer.createElement(this._el_2, 'div', null);
        this.renderer.setElementAttribute(this._el_17, 'class', 'col-xs-3 col-md-10');
        this._text_18 = this.renderer.createText(this._el_17, '\n            ', null);
        this._anchor_19 = this.renderer.createTemplateAnchor(this._el_17, null);
        this._appEl_19 = new import2.AppElement(19, 17, this, this._anchor_19);
        this._TemplateRef_19_5 = new import14.TemplateRef_(this._appEl_19, viewFactory_PreferenceComponent3);
        this._NgIf_19_6 = new import13.NgIf(this._appEl_19.vcRef, this._TemplateRef_19_5);
        this._text_20 = this.renderer.createText(this._el_17, '\n            ', null);
        this._anchor_21 = this.renderer.createTemplateAnchor(this._el_17, null);
        this._appEl_21 = new import2.AppElement(21, 17, this, this._anchor_21);
        this._TemplateRef_21_5 = new import14.TemplateRef_(this._appEl_21, viewFactory_PreferenceComponent4);
        this._NgIf_21_6 = new import13.NgIf(this._appEl_21.vcRef, this._TemplateRef_21_5);
        this._text_22 = this.renderer.createText(this._el_17, '\n        ', null);
        this._text_23 = this.renderer.createText(this._el_2, '\n    ', null);
        this._text_24 = this.renderer.createText(this._el_0, '\n', null);
        this._expr_0 = import7.UNINITIALIZED;
        this._expr_1 = import7.UNINITIALIZED;
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
            this._text_8,
            this._text_9,
            this._el_10,
            this._text_11,
            this._anchor_12,
            this._text_13,
            this._anchor_14,
            this._text_15,
            this._text_16,
            this._el_17,
            this._text_18,
            this._anchor_19,
            this._text_20,
            this._anchor_21,
            this._text_22,
            this._text_23,
            this._text_24
        ], [], []);
        return null;
    };
    _View_PreferenceComponent0.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import14.TemplateRef) && (12 === requestNodeIndex))) {
            return this._TemplateRef_12_5;
        }
        if (((token === import13.NgIf) && (12 === requestNodeIndex))) {
            return this._NgIf_12_6;
        }
        if (((token === import14.TemplateRef) && (14 === requestNodeIndex))) {
            return this._TemplateRef_14_5;
        }
        if (((token === import13.NgIf) && (14 === requestNodeIndex))) {
            return this._NgIf_14_6;
        }
        if (((token === import14.TemplateRef) && (19 === requestNodeIndex))) {
            return this._TemplateRef_19_5;
        }
        if (((token === import13.NgIf) && (19 === requestNodeIndex))) {
            return this._NgIf_19_6;
        }
        if (((token === import14.TemplateRef) && (21 === requestNodeIndex))) {
            return this._TemplateRef_21_5;
        }
        if (((token === import13.NgIf) && (21 === requestNodeIndex))) {
            return this._NgIf_21_6;
        }
        return notFoundResult;
    };
    _View_PreferenceComponent0.prototype.detectChangesInternal = function (throwOnChange) {
        var currVal_0 = this.context.isCompetitionOn();
        if (import4.checkBinding(throwOnChange, this._expr_0, currVal_0)) {
            this._NgIf_12_6.ngIf = currVal_0;
            this._expr_0 = currVal_0;
        }
        var currVal_1 = !this.context.isCompetitionOn();
        if (import4.checkBinding(throwOnChange, this._expr_1, currVal_1)) {
            this._NgIf_14_6.ngIf = currVal_1;
            this._expr_1 = currVal_1;
        }
        var currVal_2 = this.context.isCompetitionOn();
        if (import4.checkBinding(throwOnChange, this._expr_2, currVal_2)) {
            this._NgIf_19_6.ngIf = currVal_2;
            this._expr_2 = currVal_2;
        }
        var currVal_3 = !this.context.isCompetitionOn();
        if (import4.checkBinding(throwOnChange, this._expr_3, currVal_3)) {
            this._NgIf_21_6.ngIf = currVal_3;
            this._expr_3 = currVal_3;
        }
        this.detectContentChildrenChanges(throwOnChange);
        this.detectViewChildrenChanges(throwOnChange);
    };
    return _View_PreferenceComponent0;
}(import1.AppView));
export function viewFactory_PreferenceComponent0(viewUtils, parentInjector, declarationEl) {
    if ((renderType_PreferenceComponent === null)) {
        (renderType_PreferenceComponent = viewUtils.createRenderComponentType('C:/Users/Silvia/OneDrive/Bakalárka/Project/assets/app/preference/preference.component.html', 0, import10.ViewEncapsulation.Emulated, styles_PreferenceComponent, {}));
    }
    return new _View_PreferenceComponent0(viewUtils, parentInjector, declarationEl);
}
var _View_PreferenceComponent1 = (function (_super) {
    __extends(_View_PreferenceComponent1, _super);
    function _View_PreferenceComponent1(viewUtils, parentInjector, declarationEl) {
        _super.call(this, _View_PreferenceComponent1, renderType_PreferenceComponent, import6.ViewType.EMBEDDED, viewUtils, parentInjector, declarationEl, import7.ChangeDetectorStatus.CheckAlways);
    }
    _View_PreferenceComponent1.prototype.createInternal = function (rootSelector) {
        this._el_0 = this.renderer.createElement(null, 'div', null);
        this.renderer.setElementAttribute(this._el_0, 'style', 'display: table-cell; vertical-align: middle;');
        this._text_1 = this.renderer.createText(this._el_0, 'Competition is on', null);
        this.init([].concat([this._el_0]), [
            this._el_0,
            this._text_1
        ], [], []);
        return null;
    };
    return _View_PreferenceComponent1;
}(import1.AppView));
function viewFactory_PreferenceComponent1(viewUtils, parentInjector, declarationEl) {
    return new _View_PreferenceComponent1(viewUtils, parentInjector, declarationEl);
}
var _View_PreferenceComponent2 = (function (_super) {
    __extends(_View_PreferenceComponent2, _super);
    function _View_PreferenceComponent2(viewUtils, parentInjector, declarationEl) {
        _super.call(this, _View_PreferenceComponent2, renderType_PreferenceComponent, import6.ViewType.EMBEDDED, viewUtils, parentInjector, declarationEl, import7.ChangeDetectorStatus.CheckAlways);
    }
    _View_PreferenceComponent2.prototype.createInternal = function (rootSelector) {
        this._el_0 = this.renderer.createElement(null, 'div', null);
        this.renderer.setElementAttribute(this._el_0, 'style', 'display: table-cell; vertical-align: middle;');
        this._text_1 = this.renderer.createText(this._el_0, 'Competition is off', null);
        this.init([].concat([this._el_0]), [
            this._el_0,
            this._text_1
        ], [], []);
        return null;
    };
    return _View_PreferenceComponent2;
}(import1.AppView));
function viewFactory_PreferenceComponent2(viewUtils, parentInjector, declarationEl) {
    return new _View_PreferenceComponent2(viewUtils, parentInjector, declarationEl);
}
var _View_PreferenceComponent3 = (function (_super) {
    __extends(_View_PreferenceComponent3, _super);
    function _View_PreferenceComponent3(viewUtils, parentInjector, declarationEl) {
        _super.call(this, _View_PreferenceComponent3, renderType_PreferenceComponent, import6.ViewType.EMBEDDED, viewUtils, parentInjector, declarationEl, import7.ChangeDetectorStatus.CheckAlways);
    }
    _View_PreferenceComponent3.prototype.createInternal = function (rootSelector) {
        this._el_0 = this.renderer.createElement(null, 'button', null);
        this.renderer.setElementAttribute(this._el_0, 'class', 'btn btn-danger btn-xs');
        this._el_1 = this.renderer.createElement(this._el_0, 'span', null);
        this.renderer.setElementAttribute(this._el_1, 'class', 'glyphicon glyphicon-off');
        var disposable_0 = this.renderer.listen(this._el_0, 'click', this.eventHandler(this._handle_click_0_0.bind(this)));
        this.init([].concat([this._el_0]), [
            this._el_0,
            this._el_1
        ], [disposable_0], []);
        return null;
    };
    _View_PreferenceComponent3.prototype._handle_click_0_0 = function ($event) {
        this.markPathToRootAsCheckOnce();
        var pd_0 = (this.parent.context.onTurnOff() !== false);
        return (true && pd_0);
    };
    return _View_PreferenceComponent3;
}(import1.AppView));
function viewFactory_PreferenceComponent3(viewUtils, parentInjector, declarationEl) {
    return new _View_PreferenceComponent3(viewUtils, parentInjector, declarationEl);
}
var _View_PreferenceComponent4 = (function (_super) {
    __extends(_View_PreferenceComponent4, _super);
    function _View_PreferenceComponent4(viewUtils, parentInjector, declarationEl) {
        _super.call(this, _View_PreferenceComponent4, renderType_PreferenceComponent, import6.ViewType.EMBEDDED, viewUtils, parentInjector, declarationEl, import7.ChangeDetectorStatus.CheckAlways);
    }
    _View_PreferenceComponent4.prototype.createInternal = function (rootSelector) {
        this._el_0 = this.renderer.createElement(null, 'button', null);
        this.renderer.setElementAttribute(this._el_0, 'class', 'btn btn-success btn-xs');
        this._el_1 = this.renderer.createElement(this._el_0, 'span', null);
        this.renderer.setElementAttribute(this._el_1, 'class', 'glyphicon glyphicon-off');
        var disposable_0 = this.renderer.listen(this._el_0, 'click', this.eventHandler(this._handle_click_0_0.bind(this)));
        this.init([].concat([this._el_0]), [
            this._el_0,
            this._el_1
        ], [disposable_0], []);
        return null;
    };
    _View_PreferenceComponent4.prototype._handle_click_0_0 = function ($event) {
        this.markPathToRootAsCheckOnce();
        var pd_0 = (this.parent.context.onTurnOn() !== false);
        return (true && pd_0);
    };
    return _View_PreferenceComponent4;
}(import1.AppView));
function viewFactory_PreferenceComponent4(viewUtils, parentInjector, declarationEl) {
    return new _View_PreferenceComponent4(viewUtils, parentInjector, declarationEl);
}
