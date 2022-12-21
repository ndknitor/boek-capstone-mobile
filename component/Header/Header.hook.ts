import { useEffect, useState } from "react";
import { route } from "../../libs/hook/useRouter";

export default function useHeaderComponent() {
    const [showed, setShowed] = useState(false);
    useEffect(() => {
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
        return () => {
            route.current?.removeListener("state", () => { });
        }
    }, []);
    return { showed };
}