import { useState } from "react";
import { route } from "../../libs/hook/useRouter";

export default function useFooterComponent() {
    const [showed, setShowed] = useState(true);
    route.current?.addListener("state", (e) => {
        if (route.current?.getCurrentRoute()?.name == "Login") {
            setShowed(false);
        }
        else {
            setShowed(true);
        }
    });
    return { showed }
}