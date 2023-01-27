import { useRef, useState } from "react";
import { NativeScrollEvent, NativeSyntheticEvent, ScrollView, View } from "react-native";
import { useShowOpacityAnimation } from "../../../utils/animation";

export default function useCampaignDetaillPage() {
    const scrollViewRef = useRef<ScrollView>(null);

    const [maxPage, setMaxPage] = useState(100);
    const [currentPage, setCurrentPage] = useState(1);

    const scrollToTopButtonShowOpacity = useShowOpacityAnimation(300, false);

    const onBooksPageNavigation = (page: number) => {
        setCurrentPage(page);
    }

    const scrollToTop = () => {
        if (scrollViewRef.current) {
            scrollViewRef.current.scrollTo({ y: 0 });
            scrollToTopButtonShowOpacity.setShowed(false);
        }
    }

    const onScrollViewScroll = (e: NativeSyntheticEvent<NativeScrollEvent>) => {
        if (e.nativeEvent.contentOffset.y) {
            if (!scrollToTopButtonShowOpacity.showed) {
                scrollToTopButtonShowOpacity.setShowed(true);
            }
        }
        else {
            if (scrollToTopButtonShowOpacity.showed) {
                scrollToTopButtonShowOpacity.setShowed(false);
            }
        }
    }


    return {
        scrollViewRef,
        scrollToTopButtonShowOpacity,
        scrollToTop,
        onScrollViewScroll,
        onBooksPageNavigation,
        maxPage,
        currentPage
    };
}