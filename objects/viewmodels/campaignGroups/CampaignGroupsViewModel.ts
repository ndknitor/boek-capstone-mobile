import { BasicGroupViewModel } from "../groups/BasicGroupViewModel";

export interface CampaignGroupsViewModel {
    id: number;
    campaignId?: number;
    groupId?: number;
    group: BasicGroupViewModel;
}