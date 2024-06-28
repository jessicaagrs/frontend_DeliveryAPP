import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import DefaultProviderLogin from "../../contexts/DefaultProviderLogin";

const poppins = Poppins({
  weight: ["100", "300", "400", "500", "600", "700"],
  subsets: ["latin"],
  variable: '--font-poppins',
});

export const metadata: Metadata = {
  title: "Acesso - Delivery APP",
  description: "Área de login do usuário ou criação da conta de acesso",
};

export default function LoginLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-Br" className={poppins.variable}>
      <DefaultProviderLogin>
        <body>{children}</body>
      </DefaultProviderLogin>
    </html>
  );
}
