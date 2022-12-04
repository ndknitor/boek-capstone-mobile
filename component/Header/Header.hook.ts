import { useState } from "react";
import { route } from "../../libs/hook/useRouter";

export default function useHeaderComponent() {
    const [showed, setShowed] = useState(false);
    route.current?.addListener("state", (e) => {
        const name = route.current?.getCurrentRoute()?.name;
        if (
            name === ""
        ) {
            setShowed(true);
        }
        else {
            setShowed(false);
        }
    });
    return { showed };
}