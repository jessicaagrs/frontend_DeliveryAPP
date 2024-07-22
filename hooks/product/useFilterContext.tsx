import { FilterProductsContext } from "@/contexts/FilterProductsProvider";
import { useContext } from "react";

export default function useFilterContext() {
    return useContext(FilterProductsContext);
}