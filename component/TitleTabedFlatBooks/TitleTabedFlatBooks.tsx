import { Button } from '@rneui/base';
import React, { useState } from 'react'
import { FlatList, TouchableOpacity, Text, View } from 'react-native'
import useRouter from '../../libs/hook/useRouter';
import { Book } from '../../objects/entities/Book';
import { BookViewModel } from '../../objects/viewmodels/books/BookViewModel';
import { primaryTint4 } from '../../utils/color';
import { range } from '../../utils/format'
import BookCard from '../BookCard/BookCard';
interface TitleTabedFlatBooks {
    title: string;
    data: { tabLabel: string, tabData: BookViewModel[] }[];
}
function TitleTabedFlatBooks(props: TitleTabedFlatBooks) {
    const { navigate } = useRouter();
    const [index, setIndex] = useState(0);
    return (
        <>
            <Text style={{ fontSize: 22, fontWeight: "600", marginBottom: 10, marginTop: 10 }}>{props.title}</Text>
            <FlatList
                style={{ marginBottom: 10 }}
                horizontal
                data={props.data} renderItem={e =>
                    <TouchableOpacity
                        onPress={() => setIndex(e.index)}
                        style={{
                            borderBottomColor: primaryTint4,
                            borderBottomWidth: e.index == index ? 1 : 0,
                            paddingLeft: 20,
                            paddingRight: 20,
                            paddingBottom: 10,
                            paddingTop: 10
                        }}>
                        <Text style={{ fontSize: 16 }}>{e.item.tabLabel}</Text>
                    </TouchableOpacity>
                } />
            <FlatList
                horizontal
                data={props.data[index].tabData}
                renderItem={e =>
                    <BookCard book={e.item} />
                }
            />
        </>
    )
}

export default TitleTabedFlatBooks