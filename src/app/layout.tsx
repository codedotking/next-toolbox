import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "A useful toolbox",
  description: "A useful toolbox",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className=" mx-auto min-h-screen  w-[1024px]">
          <Header />
          <main className="main px-4 fixed top-24 w-full lg:static">{children}</main>
        </div>
      </body>
    </html>
  );
}
