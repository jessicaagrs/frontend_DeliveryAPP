import { Messages } from "@/enum/enums";
import { ErrorApi } from "@/types/errorApiType";
import { ShopmanRequest, ShopmanResponse } from "@/types/shopmanType";
import axios, { AxiosResponse } from "axios";

const instance = axios.create({
    baseURL: "https://backend-api-delivery.vercel.app/v1/",
});

async function createShopman(data: ShopmanRequest): Promise<AxiosResponse<string>> {
    try {
        const response: AxiosResponse<string> = await instance.post("shopmans", data);
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

async function getShopmanById(email: string, token: string): Promise<AxiosResponse<ShopmanResponse>> {
    try {
        const response: AxiosResponse<ShopmanResponse> = await instance.get(`shopmans/${email}`, {
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
    }

    const internalError = new Error(Messages.UNEXPECTED_ERROR) as ErrorApi;
    internalError.statusCode = 500;
    internalError.error = "Erro Interno";
    internalError.message = Messages.UNEXPECTED_ERROR;
    return Promise.reject(internalError);
}

export { createShopman, getShopmanById };

