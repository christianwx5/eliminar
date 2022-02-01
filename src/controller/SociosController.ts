import {getRepository} from "typeorm";
import {NextFunction, Request, Response} from "express";
import {Socios} from "../entity/Socios";
import { relative } from "node:path/posix";

export class SociosController {

    private SociosRepository = getRepository(Socios);

    async all(request: Request, response: Response, next: NextFunction) {
        //this.userRepository.find();
        console.log( await this.SociosRepository.find());
        
        return this.SociosRepository.find();
    }

    async limit(request: Request, response: Response, next: NextFunction) {
        //this.userRepository.find();
        //console.log( await this.SociosRepository.find());
       
        const limit = request.params.limit
        const offset = request.params.offset
        let [dataSocios, sociosCount] = await this.SociosRepository.findAndCount({
            skip: 2,
            take: 4,
        });
        console.log(sociosCount);
        
        return  {dataSocios,sociosCount}
    }

    async one(request: Request, response: Response, next: NextFunction) {
        return this.SociosRepository.findOne(request.params.id);
    }

    async save(request: Request, response: Response, next: NextFunction) {
        return this.SociosRepository.save(request.body);
    }

    async remove(request: Request, response: Response, next: NextFunction) {
        let userToRemove = await this.SociosRepository.findOne(request.params.id);
        await this.SociosRepository.remove(userToRemove);
    }

}