import { useState } from "react";

export default function useOrdersPage() {
    const [loading, setLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [maxPage, setMaxPage] = useState(100);
    const onPageNavigation = (page: number) => {
        setCurrentPage(page);
    }
    return {
        loading,
        currentPage,
        maxPage,
        onPageNavigation
    }
}