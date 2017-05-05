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
import * as import4 from '../shared/file.service';
import * as import5 from '../shared/solution.service';
import * as import7 from '@angular/core/src/i18n/tokens';
import * as import8 from '@angular/http/src/http';
import * as import9 from '../shared/paper.service';
import * as import10 from '../flash-message/flash-messages.service';
var SolutionModuleInjector = (function (_super) {
    __extends(SolutionModuleInjector, _super);
    function SolutionModuleInjector(parent) {
        _super.call(this, parent, [], []);
    }
    Object.defineProperty(SolutionModuleInjector.prototype, "_NgLocalization_2", {
        get: function () {
            if ((this.__NgLocalization_2 == null)) {
                (this.__NgLocalization_2 = new import3.NgLocaleLocalization(this.parent.get(import7.LOCALE_ID)));
            }
            return this.__NgLocalization_2;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SolutionModuleInjector.prototype, "_FileService_3", {
        get: function () {
            if ((this.__FileService_3 == null)) {
                (this.__FileService_3 = new import4.FileService(this.parent.get(import8.Http)));
            }
            return this.__FileService_3;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SolutionModuleInjector.prototype, "_SolutionService_4", {
        get: function () {
            if ((this.__SolutionService_4 == null)) {
                (this.__SolutionService_4 = new import5.SolutionService(this.parent.get(import8.Http), this.parent.get(import9.PaperService), this.parent.get(import10.FlashMessageService), this._FileService_3));
            }
            return this.__SolutionService_4;
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
        if ((token === import4.FileService)) {
            return this._FileService_3;
        }
        if ((token === import5.SolutionService)) {
            return this._SolutionService_4;
        }
        return notFoundResult;
    };
    SolutionModuleInjector.prototype.destroyInternal = function () {
    };
    return SolutionModuleInjector;
}(import0.NgModuleInjector));
export var SolutionModuleNgFactory = new import0.NgModuleFactory(SolutionModuleInjector, import1.SolutionModule);