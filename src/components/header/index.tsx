import Image from "next/image";
import { GitHubLogoIcon } from "@radix-ui/react-icons";
export default function Header() {
  return (
    <div
      className="fixed left-0  lg:py-8  top-0 justify-between   dark:from-inherit  bg-gradient-to-b 
    lg:static w-full flex lg:justify-between backdrop-blur-2xl 
    lg:dark:bg-zinc-800/30 dark:border-neutral-800 dark:bg-zinc-800/30 
     z-10  lg:max-w-5xl items-center  font-mono text-sm ">
      <div className=" cursor-pointer">
        <a
          className="flex place-items-center gap-2 p-8 lg:p-0"
          href="/"
          rel="noopener noreferrer">
          <Image
            src="/logo.png"
            alt="Toolbox Logo"
            className="dark:invert"
            width={24}
            height={24}
            priority
          />
          <span className=" text-xl">toolbox</span>
        </a>
      </div>
      <div className="flex items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
        <a
          className=" flex place-items-center gap-2 p-8 lg:p-0"
          href="https://github.com/huala-fun/next-toolbox"
          target="_blank"
          rel="noopener noreferrer">
          <GitHubLogoIcon width={24} height={24} />
        </a>
      </div>
    </div>
  );
}
