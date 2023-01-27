import { CampaignCommissionsViewModel } from "../campaignCommissions/CampaignCommissionsViewModel";
import { CampaignGroupsViewModel } from "../campaignGroups/CampaignGroupsViewModel";
import { CampaignOrganizationsViewModel } from "../campaignOrganizations/CampaignOrganizationsViewModel";
import { CampaignParticipationsViewModel } from "../participants/CampaignParticipationsViewModel";

export interface CampaignViewModel {
    id?: number;
    code?: string;
    name: string;
    description: string;
    imageUrl: string;
    format?: number;
    privacy?: number;
    address: string;
    offlineStatus?: number;
    startOfflineDate?: Date;
    endOfflineDate?: Date;
    onlineStatus?: number;
    startOnlineDate?: Date;
    endOnlineDate?: Date;
    createdDate?: Date;
    updatedDate?: Date;
    statusOfflineName: string;
    statusOnlineName: string;
    formatName: string;
    privacyName: string;
    sort: string;
    campaignCommissions: CampaignCommissionsViewModel[];
    campaignOrganizations: CampaignOrganizationsViewModel[];
    campaignGroups: CampaignGroupsViewModel[];
    participants: CampaignParticipationsViewModel[];
}