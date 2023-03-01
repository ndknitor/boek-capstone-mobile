import React, { PropsWithChildren, ReactNode, useEffect, useState } from 'react'
import { View, ViewProps, Text, TouchableOpacity, FlatList } from 'react-native';
import useIsFirstRender from '../../libs/hook/useIsFirstRender';
import { primaryTint4 } from '../../utils/color';
import FadeTransition from '../FadeTransition/FadeTransition';
interface PreLoadTabViewProps {
    childrens: ReactNode[];
    titles: string[];
}
function PreLoadTabView(props: PreLoadTabViewProps) {
    const [index, setIndex] = useState<number>(0);
    const [showed, setShowed] = useState(true);
    const [inputIndex, setInputIndex] = useState(0);
    return (
        <View>
            <FlatList
                style={{ marginBottom: 10 }}
                horizontal
                data={props.titles} renderItem={e =>
                    <TouchableOpacity
                        onPress={() => { setInputIndex(e.index); setShowed(false); }}
                        style={{
                            borderBottomColor: primaryTint4,
                            borderBottomWidth: e.index == index ? 1 : 0,
                            paddingLeft: 20,
                            paddingRight: 20,
                            paddingBottom: 10,
                            paddingTop: 10
                        }}>
                        <Text style={{ fontSize: 16 }}>{e.item}</Text>
                    </TouchableOpacity>
                } />
            <FadeTransition
                showed={showed}
                duration={300}
                onHideComplete={() => { setIndex(inputIndex); setShowed(true) }}>
                {
                    props.childrens[index]
                }
            </FadeTransition>

        </View>
    )
}

export default PreLoadTabView