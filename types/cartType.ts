export type Product = {
    id: string;
    description: string;
    price: number;
    urlImage: string;
    quantity: number;
};

export type Cart = {
    value: number;
    products: Product[];
};
