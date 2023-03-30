import { Request, Response } from "express";
import { iAddressUpdateRequest } from "../../interfaces/addresses/addresses.interface";
import { iContactRequest, iContactUpdateRequest } from "../../interfaces/contacts/contacts.interface";
import updateAddressContactService from "../../services/contacts/addressUpdate.service";
import createContactService from "../../services/contacts/createContact.service";
import deleteContactService from "../../services/contacts/deleteContact.service";
import listAllContactsService from "../../services/contacts/listAllContacts.service";
import listContactService from "../../services/contacts/listContact.service";
import updateContactService from "../../services/contacts/updateContact.service";

const createContactController = async (req: Request, res: Response) => {
    const contactData: iContactRequest = req.body
    const contact = await createContactService(contactData)
    return res.status(201).json(contact);
}

const listAllContactsController = async (req: Request, res: Response) => {
    const listContacts = await listAllContactsService()
    return res.status(200).json(listContacts)
}

const listContactsController = async (req: Request, res: Response) => {
    const contactId = req.params.id
    const contact = await listContactService(contactId)
    return res.status(200).json(contact)
}

const updateContactController = async (req: Request, res: Response) => {
    const contactId = req.params.id
    const dataUpdate: iContactUpdateRequest = req.body
    const contactUpdate = await updateContactService(contactId, dataUpdate)
    return res.status(200).json(contactUpdate)
}

const updateAddressContactController = async (req: Request, res: Response) => {
    const userId: string = req.params.id
    const addressBody: iAddressUpdateRequest = req.body
    const updateAddress = await updateAddressContactService(addressBody, userId)
    return res.status(200).json(updateAddress)
}

const deleteContactController = async (req: Request, res: Response) => {
    const contactId: string = req.params.id
    const deleteContact = await deleteContactService(contactId)
    return res.status(204).json(deleteContact)
}

export { createContactController, listAllContactsController, updateContactController, deleteContactController, listContactsController, updateAddressContactController}
