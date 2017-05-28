/**
 * Class represents create instance model.
 */
export var InstanceCreate = (function () {
    function InstanceCreate(order, name, description, statusId, dataId) {
        this.order = order;
        this.name = name;
        this.description = description;
        this.statusId = statusId;
        this.dataId = dataId;
    }
    return InstanceCreate;
}());
