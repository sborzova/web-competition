import {Injectable} from "@angular/core";
import {Solution} from "./solution.model";
import {SolutionService} from "./solution.service";

@Injectable()
export class SortService {
    fileSaver = require('file-saver');

    constructor(private solutionService: SolutionService){}

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

    sortScAsc(solutions: Solution[]){
        return solutions.sort(function compare(a,b) {
            if (a.sc < b.sc)
                return -1;
            if (a.sc > b.sc)
                return 1;
            return 0;
        })
    }

    sortScDesc(solutions: Solution[]){
        return solutions.sort(function compare(a,b) {
            if (a.sc < b.sc)
                return 1;
            if (a.sc > b.sc)
                return -1;
            return 0;
        })
    }

    sortTimeAsc(solutions: Solution[]){
        return solutions.sort(function compare(a,b) {
            if (a.time < b.time)
                return -1;
            if (a.time > b.time)
                return 1;
            return 0;
        })
    }

    sortTimeDesc(solutions: Solution[]){
        return solutions.sort(function compare(a,b) {
            if (a.time < b.time)
                return 1;
            if (a.time > b.time)
                return -1;
            return 0;
        })
    }

    sortRoomAsc(solutions: Solution[]){
        return solutions.sort(function compare(a,b) {
            if (a.room < b.room)
                return -1;
            if (a.room > b.room)
                return 1;
            return 0;
        })
    }

    sortRoomDesc(solutions: Solution[]){
        return solutions.sort(function compare(a,b) {
            if (a.room < b.room)
                return 1;
            if (a.room > b.room)
                return -1;
            return 0;
        })
    }

    sortDistributionAsc(solutions: Solution[]){
        return solutions.sort(function compare(a,b) {
            if (a.distr < b.distr)
                return -1;
            if (a.distr > b.distr)
                return 1;
            return 0;
        })
    }

    sortDistributionDesc(solutions: Solution[]){
        return solutions.sort(function compare(a,b) {
            if (a.distr < b.distr)
                return 1;
            if (a.distr > b.distr)
                return -1;
            return 0;
        })
    }

    sortTechniqueAsc(solutions: Solution[]){
        return solutions.sort(function compare(a,b) {
            if (a.technique < b.technique)
                return -1;
            if (a.technique > b.technique)
                return 1;
            return 0;
        })
    }

    sortTechniqueDesc(solutions: Solution[]){
        return solutions.sort(function compare(a,b) {
            if (a.technique < b.technique)
                return 1;
            if (a.technique > b.technique)
                return -1;
            return 0;
        })
    }

    sortSubmissionTimeAsc(solutions: Solution[]){
        return solutions.sort(function compare(a,b) {
            if (a.submissionTime < b.submissionTime)
                return -1;
            if (a.submissionTime > b.submissionTime)
                return 1;
            return 0;
        })
    }

    sortSubmissionTimeDesc(solutions: Solution[]){
        return solutions.sort(function compare(a,b) {
            if (a.submissionTime < b.submissionTime)
                return 1;
            if (a.submissionTime > b.submissionTime)
                return -1;
            return 0;
        })
    }

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
}