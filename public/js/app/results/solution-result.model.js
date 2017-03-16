export var SolutionResult = (function () {
    function SolutionResult(instance, unassigned, total, sc, time, room, distr, technique, info, postDate, data, paper, author, solutionId) {
        this.instance = instance;
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
        this.paper = paper;
        this.author = author;
        this.solutionId = solutionId;
    }
    return SolutionResult;
}());
