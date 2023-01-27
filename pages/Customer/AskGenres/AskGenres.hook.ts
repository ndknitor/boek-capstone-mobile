import { useState } from "react";
import useRouter from "../../../libs/hook/useRouter";
import { sleep } from "../../../utils/Redirect";


export default function useAskGenrePage() {
    const [submitLoader, setSubmitLoader] = useState(false);
    const { replace } = useRouter();
    const onAskGenresSubmit = async () => {
        setSubmitLoader(true);
        await sleep(2000);
        setSubmitLoader(false);
        replace("AskOrganizations");
    }
    const [searchMessage, setSearchMessage] = useState("Không tìm thấy thể loại bạn tìm kiếm");

    return { searchMessage, onAskGenresSubmit, submitLoader };
}