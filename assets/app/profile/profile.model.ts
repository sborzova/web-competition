/**
 * Class represents profile model.
 */
export class ProfileUser {
    constructor(public email: string,
                public password: string,
                public firstName: string,
                public lastName: string,
                public confirmPassword?: string,
                public newPassword?: string){}
}