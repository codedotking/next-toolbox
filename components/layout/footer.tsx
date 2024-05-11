import { GitHubLogoIcon } from "@radix-ui/react-icons";
import { cn } from "@/lib/utils";
import { ModeToggle } from "./mode-toggle";
export default function Header({ isCollapsed }: { isCollapsed: boolean }) {
  return (
    <div
      className={cn(
        " flex justify-between py-4 w-full px-2",
        isCollapsed && "flex-col items-center gap-4"
      )}>
      <a
        className=" flex place-items-center gap-2 p-8 lg:p-0"
        href="https://github.com/huala-fun/next-toolbox"
        target="_blank"
        rel="noopener noreferrer">
        <GitHubLogoIcon width={24} height={24} />
      </a>
      <ModeToggle />
    </div>
  );
}
