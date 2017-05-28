/**
 * Class represents instance model.
 */
export var Instance = (function () {
    function Instance(name, instanceId, order) {
        this.name = name;
        this.instanceId = instanceId;
        this.order = order;
    }
    return Instance;
}());
