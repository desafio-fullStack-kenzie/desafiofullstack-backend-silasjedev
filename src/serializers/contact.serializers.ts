import * as yup from "yup";
import { SchemaOf } from "yup";
import { iAddressResponse } from "../interfaces/addresses/addresses.interface";
import { iContactRequestYup, iContactResponse, iContactUpdateRequest } from "../interfaces/contacts/contacts.interface";


const contactRequestSerializer: SchemaOf<iContactRequestYup> = yup.object().shape({
    fullName: yup.string().required(),
    email: yup.string().email().required(),
    contact: yup.string().required(),
    address: yup.object({
        city: yup.string().required(),
        state: yup.string().required(),
        zipCode: yup.string().required(),
        district: yup.string().required(),
        number: yup.string().required(),
    })
})


const contactResponseSerializer: SchemaOf<iContactResponse> = yup.object().shape({
    id: yup.string().notRequired(),
    fullName: yup.string().notRequired(),
    email: yup.string().email().notRequired(),
    contact: yup.string().notRequired(),
    isActive: yup.boolean().notRequired(),
    address: yup.object({
        id: yup.string().notRequired(),
        city: yup.string().notRequired(),
        state: yup.string().notRequired(),
        zipCode: yup.string().notRequired(),
        district: yup.string().notRequired(),
        number: yup.string().notRequired(),
        createdAt: yup.date().notRequired(),
        updatedAt: yup.date().notRequired()
    }).notRequired(),
    createdAt: yup.date().notRequired(),
    updatedAt: yup.date().notRequired(),
    user: yup.object({
        id: yup.string().notRequired(),
        fullName: yup.string().notRequired(),
        email: yup.string().email().notRequired(),
    })
});

const contactUpdateSerializer: SchemaOf<iContactUpdateRequest> = yup.object().shape({
    fullName: yup.string().notRequired(),
    email: yup.string().email().notRequired(),
    contact: yup.string().notRequired(),
    updatedAt: yup.date().notRequired(),
})

const addressUpdateSerializer: SchemaOf<iAddressResponse> = yup.object().shape({
    id: yup.string().notRequired(),
    city: yup.string().notRequired(),
    state: yup.string().notRequired(),
    zipCode: yup.string().notRequired(),
    district: yup.string().notRequired(),
    number: yup.string().notRequired(),
    updatedAt: yup.date().notRequired(),
    createdAt: yup.date().notRequired()
})

const listContactsResponseSerializer: SchemaOf<iContactResponse[]> = yup.array(contactResponseSerializer)


export { contactRequestSerializer ,contactResponseSerializer, contactUpdateSerializer, listContactsResponseSerializer, addressUpdateSerializer }
