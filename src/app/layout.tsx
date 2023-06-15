import "./globals.css";
import { Inter } from "next/font/google";
import Providers from "./providers";
import { Header } from "@/components/Header/Header";
import { Layout } from "@/components/Layout/Layout";
import { Footer } from "@/components/Footer/Footer";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata = {
  title: "Ricky Roy Nardson | Portfolio",
  description: "My personal portfolio website, check this out!",
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
