import { useState } from "react";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Input } from "./Input";

export function ShopCard() {
  const [input, setInput] = useState<string>("");
  return (
    <Card>
      <CardHeader>
        <CardTitle> Titill</CardTitle>
        <CardDescription>Þetta er lýsing</CardDescription>
        <CardAction> Button? </CardAction>
      </CardHeader>
      <CardContent>
        <Input value={input} onChange={(e) => setInput(e.target.value)} />
        <p>Contentið</p>
      </CardContent>
      <CardFooter>@Solon</CardFooter>
    </Card>
  );
}
