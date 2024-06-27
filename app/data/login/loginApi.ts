import { Messages } from "@/app/enum/enums";
import { ErrorApi } from "@/app/types/errorApiType";
import { LoginRequest, LoginResponse } from "@/app/types/loginType";
import axios, { AxiosResponse } from "axios";

const instance = axios.create({
	baseURL: "https://backend-api-delivery.vercel.app/v1/",
});

async function loginSession(data: LoginRequest): Promise<AxiosResponse<LoginResponse>> {
	try {
		const response: AxiosResponse<LoginResponse> = await instance.post("login", data);
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

export default loginSession;
