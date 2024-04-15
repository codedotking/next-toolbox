"use client";
import JSBarcode from "jsbarcode";
import { useEffect, useRef } from "react";
import { useFormData } from "@/hooks/useInput";
import { useImmer } from "use-immer";
import { Button } from "@/components/ui/button";
import htmlToPdfmake from "html-to-pdfmake";
import pdfmake from "pdfmake/build/pdfmake";
import pdfFonts from "pdfmake/build/vfs_fonts";
import { ScrollArea } from "../../ui/scroll-area";
import { Card, CardContent, CardHeader, CardTitle } from "../../ui/card";
import toast from "react-hot-toast";
import BarcodeForm from "./barcode-form";

pdfmake.vfs = pdfFonts.pdfMake.vfs;

const BardcodeItem = ({
  index,
  config,
  data,
}: {
  index: Number;
  config: any;
  data: String;
}) => {
  const key = `barcode_${index}`;
  useEffect(() => {
    JSBarcode(`#${key}`, data as string, {
      width: 1,
      height: 50,
      displayValue: true,
      textAlign: "center",
      ...config,
    });
  }, []);
  return <svg id={key}></svg>;
};

export default function Barcode() {
  const [barcodeList, setBarcodeList] = useImmer<String[]>([] as String[]);
  const { formData, onChange } = useFormData({
    data: "",
    linkColor: "#000000",
    background: "#FFFFFF",
    fontSize: "18",
    textMargin: "2",
    textPosition: "bottom",
    text: "",
    height: "50",
    width: "2",
    displayValue: "true",
  });
  const modifyCounter = useRef(0);
  useEffect(() => {
    modifyCounter.current++;
  }, [formData]);

  const barcodesRef = useRef<HTMLDivElement>(null);
  const handleGenerateBarcode = () => {
    const barcodes: String[] = formData.data
      .split("\n")
      .filter((item) => item.trim().length > 0) as String[];
    if (barcodes.length === 0) {
      toast.error("请输入条形码数据");
      return;
    }
    if (barcodes.length > 500) {
      toast.error(" 暂不支持生成超过 500 个条形码");
      return;
    }
    setBarcodeList((draft) => {
      draft.splice(0, draft.length, ...barcodes);
    });
    toast.success("生成成功");
  };
  const savePDF = async () => {
    if (barcodesRef.current && barcodesRef.current.innerHTML) {
      const content = htmlToPdfmake(barcodesRef.current.innerHTML);
      pdfmake
        .createPdf({
          content: content,
        })
        .download("barcode.pdf");
      toast.success("下载成功");
    }
  };

  return (
    <div className="grid grid-cols-9 gap-4">
      <div className="col-span-9 md:col-span-6 xl:col-span-3">
        <Card className="rounded-sm shadow-none">
          <CardHeader>
            <CardTitle>条形码生成</CardTitle>
          </CardHeader>
          <CardContent className="flex flex-col gap-2">
            <BarcodeForm formData={formData} onChange={onChange} />
            <div className=" flex flex-col gap-2">
              <Button
                className="w-full"
                onClick={() => handleGenerateBarcode()}>
                生成条形码
              </Button>
              <Button
                variant={"outline"}
                className="w-full"
                onClick={() => savePDF()}>
                下载条形码
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>

      <ScrollArea className="h-full col-span-9  md:col-span-3 xl:col-span-6">
        <div className=" flex gap-2 flex-wrap items-start" ref={barcodesRef}>
          {barcodeList.length > 0 &&
            barcodeList.map((item, index) => {
              return (
                <BardcodeItem
                  key={`${item.toString()}_${index}_${modifyCounter.current}`}
                  index={index}
                  data={item}
                  config={formData}
                />
              );
            })}
        </div>
      </ScrollArea>
    </div>
  );
}
