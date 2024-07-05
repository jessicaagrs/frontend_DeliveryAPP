export interface StoreRequest {
    cnpj: string;
    corporateReason: string;
    phone: string;
    acessPassword: string;
}

export interface StoreResponse {
    id: string;
    cnpj: string;
    corporateReason: string;
    phone: string;
    createdAt: string;
    updateAt: string;
}