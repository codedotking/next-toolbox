"use client";
import { Home, BarcodeIcon } from "lucide-react";
import Link from "next/link";
import { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import useLocation from "@/hooks/useLocation";
import { usePathname } from "next/navigation";

interface NavProps {
  isCollapsed: boolean;
}

interface link {
  title: string;
  label?: string;
  icon: LucideIcon;
  variant: "default" | "ghost";
  path: string;
}
const links: link[] = [
  {
    title: "首页",
    label: "",
    icon: Home,
    variant: "default",
    path: "/",
  },
  {
    title: "条形码",
    label: "",
    icon: BarcodeIcon,
    variant: "ghost",
    path: "/barcode",
  },
];

export function Nav({ isCollapsed }: NavProps) {
  const pathname = usePathname();

  return (
    <div
      data-collapsed={isCollapsed}
      className="group flex flex-col gap-4  flex-shrink-0 w-full">
      <nav className="grid gap-2 px-2 group-[[data-collapsed=true]]:justify-center ">
        {links.map((link, index) =>
          isCollapsed ? (
            <Tooltip key={index} delayDuration={0}>
              <TooltipTrigger asChild>
                <Link
                  href={link.path}
                  className={cn(
                    buttonVariants({
                      variant: link.path == pathname ? "default" : "ghost",
                      size: "icon",
                    }),
                    "h-9 w-9",
                    link.path == pathname &&
                      "dark:bg-muted dark:text-muted-foreground dark:hover:bg-muted dark:hover:text-white"
                  )}>
                  <link.icon className="h-4 w-4" />
                  <span className="sr-only">{link.title}</span>
                </Link>
              </TooltipTrigger>
              <TooltipContent side="right" className="flex items-center gap-4">
                {link.title}
                {link.label && (
                  <span className="ml-auto text-muted-foreground">
                    {link.label}
                  </span>
                )}
              </TooltipContent>
            </Tooltip>
          ) : (
            <Link
              key={index}
              href={link.path}
              className={cn(
                buttonVariants({
                  variant: link.path == pathname ? "default" : "ghost",
                  size: "lg",
                }),
                link.path == pathname &&
                  "dark:bg-muted dark:text-white dark:hover:bg-muted dark:hover:text-white",
                "justify-start  px-4"
              )}>
              <link.icon className="mr-2 h-4 w-4" />
              {link.title}
              {link.label && (
                <span
                  className={cn(
                    "ml-auto",
                    link.path == pathname && "text-background dark:text-white"
                  )}>
                  {link.label}
                </span>
              )}
            </Link>
          )
        )}
      </nav>
    </div>
  );
}
