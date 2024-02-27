import Link from "next/link";
import React from "react";
import { FaFacebook } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { TiSocialTwitter } from "react-icons/ti";
import { FaLinkedin } from "react-icons/fa";
import { FaWhatsappSquare } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className={`bg-rose-200 text-gray-600 `}>
      <div  className="py-20 px-20">
        <div className="items-start flex leading-10 border-b-4 border-rose-300  ">
          <section className="">
            <h2 className="font-extrabold text-2xl mb-8">Navigation</h2>
            <ul>
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

          <section className="px-[100px]">
            <h2 className="font-extrabold text-2xl mb-8">Shop</h2>
            <ul>
              <li>
                <Link href="/">By Activity</Link>
              </li>
              <li>
                <Link href="/">Female</Link>
              </li>
              <li>
                <Link href="/">Male</Link>
              </li>
              <li>
                <Link href="/">Rings</Link>
              </li>
              <li>
                <Link href="/">Bouquet</Link>
              </li>
            </ul>
          </section>

          <section className="px-[100px]">
            <h2 className="font-extrabold text-2xl mb-8">Account</h2>
            <ul>
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

          <section className="px-[100px]">
            <h2 className="font-extrabold text-2xl mb-8">Care</h2>
            <ul>
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

          <section className="px-[100px] ">
            <h2 className="font-extrabold text-2xl mb-8">Subscribe</h2>
            <p>
              Join our newsletter and get voucher and exclusive deals straight
              to your inbox.
            </p>
            <li className="flex space-x-3">
              <input
                type="text"
                placeholder="Enter your email"
                className=" text-gray-700 text-xl font-bold mr-8 px-4 w-[300px] h-[60px] pt-2 pb-2 border border-rose-500 rounded-md"
              />
              <button className="bg-rose-400 text-white pt-3 pb-3 px-10 rounded-md text-xl">
                Subscribe
              </button>
            </li>
            <p>
              By subscribing you agree to comply with our{" "}
              <Link href="/">Privacy Policy</Link> and provide consent to
              receive updates from our company.
            </p>
          </section>
        </div>

        <div className="flex justify-between mt-14">
          <section>
            <ul className="flex gap-5 py-6">
              <Link href="/"> &copy;Julianah Bridals.All rights reserved</Link>
              <Link href="/" className="underline">Terms and conditions </Link>
              <Link href="/" className="underline">Privacy Policy</Link>
            </ul>
          </section>

          <section className="flex py-6 gap-6 text-2xl text-rose-500 ">
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
          </section>
        </div>
      </div>
    </footer>
  );
}