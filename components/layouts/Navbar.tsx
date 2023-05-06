import { NavLinks } from '../../utils/constants';
import Link from 'next/link'
import { useState } from 'react';
import Headroom from 'react-headroom'

export default function Navbar() {
    const [nav, setNav] = useState<boolean>(false);
    const handleNav = () => {
        setNav(!nav)
    }
  return (
    <>
    <Headroom className="bg-white z-20 w-full shadow-md" style={{
        WebkitTransition: 'all .5s ease-in-out',
        MozTransition: 'all .5s ease-in-out',
        OTransition: 'all .5s ease-in-out',
        transition: 'all .5s ease-in-out',
        backgroundColor: '#fff',
        boxShadow: '0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)',
        padding: '8px 8px'
      }}>
        <div className="container mx-auto w-full">
            <div className="flex items-center">
                <p className='flex justify-between md:justify-end italic text-4xl w-full md:w-[55%]'>
                    FRAMEZ
                </p>
                <div className='hidden md:flex justify-end w-[45%]'>
                    <button className="flex justify-between border-2 border-black/50 rounded-full min-w-[40%] py-2 px-4">
                        <input className="text-lg font-medium outline-none" placeholder="Search"/>
                        <div className=''>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                <path stroke-Linecap="round" stroke-Linejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                            </svg>
                        </div>
                    </button>
                    <button className="mx-4">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-10 h-10">
                            <path stroke-Linecap="round" stroke-Linejoin="round" d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                    </button>
                    <button>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-10 h-10">
                            <path stroke-Linecap="round" stroke-Linejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
                        </svg>
                    </button>
                </div>
                <div onClick={handleNav} className='block md:hidden z-10 cursor-pointer'>
                {nav ? (
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </div>
                ) : (
                    <div>
                         <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5" />
                        </svg>
                    </div>
                )}
                </div>
            </div>
            <div>
                <ul className='hidden md:flex justify-center text-xl w-full mt-2'>
                    {
                        NavLinks.map((link, index) => (
                            <li key={index} className="mx-2">
                            <Link href={link.route}>{link.name}</Link>
                            </li>
                        ))
                    }
                </ul>
            </div>
        </div>
    <div
    className={
      nav
        ? 'md:hidden absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center w-full h-screen bg-white text-center ease-in duration-300'
        : 'md:hidden absolute top-0 left-[-100%] right-0 bottom-0 flex justify-center items-center w-full h-screen bg-white text-center ease-in duration-300'
    }
  >
    <ul>
        <li>
            <button className="flex justify-between border-2 border-black/50 rounded-full min-w-[40%] py-2 px-4">
                <input className="text-lg font-medium outline-none" placeholder="Search"/>
                <div className=''>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                <path stroke-Linecap="round" stroke-Linejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                </svg>
                </div>
            </button>
        </li>
        <li>
            <button className="my-5">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-10 h-10">
                <path stroke-Linecap="round" stroke-Linejoin="round" d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                </button>
                <button>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-10 h-10">
                <path stroke-Linecap="round" stroke-Linejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
                </svg>
            </button>
        </li>
                    {
                        NavLinks.map((link, index) => (
                            <li key={index} className="my-9 text-4xl">
                            <Link href={link.route} onClick={handleNav}>{link.name}</Link>
                            </li>
                        ))
                    }
                </ul>
  </div>
    </Headroom>
  </>
  )
}
