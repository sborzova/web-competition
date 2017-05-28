/**
 * Class represents model for Pass
 */
export class Password {
    constructor(public current: string,
                public newPassword: string,
                public confirmNew: string
    ) {}
}