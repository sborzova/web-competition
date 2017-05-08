/**
 * This file is generated by the Angular 2 template compiler.
 * Do not edit.
 */
 /* tslint:disable */

import * as import0 from '@angular/core/src/linker/ng_module_factory';
import * as import1 from './signup.module';
import * as import2 from '@angular/forms/src/directives';
import * as import3 from '@angular/forms/src/form_providers';
import * as import4 from '@angular/common/src/common_module';
import * as import5 from '@angular/router/src/router_module';
import * as import6 from '../../equal-validator.module';
import * as import7 from '@angular/forms/src/form_builder';
import * as import8 from '@angular/forms/src/directives/radio_control_value_accessor';
import * as import9 from '@angular/common/src/localization';
import * as import10 from '../auth.service';
import * as import11 from '@angular/core/src/di/injector';
import * as import12 from './signup.component.ngfactory';
import * as import13 from '@angular/core/src/i18n/tokens';
import * as import14 from './signup.component';
import * as import15 from '@angular/http/src/http';
import * as import16 from '../../flash-message/flash-messages.service';
import * as import17 from '@angular/router/src/router_config_loader';
class SignupModuleInjector extends import0.NgModuleInjector<import1.SignupModule> {
  _InternalFormsSharedModule_0:import2.InternalFormsSharedModule;
  _ReactiveFormsModule_1:import3.ReactiveFormsModule;
  _CommonModule_2:import4.CommonModule;
  _RouterModule_3:import5.RouterModule;
  _EqualValidatorModule_4:import6.EqualValidatorModule;
  _SignupModule_5:import1.SignupModule;
  __FormBuilder_6:import7.FormBuilder;
  __RadioControlRegistry_7:import8.RadioControlRegistry;
  __NgLocalization_8:import9.NgLocaleLocalization;
  __ROUTES_9:any[];
  __AuthService_10:import10.AuthService;
  constructor(parent:import11.Injector) {
    super(parent,[import12.SignupComponentNgFactory],[]);
  }
  get _FormBuilder_6():import7.FormBuilder {
    if ((this.__FormBuilder_6 == (null as any))) { (this.__FormBuilder_6 = new import7.FormBuilder()); }
    return this.__FormBuilder_6;
  }
  get _RadioControlRegistry_7():import8.RadioControlRegistry {
    if ((this.__RadioControlRegistry_7 == (null as any))) { (this.__RadioControlRegistry_7 = new import8.RadioControlRegistry()); }
    return this.__RadioControlRegistry_7;
  }
  get _NgLocalization_8():import9.NgLocaleLocalization {
    if ((this.__NgLocalization_8 == (null as any))) { (this.__NgLocalization_8 = new import9.NgLocaleLocalization(this.parent.get(import13.LOCALE_ID))); }
    return this.__NgLocalization_8;
  }
  get _ROUTES_9():any[] {
        if ((this.__ROUTES_9 == (null as any))) { (this.__ROUTES_9 = [[{
          path: '',
            children: [{
              path: '',
              component: import14.SignupComponent
            }
          ]
        }
    ]]); }
    return this.__ROUTES_9;
  }
  get _AuthService_10():import10.AuthService {
    if ((this.__AuthService_10 == (null as any))) { (this.__AuthService_10 = new import10.AuthService(this.parent.get(import15.Http),this.parent.get(import16.FlashMessageService))); }
    return this.__AuthService_10;
  }
  createInternal():import1.SignupModule {
    this._InternalFormsSharedModule_0 = new import2.InternalFormsSharedModule();
    this._ReactiveFormsModule_1 = new import3.ReactiveFormsModule();
    this._CommonModule_2 = new import4.CommonModule();
    this._RouterModule_3 = new import5.RouterModule(this.parent.get(import5.ROUTER_FORROOT_GUARD,(null as any)));
    this._EqualValidatorModule_4 = new import6.EqualValidatorModule();
    this._SignupModule_5 = new import1.SignupModule();
    return this._SignupModule_5;
  }
  getInternal(token:any,notFoundResult:any):any {
    if ((token === import2.InternalFormsSharedModule)) { return this._InternalFormsSharedModule_0; }
    if ((token === import3.ReactiveFormsModule)) { return this._ReactiveFormsModule_1; }
    if ((token === import4.CommonModule)) { return this._CommonModule_2; }
    if ((token === import5.RouterModule)) { return this._RouterModule_3; }
    if ((token === import6.EqualValidatorModule)) { return this._EqualValidatorModule_4; }
    if ((token === import1.SignupModule)) { return this._SignupModule_5; }
    if ((token === import7.FormBuilder)) { return this._FormBuilder_6; }
    if ((token === import8.RadioControlRegistry)) { return this._RadioControlRegistry_7; }
    if ((token === import9.NgLocalization)) { return this._NgLocalization_8; }
    if ((token === import17.ROUTES)) { return this._ROUTES_9; }
    if ((token === import10.AuthService)) { return this._AuthService_10; }
    return notFoundResult;
  }
  destroyInternal():void {
  }
}
export const SignupModuleNgFactory:import0.NgModuleFactory<import1.SignupModule> = new import0.NgModuleFactory(SignupModuleInjector,import1.SignupModule);