export interface LoginResponse {
	token: string;
	user: {
		id: string;
		typeLogin: string;
		creationDate: string;
	};
}

export interface LoginRequest {
	email: string | undefined;
	password: string | undefined;
	typeLogin: string | undefined;
}
