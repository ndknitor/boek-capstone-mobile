import { ParamListBase } from "@react-navigation/native";
import { StackScreenProps } from "@react-navigation/stack";
import { useEffect, useRef, useState } from "react";
import { ScrollView } from "react-native";
import DrawerLayout from "react-native-drawer-layout";
import appxios from "../../../components/AxiosInterceptor";
import useAppContext from "../../../context/Context";
import { getMaxPage } from "../../../libs/functions/paging";
import { StaffProductInCart } from "../../../objects/models/StaffProductInCart";
import { BaseResponsePagingModel } from "../../../objects/responses/BaseResponsePagingModel";
import { AuthorBooksViewModel } from "../../../objects/viewmodels/Authors/AuthorBooksViewModel";
import { MobileBookProductViewModel } from "../../../objects/viewmodels/BookProduct/Mobile/MobileBookProductViewModel";
import { StaffCampaignMobilesViewModel } from "../../../objects/viewmodels/Campaigns/StaffCampaignMobilesViewModel";
import { GenreBooksViewModel } from "../../../objects/viewmodels/Genres/GenreBooksViewModel";
import { PublisherViewModel } from "../../../objects/viewmodels/Publishers/PublisherViewModel";
import { MultiUserViewModel } from "../../../objects/viewmodels/Users/MultiUserViewModel";
import endPont from "../../../utils/endPoints";

