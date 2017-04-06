import {Injectable} from "@angular/core";
import {Solution} from "./solution.model";

@Injectable()
export class SortService {
    fileSaver = require('file-saver');

    download(solution: Solution){
        let file = new File([String.fromCharCode.apply(null, solution.data)],
            'solution-' + solution.instance.name + '.xml', {type: "text/xml;charset=utf-8"});
        this.fileSaver.saveAs(file);
    }

    sortQualityAsc(solutions: Solution[]){
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

    sortQualityDesc(solutions: Solution[]){
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
}