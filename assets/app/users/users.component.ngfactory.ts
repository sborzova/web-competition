/**
 * This file is generated by the Angular 2 template compiler.
 * Do not edit.
 */
 /* tslint:disable */

import * as import0 from '@angular/core/src/render/api';
import * as import1 from '@angular/core/src/linker/view';
import * as import2 from '@angular/core/src/linker/element';
import * as import3 from './users.component';
import * as import4 from '@angular/core/src/linker/view_utils';
import * as import5 from '@angular/core/src/di/injector';
import * as import6 from '@angular/core/src/linker/view_type';
import * as import7 from '@angular/core/src/change_detection/change_detection';
import * as import8 from './users.service';
import * as import9 from '../shared/session-storage.service';
import * as import10 from '../flash-message/flash-messages.service';
import * as import11 from '@angular/core/src/metadata/view';
import * as import12 from '@angular/core/src/linker/component_factory';
import * as import13 from '@angular/common/src/directives/ng_if';
import * as import14 from '@angular/core/src/linker/template_ref';
import * as import15 from '@angular/common/src/directives/ng_for';
import * as import16 from '../shared/order-by.pipe';
import * as import17 from '@angular/core/src/change_detection/differs/iterable_differs';
import * as import18 from '@angular/router/src/directives/router_link';
import * as import19 from '@angular/router/src/router';
import * as import20 from '@angular/router/src/router_state';
import * as import21 from '@angular/common/src/location/location_strategy';
var renderType_UsersComponent_Host:import0.RenderComponentType = (null as any);
class _View_UsersComponent_Host0 extends import1.AppView<any> {
  _el_0:any;
  /*private*/ _appEl_0:import2.AppElement;
  _UsersComponent_0_4:import3.UsersComponent;
  constructor(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import2.AppElement) {
    super(_View_UsersComponent_Host0,renderType_UsersComponent_Host,import6.ViewType.HOST,viewUtils,parentInjector,declarationEl,import7.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import2.AppElement {
    this._el_0 = this.selectOrCreateHostElement('app-users',rootSelector,(null as any));
    this._appEl_0 = new import2.AppElement(0,(null as any),this,this._el_0);
    var compView_0:any = viewFactory_UsersComponent0(this.viewUtils,this.injector(0),this._appEl_0);
    this._UsersComponent_0_4 = new import3.UsersComponent(this.parentInjector.get(import8.UsersService),this.parentInjector.get(import9.SessionStorageService),this.parentInjector.get(import10.FlashMessageService));
    this._appEl_0.initComponent(this._UsersComponent_0_4,[],compView_0);
    compView_0.create(this._UsersComponent_0_4,this.projectableNodes,(null as any));
    this.init([].concat([this._el_0]),[this._el_0],[],[]);
    return this._appEl_0;
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import3.UsersComponent) && (0 === requestNodeIndex))) { return this._UsersComponent_0_4; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    if (((this.numberOfChecks === 0) && !throwOnChange)) { this._UsersComponent_0_4.ngOnInit(); }
    this.detectContentChildrenChanges(throwOnChange);
    this.detectViewChildrenChanges(throwOnChange);
  }
}
function viewFactory_UsersComponent_Host0(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import2.AppElement):import1.AppView<any> {
  if ((renderType_UsersComponent_Host === (null as any))) { (renderType_UsersComponent_Host = viewUtils.createRenderComponentType('',0,import11.ViewEncapsulation.None,[],{})); }
  return new _View_UsersComponent_Host0(viewUtils,parentInjector,declarationEl);
}
export const UsersComponentNgFactory:import12.ComponentFactory<import3.UsersComponent> = new import12.ComponentFactory<import3.UsersComponent>('app-users',viewFactory_UsersComponent_Host0,import3.UsersComponent);
const styles_UsersComponent:any[] = [];
var renderType_UsersComponent:import0.RenderComponentType = (null as any);
class _View_UsersComponent0 extends import1.AppView<import3.UsersComponent> {
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
  _text_11:any;
  _anchor_12:any;
  /*private*/ _appEl_12:import2.AppElement;
  _TemplateRef_12_5:any;
  _NgIf_12_6:import13.NgIf;
  _text_13:any;
  _text_14:any;
  /*private*/ _expr_1:any;
  constructor(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import2.AppElement) {
    super(_View_UsersComponent0,renderType_UsersComponent,import6.ViewType.COMPONENT,viewUtils,parentInjector,declarationEl,import7.ChangeDetectorStatus.CheckAlways);
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
    this._text_5 = this.renderer.createText(this._el_4,'\n            ',(null as any));
    this._el_6 = this.renderer.createElement(this._el_4,'button',(null as any));
    this.renderer.setElementAttribute(this._el_6,'class','btn btn-primary btn-xs');
    this.renderer.setElementAttribute(this._el_6,'title','Send email to all users');
    this._text_7 = this.renderer.createText(this._el_6,'\n            ',(null as any));
    this._el_8 = this.renderer.createElement(this._el_6,'span',(null as any));
    this.renderer.setElementAttribute(this._el_8,'class','glyphicon glyphicon-envelope');
    this._text_9 = this.renderer.createText(this._el_6,' Send email\n            ',(null as any));
    this._text_10 = this.renderer.createText(this._el_4,'\n        ',(null as any));
    this._text_11 = this.renderer.createText(this._el_2,'\n        ',(null as any));
    this._anchor_12 = this.renderer.createTemplateAnchor(this._el_2,(null as any));
    this._appEl_12 = new import2.AppElement(12,2,this,this._anchor_12);
    this._TemplateRef_12_5 = new import14.TemplateRef_(this._appEl_12,viewFactory_UsersComponent1);
    this._NgIf_12_6 = new import13.NgIf(this._appEl_12.vcRef,this._TemplateRef_12_5);
    this._text_13 = this.renderer.createText(this._el_2,'\n\n    ',(null as any));
    this._text_14 = this.renderer.createText(this._el_0,'\n',(null as any));
    var disposable_0:Function = this.renderer.listen(this._el_6,'click',this.eventHandler(this._handle_click_6_0.bind(this)));
    this._expr_1 = import7.UNINITIALIZED;
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
      this._text_11,
      this._anchor_12,
      this._text_13,
      this._text_14
    ]
    ,[disposable_0],[]);
    return (null as any);
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import14.TemplateRef) && (12 === requestNodeIndex))) { return this._TemplateRef_12_5; }
    if (((token === import13.NgIf) && (12 === requestNodeIndex))) { return this._NgIf_12_6; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    const currVal_1:any = this.context.users;
    if (import4.checkBinding(throwOnChange,this._expr_1,currVal_1)) {
      this._NgIf_12_6.ngIf = currVal_1;
      this._expr_1 = currVal_1;
    }
    this.detectContentChildrenChanges(throwOnChange);
    this.detectViewChildrenChanges(throwOnChange);
  }
  private _handle_click_6_0($event:any):boolean {
    this.markPathToRootAsCheckOnce();
    const pd_0:any = ((<any>this.context.onSendEmail()) !== false);
    return (true && pd_0);
  }
}
export function viewFactory_UsersComponent0(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import2.AppElement):import1.AppView<import3.UsersComponent> {
  if ((renderType_UsersComponent === (null as any))) { (renderType_UsersComponent = viewUtils.createRenderComponentType('C:/Users/Silvia/OneDrive/Bakalárka/Project/assets/app/users/users.component.html',0,import11.ViewEncapsulation.None,styles_UsersComponent,{})); }
  return new _View_UsersComponent0(viewUtils,parentInjector,declarationEl);
}
class _View_UsersComponent1 extends import1.AppView<any> {
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
  _el_10:any;
  _text_11:any;
  _text_12:any;
  _el_13:any;
  _text_14:any;
  _text_15:any;
  _el_16:any;
  _text_17:any;
  _text_18:any;
  _el_19:any;
  _text_20:any;
  _text_21:any;
  _text_22:any;
  _text_23:any;
  _el_24:any;
  _text_25:any;
  _anchor_26:any;
  /*private*/ _appEl_26:import2.AppElement;
  _TemplateRef_26_5:any;
  _NgFor_26_6:import15.NgFor;
  _text_27:any;
  _text_28:any;
  _text_29:any;
  _arr_0:any;
  _pipe_orderBy_0:import16.OrderByPipe;
  /*private*/ _expr_0:any;
  constructor(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import2.AppElement) {
    super(_View_UsersComponent1,renderType_UsersComponent,import6.ViewType.EMBEDDED,viewUtils,parentInjector,declarationEl,import7.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import2.AppElement {
    this._el_0 = this.renderer.createElement((null as any),'div',(null as any));
    this.renderer.setElementAttribute(this._el_0,'class','col-xs-12');
    this._text_1 = this.renderer.createText(this._el_0,'\n            ',(null as any));
    this._el_2 = this.renderer.createElement(this._el_0,'table',(null as any));
    this.renderer.setElementAttribute(this._el_2,'class','table');
    this._text_3 = this.renderer.createText(this._el_2,'\n                ',(null as any));
    this._el_4 = this.renderer.createElement(this._el_2,'thead',(null as any));
    this._text_5 = this.renderer.createText(this._el_4,'\n                    ',(null as any));
    this._el_6 = this.renderer.createElement(this._el_4,'tr',(null as any));
    this._text_7 = this.renderer.createText(this._el_6,'\n                        ',(null as any));
    this._el_8 = this.renderer.createElement(this._el_6,'th',(null as any));
    this._text_9 = this.renderer.createText(this._el_6,'\n                        ',(null as any));
    this._el_10 = this.renderer.createElement(this._el_6,'th',(null as any));
    this._text_11 = this.renderer.createText(this._el_10,'First name',(null as any));
    this._text_12 = this.renderer.createText(this._el_6,'\n                        ',(null as any));
    this._el_13 = this.renderer.createElement(this._el_6,'th',(null as any));
    this._text_14 = this.renderer.createText(this._el_13,'Last name',(null as any));
    this._text_15 = this.renderer.createText(this._el_6,'\n                        ',(null as any));
    this._el_16 = this.renderer.createElement(this._el_6,'th',(null as any));
    this._text_17 = this.renderer.createText(this._el_16,'Email address',(null as any));
    this._text_18 = this.renderer.createText(this._el_6,'\n                        ',(null as any));
    this._el_19 = this.renderer.createElement(this._el_6,'th',(null as any));
    this._text_20 = this.renderer.createText(this._el_19,'Role',(null as any));
    this._text_21 = this.renderer.createText(this._el_6,'\n                    ',(null as any));
    this._text_22 = this.renderer.createText(this._el_4,'\n                ',(null as any));
    this._text_23 = this.renderer.createText(this._el_2,'\n                ',(null as any));
    this._el_24 = this.renderer.createElement(this._el_2,'tbody',(null as any));
    this._text_25 = this.renderer.createText(this._el_24,'\n                    ',(null as any));
    this._anchor_26 = this.renderer.createTemplateAnchor(this._el_24,(null as any));
    this._appEl_26 = new import2.AppElement(26,24,this,this._anchor_26);
    this._TemplateRef_26_5 = new import14.TemplateRef_(this._appEl_26,viewFactory_UsersComponent2);
    this._NgFor_26_6 = new import15.NgFor(this._appEl_26.vcRef,this._TemplateRef_26_5,this.parent.parentInjector.get(import17.IterableDiffers),this.parent.ref);
    this._text_27 = this.renderer.createText(this._el_24,'\n                ',(null as any));
    this._text_28 = this.renderer.createText(this._el_2,'\n            ',(null as any));
    this._text_29 = this.renderer.createText(this._el_0,'\n        ',(null as any));
    this._arr_0 = import4.pureProxy2((p0:any,p1:any):any[] => {
      return [
        p0,
        p1
      ]
      ;
    });
    this._pipe_orderBy_0 = new import16.OrderByPipe();
    this._expr_0 = import7.UNINITIALIZED;
    this.init([].concat([this._el_0]),[
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
      this._el_10,
      this._text_11,
      this._text_12,
      this._el_13,
      this._text_14,
      this._text_15,
      this._el_16,
      this._text_17,
      this._text_18,
      this._el_19,
      this._text_20,
      this._text_21,
      this._text_22,
      this._text_23,
      this._el_24,
      this._text_25,
      this._anchor_26,
      this._text_27,
      this._text_28,
      this._text_29
    ]
    ,[],[]);
    return (null as any);
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import14.TemplateRef) && (26 === requestNodeIndex))) { return this._TemplateRef_26_5; }
    if (((token === import15.NgFor) && (26 === requestNodeIndex))) { return this._NgFor_26_6; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    var changes:{[key: string]:import7.SimpleChange} = (null as any);
    const valUnwrapper:any = new import7.ValueUnwrapper();
    changes = (null as any);
    valUnwrapper.reset();
    const currVal_0:any = valUnwrapper.unwrap(this._pipe_orderBy_0.transform(this.parent.context.users,this._arr_0('lastName','firstName')));
    if ((valUnwrapper.hasWrappedValue || import4.checkBinding(throwOnChange,this._expr_0,currVal_0))) {
      this._NgFor_26_6.ngForOf = currVal_0;
      if ((changes === (null as any))) { (changes = {}); }
      changes['ngForOf'] = new import7.SimpleChange(this._expr_0,currVal_0);
      this._expr_0 = currVal_0;
    }
    if ((changes !== (null as any))) { this._NgFor_26_6.ngOnChanges(changes); }
    if (!throwOnChange) { this._NgFor_26_6.ngDoCheck(); }
    this.detectContentChildrenChanges(throwOnChange);
    this.detectViewChildrenChanges(throwOnChange);
  }
}
function viewFactory_UsersComponent1(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import2.AppElement):import1.AppView<any> {
  return new _View_UsersComponent1(viewUtils,parentInjector,declarationEl);
}
class _View_UsersComponent2 extends import1.AppView<any> {
  _el_0:any;
  _text_1:any;
  _el_2:any;
  _text_3:any;
  _text_4:any;
  _el_5:any;
  _text_6:any;
  _text_7:any;
  _el_8:any;
  _text_9:any;
  _text_10:any;
  _el_11:any;
  _text_12:any;
  _text_13:any;
  _el_14:any;
  _text_15:any;
  _text_16:any;
  _anchor_17:any;
  /*private*/ _appEl_17:import2.AppElement;
  _TemplateRef_17_5:any;
  _NgIf_17_6:import13.NgIf;
  _text_18:any;
  _anchor_19:any;
  /*private*/ _appEl_19:import2.AppElement;
  _TemplateRef_19_5:any;
  _NgIf_19_6:import13.NgIf;
  _text_20:any;
  /*private*/ _expr_0:any;
  /*private*/ _expr_1:any;
  /*private*/ _expr_2:any;
  /*private*/ _expr_3:any;
  /*private*/ _expr_4:any;
  /*private*/ _expr_5:any;
  /*private*/ _expr_6:any;
  constructor(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import2.AppElement) {
    super(_View_UsersComponent2,renderType_UsersComponent,import6.ViewType.EMBEDDED,viewUtils,parentInjector,declarationEl,import7.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import2.AppElement {
    this._el_0 = this.renderer.createElement((null as any),'tr',(null as any));
    this._text_1 = this.renderer.createText(this._el_0,'\n                        ',(null as any));
    this._el_2 = this.renderer.createElement(this._el_0,'td',(null as any));
    this._text_3 = this.renderer.createText(this._el_2,'',(null as any));
    this._text_4 = this.renderer.createText(this._el_0,'\n                        ',(null as any));
    this._el_5 = this.renderer.createElement(this._el_0,'td',(null as any));
    this._text_6 = this.renderer.createText(this._el_5,'',(null as any));
    this._text_7 = this.renderer.createText(this._el_0,'\n                        ',(null as any));
    this._el_8 = this.renderer.createElement(this._el_0,'td',(null as any));
    this._text_9 = this.renderer.createText(this._el_8,'',(null as any));
    this._text_10 = this.renderer.createText(this._el_0,'\n                        ',(null as any));
    this._el_11 = this.renderer.createElement(this._el_0,'td',(null as any));
    this._text_12 = this.renderer.createText(this._el_11,'',(null as any));
    this._text_13 = this.renderer.createText(this._el_0,'\n                        ',(null as any));
    this._el_14 = this.renderer.createElement(this._el_0,'td',(null as any));
    this._text_15 = this.renderer.createText(this._el_14,'',(null as any));
    this._text_16 = this.renderer.createText(this._el_0,'\n                        ',(null as any));
    this._anchor_17 = this.renderer.createTemplateAnchor(this._el_0,(null as any));
    this._appEl_17 = new import2.AppElement(17,0,this,this._anchor_17);
    this._TemplateRef_17_5 = new import14.TemplateRef_(this._appEl_17,viewFactory_UsersComponent3);
    this._NgIf_17_6 = new import13.NgIf(this._appEl_17.vcRef,this._TemplateRef_17_5);
    this._text_18 = this.renderer.createText(this._el_0,'\n                        ',(null as any));
    this._anchor_19 = this.renderer.createTemplateAnchor(this._el_0,(null as any));
    this._appEl_19 = new import2.AppElement(19,0,this,this._anchor_19);
    this._TemplateRef_19_5 = new import14.TemplateRef_(this._appEl_19,viewFactory_UsersComponent4);
    this._NgIf_19_6 = new import13.NgIf(this._appEl_19.vcRef,this._TemplateRef_19_5);
    this._text_20 = this.renderer.createText(this._el_0,'\n                    ',(null as any));
    this._expr_0 = import7.UNINITIALIZED;
    this._expr_1 = import7.UNINITIALIZED;
    this._expr_2 = import7.UNINITIALIZED;
    this._expr_3 = import7.UNINITIALIZED;
    this._expr_4 = import7.UNINITIALIZED;
    this._expr_5 = import7.UNINITIALIZED;
    this._expr_6 = import7.UNINITIALIZED;
    this.init([].concat([this._el_0]),[
      this._el_0,
      this._text_1,
      this._el_2,
      this._text_3,
      this._text_4,
      this._el_5,
      this._text_6,
      this._text_7,
      this._el_8,
      this._text_9,
      this._text_10,
      this._el_11,
      this._text_12,
      this._text_13,
      this._el_14,
      this._text_15,
      this._text_16,
      this._anchor_17,
      this._text_18,
      this._anchor_19,
      this._text_20
    ]
    ,[],[]);
    return (null as any);
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import14.TemplateRef) && (17 === requestNodeIndex))) { return this._TemplateRef_17_5; }
    if (((token === import13.NgIf) && (17 === requestNodeIndex))) { return this._NgIf_17_6; }
    if (((token === import14.TemplateRef) && (19 === requestNodeIndex))) { return this._TemplateRef_19_5; }
    if (((token === import13.NgIf) && (19 === requestNodeIndex))) { return this._NgIf_19_6; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    const currVal_5:boolean = !this.parent.parent.context.isMe(this.context.$implicit);
    if (import4.checkBinding(throwOnChange,this._expr_5,currVal_5)) {
      this._NgIf_17_6.ngIf = currVal_5;
      this._expr_5 = currVal_5;
    }
    const currVal_6:any = this.parent.parent.context.isMe(this.context.$implicit);
    if (import4.checkBinding(throwOnChange,this._expr_6,currVal_6)) {
      this._NgIf_19_6.ngIf = currVal_6;
      this._expr_6 = currVal_6;
    }
    this.detectContentChildrenChanges(throwOnChange);
    const currVal_0:any = import4.interpolate(1,'',(this.context.index + 1),' ');
    if (import4.checkBinding(throwOnChange,this._expr_0,currVal_0)) {
      this.renderer.setText(this._text_3,currVal_0);
      this._expr_0 = currVal_0;
    }
    const currVal_1:any = import4.interpolate(1,'',this.context.$implicit.firstName,'');
    if (import4.checkBinding(throwOnChange,this._expr_1,currVal_1)) {
      this.renderer.setText(this._text_6,currVal_1);
      this._expr_1 = currVal_1;
    }
    const currVal_2:any = import4.interpolate(1,'',this.context.$implicit.lastName,'');
    if (import4.checkBinding(throwOnChange,this._expr_2,currVal_2)) {
      this.renderer.setText(this._text_9,currVal_2);
      this._expr_2 = currVal_2;
    }
    const currVal_3:any = import4.interpolate(1,'',this.context.$implicit.email,'');
    if (import4.checkBinding(throwOnChange,this._expr_3,currVal_3)) {
      this.renderer.setText(this._text_12,currVal_3);
      this._expr_3 = currVal_3;
    }
    const currVal_4:any = import4.interpolate(1,'',this.context.$implicit.role,'');
    if (import4.checkBinding(throwOnChange,this._expr_4,currVal_4)) {
      this.renderer.setText(this._text_15,currVal_4);
      this._expr_4 = currVal_4;
    }
    this.detectViewChildrenChanges(throwOnChange);
  }
}
function viewFactory_UsersComponent2(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import2.AppElement):import1.AppView<any> {
  return new _View_UsersComponent2(viewUtils,parentInjector,declarationEl);
}
class _View_UsersComponent3 extends import1.AppView<any> {
  _el_0:any;
  _text_1:any;
  _el_2:any;
  _RouterLink_2_3:import18.RouterLink;
  _text_3:any;
  _el_4:any;
  _text_5:any;
  _text_6:any;
  _el_7:any;
  _RouterLink_7_3:import18.RouterLink;
  _text_8:any;
  _el_9:any;
  _text_10:any;
  _text_11:any;
  _el_12:any;
  _text_13:any;
  _el_14:any;
  _text_15:any;
  _text_16:any;
  _text_17:any;
  _map_0:any;
  /*private*/ _expr_1:any;
  _arr_0:any;
  /*private*/ _expr_2:any;
  _map_1:any;
  /*private*/ _expr_4:any;
  _arr_1:any;
  /*private*/ _expr_5:any;
  constructor(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import2.AppElement) {
    super(_View_UsersComponent3,renderType_UsersComponent,import6.ViewType.EMBEDDED,viewUtils,parentInjector,declarationEl,import7.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import2.AppElement {
    this._el_0 = this.renderer.createElement((null as any),'td',(null as any));
    this.renderer.setElementAttribute(this._el_0,'class','btn-group');
    this.renderer.setElementAttribute(this._el_0,'style','vertical-align: middle; border: none;');
    this._text_1 = this.renderer.createText(this._el_0,'\n                            ',(null as any));
    this._el_2 = this.renderer.createElement(this._el_0,'button',(null as any));
    this.renderer.setElementAttribute(this._el_2,'class','btn btn-info btn-xs');
    this.renderer.setElementAttribute(this._el_2,'title','Edit profile');
    this._RouterLink_2_3 = new import18.RouterLink(this.parent.parent.parent.parentInjector.get(import19.Router),this.parent.parent.parent.parentInjector.get(import20.ActivatedRoute),this.parent.parent.parent.parentInjector.get(import21.LocationStrategy));
    this._text_3 = this.renderer.createText(this._el_2,'\n                                ',(null as any));
    this._el_4 = this.renderer.createElement(this._el_2,'span',(null as any));
    this.renderer.setElementAttribute(this._el_4,'class','glyphicon glyphicon-pencil');
    this._text_5 = this.renderer.createText(this._el_2,' Profile\n                            ',(null as any));
    this._text_6 = this.renderer.createText(this._el_0,'\n                            ',(null as any));
    this._el_7 = this.renderer.createElement(this._el_0,'button',(null as any));
    this.renderer.setElementAttribute(this._el_7,'class','btn btn-primary btn-xs');
    this.renderer.setElementAttribute(this._el_7,'title','Change password');
    this._RouterLink_7_3 = new import18.RouterLink(this.parent.parent.parent.parentInjector.get(import19.Router),this.parent.parent.parent.parentInjector.get(import20.ActivatedRoute),this.parent.parent.parent.parentInjector.get(import21.LocationStrategy));
    this._text_8 = this.renderer.createText(this._el_7,'\n                                ',(null as any));
    this._el_9 = this.renderer.createElement(this._el_7,'span',(null as any));
    this.renderer.setElementAttribute(this._el_9,'class','glyphicon glyphicon-pencil');
    this._text_10 = this.renderer.createText(this._el_7,' Password\n                            ',(null as any));
    this._text_11 = this.renderer.createText(this._el_0,'\n                            ',(null as any));
    this._el_12 = this.renderer.createElement(this._el_0,'button',(null as any));
    this.renderer.setElementAttribute(this._el_12,'class','btn btn-danger btn-xs');
    this.renderer.setElementAttribute(this._el_12,'title','Delete');
    this._text_13 = this.renderer.createText(this._el_12,'\n                                ',(null as any));
    this._el_14 = this.renderer.createElement(this._el_12,'span',(null as any));
    this.renderer.setElementAttribute(this._el_14,'class','glyphicon glyphicon-trash');
    this._text_15 = this.renderer.createText(this._el_14,' User',(null as any));
    this._text_16 = this.renderer.createText(this._el_12,'\n                            ',(null as any));
    this._text_17 = this.renderer.createText(this._el_0,'\n                        ',(null as any));
    var disposable_0:Function = this.renderer.listen(this._el_2,'click',this.eventHandler(this._handle_click_2_0.bind(this)));
    this._map_0 = import4.pureProxy1((p0:any):{[key: string]:any} => {
      return {userId: p0};
    });
    this._expr_1 = import7.UNINITIALIZED;
    this._arr_0 = import4.pureProxy1((p0:any):any[] => {
      return [p0];
    });
    this._expr_2 = import7.UNINITIALIZED;
    var disposable_1:Function = this.renderer.listen(this._el_7,'click',this.eventHandler(this._handle_click_7_0.bind(this)));
    this._map_1 = import4.pureProxy1((p0:any):{[key: string]:any} => {
      return {userId: p0};
    });
    this._expr_4 = import7.UNINITIALIZED;
    this._arr_1 = import4.pureProxy1((p0:any):any[] => {
      return [p0];
    });
    this._expr_5 = import7.UNINITIALIZED;
    var disposable_2:Function = this.renderer.listen(this._el_12,'click',this.eventHandler(this._handle_click_12_0.bind(this)));
    this.init([].concat([this._el_0]),[
      this._el_0,
      this._text_1,
      this._el_2,
      this._text_3,
      this._el_4,
      this._text_5,
      this._text_6,
      this._el_7,
      this._text_8,
      this._el_9,
      this._text_10,
      this._text_11,
      this._el_12,
      this._text_13,
      this._el_14,
      this._text_15,
      this._text_16,
      this._text_17
    ]
    ,[
      disposable_0,
      disposable_1,
      disposable_2
    ]
    ,[]);
    return (null as any);
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import18.RouterLink) && ((2 <= requestNodeIndex) && (requestNodeIndex <= 5)))) { return this._RouterLink_2_3; }
    if (((token === import18.RouterLink) && ((7 <= requestNodeIndex) && (requestNodeIndex <= 10)))) { return this._RouterLink_7_3; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    const currVal_1:any = this._map_0(this.parent.context.$implicit.userId);
    if (import4.checkBinding(throwOnChange,this._expr_1,currVal_1)) {
      this._RouterLink_2_3.queryParams = currVal_1;
      this._expr_1 = currVal_1;
    }
    const currVal_2:any = this._arr_0('/#users/edit');
    if (import4.checkBinding(throwOnChange,this._expr_2,currVal_2)) {
      this._RouterLink_2_3.routerLink = currVal_2;
      this._expr_2 = currVal_2;
    }
    const currVal_4:any = this._map_1(this.parent.context.$implicit.userId);
    if (import4.checkBinding(throwOnChange,this._expr_4,currVal_4)) {
      this._RouterLink_7_3.queryParams = currVal_4;
      this._expr_4 = currVal_4;
    }
    const currVal_5:any = this._arr_1('/#users/editpass');
    if (import4.checkBinding(throwOnChange,this._expr_5,currVal_5)) {
      this._RouterLink_7_3.routerLink = currVal_5;
      this._expr_5 = currVal_5;
    }
    this.detectContentChildrenChanges(throwOnChange);
    this.detectViewChildrenChanges(throwOnChange);
  }
  private _handle_click_2_0($event:any):boolean {
    this.markPathToRootAsCheckOnce();
    const pd_0:any = ((<any>this._RouterLink_2_3.onClick($event.button,$event.ctrlKey,$event.metaKey)) !== false);
    return (true && pd_0);
  }
  private _handle_click_7_0($event:any):boolean {
    this.markPathToRootAsCheckOnce();
    const pd_0:any = ((<any>this._RouterLink_7_3.onClick($event.button,$event.ctrlKey,$event.metaKey)) !== false);
    return (true && pd_0);
  }
  private _handle_click_12_0($event:any):boolean {
    this.markPathToRootAsCheckOnce();
    const pd_0:any = ((<any>this.parent.parent.parent.context.onDelete(this.parent.context.$implicit)) !== false);
    return (true && pd_0);
  }
}
function viewFactory_UsersComponent3(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import2.AppElement):import1.AppView<any> {
  return new _View_UsersComponent3(viewUtils,parentInjector,declarationEl);
}
class _View_UsersComponent4 extends import1.AppView<any> {
  _el_0:any;
  _text_1:any;
  _el_2:any;
  _RouterLink_2_3:import18.RouterLink;
  _text_3:any;
  _el_4:any;
  _text_5:any;
  _text_6:any;
  _el_7:any;
  _RouterLink_7_3:import18.RouterLink;
  _text_8:any;
  _el_9:any;
  _text_10:any;
  _text_11:any;
  _map_0:any;
  /*private*/ _expr_1:any;
  _arr_0:any;
  /*private*/ _expr_2:any;
  _map_1:any;
  /*private*/ _expr_4:any;
  _arr_1:any;
  /*private*/ _expr_5:any;
  constructor(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import2.AppElement) {
    super(_View_UsersComponent4,renderType_UsersComponent,import6.ViewType.EMBEDDED,viewUtils,parentInjector,declarationEl,import7.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import2.AppElement {
    this._el_0 = this.renderer.createElement((null as any),'td',(null as any));
    this.renderer.setElementAttribute(this._el_0,'class','btn-group');
    this.renderer.setElementAttribute(this._el_0,'style','vertical-align: middle; border: none;');
    this._text_1 = this.renderer.createText(this._el_0,'\n                            ',(null as any));
    this._el_2 = this.renderer.createElement(this._el_0,'button',(null as any));
    this.renderer.setElementAttribute(this._el_2,'class','btn btn-info btn-xs');
    this.renderer.setElementAttribute(this._el_2,'title','Edit profile');
    this._RouterLink_2_3 = new import18.RouterLink(this.parent.parent.parent.parentInjector.get(import19.Router),this.parent.parent.parent.parentInjector.get(import20.ActivatedRoute),this.parent.parent.parent.parentInjector.get(import21.LocationStrategy));
    this._text_3 = this.renderer.createText(this._el_2,'\n                                ',(null as any));
    this._el_4 = this.renderer.createElement(this._el_2,'span',(null as any));
    this.renderer.setElementAttribute(this._el_4,'class','glyphicon glyphicon-pencil');
    this._text_5 = this.renderer.createText(this._el_2,' Profile\n                            ',(null as any));
    this._text_6 = this.renderer.createText(this._el_0,'\n                            ',(null as any));
    this._el_7 = this.renderer.createElement(this._el_0,'button',(null as any));
    this.renderer.setElementAttribute(this._el_7,'class','btn btn-primary btn-xs');
    this.renderer.setElementAttribute(this._el_7,'title','Change password');
    this._RouterLink_7_3 = new import18.RouterLink(this.parent.parent.parent.parentInjector.get(import19.Router),this.parent.parent.parent.parentInjector.get(import20.ActivatedRoute),this.parent.parent.parent.parentInjector.get(import21.LocationStrategy));
    this._text_8 = this.renderer.createText(this._el_7,'\n                                ',(null as any));
    this._el_9 = this.renderer.createElement(this._el_7,'span',(null as any));
    this.renderer.setElementAttribute(this._el_9,'class','glyphicon glyphicon-pencil');
    this._text_10 = this.renderer.createText(this._el_7,' Password\n                            ',(null as any));
    this._text_11 = this.renderer.createText(this._el_0,'\n                        ',(null as any));
    var disposable_0:Function = this.renderer.listen(this._el_2,'click',this.eventHandler(this._handle_click_2_0.bind(this)));
    this._map_0 = import4.pureProxy1((p0:any):{[key: string]:any} => {
      return {userId: p0};
    });
    this._expr_1 = import7.UNINITIALIZED;
    this._arr_0 = import4.pureProxy1((p0:any):any[] => {
      return [p0];
    });
    this._expr_2 = import7.UNINITIALIZED;
    var disposable_1:Function = this.renderer.listen(this._el_7,'click',this.eventHandler(this._handle_click_7_0.bind(this)));
    this._map_1 = import4.pureProxy1((p0:any):{[key: string]:any} => {
      return {userId: p0};
    });
    this._expr_4 = import7.UNINITIALIZED;
    this._arr_1 = import4.pureProxy1((p0:any):any[] => {
      return [p0];
    });
    this._expr_5 = import7.UNINITIALIZED;
    this.init([].concat([this._el_0]),[
      this._el_0,
      this._text_1,
      this._el_2,
      this._text_3,
      this._el_4,
      this._text_5,
      this._text_6,
      this._el_7,
      this._text_8,
      this._el_9,
      this._text_10,
      this._text_11
    ]
    ,[
      disposable_0,
      disposable_1
    ]
    ,[]);
    return (null as any);
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import18.RouterLink) && ((2 <= requestNodeIndex) && (requestNodeIndex <= 5)))) { return this._RouterLink_2_3; }
    if (((token === import18.RouterLink) && ((7 <= requestNodeIndex) && (requestNodeIndex <= 10)))) { return this._RouterLink_7_3; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    const currVal_1:any = this._map_0(this.parent.context.$implicit.userId);
    if (import4.checkBinding(throwOnChange,this._expr_1,currVal_1)) {
      this._RouterLink_2_3.queryParams = currVal_1;
      this._expr_1 = currVal_1;
    }
    const currVal_2:any = this._arr_0('/#profile/edit');
    if (import4.checkBinding(throwOnChange,this._expr_2,currVal_2)) {
      this._RouterLink_2_3.routerLink = currVal_2;
      this._expr_2 = currVal_2;
    }
    const currVal_4:any = this._map_1(this.parent.context.$implicit.userId);
    if (import4.checkBinding(throwOnChange,this._expr_4,currVal_4)) {
      this._RouterLink_7_3.queryParams = currVal_4;
      this._expr_4 = currVal_4;
    }
    const currVal_5:any = this._arr_1('/#profile/editpass');
    if (import4.checkBinding(throwOnChange,this._expr_5,currVal_5)) {
      this._RouterLink_7_3.routerLink = currVal_5;
      this._expr_5 = currVal_5;
    }
    this.detectContentChildrenChanges(throwOnChange);
    this.detectViewChildrenChanges(throwOnChange);
  }
  private _handle_click_2_0($event:any):boolean {
    this.markPathToRootAsCheckOnce();
    const pd_0:any = ((<any>this._RouterLink_2_3.onClick($event.button,$event.ctrlKey,$event.metaKey)) !== false);
    return (true && pd_0);
  }
  private _handle_click_7_0($event:any):boolean {
    this.markPathToRootAsCheckOnce();
    const pd_0:any = ((<any>this._RouterLink_7_3.onClick($event.button,$event.ctrlKey,$event.metaKey)) !== false);
    return (true && pd_0);
  }
}
function viewFactory_UsersComponent4(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import2.AppElement):import1.AppView<any> {
  return new _View_UsersComponent4(viewUtils,parentInjector,declarationEl);
}