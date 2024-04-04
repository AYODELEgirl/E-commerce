"use client";
import Link from "next/link";
import Image from "next/image";
import { IoIosSearch } from "react-icons/io";
import { useState } from "react";
import products from "../data/productData";

export default function Products() {
  const [filteredItems, setFilteredItems] = useState(products);

  function searchProducts(e) {
    const searchValue = e.target.value;

    setFilteredItems(
      products.filter(
        (topics) =>
          topics.title.toLowerCase().includes(searchValue.toLowerCase()) ||
          topics.category.toLowerCase().includes(searchValue.toLowerCase())
      )
    );

    e.target.value === "" && setFilteredItems(products);
  }

  const handleProductCategoryClick = (productCategory) => {
    const filtered = products.filter(
      (item) => item.productCategory === productCategory
    );
    setFilteredItems(filtered);
  };

  const handleShopCategoryClick = (shopCategory) => {
    const filtered = products.filter(
      (item) => item.shopCategory === shopCategory
    );
    setFilteredItems(filtered);
  };

  const TopicsCart =
    filteredItems.length == 0 ? (
      <h2>No item found</h2>
    ) : (
      // filteredList.map((cart) => (
      filteredItems.map((cart) => (
        <section
          key={cart.id}
          className="md:col-span-1 col-span-3 border rounded flex flex-col justify-between p-4 transition-shadow duration-200 shadow-lg"
        >
          <Link href={`/Atoke/${cart.title.split(" ").join("-")}`}>
            <Image
              src={`/${cart.image}`}
              alt={cart.title}
              width={300}
              height={400}
              className=" md:col-span-1 col-span-3 border rounded flex flex-col justify-between p-4 transition-shadow duration-200 shadow-lg"
            />
            <h2 className="mt-6 leading-6">{cart.title.toUpperCase()}</h2>
            <p className="mt-3">
              &#8358; <span>{cart.price.toLocaleString()}</span>
            </p>
          </Link>
        </section>
      ))
    );

  return (
    <>
      <div className="flex items-center border-4 border-gray-600 rounded-full m-auto w-1/3 p-4 leading-4">
        <input
          type="text"
          name="text"
          id="text"
          placeholder="search for products or category"
          className="outline-none border-none pl-8 w-5/6 mb-"
          defaultValue={""}
          onChange={searchProducts}
          onInput={searchProducts}
        />
        <IoIosSearch />
      </div>

      <aside className="flex gap-20">
        <div className="px-10 ">
          <div className="border-y-2 leading-10">
            <h2 className="font-bold whitespace-nowrap">Product Category</h2>
            <span className="underline"></span>
            <ul>
              <li
                onClick={() => handleProductCategoryClick("Alaari aso-oke")}
                className="text-slate-600 cursor-pointer"
              >
                Alaari aso-oke
              </li>
              <li
                onClick={() => handleProductCategoryClick("Etu aso-oke")}
                className="text-slate-600 cursor-pointer"
              >
                Etu aso-oke
              </li>
              <li
                onClick={() => handleProductCategoryClick("Sanyan aso-oke")}
                className="text-slate-600 cursor-pointer"
              >
                Sanyan aso-oke
              </li>
            </ul>
          </div>

          <div className="leading-10">
            <h2 className="font-bold">Shop Category</h2>
            <span className="underline"></span>
            <ul>
              <li
                onClick={() =>
                  handleShopCategoryClick("Male Traditional Attire")
                }
                className="text-slate-600 cursor-pointer whitespace-nowrap"
              >
                Male Traditional Attire
              </li>
              <li
                onClick={() =>
                  handleShopCategoryClick("Female Traditional Attire")
                }
                className="text-slate-600 cursor-pointer whitespace-nowrap"
              >
                Female Traditional Attire
              </li>
              <li
                onClick={() =>
                  handleShopCategoryClick("Couple Traditional Attire")
                }
                className="text-slate-600 cursor-pointer"
              >
                Couple Traditional Attire
              </li>
            </ul>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {TopicsCart}
        </div>
      </aside>
    </>
  );
}
