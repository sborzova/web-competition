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
import * as import4 from '@angular/forms/src/directives';
import * as import5 from '@angular/forms/src/form_providers';
import * as import6 from '@angular/common/src/localization';
import * as import7 from '@angular/forms/src/directives/radio_control_value_accessor';
import * as import8 from './preference.service';
import * as import10 from './preference.component.ngfactory';
import * as import11 from '@angular/core/src/i18n/tokens';
import * as import12 from './preference.component';
import * as import13 from '@angular/http/src/http';
import * as import14 from '@angular/router/src/router_config_loader';
var PreferenceModuleInjector = (function (_super) {
    __extends(PreferenceModuleInjector, _super);
    function PreferenceModuleInjector(parent) {
        _super.call(this, parent, [import10.PreferenceComponentNgFactory], []);
    }
    Object.defineProperty(PreferenceModuleInjector.prototype, "_NgLocalization_5", {
        get: function () {
            if ((this.__NgLocalization_5 == null)) {
                (this.__NgLocalization_5 = new import6.NgLocaleLocalization(this.parent.get(import11.LOCALE_ID)));
            }
            return this.__NgLocalization_5;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PreferenceModuleInjector.prototype, "_RadioControlRegistry_6", {
        get: function () {
            if ((this.__RadioControlRegistry_6 == null)) {
                (this.__RadioControlRegistry_6 = new import7.RadioControlRegistry());
            }
            return this.__RadioControlRegistry_6;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PreferenceModuleInjector.prototype, "_ROUTES_7", {
        get: function () {
            if ((this.__ROUTES_7 == null)) {
                (this.__ROUTES_7 = [[{
                            path: '',
                            children: [{
                                    path: '',
                                    component: import12.PreferenceComponent
                                }
                            ]
                        }
                    ]]);
            }
            return this.__ROUTES_7;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PreferenceModuleInjector.prototype, "_PreferenceService_8", {
        get: function () {
            if ((this.__PreferenceService_8 == null)) {
                (this.__PreferenceService_8 = new import8.PreferenceService(this.parent.get(import13.Http)));
            }
            return this.__PreferenceService_8;
        },
        enumerable: true,
        configurable: true
    });
    PreferenceModuleInjector.prototype.createInternal = function () {
        this._CommonModule_0 = new import2.CommonModule();
        this._RouterModule_1 = new import3.RouterModule(this.parent.get(import3.ROUTER_FORROOT_GUARD, null));
        this._InternalFormsSharedModule_2 = new import4.InternalFormsSharedModule();
        this._FormsModule_3 = new import5.FormsModule();
        this._PreferenceModule_4 = new import1.PreferenceModule();
        return this._PreferenceModule_4;
    };
    PreferenceModuleInjector.prototype.getInternal = function (token, notFoundResult) {
        if ((token === import2.CommonModule)) {
            return this._CommonModule_0;
        }
        if ((token === import3.RouterModule)) {
            return this._RouterModule_1;
        }
        if ((token === import4.InternalFormsSharedModule)) {
            return this._InternalFormsSharedModule_2;
        }
        if ((token === import5.FormsModule)) {
            return this._FormsModule_3;
        }
        if ((token === import1.PreferenceModule)) {
            return this._PreferenceModule_4;
        }
        if ((token === import6.NgLocalization)) {
            return this._NgLocalization_5;
        }
        if ((token === import7.RadioControlRegistry)) {
            return this._RadioControlRegistry_6;
        }
        if ((token === import14.ROUTES)) {
            return this._ROUTES_7;
        }
        if ((token === import8.PreferenceService)) {
            return this._PreferenceService_8;
        }
        return notFoundResult;
    };
    PreferenceModuleInjector.prototype.destroyInternal = function () {
    };
    return PreferenceModuleInjector;
}(import0.NgModuleInjector));
export var PreferenceModuleNgFactory = new import0.NgModuleFactory(PreferenceModuleInjector, import1.PreferenceModule);
