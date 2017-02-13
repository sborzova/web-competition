export class Instance {
    constructor(public name: string,
                public description: string,
                public stats?: String,
                public data?: String,
                public postDate?: Date,
                public isOn?: boolean,
                public instanceId?: string){}
}