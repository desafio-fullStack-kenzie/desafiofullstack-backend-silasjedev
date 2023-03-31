interface iImageRequest{
    imageUrl: string
}

interface iImageResponse{
    id: string
    imageUrl: string
    createdAt: Date
    updatedAt: Date
}
interface iImageCreatedResponse{
    imageUrl: string
    createdAt: Date
}


export {iImageRequest, iImageResponse, iImageCreatedResponse}