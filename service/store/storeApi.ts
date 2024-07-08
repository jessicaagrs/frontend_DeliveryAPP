import { Messages } from "@/enum/enums";
import { ErrorApi } from "@/types/errorApiType";
import { StoreRequest, StoreResponse } from "@/types/storeType";
import axios, { AxiosResponse } from "axios";

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

async function getStores(): Promise<AxiosResponse<StoreResponse[]>> {
	try {
		const response: AxiosResponse<StoreResponse[]> = await instance.get("stores");
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

async function getStoreById(id: string, token?: string): Promise<AxiosResponse<StoreResponse[]>> {
	try {

		if(!token) {
			return Promise.reject({ statusCode: 401, error: "Token não informado", message: Messages.UNEXPECTED_ERROR });
		}

		const response: AxiosResponse<StoreResponse[]> = await instance.get(`stores/${id}`, {
			headers: {
				Authorization: `Bearer ${token}`,
			},
		});
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

export { createStore, getStoreById, getStores };
