import AppDataSource from "../../data-source";
import { Contact } from "../../entities/contact.entity";
import { iContactUpdateRequest } from "../../interfaces/contacts/contacts.interface";
import { contactUpdateSerializer } from "../../serializers/contact.serializers";

const updateContactService = async (contactId: string, dataUpdate: iContactUpdateRequest): Promise<iContactUpdateRequest> => {
    const contactsRep = AppDataSource.getRepository(Contact)

    const findContact = contactsRep.findOne({
        where: {
            id: contactId
        },
        relations: {
            address: true,
        }
    })

    const updateContact = contactsRep.create({
        ...findContact,
        ...dataUpdate,
    })
    await contactsRep.save(updateContact)

    const dataResponse = contactUpdateSerializer.validate(updateContact, {
        stripUnknown: true
    })
    
    return dataResponse
}

export default updateContactService;