import AppDataSource from "../../data-source";
import { User } from "../../entities/user.entity";
import { iUserResponse } from "../../interfaces/users/users.interface";
import { listUsersResponseSerialize } from "../../serializers/user.serializers";

const listAllUsersService = async (): Promise<iUserResponse[]> => {
    const usersRep = AppDataSource.getRepository(User)

    const listUsers = await usersRep.find({
        where: {
            isActive: true,
        },
        relations:{
            image: true
        }
    })

    const dataResponse = listUsersResponseSerialize.validate(listUsers, {
        stripUnknown: true
    })

    return dataResponse
}

export default listAllUsersService;