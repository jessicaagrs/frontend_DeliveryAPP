import { TypeAcessContext } from "@/contexts/TypeAcessProvider";
import { useContext } from "react";

export default function useTypeAcessContext() {
    return useContext(TypeAcessContext);
}
