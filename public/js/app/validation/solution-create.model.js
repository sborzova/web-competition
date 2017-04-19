export var SolutionCreate = (function () {
    function SolutionCreate(unassigned, total, sc, time, room, distr, info, technique, instanceName, fileId, paperId) {
        this.unassigned = unassigned;
        this.total = total;
        this.sc = sc;
        this.time = time;
        this.room = room;
        this.distr = distr;
        this.info = info;
        this.technique = technique;
        this.instanceName = instanceName;
        this.fileId = fileId;
        this.paperId = paperId;
    }
    return SolutionCreate;
}());
