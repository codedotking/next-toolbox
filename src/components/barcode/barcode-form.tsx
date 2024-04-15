"use client";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import ColorPicker from "../color-picker";
import { Input } from "../ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import { Switch } from "../ui/switch";

export default function BarcodeForm({
  formData,
  onChange,
}: {
  formData: any;
  onChange: any;
}) {
  return (
    <div className=" flex flex-col gap-2">
      <div className="grid w-full gap-1.5 select-none">
        <Label htmlFor="data">条形码内容</Label>
        <Textarea
          className="h-40"
          value={formData.data}
          name="data"
          onChange={onChange}
          placeholder='请输入条形码内容默认"回车"分割'
          id="data"
        />
        <p className="text-sm text-muted-foreground">
          请输入条形码内容默认&quot;回车&quot;分割
        </p>
      </div>
      <Separator />
      <div className="grid w-full max-w-sm items-center gap-1.5">
        <Label htmlFor="lineCbackgroundolor">背景颜色</Label>
        <div className=" flex gap-2 items-center">
          <Input
            value={formData.background}
            name="background"
            onChange={onChange}
            type="text"
            id="background"
            placeholder="background"
          />
          <ColorPicker
            hex={formData.background}
            onChange={(hex) =>
              onChange({
                target: { name: "background", value: hex },
              } as any)
            }
          />
        </div>
      </div>
      <Separator />
      <div className=" grid grid-cols-2 gap-2">
        <div className="grid w-full gap-1.5 select-none">
          <Label htmlFor="width">宽度</Label>
          <Input
            value={formData.width}
            name="width"
            onChange={onChange}
            type="number"
            id="width"
            placeholder="width"
          />
        </div>
        <div className="grid w-full gap-1.5 select-none">
          <Label htmlFor="height">高度</Label>
          <Input
            value={formData.height}
            name="height"
            onChange={onChange}
            type="number"
            id="height"
            placeholder="height"
          />
        </div>
        <div className="grid w-full max-w-sm items-center gap-1.5">
          <Label htmlFor="lineColor">线条颜色</Label>
          <div className=" flex gap-2 items-center">
            <Input
              value={formData.linkColor}
              name="linkColor"
              onChange={onChange}
              type="text"
              id="lineColor"
              placeholder="Line Color"
            />
            <ColorPicker
              hex={formData.linkColor}
              onChange={(hex) =>
                onChange({
                  target: { name: "linkColor", value: hex },
                } as any)
              }
            />
          </div>
        </div>
      </div>
      <Separator />
      <div className=" grid grid-cols-2 gap-2">
        <div className="grid col-span-2 w-full gap-1.5 select-none">
          <Label htmlFor="displayValue">显示文本</Label>
          <Switch
            id="displayValue"
            checked={formData.displayValue == "true"}
            onCheckedChange={(checked) => {
              onChange({
                target: {
                  name: "displayValue",
                  value: checked ? "true" : "false",
                },
              } as any);
            }}
          />
        </div>
        {formData.displayValue == "true" && (
          <>
            <div className="grid w-full gap-1.5 select-none">
              <Label htmlFor="text">文本内容</Label>
              <Input
                value={formData.text}
                name="text"
                onChange={onChange}
                type="text"
                id="text"
                placeholder="text"
              />
            </div>
            <div className="grid w-full gap-1.5 select-none">
              <Label htmlFor="fontSize">文本大小</Label>
              <Input
                value={formData.fontSize}
                name="fontSize"
                onChange={onChange}
                type="number"
                id="fontSize"
                placeholder="fontSize"
              />
            </div>
            <div className="grid w-full gap-1.5 select-none">
              <Label htmlFor="textAlign">文本对齐</Label>
              <Select
                defaultValue={formData.textAlign}
                onValueChange={(value) => {
                  onChange({
                    target: { name: "textAlign", value },
                  } as any);
                }}
                name="textAlign">
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="textAlign " />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="left">left</SelectItem>
                  <SelectItem value="center">center</SelectItem>
                  <SelectItem value="right">right</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="grid w-full gap-1.5 select-none">
              <Label htmlFor="textPosition">文本位置</Label>
              <Select
                defaultValue={formData.textPosition}
                onValueChange={(value) => {
                  onChange({
                    target: { name: "textPosition", value },
                  } as any);
                }}
                name="textPosition">
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="textPosition" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="bottom">bottom</SelectItem>
                  <SelectItem value="top">top</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="grid w-full gap-1.5 select-none">
              <Label htmlFor="textMargin">文本边距</Label>
              <Input
                value={formData.textMargin}
                name="textMargin"
                onChange={onChange}
                type="number"
                id="textMargin"
                placeholder="fontSize"
              />
            </div>
          </>
        )}
      </div>
    </div>
  );
}
