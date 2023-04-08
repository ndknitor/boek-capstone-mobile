import { ParamListBase } from "@react-navigation/native";
import { StackScreenProps } from "@react-navigation/stack";
import { useEffect, useState } from "react";
import { TouchableOpacity, View } from "react-native";
import Info from "../../../assets/SvgComponents/Info";
import appxios from "../../../components/AxiosInterceptor";
import useAppContext from "../../../context/Context";
import useRouter from "../../../libs/hook/useRouter";
import { CampaignFormat } from "../../../objects/enums/CampaignFormat";
import { OrderPayment } from "../../../objects/enums/OrderPayment";
import { OrderType } from "../../../objects/enums/OrderType";
import { CampaignInCart } from "../../../objects/models/CampaignInCart";
import { ProductInCart } from "../../../objects/models/ProductInCart";
import { CreateOrderDetailsRequestModel } from "../../../objects/requests/OrderDetails/CreateOrderDetailsRequestModel";
import { CreateCustomerPickUpOrderRequestModel } from "../../../objects/requests/Orders/CreateCustomerPickUpOrderRequestModel";
import { CreateShippingOrderRequestModel } from "../../../objects/requests/Orders/CreateShippingOrderRequestModel";
import { OrderCalculationViewModel } from "../../../objects/viewmodels/Orders/Calculation/OrderCalculationViewModel";
import { OrderViewModel } from "../../../objects/viewmodels/Orders/OrderViewModel";
import { CustomerViewModel } from "../../../objects/viewmodels/Users/customers/CustomerViewModel";
import endPont from "../../../utils/endPoints";

