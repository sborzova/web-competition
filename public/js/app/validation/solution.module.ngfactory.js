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
import * as import1 from './solution.module';
import * as import2 from '@angular/common/src/common_module';
import * as import3 from '@angular/common/src/localization';
import * as import4 from './solution.service';
import * as import6 from '@angular/core/src/i18n/tokens';
import * as import7 from '@angular/http/src/http';
import * as import8 from '../flash-message/flash-messages.service';
var SolutionModuleInjector = (function (_super) {
    __extends(SolutionModuleInjector, _super);
    function SolutionModuleInjector(parent) {
        _super.call(this, parent, [], []);
    }
    Object.defineProperty(SolutionModuleInjector.prototype, "_NgLocalization_2", {
        get: function () {
            if ((this.__NgLocalization_2 == null)) {
                (this.__NgLocalization_2 = new import3.NgLocaleLocalization(this.parent.get(import6.LOCALE_ID)));
            }
            return this.__NgLocalization_2;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SolutionModuleInjector.prototype, "_SolutionService_3", {
        get: function () {
            if ((this.__SolutionService_3 == null)) {
                (this.__SolutionService_3 = new import4.SolutionService(this.parent.get(import7.Http), this.parent.get(import8.FlashMessageService)));
            }
            return this.__SolutionService_3;
        },
        enumerable: true,
        configurable: true
    });
    SolutionModuleInjector.prototype.createInternal = function () {
        this._CommonModule_0 = new import2.CommonModule();
        this._SolutionModule_1 = new import1.SolutionModule();
        return this._SolutionModule_1;
    };
    SolutionModuleInjector.prototype.getInternal = function (token, notFoundResult) {
        if ((token === import2.CommonModule)) {
            return this._CommonModule_0;
        }
        if ((token === import1.SolutionModule)) {
            return this._SolutionModule_1;
        }
        if ((token === import3.NgLocalization)) {
            return this._NgLocalization_2;
        }
        if ((token === import4.SolutionService)) {
            return this._SolutionService_3;
        }
        return notFoundResult;
    };
    SolutionModuleInjector.prototype.destroyInternal = function () {
    };
    return SolutionModuleInjector;
}(import0.NgModuleInjector));
export var SolutionModuleNgFactory = new import0.NgModuleFactory(SolutionModuleInjector, import1.SolutionModule);
