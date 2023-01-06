import React from 'react'
import { View, Text } from 'react-native'
import useBookDetailPage from './BookDetail.hook';
function BookDetail() {
    const hook = useBookDetailPage();
    return (
        <View>
            <Text>dit me may</Text>
        </View>
    )
}

export default BookDetail