import { useState } from "react";
import useRouter from "../../libs/hook/useRouter";
import { sleep } from "../../utils/Redirect";

export default function useAskOrganizationsPage() {
    const [searchMessage, setSearchMessage] = useState("Không tìm thấy thể loại bạn tìm kiếm");
    const [submitLoader, setSubmitLoader] = useState(false);
    const { replace } = useRouter();
    const onAskOrganizationsSubmit = async () => {
        setSubmitLoader(true);
        await sleep(2000);
        setSubmitLoader(false);
        replace("Index");
    }
    return { searchMessage, onAskOrganizationsSubmit, submitLoader };
}