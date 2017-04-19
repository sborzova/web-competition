import { Injectable } from "@angular/core";
import { SolutionService } from "./solution.service";
export var SortService = (function () {
    function SortService(solutionService) {
        this.solutionService = solutionService;
        this.fileSaver = require('file-saver');
    }
    SortService.prototype.download = function (solution) {
        var _this = this;
        this.solutionService.getSolution(solution.solutionId)
            .subscribe(function (solution) {
            var file = new File([String.fromCharCode.apply(null, solution.data.content)], 'solution-' + solution.instance.name + '.xml', { type: "text/xml;charset=utf-8" });
            _this.fileSaver.saveAs(file);
        }, function (error) { return console.error(error); });
    };
    SortService.prototype.sortQualityAsc = function (solutions) {
        return solutions.sort(function compare(a, b) {
            var aUnassigned = a.unassigned;
            var bUnassigned = b.unassigned;
            var aTotal = a.total;
            var bTotal = b.total;
            var aSubmissionTime = a.submissionTime;
            var bSubmissionTime = b.submissionTime;
            if (aUnassigned == bUnassigned) {
                if (aTotal == bTotal) {
                    return (aSubmissionTime < bSubmissionTime) ? -1 : (aSubmissionTime > bSubmissionTime) ? 1 : 0;
                }
                else {
                    return (aTotal > bTotal) ? 1 : (aTotal < bTotal) ? -1 : 0;
                }
            }
            else {
                return (aUnassigned < bUnassigned) ? -1 : 1;
            }
        });
    };
    SortService.prototype.sortQualityDesc = function (solutions) {
        return solutions.sort(function compare(a, b) {
            var aUnassigned = a.unassigned;
            var bUnassigned = b.unassigned;
            var aTotal = a.total;
            var bTotal = b.total;
            var aSubmissionTime = a.submissionTime;
            var bSubmissionTime = b.submissionTime;
            if (aUnassigned == bUnassigned) {
                if (aTotal == bTotal) {
                    return (aSubmissionTime < bSubmissionTime) ? 1 : (aSubmissionTime > bSubmissionTime) ? -1 : 0;
                }
                else {
                    return (aTotal > bTotal) ? -1 : (aTotal < bTotal) ? 1 : 0;
                }
            }
            else {
                return (aUnassigned < bUnassigned) ? 1 : -1;
            }
        });
    };
    SortService.prototype.sortScAsc = function (solutions) {
        return solutions.sort(function compare(a, b) {
            if (a.sc < b.sc)
                return -1;
            if (a.sc > b.sc)
                return 1;
            return 0;
        });
    };
    SortService.prototype.sortScDesc = function (solutions) {
        return solutions.sort(function compare(a, b) {
            if (a.sc < b.sc)
                return 1;
            if (a.sc > b.sc)
                return -1;
            return 0;
        });
    };
    SortService.prototype.sortTimeAsc = function (solutions) {
        return solutions.sort(function compare(a, b) {
            if (a.time < b.time)
                return -1;
            if (a.time > b.time)
                return 1;
            return 0;
        });
    };
    SortService.prototype.sortTimeDesc = function (solutions) {
        return solutions.sort(function compare(a, b) {
            if (a.time < b.time)
                return 1;
            if (a.time > b.time)
                return -1;
            return 0;
        });
    };
    SortService.prototype.sortRoomAsc = function (solutions) {
        return solutions.sort(function compare(a, b) {
            if (a.room < b.room)
                return -1;
            if (a.room > b.room)
                return 1;
            return 0;
        });
    };
    SortService.prototype.sortRoomDesc = function (solutions) {
        return solutions.sort(function compare(a, b) {
            if (a.room < b.room)
                return 1;
            if (a.room > b.room)
                return -1;
            return 0;
        });
    };
    SortService.prototype.sortDistributionAsc = function (solutions) {
        return solutions.sort(function compare(a, b) {
            if (a.distr < b.distr)
                return -1;
            if (a.distr > b.distr)
                return 1;
            return 0;
        });
    };
    SortService.prototype.sortDistributionDesc = function (solutions) {
        return solutions.sort(function compare(a, b) {
            if (a.distr < b.distr)
                return 1;
            if (a.distr > b.distr)
                return -1;
            return 0;
        });
    };
    SortService.prototype.sortTechniqueAsc = function (solutions) {
        return solutions.sort(function compare(a, b) {
            if (a.technique < b.technique)
                return -1;
            if (a.technique > b.technique)
                return 1;
            return 0;
        });
    };
    SortService.prototype.sortTechniqueDesc = function (solutions) {
        return solutions.sort(function compare(a, b) {
            if (a.technique < b.technique)
                return 1;
            if (a.technique > b.technique)
                return -1;
            return 0;
        });
    };
    SortService.prototype.sortSubmissionTimeAsc = function (solutions) {
        return solutions.sort(function compare(a, b) {
            if (a.submissionTime < b.submissionTime)
                return -1;
            if (a.submissionTime > b.submissionTime)
                return 1;
            return 0;
        });
    };
    SortService.prototype.sortSubmissionTimeDesc = function (solutions) {
        return solutions.sort(function compare(a, b) {
            if (a.submissionTime < b.submissionTime)
                return 1;
            if (a.submissionTime > b.submissionTime)
                return -1;
            return 0;
        });
    };
    SortService.prototype.sortAuthorAsc = function (solutions) {
        return solutions.sort(function compare(a, b) {
            var aLastName = a.author.lastName;
            var bLastName = b.author.lastName;
            var aFirstName = a.author.firstName;
            var bFirstName = b.author.firstName;
            if (aLastName == bLastName) {
                return (aFirstName > bFirstName) ? 1 : (aFirstName < bFirstName) ? -1 : 0;
            }
            else {
                return (aLastName < bLastName) ? -1 : 1;
            }
        });
    };
    SortService.prototype.sortAuthorDesc = function (solutions) {
        return solutions.sort(function compare(a, b) {
            var aLastName = a.author.lastName;
            var bLastName = b.author.lastName;
            var aFirstName = a.author.firstName;
            var bFirstName = b.author.firstName;
            if (aLastName == bLastName) {
                return (aFirstName > bFirstName) ? -1 : (aFirstName < bFirstName) ? 1 : 0;
            }
            else {
                return (aLastName < bLastName) ? 1 : -1;
            }
        });
    };
    SortService.decorators = [
        { type: Injectable },
    ];
    /** @nocollapse */
    SortService.ctorParameters = [
        { type: SolutionService, },
    ];
    return SortService;
}());
