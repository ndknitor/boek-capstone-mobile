import { useEffect, useRef, useState } from "react";
import { ScrollView } from "react-native";
import appxios from "../../../components/AxiosInterceptor";
import { BaseResponsePagingModel } from "../../../objects/responses/BaseResponsePagingModel";
import { HierarchicalStaffCampaignsViewModel } from "../../../objects/viewmodels/Campaigns/HierarchicalStaffCampaignsViewModel";
import { StaffCampaignMobilesViewModel } from "../../../objects/viewmodels/Campaigns/StaffCampaignMobilesViewModel";
import { OrderViewModel } from "../../../objects/viewmodels/Orders/OrderViewModel";
import endPont from "../../../utils/endPoints";
import EndPont from "../../../utils/endPoints";
import { mockStaffCampaigns } from "../../../utils/mock";

export default function useStaffCampaignsPage() {
    const scrollViewRef = useRef<ScrollView>(null);

    const [loading, setLoading] = useState(false);

    const [campagins, setCampagins] = useState<HierarchicalStaffCampaignsViewModel[]>([]);

    const getCampaigns = () => {
        setLoading(true);
        appxios.get<HierarchicalStaffCampaignsViewModel[]>(endPont.staff.campaigns).then(response => {
            setCampagins(response.data);
        }).finally(() => {
            setLoading(false);
        });
    }

    useEffect(() => {
        getCampaigns();
        //setCampagins(mockStaffCampaigns);
        // setLoading(true);
        // appxios.get(EndPont.public.campaigns.mobile.staffs)
        //     .then(resposne => {
        //         console.log(resposne.data);

        //         //setupComingCampagins(resposne.data[0].campaigns);
        //     })
        //     .finally(() =>
        //     {
        //         setLoading(false);
        //     });
    }, []);
    return {
        ref: {
            scrollViewRef
        },
        loading,
        data: {
            campagins
        }
    };
}