import React from "react";
import { Inter } from "next/font/google";
import Navbar from "@/components/layouts/Navbar";
import PriceDetails from "@/components/Cart/pricedetails";
import ProductList from "@/components/Cart/productlist";

const inter = Inter({ subsets: ["latin"] });

export default function cart() {
  return (
    <main
      className={`flex min-h-screen flex-col gap-10 items-center p-2  ${inter.className}`}
    >
      <Navbar />

      <div className="flex flex-col gap-6 items-center p-2">
        <section className="relative">
          <ProductList/>
        </section>
        <section className="relative">
          <PriceDetails/>
        </section>
      </div>
    </main>
  );
}
