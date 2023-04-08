import { MobileBookProductViewModel } from "../viewmodels/BookProduct/Mobile/MobileBookProductViewModel";
import { BasicCampaignViewModel } from "../viewmodels/Campaigns/BasicCampaignViewModel";
import { IssuerViewModel } from "../viewmodels/Users/issuers/IssuerViewModel";

export interface ProductInCart {
    id: string;
    quantity: number;
    title: string,
    imageUrl: string;
    pdfChecked: boolean;
    audioChecked: boolean;
    withPdf: boolean;
    withAudio: boolean;
    salePrice: number;
    pdfExtraPrice: number;
    audioExtraPrice: number;
    coverPrice?: number;
    discount?: number;
}