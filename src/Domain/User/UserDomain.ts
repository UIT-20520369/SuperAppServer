export class UserDomain {
    public constructor(id?: number, firstName?: string, lastName?: string, age?: number) {
        this.id = !!id ? id : 0;
        this.firstName = !!firstName ? firstName : "";
        this.lastName = !!lastName ? lastName : "";
        this.age = !!age ? age : 0;
    }
    public id: number;
    public firstName: string;
    public lastName: string;
    public age: number;
}