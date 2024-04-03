import React from "react";

export default function Sales() {
  return (
    <div className="mx-10 lg:h-[60vh]">
      <div
        className="lg:h-[300px]"
        style={{
          background: `url("sanyanbackground.jpg")`,
          backgroundSize: "cover",
          width: "100%",
          backgroundPostion: "center",
          backgroundRepeat: "no-repeat",
          borderRadius: "0.5rem",
        }}
      >
        <div className="flex flex-col gap-8 lg:flex-row justify-between py-16 lg:py-0 items-center w-full px-[5%] ">
          <div className="lg:px-10 lg:py-28">
            <p className="lg:text-4xl text-3xl font-extrabold text-white ">
              Enjoy 10% OFF your
            </p>
            <p className="text-white lg:text-4xl text-3xl font-extrabold lg:mt-4">
              first order
            </p>
            <p className="text-white text-[1rem] mt-5">
              Limited time offer, shop now and save
            </p>
          </div>

          <div
            className="max-w-[30rem]  justify-self-center h-full flex flex-col gap-5 w-full backdrop-filter  border border-[#f4f4f433] p-3 rounded"
            style={{
              backgroundImage:
                "linear-gradient(236deg,rgba(244,244,244,.21),rgba(255,255,255,.08))",
            }}
          >
            <div className="flex w-full lg:flex-row flex-col gap-5">
              <input
                type="text"
                placeholder="Enter your email"
                className="w-full rounded py-2 px-3 border border-[#c19b7c]"
              />
              <button className="bg-[#3c6469] border border-[#3c6469] text-white rounded py-3 px-6">
                {" "}
                Send
              </button>
            </div>

            <p className="text-white text-xs">
              {" "}
              By clicking{" "}
              <span className="underline cursor-pointer">Sign Up </span> you're
              confirming that you agree with our Terms and Conditions.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
