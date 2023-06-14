import { About } from "@/components/About/About";
import { Education } from "@/components/About/Education";
import { Experience } from "@/components/About/Experience";
import { Skillset } from "@/components/About/Skillset";
import { Layout } from "@/components/Layout/Layout";

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
