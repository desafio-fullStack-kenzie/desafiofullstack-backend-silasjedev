import * as yup from "yup";
import { SchemaOf } from "yup";
import { iImageRequest} from "../interfaces/images/images.interface";
import { iUserRequest, iUserResponse, iUserUpdateRequest } from "../interfaces/users/users.interface";

const userRequestSerializer: SchemaOf<iUserRequest> = yup.object().shape({
    fullName: yup.string().required(),
    email: yup.string().email().required(),
    password: yup.string().required(),
    contact: yup.string().required(),
    isAdmin: yup.boolean().required(),
    imageUrl: yup.string().notRequired(),
});


const userResponseSerializer: SchemaOf<iUserResponse> = yup.object().shape({
    id: yup.string().notRequired(),
    fullName: yup.string().notRequired(),
    email: yup.string().email().notRequired(),
    contact: yup.string().notRequired(),
    image: yup.object({
        id: yup.string().notRequired(),
        imageUrl: yup.string().notRequired(),
        createdAt: yup.date().notRequired(),
        updatedAt: yup.date().notRequired(),
    }).notRequired(),
    contacts: yup.object({
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
        }).notRequired().nullable(), 
    }).notRequired().nullable(),
    isAdmin: yup.boolean().notRequired(),
    isActive: yup.boolean().notRequired(),
    createdAt: yup.date().notRequired(),
    updatedAt: yup.date().notRequired(),
});

const userUpdateSerializer: SchemaOf<iUserUpdateRequest> = yup.object().shape({
    fullName: yup.string().notRequired(),
    email: yup.string().email().notRequired(),
    password: yup.string().notRequired(),
    contact: yup.string().notRequired(),
    isAdmin: yup.boolean().notRequired(),
    imageUrl: yup.string().notRequired(),
})

const imageUpdateSerializer: SchemaOf<iImageRequest> = yup.object().shape({
    imageUrl: yup.string().required()
})

const listUsersResponseSerialize: SchemaOf<iUserResponse[]> = yup.array(userResponseSerializer)

export {userRequestSerializer, userResponseSerializer, userUpdateSerializer, listUsersResponseSerialize, imageUpdateSerializer}