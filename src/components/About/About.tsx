import Image from "next/image";
import Link from "next/link";

export const About = () => {
  return (
    <div className="flex flex-col md:flex-row-reverse md:gap-12 lg:gap-16 px-4">
      <div className="self-center">
        <div className="relative rotate-3 aspect-square w-36 sm:w-40 md:w-48 rounded-lg overflow-hidden outline outline-4 outline-neutral-200 dark:outline-neutral-700 shadow">
          <Image
            src="/me2.webp"
            alt="me making some bug"
            width={0}
            height={0}
            sizes="100vw"
            className="w-full h-full"
          />
        </div>
      </div>
      <div className="grow">
        <h2 className="font-bold text-3xl md:text-4xl lg:text-5xl text-neutral-800 dark:text-neutral-100">
          About me
        </h2>
        <p className="text-neutral-600 dark:text-neutral-400 text-justify mt-1 lg:mt-2">
          Hi, I am a college student majoring in Information Systems with 2+
          years of hands-on experience in developing software products on
          various platforms, having interests in web development, and being
          familiar with modern front-end and back-end frameworks such as Next.js
          (React.js) and Node.js using JavaScript or TypeScript. Always
          passionate and open-minded to learn about new technologies. Applied
          software development life cycle, version control, and relevant
          frameworks to solve user and client needs.
        </p>
      </div>
    </div>
  );
};
