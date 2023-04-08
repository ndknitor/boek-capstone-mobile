import { createContext, Dispatch, SetStateAction, useContext, useEffect, useState } from "react"
import { CampaignInCart } from "../objects/models/CampaignInCart";
import { ProductInCart } from "../objects/models/ProductInCart";
import { StaffProductInCart } from "../objects/models/StaffProductInCart";
import { MobileBookProductViewModel } from "../objects/viewmodels/BookProduct/Mobile/MobileBookProductViewModel";
import { BasicCampaignViewModel } from "../objects/viewmodels/Campaigns/BasicCampaignViewModel";
import { IssuerViewModel } from "../objects/viewmodels/Users/issuers/IssuerViewModel";
import { LoginViewModel } from "../objects/viewmodels/Users/LoginViewModel";

export interface Store {
    user: LoginViewModel | undefined;
    setUser: Dispatch<SetStateAction<LoginViewModel | undefined>>;

    totalProductQuantity: number;
    setTotalProductQuantity: Dispatch<SetStateAction<number>>;

    staffCart: StaffProductInCart[];
    setStaffCart: Dispatch<SetStateAction<StaffProductInCart[]>>;

    cart: CampaignInCart[];
    setCart: Dispatch<SetStateAction<CampaignInCart[]>>;
    addToCart: (product: MobileBookProductViewModel, quantity: number) => void;
    removeFromCart: (campaignId: number, issuerId: string, productId: string) => void;
    resetCart: () => void;
}
export const useProvider: () => Store = () => {
    const [user, setUser] = useState<LoginViewModel>();
    const [totalProductQuantity, setTotalProductQuantity] = useState(0);
    const [cart, setCart] = useState<CampaignInCart[]>([]);
    const [staffCart, setStaffCart] = useState<StaffProductInCart[]>([]);
    const addToCart = (product: MobileBookProductViewModel, quantity: number) => {
        let totalQuantity = totalProductQuantity + quantity;
        const campaign = cart.find(c => c.campaign.id == product.campaignId);
        if (!campaign) {
            setCart([
                ...cart,
                {
                    campaign: product.campaign as BasicCampaignViewModel,
                    issuersInCart: [
                        {
                            issuer: product.issuer as IssuerViewModel,
                            productsInCart: [
                                {
                                    id: product.id,
                                    imageUrl: product.imageUrl,
                                    quantity: 1,
                                    title: product.title,
                                    withAudio: product.withAudio || false,
                                    withPdf: product.withPdf || false,
                                    salePrice: product.salePrice,
                                    discount: product.discount,
                                    coverPrice: product.book?.coverPrice,
                                    pdfChecked: false,
                                    audioChecked: false,
                                    audioExtraPrice: product.audioExtraPrice as number,
                                    pdfExtraPrice: product.pdfExtraPrice as number
                                }
                            ]
                        }
                    ]
                }
            ]);
            setTotalProductQuantity(totalQuantity);
        }
        else {
            //const cloneCart = Object.assign({}, cart);
            const issuer = campaign.issuersInCart.find(i => i.issuer.id == product.issuerId);
            if (issuer) {
                const productInCart = issuer.productsInCart.find(p => p.id == product.id);
                if (productInCart) {
                    productInCart.quantity++;
                    console.log(campaign.issuersInCart[0].productsInCart);
                    setTotalProductQuantity(totalQuantity);
                }
            }
            setCart(cart);
        }
    }
    const removeFromCart = (campaignId: number, issuerId: string, productId: string) => {
        let cloneCart: CampaignInCart[] = Object.create(cart);
        const campaign = cloneCart.find(c => c.campaign.id == campaignId);
        if (campaign) {
            const issuer = campaign.issuersInCart.find(i => i.issuer.id == issuerId);
            if (issuer) {
                const removeProductInCart = cloneCart.find(c => c.campaign.id == campaignId)?.issuersInCart.find(i => i.issuer.id == issuerId)?.productsInCart.find(p => p.id == productId);
                if (removeProductInCart) {
                    setTotalProductQuantity(totalProductQuantity - removeProductInCart.quantity);
                    issuer.productsInCart = issuer.productsInCart.filter(p => p.id != removeProductInCart.id);
                    if (issuer.productsInCart.length == 0) {
                        campaign.issuersInCart = campaign.issuersInCart.filter(i => i.issuer.id != issuer.issuer.id);
                        if (campaign.issuersInCart.length == 0) {
                            cloneCart = cloneCart.filter(c => c.campaign.id != campaignId);
                        }
                    }
                }
            }
        }
        setCart(cloneCart);
    }

    // const addToCart = (product: MobileBookProductViewModel, quantity: number) => {
    //     const productInCart = cart.find(p => p.id == product.id);
    //     let cartProduct: MobileBookProductViewModel = product;
    //     let cartQuantity = 0;
    //     let addTotalQuantity = 0;

    //     cartQuantity += quantity;
    //     addTotalQuantity += quantity;

    //     if (productInCart) {
    //         cartProduct = productInCart.product;
    //         cartQuantity = productInCart.quantity + quantity;
    //         const index = cart.indexOf(productInCart);
    //         setCart([
    //             ...cart.slice(0, index),
    //             { id: cartProduct.id, product: cartProduct, quantity: cartQuantity, checked: false },
    //             ...cart.slice(index + 1)
    //         ]);
    //     }
    //     else {
    //         setCart([...cart, { id: cartProduct.id, product: cartProduct, quantity: cartQuantity, checked: false }]);
    //     }
    //     setTotalProductQuantity(totalProductQuantity + addTotalQuantity);
    // }
    // const removeFromCart = (productId: string) => {
    //     const removeProductInCart = cart.find(p => p.id == productId);
    //     if (removeProductInCart) {
    //         setTotalProductQuantity(totalProductQuantity - removeProductInCart.quantity);
    //         setCart(cart.filter(p => p.id != productId));
    //     }
    // }


    return {
        user,
        setUser,

        totalProductQuantity,
        setTotalProductQuantity,

        staffCart,
        setStaffCart,

        cart,
        setCart,
        addToCart,
        removeFromCart,
        resetCart: () => {
            setCart([]);
            setTotalProductQuantity(0);
        }
    };

}
export const Context = createContext<Store>({} as Store);
export default function useAppContext() {
    return useContext(Context);
}

