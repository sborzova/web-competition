webpackJsonp([18],{1103:function(t,e,n){"use strict";function o(t,e,n){return null===S&&(S=t.createRenderComponentType("",0,_.ViewEncapsulation.None,[],{})),new b(t,e,n)}function r(t,e,n){return null===x&&(x=t.createRenderComponentType("C:/Users/Silvia/OneDrive/Bakalárka/Project/assets/app/validator-info/validator-info.component.html",0,_.ViewEncapsulation.None,I,{})),new E(t,e,n)}function i(t,e,n){return new O(t,e,n)}var s=n(89),a=n(62),u=n(959),l=n(63),c=n(51),h=n(50),p=n(882),d=n(52),_=n(72),f=n(71),m=n(224),v=n(158),g=n(903),w=n(113);n.d(e,"a",function(){return C});var y=this&&this.__extends||function(t,e){function n(){this.constructor=t}for(var o in e)e.hasOwnProperty(o)&&(t[o]=e[o]);t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)},S=null,b=function(t){function e(n,o,r){t.call(this,e,S,c.ViewType.HOST,n,o,r,h.ChangeDetectorStatus.CheckAlways)}return y(e,t),e.prototype.createInternal=function(t){this._el_0=this.selectOrCreateHostElement("app-solution-validator-info",t,null),this._appEl_0=new a.AppElement(0,null,this,this._el_0);var e=r(this.viewUtils,this.injector(0),this._appEl_0);return this._ValidatorInfoComponent_0_4=new u.a(this.parentInjector.get(p.a),this.parentInjector.get(d.ActivatedRoute)),this._appEl_0.initComponent(this._ValidatorInfoComponent_0_4,[],e),e.create(this._ValidatorInfoComponent_0_4,this.projectableNodes,null),this.init([].concat([this._el_0]),[this._el_0],[],[]),this._appEl_0},e.prototype.injectorGetInternal=function(t,e,n){return t===u.a&&0===e?this._ValidatorInfoComponent_0_4:n},e.prototype.detectChangesInternal=function(t){0!==this.numberOfChecks||t||this._ValidatorInfoComponent_0_4.ngOnInit(),this.detectContentChildrenChanges(t),this.detectViewChildrenChanges(t)},e.prototype.destroyInternal=function(){this._ValidatorInfoComponent_0_4.ngOnDestroy()},e}(s.AppView),C=new f.ComponentFactory("app-solution-validator-info",o,u.a),I=[],x=null,E=function(t){function e(n,o,r){t.call(this,e,x,c.ViewType.COMPONENT,n,o,r,h.ChangeDetectorStatus.CheckAlways)}return y(e,t),e.prototype.createInternal=function(t){var e=this.renderer.createViewRoot(this.declarationAppElement.nativeElement);return this._el_0=this.renderer.createElement(e,"div",null),this.renderer.setElementAttribute(this._el_0,"class","container"),this.renderer.setElementAttribute(this._el_0,"style","margin-top: 3%"),this._text_1=this.renderer.createText(this._el_0,"\n    ",null),this._el_2=this.renderer.createElement(this._el_0,"div",null),this.renderer.setElementAttribute(this._el_2,"class","row"),this._text_3=this.renderer.createText(this._el_2,"\n        ",null),this._el_4=this.renderer.createElement(this._el_2,"div",null),this.renderer.setElementAttribute(this._el_4,"class","col-xs-12 col-md-8 col-md-offset-2"),this._text_5=this.renderer.createText(this._el_4,"\n            ",null),this._anchor_6=this.renderer.createTemplateAnchor(this._el_4,null),this._appEl_6=new a.AppElement(6,4,this,this._anchor_6),this._TemplateRef_6_5=new v.TemplateRef_(this._appEl_6,i),this._NgIf_6_6=new m.NgIf(this._appEl_6.vcRef,this._TemplateRef_6_5),this._text_7=this.renderer.createText(this._el_4,"\n        ",null),this._text_8=this.renderer.createText(this._el_2,"\n    ",null),this._text_9=this.renderer.createText(this._el_0,"\n",null),this._text_10=this.renderer.createText(e,"\n",null),this._expr_0=h.UNINITIALIZED,this.init([],[this._el_0,this._text_1,this._el_2,this._text_3,this._el_4,this._text_5,this._anchor_6,this._text_7,this._text_8,this._text_9,this._text_10],[],[]),null},e.prototype.injectorGetInternal=function(t,e,n){return t===v.TemplateRef&&6===e?this._TemplateRef_6_5:t===m.NgIf&&6===e?this._NgIf_6_6:n},e.prototype.detectChangesInternal=function(t){var e=this.context.solution;l.checkBinding(t,this._expr_0,e)&&(this._NgIf_6_6.ngIf=e,this._expr_0=e),this.detectContentChildrenChanges(t),this.detectViewChildrenChanges(t)},e}(s.AppView),O=function(t){function e(n,o,r){t.call(this,e,x,c.ViewType.EMBEDDED,n,o,r,h.ChangeDetectorStatus.CheckAlways)}return y(e,t),e.prototype.createInternal=function(t){return this._el_0=this.renderer.createElement(null,"div",null),this._text_1=this.renderer.createText(this._el_0,"\n                ",null),this._el_2=this.renderer.createElement(this._el_0,"div",null),this._text_3=this.renderer.createText(this._el_0,"\n            ",null),this._pipe_escapeHtml_0=new g.a,this._expr_0=h.UNINITIALIZED,this.init([].concat([this._el_0]),[this._el_0,this._text_1,this._el_2,this._text_3],[],[]),null},e.prototype.detectChangesInternal=function(t){var e=new h.ValueUnwrapper;this.detectContentChildrenChanges(t),e.reset();var n=e.unwrap(this._pipe_escapeHtml_0.transform(this.parent.context.solution.info));(e.hasWrappedValue||l.checkBinding(t,this._expr_0,n))&&(this.renderer.setElementProperty(this._el_2,"innerHTML",this.viewUtils.sanitizer.sanitize(w.SecurityContext.HTML,n)),this._expr_0=n),this.detectViewChildrenChanges(t)},e}(s.AppView)},1104:function(t,e,n){"use strict";var o=n(2),r=n(112),i=n(897),s=n(959),a=n(1105),u=n(882);n.d(e,"a",function(){return l});var l=function(){function t(){}return t.decorators=[{type:o.NgModule,args:[{declarations:[s.a],imports:[r.CommonModule,i.a,a.a],providers:[u.a]}]}],t.ctorParameters=[],t}()},1105:function(t,e,n){"use strict";var o=n(223),r=n(959);n.d(e,"a",function(){return s});var i=[{path:"",children:[{path:"",component:r.a}]}],s=o.RouterModule.forChild(i)},843:function(t,e,n){"use strict";var o=n(161),r=n(1104),i=n(226),s=n(897),a=n(163),u=n(91),l=n(882),c=n(1103),h=n(160),p=n(959),d=n(162),_=n(872),f=n(92);n.d(e,"ValidatorInfoModuleNgFactory",function(){return g});var m=this&&this.__extends||function(t,e){function n(){this.constructor=t}for(var o in e)e.hasOwnProperty(o)&&(t[o]=e[o]);t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)},v=function(t){function e(e){t.call(this,e,[c.a],[])}return m(e,t),Object.defineProperty(e.prototype,"_NgLocalization_4",{get:function(){return null==this.__NgLocalization_4&&(this.__NgLocalization_4=new u.NgLocaleLocalization(this.parent.get(h.LOCALE_ID))),this.__NgLocalization_4},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"_ROUTES_5",{get:function(){return null==this.__ROUTES_5&&(this.__ROUTES_5=[[{path:"",children:[{path:"",component:p.a}]}]]),this.__ROUTES_5},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"_SolutionService_6",{get:function(){return null==this.__SolutionService_6&&(this.__SolutionService_6=new l.a(this.parent.get(d.Http),this.parent.get(_.a))),this.__SolutionService_6},enumerable:!0,configurable:!0}),e.prototype.createInternal=function(){return this._CommonModule_0=new i.CommonModule,this._EscapeHtmlModule_1=new s.a,this._RouterModule_2=new a.RouterModule(this.parent.get(a.ROUTER_FORROOT_GUARD,null)),this._ValidatorInfoModule_3=new r.a,this._ValidatorInfoModule_3},e.prototype.getInternal=function(t,e){return t===i.CommonModule?this._CommonModule_0:t===s.a?this._EscapeHtmlModule_1:t===a.RouterModule?this._RouterModule_2:t===r.a?this._ValidatorInfoModule_3:t===u.NgLocalization?this._NgLocalization_4:t===f.ROUTES?this._ROUTES_5:t===l.a?this._SolutionService_6:e},e.prototype.destroyInternal=function(){},e}(o.NgModuleInjector),g=new o.NgModuleFactory(v,r.a)},872:function(t,e,n){"use strict";var o=n(2),r=n(886);n.d(e,"a",function(){return i});var i=function(){function t(){this.messageOccurred=new o.EventEmitter}return t.prototype.showMessage=function(t,e){var n=new r.a(t,e);this.messageOccurred.emit(n)},t}()},882:function(t,e,n){"use strict";var o=n(2),r=n(225),i=n(327),s=(n.n(i),n(914)),a=n(921),u=n(872),l=n(912),c=n(919),h=n(920);n.d(e,"a",function(){return p});var p=function(){function t(t,e){this.http=t,this.flashMessageService=e,this.successValidation=new o.EventEmitter,this.worseSolutions=new o.EventEmitter,this.resultsInstance=new o.EventEmitter,this.resultsAuthor=new o.EventEmitter,this.resultsAuthorTechnique=new o.EventEmitter,this.successValidationDeleteSource=new i.Subject,this.worseSolutionsDeleteSource=new i.Subject,this.successValidationDelete$=this.successValidationDeleteSource.asObservable(),this.worseSolutionsDeleteSource$=this.worseSolutionsDeleteSource.asObservable();var r=n(883);this.hostUrl=r.hostUrl}return t.prototype.validate=function(t){var e=this;return this.xmlHttp=new XMLHttpRequest,i.Observable.create(function(n){new r.Headers({"Content-Type":"multipart/form-data"});e.xmlHttp.onreadystatechange=function(){4===e.xmlHttp.readyState&&(200===e.xmlHttp.status?(n.next(e.xmlHttp.response),n.complete()):n.error(e.xmlHttp.response))},e.xmlHttp.open("POST",e.hostUrl.concat("validator/")),e.xmlHttp.setRequestHeader("enctype","multipart/form-data"),e.xmlHttp.send(t)})},t.prototype.saveSolution=function(t,e,n){var o=this;e||n?this.savePaper(new a.a(e,n)).subscribe(function(e){t.paperId=e,o.saveSolutionWithoutFile(t).subscribe(function(t){o.saveFileSolution(t).subscribe(function(){o.flashMessageService.showMessage("Solution was uploaded.","alert-success"),o.successValidationHideResult()},function(t){return console.error(JSON.parse(t))})},function(t){return console.error(t)})}):this.saveSolutionWithoutFile(t).subscribe(function(t){o.saveFileSolution(t).subscribe(function(){o.flashMessageService.showMessage("Solution was uploaded.","alert-success"),o.successValidationHideResult()},function(t){return console.error(JSON.parse(t))})},function(t){return console.error(t)})},t.prototype.getWorseSolutions=function(t){var e=JSON.stringify(t),n=sessionStorage.getItem("token")?"?token="+sessionStorage.getItem("token"):"",o=new r.Headers({"Content-Type":"application/json"});return this.http.post(this.hostUrl.concat("worseSolutions")+n,e,{headers:o}).map(function(t){for(var e=t.json().obj,n=[],o=0,r=e;o<r.length;o++){var i=r[o];n.push(new s.a(i.unassigned,i.total,i.sc,i.time,i.room,i.distr,i.technique,i.info,i.postDate,i.data,i.instance,i.paper,i._id,(!1)))}return n})["catch"](function(t){return i.Observable["throw"](t.json())})},t.prototype.savePaper=function(t){var e=JSON.stringify(t),n=new r.Headers({"Content-Type":"application/json"});return this.http.post(this.hostUrl.concat("paper"),e,{headers:n}).map(function(t){return t.json().obj.data._id})["catch"](function(t){return i.Observable["throw"](t.json())})},t.prototype.saveSolutionWithoutFile=function(t){var e=JSON.stringify(t),n=sessionStorage.getItem("token")?"?token="+sessionStorage.getItem("token"):"",o=new r.Headers({"Content-Type":"application/json"});return this.http.post(this.hostUrl.concat("solution")+n,e,{headers:o}).map(function(t){return t.json().obj.data._id})["catch"](function(t){return i.Observable["throw"](t.json())})},t.prototype.getSolution=function(t){return this.http.get(this.hostUrl.concat("solution/"+t)).map(function(t){var e=t.json().obj;return new s.a(e.unassigned,e.total,e.sc,e.time,e.room,e.distr,e.technique,e.info,e.postDate,e.data,e.instance,e.paper,e._id,(!1))})["catch"](function(t){return i.Observable["throw"](t)})},t.prototype.getSolutionsByLoggedUser=function(){var t=sessionStorage.getItem("token")?"?token="+sessionStorage.getItem("token"):"",e=new r.Headers({"Content-Type":"application/json"});return this.http.get(this.hostUrl.concat("solutionsByLoggedUser")+t,{headers:e}).map(function(t){for(var e=t.json().obj,n=[],o=0,r=e;o<r.length;o++){var i=r[o];n.push(new s.a(i.unassigned,i.total,i.sc,i.time,i.room,i.distr,i.technique,i.info,i.postDate,i.data,i.instance,i.paper?new a.a(i.paper.citation,i.paper.url,i.paper._id):null,i._id,(!1)))}return n})["catch"](function(t){return i.Observable["throw"](t)})},t.prototype.getSolutionsByInstance=function(t){return this.http.get(this.hostUrl.concat("solutionsByInstance/")+t).map(function(t){for(var e=t.json().obj,n=[],o=0,r=e;o<r.length;o++){var i=r[o];n.push(new l.a(new h.a(i.instance.name,i.instance._id,i.instance.order),i.unassigned,i.total,i.sc,i.time,i.room,i.distr,i.technique,i.info,i.postDate,i.data,i.paper,new c.a(i.user.firstName.concat(" ").concat(i.user.lastName),i.user._id),i._id))}return n})["catch"](function(t){return i.Observable["throw"](t)})},t.prototype.getSolutionsByUser=function(t){return this.http.get(this.hostUrl.concat("solutionsByUser/")+t).map(function(t){for(var e=t.json().obj,n=[],o=0,r=e;o<r.length;o++){var i=r[o];n.push(new l.a(new h.a(i.instance.name,i.instance._id,i.instance.order),i.unassigned,i.total,i.sc,i.time,i.room,i.distr,i.technique,i.info,i.postDate,i.data,i.paper,new c.a(i.user.firstName.concat(" ").concat(i.user.lastName),i.user._id),i._id))}return n})["catch"](function(t){return i.Observable["throw"](t)})},t.prototype.deletePaperFromSolution=function(t){var e=new r.Headers({"Content-Type":"application/json"});return this.http.patch(this.hostUrl.concat("solutionRemovePaper/")+t.solutionId,{headers:e}).map(function(t){return t.json()})["catch"](function(t){return i.Observable["throw"](t)})},t.prototype.successValidationShowResult=function(t,e){this.setSolutionFile(e),this.successValidation.emit(t)},t.prototype.successValidationHideResult=function(){this.successValidationDeleteSource.next()},t.prototype.worseSolutionsShow=function(t){this.worseSolutions.emit(t)},t.prototype.worseSolutionsHide=function(){this.worseSolutionsDeleteSource.next()},t.prototype.resultsInstanceShow=function(t){this.resultsInstance.emit(t)},t.prototype.resultsAuthorShow=function(t){this.resultsAuthor.emit(t)},t.prototype.resultsAuthorTechniqueShow=function(t){this.resultsAuthorTechnique.emit(t)},t.prototype.setSolutionFile=function(t){this.solutionFile=t},t.prototype.saveFileSolution=function(t){var e=this;return this.xmlHttp=new XMLHttpRequest,i.Observable.create(function(n){new r.Headers({"Content-Type":"multipart/form-data"});e.xmlHttp.onreadystatechange=function(){4===e.xmlHttp.readyState&&(200===e.xmlHttp.status?(n.next(e.xmlHttp.response),n.complete()):n.error(e.xmlHttp.response))};var o=new FormData;o.append("solution",e.solutionFile),e.xmlHttp.open("POST",e.hostUrl.concat("solutionFile/")+t),e.xmlHttp.setRequestHeader("enctype","multipart/form-data"),e.xmlHttp.send(o)})},t.prototype.updateSolutionPaper=function(t){var e=JSON.stringify(t),n=(sessionStorage.getItem("token")?"?token="+sessionStorage.getItem("token"):"",new r.Headers({"Content-Type":"application/json"}));return this.http.patch(this.hostUrl.concat("solutionAddPaper/")+t.solutionId,e,{headers:n}).map(function(t){return t.json()})["catch"](function(t){return i.Observable["throw"](t)})},t.prototype.deleteSolution=function(t){return this.http["delete"](this.hostUrl.concat("solution/")+t.solutionId).map(function(t){return t.json()})["catch"](function(t){return i.Observable["throw"](t.json())})},t.prototype.deleteSolutions=function(t){for(var e=0,n=t;e<n.length;e++){var o=n[e];this.deleteSolution(o).subscribe(function(){},function(t){return console.error(t)})}(t.length=1)?this.flashMessageService.showMessage("Solution was deleted.","alert-success"):this.flashMessageService.showMessage("Solutions were deleted.","alert-success")},t.decorators=[{type:o.Injectable}],t.ctorParameters=[{type:r.Http},{type:u.a}],t}()},883:function(t,e,n){"use strict";var o=n(223),r=n(887);n.d(e,"hostUrl",function(){return s}),n.d(e,"routing",function(){return a});var i=[{path:"",redirectTo:"#home",pathMatch:"full"},{path:"#home",component:r.a},{path:"#users",loadChildren:"../app/users/users.module#UsersModule"},{path:"#results",loadChildren:"../app/results/results.module#ResultsModule"},{path:"#validator",loadChildren:"../app/validation/validation.module#ValidationModule"},{path:"#mysolutions",loadChildren:"../app/user-solutions/user-solutions.module#UserSolutionsModule"},{path:"#signin",loadChildren:"../app/auth/signin/signin.module#SigninModule"},{path:"#signup",loadChildren:"../app/auth/signup/signup.module#SignupModule"},{path:"#instances",loadChildren:"../app/instances/instance.module#InstanceModule"},{path:"#profile",loadChildren:"../app/profile/profile.module#ProfileModule"},{path:"#preferences",loadChildren:"../app/preference/preference.module#PreferenceModule"},{path:"#solution/validatorinfo",loadChildren:"../app/validator-info/validator-info.module#ValidatorInfoModule"}],s="https://bakalar.herokuapp.com/",a=o.RouterModule.forRoot(i)},886:function(t,e,n){"use strict";n.d(e,"a",function(){return o});var o=function(){function t(t,e){this.text=t,this.cssClass=e}return t}()},887:function(t,e,n){"use strict";var o=n(2);n.d(e,"a",function(){return r});var r=function(){function t(){}return t.decorators=[{type:o.Component,args:[{selector:"app-home",templateUrl:"./home.component.html"}]}],t.ctorParameters=[],t}()},897:function(t,e,n){"use strict";var o=n(2),r=n(903);n.d(e,"a",function(){return i});var i=function(){function t(){}return t.decorators=[{type:o.NgModule,args:[{declarations:[r.a],exports:[r.a]}]}],t.ctorParameters=[],t}()},903:function(t,e,n){"use strict";var o=n(2);n.d(e,"a",function(){return r});var r=function(){function t(){}return t.prototype.transform=function(t){return null==t?console.error("Value can not be null"):t.replace(/(?:\r\n|\r|\n)/g,"<br />").replace(/(?:\t)/g,"&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;")},t.decorators=[{type:o.Pipe,args:[{name:"escapeHtml",pure:!1}]}],t.ctorParameters=[],t}()},912:function(t,e,n){"use strict";n.d(e,"a",function(){return o});var o=function(){function t(t,e,n,o,r,i,s,a,u,l,c,h,p,d){this.instance=t,this.unassigned=e,this.total=n,this.sc=o,this.time=r,this.room=i,this.distr=s,this.technique=a,this.info=u,this.postDate=l,this.data=c,this.paper=h,this.author=p,this.solutionId=d}return t}()},914:function(t,e,n){"use strict";n.d(e,"a",function(){return o});var o=function(){function t(t,e,n,o,r,i,s,a,u,l,c,h,p,d){this.unassigned=t,this.total=e,this.sc=n,this.time=o,this.room=r,this.distr=i,this.technique=s,this.info=a,this.postDate=u,this.data=l,this.instance=c,this.paper=h,this.solutionId=p,this.isChecked=d}return t}()},919:function(t,e,n){"use strict";n.d(e,"a",function(){return o});var o=function(){function t(t,e){this.name=t,this.authorId=e}return t}()},920:function(t,e,n){"use strict";n.d(e,"a",function(){return o});var o=function(){function t(t,e,n){this.name=t,this.instanceId=e,this.order=n}return t}()},921:function(t,e,n){"use strict";n.d(e,"a",function(){return o});var o=function(){function t(t,e,n){this.citation=t,this.url=e,this.paperId=n}return t}()},959:function(t,e,n){"use strict";var o=n(2),r=n(223),i=n(882);n.d(e,"a",function(){return s});var s=function(){function t(t,e){this.solutionService=t,this.activatedRoute=e}return t.prototype.ngOnInit=function(){var t=this;this.subscription=this.activatedRoute.queryParams.subscribe(function(e){var n=e.solutionId;t.solutionService.getSolution(n).subscribe(function(e){t.solution=e},function(t){return console.error(t)})})},t.prototype.ngOnDestroy=function(){this.subscription.unsubscribe()},t.decorators=[{type:o.Component,args:[{selector:"app-solution-validator-info",templateUrl:"validator-info.component.html"}]}],t.ctorParameters=[{type:i.a},{type:r.ActivatedRoute}],t}()}});