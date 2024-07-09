import { Messages } from "@/enum/enums";
import { ErrorApi } from "@/types/errorApiType";
import { StoreRequest, StoreResponse } from "@/types/storeType";
import axios, { AxiosResponse } from "axios";
import { getShopmanById } from "../shopman/shopmanApi";

const instance = axios.create({
    baseURL: "https://backend-api-delivery.vercel.app/v1/",
});

async function createStore(data: StoreRequest): Promise<AxiosResponse<string>> {
    try {
        const response: AxiosResponse<string> = await instance.post("stores", data);
        return response;
    } catch (error) {
        if (axios.isAxiosError(error)) {
            if (error.response) {
                const errorResponse = new Error() as ErrorApi;
                errorResponse.statusCode = error.response.status;
                errorResponse.error = error.response.data.error;
                errorResponse.message = error.response.data.message;
                return Promise.reject(errorResponse);
            }
        }

        const internalError = new Error(Messages.UNEXPECTED_ERROR) as ErrorApi;
        internalError.statusCode = 500;
        internalError.error = "Erro Interno";
        internalError.message = Messages.UNEXPECTED_ERROR;
        return Promise.reject(internalError);
    }
}

async function getStores(): Promise<AxiosResponse<StoreResponse[]>> {
    try {
        const response: AxiosResponse<StoreResponse[]> = await instance.get("stores");
        return response;
    } catch (error) {
        if (axios.isAxiosError(error)) {
            if (error.response) {
                const errorResponse = new Error() as ErrorApi;
                errorResponse.statusCode = error.response.status;
                errorResponse.error = error.response.data.error;
                errorResponse.message = error.response.data.message;
                return Promise.reject(errorResponse);
            }
        }

        const internalError = new Error(Messages.UNEXPECTED_ERROR) as ErrorApi;
        internalError.statusCode = 500;
        internalError.error = "Erro Interno";
        internalError.message = Messages.UNEXPECTED_ERROR;
        return Promise.reject(internalError);
    }
}

async function getStoreById(id: string, token: string): Promise<AxiosResponse<StoreResponse>> {
    try {
        const response: AxiosResponse<StoreResponse> = await instance.get(`stores/${id}`, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });
        return response;
    } catch (error) {
        if (axios.isAxiosError(error)) {
            if (error.response) {
                const errorResponse = new Error() as ErrorApi;
                errorResponse.statusCode = error.response.status;
                errorResponse.error = error.response.data.error;
                errorResponse.message = error.response.data.message;
                return Promise.reject(errorResponse);
            }
        }

        const internalError = new Error(Messages.UNEXPECTED_ERROR) as ErrorApi;
        internalError.statusCode = 500;
        internalError.error = "Erro Interno";
        internalError.message = Messages.UNEXPECTED_ERROR;
        return Promise.reject(internalError);
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
        if (axios.isAxiosError(error)) {
            if (error.response) {
                const errorResponse = new Error() as ErrorApi;
                errorResponse.statusCode = error.response.status;
                errorResponse.error = error.response.data.error;
                errorResponse.message = error.response.data.message;
                return Promise.reject(errorResponse);
            }
        }

        const internalError = new Error(Messages.UNEXPECTED_ERROR) as ErrorApi;
        internalError.statusCode = 500;
        internalError.error = "Erro Interno";
        internalError.message = Messages.UNEXPECTED_ERROR;
        return Promise.reject(internalError);
    }
}

export { createStore, getStoreById, getStoreByIdShopman, getStores };

