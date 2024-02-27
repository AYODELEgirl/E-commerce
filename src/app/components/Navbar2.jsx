import React from 'react'
import { MdLocalShipping } from "react-icons/md";


export default function Navbar2() {
  return (
    
      <div className='h-7  bg-rose-300 top-[100px] fixed inset-x-0 flex items-center justify-center  '>
          <MdLocalShipping className='text-3xl text-white' />   
        <p className='text-center items-center text-white text-xl md:t'>
          <span className='text-xl font-extrabold text-white '>Free Shipping </span>
          on all orders above &#8358; 500,000
        </p>
    </div>
  )
}
