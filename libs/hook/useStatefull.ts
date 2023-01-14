import { useState } from "react";

export default function useStatefull<S>(initialState: S | (() => S)) {
    const [state, setState] = useState<S>(initialState);
    return {
        setState,
        state
    }
}