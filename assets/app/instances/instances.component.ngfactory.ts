/**
 * This file is generated by the Angular 2 template compiler.
 * Do not edit.
 */
 /* tslint:disable */

import * as import0 from '@angular/core/src/render/api';
import * as import1 from '@angular/core/src/linker/view';
import * as import2 from '@angular/core/src/linker/element';
import * as import3 from './instances.component';
import * as import4 from './instance.service';
import * as import5 from '@angular/core/src/linker/view_utils';
import * as import6 from '@angular/core/src/di/injector';
import * as import7 from '@angular/core/src/linker/view_type';
import * as import8 from '@angular/core/src/change_detection/change_detection';
import * as import9 from '@angular/http/src/http';
import * as import10 from '../messages/successes/success.service';
import * as import11 from '../messages/errors/error.service';
import * as import12 from '@angular/core/src/metadata/view';
import * as import13 from '@angular/core/src/linker/component_factory';
import * as import14 from '@angular/router/src/directives/router_link';
import * as import15 from './instance-list/instance-list.component';
import * as import16 from '@angular/router/src/router';
import * as import17 from '@angular/router/src/router_state';
import * as import18 from '@angular/common/src/location/location_strategy';
import * as import19 from './instance-list/instance-list.component.ngfactory';
var renderType_InstancesComponent_Host:import0.RenderComponentType = (null as any);
class _View_InstancesComponent_Host0 extends import1.AppView<any> {
  _el_0:any;
  /*private*/ _appEl_0:import2.AppElement;
  _InstancesComponent_0_4:import3.InstancesComponent;
  __InstanceService_0_5:import4.InstanceService;
  constructor(viewUtils:import5.ViewUtils,parentInjector:import6.Injector,declarationEl:import2.AppElement) {
    super(_View_InstancesComponent_Host0,renderType_InstancesComponent_Host,import7.ViewType.HOST,viewUtils,parentInjector,declarationEl,import8.ChangeDetectorStatus.CheckAlways);
  }
  get _InstanceService_0_5():import4.InstanceService {
    if ((this.__InstanceService_0_5 == (null as any))) { (this.__InstanceService_0_5 = new import4.InstanceService(this.parentInjector.get(import9.Http),this.parentInjector.get(import10.SuccessService),this.parentInjector.get(import11.ErrorService))); }
    return this.__InstanceService_0_5;
  }
  createInternal(rootSelector:string):import2.AppElement {
    this._el_0 = this.selectOrCreateHostElement('app-instances',rootSelector,(null as any));
    this._appEl_0 = new import2.AppElement(0,(null as any),this,this._el_0);
    var compView_0:any = viewFactory_InstancesComponent0(this.viewUtils,this.injector(0),this._appEl_0);
    this._InstancesComponent_0_4 = new import3.InstancesComponent();
    this._appEl_0.initComponent(this._InstancesComponent_0_4,[],compView_0);
    compView_0.create(this._InstancesComponent_0_4,this.projectableNodes,(null as any));
    this.init([].concat([this._el_0]),[this._el_0],[],[]);
    return this._appEl_0;
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import3.InstancesComponent) && (0 === requestNodeIndex))) { return this._InstancesComponent_0_4; }
    if (((token === import4.InstanceService) && (0 === requestNodeIndex))) { return this._InstanceService_0_5; }
    return notFoundResult;
  }
}
function viewFactory_InstancesComponent_Host0(viewUtils:import5.ViewUtils,parentInjector:import6.Injector,declarationEl:import2.AppElement):import1.AppView<any> {
  if ((renderType_InstancesComponent_Host === (null as any))) { (renderType_InstancesComponent_Host = viewUtils.createRenderComponentType('',0,import12.ViewEncapsulation.None,[],{})); }
  return new _View_InstancesComponent_Host0(viewUtils,parentInjector,declarationEl);
}
export const InstancesComponentNgFactory:import13.ComponentFactory<import3.InstancesComponent> = new import13.ComponentFactory<import3.InstancesComponent>('app-instances',viewFactory_InstancesComponent_Host0,import3.InstancesComponent);
const styles_InstancesComponent:any[] = [];
var renderType_InstancesComponent:import0.RenderComponentType = (null as any);
class _View_InstancesComponent0 extends import1.AppView<import3.InstancesComponent> {
  _el_0:any;
  _text_1:any;
  _el_2:any;
  _RouterLink_2_3:import14.RouterLink;
  _text_3:any;
  _text_4:any;
  _text_5:any;
  _el_6:any;
  _text_7:any;
  _el_8:any;
  /*private*/ _appEl_8:import2.AppElement;
  _InstanceListComponent_8_4:import15.InstanceListComponent;
  _text_9:any;
  _arr_0:any;
  /*private*/ _expr_1:any;
  constructor(viewUtils:import5.ViewUtils,parentInjector:import6.Injector,declarationEl:import2.AppElement) {
    super(_View_InstancesComponent0,renderType_InstancesComponent,import7.ViewType.COMPONENT,viewUtils,parentInjector,declarationEl,import8.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import2.AppElement {
    const parentRenderNode:any = this.renderer.createViewRoot(this.declarationAppElement.nativeElement);
    this._el_0 = this.renderer.createElement(parentRenderNode,'div',(null as any));
    this.renderer.setElementAttribute(this._el_0,'class','row');
    this._text_1 = this.renderer.createText(this._el_0,'\n    ',(null as any));
    this._el_2 = this.renderer.createElement(this._el_0,'button',(null as any));
    this.renderer.setElementAttribute(this._el_2,'class','btn btn-success btn-s');
    this._RouterLink_2_3 = new import14.RouterLink(this.parentInjector.get(import16.Router),this.parentInjector.get(import17.ActivatedRoute),this.parentInjector.get(import18.LocationStrategy));
    this._text_3 = this.renderer.createText(this._el_2,'Add instance',(null as any));
    this._text_4 = this.renderer.createText(this._el_0,'\n',(null as any));
    this._text_5 = this.renderer.createText(parentRenderNode,'\n',(null as any));
    this._el_6 = this.renderer.createElement(parentRenderNode,'div',(null as any));
    this.renderer.setElementAttribute(this._el_6,'class','row');
    this._text_7 = this.renderer.createText(this._el_6,'\n    ',(null as any));
    this._el_8 = this.renderer.createElement(this._el_6,'app-instance-list',(null as any));
    this._appEl_8 = new import2.AppElement(8,6,this,this._el_8);
    var compView_8:any = import19.viewFactory_InstanceListComponent0(this.viewUtils,this.injector(8),this._appEl_8);
    this._InstanceListComponent_8_4 = new import15.InstanceListComponent(this.parentInjector.get(import4.InstanceService));
    this._appEl_8.initComponent(this._InstanceListComponent_8_4,[],compView_8);
    compView_8.create(this._InstanceListComponent_8_4,[],(null as any));
    this._text_9 = this.renderer.createText(this._el_6,'\n',(null as any));
    var disposable_0:Function = this.renderer.listen(this._el_2,'click',this.eventHandler(this._handle_click_2_0.bind(this)));
    this._arr_0 = import5.pureProxy1((p0:any):any[] => {
      return [p0];
    });
    this._expr_1 = import8.UNINITIALIZED;
    this.init([],[
      this._el_0,
      this._text_1,
      this._el_2,
      this._text_3,
      this._text_4,
      this._text_5,
      this._el_6,
      this._text_7,
      this._el_8,
      this._text_9
    ]
    ,[disposable_0],[]);
    return (null as any);
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import14.RouterLink) && ((2 <= requestNodeIndex) && (requestNodeIndex <= 3)))) { return this._RouterLink_2_3; }
    if (((token === import15.InstanceListComponent) && (8 === requestNodeIndex))) { return this._InstanceListComponent_8_4; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    const currVal_1:any = this._arr_0('/#instances/create');
    if (import5.checkBinding(throwOnChange,this._expr_1,currVal_1)) {
      this._RouterLink_2_3.routerLink = currVal_1;
      this._expr_1 = currVal_1;
    }
    if (((this.numberOfChecks === 0) && !throwOnChange)) { this._InstanceListComponent_8_4.ngOnInit(); }
    this.detectContentChildrenChanges(throwOnChange);
    this.detectViewChildrenChanges(throwOnChange);
  }
  private _handle_click_2_0($event:any):boolean {
    this.markPathToRootAsCheckOnce();
    const pd_0:any = ((<any>this._RouterLink_2_3.onClick($event.button,$event.ctrlKey,$event.metaKey)) !== false);
    return (true && pd_0);
  }
}
export function viewFactory_InstancesComponent0(viewUtils:import5.ViewUtils,parentInjector:import6.Injector,declarationEl:import2.AppElement):import1.AppView<import3.InstancesComponent> {
  if ((renderType_InstancesComponent === (null as any))) { (renderType_InstancesComponent = viewUtils.createRenderComponentType('C:/Users/Silvia/OneDrive/Bakalárka/Project/assets/app/instances/instances.component.html',0,import12.ViewEncapsulation.None,styles_InstancesComponent,{})); }
  return new _View_InstancesComponent0(viewUtils,parentInjector,declarationEl);
}