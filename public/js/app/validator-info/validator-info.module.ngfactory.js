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
import * as import0 from '@angular/core/src/linker/ng_module_factory';
import * as import1 from './validator-info.module';
import * as import2 from '@angular/common/src/common_module';
import * as import3 from '../escape-html.module';
import * as import4 from '@angular/router/src/router_module';
import * as import5 from '@angular/common/src/localization';
import * as import6 from '../shared/solution.service';
import * as import8 from './validator-info.component.ngfactory';
import * as import9 from '@angular/core/src/i18n/tokens';
import * as import10 from './validator-info.component';
import * as import11 from '@angular/http/src/http';
import * as import12 from '../flash-message/flash-messages.service';
import * as import13 from '@angular/router/src/router_config_loader';
var ValidatorInfoModuleInjector = (function (_super) {
    __extends(ValidatorInfoModuleInjector, _super);
    function ValidatorInfoModuleInjector(parent) {
        _super.call(this, parent, [import8.ValidatorInfoComponentNgFactory], []);
    }
    Object.defineProperty(ValidatorInfoModuleInjector.prototype, "_NgLocalization_4", {
        get: function () {
            if ((this.__NgLocalization_4 == null)) {
                (this.__NgLocalization_4 = new import5.NgLocaleLocalization(this.parent.get(import9.LOCALE_ID)));
            }
            return this.__NgLocalization_4;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ValidatorInfoModuleInjector.prototype, "_ROUTES_5", {
        get: function () {
            if ((this.__ROUTES_5 == null)) {
                (this.__ROUTES_5 = [[{
                            path: '',
                            children: [{
                                    path: '',
                                    component: import10.ValidatorInfoComponent
                                }
                            ]
                        }
                    ]]);
            }
            return this.__ROUTES_5;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ValidatorInfoModuleInjector.prototype, "_SolutionService_6", {
        get: function () {
            if ((this.__SolutionService_6 == null)) {
                (this.__SolutionService_6 = new import6.SolutionService(this.parent.get(import11.Http), this.parent.get(import12.FlashMessageService)));
            }
            return this.__SolutionService_6;
        },
        enumerable: true,
        configurable: true
    });
    ValidatorInfoModuleInjector.prototype.createInternal = function () {
        this._CommonModule_0 = new import2.CommonModule();
        this._EscapeHtmlModule_1 = new import3.EscapeHtmlModule();
        this._RouterModule_2 = new import4.RouterModule(this.parent.get(import4.ROUTER_FORROOT_GUARD, null));
        this._ValidatorInfoModule_3 = new import1.ValidatorInfoModule();
        return this._ValidatorInfoModule_3;
    };
    ValidatorInfoModuleInjector.prototype.getInternal = function (token, notFoundResult) {
        if ((token === import2.CommonModule)) {
            return this._CommonModule_0;
        }
        if ((token === import3.EscapeHtmlModule)) {
            return this._EscapeHtmlModule_1;
        }
        if ((token === import4.RouterModule)) {
            return this._RouterModule_2;
        }
        if ((token === import1.ValidatorInfoModule)) {
            return this._ValidatorInfoModule_3;
        }
        if ((token === import5.NgLocalization)) {
            return this._NgLocalization_4;
        }
        if ((token === import13.ROUTES)) {
            return this._ROUTES_5;
        }
        if ((token === import6.SolutionService)) {
            return this._SolutionService_6;
        }
        return notFoundResult;
    };
    ValidatorInfoModuleInjector.prototype.destroyInternal = function () {
    };
    return ValidatorInfoModuleInjector;
}(import0.NgModuleInjector));
export var ValidatorInfoModuleNgFactory = new import0.NgModuleFactory(ValidatorInfoModuleInjector, import1.ValidatorInfoModule);
