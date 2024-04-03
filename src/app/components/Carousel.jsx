"use client"
import React, { useEffect } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import Image from 'next/image'

export function EmblaCarousel() {
  const [emblaRef] = useEmblaCarousel({ loop: false }, [Autoplay()])

  return (
    <div className="embla" ref={emblaRef}>
      <div className="embla__container ">
        <div className="embla__slide grid grid-cols-3  ">
            <section className=''>
            <Image src='/background1.jpeg' layout='responsive' height={200}  width={200} alt='pics'/>
            </section>
            <section className=''>
            <Image src='/background2.jpg' layout='responsive' height={300}  width={200} alt='pics'/>
            </section>
            <section className=''>
            <Image src='/background3.jpg' layout='responsive' height={200}  width={200} alt='pics'/>
            </section>
        </div>
        <div className="embla__slide grid grid-cols-3">
        <section className=''>
            <Image src='/maletrad4.jpg' layout='responsive' height={200}  width={200} alt='pics'/>
            </section>
            <section className=''>
            <Image src='/maletrad7.jpg' layout='responsive' height={200}  width={200} alt='pics'/>
            </section>
            <section className=''>
            <Image src='/maletrad5.jpg' layout='responsive' height={200}  width={200} alt='pics'/>
            </section>
        </div>
        <div className="embla__slide grid grid-cols-3">
        <section className=''>
            <Image src='/femaletrad3.jpeg' layout='responsive' height={200}  width={200} alt='pics'/>
            </section>
            <section className=''>
            <Image src='/sittingbride8.jpg' layout='responsive' height={200}  width={200} alt='pics'/>
            </section>
            <section className=''>
            <Image src='/femaletrad5.jpg' layout='responsive' height={200}  width={200} alt='pics'/>
            </section>
        </div>
      </div>
    </div>
  )
}

