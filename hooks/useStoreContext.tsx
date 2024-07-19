import { StoreContext } from "@/contexts/StoreProvider";
import { useContext } from "react";

export default function useStoreContext() {
    return useContext(StoreContext);
}