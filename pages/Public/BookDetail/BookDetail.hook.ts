import { ParamListBase } from "@react-navigation/native";
import { StackScreenProps } from "@react-navigation/stack";
import { useEffect, useState } from "react";
import appxios from "../../../components/AxiosInterceptor";
import { BaseResponseModel } from "../../../objects/responses/BaseResponseModel";
import { MobileBookProductViewModel } from "../../../objects/viewmodels/BookProduct/Mobile/MobileBookProductViewModel";
import endPont from "../../../utils/endPoints";

export default function useBookDetailPage(props: StackScreenProps<ParamListBase>) {
    const [loading, setLoading] = useState(false);

    const [book, setBook] = useState<MobileBookProductViewModel>();
    useEffect(() => {
        const params = props.route.params as { bookId: string };
        setLoading(true);
        appxios.get<MobileBookProductViewModel>(`${endPont.public.books.mobile.products.index}/${params.bookId}`)
            .then(response => {
                setBook(response.data);
                setLoading(false);
            });
    }, []);
    return {
        loading,
        data:{
            book
        }
    };
}