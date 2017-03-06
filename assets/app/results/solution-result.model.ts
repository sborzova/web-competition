import { Paper } from "./paper.model";
import { Instance } from "./instance.model";
import { Author  } from "./author.model";

export class SolutionResult {
    constructor(public instance?: Instance,
                public unassigned?: number,
                public total?: number,
                public sc?: number,
                public time?: number,
                public room?: number,
                public distr?: number,
                public technique?: string,
                public info?: string,
                public postDate?: Date,
                public data?: string,
                public paper?: Paper,
                public author?: Author,
                public solutionId?: string) {}

}