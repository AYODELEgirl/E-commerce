"use client";
import React, { useState } from "react";
import { FaRegEnvelope } from "react-icons/fa6";
import { IoCallOutline } from "react-icons/io5";
import { IoLocationOutline } from "react-icons/io5";
import { FaFacebook } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { TiSocialTwitter } from "react-icons/ti";
import { FaLinkedin } from "react-icons/fa";
import { FaWhatsappSquare } from "react-icons/fa";

export default function Contact() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const handleSubmit = (task) => {
    task.preventDefault();
    setEmail("");
    setName("");
    setMessage("");
    er;
    alert(`Name: ${name} Message: ${message} Email: ${email}`);
  };

  return (
    <section className="lg:px-20 px-5 py-20 lg:grid grid-cols-2 ">
      <div>
        <h1 className="text-4xl text-[#3c6469] font-bold mb-5 ">Contact Us</h1>
        <p className="text-[1rem] text-[#a0a0a0] mb-14 mt-7 font-medium">
          Get in touch, we respond to all emails within 48 hours.
        </p>
        <p className="text-[.9rem] flex flex-col-2 gap-6 mb-4 text-[#a0a0a0]">
          <span className="text-[#3c6469] text-xl">
            {" "}
            <FaRegEnvelope />{" "}
          </span>{" "}
          timimarvel93@gmail.com
        </p>
        <p className="text-[.9rem] flex flex-col-2 gap-6 mb-4 text-[#a0a0a0]">
          <span className="text-[#3c6469] text-xl">
            {" "}
            <IoCallOutline />
          </span>{" "}
          08108513963
        </p>
        <p className="text-[.9rem] flex flex-col-2 gap-6 mb-4 text-[#a0a0a0]">
          <span className="text-[#3c6469] text-xl">
            {" "}
            <IoLocationOutline />
          </span>{" "}
          No 31, Emily Akinola Street, Akoka, Yaba,Lagos.{" "}
        </p>
        <p className="text-[.9rem] mt-12 mb-6 text-[#a0a0a0]">
          Or find us on social media
        </p>
        <p className="flex py-6 gap-4 text-xl text-[#3c6469]">
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

      <section className=" py-20 mr-10 mb-10">
        <h1 className=" text-xl  text-[#a0a0a0]">Drop Us a Message</h1>
        <p className="py-5 text-[#a0a0a0]">
          Have a question or feedback? Fill out the form below to get in touch
          with us.
        </p>

        <form className="flex flex-col gap-3 w-[100]">
          <span className="flex gap-4">
            <input
              className="border-2 px-2 rounded-lg border-stone-400 py-4 placeholder:p-4 placeholder:mx-4 text-black w-1/2 outline-none"
              type="text"
              id="name"
              name="name"
              placeholder="Your Name"
              required
            />

            <input
              className="border-2 px-2 rounded-lg border-stone-400 placeholder:p-4 text-black w-1/2 outline-none"
              type="email"
              id="email"
              name="email"
              placeholder="Your Email"
              required
            />
          </span>

          <textarea
            className=" border-2 px-2 rounded-lg border-stone-400 p-5 placeholder:px-5 placeholder:py-[-20] text-black outline-none"
            id="message"
            name="message"
            placeholder="Example Text"
            required
          ></textarea>

          <button
            className="border rounded-xl bg-[#3c6469] text-white my-5 py-2 w-2/5 "
            type="submit"
            onClick={handleSubmit}
          >
            Submit
          </button>
        </form>
      </section>
    </section>
  );
}
