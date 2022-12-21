import { useEffect, useState } from "react";
import { route } from "../../libs/hook/useRouter";

export default function useFooterComponent() {
    const [showed, setShowed] = useState(true);
    useEffect(() => {
        route.current?.addListener("state", (e) => {
            const name = route.current?.getCurrentRoute()?.name;
            if 
            (
                name != "Index" 
            ) {
                setShowed(false);
            }
            else {
                setShowed(true);
            }
        });
        return () => {
            route.current?.removeListener("state", () => {});
        }
    }, []);
    return { showed }
}