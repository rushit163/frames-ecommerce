import Image from 'next/image'
import { Inter } from 'next/font/google';
import Admin_homePage from './Admin_homePage';
import Add_Products from './Add_Products';
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    
      <Admin_homePage/>
    
  )
}
