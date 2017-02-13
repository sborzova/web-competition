export class Instance {
    constructor(public name: string,
                public description: string,
                public stats?: Buffer,
                public data?: Buffer,
                public postDate?: Date,
                public isOn?: boolean,
                public instanceId?: string){}
}