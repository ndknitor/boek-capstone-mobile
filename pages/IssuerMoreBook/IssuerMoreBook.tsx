import { useState } from 'react';
import { View, Text, ScrollView, FlatList, TouchableOpacity } from 'react-native'
import BookCard from '../../component/BookCard/BookCard';
import HeaderSearchBar from '../../component/HeaderSearchBar/HeaderSearchBar';
import Paging from '../../component/Paging/Paging';
import PageProps from '../../objects/schemes/PageProps'
import { shade4 } from '../../utils/color';
import { range } from '../../utils/format';
import { books } from '../../utils/mock';
import useIssuerMoreBookPage from './IssuerMoreBook.hook';
export interface IssuerMoreBookProps extends PageProps {

}
function IssuerMoreBook(props: IssuerMoreBookProps) {
    const hook = useIssuerMoreBookPage(props);
    return (
        <>
            <HeaderSearchBar />

            <View style={{ backgroundColor: "white" }}>
                <Text style={{ fontSize: 18, fontWeight: "600", margin: 10 }}>Sách giảm giá</Text>
                <FlatList
                    style={{ marginBottom: 10 }}
                    horizontal
                    data={range(10000, 10010)} renderItem={e =>
                        <TouchableOpacity
                            onPress={() => hook.setIndex(e.index)}
                            style={{
                                borderBottomColor: shade4,
                                borderBottomWidth: e.index == hook.index ? 1 : 0,
                                paddingLeft: 20,
                                paddingRight: 20,
                                paddingBottom: 10,
                                paddingTop: 10
                            }}>
                            <Text style={{ fontSize: 16 }}>{e.item}</Text>
                        </TouchableOpacity>
                    } />
            </View>
            <ScrollView ref={hook.scrollViewRef} style={{ padding: 10, backgroundColor: "white" }}>
                <View style={{ flexDirection: "row", flexWrap: "wrap" }}>
                    {
                        books.map(item =>
                            <View key={Math.random()} style={{ width: "50%" }}>
                                <BookCard book={item} />
                            </View>
                        )
                    }
                </View>
                <View style={{ marginBottom: 20 }}>
                    <Paging onPageNavigation={hook.onPageNavigation} currentPage={hook.currentPage} maxPage={hook.maxPage} />
                </View>
            </ScrollView>
        </>
    )
}

export default IssuerMoreBook