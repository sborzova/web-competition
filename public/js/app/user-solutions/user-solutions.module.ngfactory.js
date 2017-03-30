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
import * as import1 from './user-solutions.module';
import * as import2 from '@angular/forms/src/directives';
import * as import3 from '@angular/forms/src/form_providers';
import * as import4 from '@angular/common/src/common_module';
import * as import5 from '../order-by.module';
import * as import6 from '../escape-html.module';
import * as import7 from '@angular/router/src/router_module';
import * as import8 from '@angular/forms/src/form_builder';
import * as import9 from '@angular/forms/src/directives/radio_control_value_accessor';
import * as import10 from '@angular/common/src/localization';
import * as import11 from '../shared/paper.service';
import * as import12 from '../shared/solution.service';
import * as import13 from '../shared/sort.service';
import * as import15 from './user-solutions.component.ngfactory';
import * as import16 from '@angular/core/src/i18n/tokens';
import * as import17 from './user-solutions.component';
import * as import18 from '@angular/http/src/http';
import * as import19 from '../flash-message/flash-messages.service';
import * as import20 from '@angular/router/src/router_config_loader';
var UserSolutionsModuleInjector = (function (_super) {
    __extends(UserSolutionsModuleInjector, _super);
    function UserSolutionsModuleInjector(parent) {
        _super.call(this, parent, [import15.UserSolutionsComponentNgFactory], []);
    }
    Object.defineProperty(UserSolutionsModuleInjector.prototype, "_FormBuilder_8", {
        get: function () {
            if ((this.__FormBuilder_8 == null)) {
                (this.__FormBuilder_8 = new import8.FormBuilder());
            }
            return this.__FormBuilder_8;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UserSolutionsModuleInjector.prototype, "_RadioControlRegistry_9", {
        get: function () {
            if ((this.__RadioControlRegistry_9 == null)) {
                (this.__RadioControlRegistry_9 = new import9.RadioControlRegistry());
            }
            return this.__RadioControlRegistry_9;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UserSolutionsModuleInjector.prototype, "_NgLocalization_10", {
        get: function () {
            if ((this.__NgLocalization_10 == null)) {
                (this.__NgLocalization_10 = new import10.NgLocaleLocalization(this.parent.get(import16.LOCALE_ID)));
            }
            return this.__NgLocalization_10;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UserSolutionsModuleInjector.prototype, "_ROUTES_11", {
        get: function () {
            if ((this.__ROUTES_11 == null)) {
                (this.__ROUTES_11 = [[{
                            path: '',
                            children: [
                                {
                                    path: '',
                                    redirectTo: 'all',
                                    pathMatch: 'full'
                                },
                                {
                                    path: 'all',
                                    component: import17.UserSolutionsComponent
                                }
                            ]
                        }
                    ]]);
            }
            return this.__ROUTES_11;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UserSolutionsModuleInjector.prototype, "_PaperService_12", {
        get: function () {
            if ((this.__PaperService_12 == null)) {
                (this.__PaperService_12 = new import11.PaperService(this.parent.get(import18.Http)));
            }
            return this.__PaperService_12;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UserSolutionsModuleInjector.prototype, "_SolutionService_13", {
        get: function () {
            if ((this.__SolutionService_13 == null)) {
                (this.__SolutionService_13 = new import12.SolutionService(this.parent.get(import18.Http), this.parent.get(import19.FlashMessageService)));
            }
            return this.__SolutionService_13;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UserSolutionsModuleInjector.prototype, "_SortService_14", {
        get: function () {
            if ((this.__SortService_14 == null)) {
                (this.__SortService_14 = new import13.SortService());
            }
            return this.__SortService_14;
        },
        enumerable: true,
        configurable: true
    });
    UserSolutionsModuleInjector.prototype.createInternal = function () {
        this._InternalFormsSharedModule_0 = new import2.InternalFormsSharedModule();
        this._ReactiveFormsModule_1 = new import3.ReactiveFormsModule();
        this._FormsModule_2 = new import3.FormsModule();
        this._CommonModule_3 = new import4.CommonModule();
        this._OrderByModule_4 = new import5.OrderByModule();
        this._EscapeHtmlModule_5 = new import6.EscapeHtmlModule();
        this._RouterModule_6 = new import7.RouterModule(this.parent.get(import7.ROUTER_FORROOT_GUARD, null));
        this._UserSolutionsModule_7 = new import1.UserSolutionsModule();
        return this._UserSolutionsModule_7;
    };
    UserSolutionsModuleInjector.prototype.getInternal = function (token, notFoundResult) {
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
        if ((token === import5.OrderByModule)) {
            return this._OrderByModule_4;
        }
        if ((token === import6.EscapeHtmlModule)) {
            return this._EscapeHtmlModule_5;
        }
        if ((token === import7.RouterModule)) {
            return this._RouterModule_6;
        }
        if ((token === import1.UserSolutionsModule)) {
            return this._UserSolutionsModule_7;
        }
        if ((token === import8.FormBuilder)) {
            return this._FormBuilder_8;
        }
        if ((token === import9.RadioControlRegistry)) {
            return this._RadioControlRegistry_9;
        }
        if ((token === import10.NgLocalization)) {
            return this._NgLocalization_10;
        }
        if ((token === import20.ROUTES)) {
            return this._ROUTES_11;
        }
        if ((token === import11.PaperService)) {
            return this._PaperService_12;
        }
        if ((token === import12.SolutionService)) {
            return this._SolutionService_13;
        }
        if ((token === import13.SortService)) {
            return this._SortService_14;
        }
        return notFoundResult;
    };
    UserSolutionsModuleInjector.prototype.destroyInternal = function () {
    };
    return UserSolutionsModuleInjector;
}(import0.NgModuleInjector));
export var UserSolutionsModuleNgFactory = new import0.NgModuleFactory(UserSolutionsModuleInjector, import1.UserSolutionsModule);