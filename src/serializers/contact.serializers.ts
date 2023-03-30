import * as yup from "yup";
import { SchemaOf } from "yup";
import { iContactRequest, iContactResponse, iContactUpdateRequest } from "../interfaces/contacts/contacts.interface";


const contactRequestSerializer: SchemaOf<iContactRequest> = yup.object().shape({
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
    email: yup.string().notRequired(),
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
    }).notRequired().nullable(),
    createdAt: yup.date().notRequired(),
    updatedAt: yup.date().notRequired(),
    user: yup.object({
        id: yup.string().notRequired(),
        fullName: yup.string().notRequired(),
    })
});

const contactUpdateSerializer: SchemaOf<iContactUpdateRequest> = yup.object().shape({
    fullName: yup.string().notRequired(),
    email: yup.string().email().notRequired(),
    contact: yup.string().notRequired(),
    address: yup.object({
        city: yup.string().notRequired(),
        state: yup.string().notRequired(),
        zipCode: yup.string().notRequired(),
        district: yup.string().notRequired(),
        number: yup.string().notRequired(),
    })
})


export { contactRequestSerializer ,contactResponseSerializer, contactUpdateSerializer }
