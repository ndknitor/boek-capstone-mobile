import { useEffect, useRef, useState } from "react";
import { ScrollView } from "react-native";
import { BookViewModel } from "../../../objects/viewmodels/books/BookViewModel";
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
    const [loading, setLoading] = useState(false);

    const [currentPage, setCurrentPage] = useState(1);
    const [maxPage, setMaxPage] = useState(100);

    const onPageNavigation = (page: number) => {
        setCurrentPage(page);
    }
    return {
        loading,
        paging : {
            currentPage,
            maxPage,
            onPageNavigation
        }
    };
}