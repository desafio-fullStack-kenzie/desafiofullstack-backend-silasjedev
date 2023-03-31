import AppDataSource from "../../data-source";
import { Contact } from "../../entities/contact.entity";

const deleteContactService = async (contactId: string): Promise<{}> =>{
    const contactsRep = AppDataSource.getRepository(Contact)

    const findContact = await contactsRep.findOneBy({
        id: contactId
    })

    findContact.isActive = false

    await contactsRep.save(findContact)
    
    return {}
}

export default deleteContactService;