/**
 * This file is generated by the Angular 2 template compiler.
 * Do not edit.
 */
 /* tslint:disable */

import * as import0 from '@angular/core/src/render/api';
import * as import1 from '@angular/core/src/linker/view';
import * as import2 from '@angular/core/src/linker/element';
import * as import3 from './validator-info.component';
import * as import4 from '@angular/core/src/linker/view_utils';
import * as import5 from '@angular/core/src/di/injector';
import * as import6 from '@angular/core/src/linker/view_type';
import * as import7 from '@angular/core/src/change_detection/change_detection';
import * as import8 from '../shared/services/solution.service';
import * as import9 from '@angular/router/src/router_state';
import * as import10 from '@angular/core/src/metadata/view';
import * as import11 from '@angular/core/src/linker/component_factory';
import * as import12 from '@angular/common/src/directives/ng_if';
import * as import13 from '@angular/core/src/linker/template_ref';
import * as import14 from '../shared/pipes/escape-html.pipe';
import * as import15 from '@angular/core/src/security';
var renderType_ValidatorInfoComponent_Host:import0.RenderComponentType = (null as any);
class _View_ValidatorInfoComponent_Host0 extends import1.AppView<any> {
  _el_0:any;
  /*private*/ _appEl_0:import2.AppElement;
  _ValidatorInfoComponent_0_4:import3.ValidatorInfoComponent;
  constructor(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import2.AppElement) {
    super(_View_ValidatorInfoComponent_Host0,renderType_ValidatorInfoComponent_Host,import6.ViewType.HOST,viewUtils,parentInjector,declarationEl,import7.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import2.AppElement {
    this._el_0 = this.selectOrCreateHostElement('app-solution-validator-info',rootSelector,(null as any));
    this._appEl_0 = new import2.AppElement(0,(null as any),this,this._el_0);
    var compView_0:any = viewFactory_ValidatorInfoComponent0(this.viewUtils,this.injector(0),this._appEl_0);
    this._ValidatorInfoComponent_0_4 = new import3.ValidatorInfoComponent(this.parentInjector.get(import8.SolutionService),this.parentInjector.get(import9.ActivatedRoute));
    this._appEl_0.initComponent(this._ValidatorInfoComponent_0_4,[],compView_0);
    compView_0.create(this._ValidatorInfoComponent_0_4,this.projectableNodes,(null as any));
    this.init([].concat([this._el_0]),[this._el_0],[],[]);
    return this._appEl_0;
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import3.ValidatorInfoComponent) && (0 === requestNodeIndex))) { return this._ValidatorInfoComponent_0_4; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    if (((this.numberOfChecks === 0) && !throwOnChange)) { this._ValidatorInfoComponent_0_4.ngOnInit(); }
    this.detectContentChildrenChanges(throwOnChange);
    this.detectViewChildrenChanges(throwOnChange);
  }
}
function viewFactory_ValidatorInfoComponent_Host0(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import2.AppElement):import1.AppView<any> {
  if ((renderType_ValidatorInfoComponent_Host === (null as any))) { (renderType_ValidatorInfoComponent_Host = viewUtils.createRenderComponentType('',0,import10.ViewEncapsulation.None,[],{})); }
  return new _View_ValidatorInfoComponent_Host0(viewUtils,parentInjector,declarationEl);
}
export const ValidatorInfoComponentNgFactory:import11.ComponentFactory<import3.ValidatorInfoComponent> = new import11.ComponentFactory<import3.ValidatorInfoComponent>('app-solution-validator-info',viewFactory_ValidatorInfoComponent_Host0,import3.ValidatorInfoComponent);
const styles_ValidatorInfoComponent:any[] = [];
var renderType_ValidatorInfoComponent:import0.RenderComponentType = (null as any);
class _View_ValidatorInfoComponent0 extends import1.AppView<import3.ValidatorInfoComponent> {
  _el_0:any;
  _text_1:any;
  _el_2:any;
  _text_3:any;
  _el_4:any;
  _text_5:any;
  _anchor_6:any;
  /*private*/ _appEl_6:import2.AppElement;
  _TemplateRef_6_5:any;
  _NgIf_6_6:import12.NgIf;
  _text_7:any;
  _text_8:any;
  _text_9:any;
  _text_10:any;
  /*private*/ _expr_0:any;
  constructor(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import2.AppElement) {
    super(_View_ValidatorInfoComponent0,renderType_ValidatorInfoComponent,import6.ViewType.COMPONENT,viewUtils,parentInjector,declarationEl,import7.ChangeDetectorStatus.CheckAlways);
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
    this.renderer.setElementAttribute(this._el_4,'class','col-xs-12 col-md-8 col-md-offset-2');
    this._text_5 = this.renderer.createText(this._el_4,'\n            ',(null as any));
    this._anchor_6 = this.renderer.createTemplateAnchor(this._el_4,(null as any));
    this._appEl_6 = new import2.AppElement(6,4,this,this._anchor_6);
    this._TemplateRef_6_5 = new import13.TemplateRef_(this._appEl_6,viewFactory_ValidatorInfoComponent1);
    this._NgIf_6_6 = new import12.NgIf(this._appEl_6.vcRef,this._TemplateRef_6_5);
    this._text_7 = this.renderer.createText(this._el_4,'\n        ',(null as any));
    this._text_8 = this.renderer.createText(this._el_2,'\n    ',(null as any));
    this._text_9 = this.renderer.createText(this._el_0,'\n',(null as any));
    this._text_10 = this.renderer.createText(parentRenderNode,'\n',(null as any));
    this._expr_0 = import7.UNINITIALIZED;
    this.init([],[
      this._el_0,
      this._text_1,
      this._el_2,
      this._text_3,
      this._el_4,
      this._text_5,
      this._anchor_6,
      this._text_7,
      this._text_8,
      this._text_9,
      this._text_10
    ]
    ,[],[]);
    return (null as any);
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import13.TemplateRef) && (6 === requestNodeIndex))) { return this._TemplateRef_6_5; }
    if (((token === import12.NgIf) && (6 === requestNodeIndex))) { return this._NgIf_6_6; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    const currVal_0:any = this.context.solution;
    if (import4.checkBinding(throwOnChange,this._expr_0,currVal_0)) {
      this._NgIf_6_6.ngIf = currVal_0;
      this._expr_0 = currVal_0;
    }
    this.detectContentChildrenChanges(throwOnChange);
    this.detectViewChildrenChanges(throwOnChange);
  }
}
export function viewFactory_ValidatorInfoComponent0(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import2.AppElement):import1.AppView<import3.ValidatorInfoComponent> {
  if ((renderType_ValidatorInfoComponent === (null as any))) { (renderType_ValidatorInfoComponent = viewUtils.createRenderComponentType('C:/Users/Silvia/OneDrive/Bc/web-competition/assets/app/validator-info/validator-info.component.html',0,import10.ViewEncapsulation.None,styles_ValidatorInfoComponent,{})); }
  return new _View_ValidatorInfoComponent0(viewUtils,parentInjector,declarationEl);
}
class _View_ValidatorInfoComponent1 extends import1.AppView<any> {
  _el_0:any;
  _text_1:any;
  _el_2:any;
  _text_3:any;
  _pipe_escapeHtml_0:import14.EscapeHtmlPipe;
  /*private*/ _expr_0:any;
  constructor(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import2.AppElement) {
    super(_View_ValidatorInfoComponent1,renderType_ValidatorInfoComponent,import6.ViewType.EMBEDDED,viewUtils,parentInjector,declarationEl,import7.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import2.AppElement {
    this._el_0 = this.renderer.createElement((null as any),'div',(null as any));
    this._text_1 = this.renderer.createText(this._el_0,'\n                ',(null as any));
    this._el_2 = this.renderer.createElement(this._el_0,'div',(null as any));
    this._text_3 = this.renderer.createText(this._el_0,'\n            ',(null as any));
    this._pipe_escapeHtml_0 = new import14.EscapeHtmlPipe();
    this._expr_0 = import7.UNINITIALIZED;
    this.init([].concat([this._el_0]),[
      this._el_0,
      this._text_1,
      this._el_2,
      this._text_3
    ]
    ,[],[]);
    return (null as any);
  }
  detectChangesInternal(throwOnChange:boolean):void {
    const valUnwrapper:any = new import7.ValueUnwrapper();
    this.detectContentChildrenChanges(throwOnChange);
    valUnwrapper.reset();
    const currVal_0:any = valUnwrapper.unwrap(this._pipe_escapeHtml_0.transform(this.parent.context.solution.info));
    if ((valUnwrapper.hasWrappedValue || import4.checkBinding(throwOnChange,this._expr_0,currVal_0))) {
      this.renderer.setElementProperty(this._el_2,'innerHTML',this.viewUtils.sanitizer.sanitize(import15.SecurityContext.HTML,currVal_0));
      this._expr_0 = currVal_0;
    }
    this.detectViewChildrenChanges(throwOnChange);
  }
}
function viewFactory_ValidatorInfoComponent1(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import2.AppElement):import1.AppView<any> {
  return new _View_ValidatorInfoComponent1(viewUtils,parentInjector,declarationEl);
}