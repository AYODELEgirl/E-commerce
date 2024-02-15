import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function Navbar() {
  return (
    <nav className='flex justify-between'>
      <ul className='flex items-start gap-4'>
        <li>
          <Link href="/">
            <Image src='/fav.png' width="32" height="32" className='rounded-full' />
          </Link>
        </li>
        <li>
          <Link href = '/' className='flex flex-col'>
          <span>Marvel</span>
          <span>Footware brand</span>
          </Link>
        </li>
      </ul>
      <ul className='flex justify-center  gap-6'>
        <li>
        <Link href="/latest">Latest</Link>
        </li>
        <li>
        <Link href="/Topic">Topics</Link>
        </li>
         <li>
         <Link href="/About">About</Link>
        </li>
        <li>
        <Link href="/Contacts">Contacts</Link>
        </li>
        <li>
        <Link href="/"></Link>
        </li>
      </ul>
    </nav>
  )
}
