import { useContext } from "react";
import { TypeAcessContext } from "../contexts/TypeAcessContext";

export default function useTypeAcess() {
    return useContext(TypeAcessContext);
}