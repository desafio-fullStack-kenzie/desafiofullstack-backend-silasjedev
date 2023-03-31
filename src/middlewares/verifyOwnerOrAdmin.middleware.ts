import { NextFunction, Request, Response } from "express";
import AppDataSource from "../data-source";
import { User } from "../entities/user.entity";
import AppError from "../errors/AppError";

const verifyOwnerOrAdminMiddleware = async(req: Request, res: Response, next: NextFunction) =>{

    const userRepository = AppDataSource.getRepository(User)

    const tokenUserVerify = req.user.id

    const searchUser = await userRepository.findOne({
        where: {
            id: req.user.id
        },
        withDeleted: true
    })

    if(!searchUser.isAdmin && tokenUserVerify !== req.params.id){
        throw new AppError('Missing admin permissions', 401)
    }

    next()
}

export default verifyOwnerOrAdminMiddleware