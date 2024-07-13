import { TypeAcessContext } from "@/contexts/TypeAcessProvider";
import { useContext } from "react";

export default function useTypeAcess() {
    return useContext(TypeAcessContext);
}
