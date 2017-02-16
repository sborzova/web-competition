/**
 * This file is generated by the Angular 2 template compiler.
 * Do not edit.
 */
 /* tslint:disable */

import * as import0 from '@angular/core/src/render/api';
import * as import1 from '@angular/core/src/linker/view';
import * as import2 from '@angular/core/src/linker/element';
import * as import3 from './signin.component';
import * as import4 from '@angular/core/src/linker/view_utils';
import * as import5 from '@angular/core/src/di/injector';
import * as import6 from '@angular/core/src/linker/view_type';
import * as import7 from '@angular/core/src/change_detection/change_detection';
import * as import8 from '../auth.service';
import * as import9 from '@angular/router/src/router';
import * as import10 from '../../messages/errors/error.service';
import * as import11 from '../../messages/successes/success.service';
import * as import12 from '@angular/core/src/metadata/view';
import * as import13 from '@angular/core/src/linker/component_factory';
import * as import14 from '@angular/forms/src/directives/reactive_directives/form_group_directive';
import * as import15 from '@angular/forms/src/directives/ng_control_status';
import * as import16 from '@angular/common/src/directives/ng_class';
import * as import17 from '@angular/forms/src/directives/default_value_accessor';
import * as import18 from '@angular/forms/src/directives/reactive_directives/form_control_directive';
import * as import19 from '@angular/common/src/directives/ng_if';
import * as import20 from '@angular/core/src/change_detection/differs/iterable_differs';
import * as import21 from '@angular/core/src/change_detection/differs/keyvalue_differs';
import * as import22 from '@angular/core/src/linker/element_ref';
import * as import23 from '@angular/core/src/linker/template_ref';
import * as import24 from '@angular/forms/src/directives/control_value_accessor';
import * as import25 from '@angular/forms/src/directives/ng_control';
import * as import26 from '@angular/forms/src/directives/control_container';
var renderType_SigninComponent_Host:import0.RenderComponentType = (null as any);
class _View_SigninComponent_Host0 extends import1.AppView<any> {
  _el_0:any;
  /*private*/ _appEl_0:import2.AppElement;
  _SigninComponent_0_4:import3.SigninComponent;
  constructor(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import2.AppElement) {
    super(_View_SigninComponent_Host0,renderType_SigninComponent_Host,import6.ViewType.HOST,viewUtils,parentInjector,declarationEl,import7.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import2.AppElement {
    this._el_0 = this.selectOrCreateHostElement('app-signin',rootSelector,(null as any));
    this._appEl_0 = new import2.AppElement(0,(null as any),this,this._el_0);
    var compView_0:any = viewFactory_SigninComponent0(this.viewUtils,this.injector(0),this._appEl_0);
    this._SigninComponent_0_4 = new import3.SigninComponent(this.parentInjector.get(import8.AuthService),this.parentInjector.get(import9.Router),this.parentInjector.get(import10.ErrorService),this.parentInjector.get(import11.SuccessService));
    this._appEl_0.initComponent(this._SigninComponent_0_4,[],compView_0);
    compView_0.create(this._SigninComponent_0_4,this.projectableNodes,(null as any));
    this.init([].concat([this._el_0]),[this._el_0],[],[]);
    return this._appEl_0;
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import3.SigninComponent) && (0 === requestNodeIndex))) { return this._SigninComponent_0_4; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    if (((this.numberOfChecks === 0) && !throwOnChange)) { this._SigninComponent_0_4.ngOnInit(); }
    this.detectContentChildrenChanges(throwOnChange);
    this.detectViewChildrenChanges(throwOnChange);
  }
}
function viewFactory_SigninComponent_Host0(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import2.AppElement):import1.AppView<any> {
  if ((renderType_SigninComponent_Host === (null as any))) { (renderType_SigninComponent_Host = viewUtils.createRenderComponentType('',0,import12.ViewEncapsulation.None,[],{})); }
  return new _View_SigninComponent_Host0(viewUtils,parentInjector,declarationEl);
}
export const SigninComponentNgFactory:import13.ComponentFactory<import3.SigninComponent> = new import13.ComponentFactory<import3.SigninComponent>('app-signin',viewFactory_SigninComponent_Host0,import3.SigninComponent);
const styles_SigninComponent:any[] = [];
var renderType_SigninComponent:import0.RenderComponentType = (null as any);
class _View_SigninComponent0 extends import1.AppView<import3.SigninComponent> {
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
  _el_12:any;
  _FormGroupDirective_12_3:import14.FormGroupDirective;
  _ControlContainer_12_4:any;
  _NgControlStatusGroup_12_5:import15.NgControlStatusGroup;
  _text_13:any;
  _el_14:any;
  _NgClass_14_3:import16.NgClass;
  _text_15:any;
  _el_16:any;
  _text_17:any;
  _text_18:any;
  _el_19:any;
  _DefaultValueAccessor_19_3:import17.DefaultValueAccessor;
  _NG_VALUE_ACCESSOR_19_4:any[];
  _FormControlDirective_19_5:import18.FormControlDirective;
  _NgControl_19_6:any;
  _NgControlStatus_19_7:import15.NgControlStatus;
  _text_20:any;
  _anchor_21:any;
  /*private*/ _appEl_21:import2.AppElement;
  _TemplateRef_21_5:any;
  _NgIf_21_6:import19.NgIf;
  _text_22:any;
  _text_23:any;
  _el_24:any;
  _NgClass_24_3:import16.NgClass;
  _text_25:any;
  _el_26:any;
  _text_27:any;
  _text_28:any;
  _el_29:any;
  _DefaultValueAccessor_29_3:import17.DefaultValueAccessor;
  _NG_VALUE_ACCESSOR_29_4:any[];
  _FormControlDirective_29_5:import18.FormControlDirective;
  _NgControl_29_6:any;
  _NgControlStatus_29_7:import15.NgControlStatus;
  _text_30:any;
  _anchor_31:any;
  /*private*/ _appEl_31:import2.AppElement;
  _TemplateRef_31_5:any;
  _NgIf_31_6:import19.NgIf;
  _text_32:any;
  _text_33:any;
  _el_34:any;
  _text_35:any;
  _el_36:any;
  _text_37:any;
  _text_38:any;
  _text_39:any;
  _text_40:any;
  _el_41:any;
  _text_42:any;
  _el_43:any;
  _text_44:any;
  _text_45:any;
  _text_46:any;
  _text_47:any;
  _text_48:any;
  /*private*/ _expr_3:any;
  /*private*/ _expr_4:any;
  /*private*/ _expr_5:any;
  /*private*/ _expr_6:any;
  /*private*/ _expr_7:any;
  /*private*/ _expr_8:any;
  /*private*/ _expr_9:any;
  /*private*/ _expr_10:any;
  _map_0:any;
  /*private*/ _expr_11:any;
  /*private*/ _expr_14:any;
  /*private*/ _expr_15:any;
  /*private*/ _expr_16:any;
  /*private*/ _expr_17:any;
  /*private*/ _expr_18:any;
  /*private*/ _expr_19:any;
  /*private*/ _expr_20:any;
  /*private*/ _expr_21:any;
  /*private*/ _expr_22:any;
  _map_1:any;
  /*private*/ _expr_23:any;
  /*private*/ _expr_26:any;
  /*private*/ _expr_27:any;
  /*private*/ _expr_28:any;
  /*private*/ _expr_29:any;
  /*private*/ _expr_30:any;
  /*private*/ _expr_31:any;
  /*private*/ _expr_32:any;
  /*private*/ _expr_33:any;
  constructor(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import2.AppElement) {
    super(_View_SigninComponent0,renderType_SigninComponent,import6.ViewType.COMPONENT,viewUtils,parentInjector,declarationEl,import7.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import2.AppElement {
    const parentRenderNode:any = this.renderer.createViewRoot(this.declarationAppElement.nativeElement);
    this._el_0 = this.renderer.createElement(parentRenderNode,'div',(null as any));
    this.renderer.setElementAttribute(this._el_0,'class','row');
    this._text_1 = this.renderer.createText(this._el_0,'\n    ',(null as any));
    this._el_2 = this.renderer.createElement(this._el_0,'div',(null as any));
    this.renderer.setElementAttribute(this._el_2,'class','col-sm-6 col-sm-offset-3');
    this._text_3 = this.renderer.createText(this._el_2,'\n        ',(null as any));
    this._el_4 = this.renderer.createElement(this._el_2,'div',(null as any));
    this.renderer.setElementAttribute(this._el_4,'class','jumbotron');
    this._text_5 = this.renderer.createText(this._el_4,'\n            ',(null as any));
    this._el_6 = this.renderer.createElement(this._el_4,'div',(null as any));
    this.renderer.setElementAttribute(this._el_6,'class','text-center');
    this._text_7 = this.renderer.createText(this._el_6,'\n                ',(null as any));
    this._el_8 = this.renderer.createElement(this._el_6,'h2',(null as any));
    this._text_9 = this.renderer.createText(this._el_8,'Login',(null as any));
    this._text_10 = this.renderer.createText(this._el_6,'\n            ',(null as any));
    this._text_11 = this.renderer.createText(this._el_4,'\n            ',(null as any));
    this._el_12 = this.renderer.createElement(this._el_4,'form',(null as any));
    this._FormGroupDirective_12_3 = new import14.FormGroupDirective((null as any),(null as any));
    this._ControlContainer_12_4 = this._FormGroupDirective_12_3;
    this._NgControlStatusGroup_12_5 = new import15.NgControlStatusGroup(this._ControlContainer_12_4);
    this._text_13 = this.renderer.createText(this._el_12,'\n                ',(null as any));
    this._el_14 = this.renderer.createElement(this._el_12,'div',(null as any));
    this.renderer.setElementAttribute(this._el_14,'class','form-group');
    this._NgClass_14_3 = new import16.NgClass(this.parentInjector.get(import20.IterableDiffers),this.parentInjector.get(import21.KeyValueDiffers),new import22.ElementRef(this._el_14),this.renderer);
    this._text_15 = this.renderer.createText(this._el_14,'\n                    ',(null as any));
    this._el_16 = this.renderer.createElement(this._el_14,'label',(null as any));
    this.renderer.setElementAttribute(this._el_16,'for','email');
    this._text_17 = this.renderer.createText(this._el_16,'Email address',(null as any));
    this._text_18 = this.renderer.createText(this._el_14,'\n                    ',(null as any));
    this._el_19 = this.renderer.createElement(this._el_14,'input',(null as any));
    this.renderer.setElementAttribute(this._el_19,'class','form-control');
    this.renderer.setElementAttribute(this._el_19,'id','email');
    this.renderer.setElementAttribute(this._el_19,'type','email');
    this._DefaultValueAccessor_19_3 = new import17.DefaultValueAccessor(this.renderer,new import22.ElementRef(this._el_19));
    this._NG_VALUE_ACCESSOR_19_4 = [this._DefaultValueAccessor_19_3];
    this._FormControlDirective_19_5 = new import18.FormControlDirective((null as any),(null as any),this._NG_VALUE_ACCESSOR_19_4);
    this._NgControl_19_6 = this._FormControlDirective_19_5;
    this._NgControlStatus_19_7 = new import15.NgControlStatus(this._NgControl_19_6);
    this._text_20 = this.renderer.createText(this._el_14,'\n                    ',(null as any));
    this._anchor_21 = this.renderer.createTemplateAnchor(this._el_14,(null as any));
    this._appEl_21 = new import2.AppElement(21,14,this,this._anchor_21);
    this._TemplateRef_21_5 = new import23.TemplateRef_(this._appEl_21,viewFactory_SigninComponent1);
    this._NgIf_21_6 = new import19.NgIf(this._appEl_21.vcRef,this._TemplateRef_21_5);
    this._text_22 = this.renderer.createText(this._el_14,'\n                ',(null as any));
    this._text_23 = this.renderer.createText(this._el_12,'\n                ',(null as any));
    this._el_24 = this.renderer.createElement(this._el_12,'div',(null as any));
    this.renderer.setElementAttribute(this._el_24,'class','form-group');
    this._NgClass_24_3 = new import16.NgClass(this.parentInjector.get(import20.IterableDiffers),this.parentInjector.get(import21.KeyValueDiffers),new import22.ElementRef(this._el_24),this.renderer);
    this._text_25 = this.renderer.createText(this._el_24,'\n                    ',(null as any));
    this._el_26 = this.renderer.createElement(this._el_24,'label',(null as any));
    this.renderer.setElementAttribute(this._el_26,'for','password');
    this._text_27 = this.renderer.createText(this._el_26,'Password',(null as any));
    this._text_28 = this.renderer.createText(this._el_24,'\n                    ',(null as any));
    this._el_29 = this.renderer.createElement(this._el_24,'input',(null as any));
    this.renderer.setElementAttribute(this._el_29,'class','form-control');
    this.renderer.setElementAttribute(this._el_29,'id','password');
    this.renderer.setElementAttribute(this._el_29,'type','password');
    this._DefaultValueAccessor_29_3 = new import17.DefaultValueAccessor(this.renderer,new import22.ElementRef(this._el_29));
    this._NG_VALUE_ACCESSOR_29_4 = [this._DefaultValueAccessor_29_3];
    this._FormControlDirective_29_5 = new import18.FormControlDirective((null as any),(null as any),this._NG_VALUE_ACCESSOR_29_4);
    this._NgControl_29_6 = this._FormControlDirective_29_5;
    this._NgControlStatus_29_7 = new import15.NgControlStatus(this._NgControl_29_6);
    this._text_30 = this.renderer.createText(this._el_24,'\n                    ',(null as any));
    this._anchor_31 = this.renderer.createTemplateAnchor(this._el_24,(null as any));
    this._appEl_31 = new import2.AppElement(31,24,this,this._anchor_31);
    this._TemplateRef_31_5 = new import23.TemplateRef_(this._appEl_31,viewFactory_SigninComponent2);
    this._NgIf_31_6 = new import19.NgIf(this._appEl_31.vcRef,this._TemplateRef_31_5);
    this._text_32 = this.renderer.createText(this._el_24,'\n                ',(null as any));
    this._text_33 = this.renderer.createText(this._el_12,'\n                ',(null as any));
    this._el_34 = this.renderer.createElement(this._el_12,'div',(null as any));
    this.renderer.setElementAttribute(this._el_34,'align','right');
    this._text_35 = this.renderer.createText(this._el_34,'\n                    ',(null as any));
    this._el_36 = this.renderer.createElement(this._el_34,'button',(null as any));
    this.renderer.setElementAttribute(this._el_36,'class','btn btn-primary');
    this.renderer.setElementAttribute(this._el_36,'type','submit');
    this._text_37 = this.renderer.createText(this._el_36,'\n                        Log in\n                    ',(null as any));
    this._text_38 = this.renderer.createText(this._el_34,'\n                ',(null as any));
    this._text_39 = this.renderer.createText(this._el_12,'\n            ',(null as any));
    this._text_40 = this.renderer.createText(this._el_4,'\n            ',(null as any));
    this._el_41 = this.renderer.createElement(this._el_4,'div',(null as any));
    this._text_42 = this.renderer.createText(this._el_41,'\n                ',(null as any));
    this._el_43 = this.renderer.createElement(this._el_41,'a',(null as any));
    this._text_44 = this.renderer.createText(this._el_43,'Forgot your password?',(null as any));
    this._text_45 = this.renderer.createText(this._el_41,'\n            ',(null as any));
    this._text_46 = this.renderer.createText(this._el_4,'\n        ',(null as any));
    this._text_47 = this.renderer.createText(this._el_2,'\n    ',(null as any));
    this._text_48 = this.renderer.createText(this._el_0,'\n',(null as any));
    var disposable_0:Function = this.renderer.listen(this._el_12,'ngSubmit',this.eventHandler(this._handle_ngSubmit_12_0.bind(this)));
    var disposable_1:Function = this.renderer.listen(this._el_12,'submit',this.eventHandler(this._handle_submit_12_1.bind(this)));
    var disposable_2:Function = this.renderer.listen(this._el_12,'reset',this.eventHandler(this._handle_reset_12_2.bind(this)));
    this._expr_3 = import7.UNINITIALIZED;
    const subscription_0:any = this._FormGroupDirective_12_3.ngSubmit.subscribe(this.eventHandler(this._handle_ngSubmit_12_0.bind(this)));
    this._expr_4 = import7.UNINITIALIZED;
    this._expr_5 = import7.UNINITIALIZED;
    this._expr_6 = import7.UNINITIALIZED;
    this._expr_7 = import7.UNINITIALIZED;
    this._expr_8 = import7.UNINITIALIZED;
    this._expr_9 = import7.UNINITIALIZED;
    this._expr_10 = import7.UNINITIALIZED;
    this._map_0 = import4.pureProxy1((p0:any):{[key: string]:any} => {
      return {'has-error': p0};
    });
    this._expr_11 = import7.UNINITIALIZED;
    var disposable_3:Function = this.renderer.listen(this._el_19,'input',this.eventHandler(this._handle_input_19_0.bind(this)));
    var disposable_4:Function = this.renderer.listen(this._el_19,'blur',this.eventHandler(this._handle_blur_19_1.bind(this)));
    this._expr_14 = import7.UNINITIALIZED;
    this._expr_15 = import7.UNINITIALIZED;
    this._expr_16 = import7.UNINITIALIZED;
    this._expr_17 = import7.UNINITIALIZED;
    this._expr_18 = import7.UNINITIALIZED;
    this._expr_19 = import7.UNINITIALIZED;
    this._expr_20 = import7.UNINITIALIZED;
    this._expr_21 = import7.UNINITIALIZED;
    this._expr_22 = import7.UNINITIALIZED;
    this._map_1 = import4.pureProxy1((p0:any):{[key: string]:any} => {
      return {'has-error': p0};
    });
    this._expr_23 = import7.UNINITIALIZED;
    var disposable_5:Function = this.renderer.listen(this._el_29,'input',this.eventHandler(this._handle_input_29_0.bind(this)));
    var disposable_6:Function = this.renderer.listen(this._el_29,'blur',this.eventHandler(this._handle_blur_29_1.bind(this)));
    this._expr_26 = import7.UNINITIALIZED;
    this._expr_27 = import7.UNINITIALIZED;
    this._expr_28 = import7.UNINITIALIZED;
    this._expr_29 = import7.UNINITIALIZED;
    this._expr_30 = import7.UNINITIALIZED;
    this._expr_31 = import7.UNINITIALIZED;
    this._expr_32 = import7.UNINITIALIZED;
    this._expr_33 = import7.UNINITIALIZED;
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
      this._el_12,
      this._text_13,
      this._el_14,
      this._text_15,
      this._el_16,
      this._text_17,
      this._text_18,
      this._el_19,
      this._text_20,
      this._anchor_21,
      this._text_22,
      this._text_23,
      this._el_24,
      this._text_25,
      this._el_26,
      this._text_27,
      this._text_28,
      this._el_29,
      this._text_30,
      this._anchor_31,
      this._text_32,
      this._text_33,
      this._el_34,
      this._text_35,
      this._el_36,
      this._text_37,
      this._text_38,
      this._text_39,
      this._text_40,
      this._el_41,
      this._text_42,
      this._el_43,
      this._text_44,
      this._text_45,
      this._text_46,
      this._text_47,
      this._text_48
    ]
    ,[
      disposable_0,
      disposable_1,
      disposable_2,
      disposable_3,
      disposable_4,
      disposable_5,
      disposable_6
    ]
    ,[subscription_0]);
    return (null as any);
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import17.DefaultValueAccessor) && (19 === requestNodeIndex))) { return this._DefaultValueAccessor_19_3; }
    if (((token === import24.NG_VALUE_ACCESSOR) && (19 === requestNodeIndex))) { return this._NG_VALUE_ACCESSOR_19_4; }
    if (((token === import18.FormControlDirective) && (19 === requestNodeIndex))) { return this._FormControlDirective_19_5; }
    if (((token === import25.NgControl) && (19 === requestNodeIndex))) { return this._NgControl_19_6; }
    if (((token === import15.NgControlStatus) && (19 === requestNodeIndex))) { return this._NgControlStatus_19_7; }
    if (((token === import23.TemplateRef) && (21 === requestNodeIndex))) { return this._TemplateRef_21_5; }
    if (((token === import19.NgIf) && (21 === requestNodeIndex))) { return this._NgIf_21_6; }
    if (((token === import16.NgClass) && ((14 <= requestNodeIndex) && (requestNodeIndex <= 22)))) { return this._NgClass_14_3; }
    if (((token === import17.DefaultValueAccessor) && (29 === requestNodeIndex))) { return this._DefaultValueAccessor_29_3; }
    if (((token === import24.NG_VALUE_ACCESSOR) && (29 === requestNodeIndex))) { return this._NG_VALUE_ACCESSOR_29_4; }
    if (((token === import18.FormControlDirective) && (29 === requestNodeIndex))) { return this._FormControlDirective_29_5; }
    if (((token === import25.NgControl) && (29 === requestNodeIndex))) { return this._NgControl_29_6; }
    if (((token === import15.NgControlStatus) && (29 === requestNodeIndex))) { return this._NgControlStatus_29_7; }
    if (((token === import23.TemplateRef) && (31 === requestNodeIndex))) { return this._TemplateRef_31_5; }
    if (((token === import19.NgIf) && (31 === requestNodeIndex))) { return this._NgIf_31_6; }
    if (((token === import16.NgClass) && ((24 <= requestNodeIndex) && (requestNodeIndex <= 32)))) { return this._NgClass_24_3; }
    if (((token === import14.FormGroupDirective) && ((12 <= requestNodeIndex) && (requestNodeIndex <= 39)))) { return this._FormGroupDirective_12_3; }
    if (((token === import26.ControlContainer) && ((12 <= requestNodeIndex) && (requestNodeIndex <= 39)))) { return this._ControlContainer_12_4; }
    if (((token === import15.NgControlStatusGroup) && ((12 <= requestNodeIndex) && (requestNodeIndex <= 39)))) { return this._NgControlStatusGroup_12_5; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    var changes:{[key: string]:import7.SimpleChange} = (null as any);
    changes = (null as any);
    const currVal_3:any = this.context.myForm;
    if (import4.checkBinding(throwOnChange,this._expr_3,currVal_3)) {
      this._FormGroupDirective_12_3.form = currVal_3;
      if ((changes === (null as any))) { (changes = {}); }
      changes['form'] = new import7.SimpleChange(this._expr_3,currVal_3);
      this._expr_3 = currVal_3;
    }
    if ((changes !== (null as any))) { this._FormGroupDirective_12_3.ngOnChanges(changes); }
    const currVal_10:any = 'form-group';
    if (import4.checkBinding(throwOnChange,this._expr_10,currVal_10)) {
      this._NgClass_14_3.klass = currVal_10;
      this._expr_10 = currVal_10;
    }
    const currVal_11:any = this._map_0((!this.context.myForm.controls['email'].valid && (this.context.myForm.controls['email'].touched || this.context.isSubmitted())));
    if (import4.checkBinding(throwOnChange,this._expr_11,currVal_11)) {
      this._NgClass_14_3.ngClass = currVal_11;
      this._expr_11 = currVal_11;
    }
    if (!throwOnChange) { this._NgClass_14_3.ngDoCheck(); }
    changes = (null as any);
    const currVal_14:any = this.context.myForm.controls['email'];
    if (import4.checkBinding(throwOnChange,this._expr_14,currVal_14)) {
      this._FormControlDirective_19_5.form = currVal_14;
      if ((changes === (null as any))) { (changes = {}); }
      changes['form'] = new import7.SimpleChange(this._expr_14,currVal_14);
      this._expr_14 = currVal_14;
    }
    if ((changes !== (null as any))) { this._FormControlDirective_19_5.ngOnChanges(changes); }
    const currVal_21:boolean = (!this.context.myForm.controls['email'].valid && (this.context.myForm.controls['email'].touched || this.context.isSubmitted()));
    if (import4.checkBinding(throwOnChange,this._expr_21,currVal_21)) {
      this._NgIf_21_6.ngIf = currVal_21;
      this._expr_21 = currVal_21;
    }
    const currVal_22:any = 'form-group';
    if (import4.checkBinding(throwOnChange,this._expr_22,currVal_22)) {
      this._NgClass_24_3.klass = currVal_22;
      this._expr_22 = currVal_22;
    }
    const currVal_23:any = this._map_1((!this.context.myForm.controls['password'].valid && (this.context.myForm.controls['password'].touched || this.context.isSubmitted())));
    if (import4.checkBinding(throwOnChange,this._expr_23,currVal_23)) {
      this._NgClass_24_3.ngClass = currVal_23;
      this._expr_23 = currVal_23;
    }
    if (!throwOnChange) { this._NgClass_24_3.ngDoCheck(); }
    changes = (null as any);
    const currVal_26:any = this.context.myForm.controls['password'];
    if (import4.checkBinding(throwOnChange,this._expr_26,currVal_26)) {
      this._FormControlDirective_29_5.form = currVal_26;
      if ((changes === (null as any))) { (changes = {}); }
      changes['form'] = new import7.SimpleChange(this._expr_26,currVal_26);
      this._expr_26 = currVal_26;
    }
    if ((changes !== (null as any))) { this._FormControlDirective_29_5.ngOnChanges(changes); }
    const currVal_33:any = (this.context.myForm.controls['password'].hasError('required') && (this.context.myForm.controls['password'].touched || this.context.isSubmitted()));
    if (import4.checkBinding(throwOnChange,this._expr_33,currVal_33)) {
      this._NgIf_31_6.ngIf = currVal_33;
      this._expr_33 = currVal_33;
    }
    this.detectContentChildrenChanges(throwOnChange);
    const currVal_4:any = this._NgControlStatusGroup_12_5.ngClassUntouched;
    if (import4.checkBinding(throwOnChange,this._expr_4,currVal_4)) {
      this.renderer.setElementClass(this._el_12,'ng-untouched',currVal_4);
      this._expr_4 = currVal_4;
    }
    const currVal_5:any = this._NgControlStatusGroup_12_5.ngClassTouched;
    if (import4.checkBinding(throwOnChange,this._expr_5,currVal_5)) {
      this.renderer.setElementClass(this._el_12,'ng-touched',currVal_5);
      this._expr_5 = currVal_5;
    }
    const currVal_6:any = this._NgControlStatusGroup_12_5.ngClassPristine;
    if (import4.checkBinding(throwOnChange,this._expr_6,currVal_6)) {
      this.renderer.setElementClass(this._el_12,'ng-pristine',currVal_6);
      this._expr_6 = currVal_6;
    }
    const currVal_7:any = this._NgControlStatusGroup_12_5.ngClassDirty;
    if (import4.checkBinding(throwOnChange,this._expr_7,currVal_7)) {
      this.renderer.setElementClass(this._el_12,'ng-dirty',currVal_7);
      this._expr_7 = currVal_7;
    }
    const currVal_8:any = this._NgControlStatusGroup_12_5.ngClassValid;
    if (import4.checkBinding(throwOnChange,this._expr_8,currVal_8)) {
      this.renderer.setElementClass(this._el_12,'ng-valid',currVal_8);
      this._expr_8 = currVal_8;
    }
    const currVal_9:any = this._NgControlStatusGroup_12_5.ngClassInvalid;
    if (import4.checkBinding(throwOnChange,this._expr_9,currVal_9)) {
      this.renderer.setElementClass(this._el_12,'ng-invalid',currVal_9);
      this._expr_9 = currVal_9;
    }
    const currVal_15:any = this._NgControlStatus_19_7.ngClassUntouched;
    if (import4.checkBinding(throwOnChange,this._expr_15,currVal_15)) {
      this.renderer.setElementClass(this._el_19,'ng-untouched',currVal_15);
      this._expr_15 = currVal_15;
    }
    const currVal_16:any = this._NgControlStatus_19_7.ngClassTouched;
    if (import4.checkBinding(throwOnChange,this._expr_16,currVal_16)) {
      this.renderer.setElementClass(this._el_19,'ng-touched',currVal_16);
      this._expr_16 = currVal_16;
    }
    const currVal_17:any = this._NgControlStatus_19_7.ngClassPristine;
    if (import4.checkBinding(throwOnChange,this._expr_17,currVal_17)) {
      this.renderer.setElementClass(this._el_19,'ng-pristine',currVal_17);
      this._expr_17 = currVal_17;
    }
    const currVal_18:any = this._NgControlStatus_19_7.ngClassDirty;
    if (import4.checkBinding(throwOnChange,this._expr_18,currVal_18)) {
      this.renderer.setElementClass(this._el_19,'ng-dirty',currVal_18);
      this._expr_18 = currVal_18;
    }
    const currVal_19:any = this._NgControlStatus_19_7.ngClassValid;
    if (import4.checkBinding(throwOnChange,this._expr_19,currVal_19)) {
      this.renderer.setElementClass(this._el_19,'ng-valid',currVal_19);
      this._expr_19 = currVal_19;
    }
    const currVal_20:any = this._NgControlStatus_19_7.ngClassInvalid;
    if (import4.checkBinding(throwOnChange,this._expr_20,currVal_20)) {
      this.renderer.setElementClass(this._el_19,'ng-invalid',currVal_20);
      this._expr_20 = currVal_20;
    }
    const currVal_27:any = this._NgControlStatus_29_7.ngClassUntouched;
    if (import4.checkBinding(throwOnChange,this._expr_27,currVal_27)) {
      this.renderer.setElementClass(this._el_29,'ng-untouched',currVal_27);
      this._expr_27 = currVal_27;
    }
    const currVal_28:any = this._NgControlStatus_29_7.ngClassTouched;
    if (import4.checkBinding(throwOnChange,this._expr_28,currVal_28)) {
      this.renderer.setElementClass(this._el_29,'ng-touched',currVal_28);
      this._expr_28 = currVal_28;
    }
    const currVal_29:any = this._NgControlStatus_29_7.ngClassPristine;
    if (import4.checkBinding(throwOnChange,this._expr_29,currVal_29)) {
      this.renderer.setElementClass(this._el_29,'ng-pristine',currVal_29);
      this._expr_29 = currVal_29;
    }
    const currVal_30:any = this._NgControlStatus_29_7.ngClassDirty;
    if (import4.checkBinding(throwOnChange,this._expr_30,currVal_30)) {
      this.renderer.setElementClass(this._el_29,'ng-dirty',currVal_30);
      this._expr_30 = currVal_30;
    }
    const currVal_31:any = this._NgControlStatus_29_7.ngClassValid;
    if (import4.checkBinding(throwOnChange,this._expr_31,currVal_31)) {
      this.renderer.setElementClass(this._el_29,'ng-valid',currVal_31);
      this._expr_31 = currVal_31;
    }
    const currVal_32:any = this._NgControlStatus_29_7.ngClassInvalid;
    if (import4.checkBinding(throwOnChange,this._expr_32,currVal_32)) {
      this.renderer.setElementClass(this._el_29,'ng-invalid',currVal_32);
      this._expr_32 = currVal_32;
    }
    this.detectViewChildrenChanges(throwOnChange);
  }
  private _handle_ngSubmit_12_0($event:any):boolean {
    this.markPathToRootAsCheckOnce();
    const pd_0:any = ((<any>this.context.onSubmit()) !== false);
    return (true && pd_0);
  }
  private _handle_submit_12_1($event:any):boolean {
    this.markPathToRootAsCheckOnce();
    const pd_0:any = ((<any>this._FormGroupDirective_12_3.onSubmit()) !== false);
    return (true && pd_0);
  }
  private _handle_reset_12_2($event:any):boolean {
    this.markPathToRootAsCheckOnce();
    const pd_0:any = ((<any>this._FormGroupDirective_12_3.onReset()) !== false);
    return (true && pd_0);
  }
  private _handle_input_19_0($event:any):boolean {
    this.markPathToRootAsCheckOnce();
    const pd_0:any = ((<any>this._DefaultValueAccessor_19_3.onChange($event.target.value)) !== false);
    return (true && pd_0);
  }
  private _handle_blur_19_1($event:any):boolean {
    this.markPathToRootAsCheckOnce();
    const pd_0:any = ((<any>this._DefaultValueAccessor_19_3.onTouched()) !== false);
    return (true && pd_0);
  }
  private _handle_input_29_0($event:any):boolean {
    this.markPathToRootAsCheckOnce();
    const pd_0:any = ((<any>this._DefaultValueAccessor_29_3.onChange($event.target.value)) !== false);
    return (true && pd_0);
  }
  private _handle_blur_29_1($event:any):boolean {
    this.markPathToRootAsCheckOnce();
    const pd_0:any = ((<any>this._DefaultValueAccessor_29_3.onTouched()) !== false);
    return (true && pd_0);
  }
}
export function viewFactory_SigninComponent0(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import2.AppElement):import1.AppView<import3.SigninComponent> {
  if ((renderType_SigninComponent === (null as any))) { (renderType_SigninComponent = viewUtils.createRenderComponentType('C:/Users/Silvia/OneDrive/Bakalárka/Project/assets/app/auth/signin/signin.component.html',0,import12.ViewEncapsulation.None,styles_SigninComponent,{})); }
  return new _View_SigninComponent0(viewUtils,parentInjector,declarationEl);
}
class _View_SigninComponent1 extends import1.AppView<any> {
  _el_0:any;
  _text_1:any;
  constructor(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import2.AppElement) {
    super(_View_SigninComponent1,renderType_SigninComponent,import6.ViewType.EMBEDDED,viewUtils,parentInjector,declarationEl,import7.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import2.AppElement {
    this._el_0 = this.renderer.createElement((null as any),'div',(null as any));
    this.renderer.setElementAttribute(this._el_0,'class','field-error');
    this._text_1 = this.renderer.createText(this._el_0,'\n                        Email has to be valid e.g. john@gmail.com.\n                    ',(null as any));
    this.init([].concat([this._el_0]),[
      this._el_0,
      this._text_1
    ]
    ,[],[]);
    return (null as any);
  }
}
function viewFactory_SigninComponent1(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import2.AppElement):import1.AppView<any> {
  return new _View_SigninComponent1(viewUtils,parentInjector,declarationEl);
}
class _View_SigninComponent2 extends import1.AppView<any> {
  _el_0:any;
  _text_1:any;
  constructor(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import2.AppElement) {
    super(_View_SigninComponent2,renderType_SigninComponent,import6.ViewType.EMBEDDED,viewUtils,parentInjector,declarationEl,import7.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import2.AppElement {
    this._el_0 = this.renderer.createElement((null as any),'div',(null as any));
    this.renderer.setElementAttribute(this._el_0,'class','field-error');
    this._text_1 = this.renderer.createText(this._el_0,'\n                        Field is required.\n                    ',(null as any));
    this.init([].concat([this._el_0]),[
      this._el_0,
      this._text_1
    ]
    ,[],[]);
    return (null as any);
  }
}
function viewFactory_SigninComponent2(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import2.AppElement):import1.AppView<any> {
  return new _View_SigninComponent2(viewUtils,parentInjector,declarationEl);
}