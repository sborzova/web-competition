import { Component } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { InstanceService } from "../../shared/services/instance.service";
/**
 * Component to show status of instance.
 */
export var InstanceStatusComponent = (function () {
    /**
     * When creating component, inject dependencies.
     *
     * @param instanceService
     * @param route
     */
    function InstanceStatusComponent(instanceService, route) {
        this.instanceService = instanceService;
        this.route = route;
    }
    /**
     * When creating component, call function to get instance by router parameter's id.
     */
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
