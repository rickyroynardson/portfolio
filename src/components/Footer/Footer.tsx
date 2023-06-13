"use client";

import { FiArrowUp } from "react-icons/fi";
import navigations from "@/data/navigations.json";
import Link from "next/link";

export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="border-t-2 border-neutral-200 dark:border-neutral-700">
      <div className="relative max-w-5xl mx-auto px-4 py-6 lg:py-8">
        <div className="space-y-1">
          <ul className="flex gap-3">
            {navigations.map((navigation, index) => (
              <li key={index}>
                <Link
                  href={navigation.path}
                  className="text-sm hover:text-blue-600 hover:dark:text-blue-400"
                >
                  /{navigation.name.toLowerCase()}
                </Link>
              </li>
            ))}
          </ul>
          <p className="text-sm dark:text-neutral-200">
            &copy; 2023 Roooy. All rights reserved
          </p>
        </div>
        <button
          onClick={scrollToTop}
          className="bg-white dark:bg-neutral-800 outline-neutral-200 dark:outline-neutral-700 outline-1 hover:outline-2 outline rounded-full p-2 mx-4 absolute right-0 top-1/2 -translate-y-1/2 text-neutral-700 dark:text-white"
          aria-label="Scroll to top"
        >
          <FiArrowUp />
        </button>
      </div>
    </footer>
  );
};
