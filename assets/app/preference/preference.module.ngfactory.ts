/**
 * This file is generated by the Angular 2 template compiler.
 * Do not edit.
 */
 /* tslint:disable */

import * as import0 from '@angular/core/src/linker/ng_module_factory';
import * as import1 from './preference.module';
import * as import2 from '@angular/common/src/common_module';
import * as import3 from '@angular/router/src/router_module';
import * as import4 from '@angular/common/src/localization';
import * as import5 from '@angular/core/src/di/injector';
import * as import6 from './preference.component.ngfactory';
import * as import7 from '@angular/core/src/i18n/tokens';
import * as import8 from './preference.component';
import * as import9 from '@angular/router/src/router_config_loader';
class PreferenceModuleInjector extends import0.NgModuleInjector<import1.PreferenceModule> {
  _CommonModule_0:import2.CommonModule;
  _RouterModule_1:import3.RouterModule;
  _PreferenceModule_2:import1.PreferenceModule;
  __NgLocalization_3:import4.NgLocaleLocalization;
  __ROUTES_4:any[];
  constructor(parent:import5.Injector) {
    super(parent,[import6.PreferenceComponentNgFactory],[]);
  }
  get _NgLocalization_3():import4.NgLocaleLocalization {
    if ((this.__NgLocalization_3 == (null as any))) { (this.__NgLocalization_3 = new import4.NgLocaleLocalization(this.parent.get(import7.LOCALE_ID))); }
    return this.__NgLocalization_3;
  }
  get _ROUTES_4():any[] {
        if ((this.__ROUTES_4 == (null as any))) { (this.__ROUTES_4 = [[{
          path: '',
            children: [{
              path: '',
              component: import8.PreferenceComponent
            }
          ]
        }
    ]]); }
    return this.__ROUTES_4;
  }
  createInternal():import1.PreferenceModule {
    this._CommonModule_0 = new import2.CommonModule();
    this._RouterModule_1 = new import3.RouterModule(this.parent.get(import3.ROUTER_FORROOT_GUARD,(null as any)));
    this._PreferenceModule_2 = new import1.PreferenceModule();
    return this._PreferenceModule_2;
  }
  getInternal(token:any,notFoundResult:any):any {
    if ((token === import2.CommonModule)) { return this._CommonModule_0; }
    if ((token === import3.RouterModule)) { return this._RouterModule_1; }
    if ((token === import1.PreferenceModule)) { return this._PreferenceModule_2; }
    if ((token === import4.NgLocalization)) { return this._NgLocalization_3; }
    if ((token === import9.ROUTES)) { return this._ROUTES_4; }
    return notFoundResult;
  }
  destroyInternal():void {
  }
}
export const PreferenceModuleNgFactory:import0.NgModuleFactory<import1.PreferenceModule> = new import0.NgModuleFactory(PreferenceModuleInjector,import1.PreferenceModule);