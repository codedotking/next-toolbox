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
        <div className=" mx-auto min-h-screen  w-[1024px] pt-4">
          <Header />
          <main className="main">{children}</main>
        </div>
      </body>
    </html>
  );
}
