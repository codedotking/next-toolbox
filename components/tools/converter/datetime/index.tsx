"use client";
import React, { useEffect, useMemo, useRef, useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import CopyInput from "@/components/copy-input";
import { Input } from "@/components/ui/input";
import { formats } from "./data";
import { withDefaultOnError } from "@/lib/error";

export default function ColorConverter() {
  const [inputValue, setInputValue] = useState("");
  const [selected, setSelected] = useState("Timestamp");
  const formatIndex = useRef(0);
  const normalizedDate = useMemo(() => {
    if (inputValue.trim() === "") {
      return new Date();
    }
    const { toDate } = formats[formatIndex.current];
    try {
      return toDate(inputValue);
    } catch (_ignored) {
      return undefined;
    }
  }, [inputValue]);

  useEffect(() => {
    console.log(normalizedDate);
  }, [normalizedDate]);

  const onDateInputChanged = (value: string) => {
    setInputValue(value);
    const matchingIndex = formats.findIndex(({ formatMatcher }) =>
      formatMatcher(value)
    );
    if (matchingIndex !== -1) {
      formatIndex.current = matchingIndex;
    }
  };

  const formatDateUsingFormatter = (
    formatter: (date: Date) => string,
    date?: Date
  ) => {
    if (!date) {
      return "";
    }
    return withDefaultOnError(() => formatter(date), "");
  };

  return (
    <Card className="rounded-sm shadow-none col-span-1 select-none">
      <CardHeader>
        <CardTitle>时间转换</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex gap-8 items-center flex-col">
          <div className=" w-full flex gap-2">
            <Input
              placeholder="输入时间"
              value={inputValue}
              onChange={(e) => onDateInputChanged(e.target.value)}
            />
            <Select
              defaultValue={selected}
              onValueChange={(value) => {
                setSelected(value);
              }}>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="请选择转换日期的格式" />
              </SelectTrigger>
              <SelectContent>
                {formats.map((item, index) => {
                  return (
                    <SelectItem
                      className=" cursor-pointer"
                      value={item.name}
                      key={`${index}_date_select`}>
                      {item.name}
                    </SelectItem>
                  );
                })}
              </SelectContent>
            </Select>
          </div>
          {formats.map((item, index) => {
            return (
              <CopyInput
                labelClassName="w-44 "
                key={`${index}_datetime`}
                name={item.name}
                value={formatDateUsingFormatter(item.fromDate, normalizedDate)}
                onCopy={() => {}}></CopyInput>
            );
          })}
        </div>
      </CardContent>
    </Card>
  );
}
