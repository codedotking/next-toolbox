import { link } from "../layout/nav";
import { BarcodeIcon, FileJson2Icon,SquirrelIcon } from "lucide-react";

export const links: link[] = [
  {
    title: "条形码",
    label: "",
    icon: BarcodeIcon,
    variant: "ghost",
    path: "/barcode",
    desc: "支持批量生成条形码",
  },
  {
    title: "JSON 美化",
    label: "",
    icon: FileJson2Icon,
    variant: "ghost",
    path: "/beautify/json",
    desc: "JSON 格式化以及美化",
  },
  {
    title: "SQL 美化",
    label: "",
    icon: FileJson2Icon,
    variant: "ghost",
    path: "/beautify/sql",
    desc: "SQL 格式化以及美化",
  },
];
