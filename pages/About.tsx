import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Toast from 'react-native-toast-message';
import StandardResponse from '../objects/response/StandardResponse';
import useRouter from '../libs/hook/useRouter';
import globalStyles from '../styles/Global';

function About() {
    const { getState } = useRouter();
    const [response, setResponse] = useState<StandardResponse>();
    useEffect(() => {
        const a = getState();
        const response = a.routes[a.index].params as StandardResponse;
        setResponse(response);
    }, []);

    return (
        <View style={globalStyles.page}>
            <Text onPress={() => Toast.show({ text1: 'title', text2: 'This is toast' })}>{response?.message}</Text>
            <StatusBar style="auto" />
        </View>
    )
}

export default About