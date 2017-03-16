/**
 * This file is generated by the Angular 2 template compiler.
 * Do not edit.
 */
 /* tslint:disable */

import * as import0 from '@angular/core/src/linker/ng_module_factory';
import * as import1 from './instance.module';
import * as import2 from '@angular/forms/src/directives';
import * as import3 from '@angular/forms/src/form_providers';
import * as import4 from '@angular/common/src/common_module';
import * as import5 from '../order-by.module';
import * as import6 from '../escape-html.module';
import * as import7 from '@angular/router/src/router_module';
import * as import8 from '@angular/forms/src/form_builder';
import * as import9 from '@angular/forms/src/directives/radio_control_value_accessor';
import * as import10 from '@angular/common/src/localization';
import * as import11 from './instance.service';
import * as import12 from '@angular/core/src/di/injector';
import * as import13 from './instances.component.ngfactory';
import * as import14 from './instance-new/instance-new.component.ngfactory';
import * as import15 from './instance-update/instance-update.component.ngfactory';
import * as import16 from './instance-stats/instance-stats.component.ngfactory';
import * as import17 from '@angular/core/src/i18n/tokens';
import * as import18 from './instances.component';
import * as import19 from './instance-new/instance-new.component';
import * as import20 from './instance-update/instance-update.component';
import * as import21 from './instance-stats/instance-stats.component';
import * as import22 from '@angular/http/src/http';
import * as import23 from '../flash-message/flash-messages.service';
import * as import24 from '@angular/router/src/router_config_loader';
class InstanceModuleInjector extends import0.NgModuleInjector<import1.InstanceModule> {
  _InternalFormsSharedModule_0:import2.InternalFormsSharedModule;
  _ReactiveFormsModule_1:import3.ReactiveFormsModule;
  _CommonModule_2:import4.CommonModule;
  _OrderByModule_3:import5.OrderByModule;
  _EscapeHtmlModule_4:import6.EscapeHtmlModule;
  _RouterModule_5:import7.RouterModule;
  _InstanceModule_6:import1.InstanceModule;
  __FormBuilder_7:import8.FormBuilder;
  __RadioControlRegistry_8:import9.RadioControlRegistry;
  __NgLocalization_9:import10.NgLocaleLocalization;
  __ROUTES_10:any[];
  __InstanceService_11:import11.InstanceService;
  constructor(parent:import12.Injector) {
    super(parent,[
      import13.InstancesComponentNgFactory,
      import14.InstanceCreateComponentNgFactory,
      import15.InstanceEditComponentNgFactory,
      import16.InstanceStatsComponentNgFactory
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
              component: import18.InstancesComponent
            }
            ,
            {
              path: 'create',
              component: import19.InstanceCreateComponent
            }
            ,
            {
              path: 'edit',
              component: import20.InstanceEditComponent
            }
            ,
            {
              path: 'stats',
              component: import21.InstanceStatsComponent
            }

          ]

        }
    ]]); }
    return this.__ROUTES_10;
  }
  get _InstanceService_11():import11.InstanceService {
    if ((this.__InstanceService_11 == (null as any))) { (this.__InstanceService_11 = new import11.InstanceService(this.parent.get(import22.Http),this.parent.get(import23.FlashMessageService))); }
    return this.__InstanceService_11;
  }
  createInternal():import1.InstanceModule {
    this._InternalFormsSharedModule_0 = new import2.InternalFormsSharedModule();
    this._ReactiveFormsModule_1 = new import3.ReactiveFormsModule();
    this._CommonModule_2 = new import4.CommonModule();
    this._OrderByModule_3 = new import5.OrderByModule();
    this._EscapeHtmlModule_4 = new import6.EscapeHtmlModule();
    this._RouterModule_5 = new import7.RouterModule(this.parent.get(import7.ROUTER_FORROOT_GUARD,(null as any)));
    this._InstanceModule_6 = new import1.InstanceModule();
    return this._InstanceModule_6;
  }
  getInternal(token:any,notFoundResult:any):any {
    if ((token === import2.InternalFormsSharedModule)) { return this._InternalFormsSharedModule_0; }
    if ((token === import3.ReactiveFormsModule)) { return this._ReactiveFormsModule_1; }
    if ((token === import4.CommonModule)) { return this._CommonModule_2; }
    if ((token === import5.OrderByModule)) { return this._OrderByModule_3; }
    if ((token === import6.EscapeHtmlModule)) { return this._EscapeHtmlModule_4; }
    if ((token === import7.RouterModule)) { return this._RouterModule_5; }
    if ((token === import1.InstanceModule)) { return this._InstanceModule_6; }
    if ((token === import8.FormBuilder)) { return this._FormBuilder_7; }
    if ((token === import9.RadioControlRegistry)) { return this._RadioControlRegistry_8; }
    if ((token === import10.NgLocalization)) { return this._NgLocalization_9; }
    if ((token === import24.ROUTES)) { return this._ROUTES_10; }
    if ((token === import11.InstanceService)) { return this._InstanceService_11; }
    return notFoundResult;
  }
  destroyInternal():void {
  }
}
export const InstanceModuleNgFactory:import0.NgModuleFactory<import1.InstanceModule> = new import0.NgModuleFactory(InstanceModuleInjector,import1.InstanceModule);