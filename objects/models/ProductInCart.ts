import { MobileBookProductViewModel } from "../viewmodels/BookProduct/Mobile/MobileBookProductViewModel";

export interface ProductInCart {
    id: string;
    quantity: number;
    product: MobileBookProductViewModel;
}