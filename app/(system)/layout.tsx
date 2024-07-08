import Navbar from "@/components/ui/navbar/Navbar";
import DefaultProviderSystem from "@/contexts/DefaultProviderSystem";
import type { Metadata } from "next";
import { Poppins } from "next/font/google";

const poppins = Poppins({
    weight: ["100", "300", "400", "500", "600", "700"],
    subsets: ["latin"],
    variable: '--font-poppins',
});

export const metadata: Metadata = {
    title: "Delivery APP",
    description: "Compre sua comida online",
};

export default function SystemLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="pt-br" className={poppins.variable}>
            <body>
                <DefaultProviderSystem>
                    <Navbar />
                    {children}
                </DefaultProviderSystem>
            </body>
        </html>
    );
}