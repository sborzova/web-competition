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
import * as import1 from './results.module';
import * as import2 from '@angular/common/src/common_module';
import * as import3 from '../order-by.module';
import * as import4 from '@angular/router/src/router_module';
import * as import5 from '@angular/common/src/localization';
import * as import6 from '../shared/paper.service';
import * as import7 from '../instances/instance.service';
import * as import8 from '../shared/solution.service';
import * as import9 from '../shared/sort.service';
import * as import11 from './results-best/results-best.component.ngfactory';
import * as import12 from '@angular/core/src/i18n/tokens';
import * as import13 from './results-best/results-best.component';
import * as import14 from '@angular/http/src/http';
import * as import15 from '../flash-message/flash-messages.service';
import * as import16 from '@angular/router/src/router_config_loader';
var ResultsModuleInjector = (function (_super) {
    __extends(ResultsModuleInjector, _super);
    function ResultsModuleInjector(parent) {
        _super.call(this, parent, [import11.ResultsBestComponentNgFactory], []);
    }
    Object.defineProperty(ResultsModuleInjector.prototype, "_NgLocalization_4", {
        get: function () {
            if ((this.__NgLocalization_4 == null)) {
                (this.__NgLocalization_4 = new import5.NgLocaleLocalization(this.parent.get(import12.LOCALE_ID)));
            }
            return this.__NgLocalization_4;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ResultsModuleInjector.prototype, "_ROUTES_5", {
        get: function () {
            if ((this.__ROUTES_5 == null)) {
                (this.__ROUTES_5 = [[{
                            path: '',
                            children: [{
                                    path: '',
                                    component: import13.ResultsBestComponent
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
    Object.defineProperty(ResultsModuleInjector.prototype, "_PaperService_6", {
        get: function () {
            if ((this.__PaperService_6 == null)) {
                (this.__PaperService_6 = new import6.PaperService(this.parent.get(import14.Http)));
            }
            return this.__PaperService_6;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ResultsModuleInjector.prototype, "_InstanceService_7", {
        get: function () {
            if ((this.__InstanceService_7 == null)) {
                (this.__InstanceService_7 = new import7.InstanceService(this.parent.get(import14.Http), this.parent.get(import15.FlashMessageService)));
            }
            return this.__InstanceService_7;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ResultsModuleInjector.prototype, "_SolutionService_8", {
        get: function () {
            if ((this.__SolutionService_8 == null)) {
                (this.__SolutionService_8 = new import8.SolutionService(this.parent.get(import14.Http), this.parent.get(import15.FlashMessageService)));
            }
            return this.__SolutionService_8;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ResultsModuleInjector.prototype, "_SortService_9", {
        get: function () {
            if ((this.__SortService_9 == null)) {
                (this.__SortService_9 = new import9.SortService());
            }
            return this.__SortService_9;
        },
        enumerable: true,
        configurable: true
    });
    ResultsModuleInjector.prototype.createInternal = function () {
        this._CommonModule_0 = new import2.CommonModule();
        this._OrderByModule_1 = new import3.OrderByModule();
        this._RouterModule_2 = new import4.RouterModule(this.parent.get(import4.ROUTER_FORROOT_GUARD, null));
        this._ResultsModule_3 = new import1.ResultsModule();
        return this._ResultsModule_3;
    };
    ResultsModuleInjector.prototype.getInternal = function (token, notFoundResult) {
        if ((token === import2.CommonModule)) {
            return this._CommonModule_0;
        }
        if ((token === import3.OrderByModule)) {
            return this._OrderByModule_1;
        }
        if ((token === import4.RouterModule)) {
            return this._RouterModule_2;
        }
        if ((token === import1.ResultsModule)) {
            return this._ResultsModule_3;
        }
        if ((token === import5.NgLocalization)) {
            return this._NgLocalization_4;
        }
        if ((token === import16.ROUTES)) {
            return this._ROUTES_5;
        }
        if ((token === import6.PaperService)) {
            return this._PaperService_6;
        }
        if ((token === import7.InstanceService)) {
            return this._InstanceService_7;
        }
        if ((token === import8.SolutionService)) {
            return this._SolutionService_8;
        }
        if ((token === import9.SortService)) {
            return this._SortService_9;
        }
        return notFoundResult;
    };
    ResultsModuleInjector.prototype.destroyInternal = function () {
    };
    return ResultsModuleInjector;
}(import0.NgModuleInjector));
export var ResultsModuleNgFactory = new import0.NgModuleFactory(ResultsModuleInjector, import1.ResultsModule);
