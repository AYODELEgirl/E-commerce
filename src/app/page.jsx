import React from 'react'
import Main from './components/MainProducts'
import ProductSection from './components/Home/ProductSection'
import { EmblaCarousel } from './components/Carousel'
import Background from './components/Home/Background'
import ByActivity from './components/Home/ByActivity'
import Sales from './components/Home/Sales'





export default function Home() {
  return (
    <main className='max-w[1800] overflow-hidden'>
      <div>
        <Background/>
        {/* <EmblaCarousel/> */}
        <ProductSection/>
        <Sales />
        <div>
        <ByActivity />
        </div>
        
      </div>

       
    </main>
  )
}
 