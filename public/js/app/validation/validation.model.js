/**
 *  Class represents validation model.
 */
export var Validation = (function () {
    function Validation(unassigned, total, sc, time, room, distr, info, instanceName) {
        this.unassigned = unassigned;
        this.total = total;
        this.sc = sc;
        this.time = time;
        this.room = room;
        this.distr = distr;
        this.info = info;
        this.instanceName = instanceName;
    }
    return Validation;
}());
