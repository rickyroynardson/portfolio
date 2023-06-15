import { Layout } from "@/components/Layout/Layout";
import { FaGithub, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import Image from "next/image";
import socials from "@/data/socials.json";
import Link from "next/link";

export default function HomePage() {
  const renderSocialIcon = (social: string) => {
    const style =
      "w-6 h-6 hover:text-neutral-700 hover:dark:text-neutral-200 transition duration-300";

    if (social === "Twitter") {
      return <FaTwitter className={style} />;
    } else if (social === "Instagram") {
      return <FaInstagram className={style} />;
    } else if (social === "Github") {
      return <FaGithub className={style} />;
    } else if (social === "LinkedIn") {
      return <FaLinkedin className={style} />;
    }
  };

  return (
    <Layout className="flex items-center">
      <div className="w-full flex flex-col lg:flex-row-reverse items-center gap-6 lg:gap-24 px-4 sm:px-8 md:px-12 lg:px-4">
        <div className="relative aspect-square w-28 sm:w-36 md:w-44 lg:w-[420px] rounded-full overflow-hidden outline outline-4 outline-neutral-200 dark:outline-neutral-700 shadow">
          <Image
            src="/me.webp"
            alt="me"
            width={0}
            height={0}
            sizes="100vw"
            className="w-full h-full"
          />
        </div>
        <div className="text-center lg:text-left">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl text-neutral-800 dark:text-neutral-100 font-bold">
            Lifetime learner, college student, and web developer.
          </h1>
          <p className="text-neutral-600 dark:text-neutral-400 md:text-lg mt-1 lg:mt-2">
            I’m Ricky Roy Nardson, a lifetime learner, college student, and web
            developer based in Kepulauan Riau, Indonesia.
          </p>
          <ul className="flex items-center justify-center lg:justify-start mt-5 lg:mt-7 gap-4 text-neutral-500 dark:text-neutral-400">
            {socials.map((social, index) => (
              <li key={index}>
                <Link
                  href={social.url}
                  target="_blank"
                  aria-label={social.name}
                >
                  {renderSocialIcon(social.name)}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Layout>
  );
}
