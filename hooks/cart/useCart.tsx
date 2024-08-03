import { KeysStorage } from "@/enum/enums";
import { Cart, Product } from "@/types/cartType";
import { useLocalStorage } from "../global/useLocalStorage";
import useCartContext from "./useCartContext";

export default function useCart() {
    const { getLocalStorage, setLocalStorage } = useLocalStorage();
    const { totalItems, setTotalItems } = useCartContext();

    const getCartStorage = () => {
        const cart = getLocalStorage(KeysStorage.CART) as Cart;
        return cart;
    };

    const calculateTotalCart = (list: Product[]) => {
        return Number(list.reduce((total, product) => total + product.price * product.quantity, 0).toFixed(2));
    };

    const calculateTotalItemsCart = () => {
        const cart = getCartStorage();
        if (cart) {
            const total = cart.products.reduce((total, product) => total + product.quantity, 0);
            setTotalItems(total);
        }
    };

    const addProductCart = (product: Product) => {
        const cart = getCartStorage();

        if (cart) {
            const existProduct = cart.products.some(p => p.id === product.id);
            if (existProduct) {
                updateProductCart(product);
            } else {
                cart.products.push(product);
                cart.value = calculateTotalCart(cart.products);
                setLocalStorage(KeysStorage.CART, cart);
                calculateTotalItemsCart();
            }
        } else {
            const newCart: Cart = {
                value: 0,
                products: [product],
            };

            newCart.value = calculateTotalCart(newCart.products);
            setLocalStorage(KeysStorage.CART, newCart);
            calculateTotalItemsCart();
        }
    };

    const updateProductCart = (product: Product) => {
        const cart = getCartStorage();
        if (cart) {
            const updatedProducts = cart.products.map(p => {
                if (p.id === product.id) {
                    p.quantity++;
                }
                return p;
            });

            cart.products = updatedProducts;
            cart.value = calculateTotalCart(cart.products);
            setLocalStorage(KeysStorage.CART, cart);
            calculateTotalItemsCart();
        }
    };

    const removeProductCart = (product: Product) => {
        const cart = getCartStorage();
        if (cart) {
            const updatedProducts = cart.products.filter(p => p.id !== product.id);
            cart.products = updatedProducts;
            cart.value = calculateTotalCart(cart.products);
            setLocalStorage(KeysStorage.CART, cart);
            calculateTotalItemsCart();
        }
    };

    return {
        addProductCart,
        updateProductCart,
        removeProductCart,
        getCartStorage,
        calculateTotalItemsCart,
        totalItems,
        setTotalItems,
    };
}
