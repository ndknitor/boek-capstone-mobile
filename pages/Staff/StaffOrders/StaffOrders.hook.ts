import { useEffect, useRef, useState } from "react";
import { ScrollView } from "react-native";
import DrawerLayout from "react-native-drawer-layout";
import { BookViewModel } from "../../../objects/viewmodels/Books/BookViewModel";
import { StaffCampaignMobilesViewModel } from "../../../objects/viewmodels/Campaigns/StaffCampaignMobilesViewModel";
import { mockBooks, mockStaffCampaigns } from "../../../utils/mock";

export default function useStaffOrdersPage() {
    const scrollViewRef = useRef<ScrollView>(null);
    const drawerLayoutRef = useRef<DrawerLayout>(null);

    const [loading, setLoading] = useState(false);

    const [currentPage, setCurrentPage] = useState(1);
    const [maxPage, setMaxPage] = useState(100);

    const [search, setSearch] = useState("");
    const [orders, setOrders] = useState("");

    const onPageNavigation = (page: number) => {
        setCurrentPage(page);
        scrollViewRef.current?.scrollTo({
            y: 0
        });
    }
    const onOrderDetailPress = () => {
        drawerLayoutRef.current?.openDrawer();
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
        ref: {
            scrollViewRef,
            drawerLayoutRef
        },
        paging: {
            currentPage,
            maxPage,
            onPageNavigation
        },
        event: {
            onOrderDetailPress
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