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
import * as import1 from './date-format.module';
var DateFormatModuleInjector = (function (_super) {
    __extends(DateFormatModuleInjector, _super);
    function DateFormatModuleInjector(parent) {
        _super.call(this, parent, [], []);
    }
    DateFormatModuleInjector.prototype.createInternal = function () {
        this._DateFormatModule_0 = new import1.DateFormatModule();
        return this._DateFormatModule_0;
    };
    DateFormatModuleInjector.prototype.getInternal = function (token, notFoundResult) {
        if ((token === import1.DateFormatModule)) {
            return this._DateFormatModule_0;
        }
        return notFoundResult;
    };
    DateFormatModuleInjector.prototype.destroyInternal = function () {
    };
    return DateFormatModuleInjector;
}(import0.NgModuleInjector));
export var DateFormatModuleNgFactory = new import0.NgModuleFactory(DateFormatModuleInjector, import1.DateFormatModule);