import { Technique } from "../validation/technique.model";
import { Instance } from "../validation/instance.model";
import { Paper } from "../validation/paper.model";

export class Solution {
    constructor(public unassigned?: number,
                public total?: number,
                public sc?: number,
                public time?: number,
                public room?: number,
                public distr?: number,
                public info?: string,
                public postDate?: Date,
                public data?: String,
                public instance?: Instance,
                public technique?: Technique,
                public paper?: Paper,
                public solutionId?: string,
                public isChecked?: boolean) {}

}