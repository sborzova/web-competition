import { Instance } from "../validation/instance.model";
import { Paper } from "../validation/paper.model";

export class Solution {
    constructor(public unassigned?: number,
                public total?: number,
                public sc?: number,
                public time?: number,
                public room?: number,
                public distr?: number,
                public technique?: string,
                public info?: string,
                public postDate?: Date,
                public data?: string,
                public instance?: Instance,
                public paper?: Paper,
                public solutionId?: string,
                public isChecked?: boolean) {}

}