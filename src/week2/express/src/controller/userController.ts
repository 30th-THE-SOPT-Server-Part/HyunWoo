import {Body, Example, Get, Post, Route} from "tsoa";
import {User, UserCreateRequest} from "../model/User";

@Route("user")
export class UserController {
    @Get("")
    @Example<User>({
        createdAt: new Date(),
        email: "nunu.lee@gmail.com",
        id: 1,
    })
    public async getUserDefault(): Promise<User> {
        return {
            createdAt: new Date(),
            email: "nunu.lee@gmail.com",
            id: 1,
        };
    }

    @Get("{userId}")
    public async findUserById(userId: number): Promise<User> {
        return {
            createdAt: new Date(),
            email: "nunu.lee@gmail.com",
            id: userId,
        }
    }

    @Post()
    public async createUser(@Body() request: UserCreateRequest): Promise<User> {
        return {
            createdAt: new Date(),
            email: request.email,
            id: 666
        }
    }
}
