import { createContext, Dispatch, SetStateAction, useContext, useState } from "react"
export interface Store {
    count : number;
    setCount : Dispatch<SetStateAction<number>>;
}
export const useProvider: () => Store = () => {
    const [count, setCount] = useState(0);
    return {
        count,
        setCount
    };
}
export const Context = createContext<Store>({} as Store);
export default function useAppContext()
{
    return useContext(Context);
}

