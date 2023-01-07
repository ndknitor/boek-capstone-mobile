import { View, ScrollView, ActivityIndicator, Text, Dimensions, Image, TouchableOpacity, TextInput } from 'react-native'
import HeaderSearchBar from '../../component/HeaderSearchBar/HeaderSearchBar'
import BookCard from '../../component/BookCard/BookCard';
import Paging from '../../component/Paging/Paging';
import useBooksPage from './Books.hook';
import ModalSelector from 'react-native-modal-selector';
import { shade3 } from '../../utils/color';
import filterWhite from "../../assets/icons/filter-white.png";
import sortWhite from "../../assets/icons/sort-white.png";
import { Book } from '../../objects/entities/Book';
import { books } from '../../utils/mock';
import { useEffect } from 'react';
import { useRoute } from '@react-navigation/native';
import useRouter from '../../libs/hook/useRouter';
import { SceneRendererProps } from 'react-native-tab-view';

interface BooksProps extends SceneRendererProps {

}
function Books(props: BooksProps) {
    const hook = useBooksPage();
    const {} = useRouter();
    return (
        <>
            <ActivityIndicator
                size="large"
                style={{
                    display: hook.loading ? "flex" : "none",
                    zIndex: 1,
                    opacity: 0.6,
                    backgroundColor: "white",
                    position: "absolute",
                    width: "100%",
                    height: "90%",
                    top: 90
                }} />
            <ScrollView
                ref={hook.scrollViewRef}
                scrollEnabled={!hook.loading}
                contentContainerStyle={{
                    flexDirection: "row",
                    flexWrap: "wrap"
                }}
                style={{
                    backgroundColor: "white",
                    padding: 10,
                    width: "100%",
                    height: "100%"
                }}>
                {
                    books.map(item =>
                        <View key={Math.random()}>
                            <BookCard book={item} />
                        </View>
                    )
                }
                <View style={{ marginBottom: 20 }}>
                    <Paging maxPage={hook.maxPage} currentPage={hook.currentPage} onPageNavigation={hook.onPageNavigation} />
                </View>
            </ScrollView>
        </>
    )
}

export default Books