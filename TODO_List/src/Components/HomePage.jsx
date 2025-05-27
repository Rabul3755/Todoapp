import React from "react";
import hero from "../assets/hero.svg";
import deatil from "../assets/deatil.svg";
import Icon from "../assets/Icon.svg";
import Logo_strip from "../assets/Logo_strip.svg";
import Arrows from "../assets/Arrows.svg";
import pagination from "../assets/pagination.svg";
export const HomePage = () => {
  return (
    <div className="flex justify-around items-center flex-col bg-[#F7F7FB] xl:mx-12 py-10">
      <div className="flex flex-col items-center justify-center  ">
        <p className="lg:text-5xl md:text-4xl text-2xl  text-[#170F49] font-bold">
          Simplify Your Life with Our{" "}
        </p>
        <p className="lg:text-5xl md:text-4xl text-2xl text-[#170F49] font-bold text-center">
          Todo App
        </p>
        <p className="lg:text-lg font-medium pt-7  ps-3  text-[#6F6C90]">
          Stay organized and boost your productivity with our intuitive todo
          website.
        </p>
        <p className="lg:text-lg  font-medium ps-3   text-[#6F6C90]">
          Experience a modern approach to task management that fits your
          lifestyle.
        </p>
      </div>

      <div className="  flex  justify-around items-center gap-6 mt-6">
        <button className=" relative sm:px-12 px-6 py-2 sm:py-3.5 border border-[#FF3E54]  rounded-full font-semibold text-white  bg-[#FF3E54]">
          Get started
          <span className="absoulte  "></span>
        </button>
        <button className=" sm:px-12 px-6 py-2 sm:py-3.5  border border-[#FF3E54] rounded-full font-semibold text-[#FF3E54]   ">
          {" "}
          Learn More
        </button>
      </div>
      <div className="flex flex-wrap lg:flex-nowrap   justify-center lg:mx-5 mt-10 mx-3  gap-4  ">
        <div className="   flex-col justify-between max-w-3xl  sm:px-15 sm:py-17 px-8 py-10  rounded-4xl bg-[#FF3E54]">
          <ul className="flex flex-col leading-none space-y-3">
            <li className="font-medium  text-5xl lg:text-[98px] opacity-75 text-[#FFFFFF]">
              Organize.
            </li>
            <li className="font-medium text-5xl  lg:text-[98px] text-[#FFFFFF]">Achieve.</li>
            <li className="font-medium text-5xl  lg:text-[98px] text-[#FFFFFF]">Relax.</li>
          </ul>
          <p className="text-[#FFFFFF] opacity-75 inline-flex mt-9  sm:text-xl">
            Turn clutter into clarity, chaos into control, and dreams into
            done.
          </p>
          <p className="text-[#FFFFFF] opacity-75 inline-flex    sm:text-xl">bold visions into market success</p>
          <div className="sm:flex sm:gap-x-5   space-y-4 sm:space-y-0 mt-5  lg:mt-15">
            <div className=" px-6 py-3.5 max-w-3xs text-center  bg-white text-black rounded-full font-semibold ">
              Get Started today
            </div>
            <div className=" px-6 py-3.5 max-w-3xs text-center bg-[#FFFFFF1A]  rounded-full font-semibold text-white ">
              Discover Features
            </div>
          </div>
        </div>
        <div
          className="  bg-[#FF3E54] bg-cover bg-center rounded-2xl text-white flex flex-col justify-between p-5 sm:p-8 lg:max-w-sm min-h-[550px] w-full  "
          style={{ backgroundImage: `url(${hero})` }}
        >
          <div className="flex justify-between relative ">
            <ul className="">
              <li className="text-4xl opacity-75 text-white font-bold">
                Your Tasks.
              </li>
              <li className="text-4xl text-white font-bold">Our Tools.</li>
            </ul>
            <img className=" absolute right-1 top-" src={pagination} alt="" />
          </div>

          <img src={Arrows} alt="Arrows" />

          <div className="flex justify-center">
            <img src={deatil} alt="info" />
            <img className="mt-5" src={Icon} alt="video icon" />
          </div>
        </div>
      </div>
      <div className=" flex flex-col justify-center items-center pt-14">
        <img src={Logo_strip} alt="" />
      </div>
    </div>
  );
};
