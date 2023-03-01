import { AddressRequestModel } from "../address/AddressRequestModel";

export interface UpdateUserRequestModel {
    id: string;
    name: string;
    email: string;
    phone: string;
    addressRequest : AddressRequestModel;
    imageUrl: string;
    role?: number;
    status?: boolean;
}