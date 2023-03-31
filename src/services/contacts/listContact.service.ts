import AppDataSource from "../../data-source";
import { Contact } from "../../entities/contact.entity";
import { iContactResponse } from "../../interfaces/contacts/contacts.interface";
import { contactResponseSerializer } from "../../serializers/contact.serializers";

const listContactService = async (contactId: string): Promise<iContactResponse> => {
    const contactsRep = AppDataSource.getRepository(Contact)
    
    const contact = await contactsRep.findOne({
        where:{
            id: contactId,
        },
        relations: {
            address:true,
            user: true,
        }
    })

    const dataResponse = contactResponseSerializer.validate(contact, {
        stripUnknown: true,
    });
    
    return dataResponse
}

export default listContactService;