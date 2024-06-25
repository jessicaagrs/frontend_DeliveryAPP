export interface LoginResponse {
	token: string;
	user: {
		id: string;
		typeLogin: string;
		creationDate: string;
	};
}

export interface LoginRequest {
	email: string;
	password: string;
    typeLogin: string;
}