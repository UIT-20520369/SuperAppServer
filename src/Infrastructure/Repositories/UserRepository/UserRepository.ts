import { UserDomain } from "../../../Domain/User/UserDomain";
import { injectable,inject } from "inversify";
import { IUserMapper } from "../../Mappers/UserMapper";
import "reflect-metadata";
import { INFRASTRUCTURE_TYPES } from "../../Types";
import { AppDataSource } from "../../data-source";
import { User } from "../../Entitties/User/User";
import { Repository } from "typeorm";
export interface IUserRepository{
        getAll():Promise<UserDomain[]>;
}
@injectable()
export class UserRepository implements IUserRepository{
    private _mapper:IUserMapper;
    private repository:Repository<User>;
    constructor(@inject(INFRASTRUCTURE_TYPES.IUserMapper)mapper:IUserMapper){
        this._mapper= mapper;
        this.repository = AppDataSource.getRepository(User);
    }
    public async getAll(): Promise<UserDomain[]> {
        const entities = await this.repository.find();
        const domains = this._mapper.toDomains(entities);
        return domains
    }
}