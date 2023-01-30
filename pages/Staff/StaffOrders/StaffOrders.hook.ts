import { useEffect, useRef, useState } from "react";
import { ScrollView } from "react-native";
import { BookViewModel } from "../../../objects/viewmodels/books/BookViewModel";
import { StaffCampaignMobilesViewModel } from "../../../objects/viewmodels/campaigns/StaffCampaignMobilesViewModel";
import { mockBooks, mockStaffCampaigns } from "../../../utils/mock";

export default function useStaffOrdersPage() {
    const scrollViewRef = useRef<ScrollView>(null);

    const [loading, setLoading] = useState(false);

    const [currentPage, setCurrentPage] = useState(1);
    const [maxPage, setMaxPage] = useState(100);

    const [search, setSearch] = useState("");
    const [orders, setOrders] = useState("");

    const onPageNavigation = (page: number) => {
        setCurrentPage(page);
        scrollViewRef.current?.scrollTo({
            y : 0
        });
    }

    useEffect(() => {
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
        ref :{
            scrollViewRef
        },
        paging : {
            currentPage,
            maxPage,
            onPageNavigation
        },
        data: {
        },
        input: {
            search:
            {
                value: search,
                set: setSearch
            }
        }
    }
}