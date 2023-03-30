import { useState } from "react";
import { CustomerViewModel } from "../../../objects/viewmodels/Users/customers/CustomerViewModel";

export default function useCreateChooseCustomerOrderPage() {
    const [loading, setLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [maxPage, setMaxPage] = useState(100);
    const [seletedCustomerId, setSeletedCustomerId] = useState<number>();

    const onPageNavigation = (page: number) => {
        setCurrentPage(page);
    };
    return {
        input: {
            seletedCustomerId: {
                value: seletedCustomerId,
                set: setSeletedCustomerId
            },
        },
        paging: {
            currentPage,
            maxPage,
            onPageNavigation
        },
        ui: {
            loading
        }
    };
}