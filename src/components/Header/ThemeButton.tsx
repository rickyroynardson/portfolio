"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { FiSun, FiMoon } from "react-icons/fi";

export const ThemeButton = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    theme === "dark" ? setTheme("light") : setTheme("dark");
  };

  const renderIcon = () => {
    return theme === "dark" ? (
      <FiMoon className="text-neutral-200" />
    ) : (
      <FiSun className="text-blue-600" />
    );
  };

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <button
      onClick={toggleTheme}
      className="bg-white dark:bg-neutral-800 outline-neutral-200 dark:outline-neutral-700 outline-1 hover:outline-2 outline rounded-full p-2 lg:absolute lg:right-0 text-neutral-800 dark:text-neutral-100"
    >
      {renderIcon()}
    </button>
  );
};
