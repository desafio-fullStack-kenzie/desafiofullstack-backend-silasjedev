import { NextFunction, Request, Response } from "express";  
import AppDataSource from "../data-source";
import { Contact } from "../entities/contact.entity";
import AppError from "../errors/AppError";

const verifyUserContactsMiddleware = async (req: Request, res: Response, next: NextFunction) =>{
    const contactRep = AppDataSource.getRepository(Contact)
    const tokenUserVerify = req.user.id

    const searchContacts = await contactRep.findOneBy({
        user: {
            id: tokenUserVerify
        }
    })

    if(!searchContacts){
        throw new AppError("There are no contacts in this directory", 400)
    }

    next()
}

export default verifyUserContactsMiddleware