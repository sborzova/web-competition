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
import * as import30 from './home/home.component.ngfactory';
import * as import31 from './app.component.ngfactory';
import * as import32 from '@angular/core/src/application_tokens';
import * as import33 from '@angular/platform-browser/src/dom/events/dom_events';
import * as import34 from '@angular/platform-browser/src/dom/events/key_events';
import * as import35 from '@angular/core/src/zone/ng_zone';
import * as import36 from '@angular/platform-browser/src/dom/debug/ng_probe';
import * as import37 from '@angular/common/src/location/platform_location';
import * as import38 from '@angular/common/src/location/location_strategy';
import * as import39 from './home/home.component';
import * as import40 from '@angular/router/src/router';
import * as import41 from '@angular/core/src/console';
import * as import42 from '@angular/core/src/i18n/tokens';
import * as import43 from '@angular/core/src/error_handler';
import * as import44 from '@angular/platform-browser/src/dom/dom_tokens';
import * as import45 from '@angular/platform-browser/src/dom/animation_driver';
import * as import46 from '@angular/core/src/render/api';
import * as import47 from '@angular/core/src/security';
import * as import48 from '@angular/core/src/change_detection/differs/iterable_differs';
import * as import49 from '@angular/core/src/change_detection/differs/keyvalue_differs';
import * as import50 from '@angular/http/src/interfaces';
import * as import51 from '@angular/http/src/http';
import * as import52 from '@angular/core/src/linker/ng_module_factory_loader';
import * as import53 from '@angular/router/src/router_config_loader';
import * as import54 from '@angular/router/src/router_state';
var AppModuleInjector = (function (_super) {
    __extends(AppModuleInjector, _super);
    function AppModuleInjector(parent) {
        _super.call(this, parent, [
            import30.HomeComponentNgFactory,
            import31.AppComponentNgFactory
        ], [import31.AppComponentNgFactory]);
    }
    Object.defineProperty(AppModuleInjector.prototype, "_LOCALE_ID_7", {
        get: function () {
            if ((this.__LOCALE_ID_7 == null)) {
                (this.__LOCALE_ID_7 = 'en-US');
            }
            return this.__LOCALE_ID_7;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_NgLocalization_8", {
        get: function () {
            if ((this.__NgLocalization_8 == null)) {
                (this.__NgLocalization_8 = new import7.NgLocaleLocalization(this._LOCALE_ID_7));
            }
            return this.__NgLocalization_8;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_ApplicationRef_13", {
        get: function () {
            if ((this.__ApplicationRef_13 == null)) {
                (this.__ApplicationRef_13 = this._ApplicationRef__12);
            }
            return this.__ApplicationRef_13;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_Compiler_14", {
        get: function () {
            if ((this.__Compiler_14 == null)) {
                (this.__Compiler_14 = new import11.Compiler());
            }
            return this.__Compiler_14;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_APP_ID_15", {
        get: function () {
            if ((this.__APP_ID_15 == null)) {
                (this.__APP_ID_15 = import32._appIdRandomProviderFactory());
            }
            return this.__APP_ID_15;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_DOCUMENT_16", {
        get: function () {
            if ((this.__DOCUMENT_16 == null)) {
                (this.__DOCUMENT_16 = import4._document());
            }
            return this.__DOCUMENT_16;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_HAMMER_GESTURE_CONFIG_17", {
        get: function () {
            if ((this.__HAMMER_GESTURE_CONFIG_17 == null)) {
                (this.__HAMMER_GESTURE_CONFIG_17 = new import12.HammerGestureConfig());
            }
            return this.__HAMMER_GESTURE_CONFIG_17;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_EVENT_MANAGER_PLUGINS_18", {
        get: function () {
            if ((this.__EVENT_MANAGER_PLUGINS_18 == null)) {
                (this.__EVENT_MANAGER_PLUGINS_18 = [
                    new import33.DomEventsPlugin(),
                    new import34.KeyEventsPlugin(),
                    new import12.HammerGesturesPlugin(this._HAMMER_GESTURE_CONFIG_17)
                ]);
            }
            return this.__EVENT_MANAGER_PLUGINS_18;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_EventManager_19", {
        get: function () {
            if ((this.__EventManager_19 == null)) {
                (this.__EventManager_19 = new import13.EventManager(this._EVENT_MANAGER_PLUGINS_18, this.parent.get(import35.NgZone)));
            }
            return this.__EventManager_19;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_DomSharedStylesHost_20", {
        get: function () {
            if ((this.__DomSharedStylesHost_20 == null)) {
                (this.__DomSharedStylesHost_20 = new import14.DomSharedStylesHost(this._DOCUMENT_16));
            }
            return this.__DomSharedStylesHost_20;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_AnimationDriver_21", {
        get: function () {
            if ((this.__AnimationDriver_21 == null)) {
                (this.__AnimationDriver_21 = import4._resolveDefaultAnimationDriver());
            }
            return this.__AnimationDriver_21;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_DomRootRenderer_22", {
        get: function () {
            if ((this.__DomRootRenderer_22 == null)) {
                (this.__DomRootRenderer_22 = new import15.DomRootRenderer_(this._DOCUMENT_16, this._EventManager_19, this._DomSharedStylesHost_20, this._AnimationDriver_21));
            }
            return this.__DomRootRenderer_22;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_RootRenderer_23", {
        get: function () {
            if ((this.__RootRenderer_23 == null)) {
                (this.__RootRenderer_23 = import36._createConditionalRootRenderer(this._DomRootRenderer_22, this.parent.get(import36.NgProbeToken, null)));
            }
            return this.__RootRenderer_23;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_DomSanitizer_24", {
        get: function () {
            if ((this.__DomSanitizer_24 == null)) {
                (this.__DomSanitizer_24 = new import16.DomSanitizerImpl());
            }
            return this.__DomSanitizer_24;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_Sanitizer_25", {
        get: function () {
            if ((this.__Sanitizer_25 == null)) {
                (this.__Sanitizer_25 = this._DomSanitizer_24);
            }
            return this.__Sanitizer_25;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_ViewUtils_26", {
        get: function () {
            if ((this.__ViewUtils_26 == null)) {
                (this.__ViewUtils_26 = new import17.ViewUtils(this._RootRenderer_23, this._APP_ID_15, this._Sanitizer_25));
            }
            return this.__ViewUtils_26;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_IterableDiffers_27", {
        get: function () {
            if ((this.__IterableDiffers_27 == null)) {
                (this.__IterableDiffers_27 = import3._iterableDiffersFactory());
            }
            return this.__IterableDiffers_27;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_KeyValueDiffers_28", {
        get: function () {
            if ((this.__KeyValueDiffers_28 == null)) {
                (this.__KeyValueDiffers_28 = import3._keyValueDiffersFactory());
            }
            return this.__KeyValueDiffers_28;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_SharedStylesHost_29", {
        get: function () {
            if ((this.__SharedStylesHost_29 == null)) {
                (this.__SharedStylesHost_29 = this._DomSharedStylesHost_20);
            }
            return this.__SharedStylesHost_29;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_Title_30", {
        get: function () {
            if ((this.__Title_30 == null)) {
                (this.__Title_30 = new import18.Title());
            }
            return this.__Title_30;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_BrowserXhr_31", {
        get: function () {
            if ((this.__BrowserXhr_31 == null)) {
                (this.__BrowserXhr_31 = new import19.BrowserXhr());
            }
            return this.__BrowserXhr_31;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_ResponseOptions_32", {
        get: function () {
            if ((this.__ResponseOptions_32 == null)) {
                (this.__ResponseOptions_32 = new import20.BaseResponseOptions());
            }
            return this.__ResponseOptions_32;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_XSRFStrategy_33", {
        get: function () {
            if ((this.__XSRFStrategy_33 == null)) {
                (this.__XSRFStrategy_33 = import5._createDefaultCookieXSRFStrategy());
            }
            return this.__XSRFStrategy_33;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_XHRBackend_34", {
        get: function () {
            if ((this.__XHRBackend_34 == null)) {
                (this.__XHRBackend_34 = new import21.XHRBackend(this._BrowserXhr_31, this._ResponseOptions_32, this._XSRFStrategy_33));
            }
            return this.__XHRBackend_34;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_RequestOptions_35", {
        get: function () {
            if ((this.__RequestOptions_35 == null)) {
                (this.__RequestOptions_35 = new import22.BaseRequestOptions());
            }
            return this.__RequestOptions_35;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_Http_36", {
        get: function () {
            if ((this.__Http_36 == null)) {
                (this.__Http_36 = import5.httpFactory(this._XHRBackend_34, this._RequestOptions_35));
            }
            return this.__Http_36;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_ROUTER_CONFIGURATION_37", {
        get: function () {
            if ((this.__ROUTER_CONFIGURATION_37 == null)) {
                (this.__ROUTER_CONFIGURATION_37 = {});
            }
            return this.__ROUTER_CONFIGURATION_37;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_LocationStrategy_38", {
        get: function () {
            if ((this.__LocationStrategy_38 == null)) {
                (this.__LocationStrategy_38 = import6.provideLocationStrategy(this.parent.get(import37.PlatformLocation), this.parent.get(import38.APP_BASE_HREF, null), this._ROUTER_CONFIGURATION_37));
            }
            return this.__LocationStrategy_38;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_Location_39", {
        get: function () {
            if ((this.__Location_39 == null)) {
                (this.__Location_39 = new import23.Location(this._LocationStrategy_38));
            }
            return this.__Location_39;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_UrlSerializer_40", {
        get: function () {
            if ((this.__UrlSerializer_40 == null)) {
                (this.__UrlSerializer_40 = new import24.DefaultUrlSerializer());
            }
            return this.__UrlSerializer_40;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_RouterOutletMap_41", {
        get: function () {
            if ((this.__RouterOutletMap_41 == null)) {
                (this.__RouterOutletMap_41 = new import25.RouterOutletMap());
            }
            return this.__RouterOutletMap_41;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_NgModuleFactoryLoader_42", {
        get: function () {
            if ((this.__NgModuleFactoryLoader_42 == null)) {
                (this.__NgModuleFactoryLoader_42 = new import26.SystemJsNgModuleLoader(this._Compiler_14, this.parent.get(import26.SystemJsNgModuleLoaderConfig, null)));
            }
            return this.__NgModuleFactoryLoader_42;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_ROUTES_43", {
        get: function () {
            if ((this.__ROUTES_43 == null)) {
                (this.__ROUTES_43 = [[
                        {
                            path: '',
                            redirectTo: '#home',
                            pathMatch: 'full'
                        },
                        {
                            path: '#home',
                            component: import39.HomeComponent
                        },
                        {
                            path: '#users',
                            loadChildren: '../app/users/users.module#UsersModule'
                        },
                        {
                            path: '#results',
                            loadChildren: '../app/results/results.module#ResultsModule'
                        },
                        {
                            path: '#validator',
                            loadChildren: '../app/validation/validation.module#ValidationModule'
                        },
                        {
                            path: '#mysolutions',
                            loadChildren: '../app/user-solutions/user-solutions.module#UserSolutionsModule'
                        },
                        {
                            path: '#signin',
                            loadChildren: '../app/auth/signin/signin.module#SigninModule'
                        },
                        {
                            path: '#signup',
                            loadChildren: '../app/auth/signup/signup.module#SignupModule'
                        },
                        {
                            path: '#instances',
                            loadChildren: '../app/instances/instance.module#InstanceModule'
                        },
                        {
                            path: '#profile',
                            loadChildren: '../app/profile/profile.module#ProfileModule'
                        },
                        {
                            path: '#preferences',
                            loadChildren: '../app/preference/preference.module#PreferenceModule'
                        }
                    ]
                ]);
            }
            return this.__ROUTES_43;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_Router_44", {
        get: function () {
            if ((this.__Router_44 == null)) {
                (this.__Router_44 = import6.setupRouter(this._ApplicationRef_13, this._UrlSerializer_40, this._RouterOutletMap_41, this._Location_39, this, this._NgModuleFactoryLoader_42, this._Compiler_14, this._ROUTES_43, this._ROUTER_CONFIGURATION_37));
            }
            return this.__Router_44;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_ActivatedRoute_45", {
        get: function () {
            if ((this.__ActivatedRoute_45 == null)) {
                (this.__ActivatedRoute_45 = import6.rootRoute(this._Router_44));
            }
            return this.__ActivatedRoute_45;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_APP_BOOTSTRAP_LISTENER_46", {
        get: function () {
            if ((this.__APP_BOOTSTRAP_LISTENER_46 == null)) {
                (this.__APP_BOOTSTRAP_LISTENER_46 = [import6.initialRouterNavigation(this._Router_44, this._ROUTER_CONFIGURATION_37)]);
            }
            return this.__APP_BOOTSTRAP_LISTENER_46;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_FlashMessageService_47", {
        get: function () {
            if ((this.__FlashMessageService_47 == null)) {
                (this.__FlashMessageService_47 = new import27.FlashMessageService());
            }
            return this.__FlashMessageService_47;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_AuthService_48", {
        get: function () {
            if ((this.__AuthService_48 == null)) {
                (this.__AuthService_48 = new import28.AuthService(this._Http_36, this._FlashMessageService_47));
            }
            return this.__AuthService_48;
        },
        enumerable: true,
        configurable: true
    });
    AppModuleInjector.prototype.createInternal = function () {
        this._CommonModule_0 = new import2.CommonModule();
        this._ApplicationModule_1 = new import3.ApplicationModule();
        this._BrowserModule_2 = new import4.BrowserModule(this.parent.get(import4.BrowserModule, null));
        this._HttpModule_3 = new import5.HttpModule();
        this._ROUTER_FORROOT_GUARD_4 = import6.provideForRootGuard(this.parent.get(import40.Router, null));
        this._RouterModule_5 = new import6.RouterModule(this._ROUTER_FORROOT_GUARD_4);
        this._AppModule_6 = new import1.AppModule();
        this._ErrorHandler_9 = import4.errorHandler();
        this._ApplicationInitStatus_10 = new import8.ApplicationInitStatus(this.parent.get(import8.APP_INITIALIZER, null));
        this._Testability_11 = new import9.Testability(this.parent.get(import35.NgZone));
        this._ApplicationRef__12 = new import10.ApplicationRef_(this.parent.get(import35.NgZone), this.parent.get(import41.Console), this, this._ErrorHandler_9, this, this._ApplicationInitStatus_10, this.parent.get(import9.TestabilityRegistry, null), this._Testability_11);
        return this._AppModule_6;
    };
    AppModuleInjector.prototype.getInternal = function (token, notFoundResult) {
        if ((token === import2.CommonModule)) {
            return this._CommonModule_0;
        }
        if ((token === import3.ApplicationModule)) {
            return this._ApplicationModule_1;
        }
        if ((token === import4.BrowserModule)) {
            return this._BrowserModule_2;
        }
        if ((token === import5.HttpModule)) {
            return this._HttpModule_3;
        }
        if ((token === import6.ROUTER_FORROOT_GUARD)) {
            return this._ROUTER_FORROOT_GUARD_4;
        }
        if ((token === import6.RouterModule)) {
            return this._RouterModule_5;
        }
        if ((token === import1.AppModule)) {
            return this._AppModule_6;
        }
        if ((token === import42.LOCALE_ID)) {
            return this._LOCALE_ID_7;
        }
        if ((token === import7.NgLocalization)) {
            return this._NgLocalization_8;
        }
        if ((token === import43.ErrorHandler)) {
            return this._ErrorHandler_9;
        }
        if ((token === import8.ApplicationInitStatus)) {
            return this._ApplicationInitStatus_10;
        }
        if ((token === import9.Testability)) {
            return this._Testability_11;
        }
        if ((token === import10.ApplicationRef_)) {
            return this._ApplicationRef__12;
        }
        if ((token === import10.ApplicationRef)) {
            return this._ApplicationRef_13;
        }
        if ((token === import11.Compiler)) {
            return this._Compiler_14;
        }
        if ((token === import32.APP_ID)) {
            return this._APP_ID_15;
        }
        if ((token === import44.DOCUMENT)) {
            return this._DOCUMENT_16;
        }
        if ((token === import12.HAMMER_GESTURE_CONFIG)) {
            return this._HAMMER_GESTURE_CONFIG_17;
        }
        if ((token === import13.EVENT_MANAGER_PLUGINS)) {
            return this._EVENT_MANAGER_PLUGINS_18;
        }
        if ((token === import13.EventManager)) {
            return this._EventManager_19;
        }
        if ((token === import14.DomSharedStylesHost)) {
            return this._DomSharedStylesHost_20;
        }
        if ((token === import45.AnimationDriver)) {
            return this._AnimationDriver_21;
        }
        if ((token === import15.DomRootRenderer)) {
            return this._DomRootRenderer_22;
        }
        if ((token === import46.RootRenderer)) {
            return this._RootRenderer_23;
        }
        if ((token === import16.DomSanitizer)) {
            return this._DomSanitizer_24;
        }
        if ((token === import47.Sanitizer)) {
            return this._Sanitizer_25;
        }
        if ((token === import17.ViewUtils)) {
            return this._ViewUtils_26;
        }
        if ((token === import48.IterableDiffers)) {
            return this._IterableDiffers_27;
        }
        if ((token === import49.KeyValueDiffers)) {
            return this._KeyValueDiffers_28;
        }
        if ((token === import14.SharedStylesHost)) {
            return this._SharedStylesHost_29;
        }
        if ((token === import18.Title)) {
            return this._Title_30;
        }
        if ((token === import19.BrowserXhr)) {
            return this._BrowserXhr_31;
        }
        if ((token === import20.ResponseOptions)) {
            return this._ResponseOptions_32;
        }
        if ((token === import50.XSRFStrategy)) {
            return this._XSRFStrategy_33;
        }
        if ((token === import21.XHRBackend)) {
            return this._XHRBackend_34;
        }
        if ((token === import22.RequestOptions)) {
            return this._RequestOptions_35;
        }
        if ((token === import51.Http)) {
            return this._Http_36;
        }
        if ((token === import6.ROUTER_CONFIGURATION)) {
            return this._ROUTER_CONFIGURATION_37;
        }
        if ((token === import38.LocationStrategy)) {
            return this._LocationStrategy_38;
        }
        if ((token === import23.Location)) {
            return this._Location_39;
        }
        if ((token === import24.UrlSerializer)) {
            return this._UrlSerializer_40;
        }
        if ((token === import25.RouterOutletMap)) {
            return this._RouterOutletMap_41;
        }
        if ((token === import52.NgModuleFactoryLoader)) {
            return this._NgModuleFactoryLoader_42;
        }
        if ((token === import53.ROUTES)) {
            return this._ROUTES_43;
        }
        if ((token === import40.Router)) {
            return this._Router_44;
        }
        if ((token === import54.ActivatedRoute)) {
            return this._ActivatedRoute_45;
        }
        if ((token === import32.APP_BOOTSTRAP_LISTENER)) {
            return this._APP_BOOTSTRAP_LISTENER_46;
        }
        if ((token === import27.FlashMessageService)) {
            return this._FlashMessageService_47;
        }
        if ((token === import28.AuthService)) {
            return this._AuthService_48;
        }
        return notFoundResult;
    };
    AppModuleInjector.prototype.destroyInternal = function () {
        this._ApplicationRef__12.ngOnDestroy();
    };
    return AppModuleInjector;
}(import0.NgModuleInjector));
export var AppModuleNgFactory = new import0.NgModuleFactory(AppModuleInjector, import1.AppModule);
