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
import * as import8 from '@angular/core/src/metadata/view';
import * as import9 from '@angular/core/src/linker/component_factory';
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
    this._PreferenceComponent_0_4 = new import3.PreferenceComponent();
    this._appEl_0.initComponent(this._PreferenceComponent_0_4,[],compView_0);
    compView_0.create(this._PreferenceComponent_0_4,this.projectableNodes,(null as any));
    this.init([].concat([this._el_0]),[this._el_0],[],[]);
    return this._appEl_0;
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import3.PreferenceComponent) && (0 === requestNodeIndex))) { return this._PreferenceComponent_0_4; }
    return notFoundResult;
  }
}
function viewFactory_PreferenceComponent_Host0(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import2.AppElement):import1.AppView<any> {
  if ((renderType_PreferenceComponent_Host === (null as any))) { (renderType_PreferenceComponent_Host = viewUtils.createRenderComponentType('',0,import8.ViewEncapsulation.None,[],{})); }
  return new _View_PreferenceComponent_Host0(viewUtils,parentInjector,declarationEl);
}
export const PreferenceComponentNgFactory:import9.ComponentFactory<import3.PreferenceComponent> = new import9.ComponentFactory<import3.PreferenceComponent>('app-preference',viewFactory_PreferenceComponent_Host0,import3.PreferenceComponent);
const styles_PreferenceComponent:any[] = [];
var renderType_PreferenceComponent:import0.RenderComponentType = (null as any);
class _View_PreferenceComponent0 extends import1.AppView<import3.PreferenceComponent> {
  constructor(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import2.AppElement) {
    super(_View_PreferenceComponent0,renderType_PreferenceComponent,import6.ViewType.COMPONENT,viewUtils,parentInjector,declarationEl,import7.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import2.AppElement {
    const parentRenderNode:any = this.renderer.createViewRoot(this.declarationAppElement.nativeElement);
    this.init([],[],[],[]);
    return (null as any);
  }
}
export function viewFactory_PreferenceComponent0(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import2.AppElement):import1.AppView<import3.PreferenceComponent> {
  if ((renderType_PreferenceComponent === (null as any))) { (renderType_PreferenceComponent = viewUtils.createRenderComponentType('C:/Users/Silvia/OneDrive/Bakalárka/Project/assets/app/preference/preference.component.html',0,import8.ViewEncapsulation.None,styles_PreferenceComponent,{})); }
  return new _View_PreferenceComponent0(viewUtils,parentInjector,declarationEl);
}