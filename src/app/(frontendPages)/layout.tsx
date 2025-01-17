import type { Metadata } from "next";
import "../globals.css";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";

export const metadata: Metadata = {
  title: "FLIXGO - Online Movies, Tv Shows",
  description: "FLIXGO",
  icons: [
    {
      rel: "icon",
      type: "image/png",
      sizes: "32x32",
      url: "/favicon/favicon-32x32.png",
    },

    {
      rel: "apple-touch-icon",
      sizes: "72x72",
      url: "/favicon/apple-touch-icon-72x72.png",
    },
    {
      rel: "shortcut icon",
      sizes: "114x114",
      url: "/favicon/apple-touch-icon-114x114.png",
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
