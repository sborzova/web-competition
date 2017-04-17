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
import * as import1 from './users.module';
import * as import2 from '@angular/forms/src/directives';
import * as import3 from '@angular/forms/src/form_providers';
import * as import4 from '@angular/common/src/common_module';
import * as import5 from '../order-by.module';
import * as import6 from '@angular/router/src/router_module';
import * as import7 from '../equal-validator.module';
import * as import8 from '@angular/forms/src/form_builder';
import * as import9 from '@angular/forms/src/directives/radio_control_value_accessor';
import * as import10 from '@angular/common/src/localization';
import * as import11 from './users.service';
import * as import12 from '../shared/email.service';
import * as import14 from './users.component.ngfactory';
import * as import15 from './user-edit/user-edit.component.ngfactory';
import * as import16 from './user-edit-password/user-edit-password.component.ngfactory';
import * as import17 from '@angular/core/src/i18n/tokens';
import * as import18 from './users.component';
import * as import19 from './user-edit/user-edit.component';
import * as import20 from './user-edit-password/user-edit-password.component';
import * as import21 from '@angular/http/src/http';
import * as import22 from '../flash-message/flash-messages.service';
import * as import23 from '@angular/router/src/router_config_loader';
var UsersModuleInjector = (function (_super) {
    __extends(UsersModuleInjector, _super);
    function UsersModuleInjector(parent) {
        _super.call(this, parent, [
            import14.UsersComponentNgFactory,
            import15.UserEditComponentNgFactory,
            import16.UserEditPasswordComponentNgFactory
        ], []);
    }
    Object.defineProperty(UsersModuleInjector.prototype, "_FormBuilder_7", {
        get: function () {
            if ((this.__FormBuilder_7 == null)) {
                (this.__FormBuilder_7 = new import8.FormBuilder());
            }
            return this.__FormBuilder_7;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UsersModuleInjector.prototype, "_RadioControlRegistry_8", {
        get: function () {
            if ((this.__RadioControlRegistry_8 == null)) {
                (this.__RadioControlRegistry_8 = new import9.RadioControlRegistry());
            }
            return this.__RadioControlRegistry_8;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UsersModuleInjector.prototype, "_NgLocalization_9", {
        get: function () {
            if ((this.__NgLocalization_9 == null)) {
                (this.__NgLocalization_9 = new import10.NgLocaleLocalization(this.parent.get(import17.LOCALE_ID)));
            }
            return this.__NgLocalization_9;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UsersModuleInjector.prototype, "_ROUTES_10", {
        get: function () {
            if ((this.__ROUTES_10 == null)) {
                (this.__ROUTES_10 = [[{
                            path: '',
                            children: [
                                {
                                    path: '',
                                    redirectTo: 'all',
                                    pathMatch: 'full'
                                },
                                {
                                    path: 'all',
                                    component: import18.UsersComponent
                                },
                                {
                                    path: 'edit/:id',
                                    component: import19.UserEditComponent
                                },
                                {
                                    path: 'editpass/:id',
                                    component: import20.UserEditPasswordComponent
                                }
                            ]
                        }
                    ]]);
            }
            return this.__ROUTES_10;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UsersModuleInjector.prototype, "_UsersService_11", {
        get: function () {
            if ((this.__UsersService_11 == null)) {
                (this.__UsersService_11 = new import11.UsersService(this.parent.get(import21.Http), this.parent.get(import22.FlashMessageService)));
            }
            return this.__UsersService_11;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UsersModuleInjector.prototype, "_EmailService_12", {
        get: function () {
            if ((this.__EmailService_12 == null)) {
                (this.__EmailService_12 = new import12.EmailService(this.parent.get(import21.Http), this.parent.get(import22.FlashMessageService)));
            }
            return this.__EmailService_12;
        },
        enumerable: true,
        configurable: true
    });
    UsersModuleInjector.prototype.createInternal = function () {
        this._InternalFormsSharedModule_0 = new import2.InternalFormsSharedModule();
        this._ReactiveFormsModule_1 = new import3.ReactiveFormsModule();
        this._CommonModule_2 = new import4.CommonModule();
        this._OrderByModule_3 = new import5.OrderByModule();
        this._RouterModule_4 = new import6.RouterModule(this.parent.get(import6.ROUTER_FORROOT_GUARD, null));
        this._EqualValidatorModule_5 = new import7.EqualValidatorModule();
        this._UsersModule_6 = new import1.UsersModule();
        return this._UsersModule_6;
    };
    UsersModuleInjector.prototype.getInternal = function (token, notFoundResult) {
        if ((token === import2.InternalFormsSharedModule)) {
            return this._InternalFormsSharedModule_0;
        }
        if ((token === import3.ReactiveFormsModule)) {
            return this._ReactiveFormsModule_1;
        }
        if ((token === import4.CommonModule)) {
            return this._CommonModule_2;
        }
        if ((token === import5.OrderByModule)) {
            return this._OrderByModule_3;
        }
        if ((token === import6.RouterModule)) {
            return this._RouterModule_4;
        }
        if ((token === import7.EqualValidatorModule)) {
            return this._EqualValidatorModule_5;
        }
        if ((token === import1.UsersModule)) {
            return this._UsersModule_6;
        }
        if ((token === import8.FormBuilder)) {
            return this._FormBuilder_7;
        }
        if ((token === import9.RadioControlRegistry)) {
            return this._RadioControlRegistry_8;
        }
        if ((token === import10.NgLocalization)) {
            return this._NgLocalization_9;
        }
        if ((token === import23.ROUTES)) {
            return this._ROUTES_10;
        }
        if ((token === import11.UsersService)) {
            return this._UsersService_11;
        }
        if ((token === import12.EmailService)) {
            return this._EmailService_12;
        }
        return notFoundResult;
    };
    UsersModuleInjector.prototype.destroyInternal = function () {
    };
    return UsersModuleInjector;
}(import0.NgModuleInjector));
export var UsersModuleNgFactory = new import0.NgModuleFactory(UsersModuleInjector, import1.UsersModule);
