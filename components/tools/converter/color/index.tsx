"use client";
import React, { useRef, useState } from "react";
import Sketch from "@uiw/react-color-sketch";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { colord, extend } from "colord";
import namesPlugin from "colord/plugins/names";
import cmykPlugin from "colord/plugins/cmyk";
import hwbPlugin from "colord/plugins/hwb";
import lchPlugin from "colord/plugins/lch";
import CopyInput from "@/components/copy-input";
extend([namesPlugin, cmykPlugin, hwbPlugin, lchPlugin]);

export default function ColorConverter() {
  const [color, setColor] = useState("#2563eb");
  let _c = colord(color);
  return (
    <Card className="rounded-sm shadow-none col-span-1 select-none">
      <CardHeader>
        <CardTitle>颜色转换</CardTitle>
      </CardHeader>

      <CardContent>
        <div className="flex gap-8 items-center flex-col">
          <Popover>
            <PopoverTrigger className=" w-full">
              <div
                className={cn(
                  "w-full  border-2 border-gray-200 rounded-md  py-2  flex justify-center items-center cursor-pointer"
                )}
                style={{
                  backgroundColor: color,
                  color: _c.isLight() ? "#000" : "#fff",
                }}>
                {color}
              </div>
            </PopoverTrigger>
            <PopoverContent className="border-none p-0 w-auto">
              <Sketch
                color={_c.toHex()}
                onChange={(color) => {
                  setColor(color.hex);
                }}
              />
            </PopoverContent>
          </Popover>
          <CopyInput
            name="Name"
            value={_c.toName({ closest: true }) || "unkown"}
            onCopy={() => {}}></CopyInput>
          <CopyInput
            name="Hex"
            value={_c.toHex()}
            onCopy={() => {}}></CopyInput>
          <CopyInput
            name="Rgb"
            value={_c.toRgbString()}
            onCopy={() => {}}></CopyInput>
          <CopyInput
            name="Hsl"
            value={_c.toHslString()}
            onCopy={() => {}}></CopyInput>
          <CopyInput
            name="hwb"
            value={_c.toHwbString()}
            onCopy={() => {}}></CopyInput>
          <CopyInput
            name="lch"
            value={_c.toLchString()}
            onCopy={() => {}}></CopyInput>
          <CopyInput
            name="cmyk"
            value={_c.toCmykString()}
            onCopy={() => {}}></CopyInput>
        </div>
      </CardContent>
    </Card>
  );
}
