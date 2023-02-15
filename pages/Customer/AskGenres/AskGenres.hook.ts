import { useEffect, useState } from "react";
import appxios from "../../../components/AxiosInterceptor";
import useAppContext from "../../../context/Context";
import useRouter from "../../../libs/hook/useRouter";
import { CreateCustomerRequestModel } from "../../../objects/requests/users/Customers/CreateCustomerRequestModel";
import { BaseResponsePagingModel } from "../../../objects/responses/BaseResponsePagingModel";
import { GroupViewModel } from "../../../objects/viewmodels/Groups/GroupViewModel";
import endPont from "../../../utils/endPoints";
import { sleep } from "../../../utils/Redirect";
import { SessionStorage } from "../../../utils/SessionStogare";
import StorageKey from "../../../utils/storageKey";


export default function useAskGenrePage() {
    const { replace } = useRouter();
    const { } = useAppContext();

    const [loading, setLoading] = useState(false);
    const [searchMessage, setSearchMessage] = useState("Không tìm thấy thể loại bạn tìm kiếm");

    const [groupsSelect, setGroupsSelect] = useState<GroupViewModel[]>([]);

    const [selectedGroups, setSelectedGroups] = useState<number[]>([]);

    const onAskGenresSubmit = (skiped: boolean) => {
        const request = JSON.parse(SessionStorage.getItem(StorageKey.createCustomerRequest) as string) as CreateCustomerRequestModel;
        if (!skiped) {
            request.groupIds = selectedGroups;
        }
        SessionStorage.setItem(StorageKey.createCustomerRequest, JSON.stringify(request));
        replace("AskOrganizations");
    }

    const onGroupsSelected = (group: GroupViewModel) => {
        if (selectedGroups.find(g => g == group.id)) {
            setSelectedGroups(selectedGroups.filter(g => g != group.id));
        }
        else {
            setSelectedGroups([...selectedGroups, group.id]);
        }
    }

    useEffect(() => {
        appxios.get<BaseResponsePagingModel<GroupViewModel>>(`${endPont.public.groups}`).then(response => {
            setGroupsSelect(response.data.data);
        });
    }, []);

    return {
        loading,
        searchMessage,
        data: {
            groupsSelect
        },
        input: {
            selectedGroups
        },
        event: {
            onAskGenresSubmit,
            onGroupsSelected
        }
    };
}