import { BasicOrganizationViewModel } from "../Organizations/BasicOrganizationViewModel";
import { CustomerUserViewModel } from "../Users/customers/CustomerUserViewModel";

export interface OwnedCustomerOrganizationViewModel {
    id?: number;
    customerId?: string;
    customer?: CustomerUserViewModel;
    organizations?: BasicOrganizationViewModel[];
}