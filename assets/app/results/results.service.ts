import {Injectable} from "@angular/core";
import {SolutionResult} from "./solution-result.model";

@Injectable()
export class ResultsService {

    sortQualityAsc(solutions: SolutionResult[]){
        return solutions.sort(function compare(a,b) {
            let aUnassigned = a.unassigned;
            let bUnassigned = b.unassigned;
            let aTotal = a.total;
            let bTotal = b.total;

            if (aUnassigned == bUnassigned){
                return (aTotal > bTotal) ? -1 : (aTotal < bTotal) ? 1 : 0;
            }else {
                return (aUnassigned < bUnassigned) ? -1 : 1;
            }
        })
    }

    sortQualityDesc(solutions: SolutionResult[]){
        return solutions.sort(function compare(a,b) {
            let aUnassigned = a.unassigned;
            let bUnassigned = b.unassigned;
            let aTotal = a.total;
            let bTotal = b.total;

            if (aUnassigned == bUnassigned){
                return (aTotal > bTotal) ? 1 : (aTotal < bTotal) ? -1 : 0;
            }else {
                return (aUnassigned < bUnassigned) ? 1 : -1;
            }
        })
    }

    sortScAsc(solutions: SolutionResult[]){
        return solutions.sort(function compare(a,b) {
            if (a.sc < b.sc)
                return -1;
            if (a.sc > b.sc)
                return 1;
            return 0;
        })
    }

    sortScDesc(solutions: SolutionResult[]){
        return solutions.sort(function compare(a,b) {
            if (a.sc < b.sc)
                return 1;
            if (a.sc > b.sc)
                return -1;
            return 0;
        })
    }

    sortTimeAsc(solutions: SolutionResult[]){
        return solutions.sort(function compare(a,b) {
            if (a.time < b.time)
                return -1;
            if (a.time > b.time)
                return 1;
            return 0;
        })
    }

    sortTimeDesc(solutions: SolutionResult[]){
        return solutions.sort(function compare(a,b) {
            if (a.time < b.time)
                return 1;
            if (a.time > b.time)
                return -1;
            return 0;
        })
    }

    sortRoomAsc(solutions: SolutionResult[]){
        return solutions.sort(function compare(a,b) {
            if (a.room < b.room)
                return -1;
            if (a.room > b.room)
                return 1;
            return 0;
        })
    }

    sortRoomDesc(solutions: SolutionResult[]){
        return solutions.sort(function compare(a,b) {
            if (a.room < b.room)
                return 1;
            if (a.room > b.room)
                return -1;
            return 0;
        })
    }

    sortDistributionAsc(solutions: SolutionResult[]){
        return solutions.sort(function compare(a,b) {
            if (a.distr < b.distr)
                return -1;
            if (a.distr > b.distr)
                return 1;
            return 0;
        })
    }

    sortDistributionDesc(solutions: SolutionResult[]){
        return solutions.sort(function compare(a,b) {
            if (a.distr < b.distr)
                return 1;
            if (a.distr > b.distr)
                return -1;
            return 0;
        })
    }
}