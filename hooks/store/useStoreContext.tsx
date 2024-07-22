import { StoreContext } from "@/contexts/default/StoreProvider";
import { useContext } from "react";

export default function useStoreContext() {
    return useContext(StoreContext);
}