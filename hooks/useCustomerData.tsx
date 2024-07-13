import { CustomerContext } from "@/contexts/CustomerProvider";
import { useContext } from "react";

export default function useCustomerData() {
    return useContext(CustomerContext);
}