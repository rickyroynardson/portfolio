"use client";

import Link from "next/link";
import { ThemeButton } from "./ThemeButton";
import { usePathname } from "next/navigation";
import navigations from "@/data/navigations.json";

export const Header = () => {
  const pathname = usePathname();
  const isLinkActive = (path: string) => {
    return pathname === path && "text-blue-600 dark:text-blue-400";
  };

  return (
    <header className="w-full h-fit max-w-5xl mx-auto relative flex justify-between lg:justify-center items-center my-4 px-4 lg:px-0">
      <ul className="bg-white dark:bg-neutral-800 outline-neutral-200 dark:outline-neutral-700 outline-1 hover:outline-2 outline w-fit rounded-full flex gap-6 px-4 py-2 font-semibold text-xs md:text-sm text-neutral-800 dark:text-neutral-100">
        {navigations.map((navigation, index) => (
          <li key={index}>
            <Link
              href={navigation.path}
              className={`${isLinkActive(
                navigation.path
              )} hover:text-blue-600 dark:hover:text-blue-400 transition duration-300`}
            >
              {navigation.name}
            </Link>
          </li>
        ))}
      </ul>
      <ThemeButton />
    </header>
  );
};
