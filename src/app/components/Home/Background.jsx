import Image from "next/image";
import Link from "next/link";
import React from "react";
import { MdBrightnessMedium } from "react-icons/md";

export default function Background() {
  return (
    <div className="lg:mx-10 h-[60vh]">
      <div
        style={{
          backgroundColor: "black",
          backgroundImage: `radial-gradient(#777777c4,#777777c4),url("sanyanbackground.jpg")`,
          backgroundSize: "cover",
          width: "100%",
          backgroundPostion: "center",
          backgroundRepeat: "no-repeat",
          position: "relative",
        }}
        className="h-[330px] lg:h-400px rounded-b-lg"
      >
        <div className="absolute bg-black/5 w-full h-full">
          <div className="lg:px-10 lg:py-24 p-5">
            <p className="md:text-3xl text-white text-2xl">
              Experience{" "}
              <span className="md:text-[2.4rem] text-3xl">Timeless Tradition</span> with{" "}
            </p>
            <p className="md:text-[2.4rem] text-3xl text-white">Yoruba Elegance</p>
            <p className="text-xl text-white mt-6">
              {" "}
              <em>
                Embrace the elegance,cherish the heritage,wear with pride.{" "}
              </em>
            </p>

            <button className=" mt-5 border-2 rounded-sm bg-transparent text-white my-3 py-3 w-50 px-5">
              Shop Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
