import { useContext, useEffect, useRef, useState } from "react";
import { ScrollView } from "react-native";
import useAsyncEffect from "use-async-effect";
import { Book } from "../../objects/entities/Book";
import { IndexContext } from "../Index/Index.hook";
import { SearchProps } from "./Search";
interface SelectModalOption {
    key: number;
    section?: boolean;
    label: string;
}
export default function useSearchsPage(props: SearchProps) {
    const scrollViewRef = useRef<ScrollView>(null);
    const [loading, setLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [maxPage, setMaxPage] = useState(100);
    const [books, setBooks] = useState<Book[]>([]);
    const [sortOptionsModal, setSortOptionsModal] = useState<SelectModalOption[]>([
        { key: Math.random(), label: "Mới nhất", section: true },
        { key: Math.random(), label: "Cũ nhất" },
        { key: Math.random(), label: "Bán chạy nhất" }
    ]);
    const [filterOptionsModal, setfilterOptionsModal] = useState<SelectModalOption[]>([
        { key: Math.random(), label: "Tất cả", section: true },
        { key: Math.random(), label: "Thể loại" },
        { key: Math.random(), label: "Bán chạy" }
    ]);
    const onSortSelectChange = (option: SelectModalOption) => {
        const result: SelectModalOption[] = [];
        sortOptionsModal.map(element => {
            if (element.key == option.key) {
                result.push({
                    key: element.key,
                    label: element.label,
                    section: true
                });
            }
            else {
                result.push({
                    key: element.key,
                    label: element.label
                });
            }
        });
        setSortOptionsModal(result);
    }
    const processGetBooks = async (page: number, search: string) => {
        setBooks(
            [
                {
                    "id": 15,
                    "code": "TB004_Test",
                    "genreId": 48,
                    "publisherId": 2,
                    "issuerId": "90bbc35c-b655-4ae1-9bf5-7c3c4aba2ee0",
                    "isbn10": "",
                    "isbn13": "",
                    "name": "Book4_Test",
                    "translator": "Book_Translator_Test",
                    "imageUrl": "https://salt.tikicdn.com/cache/w1200/ts/product/88/3b/22/5911d66164e96a2d8b3c77bcee059983.jpg",
                    "coverPrice": 18000.0000,
                    "description": "Book4_Description_Test",
                    "language": "VN",
                    "size": "Book4_Size_Test",
                    "releasedYear": 2022,
                    "page": 200,
                    "isSeries": false,
                    "isCombo": false,
                    "status": 1,
                    "statusName": "Phát hành",
                    "genre": {
                        "id": 48,
                        "categoryId": null,
                        "name": "Tiểu thuyết",
                        "displayIndex": 8,
                        "status": true,
                        "statusName": "Hoạt động"
                    },
                    "issuer": {
                        "id": "90bbc35c-b655-4ae1-9bf5-7c3c4aba2ee0",
                        "code": "I307304132",
                        "name": "BIZBOOK",
                        "email": "ngcphungnguyn@gmail.com",
                        "address": "",
                        "phone": "0123456789",
                        "roleName": "Issuer",
                        "role": 2,
                        "status": true,
                        "statusName": null,
                        "imageUrl": "https://lh3.googleusercontent.com/a/ALm5wu0FH3PWgtOhqCmxcKHFIWcYY-6j_C9f7nq9oBcA=s96-c"
                    },
                    "publisher": {
                        "id": 2,
                        "code": "NXBKD",
                        "name": "NXB Kim Đồng",
                        "email": "cskh_online@nxbkimdong.com.vn",
                        "address": "Số 55 Quang Trung, Nguyễn Du, Hai Bà Trưng, Hà Nội",
                        "imageUrl": "https://theme.hstatic.net/200000343865/1000938429/14/logo.png?v=180",
                        "phone": "01900571595"
                    },
                    "bookAuthors": [
                        {
                            "id": 27,
                            "bookId": 15,
                            "authorId": 1,
                            "author": {
                                "id": 1,
                                "name": "Nguyễn Nhật Ánh",
                            }
                        },
                        {
                            "id": 28,
                            "bookId": 15,
                            "authorId": 2,
                            "author": {
                                "id": 2,
                                "name": "Sven Carlsson, Jonas",
                            }
                        }
                    ],
                    "formats": [
                        {
                            "id": 43,
                            "bookId": 15,
                            "type": 1,
                            "typeName": "Bìa cứng",
                            "createdDate": new Date("2022-12-30T16:17:03.187"),
                        },
                        {
                            "id": 44,
                            "bookId": 15,
                            "type": 2,
                            "typeName": "Bìa mềm",
                            "url": "https://salt.tikicdn.com/ts/product/6d/61/45/4d4166c4fee360442889f320c84a12c5.jpg",
                            "createdDate": new Date("2022-12-30T16:17:03.187"),
                        }
                    ],
                }
            ]
        )
        // setLoading(true);
        // const response = await appxios.get<BooksGetResponse>(EndPont.public.books.index);
        // setCurrentPage(page);
        // setMaxPage(response.data.metadata.size);
        // setBooks(response.data.data);
        // setLoading(false);
    }
    const onPageNavigation = (page: number) => {
        setCurrentPage(page);
        scrollViewRef.current?.scrollTo({
            y: 0,
            animated: true
        });
    }
    useAsyncEffect(async () => {

        await processGetBooks(1, "");

    }, []);

    return {
        books,
        scrollViewRef,
        currentPage,
        maxPage,
        setCurrentPage,
        loading,
        sortOptionsModal,
        filterOptionsModal,
        onSortSelectChange,
        onPageNavigation
    };
}