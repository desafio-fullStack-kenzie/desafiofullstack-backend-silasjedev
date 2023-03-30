import AppDataSource from "../../data-source";
import { User } from "../../entities/user.entity";
import { iUserResponse, iUserUpdateRequest } from "../../interfaces/users/users.interface";
import { userResponseSerializer } from "../../serializers/user.serializers";

const updateUserService = async (userId: string, dataUpdate: iUserUpdateRequest): Promise<iUserResponse> => {
    const usersRep = AppDataSource.getRepository(User)
    const findUser = await usersRep.findOne({
        where: {
            id: userId,
        },
        relations: {
            image: true
        }
    })

    const updateUser = usersRep.create({
        ...findUser,
        ...dataUpdate
    })
    await usersRep.save(updateUser)
    
    const dataResponse = userResponseSerializer.validate(updateUser, {
        stripUnknown: true
    })

    return dataResponse
}

export default updateUserService;