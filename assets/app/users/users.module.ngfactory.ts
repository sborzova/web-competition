/**
 * This file is generated by the Angular 2 template compiler.
 * Do not edit.
 */
 /* tslint:disable */

import * as import0 from '@angular/core/src/linker/ng_module_factory';
import * as import1 from './users.module';
import * as import2 from '@angular/forms/src/directives';
import * as import3 from '@angular/forms/src/form_providers';
import * as import4 from '@angular/common/src/common_module';
import * as import5 from '../shared/pipes/order-by.module';
import * as import6 from '@angular/router/src/router_module';
import * as import7 from '../shared/directives/equal-validator.module';
import * as import8 from '@angular/forms/src/form_builder';
import * as import9 from '@angular/forms/src/directives/radio_control_value_accessor';
import * as import10 from '@angular/common/src/localization';
import * as import11 from './users.service';
import * as import12 from '../auth/signin/email.service';
import * as import13 from '@angular/core/src/di/injector';
import * as import14 from './users.component.ngfactory';
import * as import15 from './user-edit/user-edit.component.ngfactory';
import * as import16 from './user-edit-password/user-edit-password.component.ngfactory';
import * as import17 from '@angular/core/src/i18n/tokens';
import * as import18 from './users.component';
import * as import19 from './user-edit/user-edit.component';
import * as import20 from './user-edit-password/user-edit-password.component';
import * as import21 from '@angular/http/src/http';
import * as import22 from '../flash-message/flash-messages.service';
import * as import23 from '@angular/router/src/router_config_loader';
class UsersModuleInjector extends import0.NgModuleInjector<import1.UsersModule> {
  _InternalFormsSharedModule_0:import2.InternalFormsSharedModule;
  _ReactiveFormsModule_1:import3.ReactiveFormsModule;
  _CommonModule_2:import4.CommonModule;
  _OrderByModule_3:import5.OrderByModule;
  _RouterModule_4:import6.RouterModule;
  _EqualValidatorModule_5:import7.EqualValidatorModule;
  _UsersModule_6:import1.UsersModule;
  __FormBuilder_7:import8.FormBuilder;
  __RadioControlRegistry_8:import9.RadioControlRegistry;
  __NgLocalization_9:import10.NgLocaleLocalization;
  __ROUTES_10:any[];
  __UsersService_11:import11.UsersService;
  __EmailService_12:import12.EmailService;
  constructor(parent:import13.Injector) {
    super(parent,[
      import14.UsersComponentNgFactory,
      import15.UserEditComponentNgFactory,
      import16.UserEditPasswordComponentNgFactory
    ]
    ,[]);
  }
  get _FormBuilder_7():import8.FormBuilder {
    if ((this.__FormBuilder_7 == (null as any))) { (this.__FormBuilder_7 = new import8.FormBuilder()); }
    return this.__FormBuilder_7;
  }
  get _RadioControlRegistry_8():import9.RadioControlRegistry {
    if ((this.__RadioControlRegistry_8 == (null as any))) { (this.__RadioControlRegistry_8 = new import9.RadioControlRegistry()); }
    return this.__RadioControlRegistry_8;
  }
  get _NgLocalization_9():import10.NgLocaleLocalization {
    if ((this.__NgLocalization_9 == (null as any))) { (this.__NgLocalization_9 = new import10.NgLocaleLocalization(this.parent.get(import17.LOCALE_ID))); }
    return this.__NgLocalization_9;
  }
  get _ROUTES_10():any[] {
        if ((this.__ROUTES_10 == (null as any))) { (this.__ROUTES_10 = [[{
          path: '',
          children: [
            {
              path: '',
              redirectTo: 'all',
              pathMatch: 'full'
            }
            ,
            {
              path: 'all',
              component: import18.UsersComponent
            }
            ,
            {
              path: 'edit/:id',
              component: import19.UserEditComponent
            }
            ,
            {
              path: 'editpass/:id',
              component: import20.UserEditPasswordComponent
            }

          ]

        }
    ]]); }
    return this.__ROUTES_10;
  }
  get _UsersService_11():import11.UsersService {
    if ((this.__UsersService_11 == (null as any))) { (this.__UsersService_11 = new import11.UsersService(this.parent.get(import21.Http),this.parent.get(import22.FlashMessageService))); }
    return this.__UsersService_11;
  }
  get _EmailService_12():import12.EmailService {
    if ((this.__EmailService_12 == (null as any))) { (this.__EmailService_12 = new import12.EmailService(this.parent.get(import21.Http),this.parent.get(import22.FlashMessageService))); }
    return this.__EmailService_12;
  }
  createInternal():import1.UsersModule {
    this._InternalFormsSharedModule_0 = new import2.InternalFormsSharedModule();
    this._ReactiveFormsModule_1 = new import3.ReactiveFormsModule();
    this._CommonModule_2 = new import4.CommonModule();
    this._OrderByModule_3 = new import5.OrderByModule();
    this._RouterModule_4 = new import6.RouterModule(this.parent.get(import6.ROUTER_FORROOT_GUARD,(null as any)));
    this._EqualValidatorModule_5 = new import7.EqualValidatorModule();
    this._UsersModule_6 = new import1.UsersModule();
    return this._UsersModule_6;
  }
  getInternal(token:any,notFoundResult:any):any {
    if ((token === import2.InternalFormsSharedModule)) { return this._InternalFormsSharedModule_0; }
    if ((token === import3.ReactiveFormsModule)) { return this._ReactiveFormsModule_1; }
    if ((token === import4.CommonModule)) { return this._CommonModule_2; }
    if ((token === import5.OrderByModule)) { return this._OrderByModule_3; }
    if ((token === import6.RouterModule)) { return this._RouterModule_4; }
    if ((token === import7.EqualValidatorModule)) { return this._EqualValidatorModule_5; }
    if ((token === import1.UsersModule)) { return this._UsersModule_6; }
    if ((token === import8.FormBuilder)) { return this._FormBuilder_7; }
    if ((token === import9.RadioControlRegistry)) { return this._RadioControlRegistry_8; }
    if ((token === import10.NgLocalization)) { return this._NgLocalization_9; }
    if ((token === import23.ROUTES)) { return this._ROUTES_10; }
    if ((token === import11.UsersService)) { return this._UsersService_11; }
    if ((token === import12.EmailService)) { return this._EmailService_12; }
    return notFoundResult;
  }
  destroyInternal():void {
  }
}
export const UsersModuleNgFactory:import0.NgModuleFactory<import1.UsersModule> = new import0.NgModuleFactory(UsersModuleInjector,import1.UsersModule);