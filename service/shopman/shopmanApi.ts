import { ShopmanRequest, ShopmanResponse } from "@/types/shopmanType";
import axios, { AxiosResponse } from "axios";
import { handleApiError } from "../error/errorApi";

const instance = axios.create({
    baseURL: "https://backend-api-delivery.vercel.app/v1/",
});

async function createShopman(data: ShopmanRequest): Promise<AxiosResponse<string>> {
    try {
        const response: AxiosResponse<string> = await instance.post("shopmans", data);
        return response;
    } catch (error) {
        return handleApiError(error);
    }
}

async function getShopmanById(email: string, token: string): Promise<AxiosResponse<ShopmanResponse>> {
    try {
        const response: AxiosResponse<ShopmanResponse> = await instance.get(`shopmans/${email}`, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });
        return response;
    } catch (error) {
        return handleApiError(error);
    }
}

export { createShopman, getShopmanById };

