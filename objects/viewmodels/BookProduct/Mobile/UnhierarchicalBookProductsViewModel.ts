import { MobileBookProductsViewModel } from "./MobileBookProductsViewModel";

export interface UnhierarchicalBookProductsViewModel
{
    campaignId?: number;
    title : string;
    bookProducts : MobileBookProductsViewModel[];
}