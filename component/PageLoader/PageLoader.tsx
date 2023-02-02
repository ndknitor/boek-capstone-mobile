import { ActivityIndicator, View } from "react-native";

export default function PageLoader({ loading }: { loading: boolean }) {
    return (
        <>
            <View style={{
                backgroundColor: "white",
                display: loading ? "flex" : "none",
                opacity: 0.6,
                zIndex: 998,
                position: "absolute",
                width: "100%",
                height: "100%",
                alignItems: "center",
                justifyContent: "center"
            }}>
                <ActivityIndicator
                    size="large" />
            </View>
            <View style={{
                backgroundColor: "white",
                display: loading ? "flex" : "none",
                zIndex: 999,
                position: "absolute",
                width: "100%",
                height: "100%",
                alignItems: "center",
                justifyContent: "center"
            }}>
                <ActivityIndicator
                    size="large" />
            </View>
        </>
    );
}