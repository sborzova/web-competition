/**
 * This file is generated by the Angular 2 template compiler.
 * Do not edit.
 */
 /* tslint:disable */

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
import * as import10 from '@angular/core/src/di/injector';
import * as import11 from './signin.component.ngfactory';
import * as import12 from '@angular/core/src/i18n/tokens';
import * as import13 from './signin.component';
import * as import14 from '@angular/http/src/http';
import * as import15 from '../../flash-message/flash-messages.service';
import * as import16 from '../../preference/preference.service';
import * as import17 from '@angular/router/src/router_config_loader';
class SigninModuleInjector extends import0.NgModuleInjector<import1.SigninModule> {
  _InternalFormsSharedModule_0:import2.InternalFormsSharedModule;
  _ReactiveFormsModule_1:import3.ReactiveFormsModule;
  _CommonModule_2:import4.CommonModule;
  _RouterModule_3:import5.RouterModule;
  _SigninModule_4:import1.SigninModule;
  __FormBuilder_5:import6.FormBuilder;
  __RadioControlRegistry_6:import7.RadioControlRegistry;
  __NgLocalization_7:import8.NgLocaleLocalization;
  __ROUTES_8:any[];
  __AuthService_9:import9.AuthService;
  constructor(parent:import10.Injector) {
    super(parent,[import11.SigninComponentNgFactory],[]);
  }
  get _FormBuilder_5():import6.FormBuilder {
    if ((this.__FormBuilder_5 == (null as any))) { (this.__FormBuilder_5 = new import6.FormBuilder()); }
    return this.__FormBuilder_5;
  }
  get _RadioControlRegistry_6():import7.RadioControlRegistry {
    if ((this.__RadioControlRegistry_6 == (null as any))) { (this.__RadioControlRegistry_6 = new import7.RadioControlRegistry()); }
    return this.__RadioControlRegistry_6;
  }
  get _NgLocalization_7():import8.NgLocaleLocalization {
    if ((this.__NgLocalization_7 == (null as any))) { (this.__NgLocalization_7 = new import8.NgLocaleLocalization(this.parent.get(import12.LOCALE_ID))); }
    return this.__NgLocalization_7;
  }
  get _ROUTES_8():any[] {
        if ((this.__ROUTES_8 == (null as any))) { (this.__ROUTES_8 = [[{
          path: '',
            children: [{
              path: '',
              component: import13.SigninComponent
            }
          ]
        }
    ]]); }
    return this.__ROUTES_8;
  }
  get _AuthService_9():import9.AuthService {
    if ((this.__AuthService_9 == (null as any))) { (this.__AuthService_9 = new import9.AuthService(this.parent.get(import14.Http),this.parent.get(import15.FlashMessageService),this.parent.get(import16.PreferenceService))); }
    return this.__AuthService_9;
  }
  createInternal():import1.SigninModule {
    this._InternalFormsSharedModule_0 = new import2.InternalFormsSharedModule();
    this._ReactiveFormsModule_1 = new import3.ReactiveFormsModule();
    this._CommonModule_2 = new import4.CommonModule();
    this._RouterModule_3 = new import5.RouterModule(this.parent.get(import5.ROUTER_FORROOT_GUARD,(null as any)));
    this._SigninModule_4 = new import1.SigninModule();
    return this._SigninModule_4;
  }
  getInternal(token:any,notFoundResult:any):any {
    if ((token === import2.InternalFormsSharedModule)) { return this._InternalFormsSharedModule_0; }
    if ((token === import3.ReactiveFormsModule)) { return this._ReactiveFormsModule_1; }
    if ((token === import4.CommonModule)) { return this._CommonModule_2; }
    if ((token === import5.RouterModule)) { return this._RouterModule_3; }
    if ((token === import1.SigninModule)) { return this._SigninModule_4; }
    if ((token === import6.FormBuilder)) { return this._FormBuilder_5; }
    if ((token === import7.RadioControlRegistry)) { return this._RadioControlRegistry_6; }
    if ((token === import8.NgLocalization)) { return this._NgLocalization_7; }
    if ((token === import17.ROUTES)) { return this._ROUTES_8; }
    if ((token === import9.AuthService)) { return this._AuthService_9; }
    return notFoundResult;
  }
  destroyInternal():void {
  }
}
export const SigninModuleNgFactory:import0.NgModuleFactory<import1.SigninModule> = new import0.NgModuleFactory(SigninModuleInjector,import1.SigninModule);