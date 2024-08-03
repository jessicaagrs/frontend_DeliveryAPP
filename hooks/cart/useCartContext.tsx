import { CartContext } from "@/contexts/CartProvider";
import { useContext } from "react";

export default function useCartContext() {
    return useContext(CartContext);
}
