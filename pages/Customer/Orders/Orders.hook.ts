import { useRef, useState } from "react";
import { ScrollView } from "react-native";

export default function useOrdersPage() {
    const ordersScrollViewRef = useRef<ScrollView>(null);

    const [loading, setLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [maxPage, setMaxPage] = useState(100);

    const onPageNavigation = (page: number) => {
        ordersScrollViewRef.current?.scrollTo({
            y: 0,
            animated: true
        });
        setCurrentPage(page);
    }
    return {
        ref: {
            ordersScrollViewRef
        },
        ui: {
            loading
        },
        paging: {
            currentPage,
            maxPage,
            onPageNavigation
        }

    }
}