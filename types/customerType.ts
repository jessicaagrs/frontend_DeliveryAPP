export interface CustomerRequest {
    name: string;
    email: string;
    password: string;
    phone: string;
}

export interface CustomerResponse {
    id: string;
    name: string;
    email: string;
    status: boolean;
    password: string;
    phone: string;
    createdAt: string;
    updateAt: string;
}
