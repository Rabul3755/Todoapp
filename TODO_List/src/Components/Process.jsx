import React from "react";
import img1 from "../assets/img1.svg";
import telgram from "../assets/telegram.svg";
import idea from "../assets/idea.svg";
import black from "../assets/Black.svg";
export const Process = () => {
  return (
<div className="xl:mx-12 xxl:px-40 px-6 bg-white py-10">
  <div className="flex flex-col justify-center items-center py-8 text-center">
    <span className="md:text-4xl text-xl sm:text-3xl font-bold opacity-95 text-[#0E1F51]">
      Transform Your Productivity with Our
    </span>
    <span className="md:text-4xl text-xl sm:text-3xl opacity-95 font-bold text-[#0E1F51]">
      Innovative To-Do List Features
    </span>
  </div>

  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
    <div className="bg-[#F7F7F7] rounded-2xl p-6">
      <div className="relative">
        <img className="bg-white p-4 rounded-lg w-[52px] h-[52px]" src={img1} alt="" />
        <span className="absolute right-4 top-2 text-[#0E1F51] text-5xl font-bold opacity-15">01</span>
      </div>
      <p className="text-lg font-bold text-[#0E1F51] mt-4">User-Friendly Interface</p>
      <div className="flex gap-x-1 mt-2 mb-4">
        <hr className="h-1.5 w-12 rounded-lg bg-[#FF3E54] border-none" />
        <hr className="h-1.5 w-5 rounded-lg bg-[#FF3E54] border-none" />
      </div>
      <p className="text-sm text-[#0E1F51]">Our platform offers seamless task management to boost your efficiency.</p>
    </div>
    <div className="bg-[#F7F7F7] rounded-2xl p-6">
      <div className="relative">
        <img className="bg-white p-4 rounded-lg w-[52px] h-[52px]" src={telgram} alt="" />
        <span className="absolute right-4 top-2 text-[#0E1F51] text-5xl font-bold opacity-15">02</span>
      </div>
      <p className="text-lg font-bold text-[#0E1F51] mt-4">Collaborate & Share Effortlessly</p>
      <div className="flex gap-x-1 mt-2 mb-4">
        <hr className="h-1.5 w-12 rounded-lg bg-[#FF3E54] border-none" />
        <hr className="h-1.5 w-5 rounded-lg bg-[#FF3E54] border-none" />
      </div>
      <p className="text-sm text-[#0E1F51]">Invite team members to work together and achieve your goals faster.</p>
    </div>
    <div className="bg-[#F7F7F7] rounded-2xl p-6">
      <div className="relative">
        <img className="bg-white p-4 rounded-lg w-[52px] h-[52px]" src={idea} alt="" />
        <span className="absolute right-4 top-2 text-[#0E1F51] text-5xl font-bold opacity-15">03</span>
      </div>
      <p className="text-lg font-bold text-[#0E1F51] mt-4">Effortless Collaboration</p>
      <div className="flex gap-x-1 mt-2 mb-4">
        <hr className="h-1.5 w-12 rounded-lg bg-[#FF3E54] border-none" />
        <hr className="h-1.5 w-5 rounded-lg bg-[#FF3E54] border-none" />
      </div>
      <p className="text-sm text-[#0E1F51]">Invite team members to work together and achieve your goals faster.</p>
    </div>
    <div className="bg-[#F7F7F7] rounded-2xl p-6">
      <div className="relative">
        <img className="bg-white p-4 rounded-lg w-[52px] h-[52px]" src={black} alt="" />
        <span className="absolute right-4 top-2 text-[#0E1F51] text-5xl font-bold opacity-15">04</span>
      </div>
      <p className="text-lg font-bold text-[#0E1F51] mt-4"> Seamless Access</p>
      <div className="flex gap-x-1 mt-2 mb-4">
        <hr className="h-1.5 w-12 rounded-lg bg-[#FF3E54] border-none" />
        <hr className="h-1.5 w-5 rounded-lg bg-[#FF3E54] border-none" />
      </div>
      <p className="text-sm text-[#0E1F51]">Stay connected and manage your tasks on the go with ease.</p>
    </div>
  </div>
</div>

  )
};
