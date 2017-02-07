export class Instance {
    constructor(public name: string,
                public courses: number,
                public rooms: number,
                public periodsPerDay: number,
                public days: number,
                public curricula: number,
                public dailyMin: number,
                public dailyMax: number,
                public instanceGroupId?: string){}
}