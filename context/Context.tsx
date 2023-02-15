import { createContext, Dispatch, SetStateAction, useContext, useState } from "react"
import { CreateCustomerRequestModel } from "../objects/requests/users/Customers/CreateCustomerRequestModel";
import { LoginViewModel } from "../objects/viewmodels/Users/LoginViewModel";

export interface Store {
    user: LoginViewModel | undefined;
    setUser: Dispatch<SetStateAction<LoginViewModel | undefined>>;
}
export const useProvider: () => Store = () => {
    const [user, setUser] = useState<LoginViewModel>();
    return {
        user,
        setUser
    };
}
export const Context = createContext<Store>({} as Store);
export default function useAppContext() {
    return useContext(Context);
}

