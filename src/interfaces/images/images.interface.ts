interface iImageRequest{
    imageUrl: string
}

interface iImageResponse{
    id: string
    imageUrl: string
    createdAt: Date
    updatedAt: Date
}

export {iImageRequest, iImageResponse}