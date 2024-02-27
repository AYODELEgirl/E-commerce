"use client"
import Image from 'next/image'
import Link from 'next/link'
import { Pacifico } from "next/font/google";
import { useState } from 'react';
import { FaShoppingBasket } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross1 } from "react-icons/rx";
import { CiDeliveryTruck } from "react-icons/ci";

const inter = Pacifico ({ subsets: ["latin"] , weight: ['400']});


export default function Navbar() {  
  
  const [cart, setCart] = useState(0)

  const [open, setOpen] = useState(true)

  function controlNav(){
    setOpen(!open)
  }
  return (
    <>
      <div>

        <nav className='flex justify-between px-16 py-2 mb-0 inset-x-0 fixed   '>
            
            <ul className='flex items-center gap-4  '>
              <li>
                <Link href="/">
                  <Image src='/J1.png' width="80" height="80" className='rounded-full mt-2  mb-4' />
                </Link>
              </li>
              <li>
                <Link href = '/' className='flex flex-col'>
                <span className={` text-rose-400 text-5xl ${inter.className}` } >Julianah Bridals</span>
                <span className={`text-rose-200 text-xl ${inter.className}`} >Simplicity and Elegance</span> 
                </Link>
              </li>
            </ul>
            <ul className={`md:flex ${open ? 'hidden' : 'flex flex-col'}justify-center  gap-12 text-rose-300  mt-9 text-2xl`}>
              <li>
              <Link href="/latest">New in</Link>
              </li>
              <li>
              <Link href="/Topic">Shop</Link>
              </li>
              <li>
              <Link href="/About">Activity</Link>
              </li>
              <li className='font-bold text-xl'>
              <Link href="/contacts">Contacts</Link>
              </li>

                <div className=' md:w-20 h-10 border rounded-md flex justify-center items-center'>

                    <Link className='w-full h-full' href="/Cart" >
                      <li className='flex h-full justify-center items-center gap-2'>
                          <span className='w-2/3 h-full flex justify-center items-center text-white bg-rose-300 rounded-md '>
                          <FaShoppingBasket />
                          </span>
                          <span className='pr-2'>{cart}</span>
                      </li>
                    </Link>

                </div>


            </ul>
            <ul className={`md:hidden cursor-pointer ${open ? 'flex' : 'hidden'}`}>
              <li onClick={controlNav}>
                <GiHamburgerMenu />
              </li>
            </ul>
            <ul className={`md:hidden cursor-pointer ${open ? 'hidden' : 'flex'}`}>
              <li onClick={controlNav}>
                <RxCross1 />
              </li>
            </ul>

      
        </nav>

       
      </div>
    </>

  )
}
