import { useState } from "react";
import useAppContext from "../../../context/Context";

export default function useCartPage() {
    const { cart } = useAppContext();
    const [seletedCampaignId, setSeletedCampaignId] = useState(0);
    const getTotalPrice = () => {
        let totalPrice = 0;
        cart.find(c => seletedCampaignId == c.campaign.id as number)?.issuersInCart.map(i => i.productsInCart.map(product => {
            let productPrice = product.salePrice;
            if (product.audioChecked) {
                productPrice += product.audioExtraPrice;
            }
            if (product.pdfChecked) {
                productPrice += product.pdfExtraPrice;
            }
            productPrice *= product.quantity;
            totalPrice += productPrice;
        }));
        return totalPrice;
    }
    return {
        getTotalPrice,
        input: {
            seletedCampaignId: {
                value: seletedCampaignId,
                set: setSeletedCampaignId
            }
        }
    }
}