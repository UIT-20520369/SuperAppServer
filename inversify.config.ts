import { interfaces, ContainerModule } from "inversify";
import { INFRASTRUCTURE_TYPES } from "./src/Infrastructure/Types";
import { IUserMapper, UserMapper } from "./src/Infrastructure/Mappers/UserMapper";
import { IUserRepository, UserRepository } from "./src/Infrastructure/Repositories/UserRepository/UserRepository";

export const myContainer = new ContainerModule((
    bind: interfaces.Bind,
) => {
    bind<IUserMapper>(INFRASTRUCTURE_TYPES.IUserMapper).to(UserMapper);
    bind<IUserRepository>(INFRASTRUCTURE_TYPES.IUserRepository).to(UserRepository);
});
