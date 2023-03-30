import AppDataSource from "../../data-source";
import { Address } from "../../entities/address.entity";
import { Contact } from "../../entities/contact.entity";
import { iAddressUpdateRequest } from "../../interfaces/addresses/addresses.interface";

const updateAddressContactService = async (addressData: iAddressUpdateRequest, contactId: string): Promise<Address> => {
    const contactsRep = AppDataSource.getRepository(Contact)
    const addressRep = AppDataSource.getRepository(Address)

    const findContact = await contactsRep.findOne({
        where:{
            id: contactId,
        },
        relations:{
            address:true
        }
    })

    const findAddress = await addressRep.findOneBy({
        id: findContact.address.id
    })

    const updateAddress = addressRep.create({
        ...findAddress,
        ...addressData
    })
    await addressRep.save(updateAddress)

    return updateAddress
}

export default updateAddressContactService;