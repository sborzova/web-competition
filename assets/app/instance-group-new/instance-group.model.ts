import { Instance } from "../instances/instance.model";

export class InstanceGroup {
    constructor(public name: string,
                public instanceGroupId?: string,
                public instances?: Instance[]){}
}