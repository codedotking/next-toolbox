"use client";
import JSBarcode from "jsbarcode";
import { useEffect, useRef } from "react";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useFormData, useInput } from "@/hooks/useInput";
import { useImmer } from "use-immer";
import { Button } from "@/components/ui/button";
import htmlToPdfmake from "html-to-pdfmake";
import pdfmake from "pdfmake/build/pdfmake";
import pdfFonts from "pdfmake/build/vfs_fonts";

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
      lineColor: "#FFFFF",
      width: 1,
      height: 50,
      displayValue: true,
      textAlign: "center",
      fontSize: 16,
    });
  }, []);
  return <svg id={key}></svg>;
};

export default function Barcode() {
  const [barcodeList, setBarcodeList] = useImmer<String[]>([] as String[]);
  const { formData, onChange } = useFormData({
    name: "",
    data: "",
    address: "",
    email: "",
    message: "",
  });
  const barcodesRef = useRef<HTMLDivElement>(null);
  const handleGenerateBarcode = () => {
    const barcodes: String[] = formData.data
      .split("\n")
      .filter((item) => item.trim().length > 0) as String[];
    console.log(barcodes);
    if (barcodeList.length > 4) {
      window.alert("Too many barcodes, please reduce the number of barcodes.");
      return;
    }
    setBarcodeList((draft) => {
      draft.splice(0, draft.length, ...barcodes);
    });
  };

  const savePDF = async () => {
    if (barcodesRef.current && barcodesRef.current.innerHTML) {
      var html = htmlToPdfmake(barcodesRef.current.innerHTML) as any;
      console.log(html);
      const pdf = pdfmake
        .createPdf({
          content: html,
        })
        .download("rrr.pdf");
      console.log(pdf);
    }
  };
  return (
    <div className=" flex flex-col gap-4">
      <div className="grid w-full gap-1.5 select-none">
        <Label htmlFor="message-2">条码内容</Label>
        <Textarea
          className=" h-48"
          value={formData.data}
          name="data"
          onChange={onChange}
          placeholder='请输入条码内容默认"回车"分割'
          id="message-2"
        />
        <p className="text-sm text-muted-foreground">
          请输入条码内容默认&quot;回车&quot;分割
        </p>
      </div>
      <div className=" flex flex-col gap-4">
        <Button className="w-full" onClick={() => handleGenerateBarcode()}>
          Gen Barcode
        </Button>
        <Button
          variant={"outline"}
          className="w-full"
          onClick={() => savePDF()}>
          Download Barcodes
        </Button>
      </div>
      <div className=" flex gap-4 flex-wrap" ref={barcodesRef}>
        {barcodeList.length > 0 &&
          barcodeList.map((item, index) => {
            return (
              <BardcodeItem
                key={index}
                index={index}
                data={item}
                config={formData}
              />
            );
          })}
      </div>
    </div>
  );
}
