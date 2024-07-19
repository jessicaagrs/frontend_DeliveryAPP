import { ShopmanContext } from "@/contexts/ShopmanProvider";
import { useContext } from "react";

export default function useShopmanContext() {
    return useContext(ShopmanContext);
}