import { createContext, useContext, useEffect, useRef, useState } from "react";
import { ScrollView } from "react-native";
import DrawerLayout from "react-native-drawer-layout";
import useAsyncEffect from "use-async-effect";
import { Book } from "../../objects/entities/Book";
import { IndexContext } from "../Index/Index.hook";
import { SearchProps } from "./Search";


export function useBooksPage() {
    const filterBooksTreeData = [
        {
            id: 0,
            name: "Thể loại",
            children: [
                {
                    id: "01",
                    name: "Khiêu dâm"
                },
                {
                    id: "02",
                    name: "Khiêu dâm"
                }
            ],
        },
        {
            id: 1,
            name: "Giá",
            children: [
                {
                    id: "01",
                    name: "Khiêu dâm"
                },
                {
                    id: "02",
                    name: "Khiêu dâm"
                }
            ],
        },
        {
            id: 2,
            name: "Định dạng",
            children: [
                {
                    id: "01",
                    name: "Khiêu dâm"
                },
                {
                    id: "02",
                    name: "Khiêu dâm"
                }
            ],
        },
        {
            id: 3,
            name: "Ngôn ngữ",
            children: [
                {
                    id: "01",
                    name: "Khiêu dâm"
                },
                {
                    id: "02",
                    name: "Khiêu dâm"
                }
            ],
        },
        {
            id: 4,
            name: "Nhà phát hành",
            children: [
                {
                    id: "01",
                    name: "Khiêu dâm"
                },
                {
                    id: "02",
                    name: "Khiêu dâm"
                }
            ],
        },
        {
            id: 5,
            name: "Tác giả",
            children: [
                {
                    id: "01",
                    name: "Khiêu dâm"
                },
                {
                    id: "02",
                    name: "Khiêu dâm"
                }
            ],
        },
        {
            id: 6,
            name: "Nhà xuất bản",
            children: [
                {
                    id: "01",
                    name: "Khiêu dâm"
                },
                {
                    id: "02",
                    name: "Khiêu dâm"
                }
            ],
        },
    ];
    const filterBooksDrawerRef = useRef<DrawerLayout>(null);
    const booksScrollViewRef = useRef<ScrollView>(null);

    const [loading, setLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [maxPage, setMaxPage] = useState(100);
    const [books, setBooks] = useState<Book[]>([]);
    const processGetBooks = async (page: number, search: string) => {
        setBooks(books);
        // setLoading(true);
        // const response = await appxios.get<BooksGetResponse>(EndPont.public.books.index);
        // setCurrentPage(page);
        // setMaxPage(response.data.metadata.size);
        // setBooks(response.data.data);
        // setLoading(false);
    }
    const onPageNavigation = (page: number) => {
        setCurrentPage(page);
        booksScrollViewRef.current?.scrollTo({
            y: 0,
            animated: true
        });
    }
    useAsyncEffect(async () => {

        await processGetBooks(1, "");

    }, []);

    return {
        books,
        filterBooksTreeData,
        filterBooksDrawerRef,
        booksScrollViewRef,
        currentPage,
        maxPage,
        setCurrentPage,
        loading,
        onPageNavigation
    };
}


export function useBookFairsPage() {
    const filterBookFairsTreeData = [
        {
            id: 0,
            name: "Thể loại",
            children: [
                {
                    id: "01",
                    name: "Khiêu dâm"
                },
                {
                    id: "02",
                    name: "Khiêu dâm"
                }
            ],
        },
        {
            id: 1,
            name: "Thời gian",
            children: [
                {
                    id: "01",
                    name: "Khiêu dâm"
                },
                {
                    id: "02",
                    name: "Khiêu dâm"
                }
            ],
        },
        {
            id: 2,
            name: "Địa điểm",
            children: [
                {
                    id: "01",
                    name: "Khiêu dâm"
                },
                {
                    id: "02",
                    name: "Khiêu dâm"
                }
            ],
        },
        {
            id: 3,
            name: "Định dạng",
            children: [
                {
                    id: "01",
                    name: "Khiêu dâm"
                },
                {
                    id: "02",
                    name: "Khiêu dâm"
                }
            ],
        },
        {
            id: 4,
            name: "Thể loại",
            children: [
                {
                    id: "01",
                    name: "Khiêu dâm"
                },
                {
                    id: "02",
                    name: "Khiêu dâm"
                }
            ],
        },
        {
            id: 5,
            name: "Nhà phát hành",
            children: [
                {
                    id: "01",
                    name: "Khiêu dâm"
                },
                {
                    id: "02",
                    name: "Khiêu dâm"
                }
            ],
        },
        {
            id: 6,
            name: "Tổ chức",
            children: [
                {
                    id: "01",
                    name: "Khiêu dâm"
                },
                {
                    id: "02",
                    name: "Khiêu dâm"
                }
            ],
        },
    ];


    const bookFairsScrollViewRef = useRef<ScrollView>(null);
    const filterBookFairsDrawerRef = useRef<DrawerLayout>(null);

    const [loading, setLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [maxPage, setMaxPage] = useState(100);

    return {
        bookFairsScrollViewRef,
        filterBookFairsTreeData,
        filterBookFairsDrawerRef,
        loading,
        currentPage,
        maxPage
    };
}