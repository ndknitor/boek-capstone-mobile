import { useEffect, useRef, useState } from "react";
import { ScrollView } from "react-native";
import DrawerLayout from "react-native-drawer-layout";
import { BookViewModel } from "../../../objects/viewmodels/Books/BookViewModel";
import { mockBooks } from "../../../utils/mock";

export function useStaffBooksPage() {
    const booksScrollViewRef = useRef<ScrollView>(null);

    const [loading, setLoading] = useState(false);

    const [search, setSearch] = useState("");

    const [books, setBooks] = useState<BookViewModel[]>([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [maxPage, setMaxPage] = useState(100);
    const onPageNavigation = (page: number) => {
        setCurrentPage(page)
        booksScrollViewRef.current?.scrollTo({
            y: 0,
            animated: true
        });
    }

    useEffect(() => {
        setBooks(mockBooks);
    }, []);
    return {
        loading,
        ref: {
            booksScrollViewRef
        },
        paging: {
            currentPage,
            maxPage,
            onPageNavigation
        },
        input: {
            search: {
                value: search,
                set: setSearch
            }
        },
        data: {
            books
        }
    }
}
export function useStaffCampaignOrderPage() {
    const campaginsScrollViewRef = useRef<ScrollView>(null);
    const drawerLayoutRef = useRef<DrawerLayout>(null);


    const [loading, setLoading] = useState(false);

    const [currentPage, setCurrentPage] = useState(1);
    const [maxPage, setMaxPage] = useState(100);

    const onPageNavigation = (page: number) => {
        setCurrentPage(page);
        campaginsScrollViewRef.current?.scrollTo({
            y: 0,
            animated: true
        });
    }
    const onOrderDetailPress = () => {
        drawerLayoutRef.current?.openDrawer();
    }
    return {
        ref: {
            campaginsScrollViewRef,
            drawerLayoutRef,
        },
        event: {
            onOrderDetailPress
        },
        loading,
        paging: {
            currentPage,
            maxPage,
            onPageNavigation
        }
    };
}