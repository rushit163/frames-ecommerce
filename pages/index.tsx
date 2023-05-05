import Image from 'next/image'
import { Inter } from 'next/font/google'
import Navbar from '@/components/layouts/Navbar'
import Footer from '@/components/layouts/Footer'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
    <Navbar/>
    <Footer/>
    </>
  )
}
