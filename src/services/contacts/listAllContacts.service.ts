import AppDataSource from "../../data-source";
import { Contact } from "../../entities/contact.entity";
import { iContactResponse } from "../../interfaces/contacts/contacts.interface";
import { listContactsResponseSerializer } from "../../serializers/contact.serializers";

const listAllContactsService = async (): Promise<iContactResponse[]> => {
    const contactsRep = AppDataSource.getRepository(Contact)

    const listContacts = await contactsRep.find({
        where:{
            isActive: true
        },
        relations:{
            address: true
        }
    })

    const dataResponse = listContactsResponseSerializer.validate(listContacts, {
        stripUnknown: true
    })
    
    return dataResponse
}

export default listAllContactsService;