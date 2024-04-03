"use client";
import Image from "next/image";
import Link from "next/link";
import { Pacifico } from "next/font/google";
import { useEffect, useState } from "react";
import { FaShoppingBasket, FaTimes } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross1 } from "react-icons/rx";
import { usePathname, useSearchParams } from "next/navigation";
import {useAppContext} from "@/app/components/context";

const inter = Pacifico({ subsets: ["latin"], weight: ["400"] });

export default function Navbar() {
  const searchParams = useSearchParams();

  const [cart, setCart] = useState(0);
  const [allItems, setAllItems] = useState([]);
  const [cartItem, setCartItem] = useState({});
  const [total, setTotal] = useState(0);
  const [open, setOpen] = useState(true);
  const [openModal, setOpenModal] = useState(false);
  const {state, setState} = useAppContext();
  const handleCartClick = () => {setState ({...state,openModal: !state.openModal})};

  function controlNav() {
    setOpen(!open);
  }

  useEffect(() => {
    // setCartItem(JSON.parse(sessionStorage.getItem(2)))
    if (searchParams.get("cart") === "1") {
      console.log("yhhh");
      setOpenModal(true);
    }

    if (allItems) {
      const sum = allItems
        .map((item) => item.price * item.quantity)
        .reduce((a, b) => a + b, 0);
      setTotal(sum);
    }
    if (sessionStorage.getItem("items") !== null) {
      const sum = JSON.parse(sessionStorage.getItem("items"))
        .map((item) => item.price * item.quantity)
        .reduce((a, b) => a + b, 0);
      setTotal(sum);

      const qty = JSON.parse(sessionStorage.getItem("items"))
        .map((item) => item.quantity)
        .reduce((a, b) => a + b, 0);
      setCart(qty);
    }
    console.log(JSON.parse(sessionStorage.getItem("items")));
    setAllItems(JSON.parse(sessionStorage.getItem("items")));
  }, [searchParams]);
  return (
    <>
      <div>
        <nav className="flex justify-between px-[5%] py-2 mb-0    ">
          <ul className="flex items-center gap-2 lg:gap-4  ">
            <li>
              <Link href="/">
                <Image
                  src="/y.png"
                  width="40"
                  height="40"
                  className="rounded-full lg:mt-2  lg:mb-4"
                />
              </Link>
            </li>
            <li>
              <Link href="/" className="flex flex-col">
                <span
                  className={` text-[#3c6469] text-base font-bold lg:text-3xl ${inter.className}`}
                >
                  Yoruba Elegance
                </span>
                <span
                  className={`text-[#a5b7b9] text-[10px] lg:text-xl ${inter.className}`}
                >
                  Passion for yoruba attire
                </span>
              </Link>
            </li>
          </ul>
          <div className="flex items-center gap-2">
            <ul
              className={`md:flex ${
                open
                  ? "hidden"
                  : "flex flex-col absolute bg-white w-screen h-screen top-5 bottom-0 right-0 left-0 z-20 px-5"
              } justify-center  gap-12 text-[#3c6469] mt-9 text-lg`}
            >
              <li>
                <Link href="/latest">New in</Link>
              </li>
              <li>
                <Link href="/Atoke">Shop</Link>
              </li>
              <li>
                <Link href="/About">Activity</Link>
              </li>
              <li className="font-bold text-xl">
                <Link href="/contacts">Contacts</Link>
              </li>
            </ul>
            <div className=" w-14 h-10 border rounded-md flex justify-center items-center">
              <div className="w-full h-full relative">
                <li
                  onClick={() => setOpenModal(!openModal)}
                  className="flex h-full justify-center items-center gap-2"
                >
                  <span className="w-2/3 h-full flex justify-center items-center text-white bg-[#cdae95] rounded-md ">
                    <FaShoppingBasket />
                  </span>
                  <span className="pr-2">{cart}</span>
                </li>
                {state?.openModal ? (
                  <div
                    className={`absolute top-5 right-8 py-6 bg-white shadow-xl w-[30vw] flex flex-col`}
                  >
                    <div className="flex w-full justify-between">
                      <h3 className="font-bold px-5">Your Basket</h3>
                    </div>
                    <FaTimes onClick={handleCartClick} style={{cursor:"pointer"}} />
                    
                    {state.allItems !== null && allItems.length > 0 ? (
                      <>
                        {" "}
                        {state.allItems.map((item) => (
                          <div className="flex  px-6 mt-3 flex-col border-b pb-8 gap-6">
                            <div className="flex gap-2 w-full">
                              <div className="">
                                <Image
                                  src={`/${item.image}`}
                                  width={300}
                                  height={300}
                                  alt="pic"
                                />
                              </div>

                              <div className="flex flex-col justify-between w-full">
                                <div className="flex flex-col gap-1">
                                  <p className="font-bold text-lg">
                                    {item.title}
                                  </p>
                                  <p className="text-xs">
                                    {item.price.toLocaleString()}
                                  </p>
                                </div>
                              </div>
                            </div>

                            <div className="flex justify-between">
                              <div className="flex gap-3 text-xs items-center">
                                <label htmlFor="quantity">Qty</label>
                                <input
                                  type="number"
                                  min={1}
                                  value={item.quantity}
                                  // onChange={(e) => setQuantity(e.target.value)}
                                  className="border border-[#c19b7c] p-2 max-w-24 rounded outline-none"
                                />
                              </div>

                              <button
                                   onClick={() => {
                                    const newItems = state.allItems.filter((i) => i.id !== item.id); setState ({...state,allItems: newItems});
                                   }}
                                className=" rounded-2xl border py-0.5 px-5 border-[#c19b7c] text-[10px]"
                              >
                                Remove
                              </button>
                            </div>
                          </div>
                        ))}
                        <div className="flex flex-col gap-6 p-4">
                          <div className="flex w-full justify-between">
                            <p>Subtotal</p>
                            <p className="font-bold">{total}</p>
                          </div>
                          <button className="w-full text-white p-3 bg-[#3c6469] rounded text-xs">
                            CONTINUE TO CHECKOUT
                          </button>
                        </div>
                      </>
                    ) : null}
                  </div>
                ) : null}
              </div>
            </div>
            <ul
              className={`md:hidden cursor-pointer ${open ? "flex" : "hidden"}`}
            >
              <li onClick={controlNav}>
                <GiHamburgerMenu />
              </li>
            </ul>
            <ul
              className={`md:hidden cursor-pointer ${open ? "hidden" : "flex"}`}
            >
              <li onClick={controlNav}>
                <RxCross1 />
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </>
  );
}
