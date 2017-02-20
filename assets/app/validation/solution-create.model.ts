export class SolutionCreate {
    constructor(public unassigned?: number,
                public total?: number,
                public sc?: number,
                public time?: number,
                public room?: number,
                public distr?: number,
                public technique?: string,
                public info?: string,
                public data?: String,
                public instanceId?: string,
                public paperId?: string) {}
}