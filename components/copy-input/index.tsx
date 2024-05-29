"use client";
import { CopyIcon } from "lucide-react";
import { Input } from "../ui/input";
import { Label } from "@radix-ui/react-label";
import toast from "react-hot-toast";
import { useEffect, useRef } from "react";
import Clipboard from "clipboard";
import { cn } from "@/lib/utils";
export default function CopyInput({
  name = "Copy Input",
  value,
  onCopy,
  labelClassName = "w-12",
}: {
  name: string;
  value: string;
  onCopy: () => void;
  labelClassName?: string;
}) {
  const copyIconRef = useRef<HTMLDivElement>(null);
  const handleCopy = () => {
    toast.success("复制到剪切板");
  };

  useEffect(() => {
    if (!copyIconRef.current) {
      return;
    }
    const cli = new Clipboard(copyIconRef.current, {
      text: function () {
        return value;
      },
    });
    return () => {
      cli.destroy();
    };
  });

  return (
    <div className="flex w-full gap-1.5 flex-col md:flex-row md:items-center">
      <Label className={cn(" flex-shrink-0", labelClassName)}>{name}</Label>
      <div className="flex items-center gap-2  hover:outline-none hover:ring-1 hover:ring-ring  h-9 w-full rounded-md border border-input bg-transparent py-1 px-2 text-sm shadow-sm transition-colors  placeholder:text-muted-foreground">
        <Input value={value} className="border-none shadow-none px-0 focus-visible:ring-0" />
        <div ref={copyIconRef} className="hover:bg-slate-300 p-2 rounded-full hover:text-[#f0ffff]">
          <CopyIcon
            className="h-4 w-4 rounded-r-md  cursor-pointer"
            onClick={() => handleCopy()}
          />
        </div>
      </div>
    </div>
  );
}
