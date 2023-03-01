import { ParamListBase } from "@react-navigation/native";
import { StackScreenProps } from "@react-navigation/stack";
import React, { createElement, useEffect, useState } from "react";
import { Toast } from "react-native-toast-message/lib/src/Toast";
import appxios from "../../../components/AxiosInterceptor";
import CardHeader from "../../../components/CartHeader/CardHeader";
import { BaseResponseModel } from "../../../objects/responses/BaseResponseModel";
import { MobileBookProductViewModel } from "../../../objects/viewmodels/BookProduct/Mobile/MobileBookProductViewModel";
import endPont from "../../../utils/endPoints";

export default function useBookDetailPage(props: StackScreenProps<ParamListBase>) {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    const [book, setBook] = useState<MobileBookProductViewModel>();
    useEffect(() => {
        props.navigation.setOptions({
            headerRight: (props) => createElement(CardHeader)
        });
        const params = props.route.params as { bookId: string };
        setLoading(true);
        appxios.get<MobileBookProductViewModel>(`${endPont.public.books.mobile.products.index}/${params.bookId}`)
            .then(response => {
                //console.log(response.data.discount);
                setBook(response.data);
                props.navigation.setOptions({
                    title: response.data.title,
                    headerRight: (props) => createElement(CardHeader)
                });
            })
            .catch(() => {
                setError(true);
            })
            .finally(() => {
                setLoading(false);
            });

    }, []);
    return {
        loading,
        error,
        data: {
            book
        }
    };
}