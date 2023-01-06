import { useRef, useState } from "react";
import { NativeScrollEvent, NativeSyntheticEvent, ScrollView, View } from "react-native";

export default function useCampaignDetaillPage() {
    const scrollViewRef = useRef<ScrollView>(null);

    const [maxPage, setMaxPage] = useState(100);
    const [currentPage, setCurrentPage] = useState(1);
    const [scrollToTopShowed, setScrollToTopShowed] = useState(false);

    const scrollToTop = () => {
        if (scrollViewRef.current) {
            scrollViewRef.current.scrollTo({ y: 0 });
        }
    }
    const onBooksPageNavigation = (page: number) => {
        setCurrentPage(page);
    }
    const onScrollViewScroll = (e: NativeSyntheticEvent<NativeScrollEvent>) => {
        if (e.nativeEvent.contentOffset.y) {
            if (!scrollToTopShowed) {
                setScrollToTopShowed(true);
            }
        }
        else
        {
            if (scrollToTopShowed) {
                setScrollToTopShowed(false);
            }
        }
    }


    return {
        scrollViewRef,
        scrollToTop,
        scrollToTopShowed,
        onScrollViewScroll,
        onBooksPageNavigation,
        maxPage,
        currentPage
    };
}