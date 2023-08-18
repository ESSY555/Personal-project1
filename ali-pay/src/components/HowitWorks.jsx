import React from "react";
import { phone1, phonebg, vector, vector1 } from "../assets";

const HowitWorks = () => {
  return (
    <div className="min-h-[80vh] px-[5rem] py-[2rem] flex flex-col items-center text-center">
      <div className="mt-[2rem]">
        <h1 className="text-6xl text-primary-green">How Easipay Works</h1>
        <p className="mt-4 text-lg tracking-wide">
          Get started in Three simple steps
        </p>
      </div>
      <div className="flex items-center  w-full flex-col md:flex-row gap-3 mt-[4rem]">
        <div className="flex-1  w-full flex items-center justify-center  relative">
          <img
            src={phonebg}
            alt=""
            className="absolute z-0 w-[500px] h-[500px] "
          />
          <img src={phone1} alt="" className="w-[360px] h-[680px] z-30 " />
        </div>
        <div className="flex-1 ">
          <div className="flex flex-col items-start gap-14 relative px-10 ">
            <div className="flex flex-col items-start gap-4">
              <div className="bg-primary-green rounded-xl flex items-center justify-center font-bold text-lg w-[64px] h-[64px] text-white p-2">1</div>
              <h3 className="mt-2 font-bold">Create Your EasiPay Account</h3>
              <p className="text-gray-400">click here to set up your easipay account</p>
            </div>
            <div className="flex flex-col items-start gap-4">
              <div className="bg-primary-green rounded-xl flex items-center justify-center font-bold text-lg text-white h-[64px] w-[64px] p-2">2</div>
              <h3 className="mt-2 font-bold">Add Employee Data</h3>
              <p className="text-gray-400">your employee data is 100% safe and secure</p>
            </div>
            <div className="flex flex-col items-start gap-4">
              <div className="bg-primary-green rounded-xl flex items-center justify-center font-bold text-lg text-white h-[64px] w-[64px] p-2">3</div>
              <h3 className="mt-2 font-bold">Prepare Your Transaction</h3>
              <p className="text-gray-400">Run payroll: Bulk Salaries and Compliance are done at once!</p>
            </div>
            <img src={vector1} className="absolute -left-5 top-6" alt="" />
            <img src={vector} className="absolute bottom-[7.5rem] md:bottom-[6rem] left-20" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowitWorks;
