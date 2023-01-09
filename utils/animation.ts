import { useEffect, useState } from "react";
import { Animated } from "react-native";

export function useShowOpacityAnimation(duration: number) {
    const [showed, setShowed] = useState(false);
    const [display, setDisplay] = useState<"flex" | "none">("flex");
    const [opacity] = useState(new Animated.Value(1));
    useEffect(() => {
        if (showed) {
            setDisplay("flex");
        }
        else {
            Animated.timing(opacity, {
                toValue: 0,
                useNativeDriver: false,
                duration: duration
            }).start(() => setDisplay("none"));
        }
    }, [showed]);
    useEffect(() => {
        if (display == "flex") {
            Animated.timing(opacity, {
                toValue: 1,
                useNativeDriver: false,
                duration: duration
            }).start();
        }
    }, [display]);
    return { opacity, showed, setShowed, display };
}