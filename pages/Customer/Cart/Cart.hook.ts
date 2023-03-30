import useAppContext from "../../../context/Context";
import { ProductInCart } from "../../../objects/models/ProductInCart";
import { BasicCampaignViewModel } from "../../../objects/viewmodels/Campaigns/BasicCampaignViewModel";
import { IssuerViewModel } from "../../../objects/viewmodels/Users/issuers/IssuerViewModel";

export default function useCartPage() {
    const { cart, addToCart } = useAppContext();

    const initExpanded = (campaign: BasicCampaignViewModel) => {
        const current = new Date();
        if (campaign.endDate! <= current) {
            return true;
        }
        return false;
    }
    const getCampagins = () => {
        const result: BasicCampaignViewModel[] =
            cart
                .filter(p => p.product.campaignId).map(p => p.product.campaign as BasicCampaignViewModel)
                .filter((item, index, self) => index === self.findIndex((t) => t.id === item.id));
        return result;
    }
    const getIssuerByCampaignId = (campaignId: number) => {
        const issuers = cart
            .filter(p => p.product.campaignId == campaignId).map(p => p.product.issuer as IssuerViewModel)
            .filter((item, index, self) => index === self.findIndex((t) => t.id === item.id))
        return issuers;
    }
    const getProuctByIssuerIdAndCampaginId = (issuerId: string, campaignId: number) => {
        return cart.filter(p => p.product.issuerId == issuerId && p.product.campaignId == campaignId);
    }

    const onQuantityChange = (product: ProductInCart, quantity: number) => {
        const addQuantity = quantity - product.quantity;
        addToCart(product.product, addQuantity);
    }

    return {
        getCampagins,
        getIssuerByCampaignId,
        getProuctByIssuerIdAndCampaginId,
        initExpanded,
        event: {
            onQuantityChange
        }
    }
}