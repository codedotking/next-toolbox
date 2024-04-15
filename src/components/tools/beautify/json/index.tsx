"use client";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { useInput } from "@/hooks/useInput";
import { CodeBlock } from "../components/code-highlight";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import toast from "react-hot-toast";

export default function BeautifyJSON() {
  const { value, onChange } = useInput("");
  const [formattedValue, setFormattedValue] = useState("");

  const handleFormat = () => {
    try {
      const json = JSON.parse(value);
      setFormattedValue(JSON.stringify(json, null, 2));
    } catch (error) {
      toast.error("请输入正确的 JSON 数据");
    }
  };

  return (
    <div className=" grid gap-4 grid-cols-2">
      <Card className="rounded-sm shadow-none col-span-1">
        <CardHeader>
          <CardTitle>原始 JSON</CardTitle>
        </CardHeader>
        <CardContent>
          <Textarea
            className="h-80"
            value={value}
            name="data"
            onChange={onChange}
            placeholder='请输入条形码内容默认"回车"分割'
            id="data"
          />
        </CardContent>
        <CardFooter className=" flex  justify-end">
          <Button onClick={handleFormat}>格式化</Button>
        </CardFooter>
      </Card>

      <Card className="rounded-sm shadow-none col-span-1">
        <CardHeader>
          <CardTitle>美化 JSON</CardTitle>
        </CardHeader>
        <CardContent>
          {formattedValue.length > 0 && (
            <CodeBlock code={formattedValue} language="json" />
          )}
        </CardContent>
      </Card>
    </div>
  );
}
