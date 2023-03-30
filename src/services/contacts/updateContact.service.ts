import AppDataSource from "../../data-source";
import { Contact } from "../../entities/contact.entity";
import { iContactResponse, iContactUpdateRequest } from "../../interfaces/contacts/contacts.interface";
import { contactResponseSerializer } from "../../serializers/contact.serializers";

const updateContactService = async (contactId: string, dataUpdate: iContactUpdateRequest): Promise<iContactResponse> => {
    const contactsRep = AppDataSource.getRepository(Contact)

    const findContact = contactsRep.findOne({
        where: {
            id: contactId
        },
        relations: {
            address: true
        }
    })

    const updateContact = contactsRep.create({
        ...findContact,
        ...dataUpdate
    })
    await contactsRep.save(updateContact)

    const dataResponse = contactResponseSerializer.validate(updateContact, {
        stripUnknown: true
    })
    
    return dataResponse
}

export default updateContactService;