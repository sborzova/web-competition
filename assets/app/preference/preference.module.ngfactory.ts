/**
 * This file is generated by the Angular 2 template compiler.
 * Do not edit.
 */
 /* tslint:disable */

import * as import0 from '@angular/core/src/linker/ng_module_factory';
import * as import1 from './preference.module';
import * as import2 from '@angular/common/src/common_module';
import * as import3 from '@angular/router/src/router_module';
import * as import4 from '@angular/forms/src/directives';
import * as import5 from '@angular/forms/src/form_providers';
import * as import6 from '@angular/common/src/localization';
import * as import7 from '@angular/forms/src/directives/radio_control_value_accessor';
import * as import8 from './preference.service';
import * as import9 from '@angular/core/src/di/injector';
import * as import10 from './preference.component.ngfactory';
import * as import11 from '@angular/core/src/i18n/tokens';
import * as import12 from './preference.component';
import * as import13 from '@angular/http/src/http';
import * as import14 from '@angular/router/src/router_config_loader';
class PreferenceModuleInjector extends import0.NgModuleInjector<import1.PreferenceModule> {
  _CommonModule_0:import2.CommonModule;
  _RouterModule_1:import3.RouterModule;
  _InternalFormsSharedModule_2:import4.InternalFormsSharedModule;
  _FormsModule_3:import5.FormsModule;
  _PreferenceModule_4:import1.PreferenceModule;
  __NgLocalization_5:import6.NgLocaleLocalization;
  __RadioControlRegistry_6:import7.RadioControlRegistry;
  __ROUTES_7:any[];
  __PreferenceService_8:import8.PreferenceService;
  constructor(parent:import9.Injector) {
    super(parent,[import10.PreferenceComponentNgFactory],[]);
  }
  get _NgLocalization_5():import6.NgLocaleLocalization {
    if ((this.__NgLocalization_5 == (null as any))) { (this.__NgLocalization_5 = new import6.NgLocaleLocalization(this.parent.get(import11.LOCALE_ID))); }
    return this.__NgLocalization_5;
  }
  get _RadioControlRegistry_6():import7.RadioControlRegistry {
    if ((this.__RadioControlRegistry_6 == (null as any))) { (this.__RadioControlRegistry_6 = new import7.RadioControlRegistry()); }
    return this.__RadioControlRegistry_6;
  }
  get _ROUTES_7():any[] {
        if ((this.__ROUTES_7 == (null as any))) { (this.__ROUTES_7 = [[{
          path: '',
            children: [{
              path: '',
              component: import12.PreferenceComponent
            }
          ]
        }
    ]]); }
    return this.__ROUTES_7;
  }
  get _PreferenceService_8():import8.PreferenceService {
    if ((this.__PreferenceService_8 == (null as any))) { (this.__PreferenceService_8 = new import8.PreferenceService(this.parent.get(import13.Http))); }
    return this.__PreferenceService_8;
  }
  createInternal():import1.PreferenceModule {
    this._CommonModule_0 = new import2.CommonModule();
    this._RouterModule_1 = new import3.RouterModule(this.parent.get(import3.ROUTER_FORROOT_GUARD,(null as any)));
    this._InternalFormsSharedModule_2 = new import4.InternalFormsSharedModule();
    this._FormsModule_3 = new import5.FormsModule();
    this._PreferenceModule_4 = new import1.PreferenceModule();
    return this._PreferenceModule_4;
  }
  getInternal(token:any,notFoundResult:any):any {
    if ((token === import2.CommonModule)) { return this._CommonModule_0; }
    if ((token === import3.RouterModule)) { return this._RouterModule_1; }
    if ((token === import4.InternalFormsSharedModule)) { return this._InternalFormsSharedModule_2; }
    if ((token === import5.FormsModule)) { return this._FormsModule_3; }
    if ((token === import1.PreferenceModule)) { return this._PreferenceModule_4; }
    if ((token === import6.NgLocalization)) { return this._NgLocalization_5; }
    if ((token === import7.RadioControlRegistry)) { return this._RadioControlRegistry_6; }
    if ((token === import14.ROUTES)) { return this._ROUTES_7; }
    if ((token === import8.PreferenceService)) { return this._PreferenceService_8; }
    return notFoundResult;
  }
  destroyInternal():void {
  }
}
export const PreferenceModuleNgFactory:import0.NgModuleFactory<import1.PreferenceModule> = new import0.NgModuleFactory(PreferenceModuleInjector,import1.PreferenceModule);