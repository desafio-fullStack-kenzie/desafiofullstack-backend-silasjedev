import { Request, Response, NextFunction } from "express";
import AppDataSource from "../data-source";
import { Contact } from "../entities/contact.entity";
import AppError from "../errors/AppError";


const verifyContactExistsMiddleware = async (req: Request, res: Response, next: NextFunction) => {
    const contactsRep = AppDataSource.getRepository(Contact)
    const contactId = req.params.id

    if(contactId.length !== 36){
        throw new AppError("Uuid invalid", 400)
    }

    const findUser = await contactsRep.findOne({
        where:{
            id: contactId
        }
    })

    if(!findUser){
        throw new AppError("User not found", 404)
    }
    
    if(!findUser.isActive){
        throw new AppError("User not active", 404)
    }

    return next()
}

export default verifyContactExistsMiddleware;