import { useEffect, useState } from "react";
import { Animated } from "react-native";

export function useShowOpacityAnimation(duration: number, initDisplayValue: boolean | true) {
    const [showed, setShowed] = useState(false);
    const [display, setDisplay] = useState(initDisplayValue);
    const [opacity] = useState(new Animated.Value(1));
    useEffect(() => {
        if (showed) {
            setDisplay(true);
        }
        else {
            Animated.timing(opacity, {
                toValue: 0,
                useNativeDriver: false,
                duration: duration
            }).start(() => setDisplay(false));
        }
    }, [showed]);
    useEffect(() => {
        if (display == true) {
            Animated.timing(opacity, {
                toValue: 1,
                useNativeDriver: false,
                duration: duration
            }).start();
        }
    }, [display]);
    return { opacity, showed, setShowed, display };
}