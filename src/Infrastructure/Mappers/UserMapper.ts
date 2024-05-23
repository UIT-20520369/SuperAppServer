import { User } from "../Entitties/User/User";
import { UserDomain } from "../../Domain/User/UserDomain";
import { injectable } from "inversify";
import "reflect-metadata"
export interface IUserMapper {
    toDomain(entity: User): UserDomain;
    toEntity(): User;
    toDomains(entities: User[]): UserDomain[];
    toEntities(): User[];
}
@injectable()
export class UserMapper implements IUserMapper {
    public toDomain(entity: User): UserDomain {
        if (!User) return new UserDomain();
        else {
            const domain = new UserDomain(entity.id, entity.firstName, entity.lastName, entity.age);
            return domain;
        }
    }
    public toDomains(entities: User[]): UserDomain[] {
        return entities.map(user => this.toDomain(user));

    }
    public toEntity(): User {
        throw new Error("Method not implemented.");
    }
    public toEntities(): User[] {
        throw new Error("Method not implemented.");

    }
}