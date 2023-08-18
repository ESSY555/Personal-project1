import React from "react";
import { logo } from "../assets";
import {
  FaTwitter,
  FaFacebookF,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div
      style={{ borderTop: "1px solid gray" }}
      className=" items-start min-h-[50vh] py-[1.5rem] border-top-2 px-[5rem] flex md:items-center flex-col md:flex-row"
    >
      <div className="flex flex-col gap-10 md:gap-5">
        <img src={logo} alt="" className="h-[32px] w-[122px]" />
        <p className="w-3/4 text-lg text-gray-400">
          Copyright © 2023 Eazipay. All rights reserved
        </p>
        <div className="flex gap-6 md:gap-4 items-center ">
          <div classsName="w-[50px] h-10 rounded-full bg-gray-400">
            <FaInstagram size={28} />
          </div>
          <div classsName="w-8 h-8 rounded-full bg-gray-300">
            <FaTwitter size={28} />
          </div>
          <div classsName="w-8 h-8 rounded-full bg-gray-300">
            <FaLinkedinIn size={28} />
          </div>
          <div classsName="w-8 h-8 rounded-full bg-gray-300">
            <FaFacebookF size={28} />{" "}
          </div>
        </div>
      </div>
      <div className="flex mt-4 md:mt-0 flex-col gap-5 md:gap-0 md:flex-row justify-around text-left flex-1">
        <div className="flex-col flex gap-5 items-start">
          <h3 className="font-bold text-lg">Products</h3>
          <a href="#" className="text-left">Indiviual</a>
          <a href="#">Business</a>
          <a href="#">Pricing</a>
          <a href="#">Request Demo</a>
        </div>
        <div className="flex-col flex gap-5 items-start">
          <h3 className="font-bold text-lg">Legal</h3>
          <a href="#">Privacy Policy</a>
          <a href="#">Terms of Service</a>
        </div>
        <div className="flex-col flex gap-5 items-start">
          <h3 className="font-bold text-lg">Resources</h3>
          <a href="#">FAQ</a>
          <a href="#"> Blog</a>
          <a href="#">Career</a>
          <a href="#">Customer Services</a>
        </div>
        <div className="flex-col flex gap-5 items-start">
          <h3 className="font-bold text-lg">Contact Us</h3>
         <p>easypay@gmail.com</p>
     <p>+234 816 878 9518</p>
      <input type="email" placeholder="your email address" className="px-3 py-2 rounded-full border-none outline-none bg-gray-300" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
