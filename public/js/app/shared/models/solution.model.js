/**
 * Class represents solution model.
 */
export var Solution = (function () {
    function Solution(unassigned, total, sc, time, room, distr, technique, info, submissionTime, visible, data, instance, paper, author, solutionId, isChecked) {
        this.unassigned = unassigned;
        this.total = total;
        this.sc = sc;
        this.time = time;
        this.room = room;
        this.distr = distr;
        this.technique = technique;
        this.info = info;
        this.submissionTime = submissionTime;
        this.visible = visible;
        this.data = data;
        this.instance = instance;
        this.paper = paper;
        this.author = author;
        this.solutionId = solutionId;
        this.isChecked = isChecked;
    }
    return Solution;
}());
