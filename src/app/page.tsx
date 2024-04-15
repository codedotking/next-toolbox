import Link from "next/link";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
export default function Home() {
  return (
    <div className="grid text-center lg:grid-cols-5 lg:text-left">
      <Card className="rounded-sm shadow-none hover:shadow-md">
        <CardHeader>
          <CardTitle>条形码生成</CardTitle>
          <CardDescription>支持批量生成条形码</CardDescription>
        </CardHeader>
        <CardFooter>
          <Link href="/barcode" className=" w-full">
            <Button className=" w-full text-white"> 使用 </Button>
          </Link>
        </CardFooter>
      </Card>
    </div>
  );
}
