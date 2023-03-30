import { iAddressRequest, iAddressResponse } from "../addresses/addresses.interface"

interface iContactRequest{
    fullName: string
    email: string
    contact: string
    address?: iAddressRequest
}

interface iContactUserResponse{
    id: string
    fullName: string
}

interface iContactResponse{
    id: string
    fullName: string
    email: string
    contact: string
    isActive: boolean
    address?: iAddressResponse
    createdAt: Date
    updatedAt: Date
    user: iContactUserResponse
}



interface iContactUpdateRequest{
    fullName?: string
    email?: string
    contact?: string
    address?: iAddressRequest
}

export {iContactRequest, iContactResponse, iContactUpdateRequest}