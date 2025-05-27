import React from "react";
import FormImg from "../assets/Formimg.svg";
export const SignUp = () => {
  return (
    <div className="flex xl:mx-12 flex-col lg:flex-row items-center justify-center px-6 sm:px-10 md:px-16 xl:px-40 py-10 bg-white">
  <div className="w-full lg:w-1/2 flex justify-center">
    <img src={FormImg} alt="Form" className="w-3/4 sm:w-2/3 md:w-3/5 lg:w-full" />
  </div>
  <div className="w-full lg:w-1/2 ms-4 mt-10 lg:mt-0 text-center lg:text-left">
    <p className="text-2xl sm:text-3xl lg:text-5xl font-bold text-[#202020]">
      Start Organizing Your
    </p>
    <p className="text-2xl sm:text-3xl lg:text-5xl pt-2 font-bold text-[#202020]">
      Life Today
    </p>
    <p className="pt-5 text-sm sm:text-base">
      Join us now and transform your productivity with our intuitive to-do
    </p>
    <p className="text-sm sm:text-base">list platform!</p>

    <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4 mt-7">
      <button className="bg-[#FF3E54] py-3 px-6 text-white font-semibold rounded">
        Sign Up
      </button>
      <button className="border border-[#FF3E54] py-3 px-6 text-black font-semibold rounded">
        Learn More
      </button>
    </div>
  </div>
</div>

  );
};
