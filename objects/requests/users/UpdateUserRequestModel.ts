export interface UpdateUserRequestModel {
    id: string;
    name: string;
    email: string;
    phone: string;
    address: string;
    imageUrl: string;
    role?: number;
    status?: boolean;
}