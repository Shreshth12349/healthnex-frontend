import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Sidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";
import React from "react";
import MainSidebar from "@/components/MainSidebar";
import TopBar from "@/components/TopBar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className={"flex flex-row bg-[#F6F7FA]"}>
          <MainSidebar />
          <div className={"flex h-screen flex-col w-full"}>
            <TopBar />
            <div className={"p-8"}>{children}</div>
          </div>
        </div>
      </body>
    </html>
  );
}
