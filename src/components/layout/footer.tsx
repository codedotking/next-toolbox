import Image from "next/image";
import { GitHubLogoIcon } from "@radix-ui/react-icons";
export default function Header() {
  return (
    <div className=" flex justify-center py-4 w-full px-2">
      <a
        className=" flex place-items-center gap-2 p-8 lg:p-0"
        href="https://github.com/huala-fun/next-toolbox"
        target="_blank"
        rel="noopener noreferrer">
        <GitHubLogoIcon width={24} height={24} />
      </a>
    </div>
  );
}
