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
import * as import1 from './signup.module';
import * as import2 from '@angular/forms/src/directives';
import * as import3 from '@angular/forms/src/form_providers';
import * as import4 from '@angular/common/src/common_module';
import * as import5 from '@angular/router/src/router_module';
import * as import6 from '../../equal-validator.module';
import * as import7 from '@angular/forms/src/form_builder';
import * as import8 from '@angular/forms/src/directives/radio_control_value_accessor';
import * as import9 from '@angular/common/src/localization';
import * as import10 from '../auth.service';
import * as import12 from './signup.component.ngfactory';
import * as import13 from '@angular/core/src/i18n/tokens';
import * as import14 from './signup.component';
import * as import15 from '@angular/http/src/http';
import * as import16 from '../../flash-message/flash-messages.service';
import * as import17 from '@angular/router/src/router_config_loader';
var SignupModuleInjector = (function (_super) {
    __extends(SignupModuleInjector, _super);
    function SignupModuleInjector(parent) {
        _super.call(this, parent, [import12.SignupComponentNgFactory], []);
    }
    Object.defineProperty(SignupModuleInjector.prototype, "_FormBuilder_6", {
        get: function () {
            if ((this.__FormBuilder_6 == null)) {
                (this.__FormBuilder_6 = new import7.FormBuilder());
            }
            return this.__FormBuilder_6;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SignupModuleInjector.prototype, "_RadioControlRegistry_7", {
        get: function () {
            if ((this.__RadioControlRegistry_7 == null)) {
                (this.__RadioControlRegistry_7 = new import8.RadioControlRegistry());
            }
            return this.__RadioControlRegistry_7;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SignupModuleInjector.prototype, "_NgLocalization_8", {
        get: function () {
            if ((this.__NgLocalization_8 == null)) {
                (this.__NgLocalization_8 = new import9.NgLocaleLocalization(this.parent.get(import13.LOCALE_ID)));
            }
            return this.__NgLocalization_8;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SignupModuleInjector.prototype, "_ROUTES_9", {
        get: function () {
            if ((this.__ROUTES_9 == null)) {
                (this.__ROUTES_9 = [[{
                            path: '',
                            children: [{
                                    path: '',
                                    component: import14.SignupComponent
                                }
                            ]
                        }
                    ]]);
            }
            return this.__ROUTES_9;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SignupModuleInjector.prototype, "_AuthService_10", {
        get: function () {
            if ((this.__AuthService_10 == null)) {
                (this.__AuthService_10 = new import10.AuthService(this.parent.get(import15.Http), this.parent.get(import16.FlashMessageService)));
            }
            return this.__AuthService_10;
        },
        enumerable: true,
        configurable: true
    });
    SignupModuleInjector.prototype.createInternal = function () {
        this._InternalFormsSharedModule_0 = new import2.InternalFormsSharedModule();
        this._ReactiveFormsModule_1 = new import3.ReactiveFormsModule();
        this._CommonModule_2 = new import4.CommonModule();
        this._RouterModule_3 = new import5.RouterModule(this.parent.get(import5.ROUTER_FORROOT_GUARD, null));
        this._EqualValidatorModule_4 = new import6.EqualValidatorModule();
        this._SignupModule_5 = new import1.SignupModule();
        return this._SignupModule_5;
    };
    SignupModuleInjector.prototype.getInternal = function (token, notFoundResult) {
        if ((token === import2.InternalFormsSharedModule)) {
            return this._InternalFormsSharedModule_0;
        }
        if ((token === import3.ReactiveFormsModule)) {
            return this._ReactiveFormsModule_1;
        }
        if ((token === import4.CommonModule)) {
            return this._CommonModule_2;
        }
        if ((token === import5.RouterModule)) {
            return this._RouterModule_3;
        }
        if ((token === import6.EqualValidatorModule)) {
            return this._EqualValidatorModule_4;
        }
        if ((token === import1.SignupModule)) {
            return this._SignupModule_5;
        }
        if ((token === import7.FormBuilder)) {
            return this._FormBuilder_6;
        }
        if ((token === import8.RadioControlRegistry)) {
            return this._RadioControlRegistry_7;
        }
        if ((token === import9.NgLocalization)) {
            return this._NgLocalization_8;
        }
        if ((token === import17.ROUTES)) {
            return this._ROUTES_9;
        }
        if ((token === import10.AuthService)) {
            return this._AuthService_10;
        }
        return notFoundResult;
    };
    SignupModuleInjector.prototype.destroyInternal = function () {
    };
    return SignupModuleInjector;
}(import0.NgModuleInjector));
export var SignupModuleNgFactory = new import0.NgModuleFactory(SignupModuleInjector, import1.SignupModule);
