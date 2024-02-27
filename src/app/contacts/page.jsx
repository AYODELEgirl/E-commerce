import React from 'react'
import { FaRegEnvelope } from "react-icons/fa6";
import { IoCallOutline } from "react-icons/io5";
import { IoLocationOutline } from "react-icons/io5";
import { FaFacebook } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { TiSocialTwitter } from "react-icons/ti";
import { FaLinkedin } from "react-icons/fa";
import { FaWhatsappSquare } from "react-icons/fa";



export default function Contact () {
   
  return (
    <section className='px-20 py-20'>

      <div>
            <h1 className='text-7xl text-rose-300 font-extrabold mb-5 '>Contact Us</h1>
            <p className='text-3xl mb-14 mt-7 font-medium'>Get in touch, we respond to all emails within 48 hours.</p>
            <p className='text-2xl flex flex-col-2 gap-6 mb-4'><span className='text-rose-300 text-3xl'> <FaRegEnvelope /> </span> timimarvel93@gmail.com</p>
            <p className='text-2xl flex flex-col-2 gap-6 mb-4'><span className='text-rose-300 text-3xl'> <IoCallOutline /></span> 08108513963</p>
            <p className='text-2xl flex flex-col-2 gap-6 mb-4'><span className='text-rose-300 text-3xl'> <IoLocationOutline /></span> No 31, Emily Akinola Street, Akoka, Yaba,Lagos. </p>
            <p className='text-2xl mt-12 mb-6'>Or find us on social media</p>
            <p className="flex py-6 gap-6 text-4xl text-rose-300">
              <span>
                <FaFacebook />
              </span>
              <span>
                <FaInstagram />
              </span>
              <span>
                <FaLinkedin />
              </span>
              <span>
                <FaWhatsappSquare />
              </span>
              <span>
                <TiSocialTwitter />
              </span>
          </p>
      </div>
    <div>
        
       </div>    
    </section>
    
    
    
  )
}
