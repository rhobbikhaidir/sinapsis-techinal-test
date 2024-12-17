import { Children } from "@/components/types/types";
import { Geist, Geist_Mono } from "next/font/google";
import AppProvider from "./AppProvider";
import "./style.css";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const AppLayout = (props: Children) => {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <AppProvider>{props.children}</AppProvider>
      </body>
    </html>
  );
};

export default AppLayout;
