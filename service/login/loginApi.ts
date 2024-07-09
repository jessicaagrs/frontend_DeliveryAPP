import { Messages } from "@/enum/enums";
import { ErrorApi } from "@/types/errorApiType";
import { LoginRequest, LoginResponse } from "@/types/loginType";
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

export default loginSession;
