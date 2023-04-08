import { ParamListBase } from "@react-navigation/native";
import { StackScreenProps } from "@react-navigation/stack";
import React, { createElement, useEffect, useRef, useState } from "react";
import { Toast } from "react-native-toast-message/lib/src/Toast";
import AudioPlayer, { AudioPlayerRefProps } from "../../../components/AudioPlayer/AudioPlayer";
import appxios from "../../../components/AxiosInterceptor";
import CardHeader from "../../../components/CartHeader/CardHeader";
import { BaseResponseModel } from "../../../objects/responses/BaseResponseModel";
import { MobileBookProductViewModel } from "../../../objects/viewmodels/BookProduct/Mobile/MobileBookProductViewModel";
import { OtherMobileBookProductsViewModel } from "../../../objects/viewmodels/BookProduct/Mobile/OtherMobileBookProductsViewModel";
import endPont from "../../../utils/endPoints";

export default function useBookDetailPage(props: StackScreenProps<ParamListBase>) {
    const audioPlayerRef = useRef<AudioPlayerRefProps>(null);

    const [loading, setLoading] = useState(false);
    const [descriptionExpanded, setDescriptionExpanded] = useState(false);
    const [informationExpanded, setInformationExpanded] = useState(false);
    const [trialAudioVisible, setTrialAudioVisible] = useState(false);

    const [book, setBook] = useState<MobileBookProductViewModel>();

    const showPdfOrAudio = () => {
        if (book?.withPdf || book?.withAudio) {
            return true;
        }
        return false;
    }

    const onTrialAudioModalClose = async () => {
        await audioPlayerRef.current?.pause();
        setTrialAudioVisible(false);
    }

    useEffect(() => {
        props.navigation.setOptions({
            headerRight: (props) => createElement(CardHeader)
        });
        const unsubscribe = props.navigation.addListener("beforeRemove", async () => {
            await onTrialAudioModalClose();
        });
        const params = props.route.params as { bookId: string };
        setLoading(true);
        appxios.get<MobileBookProductViewModel>(`${endPont.public.books.customer.products}/${params.bookId}`)
            .then(response => {
                //console.log(response.data.unhierarchicalBookProducts?.length);
                setBook(response.data);
                props.navigation.setOptions({
                    title: response.data.title,
                    headerRight: (props) => createElement(CardHeader)
                });
            })
            .finally(() => {
                setLoading(false);
            });
        return unsubscribe;
    }, [props.navigation]);

    return {
        ref: {
            audioPlayerRef
        },
        data: {
            book
        },
        event: {
            onTrialAudioModalClose
        },
        ui: {
            loading,
            descriptionExpanded,
            setDescriptionExpanded,
            informationExpanded,
            setInformationExpanded,
            showPdfOrAudio,
            trialAudioVisible,
            setTrialAudioVisible
        }
    };
}