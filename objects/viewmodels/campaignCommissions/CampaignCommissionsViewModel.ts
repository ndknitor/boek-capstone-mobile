import { GenreViewModel } from "../genres/GenreViewModel";

export interface CampaignCommissionsViewModel {
    id?: number;
    campaignId?: number;
    genreId?: number;
    commission?: number;
    genre: GenreViewModel;
}