import { Injectable } from "@angular/core";
import { SolutionService } from "./solution.service";
export var SortDownloadService = (function () {
    function SortDownloadService(solutionService) {
        this.solutionService = solutionService;
        this.fileSaver = require('file-saver');
    }
    /**
     * Download solutions's file.
     *
     * @param solution
     */
    SortDownloadService.prototype.download = function (solution) {
        var _this = this;
        this.solutionService.getSolution(solution.solutionId)
            .subscribe(function (solution) {
            var file = new File([String.fromCharCode.apply(null, solution.data.content)], 'solution-' + solution.instance.name + '.xml', { type: "text/xml;charset=utf-8" });
            _this.fileSaver.saveAs(file);
        }, function (error) { return console.error(error); });
    };
    /**
     * Sort solutions ascending by quality.
     *
     * @param solutions
     * @returns {Solution[]} sorted solutions
     */
    SortDownloadService.prototype.sortQualityAsc = function (solutions) {
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
    /**
     * Sort solutions descending by quality.
     *
     * @param solutions
     * @returns {Solution[]} sorted solutions
     */
    SortDownloadService.prototype.sortQualityDesc = function (solutions) {
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
    /**
     * Sort solutions ascending by student conflicts.
     *
     * @param solutions
     * @returns {Solution[]} sorted solutions
     */
    SortDownloadService.prototype.sortScAsc = function (solutions) {
        return solutions.sort(function compare(a, b) {
            if (a.sc < b.sc)
                return -1;
            if (a.sc > b.sc)
                return 1;
            return 0;
        });
    };
    /**
     * Sort solutions descending by student conflicts.
     *
     * @param solutions
     * @returns {Solution[]} sorted solutions
     */
    SortDownloadService.prototype.sortScDesc = function (solutions) {
        return solutions.sort(function compare(a, b) {
            if (a.sc < b.sc)
                return 1;
            if (a.sc > b.sc)
                return -1;
            return 0;
        });
    };
    /**
     * Sort solutions ascending by time preferences.
     *
     * @param solutions
     * @returns {Solution[]} sorted solutions
     */
    SortDownloadService.prototype.sortTimeAsc = function (solutions) {
        return solutions.sort(function compare(a, b) {
            if (a.time < b.time)
                return -1;
            if (a.time > b.time)
                return 1;
            return 0;
        });
    };
    /**
     * Sort solutions descending by time preferences.
     *
     * @param solutions
     * @returns {Solution[]} sorted solutions
     */
    SortDownloadService.prototype.sortTimeDesc = function (solutions) {
        return solutions.sort(function compare(a, b) {
            if (a.time < b.time)
                return 1;
            if (a.time > b.time)
                return -1;
            return 0;
        });
    };
    /**
     * Sort solutions ascending by room preferences.
     *
     * @param solutions
     * @returns {Solution[]} sorted solutions
     */
    SortDownloadService.prototype.sortRoomAsc = function (solutions) {
        return solutions.sort(function compare(a, b) {
            if (a.room < b.room)
                return -1;
            if (a.room > b.room)
                return 1;
            return 0;
        });
    };
    /**
     * Sort solutions descending by room preferences.
     *
     * @param solutions
     * @returns {Solution[]} sorted solutions
     */
    SortDownloadService.prototype.sortRoomDesc = function (solutions) {
        return solutions.sort(function compare(a, b) {
            if (a.room < b.room)
                return 1;
            if (a.room > b.room)
                return -1;
            return 0;
        });
    };
    /**
     * Sort solutions ascending by distribution preferences.
     *
     * @param solutions
     * @returns {Solution[]} sorted solutions
     */
    SortDownloadService.prototype.sortDistributionAsc = function (solutions) {
        return solutions.sort(function compare(a, b) {
            if (a.distr < b.distr)
                return -1;
            if (a.distr > b.distr)
                return 1;
            return 0;
        });
    };
    /**
     * Sort solutions descending by distribution preferences.
     *
     * @param solutions
     * @returns {Solution[]} sorted solutions
     */
    SortDownloadService.prototype.sortDistributionDesc = function (solutions) {
        return solutions.sort(function compare(a, b) {
            if (a.distr < b.distr)
                return 1;
            if (a.distr > b.distr)
                return -1;
            return 0;
        });
    };
    /**
     * Sort solutions ascending by technique.
     *
     * @param solutions
     * @returns {Solution[]} sorted solutions
     */
    SortDownloadService.prototype.sortTechniqueAsc = function (solutions) {
        return solutions.sort(function compare(a, b) {
            if (a.technique < b.technique)
                return -1;
            if (a.technique > b.technique)
                return 1;
            return 0;
        });
    };
    /**
     * Sort solutions descending by technique.
     *
     * @param solutions
     * @returns {Solution[]} sorted solutions
     */
    SortDownloadService.prototype.sortTechniqueDesc = function (solutions) {
        return solutions.sort(function compare(a, b) {
            if (a.technique < b.technique)
                return 1;
            if (a.technique > b.technique)
                return -1;
            return 0;
        });
    };
    /**
     * Sort solutions ascending by submission time.
     *
     * @param solutions
     * @returns {Solution[]} sorted solutions
     */
    SortDownloadService.prototype.sortSubmissionTimeAsc = function (solutions) {
        return solutions.sort(function compare(a, b) {
            if (a.submissionTime < b.submissionTime)
                return -1;
            if (a.submissionTime > b.submissionTime)
                return 1;
            return 0;
        });
    };
    /**
     * Sort solutions descending by submission time.
     *
     * @param solutions
     * @returns {Solution[]} sorted solutions
     */
    SortDownloadService.prototype.sortSubmissionTimeDesc = function (solutions) {
        return solutions.sort(function compare(a, b) {
            if (a.submissionTime < b.submissionTime)
                return 1;
            if (a.submissionTime > b.submissionTime)
                return -1;
            return 0;
        });
    };
    /**
     * Sort solutions ascending by author.
     *
     * @param solutions
     * @returns {Solution[]} sorted solutions
     */
    SortDownloadService.prototype.sortAuthorAsc = function (solutions) {
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
    /**
     * Sort solutions descending by author.
     *
     * @param solutions
     * @returns {Solution[]} sorted solutions
     */
    SortDownloadService.prototype.sortAuthorDesc = function (solutions) {
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
    /**
     * Sort solutions ascending by instance's order.
     *
     * @param solutions
     * @returns {Solution[]} sorted solutions
     */
    SortDownloadService.prototype.sortInstanceAsc = function (solutions) {
        return solutions.sort(function compare(a, b) {
            if (a.instance.order < b.instance.order)
                return -1;
            if (a.instance.order > b.instance.order)
                return 1;
            return 0;
        });
    };
    /**
     * Sort solutions descending by instance's order.
     *
     * @param solutions
     * @returns {Solution[]} sorted solutions
     */
    SortDownloadService.prototype.sortInstanceDesc = function (solutions) {
        return solutions.sort(function compare(a, b) {
            if (a.instance.order < b.instance.order)
                return 1;
            if (a.instance.order > b.instance.order)
                return -1;
            return 0;
        });
    };
    SortDownloadService.decorators = [
        { type: Injectable },
    ];
    /** @nocollapse */
    SortDownloadService.ctorParameters = [
        { type: SolutionService, },
    ];
    return SortDownloadService;
}());
