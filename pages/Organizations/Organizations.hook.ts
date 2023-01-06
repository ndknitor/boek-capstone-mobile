import { useEffect, useState } from "react";

export function useUnTrackedOrganizationsPage() {
    const [organizationSearchValue, setOrganizationSearchValue] = useState("");
    const [maxPage, setMaxPage] = useState(100);
    const [currentPage, setCurrentPage] = useState(1);
    const onOrganizationSearchTextChange = (value: string) => {

    }
    const onPageNavigation = (page: number) => {
        setCurrentPage(page);
    }
    return {
        organizationSearchValue,
        maxPage,
        currentPage,
        onOrganizationSearchTextChange,
        onPageNavigation
    };
}

export function useTrackedOrganizationsPage(){
    const [organizationSearchValue, setOrganizationSearchValue] = useState("");
    const [maxPage, setMaxPage] = useState(100);
    const [currentPage, setCurrentPage] = useState(1);
    const onOrganizationSearchTextChange = (value: string) => {

    }
    const onPageNavigation = (page: number) => {
        setCurrentPage(page);
    }
    return {
        organizationSearchValue,
        maxPage,
        currentPage,
        onOrganizationSearchTextChange,
        onPageNavigation
    };
}