import Image from "next/image";
import Head from "next/head";
import { Inter } from "next/font/google";
import Cards from "@/components/Products/cards";
import Products from "@/components/Products/products";

const inter = Inter({ subsets: ["latin"] });

interface Property {
  images: Array<string>;
  id: string;
  name: string;
  price: number;
}

interface Props {
  properties: Property[];
}

export default function Home({ properties }: Props) {
  return (
    <>
      <Head>
        <title>Specs</title>
        <meta name="description" content="" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main
        className={`flex min-h-screen  bg-gradient-to-tr from-primary/60 to-secondary/60 flex-col items-center justify-between p-2 ${inter.className}`}
      >
        <div>Navbar</div>
        <section className="relative">
          <Products/>
        </section>
        <div>Footer</div>
      </main>
    </>
  );
}
