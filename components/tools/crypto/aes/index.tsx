"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { useFormData } from "@/hooks/useInput";
import { AES_ECB_DECRYPT, AES_ECB_ENCRYPT, AES_CBC_ENCRYPT } from "@/lib/aes";
import { useState } from "react";

export default function CryptoAes() {
  const { formData, onChange } = useFormData({
    mode: "ECB",
    padding: "PKCS7",
    length: "256",
    secretKey: "",
    output: "base64",
    content: "",
  });

  const [cryptoRes, setCryptoRes] = useState("");

  /**
   *  加密
   */
  const ENCRYPT = () => {
    const { mode, padding, length, secretKey, output, content } = formData;
    setCryptoRes(() => {
      return mode === "ECB"
        ? AES_ECB_ENCRYPT(content, secretKey)
        : AES_CBC_ENCRYPT(content, secretKey);
    });
  };

  /**
   *  解密
   */
  const DECRYPT = () => {
    const { mode, padding, length, secretKey, output, content } = formData;
    setCryptoRes(() => {
      return AES_ECB_DECRYPT(content, secretKey);
    });
  };

  return (
    <Card className="rounded-sm shadow-none col-span-1 select-none">
      <CardHeader>
        <CardTitle>AES 加密解密</CardTitle>
      </CardHeader>

      <CardContent>
        <div className="grid grid-cols-2 gap-2">
          <div className="grid w-full gap-1.5 col-span-1">
            <Label htmlFor="message">待操作内容</Label>
            <Textarea
              className="h-60 resize-none"
              value={formData.content}
              name="content"
              onChange={onChange}
              placeholder="待操作内容"
              id="res"
            />
          </div>
          <div className=" col-span-1 flex flex-col gap-4">
            <div className="grid w-full gap-1.5 select-none">
              <Label htmlFor="mode">模式</Label>
              <Select
                defaultValue={formData.mode}
                onValueChange={(value) => {
                  onChange({
                    target: { name: "mode", value },
                  } as any);
                }}
                name="mode">
                <SelectTrigger className="w-[100px]">
                  <SelectValue placeholder="模式 " />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="ECB">ECB</SelectItem>
                  <SelectItem value="CBC">CBC</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="grid w-full gap-1.5 select-none">
              <Label htmlFor="padding">填充</Label>
              <Select
                defaultValue={formData.padding}
                onValueChange={(value) => {
                  onChange({
                    target: { name: "padding", value },
                  } as any);
                }}
                name="padding">
                <SelectTrigger className="w-[100px]">
                  <SelectValue placeholder="填充 " />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="PKCS7">PKCS7</SelectItem>
                  {/* <SelectItem value="AnsiX923">AnsiX923</SelectItem>
              <SelectItem value="Iso10126">Iso10126</SelectItem>
              <SelectItem value="Iso97971">Iso97971</SelectItem>
              <SelectItem value="ZeroPadding">ZeroPadding</SelectItem> */}
                </SelectContent>
              </Select>
            </div>

            <div className="grid w-full max-w-sm items-center gap-1.5">
              <Label htmlFor="secretKey">密钥</Label>
              <Input
                autoComplete="off"
                type="text"
                value={formData.secretKey}
                name="secretKey"
                onChange={onChange}
                id="secretKey"
                placeholder="密钥"
              />
            </div>

            <div className="grid w-full gap-1.5 select-none">
              <Label htmlFor="output">输出</Label>
              <Select
                defaultValue={formData.output}
                onValueChange={(value) => {
                  onChange({
                    target: { name: "output", value },
                  } as any);
                }}
                name="output">
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="输出 " />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="base64">Base64</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          <div className="col-span-2">
            <div className=" flex gap-4">
              <Button onClick={() => ENCRYPT()}> 加密</Button>
              <Button onClick={() => DECRYPT()} variant={"outline"}>
                解密
              </Button>
            </div>
          </div>
          <div className="grid w-full gap-1.5">
            <Label htmlFor="message">操作结果</Label>
            <Textarea
              className="h-60 resize-none"
              value={cryptoRes}
              onChange={(e) => {
                setCryptoRes(e.target.value);
              }}
              placeholder="操作结果"
              id="res"
            />
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
