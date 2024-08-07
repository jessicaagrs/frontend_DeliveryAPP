import axios, { AxiosResponse } from "axios";
import { handleApiError } from "../error/errorApi";
import { OrderResponse } from "@/types/orderType";

const instance = axios.create({
    baseURL: "https://backend-api-delivery.vercel.app/v1/",
});

async function getOrdersByCustomer(
    customerId: string,
    storeId: string,
    token: string
): Promise<AxiosResponse<OrderResponse[]>> {
    try {
        const response: AxiosResponse<OrderResponse[]> = await instance.get(
            `orders/byCustomer/all/${customerId}/${storeId}`,
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

export { getOrdersByCustomer };
