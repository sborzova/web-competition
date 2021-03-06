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
import * as import3 from './home.component';
import * as import6 from '@angular/core/src/linker/view_type';
import * as import7 from '@angular/core/src/change_detection/change_detection';
import * as import8 from '@angular/core/src/metadata/view';
import * as import9 from '@angular/core/src/linker/component_factory';
var renderType_HomeComponent_Host = null;
var _View_HomeComponent_Host0 = (function (_super) {
    __extends(_View_HomeComponent_Host0, _super);
    function _View_HomeComponent_Host0(viewUtils, parentInjector, declarationEl) {
        _super.call(this, _View_HomeComponent_Host0, renderType_HomeComponent_Host, import6.ViewType.HOST, viewUtils, parentInjector, declarationEl, import7.ChangeDetectorStatus.CheckAlways);
    }
    _View_HomeComponent_Host0.prototype.createInternal = function (rootSelector) {
        this._el_0 = this.selectOrCreateHostElement('app-home', rootSelector, null);
        this._appEl_0 = new import2.AppElement(0, null, this, this._el_0);
        var compView_0 = viewFactory_HomeComponent0(this.viewUtils, this.injector(0), this._appEl_0);
        this._HomeComponent_0_4 = new import3.HomeComponent();
        this._appEl_0.initComponent(this._HomeComponent_0_4, [], compView_0);
        compView_0.create(this._HomeComponent_0_4, this.projectableNodes, null);
        this.init([].concat([this._el_0]), [this._el_0], [], []);
        return this._appEl_0;
    };
    _View_HomeComponent_Host0.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import3.HomeComponent) && (0 === requestNodeIndex))) {
            return this._HomeComponent_0_4;
        }
        return notFoundResult;
    };
    return _View_HomeComponent_Host0;
}(import1.AppView));
function viewFactory_HomeComponent_Host0(viewUtils, parentInjector, declarationEl) {
    if ((renderType_HomeComponent_Host === null)) {
        (renderType_HomeComponent_Host = viewUtils.createRenderComponentType('', 0, import8.ViewEncapsulation.None, [], {}));
    }
    return new _View_HomeComponent_Host0(viewUtils, parentInjector, declarationEl);
}
export var HomeComponentNgFactory = new import9.ComponentFactory('app-home', viewFactory_HomeComponent_Host0, import3.HomeComponent);
var styles_HomeComponent = [];
var renderType_HomeComponent = null;
var _View_HomeComponent0 = (function (_super) {
    __extends(_View_HomeComponent0, _super);
    function _View_HomeComponent0(viewUtils, parentInjector, declarationEl) {
        _super.call(this, _View_HomeComponent0, renderType_HomeComponent, import6.ViewType.COMPONENT, viewUtils, parentInjector, declarationEl, import7.ChangeDetectorStatus.CheckAlways);
    }
    _View_HomeComponent0.prototype.createInternal = function (rootSelector) {
        var parentRenderNode = this.renderer.createViewRoot(this.declarationAppElement.nativeElement);
        this._el_0 = this.renderer.createElement(parentRenderNode, 'div', null);
        this.renderer.setElementAttribute(this._el_0, 'class', 'container');
        this.renderer.setElementAttribute(this._el_0, 'style', 'margin-top: 3%; text-align: center');
        this._text_1 = this.renderer.createText(this._el_0, '\n    ', null);
        this._el_2 = this.renderer.createElement(this._el_0, 'h1', null);
        this._text_3 = this.renderer.createText(this._el_2, 'Course timetabling competition', null);
        this._text_4 = this.renderer.createText(this._el_0, '\n', null);
        this.init([], [
            this._el_0,
            this._text_1,
            this._el_2,
            this._text_3,
            this._text_4
        ], [], []);
        return null;
    };
    return _View_HomeComponent0;
}(import1.AppView));
export function viewFactory_HomeComponent0(viewUtils, parentInjector, declarationEl) {
    if ((renderType_HomeComponent === null)) {
        (renderType_HomeComponent = viewUtils.createRenderComponentType('C:/Users/Silvia/OneDrive/Bc/web-competition/assets/app/home/home.component.html', 0, import8.ViewEncapsulation.None, styles_HomeComponent, {}));
    }
    return new _View_HomeComponent0(viewUtils, parentInjector, declarationEl);
}
