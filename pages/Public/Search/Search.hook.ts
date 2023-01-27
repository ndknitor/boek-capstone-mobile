import { MaterialTopTabScreenProps } from "@react-navigation/material-top-tabs";
import { ParamListBase } from "@react-navigation/native";
import { createContext, Dispatch, SetStateAction, useContext, useEffect, useRef, useState } from "react";
import { ScrollView } from "react-native";
import DrawerLayout from "react-native-drawer-layout";
import appxios from "../../../component/AxiosInterceptor";
import { BaseResponsePagingModel } from "../../../objects/responses/BaseResponsePagingModel";
import { AuthorBooksViewModel } from "../../../objects/viewmodels/authors/AuthorBooksViewModel";
import { BookViewModel } from "../../../objects/viewmodels/books/BookViewModel";
import { CampaignViewModel } from "../../../objects/viewmodels/campaigns/CampaignViewModel";
import { GenreBooksViewModel } from "../../../objects/viewmodels/genres/GenreBooksViewModel";
import { PublisherViewModel } from "../../../objects/viewmodels/publishers/PublisherViewModel";
import { MultiUserViewModel } from "../../../objects/viewmodels/users/MultiUserViewModel";
import EndPont from "../../../utils/EndPoint";
import { getMaxPage } from "../../../utils/paging";


interface SearchPageContextData {
    searchValue: string;
    setSearchValue: Dispatch<SetStateAction<string>>;
    onSubmit: () => void;
    setOnSubmit: Dispatch<SetStateAction<() => void>>;
}
export const SearchPageContext = createContext<SearchPageContextData>({} as SearchPageContextData);

