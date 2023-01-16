import { CampaignCommissionsRequest } from "../campaignCommissions/CampaignCommissionsRequest";

export interface CreateCampaignRequest {
    name: string;
    description: string;
    imageUrl: string;
    address: string;
    privacy: number;
    startOfflineDate?: Date;
    endOfflineDate?: Date;
    startOnlineDate?: Date;
    endOnlineDate?: Date;
    campaignCommissions: CampaignCommissionsRequest[];
    organizations: number[];
    groups: number[];
}