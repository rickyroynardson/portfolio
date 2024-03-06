import "./globals.css";
import { Inter } from "next/font/google";
import Providers from "./providers";
import { Header } from "@/components/Header/Header";
import { Footer } from "@/components/Footer/Footer";
import { Metadata } from "next";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  metadataBase: new URL("https://rickyroyn.vercel.app/"),
  title: "Ricky Roy Nardson | Portfolio",
  description: "My personal portfolio website, check this out!",
  alternates: {
    canonical: "https://rickyroyn.vercel.app/",
  },
  openGraph: {
    title: "Ricky Roy Nardson | Portfolio",
    description: "My personal portfolio website, check this out!",
    url: "https://rickyroyn.vercel.app/",
    type: "website",
    siteName: "Ricky Roy Nardson | Portfolio",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.variable} font-sans bg-white dark:bg-neutral-900`}
      >
        <Providers>
          <div className="min-h-screen flex flex-col">
            <Header />
            {children}
          </div>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
