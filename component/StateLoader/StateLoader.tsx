import { PropsWithChildren } from "react";
import { ActivityIndicator } from "react-native";

interface StateLoaderProps extends PropsWithChildren {
    loading: boolean;
}
function StateLoader(props: StateLoaderProps) {
    return (
        <>
            {
                props.loading ? <ActivityIndicator /> : props.children
            }
        </>
    )
}

export default StateLoader