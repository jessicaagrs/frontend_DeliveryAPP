"use client";

import CartArea from "@/components/ui/cart/cartArea";
import FilterProducts from "@/components/ui/home/filterProducts";
import SearchProducts from "@/components/ui/home/searchProducts";

export default function Home() {
    return (
        <main>
            <CartArea />
            <SearchProducts />
            <FilterProducts />
            {/* <ProductsArea/> */}
        </main>
    );
}
