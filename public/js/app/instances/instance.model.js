export var Instance = (function () {
    function Instance(order, name, description, status, data, submissionTime, instanceId) {
        this.order = order;
        this.name = name;
        this.description = description;
        this.status = status;
        this.data = data;
        this.submissionTime = submissionTime;
        this.instanceId = instanceId;
    }
    return Instance;
}());
