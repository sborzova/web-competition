/**
 * This file is generated by the Angular 2 template compiler.
 * Do not edit.
 */
 /* tslint:disable */

import * as import0 from '@angular/core/src/linker/ng_module_factory';
import * as import1 from './app.module';
import * as import2 from '@angular/common/src/common_module';
import * as import3 from '@angular/core/src/application_module';
import * as import4 from '@angular/platform-browser/src/browser';
import * as import5 from '@angular/http/src/http_module';
import * as import6 from '@angular/router/src/router_module';
import * as import7 from '@angular/common/src/localization';
import * as import8 from '@angular/core/src/application_init';
import * as import9 from '@angular/core/src/testability/testability';
import * as import10 from '@angular/core/src/application_ref';
import * as import11 from '@angular/core/src/linker/compiler';
import * as import12 from '@angular/platform-browser/src/dom/events/hammer_gestures';
import * as import13 from '@angular/platform-browser/src/dom/events/event_manager';
import * as import14 from '@angular/platform-browser/src/dom/shared_styles_host';
import * as import15 from '@angular/platform-browser/src/dom/dom_renderer';
import * as import16 from '@angular/platform-browser/src/security/dom_sanitization_service';
import * as import17 from '@angular/core/src/linker/view_utils';
import * as import18 from '@angular/platform-browser/src/browser/title';
import * as import19 from '@angular/http/src/backends/browser_xhr';
import * as import20 from '@angular/http/src/base_response_options';
import * as import21 from '@angular/http/src/backends/xhr_backend';
import * as import22 from '@angular/http/src/base_request_options';
import * as import23 from '@angular/common/src/location/location';
import * as import24 from '@angular/router/src/url_tree';
import * as import25 from '@angular/router/src/router_outlet_map';
import * as import26 from '@angular/core/src/linker/system_js_ng_module_factory_loader';
import * as import27 from './flash-message/flash-messages.service';
import * as import28 from './auth/auth.service';
import * as import29 from './users/user.service';
import * as import30 from './instances/instance.service';
import * as import31 from './validation/solution.service';
import * as import32 from './user-solutions/paper.service';
import * as import33 from '@angular/core/src/di/injector';
import * as import34 from './home/home.component.ngfactory';
import * as import35 from './app.component.ngfactory';
import * as import36 from '@angular/core/src/application_tokens';
import * as import37 from '@angular/platform-browser/src/dom/events/dom_events';
import * as import38 from '@angular/platform-browser/src/dom/events/key_events';
import * as import39 from '@angular/core/src/zone/ng_zone';
import * as import40 from '@angular/platform-browser/src/dom/debug/ng_probe';
import * as import41 from '@angular/common/src/location/platform_location';
import * as import42 from '@angular/common/src/location/location_strategy';
import * as import43 from './home/home.component';
import * as import44 from '@angular/router/src/router';
import * as import45 from '@angular/core/src/console';
import * as import46 from '@angular/core/src/i18n/tokens';
import * as import47 from '@angular/core/src/error_handler';
import * as import48 from '@angular/platform-browser/src/dom/dom_tokens';
import * as import49 from '@angular/platform-browser/src/dom/animation_driver';
import * as import50 from '@angular/core/src/render/api';
import * as import51 from '@angular/core/src/security';
import * as import52 from '@angular/core/src/change_detection/differs/iterable_differs';
import * as import53 from '@angular/core/src/change_detection/differs/keyvalue_differs';
import * as import54 from '@angular/http/src/interfaces';
import * as import55 from '@angular/http/src/http';
import * as import56 from '@angular/core/src/linker/ng_module_factory_loader';
import * as import57 from '@angular/router/src/router_config_loader';
import * as import58 from '@angular/router/src/router_state';
class AppModuleInjector extends import0.NgModuleInjector<import1.AppModule> {
  _CommonModule_0:import2.CommonModule;
  _ApplicationModule_1:import3.ApplicationModule;
  _BrowserModule_2:import4.BrowserModule;
  _HttpModule_3:import5.HttpModule;
  _ROUTER_FORROOT_GUARD_4:any;
  _RouterModule_5:import6.RouterModule;
  _AppModule_6:import1.AppModule;
  __LOCALE_ID_7:any;
  __NgLocalization_8:import7.NgLocaleLocalization;
  _ErrorHandler_9:any;
  _ApplicationInitStatus_10:import8.ApplicationInitStatus;
  _Testability_11:import9.Testability;
  _ApplicationRef__12:import10.ApplicationRef_;
  __ApplicationRef_13:any;
  __Compiler_14:import11.Compiler;
  __APP_ID_15:any;
  __DOCUMENT_16:any;
  __HAMMER_GESTURE_CONFIG_17:import12.HammerGestureConfig;
  __EVENT_MANAGER_PLUGINS_18:any[];
  __EventManager_19:import13.EventManager;
  __DomSharedStylesHost_20:import14.DomSharedStylesHost;
  __AnimationDriver_21:any;
  __DomRootRenderer_22:import15.DomRootRenderer_;
  __RootRenderer_23:any;
  __DomSanitizer_24:import16.DomSanitizerImpl;
  __Sanitizer_25:any;
  __ViewUtils_26:import17.ViewUtils;
  __IterableDiffers_27:any;
  __KeyValueDiffers_28:any;
  __SharedStylesHost_29:any;
  __Title_30:import18.Title;
  __BrowserXhr_31:import19.BrowserXhr;
  __ResponseOptions_32:import20.BaseResponseOptions;
  __XSRFStrategy_33:any;
  __XHRBackend_34:import21.XHRBackend;
  __RequestOptions_35:import22.BaseRequestOptions;
  __Http_36:any;
  __ROUTER_CONFIGURATION_37:any;
  __LocationStrategy_38:any;
  __Location_39:import23.Location;
  __UrlSerializer_40:import24.DefaultUrlSerializer;
  __RouterOutletMap_41:import25.RouterOutletMap;
  __NgModuleFactoryLoader_42:import26.SystemJsNgModuleLoader;
  __ROUTES_43:any[];
  __Router_44:any;
  __ActivatedRoute_45:any;
  __APP_BOOTSTRAP_LISTENER_46:any[];
  __FlashMessageService_47:import27.FlashMessageService;
  __AuthService_48:import28.AuthService;
  __UsersService_49:import29.UsersService;
  __InstanceService_50:import30.InstanceService;
  __SolutionService_51:import31.SolutionService;
  __PaperService_52:import32.PaperService;
  constructor(parent:import33.Injector) {
    super(parent,[
      import34.HomeComponentNgFactory,
      import35.AppComponentNgFactory
    ]
    ,[import35.AppComponentNgFactory]);
  }
  get _LOCALE_ID_7():any {
    if ((this.__LOCALE_ID_7 == (null as any))) { (this.__LOCALE_ID_7 = 'en-US'); }
    return this.__LOCALE_ID_7;
  }
  get _NgLocalization_8():import7.NgLocaleLocalization {
    if ((this.__NgLocalization_8 == (null as any))) { (this.__NgLocalization_8 = new import7.NgLocaleLocalization(this._LOCALE_ID_7)); }
    return this.__NgLocalization_8;
  }
  get _ApplicationRef_13():any {
    if ((this.__ApplicationRef_13 == (null as any))) { (this.__ApplicationRef_13 = this._ApplicationRef__12); }
    return this.__ApplicationRef_13;
  }
  get _Compiler_14():import11.Compiler {
    if ((this.__Compiler_14 == (null as any))) { (this.__Compiler_14 = new import11.Compiler()); }
    return this.__Compiler_14;
  }
  get _APP_ID_15():any {
    if ((this.__APP_ID_15 == (null as any))) { (this.__APP_ID_15 = import36._appIdRandomProviderFactory()); }
    return this.__APP_ID_15;
  }
  get _DOCUMENT_16():any {
    if ((this.__DOCUMENT_16 == (null as any))) { (this.__DOCUMENT_16 = import4._document()); }
    return this.__DOCUMENT_16;
  }
  get _HAMMER_GESTURE_CONFIG_17():import12.HammerGestureConfig {
    if ((this.__HAMMER_GESTURE_CONFIG_17 == (null as any))) { (this.__HAMMER_GESTURE_CONFIG_17 = new import12.HammerGestureConfig()); }
    return this.__HAMMER_GESTURE_CONFIG_17;
  }
  get _EVENT_MANAGER_PLUGINS_18():any[] {
    if ((this.__EVENT_MANAGER_PLUGINS_18 == (null as any))) { (this.__EVENT_MANAGER_PLUGINS_18 = [
      new import37.DomEventsPlugin(),
      new import38.KeyEventsPlugin(),
      new import12.HammerGesturesPlugin(this._HAMMER_GESTURE_CONFIG_17)
    ]
    ); }
    return this.__EVENT_MANAGER_PLUGINS_18;
  }
  get _EventManager_19():import13.EventManager {
    if ((this.__EventManager_19 == (null as any))) { (this.__EventManager_19 = new import13.EventManager(this._EVENT_MANAGER_PLUGINS_18,this.parent.get(import39.NgZone))); }
    return this.__EventManager_19;
  }
  get _DomSharedStylesHost_20():import14.DomSharedStylesHost {
    if ((this.__DomSharedStylesHost_20 == (null as any))) { (this.__DomSharedStylesHost_20 = new import14.DomSharedStylesHost(this._DOCUMENT_16)); }
    return this.__DomSharedStylesHost_20;
  }
  get _AnimationDriver_21():any {
    if ((this.__AnimationDriver_21 == (null as any))) { (this.__AnimationDriver_21 = import4._resolveDefaultAnimationDriver()); }
    return this.__AnimationDriver_21;
  }
  get _DomRootRenderer_22():import15.DomRootRenderer_ {
    if ((this.__DomRootRenderer_22 == (null as any))) { (this.__DomRootRenderer_22 = new import15.DomRootRenderer_(this._DOCUMENT_16,this._EventManager_19,this._DomSharedStylesHost_20,this._AnimationDriver_21)); }
    return this.__DomRootRenderer_22;
  }
  get _RootRenderer_23():any {
    if ((this.__RootRenderer_23 == (null as any))) { (this.__RootRenderer_23 = import40._createConditionalRootRenderer(this._DomRootRenderer_22,this.parent.get(import40.NgProbeToken,(null as any)))); }
    return this.__RootRenderer_23;
  }
  get _DomSanitizer_24():import16.DomSanitizerImpl {
    if ((this.__DomSanitizer_24 == (null as any))) { (this.__DomSanitizer_24 = new import16.DomSanitizerImpl()); }
    return this.__DomSanitizer_24;
  }
  get _Sanitizer_25():any {
    if ((this.__Sanitizer_25 == (null as any))) { (this.__Sanitizer_25 = this._DomSanitizer_24); }
    return this.__Sanitizer_25;
  }
  get _ViewUtils_26():import17.ViewUtils {
    if ((this.__ViewUtils_26 == (null as any))) { (this.__ViewUtils_26 = new import17.ViewUtils(this._RootRenderer_23,this._APP_ID_15,this._Sanitizer_25)); }
    return this.__ViewUtils_26;
  }
  get _IterableDiffers_27():any {
    if ((this.__IterableDiffers_27 == (null as any))) { (this.__IterableDiffers_27 = import3._iterableDiffersFactory()); }
    return this.__IterableDiffers_27;
  }
  get _KeyValueDiffers_28():any {
    if ((this.__KeyValueDiffers_28 == (null as any))) { (this.__KeyValueDiffers_28 = import3._keyValueDiffersFactory()); }
    return this.__KeyValueDiffers_28;
  }
  get _SharedStylesHost_29():any {
    if ((this.__SharedStylesHost_29 == (null as any))) { (this.__SharedStylesHost_29 = this._DomSharedStylesHost_20); }
    return this.__SharedStylesHost_29;
  }
  get _Title_30():import18.Title {
    if ((this.__Title_30 == (null as any))) { (this.__Title_30 = new import18.Title()); }
    return this.__Title_30;
  }
  get _BrowserXhr_31():import19.BrowserXhr {
    if ((this.__BrowserXhr_31 == (null as any))) { (this.__BrowserXhr_31 = new import19.BrowserXhr()); }
    return this.__BrowserXhr_31;
  }
  get _ResponseOptions_32():import20.BaseResponseOptions {
    if ((this.__ResponseOptions_32 == (null as any))) { (this.__ResponseOptions_32 = new import20.BaseResponseOptions()); }
    return this.__ResponseOptions_32;
  }
  get _XSRFStrategy_33():any {
    if ((this.__XSRFStrategy_33 == (null as any))) { (this.__XSRFStrategy_33 = import5._createDefaultCookieXSRFStrategy()); }
    return this.__XSRFStrategy_33;
  }
  get _XHRBackend_34():import21.XHRBackend {
    if ((this.__XHRBackend_34 == (null as any))) { (this.__XHRBackend_34 = new import21.XHRBackend(this._BrowserXhr_31,this._ResponseOptions_32,this._XSRFStrategy_33)); }
    return this.__XHRBackend_34;
  }
  get _RequestOptions_35():import22.BaseRequestOptions {
    if ((this.__RequestOptions_35 == (null as any))) { (this.__RequestOptions_35 = new import22.BaseRequestOptions()); }
    return this.__RequestOptions_35;
  }
  get _Http_36():any {
    if ((this.__Http_36 == (null as any))) { (this.__Http_36 = import5.httpFactory(this._XHRBackend_34,this._RequestOptions_35)); }
    return this.__Http_36;
  }
  get _ROUTER_CONFIGURATION_37():any {
    if ((this.__ROUTER_CONFIGURATION_37 == (null as any))) { (this.__ROUTER_CONFIGURATION_37 = {}); }
    return this.__ROUTER_CONFIGURATION_37;
  }
  get _LocationStrategy_38():any {
    if ((this.__LocationStrategy_38 == (null as any))) { (this.__LocationStrategy_38 = import6.provideLocationStrategy(this.parent.get(import41.PlatformLocation),this.parent.get(import42.APP_BASE_HREF,(null as any)),this._ROUTER_CONFIGURATION_37)); }
    return this.__LocationStrategy_38;
  }
  get _Location_39():import23.Location {
    if ((this.__Location_39 == (null as any))) { (this.__Location_39 = new import23.Location(this._LocationStrategy_38)); }
    return this.__Location_39;
  }
  get _UrlSerializer_40():import24.DefaultUrlSerializer {
    if ((this.__UrlSerializer_40 == (null as any))) { (this.__UrlSerializer_40 = new import24.DefaultUrlSerializer()); }
    return this.__UrlSerializer_40;
  }
  get _RouterOutletMap_41():import25.RouterOutletMap {
    if ((this.__RouterOutletMap_41 == (null as any))) { (this.__RouterOutletMap_41 = new import25.RouterOutletMap()); }
    return this.__RouterOutletMap_41;
  }
  get _NgModuleFactoryLoader_42():import26.SystemJsNgModuleLoader {
    if ((this.__NgModuleFactoryLoader_42 == (null as any))) { (this.__NgModuleFactoryLoader_42 = new import26.SystemJsNgModuleLoader(this._Compiler_14,this.parent.get(import26.SystemJsNgModuleLoaderConfig,(null as any)))); }
    return this.__NgModuleFactoryLoader_42;
  }
  get _ROUTES_43():any[] {
      if ((this.__ROUTES_43 == (null as any))) { (this.__ROUTES_43 = [[
        {
          path: '',
          redirectTo: '#home',
          pathMatch: 'full'
        }
        ,
        {
          path: '#home',
          component: import43.HomeComponent
        }
        ,
        {
          path: '#users',
          loadChildren: '../app/users/users.module#UsersModule'
        }
        ,
        {
          path: '#results',
          loadChildren: '../app/results/results.module#ResultsModule'
        }
        ,
        {
          path: '#validator',
          loadChildren: '../app/validation/validation.module#ValidationModule'
        }
        ,
        {
          path: '#mysolutions',
          loadChildren: '../app/user-solutions/user-solutions.module#UserSolutionsModule'
        }
        ,
        {
          path: '#signin',
          loadChildren: '../app/auth/signin/signin.module#SigninModule'
        }
        ,
        {
          path: '#signup',
          loadChildren: '../app/auth/signup/signup.module#SignupModule'
        }
        ,
        {
          path: '#instances',
          loadChildren: '../app/instances/instance.module#InstanceModule'
        }
        ,
        {
          path: '#profile',
          loadChildren: '../app/profile/profile.module#ProfileModule'
        }
        ,
        {
          path: '#preferences',
          loadChildren: '../app/preference/preference.module#PreferenceModule'
        }

      ]
    ]); }
    return this.__ROUTES_43;
  }
  get _Router_44():any {
    if ((this.__Router_44 == (null as any))) { (this.__Router_44 = import6.setupRouter(this._ApplicationRef_13,this._UrlSerializer_40,this._RouterOutletMap_41,this._Location_39,this,this._NgModuleFactoryLoader_42,this._Compiler_14,this._ROUTES_43,this._ROUTER_CONFIGURATION_37)); }
    return this.__Router_44;
  }
  get _ActivatedRoute_45():any {
    if ((this.__ActivatedRoute_45 == (null as any))) { (this.__ActivatedRoute_45 = import6.rootRoute(this._Router_44)); }
    return this.__ActivatedRoute_45;
  }
  get _APP_BOOTSTRAP_LISTENER_46():any[] {
    if ((this.__APP_BOOTSTRAP_LISTENER_46 == (null as any))) { (this.__APP_BOOTSTRAP_LISTENER_46 = [import6.initialRouterNavigation(this._Router_44,this._ROUTER_CONFIGURATION_37)]); }
    return this.__APP_BOOTSTRAP_LISTENER_46;
  }
  get _FlashMessageService_47():import27.FlashMessageService {
    if ((this.__FlashMessageService_47 == (null as any))) { (this.__FlashMessageService_47 = new import27.FlashMessageService()); }
    return this.__FlashMessageService_47;
  }
  get _AuthService_48():import28.AuthService {
    if ((this.__AuthService_48 == (null as any))) { (this.__AuthService_48 = new import28.AuthService(this._Http_36,this._FlashMessageService_47)); }
    return this.__AuthService_48;
  }
  get _UsersService_49():import29.UsersService {
    if ((this.__UsersService_49 == (null as any))) { (this.__UsersService_49 = new import29.UsersService(this._Http_36,this._FlashMessageService_47)); }
    return this.__UsersService_49;
  }
  get _InstanceService_50():import30.InstanceService {
    if ((this.__InstanceService_50 == (null as any))) { (this.__InstanceService_50 = new import30.InstanceService(this._Http_36,this._FlashMessageService_47)); }
    return this.__InstanceService_50;
  }
  get _SolutionService_51():import31.SolutionService {
    if ((this.__SolutionService_51 == (null as any))) { (this.__SolutionService_51 = new import31.SolutionService(this._Http_36,this._FlashMessageService_47)); }
    return this.__SolutionService_51;
  }
  get _PaperService_52():import32.PaperService {
    if ((this.__PaperService_52 == (null as any))) { (this.__PaperService_52 = new import32.PaperService(this._Http_36)); }
    return this.__PaperService_52;
  }
  createInternal():import1.AppModule {
    this._CommonModule_0 = new import2.CommonModule();
    this._ApplicationModule_1 = new import3.ApplicationModule();
    this._BrowserModule_2 = new import4.BrowserModule(this.parent.get(import4.BrowserModule,(null as any)));
    this._HttpModule_3 = new import5.HttpModule();
    this._ROUTER_FORROOT_GUARD_4 = import6.provideForRootGuard(this.parent.get(import44.Router,(null as any)));
    this._RouterModule_5 = new import6.RouterModule(this._ROUTER_FORROOT_GUARD_4);
    this._AppModule_6 = new import1.AppModule();
    this._ErrorHandler_9 = import4.errorHandler();
    this._ApplicationInitStatus_10 = new import8.ApplicationInitStatus(this.parent.get(import8.APP_INITIALIZER,(null as any)));
    this._Testability_11 = new import9.Testability(this.parent.get(import39.NgZone));
    this._ApplicationRef__12 = new import10.ApplicationRef_(this.parent.get(import39.NgZone),this.parent.get(import45.Console),this,this._ErrorHandler_9,this,this._ApplicationInitStatus_10,this.parent.get(import9.TestabilityRegistry,(null as any)),this._Testability_11);
    return this._AppModule_6;
  }
  getInternal(token:any,notFoundResult:any):any {
    if ((token === import2.CommonModule)) { return this._CommonModule_0; }
    if ((token === import3.ApplicationModule)) { return this._ApplicationModule_1; }
    if ((token === import4.BrowserModule)) { return this._BrowserModule_2; }
    if ((token === import5.HttpModule)) { return this._HttpModule_3; }
    if ((token === import6.ROUTER_FORROOT_GUARD)) { return this._ROUTER_FORROOT_GUARD_4; }
    if ((token === import6.RouterModule)) { return this._RouterModule_5; }
    if ((token === import1.AppModule)) { return this._AppModule_6; }
    if ((token === import46.LOCALE_ID)) { return this._LOCALE_ID_7; }
    if ((token === import7.NgLocalization)) { return this._NgLocalization_8; }
    if ((token === import47.ErrorHandler)) { return this._ErrorHandler_9; }
    if ((token === import8.ApplicationInitStatus)) { return this._ApplicationInitStatus_10; }
    if ((token === import9.Testability)) { return this._Testability_11; }
    if ((token === import10.ApplicationRef_)) { return this._ApplicationRef__12; }
    if ((token === import10.ApplicationRef)) { return this._ApplicationRef_13; }
    if ((token === import11.Compiler)) { return this._Compiler_14; }
    if ((token === import36.APP_ID)) { return this._APP_ID_15; }
    if ((token === import48.DOCUMENT)) { return this._DOCUMENT_16; }
    if ((token === import12.HAMMER_GESTURE_CONFIG)) { return this._HAMMER_GESTURE_CONFIG_17; }
    if ((token === import13.EVENT_MANAGER_PLUGINS)) { return this._EVENT_MANAGER_PLUGINS_18; }
    if ((token === import13.EventManager)) { return this._EventManager_19; }
    if ((token === import14.DomSharedStylesHost)) { return this._DomSharedStylesHost_20; }
    if ((token === import49.AnimationDriver)) { return this._AnimationDriver_21; }
    if ((token === import15.DomRootRenderer)) { return this._DomRootRenderer_22; }
    if ((token === import50.RootRenderer)) { return this._RootRenderer_23; }
    if ((token === import16.DomSanitizer)) { return this._DomSanitizer_24; }
    if ((token === import51.Sanitizer)) { return this._Sanitizer_25; }
    if ((token === import17.ViewUtils)) { return this._ViewUtils_26; }
    if ((token === import52.IterableDiffers)) { return this._IterableDiffers_27; }
    if ((token === import53.KeyValueDiffers)) { return this._KeyValueDiffers_28; }
    if ((token === import14.SharedStylesHost)) { return this._SharedStylesHost_29; }
    if ((token === import18.Title)) { return this._Title_30; }
    if ((token === import19.BrowserXhr)) { return this._BrowserXhr_31; }
    if ((token === import20.ResponseOptions)) { return this._ResponseOptions_32; }
    if ((token === import54.XSRFStrategy)) { return this._XSRFStrategy_33; }
    if ((token === import21.XHRBackend)) { return this._XHRBackend_34; }
    if ((token === import22.RequestOptions)) { return this._RequestOptions_35; }
    if ((token === import55.Http)) { return this._Http_36; }
    if ((token === import6.ROUTER_CONFIGURATION)) { return this._ROUTER_CONFIGURATION_37; }
    if ((token === import42.LocationStrategy)) { return this._LocationStrategy_38; }
    if ((token === import23.Location)) { return this._Location_39; }
    if ((token === import24.UrlSerializer)) { return this._UrlSerializer_40; }
    if ((token === import25.RouterOutletMap)) { return this._RouterOutletMap_41; }
    if ((token === import56.NgModuleFactoryLoader)) { return this._NgModuleFactoryLoader_42; }
    if ((token === import57.ROUTES)) { return this._ROUTES_43; }
    if ((token === import44.Router)) { return this._Router_44; }
    if ((token === import58.ActivatedRoute)) { return this._ActivatedRoute_45; }
    if ((token === import36.APP_BOOTSTRAP_LISTENER)) { return this._APP_BOOTSTRAP_LISTENER_46; }
    if ((token === import27.FlashMessageService)) { return this._FlashMessageService_47; }
    if ((token === import28.AuthService)) { return this._AuthService_48; }
    if ((token === import29.UsersService)) { return this._UsersService_49; }
    if ((token === import30.InstanceService)) { return this._InstanceService_50; }
    if ((token === import31.SolutionService)) { return this._SolutionService_51; }
    if ((token === import32.PaperService)) { return this._PaperService_52; }
    return notFoundResult;
  }
  destroyInternal():void {
    this._ApplicationRef__12.ngOnDestroy();
  }
}
export const AppModuleNgFactory:import0.NgModuleFactory<import1.AppModule> = new import0.NgModuleFactory(AppModuleInjector,import1.AppModule);