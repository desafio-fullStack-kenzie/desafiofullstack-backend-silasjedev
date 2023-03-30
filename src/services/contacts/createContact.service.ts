import AppDataSource from "../../data-source";
import { Address } from "../../entities/address.entity";
import { Contact } from "../../entities/contact.entity";
import { iContactRequest } from "../../interfaces/contacts/contacts.interface";
import { contactResponseSerializer } from "../../serializers/contact.serializers";

const createContactService = async (data: iContactRequest) => {
    const contactsRep = AppDataSource.getRepository(Contact)
    const addressRep = AppDataSource.getRepository(Address)

    const createAddress = addressRep.create(data.address)
    await addressRep.save(createAddress)
    
    const findAddress = await addressRep.findOneBy({
        id: data.address.id
    })

    const createContact = contactsRep.create({...data, address: findAddress})
    await contactsRep.save(createContact)

    const dataResponse = await contactResponseSerializer.validate(createContact, {
        stripUnknown: true
    })

    return dataResponse;
}

export default createContactService;