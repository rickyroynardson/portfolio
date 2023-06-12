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
    return theme === "dark" ? <FiSun /> : <FiMoon />;
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
      className="bg-neutral-800 outline-neutral-700 outline-1 hover:outline rounded-full p-2 lg:absolute lg:right-0"
    >
      {renderIcon()}
    </button>
  );
};
