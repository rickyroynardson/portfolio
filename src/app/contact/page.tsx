import { Layout } from "@/components/Layout/Layout";
import Link from "next/link";
import { FiMail } from "react-icons/fi";
import socials from "@/data/socials.json";
import { FaGithub, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";

export default function ContactPage() {
  const renderSocialIcon = (social: string) => {
    const style = "w-5 h-5";

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
    <Layout className="py-10">
      <div className="px-4">
        <h1 className="font-bold text-3xl md:text-4xl lg:text-5xl text-neutral-800 dark:text-neutral-100">
          Contact me
        </h1>
        <p className="text-neutral-600 dark:text-neutral-400 mt-1 lg:mt-2">
          You can reach me out via email at:
        </p>
        <Link
          href="mailto:rickyroynardson@gmail.com"
          className="group text-neutral-900 dark:text-neutral-200 block w-fit"
        >
          <span className="flex items-center gap-3">
            <FiMail className="w-5 h-5" />
            <p className="group-hover:text-blue-600 dark:group-hover:text-blue-400 transition duration-300">
              rickyroynardson@gmail.com
            </p>
          </span>
        </Link>
        <p className="text-neutral-600 dark:text-neutral-400 mt-1 lg:mt-2">
          or via socials below:
        </p>
        <ul className="space-y-2">
          {socials.map((social, index) => (
            <li key={index}>
              <Link
                href={social.url}
                target="_blank"
                className="group text-neutral-900 dark:text-neutral-200 block w-fit"
              >
                <span className="flex items-center gap-3">
                  {renderSocialIcon(social.name)}
                  <p>
                    <span className="font-semibold">{social.name}</span> -{" "}
                    <span className="group-hover:text-blue-600 dark:group-hover:text-blue-400 transition duration-300">
                      {social.username}
                    </span>
                  </p>
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </Layout>
  );
}
