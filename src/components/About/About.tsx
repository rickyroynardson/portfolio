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
        <h1 className="font-bold text-3xl md:text-4xl lg:text-5xl text-neutral-800 dark:text-neutral-100">
          About me
        </h1>
        <p className="text-neutral-600 dark:text-neutral-400 text-justify mt-1 lg:mt-2">
          Hello, my name is Ricky Roy Nardson. I live in Batam City, Riau
          Islands, Indonesia. I was someone who has been interested in the world
          of computers and technology. I started learning programming in 2019.
          Since then, i gradually improve my skill until now and will keep
          improving in the future and always explore new things.
        </p>
        <p className="text-neutral-600 dark:text-neutral-400 text-justify mt-1 lg:mt-2">
          I love to learn new things, write some code, creating some bugs, and
          play video games.
        </p>
      </div>
    </div>
  );
};
