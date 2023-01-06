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


function Books() {
    const hook = useBooksPage();
    return (
        <>
            <HeaderSearchBar  >
                <View style={{
                    flexDirection: "row",
                    alignItems: "flex-start",
                    justifyContent: "flex-end",
                    height: "100%"
                }}>
                    {/* <ModalSelector
                        onChange={hook.onSortSelectChange}
                        cancelText="Hủy"
                        data={hook.sortOptionsModal}
                        style={{ width: 125, height: "75%", marginRight: 10 }}>
                        <View style={{
                            backgroundColor: shade3,
                            height: "100%",
                            alignItems: "center",
                            justifyContent: "center",
                            flexDirection: "row",
                            borderRadius: 24
                        }}>
                            <Image style={{ height: 22, width: 22, marginTop: 3, marginRight: 2 }}
                                resizeMode="contain"
                                source={sortWhite} />
                            <Text style={{ color: "white" }} >Sắp xếp theo</Text>
                        </View>
                    </ModalSelector> */}
                    {/* <ModalSelector
                        onChange={(option) => { alert(`${option.label} (${option.key}) nom nom nom`) }}
                        data={hook.filterOptionsModal}
                        style={{ width: 75, height: "75%", marginRight: 10 }}>
                        <View style={{
                            backgroundColor: shade3,
                            height: "100%",
                            alignItems: "center",
                            justifyContent: "center",
                            flexDirection: "row",
                            borderRadius: 24
                        }}>
                            <Image style={{ height: 22, width: 22, marginTop: 3, marginRight: 2 }} resizeMode="contain"
                                source={filterWhite} />
                            <Text style={{ color: "white" }}>Lọc</Text>
                        </View>
                    </ModalSelector> */}
                </View>
            </HeaderSearchBar>
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