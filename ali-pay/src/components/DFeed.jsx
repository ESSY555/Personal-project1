import React from "react";
import {
  Dashboard,
  chart,
  dashCash,
  dashside,
  dashreq,
  dashf,
  search,
  filter,
  bglogo,
  payclip,
  yellowm,
  wifi,
  bluep,
  electricity,
} from "../assets";


import { FaEye } from "react-icons/fa";

const DFeed = () => {
  return (
    <div className=" left-0 w-[100vw] px-[2rem] relative top-[10vh] md:left-[16vw] min-h-[100vh] -z-30 overflow-y-auto md:w-[80vw] p-[3rem] md:px-[5rem] ">
      <div>
        <h3 className="font-bold text-3xl">Welcome Abasiama</h3>
        <p className="mt-4">Pay and manage your employee in minutes</p>
      </div>
      <div className="flex gap-5 items-center justify-between">
        <div className="w-full flex flex-col justify-between">
          <div className="bg-primary-green px-8 my-6 w-full text-white  rounded-3xl py-[2rem]">
            <p className="font-normal mb-5">Wallet Balance</p>
            <div className="flex-col md:flex-row gap-5 md:gap-0 flex justify-between">
              <h3 className="font-bold justify-between md:justify-normal text-4xl flex gap-5 items-center">
                N12,560,078.00 <FaEye fontSize={13} />{" "}
              </h3>

              <button className="bg-[#d9ebcd]  text-primary-green rounded-full px-3 py-3">
                Fund Wallet
              </button>
            </div>
          </div>
<div className="flex md:hidden flex-wrap py-4 px-3 border-2 justify-around items-center gap-[2rem] border-gray-200 rounded-xl">
  <div className="flex w-[108px] h-[84px] flex-col gap-3 items-center">
    <img src={dashCash} alt="" />
    <p  className="text-center font-medium">Pay Salaries</p>
  </div>
  <div className="flex w-[108px] h-[84px] flex-col gap-3 items-center">
    <img src={dashside} alt="" />
    <p  className="text-center font-medium">Add Employee</p>
  </div><div className="flex w-[108px] h-[84px] flex-col gap-3 items-center">
    <img src={payclip} alt="" />
    <p  className="text-center font-medium">Send Payclips</p>
  </div><div className="flex w-[108px] h-[84px] flex-col gap-3 items-center">
    <img src={yellowm} alt="" />
    <p  className="text-center font-medium">Edit Salaries</p>
  </div><div className="flex w-[108px] h-[84px] flex-col gap-3 items-center">
    <img src={dashreq} alt="" />
    <p  className="text-center font-medium">Get a Loan</p>
  </div><div className="flex w-[108px] h-[84px] flex-col gap-3 items-center">
    <img src={dashf} alt="" />
    <p  className="text-center font-medium">Make a Transfer</p>
  </div><div className="flex w-[108px] h-[84px] flex-col gap-3 items-center">
    <img src={bluep} alt="" />
    <p  className="text-center font-medium">Airtime</p>
  </div><div className="flex w-[108px] h-[84px] flex-col gap-3 items-center">
    <img src={wifi} alt="" />
    <p  className="text-center font-medium">Data</p>
  </div>
  <div className="flex w-[108px] h-[84px] flex-col gap-3 items-center">
    <img src={electricity} alt="" />
    <p  className="text-center font-medium">Electricity</p>
  </div>
</div>

          <div className=" hidden md:flex gap-8 items-center justify-between  my-6 w-full px-4 rounded-xl py-5">
            <div className="px-8 flex flex-col items-center text-center gap-3 py-3 rounded-lg shadow-md">
              <img src={dashside} alt="" />
              <p>Add Employee</p>
            </div>
            <div className="px-8 flex flex-col items-center text-center gap-3 py-3 rounded-lg shadow-md">
              <img src={dashCash} alt="" />
              <p>Pay Salaries</p>
            </div>
            <div className="px-8 flex flex-col items-center text-center gap-3 py-3 rounded-lg shadow-md">
              <img src={dashf} alt="" />
              <p>Pay Compliances</p>
            </div>
            <div className="px-8 flex flex-col items-center text-center gap-3 py-3 rounded-lg shadow-md">
              <img src={dashreq} alt="" />
              <p>Quick Loan</p>
            </div>
          </div>


        </div>
        <div className="hidden md:block">
          <img src={Dashboard} className="w-[358px] h-[454px]" alt="" />
        </div>
      </div>
      <div className="w-full">
        <img className="w-full object-cover" src={chart} alt="" />
      </div>
      <div className="mb-[1rem]">
        <h3 className="font-bold text-3xl">Recent Activities</h3>
        <div className="flex justify-between items-center gap-3 ">
          <div className="flex justify-between  items-center border-2 border-gray-300 rounded-full   mt-5 flex-1 w-full">
            <input
              type="text"
              className="flex-1 py-4 w-full h-full px-4  rounded-tl-full rounded-bl-full"
              placeholder="search employees"
            />
            <div className="bg-[#d9ebe5] px-8 py-4 rounded-tr-full rounded-br-full">
              <img src={search} alt="" />
            </div>
          </div>
          <div className="hidden mt-5 bg-white px-3 py-4 border-2 border-gray-300 rounded-md shadow-md md:flex items-center gap-3">
            <p>filter</p>
            <img src={filter} alt="" />
          </div>
        </div>

        <div className="mt-8">
          <p className="text-lg mt-7 font-medium">Wednesday , November 2022</p>
          <div className="px-[2rem] py-4 shadow-lg drop-shadow-lg flex flex-col gap-5  bg-white rounded-xl mt-4">
            <p> payroll</p>

            <div className="flex w-full justify-between flex-col md:flex-row">
              <div className="flex self-start items-start flex-col  md:self-end gap-4 md:items-center">
                <img src={bglogo} alt="" /> <p className="text-base md:text-lg">Badmus kenmis</p>
              </div>
              <div className="flex  flex-col items-start gap-4">
                <p>Activity</p>
                <h3 className="text-base md:text-lg  font-bold">Added new Bonus</h3>
              </div>
              <div className="flex   flex-col items-start gap-4">
                <p>Employee</p>
                <h3 className="text-lg font-bold"> 52</h3>
              </div>
              <div className="flex  flex-col items-start gap-4">
                <p>Time</p>
                <h3 className="text-lg font-bold"> 16:05</h3>
              </div>
            </div>
          </div>
          <div className="px-[2rem] mt-8 py-4 shadow-lg drop-shadow-lg flex flex-col gap-5  bg-white rounded-xl ">
            <p> Employee ManageMent</p>

            <div className="flex w-full justify-between flex-col md:flex-row">
              <div className="flex  self-start items-start flex-col  md:self-end gap-4 md:items-center">
                <img src={bglogo} alt="" /> <p>Badmus kenmis</p>
              </div>
              <div className="flex  flex-col items-start gap-4">
                <p>Activity</p>
                <h3 className="text-lg font-bold">Added new Employee</h3>
              </div>
              <div className="flex  flex-col items-start gap-4">
                <p>Employee</p>
                <h3 className="text-lg font-bold"> 04</h3>
              </div>
             
            </div>
          </div>
        </div>

        <div className="mt-8">
          <p className="text-lg font-medium">Friday , November 04 2022</p>
          <div className="px-[2rem] py-4 shadow-lg drop-shadow-lg flex flex-col gap-5  bg-white rounded-xl mt-4">
            <p> Bonus</p>

            <div className="flex w-full justify-between flex-col md:flex-row">
              <div className="flex  self-start items-start flex-col  md:self-end gap-4 md:items-center">
                <img src={bglogo} alt="" /> <p>Badmus kenmis</p>
              </div>
              <div>
                <p>Activity</p>
                <h3 className="text-lg font-bold">Added new Bonus</h3>
              </div>
              <div>
                <p>Bonus Name</p>
                <h3 className="text-lg font-bold"> Xmas Bonus</h3>
              </div>
            </div>
          </div>
          <div className="px-[2rem] py-4 shadow-lg drop-shadow-lg flex flex-col gap-5  bg-white rounded-xl mt-4">
            <p> Wallet</p>

            <div className="flex w-full justify-between flex-col md:flex-row">
              <div className="flex  self-start items-start flex-col  md:self-end gap-4 md:items-center">
                <img src={bglogo} alt="" /> <p>Badmus kenmis</p>
              </div>
              <div>
                <p>Activity</p>
                <h3 className="text-lg font-bold">Paid Novemember Salary</h3>
              </div>
              <div>
                <p>Amount</p>
                <h3 className="text-lg text-red-600 font-bold"> N11,1678,900.00</h3>
              </div>
              <div>
                <p>Time</p>
                <h3 className="text-lg  font-bold"> 15:31</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DFeed;
