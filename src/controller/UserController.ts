import { NextFunction, Request, Response } from "express"
import {  inject } from "inversify";
import { controller,httpGet,request,response } from "inversify-express-utils";
import "reflect-metadata";
import { IUserRepository } from "../Infrastructure/Repositories/UserRepository/UserRepository.js"
import { INFRASTRUCTURE_TYPES } from "../Infrastructure/Types.js";
@controller('/User')
export class UserController {

    private userRepository: IUserRepository;
    constructor(@inject(INFRASTRUCTURE_TYPES.IUserRepository) repository: IUserRepository) {
        this.userRepository = repository;
    }
    @httpGet('/all')
    async all(@request() request: Request,@response() response: Response, next: NextFunction) {
        const result = await this.userRepository.getAll();
        return response.json(result);
    }

    // async one(request: Request, response: Response, next: NextFunction) {
    //     const id = parseInt(request.params.id)


    //     const user = await this.userRepository.findOne({
    //         where: { id }
    //     })

    //     if (!user) {
    //         return "unregistered user"
    //     }
    //     return user
    // }

    // async save(request: Request, response: Response, next: NextFunction) {
    //     const { firstName, lastName, age } = request.body;

    //     const user = Object.assign(new User(), {
    //         firstName,
    //         lastName,
    //         age
    //     })

    //     return this.userRepository.save(user)
    // }

    // async remove(request: Request, response: Response, next: NextFunction) {
    //     const id = parseInt(request.params.id)

    //     let userToRemove = await this.userRepository.findOneBy({ id })

    //     if (!userToRemove) {
    //         return "this user not exist"
    //     }

    //     await this.userRepository.remove(userToRemove)

    //     return "user has been removed"
    // }

}