import AppDataSource from "../../data-source";
import { Image } from "../../entities/image.entity";
import { User } from "../../entities/user.entity";
import { iImageRequest } from "../../interfaces/images/images.interface";

const imageUpdateService = async (data: iImageRequest, userId: string): Promise<Image> => {
    const usersRep = AppDataSource.getRepository(User)
    const imageRep = AppDataSource.getRepository(Image)

    const findUser = await usersRep.findOne({
        where: {
            id: userId
        },
        relations:{
            image: true
        }
    })

    const findImg = await imageRep.findOneBy({
        id: findUser.image.id
    })

    const updateImg = imageRep.create({
        ...findImg,
        ...data
    })
    await imageRep.save(updateImg)
    
    return updateImg
}

export default imageUpdateService;