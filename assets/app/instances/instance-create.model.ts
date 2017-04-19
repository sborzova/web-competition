export class InstanceCreate {
    constructor(public order: number,
                public name: string,
                public description: string,
                public statusId: string,
                public dataId: string){}
}