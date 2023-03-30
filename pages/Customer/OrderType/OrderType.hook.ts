import { ParamListBase } from "@react-navigation/native";
import { StackScreenProps } from "@react-navigation/stack";
import { useEffect, useState } from "react";

export default function useOrderTypePage(props: StackScreenProps<ParamListBase>) {
    const [orderType, setOrderType] = useState(0);
    useEffect(() => {

    }, []);
    return {
        input: {
            orderType: {
                value: orderType,
                set: setOrderType
            }
        },
        ui: {
        }
    }
}