export function useCreateChooseProductsOrderBooksPage(props: StackScreenProps<ParamListBase>) {
    const params = props.route.params as { campaign: StaffCampaignMobilesViewModel, customer: {} };
    const { staffCart, setStaffCart } = useAppContext();

    const filterBooksDrawerRef = useRef<DrawerLayout>(null);
    const booksScrollViewRef = useRef<ScrollView>(null);

    const [loading, setLoading] = useState(false);

    const [currentPage, setCurrentPage] = useState(1);
    const [maxPage, setMaxPage] = useState(0);
    const [books, setBooks] = useState<MobileBookProductViewModel[]>([]);

    // const [genres, setGenres] = useState<GenreBooksViewModel[]>([]);
    // const [languages, setLanguages] = useState<string[]>([]);
    // const [issuers, setIssuers] = useState<MultiUserViewModel[]>([]);
    // const [authors, setAuthors] = useState<AuthorBooksViewModel[]>([]);
    // const [publishers, setPublishers] = useState<PublisherViewModel[]>([]);

    const [search, setSearch] = useState("");
    // const [sort, setSort] = useState("");
    // const [seletedBookIds, setSeletedBookIds] = useState<string[]>([]);
    // const [seletedGenre, setSeletedGenre] = useState<number[]>([]);
    // const [selectedFormats, setSelectedFormats] = useState<number[]>([]);
    // const [selectedLanguage, setSelectedLanguage] = useState<string[]>([]);
    // const [seletedIssuer, setSeletedIssuer] = useState<string[]>([]);
    // const [seletedAuthor, setSeletedAuthor] = useState<number[]>([]);
    // const [selectedPublisher, setSelectedPublisher] = useState<number[]>([]);
    const onPageNavigation = (page: number) => {

    }
    const getBooks = (page: number) => {
        setLoading(true);
        const query = new URLSearchParams();
        // if (seletedGenre.length > 0) {
        //     seletedGenre.map(item => query.append("BookProductItems.Book.GenreIds", item.toString()))
        // }
        // if (selectedFormats.length > 0) {
        //     selectedFormats.map(item => query.append("Formats", item.toString()))
        // }
        // if (selectedLanguage.length > 0) {
        //     selectedLanguage.map(item => query.append("BookProductItems.Book.Languages", item.toString()))
        // }
        // if (seletedIssuer.length > 0) {
        //     seletedIssuer.map(item => query.append("BookProductItems.Book.IssuerIds", item.toString()))
        // }
        // if (seletedAuthor.length > 0) {
        //     seletedAuthor.map(item => query.append("BookProductItems.Book.BookAuthors.AuthorIds", item.toString()))
        // }
        // if (selectedPublisher.length > 0) {
        //     selectedPublisher.map(item => query.append("BookProductItems.Book.PublisherIds", item.toString()))
        // }
        // if (search && search != "") {
        //     query.append("Title", search);
        // }
        // if (sort && sort != "") {
        //     query.append("Sort", sort);
        // }
        query.append("CampaignId", params.campaign.id.toString());
        query.append("Page", page.toString());
        query.append("Size", "30");

        //console.log(query.toString());


        appxios.get<BaseResponsePagingModel<MobileBookProductViewModel>>(`${endPont.public.books.customer.products}?${query.toString()}`)
            .then(response => {
                setBooks(response.data.data);
                setCurrentPage(page);
                setMaxPage(getMaxPage(response.data.metadata.size, response.data.metadata.total));
                //console.log(response.data.data[0].imageUrl);
            })
            .finally(() => {
                setLoading(false);
            });
    }

    const onSearchSubmit = () => {
        getBooks(1);
        filterBooksDrawerRef.current?.closeDrawer();
    }

    // const onReset = () => {
    //     setSeletedGenre([]);
    //     setSeletedIssuer([]);
    //     setSeletedAuthor([]);
    //     setSelectedPublisher([]);
    // }

    // const onGenreExpand = () => {
    //     if (genres.length == 0) {
    //         setLoading(true);
    //         appxios.get<BaseResponsePagingModel<GenreBooksViewModel>>(`${endPont.public.genres}?Size=20&WithBooks=false`)
    //             .then(response => {
    //                 if (response.status == 200) {
    //                     setGenres(response.data.data);
    //                 }
    //             }).finally(() => {
    //                 setLoading(false);
    //             });
    //     }
    // }
    // const onGenresSeletedToggle = (genreId: number) => {
    //     if (seletedGenre.find(id => genreId == id) == undefined) {
    //         setSeletedGenre([...seletedGenre, genreId]);
    //     }
    //     else {
    //         setSeletedGenre(seletedGenre.filter(id => genreId != id));
    //     }
    // }

    // const onFormatsToggle = (formatId: number) => {
    //     if (selectedFormats.find(id => formatId == id) == undefined) {
    //         setSelectedFormats([...selectedFormats, formatId]);
    //     }
    //     else {
    //         setSelectedFormats(selectedFormats.filter(id => formatId != id));
    //     }
    // }

    // const onLanguageExpand = () => {
    //     if (languages.length == 0) {
    //         setLoading(true);
    //         appxios.get<string[]>(endPont.public.languages)
    //             .then(response => {
    //                 if (response.status == 200) {
    //                     setLanguages(response.data);
    //                 }
    //             }).finally(() => {
    //                 setLoading(false);
    //             });
    //     }
    // }
    // const onLanguageSeletedToggle = (language: string) => {
    //     if (selectedLanguage.find(id => language == id) == undefined) {
    //         setSelectedLanguage([...selectedLanguage, language]);
    //     }
    //     else {
    //         setSelectedLanguage(selectedLanguage.filter(id => language != id));
    //     }
    // }

    // const onIssuerExpand = () => {
    //     if (issuers.length == 0) {
    //         setLoading(true);
    //         appxios.get<BaseResponsePagingModel<MultiUserViewModel>>(`${endPont.users.index}?Role=2`)
    //             .then(response => {
    //                 if (response.status == 200) {
    //                     setIssuers(response.data.data);
    //                 }
    //             }).finally(() => {
    //                 setLoading(false);
    //             });
    //     }
    // }
    // const onIssuerSeletedToggle = (issuerId: string) => {
    //     if (seletedIssuer.find(id => issuerId == id) == undefined) {
    //         setSeletedIssuer([...seletedIssuer, issuerId]);
    //     }
    //     else {
    //         setSeletedIssuer(seletedIssuer.filter(id => issuerId != id));
    //     }
    // }

    // const onAuthorExpand = () => {
    //     if (authors.length == 0) {
    //         setLoading(true);
    //         appxios.get<BaseResponsePagingModel<AuthorBooksViewModel>>(`${endPont.public.author}?Size=20&WithBooks=false`)
    //             .then(response => {
    //                 if (response.status == 200) {
    //                     setAuthors(response.data.data);
    //                 }
    //             }).finally(() => {
    //                 setLoading(false);
    //             });
    //     }
    // }

    // const onAuthorSeletedToggle = (authorId: number) => {
    //     if (seletedAuthor.find(id => authorId == id) == undefined) {
    //         setSeletedAuthor([...seletedAuthor, authorId]);
    //     }
    //     else {
    //         setSeletedAuthor(seletedAuthor.filter(id => authorId != id));
    //     }
    // }

    // const onPublisherExpand = () => {
    //     if (publishers.length == 0) {
    //         setLoading(true);
    //         appxios.get<BaseResponsePagingModel<PublisherViewModel>>(endPont.public.publishers)
    //             .then(response => {
    //                 if (response.status == 200) {
    //                     //console.log(response.data);
    //                     setPublishers(response.data.data);
    //                 }
    //             }).finally(() => {
    //                 setLoading(false);
    //             });
    //     }
    // }
    // const onPublisherSeletedToggle = (publisherId: number) => {
    //     if (selectedPublisher.find(id => publisherId == id) == undefined) {
    //         setSelectedPublisher([...selectedPublisher, publisherId]);
    //     }
    //     else {
    //         setSelectedPublisher(selectedPublisher.filter(id => publisherId != id));
    //     }
    // }

    const onBookSeleted = (book: MobileBookProductViewModel) => {
        const product = staffCart.find(p => p.id == book.id);
        if (product) {
            setStaffCart(staffCart.filter(p => p.id != book.id));
        }
        else {
            setStaffCart([...staffCart,
            {
                id: book.id,
                quantity: 1,
                imageUrl: book.imageUrl,
                salePrice: book.salePrice,
                coverPrice: book.book?.coverPrice,
                title: book.title,
                withPdf: false,
                withAudio: false,
                //checked: true,
                audioChecked: false,
                pdfChecked: false,
                audioExtraPrice: book.audioExtraPrice as number,
                pdfExtraPrice: book.pdfExtraPrice as number,
                issuerName: book.issuer?.user.name as string
            }]);
        }
        // if (seletedBookIds.find(id => id == book.id)) {
        //     setSeletedBookIds(seletedBookIds.filter(id => id != book.id));
        // }
        // else {
        //     setSeletedBookIds([...seletedBookIds, book.id]);
        // }
    }

    useEffect(() => {
        getBooks(1);
    }, []);

    return {
        ref: {
            filterBooksDrawerRef,
            booksScrollViewRef
        },
        input: {
            // seletedBookIds,
            // seletedGenre,
            // selectedLanguage,
            // selectedFormats,
            // seletedIssuer,
            // selectedPublisher,
            // seletedAuthor,
            search: {
                value: search,
                set: setSearch
            },
            // sort: {
            //     value: sort,
            //     set: setSort
            // }
        },
        event: {
            onBookSeleted,
            onSearchSubmit,
            // onReset,
            // onFormatsToggle,
            // onLanguageExpand,
            // onLanguageSeletedToggle,
            // onGenreExpand,
            // onGenresSeletedToggle,
            // onPublisherExpand,
            // onPublisherSeletedToggle,
            // onAuthorExpand,
            // onAuthorSeletedToggle,
            // onIssuerExpand,
            // onIssuerSeletedToggle
        },
        data: {
            books,
            // genres,
            // languages,
            // publishers,
            // authors,
            // issuers
        },
        ui: {
            loading,
            setLoading
        },
        paging: {
            maxPage,
            currentPage,
            onPageNavigation
        }
    };
}
export function useCreateChooseProductsOrderSelectedBooksPage() {
    const { staffCart, setStaffCart } = useAppContext();
    // const onToggleChecked = (product: StaffProductInCart) => {
    //     const cloneCart = Object.create(staffCart) as StaffProductInCart[];
    //     const cloneProduct = cloneCart.find(p => p.id == product.id);
    //     if (cloneProduct) {
    //         cloneProduct.checked = !cloneProduct.checked;
    //     }
    //     setStaffCart(cloneCart);
    // }
    const removeFromCart = (productId: string) => {
        setStaffCart(staffCart.filter(p => p.id != productId));
    }
    const onQuantityChange = (productId: string, quantity: number) => {
        const cloneCart = Object.create(staffCart) as StaffProductInCart[];
        const productInCart = cloneCart.find(p => p.id == productId);
        if (productInCart) {
            productInCart.quantity++;
        }
        setStaffCart(cloneCart);
    }
    return {
        event: {
            removeFromCart,
            onQuantityChange
        }
    };
}