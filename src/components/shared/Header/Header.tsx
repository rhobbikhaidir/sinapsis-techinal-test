"use client";
import { usePathname } from "next/navigation";
import React from "react";
import useHeader from "./Header.hook";
import Icon from "../Icon";

const Header = () => {
  const path = usePathname();
  const { user, onLogut } = useHeader();
  if (path === "/login") return null;
  return (
    <div className="w-full border-b-2 shadow-sm flex flex-row p-2 justify-between fixed items-center">
      <p className="text-gray-600 text-sm">Welcome, {user}</p>
      <button className="p-2 font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700  flex flex-row gap-1 items-center justify-center">
        <span className="text-gray-600 text-sm" onClick={onLogut}>Logout</span>
        <Icon icon="log-in" size='20' />
      </button>
    </div>
  );
};

export default Header;
