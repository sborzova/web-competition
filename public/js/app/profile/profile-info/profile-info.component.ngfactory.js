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
import * as import3 from './profile-info.component';
import * as import4 from '@angular/core/src/linker/view_utils';
import * as import6 from '@angular/core/src/linker/view_type';
import * as import7 from '@angular/core/src/change_detection/change_detection';
import * as import8 from '../../shared/user.service';
import * as import9 from '@angular/core/src/metadata/view';
import * as import10 from '@angular/core/src/linker/component_factory';
import * as import11 from '@angular/router/src/directives/router_link';
import * as import12 from '@angular/common/src/directives/ng_if';
import * as import13 from '@angular/router/src/router';
import * as import14 from '@angular/router/src/router_state';
import * as import15 from '@angular/common/src/location/location_strategy';
import * as import16 from '@angular/core/src/linker/template_ref';
var renderType_ProfileInfoComponent_Host = null;
var _View_ProfileInfoComponent_Host0 = (function (_super) {
    __extends(_View_ProfileInfoComponent_Host0, _super);
    function _View_ProfileInfoComponent_Host0(viewUtils, parentInjector, declarationEl) {
        _super.call(this, _View_ProfileInfoComponent_Host0, renderType_ProfileInfoComponent_Host, import6.ViewType.HOST, viewUtils, parentInjector, declarationEl, import7.ChangeDetectorStatus.CheckAlways);
    }
    _View_ProfileInfoComponent_Host0.prototype.createInternal = function (rootSelector) {
        this._el_0 = this.selectOrCreateHostElement('app-profile-info', rootSelector, null);
        this._appEl_0 = new import2.AppElement(0, null, this, this._el_0);
        var compView_0 = viewFactory_ProfileInfoComponent0(this.viewUtils, this.injector(0), this._appEl_0);
        this._ProfileInfoComponent_0_4 = new import3.ProfileInfoComponent(this.parentInjector.get(import8.UserService));
        this._appEl_0.initComponent(this._ProfileInfoComponent_0_4, [], compView_0);
        compView_0.create(this._ProfileInfoComponent_0_4, this.projectableNodes, null);
        this.init([].concat([this._el_0]), [this._el_0], [], []);
        return this._appEl_0;
    };
    _View_ProfileInfoComponent_Host0.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import3.ProfileInfoComponent) && (0 === requestNodeIndex))) {
            return this._ProfileInfoComponent_0_4;
        }
        return notFoundResult;
    };
    _View_ProfileInfoComponent_Host0.prototype.detectChangesInternal = function (throwOnChange) {
        if (((this.numberOfChecks === 0) && !throwOnChange)) {
            this._ProfileInfoComponent_0_4.ngOnInit();
        }
        this.detectContentChildrenChanges(throwOnChange);
        this.detectViewChildrenChanges(throwOnChange);
    };
    return _View_ProfileInfoComponent_Host0;
}(import1.AppView));
function viewFactory_ProfileInfoComponent_Host0(viewUtils, parentInjector, declarationEl) {
    if ((renderType_ProfileInfoComponent_Host === null)) {
        (renderType_ProfileInfoComponent_Host = viewUtils.createRenderComponentType('', 0, import9.ViewEncapsulation.None, [], {}));
    }
    return new _View_ProfileInfoComponent_Host0(viewUtils, parentInjector, declarationEl);
}
export var ProfileInfoComponentNgFactory = new import10.ComponentFactory('app-profile-info', viewFactory_ProfileInfoComponent_Host0, import3.ProfileInfoComponent);
var styles_ProfileInfoComponent = [];
var renderType_ProfileInfoComponent = null;
var _View_ProfileInfoComponent0 = (function (_super) {
    __extends(_View_ProfileInfoComponent0, _super);
    function _View_ProfileInfoComponent0(viewUtils, parentInjector, declarationEl) {
        _super.call(this, _View_ProfileInfoComponent0, renderType_ProfileInfoComponent, import6.ViewType.COMPONENT, viewUtils, parentInjector, declarationEl, import7.ChangeDetectorStatus.CheckAlways);
    }
    _View_ProfileInfoComponent0.prototype.createInternal = function (rootSelector) {
        var parentRenderNode = this.renderer.createViewRoot(this.declarationAppElement.nativeElement);
        this._el_0 = this.renderer.createElement(parentRenderNode, 'div', null);
        this.renderer.setElementAttribute(this._el_0, 'class', 'container');
        this.renderer.setElementAttribute(this._el_0, 'style', 'margin-top: 3%');
        this._text_1 = this.renderer.createText(this._el_0, '\n    ', null);
        this._el_2 = this.renderer.createElement(this._el_0, 'div', null);
        this.renderer.setElementAttribute(this._el_2, 'class', 'row');
        this._text_3 = this.renderer.createText(this._el_2, '\n        ', null);
        this._el_4 = this.renderer.createElement(this._el_2, 'div', null);
        this.renderer.setElementAttribute(this._el_4, 'class', 'col-xs-12');
        this._text_5 = this.renderer.createText(this._el_4, '\n            ', null);
        this._el_6 = this.renderer.createElement(this._el_4, 'div', null);
        this.renderer.setElementAttribute(this._el_6, 'style', 'margin-bottom: 3%');
        this._text_7 = this.renderer.createText(this._el_6, '\n                ', null);
        this._el_8 = this.renderer.createElement(this._el_6, 'h2', null);
        this._text_9 = this.renderer.createText(this._el_8, 'Profile', null);
        this._text_10 = this.renderer.createText(this._el_6, '\n            ', null);
        this._text_11 = this.renderer.createText(this._el_4, '\n            ', null);
        this._el_12 = this.renderer.createElement(this._el_4, 'div', null);
        this._text_13 = this.renderer.createText(this._el_12, '\n                ', null);
        this._el_14 = this.renderer.createElement(this._el_12, 'button', null);
        this.renderer.setElementAttribute(this._el_14, 'class', 'btn btn-info btn-xs');
        this.renderer.setElementAttribute(this._el_14, 'title', 'Edit profile');
        this._RouterLink_14_3 = new import11.RouterLink(this.parentInjector.get(import13.Router), this.parentInjector.get(import14.ActivatedRoute), this.parentInjector.get(import15.LocationStrategy));
        this._text_15 = this.renderer.createText(this._el_14, '\n                        ', null);
        this._el_16 = this.renderer.createElement(this._el_14, 'span', null);
        this.renderer.setElementAttribute(this._el_16, 'class', 'glyphicon glyphicon-pencil');
        this._text_17 = this.renderer.createText(this._el_14, '\n                         Profile\n                ', null);
        this._text_18 = this.renderer.createText(this._el_12, '\n                ', null);
        this._el_19 = this.renderer.createElement(this._el_12, 'button', null);
        this.renderer.setElementAttribute(this._el_19, 'class', 'btn btn-primary btn-xs');
        this.renderer.setElementAttribute(this._el_19, 'title', 'Change password');
        this._RouterLink_19_3 = new import11.RouterLink(this.parentInjector.get(import13.Router), this.parentInjector.get(import14.ActivatedRoute), this.parentInjector.get(import15.LocationStrategy));
        this._text_20 = this.renderer.createText(this._el_19, '\n                        ', null);
        this._el_21 = this.renderer.createElement(this._el_19, 'span', null);
        this.renderer.setElementAttribute(this._el_21, 'class', 'glyphicon glyphicon-pencil');
        this._text_22 = this.renderer.createText(this._el_19, '\n                         Password\n                ', null);
        this._text_23 = this.renderer.createText(this._el_12, '\n            ', null);
        this._text_24 = this.renderer.createText(this._el_4, '\n            ', null);
        this._el_25 = this.renderer.createElement(this._el_4, 'div', null);
        this.renderer.setElementAttribute(this._el_25, 'class', 'col-xs-6');
        this._text_26 = this.renderer.createText(this._el_25, '\n                ', null);
        this._anchor_27 = this.renderer.createTemplateAnchor(this._el_25, null);
        this._appEl_27 = new import2.AppElement(27, 25, this, this._anchor_27);
        this._TemplateRef_27_5 = new import16.TemplateRef_(this._appEl_27, viewFactory_ProfileInfoComponent1);
        this._NgIf_27_6 = new import12.NgIf(this._appEl_27.vcRef, this._TemplateRef_27_5);
        this._text_28 = this.renderer.createText(this._el_25, '\n            ', null);
        this._text_29 = this.renderer.createText(this._el_4, '\n        ', null);
        this._text_30 = this.renderer.createText(this._el_2, '\n    ', null);
        this._text_31 = this.renderer.createText(this._el_0, '\n', null);
        var disposable_0 = this.renderer.listen(this._el_14, 'click', this.eventHandler(this._handle_click_14_0.bind(this)));
        this._arr_0 = import4.pureProxy1(function (p0) {
            return [p0];
        });
        this._expr_1 = import7.UNINITIALIZED;
        var disposable_1 = this.renderer.listen(this._el_19, 'click', this.eventHandler(this._handle_click_19_0.bind(this)));
        this._arr_1 = import4.pureProxy1(function (p0) {
            return [p0];
        });
        this._expr_3 = import7.UNINITIALIZED;
        this._expr_4 = import7.UNINITIALIZED;
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
            this._text_11,
            this._el_12,
            this._text_13,
            this._el_14,
            this._text_15,
            this._el_16,
            this._text_17,
            this._text_18,
            this._el_19,
            this._text_20,
            this._el_21,
            this._text_22,
            this._text_23,
            this._text_24,
            this._el_25,
            this._text_26,
            this._anchor_27,
            this._text_28,
            this._text_29,
            this._text_30,
            this._text_31
        ], [
            disposable_0,
            disposable_1
        ], []);
        return null;
    };
    _View_ProfileInfoComponent0.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import11.RouterLink) && ((14 <= requestNodeIndex) && (requestNodeIndex <= 17)))) {
            return this._RouterLink_14_3;
        }
        if (((token === import11.RouterLink) && ((19 <= requestNodeIndex) && (requestNodeIndex <= 22)))) {
            return this._RouterLink_19_3;
        }
        if (((token === import16.TemplateRef) && (27 === requestNodeIndex))) {
            return this._TemplateRef_27_5;
        }
        if (((token === import12.NgIf) && (27 === requestNodeIndex))) {
            return this._NgIf_27_6;
        }
        return notFoundResult;
    };
    _View_ProfileInfoComponent0.prototype.detectChangesInternal = function (throwOnChange) {
        var currVal_1 = this._arr_0('/profile/edit');
        if (import4.checkBinding(throwOnChange, this._expr_1, currVal_1)) {
            this._RouterLink_14_3.routerLink = currVal_1;
            this._expr_1 = currVal_1;
        }
        var currVal_3 = this._arr_1('/profile/editpass');
        if (import4.checkBinding(throwOnChange, this._expr_3, currVal_3)) {
            this._RouterLink_19_3.routerLink = currVal_3;
            this._expr_3 = currVal_3;
        }
        var currVal_4 = this.context.user;
        if (import4.checkBinding(throwOnChange, this._expr_4, currVal_4)) {
            this._NgIf_27_6.ngIf = currVal_4;
            this._expr_4 = currVal_4;
        }
        this.detectContentChildrenChanges(throwOnChange);
        this.detectViewChildrenChanges(throwOnChange);
    };
    _View_ProfileInfoComponent0.prototype._handle_click_14_0 = function ($event) {
        this.markPathToRootAsCheckOnce();
        var pd_0 = (this._RouterLink_14_3.onClick($event.button, $event.ctrlKey, $event.metaKey) !== false);
        return (true && pd_0);
    };
    _View_ProfileInfoComponent0.prototype._handle_click_19_0 = function ($event) {
        this.markPathToRootAsCheckOnce();
        var pd_0 = (this._RouterLink_19_3.onClick($event.button, $event.ctrlKey, $event.metaKey) !== false);
        return (true && pd_0);
    };
    return _View_ProfileInfoComponent0;
}(import1.AppView));
export function viewFactory_ProfileInfoComponent0(viewUtils, parentInjector, declarationEl) {
    if ((renderType_ProfileInfoComponent === null)) {
        (renderType_ProfileInfoComponent = viewUtils.createRenderComponentType('C:/Users/Silvia/OneDrive/Bc/web-competition/assets/app/profile/profile-info/profile-info.component.html', 0, import9.ViewEncapsulation.None, styles_ProfileInfoComponent, {}));
    }
    return new _View_ProfileInfoComponent0(viewUtils, parentInjector, declarationEl);
}
var _View_ProfileInfoComponent1 = (function (_super) {
    __extends(_View_ProfileInfoComponent1, _super);
    function _View_ProfileInfoComponent1(viewUtils, parentInjector, declarationEl) {
        _super.call(this, _View_ProfileInfoComponent1, renderType_ProfileInfoComponent, import6.ViewType.EMBEDDED, viewUtils, parentInjector, declarationEl, import7.ChangeDetectorStatus.CheckAlways);
    }
    _View_ProfileInfoComponent1.prototype.createInternal = function (rootSelector) {
        this._el_0 = this.renderer.createElement(null, 'table', null);
        this.renderer.setElementAttribute(this._el_0, 'class', 'table table-borderless');
        this._text_1 = this.renderer.createText(this._el_0, '\n                    ', null);
        this._el_2 = this.renderer.createElement(this._el_0, 'tbody', null);
        this._el_3 = this.renderer.createElement(this._el_2, 'tr', null);
        this._text_4 = this.renderer.createText(this._el_3, '\n                        ', null);
        this._el_5 = this.renderer.createElement(this._el_3, 'th', null);
        this._text_6 = this.renderer.createText(this._el_5, 'First name', null);
        this._text_7 = this.renderer.createText(this._el_3, '\n                        ', null);
        this._el_8 = this.renderer.createElement(this._el_3, 'td', null);
        this._text_9 = this.renderer.createText(this._el_8, '', null);
        this._text_10 = this.renderer.createText(this._el_3, '\n                    ', null);
        this._text_11 = this.renderer.createText(this._el_2, '\n                    ', null);
        this._el_12 = this.renderer.createElement(this._el_2, 'tr', null);
        this._text_13 = this.renderer.createText(this._el_12, '\n                        ', null);
        this._el_14 = this.renderer.createElement(this._el_12, 'th', null);
        this._text_15 = this.renderer.createText(this._el_14, 'Last name', null);
        this._text_16 = this.renderer.createText(this._el_12, '\n                        ', null);
        this._el_17 = this.renderer.createElement(this._el_12, 'td', null);
        this._text_18 = this.renderer.createText(this._el_17, '', null);
        this._text_19 = this.renderer.createText(this._el_12, '\n                    ', null);
        this._text_20 = this.renderer.createText(this._el_2, '\n                    ', null);
        this._el_21 = this.renderer.createElement(this._el_2, 'tr', null);
        this._text_22 = this.renderer.createText(this._el_21, '\n                        ', null);
        this._el_23 = this.renderer.createElement(this._el_21, 'th', null);
        this._text_24 = this.renderer.createText(this._el_23, 'Email address', null);
        this._text_25 = this.renderer.createText(this._el_21, '\n                        ', null);
        this._el_26 = this.renderer.createElement(this._el_21, 'td', null);
        this._text_27 = this.renderer.createText(this._el_26, '', null);
        this._text_28 = this.renderer.createText(this._el_21, '\n                    ', null);
        this._text_29 = this.renderer.createText(this._el_2, '\n                ', null);
        this._expr_0 = import7.UNINITIALIZED;
        this._expr_1 = import7.UNINITIALIZED;
        this._expr_2 = import7.UNINITIALIZED;
        this.init([].concat([this._el_0]), [
            this._el_0,
            this._text_1,
            this._el_2,
            this._el_3,
            this._text_4,
            this._el_5,
            this._text_6,
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
            this._text_19,
            this._text_20,
            this._el_21,
            this._text_22,
            this._el_23,
            this._text_24,
            this._text_25,
            this._el_26,
            this._text_27,
            this._text_28,
            this._text_29
        ], [], []);
        return null;
    };
    _View_ProfileInfoComponent1.prototype.detectChangesInternal = function (throwOnChange) {
        this.detectContentChildrenChanges(throwOnChange);
        var currVal_0 = import4.interpolate(1, '', this.parent.context.user.firstName, '');
        if (import4.checkBinding(throwOnChange, this._expr_0, currVal_0)) {
            this.renderer.setText(this._text_9, currVal_0);
            this._expr_0 = currVal_0;
        }
        var currVal_1 = import4.interpolate(1, '', this.parent.context.user.lastName, '');
        if (import4.checkBinding(throwOnChange, this._expr_1, currVal_1)) {
            this.renderer.setText(this._text_18, currVal_1);
            this._expr_1 = currVal_1;
        }
        var currVal_2 = import4.interpolate(1, '', this.parent.context.user.email, '');
        if (import4.checkBinding(throwOnChange, this._expr_2, currVal_2)) {
            this.renderer.setText(this._text_27, currVal_2);
            this._expr_2 = currVal_2;
        }
        this.detectViewChildrenChanges(throwOnChange);
    };
    return _View_ProfileInfoComponent1;
}(import1.AppView));
function viewFactory_ProfileInfoComponent1(viewUtils, parentInjector, declarationEl) {
    return new _View_ProfileInfoComponent1(viewUtils, parentInjector, declarationEl);
}
