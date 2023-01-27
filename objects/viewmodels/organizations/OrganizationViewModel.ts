import { BasicCampaignViewModel } from "../campaigns/BasicCampaignViewModel";
import { CustomerUserViewModel } from "../users/customers/CustomerUserViewModel";

export interface OrganizationViewModel {
    id?: number;
    name: string;
    address: string;
    phone: string;
    imageUrl: string;
    customers: CustomerUserViewModel[];
    campaigns: BasicCampaignViewModel[];
}