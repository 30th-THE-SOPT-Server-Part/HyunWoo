import {UserCreateDto} from "../interface/user/UserCreateDto";
import User from "../models/User";
import {PostBaseResponseDto} from "../interface/common/PostBaseResponseDto";
import {UserUpdateDto} from "../interface/user/UserUpdateDto";
import {SchoolInfo} from "../interface/school/SchoolInfo";
import user from "../models/User";
import {UserResponseDto} from "../interface/user/UserResponseDto";

const createUser = async (userCreateDto: UserCreateDto): Promise<PostBaseResponseDto> => {
    try {
        const user = new User(
            {
                name: userCreateDto.name,
                phone: userCreateDto.phone,
                email: userCreateDto.email,
                age: userCreateDto.age,
                school: userCreateDto.school
            }
        )

        await user.save();

        const data = {
            _id: user.id
        }

        return data;
    } catch (e) {
        console.log(e);
        throw e;
    }
}

const updateUser = async (userId: string, userUpdateDto: UserUpdateDto) => {
    try {
        const updateUser = {
            name: userUpdateDto.name,
            phone: userUpdateDto.phone,
            email: userUpdateDto.email,
            age: userUpdateDto.age,
            school: userUpdateDto.school
        }

        await User.findByIdAndUpdate(userId, updateUser)
    } catch (e) {
        console.log(e)
        throw e
    }
}

const findUserById = async (userId: string) => {
    try {
        const user: UserResponseDto | null = await User.findById(userId);
        return user;
    } catch (e) {
        console.log(e)
        throw e
    }
}

const findByIdAndDelete = async (userId: string) => {
    try {
        await User.findByIdAndDelete(userId)
    } catch (e) {
        console.log(e)
        throw e
    }
}

export default {
    createUser,
    updateUser,
    findUserById,
    findByIdAndDelete
}
