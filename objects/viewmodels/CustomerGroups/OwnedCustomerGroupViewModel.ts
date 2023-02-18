import { BasicGroupViewModel } from "../Groups/BasicGroupViewModel";
import { CustomerUserViewModel } from "../Users/customers/CustomerUserViewModel";

export interface OwnedCustomerGroupViewModel {
    id?: number;
    customerId?: string;
    customer?: CustomerUserViewModel;
    groups?: BasicGroupViewModel[];
  }