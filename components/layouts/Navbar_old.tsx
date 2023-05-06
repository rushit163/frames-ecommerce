import Link from 'next/link';
import React, { useState } from 'react';


const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };


  return (
    <div className='sticky bg-primary left-0 top-0 w-full ease-in duration-300 shadow-xl'>
      <div className='flex flex-row sm:flex-col justify-center max-w-[1240px] m-auto items-center p-2 text-black'>
        <div className='grid grid-cols-3'>
        <Link href='/' className='col-span-2 pr-[17%]' >
          <h1 className='font-primary text-center text-4xl'>
            FRAMEZ
          </h1>
        </Link>
        <div className='hidden sm:flex flex-row items-center justify-center md:pl-[70%] pl-[30%]'>
        <div className="relative">
            <input type="text" className="p-2 pl-8 rounded-2xl border border-gray-200 bg-gray-200 focus:bg-white focus:outline-none focus:ring-2 focus:ring-yellow-600 focus:border-transparent" placeholder="search..."/>
            <svg className="w-4 h-4 absolute left-2.5 top-3.5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>
            </svg>
        </div>
        </div> 
        </div>
        <ul className='hidden sm:flex text-xl flex-row items-center justify-center'>
          <li className='py-2 px-7'>
            <Link href='/'>Home</Link>
          </li>
          <li className='py-2 px-7'>
            <Link href='/#gallery'>Products</Link>
          </li>
          <li className='py-2 px-7'>
            <Link href='/work'>About Us</Link>
          </li>
          <li className='py-2 px-7'>
            <Link href='/contact'>Contact</Link>
          </li>
        </ul>

        {/* Mobile Button */}
        <div onClick={handleNav} className='block sm:hidden z-10 cursor-pointer'>
          {nav ? (
            <div>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
            </div>
          ) : (
            <div >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}  stroke="currentColor" className="w-6 h-6">
                 <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5" />
                </svg>
            </div>
          )}
        </div>
        {/* Mobile Menu */}
        <div
          className={
            nav
              ? 'sm:hidden absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center w-full h-screen bg-primary bg-opacity-70 backdrop-blur-sm text-center ease-in duration-300'
              : 'sm:hidden absolute top-0 left-[-100%] right-0 bottom-0 flex justify-center items-center w-full h-screen bg-primary text-center ease-in duration-300 bg-opacity-70 backdrop-blur-sm'
          }
        >
          <ul>
            <li onClick={handleNav} className='p-4 text-4xl '>
            <div className="relative">
            <input type="text" className="p-2 pl-8 rounded border border-gray-200 bg-gray-200 focus:bg-white focus:outline-none focus:ring-2 focus:ring-yellow-600 focus:border-transparent" placeholder="search..." value="Gar" />
            <svg className="w-4 h-4 absolute left-2.5 top-3.5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>
            </svg>
        </div>
            </li>
            <li onClick={handleNav} className='p-4 text-4xl '>
              <Link href='/'>Home</Link>
            </li>
            <li onClick={handleNav} className='p-4 text-4xl '>
              <Link href='/#gallery'>Gallery</Link>
            </li>
            <li onClick={handleNav} className='p-4 text-4xl '>
              <Link href='/work'>Work</Link>
            </li>
            <li onClick={handleNav} className='p-4 text-4xl'>
              <Link href='/contact'>Contact</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};




export default Navbar;