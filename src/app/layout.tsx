import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { TooltipProvider } from "@/components/ui/tooltip";
import { RootLayout as Layout } from "@/components/layout";
import { cookies } from "next/headers";
import { Toaster } from "react-hot-toast";
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
          <Layout
            defaultLayout={defaultLayout as [number, number]}
            defaultCollapsed={defaultCollapsed}
            navCollapsedSize={3}>
            {children}
          </Layout>
          <Toaster />
        </TooltipProvider>
      </body>
    </html>
  );
}
