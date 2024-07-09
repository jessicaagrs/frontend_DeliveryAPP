export interface ShopmanRequest {
	name: string;
	email: string;
	role: string;
	password: string;
	storeId: string;
}

export interface ShopmanResponse {
	id: string;
	name: string;
	email: string;
	role: string;
	status: boolean;
	password: string;
	storeId: string;
	createdAt: string;
	updateAt: string;
}
