import { LocationObject } from "expo-location";
import { createContext, Dispatch, SetStateAction, useContext, useState } from "react"

export interface Store {
    geoPosition: LocationObject | undefined;
    setGeoPosition: Dispatch<SetStateAction<LocationObject | undefined>>;



}
export const useProvider: () => Store = () => {
    const [geoPosition, setGeoPosition] = useState<LocationObject>();
    return {
        geoPosition,
        setGeoPosition
    };
}
export const Context = createContext<Store>({} as Store);
export default function useAppContext() {
    return useContext(Context);
}

