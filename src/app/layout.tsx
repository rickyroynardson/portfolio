import "./globals.css";
import { Inter } from "next/font/google";
import Providers from "./providers";
import { Header } from "@/components/Header/Header";
import { Layout } from "@/components/Layout/Layout";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
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
            <Layout>{children}</Layout>
          </div>
        </Providers>
      </body>
    </html>
  );
}
