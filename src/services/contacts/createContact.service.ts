import AppDataSource from "../../data-source";
import { Address } from "../../entities/address.entity";
import { Contact } from "../../entities/contact.entity";
import { User } from "../../entities/user.entity";
import AppError from "../../errors/AppError";
import { iContactResponse, iContactRequest} from "../../interfaces/contacts/contacts.interface";
import { contactResponseSerializer } from "../../serializers/contact.serializers";

const createContactService = async (data: iContactRequest, id: string): Promise<iContactResponse> => {
    const contactsRep = AppDataSource.getRepository(Contact)
    const addressRep = AppDataSource.getRepository(Address)
    const usersRep = AppDataSource.getRepository(User)
    
    const findAddress = await addressRep.findOneBy({
        id: data.address.id
    })

    const findUser = await usersRep.findOneBy({
        id: id
    })

    if(!findUser){
        throw new AppError("tem algo errado", 400)
    }

    console.log(findUser)

    const createContact = contactsRep.create({...data, address: findAddress, user: findUser})
    await contactsRep.save(createContact)

    const dataResponse = await contactResponseSerializer.validate(createContact, {
        stripUnknown: true
    })

    return dataResponse;
}

export default createContactService;