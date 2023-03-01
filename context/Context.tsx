import { createContext, Dispatch, SetStateAction, useContext, useEffect, useState } from "react"
import { ProductInCart } from "../objects/models/ProductInCart";
import { MobileBookProductViewModel } from "../objects/viewmodels/BookProduct/Mobile/MobileBookProductViewModel";
import { LoginViewModel } from "../objects/viewmodels/Users/LoginViewModel";

export interface Store {
    user: LoginViewModel | undefined;
    setUser: Dispatch<SetStateAction<LoginViewModel | undefined>>;

    totalProductQuantity: number;
    setTotalProductQuantity: Dispatch<SetStateAction<number>>;

    cart: ProductInCart[];
    setCart: Dispatch<SetStateAction<ProductInCart[]>>;
    addToCart: (product: MobileBookProductViewModel, quantity: number) => void;
    removeFromCart: (productId: string) => void;
}
export const useProvider: () => Store = () => {
    const [user, setUser] = useState<LoginViewModel>();
    const [totalProductQuantity, setTotalProductQuantity] = useState(0);
    const [cart, setCart] = useState<ProductInCart[]>([]);

    const addToCart = (product: MobileBookProductViewModel, quantity: number) => {
        const productInCart = cart.find(p => p.id == product.id);
        let cartProduct: MobileBookProductViewModel = product;
        let cartQuantity = 0;
        let addTotalQuantity = 0;

        cartQuantity += quantity;
        addTotalQuantity += quantity;

        if (productInCart) {
            cartProduct = productInCart.product;
            cartQuantity = productInCart.quantity + quantity;
            const index = cart.indexOf(productInCart);
            setCart([
                ...cart.slice(0, index),
                { id: cartProduct.id, product: cartProduct, quantity: cartQuantity },
                ...cart.slice(index + 1)
            ]);
        }
        else {
            setCart([...cart, { id: cartProduct.id, product: cartProduct, quantity: cartQuantity }]);
        }
        setTotalProductQuantity(totalProductQuantity + addTotalQuantity);
    }
    const removeFromCart = (productId: string) => {
        const removeProductInCart = cart.find(p => p.id == productId);
        if(removeProductInCart)
        {
            setTotalProductQuantity(totalProductQuantity - removeProductInCart.quantity);
            setCart(cart.filter(p => p.id != productId));
        }
    }

    return {
        user,
        setUser,

        totalProductQuantity,
        setTotalProductQuantity,

        cart,
        setCart,
        addToCart,
        removeFromCart
    };
}
export const Context = createContext<Store>({} as Store);
export default function useAppContext() {
    return useContext(Context);
}

