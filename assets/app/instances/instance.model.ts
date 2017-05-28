import {FileModel} from "./file.model";

/**
 * Class represents instance model.
 */
export class Instance {
    constructor(public order: number,
                public name: string,
                public description: string,
                public status: FileModel,
                public data: FileModel,
                public submissionTime: Date,
                public instanceId: string){}
}