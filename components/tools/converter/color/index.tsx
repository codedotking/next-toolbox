"use client";
import ColorPicker from "@/components/color-picker";
import { Input } from "@/components/ui/input";

import React, { useRef, useState } from "react";
import Sketch from "@uiw/react-color-sketch";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

export default function ColorConverter() {
  const [color, setColor] = useState("#ff0000");

  return (
    <Card className="rounded-sm shadow-none col-span-1">
      <CardHeader></CardHeader>

      <CardContent>
        <div className="flex gap-2 items-center">
          <Popover>
            <PopoverTrigger className=" w-full">
              <div
                className=" w-full  border-2 border-gray-200 rounded-md  py-2    flex justify-center items-center cursor-pointer"
                style={{ backgroundColor: color }}>
                {color}
              </div>
            </PopoverTrigger>
            <PopoverContent className="border-none p-0 w-auto">
              <Sketch
                color={color}
                onChange={(color) => {
                  setColor(color.hex);
                }}
              />
            </PopoverContent>
          </Popover>
        </div>
      </CardContent>
    </Card>
  );
}
