import { iContactResponse } from "../contacts/contacts.interface"
import { iImageResponse } from "../images/images.interface"

interface iUserRequest{
    fullName: string
    email: string
    password: string
    contact: string
    isAdmin: boolean
    image?: string
}

interface iUserResponse{
    id: string
    fullName: string
    email: string
    contact: string
    image?: iImageResponse | null
    contacts?: iContactResponse
    isAdmin: boolean
    isActive: boolean 
    createdAt: string
    updatedAt: string
}

interface iUserUpdateRequest{
    fullName?: string
    email?: string
    password?: string
    contact?: string
    isAdmin?: boolean
    image?: string
}

export {iUserRequest, iUserResponse, iUserUpdateRequest}
