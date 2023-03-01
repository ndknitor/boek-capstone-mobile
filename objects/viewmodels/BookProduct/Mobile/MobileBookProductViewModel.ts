import { BookProductItemViewModel } from "../../BookProductItems/BookProductItemViewModel";
import { BookViewModel } from "../../Books/BookViewModel";
import { BasicCampaignViewModel } from "../../Campaigns/BasicCampaignViewModel";
import { IssuerViewModel } from "../../Users/issuers/IssuerViewModel";
import { OtherMobileBookProductsViewModel } from "./OtherMobileBookProductsViewModel";
import { UnhierarchicalBookProductsViewModel } from "./UnhierarchicalBookProductsViewModel";

export interface MobileBookProductViewModel {
    id: string;
    bookId?: number;
    genreId?: number;
    campaignId?: number;
    issuerId?: string;
    title: string;
    description: string;
    imageUrl: string;
    saleQuantity: number;
    discount?: number;
    salePrice: number;
    type?: number;
    typeName: string;
    format?: number;
    formatName: string;
    withPdf?: boolean;
    pdfExtraPrice?: number;
    displayPdfIndex?: number;
    withAudio?: boolean;
    displayAudioIndex?: number;
    audioExtraPrice?: number;
    status?: number;
    statusName: string;
    note: string;
    createdDate?: Date;
    updatedDate?: Date;
    campaign?: BasicCampaignViewModel;
    book?: BookViewModel;
    issuer?: IssuerViewModel;
    bookProductItems?: BookProductItemViewModel[];
    otherMobileBookProducts?: OtherMobileBookProductsViewModel[];
    unhierarchicalBookProducts?: UnhierarchicalBookProductsViewModel[];
}