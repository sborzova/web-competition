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
import * as import1 from './validation.module';
import * as import2 from '@angular/forms/src/directives';
import * as import3 from '@angular/forms/src/form_providers';
import * as import4 from '@angular/common/src/common_module';
import * as import5 from '../escape-html.module';
import * as import6 from '@angular/router/src/router_module';
import * as import7 from '@angular/forms/src/form_builder';
import * as import8 from '@angular/forms/src/directives/radio_control_value_accessor';
import * as import9 from '@angular/common/src/localization';
import * as import10 from '../shared/paper.service';
import * as import11 from '../shared/solution.service';
import * as import13 from './validation.component.ngfactory';
import * as import14 from '@angular/core/src/i18n/tokens';
import * as import15 from './validation.component';
import * as import16 from '@angular/http/src/http';
import * as import17 from '../flash-message/flash-messages.service';
import * as import18 from '@angular/router/src/router_config_loader';
var ValidationModuleInjector = (function (_super) {
    __extends(ValidationModuleInjector, _super);
    function ValidationModuleInjector(parent) {
        _super.call(this, parent, [import13.ValidationComponentNgFactory], []);
    }
    Object.defineProperty(ValidationModuleInjector.prototype, "_FormBuilder_7", {
        get: function () {
            if ((this.__FormBuilder_7 == null)) {
                (this.__FormBuilder_7 = new import7.FormBuilder());
            }
            return this.__FormBuilder_7;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ValidationModuleInjector.prototype, "_RadioControlRegistry_8", {
        get: function () {
            if ((this.__RadioControlRegistry_8 == null)) {
                (this.__RadioControlRegistry_8 = new import8.RadioControlRegistry());
            }
            return this.__RadioControlRegistry_8;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ValidationModuleInjector.prototype, "_NgLocalization_9", {
        get: function () {
            if ((this.__NgLocalization_9 == null)) {
                (this.__NgLocalization_9 = new import9.NgLocaleLocalization(this.parent.get(import14.LOCALE_ID)));
            }
            return this.__NgLocalization_9;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ValidationModuleInjector.prototype, "_ROUTES_10", {
        get: function () {
            if ((this.__ROUTES_10 == null)) {
                (this.__ROUTES_10 = [[{
                            path: '',
                            children: [{
                                    path: '',
                                    component: import15.ValidationComponent
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
    Object.defineProperty(ValidationModuleInjector.prototype, "_PaperService_11", {
        get: function () {
            if ((this.__PaperService_11 == null)) {
                (this.__PaperService_11 = new import10.PaperService(this.parent.get(import16.Http)));
            }
            return this.__PaperService_11;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ValidationModuleInjector.prototype, "_SolutionService_12", {
        get: function () {
            if ((this.__SolutionService_12 == null)) {
                (this.__SolutionService_12 = new import11.SolutionService(this.parent.get(import16.Http), this.parent.get(import17.FlashMessageService)));
            }
            return this.__SolutionService_12;
        },
        enumerable: true,
        configurable: true
    });
    ValidationModuleInjector.prototype.createInternal = function () {
        this._InternalFormsSharedModule_0 = new import2.InternalFormsSharedModule();
        this._ReactiveFormsModule_1 = new import3.ReactiveFormsModule();
        this._FormsModule_2 = new import3.FormsModule();
        this._CommonModule_3 = new import4.CommonModule();
        this._EscapeHtmlModule_4 = new import5.EscapeHtmlModule();
        this._RouterModule_5 = new import6.RouterModule(this.parent.get(import6.ROUTER_FORROOT_GUARD, null));
        this._ValidationModule_6 = new import1.ValidationModule();
        return this._ValidationModule_6;
    };
    ValidationModuleInjector.prototype.getInternal = function (token, notFoundResult) {
        if ((token === import2.InternalFormsSharedModule)) {
            return this._InternalFormsSharedModule_0;
        }
        if ((token === import3.ReactiveFormsModule)) {
            return this._ReactiveFormsModule_1;
        }
        if ((token === import3.FormsModule)) {
            return this._FormsModule_2;
        }
        if ((token === import4.CommonModule)) {
            return this._CommonModule_3;
        }
        if ((token === import5.EscapeHtmlModule)) {
            return this._EscapeHtmlModule_4;
        }
        if ((token === import6.RouterModule)) {
            return this._RouterModule_5;
        }
        if ((token === import1.ValidationModule)) {
            return this._ValidationModule_6;
        }
        if ((token === import7.FormBuilder)) {
            return this._FormBuilder_7;
        }
        if ((token === import8.RadioControlRegistry)) {
            return this._RadioControlRegistry_8;
        }
        if ((token === import9.NgLocalization)) {
            return this._NgLocalization_9;
        }
        if ((token === import18.ROUTES)) {
            return this._ROUTES_10;
        }
        if ((token === import10.PaperService)) {
            return this._PaperService_11;
        }
        if ((token === import11.SolutionService)) {
            return this._SolutionService_12;
        }
        return notFoundResult;
    };
    ValidationModuleInjector.prototype.destroyInternal = function () {
    };
    return ValidationModuleInjector;
}(import0.NgModuleInjector));
export var ValidationModuleNgFactory = new import0.NgModuleFactory(ValidationModuleInjector, import1.ValidationModule);
