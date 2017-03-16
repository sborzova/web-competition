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
import * as import1 from './preference.module';
import * as import2 from '@angular/common/src/common_module';
import * as import3 from '@angular/router/src/router_module';
import * as import4 from '@angular/common/src/localization';
import * as import6 from './preference.component.ngfactory';
import * as import7 from '@angular/core/src/i18n/tokens';
import * as import8 from './preference.component';
import * as import9 from '@angular/router/src/router_config_loader';
var PreferenceModuleInjector = (function (_super) {
    __extends(PreferenceModuleInjector, _super);
    function PreferenceModuleInjector(parent) {
        _super.call(this, parent, [import6.PreferenceComponentNgFactory], []);
    }
    Object.defineProperty(PreferenceModuleInjector.prototype, "_NgLocalization_3", {
        get: function () {
            if ((this.__NgLocalization_3 == null)) {
                (this.__NgLocalization_3 = new import4.NgLocaleLocalization(this.parent.get(import7.LOCALE_ID)));
            }
            return this.__NgLocalization_3;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PreferenceModuleInjector.prototype, "_ROUTES_4", {
        get: function () {
            if ((this.__ROUTES_4 == null)) {
                (this.__ROUTES_4 = [[{
                            path: '',
                            children: [{
                                    path: '',
                                    component: import8.PreferenceComponent
                                }
                            ]
                        }
                    ]]);
            }
            return this.__ROUTES_4;
        },
        enumerable: true,
        configurable: true
    });
    PreferenceModuleInjector.prototype.createInternal = function () {
        this._CommonModule_0 = new import2.CommonModule();
        this._RouterModule_1 = new import3.RouterModule(this.parent.get(import3.ROUTER_FORROOT_GUARD, null));
        this._PreferenceModule_2 = new import1.PreferenceModule();
        return this._PreferenceModule_2;
    };
    PreferenceModuleInjector.prototype.getInternal = function (token, notFoundResult) {
        if ((token === import2.CommonModule)) {
            return this._CommonModule_0;
        }
        if ((token === import3.RouterModule)) {
            return this._RouterModule_1;
        }
        if ((token === import1.PreferenceModule)) {
            return this._PreferenceModule_2;
        }
        if ((token === import4.NgLocalization)) {
            return this._NgLocalization_3;
        }
        if ((token === import9.ROUTES)) {
            return this._ROUTES_4;
        }
        return notFoundResult;
    };
    PreferenceModuleInjector.prototype.destroyInternal = function () {
    };
    return PreferenceModuleInjector;
}(import0.NgModuleInjector));
export var PreferenceModuleNgFactory = new import0.NgModuleFactory(PreferenceModuleInjector, import1.PreferenceModule);
