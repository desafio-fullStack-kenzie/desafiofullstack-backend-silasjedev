import { iContactResponse } from "../contacts/contacts.interface"
import { iImageCreatedResponse, iImageResponse } from "../images/images.interface"

interface iUserRequest{
    fullName: string
    email: string
    password: string
    contact: string
    isAdmin: boolean
    imageUrl?: string
}

interface iUserResponse{
    id: string
    fullName: string
    email: string
    contact: string
    image: iImageResponse
    contacts: iContactResponse
    isAdmin: boolean
    isActive: boolean 
    createdAt: Date
    updatedAt: Date
}
interface iUserCreatedResponse{
    id: string
    fullName: string
    email: string
    contact: string
    image?: iImageCreatedResponse
    isAdmin: boolean
    isActive: boolean 
    createdAt: Date
    updatedAt: Date
}

interface iUserUpdateRequest{
    fullName?: string
    email?: string
    password?: string
    contact?: string
    isAdmin?: boolean
    imageUrl?: string
}



export {iUserRequest, iUserResponse, iUserUpdateRequest, iUserCreatedResponse}
