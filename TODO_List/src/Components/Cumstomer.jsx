import React from "react";
import image from "../assets/Image.svg"
import slider from "../assets/Slider.svg"
import Manger from "../assets/productmang.svg"
export const Cumstomer = () => {
  return (
  <div className="bg-white px-6 sm:px-10 md:px-20 lg:px-32 xl:px-40 xl:mx-12 py-10">
    <div className="flex flex-col items-start gap-2">
      <p className="text-2xl sm:text-4xl md:text-5xl font-bold text-[#0E1F51]">
        Customer Testimonials
      </p>
      <p className="text-lg text-[#0E1F51]">
        This tool has transformed my productivity and organization!
      </p>
    </div>

    <div className="mt-10">
      <div className="flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="border-[#FF3E54] border-t-[16px] border-l-[16px] border-b-[16px] relative">
          <div className="flex flex-col items-start px-5 py-5 sm:px-10 sm:py-10 xl:px-14 xl:py-16">
            <p className="text-2xl md:text-4xl font-bold text-[#202020]">
              tasks so much easier! I can't
            </p>
            <p className="text-2xl md:text-4xl font-bold text-[#202020]">
              Using this website has made my
            </p>
            <p className="text-2xl md:text-4xl font-bold text-[#202020]">
              imagine my day without it."
            </p>
            <img src={Manger} alt="Manager" className="py-4 sm:py-6" />
            <img src={slider} alt="Slider" className="py-4 sm:py-5" />
          </div>
        </div>

        <div className="border-[#FF3E54] border-t-[16px] border-l-[16px] sm:border-l-0 sm:border-r-[16px] border-b-[16px] mt-5 md:mt-0">
          <img src={image} alt="Manager" className="p-4 max-w-full h-auto" />
        </div>
      </div>
    </div>
  </div>
)}


