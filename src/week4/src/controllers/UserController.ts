import {UserCreateDto} from "../interface/user/UserCreateDto";
import statusCode from "../modules/statusCode";
import util from "../modules/util";
import message from "../modules/responseMessage";
import UserService from "../services/UserService";
import {UserUpdateDto} from "../interface/user/UserUpdateDto";

const createUser = async (req: Request, res: Response) => {
    if (req.body) {
        const userCreateDto: UserCreateDto = req.body;

        try {
            const data = UserService.createUser(userCreateDto)

            res.status(statusCode.CREATED).send(
                util.fail(
                    statusCode.CREATED,
                    message.CREATE_USER_SUCCESS,
                    data
                )
            )
        } catch (e) {
            console.log(e);
            res.status(statusCode.INTERNAL_SERVER_ERROR).send(
                util.fail(
                    statusCode.INTERNAL_SERVER_ERROR,
                    message.INTERNAL_SERVER_ERROR,
                )
            )
        }
    }
}

const updateUser = async (req: Request, res: Response) => {
    const userUpdateDto: UserUpdateDto = req.body;
    const {userId} = req.params;

    try {
        await UserService.updateUser(userId, userUpdateDto);
        res.status(statusCode.NO_CONTENT).send();
    } catch (e) {
        console.log(e);
        res.status(statusCode.INTERNAL_SERVER_ERROR).send(
            util.fail(
                statusCode.INTERNAL_SERVER_ERROR,
                message.INTERNAL_SERVER_ERROR,
            )
        )
    }
}

const findUserById = async (req: Request, res: Response) => {
    const {userId} = req.params;

    try {
        const data = await UserService.findUserById(userId)

        if (!data) {
            return res.status(statusCode.NOT_FOUND).send(
                util.fail(
                    statusCode.NOT_FOUND,
                    message.NOT_FOUND,
                )
            )
        }

        return res.status(statusCode.OK).send(
            util.success(
                statusCode.OK,
                message.READ_USER_SUCCESS,
            )
        )
    } catch (e) {
        console.log(e);
        res.status(statusCode.INTERNAL_SERVER_ERROR).send(
            util.fail(
                statusCode.INTERNAL_SERVER_ERROR,
                message.INTERNAL_SERVER_ERROR,
            )
        )
    }
}

const findUserByIdAndDelete = async (req: Request, res: Response) => {
    const {userId} = req.params;

    try {
        await UserService.findByIdAndDelete(userId)
        res.status(statusCode.NO_CONTENT).send(
            util.success(
                statusCode.NO_CONTENT,
                message.DELETE_USER_SUCCESS
            )
        )
    } catch (e) {
        console.log(e);
        res.status(statusCode.INTERNAL_SERVER_ERROR).send(
            util.fail(
                statusCode.INTERNAL_SERVER_ERROR,
                message.INTERNAL_SERVER_ERROR,
            )
        )
    }
}

export default {
    createUser,
    updateUser,
    findUserById,
    findUserByIdAndDelete
}
