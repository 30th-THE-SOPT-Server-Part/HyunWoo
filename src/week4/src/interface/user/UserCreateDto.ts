import {SchoolInfo} from "../school/SchoolInfo";

export interface UserCreateDto {
    name: string,
    phone: string,
    email: string,
    age?: string,
    school: SchoolInfo;
}
