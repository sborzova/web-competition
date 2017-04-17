import { Component } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { InstanceService } from "../../shared/instance.service";
export var InstanceStatusComponent = (function () {
    function InstanceStatusComponent(instanceService, route) {
        this.instanceService = instanceService;
        this.route = route;
    }
    InstanceStatusComponent.prototype.ngOnInit = function () {
        var _this = this;
        var id = this.route.snapshot.params['id'];
        this.instanceService.getInstance(id)
            .subscribe(function (instance) {
            _this.instance = instance;
        });
    };
    InstanceStatusComponent.decorators = [
        { type: Component, args: [{
                    selector: 'app-instance-stats',
                    templateUrl: './instance-status.component.html'
                },] },
    ];
    /** @nocollapse */
    InstanceStatusComponent.ctorParameters = [
        { type: InstanceService, },
        { type: ActivatedRoute, },
    ];
    return InstanceStatusComponent;
}());
