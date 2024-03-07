import { About } from "@/components/About/About";
import { Education } from "@/components/About/Education";
import { Experience } from "@/components/About/Experience";
import { Skillset } from "@/components/About/Skillset";
import { Layout } from "@/components/Layout/Layout";
import { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://rickyroyn.vercel.app/"),
  title: "Ricky Roy Nardson | About",
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_SITE_URL}/about`,
  },
  openGraph: {
    title: "Ricky Roy Nardson | About",
    description: "My personal portfolio website, check this out!",
    url: `${process.env.NEXT_PUBLIC_SITE_URL}/about`,
    type: "website",
    siteName: "Ricky Roy Nardson | About",
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

export default function AboutPage() {
  return (
    <Layout className="py-10 space-y-5 sm:space-y-7 md:space-y-9 lg:space-y-11">
      <div className="space-y-3">
        <About />
        <Skillset />
      </div>
      <Experience />
      <Education />
    </Layout>
  );
}
