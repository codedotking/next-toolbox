import Link from "next/link";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { links } from "@/components/tools";
export default function Home() {
  return (
    <div className="grid text-center gap-4 2xl:grid-cols-5 lg:text-left">
      {links.map((item) => {
        return (
          <Card key={item.path} className="rounded-sm shadow-none hover:shadow-md">
            <CardHeader>
              <CardTitle>{item.title}</CardTitle>
              <CardDescription>{item.desc}</CardDescription>
            </CardHeader>
            <CardFooter>
              <Link href={item.path} className=" w-full">
                <Button className=" w-full text-white"> 使用 </Button>
              </Link>
            </CardFooter>
          </Card>
        );
      })}
    </div>
  );
}
