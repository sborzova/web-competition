/**
 * This file is generated by the Angular 2 template compiler.
 * Do not edit.
 */
 /* tslint:disable */

import * as import0 from '@angular/core/src/linker/ng_module_factory';
import * as import1 from './profile.module';
import * as import2 from '@angular/forms/src/directives';
import * as import3 from '@angular/forms/src/form_providers';
import * as import4 from '@angular/common/src/common_module';
import * as import5 from '@angular/router/src/router_module';
import * as import6 from '../equal-validator.module';
import * as import7 from '@angular/forms/src/form_builder';
import * as import8 from '@angular/forms/src/directives/radio_control_value_accessor';
import * as import9 from '@angular/common/src/localization';
import * as import10 from './profile.service';
import * as import11 from '@angular/core/src/di/injector';
import * as import12 from './profile-edit/profile-edit.component.ngfactory';
import * as import13 from './profile-edit-password/profile-edit-password.component.ngfactory';
import * as import14 from './profile-info/profile-info.component.ngfactory';
import * as import15 from '@angular/core/src/i18n/tokens';
import * as import16 from './profile-edit/profile-edit.component';
import * as import17 from './profile-edit-password/profile-edit-password.component';
import * as import18 from './profile-info/profile-info.component';
import * as import19 from '@angular/http/src/http';
import * as import20 from '../flash-message/flash-messages.service';
import * as import21 from '@angular/router/src/router_config_loader';
class ProfileModuleInjector extends import0.NgModuleInjector<import1.ProfileModule> {
  _InternalFormsSharedModule_0:import2.InternalFormsSharedModule;
  _ReactiveFormsModule_1:import3.ReactiveFormsModule;
  _CommonModule_2:import4.CommonModule;
  _RouterModule_3:import5.RouterModule;
  _EqualValidatorModule_4:import6.EqualValidatorModule;
  _ProfileModule_5:import1.ProfileModule;
  __FormBuilder_6:import7.FormBuilder;
  __RadioControlRegistry_7:import8.RadioControlRegistry;
  __NgLocalization_8:import9.NgLocaleLocalization;
  __ROUTES_9:any[];
  __ProfileService_10:import10.ProfileService;
  constructor(parent:import11.Injector) {
    super(parent,[
      import12.ProfileEditComponentNgFactory,
      import13.ProfileEditPasswordComponentNgFactory,
      import14.ProfileInfoComponentNgFactory
    ]
    ,[]);
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
    if ((this.__NgLocalization_8 == (null as any))) { (this.__NgLocalization_8 = new import9.NgLocaleLocalization(this.parent.get(import15.LOCALE_ID))); }
    return this.__NgLocalization_8;
  }
  get _ROUTES_9():any[] {
        if ((this.__ROUTES_9 == (null as any))) { (this.__ROUTES_9 = [[{
          path: '',
          children: [
            {
              path: '',
              redirectTo: 'info',
              pathMatch: 'full'
            }
            ,
            {
              path: 'edit',
              component: import16.ProfileEditComponent
            }
            ,
            {
              path: 'editpass',
              component: import17.ProfileEditPasswordComponent
            }
            ,
            {
              path: 'info',
              component: import18.ProfileInfoComponent
            }

          ]

        }
    ]]); }
    return this.__ROUTES_9;
  }
  get _ProfileService_10():import10.ProfileService {
    if ((this.__ProfileService_10 == (null as any))) { (this.__ProfileService_10 = new import10.ProfileService(this.parent.get(import19.Http),this.parent.get(import20.FlashMessageService))); }
    return this.__ProfileService_10;
  }
  createInternal():import1.ProfileModule {
    this._InternalFormsSharedModule_0 = new import2.InternalFormsSharedModule();
    this._ReactiveFormsModule_1 = new import3.ReactiveFormsModule();
    this._CommonModule_2 = new import4.CommonModule();
    this._RouterModule_3 = new import5.RouterModule(this.parent.get(import5.ROUTER_FORROOT_GUARD,(null as any)));
    this._EqualValidatorModule_4 = new import6.EqualValidatorModule();
    this._ProfileModule_5 = new import1.ProfileModule();
    return this._ProfileModule_5;
  }
  getInternal(token:any,notFoundResult:any):any {
    if ((token === import2.InternalFormsSharedModule)) { return this._InternalFormsSharedModule_0; }
    if ((token === import3.ReactiveFormsModule)) { return this._ReactiveFormsModule_1; }
    if ((token === import4.CommonModule)) { return this._CommonModule_2; }
    if ((token === import5.RouterModule)) { return this._RouterModule_3; }
    if ((token === import6.EqualValidatorModule)) { return this._EqualValidatorModule_4; }
    if ((token === import1.ProfileModule)) { return this._ProfileModule_5; }
    if ((token === import7.FormBuilder)) { return this._FormBuilder_6; }
    if ((token === import8.RadioControlRegistry)) { return this._RadioControlRegistry_7; }
    if ((token === import9.NgLocalization)) { return this._NgLocalization_8; }
    if ((token === import21.ROUTES)) { return this._ROUTES_9; }
    if ((token === import10.ProfileService)) { return this._ProfileService_10; }
    return notFoundResult;
  }
  destroyInternal():void {
  }
}
export const ProfileModuleNgFactory:import0.NgModuleFactory<import1.ProfileModule> = new import0.NgModuleFactory(ProfileModuleInjector,import1.ProfileModule);