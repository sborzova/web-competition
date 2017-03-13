export class Instance {
    constructor(public order: number,
                public name: string,
                public description: string,
                public stats?: String,
                public data?: String,
                public postDate?: Date,
                public instanceId?: string){}
}