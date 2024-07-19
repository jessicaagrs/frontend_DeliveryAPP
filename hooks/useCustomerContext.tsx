import { CustomerContext } from "@/contexts/CustomerProvider";
import { useContext } from "react";

export default function useCustomerContext() {
    return useContext(CustomerContext);
}