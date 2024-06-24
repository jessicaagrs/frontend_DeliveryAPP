export interface User {
	token: string;
	user: {
		id: string;
		typeLogin: string;
		creationDate: string;
	};
}
