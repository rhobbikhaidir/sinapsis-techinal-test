"use client";
import { Children } from "@/components/types/types";
import AppProvider from "./AppProvider";
import "./style.css";

const AppLayout = (props: Children) => {
  return (
    <html lang="en">
      <body>
        <AppProvider>{props.children}</AppProvider>
      </body>
    </html>
  );
};

export default AppLayout;
