import Image from "next/image";
import Head from "next/head";
import Carousel from "@/components/products/Carousel";
import Products from "@/components/products/Products";
import Navbar from "@/components/layouts/Navbar";
import Footer from '@/components/layouts/Footer'

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
        <title>Framez</title>
        <meta name="description" content="Framez - Your one-stop destination to find frames that suit your face."/>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main
        className="flex min-h-screen flex-col items-center justify-between"
      >
        <Navbar/>
        <Carousel/>
        <section className="relative">
          <Products/>
        </section>
        <Footer/>
      </main>
    </>
  );
}
