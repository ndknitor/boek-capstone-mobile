import { useRoute } from '@react-navigation/native';
import { Button } from '@rneui/base';
import React, { useReducer } from 'react'
import { FlatList, Text, View } from 'react-native'
import useRouter from '../../libs/hook/useRouter';
import { Book } from '../../objects/entities/Book';
import { BookViewModel } from '../../objects/viewmodels/Books/BookViewModel';
import BookCard from '../BookCard/BookCard';
interface TitleFlatBooksProps {
    data: BookViewModel[];
    title: string;
}
function TitleFlatBooks(props: TitleFlatBooksProps) {
    const { navigate } = useRouter();
    return (
        <>
            <Text style={{ fontSize: 22, fontWeight: "600", marginBottom: 10, marginTop: 10 }}>{props.title}</Text>
            <FlatList
                horizontal
                data={props.data}
                renderItem={e =>
                    <BookCard book={e.item} />
                }
            />
        </>
    )
}

export default TitleFlatBooks