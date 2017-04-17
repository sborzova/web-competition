export class Instance {
    constructor(public order: number,
                public name: string,
                public description: string,
                public status?: String,
                public data?: Buffer,
                public submissionTime?: Date,
                public instanceId?: string){}
}