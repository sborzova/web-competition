/**
 * Class represents update instance model.
 */
export var InstanceUpdate = (function () {
    function InstanceUpdate(order, name, description, instanceId) {
        this.order = order;
        this.name = name;
        this.description = description;
        this.instanceId = instanceId;
    }
    return InstanceUpdate;
}());
