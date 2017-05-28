import {Injectable} from "@angular/core";
import {Solution} from "../models/solution.model";
import {SolutionService} from "./solution.service";

/**
 * Service to sort and download solutions.
 */
@Injectable()
export class SortDownloadService {
    private fileSaver = require('file-saver');

    /**
     * When creating service, inject dependency.
     *
     * @param solutionService
     */
    constructor(private solutionService: SolutionService){}

    /**
     * Download solutions's file.
     *
     * @param solution
     */
    download(solution: Solution){
        this.solutionService.getSolution(solution.solutionId)
            .subscribe(
                (solution: Solution) => {
                    let file = new File([String.fromCharCode.apply(null, solution.data.content)],
                        'solution-' + solution.instance.name + '.xml', {type: "text/xml;charset=utf-8"});
                    this.fileSaver.saveAs(file);
                },
                error => console.error(error)
            );
    }

    /**
     * Sort solutions ascending by quality.
     *
     * @param solutions
     * @returns {Solution[]} sorted solutions
     */
    sortQualityAsc(solutions: Solution[]){
        return solutions.sort(function compare(a,b) {
            let aUnassigned = a.unassigned;
            let bUnassigned = b.unassigned;
            let aTotal = a.total;
            let bTotal = b.total;
            let aSubmissionTime = a.submissionTime;
            let bSubmissionTime = b.submissionTime;

            if (aUnassigned == bUnassigned){
                if (aTotal == bTotal){
                    return (aSubmissionTime < bSubmissionTime) ? -1 : (aSubmissionTime > bSubmissionTime) ? 1 : 0;
                }else {
                    return (aTotal > bTotal) ? 1 : (aTotal < bTotal) ? -1 : 0;
                }
            }else {
                return (aUnassigned < bUnassigned) ? -1 : 1;
            }
        })
    }

    /**
     * Sort solutions descending by quality.
     *
     * @param solutions
     * @returns {Solution[]} sorted solutions
     */
    sortQualityDesc(solutions: Solution[]){
        return solutions.sort(function compare(a,b) {
            let aUnassigned = a.unassigned;
            let bUnassigned = b.unassigned;
            let aTotal = a.total;
            let bTotal = b.total;
            let aSubmissionTime = a.submissionTime;
            let bSubmissionTime = b.submissionTime;

            if (aUnassigned == bUnassigned){
                if (aTotal == bTotal){
                    return (aSubmissionTime < bSubmissionTime) ? 1 : (aSubmissionTime > bSubmissionTime) ? -1 : 0;
                }else {
                    return (aTotal > bTotal) ? -1 : (aTotal < bTotal) ? 1 : 0;
                }
            }else {
                return (aUnassigned < bUnassigned) ? 1 : -1;
            }
        })
    }

    /**
     * Sort solutions ascending by student conflicts.
     *
     * @param solutions
     * @returns {Solution[]} sorted solutions
     */
    sortScAsc(solutions: Solution[]){
        return solutions.sort(function compare(a,b) {
            if (a.sc < b.sc)
                return -1;
            if (a.sc > b.sc)
                return 1;
            return 0;
        })
    }

    /**
     * Sort solutions descending by student conflicts.
     *
     * @param solutions
     * @returns {Solution[]} sorted solutions
     */
    sortScDesc(solutions: Solution[]){
        return solutions.sort(function compare(a,b) {
            if (a.sc < b.sc)
                return 1;
            if (a.sc > b.sc)
                return -1;
            return 0;
        })
    }

    /**
     * Sort solutions ascending by time preferences.
     *
     * @param solutions
     * @returns {Solution[]} sorted solutions
     */
    sortTimeAsc(solutions: Solution[]){
        return solutions.sort(function compare(a,b) {
            if (a.time < b.time)
                return -1;
            if (a.time > b.time)
                return 1;
            return 0;
        })
    }

    /**
     * Sort solutions descending by time preferences.
     *
     * @param solutions
     * @returns {Solution[]} sorted solutions
     */
    sortTimeDesc(solutions: Solution[]){
        return solutions.sort(function compare(a,b) {
            if (a.time < b.time)
                return 1;
            if (a.time > b.time)
                return -1;
            return 0;
        })
    }

    /**
     * Sort solutions ascending by room preferences.
     *
     * @param solutions
     * @returns {Solution[]} sorted solutions
     */
    sortRoomAsc(solutions: Solution[]){
        return solutions.sort(function compare(a,b) {
            if (a.room < b.room)
                return -1;
            if (a.room > b.room)
                return 1;
            return 0;
        })
    }

