import { ParamListBase } from "@react-navigation/native";
import { StackScreenProps } from "@react-navigation/stack";
import { useState } from "react";
import useRouter from "../../../libs/hook/useRouter";
import { StaffCampaignMobilesViewModel } from "../../../objects/viewmodels/Campaigns/StaffCampaignMobilesViewModel";

export function useCreateChooseHaveAccountOrderPage(props: StackScreenProps<ParamListBase>) {
    const params = props.route.params as { campaign: StaffCampaignMobilesViewModel };
    const { push } = useRouter();
    const [haveAccount, setHaveAccount] = useState<boolean>();
    const next = () => {
        if (haveAccount) {
            push("CreateChooseCustomerOrder", { campaign: params.campaign });
        }
        else {
            push("CreateChooseProductsOrder", { campaign: params.campaign, customer: {} });
        }
    }
    const skip = () => {
        push("CreateChooseProductsOrder", { campaign: params.campaign });
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