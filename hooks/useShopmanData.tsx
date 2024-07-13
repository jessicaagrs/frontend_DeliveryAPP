import { ShopmanContext } from "@/contexts/ShopmanProvider";
import { useContext } from "react";

export default function useShopmanData() {
    return useContext(ShopmanContext);
}