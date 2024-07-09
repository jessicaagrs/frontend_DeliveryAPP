import { Messages } from "@/enum/enums";
import { CustomerRequest, CustomerResponse } from "@/types/customerType";
import { ErrorApi } from "@/types/errorApiType";
import axios, { AxiosResponse } from "axios";

const instance = axios.create({
    baseURL: "https://backend-api-delivery.vercel.app/v1/",
});

async function createCustomer(data: CustomerRequest): Promise<AxiosResponse<string>> {
    try {
        const response: AxiosResponse<string> = await instance.post("customers", data);
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

async function getCustomerById(email: string, token: string): Promise<AxiosResponse<CustomerResponse>> {
    try {
        const response: AxiosResponse<CustomerResponse> = await instance.get(`customers/${email}`, {
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

export { createCustomer, getCustomerById };

