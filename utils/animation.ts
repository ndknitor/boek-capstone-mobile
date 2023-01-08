import { useEffect, useState } from "react";
import { Animated } from "react-native";
import useAsyncEffect from "use-async-effect";

export function useShowOpacityAnimation(duration: number) {
    const [showed, setShowed] = useState(false);
    const [display, setDisplay] = useState<"flex" | "none">("flex");
    const [opacity] = useState(new Animated.Value(1));
    useAsyncEffect(async () => {
        if (showed) {
            await setDisplay("flex");
            Animated.timing(opacity, {
                toValue: 1,
                useNativeDriver: false,
                duration: duration
            }).start();

        }
        else {
            Animated.timing(opacity, {
                toValue: 0,
                useNativeDriver: false,
                duration: duration
            }).start(() => setDisplay("none"));
        }
    }, [showed]);
    return { opacity, showed, setShowed, display };
}