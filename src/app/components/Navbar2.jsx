import React from 'react'
import { MdLocalShipping } from "react-icons/md";


export default function Navbar2() {
  return (
    
      <div className='md:h-7  bg-[#3c6469] top-[100px]  flex px-5 items-center gap-2 md:justify-center '>
          <MdLocalShipping className='text-3xl text-white' />   
        <p className='text-center items-center text-white text-xs md:text-xl'>
          <span className='md:text-xl font-extrabold text-white '>Free Shipping </span>
          on all orders above &#8358; 500,000
        </p>
    </div>
  )
}
