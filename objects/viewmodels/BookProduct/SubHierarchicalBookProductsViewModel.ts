import { GenreViewModel } from "../Genres/GenreViewModel";
import { UserViewModel } from "../Users/UserViewModel";
import { MobileBookProductsViewModel } from "./Mobile/MobileBookProductsViewModel";

export interface SubHierarchicalBookProductsViewModel {
    subTitle: string;
    genreId?: number;
    issuerId?: string;
    genre?: GenreViewModel;
    issuer?: UserViewModel;
    bookProducts?: MobileBookProductsViewModel[];
}