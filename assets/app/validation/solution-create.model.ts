export class SolutionCreate {
    constructor(public unassigned: number,
                public total: number,
                public sc: number,
                public time: number,
                public room: number,
                public distr: number,
                public info: string,
                public technique: string,
                public instanceName: string,
                public fileId?: string,
                public paperId?: string) {}
}