import { useEffect, useRef, useState } from "react";
import { ScrollView } from "react-native";
import { StaffCampaignMobilesViewModel } from "../../../objects/viewmodels/Campaigns/StaffCampaignMobilesViewModel";
import EndPont from "../../../utils/EndPoint";
import { mockStaffCampaigns } from "../../../utils/mock";

export default function useStaffCampaignsPage() {
    const scrollViewRef = useRef<ScrollView>(null);

    const [currentPage, setCurrentPage] = useState(1);
    const [maxPage, setMaxPage] = useState(100);

    const [loading, setLoading] = useState(false);

    const [campagins, setCampagins] = useState<StaffCampaignMobilesViewModel[]>([]);

    const onPageNavigation = (page: number) => {
        setCurrentPage(page);
        scrollViewRef.current?.scrollTo({
            y : 0
        });
    }
    useEffect(() => {
        setCampagins(mockStaffCampaigns);
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
        paging: {
            currentPage,
            maxPage,
            onPageNavigation
        },
        loading,
        data: {
            campagins
        }
    };
}