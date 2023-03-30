import { iContactResponse } from "../contacts/contacts.interface"
import { iImageResponse } from "../images/images.interface"

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
    imageUrl?: iImageResponse | null
    contacts?: iContactResponse | null
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



export {iUserRequest, iUserResponse, iUserUpdateRequest}