    /**
     * Sort solutions descending by room preferences.
     *
     * @param solutions
     * @returns {Solution[]} sorted solutions
     */
    sortRoomDesc(solutions: Solution[]){
        return solutions.sort(function compare(a,b) {
            if (a.room < b.room)
                return 1;
            if (a.room > b.room)
                return -1;
            return 0;
        })
    }

    /**
     * Sort solutions ascending by distribution preferences.
     *
     * @param solutions
     * @returns {Solution[]} sorted solutions
     */
    sortDistributionAsc(solutions: Solution[]){
        return solutions.sort(function compare(a,b) {
            if (a.distr < b.distr)
                return -1;
            if (a.distr > b.distr)
                return 1;
            return 0;
        })
    }

    /**
     * Sort solutions descending by distribution preferences.
     *
     * @param solutions
     * @returns {Solution[]} sorted solutions
     */
    sortDistributionDesc(solutions: Solution[]){
        return solutions.sort(function compare(a,b) {
            if (a.distr < b.distr)
                return 1;
            if (a.distr > b.distr)
                return -1;
            return 0;
        })
    }

    /**
     * Sort solutions ascending by technique.
     *
     * @param solutions
     * @returns {Solution[]} sorted solutions
     */
    sortTechniqueAsc(solutions: Solution[]){
        return solutions.sort(function compare(a,b) {
            if (a.technique < b.technique)
                return -1;
            if (a.technique > b.technique)
                return 1;
            return 0;
        })
    }

    /**
     * Sort solutions descending by technique.
     *
     * @param solutions
     * @returns {Solution[]} sorted solutions
     */
    sortTechniqueDesc(solutions: Solution[]){
        return solutions.sort(function compare(a,b) {
            if (a.technique < b.technique)
                return 1;
            if (a.technique > b.technique)
                return -1;
            return 0;
        })
    }

    /**
     * Sort solutions ascending by submission time.
     *
     * @param solutions
     * @returns {Solution[]} sorted solutions
     */
    sortSubmissionTimeAsc(solutions: Solution[]){
        return solutions.sort(function compare(a,b) {
            if (a.submissionTime < b.submissionTime)
                return -1;
            if (a.submissionTime > b.submissionTime)
                return 1;
            return 0;
        })
    }

    /**
     * Sort solutions descending by submission time.
     *
     * @param solutions
     * @returns {Solution[]} sorted solutions
     */
    sortSubmissionTimeDesc(solutions: Solution[]){
        return solutions.sort(function compare(a,b) {
            if (a.submissionTime < b.submissionTime)
                return 1;
            if (a.submissionTime > b.submissionTime)
                return -1;
            return 0;
        })
    }

    /**
     * Sort solutions ascending by author.
     *
     * @param solutions
     * @returns {Solution[]} sorted solutions
     */
    sortAuthorAsc(solutions: Solution[]){
        return solutions.sort(function compare(a,b) {
            let aLastName = a.author.lastName;
            let bLastName = b.author.lastName;
            let aFirstName = a.author.firstName;
            let bFirstName = b.author.firstName;

            if (aLastName == bLastName){
                return (aFirstName > bFirstName) ? 1 : (aFirstName < bFirstName) ? -1 : 0;
            }else {
                return (aLastName < bLastName) ? -1 : 1;
            }
        })
    }

    /**
     * Sort solutions descending by author.
     *
     * @param solutions
     * @returns {Solution[]} sorted solutions
     */
    sortAuthorDesc(solutions: Solution[]){
        return solutions.sort(function compare(a,b) {
            let aLastName = a.author.lastName;
            let bLastName = b.author.lastName;
            let aFirstName = a.author.firstName;
            let bFirstName = b.author.firstName;

            if (aLastName == bLastName){
                return (aFirstName > bFirstName) ? -1 : (aFirstName < bFirstName) ? 1 : 0;
            }else {
                return (aLastName < bLastName) ? 1 : -1;
            }
        })
    }

    /**
     * Sort solutions ascending by instance's order.
     *
     * @param solutions
     * @returns {Solution[]} sorted solutions
     */
    sortInstanceAsc(solutions: Solution[]){
        return solutions.sort(function compare(a,b) {
            if (a.instance.order < b.instance.order)
                return -1;
            if (a.instance.order > b.instance.order)
                return 1;
            return 0;
        })
    }

    /**
     * Sort solutions descending by instance's order.
     *
     * @param solutions
     * @returns {Solution[]} sorted solutions
     */
    sortInstanceDesc(solutions: Solution[]){
        return solutions.sort(function compare(a,b) {
            if (a.instance.order < b.instance.order)
                return 1;
            if (a.instance.order > b.instance.order)
                return -1;
            return 0;
        })
    }

}