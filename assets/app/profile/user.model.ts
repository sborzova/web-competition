export class User {
    constructor(public email: string,
                public password: string,
                public firstName?: string,
                public lastName?: string,
                public role?: string,
                public confirmPassword?: string,
                public newPassword?: string
    ){}
}