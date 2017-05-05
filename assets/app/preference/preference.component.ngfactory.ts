/**
 * This file is generated by the Angular 2 template compiler.
 * Do not edit.
 */
 /* tslint:disable */

import * as import0 from '@angular/core/src/render/api';
import * as import1 from '@angular/core/src/linker/view';
import * as import2 from '@angular/core/src/linker/element';
import * as import3 from './preference.component';
import * as import4 from '@angular/core/src/linker/view_utils';
import * as import5 from '@angular/core/src/di/injector';
import * as import6 from '@angular/core/src/linker/view_type';
import * as import7 from '@angular/core/src/change_detection/change_detection';
import * as import8 from './preference.service';
import * as import9 from '../shared/session-storage.service';
import * as import10 from '@angular/core/src/metadata/view';
import * as import11 from '@angular/core/src/linker/component_factory';
import * as import12 from './preference.component.css.shim';
import * as import13 from '@angular/common/src/directives/ng_if';
import * as import14 from '@angular/core/src/linker/template_ref';
var renderType_PreferenceComponent_Host:import0.RenderComponentType = (null as any);
class _View_PreferenceComponent_Host0 extends import1.AppView<any> {
  _el_0:any;
  /*private*/ _appEl_0:import2.AppElement;
  _PreferenceComponent_0_4:import3.PreferenceComponent;
  constructor(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import2.AppElement) {
    super(_View_PreferenceComponent_Host0,renderType_PreferenceComponent_Host,import6.ViewType.HOST,viewUtils,parentInjector,declarationEl,import7.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import2.AppElement {
    this._el_0 = this.selectOrCreateHostElement('app-preference',rootSelector,(null as any));
    this._appEl_0 = new import2.AppElement(0,(null as any),this,this._el_0);
    var compView_0:any = viewFactory_PreferenceComponent0(this.viewUtils,this.injector(0),this._appEl_0);
    this._PreferenceComponent_0_4 = new import3.PreferenceComponent(this.parentInjector.get(import8.PreferenceService),this.parentInjector.get(import9.SessionStorageService));
    this._appEl_0.initComponent(this._PreferenceComponent_0_4,[],compView_0);
    compView_0.create(this._PreferenceComponent_0_4,this.projectableNodes,(null as any));
    this.init([].concat([this._el_0]),[this._el_0],[],[]);
    return this._appEl_0;
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import3.PreferenceComponent) && (0 === requestNodeIndex))) { return this._PreferenceComponent_0_4; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    if (((this.numberOfChecks === 0) && !throwOnChange)) { this._PreferenceComponent_0_4.ngOnInit(); }
    this.detectContentChildrenChanges(throwOnChange);
    this.detectViewChildrenChanges(throwOnChange);
  }
}
function viewFactory_PreferenceComponent_Host0(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import2.AppElement):import1.AppView<any> {
  if ((renderType_PreferenceComponent_Host === (null as any))) { (renderType_PreferenceComponent_Host = viewUtils.createRenderComponentType('',0,import10.ViewEncapsulation.None,[],{})); }
  return new _View_PreferenceComponent_Host0(viewUtils,parentInjector,declarationEl);
}
export const PreferenceComponentNgFactory:import11.ComponentFactory<import3.PreferenceComponent> = new import11.ComponentFactory<import3.PreferenceComponent>('app-preference',viewFactory_PreferenceComponent_Host0,import3.PreferenceComponent);
const styles_PreferenceComponent:any[] = [import12.styles];
var renderType_PreferenceComponent:import0.RenderComponentType = (null as any);
class _View_PreferenceComponent0 extends import1.AppView<import3.PreferenceComponent> {
  _el_0:any;
  _text_1:any;
  _el_2:any;
  _text_3:any;
  _el_4:any;
  _text_5:any;
  _el_6:any;
  _text_7:any;
  _text_8:any;
  _text_9:any;
  _el_10:any;
  _text_11:any;
  _anchor_12:any;
  /*private*/ _appEl_12:import2.AppElement;
  _TemplateRef_12_5:any;
  _NgIf_12_6:import13.NgIf;
  _text_13:any;
  _anchor_14:any;
  /*private*/ _appEl_14:import2.AppElement;
  _TemplateRef_14_5:any;
  _NgIf_14_6:import13.NgIf;
  _text_15:any;
  _text_16:any;
  _el_17:any;
  _text_18:any;
  _anchor_19:any;
  /*private*/ _appEl_19:import2.AppElement;
  _TemplateRef_19_5:any;
  _NgIf_19_6:import13.NgIf;
  _text_20:any;
  _anchor_21:any;
  /*private*/ _appEl_21:import2.AppElement;
  _TemplateRef_21_5:any;
  _NgIf_21_6:import13.NgIf;
  _text_22:any;
  _text_23:any;
  _text_24:any;
  /*private*/ _expr_0:any;
  /*private*/ _expr_1:any;
  /*private*/ _expr_2:any;
  /*private*/ _expr_3:any;
  constructor(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import2.AppElement) {
    super(_View_PreferenceComponent0,renderType_PreferenceComponent,import6.ViewType.COMPONENT,viewUtils,parentInjector,declarationEl,import7.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import2.AppElement {
    const parentRenderNode:any = this.renderer.createViewRoot(this.declarationAppElement.nativeElement);
    this._el_0 = this.renderer.createElement(parentRenderNode,'div',(null as any));
    this.renderer.setElementAttribute(this._el_0,'class','container');
    this.renderer.setElementAttribute(this._el_0,'style','margin-top: 3%');
    this._text_1 = this.renderer.createText(this._el_0,'\n    ',(null as any));
    this._el_2 = this.renderer.createElement(this._el_0,'div',(null as any));
    this.renderer.setElementAttribute(this._el_2,'class','row');
    this._text_3 = this.renderer.createText(this._el_2,'\n        ',(null as any));
    this._el_4 = this.renderer.createElement(this._el_2,'div',(null as any));
    this.renderer.setElementAttribute(this._el_4,'style','margin-bottom: 3%');
    this._text_5 = this.renderer.createText(this._el_4,'\n            ',(null as any));
    this._el_6 = this.renderer.createElement(this._el_4,'h2',(null as any));
    this._text_7 = this.renderer.createText(this._el_6,'Preferences',(null as any));
    this._text_8 = this.renderer.createText(this._el_4,'\n        ',(null as any));
    this._text_9 = this.renderer.createText(this._el_2,'\n        ',(null as any));
    this._el_10 = this.renderer.createElement(this._el_2,'div',(null as any));
    this.renderer.setElementAttribute(this._el_10,'class','col-xs-9 col-md-2');
    this.renderer.setElementAttribute(this._el_10,'style','display: table; height: 20px; overflow: hidden;');
    this._text_11 = this.renderer.createText(this._el_10,'\n            ',(null as any));
    this._anchor_12 = this.renderer.createTemplateAnchor(this._el_10,(null as any));
    this._appEl_12 = new import2.AppElement(12,10,this,this._anchor_12);
    this._TemplateRef_12_5 = new import14.TemplateRef_(this._appEl_12,viewFactory_PreferenceComponent1);
    this._NgIf_12_6 = new import13.NgIf(this._appEl_12.vcRef,this._TemplateRef_12_5);
    this._text_13 = this.renderer.createText(this._el_10,'\n            ',(null as any));
    this._anchor_14 = this.renderer.createTemplateAnchor(this._el_10,(null as any));
    this._appEl_14 = new import2.AppElement(14,10,this,this._anchor_14);
    this._TemplateRef_14_5 = new import14.TemplateRef_(this._appEl_14,viewFactory_PreferenceComponent2);
    this._NgIf_14_6 = new import13.NgIf(this._appEl_14.vcRef,this._TemplateRef_14_5);
    this._text_15 = this.renderer.createText(this._el_10,'\n        ',(null as any));
    this._text_16 = this.renderer.createText(this._el_2,'\n        ',(null as any));
    this._el_17 = this.renderer.createElement(this._el_2,'div',(null as any));
    this.renderer.setElementAttribute(this._el_17,'class','col-xs-3 col-md-10');
    this._text_18 = this.renderer.createText(this._el_17,'\n            ',(null as any));
    this._anchor_19 = this.renderer.createTemplateAnchor(this._el_17,(null as any));
    this._appEl_19 = new import2.AppElement(19,17,this,this._anchor_19);
    this._TemplateRef_19_5 = new import14.TemplateRef_(this._appEl_19,viewFactory_PreferenceComponent3);
    this._NgIf_19_6 = new import13.NgIf(this._appEl_19.vcRef,this._TemplateRef_19_5);
    this._text_20 = this.renderer.createText(this._el_17,'\n            ',(null as any));
    this._anchor_21 = this.renderer.createTemplateAnchor(this._el_17,(null as any));
    this._appEl_21 = new import2.AppElement(21,17,this,this._anchor_21);
    this._TemplateRef_21_5 = new import14.TemplateRef_(this._appEl_21,viewFactory_PreferenceComponent4);
    this._NgIf_21_6 = new import13.NgIf(this._appEl_21.vcRef,this._TemplateRef_21_5);
    this._text_22 = this.renderer.createText(this._el_17,'\n        ',(null as any));
    this._text_23 = this.renderer.createText(this._el_2,'\n    ',(null as any));
    this._text_24 = this.renderer.createText(this._el_0,'\n',(null as any));
    this._expr_0 = import7.UNINITIALIZED;
    this._expr_1 = import7.UNINITIALIZED;
    this._expr_2 = import7.UNINITIALIZED;
    this._expr_3 = import7.UNINITIALIZED;
    this.init([],[
      this._el_0,
      this._text_1,
      this._el_2,
      this._text_3,
      this._el_4,
      this._text_5,
      this._el_6,
      this._text_7,
      this._text_8,
      this._text_9,
      this._el_10,
      this._text_11,
      this._anchor_12,
      this._text_13,
      this._anchor_14,
      this._text_15,
      this._text_16,
      this._el_17,
      this._text_18,
      this._anchor_19,
      this._text_20,
      this._anchor_21,
      this._text_22,
      this._text_23,
      this._text_24
    ]
    ,[],[]);
    return (null as any);
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import14.TemplateRef) && (12 === requestNodeIndex))) { return this._TemplateRef_12_5; }
    if (((token === import13.NgIf) && (12 === requestNodeIndex))) { return this._NgIf_12_6; }
    if (((token === import14.TemplateRef) && (14 === requestNodeIndex))) { return this._TemplateRef_14_5; }
    if (((token === import13.NgIf) && (14 === requestNodeIndex))) { return this._NgIf_14_6; }
    if (((token === import14.TemplateRef) && (19 === requestNodeIndex))) { return this._TemplateRef_19_5; }
    if (((token === import13.NgIf) && (19 === requestNodeIndex))) { return this._NgIf_19_6; }
    if (((token === import14.TemplateRef) && (21 === requestNodeIndex))) { return this._TemplateRef_21_5; }
    if (((token === import13.NgIf) && (21 === requestNodeIndex))) { return this._NgIf_21_6; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    const currVal_0:any = this.context.competitionOn;
    if (import4.checkBinding(throwOnChange,this._expr_0,currVal_0)) {
      this._NgIf_12_6.ngIf = currVal_0;
      this._expr_0 = currVal_0;
    }
    const currVal_1:boolean = !this.context.competitionOn;
    if (import4.checkBinding(throwOnChange,this._expr_1,currVal_1)) {
      this._NgIf_14_6.ngIf = currVal_1;
      this._expr_1 = currVal_1;
    }
    const currVal_2:any = this.context.competitionOn;
    if (import4.checkBinding(throwOnChange,this._expr_2,currVal_2)) {
      this._NgIf_19_6.ngIf = currVal_2;
      this._expr_2 = currVal_2;
    }
    const currVal_3:boolean = !this.context.competitionOn;
    if (import4.checkBinding(throwOnChange,this._expr_3,currVal_3)) {
      this._NgIf_21_6.ngIf = currVal_3;
      this._expr_3 = currVal_3;
    }
    this.detectContentChildrenChanges(throwOnChange);
    this.detectViewChildrenChanges(throwOnChange);
  }
}
export function viewFactory_PreferenceComponent0(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import2.AppElement):import1.AppView<import3.PreferenceComponent> {
  if ((renderType_PreferenceComponent === (null as any))) { (renderType_PreferenceComponent = viewUtils.createRenderComponentType('C:/Users/Silvia/OneDrive/Bc/web-competition/assets/app/preference/preference.component.html',0,import10.ViewEncapsulation.Emulated,styles_PreferenceComponent,{})); }
  return new _View_PreferenceComponent0(viewUtils,parentInjector,declarationEl);
}
class _View_PreferenceComponent1 extends import1.AppView<any> {
  _el_0:any;
  _text_1:any;
  constructor(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import2.AppElement) {
    super(_View_PreferenceComponent1,renderType_PreferenceComponent,import6.ViewType.EMBEDDED,viewUtils,parentInjector,declarationEl,import7.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import2.AppElement {
    this._el_0 = this.renderer.createElement((null as any),'div',(null as any));
    this.renderer.setElementAttribute(this._el_0,'style','display: table-cell; vertical-align: middle;');
    this._text_1 = this.renderer.createText(this._el_0,'During competition is on',(null as any));
    this.init([].concat([this._el_0]),[
      this._el_0,
      this._text_1
    ]
    ,[],[]);
    return (null as any);
  }
}
function viewFactory_PreferenceComponent1(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import2.AppElement):import1.AppView<any> {
  return new _View_PreferenceComponent1(viewUtils,parentInjector,declarationEl);
}
class _View_PreferenceComponent2 extends import1.AppView<any> {
  _el_0:any;
  _text_1:any;
  constructor(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import2.AppElement) {
    super(_View_PreferenceComponent2,renderType_PreferenceComponent,import6.ViewType.EMBEDDED,viewUtils,parentInjector,declarationEl,import7.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import2.AppElement {
    this._el_0 = this.renderer.createElement((null as any),'div',(null as any));
    this.renderer.setElementAttribute(this._el_0,'style','display: table-cell; vertical-align: middle;');
    this._text_1 = this.renderer.createText(this._el_0,'During competition is off',(null as any));
    this.init([].concat([this._el_0]),[
      this._el_0,
      this._text_1
    ]
    ,[],[]);
    return (null as any);
  }
}
function viewFactory_PreferenceComponent2(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import2.AppElement):import1.AppView<any> {
  return new _View_PreferenceComponent2(viewUtils,parentInjector,declarationEl);
}
class _View_PreferenceComponent3 extends import1.AppView<any> {
  _el_0:any;
  _el_1:any;
  constructor(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import2.AppElement) {
    super(_View_PreferenceComponent3,renderType_PreferenceComponent,import6.ViewType.EMBEDDED,viewUtils,parentInjector,declarationEl,import7.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import2.AppElement {
    this._el_0 = this.renderer.createElement((null as any),'button',(null as any));
    this.renderer.setElementAttribute(this._el_0,'class','btn btn-danger btn-xs');
    this._el_1 = this.renderer.createElement(this._el_0,'i',(null as any));
    this.renderer.setElementAttribute(this._el_1,'class','glyphicon glyphicon-off');
    var disposable_0:Function = this.renderer.listen(this._el_0,'click',this.eventHandler(this._handle_click_0_0.bind(this)));
    this.init([].concat([this._el_0]),[
      this._el_0,
      this._el_1
    ]
    ,[disposable_0],[]);
    return (null as any);
  }
  private _handle_click_0_0($event:any):boolean {
    this.markPathToRootAsCheckOnce();
    const pd_0:any = ((<any>this.parent.context.onTurnOff()) !== false);
    return (true && pd_0);
  }
}
function viewFactory_PreferenceComponent3(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import2.AppElement):import1.AppView<any> {
  return new _View_PreferenceComponent3(viewUtils,parentInjector,declarationEl);
}
class _View_PreferenceComponent4 extends import1.AppView<any> {
  _el_0:any;
  _el_1:any;
  constructor(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import2.AppElement) {
    super(_View_PreferenceComponent4,renderType_PreferenceComponent,import6.ViewType.EMBEDDED,viewUtils,parentInjector,declarationEl,import7.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import2.AppElement {
    this._el_0 = this.renderer.createElement((null as any),'button',(null as any));
    this.renderer.setElementAttribute(this._el_0,'class','btn btn-success btn-xs');
    this._el_1 = this.renderer.createElement(this._el_0,'i',(null as any));
    this.renderer.setElementAttribute(this._el_1,'class','glyphicon glyphicon-off');
    var disposable_0:Function = this.renderer.listen(this._el_0,'click',this.eventHandler(this._handle_click_0_0.bind(this)));
    this.init([].concat([this._el_0]),[
      this._el_0,
      this._el_1
    ]
    ,[disposable_0],[]);
    return (null as any);
  }
  private _handle_click_0_0($event:any):boolean {
    this.markPathToRootAsCheckOnce();
    const pd_0:any = ((<any>this.parent.context.onTurnOn()) !== false);
    return (true && pd_0);
  }
}
function viewFactory_PreferenceComponent4(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import2.AppElement):import1.AppView<any> {
  return new _View_PreferenceComponent4(viewUtils,parentInjector,declarationEl);
}