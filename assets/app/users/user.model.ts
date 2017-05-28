/**
 * Class represents User model.
 */
export class User {
    constructor(public email: string,
                public firstName: string,
                public lastName: string,
                public password: string,
                public role: string,
                public userId?: string,
                public confirmPassword?: string,
    ) {}
}