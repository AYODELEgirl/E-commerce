"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { products } from "../Shop";
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";
import { useRouter, useSearchParams } from "next/navigation";
import { useAppContext } from "@/app/components/context"

export default function page({ params, setCartModal }) {
  const router = useRouter();
  const [quantity, setQuantity] = useState(1);
  const {state, setState} = useAppContext();

  const productCard = products.find(
    (items) => items.title.split(" ").join("-") == params.slug
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    router.push("?cart");
    let finalArray = state.allItems;
    productCard.quantity = quantity;
    finalArray.push(productCard);
    console.log(productCard);
    window.sessionStorage.setItem("items", JSON.stringify(finalArray));
    setState({...state,allItems:finalArray,cart:state.cart + 1,openModal: true});
  };

  const relatedItems = products
    .filter(
      (items) =>
        items.category == productCard.category &&
        items.title !== productCard.title
    )
    .slice(0, 3)
    .sort((a, b) => b.price - a.price);

  const relatedCategory = relatedItems.map((items) => (
    <section
      key={items.id}
      className="mx-auto md:col-span-1 col-span-3 my-auto mt-6 px-4 "
    >
      <Link href={`/Atoke/${items.title.split(" ").join("-")}`}>
        <div>
          <Image
            src={`/${items.image}`}
            alt={items.title}
            width={500}
            height={500}
          />
        </div>
      </Link>
      <div>
        <h2>{items.title}</h2>
        <p>
          &#8358;<span>{items.price}</span>
        </p>
      </div>
    </section>
  ));

  return (
    <div>
      {" "}
      <section className="p-[5%] flex lg:flex-row flex-col w-full gap-20 ">
        <div className="w-full flex flex-col">
          <div className="w-full p-20 border border-[#f4f4f4]">
            {/* <img src={`/${productCard.image}`} className="w-full" alt="" /> */}
            <Image
              src={`/${productCard.image}`}
              alt={productCard.title}
              width={2000}
              height={2000}
              className="w-full"
            />
          </div>
          <p className="text-xs lg:text-base">{productCard.description}</p>
        </div>
        <div className="lg:w-[35%] w-full py-15 flex flex-col gap-8">
          <h1 className="font-bold text-3xl">{productCard.title}</h1>
          <h2 className="font-bold text-3xl">
            {productCard.price?.toLocaleString()}
          </h2>
          <div className="flex flex-col gap-5">
            <div className="flex items-center gap-1">
              <FaStar color="#c19b7c" />
              <FaStar color="#c19b7c" />
              <FaStar color="#c19b7c" />
              <FaStarHalfAlt color="#c19b7c" />
              <FaRegStar color="#c19b7c" />
              <p className="text-xs pl-2">(3.5 stars) • 10 reviews</p>
            </div>
            <p className="text-xs">
              Aaron Grieve is in no way affiliated with Supersparks team or
              product.
            </p>

            <form onSubmit={handleSubmit} className="flex flex-col gap-5">
              <label htmlFor="quantity">Quantity</label>
              <input
                type="number"
                min={1}
                value={quantity}
                onChange={(e) => setQuantity(e.target.value)}
                className="border border-[#c19b7c] p-2 max-w-24 rounded outline-none"
              />
              <button
                type="submit"
                className="bg-[#3c6469] w-full p-3 text-sm rounded text-white"
              >
                ADD TO CART
              </button>
            </form>
          </div>
        </div>
      </section>
      <h2 className="p-2 lg:p-0">RELATED PRODUCTS</h2>
      <div className="grid grid-cols-3 gap-10">{relatedCategory}</div>
    </div>
  );
}

// "use client"
// import React from 'react'
// import { products } from '../Shop'
// import Image from 'next/image'

// export default function Page({params}) {
//     const productCard = products.find(goods => goods.title.split(" ").join("-") == params.slug )
//   return (
//     <div className='px-10'>

//         <section className='my-10'>
//             <Image src={`/${productCard.image}`} alt={productCard.title} width={300} height={300}/>
//         </section>
//         <section>
//             <h1>
//                 {productCard.title}
//             </h1>
//             <p>{productCard.description}</p>
//         </section>

//        <section>

//        </section>
//     </div>
//   )
// }
