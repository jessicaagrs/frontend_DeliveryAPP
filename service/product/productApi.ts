import { Filter } from "@/enum/enums";
import { ProductResponse } from "@/types/productType";
import axios, { AxiosResponse } from "axios";
import { handleApiError } from "../error/errorApi";

const instance = axios.create({
    baseURL: "https://backend-api-delivery.vercel.app/v1/",
});

async function getProducts(
    storeId: string,
    take: number,
    skip: number,
    token: string
): Promise<AxiosResponse<ProductResponse[]>> {
    try {
        const response: AxiosResponse<ProductResponse[]> = await instance.get(
            `products/paginator/${storeId}/${take}/${skip}`,
            {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            }
        );
        return response;
    } catch (error) {
        return handleApiError(error);
    }
}

async function getProductsByFilter(
    storeId: string,
    take: number,
    skip: number,
    token: string,
    filter: string
): Promise<AxiosResponse<ProductResponse[]>> {
    try {
        if (filter === Filter.ALL) {
            return getProducts(storeId, take, skip, token);
        }
        const response: AxiosResponse<ProductResponse[]> = await instance.get(
            `products/paginator/filter/${storeId}/${filter}/${take}/${skip}`,
            {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            }
        );
        return response;
    } catch (error) {
        return handleApiError(error);
    }
}

export { getProducts, getProductsByFilter };
