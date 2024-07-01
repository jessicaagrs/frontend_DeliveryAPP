import { Messages } from "@/enum/enums";
import { CustomerRequest } from "@/types/customerType";
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
				const errorResponse: ErrorApi = {
					statusCode: error.response.status,
					error: error.response.data.error,
					message: error.response.data.message,
				};
				return Promise.reject(errorResponse);
			}
		}

		return Promise.reject({ statusCode: 500, error: "Erro Interno", message: Messages.UNEXPECTED_ERROR });
	}
}

export default createCustomer;
