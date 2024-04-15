"use client";

import { ScrollArea } from "@/components/ui/scroll-area";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { Nav } from "@/components/layout/nav";
import Footer from "./footer";

interface LayoutProps {
  defaultLayout: number[] | undefined;
  defaultCollapsed?: boolean;
  navCollapsedSize: number;
  children: React.ReactNode;
}

export const RootLayout = ({
  defaultLayout = [12, 88],
  defaultCollapsed = false,
  navCollapsedSize,
  children,
}: LayoutProps) => {
  const [isCollapsed, setIsCollapsed] = useState(defaultCollapsed);
  const storeCollapsed = (isCollapsed: boolean) => {
    document.cookie = `react-resizable-panels:collapsed=${JSON.stringify(
      isCollapsed
    )}`;
  };

  return (
    <ResizablePanelGroup
      direction="horizontal"
      className=" h-screen"
      onLayout={(sizes: number[]) => {
        document.cookie = `react-resizable-panels:layout=${JSON.stringify(
          sizes
        )}`;
      }}>
      <ResizablePanel
        minSize={12}
        maxSize={12}
        order={1}
        defaultSize={defaultLayout[0]}
        collapsible={true}
        collapsedSize={navCollapsedSize}
        onCollapse={() => {
          setIsCollapsed(true);
          storeCollapsed(true);
        }}
        onExpand={() => {
          setIsCollapsed(false);
          storeCollapsed(false);
        }}
        className={cn(
          isCollapsed && "min-w-[50px] transition-all duration-300 ease-in-out",
          "flex flex-col  justify-between items-center py-4"
        )}>
        <Nav isCollapsed={isCollapsed} />
        <Footer />
      </ResizablePanel>
      <ResizableHandle withHandle />
      <ResizablePanel defaultSize={defaultLayout[1]} order={2}>
        <div className="bg-muted/40">
          <ScrollArea className="h-screen">
            <div className="p-4">{children}</div>
          </ScrollArea>
        </div>
      </ResizablePanel>
    </ResizablePanelGroup>
  );
};
