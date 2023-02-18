import { useEffect, useRef, useState } from "react";
import { ScrollView } from "react-native";
import appxios from "../../../components/AxiosInterceptor";
import { getMaxPage } from "../../../libs/functions/paging";
import { BaseResponsePagingModel } from "../../../objects/responses/BaseResponsePagingModel";
import { OwnedCustomerOrganizationViewModel } from "../../../objects/viewmodels/CustomerOrganizations/OwnedCustomerOrganizationViewModel";
import { BasicOrganizationViewModel } from "../../../objects/viewmodels/Organizations/BasicOrganizationViewModel";
import { OrganizationViewModel } from "../../../objects/viewmodels/Organizations/OrganizationViewModel";
import endPont from "../../../utils/endPoints";

export function useUnTrackedOrganizationsPage() {
    const scrollViewRef = useRef<ScrollView>(null);

    const [loading, setLoading] = useState(false);
    const [buttonsLoading, setButtonsLoading] = useState<boolean[]>([]);

    const [maxPage, setMaxPage] = useState(100);
    const [currentPage, setCurrentPage] = useState(1);
    const [organizations, setOrganizations] = useState<OrganizationViewModel[]>([]);

    const [trackedOrganizationIds, setTrackedOrganizationIds] = useState<number[]>([]);
    const [search, setSearch] = useState("");

    const getOrganization = (page: number) => {
        setLoading(true);
        const query = new URLSearchParams();
        query.append("Name", search);
        appxios.get<BaseResponsePagingModel<OrganizationViewModel>>(`${endPont.public.organizations.index}?${query.toString()}`).then(response => {
            setOrganizations(response.data.data);
            setCurrentPage(page);
            setMaxPage(getMaxPage(response.data.metadata.size, response.data.metadata.total));
            setButtonsLoading(new Array<boolean>(response.data.data.length));
        }).finally(() => {
            setLoading(false);
        });
    }
    const onPageNavigation = (page: number) => {
        setCurrentPage(page);
    }
    const onToggleTrackPress = (organization: OrganizationViewModel, index: number) => {
        setButtonsLoading([
            ...buttonsLoading.slice(0, index),
            true,
            ...buttonsLoading.slice(index + 1)
        ]);
        console.log(organization.id);

        if (trackedOrganizationIds.find(o => o == organization.id)) {
            appxios.delete(`${endPont.public.organizations.customer}/${organization.id}`).then(response => {
                console.log(response)
                //console.log(response);
                if (response.status == 200) {
                    setTrackedOrganizationIds(trackedOrganizationIds.filter(o => o != organization.id));
                }
            }).finally(() => {
                setButtonsLoading([
                    ...buttonsLoading.slice(0, index),
                    false,
                    ...buttonsLoading.slice(index + 1)
                ]);
            });
        }
        else {
            appxios.post(`${endPont.public.organizations.customer}`, { organizationId: organization.id }).then(response => {
                console.log(response);
                if (response.status == 200) {
                    setTrackedOrganizationIds([...trackedOrganizationIds, organization.id as number]);
                }
            }).finally(() => {
                setButtonsLoading([
                    ...buttonsLoading.slice(0, index),
                    false,
                    ...buttonsLoading.slice(index + 1)
                ]);
            });
        }
    }

    useEffect(() => {
        getOrganization(1);
        appxios.get<OwnedCustomerOrganizationViewModel>(`${endPont.public.organizations.customer}`).then(response => {
            if (response.data.organizations) {
                setTrackedOrganizationIds(response.data.organizations.map(item => item.id as number));
            }
        });
    }, []);
    return {
        buttonsLoading,
        loading,
        ref: {
            scrollViewRef
        },
        data: {
            organizations
        },
        input: {
            trackedOrganizationIds,
            search: {
                value: search,
                set: setSearch
            }
        },
        event: {
            onToggleTrackPress,
            getOrganization
        },
        paging: {
            maxPage,
            currentPage,
            onPageNavigation
        }
    };
}

export function useTrackedOrganizationsPage() {
    const [buttonsLoading, setButtonsLoading] = useState<boolean[]>([]);
    const [loading, setLoading] = useState(false);

    const [organizations, setOrganizations] = useState<BasicOrganizationViewModel[]>([]);

    const [trackedOrganizationIds, setTrackedOrganizationIds] = useState<number[]>([]);

    const getTrackedOrganization = () => {
        setLoading(true);
        appxios.get<OwnedCustomerOrganizationViewModel>(`${endPont.public.organizations.customer}`).then(response => {

            if (response.data.organizations) {
                setOrganizations(response.data.organizations);
                setTrackedOrganizationIds(response.data.organizations.map(item => item.id as number));
            }
        }).finally(() => {
            setLoading(false);
        });
    }
    const onTrackPress = (organization: BasicOrganizationViewModel, index: number) => {
        setButtonsLoading([
            ...buttonsLoading.slice(0, index),
            true,
            ...buttonsLoading.slice(index + 1)
        ]);
        console.log(organization.id);

        if (trackedOrganizationIds.find(o => o == organization.id)) {
            appxios.delete(`${endPont.public.organizations.customer}/${organization.id}`).then(response => {
                //console.log(response);
                if (response.status == 200) {
                    setTrackedOrganizationIds(trackedOrganizationIds.filter(o => o != organization.id));
                }
            }).finally(() => {
                setButtonsLoading([
                    ...buttonsLoading.slice(0, index),
                    false,
                    ...buttonsLoading.slice(index + 1)
                ]);
            });
        }
        else {
            appxios.post(`${endPont.public.organizations.customer}`, { organizationId: organization.id }).then(response => {
                console.log(response);
                if (response.status == 200) {
                    setTrackedOrganizationIds([...trackedOrganizationIds, organization.id as number]);
                }
            }).finally(() => {
                setButtonsLoading([
                    ...buttonsLoading.slice(0, index),
                    false,
                    ...buttonsLoading.slice(index + 1)
                ]);
            });
        }
    }

    useEffect(() => {
        getTrackedOrganization();
    }, []);

    return {
        loading,
        buttonsLoading,
        data: {
            organizations
        },
        event: {
            onTrackPress,
            getTrackedOrganization
        },
        input: {
            trackedOrganizationIds
        }
    };
}