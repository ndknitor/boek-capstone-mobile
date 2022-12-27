import React, { useState } from 'react'
import { ActivityIndicator } from 'react-native'
import useAsyncEffect from 'use-async-effect';
import useRouter from '../../libs/hook/useRouter';
import { sleep } from '../../utils/Redirect';

function Loading() {
    const { replace } = useRouter();
    const [loading, setLoading] = useState(true);
    useAsyncEffect(async () => {
        await sleep(2000);
        replace("Index");
    }, []);
    return (
        <ActivityIndicator size={"large"} style={{ borderWidth: 1, width: "100%", height: "100%" }} />
    )
}

export default Loading