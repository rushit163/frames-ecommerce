import React from "react";
import Navbar from "@/components/layouts/Navbar";
import PriceDetails from "@/components/cart/PriceDetails";
import ProductList from "@/components/cart/ProductList";

export default function cart() {
  return (
    <main
      className="flex min-h-screen flex-col gap-10 items-center p-2"
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
