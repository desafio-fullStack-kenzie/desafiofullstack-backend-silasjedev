import AppDataSource from "../../data-source";
import { User } from "../../entities/user.entity";
import { iUserResponse } from "../../interfaces/users/users.interface";
import { userResponseSerializer } from "../../serializers/user.serializers";

const listUserService = async (userId: string): Promise<iUserResponse> => {
    const usersRep = AppDataSource.getRepository(User)

    const user = await usersRep.findOne({
        where: {
            id: userId
        },
        relations:{
            image: true
        }
    })

    const dataResponse = userResponseSerializer.validate(user, {
        stripUnknown: true
    })

    return dataResponse
}

export default listUserService;