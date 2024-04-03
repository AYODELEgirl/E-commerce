import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function ByActivity() {
  return (
    <div className="lg:mx-20  p-8">
      <div>
        <h1 className="text-[#3c6469] text-2xl font-bold">By Preference</h1>
      </div>

      <div className="flex w-full lg:flex-row flex-col gap-10 items-center space-y-5">
        <div className="flex flex-col h-full w-full space-y-10">
          <div className="flex w-full lg:flex-row flex-col gap-y-5 items-center transition-shadow duration-200 shadow-lg mt-5 lg:p-10">
            <div className="w-full lg:p-6 flex flex-col p-5">
              <h2 className="py-5 text-[#3c6469] text-2xl font-bold">
                Alari Aso-oke
              </h2>
              <p className="text-[#828282] text-sm lg:text-base">
                Alari fabric boasts a vibrant and eye-catching color palette,
                often featuring bold hues such as red, orange, yellow, and
                green. These colors symbolize vitality, energy, and cultural
                vibrancy within Yoruba society.
              </p>
            </div>

            <div className="w-full relative">
              {" "}
              <Link href="/Atoke">
                <img src="/maletrad4.jpg" className="object-cover" alt="" />
              </Link>
            </div>
          </div>

          <div className="flex w-full lg:flex-row flex-col gap-y-5 items-center transition-shadow duration-200 shadow-lg mt-5 lg:p-10">
          <div className="w-full lg:p-6 flex flex-col p-5">
              <h2 className="py-5 text-[#3c6469] text-2xl font-bold">
                Etu Aso-oke
              </h2>
              <p className="text-[#828282] text-sm lg:text-base">
                Etu is renowned for its deep, rich indigo color, achieved
                through a labor-intensive dyeing process using natural indigo
                leaves. This iconic hue symbolizes tradition, spirituality, and
                cultural authenticity within Yoruba society.This iconic hue also
                symbolises the love for Earth
              </p>
            </div>
            {/* <Image src="/background2.jpg" width={300} height={400} /> */}
            <div className="w-full lg:h-[50vh]">
              {" "}
              <Link href="/Atoke">
                <img src="/femaletrad3.jpeg" className="object-cover" alt="" />
              </Link>
            </div>
          </div>
        </div>

        <div className="w-full h-full flex flex-col gap-5 lg:gap-0 transition-shadow duration-200 shadow-lg lg:p-10">
          <div className=" flex flex-col lg:p-[3rem] p-5">
            <h2 className="pb-10 text-[#3c6469] text-2xl font-bold">
              Sanyan aso oke
            </h2>
            <p className="text-[#828282] text-sm lg:text-base">
              Sanyan is made from handwoven silk or a blend of silk and cotton,
              giving it a luxurious feel and a distinct luster. The use of
              natural fibers adds to its elegance and comfort
            </p>
          </div>

          <div className="w-full relative">
            {" "}
            <Link href="/Atoke">
              <img src="/couplemint2.jpg" className="object-cover" alt="" />
            </Link>
          </div>
          {/* <div className="w-full">
            <Image src="/couplemint2.jpg" width={440} height={440} />
          </div> */}
        </div>

        {/* <div className="md-col-span-2 col-span-2">
          <div className="flex">
            <section>
              <h2>Alari Aso-oke</h2>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </section>
            <section>
              <Image src="/maletrad6.jpg" width={300} height={300} />
            </section>
          </div>
        </div>

        <div className="md-col-span-2 col-span-2 ">
          <section>
            <h2>Sanyan Aso-oke</h2>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deserunt
              earum ducimus adipisci,
            </p>
          </section>
        </div>

        <div className="md-col-span-2 col-span-2">
          <div className="flex">
            <section>
              <h2>Etu Aso-oke</h2>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </section>
            <section>
              <Image src="/maletrad4.jpg" width={300} height={300} />
            </section>
          </div>
        </div>
        <div className="md-col-span-2 col-span-2 ">
          <Image src="/couplebrown1.jpg" width={300} height={400} />
        </div> */}
      </div>
    </div>
  );
}