export default function useOrderConfirmPage(props: StackScreenProps<ParamListBase>) {
    const { cart, setCart, setTotalProductQuantity, totalProductQuantity } = useAppContext();
    const { navigate, popToTop } = useRouter();
    const params = props.route.params as { orderType: number, selectedCampaignId: number };

    const [infoModalVisible, setInfoModalVisible] = useState(false);
    const [loading, setLoading] = useState(false);
    const [opacity, setOpacity] = useState(1);

    const [paymentMethod, setPaymentMethod] = useState(OrderPayment.Cash);
    const [orderType, setOrderType] = useState(0);
    const [seltedCampaign, setSeltedCampaign] = useState<CampaignInCart>();
    const [provisional, setProvisional] = useState(0);
    const [calculation, setCalculation] = useState<OrderCalculationViewModel>();
    const [customer, setCustomer] = useState<CustomerViewModel>();

    const getProductFinalPrice = (product: ProductInCart) => {
        let productPrice = product.salePrice;
        if (product.audioChecked) {
            productPrice += product.audioExtraPrice;
        }
        if (product.pdfChecked) {
            productPrice += product.pdfExtraPrice;
        }
        productPrice *= product.quantity;
        return productPrice;
    }
    const removeCampaignFromCart = () => {
        let subTotal = 0;
        seltedCampaign?.issuersInCart.map(i => i.productsInCart.map(product => {
            subTotal += product.quantity;
        }));
        setTotalProductQuantity(totalProductQuantity - subTotal);
        setCart(cart.filter(c => c.campaign.id != seltedCampaign?.campaign.id));
    }

    const onSumbit = () => {
        setLoading(true);
        const orderDetails: CreateOrderDetailsRequestModel[] = [];
        seltedCampaign?.issuersInCart.map(issuer => issuer.productsInCart.map(product => {
            orderDetails.push({
                bookProductId: product.id,
                quantity: product.quantity,
                withAudio: product.withAudio,
                withPdf: product.withPdf
            });
        }));
        if (params.orderType == OrderType.PickUp) {
            const request: CreateCustomerPickUpOrderRequestModel = {
                campaignId: seltedCampaign?.campaign.id,
                payment: paymentMethod,
                orderDetails: orderDetails
            };
            appxios.post<OrderViewModel[]>(endPont.orders.customer.pickUp, request).then((response) => {
                console.log(response.data);
                if (response.status == 200) {
                    popToTop();
                    navigate("Orders", { name: "CounterOrders" });
                    removeCampaignFromCart();
                }

            }).finally(() => {
                setLoading(false);
            });
        }
        if (params.orderType == OrderType.Shipping) {
            if (customer) {
                const request: CreateShippingOrderRequestModel = {
                    campaignId: seltedCampaign?.campaign.id,
                    payment: paymentMethod,
                    orderDetails: orderDetails,
                    freight: calculation?.freight,
                    addressRequest: {
                        detail: customer.user.addressViewModel.detail,
                        districtCode: customer.user.addressViewModel.districtCode as number,
                        provinceCode: customer.user.addressViewModel.provinceCode as number,
                        wardCode: customer.user.addressViewModel.wardCode as number
                    }
                };
                appxios.post<OrderViewModel[]>(endPont.orders.customer.shipping, request).then((response) => {
                    console.log(response.data);
                    if (response.status == 200) {
                        popToTop();
                        navigate("Orders", { name: "DeliveryOrders" });
                        removeCampaignFromCart();
                    }

                }).finally(() => {
                    setLoading(false);
                });
            }
        }
    }

    useEffect(() => {
        setOrderType(params.orderType);
        const campaign = cart.find(c => c.campaign.id == params.selectedCampaignId)
        setSeltedCampaign(campaign);
        let provisionalPrice = 0;
        campaign?.issuersInCart.map(i => i.productsInCart.map(product => {
            let productPrice = product.salePrice;
            if (product.audioChecked) {
                productPrice += product.audioExtraPrice;
            }
            if (product.pdfChecked) {
                productPrice += product.pdfExtraPrice;
            }
            productPrice *= product.quantity;
            provisionalPrice += productPrice;
        }));
        setProvisional(provisionalPrice);
        props.navigation.setOptions({
            headerRight: () =>
                <View style={{ justifyContent: "center", alignItems: "center" }}>
                    <TouchableOpacity onPress={() => setInfoModalVisible(true)}>
                        <Info scale={60} fill="white" />
                    </TouchableOpacity>
                </View>
        });

        setLoading(true);
        const orderDetails: CreateOrderDetailsRequestModel[] = [];
        campaign?.issuersInCart.map(issuer => issuer.productsInCart.map(product => {
            orderDetails.push({
                bookProductId: product.id,
                quantity: product.quantity,
                withAudio: product.audioChecked,
                withPdf: product.pdfChecked
            });
        }));
        appxios.get<CustomerViewModel>(endPont.users.me).then(userResponse => {
            setCustomer(userResponse.data);
            if (params.orderType == OrderType.Shipping) {
                const request = {
                    campaignId: campaign?.campaign.id,
                    addressRequest: {
                        detail: userResponse.data.user.addressViewModel.detail,
                        provinceCode: userResponse.data.user.addressViewModel.provinceCode,
                        districtCode: userResponse.data.user.addressViewModel.districtCode,
                        wardCode: userResponse.data.user.addressViewModel.wardCode
                    },
                    orderDetails: orderDetails
                };
                appxios.post<OrderCalculationViewModel>(endPont.orders.calculation.shipping, request).then(response => {
                    setCalculation(response.data);
                }).finally(() => {
                    setLoading(false);
                });
            }
            else {
                const request = {
                    campaignId: campaign?.campaign.id,
                    orderDetails: orderDetails
                };
                appxios.post<OrderCalculationViewModel>(endPont.orders.calculation.pickUp, request).then(response => {
                    setCalculation(response.data);
                }).finally(() => {
                    setLoading(false);
                });
            }
        });
    }, []);

    return {
        getProductFinalPrice,
        event: {
            onSumbit
        },
        data: {
            orderType,
            seltedCampaign,
            provisional,
            calculation
        },
        input: {
            paymentMethod: {
                value: paymentMethod,
                set: setPaymentMethod
            }
        },
        ui: {
            infoModalVisible,
            setInfoModalVisible,
            loading,
            opacity
        },
    }
}