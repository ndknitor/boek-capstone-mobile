import { useEffect, useState } from "react";
import { StaffCampaignMobilesViewModel } from "../../../objects/viewmodels/campaigns/StaffCampaignMobilesViewModel";
import EndPont from "../../../utils/EndPoint";
import { mockStaffCampaigns } from "../../../utils/mock";

export default function useStaffCampaignsPage() {
    const [loading, setLoading] = useState(false);

    const [onGoingCampagins, setOnGoingCampagins] = useState<StaffCampaignMobilesViewModel[]>([]);
    const [upComingCampagins, setUpComingCampagins] = useState<StaffCampaignMobilesViewModel[]>([]);

    useEffect(() => {
        setOnGoingCampagins(mockStaffCampaigns.slice(0,4));
        setUpComingCampagins(mockStaffCampaigns.slice(0,4));
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
        loading,
        data: {
            onGoingCampagins,
            upComingCampagins
        }
    };
}