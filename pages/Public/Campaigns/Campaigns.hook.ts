import { useCallback, useEffect, useState } from "react";
import appxios from "../../../components/AxiosInterceptor";
import { CustomerCampaignMobileViewModel } from "../../../objects/viewmodels/Campaigns/Mobile/CustomerCampaignMobileViewModel";
import { UnhierarchicalCustomerCampaignMobileViewModel } from "../../../objects/viewmodels/Campaigns/Mobile/UnhierarchicalCustomerCampaignMobileViewModel";
import endPont from "../../../utils/endPoints";

export default function useCampaignsPage() {
    const onGoingTitle = "Bắt đầu hội sách";
    const [loading, setLoading] = useState(false);
    const [refreshing, setRefreshing] = useState(false);
    const [upCampaginsContainer, setUpCampaginsContainer] = useState<CustomerCampaignMobileViewModel>();
    const [onGoingCampagins, setOnGoingCampagins] = useState<UnhierarchicalCustomerCampaignMobileViewModel>();

    const onRefresh = useCallback(async () => {
        setRefreshing(true);
        await getCampaigns();
        setRefreshing(false);
    }, []);

    const getCampaigns = async () => {
        setLoading(true);
        await appxios.get<CustomerCampaignMobileViewModel>(endPont.public.campaigns.mobile.customers)
            .then(response => {
                //console.log(response.data);
                const data = response.data;
                const onGoing = data.unhierarchicalCustomerCampaigns.find(c => c.title == "Hội sách diễn ra");
                if (onGoing) {
                    setOnGoingCampagins(onGoing);
                    data.unhierarchicalCustomerCampaigns = data.unhierarchicalCustomerCampaigns.filter(c => c != onGoing);
                }
                setUpCampaginsContainer(data);
            })
            .finally(() => {
                setLoading(false);
            });
    }

    useEffect(() => {
        getCampaigns();
    }, []);
    return {
        loading,
        scrollViewRefresh: {
            refreshing,
            onRefresh
        },
        const: {
            onGoingTitle
        },
        data: {
            onGoingCampagins,
            upCampaginsContainer
        }
    }
}