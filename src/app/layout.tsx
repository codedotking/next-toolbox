import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { TooltipProvider } from "@/components/ui/tooltip";
import { RootLayout as Layout } from "@/components/layout";
import { cookies } from "next/headers";
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
  const layout = cookies().get("react-resizable-panels:layout");
  const collapsed = cookies().get("react-resizable-panels:collapsed");
  const defaultLayout = layout ? JSON.parse(layout.value) : undefined;
  const defaultCollapsed = collapsed ? JSON.parse(collapsed.value) : undefined;

  return (
    <html lang="en">
      <body className={inter.className}>
        <TooltipProvider delayDuration={0}>
          {/* <div className="mx-auto min-h-screen lg:w-[1024px]">
            <Header />
            <main className="main px-4 fixed top-24 w-full lg:static">
            
            </main>
          </div> */}
          <Layout
            defaultLayout={defaultLayout as [number, number]}
            defaultCollapsed={defaultCollapsed}
            navCollapsedSize={4}>
            {children}
          </Layout>
        </TooltipProvider>
      </body>
    </html>
  );
}
