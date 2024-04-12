import Image from "next/image";
import { GitHubLogoIcon } from "@radix-ui/react-icons";
export default function Header() {
  return (
    <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
      <p className="fixed left-0 top-0 flex w-full justify-center   bg-gradient-to-b  pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl  lg:p-4 lg:dark:bg-zinc-800/30">
        <a
          className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
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
      </p>
      <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
        <a
          className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
          href="https://github.com/huala-fun/next-toolbox"
          target="_blank"
          rel="noopener noreferrer">
          <GitHubLogoIcon width={24} height={24} />
        </a>
      </div>
    </div>
  );
}
