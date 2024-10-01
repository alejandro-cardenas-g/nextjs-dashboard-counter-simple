import { CartCounter } from "@/components";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Counter page",
  description: "A simple counter",
};

export default function CounterPage() {
  return (
    <div className="flex flex-col items-center justify-center w-full h-full">
      <span>Shopping cart items</span>
      <CartCounter initialValue={20} />
    </div>
  );
}
