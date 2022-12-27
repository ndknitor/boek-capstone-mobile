import { useEffect, useState } from "react";

export default function useOrganizationsPage() {
    const [index, setIndex] = useState(0);
    const [notTrackedOrganizationSearch, setNotTrackedOrganizationSearch] = useState("");
    const [trackedOrganizationSearch, setTrackedOrganizationSearch] = useState("");
    const [searchValue, setSearchValue] = useState("");
    const onSearchValueTextChange = (e: string) => {
        if (index == 0) {
            setNotTrackedOrganizationSearch(e);
            setSearchValue(e);
            return;
        }
        if (index == 1) {
            setTrackedOrganizationSearch(e)
            setSearchValue(e);
            return;
        }
    }
    useEffect(() => {        
        if (index == 0) {
            setSearchValue(notTrackedOrganizationSearch);
            return;
        }
        if (index == 1) {
            setSearchValue(trackedOrganizationSearch);
            return;
        }
    }, [index]);
    return {
        index,
        setIndex,
        searchValue,
        onSearchValueTextChange
    };
}