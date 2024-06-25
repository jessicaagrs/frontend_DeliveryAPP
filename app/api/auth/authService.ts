import { LoginRequest, LoginResponse } from "@/app/models/auth/authModel";
import axios from "axios";

const instance = axios.create({
	baseURL: "https://backend-api-delivery.vercel.app/v1/",
});

export const AuthService = () => {
	async function fetchLogin(dataUser: LoginRequest): Promise<LoginResponse> {
		const { data } = await instance.post<LoginResponse>("/login", dataUser);
		return data;
	}

	return { fetchLogin };
};
