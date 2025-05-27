import React, { useState } from "react";
import logo from "../assets/logo.svg";
import menuIcon from "../assets/humburger_menu.svg";
import PopUpForm from "./Pages/PopUpForm";
export const Navbar = ({ setAllFormData, allFormData }) => {
    const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const [showForm, setShowForm] = useState(false);
  return (
    <div className="lg:h-25 h-20 bg-white flex justify-between lg:justify-around items-center lg:mx-12 ">
      <img src={logo}  alt="logo" />
      <button
        className="relative w-8 h-8 flex flex-col justify-cente mr-5 items-center group lg:hidden"
        aria-label="Toggle Menu"
      >
        <span className="bg-black h-0.5 w-8 rounded transition-transform duration-300 ease-in-ou" />
        <span className="bg-black h-0.5 w-8 rounded my-1 transition-opacity duration-300 ease-in-out" />
        <span className="bg-black h-0.5 w-8 rounded transition-transform duration-300 ease-in-out" />
      </button>
      <ul className="lg:flex justify-around items-center md:space-x-6 hidden ">
        <li className="text-blue-950 font-semibold ">About us</li>
        <li className="text-blue-950 font-semibold ">Features</li>
        <li className="text-blue-950 font-semibold ">More options </li>
        <li className="text-blue-950 font-semibold ">contact</li>
      </ul>
      <div className=" items-center justify-around lg:flex hidden md:gap-4">
        <button className="h-11 border border-[#FF3E54] rounded-lg text-[#FF3E54] w-32.5">
          Log Up
        </button>
        <button className="h-11 text-white rounded-lg bg-[#FF3E54] w-[130px]" onClick={() => setShowForm(true)}>
          sign In
        </button>
      </div>
       {showForm && (
        <PopUpForm  showForm={showForm}  allFormData={allFormData} setAllFormData={setAllFormData} setShowForm={setShowForm} />
      )}
    </div>
  );
};
