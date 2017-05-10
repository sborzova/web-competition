import { Instance } from "../../validation/instance.model";
import {Paper} from "./paper.model";
import {Author} from "./author.model";
import {FileModel} from "../../instances/file.model";

export class Solution {
    constructor(public unassigned: number,
                public total: number,
                public sc: number,
                public time: number,
                public room: number,
                public distr: number,
                public technique: string,
                public info: string,
                public submissionTime: Date,
                public visible: boolean,
                public data: FileModel,
                public instance: Instance,
                public paper?: Paper,
                public author?: Author,
                public solutionId?: string,
                public isChecked?: boolean) {}

}