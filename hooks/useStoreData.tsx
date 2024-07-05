import { StoreContext } from "@/contexts/StoreProvider";
import { useContext } from "react";

export default function useStoreData() {
    return useContext(StoreContext);
}