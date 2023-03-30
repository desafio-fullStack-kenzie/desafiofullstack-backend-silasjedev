interface iImageRequest{
    imageUrl: string
}

interface iImageResponse{
    id: string
    imageUrl: string
    createdAt: string
    updatedAt: string
}

export {iImageRequest, iImageResponse}