export var Solution = (function () {
    function Solution(unassigned, total, sc, time, room, distr, technique, info, postDate, data, instance, paper, solutionId, isChecked) {
        this.unassigned = unassigned;
        this.total = total;
        this.sc = sc;
        this.time = time;
        this.room = room;
        this.distr = distr;
        this.technique = technique;
        this.info = info;
        this.postDate = postDate;
        this.data = data;
        this.instance = instance;
        this.paper = paper;
        this.solutionId = solutionId;
        this.isChecked = isChecked;
    }
    return Solution;
}());
