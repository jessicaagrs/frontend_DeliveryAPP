import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import DefaultProviderLogin from "../../contexts/default/DefaultProviderLogin";

const poppins = Poppins({
    weight: ["100", "300", "400", "500", "600", "700"],
    subsets: ["latin"],
    variable: "--font-poppins",
});

export const metadata: Metadata = {
    title: "Acesso - Delivery APP",
    description: "Área de login do usuário ou criação da conta de acesso",
    icons: {
        icon: "/favicon-login.ico",
    },
};

export default function LoginLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html
            lang="pt-br"
            className={poppins.variable}
        >
            <DefaultProviderLogin>
                <body>{children}</body>
            </DefaultProviderLogin>
        </html>
    );
}
