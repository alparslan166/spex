import type { Metadata } from "next";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "./globals.css";

export const metadata: Metadata = {
  title: "SFEX Tech",
  description: "Advanced technology for clean energy",
};

export default async function RootLayout(props: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await props.params;
  const messages = await getMessages();

  return (
    <html lang={locale}>
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className="antialiased min-h-screen">
        <NextIntlClientProvider messages={messages}>
          <Navbar />
          {props.children}
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
