import type { Metadata } from "next";
import { Montserrat, Inter } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Flor de Açúcar",
  description:
    "Cookies artesanais com muuuito recheio, feitos à mão com os melhores ingredientes. Experimente o sabor irresistível que vai te fazer se lambuzar desde a primeira mordida!",
  openGraph: {
    type: "website",
    url: "https://flor-de-acucar.vercel.app/",
    title: "Flor de Açúcar | Cookies Artesanais",
    description:
      "Cookies artesanais com muuuito recheio, feitos à mão com os melhores ingredientes. Experimente o sabor irresistível que vai te fazer se lambuzar desde a primeira mordida!",
    siteName: "Flor de Açúcar | Cookies Artesanais",
    // images: [
    //   {
    //     url: "https://i.imgur.com/cUgrAeU.png",
    //   },
    // ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-Br" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/images/logo/favicon.ico" />
        <link rel="apple-touch-icon" href="/images/logo/favicon.ico" />
      </head>
      <body className={`${montserrat.variable} ${inter.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
