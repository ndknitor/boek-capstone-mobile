import { useRoute } from '@react-navigation/native';
import { Button } from '@rneui/base';
import React, { useReducer } from 'react'
import { FlatList, Text, View } from 'react-native'
import useRouter from '../../libs/hook/useRouter';
import { Book } from '../../objects/entities/Book';
import { shade1 } from '../../utils/color';
import BookCard from '../BookCard/BookCard';
interface TitleFlatBooksProps {
    data: Book[];
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
            <View style={{ width: "100%", alignItems: "center", justifyContent: "center", marginTop: 20 }}>
                <Button
                    onPress={() => navigate("IssuerMoreBook")}
                    buttonStyle={{
                        width: 170,
                        alignItems: "center",
                        borderRadius: 8,
                        backgroundColor: shade1
                    }}>Xem thêm</Button>
            </View>
        </>
    )
}

export default TitleFlatBooks