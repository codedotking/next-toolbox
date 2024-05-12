import React, { useRef, useState } from "react";
import Sketch from "@uiw/react-color-sketch";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { cn } from "@/lib/utils";

const ColorPicker = ({
  hex,
  onChange,
}: {
  hex: string;
  onChange: (hex: string) => void;
}) => {
  return (
    <div>
      <Popover>
        <PopoverTrigger className="p-2 w-50">
          <div
            className={cn(" border-solid border-2  w-9 h-9")}
            style={{ backgroundColor: hex }}></div>
        </PopoverTrigger>
        <PopoverContent className="border-none p-0 w-auto">
          <Sketch
            color={hex}
            onChange={(color) => {
              onChange(color.hex);
            }}
          />
        </PopoverContent>
      </Popover>
    </div>
  );
};

export default ColorPicker;
