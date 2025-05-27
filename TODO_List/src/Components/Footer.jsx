import React from "react";
import logo from "../assets/logo.svg";
import insta from "../assets/SocialMedia/insta.png";
import facebook from "../assets/SocialMedia/Facebook.png";
import Linkdin from "../assets/SocialMedia/linkedin.png";
import x from "../assets/SocialMedia/x.png";
import youtube from "../assets/SocialMedia/youtube.png";

export const Footer = () => {
  return (
    <div className="bg-white px-6 xl:mx-12 sm:px-10 md:px-16 lg:px-24 py-10 flex flex-col md:flex-row gap-10 md:gap-16 lg:gap-24">
      <div className="md:w-1/2 lg:w-2/5">
        <img src={logo} alt="Footer Logo" className="w-[150px] h-auto" />
        <p className="mt-4 text-sm text-gray-700">
          Subscribe to our newsletter for the latest features and updates
          delivered to you.
        </p>
        <div className="flex flex-col sm:flex-row items-start sm:items-center mt-4 gap-3 sm:gap-4">
          <input
            type="text"
            className="border border-black rounded-md px-4 py-2 w-full sm:w-auto flex-1"
            placeholder="Your Email here"
          />
          <button className="px-6 py-2 bg-[#FF3E54] text-white rounded-md w-full sm:w-auto">
            Join
          </button>
        </div>
        <p className="mt-2 text-sm text-gray-600">
          By subscribing, you consent to our Privacy Policy and agree to receive
          updates.
        </p>
      </div>

      <div className="flex flex-wrap w-full md:w-1/2 lg:w-3/5 gap-10 justify-start sm:justify-between">
        <div>
          <p className="mb-3 font-semibold text-base">Useful Links</p>
          <ul className="text-sm text-gray-700">
            <li className="py-1 cursor-pointer">Home Page</li>
            <li className="py-1 cursor-pointer">About Us</li>
            <li className="py-1 cursor-pointer">Contact</li>
            <li className="py-1 cursor-pointer">Blog Post</li>
            <li className="py-1 cursor-pointer">FAQ's</li>
          </ul>
        </div>

        <div>
          <p className="mb-3 font-semibold text-base">Resources</p>
          <ul className="text-sm text-gray-700">
            <li className="py-1 cursor-pointer">Help Center</li>
            <li className="py-1 cursor-pointer">User Guide</li>
            <li className="py-1 cursor-pointer">Community Forum</li>
            <li className="py-1 cursor-pointer">Feedback</li>
            <li className="py-1 cursor-pointer">Support</li>
          </ul>
        </div>

        <div>
          <p className="mb-3 font-semibold text-base">Connect With Us</p>
          <ul className="text-sm text-gray-700">
            <li className="py-1 cursor-pointer flex items-center gap-2">
              <img src={facebook} alt="Facebook" className="w-5 h-5" /> Facebook
            </li>
            <li className="py-1 cursor-pointer flex items-center gap-2">
              <img src={insta} alt="Instagram" className="w-5 h-5" /> Instagram
            </li>
            <li className="py-1 cursor-pointer flex items-center gap-2">
              <img src={Linkdin} alt="Linkedin" className="w-5 h-5" /> Linkedin
            </li>
            <li className="py-1 cursor-pointer flex items-center gap-2">
              <img src={x} alt="X" className="w-5 h-5" /> X
            </li>
            <li className="py-1 cursor-pointer flex items-center gap-2">
              <img src={youtube} alt="Youtube" className="w-5 h-5" /> Youtube
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
