<<<<<<< HEAD
import Image from 'next/image'
import { Inter } from 'next/font/google';
import Admin_homePage from './Admin_homePage';
import Add_Products from './Add_Products';
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    
      <Add_Products/>
    
  )
=======
import Image from "next/image";
import Head from "next/head";
import { Inter } from "next/font/google";
import Cards from "@/components/products/Cards";
import Products from "@/components/products/Products";
import Navbar from "@/components/layouts/Navbar";

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
        className={`flex min-h-screen flex-col items-center justify-between p-2 ${inter.className}`}
      >
        <Navbar/>
        <section className="relative">
          <Products/>
        </section>
        <div>Footer</div>
      </main>
    </>
  );
>>>>>>> 5f1877bec943b198a9dac718af08d23d29558072
}
