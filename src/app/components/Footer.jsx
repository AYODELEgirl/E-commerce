import Link from "next/link";
import React from "react";
import { FaFacebook } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { TiSocialTwitter } from "react-icons/ti";
import { FaLinkedin } from "react-icons/fa";
import { FaWhatsappSquare } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className={`bg-[#f4f4f4] py-10 px-2 `}>
      <div className="lg:px-10 px-5">
        <section className="grid lg:grid-cols-5 border-b-2 border-[#3c6469]  gap-10 mt-8 ">
          <div className="items-start flex lg:flex-row flex-col gap-y-10 leading-10 col-span-3 ">
            <section className="pr-[20px]">
              <h2 className="font-medium text-[1rem] lg:mb-8 mb-2 text-[#0d0d0d]">
                Navigate
              </h2>
              <ul className="text-[.8rem] text-[#a0a0a0]">
                <li>
                  <Link href="/">Home</Link>
                </li>
                <li>
                  <Link href="/">New in</Link>
                </li>
                <li>
                  <Link href="/">Store Locator</Link>
                </li>
              </ul>
            </section>

            <section className="lg:px-[40px]">
              <h2 className="font-medium text-[1rem] mb-2 lg:mb-8 text-[#0d0d0d]">
                Shop
              </h2>
              <ul className="text-[.8rem] text-[#a0a0a0]">
                <li>
                  <Link href="/">By Activity</Link>
                </li>
                <li>
                  <Link href="/">Female</Link>
                </li>
                <li>
                  <Link href="/men">Male</Link>
                </li>
                <li>
                  <Link href="/">Couple</Link>
                </li>
              </ul>
            </section>

            <section className="lg:px-[40px]">
              <h2 className="font-medium text-[1rem] mb-2 lg:mb-8 text-[#0d0d0d]">
                Account
              </h2>
              <ul className="text-[.8rem] text-[#a0a0a0]">
                <li>
                  <Link href="/">Log in</Link>
                </li>
                <li>
                  <Link href="/">Create Account</Link>
                </li>
                <li>
                  <Link href="/">License and Assets</Link>
                </li>
                <li>
                  <Link href="/">Styleguide</Link>
                </li>
                <li>
                  <Link href="/">Changelog</Link>
                </li>
              </ul>
            </section>

            <section className="lg:px-[40px]">
              <h2 className="font-medium text-[1rem] mb-2 lg:mb-8 text-[#0d0d0d]">
                Care
              </h2>
              <ul className="text-[.8rem] text-[#a0a0a0]">
                <li>
                  <Link href="/">Delivery</Link>
                </li>
                <li>
                  <Link href="/">Returns</Link>
                </li>
                <li>
                  <Link href="/">Size Guide</Link>
                </li>
                <li>
                  <Link href="/">Contact</Link>
                </li>
              </ul>
            </section>
          </div>

          <section className="px-[0px] col-span-2 mt-2 leading-8">
            <h2 className="font-medium text-[1rem]  mb-8 ">Subscribe</h2>

            <p className="text-[.8rem] text-[#a0a0a0]">
              Join our newsletter and get voucher and exclusive deals straight
              to your inbox.
            </p>
            <li className="flex lg:flex-row flex-col gap-y-4 lg:space-x-3 mt-3 mb-3">
              <input
                type="text"
                placeholder="Enter your email"
                className=" text-gray-700 text-[.9rem] font-medium lg:mr-8 px-4 md:w-[300px] h-[40px] pt-2 pb-2 border border-[#c19b7c] rounded-md"
              />
              <button className="bg-[#3c6469] text-white lg:px-10 rounded-md text-[1rem] h-[40px]">
                Subscribe
              </button>
            </li>
            <p className="text-xs text-[#a0a0a0]">
              By subscribing you agree to comply with our{" "}
              <Link href="/">Privacy Policy</Link> and provide consent to
              receive updates from our company.
            </p>
          </section>
        </section>

        <div className="flex flex-col lg:flex-row justify-between">
          <section>
            <ul className="flex flex-col lg:flex-row gap-5 py-6 lg:text-[.9rem] text-sm text-[#a0a0a0]">
              <li> &copy;Yoruba Elegance 2024 .All rights reserved</li>
              <li className="underline">Terms and conditions</li>
              <li className="underline">Powered by webflow</li>
              <li className="underline">Privacy Policy</li>
            </ul>
          </section>

          <section className="flex py-6 gap-3 text-[.8rem]">
            <span className="text-[#3c6469]">
              <FaFacebook />
            </span>
            <span className="text-[#3c6469]">
              <FaInstagram />
            </span>
            <span className="text-[#3c6469]">
              <FaLinkedin />
            </span>
            <span className="text-[#3c6469]">
              <FaWhatsappSquare />
            </span>
            <span className="text-[#3c6469]">
              <TiSocialTwitter />
            </span>
          </section>
        </div>
      </div>
    </footer>
  );
}
