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
import * as import3 from './instance-stats.component';
import * as import4 from '@angular/core/src/linker/view_utils';
import * as import6 from '@angular/core/src/linker/view_type';
import * as import7 from '@angular/core/src/change_detection/change_detection';
import * as import8 from '../instance.service';
import * as import9 from '@angular/router/src/router_state';
import * as import10 from '@angular/core/src/metadata/view';
import * as import11 from '@angular/core/src/linker/component_factory';
import * as import12 from '@angular/common/src/directives/ng_if';
import * as import13 from '@angular/core/src/linker/template_ref';
import * as import14 from '../escape-html.pipe';
import * as import15 from '@angular/core/src/security';
var renderType_InstanceStatsComponent_Host = null;
var _View_InstanceStatsComponent_Host0 = (function (_super) {
    __extends(_View_InstanceStatsComponent_Host0, _super);
    function _View_InstanceStatsComponent_Host0(viewUtils, parentInjector, declarationEl) {
        _super.call(this, _View_InstanceStatsComponent_Host0, renderType_InstanceStatsComponent_Host, import6.ViewType.HOST, viewUtils, parentInjector, declarationEl, import7.ChangeDetectorStatus.CheckAlways);
    }
    _View_InstanceStatsComponent_Host0.prototype.createInternal = function (rootSelector) {
        this._el_0 = this.selectOrCreateHostElement('app-instance-stats', rootSelector, null);
        this._appEl_0 = new import2.AppElement(0, null, this, this._el_0);
        var compView_0 = viewFactory_InstanceStatsComponent0(this.viewUtils, this.injector(0), this._appEl_0);
        this._InstanceStatsComponent_0_4 = new import3.InstanceStatsComponent(this.parentInjector.get(import8.InstanceService), this.parentInjector.get(import9.ActivatedRoute));
        this._appEl_0.initComponent(this._InstanceStatsComponent_0_4, [], compView_0);
        compView_0.create(this._InstanceStatsComponent_0_4, this.projectableNodes, null);
        this.init([].concat([this._el_0]), [this._el_0], [], []);
        return this._appEl_0;
    };
    _View_InstanceStatsComponent_Host0.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import3.InstanceStatsComponent) && (0 === requestNodeIndex))) {
            return this._InstanceStatsComponent_0_4;
        }
        return notFoundResult;
    };
    _View_InstanceStatsComponent_Host0.prototype.detectChangesInternal = function (throwOnChange) {
        if (((this.numberOfChecks === 0) && !throwOnChange)) {
            this._InstanceStatsComponent_0_4.ngOnInit();
        }
        this.detectContentChildrenChanges(throwOnChange);
        this.detectViewChildrenChanges(throwOnChange);
    };
    _View_InstanceStatsComponent_Host0.prototype.destroyInternal = function () {
        this._InstanceStatsComponent_0_4.ngOnDestroy();
    };
    return _View_InstanceStatsComponent_Host0;
}(import1.AppView));
function viewFactory_InstanceStatsComponent_Host0(viewUtils, parentInjector, declarationEl) {
    if ((renderType_InstanceStatsComponent_Host === null)) {
        (renderType_InstanceStatsComponent_Host = viewUtils.createRenderComponentType('', 0, import10.ViewEncapsulation.None, [], {}));
    }
    return new _View_InstanceStatsComponent_Host0(viewUtils, parentInjector, declarationEl);
}
export var InstanceStatsComponentNgFactory = new import11.ComponentFactory('app-instance-stats', viewFactory_InstanceStatsComponent_Host0, import3.InstanceStatsComponent);
var styles_InstanceStatsComponent = [];
var renderType_InstanceStatsComponent = null;
var _View_InstanceStatsComponent0 = (function (_super) {
    __extends(_View_InstanceStatsComponent0, _super);
    function _View_InstanceStatsComponent0(viewUtils, parentInjector, declarationEl) {
        _super.call(this, _View_InstanceStatsComponent0, renderType_InstanceStatsComponent, import6.ViewType.COMPONENT, viewUtils, parentInjector, declarationEl, import7.ChangeDetectorStatus.CheckAlways);
    }
    _View_InstanceStatsComponent0.prototype.createInternal = function (rootSelector) {
        var parentRenderNode = this.renderer.createViewRoot(this.declarationAppElement.nativeElement);
        this._el_0 = this.renderer.createElement(parentRenderNode, 'div', null);
        this.renderer.setElementAttribute(this._el_0, 'class', 'col-md-8 col-md-offset-2');
        this._text_1 = this.renderer.createText(this._el_0, '\n     ', null);
        this._anchor_2 = this.renderer.createTemplateAnchor(this._el_0, null);
        this._appEl_2 = new import2.AppElement(2, 0, this, this._anchor_2);
        this._TemplateRef_2_5 = new import13.TemplateRef_(this._appEl_2, viewFactory_InstanceStatsComponent1);
        this._NgIf_2_6 = new import12.NgIf(this._appEl_2.vcRef, this._TemplateRef_2_5);
        this._text_3 = this.renderer.createText(this._el_0, '\n', null);
        this._text_4 = this.renderer.createText(parentRenderNode, '\n', null);
        this._expr_0 = import7.UNINITIALIZED;
        this.init([], [
            this._el_0,
            this._text_1,
            this._anchor_2,
            this._text_3,
            this._text_4
        ], [], []);
        return null;
    };
    _View_InstanceStatsComponent0.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import13.TemplateRef) && (2 === requestNodeIndex))) {
            return this._TemplateRef_2_5;
        }
        if (((token === import12.NgIf) && (2 === requestNodeIndex))) {
            return this._NgIf_2_6;
        }
        return notFoundResult;
    };
    _View_InstanceStatsComponent0.prototype.detectChangesInternal = function (throwOnChange) {
        var currVal_0 = this.context.instance;
        if (import4.checkBinding(throwOnChange, this._expr_0, currVal_0)) {
            this._NgIf_2_6.ngIf = currVal_0;
            this._expr_0 = currVal_0;
        }
        this.detectContentChildrenChanges(throwOnChange);
        this.detectViewChildrenChanges(throwOnChange);
    };
    return _View_InstanceStatsComponent0;
}(import1.AppView));
export function viewFactory_InstanceStatsComponent0(viewUtils, parentInjector, declarationEl) {
    if ((renderType_InstanceStatsComponent === null)) {
        (renderType_InstanceStatsComponent = viewUtils.createRenderComponentType('C:/Users/Silvia/OneDrive/Bakalárka/Project/assets/app/instances/instance-stats/instance-stats.component.html', 0, import10.ViewEncapsulation.None, styles_InstanceStatsComponent, {}));
    }
    return new _View_InstanceStatsComponent0(viewUtils, parentInjector, declarationEl);
}
var _View_InstanceStatsComponent1 = (function (_super) {
    __extends(_View_InstanceStatsComponent1, _super);
    function _View_InstanceStatsComponent1(viewUtils, parentInjector, declarationEl) {
        _super.call(this, _View_InstanceStatsComponent1, renderType_InstanceStatsComponent, import6.ViewType.EMBEDDED, viewUtils, parentInjector, declarationEl, import7.ChangeDetectorStatus.CheckAlways);
    }
    _View_InstanceStatsComponent1.prototype.createInternal = function (rootSelector) {
        this._el_0 = this.renderer.createElement(null, 'div', null);
        this._text_1 = this.renderer.createText(this._el_0, '\n          ', null);
        this._el_2 = this.renderer.createElement(this._el_0, 'div', null);
        this._text_3 = this.renderer.createText(this._el_0, '\n     ', null);
        this._pipe_escapeHtml_0 = new import14.EscapeHtmlPipe();
        this._expr_0 = import7.UNINITIALIZED;
        this.init([].concat([this._el_0]), [
            this._el_0,
            this._text_1,
            this._el_2,
            this._text_3
        ], [], []);
        return null;
    };
    _View_InstanceStatsComponent1.prototype.detectChangesInternal = function (throwOnChange) {
        var valUnwrapper = new import7.ValueUnwrapper();
        this.detectContentChildrenChanges(throwOnChange);
        valUnwrapper.reset();
        var currVal_0 = valUnwrapper.unwrap(this._pipe_escapeHtml_0.transform(this.parent.context.instance.stats));
        if ((valUnwrapper.hasWrappedValue || import4.checkBinding(throwOnChange, this._expr_0, currVal_0))) {
            this.renderer.setElementProperty(this._el_2, 'innerHTML', this.viewUtils.sanitizer.sanitize(import15.SecurityContext.HTML, currVal_0));
            this._expr_0 = currVal_0;
        }
        this.detectViewChildrenChanges(throwOnChange);
    };
    return _View_InstanceStatsComponent1;
}(import1.AppView));
function viewFactory_InstanceStatsComponent1(viewUtils, parentInjector, declarationEl) {
    return new _View_InstanceStatsComponent1(viewUtils, parentInjector, declarationEl);
}
