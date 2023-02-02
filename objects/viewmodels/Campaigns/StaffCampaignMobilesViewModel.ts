import { IssuerViewModel } from "../Users/issuers/IssuerViewModel";

export interface StaffCampaignMobilesViewModel {
    id: number;
    code: string;
    name: string;
    description: string;
    imageUrl: string;
    format: number;
    privacy: number;
    address: string;
    offlineStatus: number;
    startOfflineDate: Date;
    endOfflineDate: Date;
    onlineStatus: number;
    startOnlineDate: Date;
    endOnlineDate: Date
    createdDate: Date;
    updatedDate: Date;
    statusOfflineName: string;
    statusOnlineName: string;
    formatName: string;
    privacyName: string;
    issuers: IssuerViewModel[];
}