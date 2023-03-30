interface iAddressRequest {
    city: string
    state: string
    zipCode: string
    district: string
    number: string
}

interface iAddressResponse {
    id: string
    city: string
    state: string
    zipCode: string
    district: string
    number: string
    createdAt: Date
    updatedAt: Date
}

interface iAddressUpdateRequest {
    city?: string
    state?: string
    zipCode?: string
    district?: string
    number?: string
}

export {iAddressRequest, iAddressResponse, iAddressUpdateRequest}