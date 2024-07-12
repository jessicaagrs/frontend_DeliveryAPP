import { LoginRequest, LoginResponse } from "@/types/loginType";
import axios, { AxiosResponse } from "axios";
import { handleApiError } from "../error/errorApi";

const instance = axios.create({
    baseURL: "https://backend-api-delivery.vercel.app/v1/",
});

async function loginSession(data: LoginRequest): Promise<AxiosResponse<LoginResponse>> {
    try {
        const response: AxiosResponse<LoginResponse> = await instance.post("login", data);
        return response;
    } catch (error) {
        return handleApiError(error);
    }
}

export default loginSession;
