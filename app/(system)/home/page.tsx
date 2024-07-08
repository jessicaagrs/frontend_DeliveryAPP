'use client';
import { KeysStorage, TypeAcess } from "@/enum/enums";
import { useLocalStorage } from "@/hooks/useLocalStorage";
import { useModal } from "@/hooks/useModal";
import { StoreResponse } from "@/types/storeType";
import { useEffect } from "react";

export default function Home() {
    const { showModal, SelectModalComponent } = useModal();
    const { getLocalStorage } = useLocalStorage();
    const typeAcess = getLocalStorage(KeysStorage.TYPEACESS) as string;
    const storeSelected = getLocalStorage<StoreResponse>(KeysStorage.STORE);

    useEffect(() => {
        if (typeAcess === TypeAcess.CUSTOMER && !storeSelected) {
            showModal();
        }
    }, []);

    return (
        <main>
            <SelectModalComponent />
        </main>
    );
};