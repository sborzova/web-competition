/**
 * This file is generated by the Angular 2 template compiler.
 * Do not edit.
 */
 /* tslint:disable */

import * as import0 from '@angular/core/src/render/api';
import * as import1 from '@angular/core/src/linker/view';
import * as import2 from '@angular/core/src/linker/element';
import * as import3 from './instances.component';
import * as import4 from '@angular/core/src/linker/view_utils';
import * as import5 from '@angular/core/src/di/injector';
import * as import6 from '@angular/core/src/linker/view_type';
import * as import7 from '@angular/core/src/change_detection/change_detection';
import * as import8 from '../shared/session-storage.service';
import * as import9 from '@angular/core/src/metadata/view';
import * as import10 from '@angular/core/src/linker/component_factory';
import * as import11 from '@angular/router/src/directives/router_link';
import * as import12 from '@angular/common/src/directives/ng_if';
import * as import13 from '@angular/router/src/router';
import * as import14 from '@angular/router/src/router_state';
import * as import15 from '@angular/common/src/location/location_strategy';
import * as import16 from '@angular/core/src/linker/template_ref';
import * as import17 from './instance-list/instance-list.component';
import * as import18 from './instance-list/instance-list.component.ngfactory';
import * as import19 from '../shared/instance.service';
import * as import20 from '../flash-message/flash-messages.service';
var renderType_InstancesComponent_Host:import0.RenderComponentType = (null as any);
class _View_InstancesComponent_Host0 extends import1.AppView<any> {
  _el_0:any;
  /*private*/ _appEl_0:import2.AppElement;
  _InstancesComponent_0_4:import3.InstancesComponent;
  constructor(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import2.AppElement) {
    super(_View_InstancesComponent_Host0,renderType_InstancesComponent_Host,import6.ViewType.HOST,viewUtils,parentInjector,declarationEl,import7.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import2.AppElement {
    this._el_0 = this.selectOrCreateHostElement('app-instances',rootSelector,(null as any));
    this._appEl_0 = new import2.AppElement(0,(null as any),this,this._el_0);
    var compView_0:any = viewFactory_InstancesComponent0(this.viewUtils,this.injector(0),this._appEl_0);
    this._InstancesComponent_0_4 = new import3.InstancesComponent(this.parentInjector.get(import8.SessionStorageService));
    this._appEl_0.initComponent(this._InstancesComponent_0_4,[],compView_0);
    compView_0.create(this._InstancesComponent_0_4,this.projectableNodes,(null as any));
    this.init([].concat([this._el_0]),[this._el_0],[],[]);
    return this._appEl_0;
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import3.InstancesComponent) && (0 === requestNodeIndex))) { return this._InstancesComponent_0_4; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    if (((this.numberOfChecks === 0) && !throwOnChange)) { this._InstancesComponent_0_4.ngOnInit(); }
    this.detectContentChildrenChanges(throwOnChange);
    this.detectViewChildrenChanges(throwOnChange);
  }
}
function viewFactory_InstancesComponent_Host0(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import2.AppElement):import1.AppView<any> {
  if ((renderType_InstancesComponent_Host === (null as any))) { (renderType_InstancesComponent_Host = viewUtils.createRenderComponentType('',0,import9.ViewEncapsulation.None,[],{})); }
  return new _View_InstancesComponent_Host0(viewUtils,parentInjector,declarationEl);
}
export const InstancesComponentNgFactory:import10.ComponentFactory<import3.InstancesComponent> = new import10.ComponentFactory<import3.InstancesComponent>('app-instances',viewFactory_InstancesComponent_Host0,import3.InstancesComponent);
const styles_InstancesComponent:any[] = [];
var renderType_InstancesComponent:import0.RenderComponentType = (null as any);
class _View_InstancesComponent0 extends import1.AppView<import3.InstancesComponent> {
  _el_0:any;
  _text_1:any;
  _el_2:any;
  _text_3:any;
  _el_4:any;
  _text_5:any;
  _el_6:any;
  _text_7:any;
  _el_8:any;
  _text_9:any;
  _text_10:any;
  _el_11:any;
  _text_12:any;
  _el_13:any;
  _RouterLink_13_3:import11.RouterLink;
  _text_14:any;
  _text_15:any;
  _text_16:any;
  _text_17:any;
  _text_18:any;
  _text_19:any;
  _el_20:any;
  _text_21:any;
  _el_22:any;
  _text_23:any;
  _anchor_24:any;
  /*private*/ _appEl_24:import2.AppElement;
  _TemplateRef_24_5:any;
  _NgIf_24_6:import12.NgIf;
  _text_25:any;
  _anchor_26:any;
  /*private*/ _appEl_26:import2.AppElement;
  _TemplateRef_26_5:any;
  _NgIf_26_6:import12.NgIf;
  _text_27:any;
  _text_28:any;
  _text_29:any;
  /*private*/ _expr_0:any;
  _arr_0:any;
  /*private*/ _expr_2:any;
  /*private*/ _expr_3:any;
  /*private*/ _expr_4:any;
  constructor(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import2.AppElement) {
    super(_View_InstancesComponent0,renderType_InstancesComponent,import6.ViewType.COMPONENT,viewUtils,parentInjector,declarationEl,import7.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import2.AppElement {
    const parentRenderNode:any = this.renderer.createViewRoot(this.declarationAppElement.nativeElement);
    this._el_0 = this.renderer.createElement(parentRenderNode,'button',(null as any));
    this.renderer.setElementAttribute(this._el_0,'data-target','#notViewInstances');
    this.renderer.setElementAttribute(this._el_0,'data-toggle','modal');
    this.renderer.setElementAttribute(this._el_0,'id','openModalNotView');
    this._text_1 = this.renderer.createText(parentRenderNode,'\n\n',(null as any));
    this._el_2 = this.renderer.createElement(parentRenderNode,'div',(null as any));
    this.renderer.setElementAttribute(this._el_2,'aria-hidden','true');
    this.renderer.setElementAttribute(this._el_2,'class','modal fade');
    this.renderer.setElementAttribute(this._el_2,'id','notViewInstances');
    this.renderer.setElementAttribute(this._el_2,'role','dialog');
    this.renderer.setElementAttribute(this._el_2,'tabindex','-1');
    this._text_3 = this.renderer.createText(this._el_2,'\n    ',(null as any));
    this._el_4 = this.renderer.createElement(this._el_2,'div',(null as any));
    this.renderer.setElementAttribute(this._el_4,'class','modal-dialog');
    this.renderer.setElementAttribute(this._el_4,'role','document');
    this._text_5 = this.renderer.createText(this._el_4,'\n        ',(null as any));
    this._el_6 = this.renderer.createElement(this._el_4,'div',(null as any));
    this.renderer.setElementAttribute(this._el_6,'class','modal-content');
    this._text_7 = this.renderer.createText(this._el_6,'\n            ',(null as any));
    this._el_8 = this.renderer.createElement(this._el_6,'div',(null as any));
    this.renderer.setElementAttribute(this._el_8,'class','modal-body');
    this.renderer.setElementAttribute(this._el_8,'style','text-align: center; padding: 5% 0 5% 0');
    this._text_9 = this.renderer.createText(this._el_8,'\n                You must be registered and logged in to display instances.\n            ',(null as any));
    this._text_10 = this.renderer.createText(this._el_6,'\n            ',(null as any));
    this._el_11 = this.renderer.createElement(this._el_6,'div',(null as any));
    this.renderer.setElementAttribute(this._el_11,'class','modal-footer');
    this._text_12 = this.renderer.createText(this._el_11,'\n                ',(null as any));
    this._el_13 = this.renderer.createElement(this._el_11,'button',(null as any));
    this.renderer.setElementAttribute(this._el_13,'class','btn btn-primary');
    this.renderer.setElementAttribute(this._el_13,'data-dismiss','modal');
    this.renderer.setElementAttribute(this._el_13,'type','button');
    this._RouterLink_13_3 = new import11.RouterLink(this.parentInjector.get(import13.Router),this.parentInjector.get(import14.ActivatedRoute),this.parentInjector.get(import15.LocationStrategy));
    this._text_14 = this.renderer.createText(this._el_13,'Log in',(null as any));
    this._text_15 = this.renderer.createText(this._el_11,'\n            ',(null as any));
    this._text_16 = this.renderer.createText(this._el_6,'\n        ',(null as any));
    this._text_17 = this.renderer.createText(this._el_4,'\n    ',(null as any));
    this._text_18 = this.renderer.createText(this._el_2,'\n',(null as any));
    this._text_19 = this.renderer.createText(parentRenderNode,'\n\n',(null as any));
    this._el_20 = this.renderer.createElement(parentRenderNode,'div',(null as any));
    this.renderer.setElementAttribute(this._el_20,'class','container');
    this.renderer.setElementAttribute(this._el_20,'style','margin-top: 3%');
    this._text_21 = this.renderer.createText(this._el_20,'\n    ',(null as any));
    this._el_22 = this.renderer.createElement(this._el_20,'div',(null as any));
    this.renderer.setElementAttribute(this._el_22,'class','row');
    this._text_23 = this.renderer.createText(this._el_22,'\n        ',(null as any));
    this._anchor_24 = this.renderer.createTemplateAnchor(this._el_22,(null as any));
    this._appEl_24 = new import2.AppElement(24,22,this,this._anchor_24);
    this._TemplateRef_24_5 = new import16.TemplateRef_(this._appEl_24,viewFactory_InstancesComponent1);
    this._NgIf_24_6 = new import12.NgIf(this._appEl_24.vcRef,this._TemplateRef_24_5);
    this._text_25 = this.renderer.createText(this._el_22,'\n        ',(null as any));
    this._anchor_26 = this.renderer.createTemplateAnchor(this._el_22,(null as any));
    this._appEl_26 = new import2.AppElement(26,22,this,this._anchor_26);
    this._TemplateRef_26_5 = new import16.TemplateRef_(this._appEl_26,viewFactory_InstancesComponent2);
    this._NgIf_26_6 = new import12.NgIf(this._appEl_26.vcRef,this._TemplateRef_26_5);
    this._text_27 = this.renderer.createText(this._el_22,'\n    ',(null as any));
    this._text_28 = this.renderer.createText(this._el_20,'\n',(null as any));
    this._text_29 = this.renderer.createText(parentRenderNode,'\n',(null as any));
    this._expr_0 = import7.UNINITIALIZED;
    var disposable_0:Function = this.renderer.listen(this._el_13,'click',this.eventHandler(this._handle_click_13_0.bind(this)));
    this._arr_0 = import4.pureProxy1((p0:any):any[] => {
      return [p0];
    });
    this._expr_2 = import7.UNINITIALIZED;
    this._expr_3 = import7.UNINITIALIZED;
    this._expr_4 = import7.UNINITIALIZED;
    this.init([],[
      this._el_0,
      this._text_1,
      this._el_2,
      this._text_3,
      this._el_4,
      this._text_5,
      this._el_6,
      this._text_7,
      this._el_8,
      this._text_9,
      this._text_10,
      this._el_11,
      this._text_12,
      this._el_13,
      this._text_14,
      this._text_15,
      this._text_16,
      this._text_17,
      this._text_18,
      this._text_19,
      this._el_20,
      this._text_21,
      this._el_22,
      this._text_23,
      this._anchor_24,
      this._text_25,
      this._anchor_26,
      this._text_27,
      this._text_28,
      this._text_29
    ]
    ,[disposable_0],[]);
    return (null as any);
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import11.RouterLink) && ((13 <= requestNodeIndex) && (requestNodeIndex <= 14)))) { return this._RouterLink_13_3; }
    if (((token === import16.TemplateRef) && (24 === requestNodeIndex))) { return this._TemplateRef_24_5; }
    if (((token === import12.NgIf) && (24 === requestNodeIndex))) { return this._NgIf_24_6; }
    if (((token === import16.TemplateRef) && (26 === requestNodeIndex))) { return this._TemplateRef_26_5; }
    if (((token === import12.NgIf) && (26 === requestNodeIndex))) { return this._NgIf_26_6; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    const currVal_2:any = this._arr_0('/#signin');
    if (import4.checkBinding(throwOnChange,this._expr_2,currVal_2)) {
      this._RouterLink_13_3.routerLink = currVal_2;
      this._expr_2 = currVal_2;
    }
    const currVal_3:any = this.context.isAdmin();
    if (import4.checkBinding(throwOnChange,this._expr_3,currVal_3)) {
      this._NgIf_24_6.ngIf = currVal_3;
      this._expr_3 = currVal_3;
    }
    const currVal_4:any = this.context.showInstances();
    if (import4.checkBinding(throwOnChange,this._expr_4,currVal_4)) {
      this._NgIf_26_6.ngIf = currVal_4;
      this._expr_4 = currVal_4;
    }
    this.detectContentChildrenChanges(throwOnChange);
    const currVal_0:any = true;
    if (import4.checkBinding(throwOnChange,this._expr_0,currVal_0)) {
      this.renderer.setElementProperty(this._el_0,'hidden',currVal_0);
      this._expr_0 = currVal_0;
    }
    this.detectViewChildrenChanges(throwOnChange);
  }
  private _handle_click_13_0($event:any):boolean {
    this.markPathToRootAsCheckOnce();
    const pd_0:any = ((<any>this._RouterLink_13_3.onClick($event.button,$event.ctrlKey,$event.metaKey)) !== false);
    return (true && pd_0);
  }
}
export function viewFactory_InstancesComponent0(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import2.AppElement):import1.AppView<import3.InstancesComponent> {
  if ((renderType_InstancesComponent === (null as any))) { (renderType_InstancesComponent = viewUtils.createRenderComponentType('C:/Users/Silvia/OneDrive/Bakalárka/Project/assets/app/instances/instances.component.html',0,import9.ViewEncapsulation.None,styles_InstancesComponent,{})); }
  return new _View_InstancesComponent0(viewUtils,parentInjector,declarationEl);
}
class _View_InstancesComponent1 extends import1.AppView<any> {
  _el_0:any;
  _text_1:any;
  _el_2:any;
  _RouterLink_2_3:import11.RouterLink;
  _text_3:any;
  _text_4:any;
  _arr_0:any;
  /*private*/ _expr_1:any;
  constructor(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import2.AppElement) {
    super(_View_InstancesComponent1,renderType_InstancesComponent,import6.ViewType.EMBEDDED,viewUtils,parentInjector,declarationEl,import7.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import2.AppElement {
    this._el_0 = this.renderer.createElement((null as any),'div',(null as any));
    this._text_1 = this.renderer.createText(this._el_0,'\n            ',(null as any));
    this._el_2 = this.renderer.createElement(this._el_0,'button',(null as any));
    this.renderer.setElementAttribute(this._el_2,'class','btn btn-success btn-xs');
    this._RouterLink_2_3 = new import11.RouterLink(this.parent.parentInjector.get(import13.Router),this.parent.parentInjector.get(import14.ActivatedRoute),this.parent.parentInjector.get(import15.LocationStrategy));
    this._text_3 = this.renderer.createText(this._el_2,'Add instance',(null as any));
    this._text_4 = this.renderer.createText(this._el_0,'\n        ',(null as any));
    var disposable_0:Function = this.renderer.listen(this._el_2,'click',this.eventHandler(this._handle_click_2_0.bind(this)));
    this._arr_0 = import4.pureProxy1((p0:any):any[] => {
      return [p0];
    });
    this._expr_1 = import7.UNINITIALIZED;
    this.init([].concat([this._el_0]),[
      this._el_0,
      this._text_1,
      this._el_2,
      this._text_3,
      this._text_4
    ]
    ,[disposable_0],[]);
    return (null as any);
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import11.RouterLink) && ((2 <= requestNodeIndex) && (requestNodeIndex <= 3)))) { return this._RouterLink_2_3; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    const currVal_1:any = this._arr_0('/#instances/create');
    if (import4.checkBinding(throwOnChange,this._expr_1,currVal_1)) {
      this._RouterLink_2_3.routerLink = currVal_1;
      this._expr_1 = currVal_1;
    }
    this.detectContentChildrenChanges(throwOnChange);
    this.detectViewChildrenChanges(throwOnChange);
  }
  private _handle_click_2_0($event:any):boolean {
    this.markPathToRootAsCheckOnce();
    const pd_0:any = ((<any>this._RouterLink_2_3.onClick($event.button,$event.ctrlKey,$event.metaKey)) !== false);
    return (true && pd_0);
  }
}
function viewFactory_InstancesComponent1(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import2.AppElement):import1.AppView<any> {
  return new _View_InstancesComponent1(viewUtils,parentInjector,declarationEl);
}
class _View_InstancesComponent2 extends import1.AppView<any> {
  _el_0:any;
  _text_1:any;
  _el_2:any;
  /*private*/ _appEl_2:import2.AppElement;
  _InstanceListComponent_2_4:import17.InstanceListComponent;
  _text_3:any;
  constructor(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import2.AppElement) {
    super(_View_InstancesComponent2,renderType_InstancesComponent,import6.ViewType.EMBEDDED,viewUtils,parentInjector,declarationEl,import7.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import2.AppElement {
    this._el_0 = this.renderer.createElement((null as any),'div',(null as any));
    this._text_1 = this.renderer.createText(this._el_0,'\n            ',(null as any));
    this._el_2 = this.renderer.createElement(this._el_0,'app-instance-list',(null as any));
    this._appEl_2 = new import2.AppElement(2,0,this,this._el_2);
    var compView_2:any = import18.viewFactory_InstanceListComponent0(this.viewUtils,this.injector(2),this._appEl_2);
    this._InstanceListComponent_2_4 = new import17.InstanceListComponent(this.parent.parentInjector.get(import19.InstanceService),this.parent.parentInjector.get(import8.SessionStorageService),this.parent.parentInjector.get(import20.FlashMessageService));
    this._appEl_2.initComponent(this._InstanceListComponent_2_4,[],compView_2);
    compView_2.create(this._InstanceListComponent_2_4,[],(null as any));
    this._text_3 = this.renderer.createText(this._el_0,'\n        ',(null as any));
    this.init([].concat([this._el_0]),[
      this._el_0,
      this._text_1,
      this._el_2,
      this._text_3
    ]
    ,[],[]);
    return (null as any);
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import17.InstanceListComponent) && (2 === requestNodeIndex))) { return this._InstanceListComponent_2_4; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    if (((this.numberOfChecks === 0) && !throwOnChange)) { this._InstanceListComponent_2_4.ngOnInit(); }
    this.detectContentChildrenChanges(throwOnChange);
    this.detectViewChildrenChanges(throwOnChange);
  }
}
function viewFactory_InstancesComponent2(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import2.AppElement):import1.AppView<any> {
  return new _View_InstancesComponent2(viewUtils,parentInjector,declarationEl);
}