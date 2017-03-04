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
import * as import8 from './user.service';
import * as import9 from '../flash-message/flash-messages.service';
import * as import10 from '@angular/core/src/metadata/view';
import * as import11 from '@angular/core/src/linker/component_factory';
import * as import12 from '@angular/common/src/directives/ng_if';
import * as import13 from '@angular/core/src/linker/template_ref';
import * as import14 from '@angular/common/src/directives/ng_for';
import * as import15 from '@angular/core/src/change_detection/differs/iterable_differs';
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
    this._UsersComponent_0_4 = new import3.UsersComponent(this.parentInjector.get(import8.UsersService),this.parentInjector.get(import9.FlashMessageService));
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
  if ((renderType_UsersComponent_Host === (null as any))) { (renderType_UsersComponent_Host = viewUtils.createRenderComponentType('',0,import10.ViewEncapsulation.None,[],{})); }
  return new _View_UsersComponent_Host0(viewUtils,parentInjector,declarationEl);
}
export const UsersComponentNgFactory:import11.ComponentFactory<import3.UsersComponent> = new import11.ComponentFactory<import3.UsersComponent>('app-users',viewFactory_UsersComponent_Host0,import3.UsersComponent);
const styles_UsersComponent:any[] = [];
var renderType_UsersComponent:import0.RenderComponentType = (null as any);
class _View_UsersComponent0 extends import1.AppView<import3.UsersComponent> {
  _anchor_0:any;
  /*private*/ _appEl_0:import2.AppElement;
  _TemplateRef_0_5:any;
  _NgIf_0_6:import12.NgIf;
  _text_1:any;
  /*private*/ _expr_0:any;
  constructor(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import2.AppElement) {
    super(_View_UsersComponent0,renderType_UsersComponent,import6.ViewType.COMPONENT,viewUtils,parentInjector,declarationEl,import7.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import2.AppElement {
    const parentRenderNode:any = this.renderer.createViewRoot(this.declarationAppElement.nativeElement);
    this._anchor_0 = this.renderer.createTemplateAnchor(parentRenderNode,(null as any));
    this._appEl_0 = new import2.AppElement(0,(null as any),this,this._anchor_0);
    this._TemplateRef_0_5 = new import13.TemplateRef_(this._appEl_0,viewFactory_UsersComponent1);
    this._NgIf_0_6 = new import12.NgIf(this._appEl_0.vcRef,this._TemplateRef_0_5);
    this._text_1 = this.renderer.createText(parentRenderNode,'\n',(null as any));
    this._expr_0 = import7.UNINITIALIZED;
    this.init([],[
      this._anchor_0,
      this._text_1
    ]
    ,[],[]);
    return (null as any);
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import13.TemplateRef) && (0 === requestNodeIndex))) { return this._TemplateRef_0_5; }
    if (((token === import12.NgIf) && (0 === requestNodeIndex))) { return this._NgIf_0_6; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    const currVal_0:any = this.context.users;
    if (import4.checkBinding(throwOnChange,this._expr_0,currVal_0)) {
      this._NgIf_0_6.ngIf = currVal_0;
      this._expr_0 = currVal_0;
    }
    this.detectContentChildrenChanges(throwOnChange);
    this.detectViewChildrenChanges(throwOnChange);
  }
}
export function viewFactory_UsersComponent0(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import2.AppElement):import1.AppView<import3.UsersComponent> {
  if ((renderType_UsersComponent === (null as any))) { (renderType_UsersComponent = viewUtils.createRenderComponentType('C:/Users/Silvia/OneDrive/Bakalárka/Project/assets/app/users/users.component.html',0,import10.ViewEncapsulation.None,styles_UsersComponent,{})); }
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
  _text_19:any;
  _text_20:any;
  _el_21:any;
  _text_22:any;
  _anchor_23:any;
  /*private*/ _appEl_23:import2.AppElement;
  _TemplateRef_23_5:any;
  _NgFor_23_6:import14.NgFor;
  _text_24:any;
  _text_25:any;
  _text_26:any;
  /*private*/ _expr_0:any;
  constructor(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import2.AppElement) {
    super(_View_UsersComponent1,renderType_UsersComponent,import6.ViewType.EMBEDDED,viewUtils,parentInjector,declarationEl,import7.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import2.AppElement {
    this._el_0 = this.renderer.createElement((null as any),'div',(null as any));
    this.renderer.setElementAttribute(this._el_0,'class','col-md-8 col-md-offset-2');
    this._text_1 = this.renderer.createText(this._el_0,'\n    ',(null as any));
    this._el_2 = this.renderer.createElement(this._el_0,'table',(null as any));
    this.renderer.setElementAttribute(this._el_2,'class','table');
    this._text_3 = this.renderer.createText(this._el_2,'\n        ',(null as any));
    this._el_4 = this.renderer.createElement(this._el_2,'thead',(null as any));
    this._text_5 = this.renderer.createText(this._el_4,'\n        ',(null as any));
    this._el_6 = this.renderer.createElement(this._el_4,'tr',(null as any));
    this._text_7 = this.renderer.createText(this._el_6,'\n            ',(null as any));
    this._el_8 = this.renderer.createElement(this._el_6,'th',(null as any));
    this._text_9 = this.renderer.createText(this._el_6,'\n            ',(null as any));
    this._el_10 = this.renderer.createElement(this._el_6,'th',(null as any));
    this._text_11 = this.renderer.createText(this._el_10,'First name',(null as any));
    this._text_12 = this.renderer.createText(this._el_6,'\n            ',(null as any));
    this._el_13 = this.renderer.createElement(this._el_6,'th',(null as any));
    this._text_14 = this.renderer.createText(this._el_13,'Last name',(null as any));
    this._text_15 = this.renderer.createText(this._el_6,'\n            ',(null as any));
    this._el_16 = this.renderer.createElement(this._el_6,'th',(null as any));
    this._text_17 = this.renderer.createText(this._el_16,'Email address',(null as any));
    this._text_18 = this.renderer.createText(this._el_6,'\n        ',(null as any));
    this._text_19 = this.renderer.createText(this._el_4,'\n        ',(null as any));
    this._text_20 = this.renderer.createText(this._el_2,'\n        ',(null as any));
    this._el_21 = this.renderer.createElement(this._el_2,'tbody',(null as any));
    this._text_22 = this.renderer.createText(this._el_21,'\n        ',(null as any));
    this._anchor_23 = this.renderer.createTemplateAnchor(this._el_21,(null as any));
    this._appEl_23 = new import2.AppElement(23,21,this,this._anchor_23);
    this._TemplateRef_23_5 = new import13.TemplateRef_(this._appEl_23,viewFactory_UsersComponent2);
    this._NgFor_23_6 = new import14.NgFor(this._appEl_23.vcRef,this._TemplateRef_23_5,this.parentInjector.get(import15.IterableDiffers),this.parent.ref);
    this._text_24 = this.renderer.createText(this._el_21,'\n        ',(null as any));
    this._text_25 = this.renderer.createText(this._el_2,'\n    ',(null as any));
    this._text_26 = this.renderer.createText(this._el_0,'\n',(null as any));
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
      this._text_19,
      this._text_20,
      this._el_21,
      this._text_22,
      this._anchor_23,
      this._text_24,
      this._text_25,
      this._text_26
    ]
    ,[],[]);
    return (null as any);
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import13.TemplateRef) && (23 === requestNodeIndex))) { return this._TemplateRef_23_5; }
    if (((token === import14.NgFor) && (23 === requestNodeIndex))) { return this._NgFor_23_6; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    var changes:{[key: string]:import7.SimpleChange} = (null as any);
    changes = (null as any);
    const currVal_0:any = this.parent.context.users;
    if (import4.checkBinding(throwOnChange,this._expr_0,currVal_0)) {
      this._NgFor_23_6.ngForOf = currVal_0;
      if ((changes === (null as any))) { (changes = {}); }
      changes['ngForOf'] = new import7.SimpleChange(this._expr_0,currVal_0);
      this._expr_0 = currVal_0;
    }
    if ((changes !== (null as any))) { this._NgFor_23_6.ngOnChanges(changes); }
    if (!throwOnChange) { this._NgFor_23_6.ngDoCheck(); }
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
  /*private*/ _expr_0:any;
  /*private*/ _expr_1:any;
  /*private*/ _expr_2:any;
  /*private*/ _expr_3:any;
  constructor(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import2.AppElement) {
    super(_View_UsersComponent2,renderType_UsersComponent,import6.ViewType.EMBEDDED,viewUtils,parentInjector,declarationEl,import7.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import2.AppElement {
    this._el_0 = this.renderer.createElement((null as any),'tr',(null as any));
    this._text_1 = this.renderer.createText(this._el_0,'\n            ',(null as any));
    this._el_2 = this.renderer.createElement(this._el_0,'td',(null as any));
    this._text_3 = this.renderer.createText(this._el_2,'',(null as any));
    this._text_4 = this.renderer.createText(this._el_0,'\n            ',(null as any));
    this._el_5 = this.renderer.createElement(this._el_0,'td',(null as any));
    this._text_6 = this.renderer.createText(this._el_5,'',(null as any));
    this._text_7 = this.renderer.createText(this._el_0,'\n            ',(null as any));
    this._el_8 = this.renderer.createElement(this._el_0,'td',(null as any));
    this._text_9 = this.renderer.createText(this._el_8,'',(null as any));
    this._text_10 = this.renderer.createText(this._el_0,'\n            ',(null as any));
    this._el_11 = this.renderer.createElement(this._el_0,'td',(null as any));
    this._text_12 = this.renderer.createText(this._el_11,'',(null as any));
    this._text_13 = this.renderer.createText(this._el_0,'\n            ',(null as any));
    this._el_14 = this.renderer.createElement(this._el_0,'button',(null as any));
    this.renderer.setElementAttribute(this._el_14,'class','btn btn-danger btn-xs');
    this._text_15 = this.renderer.createText(this._el_14,'\n                Delete\n            ',(null as any));
    this._text_16 = this.renderer.createText(this._el_0,'\n        ',(null as any));
    this._expr_0 = import7.UNINITIALIZED;
    this._expr_1 = import7.UNINITIALIZED;
    this._expr_2 = import7.UNINITIALIZED;
    this._expr_3 = import7.UNINITIALIZED;
    var disposable_0:Function = this.renderer.listen(this._el_14,'click',this.eventHandler(this._handle_click_14_0.bind(this)));
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
      this._text_16
    ]
    ,[disposable_0],[]);
    return (null as any);
  }
  detectChangesInternal(throwOnChange:boolean):void {
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
    this.detectViewChildrenChanges(throwOnChange);
  }
  private _handle_click_14_0($event:any):boolean {
    this.markPathToRootAsCheckOnce();
    const pd_0:any = ((<any>this.parent.parent.context.onDelete(this.context.$implicit)) !== false);
    return (true && pd_0);
  }
}
function viewFactory_UsersComponent2(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import2.AppElement):import1.AppView<any> {
  return new _View_UsersComponent2(viewUtils,parentInjector,declarationEl);
}