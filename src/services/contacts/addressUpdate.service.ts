import AppDataSource from "../../data-source";
import { Address } from "../../entities/address.entity";
import { Contact } from "../../entities/contact.entity";
import { iAddressResponse, iAddressUpdateRequest } from "../../interfaces/addresses/addresses.interface";
import { addressUpdateSerializer } from "../../serializers/contact.serializers";

const updateAddressContactService = async (addressData: iAddressUpdateRequest, contactId: string): Promise<iAddressResponse> => {
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

    const findAddress = await addressRep.findOne({
        where: {
            id: findContact.address.id
        }
    })

    const updateAddress = addressRep.create({
        ...findAddress,
        ...addressData
    })
    await addressRep.save(updateAddress)

    const dataResponse = addressUpdateSerializer.validate(updateAddress, {
        stripUnknown: true
    })

    return dataResponse
}

export default updateAddressContactService;