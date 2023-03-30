import * as  yup from "yup"
import {SchemaOf} from "yup"
import iSessionUserRequest from "../interfaces/session/session.interface"

const sessionUserSerializer: SchemaOf<iSessionUserRequest> = yup.object().shape({
    email: yup.string().required(),
    password: yup.string().required()
})

export default sessionUserSerializer