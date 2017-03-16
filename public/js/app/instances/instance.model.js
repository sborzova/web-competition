export var Instance = (function () {
    function Instance(order, name, description, stats, data, postDate, instanceId) {
        this.order = order;
        this.name = name;
        this.description = description;
        this.stats = stats;
        this.data = data;
        this.postDate = postDate;
        this.instanceId = instanceId;
    }
    return Instance;
}());
