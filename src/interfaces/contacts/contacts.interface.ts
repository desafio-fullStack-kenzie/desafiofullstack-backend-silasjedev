import { iAddressRequest, iAddressResponse } from "../addresses/addresses.interface"
import { iUserResponse } from "../users/users.interface"

interface iContactRequest{
    fullName: string
    email: string
    contact: string
    address?: iAddressRequest
}

interface iContactResponse{
    id: string
    fullName: string
    email: string
    contact: string
    isActive: boolean
    address?: iAddressResponse
    createdAt: string
    updatedAt: string
    user: iUserResponse
}

interface iContactUpdateRequest{
    fullName?: string
    email?: string
    contact?: string
    address?: iAddressRequest
}

export {iContactRequest, iContactResponse, iContactUpdateRequest}