import { BasicOrganizationViewModel } from "../organizations/BasicOrganizationViewModel";

export interface CampaignOrganizationsViewModel {
    id?: number;
    organizationId?: number;
    campaignId?: number;
    organization: BasicOrganizationViewModel;
}