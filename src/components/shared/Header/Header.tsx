"use client";
import { usePathname } from "next/navigation";
import React from "react";
import useHeader from "./Header.hook";
import Icon from "../Icon";

const Header = () => {
  const path = usePathname();
  const { user, onLogut, theme, setTheme, gotoHome } = useHeader();
  if (path === "/login") return null;
  return (
    <div className="w-full border-b-2 dark:border-b-gray-700  shadow-sm flex flex-row p-2 justify-between fixed items-center dark:bg-ireng bg-white">
      <button id="home" className="text-gray-600 text-sm dark:text-primary cursor-pointer" onClick={gotoHome}>Welcome, {user}</button>
      <div className="flex flex-row gap-2">
        <button
          onClick={() => setTheme(theme === "light" ? "dark" : "light")}
        >
          {theme === 'light' ?  <Icon icon="moon" /> : <Icon icon="sun" color="white" />}
        </button>
        <button id="logout" className="p-2 font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700  flex flex-row gap-1 items-center justify-center">
          <span className="text-gray-600 text-sm dark:text-primary" onClick={onLogut}>
            Logout
          </span>
          <Icon icon="log-in" size="20"/>
        </button>
      </div>
    </div>
  );
};

export default Header;
