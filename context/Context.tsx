import { LocationObject } from "expo-location";
import { createContext, Dispatch, SetStateAction, useContext, useState } from "react"
import { LoginViewModel } from "../objects/viewmodels/users/LoginViewModel";

export interface Store {
    geoPosition: LocationObject | undefined;
    setGeoPosition: Dispatch<SetStateAction<LocationObject | undefined>>;

    user: LoginViewModel | undefined;
    setUser: Dispatch<SetStateAction<LoginViewModel | undefined>>;
}
export const useProvider: () => Store = () => {
    const [geoPosition, setGeoPosition] = useState<LocationObject>();
    const [user, setUser] = useState<LoginViewModel>();
    return {
        geoPosition,
        setGeoPosition,

        user,
        setUser
    };
}
export const Context = createContext<Store>({} as Store);
export default function useAppContext() {
    return useContext(Context);
}

