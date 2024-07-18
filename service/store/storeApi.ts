import { Messages } from "@/enum/enums";
import { StoreRequest, StoreResponse } from "@/types/storeType";
import axios, { AxiosResponse } from "axios";
import { handleApiError } from "../error/errorApi";
import { getShopmanById } from "../shopman/shopmanApi";

const instance = axios.create({
    baseURL: "https://backend-api-delivery.vercel.app/v1/",
});

async function createStore(data: StoreRequest): Promise<AxiosResponse<string>> {
    try {
        const response: AxiosResponse<string> = await instance.post("stores", data);
        return response;
    } catch (error) {
        return handleApiError(error);
    }
}

async function getStores(): Promise<AxiosResponse<StoreResponse[]>> {
    try {
        const response: AxiosResponse<StoreResponse[]> = await instance.get("stores");
        return response;
    } catch (error) {
        return handleApiError(error);
    }
}

async function getStoreById(id: string | undefined, token: string): Promise<AxiosResponse<StoreResponse>> {
    try {
        if (!id) throw new Error(Messages.UNEXPECTED_ERROR);
        const response: AxiosResponse<StoreResponse> = await instance.get(`stores/${id}`, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });
        return response;
    } catch (error) {
        return handleApiError(error);
    }
}

async function getStoreByIdShopman(
    emailShopman: string | undefined,
    token: string
): Promise<AxiosResponse<StoreResponse>> {
    try {
        if (!emailShopman) throw new Error(Messages.UNEXPECTED_ERROR);

        const shopman = await getShopmanById(emailShopman, token);

        const store = await getStoreById(shopman.data.storeId, token);

        return store;
    } catch (error) {
        return handleApiError(error);
    }
}

export { createStore, getStoreById, getStoreByIdShopman, getStores };

