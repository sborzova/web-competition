export class SolutionCreate {
    constructor(public unassigned?: number,
                public total?: number,
                public sc?: number,
                public time?: number,
                public room?: number,
                public distr?: number,
                public info?: string,
                public data?: String,
                public instanceId?: string,
                public techniqueId?: string,
                public paperId?: string) {}

    setTechnique(techniqueId: string){
        this.techniqueId = techniqueId;
    }
}