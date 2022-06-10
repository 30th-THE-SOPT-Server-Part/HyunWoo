export interface User {
    id: number;
    email: string;
    createdAt: Date;
}

export interface UserCreateRequest {
    email: string;
}
