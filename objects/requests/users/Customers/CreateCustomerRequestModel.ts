import { AddressRequestModel } from "../../address/AddressRequestModel";

export interface CreateCustomerRequestModel {
    idToken: string;
    name?: string;
    gender?: boolean;
    address?: AddressRequestModel;
    Dob?: Date;
    phone?: string;
    OrganizationIds?: number[];
    groupIds?: number[];
}