import AppDataSource from "../../data-source";
import { Image } from "../../entities/image.entity";
import { User } from "../../entities/user.entity";
import AppError from "../../errors/AppError";
import { iUserRequest } from "../../interfaces/users/users.interface";
import { userResponseSerializer } from "../../serializers/user.serializers";

const createUserService = async (data: iUserRequest) => {
    const usersRep = AppDataSource.getRepository(User)
    const imagesRep = AppDataSource.getRepository(Image)

    let image = {
        imageUrl: data.imageUrl
    }

    if(data.imageUrl){
        const findImg = await imagesRep.findOne({
            where: {
                imageUrl: data.imageUrl
            }
        })

        if(findImg){
            throw new AppError("Image already exists", 409)
        }

        image = imagesRep.create({
            imageUrl: data.imageUrl
        })
        await imagesRep.save(image)
    }

    const findImg = await imagesRep.findOneBy({
        imageUrl: data.imageUrl
    })

    const createUser = usersRep.create({...data, image: findImg})
    await usersRep.save(createUser)

    const dataResponse = await userResponseSerializer.validate(createUser, {
        stripUnknown: true
    })

    console.log(dataResponse)
    return dataResponse
}

export default createUserService;