import React from "react";
import { contactpoka, contactbg } from "../assets";

const Contact = () => {
  return (
    <div className="w-full flex flex-col px-[2rem] md:px-[5rem] py-[2rem] md:flex-row items-center min-h-[80vh] relative">
      <div className="flex flex-col items-center mt-[6rem] md:mt-0">
        <h1 className="w-full text-5xl z-20 text-center md:text-left  md:text-5xl md:w-1/2 leading-normal text-primary-green">
          Get An Exclusive Demo of EaziPay
        </h1>
        <p className="w-full text-center md:text-left  md:w-1/2 text-lg leading-8 mt-6">
          Our greatest priority is to put you and your business first. Let’s
          show you how we can help.
        </p>
      </div>
      <div className="bg-white flex flex-col items-center w-[550px]  shadow-lg px-4 py-7 rounded-lg  h-full">
        <div className="flex flex-col items-center">
          <h3 className="text-3xl text-primary-green text-center font-bold">
            First Thing first
          </h3>
          <p className="text-lg mt-6 leading-8 w-3/4 text-center">
            We want to serve you better. Tell us a bit about yourself or company
          </p>
        </div>
        <div className="w-3/4 md:w-full border-gray-200 border-2 bg-white gap-3 p-2 rounded-md flex items-center mt-4">
          <button className="flex-1 bg-primary-green rounded-md py-2 text-center text-white">
            Indiviual
          </button>
          <button className="flex-1 bg-gray-200 text-black rounded-md py-2 text-center ">
            Company
          </button>
        </div>
        <div className="mt-6 flex flex-col w-3/4 items-center md:w-full gap-6">
          <input type="text" placeholder="First Name" className="px-4 py-3 w-full rounded-lg border-gray-300 border-2 outline-none" />
          <input type="text" placeholder="First Name" className="px-4 py-3 w-full rounded-lg border-gray-300 border-2 outline-none" />
          <input type="email" placeholder="Email" className="px-4 py-3 w-full rounded-lg border-gray-300 border-2 outline-none" />
          <input type="text" placeholder="Job Title" className="px-4 py-3 w-full rounded-lg border-gray-300 border-2 outline-none" />
          <input type="text" placeholder="Company Title" className="px-4 py-3 w-full rounded-lg border-gray-300 border-2 outline-none" />
        <button className="bg-primary-green px-3 py-3 rounded-full text-white w-full">Request Demo</button>
        </div>
      </div>
      <img src={contactpoka} className="absolute -z-10 left-0 top-0 md:top-5" alt="" />
      <img src={contactbg} className="absolute right-0 -z-10 top-0" alt="" />
    </div>
  );
};

export default Contact;