export function useBooksPage(props: MaterialTopTabScreenProps<ParamListBase>) {
    const filterBooksDrawerRef = useRef<DrawerLayout>(null);
    const booksScrollViewRef = useRef<ScrollView>(null);

    const context = useContext(SearchPageContext);
    const [loading, setLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [maxPage, setMaxPage] = useState(0);
    const [books, setBooks] = useState<BookViewModel[]>([]);

    const [genres, setGenres] = useState<GenreBooksViewModel[]>([]);
    const [languages, setLanguages] = useState<string[]>([]);
    const [issuers, setIssuers] = useState<MultiUserViewModel[]>([]);
    const [authors, setAuthors] = useState<AuthorBooksViewModel[]>([]);
    const [publishers, setPublishers] = useState<PublisherViewModel[]>([]);

    const [seletedGenre, setSeletedGenre] = useState<number[]>([]);
    const [selectedFormats, setSelectedFormats] = useState<number[]>([]);
    const [selectedLanguage, setSelectedLanguage] = useState<string[]>([]);
    const [seletedIssuer, setSeletedIssuer] = useState<string[]>([]);
    const [seletedAuthor, setSeletedAuthor] = useState<number[]>([]);
    const [selectedPublisher, setSelectedPublisher] = useState<number[]>([]);

    const getBooks = (page: number) => {
        setLoading(true);
        appxios.get<BaseResponsePagingModel<BookViewModel>>(`${EndPont.public.books.index}?Page=${page}`)
            .then(response => {
                setBooks(response.data.data);
                setCurrentPage(page);
                setMaxPage(getMaxPage(response.data.metadata.size, response.data.metadata.total));
            })
            .finally(() => {
                setLoading(false);
            });
    }
    const onPageNavigation = (page: number) => {
        setCurrentPage(page);
        getBooks(page);
        booksScrollViewRef.current?.scrollTo({
            y: 0,
            animated: true
        });
    }
    const onSearchSubmit = () => {

    }
    const onReset = () => {
        setSeletedGenre([]);
        setSeletedIssuer([]);
        setSeletedAuthor([]);
        setSelectedPublisher([]);
    }

    const onGenreExpand = () => {
        if (genres.length == 0) {
            setLoading(true);
            appxios.get<BaseResponsePagingModel<GenreBooksViewModel>>(`${EndPont.public.genres}?Size=20&WithBooks=false`)
                .then(response => {
                    if (response.status == 200) {
                        setGenres(response.data.data);
                    }
                }).finally(() => {
                    setLoading(false);
                });
        }
    }
    const onGenresSeletedToggle = (genreId: number) => {
        if (seletedGenre.find(id => genreId == id) == undefined) {
            setSeletedGenre([...seletedGenre, genreId]);
        }
        else {
            setSeletedGenre(seletedGenre.filter(id => genreId != id));
        }
    }

    const onFormatsToggle = (formatId: number) => {
        if (selectedFormats.find(id => formatId == id) == undefined) {
            setSelectedFormats([...selectedFormats, formatId]);
        }
        else {
            setSelectedFormats(selectedFormats.filter(id => formatId != id));
        }
    }

    const onLanguageExpand = () => {
        if (languages.length == 0) {
            setLoading(true);
            appxios.get<string[]>(EndPont.public.languages)
                .then(response => {
                    if (response.status == 200) {
                        setLanguages(response.data);
                    }
                }).finally(() => {
                    setLoading(false);
                });
        }
    }
    const onLanguageSeletedToggle = (language: string) => {
        if (selectedLanguage.find(id => language == id) == undefined) {
            setSelectedLanguage([...selectedLanguage, language]);
        }
        else {
            setSelectedLanguage(selectedLanguage.filter(id => language != id));
        }
    }

    const onIssuerExpand = () => {
        if (issuers.length == 0) {
            setLoading(true);
            appxios.get<BaseResponsePagingModel<MultiUserViewModel>>(`${EndPont.users.index}?Role=2`)
                .then(response => {
                    if (response.status == 200) {
                        setIssuers(response.data.data);
                    }
                }).finally(() => {
                    setLoading(false);
                });
        }
    }
    const onIssuerSeletedToggle = (issuerId: string) => {
        if (seletedIssuer.find(id => issuerId == id) == undefined) {
            setSeletedIssuer([...seletedIssuer, issuerId]);
        }
        else {
            setSeletedIssuer(seletedIssuer.filter(id => issuerId != id));
        }
    }

    const onAuthorExpand = () => {
        if (authors.length == 0) {
            setLoading(true);
            appxios.get<BaseResponsePagingModel<AuthorBooksViewModel>>(`${EndPont.public.author}?Size=20&WithBooks=false`)
                .then(response => {
                    if (response.status == 200) {
                        setAuthors(response.data.data);
                    }
                }).finally(() => {
                    setLoading(false);
                });
        }
    }
    const onAuthorSeletedToggle = (authorId: number) => {
        if (seletedAuthor.find(id => authorId == id) == undefined) {
            setSeletedAuthor([...seletedAuthor, authorId]);
        }
        else {
            setSeletedAuthor(seletedAuthor.filter(id => authorId != id));
        }
    }

    const onPublisherExpand = () => {
        if (publishers.length == 0) {
            setLoading(true);
            appxios.get<BaseResponsePagingModel<PublisherViewModel>>(EndPont.public.publishers)
                .then(response => {
                    if (response.status == 200) {
                        //console.log(response.data);
                        setPublishers(response.data.data);
                    }
                }).finally(() => {
                    setLoading(false);
                });
        }
    }
    const onPublisherSeletedToggle = (publisherId: number) => {
        if (selectedPublisher.find(id => publisherId == id) == undefined) {
            setSelectedPublisher([...selectedPublisher, publisherId]);
        }
        else {
            setSelectedPublisher(selectedPublisher.filter(id => publisherId != id));
        }
    }

    useEffect(() => {
        getBooks(1);
        const unsubscribe = props.navigation.addListener('tabPress', (e) => {
            context.setOnSubmit(onSearchSubmit);
        });
        context.setOnSubmit(onSearchSubmit);
        return unsubscribe;
    }, []);

    return {
        ref: {
            filterBooksDrawerRef,
            booksScrollViewRef
        },
        input: {
            seletedGenre,
            selectedLanguage,
            selectedFormats,
            seletedIssuer,
            selectedPublisher,
            seletedAuthor,
        },
        data: {
            books,
            genres,
            languages,
            publishers,
            authors,
            issuers
        },
        event: {
            onReset,
            onFormatsToggle,
            onLanguageExpand,
            onLanguageSeletedToggle,
            onGenreExpand,
            onGenresSeletedToggle,
            onPublisherExpand,
            onPublisherSeletedToggle,
            onAuthorExpand,
            onAuthorSeletedToggle,
            onIssuerExpand,
            onIssuerSeletedToggle
        },
        paging: {
            currentPage,
            maxPage,
            setCurrentPage,
            onPageNavigation
        },
        loading
    };
}

export function useBookFairsPage(props: MaterialTopTabScreenProps<ParamListBase>) {
    const context = useContext(SearchPageContext);
    const bookFairsScrollViewRef = useRef<ScrollView>(null);
    const filterBookFairsDrawerRef = useRef<DrawerLayout>(null);

    const [loading, setLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [maxPage, setMaxPage] = useState(0);

    const [campaigns, setCampaigns] = useState<CampaignViewModel[]>([]);
    const [genres, setGenres] = useState<GenreBooksViewModel[]>([]);
    const [issuers, setIssuers] = useState<MultiUserViewModel[]>([]);

    const [filterStartDate, setfilterStartDate] = useState<Date>();
    const [filterEndDate, setfilterEndDate] = useState<Date>();
    const [seletedFormat, setSeletedFormat] = useState<number>();
    const [seletedLocation, setSeletedLocation] = useState<string[]>([]);
    const [seletedGenre, setSeletedGenre] = useState<number[]>([]);
    const [seletedIssuer, setSeletedIssuer] = useState<string[]>([]);

    const getCampaigns = (page: number) => {
        setLoading(true);
        appxios.get<BaseResponsePagingModel<CampaignViewModel>>(`${EndPont.public.campaigns}?Page=${page}&Size=10`)
            .then(response => {
                if (response.status == 200) {
                    setCampaigns(response.data.data);
                    setCurrentPage(page);
                    setMaxPage(getMaxPage(response.data.metadata.size, response.data.metadata.total));
                }
            }).finally(() => {
                setLoading(false);
            });
    }
    const onSearchSubmit = () => {

    }
    const onPageNavigation = (page: number) => {
        setCurrentPage(page);
        getCampaigns(page);
        bookFairsScrollViewRef.current?.scrollTo({
            y: 0,
            animated: true
        });
    }
    const onReset = () => {
        setfilterStartDate(undefined);
        setfilterEndDate(undefined);
        setSeletedGenre([]);
        setSeletedIssuer([]);
    }

    const onGenreExpand = () => {
        if (genres.length == 0) {
            setLoading(true);
            appxios.get<BaseResponsePagingModel<GenreBooksViewModel>>(`${EndPont.public.genres}?Size=20&WithBooks=false`)
                .then(response => {
                    if (response.status == 200) {
                        setGenres(response.data.data);
                    }
                }).finally(() => {
                    setLoading(false);
                });
        }
    }
    const onGenresSeletedToggle = (genreId: number) => {
        if (seletedGenre.find(id => genreId == id) == undefined) {
            setSeletedGenre([...seletedGenre, genreId]);
        }
        else {
            setSeletedGenre(seletedGenre.filter(id => genreId != id));
        }
    }

    const onLocationsSeletedToggle = (location: string) => {
        if (seletedLocation.find(id => location == id) == undefined) {
            setSeletedLocation([...seletedLocation, location]);
        }
        else {
            setSeletedLocation(seletedLocation.filter(id => location != id));
        }
    }

    const onFormatsSeletedToggle = (formatId: number) => {
        if (seletedFormat != formatId) {
            setSeletedFormat(formatId);    
        }
        else
        {
            setSeletedFormat(undefined);
        }
        
    }

    const onIssuerExpand = () => {
        if (issuers.length == 0) {
            setLoading(true);
            appxios.get<BaseResponsePagingModel<MultiUserViewModel>>(`${EndPont.users.index}?Role=2`)
                .then(response => {
                    if (response.status == 200) {
                        setIssuers(response.data.data);
                    }
                }).finally(() => {
                    setLoading(false);
                });
        }
    }
    const onIssuerSeletedToggle = (issuerId: string) => {
        if (seletedIssuer.find(id => issuerId == id) == undefined) {
            setSeletedIssuer([...seletedIssuer, issuerId]);
        }
        else {
            setSeletedIssuer(seletedIssuer.filter(id => issuerId != id));
        }
    }

    useEffect(() => {
        getCampaigns(1);

        const unsubscribe = props.navigation.addListener('tabPress', (e) => {
            //context.setOnSubmit(onSearchSubmit);
        });
        //context.setOnSubmit(onSearchSubmit);
        return unsubscribe;
    }, []);

    return {
        ref: {
            bookFairsScrollViewRef,
            filterBookFairsDrawerRef,
        },
        data: {
            campaigns,
            genres,
            issuers
        },
        paging: {
            onPageNavigation,
            currentPage,
            maxPage
        },
        event:
        {
            onReset,
            onLocationsSeletedToggle,
            onFormatsSeletedToggle,
            onSearchSubmit,
            onGenreExpand,
            onGenresSeletedToggle,
            onIssuerExpand,
            onIssuerSeletedToggle
        },
        input: {
            seletedFormat,
            seletedLocation,
            seletedGenre,
            seletedIssuer,
            filterStartDate:
            {
                value: filterStartDate,
                set: setfilterStartDate
            },
            filterEndDate:
            {
                value: filterEndDate,
                set: setfilterEndDate
            }
        },
        loading,
    };
}