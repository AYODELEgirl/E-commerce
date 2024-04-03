import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function ProductSection() {
  return (
    <section className='md:w-[75%] w-[90%] mx-auto'>
        <div className='grid grid-cols-3 md:gap-1 gap-5 py-20'>
            <div className=' relative md:col-span-1 col-span-3 border rounded flex flex-col justify-between p-4 transition-shadow duration-200 shadow-lg'>
                <div className='w-full absolute flex justify-between'>
                  <button className='border border-red-500 bg-transparent text-red-500 p-1 font-semibold z-10 backdrop-filter rounded-2xl px-2 text-[.6rem]'>SALE</button>
                </div>
                <Link href='/Atoke'>
                    <Image src='/couplenude5.jpg' width={300} height={400}/>
                </Link>
                    <div className='mt-5'>
                        <h2 className='font-extrabold mb-3 '>Alaari-inspired nude colour attire</h2>
                        <div className='flex'>
                        <p className='mb-3 line-through'> &#8358;700,000</p>
                        <p className='mb-3 ml-5 text-red-500'> &#8358;500,000</p>
                        </div>
                        <button className='border border-[#3c6469] w-full text-[#3c6469] p-1 rounded' >See details</button>
                    </div>
                    
                
            </div>
            <div className='md:col-span-1 col-span-3 border rounded flex flex-col justify-between p-4 transition-shadow duration-200 shadow-lg'>
                <div className='w-full absolute flex justify-between'>
                   <button className='border border-red-500 bg-transparent text-red-500 p-1 font-semibold z-10 backdrop-filter rounded-2xl px-2 text-[.6rem]'>SALE</button>
                </div>
                <Link href='/Atoke'>
                    <Image src='/coupleblackandwhite4.jpg' width={300} height={400}/>
                </Link>
                    <div>
                        <h2  className='font-extrabold mb-3'>Sanyan-Inspired Zebra colour attire</h2>
                        <div className='flex'>
                        <p className='mb-3 line-through'> &#8358;450,000</p>
                        <p className='mb-3 ml-5 text-red-500'>&#8358;300,000</p>
                        </div>
                        
                        <button className='border border-[#3c6469] w-full text-[#3c6469] p-1 rounded' >See details</button>
                    </div>
                    
                
            </div>
            <div className='md:col-span-1 col-span-3 border rounded flex flex-col justify-between p-4 transition-shadow duration-200 shadow-lg'>
             <div className='w-full absolute flex justify-between'>
               <button className='border border-red-500 bg-transparent text-red-500 p-1 font-semibold z-10 backdrop-filter rounded-2xl px-2 text-[.6rem]'>SALE</button>
             </div>
                <Link href='/Atoke'>
                    <Image src='/couplebroengreen6.jpg' width={300} height={400}/>
                </Link>
                 <div>
                    <h2  className='font-extrabold mb-3'>Etu-Inspired teal colour attire</h2>
                    <div className='flex'>
                        <p className='mb-3 line-through'> &#8358;800,000</p>
                        <p className='mb-3 ml-5 text-red-500'> &#8358;600,000</p>
                        </div>
                    <button className='border border-[#3c6469] w-full text-[#3c6469] p-1 rounded' >See details</button>
                 </div>

               
            </div>
        </div>
    </section>
  )
}
