import { ParamListBase } from "@react-navigation/native";
import { StackScreenProps } from "@react-navigation/stack";
import { useState } from "react";
import useRouter from "../../../libs/hook/useRouter";

export function useCreateChooseHaveAccountOrderPage(props: StackScreenProps<ParamListBase>) {
    const { push } = useRouter();
    const [haveAccount, setHaveAccount] = useState<boolean>();
    const next = () => {
        if (haveAccount) {
            push("CreateChooseCustomerOrder");
        }
        else {
            push("CreateChooseProductsOrder");
        }
    }
    const skip = () => {
        push("CreateChooseProductsOrder");
    }
    return {
        event: {
            next,
            skip
        },
        input: {
            haveAccount: {
                value: haveAccount,
                set: setHaveAccount
            }
        }
    }
}