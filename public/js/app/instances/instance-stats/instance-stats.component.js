import { Component } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { InstanceService } from "../../shared/instance.service";
export var InstanceStatsComponent = (function () {
    function InstanceStatsComponent(instanceService, activatedRoute) {
        this.instanceService = instanceService;
        this.activatedRoute = activatedRoute;
    }
    InstanceStatsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.subscription = this.activatedRoute.queryParams.subscribe(function (params) {
            var instanceId = params['instanceId'];
            _this.instanceService.getInstance(instanceId)
                .subscribe(function (instance) {
                _this.instance = instance;
            });
        });
    };
    InstanceStatsComponent.prototype.ngOnDestroy = function () {
        this.subscription.unsubscribe();
    };
    InstanceStatsComponent.decorators = [
        { type: Component, args: [{
                    selector: 'app-instance-stats',
                    templateUrl: './instance-stats.component.html'
                },] },
    ];
    /** @nocollapse */
    InstanceStatsComponent.ctorParameters = [
        { type: InstanceService, },
        { type: ActivatedRoute, },
    ];
    return InstanceStatsComponent;
}());
