import { link } from "../layout/nav";
import { BarcodeIcon, FileJson2Icon,SquirrelIcon,CloudMoonRainIcon, TimerIcon, LockIcon } from "lucide-react";

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
    icon: SquirrelIcon,
    variant: "ghost",
    path: "/beautify/sql",
    desc: "SQL 格式化以及美化",
  },
  {
    title: "颜色转换",
    label: "",
    icon: CloudMoonRainIcon,
    variant: "ghost",
    path: "/converter/color",
    desc: "颜色转换",
  },
   {
    title: "时间转换",
    label: "",
    icon: TimerIcon,
    variant: "ghost",
    path: "/converter/datetime",
    desc: "时间转换",
  },
  {
    title: "AES 加密解密",
    label: "",
    icon: LockIcon,
    variant: "ghost",
    path: "/crypto/aes",
    desc: "AES 加密解密",
  },
];
