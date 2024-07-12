import { CustomerRequest, CustomerResponse } from "@/types/customerType";
import axios, { AxiosResponse } from "axios";
import { handleApiError } from "../error/errorApi";

const instance = axios.create({
    baseURL: "https://backend-api-delivery.vercel.app/v1/",
});

async function createCustomer(data: CustomerRequest): Promise<AxiosResponse<string>> {
    try {
        const response: AxiosResponse<string> = await instance.post("customers", data);
        return response;
    } catch (error) {
        return handleApiError(error);
    }
}

async function getCustomerById(email: string, token: string): Promise<AxiosResponse<CustomerResponse>> {
    try {
        const response: AxiosResponse<CustomerResponse> = await instance.get(`customers/${email}`, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });
        return response;
    } catch (error) {
        return handleApiError(error);
    }
}

export { createCustomer, getCustomerById };
