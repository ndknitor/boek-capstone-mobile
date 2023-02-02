import React, { PropsWithChildren } from 'react'
import { ScrollView, ViewProps } from 'react-native';
import { wrapScrollView } from 'react-native-scroll-into-view';

const Scroll = wrapScrollView(ScrollView);

function ScrollIndexView(props: ViewProps) {
    return (
    <Scroll>
        {props.children}
    </Scroll>
  )
}

export default ScrollIndexView