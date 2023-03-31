import AppDataSource from "../../data-source";
import { Contact } from "../../entities/contact.entity";
import { iContactResponse } from "../../interfaces/contacts/contacts.interface";
import { listContactsResponseSerializer } from "../../serializers/contact.serializers";
import AppError from "../../errors/AppError";

const listAllContactsService = async (id: string): Promise<iContactResponse[]> => {
    const contactsRep = AppDataSource.getRepository(Contact)

    const listContacts = await contactsRep.find({
        where:{
            user:{
                id: id
            }
        },
        relations:{
            address: true,
            user: true
        }
    })

    if(!listContacts){
        throw new AppError("There are no contacts in this directory", 400)
    }

    const dataResponse = listContactsResponseSerializer.validate(listContacts, {
        stripUnknown: true
    })
    
    return dataResponse
}

export default listAllContactsService;