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
import * as import1 from './signin.module';
import * as import2 from '@angular/forms/src/directives';
import * as import3 from '@angular/forms/src/form_providers';
import * as import4 from '@angular/common/src/common_module';
import * as import5 from '@angular/router/src/router_module';
import * as import6 from '@angular/forms/src/form_builder';
import * as import7 from '@angular/forms/src/directives/radio_control_value_accessor';
import * as import8 from '@angular/common/src/localization';
import * as import9 from '../auth.service';
import * as import10 from './email.service';
import * as import12 from './signin.component.ngfactory';
import * as import13 from '@angular/core/src/i18n/tokens';
import * as import14 from './signin.component';
import * as import15 from '@angular/http/src/http';
import * as import16 from '../../flash-message/flash-messages.service';
import * as import17 from '@angular/router/src/router_config_loader';
var SigninModuleInjector = (function (_super) {
    __extends(SigninModuleInjector, _super);
    function SigninModuleInjector(parent) {
        _super.call(this, parent, [import12.SigninComponentNgFactory], []);
    }
    Object.defineProperty(SigninModuleInjector.prototype, "_FormBuilder_5", {
        get: function () {
            if ((this.__FormBuilder_5 == null)) {
                (this.__FormBuilder_5 = new import6.FormBuilder());
            }
            return this.__FormBuilder_5;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SigninModuleInjector.prototype, "_RadioControlRegistry_6", {
        get: function () {
            if ((this.__RadioControlRegistry_6 == null)) {
                (this.__RadioControlRegistry_6 = new import7.RadioControlRegistry());
            }
            return this.__RadioControlRegistry_6;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SigninModuleInjector.prototype, "_NgLocalization_7", {
        get: function () {
            if ((this.__NgLocalization_7 == null)) {
                (this.__NgLocalization_7 = new import8.NgLocaleLocalization(this.parent.get(import13.LOCALE_ID)));
            }
            return this.__NgLocalization_7;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SigninModuleInjector.prototype, "_ROUTES_8", {
        get: function () {
            if ((this.__ROUTES_8 == null)) {
                (this.__ROUTES_8 = [[{
                            path: '',
                            children: [{
                                    path: '',
                                    component: import14.SigninComponent
                                }
                            ]
                        }
                    ]]);
            }
            return this.__ROUTES_8;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SigninModuleInjector.prototype, "_AuthService_9", {
        get: function () {
            if ((this.__AuthService_9 == null)) {
                (this.__AuthService_9 = new import9.AuthService(this.parent.get(import15.Http), this.parent.get(import16.FlashMessageService)));
            }
            return this.__AuthService_9;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SigninModuleInjector.prototype, "_EmailService_10", {
        get: function () {
            if ((this.__EmailService_10 == null)) {
                (this.__EmailService_10 = new import10.EmailService(this.parent.get(import15.Http), this.parent.get(import16.FlashMessageService)));
            }
            return this.__EmailService_10;
        },
        enumerable: true,
        configurable: true
    });
    SigninModuleInjector.prototype.createInternal = function () {
        this._InternalFormsSharedModule_0 = new import2.InternalFormsSharedModule();
        this._ReactiveFormsModule_1 = new import3.ReactiveFormsModule();
        this._CommonModule_2 = new import4.CommonModule();
        this._RouterModule_3 = new import5.RouterModule(this.parent.get(import5.ROUTER_FORROOT_GUARD, null));
        this._SigninModule_4 = new import1.SigninModule();
        return this._SigninModule_4;
    };
    SigninModuleInjector.prototype.getInternal = function (token, notFoundResult) {
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
        if ((token === import1.SigninModule)) {
            return this._SigninModule_4;
        }
        if ((token === import6.FormBuilder)) {
            return this._FormBuilder_5;
        }
        if ((token === import7.RadioControlRegistry)) {
            return this._RadioControlRegistry_6;
        }
        if ((token === import8.NgLocalization)) {
            return this._NgLocalization_7;
        }
        if ((token === import17.ROUTES)) {
            return this._ROUTES_8;
        }
        if ((token === import9.AuthService)) {
            return this._AuthService_9;
        }
        if ((token === import10.EmailService)) {
            return this._EmailService_10;
        }
        return notFoundResult;
    };
    SigninModuleInjector.prototype.destroyInternal = function () {
    };
    return SigninModuleInjector;
}(import0.NgModuleInjector));
export var SigninModuleNgFactory = new import0.NgModuleFactory(SigninModuleInjector, import1.SigninModule);
